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
            [biomarket.server :as wss]
            [ring.util.response :refer [resource-response response redirect]]
            [ring.middleware.json :as middleware]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [clojure.string :refer [blank?]])
  (:import java.net.URI))

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
  (GET "/error" request
       (friend/authorize #{:user} (response "Error - something went wrong!")))
  (GET "/logout" req
       (friend/logout* (redirect (str (:context req) "/"))))
  (POST "/signup" {params :params :as req}
        (new-user params req))
  (POST "/user-exists" req
        (let [p (:body req)]
          (response (db/user-exists p))))
  ;; websockets
  (GET  "/chsk" req (:ring-ajax-get-or-ws-handshake @wss/websocket req))
  (POST "/chsk" req (:ring-ajax-post @wss/websocket req))
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
