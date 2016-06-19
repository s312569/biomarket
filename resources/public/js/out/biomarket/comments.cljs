(ns ^:figwheel-always biomarket.comments
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan pub sub]]
            [om.core :as om :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [om.dom :as dom :include-macros true]
            [clojure.string :as str]
            [cljs-time.core :as time]
            [cljs-time.format :as tf]
            [biomarket.utilities :refer [log] :as ut]
            [biomarket.server :as server])
  (:import [goog History]
           [goog.history EventType]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; button
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod ut/broadcast-loop-manager :comments-read
  [owner {:keys [data]}]
  (om/set-state! owner :unread-comments (remove #((set data) %)
                                                (om/get-state owner :unread-comments))))

(defn comment-bbutton
  [[project tag] owner]
  (reify
    om/IInitState
    (init-state [_]
      {:unread-comments []
       :broadcast-chan (chan)})
    om/IWillMount
    (will-mount [_]
      (server/get-data owner {:type :unread-comments :pid (:id project)}
                       #(om/set-state! owner :unread-comments (:data %)))
      (ut/register-broadcast-loop owner
                                  :comments-read
                                  (om/get-state owner :broadcast-chan)))
    om/IWillUnmount
    (will-unmount [_]
      (ut/unsub-broadcast-loop owner :comments-read (om/get-state :broadcast-chan)))
    om/IRenderState
    (render-state [_ {:keys [unread-comments]}]
      (let [visible (:bottom-view project)]
        (dom/a
         #js {:className (if (= visible tag)
                           "btn btn-default active"
                           "btn btn-default")
              :onClick
              (fn [x]
                (ut/pub-info owner (:id project)
                             {:action :show-bottom
                              :bottom-view
                              (if (= visible tag) :default tag)})
                (if (seq unread-comments)
                  (server/save-data {:type :comments-read
                                     :data {:cids unread-comments}}
                                    (fn [x]
                                      (if-not (= :success (:status x))
                                        (set! js/window.location "/error"))))))}
         "Discussion "
         (if (and (> (count unread-comments) 0)
                  (not (= tag visible)))
           (dom/span #js {:className "badge"
                          :style #js {:background-color "#d43f3a"}}
                     (count unread-comments))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; subcomponents
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- show-comment
  [comment owner]
  (dom/div
   nil
   (dom/div #js {:style #js {:font-size "small" :text-align "left"
                             :color (if (= (om/get-state owner :bidder)
                                           (:sender comment))
                                      "red" "green")}}
            (str "On " (ut/datestring->readable (:time comment))
                 " " (:sender comment) " said:"))
   (dom/div #js {:style #js {:margin "5px" :font-weight "bold"}}
            (:comment comment)
            (dom/hr nil))))

(defn- comment-display-panel
  [comments owner]
  (reify
    om/IDidUpdate
    (did-update [_ _ _]
      (let [n (om/get-node owner "cd")]
        (aset n "scrollTop" "10000")))
    om/IRenderState
    (render-state [_ _]
      (apply dom/div
             #js {:className "panel-body"
                  :ref "cd"
                  :style #js {:margin "5px"
                              :height "200"
                              :overflow-y "scroll"
                              :position "relative"}}
             (if-not (seq comments)
               (list (dom/div #js {:style #js {:text-align "center"}}
                              "No discussion yet!")
                     (dom/hr nil))
               (map #(show-comment % owner)
                    (filter #(not (= "" (str/trim (:comment %))))
                            (sort-by :time < comments))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; widget
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- comment-control
  [inputs utag owner]
  (let [comment (:comment (om/get-state owner :inputs))
        current-value (:value comment)
        ut (om/get-state owner :update-topic)]
    (dom/form
     #js {:className "form-horizontal"
          :onSubmit (fn [_] false)}
     (dom/div
      #js {:className "form-group"}
      (dom/div #js {:className "col-sm-3"} " ")
      (dom/div
       #js {:className "col-sm-12"}
       (dom/textarea #js {:className "form-control"
                          :value current-value
                          :placeholder "Type comment - Press return to submit"
                          :onKeyDown (ut/capture-return
                                      #(ut/on-submit-function owner utag))
                          :rows "1"
                          :onChange #(ut/on-change-function
                                      owner utag :comment comment %)}))))))

(defn- submit-func
  [owner]
  (let [comment (-> (get-in (om/get-state owner :inputs) [:comment :value])
                    str/trim)
        pid (om/get-state owner :pid)
        receiver (om/get-state owner :receiver)
        new-inputs (assoc-in (om/get-state owner :inputs) [:comment :value] "")]
    (server/save-data {:type :comment :data {:comment comment
                                             :pid pid
                                             :receiver receiver}})
    (om/set-state! owner :inputs new-inputs)))

(defn- mark-read
  [cids pid]
  (server/save-data {:type :comments-read
                     :data cids}
   (fn [x]
     (if-not (= :success (:status x))
       (set! js/window.location "/error")))))

(defn comments
  [[project receiver] owner]
  (reify
    om/IInitState
    (init-state [_]
      {:inputs {:comment {:value "" :invalid false}}
       :pid (:id project)
       :receiver (or receiver (:username project))
       :update-topic (gensym)
       :comments []
       :broadcast-chan (chan)})
    om/IWillMount
    (will-mount [_]
      (let [pid (om/get-state owner :pid)
            bct {:comment pid}
            bc (om/get-state owner :broadcast-chan)
            ut (om/get-state owner :update-topic)
            receiver (om/get-state owner :receiver)]
        (ut/register-loop owner ut (fn [o d] (ut/loop-manager o d #(submit-func o))))
        (ut/register-broadcast-loop owner bct bc)
        (server/get-data owner {:type :comments :pid pid :username2 receiver}
                         #(om/set-state! owner :comments (:data %)))))
    om/IWillUnmount
    (will-unmount [_]
      (let [bct {:comment (om/get-state owner :pid)}
            bc (om/get-state owner :broadcast-chan)
            ut (om/get-state owner :update-topic)]
        (ut/unsub-broadcast-loop owner bct bc)
        (ut/unsubscribe owner ut)))
    om/IRenderState
    (render-state [_ {:keys [inputs update-topic comments]}]
      (dom/div
       #js {:style #js {:margin-top "10px"}}
       (dom/label nil "Discussion")
       (dom/div
        #js {:className "panel panel-default" :style #js {:min-height "100%"}}
        (om/build comment-display-panel comments)
        (dom/div #js {:className "panel-footer"}
                 (comment-control inputs update-topic owner)))))))

