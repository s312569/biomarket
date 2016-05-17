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
var h = (function (p__31176){
var map__31177 = p__31176;
var map__31177__$1 = ((((!((map__31177 == null)))?((((map__31177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31177):map__31177);
var status = cljs.core.get.call(null,map__31177__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__31177__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),result);
} else {
return null;
}
});
return biomarket.utilities.post_params.call(null,"/projects",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"query-type","query-type",1897493311),new cljs.core.Keyword(null,"all-projects","all-projects",-406074149)], null),h);
});
biomarket.find.get_skills = (function biomarket$find$get_skills(owner){
var h = (function (p__31182){
var map__31183 = p__31182;
var map__31183__$1 = ((((!((map__31183 == null)))?((((map__31183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31183):map__31183);
var status = cljs.core.get.call(null,map__31183__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__31183__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"skills","skills",958701426),result);
} else {
return null;
}
});
return biomarket.utilities.post_params.call(null,"/project-skills",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1018387698),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579)))], null),h);
});
biomarket.find.show_skills = (function biomarket$find$show_skills(project,owner){
if(typeof biomarket.find.t_biomarket$find31188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find31188 = (function (show_skills,project,owner,meta31189){
this.show_skills = show_skills;
this.project = project;
this.owner = owner;
this.meta31189 = meta31189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find31188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31190,meta31189__$1){
var self__ = this;
var _31190__$1 = this;
return (new biomarket.find.t_biomarket$find31188(self__.show_skills,self__.project,self__.owner,meta31189__$1));
});

biomarket.find.t_biomarket$find31188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31190){
var self__ = this;
var _31190__$1 = this;
return self__.meta31189;
});

biomarket.find.t_biomarket$find31188.prototype.om$core$IRender$ = true;

biomarket.find.t_biomarket$find31188.prototype.om$core$IRender$render$arity$1 = (function (this__25822__auto__){
var self__ = this;
var this__25822__auto____$1 = this;
return React.DOM.div({"style": {"padding-top": "20px"}},om.core.build.call(null,biomarket.utilities.skill_tags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"skills","skills",958701426).cljs$core$IFn$_invoke$arity$1(self__.project),cljs.core.PersistentArrayMap.EMPTY], null)));
});

biomarket.find.t_biomarket$find31188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-skills","show-skills",1065280605,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31189","meta31189",1727032813,null)], null);
});

biomarket.find.t_biomarket$find31188.cljs$lang$type = true;

biomarket.find.t_biomarket$find31188.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find31188";

biomarket.find.t_biomarket$find31188.cljs$lang$ctorPrWriter = (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"biomarket.find/t_biomarket$find31188");
});

biomarket.find.__GT_t_biomarket$find31188 = (function biomarket$find$show_skills_$___GT_t_biomarket$find31188(show_skills__$1,project__$1,owner__$1,meta31189){
return (new biomarket.find.t_biomarket$find31188(show_skills__$1,project__$1,owner__$1,meta31189));
});

}

return (new biomarket.find.t_biomarket$find31188(biomarket$find$show_skills,project,owner,null));
});
biomarket.find.change_view = (function biomarket$find$change_view(owner,view){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497),cljs.core.update_in.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),(function (x){
return view;
})));
});
biomarket.find.project_summary = (function biomarket$find$project_summary(project,owner){
if(typeof biomarket.find.t_biomarket$find31235 !== 'undefined'){
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
biomarket.find.t_biomarket$find31235 = (function (project_summary,project,owner,meta31236){
this.project_summary = project_summary;
this.project = project;
this.owner = owner;
this.meta31236 = meta31236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find31235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31237,meta31236__$1){
var self__ = this;
var _31237__$1 = this;
return (new biomarket.find.t_biomarket$find31235(self__.project_summary,self__.project,self__.owner,meta31236__$1));
});

biomarket.find.t_biomarket$find31235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31237){
var self__ = this;
var _31237__$1 = this;
return self__.meta31236;
});

biomarket.find.t_biomarket$find31235.prototype.om$core$IInitState$ = true;

biomarket.find.t_biomarket$find31235.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var id = cljs.core.gensym.call(null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bottoms","bottoms",-116131497),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"oc-tag","oc-tag",-724883257),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skills","skills",958701426),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Matched skills",biomarket.find.show_skills], null),new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Show bids",biomarket.bids.show_bids], null),new cljs.core.Keyword(null,"discussion","discussion",-188707284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Discussion",biomarket.comments.comments], null)], null),new cljs.core.Keyword(null,"bid-widget","bid-widget",627145557),biomarket.bids.bid_widget], null),new cljs.core.Keyword(null,"bids","bids",-1493194652),null,new cljs.core.Keyword(null,"bid-loop","bid-loop",1130336658),true], null);
});

biomarket.find.t_biomarket$find31235.prototype.om$core$IWillMount$ = true;

biomarket.find.t_biomarket$find31235.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var inputs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858));
biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),((function (inputs,___$1){
return (function (o,p__31238){
var map__31239 = p__31238;
var map__31239__$1 = ((((!((map__31239 == null)))?((((map__31239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31239):map__31239);
var data = cljs.core.get.call(null,map__31239__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var pred__31241 = cljs.core._EQ_;
var expr__31242 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(pred__31241.call(null,new cljs.core.Keyword(null,"change-view","change-view",-1206699831),expr__31242))){
return biomarket.find.change_view.call(null,o,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(data));
} else {
if(cljs.core.truth_(pred__31241.call(null,new cljs.core.Keyword(null,"submit","submit",-49315317),expr__31242))){
biomarket.bids.submit_bid.call(null,o,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project));

return biomarket.bids.bid_server_call.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__31242)].join('')));
}
}
});})(inputs,___$1))
);

biomarket.bids.bid_server_call.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project));

var c__25678__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25678__auto__,inputs,___$1){
return (function (){
var f__25679__auto__ = (function (){var switch__25657__auto__ = ((function (c__25678__auto__,inputs,___$1){
return (function (state_31259){
var state_val_31260 = (state_31259[(1)]);
if((state_val_31260 === (1))){
var state_31259__$1 = state_31259;
var statearr_31261_31279 = state_31259__$1;
(statearr_31261_31279[(2)] = null);

(statearr_31261_31279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (2))){
var inst_31245 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"bid-loop","bid-loop",1130336658));
var state_31259__$1 = state_31259;
if(cljs.core.truth_(inst_31245)){
var statearr_31262_31280 = state_31259__$1;
(statearr_31262_31280[(1)] = (4));

} else {
var statearr_31263_31281 = state_31259__$1;
(statearr_31263_31281[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (3))){
var inst_31257 = (state_31259[(2)]);
var state_31259__$1 = state_31259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31259__$1,inst_31257);
} else {
if((state_val_31260 === (4))){
var inst_31247 = cljs.core.async.timeout.call(null,(10000));
var inst_31248 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project);
var inst_31249 = biomarket.bids.bid_server_call.call(null,self__.owner,inst_31248);
var state_31259__$1 = (function (){var statearr_31264 = state_31259;
(statearr_31264[(7)] = inst_31249);

return statearr_31264;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31259__$1,(7),inst_31247);
} else {
if((state_val_31260 === (5))){
var state_31259__$1 = state_31259;
var statearr_31265_31282 = state_31259__$1;
(statearr_31265_31282[(2)] = null);

(statearr_31265_31282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (6))){
var inst_31255 = (state_31259[(2)]);
var state_31259__$1 = state_31259;
var statearr_31266_31283 = state_31259__$1;
(statearr_31266_31283[(2)] = inst_31255);

(statearr_31266_31283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31260 === (7))){
var inst_31251 = (state_31259[(2)]);
var state_31259__$1 = (function (){var statearr_31267 = state_31259;
(statearr_31267[(8)] = inst_31251);

return statearr_31267;
})();
var statearr_31268_31284 = state_31259__$1;
(statearr_31268_31284[(2)] = null);

(statearr_31268_31284[(1)] = (2));


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
});})(c__25678__auto__,inputs,___$1))
;
return ((function (switch__25657__auto__,c__25678__auto__,inputs,___$1){
return (function() {
var biomarket$find$project_summary_$_state_machine__25658__auto__ = null;
var biomarket$find$project_summary_$_state_machine__25658__auto____0 = (function (){
var statearr_31272 = [null,null,null,null,null,null,null,null,null];
(statearr_31272[(0)] = biomarket$find$project_summary_$_state_machine__25658__auto__);

(statearr_31272[(1)] = (1));

return statearr_31272;
});
var biomarket$find$project_summary_$_state_machine__25658__auto____1 = (function (state_31259){
while(true){
var ret_value__25659__auto__ = (function (){try{while(true){
var result__25660__auto__ = switch__25657__auto__.call(null,state_31259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25660__auto__;
}
break;
}
}catch (e31273){if((e31273 instanceof Object)){
var ex__25661__auto__ = e31273;
var statearr_31274_31285 = state_31259;
(statearr_31274_31285[(5)] = ex__25661__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31286 = state_31259;
state_31259 = G__31286;
continue;
} else {
return ret_value__25659__auto__;
}
break;
}
});
biomarket$find$project_summary_$_state_machine__25658__auto__ = function(state_31259){
switch(arguments.length){
case 0:
return biomarket$find$project_summary_$_state_machine__25658__auto____0.call(this);
case 1:
return biomarket$find$project_summary_$_state_machine__25658__auto____1.call(this,state_31259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$find$project_summary_$_state_machine__25658__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$find$project_summary_$_state_machine__25658__auto____0;
biomarket$find$project_summary_$_state_machine__25658__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$find$project_summary_$_state_machine__25658__auto____1;
return biomarket$find$project_summary_$_state_machine__25658__auto__;
})()
;})(switch__25657__auto__,c__25678__auto__,inputs,___$1))
})();
var state__25680__auto__ = (function (){var statearr_31275 = f__25679__auto__.call(null);
(statearr_31275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25678__auto__);

return statearr_31275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25680__auto__);
});})(c__25678__auto__,inputs,___$1))
);

return c__25678__auto__;
});

biomarket.find.t_biomarket$find31235.prototype.om$core$IWillUnmount$ = true;

biomarket.find.t_biomarket$find31235.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"bid-loop","bid-loop",1130336658),false);

return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project));
});

biomarket.find.t_biomarket$find31235.prototype.om$core$IRenderState$ = true;

biomarket.find.t_biomarket$find31235.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__31276){
var self__ = this;
var map__31277 = p__31276;
var map__31277__$1 = ((((!((map__31277 == null)))?((((map__31277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31277):map__31277);
var bottoms = cljs.core.get.call(null,map__31277__$1,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497));
var bids = cljs.core.get.call(null,map__31277__$1,new cljs.core.Keyword(null,"bids","bids",-1493194652));
var ___$1 = this;
return om.core.build.call(null,biomarket.utilities.project_panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,cljs.core.assoc.call(null,self__.project,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),new cljs.core.Keyword(null,"find","find",496279456)),bids),bottoms], null));
});

biomarket.find.t_biomarket$find31235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"project-summary","project-summary",1896971412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31236","meta31236",624951942,null)], null);
});

biomarket.find.t_biomarket$find31235.cljs$lang$type = true;

biomarket.find.t_biomarket$find31235.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find31235";

biomarket.find.t_biomarket$find31235.cljs$lang$ctorPrWriter = (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"biomarket.find/t_biomarket$find31235");
});

biomarket.find.__GT_t_biomarket$find31235 = (function biomarket$find$project_summary_$___GT_t_biomarket$find31235(project_summary__$1,project__$1,owner__$1,meta31236){
return (new biomarket.find.t_biomarket$find31235(project_summary__$1,project__$1,owner__$1,meta31236));
});

}

return (new biomarket.find.t_biomarket$find31235(biomarket$find$project_summary,project,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.find.find_view = (function biomarket$find$find_view(_,owner){
if(typeof biomarket.find.t_biomarket$find31294 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find31294 = (function (find_view,_,owner,meta31295){
this.find_view = find_view;
this._ = _;
this.owner = owner;
this.meta31295 = meta31295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find31294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31296,meta31295__$1){
var self__ = this;
var _31296__$1 = this;
return (new biomarket.find.t_biomarket$find31294(self__.find_view,self__._,self__.owner,meta31295__$1));
});

biomarket.find.t_biomarket$find31294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31296){
var self__ = this;
var _31296__$1 = this;
return self__.meta31295;
});

biomarket.find.t_biomarket$find31294.prototype.om$core$IInitState$ = true;

biomarket.find.t_biomarket$find31294.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.PersistentVector.EMPTY], null);
});

biomarket.find.t_biomarket$find31294.prototype.om$core$IWillMount$ = true;

biomarket.find.t_biomarket$find31294.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.find.get_projects.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814)));
});

biomarket.find.t_biomarket$find31294.prototype.om$core$IRenderState$ = true;

biomarket.find.t_biomarket$find31294.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__31297){
var self__ = this;
var map__31298 = p__31297;
var map__31298__$1 = ((((!((map__31298 == null)))?((((map__31298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31298):map__31298);
var nav = cljs.core.get.call(null,map__31298__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var projects = cljs.core.get.call(null,map__31298__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var inputs = cljs.core.get.call(null,map__31298__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var view = cljs.core.get.call(null,map__31298__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var ___$2 = this;
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (___$2,map__31298,map__31298__$1,nav,projects,inputs,view){
return (function (p1__31287_SHARP_){
return om.core.build.call(null,biomarket.find.project_summary,p1__31287_SHARP_);
});})(___$2,map__31298,map__31298__$1,nav,projects,inputs,view))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"biddead","biddead",371948723),projects))));
});

biomarket.find.t_biomarket$find31294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"find-view","find-view",-467653823,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31295","meta31295",1986873495,null)], null);
});

biomarket.find.t_biomarket$find31294.cljs$lang$type = true;

biomarket.find.t_biomarket$find31294.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find31294";

biomarket.find.t_biomarket$find31294.cljs$lang$ctorPrWriter = (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"biomarket.find/t_biomarket$find31294");
});

biomarket.find.__GT_t_biomarket$find31294 = (function biomarket$find$find_view_$___GT_t_biomarket$find31294(find_view__$1,___$1,owner__$1,meta31295){
return (new biomarket.find.t_biomarket$find31294(find_view__$1,___$1,owner__$1,meta31295));
});

}

return (new biomarket.find.t_biomarket$find31294(biomarket$find$find_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=find.js.map