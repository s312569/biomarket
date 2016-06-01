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
goog.require('om.core');
goog.require('clojure.string');
biomarket.profile.edit_icon = (function biomarket$profile$edit_icon(owner){
return React.DOM.i({"className": "fa fa-pencil-square-o", "onClick": (function (){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",1365491601),true);
}), "style": {"padding-left": "10px"}});
});
biomarket.profile.show_inputs = (function biomarket$profile$show_inputs(owner,inputs,func,ut){
var invalid = cljs.core.some.call(null,cljs.core.identity,cljs.core.map.call(null,new cljs.core.Keyword(null,"invalid","invalid",412869516),cljs.core.vals.call(null,inputs)));
var btn = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,invalid))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (invalid){
return (function (){
return func.call(null,owner);
});})(invalid))
], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),"disabled"], null)));
return React.DOM.div({"className": ((cljs.core.not.call(null,invalid))?"form-group has-success":"form-group has-error")},cljs.core.apply.call(null,om.dom.div,null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (invalid,btn){
return (function (p__31884){
var vec__31885 = p__31884;
var k = cljs.core.nth.call(null,vec__31885,(0),null);
var element = cljs.core.nth.call(null,vec__31885,(1),null);
return om.dom.input.call(null,{"className": "form-control", "value": new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element), "placeholder": new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(element), "onKeyDown": biomarket.utilities.capture_return.call(null,((function (vec__31885,k,element,invalid,btn){
return (function (_){
return func.call(null,owner);
});})(vec__31885,k,element,invalid,btn))
), "onChange": ((function (vec__31885,k,element,invalid,btn){
return (function (p1__31879_SHARP_){
return biomarket.utilities.on_change_function.call(null,owner,ut,k,element,p1__31879_SHARP_);
});})(vec__31885,k,element,invalid,btn))
});
});})(invalid,btn))
,inputs),(function (){var x__26618__auto__ = React.DOM.a(btn,"Done");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26618__auto__);
})())),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (invalid,btn){
return (function (p__31886){
var vec__31887 = p__31886;
var k = cljs.core.nth.call(null,vec__31887,(0),null);
var e = cljs.core.nth.call(null,vec__31887,(1),null);
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(e))){
return React.DOM.div(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(e)));
} else {
return null;
}
});})(invalid,btn))
,inputs)));
});
biomarket.profile.submit_heading = (function biomarket$profile$submit_heading(owner){
var i = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var f = ((function (i){
return (function (x){
biomarket.utilities.log.call(null,x);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(x))){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",1365491601),false);
} else {
return window.location = "/error";
}
});})(i))
;
return biomarket.server.save_data.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name-update","name-update",1373496096),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"first","first",-644103046).cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"last","last",1105735132),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"last","last",1105735132).cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"middle","middle",-701029031).cljs$core$IFn$_invoke$arity$1(i))], null)], null),f);
});
biomarket.profile.heading = (function biomarket$profile$heading(user,owner){
if(typeof biomarket.profile.t_biomarket$profile31896 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.profile.t_biomarket$profile31896 = (function (heading,user,owner,meta31897){
this.heading = heading;
this.user = user;
this.owner = owner;
this.meta31897 = meta31897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile31896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31898,meta31897__$1){
var self__ = this;
var _31898__$1 = this;
return (new biomarket.profile.t_biomarket$profile31896(self__.heading,self__.user,self__.owner,meta31897__$1));
});

biomarket.profile.t_biomarket$profile31896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31898){
var self__ = this;
var _31898__$1 = this;
return self__.meta31897;
});

biomarket.profile.t_biomarket$profile31896.prototype.om$core$IInitState$ = true;

biomarket.profile.t_biomarket$profile31896.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"editing","editing",1365491601),false,new cljs.core.Keyword(null,"user","user",1532431356),self__.user,new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"First name",new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__31888_SHARP_){
return !(clojure.string.blank_QMARK_.call(null,p1__31888_SHARP_));
});})(___$1))
,"First name cannot be blank"], null)], null)], null),new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Middle name"], null),new cljs.core.Keyword(null,"last","last",1105735132),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Last name",new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__31889_SHARP_){
return !(clojure.string.blank_QMARK_.call(null,p1__31889_SHARP_));
});})(___$1))
,"Last name cannot be blank"], null)], null)], null)], null)], null);
});

biomarket.profile.t_biomarket$profile31896.prototype.om$core$IWillMount$ = true;

biomarket.profile.t_biomarket$profile31896.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.profile","heading-update","biomarket.profile/heading-update",-935652994));
});

biomarket.profile.t_biomarket$profile31896.prototype.om$core$IWillUnmount$ = true;

biomarket.profile.t_biomarket$profile31896.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.profile","heading-update","biomarket.profile/heading-update",-935652994));
});

biomarket.profile.t_biomarket$profile31896.prototype.om$core$IWillReceiveProps$ = true;

biomarket.profile.t_biomarket$profile31896.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (_,np){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.Keyword(null,"first","first",-644103046).cljs$core$IFn$_invoke$arity$1(np)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last","last",1105735132),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.Keyword(null,"last","last",1105735132).cljs$core$IFn$_invoke$arity$1(np)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"middle","middle",-701029031),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.Keyword(null,"middle","middle",-701029031).cljs$core$IFn$_invoke$arity$1(np)));

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"user","user",1532431356),np);
});

biomarket.profile.t_biomarket$profile31896.prototype.om$core$IRenderState$ = true;

biomarket.profile.t_biomarket$profile31896.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__31899){
var self__ = this;
var map__31900 = p__31899;
var map__31900__$1 = ((((!((map__31900 == null)))?((((map__31900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31900):map__31900);
var editing = cljs.core.get.call(null,map__31900__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var inputs = cljs.core.get.call(null,map__31900__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var ___$1 = this;
var first = new cljs.core.Keyword(null,"first","first",-644103046).cljs$core$IFn$_invoke$arity$1(inputs);
var last = new cljs.core.Keyword(null,"last","last",1105735132).cljs$core$IFn$_invoke$arity$1(inputs);
var middle = new cljs.core.Keyword(null,"middle","middle",-701029031).cljs$core$IFn$_invoke$arity$1(inputs);
if(cljs.core.not.call(null,editing)){
return React.DOM.div({"className": "h2", "style": {"padding-bottom": "20px"}},[cljs.core.str(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(first)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(middle)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(last))].join(''),biomarket.profile.edit_icon.call(null,self__.owner));
} else {
return React.DOM.div({"className": "form-inline", "style": {"padding-bottom": "40px"}},biomarket.profile.show_inputs.call(null,self__.owner,inputs,biomarket.profile.submit_heading,new cljs.core.Keyword("biomarket.profile","heading-update","biomarket.profile/heading-update",-935652994)));
}
});

biomarket.profile.t_biomarket$profile31896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"heading","heading",328359654,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31897","meta31897",737140872,null)], null);
});

biomarket.profile.t_biomarket$profile31896.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile31896.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile31896";

biomarket.profile.t_biomarket$profile31896.cljs$lang$ctorPrWriter = (function (this__26390__auto__,writer__26391__auto__,opt__26392__auto__){
return cljs.core._write.call(null,writer__26391__auto__,"biomarket.profile/t_biomarket$profile31896");
});

biomarket.profile.__GT_t_biomarket$profile31896 = (function biomarket$profile$heading_$___GT_t_biomarket$profile31896(heading__$1,user__$1,owner__$1,meta31897){
return (new biomarket.profile.t_biomarket$profile31896(heading__$1,user__$1,owner__$1,meta31897));
});

}

return (new biomarket.profile.t_biomarket$profile31896(biomarket$profile$heading,user,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.profile.submit_address = (function biomarket$profile$submit_address(owner){
var i = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var f = ((function (i){
return (function (x){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(x))){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",1365491601),false);
} else {
return window.location = "/error";
}
});})(i))
;
return biomarket.server.save_data.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"address-update","address-update",-144111410),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address1","address1",1491072176),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address1","address1",1491072176).cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"address2","address2",1133017811),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address2","address2",1133017811).cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"address3","address3",436745703),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address3","address3",436745703).cljs$core$IFn$_invoke$arity$1(i))], null)], null),f);
});
biomarket.profile.address = (function biomarket$profile$address(user,owner){
if(typeof biomarket.profile.t_biomarket$profile31908 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.profile.t_biomarket$profile31908 = (function (address,user,owner,meta31909){
this.address = address;
this.user = user;
this.owner = owner;
this.meta31909 = meta31909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile31908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31910,meta31909__$1){
var self__ = this;
var _31910__$1 = this;
return (new biomarket.profile.t_biomarket$profile31908(self__.address,self__.user,self__.owner,meta31909__$1));
});

biomarket.profile.t_biomarket$profile31908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31910){
var self__ = this;
var _31910__$1 = this;
return self__.meta31909;
});

biomarket.profile.t_biomarket$profile31908.prototype.om$core$IInitState$ = true;

biomarket.profile.t_biomarket$profile31908.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"editing","editing",1365491601),false,new cljs.core.Keyword(null,"user","user",1532431356),self__.user,new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address1","address1",1491072176),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Address line 1"], null),new cljs.core.Keyword(null,"address2","address2",1133017811),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Address line 2"], null),new cljs.core.Keyword(null,"address3","address3",436745703),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Address line 3"], null)], null)], null);
});

biomarket.profile.t_biomarket$profile31908.prototype.om$core$IWillMount$ = true;

biomarket.profile.t_biomarket$profile31908.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.profile","address-update","biomarket.profile/address-update",-1338916403));
});

biomarket.profile.t_biomarket$profile31908.prototype.om$core$IWillUnmount$ = true;

biomarket.profile.t_biomarket$profile31908.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.profile","address-update","biomarket.profile/address-update",-1338916403));
});

biomarket.profile.t_biomarket$profile31908.prototype.om$core$IWillReceiveProps$ = true;

biomarket.profile.t_biomarket$profile31908.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (_,np){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address1","address1",1491072176),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.Keyword(null,"address1","address1",1491072176).cljs$core$IFn$_invoke$arity$1(np)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address2","address2",1133017811),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.Keyword(null,"address2","address2",1133017811).cljs$core$IFn$_invoke$arity$1(np)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address3","address3",436745703),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.Keyword(null,"address3","address3",436745703).cljs$core$IFn$_invoke$arity$1(np)));

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"user","user",1532431356),np);
});

biomarket.profile.t_biomarket$profile31908.prototype.om$core$IRenderState$ = true;

biomarket.profile.t_biomarket$profile31908.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__31911){
var self__ = this;
var map__31912 = p__31911;
var map__31912__$1 = ((((!((map__31912 == null)))?((((map__31912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31912):map__31912);
var editing = cljs.core.get.call(null,map__31912__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var inputs = cljs.core.get.call(null,map__31912__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var ___$1 = this;
var address1 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address1","address1",1491072176).cljs$core$IFn$_invoke$arity$1(inputs));
var address2 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address2","address2",1133017811).cljs$core$IFn$_invoke$arity$1(inputs));
var address3 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"address3","address3",436745703).cljs$core$IFn$_invoke$arity$1(inputs));
return React.DOM.div(null,(cljs.core.truth_(editing)?React.DOM.form({"className": "form"},biomarket.profile.show_inputs.call(null,self__.owner,inputs,biomarket.profile.submit_address,new cljs.core.Keyword("biomarket.profile","address-update","biomarket.profile/address-update",-1338916403))):((cljs.core.every_QMARK_.call(null,clojure.string.blank_QMARK_,(function (){var x__26618__auto__ = address1;
return cljs.core._conj.call(null,(function (){var x__26618__auto____$1 = address2;
return cljs.core._conj.call(null,(function (){var x__26618__auto____$2 = address3;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26618__auto____$2);
})(),x__26618__auto____$1);
})(),x__26618__auto__);
})()))?React.DOM.div(null,"No address information provided.",biomarket.profile.edit_icon.call(null,self__.owner)):React.DOM.div(null,React.DOM.div(null,address1,biomarket.profile.edit_icon.call(null,self__.owner)),React.DOM.div(null,address2),React.DOM.div(null,address3)))));
});

biomarket.profile.t_biomarket$profile31908.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"address","address",-2094936343,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31909","meta31909",-1359203051,null)], null);
});

biomarket.profile.t_biomarket$profile31908.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile31908.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile31908";

biomarket.profile.t_biomarket$profile31908.cljs$lang$ctorPrWriter = (function (this__26390__auto__,writer__26391__auto__,opt__26392__auto__){
return cljs.core._write.call(null,writer__26391__auto__,"biomarket.profile/t_biomarket$profile31908");
});

biomarket.profile.__GT_t_biomarket$profile31908 = (function biomarket$profile$address_$___GT_t_biomarket$profile31908(address__$1,user__$1,owner__$1,meta31909){
return (new biomarket.profile.t_biomarket$profile31908(address__$1,user__$1,owner__$1,meta31909));
});

}

return (new biomarket.profile.t_biomarket$profile31908(biomarket$profile$address,user,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.profile.submit_city = (function biomarket$profile$submit_city(owner){
return null;
});
biomarket.profile.city = (function biomarket$profile$city(user,owner){
if(typeof biomarket.profile.t_biomarket$profile31920 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.profile.t_biomarket$profile31920 = (function (city,user,owner,meta31921){
this.city = city;
this.user = user;
this.owner = owner;
this.meta31921 = meta31921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile31920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31922,meta31921__$1){
var self__ = this;
var _31922__$1 = this;
return (new biomarket.profile.t_biomarket$profile31920(self__.city,self__.user,self__.owner,meta31921__$1));
});

biomarket.profile.t_biomarket$profile31920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31922){
var self__ = this;
var _31922__$1 = this;
return self__.meta31921;
});

biomarket.profile.t_biomarket$profile31920.prototype.om$core$IInitState$ = true;

biomarket.profile.t_biomarket$profile31920.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),self__.user,new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"city","city",-393302614),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"invalid","invalid",412869516),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"City"], null)], null),new cljs.core.Keyword(null,"editing","editing",1365491601),false], null);
});

biomarket.profile.t_biomarket$profile31920.prototype.om$core$IRenderState$ = true;

biomarket.profile.t_biomarket$profile31920.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__31923){
var self__ = this;
var map__31924 = p__31923;
var map__31924__$1 = ((((!((map__31924 == null)))?((((map__31924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31924):map__31924);
var user__$1 = cljs.core.get.call(null,map__31924__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var inputs = cljs.core.get.call(null,map__31924__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var editing = cljs.core.get.call(null,map__31924__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var ___$1 = this;
var city__$1 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(inputs));
return React.DOM.div(null,(cljs.core.truth_(editing)?React.DOM.form({"className": "form"},biomarket.profile.show_inputs.call(null,self__.owner,inputs,biomarket.profile.submit_city,new cljs.core.Keyword("biomarket.profile","city-update","biomarket.profile/city-update",-1852856383))):((clojure.string.blank_QMARK_.call(null,city__$1))?React.DOM.div(null,"No city information provided.",biomarket.profile.edit_icon.call(null,self__.owner)):React.DOM.div(null,city__$1))));
});

biomarket.profile.t_biomarket$profile31920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"city","city",1247228913,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31921","meta31921",799603693,null)], null);
});

biomarket.profile.t_biomarket$profile31920.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile31920.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile31920";

biomarket.profile.t_biomarket$profile31920.cljs$lang$ctorPrWriter = (function (this__26390__auto__,writer__26391__auto__,opt__26392__auto__){
return cljs.core._write.call(null,writer__26391__auto__,"biomarket.profile/t_biomarket$profile31920");
});

biomarket.profile.__GT_t_biomarket$profile31920 = (function biomarket$profile$city_$___GT_t_biomarket$profile31920(city__$1,user__$1,owner__$1,meta31921){
return (new biomarket.profile.t_biomarket$profile31920(city__$1,user__$1,owner__$1,meta31921));
});

}

return (new biomarket.profile.t_biomarket$profile31920(biomarket$profile$city,user,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.profile.profile_pic = (function biomarket$profile$profile_pic(user,owner){
if(typeof biomarket.profile.t_biomarket$profile31929 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.profile.t_biomarket$profile31929 = (function (profile_pic,user,owner,meta31930){
this.profile_pic = profile_pic;
this.user = user;
this.owner = owner;
this.meta31930 = meta31930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile31929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31931,meta31930__$1){
var self__ = this;
var _31931__$1 = this;
return (new biomarket.profile.t_biomarket$profile31929(self__.profile_pic,self__.user,self__.owner,meta31930__$1));
});

biomarket.profile.t_biomarket$profile31929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31931){
var self__ = this;
var _31931__$1 = this;
return self__.meta31930;
});

biomarket.profile.t_biomarket$profile31929.prototype.om$core$IRender$ = true;

biomarket.profile.t_biomarket$profile31929.prototype.om$core$IRender$render$arity$1 = (function (this__28758__auto__){
var self__ = this;
var this__28758__auto____$1 = this;
return React.DOM.div(null,React.DOM.img({"src": "img/human.png", "style": {"margin": "5px"}}),React.DOM.a({"className": "btn btn-default"},"Upload a picture."));
});

biomarket.profile.t_biomarket$profile31929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"profile-pic","profile-pic",-1351318670,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31930","meta31930",748025944,null)], null);
});

biomarket.profile.t_biomarket$profile31929.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile31929.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile31929";

biomarket.profile.t_biomarket$profile31929.cljs$lang$ctorPrWriter = (function (this__26390__auto__,writer__26391__auto__,opt__26392__auto__){
return cljs.core._write.call(null,writer__26391__auto__,"biomarket.profile/t_biomarket$profile31929");
});

biomarket.profile.__GT_t_biomarket$profile31929 = (function biomarket$profile$profile_pic_$___GT_t_biomarket$profile31929(profile_pic__$1,user__$1,owner__$1,meta31930){
return (new biomarket.profile.t_biomarket$profile31929(profile_pic__$1,user__$1,owner__$1,meta31930));
});

}

return (new biomarket.profile.t_biomarket$profile31929(biomarket$profile$profile_pic,user,owner,null));
});
biomarket.profile.get_user_info = (function biomarket$profile$get_user_info(owner){
return biomarket.server.get_data.call(null,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"user-data","user-data",2143823568)], null),(function (x){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(x));
}));
});
biomarket.profile.profile_view = (function biomarket$profile$profile_view(_,owner){
if(typeof biomarket.profile.t_biomarket$profile31938 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.profile.t_biomarket$profile31938 = (function (profile_view,_,owner,meta31939){
this.profile_view = profile_view;
this._ = _;
this.owner = owner;
this.meta31939 = meta31939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.profile.t_biomarket$profile31938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31940,meta31939__$1){
var self__ = this;
var _31940__$1 = this;
return (new biomarket.profile.t_biomarket$profile31938(self__.profile_view,self__._,self__.owner,meta31939__$1));
});

biomarket.profile.t_biomarket$profile31938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31940){
var self__ = this;
var _31940__$1 = this;
return self__.meta31939;
});

biomarket.profile.t_biomarket$profile31938.prototype.om$core$IInitState$ = true;

biomarket.profile.t_biomarket$profile31938.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),null], null);
});

biomarket.profile.t_biomarket$profile31938.prototype.om$core$IWillMount$ = true;

biomarket.profile.t_biomarket$profile31938.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.profile.get_user_info.call(null,self__.owner);
});

biomarket.profile.t_biomarket$profile31938.prototype.om$core$IRenderState$ = true;

biomarket.profile.t_biomarket$profile31938.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__31941){
var self__ = this;
var map__31942 = p__31941;
var map__31942__$1 = ((((!((map__31942 == null)))?((((map__31942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31942):map__31942);
var user = cljs.core.get.call(null,map__31942__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var ___$2 = this;
biomarket.utilities.log.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"user","user",1532431356)));

return React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-body"},om.core.build.call(null,biomarket.profile.heading,user),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-3"},om.core.build.call(null,biomarket.profile.profile_pic,user)),React.DOM.div({"className": "col-md-6"},React.DOM.table(null,React.DOM.tbody(null,React.DOM.tr(null,React.DOM.td({"style": {"vertical-align": "top"}},React.DOM.h3({"style": {"display": "inline"}},"Address:")),React.DOM.td({"style": {"padding-left": "30px"}},om.core.build.call(null,biomarket.profile.address,user))),React.DOM.tr(null,React.DOM.td({"style": {"vertical-align": "top"}},React.DOM.h3({"style": {"display": "inline"}},"City:")),React.DOM.td({"style": {"padding-left": "30px"}},om.core.build.call(null,biomarket.profile.city,user)))))))));
});

biomarket.profile.t_biomarket$profile31938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"profile-view","profile-view",1860975582,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31939","meta31939",1230425474,null)], null);
});

biomarket.profile.t_biomarket$profile31938.cljs$lang$type = true;

biomarket.profile.t_biomarket$profile31938.cljs$lang$ctorStr = "biomarket.profile/t_biomarket$profile31938";

biomarket.profile.t_biomarket$profile31938.cljs$lang$ctorPrWriter = (function (this__26390__auto__,writer__26391__auto__,opt__26392__auto__){
return cljs.core._write.call(null,writer__26391__auto__,"biomarket.profile/t_biomarket$profile31938");
});

biomarket.profile.__GT_t_biomarket$profile31938 = (function biomarket$profile$profile_view_$___GT_t_biomarket$profile31938(profile_view__$1,___$1,owner__$1,meta31939){
return (new biomarket.profile.t_biomarket$profile31938(profile_view__$1,___$1,owner__$1,meta31939));
});

}

return (new biomarket.profile.t_biomarket$profile31938(biomarket$profile$profile_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=profile.js.map