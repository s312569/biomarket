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
biomarket.skills.skills_bbutton = (function biomarket$skills$skills_bbutton(p__62464,owner){
var vec__62469 = p__62464;
var project = cljs.core.nth.call(null,vec__62469,(0),null);
var tag = cljs.core.nth.call(null,vec__62469,(1),null);
if(typeof biomarket.skills.t_biomarket$skills62470 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.skills.t_biomarket$skills62470 = (function (skills_bbutton,p__62464,owner,vec__62469,project,tag,meta62471){
this.skills_bbutton = skills_bbutton;
this.p__62464 = p__62464;
this.owner = owner;
this.vec__62469 = vec__62469;
this.project = project;
this.tag = tag;
this.meta62471 = meta62471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.skills.t_biomarket$skills62470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__62469,project,tag){
return (function (_62472,meta62471__$1){
var self__ = this;
var _62472__$1 = this;
return (new biomarket.skills.t_biomarket$skills62470(self__.skills_bbutton,self__.p__62464,self__.owner,self__.vec__62469,self__.project,self__.tag,meta62471__$1));
});})(vec__62469,project,tag))
;

biomarket.skills.t_biomarket$skills62470.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__62469,project,tag){
return (function (_62472){
var self__ = this;
var _62472__$1 = this;
return self__.meta62471;
});})(vec__62469,project,tag))
;

biomarket.skills.t_biomarket$skills62470.prototype.om$core$IRender$ = true;

biomarket.skills.t_biomarket$skills62470.prototype.om$core$IRender$render$arity$1 = ((function (vec__62469,project,tag){
return (function (this__28885__auto__){
var self__ = this;
var this__28885__auto____$1 = this;
return om.core.build.call(null,biomarket.components.bottom_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"project","project",1124394579),self__.project,new cljs.core.Keyword(null,"view-tag","view-tag",-1197278670),self__.tag,new cljs.core.Keyword(null,"text","text",-1790561697),"Matched skills"], null));
});})(vec__62469,project,tag))
;

biomarket.skills.t_biomarket$skills62470.getBasis = ((function (vec__62469,project,tag){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"skills-bbutton","skills-bbutton",1882694152,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__62464","p__62464",-619825891,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__62469","vec__62469",813944041,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta62471","meta62471",-1240939829,null)], null);
});})(vec__62469,project,tag))
;

biomarket.skills.t_biomarket$skills62470.cljs$lang$type = true;

biomarket.skills.t_biomarket$skills62470.cljs$lang$ctorStr = "biomarket.skills/t_biomarket$skills62470";

biomarket.skills.t_biomarket$skills62470.cljs$lang$ctorPrWriter = ((function (vec__62469,project,tag){
return (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.skills/t_biomarket$skills62470");
});})(vec__62469,project,tag))
;

biomarket.skills.__GT_t_biomarket$skills62470 = ((function (vec__62469,project,tag){
return (function biomarket$skills$skills_bbutton_$___GT_t_biomarket$skills62470(skills_bbutton__$1,p__62464__$1,owner__$1,vec__62469__$1,project__$1,tag__$1,meta62471){
return (new biomarket.skills.t_biomarket$skills62470(skills_bbutton__$1,p__62464__$1,owner__$1,vec__62469__$1,project__$1,tag__$1,meta62471));
});})(vec__62469,project,tag))
;

}

return (new biomarket.skills.t_biomarket$skills62470(biomarket$skills$skills_bbutton,p__62464,owner,vec__62469,project,tag,null));
});
biomarket.skills.skill_tags = (function biomarket$skills$skill_tags(p__62474,owner){
var vec__62479 = p__62474;
var project = cljs.core.nth.call(null,vec__62479,(0),null);
var selected = cljs.core.nth.call(null,vec__62479,(1),null);
var tag = cljs.core.nth.call(null,vec__62479,(2),null);
var inline = cljs.core.nth.call(null,vec__62479,(3),null);
if(typeof biomarket.skills.t_biomarket$skills62480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.skills.t_biomarket$skills62480 = (function (skill_tags,p__62474,owner,vec__62479,project,selected,tag,inline,meta62481){
this.skill_tags = skill_tags;
this.p__62474 = p__62474;
this.owner = owner;
this.vec__62479 = vec__62479;
this.project = project;
this.selected = selected;
this.tag = tag;
this.inline = inline;
this.meta62481 = meta62481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.skills.t_biomarket$skills62480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__62479,project,selected,tag,inline){
return (function (_62482,meta62481__$1){
var self__ = this;
var _62482__$1 = this;
return (new biomarket.skills.t_biomarket$skills62480(self__.skill_tags,self__.p__62474,self__.owner,self__.vec__62479,self__.project,self__.selected,self__.tag,self__.inline,meta62481__$1));
});})(vec__62479,project,selected,tag,inline))
;

biomarket.skills.t_biomarket$skills62480.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__62479,project,selected,tag,inline){
return (function (_62482){
var self__ = this;
var _62482__$1 = this;
return self__.meta62481;
});})(vec__62479,project,selected,tag,inline))
;

biomarket.skills.t_biomarket$skills62480.prototype.om$core$IRender$ = true;

biomarket.skills.t_biomarket$skills62480.prototype.om$core$IRender$render$arity$1 = ((function (vec__62479,project,selected,tag,inline){
return (function (this__28885__auto__){
var self__ = this;
var this__28885__auto____$1 = this;
return cljs.core.apply.call(null,(cljs.core.truth_(self__.inline)?om.dom.span:om.dom.div),{"className": "tags"},cljs.core.map.call(null,((function (this__28885__auto____$1,vec__62479,project,selected,tag,inline){
return (function (p1__62473_SHARP_){
return React.DOM.span({"style": {"padding-right": "10px"}},React.DOM.a({"className": (cljs.core.truth_(self__.selected.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__62473_SHARP_)))?"color2":"color1"), "onClick": (cljs.core.truth_(self__.tag)?((function (this__28885__auto____$1,vec__62479,project,selected,tag,inline){
return (function (_){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.tag,p1__62473_SHARP_);
});})(this__28885__auto____$1,vec__62479,project,selected,tag,inline))
:null), "style": {"cursor": "pointer"}},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__62473_SHARP_)));
});})(this__28885__auto____$1,vec__62479,project,selected,tag,inline))
,new cljs.core.Keyword(null,"skills","skills",958701426).cljs$core$IFn$_invoke$arity$1(self__.project)));
});})(vec__62479,project,selected,tag,inline))
;

biomarket.skills.t_biomarket$skills62480.getBasis = ((function (vec__62479,project,selected,tag,inline){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"skill-tags","skill-tags",-484804755,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"inline","inline",-1254551547,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__62474","p__62474",1428001127,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__62479","vec__62479",-1693538917,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"inline","inline",-1254551547,null),new cljs.core.Symbol(null,"meta62481","meta62481",-144972480,null)], null);
});})(vec__62479,project,selected,tag,inline))
;

biomarket.skills.t_biomarket$skills62480.cljs$lang$type = true;

biomarket.skills.t_biomarket$skills62480.cljs$lang$ctorStr = "biomarket.skills/t_biomarket$skills62480";

biomarket.skills.t_biomarket$skills62480.cljs$lang$ctorPrWriter = ((function (vec__62479,project,selected,tag,inline){
return (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.skills/t_biomarket$skills62480");
});})(vec__62479,project,selected,tag,inline))
;

biomarket.skills.__GT_t_biomarket$skills62480 = ((function (vec__62479,project,selected,tag,inline){
return (function biomarket$skills$skill_tags_$___GT_t_biomarket$skills62480(skill_tags__$1,p__62474__$1,owner__$1,vec__62479__$1,project__$1,selected__$1,tag__$1,inline__$1,meta62481){
return (new biomarket.skills.t_biomarket$skills62480(skill_tags__$1,p__62474__$1,owner__$1,vec__62479__$1,project__$1,selected__$1,tag__$1,inline__$1,meta62481));
});})(vec__62479,project,selected,tag,inline))
;

}

return (new biomarket.skills.t_biomarket$skills62480(biomarket$skills$skill_tags,p__62474,owner,vec__62479,project,selected,tag,inline,null));
});

//# sourceMappingURL=skills.js.map