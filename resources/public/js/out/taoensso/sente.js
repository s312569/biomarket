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
var vec__35626 = x;
var ev_id = cljs.core.nth.call(null,vec__35626,(0),null);
var _ = cljs.core.nth.call(null,vec__35626,(1),null);
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
var err_fmt = [cljs.core.str((function (){var G__35628 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__35628) {
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
var and__25828__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__25828__auto__){
var and__25828__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__25828__auto____$1)){
var map__35632 = x;
var map__35632__$1 = ((((!((map__35632 == null)))?((((map__35632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35632):map__35632);
var ch_recv = cljs.core.get.call(null,map__35632__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__35632__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__35632__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__35632__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__25828__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__25828__auto____$2)){
var and__25828__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__25828__auto____$3){
var and__25828__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(cljs.core.truth_(and__25828__auto____$4)){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__25828__auto____$4;
}
} else {
return and__25828__auto____$3;
}
} else {
return and__25828__auto____$2;
}
} else {
return and__25828__auto____$1;
}
} else {
return and__25828__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__25828__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__25828__auto__){
var and__25828__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__25828__auto____$1)){
var map__35636 = x;
var map__35636__$1 = ((((!((map__35636 == null)))?((((map__35636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35636):map__35636);
var ch_recv = cljs.core.get.call(null,map__35636__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__35636__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__35636__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__35636__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__35636__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__35636__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__35636__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__25828__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__25828__auto____$2)){
var and__25828__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__25828__auto____$3){
var and__25828__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(cljs.core.truth_(and__25828__auto____$4)){
var and__25828__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__25828__auto____$5){
var and__25828__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(cljs.core.truth_(and__25828__auto____$6)){
var and__25828__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__25828__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__25828__auto____$7;
}
} else {
return and__25828__auto____$6;
}
} else {
return and__25828__auto____$5;
}
} else {
return and__25828__auto____$4;
}
} else {
return and__25828__auto____$3;
}
} else {
return and__25828__auto____$2;
}
} else {
return and__25828__auto____$1;
}
} else {
return and__25828__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__35638){
var map__35642 = p__35638;
var map__35642__$1 = ((((!((map__35642 == null)))?((((map__35642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35642):map__35642);
var ev_msg = map__35642__$1;
var event = cljs.core.get.call(null,map__35642__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__35642__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__35644 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__35644,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__35644,(1),null);
var valid_event = vec__35644;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init3552582470095488953.clj",159,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__35644,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__35642,map__35642__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__35644,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__35642,map__35642__$1,ev_msg,event,_QMARK_reply_fn))
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
}catch (e35648){if((e35648 instanceof Error)){
var __t = e35648;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? pstr)",__x,__t,null);
} else {
throw e35648;

}
}})());
}catch (e35647){var t = e35647;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init3552582470095488953.clj",175,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t){
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
var args35649 = [];
var len__26910__auto___35652 = arguments.length;
var i__26911__auto___35653 = (0);
while(true){
if((i__26911__auto___35653 < len__26910__auto___35652)){
args35649.push((arguments[i__26911__auto___35653]));

var G__35654 = (i__26911__auto___35653 + (1));
i__26911__auto___35653 = G__35654;
continue;
} else {
}
break;
}

var G__35651 = args35649.length;
switch (G__35651) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35649.length)].join('')));

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
var args__26917__auto__ = [];
var len__26910__auto___35657 = arguments.length;
var i__26911__auto___35658 = (0);
while(true){
if((i__26911__auto___35658 < len__26910__auto___35657)){
args__26917__auto__.push((arguments[i__26911__auto___35658]));

var G__35659 = (i__26911__auto___35658 + (1));
i__26911__auto___35658 = G__35659;
continue;
} else {
}
break;
}

var argseq__26918__auto__ = ((((0) < args__26917__auto__.length))?(new cljs.core.IndexedSeq(args__26917__auto__.slice((0)),(0),null)):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__26918__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3552582470095488953.clj",193,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing: %s -> %s",args,pstr], null);
});})(pstr))
,null)),null);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq35656){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35656));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
var __x_35666 = prefixed_pstr;
try{if(typeof __x_35666 === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35663){if((e35663 instanceof Error)){
var __t_35667 = e35663;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",__x_35666,__t_35667,null);
} else {
throw e35663;

}
}
var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__35665 = prefix;
switch (G__35665) {
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
var vec__35664 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__35664,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__35664,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3552582470095488953.clj",205,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (prefix,pstr,clj,wrapped_QMARK_,vec__35664,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(prefix,pstr,clj,wrapped_QMARK_,vec__35664,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
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
var args__26917__auto__ = [];
var len__26910__auto___35838 = arguments.length;
var i__26911__auto___35839 = (0);
while(true){
if((i__26911__auto___35839 < len__26910__auto___35838)){
args__26917__auto__.push((arguments[i__26911__auto___35839]));

var G__35840 = (i__26911__auto___35839 + (1));
i__26911__auto___35839 = G__35840;
continue;
} else {
}
break;
}

var argseq__26918__auto__ = ((((1) < args__26917__auto__.length))?(new cljs.core.IndexedSeq(args__26917__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26918__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_adapter,p__35672){
var vec__35673 = p__35672;
var map__35674 = cljs.core.nth.call(null,vec__35673,(0),null);
var map__35674__$1 = ((((!((map__35674 == null)))?((((map__35674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35674):map__35674);
var recv_buf_or_n = cljs.core.get.call(null,map__35674__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__35674__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__35674__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__35674__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__35674__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__25840__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
var or__25840__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__25840__auto____$1)){
return or__25840__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__35674__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__35674__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var __x = send_buf_ms_ajax;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35676){if((e35676 instanceof Error)){
var __t = e35676;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",__x,__t,null);
} else {
throw e35676;

}
}})(),(function (){var __x = send_buf_ms_ws;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35677){if((e35677 instanceof Error)){
var __t = e35677;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",__x,__t,null);
} else {
throw e35677;

}
}})()], null))){
} else {
throw (new Error("Assert failed: (have? enc/pos-int? send-buf-ms-ajax send-buf-ms-ws)"));
}

if(cljs.core.truth_((function (){var __x = web_server_adapter;
try{if(((function (__x,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__35669_SHARP_){
if(!((p1__35669_SHARP_ == null))){
if((false) || (p1__35669_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__35669_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__35669_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__35669_SHARP_);
}
});})(__x,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35678){if((e35678 instanceof Error)){
var __t = e35678;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__35669#] (satisfies? interfaces/IServerChanAdapter p1__35669#)) web-server-adapter)",__x,__t,null);
} else {
throw e35678;

}
}})())){
} else {
throw (new Error("Assert failed: (have? (fn* [p1__35669#] (satisfies? interfaces/IServerChanAdapter p1__35669#)) web-server-adapter)"));
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var user_id_fn__$1 = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__25840__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type,uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35680){if((e35680 instanceof Error)){
var __t = e35680;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e35680;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35681){
var map__35682 = p__35681;
var map__35682__$1 = ((((!((map__35682 == null)))?((((map__35682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35682):map__35682);
var old_m = map__35682__$1;
var ws = cljs.core.get.call(null,map__35682__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__35682__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__35682__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__35684 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35684) {
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
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35685){if((e35685 instanceof Error)){
var __t = e35685;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e35685;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35686){
var map__35687 = p__35686;
var map__35687__$1 = ((((!((map__35687 == null)))?((((map__35687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35687):map__35687);
var old_m = map__35687__$1;
var ws = cljs.core.get.call(null,map__35687__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__35687__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__35687__$1,new cljs.core.Keyword(null,"any","any",1705907423));
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
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__35842__delegate = function (user_id,ev,p__35689){
var vec__35690 = p__35689;
var map__35691 = cljs.core.nth.call(null,vec__35690,(0),null);
var map__35691__$1 = ((((!((map__35691 == null)))?((((map__35691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35691):map__35691);
var opts = map__35691__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__35691__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_35843 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __35844 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3552582470095488953.clj",324,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_35843,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_35843,ev], null);
});})(uid_35843,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var __35845__$1 = (cljs.core.truth_(uid_35843)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __35846__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_35847 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__35848 = ((function (uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type){
var temp__4425__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),((function (uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__35693 = cljs.core.get.call(null,m,uid_35843);
var ___$3 = cljs.core.nth.call(null,vec__35693,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35693,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_35847)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_35843),cljs.core.get.call(null,m,uid_35843));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4425__auto__)){
var pulled = temp__4425__auto__;
var vec__35694 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__35694,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35694,(1),null);
var __x_35849 = buffered_evs;
try{if(cljs.core.vector_QMARK_.call(null,__x_35849)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35695){if((e35695 instanceof Error)){
var __t_35850 = e35695;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",__x_35849,__t_35850,null);
} else {
throw e35695;

}
}
var __x_35851 = ev_uuids;
try{if(cljs.core.set_QMARK_.call(null,__x_35851)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35696){if((e35696 instanceof Error)){
var __t_35852 = e35696;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",__x_35851,__t_35852,null);
} else {
throw e35696;

}
}
var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3552582470095488953.clj",357,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__35694,buffered_evs,ev_uuids,pulled,temp__4425__auto__,uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__35694,buffered_evs,ev_uuids,pulled,temp__4425__auto__,uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var G__35697 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35697) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_35843,buffered_evs_ppstr);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_35843,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
} else {
return null;
}
});})(uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init3552582470095488953.clj",367,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,flush_buffer_BANG__35848,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_35843], null);
});})(uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,flush_buffer_BANG__35848,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

if(cljs.core.truth_(flush_QMARK_)){
var seq__35698_35854 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__35699_35855 = null;
var count__35700_35856 = (0);
var i__35701_35857 = (0);
while(true){
if((i__35701_35857 < count__35700_35856)){
var type_35858 = cljs.core._nth.call(null,chunk__35699_35855,i__35701_35857);
flush_buffer_BANG__35848.call(null,type_35858);

var G__35859 = seq__35698_35854;
var G__35860 = chunk__35699_35855;
var G__35861 = count__35700_35856;
var G__35862 = (i__35701_35857 + (1));
seq__35698_35854 = G__35859;
chunk__35699_35855 = G__35860;
count__35700_35856 = G__35861;
i__35701_35857 = G__35862;
continue;
} else {
var temp__4425__auto___35863 = cljs.core.seq.call(null,seq__35698_35854);
if(temp__4425__auto___35863){
var seq__35698_35864__$1 = temp__4425__auto___35863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35698_35864__$1)){
var c__26651__auto___35865 = cljs.core.chunk_first.call(null,seq__35698_35864__$1);
var G__35866 = cljs.core.chunk_rest.call(null,seq__35698_35864__$1);
var G__35867 = c__26651__auto___35865;
var G__35868 = cljs.core.count.call(null,c__26651__auto___35865);
var G__35869 = (0);
seq__35698_35854 = G__35866;
chunk__35699_35855 = G__35867;
count__35700_35856 = G__35868;
i__35701_35857 = G__35869;
continue;
} else {
var type_35870 = cljs.core.first.call(null,seq__35698_35864__$1);
flush_buffer_BANG__35848.call(null,type_35870);

var G__35871 = cljs.core.next.call(null,seq__35698_35864__$1);
var G__35872 = null;
var G__35873 = (0);
var G__35874 = (0);
seq__35698_35854 = G__35871;
chunk__35699_35855 = G__35872;
count__35700_35856 = G__35873;
i__35701_35857 = G__35874;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__35702_35875 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_35843], null))));
var chunk__35703_35876 = null;
var count__35704_35877 = (0);
var i__35705_35878 = (0);
while(true){
if((i__35705_35878 < count__35704_35877)){
var server_ch_35879 = cljs.core._nth.call(null,chunk__35703_35876,i__35705_35878);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35879);

var G__35880 = seq__35702_35875;
var G__35881 = chunk__35703_35876;
var G__35882 = count__35704_35877;
var G__35883 = (i__35705_35878 + (1));
seq__35702_35875 = G__35880;
chunk__35703_35876 = G__35881;
count__35704_35877 = G__35882;
i__35705_35878 = G__35883;
continue;
} else {
var temp__4425__auto___35884 = cljs.core.seq.call(null,seq__35702_35875);
if(temp__4425__auto___35884){
var seq__35702_35885__$1 = temp__4425__auto___35884;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35702_35885__$1)){
var c__26651__auto___35886 = cljs.core.chunk_first.call(null,seq__35702_35885__$1);
var G__35887 = cljs.core.chunk_rest.call(null,seq__35702_35885__$1);
var G__35888 = c__26651__auto___35886;
var G__35889 = cljs.core.count.call(null,c__26651__auto___35886);
var G__35890 = (0);
seq__35702_35875 = G__35887;
chunk__35703_35876 = G__35888;
count__35704_35877 = G__35889;
i__35705_35878 = G__35890;
continue;
} else {
var server_ch_35891 = cljs.core.first.call(null,seq__35702_35885__$1);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35891);

var G__35892 = cljs.core.next.call(null,seq__35702_35885__$1);
var G__35893 = null;
var G__35894 = (0);
var G__35895 = (0);
seq__35702_35875 = G__35892;
chunk__35703_35876 = G__35893;
count__35704_35877 = G__35894;
i__35705_35878 = G__35895;
continue;
}
} else {
}
}
break;
}

var seq__35706_35896 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_35843], null))));
var chunk__35707_35897 = null;
var count__35708_35898 = (0);
var i__35709_35899 = (0);
while(true){
if((i__35709_35899 < count__35708_35898)){
var vec__35710_35900 = cljs.core._nth.call(null,chunk__35707_35897,i__35709_35899);
var _QMARK_server_ch_35901 = cljs.core.nth.call(null,vec__35710_35900,(0),null);
var __35902__$3 = cljs.core.nth.call(null,vec__35710_35900,(1),null);
var temp__4425__auto___35903 = _QMARK_server_ch_35901;
if(cljs.core.truth_(temp__4425__auto___35903)){
var server_ch_35904 = temp__4425__auto___35903;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35904);
} else {
}

var G__35905 = seq__35706_35896;
var G__35906 = chunk__35707_35897;
var G__35907 = count__35708_35898;
var G__35908 = (i__35709_35899 + (1));
seq__35706_35896 = G__35905;
chunk__35707_35897 = G__35906;
count__35708_35898 = G__35907;
i__35709_35899 = G__35908;
continue;
} else {
var temp__4425__auto___35909 = cljs.core.seq.call(null,seq__35706_35896);
if(temp__4425__auto___35909){
var seq__35706_35910__$1 = temp__4425__auto___35909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35706_35910__$1)){
var c__26651__auto___35911 = cljs.core.chunk_first.call(null,seq__35706_35910__$1);
var G__35912 = cljs.core.chunk_rest.call(null,seq__35706_35910__$1);
var G__35913 = c__26651__auto___35911;
var G__35914 = cljs.core.count.call(null,c__26651__auto___35911);
var G__35915 = (0);
seq__35706_35896 = G__35912;
chunk__35707_35897 = G__35913;
count__35708_35898 = G__35914;
i__35709_35899 = G__35915;
continue;
} else {
var vec__35711_35916 = cljs.core.first.call(null,seq__35706_35910__$1);
var _QMARK_server_ch_35917 = cljs.core.nth.call(null,vec__35711_35916,(0),null);
var __35918__$3 = cljs.core.nth.call(null,vec__35711_35916,(1),null);
var temp__4425__auto___35919__$1 = _QMARK_server_ch_35917;
if(cljs.core.truth_(temp__4425__auto___35919__$1)){
var server_ch_35920 = temp__4425__auto___35919__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35920);
} else {
}

var G__35921 = cljs.core.next.call(null,seq__35706_35910__$1);
var G__35922 = null;
var G__35923 = (0);
var G__35924 = (0);
seq__35706_35896 = G__35921;
chunk__35707_35897 = G__35922;
count__35708_35898 = G__35923;
i__35709_35899 = G__35924;
continue;
}
} else {
}
}
break;
}
} else {
var seq__35712_35925 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__35713_35926 = null;
var count__35714_35927 = (0);
var i__35715_35928 = (0);
while(true){
if((i__35715_35928 < count__35714_35927)){
var type_35929 = cljs.core._nth.call(null,chunk__35713_35926,i__35715_35928);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_35929,uid_35843], null),((function (seq__35712_35925,chunk__35713_35926,count__35714_35927,i__35715_35928,type_35929,uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,flush_buffer_BANG__35848,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_35847], true)], null);
} else {
var vec__35716 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__35716,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35716,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_35847)], null);
}
});})(seq__35712_35925,chunk__35713_35926,count__35714_35927,i__35715_35928,type_35929,uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,flush_buffer_BANG__35848,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__35930 = seq__35712_35925;
var G__35931 = chunk__35713_35926;
var G__35932 = count__35714_35927;
var G__35933 = (i__35715_35928 + (1));
seq__35712_35925 = G__35930;
chunk__35713_35926 = G__35931;
count__35714_35927 = G__35932;
i__35715_35928 = G__35933;
continue;
} else {
var temp__4425__auto___35934 = cljs.core.seq.call(null,seq__35712_35925);
if(temp__4425__auto___35934){
var seq__35712_35935__$1 = temp__4425__auto___35934;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35712_35935__$1)){
var c__26651__auto___35936 = cljs.core.chunk_first.call(null,seq__35712_35935__$1);
var G__35937 = cljs.core.chunk_rest.call(null,seq__35712_35935__$1);
var G__35938 = c__26651__auto___35936;
var G__35939 = cljs.core.count.call(null,c__26651__auto___35936);
var G__35940 = (0);
seq__35712_35925 = G__35937;
chunk__35713_35926 = G__35938;
count__35714_35927 = G__35939;
i__35715_35928 = G__35940;
continue;
} else {
var type_35941 = cljs.core.first.call(null,seq__35712_35935__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_35941,uid_35843], null),((function (seq__35712_35925,chunk__35713_35926,count__35714_35927,i__35715_35928,type_35941,seq__35712_35935__$1,temp__4425__auto___35934,uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,flush_buffer_BANG__35848,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_35847], true)], null);
} else {
var vec__35717 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__35717,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35717,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_35847)], null);
}
});})(seq__35712_35925,chunk__35713_35926,count__35714_35927,i__35715_35928,type_35941,seq__35712_35935__$1,temp__4425__auto___35934,uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,flush_buffer_BANG__35848,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__35942 = cljs.core.next.call(null,seq__35712_35935__$1);
var G__35943 = null;
var G__35944 = (0);
var G__35945 = (0);
seq__35712_35925 = G__35942;
chunk__35713_35926 = G__35943;
count__35714_35927 = G__35944;
i__35715_35928 = G__35945;
continue;
}
} else {
}
}
break;
}

var c__29971__auto___35946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto___35946,uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,flush_buffer_BANG__35848,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto___35946,uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,flush_buffer_BANG__35848,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35727){
var state_val_35728 = (state_35727[(1)]);
if((state_val_35728 === (1))){
var state_35727__$1 = state_35727;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_35729_35947 = state_35727__$1;
(statearr_35729_35947[(1)] = (2));

} else {
var statearr_35730_35948 = state_35727__$1;
(statearr_35730_35948[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35728 === (2))){
var state_35727__$1 = state_35727;
var statearr_35731_35949 = state_35727__$1;
(statearr_35731_35949[(2)] = null);

(statearr_35731_35949[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35728 === (3))){
var inst_35720 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var state_35727__$1 = state_35727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35727__$1,(5),inst_35720);
} else {
if((state_val_35728 === (4))){
var inst_35724 = (state_35727[(2)]);
var inst_35725 = flush_buffer_BANG__35848.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_35727__$1 = (function (){var statearr_35732 = state_35727;
(statearr_35732[(7)] = inst_35724);

return statearr_35732;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35727__$1,inst_35725);
} else {
if((state_val_35728 === (5))){
var inst_35722 = (state_35727[(2)]);
var state_35727__$1 = state_35727;
var statearr_35733_35950 = state_35727__$1;
(statearr_35733_35950[(2)] = inst_35722);

(statearr_35733_35950[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__29971__auto___35946,uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,flush_buffer_BANG__35848,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29859__auto__,c__29971__auto___35946,uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,flush_buffer_BANG__35848,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29860__auto__ = null;
var taoensso$sente$state_machine__29860__auto____0 = (function (){
var statearr_35737 = [null,null,null,null,null,null,null,null];
(statearr_35737[(0)] = taoensso$sente$state_machine__29860__auto__);

(statearr_35737[(1)] = (1));

return statearr_35737;
});
var taoensso$sente$state_machine__29860__auto____1 = (function (state_35727){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_35727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e35738){if((e35738 instanceof Object)){
var ex__29863__auto__ = e35738;
var statearr_35739_35951 = state_35727;
(statearr_35739_35951[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35952 = state_35727;
state_35727 = G__35952;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
taoensso$sente$state_machine__29860__auto__ = function(state_35727){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29860__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29860__auto____1.call(this,state_35727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29860__auto____0;
taoensso$sente$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29860__auto____1;
return taoensso$sente$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto___35946,uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,flush_buffer_BANG__35848,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29973__auto__ = (function (){var statearr_35740 = f__29972__auto__.call(null);
(statearr_35740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___35946);

return statearr_35740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto___35946,uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,flush_buffer_BANG__35848,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__29971__auto___35953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto___35953,uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,flush_buffer_BANG__35848,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto___35953,uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,flush_buffer_BANG__35848,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35750){
var state_val_35751 = (state_35750[(1)]);
if((state_val_35751 === (1))){
var state_35750__$1 = state_35750;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_35752_35954 = state_35750__$1;
(statearr_35752_35954[(1)] = (2));

} else {
var statearr_35753_35955 = state_35750__$1;
(statearr_35753_35955[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (2))){
var state_35750__$1 = state_35750;
var statearr_35754_35956 = state_35750__$1;
(statearr_35754_35956[(2)] = null);

(statearr_35754_35956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (3))){
var inst_35743 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var state_35750__$1 = state_35750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35750__$1,(5),inst_35743);
} else {
if((state_val_35751 === (4))){
var inst_35747 = (state_35750[(2)]);
var inst_35748 = flush_buffer_BANG__35848.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_35750__$1 = (function (){var statearr_35755 = state_35750;
(statearr_35755[(7)] = inst_35747);

return statearr_35755;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35750__$1,inst_35748);
} else {
if((state_val_35751 === (5))){
var inst_35745 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35756_35957 = state_35750__$1;
(statearr_35756_35957[(2)] = inst_35745);

(statearr_35756_35957[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__29971__auto___35953,uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,flush_buffer_BANG__35848,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29859__auto__,c__29971__auto___35953,uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,flush_buffer_BANG__35848,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29860__auto__ = null;
var taoensso$sente$state_machine__29860__auto____0 = (function (){
var statearr_35760 = [null,null,null,null,null,null,null,null];
(statearr_35760[(0)] = taoensso$sente$state_machine__29860__auto__);

(statearr_35760[(1)] = (1));

return statearr_35760;
});
var taoensso$sente$state_machine__29860__auto____1 = (function (state_35750){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_35750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e35761){if((e35761 instanceof Object)){
var ex__29863__auto__ = e35761;
var statearr_35762_35958 = state_35750;
(statearr_35762_35958[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35959 = state_35750;
state_35750 = G__35959;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
taoensso$sente$state_machine__29860__auto__ = function(state_35750){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29860__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29860__auto____1.call(this,state_35750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29860__auto____0;
taoensso$sente$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29860__auto____1;
return taoensso$sente$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto___35953,uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,flush_buffer_BANG__35848,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29973__auto__ = (function (){var statearr_35763 = f__29972__auto__.call(null);
(statearr_35763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___35953);

return statearr_35763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto___35953,uid_35843,__35844,__35845__$1,__35846__$2,ev_uuid_35847,flush_buffer_BANG__35848,vec__35690,map__35691,map__35691__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}

return null;
};
var G__35842 = function (user_id,ev,var_args){
var p__35689 = null;
if (arguments.length > 2) {
var G__35960__i = 0, G__35960__a = new Array(arguments.length -  2);
while (G__35960__i < G__35960__a.length) {G__35960__a[G__35960__i] = arguments[G__35960__i + 2]; ++G__35960__i;}
  p__35689 = new cljs.core.IndexedSeq(G__35960__a,0);
} 
return G__35842__delegate.call(this,user_id,ev,p__35689);};
G__35842.cljs$lang$maxFixedArity = 2;
G__35842.cljs$lang$applyTo = (function (arglist__35961){
var user_id = cljs.core.first(arglist__35961);
arglist__35961 = cljs.core.next(arglist__35961);
var ev = cljs.core.first(arglist__35961);
var p__35689 = cljs.core.rest(arglist__35961);
return G__35842__delegate(user_id,ev,p__35689);
});
G__35842.cljs$core$IFn$_invoke$arity$variadic = G__35842__delegate;
return G__35842;
})()
;})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__35764 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__35764,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__35764,(1),null);
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?((function (params,ppstr,client_id,vec__35764,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3552582470095488953.clj",435,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__35764,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): %s",resp_clj], null);
});})(params,ppstr,client_id,vec__35764,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
});})(params,ppstr,client_id,vec__35764,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
return null;
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3552582470095488953.clj",442,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__35764,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): dummy-cb-200"], null);
});})(params,ppstr,client_id,vec__35764,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337)),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var csrf_token = csrf_token_fn.call(null,ring_req);
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var websocket_QMARK_ = new cljs.core.Keyword(null,"websocket?","websocket?",1552493139).cljs$core$IFn$_invoke$arity$1(ring_req);
var receive_event_msg_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__35962__delegate = function (event,p__35765){
var vec__35766 = p__35765;
var _QMARK_reply_fn = cljs.core.nth.call(null,vec__35766,(0),null);
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
};
var G__35962 = function (event,var_args){
var p__35765 = null;
if (arguments.length > 1) {
var G__35963__i = 0, G__35963__a = new Array(arguments.length -  1);
while (G__35963__i < G__35963__a.length) {G__35963__a[G__35963__i] = arguments[G__35963__i + 1]; ++G__35963__i;}
  p__35765 = new cljs.core.IndexedSeq(G__35963__a,0);
} 
return G__35962__delegate.call(this,event,p__35765);};
G__35962.cljs$lang$maxFixedArity = 1;
G__35962.cljs$lang$applyTo = (function (arglist__35964){
var event = cljs.core.first(arglist__35964);
var p__35765 = cljs.core.rest(arglist__35964);
return G__35962__delegate(event,p__35765);
});
G__35962.cljs$core$IFn$_invoke$arity$variadic = G__35962__delegate;
return G__35962;
})()
;})(csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var handshake_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3552582470095488953.clj",467,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handshake!"], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = ((!((_QMARK_handshake_data == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev),cljs.core.not.call(null,websocket_QMARK_));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init3552582470095488953.clj",479,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3552582470095488953.clj",487,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,[cljs.core.str(server_ch)].join('')], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

taoensso.encore.reset_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id], null),server_ch);

if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954)], null));
} else {
}

return handshake_BANG_.call(null,server_ch);
} else {
var initial_conn_from_client_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_ch,taoensso.encore.now_udt.call(null)], null),(_QMARK_v == null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
var handshake_QMARK_ = (function (){var or__25840__auto__ = initial_conn_from_client_QMARK_;
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
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
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,req_ppstr){
var vec__35767 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__35767,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__35767,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__35767,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3552582470095488953.clj",514,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__35767,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__35767,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__35767,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,status){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
if(cljs.core.empty_QMARK_.call(null,new_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return new_m;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var c__29971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35781){
var state_val_35782 = (state_35781[(1)]);
if((state_val_35782 === (1))){
var inst_35768 = cljs.core.async.timeout.call(null,(5000));
var state_35781__$1 = state_35781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35781__$1,(2),inst_35768);
} else {
if((state_val_35782 === (2))){
var inst_35770 = (state_35781[(2)]);
var inst_35771 = upd_connected_uid_BANG_.call(null,uid);
var state_35781__$1 = (function (){var statearr_35783 = state_35781;
(statearr_35783[(7)] = inst_35770);

return statearr_35783;
})();
if(cljs.core.truth_(inst_35771)){
var statearr_35784_35965 = state_35781__$1;
(statearr_35784_35965[(1)] = (3));

} else {
var statearr_35785_35966 = state_35781__$1;
(statearr_35785_35966[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35782 === (3))){
var inst_35773 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35774 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_35775 = (new cljs.core.PersistentVector(null,1,(5),inst_35773,inst_35774,null));
var inst_35776 = receive_event_msg_BANG_.call(null,inst_35775);
var state_35781__$1 = state_35781;
var statearr_35786_35967 = state_35781__$1;
(statearr_35786_35967[(2)] = inst_35776);

(statearr_35786_35967[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35782 === (4))){
var state_35781__$1 = state_35781;
var statearr_35787_35968 = state_35781__$1;
(statearr_35787_35968[(2)] = null);

(statearr_35787_35968[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35782 === (5))){
var inst_35779 = (state_35781[(2)]);
var state_35781__$1 = state_35781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35781__$1,inst_35779);
} else {
return null;
}
}
}
}
}
});})(c__29971__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29859__auto__,c__29971__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29860__auto__ = null;
var taoensso$sente$state_machine__29860__auto____0 = (function (){
var statearr_35791 = [null,null,null,null,null,null,null,null];
(statearr_35791[(0)] = taoensso$sente$state_machine__29860__auto__);

(statearr_35791[(1)] = (1));

return statearr_35791;
});
var taoensso$sente$state_machine__29860__auto____1 = (function (state_35781){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_35781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e35792){if((e35792 instanceof Object)){
var ex__29863__auto__ = e35792;
var statearr_35793_35969 = state_35781;
(statearr_35793_35969[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35970 = state_35781;
state_35781 = G__35970;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
taoensso$sente$state_machine__29860__auto__ = function(state_35781){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29860__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29860__auto____1.call(this,state_35781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29860__auto____0;
taoensso$sente$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29860__auto____1;
return taoensso$sente$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29973__auto__ = (function (){var statearr_35794 = f__29972__auto__.call(null);
(statearr_35794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto__);

return statearr_35794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__29971__auto__;
} else {
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,new cljs.core.Keyword(null,"ajax","ajax",814345549),client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35795){
var vec__35796 = p__35795;
var server_ch__$1 = cljs.core.nth.call(null,vec__35796,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__35796,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var udt_disconnected = taoensso.encore.now_udt.call(null);
var c__29971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35819){
var state_val_35820 = (state_35819[(1)]);
if((state_val_35820 === (1))){
var inst_35797 = cljs.core.async.timeout.call(null,(5000));
var state_35819__$1 = state_35819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35819__$1,(2),inst_35797);
} else {
if((state_val_35820 === (2))){
var inst_35799 = (state_35819[(2)]);
var inst_35800 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35801 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_35802 = (new cljs.core.PersistentVector(null,2,(5),inst_35800,inst_35801,null));
var inst_35803 = (function (){return ((function (inst_35799,inst_35800,inst_35801,inst_35802,state_val_35820,c__29971__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var vec__35821 = cljs.core.get.call(null,_QMARK_m,client_id);
var _ = cljs.core.nth.call(null,vec__35821,(0),null);
var _QMARK_udt_last_connected = cljs.core.nth.call(null,vec__35821,(1),null);
var disconnected_QMARK_ = (function (){var and__25828__auto__ = _QMARK_udt_last_connected;
if(cljs.core.truth_(and__25828__auto__)){
return (udt_disconnected >= _QMARK_udt_last_connected);
} else {
return and__25828__auto__;
}
})();
if(cljs.core.not.call(null,disconnected_QMARK_)){
return taoensso.encore.swapped.call(null,_QMARK_m,cljs.core.not.call(null,new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)));
} else {
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
return taoensso.encore.swapped.call(null,((cljs.core.empty_QMARK_.call(null,new_m))?new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782):new_m),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586));
}
});
;})(inst_35799,inst_35800,inst_35801,inst_35802,state_val_35820,c__29971__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_35804 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_35802,inst_35803);
var state_35819__$1 = (function (){var statearr_35822 = state_35819;
(statearr_35822[(7)] = inst_35799);

return statearr_35822;
})();
if(cljs.core.truth_(inst_35804)){
var statearr_35823_35971 = state_35819__$1;
(statearr_35823_35971[(1)] = (3));

} else {
var statearr_35824_35972 = state_35819__$1;
(statearr_35824_35972[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35820 === (3))){
var inst_35806 = upd_connected_uid_BANG_.call(null,uid);
var state_35819__$1 = state_35819;
if(cljs.core.truth_(inst_35806)){
var statearr_35825_35973 = state_35819__$1;
(statearr_35825_35973[(1)] = (6));

} else {
var statearr_35826_35974 = state_35819__$1;
(statearr_35826_35974[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35820 === (4))){
var state_35819__$1 = state_35819;
var statearr_35827_35975 = state_35819__$1;
(statearr_35827_35975[(2)] = null);

(statearr_35827_35975[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35820 === (5))){
var inst_35817 = (state_35819[(2)]);
var state_35819__$1 = state_35819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35819__$1,inst_35817);
} else {
if((state_val_35820 === (6))){
var inst_35808 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35809 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_35810 = (new cljs.core.PersistentVector(null,1,(5),inst_35808,inst_35809,null));
var inst_35811 = receive_event_msg_BANG_.call(null,inst_35810);
var state_35819__$1 = state_35819;
var statearr_35828_35976 = state_35819__$1;
(statearr_35828_35976[(2)] = inst_35811);

(statearr_35828_35976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35820 === (7))){
var state_35819__$1 = state_35819;
var statearr_35829_35977 = state_35819__$1;
(statearr_35829_35977[(2)] = null);

(statearr_35829_35977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35820 === (8))){
var inst_35814 = (state_35819[(2)]);
var state_35819__$1 = state_35819;
var statearr_35830_35978 = state_35819__$1;
(statearr_35830_35978[(2)] = inst_35814);

(statearr_35830_35978[(1)] = (5));


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
});})(c__29971__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29859__auto__,c__29971__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29860__auto__ = null;
var taoensso$sente$state_machine__29860__auto____0 = (function (){
var statearr_35834 = [null,null,null,null,null,null,null,null];
(statearr_35834[(0)] = taoensso$sente$state_machine__29860__auto__);

(statearr_35834[(1)] = (1));

return statearr_35834;
});
var taoensso$sente$state_machine__29860__auto____1 = (function (state_35819){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_35819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e35835){if((e35835 instanceof Object)){
var ex__29863__auto__ = e35835;
var statearr_35836_35979 = state_35819;
(statearr_35836_35979[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35980 = state_35819;
state_35819 = G__35980;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
taoensso$sente$state_machine__29860__auto__ = function(state_35819){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29860__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29860__auto____1.call(this,state_35819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29860__auto____0;
taoensso$sente$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29860__auto____1;
return taoensso$sente$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29973__auto__ = (function (){var statearr_35837 = f__29972__auto__.call(null);
(statearr_35837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto__);

return statearr_35837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__29971__auto__;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35673,map__35674,map__35674__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq35670){
var G__35671 = cljs.core.first.call(null,seq35670);
var seq35670__$1 = cljs.core.next.call(null,seq35670);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35671,seq35670__$1);
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3552582470095488953.clj",576,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null);

var seq__35985 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null))));
var chunk__35986 = null;
var count__35987 = (0);
var i__35988 = (0);
while(true){
if((i__35988 < count__35987)){
var server_ch = cljs.core._nth.call(null,chunk__35986,i__35988);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__35989 = seq__35985;
var G__35990 = chunk__35986;
var G__35991 = count__35987;
var G__35992 = (i__35988 + (1));
seq__35985 = G__35989;
chunk__35986 = G__35990;
count__35987 = G__35991;
i__35988 = G__35992;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__35985);
if(temp__4425__auto__){
var seq__35985__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35985__$1)){
var c__26651__auto__ = cljs.core.chunk_first.call(null,seq__35985__$1);
var G__35993 = cljs.core.chunk_rest.call(null,seq__35985__$1);
var G__35994 = c__26651__auto__;
var G__35995 = cljs.core.count.call(null,c__26651__auto__);
var G__35996 = (0);
seq__35985 = G__35993;
chunk__35986 = G__35994;
count__35987 = G__35995;
i__35988 = G__35996;
continue;
} else {
var server_ch = cljs.core.first.call(null,seq__35985__$1);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__35997 = cljs.core.next.call(null,seq__35985__$1);
var G__35998 = null;
var G__35999 = (0);
var G__36000 = (0);
seq__35985 = G__35997;
chunk__35986 = G__35998;
count__35987 = G__35999;
i__35988 = G__36000;
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
var args__26917__auto__ = [];
var len__26910__auto___36090 = arguments.length;
var i__26911__auto___36091 = (0);
while(true){
if((i__26911__auto___36091 < len__26910__auto___36090)){
args__26917__auto__.push((arguments[i__26911__auto___36091]));

var G__36092 = (i__26911__auto___36091 + (1));
i__26911__auto___36091 = G__36092;
continue;
} else {
}
break;
}

var argseq__26918__auto__ = ((((3) < args__26917__auto__.length))?(new cljs.core.IndexedSeq(args__26917__auto__.slice((3)),(0),null)):null);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26918__auto__);
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conns_,uid,buffered_evs_pstr,p__36005){
var vec__36006 = p__36005;
var map__36007 = cljs.core.nth.call(null,vec__36006,(0),null);
var map__36007__$1 = ((((!((map__36007 == null)))?((((map__36007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36007):map__36007);
var nmax_attempts = cljs.core.get.call(null,map__36007__$1,new cljs.core.Keyword(null,"nmax-attempts","nmax-attempts",1471144610),(7));
var ms_base = cljs.core.get.call(null,map__36007__$1,new cljs.core.Keyword(null,"ms-base","ms-base",-1962784511),(90));
var ms_rand = cljs.core.get.call(null,map__36007__$1,new cljs.core.Keyword(null,"ms-rand","ms-rand",1169398874),(90));

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3552582470095488953.clj",589,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36006,map__36007,map__36007__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
});})(vec__36006,map__36007,map__36007__$1,nmax_attempts,ms_base,ms_rand))
,null)),null);

var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__29971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto__,client_ids_unsatisfied,vec__36006,map__36007,map__36007__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto__,client_ids_unsatisfied,vec__36006,map__36007,map__36007__$1,nmax_attempts,ms_base,ms_rand){
return (function (state_36056){
var state_val_36057 = (state_36056[(1)]);
if((state_val_36057 === (7))){
var inst_36017 = (state_36056[(7)]);
var inst_36010 = (state_36056[(8)]);
var inst_36011 = (state_36056[(9)]);
var inst_36028 = (function (){var n = inst_36010;
var client_ids_satisfied = inst_36011;
var _QMARK_pulled = inst_36017;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_36017,inst_36010,inst_36011,state_val_36057,c__29971__auto__,client_ids_unsatisfied,vec__36006,map__36007,map__36007__$1,nmax_attempts,ms_base,ms_rand){
return (function (s,client_id,p__36027){
var vec__36058 = p__36027;
var _QMARK_server_ch = cljs.core.nth.call(null,vec__36058,(0),null);
var _ = cljs.core.nth.call(null,vec__36058,(1),null);
if(((_QMARK_server_ch == null)) || (cljs.core.not.call(null,taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_server_ch,buffered_evs_pstr,new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103))))){
return s;
} else {
return cljs.core.conj.call(null,s,client_id);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_36017,inst_36010,inst_36011,state_val_36057,c__29971__auto__,client_ids_unsatisfied,vec__36006,map__36007,map__36007__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_36029 = cljs.core.PersistentHashSet.EMPTY;
var inst_36030 = cljs.core.reduce_kv.call(null,inst_36028,inst_36029,inst_36017);
var state_36056__$1 = state_36056;
var statearr_36059_36093 = state_36056__$1;
(statearr_36059_36093[(2)] = inst_36030);

(statearr_36059_36093[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (1))){
var inst_36009 = cljs.core.PersistentHashSet.EMPTY;
var inst_36010 = (0);
var inst_36011 = inst_36009;
var state_36056__$1 = (function (){var statearr_36060 = state_36056;
(statearr_36060[(8)] = inst_36010);

(statearr_36060[(9)] = inst_36011);

return statearr_36060;
})();
var statearr_36061_36094 = state_36056__$1;
(statearr_36061_36094[(2)] = null);

(statearr_36061_36094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (4))){
var state_36056__$1 = state_36056;
var statearr_36062_36095 = state_36056__$1;
(statearr_36062_36095[(2)] = true);

(statearr_36062_36095[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (15))){
var inst_36052 = (state_36056[(2)]);
var state_36056__$1 = state_36056;
var statearr_36063_36096 = state_36056__$1;
(statearr_36063_36096[(2)] = inst_36052);

(statearr_36063_36096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (13))){
var inst_36043 = cljs.core.rand_int.call(null,ms_rand);
var inst_36044 = (ms_base + inst_36043);
var inst_36045 = cljs.core.async.timeout.call(null,inst_36044);
var state_36056__$1 = state_36056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36056__$1,(16),inst_36045);
} else {
if((state_val_36057 === (6))){
var inst_36017 = (state_36056[(7)]);
var inst_36025 = (state_36056[(2)]);
var state_36056__$1 = (function (){var statearr_36064 = state_36056;
(statearr_36064[(10)] = inst_36025);

return statearr_36064;
})();
if(cljs.core.truth_(inst_36017)){
var statearr_36065_36097 = state_36056__$1;
(statearr_36065_36097[(1)] = (7));

} else {
var statearr_36066_36098 = state_36056__$1;
(statearr_36066_36098[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (3))){
var inst_36054 = (state_36056[(2)]);
var state_36056__$1 = state_36056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36056__$1,inst_36054);
} else {
if((state_val_36057 === (12))){
var inst_36041 = (state_36056[(2)]);
var state_36056__$1 = state_36056;
if(cljs.core.truth_(inst_36041)){
var statearr_36067_36099 = state_36056__$1;
(statearr_36067_36099[(1)] = (13));

} else {
var statearr_36068_36100 = state_36056__$1;
(statearr_36068_36100[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (2))){
var inst_36017 = (state_36056[(7)]);
var inst_36010 = (state_36056[(8)]);
var inst_36011 = (state_36056[(9)]);
var inst_36013 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36014 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_36015 = (new cljs.core.PersistentVector(null,2,(5),inst_36013,inst_36014,null));
var inst_36016 = (function (){var n = inst_36010;
var client_ids_satisfied = inst_36011;
return ((function (n,client_ids_satisfied,inst_36017,inst_36010,inst_36011,inst_36013,inst_36014,inst_36015,state_val_36057,c__29971__auto__,client_ids_unsatisfied,vec__36006,map__36007,map__36007__$1,nmax_attempts,ms_base,ms_rand){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_36017,inst_36010,inst_36011,inst_36013,inst_36014,inst_36015,state_val_36057,c__29971__auto__,client_ids_unsatisfied,vec__36006,map__36007,map__36007__$1,nmax_attempts,ms_base,ms_rand){
return (function (m__$1,k){
var vec__36069 = cljs.core.get.call(null,m__$1,k);
var _QMARK_server_ch = cljs.core.nth.call(null,vec__36069,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__36069,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_36017,inst_36010,inst_36011,inst_36013,inst_36014,inst_36015,state_val_36057,c__29971__auto__,client_ids_unsatisfied,vec__36006,map__36007,map__36007__$1,nmax_attempts,ms_base,ms_rand))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_36017,inst_36010,inst_36011,inst_36013,inst_36014,inst_36015,state_val_36057,c__29971__auto__,client_ids_unsatisfied,vec__36006,map__36007,map__36007__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_36017__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_36015,inst_36016);
var inst_36018 = (function (){var n = inst_36010;
var client_ids_satisfied = inst_36011;
var _QMARK_pulled = inst_36017__$1;
var __x = inst_36017__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,__x,inst_36017,inst_36010,inst_36011,inst_36013,inst_36014,inst_36015,inst_36016,inst_36017__$1,state_val_36057,c__29971__auto__,client_ids_unsatisfied,vec__36006,map__36007,map__36007__$1,nmax_attempts,ms_base,ms_rand){
return (function (__x__$1){
var or__25840__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,__x__$1);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,__x,inst_36017,inst_36010,inst_36011,inst_36013,inst_36014,inst_36015,inst_36016,inst_36017__$1,state_val_36057,c__29971__auto__,client_ids_unsatisfied,vec__36006,map__36007,map__36007__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_36019 = inst_36018.call(null,inst_36017__$1);
var state_36056__$1 = (function (){var statearr_36070 = state_36056;
(statearr_36070[(7)] = inst_36017__$1);

return statearr_36070;
})();
if(cljs.core.truth_(inst_36019)){
var statearr_36071_36101 = state_36056__$1;
(statearr_36071_36101[(1)] = (4));

} else {
var statearr_36072_36102 = state_36056__$1;
(statearr_36072_36102[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (11))){
var inst_36035 = (state_36056[(11)]);
var state_36056__$1 = state_36056;
var statearr_36073_36103 = state_36056__$1;
(statearr_36073_36103[(2)] = inst_36035);

(statearr_36073_36103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (9))){
var inst_36035 = (state_36056[(11)]);
var inst_36010 = (state_36056[(8)]);
var inst_36011 = (state_36056[(9)]);
var inst_36033 = (state_36056[(2)]);
var inst_36034 = cljs.core.into.call(null,inst_36011,inst_36033);
var inst_36035__$1 = (inst_36010 < nmax_attempts);
var state_36056__$1 = (function (){var statearr_36074 = state_36056;
(statearr_36074[(12)] = inst_36034);

(statearr_36074[(11)] = inst_36035__$1);

return statearr_36074;
})();
if(cljs.core.truth_(inst_36035__$1)){
var statearr_36075_36104 = state_36056__$1;
(statearr_36075_36104[(1)] = (10));

} else {
var statearr_36076_36105 = state_36056__$1;
(statearr_36076_36105[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (5))){
var inst_36017 = (state_36056[(7)]);
var inst_36022 = "([:or nil? map?] ?pulled)";
var inst_36023 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,inst_36022,inst_36017,null,null);
var state_36056__$1 = state_36056;
var statearr_36077_36106 = state_36056__$1;
(statearr_36077_36106[(2)] = inst_36023);

(statearr_36077_36106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (14))){
var state_36056__$1 = state_36056;
var statearr_36078_36107 = state_36056__$1;
(statearr_36078_36107[(2)] = null);

(statearr_36078_36107[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (16))){
var inst_36034 = (state_36056[(12)]);
var inst_36010 = (state_36056[(8)]);
var inst_36047 = (state_36056[(2)]);
var inst_36048 = (inst_36010 + (1));
var inst_36010__$1 = inst_36048;
var inst_36011 = inst_36034;
var state_36056__$1 = (function (){var statearr_36079 = state_36056;
(statearr_36079[(13)] = inst_36047);

(statearr_36079[(8)] = inst_36010__$1);

(statearr_36079[(9)] = inst_36011);

return statearr_36079;
})();
var statearr_36080_36108 = state_36056__$1;
(statearr_36080_36108[(2)] = null);

(statearr_36080_36108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (10))){
var inst_36034 = (state_36056[(12)]);
var inst_36037 = cljs.core.complement.call(null,inst_36034);
var inst_36038 = cljs.core.some.call(null,inst_36037,client_ids_unsatisfied);
var state_36056__$1 = state_36056;
var statearr_36081_36109 = state_36056__$1;
(statearr_36081_36109[(2)] = inst_36038);

(statearr_36081_36109[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (8))){
var state_36056__$1 = state_36056;
var statearr_36082_36110 = state_36056__$1;
(statearr_36082_36110[(2)] = null);

(statearr_36082_36110[(1)] = (9));


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
});})(c__29971__auto__,client_ids_unsatisfied,vec__36006,map__36007,map__36007__$1,nmax_attempts,ms_base,ms_rand))
;
return ((function (switch__29859__auto__,c__29971__auto__,client_ids_unsatisfied,vec__36006,map__36007,map__36007__$1,nmax_attempts,ms_base,ms_rand){
return (function() {
var taoensso$sente$state_machine__29860__auto__ = null;
var taoensso$sente$state_machine__29860__auto____0 = (function (){
var statearr_36086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36086[(0)] = taoensso$sente$state_machine__29860__auto__);

(statearr_36086[(1)] = (1));

return statearr_36086;
});
var taoensso$sente$state_machine__29860__auto____1 = (function (state_36056){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_36056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e36087){if((e36087 instanceof Object)){
var ex__29863__auto__ = e36087;
var statearr_36088_36111 = state_36056;
(statearr_36088_36111[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36112 = state_36056;
state_36056 = G__36112;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
taoensso$sente$state_machine__29860__auto__ = function(state_36056){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29860__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29860__auto____1.call(this,state_36056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29860__auto____0;
taoensso$sente$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29860__auto____1;
return taoensso$sente$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto__,client_ids_unsatisfied,vec__36006,map__36007,map__36007__$1,nmax_attempts,ms_base,ms_rand))
})();
var state__29973__auto__ = (function (){var statearr_36089 = f__29972__auto__.call(null);
(statearr_36089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto__);

return statearr_36089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto__,client_ids_unsatisfied,vec__36006,map__36007,map__36007__$1,nmax_attempts,ms_base,ms_rand))
);

return c__29971__auto__;
}
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$applyTo = (function (seq36001){
var G__36002 = cljs.core.first.call(null,seq36001);
var seq36001__$1 = cljs.core.next.call(null,seq36001);
var G__36003 = cljs.core.first.call(null,seq36001__$1);
var seq36001__$2 = cljs.core.next.call(null,seq36001__$1);
var G__36004 = cljs.core.first.call(null,seq36001__$2);
var seq36001__$3 = cljs.core.next.call(null,seq36001__$2);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36002,G__36003,G__36004,seq36001__$3);
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
var x__26503__auto__ = (((chsk == null))?null:chsk);
var m__26504__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__26503__auto__)]);
if(!((m__26504__auto__ == null))){
return m__26504__auto__.call(null,chsk);
} else {
var m__26504__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__26504__auto____$1 == null))){
return m__26504__auto____$1.call(null,chsk);
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
var x__26503__auto__ = (((chsk == null))?null:chsk);
var m__26504__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__26503__auto__)]);
if(!((m__26504__auto__ == null))){
return m__26504__auto__.call(null,chsk,ev,opts);
} else {
var m__26504__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__26504__auto____$1 == null))){
return m__26504__auto____$1.call(null,chsk,ev,opts);
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
var x__26503__auto__ = (((chsk == null))?null:chsk);
var m__26504__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__26503__auto__)]);
if(!((m__26504__auto__ == null))){
return m__26504__auto__.call(null,chsk);
} else {
var m__26504__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(!((m__26504__auto____$1 == null))){
return m__26504__auto____$1.call(null,chsk);
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
var x__26503__auto__ = (((chsk == null))?null:chsk);
var m__26504__auto__ = (taoensso.sente.chsk_disconnect_BANG_[goog.typeOf(x__26503__auto__)]);
if(!((m__26504__auto__ == null))){
return m__26504__auto__.call(null,chsk);
} else {
var m__26504__auto____$1 = (taoensso.sente.chsk_disconnect_BANG_["_"]);
if(!((m__26504__auto____$1 == null))){
return m__26504__auto____$1.call(null,chsk);
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
var x__26503__auto__ = (((chsk == null))?null:chsk);
var m__26504__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__26503__auto__)]);
if(!((m__26504__auto__ == null))){
return m__26504__auto__.call(null,chsk);
} else {
var m__26504__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(!((m__26504__auto____$1 == null))){
return m__26504__auto____$1.call(null,chsk);
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
var args36113 = [];
var len__26910__auto___36116 = arguments.length;
var i__26911__auto___36117 = (0);
while(true){
if((i__26911__auto___36117 < len__26910__auto___36116)){
args36113.push((arguments[i__26911__auto___36117]));

var G__36118 = (i__26911__auto___36117 + (1));
i__26911__auto___36117 = G__36118;
continue;
} else {
}
break;
}

var G__36115 = args36113.length;
switch (G__36115) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36113.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3552582470095488953.clj",646,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__25840__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__25840__auto__){
return or__25840__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nneg-int? ?timeout-ms)))")].join('')));
}

if(cljs.core.truth_((function (){var or__25840__auto__ = (_QMARK_cb == null);
if(or__25840__auto__){
return or__25840__auto__;
} else {
var or__25840__auto____$1 = cljs.core.ifn_QMARK_.call(null,_QMARK_cb);
if(or__25840__auto____$1){
return or__25840__auto____$1;
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
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__36120,merge_state){
var map__36124 = p__36120;
var map__36124__$1 = ((((!((map__36124 == null)))?((((map__36124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36124):map__36124);
var chsk = map__36124__$1;
var chs = cljs.core.get.call(null,map__36124__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__36124__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__36126 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__36124,map__36124__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__25828__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__25828__auto__)){
var and__25828__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__25828__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__25828__auto____$1;
}
} else {
return and__25828__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__36124,map__36124__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__36126,(0),null);
var new_state = cljs.core.nth.call(null,vec__36126,(1),null);
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
var __x_36131 = _QMARK_cb;
try{if(cljs.core.truth_(taoensso.encore.chan_QMARK_.call(null,__x_36131))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36129){if((e36129 instanceof Error)){
var __t_36132 = e36129;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",__x_36131,__t_36132,null);
} else {
throw e36129;

}
}
taoensso.sente.assert_event.call(null,ev);

var vec__36130 = ev;
var ev_id = cljs.core.nth.call(null,vec__36130,(0),null);
var _ = cljs.core.nth.call(null,vec__36130,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__36130,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__36130,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3552582470095488953.clj",703,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null);

var buffered_evs = (function (){var __x = clj;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36138){if((e36138 instanceof Error)){
var __t = e36138;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",__x,__t,null);
} else {
throw e36138;

}
}})();
var seq__36139 = cljs.core.seq.call(null,buffered_evs);
var chunk__36140 = null;
var count__36141 = (0);
var i__36142 = (0);
while(true){
if((i__36142 < count__36141)){
var ev = cljs.core._nth.call(null,chunk__36140,i__36142);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__36143 = seq__36139;
var G__36144 = chunk__36140;
var G__36145 = count__36141;
var G__36146 = (i__36142 + (1));
seq__36139 = G__36143;
chunk__36140 = G__36144;
count__36141 = G__36145;
i__36142 = G__36146;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36139);
if(temp__4425__auto__){
var seq__36139__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36139__$1)){
var c__26651__auto__ = cljs.core.chunk_first.call(null,seq__36139__$1);
var G__36147 = cljs.core.chunk_rest.call(null,seq__36139__$1);
var G__36148 = c__26651__auto__;
var G__36149 = cljs.core.count.call(null,c__26651__auto__);
var G__36150 = (0);
seq__36139 = G__36147;
chunk__36140 = G__36148;
count__36141 = G__36149;
i__36142 = G__36150;
continue;
} else {
var ev = cljs.core.first.call(null,seq__36139__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__36151 = cljs.core.next.call(null,seq__36139__$1);
var G__36152 = null;
var G__36153 = (0);
var G__36154 = (0);
seq__36139 = G__36151;
chunk__36140 = G__36152;
count__36141 = G__36153;
i__36142 = G__36154;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3552582470095488953.clj",713,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj], null);
});})(handshake_QMARK_))
,null)),null);

if(handshake_QMARK_){
var vec__36157 = clj;
var _ = cljs.core.nth.call(null,vec__36157,(0),null);
var vec__36158 = cljs.core.nth.call(null,vec__36157,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__36158,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__36158,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__36158,(2),null);
var handshake_ev = vec__36157;
if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init3552582470095488953.clj",719,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36157,_,vec__36158,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__36157,_,vec__36158,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_))
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
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26462__auto__,k__26463__auto__){
var self__ = this;
var this__26462__auto____$1 = this;
return cljs.core._lookup.call(null,this__26462__auto____$1,k__26463__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26464__auto__,k36160,else__26465__auto__){
var self__ = this;
var this__26464__auto____$1 = this;
var G__36162 = (((k36160 instanceof cljs.core.Keyword))?k36160.fqn:null);
switch (G__36162) {
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
return cljs.core.get.call(null,self__.__extmap,k36160,else__26465__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26476__auto__,writer__26477__auto__,opts__26478__auto__){
var self__ = this;
var this__26476__auto____$1 = this;
var pr_pair__26479__auto__ = ((function (this__26476__auto____$1){
return (function (keyval__26480__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26477__auto__,cljs.core.pr_writer,""," ","",opts__26478__auto__,keyval__26480__auto__);
});})(this__26476__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26477__auto__,pr_pair__26479__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__26478__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36159){
var self__ = this;
var G__36159__$1 = this;
return (new cljs.core.RecordIter((0),G__36159__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26460__auto__){
var self__ = this;
var this__26460__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26456__auto__){
var self__ = this;
var this__26456__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26466__auto__){
var self__ = this;
var this__26466__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26457__auto__){
var self__ = this;
var this__26457__auto____$1 = this;
var h__26275__auto__ = self__.__hash;
if(!((h__26275__auto__ == null))){
return h__26275__auto__;
} else {
var h__26275__auto____$1 = cljs.core.hash_imap.call(null,this__26457__auto____$1);
self__.__hash = h__26275__auto____$1;

return h__26275__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26458__auto__,other__26459__auto__){
var self__ = this;
var this__26458__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25828__auto__ = other__26459__auto__;
if(cljs.core.truth_(and__25828__auto__)){
var and__25828__auto____$1 = (this__26458__auto____$1.constructor === other__26459__auto__.constructor);
if(and__25828__auto____$1){
return cljs.core.equiv_map.call(null,this__26458__auto____$1,other__26459__auto__);
} else {
return and__25828__auto____$1;
}
} else {
return and__25828__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26471__auto__,k__26472__auto__){
var self__ = this;
var this__26471__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__26472__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26471__auto____$1),self__.__meta),k__26472__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26472__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26469__auto__,k__26470__auto__,G__36159){
var self__ = this;
var this__26469__auto____$1 = this;
var pred__36163 = cljs.core.keyword_identical_QMARK_;
var expr__36164 = k__26470__auto__;
if(cljs.core.truth_(pred__36163.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__36164))){
return (new taoensso.sente.ChWebSocket(G__36159,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36163.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__36164))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__36159,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36163.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__36164))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__36159,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36163.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__36164))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__36159,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36163.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__36164))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__36159,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36163.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__36164))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__36159,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36163.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__36164))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__36159,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36163.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__36164))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,G__36159,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36163.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__36164))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,G__36159,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36163.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__36164))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,G__36159,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36163.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__36164))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__36159,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36163.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__36164))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__36159,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36163.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__36164))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,G__36159,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36163.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__36164))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,G__36159,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26470__auto__,G__36159),null));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26474__auto__){
var self__ = this;
var this__26474__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26461__auto__,G__36159){
var self__ = this;
var this__26461__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,G__36159,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26467__auto__,entry__26468__auto__){
var self__ = this;
var this__26467__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26468__auto__)){
return cljs.core._assoc.call(null,this__26467__auto____$1,cljs.core._nth.call(null,entry__26468__auto__,(0)),cljs.core._nth.call(null,entry__26468__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26467__auto____$1,entry__26468__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__36166){
var self__ = this;
var map__36167 = p__36166;
var map__36167__$1 = ((((!((map__36167 == null)))?((((map__36167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36167):map__36167);
var opts = map__36167__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__36167__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__36167__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__36167__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init3552582470095488953.clj",750,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__36167,map__36167__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__36167,map__36167__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4425__auto___36203 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___36203)){
var cb_uuid_36204 = temp__4425__auto___36203;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_36204], null),(function (){var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36169){if((e36169 instanceof Error)){
var __t = e36169;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e36169;

}
}})());

var temp__4425__auto___36205__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4425__auto___36205__$1)){
var timeout_ms_36206 = temp__4425__auto___36205__$1;
var c__29971__auto___36207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto___36207,timeout_ms_36206,temp__4425__auto___36205__$1,cb_uuid_36204,temp__4425__auto___36203,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36167,map__36167__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto___36207,timeout_ms_36206,temp__4425__auto___36205__$1,cb_uuid_36204,temp__4425__auto___36203,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36167,map__36167__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_36180){
var state_val_36181 = (state_36180[(1)]);
if((state_val_36181 === (1))){
var inst_36170 = cljs.core.async.timeout.call(null,timeout_ms_36206);
var state_36180__$1 = state_36180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36180__$1,(2),inst_36170);
} else {
if((state_val_36181 === (2))){
var inst_36173 = (state_36180[(7)]);
var inst_36172 = (state_36180[(2)]);
var inst_36173__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_36180__$1 = (function (){var statearr_36182 = state_36180;
(statearr_36182[(7)] = inst_36173__$1);

(statearr_36182[(8)] = inst_36172);

return statearr_36182;
})();
if(cljs.core.truth_(inst_36173__$1)){
var statearr_36183_36208 = state_36180__$1;
(statearr_36183_36208[(1)] = (3));

} else {
var statearr_36184_36209 = state_36180__$1;
(statearr_36184_36209[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (3))){
var inst_36173 = (state_36180[(7)]);
var inst_36175 = inst_36173.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_36180__$1 = state_36180;
var statearr_36185_36210 = state_36180__$1;
(statearr_36185_36210[(2)] = inst_36175);

(statearr_36185_36210[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (4))){
var state_36180__$1 = state_36180;
var statearr_36186_36211 = state_36180__$1;
(statearr_36186_36211[(2)] = null);

(statearr_36186_36211[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (5))){
var inst_36178 = (state_36180[(2)]);
var state_36180__$1 = state_36180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36180__$1,inst_36178);
} else {
return null;
}
}
}
}
}
});})(c__29971__auto___36207,timeout_ms_36206,temp__4425__auto___36205__$1,cb_uuid_36204,temp__4425__auto___36203,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36167,map__36167__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__29859__auto__,c__29971__auto___36207,timeout_ms_36206,temp__4425__auto___36205__$1,cb_uuid_36204,temp__4425__auto___36203,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36167,map__36167__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__29860__auto__ = null;
var taoensso$sente$state_machine__29860__auto____0 = (function (){
var statearr_36190 = [null,null,null,null,null,null,null,null,null];
(statearr_36190[(0)] = taoensso$sente$state_machine__29860__auto__);

(statearr_36190[(1)] = (1));

return statearr_36190;
});
var taoensso$sente$state_machine__29860__auto____1 = (function (state_36180){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_36180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e36191){if((e36191 instanceof Object)){
var ex__29863__auto__ = e36191;
var statearr_36192_36212 = state_36180;
(statearr_36192_36212[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36213 = state_36180;
state_36180 = G__36213;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
taoensso$sente$state_machine__29860__auto__ = function(state_36180){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29860__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29860__auto____1.call(this,state_36180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29860__auto____0;
taoensso$sente$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29860__auto____1;
return taoensso$sente$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto___36207,timeout_ms_36206,temp__4425__auto___36205__$1,cb_uuid_36204,temp__4425__auto___36203,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36167,map__36167__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__29973__auto__ = (function (){var statearr_36193 = f__29972__auto__.call(null);
(statearr_36193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___36207);

return statearr_36193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto___36207,timeout_ms_36206,temp__4425__auto___36205__$1,cb_uuid_36204,temp__4425__auto___36203,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36167,map__36167__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e36194){if((e36194 instanceof Error)){
var e = e36194;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init3552582470095488953.clj",769,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36167,map__36167__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36167,map__36167__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

var temp__4425__auto___36214 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___36214)){
var cb_uuid_36215 = temp__4425__auto___36214;
var cb_fn_STAR__36216 = (function (){var or__25840__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_36215);
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36195){if((e36195 instanceof Error)){
var __t = e36195;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e36195;

}
}}
})();
cb_fn_STAR__36216.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e36194;

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

var temp__4425__auto___36217 = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4425__auto___36217)){
var s_36218 = temp__4425__auto___36217;
s_36218.close((3000),"SENTE_RECONNECT");
} else {
}

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4425__auto__ = (function (){var or__25840__auto__ = taoensso.encore.oget.call(null,window,"WebSocket");
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
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

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init3552582470095488953.clj",800,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
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
}catch (e36199){if((e36199 instanceof Error)){
var e = e36199;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init3552582470095488953.clj",811,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_fn,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);

return null;
} else {
throw e36199;

}
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__36200 = _QMARK_socket;
(G__36200["onerror"] = ((function (G__36200,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init3552582470095488953.clj",820,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__36200,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",ws_ev], null);
});})(G__36200,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
});})(G__36200,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__36200["onmessage"] = ((function (G__36200,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__36201 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__36201,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__36201,(1),null);
var or__25840__auto__ = (function (){var and__25828__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__25828__auto__)){
return cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));
} else {
return and__25828__auto__;
}
})();
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
var temp__4423__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4423__auto__)){
var cb_uuid = temp__4423__auto__;
var temp__4423__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4423__auto____$1)){
var cb_fn = temp__4423__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init3552582470095488953.clj",838,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4423__auto____$1,cb_uuid,temp__4423__auto__,or__25840__auto__,ppstr,vec__36201,clj,_QMARK_cb_uuid,G__36200,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4423__auto____$1,cb_uuid,temp__4423__auto__,or__25840__auto__,ppstr,vec__36201,clj,_QMARK_cb_uuid,G__36200,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__36200,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__36200["onopen"] = ((function (G__36200,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__36200,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__36200,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__36200,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__36200["onclose"] = ((function (G__36200,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);
});})(G__36200,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

return G__36200;
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

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__26496__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__26496__auto__,writer__26497__auto__){
return cljs.core._write.call(null,writer__26497__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__36161){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__36161),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__36161),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__36161),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__36161),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__36161),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__36161),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__36161),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__36161),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__36161),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__36161),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__36161),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__36161),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__36161),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__36161),null,cljs.core.dissoc.call(null,G__36161,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)),null));
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
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26462__auto__,k__26463__auto__){
var self__ = this;
var this__26462__auto____$1 = this;
return cljs.core._lookup.call(null,this__26462__auto____$1,k__26463__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26464__auto__,k36220,else__26465__auto__){
var self__ = this;
var this__26464__auto____$1 = this;
var G__36222 = (((k36220 instanceof cljs.core.Keyword))?k36220.fqn:null);
switch (G__36222) {
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
return cljs.core.get.call(null,self__.__extmap,k36220,else__26465__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26476__auto__,writer__26477__auto__,opts__26478__auto__){
var self__ = this;
var this__26476__auto____$1 = this;
var pr_pair__26479__auto__ = ((function (this__26476__auto____$1){
return (function (keyval__26480__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26477__auto__,cljs.core.pr_writer,""," ","",opts__26478__auto__,keyval__26480__auto__);
});})(this__26476__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26477__auto__,pr_pair__26479__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__26478__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36219){
var self__ = this;
var G__36219__$1 = this;
return (new cljs.core.RecordIter((0),G__36219__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26460__auto__){
var self__ = this;
var this__26460__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26456__auto__){
var self__ = this;
var this__26456__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26466__auto__){
var self__ = this;
var this__26466__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26457__auto__){
var self__ = this;
var this__26457__auto____$1 = this;
var h__26275__auto__ = self__.__hash;
if(!((h__26275__auto__ == null))){
return h__26275__auto__;
} else {
var h__26275__auto____$1 = cljs.core.hash_imap.call(null,this__26457__auto____$1);
self__.__hash = h__26275__auto____$1;

return h__26275__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26458__auto__,other__26459__auto__){
var self__ = this;
var this__26458__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25828__auto__ = other__26459__auto__;
if(cljs.core.truth_(and__25828__auto__)){
var and__25828__auto____$1 = (this__26458__auto____$1.constructor === other__26459__auto__.constructor);
if(and__25828__auto____$1){
return cljs.core.equiv_map.call(null,this__26458__auto____$1,other__26459__auto__);
} else {
return and__25828__auto____$1;
}
} else {
return and__25828__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26471__auto__,k__26472__auto__){
var self__ = this;
var this__26471__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__26472__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26471__auto____$1),self__.__meta),k__26472__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26472__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26469__auto__,k__26470__auto__,G__36219){
var self__ = this;
var this__26469__auto____$1 = this;
var pred__36223 = cljs.core.keyword_identical_QMARK_;
var expr__36224 = k__26470__auto__;
if(cljs.core.truth_(pred__36223.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__36224))){
return (new taoensso.sente.ChAjaxSocket(G__36219,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36223.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__36224))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__36219,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36223.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__36224))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__36219,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36223.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__36224))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__36219,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36223.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__36224))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__36219,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36223.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__36224))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__36219,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36223.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__36224))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__36219,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36223.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__36224))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,G__36219,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36223.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__36224))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,G__36219,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36223.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__36224))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__36219,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36223.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__36224))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,G__36219,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26470__auto__,G__36219),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26474__auto__){
var self__ = this;
var this__26474__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26461__auto__,G__36219){
var self__ = this;
var this__26461__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,G__36219,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26467__auto__,entry__26468__auto__){
var self__ = this;
var this__26467__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26468__auto__)){
return cljs.core._assoc.call(null,this__26467__auto____$1,cljs.core._nth.call(null,entry__26468__auto__,(0)),cljs.core._nth.call(null,entry__26468__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26467__auto____$1,entry__26468__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__36226){
var self__ = this;
var map__36227 = p__36226;
var map__36227__$1 = ((((!((map__36227 == null)))?((((map__36227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36227):map__36227);
var opts = map__36227__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__36227__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__36227__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__36227__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init3552582470095488953.clj",879,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__36227,map__36227__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__36227,map__36227__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
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
})()], null)),((function (csrf_token,_QMARK_cb_fn,chsk__$1,map__36227,map__36227__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__36229){
var map__36233 = p__36229;
var map__36233__$1 = ((((!((map__36233 == null)))?((((map__36233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36233):map__36233);
var _QMARK_error = cljs.core.get.call(null,map__36233__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__36233__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
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
var vec__36235 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__36235,(0),null);
var _ = cljs.core.nth.call(null,vec__36235,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init3552582470095488953.clj",919,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__36235,resp_clj,_,map__36233,map__36233__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__36227,map__36227__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__36235,resp_clj,_,map__36233,map__36233__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__36227,map__36227__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(csrf_token,_QMARK_cb_fn,chsk__$1,map__36227,map__36227__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
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

var temp__4425__auto___36251 = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4425__auto___36251)){
var x_36252 = temp__4425__auto___36251;
x_36252.abort();
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3552582470095488953.clj",940,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(retry_id,chsk__$1))
,null)),null);

var retry_fn = ((function (retry_id,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init3552582470095488953.clj",946,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
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
return (function taoensso$sente$poll_fn_$_ajax_cb(p__36243){
var map__36247 = p__36243;
var map__36247__$1 = ((((!((map__36247 == null)))?((((map__36247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36247):map__36247);
var _QMARK_error = cljs.core.get.call(null,map__36247__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__36247__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
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
var vec__36249 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__36249,(0),null);
var _ = cljs.core.nth.call(null,vec__36249,(1),null);
var or__25840__auto___36253 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__25840__auto___36253)){
} else {
var buffered_evs_36254 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_36254);

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

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__26496__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__26496__auto__,writer__26497__auto__){
return cljs.core._write.call(null,writer__26497__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__36221){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__36221),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__36221),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__36221),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__36221),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__36221),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__36221),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__36221),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__36221),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__36221),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__36221),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__36221),null,cljs.core.dissoc.call(null,G__36221,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)),null));
});

taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__36256 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36256) {
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
var args__26917__auto__ = [];
var len__26910__auto___36272 = arguments.length;
var i__26911__auto___36273 = (0);
while(true){
if((i__26911__auto___36273 < len__26910__auto___36272)){
args__26917__auto__.push((arguments[i__26911__auto___36273]));

var G__36274 = (i__26911__auto___36273 + (1));
i__26911__auto___36273 = G__36274;
continue;
} else {
}
break;
}

var argseq__26918__auto__ = ((((1) < args__26917__auto__.length))?(new cljs.core.IndexedSeq(args__26917__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26918__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__36261){
var vec__36262 = p__36261;
var map__36263 = cljs.core.nth.call(null,vec__36262,(0),null);
var map__36263__$1 = ((((!((map__36263 == null)))?((((map__36263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36263):map__36263);
var opts = map__36263__$1;
var ajax_opts = cljs.core.get.call(null,map__36263__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__36263__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__36263__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var client_id = cljs.core.get.call(null,map__36263__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__25840__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__36263__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__36263__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__36263__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__36263__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__36263__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__36263__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__36263__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__36262,(1),null);
if(cljs.core.truth_((function (){var __x = type;
try{if(((function (__x,vec__36262,map__36263,map__36263__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (__x__$1){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),__x__$1);
});})(__x,vec__36262,map__36263,map__36263__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36265){if((e36265 instanceof Error)){
var __t = e36265;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",__x,__t,null);
} else {
throw e36265;

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
}catch (e36266){if((e36266 instanceof Error)){
var __t = e36266;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",__x,__t,null);
} else {
throw e36266;

}
}})())){
} else {
throw (new Error("Assert failed: (have? enc/nblank-str? client-id)"));
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init3552582470095488953.clj",1055,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36262,map__36263,map__36263__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__36262,map__36263,map__36263__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init3552582470095488953.clj",1057,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36262,map__36263,map__36263__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__36262,map__36263,map__36263__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var win_location = taoensso.encore.get_window_location.call(null);
var win_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_location);
var host__$1 = (function (){var or__25840__auto__ = host;
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var path__$1 = (function (){var or__25840__auto__ = path;
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__36262,map__36263,map__36263__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__25840__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__25840__auto__){
return or__25840__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__36262,map__36263,map__36263__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36262,map__36263,map__36263__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36262,map__36263,map__36263__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),(function (){var _LT_server_ch = new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs);
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36262,map__36263,map__36263__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36262,map__36263,map__36263__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
} else {
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36262,map__36263,map__36263__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__36267 = ev;
var id = cljs.core.nth.call(null,vec__36267,(0),null);
var _QMARK_data = cljs.core.nth.call(null,vec__36267,(1),null);
var __x_36275 = (function (){try{return cljs.core.namespace.call(null,id);
}catch (e36268){if((e36268 instanceof Error)){
var __t = e36268;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__36258#] (not= p1__36258# \"chsk\")) (namespace id))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e36268;

}
}})();
try{if(((function (__x_36275,vec__36267,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36262,map__36263,map__36263__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (p1__36258_SHARP_){
return cljs.core.not_EQ_.call(null,p1__36258_SHARP_,"chsk");
});})(__x_36275,vec__36267,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36262,map__36263,map__36263__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x_36275)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36269){if((e36269 instanceof Error)){
var __t_36276 = e36269;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__36258#] (not= p1__36258# \"chsk\")) (namespace id))",__x_36275,__t_36276,null);
} else {
throw e36269;

}
}
return ev;
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36262,map__36263,map__36263__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
}
})()], null));
var chsk = (function (){var or__25840__auto__ = (function (){var and__25828__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__25828__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,packer__$1,private_chs,params,cljs.core.atom.call(null,(0)),backoff_ms_fn,cljs.core.atom.call(null,null),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ws","ws",86841443));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
}
})(),cljs.core.atom.call(null,"pending"),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__25828__auto__;
}
})();
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
var and__25828__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__25828__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"state_","state_",957667102)],[cljs.core.atom.call(null,null),client_id,packer__$1,private_chs,params,backoff_ms_fn,(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
}
})(),cljs.core.atom.call(null,"pending"),ajax_opts,lp_timeout_ms,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__25828__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str("chsk")].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__36262,map__36263,map__36263__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__36271 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__36271,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__36271,(1),null);
var ev__$1 = vec__36271;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__36262,map__36263,map__36263__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq36259){
var G__36260 = cljs.core.first.call(null,seq36259);
var seq36259__$1 = cljs.core.next.call(null,seq36259);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36260,seq36259__$1);
});
taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__36483 = opts;
var map__36483__$1 = ((((!((map__36483 == null)))?((((map__36483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36483):map__36483);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36483__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36483__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__29971__auto___36689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto___36689,map__36483,map__36483__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto___36689,map__36483,map__36483__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (state_36614){
var state_val_36615 = (state_36614[(1)]);
if((state_val_36615 === (7))){
var inst_36610 = (state_36614[(2)]);
var state_36614__$1 = state_36614;
var statearr_36616_36690 = state_36614__$1;
(statearr_36616_36690[(2)] = inst_36610);

(statearr_36616_36690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (20))){
var inst_36492 = (state_36614[(7)]);
var inst_36494 = (state_36614[(8)]);
var inst_36491 = (state_36614[(9)]);
var inst_36518 = (state_36614[(10)]);
var inst_36493 = (state_36614[(11)]);
var inst_36519 = (state_36614[(12)]);
var inst_36529 = (function (){var vec__36486 = inst_36491;
var v = inst_36492;
var p = inst_36493;
var stop_QMARK_ = inst_36494;
var map__36497 = inst_36518;
var event_msg = inst_36518;
var event = inst_36519;
return ((function (vec__36486,v,p,stop_QMARK_,map__36497,event_msg,event,inst_36492,inst_36494,inst_36491,inst_36518,inst_36493,inst_36519,state_val_36615,c__29971__auto___36689,map__36483,map__36483__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__36486,v,p,stop_QMARK_,map__36497,event_msg,event,inst_36492,inst_36494,inst_36491,inst_36518,inst_36493,inst_36519,state_val_36615,c__29971__auto___36689,map__36483,map__36483__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_36530 = (new cljs.core.Delay(inst_36529,null));
var inst_36531 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init3552582470095488953.clj",1176,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_36530,null);
var state_36614__$1 = state_36614;
var statearr_36617_36691 = state_36614__$1;
(statearr_36617_36691[(2)] = inst_36531);

(statearr_36617_36691[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (27))){
var inst_36518 = (state_36614[(10)]);
var inst_36536 = (state_36614[(2)]);
var inst_36537 = "(server-event-msg? event-msg)";
var inst_36538 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_36537,inst_36518,inst_36536,null);
var state_36614__$1 = state_36614;
var statearr_36618_36692 = state_36614__$1;
(statearr_36618_36692[(2)] = inst_36538);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36614__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (1))){
var state_36614__$1 = state_36614;
var statearr_36619_36693 = state_36614__$1;
(statearr_36619_36693[(2)] = null);

(statearr_36619_36693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (24))){
var state_36614__$1 = state_36614;
var statearr_36620_36694 = state_36614__$1;
(statearr_36620_36694[(2)] = null);

(statearr_36620_36694[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (39))){
var state_36614__$1 = state_36614;
var statearr_36621_36695 = state_36614__$1;
(statearr_36621_36695[(2)] = null);

(statearr_36621_36695[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (46))){
var inst_36583 = (state_36614[(13)]);
var inst_36591 = (state_36614[(2)]);
var inst_36592 = [inst_36591,null];
var inst_36593 = (new cljs.core.PersistentVector(null,2,(5),inst_36583,inst_36592,null));
var state_36614__$1 = state_36614;
var statearr_36622_36696 = state_36614__$1;
(statearr_36622_36696[(2)] = inst_36593);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36614__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (4))){
var inst_36494 = (state_36614[(8)]);
var inst_36491 = (state_36614[(9)]);
var inst_36493 = (state_36614[(11)]);
var inst_36491__$1 = (state_36614[(2)]);
var inst_36492 = cljs.core.nth.call(null,inst_36491__$1,(0),null);
var inst_36493__$1 = cljs.core.nth.call(null,inst_36491__$1,(1),null);
var inst_36494__$1 = taoensso.encore.kw_identical_QMARK_.call(null,inst_36493__$1,ch_ctrl);
var state_36614__$1 = (function (){var statearr_36623 = state_36614;
(statearr_36623[(7)] = inst_36492);

(statearr_36623[(8)] = inst_36494__$1);

(statearr_36623[(9)] = inst_36491__$1);

(statearr_36623[(11)] = inst_36493__$1);

return statearr_36623;
})();
if(cljs.core.truth_(inst_36494__$1)){
var statearr_36624_36697 = state_36614__$1;
(statearr_36624_36697[(1)] = (5));

} else {
var statearr_36625_36698 = state_36614__$1;
(statearr_36625_36698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (15))){
var inst_36492 = (state_36614[(7)]);
var state_36614__$1 = state_36614;
var statearr_36626_36699 = state_36614__$1;
(statearr_36626_36699[(2)] = inst_36492);

(statearr_36626_36699[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (48))){
var state_36614__$1 = state_36614;
var statearr_36627_36700 = state_36614__$1;
(statearr_36627_36700[(2)] = null);

(statearr_36627_36700[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (21))){
var state_36614__$1 = state_36614;
var statearr_36628_36701 = state_36614__$1;
(statearr_36628_36701[(2)] = null);

(statearr_36628_36701[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (31))){
var inst_36547 = (state_36614[(2)]);
var state_36614__$1 = state_36614;
var statearr_36629_36702 = state_36614__$1;
(statearr_36629_36702[(2)] = inst_36547);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36614__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (32))){
var inst_36564 = (state_36614[(2)]);
var state_36614__$1 = state_36614;
var statearr_36630_36703 = state_36614__$1;
(statearr_36630_36703[(2)] = inst_36564);

(statearr_36630_36703[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (40))){
var inst_36607 = (state_36614[(2)]);
var state_36614__$1 = (function (){var statearr_36631 = state_36614;
(statearr_36631[(14)] = inst_36607);

return statearr_36631;
})();
var statearr_36632_36704 = state_36614__$1;
(statearr_36632_36704[(2)] = null);

(statearr_36632_36704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (33))){
var inst_36518 = (state_36614[(10)]);
var inst_36551 = (state_36614[(2)]);
var inst_36552 = "(client-event-msg? event-msg)";
var inst_36553 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_36552,inst_36518,inst_36551,null);
var state_36614__$1 = state_36614;
var statearr_36633_36705 = state_36614__$1;
(statearr_36633_36705[(2)] = inst_36553);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36614__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (13))){
var inst_36510 = (state_36614[(2)]);
var state_36614__$1 = state_36614;
var statearr_36634_36706 = state_36614__$1;
(statearr_36634_36706[(2)] = inst_36510);

(statearr_36634_36706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (22))){
var inst_36534 = (state_36614[(2)]);
var state_36614__$1 = (function (){var statearr_36635 = state_36614;
(statearr_36635[(15)] = inst_36534);

return statearr_36635;
})();
if(cljs.core.truth_(server_QMARK_)){
var statearr_36636_36707 = state_36614__$1;
(statearr_36636_36707[(1)] = (23));

} else {
var statearr_36637_36708 = state_36614__$1;
(statearr_36637_36708[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (36))){
var inst_36560 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_36614__$1 = state_36614;
var statearr_36638_36709 = state_36614__$1;
(statearr_36638_36709[(2)] = inst_36560);

(statearr_36638_36709[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (41))){
var inst_36595 = (state_36614[(16)]);
var inst_36597 = (state_36614[(17)]);
var inst_36595__$1 = (state_36614[(2)]);
var inst_36596 = cljs.core.nth.call(null,inst_36595__$1,(0),null);
var inst_36597__$1 = cljs.core.nth.call(null,inst_36595__$1,(1),null);
var state_36614__$1 = (function (){var statearr_36639 = state_36614;
(statearr_36639[(16)] = inst_36595__$1);

(statearr_36639[(18)] = inst_36596);

(statearr_36639[(17)] = inst_36597__$1);

return statearr_36639;
})();
if(cljs.core.truth_(inst_36597__$1)){
var statearr_36640_36710 = state_36614__$1;
(statearr_36640_36710[(1)] = (47));

} else {
var statearr_36641_36711 = state_36614__$1;
(statearr_36641_36711[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (43))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36614,(42),Error,null,(41));
var inst_36583 = cljs.core.PersistentVector.EMPTY_NODE;
var state_36614__$1 = (function (){var statearr_36642 = state_36614;
(statearr_36642[(13)] = inst_36583);

return statearr_36642;
})();
if(cljs.core.truth_(error_handler)){
var statearr_36643_36712 = state_36614__$1;
(statearr_36643_36712[(1)] = (44));

} else {
var statearr_36644_36713 = state_36614__$1;
(statearr_36644_36713[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (29))){
var inst_36518 = (state_36614[(10)]);
var state_36614__$1 = state_36614;
var statearr_36645_36714 = state_36614__$1;
(statearr_36645_36714[(2)] = inst_36518);

(statearr_36645_36714[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (44))){
var inst_36573 = (state_36614[(19)]);
var inst_36518 = (state_36614[(10)]);
var inst_36585 = error_handler.call(null,inst_36573,inst_36518);
var state_36614__$1 = state_36614;
var statearr_36646_36715 = state_36614__$1;
(statearr_36646_36715[(2)] = inst_36585);

(statearr_36646_36715[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (6))){
var inst_36492 = (state_36614[(7)]);
var inst_36500 = (inst_36492 == null);
var inst_36501 = cljs.core.not.call(null,inst_36500);
var state_36614__$1 = state_36614;
if(inst_36501){
var statearr_36647_36716 = state_36614__$1;
(statearr_36647_36716[(1)] = (8));

} else {
var statearr_36648_36717 = state_36614__$1;
(statearr_36648_36717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (28))){
var inst_36518 = (state_36614[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36614,(27),Error,null,(26));
var inst_36542 = taoensso.sente.server_event_msg_QMARK_.call(null,inst_36518);
var state_36614__$1 = state_36614;
if(cljs.core.truth_(inst_36542)){
var statearr_36649_36718 = state_36614__$1;
(statearr_36649_36718[(1)] = (29));

} else {
var statearr_36650_36719 = state_36614__$1;
(statearr_36650_36719[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (25))){
var inst_36527 = (state_36614[(20)]);
var inst_36566 = (state_36614[(2)]);
var inst_36567 = event_msg_handler.call(null,inst_36566);
var inst_36568 = [inst_36567,null];
var inst_36569 = (new cljs.core.PersistentVector(null,2,(5),inst_36527,inst_36568,null));
var state_36614__$1 = state_36614;
var statearr_36651_36720 = state_36614__$1;
(statearr_36651_36720[(2)] = inst_36569);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36614__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (34))){
var inst_36518 = (state_36614[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36614,(33),Error,null,(32));
var inst_36557 = taoensso.sente.client_event_msg_QMARK_.call(null,inst_36518);
var state_36614__$1 = state_36614;
if(cljs.core.truth_(inst_36557)){
var statearr_36652_36721 = state_36614__$1;
(statearr_36652_36721[(1)] = (35));

} else {
var statearr_36653_36722 = state_36614__$1;
(statearr_36653_36722[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (17))){
var inst_36571 = (state_36614[(21)]);
var inst_36573 = (state_36614[(19)]);
var inst_36571__$1 = (state_36614[(2)]);
var inst_36572 = cljs.core.nth.call(null,inst_36571__$1,(0),null);
var inst_36573__$1 = cljs.core.nth.call(null,inst_36571__$1,(1),null);
var state_36614__$1 = (function (){var statearr_36654 = state_36614;
(statearr_36654[(21)] = inst_36571__$1);

(statearr_36654[(19)] = inst_36573__$1);

(statearr_36654[(22)] = inst_36572);

return statearr_36654;
})();
if(cljs.core.truth_(inst_36573__$1)){
var statearr_36655_36723 = state_36614__$1;
(statearr_36655_36723[(1)] = (38));

} else {
var statearr_36656_36724 = state_36614__$1;
(statearr_36656_36724[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (3))){
var inst_36612 = (state_36614[(2)]);
var state_36614__$1 = state_36614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36614__$1,inst_36612);
} else {
if((state_val_36615 === (12))){
var state_36614__$1 = state_36614;
var statearr_36657_36725 = state_36614__$1;
(statearr_36657_36725[(2)] = false);

(statearr_36657_36725[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (2))){
var inst_36487 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36488 = [ch_recv,ch_ctrl];
var inst_36489 = (new cljs.core.PersistentVector(null,2,(5),inst_36487,inst_36488,null));
var state_36614__$1 = state_36614;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36614__$1,(4),inst_36489);
} else {
if((state_val_36615 === (23))){
var state_36614__$1 = state_36614;
var statearr_36658_36726 = state_36614__$1;
(statearr_36658_36726[(2)] = null);

(statearr_36658_36726[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (47))){
var inst_36571 = (state_36614[(21)]);
var inst_36492 = (state_36614[(7)]);
var inst_36494 = (state_36614[(8)]);
var inst_36573 = (state_36614[(19)]);
var inst_36491 = (state_36614[(9)]);
var inst_36518 = (state_36614[(10)]);
var inst_36493 = (state_36614[(11)]);
var inst_36519 = (state_36614[(12)]);
var inst_36595 = (state_36614[(16)]);
var inst_36596 = (state_36614[(18)]);
var inst_36597 = (state_36614[(17)]);
var inst_36599 = (function (){var p = inst_36493;
var _QMARK_error = inst_36573;
var vec__36486 = inst_36491;
var map__36497 = inst_36518;
var temp__4425__auto__ = inst_36597;
var vec__36575 = inst_36595;
var v = inst_36492;
var _ = inst_36596;
var e2 = inst_36597;
var _QMARK_error2 = inst_36597;
var event_msg = inst_36518;
var e = inst_36573;
var event = inst_36519;
var vec__36498 = inst_36571;
var stop_QMARK_ = inst_36494;
return ((function (p,_QMARK_error,vec__36486,map__36497,temp__4425__auto__,vec__36575,v,_,e2,_QMARK_error2,event_msg,e,event,vec__36498,stop_QMARK_,inst_36571,inst_36492,inst_36494,inst_36573,inst_36491,inst_36518,inst_36493,inst_36519,inst_36595,inst_36596,inst_36597,state_val_36615,c__29971__auto___36689,map__36483,map__36483__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});
;})(p,_QMARK_error,vec__36486,map__36497,temp__4425__auto__,vec__36575,v,_,e2,_QMARK_error2,event_msg,e,event,vec__36498,stop_QMARK_,inst_36571,inst_36492,inst_36494,inst_36573,inst_36491,inst_36518,inst_36493,inst_36519,inst_36595,inst_36596,inst_36597,state_val_36615,c__29971__auto___36689,map__36483,map__36483__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_36600 = (new cljs.core.Delay(inst_36599,null));
var inst_36601 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init3552582470095488953.clj",1189,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_36600,null);
var state_36614__$1 = state_36614;
var statearr_36659_36727 = state_36614__$1;
(statearr_36659_36727[(2)] = inst_36601);

(statearr_36659_36727[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (35))){
var inst_36518 = (state_36614[(10)]);
var state_36614__$1 = state_36614;
var statearr_36660_36728 = state_36614__$1;
(statearr_36660_36728[(2)] = inst_36518);

(statearr_36660_36728[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36614,(18),Error,null,(17));
var inst_36527 = cljs.core.PersistentVector.EMPTY_NODE;
var state_36614__$1 = (function (){var statearr_36661 = state_36614;
(statearr_36661[(20)] = inst_36527);

return statearr_36661;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_36662_36729 = state_36614__$1;
(statearr_36662_36729[(1)] = (20));

} else {
var statearr_36663_36730 = state_36614__$1;
(statearr_36663_36730[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (11))){
var state_36614__$1 = state_36614;
var statearr_36664_36731 = state_36614__$1;
(statearr_36664_36731[(2)] = true);

(statearr_36664_36731[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (9))){
var state_36614__$1 = state_36614;
var statearr_36665_36732 = state_36614__$1;
(statearr_36665_36732[(2)] = false);

(statearr_36665_36732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (5))){
var state_36614__$1 = state_36614;
var statearr_36666_36733 = state_36614__$1;
(statearr_36666_36733[(2)] = null);

(statearr_36666_36733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (14))){
var inst_36492 = (state_36614[(7)]);
var inst_36515 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36492);
var state_36614__$1 = state_36614;
var statearr_36667_36734 = state_36614__$1;
(statearr_36667_36734[(2)] = inst_36515);

(statearr_36667_36734[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (45))){
var inst_36571 = (state_36614[(21)]);
var inst_36492 = (state_36614[(7)]);
var inst_36494 = (state_36614[(8)]);
var inst_36573 = (state_36614[(19)]);
var inst_36491 = (state_36614[(9)]);
var inst_36572 = (state_36614[(22)]);
var inst_36518 = (state_36614[(10)]);
var inst_36493 = (state_36614[(11)]);
var inst_36519 = (state_36614[(12)]);
var inst_36587 = (function (){var p = inst_36493;
var _QMARK_error = inst_36573;
var vec__36486 = inst_36491;
var map__36497 = inst_36518;
var temp__4425__auto__ = inst_36573;
var v = inst_36492;
var temp__4423__auto__ = error_handler;
var _ = inst_36572;
var event_msg = inst_36518;
var e = inst_36573;
var event = inst_36519;
var vec__36498 = inst_36571;
var stop_QMARK_ = inst_36494;
return ((function (p,_QMARK_error,vec__36486,map__36497,temp__4425__auto__,v,temp__4423__auto__,_,event_msg,e,event,vec__36498,stop_QMARK_,inst_36571,inst_36492,inst_36494,inst_36573,inst_36491,inst_36572,inst_36518,inst_36493,inst_36519,state_val_36615,c__29971__auto___36689,map__36483,map__36483__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router `event-msg-handler` error: %s",event], null);
});
;})(p,_QMARK_error,vec__36486,map__36497,temp__4425__auto__,v,temp__4423__auto__,_,event_msg,e,event,vec__36498,stop_QMARK_,inst_36571,inst_36492,inst_36494,inst_36573,inst_36491,inst_36572,inst_36518,inst_36493,inst_36519,state_val_36615,c__29971__auto___36689,map__36483,map__36483__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_36588 = (new cljs.core.Delay(inst_36587,null));
var inst_36589 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init3552582470095488953.clj",1187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_36588,null);
var state_36614__$1 = state_36614;
var statearr_36668_36735 = state_36614__$1;
(statearr_36668_36735[(2)] = inst_36589);

(statearr_36668_36735[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (26))){
var inst_36549 = (state_36614[(2)]);
var state_36614__$1 = state_36614;
var statearr_36669_36736 = state_36614__$1;
(statearr_36669_36736[(2)] = inst_36549);

(statearr_36669_36736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (16))){
var inst_36518 = (state_36614[(10)]);
var inst_36518__$1 = (state_36614[(2)]);
var inst_36519 = cljs.core.get.call(null,inst_36518__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_36614__$1 = (function (){var statearr_36670 = state_36614;
(statearr_36670[(10)] = inst_36518__$1);

(statearr_36670[(12)] = inst_36519);

return statearr_36670;
})();
var statearr_36671_36737 = state_36614__$1;
(statearr_36671_36737[(2)] = null);

(statearr_36671_36737[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (38))){
var state_36614__$1 = state_36614;
var statearr_36672_36738 = state_36614__$1;
(statearr_36672_36738[(2)] = null);

(statearr_36672_36738[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (30))){
var inst_36545 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_36614__$1 = state_36614;
var statearr_36673_36739 = state_36614__$1;
(statearr_36673_36739[(2)] = inst_36545);

(statearr_36673_36739[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (10))){
var inst_36513 = (state_36614[(2)]);
var state_36614__$1 = state_36614;
if(cljs.core.truth_(inst_36513)){
var statearr_36674_36740 = state_36614__$1;
(statearr_36674_36740[(1)] = (14));

} else {
var statearr_36675_36741 = state_36614__$1;
(statearr_36675_36741[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (18))){
var inst_36520 = (state_36614[(2)]);
var inst_36521 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36522 = [null,inst_36520];
var inst_36523 = (new cljs.core.PersistentVector(null,2,(5),inst_36521,inst_36522,null));
var state_36614__$1 = state_36614;
var statearr_36676_36742 = state_36614__$1;
(statearr_36676_36742[(2)] = inst_36523);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36614__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (42))){
var inst_36576 = (state_36614[(2)]);
var inst_36577 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36578 = [null,inst_36576];
var inst_36579 = (new cljs.core.PersistentVector(null,2,(5),inst_36577,inst_36578,null));
var state_36614__$1 = state_36614;
var statearr_36677_36743 = state_36614__$1;
(statearr_36677_36743[(2)] = inst_36579);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36614__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (37))){
var inst_36562 = (state_36614[(2)]);
var state_36614__$1 = state_36614;
var statearr_36678_36744 = state_36614__$1;
(statearr_36678_36744[(2)] = inst_36562);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36614__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (8))){
var inst_36492 = (state_36614[(7)]);
var inst_36503 = inst_36492.cljs$lang$protocol_mask$partition0$;
var inst_36504 = (inst_36503 & (64));
var inst_36505 = inst_36492.cljs$core$ISeq$;
var inst_36506 = (inst_36504) || (inst_36505);
var state_36614__$1 = state_36614;
if(cljs.core.truth_(inst_36506)){
var statearr_36679_36745 = state_36614__$1;
(statearr_36679_36745[(1)] = (11));

} else {
var statearr_36680_36746 = state_36614__$1;
(statearr_36680_36746[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (49))){
var inst_36604 = (state_36614[(2)]);
var state_36614__$1 = state_36614;
var statearr_36681_36747 = state_36614__$1;
(statearr_36681_36747[(2)] = inst_36604);

(statearr_36681_36747[(1)] = (40));


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
});})(c__29971__auto___36689,map__36483,map__36483__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
;
return ((function (switch__29859__auto__,c__29971__auto___36689,map__36483,map__36483__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29860__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29860__auto____0 = (function (){
var statearr_36685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36685[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29860__auto__);

(statearr_36685[(1)] = (1));

return statearr_36685;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29860__auto____1 = (function (state_36614){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_36614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e36686){if((e36686 instanceof Object)){
var ex__29863__auto__ = e36686;
var statearr_36687_36748 = state_36614;
(statearr_36687_36748[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36749 = state_36614;
state_36614 = G__36749;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29860__auto__ = function(state_36614){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29860__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29860__auto____1.call(this,state_36614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29860__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29860__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto___36689,map__36483,map__36483__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var state__29973__auto__ = (function (){var statearr_36688 = f__29972__auto__.call(null);
(statearr_36688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___36689);

return statearr_36688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto___36689,map__36483,map__36483__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
);


return ((function (map__36483,map__36483__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__36483,map__36483__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
});
/**
 * Creates a go-loop to call `(event-msg-handler <server-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__26917__auto__ = [];
var len__26910__auto___36757 = arguments.length;
var i__26911__auto___36758 = (0);
while(true){
if((i__26911__auto___36758 < len__26910__auto___36757)){
args__26917__auto__.push((arguments[i__26911__auto___36758]));

var G__36759 = (i__26911__auto___36758 + (1));
i__26911__auto___36758 = G__36759;
continue;
} else {
}
break;
}

var argseq__26918__auto__ = ((((2) < args__26917__auto__.length))?(new cljs.core.IndexedSeq(args__26917__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26918__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__36753){
var vec__36754 = p__36753;
var map__36755 = cljs.core.nth.call(null,vec__36754,(0),null);
var map__36755__$1 = ((((!((map__36755 == null)))?((((map__36755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36755):map__36755);
var opts = map__36755__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36755__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36755__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq36750){
var G__36751 = cljs.core.first.call(null,seq36750);
var seq36750__$1 = cljs.core.next.call(null,seq36750);
var G__36752 = cljs.core.first.call(null,seq36750__$1);
var seq36750__$2 = cljs.core.next.call(null,seq36750__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36751,G__36752,seq36750__$2);
});
/**
 * Creates a go-loop to call `(event-msg-handler <client-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__26917__auto__ = [];
var len__26910__auto___36767 = arguments.length;
var i__26911__auto___36768 = (0);
while(true){
if((i__26911__auto___36768 < len__26910__auto___36767)){
args__26917__auto__.push((arguments[i__26911__auto___36768]));

var G__36769 = (i__26911__auto___36768 + (1));
i__26911__auto___36768 = G__36769;
continue;
} else {
}
break;
}

var argseq__26918__auto__ = ((((2) < args__26917__auto__.length))?(new cljs.core.IndexedSeq(args__26917__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26918__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__36763){
var vec__36764 = p__36763;
var map__36765 = cljs.core.nth.call(null,vec__36764,(0),null);
var map__36765__$1 = ((((!((map__36765 == null)))?((((map__36765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36765):map__36765);
var opts = map__36765__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36765__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36765__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq36760){
var G__36761 = cljs.core.first.call(null,seq36760);
var seq36760__$1 = cljs.core.next.call(null,seq36760);
var G__36762 = cljs.core.first.call(null,seq36760__$1);
var seq36760__$2 = cljs.core.next.call(null,seq36760__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36761,G__36762,seq36760__$2);
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__36770,websocket_QMARK_){
var map__36773 = p__36770;
var map__36773__$1 = ((((!((map__36773 == null)))?((((map__36773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36773):map__36773);
var location = map__36773__$1;
var adjusted_protocol = cljs.core.get.call(null,map__36773__$1,new cljs.core.Keyword(null,"adjusted-protocol","adjusted-protocol",37431492));
var host = cljs.core.get.call(null,map__36773__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__36773__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str(adjusted_protocol),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__25840__auto__ = path;
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map