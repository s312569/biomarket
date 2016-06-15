// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.newproject');
goog.require('cljs.core');
goog.require('biomarket.utilities');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('biomarket.server');
goog.require('cljs.core.async');
goog.require('cljs_time.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('cljs_time.format');
goog.require('biomarket.skills');
goog.require('om.core');
goog.require('clojure.string');
biomarket.newproject.all_good_QMARK_ = (function biomarket$newproject$all_good_QMARK_(owner){
var b = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"basis","basis",1865819339)))))?cljs.core.update_in.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"basis","basis",1865819339)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invalid","invalid",412869516)], null),(function (_){
return cljs.core.list("Must select a payment basis.");
})):null);
var s = ((cljs.core.not.call(null,cljs.core.seq.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331))))))?cljs.core.update_in.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invalid","invalid",412869516)], null),((function (b){
return (function (_){
return cljs.core.list("Select some skills needed for the project");
});})(b))
):null);
if(cljs.core.truth_(b)){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"basis","basis",1865819339),b);
} else {
}

if(cljs.core.truth_(s)){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331),s);
} else {
}

var seq__64817_64823 = cljs.core.seq.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)));
var chunk__64818_64824 = null;
var count__64819_64825 = (0);
var i__64820_64826 = (0);
while(true){
if((i__64820_64826 < count__64819_64825)){
var vec__64821_64827 = cljs.core._nth.call(null,chunk__64818_64824,i__64820_64826);
var k_64828 = cljs.core.nth.call(null,vec__64821_64827,(0),null);
var v_64829 = cljs.core.nth.call(null,vec__64821_64827,(1),null);
biomarket.utilities.get_input.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fname","fname",1500291491),k_64828,new cljs.core.Keyword(null,"element","element",1974019749),v_64829], null));

var G__64830 = seq__64817_64823;
var G__64831 = chunk__64818_64824;
var G__64832 = count__64819_64825;
var G__64833 = (i__64820_64826 + (1));
seq__64817_64823 = G__64830;
chunk__64818_64824 = G__64831;
count__64819_64825 = G__64832;
i__64820_64826 = G__64833;
continue;
} else {
var temp__4425__auto___64834 = cljs.core.seq.call(null,seq__64817_64823);
if(temp__4425__auto___64834){
var seq__64817_64835__$1 = temp__4425__auto___64834;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64817_64835__$1)){
var c__26620__auto___64836 = cljs.core.chunk_first.call(null,seq__64817_64835__$1);
var G__64837 = cljs.core.chunk_rest.call(null,seq__64817_64835__$1);
var G__64838 = c__26620__auto___64836;
var G__64839 = cljs.core.count.call(null,c__26620__auto___64836);
var G__64840 = (0);
seq__64817_64823 = G__64837;
chunk__64818_64824 = G__64838;
count__64819_64825 = G__64839;
i__64820_64826 = G__64840;
continue;
} else {
var vec__64822_64841 = cljs.core.first.call(null,seq__64817_64835__$1);
var k_64842 = cljs.core.nth.call(null,vec__64822_64841,(0),null);
var v_64843 = cljs.core.nth.call(null,vec__64822_64841,(1),null);
biomarket.utilities.get_input.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fname","fname",1500291491),k_64842,new cljs.core.Keyword(null,"element","element",1974019749),v_64843], null));

var G__64844 = cljs.core.next.call(null,seq__64817_64835__$1);
var G__64845 = null;
var G__64846 = (0);
var G__64847 = (0);
seq__64817_64823 = G__64844;
chunk__64818_64824 = G__64845;
count__64819_64825 = G__64846;
i__64820_64826 = G__64847;
continue;
}
} else {
}
}
break;
}

return (cljs.core.every_QMARK_.call(null,((function (b,s){
return (function (p1__64810_SHARP_){
return (new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(p1__64810_SHARP_) == null);
});})(b,s))
,cljs.core.vals.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858))))) && (cljs.core.not.call(null,b)) && (cljs.core.not.call(null,s));
});
biomarket.newproject.save_data = (function biomarket$newproject$save_data(owner){
if(cljs.core.truth_(biomarket.newproject.all_good_QMARK_.call(null,owner))){
biomarket.server.save_data.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"new-project","new-project",-1947445636),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__64850){
var vec__64851 = p__64850;
var k = cljs.core.nth.call(null,vec__64851,(0),null);
var v = cljs.core.nth.call(null,vec__64851,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(v)],null));
}),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"basis","basis",1865819339),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"basis","basis",1865819339))),new cljs.core.Keyword(null,"skills","skills",958701426),cljs.core.keys.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331))))], null))], null));

return biomarket.utilities.pub_info.call(null,owner,new cljs.core.Keyword("biomarket.newproject","saved","biomarket.newproject/saved",-1780820963),new cljs.core.Keyword(null,"saved","saved",288760660));
} else {
return null;
}
});
biomarket.newproject.skills = (function biomarket$newproject$skills(selected,owner){
if(typeof biomarket.newproject.t_biomarket$newproject64864 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject64864 = (function (skills,selected,owner,meta64865){
this.skills = skills;
this.selected = selected;
this.owner = owner;
this.meta64865 = meta64865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject64864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64866,meta64865__$1){
var self__ = this;
var _64866__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject64864(self__.skills,self__.selected,self__.owner,meta64865__$1));
});

biomarket.newproject.t_biomarket$newproject64864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64866){
var self__ = this;
var _64866__$1 = this;
return self__.meta64865;
});

biomarket.newproject.t_biomarket$newproject64864.prototype.om$core$IInitState$ = true;

biomarket.newproject.t_biomarket$newproject64864.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skills","skills",958701426),null], null);
});

biomarket.newproject.t_biomarket$newproject64864.prototype.om$core$IWillMount$ = true;

biomarket.newproject.t_biomarket$newproject64864.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.server.get_data.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"all-skills","all-skills",-1330155020)], null),((function (___$1){
return (function (p1__64852_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"skills","skills",958701426),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__64852_SHARP_));
});})(___$1))
);
});

biomarket.newproject.t_biomarket$newproject64864.prototype.om$core$IRenderState$ = true;

biomarket.newproject.t_biomarket$newproject64864.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__64867){
var self__ = this;
var map__64868 = p__64867;
var map__64868__$1 = ((((!((map__64868 == null)))?((((map__64868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64868):map__64868);
var skills__$1 = cljs.core.get.call(null,map__64868__$1,new cljs.core.Keyword(null,"skills","skills",958701426));
var ___$1 = this;
return React.DOM.div({"className": (function (){var pred__64870 = cljs.core._EQ_;
var expr__64871 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.selected);
if(cljs.core.truth_(pred__64870.call(null,false,expr__64871))){
return "";
} else {
if(cljs.core.truth_(pred__64870.call(null,null,expr__64871))){
return "has-success";
} else {
return "has-error";
}
}
})()},React.DOM.label({"className": "control-label"},"Required skills:",React.DOM.label(null,"Scientific",om.core.build.call(null,biomarket.skills.skill_tags,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skills","skills",958701426),cljs.core.filter.call(null,((function (___$1,map__64868,map__64868__$1,skills__$1){
return (function (p1__64853_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__64853_SHARP_),"bskill");
});})(___$1,map__64868,map__64868__$1,skills__$1))
,skills__$1)], null),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.selected),new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963)], null))),React.DOM.label(null,"IT",om.core.build.call(null,biomarket.skills.skill_tags,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skills","skills",958701426),cljs.core.filter.call(null,((function (___$1,map__64868,map__64868__$1,skills__$1){
return (function (p1__64854_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__64854_SHARP_),"cskill");
});})(___$1,map__64868,map__64868__$1,skills__$1))
,skills__$1)], null),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.selected),new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963)], null))),React.DOM.span({"className": "help-block"},(cljs.core.truth_(new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.selected))?cljs.core.first.call(null,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.selected)):null))));
});

biomarket.newproject.t_biomarket$newproject64864.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"skills","skills",-1695734343,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta64865","meta64865",419268220,null)], null);
});

biomarket.newproject.t_biomarket$newproject64864.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject64864.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject64864";

biomarket.newproject.t_biomarket$newproject64864.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.newproject/t_biomarket$newproject64864");
});

biomarket.newproject.__GT_t_biomarket$newproject64864 = (function biomarket$newproject$skills_$___GT_t_biomarket$newproject64864(skills__$1,selected__$1,owner__$1,meta64865){
return (new biomarket.newproject.t_biomarket$newproject64864(skills__$1,selected__$1,owner__$1,meta64865));
});

}

return (new biomarket.newproject.t_biomarket$newproject64864(biomarket$newproject$skills,selected,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.newproject.basis_radios = (function biomarket$newproject$basis_radios(state,owner){
if(typeof biomarket.newproject.t_biomarket$newproject64879 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject64879 = (function (basis_radios,state,owner,meta64880){
this.basis_radios = basis_radios;
this.state = state;
this.owner = owner;
this.meta64880 = meta64880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject64879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64881,meta64880__$1){
var self__ = this;
var _64881__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject64879(self__.basis_radios,self__.state,self__.owner,meta64880__$1));
});

biomarket.newproject.t_biomarket$newproject64879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64881){
var self__ = this;
var _64881__$1 = this;
return self__.meta64880;
});

biomarket.newproject.t_biomarket$newproject64879.prototype.om$core$IRender$ = true;

biomarket.newproject.t_biomarket$newproject64879.prototype.om$core$IRender$render$arity$1 = (function (this__36754__auto__){
var self__ = this;
var this__36754__auto____$1 = this;
return React.DOM.div({"className": (function (){var pred__64882 = cljs.core._EQ_;
var expr__64883 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.state);
if(cljs.core.truth_(pred__64882.call(null,false,expr__64883))){
return "";
} else {
if(cljs.core.truth_(pred__64882.call(null,null,expr__64883))){
return "has-success";
} else {
return "has-error";
}
}
})()},React.DOM.label({"className": "control-label"},"Payment basis:"),React.DOM.label({"className": "checkbox-inline"},om.dom.input.call(null,{"type": "radio", "name": "basis", "value": "per hour", "checked": ((cljs.core._EQ_.call(null,"per hour",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.state)))?"true":null), "onClick": ((function (this__36754__auto____$1){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"per hour",new cljs.core.Keyword(null,"invalid","invalid",412869516),null], null));
});})(this__36754__auto____$1))
})," Per hour"),React.DOM.label({"className": "checkbox-inline"},om.dom.input.call(null,{"type": "radio", "name": "basis", "value": "total", "checked": ((cljs.core._EQ_.call(null,"total",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.state)))?"true":null), "onClick": ((function (this__36754__auto____$1){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"total",new cljs.core.Keyword(null,"invalid","invalid",412869516),null], null));
});})(this__36754__auto____$1))
})," Total"),React.DOM.span({"className": "help-block"},(cljs.core.truth_(new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.state))?cljs.core.first.call(null,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.state)):null)));
});

biomarket.newproject.t_biomarket$newproject64879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"basis-radios","basis-radios",-857594928,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta64880","meta64880",1840444577,null)], null);
});

biomarket.newproject.t_biomarket$newproject64879.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject64879.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject64879";

biomarket.newproject.t_biomarket$newproject64879.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.newproject/t_biomarket$newproject64879");
});

biomarket.newproject.__GT_t_biomarket$newproject64879 = (function biomarket$newproject$basis_radios_$___GT_t_biomarket$newproject64879(basis_radios__$1,state__$1,owner__$1,meta64880){
return (new biomarket.newproject.t_biomarket$newproject64879(basis_radios__$1,state__$1,owner__$1,meta64880));
});

}

return (new biomarket.newproject.t_biomarket$newproject64879(biomarket$newproject$basis_radios,state,owner,null));
});
biomarket.newproject.new_project = (function biomarket$newproject$new_project(p__64886,owner){
var vec__64891 = p__64886;
var finputs = cljs.core.nth.call(null,vec__64891,(0),null);
var selected_skills = cljs.core.nth.call(null,vec__64891,(1),null);
var basis = cljs.core.nth.call(null,vec__64891,(2),null);
if(typeof biomarket.newproject.t_biomarket$newproject64892 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject64892 = (function (new_project,p__64886,owner,vec__64891,finputs,selected_skills,basis,meta64893){
this.new_project = new_project;
this.p__64886 = p__64886;
this.owner = owner;
this.vec__64891 = vec__64891;
this.finputs = finputs;
this.selected_skills = selected_skills;
this.basis = basis;
this.meta64893 = meta64893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject64892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__64891,finputs,selected_skills,basis){
return (function (_64894,meta64893__$1){
var self__ = this;
var _64894__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject64892(self__.new_project,self__.p__64886,self__.owner,self__.vec__64891,self__.finputs,self__.selected_skills,self__.basis,meta64893__$1));
});})(vec__64891,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject64892.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__64891,finputs,selected_skills,basis){
return (function (_64894){
var self__ = this;
var _64894__$1 = this;
return self__.meta64893;
});})(vec__64891,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject64892.prototype.om$core$IRender$ = true;

biomarket.newproject.t_biomarket$newproject64892.prototype.om$core$IRender$render$arity$1 = ((function (vec__64891,finputs,selected_skills,basis){
return (function (this__36754__auto__){
var self__ = this;
var this__36754__auto____$1 = this;
return React.DOM.div({"style": {"padding-top": "1em"}},React.DOM.div({"className": "panel panel-default", "style": {"text-align": "left"}},React.DOM.div({"className": "panel-heading"},React.DOM.div({"style": {"font-weight": "bold", "font-size": "large"}},(function (){var v = cljs.core.get_in.call(null,self__.finputs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"value","value",305978217)], null));
if(!(cljs.core._EQ_.call(null,"",clojure.string.trim.call(null,v)))){
return v;
} else {
return "New Project";
}
})())),React.DOM.div({"className": "panel-body"},React.DOM.form(null,cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (this__36754__auto____$1,vec__64891,finputs,selected_skills,basis){
return (function (p1__64885_SHARP_){
return om.core.build.call(null,biomarket.utilities.input,cljs.core.conj.call(null,p1__64885_SHARP_,new cljs.core.Keyword("biomarket.newproject","inputd","biomarket.newproject/inputd",321228878)));
});})(this__36754__auto____$1,vec__64891,finputs,selected_skills,basis))
,self__.finputs)),om.core.build.call(null,biomarket.newproject.basis_radios,self__.basis)),om.core.build.call(null,biomarket.newproject.skills,self__.selected_skills))));
});})(vec__64891,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject64892.getBasis = ((function (vec__64891,finputs,selected_skills,basis){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"new-project","new-project",-306914109,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"finputs","finputs",-2006753159,null),new cljs.core.Symbol(null,"selected-skills","selected-skills",-1784500438,null),new cljs.core.Symbol(null,"basis","basis",-788616430,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__64886","p__64886",-1268795733,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__64891","vec__64891",-99728191,null),new cljs.core.Symbol(null,"finputs","finputs",-2006753159,null),new cljs.core.Symbol(null,"selected-skills","selected-skills",-1784500438,null),new cljs.core.Symbol(null,"basis","basis",-788616430,null),new cljs.core.Symbol(null,"meta64893","meta64893",-1550095009,null)], null);
});})(vec__64891,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject64892.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject64892.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject64892";

biomarket.newproject.t_biomarket$newproject64892.cljs$lang$ctorPrWriter = ((function (vec__64891,finputs,selected_skills,basis){
return (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.newproject/t_biomarket$newproject64892");
});})(vec__64891,finputs,selected_skills,basis))
;

biomarket.newproject.__GT_t_biomarket$newproject64892 = ((function (vec__64891,finputs,selected_skills,basis){
return (function biomarket$newproject$new_project_$___GT_t_biomarket$newproject64892(new_project__$1,p__64886__$1,owner__$1,vec__64891__$1,finputs__$1,selected_skills__$1,basis__$1,meta64893){
return (new biomarket.newproject.t_biomarket$newproject64892(new_project__$1,p__64886__$1,owner__$1,vec__64891__$1,finputs__$1,selected_skills__$1,basis__$1,meta64893));
});})(vec__64891,finputs,selected_skills,basis))
;

}

return (new biomarket.newproject.t_biomarket$newproject64892(biomarket$newproject$new_project,p__64886,owner,vec__64891,finputs,selected_skills,basis,null));
});
cljs.core._add_method.call(null,biomarket.utilities.get_input,new cljs.core.Keyword(null,"biddead","biddead",371948723),(function (owner,p__64895){
var map__64896 = p__64895;
var map__64896__$1 = ((((!((map__64896 == null)))?((((map__64896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64896):map__64896);
var fname = cljs.core.get.call(null,map__64896__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__64896__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var f = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date","date",-1463434462));
var b = cljs_time.format.parse.call(null,f,cljs.core.get_in.call(null,element,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null)));
var new$ = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"biddead","biddead",371948723),new cljs.core.Keyword(null,"value","value",305978217)], null),((function (f,b,map__64896,map__64896__$1,fname,element){
return (function (_){
return cljs_time.format.unparse.call(null,f,b);
});})(f,b,map__64896,map__64896__$1,fname,element))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"biddead","biddead",371948723),new cljs.core.Keyword(null,"invalid","invalid",412869516)], null),((function (f,b,map__64896,map__64896__$1,fname,element){
return (function (_){
return null;
});})(f,b,map__64896,map__64896__$1,fname,element))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projdead","projdead",-925005898),new cljs.core.Keyword(null,"value","value",305978217)], null),((function (f,b,map__64896,map__64896__$1,fname,element){
return (function (_){
return cljs_time.format.unparse.call(null,f,cljs_time.core.plus.call(null,b,cljs_time.core.days.call(null,(1))));
});})(f,b,map__64896,map__64896__$1,fname,element))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projdead","projdead",-925005898),new cljs.core.Keyword(null,"min","min",444991522)], null),((function (f,b,map__64896,map__64896__$1,fname,element){
return (function (_){
return cljs_time.format.unparse.call(null,f,cljs_time.core.plus.call(null,b,cljs_time.core.days.call(null,(1))));
});})(f,b,map__64896,map__64896__$1,fname,element))
);
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),new$);
}));
biomarket.newproject.skills_reg = (function biomarket$newproject$skills_reg(owner,data){
var ss = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331));
if(cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(ss).call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data)))){
var new$ = (function (){var n = cljs.core.update_in.call(null,ss,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),((function (ss){
return (function (x){
return cljs.core.dissoc.call(null,x,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data));
});})(ss))
);
var n__$1 = ((cljs.core.seq.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(n)))?cljs.core.assoc.call(null,n,new cljs.core.Keyword(null,"invalid","invalid",412869516),null):cljs.core.assoc.call(null,n,new cljs.core.Keyword(null,"invalid","invalid",412869516),cljs.core.list("Select some skills needed for the project")));
return n__$1;
})();
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331),new$);
} else {
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331),cljs.core.update_in.call(null,cljs.core.update_in.call(null,ss,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764)], null),((function (ss){
return (function (x){
return cljs.core.assoc.call(null,x,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data),data);
});})(ss))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invalid","invalid",412869516)], null),((function (ss){
return (function (x){
return null;
});})(ss))
));
}
});
biomarket.newproject.new_project_nav = (function biomarket$newproject$new_project_nav(control,owner){
if(typeof biomarket.newproject.t_biomarket$newproject64905 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject64905 = (function (new_project_nav,control,owner,meta64906){
this.new_project_nav = new_project_nav;
this.control = control;
this.owner = owner;
this.meta64906 = meta64906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject64905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64907,meta64906__$1){
var self__ = this;
var _64907__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject64905(self__.new_project_nav,self__.control,self__.owner,meta64906__$1));
});

biomarket.newproject.t_biomarket$newproject64905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64907){
var self__ = this;
var _64907__$1 = this;
return self__.meta64906;
});

biomarket.newproject.t_biomarket$newproject64905.prototype.om$core$IInitState$ = true;

biomarket.newproject.t_biomarket$newproject64905.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"control","control",1892578036),self__.control,new cljs.core.Keyword(null,"label","label",1718410804),"Open projects"], null);
});

biomarket.newproject.t_biomarket$newproject64905.prototype.om$core$IRenderState$ = true;

biomarket.newproject.t_biomarket$newproject64905.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__64908){
var self__ = this;
var map__64909 = p__64908;
var map__64909__$1 = ((((!((map__64909 == null)))?((((map__64909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64909):map__64909);
var control__$1 = cljs.core.get.call(null,map__64909__$1,new cljs.core.Keyword(null,"control","control",1892578036));
var drop = cljs.core.get.call(null,map__64909__$1,new cljs.core.Keyword(null,"drop","drop",364481611));
var label = cljs.core.get.call(null,map__64909__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var ___$1 = this;
return React.DOM.div(null,React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-heading"},cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,((function (___$1,map__64909,map__64909__$1,control__$1,drop,label){
return (function (p1__64898_SHARP_){
return React.DOM.a({"className": "btn btn-primary", "type": "button", "onClick": cljs.core.second.call(null,p1__64898_SHARP_)},cljs.core.first.call(null,p1__64898_SHARP_));
});})(___$1,map__64909,map__64909__$1,control__$1,drop,label))
,control__$1)))));
});

biomarket.newproject.t_biomarket$newproject64905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"new-project-nav","new-project-nav",-1451594218,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"control","control",-761857733,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"control","control",-761857733,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta64906","meta64906",-371769194,null)], null);
});

biomarket.newproject.t_biomarket$newproject64905.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject64905.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject64905";

biomarket.newproject.t_biomarket$newproject64905.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.newproject/t_biomarket$newproject64905");
});

biomarket.newproject.__GT_t_biomarket$newproject64905 = (function biomarket$newproject$new_project_nav_$___GT_t_biomarket$newproject64905(new_project_nav__$1,control__$1,owner__$1,meta64906){
return (new biomarket.newproject.t_biomarket$newproject64905(new_project_nav__$1,control__$1,owner__$1,meta64906));
});

}

return (new biomarket.newproject.t_biomarket$newproject64905(biomarket$newproject$new_project_nav,control,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.newproject.min_now = (function biomarket$newproject$min_now(var_args){
var args64911 = [];
var len__26879__auto___64914 = arguments.length;
var i__26880__auto___64915 = (0);
while(true){
if((i__26880__auto___64915 < len__26879__auto___64914)){
args64911.push((arguments[i__26880__auto___64915]));

var G__64916 = (i__26880__auto___64915 + (1));
i__26880__auto___64915 = G__64916;
continue;
} else {
}
break;
}

var G__64913 = args64911.length;
switch (G__64913) {
case 0:
return biomarket.newproject.min_now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return biomarket.newproject.min_now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return biomarket.newproject.min_now.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64911.length)].join('')));

}
});

biomarket.newproject.min_now.cljs$core$IFn$_invoke$arity$0 = (function (){
return biomarket.newproject.min_now.call(null,cljs_time.core.now.call(null),(0));
});

biomarket.newproject.min_now.cljs$core$IFn$_invoke$arity$1 = (function (a){
return biomarket.newproject.min_now.call(null,cljs_time.core.now.call(null),a);
});

biomarket.newproject.min_now.cljs$core$IFn$_invoke$arity$2 = (function (d,a){
var f = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date","date",-1463434462));
return cljs_time.format.unparse.call(null,f,cljs_time.core.plus.call(null,d,cljs_time.core.days.call(null,a)));
});

biomarket.newproject.min_now.cljs$lang$maxFixedArity = 2;
biomarket.newproject.new_project_view = (function biomarket$newproject$new_project_view(nav_tag,owner){
if(typeof biomarket.newproject.t_biomarket$newproject64938 !== 'undefined'){
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
biomarket.newproject.t_biomarket$newproject64938 = (function (new_project_view,nav_tag,owner,meta64939){
this.new_project_view = new_project_view;
this.nav_tag = nav_tag;
this.owner = owner;
this.meta64939 = meta64939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject64938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64940,meta64939__$1){
var self__ = this;
var _64940__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject64938(self__.new_project_view,self__.nav_tag,self__.owner,meta64939__$1));
});

biomarket.newproject.t_biomarket$newproject64938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64940){
var self__ = this;
var _64940__$1 = this;
return self__.meta64939;
});

biomarket.newproject.t_biomarket$newproject64938.prototype.om$core$IInitState$ = true;

biomarket.newproject.t_biomarket$newproject64938.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Save",((function (___$1){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","save","biomarket.newproject/save",-175478526),new cljs.core.Keyword(null,"save","save",1850079149));
});})(___$1))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cancel",((function (___$1){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.nav_tag,new cljs.core.Keyword(null,"home","home",-74557309));
});})(___$1))
], null)], null),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"spid","spid",1854581004),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invalid","invalid",412869516),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)],["Title",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__64918_SHARP_){
return !(cljs.core._EQ_.call(null,clojure.string.trim.call(null,p1__64918_SHARP_),""));
});})(___$1))
,"Title cannot be empty."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__64919_SHARP_){
return (cljs.core.count.call(null,p1__64919_SHARP_) > (2));
});})(___$1))
,"Title must be more than 2 characters."], null)], null),"title","","s1","text",false,"Project title:","1"]),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"spid","spid",1854581004),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invalid","invalid",412869516),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"id","id",-1388402092)],["Concise description of the project:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__64920_SHARP_){
return !(cljs.core._EQ_.call(null,clojure.string.trim.call(null,p1__64920_SHARP_),""));
});})(___$1))
,"Description cannot be empty."], null)], null),"description","","s2","textarea",false,"Project description:",(15),"2"]),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"name","name",1843675177),"hours",new cljs.core.Keyword(null,"id","id",-1388402092),"3",new cljs.core.Keyword(null,"spid","spid",1854581004),"s3",new cljs.core.Keyword(null,"title","title",636505583),"Expected days to complete project:",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__64921_SHARP_){
return (p1__64921_SHARP_ >= (1));
});})(___$1))
,"At least one hour must be specified."], null)], null)], null),new cljs.core.Keyword(null,"budget","budget",-405386281),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"name","name",1843675177),"budget",new cljs.core.Keyword(null,"id","id",-1388402092),"4",new cljs.core.Keyword(null,"spid","spid",1854581004),"s4",new cljs.core.Keyword(null,"title","title",636505583),"Project budget (USD):",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__64922_SHARP_){
return (p1__64922_SHARP_ >= (1));
});})(___$1))
,"At least one dollar must be specified."], null)], null)], null),new cljs.core.Keyword(null,"biddead","biddead",371948723),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),biomarket.newproject.min_now.call(null),new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"name","name",1843675177),"biddead",new cljs.core.Keyword(null,"min","min",444991522),biomarket.newproject.min_now.call(null),new cljs.core.Keyword(null,"id","id",-1388402092),"5",new cljs.core.Keyword(null,"spid","spid",1854581004),"s5",new cljs.core.Keyword(null,"title","title",636505583),"Bidding deadline:",new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null),new cljs.core.Keyword(null,"projdead","projdead",-925005898),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),biomarket.newproject.min_now.call(null,(1)),new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"name","name",1843675177),"projdead",new cljs.core.Keyword(null,"min","min",444991522),biomarket.newproject.min_now.call(null,(1)),new cljs.core.Keyword(null,"title","title",636505583),"Project deadline:",new cljs.core.Keyword(null,"id","id",-1388402092),"6",new cljs.core.Keyword(null,"spid","spid",1854581004),"s6",new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null),new cljs.core.Keyword(null,"basis","basis",1865819339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null),new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null);
});

biomarket.newproject.t_biomarket$newproject64938.prototype.om$core$IWillMount$ = true;

biomarket.newproject.t_biomarket$newproject64938.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","inputd","biomarket.newproject/inputd",321228878),((function (___$1){
return (function (o,p__64941){
var map__64942 = p__64941;
var map__64942__$1 = ((((!((map__64942 == null)))?((((map__64942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64942):map__64942);
var data = cljs.core.get.call(null,map__64942__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.utilities.get_input.call(null,o,data);
});})(___$1))
);

biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),((function (___$1){
return (function (o,p__64944){
var map__64945 = p__64944;
var map__64945__$1 = ((((!((map__64945 == null)))?((((map__64945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64945):map__64945);
var data = cljs.core.get.call(null,map__64945__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"basis","basis",1865819339),data);
});})(___$1))
);

biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963),((function (___$1){
return (function (o,p__64947){
var map__64948 = p__64947;
var map__64948__$1 = ((((!((map__64948 == null)))?((((map__64948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64948):map__64948);
var data = cljs.core.get.call(null,map__64948__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.newproject.skills_reg.call(null,o,data);
});})(___$1))
);

biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","saved","biomarket.newproject/saved",-1780820963),((function (___$1){
return (function (o,___$2){
return biomarket.utilities.pub_info.call(null,o,self__.nav_tag,new cljs.core.Keyword(null,"home","home",-74557309));
});})(___$1))
);

return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","save","biomarket.newproject/save",-175478526),((function (___$1){
return (function (o,___$2){
return biomarket.newproject.save_data.call(null,o);
});})(___$1))
);
});

biomarket.newproject.t_biomarket$newproject64938.prototype.om$core$IWillUnmount$ = true;

biomarket.newproject.t_biomarket$newproject64938.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","inputd","biomarket.newproject/inputd",321228878),new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963),new cljs.core.Keyword("biomarket.newproject","saved","biomarket.newproject/saved",-1780820963),new cljs.core.Keyword("biomarket.newproject","save","biomarket.newproject/save",-175478526));
});

biomarket.newproject.t_biomarket$newproject64938.prototype.om$core$IRenderState$ = true;

biomarket.newproject.t_biomarket$newproject64938.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__64950){
var self__ = this;
var map__64951 = p__64950;
var map__64951__$1 = ((((!((map__64951 == null)))?((((map__64951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64951):map__64951);
var basis = cljs.core.get.call(null,map__64951__$1,new cljs.core.Keyword(null,"basis","basis",1865819339));
var inputs = cljs.core.get.call(null,map__64951__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var nav = cljs.core.get.call(null,map__64951__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var selected_skills = cljs.core.get.call(null,map__64951__$1,new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331));
var ___$1 = this;
return React.DOM.div(null,om.core.build.call(null,biomarket.newproject.new_project_nav,nav),om.core.build.call(null,biomarket.newproject.new_project,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs,selected_skills,basis], null)),om.core.build.call(null,biomarket.newproject.new_project_nav,nav));
});

biomarket.newproject.t_biomarket$newproject64938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"new-project-view","new-project-view",-1395833262,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta64939","meta64939",1715959707,null)], null);
});

biomarket.newproject.t_biomarket$newproject64938.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject64938.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject64938";

biomarket.newproject.t_biomarket$newproject64938.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.newproject/t_biomarket$newproject64938");
});

biomarket.newproject.__GT_t_biomarket$newproject64938 = (function biomarket$newproject$new_project_view_$___GT_t_biomarket$newproject64938(new_project_view__$1,nav_tag__$1,owner__$1,meta64939){
return (new biomarket.newproject.t_biomarket$newproject64938(new_project_view__$1,nav_tag__$1,owner__$1,meta64939));
});

}

return (new biomarket.newproject.t_biomarket$newproject64938(biomarket$newproject$new_project_view,nav_tag,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=newproject.js.map