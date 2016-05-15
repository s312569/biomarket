(ns ^:figwheel-always biomarket.find
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan pub sub]]
            [om.core :as om :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [om.dom :as dom :include-macros true]
            [clojure.string :as str]
            [cljs-time.core :as t]
            [cljs-time.format :as f]
            [biomarket.utilities :refer [log] :as ut])
  (:import [goog History]
           [goog.history EventType]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; server calls
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- get-projects
  [owner view]
  (let [h (fn [{:keys [status result]}]
            (if (= "success" status)
              (om/set-state! owner :projects result)))]
    (ut/post-params "/projects" {:status :open
                                 :query-type :all-projects} h)))

(defn get-skills
  [owner]
  (let [h (fn [{:keys [status result]}]
            (if (= "success" status)
              (om/set-state! owner :skills result)))]
    (ut/post-params "/project-skills" {:pid (:id (om/get-state owner :project))} h)))

(defn submit-bids
  [owner]
  (let [project (om/get-state owner :project)
        f (f/formatters :basic-date-time)
        h (fn [{:keys [status result]}]
            (if (= "success" status)
              (om/set-state! owner :project (merge project result))))]
    (ut/post-params "/save-bid"
                    (merge (->> (map (fn [[k v]] (vector k (:value v)))
                                     (om/get-state owner :inputs))
                                (into {}))
                           {:pid (:id project)
                            :time (f/unparse f (t/now))
                            :basis (:basis project)})
                    h)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; bottom links
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn show-skills
  [skills owner]
  (om/component
   (dom/div #js {:style #js {:padding-top "20px"}}
            (om/build ut/skill-tags [skills {}]))))

(defn show-bid-form
  [[inputs tag] owner]
  (om/component
   (dom/div
    nil
    (apply dom/form
           #js {:style #js {:padding-top "20px"}}
           (map #(om/build ut/input (conj % tag))
                inputs))
    (dom/button #js {:className "btn btn-primary"
                     :onClick #(ut/pub-info owner tag :submit)}
                "Submit"))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; project list
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- project-summary
  [project owner]
  (reify
    om/IInitState
    (init-state [_]
      (let [id (gensym)]
        {:project project
         :bottoms nil
         :inputs  {:amount {:value "1" :placeholder "Amount in Dollars"
                         :type "number" :name "bid"
                         :id (str id "-1") :spid (str "s" id "-1")
                         :title "Bid amount:" :invalid false
                         :input-type :addon :after (:basis project)
                         :before "$"}
                   :comment {:value "" :placeholder "Comment"
                             :type "textarea" :name "comment"
                             :id (str id "-2") :spid (str "s" id "-1")
                             :title "Comment: "
                             :invalid false}}}))
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (log (om/get-state owner :inputs))
      (log "Updating"))
    om/IWillMount
    (will-mount [_]
      (ut/register-loop owner (:id project) (fn [o {:keys [data]}] (condp = data
                                                                     :submit (submit-bids o)
                                                                     (ut/get-input o data)))))
    om/IWillUnmount
    (will-unmount [_]
      (ut/unsubscribe owner (:id project)))
    om/IRenderState
    (render-state [_ {:keys [inputs project]}]
      (om/build
       ut/project-panel [project {:skills ["Matched skills" show-skills (:skills project)]
                                  :offer ["Bid!" show-bid-form [inputs (:id project)]]}]))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; view
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- find-view
  [_ owner]
  (reify
    om/IInitState
    (init-state [_]
      {:projects []})
    om/IWillMount
    (will-mount [_]
      (get-projects owner (om/get-state owner :view)))
    om/IRenderState
    (render-state [_ {:keys [nav projects inputs view]}]
      (dom/div
       nil
       (apply dom/div
              nil
              (map #(om/build project-summary %)
                   (sort-by :biddead projects)))))))



