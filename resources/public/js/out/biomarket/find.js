// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.find');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('biomarket.utilities');
goog.require('biomarket.projectdisplay');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('biomarket.bids');
goog.require('goog.history.EventType');
goog.require('biomarket.server');
goog.require('biomarket.comments');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('biomarket.skills');
goog.require('om.core');
goog.require('clojure.string');
goog.require('cljs_time.format');
biomarket.find.show_skills = (function biomarket$find$show_skills(project,owner){
if(typeof biomarket.find.t_biomarket$find119951 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find119951 = (function (show_skills,project,owner,meta119952){
this.show_skills = show_skills;
this.project = project;
this.owner = owner;
this.meta119952 = meta119952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find119951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119953,meta119952__$1){
var self__ = this;
var _119953__$1 = this;
return (new biomarket.find.t_biomarket$find119951(self__.show_skills,self__.project,self__.owner,meta119952__$1));
});

biomarket.find.t_biomarket$find119951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119953){
var self__ = this;
var _119953__$1 = this;
return self__.meta119952;
});

biomarket.find.t_biomarket$find119951.prototype.om$core$IRender$ = true;

biomarket.find.t_biomarket$find119951.prototype.om$core$IRender$render$arity$1 = (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return React.DOM.div({"style": {"padding-top": "20px"}},om.core.build.call(null,biomarket.skills.skill_tags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.project,cljs.core.PersistentArrayMap.EMPTY], null)));
});

biomarket.find.t_biomarket$find119951.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-skills","show-skills",1065280605,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta119952","meta119952",-1492818235,null)], null);
});

biomarket.find.t_biomarket$find119951.cljs$lang$type = true;

biomarket.find.t_biomarket$find119951.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find119951";

biomarket.find.t_biomarket$find119951.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.find/t_biomarket$find119951");
});

biomarket.find.__GT_t_biomarket$find119951 = (function biomarket$find$show_skills_$___GT_t_biomarket$find119951(show_skills__$1,project__$1,owner__$1,meta119952){
return (new biomarket.find.t_biomarket$find119951(show_skills__$1,project__$1,owner__$1,meta119952));
});

}

return (new biomarket.find.t_biomarket$find119951(biomarket$find$show_skills,project,owner,null));
});
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"found-projects","found-projects",-1675279234),(function (p,owner){
if(typeof biomarket.find.t_biomarket$find119954 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find119954 = (function (p,owner,meta119955){
this.p = p;
this.owner = owner;
this.meta119955 = meta119955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find119954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119956,meta119955__$1){
var self__ = this;
var _119956__$1 = this;
return (new biomarket.find.t_biomarket$find119954(self__.p,self__.owner,meta119955__$1));
});

biomarket.find.t_biomarket$find119954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119956){
var self__ = this;
var _119956__$1 = this;
return self__.meta119955;
});

biomarket.find.t_biomarket$find119954.prototype.om$core$IRender$ = true;

biomarket.find.t_biomarket$find119954.prototype.om$core$IRender$render$arity$1 = (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
var links = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skills","skills",958701426),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.skills.skills_bbutton,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p,new cljs.core.Keyword(null,"skills","skills",958701426)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.find.show_skills,self__.p], null)], null),new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.bid_history_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p,new cljs.core.Keyword(null,"bids","bids",-1493194652)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.show_bids,self__.p], null)], null),new cljs.core.Keyword(null,"discussion","discussion",-188707284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.comments.comment_bbutton,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p,new cljs.core.Keyword(null,"discussion","discussion",-188707284)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.comments.comments,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p], null)], null)], null)], null);
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.p))){
return React.DOM.div(null,React.DOM.hr(null),om.core.build.call(null,biomarket.projectdisplay.bottom_skel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [links,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.bid_widget,self__.p], null),new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(self__.p)], null)));
} else {
return React.DOM.div(null,React.DOM.hr(null),om.core.build.call(null,biomarket.projectdisplay.bottom_skel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.select_keys.call(null,links,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"skills","skills",958701426)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.bid_widget,self__.p], null),new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(self__.p)], null)));
}
});

biomarket.find.t_biomarket$find119954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta119955","meta119955",-302576494,null)], null);
});

biomarket.find.t_biomarket$find119954.cljs$lang$type = true;

biomarket.find.t_biomarket$find119954.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find119954";

biomarket.find.t_biomarket$find119954.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.find/t_biomarket$find119954");
});

biomarket.find.__GT_t_biomarket$find119954 = (function biomarket$find$__GT_t_biomarket$find119954(p__$1,owner__$1,meta119955){
return (new biomarket.find.t_biomarket$find119954(p__$1,owner__$1,meta119955));
});

}

return (new biomarket.find.t_biomarket$find119954(p,owner,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"found-projects","found-projects",-1675279234),(function (project){
if(typeof biomarket.find.t_biomarket$find119957 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find119957 = (function (project,meta119958){
this.project = project;
this.meta119958 = meta119958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find119957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119959,meta119958__$1){
var self__ = this;
var _119959__$1 = this;
return (new biomarket.find.t_biomarket$find119957(self__.project,meta119958__$1));
});

biomarket.find.t_biomarket$find119957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119959){
var self__ = this;
var _119959__$1 = this;
return self__.meta119958;
});

biomarket.find.t_biomarket$find119957.prototype.om$core$IRender$ = true;

biomarket.find.t_biomarket$find119957.prototype.om$core$IRender$render$arity$1 = (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var ub = cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,new cljs.core.Keyword(null,"user-bids","user-bids",-736079184).cljs$core$IFn$_invoke$arity$1(self__.project)));
var best = biomarket.bids.best_bid.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project));
if(cljs.core.truth_(ub)){
return React.DOM.span(null,biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join('')),biomarket.projectdisplay.label.call(null,"label label-primary",[cljs.core.str("Your bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ub))].join('')));
} else {
if(cljs.core.truth_(best)){
return React.DOM.span(null,biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join('')));
} else {
return React.DOM.span(null,biomarket.projectdisplay.label.call(null,"label label-danger","No bids yet!"));

}
}
})());
});

biomarket.find.t_biomarket$find119957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta119958","meta119958",266620839,null)], null);
});

biomarket.find.t_biomarket$find119957.cljs$lang$type = true;

biomarket.find.t_biomarket$find119957.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find119957";

biomarket.find.t_biomarket$find119957.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.find/t_biomarket$find119957");
});

biomarket.find.__GT_t_biomarket$find119957 = (function biomarket$find$__GT_t_biomarket$find119957(project__$1,meta119958){
return (new biomarket.find.t_biomarket$find119957(project__$1,meta119958));
});

}

return (new biomarket.find.t_biomarket$find119957(project,null));
}));
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"remove-project","remove-project",949499885),(function (owner,p__119961){
var map__119962 = p__119961;
var map__119962__$1 = ((((!((map__119962 == null)))?((((map__119962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119962):map__119962);
var data = cljs.core.get.call(null,map__119962__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var c__30045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto__,map__119962,map__119962__$1,data){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto__,map__119962,map__119962__$1,data){
return (function (state_119984){
var state_val_119985 = (state_119984[(1)]);
if((state_val_119985 === (1))){
var inst_119964 = (0);
var state_119984__$1 = (function (){var statearr_119986 = state_119984;
(statearr_119986[(7)] = inst_119964);

return statearr_119986;
})();
var statearr_119987_120001 = state_119984__$1;
(statearr_119987_120001[(2)] = null);

(statearr_119987_120001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119985 === (2))){
var inst_119964 = (state_119984[(7)]);
var inst_119966 = (inst_119964 >= (3000));
var state_119984__$1 = state_119984;
if(cljs.core.truth_(inst_119966)){
var statearr_119988_120002 = state_119984__$1;
(statearr_119988_120002[(1)] = (4));

} else {
var statearr_119989_120003 = state_119984__$1;
(statearr_119989_120003[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119985 === (3))){
var inst_119982 = (state_119984[(2)]);
var state_119984__$1 = state_119984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_119984__$1,inst_119982);
} else {
if((state_val_119985 === (4))){
var inst_119964 = (state_119984[(7)]);
var inst_119968 = (function (){var t = inst_119964;
return ((function (t,inst_119964,state_val_119985,c__30045__auto__,map__119962,map__119962__$1,data){
return (function (p1__119960_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__119960_SHARP_));
});
;})(t,inst_119964,state_val_119985,c__30045__auto__,map__119962,map__119962__$1,data))
})();
var inst_119969 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983));
var inst_119970 = cljs.core.remove.call(null,inst_119968,inst_119969);
var inst_119971 = om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),inst_119970);
var state_119984__$1 = state_119984;
var statearr_119990_120004 = state_119984__$1;
(statearr_119990_120004[(2)] = inst_119971);

(statearr_119990_120004[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119985 === (5))){
var inst_119973 = cljs.core.async.timeout.call(null,(30));
var state_119984__$1 = state_119984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_119984__$1,(7),inst_119973);
} else {
if((state_val_119985 === (6))){
var inst_119980 = (state_119984[(2)]);
var state_119984__$1 = state_119984;
var statearr_119991_120005 = state_119984__$1;
(statearr_119991_120005[(2)] = inst_119980);

(statearr_119991_120005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119985 === (7))){
var inst_119964 = (state_119984[(7)]);
var inst_119975 = (state_119984[(2)]);
var inst_119976 = biomarket.utilities.pub_info.call(null,owner,new cljs.core.Keyword(null,"progress","progress",244323547),null);
var inst_119977 = (inst_119964 + (30));
var inst_119964__$1 = inst_119977;
var state_119984__$1 = (function (){var statearr_119992 = state_119984;
(statearr_119992[(7)] = inst_119964__$1);

(statearr_119992[(8)] = inst_119976);

(statearr_119992[(9)] = inst_119975);

return statearr_119992;
})();
var statearr_119993_120006 = state_119984__$1;
(statearr_119993_120006[(2)] = null);

(statearr_119993_120006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__30045__auto__,map__119962,map__119962__$1,data))
;
return ((function (switch__29933__auto__,c__30045__auto__,map__119962,map__119962__$1,data){
return (function() {
var biomarket$find$state_machine__29934__auto__ = null;
var biomarket$find$state_machine__29934__auto____0 = (function (){
var statearr_119997 = [null,null,null,null,null,null,null,null,null,null];
(statearr_119997[(0)] = biomarket$find$state_machine__29934__auto__);

(statearr_119997[(1)] = (1));

return statearr_119997;
});
var biomarket$find$state_machine__29934__auto____1 = (function (state_119984){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_119984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e119998){if((e119998 instanceof Object)){
var ex__29937__auto__ = e119998;
var statearr_119999_120007 = state_119984;
(statearr_119999_120007[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_119984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e119998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120008 = state_119984;
state_119984 = G__120008;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
biomarket$find$state_machine__29934__auto__ = function(state_119984){
switch(arguments.length){
case 0:
return biomarket$find$state_machine__29934__auto____0.call(this);
case 1:
return biomarket$find$state_machine__29934__auto____1.call(this,state_119984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$find$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$find$state_machine__29934__auto____0;
biomarket$find$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$find$state_machine__29934__auto____1;
return biomarket$find$state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto__,map__119962,map__119962__$1,data))
})();
var state__30047__auto__ = (function (){var statearr_120000 = f__30046__auto__.call(null);
(statearr_120000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto__);

return statearr_120000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto__,map__119962,map__119962__$1,data))
);

return c__30045__auto__;
}));
biomarket.find.find_view = (function biomarket$find$find_view(_,owner){
if(typeof biomarket.find.t_biomarket$find120017 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find120017 = (function (find_view,_,owner,meta120018){
this.find_view = find_view;
this._ = _;
this.owner = owner;
this.meta120018 = meta120018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find120017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_120019,meta120018__$1){
var self__ = this;
var _120019__$1 = this;
return (new biomarket.find.t_biomarket$find120017(self__.find_view,self__._,self__.owner,meta120018__$1));
});

biomarket.find.t_biomarket$find120017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_120019){
var self__ = this;
var _120019__$1 = this;
return self__.meta120018;
});

biomarket.find.t_biomarket$find120017.prototype.om$core$IInitState$ = true;

biomarket.find.t_biomarket$find120017.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"projects","projects",-364845983),false,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"found-projects","found-projects",-1675279234)], null);
});

biomarket.find.t_biomarket$find120017.prototype.om$core$IWillMount$ = true;

biomarket.find.t_biomarket$find120017.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
biomarket.server.get_data.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"all-projects","all-projects",-406074149),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"open","open",-1763596448)], null),((function (___$2){
return (function (p1__120009_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"biddead","biddead",371948723),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__120009_SHARP_)));
});})(___$2))
);

return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword(null,"remove-project","remove-project",949499885));
});

biomarket.find.t_biomarket$find120017.prototype.om$core$IRenderState$ = true;

biomarket.find.t_biomarket$find120017.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__120020){
var self__ = this;
var map__120021 = p__120020;
var map__120021__$1 = ((((!((map__120021 == null)))?((((map__120021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120021):map__120021);
var projects = cljs.core.get.call(null,map__120021__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var bottoms = cljs.core.get.call(null,map__120021__$1,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497));
var ___$2 = this;
if(cljs.core.truth_(projects)){
return React.DOM.div(null,((cljs.core.seq.call(null,projects))?React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},cljs.core.apply.call(null,om.dom.div,{"className": "col-md-12"},cljs.core.map.call(null,((function (___$2,map__120021,map__120021__$1,projects,bottoms){
return (function (p1__120010_SHARP_){
return om.core.build.call(null,biomarket.projectdisplay.project_summary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__120010_SHARP_,new cljs.core.Keyword(null,"found-projects","found-projects",-1675279234)], null));
});})(___$2,map__120021,map__120021__$1,projects,bottoms))
,projects)))):React.DOM.div({"style": {"padding-top": "30px", "text-align": "center"}},[cljs.core.str("No projects found")].join(''))));
} else {
return om.core.build.call(null,biomarket.utilities.waiting,null);
}
});

biomarket.find.t_biomarket$find120017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"find-view","find-view",-467653823,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta120018","meta120018",-1510083108,null)], null);
});

biomarket.find.t_biomarket$find120017.cljs$lang$type = true;

biomarket.find.t_biomarket$find120017.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find120017";

biomarket.find.t_biomarket$find120017.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.find/t_biomarket$find120017");
});

biomarket.find.__GT_t_biomarket$find120017 = (function biomarket$find$find_view_$___GT_t_biomarket$find120017(find_view__$1,___$1,owner__$1,meta120018){
return (new biomarket.find.t_biomarket$find120017(find_view__$1,___$1,owner__$1,meta120018));
});

}

return (new biomarket.find.t_biomarket$find120017(biomarket$find$find_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=find.js.map