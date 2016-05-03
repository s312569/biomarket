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


