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
var args93760 = [];
var len__26882__auto___93763 = arguments.length;
var i__26883__auto___93764 = (0);
while(true){
if((i__26883__auto___93764 < len__26882__auto___93763)){
args93760.push((arguments[i__26883__auto___93764]));

var G__93765 = (i__26883__auto___93764 + (1));
i__26883__auto___93764 = G__93765;
continue;
} else {
}
break;
}

var G__93762 = args93760.length;
switch (G__93762) {
case 1:
return biomarket.profile.edit_icon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return biomarket.profile.edit_icon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args93760.length)].join('')));

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
return (function (p__93772){
var vec__93773 = p__93772;
var k = cljs.core.nth.call(null,vec__93773,(0),null);
var element = cljs.core.nth.call(null,vec__93773,(1),null);
return om.dom.input.call(null,{"className": "form-control", "value": new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element), "placeholder": new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(element), "onKeyDown": biomarket.utilities.capture_return.call(null,((function (vec__93773,k,element,invalid,btn){
return (function (_){
return func.call(null,owner);
});})(vec__93773,k,element,invalid,btn))
), "onChange": ((function (vec__93773,k,element,invalid,btn){
return (function (p1__93767_SHARP_){
return biomarket.utilities.on_change_function.call(null,owner,ut,k,element,p1__93767_SHARP_);
});})(vec__93773,k,element,invalid,btn))
});
});})(invalid,btn))
,inputs),(function (){var x__26646__auto__ = React.DOM.a(btn,"Done");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26646__auto__);
})())),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (invalid,btn){
return (function (p__93774){
var vec__93775 = p__93774;
var k = cljs.core.nth.call(null,vec__93775,(0),null);
var e = cljs.core.nth.call(null,vec__93775,(1),null);
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
biomarket.profile.simple_input = (function biomarket$profile$simple_input(p__93776,owner){
var vec__93784 = p__93776;
var ut = cljs.core.nth.call(null,vec__93784,(0),null);
var inputs = cljs.core.nth.call(null,vec__93784,(1),null);
var etext = cljs.core.nth.call(null,vec__93784,(2),null);
var sfunc = cljs.core.nth.call(null,vec__93784,(3),null);
if(typeof biomarket.profile.t_biomarket$profile93785 !== 'undefined'){
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
biomarket.profile.t_biomarket$profile93785 = (function (simple_input,p__93776,owner,vec__93784,ut,inputs,etext,sfunc,meta93786){
this.simple_input = simple_input;
this.p__93776 = p__93776;
this.owner = owner;
this.vec__93784 = vec__93784;
this.ut = ut;
this.inputs = inputs;
this.etext = etext;
this.sfunc = sfunc;
this.meta93786 = meta93786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile93785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__93784,ut,inputs,etext,sfunc){
return (function (_93787,meta93786__$1){
var self__ = this;
var _93787__$1 = this;
return (new biomarket.profile.t_biomarket$profile93785(self__.simple_input,self__.p__93776,self__.owner,self__.vec__93784,self__.ut,self__.inputs,self__.etext,self__.sfunc,meta93786__$1));
});})(vec__93784,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile93785.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__93784,ut,inputs,etext,sfunc){
return (function (_93787){
var self__ = this;
var _93787__$1 = this;
return self__.meta93786;
});})(vec__93784,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile93785.prototype.om$core$IInitState$ = true;

biomarket.profile.t_biomarket$profile93785.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__93784,ut,inputs,etext,sfunc){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inputs","inputs",865803858),self__.inputs,new cljs.core.Keyword(null,"editing","editing",1365491601),false], null);
});})(vec__93784,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile93785.prototype.om$core$IWillMount$ = true;

biomarket.profile.t_biomarket$profile93785.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (vec__93784,ut,inputs,etext,sfunc){
return (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,self__.ut);
});})(vec__93784,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile93785.prototype.om$core$IWillUnmount$ = true;

biomarket.profile.t_biomarket$profile93785.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (vec__93784,ut,inputs,etext,sfunc){
return (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,self__.ut);
});})(vec__93784,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile93785.prototype.om$core$IRenderState$ = true;

biomarket.profile.t_biomarket$profile93785.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__93784,ut,inputs,etext,sfunc){
return (function (_,p__93788){
var self__ = this;
var map__93789 = p__93788;
var map__93789__$1 = ((((!((map__93789 == null)))?((((map__93789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93789):map__93789);
var inputs__$1 = cljs.core.get.call(null,map__93789__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var editing = cljs.core.get.call(null,map__93789__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var ___$1 = this;
var k = cljs.core.first.call(null,cljs.core.keys.call(null,inputs__$1));
var v = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(k.call(null,inputs__$1));
return React.DOM.div(null,(cljs.core.truth_(editing)?React.DOM.form({"className": "form-inline"},biomarket.profile.show_inputs.call(null,self__.owner,inputs__$1,self__.sfunc,self__.ut)):((clojure.string.blank_QMARK_.call(null,v))?React.DOM.div(null,self__.etext,biomarket.profile.edit_icon.call(null,self__.owner)):React.DOM.div(null,v,biomarket.profile.edit_icon.call(null,self__.owner)))));
});})(vec__93784,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile93785.getBasis = ((function (vec__93784,ut,inputs,etext,sfunc){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"simple-input","simple-input",-1558748414,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ut","ut",921115969,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"etext","etext",48926173,null),new cljs.core.Symbol(null,"sfunc","sfunc",-1753282753,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__93776","p__93776",805811607,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__93784","vec__93784",825598606,null),new cljs.core.Symbol(null,"ut","ut",921115969,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"etext","etext",48926173,null),new cljs.core.Symbol(null,"sfunc","sfunc",-1753282753,null),new cljs.core.Symbol(null,"meta93786","meta93786",418501232,null)], null);
});})(vec__93784,ut,inputs,etext,sfunc))
;

biomarket.profile.t_biomarket$profile93785.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile93785.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile93785";

biomarket.profile.t_biomarket$profile93785.cljs$lang$ctorPrWriter = ((function (vec__93784,ut,inputs,etext,sfunc){
return (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.profile/t_biomarket$profile93785");
});})(vec__93784,ut,inputs,etext,sfunc))
;

biomarket.profile.__GT_t_biomarket$profile93785 = ((function (vec__93784,ut,inputs,etext,sfunc){
return (function biomarket$profile$simple_input_$___GT_t_biomarket$profile93785(simple_input__$1,p__93776__$1,owner__$1,vec__93784__$1,ut__$1,inputs__$1,etext__$1,sfunc__$1,meta93786){
return (new biomarket.profile.t_biomarket$profile93785(simple_input__$1,p__93776__$1,owner__$1,vec__93784__$1,ut__$1,inputs__$1,etext__$1,sfunc__$1,meta93786));
});})(vec__93784,ut,inputs,etext,sfunc))
;

}

return (new biomarket.profile.t_biomarket$profile93785(biomarket$profile$simple_input,p__93776,owner,vec__93784,ut,inputs,etext,sfunc,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.profile.submit_heading = (function biomarket$profile$submit_heading(owner){
var i = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858));
return biomarket.profile.submit.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name-update","name-update",1373496096),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"first","first",-644103046).cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"last","last",1105735132),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"last","last",1105735132).cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"middle","middle",-701029031).cljs$core$IFn$_invoke$arity$1(i))], null)], null));
});
biomarket.profile.heading = (function biomarket$profile$heading(user,owner){
if(typeof biomarket.profile.t_biomarket$profile93799 !== 'undefined'){
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
biomarket.profile.t_biomarket$profile93799 = (function (heading,user,owner,meta93800){
this.heading = heading;
this.user = user;
this.owner = owner;
this.meta93800 = meta93800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile93799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_93801,meta93800__$1){
var self__ = this;
var _93801__$1 = this;
return (new biomarket.profile.t_biomarket$profile93799(self__.heading,self__.user,self__.owner,meta93800__$1));
});

biomarket.profile.t_biomarket$profile93799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_93801){
var self__ = this;
var _93801__$1 = this;
return self__.meta93800;
});

biomarket.profile.t_biomarket$profile93799.prototype.om$core$IInitState$ = true;

biomarket.profile.t_biomarket$profile93799.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editing","editing",1365491601),false,new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"first","first",-644103046).cljs$core$IFn$_invoke$arity$1(self__.user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"First name",new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__93791_SHARP_){
return !(clojure.string.blank_QMARK_.call(null,p1__93791_SHARP_));
});})(___$1))
,"First name cannot be blank"], null)], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"middle","middle",-701029031).cljs$core$IFn$_invoke$arity$1(self__.user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Middle name"], null),new cljs.core.Keyword(null,"last","last",1105735132),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"last","last",1105735132).cljs$core$IFn$_invoke$arity$1(self__.user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Last name",new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__93792_SHARP_){
return !(clojure.string.blank_QMARK_.call(null,p1__93792_SHARP_));
});})(___$1))
,"Last name cannot be blank"], null)], null)], null)], null)], null);
});

biomarket.profile.t_biomarket$profile93799.prototype.om$core$IWillMount$ = true;

biomarket.profile.t_biomarket$profile93799.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.profile","heading-update","biomarket.profile/heading-update",-935652994));
});

biomarket.profile.t_biomarket$profile93799.prototype.om$core$IWillUnmount$ = true;

biomarket.profile.t_biomarket$profile93799.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.profile","heading-update","biomarket.profile/heading-update",-935652994));
});

biomarket.profile.t_biomarket$profile93799.prototype.om$core$IRenderState$ = true;

biomarket.profile.t_biomarket$profile93799.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__93802){
var self__ = this;
var map__93803 = p__93802;
var map__93803__$1 = ((((!((map__93803 == null)))?((((map__93803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93803):map__93803);
var editing = cljs.core.get.call(null,map__93803__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var inputs = cljs.core.get.call(null,map__93803__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var ___$1 = this;
var first = new cljs.core.Keyword(null,"first","first",-644103046).cljs$core$IFn$_invoke$arity$1(inputs);
var last = new cljs.core.Keyword(null,"last","last",1105735132).cljs$core$IFn$_invoke$arity$1(inputs);
var middle = new cljs.core.Keyword(null,"middle","middle",-701029031).cljs$core$IFn$_invoke$arity$1(inputs);
var sfunc = ((function (first,last,middle,___$1,map__93803,map__93803__$1,editing,inputs){
return (function (o){
return null;
});})(first,last,middle,___$1,map__93803,map__93803__$1,editing,inputs))
;
if(cljs.core.not.call(null,editing)){
return React.DOM.div({"className": "h2", "style": {"padding-bottom": "20px"}},[cljs.core.str(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(first)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(middle)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(last))].join(''),biomarket.profile.edit_icon.call(null,self__.owner,"fa-1x"));
} else {
return React.DOM.div({"className": "form-inline", "style": {"padding-bottom": "40px"}},biomarket.profile.show_inputs.call(null,self__.owner,inputs,biomarket.profile.submit_heading,new cljs.core.Keyword("biomarket.profile","heading-update","biomarket.profile/heading-update",-935652994)));
}
});

biomarket.profile.t_biomarket$profile93799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"heading","heading",328359654,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta93800","meta93800",2001537049,null)], null);
});

biomarket.profile.t_biomarket$profile93799.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile93799.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile93799";

biomarket.profile.t_biomarket$profile93799.cljs$lang$ctorPrWriter = (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.profile/t_biomarket$profile93799");
});

biomarket.profile.__GT_t_biomarket$profile93799 = (function biomarket$profile$heading_$___GT_t_biomarket$profile93799(heading__$1,user__$1,owner__$1,meta93800){
return (new biomarket.profile.t_biomarket$profile93799(heading__$1,user__$1,owner__$1,meta93800));
});

}

return (new biomarket.profile.t_biomarket$profile93799(biomarket$profile$heading,user,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.profile.submit_address = (function biomarket$profile$submit_address(owner){
var i = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858));
return biomarket.profile.submit.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"address-update","address-update",-144111410),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address1","address1",1491072176),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address1","address1",1491072176).cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"address2","address2",1133017811),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address2","address2",1133017811).cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"address3","address3",436745703),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address3","address3",436745703).cljs$core$IFn$_invoke$arity$1(i))], null)], null));
});
biomarket.profile.address = (function biomarket$profile$address(user,owner){
if(typeof biomarket.profile.t_biomarket$profile93811 !== 'undefined'){
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
biomarket.profile.t_biomarket$profile93811 = (function (address,user,owner,meta93812){
this.address = address;
this.user = user;
this.owner = owner;
this.meta93812 = meta93812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile93811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_93813,meta93812__$1){
var self__ = this;
var _93813__$1 = this;
return (new biomarket.profile.t_biomarket$profile93811(self__.address,self__.user,self__.owner,meta93812__$1));
});

biomarket.profile.t_biomarket$profile93811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_93813){
var self__ = this;
var _93813__$1 = this;
return self__.meta93812;
});

biomarket.profile.t_biomarket$profile93811.prototype.om$core$IInitState$ = true;

biomarket.profile.t_biomarket$profile93811.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"editing","editing",1365491601),false,new cljs.core.Keyword(null,"user","user",1532431356),self__.user,new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address1","address1",1491072176),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"address1","address1",1491072176).cljs$core$IFn$_invoke$arity$1(self__.user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Address line 1"], null),new cljs.core.Keyword(null,"address2","address2",1133017811),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"address2","address2",1133017811).cljs$core$IFn$_invoke$arity$1(self__.user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Address line 2"], null),new cljs.core.Keyword(null,"address3","address3",436745703),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"address3","address3",436745703).cljs$core$IFn$_invoke$arity$1(self__.user),new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Address line 3"], null)], null)], null);
});

biomarket.profile.t_biomarket$profile93811.prototype.om$core$IWillMount$ = true;

biomarket.profile.t_biomarket$profile93811.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.profile","address-update","biomarket.profile/address-update",-1338916403));
});

biomarket.profile.t_biomarket$profile93811.prototype.om$core$IWillUnmount$ = true;

biomarket.profile.t_biomarket$profile93811.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.profile","address-update","biomarket.profile/address-update",-1338916403));
});

biomarket.profile.t_biomarket$profile93811.prototype.om$core$IRenderState$ = true;

biomarket.profile.t_biomarket$profile93811.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__93814){
var self__ = this;
var map__93815 = p__93814;
var map__93815__$1 = ((((!((map__93815 == null)))?((((map__93815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93815):map__93815);
var editing = cljs.core.get.call(null,map__93815__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var inputs = cljs.core.get.call(null,map__93815__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var ___$1 = this;
var address1 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address1","address1",1491072176).cljs$core$IFn$_invoke$arity$1(inputs));
var address2 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address2","address2",1133017811).cljs$core$IFn$_invoke$arity$1(inputs));
var address3 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address3","address3",436745703).cljs$core$IFn$_invoke$arity$1(inputs));
return React.DOM.div(null,(cljs.core.truth_(editing)?React.DOM.form({"className": "form"},biomarket.profile.show_inputs.call(null,self__.owner,inputs,biomarket.profile.submit_address,new cljs.core.Keyword("biomarket.profile","address-update","biomarket.profile/address-update",-1338916403))):((cljs.core.every_QMARK_.call(null,clojure.string.blank_QMARK_,(function (){var x__26646__auto__ = address1;
return cljs.core._conj.call(null,(function (){var x__26646__auto____$1 = address2;
return cljs.core._conj.call(null,(function (){var x__26646__auto____$2 = address3;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26646__auto____$2);
})(),x__26646__auto____$1);
})(),x__26646__auto__);
})()))?React.DOM.div(null,"No address information provided.",biomarket.profile.edit_icon.call(null,self__.owner)):React.DOM.div(null,React.DOM.div(null,address1,biomarket.profile.edit_icon.call(null,self__.owner)),React.DOM.div(null,address2),React.DOM.div(null,address3)))));
});

biomarket.profile.t_biomarket$profile93811.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"address","address",-2094936343,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta93812","meta93812",-1405246857,null)], null);
});

biomarket.profile.t_biomarket$profile93811.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile93811.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile93811";

biomarket.profile.t_biomarket$profile93811.cljs$lang$ctorPrWriter = (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.profile/t_biomarket$profile93811");
});

biomarket.profile.__GT_t_biomarket$profile93811 = (function biomarket$profile$address_$___GT_t_biomarket$profile93811(address__$1,user__$1,owner__$1,meta93812){
return (new biomarket.profile.t_biomarket$profile93811(address__$1,user__$1,owner__$1,meta93812));
});

}

return (new biomarket.profile.t_biomarket$profile93811(biomarket$profile$address,user,owner,cljs.core.PersistentArrayMap.EMPTY));
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
biomarket.profile.skills = (function biomarket$profile$skills(user,owner){
if(typeof biomarket.profile.t_biomarket$profile93825 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.profile.t_biomarket$profile93825 = (function (skills,user,owner,meta93826){
this.skills = skills;
this.user = user;
this.owner = owner;
this.meta93826 = meta93826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile93825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_93827,meta93826__$1){
var self__ = this;
var _93827__$1 = this;
return (new biomarket.profile.t_biomarket$profile93825(self__.skills,self__.user,self__.owner,meta93826__$1));
});

biomarket.profile.t_biomarket$profile93825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_93827){
var self__ = this;
var _93827__$1 = this;
return self__.meta93826;
});

biomarket.profile.t_biomarket$profile93825.prototype.om$core$IInitState$ = true;

biomarket.profile.t_biomarket$profile93825.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"all-skills","all-skills",-1330155020),null,new cljs.core.Keyword(null,"editing","editing",1365491601),false], null);
});

biomarket.profile.t_biomarket$profile93825.prototype.om$core$IWillMount$ = true;

biomarket.profile.t_biomarket$profile93825.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.server.get_data.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"all-skills","all-skills",-1330155020)], null),((function (___$1){
return (function (p1__93817_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"all-skills","all-skills",-1330155020),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__93817_SHARP_));
});})(___$1))
);
});

biomarket.profile.t_biomarket$profile93825.prototype.om$core$IRenderState$ = true;

biomarket.profile.t_biomarket$profile93825.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__93828){
var self__ = this;
var map__93829 = p__93828;
var map__93829__$1 = ((((!((map__93829 == null)))?((((map__93829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93829):map__93829);
var all_skills = cljs.core.get.call(null,map__93829__$1,new cljs.core.Keyword(null,"all-skills","all-skills",-1330155020));
var editing = cljs.core.get.call(null,map__93829__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var ___$1 = this;
return React.DOM.div(null,React.DOM.a({"onClick": ((function (___$1,map__93829,map__93829__$1,all_skills,editing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601),true);
});})(___$1,map__93829,map__93829__$1,all_skills,editing))
},"Add some skills"),(cljs.core.truth_(editing)?om.core.build.call(null,biomarket.skills.skill_tags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skills","skills",958701426),cljs.core.filter.call(null,((function (___$1,map__93829,map__93829__$1,all_skills,editing){
return (function (p1__93818_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__93818_SHARP_),"bskill");
});})(___$1,map__93829,map__93829__$1,all_skills,editing))
,all_skills)], null),cljs.core.PersistentArrayMap.EMPTY], null)):null));

});

biomarket.profile.t_biomarket$profile93825.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"skills","skills",-1695734343,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta93826","meta93826",-179181016,null)], null);
});

biomarket.profile.t_biomarket$profile93825.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile93825.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile93825";

biomarket.profile.t_biomarket$profile93825.cljs$lang$ctorPrWriter = (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.profile/t_biomarket$profile93825");
});

biomarket.profile.__GT_t_biomarket$profile93825 = (function biomarket$profile$skills_$___GT_t_biomarket$profile93825(skills__$1,user__$1,owner__$1,meta93826){
return (new biomarket.profile.t_biomarket$profile93825(skills__$1,user__$1,owner__$1,meta93826));
});

}

return (new biomarket.profile.t_biomarket$profile93825(biomarket$profile$skills,user,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.profile.profile_pic = (function biomarket$profile$profile_pic(user,owner){
if(typeof biomarket.profile.t_biomarket$profile93834 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.profile.t_biomarket$profile93834 = (function (profile_pic,user,owner,meta93835){
this.profile_pic = profile_pic;
this.user = user;
this.owner = owner;
this.meta93835 = meta93835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile93834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_93836,meta93835__$1){
var self__ = this;
var _93836__$1 = this;
return (new biomarket.profile.t_biomarket$profile93834(self__.profile_pic,self__.user,self__.owner,meta93835__$1));
});

biomarket.profile.t_biomarket$profile93834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_93836){
var self__ = this;
var _93836__$1 = this;
return self__.meta93835;
});

biomarket.profile.t_biomarket$profile93834.prototype.om$core$IRender$ = true;

biomarket.profile.t_biomarket$profile93834.prototype.om$core$IRender$render$arity$1 = (function (this__36757__auto__){
var self__ = this;
var this__36757__auto____$1 = this;
return React.DOM.div(null,React.DOM.img({"src": "img/human.png", "style": {"margin": "5px"}}),React.DOM.a({"className": "btn btn-default"},"Upload a picture."));
});

biomarket.profile.t_biomarket$profile93834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"profile-pic","profile-pic",-1351318670,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta93835","meta93835",1138496482,null)], null);
});

biomarket.profile.t_biomarket$profile93834.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile93834.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile93834";

biomarket.profile.t_biomarket$profile93834.cljs$lang$ctorPrWriter = (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.profile/t_biomarket$profile93834");
});

biomarket.profile.__GT_t_biomarket$profile93834 = (function biomarket$profile$profile_pic_$___GT_t_biomarket$profile93834(profile_pic__$1,user__$1,owner__$1,meta93835){
return (new biomarket.profile.t_biomarket$profile93834(profile_pic__$1,user__$1,owner__$1,meta93835));
});

}

return (new biomarket.profile.t_biomarket$profile93834(biomarket$profile$profile_pic,user,owner,null));
});
biomarket.profile.get_user_info = (function biomarket$profile$get_user_info(owner){
return biomarket.server.get_data.call(null,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"user-data","user-data",2143823568)], null),(function (r){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(r));
}));
});
biomarket.profile.profile_view = (function biomarket$profile$profile_view(user,owner){
if(typeof biomarket.profile.t_biomarket$profile93843 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.profile.t_biomarket$profile93843 = (function (profile_view,user,owner,meta93844){
this.profile_view = profile_view;
this.user = user;
this.owner = owner;
this.meta93844 = meta93844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile93843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_93845,meta93844__$1){
var self__ = this;
var _93845__$1 = this;
return (new biomarket.profile.t_biomarket$profile93843(self__.profile_view,self__.user,self__.owner,meta93844__$1));
});

biomarket.profile.t_biomarket$profile93843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_93845){
var self__ = this;
var _93845__$1 = this;
return self__.meta93844;
});

biomarket.profile.t_biomarket$profile93843.prototype.om$core$IInitState$ = true;

biomarket.profile.t_biomarket$profile93843.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),null], null);
});

biomarket.profile.t_biomarket$profile93843.prototype.om$core$IWillMount$ = true;

biomarket.profile.t_biomarket$profile93843.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.profile.get_user_info.call(null,self__.owner);
});

biomarket.profile.t_biomarket$profile93843.prototype.om$core$IRenderState$ = true;

biomarket.profile.t_biomarket$profile93843.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__93846){
var self__ = this;
var map__93847 = p__93846;
var map__93847__$1 = ((((!((map__93847 == null)))?((((map__93847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93847):map__93847);
var user__$1 = cljs.core.get.call(null,map__93847__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var ___$1 = this;
if(cljs.core.not.call(null,user__$1)){
return om.core.build.call(null,biomarket.utilities.waiting,null);
} else {
return React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-body"},om.core.build.call(null,biomarket.profile.heading,user__$1),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-3"},om.core.build.call(null,biomarket.profile.profile_pic,user__$1)),React.DOM.div({"className": "col-md-4"},React.DOM.table({"style": {"border-spacing": "20px", "border-collapse": "separate"}},React.DOM.tbody(null,React.DOM.tr(null,React.DOM.td({"style": {"vertical-align": "top"}},React.DOM.h3({"style": {"display": "inline"}},"Address:")),React.DOM.td({"style": {"padding-left": "30px"}},om.core.build.call(null,biomarket.profile.address,user__$1))),React.DOM.tr(null,React.DOM.td({"style": {"vertical-align": "top"}},React.DOM.h3({"style": {"display": "inline"}},"City:")),React.DOM.td({"style": {"padding-left": "30px"}},biomarket.profile.city.call(null,user__$1))),React.DOM.tr(null,React.DOM.td({"style": {"vertical-align": "top"}},React.DOM.h3({"style": {"display": "inline"}},"Country:")),React.DOM.td({"style": {"padding-left": "30px"}},biomarket.profile.country.call(null,user__$1))),React.DOM.tr(null,React.DOM.td({"style": {"vertical-align": "top"}},React.DOM.h3({"style": {"display": "inline"}},"Postcode:")),React.DOM.td({"style": {"padding-left": "30px"}},biomarket.profile.postcode.call(null,user__$1))),React.DOM.tr(null,React.DOM.td({"style": {"vertical-align": "top"}},React.DOM.h3({"style": {"display": "inline"}},"Phone:")),React.DOM.td({"style": {"padding-left": "30px"}},biomarket.profile.phone.call(null,user__$1)))))),React.DOM.div({"className": "col-md-5"},React.DOM.h3(null,"Skills:"),om.core.build.call(null,biomarket.profile.skills,user__$1)))));
}
});

biomarket.profile.t_biomarket$profile93843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"profile-view","profile-view",1860975582,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta93844","meta93844",638879764,null)], null);
});

biomarket.profile.t_biomarket$profile93843.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile93843.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile93843";

biomarket.profile.t_biomarket$profile93843.cljs$lang$ctorPrWriter = (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.profile/t_biomarket$profile93843");
});

biomarket.profile.__GT_t_biomarket$profile93843 = (function biomarket$profile$profile_view_$___GT_t_biomarket$profile93843(profile_view__$1,user__$1,owner__$1,meta93844){
return (new biomarket.profile.t_biomarket$profile93843(profile_view__$1,user__$1,owner__$1,meta93844));
});

}

return (new biomarket.profile.t_biomarket$profile93843(biomarket$profile$profile_view,user,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=profile.js.map