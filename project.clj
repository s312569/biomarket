(defproject biomarket "0.1.0-SNAPSHOT"
  :description "Market place for bioinformatics projects."
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[com.mchange/c3p0 "0.9.5.2"]
                 [clojure.jdbc/clojure.jdbc-c3p0 "0.3.2"]
                 [postgresql "9.3-1102.jdbc41"]
                 [org.clojure/java.jdbc "0.6.1"]
                 [org.clojure/data.json "0.2.6"]
                 [cljs-ajax "0.5.8"]
                 [org.clojure/clojure "1.8.0"]
                 [compojure "1.5.1"]
                 [ring/ring-json "0.4.0"]
                 [ring/ring-defaults "0.2.1"]
                 [hiccup "1.0.5"]
                 [ring/ring-core "1.5.0"]
                 [clj-time "0.12.0"]
                 [http-kit "2.2.0"]
                 [com.andrewmcveigh/cljs-time "0.4.0"]
                 [secretary "1.2.3"]
                 [com.cemerick/friend "0.2.3"]
                 [com.taoensso/sente "1.10.0"]
                 [org.clojure/tools.reader "1.0.0-beta1"]
                 [clojurewerkz/money "1.9.0"]
                 [org.clojure/core.cache "0.6.5"]
                 [org.clojure/core.memoize "0.5.9" :exclusions [org.clojure/core.cache]]
                 [org.clojure/clojurescript "1.9.93"]
                 [org.clojure/core.async "0.2.385"]
                 [cljs-http "0.1.41"]
                 [om "0.7.3"]
                 [biodb "0.2.0"]]
  :plugins [[lein-ring "0.9.7"]
            [lein-cljsbuild "1.1.3"]
            [lein-figwheel "0.5.4-7"]]
  :clean-targets ^{:protect false} ["resources/public/js/out"
                                    "resources/public/js/app.js"]
  :figwheel {:ring-handler biomarket.handler/app}
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/clj" "src/cljs"]
                        :figwheel true
                        :compiler {:main "biomarket.core"
                                   :asset-path "js/out"
                                   :output-dir "resources/public/js/out"
                                   :output-to "resources/public/js/app.js"}}]})
