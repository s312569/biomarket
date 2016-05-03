(ns ^:figwheel-always biomarket.utilities
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [ajax.core :refer [POST]]
            [cljs.core.async :refer [put! <! >! chan pub sub unsub]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

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
;; logging
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn get-text
  [e]
  (-> e .-target .-value))

(defn log
  [s]
  (.log js/console (str s)))

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

(defn menu-item
  [[text topic current] owner]
  (om/component
   (dom/li
    #js {:className (if (= current topic)
                      "pure-menu-item pure-menu-selected"
                      "pure-menu-item")}
    (dom/a #js {:className "pure-menu-link"
                :onClick #(pub-info owner :navigation topic)
                :style #js {:cursor "pointer"}}
           text))))

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

(defn text-box
  [[fname element] owner]
  (reify
    om/IInitState
    (init-state [_]
      {:fname fname
       :element element})
    om/IWillUpdate
    (will-update [_ np ns]
      (pub-info owner :inputd ns))
    om/IRenderState
    (render-state [_ {:keys [fname element]}]
      (dom/textarea
       #js {:placeholder (:ph element)
            :className "pure-input-1"
            :name (name fname)
            :value (:value element)
            :onKeyDown (fn [x]
                         (if (= 13 (.-which x))
                           ((:submitf element))))
            :onChange #(om/set-state! owner :element
                                      (assoc element
                                             :value (-> % .-target .-value)))
            :rows (:rows element)}))))

(defn get-input
  [owner {:keys [fname element]}]
  (if (= fname :password2)
    (if (= (get-in (om/get-state owner :inputs) [:password1 :value])
           (:value element))
      (om/set-state! owner :inputs
                     (assoc (om/get-state owner :inputs)
                            fname (assoc element :invalid nil)))
      (om/set-state! owner :inputs
                     (assoc (om/get-state owner :inputs)
                            fname (assoc element :invalid '("Passwords don't match.")))))
    (let [iv (->> (map (fn [[k v]]
                         (if (not (k (:value element)))
                           v))
                       (:tests element))
                  (remove nil?)
                  seq)]
      (om/set-state! owner :inputs
                     (assoc (om/get-state owner :inputs)
                            fname (assoc element :invalid iv))))))

(defn input
  [[fname element] owner]
  (reify
    om/IInitState
    (init-state [_]
      {:element element
       :invalid false
       :fname fname})
    om/IWillUpdate
    (will-update [this np ns]
      (pub-info owner :inputd ns))
    om/IWillReceiveProps
    (will-receive-props [_ np]
      (if (not (= (om/get-state owner :invalid) (:invalid (second np))))
        (om/set-state! owner :invalid (:invalid (second np)))))
    om/IRenderState
    (render-state [_ {:keys [fname element invalid]}]
      (dom/div
       nil
       (dom/input
        #js {:placeholder (:ph element)
             :className "pure-u-15-24"
             :type (:type element)
             :name (name fname)
             :value (:value element)
             :onKeyDown (if (:submitf element)
                          (fn [x] (if (= 13 (.-which x))
                                    ((:submitf element)))))
             :onChange
             #(om/set-state! owner :element
                             (assoc element
                                    :value (-> % .-target .-value)))})
       (if invalid
         (apply
          dom/div
          nil
          (map #(dom/p #js {:style #js {:color "red" :font-size "small"}}
                       (str %))
               invalid)))))))

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

(defn site-header
  [_ owner]
  (om/component
   (dom/div
    #js {:className "header"}
    (dom/div
     #js {:className "home-menu pure-menu pure-menu-horizontal pure-menu-fixed"}
     (dom/a
      #js {:className "pure-menu-heading"}
      "BioMarket")
     (dom/ul
      #js {:className "pure-menu-list"}
      (dom/li #js {:className "pure-menu-item pure-menu-selected"}
              (dom/a #js {:className "pure-menu-link" :href "#"}
                     "Home"))
      (dom/li #js {:className "pure-menu-item"}
              (dom/a #js {:className "pure-menu-link" :href "#"}
                     "Tour"))
      (dom/li #js {:className "pure-menu-item"}
              (dom/a #js {:className "pure-menu-link" :href "#"})))))))
