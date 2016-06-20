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
biomarket.skills.skills_bbutton = (function biomarket$skills$skills_bbutton(p__119430,owner){
var vec__119435 = p__119430;
var project = cljs.core.nth.call(null,vec__119435,(0),null);
var tag = cljs.core.nth.call(null,vec__119435,(1),null);
if(typeof biomarket.skills.t_biomarket$skills119436 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.skills.t_biomarket$skills119436 = (function (skills_bbutton,p__119430,owner,vec__119435,project,tag,meta119437){
this.skills_bbutton = skills_bbutton;
this.p__119430 = p__119430;
this.owner = owner;
this.vec__119435 = vec__119435;
this.project = project;
this.tag = tag;
this.meta119437 = meta119437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.skills.t_biomarket$skills119436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__119435,project,tag){
return (function (_119438,meta119437__$1){
var self__ = this;
var _119438__$1 = this;
return (new biomarket.skills.t_biomarket$skills119436(self__.skills_bbutton,self__.p__119430,self__.owner,self__.vec__119435,self__.project,self__.tag,meta119437__$1));
});})(vec__119435,project,tag))
;

biomarket.skills.t_biomarket$skills119436.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__119435,project,tag){
return (function (_119438){
var self__ = this;
var _119438__$1 = this;
return self__.meta119437;
});})(vec__119435,project,tag))
;

biomarket.skills.t_biomarket$skills119436.prototype.om$core$IRender$ = true;

biomarket.skills.t_biomarket$skills119436.prototype.om$core$IRender$render$arity$1 = ((function (vec__119435,project,tag){
return (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return om.core.build.call(null,biomarket.components.bottom_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"project","project",1124394579),self__.project,new cljs.core.Keyword(null,"view-tag","view-tag",-1197278670),self__.tag,new cljs.core.Keyword(null,"text","text",-1790561697),"Matched skills"], null));
});})(vec__119435,project,tag))
;

biomarket.skills.t_biomarket$skills119436.getBasis = ((function (vec__119435,project,tag){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"skills-bbutton","skills-bbutton",1882694152,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__119430","p__119430",-620408027,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__119435","vec__119435",-7501067,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta119437","meta119437",-1152843966,null)], null);
});})(vec__119435,project,tag))
;

biomarket.skills.t_biomarket$skills119436.cljs$lang$type = true;

biomarket.skills.t_biomarket$skills119436.cljs$lang$ctorStr = "biomarket.skills/t_biomarket$skills119436";

biomarket.skills.t_biomarket$skills119436.cljs$lang$ctorPrWriter = ((function (vec__119435,project,tag){
return (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.skills/t_biomarket$skills119436");
});})(vec__119435,project,tag))
;

biomarket.skills.__GT_t_biomarket$skills119436 = ((function (vec__119435,project,tag){
return (function biomarket$skills$skills_bbutton_$___GT_t_biomarket$skills119436(skills_bbutton__$1,p__119430__$1,owner__$1,vec__119435__$1,project__$1,tag__$1,meta119437){
return (new biomarket.skills.t_biomarket$skills119436(skills_bbutton__$1,p__119430__$1,owner__$1,vec__119435__$1,project__$1,tag__$1,meta119437));
});})(vec__119435,project,tag))
;

}

return (new biomarket.skills.t_biomarket$skills119436(biomarket$skills$skills_bbutton,p__119430,owner,vec__119435,project,tag,null));
});
biomarket.skills.skill_tags = (function biomarket$skills$skill_tags(p__119440,owner){
var vec__119445 = p__119440;
var project = cljs.core.nth.call(null,vec__119445,(0),null);
var selected = cljs.core.nth.call(null,vec__119445,(1),null);
var tag = cljs.core.nth.call(null,vec__119445,(2),null);
var inline = cljs.core.nth.call(null,vec__119445,(3),null);
if(typeof biomarket.skills.t_biomarket$skills119446 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.skills.t_biomarket$skills119446 = (function (skill_tags,p__119440,owner,vec__119445,project,selected,tag,inline,meta119447){
this.skill_tags = skill_tags;
this.p__119440 = p__119440;
this.owner = owner;
this.vec__119445 = vec__119445;
this.project = project;
this.selected = selected;
this.tag = tag;
this.inline = inline;
this.meta119447 = meta119447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.skills.t_biomarket$skills119446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__119445,project,selected,tag,inline){
return (function (_119448,meta119447__$1){
var self__ = this;
var _119448__$1 = this;
return (new biomarket.skills.t_biomarket$skills119446(self__.skill_tags,self__.p__119440,self__.owner,self__.vec__119445,self__.project,self__.selected,self__.tag,self__.inline,meta119447__$1));
});})(vec__119445,project,selected,tag,inline))
;

biomarket.skills.t_biomarket$skills119446.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__119445,project,selected,tag,inline){
return (function (_119448){
var self__ = this;
var _119448__$1 = this;
return self__.meta119447;
});})(vec__119445,project,selected,tag,inline))
;

biomarket.skills.t_biomarket$skills119446.prototype.om$core$IRender$ = true;

biomarket.skills.t_biomarket$skills119446.prototype.om$core$IRender$render$arity$1 = ((function (vec__119445,project,selected,tag,inline){
return (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return cljs.core.apply.call(null,(cljs.core.truth_(self__.inline)?om.dom.span:om.dom.div),{"className": "tags"},cljs.core.map.call(null,((function (this__36859__auto____$1,vec__119445,project,selected,tag,inline){
return (function (p1__119439_SHARP_){
return React.DOM.span({"style": {"padding-right": "10px"}},React.DOM.a({"className": (cljs.core.truth_(self__.selected.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__119439_SHARP_)))?"color2":"color1"), "onClick": (cljs.core.truth_(self__.tag)?((function (this__36859__auto____$1,vec__119445,project,selected,tag,inline){
return (function (_){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.tag,p1__119439_SHARP_);
});})(this__36859__auto____$1,vec__119445,project,selected,tag,inline))
:null), "style": {"cursor": "pointer"}},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__119439_SHARP_)));
});})(this__36859__auto____$1,vec__119445,project,selected,tag,inline))
,new cljs.core.Keyword(null,"skills","skills",958701426).cljs$core$IFn$_invoke$arity$1(self__.project)));
});})(vec__119445,project,selected,tag,inline))
;

biomarket.skills.t_biomarket$skills119446.getBasis = ((function (vec__119445,project,selected,tag,inline){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"skill-tags","skill-tags",-484804755,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"inline","inline",-1254551547,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__119440","p__119440",-2007256928,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__119445","vec__119445",1195204238,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"inline","inline",-1254551547,null),new cljs.core.Symbol(null,"meta119447","meta119447",-247316623,null)], null);
});})(vec__119445,project,selected,tag,inline))
;

biomarket.skills.t_biomarket$skills119446.cljs$lang$type = true;

biomarket.skills.t_biomarket$skills119446.cljs$lang$ctorStr = "biomarket.skills/t_biomarket$skills119446";

biomarket.skills.t_biomarket$skills119446.cljs$lang$ctorPrWriter = ((function (vec__119445,project,selected,tag,inline){
return (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.skills/t_biomarket$skills119446");
});})(vec__119445,project,selected,tag,inline))
;

biomarket.skills.__GT_t_biomarket$skills119446 = ((function (vec__119445,project,selected,tag,inline){
return (function biomarket$skills$skill_tags_$___GT_t_biomarket$skills119446(skill_tags__$1,p__119440__$1,owner__$1,vec__119445__$1,project__$1,selected__$1,tag__$1,inline__$1,meta119447){
return (new biomarket.skills.t_biomarket$skills119446(skill_tags__$1,p__119440__$1,owner__$1,vec__119445__$1,project__$1,selected__$1,tag__$1,inline__$1,meta119447));
});})(vec__119445,project,selected,tag,inline))
;

}

return (new biomarket.skills.t_biomarket$skills119446(biomarket$skills$skill_tags,p__119440,owner,vec__119445,project,selected,tag,inline,null));
});

//# sourceMappingURL=skills.js.map