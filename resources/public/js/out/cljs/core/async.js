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
var args30090 = [];
var len__26984__auto___30096 = arguments.length;
var i__26985__auto___30097 = (0);
while(true){
if((i__26985__auto___30097 < len__26984__auto___30096)){
args30090.push((arguments[i__26985__auto___30097]));

var G__30098 = (i__26985__auto___30097 + (1));
i__26985__auto___30097 = G__30098;
continue;
} else {
}
break;
}

var G__30092 = args30090.length;
switch (G__30092) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30090.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30093 = (function (f,blockable,meta30094){
this.f = f;
this.blockable = blockable;
this.meta30094 = meta30094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30095,meta30094__$1){
var self__ = this;
var _30095__$1 = this;
return (new cljs.core.async.t_cljs$core$async30093(self__.f,self__.blockable,meta30094__$1));
});

cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30095){
var self__ = this;
var _30095__$1 = this;
return self__.meta30094;
});

cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30094","meta30094",-896825575,null)], null);
});

cljs.core.async.t_cljs$core$async30093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30093";

cljs.core.async.t_cljs$core$async30093.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"cljs.core.async/t_cljs$core$async30093");
});

cljs.core.async.__GT_t_cljs$core$async30093 = (function cljs$core$async$__GT_t_cljs$core$async30093(f__$1,blockable__$1,meta30094){
return (new cljs.core.async.t_cljs$core$async30093(f__$1,blockable__$1,meta30094));
});

}

return (new cljs.core.async.t_cljs$core$async30093(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args30102 = [];
var len__26984__auto___30105 = arguments.length;
var i__26985__auto___30106 = (0);
while(true){
if((i__26985__auto___30106 < len__26984__auto___30105)){
args30102.push((arguments[i__26985__auto___30106]));

var G__30107 = (i__26985__auto___30106 + (1));
i__26985__auto___30106 = G__30107;
continue;
} else {
}
break;
}

var G__30104 = args30102.length;
switch (G__30104) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30102.length)].join('')));

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
var args30109 = [];
var len__26984__auto___30112 = arguments.length;
var i__26985__auto___30113 = (0);
while(true){
if((i__26985__auto___30113 < len__26984__auto___30112)){
args30109.push((arguments[i__26985__auto___30113]));

var G__30114 = (i__26985__auto___30113 + (1));
i__26985__auto___30113 = G__30114;
continue;
} else {
}
break;
}

var G__30111 = args30109.length;
switch (G__30111) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30109.length)].join('')));

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
var args30116 = [];
var len__26984__auto___30119 = arguments.length;
var i__26985__auto___30120 = (0);
while(true){
if((i__26985__auto___30120 < len__26984__auto___30119)){
args30116.push((arguments[i__26985__auto___30120]));

var G__30121 = (i__26985__auto___30120 + (1));
i__26985__auto___30120 = G__30121;
continue;
} else {
}
break;
}

var G__30118 = args30116.length;
switch (G__30118) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30116.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30123 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30123);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30123,ret){
return (function (){
return fn1.call(null,val_30123);
});})(val_30123,ret))
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
var args30124 = [];
var len__26984__auto___30127 = arguments.length;
var i__26985__auto___30128 = (0);
while(true){
if((i__26985__auto___30128 < len__26984__auto___30127)){
args30124.push((arguments[i__26985__auto___30128]));

var G__30129 = (i__26985__auto___30128 + (1));
i__26985__auto___30128 = G__30129;
continue;
} else {
}
break;
}

var G__30126 = args30124.length;
switch (G__30126) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30124.length)].join('')));

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
var n__26829__auto___30131 = n;
var x_30132 = (0);
while(true){
if((x_30132 < n__26829__auto___30131)){
(a[x_30132] = (0));

var G__30133 = (x_30132 + (1));
x_30132 = G__30133;
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

var G__30134 = (i + (1));
i = G__30134;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30138 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30138 = (function (alt_flag,flag,meta30139){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30139 = meta30139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30140,meta30139__$1){
var self__ = this;
var _30140__$1 = this;
return (new cljs.core.async.t_cljs$core$async30138(self__.alt_flag,self__.flag,meta30139__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30138.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30140){
var self__ = this;
var _30140__$1 = this;
return self__.meta30139;
});})(flag))
;

cljs.core.async.t_cljs$core$async30138.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30138.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30138.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30139","meta30139",-1722471586,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30138";

cljs.core.async.t_cljs$core$async30138.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"cljs.core.async/t_cljs$core$async30138");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30138 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30138(alt_flag__$1,flag__$1,meta30139){
return (new cljs.core.async.t_cljs$core$async30138(alt_flag__$1,flag__$1,meta30139));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30138(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30144 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30144 = (function (alt_handler,flag,cb,meta30145){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30145 = meta30145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30146,meta30145__$1){
var self__ = this;
var _30146__$1 = this;
return (new cljs.core.async.t_cljs$core$async30144(self__.alt_handler,self__.flag,self__.cb,meta30145__$1));
});

cljs.core.async.t_cljs$core$async30144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30146){
var self__ = this;
var _30146__$1 = this;
return self__.meta30145;
});

cljs.core.async.t_cljs$core$async30144.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30144.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30144.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30144.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30145","meta30145",-207215959,null)], null);
});

cljs.core.async.t_cljs$core$async30144.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30144";

cljs.core.async.t_cljs$core$async30144.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"cljs.core.async/t_cljs$core$async30144");
});

cljs.core.async.__GT_t_cljs$core$async30144 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30144(alt_handler__$1,flag__$1,cb__$1,meta30145){
return (new cljs.core.async.t_cljs$core$async30144(alt_handler__$1,flag__$1,cb__$1,meta30145));
});

}

return (new cljs.core.async.t_cljs$core$async30144(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30147_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30147_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30148_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30148_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25914__auto__ = wport;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30149 = (i + (1));
i = G__30149;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25914__auto__ = ret;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__25902__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25902__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25902__auto__;
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
var args__26991__auto__ = [];
var len__26984__auto___30155 = arguments.length;
var i__26985__auto___30156 = (0);
while(true){
if((i__26985__auto___30156 < len__26984__auto___30155)){
args__26991__auto__.push((arguments[i__26985__auto___30156]));

var G__30157 = (i__26985__auto___30156 + (1));
i__26985__auto___30156 = G__30157;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30152){
var map__30153 = p__30152;
var map__30153__$1 = ((((!((map__30153 == null)))?((((map__30153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30153):map__30153);
var opts = map__30153__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30150){
var G__30151 = cljs.core.first.call(null,seq30150);
var seq30150__$1 = cljs.core.next.call(null,seq30150);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30151,seq30150__$1);
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
var args30158 = [];
var len__26984__auto___30208 = arguments.length;
var i__26985__auto___30209 = (0);
while(true){
if((i__26985__auto___30209 < len__26984__auto___30208)){
args30158.push((arguments[i__26985__auto___30209]));

var G__30210 = (i__26985__auto___30209 + (1));
i__26985__auto___30209 = G__30210;
continue;
} else {
}
break;
}

var G__30160 = args30158.length;
switch (G__30160) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30158.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30045__auto___30212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto___30212){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto___30212){
return (function (state_30184){
var state_val_30185 = (state_30184[(1)]);
if((state_val_30185 === (7))){
var inst_30180 = (state_30184[(2)]);
var state_30184__$1 = state_30184;
var statearr_30186_30213 = state_30184__$1;
(statearr_30186_30213[(2)] = inst_30180);

(statearr_30186_30213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30185 === (1))){
var state_30184__$1 = state_30184;
var statearr_30187_30214 = state_30184__$1;
(statearr_30187_30214[(2)] = null);

(statearr_30187_30214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30185 === (4))){
var inst_30163 = (state_30184[(7)]);
var inst_30163__$1 = (state_30184[(2)]);
var inst_30164 = (inst_30163__$1 == null);
var state_30184__$1 = (function (){var statearr_30188 = state_30184;
(statearr_30188[(7)] = inst_30163__$1);

return statearr_30188;
})();
if(cljs.core.truth_(inst_30164)){
var statearr_30189_30215 = state_30184__$1;
(statearr_30189_30215[(1)] = (5));

} else {
var statearr_30190_30216 = state_30184__$1;
(statearr_30190_30216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30185 === (13))){
var state_30184__$1 = state_30184;
var statearr_30191_30217 = state_30184__$1;
(statearr_30191_30217[(2)] = null);

(statearr_30191_30217[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30185 === (6))){
var inst_30163 = (state_30184[(7)]);
var state_30184__$1 = state_30184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30184__$1,(11),to,inst_30163);
} else {
if((state_val_30185 === (3))){
var inst_30182 = (state_30184[(2)]);
var state_30184__$1 = state_30184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30184__$1,inst_30182);
} else {
if((state_val_30185 === (12))){
var state_30184__$1 = state_30184;
var statearr_30192_30218 = state_30184__$1;
(statearr_30192_30218[(2)] = null);

(statearr_30192_30218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30185 === (2))){
var state_30184__$1 = state_30184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30184__$1,(4),from);
} else {
if((state_val_30185 === (11))){
var inst_30173 = (state_30184[(2)]);
var state_30184__$1 = state_30184;
if(cljs.core.truth_(inst_30173)){
var statearr_30193_30219 = state_30184__$1;
(statearr_30193_30219[(1)] = (12));

} else {
var statearr_30194_30220 = state_30184__$1;
(statearr_30194_30220[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30185 === (9))){
var state_30184__$1 = state_30184;
var statearr_30195_30221 = state_30184__$1;
(statearr_30195_30221[(2)] = null);

(statearr_30195_30221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30185 === (5))){
var state_30184__$1 = state_30184;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30196_30222 = state_30184__$1;
(statearr_30196_30222[(1)] = (8));

} else {
var statearr_30197_30223 = state_30184__$1;
(statearr_30197_30223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30185 === (14))){
var inst_30178 = (state_30184[(2)]);
var state_30184__$1 = state_30184;
var statearr_30198_30224 = state_30184__$1;
(statearr_30198_30224[(2)] = inst_30178);

(statearr_30198_30224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30185 === (10))){
var inst_30170 = (state_30184[(2)]);
var state_30184__$1 = state_30184;
var statearr_30199_30225 = state_30184__$1;
(statearr_30199_30225[(2)] = inst_30170);

(statearr_30199_30225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30185 === (8))){
var inst_30167 = cljs.core.async.close_BANG_.call(null,to);
var state_30184__$1 = state_30184;
var statearr_30200_30226 = state_30184__$1;
(statearr_30200_30226[(2)] = inst_30167);

(statearr_30200_30226[(1)] = (10));


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
});})(c__30045__auto___30212))
;
return ((function (switch__29933__auto__,c__30045__auto___30212){
return (function() {
var cljs$core$async$state_machine__29934__auto__ = null;
var cljs$core$async$state_machine__29934__auto____0 = (function (){
var statearr_30204 = [null,null,null,null,null,null,null,null];
(statearr_30204[(0)] = cljs$core$async$state_machine__29934__auto__);

(statearr_30204[(1)] = (1));

return statearr_30204;
});
var cljs$core$async$state_machine__29934__auto____1 = (function (state_30184){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_30184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e30205){if((e30205 instanceof Object)){
var ex__29937__auto__ = e30205;
var statearr_30206_30227 = state_30184;
(statearr_30206_30227[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30228 = state_30184;
state_30184 = G__30228;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
cljs$core$async$state_machine__29934__auto__ = function(state_30184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29934__auto____1.call(this,state_30184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29934__auto____0;
cljs$core$async$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29934__auto____1;
return cljs$core$async$state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto___30212))
})();
var state__30047__auto__ = (function (){var statearr_30207 = f__30046__auto__.call(null);
(statearr_30207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___30212);

return statearr_30207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto___30212))
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
return (function (p__30412){
var vec__30413 = p__30412;
var v = cljs.core.nth.call(null,vec__30413,(0),null);
var p = cljs.core.nth.call(null,vec__30413,(1),null);
var job = vec__30413;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30045__auto___30595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto___30595,res,vec__30413,v,p,job,jobs,results){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto___30595,res,vec__30413,v,p,job,jobs,results){
return (function (state_30418){
var state_val_30419 = (state_30418[(1)]);
if((state_val_30419 === (1))){
var state_30418__$1 = state_30418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30418__$1,(2),res,v);
} else {
if((state_val_30419 === (2))){
var inst_30415 = (state_30418[(2)]);
var inst_30416 = cljs.core.async.close_BANG_.call(null,res);
var state_30418__$1 = (function (){var statearr_30420 = state_30418;
(statearr_30420[(7)] = inst_30415);

return statearr_30420;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30418__$1,inst_30416);
} else {
return null;
}
}
});})(c__30045__auto___30595,res,vec__30413,v,p,job,jobs,results))
;
return ((function (switch__29933__auto__,c__30045__auto___30595,res,vec__30413,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____0 = (function (){
var statearr_30424 = [null,null,null,null,null,null,null,null];
(statearr_30424[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__);

(statearr_30424[(1)] = (1));

return statearr_30424;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____1 = (function (state_30418){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_30418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e30425){if((e30425 instanceof Object)){
var ex__29937__auto__ = e30425;
var statearr_30426_30596 = state_30418;
(statearr_30426_30596[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30597 = state_30418;
state_30418 = G__30597;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__ = function(state_30418){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____1.call(this,state_30418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto___30595,res,vec__30413,v,p,job,jobs,results))
})();
var state__30047__auto__ = (function (){var statearr_30427 = f__30046__auto__.call(null);
(statearr_30427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___30595);

return statearr_30427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto___30595,res,vec__30413,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30428){
var vec__30429 = p__30428;
var v = cljs.core.nth.call(null,vec__30429,(0),null);
var p = cljs.core.nth.call(null,vec__30429,(1),null);
var job = vec__30429;
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
var n__26829__auto___30598 = n;
var __30599 = (0);
while(true){
if((__30599 < n__26829__auto___30598)){
var G__30430_30600 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30430_30600) {
case "compute":
var c__30045__auto___30602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30599,c__30045__auto___30602,G__30430_30600,n__26829__auto___30598,jobs,results,process,async){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (__30599,c__30045__auto___30602,G__30430_30600,n__26829__auto___30598,jobs,results,process,async){
return (function (state_30443){
var state_val_30444 = (state_30443[(1)]);
if((state_val_30444 === (1))){
var state_30443__$1 = state_30443;
var statearr_30445_30603 = state_30443__$1;
(statearr_30445_30603[(2)] = null);

(statearr_30445_30603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30444 === (2))){
var state_30443__$1 = state_30443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30443__$1,(4),jobs);
} else {
if((state_val_30444 === (3))){
var inst_30441 = (state_30443[(2)]);
var state_30443__$1 = state_30443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30443__$1,inst_30441);
} else {
if((state_val_30444 === (4))){
var inst_30433 = (state_30443[(2)]);
var inst_30434 = process.call(null,inst_30433);
var state_30443__$1 = state_30443;
if(cljs.core.truth_(inst_30434)){
var statearr_30446_30604 = state_30443__$1;
(statearr_30446_30604[(1)] = (5));

} else {
var statearr_30447_30605 = state_30443__$1;
(statearr_30447_30605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30444 === (5))){
var state_30443__$1 = state_30443;
var statearr_30448_30606 = state_30443__$1;
(statearr_30448_30606[(2)] = null);

(statearr_30448_30606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30444 === (6))){
var state_30443__$1 = state_30443;
var statearr_30449_30607 = state_30443__$1;
(statearr_30449_30607[(2)] = null);

(statearr_30449_30607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30444 === (7))){
var inst_30439 = (state_30443[(2)]);
var state_30443__$1 = state_30443;
var statearr_30450_30608 = state_30443__$1;
(statearr_30450_30608[(2)] = inst_30439);

(statearr_30450_30608[(1)] = (3));


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
});})(__30599,c__30045__auto___30602,G__30430_30600,n__26829__auto___30598,jobs,results,process,async))
;
return ((function (__30599,switch__29933__auto__,c__30045__auto___30602,G__30430_30600,n__26829__auto___30598,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____0 = (function (){
var statearr_30454 = [null,null,null,null,null,null,null];
(statearr_30454[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__);

(statearr_30454[(1)] = (1));

return statearr_30454;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____1 = (function (state_30443){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_30443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e30455){if((e30455 instanceof Object)){
var ex__29937__auto__ = e30455;
var statearr_30456_30609 = state_30443;
(statearr_30456_30609[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30610 = state_30443;
state_30443 = G__30610;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__ = function(state_30443){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____1.call(this,state_30443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__;
})()
;})(__30599,switch__29933__auto__,c__30045__auto___30602,G__30430_30600,n__26829__auto___30598,jobs,results,process,async))
})();
var state__30047__auto__ = (function (){var statearr_30457 = f__30046__auto__.call(null);
(statearr_30457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___30602);

return statearr_30457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(__30599,c__30045__auto___30602,G__30430_30600,n__26829__auto___30598,jobs,results,process,async))
);


break;
case "async":
var c__30045__auto___30611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30599,c__30045__auto___30611,G__30430_30600,n__26829__auto___30598,jobs,results,process,async){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (__30599,c__30045__auto___30611,G__30430_30600,n__26829__auto___30598,jobs,results,process,async){
return (function (state_30470){
var state_val_30471 = (state_30470[(1)]);
if((state_val_30471 === (1))){
var state_30470__$1 = state_30470;
var statearr_30472_30612 = state_30470__$1;
(statearr_30472_30612[(2)] = null);

(statearr_30472_30612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30471 === (2))){
var state_30470__$1 = state_30470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30470__$1,(4),jobs);
} else {
if((state_val_30471 === (3))){
var inst_30468 = (state_30470[(2)]);
var state_30470__$1 = state_30470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30470__$1,inst_30468);
} else {
if((state_val_30471 === (4))){
var inst_30460 = (state_30470[(2)]);
var inst_30461 = async.call(null,inst_30460);
var state_30470__$1 = state_30470;
if(cljs.core.truth_(inst_30461)){
var statearr_30473_30613 = state_30470__$1;
(statearr_30473_30613[(1)] = (5));

} else {
var statearr_30474_30614 = state_30470__$1;
(statearr_30474_30614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30471 === (5))){
var state_30470__$1 = state_30470;
var statearr_30475_30615 = state_30470__$1;
(statearr_30475_30615[(2)] = null);

(statearr_30475_30615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30471 === (6))){
var state_30470__$1 = state_30470;
var statearr_30476_30616 = state_30470__$1;
(statearr_30476_30616[(2)] = null);

(statearr_30476_30616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30471 === (7))){
var inst_30466 = (state_30470[(2)]);
var state_30470__$1 = state_30470;
var statearr_30477_30617 = state_30470__$1;
(statearr_30477_30617[(2)] = inst_30466);

(statearr_30477_30617[(1)] = (3));


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
});})(__30599,c__30045__auto___30611,G__30430_30600,n__26829__auto___30598,jobs,results,process,async))
;
return ((function (__30599,switch__29933__auto__,c__30045__auto___30611,G__30430_30600,n__26829__auto___30598,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____0 = (function (){
var statearr_30481 = [null,null,null,null,null,null,null];
(statearr_30481[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__);

(statearr_30481[(1)] = (1));

return statearr_30481;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____1 = (function (state_30470){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_30470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e30482){if((e30482 instanceof Object)){
var ex__29937__auto__ = e30482;
var statearr_30483_30618 = state_30470;
(statearr_30483_30618[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30619 = state_30470;
state_30470 = G__30619;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__ = function(state_30470){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____1.call(this,state_30470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__;
})()
;})(__30599,switch__29933__auto__,c__30045__auto___30611,G__30430_30600,n__26829__auto___30598,jobs,results,process,async))
})();
var state__30047__auto__ = (function (){var statearr_30484 = f__30046__auto__.call(null);
(statearr_30484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___30611);

return statearr_30484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(__30599,c__30045__auto___30611,G__30430_30600,n__26829__auto___30598,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30620 = (__30599 + (1));
__30599 = G__30620;
continue;
} else {
}
break;
}

var c__30045__auto___30621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto___30621,jobs,results,process,async){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto___30621,jobs,results,process,async){
return (function (state_30506){
var state_val_30507 = (state_30506[(1)]);
if((state_val_30507 === (1))){
var state_30506__$1 = state_30506;
var statearr_30508_30622 = state_30506__$1;
(statearr_30508_30622[(2)] = null);

(statearr_30508_30622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (2))){
var state_30506__$1 = state_30506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30506__$1,(4),from);
} else {
if((state_val_30507 === (3))){
var inst_30504 = (state_30506[(2)]);
var state_30506__$1 = state_30506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30506__$1,inst_30504);
} else {
if((state_val_30507 === (4))){
var inst_30487 = (state_30506[(7)]);
var inst_30487__$1 = (state_30506[(2)]);
var inst_30488 = (inst_30487__$1 == null);
var state_30506__$1 = (function (){var statearr_30509 = state_30506;
(statearr_30509[(7)] = inst_30487__$1);

return statearr_30509;
})();
if(cljs.core.truth_(inst_30488)){
var statearr_30510_30623 = state_30506__$1;
(statearr_30510_30623[(1)] = (5));

} else {
var statearr_30511_30624 = state_30506__$1;
(statearr_30511_30624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (5))){
var inst_30490 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30506__$1 = state_30506;
var statearr_30512_30625 = state_30506__$1;
(statearr_30512_30625[(2)] = inst_30490);

(statearr_30512_30625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (6))){
var inst_30492 = (state_30506[(8)]);
var inst_30487 = (state_30506[(7)]);
var inst_30492__$1 = cljs.core.async.chan.call(null,(1));
var inst_30493 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30494 = [inst_30487,inst_30492__$1];
var inst_30495 = (new cljs.core.PersistentVector(null,2,(5),inst_30493,inst_30494,null));
var state_30506__$1 = (function (){var statearr_30513 = state_30506;
(statearr_30513[(8)] = inst_30492__$1);

return statearr_30513;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30506__$1,(8),jobs,inst_30495);
} else {
if((state_val_30507 === (7))){
var inst_30502 = (state_30506[(2)]);
var state_30506__$1 = state_30506;
var statearr_30514_30626 = state_30506__$1;
(statearr_30514_30626[(2)] = inst_30502);

(statearr_30514_30626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30507 === (8))){
var inst_30492 = (state_30506[(8)]);
var inst_30497 = (state_30506[(2)]);
var state_30506__$1 = (function (){var statearr_30515 = state_30506;
(statearr_30515[(9)] = inst_30497);

return statearr_30515;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30506__$1,(9),results,inst_30492);
} else {
if((state_val_30507 === (9))){
var inst_30499 = (state_30506[(2)]);
var state_30506__$1 = (function (){var statearr_30516 = state_30506;
(statearr_30516[(10)] = inst_30499);

return statearr_30516;
})();
var statearr_30517_30627 = state_30506__$1;
(statearr_30517_30627[(2)] = null);

(statearr_30517_30627[(1)] = (2));


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
});})(c__30045__auto___30621,jobs,results,process,async))
;
return ((function (switch__29933__auto__,c__30045__auto___30621,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____0 = (function (){
var statearr_30521 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30521[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__);

(statearr_30521[(1)] = (1));

return statearr_30521;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____1 = (function (state_30506){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_30506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e30522){if((e30522 instanceof Object)){
var ex__29937__auto__ = e30522;
var statearr_30523_30628 = state_30506;
(statearr_30523_30628[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30629 = state_30506;
state_30506 = G__30629;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__ = function(state_30506){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____1.call(this,state_30506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto___30621,jobs,results,process,async))
})();
var state__30047__auto__ = (function (){var statearr_30524 = f__30046__auto__.call(null);
(statearr_30524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___30621);

return statearr_30524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto___30621,jobs,results,process,async))
);


var c__30045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto__,jobs,results,process,async){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto__,jobs,results,process,async){
return (function (state_30562){
var state_val_30563 = (state_30562[(1)]);
if((state_val_30563 === (7))){
var inst_30558 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
var statearr_30564_30630 = state_30562__$1;
(statearr_30564_30630[(2)] = inst_30558);

(statearr_30564_30630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (20))){
var state_30562__$1 = state_30562;
var statearr_30565_30631 = state_30562__$1;
(statearr_30565_30631[(2)] = null);

(statearr_30565_30631[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (1))){
var state_30562__$1 = state_30562;
var statearr_30566_30632 = state_30562__$1;
(statearr_30566_30632[(2)] = null);

(statearr_30566_30632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (4))){
var inst_30527 = (state_30562[(7)]);
var inst_30527__$1 = (state_30562[(2)]);
var inst_30528 = (inst_30527__$1 == null);
var state_30562__$1 = (function (){var statearr_30567 = state_30562;
(statearr_30567[(7)] = inst_30527__$1);

return statearr_30567;
})();
if(cljs.core.truth_(inst_30528)){
var statearr_30568_30633 = state_30562__$1;
(statearr_30568_30633[(1)] = (5));

} else {
var statearr_30569_30634 = state_30562__$1;
(statearr_30569_30634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (15))){
var inst_30540 = (state_30562[(8)]);
var state_30562__$1 = state_30562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30562__$1,(18),to,inst_30540);
} else {
if((state_val_30563 === (21))){
var inst_30553 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
var statearr_30570_30635 = state_30562__$1;
(statearr_30570_30635[(2)] = inst_30553);

(statearr_30570_30635[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (13))){
var inst_30555 = (state_30562[(2)]);
var state_30562__$1 = (function (){var statearr_30571 = state_30562;
(statearr_30571[(9)] = inst_30555);

return statearr_30571;
})();
var statearr_30572_30636 = state_30562__$1;
(statearr_30572_30636[(2)] = null);

(statearr_30572_30636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (6))){
var inst_30527 = (state_30562[(7)]);
var state_30562__$1 = state_30562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30562__$1,(11),inst_30527);
} else {
if((state_val_30563 === (17))){
var inst_30548 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
if(cljs.core.truth_(inst_30548)){
var statearr_30573_30637 = state_30562__$1;
(statearr_30573_30637[(1)] = (19));

} else {
var statearr_30574_30638 = state_30562__$1;
(statearr_30574_30638[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (3))){
var inst_30560 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30562__$1,inst_30560);
} else {
if((state_val_30563 === (12))){
var inst_30537 = (state_30562[(10)]);
var state_30562__$1 = state_30562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30562__$1,(14),inst_30537);
} else {
if((state_val_30563 === (2))){
var state_30562__$1 = state_30562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30562__$1,(4),results);
} else {
if((state_val_30563 === (19))){
var state_30562__$1 = state_30562;
var statearr_30575_30639 = state_30562__$1;
(statearr_30575_30639[(2)] = null);

(statearr_30575_30639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (11))){
var inst_30537 = (state_30562[(2)]);
var state_30562__$1 = (function (){var statearr_30576 = state_30562;
(statearr_30576[(10)] = inst_30537);

return statearr_30576;
})();
var statearr_30577_30640 = state_30562__$1;
(statearr_30577_30640[(2)] = null);

(statearr_30577_30640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (9))){
var state_30562__$1 = state_30562;
var statearr_30578_30641 = state_30562__$1;
(statearr_30578_30641[(2)] = null);

(statearr_30578_30641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (5))){
var state_30562__$1 = state_30562;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30579_30642 = state_30562__$1;
(statearr_30579_30642[(1)] = (8));

} else {
var statearr_30580_30643 = state_30562__$1;
(statearr_30580_30643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (14))){
var inst_30542 = (state_30562[(11)]);
var inst_30540 = (state_30562[(8)]);
var inst_30540__$1 = (state_30562[(2)]);
var inst_30541 = (inst_30540__$1 == null);
var inst_30542__$1 = cljs.core.not.call(null,inst_30541);
var state_30562__$1 = (function (){var statearr_30581 = state_30562;
(statearr_30581[(11)] = inst_30542__$1);

(statearr_30581[(8)] = inst_30540__$1);

return statearr_30581;
})();
if(inst_30542__$1){
var statearr_30582_30644 = state_30562__$1;
(statearr_30582_30644[(1)] = (15));

} else {
var statearr_30583_30645 = state_30562__$1;
(statearr_30583_30645[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (16))){
var inst_30542 = (state_30562[(11)]);
var state_30562__$1 = state_30562;
var statearr_30584_30646 = state_30562__$1;
(statearr_30584_30646[(2)] = inst_30542);

(statearr_30584_30646[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (10))){
var inst_30534 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
var statearr_30585_30647 = state_30562__$1;
(statearr_30585_30647[(2)] = inst_30534);

(statearr_30585_30647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (18))){
var inst_30545 = (state_30562[(2)]);
var state_30562__$1 = state_30562;
var statearr_30586_30648 = state_30562__$1;
(statearr_30586_30648[(2)] = inst_30545);

(statearr_30586_30648[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30563 === (8))){
var inst_30531 = cljs.core.async.close_BANG_.call(null,to);
var state_30562__$1 = state_30562;
var statearr_30587_30649 = state_30562__$1;
(statearr_30587_30649[(2)] = inst_30531);

(statearr_30587_30649[(1)] = (10));


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
});})(c__30045__auto__,jobs,results,process,async))
;
return ((function (switch__29933__auto__,c__30045__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____0 = (function (){
var statearr_30591 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30591[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__);

(statearr_30591[(1)] = (1));

return statearr_30591;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____1 = (function (state_30562){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_30562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e30592){if((e30592 instanceof Object)){
var ex__29937__auto__ = e30592;
var statearr_30593_30650 = state_30562;
(statearr_30593_30650[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30651 = state_30562;
state_30562 = G__30651;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__ = function(state_30562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____1.call(this,state_30562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29934__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto__,jobs,results,process,async))
})();
var state__30047__auto__ = (function (){var statearr_30594 = f__30046__auto__.call(null);
(statearr_30594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto__);

return statearr_30594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto__,jobs,results,process,async))
);

return c__30045__auto__;
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
var args30652 = [];
var len__26984__auto___30655 = arguments.length;
var i__26985__auto___30656 = (0);
while(true){
if((i__26985__auto___30656 < len__26984__auto___30655)){
args30652.push((arguments[i__26985__auto___30656]));

var G__30657 = (i__26985__auto___30656 + (1));
i__26985__auto___30656 = G__30657;
continue;
} else {
}
break;
}

var G__30654 = args30652.length;
switch (G__30654) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30652.length)].join('')));

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
var args30659 = [];
var len__26984__auto___30662 = arguments.length;
var i__26985__auto___30663 = (0);
while(true){
if((i__26985__auto___30663 < len__26984__auto___30662)){
args30659.push((arguments[i__26985__auto___30663]));

var G__30664 = (i__26985__auto___30663 + (1));
i__26985__auto___30663 = G__30664;
continue;
} else {
}
break;
}

var G__30661 = args30659.length;
switch (G__30661) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30659.length)].join('')));

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
var args30666 = [];
var len__26984__auto___30719 = arguments.length;
var i__26985__auto___30720 = (0);
while(true){
if((i__26985__auto___30720 < len__26984__auto___30719)){
args30666.push((arguments[i__26985__auto___30720]));

var G__30721 = (i__26985__auto___30720 + (1));
i__26985__auto___30720 = G__30721;
continue;
} else {
}
break;
}

var G__30668 = args30666.length;
switch (G__30668) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30666.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30045__auto___30723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto___30723,tc,fc){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto___30723,tc,fc){
return (function (state_30694){
var state_val_30695 = (state_30694[(1)]);
if((state_val_30695 === (7))){
var inst_30690 = (state_30694[(2)]);
var state_30694__$1 = state_30694;
var statearr_30696_30724 = state_30694__$1;
(statearr_30696_30724[(2)] = inst_30690);

(statearr_30696_30724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (1))){
var state_30694__$1 = state_30694;
var statearr_30697_30725 = state_30694__$1;
(statearr_30697_30725[(2)] = null);

(statearr_30697_30725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (4))){
var inst_30671 = (state_30694[(7)]);
var inst_30671__$1 = (state_30694[(2)]);
var inst_30672 = (inst_30671__$1 == null);
var state_30694__$1 = (function (){var statearr_30698 = state_30694;
(statearr_30698[(7)] = inst_30671__$1);

return statearr_30698;
})();
if(cljs.core.truth_(inst_30672)){
var statearr_30699_30726 = state_30694__$1;
(statearr_30699_30726[(1)] = (5));

} else {
var statearr_30700_30727 = state_30694__$1;
(statearr_30700_30727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (13))){
var state_30694__$1 = state_30694;
var statearr_30701_30728 = state_30694__$1;
(statearr_30701_30728[(2)] = null);

(statearr_30701_30728[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (6))){
var inst_30671 = (state_30694[(7)]);
var inst_30677 = p.call(null,inst_30671);
var state_30694__$1 = state_30694;
if(cljs.core.truth_(inst_30677)){
var statearr_30702_30729 = state_30694__$1;
(statearr_30702_30729[(1)] = (9));

} else {
var statearr_30703_30730 = state_30694__$1;
(statearr_30703_30730[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (3))){
var inst_30692 = (state_30694[(2)]);
var state_30694__$1 = state_30694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30694__$1,inst_30692);
} else {
if((state_val_30695 === (12))){
var state_30694__$1 = state_30694;
var statearr_30704_30731 = state_30694__$1;
(statearr_30704_30731[(2)] = null);

(statearr_30704_30731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (2))){
var state_30694__$1 = state_30694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30694__$1,(4),ch);
} else {
if((state_val_30695 === (11))){
var inst_30671 = (state_30694[(7)]);
var inst_30681 = (state_30694[(2)]);
var state_30694__$1 = state_30694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30694__$1,(8),inst_30681,inst_30671);
} else {
if((state_val_30695 === (9))){
var state_30694__$1 = state_30694;
var statearr_30705_30732 = state_30694__$1;
(statearr_30705_30732[(2)] = tc);

(statearr_30705_30732[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (5))){
var inst_30674 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30675 = cljs.core.async.close_BANG_.call(null,fc);
var state_30694__$1 = (function (){var statearr_30706 = state_30694;
(statearr_30706[(8)] = inst_30674);

return statearr_30706;
})();
var statearr_30707_30733 = state_30694__$1;
(statearr_30707_30733[(2)] = inst_30675);

(statearr_30707_30733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (14))){
var inst_30688 = (state_30694[(2)]);
var state_30694__$1 = state_30694;
var statearr_30708_30734 = state_30694__$1;
(statearr_30708_30734[(2)] = inst_30688);

(statearr_30708_30734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (10))){
var state_30694__$1 = state_30694;
var statearr_30709_30735 = state_30694__$1;
(statearr_30709_30735[(2)] = fc);

(statearr_30709_30735[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (8))){
var inst_30683 = (state_30694[(2)]);
var state_30694__$1 = state_30694;
if(cljs.core.truth_(inst_30683)){
var statearr_30710_30736 = state_30694__$1;
(statearr_30710_30736[(1)] = (12));

} else {
var statearr_30711_30737 = state_30694__$1;
(statearr_30711_30737[(1)] = (13));

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
});})(c__30045__auto___30723,tc,fc))
;
return ((function (switch__29933__auto__,c__30045__auto___30723,tc,fc){
return (function() {
var cljs$core$async$state_machine__29934__auto__ = null;
var cljs$core$async$state_machine__29934__auto____0 = (function (){
var statearr_30715 = [null,null,null,null,null,null,null,null,null];
(statearr_30715[(0)] = cljs$core$async$state_machine__29934__auto__);

(statearr_30715[(1)] = (1));

return statearr_30715;
});
var cljs$core$async$state_machine__29934__auto____1 = (function (state_30694){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_30694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e30716){if((e30716 instanceof Object)){
var ex__29937__auto__ = e30716;
var statearr_30717_30738 = state_30694;
(statearr_30717_30738[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30739 = state_30694;
state_30694 = G__30739;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
cljs$core$async$state_machine__29934__auto__ = function(state_30694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29934__auto____1.call(this,state_30694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29934__auto____0;
cljs$core$async$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29934__auto____1;
return cljs$core$async$state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto___30723,tc,fc))
})();
var state__30047__auto__ = (function (){var statearr_30718 = f__30046__auto__.call(null);
(statearr_30718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___30723);

return statearr_30718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto___30723,tc,fc))
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
var c__30045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto__){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto__){
return (function (state_30803){
var state_val_30804 = (state_30803[(1)]);
if((state_val_30804 === (7))){
var inst_30799 = (state_30803[(2)]);
var state_30803__$1 = state_30803;
var statearr_30805_30826 = state_30803__$1;
(statearr_30805_30826[(2)] = inst_30799);

(statearr_30805_30826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30804 === (1))){
var inst_30783 = init;
var state_30803__$1 = (function (){var statearr_30806 = state_30803;
(statearr_30806[(7)] = inst_30783);

return statearr_30806;
})();
var statearr_30807_30827 = state_30803__$1;
(statearr_30807_30827[(2)] = null);

(statearr_30807_30827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30804 === (4))){
var inst_30786 = (state_30803[(8)]);
var inst_30786__$1 = (state_30803[(2)]);
var inst_30787 = (inst_30786__$1 == null);
var state_30803__$1 = (function (){var statearr_30808 = state_30803;
(statearr_30808[(8)] = inst_30786__$1);

return statearr_30808;
})();
if(cljs.core.truth_(inst_30787)){
var statearr_30809_30828 = state_30803__$1;
(statearr_30809_30828[(1)] = (5));

} else {
var statearr_30810_30829 = state_30803__$1;
(statearr_30810_30829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30804 === (6))){
var inst_30786 = (state_30803[(8)]);
var inst_30783 = (state_30803[(7)]);
var inst_30790 = (state_30803[(9)]);
var inst_30790__$1 = f.call(null,inst_30783,inst_30786);
var inst_30791 = cljs.core.reduced_QMARK_.call(null,inst_30790__$1);
var state_30803__$1 = (function (){var statearr_30811 = state_30803;
(statearr_30811[(9)] = inst_30790__$1);

return statearr_30811;
})();
if(inst_30791){
var statearr_30812_30830 = state_30803__$1;
(statearr_30812_30830[(1)] = (8));

} else {
var statearr_30813_30831 = state_30803__$1;
(statearr_30813_30831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30804 === (3))){
var inst_30801 = (state_30803[(2)]);
var state_30803__$1 = state_30803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30803__$1,inst_30801);
} else {
if((state_val_30804 === (2))){
var state_30803__$1 = state_30803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30803__$1,(4),ch);
} else {
if((state_val_30804 === (9))){
var inst_30790 = (state_30803[(9)]);
var inst_30783 = inst_30790;
var state_30803__$1 = (function (){var statearr_30814 = state_30803;
(statearr_30814[(7)] = inst_30783);

return statearr_30814;
})();
var statearr_30815_30832 = state_30803__$1;
(statearr_30815_30832[(2)] = null);

(statearr_30815_30832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30804 === (5))){
var inst_30783 = (state_30803[(7)]);
var state_30803__$1 = state_30803;
var statearr_30816_30833 = state_30803__$1;
(statearr_30816_30833[(2)] = inst_30783);

(statearr_30816_30833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30804 === (10))){
var inst_30797 = (state_30803[(2)]);
var state_30803__$1 = state_30803;
var statearr_30817_30834 = state_30803__$1;
(statearr_30817_30834[(2)] = inst_30797);

(statearr_30817_30834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30804 === (8))){
var inst_30790 = (state_30803[(9)]);
var inst_30793 = cljs.core.deref.call(null,inst_30790);
var state_30803__$1 = state_30803;
var statearr_30818_30835 = state_30803__$1;
(statearr_30818_30835[(2)] = inst_30793);

(statearr_30818_30835[(1)] = (10));


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
});})(c__30045__auto__))
;
return ((function (switch__29933__auto__,c__30045__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29934__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29934__auto____0 = (function (){
var statearr_30822 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30822[(0)] = cljs$core$async$reduce_$_state_machine__29934__auto__);

(statearr_30822[(1)] = (1));

return statearr_30822;
});
var cljs$core$async$reduce_$_state_machine__29934__auto____1 = (function (state_30803){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_30803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e30823){if((e30823 instanceof Object)){
var ex__29937__auto__ = e30823;
var statearr_30824_30836 = state_30803;
(statearr_30824_30836[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30837 = state_30803;
state_30803 = G__30837;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29934__auto__ = function(state_30803){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29934__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29934__auto____1.call(this,state_30803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29934__auto____0;
cljs$core$async$reduce_$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29934__auto____1;
return cljs$core$async$reduce_$_state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto__))
})();
var state__30047__auto__ = (function (){var statearr_30825 = f__30046__auto__.call(null);
(statearr_30825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto__);

return statearr_30825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto__))
);

return c__30045__auto__;
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
var args30838 = [];
var len__26984__auto___30890 = arguments.length;
var i__26985__auto___30891 = (0);
while(true){
if((i__26985__auto___30891 < len__26984__auto___30890)){
args30838.push((arguments[i__26985__auto___30891]));

var G__30892 = (i__26985__auto___30891 + (1));
i__26985__auto___30891 = G__30892;
continue;
} else {
}
break;
}

var G__30840 = args30838.length;
switch (G__30840) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30838.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto__){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto__){
return (function (state_30865){
var state_val_30866 = (state_30865[(1)]);
if((state_val_30866 === (7))){
var inst_30847 = (state_30865[(2)]);
var state_30865__$1 = state_30865;
var statearr_30867_30894 = state_30865__$1;
(statearr_30867_30894[(2)] = inst_30847);

(statearr_30867_30894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30866 === (1))){
var inst_30841 = cljs.core.seq.call(null,coll);
var inst_30842 = inst_30841;
var state_30865__$1 = (function (){var statearr_30868 = state_30865;
(statearr_30868[(7)] = inst_30842);

return statearr_30868;
})();
var statearr_30869_30895 = state_30865__$1;
(statearr_30869_30895[(2)] = null);

(statearr_30869_30895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30866 === (4))){
var inst_30842 = (state_30865[(7)]);
var inst_30845 = cljs.core.first.call(null,inst_30842);
var state_30865__$1 = state_30865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30865__$1,(7),ch,inst_30845);
} else {
if((state_val_30866 === (13))){
var inst_30859 = (state_30865[(2)]);
var state_30865__$1 = state_30865;
var statearr_30870_30896 = state_30865__$1;
(statearr_30870_30896[(2)] = inst_30859);

(statearr_30870_30896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30866 === (6))){
var inst_30850 = (state_30865[(2)]);
var state_30865__$1 = state_30865;
if(cljs.core.truth_(inst_30850)){
var statearr_30871_30897 = state_30865__$1;
(statearr_30871_30897[(1)] = (8));

} else {
var statearr_30872_30898 = state_30865__$1;
(statearr_30872_30898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30866 === (3))){
var inst_30863 = (state_30865[(2)]);
var state_30865__$1 = state_30865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30865__$1,inst_30863);
} else {
if((state_val_30866 === (12))){
var state_30865__$1 = state_30865;
var statearr_30873_30899 = state_30865__$1;
(statearr_30873_30899[(2)] = null);

(statearr_30873_30899[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30866 === (2))){
var inst_30842 = (state_30865[(7)]);
var state_30865__$1 = state_30865;
if(cljs.core.truth_(inst_30842)){
var statearr_30874_30900 = state_30865__$1;
(statearr_30874_30900[(1)] = (4));

} else {
var statearr_30875_30901 = state_30865__$1;
(statearr_30875_30901[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30866 === (11))){
var inst_30856 = cljs.core.async.close_BANG_.call(null,ch);
var state_30865__$1 = state_30865;
var statearr_30876_30902 = state_30865__$1;
(statearr_30876_30902[(2)] = inst_30856);

(statearr_30876_30902[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30866 === (9))){
var state_30865__$1 = state_30865;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30877_30903 = state_30865__$1;
(statearr_30877_30903[(1)] = (11));

} else {
var statearr_30878_30904 = state_30865__$1;
(statearr_30878_30904[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30866 === (5))){
var inst_30842 = (state_30865[(7)]);
var state_30865__$1 = state_30865;
var statearr_30879_30905 = state_30865__$1;
(statearr_30879_30905[(2)] = inst_30842);

(statearr_30879_30905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30866 === (10))){
var inst_30861 = (state_30865[(2)]);
var state_30865__$1 = state_30865;
var statearr_30880_30906 = state_30865__$1;
(statearr_30880_30906[(2)] = inst_30861);

(statearr_30880_30906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30866 === (8))){
var inst_30842 = (state_30865[(7)]);
var inst_30852 = cljs.core.next.call(null,inst_30842);
var inst_30842__$1 = inst_30852;
var state_30865__$1 = (function (){var statearr_30881 = state_30865;
(statearr_30881[(7)] = inst_30842__$1);

return statearr_30881;
})();
var statearr_30882_30907 = state_30865__$1;
(statearr_30882_30907[(2)] = null);

(statearr_30882_30907[(1)] = (2));


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
});})(c__30045__auto__))
;
return ((function (switch__29933__auto__,c__30045__auto__){
return (function() {
var cljs$core$async$state_machine__29934__auto__ = null;
var cljs$core$async$state_machine__29934__auto____0 = (function (){
var statearr_30886 = [null,null,null,null,null,null,null,null];
(statearr_30886[(0)] = cljs$core$async$state_machine__29934__auto__);

(statearr_30886[(1)] = (1));

return statearr_30886;
});
var cljs$core$async$state_machine__29934__auto____1 = (function (state_30865){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_30865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e30887){if((e30887 instanceof Object)){
var ex__29937__auto__ = e30887;
var statearr_30888_30908 = state_30865;
(statearr_30888_30908[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30909 = state_30865;
state_30865 = G__30909;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
cljs$core$async$state_machine__29934__auto__ = function(state_30865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29934__auto____1.call(this,state_30865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29934__auto____0;
cljs$core$async$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29934__auto____1;
return cljs$core$async$state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto__))
})();
var state__30047__auto__ = (function (){var statearr_30889 = f__30046__auto__.call(null);
(statearr_30889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto__);

return statearr_30889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto__))
);

return c__30045__auto__;
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
var x__26577__auto__ = (((_ == null))?null:_);
var m__26578__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26577__auto__)]);
if(!((m__26578__auto__ == null))){
return m__26578__auto__.call(null,_);
} else {
var m__26578__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26578__auto____$1 == null))){
return m__26578__auto____$1.call(null,_);
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
var x__26577__auto__ = (((m == null))?null:m);
var m__26578__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26577__auto__)]);
if(!((m__26578__auto__ == null))){
return m__26578__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26578__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26578__auto____$1 == null))){
return m__26578__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__26577__auto__ = (((m == null))?null:m);
var m__26578__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26577__auto__)]);
if(!((m__26578__auto__ == null))){
return m__26578__auto__.call(null,m,ch);
} else {
var m__26578__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26578__auto____$1 == null))){
return m__26578__auto____$1.call(null,m,ch);
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
var x__26577__auto__ = (((m == null))?null:m);
var m__26578__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26577__auto__)]);
if(!((m__26578__auto__ == null))){
return m__26578__auto__.call(null,m);
} else {
var m__26578__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26578__auto____$1 == null))){
return m__26578__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async31131 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31131 = (function (mult,ch,cs,meta31132){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31132 = meta31132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31133,meta31132__$1){
var self__ = this;
var _31133__$1 = this;
return (new cljs.core.async.t_cljs$core$async31131(self__.mult,self__.ch,self__.cs,meta31132__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31133){
var self__ = this;
var _31133__$1 = this;
return self__.meta31132;
});})(cs))
;

cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31131.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31131.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31132","meta31132",1398646460,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31131.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31131";

cljs.core.async.t_cljs$core$async31131.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"cljs.core.async/t_cljs$core$async31131");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31131 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31131(mult__$1,ch__$1,cs__$1,meta31132){
return (new cljs.core.async.t_cljs$core$async31131(mult__$1,ch__$1,cs__$1,meta31132));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31131(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30045__auto___31352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto___31352,cs,m,dchan,dctr,done){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto___31352,cs,m,dchan,dctr,done){
return (function (state_31264){
var state_val_31265 = (state_31264[(1)]);
if((state_val_31265 === (7))){
var inst_31260 = (state_31264[(2)]);
var state_31264__$1 = state_31264;
var statearr_31266_31353 = state_31264__$1;
(statearr_31266_31353[(2)] = inst_31260);

(statearr_31266_31353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (20))){
var inst_31165 = (state_31264[(7)]);
var inst_31175 = cljs.core.first.call(null,inst_31165);
var inst_31176 = cljs.core.nth.call(null,inst_31175,(0),null);
var inst_31177 = cljs.core.nth.call(null,inst_31175,(1),null);
var state_31264__$1 = (function (){var statearr_31267 = state_31264;
(statearr_31267[(8)] = inst_31176);

return statearr_31267;
})();
if(cljs.core.truth_(inst_31177)){
var statearr_31268_31354 = state_31264__$1;
(statearr_31268_31354[(1)] = (22));

} else {
var statearr_31269_31355 = state_31264__$1;
(statearr_31269_31355[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (27))){
var inst_31212 = (state_31264[(9)]);
var inst_31207 = (state_31264[(10)]);
var inst_31136 = (state_31264[(11)]);
var inst_31205 = (state_31264[(12)]);
var inst_31212__$1 = cljs.core._nth.call(null,inst_31205,inst_31207);
var inst_31213 = cljs.core.async.put_BANG_.call(null,inst_31212__$1,inst_31136,done);
var state_31264__$1 = (function (){var statearr_31270 = state_31264;
(statearr_31270[(9)] = inst_31212__$1);

return statearr_31270;
})();
if(cljs.core.truth_(inst_31213)){
var statearr_31271_31356 = state_31264__$1;
(statearr_31271_31356[(1)] = (30));

} else {
var statearr_31272_31357 = state_31264__$1;
(statearr_31272_31357[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (1))){
var state_31264__$1 = state_31264;
var statearr_31273_31358 = state_31264__$1;
(statearr_31273_31358[(2)] = null);

(statearr_31273_31358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (24))){
var inst_31165 = (state_31264[(7)]);
var inst_31182 = (state_31264[(2)]);
var inst_31183 = cljs.core.next.call(null,inst_31165);
var inst_31145 = inst_31183;
var inst_31146 = null;
var inst_31147 = (0);
var inst_31148 = (0);
var state_31264__$1 = (function (){var statearr_31274 = state_31264;
(statearr_31274[(13)] = inst_31182);

(statearr_31274[(14)] = inst_31147);

(statearr_31274[(15)] = inst_31146);

(statearr_31274[(16)] = inst_31145);

(statearr_31274[(17)] = inst_31148);

return statearr_31274;
})();
var statearr_31275_31359 = state_31264__$1;
(statearr_31275_31359[(2)] = null);

(statearr_31275_31359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (39))){
var state_31264__$1 = state_31264;
var statearr_31279_31360 = state_31264__$1;
(statearr_31279_31360[(2)] = null);

(statearr_31279_31360[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (4))){
var inst_31136 = (state_31264[(11)]);
var inst_31136__$1 = (state_31264[(2)]);
var inst_31137 = (inst_31136__$1 == null);
var state_31264__$1 = (function (){var statearr_31280 = state_31264;
(statearr_31280[(11)] = inst_31136__$1);

return statearr_31280;
})();
if(cljs.core.truth_(inst_31137)){
var statearr_31281_31361 = state_31264__$1;
(statearr_31281_31361[(1)] = (5));

} else {
var statearr_31282_31362 = state_31264__$1;
(statearr_31282_31362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (15))){
var inst_31147 = (state_31264[(14)]);
var inst_31146 = (state_31264[(15)]);
var inst_31145 = (state_31264[(16)]);
var inst_31148 = (state_31264[(17)]);
var inst_31161 = (state_31264[(2)]);
var inst_31162 = (inst_31148 + (1));
var tmp31276 = inst_31147;
var tmp31277 = inst_31146;
var tmp31278 = inst_31145;
var inst_31145__$1 = tmp31278;
var inst_31146__$1 = tmp31277;
var inst_31147__$1 = tmp31276;
var inst_31148__$1 = inst_31162;
var state_31264__$1 = (function (){var statearr_31283 = state_31264;
(statearr_31283[(14)] = inst_31147__$1);

(statearr_31283[(15)] = inst_31146__$1);

(statearr_31283[(16)] = inst_31145__$1);

(statearr_31283[(17)] = inst_31148__$1);

(statearr_31283[(18)] = inst_31161);

return statearr_31283;
})();
var statearr_31284_31363 = state_31264__$1;
(statearr_31284_31363[(2)] = null);

(statearr_31284_31363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (21))){
var inst_31186 = (state_31264[(2)]);
var state_31264__$1 = state_31264;
var statearr_31288_31364 = state_31264__$1;
(statearr_31288_31364[(2)] = inst_31186);

(statearr_31288_31364[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (31))){
var inst_31212 = (state_31264[(9)]);
var inst_31216 = done.call(null,null);
var inst_31217 = cljs.core.async.untap_STAR_.call(null,m,inst_31212);
var state_31264__$1 = (function (){var statearr_31289 = state_31264;
(statearr_31289[(19)] = inst_31216);

return statearr_31289;
})();
var statearr_31290_31365 = state_31264__$1;
(statearr_31290_31365[(2)] = inst_31217);

(statearr_31290_31365[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (32))){
var inst_31207 = (state_31264[(10)]);
var inst_31206 = (state_31264[(20)]);
var inst_31205 = (state_31264[(12)]);
var inst_31204 = (state_31264[(21)]);
var inst_31219 = (state_31264[(2)]);
var inst_31220 = (inst_31207 + (1));
var tmp31285 = inst_31206;
var tmp31286 = inst_31205;
var tmp31287 = inst_31204;
var inst_31204__$1 = tmp31287;
var inst_31205__$1 = tmp31286;
var inst_31206__$1 = tmp31285;
var inst_31207__$1 = inst_31220;
var state_31264__$1 = (function (){var statearr_31291 = state_31264;
(statearr_31291[(10)] = inst_31207__$1);

(statearr_31291[(22)] = inst_31219);

(statearr_31291[(20)] = inst_31206__$1);

(statearr_31291[(12)] = inst_31205__$1);

(statearr_31291[(21)] = inst_31204__$1);

return statearr_31291;
})();
var statearr_31292_31366 = state_31264__$1;
(statearr_31292_31366[(2)] = null);

(statearr_31292_31366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (40))){
var inst_31232 = (state_31264[(23)]);
var inst_31236 = done.call(null,null);
var inst_31237 = cljs.core.async.untap_STAR_.call(null,m,inst_31232);
var state_31264__$1 = (function (){var statearr_31293 = state_31264;
(statearr_31293[(24)] = inst_31236);

return statearr_31293;
})();
var statearr_31294_31367 = state_31264__$1;
(statearr_31294_31367[(2)] = inst_31237);

(statearr_31294_31367[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (33))){
var inst_31223 = (state_31264[(25)]);
var inst_31225 = cljs.core.chunked_seq_QMARK_.call(null,inst_31223);
var state_31264__$1 = state_31264;
if(inst_31225){
var statearr_31295_31368 = state_31264__$1;
(statearr_31295_31368[(1)] = (36));

} else {
var statearr_31296_31369 = state_31264__$1;
(statearr_31296_31369[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (13))){
var inst_31155 = (state_31264[(26)]);
var inst_31158 = cljs.core.async.close_BANG_.call(null,inst_31155);
var state_31264__$1 = state_31264;
var statearr_31297_31370 = state_31264__$1;
(statearr_31297_31370[(2)] = inst_31158);

(statearr_31297_31370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (22))){
var inst_31176 = (state_31264[(8)]);
var inst_31179 = cljs.core.async.close_BANG_.call(null,inst_31176);
var state_31264__$1 = state_31264;
var statearr_31298_31371 = state_31264__$1;
(statearr_31298_31371[(2)] = inst_31179);

(statearr_31298_31371[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (36))){
var inst_31223 = (state_31264[(25)]);
var inst_31227 = cljs.core.chunk_first.call(null,inst_31223);
var inst_31228 = cljs.core.chunk_rest.call(null,inst_31223);
var inst_31229 = cljs.core.count.call(null,inst_31227);
var inst_31204 = inst_31228;
var inst_31205 = inst_31227;
var inst_31206 = inst_31229;
var inst_31207 = (0);
var state_31264__$1 = (function (){var statearr_31299 = state_31264;
(statearr_31299[(10)] = inst_31207);

(statearr_31299[(20)] = inst_31206);

(statearr_31299[(12)] = inst_31205);

(statearr_31299[(21)] = inst_31204);

return statearr_31299;
})();
var statearr_31300_31372 = state_31264__$1;
(statearr_31300_31372[(2)] = null);

(statearr_31300_31372[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (41))){
var inst_31223 = (state_31264[(25)]);
var inst_31239 = (state_31264[(2)]);
var inst_31240 = cljs.core.next.call(null,inst_31223);
var inst_31204 = inst_31240;
var inst_31205 = null;
var inst_31206 = (0);
var inst_31207 = (0);
var state_31264__$1 = (function (){var statearr_31301 = state_31264;
(statearr_31301[(10)] = inst_31207);

(statearr_31301[(20)] = inst_31206);

(statearr_31301[(27)] = inst_31239);

(statearr_31301[(12)] = inst_31205);

(statearr_31301[(21)] = inst_31204);

return statearr_31301;
})();
var statearr_31302_31373 = state_31264__$1;
(statearr_31302_31373[(2)] = null);

(statearr_31302_31373[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (43))){
var state_31264__$1 = state_31264;
var statearr_31303_31374 = state_31264__$1;
(statearr_31303_31374[(2)] = null);

(statearr_31303_31374[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (29))){
var inst_31248 = (state_31264[(2)]);
var state_31264__$1 = state_31264;
var statearr_31304_31375 = state_31264__$1;
(statearr_31304_31375[(2)] = inst_31248);

(statearr_31304_31375[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (44))){
var inst_31257 = (state_31264[(2)]);
var state_31264__$1 = (function (){var statearr_31305 = state_31264;
(statearr_31305[(28)] = inst_31257);

return statearr_31305;
})();
var statearr_31306_31376 = state_31264__$1;
(statearr_31306_31376[(2)] = null);

(statearr_31306_31376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (6))){
var inst_31196 = (state_31264[(29)]);
var inst_31195 = cljs.core.deref.call(null,cs);
var inst_31196__$1 = cljs.core.keys.call(null,inst_31195);
var inst_31197 = cljs.core.count.call(null,inst_31196__$1);
var inst_31198 = cljs.core.reset_BANG_.call(null,dctr,inst_31197);
var inst_31203 = cljs.core.seq.call(null,inst_31196__$1);
var inst_31204 = inst_31203;
var inst_31205 = null;
var inst_31206 = (0);
var inst_31207 = (0);
var state_31264__$1 = (function (){var statearr_31307 = state_31264;
(statearr_31307[(10)] = inst_31207);

(statearr_31307[(30)] = inst_31198);

(statearr_31307[(20)] = inst_31206);

(statearr_31307[(12)] = inst_31205);

(statearr_31307[(29)] = inst_31196__$1);

(statearr_31307[(21)] = inst_31204);

return statearr_31307;
})();
var statearr_31308_31377 = state_31264__$1;
(statearr_31308_31377[(2)] = null);

(statearr_31308_31377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (28))){
var inst_31223 = (state_31264[(25)]);
var inst_31204 = (state_31264[(21)]);
var inst_31223__$1 = cljs.core.seq.call(null,inst_31204);
var state_31264__$1 = (function (){var statearr_31309 = state_31264;
(statearr_31309[(25)] = inst_31223__$1);

return statearr_31309;
})();
if(inst_31223__$1){
var statearr_31310_31378 = state_31264__$1;
(statearr_31310_31378[(1)] = (33));

} else {
var statearr_31311_31379 = state_31264__$1;
(statearr_31311_31379[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (25))){
var inst_31207 = (state_31264[(10)]);
var inst_31206 = (state_31264[(20)]);
var inst_31209 = (inst_31207 < inst_31206);
var inst_31210 = inst_31209;
var state_31264__$1 = state_31264;
if(cljs.core.truth_(inst_31210)){
var statearr_31312_31380 = state_31264__$1;
(statearr_31312_31380[(1)] = (27));

} else {
var statearr_31313_31381 = state_31264__$1;
(statearr_31313_31381[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (34))){
var state_31264__$1 = state_31264;
var statearr_31314_31382 = state_31264__$1;
(statearr_31314_31382[(2)] = null);

(statearr_31314_31382[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (17))){
var state_31264__$1 = state_31264;
var statearr_31315_31383 = state_31264__$1;
(statearr_31315_31383[(2)] = null);

(statearr_31315_31383[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (3))){
var inst_31262 = (state_31264[(2)]);
var state_31264__$1 = state_31264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31264__$1,inst_31262);
} else {
if((state_val_31265 === (12))){
var inst_31191 = (state_31264[(2)]);
var state_31264__$1 = state_31264;
var statearr_31316_31384 = state_31264__$1;
(statearr_31316_31384[(2)] = inst_31191);

(statearr_31316_31384[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (2))){
var state_31264__$1 = state_31264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31264__$1,(4),ch);
} else {
if((state_val_31265 === (23))){
var state_31264__$1 = state_31264;
var statearr_31317_31385 = state_31264__$1;
(statearr_31317_31385[(2)] = null);

(statearr_31317_31385[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (35))){
var inst_31246 = (state_31264[(2)]);
var state_31264__$1 = state_31264;
var statearr_31318_31386 = state_31264__$1;
(statearr_31318_31386[(2)] = inst_31246);

(statearr_31318_31386[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (19))){
var inst_31165 = (state_31264[(7)]);
var inst_31169 = cljs.core.chunk_first.call(null,inst_31165);
var inst_31170 = cljs.core.chunk_rest.call(null,inst_31165);
var inst_31171 = cljs.core.count.call(null,inst_31169);
var inst_31145 = inst_31170;
var inst_31146 = inst_31169;
var inst_31147 = inst_31171;
var inst_31148 = (0);
var state_31264__$1 = (function (){var statearr_31319 = state_31264;
(statearr_31319[(14)] = inst_31147);

(statearr_31319[(15)] = inst_31146);

(statearr_31319[(16)] = inst_31145);

(statearr_31319[(17)] = inst_31148);

return statearr_31319;
})();
var statearr_31320_31387 = state_31264__$1;
(statearr_31320_31387[(2)] = null);

(statearr_31320_31387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (11))){
var inst_31145 = (state_31264[(16)]);
var inst_31165 = (state_31264[(7)]);
var inst_31165__$1 = cljs.core.seq.call(null,inst_31145);
var state_31264__$1 = (function (){var statearr_31321 = state_31264;
(statearr_31321[(7)] = inst_31165__$1);

return statearr_31321;
})();
if(inst_31165__$1){
var statearr_31322_31388 = state_31264__$1;
(statearr_31322_31388[(1)] = (16));

} else {
var statearr_31323_31389 = state_31264__$1;
(statearr_31323_31389[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (9))){
var inst_31193 = (state_31264[(2)]);
var state_31264__$1 = state_31264;
var statearr_31324_31390 = state_31264__$1;
(statearr_31324_31390[(2)] = inst_31193);

(statearr_31324_31390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (5))){
var inst_31143 = cljs.core.deref.call(null,cs);
var inst_31144 = cljs.core.seq.call(null,inst_31143);
var inst_31145 = inst_31144;
var inst_31146 = null;
var inst_31147 = (0);
var inst_31148 = (0);
var state_31264__$1 = (function (){var statearr_31325 = state_31264;
(statearr_31325[(14)] = inst_31147);

(statearr_31325[(15)] = inst_31146);

(statearr_31325[(16)] = inst_31145);

(statearr_31325[(17)] = inst_31148);

return statearr_31325;
})();
var statearr_31326_31391 = state_31264__$1;
(statearr_31326_31391[(2)] = null);

(statearr_31326_31391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (14))){
var state_31264__$1 = state_31264;
var statearr_31327_31392 = state_31264__$1;
(statearr_31327_31392[(2)] = null);

(statearr_31327_31392[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (45))){
var inst_31254 = (state_31264[(2)]);
var state_31264__$1 = state_31264;
var statearr_31328_31393 = state_31264__$1;
(statearr_31328_31393[(2)] = inst_31254);

(statearr_31328_31393[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (26))){
var inst_31196 = (state_31264[(29)]);
var inst_31250 = (state_31264[(2)]);
var inst_31251 = cljs.core.seq.call(null,inst_31196);
var state_31264__$1 = (function (){var statearr_31329 = state_31264;
(statearr_31329[(31)] = inst_31250);

return statearr_31329;
})();
if(inst_31251){
var statearr_31330_31394 = state_31264__$1;
(statearr_31330_31394[(1)] = (42));

} else {
var statearr_31331_31395 = state_31264__$1;
(statearr_31331_31395[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (16))){
var inst_31165 = (state_31264[(7)]);
var inst_31167 = cljs.core.chunked_seq_QMARK_.call(null,inst_31165);
var state_31264__$1 = state_31264;
if(inst_31167){
var statearr_31332_31396 = state_31264__$1;
(statearr_31332_31396[(1)] = (19));

} else {
var statearr_31333_31397 = state_31264__$1;
(statearr_31333_31397[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (38))){
var inst_31243 = (state_31264[(2)]);
var state_31264__$1 = state_31264;
var statearr_31334_31398 = state_31264__$1;
(statearr_31334_31398[(2)] = inst_31243);

(statearr_31334_31398[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (30))){
var state_31264__$1 = state_31264;
var statearr_31335_31399 = state_31264__$1;
(statearr_31335_31399[(2)] = null);

(statearr_31335_31399[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (10))){
var inst_31146 = (state_31264[(15)]);
var inst_31148 = (state_31264[(17)]);
var inst_31154 = cljs.core._nth.call(null,inst_31146,inst_31148);
var inst_31155 = cljs.core.nth.call(null,inst_31154,(0),null);
var inst_31156 = cljs.core.nth.call(null,inst_31154,(1),null);
var state_31264__$1 = (function (){var statearr_31336 = state_31264;
(statearr_31336[(26)] = inst_31155);

return statearr_31336;
})();
if(cljs.core.truth_(inst_31156)){
var statearr_31337_31400 = state_31264__$1;
(statearr_31337_31400[(1)] = (13));

} else {
var statearr_31338_31401 = state_31264__$1;
(statearr_31338_31401[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (18))){
var inst_31189 = (state_31264[(2)]);
var state_31264__$1 = state_31264;
var statearr_31339_31402 = state_31264__$1;
(statearr_31339_31402[(2)] = inst_31189);

(statearr_31339_31402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (42))){
var state_31264__$1 = state_31264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31264__$1,(45),dchan);
} else {
if((state_val_31265 === (37))){
var inst_31232 = (state_31264[(23)]);
var inst_31223 = (state_31264[(25)]);
var inst_31136 = (state_31264[(11)]);
var inst_31232__$1 = cljs.core.first.call(null,inst_31223);
var inst_31233 = cljs.core.async.put_BANG_.call(null,inst_31232__$1,inst_31136,done);
var state_31264__$1 = (function (){var statearr_31340 = state_31264;
(statearr_31340[(23)] = inst_31232__$1);

return statearr_31340;
})();
if(cljs.core.truth_(inst_31233)){
var statearr_31341_31403 = state_31264__$1;
(statearr_31341_31403[(1)] = (39));

} else {
var statearr_31342_31404 = state_31264__$1;
(statearr_31342_31404[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (8))){
var inst_31147 = (state_31264[(14)]);
var inst_31148 = (state_31264[(17)]);
var inst_31150 = (inst_31148 < inst_31147);
var inst_31151 = inst_31150;
var state_31264__$1 = state_31264;
if(cljs.core.truth_(inst_31151)){
var statearr_31343_31405 = state_31264__$1;
(statearr_31343_31405[(1)] = (10));

} else {
var statearr_31344_31406 = state_31264__$1;
(statearr_31344_31406[(1)] = (11));

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
});})(c__30045__auto___31352,cs,m,dchan,dctr,done))
;
return ((function (switch__29933__auto__,c__30045__auto___31352,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29934__auto__ = null;
var cljs$core$async$mult_$_state_machine__29934__auto____0 = (function (){
var statearr_31348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31348[(0)] = cljs$core$async$mult_$_state_machine__29934__auto__);

(statearr_31348[(1)] = (1));

return statearr_31348;
});
var cljs$core$async$mult_$_state_machine__29934__auto____1 = (function (state_31264){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_31264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e31349){if((e31349 instanceof Object)){
var ex__29937__auto__ = e31349;
var statearr_31350_31407 = state_31264;
(statearr_31350_31407[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31408 = state_31264;
state_31264 = G__31408;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29934__auto__ = function(state_31264){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29934__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29934__auto____1.call(this,state_31264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29934__auto____0;
cljs$core$async$mult_$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29934__auto____1;
return cljs$core$async$mult_$_state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto___31352,cs,m,dchan,dctr,done))
})();
var state__30047__auto__ = (function (){var statearr_31351 = f__30046__auto__.call(null);
(statearr_31351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___31352);

return statearr_31351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto___31352,cs,m,dchan,dctr,done))
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
var args31409 = [];
var len__26984__auto___31412 = arguments.length;
var i__26985__auto___31413 = (0);
while(true){
if((i__26985__auto___31413 < len__26984__auto___31412)){
args31409.push((arguments[i__26985__auto___31413]));

var G__31414 = (i__26985__auto___31413 + (1));
i__26985__auto___31413 = G__31414;
continue;
} else {
}
break;
}

var G__31411 = args31409.length;
switch (G__31411) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31409.length)].join('')));

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
var x__26577__auto__ = (((m == null))?null:m);
var m__26578__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26577__auto__)]);
if(!((m__26578__auto__ == null))){
return m__26578__auto__.call(null,m,ch);
} else {
var m__26578__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26578__auto____$1 == null))){
return m__26578__auto____$1.call(null,m,ch);
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
var x__26577__auto__ = (((m == null))?null:m);
var m__26578__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26577__auto__)]);
if(!((m__26578__auto__ == null))){
return m__26578__auto__.call(null,m,ch);
} else {
var m__26578__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26578__auto____$1 == null))){
return m__26578__auto____$1.call(null,m,ch);
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
var x__26577__auto__ = (((m == null))?null:m);
var m__26578__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26577__auto__)]);
if(!((m__26578__auto__ == null))){
return m__26578__auto__.call(null,m);
} else {
var m__26578__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26578__auto____$1 == null))){
return m__26578__auto____$1.call(null,m);
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
var x__26577__auto__ = (((m == null))?null:m);
var m__26578__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26577__auto__)]);
if(!((m__26578__auto__ == null))){
return m__26578__auto__.call(null,m,state_map);
} else {
var m__26578__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26578__auto____$1 == null))){
return m__26578__auto____$1.call(null,m,state_map);
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
var x__26577__auto__ = (((m == null))?null:m);
var m__26578__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26577__auto__)]);
if(!((m__26578__auto__ == null))){
return m__26578__auto__.call(null,m,mode);
} else {
var m__26578__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26578__auto____$1 == null))){
return m__26578__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26991__auto__ = [];
var len__26984__auto___31426 = arguments.length;
var i__26985__auto___31427 = (0);
while(true){
if((i__26985__auto___31427 < len__26984__auto___31426)){
args__26991__auto__.push((arguments[i__26985__auto___31427]));

var G__31428 = (i__26985__auto___31427 + (1));
i__26985__auto___31427 = G__31428;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((3) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26992__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31420){
var map__31421 = p__31420;
var map__31421__$1 = ((((!((map__31421 == null)))?((((map__31421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31421):map__31421);
var opts = map__31421__$1;
var statearr_31423_31429 = state;
(statearr_31423_31429[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__31421,map__31421__$1,opts){
return (function (val){
var statearr_31424_31430 = state;
(statearr_31424_31430[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31421,map__31421__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_31425_31431 = state;
(statearr_31425_31431[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31416){
var G__31417 = cljs.core.first.call(null,seq31416);
var seq31416__$1 = cljs.core.next.call(null,seq31416);
var G__31418 = cljs.core.first.call(null,seq31416__$1);
var seq31416__$2 = cljs.core.next.call(null,seq31416__$1);
var G__31419 = cljs.core.first.call(null,seq31416__$2);
var seq31416__$3 = cljs.core.next.call(null,seq31416__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31417,G__31418,G__31419,seq31416__$3);
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
if(typeof cljs.core.async.t_cljs$core$async31595 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31595 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31596){
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
this.meta31596 = meta31596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31597,meta31596__$1){
var self__ = this;
var _31597__$1 = this;
return (new cljs.core.async.t_cljs$core$async31595(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31596__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31595.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31597){
var self__ = this;
var _31597__$1 = this;
return self__.meta31596;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31595.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31595.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31595.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31595.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31595.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31595.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31595.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31595.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31595.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31596","meta31596",558703382,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31595.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31595";

cljs.core.async.t_cljs$core$async31595.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"cljs.core.async/t_cljs$core$async31595");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31595 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31595(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31596){
return (new cljs.core.async.t_cljs$core$async31595(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31596));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31595(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30045__auto___31758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto___31758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto___31758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31695){
var state_val_31696 = (state_31695[(1)]);
if((state_val_31696 === (7))){
var inst_31613 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
var statearr_31697_31759 = state_31695__$1;
(statearr_31697_31759[(2)] = inst_31613);

(statearr_31697_31759[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (20))){
var inst_31625 = (state_31695[(7)]);
var state_31695__$1 = state_31695;
var statearr_31698_31760 = state_31695__$1;
(statearr_31698_31760[(2)] = inst_31625);

(statearr_31698_31760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (27))){
var state_31695__$1 = state_31695;
var statearr_31699_31761 = state_31695__$1;
(statearr_31699_31761[(2)] = null);

(statearr_31699_31761[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (1))){
var inst_31601 = (state_31695[(8)]);
var inst_31601__$1 = calc_state.call(null);
var inst_31603 = (inst_31601__$1 == null);
var inst_31604 = cljs.core.not.call(null,inst_31603);
var state_31695__$1 = (function (){var statearr_31700 = state_31695;
(statearr_31700[(8)] = inst_31601__$1);

return statearr_31700;
})();
if(inst_31604){
var statearr_31701_31762 = state_31695__$1;
(statearr_31701_31762[(1)] = (2));

} else {
var statearr_31702_31763 = state_31695__$1;
(statearr_31702_31763[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (24))){
var inst_31669 = (state_31695[(9)]);
var inst_31655 = (state_31695[(10)]);
var inst_31648 = (state_31695[(11)]);
var inst_31669__$1 = inst_31648.call(null,inst_31655);
var state_31695__$1 = (function (){var statearr_31703 = state_31695;
(statearr_31703[(9)] = inst_31669__$1);

return statearr_31703;
})();
if(cljs.core.truth_(inst_31669__$1)){
var statearr_31704_31764 = state_31695__$1;
(statearr_31704_31764[(1)] = (29));

} else {
var statearr_31705_31765 = state_31695__$1;
(statearr_31705_31765[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (4))){
var inst_31616 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
if(cljs.core.truth_(inst_31616)){
var statearr_31706_31766 = state_31695__$1;
(statearr_31706_31766[(1)] = (8));

} else {
var statearr_31707_31767 = state_31695__$1;
(statearr_31707_31767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (15))){
var inst_31642 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
if(cljs.core.truth_(inst_31642)){
var statearr_31708_31768 = state_31695__$1;
(statearr_31708_31768[(1)] = (19));

} else {
var statearr_31709_31769 = state_31695__$1;
(statearr_31709_31769[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (21))){
var inst_31647 = (state_31695[(12)]);
var inst_31647__$1 = (state_31695[(2)]);
var inst_31648 = cljs.core.get.call(null,inst_31647__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31649 = cljs.core.get.call(null,inst_31647__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31650 = cljs.core.get.call(null,inst_31647__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31695__$1 = (function (){var statearr_31710 = state_31695;
(statearr_31710[(13)] = inst_31649);

(statearr_31710[(12)] = inst_31647__$1);

(statearr_31710[(11)] = inst_31648);

return statearr_31710;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31695__$1,(22),inst_31650);
} else {
if((state_val_31696 === (31))){
var inst_31677 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
if(cljs.core.truth_(inst_31677)){
var statearr_31711_31770 = state_31695__$1;
(statearr_31711_31770[(1)] = (32));

} else {
var statearr_31712_31771 = state_31695__$1;
(statearr_31712_31771[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (32))){
var inst_31654 = (state_31695[(14)]);
var state_31695__$1 = state_31695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31695__$1,(35),out,inst_31654);
} else {
if((state_val_31696 === (33))){
var inst_31647 = (state_31695[(12)]);
var inst_31625 = inst_31647;
var state_31695__$1 = (function (){var statearr_31713 = state_31695;
(statearr_31713[(7)] = inst_31625);

return statearr_31713;
})();
var statearr_31714_31772 = state_31695__$1;
(statearr_31714_31772[(2)] = null);

(statearr_31714_31772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (13))){
var inst_31625 = (state_31695[(7)]);
var inst_31632 = inst_31625.cljs$lang$protocol_mask$partition0$;
var inst_31633 = (inst_31632 & (64));
var inst_31634 = inst_31625.cljs$core$ISeq$;
var inst_31635 = (inst_31633) || (inst_31634);
var state_31695__$1 = state_31695;
if(cljs.core.truth_(inst_31635)){
var statearr_31715_31773 = state_31695__$1;
(statearr_31715_31773[(1)] = (16));

} else {
var statearr_31716_31774 = state_31695__$1;
(statearr_31716_31774[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (22))){
var inst_31654 = (state_31695[(14)]);
var inst_31655 = (state_31695[(10)]);
var inst_31653 = (state_31695[(2)]);
var inst_31654__$1 = cljs.core.nth.call(null,inst_31653,(0),null);
var inst_31655__$1 = cljs.core.nth.call(null,inst_31653,(1),null);
var inst_31656 = (inst_31654__$1 == null);
var inst_31657 = cljs.core._EQ_.call(null,inst_31655__$1,change);
var inst_31658 = (inst_31656) || (inst_31657);
var state_31695__$1 = (function (){var statearr_31717 = state_31695;
(statearr_31717[(14)] = inst_31654__$1);

(statearr_31717[(10)] = inst_31655__$1);

return statearr_31717;
})();
if(cljs.core.truth_(inst_31658)){
var statearr_31718_31775 = state_31695__$1;
(statearr_31718_31775[(1)] = (23));

} else {
var statearr_31719_31776 = state_31695__$1;
(statearr_31719_31776[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (36))){
var inst_31647 = (state_31695[(12)]);
var inst_31625 = inst_31647;
var state_31695__$1 = (function (){var statearr_31720 = state_31695;
(statearr_31720[(7)] = inst_31625);

return statearr_31720;
})();
var statearr_31721_31777 = state_31695__$1;
(statearr_31721_31777[(2)] = null);

(statearr_31721_31777[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (29))){
var inst_31669 = (state_31695[(9)]);
var state_31695__$1 = state_31695;
var statearr_31722_31778 = state_31695__$1;
(statearr_31722_31778[(2)] = inst_31669);

(statearr_31722_31778[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (6))){
var state_31695__$1 = state_31695;
var statearr_31723_31779 = state_31695__$1;
(statearr_31723_31779[(2)] = false);

(statearr_31723_31779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (28))){
var inst_31665 = (state_31695[(2)]);
var inst_31666 = calc_state.call(null);
var inst_31625 = inst_31666;
var state_31695__$1 = (function (){var statearr_31724 = state_31695;
(statearr_31724[(15)] = inst_31665);

(statearr_31724[(7)] = inst_31625);

return statearr_31724;
})();
var statearr_31725_31780 = state_31695__$1;
(statearr_31725_31780[(2)] = null);

(statearr_31725_31780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (25))){
var inst_31691 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
var statearr_31726_31781 = state_31695__$1;
(statearr_31726_31781[(2)] = inst_31691);

(statearr_31726_31781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (34))){
var inst_31689 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
var statearr_31727_31782 = state_31695__$1;
(statearr_31727_31782[(2)] = inst_31689);

(statearr_31727_31782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (17))){
var state_31695__$1 = state_31695;
var statearr_31728_31783 = state_31695__$1;
(statearr_31728_31783[(2)] = false);

(statearr_31728_31783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (3))){
var state_31695__$1 = state_31695;
var statearr_31729_31784 = state_31695__$1;
(statearr_31729_31784[(2)] = false);

(statearr_31729_31784[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (12))){
var inst_31693 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31695__$1,inst_31693);
} else {
if((state_val_31696 === (2))){
var inst_31601 = (state_31695[(8)]);
var inst_31606 = inst_31601.cljs$lang$protocol_mask$partition0$;
var inst_31607 = (inst_31606 & (64));
var inst_31608 = inst_31601.cljs$core$ISeq$;
var inst_31609 = (inst_31607) || (inst_31608);
var state_31695__$1 = state_31695;
if(cljs.core.truth_(inst_31609)){
var statearr_31730_31785 = state_31695__$1;
(statearr_31730_31785[(1)] = (5));

} else {
var statearr_31731_31786 = state_31695__$1;
(statearr_31731_31786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (23))){
var inst_31654 = (state_31695[(14)]);
var inst_31660 = (inst_31654 == null);
var state_31695__$1 = state_31695;
if(cljs.core.truth_(inst_31660)){
var statearr_31732_31787 = state_31695__$1;
(statearr_31732_31787[(1)] = (26));

} else {
var statearr_31733_31788 = state_31695__$1;
(statearr_31733_31788[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (35))){
var inst_31680 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
if(cljs.core.truth_(inst_31680)){
var statearr_31734_31789 = state_31695__$1;
(statearr_31734_31789[(1)] = (36));

} else {
var statearr_31735_31790 = state_31695__$1;
(statearr_31735_31790[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (19))){
var inst_31625 = (state_31695[(7)]);
var inst_31644 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31625);
var state_31695__$1 = state_31695;
var statearr_31736_31791 = state_31695__$1;
(statearr_31736_31791[(2)] = inst_31644);

(statearr_31736_31791[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (11))){
var inst_31625 = (state_31695[(7)]);
var inst_31629 = (inst_31625 == null);
var inst_31630 = cljs.core.not.call(null,inst_31629);
var state_31695__$1 = state_31695;
if(inst_31630){
var statearr_31737_31792 = state_31695__$1;
(statearr_31737_31792[(1)] = (13));

} else {
var statearr_31738_31793 = state_31695__$1;
(statearr_31738_31793[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (9))){
var inst_31601 = (state_31695[(8)]);
var state_31695__$1 = state_31695;
var statearr_31739_31794 = state_31695__$1;
(statearr_31739_31794[(2)] = inst_31601);

(statearr_31739_31794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (5))){
var state_31695__$1 = state_31695;
var statearr_31740_31795 = state_31695__$1;
(statearr_31740_31795[(2)] = true);

(statearr_31740_31795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (14))){
var state_31695__$1 = state_31695;
var statearr_31741_31796 = state_31695__$1;
(statearr_31741_31796[(2)] = false);

(statearr_31741_31796[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (26))){
var inst_31655 = (state_31695[(10)]);
var inst_31662 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31655);
var state_31695__$1 = state_31695;
var statearr_31742_31797 = state_31695__$1;
(statearr_31742_31797[(2)] = inst_31662);

(statearr_31742_31797[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (16))){
var state_31695__$1 = state_31695;
var statearr_31743_31798 = state_31695__$1;
(statearr_31743_31798[(2)] = true);

(statearr_31743_31798[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (38))){
var inst_31685 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
var statearr_31744_31799 = state_31695__$1;
(statearr_31744_31799[(2)] = inst_31685);

(statearr_31744_31799[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (30))){
var inst_31649 = (state_31695[(13)]);
var inst_31655 = (state_31695[(10)]);
var inst_31648 = (state_31695[(11)]);
var inst_31672 = cljs.core.empty_QMARK_.call(null,inst_31648);
var inst_31673 = inst_31649.call(null,inst_31655);
var inst_31674 = cljs.core.not.call(null,inst_31673);
var inst_31675 = (inst_31672) && (inst_31674);
var state_31695__$1 = state_31695;
var statearr_31745_31800 = state_31695__$1;
(statearr_31745_31800[(2)] = inst_31675);

(statearr_31745_31800[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (10))){
var inst_31601 = (state_31695[(8)]);
var inst_31621 = (state_31695[(2)]);
var inst_31622 = cljs.core.get.call(null,inst_31621,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31623 = cljs.core.get.call(null,inst_31621,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31624 = cljs.core.get.call(null,inst_31621,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31625 = inst_31601;
var state_31695__$1 = (function (){var statearr_31746 = state_31695;
(statearr_31746[(16)] = inst_31623);

(statearr_31746[(17)] = inst_31622);

(statearr_31746[(7)] = inst_31625);

(statearr_31746[(18)] = inst_31624);

return statearr_31746;
})();
var statearr_31747_31801 = state_31695__$1;
(statearr_31747_31801[(2)] = null);

(statearr_31747_31801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (18))){
var inst_31639 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
var statearr_31748_31802 = state_31695__$1;
(statearr_31748_31802[(2)] = inst_31639);

(statearr_31748_31802[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (37))){
var state_31695__$1 = state_31695;
var statearr_31749_31803 = state_31695__$1;
(statearr_31749_31803[(2)] = null);

(statearr_31749_31803[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (8))){
var inst_31601 = (state_31695[(8)]);
var inst_31618 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31601);
var state_31695__$1 = state_31695;
var statearr_31750_31804 = state_31695__$1;
(statearr_31750_31804[(2)] = inst_31618);

(statearr_31750_31804[(1)] = (10));


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
});})(c__30045__auto___31758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29933__auto__,c__30045__auto___31758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29934__auto__ = null;
var cljs$core$async$mix_$_state_machine__29934__auto____0 = (function (){
var statearr_31754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31754[(0)] = cljs$core$async$mix_$_state_machine__29934__auto__);

(statearr_31754[(1)] = (1));

return statearr_31754;
});
var cljs$core$async$mix_$_state_machine__29934__auto____1 = (function (state_31695){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_31695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e31755){if((e31755 instanceof Object)){
var ex__29937__auto__ = e31755;
var statearr_31756_31805 = state_31695;
(statearr_31756_31805[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31806 = state_31695;
state_31695 = G__31806;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29934__auto__ = function(state_31695){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29934__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29934__auto____1.call(this,state_31695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29934__auto____0;
cljs$core$async$mix_$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29934__auto____1;
return cljs$core$async$mix_$_state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto___31758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30047__auto__ = (function (){var statearr_31757 = f__30046__auto__.call(null);
(statearr_31757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___31758);

return statearr_31757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto___31758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__26577__auto__ = (((p == null))?null:p);
var m__26578__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26577__auto__)]);
if(!((m__26578__auto__ == null))){
return m__26578__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26578__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26578__auto____$1 == null))){
return m__26578__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__26577__auto__ = (((p == null))?null:p);
var m__26578__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26577__auto__)]);
if(!((m__26578__auto__ == null))){
return m__26578__auto__.call(null,p,v,ch);
} else {
var m__26578__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26578__auto____$1 == null))){
return m__26578__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31807 = [];
var len__26984__auto___31810 = arguments.length;
var i__26985__auto___31811 = (0);
while(true){
if((i__26985__auto___31811 < len__26984__auto___31810)){
args31807.push((arguments[i__26985__auto___31811]));

var G__31812 = (i__26985__auto___31811 + (1));
i__26985__auto___31811 = G__31812;
continue;
} else {
}
break;
}

var G__31809 = args31807.length;
switch (G__31809) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31807.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26577__auto__ = (((p == null))?null:p);
var m__26578__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26577__auto__)]);
if(!((m__26578__auto__ == null))){
return m__26578__auto__.call(null,p);
} else {
var m__26578__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26578__auto____$1 == null))){
return m__26578__auto____$1.call(null,p);
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
var x__26577__auto__ = (((p == null))?null:p);
var m__26578__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26577__auto__)]);
if(!((m__26578__auto__ == null))){
return m__26578__auto__.call(null,p,v);
} else {
var m__26578__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26578__auto____$1 == null))){
return m__26578__auto____$1.call(null,p,v);
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
var args31815 = [];
var len__26984__auto___31940 = arguments.length;
var i__26985__auto___31941 = (0);
while(true){
if((i__26985__auto___31941 < len__26984__auto___31940)){
args31815.push((arguments[i__26985__auto___31941]));

var G__31942 = (i__26985__auto___31941 + (1));
i__26985__auto___31941 = G__31942;
continue;
} else {
}
break;
}

var G__31817 = args31815.length;
switch (G__31817) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31815.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25914__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25914__auto__,mults){
return (function (p1__31814_SHARP_){
if(cljs.core.truth_(p1__31814_SHARP_.call(null,topic))){
return p1__31814_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31814_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25914__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31818 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31818 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31819){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31819 = meta31819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31820,meta31819__$1){
var self__ = this;
var _31820__$1 = this;
return (new cljs.core.async.t_cljs$core$async31818(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31819__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31820){
var self__ = this;
var _31820__$1 = this;
return self__.meta31819;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31818.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31818.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31819","meta31819",1636520486,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31818";

cljs.core.async.t_cljs$core$async31818.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"cljs.core.async/t_cljs$core$async31818");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31818 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31818(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31819){
return (new cljs.core.async.t_cljs$core$async31818(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31819));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31818(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30045__auto___31944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto___31944,mults,ensure_mult,p){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto___31944,mults,ensure_mult,p){
return (function (state_31892){
var state_val_31893 = (state_31892[(1)]);
if((state_val_31893 === (7))){
var inst_31888 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
var statearr_31894_31945 = state_31892__$1;
(statearr_31894_31945[(2)] = inst_31888);

(statearr_31894_31945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (20))){
var state_31892__$1 = state_31892;
var statearr_31895_31946 = state_31892__$1;
(statearr_31895_31946[(2)] = null);

(statearr_31895_31946[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (1))){
var state_31892__$1 = state_31892;
var statearr_31896_31947 = state_31892__$1;
(statearr_31896_31947[(2)] = null);

(statearr_31896_31947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (24))){
var inst_31871 = (state_31892[(7)]);
var inst_31880 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31871);
var state_31892__$1 = state_31892;
var statearr_31897_31948 = state_31892__$1;
(statearr_31897_31948[(2)] = inst_31880);

(statearr_31897_31948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (4))){
var inst_31823 = (state_31892[(8)]);
var inst_31823__$1 = (state_31892[(2)]);
var inst_31824 = (inst_31823__$1 == null);
var state_31892__$1 = (function (){var statearr_31898 = state_31892;
(statearr_31898[(8)] = inst_31823__$1);

return statearr_31898;
})();
if(cljs.core.truth_(inst_31824)){
var statearr_31899_31949 = state_31892__$1;
(statearr_31899_31949[(1)] = (5));

} else {
var statearr_31900_31950 = state_31892__$1;
(statearr_31900_31950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (15))){
var inst_31865 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
var statearr_31901_31951 = state_31892__$1;
(statearr_31901_31951[(2)] = inst_31865);

(statearr_31901_31951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (21))){
var inst_31885 = (state_31892[(2)]);
var state_31892__$1 = (function (){var statearr_31902 = state_31892;
(statearr_31902[(9)] = inst_31885);

return statearr_31902;
})();
var statearr_31903_31952 = state_31892__$1;
(statearr_31903_31952[(2)] = null);

(statearr_31903_31952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (13))){
var inst_31847 = (state_31892[(10)]);
var inst_31849 = cljs.core.chunked_seq_QMARK_.call(null,inst_31847);
var state_31892__$1 = state_31892;
if(inst_31849){
var statearr_31904_31953 = state_31892__$1;
(statearr_31904_31953[(1)] = (16));

} else {
var statearr_31905_31954 = state_31892__$1;
(statearr_31905_31954[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (22))){
var inst_31877 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
if(cljs.core.truth_(inst_31877)){
var statearr_31906_31955 = state_31892__$1;
(statearr_31906_31955[(1)] = (23));

} else {
var statearr_31907_31956 = state_31892__$1;
(statearr_31907_31956[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (6))){
var inst_31823 = (state_31892[(8)]);
var inst_31873 = (state_31892[(11)]);
var inst_31871 = (state_31892[(7)]);
var inst_31871__$1 = topic_fn.call(null,inst_31823);
var inst_31872 = cljs.core.deref.call(null,mults);
var inst_31873__$1 = cljs.core.get.call(null,inst_31872,inst_31871__$1);
var state_31892__$1 = (function (){var statearr_31908 = state_31892;
(statearr_31908[(11)] = inst_31873__$1);

(statearr_31908[(7)] = inst_31871__$1);

return statearr_31908;
})();
if(cljs.core.truth_(inst_31873__$1)){
var statearr_31909_31957 = state_31892__$1;
(statearr_31909_31957[(1)] = (19));

} else {
var statearr_31910_31958 = state_31892__$1;
(statearr_31910_31958[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (25))){
var inst_31882 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
var statearr_31911_31959 = state_31892__$1;
(statearr_31911_31959[(2)] = inst_31882);

(statearr_31911_31959[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (17))){
var inst_31847 = (state_31892[(10)]);
var inst_31856 = cljs.core.first.call(null,inst_31847);
var inst_31857 = cljs.core.async.muxch_STAR_.call(null,inst_31856);
var inst_31858 = cljs.core.async.close_BANG_.call(null,inst_31857);
var inst_31859 = cljs.core.next.call(null,inst_31847);
var inst_31833 = inst_31859;
var inst_31834 = null;
var inst_31835 = (0);
var inst_31836 = (0);
var state_31892__$1 = (function (){var statearr_31912 = state_31892;
(statearr_31912[(12)] = inst_31834);

(statearr_31912[(13)] = inst_31833);

(statearr_31912[(14)] = inst_31858);

(statearr_31912[(15)] = inst_31836);

(statearr_31912[(16)] = inst_31835);

return statearr_31912;
})();
var statearr_31913_31960 = state_31892__$1;
(statearr_31913_31960[(2)] = null);

(statearr_31913_31960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (3))){
var inst_31890 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31892__$1,inst_31890);
} else {
if((state_val_31893 === (12))){
var inst_31867 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
var statearr_31914_31961 = state_31892__$1;
(statearr_31914_31961[(2)] = inst_31867);

(statearr_31914_31961[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (2))){
var state_31892__$1 = state_31892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31892__$1,(4),ch);
} else {
if((state_val_31893 === (23))){
var state_31892__$1 = state_31892;
var statearr_31915_31962 = state_31892__$1;
(statearr_31915_31962[(2)] = null);

(statearr_31915_31962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (19))){
var inst_31823 = (state_31892[(8)]);
var inst_31873 = (state_31892[(11)]);
var inst_31875 = cljs.core.async.muxch_STAR_.call(null,inst_31873);
var state_31892__$1 = state_31892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31892__$1,(22),inst_31875,inst_31823);
} else {
if((state_val_31893 === (11))){
var inst_31833 = (state_31892[(13)]);
var inst_31847 = (state_31892[(10)]);
var inst_31847__$1 = cljs.core.seq.call(null,inst_31833);
var state_31892__$1 = (function (){var statearr_31916 = state_31892;
(statearr_31916[(10)] = inst_31847__$1);

return statearr_31916;
})();
if(inst_31847__$1){
var statearr_31917_31963 = state_31892__$1;
(statearr_31917_31963[(1)] = (13));

} else {
var statearr_31918_31964 = state_31892__$1;
(statearr_31918_31964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (9))){
var inst_31869 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
var statearr_31919_31965 = state_31892__$1;
(statearr_31919_31965[(2)] = inst_31869);

(statearr_31919_31965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (5))){
var inst_31830 = cljs.core.deref.call(null,mults);
var inst_31831 = cljs.core.vals.call(null,inst_31830);
var inst_31832 = cljs.core.seq.call(null,inst_31831);
var inst_31833 = inst_31832;
var inst_31834 = null;
var inst_31835 = (0);
var inst_31836 = (0);
var state_31892__$1 = (function (){var statearr_31920 = state_31892;
(statearr_31920[(12)] = inst_31834);

(statearr_31920[(13)] = inst_31833);

(statearr_31920[(15)] = inst_31836);

(statearr_31920[(16)] = inst_31835);

return statearr_31920;
})();
var statearr_31921_31966 = state_31892__$1;
(statearr_31921_31966[(2)] = null);

(statearr_31921_31966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (14))){
var state_31892__$1 = state_31892;
var statearr_31925_31967 = state_31892__$1;
(statearr_31925_31967[(2)] = null);

(statearr_31925_31967[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (16))){
var inst_31847 = (state_31892[(10)]);
var inst_31851 = cljs.core.chunk_first.call(null,inst_31847);
var inst_31852 = cljs.core.chunk_rest.call(null,inst_31847);
var inst_31853 = cljs.core.count.call(null,inst_31851);
var inst_31833 = inst_31852;
var inst_31834 = inst_31851;
var inst_31835 = inst_31853;
var inst_31836 = (0);
var state_31892__$1 = (function (){var statearr_31926 = state_31892;
(statearr_31926[(12)] = inst_31834);

(statearr_31926[(13)] = inst_31833);

(statearr_31926[(15)] = inst_31836);

(statearr_31926[(16)] = inst_31835);

return statearr_31926;
})();
var statearr_31927_31968 = state_31892__$1;
(statearr_31927_31968[(2)] = null);

(statearr_31927_31968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (10))){
var inst_31834 = (state_31892[(12)]);
var inst_31833 = (state_31892[(13)]);
var inst_31836 = (state_31892[(15)]);
var inst_31835 = (state_31892[(16)]);
var inst_31841 = cljs.core._nth.call(null,inst_31834,inst_31836);
var inst_31842 = cljs.core.async.muxch_STAR_.call(null,inst_31841);
var inst_31843 = cljs.core.async.close_BANG_.call(null,inst_31842);
var inst_31844 = (inst_31836 + (1));
var tmp31922 = inst_31834;
var tmp31923 = inst_31833;
var tmp31924 = inst_31835;
var inst_31833__$1 = tmp31923;
var inst_31834__$1 = tmp31922;
var inst_31835__$1 = tmp31924;
var inst_31836__$1 = inst_31844;
var state_31892__$1 = (function (){var statearr_31928 = state_31892;
(statearr_31928[(12)] = inst_31834__$1);

(statearr_31928[(13)] = inst_31833__$1);

(statearr_31928[(17)] = inst_31843);

(statearr_31928[(15)] = inst_31836__$1);

(statearr_31928[(16)] = inst_31835__$1);

return statearr_31928;
})();
var statearr_31929_31969 = state_31892__$1;
(statearr_31929_31969[(2)] = null);

(statearr_31929_31969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (18))){
var inst_31862 = (state_31892[(2)]);
var state_31892__$1 = state_31892;
var statearr_31930_31970 = state_31892__$1;
(statearr_31930_31970[(2)] = inst_31862);

(statearr_31930_31970[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31893 === (8))){
var inst_31836 = (state_31892[(15)]);
var inst_31835 = (state_31892[(16)]);
var inst_31838 = (inst_31836 < inst_31835);
var inst_31839 = inst_31838;
var state_31892__$1 = state_31892;
if(cljs.core.truth_(inst_31839)){
var statearr_31931_31971 = state_31892__$1;
(statearr_31931_31971[(1)] = (10));

} else {
var statearr_31932_31972 = state_31892__$1;
(statearr_31932_31972[(1)] = (11));

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
});})(c__30045__auto___31944,mults,ensure_mult,p))
;
return ((function (switch__29933__auto__,c__30045__auto___31944,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29934__auto__ = null;
var cljs$core$async$state_machine__29934__auto____0 = (function (){
var statearr_31936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31936[(0)] = cljs$core$async$state_machine__29934__auto__);

(statearr_31936[(1)] = (1));

return statearr_31936;
});
var cljs$core$async$state_machine__29934__auto____1 = (function (state_31892){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_31892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e31937){if((e31937 instanceof Object)){
var ex__29937__auto__ = e31937;
var statearr_31938_31973 = state_31892;
(statearr_31938_31973[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31974 = state_31892;
state_31892 = G__31974;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
cljs$core$async$state_machine__29934__auto__ = function(state_31892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29934__auto____1.call(this,state_31892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29934__auto____0;
cljs$core$async$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29934__auto____1;
return cljs$core$async$state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto___31944,mults,ensure_mult,p))
})();
var state__30047__auto__ = (function (){var statearr_31939 = f__30046__auto__.call(null);
(statearr_31939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___31944);

return statearr_31939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto___31944,mults,ensure_mult,p))
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
var args31975 = [];
var len__26984__auto___31978 = arguments.length;
var i__26985__auto___31979 = (0);
while(true){
if((i__26985__auto___31979 < len__26984__auto___31978)){
args31975.push((arguments[i__26985__auto___31979]));

var G__31980 = (i__26985__auto___31979 + (1));
i__26985__auto___31979 = G__31980;
continue;
} else {
}
break;
}

var G__31977 = args31975.length;
switch (G__31977) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31975.length)].join('')));

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
var args31982 = [];
var len__26984__auto___31985 = arguments.length;
var i__26985__auto___31986 = (0);
while(true){
if((i__26985__auto___31986 < len__26984__auto___31985)){
args31982.push((arguments[i__26985__auto___31986]));

var G__31987 = (i__26985__auto___31986 + (1));
i__26985__auto___31986 = G__31987;
continue;
} else {
}
break;
}

var G__31984 = args31982.length;
switch (G__31984) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31982.length)].join('')));

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
var args31989 = [];
var len__26984__auto___32060 = arguments.length;
var i__26985__auto___32061 = (0);
while(true){
if((i__26985__auto___32061 < len__26984__auto___32060)){
args31989.push((arguments[i__26985__auto___32061]));

var G__32062 = (i__26985__auto___32061 + (1));
i__26985__auto___32061 = G__32062;
continue;
} else {
}
break;
}

var G__31991 = args31989.length;
switch (G__31991) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31989.length)].join('')));

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
var c__30045__auto___32064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto___32064,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto___32064,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32030){
var state_val_32031 = (state_32030[(1)]);
if((state_val_32031 === (7))){
var state_32030__$1 = state_32030;
var statearr_32032_32065 = state_32030__$1;
(statearr_32032_32065[(2)] = null);

(statearr_32032_32065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (1))){
var state_32030__$1 = state_32030;
var statearr_32033_32066 = state_32030__$1;
(statearr_32033_32066[(2)] = null);

(statearr_32033_32066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (4))){
var inst_31994 = (state_32030[(7)]);
var inst_31996 = (inst_31994 < cnt);
var state_32030__$1 = state_32030;
if(cljs.core.truth_(inst_31996)){
var statearr_32034_32067 = state_32030__$1;
(statearr_32034_32067[(1)] = (6));

} else {
var statearr_32035_32068 = state_32030__$1;
(statearr_32035_32068[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (15))){
var inst_32026 = (state_32030[(2)]);
var state_32030__$1 = state_32030;
var statearr_32036_32069 = state_32030__$1;
(statearr_32036_32069[(2)] = inst_32026);

(statearr_32036_32069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (13))){
var inst_32019 = cljs.core.async.close_BANG_.call(null,out);
var state_32030__$1 = state_32030;
var statearr_32037_32070 = state_32030__$1;
(statearr_32037_32070[(2)] = inst_32019);

(statearr_32037_32070[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (6))){
var state_32030__$1 = state_32030;
var statearr_32038_32071 = state_32030__$1;
(statearr_32038_32071[(2)] = null);

(statearr_32038_32071[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (3))){
var inst_32028 = (state_32030[(2)]);
var state_32030__$1 = state_32030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32030__$1,inst_32028);
} else {
if((state_val_32031 === (12))){
var inst_32016 = (state_32030[(8)]);
var inst_32016__$1 = (state_32030[(2)]);
var inst_32017 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32016__$1);
var state_32030__$1 = (function (){var statearr_32039 = state_32030;
(statearr_32039[(8)] = inst_32016__$1);

return statearr_32039;
})();
if(cljs.core.truth_(inst_32017)){
var statearr_32040_32072 = state_32030__$1;
(statearr_32040_32072[(1)] = (13));

} else {
var statearr_32041_32073 = state_32030__$1;
(statearr_32041_32073[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (2))){
var inst_31993 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31994 = (0);
var state_32030__$1 = (function (){var statearr_32042 = state_32030;
(statearr_32042[(9)] = inst_31993);

(statearr_32042[(7)] = inst_31994);

return statearr_32042;
})();
var statearr_32043_32074 = state_32030__$1;
(statearr_32043_32074[(2)] = null);

(statearr_32043_32074[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (11))){
var inst_31994 = (state_32030[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32030,(10),Object,null,(9));
var inst_32003 = chs__$1.call(null,inst_31994);
var inst_32004 = done.call(null,inst_31994);
var inst_32005 = cljs.core.async.take_BANG_.call(null,inst_32003,inst_32004);
var state_32030__$1 = state_32030;
var statearr_32044_32075 = state_32030__$1;
(statearr_32044_32075[(2)] = inst_32005);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32030__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (9))){
var inst_31994 = (state_32030[(7)]);
var inst_32007 = (state_32030[(2)]);
var inst_32008 = (inst_31994 + (1));
var inst_31994__$1 = inst_32008;
var state_32030__$1 = (function (){var statearr_32045 = state_32030;
(statearr_32045[(10)] = inst_32007);

(statearr_32045[(7)] = inst_31994__$1);

return statearr_32045;
})();
var statearr_32046_32076 = state_32030__$1;
(statearr_32046_32076[(2)] = null);

(statearr_32046_32076[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (5))){
var inst_32014 = (state_32030[(2)]);
var state_32030__$1 = (function (){var statearr_32047 = state_32030;
(statearr_32047[(11)] = inst_32014);

return statearr_32047;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32030__$1,(12),dchan);
} else {
if((state_val_32031 === (14))){
var inst_32016 = (state_32030[(8)]);
var inst_32021 = cljs.core.apply.call(null,f,inst_32016);
var state_32030__$1 = state_32030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32030__$1,(16),out,inst_32021);
} else {
if((state_val_32031 === (16))){
var inst_32023 = (state_32030[(2)]);
var state_32030__$1 = (function (){var statearr_32048 = state_32030;
(statearr_32048[(12)] = inst_32023);

return statearr_32048;
})();
var statearr_32049_32077 = state_32030__$1;
(statearr_32049_32077[(2)] = null);

(statearr_32049_32077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (10))){
var inst_31998 = (state_32030[(2)]);
var inst_31999 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32030__$1 = (function (){var statearr_32050 = state_32030;
(statearr_32050[(13)] = inst_31998);

return statearr_32050;
})();
var statearr_32051_32078 = state_32030__$1;
(statearr_32051_32078[(2)] = inst_31999);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32030__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32031 === (8))){
var inst_32012 = (state_32030[(2)]);
var state_32030__$1 = state_32030;
var statearr_32052_32079 = state_32030__$1;
(statearr_32052_32079[(2)] = inst_32012);

(statearr_32052_32079[(1)] = (5));


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
});})(c__30045__auto___32064,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29933__auto__,c__30045__auto___32064,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29934__auto__ = null;
var cljs$core$async$state_machine__29934__auto____0 = (function (){
var statearr_32056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32056[(0)] = cljs$core$async$state_machine__29934__auto__);

(statearr_32056[(1)] = (1));

return statearr_32056;
});
var cljs$core$async$state_machine__29934__auto____1 = (function (state_32030){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_32030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e32057){if((e32057 instanceof Object)){
var ex__29937__auto__ = e32057;
var statearr_32058_32080 = state_32030;
(statearr_32058_32080[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32081 = state_32030;
state_32030 = G__32081;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
cljs$core$async$state_machine__29934__auto__ = function(state_32030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29934__auto____1.call(this,state_32030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29934__auto____0;
cljs$core$async$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29934__auto____1;
return cljs$core$async$state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto___32064,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30047__auto__ = (function (){var statearr_32059 = f__30046__auto__.call(null);
(statearr_32059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___32064);

return statearr_32059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto___32064,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args32083 = [];
var len__26984__auto___32139 = arguments.length;
var i__26985__auto___32140 = (0);
while(true){
if((i__26985__auto___32140 < len__26984__auto___32139)){
args32083.push((arguments[i__26985__auto___32140]));

var G__32141 = (i__26985__auto___32140 + (1));
i__26985__auto___32140 = G__32141;
continue;
} else {
}
break;
}

var G__32085 = args32083.length;
switch (G__32085) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32083.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30045__auto___32143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto___32143,out){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto___32143,out){
return (function (state_32115){
var state_val_32116 = (state_32115[(1)]);
if((state_val_32116 === (7))){
var inst_32094 = (state_32115[(7)]);
var inst_32095 = (state_32115[(8)]);
var inst_32094__$1 = (state_32115[(2)]);
var inst_32095__$1 = cljs.core.nth.call(null,inst_32094__$1,(0),null);
var inst_32096 = cljs.core.nth.call(null,inst_32094__$1,(1),null);
var inst_32097 = (inst_32095__$1 == null);
var state_32115__$1 = (function (){var statearr_32117 = state_32115;
(statearr_32117[(7)] = inst_32094__$1);

(statearr_32117[(9)] = inst_32096);

(statearr_32117[(8)] = inst_32095__$1);

return statearr_32117;
})();
if(cljs.core.truth_(inst_32097)){
var statearr_32118_32144 = state_32115__$1;
(statearr_32118_32144[(1)] = (8));

} else {
var statearr_32119_32145 = state_32115__$1;
(statearr_32119_32145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (1))){
var inst_32086 = cljs.core.vec.call(null,chs);
var inst_32087 = inst_32086;
var state_32115__$1 = (function (){var statearr_32120 = state_32115;
(statearr_32120[(10)] = inst_32087);

return statearr_32120;
})();
var statearr_32121_32146 = state_32115__$1;
(statearr_32121_32146[(2)] = null);

(statearr_32121_32146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (4))){
var inst_32087 = (state_32115[(10)]);
var state_32115__$1 = state_32115;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32115__$1,(7),inst_32087);
} else {
if((state_val_32116 === (6))){
var inst_32111 = (state_32115[(2)]);
var state_32115__$1 = state_32115;
var statearr_32122_32147 = state_32115__$1;
(statearr_32122_32147[(2)] = inst_32111);

(statearr_32122_32147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (3))){
var inst_32113 = (state_32115[(2)]);
var state_32115__$1 = state_32115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32115__$1,inst_32113);
} else {
if((state_val_32116 === (2))){
var inst_32087 = (state_32115[(10)]);
var inst_32089 = cljs.core.count.call(null,inst_32087);
var inst_32090 = (inst_32089 > (0));
var state_32115__$1 = state_32115;
if(cljs.core.truth_(inst_32090)){
var statearr_32124_32148 = state_32115__$1;
(statearr_32124_32148[(1)] = (4));

} else {
var statearr_32125_32149 = state_32115__$1;
(statearr_32125_32149[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (11))){
var inst_32087 = (state_32115[(10)]);
var inst_32104 = (state_32115[(2)]);
var tmp32123 = inst_32087;
var inst_32087__$1 = tmp32123;
var state_32115__$1 = (function (){var statearr_32126 = state_32115;
(statearr_32126[(11)] = inst_32104);

(statearr_32126[(10)] = inst_32087__$1);

return statearr_32126;
})();
var statearr_32127_32150 = state_32115__$1;
(statearr_32127_32150[(2)] = null);

(statearr_32127_32150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (9))){
var inst_32095 = (state_32115[(8)]);
var state_32115__$1 = state_32115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32115__$1,(11),out,inst_32095);
} else {
if((state_val_32116 === (5))){
var inst_32109 = cljs.core.async.close_BANG_.call(null,out);
var state_32115__$1 = state_32115;
var statearr_32128_32151 = state_32115__$1;
(statearr_32128_32151[(2)] = inst_32109);

(statearr_32128_32151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (10))){
var inst_32107 = (state_32115[(2)]);
var state_32115__$1 = state_32115;
var statearr_32129_32152 = state_32115__$1;
(statearr_32129_32152[(2)] = inst_32107);

(statearr_32129_32152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (8))){
var inst_32094 = (state_32115[(7)]);
var inst_32087 = (state_32115[(10)]);
var inst_32096 = (state_32115[(9)]);
var inst_32095 = (state_32115[(8)]);
var inst_32099 = (function (){var cs = inst_32087;
var vec__32092 = inst_32094;
var v = inst_32095;
var c = inst_32096;
return ((function (cs,vec__32092,v,c,inst_32094,inst_32087,inst_32096,inst_32095,state_val_32116,c__30045__auto___32143,out){
return (function (p1__32082_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32082_SHARP_);
});
;})(cs,vec__32092,v,c,inst_32094,inst_32087,inst_32096,inst_32095,state_val_32116,c__30045__auto___32143,out))
})();
var inst_32100 = cljs.core.filterv.call(null,inst_32099,inst_32087);
var inst_32087__$1 = inst_32100;
var state_32115__$1 = (function (){var statearr_32130 = state_32115;
(statearr_32130[(10)] = inst_32087__$1);

return statearr_32130;
})();
var statearr_32131_32153 = state_32115__$1;
(statearr_32131_32153[(2)] = null);

(statearr_32131_32153[(1)] = (2));


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
});})(c__30045__auto___32143,out))
;
return ((function (switch__29933__auto__,c__30045__auto___32143,out){
return (function() {
var cljs$core$async$state_machine__29934__auto__ = null;
var cljs$core$async$state_machine__29934__auto____0 = (function (){
var statearr_32135 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32135[(0)] = cljs$core$async$state_machine__29934__auto__);

(statearr_32135[(1)] = (1));

return statearr_32135;
});
var cljs$core$async$state_machine__29934__auto____1 = (function (state_32115){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_32115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e32136){if((e32136 instanceof Object)){
var ex__29937__auto__ = e32136;
var statearr_32137_32154 = state_32115;
(statearr_32137_32154[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32155 = state_32115;
state_32115 = G__32155;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
cljs$core$async$state_machine__29934__auto__ = function(state_32115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29934__auto____1.call(this,state_32115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29934__auto____0;
cljs$core$async$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29934__auto____1;
return cljs$core$async$state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto___32143,out))
})();
var state__30047__auto__ = (function (){var statearr_32138 = f__30046__auto__.call(null);
(statearr_32138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___32143);

return statearr_32138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto___32143,out))
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
var args32156 = [];
var len__26984__auto___32205 = arguments.length;
var i__26985__auto___32206 = (0);
while(true){
if((i__26985__auto___32206 < len__26984__auto___32205)){
args32156.push((arguments[i__26985__auto___32206]));

var G__32207 = (i__26985__auto___32206 + (1));
i__26985__auto___32206 = G__32207;
continue;
} else {
}
break;
}

var G__32158 = args32156.length;
switch (G__32158) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32156.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30045__auto___32209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto___32209,out){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto___32209,out){
return (function (state_32182){
var state_val_32183 = (state_32182[(1)]);
if((state_val_32183 === (7))){
var inst_32164 = (state_32182[(7)]);
var inst_32164__$1 = (state_32182[(2)]);
var inst_32165 = (inst_32164__$1 == null);
var inst_32166 = cljs.core.not.call(null,inst_32165);
var state_32182__$1 = (function (){var statearr_32184 = state_32182;
(statearr_32184[(7)] = inst_32164__$1);

return statearr_32184;
})();
if(inst_32166){
var statearr_32185_32210 = state_32182__$1;
(statearr_32185_32210[(1)] = (8));

} else {
var statearr_32186_32211 = state_32182__$1;
(statearr_32186_32211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (1))){
var inst_32159 = (0);
var state_32182__$1 = (function (){var statearr_32187 = state_32182;
(statearr_32187[(8)] = inst_32159);

return statearr_32187;
})();
var statearr_32188_32212 = state_32182__$1;
(statearr_32188_32212[(2)] = null);

(statearr_32188_32212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (4))){
var state_32182__$1 = state_32182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32182__$1,(7),ch);
} else {
if((state_val_32183 === (6))){
var inst_32177 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
var statearr_32189_32213 = state_32182__$1;
(statearr_32189_32213[(2)] = inst_32177);

(statearr_32189_32213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (3))){
var inst_32179 = (state_32182[(2)]);
var inst_32180 = cljs.core.async.close_BANG_.call(null,out);
var state_32182__$1 = (function (){var statearr_32190 = state_32182;
(statearr_32190[(9)] = inst_32179);

return statearr_32190;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32182__$1,inst_32180);
} else {
if((state_val_32183 === (2))){
var inst_32159 = (state_32182[(8)]);
var inst_32161 = (inst_32159 < n);
var state_32182__$1 = state_32182;
if(cljs.core.truth_(inst_32161)){
var statearr_32191_32214 = state_32182__$1;
(statearr_32191_32214[(1)] = (4));

} else {
var statearr_32192_32215 = state_32182__$1;
(statearr_32192_32215[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (11))){
var inst_32159 = (state_32182[(8)]);
var inst_32169 = (state_32182[(2)]);
var inst_32170 = (inst_32159 + (1));
var inst_32159__$1 = inst_32170;
var state_32182__$1 = (function (){var statearr_32193 = state_32182;
(statearr_32193[(8)] = inst_32159__$1);

(statearr_32193[(10)] = inst_32169);

return statearr_32193;
})();
var statearr_32194_32216 = state_32182__$1;
(statearr_32194_32216[(2)] = null);

(statearr_32194_32216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (9))){
var state_32182__$1 = state_32182;
var statearr_32195_32217 = state_32182__$1;
(statearr_32195_32217[(2)] = null);

(statearr_32195_32217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (5))){
var state_32182__$1 = state_32182;
var statearr_32196_32218 = state_32182__$1;
(statearr_32196_32218[(2)] = null);

(statearr_32196_32218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (10))){
var inst_32174 = (state_32182[(2)]);
var state_32182__$1 = state_32182;
var statearr_32197_32219 = state_32182__$1;
(statearr_32197_32219[(2)] = inst_32174);

(statearr_32197_32219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32183 === (8))){
var inst_32164 = (state_32182[(7)]);
var state_32182__$1 = state_32182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32182__$1,(11),out,inst_32164);
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
});})(c__30045__auto___32209,out))
;
return ((function (switch__29933__auto__,c__30045__auto___32209,out){
return (function() {
var cljs$core$async$state_machine__29934__auto__ = null;
var cljs$core$async$state_machine__29934__auto____0 = (function (){
var statearr_32201 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32201[(0)] = cljs$core$async$state_machine__29934__auto__);

(statearr_32201[(1)] = (1));

return statearr_32201;
});
var cljs$core$async$state_machine__29934__auto____1 = (function (state_32182){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_32182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e32202){if((e32202 instanceof Object)){
var ex__29937__auto__ = e32202;
var statearr_32203_32220 = state_32182;
(statearr_32203_32220[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32221 = state_32182;
state_32182 = G__32221;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
cljs$core$async$state_machine__29934__auto__ = function(state_32182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29934__auto____1.call(this,state_32182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29934__auto____0;
cljs$core$async$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29934__auto____1;
return cljs$core$async$state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto___32209,out))
})();
var state__30047__auto__ = (function (){var statearr_32204 = f__30046__auto__.call(null);
(statearr_32204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___32209);

return statearr_32204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto___32209,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32229 = (function (map_LT_,f,ch,meta32230){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32230 = meta32230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32231,meta32230__$1){
var self__ = this;
var _32231__$1 = this;
return (new cljs.core.async.t_cljs$core$async32229(self__.map_LT_,self__.f,self__.ch,meta32230__$1));
});

cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32231){
var self__ = this;
var _32231__$1 = this;
return self__.meta32230;
});

cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32232 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32232 = (function (map_LT_,f,ch,meta32230,_,fn1,meta32233){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32230 = meta32230;
this._ = _;
this.fn1 = fn1;
this.meta32233 = meta32233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32234,meta32233__$1){
var self__ = this;
var _32234__$1 = this;
return (new cljs.core.async.t_cljs$core$async32232(self__.map_LT_,self__.f,self__.ch,self__.meta32230,self__._,self__.fn1,meta32233__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32232.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32234){
var self__ = this;
var _32234__$1 = this;
return self__.meta32233;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32232.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32232.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32222_SHARP_){
return f1.call(null,(((p1__32222_SHARP_ == null))?null:self__.f.call(null,p1__32222_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32232.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32230","meta32230",1420975021,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32229","cljs.core.async/t_cljs$core$async32229",1402914869,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32233","meta32233",-925382242,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32232";

cljs.core.async.t_cljs$core$async32232.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"cljs.core.async/t_cljs$core$async32232");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32232 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32232(map_LT___$1,f__$1,ch__$1,meta32230__$1,___$2,fn1__$1,meta32233){
return (new cljs.core.async.t_cljs$core$async32232(map_LT___$1,f__$1,ch__$1,meta32230__$1,___$2,fn1__$1,meta32233));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32232(self__.map_LT_,self__.f,self__.ch,self__.meta32230,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25902__auto__ = ret;
if(cljs.core.truth_(and__25902__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25902__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32230","meta32230",1420975021,null)], null);
});

cljs.core.async.t_cljs$core$async32229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32229";

cljs.core.async.t_cljs$core$async32229.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"cljs.core.async/t_cljs$core$async32229");
});

cljs.core.async.__GT_t_cljs$core$async32229 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32229(map_LT___$1,f__$1,ch__$1,meta32230){
return (new cljs.core.async.t_cljs$core$async32229(map_LT___$1,f__$1,ch__$1,meta32230));
});

}

return (new cljs.core.async.t_cljs$core$async32229(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32238 = (function (map_GT_,f,ch,meta32239){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32239 = meta32239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32240,meta32239__$1){
var self__ = this;
var _32240__$1 = this;
return (new cljs.core.async.t_cljs$core$async32238(self__.map_GT_,self__.f,self__.ch,meta32239__$1));
});

cljs.core.async.t_cljs$core$async32238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32240){
var self__ = this;
var _32240__$1 = this;
return self__.meta32239;
});

cljs.core.async.t_cljs$core$async32238.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32238.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32238.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32238.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32238.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32238.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32239","meta32239",613804956,null)], null);
});

cljs.core.async.t_cljs$core$async32238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32238";

cljs.core.async.t_cljs$core$async32238.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"cljs.core.async/t_cljs$core$async32238");
});

cljs.core.async.__GT_t_cljs$core$async32238 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32238(map_GT___$1,f__$1,ch__$1,meta32239){
return (new cljs.core.async.t_cljs$core$async32238(map_GT___$1,f__$1,ch__$1,meta32239));
});

}

return (new cljs.core.async.t_cljs$core$async32238(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32244 = (function (filter_GT_,p,ch,meta32245){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32245 = meta32245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32246,meta32245__$1){
var self__ = this;
var _32246__$1 = this;
return (new cljs.core.async.t_cljs$core$async32244(self__.filter_GT_,self__.p,self__.ch,meta32245__$1));
});

cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32246){
var self__ = this;
var _32246__$1 = this;
return self__.meta32245;
});

cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32244.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32245","meta32245",-1286814908,null)], null);
});

cljs.core.async.t_cljs$core$async32244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32244";

cljs.core.async.t_cljs$core$async32244.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"cljs.core.async/t_cljs$core$async32244");
});

cljs.core.async.__GT_t_cljs$core$async32244 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32244(filter_GT___$1,p__$1,ch__$1,meta32245){
return (new cljs.core.async.t_cljs$core$async32244(filter_GT___$1,p__$1,ch__$1,meta32245));
});

}

return (new cljs.core.async.t_cljs$core$async32244(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args32247 = [];
var len__26984__auto___32291 = arguments.length;
var i__26985__auto___32292 = (0);
while(true){
if((i__26985__auto___32292 < len__26984__auto___32291)){
args32247.push((arguments[i__26985__auto___32292]));

var G__32293 = (i__26985__auto___32292 + (1));
i__26985__auto___32292 = G__32293;
continue;
} else {
}
break;
}

var G__32249 = args32247.length;
switch (G__32249) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32247.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30045__auto___32295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto___32295,out){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto___32295,out){
return (function (state_32270){
var state_val_32271 = (state_32270[(1)]);
if((state_val_32271 === (7))){
var inst_32266 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
var statearr_32272_32296 = state_32270__$1;
(statearr_32272_32296[(2)] = inst_32266);

(statearr_32272_32296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (1))){
var state_32270__$1 = state_32270;
var statearr_32273_32297 = state_32270__$1;
(statearr_32273_32297[(2)] = null);

(statearr_32273_32297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (4))){
var inst_32252 = (state_32270[(7)]);
var inst_32252__$1 = (state_32270[(2)]);
var inst_32253 = (inst_32252__$1 == null);
var state_32270__$1 = (function (){var statearr_32274 = state_32270;
(statearr_32274[(7)] = inst_32252__$1);

return statearr_32274;
})();
if(cljs.core.truth_(inst_32253)){
var statearr_32275_32298 = state_32270__$1;
(statearr_32275_32298[(1)] = (5));

} else {
var statearr_32276_32299 = state_32270__$1;
(statearr_32276_32299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (6))){
var inst_32252 = (state_32270[(7)]);
var inst_32257 = p.call(null,inst_32252);
var state_32270__$1 = state_32270;
if(cljs.core.truth_(inst_32257)){
var statearr_32277_32300 = state_32270__$1;
(statearr_32277_32300[(1)] = (8));

} else {
var statearr_32278_32301 = state_32270__$1;
(statearr_32278_32301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (3))){
var inst_32268 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32270__$1,inst_32268);
} else {
if((state_val_32271 === (2))){
var state_32270__$1 = state_32270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32270__$1,(4),ch);
} else {
if((state_val_32271 === (11))){
var inst_32260 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
var statearr_32279_32302 = state_32270__$1;
(statearr_32279_32302[(2)] = inst_32260);

(statearr_32279_32302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (9))){
var state_32270__$1 = state_32270;
var statearr_32280_32303 = state_32270__$1;
(statearr_32280_32303[(2)] = null);

(statearr_32280_32303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (5))){
var inst_32255 = cljs.core.async.close_BANG_.call(null,out);
var state_32270__$1 = state_32270;
var statearr_32281_32304 = state_32270__$1;
(statearr_32281_32304[(2)] = inst_32255);

(statearr_32281_32304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (10))){
var inst_32263 = (state_32270[(2)]);
var state_32270__$1 = (function (){var statearr_32282 = state_32270;
(statearr_32282[(8)] = inst_32263);

return statearr_32282;
})();
var statearr_32283_32305 = state_32270__$1;
(statearr_32283_32305[(2)] = null);

(statearr_32283_32305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (8))){
var inst_32252 = (state_32270[(7)]);
var state_32270__$1 = state_32270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32270__$1,(11),out,inst_32252);
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
});})(c__30045__auto___32295,out))
;
return ((function (switch__29933__auto__,c__30045__auto___32295,out){
return (function() {
var cljs$core$async$state_machine__29934__auto__ = null;
var cljs$core$async$state_machine__29934__auto____0 = (function (){
var statearr_32287 = [null,null,null,null,null,null,null,null,null];
(statearr_32287[(0)] = cljs$core$async$state_machine__29934__auto__);

(statearr_32287[(1)] = (1));

return statearr_32287;
});
var cljs$core$async$state_machine__29934__auto____1 = (function (state_32270){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_32270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e32288){if((e32288 instanceof Object)){
var ex__29937__auto__ = e32288;
var statearr_32289_32306 = state_32270;
(statearr_32289_32306[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32307 = state_32270;
state_32270 = G__32307;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
cljs$core$async$state_machine__29934__auto__ = function(state_32270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29934__auto____1.call(this,state_32270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29934__auto____0;
cljs$core$async$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29934__auto____1;
return cljs$core$async$state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto___32295,out))
})();
var state__30047__auto__ = (function (){var statearr_32290 = f__30046__auto__.call(null);
(statearr_32290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___32295);

return statearr_32290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto___32295,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32308 = [];
var len__26984__auto___32311 = arguments.length;
var i__26985__auto___32312 = (0);
while(true){
if((i__26985__auto___32312 < len__26984__auto___32311)){
args32308.push((arguments[i__26985__auto___32312]));

var G__32313 = (i__26985__auto___32312 + (1));
i__26985__auto___32312 = G__32313;
continue;
} else {
}
break;
}

var G__32310 = args32308.length;
switch (G__32310) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32308.length)].join('')));

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
var c__30045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto__){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto__){
return (function (state_32480){
var state_val_32481 = (state_32480[(1)]);
if((state_val_32481 === (7))){
var inst_32476 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32482_32523 = state_32480__$1;
(statearr_32482_32523[(2)] = inst_32476);

(statearr_32482_32523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (20))){
var inst_32446 = (state_32480[(7)]);
var inst_32457 = (state_32480[(2)]);
var inst_32458 = cljs.core.next.call(null,inst_32446);
var inst_32432 = inst_32458;
var inst_32433 = null;
var inst_32434 = (0);
var inst_32435 = (0);
var state_32480__$1 = (function (){var statearr_32483 = state_32480;
(statearr_32483[(8)] = inst_32434);

(statearr_32483[(9)] = inst_32433);

(statearr_32483[(10)] = inst_32457);

(statearr_32483[(11)] = inst_32432);

(statearr_32483[(12)] = inst_32435);

return statearr_32483;
})();
var statearr_32484_32524 = state_32480__$1;
(statearr_32484_32524[(2)] = null);

(statearr_32484_32524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (1))){
var state_32480__$1 = state_32480;
var statearr_32485_32525 = state_32480__$1;
(statearr_32485_32525[(2)] = null);

(statearr_32485_32525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (4))){
var inst_32421 = (state_32480[(13)]);
var inst_32421__$1 = (state_32480[(2)]);
var inst_32422 = (inst_32421__$1 == null);
var state_32480__$1 = (function (){var statearr_32486 = state_32480;
(statearr_32486[(13)] = inst_32421__$1);

return statearr_32486;
})();
if(cljs.core.truth_(inst_32422)){
var statearr_32487_32526 = state_32480__$1;
(statearr_32487_32526[(1)] = (5));

} else {
var statearr_32488_32527 = state_32480__$1;
(statearr_32488_32527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (15))){
var state_32480__$1 = state_32480;
var statearr_32492_32528 = state_32480__$1;
(statearr_32492_32528[(2)] = null);

(statearr_32492_32528[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (21))){
var state_32480__$1 = state_32480;
var statearr_32493_32529 = state_32480__$1;
(statearr_32493_32529[(2)] = null);

(statearr_32493_32529[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (13))){
var inst_32434 = (state_32480[(8)]);
var inst_32433 = (state_32480[(9)]);
var inst_32432 = (state_32480[(11)]);
var inst_32435 = (state_32480[(12)]);
var inst_32442 = (state_32480[(2)]);
var inst_32443 = (inst_32435 + (1));
var tmp32489 = inst_32434;
var tmp32490 = inst_32433;
var tmp32491 = inst_32432;
var inst_32432__$1 = tmp32491;
var inst_32433__$1 = tmp32490;
var inst_32434__$1 = tmp32489;
var inst_32435__$1 = inst_32443;
var state_32480__$1 = (function (){var statearr_32494 = state_32480;
(statearr_32494[(14)] = inst_32442);

(statearr_32494[(8)] = inst_32434__$1);

(statearr_32494[(9)] = inst_32433__$1);

(statearr_32494[(11)] = inst_32432__$1);

(statearr_32494[(12)] = inst_32435__$1);

return statearr_32494;
})();
var statearr_32495_32530 = state_32480__$1;
(statearr_32495_32530[(2)] = null);

(statearr_32495_32530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (22))){
var state_32480__$1 = state_32480;
var statearr_32496_32531 = state_32480__$1;
(statearr_32496_32531[(2)] = null);

(statearr_32496_32531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (6))){
var inst_32421 = (state_32480[(13)]);
var inst_32430 = f.call(null,inst_32421);
var inst_32431 = cljs.core.seq.call(null,inst_32430);
var inst_32432 = inst_32431;
var inst_32433 = null;
var inst_32434 = (0);
var inst_32435 = (0);
var state_32480__$1 = (function (){var statearr_32497 = state_32480;
(statearr_32497[(8)] = inst_32434);

(statearr_32497[(9)] = inst_32433);

(statearr_32497[(11)] = inst_32432);

(statearr_32497[(12)] = inst_32435);

return statearr_32497;
})();
var statearr_32498_32532 = state_32480__$1;
(statearr_32498_32532[(2)] = null);

(statearr_32498_32532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (17))){
var inst_32446 = (state_32480[(7)]);
var inst_32450 = cljs.core.chunk_first.call(null,inst_32446);
var inst_32451 = cljs.core.chunk_rest.call(null,inst_32446);
var inst_32452 = cljs.core.count.call(null,inst_32450);
var inst_32432 = inst_32451;
var inst_32433 = inst_32450;
var inst_32434 = inst_32452;
var inst_32435 = (0);
var state_32480__$1 = (function (){var statearr_32499 = state_32480;
(statearr_32499[(8)] = inst_32434);

(statearr_32499[(9)] = inst_32433);

(statearr_32499[(11)] = inst_32432);

(statearr_32499[(12)] = inst_32435);

return statearr_32499;
})();
var statearr_32500_32533 = state_32480__$1;
(statearr_32500_32533[(2)] = null);

(statearr_32500_32533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (3))){
var inst_32478 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32480__$1,inst_32478);
} else {
if((state_val_32481 === (12))){
var inst_32466 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32501_32534 = state_32480__$1;
(statearr_32501_32534[(2)] = inst_32466);

(statearr_32501_32534[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (2))){
var state_32480__$1 = state_32480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32480__$1,(4),in$);
} else {
if((state_val_32481 === (23))){
var inst_32474 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32502_32535 = state_32480__$1;
(statearr_32502_32535[(2)] = inst_32474);

(statearr_32502_32535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (19))){
var inst_32461 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32503_32536 = state_32480__$1;
(statearr_32503_32536[(2)] = inst_32461);

(statearr_32503_32536[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (11))){
var inst_32446 = (state_32480[(7)]);
var inst_32432 = (state_32480[(11)]);
var inst_32446__$1 = cljs.core.seq.call(null,inst_32432);
var state_32480__$1 = (function (){var statearr_32504 = state_32480;
(statearr_32504[(7)] = inst_32446__$1);

return statearr_32504;
})();
if(inst_32446__$1){
var statearr_32505_32537 = state_32480__$1;
(statearr_32505_32537[(1)] = (14));

} else {
var statearr_32506_32538 = state_32480__$1;
(statearr_32506_32538[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (9))){
var inst_32468 = (state_32480[(2)]);
var inst_32469 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32480__$1 = (function (){var statearr_32507 = state_32480;
(statearr_32507[(15)] = inst_32468);

return statearr_32507;
})();
if(cljs.core.truth_(inst_32469)){
var statearr_32508_32539 = state_32480__$1;
(statearr_32508_32539[(1)] = (21));

} else {
var statearr_32509_32540 = state_32480__$1;
(statearr_32509_32540[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (5))){
var inst_32424 = cljs.core.async.close_BANG_.call(null,out);
var state_32480__$1 = state_32480;
var statearr_32510_32541 = state_32480__$1;
(statearr_32510_32541[(2)] = inst_32424);

(statearr_32510_32541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (14))){
var inst_32446 = (state_32480[(7)]);
var inst_32448 = cljs.core.chunked_seq_QMARK_.call(null,inst_32446);
var state_32480__$1 = state_32480;
if(inst_32448){
var statearr_32511_32542 = state_32480__$1;
(statearr_32511_32542[(1)] = (17));

} else {
var statearr_32512_32543 = state_32480__$1;
(statearr_32512_32543[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (16))){
var inst_32464 = (state_32480[(2)]);
var state_32480__$1 = state_32480;
var statearr_32513_32544 = state_32480__$1;
(statearr_32513_32544[(2)] = inst_32464);

(statearr_32513_32544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32481 === (10))){
var inst_32433 = (state_32480[(9)]);
var inst_32435 = (state_32480[(12)]);
var inst_32440 = cljs.core._nth.call(null,inst_32433,inst_32435);
var state_32480__$1 = state_32480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32480__$1,(13),out,inst_32440);
} else {
if((state_val_32481 === (18))){
var inst_32446 = (state_32480[(7)]);
var inst_32455 = cljs.core.first.call(null,inst_32446);
var state_32480__$1 = state_32480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32480__$1,(20),out,inst_32455);
} else {
if((state_val_32481 === (8))){
var inst_32434 = (state_32480[(8)]);
var inst_32435 = (state_32480[(12)]);
var inst_32437 = (inst_32435 < inst_32434);
var inst_32438 = inst_32437;
var state_32480__$1 = state_32480;
if(cljs.core.truth_(inst_32438)){
var statearr_32514_32545 = state_32480__$1;
(statearr_32514_32545[(1)] = (10));

} else {
var statearr_32515_32546 = state_32480__$1;
(statearr_32515_32546[(1)] = (11));

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
});})(c__30045__auto__))
;
return ((function (switch__29933__auto__,c__30045__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29934__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29934__auto____0 = (function (){
var statearr_32519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32519[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29934__auto__);

(statearr_32519[(1)] = (1));

return statearr_32519;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29934__auto____1 = (function (state_32480){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_32480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e32520){if((e32520 instanceof Object)){
var ex__29937__auto__ = e32520;
var statearr_32521_32547 = state_32480;
(statearr_32521_32547[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32548 = state_32480;
state_32480 = G__32548;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29934__auto__ = function(state_32480){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29934__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29934__auto____1.call(this,state_32480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29934__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29934__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto__))
})();
var state__30047__auto__ = (function (){var statearr_32522 = f__30046__auto__.call(null);
(statearr_32522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto__);

return statearr_32522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto__))
);

return c__30045__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32549 = [];
var len__26984__auto___32552 = arguments.length;
var i__26985__auto___32553 = (0);
while(true){
if((i__26985__auto___32553 < len__26984__auto___32552)){
args32549.push((arguments[i__26985__auto___32553]));

var G__32554 = (i__26985__auto___32553 + (1));
i__26985__auto___32553 = G__32554;
continue;
} else {
}
break;
}

var G__32551 = args32549.length;
switch (G__32551) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32549.length)].join('')));

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
var args32556 = [];
var len__26984__auto___32559 = arguments.length;
var i__26985__auto___32560 = (0);
while(true){
if((i__26985__auto___32560 < len__26984__auto___32559)){
args32556.push((arguments[i__26985__auto___32560]));

var G__32561 = (i__26985__auto___32560 + (1));
i__26985__auto___32560 = G__32561;
continue;
} else {
}
break;
}

var G__32558 = args32556.length;
switch (G__32558) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32556.length)].join('')));

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
var args32563 = [];
var len__26984__auto___32614 = arguments.length;
var i__26985__auto___32615 = (0);
while(true){
if((i__26985__auto___32615 < len__26984__auto___32614)){
args32563.push((arguments[i__26985__auto___32615]));

var G__32616 = (i__26985__auto___32615 + (1));
i__26985__auto___32615 = G__32616;
continue;
} else {
}
break;
}

var G__32565 = args32563.length;
switch (G__32565) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32563.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30045__auto___32618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto___32618,out){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto___32618,out){
return (function (state_32589){
var state_val_32590 = (state_32589[(1)]);
if((state_val_32590 === (7))){
var inst_32584 = (state_32589[(2)]);
var state_32589__$1 = state_32589;
var statearr_32591_32619 = state_32589__$1;
(statearr_32591_32619[(2)] = inst_32584);

(statearr_32591_32619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32590 === (1))){
var inst_32566 = null;
var state_32589__$1 = (function (){var statearr_32592 = state_32589;
(statearr_32592[(7)] = inst_32566);

return statearr_32592;
})();
var statearr_32593_32620 = state_32589__$1;
(statearr_32593_32620[(2)] = null);

(statearr_32593_32620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32590 === (4))){
var inst_32569 = (state_32589[(8)]);
var inst_32569__$1 = (state_32589[(2)]);
var inst_32570 = (inst_32569__$1 == null);
var inst_32571 = cljs.core.not.call(null,inst_32570);
var state_32589__$1 = (function (){var statearr_32594 = state_32589;
(statearr_32594[(8)] = inst_32569__$1);

return statearr_32594;
})();
if(inst_32571){
var statearr_32595_32621 = state_32589__$1;
(statearr_32595_32621[(1)] = (5));

} else {
var statearr_32596_32622 = state_32589__$1;
(statearr_32596_32622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32590 === (6))){
var state_32589__$1 = state_32589;
var statearr_32597_32623 = state_32589__$1;
(statearr_32597_32623[(2)] = null);

(statearr_32597_32623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32590 === (3))){
var inst_32586 = (state_32589[(2)]);
var inst_32587 = cljs.core.async.close_BANG_.call(null,out);
var state_32589__$1 = (function (){var statearr_32598 = state_32589;
(statearr_32598[(9)] = inst_32586);

return statearr_32598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32589__$1,inst_32587);
} else {
if((state_val_32590 === (2))){
var state_32589__$1 = state_32589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32589__$1,(4),ch);
} else {
if((state_val_32590 === (11))){
var inst_32569 = (state_32589[(8)]);
var inst_32578 = (state_32589[(2)]);
var inst_32566 = inst_32569;
var state_32589__$1 = (function (){var statearr_32599 = state_32589;
(statearr_32599[(10)] = inst_32578);

(statearr_32599[(7)] = inst_32566);

return statearr_32599;
})();
var statearr_32600_32624 = state_32589__$1;
(statearr_32600_32624[(2)] = null);

(statearr_32600_32624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32590 === (9))){
var inst_32569 = (state_32589[(8)]);
var state_32589__$1 = state_32589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32589__$1,(11),out,inst_32569);
} else {
if((state_val_32590 === (5))){
var inst_32569 = (state_32589[(8)]);
var inst_32566 = (state_32589[(7)]);
var inst_32573 = cljs.core._EQ_.call(null,inst_32569,inst_32566);
var state_32589__$1 = state_32589;
if(inst_32573){
var statearr_32602_32625 = state_32589__$1;
(statearr_32602_32625[(1)] = (8));

} else {
var statearr_32603_32626 = state_32589__$1;
(statearr_32603_32626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32590 === (10))){
var inst_32581 = (state_32589[(2)]);
var state_32589__$1 = state_32589;
var statearr_32604_32627 = state_32589__$1;
(statearr_32604_32627[(2)] = inst_32581);

(statearr_32604_32627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32590 === (8))){
var inst_32566 = (state_32589[(7)]);
var tmp32601 = inst_32566;
var inst_32566__$1 = tmp32601;
var state_32589__$1 = (function (){var statearr_32605 = state_32589;
(statearr_32605[(7)] = inst_32566__$1);

return statearr_32605;
})();
var statearr_32606_32628 = state_32589__$1;
(statearr_32606_32628[(2)] = null);

(statearr_32606_32628[(1)] = (2));


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
});})(c__30045__auto___32618,out))
;
return ((function (switch__29933__auto__,c__30045__auto___32618,out){
return (function() {
var cljs$core$async$state_machine__29934__auto__ = null;
var cljs$core$async$state_machine__29934__auto____0 = (function (){
var statearr_32610 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32610[(0)] = cljs$core$async$state_machine__29934__auto__);

(statearr_32610[(1)] = (1));

return statearr_32610;
});
var cljs$core$async$state_machine__29934__auto____1 = (function (state_32589){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_32589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e32611){if((e32611 instanceof Object)){
var ex__29937__auto__ = e32611;
var statearr_32612_32629 = state_32589;
(statearr_32612_32629[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32630 = state_32589;
state_32589 = G__32630;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
cljs$core$async$state_machine__29934__auto__ = function(state_32589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29934__auto____1.call(this,state_32589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29934__auto____0;
cljs$core$async$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29934__auto____1;
return cljs$core$async$state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto___32618,out))
})();
var state__30047__auto__ = (function (){var statearr_32613 = f__30046__auto__.call(null);
(statearr_32613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___32618);

return statearr_32613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto___32618,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32631 = [];
var len__26984__auto___32701 = arguments.length;
var i__26985__auto___32702 = (0);
while(true){
if((i__26985__auto___32702 < len__26984__auto___32701)){
args32631.push((arguments[i__26985__auto___32702]));

var G__32703 = (i__26985__auto___32702 + (1));
i__26985__auto___32702 = G__32703;
continue;
} else {
}
break;
}

var G__32633 = args32631.length;
switch (G__32633) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32631.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30045__auto___32705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto___32705,out){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto___32705,out){
return (function (state_32671){
var state_val_32672 = (state_32671[(1)]);
if((state_val_32672 === (7))){
var inst_32667 = (state_32671[(2)]);
var state_32671__$1 = state_32671;
var statearr_32673_32706 = state_32671__$1;
(statearr_32673_32706[(2)] = inst_32667);

(statearr_32673_32706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32672 === (1))){
var inst_32634 = (new Array(n));
var inst_32635 = inst_32634;
var inst_32636 = (0);
var state_32671__$1 = (function (){var statearr_32674 = state_32671;
(statearr_32674[(7)] = inst_32635);

(statearr_32674[(8)] = inst_32636);

return statearr_32674;
})();
var statearr_32675_32707 = state_32671__$1;
(statearr_32675_32707[(2)] = null);

(statearr_32675_32707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32672 === (4))){
var inst_32639 = (state_32671[(9)]);
var inst_32639__$1 = (state_32671[(2)]);
var inst_32640 = (inst_32639__$1 == null);
var inst_32641 = cljs.core.not.call(null,inst_32640);
var state_32671__$1 = (function (){var statearr_32676 = state_32671;
(statearr_32676[(9)] = inst_32639__$1);

return statearr_32676;
})();
if(inst_32641){
var statearr_32677_32708 = state_32671__$1;
(statearr_32677_32708[(1)] = (5));

} else {
var statearr_32678_32709 = state_32671__$1;
(statearr_32678_32709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32672 === (15))){
var inst_32661 = (state_32671[(2)]);
var state_32671__$1 = state_32671;
var statearr_32679_32710 = state_32671__$1;
(statearr_32679_32710[(2)] = inst_32661);

(statearr_32679_32710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32672 === (13))){
var state_32671__$1 = state_32671;
var statearr_32680_32711 = state_32671__$1;
(statearr_32680_32711[(2)] = null);

(statearr_32680_32711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32672 === (6))){
var inst_32636 = (state_32671[(8)]);
var inst_32657 = (inst_32636 > (0));
var state_32671__$1 = state_32671;
if(cljs.core.truth_(inst_32657)){
var statearr_32681_32712 = state_32671__$1;
(statearr_32681_32712[(1)] = (12));

} else {
var statearr_32682_32713 = state_32671__$1;
(statearr_32682_32713[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32672 === (3))){
var inst_32669 = (state_32671[(2)]);
var state_32671__$1 = state_32671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32671__$1,inst_32669);
} else {
if((state_val_32672 === (12))){
var inst_32635 = (state_32671[(7)]);
var inst_32659 = cljs.core.vec.call(null,inst_32635);
var state_32671__$1 = state_32671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32671__$1,(15),out,inst_32659);
} else {
if((state_val_32672 === (2))){
var state_32671__$1 = state_32671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32671__$1,(4),ch);
} else {
if((state_val_32672 === (11))){
var inst_32651 = (state_32671[(2)]);
var inst_32652 = (new Array(n));
var inst_32635 = inst_32652;
var inst_32636 = (0);
var state_32671__$1 = (function (){var statearr_32683 = state_32671;
(statearr_32683[(7)] = inst_32635);

(statearr_32683[(8)] = inst_32636);

(statearr_32683[(10)] = inst_32651);

return statearr_32683;
})();
var statearr_32684_32714 = state_32671__$1;
(statearr_32684_32714[(2)] = null);

(statearr_32684_32714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32672 === (9))){
var inst_32635 = (state_32671[(7)]);
var inst_32649 = cljs.core.vec.call(null,inst_32635);
var state_32671__$1 = state_32671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32671__$1,(11),out,inst_32649);
} else {
if((state_val_32672 === (5))){
var inst_32639 = (state_32671[(9)]);
var inst_32635 = (state_32671[(7)]);
var inst_32644 = (state_32671[(11)]);
var inst_32636 = (state_32671[(8)]);
var inst_32643 = (inst_32635[inst_32636] = inst_32639);
var inst_32644__$1 = (inst_32636 + (1));
var inst_32645 = (inst_32644__$1 < n);
var state_32671__$1 = (function (){var statearr_32685 = state_32671;
(statearr_32685[(11)] = inst_32644__$1);

(statearr_32685[(12)] = inst_32643);

return statearr_32685;
})();
if(cljs.core.truth_(inst_32645)){
var statearr_32686_32715 = state_32671__$1;
(statearr_32686_32715[(1)] = (8));

} else {
var statearr_32687_32716 = state_32671__$1;
(statearr_32687_32716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32672 === (14))){
var inst_32664 = (state_32671[(2)]);
var inst_32665 = cljs.core.async.close_BANG_.call(null,out);
var state_32671__$1 = (function (){var statearr_32689 = state_32671;
(statearr_32689[(13)] = inst_32664);

return statearr_32689;
})();
var statearr_32690_32717 = state_32671__$1;
(statearr_32690_32717[(2)] = inst_32665);

(statearr_32690_32717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32672 === (10))){
var inst_32655 = (state_32671[(2)]);
var state_32671__$1 = state_32671;
var statearr_32691_32718 = state_32671__$1;
(statearr_32691_32718[(2)] = inst_32655);

(statearr_32691_32718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32672 === (8))){
var inst_32635 = (state_32671[(7)]);
var inst_32644 = (state_32671[(11)]);
var tmp32688 = inst_32635;
var inst_32635__$1 = tmp32688;
var inst_32636 = inst_32644;
var state_32671__$1 = (function (){var statearr_32692 = state_32671;
(statearr_32692[(7)] = inst_32635__$1);

(statearr_32692[(8)] = inst_32636);

return statearr_32692;
})();
var statearr_32693_32719 = state_32671__$1;
(statearr_32693_32719[(2)] = null);

(statearr_32693_32719[(1)] = (2));


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
});})(c__30045__auto___32705,out))
;
return ((function (switch__29933__auto__,c__30045__auto___32705,out){
return (function() {
var cljs$core$async$state_machine__29934__auto__ = null;
var cljs$core$async$state_machine__29934__auto____0 = (function (){
var statearr_32697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32697[(0)] = cljs$core$async$state_machine__29934__auto__);

(statearr_32697[(1)] = (1));

return statearr_32697;
});
var cljs$core$async$state_machine__29934__auto____1 = (function (state_32671){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_32671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e32698){if((e32698 instanceof Object)){
var ex__29937__auto__ = e32698;
var statearr_32699_32720 = state_32671;
(statearr_32699_32720[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32721 = state_32671;
state_32671 = G__32721;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
cljs$core$async$state_machine__29934__auto__ = function(state_32671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29934__auto____1.call(this,state_32671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29934__auto____0;
cljs$core$async$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29934__auto____1;
return cljs$core$async$state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto___32705,out))
})();
var state__30047__auto__ = (function (){var statearr_32700 = f__30046__auto__.call(null);
(statearr_32700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___32705);

return statearr_32700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto___32705,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32722 = [];
var len__26984__auto___32796 = arguments.length;
var i__26985__auto___32797 = (0);
while(true){
if((i__26985__auto___32797 < len__26984__auto___32796)){
args32722.push((arguments[i__26985__auto___32797]));

var G__32798 = (i__26985__auto___32797 + (1));
i__26985__auto___32797 = G__32798;
continue;
} else {
}
break;
}

var G__32724 = args32722.length;
switch (G__32724) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32722.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30045__auto___32800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto___32800,out){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto___32800,out){
return (function (state_32766){
var state_val_32767 = (state_32766[(1)]);
if((state_val_32767 === (7))){
var inst_32762 = (state_32766[(2)]);
var state_32766__$1 = state_32766;
var statearr_32768_32801 = state_32766__$1;
(statearr_32768_32801[(2)] = inst_32762);

(statearr_32768_32801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (1))){
var inst_32725 = [];
var inst_32726 = inst_32725;
var inst_32727 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32766__$1 = (function (){var statearr_32769 = state_32766;
(statearr_32769[(7)] = inst_32727);

(statearr_32769[(8)] = inst_32726);

return statearr_32769;
})();
var statearr_32770_32802 = state_32766__$1;
(statearr_32770_32802[(2)] = null);

(statearr_32770_32802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (4))){
var inst_32730 = (state_32766[(9)]);
var inst_32730__$1 = (state_32766[(2)]);
var inst_32731 = (inst_32730__$1 == null);
var inst_32732 = cljs.core.not.call(null,inst_32731);
var state_32766__$1 = (function (){var statearr_32771 = state_32766;
(statearr_32771[(9)] = inst_32730__$1);

return statearr_32771;
})();
if(inst_32732){
var statearr_32772_32803 = state_32766__$1;
(statearr_32772_32803[(1)] = (5));

} else {
var statearr_32773_32804 = state_32766__$1;
(statearr_32773_32804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (15))){
var inst_32756 = (state_32766[(2)]);
var state_32766__$1 = state_32766;
var statearr_32774_32805 = state_32766__$1;
(statearr_32774_32805[(2)] = inst_32756);

(statearr_32774_32805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (13))){
var state_32766__$1 = state_32766;
var statearr_32775_32806 = state_32766__$1;
(statearr_32775_32806[(2)] = null);

(statearr_32775_32806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (6))){
var inst_32726 = (state_32766[(8)]);
var inst_32751 = inst_32726.length;
var inst_32752 = (inst_32751 > (0));
var state_32766__$1 = state_32766;
if(cljs.core.truth_(inst_32752)){
var statearr_32776_32807 = state_32766__$1;
(statearr_32776_32807[(1)] = (12));

} else {
var statearr_32777_32808 = state_32766__$1;
(statearr_32777_32808[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (3))){
var inst_32764 = (state_32766[(2)]);
var state_32766__$1 = state_32766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32766__$1,inst_32764);
} else {
if((state_val_32767 === (12))){
var inst_32726 = (state_32766[(8)]);
var inst_32754 = cljs.core.vec.call(null,inst_32726);
var state_32766__$1 = state_32766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32766__$1,(15),out,inst_32754);
} else {
if((state_val_32767 === (2))){
var state_32766__$1 = state_32766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32766__$1,(4),ch);
} else {
if((state_val_32767 === (11))){
var inst_32734 = (state_32766[(10)]);
var inst_32730 = (state_32766[(9)]);
var inst_32744 = (state_32766[(2)]);
var inst_32745 = [];
var inst_32746 = inst_32745.push(inst_32730);
var inst_32726 = inst_32745;
var inst_32727 = inst_32734;
var state_32766__$1 = (function (){var statearr_32778 = state_32766;
(statearr_32778[(11)] = inst_32746);

(statearr_32778[(7)] = inst_32727);

(statearr_32778[(12)] = inst_32744);

(statearr_32778[(8)] = inst_32726);

return statearr_32778;
})();
var statearr_32779_32809 = state_32766__$1;
(statearr_32779_32809[(2)] = null);

(statearr_32779_32809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (9))){
var inst_32726 = (state_32766[(8)]);
var inst_32742 = cljs.core.vec.call(null,inst_32726);
var state_32766__$1 = state_32766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32766__$1,(11),out,inst_32742);
} else {
if((state_val_32767 === (5))){
var inst_32727 = (state_32766[(7)]);
var inst_32734 = (state_32766[(10)]);
var inst_32730 = (state_32766[(9)]);
var inst_32734__$1 = f.call(null,inst_32730);
var inst_32735 = cljs.core._EQ_.call(null,inst_32734__$1,inst_32727);
var inst_32736 = cljs.core.keyword_identical_QMARK_.call(null,inst_32727,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32737 = (inst_32735) || (inst_32736);
var state_32766__$1 = (function (){var statearr_32780 = state_32766;
(statearr_32780[(10)] = inst_32734__$1);

return statearr_32780;
})();
if(cljs.core.truth_(inst_32737)){
var statearr_32781_32810 = state_32766__$1;
(statearr_32781_32810[(1)] = (8));

} else {
var statearr_32782_32811 = state_32766__$1;
(statearr_32782_32811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (14))){
var inst_32759 = (state_32766[(2)]);
var inst_32760 = cljs.core.async.close_BANG_.call(null,out);
var state_32766__$1 = (function (){var statearr_32784 = state_32766;
(statearr_32784[(13)] = inst_32759);

return statearr_32784;
})();
var statearr_32785_32812 = state_32766__$1;
(statearr_32785_32812[(2)] = inst_32760);

(statearr_32785_32812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (10))){
var inst_32749 = (state_32766[(2)]);
var state_32766__$1 = state_32766;
var statearr_32786_32813 = state_32766__$1;
(statearr_32786_32813[(2)] = inst_32749);

(statearr_32786_32813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (8))){
var inst_32734 = (state_32766[(10)]);
var inst_32730 = (state_32766[(9)]);
var inst_32726 = (state_32766[(8)]);
var inst_32739 = inst_32726.push(inst_32730);
var tmp32783 = inst_32726;
var inst_32726__$1 = tmp32783;
var inst_32727 = inst_32734;
var state_32766__$1 = (function (){var statearr_32787 = state_32766;
(statearr_32787[(14)] = inst_32739);

(statearr_32787[(7)] = inst_32727);

(statearr_32787[(8)] = inst_32726__$1);

return statearr_32787;
})();
var statearr_32788_32814 = state_32766__$1;
(statearr_32788_32814[(2)] = null);

(statearr_32788_32814[(1)] = (2));


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
});})(c__30045__auto___32800,out))
;
return ((function (switch__29933__auto__,c__30045__auto___32800,out){
return (function() {
var cljs$core$async$state_machine__29934__auto__ = null;
var cljs$core$async$state_machine__29934__auto____0 = (function (){
var statearr_32792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32792[(0)] = cljs$core$async$state_machine__29934__auto__);

(statearr_32792[(1)] = (1));

return statearr_32792;
});
var cljs$core$async$state_machine__29934__auto____1 = (function (state_32766){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_32766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e32793){if((e32793 instanceof Object)){
var ex__29937__auto__ = e32793;
var statearr_32794_32815 = state_32766;
(statearr_32794_32815[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32816 = state_32766;
state_32766 = G__32816;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
cljs$core$async$state_machine__29934__auto__ = function(state_32766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29934__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29934__auto____1.call(this,state_32766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29934__auto____0;
cljs$core$async$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29934__auto____1;
return cljs$core$async$state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto___32800,out))
})();
var state__30047__auto__ = (function (){var statearr_32795 = f__30046__auto__.call(null);
(statearr_32795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___32800);

return statearr_32795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto___32800,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map