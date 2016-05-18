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

var seq__32100_32106 = cljs.core.seq.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)));
var chunk__32101_32107 = null;
var count__32102_32108 = (0);
var i__32103_32109 = (0);
while(true){
if((i__32103_32109 < count__32102_32108)){
var vec__32104_32110 = cljs.core._nth.call(null,chunk__32101_32107,i__32103_32109);
var k_32111 = cljs.core.nth.call(null,vec__32104_32110,(0),null);
var v_32112 = cljs.core.nth.call(null,vec__32104_32110,(1),null);
biomarket.utilities.get_input.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fname","fname",1500291491),k_32111,new cljs.core.Keyword(null,"element","element",1974019749),v_32112], null));

var G__32113 = seq__32100_32106;
var G__32114 = chunk__32101_32107;
var G__32115 = count__32102_32108;
var G__32116 = (i__32103_32109 + (1));
seq__32100_32106 = G__32113;
chunk__32101_32107 = G__32114;
count__32102_32108 = G__32115;
i__32103_32109 = G__32116;
continue;
} else {
var temp__4425__auto___32117 = cljs.core.seq.call(null,seq__32100_32106);
if(temp__4425__auto___32117){
var seq__32100_32118__$1 = temp__4425__auto___32117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32100_32118__$1)){
var c__26477__auto___32119 = cljs.core.chunk_first.call(null,seq__32100_32118__$1);
var G__32120 = cljs.core.chunk_rest.call(null,seq__32100_32118__$1);
var G__32121 = c__26477__auto___32119;
var G__32122 = cljs.core.count.call(null,c__26477__auto___32119);
var G__32123 = (0);
seq__32100_32106 = G__32120;
chunk__32101_32107 = G__32121;
count__32102_32108 = G__32122;
i__32103_32109 = G__32123;
continue;
} else {
var vec__32105_32124 = cljs.core.first.call(null,seq__32100_32118__$1);
var k_32125 = cljs.core.nth.call(null,vec__32105_32124,(0),null);
var v_32126 = cljs.core.nth.call(null,vec__32105_32124,(1),null);
biomarket.utilities.get_input.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fname","fname",1500291491),k_32125,new cljs.core.Keyword(null,"element","element",1974019749),v_32126], null));

var G__32127 = cljs.core.next.call(null,seq__32100_32118__$1);
var G__32128 = null;
var G__32129 = (0);
var G__32130 = (0);
seq__32100_32106 = G__32127;
chunk__32101_32107 = G__32128;
count__32102_32108 = G__32129;
i__32103_32109 = G__32130;
continue;
}
} else {
}
}
break;
}

return (cljs.core.every_QMARK_.call(null,((function (b,s){
return (function (p1__32093_SHARP_){
return (new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(p1__32093_SHARP_) == null);
});})(b,s))
,cljs.core.vals.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858))))) && (cljs.core.not.call(null,b)) && (cljs.core.not.call(null,s));
});
biomarket.newproject.get_skills = (function biomarket$newproject$get_skills(owner){
var h = (function (p__32134){
var map__32135 = p__32134;
var map__32135__$1 = ((((!((map__32135 == null)))?((((map__32135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32135):map__32135);
var status = cljs.core.get.call(null,map__32135__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__32135__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core.truth_((function (){var and__25654__auto__ = cljs.core._EQ_.call(null,"success",status);
if(and__25654__auto__){
return result;
} else {
return and__25654__auto__;
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
var h = (function (p__32142){
var map__32143 = p__32142;
var map__32143__$1 = ((((!((map__32143 == null)))?((((map__32143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32143):map__32143);
var status = cljs.core.get.call(null,map__32143__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__32143__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.call(null,status,"success")){
return biomarket.utilities.pub_info.call(null,owner,new cljs.core.Keyword("biomarket.newproject","saved","biomarket.newproject/saved",-1780820963),result);
} else {
return null;
}
});
if(cljs.core.truth_(biomarket.newproject.all_good_QMARK_.call(null,owner))){
return biomarket.utilities.post_params.call(null,"/new-project",cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (h){
return (function (p__32145){
var vec__32146 = p__32145;
var k = cljs.core.nth.call(null,vec__32146,(0),null);
var v = cljs.core.nth.call(null,vec__32146,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(v)],null));
});})(h))
,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"basis","basis",1865819339),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"basis","basis",1865819339))),new cljs.core.Keyword(null,"skills","skills",958701426),cljs.core.keys.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331))))], null)),h);
} else {
return null;
}
});
biomarket.newproject.skills = (function biomarket$newproject$skills(selected,owner){
if(typeof biomarket.newproject.t_biomarket$newproject32158 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject32158 = (function (skills,selected,owner,meta32159){
this.skills = skills;
this.selected = selected;
this.owner = owner;
this.meta32159 = meta32159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject32158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32160,meta32159__$1){
var self__ = this;
var _32160__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject32158(self__.skills,self__.selected,self__.owner,meta32159__$1));
});

biomarket.newproject.t_biomarket$newproject32158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32160){
var self__ = this;
var _32160__$1 = this;
return self__.meta32159;
});

biomarket.newproject.t_biomarket$newproject32158.prototype.om$core$IInitState$ = true;

biomarket.newproject.t_biomarket$newproject32158.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skills","skills",958701426),null], null);
});

biomarket.newproject.t_biomarket$newproject32158.prototype.om$core$IWillMount$ = true;

biomarket.newproject.t_biomarket$newproject32158.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.newproject.get_skills.call(null,self__.owner);
});

biomarket.newproject.t_biomarket$newproject32158.prototype.om$core$IRenderState$ = true;

biomarket.newproject.t_biomarket$newproject32158.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__32161){
var self__ = this;
var map__32162 = p__32161;
var map__32162__$1 = ((((!((map__32162 == null)))?((((map__32162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32162):map__32162);
var skills__$1 = cljs.core.get.call(null,map__32162__$1,new cljs.core.Keyword(null,"skills","skills",958701426));
var ___$1 = this;
return React.DOM.div({"className": (function (){var pred__32164 = cljs.core._EQ_;
var expr__32165 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.selected);
if(cljs.core.truth_(pred__32164.call(null,false,expr__32165))){
return "";
} else {
if(cljs.core.truth_(pred__32164.call(null,null,expr__32165))){
return "has-success";
} else {
return "has-error";
}
}
})()},React.DOM.label({"className": "control-label"},"Required skills:",React.DOM.label(null,"Scientific",om.core.build.call(null,biomarket.utilities.skill_tags,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,((function (___$1,map__32162,map__32162__$1,skills__$1){
return (function (p1__32147_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__32147_SHARP_),"bskill");
});})(___$1,map__32162,map__32162__$1,skills__$1))
,skills__$1),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.selected),new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963)], null))),React.DOM.label(null,"IT",om.core.build.call(null,biomarket.utilities.skill_tags,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,((function (___$1,map__32162,map__32162__$1,skills__$1){
return (function (p1__32148_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__32148_SHARP_),"cskill");
});})(___$1,map__32162,map__32162__$1,skills__$1))
,skills__$1),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.selected),new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963)], null))),React.DOM.span({"className": "help-block"},(cljs.core.truth_(new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.selected))?cljs.core.first.call(null,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.selected)):null))));
});

biomarket.newproject.t_biomarket$newproject32158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"skills","skills",-1695734343,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta32159","meta32159",-2065252505,null)], null);
});

biomarket.newproject.t_biomarket$newproject32158.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject32158.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject32158";

biomarket.newproject.t_biomarket$newproject32158.cljs$lang$ctorPrWriter = (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.newproject/t_biomarket$newproject32158");
});

biomarket.newproject.__GT_t_biomarket$newproject32158 = (function biomarket$newproject$skills_$___GT_t_biomarket$newproject32158(skills__$1,selected__$1,owner__$1,meta32159){
return (new biomarket.newproject.t_biomarket$newproject32158(skills__$1,selected__$1,owner__$1,meta32159));
});

}

return (new biomarket.newproject.t_biomarket$newproject32158(biomarket$newproject$skills,selected,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.newproject.basis_radios = (function biomarket$newproject$basis_radios(state,owner){
if(typeof biomarket.newproject.t_biomarket$newproject32173 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject32173 = (function (basis_radios,state,owner,meta32174){
this.basis_radios = basis_radios;
this.state = state;
this.owner = owner;
this.meta32174 = meta32174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject32173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32175,meta32174__$1){
var self__ = this;
var _32175__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject32173(self__.basis_radios,self__.state,self__.owner,meta32174__$1));
});

biomarket.newproject.t_biomarket$newproject32173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32175){
var self__ = this;
var _32175__$1 = this;
return self__.meta32174;
});

biomarket.newproject.t_biomarket$newproject32173.prototype.om$core$IRender$ = true;

biomarket.newproject.t_biomarket$newproject32173.prototype.om$core$IRender$render$arity$1 = (function (this__28640__auto__){
var self__ = this;
var this__28640__auto____$1 = this;
return React.DOM.div({"className": (function (){var pred__32176 = cljs.core._EQ_;
var expr__32177 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.state);
if(cljs.core.truth_(pred__32176.call(null,false,expr__32177))){
return "";
} else {
if(cljs.core.truth_(pred__32176.call(null,null,expr__32177))){
return "has-success";
} else {
return "has-error";
}
}
})()},React.DOM.label({"className": "control-label"},"Payment basis:"),React.DOM.label({"className": "checkbox-inline"},om.dom.input.call(null,{"type": "radio", "name": "basis", "value": "per hour", "checked": ((cljs.core._EQ_.call(null,"per hour",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.state)))?"true":null), "onClick": ((function (this__28640__auto____$1){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"per hour",new cljs.core.Keyword(null,"invalid","invalid",412869516),null], null));
});})(this__28640__auto____$1))
})," Per hour"),React.DOM.label({"className": "checkbox-inline"},om.dom.input.call(null,{"type": "radio", "name": "basis", "value": "total", "checked": ((cljs.core._EQ_.call(null,"total",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.state)))?"true":null), "onClick": ((function (this__28640__auto____$1){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"total",new cljs.core.Keyword(null,"invalid","invalid",412869516),null], null));
});})(this__28640__auto____$1))
})," Total"),React.DOM.span({"className": "help-block"},(cljs.core.truth_(new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.state))?cljs.core.first.call(null,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.state)):null)));
});

biomarket.newproject.t_biomarket$newproject32173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"basis-radios","basis-radios",-857594928,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta32174","meta32174",-404917988,null)], null);
});

biomarket.newproject.t_biomarket$newproject32173.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject32173.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject32173";

biomarket.newproject.t_biomarket$newproject32173.cljs$lang$ctorPrWriter = (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.newproject/t_biomarket$newproject32173");
});

biomarket.newproject.__GT_t_biomarket$newproject32173 = (function biomarket$newproject$basis_radios_$___GT_t_biomarket$newproject32173(basis_radios__$1,state__$1,owner__$1,meta32174){
return (new biomarket.newproject.t_biomarket$newproject32173(basis_radios__$1,state__$1,owner__$1,meta32174));
});

}

return (new biomarket.newproject.t_biomarket$newproject32173(biomarket$newproject$basis_radios,state,owner,null));
});
biomarket.newproject.new_project = (function biomarket$newproject$new_project(p__32180,owner){
var vec__32185 = p__32180;
var finputs = cljs.core.nth.call(null,vec__32185,(0),null);
var selected_skills = cljs.core.nth.call(null,vec__32185,(1),null);
var basis = cljs.core.nth.call(null,vec__32185,(2),null);
if(typeof biomarket.newproject.t_biomarket$newproject32186 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject32186 = (function (new_project,p__32180,owner,vec__32185,finputs,selected_skills,basis,meta32187){
this.new_project = new_project;
this.p__32180 = p__32180;
this.owner = owner;
this.vec__32185 = vec__32185;
this.finputs = finputs;
this.selected_skills = selected_skills;
this.basis = basis;
this.meta32187 = meta32187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject32186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__32185,finputs,selected_skills,basis){
return (function (_32188,meta32187__$1){
var self__ = this;
var _32188__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject32186(self__.new_project,self__.p__32180,self__.owner,self__.vec__32185,self__.finputs,self__.selected_skills,self__.basis,meta32187__$1));
});})(vec__32185,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject32186.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__32185,finputs,selected_skills,basis){
return (function (_32188){
var self__ = this;
var _32188__$1 = this;
return self__.meta32187;
});})(vec__32185,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject32186.prototype.om$core$IRender$ = true;

biomarket.newproject.t_biomarket$newproject32186.prototype.om$core$IRender$render$arity$1 = ((function (vec__32185,finputs,selected_skills,basis){
return (function (this__28640__auto__){
var self__ = this;
var this__28640__auto____$1 = this;
return React.DOM.div({"style": {"padding-top": "1em"}},React.DOM.div({"className": "panel panel-default", "style": {"text-align": "left"}},React.DOM.div({"className": "panel-heading"},React.DOM.div({"style": {"font-weight": "bold", "font-size": "large"}},(function (){var v = cljs.core.get_in.call(null,self__.finputs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"value","value",305978217)], null));
if(!(cljs.core._EQ_.call(null,"",clojure.string.trim.call(null,v)))){
return v;
} else {
return "New Project";
}
})())),React.DOM.div({"className": "panel-body"},React.DOM.form(null,cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (this__28640__auto____$1,vec__32185,finputs,selected_skills,basis){
return (function (p1__32179_SHARP_){
return om.core.build.call(null,biomarket.utilities.input,cljs.core.conj.call(null,p1__32179_SHARP_,new cljs.core.Keyword("biomarket.newproject","inputd","biomarket.newproject/inputd",321228878)));
});})(this__28640__auto____$1,vec__32185,finputs,selected_skills,basis))
,self__.finputs)),om.core.build.call(null,biomarket.newproject.basis_radios,self__.basis)),om.core.build.call(null,biomarket.newproject.skills,self__.selected_skills))));
});})(vec__32185,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject32186.getBasis = ((function (vec__32185,finputs,selected_skills,basis){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"new-project","new-project",-306914109,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"finputs","finputs",-2006753159,null),new cljs.core.Symbol(null,"selected-skills","selected-skills",-1784500438,null),new cljs.core.Symbol(null,"basis","basis",-788616430,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__32180","p__32180",-1100855714,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__32185","vec__32185",-643619841,null),new cljs.core.Symbol(null,"finputs","finputs",-2006753159,null),new cljs.core.Symbol(null,"selected-skills","selected-skills",-1784500438,null),new cljs.core.Symbol(null,"basis","basis",-788616430,null),new cljs.core.Symbol(null,"meta32187","meta32187",389208569,null)], null);
});})(vec__32185,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject32186.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject32186.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject32186";

biomarket.newproject.t_biomarket$newproject32186.cljs$lang$ctorPrWriter = ((function (vec__32185,finputs,selected_skills,basis){
return (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.newproject/t_biomarket$newproject32186");
});})(vec__32185,finputs,selected_skills,basis))
;

biomarket.newproject.__GT_t_biomarket$newproject32186 = ((function (vec__32185,finputs,selected_skills,basis){
return (function biomarket$newproject$new_project_$___GT_t_biomarket$newproject32186(new_project__$1,p__32180__$1,owner__$1,vec__32185__$1,finputs__$1,selected_skills__$1,basis__$1,meta32187){
return (new biomarket.newproject.t_biomarket$newproject32186(new_project__$1,p__32180__$1,owner__$1,vec__32185__$1,finputs__$1,selected_skills__$1,basis__$1,meta32187));
});})(vec__32185,finputs,selected_skills,basis))
;

}

return (new biomarket.newproject.t_biomarket$newproject32186(biomarket$newproject$new_project,p__32180,owner,vec__32185,finputs,selected_skills,basis,null));
});
cljs.core._add_method.call(null,biomarket.utilities.get_input,new cljs.core.Keyword(null,"biddead","biddead",371948723),(function (owner,p__32189){
var map__32190 = p__32189;
var map__32190__$1 = ((((!((map__32190 == null)))?((((map__32190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32190):map__32190);
var fname = cljs.core.get.call(null,map__32190__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__32190__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var f = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date","date",-1463434462));
var b = cljs_time.format.parse.call(null,f,cljs.core.get_in.call(null,element,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null)));
var new$ = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"biddead","biddead",371948723),new cljs.core.Keyword(null,"value","value",305978217)], null),((function (f,b,map__32190,map__32190__$1,fname,element){
return (function (_){
return cljs_time.format.unparse.call(null,f,b);
});})(f,b,map__32190,map__32190__$1,fname,element))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"biddead","biddead",371948723),new cljs.core.Keyword(null,"invalid","invalid",412869516)], null),((function (f,b,map__32190,map__32190__$1,fname,element){
return (function (_){
return null;
});})(f,b,map__32190,map__32190__$1,fname,element))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projdead","projdead",-925005898),new cljs.core.Keyword(null,"value","value",305978217)], null),((function (f,b,map__32190,map__32190__$1,fname,element){
return (function (_){
return cljs_time.format.unparse.call(null,f,cljs_time.core.plus.call(null,b,cljs_time.core.days.call(null,(1))));
});})(f,b,map__32190,map__32190__$1,fname,element))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projdead","projdead",-925005898),new cljs.core.Keyword(null,"min","min",444991522)], null),((function (f,b,map__32190,map__32190__$1,fname,element){
return (function (_){
return cljs_time.format.unparse.call(null,f,cljs_time.core.plus.call(null,b,cljs_time.core.days.call(null,(1))));
});})(f,b,map__32190,map__32190__$1,fname,element))
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
if(typeof biomarket.newproject.t_biomarket$newproject32199 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject32199 = (function (new_project_nav,control,owner,meta32200){
this.new_project_nav = new_project_nav;
this.control = control;
this.owner = owner;
this.meta32200 = meta32200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject32199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32201,meta32200__$1){
var self__ = this;
var _32201__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject32199(self__.new_project_nav,self__.control,self__.owner,meta32200__$1));
});

biomarket.newproject.t_biomarket$newproject32199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32201){
var self__ = this;
var _32201__$1 = this;
return self__.meta32200;
});

biomarket.newproject.t_biomarket$newproject32199.prototype.om$core$IInitState$ = true;

biomarket.newproject.t_biomarket$newproject32199.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"control","control",1892578036),self__.control,new cljs.core.Keyword(null,"label","label",1718410804),"Open projects"], null);
});

biomarket.newproject.t_biomarket$newproject32199.prototype.om$core$IRenderState$ = true;

biomarket.newproject.t_biomarket$newproject32199.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__32202){
var self__ = this;
var map__32203 = p__32202;
var map__32203__$1 = ((((!((map__32203 == null)))?((((map__32203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32203):map__32203);
var control__$1 = cljs.core.get.call(null,map__32203__$1,new cljs.core.Keyword(null,"control","control",1892578036));
var drop = cljs.core.get.call(null,map__32203__$1,new cljs.core.Keyword(null,"drop","drop",364481611));
var label = cljs.core.get.call(null,map__32203__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var ___$1 = this;
return React.DOM.div(null,React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-heading"},cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,((function (___$1,map__32203,map__32203__$1,control__$1,drop,label){
return (function (p1__32192_SHARP_){
return React.DOM.a({"className": "btn btn-primary", "type": "button", "onClick": cljs.core.second.call(null,p1__32192_SHARP_)},cljs.core.first.call(null,p1__32192_SHARP_));
});})(___$1,map__32203,map__32203__$1,control__$1,drop,label))
,control__$1)))));
});

biomarket.newproject.t_biomarket$newproject32199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"new-project-nav","new-project-nav",-1451594218,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"control","control",-761857733,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"control","control",-761857733,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta32200","meta32200",-623021143,null)], null);
});

biomarket.newproject.t_biomarket$newproject32199.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject32199.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject32199";

biomarket.newproject.t_biomarket$newproject32199.cljs$lang$ctorPrWriter = (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.newproject/t_biomarket$newproject32199");
});

biomarket.newproject.__GT_t_biomarket$newproject32199 = (function biomarket$newproject$new_project_nav_$___GT_t_biomarket$newproject32199(new_project_nav__$1,control__$1,owner__$1,meta32200){
return (new biomarket.newproject.t_biomarket$newproject32199(new_project_nav__$1,control__$1,owner__$1,meta32200));
});

}

return (new biomarket.newproject.t_biomarket$newproject32199(biomarket$newproject$new_project_nav,control,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.newproject.min_now = (function biomarket$newproject$min_now(var_args){
var args32205 = [];
var len__26736__auto___32208 = arguments.length;
var i__26737__auto___32209 = (0);
while(true){
if((i__26737__auto___32209 < len__26736__auto___32208)){
args32205.push((arguments[i__26737__auto___32209]));

var G__32210 = (i__26737__auto___32209 + (1));
i__26737__auto___32209 = G__32210;
continue;
} else {
}
break;
}

var G__32207 = args32205.length;
switch (G__32207) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32205.length)].join('')));

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
if(typeof biomarket.newproject.t_biomarket$newproject32232 !== 'undefined'){
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
biomarket.newproject.t_biomarket$newproject32232 = (function (new_project_view,nav_tag,owner,meta32233){
this.new_project_view = new_project_view;
this.nav_tag = nav_tag;
this.owner = owner;
this.meta32233 = meta32233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject32232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32234,meta32233__$1){
var self__ = this;
var _32234__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject32232(self__.new_project_view,self__.nav_tag,self__.owner,meta32233__$1));
});

biomarket.newproject.t_biomarket$newproject32232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32234){
var self__ = this;
var _32234__$1 = this;
return self__.meta32233;
});

biomarket.newproject.t_biomarket$newproject32232.prototype.om$core$IInitState$ = true;

biomarket.newproject.t_biomarket$newproject32232.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
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
return (function (p1__32212_SHARP_){
return !(cljs.core._EQ_.call(null,clojure.string.trim.call(null,p1__32212_SHARP_),""));
});})(___$1))
,"Title cannot be empty."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__32213_SHARP_){
return (cljs.core.count.call(null,p1__32213_SHARP_) > (2));
});})(___$1))
,"Title must be more than 2 characters."], null)], null),"title","","s1","text",false,"Project title:","1"]),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"spid","spid",1854581004),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invalid","invalid",412869516),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"id","id",-1388402092)],["Concise description of the project:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__32214_SHARP_){
return !(cljs.core._EQ_.call(null,clojure.string.trim.call(null,p1__32214_SHARP_),""));
});})(___$1))
,"Description cannot be empty."], null)], null),"description","","s2","textarea",false,"Project description:",(15),"2"]),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"name","name",1843675177),"hours",new cljs.core.Keyword(null,"id","id",-1388402092),"3",new cljs.core.Keyword(null,"spid","spid",1854581004),"s3",new cljs.core.Keyword(null,"title","title",636505583),"Expected days to complete project:",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__32215_SHARP_){
return (p1__32215_SHARP_ >= (1));
});})(___$1))
,"At least one hour must be specified."], null)], null)], null),new cljs.core.Keyword(null,"budget","budget",-405386281),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"name","name",1843675177),"budget",new cljs.core.Keyword(null,"id","id",-1388402092),"4",new cljs.core.Keyword(null,"spid","spid",1854581004),"s4",new cljs.core.Keyword(null,"title","title",636505583),"Project budget (USD):",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__32216_SHARP_){
return (p1__32216_SHARP_ >= (1));
});})(___$1))
,"At least one dollar must be specified."], null)], null)], null),new cljs.core.Keyword(null,"biddead","biddead",371948723),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),biomarket.newproject.min_now.call(null),new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"name","name",1843675177),"biddead",new cljs.core.Keyword(null,"min","min",444991522),biomarket.newproject.min_now.call(null),new cljs.core.Keyword(null,"id","id",-1388402092),"5",new cljs.core.Keyword(null,"spid","spid",1854581004),"s5",new cljs.core.Keyword(null,"title","title",636505583),"Bidding deadline:",new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null),new cljs.core.Keyword(null,"projdead","projdead",-925005898),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),biomarket.newproject.min_now.call(null,(1)),new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"name","name",1843675177),"projdead",new cljs.core.Keyword(null,"min","min",444991522),biomarket.newproject.min_now.call(null,(1)),new cljs.core.Keyword(null,"title","title",636505583),"Project deadline:",new cljs.core.Keyword(null,"id","id",-1388402092),"6",new cljs.core.Keyword(null,"spid","spid",1854581004),"s6",new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null),new cljs.core.Keyword(null,"basis","basis",1865819339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null),new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null);
});

biomarket.newproject.t_biomarket$newproject32232.prototype.om$core$IWillMount$ = true;

biomarket.newproject.t_biomarket$newproject32232.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","inputd","biomarket.newproject/inputd",321228878),((function (___$1){
return (function (o,p__32235){
var map__32236 = p__32235;
var map__32236__$1 = ((((!((map__32236 == null)))?((((map__32236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32236):map__32236);
var data = cljs.core.get.call(null,map__32236__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.utilities.get_input.call(null,o,data);
});})(___$1))
);

biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),((function (___$1){
return (function (o,p__32238){
var map__32239 = p__32238;
var map__32239__$1 = ((((!((map__32239 == null)))?((((map__32239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32239):map__32239);
var data = cljs.core.get.call(null,map__32239__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"basis","basis",1865819339),data);
});})(___$1))
);

biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963),((function (___$1){
return (function (o,p__32241){
var map__32242 = p__32241;
var map__32242__$1 = ((((!((map__32242 == null)))?((((map__32242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32242):map__32242);
var data = cljs.core.get.call(null,map__32242__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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

biomarket.newproject.t_biomarket$newproject32232.prototype.om$core$IWillUnmount$ = true;

biomarket.newproject.t_biomarket$newproject32232.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","inputd","biomarket.newproject/inputd",321228878),new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963),new cljs.core.Keyword("biomarket.newproject","saved","biomarket.newproject/saved",-1780820963),new cljs.core.Keyword("biomarket.newproject","save","biomarket.newproject/save",-175478526));
});

biomarket.newproject.t_biomarket$newproject32232.prototype.om$core$IRenderState$ = true;

biomarket.newproject.t_biomarket$newproject32232.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__32244){
var self__ = this;
var map__32245 = p__32244;
var map__32245__$1 = ((((!((map__32245 == null)))?((((map__32245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32245):map__32245);
var basis = cljs.core.get.call(null,map__32245__$1,new cljs.core.Keyword(null,"basis","basis",1865819339));
var inputs = cljs.core.get.call(null,map__32245__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var nav = cljs.core.get.call(null,map__32245__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var selected_skills = cljs.core.get.call(null,map__32245__$1,new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331));
var ___$1 = this;
return React.DOM.div(null,om.core.build.call(null,biomarket.newproject.new_project_nav,nav),om.core.build.call(null,biomarket.newproject.new_project,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs,selected_skills,basis], null)),om.core.build.call(null,biomarket.newproject.new_project_nav,nav));
});

biomarket.newproject.t_biomarket$newproject32232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"new-project-view","new-project-view",-1395833262,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta32233","meta32233",-925382242,null)], null);
});

biomarket.newproject.t_biomarket$newproject32232.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject32232.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject32232";

biomarket.newproject.t_biomarket$newproject32232.cljs$lang$ctorPrWriter = (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.newproject/t_biomarket$newproject32232");
});

biomarket.newproject.__GT_t_biomarket$newproject32232 = (function biomarket$newproject$new_project_view_$___GT_t_biomarket$newproject32232(new_project_view__$1,nav_tag__$1,owner__$1,meta32233){
return (new biomarket.newproject.t_biomarket$newproject32232(new_project_view__$1,nav_tag__$1,owner__$1,meta32233));
});

}

return (new biomarket.newproject.t_biomarket$newproject32232(biomarket$newproject$new_project_view,nav_tag,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=newproject.js.map