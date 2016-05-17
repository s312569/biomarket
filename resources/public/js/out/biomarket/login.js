// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.login');
goog.require('cljs.core');
goog.require('biomarket.utilities');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('om.core');
biomarket.login.user_exists_QMARK_ = (function biomarket$login$user_exists_QMARK_(owner,email){
var h = (function (p__30776){
var map__30777 = p__30776;
var map__30777__$1 = ((((!((map__30777 == null)))?((((map__30777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30777):map__30777);
var status = cljs.core.get.call(null,map__30777__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var id = cljs.core.get.call(null,map__30777__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var result = cljs.core.get.call(null,map__30777__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core.truth_((function (){var and__22851__auto__ = cljs.core._EQ_.call(null,"success",status);
if(and__22851__auto__){
return result;
} else {
return and__22851__auto__;
}
})())){
var ni = cljs.core.update_in.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"invalid","invalid",412869516)], null),((function (map__30777,map__30777__$1,status,id,result){
return (function (p1__30772_SHARP_){
if(p1__30772_SHARP_ === false){
return cljs.core.list("An account for that email already exists.");
} else {
return cljs.core.cons.call(null,"An account for that email already exists.",p1__30772_SHARP_);
}
});})(map__30777,map__30777__$1,status,id,result))
);
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),ni);
} else {
return null;
}
});
return biomarket.utilities.post_params.call(null,"/user-exists",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),email], null),h);
});
biomarket.login.rinputs = (function biomarket$login$rinputs(owner){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fname","fname",1500291491),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"ph","ph",-1483583977),"First name",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"fname",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__30779_SHARP_){
return (cljs.core.count.call(null,p1__30779_SHARP_) > (2));
}),"First name must be greater than two characters."], null)], null)], null),new cljs.core.Keyword(null,"sname","sname",-1950917667),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"ph","ph",-1483583977),"Second name",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"sname",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__30780_SHARP_){
return (cljs.core.count.call(null,p1__30780_SHARP_) > (2));
}),"Second name must be greater than two characters."], null)], null)], null),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"ph","ph",-1483583977),"Email",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"email",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__30781_SHARP_){
return (cljs.core.count.call(null,p1__30781_SHARP_) > (2));
}),"Email must be greater than two characters."], null)], null)], null),new cljs.core.Keyword(null,"password1","password1",-1551287478),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"ph","ph",-1483583977),"Password",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"password1",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__30782_SHARP_){
return (cljs.core.count.call(null,p1__30782_SHARP_) > (6));
}),"Password1 must be longer than six characters."], null)], null)], null),new cljs.core.Keyword(null,"password2","password2",557827521),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"ph","ph",-1483583977),"Re-enter password",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"password2",new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null);
});
biomarket.login.register_display = (function biomarket$login$register_display(inputs,owner){
if(typeof biomarket.login.t_biomarket$login30788 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.login.t_biomarket$login30788 = (function (register_display,inputs,owner,meta30789){
this.register_display = register_display;
this.inputs = inputs;
this.owner = owner;
this.meta30789 = meta30789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.login.t_biomarket$login30788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30790,meta30789__$1){
var self__ = this;
var _30790__$1 = this;
return (new biomarket.login.t_biomarket$login30788(self__.register_display,self__.inputs,self__.owner,meta30789__$1));
});

biomarket.login.t_biomarket$login30788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30790){
var self__ = this;
var _30790__$1 = this;
return self__.meta30789;
});

biomarket.login.t_biomarket$login30788.prototype.om$core$IRender$ = true;

biomarket.login.t_biomarket$login30788.prototype.om$core$IRender$render$arity$1 = (function (this__25822__auto__){
var self__ = this;
var this__25822__auto____$1 = this;
return React.DOM.div({"className": "pure-u-1-3", "style": {"text-align": "center"}},React.DOM.form({"method": "POST", "action": "/signup", "className": "pure-form"},cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (this__25822__auto____$1){
return (function (p1__30783_SHARP_){
return om.core.build.call(null,biomarket.utilities.input,cljs.core.conj.call(null,p1__30783_SHARP_,new cljs.core.Keyword("biomarket.login","inputd","biomarket.login/inputd",-1574274302)));
});})(this__25822__auto____$1))
,self__.inputs)),((cljs.core.every_QMARK_.call(null,((function (this__25822__auto____$1){
return (function (p1__30784_SHARP_){
return (new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(p1__30784_SHARP_) == null);
});})(this__25822__auto____$1))
,cljs.core.vals.call(null,self__.inputs)))?om.core.build.call(null,biomarket.utilities.padded_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10px","Register"], null)):om.core.build.call(null,biomarket.utilities.padded_button_disabled,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10px","Register"], null)))));
});

biomarket.login.t_biomarket$login30788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"register-display","register-display",1686240990,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta30789","meta30789",-1500592541,null)], null);
});

biomarket.login.t_biomarket$login30788.cljs$lang$type = true;

biomarket.login.t_biomarket$login30788.cljs$lang$ctorStr = "biomarket.login/t_biomarket$login30788";

biomarket.login.t_biomarket$login30788.cljs$lang$ctorPrWriter = (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"biomarket.login/t_biomarket$login30788");
});

biomarket.login.__GT_t_biomarket$login30788 = (function biomarket$login$register_display_$___GT_t_biomarket$login30788(register_display__$1,inputs__$1,owner__$1,meta30789){
return (new biomarket.login.t_biomarket$login30788(register_display__$1,inputs__$1,owner__$1,meta30789));
});

}

return (new biomarket.login.t_biomarket$login30788(biomarket$login$register_display,inputs,owner,null));
});
biomarket.login.or_table = (function biomarket$login$or_table(_,owner){
if(typeof biomarket.login.t_biomarket$login30794 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.login.t_biomarket$login30794 = (function (or_table,_,owner,meta30795){
this.or_table = or_table;
this._ = _;
this.owner = owner;
this.meta30795 = meta30795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.login.t_biomarket$login30794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30796,meta30795__$1){
var self__ = this;
var _30796__$1 = this;
return (new biomarket.login.t_biomarket$login30794(self__.or_table,self__._,self__.owner,meta30795__$1));
});

biomarket.login.t_biomarket$login30794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30796){
var self__ = this;
var _30796__$1 = this;
return self__.meta30795;
});

biomarket.login.t_biomarket$login30794.prototype.om$core$IRender$ = true;

biomarket.login.t_biomarket$login30794.prototype.om$core$IRender$render$arity$1 = (function (this__25822__auto__){
var self__ = this;
var this__25822__auto____$1 = this;
return React.DOM.table({"width": "100%"},React.DOM.tr(null,React.DOM.td({"width": "40%"},React.DOM.hr(null)),React.DOM.td({"width": "10%"},React.DOM.p({"style": {"font-style": "italic", "line-height": "4em"}},"or")),React.DOM.td({"width": "40%"},React.DOM.hr(null))));
});

biomarket.login.t_biomarket$login30794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"or-table","or-table",-238429391,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta30795","meta30795",-201553929,null)], null);
});

biomarket.login.t_biomarket$login30794.cljs$lang$type = true;

biomarket.login.t_biomarket$login30794.cljs$lang$ctorStr = "biomarket.login/t_biomarket$login30794";

biomarket.login.t_biomarket$login30794.cljs$lang$ctorPrWriter = (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"biomarket.login/t_biomarket$login30794");
});

biomarket.login.__GT_t_biomarket$login30794 = (function biomarket$login$or_table_$___GT_t_biomarket$login30794(or_table__$1,___$1,owner__$1,meta30795){
return (new biomarket.login.t_biomarket$login30794(or_table__$1,___$1,owner__$1,meta30795));
});

}

return (new biomarket.login.t_biomarket$login30794(biomarket$login$or_table,_,owner,null));
});
biomarket.login.login_display = (function biomarket$login$login_display(inputs,owner){
if(typeof biomarket.login.t_biomarket$login30801 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.login.t_biomarket$login30801 = (function (login_display,inputs,owner,meta30802){
this.login_display = login_display;
this.inputs = inputs;
this.owner = owner;
this.meta30802 = meta30802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.login.t_biomarket$login30801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30803,meta30802__$1){
var self__ = this;
var _30803__$1 = this;
return (new biomarket.login.t_biomarket$login30801(self__.login_display,self__.inputs,self__.owner,meta30802__$1));
});

biomarket.login.t_biomarket$login30801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30803){
var self__ = this;
var _30803__$1 = this;
return self__.meta30802;
});

biomarket.login.t_biomarket$login30801.prototype.om$core$IRender$ = true;

biomarket.login.t_biomarket$login30801.prototype.om$core$IRender$render$arity$1 = (function (this__25822__auto__){
var self__ = this;
var this__25822__auto____$1 = this;
return React.DOM.div({"className": "pure-u-1-3", "style": {"text-align": "center"}},React.DOM.form({"method": "POST", "action": "/login", "className": "pure-form"},cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (this__25822__auto____$1){
return (function (p1__30797_SHARP_){
return om.core.build.call(null,biomarket.utilities.input,cljs.core.conj.call(null,p1__30797_SHARP_,new cljs.core.Keyword("biomarket.login","inputd","biomarket.login/inputd",-1574274302)));
});})(this__25822__auto____$1))
,self__.inputs)),om.core.build.call(null,biomarket.utilities.padded_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10px","Login"], null))),om.core.build.call(null,biomarket.login.or_table,null),om.core.build.call(null,biomarket.utilities.padded_button,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10px","Register",((function (this__25822__auto____$1){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"register","register",1968522516));
});})(this__25822__auto____$1))
], null)));
});

biomarket.login.t_biomarket$login30801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"login-display","login-display",-1891436065,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta30802","meta30802",-1787471013,null)], null);
});

biomarket.login.t_biomarket$login30801.cljs$lang$type = true;

biomarket.login.t_biomarket$login30801.cljs$lang$ctorStr = "biomarket.login/t_biomarket$login30801";

biomarket.login.t_biomarket$login30801.cljs$lang$ctorPrWriter = (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"biomarket.login/t_biomarket$login30801");
});

biomarket.login.__GT_t_biomarket$login30801 = (function biomarket$login$login_display_$___GT_t_biomarket$login30801(login_display__$1,inputs__$1,owner__$1,meta30802){
return (new biomarket.login.t_biomarket$login30801(login_display__$1,inputs__$1,owner__$1,meta30802));
});

}

return (new biomarket.login.t_biomarket$login30801(biomarket$login$login_display,inputs,owner,null));
});
cljs.core._add_method.call(null,biomarket.utilities.get_input,new cljs.core.Keyword(null,"password2","password2",557827521),(function (owner,p__30804){
var map__30805 = p__30804;
var map__30805__$1 = ((((!((map__30805 == null)))?((((map__30805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30805):map__30805);
var fname = cljs.core.get.call(null,map__30805__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__30805__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var inputs = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858));
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,inputs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password1","password1",-1551287478),new cljs.core.Keyword(null,"value","value",305978217)], null)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element))){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.assoc.call(null,inputs,fname,cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"invalid","invalid",412869516),null)));
} else {
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.assoc.call(null,inputs,fname,cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"invalid","invalid",412869516),cljs.core.list("Passwords don't match."))));
}
}));
biomarket.login.test_username_exists = (function biomarket$login$test_username_exists(owner,p__30807){
var map__30810 = p__30807;
var map__30810__$1 = ((((!((map__30810 == null)))?((((map__30810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30810):map__30810);
var fname = cljs.core.get.call(null,map__30810__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__30810__$1,new cljs.core.Keyword(null,"element","element",1974019749));
if(cljs.core._EQ_.call(null,fname,new cljs.core.Keyword(null,"email","email",1415816706))){
return biomarket.login.user_exists_QMARK_.call(null,owner,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element));
} else {
return null;
}
});
biomarket.login.login = (function biomarket$login$login(_,owner){
if(typeof biomarket.login.t_biomarket$login30821 !== 'undefined'){
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
biomarket.login.t_biomarket$login30821 = (function (login,_,owner,meta30822){
this.login = login;
this._ = _;
this.owner = owner;
this.meta30822 = meta30822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.login.t_biomarket$login30821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30823,meta30822__$1){
var self__ = this;
var _30823__$1 = this;
return (new biomarket.login.t_biomarket$login30821(self__.login,self__._,self__.owner,meta30822__$1));
});

biomarket.login.t_biomarket$login30821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30823){
var self__ = this;
var _30823__$1 = this;
return self__.meta30822;
});

biomarket.login.t_biomarket$login30821.prototype.om$core$IInitState$ = true;

biomarket.login.t_biomarket$login30821.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Email address",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"title","title",636505583),"Email",new cljs.core.Keyword(null,"name","name",1843675177),"username",new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"no-icon","no-icon",-1734606666),new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"title","title",636505583),"Password",new cljs.core.Keyword(null,"name","name",1843675177),"password",new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"no-icon","no-icon",-1734606666),new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null)], null);
});

biomarket.login.t_biomarket$login30821.prototype.om$core$IWillMount$ = true;

biomarket.login.t_biomarket$login30821.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),((function (___$2){
return (function (o,___$3){
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"register","register",1968522516));

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),biomarket.login.rinputs.call(null,self__.owner));
});})(___$2))
);

return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.login","inputd","biomarket.login/inputd",-1574274302),((function (___$2){
return (function (o,p__30824){
var map__30825 = p__30824;
var map__30825__$1 = ((((!((map__30825 == null)))?((((map__30825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30825):map__30825);
var data = cljs.core.get.call(null,map__30825__$1,new cljs.core.Keyword(null,"data","data",-232669377));
biomarket.utilities.get_input.call(null,o,data);

return biomarket.login.test_username_exists.call(null,o,data);
});})(___$2))
);
});

biomarket.login.t_biomarket$login30821.prototype.om$core$IWillUnmount$ = true;

biomarket.login.t_biomarket$login30821.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.login","inputd","biomarket.login/inputd",-1574274302),new cljs.core.Keyword(null,"state","state",-1988618099));
});

biomarket.login.t_biomarket$login30821.prototype.om$core$IRenderState$ = true;

biomarket.login.t_biomarket$login30821.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__30827){
var self__ = this;
var map__30828 = p__30827;
var map__30828__$1 = ((((!((map__30828 == null)))?((((map__30828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30828):map__30828);
var inputs = cljs.core.get.call(null,map__30828__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var state = cljs.core.get.call(null,map__30828__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ___$2 = this;
return React.DOM.div({"className": "pure-g", "style": {"padding-top": "15em"}},React.DOM.div({"className": "pure-u-1"},React.DOM.div({"className": "pure-u-1-3"}),((cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"login","login",55217519)))?om.core.build.call(null,biomarket.login.login_display,inputs):om.core.build.call(null,biomarket.login.register_display,inputs)),React.DOM.div({"className": "pure-u-1-3"})));
});

biomarket.login.t_biomarket$login30821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"login","login",1695749046,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta30822","meta30822",1372062122,null)], null);
});

biomarket.login.t_biomarket$login30821.cljs$lang$type = true;

biomarket.login.t_biomarket$login30821.cljs$lang$ctorStr = "biomarket.login/t_biomarket$login30821";

biomarket.login.t_biomarket$login30821.cljs$lang$ctorPrWriter = (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"biomarket.login/t_biomarket$login30821");
});

biomarket.login.__GT_t_biomarket$login30821 = (function biomarket$login$login_$___GT_t_biomarket$login30821(login__$1,___$1,owner__$1,meta30822){
return (new biomarket.login.t_biomarket$login30821(login__$1,___$1,owner__$1,meta30822));
});

}

return (new biomarket.login.t_biomarket$login30821(biomarket$login$login,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.login.init = (function biomarket$login$init(){
return om.core.root.call(null,biomarket.login.login,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app"),new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.deref.call(null,biomarket.utilities.app_state)], null));
});
goog.exportSymbol('biomarket.login.init', biomarket.login.init);

//# sourceMappingURL=login.js.map