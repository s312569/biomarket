(ns ^:figwheel-always biomarket.dropdown
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [chan]]
            [clojure.string :as str]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.pprint :as pprint]
            [biomarket.utilities :as ut]
            [biomarket.server :as server]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; dropdown menu
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- delete-project
  [p]
  (server/save-data {:type :delete-project :data {:id (:id p)}}))

(defn- undelete-project
  [p]
  (server/save-data {:type :undelete-project :data {:id (:id p)}}))

(defn drop-down-skel
  ([] (drop-down-skel nil nil))
  ([func text]
   (if (nil? func)
     (dom/div
      nil
      (dom/i #js {:className "fa fa-bars"
                  :style #js {:color "#D3D3D3"}}))
     (dom/div
      #js {:className "btn-group"}
      (dom/a #js {:className "dropdown-toggle"
                  :data-toggle "dropdown"}
             (dom/i #js {:className "fa fa-bars"
                         :style #js {:color "gray"}}))
      (dom/ul #js {:className "dropdown-menu dropdown-menu-right"}
              (dom/li
               nil
               (dom/a #js {:onClick func} text)))))))

(defmulti drop-down (fn [p] (:view-type p)))

(defmethod drop-down :default
  [p]
  (drop-down-skel #(delete-project p) "Delete project"))

(defmethod drop-down :deleted-projects
  [p]
  (drop-down-skel #(undelete-project p) "Undelete project"))

(defmethod drop-down :open-jobs
  [p]
  (drop-down-skel identity "Withdraw your bids"))

(defmethod drop-down :bid-show
  [p]
  (drop-down-skel))
