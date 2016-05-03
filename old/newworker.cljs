(ns ^:figwheel-always biomarket.newworker
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan pub sub]]
            [om.core :as om :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [om.dom :as dom :include-macros true]
            [biomarket.utilities :refer [log pub-info] :as ut]
            [biomarket.aboutform :refer [about-form]]
            [biomarket.skills :refer [skills-form]]
            [biomarket.paymentform :refer [payment-form]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; top navigate
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- nav-guide
  [{:keys [records current]} owner]
  (om/component
   (apply
    dom/div
    #js {:className "pure-g"}
    (map (fn [x y]
           (dom/div
            #js {:className "pure-u-1-3"
                 :style #js {:background-color (if (= current (:name x))
                                                 ""
                                                 "#cad2d3")}}
            (dom/h2 #js {:className "content-head is-center"}
                    (str y ". " (:text x)))))
         records (drop 1 (range))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; view
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn newworker-view
  [_ owner]
  (reify
    om/IInitState
    (init-state [_]
      {:current :about
       :skilld nil
       :aboutd nil})
    om/IWillMount
    (will-mount [_]
      (ut/register-loop owner :aboutd (fn [owner {:keys [data]}]
                                        (om/set-state! owner :aboutd data)))
      (ut/register-loop owner :skilld (fn [owner {:keys [data]}]
                                        (om/set-state! owner :skilld data)))
      (ut/register-loop owner :current (fn [owner {:keys [data]}]
                                         (om/set-state! owner :current data))))
    om/IWillUnmount
    (will-unmount [_]
      (ut/unsubscribe owner :aboutd)
      (ut/unsubscribe owner :skilld)
      (ut/unsubscribe owner :current))
    om/IRenderState
    (render-state [_ {:keys [current aboutd skilld]}]
      (dom/div
       nil
       (om/build ut/site-header nil)
       (dom/div
        #js {:className "content"}
        (om/build nav-guide
                  {:records [{:name :about :text "Tell us about yourself"}
                             {:name :skills :text "What are your skills?"}
                             {:name :another :text "Another"}]
                   :current current})
        (condp = current
          :about (om/build about-form aboutd)
          :skills (om/build skills-form skilld)
          :payment (om/build payment-form nil)))))))
