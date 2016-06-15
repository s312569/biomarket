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
var args104580 = [];
var len__26879__auto___104583 = arguments.length;
var i__26880__auto___104584 = (0);
while(true){
if((i__26880__auto___104584 < len__26879__auto___104583)){
args104580.push((arguments[i__26880__auto___104584]));

var G__104585 = (i__26880__auto___104584 + (1));
i__26880__auto___104584 = G__104585;
continue;
} else {
}
break;
}

var G__104582 = args104580.length;
switch (G__104582) {
case 1:
return biomarket.profile.edit_icon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return biomarket.profile.edit_icon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args104580.length)].join('')));

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
return (function (p__104592){
var vec__104593 = p__104592;
var k = cljs.core.nth.call(null,vec__104593,(0),null);
var element = cljs.core.nth.call(null,vec__104593,(1),null);
return om.dom.input.call(null,{"className": "form-control", "value": new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element), "placeholder": new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(element), "onKeyDown": biomarket.utilities.capture_return.call(null,((function (vec__104593,k,element,invalid,btn){
return (function (_){
return func.call(null,owner);
});})(vec__104593,k,element,invalid,btn))
), "onChange": ((function (vec__104593,k,element,invalid,btn){
return (function (p1__104587_SHARP_){
return biomarket.utilities.on_change_function.call(null,owner,ut,k,element,p1__104587_SHARP_);
});})(vec__104593,k,element,invalid,btn))
});
});})(invalid,btn))
,inputs),(function (){var x__26643__auto__ = React.DOM.a(btn,"Done");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26643__auto__);
})())),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (invalid,btn){
return (function (p__104594){
var vec__104595 = p__104594;
var k = cljs.core.nth.call(null,vec__104595,(0),null);
var e = cljs.core.nth.call(null,vec__104595,(1),null);
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
biomarket.profile.simple_input = (function biomarket$profile$simple_input(p__104596,owner){
var vec__104604 = p__104596;
var ut = cljs.core.nth.call(null,vec__104604,(0),null);
var inputs = cljs.core.nth.call(null,vec__104604,(1),null);
var etext = cljs.core.nth.call(null,vec__104604,(2),null);
var sfunc = cljs.core.nth.call(null,vec__104604,(3),null);
if(typeof biomarket.profile.t_biomarket$profile104605 !== 'undefined'){
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
biomarket.profile.t_biomarket$profile104605 = (function (simple_input,p__104596,owner,vec__104604,ut,inputs,etext,sfunc,meta104606){
this.simple_input = simple_input;
this.p__104596 = p__104596;
this.owner = owner;
this.vec__104604 = vec__104604;
this.ut = ut;
this.inputs = inputs;
this.etext = etext;
this.sfunc = sfunc;
this.meta104606 = meta104606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile104605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__104604,ut,inputs,etext,sfunc){
return (function (_104607,meta104606__$1){
var self__ = this;
var _104607__$1 = this;
return (new biomarket.profile.t_biomarket$profile104605(self__.simple_input,self__.p__104596,self__.owner,self__.vec__104604,self__.ut,self__.inputs,self__.etext,self__.sfunc,meta104606__$1));
});})(vec__104604,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile104605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__104604,ut,inputs,etext,sfunc){
return (function (_104607){
var self__ = this;
var _104607__$1 = this;
return self__.meta104606;
});})(vec__104604,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile104605.prototype.om$core$IInitState$ = true;

biomarket.profile.t_biomarket$profile104605.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__104604,ut,inputs,etext,sfunc){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inputs","inputs",865803858),self__.inputs,new cljs.core.Keyword(null,"editing","editing",1365491601),false], null);
});})(vec__104604,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile104605.prototype.om$core$IWillMount$ = true;

biomarket.profile.t_biomarket$profile104605.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (vec__104604,ut,inputs,etext,sfunc){
return (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,self__.ut);
});})(vec__104604,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile104605.prototype.om$core$IWillUnmount$ = true;

biomarket.profile.t_biomarket$profile104605.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (vec__104604,ut,inputs,etext,sfunc){
return (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,self__.ut);
});})(vec__104604,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile104605.prototype.om$core$IRenderState$ = true;

biomarket.profile.t_biomarket$profile104605.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__104604,ut,inputs,etext,sfunc){
return (function (_,p__104608){
var self__ = this;
var map__104609 = p__104608;
var map__104609__$1 = ((((!((map__104609 == null)))?((((map__104609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104609):map__104609);
var inputs__$1 = cljs.core.get.call(null,map__104609__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var editing = cljs.core.get.call(null,map__104609__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var ___$1 = this;
var k = cljs.core.first.call(null,cljs.core.keys.call(null,inputs__$1));
var v = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(k.call(null,inputs__$1));
return React.DOM.div(null,(cljs.core.truth_(editing)?React.DOM.form({"className": "form-inline"},biomarket.profile.show_inputs.call(null,self__.owner,inputs__$1,self__.sfunc,self__.ut)):((clojure.string.blank_QMARK_.call(null,v))?React.DOM.div(null,self__.etext,biomarket.profile.edit_icon.call(null,self__.owner)):React.DOM.div(null,v,biomarket.profile.edit_icon.call(null,self__.owner)))));
});})(vec__104604,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile104605.getBasis = ((function (vec__104604,ut,inputs,etext,sfunc){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"simple-input","simple-input",-1558748414,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ut","ut",921115969,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"etext","etext",48926173,null),new cljs.core.Symbol(null,"sfunc","sfunc",-1753282753,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__104596","p__104596",-627871312,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__104604","vec__104604",-1317405981,null),new cljs.core.Symbol(null,"ut","ut",921115969,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"etext","etext",48926173,null),new cljs.core.Symbol(null,"sfunc","sfunc",-1753282753,null),new cljs.core.Symbol(null,"meta104606","meta104606",1637889023,null)], null);
});})(vec__104604,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile104605.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile104605.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile104605";

biomarket.profile.t_biomarket$profile104605.cljs$lang$ctorPrWriter = ((function (vec__104604,ut,inputs,etext,sfunc){
return (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.profile/t_biomarket$profile104605");
});})(vec__104604,ut,inputs,etext,sfunc))
;

biomarket.profile.__GT_t_biomarket$profile104605 = ((function (vec__104604,ut,inputs,etext,sfunc){
return (function biomarket$profile$simple_input_$___GT_t_biomarket$profile104605(simple_input__$1,p__104596__$1,owner__$1,vec__104604__$1,ut__$1,inputs__$1,etext__$1,sfunc__$1,meta104606){
return (new biomarket.profile.t_biomarket$profile104605(simple_input__$1,p__104596__$1,owner__$1,vec__104604__$1,ut__$1,inputs__$1,etext__$1,sfunc__$1,meta104606));
});})(vec__104604,ut,inputs,etext,sfunc))
;

}

return (new biomarket.profile.t_biomarket$profile104605(biomarket$profile$simple_input,p__104596,owner,vec__104604,ut,inputs,etext,sfunc,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.profile.text_area = (function biomarket$profile$text_area(p__104612,owner){
var vec__104621 = p__104612;
var ut = cljs.core.nth.call(null,vec__104621,(0),null);
var inputs = cljs.core.nth.call(null,vec__104621,(1),null);
var etext = cljs.core.nth.call(null,vec__104621,(2),null);
var sfunc = cljs.core.nth.call(null,vec__104621,(3),null);
if(typeof biomarket.profile.t_biomarket$profile104622 !== 'undefined'){
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
biomarket.profile.t_biomarket$profile104622 = (function (text_area,p__104612,owner,vec__104621,ut,inputs,etext,sfunc,meta104623){
this.text_area = text_area;
this.p__104612 = p__104612;
this.owner = owner;
this.vec__104621 = vec__104621;
this.ut = ut;
this.inputs = inputs;
this.etext = etext;
this.sfunc = sfunc;
this.meta104623 = meta104623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile104622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__104621,ut,inputs,etext,sfunc){
return (function (_104624,meta104623__$1){
var self__ = this;
var _104624__$1 = this;
return (new biomarket.profile.t_biomarket$profile104622(self__.text_area,self__.p__104612,self__.owner,self__.vec__104621,self__.ut,self__.inputs,self__.etext,self__.sfunc,meta104623__$1));
});})(vec__104621,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile104622.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__104621,ut,inputs,etext,sfunc){
return (function (_104624){
var self__ = this;
var _104624__$1 = this;
return self__.meta104623;
});})(vec__104621,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile104622.prototype.om$core$IInitState$ = true;

biomarket.profile.t_biomarket$profile104622.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__104621,ut,inputs,etext,sfunc){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editing","editing",1365491601),false,new cljs.core.Keyword(null,"inputs","inputs",865803858),self__.inputs], null);
});})(vec__104621,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile104622.prototype.om$core$IWillMount$ = true;

biomarket.profile.t_biomarket$profile104622.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (vec__104621,ut,inputs,etext,sfunc){
return (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,self__.ut);
});})(vec__104621,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile104622.prototype.om$core$IWillUnmount$ = true;

biomarket.profile.t_biomarket$profile104622.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (vec__104621,ut,inputs,etext,sfunc){
return (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,self__.ut);
});})(vec__104621,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile104622.prototype.om$core$IRenderState$ = true;

biomarket.profile.t_biomarket$profile104622.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__104621,ut,inputs,etext,sfunc){
return (function (_,p__104625){
var self__ = this;
var map__104626 = p__104625;
var map__104626__$1 = ((((!((map__104626 == null)))?((((map__104626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104626):map__104626);
var inputs__$1 = cljs.core.get.call(null,map__104626__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var editing = cljs.core.get.call(null,map__104626__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var ___$1 = this;
var vec__104628 = cljs.core.first.call(null,inputs__$1);
var k = cljs.core.nth.call(null,vec__104628,(0),null);
var element = cljs.core.nth.call(null,vec__104628,(1),null);
return React.DOM.div(null,(cljs.core.truth_(editing)?React.DOM.div(null,om.dom.textarea.call(null,{"placeholder": new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(element), "value": new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element), "rows": "10", "style": {"width": "100%", "margin-top": "10px"}, "onChange": ((function (vec__104628,k,element,___$1,map__104626,map__104626__$1,inputs__$1,editing,vec__104621,ut,inputs,etext,sfunc){
return (function (p1__104611_SHARP_){
return biomarket.utilities.on_change_function.call(null,self__.owner,self__.ut,k,element,p1__104611_SHARP_);
});})(vec__104628,k,element,___$1,map__104626,map__104626__$1,inputs__$1,editing,vec__104621,ut,inputs,etext,sfunc))
}),React.DOM.a({"className": "btn btn-primary", "onClick": ((function (vec__104628,k,element,___$1,map__104626,map__104626__$1,inputs__$1,editing,vec__104621,ut,inputs,etext,sfunc){
return (function (){
return self__.sfunc.call(null,self__.owner);
});})(vec__104628,k,element,___$1,map__104626,map__104626__$1,inputs__$1,editing,vec__104621,ut,inputs,etext,sfunc))
},"Save")):((clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element)))?React.DOM.div({"style": {"padding-top": "10px"}},React.DOM.a({"onClick": ((function (vec__104628,k,element,___$1,map__104626,map__104626__$1,inputs__$1,editing,vec__104621,ut,inputs,etext,sfunc){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601),true);
});})(vec__104628,k,element,___$1,map__104626,map__104626__$1,inputs__$1,editing,vec__104621,ut,inputs,etext,sfunc))
, "style": {"padding-top": "10px"}},self__.etext)):React.DOM.div({"style": {"padding-top": "10px"}},React.DOM.span({"style": {"white-space": "pre-line"}},new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element)),biomarket.profile.edit_icon.call(null,self__.owner)))));
});})(vec__104621,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile104622.getBasis = ((function (vec__104621,ut,inputs,etext,sfunc){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"text-area","text-area",159372872,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ut","ut",921115969,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"etext","etext",48926173,null),new cljs.core.Symbol(null,"sfunc","sfunc",-1753282753,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__104612","p__104612",-1499524010,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__104621","vec__104621",-699017934,null),new cljs.core.Symbol(null,"ut","ut",921115969,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"etext","etext",48926173,null),new cljs.core.Symbol(null,"sfunc","sfunc",-1753282753,null),new cljs.core.Symbol(null,"meta104623","meta104623",732456633,null)], null);
});})(vec__104621,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile104622.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile104622.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile104622";

biomarket.profile.t_biomarket$profile104622.cljs$lang$ctorPrWriter = ((function (vec__104621,ut,inputs,etext,sfunc){
return (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.profile/t_biomarket$profile104622");
});})(vec__104621,ut,inputs,etext,sfunc))
;

biomarket.profile.__GT_t_biomarket$profile104622 = ((function (vec__104621,ut,inputs,etext,sfunc){
return (function biomarket$profile$text_area_$___GT_t_biomarket$profile104622(text_area__$1,p__104612__$1,owner__$1,vec__104621__$1,ut__$1,inputs__$1,etext__$1,sfunc__$1,meta104623){
return (new biomarket.profile.t_biomarket$profile104622(text_area__$1,p__104612__$1,owner__$1,vec__104621__$1,ut__$1,inputs__$1,etext__$1,sfunc__$1,meta104623));
});})(vec__104621,ut,inputs,etext,sfunc))
;

}

return (new biomarket.profile.t_biomarket$profile104622(biomarket$profile$text_area,p__104612,owner,vec__104621,ut,inputs,etext,sfunc,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.profile.submit_heading = (function biomarket$profile$submit_heading(owner){
var i = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858));
return biomarket.profile.submit.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name-update","name-update",1373496096),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"first","first",-644103046).cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"last","last",1105735132),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"last","last",1105735132).cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"middle","middle",-701029031).cljs$core$IFn$_invoke$arity$1(i))], null)], null));
});
biomarket.profile.heading = (function biomarket$profile$heading(user,owner){
if(typeof biomarket.profile.t_biomarket$profile104637 !== 'undefined'){
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
biomarket.profile.t_biomarket$profile104637 = (function (heading,user,owner,meta104638){
this.heading = heading;
this.user = user;
this.owner = owner;
this.meta104638 = meta104638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile104637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_104639,meta104638__$1){
var self__ = this;
var _104639__$1 = this;
return (new biomarket.profile.t_biomarket$profile104637(self__.heading,self__.user,self__.owner,meta104638__$1));
});

biomarket.profile.t_biomarket$profile104637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_104639){
var self__ = this;
var _104639__$1 = this;
return self__.meta104638;
});

biomarket.profile.t_biomarket$profile104637.prototype.om$core$IInitState$ = true;

biomarket.profile.t_biomarket$profile104637.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editing","editing",1365491601),false,new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"first","first",-644103046).cljs$core$IFn$_invoke$arity$1(self__.user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"First name",new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__104629_SHARP_){
return !(clojure.string.blank_QMARK_.call(null,p1__104629_SHARP_));
});})(___$1))
,"First name cannot be blank"], null)], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"middle","middle",-701029031).cljs$core$IFn$_invoke$arity$1(self__.user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Middle name"], null),new cljs.core.Keyword(null,"last","last",1105735132),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"last","last",1105735132).cljs$core$IFn$_invoke$arity$1(self__.user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Last name",new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__104630_SHARP_){
return !(clojure.string.blank_QMARK_.call(null,p1__104630_SHARP_));
});})(___$1))
,"Last name cannot be blank"], null)], null)], null)], null)], null);
});

biomarket.profile.t_biomarket$profile104637.prototype.om$core$IWillMount$ = true;

biomarket.profile.t_biomarket$profile104637.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.profile","heading-update","biomarket.profile/heading-update",-935652994));
});

biomarket.profile.t_biomarket$profile104637.prototype.om$core$IWillUnmount$ = true;

biomarket.profile.t_biomarket$profile104637.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.profile","heading-update","biomarket.profile/heading-update",-935652994));
});

biomarket.profile.t_biomarket$profile104637.prototype.om$core$IRenderState$ = true;

biomarket.profile.t_biomarket$profile104637.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__104640){
var self__ = this;
var map__104641 = p__104640;
var map__104641__$1 = ((((!((map__104641 == null)))?((((map__104641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104641):map__104641);
var editing = cljs.core.get.call(null,map__104641__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var inputs = cljs.core.get.call(null,map__104641__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var ___$1 = this;
var first = new cljs.core.Keyword(null,"first","first",-644103046).cljs$core$IFn$_invoke$arity$1(inputs);
var last = new cljs.core.Keyword(null,"last","last",1105735132).cljs$core$IFn$_invoke$arity$1(inputs);
var middle = new cljs.core.Keyword(null,"middle","middle",-701029031).cljs$core$IFn$_invoke$arity$1(inputs);
var sfunc = ((function (first,last,middle,___$1,map__104641,map__104641__$1,editing,inputs){
return (function (o){
return null;
});})(first,last,middle,___$1,map__104641,map__104641__$1,editing,inputs))
;
if(cljs.core.not.call(null,editing)){
return React.DOM.div({"className": "h2", "style": {"padding-bottom": "20px"}},[cljs.core.str(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(first)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(middle)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(last))].join(''),biomarket.profile.edit_icon.call(null,self__.owner,"fa-1x"));
} else {
return React.DOM.div({"className": "form-inline", "style": {"padding-bottom": "40px"}},biomarket.profile.show_inputs.call(null,self__.owner,inputs,biomarket.profile.submit_heading,new cljs.core.Keyword("biomarket.profile","heading-update","biomarket.profile/heading-update",-935652994)));
}
});

biomarket.profile.t_biomarket$profile104637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"heading","heading",328359654,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta104638","meta104638",1924136493,null)], null);
});

biomarket.profile.t_biomarket$profile104637.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile104637.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile104637";

biomarket.profile.t_biomarket$profile104637.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.profile/t_biomarket$profile104637");
});

biomarket.profile.__GT_t_biomarket$profile104637 = (function biomarket$profile$heading_$___GT_t_biomarket$profile104637(heading__$1,user__$1,owner__$1,meta104638){
return (new biomarket.profile.t_biomarket$profile104637(heading__$1,user__$1,owner__$1,meta104638));
});

}

return (new biomarket.profile.t_biomarket$profile104637(biomarket$profile$heading,user,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.profile.submit_address = (function biomarket$profile$submit_address(owner){
var i = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858));
return biomarket.profile.submit.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"address-update","address-update",-144111410),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address1","address1",1491072176),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address1","address1",1491072176).cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"address2","address2",1133017811),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address2","address2",1133017811).cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"address3","address3",436745703),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address3","address3",436745703).cljs$core$IFn$_invoke$arity$1(i))], null)], null));
});
biomarket.profile.address = (function biomarket$profile$address(user,owner){
if(typeof biomarket.profile.t_biomarket$profile104649 !== 'undefined'){
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
biomarket.profile.t_biomarket$profile104649 = (function (address,user,owner,meta104650){
this.address = address;
this.user = user;
this.owner = owner;
this.meta104650 = meta104650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile104649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_104651,meta104650__$1){
var self__ = this;
var _104651__$1 = this;
return (new biomarket.profile.t_biomarket$profile104649(self__.address,self__.user,self__.owner,meta104650__$1));
});

biomarket.profile.t_biomarket$profile104649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_104651){
var self__ = this;
var _104651__$1 = this;
return self__.meta104650;
});

biomarket.profile.t_biomarket$profile104649.prototype.om$core$IInitState$ = true;

biomarket.profile.t_biomarket$profile104649.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"editing","editing",1365491601),false,new cljs.core.Keyword(null,"user","user",1532431356),self__.user,new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address1","address1",1491072176),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"address1","address1",1491072176).cljs$core$IFn$_invoke$arity$1(self__.user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Address line 1"], null),new cljs.core.Keyword(null,"address2","address2",1133017811),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"address2","address2",1133017811).cljs$core$IFn$_invoke$arity$1(self__.user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Address line 2"], null),new cljs.core.Keyword(null,"address3","address3",436745703),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"address3","address3",436745703).cljs$core$IFn$_invoke$arity$1(self__.user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Address line 3"], null)], null)], null);
});

biomarket.profile.t_biomarket$profile104649.prototype.om$core$IWillMount$ = true;

biomarket.profile.t_biomarket$profile104649.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.profile","address-update","biomarket.profile/address-update",-1338916403));
});

biomarket.profile.t_biomarket$profile104649.prototype.om$core$IWillUnmount$ = true;

biomarket.profile.t_biomarket$profile104649.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.profile","address-update","biomarket.profile/address-update",-1338916403));
});

biomarket.profile.t_biomarket$profile104649.prototype.om$core$IRenderState$ = true;

biomarket.profile.t_biomarket$profile104649.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__104652){
var self__ = this;
var map__104653 = p__104652;
var map__104653__$1 = ((((!((map__104653 == null)))?((((map__104653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104653):map__104653);
var editing = cljs.core.get.call(null,map__104653__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var inputs = cljs.core.get.call(null,map__104653__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var ___$1 = this;
var address1 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address1","address1",1491072176).cljs$core$IFn$_invoke$arity$1(inputs));
var address2 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address2","address2",1133017811).cljs$core$IFn$_invoke$arity$1(inputs));
var address3 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address3","address3",436745703).cljs$core$IFn$_invoke$arity$1(inputs));
return React.DOM.div(null,(cljs.core.truth_(editing)?React.DOM.form({"className": "form"},biomarket.profile.show_inputs.call(null,self__.owner,inputs,biomarket.profile.submit_address,new cljs.core.Keyword("biomarket.profile","address-update","biomarket.profile/address-update",-1338916403))):((cljs.core.every_QMARK_.call(null,clojure.string.blank_QMARK_,(function (){var x__26643__auto__ = address1;
return cljs.core._conj.call(null,(function (){var x__26643__auto____$1 = address2;
return cljs.core._conj.call(null,(function (){var x__26643__auto____$2 = address3;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26643__auto____$2);
})(),x__26643__auto____$1);
})(),x__26643__auto__);
})()))?React.DOM.div(null,"No address information provided.",biomarket.profile.edit_icon.call(null,self__.owner)):React.DOM.div(null,React.DOM.div(null,address1,biomarket.profile.edit_icon.call(null,self__.owner)),React.DOM.div(null,address2),React.DOM.div(null,address3)))));
});

biomarket.profile.t_biomarket$profile104649.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"address","address",-2094936343,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta104650","meta104650",-901739273,null)], null);
});

biomarket.profile.t_biomarket$profile104649.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile104649.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile104649";

biomarket.profile.t_biomarket$profile104649.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.profile/t_biomarket$profile104649");
});

biomarket.profile.__GT_t_biomarket$profile104649 = (function biomarket$profile$address_$___GT_t_biomarket$profile104649(address__$1,user__$1,owner__$1,meta104650){
return (new biomarket.profile.t_biomarket$profile104649(address__$1,user__$1,owner__$1,meta104650));
});

}

return (new biomarket.profile.t_biomarket$profile104649(biomarket$profile$address,user,owner,cljs.core.PersistentArrayMap.EMPTY));
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
var etag = (function (){var pred__104663 = cljs.core._EQ_;
var expr__104664 = tag;
if(cljs.core.truth_(pred__104663.call(null,"bskill",expr__104664))){
return new cljs.core.Keyword(null,"editing-b","editing-b",1284284284);
} else {
if(cljs.core.truth_(pred__104663.call(null,"cskill",expr__104664))){
return new cljs.core.Keyword(null,"editing-c","editing-c",-248566889);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__104664)].join('')));
}
}
})();
var all_skills = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"all-skills","all-skills",-1330155020));
var us = cljs.core.seq.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.filter.call(null,((function (etag,all_skills){
return (function (p1__104655_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__104655_SHARP_),tag);
});})(etag,all_skills))
,new cljs.core.Keyword(null,"user-skills","user-skills",227825034).cljs$core$IFn$_invoke$arity$1(all_skills))));
var selected = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"user-skills","user-skills",227825034).cljs$core$IFn$_invoke$arity$1(all_skills)));
return React.DOM.div({"style": {"padding-top": "10px"}},React.DOM.label(null,(function (){var pred__104666 = cljs.core._EQ_;
var expr__104667 = tag;
if(cljs.core.truth_(pred__104666.call(null,"bskill",expr__104667))){
return "Bioinformatic skills";
} else {
if(cljs.core.truth_(pred__104666.call(null,"cskill",expr__104667))){
return "IT skills";
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__104667)].join('')));
}
}
})()),((cljs.core.not.call(null,om.core.get_state.call(null,owner,etag)))?React.DOM.div(null,om.core.build.call(null,biomarket.skills.skill_tags,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skills","skills",958701426),us], null),selected,null,true], null)),biomarket.profile.button.call(null,owner,etag,false,us)):React.DOM.div({"style": {"padding-top": "10px"}},om.core.build.call(null,biomarket.skills.skill_tags,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skills","skills",958701426),cljs.core.filter.call(null,((function (us,selected,etag,all_skills){
return (function (p1__104656_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__104656_SHARP_),tag);
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
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"skills","skills",958701426),(function (owner,p__104669){
var map__104670 = p__104669;
var map__104670__$1 = ((((!((map__104670 == null)))?((((map__104670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104670):map__104670);
var data = cljs.core.get.call(null,map__104670__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"all-skills","all-skills",-1330155020),data);
}));
biomarket.profile.skills = (function biomarket$profile$skills(user,owner){
if(typeof biomarket.profile.t_biomarket$profile104679 !== 'undefined'){
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
biomarket.profile.t_biomarket$profile104679 = (function (skills,user,owner,meta104680){
this.skills = skills;
this.user = user;
this.owner = owner;
this.meta104680 = meta104680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile104679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_104681,meta104680__$1){
var self__ = this;
var _104681__$1 = this;
return (new biomarket.profile.t_biomarket$profile104679(self__.skills,self__.user,self__.owner,meta104680__$1));
});

biomarket.profile.t_biomarket$profile104679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_104681){
var self__ = this;
var _104681__$1 = this;
return self__.meta104680;
});

biomarket.profile.t_biomarket$profile104679.prototype.om$core$IInitState$ = true;

biomarket.profile.t_biomarket$profile104679.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"all-skills","all-skills",-1330155020),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.user),new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"editing-b","editing-b",1284284284),false,new cljs.core.Keyword(null,"editing-c","editing-c",-248566889),false], null);
});

biomarket.profile.t_biomarket$profile104679.prototype.om$core$IWillMount$ = true;

biomarket.profile.t_biomarket$profile104679.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
biomarket.server.get_data.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"user-skills","user-skills",227825034),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.user)], null),((function (___$1){
return (function (p1__104672_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"all-skills","all-skills",-1330155020),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__104672_SHARP_));
});})(___$1))
);

biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.profile","tag-clicked","biomarket.profile/tag-clicked",-1808471000),((function (___$1){
return (function (o,e){
return biomarket.profile.save_tag.call(null,o,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e));
});})(___$1))
);

return biomarket.utilities.register_broadcast_loop.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skills","skills",958701426),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.user)], null),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718)));
});

biomarket.profile.t_biomarket$profile104679.prototype.om$core$IWillUnmount$ = true;

biomarket.profile.t_biomarket$profile104679.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
biomarket.utilities.unsub_broadcast_loop.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skills","skills",958701426),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.user)], null),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718)));

return biomarket.utilities.unsubscribe.call(null,new cljs.core.Keyword("biomarket.profile","tag-clicked","biomarket.profile/tag-clicked",-1808471000));
});

biomarket.profile.t_biomarket$profile104679.prototype.om$core$IRenderState$ = true;

biomarket.profile.t_biomarket$profile104679.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__104682){
var self__ = this;
var map__104683 = p__104682;
var map__104683__$1 = ((((!((map__104683 == null)))?((((map__104683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104683):map__104683);
var all_skills = cljs.core.get.call(null,map__104683__$1,new cljs.core.Keyword(null,"all-skills","all-skills",-1330155020));
var editing = cljs.core.get.call(null,map__104683__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var ___$1 = this;
if(cljs.core.not.call(null,all_skills)){
return om.core.build.call(null,biomarket.utilities.waiting,null);
} else {
return React.DOM.div(null,React.DOM.h3({"style": {"padding": "0px 0px 0px 0px"}},"Skills"),React.DOM.hr({"style": {"margin": "0px"}}),biomarket.profile.show_skills.call(null,self__.owner,"bskill"),biomarket.profile.show_skills.call(null,self__.owner,"cskill"));
}
});

biomarket.profile.t_biomarket$profile104679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"skills","skills",-1695734343,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta104680","meta104680",-1175240962,null)], null);
});

biomarket.profile.t_biomarket$profile104679.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile104679.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile104679";

biomarket.profile.t_biomarket$profile104679.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.profile/t_biomarket$profile104679");
});

biomarket.profile.__GT_t_biomarket$profile104679 = (function biomarket$profile$skills_$___GT_t_biomarket$profile104679(skills__$1,user__$1,owner__$1,meta104680){
return (new biomarket.profile.t_biomarket$profile104679(skills__$1,user__$1,owner__$1,meta104680));
});

}

return (new biomarket.profile.t_biomarket$profile104679(biomarket$profile$skills,user,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.profile.profile_pic = (function biomarket$profile$profile_pic(user,owner){
if(typeof biomarket.profile.t_biomarket$profile104688 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.profile.t_biomarket$profile104688 = (function (profile_pic,user,owner,meta104689){
this.profile_pic = profile_pic;
this.user = user;
this.owner = owner;
this.meta104689 = meta104689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile104688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_104690,meta104689__$1){
var self__ = this;
var _104690__$1 = this;
return (new biomarket.profile.t_biomarket$profile104688(self__.profile_pic,self__.user,self__.owner,meta104689__$1));
});

biomarket.profile.t_biomarket$profile104688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_104690){
var self__ = this;
var _104690__$1 = this;
return self__.meta104689;
});

biomarket.profile.t_biomarket$profile104688.prototype.om$core$IRender$ = true;

biomarket.profile.t_biomarket$profile104688.prototype.om$core$IRender$render$arity$1 = (function (this__36754__auto__){
var self__ = this;
var this__36754__auto____$1 = this;
return React.DOM.div(null,React.DOM.table(null,React.DOM.tbody(null,React.DOM.tr(null,React.DOM.td({"style": {"text-align": "center"}},React.DOM.img({"src": "img/human.png", "style": {"margin": "5px"}}))),React.DOM.tr(null,React.DOM.td({"style": {"text-align": "center", "padding-bottom": "20px"}},React.DOM.a({"className": "btn btn-default"},"Upload a picture."))))));
});

biomarket.profile.t_biomarket$profile104688.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"profile-pic","profile-pic",-1351318670,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta104689","meta104689",-2000318669,null)], null);
});

biomarket.profile.t_biomarket$profile104688.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile104688.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile104688";

biomarket.profile.t_biomarket$profile104688.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.profile/t_biomarket$profile104688");
});

biomarket.profile.__GT_t_biomarket$profile104688 = (function biomarket$profile$profile_pic_$___GT_t_biomarket$profile104688(profile_pic__$1,user__$1,owner__$1,meta104689){
return (new biomarket.profile.t_biomarket$profile104688(profile_pic__$1,user__$1,owner__$1,meta104689));
});

}

return (new biomarket.profile.t_biomarket$profile104688(biomarket$profile$profile_pic,user,owner,null));
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
if(typeof biomarket.profile.t_biomarket$profile104697 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.profile.t_biomarket$profile104697 = (function (profile_view,user,owner,meta104698){
this.profile_view = profile_view;
this.user = user;
this.owner = owner;
this.meta104698 = meta104698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile104697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_104699,meta104698__$1){
var self__ = this;
var _104699__$1 = this;
return (new biomarket.profile.t_biomarket$profile104697(self__.profile_view,self__.user,self__.owner,meta104698__$1));
});

biomarket.profile.t_biomarket$profile104697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_104699){
var self__ = this;
var _104699__$1 = this;
return self__.meta104698;
});

biomarket.profile.t_biomarket$profile104697.prototype.om$core$IInitState$ = true;

biomarket.profile.t_biomarket$profile104697.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),null], null);
});

biomarket.profile.t_biomarket$profile104697.prototype.om$core$IWillMount$ = true;

biomarket.profile.t_biomarket$profile104697.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.profile.get_user_info.call(null,self__.owner);
});

biomarket.profile.t_biomarket$profile104697.prototype.om$core$IRenderState$ = true;

biomarket.profile.t_biomarket$profile104697.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__104700){
var self__ = this;
var map__104701 = p__104700;
var map__104701__$1 = ((((!((map__104701 == null)))?((((map__104701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__104701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__104701):map__104701);
var user__$1 = cljs.core.get.call(null,map__104701__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var ___$1 = this;
if(cljs.core.not.call(null,user__$1)){
return om.core.build.call(null,biomarket.utilities.waiting,null);
} else {
return React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-body", "style": {"padding": "20px"}},om.core.build.call(null,biomarket.profile.heading,user__$1),React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-3"},om.core.build.call(null,biomarket.profile.profile_pic,user__$1)),React.DOM.div({"className": "col-md-9"},biomarket.profile.details.call(null,user__$1))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},om.core.build.call(null,biomarket.profile.skills,user__$1))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},biomarket.profile.about.call(null,user__$1))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},biomarket.profile.publications.call(null,user__$1))))));
}
});

biomarket.profile.t_biomarket$profile104697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"profile-view","profile-view",1860975582,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta104698","meta104698",1111103279,null)], null);
});

biomarket.profile.t_biomarket$profile104697.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile104697.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile104697";

biomarket.profile.t_biomarket$profile104697.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.profile/t_biomarket$profile104697");
});

biomarket.profile.__GT_t_biomarket$profile104697 = (function biomarket$profile$profile_view_$___GT_t_biomarket$profile104697(profile_view__$1,user__$1,owner__$1,meta104698){
return (new biomarket.profile.t_biomarket$profile104697(profile_view__$1,user__$1,owner__$1,meta104698));
});

}

return (new biomarket.profile.t_biomarket$profile104697(biomarket$profile$profile_view,user,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=profile.js.map