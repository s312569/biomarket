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
var vec__33875 = x;
var ev_id = cljs.core.nth.call(null,vec__33875,(0),null);
var _ = cljs.core.nth.call(null,vec__33875,(1),null);
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
var err_fmt = [cljs.core.str((function (){var G__33877 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__33877) {
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
var and__24077__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__24077__auto__){
var and__24077__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__24077__auto____$1)){
var map__33881 = x;
var map__33881__$1 = ((((!((map__33881 == null)))?((((map__33881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33881):map__33881);
var ch_recv = cljs.core.get.call(null,map__33881__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__33881__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__33881__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__33881__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__24077__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__24077__auto____$2)){
var and__24077__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__24077__auto____$3){
var and__24077__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(cljs.core.truth_(and__24077__auto____$4)){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__24077__auto____$4;
}
} else {
return and__24077__auto____$3;
}
} else {
return and__24077__auto____$2;
}
} else {
return and__24077__auto____$1;
}
} else {
return and__24077__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__24077__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__24077__auto__){
var and__24077__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__24077__auto____$1)){
var map__33885 = x;
var map__33885__$1 = ((((!((map__33885 == null)))?((((map__33885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33885):map__33885);
var ch_recv = cljs.core.get.call(null,map__33885__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__33885__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__33885__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__33885__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__33885__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__33885__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__33885__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__24077__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__24077__auto____$2)){
var and__24077__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__24077__auto____$3){
var and__24077__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(cljs.core.truth_(and__24077__auto____$4)){
var and__24077__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__24077__auto____$5){
var and__24077__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(cljs.core.truth_(and__24077__auto____$6)){
var and__24077__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__24077__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__24077__auto____$7;
}
} else {
return and__24077__auto____$6;
}
} else {
return and__24077__auto____$5;
}
} else {
return and__24077__auto____$4;
}
} else {
return and__24077__auto____$3;
}
} else {
return and__24077__auto____$2;
}
} else {
return and__24077__auto____$1;
}
} else {
return and__24077__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__33887){
var map__33891 = p__33887;
var map__33891__$1 = ((((!((map__33891 == null)))?((((map__33891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33891):map__33891);
var ev_msg = map__33891__$1;
var event = cljs.core.get.call(null,map__33891__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__33891__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__33893 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__33893,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__33893,(1),null);
var valid_event = vec__33893;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init5149356545264029088.clj",159,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__33893,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__33891,map__33891__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__33893,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__33891,map__33891__$1,ev_msg,event,_QMARK_reply_fn))
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
}catch (e33897){if((e33897 instanceof Error)){
var __t = e33897;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? pstr)",__x,__t,null);
} else {
throw e33897;

}
}})());
}catch (e33896){var t = e33896;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init5149356545264029088.clj",175,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t){
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
var args33898 = [];
var len__25159__auto___33901 = arguments.length;
var i__25160__auto___33902 = (0);
while(true){
if((i__25160__auto___33902 < len__25159__auto___33901)){
args33898.push((arguments[i__25160__auto___33902]));

var G__33903 = (i__25160__auto___33902 + (1));
i__25160__auto___33902 = G__33903;
continue;
} else {
}
break;
}

var G__33900 = args33898.length;
switch (G__33900) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33898.length)].join('')));

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
var args__25166__auto__ = [];
var len__25159__auto___33906 = arguments.length;
var i__25160__auto___33907 = (0);
while(true){
if((i__25160__auto___33907 < len__25159__auto___33906)){
args__25166__auto__.push((arguments[i__25160__auto___33907]));

var G__33908 = (i__25160__auto___33907 + (1));
i__25160__auto___33907 = G__33908;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((0) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((0)),(0),null)):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__25167__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init5149356545264029088.clj",193,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing: %s -> %s",args,pstr], null);
});})(pstr))
,null)),null);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq33905){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33905));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
var __x_33915 = prefixed_pstr;
try{if(typeof __x_33915 === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33912){if((e33912 instanceof Error)){
var __t_33916 = e33912;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",__x_33915,__t_33916,null);
} else {
throw e33912;

}
}
var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__33914 = prefix;
switch (G__33914) {
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
var vec__33913 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__33913,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__33913,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init5149356545264029088.clj",205,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (prefix,pstr,clj,wrapped_QMARK_,vec__33913,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(prefix,pstr,clj,wrapped_QMARK_,vec__33913,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
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
var args__25166__auto__ = [];
var len__25159__auto___34087 = arguments.length;
var i__25160__auto___34088 = (0);
while(true){
if((i__25160__auto___34088 < len__25159__auto___34087)){
args__25166__auto__.push((arguments[i__25160__auto___34088]));

var G__34089 = (i__25160__auto___34088 + (1));
i__25160__auto___34088 = G__34089;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_adapter,p__33921){
var vec__33922 = p__33921;
var map__33923 = cljs.core.nth.call(null,vec__33922,(0),null);
var map__33923__$1 = ((((!((map__33923 == null)))?((((map__33923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33923):map__33923);
var recv_buf_or_n = cljs.core.get.call(null,map__33923__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__33923__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__33923__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__33923__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__33923__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__24089__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
var or__24089__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__24089__auto____$1)){
return or__24089__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__33923__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__33923__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var __x = send_buf_ms_ajax;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33925){if((e33925 instanceof Error)){
var __t = e33925;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",__x,__t,null);
} else {
throw e33925;

}
}})(),(function (){var __x = send_buf_ms_ws;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33926){if((e33926 instanceof Error)){
var __t = e33926;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",__x,__t,null);
} else {
throw e33926;

}
}})()], null))){
} else {
throw (new Error("Assert failed: (have? enc/pos-int? send-buf-ms-ajax send-buf-ms-ws)"));
}

if(cljs.core.truth_((function (){var __x = web_server_adapter;
try{if(((function (__x,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__33918_SHARP_){
if(!((p1__33918_SHARP_ == null))){
if((false) || (p1__33918_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__33918_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__33918_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__33918_SHARP_);
}
});})(__x,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33927){if((e33927 instanceof Error)){
var __t = e33927;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__33918#] (satisfies? interfaces/IServerChanAdapter p1__33918#)) web-server-adapter)",__x,__t,null);
} else {
throw e33927;

}
}})())){
} else {
throw (new Error("Assert failed: (have? (fn* [p1__33918#] (satisfies? interfaces/IServerChanAdapter p1__33918#)) web-server-adapter)"));
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var user_id_fn__$1 = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__24089__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type,uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33929){if((e33929 instanceof Error)){
var __t = e33929;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e33929;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__33930){
var map__33931 = p__33930;
var map__33931__$1 = ((((!((map__33931 == null)))?((((map__33931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33931):map__33931);
var old_m = map__33931__$1;
var ws = cljs.core.get.call(null,map__33931__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__33931__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__33931__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__33933 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33933) {
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
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33934){if((e33934 instanceof Error)){
var __t = e33934;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e33934;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__33935){
var map__33936 = p__33935;
var map__33936__$1 = ((((!((map__33936 == null)))?((((map__33936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33936):map__33936);
var old_m = map__33936__$1;
var ws = cljs.core.get.call(null,map__33936__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__33936__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__33936__$1,new cljs.core.Keyword(null,"any","any",1705907423));
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
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__34091__delegate = function (user_id,ev,p__33938){
var vec__33939 = p__33938;
var map__33940 = cljs.core.nth.call(null,vec__33939,(0),null);
var map__33940__$1 = ((((!((map__33940 == null)))?((((map__33940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33940):map__33940);
var opts = map__33940__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__33940__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_34092 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __34093 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init5149356545264029088.clj",324,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_34092,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_34092,ev], null);
});})(uid_34092,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var __34094__$1 = (cljs.core.truth_(uid_34092)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __34095__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_34096 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__34097 = ((function (uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type){
var temp__4425__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),((function (uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__33942 = cljs.core.get.call(null,m,uid_34092);
var ___$3 = cljs.core.nth.call(null,vec__33942,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__33942,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_34096)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_34092),cljs.core.get.call(null,m,uid_34092));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4425__auto__)){
var pulled = temp__4425__auto__;
var vec__33943 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__33943,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__33943,(1),null);
var __x_34098 = buffered_evs;
try{if(cljs.core.vector_QMARK_.call(null,__x_34098)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33944){if((e33944 instanceof Error)){
var __t_34099 = e33944;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",__x_34098,__t_34099,null);
} else {
throw e33944;

}
}
var __x_34100 = ev_uuids;
try{if(cljs.core.set_QMARK_.call(null,__x_34100)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33945){if((e33945 instanceof Error)){
var __t_34101 = e33945;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",__x_34100,__t_34101,null);
} else {
throw e33945;

}
}
var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init5149356545264029088.clj",357,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__33943,buffered_evs,ev_uuids,pulled,temp__4425__auto__,uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__33943,buffered_evs,ev_uuids,pulled,temp__4425__auto__,uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var G__33946 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33946) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_34092,buffered_evs_ppstr);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_34092,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
} else {
return null;
}
});})(uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init5149356545264029088.clj",367,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,flush_buffer_BANG__34097,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_34092], null);
});})(uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,flush_buffer_BANG__34097,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

if(cljs.core.truth_(flush_QMARK_)){
var seq__33947_34103 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__33948_34104 = null;
var count__33949_34105 = (0);
var i__33950_34106 = (0);
while(true){
if((i__33950_34106 < count__33949_34105)){
var type_34107 = cljs.core._nth.call(null,chunk__33948_34104,i__33950_34106);
flush_buffer_BANG__34097.call(null,type_34107);

var G__34108 = seq__33947_34103;
var G__34109 = chunk__33948_34104;
var G__34110 = count__33949_34105;
var G__34111 = (i__33950_34106 + (1));
seq__33947_34103 = G__34108;
chunk__33948_34104 = G__34109;
count__33949_34105 = G__34110;
i__33950_34106 = G__34111;
continue;
} else {
var temp__4425__auto___34112 = cljs.core.seq.call(null,seq__33947_34103);
if(temp__4425__auto___34112){
var seq__33947_34113__$1 = temp__4425__auto___34112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33947_34113__$1)){
var c__24900__auto___34114 = cljs.core.chunk_first.call(null,seq__33947_34113__$1);
var G__34115 = cljs.core.chunk_rest.call(null,seq__33947_34113__$1);
var G__34116 = c__24900__auto___34114;
var G__34117 = cljs.core.count.call(null,c__24900__auto___34114);
var G__34118 = (0);
seq__33947_34103 = G__34115;
chunk__33948_34104 = G__34116;
count__33949_34105 = G__34117;
i__33950_34106 = G__34118;
continue;
} else {
var type_34119 = cljs.core.first.call(null,seq__33947_34113__$1);
flush_buffer_BANG__34097.call(null,type_34119);

var G__34120 = cljs.core.next.call(null,seq__33947_34113__$1);
var G__34121 = null;
var G__34122 = (0);
var G__34123 = (0);
seq__33947_34103 = G__34120;
chunk__33948_34104 = G__34121;
count__33949_34105 = G__34122;
i__33950_34106 = G__34123;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__33951_34124 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_34092], null))));
var chunk__33952_34125 = null;
var count__33953_34126 = (0);
var i__33954_34127 = (0);
while(true){
if((i__33954_34127 < count__33953_34126)){
var server_ch_34128 = cljs.core._nth.call(null,chunk__33952_34125,i__33954_34127);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_34128);

var G__34129 = seq__33951_34124;
var G__34130 = chunk__33952_34125;
var G__34131 = count__33953_34126;
var G__34132 = (i__33954_34127 + (1));
seq__33951_34124 = G__34129;
chunk__33952_34125 = G__34130;
count__33953_34126 = G__34131;
i__33954_34127 = G__34132;
continue;
} else {
var temp__4425__auto___34133 = cljs.core.seq.call(null,seq__33951_34124);
if(temp__4425__auto___34133){
var seq__33951_34134__$1 = temp__4425__auto___34133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33951_34134__$1)){
var c__24900__auto___34135 = cljs.core.chunk_first.call(null,seq__33951_34134__$1);
var G__34136 = cljs.core.chunk_rest.call(null,seq__33951_34134__$1);
var G__34137 = c__24900__auto___34135;
var G__34138 = cljs.core.count.call(null,c__24900__auto___34135);
var G__34139 = (0);
seq__33951_34124 = G__34136;
chunk__33952_34125 = G__34137;
count__33953_34126 = G__34138;
i__33954_34127 = G__34139;
continue;
} else {
var server_ch_34140 = cljs.core.first.call(null,seq__33951_34134__$1);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_34140);

var G__34141 = cljs.core.next.call(null,seq__33951_34134__$1);
var G__34142 = null;
var G__34143 = (0);
var G__34144 = (0);
seq__33951_34124 = G__34141;
chunk__33952_34125 = G__34142;
count__33953_34126 = G__34143;
i__33954_34127 = G__34144;
continue;
}
} else {
}
}
break;
}

var seq__33955_34145 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_34092], null))));
var chunk__33956_34146 = null;
var count__33957_34147 = (0);
var i__33958_34148 = (0);
while(true){
if((i__33958_34148 < count__33957_34147)){
var vec__33959_34149 = cljs.core._nth.call(null,chunk__33956_34146,i__33958_34148);
var _QMARK_server_ch_34150 = cljs.core.nth.call(null,vec__33959_34149,(0),null);
var __34151__$3 = cljs.core.nth.call(null,vec__33959_34149,(1),null);
var temp__4425__auto___34152 = _QMARK_server_ch_34150;
if(cljs.core.truth_(temp__4425__auto___34152)){
var server_ch_34153 = temp__4425__auto___34152;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_34153);
} else {
}

var G__34154 = seq__33955_34145;
var G__34155 = chunk__33956_34146;
var G__34156 = count__33957_34147;
var G__34157 = (i__33958_34148 + (1));
seq__33955_34145 = G__34154;
chunk__33956_34146 = G__34155;
count__33957_34147 = G__34156;
i__33958_34148 = G__34157;
continue;
} else {
var temp__4425__auto___34158 = cljs.core.seq.call(null,seq__33955_34145);
if(temp__4425__auto___34158){
var seq__33955_34159__$1 = temp__4425__auto___34158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33955_34159__$1)){
var c__24900__auto___34160 = cljs.core.chunk_first.call(null,seq__33955_34159__$1);
var G__34161 = cljs.core.chunk_rest.call(null,seq__33955_34159__$1);
var G__34162 = c__24900__auto___34160;
var G__34163 = cljs.core.count.call(null,c__24900__auto___34160);
var G__34164 = (0);
seq__33955_34145 = G__34161;
chunk__33956_34146 = G__34162;
count__33957_34147 = G__34163;
i__33958_34148 = G__34164;
continue;
} else {
var vec__33960_34165 = cljs.core.first.call(null,seq__33955_34159__$1);
var _QMARK_server_ch_34166 = cljs.core.nth.call(null,vec__33960_34165,(0),null);
var __34167__$3 = cljs.core.nth.call(null,vec__33960_34165,(1),null);
var temp__4425__auto___34168__$1 = _QMARK_server_ch_34166;
if(cljs.core.truth_(temp__4425__auto___34168__$1)){
var server_ch_34169 = temp__4425__auto___34168__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_34169);
} else {
}

var G__34170 = cljs.core.next.call(null,seq__33955_34159__$1);
var G__34171 = null;
var G__34172 = (0);
var G__34173 = (0);
seq__33955_34145 = G__34170;
chunk__33956_34146 = G__34171;
count__33957_34147 = G__34172;
i__33958_34148 = G__34173;
continue;
}
} else {
}
}
break;
}
} else {
var seq__33961_34174 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__33962_34175 = null;
var count__33963_34176 = (0);
var i__33964_34177 = (0);
while(true){
if((i__33964_34177 < count__33963_34176)){
var type_34178 = cljs.core._nth.call(null,chunk__33962_34175,i__33964_34177);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_34178,uid_34092], null),((function (seq__33961_34174,chunk__33962_34175,count__33963_34176,i__33964_34177,type_34178,uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,flush_buffer_BANG__34097,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_34096], true)], null);
} else {
var vec__33965 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__33965,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__33965,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_34096)], null);
}
});})(seq__33961_34174,chunk__33962_34175,count__33963_34176,i__33964_34177,type_34178,uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,flush_buffer_BANG__34097,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__34179 = seq__33961_34174;
var G__34180 = chunk__33962_34175;
var G__34181 = count__33963_34176;
var G__34182 = (i__33964_34177 + (1));
seq__33961_34174 = G__34179;
chunk__33962_34175 = G__34180;
count__33963_34176 = G__34181;
i__33964_34177 = G__34182;
continue;
} else {
var temp__4425__auto___34183 = cljs.core.seq.call(null,seq__33961_34174);
if(temp__4425__auto___34183){
var seq__33961_34184__$1 = temp__4425__auto___34183;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33961_34184__$1)){
var c__24900__auto___34185 = cljs.core.chunk_first.call(null,seq__33961_34184__$1);
var G__34186 = cljs.core.chunk_rest.call(null,seq__33961_34184__$1);
var G__34187 = c__24900__auto___34185;
var G__34188 = cljs.core.count.call(null,c__24900__auto___34185);
var G__34189 = (0);
seq__33961_34174 = G__34186;
chunk__33962_34175 = G__34187;
count__33963_34176 = G__34188;
i__33964_34177 = G__34189;
continue;
} else {
var type_34190 = cljs.core.first.call(null,seq__33961_34184__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_34190,uid_34092], null),((function (seq__33961_34174,chunk__33962_34175,count__33963_34176,i__33964_34177,type_34190,seq__33961_34184__$1,temp__4425__auto___34183,uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,flush_buffer_BANG__34097,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_34096], true)], null);
} else {
var vec__33966 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__33966,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__33966,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_34096)], null);
}
});})(seq__33961_34174,chunk__33962_34175,count__33963_34176,i__33964_34177,type_34190,seq__33961_34184__$1,temp__4425__auto___34183,uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,flush_buffer_BANG__34097,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__34191 = cljs.core.next.call(null,seq__33961_34184__$1);
var G__34192 = null;
var G__34193 = (0);
var G__34194 = (0);
seq__33961_34174 = G__34191;
chunk__33962_34175 = G__34192;
count__33963_34176 = G__34193;
i__33964_34177 = G__34194;
continue;
}
} else {
}
}
break;
}

var c__28220__auto___34195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto___34195,uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,flush_buffer_BANG__34097,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto___34195,uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,flush_buffer_BANG__34097,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_33976){
var state_val_33977 = (state_33976[(1)]);
if((state_val_33977 === (1))){
var state_33976__$1 = state_33976;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_33978_34196 = state_33976__$1;
(statearr_33978_34196[(1)] = (2));

} else {
var statearr_33979_34197 = state_33976__$1;
(statearr_33979_34197[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33977 === (2))){
var state_33976__$1 = state_33976;
var statearr_33980_34198 = state_33976__$1;
(statearr_33980_34198[(2)] = null);

(statearr_33980_34198[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33977 === (3))){
var inst_33969 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var state_33976__$1 = state_33976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33976__$1,(5),inst_33969);
} else {
if((state_val_33977 === (4))){
var inst_33973 = (state_33976[(2)]);
var inst_33974 = flush_buffer_BANG__34097.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_33976__$1 = (function (){var statearr_33981 = state_33976;
(statearr_33981[(7)] = inst_33973);

return statearr_33981;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33976__$1,inst_33974);
} else {
if((state_val_33977 === (5))){
var inst_33971 = (state_33976[(2)]);
var state_33976__$1 = state_33976;
var statearr_33982_34199 = state_33976__$1;
(statearr_33982_34199[(2)] = inst_33971);

(statearr_33982_34199[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__28220__auto___34195,uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,flush_buffer_BANG__34097,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28108__auto__,c__28220__auto___34195,uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,flush_buffer_BANG__34097,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28109__auto__ = null;
var taoensso$sente$state_machine__28109__auto____0 = (function (){
var statearr_33986 = [null,null,null,null,null,null,null,null];
(statearr_33986[(0)] = taoensso$sente$state_machine__28109__auto__);

(statearr_33986[(1)] = (1));

return statearr_33986;
});
var taoensso$sente$state_machine__28109__auto____1 = (function (state_33976){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_33976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e33987){if((e33987 instanceof Object)){
var ex__28112__auto__ = e33987;
var statearr_33988_34200 = state_33976;
(statearr_33988_34200[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34201 = state_33976;
state_33976 = G__34201;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
taoensso$sente$state_machine__28109__auto__ = function(state_33976){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28109__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28109__auto____1.call(this,state_33976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28109__auto____0;
taoensso$sente$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28109__auto____1;
return taoensso$sente$state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto___34195,uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,flush_buffer_BANG__34097,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__28222__auto__ = (function (){var statearr_33989 = f__28221__auto__.call(null);
(statearr_33989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___34195);

return statearr_33989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto___34195,uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,flush_buffer_BANG__34097,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__28220__auto___34202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto___34202,uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,flush_buffer_BANG__34097,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto___34202,uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,flush_buffer_BANG__34097,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_33999){
var state_val_34000 = (state_33999[(1)]);
if((state_val_34000 === (1))){
var state_33999__$1 = state_33999;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_34001_34203 = state_33999__$1;
(statearr_34001_34203[(1)] = (2));

} else {
var statearr_34002_34204 = state_33999__$1;
(statearr_34002_34204[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (2))){
var state_33999__$1 = state_33999;
var statearr_34003_34205 = state_33999__$1;
(statearr_34003_34205[(2)] = null);

(statearr_34003_34205[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (3))){
var inst_33992 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var state_33999__$1 = state_33999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33999__$1,(5),inst_33992);
} else {
if((state_val_34000 === (4))){
var inst_33996 = (state_33999[(2)]);
var inst_33997 = flush_buffer_BANG__34097.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_33999__$1 = (function (){var statearr_34004 = state_33999;
(statearr_34004[(7)] = inst_33996);

return statearr_34004;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33999__$1,inst_33997);
} else {
if((state_val_34000 === (5))){
var inst_33994 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34005_34206 = state_33999__$1;
(statearr_34005_34206[(2)] = inst_33994);

(statearr_34005_34206[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__28220__auto___34202,uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,flush_buffer_BANG__34097,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28108__auto__,c__28220__auto___34202,uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,flush_buffer_BANG__34097,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28109__auto__ = null;
var taoensso$sente$state_machine__28109__auto____0 = (function (){
var statearr_34009 = [null,null,null,null,null,null,null,null];
(statearr_34009[(0)] = taoensso$sente$state_machine__28109__auto__);

(statearr_34009[(1)] = (1));

return statearr_34009;
});
var taoensso$sente$state_machine__28109__auto____1 = (function (state_33999){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_33999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e34010){if((e34010 instanceof Object)){
var ex__28112__auto__ = e34010;
var statearr_34011_34207 = state_33999;
(statearr_34011_34207[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34208 = state_33999;
state_33999 = G__34208;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
taoensso$sente$state_machine__28109__auto__ = function(state_33999){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28109__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28109__auto____1.call(this,state_33999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28109__auto____0;
taoensso$sente$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28109__auto____1;
return taoensso$sente$state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto___34202,uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,flush_buffer_BANG__34097,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__28222__auto__ = (function (){var statearr_34012 = f__28221__auto__.call(null);
(statearr_34012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___34202);

return statearr_34012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto___34202,uid_34092,__34093,__34094__$1,__34095__$2,ev_uuid_34096,flush_buffer_BANG__34097,vec__33939,map__33940,map__33940__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}

return null;
};
var G__34091 = function (user_id,ev,var_args){
var p__33938 = null;
if (arguments.length > 2) {
var G__34209__i = 0, G__34209__a = new Array(arguments.length -  2);
while (G__34209__i < G__34209__a.length) {G__34209__a[G__34209__i] = arguments[G__34209__i + 2]; ++G__34209__i;}
  p__33938 = new cljs.core.IndexedSeq(G__34209__a,0);
} 
return G__34091__delegate.call(this,user_id,ev,p__33938);};
G__34091.cljs$lang$maxFixedArity = 2;
G__34091.cljs$lang$applyTo = (function (arglist__34210){
var user_id = cljs.core.first(arglist__34210);
arglist__34210 = cljs.core.next(arglist__34210);
var ev = cljs.core.first(arglist__34210);
var p__33938 = cljs.core.rest(arglist__34210);
return G__34091__delegate(user_id,ev,p__33938);
});
G__34091.cljs$core$IFn$_invoke$arity$variadic = G__34091__delegate;
return G__34091;
})()
;})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__34013 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__34013,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__34013,(1),null);
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?((function (params,ppstr,client_id,vec__34013,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init5149356545264029088.clj",435,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__34013,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): %s",resp_clj], null);
});})(params,ppstr,client_id,vec__34013,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
});})(params,ppstr,client_id,vec__34013,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
return null;
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init5149356545264029088.clj",442,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__34013,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): dummy-cb-200"], null);
});})(params,ppstr,client_id,vec__34013,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337)),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var csrf_token = csrf_token_fn.call(null,ring_req);
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var websocket_QMARK_ = new cljs.core.Keyword(null,"websocket?","websocket?",1552493139).cljs$core$IFn$_invoke$arity$1(ring_req);
var receive_event_msg_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__34211__delegate = function (event,p__34014){
var vec__34015 = p__34014;
var _QMARK_reply_fn = cljs.core.nth.call(null,vec__34015,(0),null);
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
};
var G__34211 = function (event,var_args){
var p__34014 = null;
if (arguments.length > 1) {
var G__34212__i = 0, G__34212__a = new Array(arguments.length -  1);
while (G__34212__i < G__34212__a.length) {G__34212__a[G__34212__i] = arguments[G__34212__i + 1]; ++G__34212__i;}
  p__34014 = new cljs.core.IndexedSeq(G__34212__a,0);
} 
return G__34211__delegate.call(this,event,p__34014);};
G__34211.cljs$lang$maxFixedArity = 1;
G__34211.cljs$lang$applyTo = (function (arglist__34213){
var event = cljs.core.first(arglist__34213);
var p__34014 = cljs.core.rest(arglist__34213);
return G__34211__delegate(event,p__34014);
});
G__34211.cljs$core$IFn$_invoke$arity$variadic = G__34211__delegate;
return G__34211;
})()
;})(csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var handshake_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init5149356545264029088.clj",467,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handshake!"], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = ((!((_QMARK_handshake_data == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev),cljs.core.not.call(null,websocket_QMARK_));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init5149356545264029088.clj",479,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init5149356545264029088.clj",487,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,[cljs.core.str(server_ch)].join('')], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

taoensso.encore.reset_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id], null),server_ch);

if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954)], null));
} else {
}

return handshake_BANG_.call(null,server_ch);
} else {
var initial_conn_from_client_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_ch,taoensso.encore.now_udt.call(null)], null),(_QMARK_v == null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
var handshake_QMARK_ = (function (){var or__24089__auto__ = initial_conn_from_client_QMARK_;
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
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
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,req_ppstr){
var vec__34016 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__34016,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__34016,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__34016,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init5149356545264029088.clj",514,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__34016,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__34016,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__34016,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,status){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
if(cljs.core.empty_QMARK_.call(null,new_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return new_m;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var c__28220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_34030){
var state_val_34031 = (state_34030[(1)]);
if((state_val_34031 === (1))){
var inst_34017 = cljs.core.async.timeout.call(null,(5000));
var state_34030__$1 = state_34030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34030__$1,(2),inst_34017);
} else {
if((state_val_34031 === (2))){
var inst_34019 = (state_34030[(2)]);
var inst_34020 = upd_connected_uid_BANG_.call(null,uid);
var state_34030__$1 = (function (){var statearr_34032 = state_34030;
(statearr_34032[(7)] = inst_34019);

return statearr_34032;
})();
if(cljs.core.truth_(inst_34020)){
var statearr_34033_34214 = state_34030__$1;
(statearr_34033_34214[(1)] = (3));

} else {
var statearr_34034_34215 = state_34030__$1;
(statearr_34034_34215[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34031 === (3))){
var inst_34022 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34023 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_34024 = (new cljs.core.PersistentVector(null,1,(5),inst_34022,inst_34023,null));
var inst_34025 = receive_event_msg_BANG_.call(null,inst_34024);
var state_34030__$1 = state_34030;
var statearr_34035_34216 = state_34030__$1;
(statearr_34035_34216[(2)] = inst_34025);

(statearr_34035_34216[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34031 === (4))){
var state_34030__$1 = state_34030;
var statearr_34036_34217 = state_34030__$1;
(statearr_34036_34217[(2)] = null);

(statearr_34036_34217[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34031 === (5))){
var inst_34028 = (state_34030[(2)]);
var state_34030__$1 = state_34030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34030__$1,inst_34028);
} else {
return null;
}
}
}
}
}
});})(c__28220__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28108__auto__,c__28220__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28109__auto__ = null;
var taoensso$sente$state_machine__28109__auto____0 = (function (){
var statearr_34040 = [null,null,null,null,null,null,null,null];
(statearr_34040[(0)] = taoensso$sente$state_machine__28109__auto__);

(statearr_34040[(1)] = (1));

return statearr_34040;
});
var taoensso$sente$state_machine__28109__auto____1 = (function (state_34030){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_34030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e34041){if((e34041 instanceof Object)){
var ex__28112__auto__ = e34041;
var statearr_34042_34218 = state_34030;
(statearr_34042_34218[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34219 = state_34030;
state_34030 = G__34219;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
taoensso$sente$state_machine__28109__auto__ = function(state_34030){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28109__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28109__auto____1.call(this,state_34030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28109__auto____0;
taoensso$sente$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28109__auto____1;
return taoensso$sente$state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__28222__auto__ = (function (){var statearr_34043 = f__28221__auto__.call(null);
(statearr_34043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto__);

return statearr_34043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__28220__auto__;
} else {
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,new cljs.core.Keyword(null,"ajax","ajax",814345549),client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__34044){
var vec__34045 = p__34044;
var server_ch__$1 = cljs.core.nth.call(null,vec__34045,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__34045,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var udt_disconnected = taoensso.encore.now_udt.call(null);
var c__28220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_34068){
var state_val_34069 = (state_34068[(1)]);
if((state_val_34069 === (1))){
var inst_34046 = cljs.core.async.timeout.call(null,(5000));
var state_34068__$1 = state_34068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34068__$1,(2),inst_34046);
} else {
if((state_val_34069 === (2))){
var inst_34048 = (state_34068[(2)]);
var inst_34049 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34050 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_34051 = (new cljs.core.PersistentVector(null,2,(5),inst_34049,inst_34050,null));
var inst_34052 = (function (){return ((function (inst_34048,inst_34049,inst_34050,inst_34051,state_val_34069,c__28220__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var vec__34070 = cljs.core.get.call(null,_QMARK_m,client_id);
var _ = cljs.core.nth.call(null,vec__34070,(0),null);
var _QMARK_udt_last_connected = cljs.core.nth.call(null,vec__34070,(1),null);
var disconnected_QMARK_ = (function (){var and__24077__auto__ = _QMARK_udt_last_connected;
if(cljs.core.truth_(and__24077__auto__)){
return (udt_disconnected >= _QMARK_udt_last_connected);
} else {
return and__24077__auto__;
}
})();
if(cljs.core.not.call(null,disconnected_QMARK_)){
return taoensso.encore.swapped.call(null,_QMARK_m,cljs.core.not.call(null,new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)));
} else {
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
return taoensso.encore.swapped.call(null,((cljs.core.empty_QMARK_.call(null,new_m))?new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782):new_m),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586));
}
});
;})(inst_34048,inst_34049,inst_34050,inst_34051,state_val_34069,c__28220__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_34053 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_34051,inst_34052);
var state_34068__$1 = (function (){var statearr_34071 = state_34068;
(statearr_34071[(7)] = inst_34048);

return statearr_34071;
})();
if(cljs.core.truth_(inst_34053)){
var statearr_34072_34220 = state_34068__$1;
(statearr_34072_34220[(1)] = (3));

} else {
var statearr_34073_34221 = state_34068__$1;
(statearr_34073_34221[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (3))){
var inst_34055 = upd_connected_uid_BANG_.call(null,uid);
var state_34068__$1 = state_34068;
if(cljs.core.truth_(inst_34055)){
var statearr_34074_34222 = state_34068__$1;
(statearr_34074_34222[(1)] = (6));

} else {
var statearr_34075_34223 = state_34068__$1;
(statearr_34075_34223[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (4))){
var state_34068__$1 = state_34068;
var statearr_34076_34224 = state_34068__$1;
(statearr_34076_34224[(2)] = null);

(statearr_34076_34224[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (5))){
var inst_34066 = (state_34068[(2)]);
var state_34068__$1 = state_34068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34068__$1,inst_34066);
} else {
if((state_val_34069 === (6))){
var inst_34057 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34058 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_34059 = (new cljs.core.PersistentVector(null,1,(5),inst_34057,inst_34058,null));
var inst_34060 = receive_event_msg_BANG_.call(null,inst_34059);
var state_34068__$1 = state_34068;
var statearr_34077_34225 = state_34068__$1;
(statearr_34077_34225[(2)] = inst_34060);

(statearr_34077_34225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (7))){
var state_34068__$1 = state_34068;
var statearr_34078_34226 = state_34068__$1;
(statearr_34078_34226[(2)] = null);

(statearr_34078_34226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34069 === (8))){
var inst_34063 = (state_34068[(2)]);
var state_34068__$1 = state_34068;
var statearr_34079_34227 = state_34068__$1;
(statearr_34079_34227[(2)] = inst_34063);

(statearr_34079_34227[(1)] = (5));


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
});})(c__28220__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__28108__auto__,c__28220__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__28109__auto__ = null;
var taoensso$sente$state_machine__28109__auto____0 = (function (){
var statearr_34083 = [null,null,null,null,null,null,null,null];
(statearr_34083[(0)] = taoensso$sente$state_machine__28109__auto__);

(statearr_34083[(1)] = (1));

return statearr_34083;
});
var taoensso$sente$state_machine__28109__auto____1 = (function (state_34068){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_34068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e34084){if((e34084 instanceof Object)){
var ex__28112__auto__ = e34084;
var statearr_34085_34228 = state_34068;
(statearr_34085_34228[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34229 = state_34068;
state_34068 = G__34229;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
taoensso$sente$state_machine__28109__auto__ = function(state_34068){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28109__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28109__auto____1.call(this,state_34068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28109__auto____0;
taoensso$sente$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28109__auto____1;
return taoensso$sente$state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__28222__auto__ = (function (){var statearr_34086 = f__28221__auto__.call(null);
(statearr_34086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto__);

return statearr_34086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__28220__auto__;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__33922,map__33923,map__33923__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq33919){
var G__33920 = cljs.core.first.call(null,seq33919);
var seq33919__$1 = cljs.core.next.call(null,seq33919);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33920,seq33919__$1);
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init5149356545264029088.clj",576,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null);

var seq__34234 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null))));
var chunk__34235 = null;
var count__34236 = (0);
var i__34237 = (0);
while(true){
if((i__34237 < count__34236)){
var server_ch = cljs.core._nth.call(null,chunk__34235,i__34237);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__34238 = seq__34234;
var G__34239 = chunk__34235;
var G__34240 = count__34236;
var G__34241 = (i__34237 + (1));
seq__34234 = G__34238;
chunk__34235 = G__34239;
count__34236 = G__34240;
i__34237 = G__34241;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34234);
if(temp__4425__auto__){
var seq__34234__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34234__$1)){
var c__24900__auto__ = cljs.core.chunk_first.call(null,seq__34234__$1);
var G__34242 = cljs.core.chunk_rest.call(null,seq__34234__$1);
var G__34243 = c__24900__auto__;
var G__34244 = cljs.core.count.call(null,c__24900__auto__);
var G__34245 = (0);
seq__34234 = G__34242;
chunk__34235 = G__34243;
count__34236 = G__34244;
i__34237 = G__34245;
continue;
} else {
var server_ch = cljs.core.first.call(null,seq__34234__$1);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__34246 = cljs.core.next.call(null,seq__34234__$1);
var G__34247 = null;
var G__34248 = (0);
var G__34249 = (0);
seq__34234 = G__34246;
chunk__34235 = G__34247;
count__34236 = G__34248;
i__34237 = G__34249;
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
var args__25166__auto__ = [];
var len__25159__auto___34339 = arguments.length;
var i__25160__auto___34340 = (0);
while(true){
if((i__25160__auto___34340 < len__25159__auto___34339)){
args__25166__auto__.push((arguments[i__25160__auto___34340]));

var G__34341 = (i__25160__auto___34340 + (1));
i__25160__auto___34340 = G__34341;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((3) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((3)),(0),null)):null);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25167__auto__);
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conns_,uid,buffered_evs_pstr,p__34254){
var vec__34255 = p__34254;
var map__34256 = cljs.core.nth.call(null,vec__34255,(0),null);
var map__34256__$1 = ((((!((map__34256 == null)))?((((map__34256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34256):map__34256);
var nmax_attempts = cljs.core.get.call(null,map__34256__$1,new cljs.core.Keyword(null,"nmax-attempts","nmax-attempts",1471144610),(7));
var ms_base = cljs.core.get.call(null,map__34256__$1,new cljs.core.Keyword(null,"ms-base","ms-base",-1962784511),(90));
var ms_rand = cljs.core.get.call(null,map__34256__$1,new cljs.core.Keyword(null,"ms-rand","ms-rand",1169398874),(90));

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init5149356545264029088.clj",589,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__34255,map__34256,map__34256__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
});})(vec__34255,map__34256,map__34256__$1,nmax_attempts,ms_base,ms_rand))
,null)),null);

var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__28220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto__,client_ids_unsatisfied,vec__34255,map__34256,map__34256__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto__,client_ids_unsatisfied,vec__34255,map__34256,map__34256__$1,nmax_attempts,ms_base,ms_rand){
return (function (state_34305){
var state_val_34306 = (state_34305[(1)]);
if((state_val_34306 === (7))){
var inst_34259 = (state_34305[(7)]);
var inst_34266 = (state_34305[(8)]);
var inst_34260 = (state_34305[(9)]);
var inst_34277 = (function (){var n = inst_34259;
var client_ids_satisfied = inst_34260;
var _QMARK_pulled = inst_34266;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_34259,inst_34266,inst_34260,state_val_34306,c__28220__auto__,client_ids_unsatisfied,vec__34255,map__34256,map__34256__$1,nmax_attempts,ms_base,ms_rand){
return (function (s,client_id,p__34276){
var vec__34307 = p__34276;
var _QMARK_server_ch = cljs.core.nth.call(null,vec__34307,(0),null);
var _ = cljs.core.nth.call(null,vec__34307,(1),null);
if(((_QMARK_server_ch == null)) || (cljs.core.not.call(null,taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_server_ch,buffered_evs_pstr,new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103))))){
return s;
} else {
return cljs.core.conj.call(null,s,client_id);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_34259,inst_34266,inst_34260,state_val_34306,c__28220__auto__,client_ids_unsatisfied,vec__34255,map__34256,map__34256__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_34278 = cljs.core.PersistentHashSet.EMPTY;
var inst_34279 = cljs.core.reduce_kv.call(null,inst_34277,inst_34278,inst_34266);
var state_34305__$1 = state_34305;
var statearr_34308_34342 = state_34305__$1;
(statearr_34308_34342[(2)] = inst_34279);

(statearr_34308_34342[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (1))){
var inst_34258 = cljs.core.PersistentHashSet.EMPTY;
var inst_34259 = (0);
var inst_34260 = inst_34258;
var state_34305__$1 = (function (){var statearr_34309 = state_34305;
(statearr_34309[(7)] = inst_34259);

(statearr_34309[(9)] = inst_34260);

return statearr_34309;
})();
var statearr_34310_34343 = state_34305__$1;
(statearr_34310_34343[(2)] = null);

(statearr_34310_34343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (4))){
var state_34305__$1 = state_34305;
var statearr_34311_34344 = state_34305__$1;
(statearr_34311_34344[(2)] = true);

(statearr_34311_34344[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (15))){
var inst_34301 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
var statearr_34312_34345 = state_34305__$1;
(statearr_34312_34345[(2)] = inst_34301);

(statearr_34312_34345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (13))){
var inst_34292 = cljs.core.rand_int.call(null,ms_rand);
var inst_34293 = (ms_base + inst_34292);
var inst_34294 = cljs.core.async.timeout.call(null,inst_34293);
var state_34305__$1 = state_34305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34305__$1,(16),inst_34294);
} else {
if((state_val_34306 === (6))){
var inst_34266 = (state_34305[(8)]);
var inst_34274 = (state_34305[(2)]);
var state_34305__$1 = (function (){var statearr_34313 = state_34305;
(statearr_34313[(10)] = inst_34274);

return statearr_34313;
})();
if(cljs.core.truth_(inst_34266)){
var statearr_34314_34346 = state_34305__$1;
(statearr_34314_34346[(1)] = (7));

} else {
var statearr_34315_34347 = state_34305__$1;
(statearr_34315_34347[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (3))){
var inst_34303 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34305__$1,inst_34303);
} else {
if((state_val_34306 === (12))){
var inst_34290 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
if(cljs.core.truth_(inst_34290)){
var statearr_34316_34348 = state_34305__$1;
(statearr_34316_34348[(1)] = (13));

} else {
var statearr_34317_34349 = state_34305__$1;
(statearr_34317_34349[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (2))){
var inst_34259 = (state_34305[(7)]);
var inst_34266 = (state_34305[(8)]);
var inst_34260 = (state_34305[(9)]);
var inst_34262 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34263 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_34264 = (new cljs.core.PersistentVector(null,2,(5),inst_34262,inst_34263,null));
var inst_34265 = (function (){var n = inst_34259;
var client_ids_satisfied = inst_34260;
return ((function (n,client_ids_satisfied,inst_34259,inst_34266,inst_34260,inst_34262,inst_34263,inst_34264,state_val_34306,c__28220__auto__,client_ids_unsatisfied,vec__34255,map__34256,map__34256__$1,nmax_attempts,ms_base,ms_rand){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_34259,inst_34266,inst_34260,inst_34262,inst_34263,inst_34264,state_val_34306,c__28220__auto__,client_ids_unsatisfied,vec__34255,map__34256,map__34256__$1,nmax_attempts,ms_base,ms_rand){
return (function (m__$1,k){
var vec__34318 = cljs.core.get.call(null,m__$1,k);
var _QMARK_server_ch = cljs.core.nth.call(null,vec__34318,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__34318,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_34259,inst_34266,inst_34260,inst_34262,inst_34263,inst_34264,state_val_34306,c__28220__auto__,client_ids_unsatisfied,vec__34255,map__34256,map__34256__$1,nmax_attempts,ms_base,ms_rand))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_34259,inst_34266,inst_34260,inst_34262,inst_34263,inst_34264,state_val_34306,c__28220__auto__,client_ids_unsatisfied,vec__34255,map__34256,map__34256__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_34266__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_34264,inst_34265);
var inst_34267 = (function (){var n = inst_34259;
var client_ids_satisfied = inst_34260;
var _QMARK_pulled = inst_34266__$1;
var __x = inst_34266__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,__x,inst_34259,inst_34266,inst_34260,inst_34262,inst_34263,inst_34264,inst_34265,inst_34266__$1,state_val_34306,c__28220__auto__,client_ids_unsatisfied,vec__34255,map__34256,map__34256__$1,nmax_attempts,ms_base,ms_rand){
return (function (__x__$1){
var or__24089__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,__x__$1);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,__x,inst_34259,inst_34266,inst_34260,inst_34262,inst_34263,inst_34264,inst_34265,inst_34266__$1,state_val_34306,c__28220__auto__,client_ids_unsatisfied,vec__34255,map__34256,map__34256__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_34268 = inst_34267.call(null,inst_34266__$1);
var state_34305__$1 = (function (){var statearr_34319 = state_34305;
(statearr_34319[(8)] = inst_34266__$1);

return statearr_34319;
})();
if(cljs.core.truth_(inst_34268)){
var statearr_34320_34350 = state_34305__$1;
(statearr_34320_34350[(1)] = (4));

} else {
var statearr_34321_34351 = state_34305__$1;
(statearr_34321_34351[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (11))){
var inst_34284 = (state_34305[(11)]);
var state_34305__$1 = state_34305;
var statearr_34322_34352 = state_34305__$1;
(statearr_34322_34352[(2)] = inst_34284);

(statearr_34322_34352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (9))){
var inst_34259 = (state_34305[(7)]);
var inst_34284 = (state_34305[(11)]);
var inst_34260 = (state_34305[(9)]);
var inst_34282 = (state_34305[(2)]);
var inst_34283 = cljs.core.into.call(null,inst_34260,inst_34282);
var inst_34284__$1 = (inst_34259 < nmax_attempts);
var state_34305__$1 = (function (){var statearr_34323 = state_34305;
(statearr_34323[(11)] = inst_34284__$1);

(statearr_34323[(12)] = inst_34283);

return statearr_34323;
})();
if(cljs.core.truth_(inst_34284__$1)){
var statearr_34324_34353 = state_34305__$1;
(statearr_34324_34353[(1)] = (10));

} else {
var statearr_34325_34354 = state_34305__$1;
(statearr_34325_34354[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (5))){
var inst_34266 = (state_34305[(8)]);
var inst_34271 = "([:or nil? map?] ?pulled)";
var inst_34272 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,inst_34271,inst_34266,null,null);
var state_34305__$1 = state_34305;
var statearr_34326_34355 = state_34305__$1;
(statearr_34326_34355[(2)] = inst_34272);

(statearr_34326_34355[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (14))){
var state_34305__$1 = state_34305;
var statearr_34327_34356 = state_34305__$1;
(statearr_34327_34356[(2)] = null);

(statearr_34327_34356[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (16))){
var inst_34259 = (state_34305[(7)]);
var inst_34283 = (state_34305[(12)]);
var inst_34296 = (state_34305[(2)]);
var inst_34297 = (inst_34259 + (1));
var inst_34259__$1 = inst_34297;
var inst_34260 = inst_34283;
var state_34305__$1 = (function (){var statearr_34328 = state_34305;
(statearr_34328[(7)] = inst_34259__$1);

(statearr_34328[(9)] = inst_34260);

(statearr_34328[(13)] = inst_34296);

return statearr_34328;
})();
var statearr_34329_34357 = state_34305__$1;
(statearr_34329_34357[(2)] = null);

(statearr_34329_34357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (10))){
var inst_34283 = (state_34305[(12)]);
var inst_34286 = cljs.core.complement.call(null,inst_34283);
var inst_34287 = cljs.core.some.call(null,inst_34286,client_ids_unsatisfied);
var state_34305__$1 = state_34305;
var statearr_34330_34358 = state_34305__$1;
(statearr_34330_34358[(2)] = inst_34287);

(statearr_34330_34358[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (8))){
var state_34305__$1 = state_34305;
var statearr_34331_34359 = state_34305__$1;
(statearr_34331_34359[(2)] = null);

(statearr_34331_34359[(1)] = (9));


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
});})(c__28220__auto__,client_ids_unsatisfied,vec__34255,map__34256,map__34256__$1,nmax_attempts,ms_base,ms_rand))
;
return ((function (switch__28108__auto__,c__28220__auto__,client_ids_unsatisfied,vec__34255,map__34256,map__34256__$1,nmax_attempts,ms_base,ms_rand){
return (function() {
var taoensso$sente$state_machine__28109__auto__ = null;
var taoensso$sente$state_machine__28109__auto____0 = (function (){
var statearr_34335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34335[(0)] = taoensso$sente$state_machine__28109__auto__);

(statearr_34335[(1)] = (1));

return statearr_34335;
});
var taoensso$sente$state_machine__28109__auto____1 = (function (state_34305){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_34305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e34336){if((e34336 instanceof Object)){
var ex__28112__auto__ = e34336;
var statearr_34337_34360 = state_34305;
(statearr_34337_34360[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34361 = state_34305;
state_34305 = G__34361;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
taoensso$sente$state_machine__28109__auto__ = function(state_34305){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28109__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28109__auto____1.call(this,state_34305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28109__auto____0;
taoensso$sente$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28109__auto____1;
return taoensso$sente$state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto__,client_ids_unsatisfied,vec__34255,map__34256,map__34256__$1,nmax_attempts,ms_base,ms_rand))
})();
var state__28222__auto__ = (function (){var statearr_34338 = f__28221__auto__.call(null);
(statearr_34338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto__);

return statearr_34338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto__,client_ids_unsatisfied,vec__34255,map__34256,map__34256__$1,nmax_attempts,ms_base,ms_rand))
);

return c__28220__auto__;
}
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$applyTo = (function (seq34250){
var G__34251 = cljs.core.first.call(null,seq34250);
var seq34250__$1 = cljs.core.next.call(null,seq34250);
var G__34252 = cljs.core.first.call(null,seq34250__$1);
var seq34250__$2 = cljs.core.next.call(null,seq34250__$1);
var G__34253 = cljs.core.first.call(null,seq34250__$2);
var seq34250__$3 = cljs.core.next.call(null,seq34250__$2);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34251,G__34252,G__34253,seq34250__$3);
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
var x__24752__auto__ = (((chsk == null))?null:chsk);
var m__24753__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__24752__auto__)]);
if(!((m__24753__auto__ == null))){
return m__24753__auto__.call(null,chsk);
} else {
var m__24753__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__24753__auto____$1 == null))){
return m__24753__auto____$1.call(null,chsk);
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
var x__24752__auto__ = (((chsk == null))?null:chsk);
var m__24753__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__24752__auto__)]);
if(!((m__24753__auto__ == null))){
return m__24753__auto__.call(null,chsk,ev,opts);
} else {
var m__24753__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__24753__auto____$1 == null))){
return m__24753__auto____$1.call(null,chsk,ev,opts);
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
var x__24752__auto__ = (((chsk == null))?null:chsk);
var m__24753__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__24752__auto__)]);
if(!((m__24753__auto__ == null))){
return m__24753__auto__.call(null,chsk);
} else {
var m__24753__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(!((m__24753__auto____$1 == null))){
return m__24753__auto____$1.call(null,chsk);
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
var x__24752__auto__ = (((chsk == null))?null:chsk);
var m__24753__auto__ = (taoensso.sente.chsk_disconnect_BANG_[goog.typeOf(x__24752__auto__)]);
if(!((m__24753__auto__ == null))){
return m__24753__auto__.call(null,chsk);
} else {
var m__24753__auto____$1 = (taoensso.sente.chsk_disconnect_BANG_["_"]);
if(!((m__24753__auto____$1 == null))){
return m__24753__auto____$1.call(null,chsk);
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
var x__24752__auto__ = (((chsk == null))?null:chsk);
var m__24753__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__24752__auto__)]);
if(!((m__24753__auto__ == null))){
return m__24753__auto__.call(null,chsk);
} else {
var m__24753__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(!((m__24753__auto____$1 == null))){
return m__24753__auto____$1.call(null,chsk);
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
var args34362 = [];
var len__25159__auto___34365 = arguments.length;
var i__25160__auto___34366 = (0);
while(true){
if((i__25160__auto___34366 < len__25159__auto___34365)){
args34362.push((arguments[i__25160__auto___34366]));

var G__34367 = (i__25160__auto___34366 + (1));
i__25160__auto___34366 = G__34367;
continue;
} else {
}
break;
}

var G__34364 = args34362.length;
switch (G__34364) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34362.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init5149356545264029088.clj",646,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__24089__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__24089__auto__){
return or__24089__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nneg-int? ?timeout-ms)))")].join('')));
}

if(cljs.core.truth_((function (){var or__24089__auto__ = (_QMARK_cb == null);
if(or__24089__auto__){
return or__24089__auto__;
} else {
var or__24089__auto____$1 = cljs.core.ifn_QMARK_.call(null,_QMARK_cb);
if(or__24089__auto____$1){
return or__24089__auto____$1;
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
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__34369,merge_state){
var map__34373 = p__34369;
var map__34373__$1 = ((((!((map__34373 == null)))?((((map__34373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34373):map__34373);
var chsk = map__34373__$1;
var chs = cljs.core.get.call(null,map__34373__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__34373__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__34375 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__34373,map__34373__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__24077__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__24077__auto__)){
var and__24077__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__24077__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__24077__auto____$1;
}
} else {
return and__24077__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__34373,map__34373__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__34375,(0),null);
var new_state = cljs.core.nth.call(null,vec__34375,(1),null);
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
var __x_34380 = _QMARK_cb;
try{if(cljs.core.truth_(taoensso.encore.chan_QMARK_.call(null,__x_34380))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e34378){if((e34378 instanceof Error)){
var __t_34381 = e34378;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",__x_34380,__t_34381,null);
} else {
throw e34378;

}
}
taoensso.sente.assert_event.call(null,ev);

var vec__34379 = ev;
var ev_id = cljs.core.nth.call(null,vec__34379,(0),null);
var _ = cljs.core.nth.call(null,vec__34379,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__34379,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__34379,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init5149356545264029088.clj",703,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null);

var buffered_evs = (function (){var __x = clj;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e34387){if((e34387 instanceof Error)){
var __t = e34387;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",__x,__t,null);
} else {
throw e34387;

}
}})();
var seq__34388 = cljs.core.seq.call(null,buffered_evs);
var chunk__34389 = null;
var count__34390 = (0);
var i__34391 = (0);
while(true){
if((i__34391 < count__34390)){
var ev = cljs.core._nth.call(null,chunk__34389,i__34391);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__34392 = seq__34388;
var G__34393 = chunk__34389;
var G__34394 = count__34390;
var G__34395 = (i__34391 + (1));
seq__34388 = G__34392;
chunk__34389 = G__34393;
count__34390 = G__34394;
i__34391 = G__34395;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34388);
if(temp__4425__auto__){
var seq__34388__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34388__$1)){
var c__24900__auto__ = cljs.core.chunk_first.call(null,seq__34388__$1);
var G__34396 = cljs.core.chunk_rest.call(null,seq__34388__$1);
var G__34397 = c__24900__auto__;
var G__34398 = cljs.core.count.call(null,c__24900__auto__);
var G__34399 = (0);
seq__34388 = G__34396;
chunk__34389 = G__34397;
count__34390 = G__34398;
i__34391 = G__34399;
continue;
} else {
var ev = cljs.core.first.call(null,seq__34388__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__34400 = cljs.core.next.call(null,seq__34388__$1);
var G__34401 = null;
var G__34402 = (0);
var G__34403 = (0);
seq__34388 = G__34400;
chunk__34389 = G__34401;
count__34390 = G__34402;
i__34391 = G__34403;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init5149356545264029088.clj",713,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj], null);
});})(handshake_QMARK_))
,null)),null);

if(handshake_QMARK_){
var vec__34406 = clj;
var _ = cljs.core.nth.call(null,vec__34406,(0),null);
var vec__34407 = cljs.core.nth.call(null,vec__34406,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__34407,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__34407,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__34407,(2),null);
var handshake_ev = vec__34406;
if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init5149356545264029088.clj",719,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__34406,_,vec__34407,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__34406,_,vec__34407,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_))
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
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24711__auto__,k__24712__auto__){
var self__ = this;
var this__24711__auto____$1 = this;
return cljs.core._lookup.call(null,this__24711__auto____$1,k__24712__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24713__auto__,k34409,else__24714__auto__){
var self__ = this;
var this__24713__auto____$1 = this;
var G__34411 = (((k34409 instanceof cljs.core.Keyword))?k34409.fqn:null);
switch (G__34411) {
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
return cljs.core.get.call(null,self__.__extmap,k34409,else__24714__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24725__auto__,writer__24726__auto__,opts__24727__auto__){
var self__ = this;
var this__24725__auto____$1 = this;
var pr_pair__24728__auto__ = ((function (this__24725__auto____$1){
return (function (keyval__24729__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24726__auto__,cljs.core.pr_writer,""," ","",opts__24727__auto__,keyval__24729__auto__);
});})(this__24725__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24726__auto__,pr_pair__24728__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__24727__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34408){
var self__ = this;
var G__34408__$1 = this;
return (new cljs.core.RecordIter((0),G__34408__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24709__auto__){
var self__ = this;
var this__24709__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24705__auto__){
var self__ = this;
var this__24705__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24715__auto__){
var self__ = this;
var this__24715__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24706__auto__){
var self__ = this;
var this__24706__auto____$1 = this;
var h__24524__auto__ = self__.__hash;
if(!((h__24524__auto__ == null))){
return h__24524__auto__;
} else {
var h__24524__auto____$1 = cljs.core.hash_imap.call(null,this__24706__auto____$1);
self__.__hash = h__24524__auto____$1;

return h__24524__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24707__auto__,other__24708__auto__){
var self__ = this;
var this__24707__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24077__auto__ = other__24708__auto__;
if(cljs.core.truth_(and__24077__auto__)){
var and__24077__auto____$1 = (this__24707__auto____$1.constructor === other__24708__auto__.constructor);
if(and__24077__auto____$1){
return cljs.core.equiv_map.call(null,this__24707__auto____$1,other__24708__auto__);
} else {
return and__24077__auto____$1;
}
} else {
return and__24077__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24720__auto__,k__24721__auto__){
var self__ = this;
var this__24720__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__24721__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24720__auto____$1),self__.__meta),k__24721__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24721__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24718__auto__,k__24719__auto__,G__34408){
var self__ = this;
var this__24718__auto____$1 = this;
var pred__34412 = cljs.core.keyword_identical_QMARK_;
var expr__34413 = k__24719__auto__;
if(cljs.core.truth_(pred__34412.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__34413))){
return (new taoensso.sente.ChWebSocket(G__34408,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34412.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__34413))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__34408,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34412.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__34413))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__34408,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34412.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__34413))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__34408,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34412.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__34413))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__34408,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34412.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__34413))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__34408,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34412.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__34413))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__34408,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34412.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__34413))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,G__34408,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34412.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__34413))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,G__34408,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34412.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__34413))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,G__34408,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34412.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__34413))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__34408,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34412.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__34413))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__34408,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34412.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__34413))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,G__34408,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34412.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__34413))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,G__34408,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24719__auto__,G__34408),null));
}
}
}
}
}
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24723__auto__){
var self__ = this;
var this__24723__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24710__auto__,G__34408){
var self__ = this;
var this__24710__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,G__34408,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24716__auto__,entry__24717__auto__){
var self__ = this;
var this__24716__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24717__auto__)){
return cljs.core._assoc.call(null,this__24716__auto____$1,cljs.core._nth.call(null,entry__24717__auto__,(0)),cljs.core._nth.call(null,entry__24717__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24716__auto____$1,entry__24717__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__34415){
var self__ = this;
var map__34416 = p__34415;
var map__34416__$1 = ((((!((map__34416 == null)))?((((map__34416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34416):map__34416);
var opts = map__34416__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__34416__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__34416__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__34416__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init5149356545264029088.clj",750,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__34416,map__34416__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__34416,map__34416__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4425__auto___34452 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___34452)){
var cb_uuid_34453 = temp__4425__auto___34452;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_34453], null),(function (){var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e34418){if((e34418 instanceof Error)){
var __t = e34418;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e34418;

}
}})());

var temp__4425__auto___34454__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4425__auto___34454__$1)){
var timeout_ms_34455 = temp__4425__auto___34454__$1;
var c__28220__auto___34456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto___34456,timeout_ms_34455,temp__4425__auto___34454__$1,cb_uuid_34453,temp__4425__auto___34452,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__34416,map__34416__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto___34456,timeout_ms_34455,temp__4425__auto___34454__$1,cb_uuid_34453,temp__4425__auto___34452,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__34416,map__34416__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_34429){
var state_val_34430 = (state_34429[(1)]);
if((state_val_34430 === (1))){
var inst_34419 = cljs.core.async.timeout.call(null,timeout_ms_34455);
var state_34429__$1 = state_34429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34429__$1,(2),inst_34419);
} else {
if((state_val_34430 === (2))){
var inst_34422 = (state_34429[(7)]);
var inst_34421 = (state_34429[(2)]);
var inst_34422__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_34429__$1 = (function (){var statearr_34431 = state_34429;
(statearr_34431[(7)] = inst_34422__$1);

(statearr_34431[(8)] = inst_34421);

return statearr_34431;
})();
if(cljs.core.truth_(inst_34422__$1)){
var statearr_34432_34457 = state_34429__$1;
(statearr_34432_34457[(1)] = (3));

} else {
var statearr_34433_34458 = state_34429__$1;
(statearr_34433_34458[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (3))){
var inst_34422 = (state_34429[(7)]);
var inst_34424 = inst_34422.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_34429__$1 = state_34429;
var statearr_34434_34459 = state_34429__$1;
(statearr_34434_34459[(2)] = inst_34424);

(statearr_34434_34459[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (4))){
var state_34429__$1 = state_34429;
var statearr_34435_34460 = state_34429__$1;
(statearr_34435_34460[(2)] = null);

(statearr_34435_34460[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34430 === (5))){
var inst_34427 = (state_34429[(2)]);
var state_34429__$1 = state_34429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34429__$1,inst_34427);
} else {
return null;
}
}
}
}
}
});})(c__28220__auto___34456,timeout_ms_34455,temp__4425__auto___34454__$1,cb_uuid_34453,temp__4425__auto___34452,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__34416,map__34416__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__28108__auto__,c__28220__auto___34456,timeout_ms_34455,temp__4425__auto___34454__$1,cb_uuid_34453,temp__4425__auto___34452,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__34416,map__34416__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__28109__auto__ = null;
var taoensso$sente$state_machine__28109__auto____0 = (function (){
var statearr_34439 = [null,null,null,null,null,null,null,null,null];
(statearr_34439[(0)] = taoensso$sente$state_machine__28109__auto__);

(statearr_34439[(1)] = (1));

return statearr_34439;
});
var taoensso$sente$state_machine__28109__auto____1 = (function (state_34429){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_34429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e34440){if((e34440 instanceof Object)){
var ex__28112__auto__ = e34440;
var statearr_34441_34461 = state_34429;
(statearr_34441_34461[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34462 = state_34429;
state_34429 = G__34462;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
taoensso$sente$state_machine__28109__auto__ = function(state_34429){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__28109__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__28109__auto____1.call(this,state_34429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__28109__auto____0;
taoensso$sente$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__28109__auto____1;
return taoensso$sente$state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto___34456,timeout_ms_34455,temp__4425__auto___34454__$1,cb_uuid_34453,temp__4425__auto___34452,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__34416,map__34416__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__28222__auto__ = (function (){var statearr_34442 = f__28221__auto__.call(null);
(statearr_34442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___34456);

return statearr_34442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto___34456,timeout_ms_34455,temp__4425__auto___34454__$1,cb_uuid_34453,temp__4425__auto___34452,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__34416,map__34416__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e34443){if((e34443 instanceof Error)){
var e = e34443;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init5149356545264029088.clj",769,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__34416,map__34416__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__34416,map__34416__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

var temp__4425__auto___34463 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___34463)){
var cb_uuid_34464 = temp__4425__auto___34463;
var cb_fn_STAR__34465 = (function (){var or__24089__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_34464);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e34444){if((e34444 instanceof Error)){
var __t = e34444;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e34444;

}
}}
})();
cb_fn_STAR__34465.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e34443;

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

var temp__4425__auto___34466 = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4425__auto___34466)){
var s_34467 = temp__4425__auto___34466;
s_34467.close((3000),"SENTE_RECONNECT");
} else {
}

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4425__auto__ = (function (){var or__24089__auto__ = taoensso.encore.oget.call(null,window,"WebSocket");
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
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

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init5149356545264029088.clj",800,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
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
}catch (e34448){if((e34448 instanceof Error)){
var e = e34448;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init5149356545264029088.clj",811,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_fn,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);

return null;
} else {
throw e34448;

}
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__34449 = _QMARK_socket;
(G__34449["onerror"] = ((function (G__34449,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init5149356545264029088.clj",820,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__34449,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",ws_ev], null);
});})(G__34449,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
});})(G__34449,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__34449["onmessage"] = ((function (G__34449,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__34450 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__34450,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__34450,(1),null);
var or__24089__auto__ = (function (){var and__24077__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__24077__auto__)){
return cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));
} else {
return and__24077__auto__;
}
})();
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
var temp__4423__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4423__auto__)){
var cb_uuid = temp__4423__auto__;
var temp__4423__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4423__auto____$1)){
var cb_fn = temp__4423__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init5149356545264029088.clj",838,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4423__auto____$1,cb_uuid,temp__4423__auto__,or__24089__auto__,ppstr,vec__34450,clj,_QMARK_cb_uuid,G__34449,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4423__auto____$1,cb_uuid,temp__4423__auto__,or__24089__auto__,ppstr,vec__34450,clj,_QMARK_cb_uuid,G__34449,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__34449,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__34449["onopen"] = ((function (G__34449,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__34449,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__34449,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__34449,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__34449["onclose"] = ((function (G__34449,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);
});})(G__34449,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

return G__34449;
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

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__24745__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__24745__auto__,writer__24746__auto__){
return cljs.core._write.call(null,writer__24746__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__34410){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__34410),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__34410),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__34410),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__34410),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__34410),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__34410),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__34410),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__34410),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__34410),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__34410),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__34410),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__34410),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__34410),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__34410),null,cljs.core.dissoc.call(null,G__34410,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)),null));
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
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24711__auto__,k__24712__auto__){
var self__ = this;
var this__24711__auto____$1 = this;
return cljs.core._lookup.call(null,this__24711__auto____$1,k__24712__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24713__auto__,k34469,else__24714__auto__){
var self__ = this;
var this__24713__auto____$1 = this;
var G__34471 = (((k34469 instanceof cljs.core.Keyword))?k34469.fqn:null);
switch (G__34471) {
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
return cljs.core.get.call(null,self__.__extmap,k34469,else__24714__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24725__auto__,writer__24726__auto__,opts__24727__auto__){
var self__ = this;
var this__24725__auto____$1 = this;
var pr_pair__24728__auto__ = ((function (this__24725__auto____$1){
return (function (keyval__24729__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24726__auto__,cljs.core.pr_writer,""," ","",opts__24727__auto__,keyval__24729__auto__);
});})(this__24725__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24726__auto__,pr_pair__24728__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__24727__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34468){
var self__ = this;
var G__34468__$1 = this;
return (new cljs.core.RecordIter((0),G__34468__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24709__auto__){
var self__ = this;
var this__24709__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24705__auto__){
var self__ = this;
var this__24705__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24715__auto__){
var self__ = this;
var this__24715__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24706__auto__){
var self__ = this;
var this__24706__auto____$1 = this;
var h__24524__auto__ = self__.__hash;
if(!((h__24524__auto__ == null))){
return h__24524__auto__;
} else {
var h__24524__auto____$1 = cljs.core.hash_imap.call(null,this__24706__auto____$1);
self__.__hash = h__24524__auto____$1;

return h__24524__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24707__auto__,other__24708__auto__){
var self__ = this;
var this__24707__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24077__auto__ = other__24708__auto__;
if(cljs.core.truth_(and__24077__auto__)){
var and__24077__auto____$1 = (this__24707__auto____$1.constructor === other__24708__auto__.constructor);
if(and__24077__auto____$1){
return cljs.core.equiv_map.call(null,this__24707__auto____$1,other__24708__auto__);
} else {
return and__24077__auto____$1;
}
} else {
return and__24077__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24720__auto__,k__24721__auto__){
var self__ = this;
var this__24720__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__24721__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24720__auto____$1),self__.__meta),k__24721__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24721__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24718__auto__,k__24719__auto__,G__34468){
var self__ = this;
var this__24718__auto____$1 = this;
var pred__34472 = cljs.core.keyword_identical_QMARK_;
var expr__34473 = k__24719__auto__;
if(cljs.core.truth_(pred__34472.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__34473))){
return (new taoensso.sente.ChAjaxSocket(G__34468,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34472.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__34473))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__34468,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34472.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__34473))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__34468,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34472.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__34473))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__34468,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34472.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__34473))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__34468,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34472.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__34473))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__34468,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34472.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__34473))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__34468,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34472.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__34473))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,G__34468,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34472.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__34473))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,G__34468,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34472.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__34473))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__34468,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34472.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__34473))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,G__34468,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24719__auto__,G__34468),null));
}
}
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24723__auto__){
var self__ = this;
var this__24723__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24710__auto__,G__34468){
var self__ = this;
var this__24710__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,G__34468,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24716__auto__,entry__24717__auto__){
var self__ = this;
var this__24716__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24717__auto__)){
return cljs.core._assoc.call(null,this__24716__auto____$1,cljs.core._nth.call(null,entry__24717__auto__,(0)),cljs.core._nth.call(null,entry__24717__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24716__auto____$1,entry__24717__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__34475){
var self__ = this;
var map__34476 = p__34475;
var map__34476__$1 = ((((!((map__34476 == null)))?((((map__34476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34476):map__34476);
var opts = map__34476__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__34476__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__34476__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__34476__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init5149356545264029088.clj",879,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__34476,map__34476__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__34476,map__34476__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
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
})()], null)),((function (csrf_token,_QMARK_cb_fn,chsk__$1,map__34476,map__34476__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__34478){
var map__34482 = p__34478;
var map__34482__$1 = ((((!((map__34482 == null)))?((((map__34482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34482):map__34482);
var _QMARK_error = cljs.core.get.call(null,map__34482__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__34482__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
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
var vec__34484 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__34484,(0),null);
var _ = cljs.core.nth.call(null,vec__34484,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init5149356545264029088.clj",919,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__34484,resp_clj,_,map__34482,map__34482__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__34476,map__34476__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__34484,resp_clj,_,map__34482,map__34482__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__34476,map__34476__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(csrf_token,_QMARK_cb_fn,chsk__$1,map__34476,map__34476__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
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

var temp__4425__auto___34500 = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4425__auto___34500)){
var x_34501 = temp__4425__auto___34500;
x_34501.abort();
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init5149356545264029088.clj",940,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(retry_id,chsk__$1))
,null)),null);

var retry_fn = ((function (retry_id,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init5149356545264029088.clj",946,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
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
return (function taoensso$sente$poll_fn_$_ajax_cb(p__34492){
var map__34496 = p__34492;
var map__34496__$1 = ((((!((map__34496 == null)))?((((map__34496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34496):map__34496);
var _QMARK_error = cljs.core.get.call(null,map__34496__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__34496__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
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
var vec__34498 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__34498,(0),null);
var _ = cljs.core.nth.call(null,vec__34498,(1),null);
var or__24089__auto___34502 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__24089__auto___34502)){
} else {
var buffered_evs_34503 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_34503);

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

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__24745__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__24745__auto__,writer__24746__auto__){
return cljs.core._write.call(null,writer__24746__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__34470){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__34470),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__34470),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__34470),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__34470),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__34470),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__34470),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__34470),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__34470),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__34470),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__34470),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__34470),null,cljs.core.dissoc.call(null,G__34470,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)),null));
});

taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__34505 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34505) {
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
var args__25166__auto__ = [];
var len__25159__auto___34521 = arguments.length;
var i__25160__auto___34522 = (0);
while(true){
if((i__25160__auto___34522 < len__25159__auto___34521)){
args__25166__auto__.push((arguments[i__25160__auto___34522]));

var G__34523 = (i__25160__auto___34522 + (1));
i__25160__auto___34522 = G__34523;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__34510){
var vec__34511 = p__34510;
var map__34512 = cljs.core.nth.call(null,vec__34511,(0),null);
var map__34512__$1 = ((((!((map__34512 == null)))?((((map__34512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34512):map__34512);
var opts = map__34512__$1;
var ajax_opts = cljs.core.get.call(null,map__34512__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__34512__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__34512__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var client_id = cljs.core.get.call(null,map__34512__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__24089__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__34512__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__34512__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__34512__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__34512__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__34512__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__34512__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__34512__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__34511,(1),null);
if(cljs.core.truth_((function (){var __x = type;
try{if(((function (__x,vec__34511,map__34512,map__34512__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (__x__$1){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),__x__$1);
});})(__x,vec__34511,map__34512,map__34512__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e34514){if((e34514 instanceof Error)){
var __t = e34514;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",__x,__t,null);
} else {
throw e34514;

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
}catch (e34515){if((e34515 instanceof Error)){
var __t = e34515;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",__x,__t,null);
} else {
throw e34515;

}
}})())){
} else {
throw (new Error("Assert failed: (have? enc/nblank-str? client-id)"));
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init5149356545264029088.clj",1055,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__34511,map__34512,map__34512__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__34511,map__34512,map__34512__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init5149356545264029088.clj",1057,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__34511,map__34512,map__34512__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__34511,map__34512,map__34512__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var win_location = taoensso.encore.get_window_location.call(null);
var win_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_location);
var host__$1 = (function (){var or__24089__auto__ = host;
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var path__$1 = (function (){var or__24089__auto__ = path;
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__34511,map__34512,map__34512__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__24089__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__24089__auto__){
return or__24089__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__34511,map__34512,map__34512__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__34511,map__34512,map__34512__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__34511,map__34512,map__34512__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),(function (){var _LT_server_ch = new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs);
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__34511,map__34512,map__34512__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__34511,map__34512,map__34512__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
} else {
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__34511,map__34512,map__34512__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__34516 = ev;
var id = cljs.core.nth.call(null,vec__34516,(0),null);
var _QMARK_data = cljs.core.nth.call(null,vec__34516,(1),null);
var __x_34524 = (function (){try{return cljs.core.namespace.call(null,id);
}catch (e34517){if((e34517 instanceof Error)){
var __t = e34517;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__34507#] (not= p1__34507# \"chsk\")) (namespace id))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e34517;

}
}})();
try{if(((function (__x_34524,vec__34516,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__34511,map__34512,map__34512__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (p1__34507_SHARP_){
return cljs.core.not_EQ_.call(null,p1__34507_SHARP_,"chsk");
});})(__x_34524,vec__34516,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__34511,map__34512,map__34512__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x_34524)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e34518){if((e34518 instanceof Error)){
var __t_34525 = e34518;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__34507#] (not= p1__34507# \"chsk\")) (namespace id))",__x_34524,__t_34525,null);
} else {
throw e34518;

}
}
return ev;
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__34511,map__34512,map__34512__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
}
})()], null));
var chsk = (function (){var or__24089__auto__ = (function (){var and__24077__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__24077__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,packer__$1,private_chs,params,cljs.core.atom.call(null,(0)),backoff_ms_fn,cljs.core.atom.call(null,null),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ws","ws",86841443));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
}
})(),cljs.core.atom.call(null,"pending"),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__24077__auto__;
}
})();
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
var and__24077__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__24077__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"state_","state_",957667102)],[cljs.core.atom.call(null,null),client_id,packer__$1,private_chs,params,backoff_ms_fn,(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
}
})(),cljs.core.atom.call(null,"pending"),ajax_opts,lp_timeout_ms,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__24077__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str("chsk")].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__34511,map__34512,map__34512__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__34520 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__34520,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__34520,(1),null);
var ev__$1 = vec__34520;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__34511,map__34512,map__34512__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq34508){
var G__34509 = cljs.core.first.call(null,seq34508);
var seq34508__$1 = cljs.core.next.call(null,seq34508);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34509,seq34508__$1);
});
taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__34732 = opts;
var map__34732__$1 = ((((!((map__34732 == null)))?((((map__34732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34732):map__34732);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__34732__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__34732__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__28220__auto___34938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto___34938,map__34732,map__34732__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto___34938,map__34732,map__34732__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (state_34863){
var state_val_34864 = (state_34863[(1)]);
if((state_val_34864 === (7))){
var inst_34859 = (state_34863[(2)]);
var state_34863__$1 = state_34863;
var statearr_34865_34939 = state_34863__$1;
(statearr_34865_34939[(2)] = inst_34859);

(statearr_34865_34939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (20))){
var inst_34768 = (state_34863[(7)]);
var inst_34740 = (state_34863[(8)]);
var inst_34741 = (state_34863[(9)]);
var inst_34767 = (state_34863[(10)]);
var inst_34742 = (state_34863[(11)]);
var inst_34743 = (state_34863[(12)]);
var inst_34778 = (function (){var vec__34735 = inst_34740;
var v = inst_34741;
var p = inst_34742;
var stop_QMARK_ = inst_34743;
var map__34746 = inst_34767;
var event_msg = inst_34767;
var event = inst_34768;
return ((function (vec__34735,v,p,stop_QMARK_,map__34746,event_msg,event,inst_34768,inst_34740,inst_34741,inst_34767,inst_34742,inst_34743,state_val_34864,c__28220__auto___34938,map__34732,map__34732__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__34735,v,p,stop_QMARK_,map__34746,event_msg,event,inst_34768,inst_34740,inst_34741,inst_34767,inst_34742,inst_34743,state_val_34864,c__28220__auto___34938,map__34732,map__34732__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_34779 = (new cljs.core.Delay(inst_34778,null));
var inst_34780 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init5149356545264029088.clj",1176,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_34779,null);
var state_34863__$1 = state_34863;
var statearr_34866_34940 = state_34863__$1;
(statearr_34866_34940[(2)] = inst_34780);

(statearr_34866_34940[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (27))){
var inst_34767 = (state_34863[(10)]);
var inst_34785 = (state_34863[(2)]);
var inst_34786 = "(server-event-msg? event-msg)";
var inst_34787 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_34786,inst_34767,inst_34785,null);
var state_34863__$1 = state_34863;
var statearr_34867_34941 = state_34863__$1;
(statearr_34867_34941[(2)] = inst_34787);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34863__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (1))){
var state_34863__$1 = state_34863;
var statearr_34868_34942 = state_34863__$1;
(statearr_34868_34942[(2)] = null);

(statearr_34868_34942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (24))){
var state_34863__$1 = state_34863;
var statearr_34869_34943 = state_34863__$1;
(statearr_34869_34943[(2)] = null);

(statearr_34869_34943[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (39))){
var state_34863__$1 = state_34863;
var statearr_34870_34944 = state_34863__$1;
(statearr_34870_34944[(2)] = null);

(statearr_34870_34944[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (46))){
var inst_34832 = (state_34863[(13)]);
var inst_34840 = (state_34863[(2)]);
var inst_34841 = [inst_34840,null];
var inst_34842 = (new cljs.core.PersistentVector(null,2,(5),inst_34832,inst_34841,null));
var state_34863__$1 = state_34863;
var statearr_34871_34945 = state_34863__$1;
(statearr_34871_34945[(2)] = inst_34842);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34863__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (4))){
var inst_34740 = (state_34863[(8)]);
var inst_34742 = (state_34863[(11)]);
var inst_34743 = (state_34863[(12)]);
var inst_34740__$1 = (state_34863[(2)]);
var inst_34741 = cljs.core.nth.call(null,inst_34740__$1,(0),null);
var inst_34742__$1 = cljs.core.nth.call(null,inst_34740__$1,(1),null);
var inst_34743__$1 = taoensso.encore.kw_identical_QMARK_.call(null,inst_34742__$1,ch_ctrl);
var state_34863__$1 = (function (){var statearr_34872 = state_34863;
(statearr_34872[(8)] = inst_34740__$1);

(statearr_34872[(9)] = inst_34741);

(statearr_34872[(11)] = inst_34742__$1);

(statearr_34872[(12)] = inst_34743__$1);

return statearr_34872;
})();
if(cljs.core.truth_(inst_34743__$1)){
var statearr_34873_34946 = state_34863__$1;
(statearr_34873_34946[(1)] = (5));

} else {
var statearr_34874_34947 = state_34863__$1;
(statearr_34874_34947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (15))){
var inst_34741 = (state_34863[(9)]);
var state_34863__$1 = state_34863;
var statearr_34875_34948 = state_34863__$1;
(statearr_34875_34948[(2)] = inst_34741);

(statearr_34875_34948[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (48))){
var state_34863__$1 = state_34863;
var statearr_34876_34949 = state_34863__$1;
(statearr_34876_34949[(2)] = null);

(statearr_34876_34949[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (21))){
var state_34863__$1 = state_34863;
var statearr_34877_34950 = state_34863__$1;
(statearr_34877_34950[(2)] = null);

(statearr_34877_34950[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (31))){
var inst_34796 = (state_34863[(2)]);
var state_34863__$1 = state_34863;
var statearr_34878_34951 = state_34863__$1;
(statearr_34878_34951[(2)] = inst_34796);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34863__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (32))){
var inst_34813 = (state_34863[(2)]);
var state_34863__$1 = state_34863;
var statearr_34879_34952 = state_34863__$1;
(statearr_34879_34952[(2)] = inst_34813);

(statearr_34879_34952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (40))){
var inst_34856 = (state_34863[(2)]);
var state_34863__$1 = (function (){var statearr_34880 = state_34863;
(statearr_34880[(14)] = inst_34856);

return statearr_34880;
})();
var statearr_34881_34953 = state_34863__$1;
(statearr_34881_34953[(2)] = null);

(statearr_34881_34953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (33))){
var inst_34767 = (state_34863[(10)]);
var inst_34800 = (state_34863[(2)]);
var inst_34801 = "(client-event-msg? event-msg)";
var inst_34802 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_34801,inst_34767,inst_34800,null);
var state_34863__$1 = state_34863;
var statearr_34882_34954 = state_34863__$1;
(statearr_34882_34954[(2)] = inst_34802);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34863__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (13))){
var inst_34759 = (state_34863[(2)]);
var state_34863__$1 = state_34863;
var statearr_34883_34955 = state_34863__$1;
(statearr_34883_34955[(2)] = inst_34759);

(statearr_34883_34955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (22))){
var inst_34783 = (state_34863[(2)]);
var state_34863__$1 = (function (){var statearr_34884 = state_34863;
(statearr_34884[(15)] = inst_34783);

return statearr_34884;
})();
if(cljs.core.truth_(server_QMARK_)){
var statearr_34885_34956 = state_34863__$1;
(statearr_34885_34956[(1)] = (23));

} else {
var statearr_34886_34957 = state_34863__$1;
(statearr_34886_34957[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (36))){
var inst_34809 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_34863__$1 = state_34863;
var statearr_34887_34958 = state_34863__$1;
(statearr_34887_34958[(2)] = inst_34809);

(statearr_34887_34958[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (41))){
var inst_34844 = (state_34863[(16)]);
var inst_34846 = (state_34863[(17)]);
var inst_34844__$1 = (state_34863[(2)]);
var inst_34845 = cljs.core.nth.call(null,inst_34844__$1,(0),null);
var inst_34846__$1 = cljs.core.nth.call(null,inst_34844__$1,(1),null);
var state_34863__$1 = (function (){var statearr_34888 = state_34863;
(statearr_34888[(18)] = inst_34845);

(statearr_34888[(16)] = inst_34844__$1);

(statearr_34888[(17)] = inst_34846__$1);

return statearr_34888;
})();
if(cljs.core.truth_(inst_34846__$1)){
var statearr_34889_34959 = state_34863__$1;
(statearr_34889_34959[(1)] = (47));

} else {
var statearr_34890_34960 = state_34863__$1;
(statearr_34890_34960[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (43))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34863,(42),Error,null,(41));
var inst_34832 = cljs.core.PersistentVector.EMPTY_NODE;
var state_34863__$1 = (function (){var statearr_34891 = state_34863;
(statearr_34891[(13)] = inst_34832);

return statearr_34891;
})();
if(cljs.core.truth_(error_handler)){
var statearr_34892_34961 = state_34863__$1;
(statearr_34892_34961[(1)] = (44));

} else {
var statearr_34893_34962 = state_34863__$1;
(statearr_34893_34962[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (29))){
var inst_34767 = (state_34863[(10)]);
var state_34863__$1 = state_34863;
var statearr_34894_34963 = state_34863__$1;
(statearr_34894_34963[(2)] = inst_34767);

(statearr_34894_34963[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (44))){
var inst_34767 = (state_34863[(10)]);
var inst_34822 = (state_34863[(19)]);
var inst_34834 = error_handler.call(null,inst_34822,inst_34767);
var state_34863__$1 = state_34863;
var statearr_34895_34964 = state_34863__$1;
(statearr_34895_34964[(2)] = inst_34834);

(statearr_34895_34964[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (6))){
var inst_34741 = (state_34863[(9)]);
var inst_34749 = (inst_34741 == null);
var inst_34750 = cljs.core.not.call(null,inst_34749);
var state_34863__$1 = state_34863;
if(inst_34750){
var statearr_34896_34965 = state_34863__$1;
(statearr_34896_34965[(1)] = (8));

} else {
var statearr_34897_34966 = state_34863__$1;
(statearr_34897_34966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (28))){
var inst_34767 = (state_34863[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34863,(27),Error,null,(26));
var inst_34791 = taoensso.sente.server_event_msg_QMARK_.call(null,inst_34767);
var state_34863__$1 = state_34863;
if(cljs.core.truth_(inst_34791)){
var statearr_34898_34967 = state_34863__$1;
(statearr_34898_34967[(1)] = (29));

} else {
var statearr_34899_34968 = state_34863__$1;
(statearr_34899_34968[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (25))){
var inst_34776 = (state_34863[(20)]);
var inst_34815 = (state_34863[(2)]);
var inst_34816 = event_msg_handler.call(null,inst_34815);
var inst_34817 = [inst_34816,null];
var inst_34818 = (new cljs.core.PersistentVector(null,2,(5),inst_34776,inst_34817,null));
var state_34863__$1 = state_34863;
var statearr_34900_34969 = state_34863__$1;
(statearr_34900_34969[(2)] = inst_34818);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34863__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (34))){
var inst_34767 = (state_34863[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34863,(33),Error,null,(32));
var inst_34806 = taoensso.sente.client_event_msg_QMARK_.call(null,inst_34767);
var state_34863__$1 = state_34863;
if(cljs.core.truth_(inst_34806)){
var statearr_34901_34970 = state_34863__$1;
(statearr_34901_34970[(1)] = (35));

} else {
var statearr_34902_34971 = state_34863__$1;
(statearr_34902_34971[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (17))){
var inst_34822 = (state_34863[(19)]);
var inst_34820 = (state_34863[(21)]);
var inst_34820__$1 = (state_34863[(2)]);
var inst_34821 = cljs.core.nth.call(null,inst_34820__$1,(0),null);
var inst_34822__$1 = cljs.core.nth.call(null,inst_34820__$1,(1),null);
var state_34863__$1 = (function (){var statearr_34903 = state_34863;
(statearr_34903[(19)] = inst_34822__$1);

(statearr_34903[(22)] = inst_34821);

(statearr_34903[(21)] = inst_34820__$1);

return statearr_34903;
})();
if(cljs.core.truth_(inst_34822__$1)){
var statearr_34904_34972 = state_34863__$1;
(statearr_34904_34972[(1)] = (38));

} else {
var statearr_34905_34973 = state_34863__$1;
(statearr_34905_34973[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (3))){
var inst_34861 = (state_34863[(2)]);
var state_34863__$1 = state_34863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34863__$1,inst_34861);
} else {
if((state_val_34864 === (12))){
var state_34863__$1 = state_34863;
var statearr_34906_34974 = state_34863__$1;
(statearr_34906_34974[(2)] = false);

(statearr_34906_34974[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (2))){
var inst_34736 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34737 = [ch_recv,ch_ctrl];
var inst_34738 = (new cljs.core.PersistentVector(null,2,(5),inst_34736,inst_34737,null));
var state_34863__$1 = state_34863;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34863__$1,(4),inst_34738);
} else {
if((state_val_34864 === (23))){
var state_34863__$1 = state_34863;
var statearr_34907_34975 = state_34863__$1;
(statearr_34907_34975[(2)] = null);

(statearr_34907_34975[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (47))){
var inst_34768 = (state_34863[(7)]);
var inst_34845 = (state_34863[(18)]);
var inst_34844 = (state_34863[(16)]);
var inst_34740 = (state_34863[(8)]);
var inst_34846 = (state_34863[(17)]);
var inst_34741 = (state_34863[(9)]);
var inst_34767 = (state_34863[(10)]);
var inst_34742 = (state_34863[(11)]);
var inst_34822 = (state_34863[(19)]);
var inst_34743 = (state_34863[(12)]);
var inst_34820 = (state_34863[(21)]);
var inst_34848 = (function (){var p = inst_34742;
var _QMARK_error = inst_34822;
var vec__34735 = inst_34740;
var map__34746 = inst_34767;
var temp__4425__auto__ = inst_34846;
var v = inst_34741;
var _ = inst_34845;
var e2 = inst_34846;
var vec__34747 = inst_34820;
var _QMARK_error2 = inst_34846;
var event_msg = inst_34767;
var e = inst_34822;
var vec__34824 = inst_34844;
var event = inst_34768;
var stop_QMARK_ = inst_34743;
return ((function (p,_QMARK_error,vec__34735,map__34746,temp__4425__auto__,v,_,e2,vec__34747,_QMARK_error2,event_msg,e,vec__34824,event,stop_QMARK_,inst_34768,inst_34845,inst_34844,inst_34740,inst_34846,inst_34741,inst_34767,inst_34742,inst_34822,inst_34743,inst_34820,state_val_34864,c__28220__auto___34938,map__34732,map__34732__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});
;})(p,_QMARK_error,vec__34735,map__34746,temp__4425__auto__,v,_,e2,vec__34747,_QMARK_error2,event_msg,e,vec__34824,event,stop_QMARK_,inst_34768,inst_34845,inst_34844,inst_34740,inst_34846,inst_34741,inst_34767,inst_34742,inst_34822,inst_34743,inst_34820,state_val_34864,c__28220__auto___34938,map__34732,map__34732__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_34849 = (new cljs.core.Delay(inst_34848,null));
var inst_34850 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init5149356545264029088.clj",1189,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_34849,null);
var state_34863__$1 = state_34863;
var statearr_34908_34976 = state_34863__$1;
(statearr_34908_34976[(2)] = inst_34850);

(statearr_34908_34976[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (35))){
var inst_34767 = (state_34863[(10)]);
var state_34863__$1 = state_34863;
var statearr_34909_34977 = state_34863__$1;
(statearr_34909_34977[(2)] = inst_34767);

(statearr_34909_34977[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34863,(18),Error,null,(17));
var inst_34776 = cljs.core.PersistentVector.EMPTY_NODE;
var state_34863__$1 = (function (){var statearr_34910 = state_34863;
(statearr_34910[(20)] = inst_34776);

return statearr_34910;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_34911_34978 = state_34863__$1;
(statearr_34911_34978[(1)] = (20));

} else {
var statearr_34912_34979 = state_34863__$1;
(statearr_34912_34979[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (11))){
var state_34863__$1 = state_34863;
var statearr_34913_34980 = state_34863__$1;
(statearr_34913_34980[(2)] = true);

(statearr_34913_34980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (9))){
var state_34863__$1 = state_34863;
var statearr_34914_34981 = state_34863__$1;
(statearr_34914_34981[(2)] = false);

(statearr_34914_34981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (5))){
var state_34863__$1 = state_34863;
var statearr_34915_34982 = state_34863__$1;
(statearr_34915_34982[(2)] = null);

(statearr_34915_34982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (14))){
var inst_34741 = (state_34863[(9)]);
var inst_34764 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34741);
var state_34863__$1 = state_34863;
var statearr_34916_34983 = state_34863__$1;
(statearr_34916_34983[(2)] = inst_34764);

(statearr_34916_34983[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (45))){
var inst_34768 = (state_34863[(7)]);
var inst_34740 = (state_34863[(8)]);
var inst_34741 = (state_34863[(9)]);
var inst_34767 = (state_34863[(10)]);
var inst_34742 = (state_34863[(11)]);
var inst_34822 = (state_34863[(19)]);
var inst_34743 = (state_34863[(12)]);
var inst_34821 = (state_34863[(22)]);
var inst_34820 = (state_34863[(21)]);
var inst_34836 = (function (){var p = inst_34742;
var _QMARK_error = inst_34822;
var vec__34735 = inst_34740;
var map__34746 = inst_34767;
var temp__4425__auto__ = inst_34822;
var v = inst_34741;
var temp__4423__auto__ = error_handler;
var _ = inst_34821;
var vec__34747 = inst_34820;
var event_msg = inst_34767;
var e = inst_34822;
var event = inst_34768;
var stop_QMARK_ = inst_34743;
return ((function (p,_QMARK_error,vec__34735,map__34746,temp__4425__auto__,v,temp__4423__auto__,_,vec__34747,event_msg,e,event,stop_QMARK_,inst_34768,inst_34740,inst_34741,inst_34767,inst_34742,inst_34822,inst_34743,inst_34821,inst_34820,state_val_34864,c__28220__auto___34938,map__34732,map__34732__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router `event-msg-handler` error: %s",event], null);
});
;})(p,_QMARK_error,vec__34735,map__34746,temp__4425__auto__,v,temp__4423__auto__,_,vec__34747,event_msg,e,event,stop_QMARK_,inst_34768,inst_34740,inst_34741,inst_34767,inst_34742,inst_34822,inst_34743,inst_34821,inst_34820,state_val_34864,c__28220__auto___34938,map__34732,map__34732__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_34837 = (new cljs.core.Delay(inst_34836,null));
var inst_34838 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init5149356545264029088.clj",1187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_34837,null);
var state_34863__$1 = state_34863;
var statearr_34917_34984 = state_34863__$1;
(statearr_34917_34984[(2)] = inst_34838);

(statearr_34917_34984[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (26))){
var inst_34798 = (state_34863[(2)]);
var state_34863__$1 = state_34863;
var statearr_34918_34985 = state_34863__$1;
(statearr_34918_34985[(2)] = inst_34798);

(statearr_34918_34985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (16))){
var inst_34767 = (state_34863[(10)]);
var inst_34767__$1 = (state_34863[(2)]);
var inst_34768 = cljs.core.get.call(null,inst_34767__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_34863__$1 = (function (){var statearr_34919 = state_34863;
(statearr_34919[(7)] = inst_34768);

(statearr_34919[(10)] = inst_34767__$1);

return statearr_34919;
})();
var statearr_34920_34986 = state_34863__$1;
(statearr_34920_34986[(2)] = null);

(statearr_34920_34986[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (38))){
var state_34863__$1 = state_34863;
var statearr_34921_34987 = state_34863__$1;
(statearr_34921_34987[(2)] = null);

(statearr_34921_34987[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (30))){
var inst_34794 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_34863__$1 = state_34863;
var statearr_34922_34988 = state_34863__$1;
(statearr_34922_34988[(2)] = inst_34794);

(statearr_34922_34988[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (10))){
var inst_34762 = (state_34863[(2)]);
var state_34863__$1 = state_34863;
if(cljs.core.truth_(inst_34762)){
var statearr_34923_34989 = state_34863__$1;
(statearr_34923_34989[(1)] = (14));

} else {
var statearr_34924_34990 = state_34863__$1;
(statearr_34924_34990[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (18))){
var inst_34769 = (state_34863[(2)]);
var inst_34770 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34771 = [null,inst_34769];
var inst_34772 = (new cljs.core.PersistentVector(null,2,(5),inst_34770,inst_34771,null));
var state_34863__$1 = state_34863;
var statearr_34925_34991 = state_34863__$1;
(statearr_34925_34991[(2)] = inst_34772);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34863__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (42))){
var inst_34825 = (state_34863[(2)]);
var inst_34826 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34827 = [null,inst_34825];
var inst_34828 = (new cljs.core.PersistentVector(null,2,(5),inst_34826,inst_34827,null));
var state_34863__$1 = state_34863;
var statearr_34926_34992 = state_34863__$1;
(statearr_34926_34992[(2)] = inst_34828);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34863__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (37))){
var inst_34811 = (state_34863[(2)]);
var state_34863__$1 = state_34863;
var statearr_34927_34993 = state_34863__$1;
(statearr_34927_34993[(2)] = inst_34811);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34863__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (8))){
var inst_34741 = (state_34863[(9)]);
var inst_34752 = inst_34741.cljs$lang$protocol_mask$partition0$;
var inst_34753 = (inst_34752 & (64));
var inst_34754 = inst_34741.cljs$core$ISeq$;
var inst_34755 = (inst_34753) || (inst_34754);
var state_34863__$1 = state_34863;
if(cljs.core.truth_(inst_34755)){
var statearr_34928_34994 = state_34863__$1;
(statearr_34928_34994[(1)] = (11));

} else {
var statearr_34929_34995 = state_34863__$1;
(statearr_34929_34995[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (49))){
var inst_34853 = (state_34863[(2)]);
var state_34863__$1 = state_34863;
var statearr_34930_34996 = state_34863__$1;
(statearr_34930_34996[(2)] = inst_34853);

(statearr_34930_34996[(1)] = (40));


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
});})(c__28220__auto___34938,map__34732,map__34732__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
;
return ((function (switch__28108__auto__,c__28220__auto___34938,map__34732,map__34732__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__28109__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__28109__auto____0 = (function (){
var statearr_34934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34934[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__28109__auto__);

(statearr_34934[(1)] = (1));

return statearr_34934;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__28109__auto____1 = (function (state_34863){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_34863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e34935){if((e34935 instanceof Object)){
var ex__28112__auto__ = e34935;
var statearr_34936_34997 = state_34863;
(statearr_34936_34997[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34998 = state_34863;
state_34863 = G__34998;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__28109__auto__ = function(state_34863){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__28109__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__28109__auto____1.call(this,state_34863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__28109__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__28109__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto___34938,map__34732,map__34732__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var state__28222__auto__ = (function (){var statearr_34937 = f__28221__auto__.call(null);
(statearr_34937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___34938);

return statearr_34937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto___34938,map__34732,map__34732__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
);


return ((function (map__34732,map__34732__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__34732,map__34732__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
});
/**
 * Creates a go-loop to call `(event-msg-handler <server-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__25166__auto__ = [];
var len__25159__auto___35006 = arguments.length;
var i__25160__auto___35007 = (0);
while(true){
if((i__25160__auto___35007 < len__25159__auto___35006)){
args__25166__auto__.push((arguments[i__25160__auto___35007]));

var G__35008 = (i__25160__auto___35007 + (1));
i__25160__auto___35007 = G__35008;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((2) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25167__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__35002){
var vec__35003 = p__35002;
var map__35004 = cljs.core.nth.call(null,vec__35003,(0),null);
var map__35004__$1 = ((((!((map__35004 == null)))?((((map__35004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35004):map__35004);
var opts = map__35004__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__35004__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__35004__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq34999){
var G__35000 = cljs.core.first.call(null,seq34999);
var seq34999__$1 = cljs.core.next.call(null,seq34999);
var G__35001 = cljs.core.first.call(null,seq34999__$1);
var seq34999__$2 = cljs.core.next.call(null,seq34999__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35000,G__35001,seq34999__$2);
});
/**
 * Creates a go-loop to call `(event-msg-handler <client-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__25166__auto__ = [];
var len__25159__auto___35016 = arguments.length;
var i__25160__auto___35017 = (0);
while(true){
if((i__25160__auto___35017 < len__25159__auto___35016)){
args__25166__auto__.push((arguments[i__25160__auto___35017]));

var G__35018 = (i__25160__auto___35017 + (1));
i__25160__auto___35017 = G__35018;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((2) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25167__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__35012){
var vec__35013 = p__35012;
var map__35014 = cljs.core.nth.call(null,vec__35013,(0),null);
var map__35014__$1 = ((((!((map__35014 == null)))?((((map__35014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35014):map__35014);
var opts = map__35014__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__35014__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__35014__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq35009){
var G__35010 = cljs.core.first.call(null,seq35009);
var seq35009__$1 = cljs.core.next.call(null,seq35009);
var G__35011 = cljs.core.first.call(null,seq35009__$1);
var seq35009__$2 = cljs.core.next.call(null,seq35009__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35010,G__35011,seq35009__$2);
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__35019,websocket_QMARK_){
var map__35022 = p__35019;
var map__35022__$1 = ((((!((map__35022 == null)))?((((map__35022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35022):map__35022);
var location = map__35022__$1;
var adjusted_protocol = cljs.core.get.call(null,map__35022__$1,new cljs.core.Keyword(null,"adjusted-protocol","adjusted-protocol",37431492));
var host = cljs.core.get.call(null,map__35022__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__35022__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str(adjusted_protocol),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__24089__auto__ = path;
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map