(ns ^:figwheel-always biomarket.aboutform
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan pub sub]]
            [om.core :as om :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [om.dom :as dom :include-macros true]
            [biomarket.utilities :refer [log pub-info] :as ut]))

(defn search-submit
  [owner]
  (pub-info owner :aboutd (om/get-state owner :inputs))
  (pub-info owner :current :skills))

(defn- get-input
  [owner {:keys [name element]}]
  (if (= name :password2)
    (if (= (get-in (om/get-state owner :inputs) [:password1 :value])
           (:value element))
      (om/set-state! owner :inputs
                     (assoc (om/get-state owner :inputs)
                            name (assoc element :invalid nil)))
      (om/set-state! owner :inputs
                     (assoc (om/get-state owner :inputs)
                            name (assoc element :invalid '("Passwords don't match.")))))
    (let [iv (->> (map (fn [[k v]]
                         (if (not (k (:value element)))
                           v))
                       (:tests element))
                  (remove nil?)
                  seq)]
      (om/set-state! owner :inputs
                     (assoc (om/get-state owner :inputs)
                            name (assoc element :invalid iv))))))

(defn- get-radio
  [owner {:keys [name element]}]
  (om/set-state! owner :inputs
                 (assoc (om/get-state owner :inputs)
                        name element)))

(defn about-form
  [inputs owner]
  (reify
    om/IInitState
    (init-state [_]
      (if inputs
        {:inputs inputs}
        {:inputs {:fname {:value "" :ph "First name" :type "text"
                          :invalid false :submitf #(search-submit owner)
                          :tests [[#(> (count %) 2)
                                   "First name must be greater than two characters."]]}
                  :sname {:value "" :ph "Second name" :type "text"
                          :invalid false :submitf #(search-submit owner)
                          :tests [[#(> (count %) 2)
                                   "Second name must be greater than two characters."]]}
                  :email {:value "" :ph "Email" :type "text"
                          :invalid false :submitf #(search-submit owner)
                          :tests [[#(> (count %) 2)
                                   "Email must be greater than two characters."]]}
                  :password1 {:value "" :ph "Password" :type "password"
                              :invalid false :submitf #(search-submit owner)
                              :tests [[#(> (count %) 6)
                                       "Password1 must be longer than six characters."]]}
                  :password2 {:value "" :ph "Re-enter password" :type "password"
                              :invalid false :submitf #(search-submit owner)}
                  :degree-type {:value "" :ph "Degree type" :type "text"
                                :invalid false :submitf #(search-submit owner)
                                :tests [[#(> (count %) 2)
                                         "Degree must be longer than six characters."]]}
                  :education {:options [["phd" "PhD"] ["masters" "Masters"]
                                        ["bach" "Bachelors"] ["none" "No higher degree"]]
                              :name "education"
                              :current nil}
                  :skills {:value "" :ph "Tell us something about your work history and skills"
                           :type "text" :rows 10
                           :invalid false :submitf #(search-submit owner)
                           :tests [[#(> (count %) 2)
                                    "Skills must be longer than six characters."]]}}}))
    om/IWillMount
    (will-mount [_]
      (ut/register-loop owner :inputd (fn [o e] (get-input o (:data e))))
      (ut/register-loop owner :radiod (fn [o e] (get-radio o (:data e)))))
    om/IWillUnmount
    (will-unmount [_]
      (ut/unsubscribe owner :inputd)
      (ut/unsubscribe owner :radiod))
    om/IRenderState
    (render-state [_ {:keys [inputs]}]
      (dom/div
       #js {:className "pure-g"
            :style #js {:padding-top "5em"}}
       (dom/div
        #js {:className "pure-u-1"}
        (dom/div #js {:className "pure-u-1-3"})
        (dom/div
         #js {:className "pure-u-1-3"}
         (dom/form
          #js {:className "pure-form"}
          (apply dom/fieldset
                 #js {:className "pure-group"}
                 (cons (dom/label nil "Some personal information.")
                       (map #(om/build ut/input %)
                            (filter-hashmap inputs :fname :sname :email))))
          (apply dom/fieldset
                 #js {:className "pure-group"}
                 (cons (dom/label nil "Choose a password.")
                       (map #(om/build ut/input %)
                            (filter-hashmap inputs :password1 :password2))))
          (apply dom/div nil (concat (list (dom/label nil "Education"))
                                     (map #(om/build ut/in-line-radio %)
                                          (filter-hashmap inputs :education))
                                     (map #(om/build ut/input %)
                                          (filter-hashmap inputs :degree-type))))
          (apply dom/fieldset
                 #js {:className "pure-group"}
                 (cons (dom/label nil "Work history and skills")
                       (map #(om/build ut/text-box %)
                            (filter-hashmap inputs :skills)))))
         (dom/div #js {:className "pure-u-1-3"})
         (dom/div
          #js {:className "pure-u-1-3"}
          (if (every? #(nil? (:invalid %)) (vals inputs))
            (dom/button #js {:className "pure-button pure-u-1"
                             :onClick #(search-submit owner)}
                        "Next")
            (dom/button
             #js {:className "pure-button pure-u-1"
                  :disabled "true"}
             "Next")))
         (dom/div #js {:className "pure-u-1-3"})
         (dom/div #js {:className "pure-u-1-3"})))))))
