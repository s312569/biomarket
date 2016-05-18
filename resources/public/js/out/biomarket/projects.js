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
if(typeof biomarket.projects.t_biomarket$projects30596 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects30596 = (function (show_bids,pid,owner,meta30597){
this.show_bids = show_bids;
this.pid = pid;
this.owner = owner;
this.meta30597 = meta30597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects30596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30598,meta30597__$1){
var self__ = this;
var _30598__$1 = this;
return (new biomarket.projects.t_biomarket$projects30596(self__.show_bids,self__.pid,self__.owner,meta30597__$1));
});

biomarket.projects.t_biomarket$projects30596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30598){
var self__ = this;
var _30598__$1 = this;
return self__.meta30597;
});

biomarket.projects.t_biomarket$projects30596.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects30596.prototype.om$core$IRender$render$arity$1 = (function (this__28642__auto__){
var self__ = this;
var this__28642__auto____$1 = this;
return React.DOM.div({"style": {"padding-top": "10px"}},"Here be bids");
});

biomarket.projects.t_biomarket$projects30596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-bids","show-bids",1253393431,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pid","pid",-1636048071,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"pid","pid",-1636048071,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta30597","meta30597",-524898692,null)], null);
});

biomarket.projects.t_biomarket$projects30596.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects30596.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects30596";

biomarket.projects.t_biomarket$projects30596.cljs$lang$ctorPrWriter = (function (this__26274__auto__,writer__26275__auto__,opt__26276__auto__){
return cljs.core._write.call(null,writer__26275__auto__,"biomarket.projects/t_biomarket$projects30596");
});

biomarket.projects.__GT_t_biomarket$projects30596 = (function biomarket$projects$show_bids_$___GT_t_biomarket$projects30596(show_bids__$1,pid__$1,owner__$1,meta30597){
return (new biomarket.projects.t_biomarket$projects30596(show_bids__$1,pid__$1,owner__$1,meta30597));
});

}

return (new biomarket.projects.t_biomarket$projects30596(biomarket$projects$show_bids,pid,owner,null));
});
biomarket.projects.project_summary = (function biomarket$projects$project_summary(project,owner){
if(typeof biomarket.projects.t_biomarket$projects30608 !== 'undefined'){
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
biomarket.projects.t_biomarket$projects30608 = (function (project_summary,project,owner,meta30609){
this.project_summary = project_summary;
this.project = project;
this.owner = owner;
this.meta30609 = meta30609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects30608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30610,meta30609__$1){
var self__ = this;
var _30610__$1 = this;
return (new biomarket.projects.t_biomarket$projects30608(self__.project_summary,self__.project,self__.owner,meta30609__$1));
});

biomarket.projects.t_biomarket$projects30608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30610){
var self__ = this;
var _30610__$1 = this;
return self__.meta30609;
});

biomarket.projects.t_biomarket$projects30608.prototype.om$core$IInitState$ = true;

biomarket.projects.t_biomarket$projects30608.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bottoms","bottoms",-116131497),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"oc-tag","oc-tag",-724883257),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Show bids",biomarket.projects.show_bids], null)], null)], null),new cljs.core.Keyword(null,"bids","bids",-1493194652),null], null);
});

biomarket.projects.t_biomarket$projects30608.prototype.om$core$IWillMount$ = true;

biomarket.projects.t_biomarket$projects30608.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),((function (___$1){
return (function (o,p__30611){
var map__30612 = p__30611;
var map__30612__$1 = ((((!((map__30612 == null)))?((((map__30612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30612):map__30612);
var data = cljs.core.get.call(null,map__30612__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.projects.change_view.call(null,o,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(data));
});})(___$1))
);

return biomarket.bids.bid_server_call.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project));
});

biomarket.projects.t_biomarket$projects30608.prototype.om$core$IWillUnmount$ = true;

biomarket.projects.t_biomarket$projects30608.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project));
});

biomarket.projects.t_biomarket$projects30608.prototype.om$core$IRenderState$ = true;

biomarket.projects.t_biomarket$projects30608.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__30614){
var self__ = this;
var map__30615 = p__30614;
var map__30615__$1 = ((((!((map__30615 == null)))?((((map__30615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30615):map__30615);
var bottoms = cljs.core.get.call(null,map__30615__$1,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497));
var bids = cljs.core.get.call(null,map__30615__$1,new cljs.core.Keyword(null,"bids","bids",-1493194652));
var ___$1 = this;
return om.core.build.call(null,biomarket.utilities.project_panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,self__.project,bids),bottoms], null));
});

biomarket.projects.t_biomarket$projects30608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"project-summary","project-summary",1896971412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta30609","meta30609",-1362497007,null)], null);
});

biomarket.projects.t_biomarket$projects30608.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects30608.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects30608";

biomarket.projects.t_biomarket$projects30608.cljs$lang$ctorPrWriter = (function (this__26274__auto__,writer__26275__auto__,opt__26276__auto__){
return cljs.core._write.call(null,writer__26275__auto__,"biomarket.projects/t_biomarket$projects30608");
});

biomarket.projects.__GT_t_biomarket$projects30608 = (function biomarket$projects$project_summary_$___GT_t_biomarket$projects30608(project_summary__$1,project__$1,owner__$1,meta30609){
return (new biomarket.projects.t_biomarket$projects30608(project_summary__$1,project__$1,owner__$1,meta30609));
});

}

return (new biomarket.projects.t_biomarket$projects30608(biomarket$projects$project_summary,project,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.projects.project_nav = (function biomarket$projects$project_nav(p__30619,owner){
var vec__30624 = p__30619;
var control = cljs.core.nth.call(null,vec__30624,(0),null);
var drop = cljs.core.nth.call(null,vec__30624,(1),null);
var view = cljs.core.nth.call(null,vec__30624,(2),null);
if(typeof biomarket.projects.t_biomarket$projects30625 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects30625 = (function (project_nav,p__30619,owner,vec__30624,control,drop,view,meta30626){
this.project_nav = project_nav;
this.p__30619 = p__30619;
this.owner = owner;
this.vec__30624 = vec__30624;
this.control = control;
this.drop = drop;
this.view = view;
this.meta30626 = meta30626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects30625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__30624,control,drop,view){
return (function (_30627,meta30626__$1){
var self__ = this;
var _30627__$1 = this;
return (new biomarket.projects.t_biomarket$projects30625(self__.project_nav,self__.p__30619,self__.owner,self__.vec__30624,self__.control,self__.drop,self__.view,meta30626__$1));
});})(vec__30624,control,drop,view))
;

biomarket.projects.t_biomarket$projects30625.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__30624,control,drop,view){
return (function (_30627){
var self__ = this;
var _30627__$1 = this;
return self__.meta30626;
});})(vec__30624,control,drop,view))
;

biomarket.projects.t_biomarket$projects30625.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects30625.prototype.om$core$IRender$render$arity$1 = ((function (vec__30624,control,drop,view){
return (function (this__28642__auto__){
var self__ = this;
var this__28642__auto____$1 = this;
return React.DOM.div(null,React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-heading"},cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (this__28642__auto____$1,vec__30624,control,drop,view){
return (function (p1__30617_SHARP_){
return React.DOM.a({"className": "btn btn-primary", "onClick": cljs.core.second.call(null,p1__30617_SHARP_)},cljs.core.first.call(null,p1__30617_SHARP_));
});})(this__28642__auto____$1,vec__30624,control,drop,view))
,self__.control))),React.DOM.div({"className": "panel-body", "style": {"text-align": "center"}},React.DOM.div({"style": {"text-align": "center", "font-weight": "bold"}},"Show:"),cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,((function (this__28642__auto____$1,vec__30624,control,drop,view){
return (function (p1__30618_SHARP_){
return React.DOM.a({"className": ((cljs.core._EQ_.call(null,self__.view,cljs.core.second.call(null,p1__30618_SHARP_)))?"btn btn-default active":"btn btn-default"), "onClick": ((function (this__28642__auto____$1,vec__30624,control,drop,view){
return (function (_){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","project-view","biomarket.projects/project-view",-1761132518),cljs.core.second.call(null,p1__30618_SHARP_));
});})(this__28642__auto____$1,vec__30624,control,drop,view))
},cljs.core.first.call(null,p1__30618_SHARP_));
});})(this__28642__auto____$1,vec__30624,control,drop,view))
,self__.drop)))));
});})(vec__30624,control,drop,view))
;

biomarket.projects.t_biomarket$projects30625.getBasis = ((function (vec__30624,control,drop,view){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"project-nav","project-nav",-364291845,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"control","control",-761857733,null),new cljs.core.Symbol(null,"drop","drop",2005013138,null),new cljs.core.Symbol(null,"view","view",-1406440955,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__30619","p__30619",-1192484890,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__30624","vec__30624",1884954703,null),new cljs.core.Symbol(null,"control","control",-761857733,null),new cljs.core.Symbol(null,"drop","drop",2005013138,null),new cljs.core.Symbol(null,"view","view",-1406440955,null),new cljs.core.Symbol(null,"meta30626","meta30626",1763249877,null)], null);
});})(vec__30624,control,drop,view))
;

biomarket.projects.t_biomarket$projects30625.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects30625.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects30625";

biomarket.projects.t_biomarket$projects30625.cljs$lang$ctorPrWriter = ((function (vec__30624,control,drop,view){
return (function (this__26274__auto__,writer__26275__auto__,opt__26276__auto__){
return cljs.core._write.call(null,writer__26275__auto__,"biomarket.projects/t_biomarket$projects30625");
});})(vec__30624,control,drop,view))
;

biomarket.projects.__GT_t_biomarket$projects30625 = ((function (vec__30624,control,drop,view){
return (function biomarket$projects$project_nav_$___GT_t_biomarket$projects30625(project_nav__$1,p__30619__$1,owner__$1,vec__30624__$1,control__$1,drop__$1,view__$1,meta30626){
return (new biomarket.projects.t_biomarket$projects30625(project_nav__$1,p__30619__$1,owner__$1,vec__30624__$1,control__$1,drop__$1,view__$1,meta30626));
});})(vec__30624,control,drop,view))
;

}

return (new biomarket.projects.t_biomarket$projects30625(biomarket$projects$project_nav,p__30619,owner,vec__30624,control,drop,view,null));
});
biomarket.projects.view__GT_project_view = (function biomarket$projects$view__GT_project_view(project,view){
var pred__30631 = cljs.core._EQ_;
var expr__30632 = view;
if(cljs.core.truth_(pred__30631.call(null,new cljs.core.Keyword(null,"expired","expired",917709975),expr__30632))){
return cljs.core.assoc.call(null,project,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),new cljs.core.Keyword(null,"expired","expired",917709975));
} else {
return cljs.core.assoc.call(null,project,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),new cljs.core.Keyword(null,"open","open",-1763596448));
}
});
biomarket.projects.get_projects = (function biomarket$projects$get_projects(owner){
var h = (function (p__30640){
var map__30641 = p__30640;
var map__30641__$1 = ((((!((map__30641 == null)))?((((map__30641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30641):map__30641);
var status = cljs.core.get.call(null,map__30641__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__30641__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),result);
} else {
return null;
}
});
var projects_QMARK_ = (function (){var pred__30643 = cljs.core._EQ_;
var expr__30644 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814));
if(cljs.core.truth_(pred__30643.call(null,new cljs.core.Keyword(null,"expired","expired",917709975),expr__30644))){
return new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250);
} else {
if(cljs.core.truth_(pred__30643.call(null,new cljs.core.Keyword(null,"active","active",1895962068),expr__30644))){
return new cljs.core.Keyword(null,"user-projects","user-projects",1354195351);
} else {
if(cljs.core.truth_(pred__30643.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503),expr__30644))){
return new cljs.core.Keyword(null,"user-projects","user-projects",1354195351);
} else {
if(cljs.core.truth_(pred__30643.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),expr__30644))){
return new cljs.core.Keyword(null,"user-projects","user-projects",1354195351);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30644)].join('')));
}
}
}
}
})();
return biomarket.utilities.post_params.call(null,"/projects",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-type","query-type",1897493311),projects_QMARK_], null),h);
});
biomarket.projects.home_view = (function biomarket$projects$home_view(_,owner){
if(typeof biomarket.projects.t_biomarket$projects30656 !== 'undefined'){
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
biomarket.projects.t_biomarket$projects30656 = (function (home_view,_,owner,meta30657){
this.home_view = home_view;
this._ = _;
this.owner = owner;
this.meta30657 = meta30657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects30656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30658,meta30657__$1){
var self__ = this;
var _30658__$1 = this;
return (new biomarket.projects.t_biomarket$projects30656(self__.home_view,self__._,self__.owner,meta30657__$1));
});

biomarket.projects.t_biomarket$projects30656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30658){
var self__ = this;
var _30658__$1 = this;
return self__.meta30657;
});

biomarket.projects.t_biomarket$projects30656.prototype.om$core$IInitState$ = true;

biomarket.projects.t_biomarket$projects30656.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Open Projects",new cljs.core.Keyword(null,"open","open",-1763596448)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active Projects",new cljs.core.Keyword(null,"active","active",1895962068)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed Projects",new cljs.core.Keyword(null,"completed","completed",-486056503)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Expired Projects",new cljs.core.Keyword(null,"expired","expired",917709975)], null)], null),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Project",((function (___$2){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141),new cljs.core.Keyword(null,"new","new",-2085437848));
});})(___$2))
], null)], null)], null);
});

biomarket.projects.t_biomarket$projects30656.prototype.om$core$IWillMount$ = true;

biomarket.projects.t_biomarket$projects30656.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
biomarket.projects.get_projects.call(null,self__.owner);

return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","project-view","biomarket.projects/project-view",-1761132518),((function (___$2){
return (function (o,p__30659){
var map__30660 = p__30659;
var map__30660__$1 = ((((!((map__30660 == null)))?((((map__30660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30660):map__30660);
var data = cljs.core.get.call(null,map__30660__$1,new cljs.core.Keyword(null,"data","data",-232669377));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),data);

return biomarket.projects.get_projects.call(null,self__.owner);
});})(___$2))
);
});

biomarket.projects.t_biomarket$projects30656.prototype.om$core$IWillUnmount$ = true;

biomarket.projects.t_biomarket$projects30656.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","project-view","biomarket.projects/project-view",-1761132518));
});

biomarket.projects.t_biomarket$projects30656.prototype.om$core$IRenderState$ = true;

biomarket.projects.t_biomarket$projects30656.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__30662){
var self__ = this;
var map__30663 = p__30662;
var map__30663__$1 = ((((!((map__30663 == null)))?((((map__30663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30663):map__30663);
var nav = cljs.core.get.call(null,map__30663__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var projects = cljs.core.get.call(null,map__30663__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var inputs = cljs.core.get.call(null,map__30663__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var view = cljs.core.get.call(null,map__30663__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var ___$2 = this;
return React.DOM.div(null,om.core.build.call(null,biomarket.projects.project_nav,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nav,inputs,view], null)),React.DOM.div({"style": {"padding-top": "10px"}}),((cljs.core.seq.call(null,projects))?cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (___$2,map__30663,map__30663__$1,nav,projects,inputs,view){
return (function (p1__30646_SHARP_){
return om.core.build.call(null,biomarket.projects.project_summary,biomarket.projects.view__GT_project_view.call(null,p1__30646_SHARP_,view));
});})(___$2,map__30663,map__30663__$1,nav,projects,inputs,view))
,projects)):React.DOM.div({"style": {"padding-top": "30px", "text-align": "center"}},[cljs.core.str("You have no "),cljs.core.str(cljs.core.name.call(null,view)),cljs.core.str(" projects.")].join(''))));
});

biomarket.projects.t_biomarket$projects30656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"home-view","home-view",-289851298,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta30657","meta30657",-287606410,null)], null);
});

biomarket.projects.t_biomarket$projects30656.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects30656.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects30656";

biomarket.projects.t_biomarket$projects30656.cljs$lang$ctorPrWriter = (function (this__26274__auto__,writer__26275__auto__,opt__26276__auto__){
return cljs.core._write.call(null,writer__26275__auto__,"biomarket.projects/t_biomarket$projects30656");
});

biomarket.projects.__GT_t_biomarket$projects30656 = (function biomarket$projects$home_view_$___GT_t_biomarket$projects30656(home_view__$1,___$1,owner__$1,meta30657){
return (new biomarket.projects.t_biomarket$projects30656(home_view__$1,___$1,owner__$1,meta30657));
});

}

return (new biomarket.projects.t_biomarket$projects30656(biomarket$projects$home_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.projects.projects_view_control = (function biomarket$projects$projects_view_control(_,owner){
if(typeof biomarket.projects.t_biomarket$projects30677 !== 'undefined'){
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
biomarket.projects.t_biomarket$projects30677 = (function (projects_view_control,_,owner,meta30678){
this.projects_view_control = projects_view_control;
this._ = _;
this.owner = owner;
this.meta30678 = meta30678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects30677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30679,meta30678__$1){
var self__ = this;
var _30679__$1 = this;
return (new biomarket.projects.t_biomarket$projects30677(self__.projects_view_control,self__._,self__.owner,meta30678__$1));
});

biomarket.projects.t_biomarket$projects30677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30679){
var self__ = this;
var _30679__$1 = this;
return self__.meta30678;
});

biomarket.projects.t_biomarket$projects30677.prototype.om$core$IInitState$ = true;

biomarket.projects.t_biomarket$projects30677.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"home","home",-74557309)], null);
});

biomarket.projects.t_biomarket$projects30677.prototype.om$core$IWillMount$ = true;

biomarket.projects.t_biomarket$projects30677.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141),((function (___$2){
return (function (o,p__30680){
var map__30681 = p__30680;
var map__30681__$1 = ((((!((map__30681 == null)))?((((map__30681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30681):map__30681);
var data = cljs.core.get.call(null,map__30681__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"current","current",-1088038603),data);
});})(___$2))
);
});

biomarket.projects.t_biomarket$projects30677.prototype.om$core$IWillUnmount$ = true;

biomarket.projects.t_biomarket$projects30677.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141));
});

biomarket.projects.t_biomarket$projects30677.prototype.om$core$IRenderState$ = true;

biomarket.projects.t_biomarket$projects30677.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__30683){
var self__ = this;
var map__30684 = p__30683;
var map__30684__$1 = ((((!((map__30684 == null)))?((((map__30684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30684):map__30684);
var current = cljs.core.get.call(null,map__30684__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var nav = cljs.core.get.call(null,map__30684__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var ___$2 = this;
var pred__30686 = cljs.core._EQ_;
var expr__30687 = current;
if(cljs.core.truth_(pred__30686.call(null,new cljs.core.Keyword(null,"home","home",-74557309),expr__30687))){
return om.core.build.call(null,biomarket.projects.home_view,null);
} else {
if(cljs.core.truth_(pred__30686.call(null,new cljs.core.Keyword(null,"new","new",-2085437848),expr__30687))){
return om.core.build.call(null,biomarket.newproject.new_project_view,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30687)].join('')));
}
}
});

biomarket.projects.t_biomarket$projects30677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"projects-view-control","projects-view-control",-1753118227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta30678","meta30678",619678124,null)], null);
});

biomarket.projects.t_biomarket$projects30677.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects30677.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects30677";

biomarket.projects.t_biomarket$projects30677.cljs$lang$ctorPrWriter = (function (this__26274__auto__,writer__26275__auto__,opt__26276__auto__){
return cljs.core._write.call(null,writer__26275__auto__,"biomarket.projects/t_biomarket$projects30677");
});

biomarket.projects.__GT_t_biomarket$projects30677 = (function biomarket$projects$projects_view_control_$___GT_t_biomarket$projects30677(projects_view_control__$1,___$1,owner__$1,meta30678){
return (new biomarket.projects.t_biomarket$projects30677(projects_view_control__$1,___$1,owner__$1,meta30678));
});

}

return (new biomarket.projects.t_biomarket$projects30677(biomarket$projects$projects_view_control,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=projects.js.map