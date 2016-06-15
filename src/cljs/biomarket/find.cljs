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
            [biomarket.projectdisplay :as pd]
            [biomarket.bids :as bid]
            [biomarket.comments :as com]
            [biomarket.server :as server]
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

(defmethod ut/bottom :found-projects
  [p]
  (let [links {:skills ["Matched skills" show-skills]
               :bids ["Show bids" bid/show-bids]
               :discussion ["Discussion" com/comments nil]}]
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
        (om/build ut/bottom-skel (assoc p :links links)))
       (dom/div
        nil
        (dom/hr nil)
        (om/build ut/bottom-skel (assoc p :links (dissoc links :bids :discussion))))))))

(defn- find-view
  [_ owner]
  (reify
    om/IInitState
    (init-state [_]
      {:projects []
       :view :found-projects})
    om/IWillMount
    (will-mount [_]
      (server/get-data owner {:type :all-projects :status :open}
                       #(->> (:data %)
                             (sort-by :biddead)
                             (om/set-state! owner :projects))))
    om/IRenderState
    (render-state [_ {:keys [projects bottoms]}]
      (let [ps (ut/split-projects projects)]
        (dom/div
         nil
         (if (seq projects)
           (dom/div
            #js {:className "container-fluid"}
            (dom/div
             #js {:className "row"}
             (apply
              dom/div
              #js {:className "col-md-6"}
              (map #(om/build pd/project-summary [% :found-projects])
                   (first ps)))
             (apply
              dom/div
              #js {:className "col-md-6"}
              (map #(om/build pd/project-summary [% :found-projects])
                   (second ps)))))
           (dom/div
            #js {:style #js {:padding-top "30px"
                             :text-align "center"}}
            (str "No projects found"))))))))



