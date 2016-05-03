(ns ^:figwheel-always biomarket.skills
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [cljs.core.async :refer [put! <! >! chan pub sub]]
            [om.core :as om :include-macros true]
            [secretary.core :as secretary :refer-macros [defroute]]
            [om.dom :as dom :include-macros true]
            [biomarket.utilities :refer [log pub-info] :as ut]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; skills
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def skills [["1" "RNA-Seq" "bskill"] ["2" "Genome assembly" "bskill"]
             ["3" "SWATH" "bskill"] ["4" "Genetics" "bskill"]
             ["5" "Cell biology" "bskill"] ["6" "Biochemistry" "bskill"]
             ["7" "Biophysics" "bskill"] ["8" "Evolutionary biology" "bskill"]
             ["9" "Biotechnology" "bskill"] ["10" "Genomics" "bskill"]
             ["11" "Systems biology" "bskill"] ["12" "Molecular biology" "bskill"]
             ["12" "Biostatistics" "bskill"] ["13" "Mathematical biology" "bskill"]
             ["14" "Differential equations" "bskill"] ["15" "Linear algebra" "bskill"]
             ["16" "Discrete mathematics" "bskill"] ["17" "Calculus" "bskill"]
             ["18" "Physics" "bskill"] ["19" "Chemistry" "bskill"]
             ["20" "Bioimage analysis" "bskill"] ["21" "Biological simulation" "bskill"]
             ["22" "Structural biology" "bskill"] ["23" "Programming" "bskill"]
             ["23" "Software engineering" "bskill"] ["24" "Algorithms" "bskill"]
             ["25" "Data structures" "bskill"] ["26" "Databases" "bskill"]
             ["27" "Artificial intelligence" "bskill"] ["28" "Machine learning" "bskill"]
             ["29" "Visualization" "bskill"] ["30" "Computer systems" "bskill"]
             ["31" "NoSQL" "cskill"] ["32" "Saas" "cskill"]
             ["33" "MongoDB" "cskill"] ["34" "JBoss" "cskill"]
             ["35" "Objective C" "cskill"] ["36" "Haddop" "cskill"]
             ["37" "JDBC" "cskill"] ["38" "UNIX" "cskill"]
             ["39" "Python" "cskill"] ["40" "R" "cskill"]
             ["41" "PostgreSQL" "cskill"] ["42" "C++" "cskill"]
             ["43" "Tableau" "cskill"] ["44" "MATLAB" "cskill"]
             ["45" "SIMULATION" "cskill"] ["46" "PERL" "cskill"]
             ["47" "Lamp stack" "cskill"] ["48" "MySQL" "cskill"]
             ["49" "PHP" "cskill"] ["50" "Cryptography" "cskill"]
             ["51" "SSL" "cskill"] ["52" "HTML5" "cskill"]
             ["53" "C" "cskill"] ["54" "CSS" "cskill"]
             ["55" "Fortran" "cskill"] ["56" "Linux" "cskill"]
             ["57" "Java" "cskill"] ["58" "Javascript" "cskill"]
             ["59" "Ruby" "cskill"]])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; skill buttons
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- register-and-change
  [data owner]
  (if (= (om/get-state owner :state) :unchecked)
    (om/set-state! owner :state :checked)
    (om/set-state! owner :state :unchecked))
  (pub-info owner :checking data))

(defn- button
  [[id text _ checked] owner]
  (reify
    om/IInitState
    (init-state [_]
      {:state (if checked :checked :unchecked)
       :id id
       :text text})
    om/IRenderState
    (render-state [_ {:keys [state text id]}]
      (if (= :unchecked state)
        (dom/a
         #js {:className "pure-button"
              :style #js {:margin "5px"}
              :onClick #(register-and-change id owner)}
         (dom/i #js {:className "fa fa-square-o"})
         (str " " text))
        (dom/a
         #js {:className "pure-button pure-button-primary"
              :style #js {:margin "5px"}
              :onClick #(register-and-change id owner)}
         (dom/i #js {:className "fa fa-check-square-o"})
         (str " " text))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; skill form
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- register
  [owner data]
  (let [s (om/get-state owner :checked)]
    (if (contains? s data)
      (om/set-state! owner :checked (disj s data))
      (om/set-state! owner :checked (conj s data)))))

(defn- skills-data
  [owner type]
  (let [ch (om/get-state owner :checked)]
    (->> (filter #(= type (nth % 2)) skills)
         (map #(if (ch (first %))
                 (conj % true)
                 (conj % false))))))

(defn skills-form
  [skilld owner]
  (reify
    om/IInitState
    (init-state [_]
      (if skilld
        {:checked skilld}
        {:checked #{}}))
    om/IWillMount
    (will-mount [_]
      (ut/register-loop owner :checking
                        (fn [o e] (register o (:data e)))))
    om/IWillUnmount
    (will-unmount [_]
      (ut/unsubscribe owner :checking))
    om/IRenderState
    (render-state [_ {:keys [checked]}]
      (dom/div
       #js {:className "pure-g"
            :style #js {:padding-top "5em"}}
       (dom/div
        #js {:className "pure-u-1"}
        (dom/div
         #js {:className "pure-u-1-2"
              :style #js {:text-align "center"}}
         (dom/label nil "Bioinformatic skills")
         (apply dom/fieldset #js {:className "pure-group"}
                (map #(om/build button %)
                     (skills-data owner "bskill"))))
        (dom/div
         #js {:className "pure-u-1-2"
              :style #js {:text-align "center"}}
         (dom/label nil "Computer skills")
         (apply dom/fieldset {:className "pure-group"}
                (map #(om/build button %)
                     (skills-data owner "cskill")))))
       (dom/div
        #js {:className "pure-u-1"}
        (dom/div
         #js {:className "pure-u-1-2"
              :onClick #(do (pub-info owner :skilld (om/get-state owner :checked))
                            (pub-info owner :current :about))
              :style #js {:text-align "center"
                          :padding-top "2.5em"}}
         (dom/button
             #js {:className "pure-button pure-button-primary pure-u-1-2"}
             "Previous"))
        (dom/div
         #js {:className "pure-u-1-2"
              :onClick #(do (pub-info owner :skilld (om/get-state owner :checked))
                            (pub-info owner :current :payment))
              :style #js {:text-align "center"
                          :padding-top "2.5em"}}
         (dom/button
             #js {:className "pure-button pure-button-primary pure-u-1-2"}
             "Next")))))))

