(ns biomarket.models.db
  (:require [clojure.java.jdbc :as db]
            [clojure.string :refer [split trim] :as st]
            [clojure.java.io :as io]
            [jdbc.pool.c3p0 :as pool]
            [clojure.java.io :refer [resource]]
            [clojure.edn :as edn]
            [clj-time.core :as t]
            [clj-time.format :as f]
            [clj-time.coerce :as c]
            [clj-time.jdbc])
  (:import [org.apache.commons.codec.binary Base64]
           [org.postgresql.util PGobject]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; spec
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def spec
  (pool/make-datasource-spec
   {:classname "org.postgresql.Driver"
    :subprotocol "postgresql"
    :user "jason"
    :password "7004jason"
    :subname (str "//" "127.0.0.1" ":" "5432" "/" "biomarket")}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; time
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn readable-duration [minutes]
  (let [int-minutes (int minutes)
        days        (quot int-minutes 1440)
        days-r      (rem int-minutes 1440)
        hours       (quot days-r 60)
        hours-r     (rem days-r 60)
        minutes     (rem hours-r 60)]
    {:days days :hours hours :minutes minutes}))

(defn- time-plural
  [unit text]
  (if (> unit 0) (str unit " " text "s") (str unit " " text)))

(defn- minutes-till
  [d]
  (let [{:keys [days hours minutes]}
        (readable-duration (t/in-minutes (if (t/after? (t/now) d)
                                           (t/interval d (t/now))
                                           (t/interval (t/now) d))))]
    (cond (> days 0) (str (time-plural days "day") " " (time-plural hours "hour"))
          (> hours 0)
          (str (time-plural hours "hour") " " (time-plural minutes "minute"))
          :else
          (time-plural minutes "minute"))))

(defn- days-till
  [d]
  (let [{:keys [days hours minutes]}
        (readable-duration (t/in-minutes (if (t/after? (t/now) d)
                                           (t/interval d (t/now))
                                           (t/interval (t/now) d))))]
    (cond (> days 0) (if (= 1 days) (str days " day") (str days " days"))
          (> hours 0) (if (= 1 hours) (str hours " hour") (str hours " hours"))
          :else (if (= 1 minutes) (str minutes " minute") (str minutes " minutes")))))

(defn- parse-date
  [date]
  (let [f (f/formatters :date)]
    (f/unparse f date)))

(defn- set-datetime
  [string]
  (let [f (map #(Integer/parseInt %) (st/split string #"-"))]
    (-> (apply t/date-time (concat f '(0 0 0)))
        (t/plus (t/days 1)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; money
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn moneystring->bigdec
  [string]
  (.setScale (bigdec string) 2 BigDecimal/ROUND_CEILING))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; inserting
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn insert!
  [table m]
  (db/insert! spec table m))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; server call handlers
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn user-exists
  [{:keys [email]}]
  {:status "success"
   :result (db/query spec
                     ["select count(*) from users where email = ?" email]
                     :result-set-fn #(not
                                      (= 0 (:count (first %)))))})

(defn new-user
  [m]
  {:status "success"
   :result (insert! :users m)})

(defn login-get-user
  [username]
  (db/query spec
            ["select password from users where email = ?" username]
            :result-set-fn #(if-let [a (and (seq %) (first %))]
                              (hash-map username
                                        {:username username
                                         :password (:password a)
                                         :roles #{:user}})
                              {})))

(defn get-skills
  [m]
  {:status "success"
   :result (db/query spec ["select * from skills"])})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; bid server calls
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- fix-times
  [bid]
  (let [f (f/formatters :basic-date-time)]
    (update-in bid [:time] #(f/unparse f %))))

(defn save-bid
  [{:keys [session body]}]
  (let [user (get-in session [:cemerick.friend/identity :current])
        time (f/parse (f/formatters :basic-date-time) (:time body))
        bid-id (-> (insert! :bids (-> (dissoc body :comment :date)
                                      (assoc :username user :status "submitted" :time time
                                             :amount (moneystring->bigdec (:amount body)))))
                   first :id)
        comment-id (-> (insert! :bidcomments
                                (-> (select-keys body [:comment :pid :time])
                                    (assoc :username user :bid bid-id :time time)))
                       first :id)
        bids (db/query spec ["select * from bids where pid = ?" (:pid body)]
                       :row-fn fix-times)]
    {:status "success"
     :result {:bids bids
              :user-bids (filter #(= user (:username %)) bids)}}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; project server calls
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- project-skills
  [id]
  (db/query spec ["select id,name,type from skills,skillproj where skillproj.sid=skills.id and skillproj.pid=?" id]))

(defn- calculate-times
  [rows]
  (->> (map #(update-in % [:bidmin] (fn [_] (minutes-till (:biddead %)))) rows)
       (map #(update-in % [:projmin] (fn [_] (days-till (:projdead %)))))
       (map #(update-in % [:biddead] (fn [x] (parse-date x))))
       (map #(update-in % [:projdead] (fn [x] (parse-date x))))))

(defn- get-bids
  [row]
  (let [bs (db/query spec ["select * from bids where pid = ?" (:id row)]
                     :row-fn fix-times)]
    (merge row {:bids bs :user-bids (filter #(= (:username row) (:username %)) row)})))

(defn- projects
  [q]
  (->> (db/query spec q :row-fn (fn [x] (assoc x :skills (project-skills (:id x)))))
       (map get-bids)
       calculate-times))

(defmulti get-projects (fn [{:keys [session body]}] (:query-type body)))

(defmethod get-projects "expired-projects"
  [{:keys [session body]}]
  (let [user (get-in session [:cemerick.friend/identity :current])]
    {:status "success"
     :result (->> (projects ["select * from projects where username = ? and biddead < ?"
                             user (t/now)])
                  (map #(update-in % [:status] (fn [_] :expired))))}))

(defmethod get-projects "all-projects"
  [{:keys [body]}]
  {:status "success"
   :result (projects ["select * from projects where status = ? and biddead > ?"
                      (name (:status body)) (t/now)])})

(defmethod get-projects "user-projects"
  [{:keys [session body]}]
  (let [user (get-in session [:cemerick.friend/identity :current])]
    {:status "success"
     :result (projects ["select * from projects where username = ? and biddead > ?"
                        user (t/now)])}))

(defn save-project
  [r]
  (let [m (-> (assoc (:body r) :username (get-in r [:session :cemerick.friend/identity
                                                    :current]))
              (update-in [:hours] #(Integer/parseInt %))
              (update-in [:budget] #(Integer/parseInt %))
              (update-in [:biddead] set-datetime)
              (update-in [:projdead] set-datetime)
              (assoc :status "open")
              (select-keys [:title :description :hours :budget :basis
                            :username :biddead :projdead :status]))
        sk (get-in r [:body :skills])]
    {:status "success"
     :result (let [pid (-> (insert! :projects m) first :id)]
               (if (seq sk)
                 (apply db/insert! spec :skillproj
                        (map #(hash-map :sid % :pid pid) sk)))
               pid)}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; tables
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn create-database
  []
  (let [skills (edn/read-string (slurp (resource "data/skills.clj")))]
    (try
      (do
        (db/db-do-commands spec
                           (db/create-table-ddl
                            :users
                            [:id :serial "PRIMARY KEY"]
                            [:first :varchar "NOT NULL"]
                            [:last :varchar "NOT NULL"]
                            [:email :varchar "NOT NULL"]
                            [:address :varchar]
                            [:password :varchar "NOT NULL"]))
        (db/db-do-commands spec
                           (db/create-table-ddl
                            :skills
                            [:id :serial "PRIMARY KEY"]
                            [:name :varchar "NOT NULL"]
                            [:type :varchar "NOT NULL"]))
        (db/db-do-commands spec
                           (db/create-table-ddl
                            :skillproj
                            [:sid :integer "NOT NULL"]
                            [:pid :integer "NOT NULL"]))
        (db/db-do-commands spec
                           (db/create-table-ddl
                            :projects
                            [:id :serial "PRIMARY KEY"]
                            [:username :varchar "NOT NULL"]
                            [:title :varchar "NOT NULL"]
                            [:description :varchar "NOT NULL"]
                            [:biddead :timestamp "NOT NULL"]
                            [:projdead :timestamp "NOT NULL"]
                            [:hours :integer "NOT NULL"]
                            [:budget :integer "NOT NULL"]
                            [:basis :varchar "NOT NULL"]
                            [:status :varchar "NOT NULL"]))
        (db/db-do-commands spec
                           (db/create-table-ddl
                            :bidcomments
                            [:id :serial "PRIMARY KEY"]
                            [:comment :varchar "NOT NULL"]
                            [:username :varchar "NOT NULL"]
                            [:time :timestamp "NOT NULL"]
                            [:bid :integer "NOT NULL"]
                            [:pid :integer "NOT NULL"]))
        (db/db-do-commands spec
                           (db/create-table-ddl
                            :bids
                            [:id :serial "PRIMARY KEY"]
                            [:pid :integer "NOT NULL"]
                            [:time :timestamp "NOT NULL"]
                            [:amount :decimal "NOT NULL"]
                            [:basis :varchar "NOT NULL"]
                            [:username :varchar "NOT NULL"]
                            [:status :varchar "NOT NULL"]))
        (apply db/insert! spec :skills skills))
      (catch Exception e
        (println (.getNextException e))))))

(defn delete-database
  []
  (map #(try
          (db/db-do-commands spec
                             (db/drop-table-ddl %))
          (catch Exception _))
       '(:users :skills :skillproj :projects :bids :bidcomments)))
