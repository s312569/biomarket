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
var args30056 = [];
var len__26950__auto___30062 = arguments.length;
var i__26951__auto___30063 = (0);
while(true){
if((i__26951__auto___30063 < len__26950__auto___30062)){
args30056.push((arguments[i__26951__auto___30063]));

var G__30064 = (i__26951__auto___30063 + (1));
i__26951__auto___30063 = G__30064;
continue;
} else {
}
break;
}

var G__30058 = args30056.length;
switch (G__30058) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30056.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30059 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30059 = (function (f,blockable,meta30060){
this.f = f;
this.blockable = blockable;
this.meta30060 = meta30060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30061,meta30060__$1){
var self__ = this;
var _30061__$1 = this;
return (new cljs.core.async.t_cljs$core$async30059(self__.f,self__.blockable,meta30060__$1));
});

cljs.core.async.t_cljs$core$async30059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30061){
var self__ = this;
var _30061__$1 = this;
return self__.meta30060;
});

cljs.core.async.t_cljs$core$async30059.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30059.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30059.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30059.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30059.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30060","meta30060",-1052282596,null)], null);
});

cljs.core.async.t_cljs$core$async30059.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30059";

cljs.core.async.t_cljs$core$async30059.cljs$lang$ctorPrWriter = (function (this__26486__auto__,writer__26487__auto__,opt__26488__auto__){
return cljs.core._write.call(null,writer__26487__auto__,"cljs.core.async/t_cljs$core$async30059");
});

cljs.core.async.__GT_t_cljs$core$async30059 = (function cljs$core$async$__GT_t_cljs$core$async30059(f__$1,blockable__$1,meta30060){
return (new cljs.core.async.t_cljs$core$async30059(f__$1,blockable__$1,meta30060));
});

}

return (new cljs.core.async.t_cljs$core$async30059(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args30068 = [];
var len__26950__auto___30071 = arguments.length;
var i__26951__auto___30072 = (0);
while(true){
if((i__26951__auto___30072 < len__26950__auto___30071)){
args30068.push((arguments[i__26951__auto___30072]));

var G__30073 = (i__26951__auto___30072 + (1));
i__26951__auto___30072 = G__30073;
continue;
} else {
}
break;
}

var G__30070 = args30068.length;
switch (G__30070) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30068.length)].join('')));

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
var args30075 = [];
var len__26950__auto___30078 = arguments.length;
var i__26951__auto___30079 = (0);
while(true){
if((i__26951__auto___30079 < len__26950__auto___30078)){
args30075.push((arguments[i__26951__auto___30079]));

var G__30080 = (i__26951__auto___30079 + (1));
i__26951__auto___30079 = G__30080;
continue;
} else {
}
break;
}

var G__30077 = args30075.length;
switch (G__30077) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30075.length)].join('')));

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
var args30082 = [];
var len__26950__auto___30085 = arguments.length;
var i__26951__auto___30086 = (0);
while(true){
if((i__26951__auto___30086 < len__26950__auto___30085)){
args30082.push((arguments[i__26951__auto___30086]));

var G__30087 = (i__26951__auto___30086 + (1));
i__26951__auto___30086 = G__30087;
continue;
} else {
}
break;
}

var G__30084 = args30082.length;
switch (G__30084) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30082.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30089 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30089);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30089,ret){
return (function (){
return fn1.call(null,val_30089);
});})(val_30089,ret))
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
var args30090 = [];
var len__26950__auto___30093 = arguments.length;
var i__26951__auto___30094 = (0);
while(true){
if((i__26951__auto___30094 < len__26950__auto___30093)){
args30090.push((arguments[i__26951__auto___30094]));

var G__30095 = (i__26951__auto___30094 + (1));
i__26951__auto___30094 = G__30095;
continue;
} else {
}
break;
}

var G__30092 = args30090.length;
switch (G__30092) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30090.length)].join('')));

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
var n__26795__auto___30097 = n;
var x_30098 = (0);
while(true){
if((x_30098 < n__26795__auto___30097)){
(a[x_30098] = (0));

var G__30099 = (x_30098 + (1));
x_30098 = G__30099;
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

var G__30100 = (i + (1));
i = G__30100;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30104 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30104 = (function (alt_flag,flag,meta30105){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30105 = meta30105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30106,meta30105__$1){
var self__ = this;
var _30106__$1 = this;
return (new cljs.core.async.t_cljs$core$async30104(self__.alt_flag,self__.flag,meta30105__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30106){
var self__ = this;
var _30106__$1 = this;
return self__.meta30105;
});})(flag))
;

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30104.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30104.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30105","meta30105",-726718578,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30104.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30104";

cljs.core.async.t_cljs$core$async30104.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26486__auto__,writer__26487__auto__,opt__26488__auto__){
return cljs.core._write.call(null,writer__26487__auto__,"cljs.core.async/t_cljs$core$async30104");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30104 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30104(alt_flag__$1,flag__$1,meta30105){
return (new cljs.core.async.t_cljs$core$async30104(alt_flag__$1,flag__$1,meta30105));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30104(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30110 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30110 = (function (alt_handler,flag,cb,meta30111){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30111 = meta30111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30112,meta30111__$1){
var self__ = this;
var _30112__$1 = this;
return (new cljs.core.async.t_cljs$core$async30110(self__.alt_handler,self__.flag,self__.cb,meta30111__$1));
});

cljs.core.async.t_cljs$core$async30110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30112){
var self__ = this;
var _30112__$1 = this;
return self__.meta30111;
});

cljs.core.async.t_cljs$core$async30110.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30110.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30111","meta30111",-1265160145,null)], null);
});

cljs.core.async.t_cljs$core$async30110.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30110";

cljs.core.async.t_cljs$core$async30110.cljs$lang$ctorPrWriter = (function (this__26486__auto__,writer__26487__auto__,opt__26488__auto__){
return cljs.core._write.call(null,writer__26487__auto__,"cljs.core.async/t_cljs$core$async30110");
});

cljs.core.async.__GT_t_cljs$core$async30110 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30110(alt_handler__$1,flag__$1,cb__$1,meta30111){
return (new cljs.core.async.t_cljs$core$async30110(alt_handler__$1,flag__$1,cb__$1,meta30111));
});

}

return (new cljs.core.async.t_cljs$core$async30110(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30113_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30113_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30114_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30114_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25880__auto__ = wport;
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30115 = (i + (1));
i = G__30115;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25880__auto__ = ret;
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__25868__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25868__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25868__auto__;
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
var args__26957__auto__ = [];
var len__26950__auto___30121 = arguments.length;
var i__26951__auto___30122 = (0);
while(true){
if((i__26951__auto___30122 < len__26950__auto___30121)){
args__26957__auto__.push((arguments[i__26951__auto___30122]));

var G__30123 = (i__26951__auto___30122 + (1));
i__26951__auto___30122 = G__30123;
continue;
} else {
}
break;
}

var argseq__26958__auto__ = ((((1) < args__26957__auto__.length))?(new cljs.core.IndexedSeq(args__26957__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26958__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30118){
var map__30119 = p__30118;
var map__30119__$1 = ((((!((map__30119 == null)))?((((map__30119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30119):map__30119);
var opts = map__30119__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30116){
var G__30117 = cljs.core.first.call(null,seq30116);
var seq30116__$1 = cljs.core.next.call(null,seq30116);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30117,seq30116__$1);
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
var args30124 = [];
var len__26950__auto___30174 = arguments.length;
var i__26951__auto___30175 = (0);
while(true){
if((i__26951__auto___30175 < len__26950__auto___30174)){
args30124.push((arguments[i__26951__auto___30175]));

var G__30176 = (i__26951__auto___30175 + (1));
i__26951__auto___30175 = G__30176;
continue;
} else {
}
break;
}

var G__30126 = args30124.length;
switch (G__30126) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30124.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30011__auto___30178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto___30178){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto___30178){
return (function (state_30150){
var state_val_30151 = (state_30150[(1)]);
if((state_val_30151 === (7))){
var inst_30146 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
var statearr_30152_30179 = state_30150__$1;
(statearr_30152_30179[(2)] = inst_30146);

(statearr_30152_30179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (1))){
var state_30150__$1 = state_30150;
var statearr_30153_30180 = state_30150__$1;
(statearr_30153_30180[(2)] = null);

(statearr_30153_30180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (4))){
var inst_30129 = (state_30150[(7)]);
var inst_30129__$1 = (state_30150[(2)]);
var inst_30130 = (inst_30129__$1 == null);
var state_30150__$1 = (function (){var statearr_30154 = state_30150;
(statearr_30154[(7)] = inst_30129__$1);

return statearr_30154;
})();
if(cljs.core.truth_(inst_30130)){
var statearr_30155_30181 = state_30150__$1;
(statearr_30155_30181[(1)] = (5));

} else {
var statearr_30156_30182 = state_30150__$1;
(statearr_30156_30182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (13))){
var state_30150__$1 = state_30150;
var statearr_30157_30183 = state_30150__$1;
(statearr_30157_30183[(2)] = null);

(statearr_30157_30183[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (6))){
var inst_30129 = (state_30150[(7)]);
var state_30150__$1 = state_30150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30150__$1,(11),to,inst_30129);
} else {
if((state_val_30151 === (3))){
var inst_30148 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30150__$1,inst_30148);
} else {
if((state_val_30151 === (12))){
var state_30150__$1 = state_30150;
var statearr_30158_30184 = state_30150__$1;
(statearr_30158_30184[(2)] = null);

(statearr_30158_30184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (2))){
var state_30150__$1 = state_30150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30150__$1,(4),from);
} else {
if((state_val_30151 === (11))){
var inst_30139 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
if(cljs.core.truth_(inst_30139)){
var statearr_30159_30185 = state_30150__$1;
(statearr_30159_30185[(1)] = (12));

} else {
var statearr_30160_30186 = state_30150__$1;
(statearr_30160_30186[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (9))){
var state_30150__$1 = state_30150;
var statearr_30161_30187 = state_30150__$1;
(statearr_30161_30187[(2)] = null);

(statearr_30161_30187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (5))){
var state_30150__$1 = state_30150;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30162_30188 = state_30150__$1;
(statearr_30162_30188[(1)] = (8));

} else {
var statearr_30163_30189 = state_30150__$1;
(statearr_30163_30189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (14))){
var inst_30144 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
var statearr_30164_30190 = state_30150__$1;
(statearr_30164_30190[(2)] = inst_30144);

(statearr_30164_30190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (10))){
var inst_30136 = (state_30150[(2)]);
var state_30150__$1 = state_30150;
var statearr_30165_30191 = state_30150__$1;
(statearr_30165_30191[(2)] = inst_30136);

(statearr_30165_30191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30151 === (8))){
var inst_30133 = cljs.core.async.close_BANG_.call(null,to);
var state_30150__$1 = state_30150;
var statearr_30166_30192 = state_30150__$1;
(statearr_30166_30192[(2)] = inst_30133);

(statearr_30166_30192[(1)] = (10));


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
});})(c__30011__auto___30178))
;
return ((function (switch__29899__auto__,c__30011__auto___30178){
return (function() {
var cljs$core$async$state_machine__29900__auto__ = null;
var cljs$core$async$state_machine__29900__auto____0 = (function (){
var statearr_30170 = [null,null,null,null,null,null,null,null];
(statearr_30170[(0)] = cljs$core$async$state_machine__29900__auto__);

(statearr_30170[(1)] = (1));

return statearr_30170;
});
var cljs$core$async$state_machine__29900__auto____1 = (function (state_30150){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_30150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e30171){if((e30171 instanceof Object)){
var ex__29903__auto__ = e30171;
var statearr_30172_30193 = state_30150;
(statearr_30172_30193[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30194 = state_30150;
state_30150 = G__30194;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
cljs$core$async$state_machine__29900__auto__ = function(state_30150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29900__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29900__auto____1.call(this,state_30150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29900__auto____0;
cljs$core$async$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29900__auto____1;
return cljs$core$async$state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto___30178))
})();
var state__30013__auto__ = (function (){var statearr_30173 = f__30012__auto__.call(null);
(statearr_30173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___30178);

return statearr_30173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto___30178))
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
return (function (p__30378){
var vec__30379 = p__30378;
var v = cljs.core.nth.call(null,vec__30379,(0),null);
var p = cljs.core.nth.call(null,vec__30379,(1),null);
var job = vec__30379;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30011__auto___30561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto___30561,res,vec__30379,v,p,job,jobs,results){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto___30561,res,vec__30379,v,p,job,jobs,results){
return (function (state_30384){
var state_val_30385 = (state_30384[(1)]);
if((state_val_30385 === (1))){
var state_30384__$1 = state_30384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30384__$1,(2),res,v);
} else {
if((state_val_30385 === (2))){
var inst_30381 = (state_30384[(2)]);
var inst_30382 = cljs.core.async.close_BANG_.call(null,res);
var state_30384__$1 = (function (){var statearr_30386 = state_30384;
(statearr_30386[(7)] = inst_30381);

return statearr_30386;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30384__$1,inst_30382);
} else {
return null;
}
}
});})(c__30011__auto___30561,res,vec__30379,v,p,job,jobs,results))
;
return ((function (switch__29899__auto__,c__30011__auto___30561,res,vec__30379,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____0 = (function (){
var statearr_30390 = [null,null,null,null,null,null,null,null];
(statearr_30390[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__);

(statearr_30390[(1)] = (1));

return statearr_30390;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____1 = (function (state_30384){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_30384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e30391){if((e30391 instanceof Object)){
var ex__29903__auto__ = e30391;
var statearr_30392_30562 = state_30384;
(statearr_30392_30562[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30563 = state_30384;
state_30384 = G__30563;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__ = function(state_30384){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____1.call(this,state_30384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto___30561,res,vec__30379,v,p,job,jobs,results))
})();
var state__30013__auto__ = (function (){var statearr_30393 = f__30012__auto__.call(null);
(statearr_30393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___30561);

return statearr_30393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto___30561,res,vec__30379,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30394){
var vec__30395 = p__30394;
var v = cljs.core.nth.call(null,vec__30395,(0),null);
var p = cljs.core.nth.call(null,vec__30395,(1),null);
var job = vec__30395;
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
var n__26795__auto___30564 = n;
var __30565 = (0);
while(true){
if((__30565 < n__26795__auto___30564)){
var G__30396_30566 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30396_30566) {
case "compute":
var c__30011__auto___30568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30565,c__30011__auto___30568,G__30396_30566,n__26795__auto___30564,jobs,results,process,async){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (__30565,c__30011__auto___30568,G__30396_30566,n__26795__auto___30564,jobs,results,process,async){
return (function (state_30409){
var state_val_30410 = (state_30409[(1)]);
if((state_val_30410 === (1))){
var state_30409__$1 = state_30409;
var statearr_30411_30569 = state_30409__$1;
(statearr_30411_30569[(2)] = null);

(statearr_30411_30569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30410 === (2))){
var state_30409__$1 = state_30409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30409__$1,(4),jobs);
} else {
if((state_val_30410 === (3))){
var inst_30407 = (state_30409[(2)]);
var state_30409__$1 = state_30409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30409__$1,inst_30407);
} else {
if((state_val_30410 === (4))){
var inst_30399 = (state_30409[(2)]);
var inst_30400 = process.call(null,inst_30399);
var state_30409__$1 = state_30409;
if(cljs.core.truth_(inst_30400)){
var statearr_30412_30570 = state_30409__$1;
(statearr_30412_30570[(1)] = (5));

} else {
var statearr_30413_30571 = state_30409__$1;
(statearr_30413_30571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30410 === (5))){
var state_30409__$1 = state_30409;
var statearr_30414_30572 = state_30409__$1;
(statearr_30414_30572[(2)] = null);

(statearr_30414_30572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30410 === (6))){
var state_30409__$1 = state_30409;
var statearr_30415_30573 = state_30409__$1;
(statearr_30415_30573[(2)] = null);

(statearr_30415_30573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30410 === (7))){
var inst_30405 = (state_30409[(2)]);
var state_30409__$1 = state_30409;
var statearr_30416_30574 = state_30409__$1;
(statearr_30416_30574[(2)] = inst_30405);

(statearr_30416_30574[(1)] = (3));


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
});})(__30565,c__30011__auto___30568,G__30396_30566,n__26795__auto___30564,jobs,results,process,async))
;
return ((function (__30565,switch__29899__auto__,c__30011__auto___30568,G__30396_30566,n__26795__auto___30564,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____0 = (function (){
var statearr_30420 = [null,null,null,null,null,null,null];
(statearr_30420[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__);

(statearr_30420[(1)] = (1));

return statearr_30420;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____1 = (function (state_30409){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_30409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e30421){if((e30421 instanceof Object)){
var ex__29903__auto__ = e30421;
var statearr_30422_30575 = state_30409;
(statearr_30422_30575[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30576 = state_30409;
state_30409 = G__30576;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__ = function(state_30409){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____1.call(this,state_30409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__;
})()
;})(__30565,switch__29899__auto__,c__30011__auto___30568,G__30396_30566,n__26795__auto___30564,jobs,results,process,async))
})();
var state__30013__auto__ = (function (){var statearr_30423 = f__30012__auto__.call(null);
(statearr_30423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___30568);

return statearr_30423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(__30565,c__30011__auto___30568,G__30396_30566,n__26795__auto___30564,jobs,results,process,async))
);


break;
case "async":
var c__30011__auto___30577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30565,c__30011__auto___30577,G__30396_30566,n__26795__auto___30564,jobs,results,process,async){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (__30565,c__30011__auto___30577,G__30396_30566,n__26795__auto___30564,jobs,results,process,async){
return (function (state_30436){
var state_val_30437 = (state_30436[(1)]);
if((state_val_30437 === (1))){
var state_30436__$1 = state_30436;
var statearr_30438_30578 = state_30436__$1;
(statearr_30438_30578[(2)] = null);

(statearr_30438_30578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (2))){
var state_30436__$1 = state_30436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30436__$1,(4),jobs);
} else {
if((state_val_30437 === (3))){
var inst_30434 = (state_30436[(2)]);
var state_30436__$1 = state_30436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30436__$1,inst_30434);
} else {
if((state_val_30437 === (4))){
var inst_30426 = (state_30436[(2)]);
var inst_30427 = async.call(null,inst_30426);
var state_30436__$1 = state_30436;
if(cljs.core.truth_(inst_30427)){
var statearr_30439_30579 = state_30436__$1;
(statearr_30439_30579[(1)] = (5));

} else {
var statearr_30440_30580 = state_30436__$1;
(statearr_30440_30580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (5))){
var state_30436__$1 = state_30436;
var statearr_30441_30581 = state_30436__$1;
(statearr_30441_30581[(2)] = null);

(statearr_30441_30581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (6))){
var state_30436__$1 = state_30436;
var statearr_30442_30582 = state_30436__$1;
(statearr_30442_30582[(2)] = null);

(statearr_30442_30582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30437 === (7))){
var inst_30432 = (state_30436[(2)]);
var state_30436__$1 = state_30436;
var statearr_30443_30583 = state_30436__$1;
(statearr_30443_30583[(2)] = inst_30432);

(statearr_30443_30583[(1)] = (3));


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
});})(__30565,c__30011__auto___30577,G__30396_30566,n__26795__auto___30564,jobs,results,process,async))
;
return ((function (__30565,switch__29899__auto__,c__30011__auto___30577,G__30396_30566,n__26795__auto___30564,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____0 = (function (){
var statearr_30447 = [null,null,null,null,null,null,null];
(statearr_30447[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__);

(statearr_30447[(1)] = (1));

return statearr_30447;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____1 = (function (state_30436){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_30436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e30448){if((e30448 instanceof Object)){
var ex__29903__auto__ = e30448;
var statearr_30449_30584 = state_30436;
(statearr_30449_30584[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30585 = state_30436;
state_30436 = G__30585;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__ = function(state_30436){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____1.call(this,state_30436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__;
})()
;})(__30565,switch__29899__auto__,c__30011__auto___30577,G__30396_30566,n__26795__auto___30564,jobs,results,process,async))
})();
var state__30013__auto__ = (function (){var statearr_30450 = f__30012__auto__.call(null);
(statearr_30450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___30577);

return statearr_30450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(__30565,c__30011__auto___30577,G__30396_30566,n__26795__auto___30564,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30586 = (__30565 + (1));
__30565 = G__30586;
continue;
} else {
}
break;
}

var c__30011__auto___30587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto___30587,jobs,results,process,async){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto___30587,jobs,results,process,async){
return (function (state_30472){
var state_val_30473 = (state_30472[(1)]);
if((state_val_30473 === (1))){
var state_30472__$1 = state_30472;
var statearr_30474_30588 = state_30472__$1;
(statearr_30474_30588[(2)] = null);

(statearr_30474_30588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30473 === (2))){
var state_30472__$1 = state_30472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30472__$1,(4),from);
} else {
if((state_val_30473 === (3))){
var inst_30470 = (state_30472[(2)]);
var state_30472__$1 = state_30472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30472__$1,inst_30470);
} else {
if((state_val_30473 === (4))){
var inst_30453 = (state_30472[(7)]);
var inst_30453__$1 = (state_30472[(2)]);
var inst_30454 = (inst_30453__$1 == null);
var state_30472__$1 = (function (){var statearr_30475 = state_30472;
(statearr_30475[(7)] = inst_30453__$1);

return statearr_30475;
})();
if(cljs.core.truth_(inst_30454)){
var statearr_30476_30589 = state_30472__$1;
(statearr_30476_30589[(1)] = (5));

} else {
var statearr_30477_30590 = state_30472__$1;
(statearr_30477_30590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30473 === (5))){
var inst_30456 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30472__$1 = state_30472;
var statearr_30478_30591 = state_30472__$1;
(statearr_30478_30591[(2)] = inst_30456);

(statearr_30478_30591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30473 === (6))){
var inst_30458 = (state_30472[(8)]);
var inst_30453 = (state_30472[(7)]);
var inst_30458__$1 = cljs.core.async.chan.call(null,(1));
var inst_30459 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30460 = [inst_30453,inst_30458__$1];
var inst_30461 = (new cljs.core.PersistentVector(null,2,(5),inst_30459,inst_30460,null));
var state_30472__$1 = (function (){var statearr_30479 = state_30472;
(statearr_30479[(8)] = inst_30458__$1);

return statearr_30479;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30472__$1,(8),jobs,inst_30461);
} else {
if((state_val_30473 === (7))){
var inst_30468 = (state_30472[(2)]);
var state_30472__$1 = state_30472;
var statearr_30480_30592 = state_30472__$1;
(statearr_30480_30592[(2)] = inst_30468);

(statearr_30480_30592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30473 === (8))){
var inst_30458 = (state_30472[(8)]);
var inst_30463 = (state_30472[(2)]);
var state_30472__$1 = (function (){var statearr_30481 = state_30472;
(statearr_30481[(9)] = inst_30463);

return statearr_30481;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30472__$1,(9),results,inst_30458);
} else {
if((state_val_30473 === (9))){
var inst_30465 = (state_30472[(2)]);
var state_30472__$1 = (function (){var statearr_30482 = state_30472;
(statearr_30482[(10)] = inst_30465);

return statearr_30482;
})();
var statearr_30483_30593 = state_30472__$1;
(statearr_30483_30593[(2)] = null);

(statearr_30483_30593[(1)] = (2));


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
});})(c__30011__auto___30587,jobs,results,process,async))
;
return ((function (switch__29899__auto__,c__30011__auto___30587,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____0 = (function (){
var statearr_30487 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30487[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__);

(statearr_30487[(1)] = (1));

return statearr_30487;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____1 = (function (state_30472){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_30472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e30488){if((e30488 instanceof Object)){
var ex__29903__auto__ = e30488;
var statearr_30489_30594 = state_30472;
(statearr_30489_30594[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30595 = state_30472;
state_30472 = G__30595;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__ = function(state_30472){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____1.call(this,state_30472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto___30587,jobs,results,process,async))
})();
var state__30013__auto__ = (function (){var statearr_30490 = f__30012__auto__.call(null);
(statearr_30490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___30587);

return statearr_30490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto___30587,jobs,results,process,async))
);


var c__30011__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto__,jobs,results,process,async){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto__,jobs,results,process,async){
return (function (state_30528){
var state_val_30529 = (state_30528[(1)]);
if((state_val_30529 === (7))){
var inst_30524 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
var statearr_30530_30596 = state_30528__$1;
(statearr_30530_30596[(2)] = inst_30524);

(statearr_30530_30596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (20))){
var state_30528__$1 = state_30528;
var statearr_30531_30597 = state_30528__$1;
(statearr_30531_30597[(2)] = null);

(statearr_30531_30597[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (1))){
var state_30528__$1 = state_30528;
var statearr_30532_30598 = state_30528__$1;
(statearr_30532_30598[(2)] = null);

(statearr_30532_30598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (4))){
var inst_30493 = (state_30528[(7)]);
var inst_30493__$1 = (state_30528[(2)]);
var inst_30494 = (inst_30493__$1 == null);
var state_30528__$1 = (function (){var statearr_30533 = state_30528;
(statearr_30533[(7)] = inst_30493__$1);

return statearr_30533;
})();
if(cljs.core.truth_(inst_30494)){
var statearr_30534_30599 = state_30528__$1;
(statearr_30534_30599[(1)] = (5));

} else {
var statearr_30535_30600 = state_30528__$1;
(statearr_30535_30600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (15))){
var inst_30506 = (state_30528[(8)]);
var state_30528__$1 = state_30528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30528__$1,(18),to,inst_30506);
} else {
if((state_val_30529 === (21))){
var inst_30519 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
var statearr_30536_30601 = state_30528__$1;
(statearr_30536_30601[(2)] = inst_30519);

(statearr_30536_30601[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (13))){
var inst_30521 = (state_30528[(2)]);
var state_30528__$1 = (function (){var statearr_30537 = state_30528;
(statearr_30537[(9)] = inst_30521);

return statearr_30537;
})();
var statearr_30538_30602 = state_30528__$1;
(statearr_30538_30602[(2)] = null);

(statearr_30538_30602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (6))){
var inst_30493 = (state_30528[(7)]);
var state_30528__$1 = state_30528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30528__$1,(11),inst_30493);
} else {
if((state_val_30529 === (17))){
var inst_30514 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
if(cljs.core.truth_(inst_30514)){
var statearr_30539_30603 = state_30528__$1;
(statearr_30539_30603[(1)] = (19));

} else {
var statearr_30540_30604 = state_30528__$1;
(statearr_30540_30604[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (3))){
var inst_30526 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30528__$1,inst_30526);
} else {
if((state_val_30529 === (12))){
var inst_30503 = (state_30528[(10)]);
var state_30528__$1 = state_30528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30528__$1,(14),inst_30503);
} else {
if((state_val_30529 === (2))){
var state_30528__$1 = state_30528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30528__$1,(4),results);
} else {
if((state_val_30529 === (19))){
var state_30528__$1 = state_30528;
var statearr_30541_30605 = state_30528__$1;
(statearr_30541_30605[(2)] = null);

(statearr_30541_30605[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (11))){
var inst_30503 = (state_30528[(2)]);
var state_30528__$1 = (function (){var statearr_30542 = state_30528;
(statearr_30542[(10)] = inst_30503);

return statearr_30542;
})();
var statearr_30543_30606 = state_30528__$1;
(statearr_30543_30606[(2)] = null);

(statearr_30543_30606[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (9))){
var state_30528__$1 = state_30528;
var statearr_30544_30607 = state_30528__$1;
(statearr_30544_30607[(2)] = null);

(statearr_30544_30607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (5))){
var state_30528__$1 = state_30528;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30545_30608 = state_30528__$1;
(statearr_30545_30608[(1)] = (8));

} else {
var statearr_30546_30609 = state_30528__$1;
(statearr_30546_30609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (14))){
var inst_30508 = (state_30528[(11)]);
var inst_30506 = (state_30528[(8)]);
var inst_30506__$1 = (state_30528[(2)]);
var inst_30507 = (inst_30506__$1 == null);
var inst_30508__$1 = cljs.core.not.call(null,inst_30507);
var state_30528__$1 = (function (){var statearr_30547 = state_30528;
(statearr_30547[(11)] = inst_30508__$1);

(statearr_30547[(8)] = inst_30506__$1);

return statearr_30547;
})();
if(inst_30508__$1){
var statearr_30548_30610 = state_30528__$1;
(statearr_30548_30610[(1)] = (15));

} else {
var statearr_30549_30611 = state_30528__$1;
(statearr_30549_30611[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (16))){
var inst_30508 = (state_30528[(11)]);
var state_30528__$1 = state_30528;
var statearr_30550_30612 = state_30528__$1;
(statearr_30550_30612[(2)] = inst_30508);

(statearr_30550_30612[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (10))){
var inst_30500 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
var statearr_30551_30613 = state_30528__$1;
(statearr_30551_30613[(2)] = inst_30500);

(statearr_30551_30613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (18))){
var inst_30511 = (state_30528[(2)]);
var state_30528__$1 = state_30528;
var statearr_30552_30614 = state_30528__$1;
(statearr_30552_30614[(2)] = inst_30511);

(statearr_30552_30614[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30529 === (8))){
var inst_30497 = cljs.core.async.close_BANG_.call(null,to);
var state_30528__$1 = state_30528;
var statearr_30553_30615 = state_30528__$1;
(statearr_30553_30615[(2)] = inst_30497);

(statearr_30553_30615[(1)] = (10));


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
});})(c__30011__auto__,jobs,results,process,async))
;
return ((function (switch__29899__auto__,c__30011__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____0 = (function (){
var statearr_30557 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30557[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__);

(statearr_30557[(1)] = (1));

return statearr_30557;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____1 = (function (state_30528){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_30528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e30558){if((e30558 instanceof Object)){
var ex__29903__auto__ = e30558;
var statearr_30559_30616 = state_30528;
(statearr_30559_30616[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30617 = state_30528;
state_30528 = G__30617;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__ = function(state_30528){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____1.call(this,state_30528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29900__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto__,jobs,results,process,async))
})();
var state__30013__auto__ = (function (){var statearr_30560 = f__30012__auto__.call(null);
(statearr_30560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto__);

return statearr_30560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto__,jobs,results,process,async))
);

return c__30011__auto__;
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
var args30618 = [];
var len__26950__auto___30621 = arguments.length;
var i__26951__auto___30622 = (0);
while(true){
if((i__26951__auto___30622 < len__26950__auto___30621)){
args30618.push((arguments[i__26951__auto___30622]));

var G__30623 = (i__26951__auto___30622 + (1));
i__26951__auto___30622 = G__30623;
continue;
} else {
}
break;
}

var G__30620 = args30618.length;
switch (G__30620) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30618.length)].join('')));

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
var args30625 = [];
var len__26950__auto___30628 = arguments.length;
var i__26951__auto___30629 = (0);
while(true){
if((i__26951__auto___30629 < len__26950__auto___30628)){
args30625.push((arguments[i__26951__auto___30629]));

var G__30630 = (i__26951__auto___30629 + (1));
i__26951__auto___30629 = G__30630;
continue;
} else {
}
break;
}

var G__30627 = args30625.length;
switch (G__30627) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30625.length)].join('')));

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
var args30632 = [];
var len__26950__auto___30685 = arguments.length;
var i__26951__auto___30686 = (0);
while(true){
if((i__26951__auto___30686 < len__26950__auto___30685)){
args30632.push((arguments[i__26951__auto___30686]));

var G__30687 = (i__26951__auto___30686 + (1));
i__26951__auto___30686 = G__30687;
continue;
} else {
}
break;
}

var G__30634 = args30632.length;
switch (G__30634) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30632.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30011__auto___30689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto___30689,tc,fc){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto___30689,tc,fc){
return (function (state_30660){
var state_val_30661 = (state_30660[(1)]);
if((state_val_30661 === (7))){
var inst_30656 = (state_30660[(2)]);
var state_30660__$1 = state_30660;
var statearr_30662_30690 = state_30660__$1;
(statearr_30662_30690[(2)] = inst_30656);

(statearr_30662_30690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (1))){
var state_30660__$1 = state_30660;
var statearr_30663_30691 = state_30660__$1;
(statearr_30663_30691[(2)] = null);

(statearr_30663_30691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (4))){
var inst_30637 = (state_30660[(7)]);
var inst_30637__$1 = (state_30660[(2)]);
var inst_30638 = (inst_30637__$1 == null);
var state_30660__$1 = (function (){var statearr_30664 = state_30660;
(statearr_30664[(7)] = inst_30637__$1);

return statearr_30664;
})();
if(cljs.core.truth_(inst_30638)){
var statearr_30665_30692 = state_30660__$1;
(statearr_30665_30692[(1)] = (5));

} else {
var statearr_30666_30693 = state_30660__$1;
(statearr_30666_30693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (13))){
var state_30660__$1 = state_30660;
var statearr_30667_30694 = state_30660__$1;
(statearr_30667_30694[(2)] = null);

(statearr_30667_30694[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (6))){
var inst_30637 = (state_30660[(7)]);
var inst_30643 = p.call(null,inst_30637);
var state_30660__$1 = state_30660;
if(cljs.core.truth_(inst_30643)){
var statearr_30668_30695 = state_30660__$1;
(statearr_30668_30695[(1)] = (9));

} else {
var statearr_30669_30696 = state_30660__$1;
(statearr_30669_30696[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (3))){
var inst_30658 = (state_30660[(2)]);
var state_30660__$1 = state_30660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30660__$1,inst_30658);
} else {
if((state_val_30661 === (12))){
var state_30660__$1 = state_30660;
var statearr_30670_30697 = state_30660__$1;
(statearr_30670_30697[(2)] = null);

(statearr_30670_30697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (2))){
var state_30660__$1 = state_30660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30660__$1,(4),ch);
} else {
if((state_val_30661 === (11))){
var inst_30637 = (state_30660[(7)]);
var inst_30647 = (state_30660[(2)]);
var state_30660__$1 = state_30660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30660__$1,(8),inst_30647,inst_30637);
} else {
if((state_val_30661 === (9))){
var state_30660__$1 = state_30660;
var statearr_30671_30698 = state_30660__$1;
(statearr_30671_30698[(2)] = tc);

(statearr_30671_30698[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (5))){
var inst_30640 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30641 = cljs.core.async.close_BANG_.call(null,fc);
var state_30660__$1 = (function (){var statearr_30672 = state_30660;
(statearr_30672[(8)] = inst_30640);

return statearr_30672;
})();
var statearr_30673_30699 = state_30660__$1;
(statearr_30673_30699[(2)] = inst_30641);

(statearr_30673_30699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (14))){
var inst_30654 = (state_30660[(2)]);
var state_30660__$1 = state_30660;
var statearr_30674_30700 = state_30660__$1;
(statearr_30674_30700[(2)] = inst_30654);

(statearr_30674_30700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (10))){
var state_30660__$1 = state_30660;
var statearr_30675_30701 = state_30660__$1;
(statearr_30675_30701[(2)] = fc);

(statearr_30675_30701[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30661 === (8))){
var inst_30649 = (state_30660[(2)]);
var state_30660__$1 = state_30660;
if(cljs.core.truth_(inst_30649)){
var statearr_30676_30702 = state_30660__$1;
(statearr_30676_30702[(1)] = (12));

} else {
var statearr_30677_30703 = state_30660__$1;
(statearr_30677_30703[(1)] = (13));

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
});})(c__30011__auto___30689,tc,fc))
;
return ((function (switch__29899__auto__,c__30011__auto___30689,tc,fc){
return (function() {
var cljs$core$async$state_machine__29900__auto__ = null;
var cljs$core$async$state_machine__29900__auto____0 = (function (){
var statearr_30681 = [null,null,null,null,null,null,null,null,null];
(statearr_30681[(0)] = cljs$core$async$state_machine__29900__auto__);

(statearr_30681[(1)] = (1));

return statearr_30681;
});
var cljs$core$async$state_machine__29900__auto____1 = (function (state_30660){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_30660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e30682){if((e30682 instanceof Object)){
var ex__29903__auto__ = e30682;
var statearr_30683_30704 = state_30660;
(statearr_30683_30704[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30705 = state_30660;
state_30660 = G__30705;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
cljs$core$async$state_machine__29900__auto__ = function(state_30660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29900__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29900__auto____1.call(this,state_30660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29900__auto____0;
cljs$core$async$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29900__auto____1;
return cljs$core$async$state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto___30689,tc,fc))
})();
var state__30013__auto__ = (function (){var statearr_30684 = f__30012__auto__.call(null);
(statearr_30684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___30689);

return statearr_30684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto___30689,tc,fc))
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
var c__30011__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto__){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto__){
return (function (state_30769){
var state_val_30770 = (state_30769[(1)]);
if((state_val_30770 === (7))){
var inst_30765 = (state_30769[(2)]);
var state_30769__$1 = state_30769;
var statearr_30771_30792 = state_30769__$1;
(statearr_30771_30792[(2)] = inst_30765);

(statearr_30771_30792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30770 === (1))){
var inst_30749 = init;
var state_30769__$1 = (function (){var statearr_30772 = state_30769;
(statearr_30772[(7)] = inst_30749);

return statearr_30772;
})();
var statearr_30773_30793 = state_30769__$1;
(statearr_30773_30793[(2)] = null);

(statearr_30773_30793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30770 === (4))){
var inst_30752 = (state_30769[(8)]);
var inst_30752__$1 = (state_30769[(2)]);
var inst_30753 = (inst_30752__$1 == null);
var state_30769__$1 = (function (){var statearr_30774 = state_30769;
(statearr_30774[(8)] = inst_30752__$1);

return statearr_30774;
})();
if(cljs.core.truth_(inst_30753)){
var statearr_30775_30794 = state_30769__$1;
(statearr_30775_30794[(1)] = (5));

} else {
var statearr_30776_30795 = state_30769__$1;
(statearr_30776_30795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30770 === (6))){
var inst_30752 = (state_30769[(8)]);
var inst_30756 = (state_30769[(9)]);
var inst_30749 = (state_30769[(7)]);
var inst_30756__$1 = f.call(null,inst_30749,inst_30752);
var inst_30757 = cljs.core.reduced_QMARK_.call(null,inst_30756__$1);
var state_30769__$1 = (function (){var statearr_30777 = state_30769;
(statearr_30777[(9)] = inst_30756__$1);

return statearr_30777;
})();
if(inst_30757){
var statearr_30778_30796 = state_30769__$1;
(statearr_30778_30796[(1)] = (8));

} else {
var statearr_30779_30797 = state_30769__$1;
(statearr_30779_30797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30770 === (3))){
var inst_30767 = (state_30769[(2)]);
var state_30769__$1 = state_30769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30769__$1,inst_30767);
} else {
if((state_val_30770 === (2))){
var state_30769__$1 = state_30769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30769__$1,(4),ch);
} else {
if((state_val_30770 === (9))){
var inst_30756 = (state_30769[(9)]);
var inst_30749 = inst_30756;
var state_30769__$1 = (function (){var statearr_30780 = state_30769;
(statearr_30780[(7)] = inst_30749);

return statearr_30780;
})();
var statearr_30781_30798 = state_30769__$1;
(statearr_30781_30798[(2)] = null);

(statearr_30781_30798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30770 === (5))){
var inst_30749 = (state_30769[(7)]);
var state_30769__$1 = state_30769;
var statearr_30782_30799 = state_30769__$1;
(statearr_30782_30799[(2)] = inst_30749);

(statearr_30782_30799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30770 === (10))){
var inst_30763 = (state_30769[(2)]);
var state_30769__$1 = state_30769;
var statearr_30783_30800 = state_30769__$1;
(statearr_30783_30800[(2)] = inst_30763);

(statearr_30783_30800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30770 === (8))){
var inst_30756 = (state_30769[(9)]);
var inst_30759 = cljs.core.deref.call(null,inst_30756);
var state_30769__$1 = state_30769;
var statearr_30784_30801 = state_30769__$1;
(statearr_30784_30801[(2)] = inst_30759);

(statearr_30784_30801[(1)] = (10));


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
});})(c__30011__auto__))
;
return ((function (switch__29899__auto__,c__30011__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29900__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29900__auto____0 = (function (){
var statearr_30788 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30788[(0)] = cljs$core$async$reduce_$_state_machine__29900__auto__);

(statearr_30788[(1)] = (1));

return statearr_30788;
});
var cljs$core$async$reduce_$_state_machine__29900__auto____1 = (function (state_30769){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_30769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e30789){if((e30789 instanceof Object)){
var ex__29903__auto__ = e30789;
var statearr_30790_30802 = state_30769;
(statearr_30790_30802[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30803 = state_30769;
state_30769 = G__30803;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29900__auto__ = function(state_30769){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29900__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29900__auto____1.call(this,state_30769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29900__auto____0;
cljs$core$async$reduce_$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29900__auto____1;
return cljs$core$async$reduce_$_state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto__))
})();
var state__30013__auto__ = (function (){var statearr_30791 = f__30012__auto__.call(null);
(statearr_30791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto__);

return statearr_30791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto__))
);

return c__30011__auto__;
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
var args30804 = [];
var len__26950__auto___30856 = arguments.length;
var i__26951__auto___30857 = (0);
while(true){
if((i__26951__auto___30857 < len__26950__auto___30856)){
args30804.push((arguments[i__26951__auto___30857]));

var G__30858 = (i__26951__auto___30857 + (1));
i__26951__auto___30857 = G__30858;
continue;
} else {
}
break;
}

var G__30806 = args30804.length;
switch (G__30806) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30804.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30011__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto__){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto__){
return (function (state_30831){
var state_val_30832 = (state_30831[(1)]);
if((state_val_30832 === (7))){
var inst_30813 = (state_30831[(2)]);
var state_30831__$1 = state_30831;
var statearr_30833_30860 = state_30831__$1;
(statearr_30833_30860[(2)] = inst_30813);

(statearr_30833_30860[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30832 === (1))){
var inst_30807 = cljs.core.seq.call(null,coll);
var inst_30808 = inst_30807;
var state_30831__$1 = (function (){var statearr_30834 = state_30831;
(statearr_30834[(7)] = inst_30808);

return statearr_30834;
})();
var statearr_30835_30861 = state_30831__$1;
(statearr_30835_30861[(2)] = null);

(statearr_30835_30861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30832 === (4))){
var inst_30808 = (state_30831[(7)]);
var inst_30811 = cljs.core.first.call(null,inst_30808);
var state_30831__$1 = state_30831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30831__$1,(7),ch,inst_30811);
} else {
if((state_val_30832 === (13))){
var inst_30825 = (state_30831[(2)]);
var state_30831__$1 = state_30831;
var statearr_30836_30862 = state_30831__$1;
(statearr_30836_30862[(2)] = inst_30825);

(statearr_30836_30862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30832 === (6))){
var inst_30816 = (state_30831[(2)]);
var state_30831__$1 = state_30831;
if(cljs.core.truth_(inst_30816)){
var statearr_30837_30863 = state_30831__$1;
(statearr_30837_30863[(1)] = (8));

} else {
var statearr_30838_30864 = state_30831__$1;
(statearr_30838_30864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30832 === (3))){
var inst_30829 = (state_30831[(2)]);
var state_30831__$1 = state_30831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30831__$1,inst_30829);
} else {
if((state_val_30832 === (12))){
var state_30831__$1 = state_30831;
var statearr_30839_30865 = state_30831__$1;
(statearr_30839_30865[(2)] = null);

(statearr_30839_30865[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30832 === (2))){
var inst_30808 = (state_30831[(7)]);
var state_30831__$1 = state_30831;
if(cljs.core.truth_(inst_30808)){
var statearr_30840_30866 = state_30831__$1;
(statearr_30840_30866[(1)] = (4));

} else {
var statearr_30841_30867 = state_30831__$1;
(statearr_30841_30867[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30832 === (11))){
var inst_30822 = cljs.core.async.close_BANG_.call(null,ch);
var state_30831__$1 = state_30831;
var statearr_30842_30868 = state_30831__$1;
(statearr_30842_30868[(2)] = inst_30822);

(statearr_30842_30868[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30832 === (9))){
var state_30831__$1 = state_30831;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30843_30869 = state_30831__$1;
(statearr_30843_30869[(1)] = (11));

} else {
var statearr_30844_30870 = state_30831__$1;
(statearr_30844_30870[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30832 === (5))){
var inst_30808 = (state_30831[(7)]);
var state_30831__$1 = state_30831;
var statearr_30845_30871 = state_30831__$1;
(statearr_30845_30871[(2)] = inst_30808);

(statearr_30845_30871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30832 === (10))){
var inst_30827 = (state_30831[(2)]);
var state_30831__$1 = state_30831;
var statearr_30846_30872 = state_30831__$1;
(statearr_30846_30872[(2)] = inst_30827);

(statearr_30846_30872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30832 === (8))){
var inst_30808 = (state_30831[(7)]);
var inst_30818 = cljs.core.next.call(null,inst_30808);
var inst_30808__$1 = inst_30818;
var state_30831__$1 = (function (){var statearr_30847 = state_30831;
(statearr_30847[(7)] = inst_30808__$1);

return statearr_30847;
})();
var statearr_30848_30873 = state_30831__$1;
(statearr_30848_30873[(2)] = null);

(statearr_30848_30873[(1)] = (2));


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
});})(c__30011__auto__))
;
return ((function (switch__29899__auto__,c__30011__auto__){
return (function() {
var cljs$core$async$state_machine__29900__auto__ = null;
var cljs$core$async$state_machine__29900__auto____0 = (function (){
var statearr_30852 = [null,null,null,null,null,null,null,null];
(statearr_30852[(0)] = cljs$core$async$state_machine__29900__auto__);

(statearr_30852[(1)] = (1));

return statearr_30852;
});
var cljs$core$async$state_machine__29900__auto____1 = (function (state_30831){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_30831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e30853){if((e30853 instanceof Object)){
var ex__29903__auto__ = e30853;
var statearr_30854_30874 = state_30831;
(statearr_30854_30874[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30875 = state_30831;
state_30831 = G__30875;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
cljs$core$async$state_machine__29900__auto__ = function(state_30831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29900__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29900__auto____1.call(this,state_30831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29900__auto____0;
cljs$core$async$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29900__auto____1;
return cljs$core$async$state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto__))
})();
var state__30013__auto__ = (function (){var statearr_30855 = f__30012__auto__.call(null);
(statearr_30855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto__);

return statearr_30855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto__))
);

return c__30011__auto__;
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
var x__26543__auto__ = (((_ == null))?null:_);
var m__26544__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,_);
} else {
var m__26544__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,_);
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
var x__26543__auto__ = (((m == null))?null:m);
var m__26544__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26544__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__26543__auto__ = (((m == null))?null:m);
var m__26544__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,m,ch);
} else {
var m__26544__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,m,ch);
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
var x__26543__auto__ = (((m == null))?null:m);
var m__26544__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,m);
} else {
var m__26544__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async31097 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31097 = (function (mult,ch,cs,meta31098){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31098 = meta31098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31099,meta31098__$1){
var self__ = this;
var _31099__$1 = this;
return (new cljs.core.async.t_cljs$core$async31097(self__.mult,self__.ch,self__.cs,meta31098__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31099){
var self__ = this;
var _31099__$1 = this;
return self__.meta31098;
});})(cs))
;

cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31097.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31098","meta31098",-913671294,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31097.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31097";

cljs.core.async.t_cljs$core$async31097.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26486__auto__,writer__26487__auto__,opt__26488__auto__){
return cljs.core._write.call(null,writer__26487__auto__,"cljs.core.async/t_cljs$core$async31097");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31097 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31097(mult__$1,ch__$1,cs__$1,meta31098){
return (new cljs.core.async.t_cljs$core$async31097(mult__$1,ch__$1,cs__$1,meta31098));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31097(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30011__auto___31318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto___31318,cs,m,dchan,dctr,done){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto___31318,cs,m,dchan,dctr,done){
return (function (state_31230){
var state_val_31231 = (state_31230[(1)]);
if((state_val_31231 === (7))){
var inst_31226 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31232_31319 = state_31230__$1;
(statearr_31232_31319[(2)] = inst_31226);

(statearr_31232_31319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (20))){
var inst_31131 = (state_31230[(7)]);
var inst_31141 = cljs.core.first.call(null,inst_31131);
var inst_31142 = cljs.core.nth.call(null,inst_31141,(0),null);
var inst_31143 = cljs.core.nth.call(null,inst_31141,(1),null);
var state_31230__$1 = (function (){var statearr_31233 = state_31230;
(statearr_31233[(8)] = inst_31142);

return statearr_31233;
})();
if(cljs.core.truth_(inst_31143)){
var statearr_31234_31320 = state_31230__$1;
(statearr_31234_31320[(1)] = (22));

} else {
var statearr_31235_31321 = state_31230__$1;
(statearr_31235_31321[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (27))){
var inst_31171 = (state_31230[(9)]);
var inst_31102 = (state_31230[(10)]);
var inst_31173 = (state_31230[(11)]);
var inst_31178 = (state_31230[(12)]);
var inst_31178__$1 = cljs.core._nth.call(null,inst_31171,inst_31173);
var inst_31179 = cljs.core.async.put_BANG_.call(null,inst_31178__$1,inst_31102,done);
var state_31230__$1 = (function (){var statearr_31236 = state_31230;
(statearr_31236[(12)] = inst_31178__$1);

return statearr_31236;
})();
if(cljs.core.truth_(inst_31179)){
var statearr_31237_31322 = state_31230__$1;
(statearr_31237_31322[(1)] = (30));

} else {
var statearr_31238_31323 = state_31230__$1;
(statearr_31238_31323[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (1))){
var state_31230__$1 = state_31230;
var statearr_31239_31324 = state_31230__$1;
(statearr_31239_31324[(2)] = null);

(statearr_31239_31324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (24))){
var inst_31131 = (state_31230[(7)]);
var inst_31148 = (state_31230[(2)]);
var inst_31149 = cljs.core.next.call(null,inst_31131);
var inst_31111 = inst_31149;
var inst_31112 = null;
var inst_31113 = (0);
var inst_31114 = (0);
var state_31230__$1 = (function (){var statearr_31240 = state_31230;
(statearr_31240[(13)] = inst_31111);

(statearr_31240[(14)] = inst_31112);

(statearr_31240[(15)] = inst_31114);

(statearr_31240[(16)] = inst_31148);

(statearr_31240[(17)] = inst_31113);

return statearr_31240;
})();
var statearr_31241_31325 = state_31230__$1;
(statearr_31241_31325[(2)] = null);

(statearr_31241_31325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (39))){
var state_31230__$1 = state_31230;
var statearr_31245_31326 = state_31230__$1;
(statearr_31245_31326[(2)] = null);

(statearr_31245_31326[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (4))){
var inst_31102 = (state_31230[(10)]);
var inst_31102__$1 = (state_31230[(2)]);
var inst_31103 = (inst_31102__$1 == null);
var state_31230__$1 = (function (){var statearr_31246 = state_31230;
(statearr_31246[(10)] = inst_31102__$1);

return statearr_31246;
})();
if(cljs.core.truth_(inst_31103)){
var statearr_31247_31327 = state_31230__$1;
(statearr_31247_31327[(1)] = (5));

} else {
var statearr_31248_31328 = state_31230__$1;
(statearr_31248_31328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (15))){
var inst_31111 = (state_31230[(13)]);
var inst_31112 = (state_31230[(14)]);
var inst_31114 = (state_31230[(15)]);
var inst_31113 = (state_31230[(17)]);
var inst_31127 = (state_31230[(2)]);
var inst_31128 = (inst_31114 + (1));
var tmp31242 = inst_31111;
var tmp31243 = inst_31112;
var tmp31244 = inst_31113;
var inst_31111__$1 = tmp31242;
var inst_31112__$1 = tmp31243;
var inst_31113__$1 = tmp31244;
var inst_31114__$1 = inst_31128;
var state_31230__$1 = (function (){var statearr_31249 = state_31230;
(statearr_31249[(18)] = inst_31127);

(statearr_31249[(13)] = inst_31111__$1);

(statearr_31249[(14)] = inst_31112__$1);

(statearr_31249[(15)] = inst_31114__$1);

(statearr_31249[(17)] = inst_31113__$1);

return statearr_31249;
})();
var statearr_31250_31329 = state_31230__$1;
(statearr_31250_31329[(2)] = null);

(statearr_31250_31329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (21))){
var inst_31152 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31254_31330 = state_31230__$1;
(statearr_31254_31330[(2)] = inst_31152);

(statearr_31254_31330[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (31))){
var inst_31178 = (state_31230[(12)]);
var inst_31182 = done.call(null,null);
var inst_31183 = cljs.core.async.untap_STAR_.call(null,m,inst_31178);
var state_31230__$1 = (function (){var statearr_31255 = state_31230;
(statearr_31255[(19)] = inst_31182);

return statearr_31255;
})();
var statearr_31256_31331 = state_31230__$1;
(statearr_31256_31331[(2)] = inst_31183);

(statearr_31256_31331[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (32))){
var inst_31171 = (state_31230[(9)]);
var inst_31172 = (state_31230[(20)]);
var inst_31173 = (state_31230[(11)]);
var inst_31170 = (state_31230[(21)]);
var inst_31185 = (state_31230[(2)]);
var inst_31186 = (inst_31173 + (1));
var tmp31251 = inst_31171;
var tmp31252 = inst_31172;
var tmp31253 = inst_31170;
var inst_31170__$1 = tmp31253;
var inst_31171__$1 = tmp31251;
var inst_31172__$1 = tmp31252;
var inst_31173__$1 = inst_31186;
var state_31230__$1 = (function (){var statearr_31257 = state_31230;
(statearr_31257[(9)] = inst_31171__$1);

(statearr_31257[(20)] = inst_31172__$1);

(statearr_31257[(11)] = inst_31173__$1);

(statearr_31257[(22)] = inst_31185);

(statearr_31257[(21)] = inst_31170__$1);

return statearr_31257;
})();
var statearr_31258_31332 = state_31230__$1;
(statearr_31258_31332[(2)] = null);

(statearr_31258_31332[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (40))){
var inst_31198 = (state_31230[(23)]);
var inst_31202 = done.call(null,null);
var inst_31203 = cljs.core.async.untap_STAR_.call(null,m,inst_31198);
var state_31230__$1 = (function (){var statearr_31259 = state_31230;
(statearr_31259[(24)] = inst_31202);

return statearr_31259;
})();
var statearr_31260_31333 = state_31230__$1;
(statearr_31260_31333[(2)] = inst_31203);

(statearr_31260_31333[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (33))){
var inst_31189 = (state_31230[(25)]);
var inst_31191 = cljs.core.chunked_seq_QMARK_.call(null,inst_31189);
var state_31230__$1 = state_31230;
if(inst_31191){
var statearr_31261_31334 = state_31230__$1;
(statearr_31261_31334[(1)] = (36));

} else {
var statearr_31262_31335 = state_31230__$1;
(statearr_31262_31335[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (13))){
var inst_31121 = (state_31230[(26)]);
var inst_31124 = cljs.core.async.close_BANG_.call(null,inst_31121);
var state_31230__$1 = state_31230;
var statearr_31263_31336 = state_31230__$1;
(statearr_31263_31336[(2)] = inst_31124);

(statearr_31263_31336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (22))){
var inst_31142 = (state_31230[(8)]);
var inst_31145 = cljs.core.async.close_BANG_.call(null,inst_31142);
var state_31230__$1 = state_31230;
var statearr_31264_31337 = state_31230__$1;
(statearr_31264_31337[(2)] = inst_31145);

(statearr_31264_31337[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (36))){
var inst_31189 = (state_31230[(25)]);
var inst_31193 = cljs.core.chunk_first.call(null,inst_31189);
var inst_31194 = cljs.core.chunk_rest.call(null,inst_31189);
var inst_31195 = cljs.core.count.call(null,inst_31193);
var inst_31170 = inst_31194;
var inst_31171 = inst_31193;
var inst_31172 = inst_31195;
var inst_31173 = (0);
var state_31230__$1 = (function (){var statearr_31265 = state_31230;
(statearr_31265[(9)] = inst_31171);

(statearr_31265[(20)] = inst_31172);

(statearr_31265[(11)] = inst_31173);

(statearr_31265[(21)] = inst_31170);

return statearr_31265;
})();
var statearr_31266_31338 = state_31230__$1;
(statearr_31266_31338[(2)] = null);

(statearr_31266_31338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (41))){
var inst_31189 = (state_31230[(25)]);
var inst_31205 = (state_31230[(2)]);
var inst_31206 = cljs.core.next.call(null,inst_31189);
var inst_31170 = inst_31206;
var inst_31171 = null;
var inst_31172 = (0);
var inst_31173 = (0);
var state_31230__$1 = (function (){var statearr_31267 = state_31230;
(statearr_31267[(9)] = inst_31171);

(statearr_31267[(20)] = inst_31172);

(statearr_31267[(11)] = inst_31173);

(statearr_31267[(21)] = inst_31170);

(statearr_31267[(27)] = inst_31205);

return statearr_31267;
})();
var statearr_31268_31339 = state_31230__$1;
(statearr_31268_31339[(2)] = null);

(statearr_31268_31339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (43))){
var state_31230__$1 = state_31230;
var statearr_31269_31340 = state_31230__$1;
(statearr_31269_31340[(2)] = null);

(statearr_31269_31340[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (29))){
var inst_31214 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31270_31341 = state_31230__$1;
(statearr_31270_31341[(2)] = inst_31214);

(statearr_31270_31341[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (44))){
var inst_31223 = (state_31230[(2)]);
var state_31230__$1 = (function (){var statearr_31271 = state_31230;
(statearr_31271[(28)] = inst_31223);

return statearr_31271;
})();
var statearr_31272_31342 = state_31230__$1;
(statearr_31272_31342[(2)] = null);

(statearr_31272_31342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (6))){
var inst_31162 = (state_31230[(29)]);
var inst_31161 = cljs.core.deref.call(null,cs);
var inst_31162__$1 = cljs.core.keys.call(null,inst_31161);
var inst_31163 = cljs.core.count.call(null,inst_31162__$1);
var inst_31164 = cljs.core.reset_BANG_.call(null,dctr,inst_31163);
var inst_31169 = cljs.core.seq.call(null,inst_31162__$1);
var inst_31170 = inst_31169;
var inst_31171 = null;
var inst_31172 = (0);
var inst_31173 = (0);
var state_31230__$1 = (function (){var statearr_31273 = state_31230;
(statearr_31273[(29)] = inst_31162__$1);

(statearr_31273[(9)] = inst_31171);

(statearr_31273[(20)] = inst_31172);

(statearr_31273[(11)] = inst_31173);

(statearr_31273[(21)] = inst_31170);

(statearr_31273[(30)] = inst_31164);

return statearr_31273;
})();
var statearr_31274_31343 = state_31230__$1;
(statearr_31274_31343[(2)] = null);

(statearr_31274_31343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (28))){
var inst_31189 = (state_31230[(25)]);
var inst_31170 = (state_31230[(21)]);
var inst_31189__$1 = cljs.core.seq.call(null,inst_31170);
var state_31230__$1 = (function (){var statearr_31275 = state_31230;
(statearr_31275[(25)] = inst_31189__$1);

return statearr_31275;
})();
if(inst_31189__$1){
var statearr_31276_31344 = state_31230__$1;
(statearr_31276_31344[(1)] = (33));

} else {
var statearr_31277_31345 = state_31230__$1;
(statearr_31277_31345[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (25))){
var inst_31172 = (state_31230[(20)]);
var inst_31173 = (state_31230[(11)]);
var inst_31175 = (inst_31173 < inst_31172);
var inst_31176 = inst_31175;
var state_31230__$1 = state_31230;
if(cljs.core.truth_(inst_31176)){
var statearr_31278_31346 = state_31230__$1;
(statearr_31278_31346[(1)] = (27));

} else {
var statearr_31279_31347 = state_31230__$1;
(statearr_31279_31347[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (34))){
var state_31230__$1 = state_31230;
var statearr_31280_31348 = state_31230__$1;
(statearr_31280_31348[(2)] = null);

(statearr_31280_31348[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (17))){
var state_31230__$1 = state_31230;
var statearr_31281_31349 = state_31230__$1;
(statearr_31281_31349[(2)] = null);

(statearr_31281_31349[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (3))){
var inst_31228 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31230__$1,inst_31228);
} else {
if((state_val_31231 === (12))){
var inst_31157 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31282_31350 = state_31230__$1;
(statearr_31282_31350[(2)] = inst_31157);

(statearr_31282_31350[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (2))){
var state_31230__$1 = state_31230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31230__$1,(4),ch);
} else {
if((state_val_31231 === (23))){
var state_31230__$1 = state_31230;
var statearr_31283_31351 = state_31230__$1;
(statearr_31283_31351[(2)] = null);

(statearr_31283_31351[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (35))){
var inst_31212 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31284_31352 = state_31230__$1;
(statearr_31284_31352[(2)] = inst_31212);

(statearr_31284_31352[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (19))){
var inst_31131 = (state_31230[(7)]);
var inst_31135 = cljs.core.chunk_first.call(null,inst_31131);
var inst_31136 = cljs.core.chunk_rest.call(null,inst_31131);
var inst_31137 = cljs.core.count.call(null,inst_31135);
var inst_31111 = inst_31136;
var inst_31112 = inst_31135;
var inst_31113 = inst_31137;
var inst_31114 = (0);
var state_31230__$1 = (function (){var statearr_31285 = state_31230;
(statearr_31285[(13)] = inst_31111);

(statearr_31285[(14)] = inst_31112);

(statearr_31285[(15)] = inst_31114);

(statearr_31285[(17)] = inst_31113);

return statearr_31285;
})();
var statearr_31286_31353 = state_31230__$1;
(statearr_31286_31353[(2)] = null);

(statearr_31286_31353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (11))){
var inst_31111 = (state_31230[(13)]);
var inst_31131 = (state_31230[(7)]);
var inst_31131__$1 = cljs.core.seq.call(null,inst_31111);
var state_31230__$1 = (function (){var statearr_31287 = state_31230;
(statearr_31287[(7)] = inst_31131__$1);

return statearr_31287;
})();
if(inst_31131__$1){
var statearr_31288_31354 = state_31230__$1;
(statearr_31288_31354[(1)] = (16));

} else {
var statearr_31289_31355 = state_31230__$1;
(statearr_31289_31355[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (9))){
var inst_31159 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31290_31356 = state_31230__$1;
(statearr_31290_31356[(2)] = inst_31159);

(statearr_31290_31356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (5))){
var inst_31109 = cljs.core.deref.call(null,cs);
var inst_31110 = cljs.core.seq.call(null,inst_31109);
var inst_31111 = inst_31110;
var inst_31112 = null;
var inst_31113 = (0);
var inst_31114 = (0);
var state_31230__$1 = (function (){var statearr_31291 = state_31230;
(statearr_31291[(13)] = inst_31111);

(statearr_31291[(14)] = inst_31112);

(statearr_31291[(15)] = inst_31114);

(statearr_31291[(17)] = inst_31113);

return statearr_31291;
})();
var statearr_31292_31357 = state_31230__$1;
(statearr_31292_31357[(2)] = null);

(statearr_31292_31357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (14))){
var state_31230__$1 = state_31230;
var statearr_31293_31358 = state_31230__$1;
(statearr_31293_31358[(2)] = null);

(statearr_31293_31358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (45))){
var inst_31220 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31294_31359 = state_31230__$1;
(statearr_31294_31359[(2)] = inst_31220);

(statearr_31294_31359[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (26))){
var inst_31162 = (state_31230[(29)]);
var inst_31216 = (state_31230[(2)]);
var inst_31217 = cljs.core.seq.call(null,inst_31162);
var state_31230__$1 = (function (){var statearr_31295 = state_31230;
(statearr_31295[(31)] = inst_31216);

return statearr_31295;
})();
if(inst_31217){
var statearr_31296_31360 = state_31230__$1;
(statearr_31296_31360[(1)] = (42));

} else {
var statearr_31297_31361 = state_31230__$1;
(statearr_31297_31361[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (16))){
var inst_31131 = (state_31230[(7)]);
var inst_31133 = cljs.core.chunked_seq_QMARK_.call(null,inst_31131);
var state_31230__$1 = state_31230;
if(inst_31133){
var statearr_31298_31362 = state_31230__$1;
(statearr_31298_31362[(1)] = (19));

} else {
var statearr_31299_31363 = state_31230__$1;
(statearr_31299_31363[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (38))){
var inst_31209 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31300_31364 = state_31230__$1;
(statearr_31300_31364[(2)] = inst_31209);

(statearr_31300_31364[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (30))){
var state_31230__$1 = state_31230;
var statearr_31301_31365 = state_31230__$1;
(statearr_31301_31365[(2)] = null);

(statearr_31301_31365[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (10))){
var inst_31112 = (state_31230[(14)]);
var inst_31114 = (state_31230[(15)]);
var inst_31120 = cljs.core._nth.call(null,inst_31112,inst_31114);
var inst_31121 = cljs.core.nth.call(null,inst_31120,(0),null);
var inst_31122 = cljs.core.nth.call(null,inst_31120,(1),null);
var state_31230__$1 = (function (){var statearr_31302 = state_31230;
(statearr_31302[(26)] = inst_31121);

return statearr_31302;
})();
if(cljs.core.truth_(inst_31122)){
var statearr_31303_31366 = state_31230__$1;
(statearr_31303_31366[(1)] = (13));

} else {
var statearr_31304_31367 = state_31230__$1;
(statearr_31304_31367[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (18))){
var inst_31155 = (state_31230[(2)]);
var state_31230__$1 = state_31230;
var statearr_31305_31368 = state_31230__$1;
(statearr_31305_31368[(2)] = inst_31155);

(statearr_31305_31368[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (42))){
var state_31230__$1 = state_31230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31230__$1,(45),dchan);
} else {
if((state_val_31231 === (37))){
var inst_31102 = (state_31230[(10)]);
var inst_31198 = (state_31230[(23)]);
var inst_31189 = (state_31230[(25)]);
var inst_31198__$1 = cljs.core.first.call(null,inst_31189);
var inst_31199 = cljs.core.async.put_BANG_.call(null,inst_31198__$1,inst_31102,done);
var state_31230__$1 = (function (){var statearr_31306 = state_31230;
(statearr_31306[(23)] = inst_31198__$1);

return statearr_31306;
})();
if(cljs.core.truth_(inst_31199)){
var statearr_31307_31369 = state_31230__$1;
(statearr_31307_31369[(1)] = (39));

} else {
var statearr_31308_31370 = state_31230__$1;
(statearr_31308_31370[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31231 === (8))){
var inst_31114 = (state_31230[(15)]);
var inst_31113 = (state_31230[(17)]);
var inst_31116 = (inst_31114 < inst_31113);
var inst_31117 = inst_31116;
var state_31230__$1 = state_31230;
if(cljs.core.truth_(inst_31117)){
var statearr_31309_31371 = state_31230__$1;
(statearr_31309_31371[(1)] = (10));

} else {
var statearr_31310_31372 = state_31230__$1;
(statearr_31310_31372[(1)] = (11));

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
});})(c__30011__auto___31318,cs,m,dchan,dctr,done))
;
return ((function (switch__29899__auto__,c__30011__auto___31318,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29900__auto__ = null;
var cljs$core$async$mult_$_state_machine__29900__auto____0 = (function (){
var statearr_31314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31314[(0)] = cljs$core$async$mult_$_state_machine__29900__auto__);

(statearr_31314[(1)] = (1));

return statearr_31314;
});
var cljs$core$async$mult_$_state_machine__29900__auto____1 = (function (state_31230){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_31230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e31315){if((e31315 instanceof Object)){
var ex__29903__auto__ = e31315;
var statearr_31316_31373 = state_31230;
(statearr_31316_31373[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31374 = state_31230;
state_31230 = G__31374;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29900__auto__ = function(state_31230){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29900__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29900__auto____1.call(this,state_31230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29900__auto____0;
cljs$core$async$mult_$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29900__auto____1;
return cljs$core$async$mult_$_state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto___31318,cs,m,dchan,dctr,done))
})();
var state__30013__auto__ = (function (){var statearr_31317 = f__30012__auto__.call(null);
(statearr_31317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___31318);

return statearr_31317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto___31318,cs,m,dchan,dctr,done))
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
var args31375 = [];
var len__26950__auto___31378 = arguments.length;
var i__26951__auto___31379 = (0);
while(true){
if((i__26951__auto___31379 < len__26950__auto___31378)){
args31375.push((arguments[i__26951__auto___31379]));

var G__31380 = (i__26951__auto___31379 + (1));
i__26951__auto___31379 = G__31380;
continue;
} else {
}
break;
}

var G__31377 = args31375.length;
switch (G__31377) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31375.length)].join('')));

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
var x__26543__auto__ = (((m == null))?null:m);
var m__26544__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,m,ch);
} else {
var m__26544__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,m,ch);
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
var x__26543__auto__ = (((m == null))?null:m);
var m__26544__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,m,ch);
} else {
var m__26544__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,m,ch);
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
var x__26543__auto__ = (((m == null))?null:m);
var m__26544__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,m);
} else {
var m__26544__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,m);
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
var x__26543__auto__ = (((m == null))?null:m);
var m__26544__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,m,state_map);
} else {
var m__26544__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,m,state_map);
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
var x__26543__auto__ = (((m == null))?null:m);
var m__26544__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,m,mode);
} else {
var m__26544__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26957__auto__ = [];
var len__26950__auto___31392 = arguments.length;
var i__26951__auto___31393 = (0);
while(true){
if((i__26951__auto___31393 < len__26950__auto___31392)){
args__26957__auto__.push((arguments[i__26951__auto___31393]));

var G__31394 = (i__26951__auto___31393 + (1));
i__26951__auto___31393 = G__31394;
continue;
} else {
}
break;
}

var argseq__26958__auto__ = ((((3) < args__26957__auto__.length))?(new cljs.core.IndexedSeq(args__26957__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26958__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31386){
var map__31387 = p__31386;
var map__31387__$1 = ((((!((map__31387 == null)))?((((map__31387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31387):map__31387);
var opts = map__31387__$1;
var statearr_31389_31395 = state;
(statearr_31389_31395[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__31387,map__31387__$1,opts){
return (function (val){
var statearr_31390_31396 = state;
(statearr_31390_31396[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31387,map__31387__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_31391_31397 = state;
(statearr_31391_31397[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31382){
var G__31383 = cljs.core.first.call(null,seq31382);
var seq31382__$1 = cljs.core.next.call(null,seq31382);
var G__31384 = cljs.core.first.call(null,seq31382__$1);
var seq31382__$2 = cljs.core.next.call(null,seq31382__$1);
var G__31385 = cljs.core.first.call(null,seq31382__$2);
var seq31382__$3 = cljs.core.next.call(null,seq31382__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31383,G__31384,G__31385,seq31382__$3);
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
if(typeof cljs.core.async.t_cljs$core$async31561 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31561 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31562){
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
this.meta31562 = meta31562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31563,meta31562__$1){
var self__ = this;
var _31563__$1 = this;
return (new cljs.core.async.t_cljs$core$async31561(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31562__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31561.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31563){
var self__ = this;
var _31563__$1 = this;
return self__.meta31562;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31561.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31561.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31561.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31561.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31561.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31561.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31561.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31561.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31561.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31562","meta31562",936773144,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31561.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31561";

cljs.core.async.t_cljs$core$async31561.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26486__auto__,writer__26487__auto__,opt__26488__auto__){
return cljs.core._write.call(null,writer__26487__auto__,"cljs.core.async/t_cljs$core$async31561");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31561 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31561(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31562){
return (new cljs.core.async.t_cljs$core$async31561(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31562));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31561(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30011__auto___31724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto___31724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto___31724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31661){
var state_val_31662 = (state_31661[(1)]);
if((state_val_31662 === (7))){
var inst_31579 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
var statearr_31663_31725 = state_31661__$1;
(statearr_31663_31725[(2)] = inst_31579);

(statearr_31663_31725[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (20))){
var inst_31591 = (state_31661[(7)]);
var state_31661__$1 = state_31661;
var statearr_31664_31726 = state_31661__$1;
(statearr_31664_31726[(2)] = inst_31591);

(statearr_31664_31726[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (27))){
var state_31661__$1 = state_31661;
var statearr_31665_31727 = state_31661__$1;
(statearr_31665_31727[(2)] = null);

(statearr_31665_31727[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (1))){
var inst_31567 = (state_31661[(8)]);
var inst_31567__$1 = calc_state.call(null);
var inst_31569 = (inst_31567__$1 == null);
var inst_31570 = cljs.core.not.call(null,inst_31569);
var state_31661__$1 = (function (){var statearr_31666 = state_31661;
(statearr_31666[(8)] = inst_31567__$1);

return statearr_31666;
})();
if(inst_31570){
var statearr_31667_31728 = state_31661__$1;
(statearr_31667_31728[(1)] = (2));

} else {
var statearr_31668_31729 = state_31661__$1;
(statearr_31668_31729[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (24))){
var inst_31621 = (state_31661[(9)]);
var inst_31635 = (state_31661[(10)]);
var inst_31614 = (state_31661[(11)]);
var inst_31635__$1 = inst_31614.call(null,inst_31621);
var state_31661__$1 = (function (){var statearr_31669 = state_31661;
(statearr_31669[(10)] = inst_31635__$1);

return statearr_31669;
})();
if(cljs.core.truth_(inst_31635__$1)){
var statearr_31670_31730 = state_31661__$1;
(statearr_31670_31730[(1)] = (29));

} else {
var statearr_31671_31731 = state_31661__$1;
(statearr_31671_31731[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (4))){
var inst_31582 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
if(cljs.core.truth_(inst_31582)){
var statearr_31672_31732 = state_31661__$1;
(statearr_31672_31732[(1)] = (8));

} else {
var statearr_31673_31733 = state_31661__$1;
(statearr_31673_31733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (15))){
var inst_31608 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
if(cljs.core.truth_(inst_31608)){
var statearr_31674_31734 = state_31661__$1;
(statearr_31674_31734[(1)] = (19));

} else {
var statearr_31675_31735 = state_31661__$1;
(statearr_31675_31735[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (21))){
var inst_31613 = (state_31661[(12)]);
var inst_31613__$1 = (state_31661[(2)]);
var inst_31614 = cljs.core.get.call(null,inst_31613__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31615 = cljs.core.get.call(null,inst_31613__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31616 = cljs.core.get.call(null,inst_31613__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31661__$1 = (function (){var statearr_31676 = state_31661;
(statearr_31676[(11)] = inst_31614);

(statearr_31676[(13)] = inst_31615);

(statearr_31676[(12)] = inst_31613__$1);

return statearr_31676;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31661__$1,(22),inst_31616);
} else {
if((state_val_31662 === (31))){
var inst_31643 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
if(cljs.core.truth_(inst_31643)){
var statearr_31677_31736 = state_31661__$1;
(statearr_31677_31736[(1)] = (32));

} else {
var statearr_31678_31737 = state_31661__$1;
(statearr_31678_31737[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (32))){
var inst_31620 = (state_31661[(14)]);
var state_31661__$1 = state_31661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31661__$1,(35),out,inst_31620);
} else {
if((state_val_31662 === (33))){
var inst_31613 = (state_31661[(12)]);
var inst_31591 = inst_31613;
var state_31661__$1 = (function (){var statearr_31679 = state_31661;
(statearr_31679[(7)] = inst_31591);

return statearr_31679;
})();
var statearr_31680_31738 = state_31661__$1;
(statearr_31680_31738[(2)] = null);

(statearr_31680_31738[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (13))){
var inst_31591 = (state_31661[(7)]);
var inst_31598 = inst_31591.cljs$lang$protocol_mask$partition0$;
var inst_31599 = (inst_31598 & (64));
var inst_31600 = inst_31591.cljs$core$ISeq$;
var inst_31601 = (inst_31599) || (inst_31600);
var state_31661__$1 = state_31661;
if(cljs.core.truth_(inst_31601)){
var statearr_31681_31739 = state_31661__$1;
(statearr_31681_31739[(1)] = (16));

} else {
var statearr_31682_31740 = state_31661__$1;
(statearr_31682_31740[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (22))){
var inst_31621 = (state_31661[(9)]);
var inst_31620 = (state_31661[(14)]);
var inst_31619 = (state_31661[(2)]);
var inst_31620__$1 = cljs.core.nth.call(null,inst_31619,(0),null);
var inst_31621__$1 = cljs.core.nth.call(null,inst_31619,(1),null);
var inst_31622 = (inst_31620__$1 == null);
var inst_31623 = cljs.core._EQ_.call(null,inst_31621__$1,change);
var inst_31624 = (inst_31622) || (inst_31623);
var state_31661__$1 = (function (){var statearr_31683 = state_31661;
(statearr_31683[(9)] = inst_31621__$1);

(statearr_31683[(14)] = inst_31620__$1);

return statearr_31683;
})();
if(cljs.core.truth_(inst_31624)){
var statearr_31684_31741 = state_31661__$1;
(statearr_31684_31741[(1)] = (23));

} else {
var statearr_31685_31742 = state_31661__$1;
(statearr_31685_31742[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (36))){
var inst_31613 = (state_31661[(12)]);
var inst_31591 = inst_31613;
var state_31661__$1 = (function (){var statearr_31686 = state_31661;
(statearr_31686[(7)] = inst_31591);

return statearr_31686;
})();
var statearr_31687_31743 = state_31661__$1;
(statearr_31687_31743[(2)] = null);

(statearr_31687_31743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (29))){
var inst_31635 = (state_31661[(10)]);
var state_31661__$1 = state_31661;
var statearr_31688_31744 = state_31661__$1;
(statearr_31688_31744[(2)] = inst_31635);

(statearr_31688_31744[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (6))){
var state_31661__$1 = state_31661;
var statearr_31689_31745 = state_31661__$1;
(statearr_31689_31745[(2)] = false);

(statearr_31689_31745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (28))){
var inst_31631 = (state_31661[(2)]);
var inst_31632 = calc_state.call(null);
var inst_31591 = inst_31632;
var state_31661__$1 = (function (){var statearr_31690 = state_31661;
(statearr_31690[(15)] = inst_31631);

(statearr_31690[(7)] = inst_31591);

return statearr_31690;
})();
var statearr_31691_31746 = state_31661__$1;
(statearr_31691_31746[(2)] = null);

(statearr_31691_31746[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (25))){
var inst_31657 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
var statearr_31692_31747 = state_31661__$1;
(statearr_31692_31747[(2)] = inst_31657);

(statearr_31692_31747[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (34))){
var inst_31655 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
var statearr_31693_31748 = state_31661__$1;
(statearr_31693_31748[(2)] = inst_31655);

(statearr_31693_31748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (17))){
var state_31661__$1 = state_31661;
var statearr_31694_31749 = state_31661__$1;
(statearr_31694_31749[(2)] = false);

(statearr_31694_31749[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (3))){
var state_31661__$1 = state_31661;
var statearr_31695_31750 = state_31661__$1;
(statearr_31695_31750[(2)] = false);

(statearr_31695_31750[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (12))){
var inst_31659 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31661__$1,inst_31659);
} else {
if((state_val_31662 === (2))){
var inst_31567 = (state_31661[(8)]);
var inst_31572 = inst_31567.cljs$lang$protocol_mask$partition0$;
var inst_31573 = (inst_31572 & (64));
var inst_31574 = inst_31567.cljs$core$ISeq$;
var inst_31575 = (inst_31573) || (inst_31574);
var state_31661__$1 = state_31661;
if(cljs.core.truth_(inst_31575)){
var statearr_31696_31751 = state_31661__$1;
(statearr_31696_31751[(1)] = (5));

} else {
var statearr_31697_31752 = state_31661__$1;
(statearr_31697_31752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (23))){
var inst_31620 = (state_31661[(14)]);
var inst_31626 = (inst_31620 == null);
var state_31661__$1 = state_31661;
if(cljs.core.truth_(inst_31626)){
var statearr_31698_31753 = state_31661__$1;
(statearr_31698_31753[(1)] = (26));

} else {
var statearr_31699_31754 = state_31661__$1;
(statearr_31699_31754[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (35))){
var inst_31646 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
if(cljs.core.truth_(inst_31646)){
var statearr_31700_31755 = state_31661__$1;
(statearr_31700_31755[(1)] = (36));

} else {
var statearr_31701_31756 = state_31661__$1;
(statearr_31701_31756[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (19))){
var inst_31591 = (state_31661[(7)]);
var inst_31610 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31591);
var state_31661__$1 = state_31661;
var statearr_31702_31757 = state_31661__$1;
(statearr_31702_31757[(2)] = inst_31610);

(statearr_31702_31757[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (11))){
var inst_31591 = (state_31661[(7)]);
var inst_31595 = (inst_31591 == null);
var inst_31596 = cljs.core.not.call(null,inst_31595);
var state_31661__$1 = state_31661;
if(inst_31596){
var statearr_31703_31758 = state_31661__$1;
(statearr_31703_31758[(1)] = (13));

} else {
var statearr_31704_31759 = state_31661__$1;
(statearr_31704_31759[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (9))){
var inst_31567 = (state_31661[(8)]);
var state_31661__$1 = state_31661;
var statearr_31705_31760 = state_31661__$1;
(statearr_31705_31760[(2)] = inst_31567);

(statearr_31705_31760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (5))){
var state_31661__$1 = state_31661;
var statearr_31706_31761 = state_31661__$1;
(statearr_31706_31761[(2)] = true);

(statearr_31706_31761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (14))){
var state_31661__$1 = state_31661;
var statearr_31707_31762 = state_31661__$1;
(statearr_31707_31762[(2)] = false);

(statearr_31707_31762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (26))){
var inst_31621 = (state_31661[(9)]);
var inst_31628 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31621);
var state_31661__$1 = state_31661;
var statearr_31708_31763 = state_31661__$1;
(statearr_31708_31763[(2)] = inst_31628);

(statearr_31708_31763[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (16))){
var state_31661__$1 = state_31661;
var statearr_31709_31764 = state_31661__$1;
(statearr_31709_31764[(2)] = true);

(statearr_31709_31764[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (38))){
var inst_31651 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
var statearr_31710_31765 = state_31661__$1;
(statearr_31710_31765[(2)] = inst_31651);

(statearr_31710_31765[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (30))){
var inst_31621 = (state_31661[(9)]);
var inst_31614 = (state_31661[(11)]);
var inst_31615 = (state_31661[(13)]);
var inst_31638 = cljs.core.empty_QMARK_.call(null,inst_31614);
var inst_31639 = inst_31615.call(null,inst_31621);
var inst_31640 = cljs.core.not.call(null,inst_31639);
var inst_31641 = (inst_31638) && (inst_31640);
var state_31661__$1 = state_31661;
var statearr_31711_31766 = state_31661__$1;
(statearr_31711_31766[(2)] = inst_31641);

(statearr_31711_31766[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (10))){
var inst_31567 = (state_31661[(8)]);
var inst_31587 = (state_31661[(2)]);
var inst_31588 = cljs.core.get.call(null,inst_31587,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31589 = cljs.core.get.call(null,inst_31587,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31590 = cljs.core.get.call(null,inst_31587,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31591 = inst_31567;
var state_31661__$1 = (function (){var statearr_31712 = state_31661;
(statearr_31712[(16)] = inst_31590);

(statearr_31712[(7)] = inst_31591);

(statearr_31712[(17)] = inst_31588);

(statearr_31712[(18)] = inst_31589);

return statearr_31712;
})();
var statearr_31713_31767 = state_31661__$1;
(statearr_31713_31767[(2)] = null);

(statearr_31713_31767[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (18))){
var inst_31605 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
var statearr_31714_31768 = state_31661__$1;
(statearr_31714_31768[(2)] = inst_31605);

(statearr_31714_31768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (37))){
var state_31661__$1 = state_31661;
var statearr_31715_31769 = state_31661__$1;
(statearr_31715_31769[(2)] = null);

(statearr_31715_31769[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (8))){
var inst_31567 = (state_31661[(8)]);
var inst_31584 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31567);
var state_31661__$1 = state_31661;
var statearr_31716_31770 = state_31661__$1;
(statearr_31716_31770[(2)] = inst_31584);

(statearr_31716_31770[(1)] = (10));


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
});})(c__30011__auto___31724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29899__auto__,c__30011__auto___31724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29900__auto__ = null;
var cljs$core$async$mix_$_state_machine__29900__auto____0 = (function (){
var statearr_31720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31720[(0)] = cljs$core$async$mix_$_state_machine__29900__auto__);

(statearr_31720[(1)] = (1));

return statearr_31720;
});
var cljs$core$async$mix_$_state_machine__29900__auto____1 = (function (state_31661){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_31661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e31721){if((e31721 instanceof Object)){
var ex__29903__auto__ = e31721;
var statearr_31722_31771 = state_31661;
(statearr_31722_31771[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31772 = state_31661;
state_31661 = G__31772;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29900__auto__ = function(state_31661){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29900__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29900__auto____1.call(this,state_31661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29900__auto____0;
cljs$core$async$mix_$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29900__auto____1;
return cljs$core$async$mix_$_state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto___31724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30013__auto__ = (function (){var statearr_31723 = f__30012__auto__.call(null);
(statearr_31723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___31724);

return statearr_31723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto___31724,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__26543__auto__ = (((p == null))?null:p);
var m__26544__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26544__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__26543__auto__ = (((p == null))?null:p);
var m__26544__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,p,v,ch);
} else {
var m__26544__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31773 = [];
var len__26950__auto___31776 = arguments.length;
var i__26951__auto___31777 = (0);
while(true){
if((i__26951__auto___31777 < len__26950__auto___31776)){
args31773.push((arguments[i__26951__auto___31777]));

var G__31778 = (i__26951__auto___31777 + (1));
i__26951__auto___31777 = G__31778;
continue;
} else {
}
break;
}

var G__31775 = args31773.length;
switch (G__31775) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31773.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26543__auto__ = (((p == null))?null:p);
var m__26544__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,p);
} else {
var m__26544__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,p);
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
var x__26543__auto__ = (((p == null))?null:p);
var m__26544__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26543__auto__)]);
if(!((m__26544__auto__ == null))){
return m__26544__auto__.call(null,p,v);
} else {
var m__26544__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26544__auto____$1 == null))){
return m__26544__auto____$1.call(null,p,v);
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
var args31781 = [];
var len__26950__auto___31906 = arguments.length;
var i__26951__auto___31907 = (0);
while(true){
if((i__26951__auto___31907 < len__26950__auto___31906)){
args31781.push((arguments[i__26951__auto___31907]));

var G__31908 = (i__26951__auto___31907 + (1));
i__26951__auto___31907 = G__31908;
continue;
} else {
}
break;
}

var G__31783 = args31781.length;
switch (G__31783) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31781.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25880__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25880__auto__,mults){
return (function (p1__31780_SHARP_){
if(cljs.core.truth_(p1__31780_SHARP_.call(null,topic))){
return p1__31780_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31780_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25880__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31784 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31784 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31785){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31785 = meta31785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31786,meta31785__$1){
var self__ = this;
var _31786__$1 = this;
return (new cljs.core.async.t_cljs$core$async31784(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31785__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31784.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31786){
var self__ = this;
var _31786__$1 = this;
return self__.meta31785;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31784.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31784.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31784.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31784.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31784.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31784.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31784.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31784.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31785","meta31785",-89427002,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31784.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31784";

cljs.core.async.t_cljs$core$async31784.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26486__auto__,writer__26487__auto__,opt__26488__auto__){
return cljs.core._write.call(null,writer__26487__auto__,"cljs.core.async/t_cljs$core$async31784");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31784 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31784(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31785){
return (new cljs.core.async.t_cljs$core$async31784(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31785));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31784(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30011__auto___31910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto___31910,mults,ensure_mult,p){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto___31910,mults,ensure_mult,p){
return (function (state_31858){
var state_val_31859 = (state_31858[(1)]);
if((state_val_31859 === (7))){
var inst_31854 = (state_31858[(2)]);
var state_31858__$1 = state_31858;
var statearr_31860_31911 = state_31858__$1;
(statearr_31860_31911[(2)] = inst_31854);

(statearr_31860_31911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (20))){
var state_31858__$1 = state_31858;
var statearr_31861_31912 = state_31858__$1;
(statearr_31861_31912[(2)] = null);

(statearr_31861_31912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (1))){
var state_31858__$1 = state_31858;
var statearr_31862_31913 = state_31858__$1;
(statearr_31862_31913[(2)] = null);

(statearr_31862_31913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (24))){
var inst_31837 = (state_31858[(7)]);
var inst_31846 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31837);
var state_31858__$1 = state_31858;
var statearr_31863_31914 = state_31858__$1;
(statearr_31863_31914[(2)] = inst_31846);

(statearr_31863_31914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (4))){
var inst_31789 = (state_31858[(8)]);
var inst_31789__$1 = (state_31858[(2)]);
var inst_31790 = (inst_31789__$1 == null);
var state_31858__$1 = (function (){var statearr_31864 = state_31858;
(statearr_31864[(8)] = inst_31789__$1);

return statearr_31864;
})();
if(cljs.core.truth_(inst_31790)){
var statearr_31865_31915 = state_31858__$1;
(statearr_31865_31915[(1)] = (5));

} else {
var statearr_31866_31916 = state_31858__$1;
(statearr_31866_31916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (15))){
var inst_31831 = (state_31858[(2)]);
var state_31858__$1 = state_31858;
var statearr_31867_31917 = state_31858__$1;
(statearr_31867_31917[(2)] = inst_31831);

(statearr_31867_31917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (21))){
var inst_31851 = (state_31858[(2)]);
var state_31858__$1 = (function (){var statearr_31868 = state_31858;
(statearr_31868[(9)] = inst_31851);

return statearr_31868;
})();
var statearr_31869_31918 = state_31858__$1;
(statearr_31869_31918[(2)] = null);

(statearr_31869_31918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (13))){
var inst_31813 = (state_31858[(10)]);
var inst_31815 = cljs.core.chunked_seq_QMARK_.call(null,inst_31813);
var state_31858__$1 = state_31858;
if(inst_31815){
var statearr_31870_31919 = state_31858__$1;
(statearr_31870_31919[(1)] = (16));

} else {
var statearr_31871_31920 = state_31858__$1;
(statearr_31871_31920[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (22))){
var inst_31843 = (state_31858[(2)]);
var state_31858__$1 = state_31858;
if(cljs.core.truth_(inst_31843)){
var statearr_31872_31921 = state_31858__$1;
(statearr_31872_31921[(1)] = (23));

} else {
var statearr_31873_31922 = state_31858__$1;
(statearr_31873_31922[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (6))){
var inst_31789 = (state_31858[(8)]);
var inst_31839 = (state_31858[(11)]);
var inst_31837 = (state_31858[(7)]);
var inst_31837__$1 = topic_fn.call(null,inst_31789);
var inst_31838 = cljs.core.deref.call(null,mults);
var inst_31839__$1 = cljs.core.get.call(null,inst_31838,inst_31837__$1);
var state_31858__$1 = (function (){var statearr_31874 = state_31858;
(statearr_31874[(11)] = inst_31839__$1);

(statearr_31874[(7)] = inst_31837__$1);

return statearr_31874;
})();
if(cljs.core.truth_(inst_31839__$1)){
var statearr_31875_31923 = state_31858__$1;
(statearr_31875_31923[(1)] = (19));

} else {
var statearr_31876_31924 = state_31858__$1;
(statearr_31876_31924[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (25))){
var inst_31848 = (state_31858[(2)]);
var state_31858__$1 = state_31858;
var statearr_31877_31925 = state_31858__$1;
(statearr_31877_31925[(2)] = inst_31848);

(statearr_31877_31925[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (17))){
var inst_31813 = (state_31858[(10)]);
var inst_31822 = cljs.core.first.call(null,inst_31813);
var inst_31823 = cljs.core.async.muxch_STAR_.call(null,inst_31822);
var inst_31824 = cljs.core.async.close_BANG_.call(null,inst_31823);
var inst_31825 = cljs.core.next.call(null,inst_31813);
var inst_31799 = inst_31825;
var inst_31800 = null;
var inst_31801 = (0);
var inst_31802 = (0);
var state_31858__$1 = (function (){var statearr_31878 = state_31858;
(statearr_31878[(12)] = inst_31802);

(statearr_31878[(13)] = inst_31801);

(statearr_31878[(14)] = inst_31824);

(statearr_31878[(15)] = inst_31800);

(statearr_31878[(16)] = inst_31799);

return statearr_31878;
})();
var statearr_31879_31926 = state_31858__$1;
(statearr_31879_31926[(2)] = null);

(statearr_31879_31926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (3))){
var inst_31856 = (state_31858[(2)]);
var state_31858__$1 = state_31858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31858__$1,inst_31856);
} else {
if((state_val_31859 === (12))){
var inst_31833 = (state_31858[(2)]);
var state_31858__$1 = state_31858;
var statearr_31880_31927 = state_31858__$1;
(statearr_31880_31927[(2)] = inst_31833);

(statearr_31880_31927[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (2))){
var state_31858__$1 = state_31858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31858__$1,(4),ch);
} else {
if((state_val_31859 === (23))){
var state_31858__$1 = state_31858;
var statearr_31881_31928 = state_31858__$1;
(statearr_31881_31928[(2)] = null);

(statearr_31881_31928[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (19))){
var inst_31789 = (state_31858[(8)]);
var inst_31839 = (state_31858[(11)]);
var inst_31841 = cljs.core.async.muxch_STAR_.call(null,inst_31839);
var state_31858__$1 = state_31858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31858__$1,(22),inst_31841,inst_31789);
} else {
if((state_val_31859 === (11))){
var inst_31813 = (state_31858[(10)]);
var inst_31799 = (state_31858[(16)]);
var inst_31813__$1 = cljs.core.seq.call(null,inst_31799);
var state_31858__$1 = (function (){var statearr_31882 = state_31858;
(statearr_31882[(10)] = inst_31813__$1);

return statearr_31882;
})();
if(inst_31813__$1){
var statearr_31883_31929 = state_31858__$1;
(statearr_31883_31929[(1)] = (13));

} else {
var statearr_31884_31930 = state_31858__$1;
(statearr_31884_31930[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (9))){
var inst_31835 = (state_31858[(2)]);
var state_31858__$1 = state_31858;
var statearr_31885_31931 = state_31858__$1;
(statearr_31885_31931[(2)] = inst_31835);

(statearr_31885_31931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (5))){
var inst_31796 = cljs.core.deref.call(null,mults);
var inst_31797 = cljs.core.vals.call(null,inst_31796);
var inst_31798 = cljs.core.seq.call(null,inst_31797);
var inst_31799 = inst_31798;
var inst_31800 = null;
var inst_31801 = (0);
var inst_31802 = (0);
var state_31858__$1 = (function (){var statearr_31886 = state_31858;
(statearr_31886[(12)] = inst_31802);

(statearr_31886[(13)] = inst_31801);

(statearr_31886[(15)] = inst_31800);

(statearr_31886[(16)] = inst_31799);

return statearr_31886;
})();
var statearr_31887_31932 = state_31858__$1;
(statearr_31887_31932[(2)] = null);

(statearr_31887_31932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (14))){
var state_31858__$1 = state_31858;
var statearr_31891_31933 = state_31858__$1;
(statearr_31891_31933[(2)] = null);

(statearr_31891_31933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (16))){
var inst_31813 = (state_31858[(10)]);
var inst_31817 = cljs.core.chunk_first.call(null,inst_31813);
var inst_31818 = cljs.core.chunk_rest.call(null,inst_31813);
var inst_31819 = cljs.core.count.call(null,inst_31817);
var inst_31799 = inst_31818;
var inst_31800 = inst_31817;
var inst_31801 = inst_31819;
var inst_31802 = (0);
var state_31858__$1 = (function (){var statearr_31892 = state_31858;
(statearr_31892[(12)] = inst_31802);

(statearr_31892[(13)] = inst_31801);

(statearr_31892[(15)] = inst_31800);

(statearr_31892[(16)] = inst_31799);

return statearr_31892;
})();
var statearr_31893_31934 = state_31858__$1;
(statearr_31893_31934[(2)] = null);

(statearr_31893_31934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (10))){
var inst_31802 = (state_31858[(12)]);
var inst_31801 = (state_31858[(13)]);
var inst_31800 = (state_31858[(15)]);
var inst_31799 = (state_31858[(16)]);
var inst_31807 = cljs.core._nth.call(null,inst_31800,inst_31802);
var inst_31808 = cljs.core.async.muxch_STAR_.call(null,inst_31807);
var inst_31809 = cljs.core.async.close_BANG_.call(null,inst_31808);
var inst_31810 = (inst_31802 + (1));
var tmp31888 = inst_31801;
var tmp31889 = inst_31800;
var tmp31890 = inst_31799;
var inst_31799__$1 = tmp31890;
var inst_31800__$1 = tmp31889;
var inst_31801__$1 = tmp31888;
var inst_31802__$1 = inst_31810;
var state_31858__$1 = (function (){var statearr_31894 = state_31858;
(statearr_31894[(12)] = inst_31802__$1);

(statearr_31894[(13)] = inst_31801__$1);

(statearr_31894[(17)] = inst_31809);

(statearr_31894[(15)] = inst_31800__$1);

(statearr_31894[(16)] = inst_31799__$1);

return statearr_31894;
})();
var statearr_31895_31935 = state_31858__$1;
(statearr_31895_31935[(2)] = null);

(statearr_31895_31935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (18))){
var inst_31828 = (state_31858[(2)]);
var state_31858__$1 = state_31858;
var statearr_31896_31936 = state_31858__$1;
(statearr_31896_31936[(2)] = inst_31828);

(statearr_31896_31936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31859 === (8))){
var inst_31802 = (state_31858[(12)]);
var inst_31801 = (state_31858[(13)]);
var inst_31804 = (inst_31802 < inst_31801);
var inst_31805 = inst_31804;
var state_31858__$1 = state_31858;
if(cljs.core.truth_(inst_31805)){
var statearr_31897_31937 = state_31858__$1;
(statearr_31897_31937[(1)] = (10));

} else {
var statearr_31898_31938 = state_31858__$1;
(statearr_31898_31938[(1)] = (11));

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
});})(c__30011__auto___31910,mults,ensure_mult,p))
;
return ((function (switch__29899__auto__,c__30011__auto___31910,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29900__auto__ = null;
var cljs$core$async$state_machine__29900__auto____0 = (function (){
var statearr_31902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31902[(0)] = cljs$core$async$state_machine__29900__auto__);

(statearr_31902[(1)] = (1));

return statearr_31902;
});
var cljs$core$async$state_machine__29900__auto____1 = (function (state_31858){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_31858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e31903){if((e31903 instanceof Object)){
var ex__29903__auto__ = e31903;
var statearr_31904_31939 = state_31858;
(statearr_31904_31939[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31940 = state_31858;
state_31858 = G__31940;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
cljs$core$async$state_machine__29900__auto__ = function(state_31858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29900__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29900__auto____1.call(this,state_31858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29900__auto____0;
cljs$core$async$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29900__auto____1;
return cljs$core$async$state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto___31910,mults,ensure_mult,p))
})();
var state__30013__auto__ = (function (){var statearr_31905 = f__30012__auto__.call(null);
(statearr_31905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___31910);

return statearr_31905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto___31910,mults,ensure_mult,p))
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
var args31941 = [];
var len__26950__auto___31944 = arguments.length;
var i__26951__auto___31945 = (0);
while(true){
if((i__26951__auto___31945 < len__26950__auto___31944)){
args31941.push((arguments[i__26951__auto___31945]));

var G__31946 = (i__26951__auto___31945 + (1));
i__26951__auto___31945 = G__31946;
continue;
} else {
}
break;
}

var G__31943 = args31941.length;
switch (G__31943) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31941.length)].join('')));

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
var args31948 = [];
var len__26950__auto___31951 = arguments.length;
var i__26951__auto___31952 = (0);
while(true){
if((i__26951__auto___31952 < len__26950__auto___31951)){
args31948.push((arguments[i__26951__auto___31952]));

var G__31953 = (i__26951__auto___31952 + (1));
i__26951__auto___31952 = G__31953;
continue;
} else {
}
break;
}

var G__31950 = args31948.length;
switch (G__31950) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31948.length)].join('')));

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
var args31955 = [];
var len__26950__auto___32026 = arguments.length;
var i__26951__auto___32027 = (0);
while(true){
if((i__26951__auto___32027 < len__26950__auto___32026)){
args31955.push((arguments[i__26951__auto___32027]));

var G__32028 = (i__26951__auto___32027 + (1));
i__26951__auto___32027 = G__32028;
continue;
} else {
}
break;
}

var G__31957 = args31955.length;
switch (G__31957) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31955.length)].join('')));

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
var c__30011__auto___32030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto___32030,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto___32030,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31996){
var state_val_31997 = (state_31996[(1)]);
if((state_val_31997 === (7))){
var state_31996__$1 = state_31996;
var statearr_31998_32031 = state_31996__$1;
(statearr_31998_32031[(2)] = null);

(statearr_31998_32031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (1))){
var state_31996__$1 = state_31996;
var statearr_31999_32032 = state_31996__$1;
(statearr_31999_32032[(2)] = null);

(statearr_31999_32032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (4))){
var inst_31960 = (state_31996[(7)]);
var inst_31962 = (inst_31960 < cnt);
var state_31996__$1 = state_31996;
if(cljs.core.truth_(inst_31962)){
var statearr_32000_32033 = state_31996__$1;
(statearr_32000_32033[(1)] = (6));

} else {
var statearr_32001_32034 = state_31996__$1;
(statearr_32001_32034[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (15))){
var inst_31992 = (state_31996[(2)]);
var state_31996__$1 = state_31996;
var statearr_32002_32035 = state_31996__$1;
(statearr_32002_32035[(2)] = inst_31992);

(statearr_32002_32035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (13))){
var inst_31985 = cljs.core.async.close_BANG_.call(null,out);
var state_31996__$1 = state_31996;
var statearr_32003_32036 = state_31996__$1;
(statearr_32003_32036[(2)] = inst_31985);

(statearr_32003_32036[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (6))){
var state_31996__$1 = state_31996;
var statearr_32004_32037 = state_31996__$1;
(statearr_32004_32037[(2)] = null);

(statearr_32004_32037[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (3))){
var inst_31994 = (state_31996[(2)]);
var state_31996__$1 = state_31996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31996__$1,inst_31994);
} else {
if((state_val_31997 === (12))){
var inst_31982 = (state_31996[(8)]);
var inst_31982__$1 = (state_31996[(2)]);
var inst_31983 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31982__$1);
var state_31996__$1 = (function (){var statearr_32005 = state_31996;
(statearr_32005[(8)] = inst_31982__$1);

return statearr_32005;
})();
if(cljs.core.truth_(inst_31983)){
var statearr_32006_32038 = state_31996__$1;
(statearr_32006_32038[(1)] = (13));

} else {
var statearr_32007_32039 = state_31996__$1;
(statearr_32007_32039[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (2))){
var inst_31959 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31960 = (0);
var state_31996__$1 = (function (){var statearr_32008 = state_31996;
(statearr_32008[(7)] = inst_31960);

(statearr_32008[(9)] = inst_31959);

return statearr_32008;
})();
var statearr_32009_32040 = state_31996__$1;
(statearr_32009_32040[(2)] = null);

(statearr_32009_32040[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (11))){
var inst_31960 = (state_31996[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31996,(10),Object,null,(9));
var inst_31969 = chs__$1.call(null,inst_31960);
var inst_31970 = done.call(null,inst_31960);
var inst_31971 = cljs.core.async.take_BANG_.call(null,inst_31969,inst_31970);
var state_31996__$1 = state_31996;
var statearr_32010_32041 = state_31996__$1;
(statearr_32010_32041[(2)] = inst_31971);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31996__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (9))){
var inst_31960 = (state_31996[(7)]);
var inst_31973 = (state_31996[(2)]);
var inst_31974 = (inst_31960 + (1));
var inst_31960__$1 = inst_31974;
var state_31996__$1 = (function (){var statearr_32011 = state_31996;
(statearr_32011[(7)] = inst_31960__$1);

(statearr_32011[(10)] = inst_31973);

return statearr_32011;
})();
var statearr_32012_32042 = state_31996__$1;
(statearr_32012_32042[(2)] = null);

(statearr_32012_32042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (5))){
var inst_31980 = (state_31996[(2)]);
var state_31996__$1 = (function (){var statearr_32013 = state_31996;
(statearr_32013[(11)] = inst_31980);

return statearr_32013;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31996__$1,(12),dchan);
} else {
if((state_val_31997 === (14))){
var inst_31982 = (state_31996[(8)]);
var inst_31987 = cljs.core.apply.call(null,f,inst_31982);
var state_31996__$1 = state_31996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31996__$1,(16),out,inst_31987);
} else {
if((state_val_31997 === (16))){
var inst_31989 = (state_31996[(2)]);
var state_31996__$1 = (function (){var statearr_32014 = state_31996;
(statearr_32014[(12)] = inst_31989);

return statearr_32014;
})();
var statearr_32015_32043 = state_31996__$1;
(statearr_32015_32043[(2)] = null);

(statearr_32015_32043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (10))){
var inst_31964 = (state_31996[(2)]);
var inst_31965 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31996__$1 = (function (){var statearr_32016 = state_31996;
(statearr_32016[(13)] = inst_31964);

return statearr_32016;
})();
var statearr_32017_32044 = state_31996__$1;
(statearr_32017_32044[(2)] = inst_31965);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31996__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31997 === (8))){
var inst_31978 = (state_31996[(2)]);
var state_31996__$1 = state_31996;
var statearr_32018_32045 = state_31996__$1;
(statearr_32018_32045[(2)] = inst_31978);

(statearr_32018_32045[(1)] = (5));


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
});})(c__30011__auto___32030,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29899__auto__,c__30011__auto___32030,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29900__auto__ = null;
var cljs$core$async$state_machine__29900__auto____0 = (function (){
var statearr_32022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32022[(0)] = cljs$core$async$state_machine__29900__auto__);

(statearr_32022[(1)] = (1));

return statearr_32022;
});
var cljs$core$async$state_machine__29900__auto____1 = (function (state_31996){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_31996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e32023){if((e32023 instanceof Object)){
var ex__29903__auto__ = e32023;
var statearr_32024_32046 = state_31996;
(statearr_32024_32046[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32047 = state_31996;
state_31996 = G__32047;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
cljs$core$async$state_machine__29900__auto__ = function(state_31996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29900__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29900__auto____1.call(this,state_31996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29900__auto____0;
cljs$core$async$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29900__auto____1;
return cljs$core$async$state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto___32030,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30013__auto__ = (function (){var statearr_32025 = f__30012__auto__.call(null);
(statearr_32025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___32030);

return statearr_32025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto___32030,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args32049 = [];
var len__26950__auto___32105 = arguments.length;
var i__26951__auto___32106 = (0);
while(true){
if((i__26951__auto___32106 < len__26950__auto___32105)){
args32049.push((arguments[i__26951__auto___32106]));

var G__32107 = (i__26951__auto___32106 + (1));
i__26951__auto___32106 = G__32107;
continue;
} else {
}
break;
}

var G__32051 = args32049.length;
switch (G__32051) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32049.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30011__auto___32109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto___32109,out){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto___32109,out){
return (function (state_32081){
var state_val_32082 = (state_32081[(1)]);
if((state_val_32082 === (7))){
var inst_32061 = (state_32081[(7)]);
var inst_32060 = (state_32081[(8)]);
var inst_32060__$1 = (state_32081[(2)]);
var inst_32061__$1 = cljs.core.nth.call(null,inst_32060__$1,(0),null);
var inst_32062 = cljs.core.nth.call(null,inst_32060__$1,(1),null);
var inst_32063 = (inst_32061__$1 == null);
var state_32081__$1 = (function (){var statearr_32083 = state_32081;
(statearr_32083[(7)] = inst_32061__$1);

(statearr_32083[(9)] = inst_32062);

(statearr_32083[(8)] = inst_32060__$1);

return statearr_32083;
})();
if(cljs.core.truth_(inst_32063)){
var statearr_32084_32110 = state_32081__$1;
(statearr_32084_32110[(1)] = (8));

} else {
var statearr_32085_32111 = state_32081__$1;
(statearr_32085_32111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (1))){
var inst_32052 = cljs.core.vec.call(null,chs);
var inst_32053 = inst_32052;
var state_32081__$1 = (function (){var statearr_32086 = state_32081;
(statearr_32086[(10)] = inst_32053);

return statearr_32086;
})();
var statearr_32087_32112 = state_32081__$1;
(statearr_32087_32112[(2)] = null);

(statearr_32087_32112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (4))){
var inst_32053 = (state_32081[(10)]);
var state_32081__$1 = state_32081;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32081__$1,(7),inst_32053);
} else {
if((state_val_32082 === (6))){
var inst_32077 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32088_32113 = state_32081__$1;
(statearr_32088_32113[(2)] = inst_32077);

(statearr_32088_32113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (3))){
var inst_32079 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32081__$1,inst_32079);
} else {
if((state_val_32082 === (2))){
var inst_32053 = (state_32081[(10)]);
var inst_32055 = cljs.core.count.call(null,inst_32053);
var inst_32056 = (inst_32055 > (0));
var state_32081__$1 = state_32081;
if(cljs.core.truth_(inst_32056)){
var statearr_32090_32114 = state_32081__$1;
(statearr_32090_32114[(1)] = (4));

} else {
var statearr_32091_32115 = state_32081__$1;
(statearr_32091_32115[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (11))){
var inst_32053 = (state_32081[(10)]);
var inst_32070 = (state_32081[(2)]);
var tmp32089 = inst_32053;
var inst_32053__$1 = tmp32089;
var state_32081__$1 = (function (){var statearr_32092 = state_32081;
(statearr_32092[(11)] = inst_32070);

(statearr_32092[(10)] = inst_32053__$1);

return statearr_32092;
})();
var statearr_32093_32116 = state_32081__$1;
(statearr_32093_32116[(2)] = null);

(statearr_32093_32116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (9))){
var inst_32061 = (state_32081[(7)]);
var state_32081__$1 = state_32081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32081__$1,(11),out,inst_32061);
} else {
if((state_val_32082 === (5))){
var inst_32075 = cljs.core.async.close_BANG_.call(null,out);
var state_32081__$1 = state_32081;
var statearr_32094_32117 = state_32081__$1;
(statearr_32094_32117[(2)] = inst_32075);

(statearr_32094_32117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (10))){
var inst_32073 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32095_32118 = state_32081__$1;
(statearr_32095_32118[(2)] = inst_32073);

(statearr_32095_32118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (8))){
var inst_32061 = (state_32081[(7)]);
var inst_32062 = (state_32081[(9)]);
var inst_32060 = (state_32081[(8)]);
var inst_32053 = (state_32081[(10)]);
var inst_32065 = (function (){var cs = inst_32053;
var vec__32058 = inst_32060;
var v = inst_32061;
var c = inst_32062;
return ((function (cs,vec__32058,v,c,inst_32061,inst_32062,inst_32060,inst_32053,state_val_32082,c__30011__auto___32109,out){
return (function (p1__32048_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32048_SHARP_);
});
;})(cs,vec__32058,v,c,inst_32061,inst_32062,inst_32060,inst_32053,state_val_32082,c__30011__auto___32109,out))
})();
var inst_32066 = cljs.core.filterv.call(null,inst_32065,inst_32053);
var inst_32053__$1 = inst_32066;
var state_32081__$1 = (function (){var statearr_32096 = state_32081;
(statearr_32096[(10)] = inst_32053__$1);

return statearr_32096;
})();
var statearr_32097_32119 = state_32081__$1;
(statearr_32097_32119[(2)] = null);

(statearr_32097_32119[(1)] = (2));


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
});})(c__30011__auto___32109,out))
;
return ((function (switch__29899__auto__,c__30011__auto___32109,out){
return (function() {
var cljs$core$async$state_machine__29900__auto__ = null;
var cljs$core$async$state_machine__29900__auto____0 = (function (){
var statearr_32101 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32101[(0)] = cljs$core$async$state_machine__29900__auto__);

(statearr_32101[(1)] = (1));

return statearr_32101;
});
var cljs$core$async$state_machine__29900__auto____1 = (function (state_32081){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_32081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e32102){if((e32102 instanceof Object)){
var ex__29903__auto__ = e32102;
var statearr_32103_32120 = state_32081;
(statearr_32103_32120[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32121 = state_32081;
state_32081 = G__32121;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
cljs$core$async$state_machine__29900__auto__ = function(state_32081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29900__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29900__auto____1.call(this,state_32081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29900__auto____0;
cljs$core$async$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29900__auto____1;
return cljs$core$async$state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto___32109,out))
})();
var state__30013__auto__ = (function (){var statearr_32104 = f__30012__auto__.call(null);
(statearr_32104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___32109);

return statearr_32104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto___32109,out))
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
var args32122 = [];
var len__26950__auto___32171 = arguments.length;
var i__26951__auto___32172 = (0);
while(true){
if((i__26951__auto___32172 < len__26950__auto___32171)){
args32122.push((arguments[i__26951__auto___32172]));

var G__32173 = (i__26951__auto___32172 + (1));
i__26951__auto___32172 = G__32173;
continue;
} else {
}
break;
}

var G__32124 = args32122.length;
switch (G__32124) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32122.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30011__auto___32175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto___32175,out){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto___32175,out){
return (function (state_32148){
var state_val_32149 = (state_32148[(1)]);
if((state_val_32149 === (7))){
var inst_32130 = (state_32148[(7)]);
var inst_32130__$1 = (state_32148[(2)]);
var inst_32131 = (inst_32130__$1 == null);
var inst_32132 = cljs.core.not.call(null,inst_32131);
var state_32148__$1 = (function (){var statearr_32150 = state_32148;
(statearr_32150[(7)] = inst_32130__$1);

return statearr_32150;
})();
if(inst_32132){
var statearr_32151_32176 = state_32148__$1;
(statearr_32151_32176[(1)] = (8));

} else {
var statearr_32152_32177 = state_32148__$1;
(statearr_32152_32177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (1))){
var inst_32125 = (0);
var state_32148__$1 = (function (){var statearr_32153 = state_32148;
(statearr_32153[(8)] = inst_32125);

return statearr_32153;
})();
var statearr_32154_32178 = state_32148__$1;
(statearr_32154_32178[(2)] = null);

(statearr_32154_32178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (4))){
var state_32148__$1 = state_32148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32148__$1,(7),ch);
} else {
if((state_val_32149 === (6))){
var inst_32143 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32155_32179 = state_32148__$1;
(statearr_32155_32179[(2)] = inst_32143);

(statearr_32155_32179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (3))){
var inst_32145 = (state_32148[(2)]);
var inst_32146 = cljs.core.async.close_BANG_.call(null,out);
var state_32148__$1 = (function (){var statearr_32156 = state_32148;
(statearr_32156[(9)] = inst_32145);

return statearr_32156;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32148__$1,inst_32146);
} else {
if((state_val_32149 === (2))){
var inst_32125 = (state_32148[(8)]);
var inst_32127 = (inst_32125 < n);
var state_32148__$1 = state_32148;
if(cljs.core.truth_(inst_32127)){
var statearr_32157_32180 = state_32148__$1;
(statearr_32157_32180[(1)] = (4));

} else {
var statearr_32158_32181 = state_32148__$1;
(statearr_32158_32181[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (11))){
var inst_32125 = (state_32148[(8)]);
var inst_32135 = (state_32148[(2)]);
var inst_32136 = (inst_32125 + (1));
var inst_32125__$1 = inst_32136;
var state_32148__$1 = (function (){var statearr_32159 = state_32148;
(statearr_32159[(10)] = inst_32135);

(statearr_32159[(8)] = inst_32125__$1);

return statearr_32159;
})();
var statearr_32160_32182 = state_32148__$1;
(statearr_32160_32182[(2)] = null);

(statearr_32160_32182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (9))){
var state_32148__$1 = state_32148;
var statearr_32161_32183 = state_32148__$1;
(statearr_32161_32183[(2)] = null);

(statearr_32161_32183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (5))){
var state_32148__$1 = state_32148;
var statearr_32162_32184 = state_32148__$1;
(statearr_32162_32184[(2)] = null);

(statearr_32162_32184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (10))){
var inst_32140 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32163_32185 = state_32148__$1;
(statearr_32163_32185[(2)] = inst_32140);

(statearr_32163_32185[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (8))){
var inst_32130 = (state_32148[(7)]);
var state_32148__$1 = state_32148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32148__$1,(11),out,inst_32130);
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
});})(c__30011__auto___32175,out))
;
return ((function (switch__29899__auto__,c__30011__auto___32175,out){
return (function() {
var cljs$core$async$state_machine__29900__auto__ = null;
var cljs$core$async$state_machine__29900__auto____0 = (function (){
var statearr_32167 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32167[(0)] = cljs$core$async$state_machine__29900__auto__);

(statearr_32167[(1)] = (1));

return statearr_32167;
});
var cljs$core$async$state_machine__29900__auto____1 = (function (state_32148){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_32148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e32168){if((e32168 instanceof Object)){
var ex__29903__auto__ = e32168;
var statearr_32169_32186 = state_32148;
(statearr_32169_32186[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32187 = state_32148;
state_32148 = G__32187;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
cljs$core$async$state_machine__29900__auto__ = function(state_32148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29900__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29900__auto____1.call(this,state_32148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29900__auto____0;
cljs$core$async$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29900__auto____1;
return cljs$core$async$state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto___32175,out))
})();
var state__30013__auto__ = (function (){var statearr_32170 = f__30012__auto__.call(null);
(statearr_32170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___32175);

return statearr_32170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto___32175,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32195 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32195 = (function (map_LT_,f,ch,meta32196){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32196 = meta32196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32197,meta32196__$1){
var self__ = this;
var _32197__$1 = this;
return (new cljs.core.async.t_cljs$core$async32195(self__.map_LT_,self__.f,self__.ch,meta32196__$1));
});

cljs.core.async.t_cljs$core$async32195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32197){
var self__ = this;
var _32197__$1 = this;
return self__.meta32196;
});

cljs.core.async.t_cljs$core$async32195.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32195.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32195.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32195.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32195.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32198 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32198 = (function (map_LT_,f,ch,meta32196,_,fn1,meta32199){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32196 = meta32196;
this._ = _;
this.fn1 = fn1;
this.meta32199 = meta32199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32200,meta32199__$1){
var self__ = this;
var _32200__$1 = this;
return (new cljs.core.async.t_cljs$core$async32198(self__.map_LT_,self__.f,self__.ch,self__.meta32196,self__._,self__.fn1,meta32199__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32198.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32200){
var self__ = this;
var _32200__$1 = this;
return self__.meta32199;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32198.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32198.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32198.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32198.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32188_SHARP_){
return f1.call(null,(((p1__32188_SHARP_ == null))?null:self__.f.call(null,p1__32188_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32198.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32196","meta32196",226475912,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32195","cljs.core.async/t_cljs$core$async32195",106788841,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32199","meta32199",-774975356,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32198.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32198.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32198";

cljs.core.async.t_cljs$core$async32198.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26486__auto__,writer__26487__auto__,opt__26488__auto__){
return cljs.core._write.call(null,writer__26487__auto__,"cljs.core.async/t_cljs$core$async32198");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32198 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32198(map_LT___$1,f__$1,ch__$1,meta32196__$1,___$2,fn1__$1,meta32199){
return (new cljs.core.async.t_cljs$core$async32198(map_LT___$1,f__$1,ch__$1,meta32196__$1,___$2,fn1__$1,meta32199));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32198(self__.map_LT_,self__.f,self__.ch,self__.meta32196,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25868__auto__ = ret;
if(cljs.core.truth_(and__25868__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25868__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32195.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32195.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32196","meta32196",226475912,null)], null);
});

cljs.core.async.t_cljs$core$async32195.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32195";

cljs.core.async.t_cljs$core$async32195.cljs$lang$ctorPrWriter = (function (this__26486__auto__,writer__26487__auto__,opt__26488__auto__){
return cljs.core._write.call(null,writer__26487__auto__,"cljs.core.async/t_cljs$core$async32195");
});

cljs.core.async.__GT_t_cljs$core$async32195 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32195(map_LT___$1,f__$1,ch__$1,meta32196){
return (new cljs.core.async.t_cljs$core$async32195(map_LT___$1,f__$1,ch__$1,meta32196));
});

}

return (new cljs.core.async.t_cljs$core$async32195(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32204 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32204 = (function (map_GT_,f,ch,meta32205){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32205 = meta32205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32206,meta32205__$1){
var self__ = this;
var _32206__$1 = this;
return (new cljs.core.async.t_cljs$core$async32204(self__.map_GT_,self__.f,self__.ch,meta32205__$1));
});

cljs.core.async.t_cljs$core$async32204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32206){
var self__ = this;
var _32206__$1 = this;
return self__.meta32205;
});

cljs.core.async.t_cljs$core$async32204.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32204.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32204.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32204.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32204.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32204.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32204.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32205","meta32205",-146488451,null)], null);
});

cljs.core.async.t_cljs$core$async32204.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32204.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32204";

cljs.core.async.t_cljs$core$async32204.cljs$lang$ctorPrWriter = (function (this__26486__auto__,writer__26487__auto__,opt__26488__auto__){
return cljs.core._write.call(null,writer__26487__auto__,"cljs.core.async/t_cljs$core$async32204");
});

cljs.core.async.__GT_t_cljs$core$async32204 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32204(map_GT___$1,f__$1,ch__$1,meta32205){
return (new cljs.core.async.t_cljs$core$async32204(map_GT___$1,f__$1,ch__$1,meta32205));
});

}

return (new cljs.core.async.t_cljs$core$async32204(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32210 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32210 = (function (filter_GT_,p,ch,meta32211){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32211 = meta32211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32212,meta32211__$1){
var self__ = this;
var _32212__$1 = this;
return (new cljs.core.async.t_cljs$core$async32210(self__.filter_GT_,self__.p,self__.ch,meta32211__$1));
});

cljs.core.async.t_cljs$core$async32210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32212){
var self__ = this;
var _32212__$1 = this;
return self__.meta32211;
});

cljs.core.async.t_cljs$core$async32210.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32210.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32210.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32210.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32210.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32210.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32210.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32211","meta32211",155230932,null)], null);
});

cljs.core.async.t_cljs$core$async32210.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32210";

cljs.core.async.t_cljs$core$async32210.cljs$lang$ctorPrWriter = (function (this__26486__auto__,writer__26487__auto__,opt__26488__auto__){
return cljs.core._write.call(null,writer__26487__auto__,"cljs.core.async/t_cljs$core$async32210");
});

cljs.core.async.__GT_t_cljs$core$async32210 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32210(filter_GT___$1,p__$1,ch__$1,meta32211){
return (new cljs.core.async.t_cljs$core$async32210(filter_GT___$1,p__$1,ch__$1,meta32211));
});

}

return (new cljs.core.async.t_cljs$core$async32210(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args32213 = [];
var len__26950__auto___32257 = arguments.length;
var i__26951__auto___32258 = (0);
while(true){
if((i__26951__auto___32258 < len__26950__auto___32257)){
args32213.push((arguments[i__26951__auto___32258]));

var G__32259 = (i__26951__auto___32258 + (1));
i__26951__auto___32258 = G__32259;
continue;
} else {
}
break;
}

var G__32215 = args32213.length;
switch (G__32215) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32213.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30011__auto___32261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto___32261,out){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto___32261,out){
return (function (state_32236){
var state_val_32237 = (state_32236[(1)]);
if((state_val_32237 === (7))){
var inst_32232 = (state_32236[(2)]);
var state_32236__$1 = state_32236;
var statearr_32238_32262 = state_32236__$1;
(statearr_32238_32262[(2)] = inst_32232);

(statearr_32238_32262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (1))){
var state_32236__$1 = state_32236;
var statearr_32239_32263 = state_32236__$1;
(statearr_32239_32263[(2)] = null);

(statearr_32239_32263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (4))){
var inst_32218 = (state_32236[(7)]);
var inst_32218__$1 = (state_32236[(2)]);
var inst_32219 = (inst_32218__$1 == null);
var state_32236__$1 = (function (){var statearr_32240 = state_32236;
(statearr_32240[(7)] = inst_32218__$1);

return statearr_32240;
})();
if(cljs.core.truth_(inst_32219)){
var statearr_32241_32264 = state_32236__$1;
(statearr_32241_32264[(1)] = (5));

} else {
var statearr_32242_32265 = state_32236__$1;
(statearr_32242_32265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (6))){
var inst_32218 = (state_32236[(7)]);
var inst_32223 = p.call(null,inst_32218);
var state_32236__$1 = state_32236;
if(cljs.core.truth_(inst_32223)){
var statearr_32243_32266 = state_32236__$1;
(statearr_32243_32266[(1)] = (8));

} else {
var statearr_32244_32267 = state_32236__$1;
(statearr_32244_32267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (3))){
var inst_32234 = (state_32236[(2)]);
var state_32236__$1 = state_32236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32236__$1,inst_32234);
} else {
if((state_val_32237 === (2))){
var state_32236__$1 = state_32236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32236__$1,(4),ch);
} else {
if((state_val_32237 === (11))){
var inst_32226 = (state_32236[(2)]);
var state_32236__$1 = state_32236;
var statearr_32245_32268 = state_32236__$1;
(statearr_32245_32268[(2)] = inst_32226);

(statearr_32245_32268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (9))){
var state_32236__$1 = state_32236;
var statearr_32246_32269 = state_32236__$1;
(statearr_32246_32269[(2)] = null);

(statearr_32246_32269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (5))){
var inst_32221 = cljs.core.async.close_BANG_.call(null,out);
var state_32236__$1 = state_32236;
var statearr_32247_32270 = state_32236__$1;
(statearr_32247_32270[(2)] = inst_32221);

(statearr_32247_32270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (10))){
var inst_32229 = (state_32236[(2)]);
var state_32236__$1 = (function (){var statearr_32248 = state_32236;
(statearr_32248[(8)] = inst_32229);

return statearr_32248;
})();
var statearr_32249_32271 = state_32236__$1;
(statearr_32249_32271[(2)] = null);

(statearr_32249_32271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (8))){
var inst_32218 = (state_32236[(7)]);
var state_32236__$1 = state_32236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32236__$1,(11),out,inst_32218);
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
});})(c__30011__auto___32261,out))
;
return ((function (switch__29899__auto__,c__30011__auto___32261,out){
return (function() {
var cljs$core$async$state_machine__29900__auto__ = null;
var cljs$core$async$state_machine__29900__auto____0 = (function (){
var statearr_32253 = [null,null,null,null,null,null,null,null,null];
(statearr_32253[(0)] = cljs$core$async$state_machine__29900__auto__);

(statearr_32253[(1)] = (1));

return statearr_32253;
});
var cljs$core$async$state_machine__29900__auto____1 = (function (state_32236){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_32236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e32254){if((e32254 instanceof Object)){
var ex__29903__auto__ = e32254;
var statearr_32255_32272 = state_32236;
(statearr_32255_32272[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32273 = state_32236;
state_32236 = G__32273;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
cljs$core$async$state_machine__29900__auto__ = function(state_32236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29900__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29900__auto____1.call(this,state_32236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29900__auto____0;
cljs$core$async$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29900__auto____1;
return cljs$core$async$state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto___32261,out))
})();
var state__30013__auto__ = (function (){var statearr_32256 = f__30012__auto__.call(null);
(statearr_32256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___32261);

return statearr_32256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto___32261,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32274 = [];
var len__26950__auto___32277 = arguments.length;
var i__26951__auto___32278 = (0);
while(true){
if((i__26951__auto___32278 < len__26950__auto___32277)){
args32274.push((arguments[i__26951__auto___32278]));

var G__32279 = (i__26951__auto___32278 + (1));
i__26951__auto___32278 = G__32279;
continue;
} else {
}
break;
}

var G__32276 = args32274.length;
switch (G__32276) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32274.length)].join('')));

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
var c__30011__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto__){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto__){
return (function (state_32446){
var state_val_32447 = (state_32446[(1)]);
if((state_val_32447 === (7))){
var inst_32442 = (state_32446[(2)]);
var state_32446__$1 = state_32446;
var statearr_32448_32489 = state_32446__$1;
(statearr_32448_32489[(2)] = inst_32442);

(statearr_32448_32489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32447 === (20))){
var inst_32412 = (state_32446[(7)]);
var inst_32423 = (state_32446[(2)]);
var inst_32424 = cljs.core.next.call(null,inst_32412);
var inst_32398 = inst_32424;
var inst_32399 = null;
var inst_32400 = (0);
var inst_32401 = (0);
var state_32446__$1 = (function (){var statearr_32449 = state_32446;
(statearr_32449[(8)] = inst_32401);

(statearr_32449[(9)] = inst_32400);

(statearr_32449[(10)] = inst_32399);

(statearr_32449[(11)] = inst_32423);

(statearr_32449[(12)] = inst_32398);

return statearr_32449;
})();
var statearr_32450_32490 = state_32446__$1;
(statearr_32450_32490[(2)] = null);

(statearr_32450_32490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32447 === (1))){
var state_32446__$1 = state_32446;
var statearr_32451_32491 = state_32446__$1;
(statearr_32451_32491[(2)] = null);

(statearr_32451_32491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32447 === (4))){
var inst_32387 = (state_32446[(13)]);
var inst_32387__$1 = (state_32446[(2)]);
var inst_32388 = (inst_32387__$1 == null);
var state_32446__$1 = (function (){var statearr_32452 = state_32446;
(statearr_32452[(13)] = inst_32387__$1);

return statearr_32452;
})();
if(cljs.core.truth_(inst_32388)){
var statearr_32453_32492 = state_32446__$1;
(statearr_32453_32492[(1)] = (5));

} else {
var statearr_32454_32493 = state_32446__$1;
(statearr_32454_32493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32447 === (15))){
var state_32446__$1 = state_32446;
var statearr_32458_32494 = state_32446__$1;
(statearr_32458_32494[(2)] = null);

(statearr_32458_32494[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32447 === (21))){
var state_32446__$1 = state_32446;
var statearr_32459_32495 = state_32446__$1;
(statearr_32459_32495[(2)] = null);

(statearr_32459_32495[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32447 === (13))){
var inst_32401 = (state_32446[(8)]);
var inst_32400 = (state_32446[(9)]);
var inst_32399 = (state_32446[(10)]);
var inst_32398 = (state_32446[(12)]);
var inst_32408 = (state_32446[(2)]);
var inst_32409 = (inst_32401 + (1));
var tmp32455 = inst_32400;
var tmp32456 = inst_32399;
var tmp32457 = inst_32398;
var inst_32398__$1 = tmp32457;
var inst_32399__$1 = tmp32456;
var inst_32400__$1 = tmp32455;
var inst_32401__$1 = inst_32409;
var state_32446__$1 = (function (){var statearr_32460 = state_32446;
(statearr_32460[(8)] = inst_32401__$1);

(statearr_32460[(9)] = inst_32400__$1);

(statearr_32460[(10)] = inst_32399__$1);

(statearr_32460[(12)] = inst_32398__$1);

(statearr_32460[(14)] = inst_32408);

return statearr_32460;
})();
var statearr_32461_32496 = state_32446__$1;
(statearr_32461_32496[(2)] = null);

(statearr_32461_32496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32447 === (22))){
var state_32446__$1 = state_32446;
var statearr_32462_32497 = state_32446__$1;
(statearr_32462_32497[(2)] = null);

(statearr_32462_32497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32447 === (6))){
var inst_32387 = (state_32446[(13)]);
var inst_32396 = f.call(null,inst_32387);
var inst_32397 = cljs.core.seq.call(null,inst_32396);
var inst_32398 = inst_32397;
var inst_32399 = null;
var inst_32400 = (0);
var inst_32401 = (0);
var state_32446__$1 = (function (){var statearr_32463 = state_32446;
(statearr_32463[(8)] = inst_32401);

(statearr_32463[(9)] = inst_32400);

(statearr_32463[(10)] = inst_32399);

(statearr_32463[(12)] = inst_32398);

return statearr_32463;
})();
var statearr_32464_32498 = state_32446__$1;
(statearr_32464_32498[(2)] = null);

(statearr_32464_32498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32447 === (17))){
var inst_32412 = (state_32446[(7)]);
var inst_32416 = cljs.core.chunk_first.call(null,inst_32412);
var inst_32417 = cljs.core.chunk_rest.call(null,inst_32412);
var inst_32418 = cljs.core.count.call(null,inst_32416);
var inst_32398 = inst_32417;
var inst_32399 = inst_32416;
var inst_32400 = inst_32418;
var inst_32401 = (0);
var state_32446__$1 = (function (){var statearr_32465 = state_32446;
(statearr_32465[(8)] = inst_32401);

(statearr_32465[(9)] = inst_32400);

(statearr_32465[(10)] = inst_32399);

(statearr_32465[(12)] = inst_32398);

return statearr_32465;
})();
var statearr_32466_32499 = state_32446__$1;
(statearr_32466_32499[(2)] = null);

(statearr_32466_32499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32447 === (3))){
var inst_32444 = (state_32446[(2)]);
var state_32446__$1 = state_32446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32446__$1,inst_32444);
} else {
if((state_val_32447 === (12))){
var inst_32432 = (state_32446[(2)]);
var state_32446__$1 = state_32446;
var statearr_32467_32500 = state_32446__$1;
(statearr_32467_32500[(2)] = inst_32432);

(statearr_32467_32500[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32447 === (2))){
var state_32446__$1 = state_32446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32446__$1,(4),in$);
} else {
if((state_val_32447 === (23))){
var inst_32440 = (state_32446[(2)]);
var state_32446__$1 = state_32446;
var statearr_32468_32501 = state_32446__$1;
(statearr_32468_32501[(2)] = inst_32440);

(statearr_32468_32501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32447 === (19))){
var inst_32427 = (state_32446[(2)]);
var state_32446__$1 = state_32446;
var statearr_32469_32502 = state_32446__$1;
(statearr_32469_32502[(2)] = inst_32427);

(statearr_32469_32502[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32447 === (11))){
var inst_32412 = (state_32446[(7)]);
var inst_32398 = (state_32446[(12)]);
var inst_32412__$1 = cljs.core.seq.call(null,inst_32398);
var state_32446__$1 = (function (){var statearr_32470 = state_32446;
(statearr_32470[(7)] = inst_32412__$1);

return statearr_32470;
})();
if(inst_32412__$1){
var statearr_32471_32503 = state_32446__$1;
(statearr_32471_32503[(1)] = (14));

} else {
var statearr_32472_32504 = state_32446__$1;
(statearr_32472_32504[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32447 === (9))){
var inst_32434 = (state_32446[(2)]);
var inst_32435 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32446__$1 = (function (){var statearr_32473 = state_32446;
(statearr_32473[(15)] = inst_32434);

return statearr_32473;
})();
if(cljs.core.truth_(inst_32435)){
var statearr_32474_32505 = state_32446__$1;
(statearr_32474_32505[(1)] = (21));

} else {
var statearr_32475_32506 = state_32446__$1;
(statearr_32475_32506[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32447 === (5))){
var inst_32390 = cljs.core.async.close_BANG_.call(null,out);
var state_32446__$1 = state_32446;
var statearr_32476_32507 = state_32446__$1;
(statearr_32476_32507[(2)] = inst_32390);

(statearr_32476_32507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32447 === (14))){
var inst_32412 = (state_32446[(7)]);
var inst_32414 = cljs.core.chunked_seq_QMARK_.call(null,inst_32412);
var state_32446__$1 = state_32446;
if(inst_32414){
var statearr_32477_32508 = state_32446__$1;
(statearr_32477_32508[(1)] = (17));

} else {
var statearr_32478_32509 = state_32446__$1;
(statearr_32478_32509[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32447 === (16))){
var inst_32430 = (state_32446[(2)]);
var state_32446__$1 = state_32446;
var statearr_32479_32510 = state_32446__$1;
(statearr_32479_32510[(2)] = inst_32430);

(statearr_32479_32510[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32447 === (10))){
var inst_32401 = (state_32446[(8)]);
var inst_32399 = (state_32446[(10)]);
var inst_32406 = cljs.core._nth.call(null,inst_32399,inst_32401);
var state_32446__$1 = state_32446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32446__$1,(13),out,inst_32406);
} else {
if((state_val_32447 === (18))){
var inst_32412 = (state_32446[(7)]);
var inst_32421 = cljs.core.first.call(null,inst_32412);
var state_32446__$1 = state_32446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32446__$1,(20),out,inst_32421);
} else {
if((state_val_32447 === (8))){
var inst_32401 = (state_32446[(8)]);
var inst_32400 = (state_32446[(9)]);
var inst_32403 = (inst_32401 < inst_32400);
var inst_32404 = inst_32403;
var state_32446__$1 = state_32446;
if(cljs.core.truth_(inst_32404)){
var statearr_32480_32511 = state_32446__$1;
(statearr_32480_32511[(1)] = (10));

} else {
var statearr_32481_32512 = state_32446__$1;
(statearr_32481_32512[(1)] = (11));

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
});})(c__30011__auto__))
;
return ((function (switch__29899__auto__,c__30011__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29900__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29900__auto____0 = (function (){
var statearr_32485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32485[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29900__auto__);

(statearr_32485[(1)] = (1));

return statearr_32485;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29900__auto____1 = (function (state_32446){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_32446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e32486){if((e32486 instanceof Object)){
var ex__29903__auto__ = e32486;
var statearr_32487_32513 = state_32446;
(statearr_32487_32513[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32514 = state_32446;
state_32446 = G__32514;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29900__auto__ = function(state_32446){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29900__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29900__auto____1.call(this,state_32446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29900__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29900__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto__))
})();
var state__30013__auto__ = (function (){var statearr_32488 = f__30012__auto__.call(null);
(statearr_32488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto__);

return statearr_32488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto__))
);

return c__30011__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32515 = [];
var len__26950__auto___32518 = arguments.length;
var i__26951__auto___32519 = (0);
while(true){
if((i__26951__auto___32519 < len__26950__auto___32518)){
args32515.push((arguments[i__26951__auto___32519]));

var G__32520 = (i__26951__auto___32519 + (1));
i__26951__auto___32519 = G__32520;
continue;
} else {
}
break;
}

var G__32517 = args32515.length;
switch (G__32517) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32515.length)].join('')));

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
var args32522 = [];
var len__26950__auto___32525 = arguments.length;
var i__26951__auto___32526 = (0);
while(true){
if((i__26951__auto___32526 < len__26950__auto___32525)){
args32522.push((arguments[i__26951__auto___32526]));

var G__32527 = (i__26951__auto___32526 + (1));
i__26951__auto___32526 = G__32527;
continue;
} else {
}
break;
}

var G__32524 = args32522.length;
switch (G__32524) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32522.length)].join('')));

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
var args32529 = [];
var len__26950__auto___32580 = arguments.length;
var i__26951__auto___32581 = (0);
while(true){
if((i__26951__auto___32581 < len__26950__auto___32580)){
args32529.push((arguments[i__26951__auto___32581]));

var G__32582 = (i__26951__auto___32581 + (1));
i__26951__auto___32581 = G__32582;
continue;
} else {
}
break;
}

var G__32531 = args32529.length;
switch (G__32531) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32529.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30011__auto___32584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto___32584,out){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto___32584,out){
return (function (state_32555){
var state_val_32556 = (state_32555[(1)]);
if((state_val_32556 === (7))){
var inst_32550 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32557_32585 = state_32555__$1;
(statearr_32557_32585[(2)] = inst_32550);

(statearr_32557_32585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (1))){
var inst_32532 = null;
var state_32555__$1 = (function (){var statearr_32558 = state_32555;
(statearr_32558[(7)] = inst_32532);

return statearr_32558;
})();
var statearr_32559_32586 = state_32555__$1;
(statearr_32559_32586[(2)] = null);

(statearr_32559_32586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (4))){
var inst_32535 = (state_32555[(8)]);
var inst_32535__$1 = (state_32555[(2)]);
var inst_32536 = (inst_32535__$1 == null);
var inst_32537 = cljs.core.not.call(null,inst_32536);
var state_32555__$1 = (function (){var statearr_32560 = state_32555;
(statearr_32560[(8)] = inst_32535__$1);

return statearr_32560;
})();
if(inst_32537){
var statearr_32561_32587 = state_32555__$1;
(statearr_32561_32587[(1)] = (5));

} else {
var statearr_32562_32588 = state_32555__$1;
(statearr_32562_32588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (6))){
var state_32555__$1 = state_32555;
var statearr_32563_32589 = state_32555__$1;
(statearr_32563_32589[(2)] = null);

(statearr_32563_32589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (3))){
var inst_32552 = (state_32555[(2)]);
var inst_32553 = cljs.core.async.close_BANG_.call(null,out);
var state_32555__$1 = (function (){var statearr_32564 = state_32555;
(statearr_32564[(9)] = inst_32552);

return statearr_32564;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32555__$1,inst_32553);
} else {
if((state_val_32556 === (2))){
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32555__$1,(4),ch);
} else {
if((state_val_32556 === (11))){
var inst_32535 = (state_32555[(8)]);
var inst_32544 = (state_32555[(2)]);
var inst_32532 = inst_32535;
var state_32555__$1 = (function (){var statearr_32565 = state_32555;
(statearr_32565[(10)] = inst_32544);

(statearr_32565[(7)] = inst_32532);

return statearr_32565;
})();
var statearr_32566_32590 = state_32555__$1;
(statearr_32566_32590[(2)] = null);

(statearr_32566_32590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (9))){
var inst_32535 = (state_32555[(8)]);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32555__$1,(11),out,inst_32535);
} else {
if((state_val_32556 === (5))){
var inst_32532 = (state_32555[(7)]);
var inst_32535 = (state_32555[(8)]);
var inst_32539 = cljs.core._EQ_.call(null,inst_32535,inst_32532);
var state_32555__$1 = state_32555;
if(inst_32539){
var statearr_32568_32591 = state_32555__$1;
(statearr_32568_32591[(1)] = (8));

} else {
var statearr_32569_32592 = state_32555__$1;
(statearr_32569_32592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (10))){
var inst_32547 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32570_32593 = state_32555__$1;
(statearr_32570_32593[(2)] = inst_32547);

(statearr_32570_32593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (8))){
var inst_32532 = (state_32555[(7)]);
var tmp32567 = inst_32532;
var inst_32532__$1 = tmp32567;
var state_32555__$1 = (function (){var statearr_32571 = state_32555;
(statearr_32571[(7)] = inst_32532__$1);

return statearr_32571;
})();
var statearr_32572_32594 = state_32555__$1;
(statearr_32572_32594[(2)] = null);

(statearr_32572_32594[(1)] = (2));


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
});})(c__30011__auto___32584,out))
;
return ((function (switch__29899__auto__,c__30011__auto___32584,out){
return (function() {
var cljs$core$async$state_machine__29900__auto__ = null;
var cljs$core$async$state_machine__29900__auto____0 = (function (){
var statearr_32576 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32576[(0)] = cljs$core$async$state_machine__29900__auto__);

(statearr_32576[(1)] = (1));

return statearr_32576;
});
var cljs$core$async$state_machine__29900__auto____1 = (function (state_32555){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_32555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e32577){if((e32577 instanceof Object)){
var ex__29903__auto__ = e32577;
var statearr_32578_32595 = state_32555;
(statearr_32578_32595[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32596 = state_32555;
state_32555 = G__32596;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
cljs$core$async$state_machine__29900__auto__ = function(state_32555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29900__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29900__auto____1.call(this,state_32555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29900__auto____0;
cljs$core$async$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29900__auto____1;
return cljs$core$async$state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto___32584,out))
})();
var state__30013__auto__ = (function (){var statearr_32579 = f__30012__auto__.call(null);
(statearr_32579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___32584);

return statearr_32579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto___32584,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32597 = [];
var len__26950__auto___32667 = arguments.length;
var i__26951__auto___32668 = (0);
while(true){
if((i__26951__auto___32668 < len__26950__auto___32667)){
args32597.push((arguments[i__26951__auto___32668]));

var G__32669 = (i__26951__auto___32668 + (1));
i__26951__auto___32668 = G__32669;
continue;
} else {
}
break;
}

var G__32599 = args32597.length;
switch (G__32599) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32597.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30011__auto___32671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto___32671,out){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto___32671,out){
return (function (state_32637){
var state_val_32638 = (state_32637[(1)]);
if((state_val_32638 === (7))){
var inst_32633 = (state_32637[(2)]);
var state_32637__$1 = state_32637;
var statearr_32639_32672 = state_32637__$1;
(statearr_32639_32672[(2)] = inst_32633);

(statearr_32639_32672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32638 === (1))){
var inst_32600 = (new Array(n));
var inst_32601 = inst_32600;
var inst_32602 = (0);
var state_32637__$1 = (function (){var statearr_32640 = state_32637;
(statearr_32640[(7)] = inst_32602);

(statearr_32640[(8)] = inst_32601);

return statearr_32640;
})();
var statearr_32641_32673 = state_32637__$1;
(statearr_32641_32673[(2)] = null);

(statearr_32641_32673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32638 === (4))){
var inst_32605 = (state_32637[(9)]);
var inst_32605__$1 = (state_32637[(2)]);
var inst_32606 = (inst_32605__$1 == null);
var inst_32607 = cljs.core.not.call(null,inst_32606);
var state_32637__$1 = (function (){var statearr_32642 = state_32637;
(statearr_32642[(9)] = inst_32605__$1);

return statearr_32642;
})();
if(inst_32607){
var statearr_32643_32674 = state_32637__$1;
(statearr_32643_32674[(1)] = (5));

} else {
var statearr_32644_32675 = state_32637__$1;
(statearr_32644_32675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32638 === (15))){
var inst_32627 = (state_32637[(2)]);
var state_32637__$1 = state_32637;
var statearr_32645_32676 = state_32637__$1;
(statearr_32645_32676[(2)] = inst_32627);

(statearr_32645_32676[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32638 === (13))){
var state_32637__$1 = state_32637;
var statearr_32646_32677 = state_32637__$1;
(statearr_32646_32677[(2)] = null);

(statearr_32646_32677[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32638 === (6))){
var inst_32602 = (state_32637[(7)]);
var inst_32623 = (inst_32602 > (0));
var state_32637__$1 = state_32637;
if(cljs.core.truth_(inst_32623)){
var statearr_32647_32678 = state_32637__$1;
(statearr_32647_32678[(1)] = (12));

} else {
var statearr_32648_32679 = state_32637__$1;
(statearr_32648_32679[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32638 === (3))){
var inst_32635 = (state_32637[(2)]);
var state_32637__$1 = state_32637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32637__$1,inst_32635);
} else {
if((state_val_32638 === (12))){
var inst_32601 = (state_32637[(8)]);
var inst_32625 = cljs.core.vec.call(null,inst_32601);
var state_32637__$1 = state_32637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32637__$1,(15),out,inst_32625);
} else {
if((state_val_32638 === (2))){
var state_32637__$1 = state_32637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32637__$1,(4),ch);
} else {
if((state_val_32638 === (11))){
var inst_32617 = (state_32637[(2)]);
var inst_32618 = (new Array(n));
var inst_32601 = inst_32618;
var inst_32602 = (0);
var state_32637__$1 = (function (){var statearr_32649 = state_32637;
(statearr_32649[(7)] = inst_32602);

(statearr_32649[(8)] = inst_32601);

(statearr_32649[(10)] = inst_32617);

return statearr_32649;
})();
var statearr_32650_32680 = state_32637__$1;
(statearr_32650_32680[(2)] = null);

(statearr_32650_32680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32638 === (9))){
var inst_32601 = (state_32637[(8)]);
var inst_32615 = cljs.core.vec.call(null,inst_32601);
var state_32637__$1 = state_32637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32637__$1,(11),out,inst_32615);
} else {
if((state_val_32638 === (5))){
var inst_32602 = (state_32637[(7)]);
var inst_32605 = (state_32637[(9)]);
var inst_32601 = (state_32637[(8)]);
var inst_32610 = (state_32637[(11)]);
var inst_32609 = (inst_32601[inst_32602] = inst_32605);
var inst_32610__$1 = (inst_32602 + (1));
var inst_32611 = (inst_32610__$1 < n);
var state_32637__$1 = (function (){var statearr_32651 = state_32637;
(statearr_32651[(12)] = inst_32609);

(statearr_32651[(11)] = inst_32610__$1);

return statearr_32651;
})();
if(cljs.core.truth_(inst_32611)){
var statearr_32652_32681 = state_32637__$1;
(statearr_32652_32681[(1)] = (8));

} else {
var statearr_32653_32682 = state_32637__$1;
(statearr_32653_32682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32638 === (14))){
var inst_32630 = (state_32637[(2)]);
var inst_32631 = cljs.core.async.close_BANG_.call(null,out);
var state_32637__$1 = (function (){var statearr_32655 = state_32637;
(statearr_32655[(13)] = inst_32630);

return statearr_32655;
})();
var statearr_32656_32683 = state_32637__$1;
(statearr_32656_32683[(2)] = inst_32631);

(statearr_32656_32683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32638 === (10))){
var inst_32621 = (state_32637[(2)]);
var state_32637__$1 = state_32637;
var statearr_32657_32684 = state_32637__$1;
(statearr_32657_32684[(2)] = inst_32621);

(statearr_32657_32684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32638 === (8))){
var inst_32601 = (state_32637[(8)]);
var inst_32610 = (state_32637[(11)]);
var tmp32654 = inst_32601;
var inst_32601__$1 = tmp32654;
var inst_32602 = inst_32610;
var state_32637__$1 = (function (){var statearr_32658 = state_32637;
(statearr_32658[(7)] = inst_32602);

(statearr_32658[(8)] = inst_32601__$1);

return statearr_32658;
})();
var statearr_32659_32685 = state_32637__$1;
(statearr_32659_32685[(2)] = null);

(statearr_32659_32685[(1)] = (2));


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
});})(c__30011__auto___32671,out))
;
return ((function (switch__29899__auto__,c__30011__auto___32671,out){
return (function() {
var cljs$core$async$state_machine__29900__auto__ = null;
var cljs$core$async$state_machine__29900__auto____0 = (function (){
var statearr_32663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32663[(0)] = cljs$core$async$state_machine__29900__auto__);

(statearr_32663[(1)] = (1));

return statearr_32663;
});
var cljs$core$async$state_machine__29900__auto____1 = (function (state_32637){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_32637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e32664){if((e32664 instanceof Object)){
var ex__29903__auto__ = e32664;
var statearr_32665_32686 = state_32637;
(statearr_32665_32686[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32687 = state_32637;
state_32637 = G__32687;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
cljs$core$async$state_machine__29900__auto__ = function(state_32637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29900__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29900__auto____1.call(this,state_32637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29900__auto____0;
cljs$core$async$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29900__auto____1;
return cljs$core$async$state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto___32671,out))
})();
var state__30013__auto__ = (function (){var statearr_32666 = f__30012__auto__.call(null);
(statearr_32666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___32671);

return statearr_32666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto___32671,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32688 = [];
var len__26950__auto___32762 = arguments.length;
var i__26951__auto___32763 = (0);
while(true){
if((i__26951__auto___32763 < len__26950__auto___32762)){
args32688.push((arguments[i__26951__auto___32763]));

var G__32764 = (i__26951__auto___32763 + (1));
i__26951__auto___32763 = G__32764;
continue;
} else {
}
break;
}

var G__32690 = args32688.length;
switch (G__32690) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32688.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30011__auto___32766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto___32766,out){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto___32766,out){
return (function (state_32732){
var state_val_32733 = (state_32732[(1)]);
if((state_val_32733 === (7))){
var inst_32728 = (state_32732[(2)]);
var state_32732__$1 = state_32732;
var statearr_32734_32767 = state_32732__$1;
(statearr_32734_32767[(2)] = inst_32728);

(statearr_32734_32767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (1))){
var inst_32691 = [];
var inst_32692 = inst_32691;
var inst_32693 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32732__$1 = (function (){var statearr_32735 = state_32732;
(statearr_32735[(7)] = inst_32693);

(statearr_32735[(8)] = inst_32692);

return statearr_32735;
})();
var statearr_32736_32768 = state_32732__$1;
(statearr_32736_32768[(2)] = null);

(statearr_32736_32768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (4))){
var inst_32696 = (state_32732[(9)]);
var inst_32696__$1 = (state_32732[(2)]);
var inst_32697 = (inst_32696__$1 == null);
var inst_32698 = cljs.core.not.call(null,inst_32697);
var state_32732__$1 = (function (){var statearr_32737 = state_32732;
(statearr_32737[(9)] = inst_32696__$1);

return statearr_32737;
})();
if(inst_32698){
var statearr_32738_32769 = state_32732__$1;
(statearr_32738_32769[(1)] = (5));

} else {
var statearr_32739_32770 = state_32732__$1;
(statearr_32739_32770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (15))){
var inst_32722 = (state_32732[(2)]);
var state_32732__$1 = state_32732;
var statearr_32740_32771 = state_32732__$1;
(statearr_32740_32771[(2)] = inst_32722);

(statearr_32740_32771[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (13))){
var state_32732__$1 = state_32732;
var statearr_32741_32772 = state_32732__$1;
(statearr_32741_32772[(2)] = null);

(statearr_32741_32772[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (6))){
var inst_32692 = (state_32732[(8)]);
var inst_32717 = inst_32692.length;
var inst_32718 = (inst_32717 > (0));
var state_32732__$1 = state_32732;
if(cljs.core.truth_(inst_32718)){
var statearr_32742_32773 = state_32732__$1;
(statearr_32742_32773[(1)] = (12));

} else {
var statearr_32743_32774 = state_32732__$1;
(statearr_32743_32774[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (3))){
var inst_32730 = (state_32732[(2)]);
var state_32732__$1 = state_32732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32732__$1,inst_32730);
} else {
if((state_val_32733 === (12))){
var inst_32692 = (state_32732[(8)]);
var inst_32720 = cljs.core.vec.call(null,inst_32692);
var state_32732__$1 = state_32732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32732__$1,(15),out,inst_32720);
} else {
if((state_val_32733 === (2))){
var state_32732__$1 = state_32732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32732__$1,(4),ch);
} else {
if((state_val_32733 === (11))){
var inst_32700 = (state_32732[(10)]);
var inst_32696 = (state_32732[(9)]);
var inst_32710 = (state_32732[(2)]);
var inst_32711 = [];
var inst_32712 = inst_32711.push(inst_32696);
var inst_32692 = inst_32711;
var inst_32693 = inst_32700;
var state_32732__$1 = (function (){var statearr_32744 = state_32732;
(statearr_32744[(7)] = inst_32693);

(statearr_32744[(8)] = inst_32692);

(statearr_32744[(11)] = inst_32712);

(statearr_32744[(12)] = inst_32710);

return statearr_32744;
})();
var statearr_32745_32775 = state_32732__$1;
(statearr_32745_32775[(2)] = null);

(statearr_32745_32775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (9))){
var inst_32692 = (state_32732[(8)]);
var inst_32708 = cljs.core.vec.call(null,inst_32692);
var state_32732__$1 = state_32732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32732__$1,(11),out,inst_32708);
} else {
if((state_val_32733 === (5))){
var inst_32693 = (state_32732[(7)]);
var inst_32700 = (state_32732[(10)]);
var inst_32696 = (state_32732[(9)]);
var inst_32700__$1 = f.call(null,inst_32696);
var inst_32701 = cljs.core._EQ_.call(null,inst_32700__$1,inst_32693);
var inst_32702 = cljs.core.keyword_identical_QMARK_.call(null,inst_32693,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32703 = (inst_32701) || (inst_32702);
var state_32732__$1 = (function (){var statearr_32746 = state_32732;
(statearr_32746[(10)] = inst_32700__$1);

return statearr_32746;
})();
if(cljs.core.truth_(inst_32703)){
var statearr_32747_32776 = state_32732__$1;
(statearr_32747_32776[(1)] = (8));

} else {
var statearr_32748_32777 = state_32732__$1;
(statearr_32748_32777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (14))){
var inst_32725 = (state_32732[(2)]);
var inst_32726 = cljs.core.async.close_BANG_.call(null,out);
var state_32732__$1 = (function (){var statearr_32750 = state_32732;
(statearr_32750[(13)] = inst_32725);

return statearr_32750;
})();
var statearr_32751_32778 = state_32732__$1;
(statearr_32751_32778[(2)] = inst_32726);

(statearr_32751_32778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (10))){
var inst_32715 = (state_32732[(2)]);
var state_32732__$1 = state_32732;
var statearr_32752_32779 = state_32732__$1;
(statearr_32752_32779[(2)] = inst_32715);

(statearr_32752_32779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32733 === (8))){
var inst_32700 = (state_32732[(10)]);
var inst_32692 = (state_32732[(8)]);
var inst_32696 = (state_32732[(9)]);
var inst_32705 = inst_32692.push(inst_32696);
var tmp32749 = inst_32692;
var inst_32692__$1 = tmp32749;
var inst_32693 = inst_32700;
var state_32732__$1 = (function (){var statearr_32753 = state_32732;
(statearr_32753[(14)] = inst_32705);

(statearr_32753[(7)] = inst_32693);

(statearr_32753[(8)] = inst_32692__$1);

return statearr_32753;
})();
var statearr_32754_32780 = state_32732__$1;
(statearr_32754_32780[(2)] = null);

(statearr_32754_32780[(1)] = (2));


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
});})(c__30011__auto___32766,out))
;
return ((function (switch__29899__auto__,c__30011__auto___32766,out){
return (function() {
var cljs$core$async$state_machine__29900__auto__ = null;
var cljs$core$async$state_machine__29900__auto____0 = (function (){
var statearr_32758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32758[(0)] = cljs$core$async$state_machine__29900__auto__);

(statearr_32758[(1)] = (1));

return statearr_32758;
});
var cljs$core$async$state_machine__29900__auto____1 = (function (state_32732){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_32732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e32759){if((e32759 instanceof Object)){
var ex__29903__auto__ = e32759;
var statearr_32760_32781 = state_32732;
(statearr_32760_32781[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32782 = state_32732;
state_32732 = G__32782;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
cljs$core$async$state_machine__29900__auto__ = function(state_32732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29900__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29900__auto____1.call(this,state_32732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29900__auto____0;
cljs$core$async$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29900__auto____1;
return cljs$core$async$state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto___32766,out))
})();
var state__30013__auto__ = (function (){var statearr_32761 = f__30012__auto__.call(null);
(statearr_32761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___32766);

return statearr_32761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto___32766,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map