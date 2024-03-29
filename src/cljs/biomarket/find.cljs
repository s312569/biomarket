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
            (om/build skills/skill-tags [project {}]))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; view methods
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod pd/bottom :found-projects
  [p owner]
  (om/component
   (let [links {:skills [[skills/skills-bbutton [p :skills]]
                         [show-skills p]]
                :bids [[bid/bid-history-button [p :bids]]
                       [bid/show-bids p]]
                :discussion [[com/comment-bbutton [p :discussion]]
                             [com/comments [p]]]}]
     (if (seq (:bids p))
       (dom/div
        nil
        (dom/hr nil)
        (om/build pd/bottom-skel [links [bid/bid-widget p] (:bottom-view p)]))
       (dom/div
        nil
        (dom/hr nil)
        (om/build pd/bottom-skel [(select-keys links [:skills])
                                  [bid/bid-widget p]
                                  (:bottom-view p)]))))))

(defmethod pd/title-labels :found-projects
  [project]
  (om/component
   (dom/h4
    #js {:style #js {:font-weight "bold"}}
    (dom/span #js {:style #js {:padding-right "10px"}}
              (str (:title project) "  "))
    (let [ub (first (sort-by :time > (:user-bids project)))
          best (bid/best-bid (:bids project))]
      (cond ub
            (dom/span
             nil
             (pd/label "label label-success" (str "Best bid: $" (:amount best)))
             (pd/label "label label-primary" (str "Your bid: $" (:amount ub))))
            best
            (dom/span
             nil
             (pd/label "label label-success" (str "Best bid: $" (:amount best))))
            :else
            (dom/span
             nil
             (pd/label "label label-danger" "No bids yet!")))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; control
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod ut/loop-manager :remove-project
  [owner {:keys [data]}]
  (go
    (loop [t 0]
      (if (>= t 3000)
        (om/set-state! owner :projects (remove #(= (:pid data) (:id %)) (om/get-state owner :projects)))
        (do
          (<! (timeout 30))
          (ut/pub-info owner :progress nil)
          (recur (+ t 30)))))))

(defn- find-view
  [_ owner]
  (reify
    om/IInitState
    (init-state [_]
      {:projects false
       :view :found-projects})
    om/IWillMount
    (will-mount [_]
      (server/get-data owner {:type :all-projects :status :open}
                       #(->> (:data %)
                             (sort-by :biddead)
                             (om/set-state! owner :projects)))
      (ut/register-loop owner :remove-project))
    om/IRenderState
    (render-state [_ {:keys [projects bottoms]}]
      (if projects
        (dom/div
         nil
         (if (seq projects)
           (dom/div
            #js {:className "container-fluid"}
            (dom/div
             #js {:className "row"}
             (apply
              dom/div
              #js {:className "col-md-12"}
              (map #(om/build pd/project-summary [% :found-projects])
                   projects))))
           (dom/div
            #js {:style #js {:padding-top "30px"
                             :text-align "center"}}
            (str "No projects found"))))
        (om/build ut/waiting nil)))))



