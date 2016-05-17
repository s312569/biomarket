(ns ^:figwheel-always biomarket.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan pub sub]]
            [om.core :as om :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [om.dom :as dom :include-macros true]
            [biomarket.login :as login]
            [biomarket.utilities :refer [log] :as ut]
            [biomarket.dashboard :refer [dashboard]]
            [biomarket.projects :refer [projects-view-control]]
            [biomarket.find :refer [find-view]]
            [taoensso.sente  :as sente :refer (cb-success?)])
  (:import [goog History]
           [goog.history EventType]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; websocket stuff
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk"
       {:type :auto})]
  (def chsk chsk)
  (def ch-chsk ch-recv)
  (def chsk-send! send-fn)
  (def chsk-state state))

(defmulti -event-msg-handler
  "Multimethod to handle Sente `event-msg`s"
  :id ; Dispatch on event-id
  )

(defn event-msg-handler
  "Wraps `-event-msg-handler` with logging, error catching, etc."
  [{:as ev-msg :keys [id ?data event]}]
  (-event-msg-handler ev-msg))

(defmethod -event-msg-handler
  :default ; Default/fallback case (no other matching handler)
  [{:as ev-msg :keys [event]}]
  (log (str "Unhandled event: " event)))

(defmethod -event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data]}]
  (if (:first-open? ?data)
    (log (str "Channel socket successfully established!: " ?data))
    (log (str "Channel socket state change: " ?data))))

(defmethod -event-msg-handler :chsk/recv
  [{:as ev-msg :keys [?data]}]
  (log (str "Push event from server: " ?data)))

(defmethod -event-msg-handler :chsk/handshake
  [{:as ev-msg :keys [?data]}]
  (let [[?uid ?csrf-token ?handshake-data] ?data]
    (log (str "Handshake: " ?data))))

(defonce router_ (atom nil))
(defn  stop-router! [] (when-let [stop-f @router_] (stop-f)))
(defn start-router! []
  (stop-router!)
  (reset! router_
    (sente/start-client-chsk-router!
     ch-chsk event-msg-handler)))

(defn start! [] (start-router!))

(defonce _start-once (start!))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; history
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def history (History.))

(events/listen history EventType.NAVIGATE
  (fn [e] (secretary/dispatch! (.-token e))))

(.setEnabled history true)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; app control
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn header
  [current owner]
  (reify
    om/IInitState
    (init-state [_]
      {:nav-items [["Dashboard" ::dash]
                   ["Profile" ::profile]
                   ["My jobs" ::jobs]
                   ["My projects" ::projects]
                   ["Find a project" ::find]
                   ["Logout" ::logout]]})
    om/IRenderState
    (render-state [_ {:keys [nav-items]}]
      (dom/nav
       #js {:className "navbar navbar-default navbar-fixed-top"}
       (dom/div
        #js {:className "container"}
        (dom/div
         #js {:className "navbar-header"}
         (dom/a #js {:type "button" :className "navbar-toggle collapsed"
                     :data-toggle "collapse" :data-target "#navbar"
                     :aria-expanded "false" :aria-controls "navbar"}
          (dom/span #js {:className "sr-only"})
          (dom/span #js {:className "icon-bar"})
          (dom/span #js {:className "icon-bar"})
          (dom/span #js {:className "icon-bar"}))
         (dom/a #js {:className "navbar-brand"} "Biomarket"))
        (dom/div
         #js {:id "navbar" :class "navbar-collapse collapse"}
         (apply
          dom/ul
          #js {:className "nav navbar-nav"}
          (map #(dom/li
                 #js {:className (if (= current (second %)) "active")}
                 (dom/a
                  #js {:onClick (fn [_] (ut/pub-info owner ::navigation (second %)))
                       :style #js {:cursor "pointer"}}
                  (first %)))
               nav-items))))))))

(defn app-control
  [_ owner]
  (reify
    om/IInitState
    (init-state [_]
      {:current ::dash})
    om/IWillMount
    (will-mount [_]
      (ut/register-loop owner ::navigation (fn [o {:keys [data]}]
                                            (om/set-state! o :current data))))
    om/IWillUnmount
    (will-unmount [_]
      (ut/unsubscribe owner ::navigation))
    om/IRenderState
    (render-state [_ {:keys [current nav-items]}]
      (dom/div
       #js {:text-align "center"}
       (om/build header current)
       (dom/div #js {:style #js {:padding-top "20px"}} " ")
       (condp = current
         ::dash (om/build dashboard nil)
         ::profile "Profile"
         ::jobs "Jobs"
         ::find (om/build find-view nil)
         ::projects (om/build projects-view-control nil)
         ::logout (set! (.-location js/document) "/logout"))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; home
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn ^:export init []
  (om/root app-control
           nil
           {:target (. js/document (getElementById "app"))
            :shared @ut/app-state}))
