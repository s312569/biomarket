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
var vec__35595 = x;
var ev_id = cljs.core.nth.call(null,vec__35595,(0),null);
var _ = cljs.core.nth.call(null,vec__35595,(1),null);
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
var err_fmt = [cljs.core.str((function (){var G__35597 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__35597) {
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
var and__25797__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__25797__auto__){
var and__25797__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__25797__auto____$1)){
var map__35601 = x;
var map__35601__$1 = ((((!((map__35601 == null)))?((((map__35601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35601):map__35601);
var ch_recv = cljs.core.get.call(null,map__35601__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__35601__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__35601__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__35601__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__25797__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__25797__auto____$2)){
var and__25797__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__25797__auto____$3){
var and__25797__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(cljs.core.truth_(and__25797__auto____$4)){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__25797__auto____$4;
}
} else {
return and__25797__auto____$3;
}
} else {
return and__25797__auto____$2;
}
} else {
return and__25797__auto____$1;
}
} else {
return and__25797__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__25797__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__25797__auto__){
var and__25797__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__25797__auto____$1)){
var map__35605 = x;
var map__35605__$1 = ((((!((map__35605 == null)))?((((map__35605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35605):map__35605);
var ch_recv = cljs.core.get.call(null,map__35605__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__35605__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__35605__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__35605__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__35605__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__35605__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__35605__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__25797__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__25797__auto____$2)){
var and__25797__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__25797__auto____$3){
var and__25797__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(cljs.core.truth_(and__25797__auto____$4)){
var and__25797__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__25797__auto____$5){
var and__25797__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(cljs.core.truth_(and__25797__auto____$6)){
var and__25797__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__25797__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__25797__auto____$7;
}
} else {
return and__25797__auto____$6;
}
} else {
return and__25797__auto____$5;
}
} else {
return and__25797__auto____$4;
}
} else {
return and__25797__auto____$3;
}
} else {
return and__25797__auto____$2;
}
} else {
return and__25797__auto____$1;
}
} else {
return and__25797__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__35607){
var map__35611 = p__35607;
var map__35611__$1 = ((((!((map__35611 == null)))?((((map__35611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35611):map__35611);
var ev_msg = map__35611__$1;
var event = cljs.core.get.call(null,map__35611__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__35611__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__35613 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__35613,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__35613,(1),null);
var valid_event = vec__35613;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init7270842182740954461.clj",159,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__35613,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__35611,map__35611__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__35613,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__35611,map__35611__$1,ev_msg,event,_QMARK_reply_fn))
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
}catch (e35617){if((e35617 instanceof Error)){
var __t = e35617;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? pstr)",__x,__t,null);
} else {
throw e35617;

}
}})());
}catch (e35616){var t = e35616;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init7270842182740954461.clj",175,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t){
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
var args35618 = [];
var len__26879__auto___35621 = arguments.length;
var i__26880__auto___35622 = (0);
while(true){
if((i__26880__auto___35622 < len__26879__auto___35621)){
args35618.push((arguments[i__26880__auto___35622]));

var G__35623 = (i__26880__auto___35622 + (1));
i__26880__auto___35622 = G__35623;
continue;
} else {
}
break;
}

var G__35620 = args35618.length;
switch (G__35620) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35618.length)].join('')));

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
var args__26886__auto__ = [];
var len__26879__auto___35626 = arguments.length;
var i__26880__auto___35627 = (0);
while(true){
if((i__26880__auto___35627 < len__26879__auto___35626)){
args__26886__auto__.push((arguments[i__26880__auto___35627]));

var G__35628 = (i__26880__auto___35627 + (1));
i__26880__auto___35627 = G__35628;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((0) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((0)),(0),null)):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__26887__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7270842182740954461.clj",193,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing: %s -> %s",args,pstr], null);
});})(pstr))
,null)),null);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq35625){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35625));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
var __x_35635 = prefixed_pstr;
try{if(typeof __x_35635 === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35632){if((e35632 instanceof Error)){
var __t_35636 = e35632;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",__x_35635,__t_35636,null);
} else {
throw e35632;

}
}
var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__35634 = prefix;
switch (G__35634) {
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
var vec__35633 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__35633,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__35633,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7270842182740954461.clj",205,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (prefix,pstr,clj,wrapped_QMARK_,vec__35633,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(prefix,pstr,clj,wrapped_QMARK_,vec__35633,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
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
var args__26886__auto__ = [];
var len__26879__auto___35807 = arguments.length;
var i__26880__auto___35808 = (0);
while(true){
if((i__26880__auto___35808 < len__26879__auto___35807)){
args__26886__auto__.push((arguments[i__26880__auto___35808]));

var G__35809 = (i__26880__auto___35808 + (1));
i__26880__auto___35808 = G__35809;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_adapter,p__35641){
var vec__35642 = p__35641;
var map__35643 = cljs.core.nth.call(null,vec__35642,(0),null);
var map__35643__$1 = ((((!((map__35643 == null)))?((((map__35643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35643):map__35643);
var recv_buf_or_n = cljs.core.get.call(null,map__35643__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__35643__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__35643__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__35643__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__35643__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__25809__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
var or__25809__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__25809__auto____$1)){
return or__25809__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__35643__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__35643__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var __x = send_buf_ms_ajax;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35645){if((e35645 instanceof Error)){
var __t = e35645;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",__x,__t,null);
} else {
throw e35645;

}
}})(),(function (){var __x = send_buf_ms_ws;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35646){if((e35646 instanceof Error)){
var __t = e35646;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",__x,__t,null);
} else {
throw e35646;

}
}})()], null))){
} else {
throw (new Error("Assert failed: (have? enc/pos-int? send-buf-ms-ajax send-buf-ms-ws)"));
}

if(cljs.core.truth_((function (){var __x = web_server_adapter;
try{if(((function (__x,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__35638_SHARP_){
if(!((p1__35638_SHARP_ == null))){
if((false) || (p1__35638_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__35638_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__35638_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__35638_SHARP_);
}
});})(__x,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35647){if((e35647 instanceof Error)){
var __t = e35647;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__35638#] (satisfies? interfaces/IServerChanAdapter p1__35638#)) web-server-adapter)",__x,__t,null);
} else {
throw e35647;

}
}})())){
} else {
throw (new Error("Assert failed: (have? (fn* [p1__35638#] (satisfies? interfaces/IServerChanAdapter p1__35638#)) web-server-adapter)"));
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var user_id_fn__$1 = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__25809__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type,uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35649){if((e35649 instanceof Error)){
var __t = e35649;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e35649;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35650){
var map__35651 = p__35650;
var map__35651__$1 = ((((!((map__35651 == null)))?((((map__35651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35651):map__35651);
var old_m = map__35651__$1;
var ws = cljs.core.get.call(null,map__35651__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__35651__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__35651__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__35653 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35653) {
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
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35654){if((e35654 instanceof Error)){
var __t = e35654;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e35654;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35655){
var map__35656 = p__35655;
var map__35656__$1 = ((((!((map__35656 == null)))?((((map__35656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35656):map__35656);
var old_m = map__35656__$1;
var ws = cljs.core.get.call(null,map__35656__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__35656__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__35656__$1,new cljs.core.Keyword(null,"any","any",1705907423));
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
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__35811__delegate = function (user_id,ev,p__35658){
var vec__35659 = p__35658;
var map__35660 = cljs.core.nth.call(null,vec__35659,(0),null);
var map__35660__$1 = ((((!((map__35660 == null)))?((((map__35660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35660):map__35660);
var opts = map__35660__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__35660__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_35812 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __35813 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7270842182740954461.clj",324,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_35812,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_35812,ev], null);
});})(uid_35812,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var __35814__$1 = (cljs.core.truth_(uid_35812)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __35815__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_35816 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__35817 = ((function (uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type){
var temp__4425__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),((function (uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__35662 = cljs.core.get.call(null,m,uid_35812);
var ___$3 = cljs.core.nth.call(null,vec__35662,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35662,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_35816)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_35812),cljs.core.get.call(null,m,uid_35812));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4425__auto__)){
var pulled = temp__4425__auto__;
var vec__35663 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__35663,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35663,(1),null);
var __x_35818 = buffered_evs;
try{if(cljs.core.vector_QMARK_.call(null,__x_35818)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35664){if((e35664 instanceof Error)){
var __t_35819 = e35664;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",__x_35818,__t_35819,null);
} else {
throw e35664;

}
}
var __x_35820 = ev_uuids;
try{if(cljs.core.set_QMARK_.call(null,__x_35820)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35665){if((e35665 instanceof Error)){
var __t_35821 = e35665;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",__x_35820,__t_35821,null);
} else {
throw e35665;

}
}
var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7270842182740954461.clj",357,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__35663,buffered_evs,ev_uuids,pulled,temp__4425__auto__,uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__35663,buffered_evs,ev_uuids,pulled,temp__4425__auto__,uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var G__35666 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35666) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_35812,buffered_evs_ppstr);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_35812,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
} else {
return null;
}
});})(uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init7270842182740954461.clj",367,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,flush_buffer_BANG__35817,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_35812], null);
});})(uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,flush_buffer_BANG__35817,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

if(cljs.core.truth_(flush_QMARK_)){
var seq__35667_35823 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__35668_35824 = null;
var count__35669_35825 = (0);
var i__35670_35826 = (0);
while(true){
if((i__35670_35826 < count__35669_35825)){
var type_35827 = cljs.core._nth.call(null,chunk__35668_35824,i__35670_35826);
flush_buffer_BANG__35817.call(null,type_35827);

var G__35828 = seq__35667_35823;
var G__35829 = chunk__35668_35824;
var G__35830 = count__35669_35825;
var G__35831 = (i__35670_35826 + (1));
seq__35667_35823 = G__35828;
chunk__35668_35824 = G__35829;
count__35669_35825 = G__35830;
i__35670_35826 = G__35831;
continue;
} else {
var temp__4425__auto___35832 = cljs.core.seq.call(null,seq__35667_35823);
if(temp__4425__auto___35832){
var seq__35667_35833__$1 = temp__4425__auto___35832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35667_35833__$1)){
var c__26620__auto___35834 = cljs.core.chunk_first.call(null,seq__35667_35833__$1);
var G__35835 = cljs.core.chunk_rest.call(null,seq__35667_35833__$1);
var G__35836 = c__26620__auto___35834;
var G__35837 = cljs.core.count.call(null,c__26620__auto___35834);
var G__35838 = (0);
seq__35667_35823 = G__35835;
chunk__35668_35824 = G__35836;
count__35669_35825 = G__35837;
i__35670_35826 = G__35838;
continue;
} else {
var type_35839 = cljs.core.first.call(null,seq__35667_35833__$1);
flush_buffer_BANG__35817.call(null,type_35839);

var G__35840 = cljs.core.next.call(null,seq__35667_35833__$1);
var G__35841 = null;
var G__35842 = (0);
var G__35843 = (0);
seq__35667_35823 = G__35840;
chunk__35668_35824 = G__35841;
count__35669_35825 = G__35842;
i__35670_35826 = G__35843;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__35671_35844 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_35812], null))));
var chunk__35672_35845 = null;
var count__35673_35846 = (0);
var i__35674_35847 = (0);
while(true){
if((i__35674_35847 < count__35673_35846)){
var server_ch_35848 = cljs.core._nth.call(null,chunk__35672_35845,i__35674_35847);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35848);

var G__35849 = seq__35671_35844;
var G__35850 = chunk__35672_35845;
var G__35851 = count__35673_35846;
var G__35852 = (i__35674_35847 + (1));
seq__35671_35844 = G__35849;
chunk__35672_35845 = G__35850;
count__35673_35846 = G__35851;
i__35674_35847 = G__35852;
continue;
} else {
var temp__4425__auto___35853 = cljs.core.seq.call(null,seq__35671_35844);
if(temp__4425__auto___35853){
var seq__35671_35854__$1 = temp__4425__auto___35853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35671_35854__$1)){
var c__26620__auto___35855 = cljs.core.chunk_first.call(null,seq__35671_35854__$1);
var G__35856 = cljs.core.chunk_rest.call(null,seq__35671_35854__$1);
var G__35857 = c__26620__auto___35855;
var G__35858 = cljs.core.count.call(null,c__26620__auto___35855);
var G__35859 = (0);
seq__35671_35844 = G__35856;
chunk__35672_35845 = G__35857;
count__35673_35846 = G__35858;
i__35674_35847 = G__35859;
continue;
} else {
var server_ch_35860 = cljs.core.first.call(null,seq__35671_35854__$1);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35860);

var G__35861 = cljs.core.next.call(null,seq__35671_35854__$1);
var G__35862 = null;
var G__35863 = (0);
var G__35864 = (0);
seq__35671_35844 = G__35861;
chunk__35672_35845 = G__35862;
count__35673_35846 = G__35863;
i__35674_35847 = G__35864;
continue;
}
} else {
}
}
break;
}

var seq__35675_35865 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_35812], null))));
var chunk__35676_35866 = null;
var count__35677_35867 = (0);
var i__35678_35868 = (0);
while(true){
if((i__35678_35868 < count__35677_35867)){
var vec__35679_35869 = cljs.core._nth.call(null,chunk__35676_35866,i__35678_35868);
var _QMARK_server_ch_35870 = cljs.core.nth.call(null,vec__35679_35869,(0),null);
var __35871__$3 = cljs.core.nth.call(null,vec__35679_35869,(1),null);
var temp__4425__auto___35872 = _QMARK_server_ch_35870;
if(cljs.core.truth_(temp__4425__auto___35872)){
var server_ch_35873 = temp__4425__auto___35872;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35873);
} else {
}

var G__35874 = seq__35675_35865;
var G__35875 = chunk__35676_35866;
var G__35876 = count__35677_35867;
var G__35877 = (i__35678_35868 + (1));
seq__35675_35865 = G__35874;
chunk__35676_35866 = G__35875;
count__35677_35867 = G__35876;
i__35678_35868 = G__35877;
continue;
} else {
var temp__4425__auto___35878 = cljs.core.seq.call(null,seq__35675_35865);
if(temp__4425__auto___35878){
var seq__35675_35879__$1 = temp__4425__auto___35878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35675_35879__$1)){
var c__26620__auto___35880 = cljs.core.chunk_first.call(null,seq__35675_35879__$1);
var G__35881 = cljs.core.chunk_rest.call(null,seq__35675_35879__$1);
var G__35882 = c__26620__auto___35880;
var G__35883 = cljs.core.count.call(null,c__26620__auto___35880);
var G__35884 = (0);
seq__35675_35865 = G__35881;
chunk__35676_35866 = G__35882;
count__35677_35867 = G__35883;
i__35678_35868 = G__35884;
continue;
} else {
var vec__35680_35885 = cljs.core.first.call(null,seq__35675_35879__$1);
var _QMARK_server_ch_35886 = cljs.core.nth.call(null,vec__35680_35885,(0),null);
var __35887__$3 = cljs.core.nth.call(null,vec__35680_35885,(1),null);
var temp__4425__auto___35888__$1 = _QMARK_server_ch_35886;
if(cljs.core.truth_(temp__4425__auto___35888__$1)){
var server_ch_35889 = temp__4425__auto___35888__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35889);
} else {
}

var G__35890 = cljs.core.next.call(null,seq__35675_35879__$1);
var G__35891 = null;
var G__35892 = (0);
var G__35893 = (0);
seq__35675_35865 = G__35890;
chunk__35676_35866 = G__35891;
count__35677_35867 = G__35892;
i__35678_35868 = G__35893;
continue;
}
} else {
}
}
break;
}
} else {
var seq__35681_35894 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__35682_35895 = null;
var count__35683_35896 = (0);
var i__35684_35897 = (0);
while(true){
if((i__35684_35897 < count__35683_35896)){
var type_35898 = cljs.core._nth.call(null,chunk__35682_35895,i__35684_35897);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_35898,uid_35812], null),((function (seq__35681_35894,chunk__35682_35895,count__35683_35896,i__35684_35897,type_35898,uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,flush_buffer_BANG__35817,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_35816], true)], null);
} else {
var vec__35685 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__35685,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35685,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_35816)], null);
}
});})(seq__35681_35894,chunk__35682_35895,count__35683_35896,i__35684_35897,type_35898,uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,flush_buffer_BANG__35817,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__35899 = seq__35681_35894;
var G__35900 = chunk__35682_35895;
var G__35901 = count__35683_35896;
var G__35902 = (i__35684_35897 + (1));
seq__35681_35894 = G__35899;
chunk__35682_35895 = G__35900;
count__35683_35896 = G__35901;
i__35684_35897 = G__35902;
continue;
} else {
var temp__4425__auto___35903 = cljs.core.seq.call(null,seq__35681_35894);
if(temp__4425__auto___35903){
var seq__35681_35904__$1 = temp__4425__auto___35903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35681_35904__$1)){
var c__26620__auto___35905 = cljs.core.chunk_first.call(null,seq__35681_35904__$1);
var G__35906 = cljs.core.chunk_rest.call(null,seq__35681_35904__$1);
var G__35907 = c__26620__auto___35905;
var G__35908 = cljs.core.count.call(null,c__26620__auto___35905);
var G__35909 = (0);
seq__35681_35894 = G__35906;
chunk__35682_35895 = G__35907;
count__35683_35896 = G__35908;
i__35684_35897 = G__35909;
continue;
} else {
var type_35910 = cljs.core.first.call(null,seq__35681_35904__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_35910,uid_35812], null),((function (seq__35681_35894,chunk__35682_35895,count__35683_35896,i__35684_35897,type_35910,seq__35681_35904__$1,temp__4425__auto___35903,uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,flush_buffer_BANG__35817,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_35816], true)], null);
} else {
var vec__35686 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__35686,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35686,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_35816)], null);
}
});})(seq__35681_35894,chunk__35682_35895,count__35683_35896,i__35684_35897,type_35910,seq__35681_35904__$1,temp__4425__auto___35903,uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,flush_buffer_BANG__35817,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__35911 = cljs.core.next.call(null,seq__35681_35904__$1);
var G__35912 = null;
var G__35913 = (0);
var G__35914 = (0);
seq__35681_35894 = G__35911;
chunk__35682_35895 = G__35912;
count__35683_35896 = G__35913;
i__35684_35897 = G__35914;
continue;
}
} else {
}
}
break;
}

var c__29940__auto___35915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto___35915,uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,flush_buffer_BANG__35817,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto___35915,uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,flush_buffer_BANG__35817,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35696){
var state_val_35697 = (state_35696[(1)]);
if((state_val_35697 === (1))){
var state_35696__$1 = state_35696;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_35698_35916 = state_35696__$1;
(statearr_35698_35916[(1)] = (2));

} else {
var statearr_35699_35917 = state_35696__$1;
(statearr_35699_35917[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35697 === (2))){
var state_35696__$1 = state_35696;
var statearr_35700_35918 = state_35696__$1;
(statearr_35700_35918[(2)] = null);

(statearr_35700_35918[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35697 === (3))){
var inst_35689 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var state_35696__$1 = state_35696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35696__$1,(5),inst_35689);
} else {
if((state_val_35697 === (4))){
var inst_35693 = (state_35696[(2)]);
var inst_35694 = flush_buffer_BANG__35817.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_35696__$1 = (function (){var statearr_35701 = state_35696;
(statearr_35701[(7)] = inst_35693);

return statearr_35701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35696__$1,inst_35694);
} else {
if((state_val_35697 === (5))){
var inst_35691 = (state_35696[(2)]);
var state_35696__$1 = state_35696;
var statearr_35702_35919 = state_35696__$1;
(statearr_35702_35919[(2)] = inst_35691);

(statearr_35702_35919[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__29940__auto___35915,uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,flush_buffer_BANG__35817,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29828__auto__,c__29940__auto___35915,uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,flush_buffer_BANG__35817,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29829__auto__ = null;
var taoensso$sente$state_machine__29829__auto____0 = (function (){
var statearr_35706 = [null,null,null,null,null,null,null,null];
(statearr_35706[(0)] = taoensso$sente$state_machine__29829__auto__);

(statearr_35706[(1)] = (1));

return statearr_35706;
});
var taoensso$sente$state_machine__29829__auto____1 = (function (state_35696){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_35696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e35707){if((e35707 instanceof Object)){
var ex__29832__auto__ = e35707;
var statearr_35708_35920 = state_35696;
(statearr_35708_35920[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35921 = state_35696;
state_35696 = G__35921;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
taoensso$sente$state_machine__29829__auto__ = function(state_35696){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29829__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29829__auto____1.call(this,state_35696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29829__auto____0;
taoensso$sente$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29829__auto____1;
return taoensso$sente$state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto___35915,uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,flush_buffer_BANG__35817,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29942__auto__ = (function (){var statearr_35709 = f__29941__auto__.call(null);
(statearr_35709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___35915);

return statearr_35709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto___35915,uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,flush_buffer_BANG__35817,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__29940__auto___35922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto___35922,uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,flush_buffer_BANG__35817,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto___35922,uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,flush_buffer_BANG__35817,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35719){
var state_val_35720 = (state_35719[(1)]);
if((state_val_35720 === (1))){
var state_35719__$1 = state_35719;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_35721_35923 = state_35719__$1;
(statearr_35721_35923[(1)] = (2));

} else {
var statearr_35722_35924 = state_35719__$1;
(statearr_35722_35924[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (2))){
var state_35719__$1 = state_35719;
var statearr_35723_35925 = state_35719__$1;
(statearr_35723_35925[(2)] = null);

(statearr_35723_35925[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (3))){
var inst_35712 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var state_35719__$1 = state_35719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35719__$1,(5),inst_35712);
} else {
if((state_val_35720 === (4))){
var inst_35716 = (state_35719[(2)]);
var inst_35717 = flush_buffer_BANG__35817.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_35719__$1 = (function (){var statearr_35724 = state_35719;
(statearr_35724[(7)] = inst_35716);

return statearr_35724;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35719__$1,inst_35717);
} else {
if((state_val_35720 === (5))){
var inst_35714 = (state_35719[(2)]);
var state_35719__$1 = state_35719;
var statearr_35725_35926 = state_35719__$1;
(statearr_35725_35926[(2)] = inst_35714);

(statearr_35725_35926[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__29940__auto___35922,uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,flush_buffer_BANG__35817,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29828__auto__,c__29940__auto___35922,uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,flush_buffer_BANG__35817,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29829__auto__ = null;
var taoensso$sente$state_machine__29829__auto____0 = (function (){
var statearr_35729 = [null,null,null,null,null,null,null,null];
(statearr_35729[(0)] = taoensso$sente$state_machine__29829__auto__);

(statearr_35729[(1)] = (1));

return statearr_35729;
});
var taoensso$sente$state_machine__29829__auto____1 = (function (state_35719){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_35719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e35730){if((e35730 instanceof Object)){
var ex__29832__auto__ = e35730;
var statearr_35731_35927 = state_35719;
(statearr_35731_35927[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35928 = state_35719;
state_35719 = G__35928;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
taoensso$sente$state_machine__29829__auto__ = function(state_35719){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29829__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29829__auto____1.call(this,state_35719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29829__auto____0;
taoensso$sente$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29829__auto____1;
return taoensso$sente$state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto___35922,uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,flush_buffer_BANG__35817,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29942__auto__ = (function (){var statearr_35732 = f__29941__auto__.call(null);
(statearr_35732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___35922);

return statearr_35732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto___35922,uid_35812,__35813,__35814__$1,__35815__$2,ev_uuid_35816,flush_buffer_BANG__35817,vec__35659,map__35660,map__35660__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}

return null;
};
var G__35811 = function (user_id,ev,var_args){
var p__35658 = null;
if (arguments.length > 2) {
var G__35929__i = 0, G__35929__a = new Array(arguments.length -  2);
while (G__35929__i < G__35929__a.length) {G__35929__a[G__35929__i] = arguments[G__35929__i + 2]; ++G__35929__i;}
  p__35658 = new cljs.core.IndexedSeq(G__35929__a,0);
} 
return G__35811__delegate.call(this,user_id,ev,p__35658);};
G__35811.cljs$lang$maxFixedArity = 2;
G__35811.cljs$lang$applyTo = (function (arglist__35930){
var user_id = cljs.core.first(arglist__35930);
arglist__35930 = cljs.core.next(arglist__35930);
var ev = cljs.core.first(arglist__35930);
var p__35658 = cljs.core.rest(arglist__35930);
return G__35811__delegate(user_id,ev,p__35658);
});
G__35811.cljs$core$IFn$_invoke$arity$variadic = G__35811__delegate;
return G__35811;
})()
;})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__35733 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__35733,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__35733,(1),null);
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?((function (params,ppstr,client_id,vec__35733,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7270842182740954461.clj",435,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__35733,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): %s",resp_clj], null);
});})(params,ppstr,client_id,vec__35733,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
});})(params,ppstr,client_id,vec__35733,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
return null;
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7270842182740954461.clj",442,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__35733,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): dummy-cb-200"], null);
});})(params,ppstr,client_id,vec__35733,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337)),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var csrf_token = csrf_token_fn.call(null,ring_req);
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var websocket_QMARK_ = new cljs.core.Keyword(null,"websocket?","websocket?",1552493139).cljs$core$IFn$_invoke$arity$1(ring_req);
var receive_event_msg_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__35931__delegate = function (event,p__35734){
var vec__35735 = p__35734;
var _QMARK_reply_fn = cljs.core.nth.call(null,vec__35735,(0),null);
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
};
var G__35931 = function (event,var_args){
var p__35734 = null;
if (arguments.length > 1) {
var G__35932__i = 0, G__35932__a = new Array(arguments.length -  1);
while (G__35932__i < G__35932__a.length) {G__35932__a[G__35932__i] = arguments[G__35932__i + 1]; ++G__35932__i;}
  p__35734 = new cljs.core.IndexedSeq(G__35932__a,0);
} 
return G__35931__delegate.call(this,event,p__35734);};
G__35931.cljs$lang$maxFixedArity = 1;
G__35931.cljs$lang$applyTo = (function (arglist__35933){
var event = cljs.core.first(arglist__35933);
var p__35734 = cljs.core.rest(arglist__35933);
return G__35931__delegate(event,p__35734);
});
G__35931.cljs$core$IFn$_invoke$arity$variadic = G__35931__delegate;
return G__35931;
})()
;})(csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var handshake_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7270842182740954461.clj",467,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handshake!"], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = ((!((_QMARK_handshake_data == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev),cljs.core.not.call(null,websocket_QMARK_));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init7270842182740954461.clj",479,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7270842182740954461.clj",487,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,[cljs.core.str(server_ch)].join('')], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

taoensso.encore.reset_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id], null),server_ch);

if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954)], null));
} else {
}

return handshake_BANG_.call(null,server_ch);
} else {
var initial_conn_from_client_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_ch,taoensso.encore.now_udt.call(null)], null),(_QMARK_v == null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
var handshake_QMARK_ = (function (){var or__25809__auto__ = initial_conn_from_client_QMARK_;
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
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
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,req_ppstr){
var vec__35736 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__35736,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__35736,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__35736,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7270842182740954461.clj",514,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__35736,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__35736,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__35736,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,status){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
if(cljs.core.empty_QMARK_.call(null,new_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return new_m;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var c__29940__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35750){
var state_val_35751 = (state_35750[(1)]);
if((state_val_35751 === (1))){
var inst_35737 = cljs.core.async.timeout.call(null,(5000));
var state_35750__$1 = state_35750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35750__$1,(2),inst_35737);
} else {
if((state_val_35751 === (2))){
var inst_35739 = (state_35750[(2)]);
var inst_35740 = upd_connected_uid_BANG_.call(null,uid);
var state_35750__$1 = (function (){var statearr_35752 = state_35750;
(statearr_35752[(7)] = inst_35739);

return statearr_35752;
})();
if(cljs.core.truth_(inst_35740)){
var statearr_35753_35934 = state_35750__$1;
(statearr_35753_35934[(1)] = (3));

} else {
var statearr_35754_35935 = state_35750__$1;
(statearr_35754_35935[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (3))){
var inst_35742 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35743 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_35744 = (new cljs.core.PersistentVector(null,1,(5),inst_35742,inst_35743,null));
var inst_35745 = receive_event_msg_BANG_.call(null,inst_35744);
var state_35750__$1 = state_35750;
var statearr_35755_35936 = state_35750__$1;
(statearr_35755_35936[(2)] = inst_35745);

(statearr_35755_35936[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (4))){
var state_35750__$1 = state_35750;
var statearr_35756_35937 = state_35750__$1;
(statearr_35756_35937[(2)] = null);

(statearr_35756_35937[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (5))){
var inst_35748 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35750__$1,inst_35748);
} else {
return null;
}
}
}
}
}
});})(c__29940__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29828__auto__,c__29940__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29829__auto__ = null;
var taoensso$sente$state_machine__29829__auto____0 = (function (){
var statearr_35760 = [null,null,null,null,null,null,null,null];
(statearr_35760[(0)] = taoensso$sente$state_machine__29829__auto__);

(statearr_35760[(1)] = (1));

return statearr_35760;
});
var taoensso$sente$state_machine__29829__auto____1 = (function (state_35750){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_35750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e35761){if((e35761 instanceof Object)){
var ex__29832__auto__ = e35761;
var statearr_35762_35938 = state_35750;
(statearr_35762_35938[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35939 = state_35750;
state_35750 = G__35939;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
taoensso$sente$state_machine__29829__auto__ = function(state_35750){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29829__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29829__auto____1.call(this,state_35750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29829__auto____0;
taoensso$sente$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29829__auto____1;
return taoensso$sente$state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29942__auto__ = (function (){var statearr_35763 = f__29941__auto__.call(null);
(statearr_35763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto__);

return statearr_35763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__29940__auto__;
} else {
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,new cljs.core.Keyword(null,"ajax","ajax",814345549),client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35764){
var vec__35765 = p__35764;
var server_ch__$1 = cljs.core.nth.call(null,vec__35765,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__35765,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var udt_disconnected = taoensso.encore.now_udt.call(null);
var c__29940__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35788){
var state_val_35789 = (state_35788[(1)]);
if((state_val_35789 === (1))){
var inst_35766 = cljs.core.async.timeout.call(null,(5000));
var state_35788__$1 = state_35788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35788__$1,(2),inst_35766);
} else {
if((state_val_35789 === (2))){
var inst_35768 = (state_35788[(2)]);
var inst_35769 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35770 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_35771 = (new cljs.core.PersistentVector(null,2,(5),inst_35769,inst_35770,null));
var inst_35772 = (function (){return ((function (inst_35768,inst_35769,inst_35770,inst_35771,state_val_35789,c__29940__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var vec__35790 = cljs.core.get.call(null,_QMARK_m,client_id);
var _ = cljs.core.nth.call(null,vec__35790,(0),null);
var _QMARK_udt_last_connected = cljs.core.nth.call(null,vec__35790,(1),null);
var disconnected_QMARK_ = (function (){var and__25797__auto__ = _QMARK_udt_last_connected;
if(cljs.core.truth_(and__25797__auto__)){
return (udt_disconnected >= _QMARK_udt_last_connected);
} else {
return and__25797__auto__;
}
})();
if(cljs.core.not.call(null,disconnected_QMARK_)){
return taoensso.encore.swapped.call(null,_QMARK_m,cljs.core.not.call(null,new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)));
} else {
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
return taoensso.encore.swapped.call(null,((cljs.core.empty_QMARK_.call(null,new_m))?new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782):new_m),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586));
}
});
;})(inst_35768,inst_35769,inst_35770,inst_35771,state_val_35789,c__29940__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_35773 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_35771,inst_35772);
var state_35788__$1 = (function (){var statearr_35791 = state_35788;
(statearr_35791[(7)] = inst_35768);

return statearr_35791;
})();
if(cljs.core.truth_(inst_35773)){
var statearr_35792_35940 = state_35788__$1;
(statearr_35792_35940[(1)] = (3));

} else {
var statearr_35793_35941 = state_35788__$1;
(statearr_35793_35941[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (3))){
var inst_35775 = upd_connected_uid_BANG_.call(null,uid);
var state_35788__$1 = state_35788;
if(cljs.core.truth_(inst_35775)){
var statearr_35794_35942 = state_35788__$1;
(statearr_35794_35942[(1)] = (6));

} else {
var statearr_35795_35943 = state_35788__$1;
(statearr_35795_35943[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (4))){
var state_35788__$1 = state_35788;
var statearr_35796_35944 = state_35788__$1;
(statearr_35796_35944[(2)] = null);

(statearr_35796_35944[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (5))){
var inst_35786 = (state_35788[(2)]);
var state_35788__$1 = state_35788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35788__$1,inst_35786);
} else {
if((state_val_35789 === (6))){
var inst_35777 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35778 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_35779 = (new cljs.core.PersistentVector(null,1,(5),inst_35777,inst_35778,null));
var inst_35780 = receive_event_msg_BANG_.call(null,inst_35779);
var state_35788__$1 = state_35788;
var statearr_35797_35945 = state_35788__$1;
(statearr_35797_35945[(2)] = inst_35780);

(statearr_35797_35945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (7))){
var state_35788__$1 = state_35788;
var statearr_35798_35946 = state_35788__$1;
(statearr_35798_35946[(2)] = null);

(statearr_35798_35946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35789 === (8))){
var inst_35783 = (state_35788[(2)]);
var state_35788__$1 = state_35788;
var statearr_35799_35947 = state_35788__$1;
(statearr_35799_35947[(2)] = inst_35783);

(statearr_35799_35947[(1)] = (5));


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
});})(c__29940__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29828__auto__,c__29940__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29829__auto__ = null;
var taoensso$sente$state_machine__29829__auto____0 = (function (){
var statearr_35803 = [null,null,null,null,null,null,null,null];
(statearr_35803[(0)] = taoensso$sente$state_machine__29829__auto__);

(statearr_35803[(1)] = (1));

return statearr_35803;
});
var taoensso$sente$state_machine__29829__auto____1 = (function (state_35788){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_35788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e35804){if((e35804 instanceof Object)){
var ex__29832__auto__ = e35804;
var statearr_35805_35948 = state_35788;
(statearr_35805_35948[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35949 = state_35788;
state_35788 = G__35949;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
taoensso$sente$state_machine__29829__auto__ = function(state_35788){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29829__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29829__auto____1.call(this,state_35788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29829__auto____0;
taoensso$sente$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29829__auto____1;
return taoensso$sente$state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29942__auto__ = (function (){var statearr_35806 = f__29941__auto__.call(null);
(statearr_35806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto__);

return statearr_35806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__29940__auto__;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35642,map__35643,map__35643__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq35639){
var G__35640 = cljs.core.first.call(null,seq35639);
var seq35639__$1 = cljs.core.next.call(null,seq35639);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35640,seq35639__$1);
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7270842182740954461.clj",576,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null);

var seq__35954 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null))));
var chunk__35955 = null;
var count__35956 = (0);
var i__35957 = (0);
while(true){
if((i__35957 < count__35956)){
var server_ch = cljs.core._nth.call(null,chunk__35955,i__35957);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__35958 = seq__35954;
var G__35959 = chunk__35955;
var G__35960 = count__35956;
var G__35961 = (i__35957 + (1));
seq__35954 = G__35958;
chunk__35955 = G__35959;
count__35956 = G__35960;
i__35957 = G__35961;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__35954);
if(temp__4425__auto__){
var seq__35954__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35954__$1)){
var c__26620__auto__ = cljs.core.chunk_first.call(null,seq__35954__$1);
var G__35962 = cljs.core.chunk_rest.call(null,seq__35954__$1);
var G__35963 = c__26620__auto__;
var G__35964 = cljs.core.count.call(null,c__26620__auto__);
var G__35965 = (0);
seq__35954 = G__35962;
chunk__35955 = G__35963;
count__35956 = G__35964;
i__35957 = G__35965;
continue;
} else {
var server_ch = cljs.core.first.call(null,seq__35954__$1);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__35966 = cljs.core.next.call(null,seq__35954__$1);
var G__35967 = null;
var G__35968 = (0);
var G__35969 = (0);
seq__35954 = G__35966;
chunk__35955 = G__35967;
count__35956 = G__35968;
i__35957 = G__35969;
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
var args__26886__auto__ = [];
var len__26879__auto___36059 = arguments.length;
var i__26880__auto___36060 = (0);
while(true){
if((i__26880__auto___36060 < len__26879__auto___36059)){
args__26886__auto__.push((arguments[i__26880__auto___36060]));

var G__36061 = (i__26880__auto___36060 + (1));
i__26880__auto___36060 = G__36061;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((3) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((3)),(0),null)):null);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26887__auto__);
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conns_,uid,buffered_evs_pstr,p__35974){
var vec__35975 = p__35974;
var map__35976 = cljs.core.nth.call(null,vec__35975,(0),null);
var map__35976__$1 = ((((!((map__35976 == null)))?((((map__35976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35976):map__35976);
var nmax_attempts = cljs.core.get.call(null,map__35976__$1,new cljs.core.Keyword(null,"nmax-attempts","nmax-attempts",1471144610),(7));
var ms_base = cljs.core.get.call(null,map__35976__$1,new cljs.core.Keyword(null,"ms-base","ms-base",-1962784511),(90));
var ms_rand = cljs.core.get.call(null,map__35976__$1,new cljs.core.Keyword(null,"ms-rand","ms-rand",1169398874),(90));

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7270842182740954461.clj",589,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__35975,map__35976,map__35976__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
});})(vec__35975,map__35976,map__35976__$1,nmax_attempts,ms_base,ms_rand))
,null)),null);

var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__29940__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto__,client_ids_unsatisfied,vec__35975,map__35976,map__35976__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto__,client_ids_unsatisfied,vec__35975,map__35976,map__35976__$1,nmax_attempts,ms_base,ms_rand){
return (function (state_36025){
var state_val_36026 = (state_36025[(1)]);
if((state_val_36026 === (7))){
var inst_35979 = (state_36025[(7)]);
var inst_35980 = (state_36025[(8)]);
var inst_35986 = (state_36025[(9)]);
var inst_35997 = (function (){var n = inst_35979;
var client_ids_satisfied = inst_35980;
var _QMARK_pulled = inst_35986;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_35979,inst_35980,inst_35986,state_val_36026,c__29940__auto__,client_ids_unsatisfied,vec__35975,map__35976,map__35976__$1,nmax_attempts,ms_base,ms_rand){
return (function (s,client_id,p__35996){
var vec__36027 = p__35996;
var _QMARK_server_ch = cljs.core.nth.call(null,vec__36027,(0),null);
var _ = cljs.core.nth.call(null,vec__36027,(1),null);
if(((_QMARK_server_ch == null)) || (cljs.core.not.call(null,taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_server_ch,buffered_evs_pstr,new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103))))){
return s;
} else {
return cljs.core.conj.call(null,s,client_id);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_35979,inst_35980,inst_35986,state_val_36026,c__29940__auto__,client_ids_unsatisfied,vec__35975,map__35976,map__35976__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_35998 = cljs.core.PersistentHashSet.EMPTY;
var inst_35999 = cljs.core.reduce_kv.call(null,inst_35997,inst_35998,inst_35986);
var state_36025__$1 = state_36025;
var statearr_36028_36062 = state_36025__$1;
(statearr_36028_36062[(2)] = inst_35999);

(statearr_36028_36062[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (1))){
var inst_35978 = cljs.core.PersistentHashSet.EMPTY;
var inst_35979 = (0);
var inst_35980 = inst_35978;
var state_36025__$1 = (function (){var statearr_36029 = state_36025;
(statearr_36029[(7)] = inst_35979);

(statearr_36029[(8)] = inst_35980);

return statearr_36029;
})();
var statearr_36030_36063 = state_36025__$1;
(statearr_36030_36063[(2)] = null);

(statearr_36030_36063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (4))){
var state_36025__$1 = state_36025;
var statearr_36031_36064 = state_36025__$1;
(statearr_36031_36064[(2)] = true);

(statearr_36031_36064[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (15))){
var inst_36021 = (state_36025[(2)]);
var state_36025__$1 = state_36025;
var statearr_36032_36065 = state_36025__$1;
(statearr_36032_36065[(2)] = inst_36021);

(statearr_36032_36065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (13))){
var inst_36012 = cljs.core.rand_int.call(null,ms_rand);
var inst_36013 = (ms_base + inst_36012);
var inst_36014 = cljs.core.async.timeout.call(null,inst_36013);
var state_36025__$1 = state_36025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36025__$1,(16),inst_36014);
} else {
if((state_val_36026 === (6))){
var inst_35986 = (state_36025[(9)]);
var inst_35994 = (state_36025[(2)]);
var state_36025__$1 = (function (){var statearr_36033 = state_36025;
(statearr_36033[(10)] = inst_35994);

return statearr_36033;
})();
if(cljs.core.truth_(inst_35986)){
var statearr_36034_36066 = state_36025__$1;
(statearr_36034_36066[(1)] = (7));

} else {
var statearr_36035_36067 = state_36025__$1;
(statearr_36035_36067[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (3))){
var inst_36023 = (state_36025[(2)]);
var state_36025__$1 = state_36025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36025__$1,inst_36023);
} else {
if((state_val_36026 === (12))){
var inst_36010 = (state_36025[(2)]);
var state_36025__$1 = state_36025;
if(cljs.core.truth_(inst_36010)){
var statearr_36036_36068 = state_36025__$1;
(statearr_36036_36068[(1)] = (13));

} else {
var statearr_36037_36069 = state_36025__$1;
(statearr_36037_36069[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (2))){
var inst_35979 = (state_36025[(7)]);
var inst_35980 = (state_36025[(8)]);
var inst_35986 = (state_36025[(9)]);
var inst_35982 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35983 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_35984 = (new cljs.core.PersistentVector(null,2,(5),inst_35982,inst_35983,null));
var inst_35985 = (function (){var n = inst_35979;
var client_ids_satisfied = inst_35980;
return ((function (n,client_ids_satisfied,inst_35979,inst_35980,inst_35986,inst_35982,inst_35983,inst_35984,state_val_36026,c__29940__auto__,client_ids_unsatisfied,vec__35975,map__35976,map__35976__$1,nmax_attempts,ms_base,ms_rand){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_35979,inst_35980,inst_35986,inst_35982,inst_35983,inst_35984,state_val_36026,c__29940__auto__,client_ids_unsatisfied,vec__35975,map__35976,map__35976__$1,nmax_attempts,ms_base,ms_rand){
return (function (m__$1,k){
var vec__36038 = cljs.core.get.call(null,m__$1,k);
var _QMARK_server_ch = cljs.core.nth.call(null,vec__36038,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__36038,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_35979,inst_35980,inst_35986,inst_35982,inst_35983,inst_35984,state_val_36026,c__29940__auto__,client_ids_unsatisfied,vec__35975,map__35976,map__35976__$1,nmax_attempts,ms_base,ms_rand))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_35979,inst_35980,inst_35986,inst_35982,inst_35983,inst_35984,state_val_36026,c__29940__auto__,client_ids_unsatisfied,vec__35975,map__35976,map__35976__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_35986__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_35984,inst_35985);
var inst_35987 = (function (){var n = inst_35979;
var client_ids_satisfied = inst_35980;
var _QMARK_pulled = inst_35986__$1;
var __x = inst_35986__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,__x,inst_35979,inst_35980,inst_35986,inst_35982,inst_35983,inst_35984,inst_35985,inst_35986__$1,state_val_36026,c__29940__auto__,client_ids_unsatisfied,vec__35975,map__35976,map__35976__$1,nmax_attempts,ms_base,ms_rand){
return (function (__x__$1){
var or__25809__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,__x__$1);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,__x,inst_35979,inst_35980,inst_35986,inst_35982,inst_35983,inst_35984,inst_35985,inst_35986__$1,state_val_36026,c__29940__auto__,client_ids_unsatisfied,vec__35975,map__35976,map__35976__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_35988 = inst_35987.call(null,inst_35986__$1);
var state_36025__$1 = (function (){var statearr_36039 = state_36025;
(statearr_36039[(9)] = inst_35986__$1);

return statearr_36039;
})();
if(cljs.core.truth_(inst_35988)){
var statearr_36040_36070 = state_36025__$1;
(statearr_36040_36070[(1)] = (4));

} else {
var statearr_36041_36071 = state_36025__$1;
(statearr_36041_36071[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (11))){
var inst_36004 = (state_36025[(11)]);
var state_36025__$1 = state_36025;
var statearr_36042_36072 = state_36025__$1;
(statearr_36042_36072[(2)] = inst_36004);

(statearr_36042_36072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (9))){
var inst_36004 = (state_36025[(11)]);
var inst_35979 = (state_36025[(7)]);
var inst_35980 = (state_36025[(8)]);
var inst_36002 = (state_36025[(2)]);
var inst_36003 = cljs.core.into.call(null,inst_35980,inst_36002);
var inst_36004__$1 = (inst_35979 < nmax_attempts);
var state_36025__$1 = (function (){var statearr_36043 = state_36025;
(statearr_36043[(11)] = inst_36004__$1);

(statearr_36043[(12)] = inst_36003);

return statearr_36043;
})();
if(cljs.core.truth_(inst_36004__$1)){
var statearr_36044_36073 = state_36025__$1;
(statearr_36044_36073[(1)] = (10));

} else {
var statearr_36045_36074 = state_36025__$1;
(statearr_36045_36074[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (5))){
var inst_35986 = (state_36025[(9)]);
var inst_35991 = "([:or nil? map?] ?pulled)";
var inst_35992 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,inst_35991,inst_35986,null,null);
var state_36025__$1 = state_36025;
var statearr_36046_36075 = state_36025__$1;
(statearr_36046_36075[(2)] = inst_35992);

(statearr_36046_36075[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (14))){
var state_36025__$1 = state_36025;
var statearr_36047_36076 = state_36025__$1;
(statearr_36047_36076[(2)] = null);

(statearr_36047_36076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (16))){
var inst_35979 = (state_36025[(7)]);
var inst_36003 = (state_36025[(12)]);
var inst_36016 = (state_36025[(2)]);
var inst_36017 = (inst_35979 + (1));
var inst_35979__$1 = inst_36017;
var inst_35980 = inst_36003;
var state_36025__$1 = (function (){var statearr_36048 = state_36025;
(statearr_36048[(13)] = inst_36016);

(statearr_36048[(7)] = inst_35979__$1);

(statearr_36048[(8)] = inst_35980);

return statearr_36048;
})();
var statearr_36049_36077 = state_36025__$1;
(statearr_36049_36077[(2)] = null);

(statearr_36049_36077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (10))){
var inst_36003 = (state_36025[(12)]);
var inst_36006 = cljs.core.complement.call(null,inst_36003);
var inst_36007 = cljs.core.some.call(null,inst_36006,client_ids_unsatisfied);
var state_36025__$1 = state_36025;
var statearr_36050_36078 = state_36025__$1;
(statearr_36050_36078[(2)] = inst_36007);

(statearr_36050_36078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36026 === (8))){
var state_36025__$1 = state_36025;
var statearr_36051_36079 = state_36025__$1;
(statearr_36051_36079[(2)] = null);

(statearr_36051_36079[(1)] = (9));


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
});})(c__29940__auto__,client_ids_unsatisfied,vec__35975,map__35976,map__35976__$1,nmax_attempts,ms_base,ms_rand))
;
return ((function (switch__29828__auto__,c__29940__auto__,client_ids_unsatisfied,vec__35975,map__35976,map__35976__$1,nmax_attempts,ms_base,ms_rand){
return (function() {
var taoensso$sente$state_machine__29829__auto__ = null;
var taoensso$sente$state_machine__29829__auto____0 = (function (){
var statearr_36055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36055[(0)] = taoensso$sente$state_machine__29829__auto__);

(statearr_36055[(1)] = (1));

return statearr_36055;
});
var taoensso$sente$state_machine__29829__auto____1 = (function (state_36025){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_36025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e36056){if((e36056 instanceof Object)){
var ex__29832__auto__ = e36056;
var statearr_36057_36080 = state_36025;
(statearr_36057_36080[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36081 = state_36025;
state_36025 = G__36081;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
taoensso$sente$state_machine__29829__auto__ = function(state_36025){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29829__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29829__auto____1.call(this,state_36025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29829__auto____0;
taoensso$sente$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29829__auto____1;
return taoensso$sente$state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto__,client_ids_unsatisfied,vec__35975,map__35976,map__35976__$1,nmax_attempts,ms_base,ms_rand))
})();
var state__29942__auto__ = (function (){var statearr_36058 = f__29941__auto__.call(null);
(statearr_36058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto__);

return statearr_36058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto__,client_ids_unsatisfied,vec__35975,map__35976,map__35976__$1,nmax_attempts,ms_base,ms_rand))
);

return c__29940__auto__;
}
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$applyTo = (function (seq35970){
var G__35971 = cljs.core.first.call(null,seq35970);
var seq35970__$1 = cljs.core.next.call(null,seq35970);
var G__35972 = cljs.core.first.call(null,seq35970__$1);
var seq35970__$2 = cljs.core.next.call(null,seq35970__$1);
var G__35973 = cljs.core.first.call(null,seq35970__$2);
var seq35970__$3 = cljs.core.next.call(null,seq35970__$2);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35971,G__35972,G__35973,seq35970__$3);
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
var x__26472__auto__ = (((chsk == null))?null:chsk);
var m__26473__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__26472__auto__)]);
if(!((m__26473__auto__ == null))){
return m__26473__auto__.call(null,chsk);
} else {
var m__26473__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__26473__auto____$1 == null))){
return m__26473__auto____$1.call(null,chsk);
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
var x__26472__auto__ = (((chsk == null))?null:chsk);
var m__26473__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__26472__auto__)]);
if(!((m__26473__auto__ == null))){
return m__26473__auto__.call(null,chsk,ev,opts);
} else {
var m__26473__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__26473__auto____$1 == null))){
return m__26473__auto____$1.call(null,chsk,ev,opts);
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
var x__26472__auto__ = (((chsk == null))?null:chsk);
var m__26473__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__26472__auto__)]);
if(!((m__26473__auto__ == null))){
return m__26473__auto__.call(null,chsk);
} else {
var m__26473__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(!((m__26473__auto____$1 == null))){
return m__26473__auto____$1.call(null,chsk);
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
var x__26472__auto__ = (((chsk == null))?null:chsk);
var m__26473__auto__ = (taoensso.sente.chsk_disconnect_BANG_[goog.typeOf(x__26472__auto__)]);
if(!((m__26473__auto__ == null))){
return m__26473__auto__.call(null,chsk);
} else {
var m__26473__auto____$1 = (taoensso.sente.chsk_disconnect_BANG_["_"]);
if(!((m__26473__auto____$1 == null))){
return m__26473__auto____$1.call(null,chsk);
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
var x__26472__auto__ = (((chsk == null))?null:chsk);
var m__26473__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__26472__auto__)]);
if(!((m__26473__auto__ == null))){
return m__26473__auto__.call(null,chsk);
} else {
var m__26473__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(!((m__26473__auto____$1 == null))){
return m__26473__auto____$1.call(null,chsk);
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
var args36082 = [];
var len__26879__auto___36085 = arguments.length;
var i__26880__auto___36086 = (0);
while(true){
if((i__26880__auto___36086 < len__26879__auto___36085)){
args36082.push((arguments[i__26880__auto___36086]));

var G__36087 = (i__26880__auto___36086 + (1));
i__26880__auto___36086 = G__36087;
continue;
} else {
}
break;
}

var G__36084 = args36082.length;
switch (G__36084) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36082.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7270842182740954461.clj",646,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__25809__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__25809__auto__){
return or__25809__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nneg-int? ?timeout-ms)))")].join('')));
}

if(cljs.core.truth_((function (){var or__25809__auto__ = (_QMARK_cb == null);
if(or__25809__auto__){
return or__25809__auto__;
} else {
var or__25809__auto____$1 = cljs.core.ifn_QMARK_.call(null,_QMARK_cb);
if(or__25809__auto____$1){
return or__25809__auto____$1;
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
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__36089,merge_state){
var map__36093 = p__36089;
var map__36093__$1 = ((((!((map__36093 == null)))?((((map__36093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36093):map__36093);
var chsk = map__36093__$1;
var chs = cljs.core.get.call(null,map__36093__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__36093__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__36095 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__36093,map__36093__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__25797__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__25797__auto__)){
var and__25797__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__25797__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__25797__auto____$1;
}
} else {
return and__25797__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__36093,map__36093__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__36095,(0),null);
var new_state = cljs.core.nth.call(null,vec__36095,(1),null);
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
var __x_36100 = _QMARK_cb;
try{if(cljs.core.truth_(taoensso.encore.chan_QMARK_.call(null,__x_36100))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36098){if((e36098 instanceof Error)){
var __t_36101 = e36098;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",__x_36100,__t_36101,null);
} else {
throw e36098;

}
}
taoensso.sente.assert_event.call(null,ev);

var vec__36099 = ev;
var ev_id = cljs.core.nth.call(null,vec__36099,(0),null);
var _ = cljs.core.nth.call(null,vec__36099,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__36099,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__36099,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7270842182740954461.clj",703,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null);

var buffered_evs = (function (){var __x = clj;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36107){if((e36107 instanceof Error)){
var __t = e36107;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",__x,__t,null);
} else {
throw e36107;

}
}})();
var seq__36108 = cljs.core.seq.call(null,buffered_evs);
var chunk__36109 = null;
var count__36110 = (0);
var i__36111 = (0);
while(true){
if((i__36111 < count__36110)){
var ev = cljs.core._nth.call(null,chunk__36109,i__36111);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__36112 = seq__36108;
var G__36113 = chunk__36109;
var G__36114 = count__36110;
var G__36115 = (i__36111 + (1));
seq__36108 = G__36112;
chunk__36109 = G__36113;
count__36110 = G__36114;
i__36111 = G__36115;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36108);
if(temp__4425__auto__){
var seq__36108__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36108__$1)){
var c__26620__auto__ = cljs.core.chunk_first.call(null,seq__36108__$1);
var G__36116 = cljs.core.chunk_rest.call(null,seq__36108__$1);
var G__36117 = c__26620__auto__;
var G__36118 = cljs.core.count.call(null,c__26620__auto__);
var G__36119 = (0);
seq__36108 = G__36116;
chunk__36109 = G__36117;
count__36110 = G__36118;
i__36111 = G__36119;
continue;
} else {
var ev = cljs.core.first.call(null,seq__36108__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__36120 = cljs.core.next.call(null,seq__36108__$1);
var G__36121 = null;
var G__36122 = (0);
var G__36123 = (0);
seq__36108 = G__36120;
chunk__36109 = G__36121;
count__36110 = G__36122;
i__36111 = G__36123;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7270842182740954461.clj",713,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj], null);
});})(handshake_QMARK_))
,null)),null);

if(handshake_QMARK_){
var vec__36126 = clj;
var _ = cljs.core.nth.call(null,vec__36126,(0),null);
var vec__36127 = cljs.core.nth.call(null,vec__36126,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__36127,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__36127,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__36127,(2),null);
var handshake_ev = vec__36126;
if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init7270842182740954461.clj",719,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36126,_,vec__36127,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__36126,_,vec__36127,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_))
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
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26431__auto__,k__26432__auto__){
var self__ = this;
var this__26431__auto____$1 = this;
return cljs.core._lookup.call(null,this__26431__auto____$1,k__26432__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26433__auto__,k36129,else__26434__auto__){
var self__ = this;
var this__26433__auto____$1 = this;
var G__36131 = (((k36129 instanceof cljs.core.Keyword))?k36129.fqn:null);
switch (G__36131) {
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
return cljs.core.get.call(null,self__.__extmap,k36129,else__26434__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26445__auto__,writer__26446__auto__,opts__26447__auto__){
var self__ = this;
var this__26445__auto____$1 = this;
var pr_pair__26448__auto__ = ((function (this__26445__auto____$1){
return (function (keyval__26449__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26446__auto__,cljs.core.pr_writer,""," ","",opts__26447__auto__,keyval__26449__auto__);
});})(this__26445__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26446__auto__,pr_pair__26448__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__26447__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36128){
var self__ = this;
var G__36128__$1 = this;
return (new cljs.core.RecordIter((0),G__36128__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26429__auto__){
var self__ = this;
var this__26429__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26425__auto__){
var self__ = this;
var this__26425__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26435__auto__){
var self__ = this;
var this__26435__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26426__auto__){
var self__ = this;
var this__26426__auto____$1 = this;
var h__26244__auto__ = self__.__hash;
if(!((h__26244__auto__ == null))){
return h__26244__auto__;
} else {
var h__26244__auto____$1 = cljs.core.hash_imap.call(null,this__26426__auto____$1);
self__.__hash = h__26244__auto____$1;

return h__26244__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26427__auto__,other__26428__auto__){
var self__ = this;
var this__26427__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25797__auto__ = other__26428__auto__;
if(cljs.core.truth_(and__25797__auto__)){
var and__25797__auto____$1 = (this__26427__auto____$1.constructor === other__26428__auto__.constructor);
if(and__25797__auto____$1){
return cljs.core.equiv_map.call(null,this__26427__auto____$1,other__26428__auto__);
} else {
return and__25797__auto____$1;
}
} else {
return and__25797__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26440__auto__,k__26441__auto__){
var self__ = this;
var this__26440__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__26441__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26440__auto____$1),self__.__meta),k__26441__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26441__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26438__auto__,k__26439__auto__,G__36128){
var self__ = this;
var this__26438__auto____$1 = this;
var pred__36132 = cljs.core.keyword_identical_QMARK_;
var expr__36133 = k__26439__auto__;
if(cljs.core.truth_(pred__36132.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__36133))){
return (new taoensso.sente.ChWebSocket(G__36128,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36132.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__36133))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__36128,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36132.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__36133))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__36128,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36132.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__36133))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__36128,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36132.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__36133))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__36128,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36132.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__36133))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__36128,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36132.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__36133))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__36128,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36132.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__36133))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,G__36128,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36132.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__36133))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,G__36128,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36132.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__36133))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,G__36128,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36132.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__36133))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__36128,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36132.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__36133))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__36128,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36132.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__36133))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,G__36128,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36132.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__36133))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,G__36128,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26439__auto__,G__36128),null));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26443__auto__){
var self__ = this;
var this__26443__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26430__auto__,G__36128){
var self__ = this;
var this__26430__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,G__36128,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26436__auto__,entry__26437__auto__){
var self__ = this;
var this__26436__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26437__auto__)){
return cljs.core._assoc.call(null,this__26436__auto____$1,cljs.core._nth.call(null,entry__26437__auto__,(0)),cljs.core._nth.call(null,entry__26437__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26436__auto____$1,entry__26437__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__36135){
var self__ = this;
var map__36136 = p__36135;
var map__36136__$1 = ((((!((map__36136 == null)))?((((map__36136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36136):map__36136);
var opts = map__36136__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__36136__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__36136__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__36136__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init7270842182740954461.clj",750,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__36136,map__36136__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__36136,map__36136__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4425__auto___36172 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___36172)){
var cb_uuid_36173 = temp__4425__auto___36172;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_36173], null),(function (){var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36138){if((e36138 instanceof Error)){
var __t = e36138;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e36138;

}
}})());

var temp__4425__auto___36174__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4425__auto___36174__$1)){
var timeout_ms_36175 = temp__4425__auto___36174__$1;
var c__29940__auto___36176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto___36176,timeout_ms_36175,temp__4425__auto___36174__$1,cb_uuid_36173,temp__4425__auto___36172,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36136,map__36136__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto___36176,timeout_ms_36175,temp__4425__auto___36174__$1,cb_uuid_36173,temp__4425__auto___36172,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36136,map__36136__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_36149){
var state_val_36150 = (state_36149[(1)]);
if((state_val_36150 === (1))){
var inst_36139 = cljs.core.async.timeout.call(null,timeout_ms_36175);
var state_36149__$1 = state_36149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36149__$1,(2),inst_36139);
} else {
if((state_val_36150 === (2))){
var inst_36142 = (state_36149[(7)]);
var inst_36141 = (state_36149[(2)]);
var inst_36142__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_36149__$1 = (function (){var statearr_36151 = state_36149;
(statearr_36151[(7)] = inst_36142__$1);

(statearr_36151[(8)] = inst_36141);

return statearr_36151;
})();
if(cljs.core.truth_(inst_36142__$1)){
var statearr_36152_36177 = state_36149__$1;
(statearr_36152_36177[(1)] = (3));

} else {
var statearr_36153_36178 = state_36149__$1;
(statearr_36153_36178[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36150 === (3))){
var inst_36142 = (state_36149[(7)]);
var inst_36144 = inst_36142.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_36149__$1 = state_36149;
var statearr_36154_36179 = state_36149__$1;
(statearr_36154_36179[(2)] = inst_36144);

(statearr_36154_36179[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36150 === (4))){
var state_36149__$1 = state_36149;
var statearr_36155_36180 = state_36149__$1;
(statearr_36155_36180[(2)] = null);

(statearr_36155_36180[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36150 === (5))){
var inst_36147 = (state_36149[(2)]);
var state_36149__$1 = state_36149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36149__$1,inst_36147);
} else {
return null;
}
}
}
}
}
});})(c__29940__auto___36176,timeout_ms_36175,temp__4425__auto___36174__$1,cb_uuid_36173,temp__4425__auto___36172,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36136,map__36136__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__29828__auto__,c__29940__auto___36176,timeout_ms_36175,temp__4425__auto___36174__$1,cb_uuid_36173,temp__4425__auto___36172,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36136,map__36136__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__29829__auto__ = null;
var taoensso$sente$state_machine__29829__auto____0 = (function (){
var statearr_36159 = [null,null,null,null,null,null,null,null,null];
(statearr_36159[(0)] = taoensso$sente$state_machine__29829__auto__);

(statearr_36159[(1)] = (1));

return statearr_36159;
});
var taoensso$sente$state_machine__29829__auto____1 = (function (state_36149){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_36149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e36160){if((e36160 instanceof Object)){
var ex__29832__auto__ = e36160;
var statearr_36161_36181 = state_36149;
(statearr_36161_36181[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36182 = state_36149;
state_36149 = G__36182;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
taoensso$sente$state_machine__29829__auto__ = function(state_36149){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29829__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29829__auto____1.call(this,state_36149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29829__auto____0;
taoensso$sente$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29829__auto____1;
return taoensso$sente$state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto___36176,timeout_ms_36175,temp__4425__auto___36174__$1,cb_uuid_36173,temp__4425__auto___36172,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36136,map__36136__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__29942__auto__ = (function (){var statearr_36162 = f__29941__auto__.call(null);
(statearr_36162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___36176);

return statearr_36162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto___36176,timeout_ms_36175,temp__4425__auto___36174__$1,cb_uuid_36173,temp__4425__auto___36172,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36136,map__36136__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e36163){if((e36163 instanceof Error)){
var e = e36163;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init7270842182740954461.clj",769,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36136,map__36136__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36136,map__36136__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

var temp__4425__auto___36183 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___36183)){
var cb_uuid_36184 = temp__4425__auto___36183;
var cb_fn_STAR__36185 = (function (){var or__25809__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_36184);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36164){if((e36164 instanceof Error)){
var __t = e36164;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e36164;

}
}}
})();
cb_fn_STAR__36185.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e36163;

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

var temp__4425__auto___36186 = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4425__auto___36186)){
var s_36187 = temp__4425__auto___36186;
s_36187.close((3000),"SENTE_RECONNECT");
} else {
}

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4425__auto__ = (function (){var or__25809__auto__ = taoensso.encore.oget.call(null,window,"WebSocket");
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
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

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init7270842182740954461.clj",800,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
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
}catch (e36168){if((e36168 instanceof Error)){
var e = e36168;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init7270842182740954461.clj",811,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_fn,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);

return null;
} else {
throw e36168;

}
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__36169 = _QMARK_socket;
(G__36169["onerror"] = ((function (G__36169,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init7270842182740954461.clj",820,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__36169,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",ws_ev], null);
});})(G__36169,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
});})(G__36169,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__36169["onmessage"] = ((function (G__36169,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__36170 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__36170,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__36170,(1),null);
var or__25809__auto__ = (function (){var and__25797__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__25797__auto__)){
return cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));
} else {
return and__25797__auto__;
}
})();
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
var temp__4423__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4423__auto__)){
var cb_uuid = temp__4423__auto__;
var temp__4423__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4423__auto____$1)){
var cb_fn = temp__4423__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init7270842182740954461.clj",838,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4423__auto____$1,cb_uuid,temp__4423__auto__,or__25809__auto__,ppstr,vec__36170,clj,_QMARK_cb_uuid,G__36169,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4423__auto____$1,cb_uuid,temp__4423__auto__,or__25809__auto__,ppstr,vec__36170,clj,_QMARK_cb_uuid,G__36169,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__36169,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__36169["onopen"] = ((function (G__36169,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__36169,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__36169,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__36169,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__36169["onclose"] = ((function (G__36169,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);
});})(G__36169,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

return G__36169;
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

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__26465__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__26465__auto__,writer__26466__auto__){
return cljs.core._write.call(null,writer__26466__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__36130){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__36130),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__36130),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__36130),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__36130),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__36130),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__36130),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__36130),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__36130),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__36130),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__36130),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__36130),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__36130),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__36130),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__36130),null,cljs.core.dissoc.call(null,G__36130,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)),null));
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
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26431__auto__,k__26432__auto__){
var self__ = this;
var this__26431__auto____$1 = this;
return cljs.core._lookup.call(null,this__26431__auto____$1,k__26432__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26433__auto__,k36189,else__26434__auto__){
var self__ = this;
var this__26433__auto____$1 = this;
var G__36191 = (((k36189 instanceof cljs.core.Keyword))?k36189.fqn:null);
switch (G__36191) {
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
return cljs.core.get.call(null,self__.__extmap,k36189,else__26434__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26445__auto__,writer__26446__auto__,opts__26447__auto__){
var self__ = this;
var this__26445__auto____$1 = this;
var pr_pair__26448__auto__ = ((function (this__26445__auto____$1){
return (function (keyval__26449__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26446__auto__,cljs.core.pr_writer,""," ","",opts__26447__auto__,keyval__26449__auto__);
});})(this__26445__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26446__auto__,pr_pair__26448__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__26447__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36188){
var self__ = this;
var G__36188__$1 = this;
return (new cljs.core.RecordIter((0),G__36188__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26429__auto__){
var self__ = this;
var this__26429__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26425__auto__){
var self__ = this;
var this__26425__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26435__auto__){
var self__ = this;
var this__26435__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26426__auto__){
var self__ = this;
var this__26426__auto____$1 = this;
var h__26244__auto__ = self__.__hash;
if(!((h__26244__auto__ == null))){
return h__26244__auto__;
} else {
var h__26244__auto____$1 = cljs.core.hash_imap.call(null,this__26426__auto____$1);
self__.__hash = h__26244__auto____$1;

return h__26244__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26427__auto__,other__26428__auto__){
var self__ = this;
var this__26427__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25797__auto__ = other__26428__auto__;
if(cljs.core.truth_(and__25797__auto__)){
var and__25797__auto____$1 = (this__26427__auto____$1.constructor === other__26428__auto__.constructor);
if(and__25797__auto____$1){
return cljs.core.equiv_map.call(null,this__26427__auto____$1,other__26428__auto__);
} else {
return and__25797__auto____$1;
}
} else {
return and__25797__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26440__auto__,k__26441__auto__){
var self__ = this;
var this__26440__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__26441__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26440__auto____$1),self__.__meta),k__26441__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26441__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26438__auto__,k__26439__auto__,G__36188){
var self__ = this;
var this__26438__auto____$1 = this;
var pred__36192 = cljs.core.keyword_identical_QMARK_;
var expr__36193 = k__26439__auto__;
if(cljs.core.truth_(pred__36192.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__36193))){
return (new taoensso.sente.ChAjaxSocket(G__36188,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36192.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__36193))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__36188,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36192.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__36193))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__36188,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36192.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__36193))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__36188,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36192.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__36193))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__36188,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36192.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__36193))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__36188,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36192.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__36193))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__36188,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36192.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__36193))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,G__36188,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36192.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__36193))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,G__36188,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36192.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__36193))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__36188,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36192.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__36193))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,G__36188,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26439__auto__,G__36188),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26443__auto__){
var self__ = this;
var this__26443__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26430__auto__,G__36188){
var self__ = this;
var this__26430__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,G__36188,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26436__auto__,entry__26437__auto__){
var self__ = this;
var this__26436__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26437__auto__)){
return cljs.core._assoc.call(null,this__26436__auto____$1,cljs.core._nth.call(null,entry__26437__auto__,(0)),cljs.core._nth.call(null,entry__26437__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26436__auto____$1,entry__26437__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__36195){
var self__ = this;
var map__36196 = p__36195;
var map__36196__$1 = ((((!((map__36196 == null)))?((((map__36196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36196):map__36196);
var opts = map__36196__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__36196__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__36196__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__36196__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init7270842182740954461.clj",879,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__36196,map__36196__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__36196,map__36196__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
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
})()], null)),((function (csrf_token,_QMARK_cb_fn,chsk__$1,map__36196,map__36196__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__36198){
var map__36202 = p__36198;
var map__36202__$1 = ((((!((map__36202 == null)))?((((map__36202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36202):map__36202);
var _QMARK_error = cljs.core.get.call(null,map__36202__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__36202__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
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
var vec__36204 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__36204,(0),null);
var _ = cljs.core.nth.call(null,vec__36204,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init7270842182740954461.clj",919,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__36204,resp_clj,_,map__36202,map__36202__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__36196,map__36196__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__36204,resp_clj,_,map__36202,map__36202__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__36196,map__36196__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(csrf_token,_QMARK_cb_fn,chsk__$1,map__36196,map__36196__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
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

var temp__4425__auto___36220 = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4425__auto___36220)){
var x_36221 = temp__4425__auto___36220;
x_36221.abort();
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7270842182740954461.clj",940,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(retry_id,chsk__$1))
,null)),null);

var retry_fn = ((function (retry_id,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init7270842182740954461.clj",946,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
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
return (function taoensso$sente$poll_fn_$_ajax_cb(p__36212){
var map__36216 = p__36212;
var map__36216__$1 = ((((!((map__36216 == null)))?((((map__36216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36216):map__36216);
var _QMARK_error = cljs.core.get.call(null,map__36216__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__36216__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
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
var vec__36218 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__36218,(0),null);
var _ = cljs.core.nth.call(null,vec__36218,(1),null);
var or__25809__auto___36222 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__25809__auto___36222)){
} else {
var buffered_evs_36223 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_36223);

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

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__26465__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__26465__auto__,writer__26466__auto__){
return cljs.core._write.call(null,writer__26466__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__36190){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__36190),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__36190),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__36190),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__36190),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__36190),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__36190),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__36190),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__36190),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__36190),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__36190),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__36190),null,cljs.core.dissoc.call(null,G__36190,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)),null));
});

taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__36225 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36225) {
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
var args__26886__auto__ = [];
var len__26879__auto___36241 = arguments.length;
var i__26880__auto___36242 = (0);
while(true){
if((i__26880__auto___36242 < len__26879__auto___36241)){
args__26886__auto__.push((arguments[i__26880__auto___36242]));

var G__36243 = (i__26880__auto___36242 + (1));
i__26880__auto___36242 = G__36243;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__36230){
var vec__36231 = p__36230;
var map__36232 = cljs.core.nth.call(null,vec__36231,(0),null);
var map__36232__$1 = ((((!((map__36232 == null)))?((((map__36232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36232):map__36232);
var opts = map__36232__$1;
var ajax_opts = cljs.core.get.call(null,map__36232__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__36232__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__36232__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var client_id = cljs.core.get.call(null,map__36232__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__25809__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__36232__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__36232__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__36232__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__36232__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__36232__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__36232__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__36232__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__36231,(1),null);
if(cljs.core.truth_((function (){var __x = type;
try{if(((function (__x,vec__36231,map__36232,map__36232__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (__x__$1){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),__x__$1);
});})(__x,vec__36231,map__36232,map__36232__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36234){if((e36234 instanceof Error)){
var __t = e36234;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",__x,__t,null);
} else {
throw e36234;

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
}catch (e36235){if((e36235 instanceof Error)){
var __t = e36235;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",__x,__t,null);
} else {
throw e36235;

}
}})())){
} else {
throw (new Error("Assert failed: (have? enc/nblank-str? client-id)"));
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init7270842182740954461.clj",1055,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36231,map__36232,map__36232__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__36231,map__36232,map__36232__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init7270842182740954461.clj",1057,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36231,map__36232,map__36232__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__36231,map__36232,map__36232__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var win_location = taoensso.encore.get_window_location.call(null);
var win_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_location);
var host__$1 = (function (){var or__25809__auto__ = host;
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var path__$1 = (function (){var or__25809__auto__ = path;
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__36231,map__36232,map__36232__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__25809__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__25809__auto__){
return or__25809__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__36231,map__36232,map__36232__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36231,map__36232,map__36232__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36231,map__36232,map__36232__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),(function (){var _LT_server_ch = new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs);
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36231,map__36232,map__36232__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36231,map__36232,map__36232__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
} else {
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36231,map__36232,map__36232__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__36236 = ev;
var id = cljs.core.nth.call(null,vec__36236,(0),null);
var _QMARK_data = cljs.core.nth.call(null,vec__36236,(1),null);
var __x_36244 = (function (){try{return cljs.core.namespace.call(null,id);
}catch (e36237){if((e36237 instanceof Error)){
var __t = e36237;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__36227#] (not= p1__36227# \"chsk\")) (namespace id))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e36237;

}
}})();
try{if(((function (__x_36244,vec__36236,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36231,map__36232,map__36232__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (p1__36227_SHARP_){
return cljs.core.not_EQ_.call(null,p1__36227_SHARP_,"chsk");
});})(__x_36244,vec__36236,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36231,map__36232,map__36232__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x_36244)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36238){if((e36238 instanceof Error)){
var __t_36245 = e36238;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__36227#] (not= p1__36227# \"chsk\")) (namespace id))",__x_36244,__t_36245,null);
} else {
throw e36238;

}
}
return ev;
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36231,map__36232,map__36232__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
}
})()], null));
var chsk = (function (){var or__25809__auto__ = (function (){var and__25797__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__25797__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,packer__$1,private_chs,params,cljs.core.atom.call(null,(0)),backoff_ms_fn,cljs.core.atom.call(null,null),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ws","ws",86841443));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
}
})(),cljs.core.atom.call(null,"pending"),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__25797__auto__;
}
})();
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
var and__25797__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__25797__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"state_","state_",957667102)],[cljs.core.atom.call(null,null),client_id,packer__$1,private_chs,params,backoff_ms_fn,(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
}
})(),cljs.core.atom.call(null,"pending"),ajax_opts,lp_timeout_ms,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__25797__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str("chsk")].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__36231,map__36232,map__36232__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__36240 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__36240,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__36240,(1),null);
var ev__$1 = vec__36240;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__36231,map__36232,map__36232__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq36228){
var G__36229 = cljs.core.first.call(null,seq36228);
var seq36228__$1 = cljs.core.next.call(null,seq36228);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36229,seq36228__$1);
});
taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__36452 = opts;
var map__36452__$1 = ((((!((map__36452 == null)))?((((map__36452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36452):map__36452);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36452__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36452__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__29940__auto___36658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto___36658,map__36452,map__36452__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto___36658,map__36452,map__36452__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (state_36583){
var state_val_36584 = (state_36583[(1)]);
if((state_val_36584 === (7))){
var inst_36579 = (state_36583[(2)]);
var state_36583__$1 = state_36583;
var statearr_36585_36659 = state_36583__$1;
(statearr_36585_36659[(2)] = inst_36579);

(statearr_36585_36659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (20))){
var inst_36488 = (state_36583[(7)]);
var inst_36461 = (state_36583[(8)]);
var inst_36460 = (state_36583[(9)]);
var inst_36463 = (state_36583[(10)]);
var inst_36462 = (state_36583[(11)]);
var inst_36487 = (state_36583[(12)]);
var inst_36498 = (function (){var vec__36455 = inst_36460;
var v = inst_36461;
var p = inst_36462;
var stop_QMARK_ = inst_36463;
var map__36466 = inst_36487;
var event_msg = inst_36487;
var event = inst_36488;
return ((function (vec__36455,v,p,stop_QMARK_,map__36466,event_msg,event,inst_36488,inst_36461,inst_36460,inst_36463,inst_36462,inst_36487,state_val_36584,c__29940__auto___36658,map__36452,map__36452__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__36455,v,p,stop_QMARK_,map__36466,event_msg,event,inst_36488,inst_36461,inst_36460,inst_36463,inst_36462,inst_36487,state_val_36584,c__29940__auto___36658,map__36452,map__36452__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_36499 = (new cljs.core.Delay(inst_36498,null));
var inst_36500 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init7270842182740954461.clj",1176,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_36499,null);
var state_36583__$1 = state_36583;
var statearr_36586_36660 = state_36583__$1;
(statearr_36586_36660[(2)] = inst_36500);

(statearr_36586_36660[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (27))){
var inst_36487 = (state_36583[(12)]);
var inst_36505 = (state_36583[(2)]);
var inst_36506 = "(server-event-msg? event-msg)";
var inst_36507 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_36506,inst_36487,inst_36505,null);
var state_36583__$1 = state_36583;
var statearr_36587_36661 = state_36583__$1;
(statearr_36587_36661[(2)] = inst_36507);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36583__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (1))){
var state_36583__$1 = state_36583;
var statearr_36588_36662 = state_36583__$1;
(statearr_36588_36662[(2)] = null);

(statearr_36588_36662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (24))){
var state_36583__$1 = state_36583;
var statearr_36589_36663 = state_36583__$1;
(statearr_36589_36663[(2)] = null);

(statearr_36589_36663[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (39))){
var state_36583__$1 = state_36583;
var statearr_36590_36664 = state_36583__$1;
(statearr_36590_36664[(2)] = null);

(statearr_36590_36664[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (46))){
var inst_36552 = (state_36583[(13)]);
var inst_36560 = (state_36583[(2)]);
var inst_36561 = [inst_36560,null];
var inst_36562 = (new cljs.core.PersistentVector(null,2,(5),inst_36552,inst_36561,null));
var state_36583__$1 = state_36583;
var statearr_36591_36665 = state_36583__$1;
(statearr_36591_36665[(2)] = inst_36562);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36583__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (4))){
var inst_36460 = (state_36583[(9)]);
var inst_36463 = (state_36583[(10)]);
var inst_36462 = (state_36583[(11)]);
var inst_36460__$1 = (state_36583[(2)]);
var inst_36461 = cljs.core.nth.call(null,inst_36460__$1,(0),null);
var inst_36462__$1 = cljs.core.nth.call(null,inst_36460__$1,(1),null);
var inst_36463__$1 = taoensso.encore.kw_identical_QMARK_.call(null,inst_36462__$1,ch_ctrl);
var state_36583__$1 = (function (){var statearr_36592 = state_36583;
(statearr_36592[(8)] = inst_36461);

(statearr_36592[(9)] = inst_36460__$1);

(statearr_36592[(10)] = inst_36463__$1);

(statearr_36592[(11)] = inst_36462__$1);

return statearr_36592;
})();
if(cljs.core.truth_(inst_36463__$1)){
var statearr_36593_36666 = state_36583__$1;
(statearr_36593_36666[(1)] = (5));

} else {
var statearr_36594_36667 = state_36583__$1;
(statearr_36594_36667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (15))){
var inst_36461 = (state_36583[(8)]);
var state_36583__$1 = state_36583;
var statearr_36595_36668 = state_36583__$1;
(statearr_36595_36668[(2)] = inst_36461);

(statearr_36595_36668[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (48))){
var state_36583__$1 = state_36583;
var statearr_36596_36669 = state_36583__$1;
(statearr_36596_36669[(2)] = null);

(statearr_36596_36669[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (21))){
var state_36583__$1 = state_36583;
var statearr_36597_36670 = state_36583__$1;
(statearr_36597_36670[(2)] = null);

(statearr_36597_36670[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (31))){
var inst_36516 = (state_36583[(2)]);
var state_36583__$1 = state_36583;
var statearr_36598_36671 = state_36583__$1;
(statearr_36598_36671[(2)] = inst_36516);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36583__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (32))){
var inst_36533 = (state_36583[(2)]);
var state_36583__$1 = state_36583;
var statearr_36599_36672 = state_36583__$1;
(statearr_36599_36672[(2)] = inst_36533);

(statearr_36599_36672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (40))){
var inst_36576 = (state_36583[(2)]);
var state_36583__$1 = (function (){var statearr_36600 = state_36583;
(statearr_36600[(14)] = inst_36576);

return statearr_36600;
})();
var statearr_36601_36673 = state_36583__$1;
(statearr_36601_36673[(2)] = null);

(statearr_36601_36673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (33))){
var inst_36487 = (state_36583[(12)]);
var inst_36520 = (state_36583[(2)]);
var inst_36521 = "(client-event-msg? event-msg)";
var inst_36522 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_36521,inst_36487,inst_36520,null);
var state_36583__$1 = state_36583;
var statearr_36602_36674 = state_36583__$1;
(statearr_36602_36674[(2)] = inst_36522);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36583__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (13))){
var inst_36479 = (state_36583[(2)]);
var state_36583__$1 = state_36583;
var statearr_36603_36675 = state_36583__$1;
(statearr_36603_36675[(2)] = inst_36479);

(statearr_36603_36675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (22))){
var inst_36503 = (state_36583[(2)]);
var state_36583__$1 = (function (){var statearr_36604 = state_36583;
(statearr_36604[(15)] = inst_36503);

return statearr_36604;
})();
if(cljs.core.truth_(server_QMARK_)){
var statearr_36605_36676 = state_36583__$1;
(statearr_36605_36676[(1)] = (23));

} else {
var statearr_36606_36677 = state_36583__$1;
(statearr_36606_36677[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (36))){
var inst_36529 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_36583__$1 = state_36583;
var statearr_36607_36678 = state_36583__$1;
(statearr_36607_36678[(2)] = inst_36529);

(statearr_36607_36678[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (41))){
var inst_36564 = (state_36583[(16)]);
var inst_36566 = (state_36583[(17)]);
var inst_36564__$1 = (state_36583[(2)]);
var inst_36565 = cljs.core.nth.call(null,inst_36564__$1,(0),null);
var inst_36566__$1 = cljs.core.nth.call(null,inst_36564__$1,(1),null);
var state_36583__$1 = (function (){var statearr_36608 = state_36583;
(statearr_36608[(16)] = inst_36564__$1);

(statearr_36608[(18)] = inst_36565);

(statearr_36608[(17)] = inst_36566__$1);

return statearr_36608;
})();
if(cljs.core.truth_(inst_36566__$1)){
var statearr_36609_36679 = state_36583__$1;
(statearr_36609_36679[(1)] = (47));

} else {
var statearr_36610_36680 = state_36583__$1;
(statearr_36610_36680[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (43))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36583,(42),Error,null,(41));
var inst_36552 = cljs.core.PersistentVector.EMPTY_NODE;
var state_36583__$1 = (function (){var statearr_36611 = state_36583;
(statearr_36611[(13)] = inst_36552);

return statearr_36611;
})();
if(cljs.core.truth_(error_handler)){
var statearr_36612_36681 = state_36583__$1;
(statearr_36612_36681[(1)] = (44));

} else {
var statearr_36613_36682 = state_36583__$1;
(statearr_36613_36682[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (29))){
var inst_36487 = (state_36583[(12)]);
var state_36583__$1 = state_36583;
var statearr_36614_36683 = state_36583__$1;
(statearr_36614_36683[(2)] = inst_36487);

(statearr_36614_36683[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (44))){
var inst_36542 = (state_36583[(19)]);
var inst_36487 = (state_36583[(12)]);
var inst_36554 = error_handler.call(null,inst_36542,inst_36487);
var state_36583__$1 = state_36583;
var statearr_36615_36684 = state_36583__$1;
(statearr_36615_36684[(2)] = inst_36554);

(statearr_36615_36684[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (6))){
var inst_36461 = (state_36583[(8)]);
var inst_36469 = (inst_36461 == null);
var inst_36470 = cljs.core.not.call(null,inst_36469);
var state_36583__$1 = state_36583;
if(inst_36470){
var statearr_36616_36685 = state_36583__$1;
(statearr_36616_36685[(1)] = (8));

} else {
var statearr_36617_36686 = state_36583__$1;
(statearr_36617_36686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (28))){
var inst_36487 = (state_36583[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36583,(27),Error,null,(26));
var inst_36511 = taoensso.sente.server_event_msg_QMARK_.call(null,inst_36487);
var state_36583__$1 = state_36583;
if(cljs.core.truth_(inst_36511)){
var statearr_36618_36687 = state_36583__$1;
(statearr_36618_36687[(1)] = (29));

} else {
var statearr_36619_36688 = state_36583__$1;
(statearr_36619_36688[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (25))){
var inst_36496 = (state_36583[(20)]);
var inst_36535 = (state_36583[(2)]);
var inst_36536 = event_msg_handler.call(null,inst_36535);
var inst_36537 = [inst_36536,null];
var inst_36538 = (new cljs.core.PersistentVector(null,2,(5),inst_36496,inst_36537,null));
var state_36583__$1 = state_36583;
var statearr_36620_36689 = state_36583__$1;
(statearr_36620_36689[(2)] = inst_36538);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36583__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (34))){
var inst_36487 = (state_36583[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36583,(33),Error,null,(32));
var inst_36526 = taoensso.sente.client_event_msg_QMARK_.call(null,inst_36487);
var state_36583__$1 = state_36583;
if(cljs.core.truth_(inst_36526)){
var statearr_36621_36690 = state_36583__$1;
(statearr_36621_36690[(1)] = (35));

} else {
var statearr_36622_36691 = state_36583__$1;
(statearr_36622_36691[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (17))){
var inst_36540 = (state_36583[(21)]);
var inst_36542 = (state_36583[(19)]);
var inst_36540__$1 = (state_36583[(2)]);
var inst_36541 = cljs.core.nth.call(null,inst_36540__$1,(0),null);
var inst_36542__$1 = cljs.core.nth.call(null,inst_36540__$1,(1),null);
var state_36583__$1 = (function (){var statearr_36623 = state_36583;
(statearr_36623[(21)] = inst_36540__$1);

(statearr_36623[(19)] = inst_36542__$1);

(statearr_36623[(22)] = inst_36541);

return statearr_36623;
})();
if(cljs.core.truth_(inst_36542__$1)){
var statearr_36624_36692 = state_36583__$1;
(statearr_36624_36692[(1)] = (38));

} else {
var statearr_36625_36693 = state_36583__$1;
(statearr_36625_36693[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (3))){
var inst_36581 = (state_36583[(2)]);
var state_36583__$1 = state_36583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36583__$1,inst_36581);
} else {
if((state_val_36584 === (12))){
var state_36583__$1 = state_36583;
var statearr_36626_36694 = state_36583__$1;
(statearr_36626_36694[(2)] = false);

(statearr_36626_36694[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (2))){
var inst_36456 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36457 = [ch_recv,ch_ctrl];
var inst_36458 = (new cljs.core.PersistentVector(null,2,(5),inst_36456,inst_36457,null));
var state_36583__$1 = state_36583;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36583__$1,(4),inst_36458);
} else {
if((state_val_36584 === (23))){
var state_36583__$1 = state_36583;
var statearr_36627_36695 = state_36583__$1;
(statearr_36627_36695[(2)] = null);

(statearr_36627_36695[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (47))){
var inst_36488 = (state_36583[(7)]);
var inst_36564 = (state_36583[(16)]);
var inst_36461 = (state_36583[(8)]);
var inst_36540 = (state_36583[(21)]);
var inst_36565 = (state_36583[(18)]);
var inst_36542 = (state_36583[(19)]);
var inst_36460 = (state_36583[(9)]);
var inst_36463 = (state_36583[(10)]);
var inst_36462 = (state_36583[(11)]);
var inst_36566 = (state_36583[(17)]);
var inst_36487 = (state_36583[(12)]);
var inst_36568 = (function (){var p = inst_36462;
var vec__36455 = inst_36460;
var _QMARK_error = inst_36542;
var temp__4425__auto__ = inst_36566;
var v = inst_36461;
var _ = inst_36565;
var e2 = inst_36566;
var vec__36544 = inst_36564;
var _QMARK_error2 = inst_36566;
var event_msg = inst_36487;
var map__36466 = inst_36487;
var e = inst_36542;
var vec__36467 = inst_36540;
var event = inst_36488;
var stop_QMARK_ = inst_36463;
return ((function (p,vec__36455,_QMARK_error,temp__4425__auto__,v,_,e2,vec__36544,_QMARK_error2,event_msg,map__36466,e,vec__36467,event,stop_QMARK_,inst_36488,inst_36564,inst_36461,inst_36540,inst_36565,inst_36542,inst_36460,inst_36463,inst_36462,inst_36566,inst_36487,state_val_36584,c__29940__auto___36658,map__36452,map__36452__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});
;})(p,vec__36455,_QMARK_error,temp__4425__auto__,v,_,e2,vec__36544,_QMARK_error2,event_msg,map__36466,e,vec__36467,event,stop_QMARK_,inst_36488,inst_36564,inst_36461,inst_36540,inst_36565,inst_36542,inst_36460,inst_36463,inst_36462,inst_36566,inst_36487,state_val_36584,c__29940__auto___36658,map__36452,map__36452__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_36569 = (new cljs.core.Delay(inst_36568,null));
var inst_36570 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init7270842182740954461.clj",1189,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_36569,null);
var state_36583__$1 = state_36583;
var statearr_36628_36696 = state_36583__$1;
(statearr_36628_36696[(2)] = inst_36570);

(statearr_36628_36696[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (35))){
var inst_36487 = (state_36583[(12)]);
var state_36583__$1 = state_36583;
var statearr_36629_36697 = state_36583__$1;
(statearr_36629_36697[(2)] = inst_36487);

(statearr_36629_36697[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36583,(18),Error,null,(17));
var inst_36496 = cljs.core.PersistentVector.EMPTY_NODE;
var state_36583__$1 = (function (){var statearr_36630 = state_36583;
(statearr_36630[(20)] = inst_36496);

return statearr_36630;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_36631_36698 = state_36583__$1;
(statearr_36631_36698[(1)] = (20));

} else {
var statearr_36632_36699 = state_36583__$1;
(statearr_36632_36699[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (11))){
var state_36583__$1 = state_36583;
var statearr_36633_36700 = state_36583__$1;
(statearr_36633_36700[(2)] = true);

(statearr_36633_36700[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (9))){
var state_36583__$1 = state_36583;
var statearr_36634_36701 = state_36583__$1;
(statearr_36634_36701[(2)] = false);

(statearr_36634_36701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (5))){
var state_36583__$1 = state_36583;
var statearr_36635_36702 = state_36583__$1;
(statearr_36635_36702[(2)] = null);

(statearr_36635_36702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (14))){
var inst_36461 = (state_36583[(8)]);
var inst_36484 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36461);
var state_36583__$1 = state_36583;
var statearr_36636_36703 = state_36583__$1;
(statearr_36636_36703[(2)] = inst_36484);

(statearr_36636_36703[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (45))){
var inst_36488 = (state_36583[(7)]);
var inst_36461 = (state_36583[(8)]);
var inst_36540 = (state_36583[(21)]);
var inst_36542 = (state_36583[(19)]);
var inst_36541 = (state_36583[(22)]);
var inst_36460 = (state_36583[(9)]);
var inst_36463 = (state_36583[(10)]);
var inst_36462 = (state_36583[(11)]);
var inst_36487 = (state_36583[(12)]);
var inst_36556 = (function (){var p = inst_36462;
var vec__36455 = inst_36460;
var _QMARK_error = inst_36542;
var temp__4425__auto__ = inst_36542;
var v = inst_36461;
var temp__4423__auto__ = error_handler;
var _ = inst_36541;
var event_msg = inst_36487;
var map__36466 = inst_36487;
var e = inst_36542;
var vec__36467 = inst_36540;
var event = inst_36488;
var stop_QMARK_ = inst_36463;
return ((function (p,vec__36455,_QMARK_error,temp__4425__auto__,v,temp__4423__auto__,_,event_msg,map__36466,e,vec__36467,event,stop_QMARK_,inst_36488,inst_36461,inst_36540,inst_36542,inst_36541,inst_36460,inst_36463,inst_36462,inst_36487,state_val_36584,c__29940__auto___36658,map__36452,map__36452__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router `event-msg-handler` error: %s",event], null);
});
;})(p,vec__36455,_QMARK_error,temp__4425__auto__,v,temp__4423__auto__,_,event_msg,map__36466,e,vec__36467,event,stop_QMARK_,inst_36488,inst_36461,inst_36540,inst_36542,inst_36541,inst_36460,inst_36463,inst_36462,inst_36487,state_val_36584,c__29940__auto___36658,map__36452,map__36452__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_36557 = (new cljs.core.Delay(inst_36556,null));
var inst_36558 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init7270842182740954461.clj",1187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_36557,null);
var state_36583__$1 = state_36583;
var statearr_36637_36704 = state_36583__$1;
(statearr_36637_36704[(2)] = inst_36558);

(statearr_36637_36704[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (26))){
var inst_36518 = (state_36583[(2)]);
var state_36583__$1 = state_36583;
var statearr_36638_36705 = state_36583__$1;
(statearr_36638_36705[(2)] = inst_36518);

(statearr_36638_36705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (16))){
var inst_36487 = (state_36583[(12)]);
var inst_36487__$1 = (state_36583[(2)]);
var inst_36488 = cljs.core.get.call(null,inst_36487__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_36583__$1 = (function (){var statearr_36639 = state_36583;
(statearr_36639[(7)] = inst_36488);

(statearr_36639[(12)] = inst_36487__$1);

return statearr_36639;
})();
var statearr_36640_36706 = state_36583__$1;
(statearr_36640_36706[(2)] = null);

(statearr_36640_36706[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (38))){
var state_36583__$1 = state_36583;
var statearr_36641_36707 = state_36583__$1;
(statearr_36641_36707[(2)] = null);

(statearr_36641_36707[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (30))){
var inst_36514 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_36583__$1 = state_36583;
var statearr_36642_36708 = state_36583__$1;
(statearr_36642_36708[(2)] = inst_36514);

(statearr_36642_36708[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (10))){
var inst_36482 = (state_36583[(2)]);
var state_36583__$1 = state_36583;
if(cljs.core.truth_(inst_36482)){
var statearr_36643_36709 = state_36583__$1;
(statearr_36643_36709[(1)] = (14));

} else {
var statearr_36644_36710 = state_36583__$1;
(statearr_36644_36710[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (18))){
var inst_36489 = (state_36583[(2)]);
var inst_36490 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36491 = [null,inst_36489];
var inst_36492 = (new cljs.core.PersistentVector(null,2,(5),inst_36490,inst_36491,null));
var state_36583__$1 = state_36583;
var statearr_36645_36711 = state_36583__$1;
(statearr_36645_36711[(2)] = inst_36492);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36583__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (42))){
var inst_36545 = (state_36583[(2)]);
var inst_36546 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36547 = [null,inst_36545];
var inst_36548 = (new cljs.core.PersistentVector(null,2,(5),inst_36546,inst_36547,null));
var state_36583__$1 = state_36583;
var statearr_36646_36712 = state_36583__$1;
(statearr_36646_36712[(2)] = inst_36548);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36583__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (37))){
var inst_36531 = (state_36583[(2)]);
var state_36583__$1 = state_36583;
var statearr_36647_36713 = state_36583__$1;
(statearr_36647_36713[(2)] = inst_36531);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36583__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (8))){
var inst_36461 = (state_36583[(8)]);
var inst_36472 = inst_36461.cljs$lang$protocol_mask$partition0$;
var inst_36473 = (inst_36472 & (64));
var inst_36474 = inst_36461.cljs$core$ISeq$;
var inst_36475 = (inst_36473) || (inst_36474);
var state_36583__$1 = state_36583;
if(cljs.core.truth_(inst_36475)){
var statearr_36648_36714 = state_36583__$1;
(statearr_36648_36714[(1)] = (11));

} else {
var statearr_36649_36715 = state_36583__$1;
(statearr_36649_36715[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36584 === (49))){
var inst_36573 = (state_36583[(2)]);
var state_36583__$1 = state_36583;
var statearr_36650_36716 = state_36583__$1;
(statearr_36650_36716[(2)] = inst_36573);

(statearr_36650_36716[(1)] = (40));


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
});})(c__29940__auto___36658,map__36452,map__36452__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
;
return ((function (switch__29828__auto__,c__29940__auto___36658,map__36452,map__36452__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29829__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29829__auto____0 = (function (){
var statearr_36654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36654[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29829__auto__);

(statearr_36654[(1)] = (1));

return statearr_36654;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29829__auto____1 = (function (state_36583){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_36583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e36655){if((e36655 instanceof Object)){
var ex__29832__auto__ = e36655;
var statearr_36656_36717 = state_36583;
(statearr_36656_36717[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36718 = state_36583;
state_36583 = G__36718;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29829__auto__ = function(state_36583){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29829__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29829__auto____1.call(this,state_36583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29829__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29829__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto___36658,map__36452,map__36452__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var state__29942__auto__ = (function (){var statearr_36657 = f__29941__auto__.call(null);
(statearr_36657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___36658);

return statearr_36657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto___36658,map__36452,map__36452__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
);


return ((function (map__36452,map__36452__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__36452,map__36452__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
});
/**
 * Creates a go-loop to call `(event-msg-handler <server-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__26886__auto__ = [];
var len__26879__auto___36726 = arguments.length;
var i__26880__auto___36727 = (0);
while(true){
if((i__26880__auto___36727 < len__26879__auto___36726)){
args__26886__auto__.push((arguments[i__26880__auto___36727]));

var G__36728 = (i__26880__auto___36727 + (1));
i__26880__auto___36727 = G__36728;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((2) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26887__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__36722){
var vec__36723 = p__36722;
var map__36724 = cljs.core.nth.call(null,vec__36723,(0),null);
var map__36724__$1 = ((((!((map__36724 == null)))?((((map__36724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36724):map__36724);
var opts = map__36724__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36724__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36724__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq36719){
var G__36720 = cljs.core.first.call(null,seq36719);
var seq36719__$1 = cljs.core.next.call(null,seq36719);
var G__36721 = cljs.core.first.call(null,seq36719__$1);
var seq36719__$2 = cljs.core.next.call(null,seq36719__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36720,G__36721,seq36719__$2);
});
/**
 * Creates a go-loop to call `(event-msg-handler <client-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__26886__auto__ = [];
var len__26879__auto___36736 = arguments.length;
var i__26880__auto___36737 = (0);
while(true){
if((i__26880__auto___36737 < len__26879__auto___36736)){
args__26886__auto__.push((arguments[i__26880__auto___36737]));

var G__36738 = (i__26880__auto___36737 + (1));
i__26880__auto___36737 = G__36738;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((2) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26887__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__36732){
var vec__36733 = p__36732;
var map__36734 = cljs.core.nth.call(null,vec__36733,(0),null);
var map__36734__$1 = ((((!((map__36734 == null)))?((((map__36734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36734):map__36734);
var opts = map__36734__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36734__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36734__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq36729){
var G__36730 = cljs.core.first.call(null,seq36729);
var seq36729__$1 = cljs.core.next.call(null,seq36729);
var G__36731 = cljs.core.first.call(null,seq36729__$1);
var seq36729__$2 = cljs.core.next.call(null,seq36729__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36730,G__36731,seq36729__$2);
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__36739,websocket_QMARK_){
var map__36742 = p__36739;
var map__36742__$1 = ((((!((map__36742 == null)))?((((map__36742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36742):map__36742);
var location = map__36742__$1;
var adjusted_protocol = cljs.core.get.call(null,map__36742__$1,new cljs.core.Keyword(null,"adjusted-protocol","adjusted-protocol",37431492));
var host = cljs.core.get.call(null,map__36742__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__36742__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str(adjusted_protocol),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__25809__auto__ = path;
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map