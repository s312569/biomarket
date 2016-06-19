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
            [biomarket.server :as server]
            [biomarket.components :as comps])
  (:import [goog History]
           [goog.history EventType]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; button
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod ut/broadcast-loop-manager :comments-read
  [owner {:keys [data]}]
  (om/set-state! owner :unread (remove #((set data) %)
                                       (om/get-state owner :unread))))

(defmethod server/publish-update :comments-read
  [{:keys [type data] :as m}]
  (server/default-publish m :comments-read))

(defmethod ut/broadcast-loop-manager :new-comment
  [owner {:keys [data]}]
  (if (and (= (om/get-state owner :username) (:receiver data))
           (= (om/get-state owner :pid) (:pid data)))
    (om/set-state! owner :unread (cons (:id data) (om/get-state owner :unread)))))

(defmethod server/publish-update :new-comment
  [{:keys [type data] :as m}]
  (server/default-publish m :new-comment))

(defn comment-bbutton
  [[project tag bclass bclick visible] owner]
  (om/component
   (om/build comps/badged-button {:project project
                                  :view-tag tag
                                  :visible visible
                                  :bclass bclass
                                  :bclick bclick
                                  :bcast ({:comments-read (chan)}
                                          {:new-comment (chan)})
                                  :db-unread :unread-comments
                                  :db-mark :comments-read
                                  :text "Discussion"})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; widget
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod ut/broadcast-loop-manager :comment
  [owner {:keys [data]}]
  (om/set-state! owner :comments (conj (om/get-state owner :comments) data)))

(defmethod server/publish-update :comment
  [{:keys [type data]}]
  (put! (:pub-chan @server/app-state)
        {:topic {:comment (:pid data)} :type type :data data}))

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

