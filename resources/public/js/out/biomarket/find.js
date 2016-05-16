// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.find');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('biomarket.utilities');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('biomarket.bids');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
goog.require('clojure.string');
goog.require('cljs_time.format');
biomarket.find.get_projects = (function biomarket$find$get_projects(owner,view){
var h = (function (p__133587){
var map__133588 = p__133587;
var map__133588__$1 = ((((!((map__133588 == null)))?((((map__133588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133588):map__133588);
var status = cljs.core.get.call(null,map__133588__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__133588__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),result);
} else {
return null;
}
});
return biomarket.utilities.post_params.call(null,"/projects",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"query-type","query-type",1897493311),new cljs.core.Keyword(null,"all-projects","all-projects",-406074149)], null),h);
});
biomarket.find.get_skills = (function biomarket$find$get_skills(owner){
var h = (function (p__133593){
var map__133594 = p__133593;
var map__133594__$1 = ((((!((map__133594 == null)))?((((map__133594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133594):map__133594);
var status = cljs.core.get.call(null,map__133594__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__133594__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"skills","skills",958701426),result);
} else {
return null;
}
});
return biomarket.utilities.post_params.call(null,"/project-skills",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1018387698),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579)))], null),h);
});
biomarket.find.show_skills = (function biomarket$find$show_skills(project,owner){
if(typeof biomarket.find.t_biomarket$find133599 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find133599 = (function (show_skills,project,owner,meta133600){
this.show_skills = show_skills;
this.project = project;
this.owner = owner;
this.meta133600 = meta133600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find133599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133601,meta133600__$1){
var self__ = this;
var _133601__$1 = this;
return (new biomarket.find.t_biomarket$find133599(self__.show_skills,self__.project,self__.owner,meta133600__$1));
});

biomarket.find.t_biomarket$find133599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133601){
var self__ = this;
var _133601__$1 = this;
return self__.meta133600;
});

biomarket.find.t_biomarket$find133599.prototype.om$core$IRender$ = true;

biomarket.find.t_biomarket$find133599.prototype.om$core$IRender$render$arity$1 = (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
return React.DOM.div({"style": {"padding-top": "20px"}},om.core.build.call(null,biomarket.utilities.skill_tags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"skills","skills",958701426).cljs$core$IFn$_invoke$arity$1(self__.project),cljs.core.PersistentArrayMap.EMPTY], null)));
});

biomarket.find.t_biomarket$find133599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-skills","show-skills",1065280605,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta133600","meta133600",-748642797,null)], null);
});

biomarket.find.t_biomarket$find133599.cljs$lang$type = true;

biomarket.find.t_biomarket$find133599.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find133599";

biomarket.find.t_biomarket$find133599.cljs$lang$ctorPrWriter = (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.find/t_biomarket$find133599");
});

biomarket.find.__GT_t_biomarket$find133599 = (function biomarket$find$show_skills_$___GT_t_biomarket$find133599(show_skills__$1,project__$1,owner__$1,meta133600){
return (new biomarket.find.t_biomarket$find133599(show_skills__$1,project__$1,owner__$1,meta133600));
});

}

return (new biomarket.find.t_biomarket$find133599(biomarket$find$show_skills,project,owner,null));
});
biomarket.find.change_view = (function biomarket$find$change_view(owner,view){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497),cljs.core.update_in.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),(function (x){
return view;
})));
});
biomarket.find.project_summary = (function biomarket$find$project_summary(project,owner){
if(typeof biomarket.find.t_biomarket$find133614 !== 'undefined'){
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
biomarket.find.t_biomarket$find133614 = (function (project_summary,project,owner,meta133615){
this.project_summary = project_summary;
this.project = project;
this.owner = owner;
this.meta133615 = meta133615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find133614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133616,meta133615__$1){
var self__ = this;
var _133616__$1 = this;
return (new biomarket.find.t_biomarket$find133614(self__.project_summary,self__.project,self__.owner,meta133615__$1));
});

biomarket.find.t_biomarket$find133614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133616){
var self__ = this;
var _133616__$1 = this;
return self__.meta133615;
});

biomarket.find.t_biomarket$find133614.prototype.om$core$IInitState$ = true;

biomarket.find.t_biomarket$find133614.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var id = cljs.core.gensym.call(null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bottoms","bottoms",-116131497),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"oc-tag","oc-tag",-724883257),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skills","skills",958701426),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Matched skills",biomarket.find.show_skills], null),new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Show bids",biomarket.bids.show_bids], null),new cljs.core.Keyword(null,"discussion","discussion",-188707284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Discussion",biomarket.utilities.comments], null)], null),new cljs.core.Keyword(null,"bid-widget","bid-widget",627145557),biomarket.bids.bid_widget], null),new cljs.core.Keyword(null,"bids","bids",-1493194652),null], null);
});

biomarket.find.t_biomarket$find133614.prototype.om$core$IWillMount$ = true;

biomarket.find.t_biomarket$find133614.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var inputs = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858));
biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),((function (inputs,___$1){
return (function (o,p__133617){
var map__133618 = p__133617;
var map__133618__$1 = ((((!((map__133618 == null)))?((((map__133618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133618):map__133618);
var data = cljs.core.get.call(null,map__133618__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var pred__133620 = cljs.core._EQ_;
var expr__133621 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(pred__133620.call(null,new cljs.core.Keyword(null,"change-view","change-view",-1206699831),expr__133621))){
return biomarket.find.change_view.call(null,o,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(data));
} else {
if(cljs.core.truth_(pred__133620.call(null,new cljs.core.Keyword(null,"submit","submit",-49315317),expr__133621))){
biomarket.bids.submit_bid.call(null,o,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project));

return biomarket.bids.bid_server_call.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__133621)].join('')));
}
}
});})(inputs,___$1))
);

return biomarket.bids.bid_server_call.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project));
});

biomarket.find.t_biomarket$find133614.prototype.om$core$IWillUnmount$ = true;

biomarket.find.t_biomarket$find133614.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project));
});

biomarket.find.t_biomarket$find133614.prototype.om$core$IRenderState$ = true;

biomarket.find.t_biomarket$find133614.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__133623){
var self__ = this;
var map__133624 = p__133623;
var map__133624__$1 = ((((!((map__133624 == null)))?((((map__133624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133624):map__133624);
var bottoms = cljs.core.get.call(null,map__133624__$1,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497));
var bids = cljs.core.get.call(null,map__133624__$1,new cljs.core.Keyword(null,"bids","bids",-1493194652));
var ___$1 = this;
return om.core.build.call(null,biomarket.utilities.project_panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,cljs.core.assoc.call(null,self__.project,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),new cljs.core.Keyword(null,"find","find",496279456)),bids),bottoms], null));
});

biomarket.find.t_biomarket$find133614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"project-summary","project-summary",1896971412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta133615","meta133615",1258861083,null)], null);
});

biomarket.find.t_biomarket$find133614.cljs$lang$type = true;

biomarket.find.t_biomarket$find133614.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find133614";

biomarket.find.t_biomarket$find133614.cljs$lang$ctorPrWriter = (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.find/t_biomarket$find133614");
});

biomarket.find.__GT_t_biomarket$find133614 = (function biomarket$find$project_summary_$___GT_t_biomarket$find133614(project_summary__$1,project__$1,owner__$1,meta133615){
return (new biomarket.find.t_biomarket$find133614(project_summary__$1,project__$1,owner__$1,meta133615));
});

}

return (new biomarket.find.t_biomarket$find133614(biomarket$find$project_summary,project,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.find.find_view = (function biomarket$find$find_view(_,owner){
if(typeof biomarket.find.t_biomarket$find133633 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find133633 = (function (find_view,_,owner,meta133634){
this.find_view = find_view;
this._ = _;
this.owner = owner;
this.meta133634 = meta133634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find133633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133635,meta133634__$1){
var self__ = this;
var _133635__$1 = this;
return (new biomarket.find.t_biomarket$find133633(self__.find_view,self__._,self__.owner,meta133634__$1));
});

biomarket.find.t_biomarket$find133633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133635){
var self__ = this;
var _133635__$1 = this;
return self__.meta133634;
});

biomarket.find.t_biomarket$find133633.prototype.om$core$IInitState$ = true;

biomarket.find.t_biomarket$find133633.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.PersistentVector.EMPTY], null);
});

biomarket.find.t_biomarket$find133633.prototype.om$core$IWillMount$ = true;

biomarket.find.t_biomarket$find133633.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.find.get_projects.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814)));
});

biomarket.find.t_biomarket$find133633.prototype.om$core$IRenderState$ = true;

biomarket.find.t_biomarket$find133633.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__133636){
var self__ = this;
var map__133637 = p__133636;
var map__133637__$1 = ((((!((map__133637 == null)))?((((map__133637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133637):map__133637);
var nav = cljs.core.get.call(null,map__133637__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var projects = cljs.core.get.call(null,map__133637__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var inputs = cljs.core.get.call(null,map__133637__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var view = cljs.core.get.call(null,map__133637__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var ___$2 = this;
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (___$2,map__133637,map__133637__$1,nav,projects,inputs,view){
return (function (p1__133626_SHARP_){
return om.core.build.call(null,biomarket.find.project_summary,p1__133626_SHARP_);
});})(___$2,map__133637,map__133637__$1,nav,projects,inputs,view))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"biddead","biddead",371948723),projects))));
});

biomarket.find.t_biomarket$find133633.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"find-view","find-view",-467653823,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta133634","meta133634",-229269047,null)], null);
});

biomarket.find.t_biomarket$find133633.cljs$lang$type = true;

biomarket.find.t_biomarket$find133633.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find133633";

biomarket.find.t_biomarket$find133633.cljs$lang$ctorPrWriter = (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.find/t_biomarket$find133633");
});

biomarket.find.__GT_t_biomarket$find133633 = (function biomarket$find$find_view_$___GT_t_biomarket$find133633(find_view__$1,___$1,owner__$1,meta133634){
return (new biomarket.find.t_biomarket$find133633(find_view__$1,___$1,owner__$1,meta133634));
});

}

return (new biomarket.find.t_biomarket$find133633(biomarket$find$find_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=find.js.map