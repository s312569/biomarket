(ns ^:figwheel-always biomarket.jobs
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
            [biomarket.comments :as com]
            [biomarket.server :as server]
            [biomarket.projectdisplay :as pd])
  (:import [goog History]
           [goog.history EventType]))


(defmethod ut/bottom :open-jobs
  [p]
  (let [links {:bids ["Bid history" bid/show-bids]
               :comments ["Discussion" com/comments (:username p)]}]
    (dom/div
     nil
     (dom/div
      #js {:className "row"}
      (dom/div
       #js {:className "col-md-12"}
       (om/build bid/bid-widget p)))
     (if (seq (:bids p))
       (dom/div
        nil
        (dom/hr nil)
        (om/build ut/bottom-skel (assoc p :links links)))))))

(defn- jobs-view
  [_ owner]
  (reify
    om/IInitState
    (init-state [_]
      {:projects []
       :view :open-jobs
       :inputs {:open-jobs ["Bidding" "open"]
                :active-jobs ["Active jobs" "active"]
                :completed-jobs ["Completed jobs" "completed"]}
       :ut (gensym)
       :broadcast-chan (chan)})
    om/IDidMount
    (did-mount [_]
      (pd/navigation-mount owner))
    om/IWillUnmount
    (will-unmount [_]
      (pd/navigation-unmount owner))
    om/IRenderState
    (render-state [_ {:keys [projects inputs view]}]
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
            (str "You have no " (first (view inputs))
                 " projects."))))))))
