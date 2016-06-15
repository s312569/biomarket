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
cljs.core._add_method.call(null,biomarket.utilities.bottom,new cljs.core.Keyword(null,"open-jobs","open-jobs",-1691637335),(function (p){
var links = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bid history",biomarket.bids.show_bids], null),new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Discussion",biomarket.comments.comments,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p)], null)], null);
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(p))){
return React.DOM.div(null,React.DOM.hr(null),om.core.build.call(null,biomarket.utilities.bottom_skel,cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"links","links",-654507394),links,new cljs.core.Keyword(null,"widget","widget",-853968943),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.bid_widget,p], null))));
} else {
return null;
}
}));
biomarket.jobs.jobs_view = (function biomarket$jobs$jobs_view(_,owner){
if(typeof biomarket.jobs.t_biomarket$jobs86169 !== 'undefined'){
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
biomarket.jobs.t_biomarket$jobs86169 = (function (jobs_view,_,owner,meta86170){
this.jobs_view = jobs_view;
this._ = _;
this.owner = owner;
this.meta86170 = meta86170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.jobs.t_biomarket$jobs86169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86171,meta86170__$1){
var self__ = this;
var _86171__$1 = this;
return (new biomarket.jobs.t_biomarket$jobs86169(self__.jobs_view,self__._,self__.owner,meta86170__$1));
});

biomarket.jobs.t_biomarket$jobs86169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86171){
var self__ = this;
var _86171__$1 = this;
return self__.meta86170;
});

biomarket.jobs.t_biomarket$jobs86169.prototype.om$core$IInitState$ = true;

biomarket.jobs.t_biomarket$jobs86169.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"open-jobs","open-jobs",-1691637335),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open-jobs","open-jobs",-1691637335),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bidding","open"], null),new cljs.core.Keyword(null,"active-jobs","active-jobs",-767965296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active jobs","active"], null),new cljs.core.Keyword(null,"completed-jobs","completed-jobs",-953510595),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed jobs","completed"], null)], null),new cljs.core.Keyword(null,"ut","ut",-719415558),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718),cljs.core.async.chan.call(null)], null);
});

biomarket.jobs.t_biomarket$jobs86169.prototype.om$core$IDidMount$ = true;

biomarket.jobs.t_biomarket$jobs86169.prototype.om$core$IDidMount$did_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.projectdisplay.navigation_mount.call(null,self__.owner);
});

biomarket.jobs.t_biomarket$jobs86169.prototype.om$core$IWillUnmount$ = true;

biomarket.jobs.t_biomarket$jobs86169.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.projectdisplay.navigation_unmount.call(null,self__.owner);
});

biomarket.jobs.t_biomarket$jobs86169.prototype.om$core$IRenderState$ = true;

biomarket.jobs.t_biomarket$jobs86169.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__86172){
var self__ = this;
var map__86173 = p__86172;
var map__86173__$1 = ((((!((map__86173 == null)))?((((map__86173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86173):map__86173);
var projects = cljs.core.get.call(null,map__86173__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var inputs = cljs.core.get.call(null,map__86173__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var view = cljs.core.get.call(null,map__86173__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var ___$2 = this;
return React.DOM.div(null,biomarket.projectdisplay.project_nav.call(null,self__.owner),React.DOM.div({"style": {"padding-top": "10px"}}),((cljs.core.seq.call(null,projects))?React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},cljs.core.apply.call(null,om.dom.div,{"className": "col-md-12"},cljs.core.map.call(null,((function (___$2,map__86173,map__86173__$1,projects,inputs,view){
return (function (p1__86162_SHARP_){
return om.core.build.call(null,biomarket.projectdisplay.project_summary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__86162_SHARP_,view], null));
});})(___$2,map__86173,map__86173__$1,projects,inputs,view))
,projects)))):React.DOM.div({"style": {"padding-top": "30px", "text-align": "center"}},[cljs.core.str("You have no "),cljs.core.str(cljs.core.first.call(null,view.call(null,inputs))),cljs.core.str(" projects.")].join(''))));
});

biomarket.jobs.t_biomarket$jobs86169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"jobs-view","jobs-view",1944376059,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta86170","meta86170",1888063587,null)], null);
});

biomarket.jobs.t_biomarket$jobs86169.cljs$lang$type = true;

biomarket.jobs.t_biomarket$jobs86169.cljs$lang$ctorStr = "biomarket.jobs/t_biomarket$jobs86169";

biomarket.jobs.t_biomarket$jobs86169.cljs$lang$ctorPrWriter = (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.jobs/t_biomarket$jobs86169");
});

biomarket.jobs.__GT_t_biomarket$jobs86169 = (function biomarket$jobs$jobs_view_$___GT_t_biomarket$jobs86169(jobs_view__$1,___$1,owner__$1,meta86170){
return (new biomarket.jobs.t_biomarket$jobs86169(jobs_view__$1,___$1,owner__$1,meta86170));
});

}

return (new biomarket.jobs.t_biomarket$jobs86169(biomarket$jobs$jobs_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=jobs.js.map