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
biomarket.projects.default_bottom = (function biomarket$projects$default_bottom(p,owner){
if(typeof biomarket.projects.t_biomarket$projects119876 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects119876 = (function (default_bottom,p,owner,meta119877){
this.default_bottom = default_bottom;
this.p = p;
this.owner = owner;
this.meta119877 = meta119877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects119876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119878,meta119877__$1){
var self__ = this;
var _119878__$1 = this;
return (new biomarket.projects.t_biomarket$projects119876(self__.default_bottom,self__.p,self__.owner,meta119877__$1));
});

biomarket.projects.t_biomarket$projects119876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119878){
var self__ = this;
var _119878__$1 = this;
return self__.meta119877;
});

biomarket.projects.t_biomarket$projects119876.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects119876.prototype.om$core$IRender$render$arity$1 = (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.p))){
return React.DOM.div(null,React.DOM.hr(null),om.core.build.call(null,biomarket.projectdisplay.bottom_skel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.bid_bbutton,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p,new cljs.core.Keyword(null,"bids","bids",-1493194652)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.bid_manage,self__.p], null)], null)], null),null,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(self__.p)], null)));
} else {
return null;
}
});

biomarket.projects.t_biomarket$projects119876.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"default-bottom","default-bottom",-692683031,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta119877","meta119877",926557925,null)], null);
});

biomarket.projects.t_biomarket$projects119876.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects119876.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects119876";

biomarket.projects.t_biomarket$projects119876.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.projects/t_biomarket$projects119876");
});

biomarket.projects.__GT_t_biomarket$projects119876 = (function biomarket$projects$default_bottom_$___GT_t_biomarket$projects119876(default_bottom__$1,p__$1,owner__$1,meta119877){
return (new biomarket.projects.t_biomarket$projects119876(default_bottom__$1,p__$1,owner__$1,meta119877));
});

}

return (new biomarket.projects.t_biomarket$projects119876(biomarket$projects$default_bottom,p,owner,null));
});
biomarket.projects.expired_or_deleted = (function biomarket$projects$expired_or_deleted(project){
if(typeof biomarket.projects.t_biomarket$projects119882 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects119882 = (function (expired_or_deleted,project,meta119883){
this.expired_or_deleted = expired_or_deleted;
this.project = project;
this.meta119883 = meta119883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects119882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119884,meta119883__$1){
var self__ = this;
var _119884__$1 = this;
return (new biomarket.projects.t_biomarket$projects119882(self__.expired_or_deleted,self__.project,meta119883__$1));
});

biomarket.projects.t_biomarket$projects119882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119884){
var self__ = this;
var _119884__$1 = this;
return self__.meta119883;
});

biomarket.projects.t_biomarket$projects119882.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects119882.prototype.om$core$IRender$render$arity$1 = (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var best = biomarket.bids.best_bid.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project));
if(cljs.core.truth_(best)){
return biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join(''));
} else {
return biomarket.projectdisplay.label.call(null,"label label-danger","No bids");
}
})());
});

biomarket.projects.t_biomarket$projects119882.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"expired-or-deleted","expired-or-deleted",-713309317,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta119883","meta119883",-980587080,null)], null);
});

biomarket.projects.t_biomarket$projects119882.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects119882.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects119882";

biomarket.projects.t_biomarket$projects119882.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.projects/t_biomarket$projects119882");
});

biomarket.projects.__GT_t_biomarket$projects119882 = (function biomarket$projects$expired_or_deleted_$___GT_t_biomarket$projects119882(expired_or_deleted__$1,project__$1,meta119883){
return (new biomarket.projects.t_biomarket$projects119882(expired_or_deleted__$1,project__$1,meta119883));
});

}

return (new biomarket.projects.t_biomarket$projects119882(biomarket$projects$expired_or_deleted,project,null));
});
biomarket.projects.undelete_project = (function biomarket$projects$undelete_project(p){
return biomarket.server.save_data.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"undelete-project","undelete-project",-1653906236),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p)], null)], null));
});
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),(function (project){
if(typeof biomarket.projects.t_biomarket$projects119885 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects119885 = (function (project,meta119886){
this.project = project;
this.meta119886 = meta119886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects119885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119887,meta119886__$1){
var self__ = this;
var _119887__$1 = this;
return (new biomarket.projects.t_biomarket$projects119885(self__.project,meta119886__$1));
});

biomarket.projects.t_biomarket$projects119885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119887){
var self__ = this;
var _119887__$1 = this;
return self__.meta119886;
});

biomarket.projects.t_biomarket$projects119885.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects119885.prototype.om$core$IRender$render$arity$1 = (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var best = biomarket.bids.best_bid.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project));
if(cljs.core.truth_(best)){
return biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join(''));
} else {
return biomarket.projectdisplay.label.call(null,"label label-danger","No bids yet!");
}
})());
});

biomarket.projects.t_biomarket$projects119885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta119886","meta119886",2048805804,null)], null);
});

biomarket.projects.t_biomarket$projects119885.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects119885.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects119885";

biomarket.projects.t_biomarket$projects119885.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.projects/t_biomarket$projects119885");
});

biomarket.projects.__GT_t_biomarket$projects119885 = (function biomarket$projects$__GT_t_biomarket$projects119885(project__$1,meta119886){
return (new biomarket.projects.t_biomarket$projects119885(project__$1,meta119886));
});

}

return (new biomarket.projects.t_biomarket$projects119885(project,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),(function (p,owner){
if(typeof biomarket.projects.t_biomarket$projects119888 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects119888 = (function (p,owner,meta119889){
this.p = p;
this.owner = owner;
this.meta119889 = meta119889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects119888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119890,meta119889__$1){
var self__ = this;
var _119890__$1 = this;
return (new biomarket.projects.t_biomarket$projects119888(self__.p,self__.owner,meta119889__$1));
});

biomarket.projects.t_biomarket$projects119888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119890){
var self__ = this;
var _119890__$1 = this;
return self__.meta119889;
});

biomarket.projects.t_biomarket$projects119888.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects119888.prototype.om$core$IRender$render$arity$1 = (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return om.core.build.call(null,biomarket.projects.default_bottom,self__.p);
});

biomarket.projects.t_biomarket$projects119888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta119889","meta119889",-646202189,null)], null);
});

biomarket.projects.t_biomarket$projects119888.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects119888.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects119888";

biomarket.projects.t_biomarket$projects119888.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.projects/t_biomarket$projects119888");
});

biomarket.projects.__GT_t_biomarket$projects119888 = (function biomarket$projects$__GT_t_biomarket$projects119888(p__$1,owner__$1,meta119889){
return (new biomarket.projects.t_biomarket$projects119888(p__$1,owner__$1,meta119889));
});

}

return (new biomarket.projects.t_biomarket$projects119888(p,owner,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),(function (p){
if(typeof biomarket.projects.t_biomarket$projects119891 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects119891 = (function (p,meta119892){
this.p = p;
this.meta119892 = meta119892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects119891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119893,meta119892__$1){
var self__ = this;
var _119893__$1 = this;
return (new biomarket.projects.t_biomarket$projects119891(self__.p,meta119892__$1));
});

biomarket.projects.t_biomarket$projects119891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119893){
var self__ = this;
var _119893__$1 = this;
return self__.meta119892;
});

biomarket.projects.t_biomarket$projects119891.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects119891.prototype.om$core$IRender$render$arity$1 = (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return React.DOM.div(null);
});

biomarket.projects.t_biomarket$projects119891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"meta119892","meta119892",682391692,null)], null);
});

biomarket.projects.t_biomarket$projects119891.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects119891.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects119891";

biomarket.projects.t_biomarket$projects119891.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.projects/t_biomarket$projects119891");
});

biomarket.projects.__GT_t_biomarket$projects119891 = (function biomarket$projects$__GT_t_biomarket$projects119891(p__$1,meta119892){
return (new biomarket.projects.t_biomarket$projects119891(p__$1,meta119892));
});

}

return (new biomarket.projects.t_biomarket$projects119891(p,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),(function (p,owner){
if(typeof biomarket.projects.t_biomarket$projects119894 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects119894 = (function (p,owner,meta119895){
this.p = p;
this.owner = owner;
this.meta119895 = meta119895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects119894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119896,meta119895__$1){
var self__ = this;
var _119896__$1 = this;
return (new biomarket.projects.t_biomarket$projects119894(self__.p,self__.owner,meta119895__$1));
});

biomarket.projects.t_biomarket$projects119894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119896){
var self__ = this;
var _119896__$1 = this;
return self__.meta119895;
});

biomarket.projects.t_biomarket$projects119894.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects119894.prototype.om$core$IRender$render$arity$1 = (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return React.DOM.div(null,"");
});

biomarket.projects.t_biomarket$projects119894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta119895","meta119895",-724809544,null)], null);
});

biomarket.projects.t_biomarket$projects119894.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects119894.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects119894";

biomarket.projects.t_biomarket$projects119894.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.projects/t_biomarket$projects119894");
});

biomarket.projects.__GT_t_biomarket$projects119894 = (function biomarket$projects$__GT_t_biomarket$projects119894(p__$1,owner__$1,meta119895){
return (new biomarket.projects.t_biomarket$projects119894(p__$1,owner__$1,meta119895));
});

}

return (new biomarket.projects.t_biomarket$projects119894(p,owner,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),(function (p){
if(typeof biomarket.projects.t_biomarket$projects119897 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects119897 = (function (p,meta119898){
this.p = p;
this.meta119898 = meta119898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects119897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119899,meta119898__$1){
var self__ = this;
var _119899__$1 = this;
return (new biomarket.projects.t_biomarket$projects119897(self__.p,meta119898__$1));
});

biomarket.projects.t_biomarket$projects119897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119899){
var self__ = this;
var _119899__$1 = this;
return self__.meta119898;
});

biomarket.projects.t_biomarket$projects119897.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects119897.prototype.om$core$IRender$render$arity$1 = (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return React.DOM.div(null);
});

biomarket.projects.t_biomarket$projects119897.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"meta119898","meta119898",1644199989,null)], null);
});

biomarket.projects.t_biomarket$projects119897.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects119897.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects119897";

biomarket.projects.t_biomarket$projects119897.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.projects/t_biomarket$projects119897");
});

biomarket.projects.__GT_t_biomarket$projects119897 = (function biomarket$projects$__GT_t_biomarket$projects119897(p__$1,meta119898){
return (new biomarket.projects.t_biomarket$projects119897(p__$1,meta119898));
});

}

return (new biomarket.projects.t_biomarket$projects119897(p,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),(function (p){
if(typeof biomarket.projects.t_biomarket$projects119900 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects119900 = (function (p,meta119901){
this.p = p;
this.meta119901 = meta119901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects119900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119902,meta119901__$1){
var self__ = this;
var _119902__$1 = this;
return (new biomarket.projects.t_biomarket$projects119900(self__.p,meta119901__$1));
});

biomarket.projects.t_biomarket$projects119900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119902){
var self__ = this;
var _119902__$1 = this;
return self__.meta119901;
});

biomarket.projects.t_biomarket$projects119900.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects119900.prototype.om$core$IRender$render$arity$1 = (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return React.DOM.div(null,"");
});

biomarket.projects.t_biomarket$projects119900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"meta119901","meta119901",-2054873092,null)], null);
});

biomarket.projects.t_biomarket$projects119900.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects119900.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects119900";

biomarket.projects.t_biomarket$projects119900.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.projects/t_biomarket$projects119900");
});

biomarket.projects.__GT_t_biomarket$projects119900 = (function biomarket$projects$__GT_t_biomarket$projects119900(p__$1,meta119901){
return (new biomarket.projects.t_biomarket$projects119900(p__$1,meta119901));
});

}

return (new biomarket.projects.t_biomarket$projects119900(p,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533),(function (project){
return biomarket.projects.expired_or_deleted.call(null,project);
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533),(function (p,owner){
if(typeof biomarket.projects.t_biomarket$projects119903 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects119903 = (function (p,owner,meta119904){
this.p = p;
this.owner = owner;
this.meta119904 = meta119904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects119903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119905,meta119904__$1){
var self__ = this;
var _119905__$1 = this;
return (new biomarket.projects.t_biomarket$projects119903(self__.p,self__.owner,meta119904__$1));
});

biomarket.projects.t_biomarket$projects119903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119905){
var self__ = this;
var _119905__$1 = this;
return self__.meta119904;
});

biomarket.projects.t_biomarket$projects119903.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects119903.prototype.om$core$IRender$render$arity$1 = (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return om.core.build.call(null,biomarket.projects.default_bottom,self__.p);
});

biomarket.projects.t_biomarket$projects119903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta119904","meta119904",-1829158884,null)], null);
});

biomarket.projects.t_biomarket$projects119903.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects119903.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects119903";

biomarket.projects.t_biomarket$projects119903.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.projects/t_biomarket$projects119903");
});

biomarket.projects.__GT_t_biomarket$projects119903 = (function biomarket$projects$__GT_t_biomarket$projects119903(p__$1,owner__$1,meta119904){
return (new biomarket.projects.t_biomarket$projects119903(p__$1,owner__$1,meta119904));
});

}

return (new biomarket.projects.t_biomarket$projects119903(p,owner,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.drop_down,new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533),(function (p){
return biomarket.projectdisplay.drop_down_skel.call(null,(function (){
return biomarket.projects.undelete_project.call(null,p);
}),"Undelete project");
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),(function (project){
return biomarket.projects.expired_or_deleted.call(null,project);
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),(function (p,owner){
if(typeof biomarket.projects.t_biomarket$projects119906 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects119906 = (function (p,owner,meta119907){
this.p = p;
this.owner = owner;
this.meta119907 = meta119907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects119906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119908,meta119907__$1){
var self__ = this;
var _119908__$1 = this;
return (new biomarket.projects.t_biomarket$projects119906(self__.p,self__.owner,meta119907__$1));
});

biomarket.projects.t_biomarket$projects119906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119908){
var self__ = this;
var _119908__$1 = this;
return self__.meta119907;
});

biomarket.projects.t_biomarket$projects119906.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects119906.prototype.om$core$IRender$render$arity$1 = (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return om.core.build.call(null,biomarket.projects.default_bottom,self__.p);
});

biomarket.projects.t_biomarket$projects119906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta119907","meta119907",-1235526594,null)], null);
});

biomarket.projects.t_biomarket$projects119906.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects119906.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects119906";

biomarket.projects.t_biomarket$projects119906.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.projects/t_biomarket$projects119906");
});

biomarket.projects.__GT_t_biomarket$projects119906 = (function biomarket$projects$__GT_t_biomarket$projects119906(p__$1,owner__$1,meta119907){
return (new biomarket.projects.t_biomarket$projects119906(p__$1,owner__$1,meta119907));
});

}

return (new biomarket.projects.t_biomarket$projects119906(p,owner,null));
}));
biomarket.projects.home_view = (function biomarket$projects$home_view(_,owner){
if(typeof biomarket.projects.t_biomarket$projects119916 !== 'undefined'){
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
biomarket.projects.t_biomarket$projects119916 = (function (home_view,_,owner,meta119917){
this.home_view = home_view;
this._ = _;
this.owner = owner;
this.meta119917 = meta119917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects119916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119918,meta119917__$1){
var self__ = this;
var _119918__$1 = this;
return (new biomarket.projects.t_biomarket$projects119916(self__.home_view,self__._,self__.owner,meta119917__$1));
});

biomarket.projects.t_biomarket$projects119916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119918){
var self__ = this;
var _119918__$1 = this;
return self__.meta119917;
});

biomarket.projects.t_biomarket$projects119916.prototype.om$core$IInitState$ = true;

biomarket.projects.t_biomarket$projects119916.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"projects","projects",-364845983),false,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Open projects","open"], null),new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active projects","active"], null),new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed projects","completed"], null),new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deleted projects","deleted"], null),new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Expired projects","expired"], null)], null),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Project",((function (___$2){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141),new cljs.core.Keyword(null,"new","new",-2085437848));
});})(___$2))
], null)], null),new cljs.core.Keyword(null,"ut","ut",-719415558),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"update-tag","update-tag",1483190681),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718),cljs.core.async.chan.call(null)], null);
});

biomarket.projects.t_biomarket$projects119916.prototype.om$core$IDidMount$ = true;

biomarket.projects.t_biomarket$projects119916.prototype.om$core$IDidMount$did_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.projectdisplay.navigation_mount.call(null,self__.owner);
});

biomarket.projects.t_biomarket$projects119916.prototype.om$core$IWillUnmount$ = true;

biomarket.projects.t_biomarket$projects119916.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.projectdisplay.navigation_unmount.call(null,self__.owner);
});

biomarket.projects.t_biomarket$projects119916.prototype.om$core$IRenderState$ = true;

biomarket.projects.t_biomarket$projects119916.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__119919){
var self__ = this;
var map__119920 = p__119919;
var map__119920__$1 = ((((!((map__119920 == null)))?((((map__119920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119920):map__119920);
var projects = cljs.core.get.call(null,map__119920__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var view = cljs.core.get.call(null,map__119920__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var views = cljs.core.get.call(null,map__119920__$1,new cljs.core.Keyword(null,"views","views",1450155487));
var ___$2 = this;
return React.DOM.div(null,biomarket.projectdisplay.project_nav.call(null,self__.owner),(cljs.core.truth_(projects)?React.DOM.div({"style": {"padding-top": "10px"}},((cljs.core.seq.call(null,projects))?React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},cljs.core.apply.call(null,om.dom.div,{"className": "col-md-12"},cljs.core.map.call(null,((function (___$2,map__119920,map__119920__$1,projects,view,views){
return (function (p1__119909_SHARP_){
return om.core.build.call(null,biomarket.projectdisplay.project_summary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__119909_SHARP_,view], null));
});})(___$2,map__119920,map__119920__$1,projects,view,views))
,projects)))):React.DOM.div({"style": {"padding-top": "30px", "text-align": "center"}},[cljs.core.str("You have no "),cljs.core.str(cljs.core.second.call(null,view.call(null,views))),cljs.core.str(" projects.")].join('')))):om.core.build.call(null,biomarket.utilities.waiting,null)));
});

biomarket.projects.t_biomarket$projects119916.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"home-view","home-view",-289851298,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta119917","meta119917",205413253,null)], null);
});

biomarket.projects.t_biomarket$projects119916.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects119916.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects119916";

biomarket.projects.t_biomarket$projects119916.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.projects/t_biomarket$projects119916");
});

biomarket.projects.__GT_t_biomarket$projects119916 = (function biomarket$projects$home_view_$___GT_t_biomarket$projects119916(home_view__$1,___$1,owner__$1,meta119917){
return (new biomarket.projects.t_biomarket$projects119916(home_view__$1,___$1,owner__$1,meta119917));
});

}

return (new biomarket.projects.t_biomarket$projects119916(biomarket$projects$home_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.projects.projects_view_control = (function biomarket$projects$projects_view_control(_,owner){
if(typeof biomarket.projects.t_biomarket$projects119934 !== 'undefined'){
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
biomarket.projects.t_biomarket$projects119934 = (function (projects_view_control,_,owner,meta119935){
this.projects_view_control = projects_view_control;
this._ = _;
this.owner = owner;
this.meta119935 = meta119935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects119934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119936,meta119935__$1){
var self__ = this;
var _119936__$1 = this;
return (new biomarket.projects.t_biomarket$projects119934(self__.projects_view_control,self__._,self__.owner,meta119935__$1));
});

biomarket.projects.t_biomarket$projects119934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119936){
var self__ = this;
var _119936__$1 = this;
return self__.meta119935;
});

biomarket.projects.t_biomarket$projects119934.prototype.om$core$IInitState$ = true;

biomarket.projects.t_biomarket$projects119934.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"home","home",-74557309)], null);
});

biomarket.projects.t_biomarket$projects119934.prototype.om$core$IWillMount$ = true;

biomarket.projects.t_biomarket$projects119934.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141),((function (___$2){
return (function (o,p__119937){
var map__119938 = p__119937;
var map__119938__$1 = ((((!((map__119938 == null)))?((((map__119938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119938):map__119938);
var data = cljs.core.get.call(null,map__119938__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"current","current",-1088038603),data);
});})(___$2))
);
});

biomarket.projects.t_biomarket$projects119934.prototype.om$core$IWillUnmount$ = true;

biomarket.projects.t_biomarket$projects119934.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141));
});

biomarket.projects.t_biomarket$projects119934.prototype.om$core$IRenderState$ = true;

biomarket.projects.t_biomarket$projects119934.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__119940){
var self__ = this;
var map__119941 = p__119940;
var map__119941__$1 = ((((!((map__119941 == null)))?((((map__119941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119941):map__119941);
var current = cljs.core.get.call(null,map__119941__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var nav = cljs.core.get.call(null,map__119941__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var ___$2 = this;
var pred__119943 = cljs.core._EQ_;
var expr__119944 = current;
if(cljs.core.truth_(pred__119943.call(null,new cljs.core.Keyword(null,"home","home",-74557309),expr__119944))){
return om.core.build.call(null,biomarket.projects.home_view,null);
} else {
if(cljs.core.truth_(pred__119943.call(null,new cljs.core.Keyword(null,"new","new",-2085437848),expr__119944))){
return om.core.build.call(null,biomarket.newproject.new_project_view,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__119944)].join('')));
}
}
});

biomarket.projects.t_biomarket$projects119934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"projects-view-control","projects-view-control",-1753118227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta119935","meta119935",-2001968218,null)], null);
});

biomarket.projects.t_biomarket$projects119934.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects119934.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects119934";

biomarket.projects.t_biomarket$projects119934.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.projects/t_biomarket$projects119934");
});

biomarket.projects.__GT_t_biomarket$projects119934 = (function biomarket$projects$projects_view_control_$___GT_t_biomarket$projects119934(projects_view_control__$1,___$1,owner__$1,meta119935){
return (new biomarket.projects.t_biomarket$projects119934(projects_view_control__$1,___$1,owner__$1,meta119935));
});

}

return (new biomarket.projects.t_biomarket$projects119934(biomarket$projects$projects_view_control,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=projects.js.map