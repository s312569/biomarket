(ns ^:figwheel-always biomarket.dashboard
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan pub sub]]
            [om.core :as om :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [om.dom :as dom :include-macros true]
            [biomarket.login :as login]
            [biomarket.utilities :refer [app-state log]])
  (:import [goog History]
           [goog.history EventType]))

(defn dashboard
  [_ owner]
  (reify
    om/IRenderState
    (render-state [_ _]
      (dom/div
       #js {:className "pure-u-1"}
       (dom/div
        #js {:className "pure-u-1-3"}
        (dom/div
         #js {:className "pdisplay"}
         (dom/p nil "Hello there")))
       (dom/div
        #js {:className "pure-u-1-3"}
        (dom/div
         #js {:className "pure-u-20-24 pdisplay"}
         (dom/p nil "Another one")))
       (dom/div
        #js {:className "pure-u-1-3"}
        (dom/div
         #js {:className "pdisplay"}
         (dom/p nil "One more")))))))
