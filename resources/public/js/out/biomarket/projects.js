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
if(typeof biomarket.projects.t_biomarket$projects133702 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects133702 = (function (expired_or_deleted,project,meta133703){
this.expired_or_deleted = expired_or_deleted;
this.project = project;
this.meta133703 = meta133703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects133702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133704,meta133703__$1){
var self__ = this;
var _133704__$1 = this;
return (new biomarket.projects.t_biomarket$projects133702(self__.expired_or_deleted,self__.project,meta133703__$1));
});

biomarket.projects.t_biomarket$projects133702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133704){
var self__ = this;
var _133704__$1 = this;
return self__.meta133703;
});

biomarket.projects.t_biomarket$projects133702.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects133702.prototype.om$core$IRender$render$arity$1 = (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var best = biomarket.bids.best_bid.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project));
if(cljs.core.truth_(best)){
return biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join(''));
} else {
return biomarket.projectdisplay.label.call(null,"label label-danger","No bids");
}
})());
});

biomarket.projects.t_biomarket$projects133702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"expired-or-deleted","expired-or-deleted",-713309317,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta133703","meta133703",691702630,null)], null);
});

biomarket.projects.t_biomarket$projects133702.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects133702.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects133702";

biomarket.projects.t_biomarket$projects133702.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.projects/t_biomarket$projects133702");
});

biomarket.projects.__GT_t_biomarket$projects133702 = (function biomarket$projects$expired_or_deleted_$___GT_t_biomarket$projects133702(expired_or_deleted__$1,project__$1,meta133703){
return (new biomarket.projects.t_biomarket$projects133702(expired_or_deleted__$1,project__$1,meta133703));
});

}

return (new biomarket.projects.t_biomarket$projects133702(biomarket$projects$expired_or_deleted,project,null));
});
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),(function (project){
if(typeof biomarket.projects.t_biomarket$projects133705 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects133705 = (function (project,meta133706){
this.project = project;
this.meta133706 = meta133706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects133705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133707,meta133706__$1){
var self__ = this;
var _133707__$1 = this;
return (new biomarket.projects.t_biomarket$projects133705(self__.project,meta133706__$1));
});

biomarket.projects.t_biomarket$projects133705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133707){
var self__ = this;
var _133707__$1 = this;
return self__.meta133706;
});

biomarket.projects.t_biomarket$projects133705.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects133705.prototype.om$core$IRender$render$arity$1 = (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var best = biomarket.bids.best_bid.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project));
if(cljs.core.truth_(best)){
return biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join(''));
} else {
return biomarket.projectdisplay.label.call(null,"label label-danger","No bids yet!");
}
})());
});

biomarket.projects.t_biomarket$projects133705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta133706","meta133706",-1010321770,null)], null);
});

biomarket.projects.t_biomarket$projects133705.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects133705.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects133705";

biomarket.projects.t_biomarket$projects133705.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.projects/t_biomarket$projects133705");
});

biomarket.projects.__GT_t_biomarket$projects133705 = (function biomarket$projects$__GT_t_biomarket$projects133705(project__$1,meta133706){
return (new biomarket.projects.t_biomarket$projects133705(project__$1,meta133706));
});

}

return (new biomarket.projects.t_biomarket$projects133705(project,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),(function (p){
if(typeof biomarket.projects.t_biomarket$projects133708 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects133708 = (function (p,meta133709){
this.p = p;
this.meta133709 = meta133709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects133708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133710,meta133709__$1){
var self__ = this;
var _133710__$1 = this;
return (new biomarket.projects.t_biomarket$projects133708(self__.p,meta133709__$1));
});

biomarket.projects.t_biomarket$projects133708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133710){
var self__ = this;
var _133710__$1 = this;
return self__.meta133709;
});

biomarket.projects.t_biomarket$projects133708.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects133708.prototype.om$core$IRender$render$arity$1 = (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return React.DOM.div(null);
});

biomarket.projects.t_biomarket$projects133708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"meta133709","meta133709",411829366,null)], null);
});

biomarket.projects.t_biomarket$projects133708.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects133708.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects133708";

biomarket.projects.t_biomarket$projects133708.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.projects/t_biomarket$projects133708");
});

biomarket.projects.__GT_t_biomarket$projects133708 = (function biomarket$projects$__GT_t_biomarket$projects133708(p__$1,meta133709){
return (new biomarket.projects.t_biomarket$projects133708(p__$1,meta133709));
});

}

return (new biomarket.projects.t_biomarket$projects133708(p,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),(function (p){
if(typeof biomarket.projects.t_biomarket$projects133711 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects133711 = (function (p,meta133712){
this.p = p;
this.meta133712 = meta133712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects133711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133713,meta133712__$1){
var self__ = this;
var _133713__$1 = this;
return (new biomarket.projects.t_biomarket$projects133711(self__.p,meta133712__$1));
});

biomarket.projects.t_biomarket$projects133711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133713){
var self__ = this;
var _133713__$1 = this;
return self__.meta133712;
});

biomarket.projects.t_biomarket$projects133711.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects133711.prototype.om$core$IRender$render$arity$1 = (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return React.DOM.div(null);
});

biomarket.projects.t_biomarket$projects133711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"meta133712","meta133712",-1516198582,null)], null);
});

biomarket.projects.t_biomarket$projects133711.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects133711.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects133711";

biomarket.projects.t_biomarket$projects133711.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.projects/t_biomarket$projects133711");
});

biomarket.projects.__GT_t_biomarket$projects133711 = (function biomarket$projects$__GT_t_biomarket$projects133711(p__$1,meta133712){
return (new biomarket.projects.t_biomarket$projects133711(p__$1,meta133712));
});

}

return (new biomarket.projects.t_biomarket$projects133711(p,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533),(function (project){
return biomarket.projects.expired_or_deleted.call(null,project);
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),(function (project){
return biomarket.projects.expired_or_deleted.call(null,project);
}));
biomarket.projects.default_bottom = (function biomarket$projects$default_bottom(p,owner){
if(typeof biomarket.projects.t_biomarket$projects133717 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects133717 = (function (default_bottom,p,owner,meta133718){
this.default_bottom = default_bottom;
this.p = p;
this.owner = owner;
this.meta133718 = meta133718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects133717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133719,meta133718__$1){
var self__ = this;
var _133719__$1 = this;
return (new biomarket.projects.t_biomarket$projects133717(self__.default_bottom,self__.p,self__.owner,meta133718__$1));
});

biomarket.projects.t_biomarket$projects133717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133719){
var self__ = this;
var _133719__$1 = this;
return self__.meta133718;
});

biomarket.projects.t_biomarket$projects133717.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects133717.prototype.om$core$IRender$render$arity$1 = (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.p))){
return React.DOM.div(null,React.DOM.hr(null),om.core.build.call(null,biomarket.projectdisplay.bottom_skel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.bid_bbutton,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p,new cljs.core.Keyword(null,"bids","bids",-1493194652)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.bid_manage,self__.p], null)], null)], null),null,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(self__.p)], null)));
} else {
return null;
}
});

biomarket.projects.t_biomarket$projects133717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"default-bottom","default-bottom",-692683031,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta133718","meta133718",-684885822,null)], null);
});

biomarket.projects.t_biomarket$projects133717.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects133717.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects133717";

biomarket.projects.t_biomarket$projects133717.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.projects/t_biomarket$projects133717");
});

biomarket.projects.__GT_t_biomarket$projects133717 = (function biomarket$projects$default_bottom_$___GT_t_biomarket$projects133717(default_bottom__$1,p__$1,owner__$1,meta133718){
return (new biomarket.projects.t_biomarket$projects133717(default_bottom__$1,p__$1,owner__$1,meta133718));
});

}

return (new biomarket.projects.t_biomarket$projects133717(biomarket$projects$default_bottom,p,owner,null));
});
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),(function (p,owner){
if(typeof biomarket.projects.t_biomarket$projects133720 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects133720 = (function (p,owner,meta133721){
this.p = p;
this.owner = owner;
this.meta133721 = meta133721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects133720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133722,meta133721__$1){
var self__ = this;
var _133722__$1 = this;
return (new biomarket.projects.t_biomarket$projects133720(self__.p,self__.owner,meta133721__$1));
});

biomarket.projects.t_biomarket$projects133720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133722){
var self__ = this;
var _133722__$1 = this;
return self__.meta133721;
});

biomarket.projects.t_biomarket$projects133720.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects133720.prototype.om$core$IRender$render$arity$1 = (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return om.core.build.call(null,biomarket.projects.default_bottom,self__.p);
});

biomarket.projects.t_biomarket$projects133720.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta133721","meta133721",1533491547,null)], null);
});

biomarket.projects.t_biomarket$projects133720.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects133720.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects133720";

biomarket.projects.t_biomarket$projects133720.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.projects/t_biomarket$projects133720");
});

biomarket.projects.__GT_t_biomarket$projects133720 = (function biomarket$projects$__GT_t_biomarket$projects133720(p__$1,owner__$1,meta133721){
return (new biomarket.projects.t_biomarket$projects133720(p__$1,owner__$1,meta133721));
});

}

return (new biomarket.projects.t_biomarket$projects133720(p,owner,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),(function (p,owner){
return null;
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),(function (p){
return null;
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533),(function (p,owner){
if(typeof biomarket.projects.t_biomarket$projects133723 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects133723 = (function (p,owner,meta133724){
this.p = p;
this.owner = owner;
this.meta133724 = meta133724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects133723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133725,meta133724__$1){
var self__ = this;
var _133725__$1 = this;
return (new biomarket.projects.t_biomarket$projects133723(self__.p,self__.owner,meta133724__$1));
});

biomarket.projects.t_biomarket$projects133723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133725){
var self__ = this;
var _133725__$1 = this;
return self__.meta133724;
});

biomarket.projects.t_biomarket$projects133723.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects133723.prototype.om$core$IRender$render$arity$1 = (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return om.core.build.call(null,biomarket.projects.default_bottom,self__.p);
});

biomarket.projects.t_biomarket$projects133723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta133724","meta133724",-815261366,null)], null);
});

biomarket.projects.t_biomarket$projects133723.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects133723.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects133723";

biomarket.projects.t_biomarket$projects133723.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.projects/t_biomarket$projects133723");
});

biomarket.projects.__GT_t_biomarket$projects133723 = (function biomarket$projects$__GT_t_biomarket$projects133723(p__$1,owner__$1,meta133724){
return (new biomarket.projects.t_biomarket$projects133723(p__$1,owner__$1,meta133724));
});

}

return (new biomarket.projects.t_biomarket$projects133723(p,owner,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),(function (p,owner){
if(typeof biomarket.projects.t_biomarket$projects133726 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects133726 = (function (p,owner,meta133727){
this.p = p;
this.owner = owner;
this.meta133727 = meta133727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects133726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133728,meta133727__$1){
var self__ = this;
var _133728__$1 = this;
return (new biomarket.projects.t_biomarket$projects133726(self__.p,self__.owner,meta133727__$1));
});

biomarket.projects.t_biomarket$projects133726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133728){
var self__ = this;
var _133728__$1 = this;
return self__.meta133727;
});

biomarket.projects.t_biomarket$projects133726.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects133726.prototype.om$core$IRender$render$arity$1 = (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return om.core.build.call(null,biomarket.projects.default_bottom,self__.p);
});

biomarket.projects.t_biomarket$projects133726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta133727","meta133727",-794637195,null)], null);
});

biomarket.projects.t_biomarket$projects133726.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects133726.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects133726";

biomarket.projects.t_biomarket$projects133726.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.projects/t_biomarket$projects133726");
});

biomarket.projects.__GT_t_biomarket$projects133726 = (function biomarket$projects$__GT_t_biomarket$projects133726(p__$1,owner__$1,meta133727){
return (new biomarket.projects.t_biomarket$projects133726(p__$1,owner__$1,meta133727));
});

}

return (new biomarket.projects.t_biomarket$projects133726(p,owner,null));
}));
biomarket.projects.home_view = (function biomarket$projects$home_view(_,owner){
if(typeof biomarket.projects.t_biomarket$projects133736 !== 'undefined'){
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
biomarket.projects.t_biomarket$projects133736 = (function (home_view,_,owner,meta133737){
this.home_view = home_view;
this._ = _;
this.owner = owner;
this.meta133737 = meta133737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects133736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133738,meta133737__$1){
var self__ = this;
var _133738__$1 = this;
return (new biomarket.projects.t_biomarket$projects133736(self__.home_view,self__._,self__.owner,meta133737__$1));
});

biomarket.projects.t_biomarket$projects133736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133738){
var self__ = this;
var _133738__$1 = this;
return self__.meta133737;
});

biomarket.projects.t_biomarket$projects133736.prototype.om$core$IInitState$ = true;

biomarket.projects.t_biomarket$projects133736.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Open projects","open"], null),new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active projects","active"], null),new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed projects","completed"], null),new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deleted projects","deleted"], null),new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Expired projects","expired"], null)], null),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Project",((function (___$2){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141),new cljs.core.Keyword(null,"new","new",-2085437848));
});})(___$2))
], null)], null),new cljs.core.Keyword(null,"ut","ut",-719415558),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"update-tag","update-tag",1483190681),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718),cljs.core.async.chan.call(null)], null);
});

biomarket.projects.t_biomarket$projects133736.prototype.om$core$IDidMount$ = true;

biomarket.projects.t_biomarket$projects133736.prototype.om$core$IDidMount$did_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.projectdisplay.navigation_mount.call(null,self__.owner);
});

biomarket.projects.t_biomarket$projects133736.prototype.om$core$IWillUnmount$ = true;

biomarket.projects.t_biomarket$projects133736.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.projectdisplay.navigation_unmount.call(null,self__.owner);
});

biomarket.projects.t_biomarket$projects133736.prototype.om$core$IRenderState$ = true;

biomarket.projects.t_biomarket$projects133736.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__133739){
var self__ = this;
var map__133740 = p__133739;
var map__133740__$1 = ((((!((map__133740 == null)))?((((map__133740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133740):map__133740);
var projects = cljs.core.get.call(null,map__133740__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var view = cljs.core.get.call(null,map__133740__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var ___$2 = this;
return React.DOM.div(null,biomarket.projectdisplay.project_nav.call(null,self__.owner),React.DOM.div({"style": {"padding-top": "10px"}}),((cljs.core.seq.call(null,projects))?React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},cljs.core.apply.call(null,om.dom.div,{"className": "col-md-12"},cljs.core.map.call(null,((function (___$2,map__133740,map__133740__$1,projects,view){
return (function (p1__133729_SHARP_){
return om.core.build.call(null,biomarket.projectdisplay.project_summary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__133729_SHARP_,view], null));
});})(___$2,map__133740,map__133740__$1,projects,view))
,projects)))):React.DOM.div({"style": {"padding-top": "30px", "text-align": "center"}},[cljs.core.str("You have no "),cljs.core.str(cljs.core.first.call(null,view.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858))))),cljs.core.str(" projects.")].join(''))));
});

biomarket.projects.t_biomarket$projects133736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"home-view","home-view",-289851298,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta133737","meta133737",-1601415265,null)], null);
});

biomarket.projects.t_biomarket$projects133736.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects133736.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects133736";

biomarket.projects.t_biomarket$projects133736.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.projects/t_biomarket$projects133736");
});

biomarket.projects.__GT_t_biomarket$projects133736 = (function biomarket$projects$home_view_$___GT_t_biomarket$projects133736(home_view__$1,___$1,owner__$1,meta133737){
return (new biomarket.projects.t_biomarket$projects133736(home_view__$1,___$1,owner__$1,meta133737));
});

}

return (new biomarket.projects.t_biomarket$projects133736(biomarket$projects$home_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.projects.projects_view_control = (function biomarket$projects$projects_view_control(_,owner){
if(typeof biomarket.projects.t_biomarket$projects133754 !== 'undefined'){
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
biomarket.projects.t_biomarket$projects133754 = (function (projects_view_control,_,owner,meta133755){
this.projects_view_control = projects_view_control;
this._ = _;
this.owner = owner;
this.meta133755 = meta133755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects133754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133756,meta133755__$1){
var self__ = this;
var _133756__$1 = this;
return (new biomarket.projects.t_biomarket$projects133754(self__.projects_view_control,self__._,self__.owner,meta133755__$1));
});

biomarket.projects.t_biomarket$projects133754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133756){
var self__ = this;
var _133756__$1 = this;
return self__.meta133755;
});

biomarket.projects.t_biomarket$projects133754.prototype.om$core$IInitState$ = true;

biomarket.projects.t_biomarket$projects133754.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"home","home",-74557309)], null);
});

biomarket.projects.t_biomarket$projects133754.prototype.om$core$IWillMount$ = true;

biomarket.projects.t_biomarket$projects133754.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141),((function (___$2){
return (function (o,p__133757){
var map__133758 = p__133757;
var map__133758__$1 = ((((!((map__133758 == null)))?((((map__133758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133758):map__133758);
var data = cljs.core.get.call(null,map__133758__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"current","current",-1088038603),data);
});})(___$2))
);
});

biomarket.projects.t_biomarket$projects133754.prototype.om$core$IWillUnmount$ = true;

biomarket.projects.t_biomarket$projects133754.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141));
});

biomarket.projects.t_biomarket$projects133754.prototype.om$core$IRenderState$ = true;

biomarket.projects.t_biomarket$projects133754.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__133760){
var self__ = this;
var map__133761 = p__133760;
var map__133761__$1 = ((((!((map__133761 == null)))?((((map__133761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133761):map__133761);
var current = cljs.core.get.call(null,map__133761__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var nav = cljs.core.get.call(null,map__133761__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var ___$2 = this;
var pred__133763 = cljs.core._EQ_;
var expr__133764 = current;
if(cljs.core.truth_(pred__133763.call(null,new cljs.core.Keyword(null,"home","home",-74557309),expr__133764))){
return om.core.build.call(null,biomarket.projects.home_view,null);
} else {
if(cljs.core.truth_(pred__133763.call(null,new cljs.core.Keyword(null,"new","new",-2085437848),expr__133764))){
return om.core.build.call(null,biomarket.newproject.new_project_view,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__133764)].join('')));
}
}
});

biomarket.projects.t_biomarket$projects133754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"projects-view-control","projects-view-control",-1753118227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta133755","meta133755",391688726,null)], null);
});

biomarket.projects.t_biomarket$projects133754.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects133754.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects133754";

biomarket.projects.t_biomarket$projects133754.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.projects/t_biomarket$projects133754");
});

biomarket.projects.__GT_t_biomarket$projects133754 = (function biomarket$projects$projects_view_control_$___GT_t_biomarket$projects133754(projects_view_control__$1,___$1,owner__$1,meta133755){
return (new biomarket.projects.t_biomarket$projects133754(projects_view_control__$1,___$1,owner__$1,meta133755));
});

}

return (new biomarket.projects.t_biomarket$projects133754(biomarket$projects$projects_view_control,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=projects.js.map