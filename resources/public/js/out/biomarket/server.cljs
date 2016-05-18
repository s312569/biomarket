(ns ^:figwheel-always biomarket.server
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [cljs.core.async :refer [put! <! >! chan pub sub unsub]]
            [clojure.string :as str]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [biomarket.utilities :as ut]
            [taoensso.sente  :as sente :refer (cb-success?)]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; websocket server
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defonce app-state
  (let [req-chan (chan)
        pub-chan (chan)
        notif-chan (pub pub-chan :topic)
        {:keys [chsk ch-recv send-fn state]}
        (sente/make-channel-socket! "/chsk" {:type :auto})]
    (atom {:req-chan req-chan
           :notif-chan notif-chan
           :pub-chan pub-chan
           :chsk chsk
           :ch-chsk ch-recv
           :chsk-send! send-fn
           :chsk-state state})))

(defmulti -event-msg-handler
  "Multimethod to handle Sente `event-msg`s"
  :id)

(defn event-msg-handler
  "Wraps `-event-msg-handler` with logging, error catching, etc."
  [{:as ev-msg :keys [id ?data event]}]
  (-event-msg-handler ev-msg))

(defmethod -event-msg-handler
  :default ; Default/fallback case (no other matching handler)
  [{:as ev-msg :keys [event]}]
  (ut/log (str "Unhandled event: " event)))

(defmethod -event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data]}]
  (if (:first-open? ?data)
    (ut/log (str "Channel socket successfully established!: " ?data))
    (ut/log (str "Channel socket state change: " ?data))))

(defmethod -event-msg-handler :chsk/recv
  [{:as ev-msg :keys [?data]}]
  (ut/log (str "Push event from server: " ?data)))

(defmethod -event-msg-handler :chsk/handshake
  [{:as ev-msg :keys [?data]}]
  (let [[?uid ?csrf-token ?handshake-data] ?data]
    (ut/log (str "Handshake: " ?data))))

(defmethod -event-msg-handler :some/broadcast
  [{:as ev-msg :keys [?data]}]
  (let [[?uid ?csrf-token ?handshake-data] ?data]
    (ut/log (str "BC: " ?data))))

(defonce router_ (atom nil))

(defn  stop-router! [] (when-let [stop-f @router_] (stop-f)))

(defn start-router! []
  (stop-router!)
  (reset! router_
    (sente/start-client-chsk-router!
     (:ch-chsk @app-state) event-msg-handler)))

(defonce _start-once (start-router!))

;; ((:chsk-send! @app-state)
;;  [::testing {:did-this-work "nope"}]
;;  5000
;;  (fn [cb-reply] (ut/log (str "Callback reply: " cb-reply))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; websocket server
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
