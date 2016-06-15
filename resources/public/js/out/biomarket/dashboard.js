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
if(typeof biomarket.dashboard.t_biomarket$dashboard83702 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.dashboard.t_biomarket$dashboard83702 = (function (dashboard,_,owner,meta83703){
this.dashboard = dashboard;
this._ = _;
this.owner = owner;
this.meta83703 = meta83703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.dashboard.t_biomarket$dashboard83702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_83704,meta83703__$1){
var self__ = this;
var _83704__$1 = this;
return (new biomarket.dashboard.t_biomarket$dashboard83702(self__.dashboard,self__._,self__.owner,meta83703__$1));
});

biomarket.dashboard.t_biomarket$dashboard83702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_83704){
var self__ = this;
var _83704__$1 = this;
return self__.meta83703;
});

biomarket.dashboard.t_biomarket$dashboard83702.prototype.om$core$IRenderState$ = true;

biomarket.dashboard.t_biomarket$dashboard83702.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,___$2){
var self__ = this;
var ___$3 = this;
return React.DOM.div({"className": "pure-u-1"},React.DOM.div({"className": "pure-u-1-3"},React.DOM.div({"className": "pdisplay"},React.DOM.p(null,"Hello there"))),React.DOM.div({"className": "pure-u-1-3"},React.DOM.div({"className": "pure-u-20-24 pdisplay"},React.DOM.p(null,"Another one"))),React.DOM.div({"className": "pure-u-1-3"},React.DOM.div({"className": "pdisplay"},React.DOM.p(null,"One more"))));
});

biomarket.dashboard.t_biomarket$dashboard83702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"dashboard","dashboard",1008784019,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta83703","meta83703",-2082414152,null)], null);
});

biomarket.dashboard.t_biomarket$dashboard83702.cljs$lang$type = true;

biomarket.dashboard.t_biomarket$dashboard83702.cljs$lang$ctorStr = "biomarket.dashboard/t_biomarket$dashboard83702";

biomarket.dashboard.t_biomarket$dashboard83702.cljs$lang$ctorPrWriter = (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.dashboard/t_biomarket$dashboard83702");
});

biomarket.dashboard.__GT_t_biomarket$dashboard83702 = (function biomarket$dashboard$dashboard_$___GT_t_biomarket$dashboard83702(dashboard__$1,___$1,owner__$1,meta83703){
return (new biomarket.dashboard.t_biomarket$dashboard83702(dashboard__$1,___$1,owner__$1,meta83703));
});

}

return (new biomarket.dashboard.t_biomarket$dashboard83702(biomarket$dashboard$dashboard,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=dashboard.js.map