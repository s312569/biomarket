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
var args26739 = [];
var len__23633__auto___26745 = arguments.length;
var i__23634__auto___26746 = (0);
while(true){
if((i__23634__auto___26746 < len__23633__auto___26745)){
args26739.push((arguments[i__23634__auto___26746]));

var G__26747 = (i__23634__auto___26746 + (1));
i__23634__auto___26746 = G__26747;
continue;
} else {
}
break;
}

var G__26741 = args26739.length;
switch (G__26741) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26739.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async26742 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26742 = (function (f,blockable,meta26743){
this.f = f;
this.blockable = blockable;
this.meta26743 = meta26743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26744,meta26743__$1){
var self__ = this;
var _26744__$1 = this;
return (new cljs.core.async.t_cljs$core$async26742(self__.f,self__.blockable,meta26743__$1));
});

cljs.core.async.t_cljs$core$async26742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26744){
var self__ = this;
var _26744__$1 = this;
return self__.meta26743;
});

cljs.core.async.t_cljs$core$async26742.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26742.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26742.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26742.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26743","meta26743",-1236250536,null)], null);
});

cljs.core.async.t_cljs$core$async26742.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26742";

cljs.core.async.t_cljs$core$async26742.cljs$lang$ctorPrWriter = (function (this__23169__auto__,writer__23170__auto__,opt__23171__auto__){
return cljs.core._write.call(null,writer__23170__auto__,"cljs.core.async/t_cljs$core$async26742");
});

cljs.core.async.__GT_t_cljs$core$async26742 = (function cljs$core$async$__GT_t_cljs$core$async26742(f__$1,blockable__$1,meta26743){
return (new cljs.core.async.t_cljs$core$async26742(f__$1,blockable__$1,meta26743));
});

}

return (new cljs.core.async.t_cljs$core$async26742(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args26751 = [];
var len__23633__auto___26754 = arguments.length;
var i__23634__auto___26755 = (0);
while(true){
if((i__23634__auto___26755 < len__23633__auto___26754)){
args26751.push((arguments[i__23634__auto___26755]));

var G__26756 = (i__23634__auto___26755 + (1));
i__23634__auto___26755 = G__26756;
continue;
} else {
}
break;
}

var G__26753 = args26751.length;
switch (G__26753) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26751.length)].join('')));

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
var args26758 = [];
var len__23633__auto___26761 = arguments.length;
var i__23634__auto___26762 = (0);
while(true){
if((i__23634__auto___26762 < len__23633__auto___26761)){
args26758.push((arguments[i__23634__auto___26762]));

var G__26763 = (i__23634__auto___26762 + (1));
i__23634__auto___26762 = G__26763;
continue;
} else {
}
break;
}

var G__26760 = args26758.length;
switch (G__26760) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26758.length)].join('')));

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
var args26765 = [];
var len__23633__auto___26768 = arguments.length;
var i__23634__auto___26769 = (0);
while(true){
if((i__23634__auto___26769 < len__23633__auto___26768)){
args26765.push((arguments[i__23634__auto___26769]));

var G__26770 = (i__23634__auto___26769 + (1));
i__23634__auto___26769 = G__26770;
continue;
} else {
}
break;
}

var G__26767 = args26765.length;
switch (G__26767) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26765.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26772 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26772);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26772,ret){
return (function (){
return fn1.call(null,val_26772);
});})(val_26772,ret))
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
var args26773 = [];
var len__23633__auto___26776 = arguments.length;
var i__23634__auto___26777 = (0);
while(true){
if((i__23634__auto___26777 < len__23633__auto___26776)){
args26773.push((arguments[i__23634__auto___26777]));

var G__26778 = (i__23634__auto___26777 + (1));
i__23634__auto___26777 = G__26778;
continue;
} else {
}
break;
}

var G__26775 = args26773.length;
switch (G__26775) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26773.length)].join('')));

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
var n__23478__auto___26780 = n;
var x_26781 = (0);
while(true){
if((x_26781 < n__23478__auto___26780)){
(a[x_26781] = (0));

var G__26782 = (x_26781 + (1));
x_26781 = G__26782;
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

var G__26783 = (i + (1));
i = G__26783;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26787 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26787 = (function (alt_flag,flag,meta26788){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26788 = meta26788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26789,meta26788__$1){
var self__ = this;
var _26789__$1 = this;
return (new cljs.core.async.t_cljs$core$async26787(self__.alt_flag,self__.flag,meta26788__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26789){
var self__ = this;
var _26789__$1 = this;
return self__.meta26788;
});})(flag))
;

cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26787.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26788","meta26788",-1596918922,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26787";

cljs.core.async.t_cljs$core$async26787.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__23169__auto__,writer__23170__auto__,opt__23171__auto__){
return cljs.core._write.call(null,writer__23170__auto__,"cljs.core.async/t_cljs$core$async26787");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26787 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26787(alt_flag__$1,flag__$1,meta26788){
return (new cljs.core.async.t_cljs$core$async26787(alt_flag__$1,flag__$1,meta26788));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26787(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26793 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26793 = (function (alt_handler,flag,cb,meta26794){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26794 = meta26794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26795,meta26794__$1){
var self__ = this;
var _26795__$1 = this;
return (new cljs.core.async.t_cljs$core$async26793(self__.alt_handler,self__.flag,self__.cb,meta26794__$1));
});

cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26795){
var self__ = this;
var _26795__$1 = this;
return self__.meta26794;
});

cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26794","meta26794",-1050717068,null)], null);
});

cljs.core.async.t_cljs$core$async26793.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26793";

cljs.core.async.t_cljs$core$async26793.cljs$lang$ctorPrWriter = (function (this__23169__auto__,writer__23170__auto__,opt__23171__auto__){
return cljs.core._write.call(null,writer__23170__auto__,"cljs.core.async/t_cljs$core$async26793");
});

cljs.core.async.__GT_t_cljs$core$async26793 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26793(alt_handler__$1,flag__$1,cb__$1,meta26794){
return (new cljs.core.async.t_cljs$core$async26793(alt_handler__$1,flag__$1,cb__$1,meta26794));
});

}

return (new cljs.core.async.t_cljs$core$async26793(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26796_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26796_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26797_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26797_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__22563__auto__ = wport;
if(cljs.core.truth_(or__22563__auto__)){
return or__22563__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26798 = (i + (1));
i = G__26798;
continue;
}
} else {
return null;
}
break;
}
})();
var or__22563__auto__ = ret;
if(cljs.core.truth_(or__22563__auto__)){
return or__22563__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__22551__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__22551__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__22551__auto__;
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
var args__23640__auto__ = [];
var len__23633__auto___26804 = arguments.length;
var i__23634__auto___26805 = (0);
while(true){
if((i__23634__auto___26805 < len__23633__auto___26804)){
args__23640__auto__.push((arguments[i__23634__auto___26805]));

var G__26806 = (i__23634__auto___26805 + (1));
i__23634__auto___26805 = G__26806;
continue;
} else {
}
break;
}

var argseq__23641__auto__ = ((((1) < args__23640__auto__.length))?(new cljs.core.IndexedSeq(args__23640__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23641__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26801){
var map__26802 = p__26801;
var map__26802__$1 = ((((!((map__26802 == null)))?((((map__26802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26802):map__26802);
var opts = map__26802__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26799){
var G__26800 = cljs.core.first.call(null,seq26799);
var seq26799__$1 = cljs.core.next.call(null,seq26799);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26800,seq26799__$1);
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
var args26807 = [];
var len__23633__auto___26857 = arguments.length;
var i__23634__auto___26858 = (0);
while(true){
if((i__23634__auto___26858 < len__23633__auto___26857)){
args26807.push((arguments[i__23634__auto___26858]));

var G__26859 = (i__23634__auto___26858 + (1));
i__23634__auto___26858 = G__26859;
continue;
} else {
}
break;
}

var G__26809 = args26807.length;
switch (G__26809) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26807.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26694__auto___26861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto___26861){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto___26861){
return (function (state_26833){
var state_val_26834 = (state_26833[(1)]);
if((state_val_26834 === (7))){
var inst_26829 = (state_26833[(2)]);
var state_26833__$1 = state_26833;
var statearr_26835_26862 = state_26833__$1;
(statearr_26835_26862[(2)] = inst_26829);

(statearr_26835_26862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (1))){
var state_26833__$1 = state_26833;
var statearr_26836_26863 = state_26833__$1;
(statearr_26836_26863[(2)] = null);

(statearr_26836_26863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (4))){
var inst_26812 = (state_26833[(7)]);
var inst_26812__$1 = (state_26833[(2)]);
var inst_26813 = (inst_26812__$1 == null);
var state_26833__$1 = (function (){var statearr_26837 = state_26833;
(statearr_26837[(7)] = inst_26812__$1);

return statearr_26837;
})();
if(cljs.core.truth_(inst_26813)){
var statearr_26838_26864 = state_26833__$1;
(statearr_26838_26864[(1)] = (5));

} else {
var statearr_26839_26865 = state_26833__$1;
(statearr_26839_26865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (13))){
var state_26833__$1 = state_26833;
var statearr_26840_26866 = state_26833__$1;
(statearr_26840_26866[(2)] = null);

(statearr_26840_26866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (6))){
var inst_26812 = (state_26833[(7)]);
var state_26833__$1 = state_26833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26833__$1,(11),to,inst_26812);
} else {
if((state_val_26834 === (3))){
var inst_26831 = (state_26833[(2)]);
var state_26833__$1 = state_26833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26833__$1,inst_26831);
} else {
if((state_val_26834 === (12))){
var state_26833__$1 = state_26833;
var statearr_26841_26867 = state_26833__$1;
(statearr_26841_26867[(2)] = null);

(statearr_26841_26867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (2))){
var state_26833__$1 = state_26833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26833__$1,(4),from);
} else {
if((state_val_26834 === (11))){
var inst_26822 = (state_26833[(2)]);
var state_26833__$1 = state_26833;
if(cljs.core.truth_(inst_26822)){
var statearr_26842_26868 = state_26833__$1;
(statearr_26842_26868[(1)] = (12));

} else {
var statearr_26843_26869 = state_26833__$1;
(statearr_26843_26869[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (9))){
var state_26833__$1 = state_26833;
var statearr_26844_26870 = state_26833__$1;
(statearr_26844_26870[(2)] = null);

(statearr_26844_26870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (5))){
var state_26833__$1 = state_26833;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26845_26871 = state_26833__$1;
(statearr_26845_26871[(1)] = (8));

} else {
var statearr_26846_26872 = state_26833__$1;
(statearr_26846_26872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (14))){
var inst_26827 = (state_26833[(2)]);
var state_26833__$1 = state_26833;
var statearr_26847_26873 = state_26833__$1;
(statearr_26847_26873[(2)] = inst_26827);

(statearr_26847_26873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (10))){
var inst_26819 = (state_26833[(2)]);
var state_26833__$1 = state_26833;
var statearr_26848_26874 = state_26833__$1;
(statearr_26848_26874[(2)] = inst_26819);

(statearr_26848_26874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26834 === (8))){
var inst_26816 = cljs.core.async.close_BANG_.call(null,to);
var state_26833__$1 = state_26833;
var statearr_26849_26875 = state_26833__$1;
(statearr_26849_26875[(2)] = inst_26816);

(statearr_26849_26875[(1)] = (10));


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
});})(c__26694__auto___26861))
;
return ((function (switch__26582__auto__,c__26694__auto___26861){
return (function() {
var cljs$core$async$state_machine__26583__auto__ = null;
var cljs$core$async$state_machine__26583__auto____0 = (function (){
var statearr_26853 = [null,null,null,null,null,null,null,null];
(statearr_26853[(0)] = cljs$core$async$state_machine__26583__auto__);

(statearr_26853[(1)] = (1));

return statearr_26853;
});
var cljs$core$async$state_machine__26583__auto____1 = (function (state_26833){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_26833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e26854){if((e26854 instanceof Object)){
var ex__26586__auto__ = e26854;
var statearr_26855_26876 = state_26833;
(statearr_26855_26876[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26877 = state_26833;
state_26833 = G__26877;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
cljs$core$async$state_machine__26583__auto__ = function(state_26833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26583__auto____1.call(this,state_26833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26583__auto____0;
cljs$core$async$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26583__auto____1;
return cljs$core$async$state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto___26861))
})();
var state__26696__auto__ = (function (){var statearr_26856 = f__26695__auto__.call(null);
(statearr_26856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto___26861);

return statearr_26856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto___26861))
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
return (function (p__27061){
var vec__27062 = p__27061;
var v = cljs.core.nth.call(null,vec__27062,(0),null);
var p = cljs.core.nth.call(null,vec__27062,(1),null);
var job = vec__27062;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26694__auto___27244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto___27244,res,vec__27062,v,p,job,jobs,results){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto___27244,res,vec__27062,v,p,job,jobs,results){
return (function (state_27067){
var state_val_27068 = (state_27067[(1)]);
if((state_val_27068 === (1))){
var state_27067__$1 = state_27067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27067__$1,(2),res,v);
} else {
if((state_val_27068 === (2))){
var inst_27064 = (state_27067[(2)]);
var inst_27065 = cljs.core.async.close_BANG_.call(null,res);
var state_27067__$1 = (function (){var statearr_27069 = state_27067;
(statearr_27069[(7)] = inst_27064);

return statearr_27069;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27067__$1,inst_27065);
} else {
return null;
}
}
});})(c__26694__auto___27244,res,vec__27062,v,p,job,jobs,results))
;
return ((function (switch__26582__auto__,c__26694__auto___27244,res,vec__27062,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____0 = (function (){
var statearr_27073 = [null,null,null,null,null,null,null,null];
(statearr_27073[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__);

(statearr_27073[(1)] = (1));

return statearr_27073;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____1 = (function (state_27067){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_27067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e27074){if((e27074 instanceof Object)){
var ex__26586__auto__ = e27074;
var statearr_27075_27245 = state_27067;
(statearr_27075_27245[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27246 = state_27067;
state_27067 = G__27246;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__ = function(state_27067){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____1.call(this,state_27067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto___27244,res,vec__27062,v,p,job,jobs,results))
})();
var state__26696__auto__ = (function (){var statearr_27076 = f__26695__auto__.call(null);
(statearr_27076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto___27244);

return statearr_27076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto___27244,res,vec__27062,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27077){
var vec__27078 = p__27077;
var v = cljs.core.nth.call(null,vec__27078,(0),null);
var p = cljs.core.nth.call(null,vec__27078,(1),null);
var job = vec__27078;
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
var n__23478__auto___27247 = n;
var __27248 = (0);
while(true){
if((__27248 < n__23478__auto___27247)){
var G__27079_27249 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27079_27249) {
case "compute":
var c__26694__auto___27251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27248,c__26694__auto___27251,G__27079_27249,n__23478__auto___27247,jobs,results,process,async){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (__27248,c__26694__auto___27251,G__27079_27249,n__23478__auto___27247,jobs,results,process,async){
return (function (state_27092){
var state_val_27093 = (state_27092[(1)]);
if((state_val_27093 === (1))){
var state_27092__$1 = state_27092;
var statearr_27094_27252 = state_27092__$1;
(statearr_27094_27252[(2)] = null);

(statearr_27094_27252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (2))){
var state_27092__$1 = state_27092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27092__$1,(4),jobs);
} else {
if((state_val_27093 === (3))){
var inst_27090 = (state_27092[(2)]);
var state_27092__$1 = state_27092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27092__$1,inst_27090);
} else {
if((state_val_27093 === (4))){
var inst_27082 = (state_27092[(2)]);
var inst_27083 = process.call(null,inst_27082);
var state_27092__$1 = state_27092;
if(cljs.core.truth_(inst_27083)){
var statearr_27095_27253 = state_27092__$1;
(statearr_27095_27253[(1)] = (5));

} else {
var statearr_27096_27254 = state_27092__$1;
(statearr_27096_27254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (5))){
var state_27092__$1 = state_27092;
var statearr_27097_27255 = state_27092__$1;
(statearr_27097_27255[(2)] = null);

(statearr_27097_27255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (6))){
var state_27092__$1 = state_27092;
var statearr_27098_27256 = state_27092__$1;
(statearr_27098_27256[(2)] = null);

(statearr_27098_27256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (7))){
var inst_27088 = (state_27092[(2)]);
var state_27092__$1 = state_27092;
var statearr_27099_27257 = state_27092__$1;
(statearr_27099_27257[(2)] = inst_27088);

(statearr_27099_27257[(1)] = (3));


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
});})(__27248,c__26694__auto___27251,G__27079_27249,n__23478__auto___27247,jobs,results,process,async))
;
return ((function (__27248,switch__26582__auto__,c__26694__auto___27251,G__27079_27249,n__23478__auto___27247,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____0 = (function (){
var statearr_27103 = [null,null,null,null,null,null,null];
(statearr_27103[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__);

(statearr_27103[(1)] = (1));

return statearr_27103;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____1 = (function (state_27092){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_27092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e27104){if((e27104 instanceof Object)){
var ex__26586__auto__ = e27104;
var statearr_27105_27258 = state_27092;
(statearr_27105_27258[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27259 = state_27092;
state_27092 = G__27259;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__ = function(state_27092){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____1.call(this,state_27092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__;
})()
;})(__27248,switch__26582__auto__,c__26694__auto___27251,G__27079_27249,n__23478__auto___27247,jobs,results,process,async))
})();
var state__26696__auto__ = (function (){var statearr_27106 = f__26695__auto__.call(null);
(statearr_27106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto___27251);

return statearr_27106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(__27248,c__26694__auto___27251,G__27079_27249,n__23478__auto___27247,jobs,results,process,async))
);


break;
case "async":
var c__26694__auto___27260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27248,c__26694__auto___27260,G__27079_27249,n__23478__auto___27247,jobs,results,process,async){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (__27248,c__26694__auto___27260,G__27079_27249,n__23478__auto___27247,jobs,results,process,async){
return (function (state_27119){
var state_val_27120 = (state_27119[(1)]);
if((state_val_27120 === (1))){
var state_27119__$1 = state_27119;
var statearr_27121_27261 = state_27119__$1;
(statearr_27121_27261[(2)] = null);

(statearr_27121_27261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (2))){
var state_27119__$1 = state_27119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27119__$1,(4),jobs);
} else {
if((state_val_27120 === (3))){
var inst_27117 = (state_27119[(2)]);
var state_27119__$1 = state_27119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27119__$1,inst_27117);
} else {
if((state_val_27120 === (4))){
var inst_27109 = (state_27119[(2)]);
var inst_27110 = async.call(null,inst_27109);
var state_27119__$1 = state_27119;
if(cljs.core.truth_(inst_27110)){
var statearr_27122_27262 = state_27119__$1;
(statearr_27122_27262[(1)] = (5));

} else {
var statearr_27123_27263 = state_27119__$1;
(statearr_27123_27263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (5))){
var state_27119__$1 = state_27119;
var statearr_27124_27264 = state_27119__$1;
(statearr_27124_27264[(2)] = null);

(statearr_27124_27264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (6))){
var state_27119__$1 = state_27119;
var statearr_27125_27265 = state_27119__$1;
(statearr_27125_27265[(2)] = null);

(statearr_27125_27265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (7))){
var inst_27115 = (state_27119[(2)]);
var state_27119__$1 = state_27119;
var statearr_27126_27266 = state_27119__$1;
(statearr_27126_27266[(2)] = inst_27115);

(statearr_27126_27266[(1)] = (3));


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
});})(__27248,c__26694__auto___27260,G__27079_27249,n__23478__auto___27247,jobs,results,process,async))
;
return ((function (__27248,switch__26582__auto__,c__26694__auto___27260,G__27079_27249,n__23478__auto___27247,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____0 = (function (){
var statearr_27130 = [null,null,null,null,null,null,null];
(statearr_27130[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__);

(statearr_27130[(1)] = (1));

return statearr_27130;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____1 = (function (state_27119){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_27119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e27131){if((e27131 instanceof Object)){
var ex__26586__auto__ = e27131;
var statearr_27132_27267 = state_27119;
(statearr_27132_27267[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27268 = state_27119;
state_27119 = G__27268;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__ = function(state_27119){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____1.call(this,state_27119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__;
})()
;})(__27248,switch__26582__auto__,c__26694__auto___27260,G__27079_27249,n__23478__auto___27247,jobs,results,process,async))
})();
var state__26696__auto__ = (function (){var statearr_27133 = f__26695__auto__.call(null);
(statearr_27133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto___27260);

return statearr_27133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(__27248,c__26694__auto___27260,G__27079_27249,n__23478__auto___27247,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27269 = (__27248 + (1));
__27248 = G__27269;
continue;
} else {
}
break;
}

var c__26694__auto___27270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto___27270,jobs,results,process,async){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto___27270,jobs,results,process,async){
return (function (state_27155){
var state_val_27156 = (state_27155[(1)]);
if((state_val_27156 === (1))){
var state_27155__$1 = state_27155;
var statearr_27157_27271 = state_27155__$1;
(statearr_27157_27271[(2)] = null);

(statearr_27157_27271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27156 === (2))){
var state_27155__$1 = state_27155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27155__$1,(4),from);
} else {
if((state_val_27156 === (3))){
var inst_27153 = (state_27155[(2)]);
var state_27155__$1 = state_27155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27155__$1,inst_27153);
} else {
if((state_val_27156 === (4))){
var inst_27136 = (state_27155[(7)]);
var inst_27136__$1 = (state_27155[(2)]);
var inst_27137 = (inst_27136__$1 == null);
var state_27155__$1 = (function (){var statearr_27158 = state_27155;
(statearr_27158[(7)] = inst_27136__$1);

return statearr_27158;
})();
if(cljs.core.truth_(inst_27137)){
var statearr_27159_27272 = state_27155__$1;
(statearr_27159_27272[(1)] = (5));

} else {
var statearr_27160_27273 = state_27155__$1;
(statearr_27160_27273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27156 === (5))){
var inst_27139 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27155__$1 = state_27155;
var statearr_27161_27274 = state_27155__$1;
(statearr_27161_27274[(2)] = inst_27139);

(statearr_27161_27274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27156 === (6))){
var inst_27136 = (state_27155[(7)]);
var inst_27141 = (state_27155[(8)]);
var inst_27141__$1 = cljs.core.async.chan.call(null,(1));
var inst_27142 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27143 = [inst_27136,inst_27141__$1];
var inst_27144 = (new cljs.core.PersistentVector(null,2,(5),inst_27142,inst_27143,null));
var state_27155__$1 = (function (){var statearr_27162 = state_27155;
(statearr_27162[(8)] = inst_27141__$1);

return statearr_27162;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27155__$1,(8),jobs,inst_27144);
} else {
if((state_val_27156 === (7))){
var inst_27151 = (state_27155[(2)]);
var state_27155__$1 = state_27155;
var statearr_27163_27275 = state_27155__$1;
(statearr_27163_27275[(2)] = inst_27151);

(statearr_27163_27275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27156 === (8))){
var inst_27141 = (state_27155[(8)]);
var inst_27146 = (state_27155[(2)]);
var state_27155__$1 = (function (){var statearr_27164 = state_27155;
(statearr_27164[(9)] = inst_27146);

return statearr_27164;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27155__$1,(9),results,inst_27141);
} else {
if((state_val_27156 === (9))){
var inst_27148 = (state_27155[(2)]);
var state_27155__$1 = (function (){var statearr_27165 = state_27155;
(statearr_27165[(10)] = inst_27148);

return statearr_27165;
})();
var statearr_27166_27276 = state_27155__$1;
(statearr_27166_27276[(2)] = null);

(statearr_27166_27276[(1)] = (2));


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
});})(c__26694__auto___27270,jobs,results,process,async))
;
return ((function (switch__26582__auto__,c__26694__auto___27270,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____0 = (function (){
var statearr_27170 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27170[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__);

(statearr_27170[(1)] = (1));

return statearr_27170;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____1 = (function (state_27155){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_27155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e27171){if((e27171 instanceof Object)){
var ex__26586__auto__ = e27171;
var statearr_27172_27277 = state_27155;
(statearr_27172_27277[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27278 = state_27155;
state_27155 = G__27278;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__ = function(state_27155){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____1.call(this,state_27155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto___27270,jobs,results,process,async))
})();
var state__26696__auto__ = (function (){var statearr_27173 = f__26695__auto__.call(null);
(statearr_27173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto___27270);

return statearr_27173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto___27270,jobs,results,process,async))
);


var c__26694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto__,jobs,results,process,async){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto__,jobs,results,process,async){
return (function (state_27211){
var state_val_27212 = (state_27211[(1)]);
if((state_val_27212 === (7))){
var inst_27207 = (state_27211[(2)]);
var state_27211__$1 = state_27211;
var statearr_27213_27279 = state_27211__$1;
(statearr_27213_27279[(2)] = inst_27207);

(statearr_27213_27279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27212 === (20))){
var state_27211__$1 = state_27211;
var statearr_27214_27280 = state_27211__$1;
(statearr_27214_27280[(2)] = null);

(statearr_27214_27280[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27212 === (1))){
var state_27211__$1 = state_27211;
var statearr_27215_27281 = state_27211__$1;
(statearr_27215_27281[(2)] = null);

(statearr_27215_27281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27212 === (4))){
var inst_27176 = (state_27211[(7)]);
var inst_27176__$1 = (state_27211[(2)]);
var inst_27177 = (inst_27176__$1 == null);
var state_27211__$1 = (function (){var statearr_27216 = state_27211;
(statearr_27216[(7)] = inst_27176__$1);

return statearr_27216;
})();
if(cljs.core.truth_(inst_27177)){
var statearr_27217_27282 = state_27211__$1;
(statearr_27217_27282[(1)] = (5));

} else {
var statearr_27218_27283 = state_27211__$1;
(statearr_27218_27283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27212 === (15))){
var inst_27189 = (state_27211[(8)]);
var state_27211__$1 = state_27211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27211__$1,(18),to,inst_27189);
} else {
if((state_val_27212 === (21))){
var inst_27202 = (state_27211[(2)]);
var state_27211__$1 = state_27211;
var statearr_27219_27284 = state_27211__$1;
(statearr_27219_27284[(2)] = inst_27202);

(statearr_27219_27284[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27212 === (13))){
var inst_27204 = (state_27211[(2)]);
var state_27211__$1 = (function (){var statearr_27220 = state_27211;
(statearr_27220[(9)] = inst_27204);

return statearr_27220;
})();
var statearr_27221_27285 = state_27211__$1;
(statearr_27221_27285[(2)] = null);

(statearr_27221_27285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27212 === (6))){
var inst_27176 = (state_27211[(7)]);
var state_27211__$1 = state_27211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27211__$1,(11),inst_27176);
} else {
if((state_val_27212 === (17))){
var inst_27197 = (state_27211[(2)]);
var state_27211__$1 = state_27211;
if(cljs.core.truth_(inst_27197)){
var statearr_27222_27286 = state_27211__$1;
(statearr_27222_27286[(1)] = (19));

} else {
var statearr_27223_27287 = state_27211__$1;
(statearr_27223_27287[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27212 === (3))){
var inst_27209 = (state_27211[(2)]);
var state_27211__$1 = state_27211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27211__$1,inst_27209);
} else {
if((state_val_27212 === (12))){
var inst_27186 = (state_27211[(10)]);
var state_27211__$1 = state_27211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27211__$1,(14),inst_27186);
} else {
if((state_val_27212 === (2))){
var state_27211__$1 = state_27211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27211__$1,(4),results);
} else {
if((state_val_27212 === (19))){
var state_27211__$1 = state_27211;
var statearr_27224_27288 = state_27211__$1;
(statearr_27224_27288[(2)] = null);

(statearr_27224_27288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27212 === (11))){
var inst_27186 = (state_27211[(2)]);
var state_27211__$1 = (function (){var statearr_27225 = state_27211;
(statearr_27225[(10)] = inst_27186);

return statearr_27225;
})();
var statearr_27226_27289 = state_27211__$1;
(statearr_27226_27289[(2)] = null);

(statearr_27226_27289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27212 === (9))){
var state_27211__$1 = state_27211;
var statearr_27227_27290 = state_27211__$1;
(statearr_27227_27290[(2)] = null);

(statearr_27227_27290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27212 === (5))){
var state_27211__$1 = state_27211;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27228_27291 = state_27211__$1;
(statearr_27228_27291[(1)] = (8));

} else {
var statearr_27229_27292 = state_27211__$1;
(statearr_27229_27292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27212 === (14))){
var inst_27189 = (state_27211[(8)]);
var inst_27191 = (state_27211[(11)]);
var inst_27189__$1 = (state_27211[(2)]);
var inst_27190 = (inst_27189__$1 == null);
var inst_27191__$1 = cljs.core.not.call(null,inst_27190);
var state_27211__$1 = (function (){var statearr_27230 = state_27211;
(statearr_27230[(8)] = inst_27189__$1);

(statearr_27230[(11)] = inst_27191__$1);

return statearr_27230;
})();
if(inst_27191__$1){
var statearr_27231_27293 = state_27211__$1;
(statearr_27231_27293[(1)] = (15));

} else {
var statearr_27232_27294 = state_27211__$1;
(statearr_27232_27294[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27212 === (16))){
var inst_27191 = (state_27211[(11)]);
var state_27211__$1 = state_27211;
var statearr_27233_27295 = state_27211__$1;
(statearr_27233_27295[(2)] = inst_27191);

(statearr_27233_27295[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27212 === (10))){
var inst_27183 = (state_27211[(2)]);
var state_27211__$1 = state_27211;
var statearr_27234_27296 = state_27211__$1;
(statearr_27234_27296[(2)] = inst_27183);

(statearr_27234_27296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27212 === (18))){
var inst_27194 = (state_27211[(2)]);
var state_27211__$1 = state_27211;
var statearr_27235_27297 = state_27211__$1;
(statearr_27235_27297[(2)] = inst_27194);

(statearr_27235_27297[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27212 === (8))){
var inst_27180 = cljs.core.async.close_BANG_.call(null,to);
var state_27211__$1 = state_27211;
var statearr_27236_27298 = state_27211__$1;
(statearr_27236_27298[(2)] = inst_27180);

(statearr_27236_27298[(1)] = (10));


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
});})(c__26694__auto__,jobs,results,process,async))
;
return ((function (switch__26582__auto__,c__26694__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____0 = (function (){
var statearr_27240 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27240[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__);

(statearr_27240[(1)] = (1));

return statearr_27240;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____1 = (function (state_27211){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_27211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e27241){if((e27241 instanceof Object)){
var ex__26586__auto__ = e27241;
var statearr_27242_27299 = state_27211;
(statearr_27242_27299[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27300 = state_27211;
state_27211 = G__27300;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__ = function(state_27211){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____1.call(this,state_27211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto__,jobs,results,process,async))
})();
var state__26696__auto__ = (function (){var statearr_27243 = f__26695__auto__.call(null);
(statearr_27243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto__);

return statearr_27243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto__,jobs,results,process,async))
);

return c__26694__auto__;
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
var args27301 = [];
var len__23633__auto___27304 = arguments.length;
var i__23634__auto___27305 = (0);
while(true){
if((i__23634__auto___27305 < len__23633__auto___27304)){
args27301.push((arguments[i__23634__auto___27305]));

var G__27306 = (i__23634__auto___27305 + (1));
i__23634__auto___27305 = G__27306;
continue;
} else {
}
break;
}

var G__27303 = args27301.length;
switch (G__27303) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27301.length)].join('')));

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
var args27308 = [];
var len__23633__auto___27311 = arguments.length;
var i__23634__auto___27312 = (0);
while(true){
if((i__23634__auto___27312 < len__23633__auto___27311)){
args27308.push((arguments[i__23634__auto___27312]));

var G__27313 = (i__23634__auto___27312 + (1));
i__23634__auto___27312 = G__27313;
continue;
} else {
}
break;
}

var G__27310 = args27308.length;
switch (G__27310) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27308.length)].join('')));

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
var args27315 = [];
var len__23633__auto___27368 = arguments.length;
var i__23634__auto___27369 = (0);
while(true){
if((i__23634__auto___27369 < len__23633__auto___27368)){
args27315.push((arguments[i__23634__auto___27369]));

var G__27370 = (i__23634__auto___27369 + (1));
i__23634__auto___27369 = G__27370;
continue;
} else {
}
break;
}

var G__27317 = args27315.length;
switch (G__27317) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27315.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26694__auto___27372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto___27372,tc,fc){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto___27372,tc,fc){
return (function (state_27343){
var state_val_27344 = (state_27343[(1)]);
if((state_val_27344 === (7))){
var inst_27339 = (state_27343[(2)]);
var state_27343__$1 = state_27343;
var statearr_27345_27373 = state_27343__$1;
(statearr_27345_27373[(2)] = inst_27339);

(statearr_27345_27373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (1))){
var state_27343__$1 = state_27343;
var statearr_27346_27374 = state_27343__$1;
(statearr_27346_27374[(2)] = null);

(statearr_27346_27374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (4))){
var inst_27320 = (state_27343[(7)]);
var inst_27320__$1 = (state_27343[(2)]);
var inst_27321 = (inst_27320__$1 == null);
var state_27343__$1 = (function (){var statearr_27347 = state_27343;
(statearr_27347[(7)] = inst_27320__$1);

return statearr_27347;
})();
if(cljs.core.truth_(inst_27321)){
var statearr_27348_27375 = state_27343__$1;
(statearr_27348_27375[(1)] = (5));

} else {
var statearr_27349_27376 = state_27343__$1;
(statearr_27349_27376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (13))){
var state_27343__$1 = state_27343;
var statearr_27350_27377 = state_27343__$1;
(statearr_27350_27377[(2)] = null);

(statearr_27350_27377[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (6))){
var inst_27320 = (state_27343[(7)]);
var inst_27326 = p.call(null,inst_27320);
var state_27343__$1 = state_27343;
if(cljs.core.truth_(inst_27326)){
var statearr_27351_27378 = state_27343__$1;
(statearr_27351_27378[(1)] = (9));

} else {
var statearr_27352_27379 = state_27343__$1;
(statearr_27352_27379[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (3))){
var inst_27341 = (state_27343[(2)]);
var state_27343__$1 = state_27343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27343__$1,inst_27341);
} else {
if((state_val_27344 === (12))){
var state_27343__$1 = state_27343;
var statearr_27353_27380 = state_27343__$1;
(statearr_27353_27380[(2)] = null);

(statearr_27353_27380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (2))){
var state_27343__$1 = state_27343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27343__$1,(4),ch);
} else {
if((state_val_27344 === (11))){
var inst_27320 = (state_27343[(7)]);
var inst_27330 = (state_27343[(2)]);
var state_27343__$1 = state_27343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27343__$1,(8),inst_27330,inst_27320);
} else {
if((state_val_27344 === (9))){
var state_27343__$1 = state_27343;
var statearr_27354_27381 = state_27343__$1;
(statearr_27354_27381[(2)] = tc);

(statearr_27354_27381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (5))){
var inst_27323 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27324 = cljs.core.async.close_BANG_.call(null,fc);
var state_27343__$1 = (function (){var statearr_27355 = state_27343;
(statearr_27355[(8)] = inst_27323);

return statearr_27355;
})();
var statearr_27356_27382 = state_27343__$1;
(statearr_27356_27382[(2)] = inst_27324);

(statearr_27356_27382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (14))){
var inst_27337 = (state_27343[(2)]);
var state_27343__$1 = state_27343;
var statearr_27357_27383 = state_27343__$1;
(statearr_27357_27383[(2)] = inst_27337);

(statearr_27357_27383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (10))){
var state_27343__$1 = state_27343;
var statearr_27358_27384 = state_27343__$1;
(statearr_27358_27384[(2)] = fc);

(statearr_27358_27384[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27344 === (8))){
var inst_27332 = (state_27343[(2)]);
var state_27343__$1 = state_27343;
if(cljs.core.truth_(inst_27332)){
var statearr_27359_27385 = state_27343__$1;
(statearr_27359_27385[(1)] = (12));

} else {
var statearr_27360_27386 = state_27343__$1;
(statearr_27360_27386[(1)] = (13));

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
});})(c__26694__auto___27372,tc,fc))
;
return ((function (switch__26582__auto__,c__26694__auto___27372,tc,fc){
return (function() {
var cljs$core$async$state_machine__26583__auto__ = null;
var cljs$core$async$state_machine__26583__auto____0 = (function (){
var statearr_27364 = [null,null,null,null,null,null,null,null,null];
(statearr_27364[(0)] = cljs$core$async$state_machine__26583__auto__);

(statearr_27364[(1)] = (1));

return statearr_27364;
});
var cljs$core$async$state_machine__26583__auto____1 = (function (state_27343){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_27343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e27365){if((e27365 instanceof Object)){
var ex__26586__auto__ = e27365;
var statearr_27366_27387 = state_27343;
(statearr_27366_27387[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27388 = state_27343;
state_27343 = G__27388;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
cljs$core$async$state_machine__26583__auto__ = function(state_27343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26583__auto____1.call(this,state_27343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26583__auto____0;
cljs$core$async$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26583__auto____1;
return cljs$core$async$state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto___27372,tc,fc))
})();
var state__26696__auto__ = (function (){var statearr_27367 = f__26695__auto__.call(null);
(statearr_27367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto___27372);

return statearr_27367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto___27372,tc,fc))
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
var c__26694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto__){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto__){
return (function (state_27452){
var state_val_27453 = (state_27452[(1)]);
if((state_val_27453 === (7))){
var inst_27448 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
var statearr_27454_27475 = state_27452__$1;
(statearr_27454_27475[(2)] = inst_27448);

(statearr_27454_27475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (1))){
var inst_27432 = init;
var state_27452__$1 = (function (){var statearr_27455 = state_27452;
(statearr_27455[(7)] = inst_27432);

return statearr_27455;
})();
var statearr_27456_27476 = state_27452__$1;
(statearr_27456_27476[(2)] = null);

(statearr_27456_27476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (4))){
var inst_27435 = (state_27452[(8)]);
var inst_27435__$1 = (state_27452[(2)]);
var inst_27436 = (inst_27435__$1 == null);
var state_27452__$1 = (function (){var statearr_27457 = state_27452;
(statearr_27457[(8)] = inst_27435__$1);

return statearr_27457;
})();
if(cljs.core.truth_(inst_27436)){
var statearr_27458_27477 = state_27452__$1;
(statearr_27458_27477[(1)] = (5));

} else {
var statearr_27459_27478 = state_27452__$1;
(statearr_27459_27478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (6))){
var inst_27432 = (state_27452[(7)]);
var inst_27435 = (state_27452[(8)]);
var inst_27439 = (state_27452[(9)]);
var inst_27439__$1 = f.call(null,inst_27432,inst_27435);
var inst_27440 = cljs.core.reduced_QMARK_.call(null,inst_27439__$1);
var state_27452__$1 = (function (){var statearr_27460 = state_27452;
(statearr_27460[(9)] = inst_27439__$1);

return statearr_27460;
})();
if(inst_27440){
var statearr_27461_27479 = state_27452__$1;
(statearr_27461_27479[(1)] = (8));

} else {
var statearr_27462_27480 = state_27452__$1;
(statearr_27462_27480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (3))){
var inst_27450 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27452__$1,inst_27450);
} else {
if((state_val_27453 === (2))){
var state_27452__$1 = state_27452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27452__$1,(4),ch);
} else {
if((state_val_27453 === (9))){
var inst_27439 = (state_27452[(9)]);
var inst_27432 = inst_27439;
var state_27452__$1 = (function (){var statearr_27463 = state_27452;
(statearr_27463[(7)] = inst_27432);

return statearr_27463;
})();
var statearr_27464_27481 = state_27452__$1;
(statearr_27464_27481[(2)] = null);

(statearr_27464_27481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (5))){
var inst_27432 = (state_27452[(7)]);
var state_27452__$1 = state_27452;
var statearr_27465_27482 = state_27452__$1;
(statearr_27465_27482[(2)] = inst_27432);

(statearr_27465_27482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (10))){
var inst_27446 = (state_27452[(2)]);
var state_27452__$1 = state_27452;
var statearr_27466_27483 = state_27452__$1;
(statearr_27466_27483[(2)] = inst_27446);

(statearr_27466_27483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27453 === (8))){
var inst_27439 = (state_27452[(9)]);
var inst_27442 = cljs.core.deref.call(null,inst_27439);
var state_27452__$1 = state_27452;
var statearr_27467_27484 = state_27452__$1;
(statearr_27467_27484[(2)] = inst_27442);

(statearr_27467_27484[(1)] = (10));


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
});})(c__26694__auto__))
;
return ((function (switch__26582__auto__,c__26694__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26583__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26583__auto____0 = (function (){
var statearr_27471 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27471[(0)] = cljs$core$async$reduce_$_state_machine__26583__auto__);

(statearr_27471[(1)] = (1));

return statearr_27471;
});
var cljs$core$async$reduce_$_state_machine__26583__auto____1 = (function (state_27452){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_27452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e27472){if((e27472 instanceof Object)){
var ex__26586__auto__ = e27472;
var statearr_27473_27485 = state_27452;
(statearr_27473_27485[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27486 = state_27452;
state_27452 = G__27486;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26583__auto__ = function(state_27452){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26583__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26583__auto____1.call(this,state_27452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26583__auto____0;
cljs$core$async$reduce_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26583__auto____1;
return cljs$core$async$reduce_$_state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto__))
})();
var state__26696__auto__ = (function (){var statearr_27474 = f__26695__auto__.call(null);
(statearr_27474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto__);

return statearr_27474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto__))
);

return c__26694__auto__;
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
var args27487 = [];
var len__23633__auto___27539 = arguments.length;
var i__23634__auto___27540 = (0);
while(true){
if((i__23634__auto___27540 < len__23633__auto___27539)){
args27487.push((arguments[i__23634__auto___27540]));

var G__27541 = (i__23634__auto___27540 + (1));
i__23634__auto___27540 = G__27541;
continue;
} else {
}
break;
}

var G__27489 = args27487.length;
switch (G__27489) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27487.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto__){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto__){
return (function (state_27514){
var state_val_27515 = (state_27514[(1)]);
if((state_val_27515 === (7))){
var inst_27496 = (state_27514[(2)]);
var state_27514__$1 = state_27514;
var statearr_27516_27543 = state_27514__$1;
(statearr_27516_27543[(2)] = inst_27496);

(statearr_27516_27543[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27515 === (1))){
var inst_27490 = cljs.core.seq.call(null,coll);
var inst_27491 = inst_27490;
var state_27514__$1 = (function (){var statearr_27517 = state_27514;
(statearr_27517[(7)] = inst_27491);

return statearr_27517;
})();
var statearr_27518_27544 = state_27514__$1;
(statearr_27518_27544[(2)] = null);

(statearr_27518_27544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27515 === (4))){
var inst_27491 = (state_27514[(7)]);
var inst_27494 = cljs.core.first.call(null,inst_27491);
var state_27514__$1 = state_27514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27514__$1,(7),ch,inst_27494);
} else {
if((state_val_27515 === (13))){
var inst_27508 = (state_27514[(2)]);
var state_27514__$1 = state_27514;
var statearr_27519_27545 = state_27514__$1;
(statearr_27519_27545[(2)] = inst_27508);

(statearr_27519_27545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27515 === (6))){
var inst_27499 = (state_27514[(2)]);
var state_27514__$1 = state_27514;
if(cljs.core.truth_(inst_27499)){
var statearr_27520_27546 = state_27514__$1;
(statearr_27520_27546[(1)] = (8));

} else {
var statearr_27521_27547 = state_27514__$1;
(statearr_27521_27547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27515 === (3))){
var inst_27512 = (state_27514[(2)]);
var state_27514__$1 = state_27514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27514__$1,inst_27512);
} else {
if((state_val_27515 === (12))){
var state_27514__$1 = state_27514;
var statearr_27522_27548 = state_27514__$1;
(statearr_27522_27548[(2)] = null);

(statearr_27522_27548[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27515 === (2))){
var inst_27491 = (state_27514[(7)]);
var state_27514__$1 = state_27514;
if(cljs.core.truth_(inst_27491)){
var statearr_27523_27549 = state_27514__$1;
(statearr_27523_27549[(1)] = (4));

} else {
var statearr_27524_27550 = state_27514__$1;
(statearr_27524_27550[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27515 === (11))){
var inst_27505 = cljs.core.async.close_BANG_.call(null,ch);
var state_27514__$1 = state_27514;
var statearr_27525_27551 = state_27514__$1;
(statearr_27525_27551[(2)] = inst_27505);

(statearr_27525_27551[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27515 === (9))){
var state_27514__$1 = state_27514;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27526_27552 = state_27514__$1;
(statearr_27526_27552[(1)] = (11));

} else {
var statearr_27527_27553 = state_27514__$1;
(statearr_27527_27553[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27515 === (5))){
var inst_27491 = (state_27514[(7)]);
var state_27514__$1 = state_27514;
var statearr_27528_27554 = state_27514__$1;
(statearr_27528_27554[(2)] = inst_27491);

(statearr_27528_27554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27515 === (10))){
var inst_27510 = (state_27514[(2)]);
var state_27514__$1 = state_27514;
var statearr_27529_27555 = state_27514__$1;
(statearr_27529_27555[(2)] = inst_27510);

(statearr_27529_27555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27515 === (8))){
var inst_27491 = (state_27514[(7)]);
var inst_27501 = cljs.core.next.call(null,inst_27491);
var inst_27491__$1 = inst_27501;
var state_27514__$1 = (function (){var statearr_27530 = state_27514;
(statearr_27530[(7)] = inst_27491__$1);

return statearr_27530;
})();
var statearr_27531_27556 = state_27514__$1;
(statearr_27531_27556[(2)] = null);

(statearr_27531_27556[(1)] = (2));


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
});})(c__26694__auto__))
;
return ((function (switch__26582__auto__,c__26694__auto__){
return (function() {
var cljs$core$async$state_machine__26583__auto__ = null;
var cljs$core$async$state_machine__26583__auto____0 = (function (){
var statearr_27535 = [null,null,null,null,null,null,null,null];
(statearr_27535[(0)] = cljs$core$async$state_machine__26583__auto__);

(statearr_27535[(1)] = (1));

return statearr_27535;
});
var cljs$core$async$state_machine__26583__auto____1 = (function (state_27514){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_27514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e27536){if((e27536 instanceof Object)){
var ex__26586__auto__ = e27536;
var statearr_27537_27557 = state_27514;
(statearr_27537_27557[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27558 = state_27514;
state_27514 = G__27558;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
cljs$core$async$state_machine__26583__auto__ = function(state_27514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26583__auto____1.call(this,state_27514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26583__auto____0;
cljs$core$async$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26583__auto____1;
return cljs$core$async$state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto__))
})();
var state__26696__auto__ = (function (){var statearr_27538 = f__26695__auto__.call(null);
(statearr_27538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto__);

return statearr_27538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto__))
);

return c__26694__auto__;
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
var x__23226__auto__ = (((_ == null))?null:_);
var m__23227__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__23226__auto__)]);
if(!((m__23227__auto__ == null))){
return m__23227__auto__.call(null,_);
} else {
var m__23227__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__23227__auto____$1 == null))){
return m__23227__auto____$1.call(null,_);
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
var x__23226__auto__ = (((m == null))?null:m);
var m__23227__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__23226__auto__)]);
if(!((m__23227__auto__ == null))){
return m__23227__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__23227__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__23227__auto____$1 == null))){
return m__23227__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__23226__auto__ = (((m == null))?null:m);
var m__23227__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__23226__auto__)]);
if(!((m__23227__auto__ == null))){
return m__23227__auto__.call(null,m,ch);
} else {
var m__23227__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__23227__auto____$1 == null))){
return m__23227__auto____$1.call(null,m,ch);
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
var x__23226__auto__ = (((m == null))?null:m);
var m__23227__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__23226__auto__)]);
if(!((m__23227__auto__ == null))){
return m__23227__auto__.call(null,m);
} else {
var m__23227__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__23227__auto____$1 == null))){
return m__23227__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async27780 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27780 = (function (mult,ch,cs,meta27781){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27781 = meta27781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27782,meta27781__$1){
var self__ = this;
var _27782__$1 = this;
return (new cljs.core.async.t_cljs$core$async27780(self__.mult,self__.ch,self__.cs,meta27781__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27780.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27782){
var self__ = this;
var _27782__$1 = this;
return self__.meta27781;
});})(cs))
;

cljs.core.async.t_cljs$core$async27780.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27780.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27780.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async27780.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27780.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27780.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27780.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27781","meta27781",1530986478,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27780.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27780";

cljs.core.async.t_cljs$core$async27780.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__23169__auto__,writer__23170__auto__,opt__23171__auto__){
return cljs.core._write.call(null,writer__23170__auto__,"cljs.core.async/t_cljs$core$async27780");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27780 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27780(mult__$1,ch__$1,cs__$1,meta27781){
return (new cljs.core.async.t_cljs$core$async27780(mult__$1,ch__$1,cs__$1,meta27781));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27780(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26694__auto___28001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto___28001,cs,m,dchan,dctr,done){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto___28001,cs,m,dchan,dctr,done){
return (function (state_27913){
var state_val_27914 = (state_27913[(1)]);
if((state_val_27914 === (7))){
var inst_27909 = (state_27913[(2)]);
var state_27913__$1 = state_27913;
var statearr_27915_28002 = state_27913__$1;
(statearr_27915_28002[(2)] = inst_27909);

(statearr_27915_28002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (20))){
var inst_27814 = (state_27913[(7)]);
var inst_27824 = cljs.core.first.call(null,inst_27814);
var inst_27825 = cljs.core.nth.call(null,inst_27824,(0),null);
var inst_27826 = cljs.core.nth.call(null,inst_27824,(1),null);
var state_27913__$1 = (function (){var statearr_27916 = state_27913;
(statearr_27916[(8)] = inst_27825);

return statearr_27916;
})();
if(cljs.core.truth_(inst_27826)){
var statearr_27917_28003 = state_27913__$1;
(statearr_27917_28003[(1)] = (22));

} else {
var statearr_27918_28004 = state_27913__$1;
(statearr_27918_28004[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (27))){
var inst_27785 = (state_27913[(9)]);
var inst_27856 = (state_27913[(10)]);
var inst_27854 = (state_27913[(11)]);
var inst_27861 = (state_27913[(12)]);
var inst_27861__$1 = cljs.core._nth.call(null,inst_27854,inst_27856);
var inst_27862 = cljs.core.async.put_BANG_.call(null,inst_27861__$1,inst_27785,done);
var state_27913__$1 = (function (){var statearr_27919 = state_27913;
(statearr_27919[(12)] = inst_27861__$1);

return statearr_27919;
})();
if(cljs.core.truth_(inst_27862)){
var statearr_27920_28005 = state_27913__$1;
(statearr_27920_28005[(1)] = (30));

} else {
var statearr_27921_28006 = state_27913__$1;
(statearr_27921_28006[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (1))){
var state_27913__$1 = state_27913;
var statearr_27922_28007 = state_27913__$1;
(statearr_27922_28007[(2)] = null);

(statearr_27922_28007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (24))){
var inst_27814 = (state_27913[(7)]);
var inst_27831 = (state_27913[(2)]);
var inst_27832 = cljs.core.next.call(null,inst_27814);
var inst_27794 = inst_27832;
var inst_27795 = null;
var inst_27796 = (0);
var inst_27797 = (0);
var state_27913__$1 = (function (){var statearr_27923 = state_27913;
(statearr_27923[(13)] = inst_27797);

(statearr_27923[(14)] = inst_27831);

(statearr_27923[(15)] = inst_27794);

(statearr_27923[(16)] = inst_27795);

(statearr_27923[(17)] = inst_27796);

return statearr_27923;
})();
var statearr_27924_28008 = state_27913__$1;
(statearr_27924_28008[(2)] = null);

(statearr_27924_28008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (39))){
var state_27913__$1 = state_27913;
var statearr_27928_28009 = state_27913__$1;
(statearr_27928_28009[(2)] = null);

(statearr_27928_28009[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (4))){
var inst_27785 = (state_27913[(9)]);
var inst_27785__$1 = (state_27913[(2)]);
var inst_27786 = (inst_27785__$1 == null);
var state_27913__$1 = (function (){var statearr_27929 = state_27913;
(statearr_27929[(9)] = inst_27785__$1);

return statearr_27929;
})();
if(cljs.core.truth_(inst_27786)){
var statearr_27930_28010 = state_27913__$1;
(statearr_27930_28010[(1)] = (5));

} else {
var statearr_27931_28011 = state_27913__$1;
(statearr_27931_28011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (15))){
var inst_27797 = (state_27913[(13)]);
var inst_27794 = (state_27913[(15)]);
var inst_27795 = (state_27913[(16)]);
var inst_27796 = (state_27913[(17)]);
var inst_27810 = (state_27913[(2)]);
var inst_27811 = (inst_27797 + (1));
var tmp27925 = inst_27794;
var tmp27926 = inst_27795;
var tmp27927 = inst_27796;
var inst_27794__$1 = tmp27925;
var inst_27795__$1 = tmp27926;
var inst_27796__$1 = tmp27927;
var inst_27797__$1 = inst_27811;
var state_27913__$1 = (function (){var statearr_27932 = state_27913;
(statearr_27932[(18)] = inst_27810);

(statearr_27932[(13)] = inst_27797__$1);

(statearr_27932[(15)] = inst_27794__$1);

(statearr_27932[(16)] = inst_27795__$1);

(statearr_27932[(17)] = inst_27796__$1);

return statearr_27932;
})();
var statearr_27933_28012 = state_27913__$1;
(statearr_27933_28012[(2)] = null);

(statearr_27933_28012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (21))){
var inst_27835 = (state_27913[(2)]);
var state_27913__$1 = state_27913;
var statearr_27937_28013 = state_27913__$1;
(statearr_27937_28013[(2)] = inst_27835);

(statearr_27937_28013[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (31))){
var inst_27861 = (state_27913[(12)]);
var inst_27865 = done.call(null,null);
var inst_27866 = cljs.core.async.untap_STAR_.call(null,m,inst_27861);
var state_27913__$1 = (function (){var statearr_27938 = state_27913;
(statearr_27938[(19)] = inst_27865);

return statearr_27938;
})();
var statearr_27939_28014 = state_27913__$1;
(statearr_27939_28014[(2)] = inst_27866);

(statearr_27939_28014[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (32))){
var inst_27856 = (state_27913[(10)]);
var inst_27853 = (state_27913[(20)]);
var inst_27854 = (state_27913[(11)]);
var inst_27855 = (state_27913[(21)]);
var inst_27868 = (state_27913[(2)]);
var inst_27869 = (inst_27856 + (1));
var tmp27934 = inst_27853;
var tmp27935 = inst_27854;
var tmp27936 = inst_27855;
var inst_27853__$1 = tmp27934;
var inst_27854__$1 = tmp27935;
var inst_27855__$1 = tmp27936;
var inst_27856__$1 = inst_27869;
var state_27913__$1 = (function (){var statearr_27940 = state_27913;
(statearr_27940[(22)] = inst_27868);

(statearr_27940[(10)] = inst_27856__$1);

(statearr_27940[(20)] = inst_27853__$1);

(statearr_27940[(11)] = inst_27854__$1);

(statearr_27940[(21)] = inst_27855__$1);

return statearr_27940;
})();
var statearr_27941_28015 = state_27913__$1;
(statearr_27941_28015[(2)] = null);

(statearr_27941_28015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (40))){
var inst_27881 = (state_27913[(23)]);
var inst_27885 = done.call(null,null);
var inst_27886 = cljs.core.async.untap_STAR_.call(null,m,inst_27881);
var state_27913__$1 = (function (){var statearr_27942 = state_27913;
(statearr_27942[(24)] = inst_27885);

return statearr_27942;
})();
var statearr_27943_28016 = state_27913__$1;
(statearr_27943_28016[(2)] = inst_27886);

(statearr_27943_28016[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (33))){
var inst_27872 = (state_27913[(25)]);
var inst_27874 = cljs.core.chunked_seq_QMARK_.call(null,inst_27872);
var state_27913__$1 = state_27913;
if(inst_27874){
var statearr_27944_28017 = state_27913__$1;
(statearr_27944_28017[(1)] = (36));

} else {
var statearr_27945_28018 = state_27913__$1;
(statearr_27945_28018[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (13))){
var inst_27804 = (state_27913[(26)]);
var inst_27807 = cljs.core.async.close_BANG_.call(null,inst_27804);
var state_27913__$1 = state_27913;
var statearr_27946_28019 = state_27913__$1;
(statearr_27946_28019[(2)] = inst_27807);

(statearr_27946_28019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (22))){
var inst_27825 = (state_27913[(8)]);
var inst_27828 = cljs.core.async.close_BANG_.call(null,inst_27825);
var state_27913__$1 = state_27913;
var statearr_27947_28020 = state_27913__$1;
(statearr_27947_28020[(2)] = inst_27828);

(statearr_27947_28020[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (36))){
var inst_27872 = (state_27913[(25)]);
var inst_27876 = cljs.core.chunk_first.call(null,inst_27872);
var inst_27877 = cljs.core.chunk_rest.call(null,inst_27872);
var inst_27878 = cljs.core.count.call(null,inst_27876);
var inst_27853 = inst_27877;
var inst_27854 = inst_27876;
var inst_27855 = inst_27878;
var inst_27856 = (0);
var state_27913__$1 = (function (){var statearr_27948 = state_27913;
(statearr_27948[(10)] = inst_27856);

(statearr_27948[(20)] = inst_27853);

(statearr_27948[(11)] = inst_27854);

(statearr_27948[(21)] = inst_27855);

return statearr_27948;
})();
var statearr_27949_28021 = state_27913__$1;
(statearr_27949_28021[(2)] = null);

(statearr_27949_28021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (41))){
var inst_27872 = (state_27913[(25)]);
var inst_27888 = (state_27913[(2)]);
var inst_27889 = cljs.core.next.call(null,inst_27872);
var inst_27853 = inst_27889;
var inst_27854 = null;
var inst_27855 = (0);
var inst_27856 = (0);
var state_27913__$1 = (function (){var statearr_27950 = state_27913;
(statearr_27950[(10)] = inst_27856);

(statearr_27950[(20)] = inst_27853);

(statearr_27950[(11)] = inst_27854);

(statearr_27950[(21)] = inst_27855);

(statearr_27950[(27)] = inst_27888);

return statearr_27950;
})();
var statearr_27951_28022 = state_27913__$1;
(statearr_27951_28022[(2)] = null);

(statearr_27951_28022[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (43))){
var state_27913__$1 = state_27913;
var statearr_27952_28023 = state_27913__$1;
(statearr_27952_28023[(2)] = null);

(statearr_27952_28023[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (29))){
var inst_27897 = (state_27913[(2)]);
var state_27913__$1 = state_27913;
var statearr_27953_28024 = state_27913__$1;
(statearr_27953_28024[(2)] = inst_27897);

(statearr_27953_28024[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (44))){
var inst_27906 = (state_27913[(2)]);
var state_27913__$1 = (function (){var statearr_27954 = state_27913;
(statearr_27954[(28)] = inst_27906);

return statearr_27954;
})();
var statearr_27955_28025 = state_27913__$1;
(statearr_27955_28025[(2)] = null);

(statearr_27955_28025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (6))){
var inst_27845 = (state_27913[(29)]);
var inst_27844 = cljs.core.deref.call(null,cs);
var inst_27845__$1 = cljs.core.keys.call(null,inst_27844);
var inst_27846 = cljs.core.count.call(null,inst_27845__$1);
var inst_27847 = cljs.core.reset_BANG_.call(null,dctr,inst_27846);
var inst_27852 = cljs.core.seq.call(null,inst_27845__$1);
var inst_27853 = inst_27852;
var inst_27854 = null;
var inst_27855 = (0);
var inst_27856 = (0);
var state_27913__$1 = (function (){var statearr_27956 = state_27913;
(statearr_27956[(30)] = inst_27847);

(statearr_27956[(10)] = inst_27856);

(statearr_27956[(20)] = inst_27853);

(statearr_27956[(11)] = inst_27854);

(statearr_27956[(21)] = inst_27855);

(statearr_27956[(29)] = inst_27845__$1);

return statearr_27956;
})();
var statearr_27957_28026 = state_27913__$1;
(statearr_27957_28026[(2)] = null);

(statearr_27957_28026[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (28))){
var inst_27853 = (state_27913[(20)]);
var inst_27872 = (state_27913[(25)]);
var inst_27872__$1 = cljs.core.seq.call(null,inst_27853);
var state_27913__$1 = (function (){var statearr_27958 = state_27913;
(statearr_27958[(25)] = inst_27872__$1);

return statearr_27958;
})();
if(inst_27872__$1){
var statearr_27959_28027 = state_27913__$1;
(statearr_27959_28027[(1)] = (33));

} else {
var statearr_27960_28028 = state_27913__$1;
(statearr_27960_28028[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (25))){
var inst_27856 = (state_27913[(10)]);
var inst_27855 = (state_27913[(21)]);
var inst_27858 = (inst_27856 < inst_27855);
var inst_27859 = inst_27858;
var state_27913__$1 = state_27913;
if(cljs.core.truth_(inst_27859)){
var statearr_27961_28029 = state_27913__$1;
(statearr_27961_28029[(1)] = (27));

} else {
var statearr_27962_28030 = state_27913__$1;
(statearr_27962_28030[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (34))){
var state_27913__$1 = state_27913;
var statearr_27963_28031 = state_27913__$1;
(statearr_27963_28031[(2)] = null);

(statearr_27963_28031[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (17))){
var state_27913__$1 = state_27913;
var statearr_27964_28032 = state_27913__$1;
(statearr_27964_28032[(2)] = null);

(statearr_27964_28032[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (3))){
var inst_27911 = (state_27913[(2)]);
var state_27913__$1 = state_27913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27913__$1,inst_27911);
} else {
if((state_val_27914 === (12))){
var inst_27840 = (state_27913[(2)]);
var state_27913__$1 = state_27913;
var statearr_27965_28033 = state_27913__$1;
(statearr_27965_28033[(2)] = inst_27840);

(statearr_27965_28033[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (2))){
var state_27913__$1 = state_27913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27913__$1,(4),ch);
} else {
if((state_val_27914 === (23))){
var state_27913__$1 = state_27913;
var statearr_27966_28034 = state_27913__$1;
(statearr_27966_28034[(2)] = null);

(statearr_27966_28034[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (35))){
var inst_27895 = (state_27913[(2)]);
var state_27913__$1 = state_27913;
var statearr_27967_28035 = state_27913__$1;
(statearr_27967_28035[(2)] = inst_27895);

(statearr_27967_28035[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (19))){
var inst_27814 = (state_27913[(7)]);
var inst_27818 = cljs.core.chunk_first.call(null,inst_27814);
var inst_27819 = cljs.core.chunk_rest.call(null,inst_27814);
var inst_27820 = cljs.core.count.call(null,inst_27818);
var inst_27794 = inst_27819;
var inst_27795 = inst_27818;
var inst_27796 = inst_27820;
var inst_27797 = (0);
var state_27913__$1 = (function (){var statearr_27968 = state_27913;
(statearr_27968[(13)] = inst_27797);

(statearr_27968[(15)] = inst_27794);

(statearr_27968[(16)] = inst_27795);

(statearr_27968[(17)] = inst_27796);

return statearr_27968;
})();
var statearr_27969_28036 = state_27913__$1;
(statearr_27969_28036[(2)] = null);

(statearr_27969_28036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (11))){
var inst_27794 = (state_27913[(15)]);
var inst_27814 = (state_27913[(7)]);
var inst_27814__$1 = cljs.core.seq.call(null,inst_27794);
var state_27913__$1 = (function (){var statearr_27970 = state_27913;
(statearr_27970[(7)] = inst_27814__$1);

return statearr_27970;
})();
if(inst_27814__$1){
var statearr_27971_28037 = state_27913__$1;
(statearr_27971_28037[(1)] = (16));

} else {
var statearr_27972_28038 = state_27913__$1;
(statearr_27972_28038[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (9))){
var inst_27842 = (state_27913[(2)]);
var state_27913__$1 = state_27913;
var statearr_27973_28039 = state_27913__$1;
(statearr_27973_28039[(2)] = inst_27842);

(statearr_27973_28039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (5))){
var inst_27792 = cljs.core.deref.call(null,cs);
var inst_27793 = cljs.core.seq.call(null,inst_27792);
var inst_27794 = inst_27793;
var inst_27795 = null;
var inst_27796 = (0);
var inst_27797 = (0);
var state_27913__$1 = (function (){var statearr_27974 = state_27913;
(statearr_27974[(13)] = inst_27797);

(statearr_27974[(15)] = inst_27794);

(statearr_27974[(16)] = inst_27795);

(statearr_27974[(17)] = inst_27796);

return statearr_27974;
})();
var statearr_27975_28040 = state_27913__$1;
(statearr_27975_28040[(2)] = null);

(statearr_27975_28040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (14))){
var state_27913__$1 = state_27913;
var statearr_27976_28041 = state_27913__$1;
(statearr_27976_28041[(2)] = null);

(statearr_27976_28041[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (45))){
var inst_27903 = (state_27913[(2)]);
var state_27913__$1 = state_27913;
var statearr_27977_28042 = state_27913__$1;
(statearr_27977_28042[(2)] = inst_27903);

(statearr_27977_28042[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (26))){
var inst_27845 = (state_27913[(29)]);
var inst_27899 = (state_27913[(2)]);
var inst_27900 = cljs.core.seq.call(null,inst_27845);
var state_27913__$1 = (function (){var statearr_27978 = state_27913;
(statearr_27978[(31)] = inst_27899);

return statearr_27978;
})();
if(inst_27900){
var statearr_27979_28043 = state_27913__$1;
(statearr_27979_28043[(1)] = (42));

} else {
var statearr_27980_28044 = state_27913__$1;
(statearr_27980_28044[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (16))){
var inst_27814 = (state_27913[(7)]);
var inst_27816 = cljs.core.chunked_seq_QMARK_.call(null,inst_27814);
var state_27913__$1 = state_27913;
if(inst_27816){
var statearr_27981_28045 = state_27913__$1;
(statearr_27981_28045[(1)] = (19));

} else {
var statearr_27982_28046 = state_27913__$1;
(statearr_27982_28046[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (38))){
var inst_27892 = (state_27913[(2)]);
var state_27913__$1 = state_27913;
var statearr_27983_28047 = state_27913__$1;
(statearr_27983_28047[(2)] = inst_27892);

(statearr_27983_28047[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (30))){
var state_27913__$1 = state_27913;
var statearr_27984_28048 = state_27913__$1;
(statearr_27984_28048[(2)] = null);

(statearr_27984_28048[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (10))){
var inst_27797 = (state_27913[(13)]);
var inst_27795 = (state_27913[(16)]);
var inst_27803 = cljs.core._nth.call(null,inst_27795,inst_27797);
var inst_27804 = cljs.core.nth.call(null,inst_27803,(0),null);
var inst_27805 = cljs.core.nth.call(null,inst_27803,(1),null);
var state_27913__$1 = (function (){var statearr_27985 = state_27913;
(statearr_27985[(26)] = inst_27804);

return statearr_27985;
})();
if(cljs.core.truth_(inst_27805)){
var statearr_27986_28049 = state_27913__$1;
(statearr_27986_28049[(1)] = (13));

} else {
var statearr_27987_28050 = state_27913__$1;
(statearr_27987_28050[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (18))){
var inst_27838 = (state_27913[(2)]);
var state_27913__$1 = state_27913;
var statearr_27988_28051 = state_27913__$1;
(statearr_27988_28051[(2)] = inst_27838);

(statearr_27988_28051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (42))){
var state_27913__$1 = state_27913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27913__$1,(45),dchan);
} else {
if((state_val_27914 === (37))){
var inst_27881 = (state_27913[(23)]);
var inst_27785 = (state_27913[(9)]);
var inst_27872 = (state_27913[(25)]);
var inst_27881__$1 = cljs.core.first.call(null,inst_27872);
var inst_27882 = cljs.core.async.put_BANG_.call(null,inst_27881__$1,inst_27785,done);
var state_27913__$1 = (function (){var statearr_27989 = state_27913;
(statearr_27989[(23)] = inst_27881__$1);

return statearr_27989;
})();
if(cljs.core.truth_(inst_27882)){
var statearr_27990_28052 = state_27913__$1;
(statearr_27990_28052[(1)] = (39));

} else {
var statearr_27991_28053 = state_27913__$1;
(statearr_27991_28053[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (8))){
var inst_27797 = (state_27913[(13)]);
var inst_27796 = (state_27913[(17)]);
var inst_27799 = (inst_27797 < inst_27796);
var inst_27800 = inst_27799;
var state_27913__$1 = state_27913;
if(cljs.core.truth_(inst_27800)){
var statearr_27992_28054 = state_27913__$1;
(statearr_27992_28054[(1)] = (10));

} else {
var statearr_27993_28055 = state_27913__$1;
(statearr_27993_28055[(1)] = (11));

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
});})(c__26694__auto___28001,cs,m,dchan,dctr,done))
;
return ((function (switch__26582__auto__,c__26694__auto___28001,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26583__auto__ = null;
var cljs$core$async$mult_$_state_machine__26583__auto____0 = (function (){
var statearr_27997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27997[(0)] = cljs$core$async$mult_$_state_machine__26583__auto__);

(statearr_27997[(1)] = (1));

return statearr_27997;
});
var cljs$core$async$mult_$_state_machine__26583__auto____1 = (function (state_27913){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_27913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e27998){if((e27998 instanceof Object)){
var ex__26586__auto__ = e27998;
var statearr_27999_28056 = state_27913;
(statearr_27999_28056[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28057 = state_27913;
state_27913 = G__28057;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26583__auto__ = function(state_27913){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26583__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26583__auto____1.call(this,state_27913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26583__auto____0;
cljs$core$async$mult_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26583__auto____1;
return cljs$core$async$mult_$_state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto___28001,cs,m,dchan,dctr,done))
})();
var state__26696__auto__ = (function (){var statearr_28000 = f__26695__auto__.call(null);
(statearr_28000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto___28001);

return statearr_28000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto___28001,cs,m,dchan,dctr,done))
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
var args28058 = [];
var len__23633__auto___28061 = arguments.length;
var i__23634__auto___28062 = (0);
while(true){
if((i__23634__auto___28062 < len__23633__auto___28061)){
args28058.push((arguments[i__23634__auto___28062]));

var G__28063 = (i__23634__auto___28062 + (1));
i__23634__auto___28062 = G__28063;
continue;
} else {
}
break;
}

var G__28060 = args28058.length;
switch (G__28060) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28058.length)].join('')));

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
var x__23226__auto__ = (((m == null))?null:m);
var m__23227__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__23226__auto__)]);
if(!((m__23227__auto__ == null))){
return m__23227__auto__.call(null,m,ch);
} else {
var m__23227__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__23227__auto____$1 == null))){
return m__23227__auto____$1.call(null,m,ch);
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
var x__23226__auto__ = (((m == null))?null:m);
var m__23227__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__23226__auto__)]);
if(!((m__23227__auto__ == null))){
return m__23227__auto__.call(null,m,ch);
} else {
var m__23227__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__23227__auto____$1 == null))){
return m__23227__auto____$1.call(null,m,ch);
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
var x__23226__auto__ = (((m == null))?null:m);
var m__23227__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__23226__auto__)]);
if(!((m__23227__auto__ == null))){
return m__23227__auto__.call(null,m);
} else {
var m__23227__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__23227__auto____$1 == null))){
return m__23227__auto____$1.call(null,m);
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
var x__23226__auto__ = (((m == null))?null:m);
var m__23227__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__23226__auto__)]);
if(!((m__23227__auto__ == null))){
return m__23227__auto__.call(null,m,state_map);
} else {
var m__23227__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__23227__auto____$1 == null))){
return m__23227__auto____$1.call(null,m,state_map);
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
var x__23226__auto__ = (((m == null))?null:m);
var m__23227__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__23226__auto__)]);
if(!((m__23227__auto__ == null))){
return m__23227__auto__.call(null,m,mode);
} else {
var m__23227__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__23227__auto____$1 == null))){
return m__23227__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__23640__auto__ = [];
var len__23633__auto___28075 = arguments.length;
var i__23634__auto___28076 = (0);
while(true){
if((i__23634__auto___28076 < len__23633__auto___28075)){
args__23640__auto__.push((arguments[i__23634__auto___28076]));

var G__28077 = (i__23634__auto___28076 + (1));
i__23634__auto___28076 = G__28077;
continue;
} else {
}
break;
}

var argseq__23641__auto__ = ((((3) < args__23640__auto__.length))?(new cljs.core.IndexedSeq(args__23640__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23641__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28069){
var map__28070 = p__28069;
var map__28070__$1 = ((((!((map__28070 == null)))?((((map__28070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28070):map__28070);
var opts = map__28070__$1;
var statearr_28072_28078 = state;
(statearr_28072_28078[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__28070,map__28070__$1,opts){
return (function (val){
var statearr_28073_28079 = state;
(statearr_28073_28079[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28070,map__28070__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_28074_28080 = state;
(statearr_28074_28080[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28065){
var G__28066 = cljs.core.first.call(null,seq28065);
var seq28065__$1 = cljs.core.next.call(null,seq28065);
var G__28067 = cljs.core.first.call(null,seq28065__$1);
var seq28065__$2 = cljs.core.next.call(null,seq28065__$1);
var G__28068 = cljs.core.first.call(null,seq28065__$2);
var seq28065__$3 = cljs.core.next.call(null,seq28065__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28066,G__28067,G__28068,seq28065__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28244 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28245){
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
this.meta28245 = meta28245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28246,meta28245__$1){
var self__ = this;
var _28246__$1 = this;
return (new cljs.core.async.t_cljs$core$async28244(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28245__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28246){
var self__ = this;
var _28246__$1 = this;
return self__.meta28245;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28244.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28245","meta28245",-1653487916,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28244";

cljs.core.async.t_cljs$core$async28244.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__23169__auto__,writer__23170__auto__,opt__23171__auto__){
return cljs.core._write.call(null,writer__23170__auto__,"cljs.core.async/t_cljs$core$async28244");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28244 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28244(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28245){
return (new cljs.core.async.t_cljs$core$async28244(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28245));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28244(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26694__auto___28407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto___28407,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto___28407,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28344){
var state_val_28345 = (state_28344[(1)]);
if((state_val_28345 === (7))){
var inst_28262 = (state_28344[(2)]);
var state_28344__$1 = state_28344;
var statearr_28346_28408 = state_28344__$1;
(statearr_28346_28408[(2)] = inst_28262);

(statearr_28346_28408[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (20))){
var inst_28274 = (state_28344[(7)]);
var state_28344__$1 = state_28344;
var statearr_28347_28409 = state_28344__$1;
(statearr_28347_28409[(2)] = inst_28274);

(statearr_28347_28409[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (27))){
var state_28344__$1 = state_28344;
var statearr_28348_28410 = state_28344__$1;
(statearr_28348_28410[(2)] = null);

(statearr_28348_28410[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (1))){
var inst_28250 = (state_28344[(8)]);
var inst_28250__$1 = calc_state.call(null);
var inst_28252 = (inst_28250__$1 == null);
var inst_28253 = cljs.core.not.call(null,inst_28252);
var state_28344__$1 = (function (){var statearr_28349 = state_28344;
(statearr_28349[(8)] = inst_28250__$1);

return statearr_28349;
})();
if(inst_28253){
var statearr_28350_28411 = state_28344__$1;
(statearr_28350_28411[(1)] = (2));

} else {
var statearr_28351_28412 = state_28344__$1;
(statearr_28351_28412[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (24))){
var inst_28318 = (state_28344[(9)]);
var inst_28297 = (state_28344[(10)]);
var inst_28304 = (state_28344[(11)]);
var inst_28318__$1 = inst_28297.call(null,inst_28304);
var state_28344__$1 = (function (){var statearr_28352 = state_28344;
(statearr_28352[(9)] = inst_28318__$1);

return statearr_28352;
})();
if(cljs.core.truth_(inst_28318__$1)){
var statearr_28353_28413 = state_28344__$1;
(statearr_28353_28413[(1)] = (29));

} else {
var statearr_28354_28414 = state_28344__$1;
(statearr_28354_28414[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (4))){
var inst_28265 = (state_28344[(2)]);
var state_28344__$1 = state_28344;
if(cljs.core.truth_(inst_28265)){
var statearr_28355_28415 = state_28344__$1;
(statearr_28355_28415[(1)] = (8));

} else {
var statearr_28356_28416 = state_28344__$1;
(statearr_28356_28416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (15))){
var inst_28291 = (state_28344[(2)]);
var state_28344__$1 = state_28344;
if(cljs.core.truth_(inst_28291)){
var statearr_28357_28417 = state_28344__$1;
(statearr_28357_28417[(1)] = (19));

} else {
var statearr_28358_28418 = state_28344__$1;
(statearr_28358_28418[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (21))){
var inst_28296 = (state_28344[(12)]);
var inst_28296__$1 = (state_28344[(2)]);
var inst_28297 = cljs.core.get.call(null,inst_28296__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28298 = cljs.core.get.call(null,inst_28296__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28299 = cljs.core.get.call(null,inst_28296__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28344__$1 = (function (){var statearr_28359 = state_28344;
(statearr_28359[(12)] = inst_28296__$1);

(statearr_28359[(10)] = inst_28297);

(statearr_28359[(13)] = inst_28298);

return statearr_28359;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28344__$1,(22),inst_28299);
} else {
if((state_val_28345 === (31))){
var inst_28326 = (state_28344[(2)]);
var state_28344__$1 = state_28344;
if(cljs.core.truth_(inst_28326)){
var statearr_28360_28419 = state_28344__$1;
(statearr_28360_28419[(1)] = (32));

} else {
var statearr_28361_28420 = state_28344__$1;
(statearr_28361_28420[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (32))){
var inst_28303 = (state_28344[(14)]);
var state_28344__$1 = state_28344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28344__$1,(35),out,inst_28303);
} else {
if((state_val_28345 === (33))){
var inst_28296 = (state_28344[(12)]);
var inst_28274 = inst_28296;
var state_28344__$1 = (function (){var statearr_28362 = state_28344;
(statearr_28362[(7)] = inst_28274);

return statearr_28362;
})();
var statearr_28363_28421 = state_28344__$1;
(statearr_28363_28421[(2)] = null);

(statearr_28363_28421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (13))){
var inst_28274 = (state_28344[(7)]);
var inst_28281 = inst_28274.cljs$lang$protocol_mask$partition0$;
var inst_28282 = (inst_28281 & (64));
var inst_28283 = inst_28274.cljs$core$ISeq$;
var inst_28284 = (inst_28282) || (inst_28283);
var state_28344__$1 = state_28344;
if(cljs.core.truth_(inst_28284)){
var statearr_28364_28422 = state_28344__$1;
(statearr_28364_28422[(1)] = (16));

} else {
var statearr_28365_28423 = state_28344__$1;
(statearr_28365_28423[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (22))){
var inst_28304 = (state_28344[(11)]);
var inst_28303 = (state_28344[(14)]);
var inst_28302 = (state_28344[(2)]);
var inst_28303__$1 = cljs.core.nth.call(null,inst_28302,(0),null);
var inst_28304__$1 = cljs.core.nth.call(null,inst_28302,(1),null);
var inst_28305 = (inst_28303__$1 == null);
var inst_28306 = cljs.core._EQ_.call(null,inst_28304__$1,change);
var inst_28307 = (inst_28305) || (inst_28306);
var state_28344__$1 = (function (){var statearr_28366 = state_28344;
(statearr_28366[(11)] = inst_28304__$1);

(statearr_28366[(14)] = inst_28303__$1);

return statearr_28366;
})();
if(cljs.core.truth_(inst_28307)){
var statearr_28367_28424 = state_28344__$1;
(statearr_28367_28424[(1)] = (23));

} else {
var statearr_28368_28425 = state_28344__$1;
(statearr_28368_28425[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (36))){
var inst_28296 = (state_28344[(12)]);
var inst_28274 = inst_28296;
var state_28344__$1 = (function (){var statearr_28369 = state_28344;
(statearr_28369[(7)] = inst_28274);

return statearr_28369;
})();
var statearr_28370_28426 = state_28344__$1;
(statearr_28370_28426[(2)] = null);

(statearr_28370_28426[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (29))){
var inst_28318 = (state_28344[(9)]);
var state_28344__$1 = state_28344;
var statearr_28371_28427 = state_28344__$1;
(statearr_28371_28427[(2)] = inst_28318);

(statearr_28371_28427[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (6))){
var state_28344__$1 = state_28344;
var statearr_28372_28428 = state_28344__$1;
(statearr_28372_28428[(2)] = false);

(statearr_28372_28428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (28))){
var inst_28314 = (state_28344[(2)]);
var inst_28315 = calc_state.call(null);
var inst_28274 = inst_28315;
var state_28344__$1 = (function (){var statearr_28373 = state_28344;
(statearr_28373[(15)] = inst_28314);

(statearr_28373[(7)] = inst_28274);

return statearr_28373;
})();
var statearr_28374_28429 = state_28344__$1;
(statearr_28374_28429[(2)] = null);

(statearr_28374_28429[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (25))){
var inst_28340 = (state_28344[(2)]);
var state_28344__$1 = state_28344;
var statearr_28375_28430 = state_28344__$1;
(statearr_28375_28430[(2)] = inst_28340);

(statearr_28375_28430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (34))){
var inst_28338 = (state_28344[(2)]);
var state_28344__$1 = state_28344;
var statearr_28376_28431 = state_28344__$1;
(statearr_28376_28431[(2)] = inst_28338);

(statearr_28376_28431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (17))){
var state_28344__$1 = state_28344;
var statearr_28377_28432 = state_28344__$1;
(statearr_28377_28432[(2)] = false);

(statearr_28377_28432[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (3))){
var state_28344__$1 = state_28344;
var statearr_28378_28433 = state_28344__$1;
(statearr_28378_28433[(2)] = false);

(statearr_28378_28433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (12))){
var inst_28342 = (state_28344[(2)]);
var state_28344__$1 = state_28344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28344__$1,inst_28342);
} else {
if((state_val_28345 === (2))){
var inst_28250 = (state_28344[(8)]);
var inst_28255 = inst_28250.cljs$lang$protocol_mask$partition0$;
var inst_28256 = (inst_28255 & (64));
var inst_28257 = inst_28250.cljs$core$ISeq$;
var inst_28258 = (inst_28256) || (inst_28257);
var state_28344__$1 = state_28344;
if(cljs.core.truth_(inst_28258)){
var statearr_28379_28434 = state_28344__$1;
(statearr_28379_28434[(1)] = (5));

} else {
var statearr_28380_28435 = state_28344__$1;
(statearr_28380_28435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (23))){
var inst_28303 = (state_28344[(14)]);
var inst_28309 = (inst_28303 == null);
var state_28344__$1 = state_28344;
if(cljs.core.truth_(inst_28309)){
var statearr_28381_28436 = state_28344__$1;
(statearr_28381_28436[(1)] = (26));

} else {
var statearr_28382_28437 = state_28344__$1;
(statearr_28382_28437[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (35))){
var inst_28329 = (state_28344[(2)]);
var state_28344__$1 = state_28344;
if(cljs.core.truth_(inst_28329)){
var statearr_28383_28438 = state_28344__$1;
(statearr_28383_28438[(1)] = (36));

} else {
var statearr_28384_28439 = state_28344__$1;
(statearr_28384_28439[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (19))){
var inst_28274 = (state_28344[(7)]);
var inst_28293 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28274);
var state_28344__$1 = state_28344;
var statearr_28385_28440 = state_28344__$1;
(statearr_28385_28440[(2)] = inst_28293);

(statearr_28385_28440[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (11))){
var inst_28274 = (state_28344[(7)]);
var inst_28278 = (inst_28274 == null);
var inst_28279 = cljs.core.not.call(null,inst_28278);
var state_28344__$1 = state_28344;
if(inst_28279){
var statearr_28386_28441 = state_28344__$1;
(statearr_28386_28441[(1)] = (13));

} else {
var statearr_28387_28442 = state_28344__$1;
(statearr_28387_28442[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (9))){
var inst_28250 = (state_28344[(8)]);
var state_28344__$1 = state_28344;
var statearr_28388_28443 = state_28344__$1;
(statearr_28388_28443[(2)] = inst_28250);

(statearr_28388_28443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (5))){
var state_28344__$1 = state_28344;
var statearr_28389_28444 = state_28344__$1;
(statearr_28389_28444[(2)] = true);

(statearr_28389_28444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (14))){
var state_28344__$1 = state_28344;
var statearr_28390_28445 = state_28344__$1;
(statearr_28390_28445[(2)] = false);

(statearr_28390_28445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (26))){
var inst_28304 = (state_28344[(11)]);
var inst_28311 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28304);
var state_28344__$1 = state_28344;
var statearr_28391_28446 = state_28344__$1;
(statearr_28391_28446[(2)] = inst_28311);

(statearr_28391_28446[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (16))){
var state_28344__$1 = state_28344;
var statearr_28392_28447 = state_28344__$1;
(statearr_28392_28447[(2)] = true);

(statearr_28392_28447[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (38))){
var inst_28334 = (state_28344[(2)]);
var state_28344__$1 = state_28344;
var statearr_28393_28448 = state_28344__$1;
(statearr_28393_28448[(2)] = inst_28334);

(statearr_28393_28448[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (30))){
var inst_28297 = (state_28344[(10)]);
var inst_28304 = (state_28344[(11)]);
var inst_28298 = (state_28344[(13)]);
var inst_28321 = cljs.core.empty_QMARK_.call(null,inst_28297);
var inst_28322 = inst_28298.call(null,inst_28304);
var inst_28323 = cljs.core.not.call(null,inst_28322);
var inst_28324 = (inst_28321) && (inst_28323);
var state_28344__$1 = state_28344;
var statearr_28394_28449 = state_28344__$1;
(statearr_28394_28449[(2)] = inst_28324);

(statearr_28394_28449[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (10))){
var inst_28250 = (state_28344[(8)]);
var inst_28270 = (state_28344[(2)]);
var inst_28271 = cljs.core.get.call(null,inst_28270,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28272 = cljs.core.get.call(null,inst_28270,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28273 = cljs.core.get.call(null,inst_28270,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28274 = inst_28250;
var state_28344__$1 = (function (){var statearr_28395 = state_28344;
(statearr_28395[(16)] = inst_28273);

(statearr_28395[(17)] = inst_28271);

(statearr_28395[(18)] = inst_28272);

(statearr_28395[(7)] = inst_28274);

return statearr_28395;
})();
var statearr_28396_28450 = state_28344__$1;
(statearr_28396_28450[(2)] = null);

(statearr_28396_28450[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (18))){
var inst_28288 = (state_28344[(2)]);
var state_28344__$1 = state_28344;
var statearr_28397_28451 = state_28344__$1;
(statearr_28397_28451[(2)] = inst_28288);

(statearr_28397_28451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (37))){
var state_28344__$1 = state_28344;
var statearr_28398_28452 = state_28344__$1;
(statearr_28398_28452[(2)] = null);

(statearr_28398_28452[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28345 === (8))){
var inst_28250 = (state_28344[(8)]);
var inst_28267 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28250);
var state_28344__$1 = state_28344;
var statearr_28399_28453 = state_28344__$1;
(statearr_28399_28453[(2)] = inst_28267);

(statearr_28399_28453[(1)] = (10));


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
});})(c__26694__auto___28407,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26582__auto__,c__26694__auto___28407,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26583__auto__ = null;
var cljs$core$async$mix_$_state_machine__26583__auto____0 = (function (){
var statearr_28403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28403[(0)] = cljs$core$async$mix_$_state_machine__26583__auto__);

(statearr_28403[(1)] = (1));

return statearr_28403;
});
var cljs$core$async$mix_$_state_machine__26583__auto____1 = (function (state_28344){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_28344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e28404){if((e28404 instanceof Object)){
var ex__26586__auto__ = e28404;
var statearr_28405_28454 = state_28344;
(statearr_28405_28454[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28455 = state_28344;
state_28344 = G__28455;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26583__auto__ = function(state_28344){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26583__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26583__auto____1.call(this,state_28344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26583__auto____0;
cljs$core$async$mix_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26583__auto____1;
return cljs$core$async$mix_$_state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto___28407,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26696__auto__ = (function (){var statearr_28406 = f__26695__auto__.call(null);
(statearr_28406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto___28407);

return statearr_28406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto___28407,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__23226__auto__ = (((p == null))?null:p);
var m__23227__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__23226__auto__)]);
if(!((m__23227__auto__ == null))){
return m__23227__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__23227__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__23227__auto____$1 == null))){
return m__23227__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__23226__auto__ = (((p == null))?null:p);
var m__23227__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__23226__auto__)]);
if(!((m__23227__auto__ == null))){
return m__23227__auto__.call(null,p,v,ch);
} else {
var m__23227__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__23227__auto____$1 == null))){
return m__23227__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28456 = [];
var len__23633__auto___28459 = arguments.length;
var i__23634__auto___28460 = (0);
while(true){
if((i__23634__auto___28460 < len__23633__auto___28459)){
args28456.push((arguments[i__23634__auto___28460]));

var G__28461 = (i__23634__auto___28460 + (1));
i__23634__auto___28460 = G__28461;
continue;
} else {
}
break;
}

var G__28458 = args28456.length;
switch (G__28458) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28456.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__23226__auto__ = (((p == null))?null:p);
var m__23227__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23226__auto__)]);
if(!((m__23227__auto__ == null))){
return m__23227__auto__.call(null,p);
} else {
var m__23227__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__23227__auto____$1 == null))){
return m__23227__auto____$1.call(null,p);
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
var x__23226__auto__ = (((p == null))?null:p);
var m__23227__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23226__auto__)]);
if(!((m__23227__auto__ == null))){
return m__23227__auto__.call(null,p,v);
} else {
var m__23227__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__23227__auto____$1 == null))){
return m__23227__auto____$1.call(null,p,v);
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
var args28464 = [];
var len__23633__auto___28589 = arguments.length;
var i__23634__auto___28590 = (0);
while(true){
if((i__23634__auto___28590 < len__23633__auto___28589)){
args28464.push((arguments[i__23634__auto___28590]));

var G__28591 = (i__23634__auto___28590 + (1));
i__23634__auto___28590 = G__28591;
continue;
} else {
}
break;
}

var G__28466 = args28464.length;
switch (G__28466) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28464.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__22563__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__22563__auto__)){
return or__22563__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__22563__auto__,mults){
return (function (p1__28463_SHARP_){
if(cljs.core.truth_(p1__28463_SHARP_.call(null,topic))){
return p1__28463_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28463_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__22563__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28467 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28467 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28468){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28468 = meta28468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28469,meta28468__$1){
var self__ = this;
var _28469__$1 = this;
return (new cljs.core.async.t_cljs$core$async28467(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28468__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28469){
var self__ = this;
var _28469__$1 = this;
return self__.meta28468;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28467.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28467.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28468","meta28468",-626638101,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28467.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28467";

cljs.core.async.t_cljs$core$async28467.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__23169__auto__,writer__23170__auto__,opt__23171__auto__){
return cljs.core._write.call(null,writer__23170__auto__,"cljs.core.async/t_cljs$core$async28467");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28467 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28467(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28468){
return (new cljs.core.async.t_cljs$core$async28467(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28468));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28467(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26694__auto___28593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto___28593,mults,ensure_mult,p){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto___28593,mults,ensure_mult,p){
return (function (state_28541){
var state_val_28542 = (state_28541[(1)]);
if((state_val_28542 === (7))){
var inst_28537 = (state_28541[(2)]);
var state_28541__$1 = state_28541;
var statearr_28543_28594 = state_28541__$1;
(statearr_28543_28594[(2)] = inst_28537);

(statearr_28543_28594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (20))){
var state_28541__$1 = state_28541;
var statearr_28544_28595 = state_28541__$1;
(statearr_28544_28595[(2)] = null);

(statearr_28544_28595[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (1))){
var state_28541__$1 = state_28541;
var statearr_28545_28596 = state_28541__$1;
(statearr_28545_28596[(2)] = null);

(statearr_28545_28596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (24))){
var inst_28520 = (state_28541[(7)]);
var inst_28529 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28520);
var state_28541__$1 = state_28541;
var statearr_28546_28597 = state_28541__$1;
(statearr_28546_28597[(2)] = inst_28529);

(statearr_28546_28597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (4))){
var inst_28472 = (state_28541[(8)]);
var inst_28472__$1 = (state_28541[(2)]);
var inst_28473 = (inst_28472__$1 == null);
var state_28541__$1 = (function (){var statearr_28547 = state_28541;
(statearr_28547[(8)] = inst_28472__$1);

return statearr_28547;
})();
if(cljs.core.truth_(inst_28473)){
var statearr_28548_28598 = state_28541__$1;
(statearr_28548_28598[(1)] = (5));

} else {
var statearr_28549_28599 = state_28541__$1;
(statearr_28549_28599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (15))){
var inst_28514 = (state_28541[(2)]);
var state_28541__$1 = state_28541;
var statearr_28550_28600 = state_28541__$1;
(statearr_28550_28600[(2)] = inst_28514);

(statearr_28550_28600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (21))){
var inst_28534 = (state_28541[(2)]);
var state_28541__$1 = (function (){var statearr_28551 = state_28541;
(statearr_28551[(9)] = inst_28534);

return statearr_28551;
})();
var statearr_28552_28601 = state_28541__$1;
(statearr_28552_28601[(2)] = null);

(statearr_28552_28601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (13))){
var inst_28496 = (state_28541[(10)]);
var inst_28498 = cljs.core.chunked_seq_QMARK_.call(null,inst_28496);
var state_28541__$1 = state_28541;
if(inst_28498){
var statearr_28553_28602 = state_28541__$1;
(statearr_28553_28602[(1)] = (16));

} else {
var statearr_28554_28603 = state_28541__$1;
(statearr_28554_28603[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (22))){
var inst_28526 = (state_28541[(2)]);
var state_28541__$1 = state_28541;
if(cljs.core.truth_(inst_28526)){
var statearr_28555_28604 = state_28541__$1;
(statearr_28555_28604[(1)] = (23));

} else {
var statearr_28556_28605 = state_28541__$1;
(statearr_28556_28605[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (6))){
var inst_28522 = (state_28541[(11)]);
var inst_28520 = (state_28541[(7)]);
var inst_28472 = (state_28541[(8)]);
var inst_28520__$1 = topic_fn.call(null,inst_28472);
var inst_28521 = cljs.core.deref.call(null,mults);
var inst_28522__$1 = cljs.core.get.call(null,inst_28521,inst_28520__$1);
var state_28541__$1 = (function (){var statearr_28557 = state_28541;
(statearr_28557[(11)] = inst_28522__$1);

(statearr_28557[(7)] = inst_28520__$1);

return statearr_28557;
})();
if(cljs.core.truth_(inst_28522__$1)){
var statearr_28558_28606 = state_28541__$1;
(statearr_28558_28606[(1)] = (19));

} else {
var statearr_28559_28607 = state_28541__$1;
(statearr_28559_28607[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (25))){
var inst_28531 = (state_28541[(2)]);
var state_28541__$1 = state_28541;
var statearr_28560_28608 = state_28541__$1;
(statearr_28560_28608[(2)] = inst_28531);

(statearr_28560_28608[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (17))){
var inst_28496 = (state_28541[(10)]);
var inst_28505 = cljs.core.first.call(null,inst_28496);
var inst_28506 = cljs.core.async.muxch_STAR_.call(null,inst_28505);
var inst_28507 = cljs.core.async.close_BANG_.call(null,inst_28506);
var inst_28508 = cljs.core.next.call(null,inst_28496);
var inst_28482 = inst_28508;
var inst_28483 = null;
var inst_28484 = (0);
var inst_28485 = (0);
var state_28541__$1 = (function (){var statearr_28561 = state_28541;
(statearr_28561[(12)] = inst_28507);

(statearr_28561[(13)] = inst_28484);

(statearr_28561[(14)] = inst_28485);

(statearr_28561[(15)] = inst_28483);

(statearr_28561[(16)] = inst_28482);

return statearr_28561;
})();
var statearr_28562_28609 = state_28541__$1;
(statearr_28562_28609[(2)] = null);

(statearr_28562_28609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (3))){
var inst_28539 = (state_28541[(2)]);
var state_28541__$1 = state_28541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28541__$1,inst_28539);
} else {
if((state_val_28542 === (12))){
var inst_28516 = (state_28541[(2)]);
var state_28541__$1 = state_28541;
var statearr_28563_28610 = state_28541__$1;
(statearr_28563_28610[(2)] = inst_28516);

(statearr_28563_28610[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (2))){
var state_28541__$1 = state_28541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28541__$1,(4),ch);
} else {
if((state_val_28542 === (23))){
var state_28541__$1 = state_28541;
var statearr_28564_28611 = state_28541__$1;
(statearr_28564_28611[(2)] = null);

(statearr_28564_28611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (19))){
var inst_28522 = (state_28541[(11)]);
var inst_28472 = (state_28541[(8)]);
var inst_28524 = cljs.core.async.muxch_STAR_.call(null,inst_28522);
var state_28541__$1 = state_28541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28541__$1,(22),inst_28524,inst_28472);
} else {
if((state_val_28542 === (11))){
var inst_28482 = (state_28541[(16)]);
var inst_28496 = (state_28541[(10)]);
var inst_28496__$1 = cljs.core.seq.call(null,inst_28482);
var state_28541__$1 = (function (){var statearr_28565 = state_28541;
(statearr_28565[(10)] = inst_28496__$1);

return statearr_28565;
})();
if(inst_28496__$1){
var statearr_28566_28612 = state_28541__$1;
(statearr_28566_28612[(1)] = (13));

} else {
var statearr_28567_28613 = state_28541__$1;
(statearr_28567_28613[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (9))){
var inst_28518 = (state_28541[(2)]);
var state_28541__$1 = state_28541;
var statearr_28568_28614 = state_28541__$1;
(statearr_28568_28614[(2)] = inst_28518);

(statearr_28568_28614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (5))){
var inst_28479 = cljs.core.deref.call(null,mults);
var inst_28480 = cljs.core.vals.call(null,inst_28479);
var inst_28481 = cljs.core.seq.call(null,inst_28480);
var inst_28482 = inst_28481;
var inst_28483 = null;
var inst_28484 = (0);
var inst_28485 = (0);
var state_28541__$1 = (function (){var statearr_28569 = state_28541;
(statearr_28569[(13)] = inst_28484);

(statearr_28569[(14)] = inst_28485);

(statearr_28569[(15)] = inst_28483);

(statearr_28569[(16)] = inst_28482);

return statearr_28569;
})();
var statearr_28570_28615 = state_28541__$1;
(statearr_28570_28615[(2)] = null);

(statearr_28570_28615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (14))){
var state_28541__$1 = state_28541;
var statearr_28574_28616 = state_28541__$1;
(statearr_28574_28616[(2)] = null);

(statearr_28574_28616[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (16))){
var inst_28496 = (state_28541[(10)]);
var inst_28500 = cljs.core.chunk_first.call(null,inst_28496);
var inst_28501 = cljs.core.chunk_rest.call(null,inst_28496);
var inst_28502 = cljs.core.count.call(null,inst_28500);
var inst_28482 = inst_28501;
var inst_28483 = inst_28500;
var inst_28484 = inst_28502;
var inst_28485 = (0);
var state_28541__$1 = (function (){var statearr_28575 = state_28541;
(statearr_28575[(13)] = inst_28484);

(statearr_28575[(14)] = inst_28485);

(statearr_28575[(15)] = inst_28483);

(statearr_28575[(16)] = inst_28482);

return statearr_28575;
})();
var statearr_28576_28617 = state_28541__$1;
(statearr_28576_28617[(2)] = null);

(statearr_28576_28617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (10))){
var inst_28484 = (state_28541[(13)]);
var inst_28485 = (state_28541[(14)]);
var inst_28483 = (state_28541[(15)]);
var inst_28482 = (state_28541[(16)]);
var inst_28490 = cljs.core._nth.call(null,inst_28483,inst_28485);
var inst_28491 = cljs.core.async.muxch_STAR_.call(null,inst_28490);
var inst_28492 = cljs.core.async.close_BANG_.call(null,inst_28491);
var inst_28493 = (inst_28485 + (1));
var tmp28571 = inst_28484;
var tmp28572 = inst_28483;
var tmp28573 = inst_28482;
var inst_28482__$1 = tmp28573;
var inst_28483__$1 = tmp28572;
var inst_28484__$1 = tmp28571;
var inst_28485__$1 = inst_28493;
var state_28541__$1 = (function (){var statearr_28577 = state_28541;
(statearr_28577[(13)] = inst_28484__$1);

(statearr_28577[(14)] = inst_28485__$1);

(statearr_28577[(15)] = inst_28483__$1);

(statearr_28577[(16)] = inst_28482__$1);

(statearr_28577[(17)] = inst_28492);

return statearr_28577;
})();
var statearr_28578_28618 = state_28541__$1;
(statearr_28578_28618[(2)] = null);

(statearr_28578_28618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (18))){
var inst_28511 = (state_28541[(2)]);
var state_28541__$1 = state_28541;
var statearr_28579_28619 = state_28541__$1;
(statearr_28579_28619[(2)] = inst_28511);

(statearr_28579_28619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (8))){
var inst_28484 = (state_28541[(13)]);
var inst_28485 = (state_28541[(14)]);
var inst_28487 = (inst_28485 < inst_28484);
var inst_28488 = inst_28487;
var state_28541__$1 = state_28541;
if(cljs.core.truth_(inst_28488)){
var statearr_28580_28620 = state_28541__$1;
(statearr_28580_28620[(1)] = (10));

} else {
var statearr_28581_28621 = state_28541__$1;
(statearr_28581_28621[(1)] = (11));

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
});})(c__26694__auto___28593,mults,ensure_mult,p))
;
return ((function (switch__26582__auto__,c__26694__auto___28593,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26583__auto__ = null;
var cljs$core$async$state_machine__26583__auto____0 = (function (){
var statearr_28585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28585[(0)] = cljs$core$async$state_machine__26583__auto__);

(statearr_28585[(1)] = (1));

return statearr_28585;
});
var cljs$core$async$state_machine__26583__auto____1 = (function (state_28541){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_28541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e28586){if((e28586 instanceof Object)){
var ex__26586__auto__ = e28586;
var statearr_28587_28622 = state_28541;
(statearr_28587_28622[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28623 = state_28541;
state_28541 = G__28623;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
cljs$core$async$state_machine__26583__auto__ = function(state_28541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26583__auto____1.call(this,state_28541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26583__auto____0;
cljs$core$async$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26583__auto____1;
return cljs$core$async$state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto___28593,mults,ensure_mult,p))
})();
var state__26696__auto__ = (function (){var statearr_28588 = f__26695__auto__.call(null);
(statearr_28588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto___28593);

return statearr_28588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto___28593,mults,ensure_mult,p))
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
var args28624 = [];
var len__23633__auto___28627 = arguments.length;
var i__23634__auto___28628 = (0);
while(true){
if((i__23634__auto___28628 < len__23633__auto___28627)){
args28624.push((arguments[i__23634__auto___28628]));

var G__28629 = (i__23634__auto___28628 + (1));
i__23634__auto___28628 = G__28629;
continue;
} else {
}
break;
}

var G__28626 = args28624.length;
switch (G__28626) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28624.length)].join('')));

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
var args28631 = [];
var len__23633__auto___28634 = arguments.length;
var i__23634__auto___28635 = (0);
while(true){
if((i__23634__auto___28635 < len__23633__auto___28634)){
args28631.push((arguments[i__23634__auto___28635]));

var G__28636 = (i__23634__auto___28635 + (1));
i__23634__auto___28635 = G__28636;
continue;
} else {
}
break;
}

var G__28633 = args28631.length;
switch (G__28633) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28631.length)].join('')));

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
var args28638 = [];
var len__23633__auto___28709 = arguments.length;
var i__23634__auto___28710 = (0);
while(true){
if((i__23634__auto___28710 < len__23633__auto___28709)){
args28638.push((arguments[i__23634__auto___28710]));

var G__28711 = (i__23634__auto___28710 + (1));
i__23634__auto___28710 = G__28711;
continue;
} else {
}
break;
}

var G__28640 = args28638.length;
switch (G__28640) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28638.length)].join('')));

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
var c__26694__auto___28713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto___28713,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto___28713,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28679){
var state_val_28680 = (state_28679[(1)]);
if((state_val_28680 === (7))){
var state_28679__$1 = state_28679;
var statearr_28681_28714 = state_28679__$1;
(statearr_28681_28714[(2)] = null);

(statearr_28681_28714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28680 === (1))){
var state_28679__$1 = state_28679;
var statearr_28682_28715 = state_28679__$1;
(statearr_28682_28715[(2)] = null);

(statearr_28682_28715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28680 === (4))){
var inst_28643 = (state_28679[(7)]);
var inst_28645 = (inst_28643 < cnt);
var state_28679__$1 = state_28679;
if(cljs.core.truth_(inst_28645)){
var statearr_28683_28716 = state_28679__$1;
(statearr_28683_28716[(1)] = (6));

} else {
var statearr_28684_28717 = state_28679__$1;
(statearr_28684_28717[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28680 === (15))){
var inst_28675 = (state_28679[(2)]);
var state_28679__$1 = state_28679;
var statearr_28685_28718 = state_28679__$1;
(statearr_28685_28718[(2)] = inst_28675);

(statearr_28685_28718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28680 === (13))){
var inst_28668 = cljs.core.async.close_BANG_.call(null,out);
var state_28679__$1 = state_28679;
var statearr_28686_28719 = state_28679__$1;
(statearr_28686_28719[(2)] = inst_28668);

(statearr_28686_28719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28680 === (6))){
var state_28679__$1 = state_28679;
var statearr_28687_28720 = state_28679__$1;
(statearr_28687_28720[(2)] = null);

(statearr_28687_28720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28680 === (3))){
var inst_28677 = (state_28679[(2)]);
var state_28679__$1 = state_28679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28679__$1,inst_28677);
} else {
if((state_val_28680 === (12))){
var inst_28665 = (state_28679[(8)]);
var inst_28665__$1 = (state_28679[(2)]);
var inst_28666 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28665__$1);
var state_28679__$1 = (function (){var statearr_28688 = state_28679;
(statearr_28688[(8)] = inst_28665__$1);

return statearr_28688;
})();
if(cljs.core.truth_(inst_28666)){
var statearr_28689_28721 = state_28679__$1;
(statearr_28689_28721[(1)] = (13));

} else {
var statearr_28690_28722 = state_28679__$1;
(statearr_28690_28722[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28680 === (2))){
var inst_28642 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28643 = (0);
var state_28679__$1 = (function (){var statearr_28691 = state_28679;
(statearr_28691[(9)] = inst_28642);

(statearr_28691[(7)] = inst_28643);

return statearr_28691;
})();
var statearr_28692_28723 = state_28679__$1;
(statearr_28692_28723[(2)] = null);

(statearr_28692_28723[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28680 === (11))){
var inst_28643 = (state_28679[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28679,(10),Object,null,(9));
var inst_28652 = chs__$1.call(null,inst_28643);
var inst_28653 = done.call(null,inst_28643);
var inst_28654 = cljs.core.async.take_BANG_.call(null,inst_28652,inst_28653);
var state_28679__$1 = state_28679;
var statearr_28693_28724 = state_28679__$1;
(statearr_28693_28724[(2)] = inst_28654);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28679__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28680 === (9))){
var inst_28643 = (state_28679[(7)]);
var inst_28656 = (state_28679[(2)]);
var inst_28657 = (inst_28643 + (1));
var inst_28643__$1 = inst_28657;
var state_28679__$1 = (function (){var statearr_28694 = state_28679;
(statearr_28694[(7)] = inst_28643__$1);

(statearr_28694[(10)] = inst_28656);

return statearr_28694;
})();
var statearr_28695_28725 = state_28679__$1;
(statearr_28695_28725[(2)] = null);

(statearr_28695_28725[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28680 === (5))){
var inst_28663 = (state_28679[(2)]);
var state_28679__$1 = (function (){var statearr_28696 = state_28679;
(statearr_28696[(11)] = inst_28663);

return statearr_28696;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28679__$1,(12),dchan);
} else {
if((state_val_28680 === (14))){
var inst_28665 = (state_28679[(8)]);
var inst_28670 = cljs.core.apply.call(null,f,inst_28665);
var state_28679__$1 = state_28679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28679__$1,(16),out,inst_28670);
} else {
if((state_val_28680 === (16))){
var inst_28672 = (state_28679[(2)]);
var state_28679__$1 = (function (){var statearr_28697 = state_28679;
(statearr_28697[(12)] = inst_28672);

return statearr_28697;
})();
var statearr_28698_28726 = state_28679__$1;
(statearr_28698_28726[(2)] = null);

(statearr_28698_28726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28680 === (10))){
var inst_28647 = (state_28679[(2)]);
var inst_28648 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28679__$1 = (function (){var statearr_28699 = state_28679;
(statearr_28699[(13)] = inst_28647);

return statearr_28699;
})();
var statearr_28700_28727 = state_28679__$1;
(statearr_28700_28727[(2)] = inst_28648);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28679__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28680 === (8))){
var inst_28661 = (state_28679[(2)]);
var state_28679__$1 = state_28679;
var statearr_28701_28728 = state_28679__$1;
(statearr_28701_28728[(2)] = inst_28661);

(statearr_28701_28728[(1)] = (5));


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
});})(c__26694__auto___28713,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26582__auto__,c__26694__auto___28713,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26583__auto__ = null;
var cljs$core$async$state_machine__26583__auto____0 = (function (){
var statearr_28705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28705[(0)] = cljs$core$async$state_machine__26583__auto__);

(statearr_28705[(1)] = (1));

return statearr_28705;
});
var cljs$core$async$state_machine__26583__auto____1 = (function (state_28679){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_28679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e28706){if((e28706 instanceof Object)){
var ex__26586__auto__ = e28706;
var statearr_28707_28729 = state_28679;
(statearr_28707_28729[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28730 = state_28679;
state_28679 = G__28730;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
cljs$core$async$state_machine__26583__auto__ = function(state_28679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26583__auto____1.call(this,state_28679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26583__auto____0;
cljs$core$async$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26583__auto____1;
return cljs$core$async$state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto___28713,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26696__auto__ = (function (){var statearr_28708 = f__26695__auto__.call(null);
(statearr_28708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto___28713);

return statearr_28708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto___28713,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args28732 = [];
var len__23633__auto___28788 = arguments.length;
var i__23634__auto___28789 = (0);
while(true){
if((i__23634__auto___28789 < len__23633__auto___28788)){
args28732.push((arguments[i__23634__auto___28789]));

var G__28790 = (i__23634__auto___28789 + (1));
i__23634__auto___28789 = G__28790;
continue;
} else {
}
break;
}

var G__28734 = args28732.length;
switch (G__28734) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28732.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26694__auto___28792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto___28792,out){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto___28792,out){
return (function (state_28764){
var state_val_28765 = (state_28764[(1)]);
if((state_val_28765 === (7))){
var inst_28743 = (state_28764[(7)]);
var inst_28744 = (state_28764[(8)]);
var inst_28743__$1 = (state_28764[(2)]);
var inst_28744__$1 = cljs.core.nth.call(null,inst_28743__$1,(0),null);
var inst_28745 = cljs.core.nth.call(null,inst_28743__$1,(1),null);
var inst_28746 = (inst_28744__$1 == null);
var state_28764__$1 = (function (){var statearr_28766 = state_28764;
(statearr_28766[(7)] = inst_28743__$1);

(statearr_28766[(8)] = inst_28744__$1);

(statearr_28766[(9)] = inst_28745);

return statearr_28766;
})();
if(cljs.core.truth_(inst_28746)){
var statearr_28767_28793 = state_28764__$1;
(statearr_28767_28793[(1)] = (8));

} else {
var statearr_28768_28794 = state_28764__$1;
(statearr_28768_28794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (1))){
var inst_28735 = cljs.core.vec.call(null,chs);
var inst_28736 = inst_28735;
var state_28764__$1 = (function (){var statearr_28769 = state_28764;
(statearr_28769[(10)] = inst_28736);

return statearr_28769;
})();
var statearr_28770_28795 = state_28764__$1;
(statearr_28770_28795[(2)] = null);

(statearr_28770_28795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (4))){
var inst_28736 = (state_28764[(10)]);
var state_28764__$1 = state_28764;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28764__$1,(7),inst_28736);
} else {
if((state_val_28765 === (6))){
var inst_28760 = (state_28764[(2)]);
var state_28764__$1 = state_28764;
var statearr_28771_28796 = state_28764__$1;
(statearr_28771_28796[(2)] = inst_28760);

(statearr_28771_28796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (3))){
var inst_28762 = (state_28764[(2)]);
var state_28764__$1 = state_28764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28764__$1,inst_28762);
} else {
if((state_val_28765 === (2))){
var inst_28736 = (state_28764[(10)]);
var inst_28738 = cljs.core.count.call(null,inst_28736);
var inst_28739 = (inst_28738 > (0));
var state_28764__$1 = state_28764;
if(cljs.core.truth_(inst_28739)){
var statearr_28773_28797 = state_28764__$1;
(statearr_28773_28797[(1)] = (4));

} else {
var statearr_28774_28798 = state_28764__$1;
(statearr_28774_28798[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (11))){
var inst_28736 = (state_28764[(10)]);
var inst_28753 = (state_28764[(2)]);
var tmp28772 = inst_28736;
var inst_28736__$1 = tmp28772;
var state_28764__$1 = (function (){var statearr_28775 = state_28764;
(statearr_28775[(10)] = inst_28736__$1);

(statearr_28775[(11)] = inst_28753);

return statearr_28775;
})();
var statearr_28776_28799 = state_28764__$1;
(statearr_28776_28799[(2)] = null);

(statearr_28776_28799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (9))){
var inst_28744 = (state_28764[(8)]);
var state_28764__$1 = state_28764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28764__$1,(11),out,inst_28744);
} else {
if((state_val_28765 === (5))){
var inst_28758 = cljs.core.async.close_BANG_.call(null,out);
var state_28764__$1 = state_28764;
var statearr_28777_28800 = state_28764__$1;
(statearr_28777_28800[(2)] = inst_28758);

(statearr_28777_28800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (10))){
var inst_28756 = (state_28764[(2)]);
var state_28764__$1 = state_28764;
var statearr_28778_28801 = state_28764__$1;
(statearr_28778_28801[(2)] = inst_28756);

(statearr_28778_28801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28765 === (8))){
var inst_28736 = (state_28764[(10)]);
var inst_28743 = (state_28764[(7)]);
var inst_28744 = (state_28764[(8)]);
var inst_28745 = (state_28764[(9)]);
var inst_28748 = (function (){var cs = inst_28736;
var vec__28741 = inst_28743;
var v = inst_28744;
var c = inst_28745;
return ((function (cs,vec__28741,v,c,inst_28736,inst_28743,inst_28744,inst_28745,state_val_28765,c__26694__auto___28792,out){
return (function (p1__28731_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28731_SHARP_);
});
;})(cs,vec__28741,v,c,inst_28736,inst_28743,inst_28744,inst_28745,state_val_28765,c__26694__auto___28792,out))
})();
var inst_28749 = cljs.core.filterv.call(null,inst_28748,inst_28736);
var inst_28736__$1 = inst_28749;
var state_28764__$1 = (function (){var statearr_28779 = state_28764;
(statearr_28779[(10)] = inst_28736__$1);

return statearr_28779;
})();
var statearr_28780_28802 = state_28764__$1;
(statearr_28780_28802[(2)] = null);

(statearr_28780_28802[(1)] = (2));


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
});})(c__26694__auto___28792,out))
;
return ((function (switch__26582__auto__,c__26694__auto___28792,out){
return (function() {
var cljs$core$async$state_machine__26583__auto__ = null;
var cljs$core$async$state_machine__26583__auto____0 = (function (){
var statearr_28784 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28784[(0)] = cljs$core$async$state_machine__26583__auto__);

(statearr_28784[(1)] = (1));

return statearr_28784;
});
var cljs$core$async$state_machine__26583__auto____1 = (function (state_28764){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_28764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e28785){if((e28785 instanceof Object)){
var ex__26586__auto__ = e28785;
var statearr_28786_28803 = state_28764;
(statearr_28786_28803[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28804 = state_28764;
state_28764 = G__28804;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
cljs$core$async$state_machine__26583__auto__ = function(state_28764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26583__auto____1.call(this,state_28764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26583__auto____0;
cljs$core$async$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26583__auto____1;
return cljs$core$async$state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto___28792,out))
})();
var state__26696__auto__ = (function (){var statearr_28787 = f__26695__auto__.call(null);
(statearr_28787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto___28792);

return statearr_28787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto___28792,out))
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
var args28805 = [];
var len__23633__auto___28854 = arguments.length;
var i__23634__auto___28855 = (0);
while(true){
if((i__23634__auto___28855 < len__23633__auto___28854)){
args28805.push((arguments[i__23634__auto___28855]));

var G__28856 = (i__23634__auto___28855 + (1));
i__23634__auto___28855 = G__28856;
continue;
} else {
}
break;
}

var G__28807 = args28805.length;
switch (G__28807) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28805.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26694__auto___28858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto___28858,out){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto___28858,out){
return (function (state_28831){
var state_val_28832 = (state_28831[(1)]);
if((state_val_28832 === (7))){
var inst_28813 = (state_28831[(7)]);
var inst_28813__$1 = (state_28831[(2)]);
var inst_28814 = (inst_28813__$1 == null);
var inst_28815 = cljs.core.not.call(null,inst_28814);
var state_28831__$1 = (function (){var statearr_28833 = state_28831;
(statearr_28833[(7)] = inst_28813__$1);

return statearr_28833;
})();
if(inst_28815){
var statearr_28834_28859 = state_28831__$1;
(statearr_28834_28859[(1)] = (8));

} else {
var statearr_28835_28860 = state_28831__$1;
(statearr_28835_28860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (1))){
var inst_28808 = (0);
var state_28831__$1 = (function (){var statearr_28836 = state_28831;
(statearr_28836[(8)] = inst_28808);

return statearr_28836;
})();
var statearr_28837_28861 = state_28831__$1;
(statearr_28837_28861[(2)] = null);

(statearr_28837_28861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (4))){
var state_28831__$1 = state_28831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28831__$1,(7),ch);
} else {
if((state_val_28832 === (6))){
var inst_28826 = (state_28831[(2)]);
var state_28831__$1 = state_28831;
var statearr_28838_28862 = state_28831__$1;
(statearr_28838_28862[(2)] = inst_28826);

(statearr_28838_28862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (3))){
var inst_28828 = (state_28831[(2)]);
var inst_28829 = cljs.core.async.close_BANG_.call(null,out);
var state_28831__$1 = (function (){var statearr_28839 = state_28831;
(statearr_28839[(9)] = inst_28828);

return statearr_28839;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28831__$1,inst_28829);
} else {
if((state_val_28832 === (2))){
var inst_28808 = (state_28831[(8)]);
var inst_28810 = (inst_28808 < n);
var state_28831__$1 = state_28831;
if(cljs.core.truth_(inst_28810)){
var statearr_28840_28863 = state_28831__$1;
(statearr_28840_28863[(1)] = (4));

} else {
var statearr_28841_28864 = state_28831__$1;
(statearr_28841_28864[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (11))){
var inst_28808 = (state_28831[(8)]);
var inst_28818 = (state_28831[(2)]);
var inst_28819 = (inst_28808 + (1));
var inst_28808__$1 = inst_28819;
var state_28831__$1 = (function (){var statearr_28842 = state_28831;
(statearr_28842[(10)] = inst_28818);

(statearr_28842[(8)] = inst_28808__$1);

return statearr_28842;
})();
var statearr_28843_28865 = state_28831__$1;
(statearr_28843_28865[(2)] = null);

(statearr_28843_28865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (9))){
var state_28831__$1 = state_28831;
var statearr_28844_28866 = state_28831__$1;
(statearr_28844_28866[(2)] = null);

(statearr_28844_28866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (5))){
var state_28831__$1 = state_28831;
var statearr_28845_28867 = state_28831__$1;
(statearr_28845_28867[(2)] = null);

(statearr_28845_28867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (10))){
var inst_28823 = (state_28831[(2)]);
var state_28831__$1 = state_28831;
var statearr_28846_28868 = state_28831__$1;
(statearr_28846_28868[(2)] = inst_28823);

(statearr_28846_28868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28832 === (8))){
var inst_28813 = (state_28831[(7)]);
var state_28831__$1 = state_28831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28831__$1,(11),out,inst_28813);
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
});})(c__26694__auto___28858,out))
;
return ((function (switch__26582__auto__,c__26694__auto___28858,out){
return (function() {
var cljs$core$async$state_machine__26583__auto__ = null;
var cljs$core$async$state_machine__26583__auto____0 = (function (){
var statearr_28850 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28850[(0)] = cljs$core$async$state_machine__26583__auto__);

(statearr_28850[(1)] = (1));

return statearr_28850;
});
var cljs$core$async$state_machine__26583__auto____1 = (function (state_28831){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_28831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e28851){if((e28851 instanceof Object)){
var ex__26586__auto__ = e28851;
var statearr_28852_28869 = state_28831;
(statearr_28852_28869[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28870 = state_28831;
state_28831 = G__28870;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
cljs$core$async$state_machine__26583__auto__ = function(state_28831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26583__auto____1.call(this,state_28831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26583__auto____0;
cljs$core$async$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26583__auto____1;
return cljs$core$async$state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto___28858,out))
})();
var state__26696__auto__ = (function (){var statearr_28853 = f__26695__auto__.call(null);
(statearr_28853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto___28858);

return statearr_28853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto___28858,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28878 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28878 = (function (map_LT_,f,ch,meta28879){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28879 = meta28879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28880,meta28879__$1){
var self__ = this;
var _28880__$1 = this;
return (new cljs.core.async.t_cljs$core$async28878(self__.map_LT_,self__.f,self__.ch,meta28879__$1));
});

cljs.core.async.t_cljs$core$async28878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28880){
var self__ = this;
var _28880__$1 = this;
return self__.meta28879;
});

cljs.core.async.t_cljs$core$async28878.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28878.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28878.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28878.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28878.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28881 = (function (map_LT_,f,ch,meta28879,_,fn1,meta28882){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28879 = meta28879;
this._ = _;
this.fn1 = fn1;
this.meta28882 = meta28882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28883,meta28882__$1){
var self__ = this;
var _28883__$1 = this;
return (new cljs.core.async.t_cljs$core$async28881(self__.map_LT_,self__.f,self__.ch,self__.meta28879,self__._,self__.fn1,meta28882__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28881.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28883){
var self__ = this;
var _28883__$1 = this;
return self__.meta28882;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28881.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28881.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28881.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28881.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28871_SHARP_){
return f1.call(null,(((p1__28871_SHARP_ == null))?null:self__.f.call(null,p1__28871_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28881.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28879","meta28879",1343581061,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28878","cljs.core.async/t_cljs$core$async28878",-579265754,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28882","meta28882",620730038,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28881.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28881";

cljs.core.async.t_cljs$core$async28881.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__23169__auto__,writer__23170__auto__,opt__23171__auto__){
return cljs.core._write.call(null,writer__23170__auto__,"cljs.core.async/t_cljs$core$async28881");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28881 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28881(map_LT___$1,f__$1,ch__$1,meta28879__$1,___$2,fn1__$1,meta28882){
return (new cljs.core.async.t_cljs$core$async28881(map_LT___$1,f__$1,ch__$1,meta28879__$1,___$2,fn1__$1,meta28882));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28881(self__.map_LT_,self__.f,self__.ch,self__.meta28879,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__22551__auto__ = ret;
if(cljs.core.truth_(and__22551__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__22551__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28878.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28878.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28878.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28879","meta28879",1343581061,null)], null);
});

cljs.core.async.t_cljs$core$async28878.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28878";

cljs.core.async.t_cljs$core$async28878.cljs$lang$ctorPrWriter = (function (this__23169__auto__,writer__23170__auto__,opt__23171__auto__){
return cljs.core._write.call(null,writer__23170__auto__,"cljs.core.async/t_cljs$core$async28878");
});

cljs.core.async.__GT_t_cljs$core$async28878 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28878(map_LT___$1,f__$1,ch__$1,meta28879){
return (new cljs.core.async.t_cljs$core$async28878(map_LT___$1,f__$1,ch__$1,meta28879));
});

}

return (new cljs.core.async.t_cljs$core$async28878(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28887 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28887 = (function (map_GT_,f,ch,meta28888){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28888 = meta28888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28889,meta28888__$1){
var self__ = this;
var _28889__$1 = this;
return (new cljs.core.async.t_cljs$core$async28887(self__.map_GT_,self__.f,self__.ch,meta28888__$1));
});

cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28889){
var self__ = this;
var _28889__$1 = this;
return self__.meta28888;
});

cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28888","meta28888",-887366168,null)], null);
});

cljs.core.async.t_cljs$core$async28887.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28887";

cljs.core.async.t_cljs$core$async28887.cljs$lang$ctorPrWriter = (function (this__23169__auto__,writer__23170__auto__,opt__23171__auto__){
return cljs.core._write.call(null,writer__23170__auto__,"cljs.core.async/t_cljs$core$async28887");
});

cljs.core.async.__GT_t_cljs$core$async28887 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28887(map_GT___$1,f__$1,ch__$1,meta28888){
return (new cljs.core.async.t_cljs$core$async28887(map_GT___$1,f__$1,ch__$1,meta28888));
});

}

return (new cljs.core.async.t_cljs$core$async28887(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28893 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28893 = (function (filter_GT_,p,ch,meta28894){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28894 = meta28894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28895,meta28894__$1){
var self__ = this;
var _28895__$1 = this;
return (new cljs.core.async.t_cljs$core$async28893(self__.filter_GT_,self__.p,self__.ch,meta28894__$1));
});

cljs.core.async.t_cljs$core$async28893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28895){
var self__ = this;
var _28895__$1 = this;
return self__.meta28894;
});

cljs.core.async.t_cljs$core$async28893.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28893.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28893.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28893.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28893.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28893.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28893.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28894","meta28894",-243330597,null)], null);
});

cljs.core.async.t_cljs$core$async28893.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28893";

cljs.core.async.t_cljs$core$async28893.cljs$lang$ctorPrWriter = (function (this__23169__auto__,writer__23170__auto__,opt__23171__auto__){
return cljs.core._write.call(null,writer__23170__auto__,"cljs.core.async/t_cljs$core$async28893");
});

cljs.core.async.__GT_t_cljs$core$async28893 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28893(filter_GT___$1,p__$1,ch__$1,meta28894){
return (new cljs.core.async.t_cljs$core$async28893(filter_GT___$1,p__$1,ch__$1,meta28894));
});

}

return (new cljs.core.async.t_cljs$core$async28893(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args28896 = [];
var len__23633__auto___28940 = arguments.length;
var i__23634__auto___28941 = (0);
while(true){
if((i__23634__auto___28941 < len__23633__auto___28940)){
args28896.push((arguments[i__23634__auto___28941]));

var G__28942 = (i__23634__auto___28941 + (1));
i__23634__auto___28941 = G__28942;
continue;
} else {
}
break;
}

var G__28898 = args28896.length;
switch (G__28898) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28896.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26694__auto___28944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto___28944,out){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto___28944,out){
return (function (state_28919){
var state_val_28920 = (state_28919[(1)]);
if((state_val_28920 === (7))){
var inst_28915 = (state_28919[(2)]);
var state_28919__$1 = state_28919;
var statearr_28921_28945 = state_28919__$1;
(statearr_28921_28945[(2)] = inst_28915);

(statearr_28921_28945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (1))){
var state_28919__$1 = state_28919;
var statearr_28922_28946 = state_28919__$1;
(statearr_28922_28946[(2)] = null);

(statearr_28922_28946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (4))){
var inst_28901 = (state_28919[(7)]);
var inst_28901__$1 = (state_28919[(2)]);
var inst_28902 = (inst_28901__$1 == null);
var state_28919__$1 = (function (){var statearr_28923 = state_28919;
(statearr_28923[(7)] = inst_28901__$1);

return statearr_28923;
})();
if(cljs.core.truth_(inst_28902)){
var statearr_28924_28947 = state_28919__$1;
(statearr_28924_28947[(1)] = (5));

} else {
var statearr_28925_28948 = state_28919__$1;
(statearr_28925_28948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (6))){
var inst_28901 = (state_28919[(7)]);
var inst_28906 = p.call(null,inst_28901);
var state_28919__$1 = state_28919;
if(cljs.core.truth_(inst_28906)){
var statearr_28926_28949 = state_28919__$1;
(statearr_28926_28949[(1)] = (8));

} else {
var statearr_28927_28950 = state_28919__$1;
(statearr_28927_28950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (3))){
var inst_28917 = (state_28919[(2)]);
var state_28919__$1 = state_28919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28919__$1,inst_28917);
} else {
if((state_val_28920 === (2))){
var state_28919__$1 = state_28919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28919__$1,(4),ch);
} else {
if((state_val_28920 === (11))){
var inst_28909 = (state_28919[(2)]);
var state_28919__$1 = state_28919;
var statearr_28928_28951 = state_28919__$1;
(statearr_28928_28951[(2)] = inst_28909);

(statearr_28928_28951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (9))){
var state_28919__$1 = state_28919;
var statearr_28929_28952 = state_28919__$1;
(statearr_28929_28952[(2)] = null);

(statearr_28929_28952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (5))){
var inst_28904 = cljs.core.async.close_BANG_.call(null,out);
var state_28919__$1 = state_28919;
var statearr_28930_28953 = state_28919__$1;
(statearr_28930_28953[(2)] = inst_28904);

(statearr_28930_28953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (10))){
var inst_28912 = (state_28919[(2)]);
var state_28919__$1 = (function (){var statearr_28931 = state_28919;
(statearr_28931[(8)] = inst_28912);

return statearr_28931;
})();
var statearr_28932_28954 = state_28919__$1;
(statearr_28932_28954[(2)] = null);

(statearr_28932_28954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (8))){
var inst_28901 = (state_28919[(7)]);
var state_28919__$1 = state_28919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28919__$1,(11),out,inst_28901);
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
});})(c__26694__auto___28944,out))
;
return ((function (switch__26582__auto__,c__26694__auto___28944,out){
return (function() {
var cljs$core$async$state_machine__26583__auto__ = null;
var cljs$core$async$state_machine__26583__auto____0 = (function (){
var statearr_28936 = [null,null,null,null,null,null,null,null,null];
(statearr_28936[(0)] = cljs$core$async$state_machine__26583__auto__);

(statearr_28936[(1)] = (1));

return statearr_28936;
});
var cljs$core$async$state_machine__26583__auto____1 = (function (state_28919){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_28919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e28937){if((e28937 instanceof Object)){
var ex__26586__auto__ = e28937;
var statearr_28938_28955 = state_28919;
(statearr_28938_28955[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28956 = state_28919;
state_28919 = G__28956;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
cljs$core$async$state_machine__26583__auto__ = function(state_28919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26583__auto____1.call(this,state_28919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26583__auto____0;
cljs$core$async$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26583__auto____1;
return cljs$core$async$state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto___28944,out))
})();
var state__26696__auto__ = (function (){var statearr_28939 = f__26695__auto__.call(null);
(statearr_28939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto___28944);

return statearr_28939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto___28944,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28957 = [];
var len__23633__auto___28960 = arguments.length;
var i__23634__auto___28961 = (0);
while(true){
if((i__23634__auto___28961 < len__23633__auto___28960)){
args28957.push((arguments[i__23634__auto___28961]));

var G__28962 = (i__23634__auto___28961 + (1));
i__23634__auto___28961 = G__28962;
continue;
} else {
}
break;
}

var G__28959 = args28957.length;
switch (G__28959) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28957.length)].join('')));

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
var c__26694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto__){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto__){
return (function (state_29129){
var state_val_29130 = (state_29129[(1)]);
if((state_val_29130 === (7))){
var inst_29125 = (state_29129[(2)]);
var state_29129__$1 = state_29129;
var statearr_29131_29172 = state_29129__$1;
(statearr_29131_29172[(2)] = inst_29125);

(statearr_29131_29172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29130 === (20))){
var inst_29095 = (state_29129[(7)]);
var inst_29106 = (state_29129[(2)]);
var inst_29107 = cljs.core.next.call(null,inst_29095);
var inst_29081 = inst_29107;
var inst_29082 = null;
var inst_29083 = (0);
var inst_29084 = (0);
var state_29129__$1 = (function (){var statearr_29132 = state_29129;
(statearr_29132[(8)] = inst_29083);

(statearr_29132[(9)] = inst_29082);

(statearr_29132[(10)] = inst_29081);

(statearr_29132[(11)] = inst_29084);

(statearr_29132[(12)] = inst_29106);

return statearr_29132;
})();
var statearr_29133_29173 = state_29129__$1;
(statearr_29133_29173[(2)] = null);

(statearr_29133_29173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29130 === (1))){
var state_29129__$1 = state_29129;
var statearr_29134_29174 = state_29129__$1;
(statearr_29134_29174[(2)] = null);

(statearr_29134_29174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29130 === (4))){
var inst_29070 = (state_29129[(13)]);
var inst_29070__$1 = (state_29129[(2)]);
var inst_29071 = (inst_29070__$1 == null);
var state_29129__$1 = (function (){var statearr_29135 = state_29129;
(statearr_29135[(13)] = inst_29070__$1);

return statearr_29135;
})();
if(cljs.core.truth_(inst_29071)){
var statearr_29136_29175 = state_29129__$1;
(statearr_29136_29175[(1)] = (5));

} else {
var statearr_29137_29176 = state_29129__$1;
(statearr_29137_29176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29130 === (15))){
var state_29129__$1 = state_29129;
var statearr_29141_29177 = state_29129__$1;
(statearr_29141_29177[(2)] = null);

(statearr_29141_29177[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29130 === (21))){
var state_29129__$1 = state_29129;
var statearr_29142_29178 = state_29129__$1;
(statearr_29142_29178[(2)] = null);

(statearr_29142_29178[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29130 === (13))){
var inst_29083 = (state_29129[(8)]);
var inst_29082 = (state_29129[(9)]);
var inst_29081 = (state_29129[(10)]);
var inst_29084 = (state_29129[(11)]);
var inst_29091 = (state_29129[(2)]);
var inst_29092 = (inst_29084 + (1));
var tmp29138 = inst_29083;
var tmp29139 = inst_29082;
var tmp29140 = inst_29081;
var inst_29081__$1 = tmp29140;
var inst_29082__$1 = tmp29139;
var inst_29083__$1 = tmp29138;
var inst_29084__$1 = inst_29092;
var state_29129__$1 = (function (){var statearr_29143 = state_29129;
(statearr_29143[(8)] = inst_29083__$1);

(statearr_29143[(9)] = inst_29082__$1);

(statearr_29143[(10)] = inst_29081__$1);

(statearr_29143[(14)] = inst_29091);

(statearr_29143[(11)] = inst_29084__$1);

return statearr_29143;
})();
var statearr_29144_29179 = state_29129__$1;
(statearr_29144_29179[(2)] = null);

(statearr_29144_29179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29130 === (22))){
var state_29129__$1 = state_29129;
var statearr_29145_29180 = state_29129__$1;
(statearr_29145_29180[(2)] = null);

(statearr_29145_29180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29130 === (6))){
var inst_29070 = (state_29129[(13)]);
var inst_29079 = f.call(null,inst_29070);
var inst_29080 = cljs.core.seq.call(null,inst_29079);
var inst_29081 = inst_29080;
var inst_29082 = null;
var inst_29083 = (0);
var inst_29084 = (0);
var state_29129__$1 = (function (){var statearr_29146 = state_29129;
(statearr_29146[(8)] = inst_29083);

(statearr_29146[(9)] = inst_29082);

(statearr_29146[(10)] = inst_29081);

(statearr_29146[(11)] = inst_29084);

return statearr_29146;
})();
var statearr_29147_29181 = state_29129__$1;
(statearr_29147_29181[(2)] = null);

(statearr_29147_29181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29130 === (17))){
var inst_29095 = (state_29129[(7)]);
var inst_29099 = cljs.core.chunk_first.call(null,inst_29095);
var inst_29100 = cljs.core.chunk_rest.call(null,inst_29095);
var inst_29101 = cljs.core.count.call(null,inst_29099);
var inst_29081 = inst_29100;
var inst_29082 = inst_29099;
var inst_29083 = inst_29101;
var inst_29084 = (0);
var state_29129__$1 = (function (){var statearr_29148 = state_29129;
(statearr_29148[(8)] = inst_29083);

(statearr_29148[(9)] = inst_29082);

(statearr_29148[(10)] = inst_29081);

(statearr_29148[(11)] = inst_29084);

return statearr_29148;
})();
var statearr_29149_29182 = state_29129__$1;
(statearr_29149_29182[(2)] = null);

(statearr_29149_29182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29130 === (3))){
var inst_29127 = (state_29129[(2)]);
var state_29129__$1 = state_29129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29129__$1,inst_29127);
} else {
if((state_val_29130 === (12))){
var inst_29115 = (state_29129[(2)]);
var state_29129__$1 = state_29129;
var statearr_29150_29183 = state_29129__$1;
(statearr_29150_29183[(2)] = inst_29115);

(statearr_29150_29183[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29130 === (2))){
var state_29129__$1 = state_29129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29129__$1,(4),in$);
} else {
if((state_val_29130 === (23))){
var inst_29123 = (state_29129[(2)]);
var state_29129__$1 = state_29129;
var statearr_29151_29184 = state_29129__$1;
(statearr_29151_29184[(2)] = inst_29123);

(statearr_29151_29184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29130 === (19))){
var inst_29110 = (state_29129[(2)]);
var state_29129__$1 = state_29129;
var statearr_29152_29185 = state_29129__$1;
(statearr_29152_29185[(2)] = inst_29110);

(statearr_29152_29185[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29130 === (11))){
var inst_29081 = (state_29129[(10)]);
var inst_29095 = (state_29129[(7)]);
var inst_29095__$1 = cljs.core.seq.call(null,inst_29081);
var state_29129__$1 = (function (){var statearr_29153 = state_29129;
(statearr_29153[(7)] = inst_29095__$1);

return statearr_29153;
})();
if(inst_29095__$1){
var statearr_29154_29186 = state_29129__$1;
(statearr_29154_29186[(1)] = (14));

} else {
var statearr_29155_29187 = state_29129__$1;
(statearr_29155_29187[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29130 === (9))){
var inst_29117 = (state_29129[(2)]);
var inst_29118 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29129__$1 = (function (){var statearr_29156 = state_29129;
(statearr_29156[(15)] = inst_29117);

return statearr_29156;
})();
if(cljs.core.truth_(inst_29118)){
var statearr_29157_29188 = state_29129__$1;
(statearr_29157_29188[(1)] = (21));

} else {
var statearr_29158_29189 = state_29129__$1;
(statearr_29158_29189[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29130 === (5))){
var inst_29073 = cljs.core.async.close_BANG_.call(null,out);
var state_29129__$1 = state_29129;
var statearr_29159_29190 = state_29129__$1;
(statearr_29159_29190[(2)] = inst_29073);

(statearr_29159_29190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29130 === (14))){
var inst_29095 = (state_29129[(7)]);
var inst_29097 = cljs.core.chunked_seq_QMARK_.call(null,inst_29095);
var state_29129__$1 = state_29129;
if(inst_29097){
var statearr_29160_29191 = state_29129__$1;
(statearr_29160_29191[(1)] = (17));

} else {
var statearr_29161_29192 = state_29129__$1;
(statearr_29161_29192[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29130 === (16))){
var inst_29113 = (state_29129[(2)]);
var state_29129__$1 = state_29129;
var statearr_29162_29193 = state_29129__$1;
(statearr_29162_29193[(2)] = inst_29113);

(statearr_29162_29193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29130 === (10))){
var inst_29082 = (state_29129[(9)]);
var inst_29084 = (state_29129[(11)]);
var inst_29089 = cljs.core._nth.call(null,inst_29082,inst_29084);
var state_29129__$1 = state_29129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29129__$1,(13),out,inst_29089);
} else {
if((state_val_29130 === (18))){
var inst_29095 = (state_29129[(7)]);
var inst_29104 = cljs.core.first.call(null,inst_29095);
var state_29129__$1 = state_29129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29129__$1,(20),out,inst_29104);
} else {
if((state_val_29130 === (8))){
var inst_29083 = (state_29129[(8)]);
var inst_29084 = (state_29129[(11)]);
var inst_29086 = (inst_29084 < inst_29083);
var inst_29087 = inst_29086;
var state_29129__$1 = state_29129;
if(cljs.core.truth_(inst_29087)){
var statearr_29163_29194 = state_29129__$1;
(statearr_29163_29194[(1)] = (10));

} else {
var statearr_29164_29195 = state_29129__$1;
(statearr_29164_29195[(1)] = (11));

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
});})(c__26694__auto__))
;
return ((function (switch__26582__auto__,c__26694__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26583__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26583__auto____0 = (function (){
var statearr_29168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29168[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26583__auto__);

(statearr_29168[(1)] = (1));

return statearr_29168;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26583__auto____1 = (function (state_29129){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_29129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e29169){if((e29169 instanceof Object)){
var ex__26586__auto__ = e29169;
var statearr_29170_29196 = state_29129;
(statearr_29170_29196[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29197 = state_29129;
state_29129 = G__29197;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26583__auto__ = function(state_29129){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26583__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26583__auto____1.call(this,state_29129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26583__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26583__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto__))
})();
var state__26696__auto__ = (function (){var statearr_29171 = f__26695__auto__.call(null);
(statearr_29171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto__);

return statearr_29171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto__))
);

return c__26694__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29198 = [];
var len__23633__auto___29201 = arguments.length;
var i__23634__auto___29202 = (0);
while(true){
if((i__23634__auto___29202 < len__23633__auto___29201)){
args29198.push((arguments[i__23634__auto___29202]));

var G__29203 = (i__23634__auto___29202 + (1));
i__23634__auto___29202 = G__29203;
continue;
} else {
}
break;
}

var G__29200 = args29198.length;
switch (G__29200) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29198.length)].join('')));

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
var args29205 = [];
var len__23633__auto___29208 = arguments.length;
var i__23634__auto___29209 = (0);
while(true){
if((i__23634__auto___29209 < len__23633__auto___29208)){
args29205.push((arguments[i__23634__auto___29209]));

var G__29210 = (i__23634__auto___29209 + (1));
i__23634__auto___29209 = G__29210;
continue;
} else {
}
break;
}

var G__29207 = args29205.length;
switch (G__29207) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29205.length)].join('')));

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
var args29212 = [];
var len__23633__auto___29263 = arguments.length;
var i__23634__auto___29264 = (0);
while(true){
if((i__23634__auto___29264 < len__23633__auto___29263)){
args29212.push((arguments[i__23634__auto___29264]));

var G__29265 = (i__23634__auto___29264 + (1));
i__23634__auto___29264 = G__29265;
continue;
} else {
}
break;
}

var G__29214 = args29212.length;
switch (G__29214) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29212.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26694__auto___29267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto___29267,out){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto___29267,out){
return (function (state_29238){
var state_val_29239 = (state_29238[(1)]);
if((state_val_29239 === (7))){
var inst_29233 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29240_29268 = state_29238__$1;
(statearr_29240_29268[(2)] = inst_29233);

(statearr_29240_29268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (1))){
var inst_29215 = null;
var state_29238__$1 = (function (){var statearr_29241 = state_29238;
(statearr_29241[(7)] = inst_29215);

return statearr_29241;
})();
var statearr_29242_29269 = state_29238__$1;
(statearr_29242_29269[(2)] = null);

(statearr_29242_29269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (4))){
var inst_29218 = (state_29238[(8)]);
var inst_29218__$1 = (state_29238[(2)]);
var inst_29219 = (inst_29218__$1 == null);
var inst_29220 = cljs.core.not.call(null,inst_29219);
var state_29238__$1 = (function (){var statearr_29243 = state_29238;
(statearr_29243[(8)] = inst_29218__$1);

return statearr_29243;
})();
if(inst_29220){
var statearr_29244_29270 = state_29238__$1;
(statearr_29244_29270[(1)] = (5));

} else {
var statearr_29245_29271 = state_29238__$1;
(statearr_29245_29271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (6))){
var state_29238__$1 = state_29238;
var statearr_29246_29272 = state_29238__$1;
(statearr_29246_29272[(2)] = null);

(statearr_29246_29272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (3))){
var inst_29235 = (state_29238[(2)]);
var inst_29236 = cljs.core.async.close_BANG_.call(null,out);
var state_29238__$1 = (function (){var statearr_29247 = state_29238;
(statearr_29247[(9)] = inst_29235);

return statearr_29247;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29238__$1,inst_29236);
} else {
if((state_val_29239 === (2))){
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29238__$1,(4),ch);
} else {
if((state_val_29239 === (11))){
var inst_29218 = (state_29238[(8)]);
var inst_29227 = (state_29238[(2)]);
var inst_29215 = inst_29218;
var state_29238__$1 = (function (){var statearr_29248 = state_29238;
(statearr_29248[(10)] = inst_29227);

(statearr_29248[(7)] = inst_29215);

return statearr_29248;
})();
var statearr_29249_29273 = state_29238__$1;
(statearr_29249_29273[(2)] = null);

(statearr_29249_29273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (9))){
var inst_29218 = (state_29238[(8)]);
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29238__$1,(11),out,inst_29218);
} else {
if((state_val_29239 === (5))){
var inst_29218 = (state_29238[(8)]);
var inst_29215 = (state_29238[(7)]);
var inst_29222 = cljs.core._EQ_.call(null,inst_29218,inst_29215);
var state_29238__$1 = state_29238;
if(inst_29222){
var statearr_29251_29274 = state_29238__$1;
(statearr_29251_29274[(1)] = (8));

} else {
var statearr_29252_29275 = state_29238__$1;
(statearr_29252_29275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (10))){
var inst_29230 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29253_29276 = state_29238__$1;
(statearr_29253_29276[(2)] = inst_29230);

(statearr_29253_29276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (8))){
var inst_29215 = (state_29238[(7)]);
var tmp29250 = inst_29215;
var inst_29215__$1 = tmp29250;
var state_29238__$1 = (function (){var statearr_29254 = state_29238;
(statearr_29254[(7)] = inst_29215__$1);

return statearr_29254;
})();
var statearr_29255_29277 = state_29238__$1;
(statearr_29255_29277[(2)] = null);

(statearr_29255_29277[(1)] = (2));


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
});})(c__26694__auto___29267,out))
;
return ((function (switch__26582__auto__,c__26694__auto___29267,out){
return (function() {
var cljs$core$async$state_machine__26583__auto__ = null;
var cljs$core$async$state_machine__26583__auto____0 = (function (){
var statearr_29259 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29259[(0)] = cljs$core$async$state_machine__26583__auto__);

(statearr_29259[(1)] = (1));

return statearr_29259;
});
var cljs$core$async$state_machine__26583__auto____1 = (function (state_29238){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_29238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e29260){if((e29260 instanceof Object)){
var ex__26586__auto__ = e29260;
var statearr_29261_29278 = state_29238;
(statearr_29261_29278[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29279 = state_29238;
state_29238 = G__29279;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
cljs$core$async$state_machine__26583__auto__ = function(state_29238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26583__auto____1.call(this,state_29238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26583__auto____0;
cljs$core$async$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26583__auto____1;
return cljs$core$async$state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto___29267,out))
})();
var state__26696__auto__ = (function (){var statearr_29262 = f__26695__auto__.call(null);
(statearr_29262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto___29267);

return statearr_29262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto___29267,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29280 = [];
var len__23633__auto___29350 = arguments.length;
var i__23634__auto___29351 = (0);
while(true){
if((i__23634__auto___29351 < len__23633__auto___29350)){
args29280.push((arguments[i__23634__auto___29351]));

var G__29352 = (i__23634__auto___29351 + (1));
i__23634__auto___29351 = G__29352;
continue;
} else {
}
break;
}

var G__29282 = args29280.length;
switch (G__29282) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29280.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26694__auto___29354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto___29354,out){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto___29354,out){
return (function (state_29320){
var state_val_29321 = (state_29320[(1)]);
if((state_val_29321 === (7))){
var inst_29316 = (state_29320[(2)]);
var state_29320__$1 = state_29320;
var statearr_29322_29355 = state_29320__$1;
(statearr_29322_29355[(2)] = inst_29316);

(statearr_29322_29355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (1))){
var inst_29283 = (new Array(n));
var inst_29284 = inst_29283;
var inst_29285 = (0);
var state_29320__$1 = (function (){var statearr_29323 = state_29320;
(statearr_29323[(7)] = inst_29284);

(statearr_29323[(8)] = inst_29285);

return statearr_29323;
})();
var statearr_29324_29356 = state_29320__$1;
(statearr_29324_29356[(2)] = null);

(statearr_29324_29356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (4))){
var inst_29288 = (state_29320[(9)]);
var inst_29288__$1 = (state_29320[(2)]);
var inst_29289 = (inst_29288__$1 == null);
var inst_29290 = cljs.core.not.call(null,inst_29289);
var state_29320__$1 = (function (){var statearr_29325 = state_29320;
(statearr_29325[(9)] = inst_29288__$1);

return statearr_29325;
})();
if(inst_29290){
var statearr_29326_29357 = state_29320__$1;
(statearr_29326_29357[(1)] = (5));

} else {
var statearr_29327_29358 = state_29320__$1;
(statearr_29327_29358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (15))){
var inst_29310 = (state_29320[(2)]);
var state_29320__$1 = state_29320;
var statearr_29328_29359 = state_29320__$1;
(statearr_29328_29359[(2)] = inst_29310);

(statearr_29328_29359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (13))){
var state_29320__$1 = state_29320;
var statearr_29329_29360 = state_29320__$1;
(statearr_29329_29360[(2)] = null);

(statearr_29329_29360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (6))){
var inst_29285 = (state_29320[(8)]);
var inst_29306 = (inst_29285 > (0));
var state_29320__$1 = state_29320;
if(cljs.core.truth_(inst_29306)){
var statearr_29330_29361 = state_29320__$1;
(statearr_29330_29361[(1)] = (12));

} else {
var statearr_29331_29362 = state_29320__$1;
(statearr_29331_29362[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (3))){
var inst_29318 = (state_29320[(2)]);
var state_29320__$1 = state_29320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29320__$1,inst_29318);
} else {
if((state_val_29321 === (12))){
var inst_29284 = (state_29320[(7)]);
var inst_29308 = cljs.core.vec.call(null,inst_29284);
var state_29320__$1 = state_29320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29320__$1,(15),out,inst_29308);
} else {
if((state_val_29321 === (2))){
var state_29320__$1 = state_29320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29320__$1,(4),ch);
} else {
if((state_val_29321 === (11))){
var inst_29300 = (state_29320[(2)]);
var inst_29301 = (new Array(n));
var inst_29284 = inst_29301;
var inst_29285 = (0);
var state_29320__$1 = (function (){var statearr_29332 = state_29320;
(statearr_29332[(7)] = inst_29284);

(statearr_29332[(8)] = inst_29285);

(statearr_29332[(10)] = inst_29300);

return statearr_29332;
})();
var statearr_29333_29363 = state_29320__$1;
(statearr_29333_29363[(2)] = null);

(statearr_29333_29363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (9))){
var inst_29284 = (state_29320[(7)]);
var inst_29298 = cljs.core.vec.call(null,inst_29284);
var state_29320__$1 = state_29320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29320__$1,(11),out,inst_29298);
} else {
if((state_val_29321 === (5))){
var inst_29284 = (state_29320[(7)]);
var inst_29293 = (state_29320[(11)]);
var inst_29285 = (state_29320[(8)]);
var inst_29288 = (state_29320[(9)]);
var inst_29292 = (inst_29284[inst_29285] = inst_29288);
var inst_29293__$1 = (inst_29285 + (1));
var inst_29294 = (inst_29293__$1 < n);
var state_29320__$1 = (function (){var statearr_29334 = state_29320;
(statearr_29334[(11)] = inst_29293__$1);

(statearr_29334[(12)] = inst_29292);

return statearr_29334;
})();
if(cljs.core.truth_(inst_29294)){
var statearr_29335_29364 = state_29320__$1;
(statearr_29335_29364[(1)] = (8));

} else {
var statearr_29336_29365 = state_29320__$1;
(statearr_29336_29365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (14))){
var inst_29313 = (state_29320[(2)]);
var inst_29314 = cljs.core.async.close_BANG_.call(null,out);
var state_29320__$1 = (function (){var statearr_29338 = state_29320;
(statearr_29338[(13)] = inst_29313);

return statearr_29338;
})();
var statearr_29339_29366 = state_29320__$1;
(statearr_29339_29366[(2)] = inst_29314);

(statearr_29339_29366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (10))){
var inst_29304 = (state_29320[(2)]);
var state_29320__$1 = state_29320;
var statearr_29340_29367 = state_29320__$1;
(statearr_29340_29367[(2)] = inst_29304);

(statearr_29340_29367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (8))){
var inst_29284 = (state_29320[(7)]);
var inst_29293 = (state_29320[(11)]);
var tmp29337 = inst_29284;
var inst_29284__$1 = tmp29337;
var inst_29285 = inst_29293;
var state_29320__$1 = (function (){var statearr_29341 = state_29320;
(statearr_29341[(7)] = inst_29284__$1);

(statearr_29341[(8)] = inst_29285);

return statearr_29341;
})();
var statearr_29342_29368 = state_29320__$1;
(statearr_29342_29368[(2)] = null);

(statearr_29342_29368[(1)] = (2));


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
});})(c__26694__auto___29354,out))
;
return ((function (switch__26582__auto__,c__26694__auto___29354,out){
return (function() {
var cljs$core$async$state_machine__26583__auto__ = null;
var cljs$core$async$state_machine__26583__auto____0 = (function (){
var statearr_29346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29346[(0)] = cljs$core$async$state_machine__26583__auto__);

(statearr_29346[(1)] = (1));

return statearr_29346;
});
var cljs$core$async$state_machine__26583__auto____1 = (function (state_29320){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_29320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e29347){if((e29347 instanceof Object)){
var ex__26586__auto__ = e29347;
var statearr_29348_29369 = state_29320;
(statearr_29348_29369[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29370 = state_29320;
state_29320 = G__29370;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
cljs$core$async$state_machine__26583__auto__ = function(state_29320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26583__auto____1.call(this,state_29320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26583__auto____0;
cljs$core$async$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26583__auto____1;
return cljs$core$async$state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto___29354,out))
})();
var state__26696__auto__ = (function (){var statearr_29349 = f__26695__auto__.call(null);
(statearr_29349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto___29354);

return statearr_29349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto___29354,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29371 = [];
var len__23633__auto___29445 = arguments.length;
var i__23634__auto___29446 = (0);
while(true){
if((i__23634__auto___29446 < len__23633__auto___29445)){
args29371.push((arguments[i__23634__auto___29446]));

var G__29447 = (i__23634__auto___29446 + (1));
i__23634__auto___29446 = G__29447;
continue;
} else {
}
break;
}

var G__29373 = args29371.length;
switch (G__29373) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29371.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26694__auto___29449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto___29449,out){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto___29449,out){
return (function (state_29415){
var state_val_29416 = (state_29415[(1)]);
if((state_val_29416 === (7))){
var inst_29411 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29417_29450 = state_29415__$1;
(statearr_29417_29450[(2)] = inst_29411);

(statearr_29417_29450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (1))){
var inst_29374 = [];
var inst_29375 = inst_29374;
var inst_29376 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29415__$1 = (function (){var statearr_29418 = state_29415;
(statearr_29418[(7)] = inst_29375);

(statearr_29418[(8)] = inst_29376);

return statearr_29418;
})();
var statearr_29419_29451 = state_29415__$1;
(statearr_29419_29451[(2)] = null);

(statearr_29419_29451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (4))){
var inst_29379 = (state_29415[(9)]);
var inst_29379__$1 = (state_29415[(2)]);
var inst_29380 = (inst_29379__$1 == null);
var inst_29381 = cljs.core.not.call(null,inst_29380);
var state_29415__$1 = (function (){var statearr_29420 = state_29415;
(statearr_29420[(9)] = inst_29379__$1);

return statearr_29420;
})();
if(inst_29381){
var statearr_29421_29452 = state_29415__$1;
(statearr_29421_29452[(1)] = (5));

} else {
var statearr_29422_29453 = state_29415__$1;
(statearr_29422_29453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (15))){
var inst_29405 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29423_29454 = state_29415__$1;
(statearr_29423_29454[(2)] = inst_29405);

(statearr_29423_29454[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (13))){
var state_29415__$1 = state_29415;
var statearr_29424_29455 = state_29415__$1;
(statearr_29424_29455[(2)] = null);

(statearr_29424_29455[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (6))){
var inst_29375 = (state_29415[(7)]);
var inst_29400 = inst_29375.length;
var inst_29401 = (inst_29400 > (0));
var state_29415__$1 = state_29415;
if(cljs.core.truth_(inst_29401)){
var statearr_29425_29456 = state_29415__$1;
(statearr_29425_29456[(1)] = (12));

} else {
var statearr_29426_29457 = state_29415__$1;
(statearr_29426_29457[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (3))){
var inst_29413 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29415__$1,inst_29413);
} else {
if((state_val_29416 === (12))){
var inst_29375 = (state_29415[(7)]);
var inst_29403 = cljs.core.vec.call(null,inst_29375);
var state_29415__$1 = state_29415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29415__$1,(15),out,inst_29403);
} else {
if((state_val_29416 === (2))){
var state_29415__$1 = state_29415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29415__$1,(4),ch);
} else {
if((state_val_29416 === (11))){
var inst_29379 = (state_29415[(9)]);
var inst_29383 = (state_29415[(10)]);
var inst_29393 = (state_29415[(2)]);
var inst_29394 = [];
var inst_29395 = inst_29394.push(inst_29379);
var inst_29375 = inst_29394;
var inst_29376 = inst_29383;
var state_29415__$1 = (function (){var statearr_29427 = state_29415;
(statearr_29427[(7)] = inst_29375);

(statearr_29427[(11)] = inst_29393);

(statearr_29427[(12)] = inst_29395);

(statearr_29427[(8)] = inst_29376);

return statearr_29427;
})();
var statearr_29428_29458 = state_29415__$1;
(statearr_29428_29458[(2)] = null);

(statearr_29428_29458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (9))){
var inst_29375 = (state_29415[(7)]);
var inst_29391 = cljs.core.vec.call(null,inst_29375);
var state_29415__$1 = state_29415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29415__$1,(11),out,inst_29391);
} else {
if((state_val_29416 === (5))){
var inst_29379 = (state_29415[(9)]);
var inst_29383 = (state_29415[(10)]);
var inst_29376 = (state_29415[(8)]);
var inst_29383__$1 = f.call(null,inst_29379);
var inst_29384 = cljs.core._EQ_.call(null,inst_29383__$1,inst_29376);
var inst_29385 = cljs.core.keyword_identical_QMARK_.call(null,inst_29376,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29386 = (inst_29384) || (inst_29385);
var state_29415__$1 = (function (){var statearr_29429 = state_29415;
(statearr_29429[(10)] = inst_29383__$1);

return statearr_29429;
})();
if(cljs.core.truth_(inst_29386)){
var statearr_29430_29459 = state_29415__$1;
(statearr_29430_29459[(1)] = (8));

} else {
var statearr_29431_29460 = state_29415__$1;
(statearr_29431_29460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (14))){
var inst_29408 = (state_29415[(2)]);
var inst_29409 = cljs.core.async.close_BANG_.call(null,out);
var state_29415__$1 = (function (){var statearr_29433 = state_29415;
(statearr_29433[(13)] = inst_29408);

return statearr_29433;
})();
var statearr_29434_29461 = state_29415__$1;
(statearr_29434_29461[(2)] = inst_29409);

(statearr_29434_29461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (10))){
var inst_29398 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29435_29462 = state_29415__$1;
(statearr_29435_29462[(2)] = inst_29398);

(statearr_29435_29462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (8))){
var inst_29375 = (state_29415[(7)]);
var inst_29379 = (state_29415[(9)]);
var inst_29383 = (state_29415[(10)]);
var inst_29388 = inst_29375.push(inst_29379);
var tmp29432 = inst_29375;
var inst_29375__$1 = tmp29432;
var inst_29376 = inst_29383;
var state_29415__$1 = (function (){var statearr_29436 = state_29415;
(statearr_29436[(7)] = inst_29375__$1);

(statearr_29436[(14)] = inst_29388);

(statearr_29436[(8)] = inst_29376);

return statearr_29436;
})();
var statearr_29437_29463 = state_29415__$1;
(statearr_29437_29463[(2)] = null);

(statearr_29437_29463[(1)] = (2));


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
});})(c__26694__auto___29449,out))
;
return ((function (switch__26582__auto__,c__26694__auto___29449,out){
return (function() {
var cljs$core$async$state_machine__26583__auto__ = null;
var cljs$core$async$state_machine__26583__auto____0 = (function (){
var statearr_29441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29441[(0)] = cljs$core$async$state_machine__26583__auto__);

(statearr_29441[(1)] = (1));

return statearr_29441;
});
var cljs$core$async$state_machine__26583__auto____1 = (function (state_29415){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_29415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e29442){if((e29442 instanceof Object)){
var ex__26586__auto__ = e29442;
var statearr_29443_29464 = state_29415;
(statearr_29443_29464[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29465 = state_29415;
state_29415 = G__29465;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
cljs$core$async$state_machine__26583__auto__ = function(state_29415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26583__auto____1.call(this,state_29415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26583__auto____0;
cljs$core$async$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26583__auto____1;
return cljs$core$async$state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto___29449,out))
})();
var state__26696__auto__ = (function (){var statearr_29444 = f__26695__auto__.call(null);
(statearr_29444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto___29449);

return statearr_29444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto___29449,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map