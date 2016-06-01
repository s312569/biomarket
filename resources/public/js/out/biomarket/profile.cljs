(ns ^:figwheel-always biomarket.profile
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [ajax.core :refer [POST]]
            [cljs.core.async :refer [put! <! >! chan pub sub unsub]]
            [clojure.string :as str]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.string :refer [blank?]]
            [taoensso.sente  :as sente :refer (cb-success?)]
            [biomarket.utilities :as ut]
            [biomarket.server :as server]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; utilities
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn edit-icon
  [owner]
  (dom/i #js {:className "fa fa-pencil-square-o"
              :onClick #(om/set-state! owner :editing true)
              :style #js {:padding-left "10px"}}))

(defn show-inputs
  [owner inputs func ut]
  (let [invalid (some identity (map :invalid (vals inputs)))
        btn (clj->js (if-not invalid
                       {:className "btn btn-primary"
                        :onClick #(func owner)}
                       {:className "btn btn-primary" :disabled "disabled"}))]
    (dom/div
     #js {:className (if-not invalid
                       "form-group has-success"
                       "form-group has-error")}
     (apply
      dom/div
      nil
      (concat (map (fn [[k element]]
                     (dom/input
                      #js {:className "form-control"
                           :value (:value element)
                           :placeholder (:placeholder element)
                           :onKeyDown (ut/capture-return
                                       (fn [_] (func owner)))
                           :onChange
                           #(ut/on-change-function owner ut k element %)}))
                   inputs)
              (list (dom/a btn "Done"))))
     (apply dom/div nil (map (fn [[k e]]
                               (if (seq (:invalid e))
                                 (dom/div nil (first (:invalid e)))))
                             inputs)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; heading
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn submit-heading
  [owner]
  (let [i (om/get-state owner :inputs)
        f (fn [x]
            (ut/log x)
            (if (= :success (:status x))
              (om/set-state! owner :editing false)
              (set! js/window.location "/error")))]
    (server/save-data {:type :name-update
                       :data {:first (:value (:first i))
                              :last (:value (:last i))
                              :middle (:value (:middle i))}}
                      f)))

(defn heading
  [user owner]
  (reify
    om/IInitState
    (init-state [_]
      {:editing false
       :user user
       :inputs {:first {:value ""
                        :invalid nil
                        :placeholder "First name"
                        :tests [[#(not (blank? %))
                                 "First name cannot be blank"]]}
                :middle {:value nil
                         :invalid nil
                         :placeholder "Middle name"}
                :last {:value ""
                       :invalid nil
                       :placeholder "Last name"
                       :tests [[#(not (blank? %))
                                "Last name cannot be blank"]]}}})
    om/IWillMount
    (will-mount [_]
      (ut/register-loop owner ::heading-update))
    om/IWillUnmount
    (will-unmount [_]
      (ut/unsubscribe owner ::heading-update))
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (om/set-state! owner :inputs
                     (-> (assoc-in (om/get-state owner :inputs)
                                   [:first :value] (:first np))
                         (assoc-in [:last :value] (:last np))
                         (assoc-in [:middle :value] (:middle np))))
      (om/set-state! owner :user np))
    om/IRenderState
    (render-state [_ {:keys [editing inputs]}]
      (let [first (:first inputs)
            last (:last inputs)
            middle (:middle inputs)]
        (if-not editing
          (dom/div
           #js {:className "h2"
                :style #js {:padding-bottom "20px"}}
           (str (:value first) " " (:value middle) " " (:value last))
           (edit-icon owner))
          (dom/div
           #js {:className "form-inline"
                :style #js {:padding-bottom "40px"}}
           (show-inputs owner inputs submit-heading ::heading-update)))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; address
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn submit-address
  [owner]
  (let [i (om/get-state owner :inputs)
        f (fn [x]
            (if (= :success (:status x))
              (om/set-state! owner :editing false)
              (set! js/window.location "/error")))]
    (server/save-data {:type :address-update
                       :data {:address1 (:value (:address1 i))
                              :address2 (:value (:address2 i))
                              :address3 (:value (:address3 i))}}
                      f)))

(defn address
  [user owner]
  (reify
    om/IInitState
    (init-state [_]
      {:editing false
       :user user
       :inputs {:address1 {:value ""
                           :invalid nil
                           :placeholder "Address line 1"}
                :address2 {:value nil
                           :invalid nil
                           :placeholder "Address line 2"}
                :address3 {:value ""
                           :invalid nil
                           :placeholder "Address line 3"}}})
    om/IWillMount
    (will-mount [_]
      (ut/register-loop owner ::address-update))
    om/IWillUnmount
    (will-unmount [_]
      (ut/unsubscribe owner ::address-update))
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (om/set-state! owner :inputs
                     (-> (assoc-in (om/get-state owner :inputs)
                                   [:address1 :value] (:address1 np))
                         (assoc-in [:address2 :value] (:address2 np))
                         (assoc-in [:address3 :value] (:address3 np))))
      (om/set-state! owner :user np))
    om/IRenderState
    (render-state [_ {:keys [editing inputs]}]
      (let [address1 (:value (:address1 inputs))
            address2 (:value (:address2 inputs))
            address3 (:value (:address3 inputs))]
        (dom/div
         nil
         (if editing
           (dom/form #js {:className "form"}
                     (show-inputs owner inputs submit-address ::address-update))
           (if (every? blank? (list address1 address2 address3))
             (dom/div nil "No address information provided." (edit-icon owner))
             (dom/div
              nil
              (dom/div nil address1 (edit-icon owner))
              (dom/div nil address2)
              (dom/div nil address3)))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; city
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn submit-city
  [owner]
  nil)

(defn city
  [user owner]
  (reify
    om/IInitState
    (init-state [_]
      {:user user
       :inputs {:city {:value "" :invalid nil :placeholder "City"}}
       :editing false})
    om/IRenderState
    (render-state [_ {:keys [user inputs editing]}]
      (let [city (:value (:city inputs))]
        (dom/div
         nil
         (if editing
           (dom/form #js {:className "form"}
                     (show-inputs owner inputs submit-city ::city-update))
           (if (blank? city)
             (dom/div nil "No city information provided." (edit-icon owner))
             (dom/div nil city))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; profile picture
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn profile-pic
  [user owner]
  (om/component
   (dom/div
    nil
    (dom/img #js {:src "img/human.png"
                  :style #js {:margin "5px"}})
    (dom/a #js {:className "btn btn-default"}
           "Upload a picture."))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; profile view
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- get-user-info
  [owner]
  (server/get-data owner {:type :user-data}
                   (fn [x]
                     (om/set-state! owner :user (:data x)))))

(defn profile-view
  [_ owner]
  (reify
    om/IInitState
    (init-state [_]
      {:user nil})
    om/IWillMount
    (will-mount [_]
      (get-user-info owner))
    om/IRenderState
    (render-state [_ {:keys [user]}]
      (ut/log (om/get-state owner :user))
      (dom/div
       #js {:className "panel panel-default"}
       (dom/div
        #js {:className "panel-body"}
        (om/build heading user)
        (dom/div
         #js {:className "row"}
         (dom/div
          #js {:className "col-md-3"}
          (om/build profile-pic user))
         (dom/div
          #js {:className "col-md-6"}
          (dom/table
           nil
           (dom/tbody
            nil
            (dom/tr
             nil
             (dom/td #js {:style #js {:vertical-align "top"}}
                     (dom/h3 #js {:style #js {:display "inline"}} "Address:"))
             (dom/td #js {:style #js {:padding-left "30px"}} (om/build address user)))
            (dom/tr
             nil
             (dom/td #js {:style #js {:vertical-align "top"}}
                     (dom/h3 #js {:style #js {:display "inline"}} "City:"))
             (dom/td #js {:style #js {:padding-left "30px"}}
                     (om/build city user))))))))))))
