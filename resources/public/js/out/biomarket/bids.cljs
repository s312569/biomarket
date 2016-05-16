(ns ^:figwheel-always biomarket.bids
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan pub sub]]
            [om.core :as om :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [om.dom :as dom :include-macros true]
            [clojure.string :as str]
            [cljs-time.core :as t]
            [cljs-time.format :as f]
            [biomarket.utilities :refer [log] :as ut])
  (:import [goog History]
           [goog.history EventType]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; server calls
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- submit-bid
  [owner bid pid]
  (let [h (fn [{:keys [status result]}]
            (if (= "success" status)
              (om/set-state! owner :bids result)))]
    (ut/post-params "/save-bid" {:pid pid :amount (:value bid)} h)))

(defn bid-server-call
  [owner pid]
  (let [h (fn [{:keys [status result]}]
            (when (= "success" status)
              (om/set-state! owner :bids result)))]
    (ut/post-params "/bids" {:pid pid} h)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; all bids
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- show-bids
  [project owner]
  (om/component
   (let [user (-> (:user-bids project) first :username)
         fg (fn [bid-user text]
              (if (= bid-user user)
                (ut/color-span text "red")
                (ut/color-span text "green")))]
     (let [data (map (fn [x]
                       (let [u (:username x)]
                         {"User" (fg u (:username x))
                          "Amount" (fg u (str "$" (:amount x)))
                          "Time"  (fg u (ut/datestring->readable (:time x)))}))
                     (sort-by :time > (:bids project)))]
       (om/build ut/make-a-table {:striped true
                                  :data data
                                  :hover true})))))

(defn bid-history
  [bids]
  (om/component
   (dom/div
    #js {:style #js {:text-align "center"}}
    (dom/label nil "Bid history")
    (if-not (seq bids)
      (dom/div #js {:className "well"} "No bid history yet")
      (let [f #(dom/span #js {:style #js {:font-size "small"}} %)
            data (map (fn [x]
                        {"Amount" (f (str "$" (:amount x)))
                         "Time" (f (ut/datestring->readable (:time x)))})
                      (sort-by :time > bids))]
        (om/build ut/fixed-head-table
                  {:data data
                   :tparams
                   {:className "table table-striped table-hover"}}))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; bid update widget
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- current-bid
  [bids]
  (if-let [r (->> (sort-by :time > bids)
                  first)]
    (:amount r)))

(defn button-func
  [owner]
  (ut/pub-info owner (om/get-state owner :pid)
               {:action :submit
                :data (:amount (om/get-state owner :inputs))}))

(defn- button-state
  [owner]
  (let [cb (current-bid (:user-bids (om/get-state owner :bids)))
        ab (js/parseFloat (:value (:amount (om/get-state owner :inputs))))]
    (cond (not cb)
          [(clj->js {:className "btn btn-primary"
                     :onClick #(button-func owner)})
           "Submit bid"]
          (= ab cb)
          [(clj->js {:className "btn btn-primary"
                     :disabled "disabled"})
           "Update bid"]
          :else
          [(clj->js {:className "btn btn-primary"
                     :onClick #(button-func owner)})
           "Update bid"])))

(defn- reset-inputs
  [owner]
  (let [ub (seq (:user-bids (om/get-state owner :bids)))]
    {:amount {:value (if-not ub
                       "0"
                       (-> (sort-by :time > ub)
                           first :amount))
              :type "number" :name "bid"
              :title (if-not ub
                       "Enter a bid:"
                       "Your current bid:")
              :invalid false
              :input-type :addon :after (om/get-state owner :basis)
              :before "$"}}))

(defn bid-widget
  [project owner]
  (reify
    om/IInitState
    (init-state [_]
      {:inputs nil
       :button-state nil
       :pid (:id project)
       :basis (:basis project)
       :bids nil
       :bid (gensym)})
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (om/set-state! owner :bids (select-keys np [:user-bids :bids]))
      (om/set-state! owner :inputs (reset-inputs owner))
      (om/set-state! owner :button-state (button-state owner)))
    om/IWillMount
    (will-mount [_]
      (om/set-state! owner :bids (select-keys project [:user-bids :bids]))
      (ut/register-loop owner (om/get-state owner :bid)
                        (fn [o {:keys [data]}]
                          (ut/get-input o data)
                          (om/set-state! o :button-state
                                         (button-state o)))))
    om/IWillUnmount
    (will-unmount [_]
      (ut/unsubscribe owner (om/get-state owner :bid)))
    om/IRenderState
    (render-state [_ {:keys [inputs bid button-state]}]
      (let [amount (:amount inputs)]
        (dom/form
         #js {:className "form-inline"}
         (dom/div
          #js {:className "form-group"}
          (dom/div
           #js {:className "input-group"}
           (dom/div #js {:className "input-group-addon"} (:before amount))
           (dom/input #js {:className "form-control"
                           :value (:value amount)
                           :type (:type amount)
                           :onChange
                           #(ut/on-change-function owner bid :amount amount %)})
           (dom/div #js {:className "input-group-addon"} (:after amount)))
          (apply dom/a button-state)
          (if (seq (:user-bids project))
            (dom/a #js {:className "btn btn-primary"}
                   "Delete bid"))))))))
