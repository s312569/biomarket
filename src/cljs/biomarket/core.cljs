(ns ^:figwheel-always biomarket.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan pub sub]]
            [om.core :as om :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [om.dom :as dom :include-macros true]
            [biomarket.login :as login]
            [biomarket.utilities :refer [log] :as ut])
  (:import [goog History]
           [goog.history EventType]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; history
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def history (History.))

(events/listen history EventType.NAVIGATE
  (fn [e] (secretary/dispatch! (.-token e))))

(.setEnabled history true)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; dash
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn top-navigation
  [[current inputs] owner]
  (om/component
   (dom/div
    #js {:className "pure-menu pure-menu-horizontal"}
    (apply dom/ul
           #js {:className "pure-menu-list"}
           (map #(om/build ut/menu-item (conj % current))
                inputs)))))

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

(defn app-control
  [_ owner]
  (reify
    om/IInitState
    (init-state [_]
      {:current :dash
       :nav-items [["Dashboard" :dash]
                   ["Profile" :profile]
                   ["Look for work" :jobs]
                   ["Post a project" :post]
                   ["My projects" :projects]
                   ["Logout" :logout]]})
    om/IWillMount
    (will-mount [_]
      (ut/register-loop owner :navigation (fn [o {:keys [data]}]
                                            (om/set-state! o :current data))))
    om/IWillUnmount
    (will-unmount [_]
      (ut/unsubscribe owner :navigation))
    om/IRenderState
    (render-state [_ {:keys [current nav-items]}]
      (dom/div
       #js {:className "pure-g"
            :style #js {:padding-top "5em"}}
       (dom/div
        #js {:className "pure-u-1"
             :style #js {:text-align "center"}}
        (dom/div #js {:className "pure-u-3-24"})
        (dom/div #js {:className "pure-u-18-24"}
                 (om/build top-navigation [current nav-items])
                 (dom/hr nil)
                 (condp = current
                   :dash (om/build dashboard nil)
                   :profile "Profile"
                   :jobs "Jobs"
                   :projects "My projects"
                   :post "Post"
                   :logout (set! (.-location js/document) "/logout")))
        (dom/div #js {:className "pure-u-3-24"}))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; home
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn ^:export init []
  (om/root app-control
           nil
           {:target (. js/document (getElementById "app"))
            :shared @ut/app-state}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; routes
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (defroute home-page "/" [h]
;;   (om/root home/home-view app-state
;;            {:target (. js/document (getElementById "app"))
;;             :shared @app-state}))

;; (defroute newworker-page "/newworker" [h]
;;   (om/root neww/newworker-view app-state
;;            {:target (. js/document (getElementById "app"))
;;             :shared @app-state}))
