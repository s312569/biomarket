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
var args29988 = [];
var len__26882__auto___29994 = arguments.length;
var i__26883__auto___29995 = (0);
while(true){
if((i__26883__auto___29995 < len__26882__auto___29994)){
args29988.push((arguments[i__26883__auto___29995]));

var G__29996 = (i__26883__auto___29995 + (1));
i__26883__auto___29995 = G__29996;
continue;
} else {
}
break;
}

var G__29990 = args29988.length;
switch (G__29990) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29988.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29991 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29991 = (function (f,blockable,meta29992){
this.f = f;
this.blockable = blockable;
this.meta29992 = meta29992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29993,meta29992__$1){
var self__ = this;
var _29993__$1 = this;
return (new cljs.core.async.t_cljs$core$async29991(self__.f,self__.blockable,meta29992__$1));
});

cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29993){
var self__ = this;
var _29993__$1 = this;
return self__.meta29992;
});

cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29991.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29992","meta29992",436769723,null)], null);
});

cljs.core.async.t_cljs$core$async29991.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29991";

cljs.core.async.t_cljs$core$async29991.cljs$lang$ctorPrWriter = (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"cljs.core.async/t_cljs$core$async29991");
});

cljs.core.async.__GT_t_cljs$core$async29991 = (function cljs$core$async$__GT_t_cljs$core$async29991(f__$1,blockable__$1,meta29992){
return (new cljs.core.async.t_cljs$core$async29991(f__$1,blockable__$1,meta29992));
});

}

return (new cljs.core.async.t_cljs$core$async29991(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args30000 = [];
var len__26882__auto___30003 = arguments.length;
var i__26883__auto___30004 = (0);
while(true){
if((i__26883__auto___30004 < len__26882__auto___30003)){
args30000.push((arguments[i__26883__auto___30004]));

var G__30005 = (i__26883__auto___30004 + (1));
i__26883__auto___30004 = G__30005;
continue;
} else {
}
break;
}

var G__30002 = args30000.length;
switch (G__30002) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30000.length)].join('')));

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
var args30007 = [];
var len__26882__auto___30010 = arguments.length;
var i__26883__auto___30011 = (0);
while(true){
if((i__26883__auto___30011 < len__26882__auto___30010)){
args30007.push((arguments[i__26883__auto___30011]));

var G__30012 = (i__26883__auto___30011 + (1));
i__26883__auto___30011 = G__30012;
continue;
} else {
}
break;
}

var G__30009 = args30007.length;
switch (G__30009) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30007.length)].join('')));

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
var args30014 = [];
var len__26882__auto___30017 = arguments.length;
var i__26883__auto___30018 = (0);
while(true){
if((i__26883__auto___30018 < len__26882__auto___30017)){
args30014.push((arguments[i__26883__auto___30018]));

var G__30019 = (i__26883__auto___30018 + (1));
i__26883__auto___30018 = G__30019;
continue;
} else {
}
break;
}

var G__30016 = args30014.length;
switch (G__30016) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30014.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30021 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30021);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30021,ret){
return (function (){
return fn1.call(null,val_30021);
});})(val_30021,ret))
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
var args30022 = [];
var len__26882__auto___30025 = arguments.length;
var i__26883__auto___30026 = (0);
while(true){
if((i__26883__auto___30026 < len__26882__auto___30025)){
args30022.push((arguments[i__26883__auto___30026]));

var G__30027 = (i__26883__auto___30026 + (1));
i__26883__auto___30026 = G__30027;
continue;
} else {
}
break;
}

var G__30024 = args30022.length;
switch (G__30024) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30022.length)].join('')));

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
var n__26727__auto___30029 = n;
var x_30030 = (0);
while(true){
if((x_30030 < n__26727__auto___30029)){
(a[x_30030] = (0));

var G__30031 = (x_30030 + (1));
x_30030 = G__30031;
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

var G__30032 = (i + (1));
i = G__30032;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30036 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30036 = (function (alt_flag,flag,meta30037){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30037 = meta30037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30038,meta30037__$1){
var self__ = this;
var _30038__$1 = this;
return (new cljs.core.async.t_cljs$core$async30036(self__.alt_flag,self__.flag,meta30037__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30038){
var self__ = this;
var _30038__$1 = this;
return self__.meta30037;
});})(flag))
;

cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30036.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30037","meta30037",437874133,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30036.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30036";

cljs.core.async.t_cljs$core$async30036.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"cljs.core.async/t_cljs$core$async30036");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30036 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30036(alt_flag__$1,flag__$1,meta30037){
return (new cljs.core.async.t_cljs$core$async30036(alt_flag__$1,flag__$1,meta30037));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30036(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30042 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30042 = (function (alt_handler,flag,cb,meta30043){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30043 = meta30043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30044,meta30043__$1){
var self__ = this;
var _30044__$1 = this;
return (new cljs.core.async.t_cljs$core$async30042(self__.alt_handler,self__.flag,self__.cb,meta30043__$1));
});

cljs.core.async.t_cljs$core$async30042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30044){
var self__ = this;
var _30044__$1 = this;
return self__.meta30043;
});

cljs.core.async.t_cljs$core$async30042.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30042.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30042.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30042.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30042.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30043","meta30043",873762916,null)], null);
});

cljs.core.async.t_cljs$core$async30042.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30042.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30042";

cljs.core.async.t_cljs$core$async30042.cljs$lang$ctorPrWriter = (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"cljs.core.async/t_cljs$core$async30042");
});

cljs.core.async.__GT_t_cljs$core$async30042 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30042(alt_handler__$1,flag__$1,cb__$1,meta30043){
return (new cljs.core.async.t_cljs$core$async30042(alt_handler__$1,flag__$1,cb__$1,meta30043));
});

}

return (new cljs.core.async.t_cljs$core$async30042(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30045_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30045_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30046_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30046_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25812__auto__ = wport;
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30047 = (i + (1));
i = G__30047;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25812__auto__ = ret;
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__25800__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25800__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25800__auto__;
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
var args__26889__auto__ = [];
var len__26882__auto___30053 = arguments.length;
var i__26883__auto___30054 = (0);
while(true){
if((i__26883__auto___30054 < len__26882__auto___30053)){
args__26889__auto__.push((arguments[i__26883__auto___30054]));

var G__30055 = (i__26883__auto___30054 + (1));
i__26883__auto___30054 = G__30055;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30050){
var map__30051 = p__30050;
var map__30051__$1 = ((((!((map__30051 == null)))?((((map__30051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30051):map__30051);
var opts = map__30051__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30048){
var G__30049 = cljs.core.first.call(null,seq30048);
var seq30048__$1 = cljs.core.next.call(null,seq30048);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30049,seq30048__$1);
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
var args30056 = [];
var len__26882__auto___30106 = arguments.length;
var i__26883__auto___30107 = (0);
while(true){
if((i__26883__auto___30107 < len__26882__auto___30106)){
args30056.push((arguments[i__26883__auto___30107]));

var G__30108 = (i__26883__auto___30107 + (1));
i__26883__auto___30107 = G__30108;
continue;
} else {
}
break;
}

var G__30058 = args30056.length;
switch (G__30058) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30056.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29943__auto___30110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto___30110){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto___30110){
return (function (state_30082){
var state_val_30083 = (state_30082[(1)]);
if((state_val_30083 === (7))){
var inst_30078 = (state_30082[(2)]);
var state_30082__$1 = state_30082;
var statearr_30084_30111 = state_30082__$1;
(statearr_30084_30111[(2)] = inst_30078);

(statearr_30084_30111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (1))){
var state_30082__$1 = state_30082;
var statearr_30085_30112 = state_30082__$1;
(statearr_30085_30112[(2)] = null);

(statearr_30085_30112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (4))){
var inst_30061 = (state_30082[(7)]);
var inst_30061__$1 = (state_30082[(2)]);
var inst_30062 = (inst_30061__$1 == null);
var state_30082__$1 = (function (){var statearr_30086 = state_30082;
(statearr_30086[(7)] = inst_30061__$1);

return statearr_30086;
})();
if(cljs.core.truth_(inst_30062)){
var statearr_30087_30113 = state_30082__$1;
(statearr_30087_30113[(1)] = (5));

} else {
var statearr_30088_30114 = state_30082__$1;
(statearr_30088_30114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (13))){
var state_30082__$1 = state_30082;
var statearr_30089_30115 = state_30082__$1;
(statearr_30089_30115[(2)] = null);

(statearr_30089_30115[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (6))){
var inst_30061 = (state_30082[(7)]);
var state_30082__$1 = state_30082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30082__$1,(11),to,inst_30061);
} else {
if((state_val_30083 === (3))){
var inst_30080 = (state_30082[(2)]);
var state_30082__$1 = state_30082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30082__$1,inst_30080);
} else {
if((state_val_30083 === (12))){
var state_30082__$1 = state_30082;
var statearr_30090_30116 = state_30082__$1;
(statearr_30090_30116[(2)] = null);

(statearr_30090_30116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (2))){
var state_30082__$1 = state_30082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30082__$1,(4),from);
} else {
if((state_val_30083 === (11))){
var inst_30071 = (state_30082[(2)]);
var state_30082__$1 = state_30082;
if(cljs.core.truth_(inst_30071)){
var statearr_30091_30117 = state_30082__$1;
(statearr_30091_30117[(1)] = (12));

} else {
var statearr_30092_30118 = state_30082__$1;
(statearr_30092_30118[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (9))){
var state_30082__$1 = state_30082;
var statearr_30093_30119 = state_30082__$1;
(statearr_30093_30119[(2)] = null);

(statearr_30093_30119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (5))){
var state_30082__$1 = state_30082;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30094_30120 = state_30082__$1;
(statearr_30094_30120[(1)] = (8));

} else {
var statearr_30095_30121 = state_30082__$1;
(statearr_30095_30121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (14))){
var inst_30076 = (state_30082[(2)]);
var state_30082__$1 = state_30082;
var statearr_30096_30122 = state_30082__$1;
(statearr_30096_30122[(2)] = inst_30076);

(statearr_30096_30122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (10))){
var inst_30068 = (state_30082[(2)]);
var state_30082__$1 = state_30082;
var statearr_30097_30123 = state_30082__$1;
(statearr_30097_30123[(2)] = inst_30068);

(statearr_30097_30123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30083 === (8))){
var inst_30065 = cljs.core.async.close_BANG_.call(null,to);
var state_30082__$1 = state_30082;
var statearr_30098_30124 = state_30082__$1;
(statearr_30098_30124[(2)] = inst_30065);

(statearr_30098_30124[(1)] = (10));


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
});})(c__29943__auto___30110))
;
return ((function (switch__29831__auto__,c__29943__auto___30110){
return (function() {
var cljs$core$async$state_machine__29832__auto__ = null;
var cljs$core$async$state_machine__29832__auto____0 = (function (){
var statearr_30102 = [null,null,null,null,null,null,null,null];
(statearr_30102[(0)] = cljs$core$async$state_machine__29832__auto__);

(statearr_30102[(1)] = (1));

return statearr_30102;
});
var cljs$core$async$state_machine__29832__auto____1 = (function (state_30082){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_30082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e30103){if((e30103 instanceof Object)){
var ex__29835__auto__ = e30103;
var statearr_30104_30125 = state_30082;
(statearr_30104_30125[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30126 = state_30082;
state_30082 = G__30126;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
cljs$core$async$state_machine__29832__auto__ = function(state_30082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29832__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29832__auto____1.call(this,state_30082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29832__auto____0;
cljs$core$async$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29832__auto____1;
return cljs$core$async$state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto___30110))
})();
var state__29945__auto__ = (function (){var statearr_30105 = f__29944__auto__.call(null);
(statearr_30105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___30110);

return statearr_30105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto___30110))
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
return (function (p__30310){
var vec__30311 = p__30310;
var v = cljs.core.nth.call(null,vec__30311,(0),null);
var p = cljs.core.nth.call(null,vec__30311,(1),null);
var job = vec__30311;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29943__auto___30493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto___30493,res,vec__30311,v,p,job,jobs,results){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto___30493,res,vec__30311,v,p,job,jobs,results){
return (function (state_30316){
var state_val_30317 = (state_30316[(1)]);
if((state_val_30317 === (1))){
var state_30316__$1 = state_30316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30316__$1,(2),res,v);
} else {
if((state_val_30317 === (2))){
var inst_30313 = (state_30316[(2)]);
var inst_30314 = cljs.core.async.close_BANG_.call(null,res);
var state_30316__$1 = (function (){var statearr_30318 = state_30316;
(statearr_30318[(7)] = inst_30313);

return statearr_30318;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30316__$1,inst_30314);
} else {
return null;
}
}
});})(c__29943__auto___30493,res,vec__30311,v,p,job,jobs,results))
;
return ((function (switch__29831__auto__,c__29943__auto___30493,res,vec__30311,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____0 = (function (){
var statearr_30322 = [null,null,null,null,null,null,null,null];
(statearr_30322[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__);

(statearr_30322[(1)] = (1));

return statearr_30322;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____1 = (function (state_30316){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_30316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e30323){if((e30323 instanceof Object)){
var ex__29835__auto__ = e30323;
var statearr_30324_30494 = state_30316;
(statearr_30324_30494[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30495 = state_30316;
state_30316 = G__30495;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__ = function(state_30316){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____1.call(this,state_30316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto___30493,res,vec__30311,v,p,job,jobs,results))
})();
var state__29945__auto__ = (function (){var statearr_30325 = f__29944__auto__.call(null);
(statearr_30325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___30493);

return statearr_30325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto___30493,res,vec__30311,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30326){
var vec__30327 = p__30326;
var v = cljs.core.nth.call(null,vec__30327,(0),null);
var p = cljs.core.nth.call(null,vec__30327,(1),null);
var job = vec__30327;
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
var n__26727__auto___30496 = n;
var __30497 = (0);
while(true){
if((__30497 < n__26727__auto___30496)){
var G__30328_30498 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30328_30498) {
case "compute":
var c__29943__auto___30500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30497,c__29943__auto___30500,G__30328_30498,n__26727__auto___30496,jobs,results,process,async){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (__30497,c__29943__auto___30500,G__30328_30498,n__26727__auto___30496,jobs,results,process,async){
return (function (state_30341){
var state_val_30342 = (state_30341[(1)]);
if((state_val_30342 === (1))){
var state_30341__$1 = state_30341;
var statearr_30343_30501 = state_30341__$1;
(statearr_30343_30501[(2)] = null);

(statearr_30343_30501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (2))){
var state_30341__$1 = state_30341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30341__$1,(4),jobs);
} else {
if((state_val_30342 === (3))){
var inst_30339 = (state_30341[(2)]);
var state_30341__$1 = state_30341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30341__$1,inst_30339);
} else {
if((state_val_30342 === (4))){
var inst_30331 = (state_30341[(2)]);
var inst_30332 = process.call(null,inst_30331);
var state_30341__$1 = state_30341;
if(cljs.core.truth_(inst_30332)){
var statearr_30344_30502 = state_30341__$1;
(statearr_30344_30502[(1)] = (5));

} else {
var statearr_30345_30503 = state_30341__$1;
(statearr_30345_30503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (5))){
var state_30341__$1 = state_30341;
var statearr_30346_30504 = state_30341__$1;
(statearr_30346_30504[(2)] = null);

(statearr_30346_30504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (6))){
var state_30341__$1 = state_30341;
var statearr_30347_30505 = state_30341__$1;
(statearr_30347_30505[(2)] = null);

(statearr_30347_30505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (7))){
var inst_30337 = (state_30341[(2)]);
var state_30341__$1 = state_30341;
var statearr_30348_30506 = state_30341__$1;
(statearr_30348_30506[(2)] = inst_30337);

(statearr_30348_30506[(1)] = (3));


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
});})(__30497,c__29943__auto___30500,G__30328_30498,n__26727__auto___30496,jobs,results,process,async))
;
return ((function (__30497,switch__29831__auto__,c__29943__auto___30500,G__30328_30498,n__26727__auto___30496,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____0 = (function (){
var statearr_30352 = [null,null,null,null,null,null,null];
(statearr_30352[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__);

(statearr_30352[(1)] = (1));

return statearr_30352;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____1 = (function (state_30341){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_30341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e30353){if((e30353 instanceof Object)){
var ex__29835__auto__ = e30353;
var statearr_30354_30507 = state_30341;
(statearr_30354_30507[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30508 = state_30341;
state_30341 = G__30508;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__ = function(state_30341){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____1.call(this,state_30341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__;
})()
;})(__30497,switch__29831__auto__,c__29943__auto___30500,G__30328_30498,n__26727__auto___30496,jobs,results,process,async))
})();
var state__29945__auto__ = (function (){var statearr_30355 = f__29944__auto__.call(null);
(statearr_30355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___30500);

return statearr_30355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(__30497,c__29943__auto___30500,G__30328_30498,n__26727__auto___30496,jobs,results,process,async))
);


break;
case "async":
var c__29943__auto___30509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30497,c__29943__auto___30509,G__30328_30498,n__26727__auto___30496,jobs,results,process,async){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (__30497,c__29943__auto___30509,G__30328_30498,n__26727__auto___30496,jobs,results,process,async){
return (function (state_30368){
var state_val_30369 = (state_30368[(1)]);
if((state_val_30369 === (1))){
var state_30368__$1 = state_30368;
var statearr_30370_30510 = state_30368__$1;
(statearr_30370_30510[(2)] = null);

(statearr_30370_30510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (2))){
var state_30368__$1 = state_30368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30368__$1,(4),jobs);
} else {
if((state_val_30369 === (3))){
var inst_30366 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30368__$1,inst_30366);
} else {
if((state_val_30369 === (4))){
var inst_30358 = (state_30368[(2)]);
var inst_30359 = async.call(null,inst_30358);
var state_30368__$1 = state_30368;
if(cljs.core.truth_(inst_30359)){
var statearr_30371_30511 = state_30368__$1;
(statearr_30371_30511[(1)] = (5));

} else {
var statearr_30372_30512 = state_30368__$1;
(statearr_30372_30512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (5))){
var state_30368__$1 = state_30368;
var statearr_30373_30513 = state_30368__$1;
(statearr_30373_30513[(2)] = null);

(statearr_30373_30513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (6))){
var state_30368__$1 = state_30368;
var statearr_30374_30514 = state_30368__$1;
(statearr_30374_30514[(2)] = null);

(statearr_30374_30514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30369 === (7))){
var inst_30364 = (state_30368[(2)]);
var state_30368__$1 = state_30368;
var statearr_30375_30515 = state_30368__$1;
(statearr_30375_30515[(2)] = inst_30364);

(statearr_30375_30515[(1)] = (3));


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
});})(__30497,c__29943__auto___30509,G__30328_30498,n__26727__auto___30496,jobs,results,process,async))
;
return ((function (__30497,switch__29831__auto__,c__29943__auto___30509,G__30328_30498,n__26727__auto___30496,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____0 = (function (){
var statearr_30379 = [null,null,null,null,null,null,null];
(statearr_30379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__);

(statearr_30379[(1)] = (1));

return statearr_30379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____1 = (function (state_30368){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_30368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e30380){if((e30380 instanceof Object)){
var ex__29835__auto__ = e30380;
var statearr_30381_30516 = state_30368;
(statearr_30381_30516[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30517 = state_30368;
state_30368 = G__30517;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__ = function(state_30368){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____1.call(this,state_30368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__;
})()
;})(__30497,switch__29831__auto__,c__29943__auto___30509,G__30328_30498,n__26727__auto___30496,jobs,results,process,async))
})();
var state__29945__auto__ = (function (){var statearr_30382 = f__29944__auto__.call(null);
(statearr_30382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___30509);

return statearr_30382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(__30497,c__29943__auto___30509,G__30328_30498,n__26727__auto___30496,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30518 = (__30497 + (1));
__30497 = G__30518;
continue;
} else {
}
break;
}

var c__29943__auto___30519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto___30519,jobs,results,process,async){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto___30519,jobs,results,process,async){
return (function (state_30404){
var state_val_30405 = (state_30404[(1)]);
if((state_val_30405 === (1))){
var state_30404__$1 = state_30404;
var statearr_30406_30520 = state_30404__$1;
(statearr_30406_30520[(2)] = null);

(statearr_30406_30520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30405 === (2))){
var state_30404__$1 = state_30404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30404__$1,(4),from);
} else {
if((state_val_30405 === (3))){
var inst_30402 = (state_30404[(2)]);
var state_30404__$1 = state_30404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30404__$1,inst_30402);
} else {
if((state_val_30405 === (4))){
var inst_30385 = (state_30404[(7)]);
var inst_30385__$1 = (state_30404[(2)]);
var inst_30386 = (inst_30385__$1 == null);
var state_30404__$1 = (function (){var statearr_30407 = state_30404;
(statearr_30407[(7)] = inst_30385__$1);

return statearr_30407;
})();
if(cljs.core.truth_(inst_30386)){
var statearr_30408_30521 = state_30404__$1;
(statearr_30408_30521[(1)] = (5));

} else {
var statearr_30409_30522 = state_30404__$1;
(statearr_30409_30522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30405 === (5))){
var inst_30388 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30404__$1 = state_30404;
var statearr_30410_30523 = state_30404__$1;
(statearr_30410_30523[(2)] = inst_30388);

(statearr_30410_30523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30405 === (6))){
var inst_30390 = (state_30404[(8)]);
var inst_30385 = (state_30404[(7)]);
var inst_30390__$1 = cljs.core.async.chan.call(null,(1));
var inst_30391 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30392 = [inst_30385,inst_30390__$1];
var inst_30393 = (new cljs.core.PersistentVector(null,2,(5),inst_30391,inst_30392,null));
var state_30404__$1 = (function (){var statearr_30411 = state_30404;
(statearr_30411[(8)] = inst_30390__$1);

return statearr_30411;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30404__$1,(8),jobs,inst_30393);
} else {
if((state_val_30405 === (7))){
var inst_30400 = (state_30404[(2)]);
var state_30404__$1 = state_30404;
var statearr_30412_30524 = state_30404__$1;
(statearr_30412_30524[(2)] = inst_30400);

(statearr_30412_30524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30405 === (8))){
var inst_30390 = (state_30404[(8)]);
var inst_30395 = (state_30404[(2)]);
var state_30404__$1 = (function (){var statearr_30413 = state_30404;
(statearr_30413[(9)] = inst_30395);

return statearr_30413;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30404__$1,(9),results,inst_30390);
} else {
if((state_val_30405 === (9))){
var inst_30397 = (state_30404[(2)]);
var state_30404__$1 = (function (){var statearr_30414 = state_30404;
(statearr_30414[(10)] = inst_30397);

return statearr_30414;
})();
var statearr_30415_30525 = state_30404__$1;
(statearr_30415_30525[(2)] = null);

(statearr_30415_30525[(1)] = (2));


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
});})(c__29943__auto___30519,jobs,results,process,async))
;
return ((function (switch__29831__auto__,c__29943__auto___30519,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____0 = (function (){
var statearr_30419 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30419[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__);

(statearr_30419[(1)] = (1));

return statearr_30419;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____1 = (function (state_30404){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_30404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e30420){if((e30420 instanceof Object)){
var ex__29835__auto__ = e30420;
var statearr_30421_30526 = state_30404;
(statearr_30421_30526[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30527 = state_30404;
state_30404 = G__30527;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__ = function(state_30404){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____1.call(this,state_30404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto___30519,jobs,results,process,async))
})();
var state__29945__auto__ = (function (){var statearr_30422 = f__29944__auto__.call(null);
(statearr_30422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___30519);

return statearr_30422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto___30519,jobs,results,process,async))
);


var c__29943__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto__,jobs,results,process,async){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto__,jobs,results,process,async){
return (function (state_30460){
var state_val_30461 = (state_30460[(1)]);
if((state_val_30461 === (7))){
var inst_30456 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
var statearr_30462_30528 = state_30460__$1;
(statearr_30462_30528[(2)] = inst_30456);

(statearr_30462_30528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (20))){
var state_30460__$1 = state_30460;
var statearr_30463_30529 = state_30460__$1;
(statearr_30463_30529[(2)] = null);

(statearr_30463_30529[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (1))){
var state_30460__$1 = state_30460;
var statearr_30464_30530 = state_30460__$1;
(statearr_30464_30530[(2)] = null);

(statearr_30464_30530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (4))){
var inst_30425 = (state_30460[(7)]);
var inst_30425__$1 = (state_30460[(2)]);
var inst_30426 = (inst_30425__$1 == null);
var state_30460__$1 = (function (){var statearr_30465 = state_30460;
(statearr_30465[(7)] = inst_30425__$1);

return statearr_30465;
})();
if(cljs.core.truth_(inst_30426)){
var statearr_30466_30531 = state_30460__$1;
(statearr_30466_30531[(1)] = (5));

} else {
var statearr_30467_30532 = state_30460__$1;
(statearr_30467_30532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (15))){
var inst_30438 = (state_30460[(8)]);
var state_30460__$1 = state_30460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30460__$1,(18),to,inst_30438);
} else {
if((state_val_30461 === (21))){
var inst_30451 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
var statearr_30468_30533 = state_30460__$1;
(statearr_30468_30533[(2)] = inst_30451);

(statearr_30468_30533[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (13))){
var inst_30453 = (state_30460[(2)]);
var state_30460__$1 = (function (){var statearr_30469 = state_30460;
(statearr_30469[(9)] = inst_30453);

return statearr_30469;
})();
var statearr_30470_30534 = state_30460__$1;
(statearr_30470_30534[(2)] = null);

(statearr_30470_30534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (6))){
var inst_30425 = (state_30460[(7)]);
var state_30460__$1 = state_30460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30460__$1,(11),inst_30425);
} else {
if((state_val_30461 === (17))){
var inst_30446 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
if(cljs.core.truth_(inst_30446)){
var statearr_30471_30535 = state_30460__$1;
(statearr_30471_30535[(1)] = (19));

} else {
var statearr_30472_30536 = state_30460__$1;
(statearr_30472_30536[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (3))){
var inst_30458 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30460__$1,inst_30458);
} else {
if((state_val_30461 === (12))){
var inst_30435 = (state_30460[(10)]);
var state_30460__$1 = state_30460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30460__$1,(14),inst_30435);
} else {
if((state_val_30461 === (2))){
var state_30460__$1 = state_30460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30460__$1,(4),results);
} else {
if((state_val_30461 === (19))){
var state_30460__$1 = state_30460;
var statearr_30473_30537 = state_30460__$1;
(statearr_30473_30537[(2)] = null);

(statearr_30473_30537[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (11))){
var inst_30435 = (state_30460[(2)]);
var state_30460__$1 = (function (){var statearr_30474 = state_30460;
(statearr_30474[(10)] = inst_30435);

return statearr_30474;
})();
var statearr_30475_30538 = state_30460__$1;
(statearr_30475_30538[(2)] = null);

(statearr_30475_30538[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (9))){
var state_30460__$1 = state_30460;
var statearr_30476_30539 = state_30460__$1;
(statearr_30476_30539[(2)] = null);

(statearr_30476_30539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (5))){
var state_30460__$1 = state_30460;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30477_30540 = state_30460__$1;
(statearr_30477_30540[(1)] = (8));

} else {
var statearr_30478_30541 = state_30460__$1;
(statearr_30478_30541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (14))){
var inst_30438 = (state_30460[(8)]);
var inst_30440 = (state_30460[(11)]);
var inst_30438__$1 = (state_30460[(2)]);
var inst_30439 = (inst_30438__$1 == null);
var inst_30440__$1 = cljs.core.not.call(null,inst_30439);
var state_30460__$1 = (function (){var statearr_30479 = state_30460;
(statearr_30479[(8)] = inst_30438__$1);

(statearr_30479[(11)] = inst_30440__$1);

return statearr_30479;
})();
if(inst_30440__$1){
var statearr_30480_30542 = state_30460__$1;
(statearr_30480_30542[(1)] = (15));

} else {
var statearr_30481_30543 = state_30460__$1;
(statearr_30481_30543[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (16))){
var inst_30440 = (state_30460[(11)]);
var state_30460__$1 = state_30460;
var statearr_30482_30544 = state_30460__$1;
(statearr_30482_30544[(2)] = inst_30440);

(statearr_30482_30544[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (10))){
var inst_30432 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
var statearr_30483_30545 = state_30460__$1;
(statearr_30483_30545[(2)] = inst_30432);

(statearr_30483_30545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (18))){
var inst_30443 = (state_30460[(2)]);
var state_30460__$1 = state_30460;
var statearr_30484_30546 = state_30460__$1;
(statearr_30484_30546[(2)] = inst_30443);

(statearr_30484_30546[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30461 === (8))){
var inst_30429 = cljs.core.async.close_BANG_.call(null,to);
var state_30460__$1 = state_30460;
var statearr_30485_30547 = state_30460__$1;
(statearr_30485_30547[(2)] = inst_30429);

(statearr_30485_30547[(1)] = (10));


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
});})(c__29943__auto__,jobs,results,process,async))
;
return ((function (switch__29831__auto__,c__29943__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____0 = (function (){
var statearr_30489 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30489[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__);

(statearr_30489[(1)] = (1));

return statearr_30489;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____1 = (function (state_30460){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_30460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e30490){if((e30490 instanceof Object)){
var ex__29835__auto__ = e30490;
var statearr_30491_30548 = state_30460;
(statearr_30491_30548[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30549 = state_30460;
state_30460 = G__30549;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__ = function(state_30460){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____1.call(this,state_30460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29832__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto__,jobs,results,process,async))
})();
var state__29945__auto__ = (function (){var statearr_30492 = f__29944__auto__.call(null);
(statearr_30492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto__);

return statearr_30492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto__,jobs,results,process,async))
);

return c__29943__auto__;
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
var args30550 = [];
var len__26882__auto___30553 = arguments.length;
var i__26883__auto___30554 = (0);
while(true){
if((i__26883__auto___30554 < len__26882__auto___30553)){
args30550.push((arguments[i__26883__auto___30554]));

var G__30555 = (i__26883__auto___30554 + (1));
i__26883__auto___30554 = G__30555;
continue;
} else {
}
break;
}

var G__30552 = args30550.length;
switch (G__30552) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30550.length)].join('')));

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
var args30557 = [];
var len__26882__auto___30560 = arguments.length;
var i__26883__auto___30561 = (0);
while(true){
if((i__26883__auto___30561 < len__26882__auto___30560)){
args30557.push((arguments[i__26883__auto___30561]));

var G__30562 = (i__26883__auto___30561 + (1));
i__26883__auto___30561 = G__30562;
continue;
} else {
}
break;
}

var G__30559 = args30557.length;
switch (G__30559) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30557.length)].join('')));

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
var args30564 = [];
var len__26882__auto___30617 = arguments.length;
var i__26883__auto___30618 = (0);
while(true){
if((i__26883__auto___30618 < len__26882__auto___30617)){
args30564.push((arguments[i__26883__auto___30618]));

var G__30619 = (i__26883__auto___30618 + (1));
i__26883__auto___30618 = G__30619;
continue;
} else {
}
break;
}

var G__30566 = args30564.length;
switch (G__30566) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30564.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29943__auto___30621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto___30621,tc,fc){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto___30621,tc,fc){
return (function (state_30592){
var state_val_30593 = (state_30592[(1)]);
if((state_val_30593 === (7))){
var inst_30588 = (state_30592[(2)]);
var state_30592__$1 = state_30592;
var statearr_30594_30622 = state_30592__$1;
(statearr_30594_30622[(2)] = inst_30588);

(statearr_30594_30622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30593 === (1))){
var state_30592__$1 = state_30592;
var statearr_30595_30623 = state_30592__$1;
(statearr_30595_30623[(2)] = null);

(statearr_30595_30623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30593 === (4))){
var inst_30569 = (state_30592[(7)]);
var inst_30569__$1 = (state_30592[(2)]);
var inst_30570 = (inst_30569__$1 == null);
var state_30592__$1 = (function (){var statearr_30596 = state_30592;
(statearr_30596[(7)] = inst_30569__$1);

return statearr_30596;
})();
if(cljs.core.truth_(inst_30570)){
var statearr_30597_30624 = state_30592__$1;
(statearr_30597_30624[(1)] = (5));

} else {
var statearr_30598_30625 = state_30592__$1;
(statearr_30598_30625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30593 === (13))){
var state_30592__$1 = state_30592;
var statearr_30599_30626 = state_30592__$1;
(statearr_30599_30626[(2)] = null);

(statearr_30599_30626[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30593 === (6))){
var inst_30569 = (state_30592[(7)]);
var inst_30575 = p.call(null,inst_30569);
var state_30592__$1 = state_30592;
if(cljs.core.truth_(inst_30575)){
var statearr_30600_30627 = state_30592__$1;
(statearr_30600_30627[(1)] = (9));

} else {
var statearr_30601_30628 = state_30592__$1;
(statearr_30601_30628[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30593 === (3))){
var inst_30590 = (state_30592[(2)]);
var state_30592__$1 = state_30592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30592__$1,inst_30590);
} else {
if((state_val_30593 === (12))){
var state_30592__$1 = state_30592;
var statearr_30602_30629 = state_30592__$1;
(statearr_30602_30629[(2)] = null);

(statearr_30602_30629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30593 === (2))){
var state_30592__$1 = state_30592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30592__$1,(4),ch);
} else {
if((state_val_30593 === (11))){
var inst_30569 = (state_30592[(7)]);
var inst_30579 = (state_30592[(2)]);
var state_30592__$1 = state_30592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30592__$1,(8),inst_30579,inst_30569);
} else {
if((state_val_30593 === (9))){
var state_30592__$1 = state_30592;
var statearr_30603_30630 = state_30592__$1;
(statearr_30603_30630[(2)] = tc);

(statearr_30603_30630[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30593 === (5))){
var inst_30572 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30573 = cljs.core.async.close_BANG_.call(null,fc);
var state_30592__$1 = (function (){var statearr_30604 = state_30592;
(statearr_30604[(8)] = inst_30572);

return statearr_30604;
})();
var statearr_30605_30631 = state_30592__$1;
(statearr_30605_30631[(2)] = inst_30573);

(statearr_30605_30631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30593 === (14))){
var inst_30586 = (state_30592[(2)]);
var state_30592__$1 = state_30592;
var statearr_30606_30632 = state_30592__$1;
(statearr_30606_30632[(2)] = inst_30586);

(statearr_30606_30632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30593 === (10))){
var state_30592__$1 = state_30592;
var statearr_30607_30633 = state_30592__$1;
(statearr_30607_30633[(2)] = fc);

(statearr_30607_30633[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30593 === (8))){
var inst_30581 = (state_30592[(2)]);
var state_30592__$1 = state_30592;
if(cljs.core.truth_(inst_30581)){
var statearr_30608_30634 = state_30592__$1;
(statearr_30608_30634[(1)] = (12));

} else {
var statearr_30609_30635 = state_30592__$1;
(statearr_30609_30635[(1)] = (13));

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
});})(c__29943__auto___30621,tc,fc))
;
return ((function (switch__29831__auto__,c__29943__auto___30621,tc,fc){
return (function() {
var cljs$core$async$state_machine__29832__auto__ = null;
var cljs$core$async$state_machine__29832__auto____0 = (function (){
var statearr_30613 = [null,null,null,null,null,null,null,null,null];
(statearr_30613[(0)] = cljs$core$async$state_machine__29832__auto__);

(statearr_30613[(1)] = (1));

return statearr_30613;
});
var cljs$core$async$state_machine__29832__auto____1 = (function (state_30592){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_30592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e30614){if((e30614 instanceof Object)){
var ex__29835__auto__ = e30614;
var statearr_30615_30636 = state_30592;
(statearr_30615_30636[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30637 = state_30592;
state_30592 = G__30637;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
cljs$core$async$state_machine__29832__auto__ = function(state_30592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29832__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29832__auto____1.call(this,state_30592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29832__auto____0;
cljs$core$async$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29832__auto____1;
return cljs$core$async$state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto___30621,tc,fc))
})();
var state__29945__auto__ = (function (){var statearr_30616 = f__29944__auto__.call(null);
(statearr_30616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___30621);

return statearr_30616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto___30621,tc,fc))
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
var c__29943__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto__){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto__){
return (function (state_30701){
var state_val_30702 = (state_30701[(1)]);
if((state_val_30702 === (7))){
var inst_30697 = (state_30701[(2)]);
var state_30701__$1 = state_30701;
var statearr_30703_30724 = state_30701__$1;
(statearr_30703_30724[(2)] = inst_30697);

(statearr_30703_30724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (1))){
var inst_30681 = init;
var state_30701__$1 = (function (){var statearr_30704 = state_30701;
(statearr_30704[(7)] = inst_30681);

return statearr_30704;
})();
var statearr_30705_30725 = state_30701__$1;
(statearr_30705_30725[(2)] = null);

(statearr_30705_30725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (4))){
var inst_30684 = (state_30701[(8)]);
var inst_30684__$1 = (state_30701[(2)]);
var inst_30685 = (inst_30684__$1 == null);
var state_30701__$1 = (function (){var statearr_30706 = state_30701;
(statearr_30706[(8)] = inst_30684__$1);

return statearr_30706;
})();
if(cljs.core.truth_(inst_30685)){
var statearr_30707_30726 = state_30701__$1;
(statearr_30707_30726[(1)] = (5));

} else {
var statearr_30708_30727 = state_30701__$1;
(statearr_30708_30727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (6))){
var inst_30684 = (state_30701[(8)]);
var inst_30688 = (state_30701[(9)]);
var inst_30681 = (state_30701[(7)]);
var inst_30688__$1 = f.call(null,inst_30681,inst_30684);
var inst_30689 = cljs.core.reduced_QMARK_.call(null,inst_30688__$1);
var state_30701__$1 = (function (){var statearr_30709 = state_30701;
(statearr_30709[(9)] = inst_30688__$1);

return statearr_30709;
})();
if(inst_30689){
var statearr_30710_30728 = state_30701__$1;
(statearr_30710_30728[(1)] = (8));

} else {
var statearr_30711_30729 = state_30701__$1;
(statearr_30711_30729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (3))){
var inst_30699 = (state_30701[(2)]);
var state_30701__$1 = state_30701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30701__$1,inst_30699);
} else {
if((state_val_30702 === (2))){
var state_30701__$1 = state_30701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30701__$1,(4),ch);
} else {
if((state_val_30702 === (9))){
var inst_30688 = (state_30701[(9)]);
var inst_30681 = inst_30688;
var state_30701__$1 = (function (){var statearr_30712 = state_30701;
(statearr_30712[(7)] = inst_30681);

return statearr_30712;
})();
var statearr_30713_30730 = state_30701__$1;
(statearr_30713_30730[(2)] = null);

(statearr_30713_30730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (5))){
var inst_30681 = (state_30701[(7)]);
var state_30701__$1 = state_30701;
var statearr_30714_30731 = state_30701__$1;
(statearr_30714_30731[(2)] = inst_30681);

(statearr_30714_30731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (10))){
var inst_30695 = (state_30701[(2)]);
var state_30701__$1 = state_30701;
var statearr_30715_30732 = state_30701__$1;
(statearr_30715_30732[(2)] = inst_30695);

(statearr_30715_30732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (8))){
var inst_30688 = (state_30701[(9)]);
var inst_30691 = cljs.core.deref.call(null,inst_30688);
var state_30701__$1 = state_30701;
var statearr_30716_30733 = state_30701__$1;
(statearr_30716_30733[(2)] = inst_30691);

(statearr_30716_30733[(1)] = (10));


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
});})(c__29943__auto__))
;
return ((function (switch__29831__auto__,c__29943__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29832__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29832__auto____0 = (function (){
var statearr_30720 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30720[(0)] = cljs$core$async$reduce_$_state_machine__29832__auto__);

(statearr_30720[(1)] = (1));

return statearr_30720;
});
var cljs$core$async$reduce_$_state_machine__29832__auto____1 = (function (state_30701){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_30701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e30721){if((e30721 instanceof Object)){
var ex__29835__auto__ = e30721;
var statearr_30722_30734 = state_30701;
(statearr_30722_30734[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30735 = state_30701;
state_30701 = G__30735;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29832__auto__ = function(state_30701){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29832__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29832__auto____1.call(this,state_30701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29832__auto____0;
cljs$core$async$reduce_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29832__auto____1;
return cljs$core$async$reduce_$_state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto__))
})();
var state__29945__auto__ = (function (){var statearr_30723 = f__29944__auto__.call(null);
(statearr_30723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto__);

return statearr_30723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto__))
);

return c__29943__auto__;
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
var args30736 = [];
var len__26882__auto___30788 = arguments.length;
var i__26883__auto___30789 = (0);
while(true){
if((i__26883__auto___30789 < len__26882__auto___30788)){
args30736.push((arguments[i__26883__auto___30789]));

var G__30790 = (i__26883__auto___30789 + (1));
i__26883__auto___30789 = G__30790;
continue;
} else {
}
break;
}

var G__30738 = args30736.length;
switch (G__30738) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30736.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29943__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto__){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto__){
return (function (state_30763){
var state_val_30764 = (state_30763[(1)]);
if((state_val_30764 === (7))){
var inst_30745 = (state_30763[(2)]);
var state_30763__$1 = state_30763;
var statearr_30765_30792 = state_30763__$1;
(statearr_30765_30792[(2)] = inst_30745);

(statearr_30765_30792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (1))){
var inst_30739 = cljs.core.seq.call(null,coll);
var inst_30740 = inst_30739;
var state_30763__$1 = (function (){var statearr_30766 = state_30763;
(statearr_30766[(7)] = inst_30740);

return statearr_30766;
})();
var statearr_30767_30793 = state_30763__$1;
(statearr_30767_30793[(2)] = null);

(statearr_30767_30793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (4))){
var inst_30740 = (state_30763[(7)]);
var inst_30743 = cljs.core.first.call(null,inst_30740);
var state_30763__$1 = state_30763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30763__$1,(7),ch,inst_30743);
} else {
if((state_val_30764 === (13))){
var inst_30757 = (state_30763[(2)]);
var state_30763__$1 = state_30763;
var statearr_30768_30794 = state_30763__$1;
(statearr_30768_30794[(2)] = inst_30757);

(statearr_30768_30794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (6))){
var inst_30748 = (state_30763[(2)]);
var state_30763__$1 = state_30763;
if(cljs.core.truth_(inst_30748)){
var statearr_30769_30795 = state_30763__$1;
(statearr_30769_30795[(1)] = (8));

} else {
var statearr_30770_30796 = state_30763__$1;
(statearr_30770_30796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (3))){
var inst_30761 = (state_30763[(2)]);
var state_30763__$1 = state_30763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30763__$1,inst_30761);
} else {
if((state_val_30764 === (12))){
var state_30763__$1 = state_30763;
var statearr_30771_30797 = state_30763__$1;
(statearr_30771_30797[(2)] = null);

(statearr_30771_30797[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (2))){
var inst_30740 = (state_30763[(7)]);
var state_30763__$1 = state_30763;
if(cljs.core.truth_(inst_30740)){
var statearr_30772_30798 = state_30763__$1;
(statearr_30772_30798[(1)] = (4));

} else {
var statearr_30773_30799 = state_30763__$1;
(statearr_30773_30799[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (11))){
var inst_30754 = cljs.core.async.close_BANG_.call(null,ch);
var state_30763__$1 = state_30763;
var statearr_30774_30800 = state_30763__$1;
(statearr_30774_30800[(2)] = inst_30754);

(statearr_30774_30800[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (9))){
var state_30763__$1 = state_30763;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30775_30801 = state_30763__$1;
(statearr_30775_30801[(1)] = (11));

} else {
var statearr_30776_30802 = state_30763__$1;
(statearr_30776_30802[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (5))){
var inst_30740 = (state_30763[(7)]);
var state_30763__$1 = state_30763;
var statearr_30777_30803 = state_30763__$1;
(statearr_30777_30803[(2)] = inst_30740);

(statearr_30777_30803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (10))){
var inst_30759 = (state_30763[(2)]);
var state_30763__$1 = state_30763;
var statearr_30778_30804 = state_30763__$1;
(statearr_30778_30804[(2)] = inst_30759);

(statearr_30778_30804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30764 === (8))){
var inst_30740 = (state_30763[(7)]);
var inst_30750 = cljs.core.next.call(null,inst_30740);
var inst_30740__$1 = inst_30750;
var state_30763__$1 = (function (){var statearr_30779 = state_30763;
(statearr_30779[(7)] = inst_30740__$1);

return statearr_30779;
})();
var statearr_30780_30805 = state_30763__$1;
(statearr_30780_30805[(2)] = null);

(statearr_30780_30805[(1)] = (2));


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
});})(c__29943__auto__))
;
return ((function (switch__29831__auto__,c__29943__auto__){
return (function() {
var cljs$core$async$state_machine__29832__auto__ = null;
var cljs$core$async$state_machine__29832__auto____0 = (function (){
var statearr_30784 = [null,null,null,null,null,null,null,null];
(statearr_30784[(0)] = cljs$core$async$state_machine__29832__auto__);

(statearr_30784[(1)] = (1));

return statearr_30784;
});
var cljs$core$async$state_machine__29832__auto____1 = (function (state_30763){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_30763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e30785){if((e30785 instanceof Object)){
var ex__29835__auto__ = e30785;
var statearr_30786_30806 = state_30763;
(statearr_30786_30806[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30807 = state_30763;
state_30763 = G__30807;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
cljs$core$async$state_machine__29832__auto__ = function(state_30763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29832__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29832__auto____1.call(this,state_30763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29832__auto____0;
cljs$core$async$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29832__auto____1;
return cljs$core$async$state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto__))
})();
var state__29945__auto__ = (function (){var statearr_30787 = f__29944__auto__.call(null);
(statearr_30787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto__);

return statearr_30787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto__))
);

return c__29943__auto__;
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
var x__26475__auto__ = (((_ == null))?null:_);
var m__26476__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26475__auto__)]);
if(!((m__26476__auto__ == null))){
return m__26476__auto__.call(null,_);
} else {
var m__26476__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26476__auto____$1 == null))){
return m__26476__auto____$1.call(null,_);
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
var x__26475__auto__ = (((m == null))?null:m);
var m__26476__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26475__auto__)]);
if(!((m__26476__auto__ == null))){
return m__26476__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26476__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26476__auto____$1 == null))){
return m__26476__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__26475__auto__ = (((m == null))?null:m);
var m__26476__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26475__auto__)]);
if(!((m__26476__auto__ == null))){
return m__26476__auto__.call(null,m,ch);
} else {
var m__26476__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26476__auto____$1 == null))){
return m__26476__auto____$1.call(null,m,ch);
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
var x__26475__auto__ = (((m == null))?null:m);
var m__26476__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26475__auto__)]);
if(!((m__26476__auto__ == null))){
return m__26476__auto__.call(null,m);
} else {
var m__26476__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26476__auto____$1 == null))){
return m__26476__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async31029 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31029 = (function (mult,ch,cs,meta31030){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31030 = meta31030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31031,meta31030__$1){
var self__ = this;
var _31031__$1 = this;
return (new cljs.core.async.t_cljs$core$async31029(self__.mult,self__.ch,self__.cs,meta31030__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31029.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31031){
var self__ = this;
var _31031__$1 = this;
return self__.meta31030;
});})(cs))
;

cljs.core.async.t_cljs$core$async31029.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31029.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31029.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31029.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31029.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31029.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31029.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31030","meta31030",1223661469,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31029.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31029";

cljs.core.async.t_cljs$core$async31029.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"cljs.core.async/t_cljs$core$async31029");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31029 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31029(mult__$1,ch__$1,cs__$1,meta31030){
return (new cljs.core.async.t_cljs$core$async31029(mult__$1,ch__$1,cs__$1,meta31030));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31029(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29943__auto___31250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto___31250,cs,m,dchan,dctr,done){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto___31250,cs,m,dchan,dctr,done){
return (function (state_31162){
var state_val_31163 = (state_31162[(1)]);
if((state_val_31163 === (7))){
var inst_31158 = (state_31162[(2)]);
var state_31162__$1 = state_31162;
var statearr_31164_31251 = state_31162__$1;
(statearr_31164_31251[(2)] = inst_31158);

(statearr_31164_31251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (20))){
var inst_31063 = (state_31162[(7)]);
var inst_31073 = cljs.core.first.call(null,inst_31063);
var inst_31074 = cljs.core.nth.call(null,inst_31073,(0),null);
var inst_31075 = cljs.core.nth.call(null,inst_31073,(1),null);
var state_31162__$1 = (function (){var statearr_31165 = state_31162;
(statearr_31165[(8)] = inst_31074);

return statearr_31165;
})();
if(cljs.core.truth_(inst_31075)){
var statearr_31166_31252 = state_31162__$1;
(statearr_31166_31252[(1)] = (22));

} else {
var statearr_31167_31253 = state_31162__$1;
(statearr_31167_31253[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (27))){
var inst_31103 = (state_31162[(9)]);
var inst_31034 = (state_31162[(10)]);
var inst_31105 = (state_31162[(11)]);
var inst_31110 = (state_31162[(12)]);
var inst_31110__$1 = cljs.core._nth.call(null,inst_31103,inst_31105);
var inst_31111 = cljs.core.async.put_BANG_.call(null,inst_31110__$1,inst_31034,done);
var state_31162__$1 = (function (){var statearr_31168 = state_31162;
(statearr_31168[(12)] = inst_31110__$1);

return statearr_31168;
})();
if(cljs.core.truth_(inst_31111)){
var statearr_31169_31254 = state_31162__$1;
(statearr_31169_31254[(1)] = (30));

} else {
var statearr_31170_31255 = state_31162__$1;
(statearr_31170_31255[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (1))){
var state_31162__$1 = state_31162;
var statearr_31171_31256 = state_31162__$1;
(statearr_31171_31256[(2)] = null);

(statearr_31171_31256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (24))){
var inst_31063 = (state_31162[(7)]);
var inst_31080 = (state_31162[(2)]);
var inst_31081 = cljs.core.next.call(null,inst_31063);
var inst_31043 = inst_31081;
var inst_31044 = null;
var inst_31045 = (0);
var inst_31046 = (0);
var state_31162__$1 = (function (){var statearr_31172 = state_31162;
(statearr_31172[(13)] = inst_31046);

(statearr_31172[(14)] = inst_31044);

(statearr_31172[(15)] = inst_31043);

(statearr_31172[(16)] = inst_31045);

(statearr_31172[(17)] = inst_31080);

return statearr_31172;
})();
var statearr_31173_31257 = state_31162__$1;
(statearr_31173_31257[(2)] = null);

(statearr_31173_31257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (39))){
var state_31162__$1 = state_31162;
var statearr_31177_31258 = state_31162__$1;
(statearr_31177_31258[(2)] = null);

(statearr_31177_31258[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (4))){
var inst_31034 = (state_31162[(10)]);
var inst_31034__$1 = (state_31162[(2)]);
var inst_31035 = (inst_31034__$1 == null);
var state_31162__$1 = (function (){var statearr_31178 = state_31162;
(statearr_31178[(10)] = inst_31034__$1);

return statearr_31178;
})();
if(cljs.core.truth_(inst_31035)){
var statearr_31179_31259 = state_31162__$1;
(statearr_31179_31259[(1)] = (5));

} else {
var statearr_31180_31260 = state_31162__$1;
(statearr_31180_31260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (15))){
var inst_31046 = (state_31162[(13)]);
var inst_31044 = (state_31162[(14)]);
var inst_31043 = (state_31162[(15)]);
var inst_31045 = (state_31162[(16)]);
var inst_31059 = (state_31162[(2)]);
var inst_31060 = (inst_31046 + (1));
var tmp31174 = inst_31044;
var tmp31175 = inst_31043;
var tmp31176 = inst_31045;
var inst_31043__$1 = tmp31175;
var inst_31044__$1 = tmp31174;
var inst_31045__$1 = tmp31176;
var inst_31046__$1 = inst_31060;
var state_31162__$1 = (function (){var statearr_31181 = state_31162;
(statearr_31181[(13)] = inst_31046__$1);

(statearr_31181[(14)] = inst_31044__$1);

(statearr_31181[(15)] = inst_31043__$1);

(statearr_31181[(16)] = inst_31045__$1);

(statearr_31181[(18)] = inst_31059);

return statearr_31181;
})();
var statearr_31182_31261 = state_31162__$1;
(statearr_31182_31261[(2)] = null);

(statearr_31182_31261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (21))){
var inst_31084 = (state_31162[(2)]);
var state_31162__$1 = state_31162;
var statearr_31186_31262 = state_31162__$1;
(statearr_31186_31262[(2)] = inst_31084);

(statearr_31186_31262[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (31))){
var inst_31110 = (state_31162[(12)]);
var inst_31114 = done.call(null,null);
var inst_31115 = cljs.core.async.untap_STAR_.call(null,m,inst_31110);
var state_31162__$1 = (function (){var statearr_31187 = state_31162;
(statearr_31187[(19)] = inst_31114);

return statearr_31187;
})();
var statearr_31188_31263 = state_31162__$1;
(statearr_31188_31263[(2)] = inst_31115);

(statearr_31188_31263[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (32))){
var inst_31103 = (state_31162[(9)]);
var inst_31102 = (state_31162[(20)]);
var inst_31104 = (state_31162[(21)]);
var inst_31105 = (state_31162[(11)]);
var inst_31117 = (state_31162[(2)]);
var inst_31118 = (inst_31105 + (1));
var tmp31183 = inst_31103;
var tmp31184 = inst_31102;
var tmp31185 = inst_31104;
var inst_31102__$1 = tmp31184;
var inst_31103__$1 = tmp31183;
var inst_31104__$1 = tmp31185;
var inst_31105__$1 = inst_31118;
var state_31162__$1 = (function (){var statearr_31189 = state_31162;
(statearr_31189[(9)] = inst_31103__$1);

(statearr_31189[(20)] = inst_31102__$1);

(statearr_31189[(21)] = inst_31104__$1);

(statearr_31189[(11)] = inst_31105__$1);

(statearr_31189[(22)] = inst_31117);

return statearr_31189;
})();
var statearr_31190_31264 = state_31162__$1;
(statearr_31190_31264[(2)] = null);

(statearr_31190_31264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (40))){
var inst_31130 = (state_31162[(23)]);
var inst_31134 = done.call(null,null);
var inst_31135 = cljs.core.async.untap_STAR_.call(null,m,inst_31130);
var state_31162__$1 = (function (){var statearr_31191 = state_31162;
(statearr_31191[(24)] = inst_31134);

return statearr_31191;
})();
var statearr_31192_31265 = state_31162__$1;
(statearr_31192_31265[(2)] = inst_31135);

(statearr_31192_31265[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (33))){
var inst_31121 = (state_31162[(25)]);
var inst_31123 = cljs.core.chunked_seq_QMARK_.call(null,inst_31121);
var state_31162__$1 = state_31162;
if(inst_31123){
var statearr_31193_31266 = state_31162__$1;
(statearr_31193_31266[(1)] = (36));

} else {
var statearr_31194_31267 = state_31162__$1;
(statearr_31194_31267[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (13))){
var inst_31053 = (state_31162[(26)]);
var inst_31056 = cljs.core.async.close_BANG_.call(null,inst_31053);
var state_31162__$1 = state_31162;
var statearr_31195_31268 = state_31162__$1;
(statearr_31195_31268[(2)] = inst_31056);

(statearr_31195_31268[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (22))){
var inst_31074 = (state_31162[(8)]);
var inst_31077 = cljs.core.async.close_BANG_.call(null,inst_31074);
var state_31162__$1 = state_31162;
var statearr_31196_31269 = state_31162__$1;
(statearr_31196_31269[(2)] = inst_31077);

(statearr_31196_31269[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (36))){
var inst_31121 = (state_31162[(25)]);
var inst_31125 = cljs.core.chunk_first.call(null,inst_31121);
var inst_31126 = cljs.core.chunk_rest.call(null,inst_31121);
var inst_31127 = cljs.core.count.call(null,inst_31125);
var inst_31102 = inst_31126;
var inst_31103 = inst_31125;
var inst_31104 = inst_31127;
var inst_31105 = (0);
var state_31162__$1 = (function (){var statearr_31197 = state_31162;
(statearr_31197[(9)] = inst_31103);

(statearr_31197[(20)] = inst_31102);

(statearr_31197[(21)] = inst_31104);

(statearr_31197[(11)] = inst_31105);

return statearr_31197;
})();
var statearr_31198_31270 = state_31162__$1;
(statearr_31198_31270[(2)] = null);

(statearr_31198_31270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (41))){
var inst_31121 = (state_31162[(25)]);
var inst_31137 = (state_31162[(2)]);
var inst_31138 = cljs.core.next.call(null,inst_31121);
var inst_31102 = inst_31138;
var inst_31103 = null;
var inst_31104 = (0);
var inst_31105 = (0);
var state_31162__$1 = (function (){var statearr_31199 = state_31162;
(statearr_31199[(9)] = inst_31103);

(statearr_31199[(20)] = inst_31102);

(statearr_31199[(27)] = inst_31137);

(statearr_31199[(21)] = inst_31104);

(statearr_31199[(11)] = inst_31105);

return statearr_31199;
})();
var statearr_31200_31271 = state_31162__$1;
(statearr_31200_31271[(2)] = null);

(statearr_31200_31271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (43))){
var state_31162__$1 = state_31162;
var statearr_31201_31272 = state_31162__$1;
(statearr_31201_31272[(2)] = null);

(statearr_31201_31272[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (29))){
var inst_31146 = (state_31162[(2)]);
var state_31162__$1 = state_31162;
var statearr_31202_31273 = state_31162__$1;
(statearr_31202_31273[(2)] = inst_31146);

(statearr_31202_31273[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (44))){
var inst_31155 = (state_31162[(2)]);
var state_31162__$1 = (function (){var statearr_31203 = state_31162;
(statearr_31203[(28)] = inst_31155);

return statearr_31203;
})();
var statearr_31204_31274 = state_31162__$1;
(statearr_31204_31274[(2)] = null);

(statearr_31204_31274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (6))){
var inst_31094 = (state_31162[(29)]);
var inst_31093 = cljs.core.deref.call(null,cs);
var inst_31094__$1 = cljs.core.keys.call(null,inst_31093);
var inst_31095 = cljs.core.count.call(null,inst_31094__$1);
var inst_31096 = cljs.core.reset_BANG_.call(null,dctr,inst_31095);
var inst_31101 = cljs.core.seq.call(null,inst_31094__$1);
var inst_31102 = inst_31101;
var inst_31103 = null;
var inst_31104 = (0);
var inst_31105 = (0);
var state_31162__$1 = (function (){var statearr_31205 = state_31162;
(statearr_31205[(9)] = inst_31103);

(statearr_31205[(20)] = inst_31102);

(statearr_31205[(30)] = inst_31096);

(statearr_31205[(21)] = inst_31104);

(statearr_31205[(11)] = inst_31105);

(statearr_31205[(29)] = inst_31094__$1);

return statearr_31205;
})();
var statearr_31206_31275 = state_31162__$1;
(statearr_31206_31275[(2)] = null);

(statearr_31206_31275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (28))){
var inst_31102 = (state_31162[(20)]);
var inst_31121 = (state_31162[(25)]);
var inst_31121__$1 = cljs.core.seq.call(null,inst_31102);
var state_31162__$1 = (function (){var statearr_31207 = state_31162;
(statearr_31207[(25)] = inst_31121__$1);

return statearr_31207;
})();
if(inst_31121__$1){
var statearr_31208_31276 = state_31162__$1;
(statearr_31208_31276[(1)] = (33));

} else {
var statearr_31209_31277 = state_31162__$1;
(statearr_31209_31277[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (25))){
var inst_31104 = (state_31162[(21)]);
var inst_31105 = (state_31162[(11)]);
var inst_31107 = (inst_31105 < inst_31104);
var inst_31108 = inst_31107;
var state_31162__$1 = state_31162;
if(cljs.core.truth_(inst_31108)){
var statearr_31210_31278 = state_31162__$1;
(statearr_31210_31278[(1)] = (27));

} else {
var statearr_31211_31279 = state_31162__$1;
(statearr_31211_31279[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (34))){
var state_31162__$1 = state_31162;
var statearr_31212_31280 = state_31162__$1;
(statearr_31212_31280[(2)] = null);

(statearr_31212_31280[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (17))){
var state_31162__$1 = state_31162;
var statearr_31213_31281 = state_31162__$1;
(statearr_31213_31281[(2)] = null);

(statearr_31213_31281[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (3))){
var inst_31160 = (state_31162[(2)]);
var state_31162__$1 = state_31162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31162__$1,inst_31160);
} else {
if((state_val_31163 === (12))){
var inst_31089 = (state_31162[(2)]);
var state_31162__$1 = state_31162;
var statearr_31214_31282 = state_31162__$1;
(statearr_31214_31282[(2)] = inst_31089);

(statearr_31214_31282[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (2))){
var state_31162__$1 = state_31162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31162__$1,(4),ch);
} else {
if((state_val_31163 === (23))){
var state_31162__$1 = state_31162;
var statearr_31215_31283 = state_31162__$1;
(statearr_31215_31283[(2)] = null);

(statearr_31215_31283[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (35))){
var inst_31144 = (state_31162[(2)]);
var state_31162__$1 = state_31162;
var statearr_31216_31284 = state_31162__$1;
(statearr_31216_31284[(2)] = inst_31144);

(statearr_31216_31284[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (19))){
var inst_31063 = (state_31162[(7)]);
var inst_31067 = cljs.core.chunk_first.call(null,inst_31063);
var inst_31068 = cljs.core.chunk_rest.call(null,inst_31063);
var inst_31069 = cljs.core.count.call(null,inst_31067);
var inst_31043 = inst_31068;
var inst_31044 = inst_31067;
var inst_31045 = inst_31069;
var inst_31046 = (0);
var state_31162__$1 = (function (){var statearr_31217 = state_31162;
(statearr_31217[(13)] = inst_31046);

(statearr_31217[(14)] = inst_31044);

(statearr_31217[(15)] = inst_31043);

(statearr_31217[(16)] = inst_31045);

return statearr_31217;
})();
var statearr_31218_31285 = state_31162__$1;
(statearr_31218_31285[(2)] = null);

(statearr_31218_31285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (11))){
var inst_31043 = (state_31162[(15)]);
var inst_31063 = (state_31162[(7)]);
var inst_31063__$1 = cljs.core.seq.call(null,inst_31043);
var state_31162__$1 = (function (){var statearr_31219 = state_31162;
(statearr_31219[(7)] = inst_31063__$1);

return statearr_31219;
})();
if(inst_31063__$1){
var statearr_31220_31286 = state_31162__$1;
(statearr_31220_31286[(1)] = (16));

} else {
var statearr_31221_31287 = state_31162__$1;
(statearr_31221_31287[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (9))){
var inst_31091 = (state_31162[(2)]);
var state_31162__$1 = state_31162;
var statearr_31222_31288 = state_31162__$1;
(statearr_31222_31288[(2)] = inst_31091);

(statearr_31222_31288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (5))){
var inst_31041 = cljs.core.deref.call(null,cs);
var inst_31042 = cljs.core.seq.call(null,inst_31041);
var inst_31043 = inst_31042;
var inst_31044 = null;
var inst_31045 = (0);
var inst_31046 = (0);
var state_31162__$1 = (function (){var statearr_31223 = state_31162;
(statearr_31223[(13)] = inst_31046);

(statearr_31223[(14)] = inst_31044);

(statearr_31223[(15)] = inst_31043);

(statearr_31223[(16)] = inst_31045);

return statearr_31223;
})();
var statearr_31224_31289 = state_31162__$1;
(statearr_31224_31289[(2)] = null);

(statearr_31224_31289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (14))){
var state_31162__$1 = state_31162;
var statearr_31225_31290 = state_31162__$1;
(statearr_31225_31290[(2)] = null);

(statearr_31225_31290[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (45))){
var inst_31152 = (state_31162[(2)]);
var state_31162__$1 = state_31162;
var statearr_31226_31291 = state_31162__$1;
(statearr_31226_31291[(2)] = inst_31152);

(statearr_31226_31291[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (26))){
var inst_31094 = (state_31162[(29)]);
var inst_31148 = (state_31162[(2)]);
var inst_31149 = cljs.core.seq.call(null,inst_31094);
var state_31162__$1 = (function (){var statearr_31227 = state_31162;
(statearr_31227[(31)] = inst_31148);

return statearr_31227;
})();
if(inst_31149){
var statearr_31228_31292 = state_31162__$1;
(statearr_31228_31292[(1)] = (42));

} else {
var statearr_31229_31293 = state_31162__$1;
(statearr_31229_31293[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (16))){
var inst_31063 = (state_31162[(7)]);
var inst_31065 = cljs.core.chunked_seq_QMARK_.call(null,inst_31063);
var state_31162__$1 = state_31162;
if(inst_31065){
var statearr_31230_31294 = state_31162__$1;
(statearr_31230_31294[(1)] = (19));

} else {
var statearr_31231_31295 = state_31162__$1;
(statearr_31231_31295[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (38))){
var inst_31141 = (state_31162[(2)]);
var state_31162__$1 = state_31162;
var statearr_31232_31296 = state_31162__$1;
(statearr_31232_31296[(2)] = inst_31141);

(statearr_31232_31296[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (30))){
var state_31162__$1 = state_31162;
var statearr_31233_31297 = state_31162__$1;
(statearr_31233_31297[(2)] = null);

(statearr_31233_31297[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (10))){
var inst_31046 = (state_31162[(13)]);
var inst_31044 = (state_31162[(14)]);
var inst_31052 = cljs.core._nth.call(null,inst_31044,inst_31046);
var inst_31053 = cljs.core.nth.call(null,inst_31052,(0),null);
var inst_31054 = cljs.core.nth.call(null,inst_31052,(1),null);
var state_31162__$1 = (function (){var statearr_31234 = state_31162;
(statearr_31234[(26)] = inst_31053);

return statearr_31234;
})();
if(cljs.core.truth_(inst_31054)){
var statearr_31235_31298 = state_31162__$1;
(statearr_31235_31298[(1)] = (13));

} else {
var statearr_31236_31299 = state_31162__$1;
(statearr_31236_31299[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (18))){
var inst_31087 = (state_31162[(2)]);
var state_31162__$1 = state_31162;
var statearr_31237_31300 = state_31162__$1;
(statearr_31237_31300[(2)] = inst_31087);

(statearr_31237_31300[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (42))){
var state_31162__$1 = state_31162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31162__$1,(45),dchan);
} else {
if((state_val_31163 === (37))){
var inst_31034 = (state_31162[(10)]);
var inst_31130 = (state_31162[(23)]);
var inst_31121 = (state_31162[(25)]);
var inst_31130__$1 = cljs.core.first.call(null,inst_31121);
var inst_31131 = cljs.core.async.put_BANG_.call(null,inst_31130__$1,inst_31034,done);
var state_31162__$1 = (function (){var statearr_31238 = state_31162;
(statearr_31238[(23)] = inst_31130__$1);

return statearr_31238;
})();
if(cljs.core.truth_(inst_31131)){
var statearr_31239_31301 = state_31162__$1;
(statearr_31239_31301[(1)] = (39));

} else {
var statearr_31240_31302 = state_31162__$1;
(statearr_31240_31302[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (8))){
var inst_31046 = (state_31162[(13)]);
var inst_31045 = (state_31162[(16)]);
var inst_31048 = (inst_31046 < inst_31045);
var inst_31049 = inst_31048;
var state_31162__$1 = state_31162;
if(cljs.core.truth_(inst_31049)){
var statearr_31241_31303 = state_31162__$1;
(statearr_31241_31303[(1)] = (10));

} else {
var statearr_31242_31304 = state_31162__$1;
(statearr_31242_31304[(1)] = (11));

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
});})(c__29943__auto___31250,cs,m,dchan,dctr,done))
;
return ((function (switch__29831__auto__,c__29943__auto___31250,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29832__auto__ = null;
var cljs$core$async$mult_$_state_machine__29832__auto____0 = (function (){
var statearr_31246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31246[(0)] = cljs$core$async$mult_$_state_machine__29832__auto__);

(statearr_31246[(1)] = (1));

return statearr_31246;
});
var cljs$core$async$mult_$_state_machine__29832__auto____1 = (function (state_31162){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_31162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e31247){if((e31247 instanceof Object)){
var ex__29835__auto__ = e31247;
var statearr_31248_31305 = state_31162;
(statearr_31248_31305[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31306 = state_31162;
state_31162 = G__31306;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29832__auto__ = function(state_31162){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29832__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29832__auto____1.call(this,state_31162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29832__auto____0;
cljs$core$async$mult_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29832__auto____1;
return cljs$core$async$mult_$_state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto___31250,cs,m,dchan,dctr,done))
})();
var state__29945__auto__ = (function (){var statearr_31249 = f__29944__auto__.call(null);
(statearr_31249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___31250);

return statearr_31249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto___31250,cs,m,dchan,dctr,done))
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
var args31307 = [];
var len__26882__auto___31310 = arguments.length;
var i__26883__auto___31311 = (0);
while(true){
if((i__26883__auto___31311 < len__26882__auto___31310)){
args31307.push((arguments[i__26883__auto___31311]));

var G__31312 = (i__26883__auto___31311 + (1));
i__26883__auto___31311 = G__31312;
continue;
} else {
}
break;
}

var G__31309 = args31307.length;
switch (G__31309) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31307.length)].join('')));

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
var x__26475__auto__ = (((m == null))?null:m);
var m__26476__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26475__auto__)]);
if(!((m__26476__auto__ == null))){
return m__26476__auto__.call(null,m,ch);
} else {
var m__26476__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26476__auto____$1 == null))){
return m__26476__auto____$1.call(null,m,ch);
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
var x__26475__auto__ = (((m == null))?null:m);
var m__26476__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26475__auto__)]);
if(!((m__26476__auto__ == null))){
return m__26476__auto__.call(null,m,ch);
} else {
var m__26476__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26476__auto____$1 == null))){
return m__26476__auto____$1.call(null,m,ch);
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
var x__26475__auto__ = (((m == null))?null:m);
var m__26476__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26475__auto__)]);
if(!((m__26476__auto__ == null))){
return m__26476__auto__.call(null,m);
} else {
var m__26476__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26476__auto____$1 == null))){
return m__26476__auto____$1.call(null,m);
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
var x__26475__auto__ = (((m == null))?null:m);
var m__26476__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26475__auto__)]);
if(!((m__26476__auto__ == null))){
return m__26476__auto__.call(null,m,state_map);
} else {
var m__26476__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26476__auto____$1 == null))){
return m__26476__auto____$1.call(null,m,state_map);
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
var x__26475__auto__ = (((m == null))?null:m);
var m__26476__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26475__auto__)]);
if(!((m__26476__auto__ == null))){
return m__26476__auto__.call(null,m,mode);
} else {
var m__26476__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26476__auto____$1 == null))){
return m__26476__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26889__auto__ = [];
var len__26882__auto___31324 = arguments.length;
var i__26883__auto___31325 = (0);
while(true){
if((i__26883__auto___31325 < len__26882__auto___31324)){
args__26889__auto__.push((arguments[i__26883__auto___31325]));

var G__31326 = (i__26883__auto___31325 + (1));
i__26883__auto___31325 = G__31326;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((3) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26890__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31318){
var map__31319 = p__31318;
var map__31319__$1 = ((((!((map__31319 == null)))?((((map__31319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31319):map__31319);
var opts = map__31319__$1;
var statearr_31321_31327 = state;
(statearr_31321_31327[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__31319,map__31319__$1,opts){
return (function (val){
var statearr_31322_31328 = state;
(statearr_31322_31328[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31319,map__31319__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_31323_31329 = state;
(statearr_31323_31329[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31314){
var G__31315 = cljs.core.first.call(null,seq31314);
var seq31314__$1 = cljs.core.next.call(null,seq31314);
var G__31316 = cljs.core.first.call(null,seq31314__$1);
var seq31314__$2 = cljs.core.next.call(null,seq31314__$1);
var G__31317 = cljs.core.first.call(null,seq31314__$2);
var seq31314__$3 = cljs.core.next.call(null,seq31314__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31315,G__31316,G__31317,seq31314__$3);
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
if(typeof cljs.core.async.t_cljs$core$async31493 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31493 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31494){
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
this.meta31494 = meta31494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31495,meta31494__$1){
var self__ = this;
var _31495__$1 = this;
return (new cljs.core.async.t_cljs$core$async31493(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31494__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31493.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31495){
var self__ = this;
var _31495__$1 = this;
return self__.meta31494;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31493.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31493.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31493.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31493.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31493.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31493.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31493.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31493.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31493.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31494","meta31494",-1137729307,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31493.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31493";

cljs.core.async.t_cljs$core$async31493.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"cljs.core.async/t_cljs$core$async31493");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31493 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31493(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31494){
return (new cljs.core.async.t_cljs$core$async31493(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31494));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31493(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29943__auto___31656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto___31656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto___31656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31593){
var state_val_31594 = (state_31593[(1)]);
if((state_val_31594 === (7))){
var inst_31511 = (state_31593[(2)]);
var state_31593__$1 = state_31593;
var statearr_31595_31657 = state_31593__$1;
(statearr_31595_31657[(2)] = inst_31511);

(statearr_31595_31657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (20))){
var inst_31523 = (state_31593[(7)]);
var state_31593__$1 = state_31593;
var statearr_31596_31658 = state_31593__$1;
(statearr_31596_31658[(2)] = inst_31523);

(statearr_31596_31658[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (27))){
var state_31593__$1 = state_31593;
var statearr_31597_31659 = state_31593__$1;
(statearr_31597_31659[(2)] = null);

(statearr_31597_31659[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (1))){
var inst_31499 = (state_31593[(8)]);
var inst_31499__$1 = calc_state.call(null);
var inst_31501 = (inst_31499__$1 == null);
var inst_31502 = cljs.core.not.call(null,inst_31501);
var state_31593__$1 = (function (){var statearr_31598 = state_31593;
(statearr_31598[(8)] = inst_31499__$1);

return statearr_31598;
})();
if(inst_31502){
var statearr_31599_31660 = state_31593__$1;
(statearr_31599_31660[(1)] = (2));

} else {
var statearr_31600_31661 = state_31593__$1;
(statearr_31600_31661[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (24))){
var inst_31567 = (state_31593[(9)]);
var inst_31553 = (state_31593[(10)]);
var inst_31546 = (state_31593[(11)]);
var inst_31567__$1 = inst_31546.call(null,inst_31553);
var state_31593__$1 = (function (){var statearr_31601 = state_31593;
(statearr_31601[(9)] = inst_31567__$1);

return statearr_31601;
})();
if(cljs.core.truth_(inst_31567__$1)){
var statearr_31602_31662 = state_31593__$1;
(statearr_31602_31662[(1)] = (29));

} else {
var statearr_31603_31663 = state_31593__$1;
(statearr_31603_31663[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (4))){
var inst_31514 = (state_31593[(2)]);
var state_31593__$1 = state_31593;
if(cljs.core.truth_(inst_31514)){
var statearr_31604_31664 = state_31593__$1;
(statearr_31604_31664[(1)] = (8));

} else {
var statearr_31605_31665 = state_31593__$1;
(statearr_31605_31665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (15))){
var inst_31540 = (state_31593[(2)]);
var state_31593__$1 = state_31593;
if(cljs.core.truth_(inst_31540)){
var statearr_31606_31666 = state_31593__$1;
(statearr_31606_31666[(1)] = (19));

} else {
var statearr_31607_31667 = state_31593__$1;
(statearr_31607_31667[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (21))){
var inst_31545 = (state_31593[(12)]);
var inst_31545__$1 = (state_31593[(2)]);
var inst_31546 = cljs.core.get.call(null,inst_31545__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31547 = cljs.core.get.call(null,inst_31545__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31548 = cljs.core.get.call(null,inst_31545__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31593__$1 = (function (){var statearr_31608 = state_31593;
(statearr_31608[(12)] = inst_31545__$1);

(statearr_31608[(11)] = inst_31546);

(statearr_31608[(13)] = inst_31547);

return statearr_31608;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31593__$1,(22),inst_31548);
} else {
if((state_val_31594 === (31))){
var inst_31575 = (state_31593[(2)]);
var state_31593__$1 = state_31593;
if(cljs.core.truth_(inst_31575)){
var statearr_31609_31668 = state_31593__$1;
(statearr_31609_31668[(1)] = (32));

} else {
var statearr_31610_31669 = state_31593__$1;
(statearr_31610_31669[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (32))){
var inst_31552 = (state_31593[(14)]);
var state_31593__$1 = state_31593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31593__$1,(35),out,inst_31552);
} else {
if((state_val_31594 === (33))){
var inst_31545 = (state_31593[(12)]);
var inst_31523 = inst_31545;
var state_31593__$1 = (function (){var statearr_31611 = state_31593;
(statearr_31611[(7)] = inst_31523);

return statearr_31611;
})();
var statearr_31612_31670 = state_31593__$1;
(statearr_31612_31670[(2)] = null);

(statearr_31612_31670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (13))){
var inst_31523 = (state_31593[(7)]);
var inst_31530 = inst_31523.cljs$lang$protocol_mask$partition0$;
var inst_31531 = (inst_31530 & (64));
var inst_31532 = inst_31523.cljs$core$ISeq$;
var inst_31533 = (inst_31531) || (inst_31532);
var state_31593__$1 = state_31593;
if(cljs.core.truth_(inst_31533)){
var statearr_31613_31671 = state_31593__$1;
(statearr_31613_31671[(1)] = (16));

} else {
var statearr_31614_31672 = state_31593__$1;
(statearr_31614_31672[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (22))){
var inst_31552 = (state_31593[(14)]);
var inst_31553 = (state_31593[(10)]);
var inst_31551 = (state_31593[(2)]);
var inst_31552__$1 = cljs.core.nth.call(null,inst_31551,(0),null);
var inst_31553__$1 = cljs.core.nth.call(null,inst_31551,(1),null);
var inst_31554 = (inst_31552__$1 == null);
var inst_31555 = cljs.core._EQ_.call(null,inst_31553__$1,change);
var inst_31556 = (inst_31554) || (inst_31555);
var state_31593__$1 = (function (){var statearr_31615 = state_31593;
(statearr_31615[(14)] = inst_31552__$1);

(statearr_31615[(10)] = inst_31553__$1);

return statearr_31615;
})();
if(cljs.core.truth_(inst_31556)){
var statearr_31616_31673 = state_31593__$1;
(statearr_31616_31673[(1)] = (23));

} else {
var statearr_31617_31674 = state_31593__$1;
(statearr_31617_31674[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (36))){
var inst_31545 = (state_31593[(12)]);
var inst_31523 = inst_31545;
var state_31593__$1 = (function (){var statearr_31618 = state_31593;
(statearr_31618[(7)] = inst_31523);

return statearr_31618;
})();
var statearr_31619_31675 = state_31593__$1;
(statearr_31619_31675[(2)] = null);

(statearr_31619_31675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (29))){
var inst_31567 = (state_31593[(9)]);
var state_31593__$1 = state_31593;
var statearr_31620_31676 = state_31593__$1;
(statearr_31620_31676[(2)] = inst_31567);

(statearr_31620_31676[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (6))){
var state_31593__$1 = state_31593;
var statearr_31621_31677 = state_31593__$1;
(statearr_31621_31677[(2)] = false);

(statearr_31621_31677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (28))){
var inst_31563 = (state_31593[(2)]);
var inst_31564 = calc_state.call(null);
var inst_31523 = inst_31564;
var state_31593__$1 = (function (){var statearr_31622 = state_31593;
(statearr_31622[(7)] = inst_31523);

(statearr_31622[(15)] = inst_31563);

return statearr_31622;
})();
var statearr_31623_31678 = state_31593__$1;
(statearr_31623_31678[(2)] = null);

(statearr_31623_31678[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (25))){
var inst_31589 = (state_31593[(2)]);
var state_31593__$1 = state_31593;
var statearr_31624_31679 = state_31593__$1;
(statearr_31624_31679[(2)] = inst_31589);

(statearr_31624_31679[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (34))){
var inst_31587 = (state_31593[(2)]);
var state_31593__$1 = state_31593;
var statearr_31625_31680 = state_31593__$1;
(statearr_31625_31680[(2)] = inst_31587);

(statearr_31625_31680[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (17))){
var state_31593__$1 = state_31593;
var statearr_31626_31681 = state_31593__$1;
(statearr_31626_31681[(2)] = false);

(statearr_31626_31681[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (3))){
var state_31593__$1 = state_31593;
var statearr_31627_31682 = state_31593__$1;
(statearr_31627_31682[(2)] = false);

(statearr_31627_31682[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (12))){
var inst_31591 = (state_31593[(2)]);
var state_31593__$1 = state_31593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31593__$1,inst_31591);
} else {
if((state_val_31594 === (2))){
var inst_31499 = (state_31593[(8)]);
var inst_31504 = inst_31499.cljs$lang$protocol_mask$partition0$;
var inst_31505 = (inst_31504 & (64));
var inst_31506 = inst_31499.cljs$core$ISeq$;
var inst_31507 = (inst_31505) || (inst_31506);
var state_31593__$1 = state_31593;
if(cljs.core.truth_(inst_31507)){
var statearr_31628_31683 = state_31593__$1;
(statearr_31628_31683[(1)] = (5));

} else {
var statearr_31629_31684 = state_31593__$1;
(statearr_31629_31684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (23))){
var inst_31552 = (state_31593[(14)]);
var inst_31558 = (inst_31552 == null);
var state_31593__$1 = state_31593;
if(cljs.core.truth_(inst_31558)){
var statearr_31630_31685 = state_31593__$1;
(statearr_31630_31685[(1)] = (26));

} else {
var statearr_31631_31686 = state_31593__$1;
(statearr_31631_31686[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (35))){
var inst_31578 = (state_31593[(2)]);
var state_31593__$1 = state_31593;
if(cljs.core.truth_(inst_31578)){
var statearr_31632_31687 = state_31593__$1;
(statearr_31632_31687[(1)] = (36));

} else {
var statearr_31633_31688 = state_31593__$1;
(statearr_31633_31688[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (19))){
var inst_31523 = (state_31593[(7)]);
var inst_31542 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31523);
var state_31593__$1 = state_31593;
var statearr_31634_31689 = state_31593__$1;
(statearr_31634_31689[(2)] = inst_31542);

(statearr_31634_31689[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (11))){
var inst_31523 = (state_31593[(7)]);
var inst_31527 = (inst_31523 == null);
var inst_31528 = cljs.core.not.call(null,inst_31527);
var state_31593__$1 = state_31593;
if(inst_31528){
var statearr_31635_31690 = state_31593__$1;
(statearr_31635_31690[(1)] = (13));

} else {
var statearr_31636_31691 = state_31593__$1;
(statearr_31636_31691[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (9))){
var inst_31499 = (state_31593[(8)]);
var state_31593__$1 = state_31593;
var statearr_31637_31692 = state_31593__$1;
(statearr_31637_31692[(2)] = inst_31499);

(statearr_31637_31692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (5))){
var state_31593__$1 = state_31593;
var statearr_31638_31693 = state_31593__$1;
(statearr_31638_31693[(2)] = true);

(statearr_31638_31693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (14))){
var state_31593__$1 = state_31593;
var statearr_31639_31694 = state_31593__$1;
(statearr_31639_31694[(2)] = false);

(statearr_31639_31694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (26))){
var inst_31553 = (state_31593[(10)]);
var inst_31560 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31553);
var state_31593__$1 = state_31593;
var statearr_31640_31695 = state_31593__$1;
(statearr_31640_31695[(2)] = inst_31560);

(statearr_31640_31695[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (16))){
var state_31593__$1 = state_31593;
var statearr_31641_31696 = state_31593__$1;
(statearr_31641_31696[(2)] = true);

(statearr_31641_31696[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (38))){
var inst_31583 = (state_31593[(2)]);
var state_31593__$1 = state_31593;
var statearr_31642_31697 = state_31593__$1;
(statearr_31642_31697[(2)] = inst_31583);

(statearr_31642_31697[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (30))){
var inst_31553 = (state_31593[(10)]);
var inst_31546 = (state_31593[(11)]);
var inst_31547 = (state_31593[(13)]);
var inst_31570 = cljs.core.empty_QMARK_.call(null,inst_31546);
var inst_31571 = inst_31547.call(null,inst_31553);
var inst_31572 = cljs.core.not.call(null,inst_31571);
var inst_31573 = (inst_31570) && (inst_31572);
var state_31593__$1 = state_31593;
var statearr_31643_31698 = state_31593__$1;
(statearr_31643_31698[(2)] = inst_31573);

(statearr_31643_31698[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (10))){
var inst_31499 = (state_31593[(8)]);
var inst_31519 = (state_31593[(2)]);
var inst_31520 = cljs.core.get.call(null,inst_31519,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31521 = cljs.core.get.call(null,inst_31519,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31522 = cljs.core.get.call(null,inst_31519,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31523 = inst_31499;
var state_31593__$1 = (function (){var statearr_31644 = state_31593;
(statearr_31644[(7)] = inst_31523);

(statearr_31644[(16)] = inst_31520);

(statearr_31644[(17)] = inst_31521);

(statearr_31644[(18)] = inst_31522);

return statearr_31644;
})();
var statearr_31645_31699 = state_31593__$1;
(statearr_31645_31699[(2)] = null);

(statearr_31645_31699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (18))){
var inst_31537 = (state_31593[(2)]);
var state_31593__$1 = state_31593;
var statearr_31646_31700 = state_31593__$1;
(statearr_31646_31700[(2)] = inst_31537);

(statearr_31646_31700[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (37))){
var state_31593__$1 = state_31593;
var statearr_31647_31701 = state_31593__$1;
(statearr_31647_31701[(2)] = null);

(statearr_31647_31701[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31594 === (8))){
var inst_31499 = (state_31593[(8)]);
var inst_31516 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31499);
var state_31593__$1 = state_31593;
var statearr_31648_31702 = state_31593__$1;
(statearr_31648_31702[(2)] = inst_31516);

(statearr_31648_31702[(1)] = (10));


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
});})(c__29943__auto___31656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29831__auto__,c__29943__auto___31656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29832__auto__ = null;
var cljs$core$async$mix_$_state_machine__29832__auto____0 = (function (){
var statearr_31652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31652[(0)] = cljs$core$async$mix_$_state_machine__29832__auto__);

(statearr_31652[(1)] = (1));

return statearr_31652;
});
var cljs$core$async$mix_$_state_machine__29832__auto____1 = (function (state_31593){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_31593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e31653){if((e31653 instanceof Object)){
var ex__29835__auto__ = e31653;
var statearr_31654_31703 = state_31593;
(statearr_31654_31703[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31704 = state_31593;
state_31593 = G__31704;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29832__auto__ = function(state_31593){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29832__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29832__auto____1.call(this,state_31593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29832__auto____0;
cljs$core$async$mix_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29832__auto____1;
return cljs$core$async$mix_$_state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto___31656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29945__auto__ = (function (){var statearr_31655 = f__29944__auto__.call(null);
(statearr_31655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___31656);

return statearr_31655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto___31656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__26475__auto__ = (((p == null))?null:p);
var m__26476__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26475__auto__)]);
if(!((m__26476__auto__ == null))){
return m__26476__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26476__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26476__auto____$1 == null))){
return m__26476__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__26475__auto__ = (((p == null))?null:p);
var m__26476__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26475__auto__)]);
if(!((m__26476__auto__ == null))){
return m__26476__auto__.call(null,p,v,ch);
} else {
var m__26476__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26476__auto____$1 == null))){
return m__26476__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31705 = [];
var len__26882__auto___31708 = arguments.length;
var i__26883__auto___31709 = (0);
while(true){
if((i__26883__auto___31709 < len__26882__auto___31708)){
args31705.push((arguments[i__26883__auto___31709]));

var G__31710 = (i__26883__auto___31709 + (1));
i__26883__auto___31709 = G__31710;
continue;
} else {
}
break;
}

var G__31707 = args31705.length;
switch (G__31707) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31705.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26475__auto__ = (((p == null))?null:p);
var m__26476__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26475__auto__)]);
if(!((m__26476__auto__ == null))){
return m__26476__auto__.call(null,p);
} else {
var m__26476__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26476__auto____$1 == null))){
return m__26476__auto____$1.call(null,p);
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
var x__26475__auto__ = (((p == null))?null:p);
var m__26476__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26475__auto__)]);
if(!((m__26476__auto__ == null))){
return m__26476__auto__.call(null,p,v);
} else {
var m__26476__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26476__auto____$1 == null))){
return m__26476__auto____$1.call(null,p,v);
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
var args31713 = [];
var len__26882__auto___31838 = arguments.length;
var i__26883__auto___31839 = (0);
while(true){
if((i__26883__auto___31839 < len__26882__auto___31838)){
args31713.push((arguments[i__26883__auto___31839]));

var G__31840 = (i__26883__auto___31839 + (1));
i__26883__auto___31839 = G__31840;
continue;
} else {
}
break;
}

var G__31715 = args31713.length;
switch (G__31715) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31713.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25812__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25812__auto__,mults){
return (function (p1__31712_SHARP_){
if(cljs.core.truth_(p1__31712_SHARP_.call(null,topic))){
return p1__31712_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31712_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25812__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31716 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31716 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31717){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31717 = meta31717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31718,meta31717__$1){
var self__ = this;
var _31718__$1 = this;
return (new cljs.core.async.t_cljs$core$async31716(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31717__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31718){
var self__ = this;
var _31718__$1 = this;
return self__.meta31717;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31716.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31716.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31717","meta31717",2029434993,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31716.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31716";

cljs.core.async.t_cljs$core$async31716.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"cljs.core.async/t_cljs$core$async31716");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31716 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31716(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31717){
return (new cljs.core.async.t_cljs$core$async31716(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31717));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31716(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29943__auto___31842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto___31842,mults,ensure_mult,p){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto___31842,mults,ensure_mult,p){
return (function (state_31790){
var state_val_31791 = (state_31790[(1)]);
if((state_val_31791 === (7))){
var inst_31786 = (state_31790[(2)]);
var state_31790__$1 = state_31790;
var statearr_31792_31843 = state_31790__$1;
(statearr_31792_31843[(2)] = inst_31786);

(statearr_31792_31843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (20))){
var state_31790__$1 = state_31790;
var statearr_31793_31844 = state_31790__$1;
(statearr_31793_31844[(2)] = null);

(statearr_31793_31844[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (1))){
var state_31790__$1 = state_31790;
var statearr_31794_31845 = state_31790__$1;
(statearr_31794_31845[(2)] = null);

(statearr_31794_31845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (24))){
var inst_31769 = (state_31790[(7)]);
var inst_31778 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31769);
var state_31790__$1 = state_31790;
var statearr_31795_31846 = state_31790__$1;
(statearr_31795_31846[(2)] = inst_31778);

(statearr_31795_31846[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (4))){
var inst_31721 = (state_31790[(8)]);
var inst_31721__$1 = (state_31790[(2)]);
var inst_31722 = (inst_31721__$1 == null);
var state_31790__$1 = (function (){var statearr_31796 = state_31790;
(statearr_31796[(8)] = inst_31721__$1);

return statearr_31796;
})();
if(cljs.core.truth_(inst_31722)){
var statearr_31797_31847 = state_31790__$1;
(statearr_31797_31847[(1)] = (5));

} else {
var statearr_31798_31848 = state_31790__$1;
(statearr_31798_31848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (15))){
var inst_31763 = (state_31790[(2)]);
var state_31790__$1 = state_31790;
var statearr_31799_31849 = state_31790__$1;
(statearr_31799_31849[(2)] = inst_31763);

(statearr_31799_31849[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (21))){
var inst_31783 = (state_31790[(2)]);
var state_31790__$1 = (function (){var statearr_31800 = state_31790;
(statearr_31800[(9)] = inst_31783);

return statearr_31800;
})();
var statearr_31801_31850 = state_31790__$1;
(statearr_31801_31850[(2)] = null);

(statearr_31801_31850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (13))){
var inst_31745 = (state_31790[(10)]);
var inst_31747 = cljs.core.chunked_seq_QMARK_.call(null,inst_31745);
var state_31790__$1 = state_31790;
if(inst_31747){
var statearr_31802_31851 = state_31790__$1;
(statearr_31802_31851[(1)] = (16));

} else {
var statearr_31803_31852 = state_31790__$1;
(statearr_31803_31852[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (22))){
var inst_31775 = (state_31790[(2)]);
var state_31790__$1 = state_31790;
if(cljs.core.truth_(inst_31775)){
var statearr_31804_31853 = state_31790__$1;
(statearr_31804_31853[(1)] = (23));

} else {
var statearr_31805_31854 = state_31790__$1;
(statearr_31805_31854[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (6))){
var inst_31721 = (state_31790[(8)]);
var inst_31771 = (state_31790[(11)]);
var inst_31769 = (state_31790[(7)]);
var inst_31769__$1 = topic_fn.call(null,inst_31721);
var inst_31770 = cljs.core.deref.call(null,mults);
var inst_31771__$1 = cljs.core.get.call(null,inst_31770,inst_31769__$1);
var state_31790__$1 = (function (){var statearr_31806 = state_31790;
(statearr_31806[(11)] = inst_31771__$1);

(statearr_31806[(7)] = inst_31769__$1);

return statearr_31806;
})();
if(cljs.core.truth_(inst_31771__$1)){
var statearr_31807_31855 = state_31790__$1;
(statearr_31807_31855[(1)] = (19));

} else {
var statearr_31808_31856 = state_31790__$1;
(statearr_31808_31856[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (25))){
var inst_31780 = (state_31790[(2)]);
var state_31790__$1 = state_31790;
var statearr_31809_31857 = state_31790__$1;
(statearr_31809_31857[(2)] = inst_31780);

(statearr_31809_31857[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (17))){
var inst_31745 = (state_31790[(10)]);
var inst_31754 = cljs.core.first.call(null,inst_31745);
var inst_31755 = cljs.core.async.muxch_STAR_.call(null,inst_31754);
var inst_31756 = cljs.core.async.close_BANG_.call(null,inst_31755);
var inst_31757 = cljs.core.next.call(null,inst_31745);
var inst_31731 = inst_31757;
var inst_31732 = null;
var inst_31733 = (0);
var inst_31734 = (0);
var state_31790__$1 = (function (){var statearr_31810 = state_31790;
(statearr_31810[(12)] = inst_31733);

(statearr_31810[(13)] = inst_31734);

(statearr_31810[(14)] = inst_31732);

(statearr_31810[(15)] = inst_31756);

(statearr_31810[(16)] = inst_31731);

return statearr_31810;
})();
var statearr_31811_31858 = state_31790__$1;
(statearr_31811_31858[(2)] = null);

(statearr_31811_31858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (3))){
var inst_31788 = (state_31790[(2)]);
var state_31790__$1 = state_31790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31790__$1,inst_31788);
} else {
if((state_val_31791 === (12))){
var inst_31765 = (state_31790[(2)]);
var state_31790__$1 = state_31790;
var statearr_31812_31859 = state_31790__$1;
(statearr_31812_31859[(2)] = inst_31765);

(statearr_31812_31859[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (2))){
var state_31790__$1 = state_31790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31790__$1,(4),ch);
} else {
if((state_val_31791 === (23))){
var state_31790__$1 = state_31790;
var statearr_31813_31860 = state_31790__$1;
(statearr_31813_31860[(2)] = null);

(statearr_31813_31860[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (19))){
var inst_31721 = (state_31790[(8)]);
var inst_31771 = (state_31790[(11)]);
var inst_31773 = cljs.core.async.muxch_STAR_.call(null,inst_31771);
var state_31790__$1 = state_31790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31790__$1,(22),inst_31773,inst_31721);
} else {
if((state_val_31791 === (11))){
var inst_31745 = (state_31790[(10)]);
var inst_31731 = (state_31790[(16)]);
var inst_31745__$1 = cljs.core.seq.call(null,inst_31731);
var state_31790__$1 = (function (){var statearr_31814 = state_31790;
(statearr_31814[(10)] = inst_31745__$1);

return statearr_31814;
})();
if(inst_31745__$1){
var statearr_31815_31861 = state_31790__$1;
(statearr_31815_31861[(1)] = (13));

} else {
var statearr_31816_31862 = state_31790__$1;
(statearr_31816_31862[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (9))){
var inst_31767 = (state_31790[(2)]);
var state_31790__$1 = state_31790;
var statearr_31817_31863 = state_31790__$1;
(statearr_31817_31863[(2)] = inst_31767);

(statearr_31817_31863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (5))){
var inst_31728 = cljs.core.deref.call(null,mults);
var inst_31729 = cljs.core.vals.call(null,inst_31728);
var inst_31730 = cljs.core.seq.call(null,inst_31729);
var inst_31731 = inst_31730;
var inst_31732 = null;
var inst_31733 = (0);
var inst_31734 = (0);
var state_31790__$1 = (function (){var statearr_31818 = state_31790;
(statearr_31818[(12)] = inst_31733);

(statearr_31818[(13)] = inst_31734);

(statearr_31818[(14)] = inst_31732);

(statearr_31818[(16)] = inst_31731);

return statearr_31818;
})();
var statearr_31819_31864 = state_31790__$1;
(statearr_31819_31864[(2)] = null);

(statearr_31819_31864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (14))){
var state_31790__$1 = state_31790;
var statearr_31823_31865 = state_31790__$1;
(statearr_31823_31865[(2)] = null);

(statearr_31823_31865[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (16))){
var inst_31745 = (state_31790[(10)]);
var inst_31749 = cljs.core.chunk_first.call(null,inst_31745);
var inst_31750 = cljs.core.chunk_rest.call(null,inst_31745);
var inst_31751 = cljs.core.count.call(null,inst_31749);
var inst_31731 = inst_31750;
var inst_31732 = inst_31749;
var inst_31733 = inst_31751;
var inst_31734 = (0);
var state_31790__$1 = (function (){var statearr_31824 = state_31790;
(statearr_31824[(12)] = inst_31733);

(statearr_31824[(13)] = inst_31734);

(statearr_31824[(14)] = inst_31732);

(statearr_31824[(16)] = inst_31731);

return statearr_31824;
})();
var statearr_31825_31866 = state_31790__$1;
(statearr_31825_31866[(2)] = null);

(statearr_31825_31866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (10))){
var inst_31733 = (state_31790[(12)]);
var inst_31734 = (state_31790[(13)]);
var inst_31732 = (state_31790[(14)]);
var inst_31731 = (state_31790[(16)]);
var inst_31739 = cljs.core._nth.call(null,inst_31732,inst_31734);
var inst_31740 = cljs.core.async.muxch_STAR_.call(null,inst_31739);
var inst_31741 = cljs.core.async.close_BANG_.call(null,inst_31740);
var inst_31742 = (inst_31734 + (1));
var tmp31820 = inst_31733;
var tmp31821 = inst_31732;
var tmp31822 = inst_31731;
var inst_31731__$1 = tmp31822;
var inst_31732__$1 = tmp31821;
var inst_31733__$1 = tmp31820;
var inst_31734__$1 = inst_31742;
var state_31790__$1 = (function (){var statearr_31826 = state_31790;
(statearr_31826[(12)] = inst_31733__$1);

(statearr_31826[(13)] = inst_31734__$1);

(statearr_31826[(14)] = inst_31732__$1);

(statearr_31826[(17)] = inst_31741);

(statearr_31826[(16)] = inst_31731__$1);

return statearr_31826;
})();
var statearr_31827_31867 = state_31790__$1;
(statearr_31827_31867[(2)] = null);

(statearr_31827_31867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (18))){
var inst_31760 = (state_31790[(2)]);
var state_31790__$1 = state_31790;
var statearr_31828_31868 = state_31790__$1;
(statearr_31828_31868[(2)] = inst_31760);

(statearr_31828_31868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31791 === (8))){
var inst_31733 = (state_31790[(12)]);
var inst_31734 = (state_31790[(13)]);
var inst_31736 = (inst_31734 < inst_31733);
var inst_31737 = inst_31736;
var state_31790__$1 = state_31790;
if(cljs.core.truth_(inst_31737)){
var statearr_31829_31869 = state_31790__$1;
(statearr_31829_31869[(1)] = (10));

} else {
var statearr_31830_31870 = state_31790__$1;
(statearr_31830_31870[(1)] = (11));

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
});})(c__29943__auto___31842,mults,ensure_mult,p))
;
return ((function (switch__29831__auto__,c__29943__auto___31842,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29832__auto__ = null;
var cljs$core$async$state_machine__29832__auto____0 = (function (){
var statearr_31834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31834[(0)] = cljs$core$async$state_machine__29832__auto__);

(statearr_31834[(1)] = (1));

return statearr_31834;
});
var cljs$core$async$state_machine__29832__auto____1 = (function (state_31790){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_31790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e31835){if((e31835 instanceof Object)){
var ex__29835__auto__ = e31835;
var statearr_31836_31871 = state_31790;
(statearr_31836_31871[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31872 = state_31790;
state_31790 = G__31872;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
cljs$core$async$state_machine__29832__auto__ = function(state_31790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29832__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29832__auto____1.call(this,state_31790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29832__auto____0;
cljs$core$async$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29832__auto____1;
return cljs$core$async$state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto___31842,mults,ensure_mult,p))
})();
var state__29945__auto__ = (function (){var statearr_31837 = f__29944__auto__.call(null);
(statearr_31837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___31842);

return statearr_31837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto___31842,mults,ensure_mult,p))
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
var args31873 = [];
var len__26882__auto___31876 = arguments.length;
var i__26883__auto___31877 = (0);
while(true){
if((i__26883__auto___31877 < len__26882__auto___31876)){
args31873.push((arguments[i__26883__auto___31877]));

var G__31878 = (i__26883__auto___31877 + (1));
i__26883__auto___31877 = G__31878;
continue;
} else {
}
break;
}

var G__31875 = args31873.length;
switch (G__31875) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31873.length)].join('')));

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
var args31880 = [];
var len__26882__auto___31883 = arguments.length;
var i__26883__auto___31884 = (0);
while(true){
if((i__26883__auto___31884 < len__26882__auto___31883)){
args31880.push((arguments[i__26883__auto___31884]));

var G__31885 = (i__26883__auto___31884 + (1));
i__26883__auto___31884 = G__31885;
continue;
} else {
}
break;
}

var G__31882 = args31880.length;
switch (G__31882) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31880.length)].join('')));

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
var args31887 = [];
var len__26882__auto___31958 = arguments.length;
var i__26883__auto___31959 = (0);
while(true){
if((i__26883__auto___31959 < len__26882__auto___31958)){
args31887.push((arguments[i__26883__auto___31959]));

var G__31960 = (i__26883__auto___31959 + (1));
i__26883__auto___31959 = G__31960;
continue;
} else {
}
break;
}

var G__31889 = args31887.length;
switch (G__31889) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31887.length)].join('')));

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
var c__29943__auto___31962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto___31962,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto___31962,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31928){
var state_val_31929 = (state_31928[(1)]);
if((state_val_31929 === (7))){
var state_31928__$1 = state_31928;
var statearr_31930_31963 = state_31928__$1;
(statearr_31930_31963[(2)] = null);

(statearr_31930_31963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (1))){
var state_31928__$1 = state_31928;
var statearr_31931_31964 = state_31928__$1;
(statearr_31931_31964[(2)] = null);

(statearr_31931_31964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (4))){
var inst_31892 = (state_31928[(7)]);
var inst_31894 = (inst_31892 < cnt);
var state_31928__$1 = state_31928;
if(cljs.core.truth_(inst_31894)){
var statearr_31932_31965 = state_31928__$1;
(statearr_31932_31965[(1)] = (6));

} else {
var statearr_31933_31966 = state_31928__$1;
(statearr_31933_31966[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (15))){
var inst_31924 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
var statearr_31934_31967 = state_31928__$1;
(statearr_31934_31967[(2)] = inst_31924);

(statearr_31934_31967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (13))){
var inst_31917 = cljs.core.async.close_BANG_.call(null,out);
var state_31928__$1 = state_31928;
var statearr_31935_31968 = state_31928__$1;
(statearr_31935_31968[(2)] = inst_31917);

(statearr_31935_31968[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (6))){
var state_31928__$1 = state_31928;
var statearr_31936_31969 = state_31928__$1;
(statearr_31936_31969[(2)] = null);

(statearr_31936_31969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (3))){
var inst_31926 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31928__$1,inst_31926);
} else {
if((state_val_31929 === (12))){
var inst_31914 = (state_31928[(8)]);
var inst_31914__$1 = (state_31928[(2)]);
var inst_31915 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31914__$1);
var state_31928__$1 = (function (){var statearr_31937 = state_31928;
(statearr_31937[(8)] = inst_31914__$1);

return statearr_31937;
})();
if(cljs.core.truth_(inst_31915)){
var statearr_31938_31970 = state_31928__$1;
(statearr_31938_31970[(1)] = (13));

} else {
var statearr_31939_31971 = state_31928__$1;
(statearr_31939_31971[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (2))){
var inst_31891 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31892 = (0);
var state_31928__$1 = (function (){var statearr_31940 = state_31928;
(statearr_31940[(9)] = inst_31891);

(statearr_31940[(7)] = inst_31892);

return statearr_31940;
})();
var statearr_31941_31972 = state_31928__$1;
(statearr_31941_31972[(2)] = null);

(statearr_31941_31972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (11))){
var inst_31892 = (state_31928[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31928,(10),Object,null,(9));
var inst_31901 = chs__$1.call(null,inst_31892);
var inst_31902 = done.call(null,inst_31892);
var inst_31903 = cljs.core.async.take_BANG_.call(null,inst_31901,inst_31902);
var state_31928__$1 = state_31928;
var statearr_31942_31973 = state_31928__$1;
(statearr_31942_31973[(2)] = inst_31903);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31928__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (9))){
var inst_31892 = (state_31928[(7)]);
var inst_31905 = (state_31928[(2)]);
var inst_31906 = (inst_31892 + (1));
var inst_31892__$1 = inst_31906;
var state_31928__$1 = (function (){var statearr_31943 = state_31928;
(statearr_31943[(10)] = inst_31905);

(statearr_31943[(7)] = inst_31892__$1);

return statearr_31943;
})();
var statearr_31944_31974 = state_31928__$1;
(statearr_31944_31974[(2)] = null);

(statearr_31944_31974[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (5))){
var inst_31912 = (state_31928[(2)]);
var state_31928__$1 = (function (){var statearr_31945 = state_31928;
(statearr_31945[(11)] = inst_31912);

return statearr_31945;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31928__$1,(12),dchan);
} else {
if((state_val_31929 === (14))){
var inst_31914 = (state_31928[(8)]);
var inst_31919 = cljs.core.apply.call(null,f,inst_31914);
var state_31928__$1 = state_31928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31928__$1,(16),out,inst_31919);
} else {
if((state_val_31929 === (16))){
var inst_31921 = (state_31928[(2)]);
var state_31928__$1 = (function (){var statearr_31946 = state_31928;
(statearr_31946[(12)] = inst_31921);

return statearr_31946;
})();
var statearr_31947_31975 = state_31928__$1;
(statearr_31947_31975[(2)] = null);

(statearr_31947_31975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (10))){
var inst_31896 = (state_31928[(2)]);
var inst_31897 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31928__$1 = (function (){var statearr_31948 = state_31928;
(statearr_31948[(13)] = inst_31896);

return statearr_31948;
})();
var statearr_31949_31976 = state_31928__$1;
(statearr_31949_31976[(2)] = inst_31897);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31928__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31929 === (8))){
var inst_31910 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
var statearr_31950_31977 = state_31928__$1;
(statearr_31950_31977[(2)] = inst_31910);

(statearr_31950_31977[(1)] = (5));


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
});})(c__29943__auto___31962,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29831__auto__,c__29943__auto___31962,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29832__auto__ = null;
var cljs$core$async$state_machine__29832__auto____0 = (function (){
var statearr_31954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31954[(0)] = cljs$core$async$state_machine__29832__auto__);

(statearr_31954[(1)] = (1));

return statearr_31954;
});
var cljs$core$async$state_machine__29832__auto____1 = (function (state_31928){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_31928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e31955){if((e31955 instanceof Object)){
var ex__29835__auto__ = e31955;
var statearr_31956_31978 = state_31928;
(statearr_31956_31978[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31979 = state_31928;
state_31928 = G__31979;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
cljs$core$async$state_machine__29832__auto__ = function(state_31928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29832__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29832__auto____1.call(this,state_31928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29832__auto____0;
cljs$core$async$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29832__auto____1;
return cljs$core$async$state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto___31962,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29945__auto__ = (function (){var statearr_31957 = f__29944__auto__.call(null);
(statearr_31957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___31962);

return statearr_31957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto___31962,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args31981 = [];
var len__26882__auto___32037 = arguments.length;
var i__26883__auto___32038 = (0);
while(true){
if((i__26883__auto___32038 < len__26882__auto___32037)){
args31981.push((arguments[i__26883__auto___32038]));

var G__32039 = (i__26883__auto___32038 + (1));
i__26883__auto___32038 = G__32039;
continue;
} else {
}
break;
}

var G__31983 = args31981.length;
switch (G__31983) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31981.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29943__auto___32041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto___32041,out){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto___32041,out){
return (function (state_32013){
var state_val_32014 = (state_32013[(1)]);
if((state_val_32014 === (7))){
var inst_31992 = (state_32013[(7)]);
var inst_31993 = (state_32013[(8)]);
var inst_31992__$1 = (state_32013[(2)]);
var inst_31993__$1 = cljs.core.nth.call(null,inst_31992__$1,(0),null);
var inst_31994 = cljs.core.nth.call(null,inst_31992__$1,(1),null);
var inst_31995 = (inst_31993__$1 == null);
var state_32013__$1 = (function (){var statearr_32015 = state_32013;
(statearr_32015[(7)] = inst_31992__$1);

(statearr_32015[(8)] = inst_31993__$1);

(statearr_32015[(9)] = inst_31994);

return statearr_32015;
})();
if(cljs.core.truth_(inst_31995)){
var statearr_32016_32042 = state_32013__$1;
(statearr_32016_32042[(1)] = (8));

} else {
var statearr_32017_32043 = state_32013__$1;
(statearr_32017_32043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32014 === (1))){
var inst_31984 = cljs.core.vec.call(null,chs);
var inst_31985 = inst_31984;
var state_32013__$1 = (function (){var statearr_32018 = state_32013;
(statearr_32018[(10)] = inst_31985);

return statearr_32018;
})();
var statearr_32019_32044 = state_32013__$1;
(statearr_32019_32044[(2)] = null);

(statearr_32019_32044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32014 === (4))){
var inst_31985 = (state_32013[(10)]);
var state_32013__$1 = state_32013;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32013__$1,(7),inst_31985);
} else {
if((state_val_32014 === (6))){
var inst_32009 = (state_32013[(2)]);
var state_32013__$1 = state_32013;
var statearr_32020_32045 = state_32013__$1;
(statearr_32020_32045[(2)] = inst_32009);

(statearr_32020_32045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32014 === (3))){
var inst_32011 = (state_32013[(2)]);
var state_32013__$1 = state_32013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32013__$1,inst_32011);
} else {
if((state_val_32014 === (2))){
var inst_31985 = (state_32013[(10)]);
var inst_31987 = cljs.core.count.call(null,inst_31985);
var inst_31988 = (inst_31987 > (0));
var state_32013__$1 = state_32013;
if(cljs.core.truth_(inst_31988)){
var statearr_32022_32046 = state_32013__$1;
(statearr_32022_32046[(1)] = (4));

} else {
var statearr_32023_32047 = state_32013__$1;
(statearr_32023_32047[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32014 === (11))){
var inst_31985 = (state_32013[(10)]);
var inst_32002 = (state_32013[(2)]);
var tmp32021 = inst_31985;
var inst_31985__$1 = tmp32021;
var state_32013__$1 = (function (){var statearr_32024 = state_32013;
(statearr_32024[(11)] = inst_32002);

(statearr_32024[(10)] = inst_31985__$1);

return statearr_32024;
})();
var statearr_32025_32048 = state_32013__$1;
(statearr_32025_32048[(2)] = null);

(statearr_32025_32048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32014 === (9))){
var inst_31993 = (state_32013[(8)]);
var state_32013__$1 = state_32013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32013__$1,(11),out,inst_31993);
} else {
if((state_val_32014 === (5))){
var inst_32007 = cljs.core.async.close_BANG_.call(null,out);
var state_32013__$1 = state_32013;
var statearr_32026_32049 = state_32013__$1;
(statearr_32026_32049[(2)] = inst_32007);

(statearr_32026_32049[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32014 === (10))){
var inst_32005 = (state_32013[(2)]);
var state_32013__$1 = state_32013;
var statearr_32027_32050 = state_32013__$1;
(statearr_32027_32050[(2)] = inst_32005);

(statearr_32027_32050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32014 === (8))){
var inst_31992 = (state_32013[(7)]);
var inst_31993 = (state_32013[(8)]);
var inst_31985 = (state_32013[(10)]);
var inst_31994 = (state_32013[(9)]);
var inst_31997 = (function (){var cs = inst_31985;
var vec__31990 = inst_31992;
var v = inst_31993;
var c = inst_31994;
return ((function (cs,vec__31990,v,c,inst_31992,inst_31993,inst_31985,inst_31994,state_val_32014,c__29943__auto___32041,out){
return (function (p1__31980_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31980_SHARP_);
});
;})(cs,vec__31990,v,c,inst_31992,inst_31993,inst_31985,inst_31994,state_val_32014,c__29943__auto___32041,out))
})();
var inst_31998 = cljs.core.filterv.call(null,inst_31997,inst_31985);
var inst_31985__$1 = inst_31998;
var state_32013__$1 = (function (){var statearr_32028 = state_32013;
(statearr_32028[(10)] = inst_31985__$1);

return statearr_32028;
})();
var statearr_32029_32051 = state_32013__$1;
(statearr_32029_32051[(2)] = null);

(statearr_32029_32051[(1)] = (2));


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
});})(c__29943__auto___32041,out))
;
return ((function (switch__29831__auto__,c__29943__auto___32041,out){
return (function() {
var cljs$core$async$state_machine__29832__auto__ = null;
var cljs$core$async$state_machine__29832__auto____0 = (function (){
var statearr_32033 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32033[(0)] = cljs$core$async$state_machine__29832__auto__);

(statearr_32033[(1)] = (1));

return statearr_32033;
});
var cljs$core$async$state_machine__29832__auto____1 = (function (state_32013){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_32013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e32034){if((e32034 instanceof Object)){
var ex__29835__auto__ = e32034;
var statearr_32035_32052 = state_32013;
(statearr_32035_32052[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32053 = state_32013;
state_32013 = G__32053;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
cljs$core$async$state_machine__29832__auto__ = function(state_32013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29832__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29832__auto____1.call(this,state_32013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29832__auto____0;
cljs$core$async$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29832__auto____1;
return cljs$core$async$state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto___32041,out))
})();
var state__29945__auto__ = (function (){var statearr_32036 = f__29944__auto__.call(null);
(statearr_32036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___32041);

return statearr_32036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto___32041,out))
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
var args32054 = [];
var len__26882__auto___32103 = arguments.length;
var i__26883__auto___32104 = (0);
while(true){
if((i__26883__auto___32104 < len__26882__auto___32103)){
args32054.push((arguments[i__26883__auto___32104]));

var G__32105 = (i__26883__auto___32104 + (1));
i__26883__auto___32104 = G__32105;
continue;
} else {
}
break;
}

var G__32056 = args32054.length;
switch (G__32056) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32054.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29943__auto___32107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto___32107,out){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto___32107,out){
return (function (state_32080){
var state_val_32081 = (state_32080[(1)]);
if((state_val_32081 === (7))){
var inst_32062 = (state_32080[(7)]);
var inst_32062__$1 = (state_32080[(2)]);
var inst_32063 = (inst_32062__$1 == null);
var inst_32064 = cljs.core.not.call(null,inst_32063);
var state_32080__$1 = (function (){var statearr_32082 = state_32080;
(statearr_32082[(7)] = inst_32062__$1);

return statearr_32082;
})();
if(inst_32064){
var statearr_32083_32108 = state_32080__$1;
(statearr_32083_32108[(1)] = (8));

} else {
var statearr_32084_32109 = state_32080__$1;
(statearr_32084_32109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (1))){
var inst_32057 = (0);
var state_32080__$1 = (function (){var statearr_32085 = state_32080;
(statearr_32085[(8)] = inst_32057);

return statearr_32085;
})();
var statearr_32086_32110 = state_32080__$1;
(statearr_32086_32110[(2)] = null);

(statearr_32086_32110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (4))){
var state_32080__$1 = state_32080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32080__$1,(7),ch);
} else {
if((state_val_32081 === (6))){
var inst_32075 = (state_32080[(2)]);
var state_32080__$1 = state_32080;
var statearr_32087_32111 = state_32080__$1;
(statearr_32087_32111[(2)] = inst_32075);

(statearr_32087_32111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (3))){
var inst_32077 = (state_32080[(2)]);
var inst_32078 = cljs.core.async.close_BANG_.call(null,out);
var state_32080__$1 = (function (){var statearr_32088 = state_32080;
(statearr_32088[(9)] = inst_32077);

return statearr_32088;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32080__$1,inst_32078);
} else {
if((state_val_32081 === (2))){
var inst_32057 = (state_32080[(8)]);
var inst_32059 = (inst_32057 < n);
var state_32080__$1 = state_32080;
if(cljs.core.truth_(inst_32059)){
var statearr_32089_32112 = state_32080__$1;
(statearr_32089_32112[(1)] = (4));

} else {
var statearr_32090_32113 = state_32080__$1;
(statearr_32090_32113[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (11))){
var inst_32057 = (state_32080[(8)]);
var inst_32067 = (state_32080[(2)]);
var inst_32068 = (inst_32057 + (1));
var inst_32057__$1 = inst_32068;
var state_32080__$1 = (function (){var statearr_32091 = state_32080;
(statearr_32091[(8)] = inst_32057__$1);

(statearr_32091[(10)] = inst_32067);

return statearr_32091;
})();
var statearr_32092_32114 = state_32080__$1;
(statearr_32092_32114[(2)] = null);

(statearr_32092_32114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (9))){
var state_32080__$1 = state_32080;
var statearr_32093_32115 = state_32080__$1;
(statearr_32093_32115[(2)] = null);

(statearr_32093_32115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (5))){
var state_32080__$1 = state_32080;
var statearr_32094_32116 = state_32080__$1;
(statearr_32094_32116[(2)] = null);

(statearr_32094_32116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (10))){
var inst_32072 = (state_32080[(2)]);
var state_32080__$1 = state_32080;
var statearr_32095_32117 = state_32080__$1;
(statearr_32095_32117[(2)] = inst_32072);

(statearr_32095_32117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32081 === (8))){
var inst_32062 = (state_32080[(7)]);
var state_32080__$1 = state_32080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32080__$1,(11),out,inst_32062);
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
});})(c__29943__auto___32107,out))
;
return ((function (switch__29831__auto__,c__29943__auto___32107,out){
return (function() {
var cljs$core$async$state_machine__29832__auto__ = null;
var cljs$core$async$state_machine__29832__auto____0 = (function (){
var statearr_32099 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32099[(0)] = cljs$core$async$state_machine__29832__auto__);

(statearr_32099[(1)] = (1));

return statearr_32099;
});
var cljs$core$async$state_machine__29832__auto____1 = (function (state_32080){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_32080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e32100){if((e32100 instanceof Object)){
var ex__29835__auto__ = e32100;
var statearr_32101_32118 = state_32080;
(statearr_32101_32118[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32119 = state_32080;
state_32080 = G__32119;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
cljs$core$async$state_machine__29832__auto__ = function(state_32080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29832__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29832__auto____1.call(this,state_32080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29832__auto____0;
cljs$core$async$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29832__auto____1;
return cljs$core$async$state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto___32107,out))
})();
var state__29945__auto__ = (function (){var statearr_32102 = f__29944__auto__.call(null);
(statearr_32102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___32107);

return statearr_32102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto___32107,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32127 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32127 = (function (map_LT_,f,ch,meta32128){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32128 = meta32128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32129,meta32128__$1){
var self__ = this;
var _32129__$1 = this;
return (new cljs.core.async.t_cljs$core$async32127(self__.map_LT_,self__.f,self__.ch,meta32128__$1));
});

cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32129){
var self__ = this;
var _32129__$1 = this;
return self__.meta32128;
});

cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32130 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32130 = (function (map_LT_,f,ch,meta32128,_,fn1,meta32131){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32128 = meta32128;
this._ = _;
this.fn1 = fn1;
this.meta32131 = meta32131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32132,meta32131__$1){
var self__ = this;
var _32132__$1 = this;
return (new cljs.core.async.t_cljs$core$async32130(self__.map_LT_,self__.f,self__.ch,self__.meta32128,self__._,self__.fn1,meta32131__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32132){
var self__ = this;
var _32132__$1 = this;
return self__.meta32131;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32130.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32120_SHARP_){
return f1.call(null,(((p1__32120_SHARP_ == null))?null:self__.f.call(null,p1__32120_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32130.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32128","meta32128",-1895678342,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32127","cljs.core.async/t_cljs$core$async32127",-2084549233,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32131","meta32131",-386711778,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32130";

cljs.core.async.t_cljs$core$async32130.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"cljs.core.async/t_cljs$core$async32130");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32130 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32130(map_LT___$1,f__$1,ch__$1,meta32128__$1,___$2,fn1__$1,meta32131){
return (new cljs.core.async.t_cljs$core$async32130(map_LT___$1,f__$1,ch__$1,meta32128__$1,___$2,fn1__$1,meta32131));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32130(self__.map_LT_,self__.f,self__.ch,self__.meta32128,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25800__auto__ = ret;
if(cljs.core.truth_(and__25800__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25800__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32128","meta32128",-1895678342,null)], null);
});

cljs.core.async.t_cljs$core$async32127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32127";

cljs.core.async.t_cljs$core$async32127.cljs$lang$ctorPrWriter = (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"cljs.core.async/t_cljs$core$async32127");
});

cljs.core.async.__GT_t_cljs$core$async32127 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32127(map_LT___$1,f__$1,ch__$1,meta32128){
return (new cljs.core.async.t_cljs$core$async32127(map_LT___$1,f__$1,ch__$1,meta32128));
});

}

return (new cljs.core.async.t_cljs$core$async32127(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32136 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32136 = (function (map_GT_,f,ch,meta32137){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32137 = meta32137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32138,meta32137__$1){
var self__ = this;
var _32138__$1 = this;
return (new cljs.core.async.t_cljs$core$async32136(self__.map_GT_,self__.f,self__.ch,meta32137__$1));
});

cljs.core.async.t_cljs$core$async32136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32138){
var self__ = this;
var _32138__$1 = this;
return self__.meta32137;
});

cljs.core.async.t_cljs$core$async32136.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32136.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32136.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32136.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32136.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32136.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32137","meta32137",-1751224789,null)], null);
});

cljs.core.async.t_cljs$core$async32136.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32136";

cljs.core.async.t_cljs$core$async32136.cljs$lang$ctorPrWriter = (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"cljs.core.async/t_cljs$core$async32136");
});

cljs.core.async.__GT_t_cljs$core$async32136 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32136(map_GT___$1,f__$1,ch__$1,meta32137){
return (new cljs.core.async.t_cljs$core$async32136(map_GT___$1,f__$1,ch__$1,meta32137));
});

}

return (new cljs.core.async.t_cljs$core$async32136(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32142 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32142 = (function (filter_GT_,p,ch,meta32143){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32143 = meta32143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32144,meta32143__$1){
var self__ = this;
var _32144__$1 = this;
return (new cljs.core.async.t_cljs$core$async32142(self__.filter_GT_,self__.p,self__.ch,meta32143__$1));
});

cljs.core.async.t_cljs$core$async32142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32144){
var self__ = this;
var _32144__$1 = this;
return self__.meta32143;
});

cljs.core.async.t_cljs$core$async32142.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32142.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32142.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32142.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32142.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32142.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32142.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32142.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32143","meta32143",447893950,null)], null);
});

cljs.core.async.t_cljs$core$async32142.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32142.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32142";

cljs.core.async.t_cljs$core$async32142.cljs$lang$ctorPrWriter = (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"cljs.core.async/t_cljs$core$async32142");
});

cljs.core.async.__GT_t_cljs$core$async32142 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32142(filter_GT___$1,p__$1,ch__$1,meta32143){
return (new cljs.core.async.t_cljs$core$async32142(filter_GT___$1,p__$1,ch__$1,meta32143));
});

}

return (new cljs.core.async.t_cljs$core$async32142(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args32145 = [];
var len__26882__auto___32189 = arguments.length;
var i__26883__auto___32190 = (0);
while(true){
if((i__26883__auto___32190 < len__26882__auto___32189)){
args32145.push((arguments[i__26883__auto___32190]));

var G__32191 = (i__26883__auto___32190 + (1));
i__26883__auto___32190 = G__32191;
continue;
} else {
}
break;
}

var G__32147 = args32145.length;
switch (G__32147) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32145.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29943__auto___32193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto___32193,out){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto___32193,out){
return (function (state_32168){
var state_val_32169 = (state_32168[(1)]);
if((state_val_32169 === (7))){
var inst_32164 = (state_32168[(2)]);
var state_32168__$1 = state_32168;
var statearr_32170_32194 = state_32168__$1;
(statearr_32170_32194[(2)] = inst_32164);

(statearr_32170_32194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (1))){
var state_32168__$1 = state_32168;
var statearr_32171_32195 = state_32168__$1;
(statearr_32171_32195[(2)] = null);

(statearr_32171_32195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (4))){
var inst_32150 = (state_32168[(7)]);
var inst_32150__$1 = (state_32168[(2)]);
var inst_32151 = (inst_32150__$1 == null);
var state_32168__$1 = (function (){var statearr_32172 = state_32168;
(statearr_32172[(7)] = inst_32150__$1);

return statearr_32172;
})();
if(cljs.core.truth_(inst_32151)){
var statearr_32173_32196 = state_32168__$1;
(statearr_32173_32196[(1)] = (5));

} else {
var statearr_32174_32197 = state_32168__$1;
(statearr_32174_32197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (6))){
var inst_32150 = (state_32168[(7)]);
var inst_32155 = p.call(null,inst_32150);
var state_32168__$1 = state_32168;
if(cljs.core.truth_(inst_32155)){
var statearr_32175_32198 = state_32168__$1;
(statearr_32175_32198[(1)] = (8));

} else {
var statearr_32176_32199 = state_32168__$1;
(statearr_32176_32199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (3))){
var inst_32166 = (state_32168[(2)]);
var state_32168__$1 = state_32168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32168__$1,inst_32166);
} else {
if((state_val_32169 === (2))){
var state_32168__$1 = state_32168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32168__$1,(4),ch);
} else {
if((state_val_32169 === (11))){
var inst_32158 = (state_32168[(2)]);
var state_32168__$1 = state_32168;
var statearr_32177_32200 = state_32168__$1;
(statearr_32177_32200[(2)] = inst_32158);

(statearr_32177_32200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (9))){
var state_32168__$1 = state_32168;
var statearr_32178_32201 = state_32168__$1;
(statearr_32178_32201[(2)] = null);

(statearr_32178_32201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (5))){
var inst_32153 = cljs.core.async.close_BANG_.call(null,out);
var state_32168__$1 = state_32168;
var statearr_32179_32202 = state_32168__$1;
(statearr_32179_32202[(2)] = inst_32153);

(statearr_32179_32202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (10))){
var inst_32161 = (state_32168[(2)]);
var state_32168__$1 = (function (){var statearr_32180 = state_32168;
(statearr_32180[(8)] = inst_32161);

return statearr_32180;
})();
var statearr_32181_32203 = state_32168__$1;
(statearr_32181_32203[(2)] = null);

(statearr_32181_32203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32169 === (8))){
var inst_32150 = (state_32168[(7)]);
var state_32168__$1 = state_32168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32168__$1,(11),out,inst_32150);
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
});})(c__29943__auto___32193,out))
;
return ((function (switch__29831__auto__,c__29943__auto___32193,out){
return (function() {
var cljs$core$async$state_machine__29832__auto__ = null;
var cljs$core$async$state_machine__29832__auto____0 = (function (){
var statearr_32185 = [null,null,null,null,null,null,null,null,null];
(statearr_32185[(0)] = cljs$core$async$state_machine__29832__auto__);

(statearr_32185[(1)] = (1));

return statearr_32185;
});
var cljs$core$async$state_machine__29832__auto____1 = (function (state_32168){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_32168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e32186){if((e32186 instanceof Object)){
var ex__29835__auto__ = e32186;
var statearr_32187_32204 = state_32168;
(statearr_32187_32204[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32205 = state_32168;
state_32168 = G__32205;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
cljs$core$async$state_machine__29832__auto__ = function(state_32168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29832__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29832__auto____1.call(this,state_32168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29832__auto____0;
cljs$core$async$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29832__auto____1;
return cljs$core$async$state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto___32193,out))
})();
var state__29945__auto__ = (function (){var statearr_32188 = f__29944__auto__.call(null);
(statearr_32188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___32193);

return statearr_32188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto___32193,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32206 = [];
var len__26882__auto___32209 = arguments.length;
var i__26883__auto___32210 = (0);
while(true){
if((i__26883__auto___32210 < len__26882__auto___32209)){
args32206.push((arguments[i__26883__auto___32210]));

var G__32211 = (i__26883__auto___32210 + (1));
i__26883__auto___32210 = G__32211;
continue;
} else {
}
break;
}

var G__32208 = args32206.length;
switch (G__32208) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32206.length)].join('')));

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
var c__29943__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto__){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto__){
return (function (state_32378){
var state_val_32379 = (state_32378[(1)]);
if((state_val_32379 === (7))){
var inst_32374 = (state_32378[(2)]);
var state_32378__$1 = state_32378;
var statearr_32380_32421 = state_32378__$1;
(statearr_32380_32421[(2)] = inst_32374);

(statearr_32380_32421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (20))){
var inst_32344 = (state_32378[(7)]);
var inst_32355 = (state_32378[(2)]);
var inst_32356 = cljs.core.next.call(null,inst_32344);
var inst_32330 = inst_32356;
var inst_32331 = null;
var inst_32332 = (0);
var inst_32333 = (0);
var state_32378__$1 = (function (){var statearr_32381 = state_32378;
(statearr_32381[(8)] = inst_32331);

(statearr_32381[(9)] = inst_32355);

(statearr_32381[(10)] = inst_32332);

(statearr_32381[(11)] = inst_32333);

(statearr_32381[(12)] = inst_32330);

return statearr_32381;
})();
var statearr_32382_32422 = state_32378__$1;
(statearr_32382_32422[(2)] = null);

(statearr_32382_32422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (1))){
var state_32378__$1 = state_32378;
var statearr_32383_32423 = state_32378__$1;
(statearr_32383_32423[(2)] = null);

(statearr_32383_32423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (4))){
var inst_32319 = (state_32378[(13)]);
var inst_32319__$1 = (state_32378[(2)]);
var inst_32320 = (inst_32319__$1 == null);
var state_32378__$1 = (function (){var statearr_32384 = state_32378;
(statearr_32384[(13)] = inst_32319__$1);

return statearr_32384;
})();
if(cljs.core.truth_(inst_32320)){
var statearr_32385_32424 = state_32378__$1;
(statearr_32385_32424[(1)] = (5));

} else {
var statearr_32386_32425 = state_32378__$1;
(statearr_32386_32425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (15))){
var state_32378__$1 = state_32378;
var statearr_32390_32426 = state_32378__$1;
(statearr_32390_32426[(2)] = null);

(statearr_32390_32426[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (21))){
var state_32378__$1 = state_32378;
var statearr_32391_32427 = state_32378__$1;
(statearr_32391_32427[(2)] = null);

(statearr_32391_32427[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (13))){
var inst_32331 = (state_32378[(8)]);
var inst_32332 = (state_32378[(10)]);
var inst_32333 = (state_32378[(11)]);
var inst_32330 = (state_32378[(12)]);
var inst_32340 = (state_32378[(2)]);
var inst_32341 = (inst_32333 + (1));
var tmp32387 = inst_32331;
var tmp32388 = inst_32332;
var tmp32389 = inst_32330;
var inst_32330__$1 = tmp32389;
var inst_32331__$1 = tmp32387;
var inst_32332__$1 = tmp32388;
var inst_32333__$1 = inst_32341;
var state_32378__$1 = (function (){var statearr_32392 = state_32378;
(statearr_32392[(8)] = inst_32331__$1);

(statearr_32392[(10)] = inst_32332__$1);

(statearr_32392[(11)] = inst_32333__$1);

(statearr_32392[(12)] = inst_32330__$1);

(statearr_32392[(14)] = inst_32340);

return statearr_32392;
})();
var statearr_32393_32428 = state_32378__$1;
(statearr_32393_32428[(2)] = null);

(statearr_32393_32428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (22))){
var state_32378__$1 = state_32378;
var statearr_32394_32429 = state_32378__$1;
(statearr_32394_32429[(2)] = null);

(statearr_32394_32429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (6))){
var inst_32319 = (state_32378[(13)]);
var inst_32328 = f.call(null,inst_32319);
var inst_32329 = cljs.core.seq.call(null,inst_32328);
var inst_32330 = inst_32329;
var inst_32331 = null;
var inst_32332 = (0);
var inst_32333 = (0);
var state_32378__$1 = (function (){var statearr_32395 = state_32378;
(statearr_32395[(8)] = inst_32331);

(statearr_32395[(10)] = inst_32332);

(statearr_32395[(11)] = inst_32333);

(statearr_32395[(12)] = inst_32330);

return statearr_32395;
})();
var statearr_32396_32430 = state_32378__$1;
(statearr_32396_32430[(2)] = null);

(statearr_32396_32430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (17))){
var inst_32344 = (state_32378[(7)]);
var inst_32348 = cljs.core.chunk_first.call(null,inst_32344);
var inst_32349 = cljs.core.chunk_rest.call(null,inst_32344);
var inst_32350 = cljs.core.count.call(null,inst_32348);
var inst_32330 = inst_32349;
var inst_32331 = inst_32348;
var inst_32332 = inst_32350;
var inst_32333 = (0);
var state_32378__$1 = (function (){var statearr_32397 = state_32378;
(statearr_32397[(8)] = inst_32331);

(statearr_32397[(10)] = inst_32332);

(statearr_32397[(11)] = inst_32333);

(statearr_32397[(12)] = inst_32330);

return statearr_32397;
})();
var statearr_32398_32431 = state_32378__$1;
(statearr_32398_32431[(2)] = null);

(statearr_32398_32431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (3))){
var inst_32376 = (state_32378[(2)]);
var state_32378__$1 = state_32378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32378__$1,inst_32376);
} else {
if((state_val_32379 === (12))){
var inst_32364 = (state_32378[(2)]);
var state_32378__$1 = state_32378;
var statearr_32399_32432 = state_32378__$1;
(statearr_32399_32432[(2)] = inst_32364);

(statearr_32399_32432[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (2))){
var state_32378__$1 = state_32378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32378__$1,(4),in$);
} else {
if((state_val_32379 === (23))){
var inst_32372 = (state_32378[(2)]);
var state_32378__$1 = state_32378;
var statearr_32400_32433 = state_32378__$1;
(statearr_32400_32433[(2)] = inst_32372);

(statearr_32400_32433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (19))){
var inst_32359 = (state_32378[(2)]);
var state_32378__$1 = state_32378;
var statearr_32401_32434 = state_32378__$1;
(statearr_32401_32434[(2)] = inst_32359);

(statearr_32401_32434[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (11))){
var inst_32344 = (state_32378[(7)]);
var inst_32330 = (state_32378[(12)]);
var inst_32344__$1 = cljs.core.seq.call(null,inst_32330);
var state_32378__$1 = (function (){var statearr_32402 = state_32378;
(statearr_32402[(7)] = inst_32344__$1);

return statearr_32402;
})();
if(inst_32344__$1){
var statearr_32403_32435 = state_32378__$1;
(statearr_32403_32435[(1)] = (14));

} else {
var statearr_32404_32436 = state_32378__$1;
(statearr_32404_32436[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (9))){
var inst_32366 = (state_32378[(2)]);
var inst_32367 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32378__$1 = (function (){var statearr_32405 = state_32378;
(statearr_32405[(15)] = inst_32366);

return statearr_32405;
})();
if(cljs.core.truth_(inst_32367)){
var statearr_32406_32437 = state_32378__$1;
(statearr_32406_32437[(1)] = (21));

} else {
var statearr_32407_32438 = state_32378__$1;
(statearr_32407_32438[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (5))){
var inst_32322 = cljs.core.async.close_BANG_.call(null,out);
var state_32378__$1 = state_32378;
var statearr_32408_32439 = state_32378__$1;
(statearr_32408_32439[(2)] = inst_32322);

(statearr_32408_32439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (14))){
var inst_32344 = (state_32378[(7)]);
var inst_32346 = cljs.core.chunked_seq_QMARK_.call(null,inst_32344);
var state_32378__$1 = state_32378;
if(inst_32346){
var statearr_32409_32440 = state_32378__$1;
(statearr_32409_32440[(1)] = (17));

} else {
var statearr_32410_32441 = state_32378__$1;
(statearr_32410_32441[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (16))){
var inst_32362 = (state_32378[(2)]);
var state_32378__$1 = state_32378;
var statearr_32411_32442 = state_32378__$1;
(statearr_32411_32442[(2)] = inst_32362);

(statearr_32411_32442[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (10))){
var inst_32331 = (state_32378[(8)]);
var inst_32333 = (state_32378[(11)]);
var inst_32338 = cljs.core._nth.call(null,inst_32331,inst_32333);
var state_32378__$1 = state_32378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32378__$1,(13),out,inst_32338);
} else {
if((state_val_32379 === (18))){
var inst_32344 = (state_32378[(7)]);
var inst_32353 = cljs.core.first.call(null,inst_32344);
var state_32378__$1 = state_32378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32378__$1,(20),out,inst_32353);
} else {
if((state_val_32379 === (8))){
var inst_32332 = (state_32378[(10)]);
var inst_32333 = (state_32378[(11)]);
var inst_32335 = (inst_32333 < inst_32332);
var inst_32336 = inst_32335;
var state_32378__$1 = state_32378;
if(cljs.core.truth_(inst_32336)){
var statearr_32412_32443 = state_32378__$1;
(statearr_32412_32443[(1)] = (10));

} else {
var statearr_32413_32444 = state_32378__$1;
(statearr_32413_32444[(1)] = (11));

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
});})(c__29943__auto__))
;
return ((function (switch__29831__auto__,c__29943__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29832__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29832__auto____0 = (function (){
var statearr_32417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32417[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29832__auto__);

(statearr_32417[(1)] = (1));

return statearr_32417;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29832__auto____1 = (function (state_32378){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_32378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e32418){if((e32418 instanceof Object)){
var ex__29835__auto__ = e32418;
var statearr_32419_32445 = state_32378;
(statearr_32419_32445[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32446 = state_32378;
state_32378 = G__32446;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29832__auto__ = function(state_32378){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29832__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29832__auto____1.call(this,state_32378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29832__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29832__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto__))
})();
var state__29945__auto__ = (function (){var statearr_32420 = f__29944__auto__.call(null);
(statearr_32420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto__);

return statearr_32420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto__))
);

return c__29943__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32447 = [];
var len__26882__auto___32450 = arguments.length;
var i__26883__auto___32451 = (0);
while(true){
if((i__26883__auto___32451 < len__26882__auto___32450)){
args32447.push((arguments[i__26883__auto___32451]));

var G__32452 = (i__26883__auto___32451 + (1));
i__26883__auto___32451 = G__32452;
continue;
} else {
}
break;
}

var G__32449 = args32447.length;
switch (G__32449) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32447.length)].join('')));

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
var args32454 = [];
var len__26882__auto___32457 = arguments.length;
var i__26883__auto___32458 = (0);
while(true){
if((i__26883__auto___32458 < len__26882__auto___32457)){
args32454.push((arguments[i__26883__auto___32458]));

var G__32459 = (i__26883__auto___32458 + (1));
i__26883__auto___32458 = G__32459;
continue;
} else {
}
break;
}

var G__32456 = args32454.length;
switch (G__32456) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32454.length)].join('')));

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
var args32461 = [];
var len__26882__auto___32512 = arguments.length;
var i__26883__auto___32513 = (0);
while(true){
if((i__26883__auto___32513 < len__26882__auto___32512)){
args32461.push((arguments[i__26883__auto___32513]));

var G__32514 = (i__26883__auto___32513 + (1));
i__26883__auto___32513 = G__32514;
continue;
} else {
}
break;
}

var G__32463 = args32461.length;
switch (G__32463) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32461.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29943__auto___32516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto___32516,out){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto___32516,out){
return (function (state_32487){
var state_val_32488 = (state_32487[(1)]);
if((state_val_32488 === (7))){
var inst_32482 = (state_32487[(2)]);
var state_32487__$1 = state_32487;
var statearr_32489_32517 = state_32487__$1;
(statearr_32489_32517[(2)] = inst_32482);

(statearr_32489_32517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (1))){
var inst_32464 = null;
var state_32487__$1 = (function (){var statearr_32490 = state_32487;
(statearr_32490[(7)] = inst_32464);

return statearr_32490;
})();
var statearr_32491_32518 = state_32487__$1;
(statearr_32491_32518[(2)] = null);

(statearr_32491_32518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (4))){
var inst_32467 = (state_32487[(8)]);
var inst_32467__$1 = (state_32487[(2)]);
var inst_32468 = (inst_32467__$1 == null);
var inst_32469 = cljs.core.not.call(null,inst_32468);
var state_32487__$1 = (function (){var statearr_32492 = state_32487;
(statearr_32492[(8)] = inst_32467__$1);

return statearr_32492;
})();
if(inst_32469){
var statearr_32493_32519 = state_32487__$1;
(statearr_32493_32519[(1)] = (5));

} else {
var statearr_32494_32520 = state_32487__$1;
(statearr_32494_32520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (6))){
var state_32487__$1 = state_32487;
var statearr_32495_32521 = state_32487__$1;
(statearr_32495_32521[(2)] = null);

(statearr_32495_32521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (3))){
var inst_32484 = (state_32487[(2)]);
var inst_32485 = cljs.core.async.close_BANG_.call(null,out);
var state_32487__$1 = (function (){var statearr_32496 = state_32487;
(statearr_32496[(9)] = inst_32484);

return statearr_32496;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32487__$1,inst_32485);
} else {
if((state_val_32488 === (2))){
var state_32487__$1 = state_32487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32487__$1,(4),ch);
} else {
if((state_val_32488 === (11))){
var inst_32467 = (state_32487[(8)]);
var inst_32476 = (state_32487[(2)]);
var inst_32464 = inst_32467;
var state_32487__$1 = (function (){var statearr_32497 = state_32487;
(statearr_32497[(7)] = inst_32464);

(statearr_32497[(10)] = inst_32476);

return statearr_32497;
})();
var statearr_32498_32522 = state_32487__$1;
(statearr_32498_32522[(2)] = null);

(statearr_32498_32522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (9))){
var inst_32467 = (state_32487[(8)]);
var state_32487__$1 = state_32487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32487__$1,(11),out,inst_32467);
} else {
if((state_val_32488 === (5))){
var inst_32464 = (state_32487[(7)]);
var inst_32467 = (state_32487[(8)]);
var inst_32471 = cljs.core._EQ_.call(null,inst_32467,inst_32464);
var state_32487__$1 = state_32487;
if(inst_32471){
var statearr_32500_32523 = state_32487__$1;
(statearr_32500_32523[(1)] = (8));

} else {
var statearr_32501_32524 = state_32487__$1;
(statearr_32501_32524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (10))){
var inst_32479 = (state_32487[(2)]);
var state_32487__$1 = state_32487;
var statearr_32502_32525 = state_32487__$1;
(statearr_32502_32525[(2)] = inst_32479);

(statearr_32502_32525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32488 === (8))){
var inst_32464 = (state_32487[(7)]);
var tmp32499 = inst_32464;
var inst_32464__$1 = tmp32499;
var state_32487__$1 = (function (){var statearr_32503 = state_32487;
(statearr_32503[(7)] = inst_32464__$1);

return statearr_32503;
})();
var statearr_32504_32526 = state_32487__$1;
(statearr_32504_32526[(2)] = null);

(statearr_32504_32526[(1)] = (2));


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
});})(c__29943__auto___32516,out))
;
return ((function (switch__29831__auto__,c__29943__auto___32516,out){
return (function() {
var cljs$core$async$state_machine__29832__auto__ = null;
var cljs$core$async$state_machine__29832__auto____0 = (function (){
var statearr_32508 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32508[(0)] = cljs$core$async$state_machine__29832__auto__);

(statearr_32508[(1)] = (1));

return statearr_32508;
});
var cljs$core$async$state_machine__29832__auto____1 = (function (state_32487){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_32487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e32509){if((e32509 instanceof Object)){
var ex__29835__auto__ = e32509;
var statearr_32510_32527 = state_32487;
(statearr_32510_32527[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32528 = state_32487;
state_32487 = G__32528;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
cljs$core$async$state_machine__29832__auto__ = function(state_32487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29832__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29832__auto____1.call(this,state_32487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29832__auto____0;
cljs$core$async$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29832__auto____1;
return cljs$core$async$state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto___32516,out))
})();
var state__29945__auto__ = (function (){var statearr_32511 = f__29944__auto__.call(null);
(statearr_32511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___32516);

return statearr_32511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto___32516,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32529 = [];
var len__26882__auto___32599 = arguments.length;
var i__26883__auto___32600 = (0);
while(true){
if((i__26883__auto___32600 < len__26882__auto___32599)){
args32529.push((arguments[i__26883__auto___32600]));

var G__32601 = (i__26883__auto___32600 + (1));
i__26883__auto___32600 = G__32601;
continue;
} else {
}
break;
}

var G__32531 = args32529.length;
switch (G__32531) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32529.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29943__auto___32603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto___32603,out){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto___32603,out){
return (function (state_32569){
var state_val_32570 = (state_32569[(1)]);
if((state_val_32570 === (7))){
var inst_32565 = (state_32569[(2)]);
var state_32569__$1 = state_32569;
var statearr_32571_32604 = state_32569__$1;
(statearr_32571_32604[(2)] = inst_32565);

(statearr_32571_32604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (1))){
var inst_32532 = (new Array(n));
var inst_32533 = inst_32532;
var inst_32534 = (0);
var state_32569__$1 = (function (){var statearr_32572 = state_32569;
(statearr_32572[(7)] = inst_32534);

(statearr_32572[(8)] = inst_32533);

return statearr_32572;
})();
var statearr_32573_32605 = state_32569__$1;
(statearr_32573_32605[(2)] = null);

(statearr_32573_32605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (4))){
var inst_32537 = (state_32569[(9)]);
var inst_32537__$1 = (state_32569[(2)]);
var inst_32538 = (inst_32537__$1 == null);
var inst_32539 = cljs.core.not.call(null,inst_32538);
var state_32569__$1 = (function (){var statearr_32574 = state_32569;
(statearr_32574[(9)] = inst_32537__$1);

return statearr_32574;
})();
if(inst_32539){
var statearr_32575_32606 = state_32569__$1;
(statearr_32575_32606[(1)] = (5));

} else {
var statearr_32576_32607 = state_32569__$1;
(statearr_32576_32607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (15))){
var inst_32559 = (state_32569[(2)]);
var state_32569__$1 = state_32569;
var statearr_32577_32608 = state_32569__$1;
(statearr_32577_32608[(2)] = inst_32559);

(statearr_32577_32608[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (13))){
var state_32569__$1 = state_32569;
var statearr_32578_32609 = state_32569__$1;
(statearr_32578_32609[(2)] = null);

(statearr_32578_32609[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (6))){
var inst_32534 = (state_32569[(7)]);
var inst_32555 = (inst_32534 > (0));
var state_32569__$1 = state_32569;
if(cljs.core.truth_(inst_32555)){
var statearr_32579_32610 = state_32569__$1;
(statearr_32579_32610[(1)] = (12));

} else {
var statearr_32580_32611 = state_32569__$1;
(statearr_32580_32611[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (3))){
var inst_32567 = (state_32569[(2)]);
var state_32569__$1 = state_32569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32569__$1,inst_32567);
} else {
if((state_val_32570 === (12))){
var inst_32533 = (state_32569[(8)]);
var inst_32557 = cljs.core.vec.call(null,inst_32533);
var state_32569__$1 = state_32569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32569__$1,(15),out,inst_32557);
} else {
if((state_val_32570 === (2))){
var state_32569__$1 = state_32569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32569__$1,(4),ch);
} else {
if((state_val_32570 === (11))){
var inst_32549 = (state_32569[(2)]);
var inst_32550 = (new Array(n));
var inst_32533 = inst_32550;
var inst_32534 = (0);
var state_32569__$1 = (function (){var statearr_32581 = state_32569;
(statearr_32581[(7)] = inst_32534);

(statearr_32581[(10)] = inst_32549);

(statearr_32581[(8)] = inst_32533);

return statearr_32581;
})();
var statearr_32582_32612 = state_32569__$1;
(statearr_32582_32612[(2)] = null);

(statearr_32582_32612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (9))){
var inst_32533 = (state_32569[(8)]);
var inst_32547 = cljs.core.vec.call(null,inst_32533);
var state_32569__$1 = state_32569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32569__$1,(11),out,inst_32547);
} else {
if((state_val_32570 === (5))){
var inst_32537 = (state_32569[(9)]);
var inst_32534 = (state_32569[(7)]);
var inst_32533 = (state_32569[(8)]);
var inst_32542 = (state_32569[(11)]);
var inst_32541 = (inst_32533[inst_32534] = inst_32537);
var inst_32542__$1 = (inst_32534 + (1));
var inst_32543 = (inst_32542__$1 < n);
var state_32569__$1 = (function (){var statearr_32583 = state_32569;
(statearr_32583[(11)] = inst_32542__$1);

(statearr_32583[(12)] = inst_32541);

return statearr_32583;
})();
if(cljs.core.truth_(inst_32543)){
var statearr_32584_32613 = state_32569__$1;
(statearr_32584_32613[(1)] = (8));

} else {
var statearr_32585_32614 = state_32569__$1;
(statearr_32585_32614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (14))){
var inst_32562 = (state_32569[(2)]);
var inst_32563 = cljs.core.async.close_BANG_.call(null,out);
var state_32569__$1 = (function (){var statearr_32587 = state_32569;
(statearr_32587[(13)] = inst_32562);

return statearr_32587;
})();
var statearr_32588_32615 = state_32569__$1;
(statearr_32588_32615[(2)] = inst_32563);

(statearr_32588_32615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (10))){
var inst_32553 = (state_32569[(2)]);
var state_32569__$1 = state_32569;
var statearr_32589_32616 = state_32569__$1;
(statearr_32589_32616[(2)] = inst_32553);

(statearr_32589_32616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (8))){
var inst_32533 = (state_32569[(8)]);
var inst_32542 = (state_32569[(11)]);
var tmp32586 = inst_32533;
var inst_32533__$1 = tmp32586;
var inst_32534 = inst_32542;
var state_32569__$1 = (function (){var statearr_32590 = state_32569;
(statearr_32590[(7)] = inst_32534);

(statearr_32590[(8)] = inst_32533__$1);

return statearr_32590;
})();
var statearr_32591_32617 = state_32569__$1;
(statearr_32591_32617[(2)] = null);

(statearr_32591_32617[(1)] = (2));


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
});})(c__29943__auto___32603,out))
;
return ((function (switch__29831__auto__,c__29943__auto___32603,out){
return (function() {
var cljs$core$async$state_machine__29832__auto__ = null;
var cljs$core$async$state_machine__29832__auto____0 = (function (){
var statearr_32595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32595[(0)] = cljs$core$async$state_machine__29832__auto__);

(statearr_32595[(1)] = (1));

return statearr_32595;
});
var cljs$core$async$state_machine__29832__auto____1 = (function (state_32569){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_32569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e32596){if((e32596 instanceof Object)){
var ex__29835__auto__ = e32596;
var statearr_32597_32618 = state_32569;
(statearr_32597_32618[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32619 = state_32569;
state_32569 = G__32619;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
cljs$core$async$state_machine__29832__auto__ = function(state_32569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29832__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29832__auto____1.call(this,state_32569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29832__auto____0;
cljs$core$async$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29832__auto____1;
return cljs$core$async$state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto___32603,out))
})();
var state__29945__auto__ = (function (){var statearr_32598 = f__29944__auto__.call(null);
(statearr_32598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___32603);

return statearr_32598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto___32603,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32620 = [];
var len__26882__auto___32694 = arguments.length;
var i__26883__auto___32695 = (0);
while(true){
if((i__26883__auto___32695 < len__26882__auto___32694)){
args32620.push((arguments[i__26883__auto___32695]));

var G__32696 = (i__26883__auto___32695 + (1));
i__26883__auto___32695 = G__32696;
continue;
} else {
}
break;
}

var G__32622 = args32620.length;
switch (G__32622) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32620.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29943__auto___32698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto___32698,out){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto___32698,out){
return (function (state_32664){
var state_val_32665 = (state_32664[(1)]);
if((state_val_32665 === (7))){
var inst_32660 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
var statearr_32666_32699 = state_32664__$1;
(statearr_32666_32699[(2)] = inst_32660);

(statearr_32666_32699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (1))){
var inst_32623 = [];
var inst_32624 = inst_32623;
var inst_32625 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32664__$1 = (function (){var statearr_32667 = state_32664;
(statearr_32667[(7)] = inst_32624);

(statearr_32667[(8)] = inst_32625);

return statearr_32667;
})();
var statearr_32668_32700 = state_32664__$1;
(statearr_32668_32700[(2)] = null);

(statearr_32668_32700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (4))){
var inst_32628 = (state_32664[(9)]);
var inst_32628__$1 = (state_32664[(2)]);
var inst_32629 = (inst_32628__$1 == null);
var inst_32630 = cljs.core.not.call(null,inst_32629);
var state_32664__$1 = (function (){var statearr_32669 = state_32664;
(statearr_32669[(9)] = inst_32628__$1);

return statearr_32669;
})();
if(inst_32630){
var statearr_32670_32701 = state_32664__$1;
(statearr_32670_32701[(1)] = (5));

} else {
var statearr_32671_32702 = state_32664__$1;
(statearr_32671_32702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (15))){
var inst_32654 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
var statearr_32672_32703 = state_32664__$1;
(statearr_32672_32703[(2)] = inst_32654);

(statearr_32672_32703[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (13))){
var state_32664__$1 = state_32664;
var statearr_32673_32704 = state_32664__$1;
(statearr_32673_32704[(2)] = null);

(statearr_32673_32704[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (6))){
var inst_32624 = (state_32664[(7)]);
var inst_32649 = inst_32624.length;
var inst_32650 = (inst_32649 > (0));
var state_32664__$1 = state_32664;
if(cljs.core.truth_(inst_32650)){
var statearr_32674_32705 = state_32664__$1;
(statearr_32674_32705[(1)] = (12));

} else {
var statearr_32675_32706 = state_32664__$1;
(statearr_32675_32706[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (3))){
var inst_32662 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32664__$1,inst_32662);
} else {
if((state_val_32665 === (12))){
var inst_32624 = (state_32664[(7)]);
var inst_32652 = cljs.core.vec.call(null,inst_32624);
var state_32664__$1 = state_32664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32664__$1,(15),out,inst_32652);
} else {
if((state_val_32665 === (2))){
var state_32664__$1 = state_32664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32664__$1,(4),ch);
} else {
if((state_val_32665 === (11))){
var inst_32632 = (state_32664[(10)]);
var inst_32628 = (state_32664[(9)]);
var inst_32642 = (state_32664[(2)]);
var inst_32643 = [];
var inst_32644 = inst_32643.push(inst_32628);
var inst_32624 = inst_32643;
var inst_32625 = inst_32632;
var state_32664__$1 = (function (){var statearr_32676 = state_32664;
(statearr_32676[(7)] = inst_32624);

(statearr_32676[(8)] = inst_32625);

(statearr_32676[(11)] = inst_32644);

(statearr_32676[(12)] = inst_32642);

return statearr_32676;
})();
var statearr_32677_32707 = state_32664__$1;
(statearr_32677_32707[(2)] = null);

(statearr_32677_32707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (9))){
var inst_32624 = (state_32664[(7)]);
var inst_32640 = cljs.core.vec.call(null,inst_32624);
var state_32664__$1 = state_32664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32664__$1,(11),out,inst_32640);
} else {
if((state_val_32665 === (5))){
var inst_32632 = (state_32664[(10)]);
var inst_32625 = (state_32664[(8)]);
var inst_32628 = (state_32664[(9)]);
var inst_32632__$1 = f.call(null,inst_32628);
var inst_32633 = cljs.core._EQ_.call(null,inst_32632__$1,inst_32625);
var inst_32634 = cljs.core.keyword_identical_QMARK_.call(null,inst_32625,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32635 = (inst_32633) || (inst_32634);
var state_32664__$1 = (function (){var statearr_32678 = state_32664;
(statearr_32678[(10)] = inst_32632__$1);

return statearr_32678;
})();
if(cljs.core.truth_(inst_32635)){
var statearr_32679_32708 = state_32664__$1;
(statearr_32679_32708[(1)] = (8));

} else {
var statearr_32680_32709 = state_32664__$1;
(statearr_32680_32709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (14))){
var inst_32657 = (state_32664[(2)]);
var inst_32658 = cljs.core.async.close_BANG_.call(null,out);
var state_32664__$1 = (function (){var statearr_32682 = state_32664;
(statearr_32682[(13)] = inst_32657);

return statearr_32682;
})();
var statearr_32683_32710 = state_32664__$1;
(statearr_32683_32710[(2)] = inst_32658);

(statearr_32683_32710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (10))){
var inst_32647 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
var statearr_32684_32711 = state_32664__$1;
(statearr_32684_32711[(2)] = inst_32647);

(statearr_32684_32711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (8))){
var inst_32624 = (state_32664[(7)]);
var inst_32632 = (state_32664[(10)]);
var inst_32628 = (state_32664[(9)]);
var inst_32637 = inst_32624.push(inst_32628);
var tmp32681 = inst_32624;
var inst_32624__$1 = tmp32681;
var inst_32625 = inst_32632;
var state_32664__$1 = (function (){var statearr_32685 = state_32664;
(statearr_32685[(7)] = inst_32624__$1);

(statearr_32685[(8)] = inst_32625);

(statearr_32685[(14)] = inst_32637);

return statearr_32685;
})();
var statearr_32686_32712 = state_32664__$1;
(statearr_32686_32712[(2)] = null);

(statearr_32686_32712[(1)] = (2));


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
});})(c__29943__auto___32698,out))
;
return ((function (switch__29831__auto__,c__29943__auto___32698,out){
return (function() {
var cljs$core$async$state_machine__29832__auto__ = null;
var cljs$core$async$state_machine__29832__auto____0 = (function (){
var statearr_32690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32690[(0)] = cljs$core$async$state_machine__29832__auto__);

(statearr_32690[(1)] = (1));

return statearr_32690;
});
var cljs$core$async$state_machine__29832__auto____1 = (function (state_32664){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_32664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e32691){if((e32691 instanceof Object)){
var ex__29835__auto__ = e32691;
var statearr_32692_32713 = state_32664;
(statearr_32692_32713[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32714 = state_32664;
state_32664 = G__32714;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
cljs$core$async$state_machine__29832__auto__ = function(state_32664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29832__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29832__auto____1.call(this,state_32664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29832__auto____0;
cljs$core$async$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29832__auto____1;
return cljs$core$async$state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto___32698,out))
})();
var state__29945__auto__ = (function (){var statearr_32693 = f__29944__auto__.call(null);
(statearr_32693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___32698);

return statearr_32693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto___32698,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map