// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.newproject');
goog.require('cljs.core');
goog.require('biomarket.utilities');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('cljs_time.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('cljs_time.format');
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

var seq__42912_42918 = cljs.core.seq.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)));
var chunk__42913_42919 = null;
var count__42914_42920 = (0);
var i__42915_42921 = (0);
while(true){
if((i__42915_42921 < count__42914_42920)){
var vec__42916_42922 = cljs.core._nth.call(null,chunk__42913_42919,i__42915_42921);
var k_42923 = cljs.core.nth.call(null,vec__42916_42922,(0),null);
var v_42924 = cljs.core.nth.call(null,vec__42916_42922,(1),null);
biomarket.utilities.get_input.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fname","fname",1500291491),k_42923,new cljs.core.Keyword(null,"element","element",1974019749),v_42924], null));

var G__42925 = seq__42912_42918;
var G__42926 = chunk__42913_42919;
var G__42927 = count__42914_42920;
var G__42928 = (i__42915_42921 + (1));
seq__42912_42918 = G__42925;
chunk__42913_42919 = G__42926;
count__42914_42920 = G__42927;
i__42915_42921 = G__42928;
continue;
} else {
var temp__4425__auto___42929 = cljs.core.seq.call(null,seq__42912_42918);
if(temp__4425__auto___42929){
var seq__42912_42930__$1 = temp__4425__auto___42929;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42912_42930__$1)){
var c__23346__auto___42931 = cljs.core.chunk_first.call(null,seq__42912_42930__$1);
var G__42932 = cljs.core.chunk_rest.call(null,seq__42912_42930__$1);
var G__42933 = c__23346__auto___42931;
var G__42934 = cljs.core.count.call(null,c__23346__auto___42931);
var G__42935 = (0);
seq__42912_42918 = G__42932;
chunk__42913_42919 = G__42933;
count__42914_42920 = G__42934;
i__42915_42921 = G__42935;
continue;
} else {
var vec__42917_42936 = cljs.core.first.call(null,seq__42912_42930__$1);
var k_42937 = cljs.core.nth.call(null,vec__42917_42936,(0),null);
var v_42938 = cljs.core.nth.call(null,vec__42917_42936,(1),null);
biomarket.utilities.get_input.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fname","fname",1500291491),k_42937,new cljs.core.Keyword(null,"element","element",1974019749),v_42938], null));

var G__42939 = cljs.core.next.call(null,seq__42912_42930__$1);
var G__42940 = null;
var G__42941 = (0);
var G__42942 = (0);
seq__42912_42918 = G__42939;
chunk__42913_42919 = G__42940;
count__42914_42920 = G__42941;
i__42915_42921 = G__42942;
continue;
}
} else {
}
}
break;
}

return (cljs.core.every_QMARK_.call(null,((function (b,s){
return (function (p1__42905_SHARP_){
return (new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(p1__42905_SHARP_) == null);
});})(b,s))
,cljs.core.vals.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858))))) && (cljs.core.not.call(null,b)) && (cljs.core.not.call(null,s));
});
biomarket.newproject.get_skills = (function biomarket$newproject$get_skills(owner){
var h = (function (p__42946){
var map__42947 = p__42946;
var map__42947__$1 = ((((!((map__42947 == null)))?((((map__42947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42947):map__42947);
var status = cljs.core.get.call(null,map__42947__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__42947__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core.truth_((function (){var and__22523__auto__ = cljs.core._EQ_.call(null,"success",status);
if(and__22523__auto__){
return result;
} else {
return and__22523__auto__;
}
})())){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"skills","skills",958701426),result);
} else {
return null;
}
});
return biomarket.utilities.post_params.call(null,"/skills",cljs.core.PersistentArrayMap.EMPTY,h);
});
biomarket.newproject.save_data = (function biomarket$newproject$save_data(owner){
var h = (function (p__42954){
var map__42955 = p__42954;
var map__42955__$1 = ((((!((map__42955 == null)))?((((map__42955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42955):map__42955);
var status = cljs.core.get.call(null,map__42955__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__42955__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.call(null,status,"success")){
return biomarket.utilities.pub_info.call(null,owner,new cljs.core.Keyword("biomarket.newproject","saved","biomarket.newproject/saved",-1780820963),result);
} else {
return null;
}
});
if(cljs.core.truth_(biomarket.newproject.all_good_QMARK_.call(null,owner))){
return biomarket.utilities.post_params.call(null,"/new-project",cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (h){
return (function (p__42957){
var vec__42958 = p__42957;
var k = cljs.core.nth.call(null,vec__42958,(0),null);
var v = cljs.core.nth.call(null,vec__42958,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(v)],null));
});})(h))
,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"basis","basis",1865819339),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"basis","basis",1865819339))),new cljs.core.Keyword(null,"skills","skills",958701426),cljs.core.keys.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331))))], null)),h);
} else {
return null;
}
});
biomarket.newproject.skills = (function biomarket$newproject$skills(selected,owner){
if(typeof biomarket.newproject.t_biomarket$newproject42970 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject42970 = (function (skills,selected,owner,meta42971){
this.skills = skills;
this.selected = selected;
this.owner = owner;
this.meta42971 = meta42971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject42970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42972,meta42971__$1){
var self__ = this;
var _42972__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject42970(self__.skills,self__.selected,self__.owner,meta42971__$1));
});

biomarket.newproject.t_biomarket$newproject42970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42972){
var self__ = this;
var _42972__$1 = this;
return self__.meta42971;
});

biomarket.newproject.t_biomarket$newproject42970.prototype.om$core$IInitState$ = true;

biomarket.newproject.t_biomarket$newproject42970.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skills","skills",958701426),null], null);
});

biomarket.newproject.t_biomarket$newproject42970.prototype.om$core$IWillMount$ = true;

biomarket.newproject.t_biomarket$newproject42970.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.newproject.get_skills.call(null,self__.owner);
});

biomarket.newproject.t_biomarket$newproject42970.prototype.om$core$IRenderState$ = true;

biomarket.newproject.t_biomarket$newproject42970.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__42973){
var self__ = this;
var map__42974 = p__42973;
var map__42974__$1 = ((((!((map__42974 == null)))?((((map__42974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42974):map__42974);
var skills__$1 = cljs.core.get.call(null,map__42974__$1,new cljs.core.Keyword(null,"skills","skills",958701426));
var ___$1 = this;
return React.DOM.div({"className": (function (){var pred__42976 = cljs.core._EQ_;
var expr__42977 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.selected);
if(cljs.core.truth_(pred__42976.call(null,false,expr__42977))){
return "";
} else {
if(cljs.core.truth_(pred__42976.call(null,null,expr__42977))){
return "has-success";
} else {
return "has-error";
}
}
})()},React.DOM.label({"className": "control-label"},"Required skills:",React.DOM.label(null,"Scientific",om.core.build.call(null,biomarket.utilities.skill_tags,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,((function (___$1,map__42974,map__42974__$1,skills__$1){
return (function (p1__42959_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__42959_SHARP_),"bskill");
});})(___$1,map__42974,map__42974__$1,skills__$1))
,skills__$1),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.selected),new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963)], null))),React.DOM.label(null,"IT",om.core.build.call(null,biomarket.utilities.skill_tags,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,((function (___$1,map__42974,map__42974__$1,skills__$1){
return (function (p1__42960_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__42960_SHARP_),"cskill");
});})(___$1,map__42974,map__42974__$1,skills__$1))
,skills__$1),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.selected),new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963)], null))),React.DOM.span({"className": "help-block"},(cljs.core.truth_(new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.selected))?cljs.core.first.call(null,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.selected)):null))));
});

biomarket.newproject.t_biomarket$newproject42970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"skills","skills",-1695734343,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta42971","meta42971",-797592260,null)], null);
});

biomarket.newproject.t_biomarket$newproject42970.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject42970.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject42970";

biomarket.newproject.t_biomarket$newproject42970.cljs$lang$ctorPrWriter = (function (this__23141__auto__,writer__23142__auto__,opt__23143__auto__){
return cljs.core._write.call(null,writer__23142__auto__,"biomarket.newproject/t_biomarket$newproject42970");
});

biomarket.newproject.__GT_t_biomarket$newproject42970 = (function biomarket$newproject$skills_$___GT_t_biomarket$newproject42970(skills__$1,selected__$1,owner__$1,meta42971){
return (new biomarket.newproject.t_biomarket$newproject42970(skills__$1,selected__$1,owner__$1,meta42971));
});

}

return (new biomarket.newproject.t_biomarket$newproject42970(biomarket$newproject$skills,selected,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.newproject.basis_radios = (function biomarket$newproject$basis_radios(state,owner){
if(typeof biomarket.newproject.t_biomarket$newproject42985 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject42985 = (function (basis_radios,state,owner,meta42986){
this.basis_radios = basis_radios;
this.state = state;
this.owner = owner;
this.meta42986 = meta42986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject42985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42987,meta42986__$1){
var self__ = this;
var _42987__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject42985(self__.basis_radios,self__.state,self__.owner,meta42986__$1));
});

biomarket.newproject.t_biomarket$newproject42985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42987){
var self__ = this;
var _42987__$1 = this;
return self__.meta42986;
});

biomarket.newproject.t_biomarket$newproject42985.prototype.om$core$IRender$ = true;

biomarket.newproject.t_biomarket$newproject42985.prototype.om$core$IRender$render$arity$1 = (function (this__25403__auto__){
var self__ = this;
var this__25403__auto____$1 = this;
return React.DOM.div({"className": (function (){var pred__42988 = cljs.core._EQ_;
var expr__42989 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.state);
if(cljs.core.truth_(pred__42988.call(null,false,expr__42989))){
return "";
} else {
if(cljs.core.truth_(pred__42988.call(null,null,expr__42989))){
return "has-success";
} else {
return "has-error";
}
}
})()},React.DOM.label({"className": "control-label"},"Payment basis:"),React.DOM.label({"className": "checkbox-inline"},om.dom.input.call(null,{"type": "radio", "name": "basis", "value": "per hour", "checked": ((cljs.core._EQ_.call(null,"per hour",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.state)))?"true":null), "onClick": ((function (this__25403__auto____$1){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"per hour",new cljs.core.Keyword(null,"invalid","invalid",412869516),null], null));
});})(this__25403__auto____$1))
})," Per hour"),React.DOM.label({"className": "checkbox-inline"},om.dom.input.call(null,{"type": "radio", "name": "basis", "value": "total", "checked": ((cljs.core._EQ_.call(null,"total",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.state)))?"true":null), "onClick": ((function (this__25403__auto____$1){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"total",new cljs.core.Keyword(null,"invalid","invalid",412869516),null], null));
});})(this__25403__auto____$1))
})," Total"),React.DOM.span({"className": "help-block"},(cljs.core.truth_(new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.state))?cljs.core.first.call(null,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.state)):null)));
});

biomarket.newproject.t_biomarket$newproject42985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"basis-radios","basis-radios",-857594928,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta42986","meta42986",318274036,null)], null);
});

biomarket.newproject.t_biomarket$newproject42985.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject42985.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject42985";

biomarket.newproject.t_biomarket$newproject42985.cljs$lang$ctorPrWriter = (function (this__23141__auto__,writer__23142__auto__,opt__23143__auto__){
return cljs.core._write.call(null,writer__23142__auto__,"biomarket.newproject/t_biomarket$newproject42985");
});

biomarket.newproject.__GT_t_biomarket$newproject42985 = (function biomarket$newproject$basis_radios_$___GT_t_biomarket$newproject42985(basis_radios__$1,state__$1,owner__$1,meta42986){
return (new biomarket.newproject.t_biomarket$newproject42985(basis_radios__$1,state__$1,owner__$1,meta42986));
});

}

return (new biomarket.newproject.t_biomarket$newproject42985(biomarket$newproject$basis_radios,state,owner,null));
});
biomarket.newproject.new_project = (function biomarket$newproject$new_project(p__42992,owner){
var vec__42997 = p__42992;
var finputs = cljs.core.nth.call(null,vec__42997,(0),null);
var selected_skills = cljs.core.nth.call(null,vec__42997,(1),null);
var basis = cljs.core.nth.call(null,vec__42997,(2),null);
if(typeof biomarket.newproject.t_biomarket$newproject42998 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject42998 = (function (new_project,p__42992,owner,vec__42997,finputs,selected_skills,basis,meta42999){
this.new_project = new_project;
this.p__42992 = p__42992;
this.owner = owner;
this.vec__42997 = vec__42997;
this.finputs = finputs;
this.selected_skills = selected_skills;
this.basis = basis;
this.meta42999 = meta42999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject42998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__42997,finputs,selected_skills,basis){
return (function (_43000,meta42999__$1){
var self__ = this;
var _43000__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject42998(self__.new_project,self__.p__42992,self__.owner,self__.vec__42997,self__.finputs,self__.selected_skills,self__.basis,meta42999__$1));
});})(vec__42997,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject42998.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__42997,finputs,selected_skills,basis){
return (function (_43000){
var self__ = this;
var _43000__$1 = this;
return self__.meta42999;
});})(vec__42997,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject42998.prototype.om$core$IRender$ = true;

biomarket.newproject.t_biomarket$newproject42998.prototype.om$core$IRender$render$arity$1 = ((function (vec__42997,finputs,selected_skills,basis){
return (function (this__25403__auto__){
var self__ = this;
var this__25403__auto____$1 = this;
return React.DOM.div({"style": {"padding-top": "1em"}},React.DOM.div({"className": "panel panel-default", "style": {"text-align": "left"}},React.DOM.div({"className": "panel-heading"},React.DOM.div({"style": {"font-weight": "bold", "font-size": "large"}},(function (){var v = cljs.core.get_in.call(null,self__.finputs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"value","value",305978217)], null));
if(!(cljs.core._EQ_.call(null,"",clojure.string.trim.call(null,v)))){
return v;
} else {
return "New Project";
}
})())),React.DOM.div({"className": "panel-body"},React.DOM.form(null,cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (this__25403__auto____$1,vec__42997,finputs,selected_skills,basis){
return (function (p1__42991_SHARP_){
return om.core.build.call(null,biomarket.utilities.input,cljs.core.conj.call(null,p1__42991_SHARP_,new cljs.core.Keyword("biomarket.newproject","inputd","biomarket.newproject/inputd",321228878)));
});})(this__25403__auto____$1,vec__42997,finputs,selected_skills,basis))
,self__.finputs)),om.core.build.call(null,biomarket.newproject.basis_radios,self__.basis)),om.core.build.call(null,biomarket.newproject.skills,self__.selected_skills))));
});})(vec__42997,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject42998.getBasis = ((function (vec__42997,finputs,selected_skills,basis){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"new-project","new-project",-306914109,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"finputs","finputs",-2006753159,null),new cljs.core.Symbol(null,"selected-skills","selected-skills",-1784500438,null),new cljs.core.Symbol(null,"basis","basis",-788616430,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__42992","p__42992",-1722409481,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__42997","vec__42997",-2137301279,null),new cljs.core.Symbol(null,"finputs","finputs",-2006753159,null),new cljs.core.Symbol(null,"selected-skills","selected-skills",-1784500438,null),new cljs.core.Symbol(null,"basis","basis",-788616430,null),new cljs.core.Symbol(null,"meta42999","meta42999",-2074085045,null)], null);
});})(vec__42997,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject42998.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject42998.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject42998";

biomarket.newproject.t_biomarket$newproject42998.cljs$lang$ctorPrWriter = ((function (vec__42997,finputs,selected_skills,basis){
return (function (this__23141__auto__,writer__23142__auto__,opt__23143__auto__){
return cljs.core._write.call(null,writer__23142__auto__,"biomarket.newproject/t_biomarket$newproject42998");
});})(vec__42997,finputs,selected_skills,basis))
;

biomarket.newproject.__GT_t_biomarket$newproject42998 = ((function (vec__42997,finputs,selected_skills,basis){
return (function biomarket$newproject$new_project_$___GT_t_biomarket$newproject42998(new_project__$1,p__42992__$1,owner__$1,vec__42997__$1,finputs__$1,selected_skills__$1,basis__$1,meta42999){
return (new biomarket.newproject.t_biomarket$newproject42998(new_project__$1,p__42992__$1,owner__$1,vec__42997__$1,finputs__$1,selected_skills__$1,basis__$1,meta42999));
});})(vec__42997,finputs,selected_skills,basis))
;

}

return (new biomarket.newproject.t_biomarket$newproject42998(biomarket$newproject$new_project,p__42992,owner,vec__42997,finputs,selected_skills,basis,null));
});
cljs.core._add_method.call(null,biomarket.utilities.get_input,new cljs.core.Keyword(null,"biddead","biddead",371948723),(function (owner,p__43001){
var map__43002 = p__43001;
var map__43002__$1 = ((((!((map__43002 == null)))?((((map__43002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43002):map__43002);
var fname = cljs.core.get.call(null,map__43002__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__43002__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var f = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date","date",-1463434462));
var b = cljs_time.format.parse.call(null,f,cljs.core.get_in.call(null,element,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null)));
var new$ = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"biddead","biddead",371948723),new cljs.core.Keyword(null,"value","value",305978217)], null),((function (f,b,map__43002,map__43002__$1,fname,element){
return (function (_){
return cljs_time.format.unparse.call(null,f,b);
});})(f,b,map__43002,map__43002__$1,fname,element))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"biddead","biddead",371948723),new cljs.core.Keyword(null,"invalid","invalid",412869516)], null),((function (f,b,map__43002,map__43002__$1,fname,element){
return (function (_){
return null;
});})(f,b,map__43002,map__43002__$1,fname,element))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projdead","projdead",-925005898),new cljs.core.Keyword(null,"value","value",305978217)], null),((function (f,b,map__43002,map__43002__$1,fname,element){
return (function (_){
return cljs_time.format.unparse.call(null,f,cljs_time.core.plus.call(null,b,cljs_time.core.days.call(null,(1))));
});})(f,b,map__43002,map__43002__$1,fname,element))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projdead","projdead",-925005898),new cljs.core.Keyword(null,"min","min",444991522)], null),((function (f,b,map__43002,map__43002__$1,fname,element){
return (function (_){
return cljs_time.format.unparse.call(null,f,cljs_time.core.plus.call(null,b,cljs_time.core.days.call(null,(1))));
});})(f,b,map__43002,map__43002__$1,fname,element))
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
if(typeof biomarket.newproject.t_biomarket$newproject43011 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject43011 = (function (new_project_nav,control,owner,meta43012){
this.new_project_nav = new_project_nav;
this.control = control;
this.owner = owner;
this.meta43012 = meta43012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject43011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43013,meta43012__$1){
var self__ = this;
var _43013__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject43011(self__.new_project_nav,self__.control,self__.owner,meta43012__$1));
});

biomarket.newproject.t_biomarket$newproject43011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43013){
var self__ = this;
var _43013__$1 = this;
return self__.meta43012;
});

biomarket.newproject.t_biomarket$newproject43011.prototype.om$core$IInitState$ = true;

biomarket.newproject.t_biomarket$newproject43011.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"control","control",1892578036),self__.control,new cljs.core.Keyword(null,"label","label",1718410804),"Open projects"], null);
});

biomarket.newproject.t_biomarket$newproject43011.prototype.om$core$IRenderState$ = true;

biomarket.newproject.t_biomarket$newproject43011.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__43014){
var self__ = this;
var map__43015 = p__43014;
var map__43015__$1 = ((((!((map__43015 == null)))?((((map__43015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43015):map__43015);
var control__$1 = cljs.core.get.call(null,map__43015__$1,new cljs.core.Keyword(null,"control","control",1892578036));
var drop = cljs.core.get.call(null,map__43015__$1,new cljs.core.Keyword(null,"drop","drop",364481611));
var label = cljs.core.get.call(null,map__43015__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var ___$1 = this;
return React.DOM.div(null,React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-heading"},cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,((function (___$1,map__43015,map__43015__$1,control__$1,drop,label){
return (function (p1__43004_SHARP_){
return React.DOM.button({"className": "btn btn-primary", "type": "button", "onClick": cljs.core.second.call(null,p1__43004_SHARP_)},cljs.core.first.call(null,p1__43004_SHARP_));
});})(___$1,map__43015,map__43015__$1,control__$1,drop,label))
,control__$1)))));
});

biomarket.newproject.t_biomarket$newproject43011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"new-project-nav","new-project-nav",-1451594218,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"control","control",-761857733,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"control","control",-761857733,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43012","meta43012",-1663903928,null)], null);
});

biomarket.newproject.t_biomarket$newproject43011.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject43011.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject43011";

biomarket.newproject.t_biomarket$newproject43011.cljs$lang$ctorPrWriter = (function (this__23141__auto__,writer__23142__auto__,opt__23143__auto__){
return cljs.core._write.call(null,writer__23142__auto__,"biomarket.newproject/t_biomarket$newproject43011");
});

biomarket.newproject.__GT_t_biomarket$newproject43011 = (function biomarket$newproject$new_project_nav_$___GT_t_biomarket$newproject43011(new_project_nav__$1,control__$1,owner__$1,meta43012){
return (new biomarket.newproject.t_biomarket$newproject43011(new_project_nav__$1,control__$1,owner__$1,meta43012));
});

}

return (new biomarket.newproject.t_biomarket$newproject43011(biomarket$newproject$new_project_nav,control,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.newproject.min_now = (function biomarket$newproject$min_now(var_args){
var args43017 = [];
var len__23605__auto___43020 = arguments.length;
var i__23606__auto___43021 = (0);
while(true){
if((i__23606__auto___43021 < len__23605__auto___43020)){
args43017.push((arguments[i__23606__auto___43021]));

var G__43022 = (i__23606__auto___43021 + (1));
i__23606__auto___43021 = G__43022;
continue;
} else {
}
break;
}

var G__43019 = args43017.length;
switch (G__43019) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43017.length)].join('')));

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
if(typeof biomarket.newproject.t_biomarket$newproject43044 !== 'undefined'){
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
biomarket.newproject.t_biomarket$newproject43044 = (function (new_project_view,nav_tag,owner,meta43045){
this.new_project_view = new_project_view;
this.nav_tag = nav_tag;
this.owner = owner;
this.meta43045 = meta43045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject43044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43046,meta43045__$1){
var self__ = this;
var _43046__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject43044(self__.new_project_view,self__.nav_tag,self__.owner,meta43045__$1));
});

biomarket.newproject.t_biomarket$newproject43044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43046){
var self__ = this;
var _43046__$1 = this;
return self__.meta43045;
});

biomarket.newproject.t_biomarket$newproject43044.prototype.om$core$IInitState$ = true;

biomarket.newproject.t_biomarket$newproject43044.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
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
return (function (p1__43024_SHARP_){
return !(cljs.core._EQ_.call(null,clojure.string.trim.call(null,p1__43024_SHARP_),""));
});})(___$1))
,"Title cannot be empty."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__43025_SHARP_){
return (cljs.core.count.call(null,p1__43025_SHARP_) > (2));
});})(___$1))
,"Title must be more than 2 characters."], null)], null),"title","","s1","text",false,"Project title:","1"]),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"spid","spid",1854581004),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invalid","invalid",412869516),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"id","id",-1388402092)],["Concise description of the project:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__43026_SHARP_){
return !(cljs.core._EQ_.call(null,clojure.string.trim.call(null,p1__43026_SHARP_),""));
});})(___$1))
,"Description cannot be empty."], null)], null),"description","","s2","textarea",false,"Project description:",(15),"2"]),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"name","name",1843675177),"hours",new cljs.core.Keyword(null,"id","id",-1388402092),"3",new cljs.core.Keyword(null,"spid","spid",1854581004),"s3",new cljs.core.Keyword(null,"title","title",636505583),"Expected days to complete project:",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__43027_SHARP_){
return (p1__43027_SHARP_ >= (1));
});})(___$1))
,"At least one hour must be specified."], null)], null)], null),new cljs.core.Keyword(null,"budget","budget",-405386281),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"name","name",1843675177),"budget",new cljs.core.Keyword(null,"id","id",-1388402092),"4",new cljs.core.Keyword(null,"spid","spid",1854581004),"s4",new cljs.core.Keyword(null,"title","title",636505583),"Project budget (USD):",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__43028_SHARP_){
return (p1__43028_SHARP_ >= (1));
});})(___$1))
,"At least one dollar must be specified."], null)], null)], null),new cljs.core.Keyword(null,"biddead","biddead",371948723),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),biomarket.newproject.min_now.call(null),new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"name","name",1843675177),"biddead",new cljs.core.Keyword(null,"min","min",444991522),biomarket.newproject.min_now.call(null),new cljs.core.Keyword(null,"id","id",-1388402092),"5",new cljs.core.Keyword(null,"spid","spid",1854581004),"s5",new cljs.core.Keyword(null,"title","title",636505583),"Bidding deadline:",new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null),new cljs.core.Keyword(null,"projdead","projdead",-925005898),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),biomarket.newproject.min_now.call(null,(1)),new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"name","name",1843675177),"projdead",new cljs.core.Keyword(null,"min","min",444991522),biomarket.newproject.min_now.call(null,(1)),new cljs.core.Keyword(null,"title","title",636505583),"Project deadline:",new cljs.core.Keyword(null,"id","id",-1388402092),"6",new cljs.core.Keyword(null,"spid","spid",1854581004),"s6",new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null),new cljs.core.Keyword(null,"basis","basis",1865819339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null),new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null);
});

biomarket.newproject.t_biomarket$newproject43044.prototype.om$core$IWillMount$ = true;

biomarket.newproject.t_biomarket$newproject43044.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","inputd","biomarket.newproject/inputd",321228878),((function (___$1){
return (function (o,p__43047){
var map__43048 = p__43047;
var map__43048__$1 = ((((!((map__43048 == null)))?((((map__43048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43048):map__43048);
var data = cljs.core.get.call(null,map__43048__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.utilities.get_input.call(null,o,data);
});})(___$1))
);

biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),((function (___$1){
return (function (o,p__43050){
var map__43051 = p__43050;
var map__43051__$1 = ((((!((map__43051 == null)))?((((map__43051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43051):map__43051);
var data = cljs.core.get.call(null,map__43051__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"basis","basis",1865819339),data);
});})(___$1))
);

biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963),((function (___$1){
return (function (o,p__43053){
var map__43054 = p__43053;
var map__43054__$1 = ((((!((map__43054 == null)))?((((map__43054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43054):map__43054);
var data = cljs.core.get.call(null,map__43054__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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

biomarket.newproject.t_biomarket$newproject43044.prototype.om$core$IWillUnmount$ = true;

biomarket.newproject.t_biomarket$newproject43044.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","inputd","biomarket.newproject/inputd",321228878),new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963),new cljs.core.Keyword("biomarket.newproject","saved","biomarket.newproject/saved",-1780820963),new cljs.core.Keyword("biomarket.newproject","save","biomarket.newproject/save",-175478526));
});

biomarket.newproject.t_biomarket$newproject43044.prototype.om$core$IRenderState$ = true;

biomarket.newproject.t_biomarket$newproject43044.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__43056){
var self__ = this;
var map__43057 = p__43056;
var map__43057__$1 = ((((!((map__43057 == null)))?((((map__43057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43057):map__43057);
var basis = cljs.core.get.call(null,map__43057__$1,new cljs.core.Keyword(null,"basis","basis",1865819339));
var inputs = cljs.core.get.call(null,map__43057__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var nav = cljs.core.get.call(null,map__43057__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var selected_skills = cljs.core.get.call(null,map__43057__$1,new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331));
var ___$1 = this;
return React.DOM.div(null,om.core.build.call(null,biomarket.newproject.new_project_nav,nav),om.core.build.call(null,biomarket.newproject.new_project,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs,selected_skills,basis], null)),om.core.build.call(null,biomarket.newproject.new_project_nav,nav));
});

biomarket.newproject.t_biomarket$newproject43044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"new-project-view","new-project-view",-1395833262,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43045","meta43045",1294700639,null)], null);
});

biomarket.newproject.t_biomarket$newproject43044.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject43044.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject43044";

biomarket.newproject.t_biomarket$newproject43044.cljs$lang$ctorPrWriter = (function (this__23141__auto__,writer__23142__auto__,opt__23143__auto__){
return cljs.core._write.call(null,writer__23142__auto__,"biomarket.newproject/t_biomarket$newproject43044");
});

biomarket.newproject.__GT_t_biomarket$newproject43044 = (function biomarket$newproject$new_project_view_$___GT_t_biomarket$newproject43044(new_project_view__$1,nav_tag__$1,owner__$1,meta43045){
return (new biomarket.newproject.t_biomarket$newproject43044(new_project_view__$1,nav_tag__$1,owner__$1,meta43045));
});

}

return (new biomarket.newproject.t_biomarket$newproject43044(biomarket$newproject$new_project_view,nav_tag,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=newproject.js.map