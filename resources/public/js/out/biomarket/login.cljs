(ns ^:figwheel-always biomarket.login
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan pub sub]]
            [om.core :as om :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [om.dom :as dom :include-macros true]
            [biomarket.utilities :refer [log pub-info] :as ut]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; server calls
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- user-exists?
  [owner email]
  (let [h (fn [{:keys [status id result]}]
            (if (and (= "success" status) result)
              (let [ni (update-in (om/get-state owner :inputs)
                                  [:email :invalid]
                                  #(if (false? %)
                                     '("An account for that email already exists.")
                                     (cons "An account for that email already exists."
                                           %)))]
                (om/set-state! owner :inputs ni))))]
    (ut/post-params "/user-exists" {:email email} h)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; register
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn rinputs
  [owner]
  {:fname {:value "" :ph "First name" :type "text" :name "fname"
           :invalid false :tests [[#(> (count %) 2)
                                   "First name must be greater than two characters."]]}
   :sname {:value "" :ph "Second name" :type "text" :name "sname"
           :invalid false :tests [[#(> (count %) 2)
                                   "Second name must be greater than two characters."]]}
   :email {:value "" :ph "Email" :type "text" :name "email"
           :invalid false :tests [[#(> (count %) 2)
                                   "Email must be greater than two characters."]]}
   :password1 {:value "" :ph "Password" :type "password" :name "password1"
               :invalid false :tests [[#(> (count %) 6)
                                       "Password1 must be longer than six characters."]]}
   :password2 {:value "" :ph "Re-enter password" :type "password" :name "password2"
               :invalid false}})

(defn register-display
  [inputs owner]
  (om/component
   (dom/div
    #js {:className "pure-u-1-3"
         :style #js {:text-align "center"}}
    (dom/form
     #js {:method "POST" :action "/signup" :className "pure-form"}
     (apply dom/div nil (map #(om/build ut/input %) inputs))
     (if (every? #(nil? (:invalid %)) (vals inputs))
       (om/build ut/padded-button ["10px" "Register"])
       (om/build ut/padded-button-disabled ["10px" "Register"]))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; login form
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn or-table
  [_ owner]
  (om/component
   (dom/table
    #js {:width "100%"}
    (dom/tr
     nil
     (dom/td
      #js {:width "40%"}
      (dom/hr nil))
     (dom/td
      #js {:width "10%"}
      (dom/p #js {:style #js {:font-style "italic"
                              :line-height "4em"}} "or"))
     (dom/td
      #js {:width "40%"}
      (dom/hr nil))))))

(defn login-display
  [inputs owner]
  (om/component
   (dom/div
    #js {:className "pure-u-1-3"
         :style #js {:text-align "center"}}
    (dom/form
     #js {:method "POST" :action "/login" :className "pure-form"}
     (apply dom/div nil (map #(om/build ut/input %)
                             inputs))
     (om/build ut/padded-button ["10px" "Login"]))
    (om/build or-table nil)
    (om/build ut/padded-button
              ["10px" "Register" #(pub-info owner :state :register)]))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; control
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn test-username-exists
  [owner {:keys [fname element]}]
  (if (= fname :email)
    (user-exists? owner (:value element))))

(defn login
  [_ owner]
  (reify
    om/IInitState
    (init-state [_]
      {:state :login
       :inputs {:username {:value "" :ph "Email address" :type "text"}
                :password {:value "" :ph "Password" :type "password"}}})
    om/IWillMount
    (will-mount [_]
      (ut/register-loop owner :state (fn [o _]
                                       (om/set-state! owner :state :register)
                                       (om/set-state! owner :inputs (rinputs owner))))
      (ut/register-loop owner :inputd (fn [o {:keys [data]}]
                                        (ut/get-input o data)
                                        (test-username-exists o data))))
    om/IWillUnmount
    (will-unmount [_]
      (ut/unsubscribe owner :inputd :state))
    om/IRenderState
    (render-state [_ {:keys [inputs state]}]
      (dom/div
       #js {:className "pure-g"
            :style #js {:padding-top "15em"}}
       (dom/div
        #js {:className "pure-u-1"}
        (dom/div #js {:className "pure-u-1-3"})
        (if (= state :login)
          (om/build login-display inputs)
          (om/build register-display inputs))
        (dom/div #js {:className "pure-u-1-3"}))))))

(defn ^:export init []
  (om/root login
           nil
           {:target (. js/document (getElementById "app"))
            :shared @ut/app-state}))
