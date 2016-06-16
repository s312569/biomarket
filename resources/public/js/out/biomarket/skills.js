// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.skills');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('biomarket.utilities');
goog.require('taoensso.sente');
goog.require('cljs.pprint');
goog.require('ajax.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('cljs_time.format');
goog.require('om.core');
goog.require('clojure.string');
biomarket.skills.skill_tags = (function biomarket$skills$skill_tags(p__37935,owner){
var vec__37940 = p__37935;
var project = cljs.core.nth.call(null,vec__37940,(0),null);
var selected = cljs.core.nth.call(null,vec__37940,(1),null);
var tag = cljs.core.nth.call(null,vec__37940,(2),null);
var inline = cljs.core.nth.call(null,vec__37940,(3),null);
if(typeof biomarket.skills.t_biomarket$skills37941 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.skills.t_biomarket$skills37941 = (function (skill_tags,p__37935,owner,vec__37940,project,selected,tag,inline,meta37942){
this.skill_tags = skill_tags;
this.p__37935 = p__37935;
this.owner = owner;
this.vec__37940 = vec__37940;
this.project = project;
this.selected = selected;
this.tag = tag;
this.inline = inline;
this.meta37942 = meta37942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.skills.t_biomarket$skills37941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__37940,project,selected,tag,inline){
return (function (_37943,meta37942__$1){
var self__ = this;
var _37943__$1 = this;
return (new biomarket.skills.t_biomarket$skills37941(self__.skill_tags,self__.p__37935,self__.owner,self__.vec__37940,self__.project,self__.selected,self__.tag,self__.inline,meta37942__$1));
});})(vec__37940,project,selected,tag,inline))
;

biomarket.skills.t_biomarket$skills37941.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__37940,project,selected,tag,inline){
return (function (_37943){
var self__ = this;
var _37943__$1 = this;
return self__.meta37942;
});})(vec__37940,project,selected,tag,inline))
;

biomarket.skills.t_biomarket$skills37941.prototype.om$core$IRender$ = true;

biomarket.skills.t_biomarket$skills37941.prototype.om$core$IRender$render$arity$1 = ((function (vec__37940,project,selected,tag,inline){
return (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return cljs.core.apply.call(null,(cljs.core.truth_(self__.inline)?om.dom.span:om.dom.div),{"className": "tags"},cljs.core.map.call(null,((function (this__36785__auto____$1,vec__37940,project,selected,tag,inline){
return (function (p1__37934_SHARP_){
return React.DOM.span({"style": {"padding-right": "10px"}},React.DOM.a({"className": (cljs.core.truth_(self__.selected.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__37934_SHARP_)))?"color2":"color1"), "onClick": (cljs.core.truth_(self__.tag)?((function (this__36785__auto____$1,vec__37940,project,selected,tag,inline){
return (function (_){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.tag,p1__37934_SHARP_);
});})(this__36785__auto____$1,vec__37940,project,selected,tag,inline))
:null), "style": {"cursor": "pointer"}},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__37934_SHARP_)));
});})(this__36785__auto____$1,vec__37940,project,selected,tag,inline))
,new cljs.core.Keyword(null,"skills","skills",958701426).cljs$core$IFn$_invoke$arity$1(self__.project)));
});})(vec__37940,project,selected,tag,inline))
;

biomarket.skills.t_biomarket$skills37941.getBasis = ((function (vec__37940,project,selected,tag,inline){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"skill-tags","skill-tags",-484804755,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"inline","inline",-1254551547,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__37935","p__37935",1655252526,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__37940","vec__37940",1130181572,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"inline","inline",-1254551547,null),new cljs.core.Symbol(null,"meta37942","meta37942",1968376474,null)], null);
});})(vec__37940,project,selected,tag,inline))
;

biomarket.skills.t_biomarket$skills37941.cljs$lang$type = true;

biomarket.skills.t_biomarket$skills37941.cljs$lang$ctorStr = "biomarket.skills/t_biomarket$skills37941";

biomarket.skills.t_biomarket$skills37941.cljs$lang$ctorPrWriter = ((function (vec__37940,project,selected,tag,inline){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.skills/t_biomarket$skills37941");
});})(vec__37940,project,selected,tag,inline))
;

biomarket.skills.__GT_t_biomarket$skills37941 = ((function (vec__37940,project,selected,tag,inline){
return (function biomarket$skills$skill_tags_$___GT_t_biomarket$skills37941(skill_tags__$1,p__37935__$1,owner__$1,vec__37940__$1,project__$1,selected__$1,tag__$1,inline__$1,meta37942){
return (new biomarket.skills.t_biomarket$skills37941(skill_tags__$1,p__37935__$1,owner__$1,vec__37940__$1,project__$1,selected__$1,tag__$1,inline__$1,meta37942));
});})(vec__37940,project,selected,tag,inline))
;

}

return (new biomarket.skills.t_biomarket$skills37941(biomarket$skills$skill_tags,p__37935,owner,vec__37940,project,selected,tag,inline,null));
});

//# sourceMappingURL=skills.js.map