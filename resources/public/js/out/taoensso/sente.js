// Compiled by ClojureScript 1.8.51 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('clojure.string');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(11),(0)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.11);
}
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else {
var vec__28999 = x;
var ev_id = cljs.core.nth.call(null,vec__28999,(0),null);
var _ = cljs.core.nth.call(null,vec__28999,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else {
return null;

}
}

}
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
if(cljs.core.truth_(taoensso.sente.event_QMARK_.call(null,x))){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
}
});
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4425__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4425__auto__)){
var _QMARK_err = temp__4425__auto__;
var err_fmt = [cljs.core.str((function (){var G__29001 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__29001) {
case "wrong-type":
return "Malformed event (wrong type).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "else":
return "Malformed event (unknown error).";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(_QMARK_err)].join('')));

}
})()),cljs.core.str(" Event should be of `[ev-id ?ev-data]` form: %s")].join('');
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,err_fmt,[cljs.core.str(x)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else {
return null;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__25659__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__25659__auto__){
var and__25659__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__25659__auto____$1)){
var map__29005 = x;
var map__29005__$1 = ((((!((map__29005 == null)))?((((map__29005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29005):map__29005);
var ch_recv = cljs.core.get.call(null,map__29005__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__29005__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__29005__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__29005__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__25659__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__25659__auto____$2)){
var and__25659__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__25659__auto____$3){
var and__25659__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(cljs.core.truth_(and__25659__auto____$4)){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__25659__auto____$4;
}
} else {
return and__25659__auto____$3;
}
} else {
return and__25659__auto____$2;
}
} else {
return and__25659__auto____$1;
}
} else {
return and__25659__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__25659__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__25659__auto__){
var and__25659__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__25659__auto____$1)){
var map__29009 = x;
var map__29009__$1 = ((((!((map__29009 == null)))?((((map__29009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29009):map__29009);
var ch_recv = cljs.core.get.call(null,map__29009__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__29009__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__29009__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__29009__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__29009__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__29009__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__29009__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__25659__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__25659__auto____$2)){
var and__25659__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__25659__auto____$3){
var and__25659__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(cljs.core.truth_(and__25659__auto____$4)){
var and__25659__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__25659__auto____$5){
var and__25659__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(cljs.core.truth_(and__25659__auto____$6)){
var and__25659__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__25659__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__25659__auto____$7;
}
} else {
return and__25659__auto____$6;
}
} else {
return and__25659__auto____$5;
}
} else {
return and__25659__auto____$4;
}
} else {
return and__25659__auto____$3;
}
} else {
return and__25659__auto____$2;
}
} else {
return and__25659__auto____$1;
}
} else {
return and__25659__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__29011){
var map__29015 = p__29011;
var map__29015__$1 = ((((!((map__29015 == null)))?((((map__29015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29015):map__29015);
var ev_msg = map__29015__$1;
var event = cljs.core.get.call(null,map__29015__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__29015__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__29017 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__29017,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__29017,(1),null);
var valid_event = vec__29017;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init2176211180087739371.clj",159,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__29017,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__29015,map__29015__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__29017,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__29015,map__29015__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null);
} else {
return cljs.core.async.put_BANG_.call(null,ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,taoensso.sente.cb_error_QMARK_.call(null,cb_reply_clj));
});
/**
 * pstr->clj
 */
taoensso.sente.unpack_STAR_ = (function taoensso$sente$unpack_STAR_(packer,pstr){
try{return taoensso.sente.interfaces.unpack.call(null,packer,(function (){var __x = pstr;
try{if(typeof __x === 'string'){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29021){if((e29021 instanceof Error)){
var __t = e29021;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? pstr)",__x,__t,null);
} else {
throw e29021;

}
}})());
}catch (e29020){var t = e29020;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init2176211180087739371.clj",175,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack_STAR_ = (function taoensso$sente$pack_STAR_(var_args){
var args29022 = [];
var len__26741__auto___29025 = arguments.length;
var i__26742__auto___29026 = (0);
while(true){
if((i__26742__auto___29026 < len__26741__auto___29025)){
args29022.push((arguments[i__26742__auto___29026]));

var G__29027 = (i__26742__auto___29026 + (1));
i__26742__auto___29026 = G__29027;
continue;
} else {
}
break;
}

var G__29024 = args29022.length;
switch (G__29024) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29022.length)].join('')));

}
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
return [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
return [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$lang$maxFixedArity = 4;
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args__26748__auto__ = [];
var len__26741__auto___29030 = arguments.length;
var i__26742__auto___29031 = (0);
while(true){
if((i__26742__auto___29031 < len__26741__auto___29030)){
args__26748__auto__.push((arguments[i__26742__auto___29031]));

var G__29032 = (i__26742__auto___29031 + (1));
i__26742__auto___29031 = G__29032;
continue;
} else {
}
break;
}

var argseq__26749__auto__ = ((((0) < args__26748__auto__.length))?(new cljs.core.IndexedSeq(args__26748__auto__.slice((0)),(0),null)):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__26749__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init2176211180087739371.clj",193,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing: %s -> %s",args,pstr], null);
});})(pstr))
,null)),null);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq29029){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29029));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
var __x_29039 = prefixed_pstr;
try{if(typeof __x_29039 === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29036){if((e29036 instanceof Error)){
var __t_29040 = e29036;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",__x_29039,__t_29040,null);
} else {
throw e29036;

}
}
var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__29038 = prefix;
switch (G__29038) {
case "-":
return false;

break;
case "+":
return true;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(prefix)].join('')));

}
})();
var vec__29037 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__29037,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__29037,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init2176211180087739371.clj",205,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (prefix,pstr,clj,wrapped_QMARK_,vec__29037,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(prefix,pstr,clj,wrapped_QMARK_,vec__29037,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});

/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation (experimental).
 * 
 *   [1] e.g. `taoensso.sente.server-adapters.http-kit/http-kit-adapter` or
 *         `taoensso.sente.server-adapters.immutant/immutant-adapter`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__26748__auto__ = [];
var len__26741__auto___29211 = arguments.length;
var i__26742__auto___29212 = (0);
while(true){
if((i__26742__auto___29212 < len__26741__auto___29211)){
args__26748__auto__.push((arguments[i__26742__auto___29212]));

var G__29213 = (i__26742__auto___29212 + (1));
i__26742__auto___29212 = G__29213;
continue;
} else {
}
break;
}

var argseq__26749__auto__ = ((((1) < args__26748__auto__.length))?(new cljs.core.IndexedSeq(args__26748__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26749__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_adapter,p__29045){
var vec__29046 = p__29045;
var map__29047 = cljs.core.nth.call(null,vec__29046,(0),null);
var map__29047__$1 = ((((!((map__29047 == null)))?((((map__29047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29047):map__29047);
var recv_buf_or_n = cljs.core.get.call(null,map__29047__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__29047__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__29047__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__29047__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__29047__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__25671__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__25671__auto__)){
return or__25671__auto__;
} else {
var or__25671__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__25671__auto____$1)){
return or__25671__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__29047__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__29047__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var __x = send_buf_ms_ajax;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29049){if((e29049 instanceof Error)){
var __t = e29049;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",__x,__t,null);
} else {
throw e29049;

}
}})(),(function (){var __x = send_buf_ms_ws;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29050){if((e29050 instanceof Error)){
var __t = e29050;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",__x,__t,null);
} else {
throw e29050;

}
}})()], null))){
} else {
throw (new Error("Assert failed: (have? enc/pos-int? send-buf-ms-ajax send-buf-ms-ws)"));
}

if(cljs.core.truth_((function (){var __x = web_server_adapter;
try{if(((function (__x,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__29042_SHARP_){
if(!((p1__29042_SHARP_ == null))){
if((false) || (p1__29042_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__29042_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__29042_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__29042_SHARP_);
}
});})(__x,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29051){if((e29051 instanceof Error)){
var __t = e29051;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__29042#] (satisfies? interfaces/IServerChanAdapter p1__29042#)) web-server-adapter)",__x,__t,null);
} else {
throw e29051;

}
}})())){
} else {
throw (new Error("Assert failed: (have? (fn* [p1__29042#] (satisfies? interfaces/IServerChanAdapter p1__29042#)) web-server-adapter)"));
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var user_id_fn__$1 = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__25671__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__25671__auto__)){
return or__25671__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type,uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29053){if((e29053 instanceof Error)){
var __t = e29053;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e29053;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__29054){
var map__29055 = p__29054;
var map__29055__$1 = ((((!((map__29055 == null)))?((((map__29055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29055):map__29055);
var old_m = map__29055__$1;
var ws = cljs.core.get.call(null,map__29055__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__29055__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__29055__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__29057 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29057) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_.call(null,old_any,uid))) && (cljs.core.contains_QMARK_.call(null,new_any,uid))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29058){if((e29058 instanceof Error)){
var __t = e29058;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e29058;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__29059){
var map__29060 = p__29059;
var map__29060__$1 = ((((!((map__29060 == null)))?((((map__29060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29060):map__29060);
var old_m = map__29060__$1;
var ws = cljs.core.get.call(null,map__29060__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__29060__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__29060__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax,uid):cljs.core.disj.call(null,ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_.call(null,old_any,uid)) && (!(cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__29215__delegate = function (user_id,ev,p__29062){
var vec__29063 = p__29062;
var map__29064 = cljs.core.nth.call(null,vec__29063,(0),null);
var map__29064__$1 = ((((!((map__29064 == null)))?((((map__29064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29064):map__29064);
var opts = map__29064__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__29064__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_29216 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __29217 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init2176211180087739371.clj",324,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_29216,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_29216,ev], null);
});})(uid_29216,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var __29218__$1 = (cljs.core.truth_(uid_29216)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __29219__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_29220 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__29221 = ((function (uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type){
var temp__4425__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),((function (uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__29066 = cljs.core.get.call(null,m,uid_29216);
var ___$3 = cljs.core.nth.call(null,vec__29066,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__29066,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_29220)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_29216),cljs.core.get.call(null,m,uid_29216));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4425__auto__)){
var pulled = temp__4425__auto__;
var vec__29067 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__29067,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__29067,(1),null);
var __x_29222 = buffered_evs;
try{if(cljs.core.vector_QMARK_.call(null,__x_29222)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29068){if((e29068 instanceof Error)){
var __t_29223 = e29068;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",__x_29222,__t_29223,null);
} else {
throw e29068;

}
}
var __x_29224 = ev_uuids;
try{if(cljs.core.set_QMARK_.call(null,__x_29224)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29069){if((e29069 instanceof Error)){
var __t_29225 = e29069;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",__x_29224,__t_29225,null);
} else {
throw e29069;

}
}
var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init2176211180087739371.clj",357,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__29067,buffered_evs,ev_uuids,pulled,temp__4425__auto__,uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__29067,buffered_evs,ev_uuids,pulled,temp__4425__auto__,uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var G__29070 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29070) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_29216,buffered_evs_ppstr);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_29216,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
} else {
return null;
}
});})(uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init2176211180087739371.clj",367,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,flush_buffer_BANG__29221,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_29216], null);
});})(uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,flush_buffer_BANG__29221,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

if(cljs.core.truth_(flush_QMARK_)){
var seq__29071_29227 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__29072_29228 = null;
var count__29073_29229 = (0);
var i__29074_29230 = (0);
while(true){
if((i__29074_29230 < count__29073_29229)){
var type_29231 = cljs.core._nth.call(null,chunk__29072_29228,i__29074_29230);
flush_buffer_BANG__29221.call(null,type_29231);

var G__29232 = seq__29071_29227;
var G__29233 = chunk__29072_29228;
var G__29234 = count__29073_29229;
var G__29235 = (i__29074_29230 + (1));
seq__29071_29227 = G__29232;
chunk__29072_29228 = G__29233;
count__29073_29229 = G__29234;
i__29074_29230 = G__29235;
continue;
} else {
var temp__4425__auto___29236 = cljs.core.seq.call(null,seq__29071_29227);
if(temp__4425__auto___29236){
var seq__29071_29237__$1 = temp__4425__auto___29236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29071_29237__$1)){
var c__26482__auto___29238 = cljs.core.chunk_first.call(null,seq__29071_29237__$1);
var G__29239 = cljs.core.chunk_rest.call(null,seq__29071_29237__$1);
var G__29240 = c__26482__auto___29238;
var G__29241 = cljs.core.count.call(null,c__26482__auto___29238);
var G__29242 = (0);
seq__29071_29227 = G__29239;
chunk__29072_29228 = G__29240;
count__29073_29229 = G__29241;
i__29074_29230 = G__29242;
continue;
} else {
var type_29243 = cljs.core.first.call(null,seq__29071_29237__$1);
flush_buffer_BANG__29221.call(null,type_29243);

var G__29244 = cljs.core.next.call(null,seq__29071_29237__$1);
var G__29245 = null;
var G__29246 = (0);
var G__29247 = (0);
seq__29071_29227 = G__29244;
chunk__29072_29228 = G__29245;
count__29073_29229 = G__29246;
i__29074_29230 = G__29247;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__29075_29248 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_29216], null))));
var chunk__29076_29249 = null;
var count__29077_29250 = (0);
var i__29078_29251 = (0);
while(true){
if((i__29078_29251 < count__29077_29250)){
var server_ch_29252 = cljs.core._nth.call(null,chunk__29076_29249,i__29078_29251);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_29252);

var G__29253 = seq__29075_29248;
var G__29254 = chunk__29076_29249;
var G__29255 = count__29077_29250;
var G__29256 = (i__29078_29251 + (1));
seq__29075_29248 = G__29253;
chunk__29076_29249 = G__29254;
count__29077_29250 = G__29255;
i__29078_29251 = G__29256;
continue;
} else {
var temp__4425__auto___29257 = cljs.core.seq.call(null,seq__29075_29248);
if(temp__4425__auto___29257){
var seq__29075_29258__$1 = temp__4425__auto___29257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29075_29258__$1)){
var c__26482__auto___29259 = cljs.core.chunk_first.call(null,seq__29075_29258__$1);
var G__29260 = cljs.core.chunk_rest.call(null,seq__29075_29258__$1);
var G__29261 = c__26482__auto___29259;
var G__29262 = cljs.core.count.call(null,c__26482__auto___29259);
var G__29263 = (0);
seq__29075_29248 = G__29260;
chunk__29076_29249 = G__29261;
count__29077_29250 = G__29262;
i__29078_29251 = G__29263;
continue;
} else {
var server_ch_29264 = cljs.core.first.call(null,seq__29075_29258__$1);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_29264);

var G__29265 = cljs.core.next.call(null,seq__29075_29258__$1);
var G__29266 = null;
var G__29267 = (0);
var G__29268 = (0);
seq__29075_29248 = G__29265;
chunk__29076_29249 = G__29266;
count__29077_29250 = G__29267;
i__29078_29251 = G__29268;
continue;
}
} else {
}
}
break;
}

var seq__29079_29269 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_29216], null))));
var chunk__29080_29270 = null;
var count__29081_29271 = (0);
var i__29082_29272 = (0);
while(true){
if((i__29082_29272 < count__29081_29271)){
var vec__29083_29273 = cljs.core._nth.call(null,chunk__29080_29270,i__29082_29272);
var _QMARK_server_ch_29274 = cljs.core.nth.call(null,vec__29083_29273,(0),null);
var __29275__$3 = cljs.core.nth.call(null,vec__29083_29273,(1),null);
var temp__4425__auto___29276 = _QMARK_server_ch_29274;
if(cljs.core.truth_(temp__4425__auto___29276)){
var server_ch_29277 = temp__4425__auto___29276;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_29277);
} else {
}

var G__29278 = seq__29079_29269;
var G__29279 = chunk__29080_29270;
var G__29280 = count__29081_29271;
var G__29281 = (i__29082_29272 + (1));
seq__29079_29269 = G__29278;
chunk__29080_29270 = G__29279;
count__29081_29271 = G__29280;
i__29082_29272 = G__29281;
continue;
} else {
var temp__4425__auto___29282 = cljs.core.seq.call(null,seq__29079_29269);
if(temp__4425__auto___29282){
var seq__29079_29283__$1 = temp__4425__auto___29282;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29079_29283__$1)){
var c__26482__auto___29284 = cljs.core.chunk_first.call(null,seq__29079_29283__$1);
var G__29285 = cljs.core.chunk_rest.call(null,seq__29079_29283__$1);
var G__29286 = c__26482__auto___29284;
var G__29287 = cljs.core.count.call(null,c__26482__auto___29284);
var G__29288 = (0);
seq__29079_29269 = G__29285;
chunk__29080_29270 = G__29286;
count__29081_29271 = G__29287;
i__29082_29272 = G__29288;
continue;
} else {
var vec__29084_29289 = cljs.core.first.call(null,seq__29079_29283__$1);
var _QMARK_server_ch_29290 = cljs.core.nth.call(null,vec__29084_29289,(0),null);
var __29291__$3 = cljs.core.nth.call(null,vec__29084_29289,(1),null);
var temp__4425__auto___29292__$1 = _QMARK_server_ch_29290;
if(cljs.core.truth_(temp__4425__auto___29292__$1)){
var server_ch_29293 = temp__4425__auto___29292__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_29293);
} else {
}

var G__29294 = cljs.core.next.call(null,seq__29079_29283__$1);
var G__29295 = null;
var G__29296 = (0);
var G__29297 = (0);
seq__29079_29269 = G__29294;
chunk__29080_29270 = G__29295;
count__29081_29271 = G__29296;
i__29082_29272 = G__29297;
continue;
}
} else {
}
}
break;
}
} else {
var seq__29085_29298 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__29086_29299 = null;
var count__29087_29300 = (0);
var i__29088_29301 = (0);
while(true){
if((i__29088_29301 < count__29087_29300)){
var type_29302 = cljs.core._nth.call(null,chunk__29086_29299,i__29088_29301);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_29302,uid_29216], null),((function (seq__29085_29298,chunk__29086_29299,count__29087_29300,i__29088_29301,type_29302,uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,flush_buffer_BANG__29221,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_29220], true)], null);
} else {
var vec__29089 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__29089,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__29089,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_29220)], null);
}
});})(seq__29085_29298,chunk__29086_29299,count__29087_29300,i__29088_29301,type_29302,uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,flush_buffer_BANG__29221,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__29303 = seq__29085_29298;
var G__29304 = chunk__29086_29299;
var G__29305 = count__29087_29300;
var G__29306 = (i__29088_29301 + (1));
seq__29085_29298 = G__29303;
chunk__29086_29299 = G__29304;
count__29087_29300 = G__29305;
i__29088_29301 = G__29306;
continue;
} else {
var temp__4425__auto___29307 = cljs.core.seq.call(null,seq__29085_29298);
if(temp__4425__auto___29307){
var seq__29085_29308__$1 = temp__4425__auto___29307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29085_29308__$1)){
var c__26482__auto___29309 = cljs.core.chunk_first.call(null,seq__29085_29308__$1);
var G__29310 = cljs.core.chunk_rest.call(null,seq__29085_29308__$1);
var G__29311 = c__26482__auto___29309;
var G__29312 = cljs.core.count.call(null,c__26482__auto___29309);
var G__29313 = (0);
seq__29085_29298 = G__29310;
chunk__29086_29299 = G__29311;
count__29087_29300 = G__29312;
i__29088_29301 = G__29313;
continue;
} else {
var type_29314 = cljs.core.first.call(null,seq__29085_29308__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_29314,uid_29216], null),((function (seq__29085_29298,chunk__29086_29299,count__29087_29300,i__29088_29301,type_29314,seq__29085_29308__$1,temp__4425__auto___29307,uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,flush_buffer_BANG__29221,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_29220], true)], null);
} else {
var vec__29090 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__29090,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__29090,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_29220)], null);
}
});})(seq__29085_29298,chunk__29086_29299,count__29087_29300,i__29088_29301,type_29314,seq__29085_29308__$1,temp__4425__auto___29307,uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,flush_buffer_BANG__29221,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__29315 = cljs.core.next.call(null,seq__29085_29308__$1);
var G__29316 = null;
var G__29317 = (0);
var G__29318 = (0);
seq__29085_29298 = G__29315;
chunk__29086_29299 = G__29316;
count__29087_29300 = G__29317;
i__29088_29301 = G__29318;
continue;
}
} else {
}
}
break;
}

var c__28953__auto___29319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28953__auto___29319,uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,flush_buffer_BANG__29221,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__28954__auto__ = (function (){var switch__28932__auto__ = ((function (c__28953__auto___29319,uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,flush_buffer_BANG__29221,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_29100){
var state_val_29101 = (state_29100[(1)]);
if((state_val_29101 === (1))){
var state_29100__$1 = state_29100;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_29102_29320 = state_29100__$1;
(statearr_29102_29320[(1)] = (2));

} else {
var statearr_29103_29321 = state_29100__$1;
(statearr_29103_29321[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29101 === (2))){
var state_29100__$1 = state_29100;
var statearr_29104_29322 = state_29100__$1;
(statearr_29104_29322[(2)] = null);

(statearr_29104_29322[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29101 === (3))){
var inst_29093 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var state_29100__$1 = state_29100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29100__$1,(5),inst_29093);
} else {
if((state_val_29101 === (4))){
var inst_29097 = (state_29100[(2)]);
var inst_29098 = flush_buffer_BANG__29221.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_29100__$1 = (function (){var statearr_29105 = state_29100;
(statearr_29105[(7)] = inst_29097);

return statearr_29105;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29100__$1,inst_29098);
} else {
if((state_val_29101 === (5))){
var inst_29095 = (state_29100[(2)]);
var state_29100__$1 = state_29100;
var statearr_29106_29323 = state_29100__$1;
(statearr_29106_29323[(2)] = inst_29095);

(statearr_29106_29323[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__28953__auto___29319,uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,flush_buffer_BANG__29221,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28932__auto__,c__28953__auto___29319,uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,flush_buffer_BANG__29221,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28933__auto__ = null;
var taoensso$sente$state_machine__28933__auto____0 = (function (){
var statearr_29110 = [null,null,null,null,null,null,null,null];
(statearr_29110[(0)] = taoensso$sente$state_machine__28933__auto__);

(statearr_29110[(1)] = (1));

return statearr_29110;
});
var taoensso$sente$state_machine__28933__auto____1 = (function (state_29100){
while(true){
var ret_value__28934__auto__ = (function (){try{while(true){
var result__28935__auto__ = switch__28932__auto__.call(null,state_29100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28935__auto__;
}
break;
}
}catch (e29111){if((e29111 instanceof Object)){
var ex__28936__auto__ = e29111;
var statearr_29112_29324 = state_29100;
(statearr_29112_29324[(5)] = ex__28936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29325 = state_29100;
state_29100 = G__29325;
continue;
} else {
return ret_value__28934__auto__;
}
break;
}
});
taoensso$sente$state_machine__28933__auto__ = function(state_29100){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28933__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28933__auto____1.call(this,state_29100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28933__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28933__auto____0;
taoensso$sente$state_machine__28933__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28933__auto____1;
return taoensso$sente$state_machine__28933__auto__;
})()
;})(switch__28932__auto__,c__28953__auto___29319,uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,flush_buffer_BANG__29221,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__28955__auto__ = (function (){var statearr_29113 = f__28954__auto__.call(null);
(statearr_29113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28953__auto___29319);

return statearr_29113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28955__auto__);
});})(c__28953__auto___29319,uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,flush_buffer_BANG__29221,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__28953__auto___29326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28953__auto___29326,uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,flush_buffer_BANG__29221,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__28954__auto__ = (function (){var switch__28932__auto__ = ((function (c__28953__auto___29326,uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,flush_buffer_BANG__29221,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_29123){
var state_val_29124 = (state_29123[(1)]);
if((state_val_29124 === (1))){
var state_29123__$1 = state_29123;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_29125_29327 = state_29123__$1;
(statearr_29125_29327[(1)] = (2));

} else {
var statearr_29126_29328 = state_29123__$1;
(statearr_29126_29328[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (2))){
var state_29123__$1 = state_29123;
var statearr_29127_29329 = state_29123__$1;
(statearr_29127_29329[(2)] = null);

(statearr_29127_29329[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (3))){
var inst_29116 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var state_29123__$1 = state_29123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29123__$1,(5),inst_29116);
} else {
if((state_val_29124 === (4))){
var inst_29120 = (state_29123[(2)]);
var inst_29121 = flush_buffer_BANG__29221.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_29123__$1 = (function (){var statearr_29128 = state_29123;
(statearr_29128[(7)] = inst_29120);

return statearr_29128;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29123__$1,inst_29121);
} else {
if((state_val_29124 === (5))){
var inst_29118 = (state_29123[(2)]);
var state_29123__$1 = state_29123;
var statearr_29129_29330 = state_29123__$1;
(statearr_29129_29330[(2)] = inst_29118);

(statearr_29129_29330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__28953__auto___29326,uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,flush_buffer_BANG__29221,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28932__auto__,c__28953__auto___29326,uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,flush_buffer_BANG__29221,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28933__auto__ = null;
var taoensso$sente$state_machine__28933__auto____0 = (function (){
var statearr_29133 = [null,null,null,null,null,null,null,null];
(statearr_29133[(0)] = taoensso$sente$state_machine__28933__auto__);

(statearr_29133[(1)] = (1));

return statearr_29133;
});
var taoensso$sente$state_machine__28933__auto____1 = (function (state_29123){
while(true){
var ret_value__28934__auto__ = (function (){try{while(true){
var result__28935__auto__ = switch__28932__auto__.call(null,state_29123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28935__auto__;
}
break;
}
}catch (e29134){if((e29134 instanceof Object)){
var ex__28936__auto__ = e29134;
var statearr_29135_29331 = state_29123;
(statearr_29135_29331[(5)] = ex__28936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29332 = state_29123;
state_29123 = G__29332;
continue;
} else {
return ret_value__28934__auto__;
}
break;
}
});
taoensso$sente$state_machine__28933__auto__ = function(state_29123){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28933__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28933__auto____1.call(this,state_29123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28933__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28933__auto____0;
taoensso$sente$state_machine__28933__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28933__auto____1;
return taoensso$sente$state_machine__28933__auto__;
})()
;})(switch__28932__auto__,c__28953__auto___29326,uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,flush_buffer_BANG__29221,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__28955__auto__ = (function (){var statearr_29136 = f__28954__auto__.call(null);
(statearr_29136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28953__auto___29326);

return statearr_29136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28955__auto__);
});})(c__28953__auto___29326,uid_29216,__29217,__29218__$1,__29219__$2,ev_uuid_29220,flush_buffer_BANG__29221,vec__29063,map__29064,map__29064__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}

return null;
};
var G__29215 = function (user_id,ev,var_args){
var p__29062 = null;
if (arguments.length > 2) {
var G__29333__i = 0, G__29333__a = new Array(arguments.length -  2);
while (G__29333__i < G__29333__a.length) {G__29333__a[G__29333__i] = arguments[G__29333__i + 2]; ++G__29333__i;}
  p__29062 = new cljs.core.IndexedSeq(G__29333__a,0);
} 
return G__29215__delegate.call(this,user_id,ev,p__29062);};
G__29215.cljs$lang$maxFixedArity = 2;
G__29215.cljs$lang$applyTo = (function (arglist__29334){
var user_id = cljs.core.first(arglist__29334);
arglist__29334 = cljs.core.next(arglist__29334);
var ev = cljs.core.first(arglist__29334);
var p__29062 = cljs.core.rest(arglist__29334);
return G__29215__delegate(user_id,ev,p__29062);
});
G__29215.cljs$core$IFn$_invoke$arity$variadic = G__29215__delegate;
return G__29215;
})()
;})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__29137 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__29137,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__29137,(1),null);
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?((function (params,ppstr,client_id,vec__29137,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init2176211180087739371.clj",435,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__29137,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): %s",resp_clj], null);
});})(params,ppstr,client_id,vec__29137,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
});})(params,ppstr,client_id,vec__29137,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
return null;
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init2176211180087739371.clj",442,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__29137,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): dummy-cb-200"], null);
});})(params,ppstr,client_id,vec__29137,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337)),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var csrf_token = csrf_token_fn.call(null,ring_req);
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var websocket_QMARK_ = new cljs.core.Keyword(null,"websocket?","websocket?",1552493139).cljs$core$IFn$_invoke$arity$1(ring_req);
var receive_event_msg_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__29335__delegate = function (event,p__29138){
var vec__29139 = p__29138;
var _QMARK_reply_fn = cljs.core.nth.call(null,vec__29139,(0),null);
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
};
var G__29335 = function (event,var_args){
var p__29138 = null;
if (arguments.length > 1) {
var G__29336__i = 0, G__29336__a = new Array(arguments.length -  1);
while (G__29336__i < G__29336__a.length) {G__29336__a[G__29336__i] = arguments[G__29336__i + 1]; ++G__29336__i;}
  p__29138 = new cljs.core.IndexedSeq(G__29336__a,0);
} 
return G__29335__delegate.call(this,event,p__29138);};
G__29335.cljs$lang$maxFixedArity = 1;
G__29335.cljs$lang$applyTo = (function (arglist__29337){
var event = cljs.core.first(arglist__29337);
var p__29138 = cljs.core.rest(arglist__29337);
return G__29335__delegate(event,p__29138);
});
G__29335.cljs$core$IFn$_invoke$arity$variadic = G__29335__delegate;
return G__29335;
})()
;})(csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var handshake_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init2176211180087739371.clj",467,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handshake!"], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = ((!((_QMARK_handshake_data == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev),cljs.core.not.call(null,websocket_QMARK_));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init2176211180087739371.clj",479,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init2176211180087739371.clj",487,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,[cljs.core.str(server_ch)].join('')], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

taoensso.encore.reset_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id], null),server_ch);

if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954)], null));
} else {
}

return handshake_BANG_.call(null,server_ch);
} else {
var initial_conn_from_client_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_ch,taoensso.encore.now_udt.call(null)], null),(_QMARK_v == null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
var handshake_QMARK_ = (function (){var or__25671__auto__ = initial_conn_from_client_QMARK_;
if(cljs.core.truth_(or__25671__auto__)){
return or__25671__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954)], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return handshake_BANG_.call(null,server_ch);
} else {
return null;
}
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,req_ppstr){
var vec__29140 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__29140,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__29140,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__29140,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init2176211180087739371.clj",514,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__29140,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__29140,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__29140,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,status){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
if(cljs.core.empty_QMARK_.call(null,new_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return new_m;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var c__28953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28953__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__28954__auto__ = (function (){var switch__28932__auto__ = ((function (c__28953__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_29154){
var state_val_29155 = (state_29154[(1)]);
if((state_val_29155 === (1))){
var inst_29141 = cljs.core.async.timeout.call(null,(5000));
var state_29154__$1 = state_29154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29154__$1,(2),inst_29141);
} else {
if((state_val_29155 === (2))){
var inst_29143 = (state_29154[(2)]);
var inst_29144 = upd_connected_uid_BANG_.call(null,uid);
var state_29154__$1 = (function (){var statearr_29156 = state_29154;
(statearr_29156[(7)] = inst_29143);

return statearr_29156;
})();
if(cljs.core.truth_(inst_29144)){
var statearr_29157_29338 = state_29154__$1;
(statearr_29157_29338[(1)] = (3));

} else {
var statearr_29158_29339 = state_29154__$1;
(statearr_29158_29339[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (3))){
var inst_29146 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29147 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_29148 = (new cljs.core.PersistentVector(null,1,(5),inst_29146,inst_29147,null));
var inst_29149 = receive_event_msg_BANG_.call(null,inst_29148);
var state_29154__$1 = state_29154;
var statearr_29159_29340 = state_29154__$1;
(statearr_29159_29340[(2)] = inst_29149);

(statearr_29159_29340[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (4))){
var state_29154__$1 = state_29154;
var statearr_29160_29341 = state_29154__$1;
(statearr_29160_29341[(2)] = null);

(statearr_29160_29341[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (5))){
var inst_29152 = (state_29154[(2)]);
var state_29154__$1 = state_29154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29154__$1,inst_29152);
} else {
return null;
}
}
}
}
}
});})(c__28953__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28932__auto__,c__28953__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28933__auto__ = null;
var taoensso$sente$state_machine__28933__auto____0 = (function (){
var statearr_29164 = [null,null,null,null,null,null,null,null];
(statearr_29164[(0)] = taoensso$sente$state_machine__28933__auto__);

(statearr_29164[(1)] = (1));

return statearr_29164;
});
var taoensso$sente$state_machine__28933__auto____1 = (function (state_29154){
while(true){
var ret_value__28934__auto__ = (function (){try{while(true){
var result__28935__auto__ = switch__28932__auto__.call(null,state_29154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28935__auto__;
}
break;
}
}catch (e29165){if((e29165 instanceof Object)){
var ex__28936__auto__ = e29165;
var statearr_29166_29342 = state_29154;
(statearr_29166_29342[(5)] = ex__28936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29343 = state_29154;
state_29154 = G__29343;
continue;
} else {
return ret_value__28934__auto__;
}
break;
}
});
taoensso$sente$state_machine__28933__auto__ = function(state_29154){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28933__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28933__auto____1.call(this,state_29154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28933__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28933__auto____0;
taoensso$sente$state_machine__28933__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28933__auto____1;
return taoensso$sente$state_machine__28933__auto__;
})()
;})(switch__28932__auto__,c__28953__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__28955__auto__ = (function (){var statearr_29167 = f__28954__auto__.call(null);
(statearr_29167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28953__auto__);

return statearr_29167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28955__auto__);
});})(c__28953__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__28953__auto__;
} else {
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,new cljs.core.Keyword(null,"ajax","ajax",814345549),client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__29168){
var vec__29169 = p__29168;
var server_ch__$1 = cljs.core.nth.call(null,vec__29169,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__29169,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var udt_disconnected = taoensso.encore.now_udt.call(null);
var c__28953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28953__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__28954__auto__ = (function (){var switch__28932__auto__ = ((function (c__28953__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_29192){
var state_val_29193 = (state_29192[(1)]);
if((state_val_29193 === (1))){
var inst_29170 = cljs.core.async.timeout.call(null,(5000));
var state_29192__$1 = state_29192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29192__$1,(2),inst_29170);
} else {
if((state_val_29193 === (2))){
var inst_29172 = (state_29192[(2)]);
var inst_29173 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29174 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_29175 = (new cljs.core.PersistentVector(null,2,(5),inst_29173,inst_29174,null));
var inst_29176 = (function (){return ((function (inst_29172,inst_29173,inst_29174,inst_29175,state_val_29193,c__28953__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var vec__29194 = cljs.core.get.call(null,_QMARK_m,client_id);
var _ = cljs.core.nth.call(null,vec__29194,(0),null);
var _QMARK_udt_last_connected = cljs.core.nth.call(null,vec__29194,(1),null);
var disconnected_QMARK_ = (function (){var and__25659__auto__ = _QMARK_udt_last_connected;
if(cljs.core.truth_(and__25659__auto__)){
return (udt_disconnected >= _QMARK_udt_last_connected);
} else {
return and__25659__auto__;
}
})();
if(cljs.core.not.call(null,disconnected_QMARK_)){
return taoensso.encore.swapped.call(null,_QMARK_m,cljs.core.not.call(null,new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)));
} else {
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
return taoensso.encore.swapped.call(null,((cljs.core.empty_QMARK_.call(null,new_m))?new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782):new_m),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586));
}
});
;})(inst_29172,inst_29173,inst_29174,inst_29175,state_val_29193,c__28953__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_29177 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_29175,inst_29176);
var state_29192__$1 = (function (){var statearr_29195 = state_29192;
(statearr_29195[(7)] = inst_29172);

return statearr_29195;
})();
if(cljs.core.truth_(inst_29177)){
var statearr_29196_29344 = state_29192__$1;
(statearr_29196_29344[(1)] = (3));

} else {
var statearr_29197_29345 = state_29192__$1;
(statearr_29197_29345[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (3))){
var inst_29179 = upd_connected_uid_BANG_.call(null,uid);
var state_29192__$1 = state_29192;
if(cljs.core.truth_(inst_29179)){
var statearr_29198_29346 = state_29192__$1;
(statearr_29198_29346[(1)] = (6));

} else {
var statearr_29199_29347 = state_29192__$1;
(statearr_29199_29347[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (4))){
var state_29192__$1 = state_29192;
var statearr_29200_29348 = state_29192__$1;
(statearr_29200_29348[(2)] = null);

(statearr_29200_29348[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (5))){
var inst_29190 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29192__$1,inst_29190);
} else {
if((state_val_29193 === (6))){
var inst_29181 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29182 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_29183 = (new cljs.core.PersistentVector(null,1,(5),inst_29181,inst_29182,null));
var inst_29184 = receive_event_msg_BANG_.call(null,inst_29183);
var state_29192__$1 = state_29192;
var statearr_29201_29349 = state_29192__$1;
(statearr_29201_29349[(2)] = inst_29184);

(statearr_29201_29349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (7))){
var state_29192__$1 = state_29192;
var statearr_29202_29350 = state_29192__$1;
(statearr_29202_29350[(2)] = null);

(statearr_29202_29350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29193 === (8))){
var inst_29187 = (state_29192[(2)]);
var state_29192__$1 = state_29192;
var statearr_29203_29351 = state_29192__$1;
(statearr_29203_29351[(2)] = inst_29187);

(statearr_29203_29351[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__28953__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28932__auto__,c__28953__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28933__auto__ = null;
var taoensso$sente$state_machine__28933__auto____0 = (function (){
var statearr_29207 = [null,null,null,null,null,null,null,null];
(statearr_29207[(0)] = taoensso$sente$state_machine__28933__auto__);

(statearr_29207[(1)] = (1));

return statearr_29207;
});
var taoensso$sente$state_machine__28933__auto____1 = (function (state_29192){
while(true){
var ret_value__28934__auto__ = (function (){try{while(true){
var result__28935__auto__ = switch__28932__auto__.call(null,state_29192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28935__auto__;
}
break;
}
}catch (e29208){if((e29208 instanceof Object)){
var ex__28936__auto__ = e29208;
var statearr_29209_29352 = state_29192;
(statearr_29209_29352[(5)] = ex__28936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29353 = state_29192;
state_29192 = G__29353;
continue;
} else {
return ret_value__28934__auto__;
}
break;
}
});
taoensso$sente$state_machine__28933__auto__ = function(state_29192){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28933__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28933__auto____1.call(this,state_29192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28933__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28933__auto____0;
taoensso$sente$state_machine__28933__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28933__auto____1;
return taoensso$sente$state_machine__28933__auto__;
})()
;})(switch__28932__auto__,c__28953__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__28955__auto__ = (function (){var statearr_29210 = f__28954__auto__.call(null);
(statearr_29210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28953__auto__);

return statearr_29210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28955__auto__);
});})(c__28953__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__28953__auto__;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29046,map__29047,map__29047__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq29043){
var G__29044 = cljs.core.first.call(null,seq29043);
var seq29043__$1 = cljs.core.next.call(null,seq29043);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29044,seq29043__$1);
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init2176211180087739371.clj",576,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null);

var seq__29358 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null))));
var chunk__29359 = null;
var count__29360 = (0);
var i__29361 = (0);
while(true){
if((i__29361 < count__29360)){
var server_ch = cljs.core._nth.call(null,chunk__29359,i__29361);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__29362 = seq__29358;
var G__29363 = chunk__29359;
var G__29364 = count__29360;
var G__29365 = (i__29361 + (1));
seq__29358 = G__29362;
chunk__29359 = G__29363;
count__29360 = G__29364;
i__29361 = G__29365;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29358);
if(temp__4425__auto__){
var seq__29358__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29358__$1)){
var c__26482__auto__ = cljs.core.chunk_first.call(null,seq__29358__$1);
var G__29366 = cljs.core.chunk_rest.call(null,seq__29358__$1);
var G__29367 = c__26482__auto__;
var G__29368 = cljs.core.count.call(null,c__26482__auto__);
var G__29369 = (0);
seq__29358 = G__29366;
chunk__29359 = G__29367;
count__29360 = G__29368;
i__29361 = G__29369;
continue;
} else {
var server_ch = cljs.core.first.call(null,seq__29358__$1);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__29370 = cljs.core.next.call(null,seq__29358__$1);
var G__29371 = null;
var G__29372 = (0);
var G__29373 = (0);
seq__29358 = G__29370;
chunk__29359 = G__29371;
count__29360 = G__29372;
i__29361 = G__29373;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(var_args){
var args__26748__auto__ = [];
var len__26741__auto___29463 = arguments.length;
var i__26742__auto___29464 = (0);
while(true){
if((i__26742__auto___29464 < len__26741__auto___29463)){
args__26748__auto__.push((arguments[i__26742__auto___29464]));

var G__29465 = (i__26742__auto___29464 + (1));
i__26742__auto___29464 = G__29465;
continue;
} else {
}
break;
}

var argseq__26749__auto__ = ((((3) < args__26748__auto__.length))?(new cljs.core.IndexedSeq(args__26748__auto__.slice((3)),(0),null)):null);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26749__auto__);
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conns_,uid,buffered_evs_pstr,p__29378){
var vec__29379 = p__29378;
var map__29380 = cljs.core.nth.call(null,vec__29379,(0),null);
var map__29380__$1 = ((((!((map__29380 == null)))?((((map__29380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29380):map__29380);
var nmax_attempts = cljs.core.get.call(null,map__29380__$1,new cljs.core.Keyword(null,"nmax-attempts","nmax-attempts",1471144610),(7));
var ms_base = cljs.core.get.call(null,map__29380__$1,new cljs.core.Keyword(null,"ms-base","ms-base",-1962784511),(90));
var ms_rand = cljs.core.get.call(null,map__29380__$1,new cljs.core.Keyword(null,"ms-rand","ms-rand",1169398874),(90));

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init2176211180087739371.clj",589,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__29379,map__29380,map__29380__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
});})(vec__29379,map__29380,map__29380__$1,nmax_attempts,ms_base,ms_rand))
,null)),null);

var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__28953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28953__auto__,client_ids_unsatisfied,vec__29379,map__29380,map__29380__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
var f__28954__auto__ = (function (){var switch__28932__auto__ = ((function (c__28953__auto__,client_ids_unsatisfied,vec__29379,map__29380,map__29380__$1,nmax_attempts,ms_base,ms_rand){
return (function (state_29429){
var state_val_29430 = (state_29429[(1)]);
if((state_val_29430 === (7))){
var inst_29383 = (state_29429[(7)]);
var inst_29390 = (state_29429[(8)]);
var inst_29384 = (state_29429[(9)]);
var inst_29401 = (function (){var n = inst_29383;
var client_ids_satisfied = inst_29384;
var _QMARK_pulled = inst_29390;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_29383,inst_29390,inst_29384,state_val_29430,c__28953__auto__,client_ids_unsatisfied,vec__29379,map__29380,map__29380__$1,nmax_attempts,ms_base,ms_rand){
return (function (s,client_id,p__29400){
var vec__29431 = p__29400;
var _QMARK_server_ch = cljs.core.nth.call(null,vec__29431,(0),null);
var _ = cljs.core.nth.call(null,vec__29431,(1),null);
if(((_QMARK_server_ch == null)) || (cljs.core.not.call(null,taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_server_ch,buffered_evs_pstr,new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103))))){
return s;
} else {
return cljs.core.conj.call(null,s,client_id);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_29383,inst_29390,inst_29384,state_val_29430,c__28953__auto__,client_ids_unsatisfied,vec__29379,map__29380,map__29380__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_29402 = cljs.core.PersistentHashSet.EMPTY;
var inst_29403 = cljs.core.reduce_kv.call(null,inst_29401,inst_29402,inst_29390);
var state_29429__$1 = state_29429;
var statearr_29432_29466 = state_29429__$1;
(statearr_29432_29466[(2)] = inst_29403);

(statearr_29432_29466[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (1))){
var inst_29382 = cljs.core.PersistentHashSet.EMPTY;
var inst_29383 = (0);
var inst_29384 = inst_29382;
var state_29429__$1 = (function (){var statearr_29433 = state_29429;
(statearr_29433[(7)] = inst_29383);

(statearr_29433[(9)] = inst_29384);

return statearr_29433;
})();
var statearr_29434_29467 = state_29429__$1;
(statearr_29434_29467[(2)] = null);

(statearr_29434_29467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (4))){
var state_29429__$1 = state_29429;
var statearr_29435_29468 = state_29429__$1;
(statearr_29435_29468[(2)] = true);

(statearr_29435_29468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (15))){
var inst_29425 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
var statearr_29436_29469 = state_29429__$1;
(statearr_29436_29469[(2)] = inst_29425);

(statearr_29436_29469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (13))){
var inst_29416 = cljs.core.rand_int.call(null,ms_rand);
var inst_29417 = (ms_base + inst_29416);
var inst_29418 = cljs.core.async.timeout.call(null,inst_29417);
var state_29429__$1 = state_29429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29429__$1,(16),inst_29418);
} else {
if((state_val_29430 === (6))){
var inst_29390 = (state_29429[(8)]);
var inst_29398 = (state_29429[(2)]);
var state_29429__$1 = (function (){var statearr_29437 = state_29429;
(statearr_29437[(10)] = inst_29398);

return statearr_29437;
})();
if(cljs.core.truth_(inst_29390)){
var statearr_29438_29470 = state_29429__$1;
(statearr_29438_29470[(1)] = (7));

} else {
var statearr_29439_29471 = state_29429__$1;
(statearr_29439_29471[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (3))){
var inst_29427 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29429__$1,inst_29427);
} else {
if((state_val_29430 === (12))){
var inst_29414 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
if(cljs.core.truth_(inst_29414)){
var statearr_29440_29472 = state_29429__$1;
(statearr_29440_29472[(1)] = (13));

} else {
var statearr_29441_29473 = state_29429__$1;
(statearr_29441_29473[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (2))){
var inst_29383 = (state_29429[(7)]);
var inst_29390 = (state_29429[(8)]);
var inst_29384 = (state_29429[(9)]);
var inst_29386 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29387 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_29388 = (new cljs.core.PersistentVector(null,2,(5),inst_29386,inst_29387,null));
var inst_29389 = (function (){var n = inst_29383;
var client_ids_satisfied = inst_29384;
return ((function (n,client_ids_satisfied,inst_29383,inst_29390,inst_29384,inst_29386,inst_29387,inst_29388,state_val_29430,c__28953__auto__,client_ids_unsatisfied,vec__29379,map__29380,map__29380__$1,nmax_attempts,ms_base,ms_rand){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_29383,inst_29390,inst_29384,inst_29386,inst_29387,inst_29388,state_val_29430,c__28953__auto__,client_ids_unsatisfied,vec__29379,map__29380,map__29380__$1,nmax_attempts,ms_base,ms_rand){
return (function (m__$1,k){
var vec__29442 = cljs.core.get.call(null,m__$1,k);
var _QMARK_server_ch = cljs.core.nth.call(null,vec__29442,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__29442,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_29383,inst_29390,inst_29384,inst_29386,inst_29387,inst_29388,state_val_29430,c__28953__auto__,client_ids_unsatisfied,vec__29379,map__29380,map__29380__$1,nmax_attempts,ms_base,ms_rand))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_29383,inst_29390,inst_29384,inst_29386,inst_29387,inst_29388,state_val_29430,c__28953__auto__,client_ids_unsatisfied,vec__29379,map__29380,map__29380__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_29390__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_29388,inst_29389);
var inst_29391 = (function (){var n = inst_29383;
var client_ids_satisfied = inst_29384;
var _QMARK_pulled = inst_29390__$1;
var __x = inst_29390__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,__x,inst_29383,inst_29390,inst_29384,inst_29386,inst_29387,inst_29388,inst_29389,inst_29390__$1,state_val_29430,c__28953__auto__,client_ids_unsatisfied,vec__29379,map__29380,map__29380__$1,nmax_attempts,ms_base,ms_rand){
return (function (__x__$1){
var or__25671__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__25671__auto__)){
return or__25671__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,__x__$1);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,__x,inst_29383,inst_29390,inst_29384,inst_29386,inst_29387,inst_29388,inst_29389,inst_29390__$1,state_val_29430,c__28953__auto__,client_ids_unsatisfied,vec__29379,map__29380,map__29380__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_29392 = inst_29391.call(null,inst_29390__$1);
var state_29429__$1 = (function (){var statearr_29443 = state_29429;
(statearr_29443[(8)] = inst_29390__$1);

return statearr_29443;
})();
if(cljs.core.truth_(inst_29392)){
var statearr_29444_29474 = state_29429__$1;
(statearr_29444_29474[(1)] = (4));

} else {
var statearr_29445_29475 = state_29429__$1;
(statearr_29445_29475[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (11))){
var inst_29408 = (state_29429[(11)]);
var state_29429__$1 = state_29429;
var statearr_29446_29476 = state_29429__$1;
(statearr_29446_29476[(2)] = inst_29408);

(statearr_29446_29476[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (9))){
var inst_29408 = (state_29429[(11)]);
var inst_29383 = (state_29429[(7)]);
var inst_29384 = (state_29429[(9)]);
var inst_29406 = (state_29429[(2)]);
var inst_29407 = cljs.core.into.call(null,inst_29384,inst_29406);
var inst_29408__$1 = (inst_29383 < nmax_attempts);
var state_29429__$1 = (function (){var statearr_29447 = state_29429;
(statearr_29447[(12)] = inst_29407);

(statearr_29447[(11)] = inst_29408__$1);

return statearr_29447;
})();
if(cljs.core.truth_(inst_29408__$1)){
var statearr_29448_29477 = state_29429__$1;
(statearr_29448_29477[(1)] = (10));

} else {
var statearr_29449_29478 = state_29429__$1;
(statearr_29449_29478[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (5))){
var inst_29390 = (state_29429[(8)]);
var inst_29395 = "([:or nil? map?] ?pulled)";
var inst_29396 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,inst_29395,inst_29390,null,null);
var state_29429__$1 = state_29429;
var statearr_29450_29479 = state_29429__$1;
(statearr_29450_29479[(2)] = inst_29396);

(statearr_29450_29479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (14))){
var state_29429__$1 = state_29429;
var statearr_29451_29480 = state_29429__$1;
(statearr_29451_29480[(2)] = null);

(statearr_29451_29480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (16))){
var inst_29407 = (state_29429[(12)]);
var inst_29383 = (state_29429[(7)]);
var inst_29420 = (state_29429[(2)]);
var inst_29421 = (inst_29383 + (1));
var inst_29383__$1 = inst_29421;
var inst_29384 = inst_29407;
var state_29429__$1 = (function (){var statearr_29452 = state_29429;
(statearr_29452[(7)] = inst_29383__$1);

(statearr_29452[(13)] = inst_29420);

(statearr_29452[(9)] = inst_29384);

return statearr_29452;
})();
var statearr_29453_29481 = state_29429__$1;
(statearr_29453_29481[(2)] = null);

(statearr_29453_29481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (10))){
var inst_29407 = (state_29429[(12)]);
var inst_29410 = cljs.core.complement.call(null,inst_29407);
var inst_29411 = cljs.core.some.call(null,inst_29410,client_ids_unsatisfied);
var state_29429__$1 = state_29429;
var statearr_29454_29482 = state_29429__$1;
(statearr_29454_29482[(2)] = inst_29411);

(statearr_29454_29482[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (8))){
var state_29429__$1 = state_29429;
var statearr_29455_29483 = state_29429__$1;
(statearr_29455_29483[(2)] = null);

(statearr_29455_29483[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28953__auto__,client_ids_unsatisfied,vec__29379,map__29380,map__29380__$1,nmax_attempts,ms_base,ms_rand))
;
return ((function (switch__28932__auto__,c__28953__auto__,client_ids_unsatisfied,vec__29379,map__29380,map__29380__$1,nmax_attempts,ms_base,ms_rand){
return (function() {
var taoensso$sente$state_machine__28933__auto__ = null;
var taoensso$sente$state_machine__28933__auto____0 = (function (){
var statearr_29459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29459[(0)] = taoensso$sente$state_machine__28933__auto__);

(statearr_29459[(1)] = (1));

return statearr_29459;
});
var taoensso$sente$state_machine__28933__auto____1 = (function (state_29429){
while(true){
var ret_value__28934__auto__ = (function (){try{while(true){
var result__28935__auto__ = switch__28932__auto__.call(null,state_29429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28935__auto__;
}
break;
}
}catch (e29460){if((e29460 instanceof Object)){
var ex__28936__auto__ = e29460;
var statearr_29461_29484 = state_29429;
(statearr_29461_29484[(5)] = ex__28936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29485 = state_29429;
state_29429 = G__29485;
continue;
} else {
return ret_value__28934__auto__;
}
break;
}
});
taoensso$sente$state_machine__28933__auto__ = function(state_29429){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28933__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28933__auto____1.call(this,state_29429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28933__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28933__auto____0;
taoensso$sente$state_machine__28933__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28933__auto____1;
return taoensso$sente$state_machine__28933__auto__;
})()
;})(switch__28932__auto__,c__28953__auto__,client_ids_unsatisfied,vec__29379,map__29380,map__29380__$1,nmax_attempts,ms_base,ms_rand))
})();
var state__28955__auto__ = (function (){var statearr_29462 = f__28954__auto__.call(null);
(statearr_29462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28953__auto__);

return statearr_29462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28955__auto__);
});})(c__28953__auto__,client_ids_unsatisfied,vec__29379,map__29380,map__29380__$1,nmax_attempts,ms_base,ms_rand))
);

return c__28953__auto__;
}
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$applyTo = (function (seq29374){
var G__29375 = cljs.core.first.call(null,seq29374);
var seq29374__$1 = cljs.core.next.call(null,seq29374);
var G__29376 = cljs.core.first.call(null,seq29374__$1);
var seq29374__$2 = cljs.core.next.call(null,seq29374__$1);
var G__29377 = cljs.core.first.call(null,seq29374__$2);
var seq29374__$3 = cljs.core.next.call(null,seq29374__$2);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29375,G__29376,G__29377,seq29374__$3);
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

/**
 * Implementation detail
 */
taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__26334__auto__ = (((chsk == null))?null:chsk);
var m__26335__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__26334__auto__)]);
if(!((m__26335__auto__ == null))){
return m__26335__auto__.call(null,chsk);
} else {
var m__26335__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__26335__auto____$1 == null))){
return m__26335__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-connect!",chsk);
}
}
}
});

/**
 * Implementation detail
 */
taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__26334__auto__ = (((chsk == null))?null:chsk);
var m__26335__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__26334__auto__)]);
if(!((m__26335__auto__ == null))){
return m__26335__auto__.call(null,chsk,ev,opts);
} else {
var m__26335__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__26335__auto____$1 == null))){
return m__26335__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-send!",chsk);
}
}
}
});

/**
 * DEPRECATED: Please use `chsk-disconnect!` instead
 */
taoensso.sente.chsk_destroy_BANG_ = (function taoensso$sente$chsk_destroy_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1(chsk);
} else {
var x__26334__auto__ = (((chsk == null))?null:chsk);
var m__26335__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__26334__auto__)]);
if(!((m__26335__auto__ == null))){
return m__26335__auto__.call(null,chsk);
} else {
var m__26335__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(!((m__26335__auto____$1 == null))){
return m__26335__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-destroy!",chsk);
}
}
}
});

/**
 * Disconnects channel socket
 */
taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1(chsk);
} else {
var x__26334__auto__ = (((chsk == null))?null:chsk);
var m__26335__auto__ = (taoensso.sente.chsk_disconnect_BANG_[goog.typeOf(x__26334__auto__)]);
if(!((m__26335__auto__ == null))){
return m__26335__auto__.call(null,chsk);
} else {
var m__26335__auto____$1 = (taoensso.sente.chsk_disconnect_BANG_["_"]);
if(!((m__26335__auto____$1 == null))){
return m__26335__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-disconnect!",chsk);
}
}
}
});

/**
 * Reconnects channel socket (useful for reauthenticating after login/logout, etc.)
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__26334__auto__ = (((chsk == null))?null:chsk);
var m__26335__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__26334__auto__)]);
if(!((m__26335__auto__ == null))){
return m__26335__auto__.call(null,chsk);
} else {
var m__26335__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(!((m__26335__auto____$1 == null))){
return m__26335__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-reconnect!",chsk);
}
}
}
});

/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args29486 = [];
var len__26741__auto___29489 = arguments.length;
var i__26742__auto___29490 = (0);
while(true){
if((i__26742__auto___29490 < len__26741__auto___29489)){
args29486.push((arguments[i__26742__auto___29490]));

var G__29491 = (i__26742__auto___29490 + (1));
i__26742__auto___29490 = G__29491;
continue;
} else {
}
break;
}

var G__29488 = args29486.length;
switch (G__29488) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29486.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init2176211180087739371.clj",646,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__25671__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__25671__auto__){
return or__25671__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nneg-int? ?timeout-ms)))")].join('')));
}

if(cljs.core.truth_((function (){var or__25671__auto__ = (_QMARK_cb == null);
if(or__25671__auto__){
return or__25671__auto__;
} else {
var or__25671__auto____$1 = cljs.core.ifn_QMARK_.call(null,_QMARK_cb);
if(or__25671__auto____$1){
return or__25671__auto____$1;
} else {
return taoensso.encore.chan_QMARK_.call(null,_QMARK_cb);
}
}
})())){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb should be nil, an ifn, or a channel: %s",cljs.core.type.call(null,_QMARK_cb))),cljs.core.str("\n"),cljs.core.str("(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))")].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4425__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto__)){
var cb_uuid = temp__4425__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4425__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4425__auto__))
);
} else {
return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__29493,merge_state){
var map__29497 = p__29493;
var map__29497__$1 = ((((!((map__29497 == null)))?((((map__29497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29497):map__29497);
var chsk = map__29497__$1;
var chs = cljs.core.get.call(null,map__29497__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__29497__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__29499 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__29497,map__29497__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__25659__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__25659__auto__)){
var and__25659__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__25659__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__25659__auto____$1;
}
} else {
return and__25659__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__29497,map__29497__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__29499,(0),null);
var new_state = cljs.core.nth.call(null,vec__29499,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new_state);

return new_state;
} else {
return null;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var __x_29504 = _QMARK_cb;
try{if(cljs.core.truth_(taoensso.encore.chan_QMARK_.call(null,__x_29504))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29502){if((e29502 instanceof Error)){
var __t_29505 = e29502;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",__x_29504,__t_29505,null);
} else {
throw e29502;

}
}
taoensso.sente.assert_event.call(null,ev);

var vec__29503 = ev;
var ev_id = cljs.core.nth.call(null,vec__29503,(0),null);
var _ = cljs.core.nth.call(null,vec__29503,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__29503,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__29503,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init2176211180087739371.clj",703,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null);

var buffered_evs = (function (){var __x = clj;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29511){if((e29511 instanceof Error)){
var __t = e29511;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",__x,__t,null);
} else {
throw e29511;

}
}})();
var seq__29512 = cljs.core.seq.call(null,buffered_evs);
var chunk__29513 = null;
var count__29514 = (0);
var i__29515 = (0);
while(true){
if((i__29515 < count__29514)){
var ev = cljs.core._nth.call(null,chunk__29513,i__29515);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__29516 = seq__29512;
var G__29517 = chunk__29513;
var G__29518 = count__29514;
var G__29519 = (i__29515 + (1));
seq__29512 = G__29516;
chunk__29513 = G__29517;
count__29514 = G__29518;
i__29515 = G__29519;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29512);
if(temp__4425__auto__){
var seq__29512__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29512__$1)){
var c__26482__auto__ = cljs.core.chunk_first.call(null,seq__29512__$1);
var G__29520 = cljs.core.chunk_rest.call(null,seq__29512__$1);
var G__29521 = c__26482__auto__;
var G__29522 = cljs.core.count.call(null,c__26482__auto__);
var G__29523 = (0);
seq__29512 = G__29520;
chunk__29513 = G__29521;
count__29514 = G__29522;
i__29515 = G__29523;
continue;
} else {
var ev = cljs.core.first.call(null,seq__29512__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__29524 = cljs.core.next.call(null,seq__29512__$1);
var G__29525 = null;
var G__29526 = (0);
var G__29527 = (0);
seq__29512 = G__29524;
chunk__29513 = G__29525;
count__29514 = G__29526;
i__29515 = G__29527;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handle_when_handshake_BANG_ = (function taoensso$sente$handle_when_handshake_BANG_(chsk,chs,clj){
var handshake_QMARK_ = (cljs.core.vector_QMARK_.call(null,clj)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,clj),new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686)));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init2176211180087739371.clj",713,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj], null);
});})(handshake_QMARK_))
,null)),null);

if(handshake_QMARK_){
var vec__29530 = clj;
var _ = cljs.core.nth.call(null,vec__29530,(0),null);
var vec__29531 = cljs.core.nth.call(null,vec__29530,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__29531,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__29531,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__29531,(2),null);
var handshake_ev = vec__29530;
if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init2176211180087739371.clj",719,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__29530,_,vec__29531,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__29530,_,vec__29531,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_))
,null)),null);
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token], null));

taoensso.sente.assert_event.call(null,handshake_ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.kalive_ms = kalive_ms;
this.kalive_timer_ = kalive_timer_;
this.kalive_due_QMARK__ = kalive_due_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.active_retry_id_ = active_retry_id_;
this.retry_count_ = retry_count_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26293__auto__,k__26294__auto__){
var self__ = this;
var this__26293__auto____$1 = this;
return cljs.core._lookup.call(null,this__26293__auto____$1,k__26294__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26295__auto__,k29533,else__26296__auto__){
var self__ = this;
var this__26295__auto____$1 = this;
var G__29535 = (((k29533 instanceof cljs.core.Keyword))?k29533.fqn:null);
switch (G__29535) {
case "client-id":
return self__.client_id;

break;
case "kalive-ms":
return self__.kalive_ms;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "active-retry-id_":
return self__.active_retry_id_;

break;
case "kalive-due?_":
return self__.kalive_due_QMARK__;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "kalive-timer_":
return self__.kalive_timer_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29533,else__26296__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26307__auto__,writer__26308__auto__,opts__26309__auto__){
var self__ = this;
var this__26307__auto____$1 = this;
var pr_pair__26310__auto__ = ((function (this__26307__auto____$1){
return (function (keyval__26311__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26308__auto__,cljs.core.pr_writer,""," ","",opts__26309__auto__,keyval__26311__auto__);
});})(this__26307__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26308__auto__,pr_pair__26310__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__26309__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29532){
var self__ = this;
var G__29532__$1 = this;
return (new cljs.core.RecordIter((0),G__29532__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26291__auto__){
var self__ = this;
var this__26291__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26287__auto__){
var self__ = this;
var this__26287__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26297__auto__){
var self__ = this;
var this__26297__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26288__auto__){
var self__ = this;
var this__26288__auto____$1 = this;
var h__26106__auto__ = self__.__hash;
if(!((h__26106__auto__ == null))){
return h__26106__auto__;
} else {
var h__26106__auto____$1 = cljs.core.hash_imap.call(null,this__26288__auto____$1);
self__.__hash = h__26106__auto____$1;

return h__26106__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26289__auto__,other__26290__auto__){
var self__ = this;
var this__26289__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25659__auto__ = other__26290__auto__;
if(cljs.core.truth_(and__25659__auto__)){
var and__25659__auto____$1 = (this__26289__auto____$1.constructor === other__26290__auto__.constructor);
if(and__25659__auto____$1){
return cljs.core.equiv_map.call(null,this__26289__auto____$1,other__26290__auto__);
} else {
return and__25659__auto____$1;
}
} else {
return and__25659__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26302__auto__,k__26303__auto__){
var self__ = this;
var this__26302__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__26303__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26302__auto____$1),self__.__meta),k__26303__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26303__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26300__auto__,k__26301__auto__,G__29532){
var self__ = this;
var this__26300__auto____$1 = this;
var pred__29536 = cljs.core.keyword_identical_QMARK_;
var expr__29537 = k__26301__auto__;
if(cljs.core.truth_(pred__29536.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__29537))){
return (new taoensso.sente.ChWebSocket(G__29532,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29536.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__29537))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__29532,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29536.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__29537))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__29532,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29536.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__29537))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__29532,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29536.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__29537))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__29532,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29536.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__29537))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__29532,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29536.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__29537))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__29532,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29536.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__29537))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,G__29532,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29536.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__29537))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,G__29532,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29536.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__29537))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,G__29532,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29536.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__29537))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__29532,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29536.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__29537))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__29532,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29536.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__29537))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,G__29532,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29536.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__29537))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,G__29532,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26301__auto__,G__29532),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26305__auto__){
var self__ = this;
var this__26305__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26292__auto__,G__29532){
var self__ = this;
var this__26292__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,G__29532,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26298__auto__,entry__26299__auto__){
var self__ = this;
var this__26298__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26299__auto__)){
return cljs.core._assoc.call(null,this__26298__auto____$1,cljs.core._nth.call(null,entry__26299__auto__,(0)),cljs.core._nth.call(null,entry__26299__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26298__auto____$1,entry__26299__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__29539){
var self__ = this;
var map__29540 = p__29539;
var map__29540__$1 = ((((!((map__29540 == null)))?((((map__29540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29540):map__29540);
var opts = map__29540__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__29540__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__29540__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__29540__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init2176211180087739371.clj",750,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__29540,map__29540__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__29540,map__29540__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4425__auto___29576 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___29576)){
var cb_uuid_29577 = temp__4425__auto___29576;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_29577], null),(function (){var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29542){if((e29542 instanceof Error)){
var __t = e29542;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e29542;

}
}})());

var temp__4425__auto___29578__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4425__auto___29578__$1)){
var timeout_ms_29579 = temp__4425__auto___29578__$1;
var c__28953__auto___29580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28953__auto___29580,timeout_ms_29579,temp__4425__auto___29578__$1,cb_uuid_29577,temp__4425__auto___29576,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__29540,map__29540__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__28954__auto__ = (function (){var switch__28932__auto__ = ((function (c__28953__auto___29580,timeout_ms_29579,temp__4425__auto___29578__$1,cb_uuid_29577,temp__4425__auto___29576,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__29540,map__29540__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_29553){
var state_val_29554 = (state_29553[(1)]);
if((state_val_29554 === (1))){
var inst_29543 = cljs.core.async.timeout.call(null,timeout_ms_29579);
var state_29553__$1 = state_29553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29553__$1,(2),inst_29543);
} else {
if((state_val_29554 === (2))){
var inst_29546 = (state_29553[(7)]);
var inst_29545 = (state_29553[(2)]);
var inst_29546__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_29553__$1 = (function (){var statearr_29555 = state_29553;
(statearr_29555[(7)] = inst_29546__$1);

(statearr_29555[(8)] = inst_29545);

return statearr_29555;
})();
if(cljs.core.truth_(inst_29546__$1)){
var statearr_29556_29581 = state_29553__$1;
(statearr_29556_29581[(1)] = (3));

} else {
var statearr_29557_29582 = state_29553__$1;
(statearr_29557_29582[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (3))){
var inst_29546 = (state_29553[(7)]);
var inst_29548 = inst_29546.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_29553__$1 = state_29553;
var statearr_29558_29583 = state_29553__$1;
(statearr_29558_29583[(2)] = inst_29548);

(statearr_29558_29583[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (4))){
var state_29553__$1 = state_29553;
var statearr_29559_29584 = state_29553__$1;
(statearr_29559_29584[(2)] = null);

(statearr_29559_29584[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (5))){
var inst_29551 = (state_29553[(2)]);
var state_29553__$1 = state_29553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29553__$1,inst_29551);
} else {
return null;
}
}
}
}
}
});})(c__28953__auto___29580,timeout_ms_29579,temp__4425__auto___29578__$1,cb_uuid_29577,temp__4425__auto___29576,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__29540,map__29540__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__28932__auto__,c__28953__auto___29580,timeout_ms_29579,temp__4425__auto___29578__$1,cb_uuid_29577,temp__4425__auto___29576,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__29540,map__29540__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__28933__auto__ = null;
var taoensso$sente$state_machine__28933__auto____0 = (function (){
var statearr_29563 = [null,null,null,null,null,null,null,null,null];
(statearr_29563[(0)] = taoensso$sente$state_machine__28933__auto__);

(statearr_29563[(1)] = (1));

return statearr_29563;
});
var taoensso$sente$state_machine__28933__auto____1 = (function (state_29553){
while(true){
var ret_value__28934__auto__ = (function (){try{while(true){
var result__28935__auto__ = switch__28932__auto__.call(null,state_29553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28935__auto__;
}
break;
}
}catch (e29564){if((e29564 instanceof Object)){
var ex__28936__auto__ = e29564;
var statearr_29565_29585 = state_29553;
(statearr_29565_29585[(5)] = ex__28936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29586 = state_29553;
state_29553 = G__29586;
continue;
} else {
return ret_value__28934__auto__;
}
break;
}
});
taoensso$sente$state_machine__28933__auto__ = function(state_29553){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28933__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28933__auto____1.call(this,state_29553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28933__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28933__auto____0;
taoensso$sente$state_machine__28933__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28933__auto____1;
return taoensso$sente$state_machine__28933__auto__;
})()
;})(switch__28932__auto__,c__28953__auto___29580,timeout_ms_29579,temp__4425__auto___29578__$1,cb_uuid_29577,temp__4425__auto___29576,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__29540,map__29540__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__28955__auto__ = (function (){var statearr_29566 = f__28954__auto__.call(null);
(statearr_29566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28953__auto___29580);

return statearr_29566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28955__auto__);
});})(c__28953__auto___29580,timeout_ms_29579,temp__4425__auto___29578__$1,cb_uuid_29577,temp__4425__auto___29576,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__29540,map__29540__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e29567){if((e29567 instanceof Error)){
var e = e29567;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init2176211180087739371.clj",769,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__29540,map__29540__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__29540,map__29540__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

var temp__4425__auto___29587 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___29587)){
var cb_uuid_29588 = temp__4425__auto___29587;
var cb_fn_STAR__29589 = (function (){var or__25671__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_29588);
if(cljs.core.truth_(or__25671__auto__)){
return or__25671__auto__;
} else {
var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29568){if((e29568 instanceof Error)){
var __t = e29568;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e29568;

}
}}
})();
cb_fn_STAR__29589.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e29567;

}
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
return taoensso.sente.chsk_disconnect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"disconnected");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

var temp__4425__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4425__auto__)){
var s = temp__4425__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"reconnecting");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4425__auto___29590 = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4425__auto___29590)){
var s_29591 = temp__4425__auto___29590;
s_29591.close((3000),"SENTE_RECONNECT");
} else {
}

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4425__auto__ = (function (){var or__25671__auto__ = taoensso.encore.oget.call(null,window,"WebSocket");
if(cljs.core.truth_(or__25671__auto__)){
return or__25671__auto__;
} else {
return taoensso.encore.oget.call(null,window,"MozWebSocket");
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var WebSocket = temp__4425__auto__;
var retry_id = taoensso.encore.uuid_str.call(null);
var connect_fn = ((function (retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
var retry_fn = ((function (retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = cljs.core.swap_BANG_.call(null,self__.retry_count_,cljs.core.inc);
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
window.clearInterval(cljs.core.deref.call(null,self__.kalive_timer_));

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init2176211180087739371.clj",800,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s)",retry_count_STAR_], null);
});})(retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);

return window.setTimeout(taoensso$sente$connect_fn,backoff_ms);
} else {
return null;
}
});})(retry_id,WebSocket,temp__4425__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e29572){if((e29572 instanceof Error)){
var e = e29572;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init2176211180087739371.clj",811,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_fn,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);

return null;
} else {
throw e29572;

}
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__29573 = _QMARK_socket;
(G__29573["onerror"] = ((function (G__29573,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init2176211180087739371.clj",820,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__29573,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",ws_ev], null);
});})(G__29573,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
});})(G__29573,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__29573["onmessage"] = ((function (G__29573,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__29574 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__29574,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__29574,(1),null);
var or__25671__auto__ = (function (){var and__25659__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__25659__auto__)){
return cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));
} else {
return and__25659__auto__;
}
})();
if(cljs.core.truth_(or__25671__auto__)){
return or__25671__auto__;
} else {
var temp__4423__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4423__auto__)){
var cb_uuid = temp__4423__auto__;
var temp__4423__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4423__auto____$1)){
var cb_fn = temp__4423__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init2176211180087739371.clj",838,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4423__auto____$1,cb_uuid,temp__4423__auto__,or__25671__auto__,ppstr,vec__29574,clj,_QMARK_cb_uuid,G__29573,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4423__auto____$1,cb_uuid,temp__4423__auto__,or__25671__auto__,ppstr,vec__29574,clj,_QMARK_cb_uuid,G__29573,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__29573,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__29573["onopen"] = ((function (G__29573,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__29573,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__29573,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__29573,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__29573["onclose"] = ((function (G__29573,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);
});})(G__29573,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

return G__29573;
})());
}
});})(retry_id,WebSocket,temp__4425__auto__,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,retry_id);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

connect_fn.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"kalive-ms","kalive-ms",1851265548,null),new cljs.core.Symbol(null,"kalive-timer_","kalive-timer_",-1096022620,null),new cljs.core.Symbol(null,"kalive-due?_","kalive-due?_",1679969599,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"active-retry-id_","active-retry-id_",1468292413,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__26327__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__26327__auto__,writer__26328__auto__){
return cljs.core._write.call(null,writer__26328__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__29534){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__29534),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__29534),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__29534),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__29534),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__29534),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__29534),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__29534),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__29534),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__29534),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__29534),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__29534),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__29534),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__29534),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__29534),null,cljs.core.dissoc.call(null,G__29534,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.timeout_ms = timeout_ms;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.active_retry_id_ = active_retry_id_;
this.backoff_ms_fn = backoff_ms_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26293__auto__,k__26294__auto__){
var self__ = this;
var this__26293__auto____$1 = this;
return cljs.core._lookup.call(null,this__26293__auto____$1,k__26294__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26295__auto__,k29593,else__26296__auto__){
var self__ = this;
var this__26295__auto____$1 = this;
var G__29595 = (((k29593 instanceof cljs.core.Keyword))?k29593.fqn:null);
switch (G__29595) {
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "url":
return self__.url;

break;
case "active-retry-id_":
return self__.active_retry_id_;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "timeout-ms":
return self__.timeout_ms;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29593,else__26296__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26307__auto__,writer__26308__auto__,opts__26309__auto__){
var self__ = this;
var this__26307__auto____$1 = this;
var pr_pair__26310__auto__ = ((function (this__26307__auto____$1){
return (function (keyval__26311__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26308__auto__,cljs.core.pr_writer,""," ","",opts__26309__auto__,keyval__26311__auto__);
});})(this__26307__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26308__auto__,pr_pair__26310__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__26309__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29592){
var self__ = this;
var G__29592__$1 = this;
return (new cljs.core.RecordIter((0),G__29592__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26291__auto__){
var self__ = this;
var this__26291__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26287__auto__){
var self__ = this;
var this__26287__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26297__auto__){
var self__ = this;
var this__26297__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26288__auto__){
var self__ = this;
var this__26288__auto____$1 = this;
var h__26106__auto__ = self__.__hash;
if(!((h__26106__auto__ == null))){
return h__26106__auto__;
} else {
var h__26106__auto____$1 = cljs.core.hash_imap.call(null,this__26288__auto____$1);
self__.__hash = h__26106__auto____$1;

return h__26106__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26289__auto__,other__26290__auto__){
var self__ = this;
var this__26289__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25659__auto__ = other__26290__auto__;
if(cljs.core.truth_(and__25659__auto__)){
var and__25659__auto____$1 = (this__26289__auto____$1.constructor === other__26290__auto__.constructor);
if(and__25659__auto____$1){
return cljs.core.equiv_map.call(null,this__26289__auto____$1,other__26290__auto__);
} else {
return and__25659__auto____$1;
}
} else {
return and__25659__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26302__auto__,k__26303__auto__){
var self__ = this;
var this__26302__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__26303__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26302__auto____$1),self__.__meta),k__26303__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26303__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26300__auto__,k__26301__auto__,G__29592){
var self__ = this;
var this__26300__auto____$1 = this;
var pred__29596 = cljs.core.keyword_identical_QMARK_;
var expr__29597 = k__26301__auto__;
if(cljs.core.truth_(pred__29596.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__29597))){
return (new taoensso.sente.ChAjaxSocket(G__29592,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29596.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__29597))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__29592,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29596.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__29597))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__29592,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29596.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__29597))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__29592,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29596.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__29597))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__29592,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29596.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__29597))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__29592,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29596.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__29597))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__29592,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29596.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__29597))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,G__29592,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29596.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__29597))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,G__29592,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29596.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__29597))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__29592,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29596.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__29597))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,G__29592,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26301__auto__,G__29592),null));
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26305__auto__){
var self__ = this;
var this__26305__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26292__auto__,G__29592){
var self__ = this;
var this__26292__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,G__29592,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26298__auto__,entry__26299__auto__){
var self__ = this;
var this__26298__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26299__auto__)){
return cljs.core._assoc.call(null,this__26298__auto____$1,cljs.core._nth.call(null,entry__26299__auto__,(0)),cljs.core._nth.call(null,entry__26299__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26298__auto____$1,entry__26299__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__29599){
var self__ = this;
var map__29600 = p__29599;
var map__29600__$1 = ((((!((map__29600 == null)))?((((map__29600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29600):map__29600);
var opts = map__29600__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__29600__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__29600__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__29600__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init2176211180087739371.clj",879,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__29600,map__29600__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__29600,map__29600__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,_QMARK_cb_fn,chsk__$1,map__29600,map__29600__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__29602){
var map__29606 = p__29602;
var map__29606__$1 = ((((!((map__29606 == null)))?((((map__29606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29606):map__29606);
var _QMARK_error = cljs.core.get.call(null,map__29606__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__29606__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__29608 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__29608,(0),null);
var _ = cljs.core.nth.call(null,vec__29608,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init2176211180087739371.clj",919,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__29608,resp_clj,_,map__29606,map__29606__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__29600,map__29600__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__29608,resp_clj,_,map__29606,map__29606__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__29600,map__29600__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(csrf_token,_QMARK_cb_fn,chsk__$1,map__29600,map__29600__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
return taoensso.sente.chsk_disconnect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"disconnected");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

var temp__4425__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4425__auto__)){
var x = temp__4425__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"reconnecting");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4425__auto___29624 = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4425__auto___29624)){
var x_29625 = temp__4425__auto___29624;
x_29625.abort();
} else {
}

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var retry_id = taoensso.encore.uuid_str.call(null);
var poll_fn = ((function (retry_id,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init2176211180087739371.clj",940,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(retry_id,chsk__$1))
,null)),null);

var retry_fn = ((function (retry_id,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init2176211180087739371.clj",946,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s)",retry_count_STAR_], null);
});})(retry_count_STAR_,backoff_ms,retry_id,chsk__$1))
,null)),null);

return window.setTimeout(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,retry_id,chsk__$1))
,backoff_ms);
} else {
return null;
}
});})(retry_id,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,retry_id,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__29616){
var map__29620 = p__29616;
var map__29620__$1 = ((((!((map__29620 == null)))?((((map__29620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29620):map__29620);
var _QMARK_error = cljs.core.get.call(null,map__29620__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__29620__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__29622 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__29622,(0),null);
var _ = cljs.core.nth.call(null,vec__29622,(1),null);
var or__25671__auto___29626 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__25671__auto___29626)){
} else {
var buffered_evs_29627 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_29627);

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}

return taoensso$sente$poll_fn.call(null,(0));
}
});})(retry_fn,retry_id,chsk__$1))
));
});})(retry_id,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,retry_id);

poll_fn.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null),new cljs.core.Symbol(null,"active-retry-id_","active-retry-id_",1468292413,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__26327__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__26327__auto__,writer__26328__auto__){
return cljs.core._write.call(null,writer__26328__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__29594){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__29594),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__29594),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__29594),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__29594),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__29594),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__29594),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__29594),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__29594),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__29594),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__29594),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__29594),null,cljs.core.dissoc.call(null,G__29594,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)),null));
});

taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__29629 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29629) {
case "ajax":
return protocol;

break;
case "ws":
if(cljs.core._EQ_.call(null,protocol,"https:")){
return "wss:";
} else {
return "ws:";
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(taoensso.encore.path.call(null,chsk_host,chsk_path))].join('');
});
/**
 * Returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *           ; May `put!` (inject) arbitrary `event`s to this channel.
 *  :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *  :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *  :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *  :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto)
 *  :host           ; Server host (defaults to current page's host)
 *  :params         ; Map of any params to incl. in chsk Ring requests (handy for
 *                  ; application-level auth, etc.)
 *  :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity w/in given
 *                  ; number of milliseconds
 *  :lp-timeout-ms  ; Ping to keep a long-polling (Ajax) conn alive '' [1]
 *  :packer         ; :edn (default), or an IPacker implementation (experimental)
 *  :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`
 *  :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 * 
 *   [1] If you're using Immutant and override the default :lp-timeout-ms, you'll
 *    need to provide the same timeout value to
 *    `taoensso.sente.server-adapters.immutant/make-immutant-adapter` and use
 *    the result of that function as the web server adapter to your server-side
 *    `make-channel-socket-server!`.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__26748__auto__ = [];
var len__26741__auto___29645 = arguments.length;
var i__26742__auto___29646 = (0);
while(true){
if((i__26742__auto___29646 < len__26741__auto___29645)){
args__26748__auto__.push((arguments[i__26742__auto___29646]));

var G__29647 = (i__26742__auto___29646 + (1));
i__26742__auto___29646 = G__29647;
continue;
} else {
}
break;
}

var argseq__26749__auto__ = ((((1) < args__26748__auto__.length))?(new cljs.core.IndexedSeq(args__26748__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26749__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__29634){
var vec__29635 = p__29634;
var map__29636 = cljs.core.nth.call(null,vec__29635,(0),null);
var map__29636__$1 = ((((!((map__29636 == null)))?((((map__29636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29636):map__29636);
var opts = map__29636__$1;
var ajax_opts = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var client_id = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__25671__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25671__auto__)){
return or__25671__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__29635,(1),null);
if(cljs.core.truth_((function (){var __x = type;
try{if(((function (__x,vec__29635,map__29636,map__29636__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (__x__$1){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),__x__$1);
});})(__x,vec__29635,map__29636,map__29636__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29638){if((e29638 instanceof Error)){
var __t = e29638;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",__x,__t,null);
} else {
throw e29638;

}
}})())){
} else {
throw (new Error("Assert failed: (have? [:in #{:ws :ajax :auto}] type)"));
}

if(cljs.core.truth_((function (){var __x = client_id;
try{if(cljs.core.truth_(taoensso.encore.nblank_str_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29639){if((e29639 instanceof Error)){
var __t = e29639;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",__x,__t,null);
} else {
throw e29639;

}
}})())){
} else {
throw (new Error("Assert failed: (have? enc/nblank-str? client-id)"));
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init2176211180087739371.clj",1055,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__29635,map__29636,map__29636__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__29635,map__29636,map__29636__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init2176211180087739371.clj",1057,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__29635,map__29636,map__29636__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__29635,map__29636,map__29636__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var win_location = taoensso.encore.get_window_location.call(null);
var win_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_location);
var host__$1 = (function (){var or__25671__auto__ = host;
if(cljs.core.truth_(or__25671__auto__)){
return or__25671__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var path__$1 = (function (){var or__25671__auto__ = path;
if(cljs.core.truth_(or__25671__auto__)){
return or__25671__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__29635,map__29636,map__29636__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__25671__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__25671__auto__){
return or__25671__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__29635,map__29636,map__29636__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__29635,map__29636,map__29636__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__29635,map__29636,map__29636__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),(function (){var _LT_server_ch = new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs);
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__29635,map__29636,map__29636__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__29635,map__29636,map__29636__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
} else {
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__29635,map__29636,map__29636__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__29640 = ev;
var id = cljs.core.nth.call(null,vec__29640,(0),null);
var _QMARK_data = cljs.core.nth.call(null,vec__29640,(1),null);
var __x_29648 = (function (){try{return cljs.core.namespace.call(null,id);
}catch (e29641){if((e29641 instanceof Error)){
var __t = e29641;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__29631#] (not= p1__29631# \"chsk\")) (namespace id))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e29641;

}
}})();
try{if(((function (__x_29648,vec__29640,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__29635,map__29636,map__29636__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (p1__29631_SHARP_){
return cljs.core.not_EQ_.call(null,p1__29631_SHARP_,"chsk");
});})(__x_29648,vec__29640,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__29635,map__29636,map__29636__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x_29648)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29642){if((e29642 instanceof Error)){
var __t_29649 = e29642;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__29631#] (not= p1__29631# \"chsk\")) (namespace id))",__x_29648,__t_29649,null);
} else {
throw e29642;

}
}
return ev;
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__29635,map__29636,map__29636__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
}
})()], null));
var chsk = (function (){var or__25671__auto__ = (function (){var and__25659__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__25659__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,packer__$1,private_chs,params,cljs.core.atom.call(null,(0)),backoff_ms_fn,cljs.core.atom.call(null,null),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ws","ws",86841443));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
}
})(),cljs.core.atom.call(null,"pending"),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__25659__auto__;
}
})();
if(cljs.core.truth_(or__25671__auto__)){
return or__25671__auto__;
} else {
var and__25659__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__25659__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"state_","state_",957667102)],[cljs.core.atom.call(null,null),client_id,packer__$1,private_chs,params,backoff_ms_fn,(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
}
})(),cljs.core.atom.call(null,"pending"),ajax_opts,lp_timeout_ms,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__25659__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str("chsk")].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__29635,map__29636,map__29636__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__29644 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__29644,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__29644,(1),null);
var ev__$1 = vec__29644;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__29635,map__29636,map__29636__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq29632){
var G__29633 = cljs.core.first.call(null,seq29632);
var seq29632__$1 = cljs.core.next.call(null,seq29632);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29633,seq29632__$1);
});
taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__29856 = opts;
var map__29856__$1 = ((((!((map__29856 == null)))?((((map__29856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29856):map__29856);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__29856__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__29856__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__28953__auto___30062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28953__auto___30062,map__29856,map__29856__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
var f__28954__auto__ = (function (){var switch__28932__auto__ = ((function (c__28953__auto___30062,map__29856,map__29856__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (state_29987){
var state_val_29988 = (state_29987[(1)]);
if((state_val_29988 === (7))){
var inst_29983 = (state_29987[(2)]);
var state_29987__$1 = state_29987;
var statearr_29989_30063 = state_29987__$1;
(statearr_29989_30063[(2)] = inst_29983);

(statearr_29989_30063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (20))){
var inst_29891 = (state_29987[(7)]);
var inst_29867 = (state_29987[(8)]);
var inst_29866 = (state_29987[(9)]);
var inst_29864 = (state_29987[(10)]);
var inst_29865 = (state_29987[(11)]);
var inst_29892 = (state_29987[(12)]);
var inst_29902 = (function (){var vec__29859 = inst_29864;
var v = inst_29865;
var p = inst_29866;
var stop_QMARK_ = inst_29867;
var map__29870 = inst_29891;
var event_msg = inst_29891;
var event = inst_29892;
return ((function (vec__29859,v,p,stop_QMARK_,map__29870,event_msg,event,inst_29891,inst_29867,inst_29866,inst_29864,inst_29865,inst_29892,state_val_29988,c__28953__auto___30062,map__29856,map__29856__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__29859,v,p,stop_QMARK_,map__29870,event_msg,event,inst_29891,inst_29867,inst_29866,inst_29864,inst_29865,inst_29892,state_val_29988,c__28953__auto___30062,map__29856,map__29856__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_29903 = (new cljs.core.Delay(inst_29902,null));
var inst_29904 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init2176211180087739371.clj",1176,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_29903,null);
var state_29987__$1 = state_29987;
var statearr_29990_30064 = state_29987__$1;
(statearr_29990_30064[(2)] = inst_29904);

(statearr_29990_30064[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (27))){
var inst_29891 = (state_29987[(7)]);
var inst_29909 = (state_29987[(2)]);
var inst_29910 = "(server-event-msg? event-msg)";
var inst_29911 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_29910,inst_29891,inst_29909,null);
var state_29987__$1 = state_29987;
var statearr_29991_30065 = state_29987__$1;
(statearr_29991_30065[(2)] = inst_29911);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29987__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (1))){
var state_29987__$1 = state_29987;
var statearr_29992_30066 = state_29987__$1;
(statearr_29992_30066[(2)] = null);

(statearr_29992_30066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (24))){
var state_29987__$1 = state_29987;
var statearr_29993_30067 = state_29987__$1;
(statearr_29993_30067[(2)] = null);

(statearr_29993_30067[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (39))){
var state_29987__$1 = state_29987;
var statearr_29994_30068 = state_29987__$1;
(statearr_29994_30068[(2)] = null);

(statearr_29994_30068[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (46))){
var inst_29956 = (state_29987[(13)]);
var inst_29964 = (state_29987[(2)]);
var inst_29965 = [inst_29964,null];
var inst_29966 = (new cljs.core.PersistentVector(null,2,(5),inst_29956,inst_29965,null));
var state_29987__$1 = state_29987;
var statearr_29995_30069 = state_29987__$1;
(statearr_29995_30069[(2)] = inst_29966);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29987__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (4))){
var inst_29867 = (state_29987[(8)]);
var inst_29866 = (state_29987[(9)]);
var inst_29864 = (state_29987[(10)]);
var inst_29864__$1 = (state_29987[(2)]);
var inst_29865 = cljs.core.nth.call(null,inst_29864__$1,(0),null);
var inst_29866__$1 = cljs.core.nth.call(null,inst_29864__$1,(1),null);
var inst_29867__$1 = taoensso.encore.kw_identical_QMARK_.call(null,inst_29866__$1,ch_ctrl);
var state_29987__$1 = (function (){var statearr_29996 = state_29987;
(statearr_29996[(8)] = inst_29867__$1);

(statearr_29996[(9)] = inst_29866__$1);

(statearr_29996[(10)] = inst_29864__$1);

(statearr_29996[(11)] = inst_29865);

return statearr_29996;
})();
if(cljs.core.truth_(inst_29867__$1)){
var statearr_29997_30070 = state_29987__$1;
(statearr_29997_30070[(1)] = (5));

} else {
var statearr_29998_30071 = state_29987__$1;
(statearr_29998_30071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (15))){
var inst_29865 = (state_29987[(11)]);
var state_29987__$1 = state_29987;
var statearr_29999_30072 = state_29987__$1;
(statearr_29999_30072[(2)] = inst_29865);

(statearr_29999_30072[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (48))){
var state_29987__$1 = state_29987;
var statearr_30000_30073 = state_29987__$1;
(statearr_30000_30073[(2)] = null);

(statearr_30000_30073[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (21))){
var state_29987__$1 = state_29987;
var statearr_30001_30074 = state_29987__$1;
(statearr_30001_30074[(2)] = null);

(statearr_30001_30074[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (31))){
var inst_29920 = (state_29987[(2)]);
var state_29987__$1 = state_29987;
var statearr_30002_30075 = state_29987__$1;
(statearr_30002_30075[(2)] = inst_29920);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29987__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (32))){
var inst_29937 = (state_29987[(2)]);
var state_29987__$1 = state_29987;
var statearr_30003_30076 = state_29987__$1;
(statearr_30003_30076[(2)] = inst_29937);

(statearr_30003_30076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (40))){
var inst_29980 = (state_29987[(2)]);
var state_29987__$1 = (function (){var statearr_30004 = state_29987;
(statearr_30004[(14)] = inst_29980);

return statearr_30004;
})();
var statearr_30005_30077 = state_29987__$1;
(statearr_30005_30077[(2)] = null);

(statearr_30005_30077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (33))){
var inst_29891 = (state_29987[(7)]);
var inst_29924 = (state_29987[(2)]);
var inst_29925 = "(client-event-msg? event-msg)";
var inst_29926 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_29925,inst_29891,inst_29924,null);
var state_29987__$1 = state_29987;
var statearr_30006_30078 = state_29987__$1;
(statearr_30006_30078[(2)] = inst_29926);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29987__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (13))){
var inst_29883 = (state_29987[(2)]);
var state_29987__$1 = state_29987;
var statearr_30007_30079 = state_29987__$1;
(statearr_30007_30079[(2)] = inst_29883);

(statearr_30007_30079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (22))){
var inst_29907 = (state_29987[(2)]);
var state_29987__$1 = (function (){var statearr_30008 = state_29987;
(statearr_30008[(15)] = inst_29907);

return statearr_30008;
})();
if(cljs.core.truth_(server_QMARK_)){
var statearr_30009_30080 = state_29987__$1;
(statearr_30009_30080[(1)] = (23));

} else {
var statearr_30010_30081 = state_29987__$1;
(statearr_30010_30081[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (36))){
var inst_29933 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_29987__$1 = state_29987;
var statearr_30011_30082 = state_29987__$1;
(statearr_30011_30082[(2)] = inst_29933);

(statearr_30011_30082[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (41))){
var inst_29970 = (state_29987[(16)]);
var inst_29968 = (state_29987[(17)]);
var inst_29968__$1 = (state_29987[(2)]);
var inst_29969 = cljs.core.nth.call(null,inst_29968__$1,(0),null);
var inst_29970__$1 = cljs.core.nth.call(null,inst_29968__$1,(1),null);
var state_29987__$1 = (function (){var statearr_30012 = state_29987;
(statearr_30012[(16)] = inst_29970__$1);

(statearr_30012[(17)] = inst_29968__$1);

(statearr_30012[(18)] = inst_29969);

return statearr_30012;
})();
if(cljs.core.truth_(inst_29970__$1)){
var statearr_30013_30083 = state_29987__$1;
(statearr_30013_30083[(1)] = (47));

} else {
var statearr_30014_30084 = state_29987__$1;
(statearr_30014_30084[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (43))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29987,(42),Error,null,(41));
var inst_29956 = cljs.core.PersistentVector.EMPTY_NODE;
var state_29987__$1 = (function (){var statearr_30015 = state_29987;
(statearr_30015[(13)] = inst_29956);

return statearr_30015;
})();
if(cljs.core.truth_(error_handler)){
var statearr_30016_30085 = state_29987__$1;
(statearr_30016_30085[(1)] = (44));

} else {
var statearr_30017_30086 = state_29987__$1;
(statearr_30017_30086[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (29))){
var inst_29891 = (state_29987[(7)]);
var state_29987__$1 = state_29987;
var statearr_30018_30087 = state_29987__$1;
(statearr_30018_30087[(2)] = inst_29891);

(statearr_30018_30087[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (44))){
var inst_29946 = (state_29987[(19)]);
var inst_29891 = (state_29987[(7)]);
var inst_29958 = error_handler.call(null,inst_29946,inst_29891);
var state_29987__$1 = state_29987;
var statearr_30019_30088 = state_29987__$1;
(statearr_30019_30088[(2)] = inst_29958);

(statearr_30019_30088[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (6))){
var inst_29865 = (state_29987[(11)]);
var inst_29873 = (inst_29865 == null);
var inst_29874 = cljs.core.not.call(null,inst_29873);
var state_29987__$1 = state_29987;
if(inst_29874){
var statearr_30020_30089 = state_29987__$1;
(statearr_30020_30089[(1)] = (8));

} else {
var statearr_30021_30090 = state_29987__$1;
(statearr_30021_30090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (28))){
var inst_29891 = (state_29987[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29987,(27),Error,null,(26));
var inst_29915 = taoensso.sente.server_event_msg_QMARK_.call(null,inst_29891);
var state_29987__$1 = state_29987;
if(cljs.core.truth_(inst_29915)){
var statearr_30022_30091 = state_29987__$1;
(statearr_30022_30091[(1)] = (29));

} else {
var statearr_30023_30092 = state_29987__$1;
(statearr_30023_30092[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (25))){
var inst_29900 = (state_29987[(20)]);
var inst_29939 = (state_29987[(2)]);
var inst_29940 = event_msg_handler.call(null,inst_29939);
var inst_29941 = [inst_29940,null];
var inst_29942 = (new cljs.core.PersistentVector(null,2,(5),inst_29900,inst_29941,null));
var state_29987__$1 = state_29987;
var statearr_30024_30093 = state_29987__$1;
(statearr_30024_30093[(2)] = inst_29942);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29987__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (34))){
var inst_29891 = (state_29987[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29987,(33),Error,null,(32));
var inst_29930 = taoensso.sente.client_event_msg_QMARK_.call(null,inst_29891);
var state_29987__$1 = state_29987;
if(cljs.core.truth_(inst_29930)){
var statearr_30025_30094 = state_29987__$1;
(statearr_30025_30094[(1)] = (35));

} else {
var statearr_30026_30095 = state_29987__$1;
(statearr_30026_30095[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (17))){
var inst_29946 = (state_29987[(19)]);
var inst_29944 = (state_29987[(21)]);
var inst_29944__$1 = (state_29987[(2)]);
var inst_29945 = cljs.core.nth.call(null,inst_29944__$1,(0),null);
var inst_29946__$1 = cljs.core.nth.call(null,inst_29944__$1,(1),null);
var state_29987__$1 = (function (){var statearr_30027 = state_29987;
(statearr_30027[(19)] = inst_29946__$1);

(statearr_30027[(21)] = inst_29944__$1);

(statearr_30027[(22)] = inst_29945);

return statearr_30027;
})();
if(cljs.core.truth_(inst_29946__$1)){
var statearr_30028_30096 = state_29987__$1;
(statearr_30028_30096[(1)] = (38));

} else {
var statearr_30029_30097 = state_29987__$1;
(statearr_30029_30097[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (3))){
var inst_29985 = (state_29987[(2)]);
var state_29987__$1 = state_29987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29987__$1,inst_29985);
} else {
if((state_val_29988 === (12))){
var state_29987__$1 = state_29987;
var statearr_30030_30098 = state_29987__$1;
(statearr_30030_30098[(2)] = false);

(statearr_30030_30098[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (2))){
var inst_29860 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29861 = [ch_recv,ch_ctrl];
var inst_29862 = (new cljs.core.PersistentVector(null,2,(5),inst_29860,inst_29861,null));
var state_29987__$1 = state_29987;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29987__$1,(4),inst_29862);
} else {
if((state_val_29988 === (23))){
var state_29987__$1 = state_29987;
var statearr_30031_30099 = state_29987__$1;
(statearr_30031_30099[(2)] = null);

(statearr_30031_30099[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (47))){
var inst_29946 = (state_29987[(19)]);
var inst_29891 = (state_29987[(7)]);
var inst_29970 = (state_29987[(16)]);
var inst_29944 = (state_29987[(21)]);
var inst_29968 = (state_29987[(17)]);
var inst_29867 = (state_29987[(8)]);
var inst_29969 = (state_29987[(18)]);
var inst_29866 = (state_29987[(9)]);
var inst_29864 = (state_29987[(10)]);
var inst_29865 = (state_29987[(11)]);
var inst_29892 = (state_29987[(12)]);
var inst_29972 = (function (){var map__29870 = inst_29891;
var p = inst_29866;
var _QMARK_error = inst_29946;
var vec__29948 = inst_29968;
var temp__4425__auto__ = inst_29970;
var vec__29859 = inst_29864;
var v = inst_29865;
var _ = inst_29969;
var e2 = inst_29970;
var _QMARK_error2 = inst_29970;
var event_msg = inst_29891;
var e = inst_29946;
var event = inst_29892;
var vec__29871 = inst_29944;
var stop_QMARK_ = inst_29867;
return ((function (map__29870,p,_QMARK_error,vec__29948,temp__4425__auto__,vec__29859,v,_,e2,_QMARK_error2,event_msg,e,event,vec__29871,stop_QMARK_,inst_29946,inst_29891,inst_29970,inst_29944,inst_29968,inst_29867,inst_29969,inst_29866,inst_29864,inst_29865,inst_29892,state_val_29988,c__28953__auto___30062,map__29856,map__29856__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});
;})(map__29870,p,_QMARK_error,vec__29948,temp__4425__auto__,vec__29859,v,_,e2,_QMARK_error2,event_msg,e,event,vec__29871,stop_QMARK_,inst_29946,inst_29891,inst_29970,inst_29944,inst_29968,inst_29867,inst_29969,inst_29866,inst_29864,inst_29865,inst_29892,state_val_29988,c__28953__auto___30062,map__29856,map__29856__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_29973 = (new cljs.core.Delay(inst_29972,null));
var inst_29974 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init2176211180087739371.clj",1189,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_29973,null);
var state_29987__$1 = state_29987;
var statearr_30032_30100 = state_29987__$1;
(statearr_30032_30100[(2)] = inst_29974);

(statearr_30032_30100[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (35))){
var inst_29891 = (state_29987[(7)]);
var state_29987__$1 = state_29987;
var statearr_30033_30101 = state_29987__$1;
(statearr_30033_30101[(2)] = inst_29891);

(statearr_30033_30101[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29987,(18),Error,null,(17));
var inst_29900 = cljs.core.PersistentVector.EMPTY_NODE;
var state_29987__$1 = (function (){var statearr_30034 = state_29987;
(statearr_30034[(20)] = inst_29900);

return statearr_30034;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_30035_30102 = state_29987__$1;
(statearr_30035_30102[(1)] = (20));

} else {
var statearr_30036_30103 = state_29987__$1;
(statearr_30036_30103[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (11))){
var state_29987__$1 = state_29987;
var statearr_30037_30104 = state_29987__$1;
(statearr_30037_30104[(2)] = true);

(statearr_30037_30104[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (9))){
var state_29987__$1 = state_29987;
var statearr_30038_30105 = state_29987__$1;
(statearr_30038_30105[(2)] = false);

(statearr_30038_30105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (5))){
var state_29987__$1 = state_29987;
var statearr_30039_30106 = state_29987__$1;
(statearr_30039_30106[(2)] = null);

(statearr_30039_30106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (14))){
var inst_29865 = (state_29987[(11)]);
var inst_29888 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29865);
var state_29987__$1 = state_29987;
var statearr_30040_30107 = state_29987__$1;
(statearr_30040_30107[(2)] = inst_29888);

(statearr_30040_30107[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (45))){
var inst_29946 = (state_29987[(19)]);
var inst_29891 = (state_29987[(7)]);
var inst_29944 = (state_29987[(21)]);
var inst_29867 = (state_29987[(8)]);
var inst_29866 = (state_29987[(9)]);
var inst_29864 = (state_29987[(10)]);
var inst_29865 = (state_29987[(11)]);
var inst_29892 = (state_29987[(12)]);
var inst_29945 = (state_29987[(22)]);
var inst_29960 = (function (){var map__29870 = inst_29891;
var p = inst_29866;
var _QMARK_error = inst_29946;
var temp__4425__auto__ = inst_29946;
var vec__29859 = inst_29864;
var v = inst_29865;
var temp__4423__auto__ = error_handler;
var _ = inst_29945;
var event_msg = inst_29891;
var e = inst_29946;
var event = inst_29892;
var vec__29871 = inst_29944;
var stop_QMARK_ = inst_29867;
return ((function (map__29870,p,_QMARK_error,temp__4425__auto__,vec__29859,v,temp__4423__auto__,_,event_msg,e,event,vec__29871,stop_QMARK_,inst_29946,inst_29891,inst_29944,inst_29867,inst_29866,inst_29864,inst_29865,inst_29892,inst_29945,state_val_29988,c__28953__auto___30062,map__29856,map__29856__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router `event-msg-handler` error: %s",event], null);
});
;})(map__29870,p,_QMARK_error,temp__4425__auto__,vec__29859,v,temp__4423__auto__,_,event_msg,e,event,vec__29871,stop_QMARK_,inst_29946,inst_29891,inst_29944,inst_29867,inst_29866,inst_29864,inst_29865,inst_29892,inst_29945,state_val_29988,c__28953__auto___30062,map__29856,map__29856__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_29961 = (new cljs.core.Delay(inst_29960,null));
var inst_29962 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init2176211180087739371.clj",1187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_29961,null);
var state_29987__$1 = state_29987;
var statearr_30041_30108 = state_29987__$1;
(statearr_30041_30108[(2)] = inst_29962);

(statearr_30041_30108[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (26))){
var inst_29922 = (state_29987[(2)]);
var state_29987__$1 = state_29987;
var statearr_30042_30109 = state_29987__$1;
(statearr_30042_30109[(2)] = inst_29922);

(statearr_30042_30109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (16))){
var inst_29891 = (state_29987[(7)]);
var inst_29891__$1 = (state_29987[(2)]);
var inst_29892 = cljs.core.get.call(null,inst_29891__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_29987__$1 = (function (){var statearr_30043 = state_29987;
(statearr_30043[(7)] = inst_29891__$1);

(statearr_30043[(12)] = inst_29892);

return statearr_30043;
})();
var statearr_30044_30110 = state_29987__$1;
(statearr_30044_30110[(2)] = null);

(statearr_30044_30110[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (38))){
var state_29987__$1 = state_29987;
var statearr_30045_30111 = state_29987__$1;
(statearr_30045_30111[(2)] = null);

(statearr_30045_30111[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (30))){
var inst_29918 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_29987__$1 = state_29987;
var statearr_30046_30112 = state_29987__$1;
(statearr_30046_30112[(2)] = inst_29918);

(statearr_30046_30112[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (10))){
var inst_29886 = (state_29987[(2)]);
var state_29987__$1 = state_29987;
if(cljs.core.truth_(inst_29886)){
var statearr_30047_30113 = state_29987__$1;
(statearr_30047_30113[(1)] = (14));

} else {
var statearr_30048_30114 = state_29987__$1;
(statearr_30048_30114[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (18))){
var inst_29893 = (state_29987[(2)]);
var inst_29894 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29895 = [null,inst_29893];
var inst_29896 = (new cljs.core.PersistentVector(null,2,(5),inst_29894,inst_29895,null));
var state_29987__$1 = state_29987;
var statearr_30049_30115 = state_29987__$1;
(statearr_30049_30115[(2)] = inst_29896);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29987__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (42))){
var inst_29949 = (state_29987[(2)]);
var inst_29950 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29951 = [null,inst_29949];
var inst_29952 = (new cljs.core.PersistentVector(null,2,(5),inst_29950,inst_29951,null));
var state_29987__$1 = state_29987;
var statearr_30050_30116 = state_29987__$1;
(statearr_30050_30116[(2)] = inst_29952);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29987__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (37))){
var inst_29935 = (state_29987[(2)]);
var state_29987__$1 = state_29987;
var statearr_30051_30117 = state_29987__$1;
(statearr_30051_30117[(2)] = inst_29935);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29987__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (8))){
var inst_29865 = (state_29987[(11)]);
var inst_29876 = inst_29865.cljs$lang$protocol_mask$partition0$;
var inst_29877 = (inst_29876 & (64));
var inst_29878 = inst_29865.cljs$core$ISeq$;
var inst_29879 = (inst_29877) || (inst_29878);
var state_29987__$1 = state_29987;
if(cljs.core.truth_(inst_29879)){
var statearr_30052_30118 = state_29987__$1;
(statearr_30052_30118[(1)] = (11));

} else {
var statearr_30053_30119 = state_29987__$1;
(statearr_30053_30119[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (49))){
var inst_29977 = (state_29987[(2)]);
var state_29987__$1 = state_29987;
var statearr_30054_30120 = state_29987__$1;
(statearr_30054_30120[(2)] = inst_29977);

(statearr_30054_30120[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28953__auto___30062,map__29856,map__29856__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
;
return ((function (switch__28932__auto__,c__28953__auto___30062,map__29856,map__29856__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__28933__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__28933__auto____0 = (function (){
var statearr_30058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30058[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__28933__auto__);

(statearr_30058[(1)] = (1));

return statearr_30058;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__28933__auto____1 = (function (state_29987){
while(true){
var ret_value__28934__auto__ = (function (){try{while(true){
var result__28935__auto__ = switch__28932__auto__.call(null,state_29987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28935__auto__;
}
break;
}
}catch (e30059){if((e30059 instanceof Object)){
var ex__28936__auto__ = e30059;
var statearr_30060_30121 = state_29987;
(statearr_30060_30121[(5)] = ex__28936__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28934__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30122 = state_29987;
state_29987 = G__30122;
continue;
} else {
return ret_value__28934__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__28933__auto__ = function(state_29987){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__28933__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__28933__auto____1.call(this,state_29987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__28933__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__28933__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__28933__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__28933__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__28933__auto__;
})()
;})(switch__28932__auto__,c__28953__auto___30062,map__29856,map__29856__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var state__28955__auto__ = (function (){var statearr_30061 = f__28954__auto__.call(null);
(statearr_30061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28953__auto___30062);

return statearr_30061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28955__auto__);
});})(c__28953__auto___30062,map__29856,map__29856__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
);


return ((function (map__29856,map__29856__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__29856,map__29856__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
});
/**
 * Creates a go-loop to call `(event-msg-handler <server-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__26748__auto__ = [];
var len__26741__auto___30130 = arguments.length;
var i__26742__auto___30131 = (0);
while(true){
if((i__26742__auto___30131 < len__26741__auto___30130)){
args__26748__auto__.push((arguments[i__26742__auto___30131]));

var G__30132 = (i__26742__auto___30131 + (1));
i__26742__auto___30131 = G__30132;
continue;
} else {
}
break;
}

var argseq__26749__auto__ = ((((2) < args__26748__auto__.length))?(new cljs.core.IndexedSeq(args__26748__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26749__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__30126){
var vec__30127 = p__30126;
var map__30128 = cljs.core.nth.call(null,vec__30127,(0),null);
var map__30128__$1 = ((((!((map__30128 == null)))?((((map__30128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30128):map__30128);
var opts = map__30128__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__30128__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__30128__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq30123){
var G__30124 = cljs.core.first.call(null,seq30123);
var seq30123__$1 = cljs.core.next.call(null,seq30123);
var G__30125 = cljs.core.first.call(null,seq30123__$1);
var seq30123__$2 = cljs.core.next.call(null,seq30123__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30124,G__30125,seq30123__$2);
});
/**
 * Creates a go-loop to call `(event-msg-handler <client-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__26748__auto__ = [];
var len__26741__auto___30140 = arguments.length;
var i__26742__auto___30141 = (0);
while(true){
if((i__26742__auto___30141 < len__26741__auto___30140)){
args__26748__auto__.push((arguments[i__26742__auto___30141]));

var G__30142 = (i__26742__auto___30141 + (1));
i__26742__auto___30141 = G__30142;
continue;
} else {
}
break;
}

var argseq__26749__auto__ = ((((2) < args__26748__auto__.length))?(new cljs.core.IndexedSeq(args__26748__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26749__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__30136){
var vec__30137 = p__30136;
var map__30138 = cljs.core.nth.call(null,vec__30137,(0),null);
var map__30138__$1 = ((((!((map__30138 == null)))?((((map__30138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30138):map__30138);
var opts = map__30138__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__30138__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__30138__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq30133){
var G__30134 = cljs.core.first.call(null,seq30133);
var seq30133__$1 = cljs.core.next.call(null,seq30133);
var G__30135 = cljs.core.first.call(null,seq30133__$1);
var seq30133__$2 = cljs.core.next.call(null,seq30133__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30134,G__30135,seq30133__$2);
});
taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead.
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});
/**
 * DEPRECATED. Please use `timbre/set-level!` instead.
 */
taoensso.sente.set_logging_level_BANG_ = (function taoensso$sente$set_logging_level_BANG_(level){
return taoensso.timbre.set_level_BANG_.call(null,level);
});
/**
 * DEPRECATED: Please use `ajax-lite` instead.
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;
/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__30143,websocket_QMARK_){
var map__30146 = p__30143;
var map__30146__$1 = ((((!((map__30146 == null)))?((((map__30146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30146):map__30146);
var location = map__30146__$1;
var adjusted_protocol = cljs.core.get.call(null,map__30146__$1,new cljs.core.Keyword(null,"adjusted-protocol","adjusted-protocol",37431492));
var host = cljs.core.get.call(null,map__30146__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__30146__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str(adjusted_protocol),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__25671__auto__ = path;
if(cljs.core.truth_(or__25671__auto__)){
return or__25671__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map