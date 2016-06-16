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
;; view methods
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; labels

(defn- expired-or-deleted
  [project]
  (om/component
   (dom/h4
    #js {:style #js {:font-weight "bold"}}
    (dom/span #js {:style #js {:padding-right "10px"}}
              (str (:title project) "  "))
    (let [best (bid/best-bid (:bids project))]
      (if best
        (pd/label "label label-success" (str "Best bid: $" (:amount best)))
        (pd/label "label label-danger" "No bids"))))))

(defmethod pd/title-labels :expired-projects
  [project]
  (expired-or-deleted project))

(defmethod pd/title-labels :deleted-projects
  [project]
  (expired-or-deleted project))

(defmethod pd/title-labels :open-projects
  [project]
  (om/component
   (dom/h4
    #js {:style #js {:font-weight "bold"}}
    (dom/span #js {:style #js {:padding-right "10px"}}
              (str (:title project) "  "))
    (let [best (bid/best-bid (:bids project))]
      (if best
        (pd/label "label label-success" (str "Best bid: $" (:amount best)))
        (pd/label "label label-danger" "No bids yet!"))))))

;; bottom

(defn- default-bottom
  [p]
  (if (seq (:bids p))
    (dom/div
     nil
     (dom/hr nil)
     (om/build ut/bottom-skel (assoc p :links {:bids ["Bids" bid/bid-manage]})))))

(defmethod ut/bottom :open-projects
  [p]
  (default-bottom p))

(defmethod ut/bottom :expired-projects
  [p]
  (default-bottom p))

(defmethod ut/bottom :deleted-projects
  [p]
  (default-bottom p))

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
       :views {:open-projects ["Open projects" "open"]
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
            #js {:className "col-md-12"}
            (map #(om/build pd/project-summary [% view])
                 projects))))
         (dom/div
          #js {:style #js {:padding-top "30px"
                           :text-align "center"}}
          (str "You have no " (first (view (om/get-state owner :inputs)))
               " projects.")))))))

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
