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
goog.require('biomarket.components');
biomarket.skills.skills_bbutton = (function biomarket$skills$skills_bbutton(p__131315,owner){
var vec__131320 = p__131315;
var project = cljs.core.nth.call(null,vec__131320,(0),null);
var tag = cljs.core.nth.call(null,vec__131320,(1),null);
if(typeof biomarket.skills.t_biomarket$skills131321 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.skills.t_biomarket$skills131321 = (function (skills_bbutton,p__131315,owner,vec__131320,project,tag,meta131322){
this.skills_bbutton = skills_bbutton;
this.p__131315 = p__131315;
this.owner = owner;
this.vec__131320 = vec__131320;
this.project = project;
this.tag = tag;
this.meta131322 = meta131322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.skills.t_biomarket$skills131321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__131320,project,tag){
return (function (_131323,meta131322__$1){
var self__ = this;
var _131323__$1 = this;
return (new biomarket.skills.t_biomarket$skills131321(self__.skills_bbutton,self__.p__131315,self__.owner,self__.vec__131320,self__.project,self__.tag,meta131322__$1));
});})(vec__131320,project,tag))
;

biomarket.skills.t_biomarket$skills131321.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__131320,project,tag){
return (function (_131323){
var self__ = this;
var _131323__$1 = this;
return self__.meta131322;
});})(vec__131320,project,tag))
;

biomarket.skills.t_biomarket$skills131321.prototype.om$core$IRender$ = true;

biomarket.skills.t_biomarket$skills131321.prototype.om$core$IRender$render$arity$1 = ((function (vec__131320,project,tag){
return (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return om.core.build.call(null,biomarket.components.bottom_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"project","project",1124394579),self__.project,new cljs.core.Keyword(null,"view-tag","view-tag",-1197278670),self__.tag,new cljs.core.Keyword(null,"text","text",-1790561697),"Matched skills"], null));
});})(vec__131320,project,tag))
;

biomarket.skills.t_biomarket$skills131321.getBasis = ((function (vec__131320,project,tag){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"skills-bbutton","skills-bbutton",1882694152,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__131315","p__131315",-199905443,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__131320","vec__131320",-1702497330,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta131322","meta131322",-1205645616,null)], null);
});})(vec__131320,project,tag))
;

biomarket.skills.t_biomarket$skills131321.cljs$lang$type = true;

biomarket.skills.t_biomarket$skills131321.cljs$lang$ctorStr = "biomarket.skills/t_biomarket$skills131321";

biomarket.skills.t_biomarket$skills131321.cljs$lang$ctorPrWriter = ((function (vec__131320,project,tag){
return (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.skills/t_biomarket$skills131321");
});})(vec__131320,project,tag))
;

biomarket.skills.__GT_t_biomarket$skills131321 = ((function (vec__131320,project,tag){
return (function biomarket$skills$skills_bbutton_$___GT_t_biomarket$skills131321(skills_bbutton__$1,p__131315__$1,owner__$1,vec__131320__$1,project__$1,tag__$1,meta131322){
return (new biomarket.skills.t_biomarket$skills131321(skills_bbutton__$1,p__131315__$1,owner__$1,vec__131320__$1,project__$1,tag__$1,meta131322));
});})(vec__131320,project,tag))
;

}

return (new biomarket.skills.t_biomarket$skills131321(biomarket$skills$skills_bbutton,p__131315,owner,vec__131320,project,tag,null));
});
biomarket.skills.skill_tags = (function biomarket$skills$skill_tags(p__131325,owner){
var vec__131330 = p__131325;
var project = cljs.core.nth.call(null,vec__131330,(0),null);
var selected = cljs.core.nth.call(null,vec__131330,(1),null);
var tag = cljs.core.nth.call(null,vec__131330,(2),null);
var inline = cljs.core.nth.call(null,vec__131330,(3),null);
if(typeof biomarket.skills.t_biomarket$skills131331 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.skills.t_biomarket$skills131331 = (function (skill_tags,p__131325,owner,vec__131330,project,selected,tag,inline,meta131332){
this.skill_tags = skill_tags;
this.p__131325 = p__131325;
this.owner = owner;
this.vec__131330 = vec__131330;
this.project = project;
this.selected = selected;
this.tag = tag;
this.inline = inline;
this.meta131332 = meta131332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.skills.t_biomarket$skills131331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__131330,project,selected,tag,inline){
return (function (_131333,meta131332__$1){
var self__ = this;
var _131333__$1 = this;
return (new biomarket.skills.t_biomarket$skills131331(self__.skill_tags,self__.p__131325,self__.owner,self__.vec__131330,self__.project,self__.selected,self__.tag,self__.inline,meta131332__$1));
});})(vec__131330,project,selected,tag,inline))
;

biomarket.skills.t_biomarket$skills131331.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__131330,project,selected,tag,inline){
return (function (_131333){
var self__ = this;
var _131333__$1 = this;
return self__.meta131332;
});})(vec__131330,project,selected,tag,inline))
;

biomarket.skills.t_biomarket$skills131331.prototype.om$core$IRender$ = true;

biomarket.skills.t_biomarket$skills131331.prototype.om$core$IRender$render$arity$1 = ((function (vec__131330,project,selected,tag,inline){
return (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return cljs.core.apply.call(null,(cljs.core.truth_(self__.inline)?om.dom.span:om.dom.div),{"className": "tags"},cljs.core.map.call(null,((function (this__28872__auto____$1,vec__131330,project,selected,tag,inline){
return (function (p1__131324_SHARP_){
return React.DOM.span({"style": {"padding-right": "10px"}},React.DOM.a({"className": (cljs.core.truth_(self__.selected.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__131324_SHARP_)))?"color2":"color1"), "onClick": (cljs.core.truth_(self__.tag)?((function (this__28872__auto____$1,vec__131330,project,selected,tag,inline){
return (function (_){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.tag,p1__131324_SHARP_);
});})(this__28872__auto____$1,vec__131330,project,selected,tag,inline))
:null), "style": {"cursor": "pointer"}},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__131324_SHARP_)));
});})(this__28872__auto____$1,vec__131330,project,selected,tag,inline))
,new cljs.core.Keyword(null,"skills","skills",958701426).cljs$core$IFn$_invoke$arity$1(self__.project)));
});})(vec__131330,project,selected,tag,inline))
;

biomarket.skills.t_biomarket$skills131331.getBasis = ((function (vec__131330,project,selected,tag,inline){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"skill-tags","skill-tags",-484804755,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"inline","inline",-1254551547,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__131325","p__131325",450407016,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__131330","vec__131330",-1138448639,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"inline","inline",-1254551547,null),new cljs.core.Symbol(null,"meta131332","meta131332",-361152414,null)], null);
});})(vec__131330,project,selected,tag,inline))
;

biomarket.skills.t_biomarket$skills131331.cljs$lang$type = true;

biomarket.skills.t_biomarket$skills131331.cljs$lang$ctorStr = "biomarket.skills/t_biomarket$skills131331";

biomarket.skills.t_biomarket$skills131331.cljs$lang$ctorPrWriter = ((function (vec__131330,project,selected,tag,inline){
return (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.skills/t_biomarket$skills131331");
});})(vec__131330,project,selected,tag,inline))
;

biomarket.skills.__GT_t_biomarket$skills131331 = ((function (vec__131330,project,selected,tag,inline){
return (function biomarket$skills$skill_tags_$___GT_t_biomarket$skills131331(skill_tags__$1,p__131325__$1,owner__$1,vec__131330__$1,project__$1,selected__$1,tag__$1,inline__$1,meta131332){
return (new biomarket.skills.t_biomarket$skills131331(skill_tags__$1,p__131325__$1,owner__$1,vec__131330__$1,project__$1,selected__$1,tag__$1,inline__$1,meta131332));
});})(vec__131330,project,selected,tag,inline))
;

}

return (new biomarket.skills.t_biomarket$skills131331(biomarket$skills$skill_tags,p__131325,owner,vec__131330,project,selected,tag,inline,null));
});

//# sourceMappingURL=skills.js.map