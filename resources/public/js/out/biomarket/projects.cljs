(ns ^:figwheel-always biomarket.projects
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan pub sub]]
            [om.core :as om :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [om.dom :as dom :include-macros true]
            [clojure.string :as str]
            [biomarket.login :as login]
            [biomarket.utilities :refer [log] :as ut]
            [biomarket.newproject :refer [new-project-view]])
  (:import [goog History]
           [goog.history EventType]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; server calls
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- get-projects
  [owner]
  (let [h (fn [{:keys [status result]}]
            (if (= "success" status)
              (om/set-state! owner :projects result)))
        projects? (condp = (om/get-state owner :view)
                    :expired :expired-projects
                    :open :user-projects)]
    (ut/post-params "/projects" {:query-type projects?} h)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; project list view
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn show-bids
  [pid owner]
  (om/component
   (dom/div #js {:style #js {:padding-top "10px"}} "Here be bids")))

(defn- project-summary
  [project owner]
  (om/component
   (om/build ut/project-panel [project
                               {:bids ["Show bids" show-bids (:pid project)]}])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; project list view
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- project-nav
  [[control drop view] owner]
  (om/component
    (dom/div
     nil
     (dom/div
      #js {:className "panel panel-default"}
      (dom/div
       #js {:className "panel-heading"}
       (apply dom/div
              nil
              (map #(dom/button
                     #js {:className "btn btn-primary"
                          :onClick (second %)}
                     (first %))
                   control)))
      (dom/div
       #js {:className "panel-body"
            :style #js {:text-align "center"}}
       (dom/div
        #js {:style #js {:text-align "center"
                         :font-weight "bold"}}
        "Show:")
       (apply dom/div
              #js {:className "btn-group" :role "group"}
              (map #(dom/a
                     #js {:className (if (= view (second %))
                                       "btn btn-default active"
                                       "btn btn-default")
                          :onClick (fn [_]
                                     (ut/pub-info owner ::project-view (second %)))}
                     (first %))
                   drop)))))))

(defn- home-view
  [_ owner]
  (reify
    om/IInitState
    (init-state [_]
      {:projects []
       :view :open
       :inputs [["Open Projects" :open]
                ["Active Projects" :active]
                ["Completed Projects" :completed]
                ["Expired Projects" :expired]]
       :nav [["New Project" #(ut/pub-info owner ::navigation :new)]]})
    om/IWillMount
    (will-mount [_]
      (get-projects owner)
      (ut/register-loop owner ::project-view (fn [o {:keys [data]}]
                                               (om/set-state! owner :view data)
                                               (get-projects owner))))
    om/IWillUnmount
    (will-unmount [_]
      (ut/unsubscribe owner ::project-view))
    om/IRenderState
    (render-state [_ {:keys [nav projects inputs view]}]
      (dom/div
       nil
       (om/build project-nav [nav inputs view])
       (dom/div #js {:style #js {:padding-top "10px"}})
       (if (seq projects)
         (apply dom/div nil (map #(om/build project-summary %)
                                 projects))
         (dom/div #js {:style #js {:padding-top "30px"
                                   :text-align "center"}}
                  (str "You have no " (name view) " projects.")))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; control
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn projects-view-control
  [_ owner]
  (reify
    om/IInitState
    (init-state [_]
      {:current :home})
    om/IWillMount
    (will-mount [_]
      (ut/register-loop owner ::navigation (fn [o {:keys [data]}]
                                            (om/set-state! o :current data))))
    om/IWillUnmount
    (will-unmount [_]
      (ut/unsubscribe owner ::navigation))
    om/IRenderState
    (render-state [_ {:keys [current nav]}]
      (condp = current
        :home (om/build home-view nil)
        :new (om/build new-project-view ::navigation)))))
