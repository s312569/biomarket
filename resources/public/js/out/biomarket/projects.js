// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.projects');
goog.require('cljs.core');
goog.require('biomarket.login');
goog.require('biomarket.utilities');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
goog.require('clojure.string');
goog.require('biomarket.newproject');
biomarket.projects.get_projects = (function biomarket$projects$get_projects(owner){
var h = (function (p__43067){
var map__43068 = p__43067;
var map__43068__$1 = ((((!((map__43068 == null)))?((((map__43068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43068):map__43068);
var status = cljs.core.get.call(null,map__43068__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__43068__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),result);
} else {
return null;
}
});
var projects_QMARK_ = (function (){var pred__43070 = cljs.core._EQ_;
var expr__43071 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814));
if(cljs.core.truth_(pred__43070.call(null,new cljs.core.Keyword(null,"expired","expired",917709975),expr__43071))){
return new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250);
} else {
if(cljs.core.truth_(pred__43070.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),expr__43071))){
return new cljs.core.Keyword(null,"user-projects","user-projects",1354195351);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__43071)].join('')));
}
}
})();
return biomarket.utilities.post_params.call(null,"/projects",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-type","query-type",1897493311),projects_QMARK_], null),h);
});
biomarket.projects.show_bids = (function biomarket$projects$show_bids(pid,owner){
if(typeof biomarket.projects.t_biomarket$projects43076 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects43076 = (function (show_bids,pid,owner,meta43077){
this.show_bids = show_bids;
this.pid = pid;
this.owner = owner;
this.meta43077 = meta43077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects43076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43078,meta43077__$1){
var self__ = this;
var _43078__$1 = this;
return (new biomarket.projects.t_biomarket$projects43076(self__.show_bids,self__.pid,self__.owner,meta43077__$1));
});

biomarket.projects.t_biomarket$projects43076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43078){
var self__ = this;
var _43078__$1 = this;
return self__.meta43077;
});

biomarket.projects.t_biomarket$projects43076.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects43076.prototype.om$core$IRender$render$arity$1 = (function (this__25403__auto__){
var self__ = this;
var this__25403__auto____$1 = this;
return React.DOM.div({"style": {"padding-top": "10px"}},"Here be bids");
});

biomarket.projects.t_biomarket$projects43076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-bids","show-bids",1253393431,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pid","pid",-1636048071,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"pid","pid",-1636048071,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43077","meta43077",435987972,null)], null);
});

biomarket.projects.t_biomarket$projects43076.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects43076.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects43076";

biomarket.projects.t_biomarket$projects43076.cljs$lang$ctorPrWriter = (function (this__23141__auto__,writer__23142__auto__,opt__23143__auto__){
return cljs.core._write.call(null,writer__23142__auto__,"biomarket.projects/t_biomarket$projects43076");
});

biomarket.projects.__GT_t_biomarket$projects43076 = (function biomarket$projects$show_bids_$___GT_t_biomarket$projects43076(show_bids__$1,pid__$1,owner__$1,meta43077){
return (new biomarket.projects.t_biomarket$projects43076(show_bids__$1,pid__$1,owner__$1,meta43077));
});

}

return (new biomarket.projects.t_biomarket$projects43076(biomarket$projects$show_bids,pid,owner,null));
});
biomarket.projects.project_summary = (function biomarket$projects$project_summary(project,owner){
if(typeof biomarket.projects.t_biomarket$projects43082 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects43082 = (function (project_summary,project,owner,meta43083){
this.project_summary = project_summary;
this.project = project;
this.owner = owner;
this.meta43083 = meta43083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects43082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43084,meta43083__$1){
var self__ = this;
var _43084__$1 = this;
return (new biomarket.projects.t_biomarket$projects43082(self__.project_summary,self__.project,self__.owner,meta43083__$1));
});

biomarket.projects.t_biomarket$projects43082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43084){
var self__ = this;
var _43084__$1 = this;
return self__.meta43083;
});

biomarket.projects.t_biomarket$projects43082.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects43082.prototype.om$core$IRender$render$arity$1 = (function (this__25403__auto__){
var self__ = this;
var this__25403__auto____$1 = this;
return om.core.build.call(null,biomarket.utilities.project_panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.project,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Show bids",biomarket.projects.show_bids,new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(self__.project)], null)], null)], null));
});

biomarket.projects.t_biomarket$projects43082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"project-summary","project-summary",1896971412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43083","meta43083",-1428220254,null)], null);
});

biomarket.projects.t_biomarket$projects43082.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects43082.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects43082";

biomarket.projects.t_biomarket$projects43082.cljs$lang$ctorPrWriter = (function (this__23141__auto__,writer__23142__auto__,opt__23143__auto__){
return cljs.core._write.call(null,writer__23142__auto__,"biomarket.projects/t_biomarket$projects43082");
});

biomarket.projects.__GT_t_biomarket$projects43082 = (function biomarket$projects$project_summary_$___GT_t_biomarket$projects43082(project_summary__$1,project__$1,owner__$1,meta43083){
return (new biomarket.projects.t_biomarket$projects43082(project_summary__$1,project__$1,owner__$1,meta43083));
});

}

return (new biomarket.projects.t_biomarket$projects43082(biomarket$projects$project_summary,project,owner,null));
});
biomarket.projects.project_nav = (function biomarket$projects$project_nav(p__43087,owner){
var vec__43092 = p__43087;
var control = cljs.core.nth.call(null,vec__43092,(0),null);
var drop = cljs.core.nth.call(null,vec__43092,(1),null);
var view = cljs.core.nth.call(null,vec__43092,(2),null);
if(typeof biomarket.projects.t_biomarket$projects43093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects43093 = (function (project_nav,p__43087,owner,vec__43092,control,drop,view,meta43094){
this.project_nav = project_nav;
this.p__43087 = p__43087;
this.owner = owner;
this.vec__43092 = vec__43092;
this.control = control;
this.drop = drop;
this.view = view;
this.meta43094 = meta43094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects43093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__43092,control,drop,view){
return (function (_43095,meta43094__$1){
var self__ = this;
var _43095__$1 = this;
return (new biomarket.projects.t_biomarket$projects43093(self__.project_nav,self__.p__43087,self__.owner,self__.vec__43092,self__.control,self__.drop,self__.view,meta43094__$1));
});})(vec__43092,control,drop,view))
;

biomarket.projects.t_biomarket$projects43093.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__43092,control,drop,view){
return (function (_43095){
var self__ = this;
var _43095__$1 = this;
return self__.meta43094;
});})(vec__43092,control,drop,view))
;

biomarket.projects.t_biomarket$projects43093.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects43093.prototype.om$core$IRender$render$arity$1 = ((function (vec__43092,control,drop,view){
return (function (this__25403__auto__){
var self__ = this;
var this__25403__auto____$1 = this;
return React.DOM.div(null,React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-heading"},cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (this__25403__auto____$1,vec__43092,control,drop,view){
return (function (p1__43085_SHARP_){
return React.DOM.button({"className": "btn btn-primary", "onClick": cljs.core.second.call(null,p1__43085_SHARP_)},cljs.core.first.call(null,p1__43085_SHARP_));
});})(this__25403__auto____$1,vec__43092,control,drop,view))
,self__.control))),React.DOM.div({"className": "panel-body", "style": {"text-align": "center"}},React.DOM.div({"style": {"text-align": "center", "font-weight": "bold"}},"Show:"),cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,((function (this__25403__auto____$1,vec__43092,control,drop,view){
return (function (p1__43086_SHARP_){
return React.DOM.a({"className": ((cljs.core._EQ_.call(null,self__.view,cljs.core.second.call(null,p1__43086_SHARP_)))?"btn btn-default active":"btn btn-default"), "onClick": ((function (this__25403__auto____$1,vec__43092,control,drop,view){
return (function (_){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","project-view","biomarket.projects/project-view",-1761132518),cljs.core.second.call(null,p1__43086_SHARP_));
});})(this__25403__auto____$1,vec__43092,control,drop,view))
},cljs.core.first.call(null,p1__43086_SHARP_));
});})(this__25403__auto____$1,vec__43092,control,drop,view))
,self__.drop)))));
});})(vec__43092,control,drop,view))
;

biomarket.projects.t_biomarket$projects43093.getBasis = ((function (vec__43092,control,drop,view){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"project-nav","project-nav",-364291845,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"control","control",-761857733,null),new cljs.core.Symbol(null,"drop","drop",2005013138,null),new cljs.core.Symbol(null,"view","view",-1406440955,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__43087","p__43087",254696255,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__43092","vec__43092",477527477,null),new cljs.core.Symbol(null,"control","control",-761857733,null),new cljs.core.Symbol(null,"drop","drop",2005013138,null),new cljs.core.Symbol(null,"view","view",-1406440955,null),new cljs.core.Symbol(null,"meta43094","meta43094",565988560,null)], null);
});})(vec__43092,control,drop,view))
;

biomarket.projects.t_biomarket$projects43093.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects43093.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects43093";

biomarket.projects.t_biomarket$projects43093.cljs$lang$ctorPrWriter = ((function (vec__43092,control,drop,view){
return (function (this__23141__auto__,writer__23142__auto__,opt__23143__auto__){
return cljs.core._write.call(null,writer__23142__auto__,"biomarket.projects/t_biomarket$projects43093");
});})(vec__43092,control,drop,view))
;

biomarket.projects.__GT_t_biomarket$projects43093 = ((function (vec__43092,control,drop,view){
return (function biomarket$projects$project_nav_$___GT_t_biomarket$projects43093(project_nav__$1,p__43087__$1,owner__$1,vec__43092__$1,control__$1,drop__$1,view__$1,meta43094){
return (new biomarket.projects.t_biomarket$projects43093(project_nav__$1,p__43087__$1,owner__$1,vec__43092__$1,control__$1,drop__$1,view__$1,meta43094));
});})(vec__43092,control,drop,view))
;

}

return (new biomarket.projects.t_biomarket$projects43093(biomarket$projects$project_nav,p__43087,owner,vec__43092,control,drop,view,null));
});
biomarket.projects.home_view = (function biomarket$projects$home_view(_,owner){
if(typeof biomarket.projects.t_biomarket$projects43106 !== 'undefined'){
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
biomarket.projects.t_biomarket$projects43106 = (function (home_view,_,owner,meta43107){
this.home_view = home_view;
this._ = _;
this.owner = owner;
this.meta43107 = meta43107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects43106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43108,meta43107__$1){
var self__ = this;
var _43108__$1 = this;
return (new biomarket.projects.t_biomarket$projects43106(self__.home_view,self__._,self__.owner,meta43107__$1));
});

biomarket.projects.t_biomarket$projects43106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43108){
var self__ = this;
var _43108__$1 = this;
return self__.meta43107;
});

biomarket.projects.t_biomarket$projects43106.prototype.om$core$IInitState$ = true;

biomarket.projects.t_biomarket$projects43106.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Open Projects",new cljs.core.Keyword(null,"open","open",-1763596448)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active Projects",new cljs.core.Keyword(null,"active","active",1895962068)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed Projects",new cljs.core.Keyword(null,"completed","completed",-486056503)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Expired Projects",new cljs.core.Keyword(null,"expired","expired",917709975)], null)], null),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Project",((function (___$2){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141),new cljs.core.Keyword(null,"new","new",-2085437848));
});})(___$2))
], null)], null)], null);
});

biomarket.projects.t_biomarket$projects43106.prototype.om$core$IWillMount$ = true;

biomarket.projects.t_biomarket$projects43106.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
biomarket.projects.get_projects.call(null,self__.owner);

return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","project-view","biomarket.projects/project-view",-1761132518),((function (___$2){
return (function (o,p__43109){
var map__43110 = p__43109;
var map__43110__$1 = ((((!((map__43110 == null)))?((((map__43110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43110):map__43110);
var data = cljs.core.get.call(null,map__43110__$1,new cljs.core.Keyword(null,"data","data",-232669377));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),data);

return biomarket.projects.get_projects.call(null,self__.owner);
});})(___$2))
);
});

biomarket.projects.t_biomarket$projects43106.prototype.om$core$IWillUnmount$ = true;

biomarket.projects.t_biomarket$projects43106.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","project-view","biomarket.projects/project-view",-1761132518));
});

biomarket.projects.t_biomarket$projects43106.prototype.om$core$IRenderState$ = true;

biomarket.projects.t_biomarket$projects43106.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__43112){
var self__ = this;
var map__43113 = p__43112;
var map__43113__$1 = ((((!((map__43113 == null)))?((((map__43113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43113):map__43113);
var nav = cljs.core.get.call(null,map__43113__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var projects = cljs.core.get.call(null,map__43113__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var inputs = cljs.core.get.call(null,map__43113__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var view = cljs.core.get.call(null,map__43113__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var ___$2 = this;
return React.DOM.div(null,om.core.build.call(null,biomarket.projects.project_nav,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav,inputs,view], null)),React.DOM.div({"style": {"padding-top": "10px"}}),((cljs.core.seq.call(null,projects))?cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (___$2,map__43113,map__43113__$1,nav,projects,inputs,view){
return (function (p1__43096_SHARP_){
return om.core.build.call(null,biomarket.projects.project_summary,p1__43096_SHARP_);
});})(___$2,map__43113,map__43113__$1,nav,projects,inputs,view))
,projects)):React.DOM.div({"style": {"padding-top": "30px", "text-align": "center"}},[cljs.core.str("You have no "),cljs.core.str(cljs.core.name.call(null,view)),cljs.core.str(" projects.")].join(''))));
});

biomarket.projects.t_biomarket$projects43106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"home-view","home-view",-289851298,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43107","meta43107",-255325473,null)], null);
});

biomarket.projects.t_biomarket$projects43106.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects43106.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects43106";

biomarket.projects.t_biomarket$projects43106.cljs$lang$ctorPrWriter = (function (this__23141__auto__,writer__23142__auto__,opt__23143__auto__){
return cljs.core._write.call(null,writer__23142__auto__,"biomarket.projects/t_biomarket$projects43106");
});

biomarket.projects.__GT_t_biomarket$projects43106 = (function biomarket$projects$home_view_$___GT_t_biomarket$projects43106(home_view__$1,___$1,owner__$1,meta43107){
return (new biomarket.projects.t_biomarket$projects43106(home_view__$1,___$1,owner__$1,meta43107));
});

}

return (new biomarket.projects.t_biomarket$projects43106(biomarket$projects$home_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.projects.projects_view_control = (function biomarket$projects$projects_view_control(_,owner){
if(typeof biomarket.projects.t_biomarket$projects43127 !== 'undefined'){
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
biomarket.projects.t_biomarket$projects43127 = (function (projects_view_control,_,owner,meta43128){
this.projects_view_control = projects_view_control;
this._ = _;
this.owner = owner;
this.meta43128 = meta43128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects43127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43129,meta43128__$1){
var self__ = this;
var _43129__$1 = this;
return (new biomarket.projects.t_biomarket$projects43127(self__.projects_view_control,self__._,self__.owner,meta43128__$1));
});

biomarket.projects.t_biomarket$projects43127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43129){
var self__ = this;
var _43129__$1 = this;
return self__.meta43128;
});

biomarket.projects.t_biomarket$projects43127.prototype.om$core$IInitState$ = true;

biomarket.projects.t_biomarket$projects43127.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"home","home",-74557309)], null);
});

biomarket.projects.t_biomarket$projects43127.prototype.om$core$IWillMount$ = true;

biomarket.projects.t_biomarket$projects43127.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141),((function (___$2){
return (function (o,p__43130){
var map__43131 = p__43130;
var map__43131__$1 = ((((!((map__43131 == null)))?((((map__43131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43131):map__43131);
var data = cljs.core.get.call(null,map__43131__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"current","current",-1088038603),data);
});})(___$2))
);
});

biomarket.projects.t_biomarket$projects43127.prototype.om$core$IWillUnmount$ = true;

biomarket.projects.t_biomarket$projects43127.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141));
});

biomarket.projects.t_biomarket$projects43127.prototype.om$core$IRenderState$ = true;

biomarket.projects.t_biomarket$projects43127.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__43133){
var self__ = this;
var map__43134 = p__43133;
var map__43134__$1 = ((((!((map__43134 == null)))?((((map__43134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43134):map__43134);
var current = cljs.core.get.call(null,map__43134__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var nav = cljs.core.get.call(null,map__43134__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var ___$2 = this;
var pred__43136 = cljs.core._EQ_;
var expr__43137 = current;
if(cljs.core.truth_(pred__43136.call(null,new cljs.core.Keyword(null,"home","home",-74557309),expr__43137))){
return om.core.build.call(null,biomarket.projects.home_view,null);
} else {
if(cljs.core.truth_(pred__43136.call(null,new cljs.core.Keyword(null,"new","new",-2085437848),expr__43137))){
return om.core.build.call(null,biomarket.newproject.new_project_view,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__43137)].join('')));
}
}
});

biomarket.projects.t_biomarket$projects43127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"projects-view-control","projects-view-control",-1753118227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43128","meta43128",-1023485788,null)], null);
});

biomarket.projects.t_biomarket$projects43127.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects43127.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects43127";

biomarket.projects.t_biomarket$projects43127.cljs$lang$ctorPrWriter = (function (this__23141__auto__,writer__23142__auto__,opt__23143__auto__){
return cljs.core._write.call(null,writer__23142__auto__,"biomarket.projects/t_biomarket$projects43127");
});

biomarket.projects.__GT_t_biomarket$projects43127 = (function biomarket$projects$projects_view_control_$___GT_t_biomarket$projects43127(projects_view_control__$1,___$1,owner__$1,meta43128){
return (new biomarket.projects.t_biomarket$projects43127(projects_view_control__$1,___$1,owner__$1,meta43128));
});

}

return (new biomarket.projects.t_biomarket$projects43127(biomarket$projects$projects_view_control,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=projects.js.map