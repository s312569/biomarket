// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.server');
goog.require('cljs.core');
goog.require('biomarket.utilities');
goog.require('taoensso.sente');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('clojure.string');
if(typeof biomarket.server.app_state !== 'undefined'){
} else {
biomarket.server.app_state = (function (){var req_chan = cljs.core.async.chan.call(null);
var pub_chan = cljs.core.async.chan.call(null);
var notif_chan = cljs.core.async.pub.call(null,pub_chan,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var map__76569 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));
var map__76569__$1 = ((((!((map__76569 == null)))?((((map__76569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76569):map__76569);
var chsk = cljs.core.get.call(null,map__76569__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv = cljs.core.get.call(null,map__76569__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__76569__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__76569__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"mounted-projects","mounted-projects",-727716340),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"req-chan","req-chan",-35924046),req_chan,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026),notif_chan,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593),pub_chan,new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-chsk","ch-chsk",-1915928982),ch_recv,new cljs.core.Keyword(null,"chsk-send!","chsk-send!",-2123715779),send_fn,new cljs.core.Keyword(null,"chsk-state","chsk-state",1020217391),state], null));
})();
}
if(typeof biomarket.server._event_msg_handler !== 'undefined'){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
biomarket.server._event_msg_handler = (function (){var method_table__26737__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26741__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.server","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26741__auto__,method_table__26737__auto__,prefer_table__26738__auto__,method_cache__26739__auto__,cached_hierarchy__26740__auto__));
})();
}
/**
 * Wraps `-event-msg-handler` with logging, error catching, etc.
 */
biomarket.server.event_msg_handler = (function biomarket$server$event_msg_handler(p__76571){
var map__76574 = p__76571;
var map__76574__$1 = ((((!((map__76574 == null)))?((((map__76574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76574):map__76574);
var ev_msg = map__76574__$1;
var id = cljs.core.get.call(null,map__76574__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__76574__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__76574__$1,new cljs.core.Keyword(null,"event","event",301435442));
return biomarket.server._event_msg_handler.call(null,ev_msg);
});
if(typeof biomarket.server.router_ !== 'undefined'){
} else {
biomarket.server.router_ = cljs.core.atom.call(null,null);
}
biomarket.server.stop_router_BANG_ = (function biomarket$server$stop_router_BANG_(){
var temp__4425__auto__ = cljs.core.deref.call(null,biomarket.server.router_);
if(cljs.core.truth_(temp__4425__auto__)){
var stop_f = temp__4425__auto__;
return stop_f.call(null);
} else {
return null;
}
});
biomarket.server.start_router_BANG_ = (function biomarket$server$start_router_BANG_(){
biomarket.server.stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,biomarket.server.router_,taoensso.sente.start_client_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"ch-chsk","ch-chsk",-1915928982).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,biomarket.server.app_state)),biomarket.server.event_msg_handler));
});
if(typeof biomarket.server._start_once !== 'undefined'){
} else {
biomarket.server._start_once = biomarket.server.start_router_BANG_.call(null);
}
biomarket.server.save_data = (function biomarket$server$save_data(var_args){
var args76576 = [];
var len__26882__auto___76585 = arguments.length;
var i__26883__auto___76586 = (0);
while(true){
if((i__26883__auto___76586 < len__26882__auto___76585)){
args76576.push((arguments[i__26883__auto___76586]));

var G__76587 = (i__26883__auto___76586 + (1));
i__26883__auto___76586 = G__76587;
continue;
} else {
}
break;
}

var G__76578 = args76576.length;
switch (G__76578) {
case 1:
return biomarket.server.save_data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return biomarket.server.save_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76576.length)].join('')));

}
});

biomarket.server.save_data.cljs$core$IFn$_invoke$arity$1 = (function (p__76579){
var map__76580 = p__76579;
var map__76580__$1 = ((((!((map__76580 == null)))?((((map__76580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76580):map__76580);
var m = map__76580__$1;
var type = cljs.core.get.call(null,map__76580__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.call(null,map__76580__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.server.save_data.call(null,m,null);
});

biomarket.server.save_data.cljs$core$IFn$_invoke$arity$2 = (function (p__76582,rf){
var map__76583 = p__76582;
var map__76583__$1 = ((((!((map__76583 == null)))?((((map__76583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76583):map__76583);
var m = map__76583__$1;
var type = cljs.core.get.call(null,map__76583__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.call(null,map__76583__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.Keyword(null,"chsk-send!","chsk-send!",-2123715779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,biomarket.server.app_state)).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("biomarket.server","save","biomarket.server/save",-1884716992),m], null),(5000),rf);
});

biomarket.server.save_data.cljs$lang$maxFixedArity = 2;
biomarket.server.get_data = (function biomarket$server$get_data(owner,p__76589,rf){
var map__76592 = p__76589;
var map__76592__$1 = ((((!((map__76592 == null)))?((((map__76592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76592):map__76592);
var m = map__76592__$1;
var type = cljs.core.get.call(null,map__76592__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.Keyword(null,"chsk-send!","chsk-send!",-2123715779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,biomarket.server.app_state)).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("biomarket.server","get","biomarket.server/get",-2058411624),m], null),(5000),rf);
});
if(typeof biomarket.server.publish_update !== 'undefined'){
} else {
biomarket.server.publish_update = (function (){var method_table__26737__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26741__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.server","publish-update"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26741__auto__,method_table__26737__auto__,prefer_table__26738__auto__,method_cache__26739__auto__,cached_hierarchy__26740__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.server.publish_update,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__76594){
var map__76595 = p__76594;
var map__76595__$1 = ((((!((map__76595 == null)))?((((map__76595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76595):map__76595);
var type = cljs.core.get.call(null,map__76595__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.call(null,map__76595__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.utilities.log.call(null,"Unhandled publish: ",data);
}));
cljs.core._add_method.call(null,biomarket.server.publish_update,new cljs.core.Keyword(null,"project","project",1124394579),(function (p__76597){
var map__76598 = p__76597;
var map__76598__$1 = ((((!((map__76598 == null)))?((((map__76598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76598):map__76598);
var type = cljs.core.get.call(null,map__76598__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.call(null,map__76598__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,biomarket.server.app_state)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data)], null),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}));
cljs.core._add_method.call(null,biomarket.server.publish_update,new cljs.core.Keyword(null,"comment","comment",532206069),(function (p__76600){
var map__76601 = p__76600;
var map__76601__$1 = ((((!((map__76601 == null)))?((((map__76601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76601):map__76601);
var type = cljs.core.get.call(null,map__76601__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.call(null,map__76601__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,biomarket.server.app_state)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(data)], null),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}));
cljs.core._add_method.call(null,biomarket.server.publish_update,new cljs.core.Keyword(null,"amend-project-status","amend-project-status",-1452060792),(function (p__76603){
var map__76604 = p__76603;
var map__76604__$1 = ((((!((map__76604 == null)))?((((map__76604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76604):map__76604);
var type = cljs.core.get.call(null,map__76604__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.call(null,map__76604__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,biomarket.server.app_state)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"amend-project-status","amend-project-status",-1452060792),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}));
if(typeof biomarket.server.dispatch_broadcast !== 'undefined'){
} else {
biomarket.server.dispatch_broadcast = (function (){var method_table__26737__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26741__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.server","dispatch-broadcast"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26741__auto__,method_table__26737__auto__,prefer_table__26738__auto__,method_cache__26739__auto__,cached_hierarchy__26740__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.server.dispatch_broadcast,new cljs.core.Keyword("biomarket.server","update","biomarket.server/update",1566938549),(function (p__76606){
var vec__76607 = p__76606;
var type = cljs.core.nth.call(null,vec__76607,(0),null);
var data = cljs.core.nth.call(null,vec__76607,(1),null);
return biomarket.server.publish_update.call(null,data);
}));
cljs.core._add_method.call(null,biomarket.server.dispatch_broadcast,new cljs.core.Keyword(null,"default","default",-1987822328),(function (recvd){
return biomarket.utilities.log.call(null,"Unhandled dispatch: ",recvd);
}));
cljs.core._add_method.call(null,biomarket.server._event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__76608){
var map__76609 = p__76608;
var map__76609__$1 = ((((!((map__76609 == null)))?((((map__76609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76609):map__76609);
var ev_msg = map__76609__$1;
var event = cljs.core.get.call(null,map__76609__$1,new cljs.core.Keyword(null,"event","event",301435442));
return biomarket.utilities.log.call(null,[cljs.core.str("Unhandled event: "),cljs.core.str(event)].join(''));
}));
cljs.core._add_method.call(null,biomarket.server._event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__76611){
var map__76612 = p__76611;
var map__76612__$1 = ((((!((map__76612 == null)))?((((map__76612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76612):map__76612);
var ev_msg = map__76612__$1;
var _QMARK_data = cljs.core.get.call(null,map__76612__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(_QMARK_data))){
return biomarket.utilities.log.call(null,[cljs.core.str("Channel socket successfully established!: "),cljs.core.str(_QMARK_data)].join(''));
} else {
return biomarket.utilities.log.call(null,[cljs.core.str("Channel socket state change: "),cljs.core.str(_QMARK_data)].join(''));
}
}));
cljs.core._add_method.call(null,biomarket.server._event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__76614){
var map__76615 = p__76614;
var map__76615__$1 = ((((!((map__76615 == null)))?((((map__76615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76615):map__76615);
var ev_msg = map__76615__$1;
var _QMARK_data = cljs.core.get.call(null,map__76615__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return biomarket.server.dispatch_broadcast.call(null,_QMARK_data);
}));
cljs.core._add_method.call(null,biomarket.server._event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__76617){
var map__76618 = p__76617;
var map__76618__$1 = ((((!((map__76618 == null)))?((((map__76618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76618):map__76618);
var ev_msg = map__76618__$1;
var _QMARK_data = cljs.core.get.call(null,map__76618__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__76620 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__76620,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__76620,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__76620,(2),null);
return biomarket.utilities.log.call(null,[cljs.core.str("Handshake: "),cljs.core.str(_QMARK_data)].join(''));
}));

//# sourceMappingURL=server.js.map