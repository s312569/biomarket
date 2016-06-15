(ns ^:figwheel-always biomarket.profile
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.events :as events]
            [ajax.core :refer [POST]]
            [cljs.core.async :refer [put! <! >! chan pub sub unsub timeout]]
            [clojure.string :as str]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.string :refer [blank?]]
            [taoensso.sente  :as sente :refer (cb-success?)]
            [biomarket.utilities :as ut]
            [biomarket.server :as server]
            [biomarket.skills :refer [skill-tags]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; utilities
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn edit-icon
  ([owner] (edit-icon owner nil))
  ([owner size]
   (dom/i #js {:className (if size (str "fa fa-pencil-square-o " size)
                              "fa fa-pencil-square-o")
               :onClick #(om/set-state! owner :editing true)
               :style #js {:padding-left "10px"}})))

(defn show-inputs
  [owner inputs func ut]
  (let [invalid (some identity (map :invalid (vals inputs)))
        btn (clj->js (if-not invalid
                       {:className "btn btn-primary"
                        :onClick #(func owner)}
                       {:className "btn btn-primary" :disabled "disabled"}))]
    (dom/div
     #js {:className (if-not invalid
                       "form-group has-success"
                       "form-group has-error")}
     (apply
      dom/div
      nil
      (concat (map (fn [[k element]]
                     (dom/input
                      #js {:className "form-control"
                           :value (:value element)
                           :placeholder (:placeholder element)
                           :onKeyDown (ut/capture-return
                                       (fn [_] (func owner)))
                           :onChange
                           #(ut/on-change-function owner ut k element %)}))
                   inputs)
              (list (dom/a btn "Done"))))
     (apply dom/div nil (map (fn [[k e]]
                               (if (seq (:invalid e))
                                 (dom/div nil (first (:invalid e)))))
                             inputs)))))

(defn submit
  [owner data]
  (server/save-data data (fn [x] (if (= :success (:status x))
                                   (om/set-state! owner :editing false)
                                   (set! js/window.location "/error")))))

(defn simple-input
  [[ut inputs etext sfunc] owner]
  (reify
    om/IInitState
    (init-state [_]
      {:inputs inputs
       :editing false})
    om/IWillMount
    (will-mount [_]
      (ut/register-loop owner ut))
    om/IWillUnmount
    (will-unmount [_]
      (ut/unsubscribe owner ut))
    om/IRenderState
    (render-state [_ {:keys [inputs editing]}]
      (let [k (first (keys inputs))
            v (:value (k inputs))]
        (dom/div
         nil
         (if editing
           (dom/form #js {:className "form-inline"}
                     (show-inputs owner inputs sfunc ut))
           (if (blank? v)
             (dom/div nil etext (edit-icon owner))
             (dom/div nil v (edit-icon owner)))))))))

(defn text-area
  [[ut inputs etext sfunc] owner]
  (reify
    om/IInitState
    (init-state [_]
      {:editing false
       :inputs inputs})
    om/IWillMount
    (will-mount [_]
      (ut/register-loop owner ut))
    om/IWillUnmount
    (will-unmount [_]
      (ut/unsubscribe owner ut))
    om/IRenderState
    (render-state [_ {:keys [inputs editing]}]
      (let [[k element] (first inputs)]
        (dom/div
         nil
         (if editing
           (dom/div
            nil
            (dom/textarea #js {:placeholder (:placeholder element)
                               :value (:value element)
                               :rows "10"
                               :style #js {:width "100%" :margin-top "10px"}
                               :onChange #(ut/on-change-function owner ut k element %)})
            (dom/a #js {:className "btn btn-primary"
                        :onClick #(sfunc owner)}
                   "Save"))
           (if (blank? (:value element))
             (dom/div
              #js {:style #js {:padding-top "10px"}}
              (dom/a #js {:onClick #(om/set-state! owner :editing true)
                          :style #js {:padding-top "10px"}}
                     etext))
             (dom/div
              #js {:style #js {:padding-top "10px"}}
              (dom/span #js {:style #js {:white-space "pre-line"}}
                        (:value element))
              (edit-icon owner)))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; heading
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn submit-heading
  [owner]
  (let [i (om/get-state owner :inputs)]
    (submit owner {:type :name-update
                   :data {:first (:value (:first i))
                          :last (:value (:last i))
                          :middle (:value (:middle i))}})))

(defn heading
  [user owner]
  (reify
    om/IInitState
    (init-state [_]
      {:editing false
       :inputs {:first {:value (:first user)
                        :invalid nil
                        :placeholder "First name"
                        :tests [[#(not (blank? %))
                                 "First name cannot be blank"]]}
                :middle {:value (:middle user)
                         :invalid nil
                         :placeholder "Middle name"}
                :last {:value (:last user)
                       :invalid nil
                       :placeholder "Last name"
                       :tests [[#(not (blank? %))
                                "Last name cannot be blank"]]}}})
    om/IWillMount
    (will-mount [_]
      (ut/register-loop owner ::heading-update))
    om/IWillUnmount
    (will-unmount [_]
      (ut/unsubscribe owner ::heading-update))
    om/IRenderState
    (render-state [_ {:keys [editing inputs]}]
      (let [first (:first inputs)
            last (:last inputs)
            middle (:middle inputs)
            sfunc (fn [o] )]
        (if-not editing
          (dom/div
           #js {:className "h2"
                :style #js {:padding-bottom "20px"}}
           (str (:value first) " " (:value middle) " " (:value last))
           (edit-icon owner "fa-1x"))
          (dom/div
           #js {:className "form-inline"
                :style #js {:padding-bottom "40px"}}
           (show-inputs owner inputs submit-heading ::heading-update)))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; address
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn submit-address
  [owner]
  (let [i (om/get-state owner :inputs)]
    (submit owner {:type :address-update
                   :data {:address1 (:value (:address1 i))
                          :address2 (:value (:address2 i))
                          :address3 (:value (:address3 i))}})))

(defn address
  [user owner]
  (reify
    om/IInitState
    (init-state [_]
      {:editing false
       :user user
       :inputs {:address1 {:value (:address1 user)
                           :invalid nil
                           :placeholder "Address line 1"}
                :address2 {:value (:address2 user)
                           :invalid nil
                           :placeholder "Address line 2"}
                :address3 {:value (:address3 user)
                           :invalid nil
                           :placeholder "Address line 3"}}})
    om/IWillMount
    (will-mount [_]
      (ut/register-loop owner ::address-update))
    om/IWillUnmount
    (will-unmount [_]
      (ut/unsubscribe owner ::address-update))
    om/IRenderState
    (render-state [_ {:keys [editing inputs]}]
      (let [address1 (:value (:address1 inputs))
            address2 (:value (:address2 inputs))
            address3 (:value (:address3 inputs))]
        (dom/div
         nil
         (if editing
           (dom/form #js {:className "form"}
                     (show-inputs owner inputs submit-address ::address-update))
           (if (every? blank? (list address1 address2 address3))
             (dom/div nil "No address information provided." (edit-icon owner))
             (dom/div
              nil
              (dom/div nil address1 (edit-icon owner))
              (dom/div nil address2)
              (dom/div nil address3)))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; city
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn city
  [user]
  (let [sfunc (fn [owner]
                (let [i (om/get-state owner :inputs)]
                  (submit owner {:type :city-update :data {:city (:value (:city i))}})))
        inputs {:city {:value (:city user) :invalid nil :placeholder "City"}}]
    (om/build simple-input [::city-update inputs "No city information provided." sfunc])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; country
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn country
  [user]
  (let [sfunc (fn [owner]
                (let [i (om/get-state owner :inputs)]
                  (submit owner {:type :country-update :data {:country (:value (:country i))}})))
        inputs {:country {:value (:country user) :invalid nil :placeholder "Country"}}]
    (om/build simple-input [::country-update inputs "No country information provided." sfunc])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; postcode
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn postcode
  [user]
  (let [sfunc (fn [owner]
                (let [i (om/get-state owner :inputs)]
                  (submit owner {:type :postcode-update :data {:postcode (:value (:postcode i))}})))
        inputs {:postcode {:value (:postcode user) :invalid nil :placeholder "Postcode"}}]
    (om/build simple-input [::postcode-update inputs "No postcode information provided." sfunc])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; phone
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn phone
  [user]
  (let [sfunc
        (fn [owner]
          (let [i (om/get-state owner :inputs)]
            (submit owner {:type :phone-update :data {:phone (:value (:phone i))}})))
        inputs {:phone {:value (:phone user) :invalid nil :placeholder "Phone"}}]
    (om/build simple-input [::phone-update inputs "No phone information provided." sfunc])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; email
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn email
  [user]
  (let [sfunc (fn [owner] nil)
        inputs {:email {:value (:email user) :invalid nil :placeholder "Email"}}]
    (om/build simple-input [::email-update inputs "No email information provided." sfunc])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; skills
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- button
  [owner etag editing us]
  (if-not editing
    (if us
      (dom/span nil
                (dom/i #js {:className "fa fa-pencil-square-o"
                            :onClick #(om/set-state!
                                       owner etag (not (om/get-state owner etag)))}))
      (dom/span
       nil
       (dom/a #js {:onClick #(om/set-state!
                              owner etag (not (om/get-state owner etag)))
                   :style #js {:cursor "pointer"}}
              "Add some skills!")))
    (dom/span nil
              (dom/a
               #js {:className "btn btn-primary"
                    :onClick #(om/set-state!
                               owner etag (not (om/get-state owner etag)))}
               "Done"))))

(defn- show-skills
  [owner tag]
  (let [etag (condp = tag "bskill" :editing-b "cskill" :editing-c)
        all-skills (om/get-state owner :all-skills)]
    (let [us (seq (sort-by :name (filter #(= (:type %) tag) (:user-skills all-skills))))
          selected (->> (map :id (:user-skills all-skills))
                        set)]
      (dom/div
       #js {:style #js {:padding-top "10px"}}
       (dom/label
        nil
        (condp = tag "bskill" "Bioinformatic skills" "cskill" "IT skills"))
       (if-not (om/get-state owner etag)
         (dom/div
          nil
          (om/build skill-tags [{:skills us} selected nil true])
          (button owner etag false us))
         (dom/div
          #js {:style #js {:padding-top "10px"}}
          (om/build skill-tags [{:skills (filter #(= (:type %) tag)
                                                 (sort-by :name
                                                          (concat
                                                           (:user-skills all-skills)
                                                           (:other-skills all-skills))))}
                                selected
                                ::tag-clicked
                                true])
          (button owner etag true us)))))))

(defn- save-tag
  [owner tag]
  (let [skills (om/get-state owner :all-skills)
        uid (om/get-state owner :uid)]
    (if ((-> (map :id (:user-skills skills)) set) (:id tag))
      (server/save-data {:type :remove-skill :data {:id (:id tag) :uid uid}})
      (server/save-data {:type :add-skill :data {:id (:id tag) :uid uid}}))))

(defmethod ut/broadcast-loop-manager :skills
  [owner {:keys [data]}]
  (om/set-state! owner :all-skills data))

(defn skills
  [user owner]
  (reify
    om/IInitState
    (init-state [_]
      {:all-skills nil
       :uid (:id user)
       :broadcast-chan (chan)
       :editing-b false
       :editing-c false})
    om/IWillMount
    (will-mount [_]
      (server/get-data owner {:type :user-skills :id (:id user)}
                       #(om/set-state! owner :all-skills (:data %)))
      (ut/register-loop owner ::tag-clicked (fn [o e]
                                              (save-tag o (:data e))))
      (ut/register-broadcast-loop owner {:skills (:id user)}
                                  (om/get-state owner :broadcast-chan)))
    om/IWillUnmount
    (will-unmount [_]
      (ut/unsub-broadcast-loop owner {:skills (:id user)}
                               (om/get-state owner :broadcast-chan))
      (ut/unsubscribe owner ::tag-clicked))
    om/IRenderState
    (render-state [_ {:keys [all-skills editing]}]
      (if-not all-skills
        (om/build ut/waiting nil)
        (dom/div
         nil
         (dom/h3 #js {:style #js {:padding "0px 0px 0px 0px"}} "Skills")
         (dom/hr #js {:style #js {:margin "0px"}})
         (show-skills owner "bskill")
         (show-skills owner "cskill"))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; profile picture
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn profile-pic
  [user owner]
  (om/component
   (dom/div
    nil
    (dom/table
     nil
     (dom/tbody
      nil
      (dom/tr nil
              (dom/td
               #js {:style #js {:text-align "center"}}
               (dom/img #js {:src "img/human.png"
                             :style #js {:margin "5px"}})))
      (dom/tr
       nil
       (dom/td
        #js {:style #js {:text-align "center"
                         :padding-bottom "20px"}}
        (dom/a #js {:className "btn btn-default"}
               "Upload a picture."))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; details
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn details
  [user]
  (let [pad "15px"]
    (dom/table
     nil
     (dom/tbody
      nil
      (dom/tr
       nil
       (dom/td #js {:style #js {:vertical-align "top"
                                :padding-bottom pad}}
               (dom/h4 #js {:style #js {:display "inline"}} "Address:"))
       (dom/td #js {:style #js {:padding-left "30px"
                                :padding-bottom pad}}
               (om/build address user)))
      (dom/tr
       nil
       (dom/td #js {:style #js {:vertical-align "top"
                                :padding-bottom pad}}
               (dom/h4 #js {:style #js {:display "inline"}} "City:"))
       (dom/td #js {:style #js {:padding-left "30px"
                                :padding-bottom pad}}
               (city user)))
      (dom/tr
       nil
       (dom/td #js {:style #js {:vertical-align "top"
                                :padding-bottom pad}}
               (dom/h4 #js {:style #js {:display "inline"}} "Country:"))
       (dom/td #js {:style #js {:padding-left "30px"
                                :padding-bottom pad}}
               (country user)))
      (dom/tr
       nil
       (dom/td #js {:style #js {:vertical-align "top"
                                :padding-bottom pad}}
               (dom/h4 #js {:style #js {:display "inline"}} "Postcode:"))
       (dom/td #js {:style #js {:padding-left "30px"
                                :padding-bottom pad}}
               (postcode user)))
      (dom/tr
       nil
       (dom/td #js {:style #js {:vertical-align "top"
                                :padding-bottom pad}}
               (dom/h4 #js {:style #js {:display "inline"}} "Phone:"))
       (dom/td #js {:style #js {:padding-left "30px"
                                :padding-bottom pad}}
               (phone user)))
      (dom/tr
       nil
       (dom/td #js {:style #js {:vertical-align "top"
                                :padding-bottom pad}}
               (dom/h4 #js {:style #js {:display "inline"}} "Email:"))
       (dom/td #js {:style #js {:padding-left "30px"
                                :padding-bottom pad}}
               (email user)))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; about
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn about
  [user]
  (let [sfunc (fn [owner]
                (let [i (om/get-state owner :inputs)]
                  (submit owner {:type :synopsis-update
                                 :data {:synopsis (get-in i [:synopsis :value])}})))
        inputs {:synopsis {:value (:synopsis user)
                           :invalid nil
                           :placeholder "Synopsis"}}]
    (dom/div
     nil
     (dom/h3 #js {:style #js {:padding "0px"}} "Career synopsis")
     (dom/hr #js {:style #js {:margin "0px"}})
     (om/build text-area
               [::synopsis-update
                inputs
                "Tell us something about your career and skills"
                sfunc]))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; publications
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn publications
  [user]
  (let [sfunc (fn [owner]
                (let [i (om/get-state owner :inputs)]
                  (submit owner {:type :publication-update
                                 :data {:publications
                                        (get-in i [:publications :value])}})))
        inputs {:publications {:value (:publications user)
                               :invalid nil
                               :placeholder "Publications"}}]
    (dom/div
     nil
     (dom/h3 #js {:style #js {:padding "0px"}} "Publications")
     (dom/hr #js {:style #js {:margin "0px"}})
     (om/build text-area
               [::publication-update
                inputs
                "Add some publications"
                sfunc]))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; profile view
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn- get-user-info
  [owner]
  (server/get-data owner {:type :user-data}
                   (fn [r] (om/set-state! owner :user (:data r)))))

(defn profile-view
  [user owner]
  (reify
    om/IInitState
    (init-state [_]
      {:user nil})
    om/IWillMount
    (will-mount [_]
      (get-user-info owner))
    om/IRenderState
    (render-state [_ {:keys [user]}]
      (if-not user
        (om/build ut/waiting nil)
        (dom/div
         #js {:className "panel panel-default"}
         (dom/div
          #js {:className "panel-body"
               :style #js {:padding "20px"}}
          (om/build heading user)
          (dom/div
           #js {:className "container-fluid"}
           (dom/div
            #js {:className "row"}
            (dom/div
             #js {:className "col-md-3"}
             (om/build profile-pic user))
            (dom/div
             #js {:className "col-md-9"}
             (details user)))
           (dom/div #js {:className "row"}
                    (dom/div #js {:className "col-md-12"}
                             (om/build skills user)))
           (dom/div #js {:className "row"}
                    (dom/div #js {:className "col-md-12"}
                             (about user)))
           (dom/div #js {:className "row"}
                    (dom/div #js {:className "col-md-12"}
                             (publications user))))))))))
