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
var vec__35700 = x;
var ev_id = cljs.core.nth.call(null,vec__35700,(0),null);
var _ = cljs.core.nth.call(null,vec__35700,(1),null);
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
var err_fmt = [cljs.core.str((function (){var G__35702 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__35702) {
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
var and__25902__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__25902__auto__){
var and__25902__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__25902__auto____$1)){
var map__35706 = x;
var map__35706__$1 = ((((!((map__35706 == null)))?((((map__35706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35706):map__35706);
var ch_recv = cljs.core.get.call(null,map__35706__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__35706__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__35706__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__35706__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__25902__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__25902__auto____$2)){
var and__25902__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__25902__auto____$3){
var and__25902__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(cljs.core.truth_(and__25902__auto____$4)){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__25902__auto____$4;
}
} else {
return and__25902__auto____$3;
}
} else {
return and__25902__auto____$2;
}
} else {
return and__25902__auto____$1;
}
} else {
return and__25902__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__25902__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__25902__auto__){
var and__25902__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__25902__auto____$1)){
var map__35710 = x;
var map__35710__$1 = ((((!((map__35710 == null)))?((((map__35710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35710):map__35710);
var ch_recv = cljs.core.get.call(null,map__35710__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__35710__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__35710__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__35710__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__35710__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__35710__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__35710__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__25902__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__25902__auto____$2)){
var and__25902__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__25902__auto____$3){
var and__25902__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(cljs.core.truth_(and__25902__auto____$4)){
var and__25902__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__25902__auto____$5){
var and__25902__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(cljs.core.truth_(and__25902__auto____$6)){
var and__25902__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__25902__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__25902__auto____$7;
}
} else {
return and__25902__auto____$6;
}
} else {
return and__25902__auto____$5;
}
} else {
return and__25902__auto____$4;
}
} else {
return and__25902__auto____$3;
}
} else {
return and__25902__auto____$2;
}
} else {
return and__25902__auto____$1;
}
} else {
return and__25902__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__35712){
var map__35716 = p__35712;
var map__35716__$1 = ((((!((map__35716 == null)))?((((map__35716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35716):map__35716);
var ev_msg = map__35716__$1;
var event = cljs.core.get.call(null,map__35716__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__35716__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__35718 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__35718,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__35718,(1),null);
var valid_event = vec__35718;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init1531749806506696929.clj",159,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__35718,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__35716,map__35716__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__35718,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__35716,map__35716__$1,ev_msg,event,_QMARK_reply_fn))
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
}catch (e35722){if((e35722 instanceof Error)){
var __t = e35722;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? pstr)",__x,__t,null);
} else {
throw e35722;

}
}})());
}catch (e35721){var t = e35721;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init1531749806506696929.clj",175,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t){
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
var args35723 = [];
var len__26984__auto___35726 = arguments.length;
var i__26985__auto___35727 = (0);
while(true){
if((i__26985__auto___35727 < len__26984__auto___35726)){
args35723.push((arguments[i__26985__auto___35727]));

var G__35728 = (i__26985__auto___35727 + (1));
i__26985__auto___35727 = G__35728;
continue;
} else {
}
break;
}

var G__35725 = args35723.length;
switch (G__35725) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35723.length)].join('')));

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
var args__26991__auto__ = [];
var len__26984__auto___35731 = arguments.length;
var i__26985__auto___35732 = (0);
while(true){
if((i__26985__auto___35732 < len__26984__auto___35731)){
args__26991__auto__.push((arguments[i__26985__auto___35732]));

var G__35733 = (i__26985__auto___35732 + (1));
i__26985__auto___35732 = G__35733;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((0) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((0)),(0),null)):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__26992__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init1531749806506696929.clj",193,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing: %s -> %s",args,pstr], null);
});})(pstr))
,null)),null);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq35730){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35730));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
var __x_35740 = prefixed_pstr;
try{if(typeof __x_35740 === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35737){if((e35737 instanceof Error)){
var __t_35741 = e35737;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",__x_35740,__t_35741,null);
} else {
throw e35737;

}
}
var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__35739 = prefix;
switch (G__35739) {
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
var vec__35738 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__35738,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__35738,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init1531749806506696929.clj",205,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (prefix,pstr,clj,wrapped_QMARK_,vec__35738,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(prefix,pstr,clj,wrapped_QMARK_,vec__35738,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
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
var args__26991__auto__ = [];
var len__26984__auto___35912 = arguments.length;
var i__26985__auto___35913 = (0);
while(true){
if((i__26985__auto___35913 < len__26984__auto___35912)){
args__26991__auto__.push((arguments[i__26985__auto___35913]));

var G__35914 = (i__26985__auto___35913 + (1));
i__26985__auto___35913 = G__35914;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_adapter,p__35746){
var vec__35747 = p__35746;
var map__35748 = cljs.core.nth.call(null,vec__35747,(0),null);
var map__35748__$1 = ((((!((map__35748 == null)))?((((map__35748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35748):map__35748);
var recv_buf_or_n = cljs.core.get.call(null,map__35748__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__35748__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__35748__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__35748__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__35748__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__25914__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
var or__25914__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__25914__auto____$1)){
return or__25914__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__35748__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__35748__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var __x = send_buf_ms_ajax;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35750){if((e35750 instanceof Error)){
var __t = e35750;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",__x,__t,null);
} else {
throw e35750;

}
}})(),(function (){var __x = send_buf_ms_ws;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35751){if((e35751 instanceof Error)){
var __t = e35751;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",__x,__t,null);
} else {
throw e35751;

}
}})()], null))){
} else {
throw (new Error("Assert failed: (have? enc/pos-int? send-buf-ms-ajax send-buf-ms-ws)"));
}

if(cljs.core.truth_((function (){var __x = web_server_adapter;
try{if(((function (__x,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__35743_SHARP_){
if(!((p1__35743_SHARP_ == null))){
if((false) || (p1__35743_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__35743_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__35743_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__35743_SHARP_);
}
});})(__x,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35752){if((e35752 instanceof Error)){
var __t = e35752;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__35743#] (satisfies? interfaces/IServerChanAdapter p1__35743#)) web-server-adapter)",__x,__t,null);
} else {
throw e35752;

}
}})())){
} else {
throw (new Error("Assert failed: (have? (fn* [p1__35743#] (satisfies? interfaces/IServerChanAdapter p1__35743#)) web-server-adapter)"));
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var user_id_fn__$1 = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__25914__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type,uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35754){if((e35754 instanceof Error)){
var __t = e35754;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e35754;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35755){
var map__35756 = p__35755;
var map__35756__$1 = ((((!((map__35756 == null)))?((((map__35756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35756):map__35756);
var old_m = map__35756__$1;
var ws = cljs.core.get.call(null,map__35756__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__35756__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__35756__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__35758 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35758) {
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
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35759){if((e35759 instanceof Error)){
var __t = e35759;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e35759;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35760){
var map__35761 = p__35760;
var map__35761__$1 = ((((!((map__35761 == null)))?((((map__35761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35761):map__35761);
var old_m = map__35761__$1;
var ws = cljs.core.get.call(null,map__35761__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__35761__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__35761__$1,new cljs.core.Keyword(null,"any","any",1705907423));
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
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__35916__delegate = function (user_id,ev,p__35763){
var vec__35764 = p__35763;
var map__35765 = cljs.core.nth.call(null,vec__35764,(0),null);
var map__35765__$1 = ((((!((map__35765 == null)))?((((map__35765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35765):map__35765);
var opts = map__35765__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__35765__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_35917 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __35918 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init1531749806506696929.clj",324,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_35917,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_35917,ev], null);
});})(uid_35917,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var __35919__$1 = (cljs.core.truth_(uid_35917)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __35920__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_35921 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__35922 = ((function (uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type){
var temp__4425__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),((function (uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__35767 = cljs.core.get.call(null,m,uid_35917);
var ___$3 = cljs.core.nth.call(null,vec__35767,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35767,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_35921)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_35917),cljs.core.get.call(null,m,uid_35917));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4425__auto__)){
var pulled = temp__4425__auto__;
var vec__35768 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__35768,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35768,(1),null);
var __x_35923 = buffered_evs;
try{if(cljs.core.vector_QMARK_.call(null,__x_35923)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35769){if((e35769 instanceof Error)){
var __t_35924 = e35769;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",__x_35923,__t_35924,null);
} else {
throw e35769;

}
}
var __x_35925 = ev_uuids;
try{if(cljs.core.set_QMARK_.call(null,__x_35925)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35770){if((e35770 instanceof Error)){
var __t_35926 = e35770;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",__x_35925,__t_35926,null);
} else {
throw e35770;

}
}
var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init1531749806506696929.clj",357,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__35768,buffered_evs,ev_uuids,pulled,temp__4425__auto__,uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__35768,buffered_evs,ev_uuids,pulled,temp__4425__auto__,uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var G__35771 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35771) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_35917,buffered_evs_ppstr);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_35917,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
} else {
return null;
}
});})(uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init1531749806506696929.clj",367,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,flush_buffer_BANG__35922,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_35917], null);
});})(uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,flush_buffer_BANG__35922,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

if(cljs.core.truth_(flush_QMARK_)){
var seq__35772_35928 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__35773_35929 = null;
var count__35774_35930 = (0);
var i__35775_35931 = (0);
while(true){
if((i__35775_35931 < count__35774_35930)){
var type_35932 = cljs.core._nth.call(null,chunk__35773_35929,i__35775_35931);
flush_buffer_BANG__35922.call(null,type_35932);

var G__35933 = seq__35772_35928;
var G__35934 = chunk__35773_35929;
var G__35935 = count__35774_35930;
var G__35936 = (i__35775_35931 + (1));
seq__35772_35928 = G__35933;
chunk__35773_35929 = G__35934;
count__35774_35930 = G__35935;
i__35775_35931 = G__35936;
continue;
} else {
var temp__4425__auto___35937 = cljs.core.seq.call(null,seq__35772_35928);
if(temp__4425__auto___35937){
var seq__35772_35938__$1 = temp__4425__auto___35937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35772_35938__$1)){
var c__26725__auto___35939 = cljs.core.chunk_first.call(null,seq__35772_35938__$1);
var G__35940 = cljs.core.chunk_rest.call(null,seq__35772_35938__$1);
var G__35941 = c__26725__auto___35939;
var G__35942 = cljs.core.count.call(null,c__26725__auto___35939);
var G__35943 = (0);
seq__35772_35928 = G__35940;
chunk__35773_35929 = G__35941;
count__35774_35930 = G__35942;
i__35775_35931 = G__35943;
continue;
} else {
var type_35944 = cljs.core.first.call(null,seq__35772_35938__$1);
flush_buffer_BANG__35922.call(null,type_35944);

var G__35945 = cljs.core.next.call(null,seq__35772_35938__$1);
var G__35946 = null;
var G__35947 = (0);
var G__35948 = (0);
seq__35772_35928 = G__35945;
chunk__35773_35929 = G__35946;
count__35774_35930 = G__35947;
i__35775_35931 = G__35948;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__35776_35949 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_35917], null))));
var chunk__35777_35950 = null;
var count__35778_35951 = (0);
var i__35779_35952 = (0);
while(true){
if((i__35779_35952 < count__35778_35951)){
var server_ch_35953 = cljs.core._nth.call(null,chunk__35777_35950,i__35779_35952);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35953);

var G__35954 = seq__35776_35949;
var G__35955 = chunk__35777_35950;
var G__35956 = count__35778_35951;
var G__35957 = (i__35779_35952 + (1));
seq__35776_35949 = G__35954;
chunk__35777_35950 = G__35955;
count__35778_35951 = G__35956;
i__35779_35952 = G__35957;
continue;
} else {
var temp__4425__auto___35958 = cljs.core.seq.call(null,seq__35776_35949);
if(temp__4425__auto___35958){
var seq__35776_35959__$1 = temp__4425__auto___35958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35776_35959__$1)){
var c__26725__auto___35960 = cljs.core.chunk_first.call(null,seq__35776_35959__$1);
var G__35961 = cljs.core.chunk_rest.call(null,seq__35776_35959__$1);
var G__35962 = c__26725__auto___35960;
var G__35963 = cljs.core.count.call(null,c__26725__auto___35960);
var G__35964 = (0);
seq__35776_35949 = G__35961;
chunk__35777_35950 = G__35962;
count__35778_35951 = G__35963;
i__35779_35952 = G__35964;
continue;
} else {
var server_ch_35965 = cljs.core.first.call(null,seq__35776_35959__$1);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35965);

var G__35966 = cljs.core.next.call(null,seq__35776_35959__$1);
var G__35967 = null;
var G__35968 = (0);
var G__35969 = (0);
seq__35776_35949 = G__35966;
chunk__35777_35950 = G__35967;
count__35778_35951 = G__35968;
i__35779_35952 = G__35969;
continue;
}
} else {
}
}
break;
}

var seq__35780_35970 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_35917], null))));
var chunk__35781_35971 = null;
var count__35782_35972 = (0);
var i__35783_35973 = (0);
while(true){
if((i__35783_35973 < count__35782_35972)){
var vec__35784_35974 = cljs.core._nth.call(null,chunk__35781_35971,i__35783_35973);
var _QMARK_server_ch_35975 = cljs.core.nth.call(null,vec__35784_35974,(0),null);
var __35976__$3 = cljs.core.nth.call(null,vec__35784_35974,(1),null);
var temp__4425__auto___35977 = _QMARK_server_ch_35975;
if(cljs.core.truth_(temp__4425__auto___35977)){
var server_ch_35978 = temp__4425__auto___35977;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35978);
} else {
}

var G__35979 = seq__35780_35970;
var G__35980 = chunk__35781_35971;
var G__35981 = count__35782_35972;
var G__35982 = (i__35783_35973 + (1));
seq__35780_35970 = G__35979;
chunk__35781_35971 = G__35980;
count__35782_35972 = G__35981;
i__35783_35973 = G__35982;
continue;
} else {
var temp__4425__auto___35983 = cljs.core.seq.call(null,seq__35780_35970);
if(temp__4425__auto___35983){
var seq__35780_35984__$1 = temp__4425__auto___35983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35780_35984__$1)){
var c__26725__auto___35985 = cljs.core.chunk_first.call(null,seq__35780_35984__$1);
var G__35986 = cljs.core.chunk_rest.call(null,seq__35780_35984__$1);
var G__35987 = c__26725__auto___35985;
var G__35988 = cljs.core.count.call(null,c__26725__auto___35985);
var G__35989 = (0);
seq__35780_35970 = G__35986;
chunk__35781_35971 = G__35987;
count__35782_35972 = G__35988;
i__35783_35973 = G__35989;
continue;
} else {
var vec__35785_35990 = cljs.core.first.call(null,seq__35780_35984__$1);
var _QMARK_server_ch_35991 = cljs.core.nth.call(null,vec__35785_35990,(0),null);
var __35992__$3 = cljs.core.nth.call(null,vec__35785_35990,(1),null);
var temp__4425__auto___35993__$1 = _QMARK_server_ch_35991;
if(cljs.core.truth_(temp__4425__auto___35993__$1)){
var server_ch_35994 = temp__4425__auto___35993__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35994);
} else {
}

var G__35995 = cljs.core.next.call(null,seq__35780_35984__$1);
var G__35996 = null;
var G__35997 = (0);
var G__35998 = (0);
seq__35780_35970 = G__35995;
chunk__35781_35971 = G__35996;
count__35782_35972 = G__35997;
i__35783_35973 = G__35998;
continue;
}
} else {
}
}
break;
}
} else {
var seq__35786_35999 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__35787_36000 = null;
var count__35788_36001 = (0);
var i__35789_36002 = (0);
while(true){
if((i__35789_36002 < count__35788_36001)){
var type_36003 = cljs.core._nth.call(null,chunk__35787_36000,i__35789_36002);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_36003,uid_35917], null),((function (seq__35786_35999,chunk__35787_36000,count__35788_36001,i__35789_36002,type_36003,uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,flush_buffer_BANG__35922,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_35921], true)], null);
} else {
var vec__35790 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__35790,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35790,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_35921)], null);
}
});})(seq__35786_35999,chunk__35787_36000,count__35788_36001,i__35789_36002,type_36003,uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,flush_buffer_BANG__35922,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__36004 = seq__35786_35999;
var G__36005 = chunk__35787_36000;
var G__36006 = count__35788_36001;
var G__36007 = (i__35789_36002 + (1));
seq__35786_35999 = G__36004;
chunk__35787_36000 = G__36005;
count__35788_36001 = G__36006;
i__35789_36002 = G__36007;
continue;
} else {
var temp__4425__auto___36008 = cljs.core.seq.call(null,seq__35786_35999);
if(temp__4425__auto___36008){
var seq__35786_36009__$1 = temp__4425__auto___36008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35786_36009__$1)){
var c__26725__auto___36010 = cljs.core.chunk_first.call(null,seq__35786_36009__$1);
var G__36011 = cljs.core.chunk_rest.call(null,seq__35786_36009__$1);
var G__36012 = c__26725__auto___36010;
var G__36013 = cljs.core.count.call(null,c__26725__auto___36010);
var G__36014 = (0);
seq__35786_35999 = G__36011;
chunk__35787_36000 = G__36012;
count__35788_36001 = G__36013;
i__35789_36002 = G__36014;
continue;
} else {
var type_36015 = cljs.core.first.call(null,seq__35786_36009__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_36015,uid_35917], null),((function (seq__35786_35999,chunk__35787_36000,count__35788_36001,i__35789_36002,type_36015,seq__35786_36009__$1,temp__4425__auto___36008,uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,flush_buffer_BANG__35922,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_35921], true)], null);
} else {
var vec__35791 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__35791,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35791,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_35921)], null);
}
});})(seq__35786_35999,chunk__35787_36000,count__35788_36001,i__35789_36002,type_36015,seq__35786_36009__$1,temp__4425__auto___36008,uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,flush_buffer_BANG__35922,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__36016 = cljs.core.next.call(null,seq__35786_36009__$1);
var G__36017 = null;
var G__36018 = (0);
var G__36019 = (0);
seq__35786_35999 = G__36016;
chunk__35787_36000 = G__36017;
count__35788_36001 = G__36018;
i__35789_36002 = G__36019;
continue;
}
} else {
}
}
break;
}

var c__30045__auto___36020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto___36020,uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,flush_buffer_BANG__35922,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto___36020,uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,flush_buffer_BANG__35922,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35801){
var state_val_35802 = (state_35801[(1)]);
if((state_val_35802 === (1))){
var state_35801__$1 = state_35801;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_35803_36021 = state_35801__$1;
(statearr_35803_36021[(1)] = (2));

} else {
var statearr_35804_36022 = state_35801__$1;
(statearr_35804_36022[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (2))){
var state_35801__$1 = state_35801;
var statearr_35805_36023 = state_35801__$1;
(statearr_35805_36023[(2)] = null);

(statearr_35805_36023[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (3))){
var inst_35794 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var state_35801__$1 = state_35801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35801__$1,(5),inst_35794);
} else {
if((state_val_35802 === (4))){
var inst_35798 = (state_35801[(2)]);
var inst_35799 = flush_buffer_BANG__35922.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_35801__$1 = (function (){var statearr_35806 = state_35801;
(statearr_35806[(7)] = inst_35798);

return statearr_35806;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35801__$1,inst_35799);
} else {
if((state_val_35802 === (5))){
var inst_35796 = (state_35801[(2)]);
var state_35801__$1 = state_35801;
var statearr_35807_36024 = state_35801__$1;
(statearr_35807_36024[(2)] = inst_35796);

(statearr_35807_36024[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__30045__auto___36020,uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,flush_buffer_BANG__35922,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29933__auto__,c__30045__auto___36020,uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,flush_buffer_BANG__35922,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29934__auto__ = null;
var taoensso$sente$state_machine__29934__auto____0 = (function (){
var statearr_35811 = [null,null,null,null,null,null,null,null];
(statearr_35811[(0)] = taoensso$sente$state_machine__29934__auto__);

(statearr_35811[(1)] = (1));

return statearr_35811;
});
var taoensso$sente$state_machine__29934__auto____1 = (function (state_35801){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_35801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e35812){if((e35812 instanceof Object)){
var ex__29937__auto__ = e35812;
var statearr_35813_36025 = state_35801;
(statearr_35813_36025[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36026 = state_35801;
state_35801 = G__36026;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
taoensso$sente$state_machine__29934__auto__ = function(state_35801){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29934__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29934__auto____1.call(this,state_35801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29934__auto____0;
taoensso$sente$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29934__auto____1;
return taoensso$sente$state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto___36020,uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,flush_buffer_BANG__35922,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__30047__auto__ = (function (){var statearr_35814 = f__30046__auto__.call(null);
(statearr_35814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___36020);

return statearr_35814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto___36020,uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,flush_buffer_BANG__35922,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__30045__auto___36027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto___36027,uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,flush_buffer_BANG__35922,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto___36027,uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,flush_buffer_BANG__35922,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35824){
var state_val_35825 = (state_35824[(1)]);
if((state_val_35825 === (1))){
var state_35824__$1 = state_35824;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_35826_36028 = state_35824__$1;
(statearr_35826_36028[(1)] = (2));

} else {
var statearr_35827_36029 = state_35824__$1;
(statearr_35827_36029[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (2))){
var state_35824__$1 = state_35824;
var statearr_35828_36030 = state_35824__$1;
(statearr_35828_36030[(2)] = null);

(statearr_35828_36030[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (3))){
var inst_35817 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var state_35824__$1 = state_35824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35824__$1,(5),inst_35817);
} else {
if((state_val_35825 === (4))){
var inst_35821 = (state_35824[(2)]);
var inst_35822 = flush_buffer_BANG__35922.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_35824__$1 = (function (){var statearr_35829 = state_35824;
(statearr_35829[(7)] = inst_35821);

return statearr_35829;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35824__$1,inst_35822);
} else {
if((state_val_35825 === (5))){
var inst_35819 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
var statearr_35830_36031 = state_35824__$1;
(statearr_35830_36031[(2)] = inst_35819);

(statearr_35830_36031[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__30045__auto___36027,uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,flush_buffer_BANG__35922,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29933__auto__,c__30045__auto___36027,uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,flush_buffer_BANG__35922,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29934__auto__ = null;
var taoensso$sente$state_machine__29934__auto____0 = (function (){
var statearr_35834 = [null,null,null,null,null,null,null,null];
(statearr_35834[(0)] = taoensso$sente$state_machine__29934__auto__);

(statearr_35834[(1)] = (1));

return statearr_35834;
});
var taoensso$sente$state_machine__29934__auto____1 = (function (state_35824){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_35824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e35835){if((e35835 instanceof Object)){
var ex__29937__auto__ = e35835;
var statearr_35836_36032 = state_35824;
(statearr_35836_36032[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36033 = state_35824;
state_35824 = G__36033;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
taoensso$sente$state_machine__29934__auto__ = function(state_35824){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29934__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29934__auto____1.call(this,state_35824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29934__auto____0;
taoensso$sente$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29934__auto____1;
return taoensso$sente$state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto___36027,uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,flush_buffer_BANG__35922,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__30047__auto__ = (function (){var statearr_35837 = f__30046__auto__.call(null);
(statearr_35837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___36027);

return statearr_35837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto___36027,uid_35917,__35918,__35919__$1,__35920__$2,ev_uuid_35921,flush_buffer_BANG__35922,vec__35764,map__35765,map__35765__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}

return null;
};
var G__35916 = function (user_id,ev,var_args){
var p__35763 = null;
if (arguments.length > 2) {
var G__36034__i = 0, G__36034__a = new Array(arguments.length -  2);
while (G__36034__i < G__36034__a.length) {G__36034__a[G__36034__i] = arguments[G__36034__i + 2]; ++G__36034__i;}
  p__35763 = new cljs.core.IndexedSeq(G__36034__a,0);
} 
return G__35916__delegate.call(this,user_id,ev,p__35763);};
G__35916.cljs$lang$maxFixedArity = 2;
G__35916.cljs$lang$applyTo = (function (arglist__36035){
var user_id = cljs.core.first(arglist__36035);
arglist__36035 = cljs.core.next(arglist__36035);
var ev = cljs.core.first(arglist__36035);
var p__35763 = cljs.core.rest(arglist__36035);
return G__35916__delegate(user_id,ev,p__35763);
});
G__35916.cljs$core$IFn$_invoke$arity$variadic = G__35916__delegate;
return G__35916;
})()
;})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__35838 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__35838,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__35838,(1),null);
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?((function (params,ppstr,client_id,vec__35838,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init1531749806506696929.clj",435,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__35838,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): %s",resp_clj], null);
});})(params,ppstr,client_id,vec__35838,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
});})(params,ppstr,client_id,vec__35838,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
return null;
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init1531749806506696929.clj",442,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__35838,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): dummy-cb-200"], null);
});})(params,ppstr,client_id,vec__35838,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337)),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var csrf_token = csrf_token_fn.call(null,ring_req);
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var websocket_QMARK_ = new cljs.core.Keyword(null,"websocket?","websocket?",1552493139).cljs$core$IFn$_invoke$arity$1(ring_req);
var receive_event_msg_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__36036__delegate = function (event,p__35839){
var vec__35840 = p__35839;
var _QMARK_reply_fn = cljs.core.nth.call(null,vec__35840,(0),null);
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
};
var G__36036 = function (event,var_args){
var p__35839 = null;
if (arguments.length > 1) {
var G__36037__i = 0, G__36037__a = new Array(arguments.length -  1);
while (G__36037__i < G__36037__a.length) {G__36037__a[G__36037__i] = arguments[G__36037__i + 1]; ++G__36037__i;}
  p__35839 = new cljs.core.IndexedSeq(G__36037__a,0);
} 
return G__36036__delegate.call(this,event,p__35839);};
G__36036.cljs$lang$maxFixedArity = 1;
G__36036.cljs$lang$applyTo = (function (arglist__36038){
var event = cljs.core.first(arglist__36038);
var p__35839 = cljs.core.rest(arglist__36038);
return G__36036__delegate(event,p__35839);
});
G__36036.cljs$core$IFn$_invoke$arity$variadic = G__36036__delegate;
return G__36036;
})()
;})(csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var handshake_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init1531749806506696929.clj",467,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handshake!"], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = ((!((_QMARK_handshake_data == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev),cljs.core.not.call(null,websocket_QMARK_));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init1531749806506696929.clj",479,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init1531749806506696929.clj",487,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,[cljs.core.str(server_ch)].join('')], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

taoensso.encore.reset_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id], null),server_ch);

if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954)], null));
} else {
}

return handshake_BANG_.call(null,server_ch);
} else {
var initial_conn_from_client_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_ch,taoensso.encore.now_udt.call(null)], null),(_QMARK_v == null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
var handshake_QMARK_ = (function (){var or__25914__auto__ = initial_conn_from_client_QMARK_;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
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
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,req_ppstr){
var vec__35841 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__35841,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__35841,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__35841,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init1531749806506696929.clj",514,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__35841,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__35841,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__35841,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,status){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
if(cljs.core.empty_QMARK_.call(null,new_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return new_m;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var c__30045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35855){
var state_val_35856 = (state_35855[(1)]);
if((state_val_35856 === (1))){
var inst_35842 = cljs.core.async.timeout.call(null,(5000));
var state_35855__$1 = state_35855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35855__$1,(2),inst_35842);
} else {
if((state_val_35856 === (2))){
var inst_35844 = (state_35855[(2)]);
var inst_35845 = upd_connected_uid_BANG_.call(null,uid);
var state_35855__$1 = (function (){var statearr_35857 = state_35855;
(statearr_35857[(7)] = inst_35844);

return statearr_35857;
})();
if(cljs.core.truth_(inst_35845)){
var statearr_35858_36039 = state_35855__$1;
(statearr_35858_36039[(1)] = (3));

} else {
var statearr_35859_36040 = state_35855__$1;
(statearr_35859_36040[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35856 === (3))){
var inst_35847 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35848 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_35849 = (new cljs.core.PersistentVector(null,1,(5),inst_35847,inst_35848,null));
var inst_35850 = receive_event_msg_BANG_.call(null,inst_35849);
var state_35855__$1 = state_35855;
var statearr_35860_36041 = state_35855__$1;
(statearr_35860_36041[(2)] = inst_35850);

(statearr_35860_36041[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35856 === (4))){
var state_35855__$1 = state_35855;
var statearr_35861_36042 = state_35855__$1;
(statearr_35861_36042[(2)] = null);

(statearr_35861_36042[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35856 === (5))){
var inst_35853 = (state_35855[(2)]);
var state_35855__$1 = state_35855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35855__$1,inst_35853);
} else {
return null;
}
}
}
}
}
});})(c__30045__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29933__auto__,c__30045__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29934__auto__ = null;
var taoensso$sente$state_machine__29934__auto____0 = (function (){
var statearr_35865 = [null,null,null,null,null,null,null,null];
(statearr_35865[(0)] = taoensso$sente$state_machine__29934__auto__);

(statearr_35865[(1)] = (1));

return statearr_35865;
});
var taoensso$sente$state_machine__29934__auto____1 = (function (state_35855){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_35855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e35866){if((e35866 instanceof Object)){
var ex__29937__auto__ = e35866;
var statearr_35867_36043 = state_35855;
(statearr_35867_36043[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36044 = state_35855;
state_35855 = G__36044;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
taoensso$sente$state_machine__29934__auto__ = function(state_35855){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29934__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29934__auto____1.call(this,state_35855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29934__auto____0;
taoensso$sente$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29934__auto____1;
return taoensso$sente$state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__30047__auto__ = (function (){var statearr_35868 = f__30046__auto__.call(null);
(statearr_35868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto__);

return statearr_35868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__30045__auto__;
} else {
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,new cljs.core.Keyword(null,"ajax","ajax",814345549),client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35869){
var vec__35870 = p__35869;
var server_ch__$1 = cljs.core.nth.call(null,vec__35870,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__35870,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var udt_disconnected = taoensso.encore.now_udt.call(null);
var c__30045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35893){
var state_val_35894 = (state_35893[(1)]);
if((state_val_35894 === (1))){
var inst_35871 = cljs.core.async.timeout.call(null,(5000));
var state_35893__$1 = state_35893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35893__$1,(2),inst_35871);
} else {
if((state_val_35894 === (2))){
var inst_35873 = (state_35893[(2)]);
var inst_35874 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35875 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_35876 = (new cljs.core.PersistentVector(null,2,(5),inst_35874,inst_35875,null));
var inst_35877 = (function (){return ((function (inst_35873,inst_35874,inst_35875,inst_35876,state_val_35894,c__30045__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var vec__35895 = cljs.core.get.call(null,_QMARK_m,client_id);
var _ = cljs.core.nth.call(null,vec__35895,(0),null);
var _QMARK_udt_last_connected = cljs.core.nth.call(null,vec__35895,(1),null);
var disconnected_QMARK_ = (function (){var and__25902__auto__ = _QMARK_udt_last_connected;
if(cljs.core.truth_(and__25902__auto__)){
return (udt_disconnected >= _QMARK_udt_last_connected);
} else {
return and__25902__auto__;
}
})();
if(cljs.core.not.call(null,disconnected_QMARK_)){
return taoensso.encore.swapped.call(null,_QMARK_m,cljs.core.not.call(null,new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)));
} else {
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
return taoensso.encore.swapped.call(null,((cljs.core.empty_QMARK_.call(null,new_m))?new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782):new_m),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586));
}
});
;})(inst_35873,inst_35874,inst_35875,inst_35876,state_val_35894,c__30045__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_35878 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_35876,inst_35877);
var state_35893__$1 = (function (){var statearr_35896 = state_35893;
(statearr_35896[(7)] = inst_35873);

return statearr_35896;
})();
if(cljs.core.truth_(inst_35878)){
var statearr_35897_36045 = state_35893__$1;
(statearr_35897_36045[(1)] = (3));

} else {
var statearr_35898_36046 = state_35893__$1;
(statearr_35898_36046[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (3))){
var inst_35880 = upd_connected_uid_BANG_.call(null,uid);
var state_35893__$1 = state_35893;
if(cljs.core.truth_(inst_35880)){
var statearr_35899_36047 = state_35893__$1;
(statearr_35899_36047[(1)] = (6));

} else {
var statearr_35900_36048 = state_35893__$1;
(statearr_35900_36048[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (4))){
var state_35893__$1 = state_35893;
var statearr_35901_36049 = state_35893__$1;
(statearr_35901_36049[(2)] = null);

(statearr_35901_36049[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (5))){
var inst_35891 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35893__$1,inst_35891);
} else {
if((state_val_35894 === (6))){
var inst_35882 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35883 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_35884 = (new cljs.core.PersistentVector(null,1,(5),inst_35882,inst_35883,null));
var inst_35885 = receive_event_msg_BANG_.call(null,inst_35884);
var state_35893__$1 = state_35893;
var statearr_35902_36050 = state_35893__$1;
(statearr_35902_36050[(2)] = inst_35885);

(statearr_35902_36050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (7))){
var state_35893__$1 = state_35893;
var statearr_35903_36051 = state_35893__$1;
(statearr_35903_36051[(2)] = null);

(statearr_35903_36051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (8))){
var inst_35888 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
var statearr_35904_36052 = state_35893__$1;
(statearr_35904_36052[(2)] = inst_35888);

(statearr_35904_36052[(1)] = (5));


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
});})(c__30045__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29933__auto__,c__30045__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29934__auto__ = null;
var taoensso$sente$state_machine__29934__auto____0 = (function (){
var statearr_35908 = [null,null,null,null,null,null,null,null];
(statearr_35908[(0)] = taoensso$sente$state_machine__29934__auto__);

(statearr_35908[(1)] = (1));

return statearr_35908;
});
var taoensso$sente$state_machine__29934__auto____1 = (function (state_35893){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_35893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e35909){if((e35909 instanceof Object)){
var ex__29937__auto__ = e35909;
var statearr_35910_36053 = state_35893;
(statearr_35910_36053[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36054 = state_35893;
state_35893 = G__36054;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
taoensso$sente$state_machine__29934__auto__ = function(state_35893){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29934__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29934__auto____1.call(this,state_35893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29934__auto____0;
taoensso$sente$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29934__auto____1;
return taoensso$sente$state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__30047__auto__ = (function (){var statearr_35911 = f__30046__auto__.call(null);
(statearr_35911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto__);

return statearr_35911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__30045__auto__;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35747,map__35748,map__35748__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq35744){
var G__35745 = cljs.core.first.call(null,seq35744);
var seq35744__$1 = cljs.core.next.call(null,seq35744);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35745,seq35744__$1);
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init1531749806506696929.clj",576,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null);

var seq__36059 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null))));
var chunk__36060 = null;
var count__36061 = (0);
var i__36062 = (0);
while(true){
if((i__36062 < count__36061)){
var server_ch = cljs.core._nth.call(null,chunk__36060,i__36062);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__36063 = seq__36059;
var G__36064 = chunk__36060;
var G__36065 = count__36061;
var G__36066 = (i__36062 + (1));
seq__36059 = G__36063;
chunk__36060 = G__36064;
count__36061 = G__36065;
i__36062 = G__36066;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36059);
if(temp__4425__auto__){
var seq__36059__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36059__$1)){
var c__26725__auto__ = cljs.core.chunk_first.call(null,seq__36059__$1);
var G__36067 = cljs.core.chunk_rest.call(null,seq__36059__$1);
var G__36068 = c__26725__auto__;
var G__36069 = cljs.core.count.call(null,c__26725__auto__);
var G__36070 = (0);
seq__36059 = G__36067;
chunk__36060 = G__36068;
count__36061 = G__36069;
i__36062 = G__36070;
continue;
} else {
var server_ch = cljs.core.first.call(null,seq__36059__$1);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__36071 = cljs.core.next.call(null,seq__36059__$1);
var G__36072 = null;
var G__36073 = (0);
var G__36074 = (0);
seq__36059 = G__36071;
chunk__36060 = G__36072;
count__36061 = G__36073;
i__36062 = G__36074;
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
var args__26991__auto__ = [];
var len__26984__auto___36164 = arguments.length;
var i__26985__auto___36165 = (0);
while(true){
if((i__26985__auto___36165 < len__26984__auto___36164)){
args__26991__auto__.push((arguments[i__26985__auto___36165]));

var G__36166 = (i__26985__auto___36165 + (1));
i__26985__auto___36165 = G__36166;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((3) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((3)),(0),null)):null);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26992__auto__);
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conns_,uid,buffered_evs_pstr,p__36079){
var vec__36080 = p__36079;
var map__36081 = cljs.core.nth.call(null,vec__36080,(0),null);
var map__36081__$1 = ((((!((map__36081 == null)))?((((map__36081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36081):map__36081);
var nmax_attempts = cljs.core.get.call(null,map__36081__$1,new cljs.core.Keyword(null,"nmax-attempts","nmax-attempts",1471144610),(7));
var ms_base = cljs.core.get.call(null,map__36081__$1,new cljs.core.Keyword(null,"ms-base","ms-base",-1962784511),(90));
var ms_rand = cljs.core.get.call(null,map__36081__$1,new cljs.core.Keyword(null,"ms-rand","ms-rand",1169398874),(90));

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init1531749806506696929.clj",589,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36080,map__36081,map__36081__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
});})(vec__36080,map__36081,map__36081__$1,nmax_attempts,ms_base,ms_rand))
,null)),null);

var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__30045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto__,client_ids_unsatisfied,vec__36080,map__36081,map__36081__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto__,client_ids_unsatisfied,vec__36080,map__36081,map__36081__$1,nmax_attempts,ms_base,ms_rand){
return (function (state_36130){
var state_val_36131 = (state_36130[(1)]);
if((state_val_36131 === (7))){
var inst_36091 = (state_36130[(7)]);
var inst_36084 = (state_36130[(8)]);
var inst_36085 = (state_36130[(9)]);
var inst_36102 = (function (){var n = inst_36084;
var client_ids_satisfied = inst_36085;
var _QMARK_pulled = inst_36091;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_36091,inst_36084,inst_36085,state_val_36131,c__30045__auto__,client_ids_unsatisfied,vec__36080,map__36081,map__36081__$1,nmax_attempts,ms_base,ms_rand){
return (function (s,client_id,p__36101){
var vec__36132 = p__36101;
var _QMARK_server_ch = cljs.core.nth.call(null,vec__36132,(0),null);
var _ = cljs.core.nth.call(null,vec__36132,(1),null);
if(((_QMARK_server_ch == null)) || (cljs.core.not.call(null,taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_server_ch,buffered_evs_pstr,new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103))))){
return s;
} else {
return cljs.core.conj.call(null,s,client_id);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_36091,inst_36084,inst_36085,state_val_36131,c__30045__auto__,client_ids_unsatisfied,vec__36080,map__36081,map__36081__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_36103 = cljs.core.PersistentHashSet.EMPTY;
var inst_36104 = cljs.core.reduce_kv.call(null,inst_36102,inst_36103,inst_36091);
var state_36130__$1 = state_36130;
var statearr_36133_36167 = state_36130__$1;
(statearr_36133_36167[(2)] = inst_36104);

(statearr_36133_36167[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (1))){
var inst_36083 = cljs.core.PersistentHashSet.EMPTY;
var inst_36084 = (0);
var inst_36085 = inst_36083;
var state_36130__$1 = (function (){var statearr_36134 = state_36130;
(statearr_36134[(8)] = inst_36084);

(statearr_36134[(9)] = inst_36085);

return statearr_36134;
})();
var statearr_36135_36168 = state_36130__$1;
(statearr_36135_36168[(2)] = null);

(statearr_36135_36168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (4))){
var state_36130__$1 = state_36130;
var statearr_36136_36169 = state_36130__$1;
(statearr_36136_36169[(2)] = true);

(statearr_36136_36169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (15))){
var inst_36126 = (state_36130[(2)]);
var state_36130__$1 = state_36130;
var statearr_36137_36170 = state_36130__$1;
(statearr_36137_36170[(2)] = inst_36126);

(statearr_36137_36170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (13))){
var inst_36117 = cljs.core.rand_int.call(null,ms_rand);
var inst_36118 = (ms_base + inst_36117);
var inst_36119 = cljs.core.async.timeout.call(null,inst_36118);
var state_36130__$1 = state_36130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36130__$1,(16),inst_36119);
} else {
if((state_val_36131 === (6))){
var inst_36091 = (state_36130[(7)]);
var inst_36099 = (state_36130[(2)]);
var state_36130__$1 = (function (){var statearr_36138 = state_36130;
(statearr_36138[(10)] = inst_36099);

return statearr_36138;
})();
if(cljs.core.truth_(inst_36091)){
var statearr_36139_36171 = state_36130__$1;
(statearr_36139_36171[(1)] = (7));

} else {
var statearr_36140_36172 = state_36130__$1;
(statearr_36140_36172[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (3))){
var inst_36128 = (state_36130[(2)]);
var state_36130__$1 = state_36130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36130__$1,inst_36128);
} else {
if((state_val_36131 === (12))){
var inst_36115 = (state_36130[(2)]);
var state_36130__$1 = state_36130;
if(cljs.core.truth_(inst_36115)){
var statearr_36141_36173 = state_36130__$1;
(statearr_36141_36173[(1)] = (13));

} else {
var statearr_36142_36174 = state_36130__$1;
(statearr_36142_36174[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (2))){
var inst_36091 = (state_36130[(7)]);
var inst_36084 = (state_36130[(8)]);
var inst_36085 = (state_36130[(9)]);
var inst_36087 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36088 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_36089 = (new cljs.core.PersistentVector(null,2,(5),inst_36087,inst_36088,null));
var inst_36090 = (function (){var n = inst_36084;
var client_ids_satisfied = inst_36085;
return ((function (n,client_ids_satisfied,inst_36091,inst_36084,inst_36085,inst_36087,inst_36088,inst_36089,state_val_36131,c__30045__auto__,client_ids_unsatisfied,vec__36080,map__36081,map__36081__$1,nmax_attempts,ms_base,ms_rand){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_36091,inst_36084,inst_36085,inst_36087,inst_36088,inst_36089,state_val_36131,c__30045__auto__,client_ids_unsatisfied,vec__36080,map__36081,map__36081__$1,nmax_attempts,ms_base,ms_rand){
return (function (m__$1,k){
var vec__36143 = cljs.core.get.call(null,m__$1,k);
var _QMARK_server_ch = cljs.core.nth.call(null,vec__36143,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__36143,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_36091,inst_36084,inst_36085,inst_36087,inst_36088,inst_36089,state_val_36131,c__30045__auto__,client_ids_unsatisfied,vec__36080,map__36081,map__36081__$1,nmax_attempts,ms_base,ms_rand))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_36091,inst_36084,inst_36085,inst_36087,inst_36088,inst_36089,state_val_36131,c__30045__auto__,client_ids_unsatisfied,vec__36080,map__36081,map__36081__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_36091__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_36089,inst_36090);
var inst_36092 = (function (){var n = inst_36084;
var client_ids_satisfied = inst_36085;
var _QMARK_pulled = inst_36091__$1;
var __x = inst_36091__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,__x,inst_36091,inst_36084,inst_36085,inst_36087,inst_36088,inst_36089,inst_36090,inst_36091__$1,state_val_36131,c__30045__auto__,client_ids_unsatisfied,vec__36080,map__36081,map__36081__$1,nmax_attempts,ms_base,ms_rand){
return (function (__x__$1){
var or__25914__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,__x__$1);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,__x,inst_36091,inst_36084,inst_36085,inst_36087,inst_36088,inst_36089,inst_36090,inst_36091__$1,state_val_36131,c__30045__auto__,client_ids_unsatisfied,vec__36080,map__36081,map__36081__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_36093 = inst_36092.call(null,inst_36091__$1);
var state_36130__$1 = (function (){var statearr_36144 = state_36130;
(statearr_36144[(7)] = inst_36091__$1);

return statearr_36144;
})();
if(cljs.core.truth_(inst_36093)){
var statearr_36145_36175 = state_36130__$1;
(statearr_36145_36175[(1)] = (4));

} else {
var statearr_36146_36176 = state_36130__$1;
(statearr_36146_36176[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (11))){
var inst_36109 = (state_36130[(11)]);
var state_36130__$1 = state_36130;
var statearr_36147_36177 = state_36130__$1;
(statearr_36147_36177[(2)] = inst_36109);

(statearr_36147_36177[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (9))){
var inst_36109 = (state_36130[(11)]);
var inst_36084 = (state_36130[(8)]);
var inst_36085 = (state_36130[(9)]);
var inst_36107 = (state_36130[(2)]);
var inst_36108 = cljs.core.into.call(null,inst_36085,inst_36107);
var inst_36109__$1 = (inst_36084 < nmax_attempts);
var state_36130__$1 = (function (){var statearr_36148 = state_36130;
(statearr_36148[(11)] = inst_36109__$1);

(statearr_36148[(12)] = inst_36108);

return statearr_36148;
})();
if(cljs.core.truth_(inst_36109__$1)){
var statearr_36149_36178 = state_36130__$1;
(statearr_36149_36178[(1)] = (10));

} else {
var statearr_36150_36179 = state_36130__$1;
(statearr_36150_36179[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (5))){
var inst_36091 = (state_36130[(7)]);
var inst_36096 = "([:or nil? map?] ?pulled)";
var inst_36097 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,inst_36096,inst_36091,null,null);
var state_36130__$1 = state_36130;
var statearr_36151_36180 = state_36130__$1;
(statearr_36151_36180[(2)] = inst_36097);

(statearr_36151_36180[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (14))){
var state_36130__$1 = state_36130;
var statearr_36152_36181 = state_36130__$1;
(statearr_36152_36181[(2)] = null);

(statearr_36152_36181[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (16))){
var inst_36084 = (state_36130[(8)]);
var inst_36108 = (state_36130[(12)]);
var inst_36121 = (state_36130[(2)]);
var inst_36122 = (inst_36084 + (1));
var inst_36084__$1 = inst_36122;
var inst_36085 = inst_36108;
var state_36130__$1 = (function (){var statearr_36153 = state_36130;
(statearr_36153[(8)] = inst_36084__$1);

(statearr_36153[(13)] = inst_36121);

(statearr_36153[(9)] = inst_36085);

return statearr_36153;
})();
var statearr_36154_36182 = state_36130__$1;
(statearr_36154_36182[(2)] = null);

(statearr_36154_36182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (10))){
var inst_36108 = (state_36130[(12)]);
var inst_36111 = cljs.core.complement.call(null,inst_36108);
var inst_36112 = cljs.core.some.call(null,inst_36111,client_ids_unsatisfied);
var state_36130__$1 = state_36130;
var statearr_36155_36183 = state_36130__$1;
(statearr_36155_36183[(2)] = inst_36112);

(statearr_36155_36183[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (8))){
var state_36130__$1 = state_36130;
var statearr_36156_36184 = state_36130__$1;
(statearr_36156_36184[(2)] = null);

(statearr_36156_36184[(1)] = (9));


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
});})(c__30045__auto__,client_ids_unsatisfied,vec__36080,map__36081,map__36081__$1,nmax_attempts,ms_base,ms_rand))
;
return ((function (switch__29933__auto__,c__30045__auto__,client_ids_unsatisfied,vec__36080,map__36081,map__36081__$1,nmax_attempts,ms_base,ms_rand){
return (function() {
var taoensso$sente$state_machine__29934__auto__ = null;
var taoensso$sente$state_machine__29934__auto____0 = (function (){
var statearr_36160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36160[(0)] = taoensso$sente$state_machine__29934__auto__);

(statearr_36160[(1)] = (1));

return statearr_36160;
});
var taoensso$sente$state_machine__29934__auto____1 = (function (state_36130){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_36130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e36161){if((e36161 instanceof Object)){
var ex__29937__auto__ = e36161;
var statearr_36162_36185 = state_36130;
(statearr_36162_36185[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36186 = state_36130;
state_36130 = G__36186;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
taoensso$sente$state_machine__29934__auto__ = function(state_36130){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29934__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29934__auto____1.call(this,state_36130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29934__auto____0;
taoensso$sente$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29934__auto____1;
return taoensso$sente$state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto__,client_ids_unsatisfied,vec__36080,map__36081,map__36081__$1,nmax_attempts,ms_base,ms_rand))
})();
var state__30047__auto__ = (function (){var statearr_36163 = f__30046__auto__.call(null);
(statearr_36163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto__);

return statearr_36163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto__,client_ids_unsatisfied,vec__36080,map__36081,map__36081__$1,nmax_attempts,ms_base,ms_rand))
);

return c__30045__auto__;
}
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$applyTo = (function (seq36075){
var G__36076 = cljs.core.first.call(null,seq36075);
var seq36075__$1 = cljs.core.next.call(null,seq36075);
var G__36077 = cljs.core.first.call(null,seq36075__$1);
var seq36075__$2 = cljs.core.next.call(null,seq36075__$1);
var G__36078 = cljs.core.first.call(null,seq36075__$2);
var seq36075__$3 = cljs.core.next.call(null,seq36075__$2);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36076,G__36077,G__36078,seq36075__$3);
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
var x__26577__auto__ = (((chsk == null))?null:chsk);
var m__26578__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__26577__auto__)]);
if(!((m__26578__auto__ == null))){
return m__26578__auto__.call(null,chsk);
} else {
var m__26578__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__26578__auto____$1 == null))){
return m__26578__auto____$1.call(null,chsk);
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
var x__26577__auto__ = (((chsk == null))?null:chsk);
var m__26578__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__26577__auto__)]);
if(!((m__26578__auto__ == null))){
return m__26578__auto__.call(null,chsk,ev,opts);
} else {
var m__26578__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__26578__auto____$1 == null))){
return m__26578__auto____$1.call(null,chsk,ev,opts);
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
var x__26577__auto__ = (((chsk == null))?null:chsk);
var m__26578__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__26577__auto__)]);
if(!((m__26578__auto__ == null))){
return m__26578__auto__.call(null,chsk);
} else {
var m__26578__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(!((m__26578__auto____$1 == null))){
return m__26578__auto____$1.call(null,chsk);
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
var x__26577__auto__ = (((chsk == null))?null:chsk);
var m__26578__auto__ = (taoensso.sente.chsk_disconnect_BANG_[goog.typeOf(x__26577__auto__)]);
if(!((m__26578__auto__ == null))){
return m__26578__auto__.call(null,chsk);
} else {
var m__26578__auto____$1 = (taoensso.sente.chsk_disconnect_BANG_["_"]);
if(!((m__26578__auto____$1 == null))){
return m__26578__auto____$1.call(null,chsk);
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
var x__26577__auto__ = (((chsk == null))?null:chsk);
var m__26578__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__26577__auto__)]);
if(!((m__26578__auto__ == null))){
return m__26578__auto__.call(null,chsk);
} else {
var m__26578__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(!((m__26578__auto____$1 == null))){
return m__26578__auto____$1.call(null,chsk);
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
var args36187 = [];
var len__26984__auto___36190 = arguments.length;
var i__26985__auto___36191 = (0);
while(true){
if((i__26985__auto___36191 < len__26984__auto___36190)){
args36187.push((arguments[i__26985__auto___36191]));

var G__36192 = (i__26985__auto___36191 + (1));
i__26985__auto___36191 = G__36192;
continue;
} else {
}
break;
}

var G__36189 = args36187.length;
switch (G__36189) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36187.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init1531749806506696929.clj",646,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__25914__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__25914__auto__){
return or__25914__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nneg-int? ?timeout-ms)))")].join('')));
}

if(cljs.core.truth_((function (){var or__25914__auto__ = (_QMARK_cb == null);
if(or__25914__auto__){
return or__25914__auto__;
} else {
var or__25914__auto____$1 = cljs.core.ifn_QMARK_.call(null,_QMARK_cb);
if(or__25914__auto____$1){
return or__25914__auto____$1;
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
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__36194,merge_state){
var map__36198 = p__36194;
var map__36198__$1 = ((((!((map__36198 == null)))?((((map__36198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36198):map__36198);
var chsk = map__36198__$1;
var chs = cljs.core.get.call(null,map__36198__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__36198__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__36200 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__36198,map__36198__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__25902__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__25902__auto__)){
var and__25902__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__25902__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__25902__auto____$1;
}
} else {
return and__25902__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__36198,map__36198__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__36200,(0),null);
var new_state = cljs.core.nth.call(null,vec__36200,(1),null);
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
var __x_36205 = _QMARK_cb;
try{if(cljs.core.truth_(taoensso.encore.chan_QMARK_.call(null,__x_36205))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36203){if((e36203 instanceof Error)){
var __t_36206 = e36203;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",__x_36205,__t_36206,null);
} else {
throw e36203;

}
}
taoensso.sente.assert_event.call(null,ev);

var vec__36204 = ev;
var ev_id = cljs.core.nth.call(null,vec__36204,(0),null);
var _ = cljs.core.nth.call(null,vec__36204,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__36204,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__36204,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init1531749806506696929.clj",703,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null);

var buffered_evs = (function (){var __x = clj;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36212){if((e36212 instanceof Error)){
var __t = e36212;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",__x,__t,null);
} else {
throw e36212;

}
}})();
var seq__36213 = cljs.core.seq.call(null,buffered_evs);
var chunk__36214 = null;
var count__36215 = (0);
var i__36216 = (0);
while(true){
if((i__36216 < count__36215)){
var ev = cljs.core._nth.call(null,chunk__36214,i__36216);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__36217 = seq__36213;
var G__36218 = chunk__36214;
var G__36219 = count__36215;
var G__36220 = (i__36216 + (1));
seq__36213 = G__36217;
chunk__36214 = G__36218;
count__36215 = G__36219;
i__36216 = G__36220;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36213);
if(temp__4425__auto__){
var seq__36213__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36213__$1)){
var c__26725__auto__ = cljs.core.chunk_first.call(null,seq__36213__$1);
var G__36221 = cljs.core.chunk_rest.call(null,seq__36213__$1);
var G__36222 = c__26725__auto__;
var G__36223 = cljs.core.count.call(null,c__26725__auto__);
var G__36224 = (0);
seq__36213 = G__36221;
chunk__36214 = G__36222;
count__36215 = G__36223;
i__36216 = G__36224;
continue;
} else {
var ev = cljs.core.first.call(null,seq__36213__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__36225 = cljs.core.next.call(null,seq__36213__$1);
var G__36226 = null;
var G__36227 = (0);
var G__36228 = (0);
seq__36213 = G__36225;
chunk__36214 = G__36226;
count__36215 = G__36227;
i__36216 = G__36228;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init1531749806506696929.clj",713,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj], null);
});})(handshake_QMARK_))
,null)),null);

if(handshake_QMARK_){
var vec__36231 = clj;
var _ = cljs.core.nth.call(null,vec__36231,(0),null);
var vec__36232 = cljs.core.nth.call(null,vec__36231,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__36232,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__36232,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__36232,(2),null);
var handshake_ev = vec__36231;
if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init1531749806506696929.clj",719,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36231,_,vec__36232,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__36231,_,vec__36232,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_))
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
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26536__auto__,k__26537__auto__){
var self__ = this;
var this__26536__auto____$1 = this;
return cljs.core._lookup.call(null,this__26536__auto____$1,k__26537__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26538__auto__,k36234,else__26539__auto__){
var self__ = this;
var this__26538__auto____$1 = this;
var G__36236 = (((k36234 instanceof cljs.core.Keyword))?k36234.fqn:null);
switch (G__36236) {
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
return cljs.core.get.call(null,self__.__extmap,k36234,else__26539__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26550__auto__,writer__26551__auto__,opts__26552__auto__){
var self__ = this;
var this__26550__auto____$1 = this;
var pr_pair__26553__auto__ = ((function (this__26550__auto____$1){
return (function (keyval__26554__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26551__auto__,cljs.core.pr_writer,""," ","",opts__26552__auto__,keyval__26554__auto__);
});})(this__26550__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26551__auto__,pr_pair__26553__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__26552__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36233){
var self__ = this;
var G__36233__$1 = this;
return (new cljs.core.RecordIter((0),G__36233__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26534__auto__){
var self__ = this;
var this__26534__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26530__auto__){
var self__ = this;
var this__26530__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26540__auto__){
var self__ = this;
var this__26540__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26531__auto__){
var self__ = this;
var this__26531__auto____$1 = this;
var h__26349__auto__ = self__.__hash;
if(!((h__26349__auto__ == null))){
return h__26349__auto__;
} else {
var h__26349__auto____$1 = cljs.core.hash_imap.call(null,this__26531__auto____$1);
self__.__hash = h__26349__auto____$1;

return h__26349__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26532__auto__,other__26533__auto__){
var self__ = this;
var this__26532__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25902__auto__ = other__26533__auto__;
if(cljs.core.truth_(and__25902__auto__)){
var and__25902__auto____$1 = (this__26532__auto____$1.constructor === other__26533__auto__.constructor);
if(and__25902__auto____$1){
return cljs.core.equiv_map.call(null,this__26532__auto____$1,other__26533__auto__);
} else {
return and__25902__auto____$1;
}
} else {
return and__25902__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26545__auto__,k__26546__auto__){
var self__ = this;
var this__26545__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__26546__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26545__auto____$1),self__.__meta),k__26546__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26546__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26543__auto__,k__26544__auto__,G__36233){
var self__ = this;
var this__26543__auto____$1 = this;
var pred__36237 = cljs.core.keyword_identical_QMARK_;
var expr__36238 = k__26544__auto__;
if(cljs.core.truth_(pred__36237.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__36238))){
return (new taoensso.sente.ChWebSocket(G__36233,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36237.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__36238))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__36233,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36237.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__36238))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__36233,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36237.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__36238))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__36233,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36237.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__36238))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__36233,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36237.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__36238))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__36233,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36237.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__36238))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__36233,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36237.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__36238))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,G__36233,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36237.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__36238))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,G__36233,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36237.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__36238))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,G__36233,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36237.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__36238))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__36233,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36237.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__36238))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__36233,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36237.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__36238))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,G__36233,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36237.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__36238))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,G__36233,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26544__auto__,G__36233),null));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26548__auto__){
var self__ = this;
var this__26548__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26535__auto__,G__36233){
var self__ = this;
var this__26535__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,G__36233,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26541__auto__,entry__26542__auto__){
var self__ = this;
var this__26541__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26542__auto__)){
return cljs.core._assoc.call(null,this__26541__auto____$1,cljs.core._nth.call(null,entry__26542__auto__,(0)),cljs.core._nth.call(null,entry__26542__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26541__auto____$1,entry__26542__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__36240){
var self__ = this;
var map__36241 = p__36240;
var map__36241__$1 = ((((!((map__36241 == null)))?((((map__36241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36241):map__36241);
var opts = map__36241__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__36241__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__36241__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__36241__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init1531749806506696929.clj",750,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__36241,map__36241__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__36241,map__36241__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4425__auto___36277 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___36277)){
var cb_uuid_36278 = temp__4425__auto___36277;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_36278], null),(function (){var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36243){if((e36243 instanceof Error)){
var __t = e36243;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e36243;

}
}})());

var temp__4425__auto___36279__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4425__auto___36279__$1)){
var timeout_ms_36280 = temp__4425__auto___36279__$1;
var c__30045__auto___36281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto___36281,timeout_ms_36280,temp__4425__auto___36279__$1,cb_uuid_36278,temp__4425__auto___36277,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36241,map__36241__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto___36281,timeout_ms_36280,temp__4425__auto___36279__$1,cb_uuid_36278,temp__4425__auto___36277,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36241,map__36241__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_36254){
var state_val_36255 = (state_36254[(1)]);
if((state_val_36255 === (1))){
var inst_36244 = cljs.core.async.timeout.call(null,timeout_ms_36280);
var state_36254__$1 = state_36254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36254__$1,(2),inst_36244);
} else {
if((state_val_36255 === (2))){
var inst_36247 = (state_36254[(7)]);
var inst_36246 = (state_36254[(2)]);
var inst_36247__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_36254__$1 = (function (){var statearr_36256 = state_36254;
(statearr_36256[(7)] = inst_36247__$1);

(statearr_36256[(8)] = inst_36246);

return statearr_36256;
})();
if(cljs.core.truth_(inst_36247__$1)){
var statearr_36257_36282 = state_36254__$1;
(statearr_36257_36282[(1)] = (3));

} else {
var statearr_36258_36283 = state_36254__$1;
(statearr_36258_36283[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36255 === (3))){
var inst_36247 = (state_36254[(7)]);
var inst_36249 = inst_36247.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_36254__$1 = state_36254;
var statearr_36259_36284 = state_36254__$1;
(statearr_36259_36284[(2)] = inst_36249);

(statearr_36259_36284[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36255 === (4))){
var state_36254__$1 = state_36254;
var statearr_36260_36285 = state_36254__$1;
(statearr_36260_36285[(2)] = null);

(statearr_36260_36285[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36255 === (5))){
var inst_36252 = (state_36254[(2)]);
var state_36254__$1 = state_36254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36254__$1,inst_36252);
} else {
return null;
}
}
}
}
}
});})(c__30045__auto___36281,timeout_ms_36280,temp__4425__auto___36279__$1,cb_uuid_36278,temp__4425__auto___36277,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36241,map__36241__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__29933__auto__,c__30045__auto___36281,timeout_ms_36280,temp__4425__auto___36279__$1,cb_uuid_36278,temp__4425__auto___36277,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36241,map__36241__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__29934__auto__ = null;
var taoensso$sente$state_machine__29934__auto____0 = (function (){
var statearr_36264 = [null,null,null,null,null,null,null,null,null];
(statearr_36264[(0)] = taoensso$sente$state_machine__29934__auto__);

(statearr_36264[(1)] = (1));

return statearr_36264;
});
var taoensso$sente$state_machine__29934__auto____1 = (function (state_36254){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_36254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e36265){if((e36265 instanceof Object)){
var ex__29937__auto__ = e36265;
var statearr_36266_36286 = state_36254;
(statearr_36266_36286[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36287 = state_36254;
state_36254 = G__36287;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
taoensso$sente$state_machine__29934__auto__ = function(state_36254){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29934__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29934__auto____1.call(this,state_36254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29934__auto____0;
taoensso$sente$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29934__auto____1;
return taoensso$sente$state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto___36281,timeout_ms_36280,temp__4425__auto___36279__$1,cb_uuid_36278,temp__4425__auto___36277,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36241,map__36241__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__30047__auto__ = (function (){var statearr_36267 = f__30046__auto__.call(null);
(statearr_36267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___36281);

return statearr_36267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto___36281,timeout_ms_36280,temp__4425__auto___36279__$1,cb_uuid_36278,temp__4425__auto___36277,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36241,map__36241__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e36268){if((e36268 instanceof Error)){
var e = e36268;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init1531749806506696929.clj",769,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36241,map__36241__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36241,map__36241__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

var temp__4425__auto___36288 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___36288)){
var cb_uuid_36289 = temp__4425__auto___36288;
var cb_fn_STAR__36290 = (function (){var or__25914__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_36289);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36269){if((e36269 instanceof Error)){
var __t = e36269;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e36269;

}
}}
})();
cb_fn_STAR__36290.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e36268;

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

var temp__4425__auto___36291 = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4425__auto___36291)){
var s_36292 = temp__4425__auto___36291;
s_36292.close((3000),"SENTE_RECONNECT");
} else {
}

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4425__auto__ = (function (){var or__25914__auto__ = taoensso.encore.oget.call(null,window,"WebSocket");
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
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

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init1531749806506696929.clj",800,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
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
}catch (e36273){if((e36273 instanceof Error)){
var e = e36273;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init1531749806506696929.clj",811,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_fn,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);

return null;
} else {
throw e36273;

}
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__36274 = _QMARK_socket;
(G__36274["onerror"] = ((function (G__36274,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init1531749806506696929.clj",820,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__36274,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",ws_ev], null);
});})(G__36274,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
});})(G__36274,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__36274["onmessage"] = ((function (G__36274,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__36275 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__36275,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__36275,(1),null);
var or__25914__auto__ = (function (){var and__25902__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__25902__auto__)){
return cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));
} else {
return and__25902__auto__;
}
})();
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
var temp__4423__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4423__auto__)){
var cb_uuid = temp__4423__auto__;
var temp__4423__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4423__auto____$1)){
var cb_fn = temp__4423__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init1531749806506696929.clj",838,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4423__auto____$1,cb_uuid,temp__4423__auto__,or__25914__auto__,ppstr,vec__36275,clj,_QMARK_cb_uuid,G__36274,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4423__auto____$1,cb_uuid,temp__4423__auto__,or__25914__auto__,ppstr,vec__36275,clj,_QMARK_cb_uuid,G__36274,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__36274,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__36274["onopen"] = ((function (G__36274,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__36274,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__36274,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__36274,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__36274["onclose"] = ((function (G__36274,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);
});})(G__36274,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

return G__36274;
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

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__26570__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__26570__auto__,writer__26571__auto__){
return cljs.core._write.call(null,writer__26571__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__36235){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__36235),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__36235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__36235),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__36235),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__36235),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__36235),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__36235),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__36235),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__36235),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__36235),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__36235),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__36235),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__36235),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__36235),null,cljs.core.dissoc.call(null,G__36235,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)),null));
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
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26536__auto__,k__26537__auto__){
var self__ = this;
var this__26536__auto____$1 = this;
return cljs.core._lookup.call(null,this__26536__auto____$1,k__26537__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26538__auto__,k36294,else__26539__auto__){
var self__ = this;
var this__26538__auto____$1 = this;
var G__36296 = (((k36294 instanceof cljs.core.Keyword))?k36294.fqn:null);
switch (G__36296) {
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
return cljs.core.get.call(null,self__.__extmap,k36294,else__26539__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26550__auto__,writer__26551__auto__,opts__26552__auto__){
var self__ = this;
var this__26550__auto____$1 = this;
var pr_pair__26553__auto__ = ((function (this__26550__auto____$1){
return (function (keyval__26554__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26551__auto__,cljs.core.pr_writer,""," ","",opts__26552__auto__,keyval__26554__auto__);
});})(this__26550__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26551__auto__,pr_pair__26553__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__26552__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36293){
var self__ = this;
var G__36293__$1 = this;
return (new cljs.core.RecordIter((0),G__36293__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26534__auto__){
var self__ = this;
var this__26534__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26530__auto__){
var self__ = this;
var this__26530__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26540__auto__){
var self__ = this;
var this__26540__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26531__auto__){
var self__ = this;
var this__26531__auto____$1 = this;
var h__26349__auto__ = self__.__hash;
if(!((h__26349__auto__ == null))){
return h__26349__auto__;
} else {
var h__26349__auto____$1 = cljs.core.hash_imap.call(null,this__26531__auto____$1);
self__.__hash = h__26349__auto____$1;

return h__26349__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26532__auto__,other__26533__auto__){
var self__ = this;
var this__26532__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25902__auto__ = other__26533__auto__;
if(cljs.core.truth_(and__25902__auto__)){
var and__25902__auto____$1 = (this__26532__auto____$1.constructor === other__26533__auto__.constructor);
if(and__25902__auto____$1){
return cljs.core.equiv_map.call(null,this__26532__auto____$1,other__26533__auto__);
} else {
return and__25902__auto____$1;
}
} else {
return and__25902__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26545__auto__,k__26546__auto__){
var self__ = this;
var this__26545__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__26546__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26545__auto____$1),self__.__meta),k__26546__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26546__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26543__auto__,k__26544__auto__,G__36293){
var self__ = this;
var this__26543__auto____$1 = this;
var pred__36297 = cljs.core.keyword_identical_QMARK_;
var expr__36298 = k__26544__auto__;
if(cljs.core.truth_(pred__36297.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__36298))){
return (new taoensso.sente.ChAjaxSocket(G__36293,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36297.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__36298))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__36293,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36297.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__36298))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__36293,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36297.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__36298))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__36293,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36297.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__36298))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__36293,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36297.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__36298))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__36293,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36297.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__36298))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__36293,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36297.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__36298))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,G__36293,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36297.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__36298))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,G__36293,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36297.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__36298))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__36293,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36297.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__36298))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,G__36293,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26544__auto__,G__36293),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26548__auto__){
var self__ = this;
var this__26548__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26535__auto__,G__36293){
var self__ = this;
var this__26535__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,G__36293,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26541__auto__,entry__26542__auto__){
var self__ = this;
var this__26541__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26542__auto__)){
return cljs.core._assoc.call(null,this__26541__auto____$1,cljs.core._nth.call(null,entry__26542__auto__,(0)),cljs.core._nth.call(null,entry__26542__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26541__auto____$1,entry__26542__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__36300){
var self__ = this;
var map__36301 = p__36300;
var map__36301__$1 = ((((!((map__36301 == null)))?((((map__36301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36301):map__36301);
var opts = map__36301__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__36301__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__36301__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__36301__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init1531749806506696929.clj",879,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__36301,map__36301__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__36301,map__36301__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
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
})()], null)),((function (csrf_token,_QMARK_cb_fn,chsk__$1,map__36301,map__36301__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__36303){
var map__36307 = p__36303;
var map__36307__$1 = ((((!((map__36307 == null)))?((((map__36307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36307):map__36307);
var _QMARK_error = cljs.core.get.call(null,map__36307__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__36307__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
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
var vec__36309 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__36309,(0),null);
var _ = cljs.core.nth.call(null,vec__36309,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init1531749806506696929.clj",919,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__36309,resp_clj,_,map__36307,map__36307__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__36301,map__36301__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__36309,resp_clj,_,map__36307,map__36307__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__36301,map__36301__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(csrf_token,_QMARK_cb_fn,chsk__$1,map__36301,map__36301__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
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

var temp__4425__auto___36325 = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4425__auto___36325)){
var x_36326 = temp__4425__auto___36325;
x_36326.abort();
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init1531749806506696929.clj",940,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(retry_id,chsk__$1))
,null)),null);

var retry_fn = ((function (retry_id,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init1531749806506696929.clj",946,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
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
return (function taoensso$sente$poll_fn_$_ajax_cb(p__36317){
var map__36321 = p__36317;
var map__36321__$1 = ((((!((map__36321 == null)))?((((map__36321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36321):map__36321);
var _QMARK_error = cljs.core.get.call(null,map__36321__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__36321__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
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
var vec__36323 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__36323,(0),null);
var _ = cljs.core.nth.call(null,vec__36323,(1),null);
var or__25914__auto___36327 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__25914__auto___36327)){
} else {
var buffered_evs_36328 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_36328);

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

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__26570__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__26570__auto__,writer__26571__auto__){
return cljs.core._write.call(null,writer__26571__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__36295){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__36295),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__36295),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__36295),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__36295),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__36295),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__36295),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__36295),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__36295),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__36295),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__36295),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__36295),null,cljs.core.dissoc.call(null,G__36295,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)),null));
});

taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__36330 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36330) {
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
var args__26991__auto__ = [];
var len__26984__auto___36346 = arguments.length;
var i__26985__auto___36347 = (0);
while(true){
if((i__26985__auto___36347 < len__26984__auto___36346)){
args__26991__auto__.push((arguments[i__26985__auto___36347]));

var G__36348 = (i__26985__auto___36347 + (1));
i__26985__auto___36347 = G__36348;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__36335){
var vec__36336 = p__36335;
var map__36337 = cljs.core.nth.call(null,vec__36336,(0),null);
var map__36337__$1 = ((((!((map__36337 == null)))?((((map__36337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36337):map__36337);
var opts = map__36337__$1;
var ajax_opts = cljs.core.get.call(null,map__36337__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__36337__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__36337__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var client_id = cljs.core.get.call(null,map__36337__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__25914__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__36337__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__36337__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__36337__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__36337__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__36337__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__36337__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__36337__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__36336,(1),null);
if(cljs.core.truth_((function (){var __x = type;
try{if(((function (__x,vec__36336,map__36337,map__36337__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (__x__$1){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),__x__$1);
});})(__x,vec__36336,map__36337,map__36337__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36339){if((e36339 instanceof Error)){
var __t = e36339;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",__x,__t,null);
} else {
throw e36339;

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
}catch (e36340){if((e36340 instanceof Error)){
var __t = e36340;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",__x,__t,null);
} else {
throw e36340;

}
}})())){
} else {
throw (new Error("Assert failed: (have? enc/nblank-str? client-id)"));
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init1531749806506696929.clj",1055,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36336,map__36337,map__36337__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__36336,map__36337,map__36337__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init1531749806506696929.clj",1057,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36336,map__36337,map__36337__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__36336,map__36337,map__36337__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var win_location = taoensso.encore.get_window_location.call(null);
var win_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_location);
var host__$1 = (function (){var or__25914__auto__ = host;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var path__$1 = (function (){var or__25914__auto__ = path;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__36336,map__36337,map__36337__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__25914__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__25914__auto__){
return or__25914__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__36336,map__36337,map__36337__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36336,map__36337,map__36337__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36336,map__36337,map__36337__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),(function (){var _LT_server_ch = new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs);
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36336,map__36337,map__36337__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36336,map__36337,map__36337__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
} else {
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36336,map__36337,map__36337__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__36341 = ev;
var id = cljs.core.nth.call(null,vec__36341,(0),null);
var _QMARK_data = cljs.core.nth.call(null,vec__36341,(1),null);
var __x_36349 = (function (){try{return cljs.core.namespace.call(null,id);
}catch (e36342){if((e36342 instanceof Error)){
var __t = e36342;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__36332#] (not= p1__36332# \"chsk\")) (namespace id))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e36342;

}
}})();
try{if(((function (__x_36349,vec__36341,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36336,map__36337,map__36337__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (p1__36332_SHARP_){
return cljs.core.not_EQ_.call(null,p1__36332_SHARP_,"chsk");
});})(__x_36349,vec__36341,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36336,map__36337,map__36337__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x_36349)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36343){if((e36343 instanceof Error)){
var __t_36350 = e36343;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__36332#] (not= p1__36332# \"chsk\")) (namespace id))",__x_36349,__t_36350,null);
} else {
throw e36343;

}
}
return ev;
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36336,map__36337,map__36337__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
}
})()], null));
var chsk = (function (){var or__25914__auto__ = (function (){var and__25902__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__25902__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,packer__$1,private_chs,params,cljs.core.atom.call(null,(0)),backoff_ms_fn,cljs.core.atom.call(null,null),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ws","ws",86841443));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
}
})(),cljs.core.atom.call(null,"pending"),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__25902__auto__;
}
})();
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
var and__25902__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__25902__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"state_","state_",957667102)],[cljs.core.atom.call(null,null),client_id,packer__$1,private_chs,params,backoff_ms_fn,(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
}
})(),cljs.core.atom.call(null,"pending"),ajax_opts,lp_timeout_ms,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__25902__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str("chsk")].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__36336,map__36337,map__36337__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__36345 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__36345,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__36345,(1),null);
var ev__$1 = vec__36345;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__36336,map__36337,map__36337__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq36333){
var G__36334 = cljs.core.first.call(null,seq36333);
var seq36333__$1 = cljs.core.next.call(null,seq36333);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36334,seq36333__$1);
});
taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__36557 = opts;
var map__36557__$1 = ((((!((map__36557 == null)))?((((map__36557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36557):map__36557);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36557__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36557__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__30045__auto___36763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto___36763,map__36557,map__36557__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto___36763,map__36557,map__36557__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (state_36688){
var state_val_36689 = (state_36688[(1)]);
if((state_val_36689 === (7))){
var inst_36684 = (state_36688[(2)]);
var state_36688__$1 = state_36688;
var statearr_36690_36764 = state_36688__$1;
(statearr_36690_36764[(2)] = inst_36684);

(statearr_36690_36764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (20))){
var inst_36593 = (state_36688[(7)]);
var inst_36592 = (state_36688[(8)]);
var inst_36565 = (state_36688[(9)]);
var inst_36568 = (state_36688[(10)]);
var inst_36567 = (state_36688[(11)]);
var inst_36566 = (state_36688[(12)]);
var inst_36603 = (function (){var vec__36560 = inst_36565;
var v = inst_36566;
var p = inst_36567;
var stop_QMARK_ = inst_36568;
var map__36571 = inst_36592;
var event_msg = inst_36592;
var event = inst_36593;
return ((function (vec__36560,v,p,stop_QMARK_,map__36571,event_msg,event,inst_36593,inst_36592,inst_36565,inst_36568,inst_36567,inst_36566,state_val_36689,c__30045__auto___36763,map__36557,map__36557__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__36560,v,p,stop_QMARK_,map__36571,event_msg,event,inst_36593,inst_36592,inst_36565,inst_36568,inst_36567,inst_36566,state_val_36689,c__30045__auto___36763,map__36557,map__36557__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_36604 = (new cljs.core.Delay(inst_36603,null));
var inst_36605 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init1531749806506696929.clj",1176,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_36604,null);
var state_36688__$1 = state_36688;
var statearr_36691_36765 = state_36688__$1;
(statearr_36691_36765[(2)] = inst_36605);

(statearr_36691_36765[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (27))){
var inst_36592 = (state_36688[(8)]);
var inst_36610 = (state_36688[(2)]);
var inst_36611 = "(server-event-msg? event-msg)";
var inst_36612 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_36611,inst_36592,inst_36610,null);
var state_36688__$1 = state_36688;
var statearr_36692_36766 = state_36688__$1;
(statearr_36692_36766[(2)] = inst_36612);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36688__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (1))){
var state_36688__$1 = state_36688;
var statearr_36693_36767 = state_36688__$1;
(statearr_36693_36767[(2)] = null);

(statearr_36693_36767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (24))){
var state_36688__$1 = state_36688;
var statearr_36694_36768 = state_36688__$1;
(statearr_36694_36768[(2)] = null);

(statearr_36694_36768[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (39))){
var state_36688__$1 = state_36688;
var statearr_36695_36769 = state_36688__$1;
(statearr_36695_36769[(2)] = null);

(statearr_36695_36769[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (46))){
var inst_36657 = (state_36688[(13)]);
var inst_36665 = (state_36688[(2)]);
var inst_36666 = [inst_36665,null];
var inst_36667 = (new cljs.core.PersistentVector(null,2,(5),inst_36657,inst_36666,null));
var state_36688__$1 = state_36688;
var statearr_36696_36770 = state_36688__$1;
(statearr_36696_36770[(2)] = inst_36667);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36688__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (4))){
var inst_36565 = (state_36688[(9)]);
var inst_36568 = (state_36688[(10)]);
var inst_36567 = (state_36688[(11)]);
var inst_36565__$1 = (state_36688[(2)]);
var inst_36566 = cljs.core.nth.call(null,inst_36565__$1,(0),null);
var inst_36567__$1 = cljs.core.nth.call(null,inst_36565__$1,(1),null);
var inst_36568__$1 = taoensso.encore.kw_identical_QMARK_.call(null,inst_36567__$1,ch_ctrl);
var state_36688__$1 = (function (){var statearr_36697 = state_36688;
(statearr_36697[(9)] = inst_36565__$1);

(statearr_36697[(10)] = inst_36568__$1);

(statearr_36697[(11)] = inst_36567__$1);

(statearr_36697[(12)] = inst_36566);

return statearr_36697;
})();
if(cljs.core.truth_(inst_36568__$1)){
var statearr_36698_36771 = state_36688__$1;
(statearr_36698_36771[(1)] = (5));

} else {
var statearr_36699_36772 = state_36688__$1;
(statearr_36699_36772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (15))){
var inst_36566 = (state_36688[(12)]);
var state_36688__$1 = state_36688;
var statearr_36700_36773 = state_36688__$1;
(statearr_36700_36773[(2)] = inst_36566);

(statearr_36700_36773[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (48))){
var state_36688__$1 = state_36688;
var statearr_36701_36774 = state_36688__$1;
(statearr_36701_36774[(2)] = null);

(statearr_36701_36774[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (21))){
var state_36688__$1 = state_36688;
var statearr_36702_36775 = state_36688__$1;
(statearr_36702_36775[(2)] = null);

(statearr_36702_36775[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (31))){
var inst_36621 = (state_36688[(2)]);
var state_36688__$1 = state_36688;
var statearr_36703_36776 = state_36688__$1;
(statearr_36703_36776[(2)] = inst_36621);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36688__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (32))){
var inst_36638 = (state_36688[(2)]);
var state_36688__$1 = state_36688;
var statearr_36704_36777 = state_36688__$1;
(statearr_36704_36777[(2)] = inst_36638);

(statearr_36704_36777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (40))){
var inst_36681 = (state_36688[(2)]);
var state_36688__$1 = (function (){var statearr_36705 = state_36688;
(statearr_36705[(14)] = inst_36681);

return statearr_36705;
})();
var statearr_36706_36778 = state_36688__$1;
(statearr_36706_36778[(2)] = null);

(statearr_36706_36778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (33))){
var inst_36592 = (state_36688[(8)]);
var inst_36625 = (state_36688[(2)]);
var inst_36626 = "(client-event-msg? event-msg)";
var inst_36627 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_36626,inst_36592,inst_36625,null);
var state_36688__$1 = state_36688;
var statearr_36707_36779 = state_36688__$1;
(statearr_36707_36779[(2)] = inst_36627);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36688__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (13))){
var inst_36584 = (state_36688[(2)]);
var state_36688__$1 = state_36688;
var statearr_36708_36780 = state_36688__$1;
(statearr_36708_36780[(2)] = inst_36584);

(statearr_36708_36780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (22))){
var inst_36608 = (state_36688[(2)]);
var state_36688__$1 = (function (){var statearr_36709 = state_36688;
(statearr_36709[(15)] = inst_36608);

return statearr_36709;
})();
if(cljs.core.truth_(server_QMARK_)){
var statearr_36710_36781 = state_36688__$1;
(statearr_36710_36781[(1)] = (23));

} else {
var statearr_36711_36782 = state_36688__$1;
(statearr_36711_36782[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (36))){
var inst_36634 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_36688__$1 = state_36688;
var statearr_36712_36783 = state_36688__$1;
(statearr_36712_36783[(2)] = inst_36634);

(statearr_36712_36783[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (41))){
var inst_36669 = (state_36688[(16)]);
var inst_36671 = (state_36688[(17)]);
var inst_36669__$1 = (state_36688[(2)]);
var inst_36670 = cljs.core.nth.call(null,inst_36669__$1,(0),null);
var inst_36671__$1 = cljs.core.nth.call(null,inst_36669__$1,(1),null);
var state_36688__$1 = (function (){var statearr_36713 = state_36688;
(statearr_36713[(16)] = inst_36669__$1);

(statearr_36713[(17)] = inst_36671__$1);

(statearr_36713[(18)] = inst_36670);

return statearr_36713;
})();
if(cljs.core.truth_(inst_36671__$1)){
var statearr_36714_36784 = state_36688__$1;
(statearr_36714_36784[(1)] = (47));

} else {
var statearr_36715_36785 = state_36688__$1;
(statearr_36715_36785[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (43))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36688,(42),Error,null,(41));
var inst_36657 = cljs.core.PersistentVector.EMPTY_NODE;
var state_36688__$1 = (function (){var statearr_36716 = state_36688;
(statearr_36716[(13)] = inst_36657);

return statearr_36716;
})();
if(cljs.core.truth_(error_handler)){
var statearr_36717_36786 = state_36688__$1;
(statearr_36717_36786[(1)] = (44));

} else {
var statearr_36718_36787 = state_36688__$1;
(statearr_36718_36787[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (29))){
var inst_36592 = (state_36688[(8)]);
var state_36688__$1 = state_36688;
var statearr_36719_36788 = state_36688__$1;
(statearr_36719_36788[(2)] = inst_36592);

(statearr_36719_36788[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (44))){
var inst_36592 = (state_36688[(8)]);
var inst_36647 = (state_36688[(19)]);
var inst_36659 = error_handler.call(null,inst_36647,inst_36592);
var state_36688__$1 = state_36688;
var statearr_36720_36789 = state_36688__$1;
(statearr_36720_36789[(2)] = inst_36659);

(statearr_36720_36789[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (6))){
var inst_36566 = (state_36688[(12)]);
var inst_36574 = (inst_36566 == null);
var inst_36575 = cljs.core.not.call(null,inst_36574);
var state_36688__$1 = state_36688;
if(inst_36575){
var statearr_36721_36790 = state_36688__$1;
(statearr_36721_36790[(1)] = (8));

} else {
var statearr_36722_36791 = state_36688__$1;
(statearr_36722_36791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (28))){
var inst_36592 = (state_36688[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36688,(27),Error,null,(26));
var inst_36616 = taoensso.sente.server_event_msg_QMARK_.call(null,inst_36592);
var state_36688__$1 = state_36688;
if(cljs.core.truth_(inst_36616)){
var statearr_36723_36792 = state_36688__$1;
(statearr_36723_36792[(1)] = (29));

} else {
var statearr_36724_36793 = state_36688__$1;
(statearr_36724_36793[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (25))){
var inst_36601 = (state_36688[(20)]);
var inst_36640 = (state_36688[(2)]);
var inst_36641 = event_msg_handler.call(null,inst_36640);
var inst_36642 = [inst_36641,null];
var inst_36643 = (new cljs.core.PersistentVector(null,2,(5),inst_36601,inst_36642,null));
var state_36688__$1 = state_36688;
var statearr_36725_36794 = state_36688__$1;
(statearr_36725_36794[(2)] = inst_36643);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36688__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (34))){
var inst_36592 = (state_36688[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36688,(33),Error,null,(32));
var inst_36631 = taoensso.sente.client_event_msg_QMARK_.call(null,inst_36592);
var state_36688__$1 = state_36688;
if(cljs.core.truth_(inst_36631)){
var statearr_36726_36795 = state_36688__$1;
(statearr_36726_36795[(1)] = (35));

} else {
var statearr_36727_36796 = state_36688__$1;
(statearr_36727_36796[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (17))){
var inst_36645 = (state_36688[(21)]);
var inst_36647 = (state_36688[(19)]);
var inst_36645__$1 = (state_36688[(2)]);
var inst_36646 = cljs.core.nth.call(null,inst_36645__$1,(0),null);
var inst_36647__$1 = cljs.core.nth.call(null,inst_36645__$1,(1),null);
var state_36688__$1 = (function (){var statearr_36728 = state_36688;
(statearr_36728[(21)] = inst_36645__$1);

(statearr_36728[(19)] = inst_36647__$1);

(statearr_36728[(22)] = inst_36646);

return statearr_36728;
})();
if(cljs.core.truth_(inst_36647__$1)){
var statearr_36729_36797 = state_36688__$1;
(statearr_36729_36797[(1)] = (38));

} else {
var statearr_36730_36798 = state_36688__$1;
(statearr_36730_36798[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (3))){
var inst_36686 = (state_36688[(2)]);
var state_36688__$1 = state_36688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36688__$1,inst_36686);
} else {
if((state_val_36689 === (12))){
var state_36688__$1 = state_36688;
var statearr_36731_36799 = state_36688__$1;
(statearr_36731_36799[(2)] = false);

(statearr_36731_36799[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (2))){
var inst_36561 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36562 = [ch_recv,ch_ctrl];
var inst_36563 = (new cljs.core.PersistentVector(null,2,(5),inst_36561,inst_36562,null));
var state_36688__$1 = state_36688;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36688__$1,(4),inst_36563);
} else {
if((state_val_36689 === (23))){
var state_36688__$1 = state_36688;
var statearr_36732_36800 = state_36688__$1;
(statearr_36732_36800[(2)] = null);

(statearr_36732_36800[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (47))){
var inst_36669 = (state_36688[(16)]);
var inst_36645 = (state_36688[(21)]);
var inst_36593 = (state_36688[(7)]);
var inst_36671 = (state_36688[(17)]);
var inst_36592 = (state_36688[(8)]);
var inst_36565 = (state_36688[(9)]);
var inst_36647 = (state_36688[(19)]);
var inst_36568 = (state_36688[(10)]);
var inst_36670 = (state_36688[(18)]);
var inst_36567 = (state_36688[(11)]);
var inst_36566 = (state_36688[(12)]);
var inst_36673 = (function (){var map__36571 = inst_36592;
var vec__36649 = inst_36669;
var vec__36560 = inst_36565;
var p = inst_36567;
var _QMARK_error = inst_36647;
var temp__4425__auto__ = inst_36671;
var v = inst_36566;
var _ = inst_36670;
var e2 = inst_36671;
var _QMARK_error2 = inst_36671;
var event_msg = inst_36592;
var e = inst_36647;
var event = inst_36593;
var vec__36572 = inst_36645;
var stop_QMARK_ = inst_36568;
return ((function (map__36571,vec__36649,vec__36560,p,_QMARK_error,temp__4425__auto__,v,_,e2,_QMARK_error2,event_msg,e,event,vec__36572,stop_QMARK_,inst_36669,inst_36645,inst_36593,inst_36671,inst_36592,inst_36565,inst_36647,inst_36568,inst_36670,inst_36567,inst_36566,state_val_36689,c__30045__auto___36763,map__36557,map__36557__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});
;})(map__36571,vec__36649,vec__36560,p,_QMARK_error,temp__4425__auto__,v,_,e2,_QMARK_error2,event_msg,e,event,vec__36572,stop_QMARK_,inst_36669,inst_36645,inst_36593,inst_36671,inst_36592,inst_36565,inst_36647,inst_36568,inst_36670,inst_36567,inst_36566,state_val_36689,c__30045__auto___36763,map__36557,map__36557__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_36674 = (new cljs.core.Delay(inst_36673,null));
var inst_36675 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init1531749806506696929.clj",1189,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_36674,null);
var state_36688__$1 = state_36688;
var statearr_36733_36801 = state_36688__$1;
(statearr_36733_36801[(2)] = inst_36675);

(statearr_36733_36801[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (35))){
var inst_36592 = (state_36688[(8)]);
var state_36688__$1 = state_36688;
var statearr_36734_36802 = state_36688__$1;
(statearr_36734_36802[(2)] = inst_36592);

(statearr_36734_36802[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36688,(18),Error,null,(17));
var inst_36601 = cljs.core.PersistentVector.EMPTY_NODE;
var state_36688__$1 = (function (){var statearr_36735 = state_36688;
(statearr_36735[(20)] = inst_36601);

return statearr_36735;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_36736_36803 = state_36688__$1;
(statearr_36736_36803[(1)] = (20));

} else {
var statearr_36737_36804 = state_36688__$1;
(statearr_36737_36804[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (11))){
var state_36688__$1 = state_36688;
var statearr_36738_36805 = state_36688__$1;
(statearr_36738_36805[(2)] = true);

(statearr_36738_36805[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (9))){
var state_36688__$1 = state_36688;
var statearr_36739_36806 = state_36688__$1;
(statearr_36739_36806[(2)] = false);

(statearr_36739_36806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (5))){
var state_36688__$1 = state_36688;
var statearr_36740_36807 = state_36688__$1;
(statearr_36740_36807[(2)] = null);

(statearr_36740_36807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (14))){
var inst_36566 = (state_36688[(12)]);
var inst_36589 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36566);
var state_36688__$1 = state_36688;
var statearr_36741_36808 = state_36688__$1;
(statearr_36741_36808[(2)] = inst_36589);

(statearr_36741_36808[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (45))){
var inst_36645 = (state_36688[(21)]);
var inst_36593 = (state_36688[(7)]);
var inst_36592 = (state_36688[(8)]);
var inst_36565 = (state_36688[(9)]);
var inst_36647 = (state_36688[(19)]);
var inst_36646 = (state_36688[(22)]);
var inst_36568 = (state_36688[(10)]);
var inst_36567 = (state_36688[(11)]);
var inst_36566 = (state_36688[(12)]);
var inst_36661 = (function (){var map__36571 = inst_36592;
var vec__36560 = inst_36565;
var p = inst_36567;
var _QMARK_error = inst_36647;
var temp__4425__auto__ = inst_36647;
var v = inst_36566;
var temp__4423__auto__ = error_handler;
var _ = inst_36646;
var event_msg = inst_36592;
var e = inst_36647;
var event = inst_36593;
var vec__36572 = inst_36645;
var stop_QMARK_ = inst_36568;
return ((function (map__36571,vec__36560,p,_QMARK_error,temp__4425__auto__,v,temp__4423__auto__,_,event_msg,e,event,vec__36572,stop_QMARK_,inst_36645,inst_36593,inst_36592,inst_36565,inst_36647,inst_36646,inst_36568,inst_36567,inst_36566,state_val_36689,c__30045__auto___36763,map__36557,map__36557__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router `event-msg-handler` error: %s",event], null);
});
;})(map__36571,vec__36560,p,_QMARK_error,temp__4425__auto__,v,temp__4423__auto__,_,event_msg,e,event,vec__36572,stop_QMARK_,inst_36645,inst_36593,inst_36592,inst_36565,inst_36647,inst_36646,inst_36568,inst_36567,inst_36566,state_val_36689,c__30045__auto___36763,map__36557,map__36557__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_36662 = (new cljs.core.Delay(inst_36661,null));
var inst_36663 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init1531749806506696929.clj",1187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_36662,null);
var state_36688__$1 = state_36688;
var statearr_36742_36809 = state_36688__$1;
(statearr_36742_36809[(2)] = inst_36663);

(statearr_36742_36809[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (26))){
var inst_36623 = (state_36688[(2)]);
var state_36688__$1 = state_36688;
var statearr_36743_36810 = state_36688__$1;
(statearr_36743_36810[(2)] = inst_36623);

(statearr_36743_36810[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (16))){
var inst_36592 = (state_36688[(8)]);
var inst_36592__$1 = (state_36688[(2)]);
var inst_36593 = cljs.core.get.call(null,inst_36592__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_36688__$1 = (function (){var statearr_36744 = state_36688;
(statearr_36744[(7)] = inst_36593);

(statearr_36744[(8)] = inst_36592__$1);

return statearr_36744;
})();
var statearr_36745_36811 = state_36688__$1;
(statearr_36745_36811[(2)] = null);

(statearr_36745_36811[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (38))){
var state_36688__$1 = state_36688;
var statearr_36746_36812 = state_36688__$1;
(statearr_36746_36812[(2)] = null);

(statearr_36746_36812[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (30))){
var inst_36619 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_36688__$1 = state_36688;
var statearr_36747_36813 = state_36688__$1;
(statearr_36747_36813[(2)] = inst_36619);

(statearr_36747_36813[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (10))){
var inst_36587 = (state_36688[(2)]);
var state_36688__$1 = state_36688;
if(cljs.core.truth_(inst_36587)){
var statearr_36748_36814 = state_36688__$1;
(statearr_36748_36814[(1)] = (14));

} else {
var statearr_36749_36815 = state_36688__$1;
(statearr_36749_36815[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (18))){
var inst_36594 = (state_36688[(2)]);
var inst_36595 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36596 = [null,inst_36594];
var inst_36597 = (new cljs.core.PersistentVector(null,2,(5),inst_36595,inst_36596,null));
var state_36688__$1 = state_36688;
var statearr_36750_36816 = state_36688__$1;
(statearr_36750_36816[(2)] = inst_36597);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36688__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (42))){
var inst_36650 = (state_36688[(2)]);
var inst_36651 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36652 = [null,inst_36650];
var inst_36653 = (new cljs.core.PersistentVector(null,2,(5),inst_36651,inst_36652,null));
var state_36688__$1 = state_36688;
var statearr_36751_36817 = state_36688__$1;
(statearr_36751_36817[(2)] = inst_36653);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36688__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (37))){
var inst_36636 = (state_36688[(2)]);
var state_36688__$1 = state_36688;
var statearr_36752_36818 = state_36688__$1;
(statearr_36752_36818[(2)] = inst_36636);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36688__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (8))){
var inst_36566 = (state_36688[(12)]);
var inst_36577 = inst_36566.cljs$lang$protocol_mask$partition0$;
var inst_36578 = (inst_36577 & (64));
var inst_36579 = inst_36566.cljs$core$ISeq$;
var inst_36580 = (inst_36578) || (inst_36579);
var state_36688__$1 = state_36688;
if(cljs.core.truth_(inst_36580)){
var statearr_36753_36819 = state_36688__$1;
(statearr_36753_36819[(1)] = (11));

} else {
var statearr_36754_36820 = state_36688__$1;
(statearr_36754_36820[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36689 === (49))){
var inst_36678 = (state_36688[(2)]);
var state_36688__$1 = state_36688;
var statearr_36755_36821 = state_36688__$1;
(statearr_36755_36821[(2)] = inst_36678);

(statearr_36755_36821[(1)] = (40));


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
});})(c__30045__auto___36763,map__36557,map__36557__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
;
return ((function (switch__29933__auto__,c__30045__auto___36763,map__36557,map__36557__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29934__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29934__auto____0 = (function (){
var statearr_36759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36759[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29934__auto__);

(statearr_36759[(1)] = (1));

return statearr_36759;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29934__auto____1 = (function (state_36688){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_36688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e36760){if((e36760 instanceof Object)){
var ex__29937__auto__ = e36760;
var statearr_36761_36822 = state_36688;
(statearr_36761_36822[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36823 = state_36688;
state_36688 = G__36823;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29934__auto__ = function(state_36688){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29934__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29934__auto____1.call(this,state_36688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29934__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29934__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto___36763,map__36557,map__36557__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var state__30047__auto__ = (function (){var statearr_36762 = f__30046__auto__.call(null);
(statearr_36762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___36763);

return statearr_36762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto___36763,map__36557,map__36557__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
);


return ((function (map__36557,map__36557__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__36557,map__36557__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
});
/**
 * Creates a go-loop to call `(event-msg-handler <server-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__26991__auto__ = [];
var len__26984__auto___36831 = arguments.length;
var i__26985__auto___36832 = (0);
while(true){
if((i__26985__auto___36832 < len__26984__auto___36831)){
args__26991__auto__.push((arguments[i__26985__auto___36832]));

var G__36833 = (i__26985__auto___36832 + (1));
i__26985__auto___36832 = G__36833;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((2) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26992__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__36827){
var vec__36828 = p__36827;
var map__36829 = cljs.core.nth.call(null,vec__36828,(0),null);
var map__36829__$1 = ((((!((map__36829 == null)))?((((map__36829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36829):map__36829);
var opts = map__36829__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36829__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36829__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq36824){
var G__36825 = cljs.core.first.call(null,seq36824);
var seq36824__$1 = cljs.core.next.call(null,seq36824);
var G__36826 = cljs.core.first.call(null,seq36824__$1);
var seq36824__$2 = cljs.core.next.call(null,seq36824__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36825,G__36826,seq36824__$2);
});
/**
 * Creates a go-loop to call `(event-msg-handler <client-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__26991__auto__ = [];
var len__26984__auto___36841 = arguments.length;
var i__26985__auto___36842 = (0);
while(true){
if((i__26985__auto___36842 < len__26984__auto___36841)){
args__26991__auto__.push((arguments[i__26985__auto___36842]));

var G__36843 = (i__26985__auto___36842 + (1));
i__26985__auto___36842 = G__36843;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((2) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26992__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__36837){
var vec__36838 = p__36837;
var map__36839 = cljs.core.nth.call(null,vec__36838,(0),null);
var map__36839__$1 = ((((!((map__36839 == null)))?((((map__36839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36839):map__36839);
var opts = map__36839__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36839__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36839__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq36834){
var G__36835 = cljs.core.first.call(null,seq36834);
var seq36834__$1 = cljs.core.next.call(null,seq36834);
var G__36836 = cljs.core.first.call(null,seq36834__$1);
var seq36834__$2 = cljs.core.next.call(null,seq36834__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36835,G__36836,seq36834__$2);
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__36844,websocket_QMARK_){
var map__36847 = p__36844;
var map__36847__$1 = ((((!((map__36847 == null)))?((((map__36847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36847):map__36847);
var location = map__36847__$1;
var adjusted_protocol = cljs.core.get.call(null,map__36847__$1,new cljs.core.Keyword(null,"adjusted-protocol","adjusted-protocol",37431492));
var host = cljs.core.get.call(null,map__36847__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__36847__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str(adjusted_protocol),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__25914__auto__ = path;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map