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
    [:link {:rel "stylesheet" :href "bootstrap-3.3.6-dist/css/bootstrap.min.css"}]
    [:link {:rel "stylesheet" :href "bootstrap-3.3.6-dist/css/ie10-viewport-bug-workaround.css"}]
    [:link {:rel "stylesheet" :href "bootstrap-3.3.6-dist/css/starter-template.css"}]
    "<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src=\"https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js\"></script>
      <script src=\"https://oss.maxcdn.com/respond/1.4.2/respond.min.js\"></script>
    <![endif]-->"
    [:link {:rel "stylesheet" :href "css/font-awesome-4.6.1/css/font-awesome.min.css"}]
    [:link {:rel "stylesheet" :href "css/my-css.css"}]]
   [:body {:style "background-color:#FAFAFA"}
    [:div {:class "container"}
     [:div {:id "app"}]]
    (include-js "js/react-0-11.1.js")
    (include-js "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js")
    (include-js "js/out/goog/base.js")
    (include-js "bootstrap-3.3.6-dist/js/bootstrap.min.js")
    (include-js "bootstrap-3.3.6-dist/js/ie10-viewport-bug-workaround.js")
    (include-js "js/app.js")
    "<script>biomarket.core.init();</script>"]))
