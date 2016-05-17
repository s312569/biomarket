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
var args27039 = [];
var len__23933__auto___27045 = arguments.length;
var i__23934__auto___27046 = (0);
while(true){
if((i__23934__auto___27046 < len__23933__auto___27045)){
args27039.push((arguments[i__23934__auto___27046]));

var G__27047 = (i__23934__auto___27046 + (1));
i__23934__auto___27046 = G__27047;
continue;
} else {
}
break;
}

var G__27041 = args27039.length;
switch (G__27041) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27039.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27042 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27042 = (function (f,blockable,meta27043){
this.f = f;
this.blockable = blockable;
this.meta27043 = meta27043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27044,meta27043__$1){
var self__ = this;
var _27044__$1 = this;
return (new cljs.core.async.t_cljs$core$async27042(self__.f,self__.blockable,meta27043__$1));
});

cljs.core.async.t_cljs$core$async27042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27044){
var self__ = this;
var _27044__$1 = this;
return self__.meta27043;
});

cljs.core.async.t_cljs$core$async27042.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27042.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27042.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27042.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27042.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27043","meta27043",-2074590919,null)], null);
});

cljs.core.async.t_cljs$core$async27042.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27042.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27042";

cljs.core.async.t_cljs$core$async27042.cljs$lang$ctorPrWriter = (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"cljs.core.async/t_cljs$core$async27042");
});

cljs.core.async.__GT_t_cljs$core$async27042 = (function cljs$core$async$__GT_t_cljs$core$async27042(f__$1,blockable__$1,meta27043){
return (new cljs.core.async.t_cljs$core$async27042(f__$1,blockable__$1,meta27043));
});

}

return (new cljs.core.async.t_cljs$core$async27042(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args27051 = [];
var len__23933__auto___27054 = arguments.length;
var i__23934__auto___27055 = (0);
while(true){
if((i__23934__auto___27055 < len__23933__auto___27054)){
args27051.push((arguments[i__23934__auto___27055]));

var G__27056 = (i__23934__auto___27055 + (1));
i__23934__auto___27055 = G__27056;
continue;
} else {
}
break;
}

var G__27053 = args27051.length;
switch (G__27053) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27051.length)].join('')));

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
var args27058 = [];
var len__23933__auto___27061 = arguments.length;
var i__23934__auto___27062 = (0);
while(true){
if((i__23934__auto___27062 < len__23933__auto___27061)){
args27058.push((arguments[i__23934__auto___27062]));

var G__27063 = (i__23934__auto___27062 + (1));
i__23934__auto___27062 = G__27063;
continue;
} else {
}
break;
}

var G__27060 = args27058.length;
switch (G__27060) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27058.length)].join('')));

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
var args27065 = [];
var len__23933__auto___27068 = arguments.length;
var i__23934__auto___27069 = (0);
while(true){
if((i__23934__auto___27069 < len__23933__auto___27068)){
args27065.push((arguments[i__23934__auto___27069]));

var G__27070 = (i__23934__auto___27069 + (1));
i__23934__auto___27069 = G__27070;
continue;
} else {
}
break;
}

var G__27067 = args27065.length;
switch (G__27067) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27065.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27072 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27072);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27072,ret){
return (function (){
return fn1.call(null,val_27072);
});})(val_27072,ret))
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
var args27073 = [];
var len__23933__auto___27076 = arguments.length;
var i__23934__auto___27077 = (0);
while(true){
if((i__23934__auto___27077 < len__23933__auto___27076)){
args27073.push((arguments[i__23934__auto___27077]));

var G__27078 = (i__23934__auto___27077 + (1));
i__23934__auto___27077 = G__27078;
continue;
} else {
}
break;
}

var G__27075 = args27073.length;
switch (G__27075) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27073.length)].join('')));

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
var n__23778__auto___27080 = n;
var x_27081 = (0);
while(true){
if((x_27081 < n__23778__auto___27080)){
(a[x_27081] = (0));

var G__27082 = (x_27081 + (1));
x_27081 = G__27082;
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

var G__27083 = (i + (1));
i = G__27083;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27087 = (function (alt_flag,flag,meta27088){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27088 = meta27088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27089,meta27088__$1){
var self__ = this;
var _27089__$1 = this;
return (new cljs.core.async.t_cljs$core$async27087(self__.alt_flag,self__.flag,meta27088__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27089){
var self__ = this;
var _27089__$1 = this;
return self__.meta27088;
});})(flag))
;

cljs.core.async.t_cljs$core$async27087.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27087.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27087.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27087.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27087.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27088","meta27088",-728091354,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27087.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27087";

cljs.core.async.t_cljs$core$async27087.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"cljs.core.async/t_cljs$core$async27087");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27087 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27087(alt_flag__$1,flag__$1,meta27088){
return (new cljs.core.async.t_cljs$core$async27087(alt_flag__$1,flag__$1,meta27088));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27087(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27093 = (function (alt_handler,flag,cb,meta27094){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27094 = meta27094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27095,meta27094__$1){
var self__ = this;
var _27095__$1 = this;
return (new cljs.core.async.t_cljs$core$async27093(self__.alt_handler,self__.flag,self__.cb,meta27094__$1));
});

cljs.core.async.t_cljs$core$async27093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27095){
var self__ = this;
var _27095__$1 = this;
return self__.meta27094;
});

cljs.core.async.t_cljs$core$async27093.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27093.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27094","meta27094",668495318,null)], null);
});

cljs.core.async.t_cljs$core$async27093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27093";

cljs.core.async.t_cljs$core$async27093.cljs$lang$ctorPrWriter = (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"cljs.core.async/t_cljs$core$async27093");
});

cljs.core.async.__GT_t_cljs$core$async27093 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27093(alt_handler__$1,flag__$1,cb__$1,meta27094){
return (new cljs.core.async.t_cljs$core$async27093(alt_handler__$1,flag__$1,cb__$1,meta27094));
});

}

return (new cljs.core.async.t_cljs$core$async27093(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27096_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27096_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27097_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27097_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__22863__auto__ = wport;
if(cljs.core.truth_(or__22863__auto__)){
return or__22863__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27098 = (i + (1));
i = G__27098;
continue;
}
} else {
return null;
}
break;
}
})();
var or__22863__auto__ = ret;
if(cljs.core.truth_(or__22863__auto__)){
return or__22863__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__22851__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__22851__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__22851__auto__;
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
var args__23940__auto__ = [];
var len__23933__auto___27104 = arguments.length;
var i__23934__auto___27105 = (0);
while(true){
if((i__23934__auto___27105 < len__23933__auto___27104)){
args__23940__auto__.push((arguments[i__23934__auto___27105]));

var G__27106 = (i__23934__auto___27105 + (1));
i__23934__auto___27105 = G__27106;
continue;
} else {
}
break;
}

var argseq__23941__auto__ = ((((1) < args__23940__auto__.length))?(new cljs.core.IndexedSeq(args__23940__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23941__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27101){
var map__27102 = p__27101;
var map__27102__$1 = ((((!((map__27102 == null)))?((((map__27102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27102):map__27102);
var opts = map__27102__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27099){
var G__27100 = cljs.core.first.call(null,seq27099);
var seq27099__$1 = cljs.core.next.call(null,seq27099);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27100,seq27099__$1);
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
var args27107 = [];
var len__23933__auto___27157 = arguments.length;
var i__23934__auto___27158 = (0);
while(true){
if((i__23934__auto___27158 < len__23933__auto___27157)){
args27107.push((arguments[i__23934__auto___27158]));

var G__27159 = (i__23934__auto___27158 + (1));
i__23934__auto___27158 = G__27159;
continue;
} else {
}
break;
}

var G__27109 = args27107.length;
switch (G__27109) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27107.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26994__auto___27161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto___27161){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto___27161){
return (function (state_27133){
var state_val_27134 = (state_27133[(1)]);
if((state_val_27134 === (7))){
var inst_27129 = (state_27133[(2)]);
var state_27133__$1 = state_27133;
var statearr_27135_27162 = state_27133__$1;
(statearr_27135_27162[(2)] = inst_27129);

(statearr_27135_27162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (1))){
var state_27133__$1 = state_27133;
var statearr_27136_27163 = state_27133__$1;
(statearr_27136_27163[(2)] = null);

(statearr_27136_27163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (4))){
var inst_27112 = (state_27133[(7)]);
var inst_27112__$1 = (state_27133[(2)]);
var inst_27113 = (inst_27112__$1 == null);
var state_27133__$1 = (function (){var statearr_27137 = state_27133;
(statearr_27137[(7)] = inst_27112__$1);

return statearr_27137;
})();
if(cljs.core.truth_(inst_27113)){
var statearr_27138_27164 = state_27133__$1;
(statearr_27138_27164[(1)] = (5));

} else {
var statearr_27139_27165 = state_27133__$1;
(statearr_27139_27165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (13))){
var state_27133__$1 = state_27133;
var statearr_27140_27166 = state_27133__$1;
(statearr_27140_27166[(2)] = null);

(statearr_27140_27166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (6))){
var inst_27112 = (state_27133[(7)]);
var state_27133__$1 = state_27133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27133__$1,(11),to,inst_27112);
} else {
if((state_val_27134 === (3))){
var inst_27131 = (state_27133[(2)]);
var state_27133__$1 = state_27133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27133__$1,inst_27131);
} else {
if((state_val_27134 === (12))){
var state_27133__$1 = state_27133;
var statearr_27141_27167 = state_27133__$1;
(statearr_27141_27167[(2)] = null);

(statearr_27141_27167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (2))){
var state_27133__$1 = state_27133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27133__$1,(4),from);
} else {
if((state_val_27134 === (11))){
var inst_27122 = (state_27133[(2)]);
var state_27133__$1 = state_27133;
if(cljs.core.truth_(inst_27122)){
var statearr_27142_27168 = state_27133__$1;
(statearr_27142_27168[(1)] = (12));

} else {
var statearr_27143_27169 = state_27133__$1;
(statearr_27143_27169[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (9))){
var state_27133__$1 = state_27133;
var statearr_27144_27170 = state_27133__$1;
(statearr_27144_27170[(2)] = null);

(statearr_27144_27170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (5))){
var state_27133__$1 = state_27133;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27145_27171 = state_27133__$1;
(statearr_27145_27171[(1)] = (8));

} else {
var statearr_27146_27172 = state_27133__$1;
(statearr_27146_27172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (14))){
var inst_27127 = (state_27133[(2)]);
var state_27133__$1 = state_27133;
var statearr_27147_27173 = state_27133__$1;
(statearr_27147_27173[(2)] = inst_27127);

(statearr_27147_27173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (10))){
var inst_27119 = (state_27133[(2)]);
var state_27133__$1 = state_27133;
var statearr_27148_27174 = state_27133__$1;
(statearr_27148_27174[(2)] = inst_27119);

(statearr_27148_27174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27134 === (8))){
var inst_27116 = cljs.core.async.close_BANG_.call(null,to);
var state_27133__$1 = state_27133;
var statearr_27149_27175 = state_27133__$1;
(statearr_27149_27175[(2)] = inst_27116);

(statearr_27149_27175[(1)] = (10));


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
});})(c__26994__auto___27161))
;
return ((function (switch__26882__auto__,c__26994__auto___27161){
return (function() {
var cljs$core$async$state_machine__26883__auto__ = null;
var cljs$core$async$state_machine__26883__auto____0 = (function (){
var statearr_27153 = [null,null,null,null,null,null,null,null];
(statearr_27153[(0)] = cljs$core$async$state_machine__26883__auto__);

(statearr_27153[(1)] = (1));

return statearr_27153;
});
var cljs$core$async$state_machine__26883__auto____1 = (function (state_27133){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_27133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e27154){if((e27154 instanceof Object)){
var ex__26886__auto__ = e27154;
var statearr_27155_27176 = state_27133;
(statearr_27155_27176[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27177 = state_27133;
state_27133 = G__27177;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
cljs$core$async$state_machine__26883__auto__ = function(state_27133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26883__auto____1.call(this,state_27133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26883__auto____0;
cljs$core$async$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26883__auto____1;
return cljs$core$async$state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto___27161))
})();
var state__26996__auto__ = (function (){var statearr_27156 = f__26995__auto__.call(null);
(statearr_27156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto___27161);

return statearr_27156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto___27161))
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
return (function (p__27361){
var vec__27362 = p__27361;
var v = cljs.core.nth.call(null,vec__27362,(0),null);
var p = cljs.core.nth.call(null,vec__27362,(1),null);
var job = vec__27362;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26994__auto___27544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto___27544,res,vec__27362,v,p,job,jobs,results){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto___27544,res,vec__27362,v,p,job,jobs,results){
return (function (state_27367){
var state_val_27368 = (state_27367[(1)]);
if((state_val_27368 === (1))){
var state_27367__$1 = state_27367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27367__$1,(2),res,v);
} else {
if((state_val_27368 === (2))){
var inst_27364 = (state_27367[(2)]);
var inst_27365 = cljs.core.async.close_BANG_.call(null,res);
var state_27367__$1 = (function (){var statearr_27369 = state_27367;
(statearr_27369[(7)] = inst_27364);

return statearr_27369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27367__$1,inst_27365);
} else {
return null;
}
}
});})(c__26994__auto___27544,res,vec__27362,v,p,job,jobs,results))
;
return ((function (switch__26882__auto__,c__26994__auto___27544,res,vec__27362,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____0 = (function (){
var statearr_27373 = [null,null,null,null,null,null,null,null];
(statearr_27373[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__);

(statearr_27373[(1)] = (1));

return statearr_27373;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____1 = (function (state_27367){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_27367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e27374){if((e27374 instanceof Object)){
var ex__26886__auto__ = e27374;
var statearr_27375_27545 = state_27367;
(statearr_27375_27545[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27546 = state_27367;
state_27367 = G__27546;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__ = function(state_27367){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____1.call(this,state_27367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto___27544,res,vec__27362,v,p,job,jobs,results))
})();
var state__26996__auto__ = (function (){var statearr_27376 = f__26995__auto__.call(null);
(statearr_27376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto___27544);

return statearr_27376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto___27544,res,vec__27362,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27377){
var vec__27378 = p__27377;
var v = cljs.core.nth.call(null,vec__27378,(0),null);
var p = cljs.core.nth.call(null,vec__27378,(1),null);
var job = vec__27378;
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
var n__23778__auto___27547 = n;
var __27548 = (0);
while(true){
if((__27548 < n__23778__auto___27547)){
var G__27379_27549 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27379_27549) {
case "compute":
var c__26994__auto___27551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27548,c__26994__auto___27551,G__27379_27549,n__23778__auto___27547,jobs,results,process,async){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (__27548,c__26994__auto___27551,G__27379_27549,n__23778__auto___27547,jobs,results,process,async){
return (function (state_27392){
var state_val_27393 = (state_27392[(1)]);
if((state_val_27393 === (1))){
var state_27392__$1 = state_27392;
var statearr_27394_27552 = state_27392__$1;
(statearr_27394_27552[(2)] = null);

(statearr_27394_27552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (2))){
var state_27392__$1 = state_27392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27392__$1,(4),jobs);
} else {
if((state_val_27393 === (3))){
var inst_27390 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27392__$1,inst_27390);
} else {
if((state_val_27393 === (4))){
var inst_27382 = (state_27392[(2)]);
var inst_27383 = process.call(null,inst_27382);
var state_27392__$1 = state_27392;
if(cljs.core.truth_(inst_27383)){
var statearr_27395_27553 = state_27392__$1;
(statearr_27395_27553[(1)] = (5));

} else {
var statearr_27396_27554 = state_27392__$1;
(statearr_27396_27554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (5))){
var state_27392__$1 = state_27392;
var statearr_27397_27555 = state_27392__$1;
(statearr_27397_27555[(2)] = null);

(statearr_27397_27555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (6))){
var state_27392__$1 = state_27392;
var statearr_27398_27556 = state_27392__$1;
(statearr_27398_27556[(2)] = null);

(statearr_27398_27556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27393 === (7))){
var inst_27388 = (state_27392[(2)]);
var state_27392__$1 = state_27392;
var statearr_27399_27557 = state_27392__$1;
(statearr_27399_27557[(2)] = inst_27388);

(statearr_27399_27557[(1)] = (3));


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
});})(__27548,c__26994__auto___27551,G__27379_27549,n__23778__auto___27547,jobs,results,process,async))
;
return ((function (__27548,switch__26882__auto__,c__26994__auto___27551,G__27379_27549,n__23778__auto___27547,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____0 = (function (){
var statearr_27403 = [null,null,null,null,null,null,null];
(statearr_27403[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__);

(statearr_27403[(1)] = (1));

return statearr_27403;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____1 = (function (state_27392){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_27392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e27404){if((e27404 instanceof Object)){
var ex__26886__auto__ = e27404;
var statearr_27405_27558 = state_27392;
(statearr_27405_27558[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27559 = state_27392;
state_27392 = G__27559;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__ = function(state_27392){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____1.call(this,state_27392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__;
})()
;})(__27548,switch__26882__auto__,c__26994__auto___27551,G__27379_27549,n__23778__auto___27547,jobs,results,process,async))
})();
var state__26996__auto__ = (function (){var statearr_27406 = f__26995__auto__.call(null);
(statearr_27406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto___27551);

return statearr_27406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(__27548,c__26994__auto___27551,G__27379_27549,n__23778__auto___27547,jobs,results,process,async))
);


break;
case "async":
var c__26994__auto___27560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27548,c__26994__auto___27560,G__27379_27549,n__23778__auto___27547,jobs,results,process,async){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (__27548,c__26994__auto___27560,G__27379_27549,n__23778__auto___27547,jobs,results,process,async){
return (function (state_27419){
var state_val_27420 = (state_27419[(1)]);
if((state_val_27420 === (1))){
var state_27419__$1 = state_27419;
var statearr_27421_27561 = state_27419__$1;
(statearr_27421_27561[(2)] = null);

(statearr_27421_27561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27420 === (2))){
var state_27419__$1 = state_27419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27419__$1,(4),jobs);
} else {
if((state_val_27420 === (3))){
var inst_27417 = (state_27419[(2)]);
var state_27419__$1 = state_27419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27419__$1,inst_27417);
} else {
if((state_val_27420 === (4))){
var inst_27409 = (state_27419[(2)]);
var inst_27410 = async.call(null,inst_27409);
var state_27419__$1 = state_27419;
if(cljs.core.truth_(inst_27410)){
var statearr_27422_27562 = state_27419__$1;
(statearr_27422_27562[(1)] = (5));

} else {
var statearr_27423_27563 = state_27419__$1;
(statearr_27423_27563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27420 === (5))){
var state_27419__$1 = state_27419;
var statearr_27424_27564 = state_27419__$1;
(statearr_27424_27564[(2)] = null);

(statearr_27424_27564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27420 === (6))){
var state_27419__$1 = state_27419;
var statearr_27425_27565 = state_27419__$1;
(statearr_27425_27565[(2)] = null);

(statearr_27425_27565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27420 === (7))){
var inst_27415 = (state_27419[(2)]);
var state_27419__$1 = state_27419;
var statearr_27426_27566 = state_27419__$1;
(statearr_27426_27566[(2)] = inst_27415);

(statearr_27426_27566[(1)] = (3));


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
});})(__27548,c__26994__auto___27560,G__27379_27549,n__23778__auto___27547,jobs,results,process,async))
;
return ((function (__27548,switch__26882__auto__,c__26994__auto___27560,G__27379_27549,n__23778__auto___27547,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____0 = (function (){
var statearr_27430 = [null,null,null,null,null,null,null];
(statearr_27430[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__);

(statearr_27430[(1)] = (1));

return statearr_27430;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____1 = (function (state_27419){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_27419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e27431){if((e27431 instanceof Object)){
var ex__26886__auto__ = e27431;
var statearr_27432_27567 = state_27419;
(statearr_27432_27567[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27568 = state_27419;
state_27419 = G__27568;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__ = function(state_27419){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____1.call(this,state_27419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__;
})()
;})(__27548,switch__26882__auto__,c__26994__auto___27560,G__27379_27549,n__23778__auto___27547,jobs,results,process,async))
})();
var state__26996__auto__ = (function (){var statearr_27433 = f__26995__auto__.call(null);
(statearr_27433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto___27560);

return statearr_27433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(__27548,c__26994__auto___27560,G__27379_27549,n__23778__auto___27547,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27569 = (__27548 + (1));
__27548 = G__27569;
continue;
} else {
}
break;
}

var c__26994__auto___27570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto___27570,jobs,results,process,async){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto___27570,jobs,results,process,async){
return (function (state_27455){
var state_val_27456 = (state_27455[(1)]);
if((state_val_27456 === (1))){
var state_27455__$1 = state_27455;
var statearr_27457_27571 = state_27455__$1;
(statearr_27457_27571[(2)] = null);

(statearr_27457_27571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (2))){
var state_27455__$1 = state_27455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27455__$1,(4),from);
} else {
if((state_val_27456 === (3))){
var inst_27453 = (state_27455[(2)]);
var state_27455__$1 = state_27455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27455__$1,inst_27453);
} else {
if((state_val_27456 === (4))){
var inst_27436 = (state_27455[(7)]);
var inst_27436__$1 = (state_27455[(2)]);
var inst_27437 = (inst_27436__$1 == null);
var state_27455__$1 = (function (){var statearr_27458 = state_27455;
(statearr_27458[(7)] = inst_27436__$1);

return statearr_27458;
})();
if(cljs.core.truth_(inst_27437)){
var statearr_27459_27572 = state_27455__$1;
(statearr_27459_27572[(1)] = (5));

} else {
var statearr_27460_27573 = state_27455__$1;
(statearr_27460_27573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (5))){
var inst_27439 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27455__$1 = state_27455;
var statearr_27461_27574 = state_27455__$1;
(statearr_27461_27574[(2)] = inst_27439);

(statearr_27461_27574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (6))){
var inst_27436 = (state_27455[(7)]);
var inst_27441 = (state_27455[(8)]);
var inst_27441__$1 = cljs.core.async.chan.call(null,(1));
var inst_27442 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27443 = [inst_27436,inst_27441__$1];
var inst_27444 = (new cljs.core.PersistentVector(null,2,(5),inst_27442,inst_27443,null));
var state_27455__$1 = (function (){var statearr_27462 = state_27455;
(statearr_27462[(8)] = inst_27441__$1);

return statearr_27462;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27455__$1,(8),jobs,inst_27444);
} else {
if((state_val_27456 === (7))){
var inst_27451 = (state_27455[(2)]);
var state_27455__$1 = state_27455;
var statearr_27463_27575 = state_27455__$1;
(statearr_27463_27575[(2)] = inst_27451);

(statearr_27463_27575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27456 === (8))){
var inst_27441 = (state_27455[(8)]);
var inst_27446 = (state_27455[(2)]);
var state_27455__$1 = (function (){var statearr_27464 = state_27455;
(statearr_27464[(9)] = inst_27446);

return statearr_27464;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27455__$1,(9),results,inst_27441);
} else {
if((state_val_27456 === (9))){
var inst_27448 = (state_27455[(2)]);
var state_27455__$1 = (function (){var statearr_27465 = state_27455;
(statearr_27465[(10)] = inst_27448);

return statearr_27465;
})();
var statearr_27466_27576 = state_27455__$1;
(statearr_27466_27576[(2)] = null);

(statearr_27466_27576[(1)] = (2));


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
});})(c__26994__auto___27570,jobs,results,process,async))
;
return ((function (switch__26882__auto__,c__26994__auto___27570,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____0 = (function (){
var statearr_27470 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27470[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__);

(statearr_27470[(1)] = (1));

return statearr_27470;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____1 = (function (state_27455){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_27455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e27471){if((e27471 instanceof Object)){
var ex__26886__auto__ = e27471;
var statearr_27472_27577 = state_27455;
(statearr_27472_27577[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27578 = state_27455;
state_27455 = G__27578;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__ = function(state_27455){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____1.call(this,state_27455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto___27570,jobs,results,process,async))
})();
var state__26996__auto__ = (function (){var statearr_27473 = f__26995__auto__.call(null);
(statearr_27473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto___27570);

return statearr_27473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto___27570,jobs,results,process,async))
);


var c__26994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto__,jobs,results,process,async){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto__,jobs,results,process,async){
return (function (state_27511){
var state_val_27512 = (state_27511[(1)]);
if((state_val_27512 === (7))){
var inst_27507 = (state_27511[(2)]);
var state_27511__$1 = state_27511;
var statearr_27513_27579 = state_27511__$1;
(statearr_27513_27579[(2)] = inst_27507);

(statearr_27513_27579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (20))){
var state_27511__$1 = state_27511;
var statearr_27514_27580 = state_27511__$1;
(statearr_27514_27580[(2)] = null);

(statearr_27514_27580[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (1))){
var state_27511__$1 = state_27511;
var statearr_27515_27581 = state_27511__$1;
(statearr_27515_27581[(2)] = null);

(statearr_27515_27581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (4))){
var inst_27476 = (state_27511[(7)]);
var inst_27476__$1 = (state_27511[(2)]);
var inst_27477 = (inst_27476__$1 == null);
var state_27511__$1 = (function (){var statearr_27516 = state_27511;
(statearr_27516[(7)] = inst_27476__$1);

return statearr_27516;
})();
if(cljs.core.truth_(inst_27477)){
var statearr_27517_27582 = state_27511__$1;
(statearr_27517_27582[(1)] = (5));

} else {
var statearr_27518_27583 = state_27511__$1;
(statearr_27518_27583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (15))){
var inst_27489 = (state_27511[(8)]);
var state_27511__$1 = state_27511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27511__$1,(18),to,inst_27489);
} else {
if((state_val_27512 === (21))){
var inst_27502 = (state_27511[(2)]);
var state_27511__$1 = state_27511;
var statearr_27519_27584 = state_27511__$1;
(statearr_27519_27584[(2)] = inst_27502);

(statearr_27519_27584[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (13))){
var inst_27504 = (state_27511[(2)]);
var state_27511__$1 = (function (){var statearr_27520 = state_27511;
(statearr_27520[(9)] = inst_27504);

return statearr_27520;
})();
var statearr_27521_27585 = state_27511__$1;
(statearr_27521_27585[(2)] = null);

(statearr_27521_27585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (6))){
var inst_27476 = (state_27511[(7)]);
var state_27511__$1 = state_27511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27511__$1,(11),inst_27476);
} else {
if((state_val_27512 === (17))){
var inst_27497 = (state_27511[(2)]);
var state_27511__$1 = state_27511;
if(cljs.core.truth_(inst_27497)){
var statearr_27522_27586 = state_27511__$1;
(statearr_27522_27586[(1)] = (19));

} else {
var statearr_27523_27587 = state_27511__$1;
(statearr_27523_27587[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (3))){
var inst_27509 = (state_27511[(2)]);
var state_27511__$1 = state_27511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27511__$1,inst_27509);
} else {
if((state_val_27512 === (12))){
var inst_27486 = (state_27511[(10)]);
var state_27511__$1 = state_27511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27511__$1,(14),inst_27486);
} else {
if((state_val_27512 === (2))){
var state_27511__$1 = state_27511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27511__$1,(4),results);
} else {
if((state_val_27512 === (19))){
var state_27511__$1 = state_27511;
var statearr_27524_27588 = state_27511__$1;
(statearr_27524_27588[(2)] = null);

(statearr_27524_27588[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (11))){
var inst_27486 = (state_27511[(2)]);
var state_27511__$1 = (function (){var statearr_27525 = state_27511;
(statearr_27525[(10)] = inst_27486);

return statearr_27525;
})();
var statearr_27526_27589 = state_27511__$1;
(statearr_27526_27589[(2)] = null);

(statearr_27526_27589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (9))){
var state_27511__$1 = state_27511;
var statearr_27527_27590 = state_27511__$1;
(statearr_27527_27590[(2)] = null);

(statearr_27527_27590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (5))){
var state_27511__$1 = state_27511;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27528_27591 = state_27511__$1;
(statearr_27528_27591[(1)] = (8));

} else {
var statearr_27529_27592 = state_27511__$1;
(statearr_27529_27592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (14))){
var inst_27491 = (state_27511[(11)]);
var inst_27489 = (state_27511[(8)]);
var inst_27489__$1 = (state_27511[(2)]);
var inst_27490 = (inst_27489__$1 == null);
var inst_27491__$1 = cljs.core.not.call(null,inst_27490);
var state_27511__$1 = (function (){var statearr_27530 = state_27511;
(statearr_27530[(11)] = inst_27491__$1);

(statearr_27530[(8)] = inst_27489__$1);

return statearr_27530;
})();
if(inst_27491__$1){
var statearr_27531_27593 = state_27511__$1;
(statearr_27531_27593[(1)] = (15));

} else {
var statearr_27532_27594 = state_27511__$1;
(statearr_27532_27594[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (16))){
var inst_27491 = (state_27511[(11)]);
var state_27511__$1 = state_27511;
var statearr_27533_27595 = state_27511__$1;
(statearr_27533_27595[(2)] = inst_27491);

(statearr_27533_27595[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (10))){
var inst_27483 = (state_27511[(2)]);
var state_27511__$1 = state_27511;
var statearr_27534_27596 = state_27511__$1;
(statearr_27534_27596[(2)] = inst_27483);

(statearr_27534_27596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (18))){
var inst_27494 = (state_27511[(2)]);
var state_27511__$1 = state_27511;
var statearr_27535_27597 = state_27511__$1;
(statearr_27535_27597[(2)] = inst_27494);

(statearr_27535_27597[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27512 === (8))){
var inst_27480 = cljs.core.async.close_BANG_.call(null,to);
var state_27511__$1 = state_27511;
var statearr_27536_27598 = state_27511__$1;
(statearr_27536_27598[(2)] = inst_27480);

(statearr_27536_27598[(1)] = (10));


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
});})(c__26994__auto__,jobs,results,process,async))
;
return ((function (switch__26882__auto__,c__26994__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____0 = (function (){
var statearr_27540 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27540[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__);

(statearr_27540[(1)] = (1));

return statearr_27540;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____1 = (function (state_27511){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_27511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e27541){if((e27541 instanceof Object)){
var ex__26886__auto__ = e27541;
var statearr_27542_27599 = state_27511;
(statearr_27542_27599[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27600 = state_27511;
state_27511 = G__27600;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__ = function(state_27511){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____1.call(this,state_27511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26883__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto__,jobs,results,process,async))
})();
var state__26996__auto__ = (function (){var statearr_27543 = f__26995__auto__.call(null);
(statearr_27543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto__);

return statearr_27543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto__,jobs,results,process,async))
);

return c__26994__auto__;
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
var args27601 = [];
var len__23933__auto___27604 = arguments.length;
var i__23934__auto___27605 = (0);
while(true){
if((i__23934__auto___27605 < len__23933__auto___27604)){
args27601.push((arguments[i__23934__auto___27605]));

var G__27606 = (i__23934__auto___27605 + (1));
i__23934__auto___27605 = G__27606;
continue;
} else {
}
break;
}

var G__27603 = args27601.length;
switch (G__27603) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27601.length)].join('')));

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
var args27608 = [];
var len__23933__auto___27611 = arguments.length;
var i__23934__auto___27612 = (0);
while(true){
if((i__23934__auto___27612 < len__23933__auto___27611)){
args27608.push((arguments[i__23934__auto___27612]));

var G__27613 = (i__23934__auto___27612 + (1));
i__23934__auto___27612 = G__27613;
continue;
} else {
}
break;
}

var G__27610 = args27608.length;
switch (G__27610) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27608.length)].join('')));

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
var args27615 = [];
var len__23933__auto___27668 = arguments.length;
var i__23934__auto___27669 = (0);
while(true){
if((i__23934__auto___27669 < len__23933__auto___27668)){
args27615.push((arguments[i__23934__auto___27669]));

var G__27670 = (i__23934__auto___27669 + (1));
i__23934__auto___27669 = G__27670;
continue;
} else {
}
break;
}

var G__27617 = args27615.length;
switch (G__27617) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27615.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26994__auto___27672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto___27672,tc,fc){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto___27672,tc,fc){
return (function (state_27643){
var state_val_27644 = (state_27643[(1)]);
if((state_val_27644 === (7))){
var inst_27639 = (state_27643[(2)]);
var state_27643__$1 = state_27643;
var statearr_27645_27673 = state_27643__$1;
(statearr_27645_27673[(2)] = inst_27639);

(statearr_27645_27673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (1))){
var state_27643__$1 = state_27643;
var statearr_27646_27674 = state_27643__$1;
(statearr_27646_27674[(2)] = null);

(statearr_27646_27674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (4))){
var inst_27620 = (state_27643[(7)]);
var inst_27620__$1 = (state_27643[(2)]);
var inst_27621 = (inst_27620__$1 == null);
var state_27643__$1 = (function (){var statearr_27647 = state_27643;
(statearr_27647[(7)] = inst_27620__$1);

return statearr_27647;
})();
if(cljs.core.truth_(inst_27621)){
var statearr_27648_27675 = state_27643__$1;
(statearr_27648_27675[(1)] = (5));

} else {
var statearr_27649_27676 = state_27643__$1;
(statearr_27649_27676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (13))){
var state_27643__$1 = state_27643;
var statearr_27650_27677 = state_27643__$1;
(statearr_27650_27677[(2)] = null);

(statearr_27650_27677[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (6))){
var inst_27620 = (state_27643[(7)]);
var inst_27626 = p.call(null,inst_27620);
var state_27643__$1 = state_27643;
if(cljs.core.truth_(inst_27626)){
var statearr_27651_27678 = state_27643__$1;
(statearr_27651_27678[(1)] = (9));

} else {
var statearr_27652_27679 = state_27643__$1;
(statearr_27652_27679[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (3))){
var inst_27641 = (state_27643[(2)]);
var state_27643__$1 = state_27643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27643__$1,inst_27641);
} else {
if((state_val_27644 === (12))){
var state_27643__$1 = state_27643;
var statearr_27653_27680 = state_27643__$1;
(statearr_27653_27680[(2)] = null);

(statearr_27653_27680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (2))){
var state_27643__$1 = state_27643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27643__$1,(4),ch);
} else {
if((state_val_27644 === (11))){
var inst_27620 = (state_27643[(7)]);
var inst_27630 = (state_27643[(2)]);
var state_27643__$1 = state_27643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27643__$1,(8),inst_27630,inst_27620);
} else {
if((state_val_27644 === (9))){
var state_27643__$1 = state_27643;
var statearr_27654_27681 = state_27643__$1;
(statearr_27654_27681[(2)] = tc);

(statearr_27654_27681[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (5))){
var inst_27623 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27624 = cljs.core.async.close_BANG_.call(null,fc);
var state_27643__$1 = (function (){var statearr_27655 = state_27643;
(statearr_27655[(8)] = inst_27623);

return statearr_27655;
})();
var statearr_27656_27682 = state_27643__$1;
(statearr_27656_27682[(2)] = inst_27624);

(statearr_27656_27682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (14))){
var inst_27637 = (state_27643[(2)]);
var state_27643__$1 = state_27643;
var statearr_27657_27683 = state_27643__$1;
(statearr_27657_27683[(2)] = inst_27637);

(statearr_27657_27683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (10))){
var state_27643__$1 = state_27643;
var statearr_27658_27684 = state_27643__$1;
(statearr_27658_27684[(2)] = fc);

(statearr_27658_27684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (8))){
var inst_27632 = (state_27643[(2)]);
var state_27643__$1 = state_27643;
if(cljs.core.truth_(inst_27632)){
var statearr_27659_27685 = state_27643__$1;
(statearr_27659_27685[(1)] = (12));

} else {
var statearr_27660_27686 = state_27643__$1;
(statearr_27660_27686[(1)] = (13));

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
});})(c__26994__auto___27672,tc,fc))
;
return ((function (switch__26882__auto__,c__26994__auto___27672,tc,fc){
return (function() {
var cljs$core$async$state_machine__26883__auto__ = null;
var cljs$core$async$state_machine__26883__auto____0 = (function (){
var statearr_27664 = [null,null,null,null,null,null,null,null,null];
(statearr_27664[(0)] = cljs$core$async$state_machine__26883__auto__);

(statearr_27664[(1)] = (1));

return statearr_27664;
});
var cljs$core$async$state_machine__26883__auto____1 = (function (state_27643){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_27643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e27665){if((e27665 instanceof Object)){
var ex__26886__auto__ = e27665;
var statearr_27666_27687 = state_27643;
(statearr_27666_27687[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27688 = state_27643;
state_27643 = G__27688;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
cljs$core$async$state_machine__26883__auto__ = function(state_27643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26883__auto____1.call(this,state_27643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26883__auto____0;
cljs$core$async$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26883__auto____1;
return cljs$core$async$state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto___27672,tc,fc))
})();
var state__26996__auto__ = (function (){var statearr_27667 = f__26995__auto__.call(null);
(statearr_27667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto___27672);

return statearr_27667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto___27672,tc,fc))
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
var c__26994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto__){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto__){
return (function (state_27752){
var state_val_27753 = (state_27752[(1)]);
if((state_val_27753 === (7))){
var inst_27748 = (state_27752[(2)]);
var state_27752__$1 = state_27752;
var statearr_27754_27775 = state_27752__$1;
(statearr_27754_27775[(2)] = inst_27748);

(statearr_27754_27775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (1))){
var inst_27732 = init;
var state_27752__$1 = (function (){var statearr_27755 = state_27752;
(statearr_27755[(7)] = inst_27732);

return statearr_27755;
})();
var statearr_27756_27776 = state_27752__$1;
(statearr_27756_27776[(2)] = null);

(statearr_27756_27776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (4))){
var inst_27735 = (state_27752[(8)]);
var inst_27735__$1 = (state_27752[(2)]);
var inst_27736 = (inst_27735__$1 == null);
var state_27752__$1 = (function (){var statearr_27757 = state_27752;
(statearr_27757[(8)] = inst_27735__$1);

return statearr_27757;
})();
if(cljs.core.truth_(inst_27736)){
var statearr_27758_27777 = state_27752__$1;
(statearr_27758_27777[(1)] = (5));

} else {
var statearr_27759_27778 = state_27752__$1;
(statearr_27759_27778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (6))){
var inst_27739 = (state_27752[(9)]);
var inst_27735 = (state_27752[(8)]);
var inst_27732 = (state_27752[(7)]);
var inst_27739__$1 = f.call(null,inst_27732,inst_27735);
var inst_27740 = cljs.core.reduced_QMARK_.call(null,inst_27739__$1);
var state_27752__$1 = (function (){var statearr_27760 = state_27752;
(statearr_27760[(9)] = inst_27739__$1);

return statearr_27760;
})();
if(inst_27740){
var statearr_27761_27779 = state_27752__$1;
(statearr_27761_27779[(1)] = (8));

} else {
var statearr_27762_27780 = state_27752__$1;
(statearr_27762_27780[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (3))){
var inst_27750 = (state_27752[(2)]);
var state_27752__$1 = state_27752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27752__$1,inst_27750);
} else {
if((state_val_27753 === (2))){
var state_27752__$1 = state_27752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27752__$1,(4),ch);
} else {
if((state_val_27753 === (9))){
var inst_27739 = (state_27752[(9)]);
var inst_27732 = inst_27739;
var state_27752__$1 = (function (){var statearr_27763 = state_27752;
(statearr_27763[(7)] = inst_27732);

return statearr_27763;
})();
var statearr_27764_27781 = state_27752__$1;
(statearr_27764_27781[(2)] = null);

(statearr_27764_27781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (5))){
var inst_27732 = (state_27752[(7)]);
var state_27752__$1 = state_27752;
var statearr_27765_27782 = state_27752__$1;
(statearr_27765_27782[(2)] = inst_27732);

(statearr_27765_27782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (10))){
var inst_27746 = (state_27752[(2)]);
var state_27752__$1 = state_27752;
var statearr_27766_27783 = state_27752__$1;
(statearr_27766_27783[(2)] = inst_27746);

(statearr_27766_27783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27753 === (8))){
var inst_27739 = (state_27752[(9)]);
var inst_27742 = cljs.core.deref.call(null,inst_27739);
var state_27752__$1 = state_27752;
var statearr_27767_27784 = state_27752__$1;
(statearr_27767_27784[(2)] = inst_27742);

(statearr_27767_27784[(1)] = (10));


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
});})(c__26994__auto__))
;
return ((function (switch__26882__auto__,c__26994__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26883__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26883__auto____0 = (function (){
var statearr_27771 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27771[(0)] = cljs$core$async$reduce_$_state_machine__26883__auto__);

(statearr_27771[(1)] = (1));

return statearr_27771;
});
var cljs$core$async$reduce_$_state_machine__26883__auto____1 = (function (state_27752){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_27752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e27772){if((e27772 instanceof Object)){
var ex__26886__auto__ = e27772;
var statearr_27773_27785 = state_27752;
(statearr_27773_27785[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27786 = state_27752;
state_27752 = G__27786;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26883__auto__ = function(state_27752){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26883__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26883__auto____1.call(this,state_27752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26883__auto____0;
cljs$core$async$reduce_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26883__auto____1;
return cljs$core$async$reduce_$_state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto__))
})();
var state__26996__auto__ = (function (){var statearr_27774 = f__26995__auto__.call(null);
(statearr_27774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto__);

return statearr_27774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto__))
);

return c__26994__auto__;
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
var args27787 = [];
var len__23933__auto___27839 = arguments.length;
var i__23934__auto___27840 = (0);
while(true){
if((i__23934__auto___27840 < len__23933__auto___27839)){
args27787.push((arguments[i__23934__auto___27840]));

var G__27841 = (i__23934__auto___27840 + (1));
i__23934__auto___27840 = G__27841;
continue;
} else {
}
break;
}

var G__27789 = args27787.length;
switch (G__27789) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27787.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto__){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto__){
return (function (state_27814){
var state_val_27815 = (state_27814[(1)]);
if((state_val_27815 === (7))){
var inst_27796 = (state_27814[(2)]);
var state_27814__$1 = state_27814;
var statearr_27816_27843 = state_27814__$1;
(statearr_27816_27843[(2)] = inst_27796);

(statearr_27816_27843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (1))){
var inst_27790 = cljs.core.seq.call(null,coll);
var inst_27791 = inst_27790;
var state_27814__$1 = (function (){var statearr_27817 = state_27814;
(statearr_27817[(7)] = inst_27791);

return statearr_27817;
})();
var statearr_27818_27844 = state_27814__$1;
(statearr_27818_27844[(2)] = null);

(statearr_27818_27844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (4))){
var inst_27791 = (state_27814[(7)]);
var inst_27794 = cljs.core.first.call(null,inst_27791);
var state_27814__$1 = state_27814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27814__$1,(7),ch,inst_27794);
} else {
if((state_val_27815 === (13))){
var inst_27808 = (state_27814[(2)]);
var state_27814__$1 = state_27814;
var statearr_27819_27845 = state_27814__$1;
(statearr_27819_27845[(2)] = inst_27808);

(statearr_27819_27845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (6))){
var inst_27799 = (state_27814[(2)]);
var state_27814__$1 = state_27814;
if(cljs.core.truth_(inst_27799)){
var statearr_27820_27846 = state_27814__$1;
(statearr_27820_27846[(1)] = (8));

} else {
var statearr_27821_27847 = state_27814__$1;
(statearr_27821_27847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (3))){
var inst_27812 = (state_27814[(2)]);
var state_27814__$1 = state_27814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27814__$1,inst_27812);
} else {
if((state_val_27815 === (12))){
var state_27814__$1 = state_27814;
var statearr_27822_27848 = state_27814__$1;
(statearr_27822_27848[(2)] = null);

(statearr_27822_27848[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (2))){
var inst_27791 = (state_27814[(7)]);
var state_27814__$1 = state_27814;
if(cljs.core.truth_(inst_27791)){
var statearr_27823_27849 = state_27814__$1;
(statearr_27823_27849[(1)] = (4));

} else {
var statearr_27824_27850 = state_27814__$1;
(statearr_27824_27850[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (11))){
var inst_27805 = cljs.core.async.close_BANG_.call(null,ch);
var state_27814__$1 = state_27814;
var statearr_27825_27851 = state_27814__$1;
(statearr_27825_27851[(2)] = inst_27805);

(statearr_27825_27851[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (9))){
var state_27814__$1 = state_27814;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27826_27852 = state_27814__$1;
(statearr_27826_27852[(1)] = (11));

} else {
var statearr_27827_27853 = state_27814__$1;
(statearr_27827_27853[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (5))){
var inst_27791 = (state_27814[(7)]);
var state_27814__$1 = state_27814;
var statearr_27828_27854 = state_27814__$1;
(statearr_27828_27854[(2)] = inst_27791);

(statearr_27828_27854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (10))){
var inst_27810 = (state_27814[(2)]);
var state_27814__$1 = state_27814;
var statearr_27829_27855 = state_27814__$1;
(statearr_27829_27855[(2)] = inst_27810);

(statearr_27829_27855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27815 === (8))){
var inst_27791 = (state_27814[(7)]);
var inst_27801 = cljs.core.next.call(null,inst_27791);
var inst_27791__$1 = inst_27801;
var state_27814__$1 = (function (){var statearr_27830 = state_27814;
(statearr_27830[(7)] = inst_27791__$1);

return statearr_27830;
})();
var statearr_27831_27856 = state_27814__$1;
(statearr_27831_27856[(2)] = null);

(statearr_27831_27856[(1)] = (2));


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
});})(c__26994__auto__))
;
return ((function (switch__26882__auto__,c__26994__auto__){
return (function() {
var cljs$core$async$state_machine__26883__auto__ = null;
var cljs$core$async$state_machine__26883__auto____0 = (function (){
var statearr_27835 = [null,null,null,null,null,null,null,null];
(statearr_27835[(0)] = cljs$core$async$state_machine__26883__auto__);

(statearr_27835[(1)] = (1));

return statearr_27835;
});
var cljs$core$async$state_machine__26883__auto____1 = (function (state_27814){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_27814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e27836){if((e27836 instanceof Object)){
var ex__26886__auto__ = e27836;
var statearr_27837_27857 = state_27814;
(statearr_27837_27857[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27858 = state_27814;
state_27814 = G__27858;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
cljs$core$async$state_machine__26883__auto__ = function(state_27814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26883__auto____1.call(this,state_27814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26883__auto____0;
cljs$core$async$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26883__auto____1;
return cljs$core$async$state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto__))
})();
var state__26996__auto__ = (function (){var statearr_27838 = f__26995__auto__.call(null);
(statearr_27838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto__);

return statearr_27838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto__))
);

return c__26994__auto__;
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
var x__23526__auto__ = (((_ == null))?null:_);
var m__23527__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__23526__auto__)]);
if(!((m__23527__auto__ == null))){
return m__23527__auto__.call(null,_);
} else {
var m__23527__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__23527__auto____$1 == null))){
return m__23527__auto____$1.call(null,_);
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
var x__23526__auto__ = (((m == null))?null:m);
var m__23527__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__23526__auto__)]);
if(!((m__23527__auto__ == null))){
return m__23527__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__23527__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__23527__auto____$1 == null))){
return m__23527__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__23526__auto__ = (((m == null))?null:m);
var m__23527__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__23526__auto__)]);
if(!((m__23527__auto__ == null))){
return m__23527__auto__.call(null,m,ch);
} else {
var m__23527__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__23527__auto____$1 == null))){
return m__23527__auto____$1.call(null,m,ch);
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
var x__23526__auto__ = (((m == null))?null:m);
var m__23527__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__23526__auto__)]);
if(!((m__23527__auto__ == null))){
return m__23527__auto__.call(null,m);
} else {
var m__23527__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__23527__auto____$1 == null))){
return m__23527__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async28080 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28080 = (function (mult,ch,cs,meta28081){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28081 = meta28081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28082,meta28081__$1){
var self__ = this;
var _28082__$1 = this;
return (new cljs.core.async.t_cljs$core$async28080(self__.mult,self__.ch,self__.cs,meta28081__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28082){
var self__ = this;
var _28082__$1 = this;
return self__.meta28081;
});})(cs))
;

cljs.core.async.t_cljs$core$async28080.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28080.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28080.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28080.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28080.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28080.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28080.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28081","meta28081",1119420043,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28080.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28080";

cljs.core.async.t_cljs$core$async28080.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"cljs.core.async/t_cljs$core$async28080");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28080 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28080(mult__$1,ch__$1,cs__$1,meta28081){
return (new cljs.core.async.t_cljs$core$async28080(mult__$1,ch__$1,cs__$1,meta28081));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28080(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26994__auto___28301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto___28301,cs,m,dchan,dctr,done){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto___28301,cs,m,dchan,dctr,done){
return (function (state_28213){
var state_val_28214 = (state_28213[(1)]);
if((state_val_28214 === (7))){
var inst_28209 = (state_28213[(2)]);
var state_28213__$1 = state_28213;
var statearr_28215_28302 = state_28213__$1;
(statearr_28215_28302[(2)] = inst_28209);

(statearr_28215_28302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (20))){
var inst_28114 = (state_28213[(7)]);
var inst_28124 = cljs.core.first.call(null,inst_28114);
var inst_28125 = cljs.core.nth.call(null,inst_28124,(0),null);
var inst_28126 = cljs.core.nth.call(null,inst_28124,(1),null);
var state_28213__$1 = (function (){var statearr_28216 = state_28213;
(statearr_28216[(8)] = inst_28125);

return statearr_28216;
})();
if(cljs.core.truth_(inst_28126)){
var statearr_28217_28303 = state_28213__$1;
(statearr_28217_28303[(1)] = (22));

} else {
var statearr_28218_28304 = state_28213__$1;
(statearr_28218_28304[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (27))){
var inst_28154 = (state_28213[(9)]);
var inst_28085 = (state_28213[(10)]);
var inst_28156 = (state_28213[(11)]);
var inst_28161 = (state_28213[(12)]);
var inst_28161__$1 = cljs.core._nth.call(null,inst_28154,inst_28156);
var inst_28162 = cljs.core.async.put_BANG_.call(null,inst_28161__$1,inst_28085,done);
var state_28213__$1 = (function (){var statearr_28219 = state_28213;
(statearr_28219[(12)] = inst_28161__$1);

return statearr_28219;
})();
if(cljs.core.truth_(inst_28162)){
var statearr_28220_28305 = state_28213__$1;
(statearr_28220_28305[(1)] = (30));

} else {
var statearr_28221_28306 = state_28213__$1;
(statearr_28221_28306[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (1))){
var state_28213__$1 = state_28213;
var statearr_28222_28307 = state_28213__$1;
(statearr_28222_28307[(2)] = null);

(statearr_28222_28307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (24))){
var inst_28114 = (state_28213[(7)]);
var inst_28131 = (state_28213[(2)]);
var inst_28132 = cljs.core.next.call(null,inst_28114);
var inst_28094 = inst_28132;
var inst_28095 = null;
var inst_28096 = (0);
var inst_28097 = (0);
var state_28213__$1 = (function (){var statearr_28223 = state_28213;
(statearr_28223[(13)] = inst_28131);

(statearr_28223[(14)] = inst_28097);

(statearr_28223[(15)] = inst_28094);

(statearr_28223[(16)] = inst_28095);

(statearr_28223[(17)] = inst_28096);

return statearr_28223;
})();
var statearr_28224_28308 = state_28213__$1;
(statearr_28224_28308[(2)] = null);

(statearr_28224_28308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (39))){
var state_28213__$1 = state_28213;
var statearr_28228_28309 = state_28213__$1;
(statearr_28228_28309[(2)] = null);

(statearr_28228_28309[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (4))){
var inst_28085 = (state_28213[(10)]);
var inst_28085__$1 = (state_28213[(2)]);
var inst_28086 = (inst_28085__$1 == null);
var state_28213__$1 = (function (){var statearr_28229 = state_28213;
(statearr_28229[(10)] = inst_28085__$1);

return statearr_28229;
})();
if(cljs.core.truth_(inst_28086)){
var statearr_28230_28310 = state_28213__$1;
(statearr_28230_28310[(1)] = (5));

} else {
var statearr_28231_28311 = state_28213__$1;
(statearr_28231_28311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (15))){
var inst_28097 = (state_28213[(14)]);
var inst_28094 = (state_28213[(15)]);
var inst_28095 = (state_28213[(16)]);
var inst_28096 = (state_28213[(17)]);
var inst_28110 = (state_28213[(2)]);
var inst_28111 = (inst_28097 + (1));
var tmp28225 = inst_28094;
var tmp28226 = inst_28095;
var tmp28227 = inst_28096;
var inst_28094__$1 = tmp28225;
var inst_28095__$1 = tmp28226;
var inst_28096__$1 = tmp28227;
var inst_28097__$1 = inst_28111;
var state_28213__$1 = (function (){var statearr_28232 = state_28213;
(statearr_28232[(18)] = inst_28110);

(statearr_28232[(14)] = inst_28097__$1);

(statearr_28232[(15)] = inst_28094__$1);

(statearr_28232[(16)] = inst_28095__$1);

(statearr_28232[(17)] = inst_28096__$1);

return statearr_28232;
})();
var statearr_28233_28312 = state_28213__$1;
(statearr_28233_28312[(2)] = null);

(statearr_28233_28312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (21))){
var inst_28135 = (state_28213[(2)]);
var state_28213__$1 = state_28213;
var statearr_28237_28313 = state_28213__$1;
(statearr_28237_28313[(2)] = inst_28135);

(statearr_28237_28313[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (31))){
var inst_28161 = (state_28213[(12)]);
var inst_28165 = done.call(null,null);
var inst_28166 = cljs.core.async.untap_STAR_.call(null,m,inst_28161);
var state_28213__$1 = (function (){var statearr_28238 = state_28213;
(statearr_28238[(19)] = inst_28165);

return statearr_28238;
})();
var statearr_28239_28314 = state_28213__$1;
(statearr_28239_28314[(2)] = inst_28166);

(statearr_28239_28314[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (32))){
var inst_28154 = (state_28213[(9)]);
var inst_28153 = (state_28213[(20)]);
var inst_28155 = (state_28213[(21)]);
var inst_28156 = (state_28213[(11)]);
var inst_28168 = (state_28213[(2)]);
var inst_28169 = (inst_28156 + (1));
var tmp28234 = inst_28154;
var tmp28235 = inst_28153;
var tmp28236 = inst_28155;
var inst_28153__$1 = tmp28235;
var inst_28154__$1 = tmp28234;
var inst_28155__$1 = tmp28236;
var inst_28156__$1 = inst_28169;
var state_28213__$1 = (function (){var statearr_28240 = state_28213;
(statearr_28240[(9)] = inst_28154__$1);

(statearr_28240[(20)] = inst_28153__$1);

(statearr_28240[(21)] = inst_28155__$1);

(statearr_28240[(11)] = inst_28156__$1);

(statearr_28240[(22)] = inst_28168);

return statearr_28240;
})();
var statearr_28241_28315 = state_28213__$1;
(statearr_28241_28315[(2)] = null);

(statearr_28241_28315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (40))){
var inst_28181 = (state_28213[(23)]);
var inst_28185 = done.call(null,null);
var inst_28186 = cljs.core.async.untap_STAR_.call(null,m,inst_28181);
var state_28213__$1 = (function (){var statearr_28242 = state_28213;
(statearr_28242[(24)] = inst_28185);

return statearr_28242;
})();
var statearr_28243_28316 = state_28213__$1;
(statearr_28243_28316[(2)] = inst_28186);

(statearr_28243_28316[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (33))){
var inst_28172 = (state_28213[(25)]);
var inst_28174 = cljs.core.chunked_seq_QMARK_.call(null,inst_28172);
var state_28213__$1 = state_28213;
if(inst_28174){
var statearr_28244_28317 = state_28213__$1;
(statearr_28244_28317[(1)] = (36));

} else {
var statearr_28245_28318 = state_28213__$1;
(statearr_28245_28318[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (13))){
var inst_28104 = (state_28213[(26)]);
var inst_28107 = cljs.core.async.close_BANG_.call(null,inst_28104);
var state_28213__$1 = state_28213;
var statearr_28246_28319 = state_28213__$1;
(statearr_28246_28319[(2)] = inst_28107);

(statearr_28246_28319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (22))){
var inst_28125 = (state_28213[(8)]);
var inst_28128 = cljs.core.async.close_BANG_.call(null,inst_28125);
var state_28213__$1 = state_28213;
var statearr_28247_28320 = state_28213__$1;
(statearr_28247_28320[(2)] = inst_28128);

(statearr_28247_28320[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (36))){
var inst_28172 = (state_28213[(25)]);
var inst_28176 = cljs.core.chunk_first.call(null,inst_28172);
var inst_28177 = cljs.core.chunk_rest.call(null,inst_28172);
var inst_28178 = cljs.core.count.call(null,inst_28176);
var inst_28153 = inst_28177;
var inst_28154 = inst_28176;
var inst_28155 = inst_28178;
var inst_28156 = (0);
var state_28213__$1 = (function (){var statearr_28248 = state_28213;
(statearr_28248[(9)] = inst_28154);

(statearr_28248[(20)] = inst_28153);

(statearr_28248[(21)] = inst_28155);

(statearr_28248[(11)] = inst_28156);

return statearr_28248;
})();
var statearr_28249_28321 = state_28213__$1;
(statearr_28249_28321[(2)] = null);

(statearr_28249_28321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (41))){
var inst_28172 = (state_28213[(25)]);
var inst_28188 = (state_28213[(2)]);
var inst_28189 = cljs.core.next.call(null,inst_28172);
var inst_28153 = inst_28189;
var inst_28154 = null;
var inst_28155 = (0);
var inst_28156 = (0);
var state_28213__$1 = (function (){var statearr_28250 = state_28213;
(statearr_28250[(9)] = inst_28154);

(statearr_28250[(27)] = inst_28188);

(statearr_28250[(20)] = inst_28153);

(statearr_28250[(21)] = inst_28155);

(statearr_28250[(11)] = inst_28156);

return statearr_28250;
})();
var statearr_28251_28322 = state_28213__$1;
(statearr_28251_28322[(2)] = null);

(statearr_28251_28322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (43))){
var state_28213__$1 = state_28213;
var statearr_28252_28323 = state_28213__$1;
(statearr_28252_28323[(2)] = null);

(statearr_28252_28323[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (29))){
var inst_28197 = (state_28213[(2)]);
var state_28213__$1 = state_28213;
var statearr_28253_28324 = state_28213__$1;
(statearr_28253_28324[(2)] = inst_28197);

(statearr_28253_28324[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (44))){
var inst_28206 = (state_28213[(2)]);
var state_28213__$1 = (function (){var statearr_28254 = state_28213;
(statearr_28254[(28)] = inst_28206);

return statearr_28254;
})();
var statearr_28255_28325 = state_28213__$1;
(statearr_28255_28325[(2)] = null);

(statearr_28255_28325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (6))){
var inst_28145 = (state_28213[(29)]);
var inst_28144 = cljs.core.deref.call(null,cs);
var inst_28145__$1 = cljs.core.keys.call(null,inst_28144);
var inst_28146 = cljs.core.count.call(null,inst_28145__$1);
var inst_28147 = cljs.core.reset_BANG_.call(null,dctr,inst_28146);
var inst_28152 = cljs.core.seq.call(null,inst_28145__$1);
var inst_28153 = inst_28152;
var inst_28154 = null;
var inst_28155 = (0);
var inst_28156 = (0);
var state_28213__$1 = (function (){var statearr_28256 = state_28213;
(statearr_28256[(30)] = inst_28147);

(statearr_28256[(9)] = inst_28154);

(statearr_28256[(20)] = inst_28153);

(statearr_28256[(21)] = inst_28155);

(statearr_28256[(11)] = inst_28156);

(statearr_28256[(29)] = inst_28145__$1);

return statearr_28256;
})();
var statearr_28257_28326 = state_28213__$1;
(statearr_28257_28326[(2)] = null);

(statearr_28257_28326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (28))){
var inst_28153 = (state_28213[(20)]);
var inst_28172 = (state_28213[(25)]);
var inst_28172__$1 = cljs.core.seq.call(null,inst_28153);
var state_28213__$1 = (function (){var statearr_28258 = state_28213;
(statearr_28258[(25)] = inst_28172__$1);

return statearr_28258;
})();
if(inst_28172__$1){
var statearr_28259_28327 = state_28213__$1;
(statearr_28259_28327[(1)] = (33));

} else {
var statearr_28260_28328 = state_28213__$1;
(statearr_28260_28328[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (25))){
var inst_28155 = (state_28213[(21)]);
var inst_28156 = (state_28213[(11)]);
var inst_28158 = (inst_28156 < inst_28155);
var inst_28159 = inst_28158;
var state_28213__$1 = state_28213;
if(cljs.core.truth_(inst_28159)){
var statearr_28261_28329 = state_28213__$1;
(statearr_28261_28329[(1)] = (27));

} else {
var statearr_28262_28330 = state_28213__$1;
(statearr_28262_28330[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (34))){
var state_28213__$1 = state_28213;
var statearr_28263_28331 = state_28213__$1;
(statearr_28263_28331[(2)] = null);

(statearr_28263_28331[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (17))){
var state_28213__$1 = state_28213;
var statearr_28264_28332 = state_28213__$1;
(statearr_28264_28332[(2)] = null);

(statearr_28264_28332[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (3))){
var inst_28211 = (state_28213[(2)]);
var state_28213__$1 = state_28213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28213__$1,inst_28211);
} else {
if((state_val_28214 === (12))){
var inst_28140 = (state_28213[(2)]);
var state_28213__$1 = state_28213;
var statearr_28265_28333 = state_28213__$1;
(statearr_28265_28333[(2)] = inst_28140);

(statearr_28265_28333[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (2))){
var state_28213__$1 = state_28213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28213__$1,(4),ch);
} else {
if((state_val_28214 === (23))){
var state_28213__$1 = state_28213;
var statearr_28266_28334 = state_28213__$1;
(statearr_28266_28334[(2)] = null);

(statearr_28266_28334[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (35))){
var inst_28195 = (state_28213[(2)]);
var state_28213__$1 = state_28213;
var statearr_28267_28335 = state_28213__$1;
(statearr_28267_28335[(2)] = inst_28195);

(statearr_28267_28335[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (19))){
var inst_28114 = (state_28213[(7)]);
var inst_28118 = cljs.core.chunk_first.call(null,inst_28114);
var inst_28119 = cljs.core.chunk_rest.call(null,inst_28114);
var inst_28120 = cljs.core.count.call(null,inst_28118);
var inst_28094 = inst_28119;
var inst_28095 = inst_28118;
var inst_28096 = inst_28120;
var inst_28097 = (0);
var state_28213__$1 = (function (){var statearr_28268 = state_28213;
(statearr_28268[(14)] = inst_28097);

(statearr_28268[(15)] = inst_28094);

(statearr_28268[(16)] = inst_28095);

(statearr_28268[(17)] = inst_28096);

return statearr_28268;
})();
var statearr_28269_28336 = state_28213__$1;
(statearr_28269_28336[(2)] = null);

(statearr_28269_28336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (11))){
var inst_28094 = (state_28213[(15)]);
var inst_28114 = (state_28213[(7)]);
var inst_28114__$1 = cljs.core.seq.call(null,inst_28094);
var state_28213__$1 = (function (){var statearr_28270 = state_28213;
(statearr_28270[(7)] = inst_28114__$1);

return statearr_28270;
})();
if(inst_28114__$1){
var statearr_28271_28337 = state_28213__$1;
(statearr_28271_28337[(1)] = (16));

} else {
var statearr_28272_28338 = state_28213__$1;
(statearr_28272_28338[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (9))){
var inst_28142 = (state_28213[(2)]);
var state_28213__$1 = state_28213;
var statearr_28273_28339 = state_28213__$1;
(statearr_28273_28339[(2)] = inst_28142);

(statearr_28273_28339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (5))){
var inst_28092 = cljs.core.deref.call(null,cs);
var inst_28093 = cljs.core.seq.call(null,inst_28092);
var inst_28094 = inst_28093;
var inst_28095 = null;
var inst_28096 = (0);
var inst_28097 = (0);
var state_28213__$1 = (function (){var statearr_28274 = state_28213;
(statearr_28274[(14)] = inst_28097);

(statearr_28274[(15)] = inst_28094);

(statearr_28274[(16)] = inst_28095);

(statearr_28274[(17)] = inst_28096);

return statearr_28274;
})();
var statearr_28275_28340 = state_28213__$1;
(statearr_28275_28340[(2)] = null);

(statearr_28275_28340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (14))){
var state_28213__$1 = state_28213;
var statearr_28276_28341 = state_28213__$1;
(statearr_28276_28341[(2)] = null);

(statearr_28276_28341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (45))){
var inst_28203 = (state_28213[(2)]);
var state_28213__$1 = state_28213;
var statearr_28277_28342 = state_28213__$1;
(statearr_28277_28342[(2)] = inst_28203);

(statearr_28277_28342[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (26))){
var inst_28145 = (state_28213[(29)]);
var inst_28199 = (state_28213[(2)]);
var inst_28200 = cljs.core.seq.call(null,inst_28145);
var state_28213__$1 = (function (){var statearr_28278 = state_28213;
(statearr_28278[(31)] = inst_28199);

return statearr_28278;
})();
if(inst_28200){
var statearr_28279_28343 = state_28213__$1;
(statearr_28279_28343[(1)] = (42));

} else {
var statearr_28280_28344 = state_28213__$1;
(statearr_28280_28344[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (16))){
var inst_28114 = (state_28213[(7)]);
var inst_28116 = cljs.core.chunked_seq_QMARK_.call(null,inst_28114);
var state_28213__$1 = state_28213;
if(inst_28116){
var statearr_28281_28345 = state_28213__$1;
(statearr_28281_28345[(1)] = (19));

} else {
var statearr_28282_28346 = state_28213__$1;
(statearr_28282_28346[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (38))){
var inst_28192 = (state_28213[(2)]);
var state_28213__$1 = state_28213;
var statearr_28283_28347 = state_28213__$1;
(statearr_28283_28347[(2)] = inst_28192);

(statearr_28283_28347[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (30))){
var state_28213__$1 = state_28213;
var statearr_28284_28348 = state_28213__$1;
(statearr_28284_28348[(2)] = null);

(statearr_28284_28348[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (10))){
var inst_28097 = (state_28213[(14)]);
var inst_28095 = (state_28213[(16)]);
var inst_28103 = cljs.core._nth.call(null,inst_28095,inst_28097);
var inst_28104 = cljs.core.nth.call(null,inst_28103,(0),null);
var inst_28105 = cljs.core.nth.call(null,inst_28103,(1),null);
var state_28213__$1 = (function (){var statearr_28285 = state_28213;
(statearr_28285[(26)] = inst_28104);

return statearr_28285;
})();
if(cljs.core.truth_(inst_28105)){
var statearr_28286_28349 = state_28213__$1;
(statearr_28286_28349[(1)] = (13));

} else {
var statearr_28287_28350 = state_28213__$1;
(statearr_28287_28350[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (18))){
var inst_28138 = (state_28213[(2)]);
var state_28213__$1 = state_28213;
var statearr_28288_28351 = state_28213__$1;
(statearr_28288_28351[(2)] = inst_28138);

(statearr_28288_28351[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (42))){
var state_28213__$1 = state_28213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28213__$1,(45),dchan);
} else {
if((state_val_28214 === (37))){
var inst_28181 = (state_28213[(23)]);
var inst_28085 = (state_28213[(10)]);
var inst_28172 = (state_28213[(25)]);
var inst_28181__$1 = cljs.core.first.call(null,inst_28172);
var inst_28182 = cljs.core.async.put_BANG_.call(null,inst_28181__$1,inst_28085,done);
var state_28213__$1 = (function (){var statearr_28289 = state_28213;
(statearr_28289[(23)] = inst_28181__$1);

return statearr_28289;
})();
if(cljs.core.truth_(inst_28182)){
var statearr_28290_28352 = state_28213__$1;
(statearr_28290_28352[(1)] = (39));

} else {
var statearr_28291_28353 = state_28213__$1;
(statearr_28291_28353[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28214 === (8))){
var inst_28097 = (state_28213[(14)]);
var inst_28096 = (state_28213[(17)]);
var inst_28099 = (inst_28097 < inst_28096);
var inst_28100 = inst_28099;
var state_28213__$1 = state_28213;
if(cljs.core.truth_(inst_28100)){
var statearr_28292_28354 = state_28213__$1;
(statearr_28292_28354[(1)] = (10));

} else {
var statearr_28293_28355 = state_28213__$1;
(statearr_28293_28355[(1)] = (11));

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
});})(c__26994__auto___28301,cs,m,dchan,dctr,done))
;
return ((function (switch__26882__auto__,c__26994__auto___28301,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26883__auto__ = null;
var cljs$core$async$mult_$_state_machine__26883__auto____0 = (function (){
var statearr_28297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28297[(0)] = cljs$core$async$mult_$_state_machine__26883__auto__);

(statearr_28297[(1)] = (1));

return statearr_28297;
});
var cljs$core$async$mult_$_state_machine__26883__auto____1 = (function (state_28213){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_28213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e28298){if((e28298 instanceof Object)){
var ex__26886__auto__ = e28298;
var statearr_28299_28356 = state_28213;
(statearr_28299_28356[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28357 = state_28213;
state_28213 = G__28357;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26883__auto__ = function(state_28213){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26883__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26883__auto____1.call(this,state_28213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26883__auto____0;
cljs$core$async$mult_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26883__auto____1;
return cljs$core$async$mult_$_state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto___28301,cs,m,dchan,dctr,done))
})();
var state__26996__auto__ = (function (){var statearr_28300 = f__26995__auto__.call(null);
(statearr_28300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto___28301);

return statearr_28300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto___28301,cs,m,dchan,dctr,done))
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
var args28358 = [];
var len__23933__auto___28361 = arguments.length;
var i__23934__auto___28362 = (0);
while(true){
if((i__23934__auto___28362 < len__23933__auto___28361)){
args28358.push((arguments[i__23934__auto___28362]));

var G__28363 = (i__23934__auto___28362 + (1));
i__23934__auto___28362 = G__28363;
continue;
} else {
}
break;
}

var G__28360 = args28358.length;
switch (G__28360) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28358.length)].join('')));

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
var x__23526__auto__ = (((m == null))?null:m);
var m__23527__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__23526__auto__)]);
if(!((m__23527__auto__ == null))){
return m__23527__auto__.call(null,m,ch);
} else {
var m__23527__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__23527__auto____$1 == null))){
return m__23527__auto____$1.call(null,m,ch);
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
var x__23526__auto__ = (((m == null))?null:m);
var m__23527__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__23526__auto__)]);
if(!((m__23527__auto__ == null))){
return m__23527__auto__.call(null,m,ch);
} else {
var m__23527__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__23527__auto____$1 == null))){
return m__23527__auto____$1.call(null,m,ch);
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
var x__23526__auto__ = (((m == null))?null:m);
var m__23527__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__23526__auto__)]);
if(!((m__23527__auto__ == null))){
return m__23527__auto__.call(null,m);
} else {
var m__23527__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__23527__auto____$1 == null))){
return m__23527__auto____$1.call(null,m);
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
var x__23526__auto__ = (((m == null))?null:m);
var m__23527__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__23526__auto__)]);
if(!((m__23527__auto__ == null))){
return m__23527__auto__.call(null,m,state_map);
} else {
var m__23527__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__23527__auto____$1 == null))){
return m__23527__auto____$1.call(null,m,state_map);
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
var x__23526__auto__ = (((m == null))?null:m);
var m__23527__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__23526__auto__)]);
if(!((m__23527__auto__ == null))){
return m__23527__auto__.call(null,m,mode);
} else {
var m__23527__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__23527__auto____$1 == null))){
return m__23527__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__23940__auto__ = [];
var len__23933__auto___28375 = arguments.length;
var i__23934__auto___28376 = (0);
while(true){
if((i__23934__auto___28376 < len__23933__auto___28375)){
args__23940__auto__.push((arguments[i__23934__auto___28376]));

var G__28377 = (i__23934__auto___28376 + (1));
i__23934__auto___28376 = G__28377;
continue;
} else {
}
break;
}

var argseq__23941__auto__ = ((((3) < args__23940__auto__.length))?(new cljs.core.IndexedSeq(args__23940__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23941__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28369){
var map__28370 = p__28369;
var map__28370__$1 = ((((!((map__28370 == null)))?((((map__28370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28370):map__28370);
var opts = map__28370__$1;
var statearr_28372_28378 = state;
(statearr_28372_28378[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__28370,map__28370__$1,opts){
return (function (val){
var statearr_28373_28379 = state;
(statearr_28373_28379[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28370,map__28370__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_28374_28380 = state;
(statearr_28374_28380[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28365){
var G__28366 = cljs.core.first.call(null,seq28365);
var seq28365__$1 = cljs.core.next.call(null,seq28365);
var G__28367 = cljs.core.first.call(null,seq28365__$1);
var seq28365__$2 = cljs.core.next.call(null,seq28365__$1);
var G__28368 = cljs.core.first.call(null,seq28365__$2);
var seq28365__$3 = cljs.core.next.call(null,seq28365__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28366,G__28367,G__28368,seq28365__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28544 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28544 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28545){
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
this.meta28545 = meta28545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28546,meta28545__$1){
var self__ = this;
var _28546__$1 = this;
return (new cljs.core.async.t_cljs$core$async28544(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28545__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28544.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28546){
var self__ = this;
var _28546__$1 = this;
return self__.meta28545;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28544.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28544.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28544.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28544.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28544.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28544.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28544.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28544.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28544.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28545","meta28545",352165987,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28544.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28544";

cljs.core.async.t_cljs$core$async28544.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"cljs.core.async/t_cljs$core$async28544");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28544 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28544(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28545){
return (new cljs.core.async.t_cljs$core$async28544(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28545));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28544(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26994__auto___28707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto___28707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto___28707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28644){
var state_val_28645 = (state_28644[(1)]);
if((state_val_28645 === (7))){
var inst_28562 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
var statearr_28646_28708 = state_28644__$1;
(statearr_28646_28708[(2)] = inst_28562);

(statearr_28646_28708[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (20))){
var inst_28574 = (state_28644[(7)]);
var state_28644__$1 = state_28644;
var statearr_28647_28709 = state_28644__$1;
(statearr_28647_28709[(2)] = inst_28574);

(statearr_28647_28709[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (27))){
var state_28644__$1 = state_28644;
var statearr_28648_28710 = state_28644__$1;
(statearr_28648_28710[(2)] = null);

(statearr_28648_28710[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (1))){
var inst_28550 = (state_28644[(8)]);
var inst_28550__$1 = calc_state.call(null);
var inst_28552 = (inst_28550__$1 == null);
var inst_28553 = cljs.core.not.call(null,inst_28552);
var state_28644__$1 = (function (){var statearr_28649 = state_28644;
(statearr_28649[(8)] = inst_28550__$1);

return statearr_28649;
})();
if(inst_28553){
var statearr_28650_28711 = state_28644__$1;
(statearr_28650_28711[(1)] = (2));

} else {
var statearr_28651_28712 = state_28644__$1;
(statearr_28651_28712[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (24))){
var inst_28604 = (state_28644[(9)]);
var inst_28618 = (state_28644[(10)]);
var inst_28597 = (state_28644[(11)]);
var inst_28618__$1 = inst_28597.call(null,inst_28604);
var state_28644__$1 = (function (){var statearr_28652 = state_28644;
(statearr_28652[(10)] = inst_28618__$1);

return statearr_28652;
})();
if(cljs.core.truth_(inst_28618__$1)){
var statearr_28653_28713 = state_28644__$1;
(statearr_28653_28713[(1)] = (29));

} else {
var statearr_28654_28714 = state_28644__$1;
(statearr_28654_28714[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (4))){
var inst_28565 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
if(cljs.core.truth_(inst_28565)){
var statearr_28655_28715 = state_28644__$1;
(statearr_28655_28715[(1)] = (8));

} else {
var statearr_28656_28716 = state_28644__$1;
(statearr_28656_28716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (15))){
var inst_28591 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
if(cljs.core.truth_(inst_28591)){
var statearr_28657_28717 = state_28644__$1;
(statearr_28657_28717[(1)] = (19));

} else {
var statearr_28658_28718 = state_28644__$1;
(statearr_28658_28718[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (21))){
var inst_28596 = (state_28644[(12)]);
var inst_28596__$1 = (state_28644[(2)]);
var inst_28597 = cljs.core.get.call(null,inst_28596__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28598 = cljs.core.get.call(null,inst_28596__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28599 = cljs.core.get.call(null,inst_28596__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28644__$1 = (function (){var statearr_28659 = state_28644;
(statearr_28659[(12)] = inst_28596__$1);

(statearr_28659[(13)] = inst_28598);

(statearr_28659[(11)] = inst_28597);

return statearr_28659;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28644__$1,(22),inst_28599);
} else {
if((state_val_28645 === (31))){
var inst_28626 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
if(cljs.core.truth_(inst_28626)){
var statearr_28660_28719 = state_28644__$1;
(statearr_28660_28719[(1)] = (32));

} else {
var statearr_28661_28720 = state_28644__$1;
(statearr_28661_28720[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (32))){
var inst_28603 = (state_28644[(14)]);
var state_28644__$1 = state_28644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28644__$1,(35),out,inst_28603);
} else {
if((state_val_28645 === (33))){
var inst_28596 = (state_28644[(12)]);
var inst_28574 = inst_28596;
var state_28644__$1 = (function (){var statearr_28662 = state_28644;
(statearr_28662[(7)] = inst_28574);

return statearr_28662;
})();
var statearr_28663_28721 = state_28644__$1;
(statearr_28663_28721[(2)] = null);

(statearr_28663_28721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (13))){
var inst_28574 = (state_28644[(7)]);
var inst_28581 = inst_28574.cljs$lang$protocol_mask$partition0$;
var inst_28582 = (inst_28581 & (64));
var inst_28583 = inst_28574.cljs$core$ISeq$;
var inst_28584 = (inst_28582) || (inst_28583);
var state_28644__$1 = state_28644;
if(cljs.core.truth_(inst_28584)){
var statearr_28664_28722 = state_28644__$1;
(statearr_28664_28722[(1)] = (16));

} else {
var statearr_28665_28723 = state_28644__$1;
(statearr_28665_28723[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (22))){
var inst_28604 = (state_28644[(9)]);
var inst_28603 = (state_28644[(14)]);
var inst_28602 = (state_28644[(2)]);
var inst_28603__$1 = cljs.core.nth.call(null,inst_28602,(0),null);
var inst_28604__$1 = cljs.core.nth.call(null,inst_28602,(1),null);
var inst_28605 = (inst_28603__$1 == null);
var inst_28606 = cljs.core._EQ_.call(null,inst_28604__$1,change);
var inst_28607 = (inst_28605) || (inst_28606);
var state_28644__$1 = (function (){var statearr_28666 = state_28644;
(statearr_28666[(9)] = inst_28604__$1);

(statearr_28666[(14)] = inst_28603__$1);

return statearr_28666;
})();
if(cljs.core.truth_(inst_28607)){
var statearr_28667_28724 = state_28644__$1;
(statearr_28667_28724[(1)] = (23));

} else {
var statearr_28668_28725 = state_28644__$1;
(statearr_28668_28725[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (36))){
var inst_28596 = (state_28644[(12)]);
var inst_28574 = inst_28596;
var state_28644__$1 = (function (){var statearr_28669 = state_28644;
(statearr_28669[(7)] = inst_28574);

return statearr_28669;
})();
var statearr_28670_28726 = state_28644__$1;
(statearr_28670_28726[(2)] = null);

(statearr_28670_28726[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (29))){
var inst_28618 = (state_28644[(10)]);
var state_28644__$1 = state_28644;
var statearr_28671_28727 = state_28644__$1;
(statearr_28671_28727[(2)] = inst_28618);

(statearr_28671_28727[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (6))){
var state_28644__$1 = state_28644;
var statearr_28672_28728 = state_28644__$1;
(statearr_28672_28728[(2)] = false);

(statearr_28672_28728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (28))){
var inst_28614 = (state_28644[(2)]);
var inst_28615 = calc_state.call(null);
var inst_28574 = inst_28615;
var state_28644__$1 = (function (){var statearr_28673 = state_28644;
(statearr_28673[(7)] = inst_28574);

(statearr_28673[(15)] = inst_28614);

return statearr_28673;
})();
var statearr_28674_28729 = state_28644__$1;
(statearr_28674_28729[(2)] = null);

(statearr_28674_28729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (25))){
var inst_28640 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
var statearr_28675_28730 = state_28644__$1;
(statearr_28675_28730[(2)] = inst_28640);

(statearr_28675_28730[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (34))){
var inst_28638 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
var statearr_28676_28731 = state_28644__$1;
(statearr_28676_28731[(2)] = inst_28638);

(statearr_28676_28731[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (17))){
var state_28644__$1 = state_28644;
var statearr_28677_28732 = state_28644__$1;
(statearr_28677_28732[(2)] = false);

(statearr_28677_28732[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (3))){
var state_28644__$1 = state_28644;
var statearr_28678_28733 = state_28644__$1;
(statearr_28678_28733[(2)] = false);

(statearr_28678_28733[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (12))){
var inst_28642 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28644__$1,inst_28642);
} else {
if((state_val_28645 === (2))){
var inst_28550 = (state_28644[(8)]);
var inst_28555 = inst_28550.cljs$lang$protocol_mask$partition0$;
var inst_28556 = (inst_28555 & (64));
var inst_28557 = inst_28550.cljs$core$ISeq$;
var inst_28558 = (inst_28556) || (inst_28557);
var state_28644__$1 = state_28644;
if(cljs.core.truth_(inst_28558)){
var statearr_28679_28734 = state_28644__$1;
(statearr_28679_28734[(1)] = (5));

} else {
var statearr_28680_28735 = state_28644__$1;
(statearr_28680_28735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (23))){
var inst_28603 = (state_28644[(14)]);
var inst_28609 = (inst_28603 == null);
var state_28644__$1 = state_28644;
if(cljs.core.truth_(inst_28609)){
var statearr_28681_28736 = state_28644__$1;
(statearr_28681_28736[(1)] = (26));

} else {
var statearr_28682_28737 = state_28644__$1;
(statearr_28682_28737[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (35))){
var inst_28629 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
if(cljs.core.truth_(inst_28629)){
var statearr_28683_28738 = state_28644__$1;
(statearr_28683_28738[(1)] = (36));

} else {
var statearr_28684_28739 = state_28644__$1;
(statearr_28684_28739[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (19))){
var inst_28574 = (state_28644[(7)]);
var inst_28593 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28574);
var state_28644__$1 = state_28644;
var statearr_28685_28740 = state_28644__$1;
(statearr_28685_28740[(2)] = inst_28593);

(statearr_28685_28740[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (11))){
var inst_28574 = (state_28644[(7)]);
var inst_28578 = (inst_28574 == null);
var inst_28579 = cljs.core.not.call(null,inst_28578);
var state_28644__$1 = state_28644;
if(inst_28579){
var statearr_28686_28741 = state_28644__$1;
(statearr_28686_28741[(1)] = (13));

} else {
var statearr_28687_28742 = state_28644__$1;
(statearr_28687_28742[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (9))){
var inst_28550 = (state_28644[(8)]);
var state_28644__$1 = state_28644;
var statearr_28688_28743 = state_28644__$1;
(statearr_28688_28743[(2)] = inst_28550);

(statearr_28688_28743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (5))){
var state_28644__$1 = state_28644;
var statearr_28689_28744 = state_28644__$1;
(statearr_28689_28744[(2)] = true);

(statearr_28689_28744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (14))){
var state_28644__$1 = state_28644;
var statearr_28690_28745 = state_28644__$1;
(statearr_28690_28745[(2)] = false);

(statearr_28690_28745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (26))){
var inst_28604 = (state_28644[(9)]);
var inst_28611 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28604);
var state_28644__$1 = state_28644;
var statearr_28691_28746 = state_28644__$1;
(statearr_28691_28746[(2)] = inst_28611);

(statearr_28691_28746[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (16))){
var state_28644__$1 = state_28644;
var statearr_28692_28747 = state_28644__$1;
(statearr_28692_28747[(2)] = true);

(statearr_28692_28747[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (38))){
var inst_28634 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
var statearr_28693_28748 = state_28644__$1;
(statearr_28693_28748[(2)] = inst_28634);

(statearr_28693_28748[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (30))){
var inst_28604 = (state_28644[(9)]);
var inst_28598 = (state_28644[(13)]);
var inst_28597 = (state_28644[(11)]);
var inst_28621 = cljs.core.empty_QMARK_.call(null,inst_28597);
var inst_28622 = inst_28598.call(null,inst_28604);
var inst_28623 = cljs.core.not.call(null,inst_28622);
var inst_28624 = (inst_28621) && (inst_28623);
var state_28644__$1 = state_28644;
var statearr_28694_28749 = state_28644__$1;
(statearr_28694_28749[(2)] = inst_28624);

(statearr_28694_28749[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (10))){
var inst_28550 = (state_28644[(8)]);
var inst_28570 = (state_28644[(2)]);
var inst_28571 = cljs.core.get.call(null,inst_28570,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28572 = cljs.core.get.call(null,inst_28570,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28573 = cljs.core.get.call(null,inst_28570,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28574 = inst_28550;
var state_28644__$1 = (function (){var statearr_28695 = state_28644;
(statearr_28695[(7)] = inst_28574);

(statearr_28695[(16)] = inst_28573);

(statearr_28695[(17)] = inst_28571);

(statearr_28695[(18)] = inst_28572);

return statearr_28695;
})();
var statearr_28696_28750 = state_28644__$1;
(statearr_28696_28750[(2)] = null);

(statearr_28696_28750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (18))){
var inst_28588 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
var statearr_28697_28751 = state_28644__$1;
(statearr_28697_28751[(2)] = inst_28588);

(statearr_28697_28751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (37))){
var state_28644__$1 = state_28644;
var statearr_28698_28752 = state_28644__$1;
(statearr_28698_28752[(2)] = null);

(statearr_28698_28752[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (8))){
var inst_28550 = (state_28644[(8)]);
var inst_28567 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28550);
var state_28644__$1 = state_28644;
var statearr_28699_28753 = state_28644__$1;
(statearr_28699_28753[(2)] = inst_28567);

(statearr_28699_28753[(1)] = (10));


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
});})(c__26994__auto___28707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26882__auto__,c__26994__auto___28707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26883__auto__ = null;
var cljs$core$async$mix_$_state_machine__26883__auto____0 = (function (){
var statearr_28703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28703[(0)] = cljs$core$async$mix_$_state_machine__26883__auto__);

(statearr_28703[(1)] = (1));

return statearr_28703;
});
var cljs$core$async$mix_$_state_machine__26883__auto____1 = (function (state_28644){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_28644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e28704){if((e28704 instanceof Object)){
var ex__26886__auto__ = e28704;
var statearr_28705_28754 = state_28644;
(statearr_28705_28754[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28755 = state_28644;
state_28644 = G__28755;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26883__auto__ = function(state_28644){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26883__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26883__auto____1.call(this,state_28644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26883__auto____0;
cljs$core$async$mix_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26883__auto____1;
return cljs$core$async$mix_$_state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto___28707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26996__auto__ = (function (){var statearr_28706 = f__26995__auto__.call(null);
(statearr_28706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto___28707);

return statearr_28706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto___28707,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__23526__auto__ = (((p == null))?null:p);
var m__23527__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__23526__auto__)]);
if(!((m__23527__auto__ == null))){
return m__23527__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__23527__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__23527__auto____$1 == null))){
return m__23527__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__23526__auto__ = (((p == null))?null:p);
var m__23527__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__23526__auto__)]);
if(!((m__23527__auto__ == null))){
return m__23527__auto__.call(null,p,v,ch);
} else {
var m__23527__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__23527__auto____$1 == null))){
return m__23527__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28756 = [];
var len__23933__auto___28759 = arguments.length;
var i__23934__auto___28760 = (0);
while(true){
if((i__23934__auto___28760 < len__23933__auto___28759)){
args28756.push((arguments[i__23934__auto___28760]));

var G__28761 = (i__23934__auto___28760 + (1));
i__23934__auto___28760 = G__28761;
continue;
} else {
}
break;
}

var G__28758 = args28756.length;
switch (G__28758) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28756.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__23526__auto__ = (((p == null))?null:p);
var m__23527__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23526__auto__)]);
if(!((m__23527__auto__ == null))){
return m__23527__auto__.call(null,p);
} else {
var m__23527__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__23527__auto____$1 == null))){
return m__23527__auto____$1.call(null,p);
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
var x__23526__auto__ = (((p == null))?null:p);
var m__23527__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23526__auto__)]);
if(!((m__23527__auto__ == null))){
return m__23527__auto__.call(null,p,v);
} else {
var m__23527__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__23527__auto____$1 == null))){
return m__23527__auto____$1.call(null,p,v);
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
var args28764 = [];
var len__23933__auto___28889 = arguments.length;
var i__23934__auto___28890 = (0);
while(true){
if((i__23934__auto___28890 < len__23933__auto___28889)){
args28764.push((arguments[i__23934__auto___28890]));

var G__28891 = (i__23934__auto___28890 + (1));
i__23934__auto___28890 = G__28891;
continue;
} else {
}
break;
}

var G__28766 = args28764.length;
switch (G__28766) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28764.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__22863__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__22863__auto__)){
return or__22863__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__22863__auto__,mults){
return (function (p1__28763_SHARP_){
if(cljs.core.truth_(p1__28763_SHARP_.call(null,topic))){
return p1__28763_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28763_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__22863__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28767 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28767 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28768){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28768 = meta28768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28769,meta28768__$1){
var self__ = this;
var _28769__$1 = this;
return (new cljs.core.async.t_cljs$core$async28767(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28768__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28767.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28769){
var self__ = this;
var _28769__$1 = this;
return self__.meta28768;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28767.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28767.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28767.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28767.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28767.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28767.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28767.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28767.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28768","meta28768",-797844832,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28767.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28767";

cljs.core.async.t_cljs$core$async28767.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"cljs.core.async/t_cljs$core$async28767");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28767 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28767(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28768){
return (new cljs.core.async.t_cljs$core$async28767(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28768));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28767(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26994__auto___28893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto___28893,mults,ensure_mult,p){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto___28893,mults,ensure_mult,p){
return (function (state_28841){
var state_val_28842 = (state_28841[(1)]);
if((state_val_28842 === (7))){
var inst_28837 = (state_28841[(2)]);
var state_28841__$1 = state_28841;
var statearr_28843_28894 = state_28841__$1;
(statearr_28843_28894[(2)] = inst_28837);

(statearr_28843_28894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (20))){
var state_28841__$1 = state_28841;
var statearr_28844_28895 = state_28841__$1;
(statearr_28844_28895[(2)] = null);

(statearr_28844_28895[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (1))){
var state_28841__$1 = state_28841;
var statearr_28845_28896 = state_28841__$1;
(statearr_28845_28896[(2)] = null);

(statearr_28845_28896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (24))){
var inst_28820 = (state_28841[(7)]);
var inst_28829 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28820);
var state_28841__$1 = state_28841;
var statearr_28846_28897 = state_28841__$1;
(statearr_28846_28897[(2)] = inst_28829);

(statearr_28846_28897[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (4))){
var inst_28772 = (state_28841[(8)]);
var inst_28772__$1 = (state_28841[(2)]);
var inst_28773 = (inst_28772__$1 == null);
var state_28841__$1 = (function (){var statearr_28847 = state_28841;
(statearr_28847[(8)] = inst_28772__$1);

return statearr_28847;
})();
if(cljs.core.truth_(inst_28773)){
var statearr_28848_28898 = state_28841__$1;
(statearr_28848_28898[(1)] = (5));

} else {
var statearr_28849_28899 = state_28841__$1;
(statearr_28849_28899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (15))){
var inst_28814 = (state_28841[(2)]);
var state_28841__$1 = state_28841;
var statearr_28850_28900 = state_28841__$1;
(statearr_28850_28900[(2)] = inst_28814);

(statearr_28850_28900[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (21))){
var inst_28834 = (state_28841[(2)]);
var state_28841__$1 = (function (){var statearr_28851 = state_28841;
(statearr_28851[(9)] = inst_28834);

return statearr_28851;
})();
var statearr_28852_28901 = state_28841__$1;
(statearr_28852_28901[(2)] = null);

(statearr_28852_28901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (13))){
var inst_28796 = (state_28841[(10)]);
var inst_28798 = cljs.core.chunked_seq_QMARK_.call(null,inst_28796);
var state_28841__$1 = state_28841;
if(inst_28798){
var statearr_28853_28902 = state_28841__$1;
(statearr_28853_28902[(1)] = (16));

} else {
var statearr_28854_28903 = state_28841__$1;
(statearr_28854_28903[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (22))){
var inst_28826 = (state_28841[(2)]);
var state_28841__$1 = state_28841;
if(cljs.core.truth_(inst_28826)){
var statearr_28855_28904 = state_28841__$1;
(statearr_28855_28904[(1)] = (23));

} else {
var statearr_28856_28905 = state_28841__$1;
(statearr_28856_28905[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (6))){
var inst_28822 = (state_28841[(11)]);
var inst_28772 = (state_28841[(8)]);
var inst_28820 = (state_28841[(7)]);
var inst_28820__$1 = topic_fn.call(null,inst_28772);
var inst_28821 = cljs.core.deref.call(null,mults);
var inst_28822__$1 = cljs.core.get.call(null,inst_28821,inst_28820__$1);
var state_28841__$1 = (function (){var statearr_28857 = state_28841;
(statearr_28857[(11)] = inst_28822__$1);

(statearr_28857[(7)] = inst_28820__$1);

return statearr_28857;
})();
if(cljs.core.truth_(inst_28822__$1)){
var statearr_28858_28906 = state_28841__$1;
(statearr_28858_28906[(1)] = (19));

} else {
var statearr_28859_28907 = state_28841__$1;
(statearr_28859_28907[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (25))){
var inst_28831 = (state_28841[(2)]);
var state_28841__$1 = state_28841;
var statearr_28860_28908 = state_28841__$1;
(statearr_28860_28908[(2)] = inst_28831);

(statearr_28860_28908[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (17))){
var inst_28796 = (state_28841[(10)]);
var inst_28805 = cljs.core.first.call(null,inst_28796);
var inst_28806 = cljs.core.async.muxch_STAR_.call(null,inst_28805);
var inst_28807 = cljs.core.async.close_BANG_.call(null,inst_28806);
var inst_28808 = cljs.core.next.call(null,inst_28796);
var inst_28782 = inst_28808;
var inst_28783 = null;
var inst_28784 = (0);
var inst_28785 = (0);
var state_28841__$1 = (function (){var statearr_28861 = state_28841;
(statearr_28861[(12)] = inst_28784);

(statearr_28861[(13)] = inst_28782);

(statearr_28861[(14)] = inst_28783);

(statearr_28861[(15)] = inst_28785);

(statearr_28861[(16)] = inst_28807);

return statearr_28861;
})();
var statearr_28862_28909 = state_28841__$1;
(statearr_28862_28909[(2)] = null);

(statearr_28862_28909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (3))){
var inst_28839 = (state_28841[(2)]);
var state_28841__$1 = state_28841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28841__$1,inst_28839);
} else {
if((state_val_28842 === (12))){
var inst_28816 = (state_28841[(2)]);
var state_28841__$1 = state_28841;
var statearr_28863_28910 = state_28841__$1;
(statearr_28863_28910[(2)] = inst_28816);

(statearr_28863_28910[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (2))){
var state_28841__$1 = state_28841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28841__$1,(4),ch);
} else {
if((state_val_28842 === (23))){
var state_28841__$1 = state_28841;
var statearr_28864_28911 = state_28841__$1;
(statearr_28864_28911[(2)] = null);

(statearr_28864_28911[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (19))){
var inst_28822 = (state_28841[(11)]);
var inst_28772 = (state_28841[(8)]);
var inst_28824 = cljs.core.async.muxch_STAR_.call(null,inst_28822);
var state_28841__$1 = state_28841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28841__$1,(22),inst_28824,inst_28772);
} else {
if((state_val_28842 === (11))){
var inst_28796 = (state_28841[(10)]);
var inst_28782 = (state_28841[(13)]);
var inst_28796__$1 = cljs.core.seq.call(null,inst_28782);
var state_28841__$1 = (function (){var statearr_28865 = state_28841;
(statearr_28865[(10)] = inst_28796__$1);

return statearr_28865;
})();
if(inst_28796__$1){
var statearr_28866_28912 = state_28841__$1;
(statearr_28866_28912[(1)] = (13));

} else {
var statearr_28867_28913 = state_28841__$1;
(statearr_28867_28913[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (9))){
var inst_28818 = (state_28841[(2)]);
var state_28841__$1 = state_28841;
var statearr_28868_28914 = state_28841__$1;
(statearr_28868_28914[(2)] = inst_28818);

(statearr_28868_28914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (5))){
var inst_28779 = cljs.core.deref.call(null,mults);
var inst_28780 = cljs.core.vals.call(null,inst_28779);
var inst_28781 = cljs.core.seq.call(null,inst_28780);
var inst_28782 = inst_28781;
var inst_28783 = null;
var inst_28784 = (0);
var inst_28785 = (0);
var state_28841__$1 = (function (){var statearr_28869 = state_28841;
(statearr_28869[(12)] = inst_28784);

(statearr_28869[(13)] = inst_28782);

(statearr_28869[(14)] = inst_28783);

(statearr_28869[(15)] = inst_28785);

return statearr_28869;
})();
var statearr_28870_28915 = state_28841__$1;
(statearr_28870_28915[(2)] = null);

(statearr_28870_28915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (14))){
var state_28841__$1 = state_28841;
var statearr_28874_28916 = state_28841__$1;
(statearr_28874_28916[(2)] = null);

(statearr_28874_28916[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (16))){
var inst_28796 = (state_28841[(10)]);
var inst_28800 = cljs.core.chunk_first.call(null,inst_28796);
var inst_28801 = cljs.core.chunk_rest.call(null,inst_28796);
var inst_28802 = cljs.core.count.call(null,inst_28800);
var inst_28782 = inst_28801;
var inst_28783 = inst_28800;
var inst_28784 = inst_28802;
var inst_28785 = (0);
var state_28841__$1 = (function (){var statearr_28875 = state_28841;
(statearr_28875[(12)] = inst_28784);

(statearr_28875[(13)] = inst_28782);

(statearr_28875[(14)] = inst_28783);

(statearr_28875[(15)] = inst_28785);

return statearr_28875;
})();
var statearr_28876_28917 = state_28841__$1;
(statearr_28876_28917[(2)] = null);

(statearr_28876_28917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (10))){
var inst_28784 = (state_28841[(12)]);
var inst_28782 = (state_28841[(13)]);
var inst_28783 = (state_28841[(14)]);
var inst_28785 = (state_28841[(15)]);
var inst_28790 = cljs.core._nth.call(null,inst_28783,inst_28785);
var inst_28791 = cljs.core.async.muxch_STAR_.call(null,inst_28790);
var inst_28792 = cljs.core.async.close_BANG_.call(null,inst_28791);
var inst_28793 = (inst_28785 + (1));
var tmp28871 = inst_28784;
var tmp28872 = inst_28782;
var tmp28873 = inst_28783;
var inst_28782__$1 = tmp28872;
var inst_28783__$1 = tmp28873;
var inst_28784__$1 = tmp28871;
var inst_28785__$1 = inst_28793;
var state_28841__$1 = (function (){var statearr_28877 = state_28841;
(statearr_28877[(12)] = inst_28784__$1);

(statearr_28877[(13)] = inst_28782__$1);

(statearr_28877[(14)] = inst_28783__$1);

(statearr_28877[(15)] = inst_28785__$1);

(statearr_28877[(17)] = inst_28792);

return statearr_28877;
})();
var statearr_28878_28918 = state_28841__$1;
(statearr_28878_28918[(2)] = null);

(statearr_28878_28918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (18))){
var inst_28811 = (state_28841[(2)]);
var state_28841__$1 = state_28841;
var statearr_28879_28919 = state_28841__$1;
(statearr_28879_28919[(2)] = inst_28811);

(statearr_28879_28919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28842 === (8))){
var inst_28784 = (state_28841[(12)]);
var inst_28785 = (state_28841[(15)]);
var inst_28787 = (inst_28785 < inst_28784);
var inst_28788 = inst_28787;
var state_28841__$1 = state_28841;
if(cljs.core.truth_(inst_28788)){
var statearr_28880_28920 = state_28841__$1;
(statearr_28880_28920[(1)] = (10));

} else {
var statearr_28881_28921 = state_28841__$1;
(statearr_28881_28921[(1)] = (11));

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
});})(c__26994__auto___28893,mults,ensure_mult,p))
;
return ((function (switch__26882__auto__,c__26994__auto___28893,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26883__auto__ = null;
var cljs$core$async$state_machine__26883__auto____0 = (function (){
var statearr_28885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28885[(0)] = cljs$core$async$state_machine__26883__auto__);

(statearr_28885[(1)] = (1));

return statearr_28885;
});
var cljs$core$async$state_machine__26883__auto____1 = (function (state_28841){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_28841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e28886){if((e28886 instanceof Object)){
var ex__26886__auto__ = e28886;
var statearr_28887_28922 = state_28841;
(statearr_28887_28922[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28923 = state_28841;
state_28841 = G__28923;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
cljs$core$async$state_machine__26883__auto__ = function(state_28841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26883__auto____1.call(this,state_28841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26883__auto____0;
cljs$core$async$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26883__auto____1;
return cljs$core$async$state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto___28893,mults,ensure_mult,p))
})();
var state__26996__auto__ = (function (){var statearr_28888 = f__26995__auto__.call(null);
(statearr_28888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto___28893);

return statearr_28888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto___28893,mults,ensure_mult,p))
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
var args28924 = [];
var len__23933__auto___28927 = arguments.length;
var i__23934__auto___28928 = (0);
while(true){
if((i__23934__auto___28928 < len__23933__auto___28927)){
args28924.push((arguments[i__23934__auto___28928]));

var G__28929 = (i__23934__auto___28928 + (1));
i__23934__auto___28928 = G__28929;
continue;
} else {
}
break;
}

var G__28926 = args28924.length;
switch (G__28926) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28924.length)].join('')));

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
var args28931 = [];
var len__23933__auto___28934 = arguments.length;
var i__23934__auto___28935 = (0);
while(true){
if((i__23934__auto___28935 < len__23933__auto___28934)){
args28931.push((arguments[i__23934__auto___28935]));

var G__28936 = (i__23934__auto___28935 + (1));
i__23934__auto___28935 = G__28936;
continue;
} else {
}
break;
}

var G__28933 = args28931.length;
switch (G__28933) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28931.length)].join('')));

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
var args28938 = [];
var len__23933__auto___29009 = arguments.length;
var i__23934__auto___29010 = (0);
while(true){
if((i__23934__auto___29010 < len__23933__auto___29009)){
args28938.push((arguments[i__23934__auto___29010]));

var G__29011 = (i__23934__auto___29010 + (1));
i__23934__auto___29010 = G__29011;
continue;
} else {
}
break;
}

var G__28940 = args28938.length;
switch (G__28940) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28938.length)].join('')));

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
var c__26994__auto___29013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto___29013,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto___29013,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28979){
var state_val_28980 = (state_28979[(1)]);
if((state_val_28980 === (7))){
var state_28979__$1 = state_28979;
var statearr_28981_29014 = state_28979__$1;
(statearr_28981_29014[(2)] = null);

(statearr_28981_29014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (1))){
var state_28979__$1 = state_28979;
var statearr_28982_29015 = state_28979__$1;
(statearr_28982_29015[(2)] = null);

(statearr_28982_29015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (4))){
var inst_28943 = (state_28979[(7)]);
var inst_28945 = (inst_28943 < cnt);
var state_28979__$1 = state_28979;
if(cljs.core.truth_(inst_28945)){
var statearr_28983_29016 = state_28979__$1;
(statearr_28983_29016[(1)] = (6));

} else {
var statearr_28984_29017 = state_28979__$1;
(statearr_28984_29017[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (15))){
var inst_28975 = (state_28979[(2)]);
var state_28979__$1 = state_28979;
var statearr_28985_29018 = state_28979__$1;
(statearr_28985_29018[(2)] = inst_28975);

(statearr_28985_29018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (13))){
var inst_28968 = cljs.core.async.close_BANG_.call(null,out);
var state_28979__$1 = state_28979;
var statearr_28986_29019 = state_28979__$1;
(statearr_28986_29019[(2)] = inst_28968);

(statearr_28986_29019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (6))){
var state_28979__$1 = state_28979;
var statearr_28987_29020 = state_28979__$1;
(statearr_28987_29020[(2)] = null);

(statearr_28987_29020[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (3))){
var inst_28977 = (state_28979[(2)]);
var state_28979__$1 = state_28979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28979__$1,inst_28977);
} else {
if((state_val_28980 === (12))){
var inst_28965 = (state_28979[(8)]);
var inst_28965__$1 = (state_28979[(2)]);
var inst_28966 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28965__$1);
var state_28979__$1 = (function (){var statearr_28988 = state_28979;
(statearr_28988[(8)] = inst_28965__$1);

return statearr_28988;
})();
if(cljs.core.truth_(inst_28966)){
var statearr_28989_29021 = state_28979__$1;
(statearr_28989_29021[(1)] = (13));

} else {
var statearr_28990_29022 = state_28979__$1;
(statearr_28990_29022[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (2))){
var inst_28942 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28943 = (0);
var state_28979__$1 = (function (){var statearr_28991 = state_28979;
(statearr_28991[(7)] = inst_28943);

(statearr_28991[(9)] = inst_28942);

return statearr_28991;
})();
var statearr_28992_29023 = state_28979__$1;
(statearr_28992_29023[(2)] = null);

(statearr_28992_29023[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (11))){
var inst_28943 = (state_28979[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28979,(10),Object,null,(9));
var inst_28952 = chs__$1.call(null,inst_28943);
var inst_28953 = done.call(null,inst_28943);
var inst_28954 = cljs.core.async.take_BANG_.call(null,inst_28952,inst_28953);
var state_28979__$1 = state_28979;
var statearr_28993_29024 = state_28979__$1;
(statearr_28993_29024[(2)] = inst_28954);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28979__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (9))){
var inst_28943 = (state_28979[(7)]);
var inst_28956 = (state_28979[(2)]);
var inst_28957 = (inst_28943 + (1));
var inst_28943__$1 = inst_28957;
var state_28979__$1 = (function (){var statearr_28994 = state_28979;
(statearr_28994[(7)] = inst_28943__$1);

(statearr_28994[(10)] = inst_28956);

return statearr_28994;
})();
var statearr_28995_29025 = state_28979__$1;
(statearr_28995_29025[(2)] = null);

(statearr_28995_29025[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (5))){
var inst_28963 = (state_28979[(2)]);
var state_28979__$1 = (function (){var statearr_28996 = state_28979;
(statearr_28996[(11)] = inst_28963);

return statearr_28996;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28979__$1,(12),dchan);
} else {
if((state_val_28980 === (14))){
var inst_28965 = (state_28979[(8)]);
var inst_28970 = cljs.core.apply.call(null,f,inst_28965);
var state_28979__$1 = state_28979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28979__$1,(16),out,inst_28970);
} else {
if((state_val_28980 === (16))){
var inst_28972 = (state_28979[(2)]);
var state_28979__$1 = (function (){var statearr_28997 = state_28979;
(statearr_28997[(12)] = inst_28972);

return statearr_28997;
})();
var statearr_28998_29026 = state_28979__$1;
(statearr_28998_29026[(2)] = null);

(statearr_28998_29026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (10))){
var inst_28947 = (state_28979[(2)]);
var inst_28948 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28979__$1 = (function (){var statearr_28999 = state_28979;
(statearr_28999[(13)] = inst_28947);

return statearr_28999;
})();
var statearr_29000_29027 = state_28979__$1;
(statearr_29000_29027[(2)] = inst_28948);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28979__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (8))){
var inst_28961 = (state_28979[(2)]);
var state_28979__$1 = state_28979;
var statearr_29001_29028 = state_28979__$1;
(statearr_29001_29028[(2)] = inst_28961);

(statearr_29001_29028[(1)] = (5));


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
});})(c__26994__auto___29013,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26882__auto__,c__26994__auto___29013,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26883__auto__ = null;
var cljs$core$async$state_machine__26883__auto____0 = (function (){
var statearr_29005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29005[(0)] = cljs$core$async$state_machine__26883__auto__);

(statearr_29005[(1)] = (1));

return statearr_29005;
});
var cljs$core$async$state_machine__26883__auto____1 = (function (state_28979){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_28979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e29006){if((e29006 instanceof Object)){
var ex__26886__auto__ = e29006;
var statearr_29007_29029 = state_28979;
(statearr_29007_29029[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29030 = state_28979;
state_28979 = G__29030;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
cljs$core$async$state_machine__26883__auto__ = function(state_28979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26883__auto____1.call(this,state_28979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26883__auto____0;
cljs$core$async$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26883__auto____1;
return cljs$core$async$state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto___29013,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26996__auto__ = (function (){var statearr_29008 = f__26995__auto__.call(null);
(statearr_29008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto___29013);

return statearr_29008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto___29013,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29032 = [];
var len__23933__auto___29088 = arguments.length;
var i__23934__auto___29089 = (0);
while(true){
if((i__23934__auto___29089 < len__23933__auto___29088)){
args29032.push((arguments[i__23934__auto___29089]));

var G__29090 = (i__23934__auto___29089 + (1));
i__23934__auto___29089 = G__29090;
continue;
} else {
}
break;
}

var G__29034 = args29032.length;
switch (G__29034) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29032.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26994__auto___29092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto___29092,out){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto___29092,out){
return (function (state_29064){
var state_val_29065 = (state_29064[(1)]);
if((state_val_29065 === (7))){
var inst_29043 = (state_29064[(7)]);
var inst_29044 = (state_29064[(8)]);
var inst_29043__$1 = (state_29064[(2)]);
var inst_29044__$1 = cljs.core.nth.call(null,inst_29043__$1,(0),null);
var inst_29045 = cljs.core.nth.call(null,inst_29043__$1,(1),null);
var inst_29046 = (inst_29044__$1 == null);
var state_29064__$1 = (function (){var statearr_29066 = state_29064;
(statearr_29066[(9)] = inst_29045);

(statearr_29066[(7)] = inst_29043__$1);

(statearr_29066[(8)] = inst_29044__$1);

return statearr_29066;
})();
if(cljs.core.truth_(inst_29046)){
var statearr_29067_29093 = state_29064__$1;
(statearr_29067_29093[(1)] = (8));

} else {
var statearr_29068_29094 = state_29064__$1;
(statearr_29068_29094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29065 === (1))){
var inst_29035 = cljs.core.vec.call(null,chs);
var inst_29036 = inst_29035;
var state_29064__$1 = (function (){var statearr_29069 = state_29064;
(statearr_29069[(10)] = inst_29036);

return statearr_29069;
})();
var statearr_29070_29095 = state_29064__$1;
(statearr_29070_29095[(2)] = null);

(statearr_29070_29095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29065 === (4))){
var inst_29036 = (state_29064[(10)]);
var state_29064__$1 = state_29064;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29064__$1,(7),inst_29036);
} else {
if((state_val_29065 === (6))){
var inst_29060 = (state_29064[(2)]);
var state_29064__$1 = state_29064;
var statearr_29071_29096 = state_29064__$1;
(statearr_29071_29096[(2)] = inst_29060);

(statearr_29071_29096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29065 === (3))){
var inst_29062 = (state_29064[(2)]);
var state_29064__$1 = state_29064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29064__$1,inst_29062);
} else {
if((state_val_29065 === (2))){
var inst_29036 = (state_29064[(10)]);
var inst_29038 = cljs.core.count.call(null,inst_29036);
var inst_29039 = (inst_29038 > (0));
var state_29064__$1 = state_29064;
if(cljs.core.truth_(inst_29039)){
var statearr_29073_29097 = state_29064__$1;
(statearr_29073_29097[(1)] = (4));

} else {
var statearr_29074_29098 = state_29064__$1;
(statearr_29074_29098[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29065 === (11))){
var inst_29036 = (state_29064[(10)]);
var inst_29053 = (state_29064[(2)]);
var tmp29072 = inst_29036;
var inst_29036__$1 = tmp29072;
var state_29064__$1 = (function (){var statearr_29075 = state_29064;
(statearr_29075[(10)] = inst_29036__$1);

(statearr_29075[(11)] = inst_29053);

return statearr_29075;
})();
var statearr_29076_29099 = state_29064__$1;
(statearr_29076_29099[(2)] = null);

(statearr_29076_29099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29065 === (9))){
var inst_29044 = (state_29064[(8)]);
var state_29064__$1 = state_29064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29064__$1,(11),out,inst_29044);
} else {
if((state_val_29065 === (5))){
var inst_29058 = cljs.core.async.close_BANG_.call(null,out);
var state_29064__$1 = state_29064;
var statearr_29077_29100 = state_29064__$1;
(statearr_29077_29100[(2)] = inst_29058);

(statearr_29077_29100[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29065 === (10))){
var inst_29056 = (state_29064[(2)]);
var state_29064__$1 = state_29064;
var statearr_29078_29101 = state_29064__$1;
(statearr_29078_29101[(2)] = inst_29056);

(statearr_29078_29101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29065 === (8))){
var inst_29045 = (state_29064[(9)]);
var inst_29043 = (state_29064[(7)]);
var inst_29044 = (state_29064[(8)]);
var inst_29036 = (state_29064[(10)]);
var inst_29048 = (function (){var cs = inst_29036;
var vec__29041 = inst_29043;
var v = inst_29044;
var c = inst_29045;
return ((function (cs,vec__29041,v,c,inst_29045,inst_29043,inst_29044,inst_29036,state_val_29065,c__26994__auto___29092,out){
return (function (p1__29031_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29031_SHARP_);
});
;})(cs,vec__29041,v,c,inst_29045,inst_29043,inst_29044,inst_29036,state_val_29065,c__26994__auto___29092,out))
})();
var inst_29049 = cljs.core.filterv.call(null,inst_29048,inst_29036);
var inst_29036__$1 = inst_29049;
var state_29064__$1 = (function (){var statearr_29079 = state_29064;
(statearr_29079[(10)] = inst_29036__$1);

return statearr_29079;
})();
var statearr_29080_29102 = state_29064__$1;
(statearr_29080_29102[(2)] = null);

(statearr_29080_29102[(1)] = (2));


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
});})(c__26994__auto___29092,out))
;
return ((function (switch__26882__auto__,c__26994__auto___29092,out){
return (function() {
var cljs$core$async$state_machine__26883__auto__ = null;
var cljs$core$async$state_machine__26883__auto____0 = (function (){
var statearr_29084 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29084[(0)] = cljs$core$async$state_machine__26883__auto__);

(statearr_29084[(1)] = (1));

return statearr_29084;
});
var cljs$core$async$state_machine__26883__auto____1 = (function (state_29064){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_29064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e29085){if((e29085 instanceof Object)){
var ex__26886__auto__ = e29085;
var statearr_29086_29103 = state_29064;
(statearr_29086_29103[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29104 = state_29064;
state_29064 = G__29104;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
cljs$core$async$state_machine__26883__auto__ = function(state_29064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26883__auto____1.call(this,state_29064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26883__auto____0;
cljs$core$async$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26883__auto____1;
return cljs$core$async$state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto___29092,out))
})();
var state__26996__auto__ = (function (){var statearr_29087 = f__26995__auto__.call(null);
(statearr_29087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto___29092);

return statearr_29087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto___29092,out))
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
var args29105 = [];
var len__23933__auto___29154 = arguments.length;
var i__23934__auto___29155 = (0);
while(true){
if((i__23934__auto___29155 < len__23933__auto___29154)){
args29105.push((arguments[i__23934__auto___29155]));

var G__29156 = (i__23934__auto___29155 + (1));
i__23934__auto___29155 = G__29156;
continue;
} else {
}
break;
}

var G__29107 = args29105.length;
switch (G__29107) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29105.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26994__auto___29158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto___29158,out){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto___29158,out){
return (function (state_29131){
var state_val_29132 = (state_29131[(1)]);
if((state_val_29132 === (7))){
var inst_29113 = (state_29131[(7)]);
var inst_29113__$1 = (state_29131[(2)]);
var inst_29114 = (inst_29113__$1 == null);
var inst_29115 = cljs.core.not.call(null,inst_29114);
var state_29131__$1 = (function (){var statearr_29133 = state_29131;
(statearr_29133[(7)] = inst_29113__$1);

return statearr_29133;
})();
if(inst_29115){
var statearr_29134_29159 = state_29131__$1;
(statearr_29134_29159[(1)] = (8));

} else {
var statearr_29135_29160 = state_29131__$1;
(statearr_29135_29160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (1))){
var inst_29108 = (0);
var state_29131__$1 = (function (){var statearr_29136 = state_29131;
(statearr_29136[(8)] = inst_29108);

return statearr_29136;
})();
var statearr_29137_29161 = state_29131__$1;
(statearr_29137_29161[(2)] = null);

(statearr_29137_29161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (4))){
var state_29131__$1 = state_29131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29131__$1,(7),ch);
} else {
if((state_val_29132 === (6))){
var inst_29126 = (state_29131[(2)]);
var state_29131__$1 = state_29131;
var statearr_29138_29162 = state_29131__$1;
(statearr_29138_29162[(2)] = inst_29126);

(statearr_29138_29162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (3))){
var inst_29128 = (state_29131[(2)]);
var inst_29129 = cljs.core.async.close_BANG_.call(null,out);
var state_29131__$1 = (function (){var statearr_29139 = state_29131;
(statearr_29139[(9)] = inst_29128);

return statearr_29139;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29131__$1,inst_29129);
} else {
if((state_val_29132 === (2))){
var inst_29108 = (state_29131[(8)]);
var inst_29110 = (inst_29108 < n);
var state_29131__$1 = state_29131;
if(cljs.core.truth_(inst_29110)){
var statearr_29140_29163 = state_29131__$1;
(statearr_29140_29163[(1)] = (4));

} else {
var statearr_29141_29164 = state_29131__$1;
(statearr_29141_29164[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (11))){
var inst_29108 = (state_29131[(8)]);
var inst_29118 = (state_29131[(2)]);
var inst_29119 = (inst_29108 + (1));
var inst_29108__$1 = inst_29119;
var state_29131__$1 = (function (){var statearr_29142 = state_29131;
(statearr_29142[(10)] = inst_29118);

(statearr_29142[(8)] = inst_29108__$1);

return statearr_29142;
})();
var statearr_29143_29165 = state_29131__$1;
(statearr_29143_29165[(2)] = null);

(statearr_29143_29165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (9))){
var state_29131__$1 = state_29131;
var statearr_29144_29166 = state_29131__$1;
(statearr_29144_29166[(2)] = null);

(statearr_29144_29166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (5))){
var state_29131__$1 = state_29131;
var statearr_29145_29167 = state_29131__$1;
(statearr_29145_29167[(2)] = null);

(statearr_29145_29167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (10))){
var inst_29123 = (state_29131[(2)]);
var state_29131__$1 = state_29131;
var statearr_29146_29168 = state_29131__$1;
(statearr_29146_29168[(2)] = inst_29123);

(statearr_29146_29168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29132 === (8))){
var inst_29113 = (state_29131[(7)]);
var state_29131__$1 = state_29131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29131__$1,(11),out,inst_29113);
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
});})(c__26994__auto___29158,out))
;
return ((function (switch__26882__auto__,c__26994__auto___29158,out){
return (function() {
var cljs$core$async$state_machine__26883__auto__ = null;
var cljs$core$async$state_machine__26883__auto____0 = (function (){
var statearr_29150 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29150[(0)] = cljs$core$async$state_machine__26883__auto__);

(statearr_29150[(1)] = (1));

return statearr_29150;
});
var cljs$core$async$state_machine__26883__auto____1 = (function (state_29131){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_29131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e29151){if((e29151 instanceof Object)){
var ex__26886__auto__ = e29151;
var statearr_29152_29169 = state_29131;
(statearr_29152_29169[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29170 = state_29131;
state_29131 = G__29170;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
cljs$core$async$state_machine__26883__auto__ = function(state_29131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26883__auto____1.call(this,state_29131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26883__auto____0;
cljs$core$async$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26883__auto____1;
return cljs$core$async$state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto___29158,out))
})();
var state__26996__auto__ = (function (){var statearr_29153 = f__26995__auto__.call(null);
(statearr_29153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto___29158);

return statearr_29153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto___29158,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29178 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29178 = (function (map_LT_,f,ch,meta29179){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29179 = meta29179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29180,meta29179__$1){
var self__ = this;
var _29180__$1 = this;
return (new cljs.core.async.t_cljs$core$async29178(self__.map_LT_,self__.f,self__.ch,meta29179__$1));
});

cljs.core.async.t_cljs$core$async29178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29180){
var self__ = this;
var _29180__$1 = this;
return self__.meta29179;
});

cljs.core.async.t_cljs$core$async29178.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29178.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29178.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29178.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29178.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29181 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29181 = (function (map_LT_,f,ch,meta29179,_,fn1,meta29182){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29179 = meta29179;
this._ = _;
this.fn1 = fn1;
this.meta29182 = meta29182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29183,meta29182__$1){
var self__ = this;
var _29183__$1 = this;
return (new cljs.core.async.t_cljs$core$async29181(self__.map_LT_,self__.f,self__.ch,self__.meta29179,self__._,self__.fn1,meta29182__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29181.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29183){
var self__ = this;
var _29183__$1 = this;
return self__.meta29182;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29181.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29181.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29181.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29181.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29171_SHARP_){
return f1.call(null,(((p1__29171_SHARP_ == null))?null:self__.f.call(null,p1__29171_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29181.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29179","meta29179",-352304873,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29178","cljs.core.async/t_cljs$core$async29178",-1954340393,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29182","meta29182",522379225,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29181.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29181";

cljs.core.async.t_cljs$core$async29181.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"cljs.core.async/t_cljs$core$async29181");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29181 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29181(map_LT___$1,f__$1,ch__$1,meta29179__$1,___$2,fn1__$1,meta29182){
return (new cljs.core.async.t_cljs$core$async29181(map_LT___$1,f__$1,ch__$1,meta29179__$1,___$2,fn1__$1,meta29182));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29181(self__.map_LT_,self__.f,self__.ch,self__.meta29179,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__22851__auto__ = ret;
if(cljs.core.truth_(and__22851__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__22851__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29178.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29178.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29179","meta29179",-352304873,null)], null);
});

cljs.core.async.t_cljs$core$async29178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29178";

cljs.core.async.t_cljs$core$async29178.cljs$lang$ctorPrWriter = (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"cljs.core.async/t_cljs$core$async29178");
});

cljs.core.async.__GT_t_cljs$core$async29178 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29178(map_LT___$1,f__$1,ch__$1,meta29179){
return (new cljs.core.async.t_cljs$core$async29178(map_LT___$1,f__$1,ch__$1,meta29179));
});

}

return (new cljs.core.async.t_cljs$core$async29178(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29187 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29187 = (function (map_GT_,f,ch,meta29188){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29188 = meta29188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29189,meta29188__$1){
var self__ = this;
var _29189__$1 = this;
return (new cljs.core.async.t_cljs$core$async29187(self__.map_GT_,self__.f,self__.ch,meta29188__$1));
});

cljs.core.async.t_cljs$core$async29187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29189){
var self__ = this;
var _29189__$1 = this;
return self__.meta29188;
});

cljs.core.async.t_cljs$core$async29187.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29187.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29187.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29187.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29187.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29187.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29188","meta29188",-62090708,null)], null);
});

cljs.core.async.t_cljs$core$async29187.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29187";

cljs.core.async.t_cljs$core$async29187.cljs$lang$ctorPrWriter = (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"cljs.core.async/t_cljs$core$async29187");
});

cljs.core.async.__GT_t_cljs$core$async29187 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29187(map_GT___$1,f__$1,ch__$1,meta29188){
return (new cljs.core.async.t_cljs$core$async29187(map_GT___$1,f__$1,ch__$1,meta29188));
});

}

return (new cljs.core.async.t_cljs$core$async29187(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29193 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29193 = (function (filter_GT_,p,ch,meta29194){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29194 = meta29194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29195,meta29194__$1){
var self__ = this;
var _29195__$1 = this;
return (new cljs.core.async.t_cljs$core$async29193(self__.filter_GT_,self__.p,self__.ch,meta29194__$1));
});

cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29195){
var self__ = this;
var _29195__$1 = this;
return self__.meta29194;
});

cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29193.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29194","meta29194",-941426372,null)], null);
});

cljs.core.async.t_cljs$core$async29193.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29193";

cljs.core.async.t_cljs$core$async29193.cljs$lang$ctorPrWriter = (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"cljs.core.async/t_cljs$core$async29193");
});

cljs.core.async.__GT_t_cljs$core$async29193 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29193(filter_GT___$1,p__$1,ch__$1,meta29194){
return (new cljs.core.async.t_cljs$core$async29193(filter_GT___$1,p__$1,ch__$1,meta29194));
});

}

return (new cljs.core.async.t_cljs$core$async29193(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args29196 = [];
var len__23933__auto___29240 = arguments.length;
var i__23934__auto___29241 = (0);
while(true){
if((i__23934__auto___29241 < len__23933__auto___29240)){
args29196.push((arguments[i__23934__auto___29241]));

var G__29242 = (i__23934__auto___29241 + (1));
i__23934__auto___29241 = G__29242;
continue;
} else {
}
break;
}

var G__29198 = args29196.length;
switch (G__29198) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29196.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26994__auto___29244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto___29244,out){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto___29244,out){
return (function (state_29219){
var state_val_29220 = (state_29219[(1)]);
if((state_val_29220 === (7))){
var inst_29215 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
var statearr_29221_29245 = state_29219__$1;
(statearr_29221_29245[(2)] = inst_29215);

(statearr_29221_29245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (1))){
var state_29219__$1 = state_29219;
var statearr_29222_29246 = state_29219__$1;
(statearr_29222_29246[(2)] = null);

(statearr_29222_29246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (4))){
var inst_29201 = (state_29219[(7)]);
var inst_29201__$1 = (state_29219[(2)]);
var inst_29202 = (inst_29201__$1 == null);
var state_29219__$1 = (function (){var statearr_29223 = state_29219;
(statearr_29223[(7)] = inst_29201__$1);

return statearr_29223;
})();
if(cljs.core.truth_(inst_29202)){
var statearr_29224_29247 = state_29219__$1;
(statearr_29224_29247[(1)] = (5));

} else {
var statearr_29225_29248 = state_29219__$1;
(statearr_29225_29248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (6))){
var inst_29201 = (state_29219[(7)]);
var inst_29206 = p.call(null,inst_29201);
var state_29219__$1 = state_29219;
if(cljs.core.truth_(inst_29206)){
var statearr_29226_29249 = state_29219__$1;
(statearr_29226_29249[(1)] = (8));

} else {
var statearr_29227_29250 = state_29219__$1;
(statearr_29227_29250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (3))){
var inst_29217 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29219__$1,inst_29217);
} else {
if((state_val_29220 === (2))){
var state_29219__$1 = state_29219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29219__$1,(4),ch);
} else {
if((state_val_29220 === (11))){
var inst_29209 = (state_29219[(2)]);
var state_29219__$1 = state_29219;
var statearr_29228_29251 = state_29219__$1;
(statearr_29228_29251[(2)] = inst_29209);

(statearr_29228_29251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (9))){
var state_29219__$1 = state_29219;
var statearr_29229_29252 = state_29219__$1;
(statearr_29229_29252[(2)] = null);

(statearr_29229_29252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (5))){
var inst_29204 = cljs.core.async.close_BANG_.call(null,out);
var state_29219__$1 = state_29219;
var statearr_29230_29253 = state_29219__$1;
(statearr_29230_29253[(2)] = inst_29204);

(statearr_29230_29253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (10))){
var inst_29212 = (state_29219[(2)]);
var state_29219__$1 = (function (){var statearr_29231 = state_29219;
(statearr_29231[(8)] = inst_29212);

return statearr_29231;
})();
var statearr_29232_29254 = state_29219__$1;
(statearr_29232_29254[(2)] = null);

(statearr_29232_29254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29220 === (8))){
var inst_29201 = (state_29219[(7)]);
var state_29219__$1 = state_29219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29219__$1,(11),out,inst_29201);
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
});})(c__26994__auto___29244,out))
;
return ((function (switch__26882__auto__,c__26994__auto___29244,out){
return (function() {
var cljs$core$async$state_machine__26883__auto__ = null;
var cljs$core$async$state_machine__26883__auto____0 = (function (){
var statearr_29236 = [null,null,null,null,null,null,null,null,null];
(statearr_29236[(0)] = cljs$core$async$state_machine__26883__auto__);

(statearr_29236[(1)] = (1));

return statearr_29236;
});
var cljs$core$async$state_machine__26883__auto____1 = (function (state_29219){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_29219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e29237){if((e29237 instanceof Object)){
var ex__26886__auto__ = e29237;
var statearr_29238_29255 = state_29219;
(statearr_29238_29255[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29256 = state_29219;
state_29219 = G__29256;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
cljs$core$async$state_machine__26883__auto__ = function(state_29219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26883__auto____1.call(this,state_29219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26883__auto____0;
cljs$core$async$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26883__auto____1;
return cljs$core$async$state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto___29244,out))
})();
var state__26996__auto__ = (function (){var statearr_29239 = f__26995__auto__.call(null);
(statearr_29239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto___29244);

return statearr_29239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto___29244,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29257 = [];
var len__23933__auto___29260 = arguments.length;
var i__23934__auto___29261 = (0);
while(true){
if((i__23934__auto___29261 < len__23933__auto___29260)){
args29257.push((arguments[i__23934__auto___29261]));

var G__29262 = (i__23934__auto___29261 + (1));
i__23934__auto___29261 = G__29262;
continue;
} else {
}
break;
}

var G__29259 = args29257.length;
switch (G__29259) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29257.length)].join('')));

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
var c__26994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto__){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto__){
return (function (state_29429){
var state_val_29430 = (state_29429[(1)]);
if((state_val_29430 === (7))){
var inst_29425 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
var statearr_29431_29472 = state_29429__$1;
(statearr_29431_29472[(2)] = inst_29425);

(statearr_29431_29472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (20))){
var inst_29395 = (state_29429[(7)]);
var inst_29406 = (state_29429[(2)]);
var inst_29407 = cljs.core.next.call(null,inst_29395);
var inst_29381 = inst_29407;
var inst_29382 = null;
var inst_29383 = (0);
var inst_29384 = (0);
var state_29429__$1 = (function (){var statearr_29432 = state_29429;
(statearr_29432[(8)] = inst_29381);

(statearr_29432[(9)] = inst_29383);

(statearr_29432[(10)] = inst_29406);

(statearr_29432[(11)] = inst_29382);

(statearr_29432[(12)] = inst_29384);

return statearr_29432;
})();
var statearr_29433_29473 = state_29429__$1;
(statearr_29433_29473[(2)] = null);

(statearr_29433_29473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (1))){
var state_29429__$1 = state_29429;
var statearr_29434_29474 = state_29429__$1;
(statearr_29434_29474[(2)] = null);

(statearr_29434_29474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (4))){
var inst_29370 = (state_29429[(13)]);
var inst_29370__$1 = (state_29429[(2)]);
var inst_29371 = (inst_29370__$1 == null);
var state_29429__$1 = (function (){var statearr_29435 = state_29429;
(statearr_29435[(13)] = inst_29370__$1);

return statearr_29435;
})();
if(cljs.core.truth_(inst_29371)){
var statearr_29436_29475 = state_29429__$1;
(statearr_29436_29475[(1)] = (5));

} else {
var statearr_29437_29476 = state_29429__$1;
(statearr_29437_29476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (15))){
var state_29429__$1 = state_29429;
var statearr_29441_29477 = state_29429__$1;
(statearr_29441_29477[(2)] = null);

(statearr_29441_29477[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (21))){
var state_29429__$1 = state_29429;
var statearr_29442_29478 = state_29429__$1;
(statearr_29442_29478[(2)] = null);

(statearr_29442_29478[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (13))){
var inst_29381 = (state_29429[(8)]);
var inst_29383 = (state_29429[(9)]);
var inst_29382 = (state_29429[(11)]);
var inst_29384 = (state_29429[(12)]);
var inst_29391 = (state_29429[(2)]);
var inst_29392 = (inst_29384 + (1));
var tmp29438 = inst_29381;
var tmp29439 = inst_29383;
var tmp29440 = inst_29382;
var inst_29381__$1 = tmp29438;
var inst_29382__$1 = tmp29440;
var inst_29383__$1 = tmp29439;
var inst_29384__$1 = inst_29392;
var state_29429__$1 = (function (){var statearr_29443 = state_29429;
(statearr_29443[(8)] = inst_29381__$1);

(statearr_29443[(9)] = inst_29383__$1);

(statearr_29443[(14)] = inst_29391);

(statearr_29443[(11)] = inst_29382__$1);

(statearr_29443[(12)] = inst_29384__$1);

return statearr_29443;
})();
var statearr_29444_29479 = state_29429__$1;
(statearr_29444_29479[(2)] = null);

(statearr_29444_29479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (22))){
var state_29429__$1 = state_29429;
var statearr_29445_29480 = state_29429__$1;
(statearr_29445_29480[(2)] = null);

(statearr_29445_29480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (6))){
var inst_29370 = (state_29429[(13)]);
var inst_29379 = f.call(null,inst_29370);
var inst_29380 = cljs.core.seq.call(null,inst_29379);
var inst_29381 = inst_29380;
var inst_29382 = null;
var inst_29383 = (0);
var inst_29384 = (0);
var state_29429__$1 = (function (){var statearr_29446 = state_29429;
(statearr_29446[(8)] = inst_29381);

(statearr_29446[(9)] = inst_29383);

(statearr_29446[(11)] = inst_29382);

(statearr_29446[(12)] = inst_29384);

return statearr_29446;
})();
var statearr_29447_29481 = state_29429__$1;
(statearr_29447_29481[(2)] = null);

(statearr_29447_29481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (17))){
var inst_29395 = (state_29429[(7)]);
var inst_29399 = cljs.core.chunk_first.call(null,inst_29395);
var inst_29400 = cljs.core.chunk_rest.call(null,inst_29395);
var inst_29401 = cljs.core.count.call(null,inst_29399);
var inst_29381 = inst_29400;
var inst_29382 = inst_29399;
var inst_29383 = inst_29401;
var inst_29384 = (0);
var state_29429__$1 = (function (){var statearr_29448 = state_29429;
(statearr_29448[(8)] = inst_29381);

(statearr_29448[(9)] = inst_29383);

(statearr_29448[(11)] = inst_29382);

(statearr_29448[(12)] = inst_29384);

return statearr_29448;
})();
var statearr_29449_29482 = state_29429__$1;
(statearr_29449_29482[(2)] = null);

(statearr_29449_29482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (3))){
var inst_29427 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29429__$1,inst_29427);
} else {
if((state_val_29430 === (12))){
var inst_29415 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
var statearr_29450_29483 = state_29429__$1;
(statearr_29450_29483[(2)] = inst_29415);

(statearr_29450_29483[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (2))){
var state_29429__$1 = state_29429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29429__$1,(4),in$);
} else {
if((state_val_29430 === (23))){
var inst_29423 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
var statearr_29451_29484 = state_29429__$1;
(statearr_29451_29484[(2)] = inst_29423);

(statearr_29451_29484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (19))){
var inst_29410 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
var statearr_29452_29485 = state_29429__$1;
(statearr_29452_29485[(2)] = inst_29410);

(statearr_29452_29485[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (11))){
var inst_29395 = (state_29429[(7)]);
var inst_29381 = (state_29429[(8)]);
var inst_29395__$1 = cljs.core.seq.call(null,inst_29381);
var state_29429__$1 = (function (){var statearr_29453 = state_29429;
(statearr_29453[(7)] = inst_29395__$1);

return statearr_29453;
})();
if(inst_29395__$1){
var statearr_29454_29486 = state_29429__$1;
(statearr_29454_29486[(1)] = (14));

} else {
var statearr_29455_29487 = state_29429__$1;
(statearr_29455_29487[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (9))){
var inst_29417 = (state_29429[(2)]);
var inst_29418 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29429__$1 = (function (){var statearr_29456 = state_29429;
(statearr_29456[(15)] = inst_29417);

return statearr_29456;
})();
if(cljs.core.truth_(inst_29418)){
var statearr_29457_29488 = state_29429__$1;
(statearr_29457_29488[(1)] = (21));

} else {
var statearr_29458_29489 = state_29429__$1;
(statearr_29458_29489[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (5))){
var inst_29373 = cljs.core.async.close_BANG_.call(null,out);
var state_29429__$1 = state_29429;
var statearr_29459_29490 = state_29429__$1;
(statearr_29459_29490[(2)] = inst_29373);

(statearr_29459_29490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (14))){
var inst_29395 = (state_29429[(7)]);
var inst_29397 = cljs.core.chunked_seq_QMARK_.call(null,inst_29395);
var state_29429__$1 = state_29429;
if(inst_29397){
var statearr_29460_29491 = state_29429__$1;
(statearr_29460_29491[(1)] = (17));

} else {
var statearr_29461_29492 = state_29429__$1;
(statearr_29461_29492[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (16))){
var inst_29413 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
var statearr_29462_29493 = state_29429__$1;
(statearr_29462_29493[(2)] = inst_29413);

(statearr_29462_29493[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (10))){
var inst_29382 = (state_29429[(11)]);
var inst_29384 = (state_29429[(12)]);
var inst_29389 = cljs.core._nth.call(null,inst_29382,inst_29384);
var state_29429__$1 = state_29429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29429__$1,(13),out,inst_29389);
} else {
if((state_val_29430 === (18))){
var inst_29395 = (state_29429[(7)]);
var inst_29404 = cljs.core.first.call(null,inst_29395);
var state_29429__$1 = state_29429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29429__$1,(20),out,inst_29404);
} else {
if((state_val_29430 === (8))){
var inst_29383 = (state_29429[(9)]);
var inst_29384 = (state_29429[(12)]);
var inst_29386 = (inst_29384 < inst_29383);
var inst_29387 = inst_29386;
var state_29429__$1 = state_29429;
if(cljs.core.truth_(inst_29387)){
var statearr_29463_29494 = state_29429__$1;
(statearr_29463_29494[(1)] = (10));

} else {
var statearr_29464_29495 = state_29429__$1;
(statearr_29464_29495[(1)] = (11));

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
});})(c__26994__auto__))
;
return ((function (switch__26882__auto__,c__26994__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26883__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26883__auto____0 = (function (){
var statearr_29468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29468[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26883__auto__);

(statearr_29468[(1)] = (1));

return statearr_29468;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26883__auto____1 = (function (state_29429){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_29429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e29469){if((e29469 instanceof Object)){
var ex__26886__auto__ = e29469;
var statearr_29470_29496 = state_29429;
(statearr_29470_29496[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29497 = state_29429;
state_29429 = G__29497;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26883__auto__ = function(state_29429){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26883__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26883__auto____1.call(this,state_29429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26883__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26883__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto__))
})();
var state__26996__auto__ = (function (){var statearr_29471 = f__26995__auto__.call(null);
(statearr_29471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto__);

return statearr_29471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto__))
);

return c__26994__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29498 = [];
var len__23933__auto___29501 = arguments.length;
var i__23934__auto___29502 = (0);
while(true){
if((i__23934__auto___29502 < len__23933__auto___29501)){
args29498.push((arguments[i__23934__auto___29502]));

var G__29503 = (i__23934__auto___29502 + (1));
i__23934__auto___29502 = G__29503;
continue;
} else {
}
break;
}

var G__29500 = args29498.length;
switch (G__29500) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29498.length)].join('')));

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
var args29505 = [];
var len__23933__auto___29508 = arguments.length;
var i__23934__auto___29509 = (0);
while(true){
if((i__23934__auto___29509 < len__23933__auto___29508)){
args29505.push((arguments[i__23934__auto___29509]));

var G__29510 = (i__23934__auto___29509 + (1));
i__23934__auto___29509 = G__29510;
continue;
} else {
}
break;
}

var G__29507 = args29505.length;
switch (G__29507) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29505.length)].join('')));

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
var args29512 = [];
var len__23933__auto___29563 = arguments.length;
var i__23934__auto___29564 = (0);
while(true){
if((i__23934__auto___29564 < len__23933__auto___29563)){
args29512.push((arguments[i__23934__auto___29564]));

var G__29565 = (i__23934__auto___29564 + (1));
i__23934__auto___29564 = G__29565;
continue;
} else {
}
break;
}

var G__29514 = args29512.length;
switch (G__29514) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29512.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26994__auto___29567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto___29567,out){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto___29567,out){
return (function (state_29538){
var state_val_29539 = (state_29538[(1)]);
if((state_val_29539 === (7))){
var inst_29533 = (state_29538[(2)]);
var state_29538__$1 = state_29538;
var statearr_29540_29568 = state_29538__$1;
(statearr_29540_29568[(2)] = inst_29533);

(statearr_29540_29568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29539 === (1))){
var inst_29515 = null;
var state_29538__$1 = (function (){var statearr_29541 = state_29538;
(statearr_29541[(7)] = inst_29515);

return statearr_29541;
})();
var statearr_29542_29569 = state_29538__$1;
(statearr_29542_29569[(2)] = null);

(statearr_29542_29569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29539 === (4))){
var inst_29518 = (state_29538[(8)]);
var inst_29518__$1 = (state_29538[(2)]);
var inst_29519 = (inst_29518__$1 == null);
var inst_29520 = cljs.core.not.call(null,inst_29519);
var state_29538__$1 = (function (){var statearr_29543 = state_29538;
(statearr_29543[(8)] = inst_29518__$1);

return statearr_29543;
})();
if(inst_29520){
var statearr_29544_29570 = state_29538__$1;
(statearr_29544_29570[(1)] = (5));

} else {
var statearr_29545_29571 = state_29538__$1;
(statearr_29545_29571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29539 === (6))){
var state_29538__$1 = state_29538;
var statearr_29546_29572 = state_29538__$1;
(statearr_29546_29572[(2)] = null);

(statearr_29546_29572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29539 === (3))){
var inst_29535 = (state_29538[(2)]);
var inst_29536 = cljs.core.async.close_BANG_.call(null,out);
var state_29538__$1 = (function (){var statearr_29547 = state_29538;
(statearr_29547[(9)] = inst_29535);

return statearr_29547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29538__$1,inst_29536);
} else {
if((state_val_29539 === (2))){
var state_29538__$1 = state_29538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29538__$1,(4),ch);
} else {
if((state_val_29539 === (11))){
var inst_29518 = (state_29538[(8)]);
var inst_29527 = (state_29538[(2)]);
var inst_29515 = inst_29518;
var state_29538__$1 = (function (){var statearr_29548 = state_29538;
(statearr_29548[(10)] = inst_29527);

(statearr_29548[(7)] = inst_29515);

return statearr_29548;
})();
var statearr_29549_29573 = state_29538__$1;
(statearr_29549_29573[(2)] = null);

(statearr_29549_29573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29539 === (9))){
var inst_29518 = (state_29538[(8)]);
var state_29538__$1 = state_29538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29538__$1,(11),out,inst_29518);
} else {
if((state_val_29539 === (5))){
var inst_29518 = (state_29538[(8)]);
var inst_29515 = (state_29538[(7)]);
var inst_29522 = cljs.core._EQ_.call(null,inst_29518,inst_29515);
var state_29538__$1 = state_29538;
if(inst_29522){
var statearr_29551_29574 = state_29538__$1;
(statearr_29551_29574[(1)] = (8));

} else {
var statearr_29552_29575 = state_29538__$1;
(statearr_29552_29575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29539 === (10))){
var inst_29530 = (state_29538[(2)]);
var state_29538__$1 = state_29538;
var statearr_29553_29576 = state_29538__$1;
(statearr_29553_29576[(2)] = inst_29530);

(statearr_29553_29576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29539 === (8))){
var inst_29515 = (state_29538[(7)]);
var tmp29550 = inst_29515;
var inst_29515__$1 = tmp29550;
var state_29538__$1 = (function (){var statearr_29554 = state_29538;
(statearr_29554[(7)] = inst_29515__$1);

return statearr_29554;
})();
var statearr_29555_29577 = state_29538__$1;
(statearr_29555_29577[(2)] = null);

(statearr_29555_29577[(1)] = (2));


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
});})(c__26994__auto___29567,out))
;
return ((function (switch__26882__auto__,c__26994__auto___29567,out){
return (function() {
var cljs$core$async$state_machine__26883__auto__ = null;
var cljs$core$async$state_machine__26883__auto____0 = (function (){
var statearr_29559 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29559[(0)] = cljs$core$async$state_machine__26883__auto__);

(statearr_29559[(1)] = (1));

return statearr_29559;
});
var cljs$core$async$state_machine__26883__auto____1 = (function (state_29538){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_29538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e29560){if((e29560 instanceof Object)){
var ex__26886__auto__ = e29560;
var statearr_29561_29578 = state_29538;
(statearr_29561_29578[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29579 = state_29538;
state_29538 = G__29579;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
cljs$core$async$state_machine__26883__auto__ = function(state_29538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26883__auto____1.call(this,state_29538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26883__auto____0;
cljs$core$async$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26883__auto____1;
return cljs$core$async$state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto___29567,out))
})();
var state__26996__auto__ = (function (){var statearr_29562 = f__26995__auto__.call(null);
(statearr_29562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto___29567);

return statearr_29562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto___29567,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29580 = [];
var len__23933__auto___29650 = arguments.length;
var i__23934__auto___29651 = (0);
while(true){
if((i__23934__auto___29651 < len__23933__auto___29650)){
args29580.push((arguments[i__23934__auto___29651]));

var G__29652 = (i__23934__auto___29651 + (1));
i__23934__auto___29651 = G__29652;
continue;
} else {
}
break;
}

var G__29582 = args29580.length;
switch (G__29582) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29580.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26994__auto___29654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto___29654,out){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto___29654,out){
return (function (state_29620){
var state_val_29621 = (state_29620[(1)]);
if((state_val_29621 === (7))){
var inst_29616 = (state_29620[(2)]);
var state_29620__$1 = state_29620;
var statearr_29622_29655 = state_29620__$1;
(statearr_29622_29655[(2)] = inst_29616);

(statearr_29622_29655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29621 === (1))){
var inst_29583 = (new Array(n));
var inst_29584 = inst_29583;
var inst_29585 = (0);
var state_29620__$1 = (function (){var statearr_29623 = state_29620;
(statearr_29623[(7)] = inst_29585);

(statearr_29623[(8)] = inst_29584);

return statearr_29623;
})();
var statearr_29624_29656 = state_29620__$1;
(statearr_29624_29656[(2)] = null);

(statearr_29624_29656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29621 === (4))){
var inst_29588 = (state_29620[(9)]);
var inst_29588__$1 = (state_29620[(2)]);
var inst_29589 = (inst_29588__$1 == null);
var inst_29590 = cljs.core.not.call(null,inst_29589);
var state_29620__$1 = (function (){var statearr_29625 = state_29620;
(statearr_29625[(9)] = inst_29588__$1);

return statearr_29625;
})();
if(inst_29590){
var statearr_29626_29657 = state_29620__$1;
(statearr_29626_29657[(1)] = (5));

} else {
var statearr_29627_29658 = state_29620__$1;
(statearr_29627_29658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29621 === (15))){
var inst_29610 = (state_29620[(2)]);
var state_29620__$1 = state_29620;
var statearr_29628_29659 = state_29620__$1;
(statearr_29628_29659[(2)] = inst_29610);

(statearr_29628_29659[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29621 === (13))){
var state_29620__$1 = state_29620;
var statearr_29629_29660 = state_29620__$1;
(statearr_29629_29660[(2)] = null);

(statearr_29629_29660[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29621 === (6))){
var inst_29585 = (state_29620[(7)]);
var inst_29606 = (inst_29585 > (0));
var state_29620__$1 = state_29620;
if(cljs.core.truth_(inst_29606)){
var statearr_29630_29661 = state_29620__$1;
(statearr_29630_29661[(1)] = (12));

} else {
var statearr_29631_29662 = state_29620__$1;
(statearr_29631_29662[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29621 === (3))){
var inst_29618 = (state_29620[(2)]);
var state_29620__$1 = state_29620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29620__$1,inst_29618);
} else {
if((state_val_29621 === (12))){
var inst_29584 = (state_29620[(8)]);
var inst_29608 = cljs.core.vec.call(null,inst_29584);
var state_29620__$1 = state_29620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29620__$1,(15),out,inst_29608);
} else {
if((state_val_29621 === (2))){
var state_29620__$1 = state_29620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29620__$1,(4),ch);
} else {
if((state_val_29621 === (11))){
var inst_29600 = (state_29620[(2)]);
var inst_29601 = (new Array(n));
var inst_29584 = inst_29601;
var inst_29585 = (0);
var state_29620__$1 = (function (){var statearr_29632 = state_29620;
(statearr_29632[(7)] = inst_29585);

(statearr_29632[(10)] = inst_29600);

(statearr_29632[(8)] = inst_29584);

return statearr_29632;
})();
var statearr_29633_29663 = state_29620__$1;
(statearr_29633_29663[(2)] = null);

(statearr_29633_29663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29621 === (9))){
var inst_29584 = (state_29620[(8)]);
var inst_29598 = cljs.core.vec.call(null,inst_29584);
var state_29620__$1 = state_29620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29620__$1,(11),out,inst_29598);
} else {
if((state_val_29621 === (5))){
var inst_29585 = (state_29620[(7)]);
var inst_29593 = (state_29620[(11)]);
var inst_29588 = (state_29620[(9)]);
var inst_29584 = (state_29620[(8)]);
var inst_29592 = (inst_29584[inst_29585] = inst_29588);
var inst_29593__$1 = (inst_29585 + (1));
var inst_29594 = (inst_29593__$1 < n);
var state_29620__$1 = (function (){var statearr_29634 = state_29620;
(statearr_29634[(12)] = inst_29592);

(statearr_29634[(11)] = inst_29593__$1);

return statearr_29634;
})();
if(cljs.core.truth_(inst_29594)){
var statearr_29635_29664 = state_29620__$1;
(statearr_29635_29664[(1)] = (8));

} else {
var statearr_29636_29665 = state_29620__$1;
(statearr_29636_29665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29621 === (14))){
var inst_29613 = (state_29620[(2)]);
var inst_29614 = cljs.core.async.close_BANG_.call(null,out);
var state_29620__$1 = (function (){var statearr_29638 = state_29620;
(statearr_29638[(13)] = inst_29613);

return statearr_29638;
})();
var statearr_29639_29666 = state_29620__$1;
(statearr_29639_29666[(2)] = inst_29614);

(statearr_29639_29666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29621 === (10))){
var inst_29604 = (state_29620[(2)]);
var state_29620__$1 = state_29620;
var statearr_29640_29667 = state_29620__$1;
(statearr_29640_29667[(2)] = inst_29604);

(statearr_29640_29667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29621 === (8))){
var inst_29593 = (state_29620[(11)]);
var inst_29584 = (state_29620[(8)]);
var tmp29637 = inst_29584;
var inst_29584__$1 = tmp29637;
var inst_29585 = inst_29593;
var state_29620__$1 = (function (){var statearr_29641 = state_29620;
(statearr_29641[(7)] = inst_29585);

(statearr_29641[(8)] = inst_29584__$1);

return statearr_29641;
})();
var statearr_29642_29668 = state_29620__$1;
(statearr_29642_29668[(2)] = null);

(statearr_29642_29668[(1)] = (2));


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
});})(c__26994__auto___29654,out))
;
return ((function (switch__26882__auto__,c__26994__auto___29654,out){
return (function() {
var cljs$core$async$state_machine__26883__auto__ = null;
var cljs$core$async$state_machine__26883__auto____0 = (function (){
var statearr_29646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29646[(0)] = cljs$core$async$state_machine__26883__auto__);

(statearr_29646[(1)] = (1));

return statearr_29646;
});
var cljs$core$async$state_machine__26883__auto____1 = (function (state_29620){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_29620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e29647){if((e29647 instanceof Object)){
var ex__26886__auto__ = e29647;
var statearr_29648_29669 = state_29620;
(statearr_29648_29669[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29670 = state_29620;
state_29620 = G__29670;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
cljs$core$async$state_machine__26883__auto__ = function(state_29620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26883__auto____1.call(this,state_29620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26883__auto____0;
cljs$core$async$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26883__auto____1;
return cljs$core$async$state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto___29654,out))
})();
var state__26996__auto__ = (function (){var statearr_29649 = f__26995__auto__.call(null);
(statearr_29649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto___29654);

return statearr_29649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto___29654,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29671 = [];
var len__23933__auto___29745 = arguments.length;
var i__23934__auto___29746 = (0);
while(true){
if((i__23934__auto___29746 < len__23933__auto___29745)){
args29671.push((arguments[i__23934__auto___29746]));

var G__29747 = (i__23934__auto___29746 + (1));
i__23934__auto___29746 = G__29747;
continue;
} else {
}
break;
}

var G__29673 = args29671.length;
switch (G__29673) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29671.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26994__auto___29749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto___29749,out){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto___29749,out){
return (function (state_29715){
var state_val_29716 = (state_29715[(1)]);
if((state_val_29716 === (7))){
var inst_29711 = (state_29715[(2)]);
var state_29715__$1 = state_29715;
var statearr_29717_29750 = state_29715__$1;
(statearr_29717_29750[(2)] = inst_29711);

(statearr_29717_29750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (1))){
var inst_29674 = [];
var inst_29675 = inst_29674;
var inst_29676 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29715__$1 = (function (){var statearr_29718 = state_29715;
(statearr_29718[(7)] = inst_29676);

(statearr_29718[(8)] = inst_29675);

return statearr_29718;
})();
var statearr_29719_29751 = state_29715__$1;
(statearr_29719_29751[(2)] = null);

(statearr_29719_29751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (4))){
var inst_29679 = (state_29715[(9)]);
var inst_29679__$1 = (state_29715[(2)]);
var inst_29680 = (inst_29679__$1 == null);
var inst_29681 = cljs.core.not.call(null,inst_29680);
var state_29715__$1 = (function (){var statearr_29720 = state_29715;
(statearr_29720[(9)] = inst_29679__$1);

return statearr_29720;
})();
if(inst_29681){
var statearr_29721_29752 = state_29715__$1;
(statearr_29721_29752[(1)] = (5));

} else {
var statearr_29722_29753 = state_29715__$1;
(statearr_29722_29753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (15))){
var inst_29705 = (state_29715[(2)]);
var state_29715__$1 = state_29715;
var statearr_29723_29754 = state_29715__$1;
(statearr_29723_29754[(2)] = inst_29705);

(statearr_29723_29754[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (13))){
var state_29715__$1 = state_29715;
var statearr_29724_29755 = state_29715__$1;
(statearr_29724_29755[(2)] = null);

(statearr_29724_29755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (6))){
var inst_29675 = (state_29715[(8)]);
var inst_29700 = inst_29675.length;
var inst_29701 = (inst_29700 > (0));
var state_29715__$1 = state_29715;
if(cljs.core.truth_(inst_29701)){
var statearr_29725_29756 = state_29715__$1;
(statearr_29725_29756[(1)] = (12));

} else {
var statearr_29726_29757 = state_29715__$1;
(statearr_29726_29757[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (3))){
var inst_29713 = (state_29715[(2)]);
var state_29715__$1 = state_29715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29715__$1,inst_29713);
} else {
if((state_val_29716 === (12))){
var inst_29675 = (state_29715[(8)]);
var inst_29703 = cljs.core.vec.call(null,inst_29675);
var state_29715__$1 = state_29715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29715__$1,(15),out,inst_29703);
} else {
if((state_val_29716 === (2))){
var state_29715__$1 = state_29715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29715__$1,(4),ch);
} else {
if((state_val_29716 === (11))){
var inst_29679 = (state_29715[(9)]);
var inst_29683 = (state_29715[(10)]);
var inst_29693 = (state_29715[(2)]);
var inst_29694 = [];
var inst_29695 = inst_29694.push(inst_29679);
var inst_29675 = inst_29694;
var inst_29676 = inst_29683;
var state_29715__$1 = (function (){var statearr_29727 = state_29715;
(statearr_29727[(7)] = inst_29676);

(statearr_29727[(8)] = inst_29675);

(statearr_29727[(11)] = inst_29693);

(statearr_29727[(12)] = inst_29695);

return statearr_29727;
})();
var statearr_29728_29758 = state_29715__$1;
(statearr_29728_29758[(2)] = null);

(statearr_29728_29758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (9))){
var inst_29675 = (state_29715[(8)]);
var inst_29691 = cljs.core.vec.call(null,inst_29675);
var state_29715__$1 = state_29715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29715__$1,(11),out,inst_29691);
} else {
if((state_val_29716 === (5))){
var inst_29676 = (state_29715[(7)]);
var inst_29679 = (state_29715[(9)]);
var inst_29683 = (state_29715[(10)]);
var inst_29683__$1 = f.call(null,inst_29679);
var inst_29684 = cljs.core._EQ_.call(null,inst_29683__$1,inst_29676);
var inst_29685 = cljs.core.keyword_identical_QMARK_.call(null,inst_29676,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29686 = (inst_29684) || (inst_29685);
var state_29715__$1 = (function (){var statearr_29729 = state_29715;
(statearr_29729[(10)] = inst_29683__$1);

return statearr_29729;
})();
if(cljs.core.truth_(inst_29686)){
var statearr_29730_29759 = state_29715__$1;
(statearr_29730_29759[(1)] = (8));

} else {
var statearr_29731_29760 = state_29715__$1;
(statearr_29731_29760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (14))){
var inst_29708 = (state_29715[(2)]);
var inst_29709 = cljs.core.async.close_BANG_.call(null,out);
var state_29715__$1 = (function (){var statearr_29733 = state_29715;
(statearr_29733[(13)] = inst_29708);

return statearr_29733;
})();
var statearr_29734_29761 = state_29715__$1;
(statearr_29734_29761[(2)] = inst_29709);

(statearr_29734_29761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (10))){
var inst_29698 = (state_29715[(2)]);
var state_29715__$1 = state_29715;
var statearr_29735_29762 = state_29715__$1;
(statearr_29735_29762[(2)] = inst_29698);

(statearr_29735_29762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29716 === (8))){
var inst_29679 = (state_29715[(9)]);
var inst_29675 = (state_29715[(8)]);
var inst_29683 = (state_29715[(10)]);
var inst_29688 = inst_29675.push(inst_29679);
var tmp29732 = inst_29675;
var inst_29675__$1 = tmp29732;
var inst_29676 = inst_29683;
var state_29715__$1 = (function (){var statearr_29736 = state_29715;
(statearr_29736[(7)] = inst_29676);

(statearr_29736[(8)] = inst_29675__$1);

(statearr_29736[(14)] = inst_29688);

return statearr_29736;
})();
var statearr_29737_29763 = state_29715__$1;
(statearr_29737_29763[(2)] = null);

(statearr_29737_29763[(1)] = (2));


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
});})(c__26994__auto___29749,out))
;
return ((function (switch__26882__auto__,c__26994__auto___29749,out){
return (function() {
var cljs$core$async$state_machine__26883__auto__ = null;
var cljs$core$async$state_machine__26883__auto____0 = (function (){
var statearr_29741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29741[(0)] = cljs$core$async$state_machine__26883__auto__);

(statearr_29741[(1)] = (1));

return statearr_29741;
});
var cljs$core$async$state_machine__26883__auto____1 = (function (state_29715){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_29715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e29742){if((e29742 instanceof Object)){
var ex__26886__auto__ = e29742;
var statearr_29743_29764 = state_29715;
(statearr_29743_29764[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29765 = state_29715;
state_29715 = G__29765;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
cljs$core$async$state_machine__26883__auto__ = function(state_29715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26883__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26883__auto____1.call(this,state_29715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26883__auto____0;
cljs$core$async$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26883__auto____1;
return cljs$core$async$state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto___29749,out))
})();
var state__26996__auto__ = (function (){var statearr_29744 = f__26995__auto__.call(null);
(statearr_29744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto___29749);

return statearr_29744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto___29749,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map