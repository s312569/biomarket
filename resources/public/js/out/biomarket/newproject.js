// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.newproject');
goog.require('cljs.core');
goog.require('biomarket.utilities');
goog.require('biomarket.projectdisplay');
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

var seq__66504_66510 = cljs.core.seq.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)));
var chunk__66505_66511 = null;
var count__66506_66512 = (0);
var i__66507_66513 = (0);
while(true){
if((i__66507_66513 < count__66506_66512)){
var vec__66508_66514 = cljs.core._nth.call(null,chunk__66505_66511,i__66507_66513);
var k_66515 = cljs.core.nth.call(null,vec__66508_66514,(0),null);
var v_66516 = cljs.core.nth.call(null,vec__66508_66514,(1),null);
biomarket.utilities.get_input.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fname","fname",1500291491),k_66515,new cljs.core.Keyword(null,"element","element",1974019749),v_66516], null));

var G__66517 = seq__66504_66510;
var G__66518 = chunk__66505_66511;
var G__66519 = count__66506_66512;
var G__66520 = (i__66507_66513 + (1));
seq__66504_66510 = G__66517;
chunk__66505_66511 = G__66518;
count__66506_66512 = G__66519;
i__66507_66513 = G__66520;
continue;
} else {
var temp__4425__auto___66521 = cljs.core.seq.call(null,seq__66504_66510);
if(temp__4425__auto___66521){
var seq__66504_66522__$1 = temp__4425__auto___66521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66504_66522__$1)){
var c__26722__auto___66523 = cljs.core.chunk_first.call(null,seq__66504_66522__$1);
var G__66524 = cljs.core.chunk_rest.call(null,seq__66504_66522__$1);
var G__66525 = c__26722__auto___66523;
var G__66526 = cljs.core.count.call(null,c__26722__auto___66523);
var G__66527 = (0);
seq__66504_66510 = G__66524;
chunk__66505_66511 = G__66525;
count__66506_66512 = G__66526;
i__66507_66513 = G__66527;
continue;
} else {
var vec__66509_66528 = cljs.core.first.call(null,seq__66504_66522__$1);
var k_66529 = cljs.core.nth.call(null,vec__66509_66528,(0),null);
var v_66530 = cljs.core.nth.call(null,vec__66509_66528,(1),null);
biomarket.utilities.get_input.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fname","fname",1500291491),k_66529,new cljs.core.Keyword(null,"element","element",1974019749),v_66530], null));

var G__66531 = cljs.core.next.call(null,seq__66504_66522__$1);
var G__66532 = null;
var G__66533 = (0);
var G__66534 = (0);
seq__66504_66510 = G__66531;
chunk__66505_66511 = G__66532;
count__66506_66512 = G__66533;
i__66507_66513 = G__66534;
continue;
}
} else {
}
}
break;
}

return (cljs.core.every_QMARK_.call(null,((function (b,s){
return (function (p1__66497_SHARP_){
return (new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(p1__66497_SHARP_) == null);
});})(b,s))
,cljs.core.vals.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858))))) && (cljs.core.not.call(null,b)) && (cljs.core.not.call(null,s));
});
biomarket.newproject.save_data = (function biomarket$newproject$save_data(owner){
if(cljs.core.truth_(biomarket.newproject.all_good_QMARK_.call(null,owner))){
biomarket.server.save_data.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"new-project","new-project",-1947445636),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__66537){
var vec__66538 = p__66537;
var k = cljs.core.nth.call(null,vec__66538,(0),null);
var v = cljs.core.nth.call(null,vec__66538,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(v)],null));
}),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"basis","basis",1865819339),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"basis","basis",1865819339))),new cljs.core.Keyword(null,"skills","skills",958701426),cljs.core.keys.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331))))], null))], null));

return biomarket.utilities.pub_info.call(null,owner,new cljs.core.Keyword("biomarket.newproject","saved","biomarket.newproject/saved",-1780820963),new cljs.core.Keyword(null,"saved","saved",288760660));
} else {
return null;
}
});
biomarket.newproject.skills = (function biomarket$newproject$skills(selected,owner){
if(typeof biomarket.newproject.t_biomarket$newproject66551 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject66551 = (function (skills,selected,owner,meta66552){
this.skills = skills;
this.selected = selected;
this.owner = owner;
this.meta66552 = meta66552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject66551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66553,meta66552__$1){
var self__ = this;
var _66553__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject66551(self__.skills,self__.selected,self__.owner,meta66552__$1));
});

biomarket.newproject.t_biomarket$newproject66551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66553){
var self__ = this;
var _66553__$1 = this;
return self__.meta66552;
});

biomarket.newproject.t_biomarket$newproject66551.prototype.om$core$IInitState$ = true;

biomarket.newproject.t_biomarket$newproject66551.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skills","skills",958701426),null], null);
});

biomarket.newproject.t_biomarket$newproject66551.prototype.om$core$IWillMount$ = true;

biomarket.newproject.t_biomarket$newproject66551.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.server.get_data.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"all-skills","all-skills",-1330155020)], null),((function (___$1){
return (function (p1__66539_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"skills","skills",958701426),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__66539_SHARP_));
});})(___$1))
);
});

biomarket.newproject.t_biomarket$newproject66551.prototype.om$core$IRenderState$ = true;

biomarket.newproject.t_biomarket$newproject66551.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__66554){
var self__ = this;
var map__66555 = p__66554;
var map__66555__$1 = ((((!((map__66555 == null)))?((((map__66555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66555):map__66555);
var skills__$1 = cljs.core.get.call(null,map__66555__$1,new cljs.core.Keyword(null,"skills","skills",958701426));
var ___$1 = this;
return React.DOM.div({"className": (function (){var pred__66557 = cljs.core._EQ_;
var expr__66558 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.selected);
if(cljs.core.truth_(pred__66557.call(null,false,expr__66558))){
return "";
} else {
if(cljs.core.truth_(pred__66557.call(null,null,expr__66558))){
return "has-success";
} else {
return "has-error";
}
}
})()},React.DOM.label({"className": "control-label"},"Required skills:",React.DOM.label(null,"Scientific",om.core.build.call(null,biomarket.skills.skill_tags,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skills","skills",958701426),cljs.core.filter.call(null,((function (___$1,map__66555,map__66555__$1,skills__$1){
return (function (p1__66540_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__66540_SHARP_),"bskill");
});})(___$1,map__66555,map__66555__$1,skills__$1))
,skills__$1)], null),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.selected),new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963)], null))),React.DOM.label(null,"IT",om.core.build.call(null,biomarket.skills.skill_tags,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skills","skills",958701426),cljs.core.filter.call(null,((function (___$1,map__66555,map__66555__$1,skills__$1){
return (function (p1__66541_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__66541_SHARP_),"cskill");
});})(___$1,map__66555,map__66555__$1,skills__$1))
,skills__$1)], null),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(self__.selected),new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963)], null))),React.DOM.span({"className": "help-block"},(cljs.core.truth_(new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.selected))?cljs.core.first.call(null,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.selected)):null))));
});

biomarket.newproject.t_biomarket$newproject66551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"skills","skills",-1695734343,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66552","meta66552",270305164,null)], null);
});

biomarket.newproject.t_biomarket$newproject66551.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject66551.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject66551";

biomarket.newproject.t_biomarket$newproject66551.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.newproject/t_biomarket$newproject66551");
});

biomarket.newproject.__GT_t_biomarket$newproject66551 = (function biomarket$newproject$skills_$___GT_t_biomarket$newproject66551(skills__$1,selected__$1,owner__$1,meta66552){
return (new biomarket.newproject.t_biomarket$newproject66551(skills__$1,selected__$1,owner__$1,meta66552));
});

}

return (new biomarket.newproject.t_biomarket$newproject66551(biomarket$newproject$skills,selected,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.newproject.basis_radios = (function biomarket$newproject$basis_radios(state,owner){
if(typeof biomarket.newproject.t_biomarket$newproject66566 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject66566 = (function (basis_radios,state,owner,meta66567){
this.basis_radios = basis_radios;
this.state = state;
this.owner = owner;
this.meta66567 = meta66567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject66566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66568,meta66567__$1){
var self__ = this;
var _66568__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject66566(self__.basis_radios,self__.state,self__.owner,meta66567__$1));
});

biomarket.newproject.t_biomarket$newproject66566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66568){
var self__ = this;
var _66568__$1 = this;
return self__.meta66567;
});

biomarket.newproject.t_biomarket$newproject66566.prototype.om$core$IRender$ = true;

biomarket.newproject.t_biomarket$newproject66566.prototype.om$core$IRender$render$arity$1 = (function (this__28885__auto__){
var self__ = this;
var this__28885__auto____$1 = this;
return React.DOM.div({"className": (function (){var pred__66569 = cljs.core._EQ_;
var expr__66570 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.state);
if(cljs.core.truth_(pred__66569.call(null,false,expr__66570))){
return "";
} else {
if(cljs.core.truth_(pred__66569.call(null,null,expr__66570))){
return "has-success";
} else {
return "has-error";
}
}
})()},React.DOM.label({"className": "control-label"},"Payment basis:"),React.DOM.label({"className": "checkbox-inline"},om.dom.input.call(null,{"type": "radio", "name": "basis", "value": "per hour", "checked": ((cljs.core._EQ_.call(null,"per hour",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.state)))?"true":null), "onClick": ((function (this__28885__auto____$1){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"per hour",new cljs.core.Keyword(null,"invalid","invalid",412869516),null], null));
});})(this__28885__auto____$1))
})," Per hour"),React.DOM.label({"className": "checkbox-inline"},om.dom.input.call(null,{"type": "radio", "name": "basis", "value": "total", "checked": ((cljs.core._EQ_.call(null,"total",new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.state)))?"true":null), "onClick": ((function (this__28885__auto____$1){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"total",new cljs.core.Keyword(null,"invalid","invalid",412869516),null], null));
});})(this__28885__auto____$1))
})," Total"),React.DOM.span({"className": "help-block"},(cljs.core.truth_(new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.state))?cljs.core.first.call(null,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.state)):null)));
});

biomarket.newproject.t_biomarket$newproject66566.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"basis-radios","basis-radios",-857594928,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66567","meta66567",499401525,null)], null);
});

biomarket.newproject.t_biomarket$newproject66566.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject66566.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject66566";

biomarket.newproject.t_biomarket$newproject66566.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.newproject/t_biomarket$newproject66566");
});

biomarket.newproject.__GT_t_biomarket$newproject66566 = (function biomarket$newproject$basis_radios_$___GT_t_biomarket$newproject66566(basis_radios__$1,state__$1,owner__$1,meta66567){
return (new biomarket.newproject.t_biomarket$newproject66566(basis_radios__$1,state__$1,owner__$1,meta66567));
});

}

return (new biomarket.newproject.t_biomarket$newproject66566(biomarket$newproject$basis_radios,state,owner,null));
});
biomarket.newproject.new_project = (function biomarket$newproject$new_project(p__66573,owner){
var vec__66578 = p__66573;
var finputs = cljs.core.nth.call(null,vec__66578,(0),null);
var selected_skills = cljs.core.nth.call(null,vec__66578,(1),null);
var basis = cljs.core.nth.call(null,vec__66578,(2),null);
if(typeof biomarket.newproject.t_biomarket$newproject66579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject66579 = (function (new_project,p__66573,owner,vec__66578,finputs,selected_skills,basis,meta66580){
this.new_project = new_project;
this.p__66573 = p__66573;
this.owner = owner;
this.vec__66578 = vec__66578;
this.finputs = finputs;
this.selected_skills = selected_skills;
this.basis = basis;
this.meta66580 = meta66580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject66579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__66578,finputs,selected_skills,basis){
return (function (_66581,meta66580__$1){
var self__ = this;
var _66581__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject66579(self__.new_project,self__.p__66573,self__.owner,self__.vec__66578,self__.finputs,self__.selected_skills,self__.basis,meta66580__$1));
});})(vec__66578,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject66579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__66578,finputs,selected_skills,basis){
return (function (_66581){
var self__ = this;
var _66581__$1 = this;
return self__.meta66580;
});})(vec__66578,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject66579.prototype.om$core$IRender$ = true;

biomarket.newproject.t_biomarket$newproject66579.prototype.om$core$IRender$render$arity$1 = ((function (vec__66578,finputs,selected_skills,basis){
return (function (this__28885__auto__){
var self__ = this;
var this__28885__auto____$1 = this;
return React.DOM.div({"style": {"padding-top": "1em"}},React.DOM.div({"className": "panel panel-default", "style": {"text-align": "left"}},React.DOM.div({"className": "panel-heading"},React.DOM.div({"style": {"font-weight": "bold", "font-size": "large"}},(function (){var v = cljs.core.get_in.call(null,self__.finputs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"value","value",305978217)], null));
if(!(cljs.core._EQ_.call(null,"",clojure.string.trim.call(null,v)))){
return v;
} else {
return "New Project";
}
})())),React.DOM.div({"className": "panel-body"},React.DOM.form(null,cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (this__28885__auto____$1,vec__66578,finputs,selected_skills,basis){
return (function (p1__66572_SHARP_){
return om.core.build.call(null,biomarket.utilities.input,cljs.core.conj.call(null,p1__66572_SHARP_,new cljs.core.Keyword("biomarket.newproject","inputd","biomarket.newproject/inputd",321228878)));
});})(this__28885__auto____$1,vec__66578,finputs,selected_skills,basis))
,self__.finputs)),om.core.build.call(null,biomarket.newproject.basis_radios,self__.basis)),om.core.build.call(null,biomarket.newproject.skills,self__.selected_skills))));
});})(vec__66578,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject66579.getBasis = ((function (vec__66578,finputs,selected_skills,basis){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"new-project","new-project",-306914109,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"finputs","finputs",-2006753159,null),new cljs.core.Symbol(null,"selected-skills","selected-skills",-1784500438,null),new cljs.core.Symbol(null,"basis","basis",-788616430,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__66573","p__66573",-599932879,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__66578","vec__66578",1707595087,null),new cljs.core.Symbol(null,"finputs","finputs",-2006753159,null),new cljs.core.Symbol(null,"selected-skills","selected-skills",-1784500438,null),new cljs.core.Symbol(null,"basis","basis",-788616430,null),new cljs.core.Symbol(null,"meta66580","meta66580",-1231224387,null)], null);
});})(vec__66578,finputs,selected_skills,basis))
;

biomarket.newproject.t_biomarket$newproject66579.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject66579.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject66579";

biomarket.newproject.t_biomarket$newproject66579.cljs$lang$ctorPrWriter = ((function (vec__66578,finputs,selected_skills,basis){
return (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.newproject/t_biomarket$newproject66579");
});})(vec__66578,finputs,selected_skills,basis))
;

biomarket.newproject.__GT_t_biomarket$newproject66579 = ((function (vec__66578,finputs,selected_skills,basis){
return (function biomarket$newproject$new_project_$___GT_t_biomarket$newproject66579(new_project__$1,p__66573__$1,owner__$1,vec__66578__$1,finputs__$1,selected_skills__$1,basis__$1,meta66580){
return (new biomarket.newproject.t_biomarket$newproject66579(new_project__$1,p__66573__$1,owner__$1,vec__66578__$1,finputs__$1,selected_skills__$1,basis__$1,meta66580));
});})(vec__66578,finputs,selected_skills,basis))
;

}

return (new biomarket.newproject.t_biomarket$newproject66579(biomarket$newproject$new_project,p__66573,owner,vec__66578,finputs,selected_skills,basis,null));
});
cljs.core._add_method.call(null,biomarket.utilities.get_input,new cljs.core.Keyword(null,"biddead","biddead",371948723),(function (owner,p__66582){
var map__66583 = p__66582;
var map__66583__$1 = ((((!((map__66583 == null)))?((((map__66583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66583):map__66583);
var fname = cljs.core.get.call(null,map__66583__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__66583__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var f = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date","date",-1463434462));
var b = cljs_time.format.parse.call(null,f,cljs.core.get_in.call(null,element,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null)));
var new$ = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"biddead","biddead",371948723),new cljs.core.Keyword(null,"value","value",305978217)], null),((function (f,b,map__66583,map__66583__$1,fname,element){
return (function (_){
return cljs_time.format.unparse.call(null,f,b);
});})(f,b,map__66583,map__66583__$1,fname,element))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"biddead","biddead",371948723),new cljs.core.Keyword(null,"invalid","invalid",412869516)], null),((function (f,b,map__66583,map__66583__$1,fname,element){
return (function (_){
return null;
});})(f,b,map__66583,map__66583__$1,fname,element))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projdead","projdead",-925005898),new cljs.core.Keyword(null,"value","value",305978217)], null),((function (f,b,map__66583,map__66583__$1,fname,element){
return (function (_){
return cljs_time.format.unparse.call(null,f,cljs_time.core.plus.call(null,b,cljs_time.core.days.call(null,(1))));
});})(f,b,map__66583,map__66583__$1,fname,element))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"projdead","projdead",-925005898),new cljs.core.Keyword(null,"min","min",444991522)], null),((function (f,b,map__66583,map__66583__$1,fname,element){
return (function (_){
return cljs_time.format.unparse.call(null,f,cljs_time.core.plus.call(null,b,cljs_time.core.days.call(null,(1))));
});})(f,b,map__66583,map__66583__$1,fname,element))
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
if(typeof biomarket.newproject.t_biomarket$newproject66592 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.newproject.t_biomarket$newproject66592 = (function (new_project_nav,control,owner,meta66593){
this.new_project_nav = new_project_nav;
this.control = control;
this.owner = owner;
this.meta66593 = meta66593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject66592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66594,meta66593__$1){
var self__ = this;
var _66594__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject66592(self__.new_project_nav,self__.control,self__.owner,meta66593__$1));
});

biomarket.newproject.t_biomarket$newproject66592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66594){
var self__ = this;
var _66594__$1 = this;
return self__.meta66593;
});

biomarket.newproject.t_biomarket$newproject66592.prototype.om$core$IInitState$ = true;

biomarket.newproject.t_biomarket$newproject66592.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"control","control",1892578036),self__.control,new cljs.core.Keyword(null,"label","label",1718410804),"Open projects"], null);
});

biomarket.newproject.t_biomarket$newproject66592.prototype.om$core$IRenderState$ = true;

biomarket.newproject.t_biomarket$newproject66592.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__66595){
var self__ = this;
var map__66596 = p__66595;
var map__66596__$1 = ((((!((map__66596 == null)))?((((map__66596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66596):map__66596);
var control__$1 = cljs.core.get.call(null,map__66596__$1,new cljs.core.Keyword(null,"control","control",1892578036));
var drop = cljs.core.get.call(null,map__66596__$1,new cljs.core.Keyword(null,"drop","drop",364481611));
var label = cljs.core.get.call(null,map__66596__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var ___$1 = this;
return React.DOM.div(null,React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-heading"},cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,((function (___$1,map__66596,map__66596__$1,control__$1,drop,label){
return (function (p1__66585_SHARP_){
return React.DOM.a({"className": "btn btn-primary", "type": "button", "onClick": cljs.core.second.call(null,p1__66585_SHARP_)},cljs.core.first.call(null,p1__66585_SHARP_));
});})(___$1,map__66596,map__66596__$1,control__$1,drop,label))
,control__$1)))));
});

biomarket.newproject.t_biomarket$newproject66592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"new-project-nav","new-project-nav",-1451594218,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"control","control",-761857733,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"control","control",-761857733,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66593","meta66593",-725107822,null)], null);
});

biomarket.newproject.t_biomarket$newproject66592.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject66592.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject66592";

biomarket.newproject.t_biomarket$newproject66592.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.newproject/t_biomarket$newproject66592");
});

biomarket.newproject.__GT_t_biomarket$newproject66592 = (function biomarket$newproject$new_project_nav_$___GT_t_biomarket$newproject66592(new_project_nav__$1,control__$1,owner__$1,meta66593){
return (new biomarket.newproject.t_biomarket$newproject66592(new_project_nav__$1,control__$1,owner__$1,meta66593));
});

}

return (new biomarket.newproject.t_biomarket$newproject66592(biomarket$newproject$new_project_nav,control,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.newproject.min_now = (function biomarket$newproject$min_now(var_args){
var args66598 = [];
var len__26981__auto___66601 = arguments.length;
var i__26982__auto___66602 = (0);
while(true){
if((i__26982__auto___66602 < len__26981__auto___66601)){
args66598.push((arguments[i__26982__auto___66602]));

var G__66603 = (i__26982__auto___66602 + (1));
i__26982__auto___66602 = G__66603;
continue;
} else {
}
break;
}

var G__66600 = args66598.length;
switch (G__66600) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66598.length)].join('')));

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
if(typeof biomarket.newproject.t_biomarket$newproject66625 !== 'undefined'){
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
biomarket.newproject.t_biomarket$newproject66625 = (function (new_project_view,nav_tag,owner,meta66626){
this.new_project_view = new_project_view;
this.nav_tag = nav_tag;
this.owner = owner;
this.meta66626 = meta66626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.newproject.t_biomarket$newproject66625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66627,meta66626__$1){
var self__ = this;
var _66627__$1 = this;
return (new biomarket.newproject.t_biomarket$newproject66625(self__.new_project_view,self__.nav_tag,self__.owner,meta66626__$1));
});

biomarket.newproject.t_biomarket$newproject66625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66627){
var self__ = this;
var _66627__$1 = this;
return self__.meta66626;
});

biomarket.newproject.t_biomarket$newproject66625.prototype.om$core$IInitState$ = true;

biomarket.newproject.t_biomarket$newproject66625.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
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
return (function (p1__66605_SHARP_){
return !(cljs.core._EQ_.call(null,clojure.string.trim.call(null,p1__66605_SHARP_),""));
});})(___$1))
,"Title cannot be empty."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__66606_SHARP_){
return (cljs.core.count.call(null,p1__66606_SHARP_) > (2));
});})(___$1))
,"Title must be more than 2 characters."], null)], null),"title","","s1","text",false,"Project title:","1"]),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"spid","spid",1854581004),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invalid","invalid",412869516),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"id","id",-1388402092)],["Concise description of the project:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__66607_SHARP_){
return !(cljs.core._EQ_.call(null,clojure.string.trim.call(null,p1__66607_SHARP_),""));
});})(___$1))
,"Description cannot be empty."], null)], null),"description","","s2","textarea",false,"Project description:",(15),"2"]),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"name","name",1843675177),"hours",new cljs.core.Keyword(null,"id","id",-1388402092),"3",new cljs.core.Keyword(null,"spid","spid",1854581004),"s3",new cljs.core.Keyword(null,"title","title",636505583),"Expected days to complete project:",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__66608_SHARP_){
return (p1__66608_SHARP_ >= (1));
});})(___$1))
,"At least one hour must be specified."], null)], null)], null),new cljs.core.Keyword(null,"budget","budget",-405386281),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"name","name",1843675177),"budget",new cljs.core.Keyword(null,"id","id",-1388402092),"4",new cljs.core.Keyword(null,"spid","spid",1854581004),"s4",new cljs.core.Keyword(null,"title","title",636505583),"Project budget (USD):",new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"tests","tests",-1041085625),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (___$1){
return (function (p1__66609_SHARP_){
return (p1__66609_SHARP_ >= (1));
});})(___$1))
,"At least one dollar must be specified."], null)], null)], null),new cljs.core.Keyword(null,"biddead","biddead",371948723),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),biomarket.newproject.min_now.call(null),new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"name","name",1843675177),"biddead",new cljs.core.Keyword(null,"min","min",444991522),biomarket.newproject.min_now.call(null),new cljs.core.Keyword(null,"id","id",-1388402092),"5",new cljs.core.Keyword(null,"spid","spid",1854581004),"s5",new cljs.core.Keyword(null,"title","title",636505583),"Bidding deadline:",new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null),new cljs.core.Keyword(null,"projdead","projdead",-925005898),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),biomarket.newproject.min_now.call(null,(1)),new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"name","name",1843675177),"projdead",new cljs.core.Keyword(null,"min","min",444991522),biomarket.newproject.min_now.call(null,(1)),new cljs.core.Keyword(null,"title","title",636505583),"Project deadline:",new cljs.core.Keyword(null,"id","id",-1388402092),"6",new cljs.core.Keyword(null,"spid","spid",1854581004),"s6",new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null),new cljs.core.Keyword(null,"basis","basis",1865819339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null),new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null);
});

biomarket.newproject.t_biomarket$newproject66625.prototype.om$core$IWillMount$ = true;

biomarket.newproject.t_biomarket$newproject66625.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","inputd","biomarket.newproject/inputd",321228878),((function (___$1){
return (function (o,p__66628){
var map__66629 = p__66628;
var map__66629__$1 = ((((!((map__66629 == null)))?((((map__66629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66629):map__66629);
var data = cljs.core.get.call(null,map__66629__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.utilities.get_input.call(null,o,data);
});})(___$1))
);

biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),((function (___$1){
return (function (o,p__66631){
var map__66632 = p__66631;
var map__66632__$1 = ((((!((map__66632 == null)))?((((map__66632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66632):map__66632);
var data = cljs.core.get.call(null,map__66632__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"basis","basis",1865819339),data);
});})(___$1))
);

biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963),((function (___$1){
return (function (o,p__66634){
var map__66635 = p__66634;
var map__66635__$1 = ((((!((map__66635 == null)))?((((map__66635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66635):map__66635);
var data = cljs.core.get.call(null,map__66635__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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

biomarket.newproject.t_biomarket$newproject66625.prototype.om$core$IWillUnmount$ = true;

biomarket.newproject.t_biomarket$newproject66625.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.newproject","inputd","biomarket.newproject/inputd",321228878),new cljs.core.Keyword("biomarket.newproject","basis","biomarket.newproject/basis",-363220368),new cljs.core.Keyword("biomarket.newproject","selected","biomarket.newproject/selected",-1508978963),new cljs.core.Keyword("biomarket.newproject","saved","biomarket.newproject/saved",-1780820963),new cljs.core.Keyword("biomarket.newproject","save","biomarket.newproject/save",-175478526));
});

biomarket.newproject.t_biomarket$newproject66625.prototype.om$core$IRenderState$ = true;

biomarket.newproject.t_biomarket$newproject66625.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__66637){
var self__ = this;
var map__66638 = p__66637;
var map__66638__$1 = ((((!((map__66638 == null)))?((((map__66638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66638):map__66638);
var basis = cljs.core.get.call(null,map__66638__$1,new cljs.core.Keyword(null,"basis","basis",1865819339));
var inputs = cljs.core.get.call(null,map__66638__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var nav = cljs.core.get.call(null,map__66638__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var selected_skills = cljs.core.get.call(null,map__66638__$1,new cljs.core.Keyword(null,"selected-skills","selected-skills",869935331));
var ___$1 = this;
return React.DOM.div(null,biomarket.projectdisplay.project_nav.call(null,self__.owner),om.core.build.call(null,biomarket.newproject.new_project,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs,selected_skills,basis], null)),biomarket.projectdisplay.project_nav.call(null,self__.owner));
});

biomarket.newproject.t_biomarket$newproject66625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"new-project-view","new-project-view",-1395833262,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66626","meta66626",370710432,null)], null);
});

biomarket.newproject.t_biomarket$newproject66625.cljs$lang$type = true;

biomarket.newproject.t_biomarket$newproject66625.cljs$lang$ctorStr = "biomarket.newproject/t_biomarket$newproject66625";

biomarket.newproject.t_biomarket$newproject66625.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.newproject/t_biomarket$newproject66625");
});

biomarket.newproject.__GT_t_biomarket$newproject66625 = (function biomarket$newproject$new_project_view_$___GT_t_biomarket$newproject66625(new_project_view__$1,nav_tag__$1,owner__$1,meta66626){
return (new biomarket.newproject.t_biomarket$newproject66625(new_project_view__$1,nav_tag__$1,owner__$1,meta66626));
});

}

return (new biomarket.newproject.t_biomarket$newproject66625(biomarket$newproject$new_project_view,nav_tag,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=newproject.js.map