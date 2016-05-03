(ns biomarket.routes.app
  (:require [biomarket.views.layout :as layout]
            [hiccup.page :refer [include-js html5]]))

(defn app-view
  []
  (html5
   [:head
    [:meta {:charset "utf-8"}]
    [:meta {:content "width=device-width, initial-scale=1.0"
            :name "viewport"}]
    [:title "Biomarket"]
    [:link {:rel "stylesheet" :href "css/pure-release-0.6.0/pure-min.css"}]
    "<!--[if lte IE 8]>"
    [:link {:rel "stylesheet" :href "css/pure-release-0.6.0/grids-responsive-old-ie-min.css"}]
    "<![endif]-->"
    "<!--[if gt IE 8]><!-->"
    [:link {:rel "stylesheet" :href "css/pure-release-0.6.0/grids-responsive-min.css"}]
    "<!--<![endif]-->"
    [:link {:rel "stylesheet" :href "css/font-awesome-4.6.1/css/font-awesome.min.css"}]
    [:link {:rel "stylesheet" :href "css/my-css.css"}]]
   [:body
    [:div nil
     (layout/site-header)
     [:div {:id "app"}]
     (include-js "js/react-0-11.1.js")
     (include-js "js/out/goog/base.js")
     (include-js "js/app.js")
     "<script>biomarket.core.init();</script>"]]))
