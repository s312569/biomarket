(ns ^:figwheel-always biomarket.paymentform
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan pub sub]]
            [om.core :as om :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [om.dom :as dom :include-macros true]
            [biomarket.utilities :refer [log pub-info] :as ut]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; skill form
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn payment-form
  [skilld owner]
  (reify
    om/IRenderState
    (render-state [_ {:keys [checked]}]
      (dom/div
       #js {:className "pure-g"
            :style #js {:padding-top "5em"}}
       (dom/div
        #js {:className "pure-u-1"}
        "Payment info")
       (dom/div
        #js {:className "pure-u-1"}
        (dom/div
         #js {:className "pure-u-1-2"
              :onClick #(pub-info owner :current :skills)
              :style #js {:text-align "center"
                          :padding-top "2.5em"}}
         (dom/button
             #js {:className "pure-button pure-button-primary pure-u-1-2"}
             "Previous"))
        (dom/div
         #js {:className "pure-u-1-2"
              :onClick #(pub-info owner :current :payment)
              :style #js {:text-align "center"
                          :padding-top "2.5em"}}
         (dom/button
             #js {:className "pure-button pure-button-primary pure-u-1-2"}
             "Finish")))))))

