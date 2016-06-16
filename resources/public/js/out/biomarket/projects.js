// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.projects');
goog.require('cljs.core');
goog.require('biomarket.login');
goog.require('biomarket.utilities');
goog.require('biomarket.projectdisplay');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('biomarket.bids');
goog.require('goog.history.EventType');
goog.require('biomarket.server');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
goog.require('clojure.string');
goog.require('biomarket.newproject');
biomarket.projects.expired_or_deleted = (function biomarket$projects$expired_or_deleted(project){
if(typeof biomarket.projects.t_biomarket$projects48313 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects48313 = (function (expired_or_deleted,project,meta48314){
this.expired_or_deleted = expired_or_deleted;
this.project = project;
this.meta48314 = meta48314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects48313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48315,meta48314__$1){
var self__ = this;
var _48315__$1 = this;
return (new biomarket.projects.t_biomarket$projects48313(self__.expired_or_deleted,self__.project,meta48314__$1));
});

biomarket.projects.t_biomarket$projects48313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48315){
var self__ = this;
var _48315__$1 = this;
return self__.meta48314;
});

biomarket.projects.t_biomarket$projects48313.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects48313.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var best = biomarket.bids.best_bid.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project));
if(cljs.core.truth_(best)){
return biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join(''));
} else {
return biomarket.projectdisplay.label.call(null,"label label-danger","No bids");
}
})());
});

biomarket.projects.t_biomarket$projects48313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"expired-or-deleted","expired-or-deleted",-713309317,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta48314","meta48314",-1943444723,null)], null);
});

biomarket.projects.t_biomarket$projects48313.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects48313.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects48313";

biomarket.projects.t_biomarket$projects48313.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.projects/t_biomarket$projects48313");
});

biomarket.projects.__GT_t_biomarket$projects48313 = (function biomarket$projects$expired_or_deleted_$___GT_t_biomarket$projects48313(expired_or_deleted__$1,project__$1,meta48314){
return (new biomarket.projects.t_biomarket$projects48313(expired_or_deleted__$1,project__$1,meta48314));
});

}

return (new biomarket.projects.t_biomarket$projects48313(biomarket$projects$expired_or_deleted,project,null));
});
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),(function (project){
return biomarket.projects.expired_or_deleted.call(null,project);
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533),(function (project){
return biomarket.projects.expired_or_deleted.call(null,project);
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),(function (project){
if(typeof biomarket.projects.t_biomarket$projects48316 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects48316 = (function (project,meta48317){
this.project = project;
this.meta48317 = meta48317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects48316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48318,meta48317__$1){
var self__ = this;
var _48318__$1 = this;
return (new biomarket.projects.t_biomarket$projects48316(self__.project,meta48317__$1));
});

biomarket.projects.t_biomarket$projects48316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48318){
var self__ = this;
var _48318__$1 = this;
return self__.meta48317;
});

biomarket.projects.t_biomarket$projects48316.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects48316.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var best = biomarket.bids.best_bid.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project));
if(cljs.core.truth_(best)){
return biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join(''));
} else {
return biomarket.projectdisplay.label.call(null,"label label-danger","No bids yet!");
}
})());
});

biomarket.projects.t_biomarket$projects48316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta48317","meta48317",-1679609898,null)], null);
});

biomarket.projects.t_biomarket$projects48316.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects48316.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects48316";

biomarket.projects.t_biomarket$projects48316.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.projects/t_biomarket$projects48316");
});

biomarket.projects.__GT_t_biomarket$projects48316 = (function biomarket$projects$__GT_t_biomarket$projects48316(project__$1,meta48317){
return (new biomarket.projects.t_biomarket$projects48316(project__$1,meta48317));
});

}

return (new biomarket.projects.t_biomarket$projects48316(project,null));
}));
biomarket.projects.default_bottom = (function biomarket$projects$default_bottom(p){
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(p))){
return React.DOM.div(null,React.DOM.hr(null),om.core.build.call(null,biomarket.utilities.bottom_skel,cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bids",biomarket.bids.bid_manage], null)], null))));
} else {
return null;
}
});
cljs.core._add_method.call(null,biomarket.utilities.bottom,new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),(function (p){
return biomarket.projects.default_bottom.call(null,p);
}));
cljs.core._add_method.call(null,biomarket.utilities.bottom,new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),(function (p){
return biomarket.projects.default_bottom.call(null,p);
}));
cljs.core._add_method.call(null,biomarket.utilities.bottom,new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533),(function (p){
return biomarket.projects.default_bottom.call(null,p);
}));
biomarket.projects.home_view = (function biomarket$projects$home_view(_,owner){
if(typeof biomarket.projects.t_biomarket$projects48326 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects48326 = (function (home_view,_,owner,meta48327){
this.home_view = home_view;
this._ = _;
this.owner = owner;
this.meta48327 = meta48327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects48326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48328,meta48327__$1){
var self__ = this;
var _48328__$1 = this;
return (new biomarket.projects.t_biomarket$projects48326(self__.home_view,self__._,self__.owner,meta48327__$1));
});

biomarket.projects.t_biomarket$projects48326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48328){
var self__ = this;
var _48328__$1 = this;
return self__.meta48327;
});

biomarket.projects.t_biomarket$projects48326.prototype.om$core$IInitState$ = true;

biomarket.projects.t_biomarket$projects48326.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Open projects","open"], null),new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active projects","active"], null),new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed projects","completed"], null),new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deleted projects","deleted"], null),new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Expired projects","expired"], null)], null),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Project",((function (___$2){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141),new cljs.core.Keyword(null,"new","new",-2085437848));
});})(___$2))
], null)], null),new cljs.core.Keyword(null,"ut","ut",-719415558),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"update-tag","update-tag",1483190681),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718),cljs.core.async.chan.call(null)], null);
});

biomarket.projects.t_biomarket$projects48326.prototype.om$core$IDidMount$ = true;

biomarket.projects.t_biomarket$projects48326.prototype.om$core$IDidMount$did_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.projectdisplay.navigation_mount.call(null,self__.owner);
});

biomarket.projects.t_biomarket$projects48326.prototype.om$core$IWillUnmount$ = true;

biomarket.projects.t_biomarket$projects48326.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.projectdisplay.navigation_unmount.call(null,self__.owner);
});

biomarket.projects.t_biomarket$projects48326.prototype.om$core$IRenderState$ = true;

biomarket.projects.t_biomarket$projects48326.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__48329){
var self__ = this;
var map__48330 = p__48329;
var map__48330__$1 = ((((!((map__48330 == null)))?((((map__48330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48330):map__48330);
var projects = cljs.core.get.call(null,map__48330__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var view = cljs.core.get.call(null,map__48330__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var ___$2 = this;
return React.DOM.div(null,biomarket.projectdisplay.project_nav.call(null,self__.owner),React.DOM.div({"style": {"padding-top": "10px"}}),((cljs.core.seq.call(null,projects))?React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},cljs.core.apply.call(null,om.dom.div,{"className": "col-md-12"},cljs.core.map.call(null,((function (___$2,map__48330,map__48330__$1,projects,view){
return (function (p1__48319_SHARP_){
return om.core.build.call(null,biomarket.projectdisplay.project_summary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48319_SHARP_,view], null));
});})(___$2,map__48330,map__48330__$1,projects,view))
,projects)))):React.DOM.div({"style": {"padding-top": "30px", "text-align": "center"}},[cljs.core.str("You have no "),cljs.core.str(cljs.core.first.call(null,view.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858))))),cljs.core.str(" projects.")].join(''))));
});

biomarket.projects.t_biomarket$projects48326.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"home-view","home-view",-289851298,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta48327","meta48327",-320341068,null)], null);
});

biomarket.projects.t_biomarket$projects48326.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects48326.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects48326";

biomarket.projects.t_biomarket$projects48326.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.projects/t_biomarket$projects48326");
});

biomarket.projects.__GT_t_biomarket$projects48326 = (function biomarket$projects$home_view_$___GT_t_biomarket$projects48326(home_view__$1,___$1,owner__$1,meta48327){
return (new biomarket.projects.t_biomarket$projects48326(home_view__$1,___$1,owner__$1,meta48327));
});

}

return (new biomarket.projects.t_biomarket$projects48326(biomarket$projects$home_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.projects.projects_view_control = (function biomarket$projects$projects_view_control(_,owner){
if(typeof biomarket.projects.t_biomarket$projects48344 !== 'undefined'){
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
biomarket.projects.t_biomarket$projects48344 = (function (projects_view_control,_,owner,meta48345){
this.projects_view_control = projects_view_control;
this._ = _;
this.owner = owner;
this.meta48345 = meta48345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects48344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48346,meta48345__$1){
var self__ = this;
var _48346__$1 = this;
return (new biomarket.projects.t_biomarket$projects48344(self__.projects_view_control,self__._,self__.owner,meta48345__$1));
});

biomarket.projects.t_biomarket$projects48344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48346){
var self__ = this;
var _48346__$1 = this;
return self__.meta48345;
});

biomarket.projects.t_biomarket$projects48344.prototype.om$core$IInitState$ = true;

biomarket.projects.t_biomarket$projects48344.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"home","home",-74557309)], null);
});

biomarket.projects.t_biomarket$projects48344.prototype.om$core$IWillMount$ = true;

biomarket.projects.t_biomarket$projects48344.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141),((function (___$2){
return (function (o,p__48347){
var map__48348 = p__48347;
var map__48348__$1 = ((((!((map__48348 == null)))?((((map__48348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48348):map__48348);
var data = cljs.core.get.call(null,map__48348__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"current","current",-1088038603),data);
});})(___$2))
);
});

biomarket.projects.t_biomarket$projects48344.prototype.om$core$IWillUnmount$ = true;

biomarket.projects.t_biomarket$projects48344.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141));
});

biomarket.projects.t_biomarket$projects48344.prototype.om$core$IRenderState$ = true;

biomarket.projects.t_biomarket$projects48344.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__48350){
var self__ = this;
var map__48351 = p__48350;
var map__48351__$1 = ((((!((map__48351 == null)))?((((map__48351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48351):map__48351);
var current = cljs.core.get.call(null,map__48351__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var nav = cljs.core.get.call(null,map__48351__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var ___$2 = this;
var pred__48353 = cljs.core._EQ_;
var expr__48354 = current;
if(cljs.core.truth_(pred__48353.call(null,new cljs.core.Keyword(null,"home","home",-74557309),expr__48354))){
return om.core.build.call(null,biomarket.projects.home_view,null);
} else {
if(cljs.core.truth_(pred__48353.call(null,new cljs.core.Keyword(null,"new","new",-2085437848),expr__48354))){
return om.core.build.call(null,biomarket.newproject.new_project_view,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__48354)].join('')));
}
}
});

biomarket.projects.t_biomarket$projects48344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"projects-view-control","projects-view-control",-1753118227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta48345","meta48345",1487105914,null)], null);
});

biomarket.projects.t_biomarket$projects48344.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects48344.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects48344";

biomarket.projects.t_biomarket$projects48344.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.projects/t_biomarket$projects48344");
});

biomarket.projects.__GT_t_biomarket$projects48344 = (function biomarket$projects$projects_view_control_$___GT_t_biomarket$projects48344(projects_view_control__$1,___$1,owner__$1,meta48345){
return (new biomarket.projects.t_biomarket$projects48344(projects_view_control__$1,___$1,owner__$1,meta48345));
});

}

return (new biomarket.projects.t_biomarket$projects48344(biomarket$projects$projects_view_control,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=projects.js.map