// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.find');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('biomarket.utilities');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('biomarket.bids');
goog.require('goog.history.EventType');
goog.require('biomarket.comments');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
goog.require('clojure.string');
goog.require('cljs_time.format');
biomarket.find.get_projects = (function biomarket$find$get_projects(owner,view){
var h = (function (p__32391){
var map__32392 = p__32391;
var map__32392__$1 = ((((!((map__32392 == null)))?((((map__32392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32392):map__32392);
var status = cljs.core.get.call(null,map__32392__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__32392__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),result);
} else {
return null;
}
});
return biomarket.utilities.post_params.call(null,"/projects",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"query-type","query-type",1897493311),new cljs.core.Keyword(null,"all-projects","all-projects",-406074149)], null),h);
});
biomarket.find.get_skills = (function biomarket$find$get_skills(owner){
var h = (function (p__32397){
var map__32398 = p__32397;
var map__32398__$1 = ((((!((map__32398 == null)))?((((map__32398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32398):map__32398);
var status = cljs.core.get.call(null,map__32398__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__32398__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"skills","skills",958701426),result);
} else {
return null;
}
});
return biomarket.utilities.post_params.call(null,"/project-skills",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1018387698),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579)))], null),h);
});
biomarket.find.show_skills = (function biomarket$find$show_skills(project,owner){
if(typeof biomarket.find.t_biomarket$find32403 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find32403 = (function (show_skills,project,owner,meta32404){
this.show_skills = show_skills;
this.project = project;
this.owner = owner;
this.meta32404 = meta32404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find32403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32405,meta32404__$1){
var self__ = this;
var _32405__$1 = this;
return (new biomarket.find.t_biomarket$find32403(self__.show_skills,self__.project,self__.owner,meta32404__$1));
});

biomarket.find.t_biomarket$find32403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32405){
var self__ = this;
var _32405__$1 = this;
return self__.meta32404;
});

biomarket.find.t_biomarket$find32403.prototype.om$core$IRender$ = true;

biomarket.find.t_biomarket$find32403.prototype.om$core$IRender$render$arity$1 = (function (this__28640__auto__){
var self__ = this;
var this__28640__auto____$1 = this;
return React.DOM.div({"style": {"padding-top": "20px"}},om.core.build.call(null,biomarket.utilities.skill_tags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"skills","skills",958701426).cljs$core$IFn$_invoke$arity$1(self__.project),cljs.core.PersistentArrayMap.EMPTY], null)));
});

biomarket.find.t_biomarket$find32403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-skills","show-skills",1065280605,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta32404","meta32404",-1652655117,null)], null);
});

biomarket.find.t_biomarket$find32403.cljs$lang$type = true;

biomarket.find.t_biomarket$find32403.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find32403";

biomarket.find.t_biomarket$find32403.cljs$lang$ctorPrWriter = (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.find/t_biomarket$find32403");
});

biomarket.find.__GT_t_biomarket$find32403 = (function biomarket$find$show_skills_$___GT_t_biomarket$find32403(show_skills__$1,project__$1,owner__$1,meta32404){
return (new biomarket.find.t_biomarket$find32403(show_skills__$1,project__$1,owner__$1,meta32404));
});

}

return (new biomarket.find.t_biomarket$find32403(biomarket$find$show_skills,project,owner,null));
});
biomarket.find.change_view = (function biomarket$find$change_view(owner,view){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497),cljs.core.update_in.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),(function (x){
return view;
})));
});
biomarket.find.project_summary = (function biomarket$find$project_summary(project,owner){
if(typeof biomarket.find.t_biomarket$find32450 !== 'undefined'){
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
biomarket.find.t_biomarket$find32450 = (function (project_summary,project,owner,meta32451){
this.project_summary = project_summary;
this.project = project;
this.owner = owner;
this.meta32451 = meta32451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find32450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32452,meta32451__$1){
var self__ = this;
var _32452__$1 = this;
return (new biomarket.find.t_biomarket$find32450(self__.project_summary,self__.project,self__.owner,meta32451__$1));
});

biomarket.find.t_biomarket$find32450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32452){
var self__ = this;
var _32452__$1 = this;
return self__.meta32451;
});

biomarket.find.t_biomarket$find32450.prototype.om$core$IInitState$ = true;

biomarket.find.t_biomarket$find32450.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var id = cljs.core.gensym.call(null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bottoms","bottoms",-116131497),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"oc-tag","oc-tag",-724883257),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skills","skills",958701426),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Matched skills",biomarket.find.show_skills], null),new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Show bids",biomarket.bids.show_bids], null),new cljs.core.Keyword(null,"discussion","discussion",-188707284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Discussion",biomarket.comments.comments], null)], null),new cljs.core.Keyword(null,"bid-widget","bid-widget",627145557),biomarket.bids.bid_widget], null),new cljs.core.Keyword(null,"bids","bids",-1493194652),null,new cljs.core.Keyword(null,"bid-loop","bid-loop",1130336658),true], null);
});

biomarket.find.t_biomarket$find32450.prototype.om$core$IWillMount$ = true;

biomarket.find.t_biomarket$find32450.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var inputs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858));
biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),((function (inputs,___$1){
return (function (o,p__32453){
var map__32454 = p__32453;
var map__32454__$1 = ((((!((map__32454 == null)))?((((map__32454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32454):map__32454);
var data = cljs.core.get.call(null,map__32454__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var pred__32456 = cljs.core._EQ_;
var expr__32457 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(pred__32456.call(null,new cljs.core.Keyword(null,"change-view","change-view",-1206699831),expr__32457))){
return biomarket.find.change_view.call(null,o,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(data));
} else {
if(cljs.core.truth_(pred__32456.call(null,new cljs.core.Keyword(null,"submit","submit",-49315317),expr__32457))){
biomarket.bids.submit_bid.call(null,o,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project));

return biomarket.bids.bid_server_call.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__32457)].join('')));
}
}
});})(inputs,___$1))
);

biomarket.bids.bid_server_call.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project));

var c__28481__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28481__auto__,inputs,___$1){
return (function (){
var f__28482__auto__ = (function (){var switch__28460__auto__ = ((function (c__28481__auto__,inputs,___$1){
return (function (state_32474){
var state_val_32475 = (state_32474[(1)]);
if((state_val_32475 === (1))){
var state_32474__$1 = state_32474;
var statearr_32476_32494 = state_32474__$1;
(statearr_32476_32494[(2)] = null);

(statearr_32476_32494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (2))){
var inst_32460 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"bid-loop","bid-loop",1130336658));
var state_32474__$1 = state_32474;
if(cljs.core.truth_(inst_32460)){
var statearr_32477_32495 = state_32474__$1;
(statearr_32477_32495[(1)] = (4));

} else {
var statearr_32478_32496 = state_32474__$1;
(statearr_32478_32496[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (3))){
var inst_32472 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32474__$1,inst_32472);
} else {
if((state_val_32475 === (4))){
var inst_32462 = cljs.core.async.timeout.call(null,(10000));
var inst_32463 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project);
var inst_32464 = biomarket.bids.bid_server_call.call(null,self__.owner,inst_32463);
var state_32474__$1 = (function (){var statearr_32479 = state_32474;
(statearr_32479[(7)] = inst_32464);

return statearr_32479;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32474__$1,(7),inst_32462);
} else {
if((state_val_32475 === (5))){
var state_32474__$1 = state_32474;
var statearr_32480_32497 = state_32474__$1;
(statearr_32480_32497[(2)] = null);

(statearr_32480_32497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (6))){
var inst_32470 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
var statearr_32481_32498 = state_32474__$1;
(statearr_32481_32498[(2)] = inst_32470);

(statearr_32481_32498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (7))){
var inst_32466 = (state_32474[(2)]);
var state_32474__$1 = (function (){var statearr_32482 = state_32474;
(statearr_32482[(8)] = inst_32466);

return statearr_32482;
})();
var statearr_32483_32499 = state_32474__$1;
(statearr_32483_32499[(2)] = null);

(statearr_32483_32499[(1)] = (2));


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
});})(c__28481__auto__,inputs,___$1))
;
return ((function (switch__28460__auto__,c__28481__auto__,inputs,___$1){
return (function() {
var biomarket$find$project_summary_$_state_machine__28461__auto__ = null;
var biomarket$find$project_summary_$_state_machine__28461__auto____0 = (function (){
var statearr_32487 = [null,null,null,null,null,null,null,null,null];
(statearr_32487[(0)] = biomarket$find$project_summary_$_state_machine__28461__auto__);

(statearr_32487[(1)] = (1));

return statearr_32487;
});
var biomarket$find$project_summary_$_state_machine__28461__auto____1 = (function (state_32474){
while(true){
var ret_value__28462__auto__ = (function (){try{while(true){
var result__28463__auto__ = switch__28460__auto__.call(null,state_32474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28463__auto__;
}
break;
}
}catch (e32488){if((e32488 instanceof Object)){
var ex__28464__auto__ = e32488;
var statearr_32489_32500 = state_32474;
(statearr_32489_32500[(5)] = ex__28464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32501 = state_32474;
state_32474 = G__32501;
continue;
} else {
return ret_value__28462__auto__;
}
break;
}
});
biomarket$find$project_summary_$_state_machine__28461__auto__ = function(state_32474){
switch(arguments.length){
case 0:
return biomarket$find$project_summary_$_state_machine__28461__auto____0.call(this);
case 1:
return biomarket$find$project_summary_$_state_machine__28461__auto____1.call(this,state_32474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$find$project_summary_$_state_machine__28461__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$find$project_summary_$_state_machine__28461__auto____0;
biomarket$find$project_summary_$_state_machine__28461__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$find$project_summary_$_state_machine__28461__auto____1;
return biomarket$find$project_summary_$_state_machine__28461__auto__;
})()
;})(switch__28460__auto__,c__28481__auto__,inputs,___$1))
})();
var state__28483__auto__ = (function (){var statearr_32490 = f__28482__auto__.call(null);
(statearr_32490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28481__auto__);

return statearr_32490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28483__auto__);
});})(c__28481__auto__,inputs,___$1))
);

return c__28481__auto__;
});

biomarket.find.t_biomarket$find32450.prototype.om$core$IWillUnmount$ = true;

biomarket.find.t_biomarket$find32450.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"bid-loop","bid-loop",1130336658),false);

return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project));
});

biomarket.find.t_biomarket$find32450.prototype.om$core$IRenderState$ = true;

biomarket.find.t_biomarket$find32450.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__32491){
var self__ = this;
var map__32492 = p__32491;
var map__32492__$1 = ((((!((map__32492 == null)))?((((map__32492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32492):map__32492);
var bottoms = cljs.core.get.call(null,map__32492__$1,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497));
var bids = cljs.core.get.call(null,map__32492__$1,new cljs.core.Keyword(null,"bids","bids",-1493194652));
var ___$1 = this;
return om.core.build.call(null,biomarket.utilities.project_panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,cljs.core.assoc.call(null,self__.project,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),new cljs.core.Keyword(null,"find","find",496279456)),bids),bottoms], null));
});

biomarket.find.t_biomarket$find32450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"project-summary","project-summary",1896971412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta32451","meta32451",-1627425637,null)], null);
});

biomarket.find.t_biomarket$find32450.cljs$lang$type = true;

biomarket.find.t_biomarket$find32450.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find32450";

biomarket.find.t_biomarket$find32450.cljs$lang$ctorPrWriter = (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.find/t_biomarket$find32450");
});

biomarket.find.__GT_t_biomarket$find32450 = (function biomarket$find$project_summary_$___GT_t_biomarket$find32450(project_summary__$1,project__$1,owner__$1,meta32451){
return (new biomarket.find.t_biomarket$find32450(project_summary__$1,project__$1,owner__$1,meta32451));
});

}

return (new biomarket.find.t_biomarket$find32450(biomarket$find$project_summary,project,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.find.find_view = (function biomarket$find$find_view(_,owner){
if(typeof biomarket.find.t_biomarket$find32509 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find32509 = (function (find_view,_,owner,meta32510){
this.find_view = find_view;
this._ = _;
this.owner = owner;
this.meta32510 = meta32510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find32509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32511,meta32510__$1){
var self__ = this;
var _32511__$1 = this;
return (new biomarket.find.t_biomarket$find32509(self__.find_view,self__._,self__.owner,meta32510__$1));
});

biomarket.find.t_biomarket$find32509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32511){
var self__ = this;
var _32511__$1 = this;
return self__.meta32510;
});

biomarket.find.t_biomarket$find32509.prototype.om$core$IInitState$ = true;

biomarket.find.t_biomarket$find32509.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.PersistentVector.EMPTY], null);
});

biomarket.find.t_biomarket$find32509.prototype.om$core$IWillMount$ = true;

biomarket.find.t_biomarket$find32509.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.find.get_projects.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814)));
});

biomarket.find.t_biomarket$find32509.prototype.om$core$IRenderState$ = true;

biomarket.find.t_biomarket$find32509.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__32512){
var self__ = this;
var map__32513 = p__32512;
var map__32513__$1 = ((((!((map__32513 == null)))?((((map__32513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32513):map__32513);
var nav = cljs.core.get.call(null,map__32513__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var projects = cljs.core.get.call(null,map__32513__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var inputs = cljs.core.get.call(null,map__32513__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var view = cljs.core.get.call(null,map__32513__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var ___$2 = this;
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (___$2,map__32513,map__32513__$1,nav,projects,inputs,view){
return (function (p1__32502_SHARP_){
return om.core.build.call(null,biomarket.find.project_summary,p1__32502_SHARP_);
});})(___$2,map__32513,map__32513__$1,nav,projects,inputs,view))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"biddead","biddead",371948723),projects))));
});

biomarket.find.t_biomarket$find32509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"find-view","find-view",-467653823,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta32510","meta32510",1926202222,null)], null);
});

biomarket.find.t_biomarket$find32509.cljs$lang$type = true;

biomarket.find.t_biomarket$find32509.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find32509";

biomarket.find.t_biomarket$find32509.cljs$lang$ctorPrWriter = (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.find/t_biomarket$find32509");
});

biomarket.find.__GT_t_biomarket$find32509 = (function biomarket$find$find_view_$___GT_t_biomarket$find32509(find_view__$1,___$1,owner__$1,meta32510){
return (new biomarket.find.t_biomarket$find32509(find_view__$1,___$1,owner__$1,meta32510));
});

}

return (new biomarket.find.t_biomarket$find32509(biomarket$find$find_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=find.js.map