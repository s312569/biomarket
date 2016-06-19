(ns ^:figwheel-always biomarket.components
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [ajax.core :refer [POST]]
            [cljs.core.async :refer [put! <! >! chan pub sub unsub]]
            [clojure.string :as str]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [biomarket.server :as server]
            [biomarket.utilities :as ut]
            [taoensso.sente  :as sente :refer (cb-success?)]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; buttons
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- mark-read
  [unread dbtag]
  (if (seq unread)
    (server/save-data {:type dbtag
                       :data {:ids unread}}
                      (fn [x]
                        (if-not (= :success (:status x))
                          (set! js/window.location "/error"))))))

(defn- default-click
  [project tag owner]
  (ut/pub-info owner (:id project)
               {:action :show-bottom
                :bottom-view
                (if (= (:bottom-view project) tag) :default tag)}))

(defn badge
  [{:keys [unread dfunc]} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:display-func dfunc})
    om/IRenderState
    (render-state [_ {:keys [display-func]}]
      (if-let [d (dfunc unread)]
        (dom/span #js {:className "badge"
                       :style (ut/fade-in {:background-color "#d43f3a"} 2)}
                  d)))))

(defn badged-button
  [{:keys [project view-tag bclass bclick visible bcast-read bcast-new db-unread db-mark text badges]} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:unread []
       :username []
       :pid (:id project)})
    om/IWillMount
    (will-mount [_]
      (server/get-data owner {:type db-unread :pid (:id project)}
                       #(om/set-state! owner :unread (:data %)))
      (server/get-data owner {:type :username}
                       #(om/set-state! owner :username (:data %)))
      (map (fn [[k v]] (ut/register-broadcast-loop owner k v))))
    om/IWillUnmount
    (will-unmount [_]
      (map (fn [[k v]] (ut/unsub-broadcast-loop owner k v))))
    om/IWillUpdate
    (will-update [_ {:keys [project view-tag visible]} ns]
      (if (= (or visible (:bottom-view project)) view-tag)
        (mark-read (:unread ns) db-mark)))
    om/IRenderState
    (render-state [_ {:keys [unread]}]
      (let [visible (or visible (:bottom-view project))]
        (dom/a
         #js {:className (or bclass (if (= visible view-tag) "btn btn-default active" "btn btn-default"))
              :onClick (if bclick
                         #(do (bclick) (mark-read unread db-mark))
                         #(do (default-click project view-tag owner) (mark-read unread db-mark)))}
         (str text " ")
         (if (and (> (count unread) 0)
                  (not (= view-tag visible)))
           (if-not badges
             (om/build badge {:unread unread :dfunc count})
             (apply dom/span nil (map #(om/build badge (assoc % :unread unread)) badges)))))))))

(defn bottom-button
  [{:keys [project view-tag bclass bclick visible text]} owner]
  (om/component
    (let [visible (or visible (:bottom-view project))]
      (dom/a
       #js {:className (or bclass (if (= visible view-tag) "btn btn-default active" "btn btn-default"))
            :onClick (if bclick #(bclick) #(default-click project view-tag owner))}
       text))))
