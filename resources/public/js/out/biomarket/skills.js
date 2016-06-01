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
biomarket.skills.skill_tags = (function biomarket$skills$skill_tags(p__91671,owner){
var vec__91676 = p__91671;
var project = cljs.core.nth.call(null,vec__91676,(0),null);
var selected = cljs.core.nth.call(null,vec__91676,(1),null);
var tag = cljs.core.nth.call(null,vec__91676,(2),null);
if(typeof biomarket.skills.t_biomarket$skills91677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.skills.t_biomarket$skills91677 = (function (skill_tags,p__91671,owner,vec__91676,project,selected,tag,meta91678){
this.skill_tags = skill_tags;
this.p__91671 = p__91671;
this.owner = owner;
this.vec__91676 = vec__91676;
this.project = project;
this.selected = selected;
this.tag = tag;
this.meta91678 = meta91678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.skills.t_biomarket$skills91677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__91676,project,selected,tag){
return (function (_91679,meta91678__$1){
var self__ = this;
var _91679__$1 = this;
return (new biomarket.skills.t_biomarket$skills91677(self__.skill_tags,self__.p__91671,self__.owner,self__.vec__91676,self__.project,self__.selected,self__.tag,meta91678__$1));
});})(vec__91676,project,selected,tag))
;

biomarket.skills.t_biomarket$skills91677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__91676,project,selected,tag){
return (function (_91679){
var self__ = this;
var _91679__$1 = this;
return self__.meta91678;
});})(vec__91676,project,selected,tag))
;

biomarket.skills.t_biomarket$skills91677.prototype.om$core$IRender$ = true;

biomarket.skills.t_biomarket$skills91677.prototype.om$core$IRender$render$arity$1 = ((function (vec__91676,project,selected,tag){
return (function (this__36757__auto__){
var self__ = this;
var this__36757__auto____$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "tags", "style": {"padding-top": "20px"}},cljs.core.map.call(null,((function (this__36757__auto____$1,vec__91676,project,selected,tag){
return (function (p1__91670_SHARP_){
return React.DOM.span({"style": {"padding-right": "10px"}},React.DOM.a({"className": (cljs.core.truth_(self__.selected.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__91670_SHARP_)))?"color2":"color1"), "onClick": (cljs.core.truth_(self__.tag)?((function (this__36757__auto____$1,vec__91676,project,selected,tag){
return (function (_){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.tag,p1__91670_SHARP_);
});})(this__36757__auto____$1,vec__91676,project,selected,tag))
:null), "style": {"cursor": "pointer"}},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__91670_SHARP_)));
});})(this__36757__auto____$1,vec__91676,project,selected,tag))
,new cljs.core.Keyword(null,"skills","skills",958701426).cljs$core$IFn$_invoke$arity$1(self__.project)));
});})(vec__91676,project,selected,tag))
;

biomarket.skills.t_biomarket$skills91677.getBasis = ((function (vec__91676,project,selected,tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"skill-tags","skill-tags",-484804755,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__91671","p__91671",2093534396,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__91676","vec__91676",-1268074085,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta91678","meta91678",-646203978,null)], null);
});})(vec__91676,project,selected,tag))
;

biomarket.skills.t_biomarket$skills91677.cljs$lang$type = true;

biomarket.skills.t_biomarket$skills91677.cljs$lang$ctorStr = "biomarket.skills/t_biomarket$skills91677";

biomarket.skills.t_biomarket$skills91677.cljs$lang$ctorPrWriter = ((function (vec__91676,project,selected,tag){
return (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.skills/t_biomarket$skills91677");
});})(vec__91676,project,selected,tag))
;

biomarket.skills.__GT_t_biomarket$skills91677 = ((function (vec__91676,project,selected,tag){
return (function biomarket$skills$skill_tags_$___GT_t_biomarket$skills91677(skill_tags__$1,p__91671__$1,owner__$1,vec__91676__$1,project__$1,selected__$1,tag__$1,meta91678){
return (new biomarket.skills.t_biomarket$skills91677(skill_tags__$1,p__91671__$1,owner__$1,vec__91676__$1,project__$1,selected__$1,tag__$1,meta91678));
});})(vec__91676,project,selected,tag))
;

}

return (new biomarket.skills.t_biomarket$skills91677(biomarket$skills$skill_tags,p__91671,owner,vec__91676,project,selected,tag,null));
});

//# sourceMappingURL=skills.js.map