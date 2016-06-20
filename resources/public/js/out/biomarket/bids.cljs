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
            [biomarket.components :as comps])
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

(defn average-bid
  [project]
  (if-let [bb (seq (sort-best-bids project))]
    (/ (->> (map :amount bb)
            (reduce +))
       (count bb))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; buttons
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod ut/broadcast-loop-manager :bids-read
  [owner {:keys [data]}]
  (om/set-state! owner :unread (remove #(and ((set data) %)
                                             (contains? % :bid))
                                       (om/get-state owner :unread))))

(defmethod server/publish-update :bids-read
  [{:keys [type data] :as m}]
  (server/default-publish m :bids-read))

(defmethod ut/broadcast-loop-manager :new-bid-comment
  [owner {:keys [data]}]
  (if (= (om/get-state owner :pid) (:pid data))
    (om/set-state! owner :unread (cons {(:type data) (:id data)} (om/get-state owner :unread)))))

(defmethod server/publish-update :new-bid-comment
  [{:keys [type data] :as m}]
  (server/default-publish m :new-bid-comment))

(defmethod ut/broadcast-loop-manager :bid-comment-read
  [owner {:keys [data]}]
  (om/set-state! owner :unread (remove #(and ((set data) %)
                                             (contains? % :comment))
                                       (om/get-state owner :unread))))

(defmethod server/publish-update :bid-comment-read
  [{:keys [type data] :as m}]
  (server/default-publish m :bid-comment-read))

(defn bid-bbutton
  [[project tag] owner]
  (om/component
   (om/build comps/badged-button {:project project
                                  :view-tag tag
                                  :bcast [[:bids-read (chan)]
                                          [:new-bid-comment (chan)]
                                          [:bid-comment-read (chan)]]
                                  :db-unread :unread-bids
                                  :db-mark :bids-read
                                  :text "Show bids"
                                  :badges [{:dfunc (fn [x] (let [c (->> (filter #(contains? % :bid) x)
                                                                        count)]
                                                             (if (> c 0)
                                                               (condp < c
                                                                 1 (str c " new bids")
                                                                 (str c " new bid")))))}
                                           {:dfunc (fn [x] (let [c (->> (filter #(contains? % :comment) x)
                                                                        count)]
                                                             (if (> c 0)
                                                               (condp < c
                                                                 1 (str c " new comments")
                                                                 (str c " new comment")))))}]})))

(defn bid-history-button
  [[p tag] owner]
  (om/component
   (om/build comps/bottom-button {:project p :view-tag tag :text "Bid history"})))

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
;; bid management
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn bid-display
  [project owner]
  (reify
    om/IInitState
    (init-state [_]
      {:visible false
       :bg (if (= 0 (mod (:row project) 2))
             "white" "#E7E7E7")})
    om/IRenderState
    (render-state [_ {:keys [visible bg]}]
      (let [bid (:bid project)
            basis (:basis project)
            pid (:id project)]
        (dom/div
         nil
         (dom/div
          #js {:className "row"
               :style #js {:background-color bg
                           :padding "5px"}}
          (dom/div
           #js {:className "col-md-6"
                :style #js {:text-align "left"
                            :height "40px"
                            :line-height "40px"}}
           (dom/span nil (str "$" (:amount bid) " " basis " from "))
           (dom/span nil (dom/a #js {:href "#"} (:username bid))))
          (dom/div
           #js {:className "col-md-6"
                :style #js {:text-align "right"
                            :height "40px"
                            :line-height "40px"}}
           (dom/div
            #js {:className "btn-group"}
            (om/build com/comment-bbutton [project
                                           :discussion
                                           (if (= visible :discussion)
                                             "btn btn-default btn-sm active"
                                             "btn btn-default btn-sm")
                                           #(if (= visible :discussion)
                                              (om/set-state! owner :visible false)
                                              (om/set-state! owner :visible :discussion))
                                           visible
                                           (:username bid)])
            (dom/a #js {:className (if (= visible :skills)
                                     "btn btn-default btn-sm active"
                                     "btn btn-default btn-sm")
                        :onClick #(if (= visible :skills)
                                    (om/set-state! owner :visible false)
                                    (om/set-state! owner :visible :skills))}
                   "Skills match")
            (dom/a #js {:className "btn btn-primary btn-sm"
                        :onClick (fn [x] nil)}
                   "Accept this bid"))))
         (if visible
           (dom/div
            #js {:className "row"
                 :style #js {:background-color bg
                             :padding "5px"}}
            (dom/div
             #js {:className "col-md-12"}
             (condp = visible
               :discussion (om/build com/comments [project (:username bid)])
               :skills (om/build skills/skill-tags [project {}])
               nil)))))))))

(defn bid-manage
  [project owner]
  (reify
    om/IInitState
    (init-state [_]
      {:best-bids (sort-best-bids project)
       :counter (atom 0)})
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (om/set-state! owner :best-bids (sort-best-bids np)))
    om/IRenderState
    (render-state [_ {:keys [best-bids counter]}]
      (apply dom/div
             #js {:className "container-fluid"
                  :style #js {:padding-top "20px"}}
             (map #(om/build bid-display (assoc project :bid % :row (swap! counter inc)))
                  best-bids)))))

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
  (ut/pub-info owner {:alert (:id (om/get-state owner :project))}
               {:action :project-alert :alert "Your bid has been recorded and the project will be shifted to the 'My Jobs' tab." :type :success})
  (ut/pub-info owner :remove-project {:action :remove-project :pid (:id (om/get-state owner :project))})
  (server/save-data
   {:type :bid
    :data {:pid (:id (om/get-state owner :project))
           :amount (get-in (om/get-state owner :inputs) [:amount :value])}}))

(defn- button-state
  [owner]
  (let [cb (current-bid (:user-bids (om/get-state owner :project)))
        ab (js/parseFloat (:value (:amount (om/get-state owner :inputs))))]
    (cond (not cb)
          [(clj->js {:className "btn btn-primary"
                     :onClick #(button-func owner)})
           "Make a bid"]
          (= ab cb)
          [(clj->js {:className "btn btn-primary"
                     :disabled "disabled"})
           "Update Bid"]
          :else
          [(clj->js {:className "btn btn-primary"
                     :onClick #(button-func owner)})
           "Update Bid"])))

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
         #js {:style #js {:text-align "right"}}
         (dom/form
          form-state
          (dom/div
           #js {:className "form-group"}
           (dom/div
            #js {:className "input-group"}
            (dom/div #js {:className "input-group-addon"} "$")
            (dom/input #js {:className "form-control"
                            :value (:value amount)
                            :ref "bid"
                            :type (:type amount)
                            :onChange
                            #(ut/on-change-function
                              owner (om/get-state owner :bid) :amount amount %)})
            (dom/div #js {:className "input-group-addon"} (:basis project))))
          (apply dom/a button-state)))))))
