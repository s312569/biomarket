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
if(typeof biomarket.projects.t_biomarket$projects66645 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects66645 = (function (expired_or_deleted,project,meta66646){
this.expired_or_deleted = expired_or_deleted;
this.project = project;
this.meta66646 = meta66646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects66645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66647,meta66646__$1){
var self__ = this;
var _66647__$1 = this;
return (new biomarket.projects.t_biomarket$projects66645(self__.expired_or_deleted,self__.project,meta66646__$1));
});

biomarket.projects.t_biomarket$projects66645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66647){
var self__ = this;
var _66647__$1 = this;
return self__.meta66646;
});

biomarket.projects.t_biomarket$projects66645.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects66645.prototype.om$core$IRender$render$arity$1 = (function (this__28885__auto__){
var self__ = this;
var this__28885__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var best = biomarket.bids.best_bid.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project));
if(cljs.core.truth_(best)){
return biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join(''));
} else {
return biomarket.projectdisplay.label.call(null,"label label-danger","No bids");
}
})());
});

biomarket.projects.t_biomarket$projects66645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"expired-or-deleted","expired-or-deleted",-713309317,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta66646","meta66646",-1839390236,null)], null);
});

biomarket.projects.t_biomarket$projects66645.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects66645.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects66645";

biomarket.projects.t_biomarket$projects66645.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.projects/t_biomarket$projects66645");
});

biomarket.projects.__GT_t_biomarket$projects66645 = (function biomarket$projects$expired_or_deleted_$___GT_t_biomarket$projects66645(expired_or_deleted__$1,project__$1,meta66646){
return (new biomarket.projects.t_biomarket$projects66645(expired_or_deleted__$1,project__$1,meta66646));
});

}

return (new biomarket.projects.t_biomarket$projects66645(biomarket$projects$expired_or_deleted,project,null));
});
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),(function (project){
if(typeof biomarket.projects.t_biomarket$projects66648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects66648 = (function (project,meta66649){
this.project = project;
this.meta66649 = meta66649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects66648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66650,meta66649__$1){
var self__ = this;
var _66650__$1 = this;
return (new biomarket.projects.t_biomarket$projects66648(self__.project,meta66649__$1));
});

biomarket.projects.t_biomarket$projects66648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66650){
var self__ = this;
var _66650__$1 = this;
return self__.meta66649;
});

biomarket.projects.t_biomarket$projects66648.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects66648.prototype.om$core$IRender$render$arity$1 = (function (this__28885__auto__){
var self__ = this;
var this__28885__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var best = biomarket.bids.best_bid.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project));
if(cljs.core.truth_(best)){
return biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join(''));
} else {
return biomarket.projectdisplay.label.call(null,"label label-danger","No bids yet!");
}
})());
});

biomarket.projects.t_biomarket$projects66648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta66649","meta66649",1067927799,null)], null);
});

biomarket.projects.t_biomarket$projects66648.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects66648.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects66648";

biomarket.projects.t_biomarket$projects66648.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.projects/t_biomarket$projects66648");
});

biomarket.projects.__GT_t_biomarket$projects66648 = (function biomarket$projects$__GT_t_biomarket$projects66648(project__$1,meta66649){
return (new biomarket.projects.t_biomarket$projects66648(project__$1,meta66649));
});

}

return (new biomarket.projects.t_biomarket$projects66648(project,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),(function (p){
if(typeof biomarket.projects.t_biomarket$projects66651 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects66651 = (function (p,meta66652){
this.p = p;
this.meta66652 = meta66652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects66651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66653,meta66652__$1){
var self__ = this;
var _66653__$1 = this;
return (new biomarket.projects.t_biomarket$projects66651(self__.p,meta66652__$1));
});

biomarket.projects.t_biomarket$projects66651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66653){
var self__ = this;
var _66653__$1 = this;
return self__.meta66652;
});

biomarket.projects.t_biomarket$projects66651.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects66651.prototype.om$core$IRender$render$arity$1 = (function (this__28885__auto__){
var self__ = this;
var this__28885__auto____$1 = this;
return React.DOM.div(null);
});

biomarket.projects.t_biomarket$projects66651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"meta66652","meta66652",1193261068,null)], null);
});

biomarket.projects.t_biomarket$projects66651.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects66651.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects66651";

biomarket.projects.t_biomarket$projects66651.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.projects/t_biomarket$projects66651");
});

biomarket.projects.__GT_t_biomarket$projects66651 = (function biomarket$projects$__GT_t_biomarket$projects66651(p__$1,meta66652){
return (new biomarket.projects.t_biomarket$projects66651(p__$1,meta66652));
});

}

return (new biomarket.projects.t_biomarket$projects66651(p,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),(function (p){
if(typeof biomarket.projects.t_biomarket$projects66654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects66654 = (function (p,meta66655){
this.p = p;
this.meta66655 = meta66655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects66654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66656,meta66655__$1){
var self__ = this;
var _66656__$1 = this;
return (new biomarket.projects.t_biomarket$projects66654(self__.p,meta66655__$1));
});

biomarket.projects.t_biomarket$projects66654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66656){
var self__ = this;
var _66656__$1 = this;
return self__.meta66655;
});

biomarket.projects.t_biomarket$projects66654.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects66654.prototype.om$core$IRender$render$arity$1 = (function (this__28885__auto__){
var self__ = this;
var this__28885__auto____$1 = this;
return React.DOM.div(null);
});

biomarket.projects.t_biomarket$projects66654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"meta66655","meta66655",1243942630,null)], null);
});

biomarket.projects.t_biomarket$projects66654.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects66654.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects66654";

biomarket.projects.t_biomarket$projects66654.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.projects/t_biomarket$projects66654");
});

biomarket.projects.__GT_t_biomarket$projects66654 = (function biomarket$projects$__GT_t_biomarket$projects66654(p__$1,meta66655){
return (new biomarket.projects.t_biomarket$projects66654(p__$1,meta66655));
});

}

return (new biomarket.projects.t_biomarket$projects66654(p,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533),(function (project){
return biomarket.projects.expired_or_deleted.call(null,project);
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),(function (project){
return biomarket.projects.expired_or_deleted.call(null,project);
}));
biomarket.projects.default_bottom = (function biomarket$projects$default_bottom(p,owner){
if(typeof biomarket.projects.t_biomarket$projects66660 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects66660 = (function (default_bottom,p,owner,meta66661){
this.default_bottom = default_bottom;
this.p = p;
this.owner = owner;
this.meta66661 = meta66661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects66660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66662,meta66661__$1){
var self__ = this;
var _66662__$1 = this;
return (new biomarket.projects.t_biomarket$projects66660(self__.default_bottom,self__.p,self__.owner,meta66661__$1));
});

biomarket.projects.t_biomarket$projects66660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66662){
var self__ = this;
var _66662__$1 = this;
return self__.meta66661;
});

biomarket.projects.t_biomarket$projects66660.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects66660.prototype.om$core$IRender$render$arity$1 = (function (this__28885__auto__){
var self__ = this;
var this__28885__auto____$1 = this;
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.p))){
return React.DOM.div(null,React.DOM.hr(null),om.core.build.call(null,biomarket.projectdisplay.bottom_skel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.bid_bbutton,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p,new cljs.core.Keyword(null,"bids","bids",-1493194652)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.bid_manage,self__.p], null)], null)], null),null,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(self__.p)], null)));
} else {
return null;
}
});

biomarket.projects.t_biomarket$projects66660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"default-bottom","default-bottom",-692683031,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66661","meta66661",-1680295133,null)], null);
});

biomarket.projects.t_biomarket$projects66660.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects66660.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects66660";

biomarket.projects.t_biomarket$projects66660.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.projects/t_biomarket$projects66660");
});

biomarket.projects.__GT_t_biomarket$projects66660 = (function biomarket$projects$default_bottom_$___GT_t_biomarket$projects66660(default_bottom__$1,p__$1,owner__$1,meta66661){
return (new biomarket.projects.t_biomarket$projects66660(default_bottom__$1,p__$1,owner__$1,meta66661));
});

}

return (new biomarket.projects.t_biomarket$projects66660(biomarket$projects$default_bottom,p,owner,null));
});
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),(function (p,owner){
if(typeof biomarket.projects.t_biomarket$projects66663 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects66663 = (function (p,owner,meta66664){
this.p = p;
this.owner = owner;
this.meta66664 = meta66664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects66663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66665,meta66664__$1){
var self__ = this;
var _66665__$1 = this;
return (new biomarket.projects.t_biomarket$projects66663(self__.p,self__.owner,meta66664__$1));
});

biomarket.projects.t_biomarket$projects66663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66665){
var self__ = this;
var _66665__$1 = this;
return self__.meta66664;
});

biomarket.projects.t_biomarket$projects66663.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects66663.prototype.om$core$IRender$render$arity$1 = (function (this__28885__auto__){
var self__ = this;
var this__28885__auto____$1 = this;
return om.core.build.call(null,biomarket.projects.default_bottom,self__.p);
});

biomarket.projects.t_biomarket$projects66663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66664","meta66664",-1932867803,null)], null);
});

biomarket.projects.t_biomarket$projects66663.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects66663.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects66663";

biomarket.projects.t_biomarket$projects66663.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.projects/t_biomarket$projects66663");
});

biomarket.projects.__GT_t_biomarket$projects66663 = (function biomarket$projects$__GT_t_biomarket$projects66663(p__$1,owner__$1,meta66664){
return (new biomarket.projects.t_biomarket$projects66663(p__$1,owner__$1,meta66664));
});

}

return (new biomarket.projects.t_biomarket$projects66663(p,owner,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),(function (p,owner){
if(typeof biomarket.projects.t_biomarket$projects66666 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects66666 = (function (p,owner,meta66667){
this.p = p;
this.owner = owner;
this.meta66667 = meta66667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects66666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66668,meta66667__$1){
var self__ = this;
var _66668__$1 = this;
return (new biomarket.projects.t_biomarket$projects66666(self__.p,self__.owner,meta66667__$1));
});

biomarket.projects.t_biomarket$projects66666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66668){
var self__ = this;
var _66668__$1 = this;
return self__.meta66667;
});

biomarket.projects.t_biomarket$projects66666.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects66666.prototype.om$core$IRender$render$arity$1 = (function (this__28885__auto__){
var self__ = this;
var this__28885__auto____$1 = this;
return React.DOM.div(null,"");
});

biomarket.projects.t_biomarket$projects66666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66667","meta66667",-1831343901,null)], null);
});

biomarket.projects.t_biomarket$projects66666.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects66666.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects66666";

biomarket.projects.t_biomarket$projects66666.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.projects/t_biomarket$projects66666");
});

biomarket.projects.__GT_t_biomarket$projects66666 = (function biomarket$projects$__GT_t_biomarket$projects66666(p__$1,owner__$1,meta66667){
return (new biomarket.projects.t_biomarket$projects66666(p__$1,owner__$1,meta66667));
});

}

return (new biomarket.projects.t_biomarket$projects66666(p,owner,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),(function (p){
if(typeof biomarket.projects.t_biomarket$projects66669 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects66669 = (function (p,meta66670){
this.p = p;
this.meta66670 = meta66670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects66669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66671,meta66670__$1){
var self__ = this;
var _66671__$1 = this;
return (new biomarket.projects.t_biomarket$projects66669(self__.p,meta66670__$1));
});

biomarket.projects.t_biomarket$projects66669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66671){
var self__ = this;
var _66671__$1 = this;
return self__.meta66670;
});

biomarket.projects.t_biomarket$projects66669.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects66669.prototype.om$core$IRender$render$arity$1 = (function (this__28885__auto__){
var self__ = this;
var this__28885__auto____$1 = this;
return React.DOM.div(null,"");
});

biomarket.projects.t_biomarket$projects66669.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"meta66670","meta66670",-1661748689,null)], null);
});

biomarket.projects.t_biomarket$projects66669.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects66669.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects66669";

biomarket.projects.t_biomarket$projects66669.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.projects/t_biomarket$projects66669");
});

biomarket.projects.__GT_t_biomarket$projects66669 = (function biomarket$projects$__GT_t_biomarket$projects66669(p__$1,meta66670){
return (new biomarket.projects.t_biomarket$projects66669(p__$1,meta66670));
});

}

return (new biomarket.projects.t_biomarket$projects66669(p,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533),(function (p,owner){
if(typeof biomarket.projects.t_biomarket$projects66672 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects66672 = (function (p,owner,meta66673){
this.p = p;
this.owner = owner;
this.meta66673 = meta66673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects66672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66674,meta66673__$1){
var self__ = this;
var _66674__$1 = this;
return (new biomarket.projects.t_biomarket$projects66672(self__.p,self__.owner,meta66673__$1));
});

biomarket.projects.t_biomarket$projects66672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66674){
var self__ = this;
var _66674__$1 = this;
return self__.meta66673;
});

biomarket.projects.t_biomarket$projects66672.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects66672.prototype.om$core$IRender$render$arity$1 = (function (this__28885__auto__){
var self__ = this;
var this__28885__auto____$1 = this;
return om.core.build.call(null,biomarket.projects.default_bottom,self__.p);
});

biomarket.projects.t_biomarket$projects66672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66673","meta66673",1936463795,null)], null);
});

biomarket.projects.t_biomarket$projects66672.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects66672.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects66672";

biomarket.projects.t_biomarket$projects66672.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.projects/t_biomarket$projects66672");
});

biomarket.projects.__GT_t_biomarket$projects66672 = (function biomarket$projects$__GT_t_biomarket$projects66672(p__$1,owner__$1,meta66673){
return (new biomarket.projects.t_biomarket$projects66672(p__$1,owner__$1,meta66673));
});

}

return (new biomarket.projects.t_biomarket$projects66672(p,owner,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),(function (p,owner){
if(typeof biomarket.projects.t_biomarket$projects66675 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects66675 = (function (p,owner,meta66676){
this.p = p;
this.owner = owner;
this.meta66676 = meta66676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects66675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66677,meta66676__$1){
var self__ = this;
var _66677__$1 = this;
return (new biomarket.projects.t_biomarket$projects66675(self__.p,self__.owner,meta66676__$1));
});

biomarket.projects.t_biomarket$projects66675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66677){
var self__ = this;
var _66677__$1 = this;
return self__.meta66676;
});

biomarket.projects.t_biomarket$projects66675.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects66675.prototype.om$core$IRender$render$arity$1 = (function (this__28885__auto__){
var self__ = this;
var this__28885__auto____$1 = this;
return om.core.build.call(null,biomarket.projects.default_bottom,self__.p);
});

biomarket.projects.t_biomarket$projects66675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66676","meta66676",-985041307,null)], null);
});

biomarket.projects.t_biomarket$projects66675.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects66675.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects66675";

biomarket.projects.t_biomarket$projects66675.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.projects/t_biomarket$projects66675");
});

biomarket.projects.__GT_t_biomarket$projects66675 = (function biomarket$projects$__GT_t_biomarket$projects66675(p__$1,owner__$1,meta66676){
return (new biomarket.projects.t_biomarket$projects66675(p__$1,owner__$1,meta66676));
});

}

return (new biomarket.projects.t_biomarket$projects66675(p,owner,null));
}));
biomarket.projects.home_view = (function biomarket$projects$home_view(_,owner){
if(typeof biomarket.projects.t_biomarket$projects66685 !== 'undefined'){
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
biomarket.projects.t_biomarket$projects66685 = (function (home_view,_,owner,meta66686){
this.home_view = home_view;
this._ = _;
this.owner = owner;
this.meta66686 = meta66686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects66685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66687,meta66686__$1){
var self__ = this;
var _66687__$1 = this;
return (new biomarket.projects.t_biomarket$projects66685(self__.home_view,self__._,self__.owner,meta66686__$1));
});

biomarket.projects.t_biomarket$projects66685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66687){
var self__ = this;
var _66687__$1 = this;
return self__.meta66686;
});

biomarket.projects.t_biomarket$projects66685.prototype.om$core$IInitState$ = true;

biomarket.projects.t_biomarket$projects66685.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"projects","projects",-364845983),false,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Open projects","open"], null),new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active projects","active"], null),new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed projects","completed"], null),new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deleted projects","deleted"], null),new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Expired projects","expired"], null)], null),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Project",((function (___$2){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141),new cljs.core.Keyword(null,"new","new",-2085437848));
});})(___$2))
], null)], null),new cljs.core.Keyword(null,"ut","ut",-719415558),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"update-tag","update-tag",1483190681),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718),cljs.core.async.chan.call(null)], null);
});

biomarket.projects.t_biomarket$projects66685.prototype.om$core$IDidMount$ = true;

biomarket.projects.t_biomarket$projects66685.prototype.om$core$IDidMount$did_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.projectdisplay.navigation_mount.call(null,self__.owner);
});

biomarket.projects.t_biomarket$projects66685.prototype.om$core$IWillUnmount$ = true;

biomarket.projects.t_biomarket$projects66685.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.projectdisplay.navigation_unmount.call(null,self__.owner);
});

biomarket.projects.t_biomarket$projects66685.prototype.om$core$IRenderState$ = true;

biomarket.projects.t_biomarket$projects66685.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__66688){
var self__ = this;
var map__66689 = p__66688;
var map__66689__$1 = ((((!((map__66689 == null)))?((((map__66689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66689):map__66689);
var projects = cljs.core.get.call(null,map__66689__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var view = cljs.core.get.call(null,map__66689__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var views = cljs.core.get.call(null,map__66689__$1,new cljs.core.Keyword(null,"views","views",1450155487));
var ___$2 = this;
return React.DOM.div(null,biomarket.projectdisplay.project_nav.call(null,self__.owner),(cljs.core.truth_(projects)?React.DOM.div({"style": {"padding-top": "10px"}},((cljs.core.seq.call(null,projects))?React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},cljs.core.apply.call(null,om.dom.div,{"className": "col-md-12"},cljs.core.map.call(null,((function (___$2,map__66689,map__66689__$1,projects,view,views){
return (function (p1__66678_SHARP_){
return om.core.build.call(null,biomarket.projectdisplay.project_summary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__66678_SHARP_,view], null));
});})(___$2,map__66689,map__66689__$1,projects,view,views))
,projects)))):React.DOM.div({"style": {"padding-top": "30px", "text-align": "center"}},[cljs.core.str("You have no "),cljs.core.str(cljs.core.second.call(null,view.call(null,views))),cljs.core.str(" projects.")].join('')))):om.core.build.call(null,biomarket.utilities.waiting,null)));
});

biomarket.projects.t_biomarket$projects66685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"home-view","home-view",-289851298,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66686","meta66686",1238562906,null)], null);
});

biomarket.projects.t_biomarket$projects66685.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects66685.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects66685";

biomarket.projects.t_biomarket$projects66685.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.projects/t_biomarket$projects66685");
});

biomarket.projects.__GT_t_biomarket$projects66685 = (function biomarket$projects$home_view_$___GT_t_biomarket$projects66685(home_view__$1,___$1,owner__$1,meta66686){
return (new biomarket.projects.t_biomarket$projects66685(home_view__$1,___$1,owner__$1,meta66686));
});

}

return (new biomarket.projects.t_biomarket$projects66685(biomarket$projects$home_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.projects.projects_view_control = (function biomarket$projects$projects_view_control(_,owner){
if(typeof biomarket.projects.t_biomarket$projects66703 !== 'undefined'){
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
biomarket.projects.t_biomarket$projects66703 = (function (projects_view_control,_,owner,meta66704){
this.projects_view_control = projects_view_control;
this._ = _;
this.owner = owner;
this.meta66704 = meta66704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects66703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66705,meta66704__$1){
var self__ = this;
var _66705__$1 = this;
return (new biomarket.projects.t_biomarket$projects66703(self__.projects_view_control,self__._,self__.owner,meta66704__$1));
});

biomarket.projects.t_biomarket$projects66703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66705){
var self__ = this;
var _66705__$1 = this;
return self__.meta66704;
});

biomarket.projects.t_biomarket$projects66703.prototype.om$core$IInitState$ = true;

biomarket.projects.t_biomarket$projects66703.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"home","home",-74557309)], null);
});

biomarket.projects.t_biomarket$projects66703.prototype.om$core$IWillMount$ = true;

biomarket.projects.t_biomarket$projects66703.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141),((function (___$2){
return (function (o,p__66706){
var map__66707 = p__66706;
var map__66707__$1 = ((((!((map__66707 == null)))?((((map__66707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66707):map__66707);
var data = cljs.core.get.call(null,map__66707__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"current","current",-1088038603),data);
});})(___$2))
);
});

biomarket.projects.t_biomarket$projects66703.prototype.om$core$IWillUnmount$ = true;

biomarket.projects.t_biomarket$projects66703.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141));
});

biomarket.projects.t_biomarket$projects66703.prototype.om$core$IRenderState$ = true;

biomarket.projects.t_biomarket$projects66703.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__66709){
var self__ = this;
var map__66710 = p__66709;
var map__66710__$1 = ((((!((map__66710 == null)))?((((map__66710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66710):map__66710);
var current = cljs.core.get.call(null,map__66710__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var nav = cljs.core.get.call(null,map__66710__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var ___$2 = this;
var pred__66712 = cljs.core._EQ_;
var expr__66713 = current;
if(cljs.core.truth_(pred__66712.call(null,new cljs.core.Keyword(null,"home","home",-74557309),expr__66713))){
return om.core.build.call(null,biomarket.projects.home_view,null);
} else {
if(cljs.core.truth_(pred__66712.call(null,new cljs.core.Keyword(null,"new","new",-2085437848),expr__66713))){
return om.core.build.call(null,biomarket.newproject.new_project_view,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__66713)].join('')));
}
}
});

biomarket.projects.t_biomarket$projects66703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"projects-view-control","projects-view-control",-1753118227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66704","meta66704",-359733163,null)], null);
});

biomarket.projects.t_biomarket$projects66703.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects66703.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects66703";

biomarket.projects.t_biomarket$projects66703.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.projects/t_biomarket$projects66703");
});

biomarket.projects.__GT_t_biomarket$projects66703 = (function biomarket$projects$projects_view_control_$___GT_t_biomarket$projects66703(projects_view_control__$1,___$1,owner__$1,meta66704){
return (new biomarket.projects.t_biomarket$projects66703(projects_view_control__$1,___$1,owner__$1,meta66704));
});

}

return (new biomarket.projects.t_biomarket$projects66703(biomarket$projects$projects_view_control,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=projects.js.map