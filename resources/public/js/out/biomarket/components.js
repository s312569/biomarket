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
biomarket.components.badge = (function biomarket$components$badge(p__62360,owner){
var map__62369 = p__62360;
var map__62369__$1 = ((((!((map__62369 == null)))?((((map__62369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62369):map__62369);
var unread = cljs.core.get.call(null,map__62369__$1,new cljs.core.Keyword(null,"unread","unread",-1950424572));
var dfunc = cljs.core.get.call(null,map__62369__$1,new cljs.core.Keyword(null,"dfunc","dfunc",1344197993));
if(typeof biomarket.components.t_biomarket$components62371 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.components.t_biomarket$components62371 = (function (badge,p__62360,owner,map__62369,unread,dfunc,meta62372){
this.badge = badge;
this.p__62360 = p__62360;
this.owner = owner;
this.map__62369 = map__62369;
this.unread = unread;
this.dfunc = dfunc;
this.meta62372 = meta62372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.components.t_biomarket$components62371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__62369,map__62369__$1,unread,dfunc){
return (function (_62373,meta62372__$1){
var self__ = this;
var _62373__$1 = this;
return (new biomarket.components.t_biomarket$components62371(self__.badge,self__.p__62360,self__.owner,self__.map__62369,self__.unread,self__.dfunc,meta62372__$1));
});})(map__62369,map__62369__$1,unread,dfunc))
;

biomarket.components.t_biomarket$components62371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__62369,map__62369__$1,unread,dfunc){
return (function (_62373){
var self__ = this;
var _62373__$1 = this;
return self__.meta62372;
});})(map__62369,map__62369__$1,unread,dfunc))
;

biomarket.components.t_biomarket$components62371.prototype.om$core$IInitState$ = true;

biomarket.components.t_biomarket$components62371.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__62369,map__62369__$1,unread,dfunc){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-func","display-func",205562923),self__.dfunc], null);
});})(map__62369,map__62369__$1,unread,dfunc))
;

biomarket.components.t_biomarket$components62371.prototype.om$core$IRenderState$ = true;

biomarket.components.t_biomarket$components62371.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__62369,map__62369__$1,unread,dfunc){
return (function (_,p__62374){
var self__ = this;
var map__62375 = p__62374;
var map__62375__$1 = ((((!((map__62375 == null)))?((((map__62375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62375):map__62375);
var display_func = cljs.core.get.call(null,map__62375__$1,new cljs.core.Keyword(null,"display-func","display-func",205562923));
var ___$1 = this;
var temp__4423__auto__ = self__.dfunc.call(null,self__.unread);
if(cljs.core.truth_(temp__4423__auto__)){
var d = temp__4423__auto__;
return React.DOM.span({"className": "badge", "style": biomarket.utilities.fade_in.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#d43f3a"], null),(2))},d);
} else {
return null;
}
});})(map__62369,map__62369__$1,unread,dfunc))
;

biomarket.components.t_biomarket$components62371.getBasis = ((function (map__62369,map__62369__$1,unread,dfunc){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"badge","badge",362534306,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unread","unread",-309893045,null),new cljs.core.Symbol(null,"dfunc","dfunc",-1310237776,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__62360","p__62360",-1515542523,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__62369","map__62369",1140349895,null),new cljs.core.Symbol(null,"unread","unread",-309893045,null),new cljs.core.Symbol(null,"dfunc","dfunc",-1310237776,null),new cljs.core.Symbol(null,"meta62372","meta62372",265344584,null)], null);
});})(map__62369,map__62369__$1,unread,dfunc))
;

biomarket.components.t_biomarket$components62371.cljs$lang$type = true;

biomarket.components.t_biomarket$components62371.cljs$lang$ctorStr = "biomarket.components/t_biomarket$components62371";

biomarket.components.t_biomarket$components62371.cljs$lang$ctorPrWriter = ((function (map__62369,map__62369__$1,unread,dfunc){
return (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.components/t_biomarket$components62371");
});})(map__62369,map__62369__$1,unread,dfunc))
;

biomarket.components.__GT_t_biomarket$components62371 = ((function (map__62369,map__62369__$1,unread,dfunc){
return (function biomarket$components$badge_$___GT_t_biomarket$components62371(badge__$1,p__62360__$1,owner__$1,map__62369__$2,unread__$1,dfunc__$1,meta62372){
return (new biomarket.components.t_biomarket$components62371(badge__$1,p__62360__$1,owner__$1,map__62369__$2,unread__$1,dfunc__$1,meta62372));
});})(map__62369,map__62369__$1,unread,dfunc))
;

}

return (new biomarket.components.t_biomarket$components62371(biomarket$components$badge,p__62360,owner,map__62369__$1,unread,dfunc,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.components.badged_button = (function biomarket$components$badged_button(p__62380,owner){
var map__62404 = p__62380;
var map__62404__$1 = ((((!((map__62404 == null)))?((((map__62404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62404):map__62404);
var visible = cljs.core.get.call(null,map__62404__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var text = cljs.core.get.call(null,map__62404__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var db_unread = cljs.core.get.call(null,map__62404__$1,new cljs.core.Keyword(null,"db-unread","db-unread",1099058015));
var bcast = cljs.core.get.call(null,map__62404__$1,new cljs.core.Keyword(null,"bcast","bcast",1374687141));
var bclick = cljs.core.get.call(null,map__62404__$1,new cljs.core.Keyword(null,"bclick","bclick",1509940070));
var view_tag = cljs.core.get.call(null,map__62404__$1,new cljs.core.Keyword(null,"view-tag","view-tag",-1197278670));
var db_mark = cljs.core.get.call(null,map__62404__$1,new cljs.core.Keyword(null,"db-mark","db-mark",770252850));
var bclass = cljs.core.get.call(null,map__62404__$1,new cljs.core.Keyword(null,"bclass","bclass",-762241902));
var project = cljs.core.get.call(null,map__62404__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var sender = cljs.core.get.call(null,map__62404__$1,new cljs.core.Keyword(null,"sender","sender",1557303285));
var badges = cljs.core.get.call(null,map__62404__$1,new cljs.core.Keyword(null,"badges","badges",-288609067));
if(typeof biomarket.components.t_biomarket$components62406 !== 'undefined'){
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
biomarket.components.t_biomarket$components62406 = (function (visible,owner,badged_button,text,db_unread,bcast,bclick,map__62404,p__62380,view_tag,db_mark,bclass,project,sender,badges,meta62407){
this.visible = visible;
this.owner = owner;
this.badged_button = badged_button;
this.text = text;
this.db_unread = db_unread;
this.bcast = bcast;
this.bclick = bclick;
this.map__62404 = map__62404;
this.p__62380 = p__62380;
this.view_tag = view_tag;
this.db_mark = db_mark;
this.bclass = bclass;
this.project = project;
this.sender = sender;
this.badges = badges;
this.meta62407 = meta62407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.components.t_biomarket$components62406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (_62408,meta62407__$1){
var self__ = this;
var _62408__$1 = this;
return (new biomarket.components.t_biomarket$components62406(self__.visible,self__.owner,self__.badged_button,self__.text,self__.db_unread,self__.bcast,self__.bclick,self__.map__62404,self__.p__62380,self__.view_tag,self__.db_mark,self__.bclass,self__.project,self__.sender,self__.badges,meta62407__$1));
});})(map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
;

biomarket.components.t_biomarket$components62406.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (_62408){
var self__ = this;
var _62408__$1 = this;
return self__.meta62407;
});})(map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
;

biomarket.components.t_biomarket$components62406.prototype.om$core$IInitState$ = true;

biomarket.components.t_biomarket$components62406.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"unread","unread",-1950424572),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"username","username",1605666410),null,new cljs.core.Keyword(null,"sender","sender",1557303285),self__.sender,new cljs.core.Keyword(null,"pid","pid",1018387698),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project)], null);
});})(map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
;

biomarket.components.t_biomarket$components62406.prototype.om$core$IWillMount$ = true;

biomarket.components.t_biomarket$components62406.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (_){
var self__ = this;
var ___$1 = this;
biomarket.server.get_data.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),self__.db_unread,new cljs.core.Keyword(null,"pid","pid",1018387698),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),new cljs.core.Keyword(null,"sender","sender",1557303285),self__.sender], null),((function (___$1,map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (p1__62377_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"unread","unread",-1950424572),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__62377_SHARP_));
});})(___$1,map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
);

biomarket.server.get_data.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"username","username",1605666410)], null),((function (___$1,map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (p1__62378_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__62378_SHARP_));
});})(___$1,map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
);

var seq__62409 = cljs.core.seq.call(null,self__.bcast);
var chunk__62410 = null;
var count__62411 = (0);
var i__62412 = (0);
while(true){
if((i__62412 < count__62411)){
var vec__62413 = cljs.core._nth.call(null,chunk__62410,i__62412);
var tag = cljs.core.nth.call(null,vec__62413,(0),null);
var c = cljs.core.nth.call(null,vec__62413,(1),null);
biomarket.utilities.register_broadcast_loop.call(null,self__.owner,tag,c);

var G__62427 = seq__62409;
var G__62428 = chunk__62410;
var G__62429 = count__62411;
var G__62430 = (i__62412 + (1));
seq__62409 = G__62427;
chunk__62410 = G__62428;
count__62411 = G__62429;
i__62412 = G__62430;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__62409);
if(temp__4425__auto__){
var seq__62409__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62409__$1)){
var c__26722__auto__ = cljs.core.chunk_first.call(null,seq__62409__$1);
var G__62431 = cljs.core.chunk_rest.call(null,seq__62409__$1);
var G__62432 = c__26722__auto__;
var G__62433 = cljs.core.count.call(null,c__26722__auto__);
var G__62434 = (0);
seq__62409 = G__62431;
chunk__62410 = G__62432;
count__62411 = G__62433;
i__62412 = G__62434;
continue;
} else {
var vec__62414 = cljs.core.first.call(null,seq__62409__$1);
var tag = cljs.core.nth.call(null,vec__62414,(0),null);
var c = cljs.core.nth.call(null,vec__62414,(1),null);
biomarket.utilities.register_broadcast_loop.call(null,self__.owner,tag,c);

var G__62435 = cljs.core.next.call(null,seq__62409__$1);
var G__62436 = null;
var G__62437 = (0);
var G__62438 = (0);
seq__62409 = G__62435;
chunk__62410 = G__62436;
count__62411 = G__62437;
i__62412 = G__62438;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
;

biomarket.components.t_biomarket$components62406.prototype.om$core$IWillUnmount$ = true;

biomarket.components.t_biomarket$components62406.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (_){
var self__ = this;
var ___$1 = this;
var seq__62415 = cljs.core.seq.call(null,self__.bcast);
var chunk__62416 = null;
var count__62417 = (0);
var i__62418 = (0);
while(true){
if((i__62418 < count__62417)){
var vec__62419 = cljs.core._nth.call(null,chunk__62416,i__62418);
var tag = cljs.core.nth.call(null,vec__62419,(0),null);
var c = cljs.core.nth.call(null,vec__62419,(1),null);
biomarket.utilities.unsub_broadcast_loop.call(null,self__.owner,tag,c);

var G__62439 = seq__62415;
var G__62440 = chunk__62416;
var G__62441 = count__62417;
var G__62442 = (i__62418 + (1));
seq__62415 = G__62439;
chunk__62416 = G__62440;
count__62417 = G__62441;
i__62418 = G__62442;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__62415);
if(temp__4425__auto__){
var seq__62415__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62415__$1)){
var c__26722__auto__ = cljs.core.chunk_first.call(null,seq__62415__$1);
var G__62443 = cljs.core.chunk_rest.call(null,seq__62415__$1);
var G__62444 = c__26722__auto__;
var G__62445 = cljs.core.count.call(null,c__26722__auto__);
var G__62446 = (0);
seq__62415 = G__62443;
chunk__62416 = G__62444;
count__62417 = G__62445;
i__62418 = G__62446;
continue;
} else {
var vec__62420 = cljs.core.first.call(null,seq__62415__$1);
var tag = cljs.core.nth.call(null,vec__62420,(0),null);
var c = cljs.core.nth.call(null,vec__62420,(1),null);
biomarket.utilities.unsub_broadcast_loop.call(null,self__.owner,tag,c);

var G__62447 = cljs.core.next.call(null,seq__62415__$1);
var G__62448 = null;
var G__62449 = (0);
var G__62450 = (0);
seq__62415 = G__62447;
chunk__62416 = G__62448;
count__62417 = G__62449;
i__62418 = G__62450;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
;

biomarket.components.t_biomarket$components62406.prototype.om$core$IWillUpdate$ = true;

biomarket.components.t_biomarket$components62406.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (_,p__62421,ns){
var self__ = this;
var map__62422 = p__62421;
var map__62422__$1 = ((((!((map__62422 == null)))?((((map__62422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62422):map__62422);
var project__$1 = cljs.core.get.call(null,map__62422__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var view_tag__$1 = cljs.core.get.call(null,map__62422__$1,new cljs.core.Keyword(null,"view-tag","view-tag",-1197278670));
var visible__$1 = cljs.core.get.call(null,map__62422__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var ___$1 = this;
if(cljs.core._EQ_.call(null,(function (){var or__25911__auto__ = visible__$1;
if(cljs.core.truth_(or__25911__auto__)){
return or__25911__auto__;
} else {
return new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(project__$1);
}
})(),view_tag__$1)){
return biomarket.components.mark_read.call(null,new cljs.core.Keyword(null,"unread","unread",-1950424572).cljs$core$IFn$_invoke$arity$1(ns),self__.db_mark);
} else {
return null;
}
});})(map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
;

biomarket.components.t_biomarket$components62406.prototype.om$core$IRenderState$ = true;

biomarket.components.t_biomarket$components62406.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (_,p__62424){
var self__ = this;
var map__62425 = p__62424;
var map__62425__$1 = ((((!((map__62425 == null)))?((((map__62425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62425):map__62425);
var unread = cljs.core.get.call(null,map__62425__$1,new cljs.core.Keyword(null,"unread","unread",-1950424572));
var ___$1 = this;
var visible__$1 = (function (){var or__25911__auto__ = self__.visible;
if(cljs.core.truth_(or__25911__auto__)){
return or__25911__auto__;
} else {
return new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(self__.project);
}
})();
return React.DOM.a({"className": (function (){var or__25911__auto__ = self__.bclass;
if(cljs.core.truth_(or__25911__auto__)){
return or__25911__auto__;
} else {
if(cljs.core._EQ_.call(null,visible__$1,self__.view_tag)){
return "btn btn-default active";
} else {
return "btn btn-default";
}
}
})(), "onClick": (cljs.core.truth_(self__.bclick)?((function (visible__$1,___$1,map__62425,map__62425__$1,unread,map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (){
self__.bclick.call(null);

return biomarket.components.mark_read.call(null,unread,self__.db_mark);
});})(visible__$1,___$1,map__62425,map__62425__$1,unread,map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
:((function (visible__$1,___$1,map__62425,map__62425__$1,unread,map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (){
biomarket.components.default_click.call(null,self__.project,self__.view_tag,self__.owner);

return biomarket.components.mark_read.call(null,unread,self__.db_mark);
});})(visible__$1,___$1,map__62425,map__62425__$1,unread,map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
)},[cljs.core.str(self__.text),cljs.core.str(" ")].join(''),((((cljs.core.count.call(null,unread) > (0))) && (!(cljs.core._EQ_.call(null,self__.view_tag,visible__$1))))?((cljs.core.not.call(null,self__.badges))?om.core.build.call(null,biomarket.components.badge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unread","unread",-1950424572),unread,new cljs.core.Keyword(null,"dfunc","dfunc",1344197993),cljs.core.count], null)):cljs.core.apply.call(null,om.dom.span,null,cljs.core.map.call(null,((function (visible__$1,___$1,map__62425,map__62425__$1,unread,map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (p1__62379_SHARP_){
return om.core.build.call(null,biomarket.components.badge,cljs.core.assoc.call(null,p1__62379_SHARP_,new cljs.core.Keyword(null,"unread","unread",-1950424572),unread));
});})(visible__$1,___$1,map__62425,map__62425__$1,unread,map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
,self__.badges))):null));
});})(map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
;

biomarket.components.t_biomarket$components62406.getBasis = ((function (map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"visible","visible",616314722,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),cljs.core.with_meta(new cljs.core.Symbol(null,"badged-button","badged-button",1345745701,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"view-tag","view-tag",443252857,null),new cljs.core.Symbol(null,"bclass","bclass",878289625,null),new cljs.core.Symbol(null,"bclick","bclick",-1144495699,null),new cljs.core.Symbol(null,"visible","visible",616314722,null),new cljs.core.Symbol(null,"bcast","bcast",-1279748628,null),new cljs.core.Symbol(null,"db-unread","db-unread",-1555377754,null),new cljs.core.Symbol(null,"db-mark","db-mark",-1884182919,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"badges","badges",1351922460,null),new cljs.core.Symbol(null,"sender","sender",-1097132484,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"db-unread","db-unread",-1555377754,null),new cljs.core.Symbol(null,"bcast","bcast",-1279748628,null),new cljs.core.Symbol(null,"bclick","bclick",-1144495699,null),new cljs.core.Symbol(null,"map__62404","map__62404",752037967,null),new cljs.core.Symbol(null,"p__62380","p__62380",1253814224,null),new cljs.core.Symbol(null,"view-tag","view-tag",443252857,null),new cljs.core.Symbol(null,"db-mark","db-mark",-1884182919,null),new cljs.core.Symbol(null,"bclass","bclass",878289625,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"sender","sender",-1097132484,null),new cljs.core.Symbol(null,"badges","badges",1351922460,null),new cljs.core.Symbol(null,"meta62407","meta62407",200400081,null)], null);
});})(map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
;

biomarket.components.t_biomarket$components62406.cljs$lang$type = true;

biomarket.components.t_biomarket$components62406.cljs$lang$ctorStr = "biomarket.components/t_biomarket$components62406";

biomarket.components.t_biomarket$components62406.cljs$lang$ctorPrWriter = ((function (map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.components/t_biomarket$components62406");
});})(map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
;

biomarket.components.__GT_t_biomarket$components62406 = ((function (map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges){
return (function biomarket$components$badged_button_$___GT_t_biomarket$components62406(visible__$1,owner__$1,badged_button__$1,text__$1,db_unread__$1,bcast__$1,bclick__$1,map__62404__$2,p__62380__$1,view_tag__$1,db_mark__$1,bclass__$1,project__$1,sender__$1,badges__$1,meta62407){
return (new biomarket.components.t_biomarket$components62406(visible__$1,owner__$1,badged_button__$1,text__$1,db_unread__$1,bcast__$1,bclick__$1,map__62404__$2,p__62380__$1,view_tag__$1,db_mark__$1,bclass__$1,project__$1,sender__$1,badges__$1,meta62407));
});})(map__62404,map__62404__$1,visible,text,db_unread,bcast,bclick,view_tag,db_mark,bclass,project,sender,badges))
;

}

return (new biomarket.components.t_biomarket$components62406(visible,owner,biomarket$components$badged_button,text,db_unread,bcast,bclick,map__62404__$1,p__62380,view_tag,db_mark,bclass,project,sender,badges,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.components.bottom_button = (function biomarket$components$bottom_button(p__62451,owner){
var map__62457 = p__62451;
var map__62457__$1 = ((((!((map__62457 == null)))?((((map__62457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62457):map__62457);
var project = cljs.core.get.call(null,map__62457__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var view_tag = cljs.core.get.call(null,map__62457__$1,new cljs.core.Keyword(null,"view-tag","view-tag",-1197278670));
var bclass = cljs.core.get.call(null,map__62457__$1,new cljs.core.Keyword(null,"bclass","bclass",-762241902));
var bclick = cljs.core.get.call(null,map__62457__$1,new cljs.core.Keyword(null,"bclick","bclick",1509940070));
var visible = cljs.core.get.call(null,map__62457__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var text = cljs.core.get.call(null,map__62457__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
if(typeof biomarket.components.t_biomarket$components62459 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.components.t_biomarket$components62459 = (function (p__62451,bottom_button,visible,owner,text,bclick,view_tag,bclass,project,map__62457,meta62460){
this.p__62451 = p__62451;
this.bottom_button = bottom_button;
this.visible = visible;
this.owner = owner;
this.text = text;
this.bclick = bclick;
this.view_tag = view_tag;
this.bclass = bclass;
this.project = project;
this.map__62457 = map__62457;
this.meta62460 = meta62460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.components.t_biomarket$components62459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__62457,map__62457__$1,project,view_tag,bclass,bclick,visible,text){
return (function (_62461,meta62460__$1){
var self__ = this;
var _62461__$1 = this;
return (new biomarket.components.t_biomarket$components62459(self__.p__62451,self__.bottom_button,self__.visible,self__.owner,self__.text,self__.bclick,self__.view_tag,self__.bclass,self__.project,self__.map__62457,meta62460__$1));
});})(map__62457,map__62457__$1,project,view_tag,bclass,bclick,visible,text))
;

biomarket.components.t_biomarket$components62459.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__62457,map__62457__$1,project,view_tag,bclass,bclick,visible,text){
return (function (_62461){
var self__ = this;
var _62461__$1 = this;
return self__.meta62460;
});})(map__62457,map__62457__$1,project,view_tag,bclass,bclick,visible,text))
;

biomarket.components.t_biomarket$components62459.prototype.om$core$IRender$ = true;

biomarket.components.t_biomarket$components62459.prototype.om$core$IRender$render$arity$1 = ((function (map__62457,map__62457__$1,project,view_tag,bclass,bclick,visible,text){
return (function (this__28885__auto__){
var self__ = this;
var this__28885__auto____$1 = this;
var visible__$1 = (function (){var or__25911__auto__ = self__.visible;
if(cljs.core.truth_(or__25911__auto__)){
return or__25911__auto__;
} else {
return new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(self__.project);
}
})();
return React.DOM.a({"className": (function (){var or__25911__auto__ = self__.bclass;
if(cljs.core.truth_(or__25911__auto__)){
return or__25911__auto__;
} else {
if(cljs.core._EQ_.call(null,visible__$1,self__.view_tag)){
return "btn btn-default active";
} else {
return "btn btn-default";
}
}
})(), "onClick": (cljs.core.truth_(self__.bclick)?((function (visible__$1,this__28885__auto____$1,map__62457,map__62457__$1,project,view_tag,bclass,bclick,visible,text){
return (function (){
return self__.bclick.call(null);
});})(visible__$1,this__28885__auto____$1,map__62457,map__62457__$1,project,view_tag,bclass,bclick,visible,text))
:((function (visible__$1,this__28885__auto____$1,map__62457,map__62457__$1,project,view_tag,bclass,bclick,visible,text){
return (function (){
return biomarket.components.default_click.call(null,self__.project,self__.view_tag,self__.owner);
});})(visible__$1,this__28885__auto____$1,map__62457,map__62457__$1,project,view_tag,bclass,bclick,visible,text))
)},self__.text);
});})(map__62457,map__62457__$1,project,view_tag,bclass,bclick,visible,text))
;

biomarket.components.t_biomarket$components62459.getBasis = ((function (map__62457,map__62457__$1,project,view_tag,bclass,bclick,visible,text){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__62451","p__62451",1790509377,null),cljs.core.with_meta(new cljs.core.Symbol(null,"bottom-button","bottom-button",-1954371999,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"view-tag","view-tag",443252857,null),new cljs.core.Symbol(null,"bclass","bclass",878289625,null),new cljs.core.Symbol(null,"bclick","bclick",-1144495699,null),new cljs.core.Symbol(null,"visible","visible",616314722,null),new cljs.core.Symbol(null,"text","text",-150030170,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"visible","visible",616314722,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"bclick","bclick",-1144495699,null),new cljs.core.Symbol(null,"view-tag","view-tag",443252857,null),new cljs.core.Symbol(null,"bclass","bclass",878289625,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"map__62457","map__62457",388825599,null),new cljs.core.Symbol(null,"meta62460","meta62460",-46169142,null)], null);
});})(map__62457,map__62457__$1,project,view_tag,bclass,bclick,visible,text))
;

biomarket.components.t_biomarket$components62459.cljs$lang$type = true;

biomarket.components.t_biomarket$components62459.cljs$lang$ctorStr = "biomarket.components/t_biomarket$components62459";

biomarket.components.t_biomarket$components62459.cljs$lang$ctorPrWriter = ((function (map__62457,map__62457__$1,project,view_tag,bclass,bclick,visible,text){
return (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.components/t_biomarket$components62459");
});})(map__62457,map__62457__$1,project,view_tag,bclass,bclick,visible,text))
;

biomarket.components.__GT_t_biomarket$components62459 = ((function (map__62457,map__62457__$1,project,view_tag,bclass,bclick,visible,text){
return (function biomarket$components$bottom_button_$___GT_t_biomarket$components62459(p__62451__$1,bottom_button__$1,visible__$1,owner__$1,text__$1,bclick__$1,view_tag__$1,bclass__$1,project__$1,map__62457__$2,meta62460){
return (new biomarket.components.t_biomarket$components62459(p__62451__$1,bottom_button__$1,visible__$1,owner__$1,text__$1,bclick__$1,view_tag__$1,bclass__$1,project__$1,map__62457__$2,meta62460));
});})(map__62457,map__62457__$1,project,view_tag,bclass,bclick,visible,text))
;

}

return (new biomarket.components.t_biomarket$components62459(p__62451,biomarket$components$bottom_button,visible,owner,text,bclick,view_tag,bclass,project,map__62457__$1,null));
});

//# sourceMappingURL=components.js.map