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
            [biomarket.utilities :refer [log] :as ut])
  (:import [goog History]
           [goog.history EventType]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; server calls
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- comment-server-call
  [owner pid]
  (let [h (fn [{:keys [status result]}]
            (om/set-state! owner :comments result))]
    (ut/post-params "/comments" {:pid pid} h)))

(defn- submit-comment-call
  [owner pid]
  (let [c (:comment (om/get-state owner :inputs))
        h (fn [{:keys [status result]}]
            (om/set-state! owner :comments result)
            (om/set-state! owner :inputs (update-in (om/get-state owner :inputs) [:comment :value]
                                                    (fn [_] ""))))]
    (ut/post-params "save-comment" {:pid pid :comment (:value c)} h)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; comments widget
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- show-comment
  [comment owner]
  (dom/div
   nil
   (dom/div #js {:style #js {:font-size "small" :text-align "left"
                             :color (if (= (om/get-state owner :bidder) (:username comment))
                                      "red" "green")}}
            (str "On " (ut/datestring->readable (:time comment))
                 " " (:username comment) " said:"))
   (dom/div #js {:style #js {:margin "5px" :font-weight "bold"}}
            (:comment comment)
            (dom/hr nil))))

(defn- comment-control
  [inputs owner]
  (dom/div
   #js {:className "form"}
   (apply dom/div
          nil
          (map #(om/build ut/input (conj % (om/get-state owner :cid)))
               inputs))
   (dom/a #js {:className "btn btn-primary"
               :onClick #(ut/pub-info owner (om/get-state owner :cid) {:action :submit})}
          "Comment")))

(defn comments
  [project owner]
  (reify
    om/IInitState
    (init-state [_]
      {:inputs {:comment {:value "" :type "textarea" :rows "2" :name "comment"
                          :input-type :no-icon :invalid false
                          :title ""
                          :submitf #(ut/pub-info owner (om/get-state owner :cid) {:action :submit})}}
       :bidee (:username project)
       :cid (gensym)
       :comments nil})
    om/IWillMount
    (will-mount [_]
      (ut/register-loop owner (om/get-state owner :cid)
                        (fn [o {:keys [data]}]
                          (condp = (:action data)
                            :submit (submit-comment-call owner (:id project))
                            (ut/get-input o data))))
      (comment-server-call owner (:id project)))
    om/IRenderState
    (render-state [_ {:keys [inputs cid comments]}]
      (dom/div
       #js {:style #js {:margin-top "10px"}}
       (dom/label nil "Discussion")
       (dom/div
        #js {:className "panel panel-default"
             :style #js {:min-height "100%"}}
        (apply dom/div
               #js {:className "panel-body"
                    :ref "comments"
                    :style #js {:margin "5px"
                                :max-height "200"
                                :overflow-y "scroll"
                                :position "relative"
                                :bottom "0"}}
               (if-not (seq comments)
                 (list (dom/div #js {:style #js {:text-align "center"}}
                                "No discussion yet!")
                       (dom/hr nil))
                 (map #(show-comment % owner)
                      (filter #(not (= "" (str/trim (:comment %))))
                              (sort-by :time < comments)))))
        (dom/div
         #js {:className "panel-footer"}
         (comment-control inputs owner)))))))

