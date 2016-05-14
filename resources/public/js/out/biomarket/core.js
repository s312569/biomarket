// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.core');
goog.require('cljs.core');
goog.require('biomarket.login');
goog.require('biomarket.utilities');
goog.require('secretary.core');
goog.require('biomarket.projects');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('biomarket.find');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
goog.require('biomarket.dashboard');
biomarket.core.history = (new goog.History());
goog.events.listen(biomarket.core.history,goog.history.EventType.NAVIGATE,(function (e){
return secretary.core.dispatch_BANG_.call(null,e.token);
}));
biomarket.core.history.setEnabled(true);
biomarket.core.header = (function biomarket$core$header(current,owner){
if(typeof biomarket.core.t_biomarket$core43225 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.core.t_biomarket$core43225 = (function (header,current,owner,meta43226){
this.header = header;
this.current = current;
this.owner = owner;
this.meta43226 = meta43226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.core.t_biomarket$core43225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43227,meta43226__$1){
var self__ = this;
var _43227__$1 = this;
return (new biomarket.core.t_biomarket$core43225(self__.header,self__.current,self__.owner,meta43226__$1));
});

biomarket.core.t_biomarket$core43225.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43227){
var self__ = this;
var _43227__$1 = this;
return self__.meta43226;
});

biomarket.core.t_biomarket$core43225.prototype.om$core$IInitState$ = true;

biomarket.core.t_biomarket$core43225.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dashboard",new cljs.core.Keyword("biomarket.core","dash","biomarket.core/dash",1346561093)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Profile",new cljs.core.Keyword("biomarket.core","profile","biomarket.core/profile",1314416805)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["My jobs",new cljs.core.Keyword("biomarket.core","jobs","biomarket.core/jobs",979629095)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["My projects",new cljs.core.Keyword("biomarket.core","projects","biomarket.core/projects",-1689011104)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Find a project",new cljs.core.Keyword("biomarket.core","find","biomarket.core/find",-1434876009)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Logout",new cljs.core.Keyword("biomarket.core","logout","biomarket.core/logout",-1518163198)], null)], null)], null);
});

biomarket.core.t_biomarket$core43225.prototype.om$core$IRenderState$ = true;

biomarket.core.t_biomarket$core43225.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__43228){
var self__ = this;
var map__43229 = p__43228;
var map__43229__$1 = ((((!((map__43229 == null)))?((((map__43229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43229):map__43229);
var nav_items = cljs.core.get.call(null,map__43229__$1,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708));
var ___$1 = this;
return React.DOM.nav({"className": "navbar navbar-default navbar-fixed-top"},React.DOM.div({"className": "container"},React.DOM.div({"className": "navbar-header"},React.DOM.button({"type": "button", "className": "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#navbar", "aria-expanded": "false", "aria-controls": "navbar"},React.DOM.span({"className": "sr-only"}),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"})),React.DOM.a({"className": "navbar-brand"},"Biomarket")),React.DOM.div({"id": "navbar", "class": "navbar-collapse collapse"},cljs.core.apply.call(null,om.dom.ul,{"className": "nav navbar-nav"},cljs.core.map.call(null,((function (___$1,map__43229,map__43229__$1,nav_items){
return (function (p1__43218_SHARP_){
return React.DOM.li({"className": ((cljs.core._EQ_.call(null,self__.current,cljs.core.second.call(null,p1__43218_SHARP_)))?"active":null)},React.DOM.a({"onClick": ((function (___$1,map__43229,map__43229__$1,nav_items){
return (function (___$2){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.core","navigation","biomarket.core/navigation",1861020436),cljs.core.second.call(null,p1__43218_SHARP_));
});})(___$1,map__43229,map__43229__$1,nav_items))
, "style": {"cursor": "pointer"}},cljs.core.first.call(null,p1__43218_SHARP_)));
});})(___$1,map__43229,map__43229__$1,nav_items))
,nav_items)))));
});

biomarket.core.t_biomarket$core43225.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"header","header",1759972661,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43226","meta43226",2001376283,null)], null);
});

biomarket.core.t_biomarket$core43225.cljs$lang$type = true;

biomarket.core.t_biomarket$core43225.cljs$lang$ctorStr = "biomarket.core/t_biomarket$core43225";

biomarket.core.t_biomarket$core43225.cljs$lang$ctorPrWriter = (function (this__23141__auto__,writer__23142__auto__,opt__23143__auto__){
return cljs.core._write.call(null,writer__23142__auto__,"biomarket.core/t_biomarket$core43225");
});

biomarket.core.__GT_t_biomarket$core43225 = (function biomarket$core$header_$___GT_t_biomarket$core43225(header__$1,current__$1,owner__$1,meta43226){
return (new biomarket.core.t_biomarket$core43225(header__$1,current__$1,owner__$1,meta43226));
});

}

return (new biomarket.core.t_biomarket$core43225(biomarket$core$header,current,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.core.app_control = (function biomarket$core$app_control(_,owner){
if(typeof biomarket.core.t_biomarket$core43243 !== 'undefined'){
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
biomarket.core.t_biomarket$core43243 = (function (app_control,_,owner,meta43244){
this.app_control = app_control;
this._ = _;
this.owner = owner;
this.meta43244 = meta43244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.core.t_biomarket$core43243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43245,meta43244__$1){
var self__ = this;
var _43245__$1 = this;
return (new biomarket.core.t_biomarket$core43243(self__.app_control,self__._,self__.owner,meta43244__$1));
});

biomarket.core.t_biomarket$core43243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43245){
var self__ = this;
var _43245__$1 = this;
return self__.meta43244;
});

biomarket.core.t_biomarket$core43243.prototype.om$core$IInitState$ = true;

biomarket.core.t_biomarket$core43243.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword("biomarket.core","dash","biomarket.core/dash",1346561093)], null);
});

biomarket.core.t_biomarket$core43243.prototype.om$core$IWillMount$ = true;

biomarket.core.t_biomarket$core43243.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.core","navigation","biomarket.core/navigation",1861020436),((function (___$2){
return (function (o,p__43246){
var map__43247 = p__43246;
var map__43247__$1 = ((((!((map__43247 == null)))?((((map__43247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43247):map__43247);
var data = cljs.core.get.call(null,map__43247__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"current","current",-1088038603),data);
});})(___$2))
);
});

biomarket.core.t_biomarket$core43243.prototype.om$core$IWillUnmount$ = true;

biomarket.core.t_biomarket$core43243.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.core","navigation","biomarket.core/navigation",1861020436));
});

biomarket.core.t_biomarket$core43243.prototype.om$core$IRenderState$ = true;

biomarket.core.t_biomarket$core43243.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__43249){
var self__ = this;
var map__43250 = p__43249;
var map__43250__$1 = ((((!((map__43250 == null)))?((((map__43250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43250):map__43250);
var current = cljs.core.get.call(null,map__43250__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var nav_items = cljs.core.get.call(null,map__43250__$1,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708));
var ___$2 = this;
return React.DOM.div({"text-align": "center"},om.core.build.call(null,biomarket.core.header,current),React.DOM.div({"style": {"padding-top": "20px"}}," "),(function (){var pred__43252 = cljs.core._EQ_;
var expr__43253 = current;
if(cljs.core.truth_(pred__43252.call(null,new cljs.core.Keyword("biomarket.core","dash","biomarket.core/dash",1346561093),expr__43253))){
return om.core.build.call(null,biomarket.dashboard.dashboard,null);
} else {
if(cljs.core.truth_(pred__43252.call(null,new cljs.core.Keyword("biomarket.core","profile","biomarket.core/profile",1314416805),expr__43253))){
return "Profile";
} else {
if(cljs.core.truth_(pred__43252.call(null,new cljs.core.Keyword("biomarket.core","jobs","biomarket.core/jobs",979629095),expr__43253))){
return "Jobs";
} else {
if(cljs.core.truth_(pred__43252.call(null,new cljs.core.Keyword("biomarket.core","find","biomarket.core/find",-1434876009),expr__43253))){
return om.core.build.call(null,biomarket.find.find_view,null);
} else {
if(cljs.core.truth_(pred__43252.call(null,new cljs.core.Keyword("biomarket.core","projects","biomarket.core/projects",-1689011104),expr__43253))){
return om.core.build.call(null,biomarket.projects.projects_view_control,null);
} else {
if(cljs.core.truth_(pred__43252.call(null,new cljs.core.Keyword("biomarket.core","logout","biomarket.core/logout",-1518163198),expr__43253))){
return document.location = "/logout";
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__43253)].join('')));
}
}
}
}
}
}
})());
});

biomarket.core.t_biomarket$core43243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app-control","app-control",-1831897035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43244","meta43244",-1882199360,null)], null);
});

biomarket.core.t_biomarket$core43243.cljs$lang$type = true;

biomarket.core.t_biomarket$core43243.cljs$lang$ctorStr = "biomarket.core/t_biomarket$core43243";

biomarket.core.t_biomarket$core43243.cljs$lang$ctorPrWriter = (function (this__23141__auto__,writer__23142__auto__,opt__23143__auto__){
return cljs.core._write.call(null,writer__23142__auto__,"biomarket.core/t_biomarket$core43243");
});

biomarket.core.__GT_t_biomarket$core43243 = (function biomarket$core$app_control_$___GT_t_biomarket$core43243(app_control__$1,___$1,owner__$1,meta43244){
return (new biomarket.core.t_biomarket$core43243(app_control__$1,___$1,owner__$1,meta43244));
});

}

return (new biomarket.core.t_biomarket$core43243(biomarket$core$app_control,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.core.init = (function biomarket$core$init(){
return om.core.root.call(null,biomarket.core.app_control,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app"),new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.deref.call(null,biomarket.utilities.app_state)], null));
});
goog.exportSymbol('biomarket.core.init', biomarket.core.init);

//# sourceMappingURL=core.js.map