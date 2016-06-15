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
            [biomarket.newproject :refer [new-project-view]]
            [biomarket.bids :as bid]
            [biomarket.server :as server]
            [biomarket.projectdisplay :as pd])
  (:import [goog History]
           [goog.history EventType]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; user projects view
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- home-view
  [_ owner]
  (reify
    om/IInitState
    (init-state [_]
      {:projects []
       :view :open-projects
       :inputs {:open-projects ["Open projects" "open"]
                :active-projects ["Active projects" "active"]
                :completed-projects ["Completed projects" "completed"]
                :deleted-projects ["Deleted projects" "deleted"]
                :expired-projects ["Expired projects" "expired"]}
       :nav [["New Project" #(ut/pub-info owner ::navigation :new)]]
       :ut (gensym)
       :update-tag (gensym)
       :broadcast-chan (chan)})
    om/IDidMount
    (did-mount [_]
      (pd/navigation-mount owner))
    om/IWillUnmount
    (will-unmount [_]
      (pd/navigation-unmount owner))
    om/IRenderState
    (render-state [_ {:keys [projects view]}]
      (let [ps (ut/split-projects projects)]
        (dom/div
         nil
         (pd/project-nav owner)
         (dom/div #js {:style #js {:padding-top "10px"}})
         (if (seq projects)
           (dom/div
            #js {:className "container-fluid"}
            (dom/div
             #js {:className "row"}
             (apply
              dom/div
              #js {:className "col-md-6"}
              (map #(om/build pd/project-summary [% view])
                   (first ps)))
             (apply
              dom/div
              #js {:className "col-md-6"}
              (map #(om/build pd/project-summary [% view])
                   (second ps)))))
           (dom/div
            #js {:style #js {:padding-top "30px"
                             :text-align "center"}}
            (str "You have no " (first (view (om/get-state owner :inputs)))
                 " projects."))))))))

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
