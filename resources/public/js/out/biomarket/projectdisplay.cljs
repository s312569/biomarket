(ns ^:figwheel-always biomarket.projectdisplay
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [chan]]
            [clojure.string :as str]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.pprint :as pprint]
            [biomarket.utilities :as ut]
            [biomarket.server :as server]
            [biomarket.comments :as com]
            [biomarket.bids :as bid]
            [biomarket.components :as comps]
            [biomarket.skills :as skills]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; project navigation
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod ut/broadcast-loop-manager :amend-project-status
  [owner {:keys [data]}]
  (let [status->view #({"open" :open-projects "expired" :expired-projects
                        "completed" :completed-projects "active" :active-projects
                        "deleted" :deleted-projects} %)
        cv (om/get-state owner :view)
        projs (om/get-state owner :projects)]
    (if (= cv (status->view (:status data)))
      (om/set-state! owner :projects
                     (conj projs
                           (assoc data :view-type (om/get-state :view-type))))
      (om/set-state! owner :projects (remove #(= (:id data) (:id %)) projs)))))

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

(defmethod table-info :expired-projects
  [project]
  (let [f #(ut/color-span % "green")]
    {"Bidding ended" (alert-table-info (str (:bidmin project) " ago"))
     "Project deadline" (f (:projmin project))
     "Bids" (f (count (:bids project)))
     "Average bid (USD)" (f (or (bid/average-bid project) "No bids received"))
     "Budget (USD)" (f (str "$" (:budget project)))}))

(defmethod table-info :default
  [project]
  (let [f #(ut/color-span % "green")]
    {"Bidding ends" (f (:bidmin project))
     "Project deadline" (f (:projmin project))
     "Bids" (f (count (bid/sort-best-bids project)))
     "Average bid" (f (or (bid/average-bid project) "No bids yet"))
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

(defn- delete-project
  [p]
  (server/save-data {:type :delete-project :data {:id (:id p)}}))

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
     (drop-down p)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; bottom links
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- show-default
  [_ owner]
  (om/component
   (dom/div nil)))

(defn bbutton-state
  [owner project tag]
  (let [visible (:bottom-view project)]
    (clj->js {:className (if (= visible tag)
                           "btn btn-default active"
                           "btn btn-default")
              :onClick #(ut/pub-info owner (:id project)
                                     {:action :show-bottom
                                      :bottom-view
                                      (if (= visible tag) :default tag)})})))

(defn bottom-skel
  [[links widget visible] owner]
  (om/component
   (dom/div
    #js {:className "container-fluid"}
    (dom/div
     #js {:className "row"}
     (dom/div
      #js {:className "col-md-6"}
      (apply
       dom/div
       #js {:className "btn-group" :role "group"}
       (map (fn [[k [button]]]
              (om/build (first button) (second button)))
            links)))
     (dom/div
      #js {:className "col-md-6"}
      (if widget (apply om/build (first widget) (rest widget)))))
    (condp = visible
      :default (dom/div #js {:className "row"}
                        (dom/div #js {:className "col-md-12"}
                                 (om/build show-default nil)))
      (let [bottom (second (visible links))]
        (om/build (first bottom) (second bottom)))))))

(defmulti bottom (fn [p] (:view-type p)))

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

(defmethod ut/loop-manager :project-alert
  [owner {:keys [data]}]
  (om/set-state! owner :alert-type (:type data))
  (om/set-state! owner :alert (:alert data)))

(defn project-mount
  [owner]
  (let [pid (:id (om/get-state owner :project))]
    (ut/register-loop owner pid ut/loop-manager)
    (ut/register-loop owner {:alert pid})
    (ut/register-broadcast-loop owner {:project pid}
                                (om/get-state owner :broadcast-chan))))

(defn project-unmount
  [owner]
  (let [pid (om/get-state owner :project)]
    (ut/unsubscribe owner pid)
    (ut/unsubscribe owner {:alert pid})
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
       :alert false
       :alert-type :success
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
        (om/set-state! owner :project (assoc np :view-type nv))))
    om/IRenderState
    (render-state [_ {:keys [project bottom-view alert alert-type]}]
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
         (if alert (om/build comps/alert {:msg alert :type alert-type :pid (:id project)}))
         (dom/div nil
                  (dom/div nil (om/build title-labels project))
                  (dom/div nil (om/build info-table project))
                  (om/build ut/more-less-text (:description project))
                  (om/build bottom (assoc project :bottom-view bottom-view)))))))))

