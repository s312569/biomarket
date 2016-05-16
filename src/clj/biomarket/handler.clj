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
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (-> (routes app-routes)
      (friend/authenticate {:credential-fn check-user
                            :workflows [(workflows/interactive-form)]})
      (middleware/wrap-json-body {:keywords? true})
      (middleware/wrap-json-response)
      (wrap-defaults (assoc site-defaults :security {:anti-forgery false}))))
