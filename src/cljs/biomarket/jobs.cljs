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

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; view methods
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; active jobs

(defmethod pd/bottom :active-jobs
  [p]
  nil)

(defmethod pd/title-labels :active-jobs
  [p]
  (om/component
   (dom/div nil)))

;; completed jobs

(defmethod pd/bottom :completed-jobs
  [p]
  nil)

(defmethod pd/title-labels :completed-jobs
  [p]
  (om/component
   (dom/div nil)))

;; open jobs

(defn remove-bids
  [p]
  (server/save-data {:type :remove-bids :data {:id (:id p)}}))

(defmethod pd/drop-down :open-jobs
  [p]
  (pd/drop-down-skel #(remove-bids p) "Withdraw your bids"))

(defmethod pd/bottom :open-jobs
  [p owner]
  (om/component
   (let [links {:bids [[bid/bid-history-button [p :bids]]
                       [bid/show-bids p]]
                :comments [[com/comment-bbutton [p :comments]]
                           [com/comments [p]]]}]
     (if (seq (:bids p))
       (dom/div
        nil
        (dom/hr nil)
        (om/build pd/bottom-skel [links [bid/bid-widget p] (:bottom-view p)]))))))

(defmethod pd/title-labels :open-jobs
  [project]
  (om/component
   (dom/h4
    #js {:style #js {:font-weight "bold"}}
    (dom/span #js {:style #js {:padding-right "10px"}}
              (str (:title project) "  "))
    (let [ub (first (sort-by :time > (:user-bids project)))
          best (bid/best-bid (:bids project))]
      (dom/span
             nil
             (pd/label "label label-success" (str "Best bid: $" (:amount best)))
             (pd/label "label label-primary" (str "Your bid: $" (:amount ub))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; control
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- jobs-view
  [_ owner]
  (reify
    om/IInitState
    (init-state [_]
      {:projects false
       :view :open-jobs
       :views {:open-jobs ["Bidding" "open"]
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
    (render-state [_ {:keys [projects views view]}]
      (if projects
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
            (str "You have no " (second (view views))
                 " projects."))))
        (om/build ut/waiting nil)))))
