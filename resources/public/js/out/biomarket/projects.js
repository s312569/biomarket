// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.projects');
goog.require('cljs.core');
goog.require('biomarket.login');
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
goog.require('biomarket.newproject');
biomarket.projects.change_view = (function biomarket$projects$change_view(owner,view){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497),cljs.core.update_in.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),(function (x){
return view;
})));
});
biomarket.projects.show_bids = (function biomarket$projects$show_bids(pid,owner){
if(typeof biomarket.projects.t_biomarket$projects31037 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects31037 = (function (show_bids,pid,owner,meta31038){
this.show_bids = show_bids;
this.pid = pid;
this.owner = owner;
this.meta31038 = meta31038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects31037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31039,meta31038__$1){
var self__ = this;
var _31039__$1 = this;
return (new biomarket.projects.t_biomarket$projects31037(self__.show_bids,self__.pid,self__.owner,meta31038__$1));
});

biomarket.projects.t_biomarket$projects31037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31039){
var self__ = this;
var _31039__$1 = this;
return self__.meta31038;
});

biomarket.projects.t_biomarket$projects31037.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects31037.prototype.om$core$IRender$render$arity$1 = (function (this__25822__auto__){
var self__ = this;
var this__25822__auto____$1 = this;
return React.DOM.div({"style": {"padding-top": "10px"}},"Here be bids");
});

biomarket.projects.t_biomarket$projects31037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-bids","show-bids",1253393431,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pid","pid",-1636048071,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"pid","pid",-1636048071,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31038","meta31038",366470508,null)], null);
});

biomarket.projects.t_biomarket$projects31037.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects31037.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects31037";

biomarket.projects.t_biomarket$projects31037.cljs$lang$ctorPrWriter = (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"biomarket.projects/t_biomarket$projects31037");
});

biomarket.projects.__GT_t_biomarket$projects31037 = (function biomarket$projects$show_bids_$___GT_t_biomarket$projects31037(show_bids__$1,pid__$1,owner__$1,meta31038){
return (new biomarket.projects.t_biomarket$projects31037(show_bids__$1,pid__$1,owner__$1,meta31038));
});

}

return (new biomarket.projects.t_biomarket$projects31037(biomarket$projects$show_bids,pid,owner,null));
});
biomarket.projects.project_summary = (function biomarket$projects$project_summary(project,owner){
if(typeof biomarket.projects.t_biomarket$projects31049 !== 'undefined'){
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
biomarket.projects.t_biomarket$projects31049 = (function (project_summary,project,owner,meta31050){
this.project_summary = project_summary;
this.project = project;
this.owner = owner;
this.meta31050 = meta31050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects31049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31051,meta31050__$1){
var self__ = this;
var _31051__$1 = this;
return (new biomarket.projects.t_biomarket$projects31049(self__.project_summary,self__.project,self__.owner,meta31050__$1));
});

biomarket.projects.t_biomarket$projects31049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31051){
var self__ = this;
var _31051__$1 = this;
return self__.meta31050;
});

biomarket.projects.t_biomarket$projects31049.prototype.om$core$IInitState$ = true;

biomarket.projects.t_biomarket$projects31049.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bottoms","bottoms",-116131497),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"oc-tag","oc-tag",-724883257),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Show bids",biomarket.projects.show_bids], null)], null)], null),new cljs.core.Keyword(null,"bids","bids",-1493194652),null], null);
});

biomarket.projects.t_biomarket$projects31049.prototype.om$core$IWillMount$ = true;

biomarket.projects.t_biomarket$projects31049.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),((function (___$1){
return (function (o,p__31052){
var map__31053 = p__31052;
var map__31053__$1 = ((((!((map__31053 == null)))?((((map__31053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31053):map__31053);
var data = cljs.core.get.call(null,map__31053__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.projects.change_view.call(null,o,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(data));
});})(___$1))
);

return biomarket.bids.bid_server_call.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project));
});

biomarket.projects.t_biomarket$projects31049.prototype.om$core$IWillUnmount$ = true;

biomarket.projects.t_biomarket$projects31049.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project));
});

biomarket.projects.t_biomarket$projects31049.prototype.om$core$IRenderState$ = true;

biomarket.projects.t_biomarket$projects31049.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__31055){
var self__ = this;
var map__31056 = p__31055;
var map__31056__$1 = ((((!((map__31056 == null)))?((((map__31056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31056):map__31056);
var bottoms = cljs.core.get.call(null,map__31056__$1,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497));
var bids = cljs.core.get.call(null,map__31056__$1,new cljs.core.Keyword(null,"bids","bids",-1493194652));
var ___$1 = this;
return om.core.build.call(null,biomarket.utilities.project_panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,self__.project,bids),bottoms], null));
});

biomarket.projects.t_biomarket$projects31049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"project-summary","project-summary",1896971412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31050","meta31050",-1746288704,null)], null);
});

biomarket.projects.t_biomarket$projects31049.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects31049.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects31049";

biomarket.projects.t_biomarket$projects31049.cljs$lang$ctorPrWriter = (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"biomarket.projects/t_biomarket$projects31049");
});

biomarket.projects.__GT_t_biomarket$projects31049 = (function biomarket$projects$project_summary_$___GT_t_biomarket$projects31049(project_summary__$1,project__$1,owner__$1,meta31050){
return (new biomarket.projects.t_biomarket$projects31049(project_summary__$1,project__$1,owner__$1,meta31050));
});

}

return (new biomarket.projects.t_biomarket$projects31049(biomarket$projects$project_summary,project,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.projects.project_nav = (function biomarket$projects$project_nav(p__31060,owner){
var vec__31065 = p__31060;
var control = cljs.core.nth.call(null,vec__31065,(0),null);
var drop = cljs.core.nth.call(null,vec__31065,(1),null);
var view = cljs.core.nth.call(null,vec__31065,(2),null);
if(typeof biomarket.projects.t_biomarket$projects31066 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects31066 = (function (project_nav,p__31060,owner,vec__31065,control,drop,view,meta31067){
this.project_nav = project_nav;
this.p__31060 = p__31060;
this.owner = owner;
this.vec__31065 = vec__31065;
this.control = control;
this.drop = drop;
this.view = view;
this.meta31067 = meta31067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects31066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__31065,control,drop,view){
return (function (_31068,meta31067__$1){
var self__ = this;
var _31068__$1 = this;
return (new biomarket.projects.t_biomarket$projects31066(self__.project_nav,self__.p__31060,self__.owner,self__.vec__31065,self__.control,self__.drop,self__.view,meta31067__$1));
});})(vec__31065,control,drop,view))
;

biomarket.projects.t_biomarket$projects31066.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__31065,control,drop,view){
return (function (_31068){
var self__ = this;
var _31068__$1 = this;
return self__.meta31067;
});})(vec__31065,control,drop,view))
;

biomarket.projects.t_biomarket$projects31066.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects31066.prototype.om$core$IRender$render$arity$1 = ((function (vec__31065,control,drop,view){
return (function (this__25822__auto__){
var self__ = this;
var this__25822__auto____$1 = this;
return React.DOM.div(null,React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-heading"},cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (this__25822__auto____$1,vec__31065,control,drop,view){
return (function (p1__31058_SHARP_){
return React.DOM.a({"className": "btn btn-primary", "onClick": cljs.core.second.call(null,p1__31058_SHARP_)},cljs.core.first.call(null,p1__31058_SHARP_));
});})(this__25822__auto____$1,vec__31065,control,drop,view))
,self__.control))),React.DOM.div({"className": "panel-body", "style": {"text-align": "center"}},React.DOM.div({"style": {"text-align": "center", "font-weight": "bold"}},"Show:"),cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,((function (this__25822__auto____$1,vec__31065,control,drop,view){
return (function (p1__31059_SHARP_){
return React.DOM.a({"className": ((cljs.core._EQ_.call(null,self__.view,cljs.core.second.call(null,p1__31059_SHARP_)))?"btn btn-default active":"btn btn-default"), "onClick": ((function (this__25822__auto____$1,vec__31065,control,drop,view){
return (function (_){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","project-view","biomarket.projects/project-view",-1761132518),cljs.core.second.call(null,p1__31059_SHARP_));
});})(this__25822__auto____$1,vec__31065,control,drop,view))
},cljs.core.first.call(null,p1__31059_SHARP_));
});})(this__25822__auto____$1,vec__31065,control,drop,view))
,self__.drop)))));
});})(vec__31065,control,drop,view))
;

biomarket.projects.t_biomarket$projects31066.getBasis = ((function (vec__31065,control,drop,view){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"project-nav","project-nav",-364291845,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"control","control",-761857733,null),new cljs.core.Symbol(null,"drop","drop",2005013138,null),new cljs.core.Symbol(null,"view","view",-1406440955,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__31060","p__31060",-1919004508,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__31065","vec__31065",331811145,null),new cljs.core.Symbol(null,"control","control",-761857733,null),new cljs.core.Symbol(null,"drop","drop",2005013138,null),new cljs.core.Symbol(null,"view","view",-1406440955,null),new cljs.core.Symbol(null,"meta31067","meta31067",-291588158,null)], null);
});})(vec__31065,control,drop,view))
;

biomarket.projects.t_biomarket$projects31066.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects31066.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects31066";

biomarket.projects.t_biomarket$projects31066.cljs$lang$ctorPrWriter = ((function (vec__31065,control,drop,view){
return (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"biomarket.projects/t_biomarket$projects31066");
});})(vec__31065,control,drop,view))
;

biomarket.projects.__GT_t_biomarket$projects31066 = ((function (vec__31065,control,drop,view){
return (function biomarket$projects$project_nav_$___GT_t_biomarket$projects31066(project_nav__$1,p__31060__$1,owner__$1,vec__31065__$1,control__$1,drop__$1,view__$1,meta31067){
return (new biomarket.projects.t_biomarket$projects31066(project_nav__$1,p__31060__$1,owner__$1,vec__31065__$1,control__$1,drop__$1,view__$1,meta31067));
});})(vec__31065,control,drop,view))
;

}

return (new biomarket.projects.t_biomarket$projects31066(biomarket$projects$project_nav,p__31060,owner,vec__31065,control,drop,view,null));
});
biomarket.projects.view__GT_project_view = (function biomarket$projects$view__GT_project_view(project,view){
var pred__31072 = cljs.core._EQ_;
var expr__31073 = view;
if(cljs.core.truth_(pred__31072.call(null,new cljs.core.Keyword(null,"expired","expired",917709975),expr__31073))){
return cljs.core.assoc.call(null,project,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),new cljs.core.Keyword(null,"expired","expired",917709975));
} else {
return cljs.core.assoc.call(null,project,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),new cljs.core.Keyword(null,"open","open",-1763596448));
}
});
biomarket.projects.get_projects = (function biomarket$projects$get_projects(owner){
var h = (function (p__31081){
var map__31082 = p__31081;
var map__31082__$1 = ((((!((map__31082 == null)))?((((map__31082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31082):map__31082);
var status = cljs.core.get.call(null,map__31082__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__31082__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),result);
} else {
return null;
}
});
var projects_QMARK_ = (function (){var pred__31084 = cljs.core._EQ_;
var expr__31085 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814));
if(cljs.core.truth_(pred__31084.call(null,new cljs.core.Keyword(null,"expired","expired",917709975),expr__31085))){
return new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250);
} else {
if(cljs.core.truth_(pred__31084.call(null,new cljs.core.Keyword(null,"active","active",1895962068),expr__31085))){
return new cljs.core.Keyword(null,"user-projects","user-projects",1354195351);
} else {
if(cljs.core.truth_(pred__31084.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503),expr__31085))){
return new cljs.core.Keyword(null,"user-projects","user-projects",1354195351);
} else {
if(cljs.core.truth_(pred__31084.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),expr__31085))){
return new cljs.core.Keyword(null,"user-projects","user-projects",1354195351);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__31085)].join('')));
}
}
}
}
})();
return biomarket.utilities.post_params.call(null,"/projects",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-type","query-type",1897493311),projects_QMARK_], null),h);
});
biomarket.projects.home_view = (function biomarket$projects$home_view(_,owner){
if(typeof biomarket.projects.t_biomarket$projects31097 !== 'undefined'){
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
biomarket.projects.t_biomarket$projects31097 = (function (home_view,_,owner,meta31098){
this.home_view = home_view;
this._ = _;
this.owner = owner;
this.meta31098 = meta31098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects31097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31099,meta31098__$1){
var self__ = this;
var _31099__$1 = this;
return (new biomarket.projects.t_biomarket$projects31097(self__.home_view,self__._,self__.owner,meta31098__$1));
});

biomarket.projects.t_biomarket$projects31097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31099){
var self__ = this;
var _31099__$1 = this;
return self__.meta31098;
});

biomarket.projects.t_biomarket$projects31097.prototype.om$core$IInitState$ = true;

biomarket.projects.t_biomarket$projects31097.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Open Projects",new cljs.core.Keyword(null,"open","open",-1763596448)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active Projects",new cljs.core.Keyword(null,"active","active",1895962068)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed Projects",new cljs.core.Keyword(null,"completed","completed",-486056503)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Expired Projects",new cljs.core.Keyword(null,"expired","expired",917709975)], null)], null),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Project",((function (___$2){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141),new cljs.core.Keyword(null,"new","new",-2085437848));
});})(___$2))
], null)], null)], null);
});

biomarket.projects.t_biomarket$projects31097.prototype.om$core$IWillMount$ = true;

biomarket.projects.t_biomarket$projects31097.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
biomarket.projects.get_projects.call(null,self__.owner);

return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","project-view","biomarket.projects/project-view",-1761132518),((function (___$2){
return (function (o,p__31100){
var map__31101 = p__31100;
var map__31101__$1 = ((((!((map__31101 == null)))?((((map__31101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31101):map__31101);
var data = cljs.core.get.call(null,map__31101__$1,new cljs.core.Keyword(null,"data","data",-232669377));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),data);

return biomarket.projects.get_projects.call(null,self__.owner);
});})(___$2))
);
});

biomarket.projects.t_biomarket$projects31097.prototype.om$core$IWillUnmount$ = true;

biomarket.projects.t_biomarket$projects31097.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","project-view","biomarket.projects/project-view",-1761132518));
});

biomarket.projects.t_biomarket$projects31097.prototype.om$core$IRenderState$ = true;

biomarket.projects.t_biomarket$projects31097.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__31103){
var self__ = this;
var map__31104 = p__31103;
var map__31104__$1 = ((((!((map__31104 == null)))?((((map__31104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31104):map__31104);
var nav = cljs.core.get.call(null,map__31104__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var projects = cljs.core.get.call(null,map__31104__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var inputs = cljs.core.get.call(null,map__31104__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var view = cljs.core.get.call(null,map__31104__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var ___$2 = this;
return React.DOM.div(null,om.core.build.call(null,biomarket.projects.project_nav,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav,inputs,view], null)),React.DOM.div({"style": {"padding-top": "10px"}}),((cljs.core.seq.call(null,projects))?cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (___$2,map__31104,map__31104__$1,nav,projects,inputs,view){
return (function (p1__31087_SHARP_){
return om.core.build.call(null,biomarket.projects.project_summary,biomarket.projects.view__GT_project_view.call(null,p1__31087_SHARP_,view));
});})(___$2,map__31104,map__31104__$1,nav,projects,inputs,view))
,projects)):React.DOM.div({"style": {"padding-top": "30px", "text-align": "center"}},[cljs.core.str("You have no "),cljs.core.str(cljs.core.name.call(null,view)),cljs.core.str(" projects.")].join(''))));
});

biomarket.projects.t_biomarket$projects31097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"home-view","home-view",-289851298,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31098","meta31098",-913671294,null)], null);
});

biomarket.projects.t_biomarket$projects31097.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects31097.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects31097";

biomarket.projects.t_biomarket$projects31097.cljs$lang$ctorPrWriter = (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"biomarket.projects/t_biomarket$projects31097");
});

biomarket.projects.__GT_t_biomarket$projects31097 = (function biomarket$projects$home_view_$___GT_t_biomarket$projects31097(home_view__$1,___$1,owner__$1,meta31098){
return (new biomarket.projects.t_biomarket$projects31097(home_view__$1,___$1,owner__$1,meta31098));
});

}

return (new biomarket.projects.t_biomarket$projects31097(biomarket$projects$home_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.projects.projects_view_control = (function biomarket$projects$projects_view_control(_,owner){
if(typeof biomarket.projects.t_biomarket$projects31118 !== 'undefined'){
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
biomarket.projects.t_biomarket$projects31118 = (function (projects_view_control,_,owner,meta31119){
this.projects_view_control = projects_view_control;
this._ = _;
this.owner = owner;
this.meta31119 = meta31119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects31118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31120,meta31119__$1){
var self__ = this;
var _31120__$1 = this;
return (new biomarket.projects.t_biomarket$projects31118(self__.projects_view_control,self__._,self__.owner,meta31119__$1));
});

biomarket.projects.t_biomarket$projects31118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31120){
var self__ = this;
var _31120__$1 = this;
return self__.meta31119;
});

biomarket.projects.t_biomarket$projects31118.prototype.om$core$IInitState$ = true;

biomarket.projects.t_biomarket$projects31118.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"home","home",-74557309)], null);
});

biomarket.projects.t_biomarket$projects31118.prototype.om$core$IWillMount$ = true;

biomarket.projects.t_biomarket$projects31118.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141),((function (___$2){
return (function (o,p__31121){
var map__31122 = p__31121;
var map__31122__$1 = ((((!((map__31122 == null)))?((((map__31122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31122):map__31122);
var data = cljs.core.get.call(null,map__31122__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"current","current",-1088038603),data);
});})(___$2))
);
});

biomarket.projects.t_biomarket$projects31118.prototype.om$core$IWillUnmount$ = true;

biomarket.projects.t_biomarket$projects31118.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141));
});

biomarket.projects.t_biomarket$projects31118.prototype.om$core$IRenderState$ = true;

biomarket.projects.t_biomarket$projects31118.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__31124){
var self__ = this;
var map__31125 = p__31124;
var map__31125__$1 = ((((!((map__31125 == null)))?((((map__31125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31125):map__31125);
var current = cljs.core.get.call(null,map__31125__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var nav = cljs.core.get.call(null,map__31125__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var ___$2 = this;
var pred__31127 = cljs.core._EQ_;
var expr__31128 = current;
if(cljs.core.truth_(pred__31127.call(null,new cljs.core.Keyword(null,"home","home",-74557309),expr__31128))){
return om.core.build.call(null,biomarket.projects.home_view,null);
} else {
if(cljs.core.truth_(pred__31127.call(null,new cljs.core.Keyword(null,"new","new",-2085437848),expr__31128))){
return om.core.build.call(null,biomarket.newproject.new_project_view,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__31128)].join('')));
}
}
});

biomarket.projects.t_biomarket$projects31118.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"projects-view-control","projects-view-control",-1753118227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31119","meta31119",-1334571987,null)], null);
});

biomarket.projects.t_biomarket$projects31118.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects31118.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects31118";

biomarket.projects.t_biomarket$projects31118.cljs$lang$ctorPrWriter = (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"biomarket.projects/t_biomarket$projects31118");
});

biomarket.projects.__GT_t_biomarket$projects31118 = (function biomarket$projects$projects_view_control_$___GT_t_biomarket$projects31118(projects_view_control__$1,___$1,owner__$1,meta31119){
return (new biomarket.projects.t_biomarket$projects31118(projects_view_control__$1,___$1,owner__$1,meta31119));
});

}

return (new biomarket.projects.t_biomarket$projects31118(biomarket$projects$projects_view_control,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=projects.js.map