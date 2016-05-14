// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.dashboard');
goog.require('cljs.core');
goog.require('biomarket.login');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('biomarket.utilities');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
biomarket.dashboard.dashboard = (function biomarket$dashboard$dashboard(_,owner){
if(typeof biomarket.dashboard.t_biomarket$dashboard43213 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.dashboard.t_biomarket$dashboard43213 = (function (dashboard,_,owner,meta43214){
this.dashboard = dashboard;
this._ = _;
this.owner = owner;
this.meta43214 = meta43214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.dashboard.t_biomarket$dashboard43213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43215,meta43214__$1){
var self__ = this;
var _43215__$1 = this;
return (new biomarket.dashboard.t_biomarket$dashboard43213(self__.dashboard,self__._,self__.owner,meta43214__$1));
});

biomarket.dashboard.t_biomarket$dashboard43213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43215){
var self__ = this;
var _43215__$1 = this;
return self__.meta43214;
});

biomarket.dashboard.t_biomarket$dashboard43213.prototype.om$core$IRenderState$ = true;

biomarket.dashboard.t_biomarket$dashboard43213.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,___$2){
var self__ = this;
var ___$3 = this;
return React.DOM.div({"className": "pure-u-1"},React.DOM.div({"className": "pure-u-1-3"},React.DOM.div({"className": "pdisplay"},React.DOM.p(null,"Hello there"))),React.DOM.div({"className": "pure-u-1-3"},React.DOM.div({"className": "pure-u-20-24 pdisplay"},React.DOM.p(null,"Another one"))),React.DOM.div({"className": "pure-u-1-3"},React.DOM.div({"className": "pdisplay"},React.DOM.p(null,"One more"))));
});

biomarket.dashboard.t_biomarket$dashboard43213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"dashboard","dashboard",1008784019,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43214","meta43214",937874437,null)], null);
});

biomarket.dashboard.t_biomarket$dashboard43213.cljs$lang$type = true;

biomarket.dashboard.t_biomarket$dashboard43213.cljs$lang$ctorStr = "biomarket.dashboard/t_biomarket$dashboard43213";

biomarket.dashboard.t_biomarket$dashboard43213.cljs$lang$ctorPrWriter = (function (this__23141__auto__,writer__23142__auto__,opt__23143__auto__){
return cljs.core._write.call(null,writer__23142__auto__,"biomarket.dashboard/t_biomarket$dashboard43213");
});

biomarket.dashboard.__GT_t_biomarket$dashboard43213 = (function biomarket$dashboard$dashboard_$___GT_t_biomarket$dashboard43213(dashboard__$1,___$1,owner__$1,meta43214){
return (new biomarket.dashboard.t_biomarket$dashboard43213(dashboard__$1,___$1,owner__$1,meta43214));
});

}

return (new biomarket.dashboard.t_biomarket$dashboard43213(biomarket$dashboard$dashboard,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=dashboard.js.map