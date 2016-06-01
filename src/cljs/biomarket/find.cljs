(ns ^:figwheel-always biomarket.find
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan pub sub timeout]]
            [om.core :as om :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [om.dom :as dom :include-macros true]
            [clojure.string :as str]
            [cljs-time.core :as t]
            [cljs-time.format :as f]
            [biomarket.utilities :as ut]
            [biomarket.bids :as bid]
            [biomarket.comments :as com]
            [biomarket.server :as server]
            [biomarket.projectdisplay :as pd]
            [biomarket.skills :as skills])
  (:import [goog History]
           [goog.history EventType]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; bottoms
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn show-skills
  [project owner]
  (om/component
   (dom/div #js {:style #js {:padding-top "20px"}}
            (om/build skills/skill-tags [(:skills project) {}]))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; view
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- find-view
  [_ owner]
  (reify
    om/IInitState
    (init-state [_]
      {:projects []
       :bottoms {:skills ["Matched skills" show-skills]
                 :bids ["Show bids" bid/show-bids]
                 :discussion ["Discussion" com/comments nil]}})
    om/IWillMount
    (will-mount [_]
      (server/get-data owner {:type :all-projects :status :open}
                       #(->> (:data %)
                             (map (fn [x] (assoc x :view-type :find)))
                             (sort-by :biddead)
                             (om/set-state! owner :projects))))
    om/IRenderState
    (render-state [_ {:keys [projects bottoms]}]
      (dom/div
       nil
       (apply dom/div
              nil
              (map #(om/build pd/project-summary [% bottoms :find bid/bid-widget])
                   projects))))))



