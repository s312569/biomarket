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
var h = (function (p__157549){
var map__157550 = p__157549;
var map__157550__$1 = ((((!((map__157550 == null)))?((((map__157550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157550):map__157550);
var status = cljs.core.get.call(null,map__157550__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var id = cljs.core.get.call(null,map__157550__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var result = cljs.core.get.call(null,map__157550__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core.truth_((function (){var and__25828__auto__ = cljs.core._EQ_.call(null,"success",status);
if(and__25828__auto__){
return result;
} else {
return and__25828__auto__;
}
})())){
var ni = cljs.core.update_in.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"invalid","invalid",412869516)], null),((function (map__157550,map__157550__$1,status,id,result){
return (function (p1__157545_SHARP_){
if(p1__157545_SHARP_ === false){
return cljs.core.list("An account for that email already exists.");
} else {
return cljs.core.cons.call(null,"An account for that email already exists.",p1__157545_SHARP_);
}
});})(map__157550,map__157550__$1,status,id,result))
);
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),ni);
} else {
return null;
}
});
return biomarket.utilities.post_params.call(null,"/user-exists",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),email], null),h);
});
biomarket.login.rinputs = (function biomarket$login$rinputs(owner){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fname","fname",1500291491),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"ph","ph",-1483583977),"First name",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"fname",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__157552_SHARP_){
return (cljs.core.count.call(null,p1__157552_SHARP_) > (2));
}),"First name must be greater than two characters."], null)], null)], null),new cljs.core.Keyword(null,"sname","sname",-1950917667),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"ph","ph",-1483583977),"Second name",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"sname",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__157553_SHARP_){
return (cljs.core.count.call(null,p1__157553_SHARP_) > (2));
}),"Second name must be greater than two characters."], null)], null)], null),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"ph","ph",-1483583977),"Email",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"email",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__157554_SHARP_){
return (cljs.core.count.call(null,p1__157554_SHARP_) > (2));
}),"Email must be greater than two characters."], null)], null)], null),new cljs.core.Keyword(null,"password1","password1",-1551287478),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"ph","ph",-1483583977),"Password",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"password1",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__157555_SHARP_){
return (cljs.core.count.call(null,p1__157555_SHARP_) > (6));
}),"Password1 must be longer than six characters."], null)], null)], null),new cljs.core.Keyword(null,"password2","password2",557827521),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"ph","ph",-1483583977),"Re-enter password",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"name","name",1843675177),"password2",new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null);
});
biomarket.login.register_display = (function biomarket$login$register_display(inputs,owner){
if(typeof biomarket.login.t_biomarket$login157561 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.login.t_biomarket$login157561 = (function (register_display,inputs,owner,meta157562){
this.register_display = register_display;
this.inputs = inputs;
this.owner = owner;
this.meta157562 = meta157562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.login.t_biomarket$login157561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_157563,meta157562__$1){
var self__ = this;
var _157563__$1 = this;
return (new biomarket.login.t_biomarket$login157561(self__.register_display,self__.inputs,self__.owner,meta157562__$1));
});

biomarket.login.t_biomarket$login157561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_157563){
var self__ = this;
var _157563__$1 = this;
return self__.meta157562;
});

biomarket.login.t_biomarket$login157561.prototype.om$core$IRender$ = true;

biomarket.login.t_biomarket$login157561.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.div({"className": "pure-u-1-3", "style": {"text-align": "center"}},React.DOM.form({"method": "POST", "action": "/signup", "className": "pure-form"},cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (this__36785__auto____$1){
return (function (p1__157556_SHARP_){
return om.core.build.call(null,biomarket.utilities.input,cljs.core.conj.call(null,p1__157556_SHARP_,new cljs.core.Keyword("biomarket.login","inputd","biomarket.login/inputd",-1574274302)));
});})(this__36785__auto____$1))
,self__.inputs)),((cljs.core.every_QMARK_.call(null,((function (this__36785__auto____$1){
return (function (p1__157557_SHARP_){
return (new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(p1__157557_SHARP_) == null);
});})(this__36785__auto____$1))
,cljs.core.vals.call(null,self__.inputs)))?om.core.build.call(null,biomarket.utilities.padded_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10px","Register"], null)):om.core.build.call(null,biomarket.utilities.padded_button_disabled,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10px","Register"], null)))));
});

biomarket.login.t_biomarket$login157561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"register-display","register-display",1686240990,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta157562","meta157562",-1454710445,null)], null);
});

biomarket.login.t_biomarket$login157561.cljs$lang$type = true;

biomarket.login.t_biomarket$login157561.cljs$lang$ctorStr = "biomarket.login/t_biomarket$login157561";

biomarket.login.t_biomarket$login157561.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.login/t_biomarket$login157561");
});

biomarket.login.__GT_t_biomarket$login157561 = (function biomarket$login$register_display_$___GT_t_biomarket$login157561(register_display__$1,inputs__$1,owner__$1,meta157562){
return (new biomarket.login.t_biomarket$login157561(register_display__$1,inputs__$1,owner__$1,meta157562));
});

}

return (new biomarket.login.t_biomarket$login157561(biomarket$login$register_display,inputs,owner,null));
});
biomarket.login.or_table = (function biomarket$login$or_table(_,owner){
if(typeof biomarket.login.t_biomarket$login157567 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.login.t_biomarket$login157567 = (function (or_table,_,owner,meta157568){
this.or_table = or_table;
this._ = _;
this.owner = owner;
this.meta157568 = meta157568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.login.t_biomarket$login157567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_157569,meta157568__$1){
var self__ = this;
var _157569__$1 = this;
return (new biomarket.login.t_biomarket$login157567(self__.or_table,self__._,self__.owner,meta157568__$1));
});

biomarket.login.t_biomarket$login157567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_157569){
var self__ = this;
var _157569__$1 = this;
return self__.meta157568;
});

biomarket.login.t_biomarket$login157567.prototype.om$core$IRender$ = true;

biomarket.login.t_biomarket$login157567.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.table({"width": "100%"},React.DOM.tr(null,React.DOM.td({"width": "40%"},React.DOM.hr(null)),React.DOM.td({"width": "10%"},React.DOM.p({"style": {"font-style": "italic", "line-height": "4em"}},"or")),React.DOM.td({"width": "40%"},React.DOM.hr(null))));
});

biomarket.login.t_biomarket$login157567.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"or-table","or-table",-238429391,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta157568","meta157568",1831170125,null)], null);
});

biomarket.login.t_biomarket$login157567.cljs$lang$type = true;

biomarket.login.t_biomarket$login157567.cljs$lang$ctorStr = "biomarket.login/t_biomarket$login157567";

biomarket.login.t_biomarket$login157567.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.login/t_biomarket$login157567");
});

biomarket.login.__GT_t_biomarket$login157567 = (function biomarket$login$or_table_$___GT_t_biomarket$login157567(or_table__$1,___$1,owner__$1,meta157568){
return (new biomarket.login.t_biomarket$login157567(or_table__$1,___$1,owner__$1,meta157568));
});

}

return (new biomarket.login.t_biomarket$login157567(biomarket$login$or_table,_,owner,null));
});
biomarket.login.login_display = (function biomarket$login$login_display(inputs,owner){
if(typeof biomarket.login.t_biomarket$login157574 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.login.t_biomarket$login157574 = (function (login_display,inputs,owner,meta157575){
this.login_display = login_display;
this.inputs = inputs;
this.owner = owner;
this.meta157575 = meta157575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.login.t_biomarket$login157574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_157576,meta157575__$1){
var self__ = this;
var _157576__$1 = this;
return (new biomarket.login.t_biomarket$login157574(self__.login_display,self__.inputs,self__.owner,meta157575__$1));
});

biomarket.login.t_biomarket$login157574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_157576){
var self__ = this;
var _157576__$1 = this;
return self__.meta157575;
});

biomarket.login.t_biomarket$login157574.prototype.om$core$IRender$ = true;

biomarket.login.t_biomarket$login157574.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.div({"className": "pure-u-1-3", "style": {"text-align": "center"}},React.DOM.form({"method": "POST", "action": "/login", "className": "pure-form"},cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (this__36785__auto____$1){
return (function (p1__157570_SHARP_){
return om.core.build.call(null,biomarket.utilities.input,cljs.core.conj.call(null,p1__157570_SHARP_,new cljs.core.Keyword("biomarket.login","inputd","biomarket.login/inputd",-1574274302)));
});})(this__36785__auto____$1))
,self__.inputs)),om.core.build.call(null,biomarket.utilities.padded_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10px","Login"], null))),om.core.build.call(null,biomarket.login.or_table,null),om.core.build.call(null,biomarket.utilities.padded_button,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10px","Register",((function (this__36785__auto____$1){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"register","register",1968522516));
});})(this__36785__auto____$1))
], null)));
});

biomarket.login.t_biomarket$login157574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"login-display","login-display",-1891436065,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta157575","meta157575",186816657,null)], null);
});

biomarket.login.t_biomarket$login157574.cljs$lang$type = true;

biomarket.login.t_biomarket$login157574.cljs$lang$ctorStr = "biomarket.login/t_biomarket$login157574";

biomarket.login.t_biomarket$login157574.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.login/t_biomarket$login157574");
});

biomarket.login.__GT_t_biomarket$login157574 = (function biomarket$login$login_display_$___GT_t_biomarket$login157574(login_display__$1,inputs__$1,owner__$1,meta157575){
return (new biomarket.login.t_biomarket$login157574(login_display__$1,inputs__$1,owner__$1,meta157575));
});

}

return (new biomarket.login.t_biomarket$login157574(biomarket$login$login_display,inputs,owner,null));
});
cljs.core._add_method.call(null,biomarket.utilities.get_input,new cljs.core.Keyword(null,"password2","password2",557827521),(function (owner,p__157577){
var map__157578 = p__157577;
var map__157578__$1 = ((((!((map__157578 == null)))?((((map__157578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157578):map__157578);
var fname = cljs.core.get.call(null,map__157578__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__157578__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var inputs = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858));
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,inputs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password1","password1",-1551287478),new cljs.core.Keyword(null,"value","value",305978217)], null)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element))){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.assoc.call(null,inputs,fname,cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"invalid","invalid",412869516),null)));
} else {
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.assoc.call(null,inputs,fname,cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"invalid","invalid",412869516),cljs.core.list("Passwords don't match."))));
}
}));
biomarket.login.test_username_exists = (function biomarket$login$test_username_exists(owner,p__157580){
var map__157583 = p__157580;
var map__157583__$1 = ((((!((map__157583 == null)))?((((map__157583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157583):map__157583);
var fname = cljs.core.get.call(null,map__157583__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__157583__$1,new cljs.core.Keyword(null,"element","element",1974019749));
if(cljs.core._EQ_.call(null,fname,new cljs.core.Keyword(null,"email","email",1415816706))){
return biomarket.login.user_exists_QMARK_.call(null,owner,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element));
} else {
return null;
}
});
biomarket.login.login = (function biomarket$login$login(_,owner){
if(typeof biomarket.login.t_biomarket$login157594 !== 'undefined'){
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
biomarket.login.t_biomarket$login157594 = (function (login,_,owner,meta157595){
this.login = login;
this._ = _;
this.owner = owner;
this.meta157595 = meta157595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.login.t_biomarket$login157594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_157596,meta157595__$1){
var self__ = this;
var _157596__$1 = this;
return (new biomarket.login.t_biomarket$login157594(self__.login,self__._,self__.owner,meta157595__$1));
});

biomarket.login.t_biomarket$login157594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_157596){
var self__ = this;
var _157596__$1 = this;
return self__.meta157595;
});

biomarket.login.t_biomarket$login157594.prototype.om$core$IInitState$ = true;

biomarket.login.t_biomarket$login157594.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Email address",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"title","title",636505583),"Email",new cljs.core.Keyword(null,"name","name",1843675177),"username",new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"no-icon","no-icon",-1734606666),new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"title","title",636505583),"Password",new cljs.core.Keyword(null,"name","name",1843675177),"password",new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"no-icon","no-icon",-1734606666),new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null)], null);
});

biomarket.login.t_biomarket$login157594.prototype.om$core$IWillMount$ = true;

biomarket.login.t_biomarket$login157594.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),((function (___$2){
return (function (o,___$3){
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"register","register",1968522516));

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),biomarket.login.rinputs.call(null,self__.owner));
});})(___$2))
);

return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.login","inputd","biomarket.login/inputd",-1574274302),((function (___$2){
return (function (o,p__157597){
var map__157598 = p__157597;
var map__157598__$1 = ((((!((map__157598 == null)))?((((map__157598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157598):map__157598);
var data = cljs.core.get.call(null,map__157598__$1,new cljs.core.Keyword(null,"data","data",-232669377));
biomarket.utilities.get_input.call(null,o,data);

return biomarket.login.test_username_exists.call(null,o,data);
});})(___$2))
);
});

biomarket.login.t_biomarket$login157594.prototype.om$core$IWillUnmount$ = true;

biomarket.login.t_biomarket$login157594.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.login","inputd","biomarket.login/inputd",-1574274302),new cljs.core.Keyword(null,"state","state",-1988618099));
});

biomarket.login.t_biomarket$login157594.prototype.om$core$IRenderState$ = true;

biomarket.login.t_biomarket$login157594.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__157600){
var self__ = this;
var map__157601 = p__157600;
var map__157601__$1 = ((((!((map__157601 == null)))?((((map__157601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157601):map__157601);
var inputs = cljs.core.get.call(null,map__157601__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var state = cljs.core.get.call(null,map__157601__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ___$2 = this;
return React.DOM.div({"className": "pure-g", "style": {"padding-top": "15em"}},React.DOM.div({"className": "pure-u-1"},React.DOM.div({"className": "pure-u-1-3"}),((cljs.core._EQ_.call(null,state,new cljs.core.Keyword(null,"login","login",55217519)))?om.core.build.call(null,biomarket.login.login_display,inputs):om.core.build.call(null,biomarket.login.register_display,inputs)),React.DOM.div({"className": "pure-u-1-3"})));
});

biomarket.login.t_biomarket$login157594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"login","login",1695749046,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta157595","meta157595",760621488,null)], null);
});

biomarket.login.t_biomarket$login157594.cljs$lang$type = true;

biomarket.login.t_biomarket$login157594.cljs$lang$ctorStr = "biomarket.login/t_biomarket$login157594";

biomarket.login.t_biomarket$login157594.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.login/t_biomarket$login157594");
});

biomarket.login.__GT_t_biomarket$login157594 = (function biomarket$login$login_$___GT_t_biomarket$login157594(login__$1,___$1,owner__$1,meta157595){
return (new biomarket.login.t_biomarket$login157594(login__$1,___$1,owner__$1,meta157595));
});

}

return (new biomarket.login.t_biomarket$login157594(biomarket$login$login,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.login.init = (function biomarket$login$init(){
return om.core.root.call(null,biomarket.login.login,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app"),new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.deref.call(null,biomarket.server.app_state)], null));
});
goog.exportSymbol('biomarket.login.init', biomarket.login.init);

//# sourceMappingURL=login.js.map