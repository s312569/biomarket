(ns biomarket.routes.home
  (:require [compojure.core :refer :all]
            [biomarket.views.layout :as layout]
            [hiccup.page :refer [include-js html5]]))

(defn- splash
  []
  [:div {:class "splash-container"}
   [:div {:class "splash"}
    [:h1 {:class "splash-head"} "Bioinformaticians meet researchers"]
    [:p {:class "splash-subhead"}
     "Lorem ipsum dolor sit amet, consectetur adipisicing elit."]
    [:span nil
     [:a {:class "pure-button pure-button-primary" :href "user"}
      "Get started"]]]])

(defn- boxes
  []
  [:div {:class "content"}
   [:h2 {:class "content-head is-center"}
    "Excepteur sint occaecat cupidatat."]
   [:div {:class "pure-g"}
    [:div {:class "l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"}
     [:h3 {:class "content-subhead"}
      [:i {:class "fa fa-rocket"}
       "Get Started Quickly"]]
     [:p nil
      "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."]]
    [:div {:class "l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"}
     [:h3 {:class "content-subhead"}
      [:i {:class "fa fa-mobile"}
       "Responsive layouts"]]
     [:p nil
      "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."]]
    [:div {:class "l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"}
     [:h3 {:class "content-subhead"}
      [:i {:class "fa fa-th-large"}
       "Modular"]]
     [:p nil
      "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."]]
    [:div {:class "l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"}
     [:h3 {:class "content-subhead"}
      [:i {:class "fa fa-check-square-o"}
       "Plays nice"]]
     [:p nil
      "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."]]]])

(defn- ribbon
  []
  [:div {:class "ribbon l-box-lrg pure-g"}
   [:div {:class "l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5"}
    [:img {:class "pure-img-responsive" :alt "File Icons" :width "300" :src "img/common/file-icons.png"}]]
   [:div {:class "pure-u-1 pure-u-md-1-2 pure-u-lg-3-5"}
    [:h2 {:class "content-head content-head-ribbon"}
     "Laboris nisi ut aliquip."]
    [:p nil
     "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."]]])

(defn- footer
  []
  [:div {:class "footer l-box is-center"}
   [:p nil "This is the footer."]])

(defn home-view
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
    "<!--[if lte IE 8]>"
    [:link {:rel "stylesheet" :href "css/layouts/marketing-old-ie.css"}]
    "<![endif]-->"
    "<!--[if gt IE 8]><!-->"
    [:link {:rel "stylesheet" :href "css/layouts/marketing.css"}]
    "<!--<![endif]-->"]
   [:body
    [:div nil
     (layout/site-header)
     (splash)
     [:div {:class "content-wrapper"}
      (boxes)
      (ribbon)
      (footer)]]]))
