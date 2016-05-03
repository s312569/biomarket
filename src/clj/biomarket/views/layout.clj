(ns biomarket.views.layout
  (:require [hiccup.page :refer [html5 include-css include-js]]))

(defn common [& body]
  (html5
   [:head
    [:meta {:charset "utf-8"}]
    [:meta {:content "width=device-width, initial-scale=1.0"
            :name "viewport"}]
    [:title "Biomarket"]
    [:link {:rel "stylesheet" :href "http://yui.yahooapis.com/pure/0.6.0/pure-min.css"}]
    "<!--[if lte IE 8]>"
    [:link {:rel "stylesheet" :href "http://yui.yahooapis.com/pure/0.6.0/grids-responsive-old-ie-min.css"}]
    "<![endif]-->"
    "<!--[if gt IE 8]><!-->"
    [:link {:rel "stylesheet" :href "http://yui.yahooapis.com/pure/0.6.0/grids-responsive-min.css"}]
    "<!--<![endif]-->"
    [:link {:rel "stylesheet" :href "http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"}]
    "<!--[if lte IE 8]>"
    [:link {:rel "stylesheet" :href "css/layouts/marketing-old-ie.css"}]
    "<![endif]-->"
    "<!--[if gt IE 8]><!-->"
    [:link {:rel "stylesheet" :href "css/layouts/marketing.css"}]
    "<!--<![endif]-->"
    (include-js "/js/app.js")]
   [:body
    body]))

(defn site-header
  []
  (html5
   [:div {:class "header"}
    [:div {:class "home-menu pure-menu pure-menu-horizontal pure-menu-fixed"
           :style "background-color:#2d3e50"}
     [:a {:class "pure-menu-heading"
          :style "color:white;"}
      "Biomarket"]]]))

