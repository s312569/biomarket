(ns ^:figwheel-always biomarket.newproject
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan pub sub]]
            [om.core :as om :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [om.dom :as dom :include-macros true]
            [clojure.string :as str]
            [cljs-time.core :as time]
            [cljs-time.format :as tf]
            [biomarket.utilities :refer [log] :as ut])
  (:import [goog History]
           [goog.history EventType]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; utilities
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn all-good?
  [owner]
  (let [b (if-not (:value (om/get-state owner :basis))
            (update-in (om/get-state owner :basis)
                       [:invalid]
                       (fn [_] '("Must select a payment basis."))))
        s (if-not (seq (:selected (om/get-state owner :selected-skills)))
            (update-in (om/get-state owner :selected-skills)
                       [:invalid]
                       (fn [_] '("Select some skills needed for the project"))))]
    (if b (om/set-state! owner :basis b))
    (if s (om/set-state! owner :selected-skills s))
    (doseq [[k v] (om/get-state owner :inputs)]
      (ut/get-input owner {:fname k :element v}))
    (and (every? #(nil? (:invalid %)) (vals (om/get-state owner :inputs)))
         (not b)
         (not s))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; server calls
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- get-skills
  [owner]
  (let [h (fn [{:keys [status result]}]
            (if (and (= "success" status) result)
              (om/set-state! owner :skills result)))]
    (ut/post-params "/skills" {} h)))

(defn save-data
  [owner]
  (let [h (fn [{:keys [status result]}]
            (if (= status "success")
              (ut/pub-info owner ::saved result)))]
    (if (all-good? owner)
      (ut/post-params "/new-project"
                      (merge (->> (map (fn [[k v]] (vector k (:value v)))
                                       (om/get-state owner :inputs))
                                  (into {}))
                             {:basis (:value (om/get-state owner :basis))
                              :skills
                              (keys
                               (:selected (om/get-state owner :selected-skills)))})
                      h))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; skills
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- skills
  [selected owner]
  (reify
    om/IInitState
    (init-state [_]
      {:skills nil})
    om/IWillMount
    (will-mount [_]
      (get-skills owner))
    om/IRenderState
    (render-state [_ {:keys [skills]}]
      (dom/div
       #js {:className (condp = (:invalid selected)
                         false ""
                         nil "has-success"
                         "has-error")}
       (dom/label #js {:className "control-label"} "Required skills:"
                  (dom/label
                   nil
                   "Scientific"
                   (om/build ut/skill-tags [(filter #(= (:type %) "bskill") skills)
                                            (:selected selected)
                                            ::selected]))
                  (dom/label
                   nil
                   "IT"
                   (om/build ut/skill-tags [(filter #(= (:type %) "cskill") skills)
                                            (:selected selected)
                                            ::selected]))
                  (dom/span #js {:className "help-block"}
                            (if (:invalid selected)
                              (first (:invalid selected)))))))))

(defn- basis-radios
  [state owner]
  (om/component
   (dom/div
    #js {:className (condp = (:invalid state)
                      false ""
                      nil "has-success"
                      "has-error")}
    (dom/label #js {:className "control-label"} "Payment basis:")
    (dom/label
     #js {:className "checkbox-inline"}
     (dom/input
      #js {:type "radio"
           :name "basis"
           :value "per hour"
           :checked (if (= "per hour" (:value state)) "true")
           :onClick #(ut/pub-info owner ::basis
                                  {:value "per hour" :invalid nil})})
     " Per hour")
    (dom/label
     #js {:className "checkbox-inline"}
     (dom/input
      #js {:type "radio"
           :name "basis"
           :value "total"
           :checked (if (= "total" (:value state)) "true")
           :onClick #(ut/pub-info owner ::basis
                                  {:value "total" :invalid nil})})
     " Total")
    (dom/span #js {:className "help-block"}
              (if (:invalid state)
                (first (:invalid state)))))))

(defn- new-project
  [[finputs selected-skills basis] owner]
  (om/component
   (dom/div
    #js {:style #js {:padding-top "1em"}}
    (dom/div
     #js {:className "panel panel-default"
          :style #js {:text-align "left"}}
     (dom/div
      #js {:className "panel-heading"}
      (dom/div
       #js {:style #js {:font-weight "bold"
                        :font-size "large"}}
       (let [v (get-in finputs [:title :value])]
         (if-not (= "" (str/trim v))
           v
           "New Project"))))
     (dom/div
      #js {:className "panel-body"}
      (dom/form
       nil
       (apply dom/div nil
              (map #(om/build ut/input (conj % ::inputd))
                   finputs))
       (om/build basis-radios basis))
      (om/build skills selected-skills))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; view
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod ut/get-input :biddead
  [owner {:keys [fname element]}]
  (let [f (tf/formatters :date)
        b (tf/parse f (get-in element [:value]))
        new (-> (update-in (om/get-state owner :inputs)
                           [:biddead :value]
                           (fn [_] (tf/unparse f b)))
                (update-in [:biddead :invalid]
                           (fn [_] nil))
                (update-in [:projdead :value]
                           (fn [_]
                             (tf/unparse f (time/plus b (time/days 1)))))
                (update-in [:projdead :min]
                           (fn [_]
                             (tf/unparse f (time/plus b (time/days 1))))))]
    (om/set-state! owner :inputs new)))

(defn- skills-reg
  [owner data]
  (let [ss (om/get-state owner :selected-skills)]
    (if ((:selected ss) (:id data))
      (let [new (as-> (update-in ss [:selected] (fn [x]
                                                  (dissoc x (:id data))))
                    n
                  (if (seq (:selected n))
                    (assoc n :invalid nil)
                    (assoc n :invalid '("Select some skills needed for the project"))))]
        (om/set-state! owner :selected-skills new))
      (om/set-state! owner :selected-skills
                     (-> (update-in ss [:selected]
                                    (fn [x] (assoc x (:id data) data)))
                         (update-in [:invalid]
                                    (fn [x] nil)))))))

(defn- new-project-nav
  [control owner]
  (reify
    om/IInitState
    (init-state [_]
      {:control control
       :label "Open projects"})
    om/IRenderState
    (render-state [_ {:keys [control drop label]}]
      (dom/div
       nil
       (dom/div
        #js {:className "panel panel-default"}
        (dom/div
         #js {:className "panel-heading"}
         (apply dom/div
                #js {:className "btn-group" :role "group"}
                (map #(dom/a #js {:className "btn btn-primary"
                                  :type "button"
                                  :onClick (second %)}
                             (first %))
                     control))))))))

(defn- min-now
  ([] (min-now (time/now) 0))
  ([a] (min-now (time/now) a))
  ([d a]
   (let [f (tf/formatters :date)]
     (tf/unparse f (time/plus d (time/days a))))))

(defn new-project-view
  [nav-tag owner]
  (reify
    om/IInitState
    (init-state [_]
      {:nav [["Save" #(ut/pub-info owner ::save :save)]
             ["Cancel" #(ut/pub-info owner nav-tag :home)]]
       :inputs {:title {:value "" :placeholder "Title" :type "text"
                        :name "title" 
                        :id "1" :spid "s1" :title "Project title:"
                        :invalid false  
                        :tests [[#(not (= (str/trim %) ""))
                                 "Title cannot be empty."]
                                [#(> (count %) 2)
                                 "Title must be more than 2 characters."]]}
                :description {:value ""
                              :placeholder "Concise description of the project:"
                              :type "textarea" :rows 15
                              :id "2"  :spid "s2"
                              :title "Project description:" :name "description"
                              :invalid false 
                              :tests [[#(not (= (str/trim %) ""))
                                       "Description cannot be empty."]]}
                :hours {:value "1"
                        :type "number" :name "hours"
                        :id "3" :spid "s3" :title "Expected days to complete project:"
                        :invalid false 
                        :tests [[#(>= % 1)
                                 "At least one hour must be specified."]]}
                :budget {:value "1"
                         :type "number" :name "budget"
                         :id "4" :spid "s4"
                         :title "Project budget (USD):"
                         :invalid false
                         :tests [[#(>= % 1)
                                  "At least one dollar must be specified."]]}
                :biddead {:value (min-now) :type "date"
                          :name "biddead"
                          :min (min-now)
                          :id "5" :spid "s5"
                          :title "Bidding deadline:" 
                          :invalid false}
                :projdead {:value (min-now 1) :type "date"
                           :name "projdead"
                           :min (min-now 1)
                           :title "Project deadline:"
                           :id "6" :spid "s6"
                           :invalid false}}
       :basis {:value nil :invalid false}
       :selected-skills {:selected {} :invalid false}})
    om/IWillMount
    (will-mount [_]
      (ut/register-loop owner ::inputd (fn [o {:keys [data]}]
                                         (ut/get-input o data)))
      (ut/register-loop owner ::basis (fn [o {:keys [data]}]
                                        (om/set-state! o :basis data)))
      (ut/register-loop owner ::selected (fn [o {:keys [data]}] (skills-reg o data)))
      (ut/register-loop owner ::saved (fn [o _] (ut/pub-info o nav-tag :home)))
      (ut/register-loop owner ::save (fn [o _] (save-data o))))
    om/IWillUnmount
    (will-unmount [_]
      (ut/unsubscribe owner ::inputd ::basis ::selected ::saved ::save))
    om/IRenderState
    (render-state [_ {:keys [basis inputs nav selected-skills]}]
      (dom/div
       nil
       (om/build new-project-nav nav)
       (om/build new-project [inputs selected-skills basis])
       (om/build new-project-nav nav)))))
