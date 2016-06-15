// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.profile');
goog.require('cljs.core');
goog.require('biomarket.utilities');
goog.require('taoensso.sente');
goog.require('ajax.core');
goog.require('om.dom');
goog.require('biomarket.server');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('biomarket.skills');
goog.require('om.core');
goog.require('clojure.string');
biomarket.profile.edit_icon = (function biomarket$profile$edit_icon(var_args){
var args43197 = [];
var len__26938__auto___43200 = arguments.length;
var i__26939__auto___43201 = (0);
while(true){
if((i__26939__auto___43201 < len__26938__auto___43200)){
args43197.push((arguments[i__26939__auto___43201]));

var G__43202 = (i__26939__auto___43201 + (1));
i__26939__auto___43201 = G__43202;
continue;
} else {
}
break;
}

var G__43199 = args43197.length;
switch (G__43199) {
case 1:
return biomarket.profile.edit_icon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return biomarket.profile.edit_icon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43197.length)].join('')));

}
});

biomarket.profile.edit_icon.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return biomarket.profile.edit_icon.call(null,owner,null);
});

biomarket.profile.edit_icon.cljs$core$IFn$_invoke$arity$2 = (function (owner,size){
return React.DOM.i({"className": (cljs.core.truth_(size)?[cljs.core.str("fa fa-pencil-square-o "),cljs.core.str(size)].join(''):"fa fa-pencil-square-o"), "onClick": (function (){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",1365491601),true);
}), "style": {"padding-left": "10px"}});
});

biomarket.profile.edit_icon.cljs$lang$maxFixedArity = 2;
biomarket.profile.show_inputs = (function biomarket$profile$show_inputs(owner,inputs,func,ut){
var invalid = cljs.core.some.call(null,cljs.core.identity,cljs.core.map.call(null,new cljs.core.Keyword(null,"invalid","invalid",412869516),cljs.core.vals.call(null,inputs)));
var btn = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,invalid))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (invalid){
return (function (){
return func.call(null,owner);
});})(invalid))
], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),"disabled"], null)));
return React.DOM.div({"className": ((cljs.core.not.call(null,invalid))?"form-group has-success":"form-group has-error")},cljs.core.apply.call(null,om.dom.div,null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (invalid,btn){
return (function (p__43209){
var vec__43210 = p__43209;
var k = cljs.core.nth.call(null,vec__43210,(0),null);
var element = cljs.core.nth.call(null,vec__43210,(1),null);
return om.dom.input.call(null,{"className": "form-control", "value": new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element), "placeholder": new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(element), "onKeyDown": biomarket.utilities.capture_return.call(null,((function (vec__43210,k,element,invalid,btn){
return (function (_){
return func.call(null,owner);
});})(vec__43210,k,element,invalid,btn))
), "onChange": ((function (vec__43210,k,element,invalid,btn){
return (function (p1__43204_SHARP_){
return biomarket.utilities.on_change_function.call(null,owner,ut,k,element,p1__43204_SHARP_);
});})(vec__43210,k,element,invalid,btn))
});
});})(invalid,btn))
,inputs),(function (){var x__26702__auto__ = React.DOM.a(btn,"Done");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26702__auto__);
})())),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (invalid,btn){
return (function (p__43211){
var vec__43212 = p__43211;
var k = cljs.core.nth.call(null,vec__43212,(0),null);
var e = cljs.core.nth.call(null,vec__43212,(1),null);
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(e))){
return React.DOM.div(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(e)));
} else {
return null;
}
});})(invalid,btn))
,inputs)));
});
biomarket.profile.submit = (function biomarket$profile$submit(owner,data){
return biomarket.server.save_data.call(null,data,(function (x){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(x))){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",1365491601),false);
} else {
return window.location = "/error";
}
}));
});
biomarket.profile.simple_input = (function biomarket$profile$simple_input(p__43213,owner){
var vec__43221 = p__43213;
var ut = cljs.core.nth.call(null,vec__43221,(0),null);
var inputs = cljs.core.nth.call(null,vec__43221,(1),null);
var etext = cljs.core.nth.call(null,vec__43221,(2),null);
var sfunc = cljs.core.nth.call(null,vec__43221,(3),null);
if(typeof biomarket.profile.t_biomarket$profile43222 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.profile.t_biomarket$profile43222 = (function (simple_input,p__43213,owner,vec__43221,ut,inputs,etext,sfunc,meta43223){
this.simple_input = simple_input;
this.p__43213 = p__43213;
this.owner = owner;
this.vec__43221 = vec__43221;
this.ut = ut;
this.inputs = inputs;
this.etext = etext;
this.sfunc = sfunc;
this.meta43223 = meta43223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile43222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__43221,ut,inputs,etext,sfunc){
return (function (_43224,meta43223__$1){
var self__ = this;
var _43224__$1 = this;
return (new biomarket.profile.t_biomarket$profile43222(self__.simple_input,self__.p__43213,self__.owner,self__.vec__43221,self__.ut,self__.inputs,self__.etext,self__.sfunc,meta43223__$1));
});})(vec__43221,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile43222.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__43221,ut,inputs,etext,sfunc){
return (function (_43224){
var self__ = this;
var _43224__$1 = this;
return self__.meta43223;
});})(vec__43221,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile43222.prototype.om$core$IInitState$ = true;

biomarket.profile.t_biomarket$profile43222.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__43221,ut,inputs,etext,sfunc){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inputs","inputs",865803858),self__.inputs,new cljs.core.Keyword(null,"editing","editing",1365491601),false], null);
});})(vec__43221,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile43222.prototype.om$core$IWillMount$ = true;

biomarket.profile.t_biomarket$profile43222.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (vec__43221,ut,inputs,etext,sfunc){
return (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,self__.ut);
});})(vec__43221,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile43222.prototype.om$core$IWillUnmount$ = true;

biomarket.profile.t_biomarket$profile43222.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (vec__43221,ut,inputs,etext,sfunc){
return (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,self__.ut);
});})(vec__43221,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile43222.prototype.om$core$IRenderState$ = true;

biomarket.profile.t_biomarket$profile43222.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__43221,ut,inputs,etext,sfunc){
return (function (_,p__43225){
var self__ = this;
var map__43226 = p__43225;
var map__43226__$1 = ((((!((map__43226 == null)))?((((map__43226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43226):map__43226);
var inputs__$1 = cljs.core.get.call(null,map__43226__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var editing = cljs.core.get.call(null,map__43226__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var ___$1 = this;
var k = cljs.core.first.call(null,cljs.core.keys.call(null,inputs__$1));
var v = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(k.call(null,inputs__$1));
return React.DOM.div(null,(cljs.core.truth_(editing)?React.DOM.form({"className": "form-inline"},biomarket.profile.show_inputs.call(null,self__.owner,inputs__$1,self__.sfunc,self__.ut)):((clojure.string.blank_QMARK_.call(null,v))?React.DOM.div(null,self__.etext,biomarket.profile.edit_icon.call(null,self__.owner)):React.DOM.div(null,v,biomarket.profile.edit_icon.call(null,self__.owner)))));
});})(vec__43221,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile43222.getBasis = ((function (vec__43221,ut,inputs,etext,sfunc){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"simple-input","simple-input",-1558748414,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ut","ut",921115969,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"etext","etext",48926173,null),new cljs.core.Symbol(null,"sfunc","sfunc",-1753282753,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__43213","p__43213",-1371117849,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__43221","vec__43221",-1388492818,null),new cljs.core.Symbol(null,"ut","ut",921115969,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"etext","etext",48926173,null),new cljs.core.Symbol(null,"sfunc","sfunc",-1753282753,null),new cljs.core.Symbol(null,"meta43223","meta43223",151855553,null)], null);
});})(vec__43221,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile43222.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile43222.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile43222";

biomarket.profile.t_biomarket$profile43222.cljs$lang$ctorPrWriter = ((function (vec__43221,ut,inputs,etext,sfunc){
return (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.profile/t_biomarket$profile43222");
});})(vec__43221,ut,inputs,etext,sfunc))
;

biomarket.profile.__GT_t_biomarket$profile43222 = ((function (vec__43221,ut,inputs,etext,sfunc){
return (function biomarket$profile$simple_input_$___GT_t_biomarket$profile43222(simple_input__$1,p__43213__$1,owner__$1,vec__43221__$1,ut__$1,inputs__$1,etext__$1,sfunc__$1,meta43223){
return (new biomarket.profile.t_biomarket$profile43222(simple_input__$1,p__43213__$1,owner__$1,vec__43221__$1,ut__$1,inputs__$1,etext__$1,sfunc__$1,meta43223));
});})(vec__43221,ut,inputs,etext,sfunc))
;

}

return (new biomarket.profile.t_biomarket$profile43222(biomarket$profile$simple_input,p__43213,owner,vec__43221,ut,inputs,etext,sfunc,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.profile.text_area = (function biomarket$profile$text_area(p__43229,owner){
var vec__43238 = p__43229;
var ut = cljs.core.nth.call(null,vec__43238,(0),null);
var inputs = cljs.core.nth.call(null,vec__43238,(1),null);
var etext = cljs.core.nth.call(null,vec__43238,(2),null);
var sfunc = cljs.core.nth.call(null,vec__43238,(3),null);
if(typeof biomarket.profile.t_biomarket$profile43239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.profile.t_biomarket$profile43239 = (function (text_area,p__43229,owner,vec__43238,ut,inputs,etext,sfunc,meta43240){
this.text_area = text_area;
this.p__43229 = p__43229;
this.owner = owner;
this.vec__43238 = vec__43238;
this.ut = ut;
this.inputs = inputs;
this.etext = etext;
this.sfunc = sfunc;
this.meta43240 = meta43240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile43239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__43238,ut,inputs,etext,sfunc){
return (function (_43241,meta43240__$1){
var self__ = this;
var _43241__$1 = this;
return (new biomarket.profile.t_biomarket$profile43239(self__.text_area,self__.p__43229,self__.owner,self__.vec__43238,self__.ut,self__.inputs,self__.etext,self__.sfunc,meta43240__$1));
});})(vec__43238,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile43239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__43238,ut,inputs,etext,sfunc){
return (function (_43241){
var self__ = this;
var _43241__$1 = this;
return self__.meta43240;
});})(vec__43238,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile43239.prototype.om$core$IInitState$ = true;

biomarket.profile.t_biomarket$profile43239.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__43238,ut,inputs,etext,sfunc){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editing","editing",1365491601),false,new cljs.core.Keyword(null,"inputs","inputs",865803858),self__.inputs], null);
});})(vec__43238,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile43239.prototype.om$core$IWillMount$ = true;

biomarket.profile.t_biomarket$profile43239.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (vec__43238,ut,inputs,etext,sfunc){
return (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,self__.ut);
});})(vec__43238,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile43239.prototype.om$core$IWillUnmount$ = true;

biomarket.profile.t_biomarket$profile43239.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (vec__43238,ut,inputs,etext,sfunc){
return (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,self__.ut);
});})(vec__43238,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile43239.prototype.om$core$IRenderState$ = true;

biomarket.profile.t_biomarket$profile43239.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__43238,ut,inputs,etext,sfunc){
return (function (_,p__43242){
var self__ = this;
var map__43243 = p__43242;
var map__43243__$1 = ((((!((map__43243 == null)))?((((map__43243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43243):map__43243);
var inputs__$1 = cljs.core.get.call(null,map__43243__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var editing = cljs.core.get.call(null,map__43243__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var ___$1 = this;
var vec__43245 = cljs.core.first.call(null,inputs__$1);
var k = cljs.core.nth.call(null,vec__43245,(0),null);
var element = cljs.core.nth.call(null,vec__43245,(1),null);
return React.DOM.div(null,(cljs.core.truth_(editing)?React.DOM.div(null,om.dom.textarea.call(null,{"placeholder": new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(element), "value": new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element), "rows": "10", "style": {"width": "100%", "margin-top": "10px"}, "onChange": ((function (vec__43245,k,element,___$1,map__43243,map__43243__$1,inputs__$1,editing,vec__43238,ut,inputs,etext,sfunc){
return (function (p1__43228_SHARP_){
return biomarket.utilities.on_change_function.call(null,self__.owner,self__.ut,k,element,p1__43228_SHARP_);
});})(vec__43245,k,element,___$1,map__43243,map__43243__$1,inputs__$1,editing,vec__43238,ut,inputs,etext,sfunc))
}),React.DOM.a({"className": "btn btn-primary", "onClick": ((function (vec__43245,k,element,___$1,map__43243,map__43243__$1,inputs__$1,editing,vec__43238,ut,inputs,etext,sfunc){
return (function (){
return self__.sfunc.call(null,self__.owner);
});})(vec__43245,k,element,___$1,map__43243,map__43243__$1,inputs__$1,editing,vec__43238,ut,inputs,etext,sfunc))
},"Save")):((clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element)))?React.DOM.div({"style": {"padding-top": "10px"}},React.DOM.a({"onClick": ((function (vec__43245,k,element,___$1,map__43243,map__43243__$1,inputs__$1,editing,vec__43238,ut,inputs,etext,sfunc){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601),true);
});})(vec__43245,k,element,___$1,map__43243,map__43243__$1,inputs__$1,editing,vec__43238,ut,inputs,etext,sfunc))
, "style": {"padding-top": "10px"}},self__.etext)):React.DOM.div({"style": {"padding-top": "10px"}},React.DOM.span({"style": {"white-space": "pre-line"}},new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element)),biomarket.profile.edit_icon.call(null,self__.owner)))));
});})(vec__43238,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile43239.getBasis = ((function (vec__43238,ut,inputs,etext,sfunc){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"text-area","text-area",159372872,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ut","ut",921115969,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"etext","etext",48926173,null),new cljs.core.Symbol(null,"sfunc","sfunc",-1753282753,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__43229","p__43229",433642720,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__43238","vec__43238",-1009171366,null),new cljs.core.Symbol(null,"ut","ut",921115969,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"etext","etext",48926173,null),new cljs.core.Symbol(null,"sfunc","sfunc",-1753282753,null),new cljs.core.Symbol(null,"meta43240","meta43240",2067892761,null)], null);
});})(vec__43238,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile43239.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile43239.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile43239";

biomarket.profile.t_biomarket$profile43239.cljs$lang$ctorPrWriter = ((function (vec__43238,ut,inputs,etext,sfunc){
return (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.profile/t_biomarket$profile43239");
});})(vec__43238,ut,inputs,etext,sfunc))
;

biomarket.profile.__GT_t_biomarket$profile43239 = ((function (vec__43238,ut,inputs,etext,sfunc){
return (function biomarket$profile$text_area_$___GT_t_biomarket$profile43239(text_area__$1,p__43229__$1,owner__$1,vec__43238__$1,ut__$1,inputs__$1,etext__$1,sfunc__$1,meta43240){
return (new biomarket.profile.t_biomarket$profile43239(text_area__$1,p__43229__$1,owner__$1,vec__43238__$1,ut__$1,inputs__$1,etext__$1,sfunc__$1,meta43240));
});})(vec__43238,ut,inputs,etext,sfunc))
;

}

return (new biomarket.profile.t_biomarket$profile43239(biomarket$profile$text_area,p__43229,owner,vec__43238,ut,inputs,etext,sfunc,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.profile.submit_heading = (function biomarket$profile$submit_heading(owner){
var i = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858));
return biomarket.profile.submit.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name-update","name-update",1373496096),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"first","first",-644103046).cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"last","last",1105735132),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"last","last",1105735132).cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"middle","middle",-701029031).cljs$core$IFn$_invoke$arity$1(i))], null)], null));
});
biomarket.profile.heading = (function biomarket$profile$heading(user,owner){
if(typeof biomarket.profile.t_biomarket$profile43254 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.profile.t_biomarket$profile43254 = (function (heading,user,owner,meta43255){
this.heading = heading;
this.user = user;
this.owner = owner;
this.meta43255 = meta43255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile43254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43256,meta43255__$1){
var self__ = this;
var _43256__$1 = this;
return (new biomarket.profile.t_biomarket$profile43254(self__.heading,self__.user,self__.owner,meta43255__$1));
});

biomarket.profile.t_biomarket$profile43254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43256){
var self__ = this;
var _43256__$1 = this;
return self__.meta43255;
});

biomarket.profile.t_biomarket$profile43254.prototype.om$core$IInitState$ = true;

biomarket.profile.t_biomarket$profile43254.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editing","editing",1365491601),false,new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"first","first",-644103046).cljs$core$IFn$_invoke$arity$1(self__.user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"First name",new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__43246_SHARP_){
return !(clojure.string.blank_QMARK_.call(null,p1__43246_SHARP_));
});})(___$1))
,"First name cannot be blank"], null)], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"middle","middle",-701029031).cljs$core$IFn$_invoke$arity$1(self__.user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Middle name"], null),new cljs.core.Keyword(null,"last","last",1105735132),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"last","last",1105735132).cljs$core$IFn$_invoke$arity$1(self__.user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Last name",new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__43247_SHARP_){
return !(clojure.string.blank_QMARK_.call(null,p1__43247_SHARP_));
});})(___$1))
,"Last name cannot be blank"], null)], null)], null)], null)], null);
});

biomarket.profile.t_biomarket$profile43254.prototype.om$core$IWillMount$ = true;

biomarket.profile.t_biomarket$profile43254.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.profile","heading-update","biomarket.profile/heading-update",-935652994));
});

biomarket.profile.t_biomarket$profile43254.prototype.om$core$IWillUnmount$ = true;

biomarket.profile.t_biomarket$profile43254.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.profile","heading-update","biomarket.profile/heading-update",-935652994));
});

biomarket.profile.t_biomarket$profile43254.prototype.om$core$IRenderState$ = true;

biomarket.profile.t_biomarket$profile43254.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__43257){
var self__ = this;
var map__43258 = p__43257;
var map__43258__$1 = ((((!((map__43258 == null)))?((((map__43258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43258):map__43258);
var editing = cljs.core.get.call(null,map__43258__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var inputs = cljs.core.get.call(null,map__43258__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var ___$1 = this;
var first = new cljs.core.Keyword(null,"first","first",-644103046).cljs$core$IFn$_invoke$arity$1(inputs);
var last = new cljs.core.Keyword(null,"last","last",1105735132).cljs$core$IFn$_invoke$arity$1(inputs);
var middle = new cljs.core.Keyword(null,"middle","middle",-701029031).cljs$core$IFn$_invoke$arity$1(inputs);
var sfunc = ((function (first,last,middle,___$1,map__43258,map__43258__$1,editing,inputs){
return (function (o){
return null;
});})(first,last,middle,___$1,map__43258,map__43258__$1,editing,inputs))
;
if(cljs.core.not.call(null,editing)){
return React.DOM.div({"className": "h2", "style": {"padding-bottom": "20px"}},[cljs.core.str(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(first)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(middle)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(last))].join(''),biomarket.profile.edit_icon.call(null,self__.owner,"fa-1x"));
} else {
return React.DOM.div({"className": "form-inline", "style": {"padding-bottom": "40px"}},biomarket.profile.show_inputs.call(null,self__.owner,inputs,biomarket.profile.submit_heading,new cljs.core.Keyword("biomarket.profile","heading-update","biomarket.profile/heading-update",-935652994)));
}
});

biomarket.profile.t_biomarket$profile43254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"heading","heading",328359654,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43255","meta43255",816530766,null)], null);
});

biomarket.profile.t_biomarket$profile43254.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile43254.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile43254";

biomarket.profile.t_biomarket$profile43254.cljs$lang$ctorPrWriter = (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.profile/t_biomarket$profile43254");
});

biomarket.profile.__GT_t_biomarket$profile43254 = (function biomarket$profile$heading_$___GT_t_biomarket$profile43254(heading__$1,user__$1,owner__$1,meta43255){
return (new biomarket.profile.t_biomarket$profile43254(heading__$1,user__$1,owner__$1,meta43255));
});

}

return (new biomarket.profile.t_biomarket$profile43254(biomarket$profile$heading,user,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.profile.submit_address = (function biomarket$profile$submit_address(owner){
var i = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858));
return biomarket.profile.submit.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"address-update","address-update",-144111410),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address1","address1",1491072176),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address1","address1",1491072176).cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"address2","address2",1133017811),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address2","address2",1133017811).cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"address3","address3",436745703),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address3","address3",436745703).cljs$core$IFn$_invoke$arity$1(i))], null)], null));
});
biomarket.profile.address = (function biomarket$profile$address(user,owner){
if(typeof biomarket.profile.t_biomarket$profile43266 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.profile.t_biomarket$profile43266 = (function (address,user,owner,meta43267){
this.address = address;
this.user = user;
this.owner = owner;
this.meta43267 = meta43267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile43266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43268,meta43267__$1){
var self__ = this;
var _43268__$1 = this;
return (new biomarket.profile.t_biomarket$profile43266(self__.address,self__.user,self__.owner,meta43267__$1));
});

biomarket.profile.t_biomarket$profile43266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43268){
var self__ = this;
var _43268__$1 = this;
return self__.meta43267;
});

biomarket.profile.t_biomarket$profile43266.prototype.om$core$IInitState$ = true;

biomarket.profile.t_biomarket$profile43266.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"editing","editing",1365491601),false,new cljs.core.Keyword(null,"user","user",1532431356),self__.user,new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address1","address1",1491072176),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"address1","address1",1491072176).cljs$core$IFn$_invoke$arity$1(self__.user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Address line 1"], null),new cljs.core.Keyword(null,"address2","address2",1133017811),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"address2","address2",1133017811).cljs$core$IFn$_invoke$arity$1(self__.user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Address line 2"], null),new cljs.core.Keyword(null,"address3","address3",436745703),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"address3","address3",436745703).cljs$core$IFn$_invoke$arity$1(self__.user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Address line 3"], null)], null)], null);
});

biomarket.profile.t_biomarket$profile43266.prototype.om$core$IWillMount$ = true;

biomarket.profile.t_biomarket$profile43266.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.profile","address-update","biomarket.profile/address-update",-1338916403));
});

biomarket.profile.t_biomarket$profile43266.prototype.om$core$IWillUnmount$ = true;

biomarket.profile.t_biomarket$profile43266.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.profile","address-update","biomarket.profile/address-update",-1338916403));
});

biomarket.profile.t_biomarket$profile43266.prototype.om$core$IRenderState$ = true;

biomarket.profile.t_biomarket$profile43266.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__43269){
var self__ = this;
var map__43270 = p__43269;
var map__43270__$1 = ((((!((map__43270 == null)))?((((map__43270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43270):map__43270);
var editing = cljs.core.get.call(null,map__43270__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var inputs = cljs.core.get.call(null,map__43270__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var ___$1 = this;
var address1 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address1","address1",1491072176).cljs$core$IFn$_invoke$arity$1(inputs));
var address2 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address2","address2",1133017811).cljs$core$IFn$_invoke$arity$1(inputs));
var address3 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address3","address3",436745703).cljs$core$IFn$_invoke$arity$1(inputs));
return React.DOM.div(null,(cljs.core.truth_(editing)?React.DOM.form({"className": "form"},biomarket.profile.show_inputs.call(null,self__.owner,inputs,biomarket.profile.submit_address,new cljs.core.Keyword("biomarket.profile","address-update","biomarket.profile/address-update",-1338916403))):((cljs.core.every_QMARK_.call(null,clojure.string.blank_QMARK_,(function (){var x__26702__auto__ = address1;
return cljs.core._conj.call(null,(function (){var x__26702__auto____$1 = address2;
return cljs.core._conj.call(null,(function (){var x__26702__auto____$2 = address3;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26702__auto____$2);
})(),x__26702__auto____$1);
})(),x__26702__auto__);
})()))?React.DOM.div(null,"No address information provided.",biomarket.profile.edit_icon.call(null,self__.owner)):React.DOM.div(null,React.DOM.div(null,address1,biomarket.profile.edit_icon.call(null,self__.owner)),React.DOM.div(null,address2),React.DOM.div(null,address3)))));
});

biomarket.profile.t_biomarket$profile43266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"address","address",-2094936343,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43267","meta43267",-2055007899,null)], null);
});

biomarket.profile.t_biomarket$profile43266.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile43266.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile43266";

biomarket.profile.t_biomarket$profile43266.cljs$lang$ctorPrWriter = (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.profile/t_biomarket$profile43266");
});

biomarket.profile.__GT_t_biomarket$profile43266 = (function biomarket$profile$address_$___GT_t_biomarket$profile43266(address__$1,user__$1,owner__$1,meta43267){
return (new biomarket.profile.t_biomarket$profile43266(address__$1,user__$1,owner__$1,meta43267));
});

}

return (new biomarket.profile.t_biomarket$profile43266(biomarket$profile$address,user,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.profile.city = (function biomarket$profile$city(user){
var sfunc = (function (owner){
var i = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858));
return biomarket.profile.submit.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"city-update","city-update",1489660098),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"city","city",-393302614),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(i))], null)], null));
});
var inputs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"city","city",-393302614),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"City"], null)], null);
return om.core.build.call(null,biomarket.profile.simple_input,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("biomarket.profile","city-update","biomarket.profile/city-update",-1852856383),inputs,"No city information provided.",sfunc], null));
});
biomarket.profile.country = (function biomarket$profile$country(user){
var sfunc = (function (owner){
var i = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858));
return biomarket.profile.submit.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"country-update","country-update",-1866210796),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(i))], null)], null));
});
var inputs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Country"], null)], null);
return om.core.build.call(null,biomarket.profile.simple_input,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("biomarket.profile","country-update","biomarket.profile/country-update",-662756591),inputs,"No country information provided.",sfunc], null));
});
biomarket.profile.postcode = (function biomarket$profile$postcode(user){
var sfunc = (function (owner){
var i = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858));
return biomarket.profile.submit.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"postcode-update","postcode-update",198169015),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"postcode","postcode",-1780819892),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"postcode","postcode",-1780819892).cljs$core$IFn$_invoke$arity$1(i))], null)], null));
});
var inputs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"postcode","postcode",-1780819892),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"postcode","postcode",-1780819892).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Postcode"], null)], null);
return om.core.build.call(null,biomarket.profile.simple_input,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("biomarket.profile","postcode-update","biomarket.profile/postcode-update",-795963720),inputs,"No postcode information provided.",sfunc], null));
});
biomarket.profile.phone = (function biomarket$profile$phone(user){
var sfunc = (function (owner){
var i = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858));
return biomarket.profile.submit.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phone-update","phone-update",1251994776),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phone","phone",-763596057),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"phone","phone",-763596057).cljs$core$IFn$_invoke$arity$1(i))], null)], null));
});
var inputs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phone","phone",-763596057),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"phone","phone",-763596057).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Phone"], null)], null);
return om.core.build.call(null,biomarket.profile.simple_input,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("biomarket.profile","phone-update","biomarket.profile/phone-update",39464343),inputs,"No phone information provided.",sfunc], null));
});
biomarket.profile.email = (function biomarket$profile$email(user){
var sfunc = (function (owner){
return null;
});
var inputs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Email"], null)], null);
return om.core.build.call(null,biomarket.profile.simple_input,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("biomarket.profile","email-update","biomarket.profile/email-update",1719945239),inputs,"No email information provided.",sfunc], null));
});
biomarket.profile.button = (function biomarket$profile$button(owner,etag,editing,us){
if(cljs.core.not.call(null,editing)){
if(cljs.core.truth_(us)){
return React.DOM.span(null,React.DOM.i({"className": "fa fa-pencil-square-o", "onClick": (function (){
return om.core.set_state_BANG_.call(null,owner,etag,cljs.core.not.call(null,om.core.get_state.call(null,owner,etag)));
})}));
} else {
return React.DOM.span(null,React.DOM.a({"onClick": (function (){
return om.core.set_state_BANG_.call(null,owner,etag,cljs.core.not.call(null,om.core.get_state.call(null,owner,etag)));
}), "style": {"cursor": "pointer"}},"Add some skills!"));
}
} else {
return React.DOM.span(null,React.DOM.a({"className": "btn btn-primary", "onClick": (function (){
return om.core.set_state_BANG_.call(null,owner,etag,cljs.core.not.call(null,om.core.get_state.call(null,owner,etag)));
})},"Done"));
}
});
biomarket.profile.show_skills = (function biomarket$profile$show_skills(owner,tag){
var etag = (function (){var pred__43280 = cljs.core._EQ_;
var expr__43281 = tag;
if(cljs.core.truth_(pred__43280.call(null,"bskill",expr__43281))){
return new cljs.core.Keyword(null,"editing-b","editing-b",1284284284);
} else {
if(cljs.core.truth_(pred__43280.call(null,"cskill",expr__43281))){
return new cljs.core.Keyword(null,"editing-c","editing-c",-248566889);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__43281)].join('')));
}
}
})();
var all_skills = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"all-skills","all-skills",-1330155020));
var us = cljs.core.seq.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.filter.call(null,((function (etag,all_skills){
return (function (p1__43272_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__43272_SHARP_),tag);
});})(etag,all_skills))
,new cljs.core.Keyword(null,"user-skills","user-skills",227825034).cljs$core$IFn$_invoke$arity$1(all_skills))));
var selected = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"user-skills","user-skills",227825034).cljs$core$IFn$_invoke$arity$1(all_skills)));
return React.DOM.div({"style": {"padding-top": "10px"}},React.DOM.label(null,(function (){var pred__43283 = cljs.core._EQ_;
var expr__43284 = tag;
if(cljs.core.truth_(pred__43283.call(null,"bskill",expr__43284))){
return "Bioinformatic skills";
} else {
if(cljs.core.truth_(pred__43283.call(null,"cskill",expr__43284))){
return "IT skills";
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__43284)].join('')));
}
}
})()),((cljs.core.not.call(null,om.core.get_state.call(null,owner,etag)))?React.DOM.div(null,om.core.build.call(null,biomarket.skills.skill_tags,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skills","skills",958701426),us], null),selected,null,true], null)),biomarket.profile.button.call(null,owner,etag,false,us)):React.DOM.div({"style": {"padding-top": "10px"}},om.core.build.call(null,biomarket.skills.skill_tags,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skills","skills",958701426),cljs.core.filter.call(null,((function (us,selected,etag,all_skills){
return (function (p1__43273_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__43273_SHARP_),tag);
});})(us,selected,etag,all_skills))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.concat.call(null,new cljs.core.Keyword(null,"user-skills","user-skills",227825034).cljs$core$IFn$_invoke$arity$1(all_skills),new cljs.core.Keyword(null,"other-skills","other-skills",-2071770741).cljs$core$IFn$_invoke$arity$1(all_skills))))], null),selected,new cljs.core.Keyword("biomarket.profile","tag-clicked","biomarket.profile/tag-clicked",-1808471000),true], null)),biomarket.profile.button.call(null,owner,etag,true,us))));
});
biomarket.profile.save_tag = (function biomarket$profile$save_tag(owner,tag){
var skills = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"all-skills","all-skills",-1330155020));
var uid = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"uid","uid",-1447769400));
if(cljs.core.truth_(cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"user-skills","user-skills",227825034).cljs$core$IFn$_invoke$arity$1(skills))).call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tag)))){
return biomarket.server.save_data.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"remove-skill","remove-skill",431000187),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tag),new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)], null));
} else {
return biomarket.server.save_data.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"add-skill","add-skill",-2089368685),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tag),new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)], null));
}
});
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"skills","skills",958701426),(function (owner,p__43286){
var map__43287 = p__43286;
var map__43287__$1 = ((((!((map__43287 == null)))?((((map__43287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43287):map__43287);
var data = cljs.core.get.call(null,map__43287__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"all-skills","all-skills",-1330155020),data);
}));
biomarket.profile.skills = (function biomarket$profile$skills(user,owner){
if(typeof biomarket.profile.t_biomarket$profile43296 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.profile.t_biomarket$profile43296 = (function (skills,user,owner,meta43297){
this.skills = skills;
this.user = user;
this.owner = owner;
this.meta43297 = meta43297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile43296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43298,meta43297__$1){
var self__ = this;
var _43298__$1 = this;
return (new biomarket.profile.t_biomarket$profile43296(self__.skills,self__.user,self__.owner,meta43297__$1));
});

biomarket.profile.t_biomarket$profile43296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43298){
var self__ = this;
var _43298__$1 = this;
return self__.meta43297;
});

biomarket.profile.t_biomarket$profile43296.prototype.om$core$IInitState$ = true;

biomarket.profile.t_biomarket$profile43296.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"all-skills","all-skills",-1330155020),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.user),new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"editing-b","editing-b",1284284284),false,new cljs.core.Keyword(null,"editing-c","editing-c",-248566889),false], null);
});

biomarket.profile.t_biomarket$profile43296.prototype.om$core$IWillMount$ = true;

biomarket.profile.t_biomarket$profile43296.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
biomarket.server.get_data.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"user-skills","user-skills",227825034),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.user)], null),((function (___$1){
return (function (p1__43289_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"all-skills","all-skills",-1330155020),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__43289_SHARP_));
});})(___$1))
);

biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.profile","tag-clicked","biomarket.profile/tag-clicked",-1808471000),((function (___$1){
return (function (o,e){
return biomarket.profile.save_tag.call(null,o,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e));
});})(___$1))
);

return biomarket.utilities.register_broadcast_loop.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skills","skills",958701426),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.user)], null),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718)));
});

biomarket.profile.t_biomarket$profile43296.prototype.om$core$IWillUnmount$ = true;

biomarket.profile.t_biomarket$profile43296.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
biomarket.utilities.unsub_broadcast_loop.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skills","skills",958701426),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.user)], null),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718)));

return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.profile","tag-clicked","biomarket.profile/tag-clicked",-1808471000));
});

biomarket.profile.t_biomarket$profile43296.prototype.om$core$IRenderState$ = true;

biomarket.profile.t_biomarket$profile43296.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__43299){
var self__ = this;
var map__43300 = p__43299;
var map__43300__$1 = ((((!((map__43300 == null)))?((((map__43300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43300):map__43300);
var all_skills = cljs.core.get.call(null,map__43300__$1,new cljs.core.Keyword(null,"all-skills","all-skills",-1330155020));
var editing = cljs.core.get.call(null,map__43300__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var ___$1 = this;
if(cljs.core.not.call(null,all_skills)){
return om.core.build.call(null,biomarket.utilities.waiting,null);
} else {
return React.DOM.div(null,React.DOM.h3({"style": {"padding": "0px 0px 0px 0px"}},"Skills"),React.DOM.hr({"style": {"margin": "0px"}}),biomarket.profile.show_skills.call(null,self__.owner,"bskill"),biomarket.profile.show_skills.call(null,self__.owner,"cskill"));
}
});

biomarket.profile.t_biomarket$profile43296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"skills","skills",-1695734343,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43297","meta43297",592937281,null)], null);
});

biomarket.profile.t_biomarket$profile43296.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile43296.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile43296";

biomarket.profile.t_biomarket$profile43296.cljs$lang$ctorPrWriter = (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.profile/t_biomarket$profile43296");
});

biomarket.profile.__GT_t_biomarket$profile43296 = (function biomarket$profile$skills_$___GT_t_biomarket$profile43296(skills__$1,user__$1,owner__$1,meta43297){
return (new biomarket.profile.t_biomarket$profile43296(skills__$1,user__$1,owner__$1,meta43297));
});

}

return (new biomarket.profile.t_biomarket$profile43296(biomarket$profile$skills,user,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.profile.profile_pic = (function biomarket$profile$profile_pic(user,owner){
if(typeof biomarket.profile.t_biomarket$profile43305 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.profile.t_biomarket$profile43305 = (function (profile_pic,user,owner,meta43306){
this.profile_pic = profile_pic;
this.user = user;
this.owner = owner;
this.meta43306 = meta43306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile43305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43307,meta43306__$1){
var self__ = this;
var _43307__$1 = this;
return (new biomarket.profile.t_biomarket$profile43305(self__.profile_pic,self__.user,self__.owner,meta43306__$1));
});

biomarket.profile.t_biomarket$profile43305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43307){
var self__ = this;
var _43307__$1 = this;
return self__.meta43306;
});

biomarket.profile.t_biomarket$profile43305.prototype.om$core$IRender$ = true;

biomarket.profile.t_biomarket$profile43305.prototype.om$core$IRender$render$arity$1 = (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
return React.DOM.div(null,React.DOM.table(null,React.DOM.tbody(null,React.DOM.tr(null,React.DOM.td({"style": {"text-align": "center"}},React.DOM.img({"src": "img/human.png", "style": {"margin": "5px"}}))),React.DOM.tr(null,React.DOM.td({"style": {"text-align": "center", "padding-bottom": "20px"}},React.DOM.a({"className": "btn btn-default"},"Upload a picture."))))));
});

biomarket.profile.t_biomarket$profile43305.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"profile-pic","profile-pic",-1351318670,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43306","meta43306",1779828091,null)], null);
});

biomarket.profile.t_biomarket$profile43305.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile43305.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile43305";

biomarket.profile.t_biomarket$profile43305.cljs$lang$ctorPrWriter = (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.profile/t_biomarket$profile43305");
});

biomarket.profile.__GT_t_biomarket$profile43305 = (function biomarket$profile$profile_pic_$___GT_t_biomarket$profile43305(profile_pic__$1,user__$1,owner__$1,meta43306){
return (new biomarket.profile.t_biomarket$profile43305(profile_pic__$1,user__$1,owner__$1,meta43306));
});

}

return (new biomarket.profile.t_biomarket$profile43305(biomarket$profile$profile_pic,user,owner,null));
});
biomarket.profile.details = (function biomarket$profile$details(user){
var pad = "15px";
return React.DOM.table(null,React.DOM.tbody(null,React.DOM.tr(null,React.DOM.td({"style": {"vertical-align": "top", "padding-bottom": pad}},React.DOM.h4({"style": {"display": "inline"}},"Address:")),React.DOM.td({"style": {"padding-left": "30px", "padding-bottom": pad}},om.core.build.call(null,biomarket.profile.address,user))),React.DOM.tr(null,React.DOM.td({"style": {"vertical-align": "top", "padding-bottom": pad}},React.DOM.h4({"style": {"display": "inline"}},"City:")),React.DOM.td({"style": {"padding-left": "30px", "padding-bottom": pad}},biomarket.profile.city.call(null,user))),React.DOM.tr(null,React.DOM.td({"style": {"vertical-align": "top", "padding-bottom": pad}},React.DOM.h4({"style": {"display": "inline"}},"Country:")),React.DOM.td({"style": {"padding-left": "30px", "padding-bottom": pad}},biomarket.profile.country.call(null,user))),React.DOM.tr(null,React.DOM.td({"style": {"vertical-align": "top", "padding-bottom": pad}},React.DOM.h4({"style": {"display": "inline"}},"Postcode:")),React.DOM.td({"style": {"padding-left": "30px", "padding-bottom": pad}},biomarket.profile.postcode.call(null,user))),React.DOM.tr(null,React.DOM.td({"style": {"vertical-align": "top", "padding-bottom": pad}},React.DOM.h4({"style": {"display": "inline"}},"Phone:")),React.DOM.td({"style": {"padding-left": "30px", "padding-bottom": pad}},biomarket.profile.phone.call(null,user))),React.DOM.tr(null,React.DOM.td({"style": {"vertical-align": "top", "padding-bottom": pad}},React.DOM.h4({"style": {"display": "inline"}},"Email:")),React.DOM.td({"style": {"padding-left": "30px", "padding-bottom": pad}},biomarket.profile.email.call(null,user)))));
});
biomarket.profile.about = (function biomarket$profile$about(user){
var sfunc = (function (owner){
var i = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858));
return biomarket.profile.submit.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"synopsis-update","synopsis-update",-523721011),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"synopsis","synopsis",-1198992902),cljs.core.get_in.call(null,i,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synopsis","synopsis",-1198992902),new cljs.core.Keyword(null,"value","value",305978217)], null))], null)], null));
});
var inputs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"synopsis","synopsis",-1198992902),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"synopsis","synopsis",-1198992902).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Synopsis"], null)], null);
return React.DOM.div(null,React.DOM.h3({"style": {"padding": "0px"}},"Career synopsis"),React.DOM.hr({"style": {"margin": "0px"}}),om.core.build.call(null,biomarket.profile.text_area,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("biomarket.profile","synopsis-update","biomarket.profile/synopsis-update",-653538352),inputs,"Tell us something about your career and skills",sfunc], null)));
});
biomarket.profile.publications = (function biomarket$profile$publications(user){
var sfunc = (function (owner){
var i = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858));
return biomarket.profile.submit.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"publication-update","publication-update",56850912),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"publications","publications",1164590218),cljs.core.get_in.call(null,i,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"publications","publications",1164590218),new cljs.core.Keyword(null,"value","value",305978217)], null))], null)], null));
});
var inputs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"publications","publications",1164590218),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"publications","publications",1164590218).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Publications"], null)], null);
return React.DOM.div(null,React.DOM.h3({"style": {"padding": "0px"}},"Publications"),React.DOM.hr({"style": {"margin": "0px"}}),om.core.build.call(null,biomarket.profile.text_area,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("biomarket.profile","publication-update","biomarket.profile/publication-update",-1121830177),inputs,"Add some publications",sfunc], null)));
});
biomarket.profile.get_user_info = (function biomarket$profile$get_user_info(owner){
return biomarket.server.get_data.call(null,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"user-data","user-data",2143823568)], null),(function (r){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(r));
}));
});
biomarket.profile.profile_view = (function biomarket$profile$profile_view(user,owner){
if(typeof biomarket.profile.t_biomarket$profile43314 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.profile.t_biomarket$profile43314 = (function (profile_view,user,owner,meta43315){
this.profile_view = profile_view;
this.user = user;
this.owner = owner;
this.meta43315 = meta43315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile43314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43316,meta43315__$1){
var self__ = this;
var _43316__$1 = this;
return (new biomarket.profile.t_biomarket$profile43314(self__.profile_view,self__.user,self__.owner,meta43315__$1));
});

biomarket.profile.t_biomarket$profile43314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43316){
var self__ = this;
var _43316__$1 = this;
return self__.meta43315;
});

biomarket.profile.t_biomarket$profile43314.prototype.om$core$IInitState$ = true;

biomarket.profile.t_biomarket$profile43314.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),null], null);
});

biomarket.profile.t_biomarket$profile43314.prototype.om$core$IWillMount$ = true;

biomarket.profile.t_biomarket$profile43314.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.profile.get_user_info.call(null,self__.owner);
});

biomarket.profile.t_biomarket$profile43314.prototype.om$core$IRenderState$ = true;

biomarket.profile.t_biomarket$profile43314.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__43317){
var self__ = this;
var map__43318 = p__43317;
var map__43318__$1 = ((((!((map__43318 == null)))?((((map__43318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43318):map__43318);
var user__$1 = cljs.core.get.call(null,map__43318__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var ___$1 = this;
if(cljs.core.not.call(null,user__$1)){
return om.core.build.call(null,biomarket.utilities.waiting,null);
} else {
return React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-body", "style": {"padding": "20px"}},om.core.build.call(null,biomarket.profile.heading,user__$1),React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-3"},om.core.build.call(null,biomarket.profile.profile_pic,user__$1)),React.DOM.div({"className": "col-md-9"},biomarket.profile.details.call(null,user__$1))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},om.core.build.call(null,biomarket.profile.skills,user__$1))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},biomarket.profile.about.call(null,user__$1))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},biomarket.profile.publications.call(null,user__$1))))));
}
});

biomarket.profile.t_biomarket$profile43314.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"profile-view","profile-view",1860975582,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43315","meta43315",-9304344,null)], null);
});

biomarket.profile.t_biomarket$profile43314.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile43314.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile43314";

biomarket.profile.t_biomarket$profile43314.cljs$lang$ctorPrWriter = (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.profile/t_biomarket$profile43314");
});

biomarket.profile.__GT_t_biomarket$profile43314 = (function biomarket$profile$profile_view_$___GT_t_biomarket$profile43314(profile_view__$1,user__$1,owner__$1,meta43315){
return (new biomarket.profile.t_biomarket$profile43314(profile_view__$1,user__$1,owner__$1,meta43315));
});

}

return (new biomarket.profile.t_biomarket$profile43314(biomarket$profile$profile_view,user,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=profile.js.map