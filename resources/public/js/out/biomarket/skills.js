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
biomarket.skills.skills_bbutton = (function biomarket$skills$skills_bbutton(bstate,owner){
if(typeof biomarket.skills.t_biomarket$skills157608 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.skills.t_biomarket$skills157608 = (function (skills_bbutton,bstate,owner,meta157609){
this.skills_bbutton = skills_bbutton;
this.bstate = bstate;
this.owner = owner;
this.meta157609 = meta157609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.skills.t_biomarket$skills157608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_157610,meta157609__$1){
var self__ = this;
var _157610__$1 = this;
return (new biomarket.skills.t_biomarket$skills157608(self__.skills_bbutton,self__.bstate,self__.owner,meta157609__$1));
});

biomarket.skills.t_biomarket$skills157608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_157610){
var self__ = this;
var _157610__$1 = this;
return self__.meta157609;
});

biomarket.skills.t_biomarket$skills157608.prototype.om$core$IRender$ = true;

biomarket.skills.t_biomarket$skills157608.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.a(self__.bstate,"Matched skills");
});

biomarket.skills.t_biomarket$skills157608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"skills-bbutton","skills-bbutton",1882694152,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bstate","bstate",911061612,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"bstate","bstate",911061612,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta157609","meta157609",82947158,null)], null);
});

biomarket.skills.t_biomarket$skills157608.cljs$lang$type = true;

biomarket.skills.t_biomarket$skills157608.cljs$lang$ctorStr = "biomarket.skills/t_biomarket$skills157608";

biomarket.skills.t_biomarket$skills157608.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.skills/t_biomarket$skills157608");
});

biomarket.skills.__GT_t_biomarket$skills157608 = (function biomarket$skills$skills_bbutton_$___GT_t_biomarket$skills157608(skills_bbutton__$1,bstate__$1,owner__$1,meta157609){
return (new biomarket.skills.t_biomarket$skills157608(skills_bbutton__$1,bstate__$1,owner__$1,meta157609));
});

}

return (new biomarket.skills.t_biomarket$skills157608(biomarket$skills$skills_bbutton,bstate,owner,null));
});
biomarket.skills.skill_tags = (function biomarket$skills$skill_tags(p__157612,owner){
var vec__157617 = p__157612;
var project = cljs.core.nth.call(null,vec__157617,(0),null);
var selected = cljs.core.nth.call(null,vec__157617,(1),null);
var tag = cljs.core.nth.call(null,vec__157617,(2),null);
var inline = cljs.core.nth.call(null,vec__157617,(3),null);
if(typeof biomarket.skills.t_biomarket$skills157618 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.skills.t_biomarket$skills157618 = (function (skill_tags,p__157612,owner,vec__157617,project,selected,tag,inline,meta157619){
this.skill_tags = skill_tags;
this.p__157612 = p__157612;
this.owner = owner;
this.vec__157617 = vec__157617;
this.project = project;
this.selected = selected;
this.tag = tag;
this.inline = inline;
this.meta157619 = meta157619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.skills.t_biomarket$skills157618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__157617,project,selected,tag,inline){
return (function (_157620,meta157619__$1){
var self__ = this;
var _157620__$1 = this;
return (new biomarket.skills.t_biomarket$skills157618(self__.skill_tags,self__.p__157612,self__.owner,self__.vec__157617,self__.project,self__.selected,self__.tag,self__.inline,meta157619__$1));
});})(vec__157617,project,selected,tag,inline))
;

biomarket.skills.t_biomarket$skills157618.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__157617,project,selected,tag,inline){
return (function (_157620){
var self__ = this;
var _157620__$1 = this;
return self__.meta157619;
});})(vec__157617,project,selected,tag,inline))
;

biomarket.skills.t_biomarket$skills157618.prototype.om$core$IRender$ = true;

biomarket.skills.t_biomarket$skills157618.prototype.om$core$IRender$render$arity$1 = ((function (vec__157617,project,selected,tag,inline){
return (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return cljs.core.apply.call(null,(cljs.core.truth_(self__.inline)?om.dom.span:om.dom.div),{"className": "tags"},cljs.core.map.call(null,((function (this__36785__auto____$1,vec__157617,project,selected,tag,inline){
return (function (p1__157611_SHARP_){
return React.DOM.span({"style": {"padding-right": "10px"}},React.DOM.a({"className": (cljs.core.truth_(self__.selected.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__157611_SHARP_)))?"color2":"color1"), "onClick": (cljs.core.truth_(self__.tag)?((function (this__36785__auto____$1,vec__157617,project,selected,tag,inline){
return (function (_){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.tag,p1__157611_SHARP_);
});})(this__36785__auto____$1,vec__157617,project,selected,tag,inline))
:null), "style": {"cursor": "pointer"}},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__157611_SHARP_)));
});})(this__36785__auto____$1,vec__157617,project,selected,tag,inline))
,new cljs.core.Keyword(null,"skills","skills",958701426).cljs$core$IFn$_invoke$arity$1(self__.project)));
});})(vec__157617,project,selected,tag,inline))
;

biomarket.skills.t_biomarket$skills157618.getBasis = ((function (vec__157617,project,selected,tag,inline){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"skill-tags","skill-tags",-484804755,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"inline","inline",-1254551547,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__157612","p__157612",1710131988,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__157617","vec__157617",-217596330,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"inline","inline",-1254551547,null),new cljs.core.Symbol(null,"meta157619","meta157619",1254953371,null)], null);
});})(vec__157617,project,selected,tag,inline))
;

biomarket.skills.t_biomarket$skills157618.cljs$lang$type = true;

biomarket.skills.t_biomarket$skills157618.cljs$lang$ctorStr = "biomarket.skills/t_biomarket$skills157618";

biomarket.skills.t_biomarket$skills157618.cljs$lang$ctorPrWriter = ((function (vec__157617,project,selected,tag,inline){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.skills/t_biomarket$skills157618");
});})(vec__157617,project,selected,tag,inline))
;

biomarket.skills.__GT_t_biomarket$skills157618 = ((function (vec__157617,project,selected,tag,inline){
return (function biomarket$skills$skill_tags_$___GT_t_biomarket$skills157618(skill_tags__$1,p__157612__$1,owner__$1,vec__157617__$1,project__$1,selected__$1,tag__$1,inline__$1,meta157619){
return (new biomarket.skills.t_biomarket$skills157618(skill_tags__$1,p__157612__$1,owner__$1,vec__157617__$1,project__$1,selected__$1,tag__$1,inline__$1,meta157619));
});})(vec__157617,project,selected,tag,inline))
;

}

return (new biomarket.skills.t_biomarket$skills157618(biomarket$skills$skill_tags,p__157612,owner,vec__157617,project,selected,tag,inline,null));
});

//# sourceMappingURL=skills.js.map