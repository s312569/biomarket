// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args29985 = [];
var len__26879__auto___29991 = arguments.length;
var i__26880__auto___29992 = (0);
while(true){
if((i__26880__auto___29992 < len__26879__auto___29991)){
args29985.push((arguments[i__26880__auto___29992]));

var G__29993 = (i__26880__auto___29992 + (1));
i__26880__auto___29992 = G__29993;
continue;
} else {
}
break;
}

var G__29987 = args29985.length;
switch (G__29987) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29985.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29988 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29988 = (function (f,blockable,meta29989){
this.f = f;
this.blockable = blockable;
this.meta29989 = meta29989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29990,meta29989__$1){
var self__ = this;
var _29990__$1 = this;
return (new cljs.core.async.t_cljs$core$async29988(self__.f,self__.blockable,meta29989__$1));
});

cljs.core.async.t_cljs$core$async29988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29990){
var self__ = this;
var _29990__$1 = this;
return self__.meta29989;
});

cljs.core.async.t_cljs$core$async29988.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29988.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29988.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29988.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29988.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29989","meta29989",1338137838,null)], null);
});

cljs.core.async.t_cljs$core$async29988.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29988.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29988";

cljs.core.async.t_cljs$core$async29988.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"cljs.core.async/t_cljs$core$async29988");
});

cljs.core.async.__GT_t_cljs$core$async29988 = (function cljs$core$async$__GT_t_cljs$core$async29988(f__$1,blockable__$1,meta29989){
return (new cljs.core.async.t_cljs$core$async29988(f__$1,blockable__$1,meta29989));
});

}

return (new cljs.core.async.t_cljs$core$async29988(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args29997 = [];
var len__26879__auto___30000 = arguments.length;
var i__26880__auto___30001 = (0);
while(true){
if((i__26880__auto___30001 < len__26879__auto___30000)){
args29997.push((arguments[i__26880__auto___30001]));

var G__30002 = (i__26880__auto___30001 + (1));
i__26880__auto___30001 = G__30002;
continue;
} else {
}
break;
}

var G__29999 = args29997.length;
switch (G__29999) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29997.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args30004 = [];
var len__26879__auto___30007 = arguments.length;
var i__26880__auto___30008 = (0);
while(true){
if((i__26880__auto___30008 < len__26879__auto___30007)){
args30004.push((arguments[i__26880__auto___30008]));

var G__30009 = (i__26880__auto___30008 + (1));
i__26880__auto___30008 = G__30009;
continue;
} else {
}
break;
}

var G__30006 = args30004.length;
switch (G__30006) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30004.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args30011 = [];
var len__26879__auto___30014 = arguments.length;
var i__26880__auto___30015 = (0);
while(true){
if((i__26880__auto___30015 < len__26879__auto___30014)){
args30011.push((arguments[i__26880__auto___30015]));

var G__30016 = (i__26880__auto___30015 + (1));
i__26880__auto___30015 = G__30016;
continue;
} else {
}
break;
}

var G__30013 = args30011.length;
switch (G__30013) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30011.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30018 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30018);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30018,ret){
return (function (){
return fn1.call(null,val_30018);
});})(val_30018,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args30019 = [];
var len__26879__auto___30022 = arguments.length;
var i__26880__auto___30023 = (0);
while(true){
if((i__26880__auto___30023 < len__26879__auto___30022)){
args30019.push((arguments[i__26880__auto___30023]));

var G__30024 = (i__26880__auto___30023 + (1));
i__26880__auto___30023 = G__30024;
continue;
} else {
}
break;
}

var G__30021 = args30019.length;
switch (G__30021) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30019.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26724__auto___30026 = n;
var x_30027 = (0);
while(true){
if((x_30027 < n__26724__auto___30026)){
(a[x_30027] = (0));

var G__30028 = (x_30027 + (1));
x_30027 = G__30028;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30029 = (i + (1));
i = G__30029;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30033 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30033 = (function (alt_flag,flag,meta30034){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30034 = meta30034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30035,meta30034__$1){
var self__ = this;
var _30035__$1 = this;
return (new cljs.core.async.t_cljs$core$async30033(self__.alt_flag,self__.flag,meta30034__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30033.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30035){
var self__ = this;
var _30035__$1 = this;
return self__.meta30034;
});})(flag))
;

cljs.core.async.t_cljs$core$async30033.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30033.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30033.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30034","meta30034",-1882597624,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30033.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30033";

cljs.core.async.t_cljs$core$async30033.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"cljs.core.async/t_cljs$core$async30033");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30033 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30033(alt_flag__$1,flag__$1,meta30034){
return (new cljs.core.async.t_cljs$core$async30033(alt_flag__$1,flag__$1,meta30034));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30033(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30039 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30039 = (function (alt_handler,flag,cb,meta30040){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30040 = meta30040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30041,meta30040__$1){
var self__ = this;
var _30041__$1 = this;
return (new cljs.core.async.t_cljs$core$async30039(self__.alt_handler,self__.flag,self__.cb,meta30040__$1));
});

cljs.core.async.t_cljs$core$async30039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30041){
var self__ = this;
var _30041__$1 = this;
return self__.meta30040;
});

cljs.core.async.t_cljs$core$async30039.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30039.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30039.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30039.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30040","meta30040",-1268261511,null)], null);
});

cljs.core.async.t_cljs$core$async30039.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30039";

cljs.core.async.t_cljs$core$async30039.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"cljs.core.async/t_cljs$core$async30039");
});

cljs.core.async.__GT_t_cljs$core$async30039 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30039(alt_handler__$1,flag__$1,cb__$1,meta30040){
return (new cljs.core.async.t_cljs$core$async30039(alt_handler__$1,flag__$1,cb__$1,meta30040));
});

}

return (new cljs.core.async.t_cljs$core$async30039(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30042_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30042_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30043_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30043_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25809__auto__ = wport;
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30044 = (i + (1));
i = G__30044;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25809__auto__ = ret;
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__25797__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25797__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25797__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26886__auto__ = [];
var len__26879__auto___30050 = arguments.length;
var i__26880__auto___30051 = (0);
while(true){
if((i__26880__auto___30051 < len__26879__auto___30050)){
args__26886__auto__.push((arguments[i__26880__auto___30051]));

var G__30052 = (i__26880__auto___30051 + (1));
i__26880__auto___30051 = G__30052;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30047){
var map__30048 = p__30047;
var map__30048__$1 = ((((!((map__30048 == null)))?((((map__30048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30048):map__30048);
var opts = map__30048__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30045){
var G__30046 = cljs.core.first.call(null,seq30045);
var seq30045__$1 = cljs.core.next.call(null,seq30045);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30046,seq30045__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args30053 = [];
var len__26879__auto___30103 = arguments.length;
var i__26880__auto___30104 = (0);
while(true){
if((i__26880__auto___30104 < len__26879__auto___30103)){
args30053.push((arguments[i__26880__auto___30104]));

var G__30105 = (i__26880__auto___30104 + (1));
i__26880__auto___30104 = G__30105;
continue;
} else {
}
break;
}

var G__30055 = args30053.length;
switch (G__30055) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30053.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29940__auto___30107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto___30107){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto___30107){
return (function (state_30079){
var state_val_30080 = (state_30079[(1)]);
if((state_val_30080 === (7))){
var inst_30075 = (state_30079[(2)]);
var state_30079__$1 = state_30079;
var statearr_30081_30108 = state_30079__$1;
(statearr_30081_30108[(2)] = inst_30075);

(statearr_30081_30108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (1))){
var state_30079__$1 = state_30079;
var statearr_30082_30109 = state_30079__$1;
(statearr_30082_30109[(2)] = null);

(statearr_30082_30109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (4))){
var inst_30058 = (state_30079[(7)]);
var inst_30058__$1 = (state_30079[(2)]);
var inst_30059 = (inst_30058__$1 == null);
var state_30079__$1 = (function (){var statearr_30083 = state_30079;
(statearr_30083[(7)] = inst_30058__$1);

return statearr_30083;
})();
if(cljs.core.truth_(inst_30059)){
var statearr_30084_30110 = state_30079__$1;
(statearr_30084_30110[(1)] = (5));

} else {
var statearr_30085_30111 = state_30079__$1;
(statearr_30085_30111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (13))){
var state_30079__$1 = state_30079;
var statearr_30086_30112 = state_30079__$1;
(statearr_30086_30112[(2)] = null);

(statearr_30086_30112[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (6))){
var inst_30058 = (state_30079[(7)]);
var state_30079__$1 = state_30079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30079__$1,(11),to,inst_30058);
} else {
if((state_val_30080 === (3))){
var inst_30077 = (state_30079[(2)]);
var state_30079__$1 = state_30079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30079__$1,inst_30077);
} else {
if((state_val_30080 === (12))){
var state_30079__$1 = state_30079;
var statearr_30087_30113 = state_30079__$1;
(statearr_30087_30113[(2)] = null);

(statearr_30087_30113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (2))){
var state_30079__$1 = state_30079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30079__$1,(4),from);
} else {
if((state_val_30080 === (11))){
var inst_30068 = (state_30079[(2)]);
var state_30079__$1 = state_30079;
if(cljs.core.truth_(inst_30068)){
var statearr_30088_30114 = state_30079__$1;
(statearr_30088_30114[(1)] = (12));

} else {
var statearr_30089_30115 = state_30079__$1;
(statearr_30089_30115[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (9))){
var state_30079__$1 = state_30079;
var statearr_30090_30116 = state_30079__$1;
(statearr_30090_30116[(2)] = null);

(statearr_30090_30116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (5))){
var state_30079__$1 = state_30079;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30091_30117 = state_30079__$1;
(statearr_30091_30117[(1)] = (8));

} else {
var statearr_30092_30118 = state_30079__$1;
(statearr_30092_30118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (14))){
var inst_30073 = (state_30079[(2)]);
var state_30079__$1 = state_30079;
var statearr_30093_30119 = state_30079__$1;
(statearr_30093_30119[(2)] = inst_30073);

(statearr_30093_30119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (10))){
var inst_30065 = (state_30079[(2)]);
var state_30079__$1 = state_30079;
var statearr_30094_30120 = state_30079__$1;
(statearr_30094_30120[(2)] = inst_30065);

(statearr_30094_30120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (8))){
var inst_30062 = cljs.core.async.close_BANG_.call(null,to);
var state_30079__$1 = state_30079;
var statearr_30095_30121 = state_30079__$1;
(statearr_30095_30121[(2)] = inst_30062);

(statearr_30095_30121[(1)] = (10));


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
});})(c__29940__auto___30107))
;
return ((function (switch__29828__auto__,c__29940__auto___30107){
return (function() {
var cljs$core$async$state_machine__29829__auto__ = null;
var cljs$core$async$state_machine__29829__auto____0 = (function (){
var statearr_30099 = [null,null,null,null,null,null,null,null];
(statearr_30099[(0)] = cljs$core$async$state_machine__29829__auto__);

(statearr_30099[(1)] = (1));

return statearr_30099;
});
var cljs$core$async$state_machine__29829__auto____1 = (function (state_30079){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_30079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e30100){if((e30100 instanceof Object)){
var ex__29832__auto__ = e30100;
var statearr_30101_30122 = state_30079;
(statearr_30101_30122[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30123 = state_30079;
state_30079 = G__30123;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
cljs$core$async$state_machine__29829__auto__ = function(state_30079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29829__auto____1.call(this,state_30079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29829__auto____0;
cljs$core$async$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29829__auto____1;
return cljs$core$async$state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto___30107))
})();
var state__29942__auto__ = (function (){var statearr_30102 = f__29941__auto__.call(null);
(statearr_30102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___30107);

return statearr_30102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto___30107))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30307){
var vec__30308 = p__30307;
var v = cljs.core.nth.call(null,vec__30308,(0),null);
var p = cljs.core.nth.call(null,vec__30308,(1),null);
var job = vec__30308;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29940__auto___30490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto___30490,res,vec__30308,v,p,job,jobs,results){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto___30490,res,vec__30308,v,p,job,jobs,results){
return (function (state_30313){
var state_val_30314 = (state_30313[(1)]);
if((state_val_30314 === (1))){
var state_30313__$1 = state_30313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30313__$1,(2),res,v);
} else {
if((state_val_30314 === (2))){
var inst_30310 = (state_30313[(2)]);
var inst_30311 = cljs.core.async.close_BANG_.call(null,res);
var state_30313__$1 = (function (){var statearr_30315 = state_30313;
(statearr_30315[(7)] = inst_30310);

return statearr_30315;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30313__$1,inst_30311);
} else {
return null;
}
}
});})(c__29940__auto___30490,res,vec__30308,v,p,job,jobs,results))
;
return ((function (switch__29828__auto__,c__29940__auto___30490,res,vec__30308,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____0 = (function (){
var statearr_30319 = [null,null,null,null,null,null,null,null];
(statearr_30319[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__);

(statearr_30319[(1)] = (1));

return statearr_30319;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____1 = (function (state_30313){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_30313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e30320){if((e30320 instanceof Object)){
var ex__29832__auto__ = e30320;
var statearr_30321_30491 = state_30313;
(statearr_30321_30491[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30492 = state_30313;
state_30313 = G__30492;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__ = function(state_30313){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____1.call(this,state_30313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto___30490,res,vec__30308,v,p,job,jobs,results))
})();
var state__29942__auto__ = (function (){var statearr_30322 = f__29941__auto__.call(null);
(statearr_30322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___30490);

return statearr_30322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto___30490,res,vec__30308,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30323){
var vec__30324 = p__30323;
var v = cljs.core.nth.call(null,vec__30324,(0),null);
var p = cljs.core.nth.call(null,vec__30324,(1),null);
var job = vec__30324;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26724__auto___30493 = n;
var __30494 = (0);
while(true){
if((__30494 < n__26724__auto___30493)){
var G__30325_30495 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30325_30495) {
case "compute":
var c__29940__auto___30497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30494,c__29940__auto___30497,G__30325_30495,n__26724__auto___30493,jobs,results,process,async){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (__30494,c__29940__auto___30497,G__30325_30495,n__26724__auto___30493,jobs,results,process,async){
return (function (state_30338){
var state_val_30339 = (state_30338[(1)]);
if((state_val_30339 === (1))){
var state_30338__$1 = state_30338;
var statearr_30340_30498 = state_30338__$1;
(statearr_30340_30498[(2)] = null);

(statearr_30340_30498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (2))){
var state_30338__$1 = state_30338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30338__$1,(4),jobs);
} else {
if((state_val_30339 === (3))){
var inst_30336 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30338__$1,inst_30336);
} else {
if((state_val_30339 === (4))){
var inst_30328 = (state_30338[(2)]);
var inst_30329 = process.call(null,inst_30328);
var state_30338__$1 = state_30338;
if(cljs.core.truth_(inst_30329)){
var statearr_30341_30499 = state_30338__$1;
(statearr_30341_30499[(1)] = (5));

} else {
var statearr_30342_30500 = state_30338__$1;
(statearr_30342_30500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (5))){
var state_30338__$1 = state_30338;
var statearr_30343_30501 = state_30338__$1;
(statearr_30343_30501[(2)] = null);

(statearr_30343_30501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (6))){
var state_30338__$1 = state_30338;
var statearr_30344_30502 = state_30338__$1;
(statearr_30344_30502[(2)] = null);

(statearr_30344_30502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (7))){
var inst_30334 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
var statearr_30345_30503 = state_30338__$1;
(statearr_30345_30503[(2)] = inst_30334);

(statearr_30345_30503[(1)] = (3));


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
});})(__30494,c__29940__auto___30497,G__30325_30495,n__26724__auto___30493,jobs,results,process,async))
;
return ((function (__30494,switch__29828__auto__,c__29940__auto___30497,G__30325_30495,n__26724__auto___30493,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____0 = (function (){
var statearr_30349 = [null,null,null,null,null,null,null];
(statearr_30349[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__);

(statearr_30349[(1)] = (1));

return statearr_30349;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____1 = (function (state_30338){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_30338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e30350){if((e30350 instanceof Object)){
var ex__29832__auto__ = e30350;
var statearr_30351_30504 = state_30338;
(statearr_30351_30504[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30505 = state_30338;
state_30338 = G__30505;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__ = function(state_30338){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____1.call(this,state_30338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__;
})()
;})(__30494,switch__29828__auto__,c__29940__auto___30497,G__30325_30495,n__26724__auto___30493,jobs,results,process,async))
})();
var state__29942__auto__ = (function (){var statearr_30352 = f__29941__auto__.call(null);
(statearr_30352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___30497);

return statearr_30352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(__30494,c__29940__auto___30497,G__30325_30495,n__26724__auto___30493,jobs,results,process,async))
);


break;
case "async":
var c__29940__auto___30506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30494,c__29940__auto___30506,G__30325_30495,n__26724__auto___30493,jobs,results,process,async){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (__30494,c__29940__auto___30506,G__30325_30495,n__26724__auto___30493,jobs,results,process,async){
return (function (state_30365){
var state_val_30366 = (state_30365[(1)]);
if((state_val_30366 === (1))){
var state_30365__$1 = state_30365;
var statearr_30367_30507 = state_30365__$1;
(statearr_30367_30507[(2)] = null);

(statearr_30367_30507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30366 === (2))){
var state_30365__$1 = state_30365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30365__$1,(4),jobs);
} else {
if((state_val_30366 === (3))){
var inst_30363 = (state_30365[(2)]);
var state_30365__$1 = state_30365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30365__$1,inst_30363);
} else {
if((state_val_30366 === (4))){
var inst_30355 = (state_30365[(2)]);
var inst_30356 = async.call(null,inst_30355);
var state_30365__$1 = state_30365;
if(cljs.core.truth_(inst_30356)){
var statearr_30368_30508 = state_30365__$1;
(statearr_30368_30508[(1)] = (5));

} else {
var statearr_30369_30509 = state_30365__$1;
(statearr_30369_30509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30366 === (5))){
var state_30365__$1 = state_30365;
var statearr_30370_30510 = state_30365__$1;
(statearr_30370_30510[(2)] = null);

(statearr_30370_30510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30366 === (6))){
var state_30365__$1 = state_30365;
var statearr_30371_30511 = state_30365__$1;
(statearr_30371_30511[(2)] = null);

(statearr_30371_30511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30366 === (7))){
var inst_30361 = (state_30365[(2)]);
var state_30365__$1 = state_30365;
var statearr_30372_30512 = state_30365__$1;
(statearr_30372_30512[(2)] = inst_30361);

(statearr_30372_30512[(1)] = (3));


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
});})(__30494,c__29940__auto___30506,G__30325_30495,n__26724__auto___30493,jobs,results,process,async))
;
return ((function (__30494,switch__29828__auto__,c__29940__auto___30506,G__30325_30495,n__26724__auto___30493,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____0 = (function (){
var statearr_30376 = [null,null,null,null,null,null,null];
(statearr_30376[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__);

(statearr_30376[(1)] = (1));

return statearr_30376;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____1 = (function (state_30365){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_30365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e30377){if((e30377 instanceof Object)){
var ex__29832__auto__ = e30377;
var statearr_30378_30513 = state_30365;
(statearr_30378_30513[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30514 = state_30365;
state_30365 = G__30514;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__ = function(state_30365){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____1.call(this,state_30365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__;
})()
;})(__30494,switch__29828__auto__,c__29940__auto___30506,G__30325_30495,n__26724__auto___30493,jobs,results,process,async))
})();
var state__29942__auto__ = (function (){var statearr_30379 = f__29941__auto__.call(null);
(statearr_30379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___30506);

return statearr_30379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(__30494,c__29940__auto___30506,G__30325_30495,n__26724__auto___30493,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30515 = (__30494 + (1));
__30494 = G__30515;
continue;
} else {
}
break;
}

var c__29940__auto___30516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto___30516,jobs,results,process,async){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto___30516,jobs,results,process,async){
return (function (state_30401){
var state_val_30402 = (state_30401[(1)]);
if((state_val_30402 === (1))){
var state_30401__$1 = state_30401;
var statearr_30403_30517 = state_30401__$1;
(statearr_30403_30517[(2)] = null);

(statearr_30403_30517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (2))){
var state_30401__$1 = state_30401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30401__$1,(4),from);
} else {
if((state_val_30402 === (3))){
var inst_30399 = (state_30401[(2)]);
var state_30401__$1 = state_30401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30401__$1,inst_30399);
} else {
if((state_val_30402 === (4))){
var inst_30382 = (state_30401[(7)]);
var inst_30382__$1 = (state_30401[(2)]);
var inst_30383 = (inst_30382__$1 == null);
var state_30401__$1 = (function (){var statearr_30404 = state_30401;
(statearr_30404[(7)] = inst_30382__$1);

return statearr_30404;
})();
if(cljs.core.truth_(inst_30383)){
var statearr_30405_30518 = state_30401__$1;
(statearr_30405_30518[(1)] = (5));

} else {
var statearr_30406_30519 = state_30401__$1;
(statearr_30406_30519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (5))){
var inst_30385 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30401__$1 = state_30401;
var statearr_30407_30520 = state_30401__$1;
(statearr_30407_30520[(2)] = inst_30385);

(statearr_30407_30520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (6))){
var inst_30387 = (state_30401[(8)]);
var inst_30382 = (state_30401[(7)]);
var inst_30387__$1 = cljs.core.async.chan.call(null,(1));
var inst_30388 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30389 = [inst_30382,inst_30387__$1];
var inst_30390 = (new cljs.core.PersistentVector(null,2,(5),inst_30388,inst_30389,null));
var state_30401__$1 = (function (){var statearr_30408 = state_30401;
(statearr_30408[(8)] = inst_30387__$1);

return statearr_30408;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30401__$1,(8),jobs,inst_30390);
} else {
if((state_val_30402 === (7))){
var inst_30397 = (state_30401[(2)]);
var state_30401__$1 = state_30401;
var statearr_30409_30521 = state_30401__$1;
(statearr_30409_30521[(2)] = inst_30397);

(statearr_30409_30521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (8))){
var inst_30387 = (state_30401[(8)]);
var inst_30392 = (state_30401[(2)]);
var state_30401__$1 = (function (){var statearr_30410 = state_30401;
(statearr_30410[(9)] = inst_30392);

return statearr_30410;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30401__$1,(9),results,inst_30387);
} else {
if((state_val_30402 === (9))){
var inst_30394 = (state_30401[(2)]);
var state_30401__$1 = (function (){var statearr_30411 = state_30401;
(statearr_30411[(10)] = inst_30394);

return statearr_30411;
})();
var statearr_30412_30522 = state_30401__$1;
(statearr_30412_30522[(2)] = null);

(statearr_30412_30522[(1)] = (2));


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
});})(c__29940__auto___30516,jobs,results,process,async))
;
return ((function (switch__29828__auto__,c__29940__auto___30516,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____0 = (function (){
var statearr_30416 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30416[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__);

(statearr_30416[(1)] = (1));

return statearr_30416;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____1 = (function (state_30401){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_30401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e30417){if((e30417 instanceof Object)){
var ex__29832__auto__ = e30417;
var statearr_30418_30523 = state_30401;
(statearr_30418_30523[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30524 = state_30401;
state_30401 = G__30524;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__ = function(state_30401){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____1.call(this,state_30401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto___30516,jobs,results,process,async))
})();
var state__29942__auto__ = (function (){var statearr_30419 = f__29941__auto__.call(null);
(statearr_30419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___30516);

return statearr_30419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto___30516,jobs,results,process,async))
);


var c__29940__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto__,jobs,results,process,async){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto__,jobs,results,process,async){
return (function (state_30457){
var state_val_30458 = (state_30457[(1)]);
if((state_val_30458 === (7))){
var inst_30453 = (state_30457[(2)]);
var state_30457__$1 = state_30457;
var statearr_30459_30525 = state_30457__$1;
(statearr_30459_30525[(2)] = inst_30453);

(statearr_30459_30525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (20))){
var state_30457__$1 = state_30457;
var statearr_30460_30526 = state_30457__$1;
(statearr_30460_30526[(2)] = null);

(statearr_30460_30526[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (1))){
var state_30457__$1 = state_30457;
var statearr_30461_30527 = state_30457__$1;
(statearr_30461_30527[(2)] = null);

(statearr_30461_30527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (4))){
var inst_30422 = (state_30457[(7)]);
var inst_30422__$1 = (state_30457[(2)]);
var inst_30423 = (inst_30422__$1 == null);
var state_30457__$1 = (function (){var statearr_30462 = state_30457;
(statearr_30462[(7)] = inst_30422__$1);

return statearr_30462;
})();
if(cljs.core.truth_(inst_30423)){
var statearr_30463_30528 = state_30457__$1;
(statearr_30463_30528[(1)] = (5));

} else {
var statearr_30464_30529 = state_30457__$1;
(statearr_30464_30529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (15))){
var inst_30435 = (state_30457[(8)]);
var state_30457__$1 = state_30457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30457__$1,(18),to,inst_30435);
} else {
if((state_val_30458 === (21))){
var inst_30448 = (state_30457[(2)]);
var state_30457__$1 = state_30457;
var statearr_30465_30530 = state_30457__$1;
(statearr_30465_30530[(2)] = inst_30448);

(statearr_30465_30530[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (13))){
var inst_30450 = (state_30457[(2)]);
var state_30457__$1 = (function (){var statearr_30466 = state_30457;
(statearr_30466[(9)] = inst_30450);

return statearr_30466;
})();
var statearr_30467_30531 = state_30457__$1;
(statearr_30467_30531[(2)] = null);

(statearr_30467_30531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (6))){
var inst_30422 = (state_30457[(7)]);
var state_30457__$1 = state_30457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30457__$1,(11),inst_30422);
} else {
if((state_val_30458 === (17))){
var inst_30443 = (state_30457[(2)]);
var state_30457__$1 = state_30457;
if(cljs.core.truth_(inst_30443)){
var statearr_30468_30532 = state_30457__$1;
(statearr_30468_30532[(1)] = (19));

} else {
var statearr_30469_30533 = state_30457__$1;
(statearr_30469_30533[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (3))){
var inst_30455 = (state_30457[(2)]);
var state_30457__$1 = state_30457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30457__$1,inst_30455);
} else {
if((state_val_30458 === (12))){
var inst_30432 = (state_30457[(10)]);
var state_30457__$1 = state_30457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30457__$1,(14),inst_30432);
} else {
if((state_val_30458 === (2))){
var state_30457__$1 = state_30457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30457__$1,(4),results);
} else {
if((state_val_30458 === (19))){
var state_30457__$1 = state_30457;
var statearr_30470_30534 = state_30457__$1;
(statearr_30470_30534[(2)] = null);

(statearr_30470_30534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (11))){
var inst_30432 = (state_30457[(2)]);
var state_30457__$1 = (function (){var statearr_30471 = state_30457;
(statearr_30471[(10)] = inst_30432);

return statearr_30471;
})();
var statearr_30472_30535 = state_30457__$1;
(statearr_30472_30535[(2)] = null);

(statearr_30472_30535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (9))){
var state_30457__$1 = state_30457;
var statearr_30473_30536 = state_30457__$1;
(statearr_30473_30536[(2)] = null);

(statearr_30473_30536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (5))){
var state_30457__$1 = state_30457;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30474_30537 = state_30457__$1;
(statearr_30474_30537[(1)] = (8));

} else {
var statearr_30475_30538 = state_30457__$1;
(statearr_30475_30538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (14))){
var inst_30435 = (state_30457[(8)]);
var inst_30437 = (state_30457[(11)]);
var inst_30435__$1 = (state_30457[(2)]);
var inst_30436 = (inst_30435__$1 == null);
var inst_30437__$1 = cljs.core.not.call(null,inst_30436);
var state_30457__$1 = (function (){var statearr_30476 = state_30457;
(statearr_30476[(8)] = inst_30435__$1);

(statearr_30476[(11)] = inst_30437__$1);

return statearr_30476;
})();
if(inst_30437__$1){
var statearr_30477_30539 = state_30457__$1;
(statearr_30477_30539[(1)] = (15));

} else {
var statearr_30478_30540 = state_30457__$1;
(statearr_30478_30540[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (16))){
var inst_30437 = (state_30457[(11)]);
var state_30457__$1 = state_30457;
var statearr_30479_30541 = state_30457__$1;
(statearr_30479_30541[(2)] = inst_30437);

(statearr_30479_30541[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (10))){
var inst_30429 = (state_30457[(2)]);
var state_30457__$1 = state_30457;
var statearr_30480_30542 = state_30457__$1;
(statearr_30480_30542[(2)] = inst_30429);

(statearr_30480_30542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (18))){
var inst_30440 = (state_30457[(2)]);
var state_30457__$1 = state_30457;
var statearr_30481_30543 = state_30457__$1;
(statearr_30481_30543[(2)] = inst_30440);

(statearr_30481_30543[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30458 === (8))){
var inst_30426 = cljs.core.async.close_BANG_.call(null,to);
var state_30457__$1 = state_30457;
var statearr_30482_30544 = state_30457__$1;
(statearr_30482_30544[(2)] = inst_30426);

(statearr_30482_30544[(1)] = (10));


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
});})(c__29940__auto__,jobs,results,process,async))
;
return ((function (switch__29828__auto__,c__29940__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____0 = (function (){
var statearr_30486 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30486[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__);

(statearr_30486[(1)] = (1));

return statearr_30486;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____1 = (function (state_30457){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_30457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e30487){if((e30487 instanceof Object)){
var ex__29832__auto__ = e30487;
var statearr_30488_30545 = state_30457;
(statearr_30488_30545[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30546 = state_30457;
state_30457 = G__30546;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__ = function(state_30457){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____1.call(this,state_30457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29829__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto__,jobs,results,process,async))
})();
var state__29942__auto__ = (function (){var statearr_30489 = f__29941__auto__.call(null);
(statearr_30489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto__);

return statearr_30489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto__,jobs,results,process,async))
);

return c__29940__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args30547 = [];
var len__26879__auto___30550 = arguments.length;
var i__26880__auto___30551 = (0);
while(true){
if((i__26880__auto___30551 < len__26879__auto___30550)){
args30547.push((arguments[i__26880__auto___30551]));

var G__30552 = (i__26880__auto___30551 + (1));
i__26880__auto___30551 = G__30552;
continue;
} else {
}
break;
}

var G__30549 = args30547.length;
switch (G__30549) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30547.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args30554 = [];
var len__26879__auto___30557 = arguments.length;
var i__26880__auto___30558 = (0);
while(true){
if((i__26880__auto___30558 < len__26879__auto___30557)){
args30554.push((arguments[i__26880__auto___30558]));

var G__30559 = (i__26880__auto___30558 + (1));
i__26880__auto___30558 = G__30559;
continue;
} else {
}
break;
}

var G__30556 = args30554.length;
switch (G__30556) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30554.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args30561 = [];
var len__26879__auto___30614 = arguments.length;
var i__26880__auto___30615 = (0);
while(true){
if((i__26880__auto___30615 < len__26879__auto___30614)){
args30561.push((arguments[i__26880__auto___30615]));

var G__30616 = (i__26880__auto___30615 + (1));
i__26880__auto___30615 = G__30616;
continue;
} else {
}
break;
}

var G__30563 = args30561.length;
switch (G__30563) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30561.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29940__auto___30618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto___30618,tc,fc){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto___30618,tc,fc){
return (function (state_30589){
var state_val_30590 = (state_30589[(1)]);
if((state_val_30590 === (7))){
var inst_30585 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
var statearr_30591_30619 = state_30589__$1;
(statearr_30591_30619[(2)] = inst_30585);

(statearr_30591_30619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (1))){
var state_30589__$1 = state_30589;
var statearr_30592_30620 = state_30589__$1;
(statearr_30592_30620[(2)] = null);

(statearr_30592_30620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (4))){
var inst_30566 = (state_30589[(7)]);
var inst_30566__$1 = (state_30589[(2)]);
var inst_30567 = (inst_30566__$1 == null);
var state_30589__$1 = (function (){var statearr_30593 = state_30589;
(statearr_30593[(7)] = inst_30566__$1);

return statearr_30593;
})();
if(cljs.core.truth_(inst_30567)){
var statearr_30594_30621 = state_30589__$1;
(statearr_30594_30621[(1)] = (5));

} else {
var statearr_30595_30622 = state_30589__$1;
(statearr_30595_30622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (13))){
var state_30589__$1 = state_30589;
var statearr_30596_30623 = state_30589__$1;
(statearr_30596_30623[(2)] = null);

(statearr_30596_30623[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (6))){
var inst_30566 = (state_30589[(7)]);
var inst_30572 = p.call(null,inst_30566);
var state_30589__$1 = state_30589;
if(cljs.core.truth_(inst_30572)){
var statearr_30597_30624 = state_30589__$1;
(statearr_30597_30624[(1)] = (9));

} else {
var statearr_30598_30625 = state_30589__$1;
(statearr_30598_30625[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (3))){
var inst_30587 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30589__$1,inst_30587);
} else {
if((state_val_30590 === (12))){
var state_30589__$1 = state_30589;
var statearr_30599_30626 = state_30589__$1;
(statearr_30599_30626[(2)] = null);

(statearr_30599_30626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (2))){
var state_30589__$1 = state_30589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30589__$1,(4),ch);
} else {
if((state_val_30590 === (11))){
var inst_30566 = (state_30589[(7)]);
var inst_30576 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30589__$1,(8),inst_30576,inst_30566);
} else {
if((state_val_30590 === (9))){
var state_30589__$1 = state_30589;
var statearr_30600_30627 = state_30589__$1;
(statearr_30600_30627[(2)] = tc);

(statearr_30600_30627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (5))){
var inst_30569 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30570 = cljs.core.async.close_BANG_.call(null,fc);
var state_30589__$1 = (function (){var statearr_30601 = state_30589;
(statearr_30601[(8)] = inst_30569);

return statearr_30601;
})();
var statearr_30602_30628 = state_30589__$1;
(statearr_30602_30628[(2)] = inst_30570);

(statearr_30602_30628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (14))){
var inst_30583 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
var statearr_30603_30629 = state_30589__$1;
(statearr_30603_30629[(2)] = inst_30583);

(statearr_30603_30629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (10))){
var state_30589__$1 = state_30589;
var statearr_30604_30630 = state_30589__$1;
(statearr_30604_30630[(2)] = fc);

(statearr_30604_30630[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30590 === (8))){
var inst_30578 = (state_30589[(2)]);
var state_30589__$1 = state_30589;
if(cljs.core.truth_(inst_30578)){
var statearr_30605_30631 = state_30589__$1;
(statearr_30605_30631[(1)] = (12));

} else {
var statearr_30606_30632 = state_30589__$1;
(statearr_30606_30632[(1)] = (13));

}

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
});})(c__29940__auto___30618,tc,fc))
;
return ((function (switch__29828__auto__,c__29940__auto___30618,tc,fc){
return (function() {
var cljs$core$async$state_machine__29829__auto__ = null;
var cljs$core$async$state_machine__29829__auto____0 = (function (){
var statearr_30610 = [null,null,null,null,null,null,null,null,null];
(statearr_30610[(0)] = cljs$core$async$state_machine__29829__auto__);

(statearr_30610[(1)] = (1));

return statearr_30610;
});
var cljs$core$async$state_machine__29829__auto____1 = (function (state_30589){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_30589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e30611){if((e30611 instanceof Object)){
var ex__29832__auto__ = e30611;
var statearr_30612_30633 = state_30589;
(statearr_30612_30633[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30634 = state_30589;
state_30589 = G__30634;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
cljs$core$async$state_machine__29829__auto__ = function(state_30589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29829__auto____1.call(this,state_30589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29829__auto____0;
cljs$core$async$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29829__auto____1;
return cljs$core$async$state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto___30618,tc,fc))
})();
var state__29942__auto__ = (function (){var statearr_30613 = f__29941__auto__.call(null);
(statearr_30613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___30618);

return statearr_30613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto___30618,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29940__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto__){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto__){
return (function (state_30698){
var state_val_30699 = (state_30698[(1)]);
if((state_val_30699 === (7))){
var inst_30694 = (state_30698[(2)]);
var state_30698__$1 = state_30698;
var statearr_30700_30721 = state_30698__$1;
(statearr_30700_30721[(2)] = inst_30694);

(statearr_30700_30721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30699 === (1))){
var inst_30678 = init;
var state_30698__$1 = (function (){var statearr_30701 = state_30698;
(statearr_30701[(7)] = inst_30678);

return statearr_30701;
})();
var statearr_30702_30722 = state_30698__$1;
(statearr_30702_30722[(2)] = null);

(statearr_30702_30722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30699 === (4))){
var inst_30681 = (state_30698[(8)]);
var inst_30681__$1 = (state_30698[(2)]);
var inst_30682 = (inst_30681__$1 == null);
var state_30698__$1 = (function (){var statearr_30703 = state_30698;
(statearr_30703[(8)] = inst_30681__$1);

return statearr_30703;
})();
if(cljs.core.truth_(inst_30682)){
var statearr_30704_30723 = state_30698__$1;
(statearr_30704_30723[(1)] = (5));

} else {
var statearr_30705_30724 = state_30698__$1;
(statearr_30705_30724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30699 === (6))){
var inst_30678 = (state_30698[(7)]);
var inst_30685 = (state_30698[(9)]);
var inst_30681 = (state_30698[(8)]);
var inst_30685__$1 = f.call(null,inst_30678,inst_30681);
var inst_30686 = cljs.core.reduced_QMARK_.call(null,inst_30685__$1);
var state_30698__$1 = (function (){var statearr_30706 = state_30698;
(statearr_30706[(9)] = inst_30685__$1);

return statearr_30706;
})();
if(inst_30686){
var statearr_30707_30725 = state_30698__$1;
(statearr_30707_30725[(1)] = (8));

} else {
var statearr_30708_30726 = state_30698__$1;
(statearr_30708_30726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30699 === (3))){
var inst_30696 = (state_30698[(2)]);
var state_30698__$1 = state_30698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30698__$1,inst_30696);
} else {
if((state_val_30699 === (2))){
var state_30698__$1 = state_30698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30698__$1,(4),ch);
} else {
if((state_val_30699 === (9))){
var inst_30685 = (state_30698[(9)]);
var inst_30678 = inst_30685;
var state_30698__$1 = (function (){var statearr_30709 = state_30698;
(statearr_30709[(7)] = inst_30678);

return statearr_30709;
})();
var statearr_30710_30727 = state_30698__$1;
(statearr_30710_30727[(2)] = null);

(statearr_30710_30727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30699 === (5))){
var inst_30678 = (state_30698[(7)]);
var state_30698__$1 = state_30698;
var statearr_30711_30728 = state_30698__$1;
(statearr_30711_30728[(2)] = inst_30678);

(statearr_30711_30728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30699 === (10))){
var inst_30692 = (state_30698[(2)]);
var state_30698__$1 = state_30698;
var statearr_30712_30729 = state_30698__$1;
(statearr_30712_30729[(2)] = inst_30692);

(statearr_30712_30729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30699 === (8))){
var inst_30685 = (state_30698[(9)]);
var inst_30688 = cljs.core.deref.call(null,inst_30685);
var state_30698__$1 = state_30698;
var statearr_30713_30730 = state_30698__$1;
(statearr_30713_30730[(2)] = inst_30688);

(statearr_30713_30730[(1)] = (10));


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
});})(c__29940__auto__))
;
return ((function (switch__29828__auto__,c__29940__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29829__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29829__auto____0 = (function (){
var statearr_30717 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30717[(0)] = cljs$core$async$reduce_$_state_machine__29829__auto__);

(statearr_30717[(1)] = (1));

return statearr_30717;
});
var cljs$core$async$reduce_$_state_machine__29829__auto____1 = (function (state_30698){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_30698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e30718){if((e30718 instanceof Object)){
var ex__29832__auto__ = e30718;
var statearr_30719_30731 = state_30698;
(statearr_30719_30731[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30732 = state_30698;
state_30698 = G__30732;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29829__auto__ = function(state_30698){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29829__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29829__auto____1.call(this,state_30698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29829__auto____0;
cljs$core$async$reduce_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29829__auto____1;
return cljs$core$async$reduce_$_state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto__))
})();
var state__29942__auto__ = (function (){var statearr_30720 = f__29941__auto__.call(null);
(statearr_30720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto__);

return statearr_30720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto__))
);

return c__29940__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args30733 = [];
var len__26879__auto___30785 = arguments.length;
var i__26880__auto___30786 = (0);
while(true){
if((i__26880__auto___30786 < len__26879__auto___30785)){
args30733.push((arguments[i__26880__auto___30786]));

var G__30787 = (i__26880__auto___30786 + (1));
i__26880__auto___30786 = G__30787;
continue;
} else {
}
break;
}

var G__30735 = args30733.length;
switch (G__30735) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30733.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29940__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto__){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto__){
return (function (state_30760){
var state_val_30761 = (state_30760[(1)]);
if((state_val_30761 === (7))){
var inst_30742 = (state_30760[(2)]);
var state_30760__$1 = state_30760;
var statearr_30762_30789 = state_30760__$1;
(statearr_30762_30789[(2)] = inst_30742);

(statearr_30762_30789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (1))){
var inst_30736 = cljs.core.seq.call(null,coll);
var inst_30737 = inst_30736;
var state_30760__$1 = (function (){var statearr_30763 = state_30760;
(statearr_30763[(7)] = inst_30737);

return statearr_30763;
})();
var statearr_30764_30790 = state_30760__$1;
(statearr_30764_30790[(2)] = null);

(statearr_30764_30790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (4))){
var inst_30737 = (state_30760[(7)]);
var inst_30740 = cljs.core.first.call(null,inst_30737);
var state_30760__$1 = state_30760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30760__$1,(7),ch,inst_30740);
} else {
if((state_val_30761 === (13))){
var inst_30754 = (state_30760[(2)]);
var state_30760__$1 = state_30760;
var statearr_30765_30791 = state_30760__$1;
(statearr_30765_30791[(2)] = inst_30754);

(statearr_30765_30791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (6))){
var inst_30745 = (state_30760[(2)]);
var state_30760__$1 = state_30760;
if(cljs.core.truth_(inst_30745)){
var statearr_30766_30792 = state_30760__$1;
(statearr_30766_30792[(1)] = (8));

} else {
var statearr_30767_30793 = state_30760__$1;
(statearr_30767_30793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (3))){
var inst_30758 = (state_30760[(2)]);
var state_30760__$1 = state_30760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30760__$1,inst_30758);
} else {
if((state_val_30761 === (12))){
var state_30760__$1 = state_30760;
var statearr_30768_30794 = state_30760__$1;
(statearr_30768_30794[(2)] = null);

(statearr_30768_30794[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (2))){
var inst_30737 = (state_30760[(7)]);
var state_30760__$1 = state_30760;
if(cljs.core.truth_(inst_30737)){
var statearr_30769_30795 = state_30760__$1;
(statearr_30769_30795[(1)] = (4));

} else {
var statearr_30770_30796 = state_30760__$1;
(statearr_30770_30796[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (11))){
var inst_30751 = cljs.core.async.close_BANG_.call(null,ch);
var state_30760__$1 = state_30760;
var statearr_30771_30797 = state_30760__$1;
(statearr_30771_30797[(2)] = inst_30751);

(statearr_30771_30797[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (9))){
var state_30760__$1 = state_30760;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30772_30798 = state_30760__$1;
(statearr_30772_30798[(1)] = (11));

} else {
var statearr_30773_30799 = state_30760__$1;
(statearr_30773_30799[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (5))){
var inst_30737 = (state_30760[(7)]);
var state_30760__$1 = state_30760;
var statearr_30774_30800 = state_30760__$1;
(statearr_30774_30800[(2)] = inst_30737);

(statearr_30774_30800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (10))){
var inst_30756 = (state_30760[(2)]);
var state_30760__$1 = state_30760;
var statearr_30775_30801 = state_30760__$1;
(statearr_30775_30801[(2)] = inst_30756);

(statearr_30775_30801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (8))){
var inst_30737 = (state_30760[(7)]);
var inst_30747 = cljs.core.next.call(null,inst_30737);
var inst_30737__$1 = inst_30747;
var state_30760__$1 = (function (){var statearr_30776 = state_30760;
(statearr_30776[(7)] = inst_30737__$1);

return statearr_30776;
})();
var statearr_30777_30802 = state_30760__$1;
(statearr_30777_30802[(2)] = null);

(statearr_30777_30802[(1)] = (2));


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
});})(c__29940__auto__))
;
return ((function (switch__29828__auto__,c__29940__auto__){
return (function() {
var cljs$core$async$state_machine__29829__auto__ = null;
var cljs$core$async$state_machine__29829__auto____0 = (function (){
var statearr_30781 = [null,null,null,null,null,null,null,null];
(statearr_30781[(0)] = cljs$core$async$state_machine__29829__auto__);

(statearr_30781[(1)] = (1));

return statearr_30781;
});
var cljs$core$async$state_machine__29829__auto____1 = (function (state_30760){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_30760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e30782){if((e30782 instanceof Object)){
var ex__29832__auto__ = e30782;
var statearr_30783_30803 = state_30760;
(statearr_30783_30803[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30804 = state_30760;
state_30760 = G__30804;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
cljs$core$async$state_machine__29829__auto__ = function(state_30760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29829__auto____1.call(this,state_30760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29829__auto____0;
cljs$core$async$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29829__auto____1;
return cljs$core$async$state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto__))
})();
var state__29942__auto__ = (function (){var statearr_30784 = f__29941__auto__.call(null);
(statearr_30784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto__);

return statearr_30784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto__))
);

return c__29940__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__26472__auto__ = (((_ == null))?null:_);
var m__26473__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26472__auto__)]);
if(!((m__26473__auto__ == null))){
return m__26473__auto__.call(null,_);
} else {
var m__26473__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26473__auto____$1 == null))){
return m__26473__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__26472__auto__ = (((m == null))?null:m);
var m__26473__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26472__auto__)]);
if(!((m__26473__auto__ == null))){
return m__26473__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26473__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26473__auto____$1 == null))){
return m__26473__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__26472__auto__ = (((m == null))?null:m);
var m__26473__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26472__auto__)]);
if(!((m__26473__auto__ == null))){
return m__26473__auto__.call(null,m,ch);
} else {
var m__26473__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26473__auto____$1 == null))){
return m__26473__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__26472__auto__ = (((m == null))?null:m);
var m__26473__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26472__auto__)]);
if(!((m__26473__auto__ == null))){
return m__26473__auto__.call(null,m);
} else {
var m__26473__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26473__auto____$1 == null))){
return m__26473__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31026 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31026 = (function (mult,ch,cs,meta31027){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31027 = meta31027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31028,meta31027__$1){
var self__ = this;
var _31028__$1 = this;
return (new cljs.core.async.t_cljs$core$async31026(self__.mult,self__.ch,self__.cs,meta31027__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31028){
var self__ = this;
var _31028__$1 = this;
return self__.meta31027;
});})(cs))
;

cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31026.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31027","meta31027",-254542966,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31026.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31026";

cljs.core.async.t_cljs$core$async31026.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"cljs.core.async/t_cljs$core$async31026");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31026 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31026(mult__$1,ch__$1,cs__$1,meta31027){
return (new cljs.core.async.t_cljs$core$async31026(mult__$1,ch__$1,cs__$1,meta31027));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31026(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29940__auto___31247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto___31247,cs,m,dchan,dctr,done){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto___31247,cs,m,dchan,dctr,done){
return (function (state_31159){
var state_val_31160 = (state_31159[(1)]);
if((state_val_31160 === (7))){
var inst_31155 = (state_31159[(2)]);
var state_31159__$1 = state_31159;
var statearr_31161_31248 = state_31159__$1;
(statearr_31161_31248[(2)] = inst_31155);

(statearr_31161_31248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (20))){
var inst_31060 = (state_31159[(7)]);
var inst_31070 = cljs.core.first.call(null,inst_31060);
var inst_31071 = cljs.core.nth.call(null,inst_31070,(0),null);
var inst_31072 = cljs.core.nth.call(null,inst_31070,(1),null);
var state_31159__$1 = (function (){var statearr_31162 = state_31159;
(statearr_31162[(8)] = inst_31071);

return statearr_31162;
})();
if(cljs.core.truth_(inst_31072)){
var statearr_31163_31249 = state_31159__$1;
(statearr_31163_31249[(1)] = (22));

} else {
var statearr_31164_31250 = state_31159__$1;
(statearr_31164_31250[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (27))){
var inst_31107 = (state_31159[(9)]);
var inst_31102 = (state_31159[(10)]);
var inst_31031 = (state_31159[(11)]);
var inst_31100 = (state_31159[(12)]);
var inst_31107__$1 = cljs.core._nth.call(null,inst_31100,inst_31102);
var inst_31108 = cljs.core.async.put_BANG_.call(null,inst_31107__$1,inst_31031,done);
var state_31159__$1 = (function (){var statearr_31165 = state_31159;
(statearr_31165[(9)] = inst_31107__$1);

return statearr_31165;
})();
if(cljs.core.truth_(inst_31108)){
var statearr_31166_31251 = state_31159__$1;
(statearr_31166_31251[(1)] = (30));

} else {
var statearr_31167_31252 = state_31159__$1;
(statearr_31167_31252[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (1))){
var state_31159__$1 = state_31159;
var statearr_31168_31253 = state_31159__$1;
(statearr_31168_31253[(2)] = null);

(statearr_31168_31253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (24))){
var inst_31060 = (state_31159[(7)]);
var inst_31077 = (state_31159[(2)]);
var inst_31078 = cljs.core.next.call(null,inst_31060);
var inst_31040 = inst_31078;
var inst_31041 = null;
var inst_31042 = (0);
var inst_31043 = (0);
var state_31159__$1 = (function (){var statearr_31169 = state_31159;
(statearr_31169[(13)] = inst_31043);

(statearr_31169[(14)] = inst_31077);

(statearr_31169[(15)] = inst_31040);

(statearr_31169[(16)] = inst_31041);

(statearr_31169[(17)] = inst_31042);

return statearr_31169;
})();
var statearr_31170_31254 = state_31159__$1;
(statearr_31170_31254[(2)] = null);

(statearr_31170_31254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (39))){
var state_31159__$1 = state_31159;
var statearr_31174_31255 = state_31159__$1;
(statearr_31174_31255[(2)] = null);

(statearr_31174_31255[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (4))){
var inst_31031 = (state_31159[(11)]);
var inst_31031__$1 = (state_31159[(2)]);
var inst_31032 = (inst_31031__$1 == null);
var state_31159__$1 = (function (){var statearr_31175 = state_31159;
(statearr_31175[(11)] = inst_31031__$1);

return statearr_31175;
})();
if(cljs.core.truth_(inst_31032)){
var statearr_31176_31256 = state_31159__$1;
(statearr_31176_31256[(1)] = (5));

} else {
var statearr_31177_31257 = state_31159__$1;
(statearr_31177_31257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (15))){
var inst_31043 = (state_31159[(13)]);
var inst_31040 = (state_31159[(15)]);
var inst_31041 = (state_31159[(16)]);
var inst_31042 = (state_31159[(17)]);
var inst_31056 = (state_31159[(2)]);
var inst_31057 = (inst_31043 + (1));
var tmp31171 = inst_31040;
var tmp31172 = inst_31041;
var tmp31173 = inst_31042;
var inst_31040__$1 = tmp31171;
var inst_31041__$1 = tmp31172;
var inst_31042__$1 = tmp31173;
var inst_31043__$1 = inst_31057;
var state_31159__$1 = (function (){var statearr_31178 = state_31159;
(statearr_31178[(13)] = inst_31043__$1);

(statearr_31178[(18)] = inst_31056);

(statearr_31178[(15)] = inst_31040__$1);

(statearr_31178[(16)] = inst_31041__$1);

(statearr_31178[(17)] = inst_31042__$1);

return statearr_31178;
})();
var statearr_31179_31258 = state_31159__$1;
(statearr_31179_31258[(2)] = null);

(statearr_31179_31258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (21))){
var inst_31081 = (state_31159[(2)]);
var state_31159__$1 = state_31159;
var statearr_31183_31259 = state_31159__$1;
(statearr_31183_31259[(2)] = inst_31081);

(statearr_31183_31259[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (31))){
var inst_31107 = (state_31159[(9)]);
var inst_31111 = done.call(null,null);
var inst_31112 = cljs.core.async.untap_STAR_.call(null,m,inst_31107);
var state_31159__$1 = (function (){var statearr_31184 = state_31159;
(statearr_31184[(19)] = inst_31111);

return statearr_31184;
})();
var statearr_31185_31260 = state_31159__$1;
(statearr_31185_31260[(2)] = inst_31112);

(statearr_31185_31260[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (32))){
var inst_31102 = (state_31159[(10)]);
var inst_31101 = (state_31159[(20)]);
var inst_31099 = (state_31159[(21)]);
var inst_31100 = (state_31159[(12)]);
var inst_31114 = (state_31159[(2)]);
var inst_31115 = (inst_31102 + (1));
var tmp31180 = inst_31101;
var tmp31181 = inst_31099;
var tmp31182 = inst_31100;
var inst_31099__$1 = tmp31181;
var inst_31100__$1 = tmp31182;
var inst_31101__$1 = tmp31180;
var inst_31102__$1 = inst_31115;
var state_31159__$1 = (function (){var statearr_31186 = state_31159;
(statearr_31186[(10)] = inst_31102__$1);

(statearr_31186[(20)] = inst_31101__$1);

(statearr_31186[(22)] = inst_31114);

(statearr_31186[(21)] = inst_31099__$1);

(statearr_31186[(12)] = inst_31100__$1);

return statearr_31186;
})();
var statearr_31187_31261 = state_31159__$1;
(statearr_31187_31261[(2)] = null);

(statearr_31187_31261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (40))){
var inst_31127 = (state_31159[(23)]);
var inst_31131 = done.call(null,null);
var inst_31132 = cljs.core.async.untap_STAR_.call(null,m,inst_31127);
var state_31159__$1 = (function (){var statearr_31188 = state_31159;
(statearr_31188[(24)] = inst_31131);

return statearr_31188;
})();
var statearr_31189_31262 = state_31159__$1;
(statearr_31189_31262[(2)] = inst_31132);

(statearr_31189_31262[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (33))){
var inst_31118 = (state_31159[(25)]);
var inst_31120 = cljs.core.chunked_seq_QMARK_.call(null,inst_31118);
var state_31159__$1 = state_31159;
if(inst_31120){
var statearr_31190_31263 = state_31159__$1;
(statearr_31190_31263[(1)] = (36));

} else {
var statearr_31191_31264 = state_31159__$1;
(statearr_31191_31264[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (13))){
var inst_31050 = (state_31159[(26)]);
var inst_31053 = cljs.core.async.close_BANG_.call(null,inst_31050);
var state_31159__$1 = state_31159;
var statearr_31192_31265 = state_31159__$1;
(statearr_31192_31265[(2)] = inst_31053);

(statearr_31192_31265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (22))){
var inst_31071 = (state_31159[(8)]);
var inst_31074 = cljs.core.async.close_BANG_.call(null,inst_31071);
var state_31159__$1 = state_31159;
var statearr_31193_31266 = state_31159__$1;
(statearr_31193_31266[(2)] = inst_31074);

(statearr_31193_31266[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (36))){
var inst_31118 = (state_31159[(25)]);
var inst_31122 = cljs.core.chunk_first.call(null,inst_31118);
var inst_31123 = cljs.core.chunk_rest.call(null,inst_31118);
var inst_31124 = cljs.core.count.call(null,inst_31122);
var inst_31099 = inst_31123;
var inst_31100 = inst_31122;
var inst_31101 = inst_31124;
var inst_31102 = (0);
var state_31159__$1 = (function (){var statearr_31194 = state_31159;
(statearr_31194[(10)] = inst_31102);

(statearr_31194[(20)] = inst_31101);

(statearr_31194[(21)] = inst_31099);

(statearr_31194[(12)] = inst_31100);

return statearr_31194;
})();
var statearr_31195_31267 = state_31159__$1;
(statearr_31195_31267[(2)] = null);

(statearr_31195_31267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (41))){
var inst_31118 = (state_31159[(25)]);
var inst_31134 = (state_31159[(2)]);
var inst_31135 = cljs.core.next.call(null,inst_31118);
var inst_31099 = inst_31135;
var inst_31100 = null;
var inst_31101 = (0);
var inst_31102 = (0);
var state_31159__$1 = (function (){var statearr_31196 = state_31159;
(statearr_31196[(10)] = inst_31102);

(statearr_31196[(20)] = inst_31101);

(statearr_31196[(27)] = inst_31134);

(statearr_31196[(21)] = inst_31099);

(statearr_31196[(12)] = inst_31100);

return statearr_31196;
})();
var statearr_31197_31268 = state_31159__$1;
(statearr_31197_31268[(2)] = null);

(statearr_31197_31268[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (43))){
var state_31159__$1 = state_31159;
var statearr_31198_31269 = state_31159__$1;
(statearr_31198_31269[(2)] = null);

(statearr_31198_31269[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (29))){
var inst_31143 = (state_31159[(2)]);
var state_31159__$1 = state_31159;
var statearr_31199_31270 = state_31159__$1;
(statearr_31199_31270[(2)] = inst_31143);

(statearr_31199_31270[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (44))){
var inst_31152 = (state_31159[(2)]);
var state_31159__$1 = (function (){var statearr_31200 = state_31159;
(statearr_31200[(28)] = inst_31152);

return statearr_31200;
})();
var statearr_31201_31271 = state_31159__$1;
(statearr_31201_31271[(2)] = null);

(statearr_31201_31271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (6))){
var inst_31091 = (state_31159[(29)]);
var inst_31090 = cljs.core.deref.call(null,cs);
var inst_31091__$1 = cljs.core.keys.call(null,inst_31090);
var inst_31092 = cljs.core.count.call(null,inst_31091__$1);
var inst_31093 = cljs.core.reset_BANG_.call(null,dctr,inst_31092);
var inst_31098 = cljs.core.seq.call(null,inst_31091__$1);
var inst_31099 = inst_31098;
var inst_31100 = null;
var inst_31101 = (0);
var inst_31102 = (0);
var state_31159__$1 = (function (){var statearr_31202 = state_31159;
(statearr_31202[(29)] = inst_31091__$1);

(statearr_31202[(10)] = inst_31102);

(statearr_31202[(20)] = inst_31101);

(statearr_31202[(30)] = inst_31093);

(statearr_31202[(21)] = inst_31099);

(statearr_31202[(12)] = inst_31100);

return statearr_31202;
})();
var statearr_31203_31272 = state_31159__$1;
(statearr_31203_31272[(2)] = null);

(statearr_31203_31272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (28))){
var inst_31118 = (state_31159[(25)]);
var inst_31099 = (state_31159[(21)]);
var inst_31118__$1 = cljs.core.seq.call(null,inst_31099);
var state_31159__$1 = (function (){var statearr_31204 = state_31159;
(statearr_31204[(25)] = inst_31118__$1);

return statearr_31204;
})();
if(inst_31118__$1){
var statearr_31205_31273 = state_31159__$1;
(statearr_31205_31273[(1)] = (33));

} else {
var statearr_31206_31274 = state_31159__$1;
(statearr_31206_31274[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (25))){
var inst_31102 = (state_31159[(10)]);
var inst_31101 = (state_31159[(20)]);
var inst_31104 = (inst_31102 < inst_31101);
var inst_31105 = inst_31104;
var state_31159__$1 = state_31159;
if(cljs.core.truth_(inst_31105)){
var statearr_31207_31275 = state_31159__$1;
(statearr_31207_31275[(1)] = (27));

} else {
var statearr_31208_31276 = state_31159__$1;
(statearr_31208_31276[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (34))){
var state_31159__$1 = state_31159;
var statearr_31209_31277 = state_31159__$1;
(statearr_31209_31277[(2)] = null);

(statearr_31209_31277[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (17))){
var state_31159__$1 = state_31159;
var statearr_31210_31278 = state_31159__$1;
(statearr_31210_31278[(2)] = null);

(statearr_31210_31278[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (3))){
var inst_31157 = (state_31159[(2)]);
var state_31159__$1 = state_31159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31159__$1,inst_31157);
} else {
if((state_val_31160 === (12))){
var inst_31086 = (state_31159[(2)]);
var state_31159__$1 = state_31159;
var statearr_31211_31279 = state_31159__$1;
(statearr_31211_31279[(2)] = inst_31086);

(statearr_31211_31279[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (2))){
var state_31159__$1 = state_31159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31159__$1,(4),ch);
} else {
if((state_val_31160 === (23))){
var state_31159__$1 = state_31159;
var statearr_31212_31280 = state_31159__$1;
(statearr_31212_31280[(2)] = null);

(statearr_31212_31280[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (35))){
var inst_31141 = (state_31159[(2)]);
var state_31159__$1 = state_31159;
var statearr_31213_31281 = state_31159__$1;
(statearr_31213_31281[(2)] = inst_31141);

(statearr_31213_31281[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (19))){
var inst_31060 = (state_31159[(7)]);
var inst_31064 = cljs.core.chunk_first.call(null,inst_31060);
var inst_31065 = cljs.core.chunk_rest.call(null,inst_31060);
var inst_31066 = cljs.core.count.call(null,inst_31064);
var inst_31040 = inst_31065;
var inst_31041 = inst_31064;
var inst_31042 = inst_31066;
var inst_31043 = (0);
var state_31159__$1 = (function (){var statearr_31214 = state_31159;
(statearr_31214[(13)] = inst_31043);

(statearr_31214[(15)] = inst_31040);

(statearr_31214[(16)] = inst_31041);

(statearr_31214[(17)] = inst_31042);

return statearr_31214;
})();
var statearr_31215_31282 = state_31159__$1;
(statearr_31215_31282[(2)] = null);

(statearr_31215_31282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (11))){
var inst_31060 = (state_31159[(7)]);
var inst_31040 = (state_31159[(15)]);
var inst_31060__$1 = cljs.core.seq.call(null,inst_31040);
var state_31159__$1 = (function (){var statearr_31216 = state_31159;
(statearr_31216[(7)] = inst_31060__$1);

return statearr_31216;
})();
if(inst_31060__$1){
var statearr_31217_31283 = state_31159__$1;
(statearr_31217_31283[(1)] = (16));

} else {
var statearr_31218_31284 = state_31159__$1;
(statearr_31218_31284[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (9))){
var inst_31088 = (state_31159[(2)]);
var state_31159__$1 = state_31159;
var statearr_31219_31285 = state_31159__$1;
(statearr_31219_31285[(2)] = inst_31088);

(statearr_31219_31285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (5))){
var inst_31038 = cljs.core.deref.call(null,cs);
var inst_31039 = cljs.core.seq.call(null,inst_31038);
var inst_31040 = inst_31039;
var inst_31041 = null;
var inst_31042 = (0);
var inst_31043 = (0);
var state_31159__$1 = (function (){var statearr_31220 = state_31159;
(statearr_31220[(13)] = inst_31043);

(statearr_31220[(15)] = inst_31040);

(statearr_31220[(16)] = inst_31041);

(statearr_31220[(17)] = inst_31042);

return statearr_31220;
})();
var statearr_31221_31286 = state_31159__$1;
(statearr_31221_31286[(2)] = null);

(statearr_31221_31286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (14))){
var state_31159__$1 = state_31159;
var statearr_31222_31287 = state_31159__$1;
(statearr_31222_31287[(2)] = null);

(statearr_31222_31287[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (45))){
var inst_31149 = (state_31159[(2)]);
var state_31159__$1 = state_31159;
var statearr_31223_31288 = state_31159__$1;
(statearr_31223_31288[(2)] = inst_31149);

(statearr_31223_31288[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (26))){
var inst_31091 = (state_31159[(29)]);
var inst_31145 = (state_31159[(2)]);
var inst_31146 = cljs.core.seq.call(null,inst_31091);
var state_31159__$1 = (function (){var statearr_31224 = state_31159;
(statearr_31224[(31)] = inst_31145);

return statearr_31224;
})();
if(inst_31146){
var statearr_31225_31289 = state_31159__$1;
(statearr_31225_31289[(1)] = (42));

} else {
var statearr_31226_31290 = state_31159__$1;
(statearr_31226_31290[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (16))){
var inst_31060 = (state_31159[(7)]);
var inst_31062 = cljs.core.chunked_seq_QMARK_.call(null,inst_31060);
var state_31159__$1 = state_31159;
if(inst_31062){
var statearr_31227_31291 = state_31159__$1;
(statearr_31227_31291[(1)] = (19));

} else {
var statearr_31228_31292 = state_31159__$1;
(statearr_31228_31292[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (38))){
var inst_31138 = (state_31159[(2)]);
var state_31159__$1 = state_31159;
var statearr_31229_31293 = state_31159__$1;
(statearr_31229_31293[(2)] = inst_31138);

(statearr_31229_31293[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (30))){
var state_31159__$1 = state_31159;
var statearr_31230_31294 = state_31159__$1;
(statearr_31230_31294[(2)] = null);

(statearr_31230_31294[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (10))){
var inst_31043 = (state_31159[(13)]);
var inst_31041 = (state_31159[(16)]);
var inst_31049 = cljs.core._nth.call(null,inst_31041,inst_31043);
var inst_31050 = cljs.core.nth.call(null,inst_31049,(0),null);
var inst_31051 = cljs.core.nth.call(null,inst_31049,(1),null);
var state_31159__$1 = (function (){var statearr_31231 = state_31159;
(statearr_31231[(26)] = inst_31050);

return statearr_31231;
})();
if(cljs.core.truth_(inst_31051)){
var statearr_31232_31295 = state_31159__$1;
(statearr_31232_31295[(1)] = (13));

} else {
var statearr_31233_31296 = state_31159__$1;
(statearr_31233_31296[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (18))){
var inst_31084 = (state_31159[(2)]);
var state_31159__$1 = state_31159;
var statearr_31234_31297 = state_31159__$1;
(statearr_31234_31297[(2)] = inst_31084);

(statearr_31234_31297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (42))){
var state_31159__$1 = state_31159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31159__$1,(45),dchan);
} else {
if((state_val_31160 === (37))){
var inst_31127 = (state_31159[(23)]);
var inst_31118 = (state_31159[(25)]);
var inst_31031 = (state_31159[(11)]);
var inst_31127__$1 = cljs.core.first.call(null,inst_31118);
var inst_31128 = cljs.core.async.put_BANG_.call(null,inst_31127__$1,inst_31031,done);
var state_31159__$1 = (function (){var statearr_31235 = state_31159;
(statearr_31235[(23)] = inst_31127__$1);

return statearr_31235;
})();
if(cljs.core.truth_(inst_31128)){
var statearr_31236_31298 = state_31159__$1;
(statearr_31236_31298[(1)] = (39));

} else {
var statearr_31237_31299 = state_31159__$1;
(statearr_31237_31299[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31160 === (8))){
var inst_31043 = (state_31159[(13)]);
var inst_31042 = (state_31159[(17)]);
var inst_31045 = (inst_31043 < inst_31042);
var inst_31046 = inst_31045;
var state_31159__$1 = state_31159;
if(cljs.core.truth_(inst_31046)){
var statearr_31238_31300 = state_31159__$1;
(statearr_31238_31300[(1)] = (10));

} else {
var statearr_31239_31301 = state_31159__$1;
(statearr_31239_31301[(1)] = (11));

}

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
});})(c__29940__auto___31247,cs,m,dchan,dctr,done))
;
return ((function (switch__29828__auto__,c__29940__auto___31247,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29829__auto__ = null;
var cljs$core$async$mult_$_state_machine__29829__auto____0 = (function (){
var statearr_31243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31243[(0)] = cljs$core$async$mult_$_state_machine__29829__auto__);

(statearr_31243[(1)] = (1));

return statearr_31243;
});
var cljs$core$async$mult_$_state_machine__29829__auto____1 = (function (state_31159){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_31159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e31244){if((e31244 instanceof Object)){
var ex__29832__auto__ = e31244;
var statearr_31245_31302 = state_31159;
(statearr_31245_31302[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31303 = state_31159;
state_31159 = G__31303;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29829__auto__ = function(state_31159){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29829__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29829__auto____1.call(this,state_31159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29829__auto____0;
cljs$core$async$mult_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29829__auto____1;
return cljs$core$async$mult_$_state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto___31247,cs,m,dchan,dctr,done))
})();
var state__29942__auto__ = (function (){var statearr_31246 = f__29941__auto__.call(null);
(statearr_31246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___31247);

return statearr_31246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto___31247,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args31304 = [];
var len__26879__auto___31307 = arguments.length;
var i__26880__auto___31308 = (0);
while(true){
if((i__26880__auto___31308 < len__26879__auto___31307)){
args31304.push((arguments[i__26880__auto___31308]));

var G__31309 = (i__26880__auto___31308 + (1));
i__26880__auto___31308 = G__31309;
continue;
} else {
}
break;
}

var G__31306 = args31304.length;
switch (G__31306) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31304.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__26472__auto__ = (((m == null))?null:m);
var m__26473__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26472__auto__)]);
if(!((m__26473__auto__ == null))){
return m__26473__auto__.call(null,m,ch);
} else {
var m__26473__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26473__auto____$1 == null))){
return m__26473__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__26472__auto__ = (((m == null))?null:m);
var m__26473__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26472__auto__)]);
if(!((m__26473__auto__ == null))){
return m__26473__auto__.call(null,m,ch);
} else {
var m__26473__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26473__auto____$1 == null))){
return m__26473__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__26472__auto__ = (((m == null))?null:m);
var m__26473__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26472__auto__)]);
if(!((m__26473__auto__ == null))){
return m__26473__auto__.call(null,m);
} else {
var m__26473__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26473__auto____$1 == null))){
return m__26473__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__26472__auto__ = (((m == null))?null:m);
var m__26473__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26472__auto__)]);
if(!((m__26473__auto__ == null))){
return m__26473__auto__.call(null,m,state_map);
} else {
var m__26473__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26473__auto____$1 == null))){
return m__26473__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__26472__auto__ = (((m == null))?null:m);
var m__26473__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26472__auto__)]);
if(!((m__26473__auto__ == null))){
return m__26473__auto__.call(null,m,mode);
} else {
var m__26473__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26473__auto____$1 == null))){
return m__26473__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26886__auto__ = [];
var len__26879__auto___31321 = arguments.length;
var i__26880__auto___31322 = (0);
while(true){
if((i__26880__auto___31322 < len__26879__auto___31321)){
args__26886__auto__.push((arguments[i__26880__auto___31322]));

var G__31323 = (i__26880__auto___31322 + (1));
i__26880__auto___31322 = G__31323;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((3) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26887__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31315){
var map__31316 = p__31315;
var map__31316__$1 = ((((!((map__31316 == null)))?((((map__31316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31316):map__31316);
var opts = map__31316__$1;
var statearr_31318_31324 = state;
(statearr_31318_31324[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__31316,map__31316__$1,opts){
return (function (val){
var statearr_31319_31325 = state;
(statearr_31319_31325[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31316,map__31316__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_31320_31326 = state;
(statearr_31320_31326[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31311){
var G__31312 = cljs.core.first.call(null,seq31311);
var seq31311__$1 = cljs.core.next.call(null,seq31311);
var G__31313 = cljs.core.first.call(null,seq31311__$1);
var seq31311__$2 = cljs.core.next.call(null,seq31311__$1);
var G__31314 = cljs.core.first.call(null,seq31311__$2);
var seq31311__$3 = cljs.core.next.call(null,seq31311__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31312,G__31313,G__31314,seq31311__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31490 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31490 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31491){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31491 = meta31491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31492,meta31491__$1){
var self__ = this;
var _31492__$1 = this;
return (new cljs.core.async.t_cljs$core$async31490(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31491__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31492){
var self__ = this;
var _31492__$1 = this;
return self__.meta31491;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31490.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31490.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31490.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31490.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31490.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31490.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31490.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31490.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31490.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31491","meta31491",-1276854292,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31490.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31490";

cljs.core.async.t_cljs$core$async31490.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"cljs.core.async/t_cljs$core$async31490");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31490 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31490(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31491){
return (new cljs.core.async.t_cljs$core$async31490(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31491));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31490(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29940__auto___31653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto___31653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto___31653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31590){
var state_val_31591 = (state_31590[(1)]);
if((state_val_31591 === (7))){
var inst_31508 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31592_31654 = state_31590__$1;
(statearr_31592_31654[(2)] = inst_31508);

(statearr_31592_31654[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (20))){
var inst_31520 = (state_31590[(7)]);
var state_31590__$1 = state_31590;
var statearr_31593_31655 = state_31590__$1;
(statearr_31593_31655[(2)] = inst_31520);

(statearr_31593_31655[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (27))){
var state_31590__$1 = state_31590;
var statearr_31594_31656 = state_31590__$1;
(statearr_31594_31656[(2)] = null);

(statearr_31594_31656[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (1))){
var inst_31496 = (state_31590[(8)]);
var inst_31496__$1 = calc_state.call(null);
var inst_31498 = (inst_31496__$1 == null);
var inst_31499 = cljs.core.not.call(null,inst_31498);
var state_31590__$1 = (function (){var statearr_31595 = state_31590;
(statearr_31595[(8)] = inst_31496__$1);

return statearr_31595;
})();
if(inst_31499){
var statearr_31596_31657 = state_31590__$1;
(statearr_31596_31657[(1)] = (2));

} else {
var statearr_31597_31658 = state_31590__$1;
(statearr_31597_31658[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (24))){
var inst_31543 = (state_31590[(9)]);
var inst_31550 = (state_31590[(10)]);
var inst_31564 = (state_31590[(11)]);
var inst_31564__$1 = inst_31543.call(null,inst_31550);
var state_31590__$1 = (function (){var statearr_31598 = state_31590;
(statearr_31598[(11)] = inst_31564__$1);

return statearr_31598;
})();
if(cljs.core.truth_(inst_31564__$1)){
var statearr_31599_31659 = state_31590__$1;
(statearr_31599_31659[(1)] = (29));

} else {
var statearr_31600_31660 = state_31590__$1;
(statearr_31600_31660[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (4))){
var inst_31511 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
if(cljs.core.truth_(inst_31511)){
var statearr_31601_31661 = state_31590__$1;
(statearr_31601_31661[(1)] = (8));

} else {
var statearr_31602_31662 = state_31590__$1;
(statearr_31602_31662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (15))){
var inst_31537 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
if(cljs.core.truth_(inst_31537)){
var statearr_31603_31663 = state_31590__$1;
(statearr_31603_31663[(1)] = (19));

} else {
var statearr_31604_31664 = state_31590__$1;
(statearr_31604_31664[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (21))){
var inst_31542 = (state_31590[(12)]);
var inst_31542__$1 = (state_31590[(2)]);
var inst_31543 = cljs.core.get.call(null,inst_31542__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31544 = cljs.core.get.call(null,inst_31542__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31545 = cljs.core.get.call(null,inst_31542__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31590__$1 = (function (){var statearr_31605 = state_31590;
(statearr_31605[(9)] = inst_31543);

(statearr_31605[(12)] = inst_31542__$1);

(statearr_31605[(13)] = inst_31544);

return statearr_31605;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31590__$1,(22),inst_31545);
} else {
if((state_val_31591 === (31))){
var inst_31572 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
if(cljs.core.truth_(inst_31572)){
var statearr_31606_31665 = state_31590__$1;
(statearr_31606_31665[(1)] = (32));

} else {
var statearr_31607_31666 = state_31590__$1;
(statearr_31607_31666[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (32))){
var inst_31549 = (state_31590[(14)]);
var state_31590__$1 = state_31590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31590__$1,(35),out,inst_31549);
} else {
if((state_val_31591 === (33))){
var inst_31542 = (state_31590[(12)]);
var inst_31520 = inst_31542;
var state_31590__$1 = (function (){var statearr_31608 = state_31590;
(statearr_31608[(7)] = inst_31520);

return statearr_31608;
})();
var statearr_31609_31667 = state_31590__$1;
(statearr_31609_31667[(2)] = null);

(statearr_31609_31667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (13))){
var inst_31520 = (state_31590[(7)]);
var inst_31527 = inst_31520.cljs$lang$protocol_mask$partition0$;
var inst_31528 = (inst_31527 & (64));
var inst_31529 = inst_31520.cljs$core$ISeq$;
var inst_31530 = (inst_31528) || (inst_31529);
var state_31590__$1 = state_31590;
if(cljs.core.truth_(inst_31530)){
var statearr_31610_31668 = state_31590__$1;
(statearr_31610_31668[(1)] = (16));

} else {
var statearr_31611_31669 = state_31590__$1;
(statearr_31611_31669[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (22))){
var inst_31549 = (state_31590[(14)]);
var inst_31550 = (state_31590[(10)]);
var inst_31548 = (state_31590[(2)]);
var inst_31549__$1 = cljs.core.nth.call(null,inst_31548,(0),null);
var inst_31550__$1 = cljs.core.nth.call(null,inst_31548,(1),null);
var inst_31551 = (inst_31549__$1 == null);
var inst_31552 = cljs.core._EQ_.call(null,inst_31550__$1,change);
var inst_31553 = (inst_31551) || (inst_31552);
var state_31590__$1 = (function (){var statearr_31612 = state_31590;
(statearr_31612[(14)] = inst_31549__$1);

(statearr_31612[(10)] = inst_31550__$1);

return statearr_31612;
})();
if(cljs.core.truth_(inst_31553)){
var statearr_31613_31670 = state_31590__$1;
(statearr_31613_31670[(1)] = (23));

} else {
var statearr_31614_31671 = state_31590__$1;
(statearr_31614_31671[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (36))){
var inst_31542 = (state_31590[(12)]);
var inst_31520 = inst_31542;
var state_31590__$1 = (function (){var statearr_31615 = state_31590;
(statearr_31615[(7)] = inst_31520);

return statearr_31615;
})();
var statearr_31616_31672 = state_31590__$1;
(statearr_31616_31672[(2)] = null);

(statearr_31616_31672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (29))){
var inst_31564 = (state_31590[(11)]);
var state_31590__$1 = state_31590;
var statearr_31617_31673 = state_31590__$1;
(statearr_31617_31673[(2)] = inst_31564);

(statearr_31617_31673[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (6))){
var state_31590__$1 = state_31590;
var statearr_31618_31674 = state_31590__$1;
(statearr_31618_31674[(2)] = false);

(statearr_31618_31674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (28))){
var inst_31560 = (state_31590[(2)]);
var inst_31561 = calc_state.call(null);
var inst_31520 = inst_31561;
var state_31590__$1 = (function (){var statearr_31619 = state_31590;
(statearr_31619[(7)] = inst_31520);

(statearr_31619[(15)] = inst_31560);

return statearr_31619;
})();
var statearr_31620_31675 = state_31590__$1;
(statearr_31620_31675[(2)] = null);

(statearr_31620_31675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (25))){
var inst_31586 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31621_31676 = state_31590__$1;
(statearr_31621_31676[(2)] = inst_31586);

(statearr_31621_31676[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (34))){
var inst_31584 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31622_31677 = state_31590__$1;
(statearr_31622_31677[(2)] = inst_31584);

(statearr_31622_31677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (17))){
var state_31590__$1 = state_31590;
var statearr_31623_31678 = state_31590__$1;
(statearr_31623_31678[(2)] = false);

(statearr_31623_31678[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (3))){
var state_31590__$1 = state_31590;
var statearr_31624_31679 = state_31590__$1;
(statearr_31624_31679[(2)] = false);

(statearr_31624_31679[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (12))){
var inst_31588 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31590__$1,inst_31588);
} else {
if((state_val_31591 === (2))){
var inst_31496 = (state_31590[(8)]);
var inst_31501 = inst_31496.cljs$lang$protocol_mask$partition0$;
var inst_31502 = (inst_31501 & (64));
var inst_31503 = inst_31496.cljs$core$ISeq$;
var inst_31504 = (inst_31502) || (inst_31503);
var state_31590__$1 = state_31590;
if(cljs.core.truth_(inst_31504)){
var statearr_31625_31680 = state_31590__$1;
(statearr_31625_31680[(1)] = (5));

} else {
var statearr_31626_31681 = state_31590__$1;
(statearr_31626_31681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (23))){
var inst_31549 = (state_31590[(14)]);
var inst_31555 = (inst_31549 == null);
var state_31590__$1 = state_31590;
if(cljs.core.truth_(inst_31555)){
var statearr_31627_31682 = state_31590__$1;
(statearr_31627_31682[(1)] = (26));

} else {
var statearr_31628_31683 = state_31590__$1;
(statearr_31628_31683[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (35))){
var inst_31575 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
if(cljs.core.truth_(inst_31575)){
var statearr_31629_31684 = state_31590__$1;
(statearr_31629_31684[(1)] = (36));

} else {
var statearr_31630_31685 = state_31590__$1;
(statearr_31630_31685[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (19))){
var inst_31520 = (state_31590[(7)]);
var inst_31539 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31520);
var state_31590__$1 = state_31590;
var statearr_31631_31686 = state_31590__$1;
(statearr_31631_31686[(2)] = inst_31539);

(statearr_31631_31686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (11))){
var inst_31520 = (state_31590[(7)]);
var inst_31524 = (inst_31520 == null);
var inst_31525 = cljs.core.not.call(null,inst_31524);
var state_31590__$1 = state_31590;
if(inst_31525){
var statearr_31632_31687 = state_31590__$1;
(statearr_31632_31687[(1)] = (13));

} else {
var statearr_31633_31688 = state_31590__$1;
(statearr_31633_31688[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (9))){
var inst_31496 = (state_31590[(8)]);
var state_31590__$1 = state_31590;
var statearr_31634_31689 = state_31590__$1;
(statearr_31634_31689[(2)] = inst_31496);

(statearr_31634_31689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (5))){
var state_31590__$1 = state_31590;
var statearr_31635_31690 = state_31590__$1;
(statearr_31635_31690[(2)] = true);

(statearr_31635_31690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (14))){
var state_31590__$1 = state_31590;
var statearr_31636_31691 = state_31590__$1;
(statearr_31636_31691[(2)] = false);

(statearr_31636_31691[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (26))){
var inst_31550 = (state_31590[(10)]);
var inst_31557 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31550);
var state_31590__$1 = state_31590;
var statearr_31637_31692 = state_31590__$1;
(statearr_31637_31692[(2)] = inst_31557);

(statearr_31637_31692[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (16))){
var state_31590__$1 = state_31590;
var statearr_31638_31693 = state_31590__$1;
(statearr_31638_31693[(2)] = true);

(statearr_31638_31693[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (38))){
var inst_31580 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31639_31694 = state_31590__$1;
(statearr_31639_31694[(2)] = inst_31580);

(statearr_31639_31694[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (30))){
var inst_31543 = (state_31590[(9)]);
var inst_31550 = (state_31590[(10)]);
var inst_31544 = (state_31590[(13)]);
var inst_31567 = cljs.core.empty_QMARK_.call(null,inst_31543);
var inst_31568 = inst_31544.call(null,inst_31550);
var inst_31569 = cljs.core.not.call(null,inst_31568);
var inst_31570 = (inst_31567) && (inst_31569);
var state_31590__$1 = state_31590;
var statearr_31640_31695 = state_31590__$1;
(statearr_31640_31695[(2)] = inst_31570);

(statearr_31640_31695[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (10))){
var inst_31496 = (state_31590[(8)]);
var inst_31516 = (state_31590[(2)]);
var inst_31517 = cljs.core.get.call(null,inst_31516,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31518 = cljs.core.get.call(null,inst_31516,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31519 = cljs.core.get.call(null,inst_31516,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31520 = inst_31496;
var state_31590__$1 = (function (){var statearr_31641 = state_31590;
(statearr_31641[(7)] = inst_31520);

(statearr_31641[(16)] = inst_31517);

(statearr_31641[(17)] = inst_31519);

(statearr_31641[(18)] = inst_31518);

return statearr_31641;
})();
var statearr_31642_31696 = state_31590__$1;
(statearr_31642_31696[(2)] = null);

(statearr_31642_31696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (18))){
var inst_31534 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31643_31697 = state_31590__$1;
(statearr_31643_31697[(2)] = inst_31534);

(statearr_31643_31697[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (37))){
var state_31590__$1 = state_31590;
var statearr_31644_31698 = state_31590__$1;
(statearr_31644_31698[(2)] = null);

(statearr_31644_31698[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (8))){
var inst_31496 = (state_31590[(8)]);
var inst_31513 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31496);
var state_31590__$1 = state_31590;
var statearr_31645_31699 = state_31590__$1;
(statearr_31645_31699[(2)] = inst_31513);

(statearr_31645_31699[(1)] = (10));


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
});})(c__29940__auto___31653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29828__auto__,c__29940__auto___31653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29829__auto__ = null;
var cljs$core$async$mix_$_state_machine__29829__auto____0 = (function (){
var statearr_31649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31649[(0)] = cljs$core$async$mix_$_state_machine__29829__auto__);

(statearr_31649[(1)] = (1));

return statearr_31649;
});
var cljs$core$async$mix_$_state_machine__29829__auto____1 = (function (state_31590){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_31590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e31650){if((e31650 instanceof Object)){
var ex__29832__auto__ = e31650;
var statearr_31651_31700 = state_31590;
(statearr_31651_31700[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31701 = state_31590;
state_31590 = G__31701;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29829__auto__ = function(state_31590){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29829__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29829__auto____1.call(this,state_31590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29829__auto____0;
cljs$core$async$mix_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29829__auto____1;
return cljs$core$async$mix_$_state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto___31653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29942__auto__ = (function (){var statearr_31652 = f__29941__auto__.call(null);
(statearr_31652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___31653);

return statearr_31652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto___31653,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__26472__auto__ = (((p == null))?null:p);
var m__26473__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26472__auto__)]);
if(!((m__26473__auto__ == null))){
return m__26473__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26473__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26473__auto____$1 == null))){
return m__26473__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__26472__auto__ = (((p == null))?null:p);
var m__26473__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26472__auto__)]);
if(!((m__26473__auto__ == null))){
return m__26473__auto__.call(null,p,v,ch);
} else {
var m__26473__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26473__auto____$1 == null))){
return m__26473__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31702 = [];
var len__26879__auto___31705 = arguments.length;
var i__26880__auto___31706 = (0);
while(true){
if((i__26880__auto___31706 < len__26879__auto___31705)){
args31702.push((arguments[i__26880__auto___31706]));

var G__31707 = (i__26880__auto___31706 + (1));
i__26880__auto___31706 = G__31707;
continue;
} else {
}
break;
}

var G__31704 = args31702.length;
switch (G__31704) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31702.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26472__auto__ = (((p == null))?null:p);
var m__26473__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26472__auto__)]);
if(!((m__26473__auto__ == null))){
return m__26473__auto__.call(null,p);
} else {
var m__26473__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26473__auto____$1 == null))){
return m__26473__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__26472__auto__ = (((p == null))?null:p);
var m__26473__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26472__auto__)]);
if(!((m__26473__auto__ == null))){
return m__26473__auto__.call(null,p,v);
} else {
var m__26473__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26473__auto____$1 == null))){
return m__26473__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args31710 = [];
var len__26879__auto___31835 = arguments.length;
var i__26880__auto___31836 = (0);
while(true){
if((i__26880__auto___31836 < len__26879__auto___31835)){
args31710.push((arguments[i__26880__auto___31836]));

var G__31837 = (i__26880__auto___31836 + (1));
i__26880__auto___31836 = G__31837;
continue;
} else {
}
break;
}

var G__31712 = args31710.length;
switch (G__31712) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31710.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25809__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25809__auto__,mults){
return (function (p1__31709_SHARP_){
if(cljs.core.truth_(p1__31709_SHARP_.call(null,topic))){
return p1__31709_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31709_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25809__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31713 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31713 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31714){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31714 = meta31714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31715,meta31714__$1){
var self__ = this;
var _31715__$1 = this;
return (new cljs.core.async.t_cljs$core$async31713(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31714__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31715){
var self__ = this;
var _31715__$1 = this;
return self__.meta31714;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31713.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31713.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31714","meta31714",-270640725,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31713.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31713";

cljs.core.async.t_cljs$core$async31713.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"cljs.core.async/t_cljs$core$async31713");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31713 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31713(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31714){
return (new cljs.core.async.t_cljs$core$async31713(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31714));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31713(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29940__auto___31839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto___31839,mults,ensure_mult,p){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto___31839,mults,ensure_mult,p){
return (function (state_31787){
var state_val_31788 = (state_31787[(1)]);
if((state_val_31788 === (7))){
var inst_31783 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_31789_31840 = state_31787__$1;
(statearr_31789_31840[(2)] = inst_31783);

(statearr_31789_31840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (20))){
var state_31787__$1 = state_31787;
var statearr_31790_31841 = state_31787__$1;
(statearr_31790_31841[(2)] = null);

(statearr_31790_31841[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (1))){
var state_31787__$1 = state_31787;
var statearr_31791_31842 = state_31787__$1;
(statearr_31791_31842[(2)] = null);

(statearr_31791_31842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (24))){
var inst_31766 = (state_31787[(7)]);
var inst_31775 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31766);
var state_31787__$1 = state_31787;
var statearr_31792_31843 = state_31787__$1;
(statearr_31792_31843[(2)] = inst_31775);

(statearr_31792_31843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (4))){
var inst_31718 = (state_31787[(8)]);
var inst_31718__$1 = (state_31787[(2)]);
var inst_31719 = (inst_31718__$1 == null);
var state_31787__$1 = (function (){var statearr_31793 = state_31787;
(statearr_31793[(8)] = inst_31718__$1);

return statearr_31793;
})();
if(cljs.core.truth_(inst_31719)){
var statearr_31794_31844 = state_31787__$1;
(statearr_31794_31844[(1)] = (5));

} else {
var statearr_31795_31845 = state_31787__$1;
(statearr_31795_31845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (15))){
var inst_31760 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_31796_31846 = state_31787__$1;
(statearr_31796_31846[(2)] = inst_31760);

(statearr_31796_31846[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (21))){
var inst_31780 = (state_31787[(2)]);
var state_31787__$1 = (function (){var statearr_31797 = state_31787;
(statearr_31797[(9)] = inst_31780);

return statearr_31797;
})();
var statearr_31798_31847 = state_31787__$1;
(statearr_31798_31847[(2)] = null);

(statearr_31798_31847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (13))){
var inst_31742 = (state_31787[(10)]);
var inst_31744 = cljs.core.chunked_seq_QMARK_.call(null,inst_31742);
var state_31787__$1 = state_31787;
if(inst_31744){
var statearr_31799_31848 = state_31787__$1;
(statearr_31799_31848[(1)] = (16));

} else {
var statearr_31800_31849 = state_31787__$1;
(statearr_31800_31849[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (22))){
var inst_31772 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
if(cljs.core.truth_(inst_31772)){
var statearr_31801_31850 = state_31787__$1;
(statearr_31801_31850[(1)] = (23));

} else {
var statearr_31802_31851 = state_31787__$1;
(statearr_31802_31851[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (6))){
var inst_31768 = (state_31787[(11)]);
var inst_31766 = (state_31787[(7)]);
var inst_31718 = (state_31787[(8)]);
var inst_31766__$1 = topic_fn.call(null,inst_31718);
var inst_31767 = cljs.core.deref.call(null,mults);
var inst_31768__$1 = cljs.core.get.call(null,inst_31767,inst_31766__$1);
var state_31787__$1 = (function (){var statearr_31803 = state_31787;
(statearr_31803[(11)] = inst_31768__$1);

(statearr_31803[(7)] = inst_31766__$1);

return statearr_31803;
})();
if(cljs.core.truth_(inst_31768__$1)){
var statearr_31804_31852 = state_31787__$1;
(statearr_31804_31852[(1)] = (19));

} else {
var statearr_31805_31853 = state_31787__$1;
(statearr_31805_31853[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (25))){
var inst_31777 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_31806_31854 = state_31787__$1;
(statearr_31806_31854[(2)] = inst_31777);

(statearr_31806_31854[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (17))){
var inst_31742 = (state_31787[(10)]);
var inst_31751 = cljs.core.first.call(null,inst_31742);
var inst_31752 = cljs.core.async.muxch_STAR_.call(null,inst_31751);
var inst_31753 = cljs.core.async.close_BANG_.call(null,inst_31752);
var inst_31754 = cljs.core.next.call(null,inst_31742);
var inst_31728 = inst_31754;
var inst_31729 = null;
var inst_31730 = (0);
var inst_31731 = (0);
var state_31787__$1 = (function (){var statearr_31807 = state_31787;
(statearr_31807[(12)] = inst_31731);

(statearr_31807[(13)] = inst_31729);

(statearr_31807[(14)] = inst_31728);

(statearr_31807[(15)] = inst_31753);

(statearr_31807[(16)] = inst_31730);

return statearr_31807;
})();
var statearr_31808_31855 = state_31787__$1;
(statearr_31808_31855[(2)] = null);

(statearr_31808_31855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (3))){
var inst_31785 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31787__$1,inst_31785);
} else {
if((state_val_31788 === (12))){
var inst_31762 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_31809_31856 = state_31787__$1;
(statearr_31809_31856[(2)] = inst_31762);

(statearr_31809_31856[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (2))){
var state_31787__$1 = state_31787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31787__$1,(4),ch);
} else {
if((state_val_31788 === (23))){
var state_31787__$1 = state_31787;
var statearr_31810_31857 = state_31787__$1;
(statearr_31810_31857[(2)] = null);

(statearr_31810_31857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (19))){
var inst_31768 = (state_31787[(11)]);
var inst_31718 = (state_31787[(8)]);
var inst_31770 = cljs.core.async.muxch_STAR_.call(null,inst_31768);
var state_31787__$1 = state_31787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31787__$1,(22),inst_31770,inst_31718);
} else {
if((state_val_31788 === (11))){
var inst_31742 = (state_31787[(10)]);
var inst_31728 = (state_31787[(14)]);
var inst_31742__$1 = cljs.core.seq.call(null,inst_31728);
var state_31787__$1 = (function (){var statearr_31811 = state_31787;
(statearr_31811[(10)] = inst_31742__$1);

return statearr_31811;
})();
if(inst_31742__$1){
var statearr_31812_31858 = state_31787__$1;
(statearr_31812_31858[(1)] = (13));

} else {
var statearr_31813_31859 = state_31787__$1;
(statearr_31813_31859[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (9))){
var inst_31764 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_31814_31860 = state_31787__$1;
(statearr_31814_31860[(2)] = inst_31764);

(statearr_31814_31860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (5))){
var inst_31725 = cljs.core.deref.call(null,mults);
var inst_31726 = cljs.core.vals.call(null,inst_31725);
var inst_31727 = cljs.core.seq.call(null,inst_31726);
var inst_31728 = inst_31727;
var inst_31729 = null;
var inst_31730 = (0);
var inst_31731 = (0);
var state_31787__$1 = (function (){var statearr_31815 = state_31787;
(statearr_31815[(12)] = inst_31731);

(statearr_31815[(13)] = inst_31729);

(statearr_31815[(14)] = inst_31728);

(statearr_31815[(16)] = inst_31730);

return statearr_31815;
})();
var statearr_31816_31861 = state_31787__$1;
(statearr_31816_31861[(2)] = null);

(statearr_31816_31861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (14))){
var state_31787__$1 = state_31787;
var statearr_31820_31862 = state_31787__$1;
(statearr_31820_31862[(2)] = null);

(statearr_31820_31862[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (16))){
var inst_31742 = (state_31787[(10)]);
var inst_31746 = cljs.core.chunk_first.call(null,inst_31742);
var inst_31747 = cljs.core.chunk_rest.call(null,inst_31742);
var inst_31748 = cljs.core.count.call(null,inst_31746);
var inst_31728 = inst_31747;
var inst_31729 = inst_31746;
var inst_31730 = inst_31748;
var inst_31731 = (0);
var state_31787__$1 = (function (){var statearr_31821 = state_31787;
(statearr_31821[(12)] = inst_31731);

(statearr_31821[(13)] = inst_31729);

(statearr_31821[(14)] = inst_31728);

(statearr_31821[(16)] = inst_31730);

return statearr_31821;
})();
var statearr_31822_31863 = state_31787__$1;
(statearr_31822_31863[(2)] = null);

(statearr_31822_31863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (10))){
var inst_31731 = (state_31787[(12)]);
var inst_31729 = (state_31787[(13)]);
var inst_31728 = (state_31787[(14)]);
var inst_31730 = (state_31787[(16)]);
var inst_31736 = cljs.core._nth.call(null,inst_31729,inst_31731);
var inst_31737 = cljs.core.async.muxch_STAR_.call(null,inst_31736);
var inst_31738 = cljs.core.async.close_BANG_.call(null,inst_31737);
var inst_31739 = (inst_31731 + (1));
var tmp31817 = inst_31729;
var tmp31818 = inst_31728;
var tmp31819 = inst_31730;
var inst_31728__$1 = tmp31818;
var inst_31729__$1 = tmp31817;
var inst_31730__$1 = tmp31819;
var inst_31731__$1 = inst_31739;
var state_31787__$1 = (function (){var statearr_31823 = state_31787;
(statearr_31823[(12)] = inst_31731__$1);

(statearr_31823[(13)] = inst_31729__$1);

(statearr_31823[(17)] = inst_31738);

(statearr_31823[(14)] = inst_31728__$1);

(statearr_31823[(16)] = inst_31730__$1);

return statearr_31823;
})();
var statearr_31824_31864 = state_31787__$1;
(statearr_31824_31864[(2)] = null);

(statearr_31824_31864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (18))){
var inst_31757 = (state_31787[(2)]);
var state_31787__$1 = state_31787;
var statearr_31825_31865 = state_31787__$1;
(statearr_31825_31865[(2)] = inst_31757);

(statearr_31825_31865[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31788 === (8))){
var inst_31731 = (state_31787[(12)]);
var inst_31730 = (state_31787[(16)]);
var inst_31733 = (inst_31731 < inst_31730);
var inst_31734 = inst_31733;
var state_31787__$1 = state_31787;
if(cljs.core.truth_(inst_31734)){
var statearr_31826_31866 = state_31787__$1;
(statearr_31826_31866[(1)] = (10));

} else {
var statearr_31827_31867 = state_31787__$1;
(statearr_31827_31867[(1)] = (11));

}

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
});})(c__29940__auto___31839,mults,ensure_mult,p))
;
return ((function (switch__29828__auto__,c__29940__auto___31839,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29829__auto__ = null;
var cljs$core$async$state_machine__29829__auto____0 = (function (){
var statearr_31831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31831[(0)] = cljs$core$async$state_machine__29829__auto__);

(statearr_31831[(1)] = (1));

return statearr_31831;
});
var cljs$core$async$state_machine__29829__auto____1 = (function (state_31787){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_31787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e31832){if((e31832 instanceof Object)){
var ex__29832__auto__ = e31832;
var statearr_31833_31868 = state_31787;
(statearr_31833_31868[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31869 = state_31787;
state_31787 = G__31869;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
cljs$core$async$state_machine__29829__auto__ = function(state_31787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29829__auto____1.call(this,state_31787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29829__auto____0;
cljs$core$async$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29829__auto____1;
return cljs$core$async$state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto___31839,mults,ensure_mult,p))
})();
var state__29942__auto__ = (function (){var statearr_31834 = f__29941__auto__.call(null);
(statearr_31834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___31839);

return statearr_31834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto___31839,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args31870 = [];
var len__26879__auto___31873 = arguments.length;
var i__26880__auto___31874 = (0);
while(true){
if((i__26880__auto___31874 < len__26879__auto___31873)){
args31870.push((arguments[i__26880__auto___31874]));

var G__31875 = (i__26880__auto___31874 + (1));
i__26880__auto___31874 = G__31875;
continue;
} else {
}
break;
}

var G__31872 = args31870.length;
switch (G__31872) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31870.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args31877 = [];
var len__26879__auto___31880 = arguments.length;
var i__26880__auto___31881 = (0);
while(true){
if((i__26880__auto___31881 < len__26879__auto___31880)){
args31877.push((arguments[i__26880__auto___31881]));

var G__31882 = (i__26880__auto___31881 + (1));
i__26880__auto___31881 = G__31882;
continue;
} else {
}
break;
}

var G__31879 = args31877.length;
switch (G__31879) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31877.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args31884 = [];
var len__26879__auto___31955 = arguments.length;
var i__26880__auto___31956 = (0);
while(true){
if((i__26880__auto___31956 < len__26879__auto___31955)){
args31884.push((arguments[i__26880__auto___31956]));

var G__31957 = (i__26880__auto___31956 + (1));
i__26880__auto___31956 = G__31957;
continue;
} else {
}
break;
}

var G__31886 = args31884.length;
switch (G__31886) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31884.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29940__auto___31959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto___31959,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto___31959,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31925){
var state_val_31926 = (state_31925[(1)]);
if((state_val_31926 === (7))){
var state_31925__$1 = state_31925;
var statearr_31927_31960 = state_31925__$1;
(statearr_31927_31960[(2)] = null);

(statearr_31927_31960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (1))){
var state_31925__$1 = state_31925;
var statearr_31928_31961 = state_31925__$1;
(statearr_31928_31961[(2)] = null);

(statearr_31928_31961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (4))){
var inst_31889 = (state_31925[(7)]);
var inst_31891 = (inst_31889 < cnt);
var state_31925__$1 = state_31925;
if(cljs.core.truth_(inst_31891)){
var statearr_31929_31962 = state_31925__$1;
(statearr_31929_31962[(1)] = (6));

} else {
var statearr_31930_31963 = state_31925__$1;
(statearr_31930_31963[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (15))){
var inst_31921 = (state_31925[(2)]);
var state_31925__$1 = state_31925;
var statearr_31931_31964 = state_31925__$1;
(statearr_31931_31964[(2)] = inst_31921);

(statearr_31931_31964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (13))){
var inst_31914 = cljs.core.async.close_BANG_.call(null,out);
var state_31925__$1 = state_31925;
var statearr_31932_31965 = state_31925__$1;
(statearr_31932_31965[(2)] = inst_31914);

(statearr_31932_31965[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (6))){
var state_31925__$1 = state_31925;
var statearr_31933_31966 = state_31925__$1;
(statearr_31933_31966[(2)] = null);

(statearr_31933_31966[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (3))){
var inst_31923 = (state_31925[(2)]);
var state_31925__$1 = state_31925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31925__$1,inst_31923);
} else {
if((state_val_31926 === (12))){
var inst_31911 = (state_31925[(8)]);
var inst_31911__$1 = (state_31925[(2)]);
var inst_31912 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31911__$1);
var state_31925__$1 = (function (){var statearr_31934 = state_31925;
(statearr_31934[(8)] = inst_31911__$1);

return statearr_31934;
})();
if(cljs.core.truth_(inst_31912)){
var statearr_31935_31967 = state_31925__$1;
(statearr_31935_31967[(1)] = (13));

} else {
var statearr_31936_31968 = state_31925__$1;
(statearr_31936_31968[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (2))){
var inst_31888 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31889 = (0);
var state_31925__$1 = (function (){var statearr_31937 = state_31925;
(statearr_31937[(7)] = inst_31889);

(statearr_31937[(9)] = inst_31888);

return statearr_31937;
})();
var statearr_31938_31969 = state_31925__$1;
(statearr_31938_31969[(2)] = null);

(statearr_31938_31969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (11))){
var inst_31889 = (state_31925[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31925,(10),Object,null,(9));
var inst_31898 = chs__$1.call(null,inst_31889);
var inst_31899 = done.call(null,inst_31889);
var inst_31900 = cljs.core.async.take_BANG_.call(null,inst_31898,inst_31899);
var state_31925__$1 = state_31925;
var statearr_31939_31970 = state_31925__$1;
(statearr_31939_31970[(2)] = inst_31900);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31925__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (9))){
var inst_31889 = (state_31925[(7)]);
var inst_31902 = (state_31925[(2)]);
var inst_31903 = (inst_31889 + (1));
var inst_31889__$1 = inst_31903;
var state_31925__$1 = (function (){var statearr_31940 = state_31925;
(statearr_31940[(7)] = inst_31889__$1);

(statearr_31940[(10)] = inst_31902);

return statearr_31940;
})();
var statearr_31941_31971 = state_31925__$1;
(statearr_31941_31971[(2)] = null);

(statearr_31941_31971[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (5))){
var inst_31909 = (state_31925[(2)]);
var state_31925__$1 = (function (){var statearr_31942 = state_31925;
(statearr_31942[(11)] = inst_31909);

return statearr_31942;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31925__$1,(12),dchan);
} else {
if((state_val_31926 === (14))){
var inst_31911 = (state_31925[(8)]);
var inst_31916 = cljs.core.apply.call(null,f,inst_31911);
var state_31925__$1 = state_31925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31925__$1,(16),out,inst_31916);
} else {
if((state_val_31926 === (16))){
var inst_31918 = (state_31925[(2)]);
var state_31925__$1 = (function (){var statearr_31943 = state_31925;
(statearr_31943[(12)] = inst_31918);

return statearr_31943;
})();
var statearr_31944_31972 = state_31925__$1;
(statearr_31944_31972[(2)] = null);

(statearr_31944_31972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (10))){
var inst_31893 = (state_31925[(2)]);
var inst_31894 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31925__$1 = (function (){var statearr_31945 = state_31925;
(statearr_31945[(13)] = inst_31893);

return statearr_31945;
})();
var statearr_31946_31973 = state_31925__$1;
(statearr_31946_31973[(2)] = inst_31894);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31925__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (8))){
var inst_31907 = (state_31925[(2)]);
var state_31925__$1 = state_31925;
var statearr_31947_31974 = state_31925__$1;
(statearr_31947_31974[(2)] = inst_31907);

(statearr_31947_31974[(1)] = (5));


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
});})(c__29940__auto___31959,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29828__auto__,c__29940__auto___31959,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29829__auto__ = null;
var cljs$core$async$state_machine__29829__auto____0 = (function (){
var statearr_31951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31951[(0)] = cljs$core$async$state_machine__29829__auto__);

(statearr_31951[(1)] = (1));

return statearr_31951;
});
var cljs$core$async$state_machine__29829__auto____1 = (function (state_31925){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_31925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e31952){if((e31952 instanceof Object)){
var ex__29832__auto__ = e31952;
var statearr_31953_31975 = state_31925;
(statearr_31953_31975[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31976 = state_31925;
state_31925 = G__31976;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
cljs$core$async$state_machine__29829__auto__ = function(state_31925){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29829__auto____1.call(this,state_31925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29829__auto____0;
cljs$core$async$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29829__auto____1;
return cljs$core$async$state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto___31959,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29942__auto__ = (function (){var statearr_31954 = f__29941__auto__.call(null);
(statearr_31954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___31959);

return statearr_31954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto___31959,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args31978 = [];
var len__26879__auto___32034 = arguments.length;
var i__26880__auto___32035 = (0);
while(true){
if((i__26880__auto___32035 < len__26879__auto___32034)){
args31978.push((arguments[i__26880__auto___32035]));

var G__32036 = (i__26880__auto___32035 + (1));
i__26880__auto___32035 = G__32036;
continue;
} else {
}
break;
}

var G__31980 = args31978.length;
switch (G__31980) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31978.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29940__auto___32038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto___32038,out){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto___32038,out){
return (function (state_32010){
var state_val_32011 = (state_32010[(1)]);
if((state_val_32011 === (7))){
var inst_31990 = (state_32010[(7)]);
var inst_31989 = (state_32010[(8)]);
var inst_31989__$1 = (state_32010[(2)]);
var inst_31990__$1 = cljs.core.nth.call(null,inst_31989__$1,(0),null);
var inst_31991 = cljs.core.nth.call(null,inst_31989__$1,(1),null);
var inst_31992 = (inst_31990__$1 == null);
var state_32010__$1 = (function (){var statearr_32012 = state_32010;
(statearr_32012[(9)] = inst_31991);

(statearr_32012[(7)] = inst_31990__$1);

(statearr_32012[(8)] = inst_31989__$1);

return statearr_32012;
})();
if(cljs.core.truth_(inst_31992)){
var statearr_32013_32039 = state_32010__$1;
(statearr_32013_32039[(1)] = (8));

} else {
var statearr_32014_32040 = state_32010__$1;
(statearr_32014_32040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32011 === (1))){
var inst_31981 = cljs.core.vec.call(null,chs);
var inst_31982 = inst_31981;
var state_32010__$1 = (function (){var statearr_32015 = state_32010;
(statearr_32015[(10)] = inst_31982);

return statearr_32015;
})();
var statearr_32016_32041 = state_32010__$1;
(statearr_32016_32041[(2)] = null);

(statearr_32016_32041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32011 === (4))){
var inst_31982 = (state_32010[(10)]);
var state_32010__$1 = state_32010;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32010__$1,(7),inst_31982);
} else {
if((state_val_32011 === (6))){
var inst_32006 = (state_32010[(2)]);
var state_32010__$1 = state_32010;
var statearr_32017_32042 = state_32010__$1;
(statearr_32017_32042[(2)] = inst_32006);

(statearr_32017_32042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32011 === (3))){
var inst_32008 = (state_32010[(2)]);
var state_32010__$1 = state_32010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32010__$1,inst_32008);
} else {
if((state_val_32011 === (2))){
var inst_31982 = (state_32010[(10)]);
var inst_31984 = cljs.core.count.call(null,inst_31982);
var inst_31985 = (inst_31984 > (0));
var state_32010__$1 = state_32010;
if(cljs.core.truth_(inst_31985)){
var statearr_32019_32043 = state_32010__$1;
(statearr_32019_32043[(1)] = (4));

} else {
var statearr_32020_32044 = state_32010__$1;
(statearr_32020_32044[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32011 === (11))){
var inst_31982 = (state_32010[(10)]);
var inst_31999 = (state_32010[(2)]);
var tmp32018 = inst_31982;
var inst_31982__$1 = tmp32018;
var state_32010__$1 = (function (){var statearr_32021 = state_32010;
(statearr_32021[(11)] = inst_31999);

(statearr_32021[(10)] = inst_31982__$1);

return statearr_32021;
})();
var statearr_32022_32045 = state_32010__$1;
(statearr_32022_32045[(2)] = null);

(statearr_32022_32045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32011 === (9))){
var inst_31990 = (state_32010[(7)]);
var state_32010__$1 = state_32010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32010__$1,(11),out,inst_31990);
} else {
if((state_val_32011 === (5))){
var inst_32004 = cljs.core.async.close_BANG_.call(null,out);
var state_32010__$1 = state_32010;
var statearr_32023_32046 = state_32010__$1;
(statearr_32023_32046[(2)] = inst_32004);

(statearr_32023_32046[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32011 === (10))){
var inst_32002 = (state_32010[(2)]);
var state_32010__$1 = state_32010;
var statearr_32024_32047 = state_32010__$1;
(statearr_32024_32047[(2)] = inst_32002);

(statearr_32024_32047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32011 === (8))){
var inst_31982 = (state_32010[(10)]);
var inst_31991 = (state_32010[(9)]);
var inst_31990 = (state_32010[(7)]);
var inst_31989 = (state_32010[(8)]);
var inst_31994 = (function (){var cs = inst_31982;
var vec__31987 = inst_31989;
var v = inst_31990;
var c = inst_31991;
return ((function (cs,vec__31987,v,c,inst_31982,inst_31991,inst_31990,inst_31989,state_val_32011,c__29940__auto___32038,out){
return (function (p1__31977_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31977_SHARP_);
});
;})(cs,vec__31987,v,c,inst_31982,inst_31991,inst_31990,inst_31989,state_val_32011,c__29940__auto___32038,out))
})();
var inst_31995 = cljs.core.filterv.call(null,inst_31994,inst_31982);
var inst_31982__$1 = inst_31995;
var state_32010__$1 = (function (){var statearr_32025 = state_32010;
(statearr_32025[(10)] = inst_31982__$1);

return statearr_32025;
})();
var statearr_32026_32048 = state_32010__$1;
(statearr_32026_32048[(2)] = null);

(statearr_32026_32048[(1)] = (2));


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
});})(c__29940__auto___32038,out))
;
return ((function (switch__29828__auto__,c__29940__auto___32038,out){
return (function() {
var cljs$core$async$state_machine__29829__auto__ = null;
var cljs$core$async$state_machine__29829__auto____0 = (function (){
var statearr_32030 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32030[(0)] = cljs$core$async$state_machine__29829__auto__);

(statearr_32030[(1)] = (1));

return statearr_32030;
});
var cljs$core$async$state_machine__29829__auto____1 = (function (state_32010){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_32010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e32031){if((e32031 instanceof Object)){
var ex__29832__auto__ = e32031;
var statearr_32032_32049 = state_32010;
(statearr_32032_32049[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32050 = state_32010;
state_32010 = G__32050;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
cljs$core$async$state_machine__29829__auto__ = function(state_32010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29829__auto____1.call(this,state_32010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29829__auto____0;
cljs$core$async$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29829__auto____1;
return cljs$core$async$state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto___32038,out))
})();
var state__29942__auto__ = (function (){var statearr_32033 = f__29941__auto__.call(null);
(statearr_32033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___32038);

return statearr_32033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto___32038,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args32051 = [];
var len__26879__auto___32100 = arguments.length;
var i__26880__auto___32101 = (0);
while(true){
if((i__26880__auto___32101 < len__26879__auto___32100)){
args32051.push((arguments[i__26880__auto___32101]));

var G__32102 = (i__26880__auto___32101 + (1));
i__26880__auto___32101 = G__32102;
continue;
} else {
}
break;
}

var G__32053 = args32051.length;
switch (G__32053) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32051.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29940__auto___32104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto___32104,out){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto___32104,out){
return (function (state_32077){
var state_val_32078 = (state_32077[(1)]);
if((state_val_32078 === (7))){
var inst_32059 = (state_32077[(7)]);
var inst_32059__$1 = (state_32077[(2)]);
var inst_32060 = (inst_32059__$1 == null);
var inst_32061 = cljs.core.not.call(null,inst_32060);
var state_32077__$1 = (function (){var statearr_32079 = state_32077;
(statearr_32079[(7)] = inst_32059__$1);

return statearr_32079;
})();
if(inst_32061){
var statearr_32080_32105 = state_32077__$1;
(statearr_32080_32105[(1)] = (8));

} else {
var statearr_32081_32106 = state_32077__$1;
(statearr_32081_32106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (1))){
var inst_32054 = (0);
var state_32077__$1 = (function (){var statearr_32082 = state_32077;
(statearr_32082[(8)] = inst_32054);

return statearr_32082;
})();
var statearr_32083_32107 = state_32077__$1;
(statearr_32083_32107[(2)] = null);

(statearr_32083_32107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (4))){
var state_32077__$1 = state_32077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32077__$1,(7),ch);
} else {
if((state_val_32078 === (6))){
var inst_32072 = (state_32077[(2)]);
var state_32077__$1 = state_32077;
var statearr_32084_32108 = state_32077__$1;
(statearr_32084_32108[(2)] = inst_32072);

(statearr_32084_32108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (3))){
var inst_32074 = (state_32077[(2)]);
var inst_32075 = cljs.core.async.close_BANG_.call(null,out);
var state_32077__$1 = (function (){var statearr_32085 = state_32077;
(statearr_32085[(9)] = inst_32074);

return statearr_32085;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32077__$1,inst_32075);
} else {
if((state_val_32078 === (2))){
var inst_32054 = (state_32077[(8)]);
var inst_32056 = (inst_32054 < n);
var state_32077__$1 = state_32077;
if(cljs.core.truth_(inst_32056)){
var statearr_32086_32109 = state_32077__$1;
(statearr_32086_32109[(1)] = (4));

} else {
var statearr_32087_32110 = state_32077__$1;
(statearr_32087_32110[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (11))){
var inst_32054 = (state_32077[(8)]);
var inst_32064 = (state_32077[(2)]);
var inst_32065 = (inst_32054 + (1));
var inst_32054__$1 = inst_32065;
var state_32077__$1 = (function (){var statearr_32088 = state_32077;
(statearr_32088[(10)] = inst_32064);

(statearr_32088[(8)] = inst_32054__$1);

return statearr_32088;
})();
var statearr_32089_32111 = state_32077__$1;
(statearr_32089_32111[(2)] = null);

(statearr_32089_32111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (9))){
var state_32077__$1 = state_32077;
var statearr_32090_32112 = state_32077__$1;
(statearr_32090_32112[(2)] = null);

(statearr_32090_32112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (5))){
var state_32077__$1 = state_32077;
var statearr_32091_32113 = state_32077__$1;
(statearr_32091_32113[(2)] = null);

(statearr_32091_32113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (10))){
var inst_32069 = (state_32077[(2)]);
var state_32077__$1 = state_32077;
var statearr_32092_32114 = state_32077__$1;
(statearr_32092_32114[(2)] = inst_32069);

(statearr_32092_32114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32078 === (8))){
var inst_32059 = (state_32077[(7)]);
var state_32077__$1 = state_32077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32077__$1,(11),out,inst_32059);
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
});})(c__29940__auto___32104,out))
;
return ((function (switch__29828__auto__,c__29940__auto___32104,out){
return (function() {
var cljs$core$async$state_machine__29829__auto__ = null;
var cljs$core$async$state_machine__29829__auto____0 = (function (){
var statearr_32096 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32096[(0)] = cljs$core$async$state_machine__29829__auto__);

(statearr_32096[(1)] = (1));

return statearr_32096;
});
var cljs$core$async$state_machine__29829__auto____1 = (function (state_32077){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_32077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e32097){if((e32097 instanceof Object)){
var ex__29832__auto__ = e32097;
var statearr_32098_32115 = state_32077;
(statearr_32098_32115[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32116 = state_32077;
state_32077 = G__32116;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
cljs$core$async$state_machine__29829__auto__ = function(state_32077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29829__auto____1.call(this,state_32077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29829__auto____0;
cljs$core$async$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29829__auto____1;
return cljs$core$async$state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto___32104,out))
})();
var state__29942__auto__ = (function (){var statearr_32099 = f__29941__auto__.call(null);
(statearr_32099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___32104);

return statearr_32099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto___32104,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32124 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32124 = (function (map_LT_,f,ch,meta32125){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32125 = meta32125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32126,meta32125__$1){
var self__ = this;
var _32126__$1 = this;
return (new cljs.core.async.t_cljs$core$async32124(self__.map_LT_,self__.f,self__.ch,meta32125__$1));
});

cljs.core.async.t_cljs$core$async32124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32126){
var self__ = this;
var _32126__$1 = this;
return self__.meta32125;
});

cljs.core.async.t_cljs$core$async32124.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32124.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32124.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32124.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32124.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32127 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32127 = (function (map_LT_,f,ch,meta32125,_,fn1,meta32128){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32125 = meta32125;
this._ = _;
this.fn1 = fn1;
this.meta32128 = meta32128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32129,meta32128__$1){
var self__ = this;
var _32129__$1 = this;
return (new cljs.core.async.t_cljs$core$async32127(self__.map_LT_,self__.f,self__.ch,self__.meta32125,self__._,self__.fn1,meta32128__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32129){
var self__ = this;
var _32129__$1 = this;
return self__.meta32128;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32117_SHARP_){
return f1.call(null,(((p1__32117_SHARP_ == null))?null:self__.f.call(null,p1__32117_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32127.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32125","meta32125",1628372137,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32124","cljs.core.async/t_cljs$core$async32124",1175984054,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32128","meta32128",-1895678342,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32127";

cljs.core.async.t_cljs$core$async32127.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"cljs.core.async/t_cljs$core$async32127");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32127 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32127(map_LT___$1,f__$1,ch__$1,meta32125__$1,___$2,fn1__$1,meta32128){
return (new cljs.core.async.t_cljs$core$async32127(map_LT___$1,f__$1,ch__$1,meta32125__$1,___$2,fn1__$1,meta32128));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32127(self__.map_LT_,self__.f,self__.ch,self__.meta32125,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25797__auto__ = ret;
if(cljs.core.truth_(and__25797__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25797__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32124.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32124.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32125","meta32125",1628372137,null)], null);
});

cljs.core.async.t_cljs$core$async32124.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32124";

cljs.core.async.t_cljs$core$async32124.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"cljs.core.async/t_cljs$core$async32124");
});

cljs.core.async.__GT_t_cljs$core$async32124 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32124(map_LT___$1,f__$1,ch__$1,meta32125){
return (new cljs.core.async.t_cljs$core$async32124(map_LT___$1,f__$1,ch__$1,meta32125));
});

}

return (new cljs.core.async.t_cljs$core$async32124(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32133 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32133 = (function (map_GT_,f,ch,meta32134){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32134 = meta32134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32135,meta32134__$1){
var self__ = this;
var _32135__$1 = this;
return (new cljs.core.async.t_cljs$core$async32133(self__.map_GT_,self__.f,self__.ch,meta32134__$1));
});

cljs.core.async.t_cljs$core$async32133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32135){
var self__ = this;
var _32135__$1 = this;
return self__.meta32134;
});

cljs.core.async.t_cljs$core$async32133.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32133.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32133.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32133.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32133.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32133.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32133.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32134","meta32134",1139368785,null)], null);
});

cljs.core.async.t_cljs$core$async32133.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32133";

cljs.core.async.t_cljs$core$async32133.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"cljs.core.async/t_cljs$core$async32133");
});

cljs.core.async.__GT_t_cljs$core$async32133 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32133(map_GT___$1,f__$1,ch__$1,meta32134){
return (new cljs.core.async.t_cljs$core$async32133(map_GT___$1,f__$1,ch__$1,meta32134));
});

}

return (new cljs.core.async.t_cljs$core$async32133(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32139 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32139 = (function (filter_GT_,p,ch,meta32140){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32140 = meta32140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32141,meta32140__$1){
var self__ = this;
var _32141__$1 = this;
return (new cljs.core.async.t_cljs$core$async32139(self__.filter_GT_,self__.p,self__.ch,meta32140__$1));
});

cljs.core.async.t_cljs$core$async32139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32141){
var self__ = this;
var _32141__$1 = this;
return self__.meta32140;
});

cljs.core.async.t_cljs$core$async32139.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32139.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32139.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32139.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32139.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32139.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32139.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32140","meta32140",64095082,null)], null);
});

cljs.core.async.t_cljs$core$async32139.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32139";

cljs.core.async.t_cljs$core$async32139.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"cljs.core.async/t_cljs$core$async32139");
});

cljs.core.async.__GT_t_cljs$core$async32139 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32139(filter_GT___$1,p__$1,ch__$1,meta32140){
return (new cljs.core.async.t_cljs$core$async32139(filter_GT___$1,p__$1,ch__$1,meta32140));
});

}

return (new cljs.core.async.t_cljs$core$async32139(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32142 = [];
var len__26879__auto___32186 = arguments.length;
var i__26880__auto___32187 = (0);
while(true){
if((i__26880__auto___32187 < len__26879__auto___32186)){
args32142.push((arguments[i__26880__auto___32187]));

var G__32188 = (i__26880__auto___32187 + (1));
i__26880__auto___32187 = G__32188;
continue;
} else {
}
break;
}

var G__32144 = args32142.length;
switch (G__32144) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32142.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29940__auto___32190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto___32190,out){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto___32190,out){
return (function (state_32165){
var state_val_32166 = (state_32165[(1)]);
if((state_val_32166 === (7))){
var inst_32161 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
var statearr_32167_32191 = state_32165__$1;
(statearr_32167_32191[(2)] = inst_32161);

(statearr_32167_32191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (1))){
var state_32165__$1 = state_32165;
var statearr_32168_32192 = state_32165__$1;
(statearr_32168_32192[(2)] = null);

(statearr_32168_32192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (4))){
var inst_32147 = (state_32165[(7)]);
var inst_32147__$1 = (state_32165[(2)]);
var inst_32148 = (inst_32147__$1 == null);
var state_32165__$1 = (function (){var statearr_32169 = state_32165;
(statearr_32169[(7)] = inst_32147__$1);

return statearr_32169;
})();
if(cljs.core.truth_(inst_32148)){
var statearr_32170_32193 = state_32165__$1;
(statearr_32170_32193[(1)] = (5));

} else {
var statearr_32171_32194 = state_32165__$1;
(statearr_32171_32194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (6))){
var inst_32147 = (state_32165[(7)]);
var inst_32152 = p.call(null,inst_32147);
var state_32165__$1 = state_32165;
if(cljs.core.truth_(inst_32152)){
var statearr_32172_32195 = state_32165__$1;
(statearr_32172_32195[(1)] = (8));

} else {
var statearr_32173_32196 = state_32165__$1;
(statearr_32173_32196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (3))){
var inst_32163 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32165__$1,inst_32163);
} else {
if((state_val_32166 === (2))){
var state_32165__$1 = state_32165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32165__$1,(4),ch);
} else {
if((state_val_32166 === (11))){
var inst_32155 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
var statearr_32174_32197 = state_32165__$1;
(statearr_32174_32197[(2)] = inst_32155);

(statearr_32174_32197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (9))){
var state_32165__$1 = state_32165;
var statearr_32175_32198 = state_32165__$1;
(statearr_32175_32198[(2)] = null);

(statearr_32175_32198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (5))){
var inst_32150 = cljs.core.async.close_BANG_.call(null,out);
var state_32165__$1 = state_32165;
var statearr_32176_32199 = state_32165__$1;
(statearr_32176_32199[(2)] = inst_32150);

(statearr_32176_32199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (10))){
var inst_32158 = (state_32165[(2)]);
var state_32165__$1 = (function (){var statearr_32177 = state_32165;
(statearr_32177[(8)] = inst_32158);

return statearr_32177;
})();
var statearr_32178_32200 = state_32165__$1;
(statearr_32178_32200[(2)] = null);

(statearr_32178_32200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (8))){
var inst_32147 = (state_32165[(7)]);
var state_32165__$1 = state_32165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32165__$1,(11),out,inst_32147);
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
});})(c__29940__auto___32190,out))
;
return ((function (switch__29828__auto__,c__29940__auto___32190,out){
return (function() {
var cljs$core$async$state_machine__29829__auto__ = null;
var cljs$core$async$state_machine__29829__auto____0 = (function (){
var statearr_32182 = [null,null,null,null,null,null,null,null,null];
(statearr_32182[(0)] = cljs$core$async$state_machine__29829__auto__);

(statearr_32182[(1)] = (1));

return statearr_32182;
});
var cljs$core$async$state_machine__29829__auto____1 = (function (state_32165){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_32165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e32183){if((e32183 instanceof Object)){
var ex__29832__auto__ = e32183;
var statearr_32184_32201 = state_32165;
(statearr_32184_32201[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32202 = state_32165;
state_32165 = G__32202;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
cljs$core$async$state_machine__29829__auto__ = function(state_32165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29829__auto____1.call(this,state_32165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29829__auto____0;
cljs$core$async$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29829__auto____1;
return cljs$core$async$state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto___32190,out))
})();
var state__29942__auto__ = (function (){var statearr_32185 = f__29941__auto__.call(null);
(statearr_32185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___32190);

return statearr_32185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto___32190,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32203 = [];
var len__26879__auto___32206 = arguments.length;
var i__26880__auto___32207 = (0);
while(true){
if((i__26880__auto___32207 < len__26879__auto___32206)){
args32203.push((arguments[i__26880__auto___32207]));

var G__32208 = (i__26880__auto___32207 + (1));
i__26880__auto___32207 = G__32208;
continue;
} else {
}
break;
}

var G__32205 = args32203.length;
switch (G__32205) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32203.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29940__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto__){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto__){
return (function (state_32375){
var state_val_32376 = (state_32375[(1)]);
if((state_val_32376 === (7))){
var inst_32371 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
var statearr_32377_32418 = state_32375__$1;
(statearr_32377_32418[(2)] = inst_32371);

(statearr_32377_32418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (20))){
var inst_32341 = (state_32375[(7)]);
var inst_32352 = (state_32375[(2)]);
var inst_32353 = cljs.core.next.call(null,inst_32341);
var inst_32327 = inst_32353;
var inst_32328 = null;
var inst_32329 = (0);
var inst_32330 = (0);
var state_32375__$1 = (function (){var statearr_32378 = state_32375;
(statearr_32378[(8)] = inst_32352);

(statearr_32378[(9)] = inst_32327);

(statearr_32378[(10)] = inst_32328);

(statearr_32378[(11)] = inst_32330);

(statearr_32378[(12)] = inst_32329);

return statearr_32378;
})();
var statearr_32379_32419 = state_32375__$1;
(statearr_32379_32419[(2)] = null);

(statearr_32379_32419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (1))){
var state_32375__$1 = state_32375;
var statearr_32380_32420 = state_32375__$1;
(statearr_32380_32420[(2)] = null);

(statearr_32380_32420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (4))){
var inst_32316 = (state_32375[(13)]);
var inst_32316__$1 = (state_32375[(2)]);
var inst_32317 = (inst_32316__$1 == null);
var state_32375__$1 = (function (){var statearr_32381 = state_32375;
(statearr_32381[(13)] = inst_32316__$1);

return statearr_32381;
})();
if(cljs.core.truth_(inst_32317)){
var statearr_32382_32421 = state_32375__$1;
(statearr_32382_32421[(1)] = (5));

} else {
var statearr_32383_32422 = state_32375__$1;
(statearr_32383_32422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (15))){
var state_32375__$1 = state_32375;
var statearr_32387_32423 = state_32375__$1;
(statearr_32387_32423[(2)] = null);

(statearr_32387_32423[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (21))){
var state_32375__$1 = state_32375;
var statearr_32388_32424 = state_32375__$1;
(statearr_32388_32424[(2)] = null);

(statearr_32388_32424[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (13))){
var inst_32327 = (state_32375[(9)]);
var inst_32328 = (state_32375[(10)]);
var inst_32330 = (state_32375[(11)]);
var inst_32329 = (state_32375[(12)]);
var inst_32337 = (state_32375[(2)]);
var inst_32338 = (inst_32330 + (1));
var tmp32384 = inst_32327;
var tmp32385 = inst_32328;
var tmp32386 = inst_32329;
var inst_32327__$1 = tmp32384;
var inst_32328__$1 = tmp32385;
var inst_32329__$1 = tmp32386;
var inst_32330__$1 = inst_32338;
var state_32375__$1 = (function (){var statearr_32389 = state_32375;
(statearr_32389[(14)] = inst_32337);

(statearr_32389[(9)] = inst_32327__$1);

(statearr_32389[(10)] = inst_32328__$1);

(statearr_32389[(11)] = inst_32330__$1);

(statearr_32389[(12)] = inst_32329__$1);

return statearr_32389;
})();
var statearr_32390_32425 = state_32375__$1;
(statearr_32390_32425[(2)] = null);

(statearr_32390_32425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (22))){
var state_32375__$1 = state_32375;
var statearr_32391_32426 = state_32375__$1;
(statearr_32391_32426[(2)] = null);

(statearr_32391_32426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (6))){
var inst_32316 = (state_32375[(13)]);
var inst_32325 = f.call(null,inst_32316);
var inst_32326 = cljs.core.seq.call(null,inst_32325);
var inst_32327 = inst_32326;
var inst_32328 = null;
var inst_32329 = (0);
var inst_32330 = (0);
var state_32375__$1 = (function (){var statearr_32392 = state_32375;
(statearr_32392[(9)] = inst_32327);

(statearr_32392[(10)] = inst_32328);

(statearr_32392[(11)] = inst_32330);

(statearr_32392[(12)] = inst_32329);

return statearr_32392;
})();
var statearr_32393_32427 = state_32375__$1;
(statearr_32393_32427[(2)] = null);

(statearr_32393_32427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (17))){
var inst_32341 = (state_32375[(7)]);
var inst_32345 = cljs.core.chunk_first.call(null,inst_32341);
var inst_32346 = cljs.core.chunk_rest.call(null,inst_32341);
var inst_32347 = cljs.core.count.call(null,inst_32345);
var inst_32327 = inst_32346;
var inst_32328 = inst_32345;
var inst_32329 = inst_32347;
var inst_32330 = (0);
var state_32375__$1 = (function (){var statearr_32394 = state_32375;
(statearr_32394[(9)] = inst_32327);

(statearr_32394[(10)] = inst_32328);

(statearr_32394[(11)] = inst_32330);

(statearr_32394[(12)] = inst_32329);

return statearr_32394;
})();
var statearr_32395_32428 = state_32375__$1;
(statearr_32395_32428[(2)] = null);

(statearr_32395_32428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (3))){
var inst_32373 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32375__$1,inst_32373);
} else {
if((state_val_32376 === (12))){
var inst_32361 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
var statearr_32396_32429 = state_32375__$1;
(statearr_32396_32429[(2)] = inst_32361);

(statearr_32396_32429[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (2))){
var state_32375__$1 = state_32375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32375__$1,(4),in$);
} else {
if((state_val_32376 === (23))){
var inst_32369 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
var statearr_32397_32430 = state_32375__$1;
(statearr_32397_32430[(2)] = inst_32369);

(statearr_32397_32430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (19))){
var inst_32356 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
var statearr_32398_32431 = state_32375__$1;
(statearr_32398_32431[(2)] = inst_32356);

(statearr_32398_32431[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (11))){
var inst_32327 = (state_32375[(9)]);
var inst_32341 = (state_32375[(7)]);
var inst_32341__$1 = cljs.core.seq.call(null,inst_32327);
var state_32375__$1 = (function (){var statearr_32399 = state_32375;
(statearr_32399[(7)] = inst_32341__$1);

return statearr_32399;
})();
if(inst_32341__$1){
var statearr_32400_32432 = state_32375__$1;
(statearr_32400_32432[(1)] = (14));

} else {
var statearr_32401_32433 = state_32375__$1;
(statearr_32401_32433[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (9))){
var inst_32363 = (state_32375[(2)]);
var inst_32364 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32375__$1 = (function (){var statearr_32402 = state_32375;
(statearr_32402[(15)] = inst_32363);

return statearr_32402;
})();
if(cljs.core.truth_(inst_32364)){
var statearr_32403_32434 = state_32375__$1;
(statearr_32403_32434[(1)] = (21));

} else {
var statearr_32404_32435 = state_32375__$1;
(statearr_32404_32435[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (5))){
var inst_32319 = cljs.core.async.close_BANG_.call(null,out);
var state_32375__$1 = state_32375;
var statearr_32405_32436 = state_32375__$1;
(statearr_32405_32436[(2)] = inst_32319);

(statearr_32405_32436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (14))){
var inst_32341 = (state_32375[(7)]);
var inst_32343 = cljs.core.chunked_seq_QMARK_.call(null,inst_32341);
var state_32375__$1 = state_32375;
if(inst_32343){
var statearr_32406_32437 = state_32375__$1;
(statearr_32406_32437[(1)] = (17));

} else {
var statearr_32407_32438 = state_32375__$1;
(statearr_32407_32438[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (16))){
var inst_32359 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
var statearr_32408_32439 = state_32375__$1;
(statearr_32408_32439[(2)] = inst_32359);

(statearr_32408_32439[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (10))){
var inst_32328 = (state_32375[(10)]);
var inst_32330 = (state_32375[(11)]);
var inst_32335 = cljs.core._nth.call(null,inst_32328,inst_32330);
var state_32375__$1 = state_32375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32375__$1,(13),out,inst_32335);
} else {
if((state_val_32376 === (18))){
var inst_32341 = (state_32375[(7)]);
var inst_32350 = cljs.core.first.call(null,inst_32341);
var state_32375__$1 = state_32375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32375__$1,(20),out,inst_32350);
} else {
if((state_val_32376 === (8))){
var inst_32330 = (state_32375[(11)]);
var inst_32329 = (state_32375[(12)]);
var inst_32332 = (inst_32330 < inst_32329);
var inst_32333 = inst_32332;
var state_32375__$1 = state_32375;
if(cljs.core.truth_(inst_32333)){
var statearr_32409_32440 = state_32375__$1;
(statearr_32409_32440[(1)] = (10));

} else {
var statearr_32410_32441 = state_32375__$1;
(statearr_32410_32441[(1)] = (11));

}

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
});})(c__29940__auto__))
;
return ((function (switch__29828__auto__,c__29940__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29829__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29829__auto____0 = (function (){
var statearr_32414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32414[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29829__auto__);

(statearr_32414[(1)] = (1));

return statearr_32414;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29829__auto____1 = (function (state_32375){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_32375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e32415){if((e32415 instanceof Object)){
var ex__29832__auto__ = e32415;
var statearr_32416_32442 = state_32375;
(statearr_32416_32442[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32443 = state_32375;
state_32375 = G__32443;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29829__auto__ = function(state_32375){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29829__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29829__auto____1.call(this,state_32375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29829__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29829__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto__))
})();
var state__29942__auto__ = (function (){var statearr_32417 = f__29941__auto__.call(null);
(statearr_32417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto__);

return statearr_32417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto__))
);

return c__29940__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32444 = [];
var len__26879__auto___32447 = arguments.length;
var i__26880__auto___32448 = (0);
while(true){
if((i__26880__auto___32448 < len__26879__auto___32447)){
args32444.push((arguments[i__26880__auto___32448]));

var G__32449 = (i__26880__auto___32448 + (1));
i__26880__auto___32448 = G__32449;
continue;
} else {
}
break;
}

var G__32446 = args32444.length;
switch (G__32446) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32444.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32451 = [];
var len__26879__auto___32454 = arguments.length;
var i__26880__auto___32455 = (0);
while(true){
if((i__26880__auto___32455 < len__26879__auto___32454)){
args32451.push((arguments[i__26880__auto___32455]));

var G__32456 = (i__26880__auto___32455 + (1));
i__26880__auto___32455 = G__32456;
continue;
} else {
}
break;
}

var G__32453 = args32451.length;
switch (G__32453) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32451.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32458 = [];
var len__26879__auto___32509 = arguments.length;
var i__26880__auto___32510 = (0);
while(true){
if((i__26880__auto___32510 < len__26879__auto___32509)){
args32458.push((arguments[i__26880__auto___32510]));

var G__32511 = (i__26880__auto___32510 + (1));
i__26880__auto___32510 = G__32511;
continue;
} else {
}
break;
}

var G__32460 = args32458.length;
switch (G__32460) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32458.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29940__auto___32513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto___32513,out){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto___32513,out){
return (function (state_32484){
var state_val_32485 = (state_32484[(1)]);
if((state_val_32485 === (7))){
var inst_32479 = (state_32484[(2)]);
var state_32484__$1 = state_32484;
var statearr_32486_32514 = state_32484__$1;
(statearr_32486_32514[(2)] = inst_32479);

(statearr_32486_32514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (1))){
var inst_32461 = null;
var state_32484__$1 = (function (){var statearr_32487 = state_32484;
(statearr_32487[(7)] = inst_32461);

return statearr_32487;
})();
var statearr_32488_32515 = state_32484__$1;
(statearr_32488_32515[(2)] = null);

(statearr_32488_32515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (4))){
var inst_32464 = (state_32484[(8)]);
var inst_32464__$1 = (state_32484[(2)]);
var inst_32465 = (inst_32464__$1 == null);
var inst_32466 = cljs.core.not.call(null,inst_32465);
var state_32484__$1 = (function (){var statearr_32489 = state_32484;
(statearr_32489[(8)] = inst_32464__$1);

return statearr_32489;
})();
if(inst_32466){
var statearr_32490_32516 = state_32484__$1;
(statearr_32490_32516[(1)] = (5));

} else {
var statearr_32491_32517 = state_32484__$1;
(statearr_32491_32517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (6))){
var state_32484__$1 = state_32484;
var statearr_32492_32518 = state_32484__$1;
(statearr_32492_32518[(2)] = null);

(statearr_32492_32518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (3))){
var inst_32481 = (state_32484[(2)]);
var inst_32482 = cljs.core.async.close_BANG_.call(null,out);
var state_32484__$1 = (function (){var statearr_32493 = state_32484;
(statearr_32493[(9)] = inst_32481);

return statearr_32493;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32484__$1,inst_32482);
} else {
if((state_val_32485 === (2))){
var state_32484__$1 = state_32484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32484__$1,(4),ch);
} else {
if((state_val_32485 === (11))){
var inst_32464 = (state_32484[(8)]);
var inst_32473 = (state_32484[(2)]);
var inst_32461 = inst_32464;
var state_32484__$1 = (function (){var statearr_32494 = state_32484;
(statearr_32494[(10)] = inst_32473);

(statearr_32494[(7)] = inst_32461);

return statearr_32494;
})();
var statearr_32495_32519 = state_32484__$1;
(statearr_32495_32519[(2)] = null);

(statearr_32495_32519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (9))){
var inst_32464 = (state_32484[(8)]);
var state_32484__$1 = state_32484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32484__$1,(11),out,inst_32464);
} else {
if((state_val_32485 === (5))){
var inst_32464 = (state_32484[(8)]);
var inst_32461 = (state_32484[(7)]);
var inst_32468 = cljs.core._EQ_.call(null,inst_32464,inst_32461);
var state_32484__$1 = state_32484;
if(inst_32468){
var statearr_32497_32520 = state_32484__$1;
(statearr_32497_32520[(1)] = (8));

} else {
var statearr_32498_32521 = state_32484__$1;
(statearr_32498_32521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (10))){
var inst_32476 = (state_32484[(2)]);
var state_32484__$1 = state_32484;
var statearr_32499_32522 = state_32484__$1;
(statearr_32499_32522[(2)] = inst_32476);

(statearr_32499_32522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32485 === (8))){
var inst_32461 = (state_32484[(7)]);
var tmp32496 = inst_32461;
var inst_32461__$1 = tmp32496;
var state_32484__$1 = (function (){var statearr_32500 = state_32484;
(statearr_32500[(7)] = inst_32461__$1);

return statearr_32500;
})();
var statearr_32501_32523 = state_32484__$1;
(statearr_32501_32523[(2)] = null);

(statearr_32501_32523[(1)] = (2));


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
});})(c__29940__auto___32513,out))
;
return ((function (switch__29828__auto__,c__29940__auto___32513,out){
return (function() {
var cljs$core$async$state_machine__29829__auto__ = null;
var cljs$core$async$state_machine__29829__auto____0 = (function (){
var statearr_32505 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32505[(0)] = cljs$core$async$state_machine__29829__auto__);

(statearr_32505[(1)] = (1));

return statearr_32505;
});
var cljs$core$async$state_machine__29829__auto____1 = (function (state_32484){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_32484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e32506){if((e32506 instanceof Object)){
var ex__29832__auto__ = e32506;
var statearr_32507_32524 = state_32484;
(statearr_32507_32524[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32525 = state_32484;
state_32484 = G__32525;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
cljs$core$async$state_machine__29829__auto__ = function(state_32484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29829__auto____1.call(this,state_32484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29829__auto____0;
cljs$core$async$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29829__auto____1;
return cljs$core$async$state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto___32513,out))
})();
var state__29942__auto__ = (function (){var statearr_32508 = f__29941__auto__.call(null);
(statearr_32508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___32513);

return statearr_32508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto___32513,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32526 = [];
var len__26879__auto___32596 = arguments.length;
var i__26880__auto___32597 = (0);
while(true){
if((i__26880__auto___32597 < len__26879__auto___32596)){
args32526.push((arguments[i__26880__auto___32597]));

var G__32598 = (i__26880__auto___32597 + (1));
i__26880__auto___32597 = G__32598;
continue;
} else {
}
break;
}

var G__32528 = args32526.length;
switch (G__32528) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32526.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29940__auto___32600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto___32600,out){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto___32600,out){
return (function (state_32566){
var state_val_32567 = (state_32566[(1)]);
if((state_val_32567 === (7))){
var inst_32562 = (state_32566[(2)]);
var state_32566__$1 = state_32566;
var statearr_32568_32601 = state_32566__$1;
(statearr_32568_32601[(2)] = inst_32562);

(statearr_32568_32601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (1))){
var inst_32529 = (new Array(n));
var inst_32530 = inst_32529;
var inst_32531 = (0);
var state_32566__$1 = (function (){var statearr_32569 = state_32566;
(statearr_32569[(7)] = inst_32530);

(statearr_32569[(8)] = inst_32531);

return statearr_32569;
})();
var statearr_32570_32602 = state_32566__$1;
(statearr_32570_32602[(2)] = null);

(statearr_32570_32602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (4))){
var inst_32534 = (state_32566[(9)]);
var inst_32534__$1 = (state_32566[(2)]);
var inst_32535 = (inst_32534__$1 == null);
var inst_32536 = cljs.core.not.call(null,inst_32535);
var state_32566__$1 = (function (){var statearr_32571 = state_32566;
(statearr_32571[(9)] = inst_32534__$1);

return statearr_32571;
})();
if(inst_32536){
var statearr_32572_32603 = state_32566__$1;
(statearr_32572_32603[(1)] = (5));

} else {
var statearr_32573_32604 = state_32566__$1;
(statearr_32573_32604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (15))){
var inst_32556 = (state_32566[(2)]);
var state_32566__$1 = state_32566;
var statearr_32574_32605 = state_32566__$1;
(statearr_32574_32605[(2)] = inst_32556);

(statearr_32574_32605[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (13))){
var state_32566__$1 = state_32566;
var statearr_32575_32606 = state_32566__$1;
(statearr_32575_32606[(2)] = null);

(statearr_32575_32606[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (6))){
var inst_32531 = (state_32566[(8)]);
var inst_32552 = (inst_32531 > (0));
var state_32566__$1 = state_32566;
if(cljs.core.truth_(inst_32552)){
var statearr_32576_32607 = state_32566__$1;
(statearr_32576_32607[(1)] = (12));

} else {
var statearr_32577_32608 = state_32566__$1;
(statearr_32577_32608[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (3))){
var inst_32564 = (state_32566[(2)]);
var state_32566__$1 = state_32566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32566__$1,inst_32564);
} else {
if((state_val_32567 === (12))){
var inst_32530 = (state_32566[(7)]);
var inst_32554 = cljs.core.vec.call(null,inst_32530);
var state_32566__$1 = state_32566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32566__$1,(15),out,inst_32554);
} else {
if((state_val_32567 === (2))){
var state_32566__$1 = state_32566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32566__$1,(4),ch);
} else {
if((state_val_32567 === (11))){
var inst_32546 = (state_32566[(2)]);
var inst_32547 = (new Array(n));
var inst_32530 = inst_32547;
var inst_32531 = (0);
var state_32566__$1 = (function (){var statearr_32578 = state_32566;
(statearr_32578[(10)] = inst_32546);

(statearr_32578[(7)] = inst_32530);

(statearr_32578[(8)] = inst_32531);

return statearr_32578;
})();
var statearr_32579_32609 = state_32566__$1;
(statearr_32579_32609[(2)] = null);

(statearr_32579_32609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (9))){
var inst_32530 = (state_32566[(7)]);
var inst_32544 = cljs.core.vec.call(null,inst_32530);
var state_32566__$1 = state_32566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32566__$1,(11),out,inst_32544);
} else {
if((state_val_32567 === (5))){
var inst_32534 = (state_32566[(9)]);
var inst_32539 = (state_32566[(11)]);
var inst_32530 = (state_32566[(7)]);
var inst_32531 = (state_32566[(8)]);
var inst_32538 = (inst_32530[inst_32531] = inst_32534);
var inst_32539__$1 = (inst_32531 + (1));
var inst_32540 = (inst_32539__$1 < n);
var state_32566__$1 = (function (){var statearr_32580 = state_32566;
(statearr_32580[(11)] = inst_32539__$1);

(statearr_32580[(12)] = inst_32538);

return statearr_32580;
})();
if(cljs.core.truth_(inst_32540)){
var statearr_32581_32610 = state_32566__$1;
(statearr_32581_32610[(1)] = (8));

} else {
var statearr_32582_32611 = state_32566__$1;
(statearr_32582_32611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (14))){
var inst_32559 = (state_32566[(2)]);
var inst_32560 = cljs.core.async.close_BANG_.call(null,out);
var state_32566__$1 = (function (){var statearr_32584 = state_32566;
(statearr_32584[(13)] = inst_32559);

return statearr_32584;
})();
var statearr_32585_32612 = state_32566__$1;
(statearr_32585_32612[(2)] = inst_32560);

(statearr_32585_32612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (10))){
var inst_32550 = (state_32566[(2)]);
var state_32566__$1 = state_32566;
var statearr_32586_32613 = state_32566__$1;
(statearr_32586_32613[(2)] = inst_32550);

(statearr_32586_32613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (8))){
var inst_32539 = (state_32566[(11)]);
var inst_32530 = (state_32566[(7)]);
var tmp32583 = inst_32530;
var inst_32530__$1 = tmp32583;
var inst_32531 = inst_32539;
var state_32566__$1 = (function (){var statearr_32587 = state_32566;
(statearr_32587[(7)] = inst_32530__$1);

(statearr_32587[(8)] = inst_32531);

return statearr_32587;
})();
var statearr_32588_32614 = state_32566__$1;
(statearr_32588_32614[(2)] = null);

(statearr_32588_32614[(1)] = (2));


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
});})(c__29940__auto___32600,out))
;
return ((function (switch__29828__auto__,c__29940__auto___32600,out){
return (function() {
var cljs$core$async$state_machine__29829__auto__ = null;
var cljs$core$async$state_machine__29829__auto____0 = (function (){
var statearr_32592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32592[(0)] = cljs$core$async$state_machine__29829__auto__);

(statearr_32592[(1)] = (1));

return statearr_32592;
});
var cljs$core$async$state_machine__29829__auto____1 = (function (state_32566){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_32566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e32593){if((e32593 instanceof Object)){
var ex__29832__auto__ = e32593;
var statearr_32594_32615 = state_32566;
(statearr_32594_32615[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32616 = state_32566;
state_32566 = G__32616;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
cljs$core$async$state_machine__29829__auto__ = function(state_32566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29829__auto____1.call(this,state_32566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29829__auto____0;
cljs$core$async$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29829__auto____1;
return cljs$core$async$state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto___32600,out))
})();
var state__29942__auto__ = (function (){var statearr_32595 = f__29941__auto__.call(null);
(statearr_32595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___32600);

return statearr_32595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto___32600,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32617 = [];
var len__26879__auto___32691 = arguments.length;
var i__26880__auto___32692 = (0);
while(true){
if((i__26880__auto___32692 < len__26879__auto___32691)){
args32617.push((arguments[i__26880__auto___32692]));

var G__32693 = (i__26880__auto___32692 + (1));
i__26880__auto___32692 = G__32693;
continue;
} else {
}
break;
}

var G__32619 = args32617.length;
switch (G__32619) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32617.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29940__auto___32695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto___32695,out){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto___32695,out){
return (function (state_32661){
var state_val_32662 = (state_32661[(1)]);
if((state_val_32662 === (7))){
var inst_32657 = (state_32661[(2)]);
var state_32661__$1 = state_32661;
var statearr_32663_32696 = state_32661__$1;
(statearr_32663_32696[(2)] = inst_32657);

(statearr_32663_32696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (1))){
var inst_32620 = [];
var inst_32621 = inst_32620;
var inst_32622 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32661__$1 = (function (){var statearr_32664 = state_32661;
(statearr_32664[(7)] = inst_32621);

(statearr_32664[(8)] = inst_32622);

return statearr_32664;
})();
var statearr_32665_32697 = state_32661__$1;
(statearr_32665_32697[(2)] = null);

(statearr_32665_32697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (4))){
var inst_32625 = (state_32661[(9)]);
var inst_32625__$1 = (state_32661[(2)]);
var inst_32626 = (inst_32625__$1 == null);
var inst_32627 = cljs.core.not.call(null,inst_32626);
var state_32661__$1 = (function (){var statearr_32666 = state_32661;
(statearr_32666[(9)] = inst_32625__$1);

return statearr_32666;
})();
if(inst_32627){
var statearr_32667_32698 = state_32661__$1;
(statearr_32667_32698[(1)] = (5));

} else {
var statearr_32668_32699 = state_32661__$1;
(statearr_32668_32699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (15))){
var inst_32651 = (state_32661[(2)]);
var state_32661__$1 = state_32661;
var statearr_32669_32700 = state_32661__$1;
(statearr_32669_32700[(2)] = inst_32651);

(statearr_32669_32700[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (13))){
var state_32661__$1 = state_32661;
var statearr_32670_32701 = state_32661__$1;
(statearr_32670_32701[(2)] = null);

(statearr_32670_32701[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (6))){
var inst_32621 = (state_32661[(7)]);
var inst_32646 = inst_32621.length;
var inst_32647 = (inst_32646 > (0));
var state_32661__$1 = state_32661;
if(cljs.core.truth_(inst_32647)){
var statearr_32671_32702 = state_32661__$1;
(statearr_32671_32702[(1)] = (12));

} else {
var statearr_32672_32703 = state_32661__$1;
(statearr_32672_32703[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (3))){
var inst_32659 = (state_32661[(2)]);
var state_32661__$1 = state_32661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32661__$1,inst_32659);
} else {
if((state_val_32662 === (12))){
var inst_32621 = (state_32661[(7)]);
var inst_32649 = cljs.core.vec.call(null,inst_32621);
var state_32661__$1 = state_32661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32661__$1,(15),out,inst_32649);
} else {
if((state_val_32662 === (2))){
var state_32661__$1 = state_32661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32661__$1,(4),ch);
} else {
if((state_val_32662 === (11))){
var inst_32625 = (state_32661[(9)]);
var inst_32629 = (state_32661[(10)]);
var inst_32639 = (state_32661[(2)]);
var inst_32640 = [];
var inst_32641 = inst_32640.push(inst_32625);
var inst_32621 = inst_32640;
var inst_32622 = inst_32629;
var state_32661__$1 = (function (){var statearr_32673 = state_32661;
(statearr_32673[(11)] = inst_32641);

(statearr_32673[(7)] = inst_32621);

(statearr_32673[(12)] = inst_32639);

(statearr_32673[(8)] = inst_32622);

return statearr_32673;
})();
var statearr_32674_32704 = state_32661__$1;
(statearr_32674_32704[(2)] = null);

(statearr_32674_32704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (9))){
var inst_32621 = (state_32661[(7)]);
var inst_32637 = cljs.core.vec.call(null,inst_32621);
var state_32661__$1 = state_32661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32661__$1,(11),out,inst_32637);
} else {
if((state_val_32662 === (5))){
var inst_32625 = (state_32661[(9)]);
var inst_32629 = (state_32661[(10)]);
var inst_32622 = (state_32661[(8)]);
var inst_32629__$1 = f.call(null,inst_32625);
var inst_32630 = cljs.core._EQ_.call(null,inst_32629__$1,inst_32622);
var inst_32631 = cljs.core.keyword_identical_QMARK_.call(null,inst_32622,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32632 = (inst_32630) || (inst_32631);
var state_32661__$1 = (function (){var statearr_32675 = state_32661;
(statearr_32675[(10)] = inst_32629__$1);

return statearr_32675;
})();
if(cljs.core.truth_(inst_32632)){
var statearr_32676_32705 = state_32661__$1;
(statearr_32676_32705[(1)] = (8));

} else {
var statearr_32677_32706 = state_32661__$1;
(statearr_32677_32706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (14))){
var inst_32654 = (state_32661[(2)]);
var inst_32655 = cljs.core.async.close_BANG_.call(null,out);
var state_32661__$1 = (function (){var statearr_32679 = state_32661;
(statearr_32679[(13)] = inst_32654);

return statearr_32679;
})();
var statearr_32680_32707 = state_32661__$1;
(statearr_32680_32707[(2)] = inst_32655);

(statearr_32680_32707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (10))){
var inst_32644 = (state_32661[(2)]);
var state_32661__$1 = state_32661;
var statearr_32681_32708 = state_32661__$1;
(statearr_32681_32708[(2)] = inst_32644);

(statearr_32681_32708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (8))){
var inst_32621 = (state_32661[(7)]);
var inst_32625 = (state_32661[(9)]);
var inst_32629 = (state_32661[(10)]);
var inst_32634 = inst_32621.push(inst_32625);
var tmp32678 = inst_32621;
var inst_32621__$1 = tmp32678;
var inst_32622 = inst_32629;
var state_32661__$1 = (function (){var statearr_32682 = state_32661;
(statearr_32682[(7)] = inst_32621__$1);

(statearr_32682[(14)] = inst_32634);

(statearr_32682[(8)] = inst_32622);

return statearr_32682;
})();
var statearr_32683_32709 = state_32661__$1;
(statearr_32683_32709[(2)] = null);

(statearr_32683_32709[(1)] = (2));


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
});})(c__29940__auto___32695,out))
;
return ((function (switch__29828__auto__,c__29940__auto___32695,out){
return (function() {
var cljs$core$async$state_machine__29829__auto__ = null;
var cljs$core$async$state_machine__29829__auto____0 = (function (){
var statearr_32687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32687[(0)] = cljs$core$async$state_machine__29829__auto__);

(statearr_32687[(1)] = (1));

return statearr_32687;
});
var cljs$core$async$state_machine__29829__auto____1 = (function (state_32661){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_32661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e32688){if((e32688 instanceof Object)){
var ex__29832__auto__ = e32688;
var statearr_32689_32710 = state_32661;
(statearr_32689_32710[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32711 = state_32661;
state_32661 = G__32711;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
cljs$core$async$state_machine__29829__auto__ = function(state_32661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29829__auto____1.call(this,state_32661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29829__auto____0;
cljs$core$async$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29829__auto____1;
return cljs$core$async$state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto___32695,out))
})();
var state__29942__auto__ = (function (){var statearr_32690 = f__29941__auto__.call(null);
(statearr_32690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___32695);

return statearr_32690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto___32695,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map