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
var vec__35429 = x;
var ev_id = cljs.core.nth.call(null,vec__35429,(0),null);
var _ = cljs.core.nth.call(null,vec__35429,(1),null);
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
var err_fmt = [cljs.core.str((function (){var G__35431 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__35431) {
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
var and__25631__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__25631__auto__){
var and__25631__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__25631__auto____$1)){
var map__35435 = x;
var map__35435__$1 = ((((!((map__35435 == null)))?((((map__35435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35435):map__35435);
var ch_recv = cljs.core.get.call(null,map__35435__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__35435__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__35435__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__35435__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__25631__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__25631__auto____$2)){
var and__25631__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__25631__auto____$3){
var and__25631__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(cljs.core.truth_(and__25631__auto____$4)){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__25631__auto____$4;
}
} else {
return and__25631__auto____$3;
}
} else {
return and__25631__auto____$2;
}
} else {
return and__25631__auto____$1;
}
} else {
return and__25631__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__25631__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__25631__auto__){
var and__25631__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__25631__auto____$1)){
var map__35439 = x;
var map__35439__$1 = ((((!((map__35439 == null)))?((((map__35439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35439):map__35439);
var ch_recv = cljs.core.get.call(null,map__35439__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__35439__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__35439__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__35439__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__35439__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__35439__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__35439__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__25631__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__25631__auto____$2)){
var and__25631__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__25631__auto____$3){
var and__25631__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(cljs.core.truth_(and__25631__auto____$4)){
var and__25631__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__25631__auto____$5){
var and__25631__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(cljs.core.truth_(and__25631__auto____$6)){
var and__25631__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__25631__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__25631__auto____$7;
}
} else {
return and__25631__auto____$6;
}
} else {
return and__25631__auto____$5;
}
} else {
return and__25631__auto____$4;
}
} else {
return and__25631__auto____$3;
}
} else {
return and__25631__auto____$2;
}
} else {
return and__25631__auto____$1;
}
} else {
return and__25631__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__35441){
var map__35445 = p__35441;
var map__35445__$1 = ((((!((map__35445 == null)))?((((map__35445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35445):map__35445);
var ev_msg = map__35445__$1;
var event = cljs.core.get.call(null,map__35445__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__35445__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__35447 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__35447,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__35447,(1),null);
var valid_event = vec__35447;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init7221152511998339814.clj",159,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__35447,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__35445,map__35445__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__35447,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__35445,map__35445__$1,ev_msg,event,_QMARK_reply_fn))
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
}catch (e35451){if((e35451 instanceof Error)){
var __t = e35451;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? pstr)",__x,__t,null);
} else {
throw e35451;

}
}})());
}catch (e35450){var t = e35450;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init7221152511998339814.clj",175,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t){
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
var args35452 = [];
var len__26713__auto___35455 = arguments.length;
var i__26714__auto___35456 = (0);
while(true){
if((i__26714__auto___35456 < len__26713__auto___35455)){
args35452.push((arguments[i__26714__auto___35456]));

var G__35457 = (i__26714__auto___35456 + (1));
i__26714__auto___35456 = G__35457;
continue;
} else {
}
break;
}

var G__35454 = args35452.length;
switch (G__35454) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35452.length)].join('')));

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
var args__26720__auto__ = [];
var len__26713__auto___35460 = arguments.length;
var i__26714__auto___35461 = (0);
while(true){
if((i__26714__auto___35461 < len__26713__auto___35460)){
args__26720__auto__.push((arguments[i__26714__auto___35461]));

var G__35462 = (i__26714__auto___35461 + (1));
i__26714__auto___35461 = G__35462;
continue;
} else {
}
break;
}

var argseq__26721__auto__ = ((((0) < args__26720__auto__.length))?(new cljs.core.IndexedSeq(args__26720__auto__.slice((0)),(0),null)):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__26721__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7221152511998339814.clj",193,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing: %s -> %s",args,pstr], null);
});})(pstr))
,null)),null);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq35459){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35459));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
var __x_35469 = prefixed_pstr;
try{if(typeof __x_35469 === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35466){if((e35466 instanceof Error)){
var __t_35470 = e35466;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",__x_35469,__t_35470,null);
} else {
throw e35466;

}
}
var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__35468 = prefix;
switch (G__35468) {
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
var vec__35467 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__35467,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__35467,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7221152511998339814.clj",205,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (prefix,pstr,clj,wrapped_QMARK_,vec__35467,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(prefix,pstr,clj,wrapped_QMARK_,vec__35467,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
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
var args__26720__auto__ = [];
var len__26713__auto___35641 = arguments.length;
var i__26714__auto___35642 = (0);
while(true){
if((i__26714__auto___35642 < len__26713__auto___35641)){
args__26720__auto__.push((arguments[i__26714__auto___35642]));

var G__35643 = (i__26714__auto___35642 + (1));
i__26714__auto___35642 = G__35643;
continue;
} else {
}
break;
}

var argseq__26721__auto__ = ((((1) < args__26720__auto__.length))?(new cljs.core.IndexedSeq(args__26720__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26721__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_adapter,p__35475){
var vec__35476 = p__35475;
var map__35477 = cljs.core.nth.call(null,vec__35476,(0),null);
var map__35477__$1 = ((((!((map__35477 == null)))?((((map__35477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35477):map__35477);
var recv_buf_or_n = cljs.core.get.call(null,map__35477__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__35477__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__35477__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__35477__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__35477__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__25643__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
} else {
var or__25643__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__25643__auto____$1)){
return or__25643__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__35477__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__35477__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var __x = send_buf_ms_ajax;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35479){if((e35479 instanceof Error)){
var __t = e35479;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",__x,__t,null);
} else {
throw e35479;

}
}})(),(function (){var __x = send_buf_ms_ws;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35480){if((e35480 instanceof Error)){
var __t = e35480;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",__x,__t,null);
} else {
throw e35480;

}
}})()], null))){
} else {
throw (new Error("Assert failed: (have? enc/pos-int? send-buf-ms-ajax send-buf-ms-ws)"));
}

if(cljs.core.truth_((function (){var __x = web_server_adapter;
try{if(((function (__x,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__35472_SHARP_){
if(!((p1__35472_SHARP_ == null))){
if((false) || (p1__35472_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__35472_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__35472_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__35472_SHARP_);
}
});})(__x,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35481){if((e35481 instanceof Error)){
var __t = e35481;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__35472#] (satisfies? interfaces/IServerChanAdapter p1__35472#)) web-server-adapter)",__x,__t,null);
} else {
throw e35481;

}
}})())){
} else {
throw (new Error("Assert failed: (have? (fn* [p1__35472#] (satisfies? interfaces/IServerChanAdapter p1__35472#)) web-server-adapter)"));
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var user_id_fn__$1 = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__25643__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type,uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35483){if((e35483 instanceof Error)){
var __t = e35483;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e35483;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35484){
var map__35485 = p__35484;
var map__35485__$1 = ((((!((map__35485 == null)))?((((map__35485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35485):map__35485);
var old_m = map__35485__$1;
var ws = cljs.core.get.call(null,map__35485__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__35485__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__35485__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__35487 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35487) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax__$1,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax__$1,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

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
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35488){if((e35488 instanceof Error)){
var __t = e35488;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e35488;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35489){
var map__35490 = p__35489;
var map__35490__$1 = ((((!((map__35490 == null)))?((((map__35490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35490):map__35490);
var old_m = map__35490__$1;
var ws = cljs.core.get.call(null,map__35490__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__35490__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__35490__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax__$1,uid):cljs.core.disj.call(null,ajax__$1,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_.call(null,old_any,uid)) && (!(cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__35645__delegate = function (user_id,ev,p__35492){
var vec__35493 = p__35492;
var map__35494 = cljs.core.nth.call(null,vec__35493,(0),null);
var map__35494__$1 = ((((!((map__35494 == null)))?((((map__35494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35494):map__35494);
var opts = map__35494__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__35494__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_35646 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __35647 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7221152511998339814.clj",324,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_35646,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_35646,ev], null);
});})(uid_35646,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var __35648__$1 = (cljs.core.truth_(uid_35646)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __35649__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_35650 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__35651 = ((function (uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type){
var temp__4425__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),((function (uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__35496 = cljs.core.get.call(null,m,uid_35646);
var ___$3 = cljs.core.nth.call(null,vec__35496,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35496,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_35650)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_35646),cljs.core.get.call(null,m,uid_35646));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4425__auto__)){
var pulled = temp__4425__auto__;
var vec__35497 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__35497,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35497,(1),null);
var __x_35652 = buffered_evs;
try{if(cljs.core.vector_QMARK_.call(null,__x_35652)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35498){if((e35498 instanceof Error)){
var __t_35653 = e35498;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",__x_35652,__t_35653,null);
} else {
throw e35498;

}
}
var __x_35654 = ev_uuids;
try{if(cljs.core.set_QMARK_.call(null,__x_35654)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35499){if((e35499 instanceof Error)){
var __t_35655 = e35499;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",__x_35654,__t_35655,null);
} else {
throw e35499;

}
}
var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7221152511998339814.clj",357,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__35497,buffered_evs,ev_uuids,pulled,temp__4425__auto__,uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__35497,buffered_evs,ev_uuids,pulled,temp__4425__auto__,uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var G__35500 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35500) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_35646,buffered_evs_ppstr);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_35646,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
} else {
return null;
}
});})(uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init7221152511998339814.clj",367,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,flush_buffer_BANG__35651,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_35646], null);
});})(uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,flush_buffer_BANG__35651,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

if(cljs.core.truth_(flush_QMARK_)){
var seq__35501_35657 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__35502_35658 = null;
var count__35503_35659 = (0);
var i__35504_35660 = (0);
while(true){
if((i__35504_35660 < count__35503_35659)){
var type_35661 = cljs.core._nth.call(null,chunk__35502_35658,i__35504_35660);
flush_buffer_BANG__35651.call(null,type_35661);

var G__35662 = seq__35501_35657;
var G__35663 = chunk__35502_35658;
var G__35664 = count__35503_35659;
var G__35665 = (i__35504_35660 + (1));
seq__35501_35657 = G__35662;
chunk__35502_35658 = G__35663;
count__35503_35659 = G__35664;
i__35504_35660 = G__35665;
continue;
} else {
var temp__4425__auto___35666 = cljs.core.seq.call(null,seq__35501_35657);
if(temp__4425__auto___35666){
var seq__35501_35667__$1 = temp__4425__auto___35666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35501_35667__$1)){
var c__26454__auto___35668 = cljs.core.chunk_first.call(null,seq__35501_35667__$1);
var G__35669 = cljs.core.chunk_rest.call(null,seq__35501_35667__$1);
var G__35670 = c__26454__auto___35668;
var G__35671 = cljs.core.count.call(null,c__26454__auto___35668);
var G__35672 = (0);
seq__35501_35657 = G__35669;
chunk__35502_35658 = G__35670;
count__35503_35659 = G__35671;
i__35504_35660 = G__35672;
continue;
} else {
var type_35673 = cljs.core.first.call(null,seq__35501_35667__$1);
flush_buffer_BANG__35651.call(null,type_35673);

var G__35674 = cljs.core.next.call(null,seq__35501_35667__$1);
var G__35675 = null;
var G__35676 = (0);
var G__35677 = (0);
seq__35501_35657 = G__35674;
chunk__35502_35658 = G__35675;
count__35503_35659 = G__35676;
i__35504_35660 = G__35677;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__35505_35678 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_35646], null))));
var chunk__35506_35679 = null;
var count__35507_35680 = (0);
var i__35508_35681 = (0);
while(true){
if((i__35508_35681 < count__35507_35680)){
var server_ch_35682 = cljs.core._nth.call(null,chunk__35506_35679,i__35508_35681);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35682);

var G__35683 = seq__35505_35678;
var G__35684 = chunk__35506_35679;
var G__35685 = count__35507_35680;
var G__35686 = (i__35508_35681 + (1));
seq__35505_35678 = G__35683;
chunk__35506_35679 = G__35684;
count__35507_35680 = G__35685;
i__35508_35681 = G__35686;
continue;
} else {
var temp__4425__auto___35687 = cljs.core.seq.call(null,seq__35505_35678);
if(temp__4425__auto___35687){
var seq__35505_35688__$1 = temp__4425__auto___35687;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35505_35688__$1)){
var c__26454__auto___35689 = cljs.core.chunk_first.call(null,seq__35505_35688__$1);
var G__35690 = cljs.core.chunk_rest.call(null,seq__35505_35688__$1);
var G__35691 = c__26454__auto___35689;
var G__35692 = cljs.core.count.call(null,c__26454__auto___35689);
var G__35693 = (0);
seq__35505_35678 = G__35690;
chunk__35506_35679 = G__35691;
count__35507_35680 = G__35692;
i__35508_35681 = G__35693;
continue;
} else {
var server_ch_35694 = cljs.core.first.call(null,seq__35505_35688__$1);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35694);

var G__35695 = cljs.core.next.call(null,seq__35505_35688__$1);
var G__35696 = null;
var G__35697 = (0);
var G__35698 = (0);
seq__35505_35678 = G__35695;
chunk__35506_35679 = G__35696;
count__35507_35680 = G__35697;
i__35508_35681 = G__35698;
continue;
}
} else {
}
}
break;
}

var seq__35509_35699 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_35646], null))));
var chunk__35510_35700 = null;
var count__35511_35701 = (0);
var i__35512_35702 = (0);
while(true){
if((i__35512_35702 < count__35511_35701)){
var vec__35513_35703 = cljs.core._nth.call(null,chunk__35510_35700,i__35512_35702);
var _QMARK_server_ch_35704 = cljs.core.nth.call(null,vec__35513_35703,(0),null);
var __35705__$3 = cljs.core.nth.call(null,vec__35513_35703,(1),null);
var temp__4425__auto___35706 = _QMARK_server_ch_35704;
if(cljs.core.truth_(temp__4425__auto___35706)){
var server_ch_35707 = temp__4425__auto___35706;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35707);
} else {
}

var G__35708 = seq__35509_35699;
var G__35709 = chunk__35510_35700;
var G__35710 = count__35511_35701;
var G__35711 = (i__35512_35702 + (1));
seq__35509_35699 = G__35708;
chunk__35510_35700 = G__35709;
count__35511_35701 = G__35710;
i__35512_35702 = G__35711;
continue;
} else {
var temp__4425__auto___35712 = cljs.core.seq.call(null,seq__35509_35699);
if(temp__4425__auto___35712){
var seq__35509_35713__$1 = temp__4425__auto___35712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35509_35713__$1)){
var c__26454__auto___35714 = cljs.core.chunk_first.call(null,seq__35509_35713__$1);
var G__35715 = cljs.core.chunk_rest.call(null,seq__35509_35713__$1);
var G__35716 = c__26454__auto___35714;
var G__35717 = cljs.core.count.call(null,c__26454__auto___35714);
var G__35718 = (0);
seq__35509_35699 = G__35715;
chunk__35510_35700 = G__35716;
count__35511_35701 = G__35717;
i__35512_35702 = G__35718;
continue;
} else {
var vec__35514_35719 = cljs.core.first.call(null,seq__35509_35713__$1);
var _QMARK_server_ch_35720 = cljs.core.nth.call(null,vec__35514_35719,(0),null);
var __35721__$3 = cljs.core.nth.call(null,vec__35514_35719,(1),null);
var temp__4425__auto___35722__$1 = _QMARK_server_ch_35720;
if(cljs.core.truth_(temp__4425__auto___35722__$1)){
var server_ch_35723 = temp__4425__auto___35722__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35723);
} else {
}

var G__35724 = cljs.core.next.call(null,seq__35509_35713__$1);
var G__35725 = null;
var G__35726 = (0);
var G__35727 = (0);
seq__35509_35699 = G__35724;
chunk__35510_35700 = G__35725;
count__35511_35701 = G__35726;
i__35512_35702 = G__35727;
continue;
}
} else {
}
}
break;
}
} else {
var seq__35515_35728 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__35516_35729 = null;
var count__35517_35730 = (0);
var i__35518_35731 = (0);
while(true){
if((i__35518_35731 < count__35517_35730)){
var type_35732 = cljs.core._nth.call(null,chunk__35516_35729,i__35518_35731);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_35732,uid_35646], null),((function (seq__35515_35728,chunk__35516_35729,count__35517_35730,i__35518_35731,type_35732,uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,flush_buffer_BANG__35651,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_35650], true)], null);
} else {
var vec__35519 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__35519,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35519,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_35650)], null);
}
});})(seq__35515_35728,chunk__35516_35729,count__35517_35730,i__35518_35731,type_35732,uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,flush_buffer_BANG__35651,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__35733 = seq__35515_35728;
var G__35734 = chunk__35516_35729;
var G__35735 = count__35517_35730;
var G__35736 = (i__35518_35731 + (1));
seq__35515_35728 = G__35733;
chunk__35516_35729 = G__35734;
count__35517_35730 = G__35735;
i__35518_35731 = G__35736;
continue;
} else {
var temp__4425__auto___35737 = cljs.core.seq.call(null,seq__35515_35728);
if(temp__4425__auto___35737){
var seq__35515_35738__$1 = temp__4425__auto___35737;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35515_35738__$1)){
var c__26454__auto___35739 = cljs.core.chunk_first.call(null,seq__35515_35738__$1);
var G__35740 = cljs.core.chunk_rest.call(null,seq__35515_35738__$1);
var G__35741 = c__26454__auto___35739;
var G__35742 = cljs.core.count.call(null,c__26454__auto___35739);
var G__35743 = (0);
seq__35515_35728 = G__35740;
chunk__35516_35729 = G__35741;
count__35517_35730 = G__35742;
i__35518_35731 = G__35743;
continue;
} else {
var type_35744 = cljs.core.first.call(null,seq__35515_35738__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_35744,uid_35646], null),((function (seq__35515_35728,chunk__35516_35729,count__35517_35730,i__35518_35731,type_35744,seq__35515_35738__$1,temp__4425__auto___35737,uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,flush_buffer_BANG__35651,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_35650], true)], null);
} else {
var vec__35520 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__35520,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35520,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_35650)], null);
}
});})(seq__35515_35728,chunk__35516_35729,count__35517_35730,i__35518_35731,type_35744,seq__35515_35738__$1,temp__4425__auto___35737,uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,flush_buffer_BANG__35651,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__35745 = cljs.core.next.call(null,seq__35515_35738__$1);
var G__35746 = null;
var G__35747 = (0);
var G__35748 = (0);
seq__35515_35728 = G__35745;
chunk__35516_35729 = G__35746;
count__35517_35730 = G__35747;
i__35518_35731 = G__35748;
continue;
}
} else {
}
}
break;
}

var c__29774__auto___35749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto___35749,uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,flush_buffer_BANG__35651,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto___35749,uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,flush_buffer_BANG__35651,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35530){
var state_val_35531 = (state_35530[(1)]);
if((state_val_35531 === (1))){
var state_35530__$1 = state_35530;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_35532_35750 = state_35530__$1;
(statearr_35532_35750[(1)] = (2));

} else {
var statearr_35533_35751 = state_35530__$1;
(statearr_35533_35751[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35531 === (2))){
var state_35530__$1 = state_35530;
var statearr_35534_35752 = state_35530__$1;
(statearr_35534_35752[(2)] = null);

(statearr_35534_35752[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35531 === (3))){
var inst_35523 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var state_35530__$1 = state_35530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35530__$1,(5),inst_35523);
} else {
if((state_val_35531 === (4))){
var inst_35527 = (state_35530[(2)]);
var inst_35528 = flush_buffer_BANG__35651.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_35530__$1 = (function (){var statearr_35535 = state_35530;
(statearr_35535[(7)] = inst_35527);

return statearr_35535;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35530__$1,inst_35528);
} else {
if((state_val_35531 === (5))){
var inst_35525 = (state_35530[(2)]);
var state_35530__$1 = state_35530;
var statearr_35536_35753 = state_35530__$1;
(statearr_35536_35753[(2)] = inst_35525);

(statearr_35536_35753[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__29774__auto___35749,uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,flush_buffer_BANG__35651,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29662__auto__,c__29774__auto___35749,uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,flush_buffer_BANG__35651,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29663__auto__ = null;
var taoensso$sente$state_machine__29663__auto____0 = (function (){
var statearr_35540 = [null,null,null,null,null,null,null,null];
(statearr_35540[(0)] = taoensso$sente$state_machine__29663__auto__);

(statearr_35540[(1)] = (1));

return statearr_35540;
});
var taoensso$sente$state_machine__29663__auto____1 = (function (state_35530){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_35530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e35541){if((e35541 instanceof Object)){
var ex__29666__auto__ = e35541;
var statearr_35542_35754 = state_35530;
(statearr_35542_35754[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35755 = state_35530;
state_35530 = G__35755;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
taoensso$sente$state_machine__29663__auto__ = function(state_35530){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29663__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29663__auto____1.call(this,state_35530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29663__auto____0;
taoensso$sente$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29663__auto____1;
return taoensso$sente$state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto___35749,uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,flush_buffer_BANG__35651,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29776__auto__ = (function (){var statearr_35543 = f__29775__auto__.call(null);
(statearr_35543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___35749);

return statearr_35543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto___35749,uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,flush_buffer_BANG__35651,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__29774__auto___35756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto___35756,uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,flush_buffer_BANG__35651,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto___35756,uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,flush_buffer_BANG__35651,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35553){
var state_val_35554 = (state_35553[(1)]);
if((state_val_35554 === (1))){
var state_35553__$1 = state_35553;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_35555_35757 = state_35553__$1;
(statearr_35555_35757[(1)] = (2));

} else {
var statearr_35556_35758 = state_35553__$1;
(statearr_35556_35758[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (2))){
var state_35553__$1 = state_35553;
var statearr_35557_35759 = state_35553__$1;
(statearr_35557_35759[(2)] = null);

(statearr_35557_35759[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (3))){
var inst_35546 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var state_35553__$1 = state_35553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35553__$1,(5),inst_35546);
} else {
if((state_val_35554 === (4))){
var inst_35550 = (state_35553[(2)]);
var inst_35551 = flush_buffer_BANG__35651.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_35553__$1 = (function (){var statearr_35558 = state_35553;
(statearr_35558[(7)] = inst_35550);

return statearr_35558;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35553__$1,inst_35551);
} else {
if((state_val_35554 === (5))){
var inst_35548 = (state_35553[(2)]);
var state_35553__$1 = state_35553;
var statearr_35559_35760 = state_35553__$1;
(statearr_35559_35760[(2)] = inst_35548);

(statearr_35559_35760[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__29774__auto___35756,uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,flush_buffer_BANG__35651,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29662__auto__,c__29774__auto___35756,uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,flush_buffer_BANG__35651,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29663__auto__ = null;
var taoensso$sente$state_machine__29663__auto____0 = (function (){
var statearr_35563 = [null,null,null,null,null,null,null,null];
(statearr_35563[(0)] = taoensso$sente$state_machine__29663__auto__);

(statearr_35563[(1)] = (1));

return statearr_35563;
});
var taoensso$sente$state_machine__29663__auto____1 = (function (state_35553){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_35553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e35564){if((e35564 instanceof Object)){
var ex__29666__auto__ = e35564;
var statearr_35565_35761 = state_35553;
(statearr_35565_35761[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35762 = state_35553;
state_35553 = G__35762;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
taoensso$sente$state_machine__29663__auto__ = function(state_35553){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29663__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29663__auto____1.call(this,state_35553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29663__auto____0;
taoensso$sente$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29663__auto____1;
return taoensso$sente$state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto___35756,uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,flush_buffer_BANG__35651,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29776__auto__ = (function (){var statearr_35566 = f__29775__auto__.call(null);
(statearr_35566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___35756);

return statearr_35566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto___35756,uid_35646,__35647,__35648__$1,__35649__$2,ev_uuid_35650,flush_buffer_BANG__35651,vec__35493,map__35494,map__35494__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}

return null;
};
var G__35645 = function (user_id,ev,var_args){
var p__35492 = null;
if (arguments.length > 2) {
var G__35763__i = 0, G__35763__a = new Array(arguments.length -  2);
while (G__35763__i < G__35763__a.length) {G__35763__a[G__35763__i] = arguments[G__35763__i + 2]; ++G__35763__i;}
  p__35492 = new cljs.core.IndexedSeq(G__35763__a,0);
} 
return G__35645__delegate.call(this,user_id,ev,p__35492);};
G__35645.cljs$lang$maxFixedArity = 2;
G__35645.cljs$lang$applyTo = (function (arglist__35764){
var user_id = cljs.core.first(arglist__35764);
arglist__35764 = cljs.core.next(arglist__35764);
var ev = cljs.core.first(arglist__35764);
var p__35492 = cljs.core.rest(arglist__35764);
return G__35645__delegate(user_id,ev,p__35492);
});
G__35645.cljs$core$IFn$_invoke$arity$variadic = G__35645__delegate;
return G__35645;
})()
;})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__35567 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__35567,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__35567,(1),null);
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?((function (params,ppstr,client_id,vec__35567,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7221152511998339814.clj",435,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__35567,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): %s",resp_clj], null);
});})(params,ppstr,client_id,vec__35567,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
});})(params,ppstr,client_id,vec__35567,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
return null;
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7221152511998339814.clj",442,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__35567,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): dummy-cb-200"], null);
});})(params,ppstr,client_id,vec__35567,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337)),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var csrf_token = csrf_token_fn.call(null,ring_req);
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var websocket_QMARK_ = new cljs.core.Keyword(null,"websocket?","websocket?",1552493139).cljs$core$IFn$_invoke$arity$1(ring_req);
var receive_event_msg_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__35765__delegate = function (event,p__35568){
var vec__35569 = p__35568;
var _QMARK_reply_fn = cljs.core.nth.call(null,vec__35569,(0),null);
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
};
var G__35765 = function (event,var_args){
var p__35568 = null;
if (arguments.length > 1) {
var G__35766__i = 0, G__35766__a = new Array(arguments.length -  1);
while (G__35766__i < G__35766__a.length) {G__35766__a[G__35766__i] = arguments[G__35766__i + 1]; ++G__35766__i;}
  p__35568 = new cljs.core.IndexedSeq(G__35766__a,0);
} 
return G__35765__delegate.call(this,event,p__35568);};
G__35765.cljs$lang$maxFixedArity = 1;
G__35765.cljs$lang$applyTo = (function (arglist__35767){
var event = cljs.core.first(arglist__35767);
var p__35568 = cljs.core.rest(arglist__35767);
return G__35765__delegate(event,p__35568);
});
G__35765.cljs$core$IFn$_invoke$arity$variadic = G__35765__delegate;
return G__35765;
})()
;})(csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var handshake_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7221152511998339814.clj",467,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handshake!"], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = ((!((_QMARK_handshake_data == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev),cljs.core.not.call(null,websocket_QMARK_));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init7221152511998339814.clj",479,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7221152511998339814.clj",487,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,[cljs.core.str(server_ch)].join('')], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

taoensso.encore.reset_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id], null),server_ch);

if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954)], null));
} else {
}

return handshake_BANG_.call(null,server_ch);
} else {
var initial_conn_from_client_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_ch,taoensso.encore.now_udt.call(null)], null),(_QMARK_v == null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
var handshake_QMARK_ = (function (){var or__25643__auto__ = initial_conn_from_client_QMARK_;
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
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
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,req_ppstr){
var vec__35570 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__35570,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__35570,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__35570,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7221152511998339814.clj",514,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__35570,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__35570,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__35570,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,status){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
if(cljs.core.empty_QMARK_.call(null,new_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return new_m;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var c__29774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35584){
var state_val_35585 = (state_35584[(1)]);
if((state_val_35585 === (1))){
var inst_35571 = cljs.core.async.timeout.call(null,(5000));
var state_35584__$1 = state_35584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35584__$1,(2),inst_35571);
} else {
if((state_val_35585 === (2))){
var inst_35573 = (state_35584[(2)]);
var inst_35574 = upd_connected_uid_BANG_.call(null,uid);
var state_35584__$1 = (function (){var statearr_35586 = state_35584;
(statearr_35586[(7)] = inst_35573);

return statearr_35586;
})();
if(cljs.core.truth_(inst_35574)){
var statearr_35587_35768 = state_35584__$1;
(statearr_35587_35768[(1)] = (3));

} else {
var statearr_35588_35769 = state_35584__$1;
(statearr_35588_35769[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35585 === (3))){
var inst_35576 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35577 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_35578 = (new cljs.core.PersistentVector(null,1,(5),inst_35576,inst_35577,null));
var inst_35579 = receive_event_msg_BANG_.call(null,inst_35578);
var state_35584__$1 = state_35584;
var statearr_35589_35770 = state_35584__$1;
(statearr_35589_35770[(2)] = inst_35579);

(statearr_35589_35770[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35585 === (4))){
var state_35584__$1 = state_35584;
var statearr_35590_35771 = state_35584__$1;
(statearr_35590_35771[(2)] = null);

(statearr_35590_35771[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35585 === (5))){
var inst_35582 = (state_35584[(2)]);
var state_35584__$1 = state_35584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35584__$1,inst_35582);
} else {
return null;
}
}
}
}
}
});})(c__29774__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29662__auto__,c__29774__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29663__auto__ = null;
var taoensso$sente$state_machine__29663__auto____0 = (function (){
var statearr_35594 = [null,null,null,null,null,null,null,null];
(statearr_35594[(0)] = taoensso$sente$state_machine__29663__auto__);

(statearr_35594[(1)] = (1));

return statearr_35594;
});
var taoensso$sente$state_machine__29663__auto____1 = (function (state_35584){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_35584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e35595){if((e35595 instanceof Object)){
var ex__29666__auto__ = e35595;
var statearr_35596_35772 = state_35584;
(statearr_35596_35772[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35773 = state_35584;
state_35584 = G__35773;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
taoensso$sente$state_machine__29663__auto__ = function(state_35584){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29663__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29663__auto____1.call(this,state_35584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29663__auto____0;
taoensso$sente$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29663__auto____1;
return taoensso$sente$state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29776__auto__ = (function (){var statearr_35597 = f__29775__auto__.call(null);
(statearr_35597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto__);

return statearr_35597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__29774__auto__;
} else {
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,new cljs.core.Keyword(null,"ajax","ajax",814345549),client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35598){
var vec__35599 = p__35598;
var server_ch__$1 = cljs.core.nth.call(null,vec__35599,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__35599,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var udt_disconnected = taoensso.encore.now_udt.call(null);
var c__29774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35622){
var state_val_35623 = (state_35622[(1)]);
if((state_val_35623 === (1))){
var inst_35600 = cljs.core.async.timeout.call(null,(5000));
var state_35622__$1 = state_35622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35622__$1,(2),inst_35600);
} else {
if((state_val_35623 === (2))){
var inst_35602 = (state_35622[(2)]);
var inst_35603 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35604 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_35605 = (new cljs.core.PersistentVector(null,2,(5),inst_35603,inst_35604,null));
var inst_35606 = (function (){return ((function (inst_35602,inst_35603,inst_35604,inst_35605,state_val_35623,c__29774__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var vec__35624 = cljs.core.get.call(null,_QMARK_m,client_id);
var _ = cljs.core.nth.call(null,vec__35624,(0),null);
var _QMARK_udt_last_connected = cljs.core.nth.call(null,vec__35624,(1),null);
var disconnected_QMARK_ = (function (){var and__25631__auto__ = _QMARK_udt_last_connected;
if(cljs.core.truth_(and__25631__auto__)){
return (udt_disconnected >= _QMARK_udt_last_connected);
} else {
return and__25631__auto__;
}
})();
if(cljs.core.not.call(null,disconnected_QMARK_)){
return taoensso.encore.swapped.call(null,_QMARK_m,cljs.core.not.call(null,new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)));
} else {
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
return taoensso.encore.swapped.call(null,((cljs.core.empty_QMARK_.call(null,new_m))?new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782):new_m),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586));
}
});
;})(inst_35602,inst_35603,inst_35604,inst_35605,state_val_35623,c__29774__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_35607 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_35605,inst_35606);
var state_35622__$1 = (function (){var statearr_35625 = state_35622;
(statearr_35625[(7)] = inst_35602);

return statearr_35625;
})();
if(cljs.core.truth_(inst_35607)){
var statearr_35626_35774 = state_35622__$1;
(statearr_35626_35774[(1)] = (3));

} else {
var statearr_35627_35775 = state_35622__$1;
(statearr_35627_35775[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35623 === (3))){
var inst_35609 = upd_connected_uid_BANG_.call(null,uid);
var state_35622__$1 = state_35622;
if(cljs.core.truth_(inst_35609)){
var statearr_35628_35776 = state_35622__$1;
(statearr_35628_35776[(1)] = (6));

} else {
var statearr_35629_35777 = state_35622__$1;
(statearr_35629_35777[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35623 === (4))){
var state_35622__$1 = state_35622;
var statearr_35630_35778 = state_35622__$1;
(statearr_35630_35778[(2)] = null);

(statearr_35630_35778[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35623 === (5))){
var inst_35620 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35622__$1,inst_35620);
} else {
if((state_val_35623 === (6))){
var inst_35611 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35612 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_35613 = (new cljs.core.PersistentVector(null,1,(5),inst_35611,inst_35612,null));
var inst_35614 = receive_event_msg_BANG_.call(null,inst_35613);
var state_35622__$1 = state_35622;
var statearr_35631_35779 = state_35622__$1;
(statearr_35631_35779[(2)] = inst_35614);

(statearr_35631_35779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35623 === (7))){
var state_35622__$1 = state_35622;
var statearr_35632_35780 = state_35622__$1;
(statearr_35632_35780[(2)] = null);

(statearr_35632_35780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35623 === (8))){
var inst_35617 = (state_35622[(2)]);
var state_35622__$1 = state_35622;
var statearr_35633_35781 = state_35622__$1;
(statearr_35633_35781[(2)] = inst_35617);

(statearr_35633_35781[(1)] = (5));


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
});})(c__29774__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29662__auto__,c__29774__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29663__auto__ = null;
var taoensso$sente$state_machine__29663__auto____0 = (function (){
var statearr_35637 = [null,null,null,null,null,null,null,null];
(statearr_35637[(0)] = taoensso$sente$state_machine__29663__auto__);

(statearr_35637[(1)] = (1));

return statearr_35637;
});
var taoensso$sente$state_machine__29663__auto____1 = (function (state_35622){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_35622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e35638){if((e35638 instanceof Object)){
var ex__29666__auto__ = e35638;
var statearr_35639_35782 = state_35622;
(statearr_35639_35782[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35783 = state_35622;
state_35622 = G__35783;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
taoensso$sente$state_machine__29663__auto__ = function(state_35622){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29663__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29663__auto____1.call(this,state_35622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29663__auto____0;
taoensso$sente$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29663__auto____1;
return taoensso$sente$state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29776__auto__ = (function (){var statearr_35640 = f__29775__auto__.call(null);
(statearr_35640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto__);

return statearr_35640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__29774__auto__;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35476,map__35477,map__35477__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq35473){
var G__35474 = cljs.core.first.call(null,seq35473);
var seq35473__$1 = cljs.core.next.call(null,seq35473);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35474,seq35473__$1);
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7221152511998339814.clj",576,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null);

var seq__35788 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null))));
var chunk__35789 = null;
var count__35790 = (0);
var i__35791 = (0);
while(true){
if((i__35791 < count__35790)){
var server_ch = cljs.core._nth.call(null,chunk__35789,i__35791);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__35792 = seq__35788;
var G__35793 = chunk__35789;
var G__35794 = count__35790;
var G__35795 = (i__35791 + (1));
seq__35788 = G__35792;
chunk__35789 = G__35793;
count__35790 = G__35794;
i__35791 = G__35795;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__35788);
if(temp__4425__auto__){
var seq__35788__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35788__$1)){
var c__26454__auto__ = cljs.core.chunk_first.call(null,seq__35788__$1);
var G__35796 = cljs.core.chunk_rest.call(null,seq__35788__$1);
var G__35797 = c__26454__auto__;
var G__35798 = cljs.core.count.call(null,c__26454__auto__);
var G__35799 = (0);
seq__35788 = G__35796;
chunk__35789 = G__35797;
count__35790 = G__35798;
i__35791 = G__35799;
continue;
} else {
var server_ch = cljs.core.first.call(null,seq__35788__$1);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__35800 = cljs.core.next.call(null,seq__35788__$1);
var G__35801 = null;
var G__35802 = (0);
var G__35803 = (0);
seq__35788 = G__35800;
chunk__35789 = G__35801;
count__35790 = G__35802;
i__35791 = G__35803;
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
var args__26720__auto__ = [];
var len__26713__auto___35893 = arguments.length;
var i__26714__auto___35894 = (0);
while(true){
if((i__26714__auto___35894 < len__26713__auto___35893)){
args__26720__auto__.push((arguments[i__26714__auto___35894]));

var G__35895 = (i__26714__auto___35894 + (1));
i__26714__auto___35894 = G__35895;
continue;
} else {
}
break;
}

var argseq__26721__auto__ = ((((3) < args__26720__auto__.length))?(new cljs.core.IndexedSeq(args__26720__auto__.slice((3)),(0),null)):null);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26721__auto__);
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conns_,uid,buffered_evs_pstr,p__35808){
var vec__35809 = p__35808;
var map__35810 = cljs.core.nth.call(null,vec__35809,(0),null);
var map__35810__$1 = ((((!((map__35810 == null)))?((((map__35810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35810):map__35810);
var nmax_attempts = cljs.core.get.call(null,map__35810__$1,new cljs.core.Keyword(null,"nmax-attempts","nmax-attempts",1471144610),(7));
var ms_base = cljs.core.get.call(null,map__35810__$1,new cljs.core.Keyword(null,"ms-base","ms-base",-1962784511),(90));
var ms_rand = cljs.core.get.call(null,map__35810__$1,new cljs.core.Keyword(null,"ms-rand","ms-rand",1169398874),(90));

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7221152511998339814.clj",589,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__35809,map__35810,map__35810__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
});})(vec__35809,map__35810,map__35810__$1,nmax_attempts,ms_base,ms_rand))
,null)),null);

var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__29774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto__,client_ids_unsatisfied,vec__35809,map__35810,map__35810__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto__,client_ids_unsatisfied,vec__35809,map__35810,map__35810__$1,nmax_attempts,ms_base,ms_rand){
return (function (state_35859){
var state_val_35860 = (state_35859[(1)]);
if((state_val_35860 === (7))){
var inst_35813 = (state_35859[(7)]);
var inst_35814 = (state_35859[(8)]);
var inst_35820 = (state_35859[(9)]);
var inst_35831 = (function (){var n = inst_35813;
var client_ids_satisfied = inst_35814;
var _QMARK_pulled = inst_35820;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_35813,inst_35814,inst_35820,state_val_35860,c__29774__auto__,client_ids_unsatisfied,vec__35809,map__35810,map__35810__$1,nmax_attempts,ms_base,ms_rand){
return (function (s,client_id,p__35830){
var vec__35861 = p__35830;
var _QMARK_server_ch = cljs.core.nth.call(null,vec__35861,(0),null);
var _ = cljs.core.nth.call(null,vec__35861,(1),null);
if(((_QMARK_server_ch == null)) || (cljs.core.not.call(null,taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_server_ch,buffered_evs_pstr,new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103))))){
return s;
} else {
return cljs.core.conj.call(null,s,client_id);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_35813,inst_35814,inst_35820,state_val_35860,c__29774__auto__,client_ids_unsatisfied,vec__35809,map__35810,map__35810__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_35832 = cljs.core.PersistentHashSet.EMPTY;
var inst_35833 = cljs.core.reduce_kv.call(null,inst_35831,inst_35832,inst_35820);
var state_35859__$1 = state_35859;
var statearr_35862_35896 = state_35859__$1;
(statearr_35862_35896[(2)] = inst_35833);

(statearr_35862_35896[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (1))){
var inst_35812 = cljs.core.PersistentHashSet.EMPTY;
var inst_35813 = (0);
var inst_35814 = inst_35812;
var state_35859__$1 = (function (){var statearr_35863 = state_35859;
(statearr_35863[(7)] = inst_35813);

(statearr_35863[(8)] = inst_35814);

return statearr_35863;
})();
var statearr_35864_35897 = state_35859__$1;
(statearr_35864_35897[(2)] = null);

(statearr_35864_35897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (4))){
var state_35859__$1 = state_35859;
var statearr_35865_35898 = state_35859__$1;
(statearr_35865_35898[(2)] = true);

(statearr_35865_35898[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (15))){
var inst_35855 = (state_35859[(2)]);
var state_35859__$1 = state_35859;
var statearr_35866_35899 = state_35859__$1;
(statearr_35866_35899[(2)] = inst_35855);

(statearr_35866_35899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (13))){
var inst_35846 = cljs.core.rand_int.call(null,ms_rand);
var inst_35847 = (ms_base + inst_35846);
var inst_35848 = cljs.core.async.timeout.call(null,inst_35847);
var state_35859__$1 = state_35859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35859__$1,(16),inst_35848);
} else {
if((state_val_35860 === (6))){
var inst_35820 = (state_35859[(9)]);
var inst_35828 = (state_35859[(2)]);
var state_35859__$1 = (function (){var statearr_35867 = state_35859;
(statearr_35867[(10)] = inst_35828);

return statearr_35867;
})();
if(cljs.core.truth_(inst_35820)){
var statearr_35868_35900 = state_35859__$1;
(statearr_35868_35900[(1)] = (7));

} else {
var statearr_35869_35901 = state_35859__$1;
(statearr_35869_35901[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (3))){
var inst_35857 = (state_35859[(2)]);
var state_35859__$1 = state_35859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35859__$1,inst_35857);
} else {
if((state_val_35860 === (12))){
var inst_35844 = (state_35859[(2)]);
var state_35859__$1 = state_35859;
if(cljs.core.truth_(inst_35844)){
var statearr_35870_35902 = state_35859__$1;
(statearr_35870_35902[(1)] = (13));

} else {
var statearr_35871_35903 = state_35859__$1;
(statearr_35871_35903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (2))){
var inst_35813 = (state_35859[(7)]);
var inst_35814 = (state_35859[(8)]);
var inst_35820 = (state_35859[(9)]);
var inst_35816 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35817 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_35818 = (new cljs.core.PersistentVector(null,2,(5),inst_35816,inst_35817,null));
var inst_35819 = (function (){var n = inst_35813;
var client_ids_satisfied = inst_35814;
return ((function (n,client_ids_satisfied,inst_35813,inst_35814,inst_35820,inst_35816,inst_35817,inst_35818,state_val_35860,c__29774__auto__,client_ids_unsatisfied,vec__35809,map__35810,map__35810__$1,nmax_attempts,ms_base,ms_rand){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_35813,inst_35814,inst_35820,inst_35816,inst_35817,inst_35818,state_val_35860,c__29774__auto__,client_ids_unsatisfied,vec__35809,map__35810,map__35810__$1,nmax_attempts,ms_base,ms_rand){
return (function (m__$1,k){
var vec__35872 = cljs.core.get.call(null,m__$1,k);
var _QMARK_server_ch = cljs.core.nth.call(null,vec__35872,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__35872,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_35813,inst_35814,inst_35820,inst_35816,inst_35817,inst_35818,state_val_35860,c__29774__auto__,client_ids_unsatisfied,vec__35809,map__35810,map__35810__$1,nmax_attempts,ms_base,ms_rand))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_35813,inst_35814,inst_35820,inst_35816,inst_35817,inst_35818,state_val_35860,c__29774__auto__,client_ids_unsatisfied,vec__35809,map__35810,map__35810__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_35820__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_35818,inst_35819);
var inst_35821 = (function (){var n = inst_35813;
var client_ids_satisfied = inst_35814;
var _QMARK_pulled = inst_35820__$1;
var __x = inst_35820__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,__x,inst_35813,inst_35814,inst_35820,inst_35816,inst_35817,inst_35818,inst_35819,inst_35820__$1,state_val_35860,c__29774__auto__,client_ids_unsatisfied,vec__35809,map__35810,map__35810__$1,nmax_attempts,ms_base,ms_rand){
return (function (__x__$1){
var or__25643__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,__x__$1);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,__x,inst_35813,inst_35814,inst_35820,inst_35816,inst_35817,inst_35818,inst_35819,inst_35820__$1,state_val_35860,c__29774__auto__,client_ids_unsatisfied,vec__35809,map__35810,map__35810__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_35822 = inst_35821.call(null,inst_35820__$1);
var state_35859__$1 = (function (){var statearr_35873 = state_35859;
(statearr_35873[(9)] = inst_35820__$1);

return statearr_35873;
})();
if(cljs.core.truth_(inst_35822)){
var statearr_35874_35904 = state_35859__$1;
(statearr_35874_35904[(1)] = (4));

} else {
var statearr_35875_35905 = state_35859__$1;
(statearr_35875_35905[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (11))){
var inst_35838 = (state_35859[(11)]);
var state_35859__$1 = state_35859;
var statearr_35876_35906 = state_35859__$1;
(statearr_35876_35906[(2)] = inst_35838);

(statearr_35876_35906[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (9))){
var inst_35813 = (state_35859[(7)]);
var inst_35838 = (state_35859[(11)]);
var inst_35814 = (state_35859[(8)]);
var inst_35836 = (state_35859[(2)]);
var inst_35837 = cljs.core.into.call(null,inst_35814,inst_35836);
var inst_35838__$1 = (inst_35813 < nmax_attempts);
var state_35859__$1 = (function (){var statearr_35877 = state_35859;
(statearr_35877[(11)] = inst_35838__$1);

(statearr_35877[(12)] = inst_35837);

return statearr_35877;
})();
if(cljs.core.truth_(inst_35838__$1)){
var statearr_35878_35907 = state_35859__$1;
(statearr_35878_35907[(1)] = (10));

} else {
var statearr_35879_35908 = state_35859__$1;
(statearr_35879_35908[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (5))){
var inst_35820 = (state_35859[(9)]);
var inst_35825 = "([:or nil? map?] ?pulled)";
var inst_35826 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,inst_35825,inst_35820,null,null);
var state_35859__$1 = state_35859;
var statearr_35880_35909 = state_35859__$1;
(statearr_35880_35909[(2)] = inst_35826);

(statearr_35880_35909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (14))){
var state_35859__$1 = state_35859;
var statearr_35881_35910 = state_35859__$1;
(statearr_35881_35910[(2)] = null);

(statearr_35881_35910[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (16))){
var inst_35813 = (state_35859[(7)]);
var inst_35837 = (state_35859[(12)]);
var inst_35850 = (state_35859[(2)]);
var inst_35851 = (inst_35813 + (1));
var inst_35813__$1 = inst_35851;
var inst_35814 = inst_35837;
var state_35859__$1 = (function (){var statearr_35882 = state_35859;
(statearr_35882[(7)] = inst_35813__$1);

(statearr_35882[(8)] = inst_35814);

(statearr_35882[(13)] = inst_35850);

return statearr_35882;
})();
var statearr_35883_35911 = state_35859__$1;
(statearr_35883_35911[(2)] = null);

(statearr_35883_35911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (10))){
var inst_35837 = (state_35859[(12)]);
var inst_35840 = cljs.core.complement.call(null,inst_35837);
var inst_35841 = cljs.core.some.call(null,inst_35840,client_ids_unsatisfied);
var state_35859__$1 = state_35859;
var statearr_35884_35912 = state_35859__$1;
(statearr_35884_35912[(2)] = inst_35841);

(statearr_35884_35912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (8))){
var state_35859__$1 = state_35859;
var statearr_35885_35913 = state_35859__$1;
(statearr_35885_35913[(2)] = null);

(statearr_35885_35913[(1)] = (9));


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
});})(c__29774__auto__,client_ids_unsatisfied,vec__35809,map__35810,map__35810__$1,nmax_attempts,ms_base,ms_rand))
;
return ((function (switch__29662__auto__,c__29774__auto__,client_ids_unsatisfied,vec__35809,map__35810,map__35810__$1,nmax_attempts,ms_base,ms_rand){
return (function() {
var taoensso$sente$state_machine__29663__auto__ = null;
var taoensso$sente$state_machine__29663__auto____0 = (function (){
var statearr_35889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35889[(0)] = taoensso$sente$state_machine__29663__auto__);

(statearr_35889[(1)] = (1));

return statearr_35889;
});
var taoensso$sente$state_machine__29663__auto____1 = (function (state_35859){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_35859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e35890){if((e35890 instanceof Object)){
var ex__29666__auto__ = e35890;
var statearr_35891_35914 = state_35859;
(statearr_35891_35914[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35915 = state_35859;
state_35859 = G__35915;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
taoensso$sente$state_machine__29663__auto__ = function(state_35859){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29663__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29663__auto____1.call(this,state_35859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29663__auto____0;
taoensso$sente$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29663__auto____1;
return taoensso$sente$state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto__,client_ids_unsatisfied,vec__35809,map__35810,map__35810__$1,nmax_attempts,ms_base,ms_rand))
})();
var state__29776__auto__ = (function (){var statearr_35892 = f__29775__auto__.call(null);
(statearr_35892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto__);

return statearr_35892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto__,client_ids_unsatisfied,vec__35809,map__35810,map__35810__$1,nmax_attempts,ms_base,ms_rand))
);

return c__29774__auto__;
}
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$applyTo = (function (seq35804){
var G__35805 = cljs.core.first.call(null,seq35804);
var seq35804__$1 = cljs.core.next.call(null,seq35804);
var G__35806 = cljs.core.first.call(null,seq35804__$1);
var seq35804__$2 = cljs.core.next.call(null,seq35804__$1);
var G__35807 = cljs.core.first.call(null,seq35804__$2);
var seq35804__$3 = cljs.core.next.call(null,seq35804__$2);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35805,G__35806,G__35807,seq35804__$3);
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
var x__26306__auto__ = (((chsk == null))?null:chsk);
var m__26307__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__26306__auto__)]);
if(!((m__26307__auto__ == null))){
return m__26307__auto__.call(null,chsk);
} else {
var m__26307__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__26307__auto____$1 == null))){
return m__26307__auto____$1.call(null,chsk);
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
var x__26306__auto__ = (((chsk == null))?null:chsk);
var m__26307__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__26306__auto__)]);
if(!((m__26307__auto__ == null))){
return m__26307__auto__.call(null,chsk,ev,opts);
} else {
var m__26307__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__26307__auto____$1 == null))){
return m__26307__auto____$1.call(null,chsk,ev,opts);
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
var x__26306__auto__ = (((chsk == null))?null:chsk);
var m__26307__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__26306__auto__)]);
if(!((m__26307__auto__ == null))){
return m__26307__auto__.call(null,chsk);
} else {
var m__26307__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(!((m__26307__auto____$1 == null))){
return m__26307__auto____$1.call(null,chsk);
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
var x__26306__auto__ = (((chsk == null))?null:chsk);
var m__26307__auto__ = (taoensso.sente.chsk_disconnect_BANG_[goog.typeOf(x__26306__auto__)]);
if(!((m__26307__auto__ == null))){
return m__26307__auto__.call(null,chsk);
} else {
var m__26307__auto____$1 = (taoensso.sente.chsk_disconnect_BANG_["_"]);
if(!((m__26307__auto____$1 == null))){
return m__26307__auto____$1.call(null,chsk);
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
var x__26306__auto__ = (((chsk == null))?null:chsk);
var m__26307__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__26306__auto__)]);
if(!((m__26307__auto__ == null))){
return m__26307__auto__.call(null,chsk);
} else {
var m__26307__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(!((m__26307__auto____$1 == null))){
return m__26307__auto____$1.call(null,chsk);
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
var args35916 = [];
var len__26713__auto___35919 = arguments.length;
var i__26714__auto___35920 = (0);
while(true){
if((i__26714__auto___35920 < len__26713__auto___35919)){
args35916.push((arguments[i__26714__auto___35920]));

var G__35921 = (i__26714__auto___35920 + (1));
i__26714__auto___35920 = G__35921;
continue;
} else {
}
break;
}

var G__35918 = args35916.length;
switch (G__35918) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35916.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7221152511998339814.clj",646,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__25643__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__25643__auto__){
return or__25643__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nneg-int? ?timeout-ms)))")].join('')));
}

if(cljs.core.truth_((function (){var or__25643__auto__ = (_QMARK_cb == null);
if(or__25643__auto__){
return or__25643__auto__;
} else {
var or__25643__auto____$1 = cljs.core.ifn_QMARK_.call(null,_QMARK_cb);
if(or__25643__auto____$1){
return or__25643__auto____$1;
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
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__35923,merge_state){
var map__35927 = p__35923;
var map__35927__$1 = ((((!((map__35927 == null)))?((((map__35927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35927):map__35927);
var chsk = map__35927__$1;
var chs = cljs.core.get.call(null,map__35927__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__35927__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__35929 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__35927,map__35927__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__25631__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__25631__auto__)){
var and__25631__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__25631__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__25631__auto____$1;
}
} else {
return and__25631__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__35927,map__35927__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__35929,(0),null);
var new_state = cljs.core.nth.call(null,vec__35929,(1),null);
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
var __x_35934 = _QMARK_cb;
try{if(cljs.core.truth_(taoensso.encore.chan_QMARK_.call(null,__x_35934))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35932){if((e35932 instanceof Error)){
var __t_35935 = e35932;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",__x_35934,__t_35935,null);
} else {
throw e35932;

}
}
taoensso.sente.assert_event.call(null,ev);

var vec__35933 = ev;
var ev_id = cljs.core.nth.call(null,vec__35933,(0),null);
var _ = cljs.core.nth.call(null,vec__35933,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__35933,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__35933,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7221152511998339814.clj",703,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null);

var buffered_evs = (function (){var __x = clj;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35941){if((e35941 instanceof Error)){
var __t = e35941;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",__x,__t,null);
} else {
throw e35941;

}
}})();
var seq__35942 = cljs.core.seq.call(null,buffered_evs);
var chunk__35943 = null;
var count__35944 = (0);
var i__35945 = (0);
while(true){
if((i__35945 < count__35944)){
var ev = cljs.core._nth.call(null,chunk__35943,i__35945);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__35946 = seq__35942;
var G__35947 = chunk__35943;
var G__35948 = count__35944;
var G__35949 = (i__35945 + (1));
seq__35942 = G__35946;
chunk__35943 = G__35947;
count__35944 = G__35948;
i__35945 = G__35949;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__35942);
if(temp__4425__auto__){
var seq__35942__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35942__$1)){
var c__26454__auto__ = cljs.core.chunk_first.call(null,seq__35942__$1);
var G__35950 = cljs.core.chunk_rest.call(null,seq__35942__$1);
var G__35951 = c__26454__auto__;
var G__35952 = cljs.core.count.call(null,c__26454__auto__);
var G__35953 = (0);
seq__35942 = G__35950;
chunk__35943 = G__35951;
count__35944 = G__35952;
i__35945 = G__35953;
continue;
} else {
var ev = cljs.core.first.call(null,seq__35942__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__35954 = cljs.core.next.call(null,seq__35942__$1);
var G__35955 = null;
var G__35956 = (0);
var G__35957 = (0);
seq__35942 = G__35954;
chunk__35943 = G__35955;
count__35944 = G__35956;
i__35945 = G__35957;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7221152511998339814.clj",713,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj], null);
});})(handshake_QMARK_))
,null)),null);

if(handshake_QMARK_){
var vec__35960 = clj;
var _ = cljs.core.nth.call(null,vec__35960,(0),null);
var vec__35961 = cljs.core.nth.call(null,vec__35960,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__35961,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__35961,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__35961,(2),null);
var handshake_ev = vec__35960;
if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init7221152511998339814.clj",719,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__35960,_,vec__35961,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__35960,_,vec__35961,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_))
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
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26265__auto__,k__26266__auto__){
var self__ = this;
var this__26265__auto____$1 = this;
return cljs.core._lookup.call(null,this__26265__auto____$1,k__26266__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26267__auto__,k35963,else__26268__auto__){
var self__ = this;
var this__26267__auto____$1 = this;
var G__35965 = (((k35963 instanceof cljs.core.Keyword))?k35963.fqn:null);
switch (G__35965) {
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
return cljs.core.get.call(null,self__.__extmap,k35963,else__26268__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26279__auto__,writer__26280__auto__,opts__26281__auto__){
var self__ = this;
var this__26279__auto____$1 = this;
var pr_pair__26282__auto__ = ((function (this__26279__auto____$1){
return (function (keyval__26283__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26280__auto__,cljs.core.pr_writer,""," ","",opts__26281__auto__,keyval__26283__auto__);
});})(this__26279__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26280__auto__,pr_pair__26282__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__26281__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35962){
var self__ = this;
var G__35962__$1 = this;
return (new cljs.core.RecordIter((0),G__35962__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26263__auto__){
var self__ = this;
var this__26263__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26259__auto__){
var self__ = this;
var this__26259__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26269__auto__){
var self__ = this;
var this__26269__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26260__auto__){
var self__ = this;
var this__26260__auto____$1 = this;
var h__26078__auto__ = self__.__hash;
if(!((h__26078__auto__ == null))){
return h__26078__auto__;
} else {
var h__26078__auto____$1 = cljs.core.hash_imap.call(null,this__26260__auto____$1);
self__.__hash = h__26078__auto____$1;

return h__26078__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26261__auto__,other__26262__auto__){
var self__ = this;
var this__26261__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25631__auto__ = other__26262__auto__;
if(cljs.core.truth_(and__25631__auto__)){
var and__25631__auto____$1 = (this__26261__auto____$1.constructor === other__26262__auto__.constructor);
if(and__25631__auto____$1){
return cljs.core.equiv_map.call(null,this__26261__auto____$1,other__26262__auto__);
} else {
return and__25631__auto____$1;
}
} else {
return and__25631__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26274__auto__,k__26275__auto__){
var self__ = this;
var this__26274__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__26275__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26274__auto____$1),self__.__meta),k__26275__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26275__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26272__auto__,k__26273__auto__,G__35962){
var self__ = this;
var this__26272__auto____$1 = this;
var pred__35966 = cljs.core.keyword_identical_QMARK_;
var expr__35967 = k__26273__auto__;
if(cljs.core.truth_(pred__35966.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__35967))){
return (new taoensso.sente.ChWebSocket(G__35962,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35966.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__35967))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__35962,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35966.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__35967))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__35962,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35966.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__35967))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__35962,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35966.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__35967))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__35962,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35966.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__35967))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__35962,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35966.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__35967))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__35962,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35966.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__35967))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,G__35962,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35966.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__35967))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,G__35962,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35966.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__35967))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,G__35962,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35966.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__35967))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__35962,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35966.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__35967))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__35962,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35966.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__35967))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,G__35962,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35966.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__35967))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,G__35962,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26273__auto__,G__35962),null));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26277__auto__){
var self__ = this;
var this__26277__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26264__auto__,G__35962){
var self__ = this;
var this__26264__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,G__35962,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26270__auto__,entry__26271__auto__){
var self__ = this;
var this__26270__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26271__auto__)){
return cljs.core._assoc.call(null,this__26270__auto____$1,cljs.core._nth.call(null,entry__26271__auto__,(0)),cljs.core._nth.call(null,entry__26271__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26270__auto____$1,entry__26271__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__35969){
var self__ = this;
var map__35970 = p__35969;
var map__35970__$1 = ((((!((map__35970 == null)))?((((map__35970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35970):map__35970);
var opts = map__35970__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__35970__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__35970__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__35970__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init7221152511998339814.clj",750,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__35970,map__35970__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__35970,map__35970__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4425__auto___36006 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___36006)){
var cb_uuid_36007 = temp__4425__auto___36006;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_36007], null),(function (){var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35972){if((e35972 instanceof Error)){
var __t = e35972;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e35972;

}
}})());

var temp__4425__auto___36008__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4425__auto___36008__$1)){
var timeout_ms_36009 = temp__4425__auto___36008__$1;
var c__29774__auto___36010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto___36010,timeout_ms_36009,temp__4425__auto___36008__$1,cb_uuid_36007,temp__4425__auto___36006,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__35970,map__35970__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto___36010,timeout_ms_36009,temp__4425__auto___36008__$1,cb_uuid_36007,temp__4425__auto___36006,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__35970,map__35970__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_35983){
var state_val_35984 = (state_35983[(1)]);
if((state_val_35984 === (1))){
var inst_35973 = cljs.core.async.timeout.call(null,timeout_ms_36009);
var state_35983__$1 = state_35983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35983__$1,(2),inst_35973);
} else {
if((state_val_35984 === (2))){
var inst_35976 = (state_35983[(7)]);
var inst_35975 = (state_35983[(2)]);
var inst_35976__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_35983__$1 = (function (){var statearr_35985 = state_35983;
(statearr_35985[(8)] = inst_35975);

(statearr_35985[(7)] = inst_35976__$1);

return statearr_35985;
})();
if(cljs.core.truth_(inst_35976__$1)){
var statearr_35986_36011 = state_35983__$1;
(statearr_35986_36011[(1)] = (3));

} else {
var statearr_35987_36012 = state_35983__$1;
(statearr_35987_36012[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35984 === (3))){
var inst_35976 = (state_35983[(7)]);
var inst_35978 = inst_35976.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_35983__$1 = state_35983;
var statearr_35988_36013 = state_35983__$1;
(statearr_35988_36013[(2)] = inst_35978);

(statearr_35988_36013[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35984 === (4))){
var state_35983__$1 = state_35983;
var statearr_35989_36014 = state_35983__$1;
(statearr_35989_36014[(2)] = null);

(statearr_35989_36014[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35984 === (5))){
var inst_35981 = (state_35983[(2)]);
var state_35983__$1 = state_35983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35983__$1,inst_35981);
} else {
return null;
}
}
}
}
}
});})(c__29774__auto___36010,timeout_ms_36009,temp__4425__auto___36008__$1,cb_uuid_36007,temp__4425__auto___36006,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__35970,map__35970__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__29662__auto__,c__29774__auto___36010,timeout_ms_36009,temp__4425__auto___36008__$1,cb_uuid_36007,temp__4425__auto___36006,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__35970,map__35970__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__29663__auto__ = null;
var taoensso$sente$state_machine__29663__auto____0 = (function (){
var statearr_35993 = [null,null,null,null,null,null,null,null,null];
(statearr_35993[(0)] = taoensso$sente$state_machine__29663__auto__);

(statearr_35993[(1)] = (1));

return statearr_35993;
});
var taoensso$sente$state_machine__29663__auto____1 = (function (state_35983){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_35983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e35994){if((e35994 instanceof Object)){
var ex__29666__auto__ = e35994;
var statearr_35995_36015 = state_35983;
(statearr_35995_36015[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36016 = state_35983;
state_35983 = G__36016;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
taoensso$sente$state_machine__29663__auto__ = function(state_35983){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29663__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29663__auto____1.call(this,state_35983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29663__auto____0;
taoensso$sente$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29663__auto____1;
return taoensso$sente$state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto___36010,timeout_ms_36009,temp__4425__auto___36008__$1,cb_uuid_36007,temp__4425__auto___36006,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__35970,map__35970__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__29776__auto__ = (function (){var statearr_35996 = f__29775__auto__.call(null);
(statearr_35996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___36010);

return statearr_35996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto___36010,timeout_ms_36009,temp__4425__auto___36008__$1,cb_uuid_36007,temp__4425__auto___36006,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__35970,map__35970__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e35997){if((e35997 instanceof Error)){
var e = e35997;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init7221152511998339814.clj",769,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__35970,map__35970__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__35970,map__35970__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

var temp__4425__auto___36017 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___36017)){
var cb_uuid_36018 = temp__4425__auto___36017;
var cb_fn_STAR__36019 = (function (){var or__25643__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_36018);
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
} else {
var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35998){if((e35998 instanceof Error)){
var __t = e35998;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e35998;

}
}}
})();
cb_fn_STAR__36019.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e35997;

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

var temp__4425__auto___36020 = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4425__auto___36020)){
var s_36021 = temp__4425__auto___36020;
s_36021.close((3000),"SENTE_RECONNECT");
} else {
}

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4425__auto__ = (function (){var or__25643__auto__ = taoensso.encore.oget.call(null,window,"WebSocket");
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
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

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init7221152511998339814.clj",800,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
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
}catch (e36002){if((e36002 instanceof Error)){
var e = e36002;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init7221152511998339814.clj",811,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_fn,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);

return null;
} else {
throw e36002;

}
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__36003 = _QMARK_socket;
(G__36003["onerror"] = ((function (G__36003,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init7221152511998339814.clj",820,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__36003,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",ws_ev], null);
});})(G__36003,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
});})(G__36003,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__36003["onmessage"] = ((function (G__36003,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__36004 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__36004,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__36004,(1),null);
var or__25643__auto__ = (function (){var and__25631__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__25631__auto__)){
return cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));
} else {
return and__25631__auto__;
}
})();
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
} else {
var temp__4423__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4423__auto__)){
var cb_uuid = temp__4423__auto__;
var temp__4423__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4423__auto____$1)){
var cb_fn = temp__4423__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init7221152511998339814.clj",838,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4423__auto____$1,cb_uuid,temp__4423__auto__,or__25643__auto__,ppstr,vec__36004,clj,_QMARK_cb_uuid,G__36003,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4423__auto____$1,cb_uuid,temp__4423__auto__,or__25643__auto__,ppstr,vec__36004,clj,_QMARK_cb_uuid,G__36003,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__36003,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__36003["onopen"] = ((function (G__36003,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__36003,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__36003,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__36003,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__36003["onclose"] = ((function (G__36003,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);
});})(G__36003,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

return G__36003;
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

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__26299__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__26299__auto__,writer__26300__auto__){
return cljs.core._write.call(null,writer__26300__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__35964){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__35964),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__35964),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__35964),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__35964),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__35964),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__35964),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__35964),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__35964),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__35964),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__35964),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__35964),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__35964),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__35964),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__35964),null,cljs.core.dissoc.call(null,G__35964,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)),null));
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
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26265__auto__,k__26266__auto__){
var self__ = this;
var this__26265__auto____$1 = this;
return cljs.core._lookup.call(null,this__26265__auto____$1,k__26266__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26267__auto__,k36023,else__26268__auto__){
var self__ = this;
var this__26267__auto____$1 = this;
var G__36025 = (((k36023 instanceof cljs.core.Keyword))?k36023.fqn:null);
switch (G__36025) {
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
return cljs.core.get.call(null,self__.__extmap,k36023,else__26268__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26279__auto__,writer__26280__auto__,opts__26281__auto__){
var self__ = this;
var this__26279__auto____$1 = this;
var pr_pair__26282__auto__ = ((function (this__26279__auto____$1){
return (function (keyval__26283__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26280__auto__,cljs.core.pr_writer,""," ","",opts__26281__auto__,keyval__26283__auto__);
});})(this__26279__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26280__auto__,pr_pair__26282__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__26281__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36022){
var self__ = this;
var G__36022__$1 = this;
return (new cljs.core.RecordIter((0),G__36022__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26263__auto__){
var self__ = this;
var this__26263__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26259__auto__){
var self__ = this;
var this__26259__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26269__auto__){
var self__ = this;
var this__26269__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26260__auto__){
var self__ = this;
var this__26260__auto____$1 = this;
var h__26078__auto__ = self__.__hash;
if(!((h__26078__auto__ == null))){
return h__26078__auto__;
} else {
var h__26078__auto____$1 = cljs.core.hash_imap.call(null,this__26260__auto____$1);
self__.__hash = h__26078__auto____$1;

return h__26078__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26261__auto__,other__26262__auto__){
var self__ = this;
var this__26261__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25631__auto__ = other__26262__auto__;
if(cljs.core.truth_(and__25631__auto__)){
var and__25631__auto____$1 = (this__26261__auto____$1.constructor === other__26262__auto__.constructor);
if(and__25631__auto____$1){
return cljs.core.equiv_map.call(null,this__26261__auto____$1,other__26262__auto__);
} else {
return and__25631__auto____$1;
}
} else {
return and__25631__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26274__auto__,k__26275__auto__){
var self__ = this;
var this__26274__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__26275__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26274__auto____$1),self__.__meta),k__26275__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26275__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26272__auto__,k__26273__auto__,G__36022){
var self__ = this;
var this__26272__auto____$1 = this;
var pred__36026 = cljs.core.keyword_identical_QMARK_;
var expr__36027 = k__26273__auto__;
if(cljs.core.truth_(pred__36026.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__36027))){
return (new taoensso.sente.ChAjaxSocket(G__36022,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36026.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__36027))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__36022,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36026.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__36027))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__36022,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36026.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__36027))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__36022,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36026.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__36027))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__36022,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36026.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__36027))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__36022,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36026.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__36027))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__36022,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36026.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__36027))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,G__36022,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36026.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__36027))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,G__36022,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36026.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__36027))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__36022,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36026.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__36027))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,G__36022,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26273__auto__,G__36022),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26277__auto__){
var self__ = this;
var this__26277__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26264__auto__,G__36022){
var self__ = this;
var this__26264__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,G__36022,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26270__auto__,entry__26271__auto__){
var self__ = this;
var this__26270__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26271__auto__)){
return cljs.core._assoc.call(null,this__26270__auto____$1,cljs.core._nth.call(null,entry__26271__auto__,(0)),cljs.core._nth.call(null,entry__26271__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26270__auto____$1,entry__26271__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__36029){
var self__ = this;
var map__36030 = p__36029;
var map__36030__$1 = ((((!((map__36030 == null)))?((((map__36030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36030):map__36030);
var opts = map__36030__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__36030__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__36030__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__36030__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init7221152511998339814.clj",879,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__36030,map__36030__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__36030,map__36030__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
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
})()], null)),((function (csrf_token,_QMARK_cb_fn,chsk__$1,map__36030,map__36030__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__36032){
var map__36036 = p__36032;
var map__36036__$1 = ((((!((map__36036 == null)))?((((map__36036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36036):map__36036);
var _QMARK_error = cljs.core.get.call(null,map__36036__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__36036__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
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
var vec__36038 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__36038,(0),null);
var _ = cljs.core.nth.call(null,vec__36038,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init7221152511998339814.clj",919,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__36038,resp_clj,_,map__36036,map__36036__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__36030,map__36030__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__36038,resp_clj,_,map__36036,map__36036__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__36030,map__36030__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(csrf_token,_QMARK_cb_fn,chsk__$1,map__36030,map__36030__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
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

var temp__4425__auto___36054 = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4425__auto___36054)){
var x_36055 = temp__4425__auto___36054;
x_36055.abort();
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7221152511998339814.clj",940,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(retry_id,chsk__$1))
,null)),null);

var retry_fn = ((function (retry_id,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init7221152511998339814.clj",946,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
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
return (function taoensso$sente$poll_fn_$_ajax_cb(p__36046){
var map__36050 = p__36046;
var map__36050__$1 = ((((!((map__36050 == null)))?((((map__36050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36050):map__36050);
var _QMARK_error = cljs.core.get.call(null,map__36050__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__36050__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
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
var vec__36052 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__36052,(0),null);
var _ = cljs.core.nth.call(null,vec__36052,(1),null);
var or__25643__auto___36056 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__25643__auto___36056)){
} else {
var buffered_evs_36057 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_36057);

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

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__26299__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__26299__auto__,writer__26300__auto__){
return cljs.core._write.call(null,writer__26300__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__36024){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__36024),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__36024),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__36024),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__36024),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__36024),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__36024),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__36024),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__36024),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__36024),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__36024),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__36024),null,cljs.core.dissoc.call(null,G__36024,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)),null));
});

taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__36059 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36059) {
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
var args__26720__auto__ = [];
var len__26713__auto___36075 = arguments.length;
var i__26714__auto___36076 = (0);
while(true){
if((i__26714__auto___36076 < len__26713__auto___36075)){
args__26720__auto__.push((arguments[i__26714__auto___36076]));

var G__36077 = (i__26714__auto___36076 + (1));
i__26714__auto___36076 = G__36077;
continue;
} else {
}
break;
}

var argseq__26721__auto__ = ((((1) < args__26720__auto__.length))?(new cljs.core.IndexedSeq(args__26720__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26721__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__36064){
var vec__36065 = p__36064;
var map__36066 = cljs.core.nth.call(null,vec__36065,(0),null);
var map__36066__$1 = ((((!((map__36066 == null)))?((((map__36066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36066):map__36066);
var opts = map__36066__$1;
var ajax_opts = cljs.core.get.call(null,map__36066__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__36066__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__36066__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var client_id = cljs.core.get.call(null,map__36066__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__25643__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__36066__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__36066__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__36066__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__36066__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__36066__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__36066__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__36066__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__36065,(1),null);
if(cljs.core.truth_((function (){var __x = type;
try{if(((function (__x,vec__36065,map__36066,map__36066__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (__x__$1){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),__x__$1);
});})(__x,vec__36065,map__36066,map__36066__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36068){if((e36068 instanceof Error)){
var __t = e36068;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",__x,__t,null);
} else {
throw e36068;

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
}catch (e36069){if((e36069 instanceof Error)){
var __t = e36069;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",__x,__t,null);
} else {
throw e36069;

}
}})())){
} else {
throw (new Error("Assert failed: (have? enc/nblank-str? client-id)"));
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init7221152511998339814.clj",1055,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36065,map__36066,map__36066__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__36065,map__36066,map__36066__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init7221152511998339814.clj",1057,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36065,map__36066,map__36066__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__36065,map__36066,map__36066__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var win_location = taoensso.encore.get_window_location.call(null);
var win_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_location);
var host__$1 = (function (){var or__25643__auto__ = host;
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var path__$1 = (function (){var or__25643__auto__ = path;
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__36065,map__36066,map__36066__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__25643__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__25643__auto__){
return or__25643__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__36065,map__36066,map__36066__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36065,map__36066,map__36066__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36065,map__36066,map__36066__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),(function (){var _LT_server_ch = new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs);
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36065,map__36066,map__36066__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36065,map__36066,map__36066__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
} else {
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36065,map__36066,map__36066__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__36070 = ev;
var id = cljs.core.nth.call(null,vec__36070,(0),null);
var _QMARK_data = cljs.core.nth.call(null,vec__36070,(1),null);
var __x_36078 = (function (){try{return cljs.core.namespace.call(null,id);
}catch (e36071){if((e36071 instanceof Error)){
var __t = e36071;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__36061#] (not= p1__36061# \"chsk\")) (namespace id))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e36071;

}
}})();
try{if(((function (__x_36078,vec__36070,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36065,map__36066,map__36066__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (p1__36061_SHARP_){
return cljs.core.not_EQ_.call(null,p1__36061_SHARP_,"chsk");
});})(__x_36078,vec__36070,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36065,map__36066,map__36066__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x_36078)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36072){if((e36072 instanceof Error)){
var __t_36079 = e36072;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__36061#] (not= p1__36061# \"chsk\")) (namespace id))",__x_36078,__t_36079,null);
} else {
throw e36072;

}
}
return ev;
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36065,map__36066,map__36066__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
}
})()], null));
var chsk = (function (){var or__25643__auto__ = (function (){var and__25631__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__25631__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,packer__$1,private_chs,params,cljs.core.atom.call(null,(0)),backoff_ms_fn,cljs.core.atom.call(null,null),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ws","ws",86841443));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
}
})(),cljs.core.atom.call(null,"pending"),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__25631__auto__;
}
})();
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
} else {
var and__25631__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__25631__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"state_","state_",957667102)],[cljs.core.atom.call(null,null),client_id,packer__$1,private_chs,params,backoff_ms_fn,(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
}
})(),cljs.core.atom.call(null,"pending"),ajax_opts,lp_timeout_ms,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__25631__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str("chsk")].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__36065,map__36066,map__36066__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__36074 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__36074,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__36074,(1),null);
var ev__$1 = vec__36074;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__36065,map__36066,map__36066__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq36062){
var G__36063 = cljs.core.first.call(null,seq36062);
var seq36062__$1 = cljs.core.next.call(null,seq36062);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36063,seq36062__$1);
});
taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__36286 = opts;
var map__36286__$1 = ((((!((map__36286 == null)))?((((map__36286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36286):map__36286);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36286__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36286__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__29774__auto___36492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto___36492,map__36286,map__36286__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto___36492,map__36286,map__36286__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (state_36417){
var state_val_36418 = (state_36417[(1)]);
if((state_val_36418 === (7))){
var inst_36413 = (state_36417[(2)]);
var state_36417__$1 = state_36417;
var statearr_36419_36493 = state_36417__$1;
(statearr_36419_36493[(2)] = inst_36413);

(statearr_36419_36493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (20))){
var inst_36295 = (state_36417[(7)]);
var inst_36322 = (state_36417[(8)]);
var inst_36294 = (state_36417[(9)]);
var inst_36296 = (state_36417[(10)]);
var inst_36297 = (state_36417[(11)]);
var inst_36321 = (state_36417[(12)]);
var inst_36332 = (function (){var vec__36289 = inst_36294;
var v = inst_36295;
var p = inst_36296;
var stop_QMARK_ = inst_36297;
var map__36300 = inst_36321;
var event_msg = inst_36321;
var event = inst_36322;
return ((function (vec__36289,v,p,stop_QMARK_,map__36300,event_msg,event,inst_36295,inst_36322,inst_36294,inst_36296,inst_36297,inst_36321,state_val_36418,c__29774__auto___36492,map__36286,map__36286__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__36289,v,p,stop_QMARK_,map__36300,event_msg,event,inst_36295,inst_36322,inst_36294,inst_36296,inst_36297,inst_36321,state_val_36418,c__29774__auto___36492,map__36286,map__36286__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_36333 = (new cljs.core.Delay(inst_36332,null));
var inst_36334 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7221152511998339814.clj",1176,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_36333,null);
var state_36417__$1 = state_36417;
var statearr_36420_36494 = state_36417__$1;
(statearr_36420_36494[(2)] = inst_36334);

(statearr_36420_36494[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (27))){
var inst_36321 = (state_36417[(12)]);
var inst_36339 = (state_36417[(2)]);
var inst_36340 = "(server-event-msg? event-msg)";
var inst_36341 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_36340,inst_36321,inst_36339,null);
var state_36417__$1 = state_36417;
var statearr_36421_36495 = state_36417__$1;
(statearr_36421_36495[(2)] = inst_36341);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36417__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (1))){
var state_36417__$1 = state_36417;
var statearr_36422_36496 = state_36417__$1;
(statearr_36422_36496[(2)] = null);

(statearr_36422_36496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (24))){
var state_36417__$1 = state_36417;
var statearr_36423_36497 = state_36417__$1;
(statearr_36423_36497[(2)] = null);

(statearr_36423_36497[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (39))){
var state_36417__$1 = state_36417;
var statearr_36424_36498 = state_36417__$1;
(statearr_36424_36498[(2)] = null);

(statearr_36424_36498[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (46))){
var inst_36386 = (state_36417[(13)]);
var inst_36394 = (state_36417[(2)]);
var inst_36395 = [inst_36394,null];
var inst_36396 = (new cljs.core.PersistentVector(null,2,(5),inst_36386,inst_36395,null));
var state_36417__$1 = state_36417;
var statearr_36425_36499 = state_36417__$1;
(statearr_36425_36499[(2)] = inst_36396);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36417__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (4))){
var inst_36294 = (state_36417[(9)]);
var inst_36296 = (state_36417[(10)]);
var inst_36297 = (state_36417[(11)]);
var inst_36294__$1 = (state_36417[(2)]);
var inst_36295 = cljs.core.nth.call(null,inst_36294__$1,(0),null);
var inst_36296__$1 = cljs.core.nth.call(null,inst_36294__$1,(1),null);
var inst_36297__$1 = taoensso.encore.kw_identical_QMARK_.call(null,inst_36296__$1,ch_ctrl);
var state_36417__$1 = (function (){var statearr_36426 = state_36417;
(statearr_36426[(7)] = inst_36295);

(statearr_36426[(9)] = inst_36294__$1);

(statearr_36426[(10)] = inst_36296__$1);

(statearr_36426[(11)] = inst_36297__$1);

return statearr_36426;
})();
if(cljs.core.truth_(inst_36297__$1)){
var statearr_36427_36500 = state_36417__$1;
(statearr_36427_36500[(1)] = (5));

} else {
var statearr_36428_36501 = state_36417__$1;
(statearr_36428_36501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (15))){
var inst_36295 = (state_36417[(7)]);
var state_36417__$1 = state_36417;
var statearr_36429_36502 = state_36417__$1;
(statearr_36429_36502[(2)] = inst_36295);

(statearr_36429_36502[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (48))){
var state_36417__$1 = state_36417;
var statearr_36430_36503 = state_36417__$1;
(statearr_36430_36503[(2)] = null);

(statearr_36430_36503[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (21))){
var state_36417__$1 = state_36417;
var statearr_36431_36504 = state_36417__$1;
(statearr_36431_36504[(2)] = null);

(statearr_36431_36504[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (31))){
var inst_36350 = (state_36417[(2)]);
var state_36417__$1 = state_36417;
var statearr_36432_36505 = state_36417__$1;
(statearr_36432_36505[(2)] = inst_36350);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36417__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (32))){
var inst_36367 = (state_36417[(2)]);
var state_36417__$1 = state_36417;
var statearr_36433_36506 = state_36417__$1;
(statearr_36433_36506[(2)] = inst_36367);

(statearr_36433_36506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (40))){
var inst_36410 = (state_36417[(2)]);
var state_36417__$1 = (function (){var statearr_36434 = state_36417;
(statearr_36434[(14)] = inst_36410);

return statearr_36434;
})();
var statearr_36435_36507 = state_36417__$1;
(statearr_36435_36507[(2)] = null);

(statearr_36435_36507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (33))){
var inst_36321 = (state_36417[(12)]);
var inst_36354 = (state_36417[(2)]);
var inst_36355 = "(client-event-msg? event-msg)";
var inst_36356 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_36355,inst_36321,inst_36354,null);
var state_36417__$1 = state_36417;
var statearr_36436_36508 = state_36417__$1;
(statearr_36436_36508[(2)] = inst_36356);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36417__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (13))){
var inst_36313 = (state_36417[(2)]);
var state_36417__$1 = state_36417;
var statearr_36437_36509 = state_36417__$1;
(statearr_36437_36509[(2)] = inst_36313);

(statearr_36437_36509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (22))){
var inst_36337 = (state_36417[(2)]);
var state_36417__$1 = (function (){var statearr_36438 = state_36417;
(statearr_36438[(15)] = inst_36337);

return statearr_36438;
})();
if(cljs.core.truth_(server_QMARK_)){
var statearr_36439_36510 = state_36417__$1;
(statearr_36439_36510[(1)] = (23));

} else {
var statearr_36440_36511 = state_36417__$1;
(statearr_36440_36511[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (36))){
var inst_36363 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_36417__$1 = state_36417;
var statearr_36441_36512 = state_36417__$1;
(statearr_36441_36512[(2)] = inst_36363);

(statearr_36441_36512[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (41))){
var inst_36398 = (state_36417[(16)]);
var inst_36400 = (state_36417[(17)]);
var inst_36398__$1 = (state_36417[(2)]);
var inst_36399 = cljs.core.nth.call(null,inst_36398__$1,(0),null);
var inst_36400__$1 = cljs.core.nth.call(null,inst_36398__$1,(1),null);
var state_36417__$1 = (function (){var statearr_36442 = state_36417;
(statearr_36442[(18)] = inst_36399);

(statearr_36442[(16)] = inst_36398__$1);

(statearr_36442[(17)] = inst_36400__$1);

return statearr_36442;
})();
if(cljs.core.truth_(inst_36400__$1)){
var statearr_36443_36513 = state_36417__$1;
(statearr_36443_36513[(1)] = (47));

} else {
var statearr_36444_36514 = state_36417__$1;
(statearr_36444_36514[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (43))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36417,(42),Error,null,(41));
var inst_36386 = cljs.core.PersistentVector.EMPTY_NODE;
var state_36417__$1 = (function (){var statearr_36445 = state_36417;
(statearr_36445[(13)] = inst_36386);

return statearr_36445;
})();
if(cljs.core.truth_(error_handler)){
var statearr_36446_36515 = state_36417__$1;
(statearr_36446_36515[(1)] = (44));

} else {
var statearr_36447_36516 = state_36417__$1;
(statearr_36447_36516[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (29))){
var inst_36321 = (state_36417[(12)]);
var state_36417__$1 = state_36417;
var statearr_36448_36517 = state_36417__$1;
(statearr_36448_36517[(2)] = inst_36321);

(statearr_36448_36517[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (44))){
var inst_36376 = (state_36417[(19)]);
var inst_36321 = (state_36417[(12)]);
var inst_36388 = error_handler.call(null,inst_36376,inst_36321);
var state_36417__$1 = state_36417;
var statearr_36449_36518 = state_36417__$1;
(statearr_36449_36518[(2)] = inst_36388);

(statearr_36449_36518[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (6))){
var inst_36295 = (state_36417[(7)]);
var inst_36303 = (inst_36295 == null);
var inst_36304 = cljs.core.not.call(null,inst_36303);
var state_36417__$1 = state_36417;
if(inst_36304){
var statearr_36450_36519 = state_36417__$1;
(statearr_36450_36519[(1)] = (8));

} else {
var statearr_36451_36520 = state_36417__$1;
(statearr_36451_36520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (28))){
var inst_36321 = (state_36417[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36417,(27),Error,null,(26));
var inst_36345 = taoensso.sente.server_event_msg_QMARK_.call(null,inst_36321);
var state_36417__$1 = state_36417;
if(cljs.core.truth_(inst_36345)){
var statearr_36452_36521 = state_36417__$1;
(statearr_36452_36521[(1)] = (29));

} else {
var statearr_36453_36522 = state_36417__$1;
(statearr_36453_36522[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (25))){
var inst_36330 = (state_36417[(20)]);
var inst_36369 = (state_36417[(2)]);
var inst_36370 = event_msg_handler.call(null,inst_36369);
var inst_36371 = [inst_36370,null];
var inst_36372 = (new cljs.core.PersistentVector(null,2,(5),inst_36330,inst_36371,null));
var state_36417__$1 = state_36417;
var statearr_36454_36523 = state_36417__$1;
(statearr_36454_36523[(2)] = inst_36372);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36417__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (34))){
var inst_36321 = (state_36417[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36417,(33),Error,null,(32));
var inst_36360 = taoensso.sente.client_event_msg_QMARK_.call(null,inst_36321);
var state_36417__$1 = state_36417;
if(cljs.core.truth_(inst_36360)){
var statearr_36455_36524 = state_36417__$1;
(statearr_36455_36524[(1)] = (35));

} else {
var statearr_36456_36525 = state_36417__$1;
(statearr_36456_36525[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (17))){
var inst_36374 = (state_36417[(21)]);
var inst_36376 = (state_36417[(19)]);
var inst_36374__$1 = (state_36417[(2)]);
var inst_36375 = cljs.core.nth.call(null,inst_36374__$1,(0),null);
var inst_36376__$1 = cljs.core.nth.call(null,inst_36374__$1,(1),null);
var state_36417__$1 = (function (){var statearr_36457 = state_36417;
(statearr_36457[(22)] = inst_36375);

(statearr_36457[(21)] = inst_36374__$1);

(statearr_36457[(19)] = inst_36376__$1);

return statearr_36457;
})();
if(cljs.core.truth_(inst_36376__$1)){
var statearr_36458_36526 = state_36417__$1;
(statearr_36458_36526[(1)] = (38));

} else {
var statearr_36459_36527 = state_36417__$1;
(statearr_36459_36527[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (3))){
var inst_36415 = (state_36417[(2)]);
var state_36417__$1 = state_36417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36417__$1,inst_36415);
} else {
if((state_val_36418 === (12))){
var state_36417__$1 = state_36417;
var statearr_36460_36528 = state_36417__$1;
(statearr_36460_36528[(2)] = false);

(statearr_36460_36528[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (2))){
var inst_36290 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36291 = [ch_recv,ch_ctrl];
var inst_36292 = (new cljs.core.PersistentVector(null,2,(5),inst_36290,inst_36291,null));
var state_36417__$1 = state_36417;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36417__$1,(4),inst_36292);
} else {
if((state_val_36418 === (23))){
var state_36417__$1 = state_36417;
var statearr_36461_36529 = state_36417__$1;
(statearr_36461_36529[(2)] = null);

(statearr_36461_36529[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (47))){
var inst_36399 = (state_36417[(18)]);
var inst_36374 = (state_36417[(21)]);
var inst_36295 = (state_36417[(7)]);
var inst_36322 = (state_36417[(8)]);
var inst_36398 = (state_36417[(16)]);
var inst_36294 = (state_36417[(9)]);
var inst_36400 = (state_36417[(17)]);
var inst_36296 = (state_36417[(10)]);
var inst_36376 = (state_36417[(19)]);
var inst_36297 = (state_36417[(11)]);
var inst_36321 = (state_36417[(12)]);
var inst_36402 = (function (){var p = inst_36296;
var _QMARK_error = inst_36376;
var map__36300 = inst_36321;
var temp__4425__auto__ = inst_36400;
var v = inst_36295;
var vec__36301 = inst_36374;
var _ = inst_36399;
var e2 = inst_36400;
var _QMARK_error2 = inst_36400;
var event_msg = inst_36321;
var e = inst_36376;
var event = inst_36322;
var vec__36378 = inst_36398;
var vec__36289 = inst_36294;
var stop_QMARK_ = inst_36297;
return ((function (p,_QMARK_error,map__36300,temp__4425__auto__,v,vec__36301,_,e2,_QMARK_error2,event_msg,e,event,vec__36378,vec__36289,stop_QMARK_,inst_36399,inst_36374,inst_36295,inst_36322,inst_36398,inst_36294,inst_36400,inst_36296,inst_36376,inst_36297,inst_36321,state_val_36418,c__29774__auto___36492,map__36286,map__36286__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});
;})(p,_QMARK_error,map__36300,temp__4425__auto__,v,vec__36301,_,e2,_QMARK_error2,event_msg,e,event,vec__36378,vec__36289,stop_QMARK_,inst_36399,inst_36374,inst_36295,inst_36322,inst_36398,inst_36294,inst_36400,inst_36296,inst_36376,inst_36297,inst_36321,state_val_36418,c__29774__auto___36492,map__36286,map__36286__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_36403 = (new cljs.core.Delay(inst_36402,null));
var inst_36404 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init7221152511998339814.clj",1189,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_36403,null);
var state_36417__$1 = state_36417;
var statearr_36462_36530 = state_36417__$1;
(statearr_36462_36530[(2)] = inst_36404);

(statearr_36462_36530[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (35))){
var inst_36321 = (state_36417[(12)]);
var state_36417__$1 = state_36417;
var statearr_36463_36531 = state_36417__$1;
(statearr_36463_36531[(2)] = inst_36321);

(statearr_36463_36531[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36417,(18),Error,null,(17));
var inst_36330 = cljs.core.PersistentVector.EMPTY_NODE;
var state_36417__$1 = (function (){var statearr_36464 = state_36417;
(statearr_36464[(20)] = inst_36330);

return statearr_36464;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_36465_36532 = state_36417__$1;
(statearr_36465_36532[(1)] = (20));

} else {
var statearr_36466_36533 = state_36417__$1;
(statearr_36466_36533[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (11))){
var state_36417__$1 = state_36417;
var statearr_36467_36534 = state_36417__$1;
(statearr_36467_36534[(2)] = true);

(statearr_36467_36534[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (9))){
var state_36417__$1 = state_36417;
var statearr_36468_36535 = state_36417__$1;
(statearr_36468_36535[(2)] = false);

(statearr_36468_36535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (5))){
var state_36417__$1 = state_36417;
var statearr_36469_36536 = state_36417__$1;
(statearr_36469_36536[(2)] = null);

(statearr_36469_36536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (14))){
var inst_36295 = (state_36417[(7)]);
var inst_36318 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36295);
var state_36417__$1 = state_36417;
var statearr_36470_36537 = state_36417__$1;
(statearr_36470_36537[(2)] = inst_36318);

(statearr_36470_36537[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (45))){
var inst_36375 = (state_36417[(22)]);
var inst_36374 = (state_36417[(21)]);
var inst_36295 = (state_36417[(7)]);
var inst_36322 = (state_36417[(8)]);
var inst_36294 = (state_36417[(9)]);
var inst_36296 = (state_36417[(10)]);
var inst_36376 = (state_36417[(19)]);
var inst_36297 = (state_36417[(11)]);
var inst_36321 = (state_36417[(12)]);
var inst_36390 = (function (){var p = inst_36296;
var _QMARK_error = inst_36376;
var map__36300 = inst_36321;
var temp__4425__auto__ = inst_36376;
var v = inst_36295;
var temp__4423__auto__ = error_handler;
var vec__36301 = inst_36374;
var _ = inst_36375;
var event_msg = inst_36321;
var e = inst_36376;
var event = inst_36322;
var vec__36289 = inst_36294;
var stop_QMARK_ = inst_36297;
return ((function (p,_QMARK_error,map__36300,temp__4425__auto__,v,temp__4423__auto__,vec__36301,_,event_msg,e,event,vec__36289,stop_QMARK_,inst_36375,inst_36374,inst_36295,inst_36322,inst_36294,inst_36296,inst_36376,inst_36297,inst_36321,state_val_36418,c__29774__auto___36492,map__36286,map__36286__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router `event-msg-handler` error: %s",event], null);
});
;})(p,_QMARK_error,map__36300,temp__4425__auto__,v,temp__4423__auto__,vec__36301,_,event_msg,e,event,vec__36289,stop_QMARK_,inst_36375,inst_36374,inst_36295,inst_36322,inst_36294,inst_36296,inst_36376,inst_36297,inst_36321,state_val_36418,c__29774__auto___36492,map__36286,map__36286__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_36391 = (new cljs.core.Delay(inst_36390,null));
var inst_36392 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init7221152511998339814.clj",1187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_36391,null);
var state_36417__$1 = state_36417;
var statearr_36471_36538 = state_36417__$1;
(statearr_36471_36538[(2)] = inst_36392);

(statearr_36471_36538[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (26))){
var inst_36352 = (state_36417[(2)]);
var state_36417__$1 = state_36417;
var statearr_36472_36539 = state_36417__$1;
(statearr_36472_36539[(2)] = inst_36352);

(statearr_36472_36539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (16))){
var inst_36321 = (state_36417[(12)]);
var inst_36321__$1 = (state_36417[(2)]);
var inst_36322 = cljs.core.get.call(null,inst_36321__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_36417__$1 = (function (){var statearr_36473 = state_36417;
(statearr_36473[(8)] = inst_36322);

(statearr_36473[(12)] = inst_36321__$1);

return statearr_36473;
})();
var statearr_36474_36540 = state_36417__$1;
(statearr_36474_36540[(2)] = null);

(statearr_36474_36540[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (38))){
var state_36417__$1 = state_36417;
var statearr_36475_36541 = state_36417__$1;
(statearr_36475_36541[(2)] = null);

(statearr_36475_36541[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (30))){
var inst_36348 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_36417__$1 = state_36417;
var statearr_36476_36542 = state_36417__$1;
(statearr_36476_36542[(2)] = inst_36348);

(statearr_36476_36542[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (10))){
var inst_36316 = (state_36417[(2)]);
var state_36417__$1 = state_36417;
if(cljs.core.truth_(inst_36316)){
var statearr_36477_36543 = state_36417__$1;
(statearr_36477_36543[(1)] = (14));

} else {
var statearr_36478_36544 = state_36417__$1;
(statearr_36478_36544[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (18))){
var inst_36323 = (state_36417[(2)]);
var inst_36324 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36325 = [null,inst_36323];
var inst_36326 = (new cljs.core.PersistentVector(null,2,(5),inst_36324,inst_36325,null));
var state_36417__$1 = state_36417;
var statearr_36479_36545 = state_36417__$1;
(statearr_36479_36545[(2)] = inst_36326);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36417__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (42))){
var inst_36379 = (state_36417[(2)]);
var inst_36380 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36381 = [null,inst_36379];
var inst_36382 = (new cljs.core.PersistentVector(null,2,(5),inst_36380,inst_36381,null));
var state_36417__$1 = state_36417;
var statearr_36480_36546 = state_36417__$1;
(statearr_36480_36546[(2)] = inst_36382);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36417__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (37))){
var inst_36365 = (state_36417[(2)]);
var state_36417__$1 = state_36417;
var statearr_36481_36547 = state_36417__$1;
(statearr_36481_36547[(2)] = inst_36365);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36417__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (8))){
var inst_36295 = (state_36417[(7)]);
var inst_36306 = inst_36295.cljs$lang$protocol_mask$partition0$;
var inst_36307 = (inst_36306 & (64));
var inst_36308 = inst_36295.cljs$core$ISeq$;
var inst_36309 = (inst_36307) || (inst_36308);
var state_36417__$1 = state_36417;
if(cljs.core.truth_(inst_36309)){
var statearr_36482_36548 = state_36417__$1;
(statearr_36482_36548[(1)] = (11));

} else {
var statearr_36483_36549 = state_36417__$1;
(statearr_36483_36549[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36418 === (49))){
var inst_36407 = (state_36417[(2)]);
var state_36417__$1 = state_36417;
var statearr_36484_36550 = state_36417__$1;
(statearr_36484_36550[(2)] = inst_36407);

(statearr_36484_36550[(1)] = (40));


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
});})(c__29774__auto___36492,map__36286,map__36286__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
;
return ((function (switch__29662__auto__,c__29774__auto___36492,map__36286,map__36286__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29663__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29663__auto____0 = (function (){
var statearr_36488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36488[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29663__auto__);

(statearr_36488[(1)] = (1));

return statearr_36488;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29663__auto____1 = (function (state_36417){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_36417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e36489){if((e36489 instanceof Object)){
var ex__29666__auto__ = e36489;
var statearr_36490_36551 = state_36417;
(statearr_36490_36551[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36552 = state_36417;
state_36417 = G__36552;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29663__auto__ = function(state_36417){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29663__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29663__auto____1.call(this,state_36417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29663__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29663__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto___36492,map__36286,map__36286__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var state__29776__auto__ = (function (){var statearr_36491 = f__29775__auto__.call(null);
(statearr_36491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___36492);

return statearr_36491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto___36492,map__36286,map__36286__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
);


return ((function (map__36286,map__36286__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__36286,map__36286__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
});
/**
 * Creates a go-loop to call `(event-msg-handler <server-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__26720__auto__ = [];
var len__26713__auto___36560 = arguments.length;
var i__26714__auto___36561 = (0);
while(true){
if((i__26714__auto___36561 < len__26713__auto___36560)){
args__26720__auto__.push((arguments[i__26714__auto___36561]));

var G__36562 = (i__26714__auto___36561 + (1));
i__26714__auto___36561 = G__36562;
continue;
} else {
}
break;
}

var argseq__26721__auto__ = ((((2) < args__26720__auto__.length))?(new cljs.core.IndexedSeq(args__26720__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26721__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__36556){
var vec__36557 = p__36556;
var map__36558 = cljs.core.nth.call(null,vec__36557,(0),null);
var map__36558__$1 = ((((!((map__36558 == null)))?((((map__36558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36558):map__36558);
var opts = map__36558__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36558__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36558__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq36553){
var G__36554 = cljs.core.first.call(null,seq36553);
var seq36553__$1 = cljs.core.next.call(null,seq36553);
var G__36555 = cljs.core.first.call(null,seq36553__$1);
var seq36553__$2 = cljs.core.next.call(null,seq36553__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36554,G__36555,seq36553__$2);
});
/**
 * Creates a go-loop to call `(event-msg-handler <client-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__26720__auto__ = [];
var len__26713__auto___36570 = arguments.length;
var i__26714__auto___36571 = (0);
while(true){
if((i__26714__auto___36571 < len__26713__auto___36570)){
args__26720__auto__.push((arguments[i__26714__auto___36571]));

var G__36572 = (i__26714__auto___36571 + (1));
i__26714__auto___36571 = G__36572;
continue;
} else {
}
break;
}

var argseq__26721__auto__ = ((((2) < args__26720__auto__.length))?(new cljs.core.IndexedSeq(args__26720__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26721__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__36566){
var vec__36567 = p__36566;
var map__36568 = cljs.core.nth.call(null,vec__36567,(0),null);
var map__36568__$1 = ((((!((map__36568 == null)))?((((map__36568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36568):map__36568);
var opts = map__36568__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36568__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36568__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq36563){
var G__36564 = cljs.core.first.call(null,seq36563);
var seq36563__$1 = cljs.core.next.call(null,seq36563);
var G__36565 = cljs.core.first.call(null,seq36563__$1);
var seq36563__$2 = cljs.core.next.call(null,seq36563__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36564,G__36565,seq36563__$2);
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__36573,websocket_QMARK_){
var map__36576 = p__36573;
var map__36576__$1 = ((((!((map__36576 == null)))?((((map__36576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36576):map__36576);
var location = map__36576__$1;
var adjusted_protocol = cljs.core.get.call(null,map__36576__$1,new cljs.core.Keyword(null,"adjusted-protocol","adjusted-protocol",37431492));
var host = cljs.core.get.call(null,map__36576__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__36576__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str(adjusted_protocol),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__25643__auto__ = path;
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map