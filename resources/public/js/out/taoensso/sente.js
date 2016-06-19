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
var vec__35666 = x;
var ev_id = cljs.core.nth.call(null,vec__35666,(0),null);
var _ = cljs.core.nth.call(null,vec__35666,(1),null);
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
var err_fmt = [cljs.core.str((function (){var G__35668 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__35668) {
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
var and__25868__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__25868__auto__){
var and__25868__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__25868__auto____$1)){
var map__35672 = x;
var map__35672__$1 = ((((!((map__35672 == null)))?((((map__35672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35672):map__35672);
var ch_recv = cljs.core.get.call(null,map__35672__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__35672__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__35672__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__35672__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__25868__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__25868__auto____$2)){
var and__25868__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__25868__auto____$3){
var and__25868__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(cljs.core.truth_(and__25868__auto____$4)){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__25868__auto____$4;
}
} else {
return and__25868__auto____$3;
}
} else {
return and__25868__auto____$2;
}
} else {
return and__25868__auto____$1;
}
} else {
return and__25868__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__25868__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__25868__auto__){
var and__25868__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__25868__auto____$1)){
var map__35676 = x;
var map__35676__$1 = ((((!((map__35676 == null)))?((((map__35676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35676):map__35676);
var ch_recv = cljs.core.get.call(null,map__35676__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__35676__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__35676__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__35676__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__35676__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__35676__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__35676__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__25868__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__25868__auto____$2)){
var and__25868__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__25868__auto____$3){
var and__25868__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(cljs.core.truth_(and__25868__auto____$4)){
var and__25868__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__25868__auto____$5){
var and__25868__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(cljs.core.truth_(and__25868__auto____$6)){
var and__25868__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__25868__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__25868__auto____$7;
}
} else {
return and__25868__auto____$6;
}
} else {
return and__25868__auto____$5;
}
} else {
return and__25868__auto____$4;
}
} else {
return and__25868__auto____$3;
}
} else {
return and__25868__auto____$2;
}
} else {
return and__25868__auto____$1;
}
} else {
return and__25868__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__35678){
var map__35682 = p__35678;
var map__35682__$1 = ((((!((map__35682 == null)))?((((map__35682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35682):map__35682);
var ev_msg = map__35682__$1;
var event = cljs.core.get.call(null,map__35682__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__35682__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__35684 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__35684,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__35684,(1),null);
var valid_event = vec__35684;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init611284488537917249.clj",159,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__35684,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__35682,map__35682__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__35684,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__35682,map__35682__$1,ev_msg,event,_QMARK_reply_fn))
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
}catch (e35688){if((e35688 instanceof Error)){
var __t = e35688;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? pstr)",__x,__t,null);
} else {
throw e35688;

}
}})());
}catch (e35687){var t = e35687;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init611284488537917249.clj",175,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t){
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
var args35689 = [];
var len__26950__auto___35692 = arguments.length;
var i__26951__auto___35693 = (0);
while(true){
if((i__26951__auto___35693 < len__26950__auto___35692)){
args35689.push((arguments[i__26951__auto___35693]));

var G__35694 = (i__26951__auto___35693 + (1));
i__26951__auto___35693 = G__35694;
continue;
} else {
}
break;
}

var G__35691 = args35689.length;
switch (G__35691) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35689.length)].join('')));

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
var args__26957__auto__ = [];
var len__26950__auto___35697 = arguments.length;
var i__26951__auto___35698 = (0);
while(true){
if((i__26951__auto___35698 < len__26950__auto___35697)){
args__26957__auto__.push((arguments[i__26951__auto___35698]));

var G__35699 = (i__26951__auto___35698 + (1));
i__26951__auto___35698 = G__35699;
continue;
} else {
}
break;
}

var argseq__26958__auto__ = ((((0) < args__26957__auto__.length))?(new cljs.core.IndexedSeq(args__26957__auto__.slice((0)),(0),null)):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__26958__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init611284488537917249.clj",193,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing: %s -> %s",args,pstr], null);
});})(pstr))
,null)),null);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq35696){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35696));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
var __x_35706 = prefixed_pstr;
try{if(typeof __x_35706 === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35703){if((e35703 instanceof Error)){
var __t_35707 = e35703;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",__x_35706,__t_35707,null);
} else {
throw e35703;

}
}
var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__35705 = prefix;
switch (G__35705) {
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
var vec__35704 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__35704,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__35704,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init611284488537917249.clj",205,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (prefix,pstr,clj,wrapped_QMARK_,vec__35704,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(prefix,pstr,clj,wrapped_QMARK_,vec__35704,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
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
var args__26957__auto__ = [];
var len__26950__auto___35878 = arguments.length;
var i__26951__auto___35879 = (0);
while(true){
if((i__26951__auto___35879 < len__26950__auto___35878)){
args__26957__auto__.push((arguments[i__26951__auto___35879]));

var G__35880 = (i__26951__auto___35879 + (1));
i__26951__auto___35879 = G__35880;
continue;
} else {
}
break;
}

var argseq__26958__auto__ = ((((1) < args__26957__auto__.length))?(new cljs.core.IndexedSeq(args__26957__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26958__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_adapter,p__35712){
var vec__35713 = p__35712;
var map__35714 = cljs.core.nth.call(null,vec__35713,(0),null);
var map__35714__$1 = ((((!((map__35714 == null)))?((((map__35714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35714):map__35714);
var recv_buf_or_n = cljs.core.get.call(null,map__35714__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__35714__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__35714__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__35714__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__35714__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__25880__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
var or__25880__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__25880__auto____$1)){
return or__25880__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__35714__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__35714__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var __x = send_buf_ms_ajax;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35716){if((e35716 instanceof Error)){
var __t = e35716;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",__x,__t,null);
} else {
throw e35716;

}
}})(),(function (){var __x = send_buf_ms_ws;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35717){if((e35717 instanceof Error)){
var __t = e35717;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",__x,__t,null);
} else {
throw e35717;

}
}})()], null))){
} else {
throw (new Error("Assert failed: (have? enc/pos-int? send-buf-ms-ajax send-buf-ms-ws)"));
}

if(cljs.core.truth_((function (){var __x = web_server_adapter;
try{if(((function (__x,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__35709_SHARP_){
if(!((p1__35709_SHARP_ == null))){
if((false) || (p1__35709_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__35709_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__35709_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__35709_SHARP_);
}
});})(__x,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35718){if((e35718 instanceof Error)){
var __t = e35718;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__35709#] (satisfies? interfaces/IServerChanAdapter p1__35709#)) web-server-adapter)",__x,__t,null);
} else {
throw e35718;

}
}})())){
} else {
throw (new Error("Assert failed: (have? (fn* [p1__35709#] (satisfies? interfaces/IServerChanAdapter p1__35709#)) web-server-adapter)"));
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var user_id_fn__$1 = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__25880__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type,uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35720){if((e35720 instanceof Error)){
var __t = e35720;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e35720;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35721){
var map__35722 = p__35721;
var map__35722__$1 = ((((!((map__35722 == null)))?((((map__35722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35722):map__35722);
var old_m = map__35722__$1;
var ws = cljs.core.get.call(null,map__35722__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__35722__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__35722__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__35724 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35724) {
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
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35725){if((e35725 instanceof Error)){
var __t = e35725;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e35725;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35726){
var map__35727 = p__35726;
var map__35727__$1 = ((((!((map__35727 == null)))?((((map__35727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35727):map__35727);
var old_m = map__35727__$1;
var ws = cljs.core.get.call(null,map__35727__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.call(null,map__35727__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__35727__$1,new cljs.core.Keyword(null,"any","any",1705907423));
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
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__35882__delegate = function (user_id,ev,p__35729){
var vec__35730 = p__35729;
var map__35731 = cljs.core.nth.call(null,vec__35730,(0),null);
var map__35731__$1 = ((((!((map__35731 == null)))?((((map__35731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35731):map__35731);
var opts = map__35731__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__35731__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_35883 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __35884 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init611284488537917249.clj",324,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_35883,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_35883,ev], null);
});})(uid_35883,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var __35885__$1 = (cljs.core.truth_(uid_35883)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __35886__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_35887 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__35888 = ((function (uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type){
var temp__4425__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),((function (uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__35733 = cljs.core.get.call(null,m,uid_35883);
var ___$3 = cljs.core.nth.call(null,vec__35733,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35733,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_35887)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_35883),cljs.core.get.call(null,m,uid_35883));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4425__auto__)){
var pulled = temp__4425__auto__;
var vec__35734 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__35734,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35734,(1),null);
var __x_35889 = buffered_evs;
try{if(cljs.core.vector_QMARK_.call(null,__x_35889)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35735){if((e35735 instanceof Error)){
var __t_35890 = e35735;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",__x_35889,__t_35890,null);
} else {
throw e35735;

}
}
var __x_35891 = ev_uuids;
try{if(cljs.core.set_QMARK_.call(null,__x_35891)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35736){if((e35736 instanceof Error)){
var __t_35892 = e35736;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",__x_35891,__t_35892,null);
} else {
throw e35736;

}
}
var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init611284488537917249.clj",357,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__35734,buffered_evs,ev_uuids,pulled,temp__4425__auto__,uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__35734,buffered_evs,ev_uuids,pulled,temp__4425__auto__,uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var G__35737 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35737) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_35883,buffered_evs_ppstr);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_35883,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
} else {
return null;
}
});})(uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/tmp/form-init611284488537917249.clj",367,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,flush_buffer_BANG__35888,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_35883], null);
});})(uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,flush_buffer_BANG__35888,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

if(cljs.core.truth_(flush_QMARK_)){
var seq__35738_35894 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__35739_35895 = null;
var count__35740_35896 = (0);
var i__35741_35897 = (0);
while(true){
if((i__35741_35897 < count__35740_35896)){
var type_35898 = cljs.core._nth.call(null,chunk__35739_35895,i__35741_35897);
flush_buffer_BANG__35888.call(null,type_35898);

var G__35899 = seq__35738_35894;
var G__35900 = chunk__35739_35895;
var G__35901 = count__35740_35896;
var G__35902 = (i__35741_35897 + (1));
seq__35738_35894 = G__35899;
chunk__35739_35895 = G__35900;
count__35740_35896 = G__35901;
i__35741_35897 = G__35902;
continue;
} else {
var temp__4425__auto___35903 = cljs.core.seq.call(null,seq__35738_35894);
if(temp__4425__auto___35903){
var seq__35738_35904__$1 = temp__4425__auto___35903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35738_35904__$1)){
var c__26691__auto___35905 = cljs.core.chunk_first.call(null,seq__35738_35904__$1);
var G__35906 = cljs.core.chunk_rest.call(null,seq__35738_35904__$1);
var G__35907 = c__26691__auto___35905;
var G__35908 = cljs.core.count.call(null,c__26691__auto___35905);
var G__35909 = (0);
seq__35738_35894 = G__35906;
chunk__35739_35895 = G__35907;
count__35740_35896 = G__35908;
i__35741_35897 = G__35909;
continue;
} else {
var type_35910 = cljs.core.first.call(null,seq__35738_35904__$1);
flush_buffer_BANG__35888.call(null,type_35910);

var G__35911 = cljs.core.next.call(null,seq__35738_35904__$1);
var G__35912 = null;
var G__35913 = (0);
var G__35914 = (0);
seq__35738_35894 = G__35911;
chunk__35739_35895 = G__35912;
count__35740_35896 = G__35913;
i__35741_35897 = G__35914;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__35742_35915 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_35883], null))));
var chunk__35743_35916 = null;
var count__35744_35917 = (0);
var i__35745_35918 = (0);
while(true){
if((i__35745_35918 < count__35744_35917)){
var server_ch_35919 = cljs.core._nth.call(null,chunk__35743_35916,i__35745_35918);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35919);

var G__35920 = seq__35742_35915;
var G__35921 = chunk__35743_35916;
var G__35922 = count__35744_35917;
var G__35923 = (i__35745_35918 + (1));
seq__35742_35915 = G__35920;
chunk__35743_35916 = G__35921;
count__35744_35917 = G__35922;
i__35745_35918 = G__35923;
continue;
} else {
var temp__4425__auto___35924 = cljs.core.seq.call(null,seq__35742_35915);
if(temp__4425__auto___35924){
var seq__35742_35925__$1 = temp__4425__auto___35924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35742_35925__$1)){
var c__26691__auto___35926 = cljs.core.chunk_first.call(null,seq__35742_35925__$1);
var G__35927 = cljs.core.chunk_rest.call(null,seq__35742_35925__$1);
var G__35928 = c__26691__auto___35926;
var G__35929 = cljs.core.count.call(null,c__26691__auto___35926);
var G__35930 = (0);
seq__35742_35915 = G__35927;
chunk__35743_35916 = G__35928;
count__35744_35917 = G__35929;
i__35745_35918 = G__35930;
continue;
} else {
var server_ch_35931 = cljs.core.first.call(null,seq__35742_35925__$1);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35931);

var G__35932 = cljs.core.next.call(null,seq__35742_35925__$1);
var G__35933 = null;
var G__35934 = (0);
var G__35935 = (0);
seq__35742_35915 = G__35932;
chunk__35743_35916 = G__35933;
count__35744_35917 = G__35934;
i__35745_35918 = G__35935;
continue;
}
} else {
}
}
break;
}

var seq__35746_35936 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_35883], null))));
var chunk__35747_35937 = null;
var count__35748_35938 = (0);
var i__35749_35939 = (0);
while(true){
if((i__35749_35939 < count__35748_35938)){
var vec__35750_35940 = cljs.core._nth.call(null,chunk__35747_35937,i__35749_35939);
var _QMARK_server_ch_35941 = cljs.core.nth.call(null,vec__35750_35940,(0),null);
var __35942__$3 = cljs.core.nth.call(null,vec__35750_35940,(1),null);
var temp__4425__auto___35943 = _QMARK_server_ch_35941;
if(cljs.core.truth_(temp__4425__auto___35943)){
var server_ch_35944 = temp__4425__auto___35943;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35944);
} else {
}

var G__35945 = seq__35746_35936;
var G__35946 = chunk__35747_35937;
var G__35947 = count__35748_35938;
var G__35948 = (i__35749_35939 + (1));
seq__35746_35936 = G__35945;
chunk__35747_35937 = G__35946;
count__35748_35938 = G__35947;
i__35749_35939 = G__35948;
continue;
} else {
var temp__4425__auto___35949 = cljs.core.seq.call(null,seq__35746_35936);
if(temp__4425__auto___35949){
var seq__35746_35950__$1 = temp__4425__auto___35949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35746_35950__$1)){
var c__26691__auto___35951 = cljs.core.chunk_first.call(null,seq__35746_35950__$1);
var G__35952 = cljs.core.chunk_rest.call(null,seq__35746_35950__$1);
var G__35953 = c__26691__auto___35951;
var G__35954 = cljs.core.count.call(null,c__26691__auto___35951);
var G__35955 = (0);
seq__35746_35936 = G__35952;
chunk__35747_35937 = G__35953;
count__35748_35938 = G__35954;
i__35749_35939 = G__35955;
continue;
} else {
var vec__35751_35956 = cljs.core.first.call(null,seq__35746_35950__$1);
var _QMARK_server_ch_35957 = cljs.core.nth.call(null,vec__35751_35956,(0),null);
var __35958__$3 = cljs.core.nth.call(null,vec__35751_35956,(1),null);
var temp__4425__auto___35959__$1 = _QMARK_server_ch_35957;
if(cljs.core.truth_(temp__4425__auto___35959__$1)){
var server_ch_35960 = temp__4425__auto___35959__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_35960);
} else {
}

var G__35961 = cljs.core.next.call(null,seq__35746_35950__$1);
var G__35962 = null;
var G__35963 = (0);
var G__35964 = (0);
seq__35746_35936 = G__35961;
chunk__35747_35937 = G__35962;
count__35748_35938 = G__35963;
i__35749_35939 = G__35964;
continue;
}
} else {
}
}
break;
}
} else {
var seq__35752_35965 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__35753_35966 = null;
var count__35754_35967 = (0);
var i__35755_35968 = (0);
while(true){
if((i__35755_35968 < count__35754_35967)){
var type_35969 = cljs.core._nth.call(null,chunk__35753_35966,i__35755_35968);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_35969,uid_35883], null),((function (seq__35752_35965,chunk__35753_35966,count__35754_35967,i__35755_35968,type_35969,uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,flush_buffer_BANG__35888,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_35887], true)], null);
} else {
var vec__35756 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__35756,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35756,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_35887)], null);
}
});})(seq__35752_35965,chunk__35753_35966,count__35754_35967,i__35755_35968,type_35969,uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,flush_buffer_BANG__35888,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__35970 = seq__35752_35965;
var G__35971 = chunk__35753_35966;
var G__35972 = count__35754_35967;
var G__35973 = (i__35755_35968 + (1));
seq__35752_35965 = G__35970;
chunk__35753_35966 = G__35971;
count__35754_35967 = G__35972;
i__35755_35968 = G__35973;
continue;
} else {
var temp__4425__auto___35974 = cljs.core.seq.call(null,seq__35752_35965);
if(temp__4425__auto___35974){
var seq__35752_35975__$1 = temp__4425__auto___35974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35752_35975__$1)){
var c__26691__auto___35976 = cljs.core.chunk_first.call(null,seq__35752_35975__$1);
var G__35977 = cljs.core.chunk_rest.call(null,seq__35752_35975__$1);
var G__35978 = c__26691__auto___35976;
var G__35979 = cljs.core.count.call(null,c__26691__auto___35976);
var G__35980 = (0);
seq__35752_35965 = G__35977;
chunk__35753_35966 = G__35978;
count__35754_35967 = G__35979;
i__35755_35968 = G__35980;
continue;
} else {
var type_35981 = cljs.core.first.call(null,seq__35752_35975__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_35981,uid_35883], null),((function (seq__35752_35965,chunk__35753_35966,count__35754_35967,i__35755_35968,type_35981,seq__35752_35975__$1,temp__4425__auto___35974,uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,flush_buffer_BANG__35888,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_35887], true)], null);
} else {
var vec__35757 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__35757,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__35757,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_35887)], null);
}
});})(seq__35752_35965,chunk__35753_35966,count__35754_35967,i__35755_35968,type_35981,seq__35752_35975__$1,temp__4425__auto___35974,uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,flush_buffer_BANG__35888,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__35982 = cljs.core.next.call(null,seq__35752_35975__$1);
var G__35983 = null;
var G__35984 = (0);
var G__35985 = (0);
seq__35752_35965 = G__35982;
chunk__35753_35966 = G__35983;
count__35754_35967 = G__35984;
i__35755_35968 = G__35985;
continue;
}
} else {
}
}
break;
}

var c__30011__auto___35986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto___35986,uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,flush_buffer_BANG__35888,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto___35986,uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,flush_buffer_BANG__35888,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35767){
var state_val_35768 = (state_35767[(1)]);
if((state_val_35768 === (1))){
var state_35767__$1 = state_35767;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_35769_35987 = state_35767__$1;
(statearr_35769_35987[(1)] = (2));

} else {
var statearr_35770_35988 = state_35767__$1;
(statearr_35770_35988[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35768 === (2))){
var state_35767__$1 = state_35767;
var statearr_35771_35989 = state_35767__$1;
(statearr_35771_35989[(2)] = null);

(statearr_35771_35989[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35768 === (3))){
var inst_35760 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var state_35767__$1 = state_35767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35767__$1,(5),inst_35760);
} else {
if((state_val_35768 === (4))){
var inst_35764 = (state_35767[(2)]);
var inst_35765 = flush_buffer_BANG__35888.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_35767__$1 = (function (){var statearr_35772 = state_35767;
(statearr_35772[(7)] = inst_35764);

return statearr_35772;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35767__$1,inst_35765);
} else {
if((state_val_35768 === (5))){
var inst_35762 = (state_35767[(2)]);
var state_35767__$1 = state_35767;
var statearr_35773_35990 = state_35767__$1;
(statearr_35773_35990[(2)] = inst_35762);

(statearr_35773_35990[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__30011__auto___35986,uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,flush_buffer_BANG__35888,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29899__auto__,c__30011__auto___35986,uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,flush_buffer_BANG__35888,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29900__auto__ = null;
var taoensso$sente$state_machine__29900__auto____0 = (function (){
var statearr_35777 = [null,null,null,null,null,null,null,null];
(statearr_35777[(0)] = taoensso$sente$state_machine__29900__auto__);

(statearr_35777[(1)] = (1));

return statearr_35777;
});
var taoensso$sente$state_machine__29900__auto____1 = (function (state_35767){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_35767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e35778){if((e35778 instanceof Object)){
var ex__29903__auto__ = e35778;
var statearr_35779_35991 = state_35767;
(statearr_35779_35991[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35992 = state_35767;
state_35767 = G__35992;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
taoensso$sente$state_machine__29900__auto__ = function(state_35767){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29900__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29900__auto____1.call(this,state_35767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29900__auto____0;
taoensso$sente$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29900__auto____1;
return taoensso$sente$state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto___35986,uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,flush_buffer_BANG__35888,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__30013__auto__ = (function (){var statearr_35780 = f__30012__auto__.call(null);
(statearr_35780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___35986);

return statearr_35780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto___35986,uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,flush_buffer_BANG__35888,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__30011__auto___35993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto___35993,uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,flush_buffer_BANG__35888,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto___35993,uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,flush_buffer_BANG__35888,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35790){
var state_val_35791 = (state_35790[(1)]);
if((state_val_35791 === (1))){
var state_35790__$1 = state_35790;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_35792_35994 = state_35790__$1;
(statearr_35792_35994[(1)] = (2));

} else {
var statearr_35793_35995 = state_35790__$1;
(statearr_35793_35995[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (2))){
var state_35790__$1 = state_35790;
var statearr_35794_35996 = state_35790__$1;
(statearr_35794_35996[(2)] = null);

(statearr_35794_35996[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35791 === (3))){
var inst_35783 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var state_35790__$1 = state_35790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35790__$1,(5),inst_35783);
} else {
if((state_val_35791 === (4))){
var inst_35787 = (state_35790[(2)]);
var inst_35788 = flush_buffer_BANG__35888.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_35790__$1 = (function (){var statearr_35795 = state_35790;
(statearr_35795[(7)] = inst_35787);

return statearr_35795;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35790__$1,inst_35788);
} else {
if((state_val_35791 === (5))){
var inst_35785 = (state_35790[(2)]);
var state_35790__$1 = state_35790;
var statearr_35796_35997 = state_35790__$1;
(statearr_35796_35997[(2)] = inst_35785);

(statearr_35796_35997[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__30011__auto___35993,uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,flush_buffer_BANG__35888,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29899__auto__,c__30011__auto___35993,uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,flush_buffer_BANG__35888,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29900__auto__ = null;
var taoensso$sente$state_machine__29900__auto____0 = (function (){
var statearr_35800 = [null,null,null,null,null,null,null,null];
(statearr_35800[(0)] = taoensso$sente$state_machine__29900__auto__);

(statearr_35800[(1)] = (1));

return statearr_35800;
});
var taoensso$sente$state_machine__29900__auto____1 = (function (state_35790){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_35790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e35801){if((e35801 instanceof Object)){
var ex__29903__auto__ = e35801;
var statearr_35802_35998 = state_35790;
(statearr_35802_35998[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35999 = state_35790;
state_35790 = G__35999;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
taoensso$sente$state_machine__29900__auto__ = function(state_35790){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29900__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29900__auto____1.call(this,state_35790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29900__auto____0;
taoensso$sente$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29900__auto____1;
return taoensso$sente$state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto___35993,uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,flush_buffer_BANG__35888,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__30013__auto__ = (function (){var statearr_35803 = f__30012__auto__.call(null);
(statearr_35803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___35993);

return statearr_35803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto___35993,uid_35883,__35884,__35885__$1,__35886__$2,ev_uuid_35887,flush_buffer_BANG__35888,vec__35730,map__35731,map__35731__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}

return null;
};
var G__35882 = function (user_id,ev,var_args){
var p__35729 = null;
if (arguments.length > 2) {
var G__36000__i = 0, G__36000__a = new Array(arguments.length -  2);
while (G__36000__i < G__36000__a.length) {G__36000__a[G__36000__i] = arguments[G__36000__i + 2]; ++G__36000__i;}
  p__35729 = new cljs.core.IndexedSeq(G__36000__a,0);
} 
return G__35882__delegate.call(this,user_id,ev,p__35729);};
G__35882.cljs$lang$maxFixedArity = 2;
G__35882.cljs$lang$applyTo = (function (arglist__36001){
var user_id = cljs.core.first(arglist__36001);
arglist__36001 = cljs.core.next(arglist__36001);
var ev = cljs.core.first(arglist__36001);
var p__35729 = cljs.core.rest(arglist__36001);
return G__35882__delegate(user_id,ev,p__35729);
});
G__35882.cljs$core$IFn$_invoke$arity$variadic = G__35882__delegate;
return G__35882;
})()
;})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__35804 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__35804,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__35804,(1),null);
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?((function (params,ppstr,client_id,vec__35804,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init611284488537917249.clj",435,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__35804,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): %s",resp_clj], null);
});})(params,ppstr,client_id,vec__35804,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
});})(params,ppstr,client_id,vec__35804,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
return null;
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init611284488537917249.clj",442,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__35804,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): dummy-cb-200"], null);
});})(params,ppstr,client_id,vec__35804,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337)),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var csrf_token = csrf_token_fn.call(null,ring_req);
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var websocket_QMARK_ = new cljs.core.Keyword(null,"websocket?","websocket?",1552493139).cljs$core$IFn$_invoke$arity$1(ring_req);
var receive_event_msg_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__36002__delegate = function (event,p__35805){
var vec__35806 = p__35805;
var _QMARK_reply_fn = cljs.core.nth.call(null,vec__35806,(0),null);
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
};
var G__36002 = function (event,var_args){
var p__35805 = null;
if (arguments.length > 1) {
var G__36003__i = 0, G__36003__a = new Array(arguments.length -  1);
while (G__36003__i < G__36003__a.length) {G__36003__a[G__36003__i] = arguments[G__36003__i + 1]; ++G__36003__i;}
  p__35805 = new cljs.core.IndexedSeq(G__36003__a,0);
} 
return G__36002__delegate.call(this,event,p__35805);};
G__36002.cljs$lang$maxFixedArity = 1;
G__36002.cljs$lang$applyTo = (function (arglist__36004){
var event = cljs.core.first(arglist__36004);
var p__35805 = cljs.core.rest(arglist__36004);
return G__36002__delegate(event,p__35805);
});
G__36002.cljs$core$IFn$_invoke$arity$variadic = G__36002__delegate;
return G__36002;
})()
;})(csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var handshake_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init611284488537917249.clj",467,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handshake!"], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = ((!((_QMARK_handshake_data == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev),cljs.core.not.call(null,websocket_QMARK_));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init611284488537917249.clj",479,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init611284488537917249.clj",487,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,[cljs.core.str(server_ch)].join('')], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

taoensso.encore.reset_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id], null),server_ch);

if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954)], null));
} else {
}

return handshake_BANG_.call(null,server_ch);
} else {
var initial_conn_from_client_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_ch,taoensso.encore.now_udt.call(null)], null),(_QMARK_v == null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
var handshake_QMARK_ = (function (){var or__25880__auto__ = initial_conn_from_client_QMARK_;
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
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
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,req_ppstr){
var vec__35807 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__35807,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__35807,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__35807,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init611284488537917249.clj",514,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__35807,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__35807,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__35807,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,status){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
if(cljs.core.empty_QMARK_.call(null,new_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return new_m;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var c__30011__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35821){
var state_val_35822 = (state_35821[(1)]);
if((state_val_35822 === (1))){
var inst_35808 = cljs.core.async.timeout.call(null,(5000));
var state_35821__$1 = state_35821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35821__$1,(2),inst_35808);
} else {
if((state_val_35822 === (2))){
var inst_35810 = (state_35821[(2)]);
var inst_35811 = upd_connected_uid_BANG_.call(null,uid);
var state_35821__$1 = (function (){var statearr_35823 = state_35821;
(statearr_35823[(7)] = inst_35810);

return statearr_35823;
})();
if(cljs.core.truth_(inst_35811)){
var statearr_35824_36005 = state_35821__$1;
(statearr_35824_36005[(1)] = (3));

} else {
var statearr_35825_36006 = state_35821__$1;
(statearr_35825_36006[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35822 === (3))){
var inst_35813 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35814 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_35815 = (new cljs.core.PersistentVector(null,1,(5),inst_35813,inst_35814,null));
var inst_35816 = receive_event_msg_BANG_.call(null,inst_35815);
var state_35821__$1 = state_35821;
var statearr_35826_36007 = state_35821__$1;
(statearr_35826_36007[(2)] = inst_35816);

(statearr_35826_36007[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35822 === (4))){
var state_35821__$1 = state_35821;
var statearr_35827_36008 = state_35821__$1;
(statearr_35827_36008[(2)] = null);

(statearr_35827_36008[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35822 === (5))){
var inst_35819 = (state_35821[(2)]);
var state_35821__$1 = state_35821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35821__$1,inst_35819);
} else {
return null;
}
}
}
}
}
});})(c__30011__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29899__auto__,c__30011__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29900__auto__ = null;
var taoensso$sente$state_machine__29900__auto____0 = (function (){
var statearr_35831 = [null,null,null,null,null,null,null,null];
(statearr_35831[(0)] = taoensso$sente$state_machine__29900__auto__);

(statearr_35831[(1)] = (1));

return statearr_35831;
});
var taoensso$sente$state_machine__29900__auto____1 = (function (state_35821){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_35821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e35832){if((e35832 instanceof Object)){
var ex__29903__auto__ = e35832;
var statearr_35833_36009 = state_35821;
(statearr_35833_36009[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36010 = state_35821;
state_35821 = G__36010;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
taoensso$sente$state_machine__29900__auto__ = function(state_35821){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29900__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29900__auto____1.call(this,state_35821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29900__auto____0;
taoensso$sente$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29900__auto____1;
return taoensso$sente$state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__30013__auto__ = (function (){var statearr_35834 = f__30012__auto__.call(null);
(statearr_35834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto__);

return statearr_35834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__30011__auto__;
} else {
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,new cljs.core.Keyword(null,"ajax","ajax",814345549),client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__35835){
var vec__35836 = p__35835;
var server_ch__$1 = cljs.core.nth.call(null,vec__35836,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__35836,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var udt_disconnected = taoensso.encore.now_udt.call(null);
var c__30011__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_35859){
var state_val_35860 = (state_35859[(1)]);
if((state_val_35860 === (1))){
var inst_35837 = cljs.core.async.timeout.call(null,(5000));
var state_35859__$1 = state_35859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35859__$1,(2),inst_35837);
} else {
if((state_val_35860 === (2))){
var inst_35839 = (state_35859[(2)]);
var inst_35840 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35841 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_35842 = (new cljs.core.PersistentVector(null,2,(5),inst_35840,inst_35841,null));
var inst_35843 = (function (){return ((function (inst_35839,inst_35840,inst_35841,inst_35842,state_val_35860,c__30011__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var vec__35861 = cljs.core.get.call(null,_QMARK_m,client_id);
var _ = cljs.core.nth.call(null,vec__35861,(0),null);
var _QMARK_udt_last_connected = cljs.core.nth.call(null,vec__35861,(1),null);
var disconnected_QMARK_ = (function (){var and__25868__auto__ = _QMARK_udt_last_connected;
if(cljs.core.truth_(and__25868__auto__)){
return (udt_disconnected >= _QMARK_udt_last_connected);
} else {
return and__25868__auto__;
}
})();
if(cljs.core.not.call(null,disconnected_QMARK_)){
return taoensso.encore.swapped.call(null,_QMARK_m,cljs.core.not.call(null,new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)));
} else {
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
return taoensso.encore.swapped.call(null,((cljs.core.empty_QMARK_.call(null,new_m))?new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782):new_m),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586));
}
});
;})(inst_35839,inst_35840,inst_35841,inst_35842,state_val_35860,c__30011__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_35844 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_35842,inst_35843);
var state_35859__$1 = (function (){var statearr_35862 = state_35859;
(statearr_35862[(7)] = inst_35839);

return statearr_35862;
})();
if(cljs.core.truth_(inst_35844)){
var statearr_35863_36011 = state_35859__$1;
(statearr_35863_36011[(1)] = (3));

} else {
var statearr_35864_36012 = state_35859__$1;
(statearr_35864_36012[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (3))){
var inst_35846 = upd_connected_uid_BANG_.call(null,uid);
var state_35859__$1 = state_35859;
if(cljs.core.truth_(inst_35846)){
var statearr_35865_36013 = state_35859__$1;
(statearr_35865_36013[(1)] = (6));

} else {
var statearr_35866_36014 = state_35859__$1;
(statearr_35866_36014[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (4))){
var state_35859__$1 = state_35859;
var statearr_35867_36015 = state_35859__$1;
(statearr_35867_36015[(2)] = null);

(statearr_35867_36015[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (5))){
var inst_35857 = (state_35859[(2)]);
var state_35859__$1 = state_35859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35859__$1,inst_35857);
} else {
if((state_val_35860 === (6))){
var inst_35848 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35849 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_35850 = (new cljs.core.PersistentVector(null,1,(5),inst_35848,inst_35849,null));
var inst_35851 = receive_event_msg_BANG_.call(null,inst_35850);
var state_35859__$1 = state_35859;
var statearr_35868_36016 = state_35859__$1;
(statearr_35868_36016[(2)] = inst_35851);

(statearr_35868_36016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (7))){
var state_35859__$1 = state_35859;
var statearr_35869_36017 = state_35859__$1;
(statearr_35869_36017[(2)] = null);

(statearr_35869_36017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35860 === (8))){
var inst_35854 = (state_35859[(2)]);
var state_35859__$1 = state_35859;
var statearr_35870_36018 = state_35859__$1;
(statearr_35870_36018[(2)] = inst_35854);

(statearr_35870_36018[(1)] = (5));


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
});})(c__30011__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__29899__auto__,c__30011__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__29900__auto__ = null;
var taoensso$sente$state_machine__29900__auto____0 = (function (){
var statearr_35874 = [null,null,null,null,null,null,null,null];
(statearr_35874[(0)] = taoensso$sente$state_machine__29900__auto__);

(statearr_35874[(1)] = (1));

return statearr_35874;
});
var taoensso$sente$state_machine__29900__auto____1 = (function (state_35859){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_35859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e35875){if((e35875 instanceof Object)){
var ex__29903__auto__ = e35875;
var statearr_35876_36019 = state_35859;
(statearr_35876_36019[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36020 = state_35859;
state_35859 = G__36020;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
taoensso$sente$state_machine__29900__auto__ = function(state_35859){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29900__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29900__auto____1.call(this,state_35859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29900__auto____0;
taoensso$sente$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29900__auto____1;
return taoensso$sente$state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__30013__auto__ = (function (){var statearr_35877 = f__30012__auto__.call(null);
(statearr_35877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto__);

return statearr_35877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__30011__auto__;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__35713,map__35714,map__35714__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq35710){
var G__35711 = cljs.core.first.call(null,seq35710);
var seq35710__$1 = cljs.core.next.call(null,seq35710);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35711,seq35710__$1);
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init611284488537917249.clj",576,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null);

var seq__36025 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null))));
var chunk__36026 = null;
var count__36027 = (0);
var i__36028 = (0);
while(true){
if((i__36028 < count__36027)){
var server_ch = cljs.core._nth.call(null,chunk__36026,i__36028);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__36029 = seq__36025;
var G__36030 = chunk__36026;
var G__36031 = count__36027;
var G__36032 = (i__36028 + (1));
seq__36025 = G__36029;
chunk__36026 = G__36030;
count__36027 = G__36031;
i__36028 = G__36032;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36025);
if(temp__4425__auto__){
var seq__36025__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36025__$1)){
var c__26691__auto__ = cljs.core.chunk_first.call(null,seq__36025__$1);
var G__36033 = cljs.core.chunk_rest.call(null,seq__36025__$1);
var G__36034 = c__26691__auto__;
var G__36035 = cljs.core.count.call(null,c__26691__auto__);
var G__36036 = (0);
seq__36025 = G__36033;
chunk__36026 = G__36034;
count__36027 = G__36035;
i__36028 = G__36036;
continue;
} else {
var server_ch = cljs.core.first.call(null,seq__36025__$1);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__36037 = cljs.core.next.call(null,seq__36025__$1);
var G__36038 = null;
var G__36039 = (0);
var G__36040 = (0);
seq__36025 = G__36037;
chunk__36026 = G__36038;
count__36027 = G__36039;
i__36028 = G__36040;
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
var args__26957__auto__ = [];
var len__26950__auto___36130 = arguments.length;
var i__26951__auto___36131 = (0);
while(true){
if((i__26951__auto___36131 < len__26950__auto___36130)){
args__26957__auto__.push((arguments[i__26951__auto___36131]));

var G__36132 = (i__26951__auto___36131 + (1));
i__26951__auto___36131 = G__36132;
continue;
} else {
}
break;
}

var argseq__26958__auto__ = ((((3) < args__26957__auto__.length))?(new cljs.core.IndexedSeq(args__26957__auto__.slice((3)),(0),null)):null);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26958__auto__);
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conns_,uid,buffered_evs_pstr,p__36045){
var vec__36046 = p__36045;
var map__36047 = cljs.core.nth.call(null,vec__36046,(0),null);
var map__36047__$1 = ((((!((map__36047 == null)))?((((map__36047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36047):map__36047);
var nmax_attempts = cljs.core.get.call(null,map__36047__$1,new cljs.core.Keyword(null,"nmax-attempts","nmax-attempts",1471144610),(7));
var ms_base = cljs.core.get.call(null,map__36047__$1,new cljs.core.Keyword(null,"ms-base","ms-base",-1962784511),(90));
var ms_rand = cljs.core.get.call(null,map__36047__$1,new cljs.core.Keyword(null,"ms-rand","ms-rand",1169398874),(90));

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init611284488537917249.clj",589,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36046,map__36047,map__36047__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
});})(vec__36046,map__36047,map__36047__$1,nmax_attempts,ms_base,ms_rand))
,null)),null);

var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__30011__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto__,client_ids_unsatisfied,vec__36046,map__36047,map__36047__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto__,client_ids_unsatisfied,vec__36046,map__36047,map__36047__$1,nmax_attempts,ms_base,ms_rand){
return (function (state_36096){
var state_val_36097 = (state_36096[(1)]);
if((state_val_36097 === (7))){
var inst_36050 = (state_36096[(7)]);
var inst_36057 = (state_36096[(8)]);
var inst_36051 = (state_36096[(9)]);
var inst_36068 = (function (){var n = inst_36050;
var client_ids_satisfied = inst_36051;
var _QMARK_pulled = inst_36057;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_36050,inst_36057,inst_36051,state_val_36097,c__30011__auto__,client_ids_unsatisfied,vec__36046,map__36047,map__36047__$1,nmax_attempts,ms_base,ms_rand){
return (function (s,client_id,p__36067){
var vec__36098 = p__36067;
var _QMARK_server_ch = cljs.core.nth.call(null,vec__36098,(0),null);
var _ = cljs.core.nth.call(null,vec__36098,(1),null);
if(((_QMARK_server_ch == null)) || (cljs.core.not.call(null,taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_server_ch,buffered_evs_pstr,new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103))))){
return s;
} else {
return cljs.core.conj.call(null,s,client_id);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_36050,inst_36057,inst_36051,state_val_36097,c__30011__auto__,client_ids_unsatisfied,vec__36046,map__36047,map__36047__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_36069 = cljs.core.PersistentHashSet.EMPTY;
var inst_36070 = cljs.core.reduce_kv.call(null,inst_36068,inst_36069,inst_36057);
var state_36096__$1 = state_36096;
var statearr_36099_36133 = state_36096__$1;
(statearr_36099_36133[(2)] = inst_36070);

(statearr_36099_36133[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (1))){
var inst_36049 = cljs.core.PersistentHashSet.EMPTY;
var inst_36050 = (0);
var inst_36051 = inst_36049;
var state_36096__$1 = (function (){var statearr_36100 = state_36096;
(statearr_36100[(7)] = inst_36050);

(statearr_36100[(9)] = inst_36051);

return statearr_36100;
})();
var statearr_36101_36134 = state_36096__$1;
(statearr_36101_36134[(2)] = null);

(statearr_36101_36134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (4))){
var state_36096__$1 = state_36096;
var statearr_36102_36135 = state_36096__$1;
(statearr_36102_36135[(2)] = true);

(statearr_36102_36135[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (15))){
var inst_36092 = (state_36096[(2)]);
var state_36096__$1 = state_36096;
var statearr_36103_36136 = state_36096__$1;
(statearr_36103_36136[(2)] = inst_36092);

(statearr_36103_36136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (13))){
var inst_36083 = cljs.core.rand_int.call(null,ms_rand);
var inst_36084 = (ms_base + inst_36083);
var inst_36085 = cljs.core.async.timeout.call(null,inst_36084);
var state_36096__$1 = state_36096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36096__$1,(16),inst_36085);
} else {
if((state_val_36097 === (6))){
var inst_36057 = (state_36096[(8)]);
var inst_36065 = (state_36096[(2)]);
var state_36096__$1 = (function (){var statearr_36104 = state_36096;
(statearr_36104[(10)] = inst_36065);

return statearr_36104;
})();
if(cljs.core.truth_(inst_36057)){
var statearr_36105_36137 = state_36096__$1;
(statearr_36105_36137[(1)] = (7));

} else {
var statearr_36106_36138 = state_36096__$1;
(statearr_36106_36138[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (3))){
var inst_36094 = (state_36096[(2)]);
var state_36096__$1 = state_36096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36096__$1,inst_36094);
} else {
if((state_val_36097 === (12))){
var inst_36081 = (state_36096[(2)]);
var state_36096__$1 = state_36096;
if(cljs.core.truth_(inst_36081)){
var statearr_36107_36139 = state_36096__$1;
(statearr_36107_36139[(1)] = (13));

} else {
var statearr_36108_36140 = state_36096__$1;
(statearr_36108_36140[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (2))){
var inst_36050 = (state_36096[(7)]);
var inst_36057 = (state_36096[(8)]);
var inst_36051 = (state_36096[(9)]);
var inst_36053 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36054 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_36055 = (new cljs.core.PersistentVector(null,2,(5),inst_36053,inst_36054,null));
var inst_36056 = (function (){var n = inst_36050;
var client_ids_satisfied = inst_36051;
return ((function (n,client_ids_satisfied,inst_36050,inst_36057,inst_36051,inst_36053,inst_36054,inst_36055,state_val_36097,c__30011__auto__,client_ids_unsatisfied,vec__36046,map__36047,map__36047__$1,nmax_attempts,ms_base,ms_rand){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_36050,inst_36057,inst_36051,inst_36053,inst_36054,inst_36055,state_val_36097,c__30011__auto__,client_ids_unsatisfied,vec__36046,map__36047,map__36047__$1,nmax_attempts,ms_base,ms_rand){
return (function (m__$1,k){
var vec__36109 = cljs.core.get.call(null,m__$1,k);
var _QMARK_server_ch = cljs.core.nth.call(null,vec__36109,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__36109,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_36050,inst_36057,inst_36051,inst_36053,inst_36054,inst_36055,state_val_36097,c__30011__auto__,client_ids_unsatisfied,vec__36046,map__36047,map__36047__$1,nmax_attempts,ms_base,ms_rand))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_36050,inst_36057,inst_36051,inst_36053,inst_36054,inst_36055,state_val_36097,c__30011__auto__,client_ids_unsatisfied,vec__36046,map__36047,map__36047__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_36057__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_36055,inst_36056);
var inst_36058 = (function (){var n = inst_36050;
var client_ids_satisfied = inst_36051;
var _QMARK_pulled = inst_36057__$1;
var __x = inst_36057__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,__x,inst_36050,inst_36057,inst_36051,inst_36053,inst_36054,inst_36055,inst_36056,inst_36057__$1,state_val_36097,c__30011__auto__,client_ids_unsatisfied,vec__36046,map__36047,map__36047__$1,nmax_attempts,ms_base,ms_rand){
return (function (__x__$1){
var or__25880__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,__x__$1);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,__x,inst_36050,inst_36057,inst_36051,inst_36053,inst_36054,inst_36055,inst_36056,inst_36057__$1,state_val_36097,c__30011__auto__,client_ids_unsatisfied,vec__36046,map__36047,map__36047__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_36059 = inst_36058.call(null,inst_36057__$1);
var state_36096__$1 = (function (){var statearr_36110 = state_36096;
(statearr_36110[(8)] = inst_36057__$1);

return statearr_36110;
})();
if(cljs.core.truth_(inst_36059)){
var statearr_36111_36141 = state_36096__$1;
(statearr_36111_36141[(1)] = (4));

} else {
var statearr_36112_36142 = state_36096__$1;
(statearr_36112_36142[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (11))){
var inst_36075 = (state_36096[(11)]);
var state_36096__$1 = state_36096;
var statearr_36113_36143 = state_36096__$1;
(statearr_36113_36143[(2)] = inst_36075);

(statearr_36113_36143[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (9))){
var inst_36050 = (state_36096[(7)]);
var inst_36075 = (state_36096[(11)]);
var inst_36051 = (state_36096[(9)]);
var inst_36073 = (state_36096[(2)]);
var inst_36074 = cljs.core.into.call(null,inst_36051,inst_36073);
var inst_36075__$1 = (inst_36050 < nmax_attempts);
var state_36096__$1 = (function (){var statearr_36114 = state_36096;
(statearr_36114[(11)] = inst_36075__$1);

(statearr_36114[(12)] = inst_36074);

return statearr_36114;
})();
if(cljs.core.truth_(inst_36075__$1)){
var statearr_36115_36144 = state_36096__$1;
(statearr_36115_36144[(1)] = (10));

} else {
var statearr_36116_36145 = state_36096__$1;
(statearr_36116_36145[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (5))){
var inst_36057 = (state_36096[(8)]);
var inst_36062 = "([:or nil? map?] ?pulled)";
var inst_36063 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,inst_36062,inst_36057,null,null);
var state_36096__$1 = state_36096;
var statearr_36117_36146 = state_36096__$1;
(statearr_36117_36146[(2)] = inst_36063);

(statearr_36117_36146[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (14))){
var state_36096__$1 = state_36096;
var statearr_36118_36147 = state_36096__$1;
(statearr_36118_36147[(2)] = null);

(statearr_36118_36147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (16))){
var inst_36050 = (state_36096[(7)]);
var inst_36074 = (state_36096[(12)]);
var inst_36087 = (state_36096[(2)]);
var inst_36088 = (inst_36050 + (1));
var inst_36050__$1 = inst_36088;
var inst_36051 = inst_36074;
var state_36096__$1 = (function (){var statearr_36119 = state_36096;
(statearr_36119[(13)] = inst_36087);

(statearr_36119[(7)] = inst_36050__$1);

(statearr_36119[(9)] = inst_36051);

return statearr_36119;
})();
var statearr_36120_36148 = state_36096__$1;
(statearr_36120_36148[(2)] = null);

(statearr_36120_36148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (10))){
var inst_36074 = (state_36096[(12)]);
var inst_36077 = cljs.core.complement.call(null,inst_36074);
var inst_36078 = cljs.core.some.call(null,inst_36077,client_ids_unsatisfied);
var state_36096__$1 = state_36096;
var statearr_36121_36149 = state_36096__$1;
(statearr_36121_36149[(2)] = inst_36078);

(statearr_36121_36149[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36097 === (8))){
var state_36096__$1 = state_36096;
var statearr_36122_36150 = state_36096__$1;
(statearr_36122_36150[(2)] = null);

(statearr_36122_36150[(1)] = (9));


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
});})(c__30011__auto__,client_ids_unsatisfied,vec__36046,map__36047,map__36047__$1,nmax_attempts,ms_base,ms_rand))
;
return ((function (switch__29899__auto__,c__30011__auto__,client_ids_unsatisfied,vec__36046,map__36047,map__36047__$1,nmax_attempts,ms_base,ms_rand){
return (function() {
var taoensso$sente$state_machine__29900__auto__ = null;
var taoensso$sente$state_machine__29900__auto____0 = (function (){
var statearr_36126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36126[(0)] = taoensso$sente$state_machine__29900__auto__);

(statearr_36126[(1)] = (1));

return statearr_36126;
});
var taoensso$sente$state_machine__29900__auto____1 = (function (state_36096){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_36096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e36127){if((e36127 instanceof Object)){
var ex__29903__auto__ = e36127;
var statearr_36128_36151 = state_36096;
(statearr_36128_36151[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36152 = state_36096;
state_36096 = G__36152;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
taoensso$sente$state_machine__29900__auto__ = function(state_36096){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29900__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29900__auto____1.call(this,state_36096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29900__auto____0;
taoensso$sente$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29900__auto____1;
return taoensso$sente$state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto__,client_ids_unsatisfied,vec__36046,map__36047,map__36047__$1,nmax_attempts,ms_base,ms_rand))
})();
var state__30013__auto__ = (function (){var statearr_36129 = f__30012__auto__.call(null);
(statearr_36129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto__);

return statearr_36129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto__,client_ids_unsatisfied,vec__36046,map__36047,map__36047__$1,nmax_attempts,ms_base,ms_rand))
);

return c__30011__auto__;
}
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$applyTo = (function (seq36041){
var G__36042 = cljs.core.first.call(null,seq36041);
var seq36041__$1 = cljs.core.next.call(null,seq36041);
var G__36043 = cljs.core.first.call(null,seq36041__$1);
var seq36041__$2 = cljs.core.next.call(null,seq36041__$1);
var G__36044 = cljs.core.first.call(null,seq36041__$2);
var seq36041__$3 = cljs.core.next.call(null,seq36041__$2);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36042,G__36043,G__36044,seq36041__$3);
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
var x__26543__auto__ = (((chsk == null))?null:chsk);
var m__26544__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,chsk);
} else {
var m__26544__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,chsk);
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
var x__26543__auto__ = (((chsk == null))?null:chsk);
var m__26544__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,chsk,ev,opts);
} else {
var m__26544__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,chsk,ev,opts);
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
var x__26543__auto__ = (((chsk == null))?null:chsk);
var m__26544__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,chsk);
} else {
var m__26544__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,chsk);
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
var x__26543__auto__ = (((chsk == null))?null:chsk);
var m__26544__auto__ = (taoensso.sente.chsk_disconnect_BANG_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,chsk);
} else {
var m__26544__auto____$1 = (taoensso.sente.chsk_disconnect_BANG_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,chsk);
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
var x__26543__auto__ = (((chsk == null))?null:chsk);
var m__26544__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,chsk);
} else {
var m__26544__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,chsk);
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
var args36153 = [];
var len__26950__auto___36156 = arguments.length;
var i__26951__auto___36157 = (0);
while(true){
if((i__26951__auto___36157 < len__26950__auto___36156)){
args36153.push((arguments[i__26951__auto___36157]));

var G__36158 = (i__26951__auto___36157 + (1));
i__26951__auto___36157 = G__36158;
continue;
} else {
}
break;
}

var G__36155 = args36153.length;
switch (G__36155) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36153.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init611284488537917249.clj",646,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__25880__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__25880__auto__){
return or__25880__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nneg-int? ?timeout-ms)))")].join('')));
}

if(cljs.core.truth_((function (){var or__25880__auto__ = (_QMARK_cb == null);
if(or__25880__auto__){
return or__25880__auto__;
} else {
var or__25880__auto____$1 = cljs.core.ifn_QMARK_.call(null,_QMARK_cb);
if(or__25880__auto____$1){
return or__25880__auto____$1;
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
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__36160,merge_state){
var map__36164 = p__36160;
var map__36164__$1 = ((((!((map__36164 == null)))?((((map__36164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36164):map__36164);
var chsk = map__36164__$1;
var chs = cljs.core.get.call(null,map__36164__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__36164__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__36166 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__36164,map__36164__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__25868__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__25868__auto__)){
var and__25868__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__25868__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__25868__auto____$1;
}
} else {
return and__25868__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__36164,map__36164__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__36166,(0),null);
var new_state = cljs.core.nth.call(null,vec__36166,(1),null);
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
var __x_36171 = _QMARK_cb;
try{if(cljs.core.truth_(taoensso.encore.chan_QMARK_.call(null,__x_36171))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36169){if((e36169 instanceof Error)){
var __t_36172 = e36169;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",__x_36171,__t_36172,null);
} else {
throw e36169;

}
}
taoensso.sente.assert_event.call(null,ev);

var vec__36170 = ev;
var ev_id = cljs.core.nth.call(null,vec__36170,(0),null);
var _ = cljs.core.nth.call(null,vec__36170,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__36170,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__36170,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init611284488537917249.clj",703,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null);

var buffered_evs = (function (){var __x = clj;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36178){if((e36178 instanceof Error)){
var __t = e36178;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",__x,__t,null);
} else {
throw e36178;

}
}})();
var seq__36179 = cljs.core.seq.call(null,buffered_evs);
var chunk__36180 = null;
var count__36181 = (0);
var i__36182 = (0);
while(true){
if((i__36182 < count__36181)){
var ev = cljs.core._nth.call(null,chunk__36180,i__36182);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__36183 = seq__36179;
var G__36184 = chunk__36180;
var G__36185 = count__36181;
var G__36186 = (i__36182 + (1));
seq__36179 = G__36183;
chunk__36180 = G__36184;
count__36181 = G__36185;
i__36182 = G__36186;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36179);
if(temp__4425__auto__){
var seq__36179__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36179__$1)){
var c__26691__auto__ = cljs.core.chunk_first.call(null,seq__36179__$1);
var G__36187 = cljs.core.chunk_rest.call(null,seq__36179__$1);
var G__36188 = c__26691__auto__;
var G__36189 = cljs.core.count.call(null,c__26691__auto__);
var G__36190 = (0);
seq__36179 = G__36187;
chunk__36180 = G__36188;
count__36181 = G__36189;
i__36182 = G__36190;
continue;
} else {
var ev = cljs.core.first.call(null,seq__36179__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__36191 = cljs.core.next.call(null,seq__36179__$1);
var G__36192 = null;
var G__36193 = (0);
var G__36194 = (0);
seq__36179 = G__36191;
chunk__36180 = G__36192;
count__36181 = G__36193;
i__36182 = G__36194;
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init611284488537917249.clj",713,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj], null);
});})(handshake_QMARK_))
,null)),null);

if(handshake_QMARK_){
var vec__36197 = clj;
var _ = cljs.core.nth.call(null,vec__36197,(0),null);
var vec__36198 = cljs.core.nth.call(null,vec__36197,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__36198,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__36198,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__36198,(2),null);
var handshake_ev = vec__36197;
if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init611284488537917249.clj",719,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36197,_,vec__36198,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__36197,_,vec__36198,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_))
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
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26502__auto__,k__26503__auto__){
var self__ = this;
var this__26502__auto____$1 = this;
return cljs.core._lookup.call(null,this__26502__auto____$1,k__26503__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26504__auto__,k36200,else__26505__auto__){
var self__ = this;
var this__26504__auto____$1 = this;
var G__36202 = (((k36200 instanceof cljs.core.Keyword))?k36200.fqn:null);
switch (G__36202) {
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
return cljs.core.get.call(null,self__.__extmap,k36200,else__26505__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26516__auto__,writer__26517__auto__,opts__26518__auto__){
var self__ = this;
var this__26516__auto____$1 = this;
var pr_pair__26519__auto__ = ((function (this__26516__auto____$1){
return (function (keyval__26520__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26517__auto__,cljs.core.pr_writer,""," ","",opts__26518__auto__,keyval__26520__auto__);
});})(this__26516__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26517__auto__,pr_pair__26519__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__26518__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36199){
var self__ = this;
var G__36199__$1 = this;
return (new cljs.core.RecordIter((0),G__36199__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26500__auto__){
var self__ = this;
var this__26500__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26496__auto__){
var self__ = this;
var this__26496__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26506__auto__){
var self__ = this;
var this__26506__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26497__auto__){
var self__ = this;
var this__26497__auto____$1 = this;
var h__26315__auto__ = self__.__hash;
if(!((h__26315__auto__ == null))){
return h__26315__auto__;
} else {
var h__26315__auto____$1 = cljs.core.hash_imap.call(null,this__26497__auto____$1);
self__.__hash = h__26315__auto____$1;

return h__26315__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26498__auto__,other__26499__auto__){
var self__ = this;
var this__26498__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25868__auto__ = other__26499__auto__;
if(cljs.core.truth_(and__25868__auto__)){
var and__25868__auto____$1 = (this__26498__auto____$1.constructor === other__26499__auto__.constructor);
if(and__25868__auto____$1){
return cljs.core.equiv_map.call(null,this__26498__auto____$1,other__26499__auto__);
} else {
return and__25868__auto____$1;
}
} else {
return and__25868__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26511__auto__,k__26512__auto__){
var self__ = this;
var this__26511__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__26512__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26511__auto____$1),self__.__meta),k__26512__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26512__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26509__auto__,k__26510__auto__,G__36199){
var self__ = this;
var this__26509__auto____$1 = this;
var pred__36203 = cljs.core.keyword_identical_QMARK_;
var expr__36204 = k__26510__auto__;
if(cljs.core.truth_(pred__36203.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__36204))){
return (new taoensso.sente.ChWebSocket(G__36199,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36203.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__36204))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__36199,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36203.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__36204))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__36199,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36203.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__36204))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__36199,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36203.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__36204))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__36199,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36203.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__36204))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__36199,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36203.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__36204))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__36199,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36203.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__36204))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,G__36199,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36203.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__36204))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,G__36199,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36203.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__36204))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,G__36199,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36203.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__36204))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__36199,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36203.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__36204))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__36199,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36203.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__36204))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,G__36199,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36203.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__36204))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,G__36199,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26510__auto__,G__36199),null));
}
}
}
}
}
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26514__auto__){
var self__ = this;
var this__26514__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26501__auto__,G__36199){
var self__ = this;
var this__26501__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,G__36199,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26507__auto__,entry__26508__auto__){
var self__ = this;
var this__26507__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26508__auto__)){
return cljs.core._assoc.call(null,this__26507__auto____$1,cljs.core._nth.call(null,entry__26508__auto__,(0)),cljs.core._nth.call(null,entry__26508__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26507__auto____$1,entry__26508__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__36206){
var self__ = this;
var map__36207 = p__36206;
var map__36207__$1 = ((((!((map__36207 == null)))?((((map__36207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36207):map__36207);
var opts = map__36207__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__36207__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__36207__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__36207__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init611284488537917249.clj",750,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__36207,map__36207__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__36207,map__36207__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4425__auto___36243 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___36243)){
var cb_uuid_36244 = temp__4425__auto___36243;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_36244], null),(function (){var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36209){if((e36209 instanceof Error)){
var __t = e36209;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e36209;

}
}})());

var temp__4425__auto___36245__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4425__auto___36245__$1)){
var timeout_ms_36246 = temp__4425__auto___36245__$1;
var c__30011__auto___36247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto___36247,timeout_ms_36246,temp__4425__auto___36245__$1,cb_uuid_36244,temp__4425__auto___36243,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36207,map__36207__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto___36247,timeout_ms_36246,temp__4425__auto___36245__$1,cb_uuid_36244,temp__4425__auto___36243,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36207,map__36207__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_36220){
var state_val_36221 = (state_36220[(1)]);
if((state_val_36221 === (1))){
var inst_36210 = cljs.core.async.timeout.call(null,timeout_ms_36246);
var state_36220__$1 = state_36220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36220__$1,(2),inst_36210);
} else {
if((state_val_36221 === (2))){
var inst_36213 = (state_36220[(7)]);
var inst_36212 = (state_36220[(2)]);
var inst_36213__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_36220__$1 = (function (){var statearr_36222 = state_36220;
(statearr_36222[(8)] = inst_36212);

(statearr_36222[(7)] = inst_36213__$1);

return statearr_36222;
})();
if(cljs.core.truth_(inst_36213__$1)){
var statearr_36223_36248 = state_36220__$1;
(statearr_36223_36248[(1)] = (3));

} else {
var statearr_36224_36249 = state_36220__$1;
(statearr_36224_36249[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (3))){
var inst_36213 = (state_36220[(7)]);
var inst_36215 = inst_36213.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_36220__$1 = state_36220;
var statearr_36225_36250 = state_36220__$1;
(statearr_36225_36250[(2)] = inst_36215);

(statearr_36225_36250[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (4))){
var state_36220__$1 = state_36220;
var statearr_36226_36251 = state_36220__$1;
(statearr_36226_36251[(2)] = null);

(statearr_36226_36251[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (5))){
var inst_36218 = (state_36220[(2)]);
var state_36220__$1 = state_36220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36220__$1,inst_36218);
} else {
return null;
}
}
}
}
}
});})(c__30011__auto___36247,timeout_ms_36246,temp__4425__auto___36245__$1,cb_uuid_36244,temp__4425__auto___36243,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36207,map__36207__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__29899__auto__,c__30011__auto___36247,timeout_ms_36246,temp__4425__auto___36245__$1,cb_uuid_36244,temp__4425__auto___36243,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36207,map__36207__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__29900__auto__ = null;
var taoensso$sente$state_machine__29900__auto____0 = (function (){
var statearr_36230 = [null,null,null,null,null,null,null,null,null];
(statearr_36230[(0)] = taoensso$sente$state_machine__29900__auto__);

(statearr_36230[(1)] = (1));

return statearr_36230;
});
var taoensso$sente$state_machine__29900__auto____1 = (function (state_36220){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_36220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e36231){if((e36231 instanceof Object)){
var ex__29903__auto__ = e36231;
var statearr_36232_36252 = state_36220;
(statearr_36232_36252[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36253 = state_36220;
state_36220 = G__36253;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
taoensso$sente$state_machine__29900__auto__ = function(state_36220){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29900__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29900__auto____1.call(this,state_36220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29900__auto____0;
taoensso$sente$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29900__auto____1;
return taoensso$sente$state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto___36247,timeout_ms_36246,temp__4425__auto___36245__$1,cb_uuid_36244,temp__4425__auto___36243,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36207,map__36207__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__30013__auto__ = (function (){var statearr_36233 = f__30012__auto__.call(null);
(statearr_36233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___36247);

return statearr_36233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto___36247,timeout_ms_36246,temp__4425__auto___36245__$1,cb_uuid_36244,temp__4425__auto___36243,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36207,map__36207__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e36234){if((e36234 instanceof Error)){
var e = e36234;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init611284488537917249.clj",769,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36207,map__36207__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__36207,map__36207__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

var temp__4425__auto___36254 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___36254)){
var cb_uuid_36255 = temp__4425__auto___36254;
var cb_fn_STAR__36256 = (function (){var or__25880__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_36255);
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36235){if((e36235 instanceof Error)){
var __t = e36235;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e36235;

}
}}
})();
cb_fn_STAR__36256.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e36234;

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

var temp__4425__auto___36257 = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4425__auto___36257)){
var s_36258 = temp__4425__auto___36257;
s_36258.close((3000),"SENTE_RECONNECT");
} else {
}

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4425__auto__ = (function (){var or__25880__auto__ = taoensso.encore.oget.call(null,window,"WebSocket");
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
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

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init611284488537917249.clj",800,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
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
}catch (e36239){if((e36239 instanceof Error)){
var e = e36239;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init611284488537917249.clj",811,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_fn,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);

return null;
} else {
throw e36239;

}
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__36240 = _QMARK_socket;
(G__36240["onerror"] = ((function (G__36240,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init611284488537917249.clj",820,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__36240,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",ws_ev], null);
});})(G__36240,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
});})(G__36240,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__36240["onmessage"] = ((function (G__36240,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__36241 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__36241,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__36241,(1),null);
var or__25880__auto__ = (function (){var and__25868__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__25868__auto__)){
return cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));
} else {
return and__25868__auto__;
}
})();
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
var temp__4423__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4423__auto__)){
var cb_uuid = temp__4423__auto__;
var temp__4423__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4423__auto____$1)){
var cb_fn = temp__4423__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init611284488537917249.clj",838,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4423__auto____$1,cb_uuid,temp__4423__auto__,or__25880__auto__,ppstr,vec__36241,clj,_QMARK_cb_uuid,G__36240,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4423__auto____$1,cb_uuid,temp__4423__auto__,or__25880__auto__,ppstr,vec__36241,clj,_QMARK_cb_uuid,G__36240,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__36240,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__36240["onopen"] = ((function (G__36240,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__36240,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__36240,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__36240,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__36240["onclose"] = ((function (G__36240,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);
});})(G__36240,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4425__auto__,chsk__$1))
);

return G__36240;
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

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__26536__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__26536__auto__,writer__26537__auto__){
return cljs.core._write.call(null,writer__26537__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__36201){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__36201),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__36201),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__36201),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__36201),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__36201),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__36201),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__36201),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__36201),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__36201),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__36201),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__36201),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__36201),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__36201),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__36201),null,cljs.core.dissoc.call(null,G__36201,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)),null));
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
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26502__auto__,k__26503__auto__){
var self__ = this;
var this__26502__auto____$1 = this;
return cljs.core._lookup.call(null,this__26502__auto____$1,k__26503__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26504__auto__,k36260,else__26505__auto__){
var self__ = this;
var this__26504__auto____$1 = this;
var G__36262 = (((k36260 instanceof cljs.core.Keyword))?k36260.fqn:null);
switch (G__36262) {
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
return cljs.core.get.call(null,self__.__extmap,k36260,else__26505__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26516__auto__,writer__26517__auto__,opts__26518__auto__){
var self__ = this;
var this__26516__auto____$1 = this;
var pr_pair__26519__auto__ = ((function (this__26516__auto____$1){
return (function (keyval__26520__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26517__auto__,cljs.core.pr_writer,""," ","",opts__26518__auto__,keyval__26520__auto__);
});})(this__26516__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26517__auto__,pr_pair__26519__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__26518__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36259){
var self__ = this;
var G__36259__$1 = this;
return (new cljs.core.RecordIter((0),G__36259__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26500__auto__){
var self__ = this;
var this__26500__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26496__auto__){
var self__ = this;
var this__26496__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26506__auto__){
var self__ = this;
var this__26506__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26497__auto__){
var self__ = this;
var this__26497__auto____$1 = this;
var h__26315__auto__ = self__.__hash;
if(!((h__26315__auto__ == null))){
return h__26315__auto__;
} else {
var h__26315__auto____$1 = cljs.core.hash_imap.call(null,this__26497__auto____$1);
self__.__hash = h__26315__auto____$1;

return h__26315__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26498__auto__,other__26499__auto__){
var self__ = this;
var this__26498__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25868__auto__ = other__26499__auto__;
if(cljs.core.truth_(and__25868__auto__)){
var and__25868__auto____$1 = (this__26498__auto____$1.constructor === other__26499__auto__.constructor);
if(and__25868__auto____$1){
return cljs.core.equiv_map.call(null,this__26498__auto____$1,other__26499__auto__);
} else {
return and__25868__auto____$1;
}
} else {
return and__25868__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26511__auto__,k__26512__auto__){
var self__ = this;
var this__26511__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__26512__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26511__auto____$1),self__.__meta),k__26512__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26512__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26509__auto__,k__26510__auto__,G__36259){
var self__ = this;
var this__26509__auto____$1 = this;
var pred__36263 = cljs.core.keyword_identical_QMARK_;
var expr__36264 = k__26510__auto__;
if(cljs.core.truth_(pred__36263.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__36264))){
return (new taoensso.sente.ChAjaxSocket(G__36259,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36263.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__36264))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__36259,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36263.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__36264))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__36259,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36263.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__36264))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__36259,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36263.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__36264))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__36259,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36263.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__36264))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__36259,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36263.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__36264))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__36259,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36263.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__36264))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,G__36259,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36263.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__36264))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,G__36259,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36263.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__36264))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__36259,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36263.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__36264))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,G__36259,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26510__auto__,G__36259),null));
}
}
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26514__auto__){
var self__ = this;
var this__26514__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26501__auto__,G__36259){
var self__ = this;
var this__26501__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,G__36259,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26507__auto__,entry__26508__auto__){
var self__ = this;
var this__26507__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26508__auto__)){
return cljs.core._assoc.call(null,this__26507__auto____$1,cljs.core._nth.call(null,entry__26508__auto__,(0)),cljs.core._nth.call(null,entry__26508__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26507__auto____$1,entry__26508__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__36266){
var self__ = this;
var map__36267 = p__36266;
var map__36267__$1 = ((((!((map__36267 == null)))?((((map__36267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36267):map__36267);
var opts = map__36267__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__36267__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__36267__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__36267__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init611284488537917249.clj",879,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__36267,map__36267__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__36267,map__36267__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
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
})()], null)),((function (csrf_token,_QMARK_cb_fn,chsk__$1,map__36267,map__36267__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__36269){
var map__36273 = p__36269;
var map__36273__$1 = ((((!((map__36273 == null)))?((((map__36273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36273):map__36273);
var _QMARK_error = cljs.core.get.call(null,map__36273__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__36273__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
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
var vec__36275 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__36275,(0),null);
var _ = cljs.core.nth.call(null,vec__36275,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init611284488537917249.clj",919,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__36275,resp_clj,_,map__36273,map__36273__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__36267,map__36267__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__36275,resp_clj,_,map__36273,map__36273__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__36267,map__36267__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(csrf_token,_QMARK_cb_fn,chsk__$1,map__36267,map__36267__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
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

var temp__4425__auto___36291 = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4425__auto___36291)){
var x_36292 = temp__4425__auto___36291;
x_36292.abort();
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init611284488537917249.clj",940,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(retry_id,chsk__$1))
,null)),null);

var retry_fn = ((function (retry_id,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init611284488537917249.clj",946,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
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
return (function taoensso$sente$poll_fn_$_ajax_cb(p__36283){
var map__36287 = p__36283;
var map__36287__$1 = ((((!((map__36287 == null)))?((((map__36287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36287):map__36287);
var _QMARK_error = cljs.core.get.call(null,map__36287__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__36287__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
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
var vec__36289 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__36289,(0),null);
var _ = cljs.core.nth.call(null,vec__36289,(1),null);
var or__25880__auto___36293 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__25880__auto___36293)){
} else {
var buffered_evs_36294 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_36294);

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

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__26536__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__26536__auto__,writer__26537__auto__){
return cljs.core._write.call(null,writer__26537__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__36261){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__36261),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__36261),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__36261),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__36261),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__36261),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__36261),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__36261),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__36261),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__36261),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__36261),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__36261),null,cljs.core.dissoc.call(null,G__36261,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)),null));
});

taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__36296 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36296) {
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
var args__26957__auto__ = [];
var len__26950__auto___36312 = arguments.length;
var i__26951__auto___36313 = (0);
while(true){
if((i__26951__auto___36313 < len__26950__auto___36312)){
args__26957__auto__.push((arguments[i__26951__auto___36313]));

var G__36314 = (i__26951__auto___36313 + (1));
i__26951__auto___36313 = G__36314;
continue;
} else {
}
break;
}

var argseq__26958__auto__ = ((((1) < args__26957__auto__.length))?(new cljs.core.IndexedSeq(args__26957__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26958__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__36301){
var vec__36302 = p__36301;
var map__36303 = cljs.core.nth.call(null,vec__36302,(0),null);
var map__36303__$1 = ((((!((map__36303 == null)))?((((map__36303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36303):map__36303);
var opts = map__36303__$1;
var ajax_opts = cljs.core.get.call(null,map__36303__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__36303__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__36303__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var client_id = cljs.core.get.call(null,map__36303__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__25880__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__36303__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__36303__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__36303__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__36303__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__36303__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__36303__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__36303__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__36302,(1),null);
if(cljs.core.truth_((function (){var __x = type;
try{if(((function (__x,vec__36302,map__36303,map__36303__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (__x__$1){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),__x__$1);
});})(__x,vec__36302,map__36303,map__36303__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36305){if((e36305 instanceof Error)){
var __t = e36305;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",__x,__t,null);
} else {
throw e36305;

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
}catch (e36306){if((e36306 instanceof Error)){
var __t = e36306;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",__x,__t,null);
} else {
throw e36306;

}
}})())){
} else {
throw (new Error("Assert failed: (have? enc/nblank-str? client-id)"));
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init611284488537917249.clj",1055,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36302,map__36303,map__36303__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__36302,map__36303,map__36303__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/tmp/form-init611284488537917249.clj",1057,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__36302,map__36303,map__36303__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__36302,map__36303,map__36303__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var win_location = taoensso.encore.get_window_location.call(null);
var win_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_location);
var host__$1 = (function (){var or__25880__auto__ = host;
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var path__$1 = (function (){var or__25880__auto__ = path;
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__36302,map__36303,map__36303__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__25880__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__25880__auto__){
return or__25880__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__36302,map__36303,map__36303__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36302,map__36303,map__36303__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36302,map__36303,map__36303__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),(function (){var _LT_server_ch = new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs);
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36302,map__36303,map__36303__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36302,map__36303,map__36303__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
} else {
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36302,map__36303,map__36303__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__36307 = ev;
var id = cljs.core.nth.call(null,vec__36307,(0),null);
var _QMARK_data = cljs.core.nth.call(null,vec__36307,(1),null);
var __x_36315 = (function (){try{return cljs.core.namespace.call(null,id);
}catch (e36308){if((e36308 instanceof Error)){
var __t = e36308;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__36298#] (not= p1__36298# \"chsk\")) (namespace id))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e36308;

}
}})();
try{if(((function (__x_36315,vec__36307,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36302,map__36303,map__36303__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (p1__36298_SHARP_){
return cljs.core.not_EQ_.call(null,p1__36298_SHARP_,"chsk");
});})(__x_36315,vec__36307,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36302,map__36303,map__36303__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x_36315)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e36309){if((e36309 instanceof Error)){
var __t_36316 = e36309;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__36298#] (not= p1__36298# \"chsk\")) (namespace id))",__x_36315,__t_36316,null);
} else {
throw e36309;

}
}
return ev;
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__36302,map__36303,map__36303__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
}
})()], null));
var chsk = (function (){var or__25880__auto__ = (function (){var and__25868__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__25868__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,packer__$1,private_chs,params,cljs.core.atom.call(null,(0)),backoff_ms_fn,cljs.core.atom.call(null,null),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ws","ws",86841443));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
}
})(),cljs.core.atom.call(null,"pending"),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__25868__auto__;
}
})();
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
var and__25868__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__25868__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"state_","state_",957667102)],[cljs.core.atom.call(null,null),client_id,packer__$1,private_chs,params,backoff_ms_fn,(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
}
})(),cljs.core.atom.call(null,"pending"),ajax_opts,lp_timeout_ms,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__25868__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str("chsk")].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__36302,map__36303,map__36303__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__36311 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__36311,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__36311,(1),null);
var ev__$1 = vec__36311;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__36302,map__36303,map__36303__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq36299){
var G__36300 = cljs.core.first.call(null,seq36299);
var seq36299__$1 = cljs.core.next.call(null,seq36299);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36300,seq36299__$1);
});
taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__36523 = opts;
var map__36523__$1 = ((((!((map__36523 == null)))?((((map__36523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36523):map__36523);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36523__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36523__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__30011__auto___36729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto___36729,map__36523,map__36523__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto___36729,map__36523,map__36523__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (state_36654){
var state_val_36655 = (state_36654[(1)]);
if((state_val_36655 === (7))){
var inst_36650 = (state_36654[(2)]);
var state_36654__$1 = state_36654;
var statearr_36656_36730 = state_36654__$1;
(statearr_36656_36730[(2)] = inst_36650);

(statearr_36656_36730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (20))){
var inst_36532 = (state_36654[(7)]);
var inst_36533 = (state_36654[(8)]);
var inst_36534 = (state_36654[(9)]);
var inst_36531 = (state_36654[(10)]);
var inst_36559 = (state_36654[(11)]);
var inst_36558 = (state_36654[(12)]);
var inst_36569 = (function (){var vec__36526 = inst_36531;
var v = inst_36532;
var p = inst_36533;
var stop_QMARK_ = inst_36534;
var map__36537 = inst_36558;
var event_msg = inst_36558;
var event = inst_36559;
return ((function (vec__36526,v,p,stop_QMARK_,map__36537,event_msg,event,inst_36532,inst_36533,inst_36534,inst_36531,inst_36559,inst_36558,state_val_36655,c__30011__auto___36729,map__36523,map__36523__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__36526,v,p,stop_QMARK_,map__36537,event_msg,event,inst_36532,inst_36533,inst_36534,inst_36531,inst_36559,inst_36558,state_val_36655,c__30011__auto___36729,map__36523,map__36523__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_36570 = (new cljs.core.Delay(inst_36569,null));
var inst_36571 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/tmp/form-init611284488537917249.clj",1176,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_36570,null);
var state_36654__$1 = state_36654;
var statearr_36657_36731 = state_36654__$1;
(statearr_36657_36731[(2)] = inst_36571);

(statearr_36657_36731[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (27))){
var inst_36558 = (state_36654[(12)]);
var inst_36576 = (state_36654[(2)]);
var inst_36577 = "(server-event-msg? event-msg)";
var inst_36578 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_36577,inst_36558,inst_36576,null);
var state_36654__$1 = state_36654;
var statearr_36658_36732 = state_36654__$1;
(statearr_36658_36732[(2)] = inst_36578);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36654__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (1))){
var state_36654__$1 = state_36654;
var statearr_36659_36733 = state_36654__$1;
(statearr_36659_36733[(2)] = null);

(statearr_36659_36733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (24))){
var state_36654__$1 = state_36654;
var statearr_36660_36734 = state_36654__$1;
(statearr_36660_36734[(2)] = null);

(statearr_36660_36734[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (39))){
var state_36654__$1 = state_36654;
var statearr_36661_36735 = state_36654__$1;
(statearr_36661_36735[(2)] = null);

(statearr_36661_36735[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (46))){
var inst_36623 = (state_36654[(13)]);
var inst_36631 = (state_36654[(2)]);
var inst_36632 = [inst_36631,null];
var inst_36633 = (new cljs.core.PersistentVector(null,2,(5),inst_36623,inst_36632,null));
var state_36654__$1 = state_36654;
var statearr_36662_36736 = state_36654__$1;
(statearr_36662_36736[(2)] = inst_36633);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36654__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (4))){
var inst_36533 = (state_36654[(8)]);
var inst_36534 = (state_36654[(9)]);
var inst_36531 = (state_36654[(10)]);
var inst_36531__$1 = (state_36654[(2)]);
var inst_36532 = cljs.core.nth.call(null,inst_36531__$1,(0),null);
var inst_36533__$1 = cljs.core.nth.call(null,inst_36531__$1,(1),null);
var inst_36534__$1 = taoensso.encore.kw_identical_QMARK_.call(null,inst_36533__$1,ch_ctrl);
var state_36654__$1 = (function (){var statearr_36663 = state_36654;
(statearr_36663[(7)] = inst_36532);

(statearr_36663[(8)] = inst_36533__$1);

(statearr_36663[(9)] = inst_36534__$1);

(statearr_36663[(10)] = inst_36531__$1);

return statearr_36663;
})();
if(cljs.core.truth_(inst_36534__$1)){
var statearr_36664_36737 = state_36654__$1;
(statearr_36664_36737[(1)] = (5));

} else {
var statearr_36665_36738 = state_36654__$1;
(statearr_36665_36738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (15))){
var inst_36532 = (state_36654[(7)]);
var state_36654__$1 = state_36654;
var statearr_36666_36739 = state_36654__$1;
(statearr_36666_36739[(2)] = inst_36532);

(statearr_36666_36739[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (48))){
var state_36654__$1 = state_36654;
var statearr_36667_36740 = state_36654__$1;
(statearr_36667_36740[(2)] = null);

(statearr_36667_36740[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (21))){
var state_36654__$1 = state_36654;
var statearr_36668_36741 = state_36654__$1;
(statearr_36668_36741[(2)] = null);

(statearr_36668_36741[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (31))){
var inst_36587 = (state_36654[(2)]);
var state_36654__$1 = state_36654;
var statearr_36669_36742 = state_36654__$1;
(statearr_36669_36742[(2)] = inst_36587);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36654__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (32))){
var inst_36604 = (state_36654[(2)]);
var state_36654__$1 = state_36654;
var statearr_36670_36743 = state_36654__$1;
(statearr_36670_36743[(2)] = inst_36604);

(statearr_36670_36743[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (40))){
var inst_36647 = (state_36654[(2)]);
var state_36654__$1 = (function (){var statearr_36671 = state_36654;
(statearr_36671[(14)] = inst_36647);

return statearr_36671;
})();
var statearr_36672_36744 = state_36654__$1;
(statearr_36672_36744[(2)] = null);

(statearr_36672_36744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (33))){
var inst_36558 = (state_36654[(12)]);
var inst_36591 = (state_36654[(2)]);
var inst_36592 = "(client-event-msg? event-msg)";
var inst_36593 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_36592,inst_36558,inst_36591,null);
var state_36654__$1 = state_36654;
var statearr_36673_36745 = state_36654__$1;
(statearr_36673_36745[(2)] = inst_36593);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36654__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (13))){
var inst_36550 = (state_36654[(2)]);
var state_36654__$1 = state_36654;
var statearr_36674_36746 = state_36654__$1;
(statearr_36674_36746[(2)] = inst_36550);

(statearr_36674_36746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (22))){
var inst_36574 = (state_36654[(2)]);
var state_36654__$1 = (function (){var statearr_36675 = state_36654;
(statearr_36675[(15)] = inst_36574);

return statearr_36675;
})();
if(cljs.core.truth_(server_QMARK_)){
var statearr_36676_36747 = state_36654__$1;
(statearr_36676_36747[(1)] = (23));

} else {
var statearr_36677_36748 = state_36654__$1;
(statearr_36677_36748[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (36))){
var inst_36600 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_36654__$1 = state_36654;
var statearr_36678_36749 = state_36654__$1;
(statearr_36678_36749[(2)] = inst_36600);

(statearr_36678_36749[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (41))){
var inst_36635 = (state_36654[(16)]);
var inst_36637 = (state_36654[(17)]);
var inst_36635__$1 = (state_36654[(2)]);
var inst_36636 = cljs.core.nth.call(null,inst_36635__$1,(0),null);
var inst_36637__$1 = cljs.core.nth.call(null,inst_36635__$1,(1),null);
var state_36654__$1 = (function (){var statearr_36679 = state_36654;
(statearr_36679[(18)] = inst_36636);

(statearr_36679[(16)] = inst_36635__$1);

(statearr_36679[(17)] = inst_36637__$1);

return statearr_36679;
})();
if(cljs.core.truth_(inst_36637__$1)){
var statearr_36680_36750 = state_36654__$1;
(statearr_36680_36750[(1)] = (47));

} else {
var statearr_36681_36751 = state_36654__$1;
(statearr_36681_36751[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (43))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36654,(42),Error,null,(41));
var inst_36623 = cljs.core.PersistentVector.EMPTY_NODE;
var state_36654__$1 = (function (){var statearr_36682 = state_36654;
(statearr_36682[(13)] = inst_36623);

return statearr_36682;
})();
if(cljs.core.truth_(error_handler)){
var statearr_36683_36752 = state_36654__$1;
(statearr_36683_36752[(1)] = (44));

} else {
var statearr_36684_36753 = state_36654__$1;
(statearr_36684_36753[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (29))){
var inst_36558 = (state_36654[(12)]);
var state_36654__$1 = state_36654;
var statearr_36685_36754 = state_36654__$1;
(statearr_36685_36754[(2)] = inst_36558);

(statearr_36685_36754[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (44))){
var inst_36613 = (state_36654[(19)]);
var inst_36558 = (state_36654[(12)]);
var inst_36625 = error_handler.call(null,inst_36613,inst_36558);
var state_36654__$1 = state_36654;
var statearr_36686_36755 = state_36654__$1;
(statearr_36686_36755[(2)] = inst_36625);

(statearr_36686_36755[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (6))){
var inst_36532 = (state_36654[(7)]);
var inst_36540 = (inst_36532 == null);
var inst_36541 = cljs.core.not.call(null,inst_36540);
var state_36654__$1 = state_36654;
if(inst_36541){
var statearr_36687_36756 = state_36654__$1;
(statearr_36687_36756[(1)] = (8));

} else {
var statearr_36688_36757 = state_36654__$1;
(statearr_36688_36757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (28))){
var inst_36558 = (state_36654[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36654,(27),Error,null,(26));
var inst_36582 = taoensso.sente.server_event_msg_QMARK_.call(null,inst_36558);
var state_36654__$1 = state_36654;
if(cljs.core.truth_(inst_36582)){
var statearr_36689_36758 = state_36654__$1;
(statearr_36689_36758[(1)] = (29));

} else {
var statearr_36690_36759 = state_36654__$1;
(statearr_36690_36759[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (25))){
var inst_36567 = (state_36654[(20)]);
var inst_36606 = (state_36654[(2)]);
var inst_36607 = event_msg_handler.call(null,inst_36606);
var inst_36608 = [inst_36607,null];
var inst_36609 = (new cljs.core.PersistentVector(null,2,(5),inst_36567,inst_36608,null));
var state_36654__$1 = state_36654;
var statearr_36691_36760 = state_36654__$1;
(statearr_36691_36760[(2)] = inst_36609);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36654__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (34))){
var inst_36558 = (state_36654[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36654,(33),Error,null,(32));
var inst_36597 = taoensso.sente.client_event_msg_QMARK_.call(null,inst_36558);
var state_36654__$1 = state_36654;
if(cljs.core.truth_(inst_36597)){
var statearr_36692_36761 = state_36654__$1;
(statearr_36692_36761[(1)] = (35));

} else {
var statearr_36693_36762 = state_36654__$1;
(statearr_36693_36762[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (17))){
var inst_36611 = (state_36654[(21)]);
var inst_36613 = (state_36654[(19)]);
var inst_36611__$1 = (state_36654[(2)]);
var inst_36612 = cljs.core.nth.call(null,inst_36611__$1,(0),null);
var inst_36613__$1 = cljs.core.nth.call(null,inst_36611__$1,(1),null);
var state_36654__$1 = (function (){var statearr_36694 = state_36654;
(statearr_36694[(21)] = inst_36611__$1);

(statearr_36694[(22)] = inst_36612);

(statearr_36694[(19)] = inst_36613__$1);

return statearr_36694;
})();
if(cljs.core.truth_(inst_36613__$1)){
var statearr_36695_36763 = state_36654__$1;
(statearr_36695_36763[(1)] = (38));

} else {
var statearr_36696_36764 = state_36654__$1;
(statearr_36696_36764[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (3))){
var inst_36652 = (state_36654[(2)]);
var state_36654__$1 = state_36654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36654__$1,inst_36652);
} else {
if((state_val_36655 === (12))){
var state_36654__$1 = state_36654;
var statearr_36697_36765 = state_36654__$1;
(statearr_36697_36765[(2)] = false);

(statearr_36697_36765[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (2))){
var inst_36527 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36528 = [ch_recv,ch_ctrl];
var inst_36529 = (new cljs.core.PersistentVector(null,2,(5),inst_36527,inst_36528,null));
var state_36654__$1 = state_36654;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36654__$1,(4),inst_36529);
} else {
if((state_val_36655 === (23))){
var state_36654__$1 = state_36654;
var statearr_36698_36766 = state_36654__$1;
(statearr_36698_36766[(2)] = null);

(statearr_36698_36766[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (47))){
var inst_36532 = (state_36654[(7)]);
var inst_36611 = (state_36654[(21)]);
var inst_36533 = (state_36654[(8)]);
var inst_36636 = (state_36654[(18)]);
var inst_36635 = (state_36654[(16)]);
var inst_36534 = (state_36654[(9)]);
var inst_36531 = (state_36654[(10)]);
var inst_36613 = (state_36654[(19)]);
var inst_36559 = (state_36654[(11)]);
var inst_36637 = (state_36654[(17)]);
var inst_36558 = (state_36654[(12)]);
var inst_36639 = (function (){var vec__36538 = inst_36611;
var vec__36526 = inst_36531;
var vec__36615 = inst_36635;
var p = inst_36533;
var _QMARK_error = inst_36613;
var temp__4425__auto__ = inst_36637;
var v = inst_36532;
var _ = inst_36636;
var e2 = inst_36637;
var map__36537 = inst_36558;
var _QMARK_error2 = inst_36637;
var event_msg = inst_36558;
var e = inst_36613;
var event = inst_36559;
var stop_QMARK_ = inst_36534;
return ((function (vec__36538,vec__36526,vec__36615,p,_QMARK_error,temp__4425__auto__,v,_,e2,map__36537,_QMARK_error2,event_msg,e,event,stop_QMARK_,inst_36532,inst_36611,inst_36533,inst_36636,inst_36635,inst_36534,inst_36531,inst_36613,inst_36559,inst_36637,inst_36558,state_val_36655,c__30011__auto___36729,map__36523,map__36523__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});
;})(vec__36538,vec__36526,vec__36615,p,_QMARK_error,temp__4425__auto__,v,_,e2,map__36537,_QMARK_error2,event_msg,e,event,stop_QMARK_,inst_36532,inst_36611,inst_36533,inst_36636,inst_36635,inst_36534,inst_36531,inst_36613,inst_36559,inst_36637,inst_36558,state_val_36655,c__30011__auto___36729,map__36523,map__36523__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_36640 = (new cljs.core.Delay(inst_36639,null));
var inst_36641 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init611284488537917249.clj",1189,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_36640,null);
var state_36654__$1 = state_36654;
var statearr_36699_36767 = state_36654__$1;
(statearr_36699_36767[(2)] = inst_36641);

(statearr_36699_36767[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (35))){
var inst_36558 = (state_36654[(12)]);
var state_36654__$1 = state_36654;
var statearr_36700_36768 = state_36654__$1;
(statearr_36700_36768[(2)] = inst_36558);

(statearr_36700_36768[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36654,(18),Error,null,(17));
var inst_36567 = cljs.core.PersistentVector.EMPTY_NODE;
var state_36654__$1 = (function (){var statearr_36701 = state_36654;
(statearr_36701[(20)] = inst_36567);

return statearr_36701;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_36702_36769 = state_36654__$1;
(statearr_36702_36769[(1)] = (20));

} else {
var statearr_36703_36770 = state_36654__$1;
(statearr_36703_36770[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (11))){
var state_36654__$1 = state_36654;
var statearr_36704_36771 = state_36654__$1;
(statearr_36704_36771[(2)] = true);

(statearr_36704_36771[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (9))){
var state_36654__$1 = state_36654;
var statearr_36705_36772 = state_36654__$1;
(statearr_36705_36772[(2)] = false);

(statearr_36705_36772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (5))){
var state_36654__$1 = state_36654;
var statearr_36706_36773 = state_36654__$1;
(statearr_36706_36773[(2)] = null);

(statearr_36706_36773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (14))){
var inst_36532 = (state_36654[(7)]);
var inst_36555 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36532);
var state_36654__$1 = state_36654;
var statearr_36707_36774 = state_36654__$1;
(statearr_36707_36774[(2)] = inst_36555);

(statearr_36707_36774[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (45))){
var inst_36532 = (state_36654[(7)]);
var inst_36611 = (state_36654[(21)]);
var inst_36533 = (state_36654[(8)]);
var inst_36534 = (state_36654[(9)]);
var inst_36531 = (state_36654[(10)]);
var inst_36612 = (state_36654[(22)]);
var inst_36613 = (state_36654[(19)]);
var inst_36559 = (state_36654[(11)]);
var inst_36558 = (state_36654[(12)]);
var inst_36627 = (function (){var vec__36538 = inst_36611;
var vec__36526 = inst_36531;
var p = inst_36533;
var _QMARK_error = inst_36613;
var temp__4425__auto__ = inst_36613;
var v = inst_36532;
var temp__4423__auto__ = error_handler;
var _ = inst_36612;
var map__36537 = inst_36558;
var event_msg = inst_36558;
var e = inst_36613;
var event = inst_36559;
var stop_QMARK_ = inst_36534;
return ((function (vec__36538,vec__36526,p,_QMARK_error,temp__4425__auto__,v,temp__4423__auto__,_,map__36537,event_msg,e,event,stop_QMARK_,inst_36532,inst_36611,inst_36533,inst_36534,inst_36531,inst_36612,inst_36613,inst_36559,inst_36558,state_val_36655,c__30011__auto___36729,map__36523,map__36523__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router `event-msg-handler` error: %s",event], null);
});
;})(vec__36538,vec__36526,p,_QMARK_error,temp__4425__auto__,v,temp__4423__auto__,_,map__36537,event_msg,e,event,stop_QMARK_,inst_36532,inst_36611,inst_36533,inst_36534,inst_36531,inst_36612,inst_36613,inst_36559,inst_36558,state_val_36655,c__30011__auto___36729,map__36523,map__36523__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_36628 = (new cljs.core.Delay(inst_36627,null));
var inst_36629 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/tmp/form-init611284488537917249.clj",1187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_36628,null);
var state_36654__$1 = state_36654;
var statearr_36708_36775 = state_36654__$1;
(statearr_36708_36775[(2)] = inst_36629);

(statearr_36708_36775[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (26))){
var inst_36589 = (state_36654[(2)]);
var state_36654__$1 = state_36654;
var statearr_36709_36776 = state_36654__$1;
(statearr_36709_36776[(2)] = inst_36589);

(statearr_36709_36776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (16))){
var inst_36558 = (state_36654[(12)]);
var inst_36558__$1 = (state_36654[(2)]);
var inst_36559 = cljs.core.get.call(null,inst_36558__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_36654__$1 = (function (){var statearr_36710 = state_36654;
(statearr_36710[(11)] = inst_36559);

(statearr_36710[(12)] = inst_36558__$1);

return statearr_36710;
})();
var statearr_36711_36777 = state_36654__$1;
(statearr_36711_36777[(2)] = null);

(statearr_36711_36777[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (38))){
var state_36654__$1 = state_36654;
var statearr_36712_36778 = state_36654__$1;
(statearr_36712_36778[(2)] = null);

(statearr_36712_36778[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (30))){
var inst_36585 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_36654__$1 = state_36654;
var statearr_36713_36779 = state_36654__$1;
(statearr_36713_36779[(2)] = inst_36585);

(statearr_36713_36779[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (10))){
var inst_36553 = (state_36654[(2)]);
var state_36654__$1 = state_36654;
if(cljs.core.truth_(inst_36553)){
var statearr_36714_36780 = state_36654__$1;
(statearr_36714_36780[(1)] = (14));

} else {
var statearr_36715_36781 = state_36654__$1;
(statearr_36715_36781[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (18))){
var inst_36560 = (state_36654[(2)]);
var inst_36561 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36562 = [null,inst_36560];
var inst_36563 = (new cljs.core.PersistentVector(null,2,(5),inst_36561,inst_36562,null));
var state_36654__$1 = state_36654;
var statearr_36716_36782 = state_36654__$1;
(statearr_36716_36782[(2)] = inst_36563);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36654__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (42))){
var inst_36616 = (state_36654[(2)]);
var inst_36617 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36618 = [null,inst_36616];
var inst_36619 = (new cljs.core.PersistentVector(null,2,(5),inst_36617,inst_36618,null));
var state_36654__$1 = state_36654;
var statearr_36717_36783 = state_36654__$1;
(statearr_36717_36783[(2)] = inst_36619);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36654__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (37))){
var inst_36602 = (state_36654[(2)]);
var state_36654__$1 = state_36654;
var statearr_36718_36784 = state_36654__$1;
(statearr_36718_36784[(2)] = inst_36602);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36654__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (8))){
var inst_36532 = (state_36654[(7)]);
var inst_36543 = inst_36532.cljs$lang$protocol_mask$partition0$;
var inst_36544 = (inst_36543 & (64));
var inst_36545 = inst_36532.cljs$core$ISeq$;
var inst_36546 = (inst_36544) || (inst_36545);
var state_36654__$1 = state_36654;
if(cljs.core.truth_(inst_36546)){
var statearr_36719_36785 = state_36654__$1;
(statearr_36719_36785[(1)] = (11));

} else {
var statearr_36720_36786 = state_36654__$1;
(statearr_36720_36786[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36655 === (49))){
var inst_36644 = (state_36654[(2)]);
var state_36654__$1 = state_36654;
var statearr_36721_36787 = state_36654__$1;
(statearr_36721_36787[(2)] = inst_36644);

(statearr_36721_36787[(1)] = (40));


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
});})(c__30011__auto___36729,map__36523,map__36523__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
;
return ((function (switch__29899__auto__,c__30011__auto___36729,map__36523,map__36523__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29900__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29900__auto____0 = (function (){
var statearr_36725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36725[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29900__auto__);

(statearr_36725[(1)] = (1));

return statearr_36725;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29900__auto____1 = (function (state_36654){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_36654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e36726){if((e36726 instanceof Object)){
var ex__29903__auto__ = e36726;
var statearr_36727_36788 = state_36654;
(statearr_36727_36788[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36789 = state_36654;
state_36654 = G__36789;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29900__auto__ = function(state_36654){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29900__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29900__auto____1.call(this,state_36654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29900__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29900__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto___36729,map__36523,map__36523__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var state__30013__auto__ = (function (){var statearr_36728 = f__30012__auto__.call(null);
(statearr_36728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___36729);

return statearr_36728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto___36729,map__36523,map__36523__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
);


return ((function (map__36523,map__36523__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__36523,map__36523__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
});
/**
 * Creates a go-loop to call `(event-msg-handler <server-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__26957__auto__ = [];
var len__26950__auto___36797 = arguments.length;
var i__26951__auto___36798 = (0);
while(true){
if((i__26951__auto___36798 < len__26950__auto___36797)){
args__26957__auto__.push((arguments[i__26951__auto___36798]));

var G__36799 = (i__26951__auto___36798 + (1));
i__26951__auto___36798 = G__36799;
continue;
} else {
}
break;
}

var argseq__26958__auto__ = ((((2) < args__26957__auto__.length))?(new cljs.core.IndexedSeq(args__26957__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26958__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__36793){
var vec__36794 = p__36793;
var map__36795 = cljs.core.nth.call(null,vec__36794,(0),null);
var map__36795__$1 = ((((!((map__36795 == null)))?((((map__36795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36795):map__36795);
var opts = map__36795__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36795__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36795__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq36790){
var G__36791 = cljs.core.first.call(null,seq36790);
var seq36790__$1 = cljs.core.next.call(null,seq36790);
var G__36792 = cljs.core.first.call(null,seq36790__$1);
var seq36790__$2 = cljs.core.next.call(null,seq36790__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36791,G__36792,seq36790__$2);
});
/**
 * Creates a go-loop to call `(event-msg-handler <client-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__26957__auto__ = [];
var len__26950__auto___36807 = arguments.length;
var i__26951__auto___36808 = (0);
while(true){
if((i__26951__auto___36808 < len__26950__auto___36807)){
args__26957__auto__.push((arguments[i__26951__auto___36808]));

var G__36809 = (i__26951__auto___36808 + (1));
i__26951__auto___36808 = G__36809;
continue;
} else {
}
break;
}

var argseq__26958__auto__ = ((((2) < args__26957__auto__.length))?(new cljs.core.IndexedSeq(args__26957__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26958__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__36803){
var vec__36804 = p__36803;
var map__36805 = cljs.core.nth.call(null,vec__36804,(0),null);
var map__36805__$1 = ((((!((map__36805 == null)))?((((map__36805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36805):map__36805);
var opts = map__36805__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__36805__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__36805__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq36800){
var G__36801 = cljs.core.first.call(null,seq36800);
var seq36800__$1 = cljs.core.next.call(null,seq36800);
var G__36802 = cljs.core.first.call(null,seq36800__$1);
var seq36800__$2 = cljs.core.next.call(null,seq36800__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36801,G__36802,seq36800__$2);
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__36810,websocket_QMARK_){
var map__36813 = p__36810;
var map__36813__$1 = ((((!((map__36813 == null)))?((((map__36813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36813):map__36813);
var location = map__36813__$1;
var adjusted_protocol = cljs.core.get.call(null,map__36813__$1,new cljs.core.Keyword(null,"adjusted-protocol","adjusted-protocol",37431492));
var host = cljs.core.get.call(null,map__36813__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__36813__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str(adjusted_protocol),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__25880__auto__ = path;
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map