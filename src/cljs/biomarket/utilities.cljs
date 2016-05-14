(ns ^:figwheel-always biomarket.utilities
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [ajax.core :refer [POST]]
            [cljs.core.async :refer [put! <! >! chan pub sub unsub]]
            [clojure.string :as str]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-time.core :as time]
            [cljs-time.format :as tf]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; logging
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn get-text
  [e]
  (-> e .-target .-value))

(defn log
  [s]
  (.log js/console (str s)))

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
;; app state
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defonce app-state
  (let [req-chan (chan)
        pub-chan (chan)
        notif-chan (pub pub-chan :topic)]
    (atom {:req-chan req-chan
           :notif-chan notif-chan
           :pub-chan pub-chan})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; input validation tests
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn pub-info
  [owner topic data]
  (put! (:pub-chan (om/get-shared owner))
        {:topic topic :data data}))

(defn register-loop
  [owner topic func]
  (let [c (chan)
        nc (:notif-chan (om/get-shared owner))
        events (sub nc topic c)]
    (go
      (loop [e (<! events)]
        (when-not (= (:data e) :end)
          (func owner e)
          (recur (<! events)))
        (unsub nc topic c)))))

(defn unsubscribe
  [owner & topics]
  (let [pc (:pub-chan (om/get-shared owner))]
    (doseq [t topics]
      (put! pc {:topic t :data :end}))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; components
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

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

(defn- show-default
  [_ owner]
  (om/component
   (dom/div nil "")))

(defn control-buttons
  [inputs owner]
  (om/component
   (dom/div
    #js {:className "panel panel-default"}
    (apply
     dom/div
     #js {:className "panel-heading"}
     (map #(dom/button
            #js {:className "btn btn-default"
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
      (dom/button
       #js {:className "pure-button pure-button-primary"
            :onClick func}
       value)
      (dom/button
       #js {:className "pure-button pure-button-primary"}
       value)))))

(defn padded-button-disabled
  [[padding value] owner]
  (om/component
   (dom/div
    #js {:style #js {:padding padding}}
    (dom/button
     #js {:className "pure-button pure-button-primary"
          :disabled "true"}
     value))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; action links
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn bottom-links
  [links owner]
  (reify
    om/IInitState
    (init-state [_]
      {:visible :default})
    om/IRenderState
    (render-state [_ {:keys [visible]}]
      (dom/div
       #js {:style #js {:padding-top "10px"}}
       (apply
        dom/div
        #js {:className "btn-group" :role "group"}
        (map (fn [[tag ele]]
               (dom/a
                #js {:className (if (= visible tag)
                                  "btn btn-default active"
                                  "btn btn-default")
                     :onClick #(om/set-state! owner :visible
                                              (if (= visible tag) :default tag))}
                (first ele)))
             links))
       (condp = visible
         :default (om/build show-default nil)
         (apply om/build (drop 1 (visible links))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; project info
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti table-info (fn [project] (:status project)))

(defn- alert-table-info
  [& fields]
  (apply dom/div #js {:style #js {:color "red"}} fields))

(defmethod table-info "expired"
  [project]
  {"Status" (alert-table-info (dom/div nil "Bidding") (dom/div nil "Expired"))
   "Bidding ended" (alert-table-info (str (:bidmin project) " ago"))
   "Project deadline" (:projmin project)
   "Bids" "##"
   "Average bid (USD)" "$XXX"
   "Budget (USD)" (str "$" (:budget project))})

(defmethod table-info :default
  [project]
  {"Status" (str/capitalize (:status project))
   "Bidding ends" (:bidmin project)
   "Project deadline" (:projmin project)
   "Bids" "##"
   "Average bid (USD)" "$XXX"
   "Budget (USD)" (str "$" (:budget project))})

(defn info-table
  [project owner]
  (om/component
   (let [data (table-info project)]
     (dom/table
      #js {:className "table"}
      (dom/thead nil
                 (apply dom/tr nil
                        (map #(dom/th
                               #js {:style #js {:text-align "center"}}
                               %)
                             (keys data))))
      (dom/tbody nil
                 (apply dom/tr nil
                        (map #(dom/td
                               #js {:style #js {:color "green"
                                                :font-weight "bold"
                                                :text-align "center"}}
                               %)
                             (vals data))))))))

(defn project-panel
  [[project blinks] owner]
  (om/component
   (dom/div
    #js {:className "panel panel-default"
         :style #js {:text-align "left"}}
    (dom/div
     #js {:className "panel-heading"}
     (dom/div
      #js {:className "row"}
      (dom/div #js {:className "col-md-10"
                    :style #js {:font-weight "bold"
                                :font-size "large"}}
               (:title project))
      (dom/div #js {:className "col-md-2"
                    :style #js {:color "red"
                                :text-align "right"}}
               "XXX bids")))
    (dom/div
     #js {:className "panel-body"}
     (om/build more-less-text (:description project))
     (dom/div #js {:style #js {:padding-top "20px"}} (om/build info-table project)))
    (dom/div
     #js {:className "panel-footer"}
     (om/build bottom-links blinks)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; skills
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- skill-tags
  [[skills selected tag] owner]
  (om/component
   (apply dom/div
          #js {:className "tags"}
          (map #(dom/span
                 #js {:style #js {:padding-right "10px"}}
                 (dom/a
                  #js {:className (if (selected (:id %))
                                    "color2"
                                    "color1")
                       :onClick (if tag (fn [_] (pub-info owner tag %)))
                       :style #js {:cursor "pointer"}}
                  (:name %)))
               skills))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; inputs
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

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
   (let [oc #(pub-info owner tag
                       {:fname fname
                        :element (assoc element :value (-> % .-target .-value))})
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
