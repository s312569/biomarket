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
            [clojurewerkz.money.format :as fm]
            [clojurewerkz.money.currencies :as cu]
            [clojurewerkz.money.amounts :refer [amount-of]]
            [clj-time.jdbc]
            [biomarket.server :as server])
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
;; users
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- get-session-user
  [session]
  (get-in session [:cemerick.friend/identity :current]))

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

(defn- fix-times
  [row]
  (let [f (f/formatters :basic-date-time)]
    (update-in row [:time] #(f/unparse f %))))

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
;; user server calls
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
   :result (insert! :users (assoc m
                                  :joined (t/now)))})

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

(defn- user-data-save
  [q]
  (let [r (atom nil)]
    (try (db/execute! spec q)
         (reset! r {:status :success})
         (catch Exception e
           (reset! r
                   {:status :failure :reason (.getMessage (.getNextException e))}))
         (finally
           @r))))

(defmethod server/get-data :user-data
  [{:keys [username]}]
  (let [d (first (db/query spec ["select * from users where email = ?" username]))]
    {:type :user-data
     :data (update-in d [:joined] #(parse-date %))}))

(defmethod server/save-data :name-update
  [{:keys [username first last middle]}]
  (user-data-save ["update users set first=?,last=?,middle=? where email=?" first last middle username]))

(defmethod server/save-data :address-update
  [{:keys [username address1 address2 address3]}]
  (user-data-save ["update users set address1=?,address2=?,address3=? where email=?"
                   address1 address2 address3 username]))

(defmethod server/save-data :city-update
  [{:keys [username city] :as m}]
  (user-data-save ["update users set city=? where email=?" city username]))

(defmethod server/save-data :country-update
  [{:keys [username country] :as m}]
  (user-data-save ["update users set country=? where email=?" country username]))

(defmethod server/save-data :postcode-update
  [{:keys [username postcode] :as m}]
  (user-data-save ["update users set postcode=? where email=?" postcode username]))

(defmethod server/save-data :phone-update
  [{:keys [username phone] :as m}]
  (user-data-save ["update users set phone=? where email=?" phone username]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; skills
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- project-skills
  [id]
  (db/query spec ["select id,name,type from skills,skillproj where skillproj.sid=skills.id and skillproj.pid=?" id]))

(defmethod server/get-data :all-skills
  [{:keys [username]}]
  (let [d (db/query spec ["select * from skills"])]
    {:type :all-skills
     :data d}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; bid
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(declare project)

(defn- bids
  [pid]
  (db/query spec ["select * from bids where pid = ?" pid]
            :row-fn fix-times))

(defmethod server/save-data :bid
  [{:keys [amount username pid] :as data}]
  (insert! :bids (-> (dissoc data :type)
                     (merge {:time (t/now)
                             :amount (moneystring->bigdec amount)})))
  (server/broadcast-update! {:type :project :data (project username pid)}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; comment server calls
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod server/get-data :comments
  [{:keys [pid username username2]}]
  (let [d (db/query spec ["select * from comments where (pid = ? and sender = ? and receiver = ?) or (pid = ? and sender = ? and receiver = ?);"
                          pid username username2 pid username2 username]
                    :row-fn fix-times)]
    {:type :comments
     :data d}))

(defmethod server/save-data :comment
  [{:keys [comment receiver username pid] :as data}]
  (let [cid (-> (insert! :comments {:time (t/now)
                                    :sender username
                                    :receiver receiver
                                    :read false
                                    :pid pid
                                    :comment comment})
                first :id)
        d (db/query spec ["select * from comments where id = ?" cid]
                    :row-fn fix-times
                    :result-set-fn first)]
    (server/broadcast-update! {:type :comment
                               :data d})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; project server calls
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- calculate-times
  [rows]
  (->> (map #(update-in % [:bidmin] (fn [_] (minutes-till (:biddead %)))) rows)
       (map #(update-in % [:projmin] (fn [_] (days-till (:projdead %)))))
       (map #(update-in % [:biddead] (fn [x] (parse-date x))))
       (map #(update-in % [:projdead] (fn [x] (parse-date x))))))

(defn- project
  [user id]
  (->> (db/query spec ["select * from projects where id = ?" id]
                 :row-fn (fn [x] (assoc x :skills (project-skills (:id x)))))
       calculate-times
       (map #(assoc % :bids (bids (:id %))))
       first))

(defn- expire-projects
  []
  (let [expired (db/query spec ["select * from projects where status = 'open' and biddead < ?" (t/now)])]
    (map #(db/execute! spec ["update in projects set status = 'expired' where id = ?"
                             (:id %)])
         expired)))

(defn- projects
  [q]
  (expire-projects)
  (->> (db/query spec q :row-fn
                 (fn [x] (assoc x :skills (project-skills (:id x)))))
       calculate-times
       (map #(assoc % :bids (bids (:id %))))))

(defn- jobs
  [status username]
  (projects ["select distinct projects.*,bids.username as buser from projects join bids on projects.id=bids.pid and projects.status = ? and bids.username = ?" status username]))

(defmethod server/get-data :open-jobs
  [{:keys [status username] :as m}]
  (let [d (jobs status username)]
    (println (str "***************** " (count d)))
    {:type :projects :data (jobs status username)}))

(defmethod server/get-data :active-jobs
  [{:keys [status username] :as m}]
  {:type :projects :data (jobs status username)})

(defmethod server/get-data :completed-jobs
  [{:keys [status username] :as m}]
  {:type :projects :data (jobs status username)})

(defmethod server/get-data :all-projects
  [{:keys [status username] :as m}]
  (let [d (projects ["select * from projects where status = ? and biddead > ? and username <> ?" (name status) (t/now) username])]
    {:type :projects
     :data d}))

(defmethod server/get-data :expired-projects
  [{:keys [username]}]
  (let [d (projects ["select * from projects where username = ? and biddead < ? and status <> 'deleted'" username (t/now)])]
    {:type :projects
     :data (map #(update-in % [:status] (fn [_] "expired")) d)}))

(defmethod server/get-data :user-projects
  [{:keys [username]}]
  (let [d (projects ["select * from projects where username = ? and biddead > ? and status <> 'deleted'" username (t/now)])]
    {:type :projects
     :data d}))

(defmethod server/get-data :deleted-projects
  [{:keys [username]}]
  (let [d (projects ["select * from projects where username = ? and status = 'deleted'"
                     username])]
    {:type :projects
     :data d}))

(defmethod server/get-data :default
  [{:keys [status username]}]
  (let [d (projects ["select * from projects where status = ? and username = ? and biddead > ?" status username (t/now)])]
    {:type :projects
     :data d}))

(defmethod server/save-data :new-project
  [{:keys [amount username pid] :as data}]
  (let [m (-> (update-in data [:hours] #(Integer/parseInt %))
              (update-in [:budget] #(Integer/parseInt %))
              (update-in [:biddead] set-datetime)
              (update-in [:projdead] set-datetime)
              (assoc :status "open")
              (select-keys [:title :description :hours :budget :basis
                            :username :biddead :projdead :status]))
        sk (:skills data)]
    (let [pid (-> (insert! :projects m) first :id)]
      (if (seq sk)
        (apply db/insert! spec :skillproj
               (map #(hash-map :sid % :pid pid) sk))))))

(defmethod server/save-data :delete-project
  [{:keys [username id] :as data}]
  (let [a (db/execute! spec ["update projects set status = 'deleted' where id = ? and username = ?" id username])
        proj (first (projects ["select * from projects where id=?" id]))]
    (server/broadcast-update! {:type :amend-project-status :data proj})))

(defmethod server/save-data :undelete-project
  [{:keys [username id] :as data}]
  (let [proj (first (db/query spec ["select * from projects where id =?" id]))
        status (if (t/after? (:biddead proj) (t/now)) "open" "expired")]
    (db/execute! spec ["update projects set status = ? where id = ?"
                       status id])
    (server/broadcast-update!
     {:type :amend-project-status
      :data (first (projects ["select * from projects where id=?" id]))})))

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
                            [:joined :timestamp "NOT NULL"]
                            [:address1 :varchar]
                            [:address2 :varchar]
                            [:address3 :varchar]
                            [:country :varchar]
                            [:city :varchar]
                            [:postcode :varchar]
                            [:phone :varchar]
                            [:middle :varchar]
                            [:password :varchar "NOT NULL"]))
        (db/db-do-commands spec
                          (db/create-table-ddl
                           :skilluser
                           [:sid :integer "NOT NULL"]
                           [:uid :integer "NOT NULL"]))
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
                            :comments
                            [:id :serial "PRIMARY KEY"]
                            [:comment :varchar "NOT NULL"]
                            [:sender :varchar "NOT NULL"]
                            [:receiver :varchar "NOT NULL"]
                            [:read :boolean "NOT NULL" "DEFAULT 'false'"]
                            [:time :timestamp "NOT NULL"]
                            [:pid :integer "NOT NULL"]))
        (db/db-do-commands spec
                           (db/create-table-ddl
                            :bids
                            [:id :serial "PRIMARY KEY"]
                            [:pid :integer "NOT NULL"]
                            [:time :timestamp "NOT NULL"]
                            [:amount :decimal "NOT NULL"]
                            [:username :varchar "NOT NULL"]))
        (apply db/insert! spec :skills skills))
      (catch Exception e
        (println (.getNextException e))))))

(defn delete-database
  []
  (map #(try
          (db/db-do-commands spec
                             (db/drop-table-ddl %))
          (catch Exception _))
       '(:users :skilluser :skills :skillproj :projects :bids :comments)))
