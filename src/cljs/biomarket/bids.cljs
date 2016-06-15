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
            [biomarket.utilities :as ut]
            [biomarket.server :as server]
            [biomarket.comments :as com]
            [biomarket.skills :as skills]
            [biomarket.dropdown :as dd])
  (:import [goog History]
           [goog.history EventType]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; utilities
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn best-bid
  [bids]
  (->> (group-by :username bids)
       vals
       (map #(first (sort-by :time > %)))
       (sort-by :amount)
       first))

(defn sort-best-bids
  [project]
  (sort-by #(:amount %) <
           (->> (group-by :username (:bids project))
                vals
                (map #(sort-by :time > %))
                (map first))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; show bids 
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn show-table
  [data owner]
  (om/component
    (dom/table
        #js {:className "table table-striped table hover"}
      (dom/thead
       nil
       (apply dom/tr nil
              (map #(dom/th #js {:style #js {:text-align "center"}} %)
                   (keys (first data)))))
      (apply dom/tbody
             nil
             (map (fn [x]
                    (apply dom/tr nil
                           (map #(dom/td
                                  #js {:style #js {:text-align "center"
                                                   :border "0"}}
                                  %)
                                (vals x))))
                  data)))))

(defn- show-bids
  [project owner]
  (reify
    om/IInitState
    (init-state [_]
      {:cp 0})
    om/IRenderState
    (render-state [_ {:keys [cp]}]
      (let [user (-> (:user-bids project) first :username)
            fg (fn [bid-user text]
                 (if (= bid-user user)
                   (ut/color-span text "red")
                   (ut/color-span text "green")))]
        (if (seq (:bids project))
          (let [data (map (fn [x]
                            (let [u (:username x)]
                              {"User" (fg u (apply str (take 8 (:username x))))
                               "Amount" (fg u (str "$" (:amount x)))
                               "Time"  (fg u (ut/ds->date-hour-minute (:time x)))}))
                          (->> (sort-by :time > (:bids project))
                               (drop cp)
                               (take 4)))]
            (dom/div
             nil
             (dom/div
              #js {:className "row"}
              (dom/div
               #js {:className "col-md-12"
                    :style #js {:min-height "200px"}}
               (om/build show-table data)))
             (dom/div
              #js {:className "row"}
              (dom/div
               #js {:className "col-md-6"}
               (if (> cp 0)
                 (dom/a #js {:onClick
                             #(om/set-state! owner :cp (- cp 4))}
                        "Previous")))
              (dom/div
               #js {:className "col-md-6"
                    :style #js {:text-align "right"}}
               (if (> (count (:bids project)) (+ 4 cp))
                 (dom/a #js {:onClick
                             #(om/set-state! owner :cp (+ 4 cp))}
                        "Next")))))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; bid view
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod ut/bottom :bid-view
  [p]
  (let [links {:discussion ["Discussion" com/comments (:buser p)]
               :skills ["Skills" skills/skill-tags {}]}]
    (dom/div
     nil
     (dom/hr nil)
     (om/build ut/bottom-skel (assoc p :links links)))))

(defn bid-view-header
  [project owner]
  (om/component
   (dom/div
    #js {:className "row"}
    (dom/div
     #js {:className "col-md-6"}
     (dom/div
      #js{:className "btn-group"}
      (dom/a #js {:className "btn btn-default btn-sm"
                  :onClick #(ut/pub-info owner (:id project)
                                         {:action :bid-show :bid false})}
             (dom/i #js {:className "fa fa-arrow-left"
                         :style #js {:padding-right "10px"}})
             "Back to project")
      (dom/a #js {:className "btn btn-primary btn-sm"}
             "Accept this bid")))
    (dom/div #js {:className "col-md-6"
                  :style #js {:text-align "right"}}
             (dd/drop-down (assoc project :view-type :bid-show))))))

(defn bid-table
  [project]
  (let [f #(ut/color-span % "green")
        bid (:show-bid project)
        data (list {"Amount" (f (str "$" (:amount bid)))
                    "Basis" (f (:basis project))
                    "Bidder" (f (apply str (take 8 (:username bid))))
                    "Date" (f (ut/ds->date-hour-minute (:time bid)))})]
    (om/build ut/make-a-table {:data data :tparam {}})))

(defn bid-view
  [project owner]
  (om/component
    (dom/div
        #js {:className "container-fluid"
             :style #js {:position "relative"}}
      (dom/div
       #js {:className "panel panel-default"}
       (dom/div
        #js {:className "panel-body"
             :style #js {:min-height (str (:height project) "px")}}
        (om/build bid-view-header project)
        (bid-table project)
        (ut/bottom (assoc project
                          :buser (:username (:show-bid project))
                          :view-type :bid-view)))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; bid management
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn bid-display
  [project owner]
  (om/component
   (let [bids (:best-bids project)
         basis (:basis project)
         pid (:id project)]
     (dom/table
      #js {:className "table table-striped table-hover"}
      (apply
       dom/tbody
       nil
       (map #(dom/tr
              nil
              (dom/td
               nil
               (dom/span nil (str "$" (:amount %) " " basis " from "))
               (dom/span nil (dom/a #js {:href "#"} (:username %))))
              (dom/td
               nil
               (dom/a #js {:className "btn btn-default btn-sm"
                           :onClick (fn [_] (ut/pub-info owner pid {:action :bid-show
                                                                    :bid %}))}
                      "View")))
            bids))))))

(defn bid-manage
  [project owner]
  (reify
    om/IInitState
    (init-state [_]
      {:best-bids (sort-best-bids project)})
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (om/set-state! owner :best-bids (sort-best-bids np)))
    om/IRenderState
    (render-state [_ {:keys [best-bids]}]
      (dom/div
       #js {:style #js {:padding-top "20px"}}
       (om/build bid-display (assoc project :best-bids best-bids))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; bidding widget
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- current-bid
  [bids]
  (if-let [r (->> (sort-by :time > bids)
                  first)]
    (:amount r)))

(defn button-func
  [owner]
  (server/save-data
   {:type :bid
    :data {:pid (:id (om/get-state owner :project))
           :amount (get-in (om/get-state owner :inputs) [:amount :value])}}))

(defn- button-state
  [owner]
  (let [cb (current-bid (:user-bids (om/get-state owner :project)))
        ab (js/parseFloat (:value (:amount (om/get-state owner :inputs))))]
    (cond (and (not cb) (not (= ab 0)))
          [(clj->js {:className "btn btn-primary"
                     :onClick #(button-func owner)})
           "Submit"]
          (= ab cb)
          [(clj->js {:className "btn btn-primary"
                     :disabled "disabled"})
           "Update"]
          :else
          [(clj->js {:className "btn btn-primary"
                     :onClick #(button-func owner)})
           "Update"])))

(defn- form-state
  [owner]
  (let [amount (:amount (om/get-state owner :inputs))
        cb (current-bid (:user-bids (om/get-state owner :project)))
        ab (js/parseFloat (:value amount))]
    (if (or (= ab cb) (= ab 0))
      (clj->js {:className "form-inline"
                :onSubmit (fn [_] false)
                :onKeyDown (fn [e] (if (= 13 (.-which e)) false))})
      (clj->js {:className "form-inline"
                :onSubmit (fn [_] false)
                :onKeyDown (fn [e] (if (= 13 (.-which e)) (button-func owner)))}))))

(defn- inputs
  [owner]
  (let [ub (seq (:user-bids (om/get-state owner :project)))]
    {:amount {:value (if-not ub "0" (current-bid ub))
              :type "number" :name "bid"
              :title (if-not ub
                       "Enter a bid:"
                       "Your current bid:")
              :invalid false
              :input-type :addon :after (:basis (om/get-state owner :project))
              :before "$"}}))

(defn bid-widget
  [project owner]
  (reify
    om/IInitState
    (init-state [_]
      {:inputs nil
       :button-state nil
       :form-state nil
       :project project
       :bid (gensym)})
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (om/set-state! owner :project np)
      (om/set-state! owner :inputs (inputs owner))
      (om/set-state! owner :button-state (button-state owner))
      (om/set-state! owner :form-state (form-state owner)))
    om/IWillMount
    (will-mount [_]
      (om/set-state! owner :inputs (inputs owner))
      (om/set-state! owner :button-state (button-state owner))
      (om/set-state! owner :form-state (form-state owner))
      (ut/register-loop owner (om/get-state owner :bid)
                        (fn [o {:keys [data]}]
                          (ut/get-input o data)
                          (om/set-state! o :button-state (button-state o))
                          (om/set-state! o :form-state (form-state o)))))
    om/IWillUnmount
    (will-unmount [_]
      (ut/unsubscribe owner (om/get-state owner :bid)))
    om/IRenderState
    (render-state [_ {:keys [inputs bid button-state form-state]}]
      (let [amount (:amount inputs)]
        (dom/div
         nil
         (dom/hr nil)
         (dom/div
          #js {:style #js {:text-align "left"}}
          (dom/form
           form-state
           (dom/label #js {:style #js {:padding-right "20px"}}
                      (str "Your current bid:"))
           (dom/span
            #js {:className "form-group input-group"}
            (dom/div #js {:className "input-group-addon"} "$")
            (dom/input #js {:className "form-control"
                            :value (:value amount)
                            :ref "bid"
                            :type (:type amount)
                            :onChange
                            #(ut/on-change-function
                              owner (om/get-state owner :bid) :amount amount %)
                            :style #js {:width "30%"}})
            (apply dom/a button-state)))))))))
