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
biomarket.components.badge = (function biomarket$components$badge(p__119297,owner){
var map__119306 = p__119297;
var map__119306__$1 = ((((!((map__119306 == null)))?((((map__119306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119306):map__119306);
var unread = cljs.core.get.call(null,map__119306__$1,new cljs.core.Keyword(null,"unread","unread",-1950424572));
var dfunc = cljs.core.get.call(null,map__119306__$1,new cljs.core.Keyword(null,"dfunc","dfunc",1344197993));
if(typeof biomarket.components.t_biomarket$components119308 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.components.t_biomarket$components119308 = (function (badge,p__119297,owner,map__119306,unread,dfunc,meta119309){
this.badge = badge;
this.p__119297 = p__119297;
this.owner = owner;
this.map__119306 = map__119306;
this.unread = unread;
this.dfunc = dfunc;
this.meta119309 = meta119309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.components.t_biomarket$components119308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__119306,map__119306__$1,unread,dfunc){
return (function (_119310,meta119309__$1){
var self__ = this;
var _119310__$1 = this;
return (new biomarket.components.t_biomarket$components119308(self__.badge,self__.p__119297,self__.owner,self__.map__119306,self__.unread,self__.dfunc,meta119309__$1));
});})(map__119306,map__119306__$1,unread,dfunc))
;

biomarket.components.t_biomarket$components119308.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__119306,map__119306__$1,unread,dfunc){
return (function (_119310){
var self__ = this;
var _119310__$1 = this;
return self__.meta119309;
});})(map__119306,map__119306__$1,unread,dfunc))
;

biomarket.components.t_biomarket$components119308.prototype.om$core$IInitState$ = true;

biomarket.components.t_biomarket$components119308.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__119306,map__119306__$1,unread,dfunc){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-func","display-func",205562923),self__.dfunc], null);
});})(map__119306,map__119306__$1,unread,dfunc))
;

biomarket.components.t_biomarket$components119308.prototype.om$core$IRenderState$ = true;

biomarket.components.t_biomarket$components119308.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__119306,map__119306__$1,unread,dfunc){
return (function (_,p__119311){
var self__ = this;
var map__119312 = p__119311;
var map__119312__$1 = ((((!((map__119312 == null)))?((((map__119312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119312):map__119312);
var display_func = cljs.core.get.call(null,map__119312__$1,new cljs.core.Keyword(null,"display-func","display-func",205562923));
var ___$1 = this;
var temp__4423__auto__ = self__.dfunc.call(null,self__.unread);
if(cljs.core.truth_(temp__4423__auto__)){
var d = temp__4423__auto__;
return React.DOM.span({"className": "badge", "style": biomarket.utilities.fade_in.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#d43f3a"], null),(2))},d);
} else {
return null;
}
});})(map__119306,map__119306__$1,unread,dfunc))
;

biomarket.components.t_biomarket$components119308.getBasis = ((function (map__119306,map__119306__$1,unread,dfunc){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"badge","badge",362534306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unread","unread",-309893045,null),new cljs.core.Symbol(null,"dfunc","dfunc",-1310237776,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__119297","p__119297",814957245,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__119306","map__119306",222847658,null),new cljs.core.Symbol(null,"unread","unread",-309893045,null),new cljs.core.Symbol(null,"dfunc","dfunc",-1310237776,null),new cljs.core.Symbol(null,"meta119309","meta119309",-1606153598,null)], null);
});})(map__119306,map__119306__$1,unread,dfunc))
;

biomarket.components.t_biomarket$components119308.cljs$lang$type = true;

biomarket.components.t_biomarket$components119308.cljs$lang$ctorStr = "biomarket.components/t_biomarket$components119308";

biomarket.components.t_biomarket$components119308.cljs$lang$ctorPrWriter = ((function (map__119306,map__119306__$1,unread,dfunc){
return (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.components/t_biomarket$components119308");
});})(map__119306,map__119306__$1,unread,dfunc))
;

biomarket.components.__GT_t_biomarket$components119308 = ((function (map__119306,map__119306__$1,unread,dfunc){
return (function biomarket$components$badge_$___GT_t_biomarket$components119308(badge__$1,p__119297__$1,owner__$1,map__119306__$2,unread__$1,dfunc__$1,meta119309){
return (new biomarket.components.t_biomarket$components119308(badge__$1,p__119297__$1,owner__$1,map__119306__$2,unread__$1,dfunc__$1,meta119309));
});})(map__119306,map__119306__$1,unread,dfunc))
;

}

return (new biomarket.components.t_biomarket$components119308(biomarket$components$badge,p__119297,owner,map__119306__$1,unread,dfunc,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.components.badged_button = (function biomarket$components$badged_button(p__119317,owner){
var map__119341 = p__119317;
var map__119341__$1 = ((((!((map__119341 == null)))?((((map__119341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119341):map__119341);
var visible = cljs.core.get.call(null,map__119341__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var text = cljs.core.get.call(null,map__119341__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var db_unread = cljs.core.get.call(null,map__119341__$1,new cljs.core.Keyword(null,"db-unread","db-unread",1099058015));
var bcast = cljs.core.get.call(null,map__119341__$1,new cljs.core.Keyword(null,"bcast","bcast",1374687141));
var bclick = cljs.core.get.call(null,map__119341__$1,new cljs.core.Keyword(null,"bclick","bclick",1509940070));
var view_tag = cljs.core.get.call(null,map__119341__$1,new cljs.core.Keyword(null,"view-tag","view-tag",-1197278670));
var db_mark = cljs.core.get.call(null,map__119341__$1,new cljs.core.Keyword(null,"db-mark","db-mark",770252850));
var bclass = cljs.core.get.call(null,map__119341__$1,new cljs.core.Keyword(null,"bclass","bclass",-762241902));
var project = cljs.core.get.call(null,map__119341__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var sender = cljs.core.get.call(null,map__119341__$1,new cljs.core.Keyword(null,"sender","sender",1557303285));
var badges = cljs.core.get.call(null,map__119341__$1,new cljs.core.Keyword(null,"badges","badges",-288609067));
if(typeof biomarket.components.t_biomarket$components119343 !== 'undefined'){
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
biomarket.components.t_biomarket$components119343 = (function (map__119341,visible,owner,badged_button,text,db_unread,p__119317,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges,meta119344){
this.map__119341 = map__119341;
this.visible = visible;
this.owner = owner;
this.badged_button = badged_button;
this.text = text;
this.db_unread = db_unread;
this.p__119317 = p__119317;
this.bcast = bcast;
this.bclick = bclick;
this.view_tag = view_tag;
this.db_mark = db_mark;
this.bclass = bclass;
this.project = project;
this.sender = sender;
this.badges = badges;
this.meta119344 = meta119344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.components.t_biomarket$components119343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (_119345,meta119344__$1){
var self__ = this;
var _119345__$1 = this;
return (new biomarket.components.t_biomarket$components119343(self__.map__119341,self__.visible,self__.owner,self__.badged_button,self__.text,self__.db_unread,self__.p__119317,self__.bcast,self__.bclick,self__.view_tag,self__.db_mark,self__.bclass,self__.project,self__.sender,self__.badges,meta119344__$1));
});})(map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
;

biomarket.components.t_biomarket$components119343.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (_119345){
var self__ = this;
var _119345__$1 = this;
return self__.meta119344;
});})(map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
;

biomarket.components.t_biomarket$components119343.prototype.om$core$IInitState$ = true;

biomarket.components.t_biomarket$components119343.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"unread","unread",-1950424572),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"username","username",1605666410),null,new cljs.core.Keyword(null,"sender","sender",1557303285),self__.sender,new cljs.core.Keyword(null,"pid","pid",1018387698),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project)], null);
});})(map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
;

biomarket.components.t_biomarket$components119343.prototype.om$core$IWillMount$ = true;

biomarket.components.t_biomarket$components119343.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (_){
var self__ = this;
var ___$1 = this;
biomarket.server.get_data.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),self__.db_unread,new cljs.core.Keyword(null,"pid","pid",1018387698),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),new cljs.core.Keyword(null,"sender","sender",1557303285),self__.sender], null),((function (___$1,map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (p1__119314_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unread","unread",-1950424572),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__119314_SHARP_));
});})(___$1,map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
);

biomarket.server.get_data.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"username","username",1605666410)], null),((function (___$1,map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (p1__119315_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__119315_SHARP_));
});})(___$1,map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
);

var seq__119346 = cljs.core.seq.call(null,self__.bcast);
var chunk__119347 = null;
var count__119348 = (0);
var i__119349 = (0);
while(true){
if((i__119349 < count__119348)){
var vec__119350 = cljs.core._nth.call(null,chunk__119347,i__119349);
var tag = cljs.core.nth.call(null,vec__119350,(0),null);
var c = cljs.core.nth.call(null,vec__119350,(1),null);
biomarket.utilities.register_broadcast_loop.call(null,self__.owner,tag,c);

var G__119364 = seq__119346;
var G__119365 = chunk__119347;
var G__119366 = count__119348;
var G__119367 = (i__119349 + (1));
seq__119346 = G__119364;
chunk__119347 = G__119365;
count__119348 = G__119366;
i__119349 = G__119367;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__119346);
if(temp__4425__auto__){
var seq__119346__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119346__$1)){
var c__26725__auto__ = cljs.core.chunk_first.call(null,seq__119346__$1);
var G__119368 = cljs.core.chunk_rest.call(null,seq__119346__$1);
var G__119369 = c__26725__auto__;
var G__119370 = cljs.core.count.call(null,c__26725__auto__);
var G__119371 = (0);
seq__119346 = G__119368;
chunk__119347 = G__119369;
count__119348 = G__119370;
i__119349 = G__119371;
continue;
} else {
var vec__119351 = cljs.core.first.call(null,seq__119346__$1);
var tag = cljs.core.nth.call(null,vec__119351,(0),null);
var c = cljs.core.nth.call(null,vec__119351,(1),null);
biomarket.utilities.register_broadcast_loop.call(null,self__.owner,tag,c);

var G__119372 = cljs.core.next.call(null,seq__119346__$1);
var G__119373 = null;
var G__119374 = (0);
var G__119375 = (0);
seq__119346 = G__119372;
chunk__119347 = G__119373;
count__119348 = G__119374;
i__119349 = G__119375;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
;

biomarket.components.t_biomarket$components119343.prototype.om$core$IWillUnmount$ = true;

biomarket.components.t_biomarket$components119343.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (_){
var self__ = this;
var ___$1 = this;
var seq__119352 = cljs.core.seq.call(null,self__.bcast);
var chunk__119353 = null;
var count__119354 = (0);
var i__119355 = (0);
while(true){
if((i__119355 < count__119354)){
var vec__119356 = cljs.core._nth.call(null,chunk__119353,i__119355);
var tag = cljs.core.nth.call(null,vec__119356,(0),null);
var c = cljs.core.nth.call(null,vec__119356,(1),null);
biomarket.utilities.unsub_broadcast_loop.call(null,self__.owner,tag,c);

var G__119376 = seq__119352;
var G__119377 = chunk__119353;
var G__119378 = count__119354;
var G__119379 = (i__119355 + (1));
seq__119352 = G__119376;
chunk__119353 = G__119377;
count__119354 = G__119378;
i__119355 = G__119379;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__119352);
if(temp__4425__auto__){
var seq__119352__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119352__$1)){
var c__26725__auto__ = cljs.core.chunk_first.call(null,seq__119352__$1);
var G__119380 = cljs.core.chunk_rest.call(null,seq__119352__$1);
var G__119381 = c__26725__auto__;
var G__119382 = cljs.core.count.call(null,c__26725__auto__);
var G__119383 = (0);
seq__119352 = G__119380;
chunk__119353 = G__119381;
count__119354 = G__119382;
i__119355 = G__119383;
continue;
} else {
var vec__119357 = cljs.core.first.call(null,seq__119352__$1);
var tag = cljs.core.nth.call(null,vec__119357,(0),null);
var c = cljs.core.nth.call(null,vec__119357,(1),null);
biomarket.utilities.unsub_broadcast_loop.call(null,self__.owner,tag,c);

var G__119384 = cljs.core.next.call(null,seq__119352__$1);
var G__119385 = null;
var G__119386 = (0);
var G__119387 = (0);
seq__119352 = G__119384;
chunk__119353 = G__119385;
count__119354 = G__119386;
i__119355 = G__119387;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
;

biomarket.components.t_biomarket$components119343.prototype.om$core$IWillUpdate$ = true;

biomarket.components.t_biomarket$components119343.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (_,p__119358,ns){
var self__ = this;
var map__119359 = p__119358;
var map__119359__$1 = ((((!((map__119359 == null)))?((((map__119359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119359):map__119359);
var project__$1 = cljs.core.get.call(null,map__119359__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var view_tag__$1 = cljs.core.get.call(null,map__119359__$1,new cljs.core.Keyword(null,"view-tag","view-tag",-1197278670));
var visible__$1 = cljs.core.get.call(null,map__119359__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var ___$1 = this;
if(cljs.core._EQ_.call(null,(function (){var or__25914__auto__ = visible__$1;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(project__$1);
}
})(),view_tag__$1)){
return biomarket.components.mark_read.call(null,new cljs.core.Keyword(null,"unread","unread",-1950424572).cljs$core$IFn$_invoke$arity$1(ns),self__.db_mark);
} else {
return null;
}
});})(map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
;

biomarket.components.t_biomarket$components119343.prototype.om$core$IRenderState$ = true;

biomarket.components.t_biomarket$components119343.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (_,p__119361){
var self__ = this;
var map__119362 = p__119361;
var map__119362__$1 = ((((!((map__119362 == null)))?((((map__119362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119362):map__119362);
var unread = cljs.core.get.call(null,map__119362__$1,new cljs.core.Keyword(null,"unread","unread",-1950424572));
var ___$1 = this;
var visible__$1 = (function (){var or__25914__auto__ = self__.visible;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(self__.project);
}
})();
return React.DOM.a({"className": (function (){var or__25914__auto__ = self__.bclass;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
if(cljs.core._EQ_.call(null,visible__$1,self__.view_tag)){
return "btn btn-default active";
} else {
return "btn btn-default";
}
}
})(), "onClick": (cljs.core.truth_(self__.bclick)?((function (visible__$1,___$1,map__119362,map__119362__$1,unread,map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (){
self__.bclick.call(null);

return biomarket.components.mark_read.call(null,unread,self__.db_mark);
});})(visible__$1,___$1,map__119362,map__119362__$1,unread,map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
:((function (visible__$1,___$1,map__119362,map__119362__$1,unread,map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (){
biomarket.components.default_click.call(null,self__.project,self__.view_tag,self__.owner);

return biomarket.components.mark_read.call(null,unread,self__.db_mark);
});})(visible__$1,___$1,map__119362,map__119362__$1,unread,map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
)},[cljs.core.str(self__.text),cljs.core.str(" ")].join(''),((((cljs.core.count.call(null,unread) > (0))) && (!(cljs.core._EQ_.call(null,self__.view_tag,visible__$1))))?((cljs.core.not.call(null,self__.badges))?om.core.build.call(null,biomarket.components.badge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unread","unread",-1950424572),unread,new cljs.core.Keyword(null,"dfunc","dfunc",1344197993),cljs.core.count], null)):cljs.core.apply.call(null,om.dom.span,null,cljs.core.map.call(null,((function (visible__$1,___$1,map__119362,map__119362__$1,unread,map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (p1__119316_SHARP_){
return om.core.build.call(null,biomarket.components.badge,cljs.core.assoc.call(null,p1__119316_SHARP_,new cljs.core.Keyword(null,"unread","unread",-1950424572),unread));
});})(visible__$1,___$1,map__119362,map__119362__$1,unread,map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
,self__.badges))):null));
});})(map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
;

biomarket.components.t_biomarket$components119343.getBasis = ((function (map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map__119341","map__119341",794764770,null),new cljs.core.Symbol(null,"visible","visible",616314722,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),cljs.core.with_meta(new cljs.core.Symbol(null,"badged-button","badged-button",1345745701,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"view-tag","view-tag",443252857,null),new cljs.core.Symbol(null,"bclass","bclass",878289625,null),new cljs.core.Symbol(null,"bclick","bclick",-1144495699,null),new cljs.core.Symbol(null,"visible","visible",616314722,null),new cljs.core.Symbol(null,"bcast","bcast",-1279748628,null),new cljs.core.Symbol(null,"db-unread","db-unread",-1555377754,null),new cljs.core.Symbol(null,"db-mark","db-mark",-1884182919,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"badges","badges",1351922460,null),new cljs.core.Symbol(null,"sender","sender",-1097132484,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"db-unread","db-unread",-1555377754,null),new cljs.core.Symbol(null,"p__119317","p__119317",1138652009,null),new cljs.core.Symbol(null,"bcast","bcast",-1279748628,null),new cljs.core.Symbol(null,"bclick","bclick",-1144495699,null),new cljs.core.Symbol(null,"view-tag","view-tag",443252857,null),new cljs.core.Symbol(null,"db-mark","db-mark",-1884182919,null),new cljs.core.Symbol(null,"bclass","bclass",878289625,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"sender","sender",-1097132484,null),new cljs.core.Symbol(null,"badges","badges",1351922460,null),new cljs.core.Symbol(null,"meta119344","meta119344",-556338089,null)], null);
});})(map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
;

biomarket.components.t_biomarket$components119343.cljs$lang$type = true;

biomarket.components.t_biomarket$components119343.cljs$lang$ctorStr = "biomarket.components/t_biomarket$components119343";

biomarket.components.t_biomarket$components119343.cljs$lang$ctorPrWriter = ((function (map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.components/t_biomarket$components119343");
});})(map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
;

biomarket.components.__GT_t_biomarket$components119343 = ((function (map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function biomarket$components$badged_button_$___GT_t_biomarket$components119343(map__119341__$2,visible__$1,owner__$1,badged_button__$1,text__$1,db_unread__$1,p__119317__$1,bcast__$1,bclick__$1,view_tag__$1,db_mark__$1,bclass__$1,project__$1,sender__$1,badges__$1,meta119344){
return (new biomarket.components.t_biomarket$components119343(map__119341__$2,visible__$1,owner__$1,badged_button__$1,text__$1,db_unread__$1,p__119317__$1,bcast__$1,bclick__$1,view_tag__$1,db_mark__$1,bclass__$1,project__$1,sender__$1,badges__$1,meta119344));
});})(map__119341,map__119341__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
;

}

return (new biomarket.components.t_biomarket$components119343(map__119341__$1,visible,owner,biomarket$components$badged_button,text,db_unread,p__119317,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.components.bottom_button = (function biomarket$components$bottom_button(p__119388,owner){
var map__119394 = p__119388;
var map__119394__$1 = ((((!((map__119394 == null)))?((((map__119394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119394):map__119394);
var project = cljs.core.get.call(null,map__119394__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var view_tag = cljs.core.get.call(null,map__119394__$1,new cljs.core.Keyword(null,"view-tag","view-tag",-1197278670));
var bclass = cljs.core.get.call(null,map__119394__$1,new cljs.core.Keyword(null,"bclass","bclass",-762241902));
var bclick = cljs.core.get.call(null,map__119394__$1,new cljs.core.Keyword(null,"bclick","bclick",1509940070));
var visible = cljs.core.get.call(null,map__119394__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var text = cljs.core.get.call(null,map__119394__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
if(typeof biomarket.components.t_biomarket$components119396 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.components.t_biomarket$components119396 = (function (bottom_button,visible,map__119394,owner,text,p__119388,bclick,view_tag,bclass,project,meta119397){
this.bottom_button = bottom_button;
this.visible = visible;
this.map__119394 = map__119394;
this.owner = owner;
this.text = text;
this.p__119388 = p__119388;
this.bclick = bclick;
this.view_tag = view_tag;
this.bclass = bclass;
this.project = project;
this.meta119397 = meta119397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.components.t_biomarket$components119396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__119394,map__119394__$1,project,view_tag,bclass,bclick,visible,text){
return (function (_119398,meta119397__$1){
var self__ = this;
var _119398__$1 = this;
return (new biomarket.components.t_biomarket$components119396(self__.bottom_button,self__.visible,self__.map__119394,self__.owner,self__.text,self__.p__119388,self__.bclick,self__.view_tag,self__.bclass,self__.project,meta119397__$1));
});})(map__119394,map__119394__$1,project,view_tag,bclass,bclick,visible,text))
;

biomarket.components.t_biomarket$components119396.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__119394,map__119394__$1,project,view_tag,bclass,bclick,visible,text){
return (function (_119398){
var self__ = this;
var _119398__$1 = this;
return self__.meta119397;
});})(map__119394,map__119394__$1,project,view_tag,bclass,bclick,visible,text))
;

biomarket.components.t_biomarket$components119396.prototype.om$core$IRender$ = true;

biomarket.components.t_biomarket$components119396.prototype.om$core$IRender$render$arity$1 = ((function (map__119394,map__119394__$1,project,view_tag,bclass,bclick,visible,text){
return (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
var visible__$1 = (function (){var or__25914__auto__ = self__.visible;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(self__.project);
}
})();
return React.DOM.a({"className": (function (){var or__25914__auto__ = self__.bclass;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
if(cljs.core._EQ_.call(null,visible__$1,self__.view_tag)){
return "btn btn-default active";
} else {
return "btn btn-default";
}
}
})(), "onClick": (cljs.core.truth_(self__.bclick)?((function (visible__$1,this__36859__auto____$1,map__119394,map__119394__$1,project,view_tag,bclass,bclick,visible,text){
return (function (){
return self__.bclick.call(null);
});})(visible__$1,this__36859__auto____$1,map__119394,map__119394__$1,project,view_tag,bclass,bclick,visible,text))
:((function (visible__$1,this__36859__auto____$1,map__119394,map__119394__$1,project,view_tag,bclass,bclick,visible,text){
return (function (){
return biomarket.components.default_click.call(null,self__.project,self__.view_tag,self__.owner);
});})(visible__$1,this__36859__auto____$1,map__119394,map__119394__$1,project,view_tag,bclass,bclick,visible,text))
)},self__.text);
});})(map__119394,map__119394__$1,project,view_tag,bclass,bclick,visible,text))
;

biomarket.components.t_biomarket$components119396.getBasis = ((function (map__119394,map__119394__$1,project,view_tag,bclass,bclick,visible,text){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bottom-button","bottom-button",-1954371999,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"view-tag","view-tag",443252857,null),new cljs.core.Symbol(null,"bclass","bclass",878289625,null),new cljs.core.Symbol(null,"bclick","bclick",-1144495699,null),new cljs.core.Symbol(null,"visible","visible",616314722,null),new cljs.core.Symbol(null,"text","text",-150030170,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"visible","visible",616314722,null),new cljs.core.Symbol(null,"map__119394","map__119394",452173507,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"p__119388","p__119388",971016038,null),new cljs.core.Symbol(null,"bclick","bclick",-1144495699,null),new cljs.core.Symbol(null,"view-tag","view-tag",443252857,null),new cljs.core.Symbol(null,"bclass","bclass",878289625,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta119397","meta119397",-1857857999,null)], null);
});})(map__119394,map__119394__$1,project,view_tag,bclass,bclick,visible,text))
;

biomarket.components.t_biomarket$components119396.cljs$lang$type = true;

biomarket.components.t_biomarket$components119396.cljs$lang$ctorStr = "biomarket.components/t_biomarket$components119396";

biomarket.components.t_biomarket$components119396.cljs$lang$ctorPrWriter = ((function (map__119394,map__119394__$1,project,view_tag,bclass,bclick,visible,text){
return (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.components/t_biomarket$components119396");
});})(map__119394,map__119394__$1,project,view_tag,bclass,bclick,visible,text))
;

biomarket.components.__GT_t_biomarket$components119396 = ((function (map__119394,map__119394__$1,project,view_tag,bclass,bclick,visible,text){
return (function biomarket$components$bottom_button_$___GT_t_biomarket$components119396(bottom_button__$1,visible__$1,map__119394__$2,owner__$1,text__$1,p__119388__$1,bclick__$1,view_tag__$1,bclass__$1,project__$1,meta119397){
return (new biomarket.components.t_biomarket$components119396(bottom_button__$1,visible__$1,map__119394__$2,owner__$1,text__$1,p__119388__$1,bclick__$1,view_tag__$1,bclass__$1,project__$1,meta119397));
});})(map__119394,map__119394__$1,project,view_tag,bclass,bclick,visible,text))
;

}

return (new biomarket.components.t_biomarket$components119396(biomarket$components$bottom_button,visible,map__119394__$1,owner,text,p__119388,bclick,view_tag,bclass,project,null));
});
biomarket.components.progress = (function biomarket$components$progress(time,owner){
if(typeof biomarket.components.t_biomarket$components119405 !== 'undefined'){
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
biomarket.components.t_biomarket$components119405 = (function (progress,time,owner,meta119406){
this.progress = progress;
this.time = time;
this.owner = owner;
this.meta119406 = meta119406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.components.t_biomarket$components119405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119407,meta119406__$1){
var self__ = this;
var _119407__$1 = this;
return (new biomarket.components.t_biomarket$components119405(self__.progress,self__.time,self__.owner,meta119406__$1));
});

biomarket.components.t_biomarket$components119405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119407){
var self__ = this;
var _119407__$1 = this;
return self__.meta119406;
});

biomarket.components.t_biomarket$components119405.prototype.om$core$IInitState$ = true;

biomarket.components.t_biomarket$components119405.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"progress","progress",244323547),(0),new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.gensym.call(null)], null);
});

biomarket.components.t_biomarket$components119405.prototype.om$core$IWillMount$ = true;

biomarket.components.t_biomarket$components119405.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword(null,"progress","progress",244323547),((function (___$1){
return (function (o,d){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"progress","progress",244323547),(1.5 + om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"progress","progress",244323547))));
});})(___$1))
);
});

biomarket.components.t_biomarket$components119405.prototype.om$core$IWillUnmount$ = true;

biomarket.components.t_biomarket$components119405.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword(null,"progress","progress",244323547));
});

biomarket.components.t_biomarket$components119405.prototype.om$core$IRenderState$ = true;

biomarket.components.t_biomarket$components119405.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__119408){
var self__ = this;
var map__119409 = p__119408;
var map__119409__$1 = ((((!((map__119409 == null)))?((((map__119409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119409):map__119409);
var progress__$1 = cljs.core.get.call(null,map__119409__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var ___$1 = this;
return React.DOM.div({"className": "progress"},React.DOM.div({"className": "progress-bar", "role": "progressbar", "aria-valuenow": [cljs.core.str(progress__$1)].join(''), "aria-valuemin": "0", "aria-valuemax": "100", "style": {"width": [cljs.core.str(progress__$1),cljs.core.str("%")].join('')}}));
});

biomarket.components.t_biomarket$components119405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"progress","progress",1884855074,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta119406","meta119406",1171436525,null)], null);
});

biomarket.components.t_biomarket$components119405.cljs$lang$type = true;

biomarket.components.t_biomarket$components119405.cljs$lang$ctorStr = "biomarket.components/t_biomarket$components119405";

biomarket.components.t_biomarket$components119405.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.components/t_biomarket$components119405");
});

biomarket.components.__GT_t_biomarket$components119405 = (function biomarket$components$progress_$___GT_t_biomarket$components119405(progress__$1,time__$1,owner__$1,meta119406){
return (new biomarket.components.t_biomarket$components119405(progress__$1,time__$1,owner__$1,meta119406));
});

}

return (new biomarket.components.t_biomarket$components119405(biomarket$components$progress,time,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.components.alert_class = (function biomarket$components$alert_class(type){
var pred__119414 = cljs.core._EQ_;
var expr__119415 = type;
if(cljs.core.truth_(pred__119414.call(null,new cljs.core.Keyword(null,"success","success",1890645906),expr__119415))){
return "alert alert-success";
} else {
if(cljs.core.truth_(pred__119414.call(null,new cljs.core.Keyword(null,"warning","warning",-1685650671),expr__119415))){
return "alert alert-warning";
} else {
if(cljs.core.truth_(pred__119414.call(null,new cljs.core.Keyword(null,"danger","danger",-624338030),expr__119415))){
return "alert alert-danger";
} else {
if(cljs.core.truth_(pred__119414.call(null,new cljs.core.Keyword(null,"info","info",-317069002),expr__119415))){
return "alert alert-info";
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__119415)].join('')));
}
}
}
}
});
biomarket.components.alert = (function biomarket$components$alert(p__119417,owner){
var map__119423 = p__119417;
var map__119423__$1 = ((((!((map__119423 == null)))?((((map__119423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119423):map__119423);
var msg = cljs.core.get.call(null,map__119423__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var type = cljs.core.get.call(null,map__119423__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var pid = cljs.core.get.call(null,map__119423__$1,new cljs.core.Keyword(null,"pid","pid",1018387698));
var dismissable = cljs.core.get.call(null,map__119423__$1,new cljs.core.Keyword(null,"dismissable","dismissable",31036366));
if(typeof biomarket.components.t_biomarket$components119425 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.components.t_biomarket$components119425 = (function (alert,p__119417,owner,map__119423,msg,type,pid,dismissable,meta119426){
this.alert = alert;
this.p__119417 = p__119417;
this.owner = owner;
this.map__119423 = map__119423;
this.msg = msg;
this.type = type;
this.pid = pid;
this.dismissable = dismissable;
this.meta119426 = meta119426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.components.t_biomarket$components119425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__119423,map__119423__$1,msg,type,pid,dismissable){
return (function (_119427,meta119426__$1){
var self__ = this;
var _119427__$1 = this;
return (new biomarket.components.t_biomarket$components119425(self__.alert,self__.p__119417,self__.owner,self__.map__119423,self__.msg,self__.type,self__.pid,self__.dismissable,meta119426__$1));
});})(map__119423,map__119423__$1,msg,type,pid,dismissable))
;

biomarket.components.t_biomarket$components119425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__119423,map__119423__$1,msg,type,pid,dismissable){
return (function (_119427){
var self__ = this;
var _119427__$1 = this;
return self__.meta119426;
});})(map__119423,map__119423__$1,msg,type,pid,dismissable))
;

biomarket.components.t_biomarket$components119425.prototype.om$core$IRender$ = true;

biomarket.components.t_biomarket$components119425.prototype.om$core$IRender$render$arity$1 = ((function (map__119423,map__119423__$1,msg,type,pid,dismissable){
return (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return React.DOM.div({"className": biomarket.components.alert_class.call(null,self__.type), "style": biomarket.utilities.fade_in.call(null)},React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-11"},self__.msg),(cljs.core.truth_(self__.dismissable)?React.DOM.div({"className": "col-md-1", "style": {"text-align": "right"}},React.DOM.i({"className": "fa fa-times", "onClick": ((function (this__36859__auto____$1,map__119423,map__119423__$1,msg,type,pid,dismissable){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alert","alert",-571950580),self__.pid], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"project-alert","project-alert",1640838720),new cljs.core.Keyword(null,"alert","alert",-571950580),false], null));
});})(this__36859__auto____$1,map__119423,map__119423__$1,msg,type,pid,dismissable))
})):React.DOM.div({"className": "col-md-1"},""))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},om.core.build.call(null,biomarket.components.progress,(3000))))));
});})(map__119423,map__119423__$1,msg,type,pid,dismissable))
;

biomarket.components.t_biomarket$components119425.getBasis = ((function (map__119423,map__119423__$1,msg,type,pid,dismissable){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"msg","msg",254428083,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"pid","pid",-1636048071,null),new cljs.core.Symbol(null,"dismissable","dismissable",1671567893,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__119417","p__119417",-1676726637,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__119423","map__119423",1258252731,null),new cljs.core.Symbol(null,"msg","msg",254428083,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"pid","pid",-1636048071,null),new cljs.core.Symbol(null,"dismissable","dismissable",1671567893,null),new cljs.core.Symbol(null,"meta119426","meta119426",-398565523,null)], null);
});})(map__119423,map__119423__$1,msg,type,pid,dismissable))
;

biomarket.components.t_biomarket$components119425.cljs$lang$type = true;

biomarket.components.t_biomarket$components119425.cljs$lang$ctorStr = "biomarket.components/t_biomarket$components119425";

biomarket.components.t_biomarket$components119425.cljs$lang$ctorPrWriter = ((function (map__119423,map__119423__$1,msg,type,pid,dismissable){
return (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.components/t_biomarket$components119425");
});})(map__119423,map__119423__$1,msg,type,pid,dismissable))
;

biomarket.components.__GT_t_biomarket$components119425 = ((function (map__119423,map__119423__$1,msg,type,pid,dismissable){
return (function biomarket$components$alert_$___GT_t_biomarket$components119425(alert__$1,p__119417__$1,owner__$1,map__119423__$2,msg__$1,type__$1,pid__$1,dismissable__$1,meta119426){
return (new biomarket.components.t_biomarket$components119425(alert__$1,p__119417__$1,owner__$1,map__119423__$2,msg__$1,type__$1,pid__$1,dismissable__$1,meta119426));
});})(map__119423,map__119423__$1,msg,type,pid,dismissable))
;

}

return (new biomarket.components.t_biomarket$components119425(biomarket$components$alert,p__119417,owner,map__119423__$1,msg,type,pid,dismissable,null));
});

//# sourceMappingURL=components.js.map