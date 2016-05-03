// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.core');
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
biomarket.core.history = (new goog.History());
goog.events.listen(biomarket.core.history,goog.history.EventType.NAVIGATE,(function (e){
return secretary.core.dispatch_BANG_.call(null,e.token);
}));
biomarket.core.history.setEnabled(true);
biomarket.core.top_navigation = (function biomarket$core$top_navigation(p__24777,owner){
var vec__24782 = p__24777;
var current = cljs.core.nth.call(null,vec__24782,(0),null);
var inputs = cljs.core.nth.call(null,vec__24782,(1),null);
if(typeof biomarket.core.t_biomarket$core24783 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.core.t_biomarket$core24783 = (function (top_navigation,p__24777,owner,vec__24782,current,inputs,meta24784){
this.top_navigation = top_navigation;
this.p__24777 = p__24777;
this.owner = owner;
this.vec__24782 = vec__24782;
this.current = current;
this.inputs = inputs;
this.meta24784 = meta24784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.core.t_biomarket$core24783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__24782,current,inputs){
return (function (_24785,meta24784__$1){
var self__ = this;
var _24785__$1 = this;
return (new biomarket.core.t_biomarket$core24783(self__.top_navigation,self__.p__24777,self__.owner,self__.vec__24782,self__.current,self__.inputs,meta24784__$1));
});})(vec__24782,current,inputs))
;

biomarket.core.t_biomarket$core24783.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__24782,current,inputs){
return (function (_24785){
var self__ = this;
var _24785__$1 = this;
return self__.meta24784;
});})(vec__24782,current,inputs))
;

biomarket.core.t_biomarket$core24783.prototype.om$core$IRender$ = true;

biomarket.core.t_biomarket$core24783.prototype.om$core$IRender$render$arity$1 = ((function (vec__24782,current,inputs){
return (function (this__24648__auto__){
var self__ = this;
var this__24648__auto____$1 = this;
return React.DOM.div({"className": "pure-menu pure-menu-horizontal"},cljs.core.apply.call(null,om.dom.ul,{"className": "pure-menu-list"},cljs.core.map.call(null,((function (this__24648__auto____$1,vec__24782,current,inputs){
return (function (p1__24776_SHARP_){
return om.core.build.call(null,biomarket.utilities.menu_item,cljs.core.conj.call(null,p1__24776_SHARP_,self__.current));
});})(this__24648__auto____$1,vec__24782,current,inputs))
,self__.inputs)));
});})(vec__24782,current,inputs))
;

biomarket.core.t_biomarket$core24783.getBasis = ((function (vec__24782,current,inputs){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"top-navigation","top-navigation",-1053916026,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__24777","p__24777",-556770873,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__24782","vec__24782",1701749087,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"meta24784","meta24784",828576140,null)], null);
});})(vec__24782,current,inputs))
;

biomarket.core.t_biomarket$core24783.cljs$lang$type = true;

biomarket.core.t_biomarket$core24783.cljs$lang$ctorStr = "biomarket.core/t_biomarket$core24783";

biomarket.core.t_biomarket$core24783.cljs$lang$ctorPrWriter = ((function (vec__24782,current,inputs){
return (function (this__22386__auto__,writer__22387__auto__,opt__22388__auto__){
return cljs.core._write.call(null,writer__22387__auto__,"biomarket.core/t_biomarket$core24783");
});})(vec__24782,current,inputs))
;

biomarket.core.__GT_t_biomarket$core24783 = ((function (vec__24782,current,inputs){
return (function biomarket$core$top_navigation_$___GT_t_biomarket$core24783(top_navigation__$1,p__24777__$1,owner__$1,vec__24782__$1,current__$1,inputs__$1,meta24784){
return (new biomarket.core.t_biomarket$core24783(top_navigation__$1,p__24777__$1,owner__$1,vec__24782__$1,current__$1,inputs__$1,meta24784));
});})(vec__24782,current,inputs))
;

}

return (new biomarket.core.t_biomarket$core24783(biomarket$core$top_navigation,p__24777,owner,vec__24782,current,inputs,null));
});
biomarket.core.dashboard = (function biomarket$core$dashboard(_,owner){
if(typeof biomarket.core.t_biomarket$core24789 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.core.t_biomarket$core24789 = (function (dashboard,_,owner,meta24790){
this.dashboard = dashboard;
this._ = _;
this.owner = owner;
this.meta24790 = meta24790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.core.t_biomarket$core24789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24791,meta24790__$1){
var self__ = this;
var _24791__$1 = this;
return (new biomarket.core.t_biomarket$core24789(self__.dashboard,self__._,self__.owner,meta24790__$1));
});

biomarket.core.t_biomarket$core24789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24791){
var self__ = this;
var _24791__$1 = this;
return self__.meta24790;
});

biomarket.core.t_biomarket$core24789.prototype.om$core$IRenderState$ = true;

biomarket.core.t_biomarket$core24789.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,___$2){
var self__ = this;
var ___$3 = this;
return React.DOM.div({"className": "pure-u-1"},React.DOM.div({"className": "pure-u-1-3"},React.DOM.div({"className": "pdisplay"},React.DOM.p(null,"Hello there"))),React.DOM.div({"className": "pure-u-1-3"},React.DOM.div({"className": "pure-u-20-24 pdisplay"},React.DOM.p(null,"Another one"))),React.DOM.div({"className": "pure-u-1-3"},React.DOM.div({"className": "pdisplay"},React.DOM.p(null,"One more"))));
});

biomarket.core.t_biomarket$core24789.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"dashboard","dashboard",1008784019,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta24790","meta24790",-1113186050,null)], null);
});

biomarket.core.t_biomarket$core24789.cljs$lang$type = true;

biomarket.core.t_biomarket$core24789.cljs$lang$ctorStr = "biomarket.core/t_biomarket$core24789";

biomarket.core.t_biomarket$core24789.cljs$lang$ctorPrWriter = (function (this__22386__auto__,writer__22387__auto__,opt__22388__auto__){
return cljs.core._write.call(null,writer__22387__auto__,"biomarket.core/t_biomarket$core24789");
});

biomarket.core.__GT_t_biomarket$core24789 = (function biomarket$core$dashboard_$___GT_t_biomarket$core24789(dashboard__$1,___$1,owner__$1,meta24790){
return (new biomarket.core.t_biomarket$core24789(dashboard__$1,___$1,owner__$1,meta24790));
});

}

return (new biomarket.core.t_biomarket$core24789(biomarket$core$dashboard,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.core.app_control = (function biomarket$core$app_control(_,owner){
if(typeof biomarket.core.t_biomarket$core24804 !== 'undefined'){
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
biomarket.core.t_biomarket$core24804 = (function (app_control,_,owner,meta24805){
this.app_control = app_control;
this._ = _;
this.owner = owner;
this.meta24805 = meta24805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.core.t_biomarket$core24804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24806,meta24805__$1){
var self__ = this;
var _24806__$1 = this;
return (new biomarket.core.t_biomarket$core24804(self__.app_control,self__._,self__.owner,meta24805__$1));
});

biomarket.core.t_biomarket$core24804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24806){
var self__ = this;
var _24806__$1 = this;
return self__.meta24805;
});

biomarket.core.t_biomarket$core24804.prototype.om$core$IInitState$ = true;

biomarket.core.t_biomarket$core24804.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"dash","dash",23821356),new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dashboard",new cljs.core.Keyword(null,"dash","dash",23821356)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Profile",new cljs.core.Keyword(null,"profile","profile",-545963874)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Look for work",new cljs.core.Keyword(null,"jobs","jobs",-313607120)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Post a project",new cljs.core.Keyword(null,"post","post",269697687)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["My projects",new cljs.core.Keyword(null,"projects","projects",-364845983)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Logout",new cljs.core.Keyword(null,"logout","logout",1418564329)], null)], null)], null);
});

biomarket.core.t_biomarket$core24804.prototype.om$core$IWillMount$ = true;

biomarket.core.t_biomarket$core24804.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword(null,"navigation","navigation",369417),((function (___$2){
return (function (o,p__24807){
var map__24808 = p__24807;
var map__24808__$1 = ((((!((map__24808 == null)))?((((map__24808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24808):map__24808);
var data = cljs.core.get.call(null,map__24808__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"current","current",-1088038603),data);
});})(___$2))
);
});

biomarket.core.t_biomarket$core24804.prototype.om$core$IWillUnmount$ = true;

biomarket.core.t_biomarket$core24804.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword(null,"navigation","navigation",369417));
});

biomarket.core.t_biomarket$core24804.prototype.om$core$IRenderState$ = true;

biomarket.core.t_biomarket$core24804.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__24810){
var self__ = this;
var map__24811 = p__24810;
var map__24811__$1 = ((((!((map__24811 == null)))?((((map__24811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24811):map__24811);
var current = cljs.core.get.call(null,map__24811__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var nav_items = cljs.core.get.call(null,map__24811__$1,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708));
var ___$2 = this;
return React.DOM.div({"className": "pure-g", "style": {"padding-top": "5em"}},React.DOM.div({"className": "pure-u-1", "style": {"text-align": "center"}},React.DOM.div({"className": "pure-u-3-24"}),React.DOM.div({"className": "pure-u-18-24"},om.core.build.call(null,biomarket.core.top_navigation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,nav_items], null)),React.DOM.hr(null),(function (){var pred__24813 = cljs.core._EQ_;
var expr__24814 = current;
if(cljs.core.truth_(pred__24813.call(null,new cljs.core.Keyword(null,"dash","dash",23821356),expr__24814))){
return om.core.build.call(null,biomarket.core.dashboard,null);
} else {
if(cljs.core.truth_(pred__24813.call(null,new cljs.core.Keyword(null,"profile","profile",-545963874),expr__24814))){
return "Profile";
} else {
if(cljs.core.truth_(pred__24813.call(null,new cljs.core.Keyword(null,"jobs","jobs",-313607120),expr__24814))){
return "Jobs";
} else {
if(cljs.core.truth_(pred__24813.call(null,new cljs.core.Keyword(null,"projects","projects",-364845983),expr__24814))){
return "My projects";
} else {
if(cljs.core.truth_(pred__24813.call(null,new cljs.core.Keyword(null,"post","post",269697687),expr__24814))){
return "Post";
} else {
if(cljs.core.truth_(pred__24813.call(null,new cljs.core.Keyword(null,"logout","logout",1418564329),expr__24814))){
return document.location = "/logout";
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24814)].join('')));
}
}
}
}
}
}
})()),React.DOM.div({"className": "pure-u-3-24"})));
});

biomarket.core.t_biomarket$core24804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app-control","app-control",-1831897035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta24805","meta24805",-1056021932,null)], null);
});

biomarket.core.t_biomarket$core24804.cljs$lang$type = true;

biomarket.core.t_biomarket$core24804.cljs$lang$ctorStr = "biomarket.core/t_biomarket$core24804";

biomarket.core.t_biomarket$core24804.cljs$lang$ctorPrWriter = (function (this__22386__auto__,writer__22387__auto__,opt__22388__auto__){
return cljs.core._write.call(null,writer__22387__auto__,"biomarket.core/t_biomarket$core24804");
});

biomarket.core.__GT_t_biomarket$core24804 = (function biomarket$core$app_control_$___GT_t_biomarket$core24804(app_control__$1,___$1,owner__$1,meta24805){
return (new biomarket.core.t_biomarket$core24804(app_control__$1,___$1,owner__$1,meta24805));
});

}

return (new biomarket.core.t_biomarket$core24804(biomarket$core$app_control,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.core.init = (function biomarket$core$init(){
return om.core.root.call(null,biomarket.core.app_control,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app"),new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.deref.call(null,biomarket.utilities.app_state)], null));
});
goog.exportSymbol('biomarket.core.init', biomarket.core.init);

//# sourceMappingURL=core.js.map