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
var map__42668 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));
var map__42668__$1 = ((((!((map__42668 == null)))?((((map__42668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42668):map__42668);
var chsk = cljs.core.get.call(null,map__42668__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv = cljs.core.get.call(null,map__42668__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__42668__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__42668__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"mounted-projects","mounted-projects",-727716340),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"req-chan","req-chan",-35924046),req_chan,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026),notif_chan,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593),pub_chan,new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-chsk","ch-chsk",-1915928982),ch_recv,new cljs.core.Keyword(null,"chsk-send!","chsk-send!",-2123715779),send_fn,new cljs.core.Keyword(null,"chsk-state","chsk-state",1020217391),state], null));
})();
}
if(typeof biomarket.server._event_msg_handler !== 'undefined'){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
biomarket.server._event_msg_handler = (function (){var method_table__26793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26796__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26797__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.server","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26797__auto__,method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__));
})();
}
/**
 * Wraps `-event-msg-handler` with logging, error catching, etc.
 */
biomarket.server.event_msg_handler = (function biomarket$server$event_msg_handler(p__42670){
var map__42673 = p__42670;
var map__42673__$1 = ((((!((map__42673 == null)))?((((map__42673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42673):map__42673);
var ev_msg = map__42673__$1;
var id = cljs.core.get.call(null,map__42673__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__42673__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__42673__$1,new cljs.core.Keyword(null,"event","event",301435442));
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
var args42675 = [];
var len__26938__auto___42684 = arguments.length;
var i__26939__auto___42685 = (0);
while(true){
if((i__26939__auto___42685 < len__26938__auto___42684)){
args42675.push((arguments[i__26939__auto___42685]));

var G__42686 = (i__26939__auto___42685 + (1));
i__26939__auto___42685 = G__42686;
continue;
} else {
}
break;
}

var G__42677 = args42675.length;
switch (G__42677) {
case 1:
return biomarket.server.save_data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return biomarket.server.save_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42675.length)].join('')));

}
});

biomarket.server.save_data.cljs$core$IFn$_invoke$arity$1 = (function (p__42678){
var map__42679 = p__42678;
var map__42679__$1 = ((((!((map__42679 == null)))?((((map__42679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42679):map__42679);
var m = map__42679__$1;
var type = cljs.core.get.call(null,map__42679__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.call(null,map__42679__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.server.save_data.call(null,m,null);
});

biomarket.server.save_data.cljs$core$IFn$_invoke$arity$2 = (function (p__42681,rf){
var map__42682 = p__42681;
var map__42682__$1 = ((((!((map__42682 == null)))?((((map__42682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42682):map__42682);
var m = map__42682__$1;
var type = cljs.core.get.call(null,map__42682__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.call(null,map__42682__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.Keyword(null,"chsk-send!","chsk-send!",-2123715779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,biomarket.server.app_state)).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("biomarket.server","save","biomarket.server/save",-1884716992),m], null),(5000),rf);
});

biomarket.server.save_data.cljs$lang$maxFixedArity = 2;
biomarket.server.get_data = (function biomarket$server$get_data(owner,p__42688,rf){
var map__42691 = p__42688;
var map__42691__$1 = ((((!((map__42691 == null)))?((((map__42691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42691):map__42691);
var m = map__42691__$1;
var type = cljs.core.get.call(null,map__42691__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.Keyword(null,"chsk-send!","chsk-send!",-2123715779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,biomarket.server.app_state)).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("biomarket.server","get","biomarket.server/get",-2058411624),m], null),(5000),rf);
});
if(typeof biomarket.server.publish_update !== 'undefined'){
} else {
biomarket.server.publish_update = (function (){var method_table__26793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26796__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26797__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.server","publish-update"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26797__auto__,method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.server.publish_update,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__42693){
var map__42694 = p__42693;
var map__42694__$1 = ((((!((map__42694 == null)))?((((map__42694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42694):map__42694);
var type = cljs.core.get.call(null,map__42694__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.call(null,map__42694__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.utilities.log.call(null,"Unhandled publish: ",data);
}));
cljs.core._add_method.call(null,biomarket.server.publish_update,new cljs.core.Keyword(null,"project","project",1124394579),(function (p__42696){
var map__42697 = p__42696;
var map__42697__$1 = ((((!((map__42697 == null)))?((((map__42697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42697):map__42697);
var type = cljs.core.get.call(null,map__42697__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.call(null,map__42697__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,biomarket.server.app_state)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data)], null),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}));
cljs.core._add_method.call(null,biomarket.server.publish_update,new cljs.core.Keyword(null,"comment","comment",532206069),(function (p__42699){
var map__42700 = p__42699;
var map__42700__$1 = ((((!((map__42700 == null)))?((((map__42700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42700):map__42700);
var type = cljs.core.get.call(null,map__42700__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.call(null,map__42700__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,biomarket.server.app_state)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(data)], null),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}));
cljs.core._add_method.call(null,biomarket.server.publish_update,new cljs.core.Keyword(null,"skills","skills",958701426),(function (p__42702){
var map__42703 = p__42702;
var map__42703__$1 = ((((!((map__42703 == null)))?((((map__42703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42703):map__42703);
var type = cljs.core.get.call(null,map__42703__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.call(null,map__42703__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,biomarket.server.app_state)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skills","skills",958701426),new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(data)], null),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.dissoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",-1447769400))], null));
}));
cljs.core._add_method.call(null,biomarket.server.publish_update,new cljs.core.Keyword(null,"amend-project-status","amend-project-status",-1452060792),(function (p__42705){
var map__42706 = p__42705;
var map__42706__$1 = ((((!((map__42706 == null)))?((((map__42706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42706):map__42706);
var type = cljs.core.get.call(null,map__42706__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.call(null,map__42706__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,biomarket.server.app_state)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"amend-project-status","amend-project-status",-1452060792),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}));
if(typeof biomarket.server.dispatch_broadcast !== 'undefined'){
} else {
biomarket.server.dispatch_broadcast = (function (){var method_table__26793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26796__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26797__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.server","dispatch-broadcast"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26797__auto__,method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.server.dispatch_broadcast,new cljs.core.Keyword("biomarket.server","update","biomarket.server/update",1566938549),(function (p__42708){
var vec__42709 = p__42708;
var type = cljs.core.nth.call(null,vec__42709,(0),null);
var data = cljs.core.nth.call(null,vec__42709,(1),null);
return biomarket.server.publish_update.call(null,data);
}));
cljs.core._add_method.call(null,biomarket.server.dispatch_broadcast,new cljs.core.Keyword(null,"default","default",-1987822328),(function (recvd){
return biomarket.utilities.log.call(null,"Unhandled dispatch: ",recvd);
}));
cljs.core._add_method.call(null,biomarket.server._event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__42710){
var map__42711 = p__42710;
var map__42711__$1 = ((((!((map__42711 == null)))?((((map__42711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42711):map__42711);
var ev_msg = map__42711__$1;
var event = cljs.core.get.call(null,map__42711__$1,new cljs.core.Keyword(null,"event","event",301435442));
return biomarket.utilities.log.call(null,[cljs.core.str("Unhandled event: "),cljs.core.str(event)].join(''));
}));
cljs.core._add_method.call(null,biomarket.server._event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__42713){
var map__42714 = p__42713;
var map__42714__$1 = ((((!((map__42714 == null)))?((((map__42714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42714):map__42714);
var ev_msg = map__42714__$1;
var _QMARK_data = cljs.core.get.call(null,map__42714__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(_QMARK_data))){
return biomarket.utilities.log.call(null,[cljs.core.str("Channel socket successfully established!: "),cljs.core.str(_QMARK_data)].join(''));
} else {
return biomarket.utilities.log.call(null,[cljs.core.str("Channel socket state change: "),cljs.core.str(_QMARK_data)].join(''));
}
}));
cljs.core._add_method.call(null,biomarket.server._event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__42716){
var map__42717 = p__42716;
var map__42717__$1 = ((((!((map__42717 == null)))?((((map__42717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42717):map__42717);
var ev_msg = map__42717__$1;
var _QMARK_data = cljs.core.get.call(null,map__42717__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return biomarket.server.dispatch_broadcast.call(null,_QMARK_data);
}));
cljs.core._add_method.call(null,biomarket.server._event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__42719){
var map__42720 = p__42719;
var map__42720__$1 = ((((!((map__42720 == null)))?((((map__42720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42720):map__42720);
var ev_msg = map__42720__$1;
var _QMARK_data = cljs.core.get.call(null,map__42720__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__42722 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__42722,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__42722,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__42722,(2),null);
return biomarket.utilities.log.call(null,[cljs.core.str("Handshake: "),cljs.core.str(_QMARK_data)].join(''));
}));

//# sourceMappingURL=server.js.map