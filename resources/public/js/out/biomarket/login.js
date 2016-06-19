// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.login');
goog.require('cljs.core');
goog.require('biomarket.utilities');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('biomarket.server');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('om.core');
biomarket.login.user_exists_QMARK_ = (function biomarket$login$user_exists_QMARK_(owner,email){
var h = (function (p__58779){
var map__58780 = p__58779;
var map__58780__$1 = ((((!((map__58780 == null)))?((((map__58780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58780):map__58780);
var status = cljs.core.get.call(null,map__58780__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var id = cljs.core.get.call(null,map__58780__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var result = cljs.core.get.call(null,map__58780__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core.truth_((function (){var and__25886__auto__ = cljs.core._EQ_.call(null,"success",status);
if(and__25886__auto__){
return result;
} else {
return and__25886__auto__;
}
})())){
var ni = cljs.core.update_in.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"invalid","invalid",412869516)], null),((function (map__58780,map__58780__$1,status,id,result){
return (function (p1__58775_SHARP_){
if(p1__58775_SHARP_ === false){
return cljs.core.list("An account for that email already exists.");
} else {
return cljs.core.cons.call(null,"An account for that email already exists.",p1__58775_SHARP_);
}
});})(map__58780,map__58780__$1,status,id,result))
);
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),ni);
} else {
return null;
}
});
return biomarket.utilities.post_params.call(null,"/user-exists",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),email], null),h);
});
biomarket.login.rinputs = (function biomarket$login$rinputs(owner){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fname","fname",1500291491),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"ph","ph",-1483583977),"First name",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"fname",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__58782_SHARP_){
return (cljs.core.count.call(null,p1__58782_SHARP_) > (2));
}),"First name must be greater than two characters."], null)], null)], null),new cljs.core.Keyword(null,"sname","sname",-1950917667),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"ph","ph",-1483583977),"Second name",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"sname",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__58783_SHARP_){
return (cljs.core.count.call(null,p1__58783_SHARP_) > (2));
}),"Second name must be greater than two characters."], null)], null)], null),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"ph","ph",-1483583977),"Email",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"email",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__58784_SHARP_){
return (cljs.core.count.call(null,p1__58784_SHARP_) > (2));
}),"Email must be greater than two characters."], null)], null)], null),new cljs.core.Keyword(null,"password1","password1",-1551287478),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"ph","ph",-1483583977),"Password",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"password1",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__58785_SHARP_){
return (cljs.core.count.call(null,p1__58785_SHARP_) > (6));
}),"Password1 must be longer than six characters."], null)], null)], null),new cljs.core.Keyword(null,"password2","password2",557827521),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"ph","ph",-1483583977),"Re-enter password",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"password2",new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null);
});
biomarket.login.register_display = (function biomarket$login$register_display(inputs,owner){
if(typeof biomarket.login.t_biomarket$login58791 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.login.t_biomarket$login58791 = (function (register_display,inputs,owner,meta58792){
this.register_display = register_display;
this.inputs = inputs;
this.owner = owner;
this.meta58792 = meta58792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.login.t_biomarket$login58791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58793,meta58792__$1){
var self__ = this;
var _58793__$1 = this;
return (new biomarket.login.t_biomarket$login58791(self__.register_display,self__.inputs,self__.owner,meta58792__$1));
});

biomarket.login.t_biomarket$login58791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58793){
var self__ = this;
var _58793__$1 = this;
return self__.meta58792;
});

biomarket.login.t_biomarket$login58791.prototype.om$core$IRender$ = true;

biomarket.login.t_biomarket$login58791.prototype.om$core$IRender$render$arity$1 = (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return React.DOM.div({"className": "pure-u-1-3", "style": {"text-align": "center"}},React.DOM.form({"method": "POST", "action": "/signup", "className": "pure-form"},cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (this__28872__auto____$1){
return (function (p1__58786_SHARP_){
return om.core.build.call(null,biomarket.utilities.input,cljs.core.conj.call(null,p1__58786_SHARP_,new cljs.core.Keyword("biomarket.login","inputd","biomarket.login/inputd",-1574274302)));
});})(this__28872__auto____$1))
,self__.inputs)),((cljs.core.every_QMARK_.call(null,((function (this__28872__auto____$1){
return (function (p1__58787_SHARP_){
return (new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(p1__58787_SHARP_) == null);
});})(this__28872__auto____$1))
,cljs.core.vals.call(null,self__.inputs)))?om.core.build.call(null,biomarket.utilities.padded_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10px","Register"], null)):om.core.build.call(null,biomarket.utilities.padded_button_disabled,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10px","Register"], null)))));
});

biomarket.login.t_biomarket$login58791.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"register-display","register-display",1686240990,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta58792","meta58792",-54601384,null)], null);
});

biomarket.login.t_biomarket$login58791.cljs$lang$type = true;

biomarket.login.t_biomarket$login58791.cljs$lang$ctorStr = "biomarket.login/t_biomarket$login58791";

biomarket.login.t_biomarket$login58791.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.login/t_biomarket$login58791");
});

biomarket.login.__GT_t_biomarket$login58791 = (function biomarket$login$register_display_$___GT_t_biomarket$login58791(register_display__$1,inputs__$1,owner__$1,meta58792){
return (new biomarket.login.t_biomarket$login58791(register_display__$1,inputs__$1,owner__$1,meta58792));
});

}

return (new biomarket.login.t_biomarket$login58791(biomarket$login$register_display,inputs,owner,null));
});
biomarket.login.or_table = (function biomarket$login$or_table(_,owner){
if(typeof biomarket.login.t_biomarket$login58797 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.login.t_biomarket$login58797 = (function (or_table,_,owner,meta58798){
this.or_table = or_table;
this._ = _;
this.owner = owner;
this.meta58798 = meta58798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.login.t_biomarket$login58797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58799,meta58798__$1){
var self__ = this;
var _58799__$1 = this;
return (new biomarket.login.t_biomarket$login58797(self__.or_table,self__._,self__.owner,meta58798__$1));
});

biomarket.login.t_biomarket$login58797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58799){
var self__ = this;
var _58799__$1 = this;
return self__.meta58798;
});

biomarket.login.t_biomarket$login58797.prototype.om$core$IRender$ = true;

biomarket.login.t_biomarket$login58797.prototype.om$core$IRender$render$arity$1 = (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return React.DOM.table({"width": "100%"},React.DOM.tr(null,React.DOM.td({"width": "40%"},React.DOM.hr(null)),React.DOM.td({"width": "10%"},React.DOM.p({"style": {"font-style": "italic", "line-height": "4em"}},"or")),React.DOM.td({"width": "40%"},React.DOM.hr(null))));
});

biomarket.login.t_biomarket$login58797.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"or-table","or-table",-238429391,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta58798","meta58798",-798621784,null)], null);
});

biomarket.login.t_biomarket$login58797.cljs$lang$type = true;

biomarket.login.t_biomarket$login58797.cljs$lang$ctorStr = "biomarket.login/t_biomarket$login58797";

biomarket.login.t_biomarket$login58797.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.login/t_biomarket$login58797");
});

biomarket.login.__GT_t_biomarket$login58797 = (function biomarket$login$or_table_$___GT_t_biomarket$login58797(or_table__$1,___$1,owner__$1,meta58798){
return (new biomarket.login.t_biomarket$login58797(or_table__$1,___$1,owner__$1,meta58798));
});

}

return (new biomarket.login.t_biomarket$login58797(biomarket$login$or_table,_,owner,null));
});
biomarket.login.login_display = (function biomarket$login$login_display(inputs,owner){
if(typeof biomarket.login.t_biomarket$login58804 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.login.t_biomarket$login58804 = (function (login_display,inputs,owner,meta58805){
this.login_display = login_display;
this.inputs = inputs;
this.owner = owner;
this.meta58805 = meta58805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.login.t_biomarket$login58804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58806,meta58805__$1){
var self__ = this;
var _58806__$1 = this;
return (new biomarket.login.t_biomarket$login58804(self__.login_display,self__.inputs,self__.owner,meta58805__$1));
});

biomarket.login.t_biomarket$login58804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58806){
var self__ = this;
var _58806__$1 = this;
return self__.meta58805;
});

biomarket.login.t_biomarket$login58804.prototype.om$core$IRender$ = true;

biomarket.login.t_biomarket$login58804.prototype.om$core$IRender$render$arity$1 = (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return React.DOM.div({"className": "pure-u-1-3", "style": {"text-align": "center"}},React.DOM.form({"method": "POST", "action": "/login", "className": "pure-form"},cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (this__28872__auto____$1){
return (function (p1__58800_SHARP_){
return om.core.build.call(null,biomarket.utilities.input,cljs.core.conj.call(null,p1__58800_SHARP_,new cljs.core.Keyword("biomarket.login","inputd","biomarket.login/inputd",-1574274302)));
});})(this__28872__auto____$1))
,self__.inputs)),om.core.build.call(null,biomarket.utilities.padded_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10px","Login"], null))),om.core.build.call(null,biomarket.login.or_table,null),om.core.build.call(null,biomarket.utilities.padded_button,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10px","Register",((function (this__28872__auto____$1){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"register","register",1968522516));
});})(this__28872__auto____$1))
], null)));
});

biomarket.login.t_biomarket$login58804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"login-display","login-display",-1891436065,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta58805","meta58805",-2058628515,null)], null);
});

biomarket.login.t_biomarket$login58804.cljs$lang$type = true;

biomarket.login.t_biomarket$login58804.cljs$lang$ctorStr = "biomarket.login/t_biomarket$login58804";

biomarket.login.t_biomarket$login58804.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.login/t_biomarket$login58804");
});

biomarket.login.__GT_t_biomarket$login58804 = (function biomarket$login$login_display_$___GT_t_biomarket$login58804(login_display__$1,inputs__$1,owner__$1,meta58805){
return (new biomarket.login.t_biomarket$login58804(login_display__$1,inputs__$1,owner__$1,meta58805));
});

}

return (new biomarket.login.t_biomarket$login58804(biomarket$login$login_display,inputs,owner,null));
});
cljs.core._add_method.call(null,biomarket.utilities.get_input,new cljs.core.Keyword(null,"password2","password2",557827521),(function (owner,p__58807){
var map__58808 = p__58807;
var map__58808__$1 = ((((!((map__58808 == null)))?((((map__58808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58808):map__58808);
var fname = cljs.core.get.call(null,map__58808__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__58808__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var inputs = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858));
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,inputs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password1","password1",-1551287478),new cljs.core.Keyword(null,"value","value",305978217)], null)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element))){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.assoc.call(null,inputs,fname,cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"invalid","invalid",412869516),null)));
} else {
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.assoc.call(null,inputs,fname,cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"invalid","invalid",412869516),cljs.core.list("Passwords don't match."))));
}
}));
biomarket.login.test_username_exists = (function biomarket$login$test_username_exists(owner,p__58810){
var map__58813 = p__58810;
var map__58813__$1 = ((((!((map__58813 == null)))?((((map__58813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58813):map__58813);
var fname = cljs.core.get.call(null,map__58813__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__58813__$1,new cljs.core.Keyword(null,"element","element",1974019749));
if(cljs.core._EQ_.call(null,fname,new cljs.core.Keyword(null,"email","email",1415816706))){
return biomarket.login.user_exists_QMARK_.call(null,owner,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element));
} else {
return null;
}
});
biomarket.login.login = (function biomarket$login$login(_,owner){
if(typeof biomarket.login.t_biomarket$login58824 !== 'undefined'){
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
biomarket.login.t_biomarket$login58824 = (function (login,_,owner,meta58825){
this.login = login;
this._ = _;
this.owner = owner;
this.meta58825 = meta58825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.login.t_biomarket$login58824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58826,meta58825__$1){
var self__ = this;
var _58826__$1 = this;
return (new biomarket.login.t_biomarket$login58824(self__.login,self__._,self__.owner,meta58825__$1));
});

biomarket.login.t_biomarket$login58824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58826){
var self__ = this;
var _58826__$1 = this;
return self__.meta58825;
});

biomarket.login.t_biomarket$login58824.prototype.om$core$IInitState$ = true;

biomarket.login.t_biomarket$login58824.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Email address",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"title","title",636505583),"Email",new cljs.core.Keyword(null,"name","name",1843675177),"username",new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"no-icon","no-icon",-1734606666),new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"title","title",636505583),"Password",new cljs.core.Keyword(null,"name","name",1843675177),"password",new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"no-icon","no-icon",-1734606666),new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null)], null);
});

biomarket.login.t_biomarket$login58824.prototype.om$core$IWillMount$ = true;

biomarket.login.t_biomarket$login58824.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),((function (___$2){
return (function (o,___$3){
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"register","register",1968522516));

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),biomarket.login.rinputs.call(null,self__.owner));
});})(___$2))
);

return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.login","inputd","biomarket.login/inputd",-1574274302),((function (___$2){
return (function (o,p__58827){
var map__58828 = p__58827;
var map__58828__$1 = ((((!((map__58828 == null)))?((((map__58828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58828):map__58828);
var data = cljs.core.get.call(null,map__58828__$1,new cljs.core.Keyword(null,"data","data",-232669377));
biomarket.utilities.get_input.call(null,o,data);

return biomarket.login.test_username_exists.call(null,o,data);
});})(___$2))
);
});

biomarket.login.t_biomarket$login58824.prototype.om$core$IWillUnmount$ = true;

biomarket.login.t_biomarket$login58824.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.login","inputd","biomarket.login/inputd",-1574274302),new cljs.core.Keyword(null,"state","state",-1988618099));
});

biomarket.login.t_biomarket$login58824.prototype.om$core$IRenderState$ = true;

biomarket.login.t_biomarket$login58824.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__58830){
var self__ = this;
var map__58831 = p__58830;
var map__58831__$1 = ((((!((map__58831 == null)))?((((map__58831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58831):map__58831);
var inputs = cljs.core.get.call(null,map__58831__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var state = cljs.core.get.call(null,map__58831__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ___$2 = this;
return React.DOM.div({"className": "pure-g", "style": {"padding-top": "15em"}},React.DOM.div({"className": "pure-u-1"},React.DOM.div({"className": "pure-u-1-3"}),((cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"login","login",55217519)))?om.core.build.call(null,biomarket.login.login_display,inputs):om.core.build.call(null,biomarket.login.register_display,inputs)),React.DOM.div({"className": "pure-u-1-3"})));
});

biomarket.login.t_biomarket$login58824.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"login","login",1695749046,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta58825","meta58825",817913182,null)], null);
});

biomarket.login.t_biomarket$login58824.cljs$lang$type = true;

biomarket.login.t_biomarket$login58824.cljs$lang$ctorStr = "biomarket.login/t_biomarket$login58824";

biomarket.login.t_biomarket$login58824.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.login/t_biomarket$login58824");
});

biomarket.login.__GT_t_biomarket$login58824 = (function biomarket$login$login_$___GT_t_biomarket$login58824(login__$1,___$1,owner__$1,meta58825){
return (new biomarket.login.t_biomarket$login58824(login__$1,___$1,owner__$1,meta58825));
});

}

return (new biomarket.login.t_biomarket$login58824(biomarket$login$login,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.login.init = (function biomarket$login$init(){
return om.core.root.call(null,biomarket.login.login,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app"),new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.deref.call(null,biomarket.server.app_state)], null));
});
goog.exportSymbol('biomarket.login.init', biomarket.login.init);

//# sourceMappingURL=login.js.map