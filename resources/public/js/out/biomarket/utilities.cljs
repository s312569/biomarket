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
            [cljs.pprint :as pprint]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; time
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn datestring->readable
  [string]
  (let [rfc (f/formatters :rfc822)
        f (f/formatters :basic-date-time)]
    (->> (f/parse f string) (f/unparse rfc))))

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

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; action links
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- show-default
  [_ owner]
  (om/component
   (dom/div nil "")))

(defn bottom-links
  [[project {:keys [links visible oc-tag bid-widget]}] owner]
  (om/component
   (dom/div
    #js {:style #js {:padding-top "10px"}}
    (dom/div
     #js {:className "row"}
     (dom/div
      #js {:className "col-md-4"}
      (apply
       dom/div
       #js {:className "btn-group" :role "group"}
       (map (fn [[tag ele]]
              (dom/a
               #js {:className (if (= visible tag)
                                 "btn btn-default active"
                                 "btn btn-default")
                    :onClick #(pub-info owner oc-tag
                                        {:action :change-view
                                         :view (if (= visible tag) :default tag)})}
               (first ele)))
            links)))
     (if bid-widget
       (dom/div
        #js {:className "col-md-8"
             :style #js {:text-align "right"}}
        (om/build bid-widget project))))
    (condp = visible
      :default (om/build show-default nil)
      (om/build (second (visible links)) project)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; project info
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmulti table-info (fn [project] (:status project)))

(defn- alert-table-info
  [& fields]
  (apply dom/div #js {:style #js {:color "red"}} fields))

(defn- average-bid
  [project]
  (if (seq (:bids project))
    (str "$"
         (pprint/cl-format nil "~$"
                           (/ (reduce + (map :amount (:bids project)))
                              (count (:bids project)))))
    "No bids yet"))

(defn color-span
  [text color]
  (dom/span #js {:style #js {:color color
                             :font-weight "bold"}} text))

(defmethod table-info "expired"
  [project]
  (let [f #(color-span % "green")]
    {"Status" (alert-table-info (dom/div nil "Bidding") (dom/div nil "Expired"))
     "Bidding ended" (alert-table-info (str (:bidmin project) " ago"))
     "Project deadline" (f (:projmin project))
     "Bids" (f (count (:bids project)))
     "Average bid (USD)" (f (average-bid project))
     "Budget (USD)" (f (str "$" (:budget project)))}))

(defmethod table-info :default
  [project]
  (let [f #(color-span % "green")]
    {"Status" (f (str/capitalize (:status project)))
     "Bidding ends" (f (:bidmin project))
     "Project deadline" (f (:projmin project))
     "Bids" (f (count (:bids project)))
     "Average bid" (f (average-bid project))
     "Budget" (f (str "$" (:budget project)))}))

(defn make-a-table
  [{:keys [data tparam]}]
  (om/component
   (let [tjs (clj->js (merge {:className "table"} tparam))]
     (dom/div
      #js {:style #js {:background-color "white"
                       :margin "10px"}}
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

(defn info-table
  [project owner]
  (om/component
   (let [data (table-info project)]
     (om/build make-a-table {:data (list data)}))))

;; right panel info

(defmulti panel-right-info (fn [p] (:view-type p)))

(defmethod panel-right-info :find
  [p]
  (let [s (str (apply str
                      (interpose " " (take 2 (str/split (:bidmin p) #"\s+"))))
               " left")]
    (dom/h4 nil (dom/span #js {:className "label label-danger"} s))))

(defmethod panel-right-info :default
  [p]
  (let [bc (count (:bids p))]
    (dom/h4 nil (dom/span #js {:className "label label-danger"}
                          (if (= bc 1) "1 bid" (str bc " bids"))))))

;; labels

(defn- label
  [class text]
  (dom/span
   #js {:style #js {:padding-right "10px"}}
   (dom/span #js {:className class}
             text)))

(defn- best-bid
  [bids]
  (->> (group-by :username bids)
       vals
       (map #(first (sort-by :time > %)))
       (sort-by :amount)
       first))

(defmulti title-labels (fn [x] (:view-type x)))

(defmethod title-labels :default
  [project]
  (om/component
   (dom/h4
    #js {:style #js {:font-weight "bold"}}
    (dom/span #js {:style #js {:padding-right "10px"}}
              (str (:title project) "  "))
    (let [best (best-bid (:bids project))]
      (if best
        (label "label label-success" (str "Best bid: $" (:amount best)))
        (label "label label-danger" "No bids yet!"))))))

(defmethod title-labels :find
  [project]
  (om/component
   (dom/h4
    #js {:style #js {:font-weight "bold"}}
    (dom/span #js {:style #js {:padding-right "10px"}}
              (str (:title project) "  "))
    (let [ub (first (sort-by :time > (:user-bids project)))
          best (best-bid (:bids project))]
      (cond (and ub (>= (:amount best) (:amount ub)))
            (dom/span nil
                      (label "label label-success" (str "Best bid: $" (:amount best)))
                      (label "label label-success" (str "Your bid: $" (:amount ub))))
            (and ub (< (:amount best) (:amount ub)))
            (dom/span nil
                      (label "label label-success" (str "Best bid: $" (:amount best)))
                      (label "label label-danger" (str "Your bid: $" (:amount ub))))
            best
            (label "label label-danger" (str "Best bid: $" (:amount best)))
            :else
            (label "label label-danger" "No bids yet!"))))))

;; the panel

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
      (dom/div #js {:className "col-md-10"}
               (om/build title-labels project))
      (dom/div #js {:className "col-md-2" :style #js {:text-align "right"}}
               (panel-right-info project))))
    (dom/div
     #js {:className "panel-body"}
     (om/build more-less-text (:description project))
     (dom/div #js {:style #js {:padding-top "20px"}} (om/build info-table project)))
    (dom/div
     #js {:className "panel-footer"}
     (om/build bottom-links [project blinks])))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; tables
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn fixed-head-table
  [{:keys [data tparam]}]
  (om/component
   (dom/table
    #js {:style #js {:cellspacing "0" :cellpadding "0" :border "0"
                     :width "100%" :padding-top "20px"}}
    (dom/tr
     nil
     (dom/td
      nil
      (dom/table
       #js {:style #js {:cellspacing "0" :cellpadding "1" :border "0"
                        :width "100%"}}
       (apply dom/tr nil
              (map #(dom/th
                     #js {:style #js {:width "50%"}}
                     %)
                   (keys (first data)))))))
    (dom/tr
     nil
     (dom/td
      nil
      (dom/div
       #js {:style #js {:max-height "277px" :overflow-y "auto" :width "100%"
                        :min-height "50px"}}
       (apply dom/table
              #js {:className "table"
                   :style #js {:cellspacing "0" :cellpadding "1" :border "0"
                               :background-color "white"}}
              (map (fn [x]
                     (apply dom/tr nil
                            (map #(dom/td
                                   #js {:style #js {:text-align "center"}}
                                   %)
                                 (vals x))))
                   data))))))))

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

(defn on-change-function
  [owner tag fname element e]
  (pub-info owner tag
            {:fname fname
             :element (assoc element :value (-> e .-target .-value))}))

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
