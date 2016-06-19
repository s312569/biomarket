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
if(typeof biomarket.jobs.t_biomarket$jobs158084 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.jobs.t_biomarket$jobs158084 = (function (p,meta158085){
this.p = p;
this.meta158085 = meta158085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.jobs.t_biomarket$jobs158084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_158086,meta158085__$1){
var self__ = this;
var _158086__$1 = this;
return (new biomarket.jobs.t_biomarket$jobs158084(self__.p,meta158085__$1));
});

biomarket.jobs.t_biomarket$jobs158084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_158086){
var self__ = this;
var _158086__$1 = this;
return self__.meta158085;
});

biomarket.jobs.t_biomarket$jobs158084.prototype.om$core$IRender$ = true;

biomarket.jobs.t_biomarket$jobs158084.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.div(null);
});

biomarket.jobs.t_biomarket$jobs158084.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"meta158085","meta158085",167407919,null)], null);
});

biomarket.jobs.t_biomarket$jobs158084.cljs$lang$type = true;

biomarket.jobs.t_biomarket$jobs158084.cljs$lang$ctorStr = "biomarket.jobs/t_biomarket$jobs158084";

biomarket.jobs.t_biomarket$jobs158084.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.jobs/t_biomarket$jobs158084");
});

biomarket.jobs.__GT_t_biomarket$jobs158084 = (function biomarket$jobs$__GT_t_biomarket$jobs158084(p__$1,meta158085){
return (new biomarket.jobs.t_biomarket$jobs158084(p__$1,meta158085));
});

}

return (new biomarket.jobs.t_biomarket$jobs158084(p,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"completed-jobs","completed-jobs",-953510595),(function (p){
return null;
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"completed-jobs","completed-jobs",-953510595),(function (p){
if(typeof biomarket.jobs.t_biomarket$jobs158087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.jobs.t_biomarket$jobs158087 = (function (p,meta158088){
this.p = p;
this.meta158088 = meta158088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.jobs.t_biomarket$jobs158087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_158089,meta158088__$1){
var self__ = this;
var _158089__$1 = this;
return (new biomarket.jobs.t_biomarket$jobs158087(self__.p,meta158088__$1));
});

biomarket.jobs.t_biomarket$jobs158087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_158089){
var self__ = this;
var _158089__$1 = this;
return self__.meta158088;
});

biomarket.jobs.t_biomarket$jobs158087.prototype.om$core$IRender$ = true;

biomarket.jobs.t_biomarket$jobs158087.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.div(null);
});

biomarket.jobs.t_biomarket$jobs158087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"meta158088","meta158088",-1860444750,null)], null);
});

biomarket.jobs.t_biomarket$jobs158087.cljs$lang$type = true;

biomarket.jobs.t_biomarket$jobs158087.cljs$lang$ctorStr = "biomarket.jobs/t_biomarket$jobs158087";

biomarket.jobs.t_biomarket$jobs158087.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.jobs/t_biomarket$jobs158087");
});

biomarket.jobs.__GT_t_biomarket$jobs158087 = (function biomarket$jobs$__GT_t_biomarket$jobs158087(p__$1,meta158088){
return (new biomarket.jobs.t_biomarket$jobs158087(p__$1,meta158088));
});

}

return (new biomarket.jobs.t_biomarket$jobs158087(p,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"open-jobs","open-jobs",-1691637335),(function (p,owner){
if(typeof biomarket.jobs.t_biomarket$jobs158090 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.jobs.t_biomarket$jobs158090 = (function (p,owner,meta158091){
this.p = p;
this.owner = owner;
this.meta158091 = meta158091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.jobs.t_biomarket$jobs158090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_158092,meta158091__$1){
var self__ = this;
var _158092__$1 = this;
return (new biomarket.jobs.t_biomarket$jobs158090(self__.p,self__.owner,meta158091__$1));
});

biomarket.jobs.t_biomarket$jobs158090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_158092){
var self__ = this;
var _158092__$1 = this;
return self__.meta158091;
});

biomarket.jobs.t_biomarket$jobs158090.prototype.om$core$IRender$ = true;

biomarket.jobs.t_biomarket$jobs158090.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
var links = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.bid_bbutton,biomarket.projectdisplay.bbutton_state.call(null,self__.owner,self__.p,new cljs.core.Keyword(null,"bids","bids",-1493194652))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.show_bids,self__.p], null)], null),new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.comments.comment_bbutton,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p,new cljs.core.Keyword(null,"comments","comments",-293346423)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.comments.comments,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p], null)], null)], null)], null);
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.p))){
return React.DOM.div(null,React.DOM.hr(null),om.core.build.call(null,biomarket.projectdisplay.bottom_skel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [links,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.bid_widget,self__.p], null),new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(self__.p)], null)));
} else {
return null;
}
});

biomarket.jobs.t_biomarket$jobs158090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta158091","meta158091",-876451651,null)], null);
});

biomarket.jobs.t_biomarket$jobs158090.cljs$lang$type = true;

biomarket.jobs.t_biomarket$jobs158090.cljs$lang$ctorStr = "biomarket.jobs/t_biomarket$jobs158090";

biomarket.jobs.t_biomarket$jobs158090.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.jobs/t_biomarket$jobs158090");
});

biomarket.jobs.__GT_t_biomarket$jobs158090 = (function biomarket$jobs$__GT_t_biomarket$jobs158090(p__$1,owner__$1,meta158091){
return (new biomarket.jobs.t_biomarket$jobs158090(p__$1,owner__$1,meta158091));
});

}

return (new biomarket.jobs.t_biomarket$jobs158090(p,owner,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"open-jobs","open-jobs",-1691637335),(function (project){
if(typeof biomarket.jobs.t_biomarket$jobs158093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.jobs.t_biomarket$jobs158093 = (function (project,meta158094){
this.project = project;
this.meta158094 = meta158094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.jobs.t_biomarket$jobs158093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_158095,meta158094__$1){
var self__ = this;
var _158095__$1 = this;
return (new biomarket.jobs.t_biomarket$jobs158093(self__.project,meta158094__$1));
});

biomarket.jobs.t_biomarket$jobs158093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_158095){
var self__ = this;
var _158095__$1 = this;
return self__.meta158094;
});

biomarket.jobs.t_biomarket$jobs158093.prototype.om$core$IRender$ = true;

biomarket.jobs.t_biomarket$jobs158093.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var ub = cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,new cljs.core.Keyword(null,"user-bids","user-bids",-736079184).cljs$core$IFn$_invoke$arity$1(self__.project)));
var best = biomarket.bids.best_bid.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project));
return React.DOM.span(null,biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join('')),biomarket.projectdisplay.label.call(null,"label label-primary",[cljs.core.str("Your bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ub))].join('')));
})());
});

biomarket.jobs.t_biomarket$jobs158093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta158094","meta158094",-960676195,null)], null);
});

biomarket.jobs.t_biomarket$jobs158093.cljs$lang$type = true;

biomarket.jobs.t_biomarket$jobs158093.cljs$lang$ctorStr = "biomarket.jobs/t_biomarket$jobs158093";

biomarket.jobs.t_biomarket$jobs158093.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.jobs/t_biomarket$jobs158093");
});

biomarket.jobs.__GT_t_biomarket$jobs158093 = (function biomarket$jobs$__GT_t_biomarket$jobs158093(project__$1,meta158094){
return (new biomarket.jobs.t_biomarket$jobs158093(project__$1,meta158094));
});

}

return (new biomarket.jobs.t_biomarket$jobs158093(project,null));
}));
biomarket.jobs.jobs_view = (function biomarket$jobs$jobs_view(_,owner){
if(typeof biomarket.jobs.t_biomarket$jobs158103 !== 'undefined'){
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
biomarket.jobs.t_biomarket$jobs158103 = (function (jobs_view,_,owner,meta158104){
this.jobs_view = jobs_view;
this._ = _;
this.owner = owner;
this.meta158104 = meta158104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.jobs.t_biomarket$jobs158103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_158105,meta158104__$1){
var self__ = this;
var _158105__$1 = this;
return (new biomarket.jobs.t_biomarket$jobs158103(self__.jobs_view,self__._,self__.owner,meta158104__$1));
});

biomarket.jobs.t_biomarket$jobs158103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_158105){
var self__ = this;
var _158105__$1 = this;
return self__.meta158104;
});

biomarket.jobs.t_biomarket$jobs158103.prototype.om$core$IInitState$ = true;

biomarket.jobs.t_biomarket$jobs158103.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"open-jobs","open-jobs",-1691637335),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open-jobs","open-jobs",-1691637335),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bidding","open"], null),new cljs.core.Keyword(null,"active-jobs","active-jobs",-767965296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active jobs","active"], null),new cljs.core.Keyword(null,"completed-jobs","completed-jobs",-953510595),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed jobs","completed"], null)], null),new cljs.core.Keyword(null,"ut","ut",-719415558),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718),cljs.core.async.chan.call(null)], null);
});

biomarket.jobs.t_biomarket$jobs158103.prototype.om$core$IDidMount$ = true;

biomarket.jobs.t_biomarket$jobs158103.prototype.om$core$IDidMount$did_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.projectdisplay.navigation_mount.call(null,self__.owner);
});

biomarket.jobs.t_biomarket$jobs158103.prototype.om$core$IWillUnmount$ = true;

biomarket.jobs.t_biomarket$jobs158103.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.projectdisplay.navigation_unmount.call(null,self__.owner);
});

biomarket.jobs.t_biomarket$jobs158103.prototype.om$core$IRenderState$ = true;

biomarket.jobs.t_biomarket$jobs158103.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__158106){
var self__ = this;
var map__158107 = p__158106;
var map__158107__$1 = ((((!((map__158107 == null)))?((((map__158107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__158107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__158107):map__158107);
var projects = cljs.core.get.call(null,map__158107__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var inputs = cljs.core.get.call(null,map__158107__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var view = cljs.core.get.call(null,map__158107__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var ___$2 = this;
return React.DOM.div(null,biomarket.projectdisplay.project_nav.call(null,self__.owner),React.DOM.div({"style": {"padding-top": "10px"}}),((cljs.core.seq.call(null,projects))?React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},cljs.core.apply.call(null,om.dom.div,{"className": "col-md-12"},cljs.core.map.call(null,((function (___$2,map__158107,map__158107__$1,projects,inputs,view){
return (function (p1__158096_SHARP_){
return om.core.build.call(null,biomarket.projectdisplay.project_summary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__158096_SHARP_,view], null));
});})(___$2,map__158107,map__158107__$1,projects,inputs,view))
,projects)))):React.DOM.div({"style": {"padding-top": "30px", "text-align": "center"}},[cljs.core.str("You have no "),cljs.core.str(cljs.core.first.call(null,view.call(null,inputs))),cljs.core.str(" projects.")].join(''))));
});

biomarket.jobs.t_biomarket$jobs158103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"jobs-view","jobs-view",1944376059,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta158104","meta158104",1756595373,null)], null);
});

biomarket.jobs.t_biomarket$jobs158103.cljs$lang$type = true;

biomarket.jobs.t_biomarket$jobs158103.cljs$lang$ctorStr = "biomarket.jobs/t_biomarket$jobs158103";

biomarket.jobs.t_biomarket$jobs158103.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.jobs/t_biomarket$jobs158103");
});

biomarket.jobs.__GT_t_biomarket$jobs158103 = (function biomarket$jobs$jobs_view_$___GT_t_biomarket$jobs158103(jobs_view__$1,___$1,owner__$1,meta158104){
return (new biomarket.jobs.t_biomarket$jobs158103(jobs_view__$1,___$1,owner__$1,meta158104));
});

}

return (new biomarket.jobs.t_biomarket$jobs158103(biomarket$jobs$jobs_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=jobs.js.map