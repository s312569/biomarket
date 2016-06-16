(ns ^:figwheel-always biomarket.projectdisplay
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [chan]]
            [clojure.string :as str]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.pprint :as pprint]
            [biomarket.utilities :as ut]
            [biomarket.server :as server]
            [biomarket.bids :refer [best-bid] :as bid]
            [biomarket.comments :as com]
            [biomarket.dropdown :as dd]
            [biomarket.skills :as skills]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; project navigation
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn update-projects
  [owner]
  (let [view (om/get-state owner :view)
        status (second (view (om/get-state owner :views)))]
    (server/get-data owner {:type view :status status}
                     #(om/set-state! owner :projects (:data %)))))

(defn navigation-mount
  [owner]
  (update-projects owner)
  (ut/register-loop owner (om/get-state owner :ut)
                    (fn [o {:keys [data]}]
                      (om/set-state! owner :view data)
                      (update-projects owner)))
  (ut/register-broadcast-loop owner :amend-project-status
                              (om/get-state owner :broadcast-chan)))

(defn navigation-unmount
  [owner]
  (ut/unsubscribe owner (om/get-state owner :ut))
  (ut/unsub-broadcast-loop owner :amend-project-status
                           (om/get-state owner :broadcast-chan)))

(defn- project-nav
  [owner]
  (dom/div
   nil
   (apply
    dom/ul
    #js {:className "nav nav-pills nav-justified"}
    (concat (map (fn [[k [text dbstatus]]]
                   (dom/li
                    #js {:className (if (= (om/get-state owner :view) k) "active")
                         :role "presentation"
                         :onClick (fn [_]
                                    (ut/pub-info owner (om/get-state owner :ut) k))}
                    (dom/a #js {:href "#"} text)))
                 (om/get-state owner :views))
            (if (om/get-state owner :nav)
              (map #(dom/li
                     #js {:role "presentation"
                          :onClick (second %)}
                     (dom/a #js {:href "#"} (first %)))
                   (om/get-state owner :nav)))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; table
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti table-info (fn [project] (:view-type project)))

(defn- alert-table-info
  [& fields]
  (apply dom/div #js {:style #js {:color "red"}} fields))

(defn- average-bid
  [project]
  (if (seq (:bids project))
    (str "$"
         (pprint/cl-format nil "~$"
                           (/ (reduce + (map :amount (:bids project)))
                              (count (:bids project)))))))

(defmethod table-info :expired-projects
  [project]
  (let [f #(ut/color-span % "green")]
    {"Bidding ended" (alert-table-info (str (:bidmin project) " ago"))
     "Project deadline" (f (:projmin project))
     "Bids" (f (count (:bids project)))
     "Average bid (USD)" (f (or (average-bid project) "No bids received"))
     "Budget (USD)" (f (str "$" (:budget project)))}))

(defmethod table-info :default
  [project]
  (let [f #(ut/color-span % "green")]
    {"Bidding ends" (f (:bidmin project))
     "Project deadline" (f (:projmin project))
     "Bids" (f (count (:bids project)))
     "Average bid" (f (or (average-bid project) "No bids yet"))
     "Budget" (f (str "$" (:budget project)))}))

(defn info-table
  [project owner]
  (om/component
   (let [data (table-info project)]
     (om/build ut/make-a-table {:data (list data)}))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; labels
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn label
  [class text]
  (dom/span
   #js {:style #js {:padding-right "10px"}}
   (dom/span #js {:className class}
             text)))

(defmulti title-labels (fn [x] (:view-type x)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; header
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn header
  [p]
  (dom/div
   #js {:className "container-fluid"
        :style #js {:margin-top "10px"}}
   (dom/div
    #js {:className "row"}
    (dom/div
     #js {:className "col-md-10"
          :style #js {:color "#D3D3D3"}}
     (dom/i #js {:className "fa fa-bullseye"})
     (str "  Posted by " (:username p)))
    (dom/div
     #js {:className "col-md-2"
          :style #js {:text-align "right"}}
     (dd/drop-down p)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; the display
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod ut/loop-manager :bid-show
  [owner {:keys [data]}]
  (if (:bid data)
    (do (om/set-state! owner :show-bid (:bid data))
        (om/set-state! owner :bottom-view :discussion))
    (do (om/set-state! owner :show-bid (:bid data))
        (om/set-state! owner :bottom-view :bids))))

(defmethod ut/loop-manager :show-bottom
  [owner {:keys [data]}]
  (om/set-state! owner :bottom-view (:bottom-view data)))

(defn project-mount
  [owner]
  (let [pid (:id (om/get-state owner :project))]
    (ut/register-loop owner pid ut/loop-manager)
    (ut/register-broadcast-loop owner {:project pid}
                                (om/get-state owner :broadcast-chan))))

(defn project-unmount
  [owner]
  (let [pid (om/get-state owner :project)]
    (ut/unsubscribe owner pid)
    (ut/unsub-broadcast-loop owner {:project pid}
                             (om/get-state owner :broadcast-chan))))

(defn get-height
  [owner]
  (let [project (om/get-state owner :project)
        h (om/get-node owner (str (:id project "-panel")))]
    (.. h -clientHeight)))

(defn project-summary
  [[project view-type] owner]
  (reify
    om/IInitState
    (init-state [_]
      {:project (assoc project :view-type view-type :bottom-view :default)
       :broadcast-chan (chan)
       :view-type view-type
       :show-bid false
       :bottom-view :default})
    om/IWillMount
    (will-mount [_]
      (project-mount owner))
    om/IWillUnmount
    (will-unmount [_]
      (project-unmount owner))
    om/IDidUpdate
    (did-update [_ _ _]
      (when-not (om/get-state owner :show-bid)
        (om/set-state! owner :height (get-height owner))))
    om/IWillReceiveProps
    (will-receive-props [_ [np nv]]
      (let [op (first (om/get-props owner))]
        (om/set-state! owner :project (assoc np :view-type nv))
        (om/set-state! owner :show-bid false)))
    om/IRenderState
    (render-state [_ {:keys [project show-bid bottom-view]}]
      (if-not show-bid
        (dom/div
         #js {:className "container-fluid"
              :style #js {:position "relative"}}
         (dom/div
          #js {:className "panel panel-default"
               :ref (str (:id project "-panel"))}
          (dom/div
           nil
           (header project))
          (dom/div
           #js {:className "panel-body"}
           (if-not show-bid
             (dom/div nil
                      (dom/div nil (om/build title-labels project))
                      (dom/div nil (om/build info-table project))
                      (om/build ut/more-less-text (:description project))
                      (ut/bottom (assoc project :bottom-view bottom-view)))))))
        (om/build bid/bid-view (assoc project
                                      :bottom-view bottom-view
                                      :show-bid show-bid
                                      :height (om/get-state owner :height)))))))

