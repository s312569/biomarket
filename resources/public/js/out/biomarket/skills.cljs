(ns ^:figwheel-always biomarket.skills
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
            [taoensso.sente  :as sente :refer (cb-success?)]
            [biomarket.utilities :as ut]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; display skills as tags
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- skill-tags
  [[project selected tag] owner]
  (om/component
   (apply dom/div
          #js {:className "tags"
               :style #js {:padding-top "20px"}}
          (map #(dom/span
                 #js {:style #js {:padding-right "10px"}}
                 (dom/a
                  #js {:className (if (selected (:id %))
                                    "color2"
                                    "color1")
                       :onClick (if tag (fn [_] (ut/pub-info owner tag %)))
                       :style #js {:cursor "pointer"}}
                  (:name %)))
               (:skills project)))))
