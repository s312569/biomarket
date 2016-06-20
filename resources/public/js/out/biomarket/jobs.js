// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.jobs');
goog.require('cljs.core');
goog.require('biomarket.login');
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
goog.require('om.core');
goog.require('clojure.string');
goog.require('biomarket.newproject');
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"active-jobs","active-jobs",-767965296),(function (p){
return null;
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"active-jobs","active-jobs",-767965296),(function (p){
if(typeof biomarket.jobs.t_biomarket$jobs120027 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.jobs.t_biomarket$jobs120027 = (function (p,meta120028){
this.p = p;
this.meta120028 = meta120028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.jobs.t_biomarket$jobs120027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_120029,meta120028__$1){
var self__ = this;
var _120029__$1 = this;
return (new biomarket.jobs.t_biomarket$jobs120027(self__.p,meta120028__$1));
});

biomarket.jobs.t_biomarket$jobs120027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_120029){
var self__ = this;
var _120029__$1 = this;
return self__.meta120028;
});

biomarket.jobs.t_biomarket$jobs120027.prototype.om$core$IRender$ = true;

biomarket.jobs.t_biomarket$jobs120027.prototype.om$core$IRender$render$arity$1 = (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return React.DOM.div(null);
});

biomarket.jobs.t_biomarket$jobs120027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"meta120028","meta120028",-1226487934,null)], null);
});

biomarket.jobs.t_biomarket$jobs120027.cljs$lang$type = true;

biomarket.jobs.t_biomarket$jobs120027.cljs$lang$ctorStr = "biomarket.jobs/t_biomarket$jobs120027";

biomarket.jobs.t_biomarket$jobs120027.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.jobs/t_biomarket$jobs120027");
});

biomarket.jobs.__GT_t_biomarket$jobs120027 = (function biomarket$jobs$__GT_t_biomarket$jobs120027(p__$1,meta120028){
return (new biomarket.jobs.t_biomarket$jobs120027(p__$1,meta120028));
});

}

return (new biomarket.jobs.t_biomarket$jobs120027(p,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"completed-jobs","completed-jobs",-953510595),(function (p){
return null;
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"completed-jobs","completed-jobs",-953510595),(function (p){
if(typeof biomarket.jobs.t_biomarket$jobs120030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.jobs.t_biomarket$jobs120030 = (function (p,meta120031){
this.p = p;
this.meta120031 = meta120031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.jobs.t_biomarket$jobs120030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_120032,meta120031__$1){
var self__ = this;
var _120032__$1 = this;
return (new biomarket.jobs.t_biomarket$jobs120030(self__.p,meta120031__$1));
});

biomarket.jobs.t_biomarket$jobs120030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_120032){
var self__ = this;
var _120032__$1 = this;
return self__.meta120031;
});

biomarket.jobs.t_biomarket$jobs120030.prototype.om$core$IRender$ = true;

biomarket.jobs.t_biomarket$jobs120030.prototype.om$core$IRender$render$arity$1 = (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return React.DOM.div(null);
});

biomarket.jobs.t_biomarket$jobs120030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"meta120031","meta120031",-186603906,null)], null);
});

biomarket.jobs.t_biomarket$jobs120030.cljs$lang$type = true;

biomarket.jobs.t_biomarket$jobs120030.cljs$lang$ctorStr = "biomarket.jobs/t_biomarket$jobs120030";

biomarket.jobs.t_biomarket$jobs120030.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.jobs/t_biomarket$jobs120030");
});

biomarket.jobs.__GT_t_biomarket$jobs120030 = (function biomarket$jobs$__GT_t_biomarket$jobs120030(p__$1,meta120031){
return (new biomarket.jobs.t_biomarket$jobs120030(p__$1,meta120031));
});

}

return (new biomarket.jobs.t_biomarket$jobs120030(p,null));
}));
biomarket.jobs.remove_bids = (function biomarket$jobs$remove_bids(p){
return biomarket.server.save_data.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"remove-bids","remove-bids",1284821572),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p)], null)], null));
});
cljs.core._add_method.call(null,biomarket.projectdisplay.drop_down,new cljs.core.Keyword(null,"open-jobs","open-jobs",-1691637335),(function (p){
return biomarket.projectdisplay.drop_down_skel.call(null,(function (){
return biomarket.jobs.remove_bids.call(null,p);
}),"Withdraw your bids");
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"open-jobs","open-jobs",-1691637335),(function (p,owner){
if(typeof biomarket.jobs.t_biomarket$jobs120033 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.jobs.t_biomarket$jobs120033 = (function (p,owner,meta120034){
this.p = p;
this.owner = owner;
this.meta120034 = meta120034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.jobs.t_biomarket$jobs120033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_120035,meta120034__$1){
var self__ = this;
var _120035__$1 = this;
return (new biomarket.jobs.t_biomarket$jobs120033(self__.p,self__.owner,meta120034__$1));
});

biomarket.jobs.t_biomarket$jobs120033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_120035){
var self__ = this;
var _120035__$1 = this;
return self__.meta120034;
});

biomarket.jobs.t_biomarket$jobs120033.prototype.om$core$IRender$ = true;

biomarket.jobs.t_biomarket$jobs120033.prototype.om$core$IRender$render$arity$1 = (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
var links = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.bid_history_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p,new cljs.core.Keyword(null,"bids","bids",-1493194652)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.show_bids,self__.p], null)], null),new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.comments.comment_bbutton,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p,new cljs.core.Keyword(null,"comments","comments",-293346423)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.comments.comments,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p], null)], null)], null)], null);
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.p))){
return React.DOM.div(null,React.DOM.hr(null),om.core.build.call(null,biomarket.projectdisplay.bottom_skel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [links,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.bid_widget,self__.p], null),new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(self__.p)], null)));
} else {
return null;
}
});

biomarket.jobs.t_biomarket$jobs120033.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta120034","meta120034",1014463112,null)], null);
});

biomarket.jobs.t_biomarket$jobs120033.cljs$lang$type = true;

biomarket.jobs.t_biomarket$jobs120033.cljs$lang$ctorStr = "biomarket.jobs/t_biomarket$jobs120033";

biomarket.jobs.t_biomarket$jobs120033.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.jobs/t_biomarket$jobs120033");
});

biomarket.jobs.__GT_t_biomarket$jobs120033 = (function biomarket$jobs$__GT_t_biomarket$jobs120033(p__$1,owner__$1,meta120034){
return (new biomarket.jobs.t_biomarket$jobs120033(p__$1,owner__$1,meta120034));
});

}

return (new biomarket.jobs.t_biomarket$jobs120033(p,owner,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"open-jobs","open-jobs",-1691637335),(function (project){
if(typeof biomarket.jobs.t_biomarket$jobs120036 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.jobs.t_biomarket$jobs120036 = (function (project,meta120037){
this.project = project;
this.meta120037 = meta120037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.jobs.t_biomarket$jobs120036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_120038,meta120037__$1){
var self__ = this;
var _120038__$1 = this;
return (new biomarket.jobs.t_biomarket$jobs120036(self__.project,meta120037__$1));
});

biomarket.jobs.t_biomarket$jobs120036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_120038){
var self__ = this;
var _120038__$1 = this;
return self__.meta120037;
});

biomarket.jobs.t_biomarket$jobs120036.prototype.om$core$IRender$ = true;

biomarket.jobs.t_biomarket$jobs120036.prototype.om$core$IRender$render$arity$1 = (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var ub = cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,new cljs.core.Keyword(null,"user-bids","user-bids",-736079184).cljs$core$IFn$_invoke$arity$1(self__.project)));
var best = biomarket.bids.best_bid.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project));
return React.DOM.span(null,biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join('')),biomarket.projectdisplay.label.call(null,"label label-primary",[cljs.core.str("Your bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ub))].join('')));
})());
});

biomarket.jobs.t_biomarket$jobs120036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta120037","meta120037",-1076122124,null)], null);
});

biomarket.jobs.t_biomarket$jobs120036.cljs$lang$type = true;

biomarket.jobs.t_biomarket$jobs120036.cljs$lang$ctorStr = "biomarket.jobs/t_biomarket$jobs120036";

biomarket.jobs.t_biomarket$jobs120036.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.jobs/t_biomarket$jobs120036");
});

biomarket.jobs.__GT_t_biomarket$jobs120036 = (function biomarket$jobs$__GT_t_biomarket$jobs120036(project__$1,meta120037){
return (new biomarket.jobs.t_biomarket$jobs120036(project__$1,meta120037));
});

}

return (new biomarket.jobs.t_biomarket$jobs120036(project,null));
}));
biomarket.jobs.jobs_view = (function biomarket$jobs$jobs_view(_,owner){
if(typeof biomarket.jobs.t_biomarket$jobs120046 !== 'undefined'){
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
biomarket.jobs.t_biomarket$jobs120046 = (function (jobs_view,_,owner,meta120047){
this.jobs_view = jobs_view;
this._ = _;
this.owner = owner;
this.meta120047 = meta120047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.jobs.t_biomarket$jobs120046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_120048,meta120047__$1){
var self__ = this;
var _120048__$1 = this;
return (new biomarket.jobs.t_biomarket$jobs120046(self__.jobs_view,self__._,self__.owner,meta120047__$1));
});

biomarket.jobs.t_biomarket$jobs120046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_120048){
var self__ = this;
var _120048__$1 = this;
return self__.meta120047;
});

biomarket.jobs.t_biomarket$jobs120046.prototype.om$core$IInitState$ = true;

biomarket.jobs.t_biomarket$jobs120046.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"projects","projects",-364845983),false,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"open-jobs","open-jobs",-1691637335),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open-jobs","open-jobs",-1691637335),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bidding","open"], null),new cljs.core.Keyword(null,"active-jobs","active-jobs",-767965296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active jobs","active"], null),new cljs.core.Keyword(null,"completed-jobs","completed-jobs",-953510595),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed jobs","completed"], null)], null),new cljs.core.Keyword(null,"ut","ut",-719415558),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718),cljs.core.async.chan.call(null)], null);
});

biomarket.jobs.t_biomarket$jobs120046.prototype.om$core$IDidMount$ = true;

biomarket.jobs.t_biomarket$jobs120046.prototype.om$core$IDidMount$did_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.projectdisplay.navigation_mount.call(null,self__.owner);
});

biomarket.jobs.t_biomarket$jobs120046.prototype.om$core$IWillUnmount$ = true;

biomarket.jobs.t_biomarket$jobs120046.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.projectdisplay.navigation_unmount.call(null,self__.owner);
});

biomarket.jobs.t_biomarket$jobs120046.prototype.om$core$IRenderState$ = true;

biomarket.jobs.t_biomarket$jobs120046.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__120049){
var self__ = this;
var map__120050 = p__120049;
var map__120050__$1 = ((((!((map__120050 == null)))?((((map__120050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__120050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__120050):map__120050);
var projects = cljs.core.get.call(null,map__120050__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var views = cljs.core.get.call(null,map__120050__$1,new cljs.core.Keyword(null,"views","views",1450155487));
var view = cljs.core.get.call(null,map__120050__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var ___$2 = this;
if(cljs.core.truth_(projects)){
return React.DOM.div(null,biomarket.projectdisplay.project_nav.call(null,self__.owner),React.DOM.div({"style": {"padding-top": "10px"}}),((cljs.core.seq.call(null,projects))?React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},cljs.core.apply.call(null,om.dom.div,{"className": "col-md-12"},cljs.core.map.call(null,((function (___$2,map__120050,map__120050__$1,projects,views,view){
return (function (p1__120039_SHARP_){
return om.core.build.call(null,biomarket.projectdisplay.project_summary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__120039_SHARP_,view], null));
});})(___$2,map__120050,map__120050__$1,projects,views,view))
,projects)))):React.DOM.div({"style": {"padding-top": "30px", "text-align": "center"}},[cljs.core.str("You have no "),cljs.core.str(cljs.core.second.call(null,view.call(null,views))),cljs.core.str(" projects.")].join(''))));
} else {
return om.core.build.call(null,biomarket.utilities.waiting,null);
}
});

biomarket.jobs.t_biomarket$jobs120046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"jobs-view","jobs-view",1944376059,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta120047","meta120047",610285886,null)], null);
});

biomarket.jobs.t_biomarket$jobs120046.cljs$lang$type = true;

biomarket.jobs.t_biomarket$jobs120046.cljs$lang$ctorStr = "biomarket.jobs/t_biomarket$jobs120046";

biomarket.jobs.t_biomarket$jobs120046.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.jobs/t_biomarket$jobs120046");
});

biomarket.jobs.__GT_t_biomarket$jobs120046 = (function biomarket$jobs$jobs_view_$___GT_t_biomarket$jobs120046(jobs_view__$1,___$1,owner__$1,meta120047){
return (new biomarket.jobs.t_biomarket$jobs120046(jobs_view__$1,___$1,owner__$1,meta120047));
});

}

return (new biomarket.jobs.t_biomarket$jobs120046(biomarket$jobs$jobs_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=jobs.js.map