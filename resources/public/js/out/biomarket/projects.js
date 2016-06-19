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
if(typeof biomarket.projects.t_biomarket$projects157988 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects157988 = (function (expired_or_deleted,project,meta157989){
this.expired_or_deleted = expired_or_deleted;
this.project = project;
this.meta157989 = meta157989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects157988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_157990,meta157989__$1){
var self__ = this;
var _157990__$1 = this;
return (new biomarket.projects.t_biomarket$projects157988(self__.expired_or_deleted,self__.project,meta157989__$1));
});

biomarket.projects.t_biomarket$projects157988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_157990){
var self__ = this;
var _157990__$1 = this;
return self__.meta157989;
});

biomarket.projects.t_biomarket$projects157988.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects157988.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var best = biomarket.bids.best_bid.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project));
if(cljs.core.truth_(best)){
return biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join(''));
} else {
return biomarket.projectdisplay.label.call(null,"label label-danger","No bids");
}
})());
});

biomarket.projects.t_biomarket$projects157988.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"expired-or-deleted","expired-or-deleted",-713309317,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta157989","meta157989",1865705615,null)], null);
});

biomarket.projects.t_biomarket$projects157988.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects157988.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects157988";

biomarket.projects.t_biomarket$projects157988.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.projects/t_biomarket$projects157988");
});

biomarket.projects.__GT_t_biomarket$projects157988 = (function biomarket$projects$expired_or_deleted_$___GT_t_biomarket$projects157988(expired_or_deleted__$1,project__$1,meta157989){
return (new biomarket.projects.t_biomarket$projects157988(expired_or_deleted__$1,project__$1,meta157989));
});

}

return (new biomarket.projects.t_biomarket$projects157988(biomarket$projects$expired_or_deleted,project,null));
});
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),(function (project){
if(typeof biomarket.projects.t_biomarket$projects157991 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects157991 = (function (project,meta157992){
this.project = project;
this.meta157992 = meta157992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects157991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_157993,meta157992__$1){
var self__ = this;
var _157993__$1 = this;
return (new biomarket.projects.t_biomarket$projects157991(self__.project,meta157992__$1));
});

biomarket.projects.t_biomarket$projects157991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_157993){
var self__ = this;
var _157993__$1 = this;
return self__.meta157992;
});

biomarket.projects.t_biomarket$projects157991.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects157991.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var best = biomarket.bids.best_bid.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project));
if(cljs.core.truth_(best)){
return biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join(''));
} else {
return biomarket.projectdisplay.label.call(null,"label label-danger","No bids yet!");
}
})());
});

biomarket.projects.t_biomarket$projects157991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta157992","meta157992",1741194871,null)], null);
});

biomarket.projects.t_biomarket$projects157991.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects157991.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects157991";

biomarket.projects.t_biomarket$projects157991.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.projects/t_biomarket$projects157991");
});

biomarket.projects.__GT_t_biomarket$projects157991 = (function biomarket$projects$__GT_t_biomarket$projects157991(project__$1,meta157992){
return (new biomarket.projects.t_biomarket$projects157991(project__$1,meta157992));
});

}

return (new biomarket.projects.t_biomarket$projects157991(project,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),(function (p){
if(typeof biomarket.projects.t_biomarket$projects157994 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects157994 = (function (p,meta157995){
this.p = p;
this.meta157995 = meta157995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects157994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_157996,meta157995__$1){
var self__ = this;
var _157996__$1 = this;
return (new biomarket.projects.t_biomarket$projects157994(self__.p,meta157995__$1));
});

biomarket.projects.t_biomarket$projects157994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_157996){
var self__ = this;
var _157996__$1 = this;
return self__.meta157995;
});

biomarket.projects.t_biomarket$projects157994.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects157994.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.div(null);
});

biomarket.projects.t_biomarket$projects157994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"meta157995","meta157995",-1903923629,null)], null);
});

biomarket.projects.t_biomarket$projects157994.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects157994.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects157994";

biomarket.projects.t_biomarket$projects157994.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.projects/t_biomarket$projects157994");
});

biomarket.projects.__GT_t_biomarket$projects157994 = (function biomarket$projects$__GT_t_biomarket$projects157994(p__$1,meta157995){
return (new biomarket.projects.t_biomarket$projects157994(p__$1,meta157995));
});

}

return (new biomarket.projects.t_biomarket$projects157994(p,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),(function (p){
if(typeof biomarket.projects.t_biomarket$projects157997 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects157997 = (function (p,meta157998){
this.p = p;
this.meta157998 = meta157998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects157997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_157999,meta157998__$1){
var self__ = this;
var _157999__$1 = this;
return (new biomarket.projects.t_biomarket$projects157997(self__.p,meta157998__$1));
});

biomarket.projects.t_biomarket$projects157997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_157999){
var self__ = this;
var _157999__$1 = this;
return self__.meta157998;
});

biomarket.projects.t_biomarket$projects157997.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects157997.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.div(null);
});

biomarket.projects.t_biomarket$projects157997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"meta157998","meta157998",-286288675,null)], null);
});

biomarket.projects.t_biomarket$projects157997.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects157997.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects157997";

biomarket.projects.t_biomarket$projects157997.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.projects/t_biomarket$projects157997");
});

biomarket.projects.__GT_t_biomarket$projects157997 = (function biomarket$projects$__GT_t_biomarket$projects157997(p__$1,meta157998){
return (new biomarket.projects.t_biomarket$projects157997(p__$1,meta157998));
});

}

return (new biomarket.projects.t_biomarket$projects157997(p,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533),(function (project){
return biomarket.projects.expired_or_deleted.call(null,project);
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),(function (project){
return biomarket.projects.expired_or_deleted.call(null,project);
}));
biomarket.projects.default_bottom = (function biomarket$projects$default_bottom(p,owner){
if(typeof biomarket.projects.t_biomarket$projects158003 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects158003 = (function (default_bottom,p,owner,meta158004){
this.default_bottom = default_bottom;
this.p = p;
this.owner = owner;
this.meta158004 = meta158004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects158003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_158005,meta158004__$1){
var self__ = this;
var _158005__$1 = this;
return (new biomarket.projects.t_biomarket$projects158003(self__.default_bottom,self__.p,self__.owner,meta158004__$1));
});

biomarket.projects.t_biomarket$projects158003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_158005){
var self__ = this;
var _158005__$1 = this;
return self__.meta158004;
});

biomarket.projects.t_biomarket$projects158003.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects158003.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.p))){
return React.DOM.div(null,React.DOM.hr(null),om.core.build.call(null,biomarket.projectdisplay.bottom_skel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.bid_bbutton,biomarket.projectdisplay.bbutton_state.call(null,self__.owner,self__.p,new cljs.core.Keyword(null,"bids","bids",-1493194652))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.bid_manage,self__.p], null)], null)], null),null,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(self__.p)], null)));
} else {
return null;
}
});

biomarket.projects.t_biomarket$projects158003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"default-bottom","default-bottom",-692683031,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta158004","meta158004",-979107756,null)], null);
});

biomarket.projects.t_biomarket$projects158003.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects158003.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects158003";

biomarket.projects.t_biomarket$projects158003.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.projects/t_biomarket$projects158003");
});

biomarket.projects.__GT_t_biomarket$projects158003 = (function biomarket$projects$default_bottom_$___GT_t_biomarket$projects158003(default_bottom__$1,p__$1,owner__$1,meta158004){
return (new biomarket.projects.t_biomarket$projects158003(default_bottom__$1,p__$1,owner__$1,meta158004));
});

}

return (new biomarket.projects.t_biomarket$projects158003(biomarket$projects$default_bottom,p,owner,null));
});
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),(function (p,owner){
if(typeof biomarket.projects.t_biomarket$projects158006 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects158006 = (function (p,owner,meta158007){
this.p = p;
this.owner = owner;
this.meta158007 = meta158007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects158006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_158008,meta158007__$1){
var self__ = this;
var _158008__$1 = this;
return (new biomarket.projects.t_biomarket$projects158006(self__.p,self__.owner,meta158007__$1));
});

biomarket.projects.t_biomarket$projects158006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_158008){
var self__ = this;
var _158008__$1 = this;
return self__.meta158007;
});

biomarket.projects.t_biomarket$projects158006.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects158006.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return om.core.build.call(null,biomarket.projects.default_bottom,self__.p);
});

biomarket.projects.t_biomarket$projects158006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta158007","meta158007",-1639138220,null)], null);
});

biomarket.projects.t_biomarket$projects158006.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects158006.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects158006";

biomarket.projects.t_biomarket$projects158006.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.projects/t_biomarket$projects158006");
});

biomarket.projects.__GT_t_biomarket$projects158006 = (function biomarket$projects$__GT_t_biomarket$projects158006(p__$1,owner__$1,meta158007){
return (new biomarket.projects.t_biomarket$projects158006(p__$1,owner__$1,meta158007));
});

}

return (new biomarket.projects.t_biomarket$projects158006(p,owner,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),(function (p,owner){
return null;
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),(function (p){
return null;
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533),(function (p,owner){
if(typeof biomarket.projects.t_biomarket$projects158009 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects158009 = (function (p,owner,meta158010){
this.p = p;
this.owner = owner;
this.meta158010 = meta158010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects158009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_158011,meta158010__$1){
var self__ = this;
var _158011__$1 = this;
return (new biomarket.projects.t_biomarket$projects158009(self__.p,self__.owner,meta158010__$1));
});

biomarket.projects.t_biomarket$projects158009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_158011){
var self__ = this;
var _158011__$1 = this;
return self__.meta158010;
});

biomarket.projects.t_biomarket$projects158009.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects158009.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return om.core.build.call(null,biomarket.projects.default_bottom,self__.p);
});

biomarket.projects.t_biomarket$projects158009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta158010","meta158010",1772618454,null)], null);
});

biomarket.projects.t_biomarket$projects158009.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects158009.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects158009";

biomarket.projects.t_biomarket$projects158009.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.projects/t_biomarket$projects158009");
});

biomarket.projects.__GT_t_biomarket$projects158009 = (function biomarket$projects$__GT_t_biomarket$projects158009(p__$1,owner__$1,meta158010){
return (new biomarket.projects.t_biomarket$projects158009(p__$1,owner__$1,meta158010));
});

}

return (new biomarket.projects.t_biomarket$projects158009(p,owner,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),(function (p,owner){
if(typeof biomarket.projects.t_biomarket$projects158012 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects158012 = (function (p,owner,meta158013){
this.p = p;
this.owner = owner;
this.meta158013 = meta158013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects158012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_158014,meta158013__$1){
var self__ = this;
var _158014__$1 = this;
return (new biomarket.projects.t_biomarket$projects158012(self__.p,self__.owner,meta158013__$1));
});

biomarket.projects.t_biomarket$projects158012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_158014){
var self__ = this;
var _158014__$1 = this;
return self__.meta158013;
});

biomarket.projects.t_biomarket$projects158012.prototype.om$core$IRender$ = true;

biomarket.projects.t_biomarket$projects158012.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return om.core.build.call(null,biomarket.projects.default_bottom,self__.p);
});

biomarket.projects.t_biomarket$projects158012.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta158013","meta158013",-1307582748,null)], null);
});

biomarket.projects.t_biomarket$projects158012.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects158012.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects158012";

biomarket.projects.t_biomarket$projects158012.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.projects/t_biomarket$projects158012");
});

biomarket.projects.__GT_t_biomarket$projects158012 = (function biomarket$projects$__GT_t_biomarket$projects158012(p__$1,owner__$1,meta158013){
return (new biomarket.projects.t_biomarket$projects158012(p__$1,owner__$1,meta158013));
});

}

return (new biomarket.projects.t_biomarket$projects158012(p,owner,null));
}));
biomarket.projects.home_view = (function biomarket$projects$home_view(_,owner){
if(typeof biomarket.projects.t_biomarket$projects158022 !== 'undefined'){
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
biomarket.projects.t_biomarket$projects158022 = (function (home_view,_,owner,meta158023){
this.home_view = home_view;
this._ = _;
this.owner = owner;
this.meta158023 = meta158023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects158022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_158024,meta158023__$1){
var self__ = this;
var _158024__$1 = this;
return (new biomarket.projects.t_biomarket$projects158022(self__.home_view,self__._,self__.owner,meta158023__$1));
});

biomarket.projects.t_biomarket$projects158022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_158024){
var self__ = this;
var _158024__$1 = this;
return self__.meta158023;
});

biomarket.projects.t_biomarket$projects158022.prototype.om$core$IInitState$ = true;

biomarket.projects.t_biomarket$projects158022.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Open projects","open"], null),new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active projects","active"], null),new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed projects","completed"], null),new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deleted projects","deleted"], null),new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Expired projects","expired"], null)], null),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Project",((function (___$2){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141),new cljs.core.Keyword(null,"new","new",-2085437848));
});})(___$2))
], null)], null),new cljs.core.Keyword(null,"ut","ut",-719415558),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"update-tag","update-tag",1483190681),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718),cljs.core.async.chan.call(null)], null);
});

biomarket.projects.t_biomarket$projects158022.prototype.om$core$IDidMount$ = true;

biomarket.projects.t_biomarket$projects158022.prototype.om$core$IDidMount$did_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.projectdisplay.navigation_mount.call(null,self__.owner);
});

biomarket.projects.t_biomarket$projects158022.prototype.om$core$IWillUnmount$ = true;

biomarket.projects.t_biomarket$projects158022.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.projectdisplay.navigation_unmount.call(null,self__.owner);
});

biomarket.projects.t_biomarket$projects158022.prototype.om$core$IRenderState$ = true;

biomarket.projects.t_biomarket$projects158022.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__158025){
var self__ = this;
var map__158026 = p__158025;
var map__158026__$1 = ((((!((map__158026 == null)))?((((map__158026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__158026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__158026):map__158026);
var projects = cljs.core.get.call(null,map__158026__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var view = cljs.core.get.call(null,map__158026__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var ___$2 = this;
return React.DOM.div(null,biomarket.projectdisplay.project_nav.call(null,self__.owner),React.DOM.div({"style": {"padding-top": "10px"}}),((cljs.core.seq.call(null,projects))?React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},cljs.core.apply.call(null,om.dom.div,{"className": "col-md-12"},cljs.core.map.call(null,((function (___$2,map__158026,map__158026__$1,projects,view){
return (function (p1__158015_SHARP_){
return om.core.build.call(null,biomarket.projectdisplay.project_summary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__158015_SHARP_,view], null));
});})(___$2,map__158026,map__158026__$1,projects,view))
,projects)))):React.DOM.div({"style": {"padding-top": "30px", "text-align": "center"}},[cljs.core.str("You have no "),cljs.core.str(cljs.core.first.call(null,view.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858))))),cljs.core.str(" projects.")].join(''))));
});

biomarket.projects.t_biomarket$projects158022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"home-view","home-view",-289851298,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta158023","meta158023",-200456854,null)], null);
});

biomarket.projects.t_biomarket$projects158022.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects158022.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects158022";

biomarket.projects.t_biomarket$projects158022.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.projects/t_biomarket$projects158022");
});

biomarket.projects.__GT_t_biomarket$projects158022 = (function biomarket$projects$home_view_$___GT_t_biomarket$projects158022(home_view__$1,___$1,owner__$1,meta158023){
return (new biomarket.projects.t_biomarket$projects158022(home_view__$1,___$1,owner__$1,meta158023));
});

}

return (new biomarket.projects.t_biomarket$projects158022(biomarket$projects$home_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.projects.projects_view_control = (function biomarket$projects$projects_view_control(_,owner){
if(typeof biomarket.projects.t_biomarket$projects158040 !== 'undefined'){
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
biomarket.projects.t_biomarket$projects158040 = (function (projects_view_control,_,owner,meta158041){
this.projects_view_control = projects_view_control;
this._ = _;
this.owner = owner;
this.meta158041 = meta158041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects158040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_158042,meta158041__$1){
var self__ = this;
var _158042__$1 = this;
return (new biomarket.projects.t_biomarket$projects158040(self__.projects_view_control,self__._,self__.owner,meta158041__$1));
});

biomarket.projects.t_biomarket$projects158040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_158042){
var self__ = this;
var _158042__$1 = this;
return self__.meta158041;
});

biomarket.projects.t_biomarket$projects158040.prototype.om$core$IInitState$ = true;

biomarket.projects.t_biomarket$projects158040.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"home","home",-74557309)], null);
});

biomarket.projects.t_biomarket$projects158040.prototype.om$core$IWillMount$ = true;

biomarket.projects.t_biomarket$projects158040.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141),((function (___$2){
return (function (o,p__158043){
var map__158044 = p__158043;
var map__158044__$1 = ((((!((map__158044 == null)))?((((map__158044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__158044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__158044):map__158044);
var data = cljs.core.get.call(null,map__158044__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"current","current",-1088038603),data);
});})(___$2))
);
});

biomarket.projects.t_biomarket$projects158040.prototype.om$core$IWillUnmount$ = true;

biomarket.projects.t_biomarket$projects158040.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141));
});

biomarket.projects.t_biomarket$projects158040.prototype.om$core$IRenderState$ = true;

biomarket.projects.t_biomarket$projects158040.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__158046){
var self__ = this;
var map__158047 = p__158046;
var map__158047__$1 = ((((!((map__158047 == null)))?((((map__158047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__158047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__158047):map__158047);
var current = cljs.core.get.call(null,map__158047__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var nav = cljs.core.get.call(null,map__158047__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var ___$2 = this;
var pred__158049 = cljs.core._EQ_;
var expr__158050 = current;
if(cljs.core.truth_(pred__158049.call(null,new cljs.core.Keyword(null,"home","home",-74557309),expr__158050))){
return om.core.build.call(null,biomarket.projects.home_view,null);
} else {
if(cljs.core.truth_(pred__158049.call(null,new cljs.core.Keyword(null,"new","new",-2085437848),expr__158050))){
return om.core.build.call(null,biomarket.newproject.new_project_view,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__158050)].join('')));
}
}
});

biomarket.projects.t_biomarket$projects158040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"projects-view-control","projects-view-control",-1753118227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta158041","meta158041",-175336576,null)], null);
});

biomarket.projects.t_biomarket$projects158040.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects158040.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects158040";

biomarket.projects.t_biomarket$projects158040.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.projects/t_biomarket$projects158040");
});

biomarket.projects.__GT_t_biomarket$projects158040 = (function biomarket$projects$projects_view_control_$___GT_t_biomarket$projects158040(projects_view_control__$1,___$1,owner__$1,meta158041){
return (new biomarket.projects.t_biomarket$projects158040(projects_view_control__$1,___$1,owner__$1,meta158041));
});

}

return (new biomarket.projects.t_biomarket$projects158040(biomarket$projects$projects_view_control,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=projects.js.map