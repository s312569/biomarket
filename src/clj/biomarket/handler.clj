(ns biomarket.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [cemerick.friend :as friend]
            (cemerick.friend [workflows :as workflows]
                             [credentials :as creds])
            [biomarket.routes.home :refer [home-view]]
            [biomarket.routes.login :refer [login-or-register]]
            [biomarket.routes.app :refer [app-view]]
            [biomarket.models.db :as db]
            [ring.util.response :refer [resource-response response redirect]]
            [ring.middleware.json :as middleware]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [clojure.string :refer [blank?]]
            [taoensso.sente :as sente]
            [org.httpkit.server :as http-kit]
            [taoensso.sente.server-adapters.http-kit :refer (sente-web-server-adapter)])
  (:import java.net.URI))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; websocket stuff
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
              connected-uids]}
      (sente/make-channel-socket! sente-web-server-adapter {})]
  (def ring-ajax-post ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk ch-recv)
  (def chsk-send! send-fn)
  (def connected-uids connected-uids))

(defmulti -event-msg-handler
  "Multimethod to handle Sente `event-msg`s"
  :id)

(defn event-msg-handler
  "Wraps `-event-msg-handler` with logging, error catching, etc."
  [{:as ev-msg :keys [id ?data event]}]
  (-event-msg-handler ev-msg))

(defmethod -event-msg-handler
  :default
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)]
    (println (str "Unhandled event jason: " event))
    (when ?reply-fn
      (?reply-fn {:umatched-event-as-echoed-from-from-server event}))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; server
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (defn start-selected-web-server! [ring-handler port]
;;   (println "Starting http-kit...")
;;   (let [stop-fn (http-kit/run-server ring-handler {:port port})]
;;     {:server  nil ; http-kit doesn't expose this
;;      :port    (:local-port (meta stop-fn))
;;      :stop-fn (fn [] (stop-fn :timeout 100))}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; authentication
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- resolve-uri
  [context uri]
  (let [context (if (instance? URI context) context (URI. context))]
    (.resolve context uri)))

(defn- context-uri
  "Resolves a [uri] against the :context URI (if found) in the provided
   Ring request.  (Only useful in conjunction with compojure.core/context.)"
  [{:keys [context]} uri]
  (if-let [base (and context (str context "/"))]
    (str (resolve-uri base uri))
    uri))

(defn new-user
  [{:keys [fname sname email password1 password2] :as params} req]
  (if (and (not-any? blank? [fname sname password1 password2])
           (= password1 password2))
    (let [user {:identity email
                :username email
                :password (creds/hash-bcrypt password1)
                :roles #{:user}}]
      (db/new-user {:first fname :last sname :password (creds/hash-bcrypt password1)
                    :email email})
      (friend/merge-authentication
       (redirect (str (:context req) "/user"))
       user))))

(defn check-user
  [{:keys [username password] :as params}]
  (creds/bcrypt-credential-fn (db/login-get-user username) params))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; routes
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defroutes app-routes
  (GET "/" [] (home-view))
  (GET "/login" [] (login-or-register))
  (GET "/user" request
       (friend/authorize #{:user} (app-view)))
  (GET "/logout" req
       (friend/logout* (redirect (str (:context req) "/"))))
  (POST "/new-project" req
        (friend/authorize #{:user} (response (db/save-project req))))
  (POST "/bids" req
        (friend/authorize #{:user} (response (db/get-bids req))))
  (POST "/save-bid" req
        (friend/authorize #{:user} (response (db/save-bid req))))
  (POST "/projects" req
        (friend/authorize #{:user} (response (db/get-projects req))))
  (POST "/skills" req
        (let [p (:body req)]
          (friend/authorize #{:user} (response (db/get-skills p)))))
  (POST "/signup" {params :params :as req}
        (new-user params req))
  (POST "/comments" req
        (friend/authorize #{:user} (response (db/get-comments req))))
  (POST "/save-comment" req
        (friend/authorize #{:user} (response (db/save-comment req))))
  (POST "/user-exists" req
        (let [p (:body req)]
          (response (db/user-exists p))))
  ;; websockets
  (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (ring-ajax-post req))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (-> (routes app-routes)
      (friend/authenticate {:credential-fn check-user
                            :workflows [(workflows/interactive-form)]})
      (middleware/wrap-json-body {:keywords? true})
      (middleware/wrap-json-response)
      (wrap-defaults (assoc site-defaults :security {:anti-forgery false}))))

;;(wrap-defaults (assoc site-defaults :security {:anti-forgery false}))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; start websocket
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defonce router_ (atom nil))

(defn  stop-router! [] (when-let [stop-f @router_] (stop-f)))

(defn start-router! []
  (stop-router!)
  (reset! router_
    (sente/start-server-chsk-router!
     ch-chsk event-msg-handler)))

(defonce _start-once (start-router!))

;; (defonce    web-server_ (atom nil)) ; {:server _ :port _ :stop-fn (fn [])}

;; (defn  stop-web-server! [] (when-let [m @web-server_] ((:stop-fn m))))

;; (defn start-web-server! [& [port]]
;;   (stop-web-server!)
;;   (let [{:keys [stop-fn port] :as server-map}
;;         (start-selected-web-server! (var app)
;;           (or port 0) ; 0 => auto (any available) port
;;           )
;;         uri (format "http://localhost:%s/" port)]
;;     (println "Web server is running at `%s`" uri)
;;     (try
;;       (.browse (java.awt.Desktop/getDesktop) (java.net.URI. uri))
;;       (catch java.awt.HeadlessException _))
;;     (reset! web-server_ server-map)))

;; (defn stop!  []  (stop-web-server!))

;; (defn start! [] (start-web-server!))
;;(defonce _start-once (start!))


;; (defn -main "For `lein run`, etc." [] (start!))
