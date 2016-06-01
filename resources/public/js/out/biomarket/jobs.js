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
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
goog.require('clojure.string');
goog.require('biomarket.newproject');
biomarket.jobs.jobs_view = (function biomarket$jobs$jobs_view(_,owner){
if(typeof biomarket.jobs.t_biomarket$jobs318761 !== 'undefined'){
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
biomarket.jobs.t_biomarket$jobs318761 = (function (jobs_view,_,owner,meta318762){
this.jobs_view = jobs_view;
this._ = _;
this.owner = owner;
this.meta318762 = meta318762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.jobs.t_biomarket$jobs318761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_318763,meta318762__$1){
var self__ = this;
var _318763__$1 = this;
return (new biomarket.jobs.t_biomarket$jobs318761(self__.jobs_view,self__._,self__.owner,meta318762__$1));
});

biomarket.jobs.t_biomarket$jobs318761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_318763){
var self__ = this;
var _318763__$1 = this;
return self__.meta318762;
});

biomarket.jobs.t_biomarket$jobs318761.prototype.om$core$IInitState$ = true;

biomarket.jobs.t_biomarket$jobs318761.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"open-jobs","open-jobs",-1691637335),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open-jobs","open-jobs",-1691637335),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bidding","open"], null),new cljs.core.Keyword(null,"active-jobs","active-jobs",-767965296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active jobs","active"], null),new cljs.core.Keyword(null,"completed-jobs","completed-jobs",-953510595),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed jobs","completed"], null)], null),new cljs.core.Keyword(null,"ut","ut",-719415558),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718),cljs.core.async.chan.call(null)], null);
});

biomarket.jobs.t_biomarket$jobs318761.prototype.om$core$IDidMount$ = true;

biomarket.jobs.t_biomarket$jobs318761.prototype.om$core$IDidMount$did_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.projectdisplay.navigation_mount.call(null,self__.owner);
});

biomarket.jobs.t_biomarket$jobs318761.prototype.om$core$IWillUnmount$ = true;

biomarket.jobs.t_biomarket$jobs318761.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.projectdisplay.navigation_unmount.call(null,self__.owner);
});

biomarket.jobs.t_biomarket$jobs318761.prototype.om$core$IRenderState$ = true;

biomarket.jobs.t_biomarket$jobs318761.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__318764){
var self__ = this;
var map__318765 = p__318764;
var map__318765__$1 = ((((!((map__318765 == null)))?((((map__318765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__318765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__318765):map__318765);
var projects = cljs.core.get.call(null,map__318765__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var inputs = cljs.core.get.call(null,map__318765__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var view = cljs.core.get.call(null,map__318765__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var ___$2 = this;
var ps = biomarket.utilities.split_projects.call(null,projects);
return React.DOM.div(null,biomarket.projectdisplay.project_nav.call(null,self__.owner),React.DOM.div({"style": {"padding-top": "10px"}}),((cljs.core.seq.call(null,projects))?React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},cljs.core.apply.call(null,om.dom.div,{"className": "col-md-6"},cljs.core.map.call(null,((function (ps,___$2,map__318765,map__318765__$1,projects,inputs,view){
return (function (p1__318753_SHARP_){
return om.core.build.call(null,biomarket.projectdisplay.project_summary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__318753_SHARP_,view], null));
});})(ps,___$2,map__318765,map__318765__$1,projects,inputs,view))
,cljs.core.first.call(null,ps))),cljs.core.apply.call(null,om.dom.div,{"className": "col-md-6"},cljs.core.map.call(null,((function (ps,___$2,map__318765,map__318765__$1,projects,inputs,view){
return (function (p1__318754_SHARP_){
return om.core.build.call(null,biomarket.projectdisplay.project_summary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__318754_SHARP_,view], null));
});})(ps,___$2,map__318765,map__318765__$1,projects,inputs,view))
,cljs.core.second.call(null,ps))))):React.DOM.div({"style": {"padding-top": "30px", "text-align": "center"}},[cljs.core.str("You have no "),cljs.core.str(cljs.core.first.call(null,view.call(null,inputs))),cljs.core.str(" projects.")].join(''))));
});

biomarket.jobs.t_biomarket$jobs318761.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"jobs-view","jobs-view",1944376059,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta318762","meta318762",-975782016,null)], null);
});

biomarket.jobs.t_biomarket$jobs318761.cljs$lang$type = true;

biomarket.jobs.t_biomarket$jobs318761.cljs$lang$ctorStr = "biomarket.jobs/t_biomarket$jobs318761";

biomarket.jobs.t_biomarket$jobs318761.cljs$lang$ctorPrWriter = (function (this__26325__auto__,writer__26326__auto__,opt__26327__auto__){
return cljs.core._write.call(null,writer__26326__auto__,"biomarket.jobs/t_biomarket$jobs318761");
});

biomarket.jobs.__GT_t_biomarket$jobs318761 = (function biomarket$jobs$jobs_view_$___GT_t_biomarket$jobs318761(jobs_view__$1,___$1,owner__$1,meta318762){
return (new biomarket.jobs.t_biomarket$jobs318761(jobs_view__$1,___$1,owner__$1,meta318762));
});

}

return (new biomarket.jobs.t_biomarket$jobs318761(biomarket$jobs$jobs_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=jobs.js.map