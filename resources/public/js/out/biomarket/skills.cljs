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
            [biomarket.components :as comps]
            [taoensso.sente  :as sente :refer (cb-success?)]
            [biomarket.utilities :as ut]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; button
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn skills-bbutton
  [[project tag] owner]
  (om/component
   (om/build comps/bottom-button {:project project :view-tag tag :text "Matched skills"})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; display skills as tags
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn skill-tags
  [[project selected tag inline] owner]
  (om/component
   (apply (if inline dom/span dom/div)
          #js {:className "tags"}
          (map #(dom/span
                 #js {:style #js {:padding-right "10px"}}
                 (dom/a
                  #js {:className (if (selected (:id %))
                                    "color2"
                                    "color1")
                       :onClick (if tag (fn [_]
                                          (ut/pub-info owner tag %)))
                       :style #js {:cursor "pointer"}}
                  (:name %)))
               (:skills project)))))
