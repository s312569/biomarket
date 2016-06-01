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
var vec__35598 = x;
var ev_id = cljs.core.nth.call(null,vec__35598,(0),null);
var _ = cljs.core.nth.call(null,vec__35598,(1),null);
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
var err_fmt = [cljs.core.str((function (){var G__35600 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__35600) {
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
var and__25800__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__25800__auto__){
var and__25800__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__25800__auto____$1)){
var map__35604 = x;
var map__35604__$1 = ((((!((map__35604 == null)))?((((map__35604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35604):map__35604);
var ch_recv = cljs.core.get.call(null,map__35604__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__35604__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__35604__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__35604__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__25800__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__25800__auto____$2)){
var and__25800__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__25800__auto____$3){
var and__25800__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(cljs.core.truth_(and__25800__auto____$4)){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__25800__auto____$4;
}
} else {
return and__25800__auto____$3;
}
} else {
return and__25800__auto____$2;
}
} else {
return and__25800__auto____$1;
}
} else {
return and__25800__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__25800__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__25800__auto__){
var and__25800__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__25800__auto____$1)){
var map__35608 = x;
var map__35608__$1 = ((((!((map__35608 == null)))?((((map__35608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35608):map__35608);
var ch_recv = cljs.core.get.call(null,map__35608__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__35608__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__35608__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__35608__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__35608__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__35608__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__35608__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__25800__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__25800__auto____$2)){
var and__25800__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__25800__auto____$3){
var and__25800__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(cljs.core.truth_(and__25800__auto____$4)){
var and__25800__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__25800__auto____$5){
var and__25800__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(cljs.core.truth_(and__25800__auto____$6)){
var and__25800__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__25800__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__25800__auto____$7;
}
} else {
return and__25800__auto____$6;
}
} else {
return and__25800__auto____$5;
}
} else {
return and__25800__auto____$4;
}
} else {
return and__25800__auto____$3;
}
} else {
return and__25800__auto____$2;
}
} else {
return and__25800__auto____$1;
}
} else {
return and__25800__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__35610){
var map__35614 = p__35610;
var map__35614__$1 = ((((!((map__35614 == null)))?((((map__35614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35614):map__35614);
var ev_msg = map__35614__$1;
var event = cljs.core.get.call(null,map__35614__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__35614__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__35616 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__35616,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__35616,(1),null);
var valid_event = vec__35616;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4224527391354244256.clj",159,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__35616,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__35614,map__35614__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__35616,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__35614,map__35614__$1,ev_msg,event,_QMARK_reply_fn))
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
}catch (e35620){if((e35620 instanceof Error)){
var __t = e35620;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? pstr)",__x,__t,null);
} else {
throw e35620;

}
}})());
}catch (e35619){var t = e35619;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init4224527391354244256.clj",175,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t){
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
var args35621 = [];
var len__26882__auto___35624 = arguments.length;
var i__26883__auto___35625 = (0);
while(true){
if((i__26883__auto___35625 < len__26882__auto___35624)){
args35621.push((arguments[i__26883__auto___35625]));

var G__35626 = (i__26883__auto___35625 + (1));
i__26883__auto___35625 = G__35626;
continue;
} else {
}
break;
}

var G__35623 = args35621.length;
switch (G__35623) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35621.length)].join('')));

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
var args__26889__auto__ = [];
var len__26882__auto___35629 = arguments.length;
var i__26883__auto___35630 = (0);
while(true){
if((i__26883__auto___35630 < len__26882__auto___35629)){
args__26889__auto__.push((arguments[i__26883__auto___35630]));

var G__35631 = (i__26883__auto___35630 + (1));
i__26883__auto___35630 = G__35631;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((0) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((0)),(0),null)):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__26890__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4224527391354244256.clj",193,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing: %s -> %s",args,pstr], null);
});})(pstr))
,null)),null);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq35628){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35628));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
var __x_35638 = prefixed_pstr;
try{if(typeof __x_35638 === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35635){if((e35635 instanceof Error)){
var __t_35639 = e35635;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",__x_35638,__t_35639,null);
} else {
throw e35635;

}
}
var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__35637 = prefix;
switch (G__35637) {
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
var vec__35636 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__35636,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__35636,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4224527391354244256.clj",205,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (prefix,pstr,clj,wrapped_QMARK_,vec__35636,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(prefix,pstr,clj,wrapped_QMARK_,vec__35636,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
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
var args__26889__auto__ = [];
var len__26882__auto___35810 = arguments.length;
var i__26883__auto___35811 = (0);
while(true){
if((i__26883__auto___35811 < len__26882__auto___35810)){
args__26889__auto__.push((arguments[i__26883__auto___35811]));

var G__35812 = (i__26883__auto___35811 + (1));
i__26883__auto___35811 = G__35812;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_adapter,p__35644){
var vec__35645 = p__35644;
var map__35646 = cljs.core.nth.call(null,vec__35645,(0),null);
var map__35646__$1 = ((((!((map__35646 == null)))?((((map__35646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35646):map__35646);
var recv_buf_or_n = cljs.core.get.call(null,map__35646__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__35646__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__35646__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__35646__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__35646__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__25812__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
var or__25812__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__25812__auto____$1)){
return or__25812__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__35646__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__35646__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var __x = send_buf_ms_ajax;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35648){if((e35648 instanceof Error)){
var __t = e35648;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",__x,__t,null);
} else {
throw e35648;

}
}})(),(function (){var __x = send_buf_ms_ws;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35649){if((e35649 instanceof Error)){
var __t = e35649;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",__x,__t,null);
} else {
throw e35649;

}
}})()], null))){
} else {
throw (new Error("Assert failed: (have? enc/pos-int? send-buf-ms-ajax send-buf-ms-ws)"));
}

if(cljs.core.truth_((function (){var __x = web_server_adapter;
try{if(((function (__x,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__35641_SHARP_){
if(!((p1__35641_SHARP_ == null))){
if((false) || (p1__35641_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__35641_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__35641_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__35641_SHARP_);
}
});})(__x,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35650){if((e35650 instanceof Error)){
var __t = e35650;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__35641#] (satisfies? interfaces/IServerChanAdapter p1__35641#)) web-server-adapter)",__x,__t,null);
} else {
throw e35650;

}
}})())){
} else {
throw (new Error("Assert failed: (have? (fn* [p1__35641#] (satisfies? interfaces/IServerChanAdapter p1__35641#)) web-server-adapter)"));
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var user_id_fn__$1 = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__25812__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type,uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35652){if((e35652 instanceof Error)){
var __t = e35652;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e35652;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35653){
var map__35654 = p__35653;
var map__35654__$1 = ((((!((map__35654 == null)))?((((map__35654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35654):map__35654);
var old_m = map__35654__$1;
var ws = cljs.core.get.call(null,map__35654__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__35654__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__35654__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__35656 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35656) {
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
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35657){if((e35657 instanceof Error)){
var __t = e35657;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e35657;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35658){
var map__35659 = p__35658;
var map__35659__$1 = ((((!((map__35659 == null)))?((((map__35659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35659):map__35659);
var old_m = map__35659__$1;
var ws = cljs.core.get.call(null,map__35659__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__35659__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__35659__$1,new cljs.core.Keyword(null,"any","any",1705907423));
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
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__35814__delegate = function (user_id,ev,p__35661){
var vec__35662 = p__35661;
var map__35663 = cljs.core.nth.call(null,vec__35662,(0),null);
var map__35663__$1 = ((((!((map__35663 == null)))?((((map__35663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35663):map__35663);
var opts = map__35663__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__35663__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_35815 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __35816 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4224527391354244256.clj",324,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_35815,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_35815,ev], null);
});})(uid_35815,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var __35817__$1 = (cljs.core.truth_(uid_35815)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __35818__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_35819 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__35820 = ((function (uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type){
var temp__4425__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),((function (uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__35665 = cljs.core.get.call(null,m,uid_35815);
var ___$3 = cljs.core.nth.call(null,vec__35665,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35665,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_35819)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_35815),cljs.core.get.call(null,m,uid_35815));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4425__auto__)){
var pulled = temp__4425__auto__;
var vec__35666 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__35666,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35666,(1),null);
var __x_35821 = buffered_evs;
try{if(cljs.core.vector_QMARK_.call(null,__x_35821)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35667){if((e35667 instanceof Error)){
var __t_35822 = e35667;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",__x_35821,__t_35822,null);
} else {
throw e35667;

}
}
var __x_35823 = ev_uuids;
try{if(cljs.core.set_QMARK_.call(null,__x_35823)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35668){if((e35668 instanceof Error)){
var __t_35824 = e35668;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",__x_35823,__t_35824,null);
} else {
throw e35668;

}
}
var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4224527391354244256.clj",357,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__35666,buffered_evs,ev_uuids,pulled,temp__4425__auto__,uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__35666,buffered_evs,ev_uuids,pulled,temp__4425__auto__,uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var G__35669 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35669) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_35815,buffered_evs_ppstr);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_35815,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
} else {
return null;
}
});})(uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init4224527391354244256.clj",367,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,flush_buffer_BANG__35820,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_35815], null);
});})(uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,flush_buffer_BANG__35820,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

if(cljs.core.truth_(flush_QMARK_)){
var seq__35670_35826 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__35671_35827 = null;
var count__35672_35828 = (0);
var i__35673_35829 = (0);
while(true){
if((i__35673_35829 < count__35672_35828)){
var type_35830 = cljs.core._nth.call(null,chunk__35671_35827,i__35673_35829);
flush_buffer_BANG__35820.call(null,type_35830);

var G__35831 = seq__35670_35826;
var G__35832 = chunk__35671_35827;
var G__35833 = count__35672_35828;
var G__35834 = (i__35673_35829 + (1));
seq__35670_35826 = G__35831;
chunk__35671_35827 = G__35832;
count__35672_35828 = G__35833;
i__35673_35829 = G__35834;
continue;
} else {
var temp__4425__auto___35835 = cljs.core.seq.call(null,seq__35670_35826);
if(temp__4425__auto___35835){
var seq__35670_35836__$1 = temp__4425__auto___35835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35670_35836__$1)){
var c__26623__auto___35837 = cljs.core.chunk_first.call(null,seq__35670_35836__$1);
var G__35838 = cljs.core.chunk_rest.call(null,seq__35670_35836__$1);
var G__35839 = c__26623__auto___35837;
var G__35840 = cljs.core.count.call(null,c__26623__auto___35837);
var G__35841 = (0);
seq__35670_35826 = G__35838;
chunk__35671_35827 = G__35839;
count__35672_35828 = G__35840;
i__35673_35829 = G__35841;
continue;
} else {
var type_35842 = cljs.core.first.call(null,seq__35670_35836__$1);
flush_buffer_BANG__35820.call(null,type_35842);

var G__35843 = cljs.core.next.call(null,seq__35670_35836__$1);
var G__35844 = null;
var G__35845 = (0);
var G__35846 = (0);
seq__35670_35826 = G__35843;
chunk__35671_35827 = G__35844;
count__35672_35828 = G__35845;
i__35673_35829 = G__35846;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__35674_35847 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_35815], null))));
var chunk__35675_35848 = null;
var count__35676_35849 = (0);
var i__35677_35850 = (0);
while(true){
if((i__35677_35850 < count__35676_35849)){
var server_ch_35851 = cljs.core._nth.call(null,chunk__35675_35848,i__35677_35850);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35851);

var G__35852 = seq__35674_35847;
var G__35853 = chunk__35675_35848;
var G__35854 = count__35676_35849;
var G__35855 = (i__35677_35850 + (1));
seq__35674_35847 = G__35852;
chunk__35675_35848 = G__35853;
count__35676_35849 = G__35854;
i__35677_35850 = G__35855;
continue;
} else {
var temp__4425__auto___35856 = cljs.core.seq.call(null,seq__35674_35847);
if(temp__4425__auto___35856){
var seq__35674_35857__$1 = temp__4425__auto___35856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35674_35857__$1)){
var c__26623__auto___35858 = cljs.core.chunk_first.call(null,seq__35674_35857__$1);
var G__35859 = cljs.core.chunk_rest.call(null,seq__35674_35857__$1);
var G__35860 = c__26623__auto___35858;
var G__35861 = cljs.core.count.call(null,c__26623__auto___35858);
var G__35862 = (0);
seq__35674_35847 = G__35859;
chunk__35675_35848 = G__35860;
count__35676_35849 = G__35861;
i__35677_35850 = G__35862;
continue;
} else {
var server_ch_35863 = cljs.core.first.call(null,seq__35674_35857__$1);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35863);

var G__35864 = cljs.core.next.call(null,seq__35674_35857__$1);
var G__35865 = null;
var G__35866 = (0);
var G__35867 = (0);
seq__35674_35847 = G__35864;
chunk__35675_35848 = G__35865;
count__35676_35849 = G__35866;
i__35677_35850 = G__35867;
continue;
}
} else {
}
}
break;
}

var seq__35678_35868 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_35815], null))));
var chunk__35679_35869 = null;
var count__35680_35870 = (0);
var i__35681_35871 = (0);
while(true){
if((i__35681_35871 < count__35680_35870)){
var vec__35682_35872 = cljs.core._nth.call(null,chunk__35679_35869,i__35681_35871);
var _QMARK_server_ch_35873 = cljs.core.nth.call(null,vec__35682_35872,(0),null);
var __35874__$3 = cljs.core.nth.call(null,vec__35682_35872,(1),null);
var temp__4425__auto___35875 = _QMARK_server_ch_35873;
if(cljs.core.truth_(temp__4425__auto___35875)){
var server_ch_35876 = temp__4425__auto___35875;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35876);
} else {
}

var G__35877 = seq__35678_35868;
var G__35878 = chunk__35679_35869;
var G__35879 = count__35680_35870;
var G__35880 = (i__35681_35871 + (1));
seq__35678_35868 = G__35877;
chunk__35679_35869 = G__35878;
count__35680_35870 = G__35879;
i__35681_35871 = G__35880;
continue;
} else {
var temp__4425__auto___35881 = cljs.core.seq.call(null,seq__35678_35868);
if(temp__4425__auto___35881){
var seq__35678_35882__$1 = temp__4425__auto___35881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35678_35882__$1)){
var c__26623__auto___35883 = cljs.core.chunk_first.call(null,seq__35678_35882__$1);
var G__35884 = cljs.core.chunk_rest.call(null,seq__35678_35882__$1);
var G__35885 = c__26623__auto___35883;
var G__35886 = cljs.core.count.call(null,c__26623__auto___35883);
var G__35887 = (0);
seq__35678_35868 = G__35884;
chunk__35679_35869 = G__35885;
count__35680_35870 = G__35886;
i__35681_35871 = G__35887;
continue;
} else {
var vec__35683_35888 = cljs.core.first.call(null,seq__35678_35882__$1);
var _QMARK_server_ch_35889 = cljs.core.nth.call(null,vec__35683_35888,(0),null);
var __35890__$3 = cljs.core.nth.call(null,vec__35683_35888,(1),null);
var temp__4425__auto___35891__$1 = _QMARK_server_ch_35889;
if(cljs.core.truth_(temp__4425__auto___35891__$1)){
var server_ch_35892 = temp__4425__auto___35891__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35892);
} else {
}

var G__35893 = cljs.core.next.call(null,seq__35678_35882__$1);
var G__35894 = null;
var G__35895 = (0);
var G__35896 = (0);
seq__35678_35868 = G__35893;
chunk__35679_35869 = G__35894;
count__35680_35870 = G__35895;
i__35681_35871 = G__35896;
continue;
}
} else {
}
}
break;
}
} else {
var seq__35684_35897 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__35685_35898 = null;
var count__35686_35899 = (0);
var i__35687_35900 = (0);
while(true){
if((i__35687_35900 < count__35686_35899)){
var type_35901 = cljs.core._nth.call(null,chunk__35685_35898,i__35687_35900);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_35901,uid_35815], null),((function (seq__35684_35897,chunk__35685_35898,count__35686_35899,i__35687_35900,type_35901,uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,flush_buffer_BANG__35820,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_35819], true)], null);
} else {
var vec__35688 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__35688,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35688,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_35819)], null);
}
});})(seq__35684_35897,chunk__35685_35898,count__35686_35899,i__35687_35900,type_35901,uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,flush_buffer_BANG__35820,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__35902 = seq__35684_35897;
var G__35903 = chunk__35685_35898;
var G__35904 = count__35686_35899;
var G__35905 = (i__35687_35900 + (1));
seq__35684_35897 = G__35902;
chunk__35685_35898 = G__35903;
count__35686_35899 = G__35904;
i__35687_35900 = G__35905;
continue;
} else {
var temp__4425__auto___35906 = cljs.core.seq.call(null,seq__35684_35897);
if(temp__4425__auto___35906){
var seq__35684_35907__$1 = temp__4425__auto___35906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35684_35907__$1)){
var c__26623__auto___35908 = cljs.core.chunk_first.call(null,seq__35684_35907__$1);
var G__35909 = cljs.core.chunk_rest.call(null,seq__35684_35907__$1);
var G__35910 = c__26623__auto___35908;
var G__35911 = cljs.core.count.call(null,c__26623__auto___35908);
var G__35912 = (0);
seq__35684_35897 = G__35909;
chunk__35685_35898 = G__35910;
count__35686_35899 = G__35911;
i__35687_35900 = G__35912;
continue;
} else {
var type_35913 = cljs.core.first.call(null,seq__35684_35907__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_35913,uid_35815], null),((function (seq__35684_35897,chunk__35685_35898,count__35686_35899,i__35687_35900,type_35913,seq__35684_35907__$1,temp__4425__auto___35906,uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,flush_buffer_BANG__35820,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_35819], true)], null);
} else {
var vec__35689 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__35689,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35689,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_35819)], null);
}
});})(seq__35684_35897,chunk__35685_35898,count__35686_35899,i__35687_35900,type_35913,seq__35684_35907__$1,temp__4425__auto___35906,uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,flush_buffer_BANG__35820,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__35914 = cljs.core.next.call(null,seq__35684_35907__$1);
var G__35915 = null;
var G__35916 = (0);
var G__35917 = (0);
seq__35684_35897 = G__35914;
chunk__35685_35898 = G__35915;
count__35686_35899 = G__35916;
i__35687_35900 = G__35917;
continue;
}
} else {
}
}
break;
}

var c__29943__auto___35918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto___35918,uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,flush_buffer_BANG__35820,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto___35918,uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,flush_buffer_BANG__35820,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35699){
var state_val_35700 = (state_35699[(1)]);
if((state_val_35700 === (1))){
var state_35699__$1 = state_35699;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_35701_35919 = state_35699__$1;
(statearr_35701_35919[(1)] = (2));

} else {
var statearr_35702_35920 = state_35699__$1;
(statearr_35702_35920[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35700 === (2))){
var state_35699__$1 = state_35699;
var statearr_35703_35921 = state_35699__$1;
(statearr_35703_35921[(2)] = null);

(statearr_35703_35921[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35700 === (3))){
var inst_35692 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var state_35699__$1 = state_35699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35699__$1,(5),inst_35692);
} else {
if((state_val_35700 === (4))){
var inst_35696 = (state_35699[(2)]);
var inst_35697 = flush_buffer_BANG__35820.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_35699__$1 = (function (){var statearr_35704 = state_35699;
(statearr_35704[(7)] = inst_35696);

return statearr_35704;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35699__$1,inst_35697);
} else {
if((state_val_35700 === (5))){
var inst_35694 = (state_35699[(2)]);
var state_35699__$1 = state_35699;
var statearr_35705_35922 = state_35699__$1;
(statearr_35705_35922[(2)] = inst_35694);

(statearr_35705_35922[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__29943__auto___35918,uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,flush_buffer_BANG__35820,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29831__auto__,c__29943__auto___35918,uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,flush_buffer_BANG__35820,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29832__auto__ = null;
var taoensso$sente$state_machine__29832__auto____0 = (function (){
var statearr_35709 = [null,null,null,null,null,null,null,null];
(statearr_35709[(0)] = taoensso$sente$state_machine__29832__auto__);

(statearr_35709[(1)] = (1));

return statearr_35709;
});
var taoensso$sente$state_machine__29832__auto____1 = (function (state_35699){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_35699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e35710){if((e35710 instanceof Object)){
var ex__29835__auto__ = e35710;
var statearr_35711_35923 = state_35699;
(statearr_35711_35923[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35924 = state_35699;
state_35699 = G__35924;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
taoensso$sente$state_machine__29832__auto__ = function(state_35699){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29832__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29832__auto____1.call(this,state_35699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29832__auto____0;
taoensso$sente$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29832__auto____1;
return taoensso$sente$state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto___35918,uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,flush_buffer_BANG__35820,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29945__auto__ = (function (){var statearr_35712 = f__29944__auto__.call(null);
(statearr_35712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___35918);

return statearr_35712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto___35918,uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,flush_buffer_BANG__35820,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__29943__auto___35925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto___35925,uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,flush_buffer_BANG__35820,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto___35925,uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,flush_buffer_BANG__35820,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35722){
var state_val_35723 = (state_35722[(1)]);
if((state_val_35723 === (1))){
var state_35722__$1 = state_35722;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_35724_35926 = state_35722__$1;
(statearr_35724_35926[(1)] = (2));

} else {
var statearr_35725_35927 = state_35722__$1;
(statearr_35725_35927[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35723 === (2))){
var state_35722__$1 = state_35722;
var statearr_35726_35928 = state_35722__$1;
(statearr_35726_35928[(2)] = null);

(statearr_35726_35928[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35723 === (3))){
var inst_35715 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var state_35722__$1 = state_35722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35722__$1,(5),inst_35715);
} else {
if((state_val_35723 === (4))){
var inst_35719 = (state_35722[(2)]);
var inst_35720 = flush_buffer_BANG__35820.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_35722__$1 = (function (){var statearr_35727 = state_35722;
(statearr_35727[(7)] = inst_35719);

return statearr_35727;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35722__$1,inst_35720);
} else {
if((state_val_35723 === (5))){
var inst_35717 = (state_35722[(2)]);
var state_35722__$1 = state_35722;
var statearr_35728_35929 = state_35722__$1;
(statearr_35728_35929[(2)] = inst_35717);

(statearr_35728_35929[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__29943__auto___35925,uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,flush_buffer_BANG__35820,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29831__auto__,c__29943__auto___35925,uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,flush_buffer_BANG__35820,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29832__auto__ = null;
var taoensso$sente$state_machine__29832__auto____0 = (function (){
var statearr_35732 = [null,null,null,null,null,null,null,null];
(statearr_35732[(0)] = taoensso$sente$state_machine__29832__auto__);

(statearr_35732[(1)] = (1));

return statearr_35732;
});
var taoensso$sente$state_machine__29832__auto____1 = (function (state_35722){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_35722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e35733){if((e35733 instanceof Object)){
var ex__29835__auto__ = e35733;
var statearr_35734_35930 = state_35722;
(statearr_35734_35930[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35931 = state_35722;
state_35722 = G__35931;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
taoensso$sente$state_machine__29832__auto__ = function(state_35722){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29832__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29832__auto____1.call(this,state_35722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29832__auto____0;
taoensso$sente$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29832__auto____1;
return taoensso$sente$state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto___35925,uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,flush_buffer_BANG__35820,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29945__auto__ = (function (){var statearr_35735 = f__29944__auto__.call(null);
(statearr_35735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___35925);

return statearr_35735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto___35925,uid_35815,__35816,__35817__$1,__35818__$2,ev_uuid_35819,flush_buffer_BANG__35820,vec__35662,map__35663,map__35663__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}

return null;
};
var G__35814 = function (user_id,ev,var_args){
var p__35661 = null;
if (arguments.length > 2) {
var G__35932__i = 0, G__35932__a = new Array(arguments.length -  2);
while (G__35932__i < G__35932__a.length) {G__35932__a[G__35932__i] = arguments[G__35932__i + 2]; ++G__35932__i;}
  p__35661 = new cljs.core.IndexedSeq(G__35932__a,0);
} 
return G__35814__delegate.call(this,user_id,ev,p__35661);};
G__35814.cljs$lang$maxFixedArity = 2;
G__35814.cljs$lang$applyTo = (function (arglist__35933){
var user_id = cljs.core.first(arglist__35933);
arglist__35933 = cljs.core.next(arglist__35933);
var ev = cljs.core.first(arglist__35933);
var p__35661 = cljs.core.rest(arglist__35933);
return G__35814__delegate(user_id,ev,p__35661);
});
G__35814.cljs$core$IFn$_invoke$arity$variadic = G__35814__delegate;
return G__35814;
})()
;})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__35736 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__35736,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__35736,(1),null);
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?((function (params,ppstr,client_id,vec__35736,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4224527391354244256.clj",435,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__35736,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): %s",resp_clj], null);
});})(params,ppstr,client_id,vec__35736,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
});})(params,ppstr,client_id,vec__35736,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
return null;
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4224527391354244256.clj",442,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__35736,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): dummy-cb-200"], null);
});})(params,ppstr,client_id,vec__35736,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337)),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var csrf_token = csrf_token_fn.call(null,ring_req);
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var websocket_QMARK_ = new cljs.core.Keyword(null,"websocket?","websocket?",1552493139).cljs$core$IFn$_invoke$arity$1(ring_req);
var receive_event_msg_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__35934__delegate = function (event,p__35737){
var vec__35738 = p__35737;
var _QMARK_reply_fn = cljs.core.nth.call(null,vec__35738,(0),null);
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
};
var G__35934 = function (event,var_args){
var p__35737 = null;
if (arguments.length > 1) {
var G__35935__i = 0, G__35935__a = new Array(arguments.length -  1);
while (G__35935__i < G__35935__a.length) {G__35935__a[G__35935__i] = arguments[G__35935__i + 1]; ++G__35935__i;}
  p__35737 = new cljs.core.IndexedSeq(G__35935__a,0);
} 
return G__35934__delegate.call(this,event,p__35737);};
G__35934.cljs$lang$maxFixedArity = 1;
G__35934.cljs$lang$applyTo = (function (arglist__35936){
var event = cljs.core.first(arglist__35936);
var p__35737 = cljs.core.rest(arglist__35936);
return G__35934__delegate(event,p__35737);
});
G__35934.cljs$core$IFn$_invoke$arity$variadic = G__35934__delegate;
return G__35934;
})()
;})(csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var handshake_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4224527391354244256.clj",467,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handshake!"], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = ((!((_QMARK_handshake_data == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev),cljs.core.not.call(null,websocket_QMARK_));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init4224527391354244256.clj",479,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4224527391354244256.clj",487,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,[cljs.core.str(server_ch)].join('')], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

taoensso.encore.reset_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id], null),server_ch);

if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954)], null));
} else {
}

return handshake_BANG_.call(null,server_ch);
} else {
var initial_conn_from_client_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_ch,taoensso.encore.now_udt.call(null)], null),(_QMARK_v == null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
var handshake_QMARK_ = (function (){var or__25812__auto__ = initial_conn_from_client_QMARK_;
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
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
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,req_ppstr){
var vec__35739 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__35739,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__35739,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__35739,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4224527391354244256.clj",514,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__35739,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__35739,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__35739,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,status){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
if(cljs.core.empty_QMARK_.call(null,new_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return new_m;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var c__29943__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35753){
var state_val_35754 = (state_35753[(1)]);
if((state_val_35754 === (1))){
var inst_35740 = cljs.core.async.timeout.call(null,(5000));
var state_35753__$1 = state_35753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35753__$1,(2),inst_35740);
} else {
if((state_val_35754 === (2))){
var inst_35742 = (state_35753[(2)]);
var inst_35743 = upd_connected_uid_BANG_.call(null,uid);
var state_35753__$1 = (function (){var statearr_35755 = state_35753;
(statearr_35755[(7)] = inst_35742);

return statearr_35755;
})();
if(cljs.core.truth_(inst_35743)){
var statearr_35756_35937 = state_35753__$1;
(statearr_35756_35937[(1)] = (3));

} else {
var statearr_35757_35938 = state_35753__$1;
(statearr_35757_35938[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (3))){
var inst_35745 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35746 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_35747 = (new cljs.core.PersistentVector(null,1,(5),inst_35745,inst_35746,null));
var inst_35748 = receive_event_msg_BANG_.call(null,inst_35747);
var state_35753__$1 = state_35753;
var statearr_35758_35939 = state_35753__$1;
(statearr_35758_35939[(2)] = inst_35748);

(statearr_35758_35939[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (4))){
var state_35753__$1 = state_35753;
var statearr_35759_35940 = state_35753__$1;
(statearr_35759_35940[(2)] = null);

(statearr_35759_35940[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (5))){
var inst_35751 = (state_35753[(2)]);
var state_35753__$1 = state_35753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35753__$1,inst_35751);
} else {
return null;
}
}
}
}
}
});})(c__29943__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29831__auto__,c__29943__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29832__auto__ = null;
var taoensso$sente$state_machine__29832__auto____0 = (function (){
var statearr_35763 = [null,null,null,null,null,null,null,null];
(statearr_35763[(0)] = taoensso$sente$state_machine__29832__auto__);

(statearr_35763[(1)] = (1));

return statearr_35763;
});
var taoensso$sente$state_machine__29832__auto____1 = (function (state_35753){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_35753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e35764){if((e35764 instanceof Object)){
var ex__29835__auto__ = e35764;
var statearr_35765_35941 = state_35753;
(statearr_35765_35941[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35942 = state_35753;
state_35753 = G__35942;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
taoensso$sente$state_machine__29832__auto__ = function(state_35753){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29832__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29832__auto____1.call(this,state_35753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29832__auto____0;
taoensso$sente$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29832__auto____1;
return taoensso$sente$state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29945__auto__ = (function (){var statearr_35766 = f__29944__auto__.call(null);
(statearr_35766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto__);

return statearr_35766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__29943__auto__;
} else {
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,new cljs.core.Keyword(null,"ajax","ajax",814345549),client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35767){
var vec__35768 = p__35767;
var server_ch__$1 = cljs.core.nth.call(null,vec__35768,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__35768,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var udt_disconnected = taoensso.encore.now_udt.call(null);
var c__29943__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35791){
var state_val_35792 = (state_35791[(1)]);
if((state_val_35792 === (1))){
var inst_35769 = cljs.core.async.timeout.call(null,(5000));
var state_35791__$1 = state_35791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35791__$1,(2),inst_35769);
} else {
if((state_val_35792 === (2))){
var inst_35771 = (state_35791[(2)]);
var inst_35772 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35773 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_35774 = (new cljs.core.PersistentVector(null,2,(5),inst_35772,inst_35773,null));
var inst_35775 = (function (){return ((function (inst_35771,inst_35772,inst_35773,inst_35774,state_val_35792,c__29943__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var vec__35793 = cljs.core.get.call(null,_QMARK_m,client_id);
var _ = cljs.core.nth.call(null,vec__35793,(0),null);
var _QMARK_udt_last_connected = cljs.core.nth.call(null,vec__35793,(1),null);
var disconnected_QMARK_ = (function (){var and__25800__auto__ = _QMARK_udt_last_connected;
if(cljs.core.truth_(and__25800__auto__)){
return (udt_disconnected >= _QMARK_udt_last_connected);
} else {
return and__25800__auto__;
}
})();
if(cljs.core.not.call(null,disconnected_QMARK_)){
return taoensso.encore.swapped.call(null,_QMARK_m,cljs.core.not.call(null,new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)));
} else {
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
return taoensso.encore.swapped.call(null,((cljs.core.empty_QMARK_.call(null,new_m))?new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782):new_m),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586));
}
});
;})(inst_35771,inst_35772,inst_35773,inst_35774,state_val_35792,c__29943__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_35776 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_35774,inst_35775);
var state_35791__$1 = (function (){var statearr_35794 = state_35791;
(statearr_35794[(7)] = inst_35771);

return statearr_35794;
})();
if(cljs.core.truth_(inst_35776)){
var statearr_35795_35943 = state_35791__$1;
(statearr_35795_35943[(1)] = (3));

} else {
var statearr_35796_35944 = state_35791__$1;
(statearr_35796_35944[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35792 === (3))){
var inst_35778 = upd_connected_uid_BANG_.call(null,uid);
var state_35791__$1 = state_35791;
if(cljs.core.truth_(inst_35778)){
var statearr_35797_35945 = state_35791__$1;
(statearr_35797_35945[(1)] = (6));

} else {
var statearr_35798_35946 = state_35791__$1;
(statearr_35798_35946[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35792 === (4))){
var state_35791__$1 = state_35791;
var statearr_35799_35947 = state_35791__$1;
(statearr_35799_35947[(2)] = null);

(statearr_35799_35947[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35792 === (5))){
var inst_35789 = (state_35791[(2)]);
var state_35791__$1 = state_35791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35791__$1,inst_35789);
} else {
if((state_val_35792 === (6))){
var inst_35780 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35781 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_35782 = (new cljs.core.PersistentVector(null,1,(5),inst_35780,inst_35781,null));
var inst_35783 = receive_event_msg_BANG_.call(null,inst_35782);
var state_35791__$1 = state_35791;
var statearr_35800_35948 = state_35791__$1;
(statearr_35800_35948[(2)] = inst_35783);

(statearr_35800_35948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35792 === (7))){
var state_35791__$1 = state_35791;
var statearr_35801_35949 = state_35791__$1;
(statearr_35801_35949[(2)] = null);

(statearr_35801_35949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35792 === (8))){
var inst_35786 = (state_35791[(2)]);
var state_35791__$1 = state_35791;
var statearr_35802_35950 = state_35791__$1;
(statearr_35802_35950[(2)] = inst_35786);

(statearr_35802_35950[(1)] = (5));


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
});})(c__29943__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29831__auto__,c__29943__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29832__auto__ = null;
var taoensso$sente$state_machine__29832__auto____0 = (function (){
var statearr_35806 = [null,null,null,null,null,null,null,null];
(statearr_35806[(0)] = taoensso$sente$state_machine__29832__auto__);

(statearr_35806[(1)] = (1));

return statearr_35806;
});
var taoensso$sente$state_machine__29832__auto____1 = (function (state_35791){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_35791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e35807){if((e35807 instanceof Object)){
var ex__29835__auto__ = e35807;
var statearr_35808_35951 = state_35791;
(statearr_35808_35951[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35952 = state_35791;
state_35791 = G__35952;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
taoensso$sente$state_machine__29832__auto__ = function(state_35791){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29832__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29832__auto____1.call(this,state_35791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29832__auto____0;
taoensso$sente$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29832__auto____1;
return taoensso$sente$state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__29945__auto__ = (function (){var statearr_35809 = f__29944__auto__.call(null);
(statearr_35809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto__);

return statearr_35809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__29943__auto__;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35645,map__35646,map__35646__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq35642){
var G__35643 = cljs.core.first.call(null,seq35642);
var seq35642__$1 = cljs.core.next.call(null,seq35642);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35643,seq35642__$1);
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4224527391354244256.clj",576,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null);

var seq__35957 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null))));
var chunk__35958 = null;
var count__35959 = (0);
var i__35960 = (0);
while(true){
if((i__35960 < count__35959)){
var server_ch = cljs.core._nth.call(null,chunk__35958,i__35960);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__35961 = seq__35957;
var G__35962 = chunk__35958;
var G__35963 = count__35959;
var G__35964 = (i__35960 + (1));
seq__35957 = G__35961;
chunk__35958 = G__35962;
count__35959 = G__35963;
i__35960 = G__35964;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__35957);
if(temp__4425__auto__){
var seq__35957__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35957__$1)){
var c__26623__auto__ = cljs.core.chunk_first.call(null,seq__35957__$1);
var G__35965 = cljs.core.chunk_rest.call(null,seq__35957__$1);
var G__35966 = c__26623__auto__;
var G__35967 = cljs.core.count.call(null,c__26623__auto__);
var G__35968 = (0);
seq__35957 = G__35965;
chunk__35958 = G__35966;
count__35959 = G__35967;
i__35960 = G__35968;
continue;
} else {
var server_ch = cljs.core.first.call(null,seq__35957__$1);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__35969 = cljs.core.next.call(null,seq__35957__$1);
var G__35970 = null;
var G__35971 = (0);
var G__35972 = (0);
seq__35957 = G__35969;
chunk__35958 = G__35970;
count__35959 = G__35971;
i__35960 = G__35972;
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
var args__26889__auto__ = [];
var len__26882__auto___36062 = arguments.length;
var i__26883__auto___36063 = (0);
while(true){
if((i__26883__auto___36063 < len__26882__auto___36062)){
args__26889__auto__.push((arguments[i__26883__auto___36063]));

var G__36064 = (i__26883__auto___36063 + (1));
i__26883__auto___36063 = G__36064;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((3) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((3)),(0),null)):null);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26890__auto__);
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conns_,uid,buffered_evs_pstr,p__35977){
var vec__35978 = p__35977;
var map__35979 = cljs.core.nth.call(null,vec__35978,(0),null);
var map__35979__$1 = ((((!((map__35979 == null)))?((((map__35979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35979):map__35979);
var nmax_attempts = cljs.core.get.call(null,map__35979__$1,new cljs.core.Keyword(null,"nmax-attempts","nmax-attempts",1471144610),(7));
var ms_base = cljs.core.get.call(null,map__35979__$1,new cljs.core.Keyword(null,"ms-base","ms-base",-1962784511),(90));
var ms_rand = cljs.core.get.call(null,map__35979__$1,new cljs.core.Keyword(null,"ms-rand","ms-rand",1169398874),(90));

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4224527391354244256.clj",589,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__35978,map__35979,map__35979__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
});})(vec__35978,map__35979,map__35979__$1,nmax_attempts,ms_base,ms_rand))
,null)),null);

var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__29943__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto__,client_ids_unsatisfied,vec__35978,map__35979,map__35979__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto__,client_ids_unsatisfied,vec__35978,map__35979,map__35979__$1,nmax_attempts,ms_base,ms_rand){
return (function (state_36028){
var state_val_36029 = (state_36028[(1)]);
if((state_val_36029 === (7))){
var inst_35989 = (state_36028[(7)]);
var inst_35982 = (state_36028[(8)]);
var inst_35983 = (state_36028[(9)]);
var inst_36000 = (function (){var n = inst_35982;
var client_ids_satisfied = inst_35983;
var _QMARK_pulled = inst_35989;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_35989,inst_35982,inst_35983,state_val_36029,c__29943__auto__,client_ids_unsatisfied,vec__35978,map__35979,map__35979__$1,nmax_attempts,ms_base,ms_rand){
return (function (s,client_id,p__35999){
var vec__36030 = p__35999;
var _QMARK_server_ch = cljs.core.nth.call(null,vec__36030,(0),null);
var _ = cljs.core.nth.call(null,vec__36030,(1),null);
if(((_QMARK_server_ch == null)) || (cljs.core.not.call(null,taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_server_ch,buffered_evs_pstr,new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103))))){
return s;
} else {
return cljs.core.conj.call(null,s,client_id);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_35989,inst_35982,inst_35983,state_val_36029,c__29943__auto__,client_ids_unsatisfied,vec__35978,map__35979,map__35979__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_36001 = cljs.core.PersistentHashSet.EMPTY;
var inst_36002 = cljs.core.reduce_kv.call(null,inst_36000,inst_36001,inst_35989);
var state_36028__$1 = state_36028;
var statearr_36031_36065 = state_36028__$1;
(statearr_36031_36065[(2)] = inst_36002);

(statearr_36031_36065[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (1))){
var inst_35981 = cljs.core.PersistentHashSet.EMPTY;
var inst_35982 = (0);
var inst_35983 = inst_35981;
var state_36028__$1 = (function (){var statearr_36032 = state_36028;
(statearr_36032[(8)] = inst_35982);

(statearr_36032[(9)] = inst_35983);

return statearr_36032;
})();
var statearr_36033_36066 = state_36028__$1;
(statearr_36033_36066[(2)] = null);

(statearr_36033_36066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (4))){
var state_36028__$1 = state_36028;
var statearr_36034_36067 = state_36028__$1;
(statearr_36034_36067[(2)] = true);

(statearr_36034_36067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (15))){
var inst_36024 = (state_36028[(2)]);
var state_36028__$1 = state_36028;
var statearr_36035_36068 = state_36028__$1;
(statearr_36035_36068[(2)] = inst_36024);

(statearr_36035_36068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (13))){
var inst_36015 = cljs.core.rand_int.call(null,ms_rand);
var inst_36016 = (ms_base + inst_36015);
var inst_36017 = cljs.core.async.timeout.call(null,inst_36016);
var state_36028__$1 = state_36028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36028__$1,(16),inst_36017);
} else {
if((state_val_36029 === (6))){
var inst_35989 = (state_36028[(7)]);
var inst_35997 = (state_36028[(2)]);
var state_36028__$1 = (function (){var statearr_36036 = state_36028;
(statearr_36036[(10)] = inst_35997);

return statearr_36036;
})();
if(cljs.core.truth_(inst_35989)){
var statearr_36037_36069 = state_36028__$1;
(statearr_36037_36069[(1)] = (7));

} else {
var statearr_36038_36070 = state_36028__$1;
(statearr_36038_36070[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (3))){
var inst_36026 = (state_36028[(2)]);
var state_36028__$1 = state_36028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36028__$1,inst_36026);
} else {
if((state_val_36029 === (12))){
var inst_36013 = (state_36028[(2)]);
var state_36028__$1 = state_36028;
if(cljs.core.truth_(inst_36013)){
var statearr_36039_36071 = state_36028__$1;
(statearr_36039_36071[(1)] = (13));

} else {
var statearr_36040_36072 = state_36028__$1;
(statearr_36040_36072[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (2))){
var inst_35989 = (state_36028[(7)]);
var inst_35982 = (state_36028[(8)]);
var inst_35983 = (state_36028[(9)]);
var inst_35985 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35986 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_35987 = (new cljs.core.PersistentVector(null,2,(5),inst_35985,inst_35986,null));
var inst_35988 = (function (){var n = inst_35982;
var client_ids_satisfied = inst_35983;
return ((function (n,client_ids_satisfied,inst_35989,inst_35982,inst_35983,inst_35985,inst_35986,inst_35987,state_val_36029,c__29943__auto__,client_ids_unsatisfied,vec__35978,map__35979,map__35979__$1,nmax_attempts,ms_base,ms_rand){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_35989,inst_35982,inst_35983,inst_35985,inst_35986,inst_35987,state_val_36029,c__29943__auto__,client_ids_unsatisfied,vec__35978,map__35979,map__35979__$1,nmax_attempts,ms_base,ms_rand){
return (function (m__$1,k){
var vec__36041 = cljs.core.get.call(null,m__$1,k);
var _QMARK_server_ch = cljs.core.nth.call(null,vec__36041,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__36041,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_35989,inst_35982,inst_35983,inst_35985,inst_35986,inst_35987,state_val_36029,c__29943__auto__,client_ids_unsatisfied,vec__35978,map__35979,map__35979__$1,nmax_attempts,ms_base,ms_rand))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_35989,inst_35982,inst_35983,inst_35985,inst_35986,inst_35987,state_val_36029,c__29943__auto__,client_ids_unsatisfied,vec__35978,map__35979,map__35979__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_35989__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_35987,inst_35988);
var inst_35990 = (function (){var n = inst_35982;
var client_ids_satisfied = inst_35983;
var _QMARK_pulled = inst_35989__$1;
var __x = inst_35989__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,__x,inst_35989,inst_35982,inst_35983,inst_35985,inst_35986,inst_35987,inst_35988,inst_35989__$1,state_val_36029,c__29943__auto__,client_ids_unsatisfied,vec__35978,map__35979,map__35979__$1,nmax_attempts,ms_base,ms_rand){
return (function (__x__$1){
var or__25812__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,__x__$1);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,__x,inst_35989,inst_35982,inst_35983,inst_35985,inst_35986,inst_35987,inst_35988,inst_35989__$1,state_val_36029,c__29943__auto__,client_ids_unsatisfied,vec__35978,map__35979,map__35979__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_35991 = inst_35990.call(null,inst_35989__$1);
var state_36028__$1 = (function (){var statearr_36042 = state_36028;
(statearr_36042[(7)] = inst_35989__$1);

return statearr_36042;
})();
if(cljs.core.truth_(inst_35991)){
var statearr_36043_36073 = state_36028__$1;
(statearr_36043_36073[(1)] = (4));

} else {
var statearr_36044_36074 = state_36028__$1;
(statearr_36044_36074[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (11))){
var inst_36007 = (state_36028[(11)]);
var state_36028__$1 = state_36028;
var statearr_36045_36075 = state_36028__$1;
(statearr_36045_36075[(2)] = inst_36007);

(statearr_36045_36075[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (9))){
var inst_36007 = (state_36028[(11)]);
var inst_35982 = (state_36028[(8)]);
var inst_35983 = (state_36028[(9)]);
var inst_36005 = (state_36028[(2)]);
var inst_36006 = cljs.core.into.call(null,inst_35983,inst_36005);
var inst_36007__$1 = (inst_35982 < nmax_attempts);
var state_36028__$1 = (function (){var statearr_36046 = state_36028;
(statearr_36046[(11)] = inst_36007__$1);

(statearr_36046[(12)] = inst_36006);

return statearr_36046;
})();
if(cljs.core.truth_(inst_36007__$1)){
var statearr_36047_36076 = state_36028__$1;
(statearr_36047_36076[(1)] = (10));

} else {
var statearr_36048_36077 = state_36028__$1;
(statearr_36048_36077[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (5))){
var inst_35989 = (state_36028[(7)]);
var inst_35994 = "([:or nil? map?] ?pulled)";
var inst_35995 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,inst_35994,inst_35989,null,null);
var state_36028__$1 = state_36028;
var statearr_36049_36078 = state_36028__$1;
(statearr_36049_36078[(2)] = inst_35995);

(statearr_36049_36078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (14))){
var state_36028__$1 = state_36028;
var statearr_36050_36079 = state_36028__$1;
(statearr_36050_36079[(2)] = null);

(statearr_36050_36079[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (16))){
var inst_35982 = (state_36028[(8)]);
var inst_36006 = (state_36028[(12)]);
var inst_36019 = (state_36028[(2)]);
var inst_36020 = (inst_35982 + (1));
var inst_35982__$1 = inst_36020;
var inst_35983 = inst_36006;
var state_36028__$1 = (function (){var statearr_36051 = state_36028;
(statearr_36051[(13)] = inst_36019);

(statearr_36051[(8)] = inst_35982__$1);

(statearr_36051[(9)] = inst_35983);

return statearr_36051;
})();
var statearr_36052_36080 = state_36028__$1;
(statearr_36052_36080[(2)] = null);

(statearr_36052_36080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (10))){
var inst_36006 = (state_36028[(12)]);
var inst_36009 = cljs.core.complement.call(null,inst_36006);
var inst_36010 = cljs.core.some.call(null,inst_36009,client_ids_unsatisfied);
var state_36028__$1 = state_36028;
var statearr_36053_36081 = state_36028__$1;
(statearr_36053_36081[(2)] = inst_36010);

(statearr_36053_36081[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36029 === (8))){
var state_36028__$1 = state_36028;
var statearr_36054_36082 = state_36028__$1;
(statearr_36054_36082[(2)] = null);

(statearr_36054_36082[(1)] = (9));


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
});})(c__29943__auto__,client_ids_unsatisfied,vec__35978,map__35979,map__35979__$1,nmax_attempts,ms_base,ms_rand))
;
return ((function (switch__29831__auto__,c__29943__auto__,client_ids_unsatisfied,vec__35978,map__35979,map__35979__$1,nmax_attempts,ms_base,ms_rand){
return (function() {
var taoensso$sente$state_machine__29832__auto__ = null;
var taoensso$sente$state_machine__29832__auto____0 = (function (){
var statearr_36058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36058[(0)] = taoensso$sente$state_machine__29832__auto__);

(statearr_36058[(1)] = (1));

return statearr_36058;
});
var taoensso$sente$state_machine__29832__auto____1 = (function (state_36028){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_36028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e36059){if((e36059 instanceof Object)){
var ex__29835__auto__ = e36059;
var statearr_36060_36083 = state_36028;
(statearr_36060_36083[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36084 = state_36028;
state_36028 = G__36084;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
taoensso$sente$state_machine__29832__auto__ = function(state_36028){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29832__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29832__auto____1.call(this,state_36028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29832__auto____0;
taoensso$sente$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29832__auto____1;
return taoensso$sente$state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto__,client_ids_unsatisfied,vec__35978,map__35979,map__35979__$1,nmax_attempts,ms_base,ms_rand))
})();
var state__29945__auto__ = (function (){var statearr_36061 = f__29944__auto__.call(null);
(statearr_36061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto__);

return statearr_36061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto__,client_ids_unsatisfied,vec__35978,map__35979,map__35979__$1,nmax_attempts,ms_base,ms_rand))
);

return c__29943__auto__;
}
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$applyTo = (function (seq35973){
var G__35974 = cljs.core.first.call(null,seq35973);
var seq35973__$1 = cljs.core.next.call(null,seq35973);
var G__35975 = cljs.core.first.call(null,seq35973__$1);
var seq35973__$2 = cljs.core.next.call(null,seq35973__$1);
var G__35976 = cljs.core.first.call(null,seq35973__$2);
var seq35973__$3 = cljs.core.next.call(null,seq35973__$2);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35974,G__35975,G__35976,seq35973__$3);
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
var x__26475__auto__ = (((chsk == null))?null:chsk);
var m__26476__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__26475__auto__)]);
if(!((m__26476__auto__ == null))){
return m__26476__auto__.call(null,chsk);
} else {
var m__26476__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__26476__auto____$1 == null))){
return m__26476__auto____$1.call(null,chsk);
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
var x__26475__auto__ = (((chsk == null))?null:chsk);
var m__26476__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__26475__auto__)]);
if(!((m__26476__auto__ == null))){
return m__26476__auto__.call(null,chsk,ev,opts);
} else {
var m__26476__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__26476__auto____$1 == null))){
return m__26476__auto____$1.call(null,chsk,ev,opts);
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
var x__26475__auto__ = (((chsk == null))?null:chsk);
var m__26476__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__26475__auto__)]);
if(!((m__26476__auto__ == null))){
return m__26476__auto__.call(null,chsk);
} else {
var m__26476__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(!((m__26476__auto____$1 == null))){
return m__26476__auto____$1.call(null,chsk);
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
var x__26475__auto__ = (((chsk == null))?null:chsk);
var m__26476__auto__ = (taoensso.sente.chsk_disconnect_BANG_[goog.typeOf(x__26475__auto__)]);
if(!((m__26476__auto__ == null))){
return m__26476__auto__.call(null,chsk);
} else {
var m__26476__auto____$1 = (taoensso.sente.chsk_disconnect_BANG_["_"]);
if(!((m__26476__auto____$1 == null))){
return m__26476__auto____$1.call(null,chsk);
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
var x__26475__auto__ = (((chsk == null))?null:chsk);
var m__26476__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__26475__auto__)]);
if(!((m__26476__auto__ == null))){
return m__26476__auto__.call(null,chsk);
} else {
var m__26476__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(!((m__26476__auto____$1 == null))){
return m__26476__auto____$1.call(null,chsk);
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
var args36085 = [];
var len__26882__auto___36088 = arguments.length;
var i__26883__auto___36089 = (0);
while(true){
if((i__26883__auto___36089 < len__26882__auto___36088)){
args36085.push((arguments[i__26883__auto___36089]));

var G__36090 = (i__26883__auto___36089 + (1));
i__26883__auto___36089 = G__36090;
continue;
} else {
}
break;
}

var G__36087 = args36085.length;
switch (G__36087) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36085.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4224527391354244256.clj",646,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__25812__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__25812__auto__){
return or__25812__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nneg-int? ?timeout-ms)))")].join('')));
}

if(cljs.core.truth_((function (){var or__25812__auto__ = (_QMARK_cb == null);
if(or__25812__auto__){
return or__25812__auto__;
} else {
var or__25812__auto____$1 = cljs.core.ifn_QMARK_.call(null,_QMARK_cb);
if(or__25812__auto____$1){
return or__25812__auto____$1;
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
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__36092,merge_state){
var map__36096 = p__36092;
var map__36096__$1 = ((((!((map__36096 == null)))?((((map__36096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36096):map__36096);
var chsk = map__36096__$1;
var chs = cljs.core.get.call(null,map__36096__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__36096__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__36098 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__36096,map__36096__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__25800__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__25800__auto__)){
var and__25800__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__25800__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__25800__auto____$1;
}
} else {
return and__25800__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__36096,map__36096__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__36098,(0),null);
var new_state = cljs.core.nth.call(null,vec__36098,(1),null);
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
var __x_36103 = _QMARK_cb;
try{if(cljs.core.truth_(taoensso.encore.chan_QMARK_.call(null,__x_36103))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36101){if((e36101 instanceof Error)){
var __t_36104 = e36101;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",__x_36103,__t_36104,null);
} else {
throw e36101;

}
}
taoensso.sente.assert_event.call(null,ev);

var vec__36102 = ev;
var ev_id = cljs.core.nth.call(null,vec__36102,(0),null);
var _ = cljs.core.nth.call(null,vec__36102,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__36102,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__36102,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4224527391354244256.clj",703,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null);

var buffered_evs = (function (){var __x = clj;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36110){if((e36110 instanceof Error)){
var __t = e36110;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",__x,__t,null);
} else {
throw e36110;

}
}})();
var seq__36111 = cljs.core.seq.call(null,buffered_evs);
var chunk__36112 = null;
var count__36113 = (0);
var i__36114 = (0);
while(true){
if((i__36114 < count__36113)){
var ev = cljs.core._nth.call(null,chunk__36112,i__36114);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__36115 = seq__36111;
var G__36116 = chunk__36112;
var G__36117 = count__36113;
var G__36118 = (i__36114 + (1));
seq__36111 = G__36115;
chunk__36112 = G__36116;
count__36113 = G__36117;
i__36114 = G__36118;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36111);
if(temp__4425__auto__){
var seq__36111__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36111__$1)){
var c__26623__auto__ = cljs.core.chunk_first.call(null,seq__36111__$1);
var G__36119 = cljs.core.chunk_rest.call(null,seq__36111__$1);
var G__36120 = c__26623__auto__;
var G__36121 = cljs.core.count.call(null,c__26623__auto__);
var G__36122 = (0);
seq__36111 = G__36119;
chunk__36112 = G__36120;
count__36113 = G__36121;
i__36114 = G__36122;
continue;
} else {
var ev = cljs.core.first.call(null,seq__36111__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__36123 = cljs.core.next.call(null,seq__36111__$1);
var G__36124 = null;
var G__36125 = (0);
var G__36126 = (0);
seq__36111 = G__36123;
chunk__36112 = G__36124;
count__36113 = G__36125;
i__36114 = G__36126;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4224527391354244256.clj",713,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj], null);
});})(handshake_QMARK_))
,null)),null);

if(handshake_QMARK_){
var vec__36129 = clj;
var _ = cljs.core.nth.call(null,vec__36129,(0),null);
var vec__36130 = cljs.core.nth.call(null,vec__36129,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__36130,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__36130,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__36130,(2),null);
var handshake_ev = vec__36129;
if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4224527391354244256.clj",719,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36129,_,vec__36130,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__36129,_,vec__36130,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_))
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
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26434__auto__,k__26435__auto__){
var self__ = this;
var this__26434__auto____$1 = this;
return cljs.core._lookup.call(null,this__26434__auto____$1,k__26435__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26436__auto__,k36132,else__26437__auto__){
var self__ = this;
var this__26436__auto____$1 = this;
var G__36134 = (((k36132 instanceof cljs.core.Keyword))?k36132.fqn:null);
switch (G__36134) {
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
return cljs.core.get.call(null,self__.__extmap,k36132,else__26437__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26448__auto__,writer__26449__auto__,opts__26450__auto__){
var self__ = this;
var this__26448__auto____$1 = this;
var pr_pair__26451__auto__ = ((function (this__26448__auto____$1){
return (function (keyval__26452__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26449__auto__,cljs.core.pr_writer,""," ","",opts__26450__auto__,keyval__26452__auto__);
});})(this__26448__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26449__auto__,pr_pair__26451__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__26450__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36131){
var self__ = this;
var G__36131__$1 = this;
return (new cljs.core.RecordIter((0),G__36131__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26432__auto__){
var self__ = this;
var this__26432__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26428__auto__){
var self__ = this;
var this__26428__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26438__auto__){
var self__ = this;
var this__26438__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26429__auto__){
var self__ = this;
var this__26429__auto____$1 = this;
var h__26247__auto__ = self__.__hash;
if(!((h__26247__auto__ == null))){
return h__26247__auto__;
} else {
var h__26247__auto____$1 = cljs.core.hash_imap.call(null,this__26429__auto____$1);
self__.__hash = h__26247__auto____$1;

return h__26247__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26430__auto__,other__26431__auto__){
var self__ = this;
var this__26430__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25800__auto__ = other__26431__auto__;
if(cljs.core.truth_(and__25800__auto__)){
var and__25800__auto____$1 = (this__26430__auto____$1.constructor === other__26431__auto__.constructor);
if(and__25800__auto____$1){
return cljs.core.equiv_map.call(null,this__26430__auto____$1,other__26431__auto__);
} else {
return and__25800__auto____$1;
}
} else {
return and__25800__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26443__auto__,k__26444__auto__){
var self__ = this;
var this__26443__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__26444__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26443__auto____$1),self__.__meta),k__26444__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26444__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26441__auto__,k__26442__auto__,G__36131){
var self__ = this;
var this__26441__auto____$1 = this;
var pred__36135 = cljs.core.keyword_identical_QMARK_;
var expr__36136 = k__26442__auto__;
if(cljs.core.truth_(pred__36135.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__36136))){
return (new taoensso.sente.ChWebSocket(G__36131,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36135.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__36136))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__36131,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36135.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__36136))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__36131,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36135.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__36136))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__36131,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36135.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__36136))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__36131,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36135.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__36136))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__36131,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36135.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__36136))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__36131,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36135.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__36136))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,G__36131,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36135.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__36136))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,G__36131,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36135.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__36136))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,G__36131,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36135.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__36136))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__36131,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36135.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__36136))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__36131,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36135.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__36136))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,G__36131,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36135.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__36136))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,G__36131,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26442__auto__,G__36131),null));
}
}
}
}
}
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26446__auto__){
var self__ = this;
var this__26446__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26433__auto__,G__36131){
var self__ = this;
var this__26433__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,G__36131,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26439__auto__,entry__26440__auto__){
var self__ = this;
var this__26439__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26440__auto__)){
return cljs.core._assoc.call(null,this__26439__auto____$1,cljs.core._nth.call(null,entry__26440__auto__,(0)),cljs.core._nth.call(null,entry__26440__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26439__auto____$1,entry__26440__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__36138){
var self__ = this;
var map__36139 = p__36138;
var map__36139__$1 = ((((!((map__36139 == null)))?((((map__36139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36139):map__36139);
var opts = map__36139__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__36139__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__36139__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__36139__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4224527391354244256.clj",750,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__36139,map__36139__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__36139,map__36139__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4425__auto___36175 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___36175)){
var cb_uuid_36176 = temp__4425__auto___36175;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_36176], null),(function (){var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36141){if((e36141 instanceof Error)){
var __t = e36141;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e36141;

}
}})());

var temp__4425__auto___36177__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4425__auto___36177__$1)){
var timeout_ms_36178 = temp__4425__auto___36177__$1;
var c__29943__auto___36179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto___36179,timeout_ms_36178,temp__4425__auto___36177__$1,cb_uuid_36176,temp__4425__auto___36175,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36139,map__36139__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto___36179,timeout_ms_36178,temp__4425__auto___36177__$1,cb_uuid_36176,temp__4425__auto___36175,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36139,map__36139__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_36152){
var state_val_36153 = (state_36152[(1)]);
if((state_val_36153 === (1))){
var inst_36142 = cljs.core.async.timeout.call(null,timeout_ms_36178);
var state_36152__$1 = state_36152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36152__$1,(2),inst_36142);
} else {
if((state_val_36153 === (2))){
var inst_36145 = (state_36152[(7)]);
var inst_36144 = (state_36152[(2)]);
var inst_36145__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_36152__$1 = (function (){var statearr_36154 = state_36152;
(statearr_36154[(7)] = inst_36145__$1);

(statearr_36154[(8)] = inst_36144);

return statearr_36154;
})();
if(cljs.core.truth_(inst_36145__$1)){
var statearr_36155_36180 = state_36152__$1;
(statearr_36155_36180[(1)] = (3));

} else {
var statearr_36156_36181 = state_36152__$1;
(statearr_36156_36181[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36153 === (3))){
var inst_36145 = (state_36152[(7)]);
var inst_36147 = inst_36145.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_36152__$1 = state_36152;
var statearr_36157_36182 = state_36152__$1;
(statearr_36157_36182[(2)] = inst_36147);

(statearr_36157_36182[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36153 === (4))){
var state_36152__$1 = state_36152;
var statearr_36158_36183 = state_36152__$1;
(statearr_36158_36183[(2)] = null);

(statearr_36158_36183[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36153 === (5))){
var inst_36150 = (state_36152[(2)]);
var state_36152__$1 = state_36152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36152__$1,inst_36150);
} else {
return null;
}
}
}
}
}
});})(c__29943__auto___36179,timeout_ms_36178,temp__4425__auto___36177__$1,cb_uuid_36176,temp__4425__auto___36175,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36139,map__36139__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__29831__auto__,c__29943__auto___36179,timeout_ms_36178,temp__4425__auto___36177__$1,cb_uuid_36176,temp__4425__auto___36175,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36139,map__36139__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__29832__auto__ = null;
var taoensso$sente$state_machine__29832__auto____0 = (function (){
var statearr_36162 = [null,null,null,null,null,null,null,null,null];
(statearr_36162[(0)] = taoensso$sente$state_machine__29832__auto__);

(statearr_36162[(1)] = (1));

return statearr_36162;
});
var taoensso$sente$state_machine__29832__auto____1 = (function (state_36152){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_36152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e36163){if((e36163 instanceof Object)){
var ex__29835__auto__ = e36163;
var statearr_36164_36184 = state_36152;
(statearr_36164_36184[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36185 = state_36152;
state_36152 = G__36185;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
taoensso$sente$state_machine__29832__auto__ = function(state_36152){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29832__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29832__auto____1.call(this,state_36152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29832__auto____0;
taoensso$sente$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29832__auto____1;
return taoensso$sente$state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto___36179,timeout_ms_36178,temp__4425__auto___36177__$1,cb_uuid_36176,temp__4425__auto___36175,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36139,map__36139__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__29945__auto__ = (function (){var statearr_36165 = f__29944__auto__.call(null);
(statearr_36165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___36179);

return statearr_36165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto___36179,timeout_ms_36178,temp__4425__auto___36177__$1,cb_uuid_36176,temp__4425__auto___36175,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36139,map__36139__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e36166){if((e36166 instanceof Error)){
var e = e36166;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init4224527391354244256.clj",769,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36139,map__36139__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36139,map__36139__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

var temp__4425__auto___36186 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___36186)){
var cb_uuid_36187 = temp__4425__auto___36186;
var cb_fn_STAR__36188 = (function (){var or__25812__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_36187);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36167){if((e36167 instanceof Error)){
var __t = e36167;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e36167;

}
}}
})();
cb_fn_STAR__36188.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e36166;

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

var temp__4425__auto___36189 = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4425__auto___36189)){
var s_36190 = temp__4425__auto___36189;
s_36190.close((3000),"SENTE_RECONNECT");
} else {
}

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4425__auto__ = (function (){var or__25812__auto__ = taoensso.encore.oget.call(null,window,"WebSocket");
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
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

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4224527391354244256.clj",800,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
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
}catch (e36171){if((e36171 instanceof Error)){
var e = e36171;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init4224527391354244256.clj",811,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_fn,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);

return null;
} else {
throw e36171;

}
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__36172 = _QMARK_socket;
(G__36172["onerror"] = ((function (G__36172,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init4224527391354244256.clj",820,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__36172,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",ws_ev], null);
});})(G__36172,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
});})(G__36172,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__36172["onmessage"] = ((function (G__36172,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__36173 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__36173,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__36173,(1),null);
var or__25812__auto__ = (function (){var and__25800__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__25800__auto__)){
return cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));
} else {
return and__25800__auto__;
}
})();
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
var temp__4423__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4423__auto__)){
var cb_uuid = temp__4423__auto__;
var temp__4423__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4423__auto____$1)){
var cb_fn = temp__4423__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4224527391354244256.clj",838,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4423__auto____$1,cb_uuid,temp__4423__auto__,or__25812__auto__,ppstr,vec__36173,clj,_QMARK_cb_uuid,G__36172,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4423__auto____$1,cb_uuid,temp__4423__auto__,or__25812__auto__,ppstr,vec__36173,clj,_QMARK_cb_uuid,G__36172,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__36172,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__36172["onopen"] = ((function (G__36172,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__36172,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__36172,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__36172,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__36172["onclose"] = ((function (G__36172,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);
});})(G__36172,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

return G__36172;
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

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__26468__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__26468__auto__,writer__26469__auto__){
return cljs.core._write.call(null,writer__26469__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__36133){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__36133),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__36133),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__36133),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__36133),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__36133),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__36133),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__36133),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__36133),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__36133),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__36133),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__36133),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__36133),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__36133),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__36133),null,cljs.core.dissoc.call(null,G__36133,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)),null));
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
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26434__auto__,k__26435__auto__){
var self__ = this;
var this__26434__auto____$1 = this;
return cljs.core._lookup.call(null,this__26434__auto____$1,k__26435__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26436__auto__,k36192,else__26437__auto__){
var self__ = this;
var this__26436__auto____$1 = this;
var G__36194 = (((k36192 instanceof cljs.core.Keyword))?k36192.fqn:null);
switch (G__36194) {
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
return cljs.core.get.call(null,self__.__extmap,k36192,else__26437__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26448__auto__,writer__26449__auto__,opts__26450__auto__){
var self__ = this;
var this__26448__auto____$1 = this;
var pr_pair__26451__auto__ = ((function (this__26448__auto____$1){
return (function (keyval__26452__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26449__auto__,cljs.core.pr_writer,""," ","",opts__26450__auto__,keyval__26452__auto__);
});})(this__26448__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26449__auto__,pr_pair__26451__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__26450__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36191){
var self__ = this;
var G__36191__$1 = this;
return (new cljs.core.RecordIter((0),G__36191__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26432__auto__){
var self__ = this;
var this__26432__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26428__auto__){
var self__ = this;
var this__26428__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26438__auto__){
var self__ = this;
var this__26438__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26429__auto__){
var self__ = this;
var this__26429__auto____$1 = this;
var h__26247__auto__ = self__.__hash;
if(!((h__26247__auto__ == null))){
return h__26247__auto__;
} else {
var h__26247__auto____$1 = cljs.core.hash_imap.call(null,this__26429__auto____$1);
self__.__hash = h__26247__auto____$1;

return h__26247__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26430__auto__,other__26431__auto__){
var self__ = this;
var this__26430__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25800__auto__ = other__26431__auto__;
if(cljs.core.truth_(and__25800__auto__)){
var and__25800__auto____$1 = (this__26430__auto____$1.constructor === other__26431__auto__.constructor);
if(and__25800__auto____$1){
return cljs.core.equiv_map.call(null,this__26430__auto____$1,other__26431__auto__);
} else {
return and__25800__auto____$1;
}
} else {
return and__25800__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26443__auto__,k__26444__auto__){
var self__ = this;
var this__26443__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__26444__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26443__auto____$1),self__.__meta),k__26444__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26444__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26441__auto__,k__26442__auto__,G__36191){
var self__ = this;
var this__26441__auto____$1 = this;
var pred__36195 = cljs.core.keyword_identical_QMARK_;
var expr__36196 = k__26442__auto__;
if(cljs.core.truth_(pred__36195.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__36196))){
return (new taoensso.sente.ChAjaxSocket(G__36191,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36195.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__36196))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__36191,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36195.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__36196))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__36191,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36195.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__36196))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__36191,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36195.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__36196))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__36191,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36195.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__36196))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__36191,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36195.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__36196))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__36191,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36195.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__36196))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,G__36191,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36195.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__36196))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,G__36191,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36195.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__36196))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__36191,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36195.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__36196))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,G__36191,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26442__auto__,G__36191),null));
}
}
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26446__auto__){
var self__ = this;
var this__26446__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26433__auto__,G__36191){
var self__ = this;
var this__26433__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,G__36191,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26439__auto__,entry__26440__auto__){
var self__ = this;
var this__26439__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26440__auto__)){
return cljs.core._assoc.call(null,this__26439__auto____$1,cljs.core._nth.call(null,entry__26440__auto__,(0)),cljs.core._nth.call(null,entry__26440__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26439__auto____$1,entry__26440__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__36198){
var self__ = this;
var map__36199 = p__36198;
var map__36199__$1 = ((((!((map__36199 == null)))?((((map__36199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36199):map__36199);
var opts = map__36199__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__36199__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__36199__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__36199__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4224527391354244256.clj",879,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__36199,map__36199__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__36199,map__36199__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
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
})()], null)),((function (csrf_token,_QMARK_cb_fn,chsk__$1,map__36199,map__36199__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__36201){
var map__36205 = p__36201;
var map__36205__$1 = ((((!((map__36205 == null)))?((((map__36205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36205):map__36205);
var _QMARK_error = cljs.core.get.call(null,map__36205__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__36205__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
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
var vec__36207 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__36207,(0),null);
var _ = cljs.core.nth.call(null,vec__36207,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4224527391354244256.clj",919,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__36207,resp_clj,_,map__36205,map__36205__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__36199,map__36199__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__36207,resp_clj,_,map__36205,map__36205__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__36199,map__36199__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(csrf_token,_QMARK_cb_fn,chsk__$1,map__36199,map__36199__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
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

var temp__4425__auto___36223 = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4425__auto___36223)){
var x_36224 = temp__4425__auto___36223;
x_36224.abort();
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4224527391354244256.clj",940,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(retry_id,chsk__$1))
,null)),null);

var retry_fn = ((function (retry_id,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4224527391354244256.clj",946,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
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
return (function taoensso$sente$poll_fn_$_ajax_cb(p__36215){
var map__36219 = p__36215;
var map__36219__$1 = ((((!((map__36219 == null)))?((((map__36219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36219):map__36219);
var _QMARK_error = cljs.core.get.call(null,map__36219__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__36219__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
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
var vec__36221 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__36221,(0),null);
var _ = cljs.core.nth.call(null,vec__36221,(1),null);
var or__25812__auto___36225 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__25812__auto___36225)){
} else {
var buffered_evs_36226 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_36226);

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

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__26468__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__26468__auto__,writer__26469__auto__){
return cljs.core._write.call(null,writer__26469__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__36193){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__36193),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__36193),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__36193),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__36193),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__36193),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__36193),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__36193),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__36193),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__36193),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__36193),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__36193),null,cljs.core.dissoc.call(null,G__36193,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)),null));
});

taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__36228 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36228) {
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
var args__26889__auto__ = [];
var len__26882__auto___36244 = arguments.length;
var i__26883__auto___36245 = (0);
while(true){
if((i__26883__auto___36245 < len__26882__auto___36244)){
args__26889__auto__.push((arguments[i__26883__auto___36245]));

var G__36246 = (i__26883__auto___36245 + (1));
i__26883__auto___36245 = G__36246;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__36233){
var vec__36234 = p__36233;
var map__36235 = cljs.core.nth.call(null,vec__36234,(0),null);
var map__36235__$1 = ((((!((map__36235 == null)))?((((map__36235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36235):map__36235);
var opts = map__36235__$1;
var ajax_opts = cljs.core.get.call(null,map__36235__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__36235__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__36235__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var client_id = cljs.core.get.call(null,map__36235__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__25812__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__36235__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__36235__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__36235__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__36235__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__36235__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__36235__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__36235__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__36234,(1),null);
if(cljs.core.truth_((function (){var __x = type;
try{if(((function (__x,vec__36234,map__36235,map__36235__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (__x__$1){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),__x__$1);
});})(__x,vec__36234,map__36235,map__36235__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36237){if((e36237 instanceof Error)){
var __t = e36237;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",__x,__t,null);
} else {
throw e36237;

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
}catch (e36238){if((e36238 instanceof Error)){
var __t = e36238;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",__x,__t,null);
} else {
throw e36238;

}
}})())){
} else {
throw (new Error("Assert failed: (have? enc/nblank-str? client-id)"));
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4224527391354244256.clj",1055,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36234,map__36235,map__36235__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__36234,map__36235,map__36235__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init4224527391354244256.clj",1057,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36234,map__36235,map__36235__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__36234,map__36235,map__36235__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var win_location = taoensso.encore.get_window_location.call(null);
var win_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_location);
var host__$1 = (function (){var or__25812__auto__ = host;
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var path__$1 = (function (){var or__25812__auto__ = path;
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__36234,map__36235,map__36235__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__25812__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__25812__auto__){
return or__25812__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__36234,map__36235,map__36235__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36234,map__36235,map__36235__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36234,map__36235,map__36235__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),(function (){var _LT_server_ch = new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs);
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36234,map__36235,map__36235__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36234,map__36235,map__36235__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
} else {
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36234,map__36235,map__36235__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__36239 = ev;
var id = cljs.core.nth.call(null,vec__36239,(0),null);
var _QMARK_data = cljs.core.nth.call(null,vec__36239,(1),null);
var __x_36247 = (function (){try{return cljs.core.namespace.call(null,id);
}catch (e36240){if((e36240 instanceof Error)){
var __t = e36240;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__36230#] (not= p1__36230# \"chsk\")) (namespace id))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e36240;

}
}})();
try{if(((function (__x_36247,vec__36239,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36234,map__36235,map__36235__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (p1__36230_SHARP_){
return cljs.core.not_EQ_.call(null,p1__36230_SHARP_,"chsk");
});})(__x_36247,vec__36239,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36234,map__36235,map__36235__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x_36247)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36241){if((e36241 instanceof Error)){
var __t_36248 = e36241;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__36230#] (not= p1__36230# \"chsk\")) (namespace id))",__x_36247,__t_36248,null);
} else {
throw e36241;

}
}
return ev;
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36234,map__36235,map__36235__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
}
})()], null));
var chsk = (function (){var or__25812__auto__ = (function (){var and__25800__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__25800__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,packer__$1,private_chs,params,cljs.core.atom.call(null,(0)),backoff_ms_fn,cljs.core.atom.call(null,null),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ws","ws",86841443));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
}
})(),cljs.core.atom.call(null,"pending"),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__25800__auto__;
}
})();
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
var and__25800__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__25800__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"state_","state_",957667102)],[cljs.core.atom.call(null,null),client_id,packer__$1,private_chs,params,backoff_ms_fn,(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
}
})(),cljs.core.atom.call(null,"pending"),ajax_opts,lp_timeout_ms,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__25800__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str("chsk")].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__36234,map__36235,map__36235__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__36243 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__36243,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__36243,(1),null);
var ev__$1 = vec__36243;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__36234,map__36235,map__36235__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq36231){
var G__36232 = cljs.core.first.call(null,seq36231);
var seq36231__$1 = cljs.core.next.call(null,seq36231);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36232,seq36231__$1);
});
taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__36455 = opts;
var map__36455__$1 = ((((!((map__36455 == null)))?((((map__36455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36455):map__36455);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36455__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36455__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__29943__auto___36661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto___36661,map__36455,map__36455__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto___36661,map__36455,map__36455__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (state_36586){
var state_val_36587 = (state_36586[(1)]);
if((state_val_36587 === (7))){
var inst_36582 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
var statearr_36588_36662 = state_36586__$1;
(statearr_36588_36662[(2)] = inst_36582);

(statearr_36588_36662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (20))){
var inst_36466 = (state_36586[(7)]);
var inst_36491 = (state_36586[(8)]);
var inst_36465 = (state_36586[(9)]);
var inst_36490 = (state_36586[(10)]);
var inst_36463 = (state_36586[(11)]);
var inst_36464 = (state_36586[(12)]);
var inst_36501 = (function (){var vec__36458 = inst_36463;
var v = inst_36464;
var p = inst_36465;
var stop_QMARK_ = inst_36466;
var map__36469 = inst_36490;
var event_msg = inst_36490;
var event = inst_36491;
return ((function (vec__36458,v,p,stop_QMARK_,map__36469,event_msg,event,inst_36466,inst_36491,inst_36465,inst_36490,inst_36463,inst_36464,state_val_36587,c__29943__auto___36661,map__36455,map__36455__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__36458,v,p,stop_QMARK_,map__36469,event_msg,event,inst_36466,inst_36491,inst_36465,inst_36490,inst_36463,inst_36464,state_val_36587,c__29943__auto___36661,map__36455,map__36455__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_36502 = (new cljs.core.Delay(inst_36501,null));
var inst_36503 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init4224527391354244256.clj",1176,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_36502,null);
var state_36586__$1 = state_36586;
var statearr_36589_36663 = state_36586__$1;
(statearr_36589_36663[(2)] = inst_36503);

(statearr_36589_36663[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (27))){
var inst_36490 = (state_36586[(10)]);
var inst_36508 = (state_36586[(2)]);
var inst_36509 = "(server-event-msg? event-msg)";
var inst_36510 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_36509,inst_36490,inst_36508,null);
var state_36586__$1 = state_36586;
var statearr_36590_36664 = state_36586__$1;
(statearr_36590_36664[(2)] = inst_36510);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36586__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (1))){
var state_36586__$1 = state_36586;
var statearr_36591_36665 = state_36586__$1;
(statearr_36591_36665[(2)] = null);

(statearr_36591_36665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (24))){
var state_36586__$1 = state_36586;
var statearr_36592_36666 = state_36586__$1;
(statearr_36592_36666[(2)] = null);

(statearr_36592_36666[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (39))){
var state_36586__$1 = state_36586;
var statearr_36593_36667 = state_36586__$1;
(statearr_36593_36667[(2)] = null);

(statearr_36593_36667[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (46))){
var inst_36555 = (state_36586[(13)]);
var inst_36563 = (state_36586[(2)]);
var inst_36564 = [inst_36563,null];
var inst_36565 = (new cljs.core.PersistentVector(null,2,(5),inst_36555,inst_36564,null));
var state_36586__$1 = state_36586;
var statearr_36594_36668 = state_36586__$1;
(statearr_36594_36668[(2)] = inst_36565);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36586__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (4))){
var inst_36466 = (state_36586[(7)]);
var inst_36465 = (state_36586[(9)]);
var inst_36463 = (state_36586[(11)]);
var inst_36463__$1 = (state_36586[(2)]);
var inst_36464 = cljs.core.nth.call(null,inst_36463__$1,(0),null);
var inst_36465__$1 = cljs.core.nth.call(null,inst_36463__$1,(1),null);
var inst_36466__$1 = taoensso.encore.kw_identical_QMARK_.call(null,inst_36465__$1,ch_ctrl);
var state_36586__$1 = (function (){var statearr_36595 = state_36586;
(statearr_36595[(7)] = inst_36466__$1);

(statearr_36595[(9)] = inst_36465__$1);

(statearr_36595[(11)] = inst_36463__$1);

(statearr_36595[(12)] = inst_36464);

return statearr_36595;
})();
if(cljs.core.truth_(inst_36466__$1)){
var statearr_36596_36669 = state_36586__$1;
(statearr_36596_36669[(1)] = (5));

} else {
var statearr_36597_36670 = state_36586__$1;
(statearr_36597_36670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (15))){
var inst_36464 = (state_36586[(12)]);
var state_36586__$1 = state_36586;
var statearr_36598_36671 = state_36586__$1;
(statearr_36598_36671[(2)] = inst_36464);

(statearr_36598_36671[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (48))){
var state_36586__$1 = state_36586;
var statearr_36599_36672 = state_36586__$1;
(statearr_36599_36672[(2)] = null);

(statearr_36599_36672[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (21))){
var state_36586__$1 = state_36586;
var statearr_36600_36673 = state_36586__$1;
(statearr_36600_36673[(2)] = null);

(statearr_36600_36673[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (31))){
var inst_36519 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
var statearr_36601_36674 = state_36586__$1;
(statearr_36601_36674[(2)] = inst_36519);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36586__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (32))){
var inst_36536 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
var statearr_36602_36675 = state_36586__$1;
(statearr_36602_36675[(2)] = inst_36536);

(statearr_36602_36675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (40))){
var inst_36579 = (state_36586[(2)]);
var state_36586__$1 = (function (){var statearr_36603 = state_36586;
(statearr_36603[(14)] = inst_36579);

return statearr_36603;
})();
var statearr_36604_36676 = state_36586__$1;
(statearr_36604_36676[(2)] = null);

(statearr_36604_36676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (33))){
var inst_36490 = (state_36586[(10)]);
var inst_36523 = (state_36586[(2)]);
var inst_36524 = "(client-event-msg? event-msg)";
var inst_36525 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_36524,inst_36490,inst_36523,null);
var state_36586__$1 = state_36586;
var statearr_36605_36677 = state_36586__$1;
(statearr_36605_36677[(2)] = inst_36525);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36586__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (13))){
var inst_36482 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
var statearr_36606_36678 = state_36586__$1;
(statearr_36606_36678[(2)] = inst_36482);

(statearr_36606_36678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (22))){
var inst_36506 = (state_36586[(2)]);
var state_36586__$1 = (function (){var statearr_36607 = state_36586;
(statearr_36607[(15)] = inst_36506);

return statearr_36607;
})();
if(cljs.core.truth_(server_QMARK_)){
var statearr_36608_36679 = state_36586__$1;
(statearr_36608_36679[(1)] = (23));

} else {
var statearr_36609_36680 = state_36586__$1;
(statearr_36609_36680[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (36))){
var inst_36532 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_36586__$1 = state_36586;
var statearr_36610_36681 = state_36586__$1;
(statearr_36610_36681[(2)] = inst_36532);

(statearr_36610_36681[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (41))){
var inst_36569 = (state_36586[(16)]);
var inst_36567 = (state_36586[(17)]);
var inst_36567__$1 = (state_36586[(2)]);
var inst_36568 = cljs.core.nth.call(null,inst_36567__$1,(0),null);
var inst_36569__$1 = cljs.core.nth.call(null,inst_36567__$1,(1),null);
var state_36586__$1 = (function (){var statearr_36611 = state_36586;
(statearr_36611[(16)] = inst_36569__$1);

(statearr_36611[(18)] = inst_36568);

(statearr_36611[(17)] = inst_36567__$1);

return statearr_36611;
})();
if(cljs.core.truth_(inst_36569__$1)){
var statearr_36612_36682 = state_36586__$1;
(statearr_36612_36682[(1)] = (47));

} else {
var statearr_36613_36683 = state_36586__$1;
(statearr_36613_36683[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (43))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36586,(42),Error,null,(41));
var inst_36555 = cljs.core.PersistentVector.EMPTY_NODE;
var state_36586__$1 = (function (){var statearr_36614 = state_36586;
(statearr_36614[(13)] = inst_36555);

return statearr_36614;
})();
if(cljs.core.truth_(error_handler)){
var statearr_36615_36684 = state_36586__$1;
(statearr_36615_36684[(1)] = (44));

} else {
var statearr_36616_36685 = state_36586__$1;
(statearr_36616_36685[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (29))){
var inst_36490 = (state_36586[(10)]);
var state_36586__$1 = state_36586;
var statearr_36617_36686 = state_36586__$1;
(statearr_36617_36686[(2)] = inst_36490);

(statearr_36617_36686[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (44))){
var inst_36490 = (state_36586[(10)]);
var inst_36545 = (state_36586[(19)]);
var inst_36557 = error_handler.call(null,inst_36545,inst_36490);
var state_36586__$1 = state_36586;
var statearr_36618_36687 = state_36586__$1;
(statearr_36618_36687[(2)] = inst_36557);

(statearr_36618_36687[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (6))){
var inst_36464 = (state_36586[(12)]);
var inst_36472 = (inst_36464 == null);
var inst_36473 = cljs.core.not.call(null,inst_36472);
var state_36586__$1 = state_36586;
if(inst_36473){
var statearr_36619_36688 = state_36586__$1;
(statearr_36619_36688[(1)] = (8));

} else {
var statearr_36620_36689 = state_36586__$1;
(statearr_36620_36689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (28))){
var inst_36490 = (state_36586[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36586,(27),Error,null,(26));
var inst_36514 = taoensso.sente.server_event_msg_QMARK_.call(null,inst_36490);
var state_36586__$1 = state_36586;
if(cljs.core.truth_(inst_36514)){
var statearr_36621_36690 = state_36586__$1;
(statearr_36621_36690[(1)] = (29));

} else {
var statearr_36622_36691 = state_36586__$1;
(statearr_36622_36691[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (25))){
var inst_36499 = (state_36586[(20)]);
var inst_36538 = (state_36586[(2)]);
var inst_36539 = event_msg_handler.call(null,inst_36538);
var inst_36540 = [inst_36539,null];
var inst_36541 = (new cljs.core.PersistentVector(null,2,(5),inst_36499,inst_36540,null));
var state_36586__$1 = state_36586;
var statearr_36623_36692 = state_36586__$1;
(statearr_36623_36692[(2)] = inst_36541);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36586__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (34))){
var inst_36490 = (state_36586[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36586,(33),Error,null,(32));
var inst_36529 = taoensso.sente.client_event_msg_QMARK_.call(null,inst_36490);
var state_36586__$1 = state_36586;
if(cljs.core.truth_(inst_36529)){
var statearr_36624_36693 = state_36586__$1;
(statearr_36624_36693[(1)] = (35));

} else {
var statearr_36625_36694 = state_36586__$1;
(statearr_36625_36694[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (17))){
var inst_36543 = (state_36586[(21)]);
var inst_36545 = (state_36586[(19)]);
var inst_36543__$1 = (state_36586[(2)]);
var inst_36544 = cljs.core.nth.call(null,inst_36543__$1,(0),null);
var inst_36545__$1 = cljs.core.nth.call(null,inst_36543__$1,(1),null);
var state_36586__$1 = (function (){var statearr_36626 = state_36586;
(statearr_36626[(21)] = inst_36543__$1);

(statearr_36626[(22)] = inst_36544);

(statearr_36626[(19)] = inst_36545__$1);

return statearr_36626;
})();
if(cljs.core.truth_(inst_36545__$1)){
var statearr_36627_36695 = state_36586__$1;
(statearr_36627_36695[(1)] = (38));

} else {
var statearr_36628_36696 = state_36586__$1;
(statearr_36628_36696[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (3))){
var inst_36584 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36586__$1,inst_36584);
} else {
if((state_val_36587 === (12))){
var state_36586__$1 = state_36586;
var statearr_36629_36697 = state_36586__$1;
(statearr_36629_36697[(2)] = false);

(statearr_36629_36697[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (2))){
var inst_36459 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36460 = [ch_recv,ch_ctrl];
var inst_36461 = (new cljs.core.PersistentVector(null,2,(5),inst_36459,inst_36460,null));
var state_36586__$1 = state_36586;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36586__$1,(4),inst_36461);
} else {
if((state_val_36587 === (23))){
var state_36586__$1 = state_36586;
var statearr_36630_36698 = state_36586__$1;
(statearr_36630_36698[(2)] = null);

(statearr_36630_36698[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (47))){
var inst_36543 = (state_36586[(21)]);
var inst_36466 = (state_36586[(7)]);
var inst_36491 = (state_36586[(8)]);
var inst_36465 = (state_36586[(9)]);
var inst_36569 = (state_36586[(16)]);
var inst_36490 = (state_36586[(10)]);
var inst_36568 = (state_36586[(18)]);
var inst_36463 = (state_36586[(11)]);
var inst_36567 = (state_36586[(17)]);
var inst_36545 = (state_36586[(19)]);
var inst_36464 = (state_36586[(12)]);
var inst_36571 = (function (){var vec__36470 = inst_36543;
var p = inst_36465;
var _QMARK_error = inst_36545;
var temp__4425__auto__ = inst_36569;
var v = inst_36464;
var _ = inst_36568;
var e2 = inst_36569;
var vec__36458 = inst_36463;
var _QMARK_error2 = inst_36569;
var event_msg = inst_36490;
var e = inst_36545;
var vec__36547 = inst_36567;
var map__36469 = inst_36490;
var event = inst_36491;
var stop_QMARK_ = inst_36466;
return ((function (vec__36470,p,_QMARK_error,temp__4425__auto__,v,_,e2,vec__36458,_QMARK_error2,event_msg,e,vec__36547,map__36469,event,stop_QMARK_,inst_36543,inst_36466,inst_36491,inst_36465,inst_36569,inst_36490,inst_36568,inst_36463,inst_36567,inst_36545,inst_36464,state_val_36587,c__29943__auto___36661,map__36455,map__36455__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});
;})(vec__36470,p,_QMARK_error,temp__4425__auto__,v,_,e2,vec__36458,_QMARK_error2,event_msg,e,vec__36547,map__36469,event,stop_QMARK_,inst_36543,inst_36466,inst_36491,inst_36465,inst_36569,inst_36490,inst_36568,inst_36463,inst_36567,inst_36545,inst_36464,state_val_36587,c__29943__auto___36661,map__36455,map__36455__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_36572 = (new cljs.core.Delay(inst_36571,null));
var inst_36573 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init4224527391354244256.clj",1189,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_36572,null);
var state_36586__$1 = state_36586;
var statearr_36631_36699 = state_36586__$1;
(statearr_36631_36699[(2)] = inst_36573);

(statearr_36631_36699[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (35))){
var inst_36490 = (state_36586[(10)]);
var state_36586__$1 = state_36586;
var statearr_36632_36700 = state_36586__$1;
(statearr_36632_36700[(2)] = inst_36490);

(statearr_36632_36700[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36586,(18),Error,null,(17));
var inst_36499 = cljs.core.PersistentVector.EMPTY_NODE;
var state_36586__$1 = (function (){var statearr_36633 = state_36586;
(statearr_36633[(20)] = inst_36499);

return statearr_36633;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_36634_36701 = state_36586__$1;
(statearr_36634_36701[(1)] = (20));

} else {
var statearr_36635_36702 = state_36586__$1;
(statearr_36635_36702[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (11))){
var state_36586__$1 = state_36586;
var statearr_36636_36703 = state_36586__$1;
(statearr_36636_36703[(2)] = true);

(statearr_36636_36703[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (9))){
var state_36586__$1 = state_36586;
var statearr_36637_36704 = state_36586__$1;
(statearr_36637_36704[(2)] = false);

(statearr_36637_36704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (5))){
var state_36586__$1 = state_36586;
var statearr_36638_36705 = state_36586__$1;
(statearr_36638_36705[(2)] = null);

(statearr_36638_36705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (14))){
var inst_36464 = (state_36586[(12)]);
var inst_36487 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36464);
var state_36586__$1 = state_36586;
var statearr_36639_36706 = state_36586__$1;
(statearr_36639_36706[(2)] = inst_36487);

(statearr_36639_36706[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (45))){
var inst_36543 = (state_36586[(21)]);
var inst_36466 = (state_36586[(7)]);
var inst_36491 = (state_36586[(8)]);
var inst_36465 = (state_36586[(9)]);
var inst_36490 = (state_36586[(10)]);
var inst_36544 = (state_36586[(22)]);
var inst_36463 = (state_36586[(11)]);
var inst_36545 = (state_36586[(19)]);
var inst_36464 = (state_36586[(12)]);
var inst_36559 = (function (){var vec__36470 = inst_36543;
var p = inst_36465;
var _QMARK_error = inst_36545;
var temp__4425__auto__ = inst_36545;
var v = inst_36464;
var temp__4423__auto__ = error_handler;
var _ = inst_36544;
var vec__36458 = inst_36463;
var event_msg = inst_36490;
var e = inst_36545;
var map__36469 = inst_36490;
var event = inst_36491;
var stop_QMARK_ = inst_36466;
return ((function (vec__36470,p,_QMARK_error,temp__4425__auto__,v,temp__4423__auto__,_,vec__36458,event_msg,e,map__36469,event,stop_QMARK_,inst_36543,inst_36466,inst_36491,inst_36465,inst_36490,inst_36544,inst_36463,inst_36545,inst_36464,state_val_36587,c__29943__auto___36661,map__36455,map__36455__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router `event-msg-handler` error: %s",event], null);
});
;})(vec__36470,p,_QMARK_error,temp__4425__auto__,v,temp__4423__auto__,_,vec__36458,event_msg,e,map__36469,event,stop_QMARK_,inst_36543,inst_36466,inst_36491,inst_36465,inst_36490,inst_36544,inst_36463,inst_36545,inst_36464,state_val_36587,c__29943__auto___36661,map__36455,map__36455__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_36560 = (new cljs.core.Delay(inst_36559,null));
var inst_36561 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init4224527391354244256.clj",1187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_36560,null);
var state_36586__$1 = state_36586;
var statearr_36640_36707 = state_36586__$1;
(statearr_36640_36707[(2)] = inst_36561);

(statearr_36640_36707[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (26))){
var inst_36521 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
var statearr_36641_36708 = state_36586__$1;
(statearr_36641_36708[(2)] = inst_36521);

(statearr_36641_36708[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (16))){
var inst_36490 = (state_36586[(10)]);
var inst_36490__$1 = (state_36586[(2)]);
var inst_36491 = cljs.core.get.call(null,inst_36490__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_36586__$1 = (function (){var statearr_36642 = state_36586;
(statearr_36642[(8)] = inst_36491);

(statearr_36642[(10)] = inst_36490__$1);

return statearr_36642;
})();
var statearr_36643_36709 = state_36586__$1;
(statearr_36643_36709[(2)] = null);

(statearr_36643_36709[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (38))){
var state_36586__$1 = state_36586;
var statearr_36644_36710 = state_36586__$1;
(statearr_36644_36710[(2)] = null);

(statearr_36644_36710[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (30))){
var inst_36517 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_36586__$1 = state_36586;
var statearr_36645_36711 = state_36586__$1;
(statearr_36645_36711[(2)] = inst_36517);

(statearr_36645_36711[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (10))){
var inst_36485 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
if(cljs.core.truth_(inst_36485)){
var statearr_36646_36712 = state_36586__$1;
(statearr_36646_36712[(1)] = (14));

} else {
var statearr_36647_36713 = state_36586__$1;
(statearr_36647_36713[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (18))){
var inst_36492 = (state_36586[(2)]);
var inst_36493 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36494 = [null,inst_36492];
var inst_36495 = (new cljs.core.PersistentVector(null,2,(5),inst_36493,inst_36494,null));
var state_36586__$1 = state_36586;
var statearr_36648_36714 = state_36586__$1;
(statearr_36648_36714[(2)] = inst_36495);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36586__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (42))){
var inst_36548 = (state_36586[(2)]);
var inst_36549 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36550 = [null,inst_36548];
var inst_36551 = (new cljs.core.PersistentVector(null,2,(5),inst_36549,inst_36550,null));
var state_36586__$1 = state_36586;
var statearr_36649_36715 = state_36586__$1;
(statearr_36649_36715[(2)] = inst_36551);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36586__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (37))){
var inst_36534 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
var statearr_36650_36716 = state_36586__$1;
(statearr_36650_36716[(2)] = inst_36534);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36586__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (8))){
var inst_36464 = (state_36586[(12)]);
var inst_36475 = inst_36464.cljs$lang$protocol_mask$partition0$;
var inst_36476 = (inst_36475 & (64));
var inst_36477 = inst_36464.cljs$core$ISeq$;
var inst_36478 = (inst_36476) || (inst_36477);
var state_36586__$1 = state_36586;
if(cljs.core.truth_(inst_36478)){
var statearr_36651_36717 = state_36586__$1;
(statearr_36651_36717[(1)] = (11));

} else {
var statearr_36652_36718 = state_36586__$1;
(statearr_36652_36718[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36587 === (49))){
var inst_36576 = (state_36586[(2)]);
var state_36586__$1 = state_36586;
var statearr_36653_36719 = state_36586__$1;
(statearr_36653_36719[(2)] = inst_36576);

(statearr_36653_36719[(1)] = (40));


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
});})(c__29943__auto___36661,map__36455,map__36455__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
;
return ((function (switch__29831__auto__,c__29943__auto___36661,map__36455,map__36455__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29832__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29832__auto____0 = (function (){
var statearr_36657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36657[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29832__auto__);

(statearr_36657[(1)] = (1));

return statearr_36657;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29832__auto____1 = (function (state_36586){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_36586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e36658){if((e36658 instanceof Object)){
var ex__29835__auto__ = e36658;
var statearr_36659_36720 = state_36586;
(statearr_36659_36720[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36721 = state_36586;
state_36586 = G__36721;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29832__auto__ = function(state_36586){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29832__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29832__auto____1.call(this,state_36586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29832__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29832__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto___36661,map__36455,map__36455__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var state__29945__auto__ = (function (){var statearr_36660 = f__29944__auto__.call(null);
(statearr_36660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___36661);

return statearr_36660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto___36661,map__36455,map__36455__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
);


return ((function (map__36455,map__36455__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__36455,map__36455__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
});
/**
 * Creates a go-loop to call `(event-msg-handler <server-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__26889__auto__ = [];
var len__26882__auto___36729 = arguments.length;
var i__26883__auto___36730 = (0);
while(true){
if((i__26883__auto___36730 < len__26882__auto___36729)){
args__26889__auto__.push((arguments[i__26883__auto___36730]));

var G__36731 = (i__26883__auto___36730 + (1));
i__26883__auto___36730 = G__36731;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((2) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26890__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__36725){
var vec__36726 = p__36725;
var map__36727 = cljs.core.nth.call(null,vec__36726,(0),null);
var map__36727__$1 = ((((!((map__36727 == null)))?((((map__36727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36727):map__36727);
var opts = map__36727__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36727__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36727__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq36722){
var G__36723 = cljs.core.first.call(null,seq36722);
var seq36722__$1 = cljs.core.next.call(null,seq36722);
var G__36724 = cljs.core.first.call(null,seq36722__$1);
var seq36722__$2 = cljs.core.next.call(null,seq36722__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36723,G__36724,seq36722__$2);
});
/**
 * Creates a go-loop to call `(event-msg-handler <client-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__26889__auto__ = [];
var len__26882__auto___36739 = arguments.length;
var i__26883__auto___36740 = (0);
while(true){
if((i__26883__auto___36740 < len__26882__auto___36739)){
args__26889__auto__.push((arguments[i__26883__auto___36740]));

var G__36741 = (i__26883__auto___36740 + (1));
i__26883__auto___36740 = G__36741;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((2) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26890__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__36735){
var vec__36736 = p__36735;
var map__36737 = cljs.core.nth.call(null,vec__36736,(0),null);
var map__36737__$1 = ((((!((map__36737 == null)))?((((map__36737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36737):map__36737);
var opts = map__36737__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36737__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36737__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq36732){
var G__36733 = cljs.core.first.call(null,seq36732);
var seq36732__$1 = cljs.core.next.call(null,seq36732);
var G__36734 = cljs.core.first.call(null,seq36732__$1);
var seq36732__$2 = cljs.core.next.call(null,seq36732__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36733,G__36734,seq36732__$2);
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__36742,websocket_QMARK_){
var map__36745 = p__36742;
var map__36745__$1 = ((((!((map__36745 == null)))?((((map__36745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36745):map__36745);
var location = map__36745__$1;
var adjusted_protocol = cljs.core.get.call(null,map__36745__$1,new cljs.core.Keyword(null,"adjusted-protocol","adjusted-protocol",37431492));
var host = cljs.core.get.call(null,map__36745__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__36745__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str(adjusted_protocol),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__25812__auto__ = path;
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map