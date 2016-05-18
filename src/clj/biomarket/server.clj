(ns biomarket.server
  (:require [biomarket.models.db :as db]
            [taoensso.sente :as sente]
            [taoensso.sente.server-adapters.http-kit :refer (sente-web-server-adapter)])
  (:import java.net.URI))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; the server
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defonce router_ (atom nil))

(defn- user-id
  [r]
  (get-in r [:session :cemerick.friend/identity :current]))

(defonce websocket
  (let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
                connected-uids]}
        (sente/make-channel-socket! sente-web-server-adapter
                                    {:user-id-fn user-id})]
    (atom {:ring-ajax-post ajax-post-fn
           :ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn
           :ch-chsk ch-recv
           :chsk-send! send-fn
           :connected-uids connected-uids})))

(defmulti -event-msg-handler
  "Multimethod to handle Sente `event-msg`s"
  :id)

(defn event-msg-handler
  "Wraps `-event-msg-handler` with logging, error catching, etc."
  [{:as ev-msg :keys [id ?data event]}]
  (-event-msg-handler ev-msg))

(defn  stop-router!
  []
  (when-let [stop-f @router_] (stop-f)))

(defn start-router!
  []
  (stop-router!)
  (reset! router_
          (sente/start-server-chsk-router!
           (:ch-chsk @websocket) event-msg-handler)))

(defonce _start-once (start-router!))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; event handlers
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod -event-msg-handler
  :default
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)]
    (println (str "Unhandled event jason: " event))
    (when ?reply-fn
      (?reply-fn {:umatched-event-as-echoed-from-from-server event}))))

(defmethod -event-msg-handler
  :chsk/ws-ping
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)]
    (println (str "This is a ping: " event))
    (when ?reply-fn
      (?reply-fn {:ping-event event}))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; functions
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn broadcast!
  [type data]
  (doseq [uid (:any @(:connected-uids @websocket))]
    ((:chsk-send! @websocket) uid
     [::update {:type type :data data}])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; debug and testing
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod -event-msg-handler
  :biomarket.server/testing
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)]
    (println (str "Test is working!!!!! " @(:connected-uids @websocket)))
    (when ?reply-fn
      (?reply-fn {:reply "This is the reply" :event @(:connected-uids @websocket)}))))


(defn test-bc []
  (printf (str "Broadcasting server>user: " @(:connected-uids @websocket)))
  (doseq [uid (drop 1 (:any @(:connected-uids @websocket)))]
    ((:chsk-send! @websocket) uid
     [:some/broadcast
      {:what-is-this "An async broadcast pushed from server"
       :how-often "Every 10 seconds"
       :to-whom uid}])))

;;(test-bc)

