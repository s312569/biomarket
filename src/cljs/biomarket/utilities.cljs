(ns ^:figwheel-always biomarket.utilities
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [ajax.core :refer [POST]]
            [cljs.core.async :refer [put! <! >! chan pub sub unsub]]
            [clojure.string :as str]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-time.core :as t]
            [cljs-time.format :as f]
            [cljs-time.format :as tf]
            [cljs.pprint :as pprint]
            [taoensso.sente  :as sente :refer (cb-success?)]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; logging
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn get-text
  [e]
  (-> e .-target .-value))

(defn log
  [& s]
  (.log js/console (apply str s)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; time
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn datestring->readable
  [string]
  (let [rfc (f/formatters :rfc822)
        f (f/formatters :basic-date-time)]
    (->> (f/parse f string) (f/unparse rfc))))

(defn ds->date-hour-minute
  [string]
  (let [rfc (f/formatters :date-hour-minute)
        f (f/formatters :basic-date-time)]
    (->> (f/parse f string) (f/unparse rfc))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; server calls
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn error-handler
  [{:keys [status status-text]}]
  (log (str "Something bad happened: " status " " status-text)))

(defn post-params
  [url params handler]
  (POST url {:error-handler error-handler
             :params params
             :handler handler
             :format :json
             :response-format :json
             :keywords? true}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; loop management
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(declare get-input)

(defmulti loop-manager (fn [o d & args] (:action (:data d))))
(defmulti broadcast-loop-manager (fn [o d] (:type d)))

(defmethod loop-manager :input-update
  [owner {:keys [data]} & _]
  (get-input owner data))

(defmethod loop-manager :submitted
  [owner {:keys [data]} func]
  (func))

(defmethod broadcast-loop-manager :project
  [owner {:keys [data]}]
  (om/set-state! owner :project (assoc data :view-type (om/get-state owner :view-type))))

(defmethod broadcast-loop-manager :comment
  [owner {:keys [data]}]
  (om/set-state! owner :comments (conj (om/get-state owner :comments) data)))

(defmethod broadcast-loop-manager :amend-project-status
  [owner {:keys [data]}]
  (let [status->view #({"open" :open-projects "expired" :expired-projects
                        "completed" :completed-projects "active" :active-projects
                        "deleted" :deleted-projects} %)
        cv (om/get-state owner :view)
        projs (om/get-state owner :projects)]
    (if (or (= cv (status->view (:status data))))
      (om/set-state! owner :projects
                     (conj projs
                           (assoc data :view-type (om/get-state :view-type))))
      (om/set-state! owner :projects (remove #(= (:id data) (:id %)) projs)))))

(defn pub-info
  [owner topic data]
  (put! (:pub-chan (om/get-shared owner))
        {:topic topic :data data}))

(defn register-loop
  ([owner topic] (register-loop owner topic loop-manager))
  ([owner topic func]
   (let [c (chan)
         nc (:notif-chan (om/get-shared owner))
         events (sub nc topic c)]
     (go
       (loop [e (<! events)]
         (when-not (= (:data e) :end)
           (func owner e)
           (recur (<! events)))
         (unsub nc topic c))))))

(defn unsubscribe
  [owner & topics]
  (let [pc (:pub-chan (om/get-shared owner))]
    (doseq [t topics]
      (put! pc {:topic t :data :end}))))

(defn register-broadcast-loop
  [owner topic chan]
  (let [nc (:notif-chan (om/get-shared owner))
        events (sub nc topic chan)]
    (go
      (loop [e (<! events)]
        (when-not (= (:data e) :end)
          (broadcast-loop-manager owner e)
          (recur (<! events)))
        (unsub nc topic chan)))))

(defn unsub-broadcast-loop
  [owner topic chan]
  (let [nc (:notif-chan (om/get-shared owner))]
    (unsub nc topic chan)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; bottom links
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- show-default
  [_ owner]
  (om/component
   (dom/div nil)))

(defn bottom-skel
  [{:keys [links widget] :as project} owner]
  (om/component
   (let [visible (:bottom-view project)]
     (dom/div
      #js {:className "container-fluid"}
      (dom/div
       #js {:className "row"}
       (dom/div
        #js {:className "col-md-12"}
        (apply
         dom/div
         #js {:className "btn-group" :role "group"}
         (map (fn [[tag ele]]
                (dom/a
                 #js {:className (if (= visible tag)
                                   "btn btn-default btn-sm active"
                                   "btn btn-default btn-sm")
                      :onClick #(pub-info owner (:id project)
                                          {:action :show-bottom
                                           :bottom-view
                                           (if (= visible tag) :default tag)})}
                 (first ele)))
              links))))
      (condp = visible
        :default (dom/div #js {:className "row"}
                          (dom/div #js {:className "col-md-12"}
                                   (om/build show-default nil)))
        (om/build (second (visible links))
                  (if (seq (drop 2 (visible links)))
                    (vec (cons project (drop 2 (visible links))))
                    project)))))))

(defmulti bottom (fn [p] (:view-type p)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; components
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn split-projects
  [projects]
  (let [pn (count projects)
        n (if (= 0 (mod pn 2))
            (quot pn 2)
            (+ 1 (quot pn 2)))]
    (partition-all n projects)))

(defn color-span
  [text color]
  (dom/span #js {:style #js {:color color
                             :font-weight "bold"}} text))

(defn- more-less-text
  [text owner]
  (reify
    om/IInitState
    (init-state [_]
      {:showing :less})
    om/IRenderState
    (render-state [_ {:keys [showing]}]
      (dom/div
       nil
       (if (< (count text) 400)
         (dom/div nil text)
         (condp = showing
           :less (dom/div nil
                          (dom/span nil (str (apply str (take 300 text)) " ... "))
                          (dom/a #js {:onClick #(om/set-state! owner :showing :more)
                                      :className "flinka"}
                                 " More"))
           :more (dom/div nil
                          (dom/span nil text)
                          (dom/a #js {:onClick #(om/set-state! owner :showing :less)
                                      :className "flinka"}
                                 " Less"))))))))

(defn control-buttons
  [inputs owner]
  (om/component
   (dom/div
    #js {:className "panel panel-default"}
    (apply
     dom/div
     #js {:className "panel-heading"}
     (map #(dom/a #js {:className "btn btn-default"
                       :onClick (second %)}
                  (first %))
          inputs)))))

(defn menu-item
  [[text topic tag current] owner]
  (om/component
   (dom/li
    #js {:className (if (= current topic)
                      "active")
         :role "presentation"}
    (dom/a #js {:onClick #(pub-info owner tag topic)
                :style #js {:cursor "pointer"}}
           text))))

(defn top-navigation
  [[current inputs nav-tag] owner]
  (om/component
   (dom/div
    #js {:role "navigation"}
    (apply
     dom/ul
     #js {:className "nav nav-pills nav-justified"}
     (map #(om/build menu-item (concat % [nav-tag current]))
          inputs)))))

(defn padded-button
  [[padding value func] owner]
  (om/component
   (dom/div
    #js {:style #js {:padding padding}}
    (if func
      (dom/button #js {:className "pure-button pure-button-primary"
                       :onClick func}
                  value)
      (dom/button #js {:className "pure-button pure-button-primary"}
                  value)))))

(defn padded-button-disabled
  [[padding value] owner]
  (om/component
   (dom/div
    #js {:style #js {:padding padding}}
    (dom/button #js {:className "pure-button pure-button-primary"
                     :disabled "true"}
                value))))

(defn waiting
  [_ owner]
  (om/component
   (dom/div
    #js {:style #js {:position "absolute" :top "50%" :left "50%"
                     :-webkit-animation "fadein 2s"
                     :-moz-animation "fadein 2s"
                     :-ms-animation "fadein 2s"
                     :-o-animation "fadein 2s"
                     :animation "fadein 2s"}}
    (dom/i #js {:className "fa fa-refresh fa-spin fa-5x fa-fw"}))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; tables
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn make-a-table
  [{:keys [data tparam]} owner]
  (om/component
   (let [tjs (clj->js (merge {:className "table"
                              :style {:margin "0px"}} tparam))]
     (dom/div
      #js {:style #js {:background-color "white"}}
      (dom/table
       tjs
       (dom/thead nil
                  (apply dom/tr nil
                         (map #(dom/th
                                #js {:style #js {:text-align "center"}}
                                %)
                              (keys (first data)))))
       (apply dom/tbody nil
              (map (fn [x]
                     (apply dom/tr nil
                            (map #(dom/td
                                   #js {:style #js {:text-align "center"}}
                                   %)
                                 (vals x))))
                   data)))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; inputs
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; new functions

(defn capture-return
  [func]
  (fn [x] (when (= 13 (.-which x))
            (func)
            false)))

(defn on-change-function
  [owner tag fname element e]
  (pub-info owner tag
            {:action :input-update
             :fname fname
             :element (assoc element :value (-> e .-target .-value))}))

(defn on-submit-function
  [owner tag]
  (pub-info owner tag {:action :submitted}))

;; end new functions

(defmulti get-input (fn [owner {:keys [fname element]} & args] fname))

(defmethod get-input :default
  ([owner {:keys [fname element] :as m}] (get-input owner m :inputs))
  ([owner {:keys [fname element]} param-name]
   (let [inputs (om/get-state owner param-name)
         iv  (->> (map (fn [[k v]]
                         (if (not (k (:value element)))
                           v))
                       (:tests element))
                  (remove nil?)
                  seq)]
     (om/set-state! owner param-name
                    (assoc (om/get-state owner param-name)
                           fname (assoc element :invalid iv))))))

(defmulti clean-input (fn [element classes oc] (:input-type element)))

(defn- js
  [element classes oc]
  (clj->js (merge {:className "form-control"
                   :aria-describedby (:aria classes)
                   :onKeyDown (if (:submitf element)
                                (fn [x] (if (= 13 (.-which x))
                                          ((:submitf element)))))
                   :onChange oc}
                  (dissoc element :id :spid :title :invalid :tests))))

(defn- icons
  [element classes]
  (list (dom/span (clj->js {:className (:icon classes) :aria-hidden "true"}))
        (dom/span (clj->js {:id (:spid element) :className "sr-only"})
                  (:fb classes))
        (dom/span (clj->js {:className "help-block"})
                  (:fb classes))))

(defmethod clean-input :addon
  [element classes oc]
  (-> (concat (list (clj->js {:className (:fg classes)}))
              (list (let [js (js element classes oc)]
                      (dom/div
                       #js {:className "input-group"}
                       (if-let [b (:before element)]
                         (dom/div #js {:className "input-group-addon"} b))
                       (dom/input js)
                       (if-let [a (:after element)]
                         (dom/div #js {:className "input-group-addon"} a)))))
              (icons element classes))
      vec))

(defmethod clean-input :no-icon
  [element classes oc]
  (-> (concat (list (clj->js {:className (:fg classes)}))
              (list (let [js (js element classes oc)]
                      (if (= "textarea" (:type element))
                        (dom/textarea js)
                        (dom/input js)))))
      vec))

(defmethod clean-input :default
  [element classes oc]
  (-> (concat (list (clj->js {:className (:fg classes)}))
              (list (let [js (js element classes oc)]
                      (if (= "textarea" (:type element))
                        (dom/textarea js)
                        (dom/input js))))
              (icons element classes))
      vec))

(defn- the-input
  [js owner]
  (om/component
   (apply dom/div js)))

(defn input
  [[fname element tag] owner]
  (om/component
   (let [oc #(on-change-function owner tag fname element %)
         classes (condp = (:invalid element)
                   false {:fg "form-group" :icon "" :fb ""}
                   nil {:fg "form-group has-success has-feedback"
                        :icon "glyphicon glyphicon-ok form-control-feedback"
                        :fb ""}
                   {:fg "form-group has-error has-feedback"
                    :icon "glyphicon glyphicon-remove form-control-feedback"
                    :fb (apply dom/div nil (map #(dom/div nil %) (:invalid element)))})]
     (dom/div
      #js {:className (:fg classes)}
      (dom/label
       #js {:className "control-label" :htmlFor (:id element)} (:title element))
      (om/build the-input (clean-input element classes oc))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; radios
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- set-radio-state
  [owner element e]
  (om/set-state! owner :element (assoc element :current (get-text e))))

(defn in-line-radio
  [[name element] owner]
  (reify
    om/IInitState
    (init-state [_]
      {:name name
       :element element})
    om/IWillUpdate
    (will-update [_ np ns]
      (pub-info owner :radiod ns))
    om/IRenderState
    (render-state [_ {:keys [element]}]
      (apply
       dom/div
       #js {:className "pure-u-1"}
       (map #(dom/span
              nil
              (dom/div
               #js {:className "pure-u-1-5"}
               (dom/input #js {:type "radio"
                               :name (:name element)
                               :value (first %)
                               :onChange (fn [e] (set-radio-state owner element e))}))
              (dom/div
               #js {:className "pure-u-1-4"}
               (second %)))
            (:options element))))))
