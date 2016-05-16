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

var seq__120069_120075 = cljs.core.seq.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)));
var chunk__120070_120076 = null;
var count__120071_120077 = (0);
var i__120072_120078 = (0);
while(true){
if((i__120072_120078 < count__120071_120077)){
var vec__120073_120079 = cljs.core._nth.call(null,chunk__120070_120076,i__120072_120078);
var k_120080 = cljs.core.nth.call(null,vec__120073_120079,(0),null);
var v_120081 = cljs.core.nth.call(null,vec__120073_120079,(1),null);
biomarket.utilities.get_input.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fname","fname",1500291491),k_120080,new cljs.core.Keyword(null,"element","element",1974019749),v_120081], null));

var G__120082 = seq__120069_120075;
var G__120083 = chunk__120070_120076;
var G__120084 = count__120071_120077;
var G__120085 = (i__120072_120078 + (1));
seq__120069_120075 = G__120082;
chunk__120070_120076 = G__120083;
count__120071_120077 = G__120084;
i__120072_120078 = G__120085;
continue;
} else {
var temp__4425__auto___120086 = cljs.core.seq.call(null,seq__120069_120075);
if(temp__4425__auto___120086){
var seq__120069_120087__$1 = temp__4425__auto___120086;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__120069_120087__$1)){
var c__23568__auto___120088 = cljs.core.chunk_first.call(null,seq__120069_120087__$1);
var G__120089 = cljs.core.chunk_rest.call(null,seq__120069_120087__$1);
var G__120090 = c__23568__auto___120088;
var G__120091 = cljs.core.count.call(null,c__23568__auto___120088);
var G__120092 = (0);
seq__120069_120075 = G__120089;
chunk__120070_120076 = G__120090;
count__120071_120077 = G__120091;
i__120072_120078 = G__120092;
continue;
} else {
var vec__120074_120093 = cljs.core.first.call(null,seq__120069_120087__$1);
var k_120094 = cljs.core.nth.call(null,vec__120074_120093,(0),null);
var v_120095 = cljs.core.nth.call(null,vec__120074_120093,(1),null);
biomarket.utilities.get_input.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fname","fname",1500291491),k_120094,new cljs.core.Keyword(null,"element","element",1974019749),v_120095], null));

var G__120096 = cljs.core.next.call(null,seq__120069_120087__$1);
var G__120097 = null;
var G__120098 = (0);
var G__120099 = (0);
seq__120069_120075 = G__120096;
chunk__120070_120076 = G__120097;
count__120071_120077 = G__120098;
i__120072_120078 = G__120099;
continue;
}
} else {
}
}
break;
}

return (cljs.core.every_QMARK_.call(null,((function (b,s){
return (function (p1__120062_SHARP_){
return (new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(p1__120062_SHARP_) == null);
});})(b,s))
,cljs.core.vals.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858))))) && (cljs.core.not.call(null,b)) && (cljs.core.not.call(null,s));
});
biomarket.newproject.get_skills = (function biomarket$newproject$get_skills(owner){
var h = (function (p__120103){
var map__120104 = p__120103;
var map__120104__$1 = ((((!((map__120104 == null)))?((((map__120104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120104):map__120104);
var status = cljs.core.get.call(null,map__120104__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__120104__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core.truth_((function (){var and__22745__auto__ = cljs.core._EQ_.call(null,"success",status);
if(and__22745__auto__){
return result;
} else {
return and__22745__auto__;
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
var h = (function (p__120111){
var map__120112 = p__120111;
var map__120112__$1 = ((((!((map__120112 == null)))?((((map__120112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120112):map__120112);
var status = cljs.core.get.call(null,map__120112__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__120112__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.call(null,status,"success")){
return biomarket.utilities.pub_info.call(null,owner,new cljs.core.Keyword("biomarket.newproject","saved","biomarket.newproject/saved",-1780820963),result);
} else {
return null;
}
});
if(cljs.core.truth_(biomarket.newproject.all_good_QMARK_.call(null,owner))){
return biomarket.utilities.post_params.call(null,"/new-project",cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (h){
return (function (p__120114){
var vec__120115 = p__120114;
var k = cljs.core.nth.call(null,vec__120115,(0),null);
var v = cljs.core.nth.call(null,vec__120115,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(v)],null));
});})(h))
,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"basis","basis",1865819339),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"basis","basis",1865819339))),new cljs.core.Keyword(null,"skills","skills",958701426),cljs.core.keys.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331))))], null)),h);
} else {
return null;
}
});
biomarket.newproject.skills = (function biomarket$newproject$skills(selected,owner){
if(typeof biomarket.newproject.t_biomarket$newproject120127 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject120127 = (function (skills,selected,owner,meta120128){
this.skills = skills;
this.selected = selected;
this.owner = owner;
this.meta120128 = meta120128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject120127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_120129,meta120128__$1){
var self__ = this;
var _120129__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject120127(self__.skills,self__.selected,self__.owner,meta120128__$1));
});

biomarket.newproject.t_biomarket$newproject120127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_120129){
var self__ = this;
var _120129__$1 = this;
return self__.meta120128;
});

biomarket.newproject.t_biomarket$newproject120127.prototype.om$core$IInitState$ = true;

biomarket.newproject.t_biomarket$newproject120127.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skills","skills",958701426),null], null);
});

biomarket.newproject.t_biomarket$newproject120127.prototype.om$core$IWillMount$ = true;

biomarket.newproject.t_biomarket$newproject120127.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.newproject.get_skills.call(null,self__.owner);
});

biomarket.newproject.t_biomarket$newproject120127.prototype.om$core$IRenderState$ = true;

biomarket.newproject.t_biomarket$newproject120127.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__120130){
var self__ = this;
var map__120131 = p__120130;
var map__120131__$1 = ((((!((map__120131 == null)))?((((map__120131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120131):map__120131);
var skills__$1 = cljs.core.get.call(null,map__120131__$1,new cljs.core.Keyword(null,"skills","skills",958701426));
var ___$1 = this;
return React.DOM.div({"className": (function (){var pred__120133 = cljs.core._EQ_;
var expr__120134 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.selected);
if(cljs.core.truth_(pred__120133.call(null,false,expr__120134))){
return "";
} else {
if(cljs.core.truth_(pred__120133.call(null,null,expr__120134))){
return "has-success";
} else {
return "has-error";
}
}
})()},React.DOM.label({"className": "control-label"},"Required skills:",React.DOM.label(null,"Scientific",om.core.build.call(null,biomarket.utilities.skill_tags,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,((function (___$1,map__120131,map__120131__$1,skills__$1){
return (function (p1__120116_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__120116_SHARP_),"bskill");
});})(___$1,map__120131,map__120131__$1,skills__$1))
,skills__$1),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.selected),new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963)], null))),React.DOM.label(null,"IT",om.core.build.call(null,biomarket.utilities.skill_tags,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,((function (___$1,map__120131,map__120131__$1,skills__$1){
return (function (p1__120117_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__120117_SHARP_),"cskill");
});})(___$1,map__120131,map__120131__$1,skills__$1))
,skills__$1),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.selected),new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963)], null))),React.DOM.span({"className": "help-block"},(cljs.core.truth_(new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.selected))?cljs.core.first.call(null,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.selected)):null))));
});

biomarket.newproject.t_biomarket$newproject120127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"skills","skills",-1695734343,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta120128","meta120128",-684316042,null)], null);
});

biomarket.newproject.t_biomarket$newproject120127.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject120127.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject120127";

biomarket.newproject.t_biomarket$newproject120127.cljs$lang$ctorPrWriter = (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.newproject/t_biomarket$newproject120127");
});

biomarket.newproject.__GT_t_biomarket$newproject120127 = (function biomarket$newproject$skills_$___GT_t_biomarket$newproject120127(skills__$1,selected__$1,owner__$1,meta120128){
return (new biomarket.newproject.t_biomarket$newproject120127(skills__$1,selected__$1,owner__$1,meta120128));
});

}

return (new biomarket.newproject.t_biomarket$newproject120127(biomarket$newproject$skills,selected,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.newproject.basis_radios = (function biomarket$newproject$basis_radios(state,owner){
if(typeof biomarket.newproject.t_biomarket$newproject120142 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject120142 = (function (basis_radios,state,owner,meta120143){
this.basis_radios = basis_radios;
this.state = state;
this.owner = owner;
this.meta120143 = meta120143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject120142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_120144,meta120143__$1){
var self__ = this;
var _120144__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject120142(self__.basis_radios,self__.state,self__.owner,meta120143__$1));
});

biomarket.newproject.t_biomarket$newproject120142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_120144){
var self__ = this;
var _120144__$1 = this;
return self__.meta120143;
});

biomarket.newproject.t_biomarket$newproject120142.prototype.om$core$IRender$ = true;

biomarket.newproject.t_biomarket$newproject120142.prototype.om$core$IRender$render$arity$1 = (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
return React.DOM.div({"className": (function (){var pred__120145 = cljs.core._EQ_;
var expr__120146 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.state);
if(cljs.core.truth_(pred__120145.call(null,false,expr__120146))){
return "";
} else {
if(cljs.core.truth_(pred__120145.call(null,null,expr__120146))){
return "has-success";
} else {
return "has-error";
}
}
})()},React.DOM.label({"className": "control-label"},"Payment basis:"),React.DOM.label({"className": "checkbox-inline"},om.dom.input.call(null,{"type": "radio", "name": "basis", "value": "per hour", "checked": ((cljs.core._EQ_.call(null,"per hour",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.state)))?"true":null), "onClick": ((function (this__25716__auto____$1){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"per hour",new cljs.core.Keyword(null,"invalid","invalid",412869516),null], null));
});})(this__25716__auto____$1))
})," Per hour"),React.DOM.label({"className": "checkbox-inline"},om.dom.input.call(null,{"type": "radio", "name": "basis", "value": "total", "checked": ((cljs.core._EQ_.call(null,"total",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.state)))?"true":null), "onClick": ((function (this__25716__auto____$1){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"total",new cljs.core.Keyword(null,"invalid","invalid",412869516),null], null));
});})(this__25716__auto____$1))
})," Total"),React.DOM.span({"className": "help-block"},(cljs.core.truth_(new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.state))?cljs.core.first.call(null,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.state)):null)));
});

biomarket.newproject.t_biomarket$newproject120142.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"basis-radios","basis-radios",-857594928,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta120143","meta120143",-1444467769,null)], null);
});

biomarket.newproject.t_biomarket$newproject120142.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject120142.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject120142";

biomarket.newproject.t_biomarket$newproject120142.cljs$lang$ctorPrWriter = (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.newproject/t_biomarket$newproject120142");
});

biomarket.newproject.__GT_t_biomarket$newproject120142 = (function biomarket$newproject$basis_radios_$___GT_t_biomarket$newproject120142(basis_radios__$1,state__$1,owner__$1,meta120143){
return (new biomarket.newproject.t_biomarket$newproject120142(basis_radios__$1,state__$1,owner__$1,meta120143));
});

}

return (new biomarket.newproject.t_biomarket$newproject120142(biomarket$newproject$basis_radios,state,owner,null));
});
biomarket.newproject.new_project = (function biomarket$newproject$new_project(p__120149,owner){
var vec__120154 = p__120149;
var finputs = cljs.core.nth.call(null,vec__120154,(0),null);
var selected_skills = cljs.core.nth.call(null,vec__120154,(1),null);
var basis = cljs.core.nth.call(null,vec__120154,(2),null);
if(typeof biomarket.newproject.t_biomarket$newproject120155 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject120155 = (function (new_project,p__120149,owner,vec__120154,finputs,selected_skills,basis,meta120156){
this.new_project = new_project;
this.p__120149 = p__120149;
this.owner = owner;
this.vec__120154 = vec__120154;
this.finputs = finputs;
this.selected_skills = selected_skills;
this.basis = basis;
this.meta120156 = meta120156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject120155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__120154,finputs,selected_skills,basis){
return (function (_120157,meta120156__$1){
var self__ = this;
var _120157__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject120155(self__.new_project,self__.p__120149,self__.owner,self__.vec__120154,self__.finputs,self__.selected_skills,self__.basis,meta120156__$1));
});})(vec__120154,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject120155.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__120154,finputs,selected_skills,basis){
return (function (_120157){
var self__ = this;
var _120157__$1 = this;
return self__.meta120156;
});})(vec__120154,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject120155.prototype.om$core$IRender$ = true;

biomarket.newproject.t_biomarket$newproject120155.prototype.om$core$IRender$render$arity$1 = ((function (vec__120154,finputs,selected_skills,basis){
return (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
return React.DOM.div({"style": {"padding-top": "1em"}},React.DOM.div({"className": "panel panel-default", "style": {"text-align": "left"}},React.DOM.div({"className": "panel-heading"},React.DOM.div({"style": {"font-weight": "bold", "font-size": "large"}},(function (){var v = cljs.core.get_in.call(null,self__.finputs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"value","value",305978217)], null));
if(!(cljs.core._EQ_.call(null,"",clojure.string.trim.call(null,v)))){
return v;
} else {
return "New Project";
}
})())),React.DOM.div({"className": "panel-body"},React.DOM.form(null,cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (this__25716__auto____$1,vec__120154,finputs,selected_skills,basis){
return (function (p1__120148_SHARP_){
return om.core.build.call(null,biomarket.utilities.input,cljs.core.conj.call(null,p1__120148_SHARP_,new cljs.core.Keyword("biomarket.newproject","inputd","biomarket.newproject/inputd",321228878)));
});})(this__25716__auto____$1,vec__120154,finputs,selected_skills,basis))
,self__.finputs)),om.core.build.call(null,biomarket.newproject.basis_radios,self__.basis)),om.core.build.call(null,biomarket.newproject.skills,self__.selected_skills))));
});})(vec__120154,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject120155.getBasis = ((function (vec__120154,finputs,selected_skills,basis){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"new-project","new-project",-306914109,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"finputs","finputs",-2006753159,null),new cljs.core.Symbol(null,"selected-skills","selected-skills",-1784500438,null),new cljs.core.Symbol(null,"basis","basis",-788616430,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__120149","p__120149",1980614754,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__120154","vec__120154",233026774,null),new cljs.core.Symbol(null,"finputs","finputs",-2006753159,null),new cljs.core.Symbol(null,"selected-skills","selected-skills",-1784500438,null),new cljs.core.Symbol(null,"basis","basis",-788616430,null),new cljs.core.Symbol(null,"meta120156","meta120156",1279812092,null)], null);
});})(vec__120154,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject120155.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject120155.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject120155";

biomarket.newproject.t_biomarket$newproject120155.cljs$lang$ctorPrWriter = ((function (vec__120154,finputs,selected_skills,basis){
return (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.newproject/t_biomarket$newproject120155");
});})(vec__120154,finputs,selected_skills,basis))
;

biomarket.newproject.__GT_t_biomarket$newproject120155 = ((function (vec__120154,finputs,selected_skills,basis){
return (function biomarket$newproject$new_project_$___GT_t_biomarket$newproject120155(new_project__$1,p__120149__$1,owner__$1,vec__120154__$1,finputs__$1,selected_skills__$1,basis__$1,meta120156){
return (new biomarket.newproject.t_biomarket$newproject120155(new_project__$1,p__120149__$1,owner__$1,vec__120154__$1,finputs__$1,selected_skills__$1,basis__$1,meta120156));
});})(vec__120154,finputs,selected_skills,basis))
;

}

return (new biomarket.newproject.t_biomarket$newproject120155(biomarket$newproject$new_project,p__120149,owner,vec__120154,finputs,selected_skills,basis,null));
});
cljs.core._add_method.call(null,biomarket.utilities.get_input,new cljs.core.Keyword(null,"biddead","biddead",371948723),(function (owner,p__120158){
var map__120159 = p__120158;
var map__120159__$1 = ((((!((map__120159 == null)))?((((map__120159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120159):map__120159);
var fname = cljs.core.get.call(null,map__120159__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__120159__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var f = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date","date",-1463434462));
var b = cljs_time.format.parse.call(null,f,cljs.core.get_in.call(null,element,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null)));
var new$ = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"biddead","biddead",371948723),new cljs.core.Keyword(null,"value","value",305978217)], null),((function (f,b,map__120159,map__120159__$1,fname,element){
return (function (_){
return cljs_time.format.unparse.call(null,f,b);
});})(f,b,map__120159,map__120159__$1,fname,element))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"biddead","biddead",371948723),new cljs.core.Keyword(null,"invalid","invalid",412869516)], null),((function (f,b,map__120159,map__120159__$1,fname,element){
return (function (_){
return null;
});})(f,b,map__120159,map__120159__$1,fname,element))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projdead","projdead",-925005898),new cljs.core.Keyword(null,"value","value",305978217)], null),((function (f,b,map__120159,map__120159__$1,fname,element){
return (function (_){
return cljs_time.format.unparse.call(null,f,cljs_time.core.plus.call(null,b,cljs_time.core.days.call(null,(1))));
});})(f,b,map__120159,map__120159__$1,fname,element))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projdead","projdead",-925005898),new cljs.core.Keyword(null,"min","min",444991522)], null),((function (f,b,map__120159,map__120159__$1,fname,element){
return (function (_){
return cljs_time.format.unparse.call(null,f,cljs_time.core.plus.call(null,b,cljs_time.core.days.call(null,(1))));
});})(f,b,map__120159,map__120159__$1,fname,element))
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
if(typeof biomarket.newproject.t_biomarket$newproject120168 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject120168 = (function (new_project_nav,control,owner,meta120169){
this.new_project_nav = new_project_nav;
this.control = control;
this.owner = owner;
this.meta120169 = meta120169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject120168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_120170,meta120169__$1){
var self__ = this;
var _120170__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject120168(self__.new_project_nav,self__.control,self__.owner,meta120169__$1));
});

biomarket.newproject.t_biomarket$newproject120168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_120170){
var self__ = this;
var _120170__$1 = this;
return self__.meta120169;
});

biomarket.newproject.t_biomarket$newproject120168.prototype.om$core$IInitState$ = true;

biomarket.newproject.t_biomarket$newproject120168.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"control","control",1892578036),self__.control,new cljs.core.Keyword(null,"label","label",1718410804),"Open projects"], null);
});

biomarket.newproject.t_biomarket$newproject120168.prototype.om$core$IRenderState$ = true;

biomarket.newproject.t_biomarket$newproject120168.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__120171){
var self__ = this;
var map__120172 = p__120171;
var map__120172__$1 = ((((!((map__120172 == null)))?((((map__120172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120172):map__120172);
var control__$1 = cljs.core.get.call(null,map__120172__$1,new cljs.core.Keyword(null,"control","control",1892578036));
var drop = cljs.core.get.call(null,map__120172__$1,new cljs.core.Keyword(null,"drop","drop",364481611));
var label = cljs.core.get.call(null,map__120172__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var ___$1 = this;
return React.DOM.div(null,React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-heading"},cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,((function (___$1,map__120172,map__120172__$1,control__$1,drop,label){
return (function (p1__120161_SHARP_){
return React.DOM.button({"className": "btn btn-primary", "type": "button", "onClick": cljs.core.second.call(null,p1__120161_SHARP_)},cljs.core.first.call(null,p1__120161_SHARP_));
});})(___$1,map__120172,map__120172__$1,control__$1,drop,label))
,control__$1)))));
});

biomarket.newproject.t_biomarket$newproject120168.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"new-project-nav","new-project-nav",-1451594218,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"control","control",-761857733,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"control","control",-761857733,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta120169","meta120169",-370499605,null)], null);
});

biomarket.newproject.t_biomarket$newproject120168.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject120168.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject120168";

biomarket.newproject.t_biomarket$newproject120168.cljs$lang$ctorPrWriter = (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.newproject/t_biomarket$newproject120168");
});

biomarket.newproject.__GT_t_biomarket$newproject120168 = (function biomarket$newproject$new_project_nav_$___GT_t_biomarket$newproject120168(new_project_nav__$1,control__$1,owner__$1,meta120169){
return (new biomarket.newproject.t_biomarket$newproject120168(new_project_nav__$1,control__$1,owner__$1,meta120169));
});

}

return (new biomarket.newproject.t_biomarket$newproject120168(biomarket$newproject$new_project_nav,control,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.newproject.min_now = (function biomarket$newproject$min_now(var_args){
var args120174 = [];
var len__23827__auto___120177 = arguments.length;
var i__23828__auto___120178 = (0);
while(true){
if((i__23828__auto___120178 < len__23827__auto___120177)){
args120174.push((arguments[i__23828__auto___120178]));

var G__120179 = (i__23828__auto___120178 + (1));
i__23828__auto___120178 = G__120179;
continue;
} else {
}
break;
}

var G__120176 = args120174.length;
switch (G__120176) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args120174.length)].join('')));

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
if(typeof biomarket.newproject.t_biomarket$newproject120201 !== 'undefined'){
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
biomarket.newproject.t_biomarket$newproject120201 = (function (new_project_view,nav_tag,owner,meta120202){
this.new_project_view = new_project_view;
this.nav_tag = nav_tag;
this.owner = owner;
this.meta120202 = meta120202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject120201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_120203,meta120202__$1){
var self__ = this;
var _120203__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject120201(self__.new_project_view,self__.nav_tag,self__.owner,meta120202__$1));
});

biomarket.newproject.t_biomarket$newproject120201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_120203){
var self__ = this;
var _120203__$1 = this;
return self__.meta120202;
});

biomarket.newproject.t_biomarket$newproject120201.prototype.om$core$IInitState$ = true;

biomarket.newproject.t_biomarket$newproject120201.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
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
return (function (p1__120181_SHARP_){
return !(cljs.core._EQ_.call(null,clojure.string.trim.call(null,p1__120181_SHARP_),""));
});})(___$1))
,"Title cannot be empty."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__120182_SHARP_){
return (cljs.core.count.call(null,p1__120182_SHARP_) > (2));
});})(___$1))
,"Title must be more than 2 characters."], null)], null),"title","","s1","text",false,"Project title:","1"]),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"spid","spid",1854581004),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invalid","invalid",412869516),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"id","id",-1388402092)],["Concise description of the project:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__120183_SHARP_){
return !(cljs.core._EQ_.call(null,clojure.string.trim.call(null,p1__120183_SHARP_),""));
});})(___$1))
,"Description cannot be empty."], null)], null),"description","","s2","textarea",false,"Project description:",(15),"2"]),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"name","name",1843675177),"hours",new cljs.core.Keyword(null,"id","id",-1388402092),"3",new cljs.core.Keyword(null,"spid","spid",1854581004),"s3",new cljs.core.Keyword(null,"title","title",636505583),"Expected days to complete project:",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__120184_SHARP_){
return (p1__120184_SHARP_ >= (1));
});})(___$1))
,"At least one hour must be specified."], null)], null)], null),new cljs.core.Keyword(null,"budget","budget",-405386281),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"name","name",1843675177),"budget",new cljs.core.Keyword(null,"id","id",-1388402092),"4",new cljs.core.Keyword(null,"spid","spid",1854581004),"s4",new cljs.core.Keyword(null,"title","title",636505583),"Project budget (USD):",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__120185_SHARP_){
return (p1__120185_SHARP_ >= (1));
});})(___$1))
,"At least one dollar must be specified."], null)], null)], null),new cljs.core.Keyword(null,"biddead","biddead",371948723),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),biomarket.newproject.min_now.call(null),new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"name","name",1843675177),"biddead",new cljs.core.Keyword(null,"min","min",444991522),biomarket.newproject.min_now.call(null),new cljs.core.Keyword(null,"id","id",-1388402092),"5",new cljs.core.Keyword(null,"spid","spid",1854581004),"s5",new cljs.core.Keyword(null,"title","title",636505583),"Bidding deadline:",new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null),new cljs.core.Keyword(null,"projdead","projdead",-925005898),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),biomarket.newproject.min_now.call(null,(1)),new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"name","name",1843675177),"projdead",new cljs.core.Keyword(null,"min","min",444991522),biomarket.newproject.min_now.call(null,(1)),new cljs.core.Keyword(null,"title","title",636505583),"Project deadline:",new cljs.core.Keyword(null,"id","id",-1388402092),"6",new cljs.core.Keyword(null,"spid","spid",1854581004),"s6",new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null),new cljs.core.Keyword(null,"basis","basis",1865819339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null),new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null);
});

biomarket.newproject.t_biomarket$newproject120201.prototype.om$core$IWillMount$ = true;

biomarket.newproject.t_biomarket$newproject120201.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","inputd","biomarket.newproject/inputd",321228878),((function (___$1){
return (function (o,p__120204){
var map__120205 = p__120204;
var map__120205__$1 = ((((!((map__120205 == null)))?((((map__120205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120205):map__120205);
var data = cljs.core.get.call(null,map__120205__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.utilities.get_input.call(null,o,data);
});})(___$1))
);

biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),((function (___$1){
return (function (o,p__120207){
var map__120208 = p__120207;
var map__120208__$1 = ((((!((map__120208 == null)))?((((map__120208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120208):map__120208);
var data = cljs.core.get.call(null,map__120208__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"basis","basis",1865819339),data);
});})(___$1))
);

biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963),((function (___$1){
return (function (o,p__120210){
var map__120211 = p__120210;
var map__120211__$1 = ((((!((map__120211 == null)))?((((map__120211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120211):map__120211);
var data = cljs.core.get.call(null,map__120211__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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

biomarket.newproject.t_biomarket$newproject120201.prototype.om$core$IWillUnmount$ = true;

biomarket.newproject.t_biomarket$newproject120201.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","inputd","biomarket.newproject/inputd",321228878),new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963),new cljs.core.Keyword("biomarket.newproject","saved","biomarket.newproject/saved",-1780820963),new cljs.core.Keyword("biomarket.newproject","save","biomarket.newproject/save",-175478526));
});

biomarket.newproject.t_biomarket$newproject120201.prototype.om$core$IRenderState$ = true;

biomarket.newproject.t_biomarket$newproject120201.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__120213){
var self__ = this;
var map__120214 = p__120213;
var map__120214__$1 = ((((!((map__120214 == null)))?((((map__120214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120214):map__120214);
var basis = cljs.core.get.call(null,map__120214__$1,new cljs.core.Keyword(null,"basis","basis",1865819339));
var inputs = cljs.core.get.call(null,map__120214__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var nav = cljs.core.get.call(null,map__120214__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var selected_skills = cljs.core.get.call(null,map__120214__$1,new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331));
var ___$1 = this;
return React.DOM.div(null,om.core.build.call(null,biomarket.newproject.new_project_nav,nav),om.core.build.call(null,biomarket.newproject.new_project,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs,selected_skills,basis], null)),om.core.build.call(null,biomarket.newproject.new_project_nav,nav));
});

biomarket.newproject.t_biomarket$newproject120201.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"new-project-view","new-project-view",-1395833262,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta120202","meta120202",674687106,null)], null);
});

biomarket.newproject.t_biomarket$newproject120201.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject120201.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject120201";

biomarket.newproject.t_biomarket$newproject120201.cljs$lang$ctorPrWriter = (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.newproject/t_biomarket$newproject120201");
});

biomarket.newproject.__GT_t_biomarket$newproject120201 = (function biomarket$newproject$new_project_view_$___GT_t_biomarket$newproject120201(new_project_view__$1,nav_tag__$1,owner__$1,meta120202){
return (new biomarket.newproject.t_biomarket$newproject120201(new_project_view__$1,nav_tag__$1,owner__$1,meta120202));
});

}

return (new biomarket.newproject.t_biomarket$newproject120201(biomarket$newproject$new_project_view,nav_tag,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=newproject.js.map