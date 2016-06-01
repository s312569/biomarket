(ns ^:figwheel-always biomarket.profile
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [ajax.core :refer [POST]]
            [cljs.core.async :refer [put! <! >! chan pub sub unsub timeout]]
            [clojure.string :as str]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.string :refer [blank?]]
            [taoensso.sente  :as sente :refer (cb-success?)]
            [biomarket.utilities :as ut]
            [biomarket.server :as server]
            [biomarket.skills :refer [skill-tags]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; utilities
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn edit-icon
  ([owner] (edit-icon owner nil))
  ([owner size]
   (dom/i #js {:className (if size (str "fa fa-pencil-square-o " size)
                              "fa fa-pencil-square-o")
               :onClick #(om/set-state! owner :editing true)
               :style #js {:padding-left "10px"}})))

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

(defn submit
  [owner data]
  (server/save-data data (fn [x] (if (= :success (:status x))
                                   (om/set-state! owner :editing false)
                                   (set! js/window.location "/error")))))

(defn simple-input
  [[ut inputs etext sfunc] owner]
  (reify
    om/IInitState
    (init-state [_]
      {:inputs inputs
       :editing false})
    om/IWillMount
    (will-mount [_]
      (ut/register-loop owner ut))
    om/IWillUnmount
    (will-unmount [_]
      (ut/unsubscribe owner ut))
    om/IRenderState
    (render-state [_ {:keys [inputs editing]}]
      (let [k (first (keys inputs))
            v (:value (k inputs))]
        (dom/div
         nil
         (if editing
           (dom/form #js {:className "form-inline"}
                     (show-inputs owner inputs sfunc ut))
           (if (blank? v)
             (dom/div nil etext (edit-icon owner))
             (dom/div nil v (edit-icon owner)))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; heading
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn submit-heading
  [owner]
  (let [i (om/get-state owner :inputs)]
    (submit owner {:type :name-update
                   :data {:first (:value (:first i))
                          :last (:value (:last i))
                          :middle (:value (:middle i))}})))

(defn heading
  [user owner]
  (reify
    om/IInitState
    (init-state [_]
      {:editing false
       :inputs {:first {:value (:first user)
                        :invalid nil
                        :placeholder "First name"
                        :tests [[#(not (blank? %))
                                 "First name cannot be blank"]]}
                :middle {:value (:middle user)
                         :invalid nil
                         :placeholder "Middle name"}
                :last {:value (:last user)
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
    om/IRenderState
    (render-state [_ {:keys [editing inputs]}]
      (let [first (:first inputs)
            last (:last inputs)
            middle (:middle inputs)
            sfunc (fn [o] )]
        (if-not editing
          (dom/div
           #js {:className "h2"
                :style #js {:padding-bottom "20px"}}
           (str (:value first) " " (:value middle) " " (:value last))
           (edit-icon owner "fa-1x"))
          (dom/div
           #js {:className "form-inline"
                :style #js {:padding-bottom "40px"}}
           (show-inputs owner inputs submit-heading ::heading-update)))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; address
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn submit-address
  [owner]
  (let [i (om/get-state owner :inputs)]
    (submit owner {:type :address-update
                   :data {:address1 (:value (:address1 i))
                          :address2 (:value (:address2 i))
                          :address3 (:value (:address3 i))}})))

(defn address
  [user owner]
  (reify
    om/IInitState
    (init-state [_]
      {:editing false
       :user user
       :inputs {:address1 {:value (:address1 user)
                           :invalid nil
                           :placeholder "Address line 1"}
                :address2 {:value (:address2 user)
                           :invalid nil
                           :placeholder "Address line 2"}
                :address3 {:value (:address3 user)
                           :invalid nil
                           :placeholder "Address line 3"}}})
    om/IWillMount
    (will-mount [_]
      (ut/register-loop owner ::address-update))
    om/IWillUnmount
    (will-unmount [_]
      (ut/unsubscribe owner ::address-update))
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

(defn city
  [user]
  (let [sfunc (fn [owner]
                (let [i (om/get-state owner :inputs)]
                  (submit owner {:type :city-update :data {:city (:value (:city i))}})))
        inputs {:city {:value (:city user) :invalid nil :placeholder "City"}}]
    (om/build simple-input [::city-update inputs "No city information provided." sfunc])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; country
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn country
  [user]
  (let [sfunc (fn [owner]
                (let [i (om/get-state owner :inputs)]
                  (submit owner {:type :country-update :data {:country (:value (:country i))}})))
        inputs {:country {:value (:country user) :invalid nil :placeholder "Country"}}]
    (om/build simple-input [::country-update inputs "No country information provided." sfunc])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; postcode
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn postcode
  [user]
  (let [sfunc (fn [owner]
                (let [i (om/get-state owner :inputs)]
                  (submit owner {:type :postcode-update :data {:postcode (:value (:postcode i))}})))
        inputs {:postcode {:value (:postcode user) :invalid nil :placeholder "Postcode"}}]
    (om/build simple-input [::postcode-update inputs "No postcode information provided." sfunc])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; phone
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn phone
  [user]
  (let [sfunc (fn [owner]
                (let [i (om/get-state owner :inputs)]
                  (submit owner {:type :phone-update :data {:phone (:value (:phone i))}})))
        inputs {:phone {:value (:phone user) :invalid nil :placeholder "Phone"}}]
    (om/build simple-input [::phone-update inputs "No phone information provided." sfunc])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; skills
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn skills
  [user owner]
  (reify
    om/IInitState
    (init-state [_]
      {:all-skills nil
       :editing false})
    om/IWillMount
    (will-mount [_]
      (server/get-data owner {:type :all-skills}
                       #(om/set-state! owner :all-skills (:data %))))
    om/IRenderState
    (render-state [_ {:keys [all-skills editing]}]
      (when-not false
        (dom/div
         nil
         (dom/a #js {:onClick #(om/set-state! owner :editing true)}
                "Add some skills")
         (if editing
           (om/build skill-tags [{:skills (filter #(= (:type %) "bskill") all-skills)} {}])))))))

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
                   (fn [r] (om/set-state! owner :user (:data r)))))

(defn profile-view
  [user owner]
  (reify
    om/IInitState
    (init-state [_]
      {:user nil})
    om/IWillMount
    (will-mount [_]
      (get-user-info owner))
    om/IRenderState
    (render-state [_ {:keys [user]}]
      (if-not user
        (om/build ut/waiting nil)
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
            #js {:className "col-md-4"}
            (dom/table
             #js {:style #js {:border-spacing "20px"
                              :border-collapse "separate"}}
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
                       (city user)))
              (dom/tr
               nil
               (dom/td #js {:style #js {:vertical-align "top"}}
                       (dom/h3 #js {:style #js {:display "inline"}} "Country:"))
               (dom/td #js {:style #js {:padding-left "30px"}}
                       (country user)))
              (dom/tr
               nil
               (dom/td #js {:style #js {:vertical-align "top"}}
                       (dom/h3 #js {:style #js {:display "inline"}} "Postcode:"))
               (dom/td #js {:style #js {:padding-left "30px"}}
                       (postcode user)))
              (dom/tr
               nil
               (dom/td #js {:style #js {:vertical-align "top"}}
                       (dom/h3 #js {:style #js {:display "inline"}} "Phone:"))
               (dom/td #js {:style #js {:padding-left "30px"}}
                       (phone user))))))
           (dom/div
            #js {:className "col-md-5"}
            (dom/h3 nil "Skills:")
            (om/build skills user)))))))))
