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
var h = (function (p__37262){
var map__37263 = p__37262;
var map__37263__$1 = ((((!((map__37263 == null)))?((((map__37263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37263):map__37263);
var status = cljs.core.get.call(null,map__37263__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__37263__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),result);
} else {
return null;
}
});
var projects_QMARK_ = (function (){var pred__37265 = cljs.core._EQ_;
var expr__37266 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814));
if(cljs.core.truth_(pred__37265.call(null,new cljs.core.Keyword(null,"expired","expired",917709975),expr__37266))){
return new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250);
} else {
if(cljs.core.truth_(pred__37265.call(null,new cljs.core.Keyword(null,"active","active",1895962068),expr__37266))){
return new cljs.core.Keyword(null,"user-projects","user-projects",1354195351);
} else {
if(cljs.core.truth_(pred__37265.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503),expr__37266))){
return new cljs.core.Keyword(null,"user-projects","user-projects",1354195351);
} else {
if(cljs.core.truth_(pred__37265.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),expr__37266))){
return new cljs.core.Keyword(null,"user-projects","user-projects",1354195351);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37266)].join('')));
}
}
}
}
})();
return biomarket.utilities.post_params.call(null,"/projects",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-type","query-type",1897493311),projects_QMARK_], null),h);
});
biomarket.projects.show_bids = (function biomarket$projects$show_bids(pid,owner){
if(typeof biomarket.projects.t_biomarket$projects37271 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects37271 = (function (show_bids,pid,owner,meta37272){
this.show_bids = show_bids;
this.pid = pid;
this.owner = owner;
this.meta37272 = meta37272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects37271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37273,meta37272__$1){
var self__ = this;
var _37273__$1 = this;
return (new biomarket.projects.t_biomarket$projects37271(self__.show_bids,self__.pid,self__.owner,meta37272__$1));
});

biomarket.projects.t_biomarket$projects37271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37273){
var self__ = this;
var _37273__$1 = this;
return self__.meta37272;
});

biomarket.projects.t_biomarket$projects37271.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects37271.prototype.om$core$IRender$render$arity$1 = (function (this__29807__auto__){
var self__ = this;
var this__29807__auto____$1 = this;
return React.DOM.div({"style": {"padding-top": "10px"}},"Here be bids");
});

biomarket.projects.t_biomarket$projects37271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-bids","show-bids",1253393431,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pid","pid",-1636048071,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"pid","pid",-1636048071,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta37272","meta37272",389544280,null)], null);
});

biomarket.projects.t_biomarket$projects37271.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects37271.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects37271";

biomarket.projects.t_biomarket$projects37271.cljs$lang$ctorPrWriter = (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"biomarket.projects/t_biomarket$projects37271");
});

biomarket.projects.__GT_t_biomarket$projects37271 = (function biomarket$projects$show_bids_$___GT_t_biomarket$projects37271(show_bids__$1,pid__$1,owner__$1,meta37272){
return (new biomarket.projects.t_biomarket$projects37271(show_bids__$1,pid__$1,owner__$1,meta37272));
});

}

return (new biomarket.projects.t_biomarket$projects37271(biomarket$projects$show_bids,pid,owner,null));
});
biomarket.projects.project_summary = (function biomarket$projects$project_summary(project,owner){
if(typeof biomarket.projects.t_biomarket$projects37277 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects37277 = (function (project_summary,project,owner,meta37278){
this.project_summary = project_summary;
this.project = project;
this.owner = owner;
this.meta37278 = meta37278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects37277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37279,meta37278__$1){
var self__ = this;
var _37279__$1 = this;
return (new biomarket.projects.t_biomarket$projects37277(self__.project_summary,self__.project,self__.owner,meta37278__$1));
});

biomarket.projects.t_biomarket$projects37277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37279){
var self__ = this;
var _37279__$1 = this;
return self__.meta37278;
});

biomarket.projects.t_biomarket$projects37277.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects37277.prototype.om$core$IRender$render$arity$1 = (function (this__29807__auto__){
var self__ = this;
var this__29807__auto____$1 = this;
return om.core.build.call(null,biomarket.utilities.project_panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.project,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Show bids",biomarket.projects.show_bids,new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(self__.project)], null)], null)], null));
});

biomarket.projects.t_biomarket$projects37277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"project-summary","project-summary",1896971412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta37278","meta37278",920660409,null)], null);
});

biomarket.projects.t_biomarket$projects37277.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects37277.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects37277";

biomarket.projects.t_biomarket$projects37277.cljs$lang$ctorPrWriter = (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"biomarket.projects/t_biomarket$projects37277");
});

biomarket.projects.__GT_t_biomarket$projects37277 = (function biomarket$projects$project_summary_$___GT_t_biomarket$projects37277(project_summary__$1,project__$1,owner__$1,meta37278){
return (new biomarket.projects.t_biomarket$projects37277(project_summary__$1,project__$1,owner__$1,meta37278));
});

}

return (new biomarket.projects.t_biomarket$projects37277(biomarket$projects$project_summary,project,owner,null));
});
biomarket.projects.project_nav = (function biomarket$projects$project_nav(p__37282,owner){
var vec__37287 = p__37282;
var control = cljs.core.nth.call(null,vec__37287,(0),null);
var drop = cljs.core.nth.call(null,vec__37287,(1),null);
var view = cljs.core.nth.call(null,vec__37287,(2),null);
if(typeof biomarket.projects.t_biomarket$projects37288 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects37288 = (function (project_nav,p__37282,owner,vec__37287,control,drop,view,meta37289){
this.project_nav = project_nav;
this.p__37282 = p__37282;
this.owner = owner;
this.vec__37287 = vec__37287;
this.control = control;
this.drop = drop;
this.view = view;
this.meta37289 = meta37289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects37288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__37287,control,drop,view){
return (function (_37290,meta37289__$1){
var self__ = this;
var _37290__$1 = this;
return (new biomarket.projects.t_biomarket$projects37288(self__.project_nav,self__.p__37282,self__.owner,self__.vec__37287,self__.control,self__.drop,self__.view,meta37289__$1));
});})(vec__37287,control,drop,view))
;

biomarket.projects.t_biomarket$projects37288.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__37287,control,drop,view){
return (function (_37290){
var self__ = this;
var _37290__$1 = this;
return self__.meta37289;
});})(vec__37287,control,drop,view))
;

biomarket.projects.t_biomarket$projects37288.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects37288.prototype.om$core$IRender$render$arity$1 = ((function (vec__37287,control,drop,view){
return (function (this__29807__auto__){
var self__ = this;
var this__29807__auto____$1 = this;
return React.DOM.div(null,React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-heading"},cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (this__29807__auto____$1,vec__37287,control,drop,view){
return (function (p1__37280_SHARP_){
return React.DOM.button({"className": "btn btn-primary", "onClick": cljs.core.second.call(null,p1__37280_SHARP_)},cljs.core.first.call(null,p1__37280_SHARP_));
});})(this__29807__auto____$1,vec__37287,control,drop,view))
,self__.control))),React.DOM.div({"className": "panel-body", "style": {"text-align": "center"}},React.DOM.div({"style": {"text-align": "center", "font-weight": "bold"}},"Show:"),cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,((function (this__29807__auto____$1,vec__37287,control,drop,view){
return (function (p1__37281_SHARP_){
return React.DOM.a({"className": ((cljs.core._EQ_.call(null,self__.view,cljs.core.second.call(null,p1__37281_SHARP_)))?"btn btn-default active":"btn btn-default"), "onClick": ((function (this__29807__auto____$1,vec__37287,control,drop,view){
return (function (_){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","project-view","biomarket.projects/project-view",-1761132518),cljs.core.second.call(null,p1__37281_SHARP_));
});})(this__29807__auto____$1,vec__37287,control,drop,view))
},cljs.core.first.call(null,p1__37281_SHARP_));
});})(this__29807__auto____$1,vec__37287,control,drop,view))
,self__.drop)))));
});})(vec__37287,control,drop,view))
;

biomarket.projects.t_biomarket$projects37288.getBasis = ((function (vec__37287,control,drop,view){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"project-nav","project-nav",-364291845,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"control","control",-761857733,null),new cljs.core.Symbol(null,"drop","drop",2005013138,null),new cljs.core.Symbol(null,"view","view",-1406440955,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__37282","p__37282",-865645151,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__37287","vec__37287",2019539334,null),new cljs.core.Symbol(null,"control","control",-761857733,null),new cljs.core.Symbol(null,"drop","drop",2005013138,null),new cljs.core.Symbol(null,"view","view",-1406440955,null),new cljs.core.Symbol(null,"meta37289","meta37289",-560645192,null)], null);
});})(vec__37287,control,drop,view))
;

biomarket.projects.t_biomarket$projects37288.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects37288.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects37288";

biomarket.projects.t_biomarket$projects37288.cljs$lang$ctorPrWriter = ((function (vec__37287,control,drop,view){
return (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"biomarket.projects/t_biomarket$projects37288");
});})(vec__37287,control,drop,view))
;

biomarket.projects.__GT_t_biomarket$projects37288 = ((function (vec__37287,control,drop,view){
return (function biomarket$projects$project_nav_$___GT_t_biomarket$projects37288(project_nav__$1,p__37282__$1,owner__$1,vec__37287__$1,control__$1,drop__$1,view__$1,meta37289){
return (new biomarket.projects.t_biomarket$projects37288(project_nav__$1,p__37282__$1,owner__$1,vec__37287__$1,control__$1,drop__$1,view__$1,meta37289));
});})(vec__37287,control,drop,view))
;

}

return (new biomarket.projects.t_biomarket$projects37288(biomarket$projects$project_nav,p__37282,owner,vec__37287,control,drop,view,null));
});
biomarket.projects.home_view = (function biomarket$projects$home_view(_,owner){
if(typeof biomarket.projects.t_biomarket$projects37301 !== 'undefined'){
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
biomarket.projects.t_biomarket$projects37301 = (function (home_view,_,owner,meta37302){
this.home_view = home_view;
this._ = _;
this.owner = owner;
this.meta37302 = meta37302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects37301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37303,meta37302__$1){
var self__ = this;
var _37303__$1 = this;
return (new biomarket.projects.t_biomarket$projects37301(self__.home_view,self__._,self__.owner,meta37302__$1));
});

biomarket.projects.t_biomarket$projects37301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37303){
var self__ = this;
var _37303__$1 = this;
return self__.meta37302;
});

biomarket.projects.t_biomarket$projects37301.prototype.om$core$IInitState$ = true;

biomarket.projects.t_biomarket$projects37301.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Open Projects",new cljs.core.Keyword(null,"open","open",-1763596448)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active Projects",new cljs.core.Keyword(null,"active","active",1895962068)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed Projects",new cljs.core.Keyword(null,"completed","completed",-486056503)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Expired Projects",new cljs.core.Keyword(null,"expired","expired",917709975)], null)], null),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Project",((function (___$2){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141),new cljs.core.Keyword(null,"new","new",-2085437848));
});})(___$2))
], null)], null)], null);
});

biomarket.projects.t_biomarket$projects37301.prototype.om$core$IWillMount$ = true;

biomarket.projects.t_biomarket$projects37301.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
biomarket.projects.get_projects.call(null,self__.owner);

return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","project-view","biomarket.projects/project-view",-1761132518),((function (___$2){
return (function (o,p__37304){
var map__37305 = p__37304;
var map__37305__$1 = ((((!((map__37305 == null)))?((((map__37305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37305):map__37305);
var data = cljs.core.get.call(null,map__37305__$1,new cljs.core.Keyword(null,"data","data",-232669377));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),data);

return biomarket.projects.get_projects.call(null,self__.owner);
});})(___$2))
);
});

biomarket.projects.t_biomarket$projects37301.prototype.om$core$IWillUnmount$ = true;

biomarket.projects.t_biomarket$projects37301.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","project-view","biomarket.projects/project-view",-1761132518));
});

biomarket.projects.t_biomarket$projects37301.prototype.om$core$IRenderState$ = true;

biomarket.projects.t_biomarket$projects37301.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__37307){
var self__ = this;
var map__37308 = p__37307;
var map__37308__$1 = ((((!((map__37308 == null)))?((((map__37308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37308):map__37308);
var nav = cljs.core.get.call(null,map__37308__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var projects = cljs.core.get.call(null,map__37308__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var inputs = cljs.core.get.call(null,map__37308__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var view = cljs.core.get.call(null,map__37308__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var ___$2 = this;
return React.DOM.div(null,om.core.build.call(null,biomarket.projects.project_nav,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav,inputs,view], null)),React.DOM.div({"style": {"padding-top": "10px"}}),((cljs.core.seq.call(null,projects))?cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (___$2,map__37308,map__37308__$1,nav,projects,inputs,view){
return (function (p1__37291_SHARP_){
return om.core.build.call(null,biomarket.projects.project_summary,p1__37291_SHARP_);
});})(___$2,map__37308,map__37308__$1,nav,projects,inputs,view))
,projects)):React.DOM.div({"style": {"padding-top": "30px", "text-align": "center"}},[cljs.core.str("You have no "),cljs.core.str(cljs.core.name.call(null,view)),cljs.core.str(" projects.")].join(''))));
});

biomarket.projects.t_biomarket$projects37301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"home-view","home-view",-289851298,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta37302","meta37302",1327072200,null)], null);
});

biomarket.projects.t_biomarket$projects37301.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects37301.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects37301";

biomarket.projects.t_biomarket$projects37301.cljs$lang$ctorPrWriter = (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"biomarket.projects/t_biomarket$projects37301");
});

biomarket.projects.__GT_t_biomarket$projects37301 = (function biomarket$projects$home_view_$___GT_t_biomarket$projects37301(home_view__$1,___$1,owner__$1,meta37302){
return (new biomarket.projects.t_biomarket$projects37301(home_view__$1,___$1,owner__$1,meta37302));
});

}

return (new biomarket.projects.t_biomarket$projects37301(biomarket$projects$home_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.projects.projects_view_control = (function biomarket$projects$projects_view_control(_,owner){
if(typeof biomarket.projects.t_biomarket$projects37322 !== 'undefined'){
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
biomarket.projects.t_biomarket$projects37322 = (function (projects_view_control,_,owner,meta37323){
this.projects_view_control = projects_view_control;
this._ = _;
this.owner = owner;
this.meta37323 = meta37323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects37322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37324,meta37323__$1){
var self__ = this;
var _37324__$1 = this;
return (new biomarket.projects.t_biomarket$projects37322(self__.projects_view_control,self__._,self__.owner,meta37323__$1));
});

biomarket.projects.t_biomarket$projects37322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37324){
var self__ = this;
var _37324__$1 = this;
return self__.meta37323;
});

biomarket.projects.t_biomarket$projects37322.prototype.om$core$IInitState$ = true;

biomarket.projects.t_biomarket$projects37322.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"home","home",-74557309)], null);
});

biomarket.projects.t_biomarket$projects37322.prototype.om$core$IWillMount$ = true;

biomarket.projects.t_biomarket$projects37322.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141),((function (___$2){
return (function (o,p__37325){
var map__37326 = p__37325;
var map__37326__$1 = ((((!((map__37326 == null)))?((((map__37326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37326):map__37326);
var data = cljs.core.get.call(null,map__37326__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"current","current",-1088038603),data);
});})(___$2))
);
});

biomarket.projects.t_biomarket$projects37322.prototype.om$core$IWillUnmount$ = true;

biomarket.projects.t_biomarket$projects37322.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141));
});

biomarket.projects.t_biomarket$projects37322.prototype.om$core$IRenderState$ = true;

biomarket.projects.t_biomarket$projects37322.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__37328){
var self__ = this;
var map__37329 = p__37328;
var map__37329__$1 = ((((!((map__37329 == null)))?((((map__37329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37329):map__37329);
var current = cljs.core.get.call(null,map__37329__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var nav = cljs.core.get.call(null,map__37329__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var ___$2 = this;
var pred__37331 = cljs.core._EQ_;
var expr__37332 = current;
if(cljs.core.truth_(pred__37331.call(null,new cljs.core.Keyword(null,"home","home",-74557309),expr__37332))){
return om.core.build.call(null,biomarket.projects.home_view,null);
} else {
if(cljs.core.truth_(pred__37331.call(null,new cljs.core.Keyword(null,"new","new",-2085437848),expr__37332))){
return om.core.build.call(null,biomarket.newproject.new_project_view,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37332)].join('')));
}
}
});

biomarket.projects.t_biomarket$projects37322.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"projects-view-control","projects-view-control",-1753118227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta37323","meta37323",1781590873,null)], null);
});

biomarket.projects.t_biomarket$projects37322.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects37322.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects37322";

biomarket.projects.t_biomarket$projects37322.cljs$lang$ctorPrWriter = (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"biomarket.projects/t_biomarket$projects37322");
});

biomarket.projects.__GT_t_biomarket$projects37322 = (function biomarket$projects$projects_view_control_$___GT_t_biomarket$projects37322(projects_view_control__$1,___$1,owner__$1,meta37323){
return (new biomarket.projects.t_biomarket$projects37322(projects_view_control__$1,___$1,owner__$1,meta37323));
});

}

return (new biomarket.projects.t_biomarket$projects37322(biomarket$projects$projects_view_control,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=projects.js.map