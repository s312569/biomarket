// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.components');
goog.require('cljs.core');
goog.require('biomarket.utilities');
goog.require('taoensso.sente');
goog.require('ajax.core');
goog.require('om.dom');
goog.require('biomarket.server');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('om.core');
goog.require('clojure.string');
biomarket.components.mark_read = (function biomarket$components$mark_read(unread,dbtag){
if(cljs.core.seq.call(null,unread)){
return biomarket.server.save_data.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),dbtag,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),unread], null)], null),(function (x){
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(x)))){
return window.location = "/error";
} else {
return null;
}
}));
} else {
return null;
}
});
biomarket.components.default_click = (function biomarket$components$default_click(project,tag,owner){
return biomarket.utilities.pub_info.call(null,owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"show-bottom","show-bottom",-1162121528),new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(project),tag))?new cljs.core.Keyword(null,"default","default",-1987822328):tag)], null));
});
biomarket.components.badge = (function biomarket$components$badge(p__131251,owner){
var map__131260 = p__131251;
var map__131260__$1 = ((((!((map__131260 == null)))?((((map__131260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131260):map__131260);
var unread = cljs.core.get.call(null,map__131260__$1,new cljs.core.Keyword(null,"unread","unread",-1950424572));
var dfunc = cljs.core.get.call(null,map__131260__$1,new cljs.core.Keyword(null,"dfunc","dfunc",1344197993));
if(typeof biomarket.components.t_biomarket$components131262 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.components.t_biomarket$components131262 = (function (badge,p__131251,owner,map__131260,unread,dfunc,meta131263){
this.badge = badge;
this.p__131251 = p__131251;
this.owner = owner;
this.map__131260 = map__131260;
this.unread = unread;
this.dfunc = dfunc;
this.meta131263 = meta131263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.components.t_biomarket$components131262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__131260,map__131260__$1,unread,dfunc){
return (function (_131264,meta131263__$1){
var self__ = this;
var _131264__$1 = this;
return (new biomarket.components.t_biomarket$components131262(self__.badge,self__.p__131251,self__.owner,self__.map__131260,self__.unread,self__.dfunc,meta131263__$1));
});})(map__131260,map__131260__$1,unread,dfunc))
;

biomarket.components.t_biomarket$components131262.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__131260,map__131260__$1,unread,dfunc){
return (function (_131264){
var self__ = this;
var _131264__$1 = this;
return self__.meta131263;
});})(map__131260,map__131260__$1,unread,dfunc))
;

biomarket.components.t_biomarket$components131262.prototype.om$core$IInitState$ = true;

biomarket.components.t_biomarket$components131262.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__131260,map__131260__$1,unread,dfunc){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-func","display-func",205562923),self__.dfunc], null);
});})(map__131260,map__131260__$1,unread,dfunc))
;

biomarket.components.t_biomarket$components131262.prototype.om$core$IRenderState$ = true;

biomarket.components.t_biomarket$components131262.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__131260,map__131260__$1,unread,dfunc){
return (function (_,p__131265){
var self__ = this;
var map__131266 = p__131265;
var map__131266__$1 = ((((!((map__131266 == null)))?((((map__131266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131266):map__131266);
var display_func = cljs.core.get.call(null,map__131266__$1,new cljs.core.Keyword(null,"display-func","display-func",205562923));
var ___$1 = this;
var temp__4423__auto__ = self__.dfunc.call(null,self__.unread);
if(cljs.core.truth_(temp__4423__auto__)){
var d = temp__4423__auto__;
return React.DOM.span({"className": "badge", "style": biomarket.utilities.fade_in.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#d43f3a"], null),(2))},d);
} else {
return null;
}
});})(map__131260,map__131260__$1,unread,dfunc))
;

biomarket.components.t_biomarket$components131262.getBasis = ((function (map__131260,map__131260__$1,unread,dfunc){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"badge","badge",362534306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unread","unread",-309893045,null),new cljs.core.Symbol(null,"dfunc","dfunc",-1310237776,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__131251","p__131251",1664347561,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__131260","map__131260",1763919070,null),new cljs.core.Symbol(null,"unread","unread",-309893045,null),new cljs.core.Symbol(null,"dfunc","dfunc",-1310237776,null),new cljs.core.Symbol(null,"meta131263","meta131263",1723999139,null)], null);
});})(map__131260,map__131260__$1,unread,dfunc))
;

biomarket.components.t_biomarket$components131262.cljs$lang$type = true;

biomarket.components.t_biomarket$components131262.cljs$lang$ctorStr = "biomarket.components/t_biomarket$components131262";

biomarket.components.t_biomarket$components131262.cljs$lang$ctorPrWriter = ((function (map__131260,map__131260__$1,unread,dfunc){
return (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.components/t_biomarket$components131262");
});})(map__131260,map__131260__$1,unread,dfunc))
;

biomarket.components.__GT_t_biomarket$components131262 = ((function (map__131260,map__131260__$1,unread,dfunc){
return (function biomarket$components$badge_$___GT_t_biomarket$components131262(badge__$1,p__131251__$1,owner__$1,map__131260__$2,unread__$1,dfunc__$1,meta131263){
return (new biomarket.components.t_biomarket$components131262(badge__$1,p__131251__$1,owner__$1,map__131260__$2,unread__$1,dfunc__$1,meta131263));
});})(map__131260,map__131260__$1,unread,dfunc))
;

}

return (new biomarket.components.t_biomarket$components131262(biomarket$components$badge,p__131251,owner,map__131260__$1,unread,dfunc,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.components.badged_button = (function biomarket$components$badged_button(p__131271,owner){
var map__131287 = p__131271;
var map__131287__$1 = ((((!((map__131287 == null)))?((((map__131287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131287):map__131287);
var visible = cljs.core.get.call(null,map__131287__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var text = cljs.core.get.call(null,map__131287__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var db_unread = cljs.core.get.call(null,map__131287__$1,new cljs.core.Keyword(null,"db-unread","db-unread",1099058015));
var bclick = cljs.core.get.call(null,map__131287__$1,new cljs.core.Keyword(null,"bclick","bclick",1509940070));
var bcast_read = cljs.core.get.call(null,map__131287__$1,new cljs.core.Keyword(null,"bcast-read","bcast-read",1054844552));
var bcast_new = cljs.core.get.call(null,map__131287__$1,new cljs.core.Keyword(null,"bcast-new","bcast-new",-1313872722));
var view_tag = cljs.core.get.call(null,map__131287__$1,new cljs.core.Keyword(null,"view-tag","view-tag",-1197278670));
var db_mark = cljs.core.get.call(null,map__131287__$1,new cljs.core.Keyword(null,"db-mark","db-mark",770252850));
var bclass = cljs.core.get.call(null,map__131287__$1,new cljs.core.Keyword(null,"bclass","bclass",-762241902));
var project = cljs.core.get.call(null,map__131287__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var badges = cljs.core.get.call(null,map__131287__$1,new cljs.core.Keyword(null,"badges","badges",-288609067));
if(typeof biomarket.components.t_biomarket$components131289 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IWillUpdate}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.components.t_biomarket$components131289 = (function (visible,owner,badged_button,text,db_unread,bclick,bcast_read,map__131287,p__131271,bcast_new,view_tag,db_mark,bclass,project,badges,meta131290){
this.visible = visible;
this.owner = owner;
this.badged_button = badged_button;
this.text = text;
this.db_unread = db_unread;
this.bclick = bclick;
this.bcast_read = bcast_read;
this.map__131287 = map__131287;
this.p__131271 = p__131271;
this.bcast_new = bcast_new;
this.view_tag = view_tag;
this.db_mark = db_mark;
this.bclass = bclass;
this.project = project;
this.badges = badges;
this.meta131290 = meta131290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.components.t_biomarket$components131289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges){
return (function (_131291,meta131290__$1){
var self__ = this;
var _131291__$1 = this;
return (new biomarket.components.t_biomarket$components131289(self__.visible,self__.owner,self__.badged_button,self__.text,self__.db_unread,self__.bclick,self__.bcast_read,self__.map__131287,self__.p__131271,self__.bcast_new,self__.view_tag,self__.db_mark,self__.bclass,self__.project,self__.badges,meta131290__$1));
});})(map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges))
;

biomarket.components.t_biomarket$components131289.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges){
return (function (_131291){
var self__ = this;
var _131291__$1 = this;
return self__.meta131290;
});})(map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges))
;

biomarket.components.t_biomarket$components131289.prototype.om$core$IInitState$ = true;

biomarket.components.t_biomarket$components131289.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"unread","unread",-1950424572),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"username","username",1605666410),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pid","pid",1018387698),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project)], null);
});})(map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges))
;

biomarket.components.t_biomarket$components131289.prototype.om$core$IWillMount$ = true;

biomarket.components.t_biomarket$components131289.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges){
return (function (_){
var self__ = this;
var ___$1 = this;
biomarket.server.get_data.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),self__.db_unread,new cljs.core.Keyword(null,"pid","pid",1018387698),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project)], null),((function (___$1,map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges){
return (function (p1__131268_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unread","unread",-1950424572),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__131268_SHARP_));
});})(___$1,map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges))
);

biomarket.server.get_data.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"username","username",1605666410)], null),((function (___$1,map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges){
return (function (p1__131269_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__131269_SHARP_));
});})(___$1,map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges))
);

return cljs.core.map.call(null,((function (___$1,map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges){
return (function (p__131292){
var vec__131293 = p__131292;
var k = cljs.core.nth.call(null,vec__131293,(0),null);
var v = cljs.core.nth.call(null,vec__131293,(1),null);
return biomarket.utilities.register_broadcast_loop.call(null,self__.owner,k,v);
});})(___$1,map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges))
);
});})(map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges))
;

biomarket.components.t_biomarket$components131289.prototype.om$core$IWillUnmount$ = true;

biomarket.components.t_biomarket$components131289.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.map.call(null,((function (___$1,map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges){
return (function (p__131294){
var vec__131295 = p__131294;
var k = cljs.core.nth.call(null,vec__131295,(0),null);
var v = cljs.core.nth.call(null,vec__131295,(1),null);
return biomarket.utilities.unsub_broadcast_loop.call(null,self__.owner,k,v);
});})(___$1,map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges))
);
});})(map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges))
;

biomarket.components.t_biomarket$components131289.prototype.om$core$IWillUpdate$ = true;

biomarket.components.t_biomarket$components131289.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges){
return (function (_,p__131296,ns){
var self__ = this;
var map__131297 = p__131296;
var map__131297__$1 = ((((!((map__131297 == null)))?((((map__131297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131297):map__131297);
var project__$1 = cljs.core.get.call(null,map__131297__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var view_tag__$1 = cljs.core.get.call(null,map__131297__$1,new cljs.core.Keyword(null,"view-tag","view-tag",-1197278670));
var visible__$1 = cljs.core.get.call(null,map__131297__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var ___$1 = this;
if(cljs.core._EQ_.call(null,(function (){var or__25898__auto__ = visible__$1;
if(cljs.core.truth_(or__25898__auto__)){
return or__25898__auto__;
} else {
return new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(project__$1);
}
})(),view_tag__$1)){
return biomarket.components.mark_read.call(null,new cljs.core.Keyword(null,"unread","unread",-1950424572).cljs$core$IFn$_invoke$arity$1(ns),self__.db_mark);
} else {
return null;
}
});})(map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges))
;

biomarket.components.t_biomarket$components131289.prototype.om$core$IRenderState$ = true;

biomarket.components.t_biomarket$components131289.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges){
return (function (_,p__131299){
var self__ = this;
var map__131300 = p__131299;
var map__131300__$1 = ((((!((map__131300 == null)))?((((map__131300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131300):map__131300);
var unread = cljs.core.get.call(null,map__131300__$1,new cljs.core.Keyword(null,"unread","unread",-1950424572));
var ___$1 = this;
var visible__$1 = (function (){var or__25898__auto__ = self__.visible;
if(cljs.core.truth_(or__25898__auto__)){
return or__25898__auto__;
} else {
return new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(self__.project);
}
})();
return React.DOM.a({"className": (function (){var or__25898__auto__ = self__.bclass;
if(cljs.core.truth_(or__25898__auto__)){
return or__25898__auto__;
} else {
if(cljs.core._EQ_.call(null,visible__$1,self__.view_tag)){
return "btn btn-default active";
} else {
return "btn btn-default";
}
}
})(), "onClick": (cljs.core.truth_(self__.bclick)?((function (visible__$1,___$1,map__131300,map__131300__$1,unread,map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges){
return (function (){
self__.bclick.call(null);

return biomarket.components.mark_read.call(null,unread,self__.db_mark);
});})(visible__$1,___$1,map__131300,map__131300__$1,unread,map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges))
:((function (visible__$1,___$1,map__131300,map__131300__$1,unread,map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges){
return (function (){
biomarket.components.default_click.call(null,self__.project,self__.view_tag,self__.owner);

return biomarket.components.mark_read.call(null,unread,self__.db_mark);
});})(visible__$1,___$1,map__131300,map__131300__$1,unread,map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges))
)},[cljs.core.str(self__.text),cljs.core.str(" ")].join(''),((((cljs.core.count.call(null,unread) > (0))) && (!(cljs.core._EQ_.call(null,self__.view_tag,visible__$1))))?((cljs.core.not.call(null,self__.badges))?om.core.build.call(null,biomarket.components.badge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unread","unread",-1950424572),unread,new cljs.core.Keyword(null,"dfunc","dfunc",1344197993),cljs.core.count], null)):cljs.core.apply.call(null,om.dom.span,null,cljs.core.map.call(null,((function (visible__$1,___$1,map__131300,map__131300__$1,unread,map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges){
return (function (p1__131270_SHARP_){
return om.core.build.call(null,biomarket.components.badge,cljs.core.assoc.call(null,p1__131270_SHARP_,new cljs.core.Keyword(null,"unread","unread",-1950424572),unread));
});})(visible__$1,___$1,map__131300,map__131300__$1,unread,map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges))
,self__.badges))):null));
});})(map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges))
;

biomarket.components.t_biomarket$components131289.getBasis = ((function (map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges){
return (function (){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"visible","visible",616314722,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),cljs.core.with_meta(new cljs.core.Symbol(null,"badged-button","badged-button",1345745701,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"view-tag","view-tag",443252857,null),new cljs.core.Symbol(null,"bclass","bclass",878289625,null),new cljs.core.Symbol(null,"bclick","bclick",-1144495699,null),new cljs.core.Symbol(null,"visible","visible",616314722,null),new cljs.core.Symbol(null,"bcast-read","bcast-read",-1599591217,null),new cljs.core.Symbol(null,"bcast-new","bcast-new",326658805,null),new cljs.core.Symbol(null,"db-unread","db-unread",-1555377754,null),new cljs.core.Symbol(null,"db-mark","db-mark",-1884182919,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"badges","badges",1351922460,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"db-unread","db-unread",-1555377754,null),new cljs.core.Symbol(null,"bclick","bclick",-1144495699,null),new cljs.core.Symbol(null,"bcast-read","bcast-read",-1599591217,null),new cljs.core.Symbol(null,"map__131287","map__131287",1998852591,null),new cljs.core.Symbol(null,"p__131271","p__131271",-152796238,null),new cljs.core.Symbol(null,"bcast-new","bcast-new",326658805,null),new cljs.core.Symbol(null,"view-tag","view-tag",443252857,null),new cljs.core.Symbol(null,"db-mark","db-mark",-1884182919,null),new cljs.core.Symbol(null,"bclass","bclass",878289625,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"badges","badges",1351922460,null),new cljs.core.Symbol(null,"meta131290","meta131290",-1409383589,null)], null);
});})(map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges))
;

biomarket.components.t_biomarket$components131289.cljs$lang$type = true;

biomarket.components.t_biomarket$components131289.cljs$lang$ctorStr = "biomarket.components/t_biomarket$components131289";

biomarket.components.t_biomarket$components131289.cljs$lang$ctorPrWriter = ((function (map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges){
return (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.components/t_biomarket$components131289");
});})(map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges))
;

biomarket.components.__GT_t_biomarket$components131289 = ((function (map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges){
return (function biomarket$components$badged_button_$___GT_t_biomarket$components131289(visible__$1,owner__$1,badged_button__$1,text__$1,db_unread__$1,bclick__$1,bcast_read__$1,map__131287__$2,p__131271__$1,bcast_new__$1,view_tag__$1,db_mark__$1,bclass__$1,project__$1,badges__$1,meta131290){
return (new biomarket.components.t_biomarket$components131289(visible__$1,owner__$1,badged_button__$1,text__$1,db_unread__$1,bclick__$1,bcast_read__$1,map__131287__$2,p__131271__$1,bcast_new__$1,view_tag__$1,db_mark__$1,bclass__$1,project__$1,badges__$1,meta131290));
});})(map__131287,map__131287__$1,visible,text,db_unread,bclick,bcast_read,bcast_new,view_tag,db_mark,bclass,project,badges))
;

}

return (new biomarket.components.t_biomarket$components131289(visible,owner,biomarket$components$badged_button,text,db_unread,bclick,bcast_read,map__131287__$1,p__131271,bcast_new,view_tag,db_mark,bclass,project,badges,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.components.bottom_button = (function biomarket$components$bottom_button(p__131302,owner){
var map__131308 = p__131302;
var map__131308__$1 = ((((!((map__131308 == null)))?((((map__131308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131308):map__131308);
var project = cljs.core.get.call(null,map__131308__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var view_tag = cljs.core.get.call(null,map__131308__$1,new cljs.core.Keyword(null,"view-tag","view-tag",-1197278670));
var bclass = cljs.core.get.call(null,map__131308__$1,new cljs.core.Keyword(null,"bclass","bclass",-762241902));
var bclick = cljs.core.get.call(null,map__131308__$1,new cljs.core.Keyword(null,"bclick","bclick",1509940070));
var visible = cljs.core.get.call(null,map__131308__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var text = cljs.core.get.call(null,map__131308__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
if(typeof biomarket.components.t_biomarket$components131310 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.components.t_biomarket$components131310 = (function (bottom_button,visible,owner,text,bclick,p__131302,view_tag,bclass,project,map__131308,meta131311){
this.bottom_button = bottom_button;
this.visible = visible;
this.owner = owner;
this.text = text;
this.bclick = bclick;
this.p__131302 = p__131302;
this.view_tag = view_tag;
this.bclass = bclass;
this.project = project;
this.map__131308 = map__131308;
this.meta131311 = meta131311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.components.t_biomarket$components131310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__131308,map__131308__$1,project,view_tag,bclass,bclick,visible,text){
return (function (_131312,meta131311__$1){
var self__ = this;
var _131312__$1 = this;
return (new biomarket.components.t_biomarket$components131310(self__.bottom_button,self__.visible,self__.owner,self__.text,self__.bclick,self__.p__131302,self__.view_tag,self__.bclass,self__.project,self__.map__131308,meta131311__$1));
});})(map__131308,map__131308__$1,project,view_tag,bclass,bclick,visible,text))
;

biomarket.components.t_biomarket$components131310.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__131308,map__131308__$1,project,view_tag,bclass,bclick,visible,text){
return (function (_131312){
var self__ = this;
var _131312__$1 = this;
return self__.meta131311;
});})(map__131308,map__131308__$1,project,view_tag,bclass,bclick,visible,text))
;

biomarket.components.t_biomarket$components131310.prototype.om$core$IRender$ = true;

biomarket.components.t_biomarket$components131310.prototype.om$core$IRender$render$arity$1 = ((function (map__131308,map__131308__$1,project,view_tag,bclass,bclick,visible,text){
return (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
var visible__$1 = (function (){var or__25898__auto__ = self__.visible;
if(cljs.core.truth_(or__25898__auto__)){
return or__25898__auto__;
} else {
return new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(self__.project);
}
})();
return React.DOM.a({"className": (function (){var or__25898__auto__ = self__.bclass;
if(cljs.core.truth_(or__25898__auto__)){
return or__25898__auto__;
} else {
if(cljs.core._EQ_.call(null,visible__$1,self__.view_tag)){
return "btn btn-default active";
} else {
return "btn btn-default";
}
}
})(), "onClick": (cljs.core.truth_(self__.bclick)?((function (visible__$1,this__28872__auto____$1,map__131308,map__131308__$1,project,view_tag,bclass,bclick,visible,text){
return (function (){
return self__.bclick.call(null);
});})(visible__$1,this__28872__auto____$1,map__131308,map__131308__$1,project,view_tag,bclass,bclick,visible,text))
:((function (visible__$1,this__28872__auto____$1,map__131308,map__131308__$1,project,view_tag,bclass,bclick,visible,text){
return (function (){
return biomarket.components.default_click.call(null,self__.project,self__.view_tag,self__.owner);
});})(visible__$1,this__28872__auto____$1,map__131308,map__131308__$1,project,view_tag,bclass,bclick,visible,text))
)},self__.text);
});})(map__131308,map__131308__$1,project,view_tag,bclass,bclick,visible,text))
;

biomarket.components.t_biomarket$components131310.getBasis = ((function (map__131308,map__131308__$1,project,view_tag,bclass,bclick,visible,text){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bottom-button","bottom-button",-1954371999,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"view-tag","view-tag",443252857,null),new cljs.core.Symbol(null,"bclass","bclass",878289625,null),new cljs.core.Symbol(null,"bclick","bclick",-1144495699,null),new cljs.core.Symbol(null,"visible","visible",616314722,null),new cljs.core.Symbol(null,"text","text",-150030170,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"visible","visible",616314722,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"bclick","bclick",-1144495699,null),new cljs.core.Symbol(null,"p__131302","p__131302",2078320342,null),new cljs.core.Symbol(null,"view-tag","view-tag",443252857,null),new cljs.core.Symbol(null,"bclass","bclass",878289625,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"map__131308","map__131308",282108638,null),new cljs.core.Symbol(null,"meta131311","meta131311",101091473,null)], null);
});})(map__131308,map__131308__$1,project,view_tag,bclass,bclick,visible,text))
;

biomarket.components.t_biomarket$components131310.cljs$lang$type = true;

biomarket.components.t_biomarket$components131310.cljs$lang$ctorStr = "biomarket.components/t_biomarket$components131310";

biomarket.components.t_biomarket$components131310.cljs$lang$ctorPrWriter = ((function (map__131308,map__131308__$1,project,view_tag,bclass,bclick,visible,text){
return (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.components/t_biomarket$components131310");
});})(map__131308,map__131308__$1,project,view_tag,bclass,bclick,visible,text))
;

biomarket.components.__GT_t_biomarket$components131310 = ((function (map__131308,map__131308__$1,project,view_tag,bclass,bclick,visible,text){
return (function biomarket$components$bottom_button_$___GT_t_biomarket$components131310(bottom_button__$1,visible__$1,owner__$1,text__$1,bclick__$1,p__131302__$1,view_tag__$1,bclass__$1,project__$1,map__131308__$2,meta131311){
return (new biomarket.components.t_biomarket$components131310(bottom_button__$1,visible__$1,owner__$1,text__$1,bclick__$1,p__131302__$1,view_tag__$1,bclass__$1,project__$1,map__131308__$2,meta131311));
});})(map__131308,map__131308__$1,project,view_tag,bclass,bclick,visible,text))
;

}

return (new biomarket.components.t_biomarket$components131310(biomarket$components$bottom_button,visible,owner,text,bclick,p__131302,view_tag,bclass,project,map__131308__$1,null));
});

//# sourceMappingURL=components.js.map