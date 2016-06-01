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

var seq__91827_91833 = cljs.core.seq.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)));
var chunk__91828_91834 = null;
var count__91829_91835 = (0);
var i__91830_91836 = (0);
while(true){
if((i__91830_91836 < count__91829_91835)){
var vec__91831_91837 = cljs.core._nth.call(null,chunk__91828_91834,i__91830_91836);
var k_91838 = cljs.core.nth.call(null,vec__91831_91837,(0),null);
var v_91839 = cljs.core.nth.call(null,vec__91831_91837,(1),null);
biomarket.utilities.get_input.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fname","fname",1500291491),k_91838,new cljs.core.Keyword(null,"element","element",1974019749),v_91839], null));

var G__91840 = seq__91827_91833;
var G__91841 = chunk__91828_91834;
var G__91842 = count__91829_91835;
var G__91843 = (i__91830_91836 + (1));
seq__91827_91833 = G__91840;
chunk__91828_91834 = G__91841;
count__91829_91835 = G__91842;
i__91830_91836 = G__91843;
continue;
} else {
var temp__4425__auto___91844 = cljs.core.seq.call(null,seq__91827_91833);
if(temp__4425__auto___91844){
var seq__91827_91845__$1 = temp__4425__auto___91844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91827_91845__$1)){
var c__26623__auto___91846 = cljs.core.chunk_first.call(null,seq__91827_91845__$1);
var G__91847 = cljs.core.chunk_rest.call(null,seq__91827_91845__$1);
var G__91848 = c__26623__auto___91846;
var G__91849 = cljs.core.count.call(null,c__26623__auto___91846);
var G__91850 = (0);
seq__91827_91833 = G__91847;
chunk__91828_91834 = G__91848;
count__91829_91835 = G__91849;
i__91830_91836 = G__91850;
continue;
} else {
var vec__91832_91851 = cljs.core.first.call(null,seq__91827_91845__$1);
var k_91852 = cljs.core.nth.call(null,vec__91832_91851,(0),null);
var v_91853 = cljs.core.nth.call(null,vec__91832_91851,(1),null);
biomarket.utilities.get_input.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fname","fname",1500291491),k_91852,new cljs.core.Keyword(null,"element","element",1974019749),v_91853], null));

var G__91854 = cljs.core.next.call(null,seq__91827_91845__$1);
var G__91855 = null;
var G__91856 = (0);
var G__91857 = (0);
seq__91827_91833 = G__91854;
chunk__91828_91834 = G__91855;
count__91829_91835 = G__91856;
i__91830_91836 = G__91857;
continue;
}
} else {
}
}
break;
}

return (cljs.core.every_QMARK_.call(null,((function (b,s){
return (function (p1__91820_SHARP_){
return (new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(p1__91820_SHARP_) == null);
});})(b,s))
,cljs.core.vals.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858))))) && (cljs.core.not.call(null,b)) && (cljs.core.not.call(null,s));
});
biomarket.newproject.save_data = (function biomarket$newproject$save_data(owner){
if(cljs.core.truth_(biomarket.newproject.all_good_QMARK_.call(null,owner))){
biomarket.server.save_data.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"new-project","new-project",-1947445636),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__91860){
var vec__91861 = p__91860;
var k = cljs.core.nth.call(null,vec__91861,(0),null);
var v = cljs.core.nth.call(null,vec__91861,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(v)],null));
}),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"basis","basis",1865819339),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"basis","basis",1865819339))),new cljs.core.Keyword(null,"skills","skills",958701426),cljs.core.keys.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331))))], null))], null));

return biomarket.utilities.pub_info.call(null,owner,new cljs.core.Keyword("biomarket.newproject","saved","biomarket.newproject/saved",-1780820963),new cljs.core.Keyword(null,"saved","saved",288760660));
} else {
return null;
}
});
biomarket.newproject.skills = (function biomarket$newproject$skills(selected,owner){
if(typeof biomarket.newproject.t_biomarket$newproject91874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject91874 = (function (skills,selected,owner,meta91875){
this.skills = skills;
this.selected = selected;
this.owner = owner;
this.meta91875 = meta91875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject91874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_91876,meta91875__$1){
var self__ = this;
var _91876__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject91874(self__.skills,self__.selected,self__.owner,meta91875__$1));
});

biomarket.newproject.t_biomarket$newproject91874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_91876){
var self__ = this;
var _91876__$1 = this;
return self__.meta91875;
});

biomarket.newproject.t_biomarket$newproject91874.prototype.om$core$IInitState$ = true;

biomarket.newproject.t_biomarket$newproject91874.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skills","skills",958701426),null], null);
});

biomarket.newproject.t_biomarket$newproject91874.prototype.om$core$IWillMount$ = true;

biomarket.newproject.t_biomarket$newproject91874.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.server.get_data.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"all-skills","all-skills",-1330155020)], null),((function (___$1){
return (function (p1__91862_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"skills","skills",958701426),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__91862_SHARP_));
});})(___$1))
);
});

biomarket.newproject.t_biomarket$newproject91874.prototype.om$core$IRenderState$ = true;

biomarket.newproject.t_biomarket$newproject91874.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__91877){
var self__ = this;
var map__91878 = p__91877;
var map__91878__$1 = ((((!((map__91878 == null)))?((((map__91878.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91878.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91878):map__91878);
var skills__$1 = cljs.core.get.call(null,map__91878__$1,new cljs.core.Keyword(null,"skills","skills",958701426));
var ___$1 = this;
return React.DOM.div({"className": (function (){var pred__91880 = cljs.core._EQ_;
var expr__91881 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.selected);
if(cljs.core.truth_(pred__91880.call(null,false,expr__91881))){
return "";
} else {
if(cljs.core.truth_(pred__91880.call(null,null,expr__91881))){
return "has-success";
} else {
return "has-error";
}
}
})()},React.DOM.label({"className": "control-label"},"Required skills:",React.DOM.label(null,"Scientific",om.core.build.call(null,biomarket.skills.skill_tags,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skills","skills",958701426),cljs.core.filter.call(null,((function (___$1,map__91878,map__91878__$1,skills__$1){
return (function (p1__91863_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__91863_SHARP_),"bskill");
});})(___$1,map__91878,map__91878__$1,skills__$1))
,skills__$1)], null),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.selected),new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963)], null))),React.DOM.label(null,"IT",om.core.build.call(null,biomarket.skills.skill_tags,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skills","skills",958701426),cljs.core.filter.call(null,((function (___$1,map__91878,map__91878__$1,skills__$1){
return (function (p1__91864_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__91864_SHARP_),"cskill");
});})(___$1,map__91878,map__91878__$1,skills__$1))
,skills__$1)], null),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.selected),new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963)], null))),React.DOM.span({"className": "help-block"},(cljs.core.truth_(new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.selected))?cljs.core.first.call(null,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.selected)):null))));
});

biomarket.newproject.t_biomarket$newproject91874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"skills","skills",-1695734343,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta91875","meta91875",685035087,null)], null);
});

biomarket.newproject.t_biomarket$newproject91874.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject91874.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject91874";

biomarket.newproject.t_biomarket$newproject91874.cljs$lang$ctorPrWriter = (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.newproject/t_biomarket$newproject91874");
});

biomarket.newproject.__GT_t_biomarket$newproject91874 = (function biomarket$newproject$skills_$___GT_t_biomarket$newproject91874(skills__$1,selected__$1,owner__$1,meta91875){
return (new biomarket.newproject.t_biomarket$newproject91874(skills__$1,selected__$1,owner__$1,meta91875));
});

}

return (new biomarket.newproject.t_biomarket$newproject91874(biomarket$newproject$skills,selected,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.newproject.basis_radios = (function biomarket$newproject$basis_radios(state,owner){
if(typeof biomarket.newproject.t_biomarket$newproject91889 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject91889 = (function (basis_radios,state,owner,meta91890){
this.basis_radios = basis_radios;
this.state = state;
this.owner = owner;
this.meta91890 = meta91890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject91889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_91891,meta91890__$1){
var self__ = this;
var _91891__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject91889(self__.basis_radios,self__.state,self__.owner,meta91890__$1));
});

biomarket.newproject.t_biomarket$newproject91889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_91891){
var self__ = this;
var _91891__$1 = this;
return self__.meta91890;
});

biomarket.newproject.t_biomarket$newproject91889.prototype.om$core$IRender$ = true;

biomarket.newproject.t_biomarket$newproject91889.prototype.om$core$IRender$render$arity$1 = (function (this__36757__auto__){
var self__ = this;
var this__36757__auto____$1 = this;
return React.DOM.div({"className": (function (){var pred__91892 = cljs.core._EQ_;
var expr__91893 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.state);
if(cljs.core.truth_(pred__91892.call(null,false,expr__91893))){
return "";
} else {
if(cljs.core.truth_(pred__91892.call(null,null,expr__91893))){
return "has-success";
} else {
return "has-error";
}
}
})()},React.DOM.label({"className": "control-label"},"Payment basis:"),React.DOM.label({"className": "checkbox-inline"},om.dom.input.call(null,{"type": "radio", "name": "basis", "value": "per hour", "checked": ((cljs.core._EQ_.call(null,"per hour",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.state)))?"true":null), "onClick": ((function (this__36757__auto____$1){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"per hour",new cljs.core.Keyword(null,"invalid","invalid",412869516),null], null));
});})(this__36757__auto____$1))
})," Per hour"),React.DOM.label({"className": "checkbox-inline"},om.dom.input.call(null,{"type": "radio", "name": "basis", "value": "total", "checked": ((cljs.core._EQ_.call(null,"total",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.state)))?"true":null), "onClick": ((function (this__36757__auto____$1){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"total",new cljs.core.Keyword(null,"invalid","invalid",412869516),null], null));
});})(this__36757__auto____$1))
})," Total"),React.DOM.span({"className": "help-block"},(cljs.core.truth_(new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.state))?cljs.core.first.call(null,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.state)):null)));
});

biomarket.newproject.t_biomarket$newproject91889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"basis-radios","basis-radios",-857594928,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta91890","meta91890",1092610352,null)], null);
});

biomarket.newproject.t_biomarket$newproject91889.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject91889.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject91889";

biomarket.newproject.t_biomarket$newproject91889.cljs$lang$ctorPrWriter = (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.newproject/t_biomarket$newproject91889");
});

biomarket.newproject.__GT_t_biomarket$newproject91889 = (function biomarket$newproject$basis_radios_$___GT_t_biomarket$newproject91889(basis_radios__$1,state__$1,owner__$1,meta91890){
return (new biomarket.newproject.t_biomarket$newproject91889(basis_radios__$1,state__$1,owner__$1,meta91890));
});

}

return (new biomarket.newproject.t_biomarket$newproject91889(biomarket$newproject$basis_radios,state,owner,null));
});
biomarket.newproject.new_project = (function biomarket$newproject$new_project(p__91896,owner){
var vec__91901 = p__91896;
var finputs = cljs.core.nth.call(null,vec__91901,(0),null);
var selected_skills = cljs.core.nth.call(null,vec__91901,(1),null);
var basis = cljs.core.nth.call(null,vec__91901,(2),null);
if(typeof biomarket.newproject.t_biomarket$newproject91902 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject91902 = (function (new_project,p__91896,owner,vec__91901,finputs,selected_skills,basis,meta91903){
this.new_project = new_project;
this.p__91896 = p__91896;
this.owner = owner;
this.vec__91901 = vec__91901;
this.finputs = finputs;
this.selected_skills = selected_skills;
this.basis = basis;
this.meta91903 = meta91903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject91902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__91901,finputs,selected_skills,basis){
return (function (_91904,meta91903__$1){
var self__ = this;
var _91904__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject91902(self__.new_project,self__.p__91896,self__.owner,self__.vec__91901,self__.finputs,self__.selected_skills,self__.basis,meta91903__$1));
});})(vec__91901,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject91902.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__91901,finputs,selected_skills,basis){
return (function (_91904){
var self__ = this;
var _91904__$1 = this;
return self__.meta91903;
});})(vec__91901,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject91902.prototype.om$core$IRender$ = true;

biomarket.newproject.t_biomarket$newproject91902.prototype.om$core$IRender$render$arity$1 = ((function (vec__91901,finputs,selected_skills,basis){
return (function (this__36757__auto__){
var self__ = this;
var this__36757__auto____$1 = this;
return React.DOM.div({"style": {"padding-top": "1em"}},React.DOM.div({"className": "panel panel-default", "style": {"text-align": "left"}},React.DOM.div({"className": "panel-heading"},React.DOM.div({"style": {"font-weight": "bold", "font-size": "large"}},(function (){var v = cljs.core.get_in.call(null,self__.finputs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"value","value",305978217)], null));
if(!(cljs.core._EQ_.call(null,"",clojure.string.trim.call(null,v)))){
return v;
} else {
return "New Project";
}
})())),React.DOM.div({"className": "panel-body"},React.DOM.form(null,cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (this__36757__auto____$1,vec__91901,finputs,selected_skills,basis){
return (function (p1__91895_SHARP_){
return om.core.build.call(null,biomarket.utilities.input,cljs.core.conj.call(null,p1__91895_SHARP_,new cljs.core.Keyword("biomarket.newproject","inputd","biomarket.newproject/inputd",321228878)));
});})(this__36757__auto____$1,vec__91901,finputs,selected_skills,basis))
,self__.finputs)),om.core.build.call(null,biomarket.newproject.basis_radios,self__.basis)),om.core.build.call(null,biomarket.newproject.skills,self__.selected_skills))));
});})(vec__91901,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject91902.getBasis = ((function (vec__91901,finputs,selected_skills,basis){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"new-project","new-project",-306914109,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"finputs","finputs",-2006753159,null),new cljs.core.Symbol(null,"selected-skills","selected-skills",-1784500438,null),new cljs.core.Symbol(null,"basis","basis",-788616430,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__91896","p__91896",-947168347,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__91901","vec__91901",-1012040917,null),new cljs.core.Symbol(null,"finputs","finputs",-2006753159,null),new cljs.core.Symbol(null,"selected-skills","selected-skills",-1784500438,null),new cljs.core.Symbol(null,"basis","basis",-788616430,null),new cljs.core.Symbol(null,"meta91903","meta91903",-1524505227,null)], null);
});})(vec__91901,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject91902.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject91902.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject91902";

biomarket.newproject.t_biomarket$newproject91902.cljs$lang$ctorPrWriter = ((function (vec__91901,finputs,selected_skills,basis){
return (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.newproject/t_biomarket$newproject91902");
});})(vec__91901,finputs,selected_skills,basis))
;

biomarket.newproject.__GT_t_biomarket$newproject91902 = ((function (vec__91901,finputs,selected_skills,basis){
return (function biomarket$newproject$new_project_$___GT_t_biomarket$newproject91902(new_project__$1,p__91896__$1,owner__$1,vec__91901__$1,finputs__$1,selected_skills__$1,basis__$1,meta91903){
return (new biomarket.newproject.t_biomarket$newproject91902(new_project__$1,p__91896__$1,owner__$1,vec__91901__$1,finputs__$1,selected_skills__$1,basis__$1,meta91903));
});})(vec__91901,finputs,selected_skills,basis))
;

}

return (new biomarket.newproject.t_biomarket$newproject91902(biomarket$newproject$new_project,p__91896,owner,vec__91901,finputs,selected_skills,basis,null));
});
cljs.core._add_method.call(null,biomarket.utilities.get_input,new cljs.core.Keyword(null,"biddead","biddead",371948723),(function (owner,p__91905){
var map__91906 = p__91905;
var map__91906__$1 = ((((!((map__91906 == null)))?((((map__91906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91906):map__91906);
var fname = cljs.core.get.call(null,map__91906__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__91906__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var f = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date","date",-1463434462));
var b = cljs_time.format.parse.call(null,f,cljs.core.get_in.call(null,element,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null)));
var new$ = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"biddead","biddead",371948723),new cljs.core.Keyword(null,"value","value",305978217)], null),((function (f,b,map__91906,map__91906__$1,fname,element){
return (function (_){
return cljs_time.format.unparse.call(null,f,b);
});})(f,b,map__91906,map__91906__$1,fname,element))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"biddead","biddead",371948723),new cljs.core.Keyword(null,"invalid","invalid",412869516)], null),((function (f,b,map__91906,map__91906__$1,fname,element){
return (function (_){
return null;
});})(f,b,map__91906,map__91906__$1,fname,element))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projdead","projdead",-925005898),new cljs.core.Keyword(null,"value","value",305978217)], null),((function (f,b,map__91906,map__91906__$1,fname,element){
return (function (_){
return cljs_time.format.unparse.call(null,f,cljs_time.core.plus.call(null,b,cljs_time.core.days.call(null,(1))));
});})(f,b,map__91906,map__91906__$1,fname,element))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projdead","projdead",-925005898),new cljs.core.Keyword(null,"min","min",444991522)], null),((function (f,b,map__91906,map__91906__$1,fname,element){
return (function (_){
return cljs_time.format.unparse.call(null,f,cljs_time.core.plus.call(null,b,cljs_time.core.days.call(null,(1))));
});})(f,b,map__91906,map__91906__$1,fname,element))
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
if(typeof biomarket.newproject.t_biomarket$newproject91915 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject91915 = (function (new_project_nav,control,owner,meta91916){
this.new_project_nav = new_project_nav;
this.control = control;
this.owner = owner;
this.meta91916 = meta91916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject91915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_91917,meta91916__$1){
var self__ = this;
var _91917__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject91915(self__.new_project_nav,self__.control,self__.owner,meta91916__$1));
});

biomarket.newproject.t_biomarket$newproject91915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_91917){
var self__ = this;
var _91917__$1 = this;
return self__.meta91916;
});

biomarket.newproject.t_biomarket$newproject91915.prototype.om$core$IInitState$ = true;

biomarket.newproject.t_biomarket$newproject91915.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"control","control",1892578036),self__.control,new cljs.core.Keyword(null,"label","label",1718410804),"Open projects"], null);
});

biomarket.newproject.t_biomarket$newproject91915.prototype.om$core$IRenderState$ = true;

biomarket.newproject.t_biomarket$newproject91915.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__91918){
var self__ = this;
var map__91919 = p__91918;
var map__91919__$1 = ((((!((map__91919 == null)))?((((map__91919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91919):map__91919);
var control__$1 = cljs.core.get.call(null,map__91919__$1,new cljs.core.Keyword(null,"control","control",1892578036));
var drop = cljs.core.get.call(null,map__91919__$1,new cljs.core.Keyword(null,"drop","drop",364481611));
var label = cljs.core.get.call(null,map__91919__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var ___$1 = this;
return React.DOM.div(null,React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-heading"},cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,((function (___$1,map__91919,map__91919__$1,control__$1,drop,label){
return (function (p1__91908_SHARP_){
return React.DOM.a({"className": "btn btn-primary", "type": "button", "onClick": cljs.core.second.call(null,p1__91908_SHARP_)},cljs.core.first.call(null,p1__91908_SHARP_));
});})(___$1,map__91919,map__91919__$1,control__$1,drop,label))
,control__$1)))));
});

biomarket.newproject.t_biomarket$newproject91915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"new-project-nav","new-project-nav",-1451594218,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"control","control",-761857733,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"control","control",-761857733,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta91916","meta91916",1493714335,null)], null);
});

biomarket.newproject.t_biomarket$newproject91915.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject91915.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject91915";

biomarket.newproject.t_biomarket$newproject91915.cljs$lang$ctorPrWriter = (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.newproject/t_biomarket$newproject91915");
});

biomarket.newproject.__GT_t_biomarket$newproject91915 = (function biomarket$newproject$new_project_nav_$___GT_t_biomarket$newproject91915(new_project_nav__$1,control__$1,owner__$1,meta91916){
return (new biomarket.newproject.t_biomarket$newproject91915(new_project_nav__$1,control__$1,owner__$1,meta91916));
});

}

return (new biomarket.newproject.t_biomarket$newproject91915(biomarket$newproject$new_project_nav,control,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.newproject.min_now = (function biomarket$newproject$min_now(var_args){
var args91921 = [];
var len__26882__auto___91924 = arguments.length;
var i__26883__auto___91925 = (0);
while(true){
if((i__26883__auto___91925 < len__26882__auto___91924)){
args91921.push((arguments[i__26883__auto___91925]));

var G__91926 = (i__26883__auto___91925 + (1));
i__26883__auto___91925 = G__91926;
continue;
} else {
}
break;
}

var G__91923 = args91921.length;
switch (G__91923) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91921.length)].join('')));

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
if(typeof biomarket.newproject.t_biomarket$newproject91948 !== 'undefined'){
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
biomarket.newproject.t_biomarket$newproject91948 = (function (new_project_view,nav_tag,owner,meta91949){
this.new_project_view = new_project_view;
this.nav_tag = nav_tag;
this.owner = owner;
this.meta91949 = meta91949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject91948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_91950,meta91949__$1){
var self__ = this;
var _91950__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject91948(self__.new_project_view,self__.nav_tag,self__.owner,meta91949__$1));
});

biomarket.newproject.t_biomarket$newproject91948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_91950){
var self__ = this;
var _91950__$1 = this;
return self__.meta91949;
});

biomarket.newproject.t_biomarket$newproject91948.prototype.om$core$IInitState$ = true;

biomarket.newproject.t_biomarket$newproject91948.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
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
return (function (p1__91928_SHARP_){
return !(cljs.core._EQ_.call(null,clojure.string.trim.call(null,p1__91928_SHARP_),""));
});})(___$1))
,"Title cannot be empty."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__91929_SHARP_){
return (cljs.core.count.call(null,p1__91929_SHARP_) > (2));
});})(___$1))
,"Title must be more than 2 characters."], null)], null),"title","","s1","text",false,"Project title:","1"]),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"spid","spid",1854581004),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invalid","invalid",412869516),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"id","id",-1388402092)],["Concise description of the project:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__91930_SHARP_){
return !(cljs.core._EQ_.call(null,clojure.string.trim.call(null,p1__91930_SHARP_),""));
});})(___$1))
,"Description cannot be empty."], null)], null),"description","","s2","textarea",false,"Project description:",(15),"2"]),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"name","name",1843675177),"hours",new cljs.core.Keyword(null,"id","id",-1388402092),"3",new cljs.core.Keyword(null,"spid","spid",1854581004),"s3",new cljs.core.Keyword(null,"title","title",636505583),"Expected days to complete project:",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__91931_SHARP_){
return (p1__91931_SHARP_ >= (1));
});})(___$1))
,"At least one hour must be specified."], null)], null)], null),new cljs.core.Keyword(null,"budget","budget",-405386281),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"name","name",1843675177),"budget",new cljs.core.Keyword(null,"id","id",-1388402092),"4",new cljs.core.Keyword(null,"spid","spid",1854581004),"s4",new cljs.core.Keyword(null,"title","title",636505583),"Project budget (USD):",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__91932_SHARP_){
return (p1__91932_SHARP_ >= (1));
});})(___$1))
,"At least one dollar must be specified."], null)], null)], null),new cljs.core.Keyword(null,"biddead","biddead",371948723),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),biomarket.newproject.min_now.call(null),new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"name","name",1843675177),"biddead",new cljs.core.Keyword(null,"min","min",444991522),biomarket.newproject.min_now.call(null),new cljs.core.Keyword(null,"id","id",-1388402092),"5",new cljs.core.Keyword(null,"spid","spid",1854581004),"s5",new cljs.core.Keyword(null,"title","title",636505583),"Bidding deadline:",new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null),new cljs.core.Keyword(null,"projdead","projdead",-925005898),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),biomarket.newproject.min_now.call(null,(1)),new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"name","name",1843675177),"projdead",new cljs.core.Keyword(null,"min","min",444991522),biomarket.newproject.min_now.call(null,(1)),new cljs.core.Keyword(null,"title","title",636505583),"Project deadline:",new cljs.core.Keyword(null,"id","id",-1388402092),"6",new cljs.core.Keyword(null,"spid","spid",1854581004),"s6",new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null),new cljs.core.Keyword(null,"basis","basis",1865819339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null),new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null);
});

biomarket.newproject.t_biomarket$newproject91948.prototype.om$core$IWillMount$ = true;

biomarket.newproject.t_biomarket$newproject91948.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","inputd","biomarket.newproject/inputd",321228878),((function (___$1){
return (function (o,p__91951){
var map__91952 = p__91951;
var map__91952__$1 = ((((!((map__91952 == null)))?((((map__91952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91952):map__91952);
var data = cljs.core.get.call(null,map__91952__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.utilities.get_input.call(null,o,data);
});})(___$1))
);

biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),((function (___$1){
return (function (o,p__91954){
var map__91955 = p__91954;
var map__91955__$1 = ((((!((map__91955 == null)))?((((map__91955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91955):map__91955);
var data = cljs.core.get.call(null,map__91955__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"basis","basis",1865819339),data);
});})(___$1))
);

biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963),((function (___$1){
return (function (o,p__91957){
var map__91958 = p__91957;
var map__91958__$1 = ((((!((map__91958 == null)))?((((map__91958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91958):map__91958);
var data = cljs.core.get.call(null,map__91958__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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

biomarket.newproject.t_biomarket$newproject91948.prototype.om$core$IWillUnmount$ = true;

biomarket.newproject.t_biomarket$newproject91948.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","inputd","biomarket.newproject/inputd",321228878),new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963),new cljs.core.Keyword("biomarket.newproject","saved","biomarket.newproject/saved",-1780820963),new cljs.core.Keyword("biomarket.newproject","save","biomarket.newproject/save",-175478526));
});

biomarket.newproject.t_biomarket$newproject91948.prototype.om$core$IRenderState$ = true;

biomarket.newproject.t_biomarket$newproject91948.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__91960){
var self__ = this;
var map__91961 = p__91960;
var map__91961__$1 = ((((!((map__91961 == null)))?((((map__91961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91961):map__91961);
var basis = cljs.core.get.call(null,map__91961__$1,new cljs.core.Keyword(null,"basis","basis",1865819339));
var inputs = cljs.core.get.call(null,map__91961__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var nav = cljs.core.get.call(null,map__91961__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var selected_skills = cljs.core.get.call(null,map__91961__$1,new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331));
var ___$1 = this;
return React.DOM.div(null,om.core.build.call(null,biomarket.newproject.new_project_nav,nav),om.core.build.call(null,biomarket.newproject.new_project,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs,selected_skills,basis], null)),om.core.build.call(null,biomarket.newproject.new_project_nav,nav));
});

biomarket.newproject.t_biomarket$newproject91948.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"new-project-view","new-project-view",-1395833262,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta91949","meta91949",547405957,null)], null);
});

biomarket.newproject.t_biomarket$newproject91948.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject91948.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject91948";

biomarket.newproject.t_biomarket$newproject91948.cljs$lang$ctorPrWriter = (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.newproject/t_biomarket$newproject91948");
});

biomarket.newproject.__GT_t_biomarket$newproject91948 = (function biomarket$newproject$new_project_view_$___GT_t_biomarket$newproject91948(new_project_view__$1,nav_tag__$1,owner__$1,meta91949){
return (new biomarket.newproject.t_biomarket$newproject91948(new_project_view__$1,nav_tag__$1,owner__$1,meta91949));
});

}

return (new biomarket.newproject.t_biomarket$newproject91948(biomarket$newproject$new_project_view,nav_tag,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=newproject.js.map