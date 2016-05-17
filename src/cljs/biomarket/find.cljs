(ns ^:figwheel-always biomarket.find
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan pub sub timeout]]
            [om.core :as om :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [om.dom :as dom :include-macros true]
            [clojure.string :as str]
            [cljs-time.core :as t]
            [cljs-time.format :as f]
            [biomarket.utilities :refer [log] :as ut]
            [biomarket.bids :as bid]
            [biomarket.comments :as com])
  (:import [goog History]
           [goog.history EventType]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; server calls
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- get-projects
  [owner view]
  (let [h (fn [{:keys [status result]}]
            (if (= "success" status)
              (om/set-state! owner :projects result)))]
    (ut/post-params "/projects" {:status :open
                                 :query-type :all-projects} h)))

(defn get-skills
  [owner]
  (let [h (fn [{:keys [status result]}]
            (if (= "success" status)
              (om/set-state! owner :skills result)))]
    (ut/post-params "/project-skills" {:pid (:id (om/get-state owner :project))} h)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; bottom links
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn show-skills
  [project owner]
  (om/component
   (dom/div #js {:style #js {:padding-top "20px"}}
            (om/build ut/skill-tags [(:skills project) {}]))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; project list
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- change-view
  [owner view]
  (om/set-state! owner :bottoms
                 (update-in (om/get-state owner :bottoms) [:visible] (fn [x] view))))

(defn- project-summary
  [project owner]
  (reify
    om/IInitState
    (init-state [_]
      (let [id (gensym)]
        {:bottoms {:visible :default
                   :oc-tag (:id project)
                   :links {:skills ["Matched skills" show-skills]
                           :bids ["Show bids" bid/show-bids]
                           :discussion ["Discussion" com/comments]}
                   :bid-widget bid/bid-widget}
         :bids nil
         :bid-loop true}))
    om/IWillMount
    (will-mount [_]
      (let [inputs (om/get-state owner :inputs)]
        (ut/register-loop owner (:id project)
                          (fn [o {:keys [data]}]
                            (condp = (:action data)
                              :change-view (change-view o (:view data))
                              :submit (do (bid/submit-bid o (:data data) (:id project))
                                          (bid/bid-server-call owner (:id project))))))
        (bid/bid-server-call owner (:id project))
        (go
          (while (om/get-state owner :bid-loop)
            (let [t (timeout 10000)]
              (bid/bid-server-call owner (:id project))
              (<! t))))))
    om/IWillUnmount
    (will-unmount [_]
      (om/set-state! owner :bid-loop false)
      (ut/unsubscribe owner (:id project)))
    om/IRenderState
    (render-state [_ {:keys [bottoms bids]}]
      (om/build ut/project-panel [(merge (assoc project :view-type :find) bids)
                                  bottoms]))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; view
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- find-view
  [_ owner]
  (reify
    om/IInitState
    (init-state [_]
      {:projects []})
    om/IWillMount
    (will-mount [_]
      (get-projects owner (om/get-state owner :view)))
    om/IRenderState
    (render-state [_ {:keys [nav projects inputs view]}]
      (dom/div
       nil
       (apply dom/div
              nil
              (map #(om/build project-summary %)
                   (sort-by :biddead projects)))))))



