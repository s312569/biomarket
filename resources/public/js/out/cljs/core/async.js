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
var args26752 = [];
var len__23646__auto___26758 = arguments.length;
var i__23647__auto___26759 = (0);
while(true){
if((i__23647__auto___26759 < len__23646__auto___26758)){
args26752.push((arguments[i__23647__auto___26759]));

var G__26760 = (i__23647__auto___26759 + (1));
i__23647__auto___26759 = G__26760;
continue;
} else {
}
break;
}

var G__26754 = args26752.length;
switch (G__26754) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26752.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async26755 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26755 = (function (f,blockable,meta26756){
this.f = f;
this.blockable = blockable;
this.meta26756 = meta26756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26757,meta26756__$1){
var self__ = this;
var _26757__$1 = this;
return (new cljs.core.async.t_cljs$core$async26755(self__.f,self__.blockable,meta26756__$1));
});

cljs.core.async.t_cljs$core$async26755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26757){
var self__ = this;
var _26757__$1 = this;
return self__.meta26756;
});

cljs.core.async.t_cljs$core$async26755.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26755.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26755.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26755.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26756","meta26756",-1451506383,null)], null);
});

cljs.core.async.t_cljs$core$async26755.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26755";

cljs.core.async.t_cljs$core$async26755.cljs$lang$ctorPrWriter = (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"cljs.core.async/t_cljs$core$async26755");
});

cljs.core.async.__GT_t_cljs$core$async26755 = (function cljs$core$async$__GT_t_cljs$core$async26755(f__$1,blockable__$1,meta26756){
return (new cljs.core.async.t_cljs$core$async26755(f__$1,blockable__$1,meta26756));
});

}

return (new cljs.core.async.t_cljs$core$async26755(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args26764 = [];
var len__23646__auto___26767 = arguments.length;
var i__23647__auto___26768 = (0);
while(true){
if((i__23647__auto___26768 < len__23646__auto___26767)){
args26764.push((arguments[i__23647__auto___26768]));

var G__26769 = (i__23647__auto___26768 + (1));
i__23647__auto___26768 = G__26769;
continue;
} else {
}
break;
}

var G__26766 = args26764.length;
switch (G__26766) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26764.length)].join('')));

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
var args26771 = [];
var len__23646__auto___26774 = arguments.length;
var i__23647__auto___26775 = (0);
while(true){
if((i__23647__auto___26775 < len__23646__auto___26774)){
args26771.push((arguments[i__23647__auto___26775]));

var G__26776 = (i__23647__auto___26775 + (1));
i__23647__auto___26775 = G__26776;
continue;
} else {
}
break;
}

var G__26773 = args26771.length;
switch (G__26773) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26771.length)].join('')));

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
var args26778 = [];
var len__23646__auto___26781 = arguments.length;
var i__23647__auto___26782 = (0);
while(true){
if((i__23647__auto___26782 < len__23646__auto___26781)){
args26778.push((arguments[i__23647__auto___26782]));

var G__26783 = (i__23647__auto___26782 + (1));
i__23647__auto___26782 = G__26783;
continue;
} else {
}
break;
}

var G__26780 = args26778.length;
switch (G__26780) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26778.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26785 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26785);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26785,ret){
return (function (){
return fn1.call(null,val_26785);
});})(val_26785,ret))
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
var args26786 = [];
var len__23646__auto___26789 = arguments.length;
var i__23647__auto___26790 = (0);
while(true){
if((i__23647__auto___26790 < len__23646__auto___26789)){
args26786.push((arguments[i__23647__auto___26790]));

var G__26791 = (i__23647__auto___26790 + (1));
i__23647__auto___26790 = G__26791;
continue;
} else {
}
break;
}

var G__26788 = args26786.length;
switch (G__26788) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26786.length)].join('')));

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
var n__23491__auto___26793 = n;
var x_26794 = (0);
while(true){
if((x_26794 < n__23491__auto___26793)){
(a[x_26794] = (0));

var G__26795 = (x_26794 + (1));
x_26794 = G__26795;
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

var G__26796 = (i + (1));
i = G__26796;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26800 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26800 = (function (alt_flag,flag,meta26801){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26801 = meta26801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26802,meta26801__$1){
var self__ = this;
var _26802__$1 = this;
return (new cljs.core.async.t_cljs$core$async26800(self__.alt_flag,self__.flag,meta26801__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26800.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26802){
var self__ = this;
var _26802__$1 = this;
return self__.meta26801;
});})(flag))
;

cljs.core.async.t_cljs$core$async26800.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26800.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26800.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26800.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26800.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26801","meta26801",-1661159794,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26800.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26800";

cljs.core.async.t_cljs$core$async26800.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"cljs.core.async/t_cljs$core$async26800");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26800 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26800(alt_flag__$1,flag__$1,meta26801){
return (new cljs.core.async.t_cljs$core$async26800(alt_flag__$1,flag__$1,meta26801));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26800(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26806 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26806 = (function (alt_handler,flag,cb,meta26807){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26807 = meta26807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26808,meta26807__$1){
var self__ = this;
var _26808__$1 = this;
return (new cljs.core.async.t_cljs$core$async26806(self__.alt_handler,self__.flag,self__.cb,meta26807__$1));
});

cljs.core.async.t_cljs$core$async26806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26808){
var self__ = this;
var _26808__$1 = this;
return self__.meta26807;
});

cljs.core.async.t_cljs$core$async26806.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26806.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26806.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26806.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26806.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26807","meta26807",1506458211,null)], null);
});

cljs.core.async.t_cljs$core$async26806.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26806.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26806";

cljs.core.async.t_cljs$core$async26806.cljs$lang$ctorPrWriter = (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"cljs.core.async/t_cljs$core$async26806");
});

cljs.core.async.__GT_t_cljs$core$async26806 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26806(alt_handler__$1,flag__$1,cb__$1,meta26807){
return (new cljs.core.async.t_cljs$core$async26806(alt_handler__$1,flag__$1,cb__$1,meta26807));
});

}

return (new cljs.core.async.t_cljs$core$async26806(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26809_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26809_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26810_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26810_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__22576__auto__ = wport;
if(cljs.core.truth_(or__22576__auto__)){
return or__22576__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26811 = (i + (1));
i = G__26811;
continue;
}
} else {
return null;
}
break;
}
})();
var or__22576__auto__ = ret;
if(cljs.core.truth_(or__22576__auto__)){
return or__22576__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__22564__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__22564__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__22564__auto__;
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
var args__23653__auto__ = [];
var len__23646__auto___26817 = arguments.length;
var i__23647__auto___26818 = (0);
while(true){
if((i__23647__auto___26818 < len__23646__auto___26817)){
args__23653__auto__.push((arguments[i__23647__auto___26818]));

var G__26819 = (i__23647__auto___26818 + (1));
i__23647__auto___26818 = G__26819;
continue;
} else {
}
break;
}

var argseq__23654__auto__ = ((((1) < args__23653__auto__.length))?(new cljs.core.IndexedSeq(args__23653__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23654__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26814){
var map__26815 = p__26814;
var map__26815__$1 = ((((!((map__26815 == null)))?((((map__26815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26815):map__26815);
var opts = map__26815__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26812){
var G__26813 = cljs.core.first.call(null,seq26812);
var seq26812__$1 = cljs.core.next.call(null,seq26812);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26813,seq26812__$1);
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
var args26820 = [];
var len__23646__auto___26870 = arguments.length;
var i__23647__auto___26871 = (0);
while(true){
if((i__23647__auto___26871 < len__23646__auto___26870)){
args26820.push((arguments[i__23647__auto___26871]));

var G__26872 = (i__23647__auto___26871 + (1));
i__23647__auto___26871 = G__26872;
continue;
} else {
}
break;
}

var G__26822 = args26820.length;
switch (G__26822) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26820.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26707__auto___26874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto___26874){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto___26874){
return (function (state_26846){
var state_val_26847 = (state_26846[(1)]);
if((state_val_26847 === (7))){
var inst_26842 = (state_26846[(2)]);
var state_26846__$1 = state_26846;
var statearr_26848_26875 = state_26846__$1;
(statearr_26848_26875[(2)] = inst_26842);

(statearr_26848_26875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26847 === (1))){
var state_26846__$1 = state_26846;
var statearr_26849_26876 = state_26846__$1;
(statearr_26849_26876[(2)] = null);

(statearr_26849_26876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26847 === (4))){
var inst_26825 = (state_26846[(7)]);
var inst_26825__$1 = (state_26846[(2)]);
var inst_26826 = (inst_26825__$1 == null);
var state_26846__$1 = (function (){var statearr_26850 = state_26846;
(statearr_26850[(7)] = inst_26825__$1);

return statearr_26850;
})();
if(cljs.core.truth_(inst_26826)){
var statearr_26851_26877 = state_26846__$1;
(statearr_26851_26877[(1)] = (5));

} else {
var statearr_26852_26878 = state_26846__$1;
(statearr_26852_26878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26847 === (13))){
var state_26846__$1 = state_26846;
var statearr_26853_26879 = state_26846__$1;
(statearr_26853_26879[(2)] = null);

(statearr_26853_26879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26847 === (6))){
var inst_26825 = (state_26846[(7)]);
var state_26846__$1 = state_26846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26846__$1,(11),to,inst_26825);
} else {
if((state_val_26847 === (3))){
var inst_26844 = (state_26846[(2)]);
var state_26846__$1 = state_26846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26846__$1,inst_26844);
} else {
if((state_val_26847 === (12))){
var state_26846__$1 = state_26846;
var statearr_26854_26880 = state_26846__$1;
(statearr_26854_26880[(2)] = null);

(statearr_26854_26880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26847 === (2))){
var state_26846__$1 = state_26846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26846__$1,(4),from);
} else {
if((state_val_26847 === (11))){
var inst_26835 = (state_26846[(2)]);
var state_26846__$1 = state_26846;
if(cljs.core.truth_(inst_26835)){
var statearr_26855_26881 = state_26846__$1;
(statearr_26855_26881[(1)] = (12));

} else {
var statearr_26856_26882 = state_26846__$1;
(statearr_26856_26882[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26847 === (9))){
var state_26846__$1 = state_26846;
var statearr_26857_26883 = state_26846__$1;
(statearr_26857_26883[(2)] = null);

(statearr_26857_26883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26847 === (5))){
var state_26846__$1 = state_26846;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26858_26884 = state_26846__$1;
(statearr_26858_26884[(1)] = (8));

} else {
var statearr_26859_26885 = state_26846__$1;
(statearr_26859_26885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26847 === (14))){
var inst_26840 = (state_26846[(2)]);
var state_26846__$1 = state_26846;
var statearr_26860_26886 = state_26846__$1;
(statearr_26860_26886[(2)] = inst_26840);

(statearr_26860_26886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26847 === (10))){
var inst_26832 = (state_26846[(2)]);
var state_26846__$1 = state_26846;
var statearr_26861_26887 = state_26846__$1;
(statearr_26861_26887[(2)] = inst_26832);

(statearr_26861_26887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26847 === (8))){
var inst_26829 = cljs.core.async.close_BANG_.call(null,to);
var state_26846__$1 = state_26846;
var statearr_26862_26888 = state_26846__$1;
(statearr_26862_26888[(2)] = inst_26829);

(statearr_26862_26888[(1)] = (10));


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
});})(c__26707__auto___26874))
;
return ((function (switch__26595__auto__,c__26707__auto___26874){
return (function() {
var cljs$core$async$state_machine__26596__auto__ = null;
var cljs$core$async$state_machine__26596__auto____0 = (function (){
var statearr_26866 = [null,null,null,null,null,null,null,null];
(statearr_26866[(0)] = cljs$core$async$state_machine__26596__auto__);

(statearr_26866[(1)] = (1));

return statearr_26866;
});
var cljs$core$async$state_machine__26596__auto____1 = (function (state_26846){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_26846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e26867){if((e26867 instanceof Object)){
var ex__26599__auto__ = e26867;
var statearr_26868_26889 = state_26846;
(statearr_26868_26889[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26890 = state_26846;
state_26846 = G__26890;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
cljs$core$async$state_machine__26596__auto__ = function(state_26846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26596__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26596__auto____1.call(this,state_26846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26596__auto____0;
cljs$core$async$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26596__auto____1;
return cljs$core$async$state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto___26874))
})();
var state__26709__auto__ = (function (){var statearr_26869 = f__26708__auto__.call(null);
(statearr_26869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto___26874);

return statearr_26869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto___26874))
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
return (function (p__27074){
var vec__27075 = p__27074;
var v = cljs.core.nth.call(null,vec__27075,(0),null);
var p = cljs.core.nth.call(null,vec__27075,(1),null);
var job = vec__27075;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26707__auto___27257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto___27257,res,vec__27075,v,p,job,jobs,results){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto___27257,res,vec__27075,v,p,job,jobs,results){
return (function (state_27080){
var state_val_27081 = (state_27080[(1)]);
if((state_val_27081 === (1))){
var state_27080__$1 = state_27080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27080__$1,(2),res,v);
} else {
if((state_val_27081 === (2))){
var inst_27077 = (state_27080[(2)]);
var inst_27078 = cljs.core.async.close_BANG_.call(null,res);
var state_27080__$1 = (function (){var statearr_27082 = state_27080;
(statearr_27082[(7)] = inst_27077);

return statearr_27082;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27080__$1,inst_27078);
} else {
return null;
}
}
});})(c__26707__auto___27257,res,vec__27075,v,p,job,jobs,results))
;
return ((function (switch__26595__auto__,c__26707__auto___27257,res,vec__27075,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____0 = (function (){
var statearr_27086 = [null,null,null,null,null,null,null,null];
(statearr_27086[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__);

(statearr_27086[(1)] = (1));

return statearr_27086;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____1 = (function (state_27080){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_27080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e27087){if((e27087 instanceof Object)){
var ex__26599__auto__ = e27087;
var statearr_27088_27258 = state_27080;
(statearr_27088_27258[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27259 = state_27080;
state_27080 = G__27259;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__ = function(state_27080){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____1.call(this,state_27080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto___27257,res,vec__27075,v,p,job,jobs,results))
})();
var state__26709__auto__ = (function (){var statearr_27089 = f__26708__auto__.call(null);
(statearr_27089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto___27257);

return statearr_27089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto___27257,res,vec__27075,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27090){
var vec__27091 = p__27090;
var v = cljs.core.nth.call(null,vec__27091,(0),null);
var p = cljs.core.nth.call(null,vec__27091,(1),null);
var job = vec__27091;
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
var n__23491__auto___27260 = n;
var __27261 = (0);
while(true){
if((__27261 < n__23491__auto___27260)){
var G__27092_27262 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27092_27262) {
case "compute":
var c__26707__auto___27264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27261,c__26707__auto___27264,G__27092_27262,n__23491__auto___27260,jobs,results,process,async){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (__27261,c__26707__auto___27264,G__27092_27262,n__23491__auto___27260,jobs,results,process,async){
return (function (state_27105){
var state_val_27106 = (state_27105[(1)]);
if((state_val_27106 === (1))){
var state_27105__$1 = state_27105;
var statearr_27107_27265 = state_27105__$1;
(statearr_27107_27265[(2)] = null);

(statearr_27107_27265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27106 === (2))){
var state_27105__$1 = state_27105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27105__$1,(4),jobs);
} else {
if((state_val_27106 === (3))){
var inst_27103 = (state_27105[(2)]);
var state_27105__$1 = state_27105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27105__$1,inst_27103);
} else {
if((state_val_27106 === (4))){
var inst_27095 = (state_27105[(2)]);
var inst_27096 = process.call(null,inst_27095);
var state_27105__$1 = state_27105;
if(cljs.core.truth_(inst_27096)){
var statearr_27108_27266 = state_27105__$1;
(statearr_27108_27266[(1)] = (5));

} else {
var statearr_27109_27267 = state_27105__$1;
(statearr_27109_27267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27106 === (5))){
var state_27105__$1 = state_27105;
var statearr_27110_27268 = state_27105__$1;
(statearr_27110_27268[(2)] = null);

(statearr_27110_27268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27106 === (6))){
var state_27105__$1 = state_27105;
var statearr_27111_27269 = state_27105__$1;
(statearr_27111_27269[(2)] = null);

(statearr_27111_27269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27106 === (7))){
var inst_27101 = (state_27105[(2)]);
var state_27105__$1 = state_27105;
var statearr_27112_27270 = state_27105__$1;
(statearr_27112_27270[(2)] = inst_27101);

(statearr_27112_27270[(1)] = (3));


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
});})(__27261,c__26707__auto___27264,G__27092_27262,n__23491__auto___27260,jobs,results,process,async))
;
return ((function (__27261,switch__26595__auto__,c__26707__auto___27264,G__27092_27262,n__23491__auto___27260,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____0 = (function (){
var statearr_27116 = [null,null,null,null,null,null,null];
(statearr_27116[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__);

(statearr_27116[(1)] = (1));

return statearr_27116;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____1 = (function (state_27105){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_27105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e27117){if((e27117 instanceof Object)){
var ex__26599__auto__ = e27117;
var statearr_27118_27271 = state_27105;
(statearr_27118_27271[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27272 = state_27105;
state_27105 = G__27272;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__ = function(state_27105){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____1.call(this,state_27105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__;
})()
;})(__27261,switch__26595__auto__,c__26707__auto___27264,G__27092_27262,n__23491__auto___27260,jobs,results,process,async))
})();
var state__26709__auto__ = (function (){var statearr_27119 = f__26708__auto__.call(null);
(statearr_27119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto___27264);

return statearr_27119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(__27261,c__26707__auto___27264,G__27092_27262,n__23491__auto___27260,jobs,results,process,async))
);


break;
case "async":
var c__26707__auto___27273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27261,c__26707__auto___27273,G__27092_27262,n__23491__auto___27260,jobs,results,process,async){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (__27261,c__26707__auto___27273,G__27092_27262,n__23491__auto___27260,jobs,results,process,async){
return (function (state_27132){
var state_val_27133 = (state_27132[(1)]);
if((state_val_27133 === (1))){
var state_27132__$1 = state_27132;
var statearr_27134_27274 = state_27132__$1;
(statearr_27134_27274[(2)] = null);

(statearr_27134_27274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27133 === (2))){
var state_27132__$1 = state_27132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27132__$1,(4),jobs);
} else {
if((state_val_27133 === (3))){
var inst_27130 = (state_27132[(2)]);
var state_27132__$1 = state_27132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27132__$1,inst_27130);
} else {
if((state_val_27133 === (4))){
var inst_27122 = (state_27132[(2)]);
var inst_27123 = async.call(null,inst_27122);
var state_27132__$1 = state_27132;
if(cljs.core.truth_(inst_27123)){
var statearr_27135_27275 = state_27132__$1;
(statearr_27135_27275[(1)] = (5));

} else {
var statearr_27136_27276 = state_27132__$1;
(statearr_27136_27276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27133 === (5))){
var state_27132__$1 = state_27132;
var statearr_27137_27277 = state_27132__$1;
(statearr_27137_27277[(2)] = null);

(statearr_27137_27277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27133 === (6))){
var state_27132__$1 = state_27132;
var statearr_27138_27278 = state_27132__$1;
(statearr_27138_27278[(2)] = null);

(statearr_27138_27278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27133 === (7))){
var inst_27128 = (state_27132[(2)]);
var state_27132__$1 = state_27132;
var statearr_27139_27279 = state_27132__$1;
(statearr_27139_27279[(2)] = inst_27128);

(statearr_27139_27279[(1)] = (3));


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
});})(__27261,c__26707__auto___27273,G__27092_27262,n__23491__auto___27260,jobs,results,process,async))
;
return ((function (__27261,switch__26595__auto__,c__26707__auto___27273,G__27092_27262,n__23491__auto___27260,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____0 = (function (){
var statearr_27143 = [null,null,null,null,null,null,null];
(statearr_27143[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__);

(statearr_27143[(1)] = (1));

return statearr_27143;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____1 = (function (state_27132){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_27132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e27144){if((e27144 instanceof Object)){
var ex__26599__auto__ = e27144;
var statearr_27145_27280 = state_27132;
(statearr_27145_27280[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27281 = state_27132;
state_27132 = G__27281;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__ = function(state_27132){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____1.call(this,state_27132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__;
})()
;})(__27261,switch__26595__auto__,c__26707__auto___27273,G__27092_27262,n__23491__auto___27260,jobs,results,process,async))
})();
var state__26709__auto__ = (function (){var statearr_27146 = f__26708__auto__.call(null);
(statearr_27146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto___27273);

return statearr_27146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(__27261,c__26707__auto___27273,G__27092_27262,n__23491__auto___27260,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27282 = (__27261 + (1));
__27261 = G__27282;
continue;
} else {
}
break;
}

var c__26707__auto___27283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto___27283,jobs,results,process,async){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto___27283,jobs,results,process,async){
return (function (state_27168){
var state_val_27169 = (state_27168[(1)]);
if((state_val_27169 === (1))){
var state_27168__$1 = state_27168;
var statearr_27170_27284 = state_27168__$1;
(statearr_27170_27284[(2)] = null);

(statearr_27170_27284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (2))){
var state_27168__$1 = state_27168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27168__$1,(4),from);
} else {
if((state_val_27169 === (3))){
var inst_27166 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27168__$1,inst_27166);
} else {
if((state_val_27169 === (4))){
var inst_27149 = (state_27168[(7)]);
var inst_27149__$1 = (state_27168[(2)]);
var inst_27150 = (inst_27149__$1 == null);
var state_27168__$1 = (function (){var statearr_27171 = state_27168;
(statearr_27171[(7)] = inst_27149__$1);

return statearr_27171;
})();
if(cljs.core.truth_(inst_27150)){
var statearr_27172_27285 = state_27168__$1;
(statearr_27172_27285[(1)] = (5));

} else {
var statearr_27173_27286 = state_27168__$1;
(statearr_27173_27286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (5))){
var inst_27152 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27168__$1 = state_27168;
var statearr_27174_27287 = state_27168__$1;
(statearr_27174_27287[(2)] = inst_27152);

(statearr_27174_27287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (6))){
var inst_27149 = (state_27168[(7)]);
var inst_27154 = (state_27168[(8)]);
var inst_27154__$1 = cljs.core.async.chan.call(null,(1));
var inst_27155 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27156 = [inst_27149,inst_27154__$1];
var inst_27157 = (new cljs.core.PersistentVector(null,2,(5),inst_27155,inst_27156,null));
var state_27168__$1 = (function (){var statearr_27175 = state_27168;
(statearr_27175[(8)] = inst_27154__$1);

return statearr_27175;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27168__$1,(8),jobs,inst_27157);
} else {
if((state_val_27169 === (7))){
var inst_27164 = (state_27168[(2)]);
var state_27168__$1 = state_27168;
var statearr_27176_27288 = state_27168__$1;
(statearr_27176_27288[(2)] = inst_27164);

(statearr_27176_27288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27169 === (8))){
var inst_27154 = (state_27168[(8)]);
var inst_27159 = (state_27168[(2)]);
var state_27168__$1 = (function (){var statearr_27177 = state_27168;
(statearr_27177[(9)] = inst_27159);

return statearr_27177;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27168__$1,(9),results,inst_27154);
} else {
if((state_val_27169 === (9))){
var inst_27161 = (state_27168[(2)]);
var state_27168__$1 = (function (){var statearr_27178 = state_27168;
(statearr_27178[(10)] = inst_27161);

return statearr_27178;
})();
var statearr_27179_27289 = state_27168__$1;
(statearr_27179_27289[(2)] = null);

(statearr_27179_27289[(1)] = (2));


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
});})(c__26707__auto___27283,jobs,results,process,async))
;
return ((function (switch__26595__auto__,c__26707__auto___27283,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____0 = (function (){
var statearr_27183 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27183[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__);

(statearr_27183[(1)] = (1));

return statearr_27183;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____1 = (function (state_27168){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_27168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e27184){if((e27184 instanceof Object)){
var ex__26599__auto__ = e27184;
var statearr_27185_27290 = state_27168;
(statearr_27185_27290[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27291 = state_27168;
state_27168 = G__27291;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__ = function(state_27168){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____1.call(this,state_27168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto___27283,jobs,results,process,async))
})();
var state__26709__auto__ = (function (){var statearr_27186 = f__26708__auto__.call(null);
(statearr_27186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto___27283);

return statearr_27186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto___27283,jobs,results,process,async))
);


var c__26707__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto__,jobs,results,process,async){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto__,jobs,results,process,async){
return (function (state_27224){
var state_val_27225 = (state_27224[(1)]);
if((state_val_27225 === (7))){
var inst_27220 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27226_27292 = state_27224__$1;
(statearr_27226_27292[(2)] = inst_27220);

(statearr_27226_27292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (20))){
var state_27224__$1 = state_27224;
var statearr_27227_27293 = state_27224__$1;
(statearr_27227_27293[(2)] = null);

(statearr_27227_27293[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (1))){
var state_27224__$1 = state_27224;
var statearr_27228_27294 = state_27224__$1;
(statearr_27228_27294[(2)] = null);

(statearr_27228_27294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (4))){
var inst_27189 = (state_27224[(7)]);
var inst_27189__$1 = (state_27224[(2)]);
var inst_27190 = (inst_27189__$1 == null);
var state_27224__$1 = (function (){var statearr_27229 = state_27224;
(statearr_27229[(7)] = inst_27189__$1);

return statearr_27229;
})();
if(cljs.core.truth_(inst_27190)){
var statearr_27230_27295 = state_27224__$1;
(statearr_27230_27295[(1)] = (5));

} else {
var statearr_27231_27296 = state_27224__$1;
(statearr_27231_27296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (15))){
var inst_27202 = (state_27224[(8)]);
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27224__$1,(18),to,inst_27202);
} else {
if((state_val_27225 === (21))){
var inst_27215 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27232_27297 = state_27224__$1;
(statearr_27232_27297[(2)] = inst_27215);

(statearr_27232_27297[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (13))){
var inst_27217 = (state_27224[(2)]);
var state_27224__$1 = (function (){var statearr_27233 = state_27224;
(statearr_27233[(9)] = inst_27217);

return statearr_27233;
})();
var statearr_27234_27298 = state_27224__$1;
(statearr_27234_27298[(2)] = null);

(statearr_27234_27298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (6))){
var inst_27189 = (state_27224[(7)]);
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27224__$1,(11),inst_27189);
} else {
if((state_val_27225 === (17))){
var inst_27210 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
if(cljs.core.truth_(inst_27210)){
var statearr_27235_27299 = state_27224__$1;
(statearr_27235_27299[(1)] = (19));

} else {
var statearr_27236_27300 = state_27224__$1;
(statearr_27236_27300[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (3))){
var inst_27222 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27224__$1,inst_27222);
} else {
if((state_val_27225 === (12))){
var inst_27199 = (state_27224[(10)]);
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27224__$1,(14),inst_27199);
} else {
if((state_val_27225 === (2))){
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27224__$1,(4),results);
} else {
if((state_val_27225 === (19))){
var state_27224__$1 = state_27224;
var statearr_27237_27301 = state_27224__$1;
(statearr_27237_27301[(2)] = null);

(statearr_27237_27301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (11))){
var inst_27199 = (state_27224[(2)]);
var state_27224__$1 = (function (){var statearr_27238 = state_27224;
(statearr_27238[(10)] = inst_27199);

return statearr_27238;
})();
var statearr_27239_27302 = state_27224__$1;
(statearr_27239_27302[(2)] = null);

(statearr_27239_27302[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (9))){
var state_27224__$1 = state_27224;
var statearr_27240_27303 = state_27224__$1;
(statearr_27240_27303[(2)] = null);

(statearr_27240_27303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (5))){
var state_27224__$1 = state_27224;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27241_27304 = state_27224__$1;
(statearr_27241_27304[(1)] = (8));

} else {
var statearr_27242_27305 = state_27224__$1;
(statearr_27242_27305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (14))){
var inst_27202 = (state_27224[(8)]);
var inst_27204 = (state_27224[(11)]);
var inst_27202__$1 = (state_27224[(2)]);
var inst_27203 = (inst_27202__$1 == null);
var inst_27204__$1 = cljs.core.not.call(null,inst_27203);
var state_27224__$1 = (function (){var statearr_27243 = state_27224;
(statearr_27243[(8)] = inst_27202__$1);

(statearr_27243[(11)] = inst_27204__$1);

return statearr_27243;
})();
if(inst_27204__$1){
var statearr_27244_27306 = state_27224__$1;
(statearr_27244_27306[(1)] = (15));

} else {
var statearr_27245_27307 = state_27224__$1;
(statearr_27245_27307[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (16))){
var inst_27204 = (state_27224[(11)]);
var state_27224__$1 = state_27224;
var statearr_27246_27308 = state_27224__$1;
(statearr_27246_27308[(2)] = inst_27204);

(statearr_27246_27308[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (10))){
var inst_27196 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27247_27309 = state_27224__$1;
(statearr_27247_27309[(2)] = inst_27196);

(statearr_27247_27309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (18))){
var inst_27207 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27248_27310 = state_27224__$1;
(statearr_27248_27310[(2)] = inst_27207);

(statearr_27248_27310[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (8))){
var inst_27193 = cljs.core.async.close_BANG_.call(null,to);
var state_27224__$1 = state_27224;
var statearr_27249_27311 = state_27224__$1;
(statearr_27249_27311[(2)] = inst_27193);

(statearr_27249_27311[(1)] = (10));


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
});})(c__26707__auto__,jobs,results,process,async))
;
return ((function (switch__26595__auto__,c__26707__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____0 = (function (){
var statearr_27253 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27253[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__);

(statearr_27253[(1)] = (1));

return statearr_27253;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____1 = (function (state_27224){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_27224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e27254){if((e27254 instanceof Object)){
var ex__26599__auto__ = e27254;
var statearr_27255_27312 = state_27224;
(statearr_27255_27312[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27313 = state_27224;
state_27224 = G__27313;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__ = function(state_27224){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____1.call(this,state_27224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26596__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto__,jobs,results,process,async))
})();
var state__26709__auto__ = (function (){var statearr_27256 = f__26708__auto__.call(null);
(statearr_27256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto__);

return statearr_27256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto__,jobs,results,process,async))
);

return c__26707__auto__;
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
var args27314 = [];
var len__23646__auto___27317 = arguments.length;
var i__23647__auto___27318 = (0);
while(true){
if((i__23647__auto___27318 < len__23646__auto___27317)){
args27314.push((arguments[i__23647__auto___27318]));

var G__27319 = (i__23647__auto___27318 + (1));
i__23647__auto___27318 = G__27319;
continue;
} else {
}
break;
}

var G__27316 = args27314.length;
switch (G__27316) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27314.length)].join('')));

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
var args27321 = [];
var len__23646__auto___27324 = arguments.length;
var i__23647__auto___27325 = (0);
while(true){
if((i__23647__auto___27325 < len__23646__auto___27324)){
args27321.push((arguments[i__23647__auto___27325]));

var G__27326 = (i__23647__auto___27325 + (1));
i__23647__auto___27325 = G__27326;
continue;
} else {
}
break;
}

var G__27323 = args27321.length;
switch (G__27323) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27321.length)].join('')));

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
var args27328 = [];
var len__23646__auto___27381 = arguments.length;
var i__23647__auto___27382 = (0);
while(true){
if((i__23647__auto___27382 < len__23646__auto___27381)){
args27328.push((arguments[i__23647__auto___27382]));

var G__27383 = (i__23647__auto___27382 + (1));
i__23647__auto___27382 = G__27383;
continue;
} else {
}
break;
}

var G__27330 = args27328.length;
switch (G__27330) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27328.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26707__auto___27385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto___27385,tc,fc){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto___27385,tc,fc){
return (function (state_27356){
var state_val_27357 = (state_27356[(1)]);
if((state_val_27357 === (7))){
var inst_27352 = (state_27356[(2)]);
var state_27356__$1 = state_27356;
var statearr_27358_27386 = state_27356__$1;
(statearr_27358_27386[(2)] = inst_27352);

(statearr_27358_27386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (1))){
var state_27356__$1 = state_27356;
var statearr_27359_27387 = state_27356__$1;
(statearr_27359_27387[(2)] = null);

(statearr_27359_27387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (4))){
var inst_27333 = (state_27356[(7)]);
var inst_27333__$1 = (state_27356[(2)]);
var inst_27334 = (inst_27333__$1 == null);
var state_27356__$1 = (function (){var statearr_27360 = state_27356;
(statearr_27360[(7)] = inst_27333__$1);

return statearr_27360;
})();
if(cljs.core.truth_(inst_27334)){
var statearr_27361_27388 = state_27356__$1;
(statearr_27361_27388[(1)] = (5));

} else {
var statearr_27362_27389 = state_27356__$1;
(statearr_27362_27389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (13))){
var state_27356__$1 = state_27356;
var statearr_27363_27390 = state_27356__$1;
(statearr_27363_27390[(2)] = null);

(statearr_27363_27390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (6))){
var inst_27333 = (state_27356[(7)]);
var inst_27339 = p.call(null,inst_27333);
var state_27356__$1 = state_27356;
if(cljs.core.truth_(inst_27339)){
var statearr_27364_27391 = state_27356__$1;
(statearr_27364_27391[(1)] = (9));

} else {
var statearr_27365_27392 = state_27356__$1;
(statearr_27365_27392[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (3))){
var inst_27354 = (state_27356[(2)]);
var state_27356__$1 = state_27356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27356__$1,inst_27354);
} else {
if((state_val_27357 === (12))){
var state_27356__$1 = state_27356;
var statearr_27366_27393 = state_27356__$1;
(statearr_27366_27393[(2)] = null);

(statearr_27366_27393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (2))){
var state_27356__$1 = state_27356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27356__$1,(4),ch);
} else {
if((state_val_27357 === (11))){
var inst_27333 = (state_27356[(7)]);
var inst_27343 = (state_27356[(2)]);
var state_27356__$1 = state_27356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27356__$1,(8),inst_27343,inst_27333);
} else {
if((state_val_27357 === (9))){
var state_27356__$1 = state_27356;
var statearr_27367_27394 = state_27356__$1;
(statearr_27367_27394[(2)] = tc);

(statearr_27367_27394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (5))){
var inst_27336 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27337 = cljs.core.async.close_BANG_.call(null,fc);
var state_27356__$1 = (function (){var statearr_27368 = state_27356;
(statearr_27368[(8)] = inst_27336);

return statearr_27368;
})();
var statearr_27369_27395 = state_27356__$1;
(statearr_27369_27395[(2)] = inst_27337);

(statearr_27369_27395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (14))){
var inst_27350 = (state_27356[(2)]);
var state_27356__$1 = state_27356;
var statearr_27370_27396 = state_27356__$1;
(statearr_27370_27396[(2)] = inst_27350);

(statearr_27370_27396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (10))){
var state_27356__$1 = state_27356;
var statearr_27371_27397 = state_27356__$1;
(statearr_27371_27397[(2)] = fc);

(statearr_27371_27397[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (8))){
var inst_27345 = (state_27356[(2)]);
var state_27356__$1 = state_27356;
if(cljs.core.truth_(inst_27345)){
var statearr_27372_27398 = state_27356__$1;
(statearr_27372_27398[(1)] = (12));

} else {
var statearr_27373_27399 = state_27356__$1;
(statearr_27373_27399[(1)] = (13));

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
});})(c__26707__auto___27385,tc,fc))
;
return ((function (switch__26595__auto__,c__26707__auto___27385,tc,fc){
return (function() {
var cljs$core$async$state_machine__26596__auto__ = null;
var cljs$core$async$state_machine__26596__auto____0 = (function (){
var statearr_27377 = [null,null,null,null,null,null,null,null,null];
(statearr_27377[(0)] = cljs$core$async$state_machine__26596__auto__);

(statearr_27377[(1)] = (1));

return statearr_27377;
});
var cljs$core$async$state_machine__26596__auto____1 = (function (state_27356){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_27356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e27378){if((e27378 instanceof Object)){
var ex__26599__auto__ = e27378;
var statearr_27379_27400 = state_27356;
(statearr_27379_27400[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27401 = state_27356;
state_27356 = G__27401;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
cljs$core$async$state_machine__26596__auto__ = function(state_27356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26596__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26596__auto____1.call(this,state_27356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26596__auto____0;
cljs$core$async$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26596__auto____1;
return cljs$core$async$state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto___27385,tc,fc))
})();
var state__26709__auto__ = (function (){var statearr_27380 = f__26708__auto__.call(null);
(statearr_27380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto___27385);

return statearr_27380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto___27385,tc,fc))
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
var c__26707__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto__){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto__){
return (function (state_27465){
var state_val_27466 = (state_27465[(1)]);
if((state_val_27466 === (7))){
var inst_27461 = (state_27465[(2)]);
var state_27465__$1 = state_27465;
var statearr_27467_27488 = state_27465__$1;
(statearr_27467_27488[(2)] = inst_27461);

(statearr_27467_27488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27466 === (1))){
var inst_27445 = init;
var state_27465__$1 = (function (){var statearr_27468 = state_27465;
(statearr_27468[(7)] = inst_27445);

return statearr_27468;
})();
var statearr_27469_27489 = state_27465__$1;
(statearr_27469_27489[(2)] = null);

(statearr_27469_27489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27466 === (4))){
var inst_27448 = (state_27465[(8)]);
var inst_27448__$1 = (state_27465[(2)]);
var inst_27449 = (inst_27448__$1 == null);
var state_27465__$1 = (function (){var statearr_27470 = state_27465;
(statearr_27470[(8)] = inst_27448__$1);

return statearr_27470;
})();
if(cljs.core.truth_(inst_27449)){
var statearr_27471_27490 = state_27465__$1;
(statearr_27471_27490[(1)] = (5));

} else {
var statearr_27472_27491 = state_27465__$1;
(statearr_27472_27491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27466 === (6))){
var inst_27445 = (state_27465[(7)]);
var inst_27452 = (state_27465[(9)]);
var inst_27448 = (state_27465[(8)]);
var inst_27452__$1 = f.call(null,inst_27445,inst_27448);
var inst_27453 = cljs.core.reduced_QMARK_.call(null,inst_27452__$1);
var state_27465__$1 = (function (){var statearr_27473 = state_27465;
(statearr_27473[(9)] = inst_27452__$1);

return statearr_27473;
})();
if(inst_27453){
var statearr_27474_27492 = state_27465__$1;
(statearr_27474_27492[(1)] = (8));

} else {
var statearr_27475_27493 = state_27465__$1;
(statearr_27475_27493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27466 === (3))){
var inst_27463 = (state_27465[(2)]);
var state_27465__$1 = state_27465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27465__$1,inst_27463);
} else {
if((state_val_27466 === (2))){
var state_27465__$1 = state_27465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27465__$1,(4),ch);
} else {
if((state_val_27466 === (9))){
var inst_27452 = (state_27465[(9)]);
var inst_27445 = inst_27452;
var state_27465__$1 = (function (){var statearr_27476 = state_27465;
(statearr_27476[(7)] = inst_27445);

return statearr_27476;
})();
var statearr_27477_27494 = state_27465__$1;
(statearr_27477_27494[(2)] = null);

(statearr_27477_27494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27466 === (5))){
var inst_27445 = (state_27465[(7)]);
var state_27465__$1 = state_27465;
var statearr_27478_27495 = state_27465__$1;
(statearr_27478_27495[(2)] = inst_27445);

(statearr_27478_27495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27466 === (10))){
var inst_27459 = (state_27465[(2)]);
var state_27465__$1 = state_27465;
var statearr_27479_27496 = state_27465__$1;
(statearr_27479_27496[(2)] = inst_27459);

(statearr_27479_27496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27466 === (8))){
var inst_27452 = (state_27465[(9)]);
var inst_27455 = cljs.core.deref.call(null,inst_27452);
var state_27465__$1 = state_27465;
var statearr_27480_27497 = state_27465__$1;
(statearr_27480_27497[(2)] = inst_27455);

(statearr_27480_27497[(1)] = (10));


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
});})(c__26707__auto__))
;
return ((function (switch__26595__auto__,c__26707__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26596__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26596__auto____0 = (function (){
var statearr_27484 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27484[(0)] = cljs$core$async$reduce_$_state_machine__26596__auto__);

(statearr_27484[(1)] = (1));

return statearr_27484;
});
var cljs$core$async$reduce_$_state_machine__26596__auto____1 = (function (state_27465){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_27465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e27485){if((e27485 instanceof Object)){
var ex__26599__auto__ = e27485;
var statearr_27486_27498 = state_27465;
(statearr_27486_27498[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27499 = state_27465;
state_27465 = G__27499;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26596__auto__ = function(state_27465){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26596__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26596__auto____1.call(this,state_27465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26596__auto____0;
cljs$core$async$reduce_$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26596__auto____1;
return cljs$core$async$reduce_$_state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto__))
})();
var state__26709__auto__ = (function (){var statearr_27487 = f__26708__auto__.call(null);
(statearr_27487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto__);

return statearr_27487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto__))
);

return c__26707__auto__;
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
var args27500 = [];
var len__23646__auto___27552 = arguments.length;
var i__23647__auto___27553 = (0);
while(true){
if((i__23647__auto___27553 < len__23646__auto___27552)){
args27500.push((arguments[i__23647__auto___27553]));

var G__27554 = (i__23647__auto___27553 + (1));
i__23647__auto___27553 = G__27554;
continue;
} else {
}
break;
}

var G__27502 = args27500.length;
switch (G__27502) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27500.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26707__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto__){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto__){
return (function (state_27527){
var state_val_27528 = (state_27527[(1)]);
if((state_val_27528 === (7))){
var inst_27509 = (state_27527[(2)]);
var state_27527__$1 = state_27527;
var statearr_27529_27556 = state_27527__$1;
(statearr_27529_27556[(2)] = inst_27509);

(statearr_27529_27556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27528 === (1))){
var inst_27503 = cljs.core.seq.call(null,coll);
var inst_27504 = inst_27503;
var state_27527__$1 = (function (){var statearr_27530 = state_27527;
(statearr_27530[(7)] = inst_27504);

return statearr_27530;
})();
var statearr_27531_27557 = state_27527__$1;
(statearr_27531_27557[(2)] = null);

(statearr_27531_27557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27528 === (4))){
var inst_27504 = (state_27527[(7)]);
var inst_27507 = cljs.core.first.call(null,inst_27504);
var state_27527__$1 = state_27527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27527__$1,(7),ch,inst_27507);
} else {
if((state_val_27528 === (13))){
var inst_27521 = (state_27527[(2)]);
var state_27527__$1 = state_27527;
var statearr_27532_27558 = state_27527__$1;
(statearr_27532_27558[(2)] = inst_27521);

(statearr_27532_27558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27528 === (6))){
var inst_27512 = (state_27527[(2)]);
var state_27527__$1 = state_27527;
if(cljs.core.truth_(inst_27512)){
var statearr_27533_27559 = state_27527__$1;
(statearr_27533_27559[(1)] = (8));

} else {
var statearr_27534_27560 = state_27527__$1;
(statearr_27534_27560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27528 === (3))){
var inst_27525 = (state_27527[(2)]);
var state_27527__$1 = state_27527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27527__$1,inst_27525);
} else {
if((state_val_27528 === (12))){
var state_27527__$1 = state_27527;
var statearr_27535_27561 = state_27527__$1;
(statearr_27535_27561[(2)] = null);

(statearr_27535_27561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27528 === (2))){
var inst_27504 = (state_27527[(7)]);
var state_27527__$1 = state_27527;
if(cljs.core.truth_(inst_27504)){
var statearr_27536_27562 = state_27527__$1;
(statearr_27536_27562[(1)] = (4));

} else {
var statearr_27537_27563 = state_27527__$1;
(statearr_27537_27563[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27528 === (11))){
var inst_27518 = cljs.core.async.close_BANG_.call(null,ch);
var state_27527__$1 = state_27527;
var statearr_27538_27564 = state_27527__$1;
(statearr_27538_27564[(2)] = inst_27518);

(statearr_27538_27564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27528 === (9))){
var state_27527__$1 = state_27527;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27539_27565 = state_27527__$1;
(statearr_27539_27565[(1)] = (11));

} else {
var statearr_27540_27566 = state_27527__$1;
(statearr_27540_27566[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27528 === (5))){
var inst_27504 = (state_27527[(7)]);
var state_27527__$1 = state_27527;
var statearr_27541_27567 = state_27527__$1;
(statearr_27541_27567[(2)] = inst_27504);

(statearr_27541_27567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27528 === (10))){
var inst_27523 = (state_27527[(2)]);
var state_27527__$1 = state_27527;
var statearr_27542_27568 = state_27527__$1;
(statearr_27542_27568[(2)] = inst_27523);

(statearr_27542_27568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27528 === (8))){
var inst_27504 = (state_27527[(7)]);
var inst_27514 = cljs.core.next.call(null,inst_27504);
var inst_27504__$1 = inst_27514;
var state_27527__$1 = (function (){var statearr_27543 = state_27527;
(statearr_27543[(7)] = inst_27504__$1);

return statearr_27543;
})();
var statearr_27544_27569 = state_27527__$1;
(statearr_27544_27569[(2)] = null);

(statearr_27544_27569[(1)] = (2));


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
});})(c__26707__auto__))
;
return ((function (switch__26595__auto__,c__26707__auto__){
return (function() {
var cljs$core$async$state_machine__26596__auto__ = null;
var cljs$core$async$state_machine__26596__auto____0 = (function (){
var statearr_27548 = [null,null,null,null,null,null,null,null];
(statearr_27548[(0)] = cljs$core$async$state_machine__26596__auto__);

(statearr_27548[(1)] = (1));

return statearr_27548;
});
var cljs$core$async$state_machine__26596__auto____1 = (function (state_27527){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_27527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e27549){if((e27549 instanceof Object)){
var ex__26599__auto__ = e27549;
var statearr_27550_27570 = state_27527;
(statearr_27550_27570[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27571 = state_27527;
state_27527 = G__27571;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
cljs$core$async$state_machine__26596__auto__ = function(state_27527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26596__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26596__auto____1.call(this,state_27527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26596__auto____0;
cljs$core$async$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26596__auto____1;
return cljs$core$async$state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto__))
})();
var state__26709__auto__ = (function (){var statearr_27551 = f__26708__auto__.call(null);
(statearr_27551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto__);

return statearr_27551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto__))
);

return c__26707__auto__;
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
var x__23239__auto__ = (((_ == null))?null:_);
var m__23240__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__23239__auto__)]);
if(!((m__23240__auto__ == null))){
return m__23240__auto__.call(null,_);
} else {
var m__23240__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__23240__auto____$1 == null))){
return m__23240__auto____$1.call(null,_);
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
var x__23239__auto__ = (((m == null))?null:m);
var m__23240__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__23239__auto__)]);
if(!((m__23240__auto__ == null))){
return m__23240__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__23240__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__23240__auto____$1 == null))){
return m__23240__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__23239__auto__ = (((m == null))?null:m);
var m__23240__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__23239__auto__)]);
if(!((m__23240__auto__ == null))){
return m__23240__auto__.call(null,m,ch);
} else {
var m__23240__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__23240__auto____$1 == null))){
return m__23240__auto____$1.call(null,m,ch);
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
var x__23239__auto__ = (((m == null))?null:m);
var m__23240__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__23239__auto__)]);
if(!((m__23240__auto__ == null))){
return m__23240__auto__.call(null,m);
} else {
var m__23240__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__23240__auto____$1 == null))){
return m__23240__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async27793 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27793 = (function (mult,ch,cs,meta27794){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27794 = meta27794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27795,meta27794__$1){
var self__ = this;
var _27795__$1 = this;
return (new cljs.core.async.t_cljs$core$async27793(self__.mult,self__.ch,self__.cs,meta27794__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27795){
var self__ = this;
var _27795__$1 = this;
return self__.meta27794;
});})(cs))
;

cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27793.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27793.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27794","meta27794",-1424219801,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27793.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27793";

cljs.core.async.t_cljs$core$async27793.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"cljs.core.async/t_cljs$core$async27793");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27793 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27793(mult__$1,ch__$1,cs__$1,meta27794){
return (new cljs.core.async.t_cljs$core$async27793(mult__$1,ch__$1,cs__$1,meta27794));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27793(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26707__auto___28014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto___28014,cs,m,dchan,dctr,done){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto___28014,cs,m,dchan,dctr,done){
return (function (state_27926){
var state_val_27927 = (state_27926[(1)]);
if((state_val_27927 === (7))){
var inst_27922 = (state_27926[(2)]);
var state_27926__$1 = state_27926;
var statearr_27928_28015 = state_27926__$1;
(statearr_27928_28015[(2)] = inst_27922);

(statearr_27928_28015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (20))){
var inst_27827 = (state_27926[(7)]);
var inst_27837 = cljs.core.first.call(null,inst_27827);
var inst_27838 = cljs.core.nth.call(null,inst_27837,(0),null);
var inst_27839 = cljs.core.nth.call(null,inst_27837,(1),null);
var state_27926__$1 = (function (){var statearr_27929 = state_27926;
(statearr_27929[(8)] = inst_27838);

return statearr_27929;
})();
if(cljs.core.truth_(inst_27839)){
var statearr_27930_28016 = state_27926__$1;
(statearr_27930_28016[(1)] = (22));

} else {
var statearr_27931_28017 = state_27926__$1;
(statearr_27931_28017[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (27))){
var inst_27867 = (state_27926[(9)]);
var inst_27874 = (state_27926[(10)]);
var inst_27869 = (state_27926[(11)]);
var inst_27798 = (state_27926[(12)]);
var inst_27874__$1 = cljs.core._nth.call(null,inst_27867,inst_27869);
var inst_27875 = cljs.core.async.put_BANG_.call(null,inst_27874__$1,inst_27798,done);
var state_27926__$1 = (function (){var statearr_27932 = state_27926;
(statearr_27932[(10)] = inst_27874__$1);

return statearr_27932;
})();
if(cljs.core.truth_(inst_27875)){
var statearr_27933_28018 = state_27926__$1;
(statearr_27933_28018[(1)] = (30));

} else {
var statearr_27934_28019 = state_27926__$1;
(statearr_27934_28019[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (1))){
var state_27926__$1 = state_27926;
var statearr_27935_28020 = state_27926__$1;
(statearr_27935_28020[(2)] = null);

(statearr_27935_28020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (24))){
var inst_27827 = (state_27926[(7)]);
var inst_27844 = (state_27926[(2)]);
var inst_27845 = cljs.core.next.call(null,inst_27827);
var inst_27807 = inst_27845;
var inst_27808 = null;
var inst_27809 = (0);
var inst_27810 = (0);
var state_27926__$1 = (function (){var statearr_27936 = state_27926;
(statearr_27936[(13)] = inst_27844);

(statearr_27936[(14)] = inst_27810);

(statearr_27936[(15)] = inst_27807);

(statearr_27936[(16)] = inst_27809);

(statearr_27936[(17)] = inst_27808);

return statearr_27936;
})();
var statearr_27937_28021 = state_27926__$1;
(statearr_27937_28021[(2)] = null);

(statearr_27937_28021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (39))){
var state_27926__$1 = state_27926;
var statearr_27941_28022 = state_27926__$1;
(statearr_27941_28022[(2)] = null);

(statearr_27941_28022[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (4))){
var inst_27798 = (state_27926[(12)]);
var inst_27798__$1 = (state_27926[(2)]);
var inst_27799 = (inst_27798__$1 == null);
var state_27926__$1 = (function (){var statearr_27942 = state_27926;
(statearr_27942[(12)] = inst_27798__$1);

return statearr_27942;
})();
if(cljs.core.truth_(inst_27799)){
var statearr_27943_28023 = state_27926__$1;
(statearr_27943_28023[(1)] = (5));

} else {
var statearr_27944_28024 = state_27926__$1;
(statearr_27944_28024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (15))){
var inst_27810 = (state_27926[(14)]);
var inst_27807 = (state_27926[(15)]);
var inst_27809 = (state_27926[(16)]);
var inst_27808 = (state_27926[(17)]);
var inst_27823 = (state_27926[(2)]);
var inst_27824 = (inst_27810 + (1));
var tmp27938 = inst_27807;
var tmp27939 = inst_27809;
var tmp27940 = inst_27808;
var inst_27807__$1 = tmp27938;
var inst_27808__$1 = tmp27940;
var inst_27809__$1 = tmp27939;
var inst_27810__$1 = inst_27824;
var state_27926__$1 = (function (){var statearr_27945 = state_27926;
(statearr_27945[(14)] = inst_27810__$1);

(statearr_27945[(18)] = inst_27823);

(statearr_27945[(15)] = inst_27807__$1);

(statearr_27945[(16)] = inst_27809__$1);

(statearr_27945[(17)] = inst_27808__$1);

return statearr_27945;
})();
var statearr_27946_28025 = state_27926__$1;
(statearr_27946_28025[(2)] = null);

(statearr_27946_28025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (21))){
var inst_27848 = (state_27926[(2)]);
var state_27926__$1 = state_27926;
var statearr_27950_28026 = state_27926__$1;
(statearr_27950_28026[(2)] = inst_27848);

(statearr_27950_28026[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (31))){
var inst_27874 = (state_27926[(10)]);
var inst_27878 = done.call(null,null);
var inst_27879 = cljs.core.async.untap_STAR_.call(null,m,inst_27874);
var state_27926__$1 = (function (){var statearr_27951 = state_27926;
(statearr_27951[(19)] = inst_27878);

return statearr_27951;
})();
var statearr_27952_28027 = state_27926__$1;
(statearr_27952_28027[(2)] = inst_27879);

(statearr_27952_28027[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (32))){
var inst_27867 = (state_27926[(9)]);
var inst_27868 = (state_27926[(20)]);
var inst_27869 = (state_27926[(11)]);
var inst_27866 = (state_27926[(21)]);
var inst_27881 = (state_27926[(2)]);
var inst_27882 = (inst_27869 + (1));
var tmp27947 = inst_27867;
var tmp27948 = inst_27868;
var tmp27949 = inst_27866;
var inst_27866__$1 = tmp27949;
var inst_27867__$1 = tmp27947;
var inst_27868__$1 = tmp27948;
var inst_27869__$1 = inst_27882;
var state_27926__$1 = (function (){var statearr_27953 = state_27926;
(statearr_27953[(9)] = inst_27867__$1);

(statearr_27953[(20)] = inst_27868__$1);

(statearr_27953[(22)] = inst_27881);

(statearr_27953[(11)] = inst_27869__$1);

(statearr_27953[(21)] = inst_27866__$1);

return statearr_27953;
})();
var statearr_27954_28028 = state_27926__$1;
(statearr_27954_28028[(2)] = null);

(statearr_27954_28028[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (40))){
var inst_27894 = (state_27926[(23)]);
var inst_27898 = done.call(null,null);
var inst_27899 = cljs.core.async.untap_STAR_.call(null,m,inst_27894);
var state_27926__$1 = (function (){var statearr_27955 = state_27926;
(statearr_27955[(24)] = inst_27898);

return statearr_27955;
})();
var statearr_27956_28029 = state_27926__$1;
(statearr_27956_28029[(2)] = inst_27899);

(statearr_27956_28029[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (33))){
var inst_27885 = (state_27926[(25)]);
var inst_27887 = cljs.core.chunked_seq_QMARK_.call(null,inst_27885);
var state_27926__$1 = state_27926;
if(inst_27887){
var statearr_27957_28030 = state_27926__$1;
(statearr_27957_28030[(1)] = (36));

} else {
var statearr_27958_28031 = state_27926__$1;
(statearr_27958_28031[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (13))){
var inst_27817 = (state_27926[(26)]);
var inst_27820 = cljs.core.async.close_BANG_.call(null,inst_27817);
var state_27926__$1 = state_27926;
var statearr_27959_28032 = state_27926__$1;
(statearr_27959_28032[(2)] = inst_27820);

(statearr_27959_28032[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (22))){
var inst_27838 = (state_27926[(8)]);
var inst_27841 = cljs.core.async.close_BANG_.call(null,inst_27838);
var state_27926__$1 = state_27926;
var statearr_27960_28033 = state_27926__$1;
(statearr_27960_28033[(2)] = inst_27841);

(statearr_27960_28033[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (36))){
var inst_27885 = (state_27926[(25)]);
var inst_27889 = cljs.core.chunk_first.call(null,inst_27885);
var inst_27890 = cljs.core.chunk_rest.call(null,inst_27885);
var inst_27891 = cljs.core.count.call(null,inst_27889);
var inst_27866 = inst_27890;
var inst_27867 = inst_27889;
var inst_27868 = inst_27891;
var inst_27869 = (0);
var state_27926__$1 = (function (){var statearr_27961 = state_27926;
(statearr_27961[(9)] = inst_27867);

(statearr_27961[(20)] = inst_27868);

(statearr_27961[(11)] = inst_27869);

(statearr_27961[(21)] = inst_27866);

return statearr_27961;
})();
var statearr_27962_28034 = state_27926__$1;
(statearr_27962_28034[(2)] = null);

(statearr_27962_28034[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (41))){
var inst_27885 = (state_27926[(25)]);
var inst_27901 = (state_27926[(2)]);
var inst_27902 = cljs.core.next.call(null,inst_27885);
var inst_27866 = inst_27902;
var inst_27867 = null;
var inst_27868 = (0);
var inst_27869 = (0);
var state_27926__$1 = (function (){var statearr_27963 = state_27926;
(statearr_27963[(9)] = inst_27867);

(statearr_27963[(20)] = inst_27868);

(statearr_27963[(11)] = inst_27869);

(statearr_27963[(27)] = inst_27901);

(statearr_27963[(21)] = inst_27866);

return statearr_27963;
})();
var statearr_27964_28035 = state_27926__$1;
(statearr_27964_28035[(2)] = null);

(statearr_27964_28035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (43))){
var state_27926__$1 = state_27926;
var statearr_27965_28036 = state_27926__$1;
(statearr_27965_28036[(2)] = null);

(statearr_27965_28036[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (29))){
var inst_27910 = (state_27926[(2)]);
var state_27926__$1 = state_27926;
var statearr_27966_28037 = state_27926__$1;
(statearr_27966_28037[(2)] = inst_27910);

(statearr_27966_28037[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (44))){
var inst_27919 = (state_27926[(2)]);
var state_27926__$1 = (function (){var statearr_27967 = state_27926;
(statearr_27967[(28)] = inst_27919);

return statearr_27967;
})();
var statearr_27968_28038 = state_27926__$1;
(statearr_27968_28038[(2)] = null);

(statearr_27968_28038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (6))){
var inst_27858 = (state_27926[(29)]);
var inst_27857 = cljs.core.deref.call(null,cs);
var inst_27858__$1 = cljs.core.keys.call(null,inst_27857);
var inst_27859 = cljs.core.count.call(null,inst_27858__$1);
var inst_27860 = cljs.core.reset_BANG_.call(null,dctr,inst_27859);
var inst_27865 = cljs.core.seq.call(null,inst_27858__$1);
var inst_27866 = inst_27865;
var inst_27867 = null;
var inst_27868 = (0);
var inst_27869 = (0);
var state_27926__$1 = (function (){var statearr_27969 = state_27926;
(statearr_27969[(9)] = inst_27867);

(statearr_27969[(20)] = inst_27868);

(statearr_27969[(30)] = inst_27860);

(statearr_27969[(29)] = inst_27858__$1);

(statearr_27969[(11)] = inst_27869);

(statearr_27969[(21)] = inst_27866);

return statearr_27969;
})();
var statearr_27970_28039 = state_27926__$1;
(statearr_27970_28039[(2)] = null);

(statearr_27970_28039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (28))){
var inst_27885 = (state_27926[(25)]);
var inst_27866 = (state_27926[(21)]);
var inst_27885__$1 = cljs.core.seq.call(null,inst_27866);
var state_27926__$1 = (function (){var statearr_27971 = state_27926;
(statearr_27971[(25)] = inst_27885__$1);

return statearr_27971;
})();
if(inst_27885__$1){
var statearr_27972_28040 = state_27926__$1;
(statearr_27972_28040[(1)] = (33));

} else {
var statearr_27973_28041 = state_27926__$1;
(statearr_27973_28041[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (25))){
var inst_27868 = (state_27926[(20)]);
var inst_27869 = (state_27926[(11)]);
var inst_27871 = (inst_27869 < inst_27868);
var inst_27872 = inst_27871;
var state_27926__$1 = state_27926;
if(cljs.core.truth_(inst_27872)){
var statearr_27974_28042 = state_27926__$1;
(statearr_27974_28042[(1)] = (27));

} else {
var statearr_27975_28043 = state_27926__$1;
(statearr_27975_28043[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (34))){
var state_27926__$1 = state_27926;
var statearr_27976_28044 = state_27926__$1;
(statearr_27976_28044[(2)] = null);

(statearr_27976_28044[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (17))){
var state_27926__$1 = state_27926;
var statearr_27977_28045 = state_27926__$1;
(statearr_27977_28045[(2)] = null);

(statearr_27977_28045[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (3))){
var inst_27924 = (state_27926[(2)]);
var state_27926__$1 = state_27926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27926__$1,inst_27924);
} else {
if((state_val_27927 === (12))){
var inst_27853 = (state_27926[(2)]);
var state_27926__$1 = state_27926;
var statearr_27978_28046 = state_27926__$1;
(statearr_27978_28046[(2)] = inst_27853);

(statearr_27978_28046[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (2))){
var state_27926__$1 = state_27926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27926__$1,(4),ch);
} else {
if((state_val_27927 === (23))){
var state_27926__$1 = state_27926;
var statearr_27979_28047 = state_27926__$1;
(statearr_27979_28047[(2)] = null);

(statearr_27979_28047[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (35))){
var inst_27908 = (state_27926[(2)]);
var state_27926__$1 = state_27926;
var statearr_27980_28048 = state_27926__$1;
(statearr_27980_28048[(2)] = inst_27908);

(statearr_27980_28048[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (19))){
var inst_27827 = (state_27926[(7)]);
var inst_27831 = cljs.core.chunk_first.call(null,inst_27827);
var inst_27832 = cljs.core.chunk_rest.call(null,inst_27827);
var inst_27833 = cljs.core.count.call(null,inst_27831);
var inst_27807 = inst_27832;
var inst_27808 = inst_27831;
var inst_27809 = inst_27833;
var inst_27810 = (0);
var state_27926__$1 = (function (){var statearr_27981 = state_27926;
(statearr_27981[(14)] = inst_27810);

(statearr_27981[(15)] = inst_27807);

(statearr_27981[(16)] = inst_27809);

(statearr_27981[(17)] = inst_27808);

return statearr_27981;
})();
var statearr_27982_28049 = state_27926__$1;
(statearr_27982_28049[(2)] = null);

(statearr_27982_28049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (11))){
var inst_27807 = (state_27926[(15)]);
var inst_27827 = (state_27926[(7)]);
var inst_27827__$1 = cljs.core.seq.call(null,inst_27807);
var state_27926__$1 = (function (){var statearr_27983 = state_27926;
(statearr_27983[(7)] = inst_27827__$1);

return statearr_27983;
})();
if(inst_27827__$1){
var statearr_27984_28050 = state_27926__$1;
(statearr_27984_28050[(1)] = (16));

} else {
var statearr_27985_28051 = state_27926__$1;
(statearr_27985_28051[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (9))){
var inst_27855 = (state_27926[(2)]);
var state_27926__$1 = state_27926;
var statearr_27986_28052 = state_27926__$1;
(statearr_27986_28052[(2)] = inst_27855);

(statearr_27986_28052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (5))){
var inst_27805 = cljs.core.deref.call(null,cs);
var inst_27806 = cljs.core.seq.call(null,inst_27805);
var inst_27807 = inst_27806;
var inst_27808 = null;
var inst_27809 = (0);
var inst_27810 = (0);
var state_27926__$1 = (function (){var statearr_27987 = state_27926;
(statearr_27987[(14)] = inst_27810);

(statearr_27987[(15)] = inst_27807);

(statearr_27987[(16)] = inst_27809);

(statearr_27987[(17)] = inst_27808);

return statearr_27987;
})();
var statearr_27988_28053 = state_27926__$1;
(statearr_27988_28053[(2)] = null);

(statearr_27988_28053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (14))){
var state_27926__$1 = state_27926;
var statearr_27989_28054 = state_27926__$1;
(statearr_27989_28054[(2)] = null);

(statearr_27989_28054[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (45))){
var inst_27916 = (state_27926[(2)]);
var state_27926__$1 = state_27926;
var statearr_27990_28055 = state_27926__$1;
(statearr_27990_28055[(2)] = inst_27916);

(statearr_27990_28055[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (26))){
var inst_27858 = (state_27926[(29)]);
var inst_27912 = (state_27926[(2)]);
var inst_27913 = cljs.core.seq.call(null,inst_27858);
var state_27926__$1 = (function (){var statearr_27991 = state_27926;
(statearr_27991[(31)] = inst_27912);

return statearr_27991;
})();
if(inst_27913){
var statearr_27992_28056 = state_27926__$1;
(statearr_27992_28056[(1)] = (42));

} else {
var statearr_27993_28057 = state_27926__$1;
(statearr_27993_28057[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (16))){
var inst_27827 = (state_27926[(7)]);
var inst_27829 = cljs.core.chunked_seq_QMARK_.call(null,inst_27827);
var state_27926__$1 = state_27926;
if(inst_27829){
var statearr_27994_28058 = state_27926__$1;
(statearr_27994_28058[(1)] = (19));

} else {
var statearr_27995_28059 = state_27926__$1;
(statearr_27995_28059[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (38))){
var inst_27905 = (state_27926[(2)]);
var state_27926__$1 = state_27926;
var statearr_27996_28060 = state_27926__$1;
(statearr_27996_28060[(2)] = inst_27905);

(statearr_27996_28060[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (30))){
var state_27926__$1 = state_27926;
var statearr_27997_28061 = state_27926__$1;
(statearr_27997_28061[(2)] = null);

(statearr_27997_28061[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (10))){
var inst_27810 = (state_27926[(14)]);
var inst_27808 = (state_27926[(17)]);
var inst_27816 = cljs.core._nth.call(null,inst_27808,inst_27810);
var inst_27817 = cljs.core.nth.call(null,inst_27816,(0),null);
var inst_27818 = cljs.core.nth.call(null,inst_27816,(1),null);
var state_27926__$1 = (function (){var statearr_27998 = state_27926;
(statearr_27998[(26)] = inst_27817);

return statearr_27998;
})();
if(cljs.core.truth_(inst_27818)){
var statearr_27999_28062 = state_27926__$1;
(statearr_27999_28062[(1)] = (13));

} else {
var statearr_28000_28063 = state_27926__$1;
(statearr_28000_28063[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (18))){
var inst_27851 = (state_27926[(2)]);
var state_27926__$1 = state_27926;
var statearr_28001_28064 = state_27926__$1;
(statearr_28001_28064[(2)] = inst_27851);

(statearr_28001_28064[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (42))){
var state_27926__$1 = state_27926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27926__$1,(45),dchan);
} else {
if((state_val_27927 === (37))){
var inst_27798 = (state_27926[(12)]);
var inst_27885 = (state_27926[(25)]);
var inst_27894 = (state_27926[(23)]);
var inst_27894__$1 = cljs.core.first.call(null,inst_27885);
var inst_27895 = cljs.core.async.put_BANG_.call(null,inst_27894__$1,inst_27798,done);
var state_27926__$1 = (function (){var statearr_28002 = state_27926;
(statearr_28002[(23)] = inst_27894__$1);

return statearr_28002;
})();
if(cljs.core.truth_(inst_27895)){
var statearr_28003_28065 = state_27926__$1;
(statearr_28003_28065[(1)] = (39));

} else {
var statearr_28004_28066 = state_27926__$1;
(statearr_28004_28066[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27927 === (8))){
var inst_27810 = (state_27926[(14)]);
var inst_27809 = (state_27926[(16)]);
var inst_27812 = (inst_27810 < inst_27809);
var inst_27813 = inst_27812;
var state_27926__$1 = state_27926;
if(cljs.core.truth_(inst_27813)){
var statearr_28005_28067 = state_27926__$1;
(statearr_28005_28067[(1)] = (10));

} else {
var statearr_28006_28068 = state_27926__$1;
(statearr_28006_28068[(1)] = (11));

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
});})(c__26707__auto___28014,cs,m,dchan,dctr,done))
;
return ((function (switch__26595__auto__,c__26707__auto___28014,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26596__auto__ = null;
var cljs$core$async$mult_$_state_machine__26596__auto____0 = (function (){
var statearr_28010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28010[(0)] = cljs$core$async$mult_$_state_machine__26596__auto__);

(statearr_28010[(1)] = (1));

return statearr_28010;
});
var cljs$core$async$mult_$_state_machine__26596__auto____1 = (function (state_27926){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_27926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e28011){if((e28011 instanceof Object)){
var ex__26599__auto__ = e28011;
var statearr_28012_28069 = state_27926;
(statearr_28012_28069[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28070 = state_27926;
state_27926 = G__28070;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26596__auto__ = function(state_27926){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26596__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26596__auto____1.call(this,state_27926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26596__auto____0;
cljs$core$async$mult_$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26596__auto____1;
return cljs$core$async$mult_$_state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto___28014,cs,m,dchan,dctr,done))
})();
var state__26709__auto__ = (function (){var statearr_28013 = f__26708__auto__.call(null);
(statearr_28013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto___28014);

return statearr_28013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto___28014,cs,m,dchan,dctr,done))
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
var args28071 = [];
var len__23646__auto___28074 = arguments.length;
var i__23647__auto___28075 = (0);
while(true){
if((i__23647__auto___28075 < len__23646__auto___28074)){
args28071.push((arguments[i__23647__auto___28075]));

var G__28076 = (i__23647__auto___28075 + (1));
i__23647__auto___28075 = G__28076;
continue;
} else {
}
break;
}

var G__28073 = args28071.length;
switch (G__28073) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28071.length)].join('')));

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
var x__23239__auto__ = (((m == null))?null:m);
var m__23240__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__23239__auto__)]);
if(!((m__23240__auto__ == null))){
return m__23240__auto__.call(null,m,ch);
} else {
var m__23240__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__23240__auto____$1 == null))){
return m__23240__auto____$1.call(null,m,ch);
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
var x__23239__auto__ = (((m == null))?null:m);
var m__23240__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__23239__auto__)]);
if(!((m__23240__auto__ == null))){
return m__23240__auto__.call(null,m,ch);
} else {
var m__23240__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__23240__auto____$1 == null))){
return m__23240__auto____$1.call(null,m,ch);
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
var x__23239__auto__ = (((m == null))?null:m);
var m__23240__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__23239__auto__)]);
if(!((m__23240__auto__ == null))){
return m__23240__auto__.call(null,m);
} else {
var m__23240__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__23240__auto____$1 == null))){
return m__23240__auto____$1.call(null,m);
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
var x__23239__auto__ = (((m == null))?null:m);
var m__23240__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__23239__auto__)]);
if(!((m__23240__auto__ == null))){
return m__23240__auto__.call(null,m,state_map);
} else {
var m__23240__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__23240__auto____$1 == null))){
return m__23240__auto____$1.call(null,m,state_map);
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
var x__23239__auto__ = (((m == null))?null:m);
var m__23240__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__23239__auto__)]);
if(!((m__23240__auto__ == null))){
return m__23240__auto__.call(null,m,mode);
} else {
var m__23240__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__23240__auto____$1 == null))){
return m__23240__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__23653__auto__ = [];
var len__23646__auto___28088 = arguments.length;
var i__23647__auto___28089 = (0);
while(true){
if((i__23647__auto___28089 < len__23646__auto___28088)){
args__23653__auto__.push((arguments[i__23647__auto___28089]));

var G__28090 = (i__23647__auto___28089 + (1));
i__23647__auto___28089 = G__28090;
continue;
} else {
}
break;
}

var argseq__23654__auto__ = ((((3) < args__23653__auto__.length))?(new cljs.core.IndexedSeq(args__23653__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23654__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28082){
var map__28083 = p__28082;
var map__28083__$1 = ((((!((map__28083 == null)))?((((map__28083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28083):map__28083);
var opts = map__28083__$1;
var statearr_28085_28091 = state;
(statearr_28085_28091[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__28083,map__28083__$1,opts){
return (function (val){
var statearr_28086_28092 = state;
(statearr_28086_28092[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28083,map__28083__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_28087_28093 = state;
(statearr_28087_28093[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28078){
var G__28079 = cljs.core.first.call(null,seq28078);
var seq28078__$1 = cljs.core.next.call(null,seq28078);
var G__28080 = cljs.core.first.call(null,seq28078__$1);
var seq28078__$2 = cljs.core.next.call(null,seq28078__$1);
var G__28081 = cljs.core.first.call(null,seq28078__$2);
var seq28078__$3 = cljs.core.next.call(null,seq28078__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28079,G__28080,G__28081,seq28078__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28257 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28257 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28258){
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
this.meta28258 = meta28258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28259,meta28258__$1){
var self__ = this;
var _28259__$1 = this;
return (new cljs.core.async.t_cljs$core$async28257(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28258__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28259){
var self__ = this;
var _28259__$1 = this;
return self__.meta28258;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28257.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28258","meta28258",-946712525,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28257.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28257";

cljs.core.async.t_cljs$core$async28257.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"cljs.core.async/t_cljs$core$async28257");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28257 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28257(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28258){
return (new cljs.core.async.t_cljs$core$async28257(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28258));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28257(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26707__auto___28420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto___28420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto___28420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28357){
var state_val_28358 = (state_28357[(1)]);
if((state_val_28358 === (7))){
var inst_28275 = (state_28357[(2)]);
var state_28357__$1 = state_28357;
var statearr_28359_28421 = state_28357__$1;
(statearr_28359_28421[(2)] = inst_28275);

(statearr_28359_28421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (20))){
var inst_28287 = (state_28357[(7)]);
var state_28357__$1 = state_28357;
var statearr_28360_28422 = state_28357__$1;
(statearr_28360_28422[(2)] = inst_28287);

(statearr_28360_28422[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (27))){
var state_28357__$1 = state_28357;
var statearr_28361_28423 = state_28357__$1;
(statearr_28361_28423[(2)] = null);

(statearr_28361_28423[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (1))){
var inst_28263 = (state_28357[(8)]);
var inst_28263__$1 = calc_state.call(null);
var inst_28265 = (inst_28263__$1 == null);
var inst_28266 = cljs.core.not.call(null,inst_28265);
var state_28357__$1 = (function (){var statearr_28362 = state_28357;
(statearr_28362[(8)] = inst_28263__$1);

return statearr_28362;
})();
if(inst_28266){
var statearr_28363_28424 = state_28357__$1;
(statearr_28363_28424[(1)] = (2));

} else {
var statearr_28364_28425 = state_28357__$1;
(statearr_28364_28425[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (24))){
var inst_28317 = (state_28357[(9)]);
var inst_28331 = (state_28357[(10)]);
var inst_28310 = (state_28357[(11)]);
var inst_28331__$1 = inst_28310.call(null,inst_28317);
var state_28357__$1 = (function (){var statearr_28365 = state_28357;
(statearr_28365[(10)] = inst_28331__$1);

return statearr_28365;
})();
if(cljs.core.truth_(inst_28331__$1)){
var statearr_28366_28426 = state_28357__$1;
(statearr_28366_28426[(1)] = (29));

} else {
var statearr_28367_28427 = state_28357__$1;
(statearr_28367_28427[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (4))){
var inst_28278 = (state_28357[(2)]);
var state_28357__$1 = state_28357;
if(cljs.core.truth_(inst_28278)){
var statearr_28368_28428 = state_28357__$1;
(statearr_28368_28428[(1)] = (8));

} else {
var statearr_28369_28429 = state_28357__$1;
(statearr_28369_28429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (15))){
var inst_28304 = (state_28357[(2)]);
var state_28357__$1 = state_28357;
if(cljs.core.truth_(inst_28304)){
var statearr_28370_28430 = state_28357__$1;
(statearr_28370_28430[(1)] = (19));

} else {
var statearr_28371_28431 = state_28357__$1;
(statearr_28371_28431[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (21))){
var inst_28309 = (state_28357[(12)]);
var inst_28309__$1 = (state_28357[(2)]);
var inst_28310 = cljs.core.get.call(null,inst_28309__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28311 = cljs.core.get.call(null,inst_28309__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28312 = cljs.core.get.call(null,inst_28309__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28357__$1 = (function (){var statearr_28372 = state_28357;
(statearr_28372[(13)] = inst_28311);

(statearr_28372[(11)] = inst_28310);

(statearr_28372[(12)] = inst_28309__$1);

return statearr_28372;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28357__$1,(22),inst_28312);
} else {
if((state_val_28358 === (31))){
var inst_28339 = (state_28357[(2)]);
var state_28357__$1 = state_28357;
if(cljs.core.truth_(inst_28339)){
var statearr_28373_28432 = state_28357__$1;
(statearr_28373_28432[(1)] = (32));

} else {
var statearr_28374_28433 = state_28357__$1;
(statearr_28374_28433[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (32))){
var inst_28316 = (state_28357[(14)]);
var state_28357__$1 = state_28357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28357__$1,(35),out,inst_28316);
} else {
if((state_val_28358 === (33))){
var inst_28309 = (state_28357[(12)]);
var inst_28287 = inst_28309;
var state_28357__$1 = (function (){var statearr_28375 = state_28357;
(statearr_28375[(7)] = inst_28287);

return statearr_28375;
})();
var statearr_28376_28434 = state_28357__$1;
(statearr_28376_28434[(2)] = null);

(statearr_28376_28434[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (13))){
var inst_28287 = (state_28357[(7)]);
var inst_28294 = inst_28287.cljs$lang$protocol_mask$partition0$;
var inst_28295 = (inst_28294 & (64));
var inst_28296 = inst_28287.cljs$core$ISeq$;
var inst_28297 = (inst_28295) || (inst_28296);
var state_28357__$1 = state_28357;
if(cljs.core.truth_(inst_28297)){
var statearr_28377_28435 = state_28357__$1;
(statearr_28377_28435[(1)] = (16));

} else {
var statearr_28378_28436 = state_28357__$1;
(statearr_28378_28436[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (22))){
var inst_28317 = (state_28357[(9)]);
var inst_28316 = (state_28357[(14)]);
var inst_28315 = (state_28357[(2)]);
var inst_28316__$1 = cljs.core.nth.call(null,inst_28315,(0),null);
var inst_28317__$1 = cljs.core.nth.call(null,inst_28315,(1),null);
var inst_28318 = (inst_28316__$1 == null);
var inst_28319 = cljs.core._EQ_.call(null,inst_28317__$1,change);
var inst_28320 = (inst_28318) || (inst_28319);
var state_28357__$1 = (function (){var statearr_28379 = state_28357;
(statearr_28379[(9)] = inst_28317__$1);

(statearr_28379[(14)] = inst_28316__$1);

return statearr_28379;
})();
if(cljs.core.truth_(inst_28320)){
var statearr_28380_28437 = state_28357__$1;
(statearr_28380_28437[(1)] = (23));

} else {
var statearr_28381_28438 = state_28357__$1;
(statearr_28381_28438[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (36))){
var inst_28309 = (state_28357[(12)]);
var inst_28287 = inst_28309;
var state_28357__$1 = (function (){var statearr_28382 = state_28357;
(statearr_28382[(7)] = inst_28287);

return statearr_28382;
})();
var statearr_28383_28439 = state_28357__$1;
(statearr_28383_28439[(2)] = null);

(statearr_28383_28439[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (29))){
var inst_28331 = (state_28357[(10)]);
var state_28357__$1 = state_28357;
var statearr_28384_28440 = state_28357__$1;
(statearr_28384_28440[(2)] = inst_28331);

(statearr_28384_28440[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (6))){
var state_28357__$1 = state_28357;
var statearr_28385_28441 = state_28357__$1;
(statearr_28385_28441[(2)] = false);

(statearr_28385_28441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (28))){
var inst_28327 = (state_28357[(2)]);
var inst_28328 = calc_state.call(null);
var inst_28287 = inst_28328;
var state_28357__$1 = (function (){var statearr_28386 = state_28357;
(statearr_28386[(15)] = inst_28327);

(statearr_28386[(7)] = inst_28287);

return statearr_28386;
})();
var statearr_28387_28442 = state_28357__$1;
(statearr_28387_28442[(2)] = null);

(statearr_28387_28442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (25))){
var inst_28353 = (state_28357[(2)]);
var state_28357__$1 = state_28357;
var statearr_28388_28443 = state_28357__$1;
(statearr_28388_28443[(2)] = inst_28353);

(statearr_28388_28443[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (34))){
var inst_28351 = (state_28357[(2)]);
var state_28357__$1 = state_28357;
var statearr_28389_28444 = state_28357__$1;
(statearr_28389_28444[(2)] = inst_28351);

(statearr_28389_28444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (17))){
var state_28357__$1 = state_28357;
var statearr_28390_28445 = state_28357__$1;
(statearr_28390_28445[(2)] = false);

(statearr_28390_28445[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (3))){
var state_28357__$1 = state_28357;
var statearr_28391_28446 = state_28357__$1;
(statearr_28391_28446[(2)] = false);

(statearr_28391_28446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (12))){
var inst_28355 = (state_28357[(2)]);
var state_28357__$1 = state_28357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28357__$1,inst_28355);
} else {
if((state_val_28358 === (2))){
var inst_28263 = (state_28357[(8)]);
var inst_28268 = inst_28263.cljs$lang$protocol_mask$partition0$;
var inst_28269 = (inst_28268 & (64));
var inst_28270 = inst_28263.cljs$core$ISeq$;
var inst_28271 = (inst_28269) || (inst_28270);
var state_28357__$1 = state_28357;
if(cljs.core.truth_(inst_28271)){
var statearr_28392_28447 = state_28357__$1;
(statearr_28392_28447[(1)] = (5));

} else {
var statearr_28393_28448 = state_28357__$1;
(statearr_28393_28448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (23))){
var inst_28316 = (state_28357[(14)]);
var inst_28322 = (inst_28316 == null);
var state_28357__$1 = state_28357;
if(cljs.core.truth_(inst_28322)){
var statearr_28394_28449 = state_28357__$1;
(statearr_28394_28449[(1)] = (26));

} else {
var statearr_28395_28450 = state_28357__$1;
(statearr_28395_28450[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (35))){
var inst_28342 = (state_28357[(2)]);
var state_28357__$1 = state_28357;
if(cljs.core.truth_(inst_28342)){
var statearr_28396_28451 = state_28357__$1;
(statearr_28396_28451[(1)] = (36));

} else {
var statearr_28397_28452 = state_28357__$1;
(statearr_28397_28452[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (19))){
var inst_28287 = (state_28357[(7)]);
var inst_28306 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28287);
var state_28357__$1 = state_28357;
var statearr_28398_28453 = state_28357__$1;
(statearr_28398_28453[(2)] = inst_28306);

(statearr_28398_28453[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (11))){
var inst_28287 = (state_28357[(7)]);
var inst_28291 = (inst_28287 == null);
var inst_28292 = cljs.core.not.call(null,inst_28291);
var state_28357__$1 = state_28357;
if(inst_28292){
var statearr_28399_28454 = state_28357__$1;
(statearr_28399_28454[(1)] = (13));

} else {
var statearr_28400_28455 = state_28357__$1;
(statearr_28400_28455[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (9))){
var inst_28263 = (state_28357[(8)]);
var state_28357__$1 = state_28357;
var statearr_28401_28456 = state_28357__$1;
(statearr_28401_28456[(2)] = inst_28263);

(statearr_28401_28456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (5))){
var state_28357__$1 = state_28357;
var statearr_28402_28457 = state_28357__$1;
(statearr_28402_28457[(2)] = true);

(statearr_28402_28457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (14))){
var state_28357__$1 = state_28357;
var statearr_28403_28458 = state_28357__$1;
(statearr_28403_28458[(2)] = false);

(statearr_28403_28458[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (26))){
var inst_28317 = (state_28357[(9)]);
var inst_28324 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28317);
var state_28357__$1 = state_28357;
var statearr_28404_28459 = state_28357__$1;
(statearr_28404_28459[(2)] = inst_28324);

(statearr_28404_28459[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (16))){
var state_28357__$1 = state_28357;
var statearr_28405_28460 = state_28357__$1;
(statearr_28405_28460[(2)] = true);

(statearr_28405_28460[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (38))){
var inst_28347 = (state_28357[(2)]);
var state_28357__$1 = state_28357;
var statearr_28406_28461 = state_28357__$1;
(statearr_28406_28461[(2)] = inst_28347);

(statearr_28406_28461[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (30))){
var inst_28317 = (state_28357[(9)]);
var inst_28311 = (state_28357[(13)]);
var inst_28310 = (state_28357[(11)]);
var inst_28334 = cljs.core.empty_QMARK_.call(null,inst_28310);
var inst_28335 = inst_28311.call(null,inst_28317);
var inst_28336 = cljs.core.not.call(null,inst_28335);
var inst_28337 = (inst_28334) && (inst_28336);
var state_28357__$1 = state_28357;
var statearr_28407_28462 = state_28357__$1;
(statearr_28407_28462[(2)] = inst_28337);

(statearr_28407_28462[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (10))){
var inst_28263 = (state_28357[(8)]);
var inst_28283 = (state_28357[(2)]);
var inst_28284 = cljs.core.get.call(null,inst_28283,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28285 = cljs.core.get.call(null,inst_28283,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28286 = cljs.core.get.call(null,inst_28283,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28287 = inst_28263;
var state_28357__$1 = (function (){var statearr_28408 = state_28357;
(statearr_28408[(16)] = inst_28285);

(statearr_28408[(7)] = inst_28287);

(statearr_28408[(17)] = inst_28284);

(statearr_28408[(18)] = inst_28286);

return statearr_28408;
})();
var statearr_28409_28463 = state_28357__$1;
(statearr_28409_28463[(2)] = null);

(statearr_28409_28463[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (18))){
var inst_28301 = (state_28357[(2)]);
var state_28357__$1 = state_28357;
var statearr_28410_28464 = state_28357__$1;
(statearr_28410_28464[(2)] = inst_28301);

(statearr_28410_28464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (37))){
var state_28357__$1 = state_28357;
var statearr_28411_28465 = state_28357__$1;
(statearr_28411_28465[(2)] = null);

(statearr_28411_28465[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28358 === (8))){
var inst_28263 = (state_28357[(8)]);
var inst_28280 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28263);
var state_28357__$1 = state_28357;
var statearr_28412_28466 = state_28357__$1;
(statearr_28412_28466[(2)] = inst_28280);

(statearr_28412_28466[(1)] = (10));


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
});})(c__26707__auto___28420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26595__auto__,c__26707__auto___28420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26596__auto__ = null;
var cljs$core$async$mix_$_state_machine__26596__auto____0 = (function (){
var statearr_28416 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28416[(0)] = cljs$core$async$mix_$_state_machine__26596__auto__);

(statearr_28416[(1)] = (1));

return statearr_28416;
});
var cljs$core$async$mix_$_state_machine__26596__auto____1 = (function (state_28357){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_28357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e28417){if((e28417 instanceof Object)){
var ex__26599__auto__ = e28417;
var statearr_28418_28467 = state_28357;
(statearr_28418_28467[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28468 = state_28357;
state_28357 = G__28468;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26596__auto__ = function(state_28357){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26596__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26596__auto____1.call(this,state_28357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26596__auto____0;
cljs$core$async$mix_$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26596__auto____1;
return cljs$core$async$mix_$_state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto___28420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26709__auto__ = (function (){var statearr_28419 = f__26708__auto__.call(null);
(statearr_28419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto___28420);

return statearr_28419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto___28420,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__23239__auto__ = (((p == null))?null:p);
var m__23240__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__23239__auto__)]);
if(!((m__23240__auto__ == null))){
return m__23240__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__23240__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__23240__auto____$1 == null))){
return m__23240__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__23239__auto__ = (((p == null))?null:p);
var m__23240__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__23239__auto__)]);
if(!((m__23240__auto__ == null))){
return m__23240__auto__.call(null,p,v,ch);
} else {
var m__23240__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__23240__auto____$1 == null))){
return m__23240__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28469 = [];
var len__23646__auto___28472 = arguments.length;
var i__23647__auto___28473 = (0);
while(true){
if((i__23647__auto___28473 < len__23646__auto___28472)){
args28469.push((arguments[i__23647__auto___28473]));

var G__28474 = (i__23647__auto___28473 + (1));
i__23647__auto___28473 = G__28474;
continue;
} else {
}
break;
}

var G__28471 = args28469.length;
switch (G__28471) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28469.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__23239__auto__ = (((p == null))?null:p);
var m__23240__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23239__auto__)]);
if(!((m__23240__auto__ == null))){
return m__23240__auto__.call(null,p);
} else {
var m__23240__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__23240__auto____$1 == null))){
return m__23240__auto____$1.call(null,p);
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
var x__23239__auto__ = (((p == null))?null:p);
var m__23240__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23239__auto__)]);
if(!((m__23240__auto__ == null))){
return m__23240__auto__.call(null,p,v);
} else {
var m__23240__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__23240__auto____$1 == null))){
return m__23240__auto____$1.call(null,p,v);
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
var args28477 = [];
var len__23646__auto___28602 = arguments.length;
var i__23647__auto___28603 = (0);
while(true){
if((i__23647__auto___28603 < len__23646__auto___28602)){
args28477.push((arguments[i__23647__auto___28603]));

var G__28604 = (i__23647__auto___28603 + (1));
i__23647__auto___28603 = G__28604;
continue;
} else {
}
break;
}

var G__28479 = args28477.length;
switch (G__28479) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28477.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__22576__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__22576__auto__)){
return or__22576__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__22576__auto__,mults){
return (function (p1__28476_SHARP_){
if(cljs.core.truth_(p1__28476_SHARP_.call(null,topic))){
return p1__28476_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28476_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__22576__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28480 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28481){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28481 = meta28481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28482,meta28481__$1){
var self__ = this;
var _28482__$1 = this;
return (new cljs.core.async.t_cljs$core$async28480(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28481__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28482){
var self__ = this;
var _28482__$1 = this;
return self__.meta28481;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28480.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28481","meta28481",425943498,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28480";

cljs.core.async.t_cljs$core$async28480.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"cljs.core.async/t_cljs$core$async28480");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28480 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28480(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28481){
return (new cljs.core.async.t_cljs$core$async28480(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28481));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28480(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26707__auto___28606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto___28606,mults,ensure_mult,p){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto___28606,mults,ensure_mult,p){
return (function (state_28554){
var state_val_28555 = (state_28554[(1)]);
if((state_val_28555 === (7))){
var inst_28550 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
var statearr_28556_28607 = state_28554__$1;
(statearr_28556_28607[(2)] = inst_28550);

(statearr_28556_28607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (20))){
var state_28554__$1 = state_28554;
var statearr_28557_28608 = state_28554__$1;
(statearr_28557_28608[(2)] = null);

(statearr_28557_28608[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (1))){
var state_28554__$1 = state_28554;
var statearr_28558_28609 = state_28554__$1;
(statearr_28558_28609[(2)] = null);

(statearr_28558_28609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (24))){
var inst_28533 = (state_28554[(7)]);
var inst_28542 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28533);
var state_28554__$1 = state_28554;
var statearr_28559_28610 = state_28554__$1;
(statearr_28559_28610[(2)] = inst_28542);

(statearr_28559_28610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (4))){
var inst_28485 = (state_28554[(8)]);
var inst_28485__$1 = (state_28554[(2)]);
var inst_28486 = (inst_28485__$1 == null);
var state_28554__$1 = (function (){var statearr_28560 = state_28554;
(statearr_28560[(8)] = inst_28485__$1);

return statearr_28560;
})();
if(cljs.core.truth_(inst_28486)){
var statearr_28561_28611 = state_28554__$1;
(statearr_28561_28611[(1)] = (5));

} else {
var statearr_28562_28612 = state_28554__$1;
(statearr_28562_28612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (15))){
var inst_28527 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
var statearr_28563_28613 = state_28554__$1;
(statearr_28563_28613[(2)] = inst_28527);

(statearr_28563_28613[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (21))){
var inst_28547 = (state_28554[(2)]);
var state_28554__$1 = (function (){var statearr_28564 = state_28554;
(statearr_28564[(9)] = inst_28547);

return statearr_28564;
})();
var statearr_28565_28614 = state_28554__$1;
(statearr_28565_28614[(2)] = null);

(statearr_28565_28614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (13))){
var inst_28509 = (state_28554[(10)]);
var inst_28511 = cljs.core.chunked_seq_QMARK_.call(null,inst_28509);
var state_28554__$1 = state_28554;
if(inst_28511){
var statearr_28566_28615 = state_28554__$1;
(statearr_28566_28615[(1)] = (16));

} else {
var statearr_28567_28616 = state_28554__$1;
(statearr_28567_28616[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (22))){
var inst_28539 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
if(cljs.core.truth_(inst_28539)){
var statearr_28568_28617 = state_28554__$1;
(statearr_28568_28617[(1)] = (23));

} else {
var statearr_28569_28618 = state_28554__$1;
(statearr_28569_28618[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (6))){
var inst_28485 = (state_28554[(8)]);
var inst_28535 = (state_28554[(11)]);
var inst_28533 = (state_28554[(7)]);
var inst_28533__$1 = topic_fn.call(null,inst_28485);
var inst_28534 = cljs.core.deref.call(null,mults);
var inst_28535__$1 = cljs.core.get.call(null,inst_28534,inst_28533__$1);
var state_28554__$1 = (function (){var statearr_28570 = state_28554;
(statearr_28570[(11)] = inst_28535__$1);

(statearr_28570[(7)] = inst_28533__$1);

return statearr_28570;
})();
if(cljs.core.truth_(inst_28535__$1)){
var statearr_28571_28619 = state_28554__$1;
(statearr_28571_28619[(1)] = (19));

} else {
var statearr_28572_28620 = state_28554__$1;
(statearr_28572_28620[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (25))){
var inst_28544 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
var statearr_28573_28621 = state_28554__$1;
(statearr_28573_28621[(2)] = inst_28544);

(statearr_28573_28621[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (17))){
var inst_28509 = (state_28554[(10)]);
var inst_28518 = cljs.core.first.call(null,inst_28509);
var inst_28519 = cljs.core.async.muxch_STAR_.call(null,inst_28518);
var inst_28520 = cljs.core.async.close_BANG_.call(null,inst_28519);
var inst_28521 = cljs.core.next.call(null,inst_28509);
var inst_28495 = inst_28521;
var inst_28496 = null;
var inst_28497 = (0);
var inst_28498 = (0);
var state_28554__$1 = (function (){var statearr_28574 = state_28554;
(statearr_28574[(12)] = inst_28520);

(statearr_28574[(13)] = inst_28495);

(statearr_28574[(14)] = inst_28498);

(statearr_28574[(15)] = inst_28496);

(statearr_28574[(16)] = inst_28497);

return statearr_28574;
})();
var statearr_28575_28622 = state_28554__$1;
(statearr_28575_28622[(2)] = null);

(statearr_28575_28622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (3))){
var inst_28552 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28554__$1,inst_28552);
} else {
if((state_val_28555 === (12))){
var inst_28529 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
var statearr_28576_28623 = state_28554__$1;
(statearr_28576_28623[(2)] = inst_28529);

(statearr_28576_28623[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (2))){
var state_28554__$1 = state_28554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28554__$1,(4),ch);
} else {
if((state_val_28555 === (23))){
var state_28554__$1 = state_28554;
var statearr_28577_28624 = state_28554__$1;
(statearr_28577_28624[(2)] = null);

(statearr_28577_28624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (19))){
var inst_28485 = (state_28554[(8)]);
var inst_28535 = (state_28554[(11)]);
var inst_28537 = cljs.core.async.muxch_STAR_.call(null,inst_28535);
var state_28554__$1 = state_28554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28554__$1,(22),inst_28537,inst_28485);
} else {
if((state_val_28555 === (11))){
var inst_28509 = (state_28554[(10)]);
var inst_28495 = (state_28554[(13)]);
var inst_28509__$1 = cljs.core.seq.call(null,inst_28495);
var state_28554__$1 = (function (){var statearr_28578 = state_28554;
(statearr_28578[(10)] = inst_28509__$1);

return statearr_28578;
})();
if(inst_28509__$1){
var statearr_28579_28625 = state_28554__$1;
(statearr_28579_28625[(1)] = (13));

} else {
var statearr_28580_28626 = state_28554__$1;
(statearr_28580_28626[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (9))){
var inst_28531 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
var statearr_28581_28627 = state_28554__$1;
(statearr_28581_28627[(2)] = inst_28531);

(statearr_28581_28627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (5))){
var inst_28492 = cljs.core.deref.call(null,mults);
var inst_28493 = cljs.core.vals.call(null,inst_28492);
var inst_28494 = cljs.core.seq.call(null,inst_28493);
var inst_28495 = inst_28494;
var inst_28496 = null;
var inst_28497 = (0);
var inst_28498 = (0);
var state_28554__$1 = (function (){var statearr_28582 = state_28554;
(statearr_28582[(13)] = inst_28495);

(statearr_28582[(14)] = inst_28498);

(statearr_28582[(15)] = inst_28496);

(statearr_28582[(16)] = inst_28497);

return statearr_28582;
})();
var statearr_28583_28628 = state_28554__$1;
(statearr_28583_28628[(2)] = null);

(statearr_28583_28628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (14))){
var state_28554__$1 = state_28554;
var statearr_28587_28629 = state_28554__$1;
(statearr_28587_28629[(2)] = null);

(statearr_28587_28629[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (16))){
var inst_28509 = (state_28554[(10)]);
var inst_28513 = cljs.core.chunk_first.call(null,inst_28509);
var inst_28514 = cljs.core.chunk_rest.call(null,inst_28509);
var inst_28515 = cljs.core.count.call(null,inst_28513);
var inst_28495 = inst_28514;
var inst_28496 = inst_28513;
var inst_28497 = inst_28515;
var inst_28498 = (0);
var state_28554__$1 = (function (){var statearr_28588 = state_28554;
(statearr_28588[(13)] = inst_28495);

(statearr_28588[(14)] = inst_28498);

(statearr_28588[(15)] = inst_28496);

(statearr_28588[(16)] = inst_28497);

return statearr_28588;
})();
var statearr_28589_28630 = state_28554__$1;
(statearr_28589_28630[(2)] = null);

(statearr_28589_28630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (10))){
var inst_28495 = (state_28554[(13)]);
var inst_28498 = (state_28554[(14)]);
var inst_28496 = (state_28554[(15)]);
var inst_28497 = (state_28554[(16)]);
var inst_28503 = cljs.core._nth.call(null,inst_28496,inst_28498);
var inst_28504 = cljs.core.async.muxch_STAR_.call(null,inst_28503);
var inst_28505 = cljs.core.async.close_BANG_.call(null,inst_28504);
var inst_28506 = (inst_28498 + (1));
var tmp28584 = inst_28495;
var tmp28585 = inst_28496;
var tmp28586 = inst_28497;
var inst_28495__$1 = tmp28584;
var inst_28496__$1 = tmp28585;
var inst_28497__$1 = tmp28586;
var inst_28498__$1 = inst_28506;
var state_28554__$1 = (function (){var statearr_28590 = state_28554;
(statearr_28590[(17)] = inst_28505);

(statearr_28590[(13)] = inst_28495__$1);

(statearr_28590[(14)] = inst_28498__$1);

(statearr_28590[(15)] = inst_28496__$1);

(statearr_28590[(16)] = inst_28497__$1);

return statearr_28590;
})();
var statearr_28591_28631 = state_28554__$1;
(statearr_28591_28631[(2)] = null);

(statearr_28591_28631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (18))){
var inst_28524 = (state_28554[(2)]);
var state_28554__$1 = state_28554;
var statearr_28592_28632 = state_28554__$1;
(statearr_28592_28632[(2)] = inst_28524);

(statearr_28592_28632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28555 === (8))){
var inst_28498 = (state_28554[(14)]);
var inst_28497 = (state_28554[(16)]);
var inst_28500 = (inst_28498 < inst_28497);
var inst_28501 = inst_28500;
var state_28554__$1 = state_28554;
if(cljs.core.truth_(inst_28501)){
var statearr_28593_28633 = state_28554__$1;
(statearr_28593_28633[(1)] = (10));

} else {
var statearr_28594_28634 = state_28554__$1;
(statearr_28594_28634[(1)] = (11));

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
});})(c__26707__auto___28606,mults,ensure_mult,p))
;
return ((function (switch__26595__auto__,c__26707__auto___28606,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26596__auto__ = null;
var cljs$core$async$state_machine__26596__auto____0 = (function (){
var statearr_28598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28598[(0)] = cljs$core$async$state_machine__26596__auto__);

(statearr_28598[(1)] = (1));

return statearr_28598;
});
var cljs$core$async$state_machine__26596__auto____1 = (function (state_28554){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_28554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e28599){if((e28599 instanceof Object)){
var ex__26599__auto__ = e28599;
var statearr_28600_28635 = state_28554;
(statearr_28600_28635[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28636 = state_28554;
state_28554 = G__28636;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
cljs$core$async$state_machine__26596__auto__ = function(state_28554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26596__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26596__auto____1.call(this,state_28554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26596__auto____0;
cljs$core$async$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26596__auto____1;
return cljs$core$async$state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto___28606,mults,ensure_mult,p))
})();
var state__26709__auto__ = (function (){var statearr_28601 = f__26708__auto__.call(null);
(statearr_28601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto___28606);

return statearr_28601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto___28606,mults,ensure_mult,p))
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
var args28637 = [];
var len__23646__auto___28640 = arguments.length;
var i__23647__auto___28641 = (0);
while(true){
if((i__23647__auto___28641 < len__23646__auto___28640)){
args28637.push((arguments[i__23647__auto___28641]));

var G__28642 = (i__23647__auto___28641 + (1));
i__23647__auto___28641 = G__28642;
continue;
} else {
}
break;
}

var G__28639 = args28637.length;
switch (G__28639) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28637.length)].join('')));

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
var args28644 = [];
var len__23646__auto___28647 = arguments.length;
var i__23647__auto___28648 = (0);
while(true){
if((i__23647__auto___28648 < len__23646__auto___28647)){
args28644.push((arguments[i__23647__auto___28648]));

var G__28649 = (i__23647__auto___28648 + (1));
i__23647__auto___28648 = G__28649;
continue;
} else {
}
break;
}

var G__28646 = args28644.length;
switch (G__28646) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28644.length)].join('')));

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
var args28651 = [];
var len__23646__auto___28722 = arguments.length;
var i__23647__auto___28723 = (0);
while(true){
if((i__23647__auto___28723 < len__23646__auto___28722)){
args28651.push((arguments[i__23647__auto___28723]));

var G__28724 = (i__23647__auto___28723 + (1));
i__23647__auto___28723 = G__28724;
continue;
} else {
}
break;
}

var G__28653 = args28651.length;
switch (G__28653) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28651.length)].join('')));

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
var c__26707__auto___28726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto___28726,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto___28726,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28692){
var state_val_28693 = (state_28692[(1)]);
if((state_val_28693 === (7))){
var state_28692__$1 = state_28692;
var statearr_28694_28727 = state_28692__$1;
(statearr_28694_28727[(2)] = null);

(statearr_28694_28727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (1))){
var state_28692__$1 = state_28692;
var statearr_28695_28728 = state_28692__$1;
(statearr_28695_28728[(2)] = null);

(statearr_28695_28728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (4))){
var inst_28656 = (state_28692[(7)]);
var inst_28658 = (inst_28656 < cnt);
var state_28692__$1 = state_28692;
if(cljs.core.truth_(inst_28658)){
var statearr_28696_28729 = state_28692__$1;
(statearr_28696_28729[(1)] = (6));

} else {
var statearr_28697_28730 = state_28692__$1;
(statearr_28697_28730[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (15))){
var inst_28688 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28698_28731 = state_28692__$1;
(statearr_28698_28731[(2)] = inst_28688);

(statearr_28698_28731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (13))){
var inst_28681 = cljs.core.async.close_BANG_.call(null,out);
var state_28692__$1 = state_28692;
var statearr_28699_28732 = state_28692__$1;
(statearr_28699_28732[(2)] = inst_28681);

(statearr_28699_28732[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (6))){
var state_28692__$1 = state_28692;
var statearr_28700_28733 = state_28692__$1;
(statearr_28700_28733[(2)] = null);

(statearr_28700_28733[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (3))){
var inst_28690 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28692__$1,inst_28690);
} else {
if((state_val_28693 === (12))){
var inst_28678 = (state_28692[(8)]);
var inst_28678__$1 = (state_28692[(2)]);
var inst_28679 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28678__$1);
var state_28692__$1 = (function (){var statearr_28701 = state_28692;
(statearr_28701[(8)] = inst_28678__$1);

return statearr_28701;
})();
if(cljs.core.truth_(inst_28679)){
var statearr_28702_28734 = state_28692__$1;
(statearr_28702_28734[(1)] = (13));

} else {
var statearr_28703_28735 = state_28692__$1;
(statearr_28703_28735[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (2))){
var inst_28655 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28656 = (0);
var state_28692__$1 = (function (){var statearr_28704 = state_28692;
(statearr_28704[(7)] = inst_28656);

(statearr_28704[(9)] = inst_28655);

return statearr_28704;
})();
var statearr_28705_28736 = state_28692__$1;
(statearr_28705_28736[(2)] = null);

(statearr_28705_28736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (11))){
var inst_28656 = (state_28692[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28692,(10),Object,null,(9));
var inst_28665 = chs__$1.call(null,inst_28656);
var inst_28666 = done.call(null,inst_28656);
var inst_28667 = cljs.core.async.take_BANG_.call(null,inst_28665,inst_28666);
var state_28692__$1 = state_28692;
var statearr_28706_28737 = state_28692__$1;
(statearr_28706_28737[(2)] = inst_28667);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28692__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (9))){
var inst_28656 = (state_28692[(7)]);
var inst_28669 = (state_28692[(2)]);
var inst_28670 = (inst_28656 + (1));
var inst_28656__$1 = inst_28670;
var state_28692__$1 = (function (){var statearr_28707 = state_28692;
(statearr_28707[(7)] = inst_28656__$1);

(statearr_28707[(10)] = inst_28669);

return statearr_28707;
})();
var statearr_28708_28738 = state_28692__$1;
(statearr_28708_28738[(2)] = null);

(statearr_28708_28738[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (5))){
var inst_28676 = (state_28692[(2)]);
var state_28692__$1 = (function (){var statearr_28709 = state_28692;
(statearr_28709[(11)] = inst_28676);

return statearr_28709;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28692__$1,(12),dchan);
} else {
if((state_val_28693 === (14))){
var inst_28678 = (state_28692[(8)]);
var inst_28683 = cljs.core.apply.call(null,f,inst_28678);
var state_28692__$1 = state_28692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28692__$1,(16),out,inst_28683);
} else {
if((state_val_28693 === (16))){
var inst_28685 = (state_28692[(2)]);
var state_28692__$1 = (function (){var statearr_28710 = state_28692;
(statearr_28710[(12)] = inst_28685);

return statearr_28710;
})();
var statearr_28711_28739 = state_28692__$1;
(statearr_28711_28739[(2)] = null);

(statearr_28711_28739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (10))){
var inst_28660 = (state_28692[(2)]);
var inst_28661 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28692__$1 = (function (){var statearr_28712 = state_28692;
(statearr_28712[(13)] = inst_28660);

return statearr_28712;
})();
var statearr_28713_28740 = state_28692__$1;
(statearr_28713_28740[(2)] = inst_28661);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28692__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (8))){
var inst_28674 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28714_28741 = state_28692__$1;
(statearr_28714_28741[(2)] = inst_28674);

(statearr_28714_28741[(1)] = (5));


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
});})(c__26707__auto___28726,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26595__auto__,c__26707__auto___28726,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26596__auto__ = null;
var cljs$core$async$state_machine__26596__auto____0 = (function (){
var statearr_28718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28718[(0)] = cljs$core$async$state_machine__26596__auto__);

(statearr_28718[(1)] = (1));

return statearr_28718;
});
var cljs$core$async$state_machine__26596__auto____1 = (function (state_28692){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_28692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e28719){if((e28719 instanceof Object)){
var ex__26599__auto__ = e28719;
var statearr_28720_28742 = state_28692;
(statearr_28720_28742[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28743 = state_28692;
state_28692 = G__28743;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
cljs$core$async$state_machine__26596__auto__ = function(state_28692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26596__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26596__auto____1.call(this,state_28692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26596__auto____0;
cljs$core$async$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26596__auto____1;
return cljs$core$async$state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto___28726,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26709__auto__ = (function (){var statearr_28721 = f__26708__auto__.call(null);
(statearr_28721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto___28726);

return statearr_28721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto___28726,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args28745 = [];
var len__23646__auto___28801 = arguments.length;
var i__23647__auto___28802 = (0);
while(true){
if((i__23647__auto___28802 < len__23646__auto___28801)){
args28745.push((arguments[i__23647__auto___28802]));

var G__28803 = (i__23647__auto___28802 + (1));
i__23647__auto___28802 = G__28803;
continue;
} else {
}
break;
}

var G__28747 = args28745.length;
switch (G__28747) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28745.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26707__auto___28805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto___28805,out){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto___28805,out){
return (function (state_28777){
var state_val_28778 = (state_28777[(1)]);
if((state_val_28778 === (7))){
var inst_28757 = (state_28777[(7)]);
var inst_28756 = (state_28777[(8)]);
var inst_28756__$1 = (state_28777[(2)]);
var inst_28757__$1 = cljs.core.nth.call(null,inst_28756__$1,(0),null);
var inst_28758 = cljs.core.nth.call(null,inst_28756__$1,(1),null);
var inst_28759 = (inst_28757__$1 == null);
var state_28777__$1 = (function (){var statearr_28779 = state_28777;
(statearr_28779[(7)] = inst_28757__$1);

(statearr_28779[(8)] = inst_28756__$1);

(statearr_28779[(9)] = inst_28758);

return statearr_28779;
})();
if(cljs.core.truth_(inst_28759)){
var statearr_28780_28806 = state_28777__$1;
(statearr_28780_28806[(1)] = (8));

} else {
var statearr_28781_28807 = state_28777__$1;
(statearr_28781_28807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (1))){
var inst_28748 = cljs.core.vec.call(null,chs);
var inst_28749 = inst_28748;
var state_28777__$1 = (function (){var statearr_28782 = state_28777;
(statearr_28782[(10)] = inst_28749);

return statearr_28782;
})();
var statearr_28783_28808 = state_28777__$1;
(statearr_28783_28808[(2)] = null);

(statearr_28783_28808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (4))){
var inst_28749 = (state_28777[(10)]);
var state_28777__$1 = state_28777;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28777__$1,(7),inst_28749);
} else {
if((state_val_28778 === (6))){
var inst_28773 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
var statearr_28784_28809 = state_28777__$1;
(statearr_28784_28809[(2)] = inst_28773);

(statearr_28784_28809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (3))){
var inst_28775 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28777__$1,inst_28775);
} else {
if((state_val_28778 === (2))){
var inst_28749 = (state_28777[(10)]);
var inst_28751 = cljs.core.count.call(null,inst_28749);
var inst_28752 = (inst_28751 > (0));
var state_28777__$1 = state_28777;
if(cljs.core.truth_(inst_28752)){
var statearr_28786_28810 = state_28777__$1;
(statearr_28786_28810[(1)] = (4));

} else {
var statearr_28787_28811 = state_28777__$1;
(statearr_28787_28811[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (11))){
var inst_28749 = (state_28777[(10)]);
var inst_28766 = (state_28777[(2)]);
var tmp28785 = inst_28749;
var inst_28749__$1 = tmp28785;
var state_28777__$1 = (function (){var statearr_28788 = state_28777;
(statearr_28788[(10)] = inst_28749__$1);

(statearr_28788[(11)] = inst_28766);

return statearr_28788;
})();
var statearr_28789_28812 = state_28777__$1;
(statearr_28789_28812[(2)] = null);

(statearr_28789_28812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (9))){
var inst_28757 = (state_28777[(7)]);
var state_28777__$1 = state_28777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28777__$1,(11),out,inst_28757);
} else {
if((state_val_28778 === (5))){
var inst_28771 = cljs.core.async.close_BANG_.call(null,out);
var state_28777__$1 = state_28777;
var statearr_28790_28813 = state_28777__$1;
(statearr_28790_28813[(2)] = inst_28771);

(statearr_28790_28813[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (10))){
var inst_28769 = (state_28777[(2)]);
var state_28777__$1 = state_28777;
var statearr_28791_28814 = state_28777__$1;
(statearr_28791_28814[(2)] = inst_28769);

(statearr_28791_28814[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28778 === (8))){
var inst_28757 = (state_28777[(7)]);
var inst_28749 = (state_28777[(10)]);
var inst_28756 = (state_28777[(8)]);
var inst_28758 = (state_28777[(9)]);
var inst_28761 = (function (){var cs = inst_28749;
var vec__28754 = inst_28756;
var v = inst_28757;
var c = inst_28758;
return ((function (cs,vec__28754,v,c,inst_28757,inst_28749,inst_28756,inst_28758,state_val_28778,c__26707__auto___28805,out){
return (function (p1__28744_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28744_SHARP_);
});
;})(cs,vec__28754,v,c,inst_28757,inst_28749,inst_28756,inst_28758,state_val_28778,c__26707__auto___28805,out))
})();
var inst_28762 = cljs.core.filterv.call(null,inst_28761,inst_28749);
var inst_28749__$1 = inst_28762;
var state_28777__$1 = (function (){var statearr_28792 = state_28777;
(statearr_28792[(10)] = inst_28749__$1);

return statearr_28792;
})();
var statearr_28793_28815 = state_28777__$1;
(statearr_28793_28815[(2)] = null);

(statearr_28793_28815[(1)] = (2));


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
});})(c__26707__auto___28805,out))
;
return ((function (switch__26595__auto__,c__26707__auto___28805,out){
return (function() {
var cljs$core$async$state_machine__26596__auto__ = null;
var cljs$core$async$state_machine__26596__auto____0 = (function (){
var statearr_28797 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28797[(0)] = cljs$core$async$state_machine__26596__auto__);

(statearr_28797[(1)] = (1));

return statearr_28797;
});
var cljs$core$async$state_machine__26596__auto____1 = (function (state_28777){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_28777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e28798){if((e28798 instanceof Object)){
var ex__26599__auto__ = e28798;
var statearr_28799_28816 = state_28777;
(statearr_28799_28816[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28817 = state_28777;
state_28777 = G__28817;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
cljs$core$async$state_machine__26596__auto__ = function(state_28777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26596__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26596__auto____1.call(this,state_28777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26596__auto____0;
cljs$core$async$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26596__auto____1;
return cljs$core$async$state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto___28805,out))
})();
var state__26709__auto__ = (function (){var statearr_28800 = f__26708__auto__.call(null);
(statearr_28800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto___28805);

return statearr_28800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto___28805,out))
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
var args28818 = [];
var len__23646__auto___28867 = arguments.length;
var i__23647__auto___28868 = (0);
while(true){
if((i__23647__auto___28868 < len__23646__auto___28867)){
args28818.push((arguments[i__23647__auto___28868]));

var G__28869 = (i__23647__auto___28868 + (1));
i__23647__auto___28868 = G__28869;
continue;
} else {
}
break;
}

var G__28820 = args28818.length;
switch (G__28820) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28818.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26707__auto___28871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto___28871,out){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto___28871,out){
return (function (state_28844){
var state_val_28845 = (state_28844[(1)]);
if((state_val_28845 === (7))){
var inst_28826 = (state_28844[(7)]);
var inst_28826__$1 = (state_28844[(2)]);
var inst_28827 = (inst_28826__$1 == null);
var inst_28828 = cljs.core.not.call(null,inst_28827);
var state_28844__$1 = (function (){var statearr_28846 = state_28844;
(statearr_28846[(7)] = inst_28826__$1);

return statearr_28846;
})();
if(inst_28828){
var statearr_28847_28872 = state_28844__$1;
(statearr_28847_28872[(1)] = (8));

} else {
var statearr_28848_28873 = state_28844__$1;
(statearr_28848_28873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (1))){
var inst_28821 = (0);
var state_28844__$1 = (function (){var statearr_28849 = state_28844;
(statearr_28849[(8)] = inst_28821);

return statearr_28849;
})();
var statearr_28850_28874 = state_28844__$1;
(statearr_28850_28874[(2)] = null);

(statearr_28850_28874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (4))){
var state_28844__$1 = state_28844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28844__$1,(7),ch);
} else {
if((state_val_28845 === (6))){
var inst_28839 = (state_28844[(2)]);
var state_28844__$1 = state_28844;
var statearr_28851_28875 = state_28844__$1;
(statearr_28851_28875[(2)] = inst_28839);

(statearr_28851_28875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (3))){
var inst_28841 = (state_28844[(2)]);
var inst_28842 = cljs.core.async.close_BANG_.call(null,out);
var state_28844__$1 = (function (){var statearr_28852 = state_28844;
(statearr_28852[(9)] = inst_28841);

return statearr_28852;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28844__$1,inst_28842);
} else {
if((state_val_28845 === (2))){
var inst_28821 = (state_28844[(8)]);
var inst_28823 = (inst_28821 < n);
var state_28844__$1 = state_28844;
if(cljs.core.truth_(inst_28823)){
var statearr_28853_28876 = state_28844__$1;
(statearr_28853_28876[(1)] = (4));

} else {
var statearr_28854_28877 = state_28844__$1;
(statearr_28854_28877[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (11))){
var inst_28821 = (state_28844[(8)]);
var inst_28831 = (state_28844[(2)]);
var inst_28832 = (inst_28821 + (1));
var inst_28821__$1 = inst_28832;
var state_28844__$1 = (function (){var statearr_28855 = state_28844;
(statearr_28855[(10)] = inst_28831);

(statearr_28855[(8)] = inst_28821__$1);

return statearr_28855;
})();
var statearr_28856_28878 = state_28844__$1;
(statearr_28856_28878[(2)] = null);

(statearr_28856_28878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (9))){
var state_28844__$1 = state_28844;
var statearr_28857_28879 = state_28844__$1;
(statearr_28857_28879[(2)] = null);

(statearr_28857_28879[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (5))){
var state_28844__$1 = state_28844;
var statearr_28858_28880 = state_28844__$1;
(statearr_28858_28880[(2)] = null);

(statearr_28858_28880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (10))){
var inst_28836 = (state_28844[(2)]);
var state_28844__$1 = state_28844;
var statearr_28859_28881 = state_28844__$1;
(statearr_28859_28881[(2)] = inst_28836);

(statearr_28859_28881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28845 === (8))){
var inst_28826 = (state_28844[(7)]);
var state_28844__$1 = state_28844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28844__$1,(11),out,inst_28826);
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
});})(c__26707__auto___28871,out))
;
return ((function (switch__26595__auto__,c__26707__auto___28871,out){
return (function() {
var cljs$core$async$state_machine__26596__auto__ = null;
var cljs$core$async$state_machine__26596__auto____0 = (function (){
var statearr_28863 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28863[(0)] = cljs$core$async$state_machine__26596__auto__);

(statearr_28863[(1)] = (1));

return statearr_28863;
});
var cljs$core$async$state_machine__26596__auto____1 = (function (state_28844){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_28844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e28864){if((e28864 instanceof Object)){
var ex__26599__auto__ = e28864;
var statearr_28865_28882 = state_28844;
(statearr_28865_28882[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28883 = state_28844;
state_28844 = G__28883;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
cljs$core$async$state_machine__26596__auto__ = function(state_28844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26596__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26596__auto____1.call(this,state_28844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26596__auto____0;
cljs$core$async$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26596__auto____1;
return cljs$core$async$state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto___28871,out))
})();
var state__26709__auto__ = (function (){var statearr_28866 = f__26708__auto__.call(null);
(statearr_28866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto___28871);

return statearr_28866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto___28871,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28891 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28891 = (function (map_LT_,f,ch,meta28892){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28892 = meta28892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28893,meta28892__$1){
var self__ = this;
var _28893__$1 = this;
return (new cljs.core.async.t_cljs$core$async28891(self__.map_LT_,self__.f,self__.ch,meta28892__$1));
});

cljs.core.async.t_cljs$core$async28891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28893){
var self__ = this;
var _28893__$1 = this;
return self__.meta28892;
});

cljs.core.async.t_cljs$core$async28891.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28891.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28891.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28891.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28891.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28894 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28894 = (function (map_LT_,f,ch,meta28892,_,fn1,meta28895){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28892 = meta28892;
this._ = _;
this.fn1 = fn1;
this.meta28895 = meta28895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28896,meta28895__$1){
var self__ = this;
var _28896__$1 = this;
return (new cljs.core.async.t_cljs$core$async28894(self__.map_LT_,self__.f,self__.ch,self__.meta28892,self__._,self__.fn1,meta28895__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28894.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28896){
var self__ = this;
var _28896__$1 = this;
return self__.meta28895;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28894.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28894.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28894.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28894.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28884_SHARP_){
return f1.call(null,(((p1__28884_SHARP_ == null))?null:self__.f.call(null,p1__28884_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28894.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28892","meta28892",425095378,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28891","cljs.core.async/t_cljs$core$async28891",-1221534006,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28895","meta28895",2030803037,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28894.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28894";

cljs.core.async.t_cljs$core$async28894.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"cljs.core.async/t_cljs$core$async28894");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28894 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28894(map_LT___$1,f__$1,ch__$1,meta28892__$1,___$2,fn1__$1,meta28895){
return (new cljs.core.async.t_cljs$core$async28894(map_LT___$1,f__$1,ch__$1,meta28892__$1,___$2,fn1__$1,meta28895));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28894(self__.map_LT_,self__.f,self__.ch,self__.meta28892,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__22564__auto__ = ret;
if(cljs.core.truth_(and__22564__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__22564__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28891.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28891.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28892","meta28892",425095378,null)], null);
});

cljs.core.async.t_cljs$core$async28891.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28891";

cljs.core.async.t_cljs$core$async28891.cljs$lang$ctorPrWriter = (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"cljs.core.async/t_cljs$core$async28891");
});

cljs.core.async.__GT_t_cljs$core$async28891 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28891(map_LT___$1,f__$1,ch__$1,meta28892){
return (new cljs.core.async.t_cljs$core$async28891(map_LT___$1,f__$1,ch__$1,meta28892));
});

}

return (new cljs.core.async.t_cljs$core$async28891(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28900 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28900 = (function (map_GT_,f,ch,meta28901){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28901 = meta28901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28902,meta28901__$1){
var self__ = this;
var _28902__$1 = this;
return (new cljs.core.async.t_cljs$core$async28900(self__.map_GT_,self__.f,self__.ch,meta28901__$1));
});

cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28902){
var self__ = this;
var _28902__$1 = this;
return self__.meta28901;
});

cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28900.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28901","meta28901",398861172,null)], null);
});

cljs.core.async.t_cljs$core$async28900.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28900";

cljs.core.async.t_cljs$core$async28900.cljs$lang$ctorPrWriter = (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"cljs.core.async/t_cljs$core$async28900");
});

cljs.core.async.__GT_t_cljs$core$async28900 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28900(map_GT___$1,f__$1,ch__$1,meta28901){
return (new cljs.core.async.t_cljs$core$async28900(map_GT___$1,f__$1,ch__$1,meta28901));
});

}

return (new cljs.core.async.t_cljs$core$async28900(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28906 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28906 = (function (filter_GT_,p,ch,meta28907){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28907 = meta28907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28908,meta28907__$1){
var self__ = this;
var _28908__$1 = this;
return (new cljs.core.async.t_cljs$core$async28906(self__.filter_GT_,self__.p,self__.ch,meta28907__$1));
});

cljs.core.async.t_cljs$core$async28906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28908){
var self__ = this;
var _28908__$1 = this;
return self__.meta28907;
});

cljs.core.async.t_cljs$core$async28906.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28906.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28906.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28906.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28906.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28906.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28906.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28907","meta28907",-2127273970,null)], null);
});

cljs.core.async.t_cljs$core$async28906.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28906";

cljs.core.async.t_cljs$core$async28906.cljs$lang$ctorPrWriter = (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"cljs.core.async/t_cljs$core$async28906");
});

cljs.core.async.__GT_t_cljs$core$async28906 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28906(filter_GT___$1,p__$1,ch__$1,meta28907){
return (new cljs.core.async.t_cljs$core$async28906(filter_GT___$1,p__$1,ch__$1,meta28907));
});

}

return (new cljs.core.async.t_cljs$core$async28906(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args28909 = [];
var len__23646__auto___28953 = arguments.length;
var i__23647__auto___28954 = (0);
while(true){
if((i__23647__auto___28954 < len__23646__auto___28953)){
args28909.push((arguments[i__23647__auto___28954]));

var G__28955 = (i__23647__auto___28954 + (1));
i__23647__auto___28954 = G__28955;
continue;
} else {
}
break;
}

var G__28911 = args28909.length;
switch (G__28911) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28909.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26707__auto___28957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto___28957,out){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto___28957,out){
return (function (state_28932){
var state_val_28933 = (state_28932[(1)]);
if((state_val_28933 === (7))){
var inst_28928 = (state_28932[(2)]);
var state_28932__$1 = state_28932;
var statearr_28934_28958 = state_28932__$1;
(statearr_28934_28958[(2)] = inst_28928);

(statearr_28934_28958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (1))){
var state_28932__$1 = state_28932;
var statearr_28935_28959 = state_28932__$1;
(statearr_28935_28959[(2)] = null);

(statearr_28935_28959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (4))){
var inst_28914 = (state_28932[(7)]);
var inst_28914__$1 = (state_28932[(2)]);
var inst_28915 = (inst_28914__$1 == null);
var state_28932__$1 = (function (){var statearr_28936 = state_28932;
(statearr_28936[(7)] = inst_28914__$1);

return statearr_28936;
})();
if(cljs.core.truth_(inst_28915)){
var statearr_28937_28960 = state_28932__$1;
(statearr_28937_28960[(1)] = (5));

} else {
var statearr_28938_28961 = state_28932__$1;
(statearr_28938_28961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (6))){
var inst_28914 = (state_28932[(7)]);
var inst_28919 = p.call(null,inst_28914);
var state_28932__$1 = state_28932;
if(cljs.core.truth_(inst_28919)){
var statearr_28939_28962 = state_28932__$1;
(statearr_28939_28962[(1)] = (8));

} else {
var statearr_28940_28963 = state_28932__$1;
(statearr_28940_28963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (3))){
var inst_28930 = (state_28932[(2)]);
var state_28932__$1 = state_28932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28932__$1,inst_28930);
} else {
if((state_val_28933 === (2))){
var state_28932__$1 = state_28932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28932__$1,(4),ch);
} else {
if((state_val_28933 === (11))){
var inst_28922 = (state_28932[(2)]);
var state_28932__$1 = state_28932;
var statearr_28941_28964 = state_28932__$1;
(statearr_28941_28964[(2)] = inst_28922);

(statearr_28941_28964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (9))){
var state_28932__$1 = state_28932;
var statearr_28942_28965 = state_28932__$1;
(statearr_28942_28965[(2)] = null);

(statearr_28942_28965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (5))){
var inst_28917 = cljs.core.async.close_BANG_.call(null,out);
var state_28932__$1 = state_28932;
var statearr_28943_28966 = state_28932__$1;
(statearr_28943_28966[(2)] = inst_28917);

(statearr_28943_28966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (10))){
var inst_28925 = (state_28932[(2)]);
var state_28932__$1 = (function (){var statearr_28944 = state_28932;
(statearr_28944[(8)] = inst_28925);

return statearr_28944;
})();
var statearr_28945_28967 = state_28932__$1;
(statearr_28945_28967[(2)] = null);

(statearr_28945_28967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28933 === (8))){
var inst_28914 = (state_28932[(7)]);
var state_28932__$1 = state_28932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28932__$1,(11),out,inst_28914);
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
});})(c__26707__auto___28957,out))
;
return ((function (switch__26595__auto__,c__26707__auto___28957,out){
return (function() {
var cljs$core$async$state_machine__26596__auto__ = null;
var cljs$core$async$state_machine__26596__auto____0 = (function (){
var statearr_28949 = [null,null,null,null,null,null,null,null,null];
(statearr_28949[(0)] = cljs$core$async$state_machine__26596__auto__);

(statearr_28949[(1)] = (1));

return statearr_28949;
});
var cljs$core$async$state_machine__26596__auto____1 = (function (state_28932){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_28932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e28950){if((e28950 instanceof Object)){
var ex__26599__auto__ = e28950;
var statearr_28951_28968 = state_28932;
(statearr_28951_28968[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28969 = state_28932;
state_28932 = G__28969;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
cljs$core$async$state_machine__26596__auto__ = function(state_28932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26596__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26596__auto____1.call(this,state_28932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26596__auto____0;
cljs$core$async$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26596__auto____1;
return cljs$core$async$state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto___28957,out))
})();
var state__26709__auto__ = (function (){var statearr_28952 = f__26708__auto__.call(null);
(statearr_28952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto___28957);

return statearr_28952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto___28957,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28970 = [];
var len__23646__auto___28973 = arguments.length;
var i__23647__auto___28974 = (0);
while(true){
if((i__23647__auto___28974 < len__23646__auto___28973)){
args28970.push((arguments[i__23647__auto___28974]));

var G__28975 = (i__23647__auto___28974 + (1));
i__23647__auto___28974 = G__28975;
continue;
} else {
}
break;
}

var G__28972 = args28970.length;
switch (G__28972) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28970.length)].join('')));

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
var c__26707__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto__){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto__){
return (function (state_29142){
var state_val_29143 = (state_29142[(1)]);
if((state_val_29143 === (7))){
var inst_29138 = (state_29142[(2)]);
var state_29142__$1 = state_29142;
var statearr_29144_29185 = state_29142__$1;
(statearr_29144_29185[(2)] = inst_29138);

(statearr_29144_29185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (20))){
var inst_29108 = (state_29142[(7)]);
var inst_29119 = (state_29142[(2)]);
var inst_29120 = cljs.core.next.call(null,inst_29108);
var inst_29094 = inst_29120;
var inst_29095 = null;
var inst_29096 = (0);
var inst_29097 = (0);
var state_29142__$1 = (function (){var statearr_29145 = state_29142;
(statearr_29145[(8)] = inst_29119);

(statearr_29145[(9)] = inst_29094);

(statearr_29145[(10)] = inst_29096);

(statearr_29145[(11)] = inst_29095);

(statearr_29145[(12)] = inst_29097);

return statearr_29145;
})();
var statearr_29146_29186 = state_29142__$1;
(statearr_29146_29186[(2)] = null);

(statearr_29146_29186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (1))){
var state_29142__$1 = state_29142;
var statearr_29147_29187 = state_29142__$1;
(statearr_29147_29187[(2)] = null);

(statearr_29147_29187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (4))){
var inst_29083 = (state_29142[(13)]);
var inst_29083__$1 = (state_29142[(2)]);
var inst_29084 = (inst_29083__$1 == null);
var state_29142__$1 = (function (){var statearr_29148 = state_29142;
(statearr_29148[(13)] = inst_29083__$1);

return statearr_29148;
})();
if(cljs.core.truth_(inst_29084)){
var statearr_29149_29188 = state_29142__$1;
(statearr_29149_29188[(1)] = (5));

} else {
var statearr_29150_29189 = state_29142__$1;
(statearr_29150_29189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (15))){
var state_29142__$1 = state_29142;
var statearr_29154_29190 = state_29142__$1;
(statearr_29154_29190[(2)] = null);

(statearr_29154_29190[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (21))){
var state_29142__$1 = state_29142;
var statearr_29155_29191 = state_29142__$1;
(statearr_29155_29191[(2)] = null);

(statearr_29155_29191[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (13))){
var inst_29094 = (state_29142[(9)]);
var inst_29096 = (state_29142[(10)]);
var inst_29095 = (state_29142[(11)]);
var inst_29097 = (state_29142[(12)]);
var inst_29104 = (state_29142[(2)]);
var inst_29105 = (inst_29097 + (1));
var tmp29151 = inst_29094;
var tmp29152 = inst_29096;
var tmp29153 = inst_29095;
var inst_29094__$1 = tmp29151;
var inst_29095__$1 = tmp29153;
var inst_29096__$1 = tmp29152;
var inst_29097__$1 = inst_29105;
var state_29142__$1 = (function (){var statearr_29156 = state_29142;
(statearr_29156[(9)] = inst_29094__$1);

(statearr_29156[(10)] = inst_29096__$1);

(statearr_29156[(14)] = inst_29104);

(statearr_29156[(11)] = inst_29095__$1);

(statearr_29156[(12)] = inst_29097__$1);

return statearr_29156;
})();
var statearr_29157_29192 = state_29142__$1;
(statearr_29157_29192[(2)] = null);

(statearr_29157_29192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (22))){
var state_29142__$1 = state_29142;
var statearr_29158_29193 = state_29142__$1;
(statearr_29158_29193[(2)] = null);

(statearr_29158_29193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (6))){
var inst_29083 = (state_29142[(13)]);
var inst_29092 = f.call(null,inst_29083);
var inst_29093 = cljs.core.seq.call(null,inst_29092);
var inst_29094 = inst_29093;
var inst_29095 = null;
var inst_29096 = (0);
var inst_29097 = (0);
var state_29142__$1 = (function (){var statearr_29159 = state_29142;
(statearr_29159[(9)] = inst_29094);

(statearr_29159[(10)] = inst_29096);

(statearr_29159[(11)] = inst_29095);

(statearr_29159[(12)] = inst_29097);

return statearr_29159;
})();
var statearr_29160_29194 = state_29142__$1;
(statearr_29160_29194[(2)] = null);

(statearr_29160_29194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (17))){
var inst_29108 = (state_29142[(7)]);
var inst_29112 = cljs.core.chunk_first.call(null,inst_29108);
var inst_29113 = cljs.core.chunk_rest.call(null,inst_29108);
var inst_29114 = cljs.core.count.call(null,inst_29112);
var inst_29094 = inst_29113;
var inst_29095 = inst_29112;
var inst_29096 = inst_29114;
var inst_29097 = (0);
var state_29142__$1 = (function (){var statearr_29161 = state_29142;
(statearr_29161[(9)] = inst_29094);

(statearr_29161[(10)] = inst_29096);

(statearr_29161[(11)] = inst_29095);

(statearr_29161[(12)] = inst_29097);

return statearr_29161;
})();
var statearr_29162_29195 = state_29142__$1;
(statearr_29162_29195[(2)] = null);

(statearr_29162_29195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (3))){
var inst_29140 = (state_29142[(2)]);
var state_29142__$1 = state_29142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29142__$1,inst_29140);
} else {
if((state_val_29143 === (12))){
var inst_29128 = (state_29142[(2)]);
var state_29142__$1 = state_29142;
var statearr_29163_29196 = state_29142__$1;
(statearr_29163_29196[(2)] = inst_29128);

(statearr_29163_29196[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (2))){
var state_29142__$1 = state_29142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29142__$1,(4),in$);
} else {
if((state_val_29143 === (23))){
var inst_29136 = (state_29142[(2)]);
var state_29142__$1 = state_29142;
var statearr_29164_29197 = state_29142__$1;
(statearr_29164_29197[(2)] = inst_29136);

(statearr_29164_29197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (19))){
var inst_29123 = (state_29142[(2)]);
var state_29142__$1 = state_29142;
var statearr_29165_29198 = state_29142__$1;
(statearr_29165_29198[(2)] = inst_29123);

(statearr_29165_29198[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (11))){
var inst_29094 = (state_29142[(9)]);
var inst_29108 = (state_29142[(7)]);
var inst_29108__$1 = cljs.core.seq.call(null,inst_29094);
var state_29142__$1 = (function (){var statearr_29166 = state_29142;
(statearr_29166[(7)] = inst_29108__$1);

return statearr_29166;
})();
if(inst_29108__$1){
var statearr_29167_29199 = state_29142__$1;
(statearr_29167_29199[(1)] = (14));

} else {
var statearr_29168_29200 = state_29142__$1;
(statearr_29168_29200[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (9))){
var inst_29130 = (state_29142[(2)]);
var inst_29131 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29142__$1 = (function (){var statearr_29169 = state_29142;
(statearr_29169[(15)] = inst_29130);

return statearr_29169;
})();
if(cljs.core.truth_(inst_29131)){
var statearr_29170_29201 = state_29142__$1;
(statearr_29170_29201[(1)] = (21));

} else {
var statearr_29171_29202 = state_29142__$1;
(statearr_29171_29202[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (5))){
var inst_29086 = cljs.core.async.close_BANG_.call(null,out);
var state_29142__$1 = state_29142;
var statearr_29172_29203 = state_29142__$1;
(statearr_29172_29203[(2)] = inst_29086);

(statearr_29172_29203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (14))){
var inst_29108 = (state_29142[(7)]);
var inst_29110 = cljs.core.chunked_seq_QMARK_.call(null,inst_29108);
var state_29142__$1 = state_29142;
if(inst_29110){
var statearr_29173_29204 = state_29142__$1;
(statearr_29173_29204[(1)] = (17));

} else {
var statearr_29174_29205 = state_29142__$1;
(statearr_29174_29205[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (16))){
var inst_29126 = (state_29142[(2)]);
var state_29142__$1 = state_29142;
var statearr_29175_29206 = state_29142__$1;
(statearr_29175_29206[(2)] = inst_29126);

(statearr_29175_29206[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29143 === (10))){
var inst_29095 = (state_29142[(11)]);
var inst_29097 = (state_29142[(12)]);
var inst_29102 = cljs.core._nth.call(null,inst_29095,inst_29097);
var state_29142__$1 = state_29142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29142__$1,(13),out,inst_29102);
} else {
if((state_val_29143 === (18))){
var inst_29108 = (state_29142[(7)]);
var inst_29117 = cljs.core.first.call(null,inst_29108);
var state_29142__$1 = state_29142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29142__$1,(20),out,inst_29117);
} else {
if((state_val_29143 === (8))){
var inst_29096 = (state_29142[(10)]);
var inst_29097 = (state_29142[(12)]);
var inst_29099 = (inst_29097 < inst_29096);
var inst_29100 = inst_29099;
var state_29142__$1 = state_29142;
if(cljs.core.truth_(inst_29100)){
var statearr_29176_29207 = state_29142__$1;
(statearr_29176_29207[(1)] = (10));

} else {
var statearr_29177_29208 = state_29142__$1;
(statearr_29177_29208[(1)] = (11));

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
});})(c__26707__auto__))
;
return ((function (switch__26595__auto__,c__26707__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26596__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26596__auto____0 = (function (){
var statearr_29181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29181[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26596__auto__);

(statearr_29181[(1)] = (1));

return statearr_29181;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26596__auto____1 = (function (state_29142){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_29142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e29182){if((e29182 instanceof Object)){
var ex__26599__auto__ = e29182;
var statearr_29183_29209 = state_29142;
(statearr_29183_29209[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29210 = state_29142;
state_29142 = G__29210;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26596__auto__ = function(state_29142){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26596__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26596__auto____1.call(this,state_29142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26596__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26596__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto__))
})();
var state__26709__auto__ = (function (){var statearr_29184 = f__26708__auto__.call(null);
(statearr_29184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto__);

return statearr_29184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto__))
);

return c__26707__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29211 = [];
var len__23646__auto___29214 = arguments.length;
var i__23647__auto___29215 = (0);
while(true){
if((i__23647__auto___29215 < len__23646__auto___29214)){
args29211.push((arguments[i__23647__auto___29215]));

var G__29216 = (i__23647__auto___29215 + (1));
i__23647__auto___29215 = G__29216;
continue;
} else {
}
break;
}

var G__29213 = args29211.length;
switch (G__29213) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29211.length)].join('')));

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
var args29218 = [];
var len__23646__auto___29221 = arguments.length;
var i__23647__auto___29222 = (0);
while(true){
if((i__23647__auto___29222 < len__23646__auto___29221)){
args29218.push((arguments[i__23647__auto___29222]));

var G__29223 = (i__23647__auto___29222 + (1));
i__23647__auto___29222 = G__29223;
continue;
} else {
}
break;
}

var G__29220 = args29218.length;
switch (G__29220) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29218.length)].join('')));

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
var args29225 = [];
var len__23646__auto___29276 = arguments.length;
var i__23647__auto___29277 = (0);
while(true){
if((i__23647__auto___29277 < len__23646__auto___29276)){
args29225.push((arguments[i__23647__auto___29277]));

var G__29278 = (i__23647__auto___29277 + (1));
i__23647__auto___29277 = G__29278;
continue;
} else {
}
break;
}

var G__29227 = args29225.length;
switch (G__29227) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29225.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26707__auto___29280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto___29280,out){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto___29280,out){
return (function (state_29251){
var state_val_29252 = (state_29251[(1)]);
if((state_val_29252 === (7))){
var inst_29246 = (state_29251[(2)]);
var state_29251__$1 = state_29251;
var statearr_29253_29281 = state_29251__$1;
(statearr_29253_29281[(2)] = inst_29246);

(statearr_29253_29281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29252 === (1))){
var inst_29228 = null;
var state_29251__$1 = (function (){var statearr_29254 = state_29251;
(statearr_29254[(7)] = inst_29228);

return statearr_29254;
})();
var statearr_29255_29282 = state_29251__$1;
(statearr_29255_29282[(2)] = null);

(statearr_29255_29282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29252 === (4))){
var inst_29231 = (state_29251[(8)]);
var inst_29231__$1 = (state_29251[(2)]);
var inst_29232 = (inst_29231__$1 == null);
var inst_29233 = cljs.core.not.call(null,inst_29232);
var state_29251__$1 = (function (){var statearr_29256 = state_29251;
(statearr_29256[(8)] = inst_29231__$1);

return statearr_29256;
})();
if(inst_29233){
var statearr_29257_29283 = state_29251__$1;
(statearr_29257_29283[(1)] = (5));

} else {
var statearr_29258_29284 = state_29251__$1;
(statearr_29258_29284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29252 === (6))){
var state_29251__$1 = state_29251;
var statearr_29259_29285 = state_29251__$1;
(statearr_29259_29285[(2)] = null);

(statearr_29259_29285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29252 === (3))){
var inst_29248 = (state_29251[(2)]);
var inst_29249 = cljs.core.async.close_BANG_.call(null,out);
var state_29251__$1 = (function (){var statearr_29260 = state_29251;
(statearr_29260[(9)] = inst_29248);

return statearr_29260;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29251__$1,inst_29249);
} else {
if((state_val_29252 === (2))){
var state_29251__$1 = state_29251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29251__$1,(4),ch);
} else {
if((state_val_29252 === (11))){
var inst_29231 = (state_29251[(8)]);
var inst_29240 = (state_29251[(2)]);
var inst_29228 = inst_29231;
var state_29251__$1 = (function (){var statearr_29261 = state_29251;
(statearr_29261[(10)] = inst_29240);

(statearr_29261[(7)] = inst_29228);

return statearr_29261;
})();
var statearr_29262_29286 = state_29251__$1;
(statearr_29262_29286[(2)] = null);

(statearr_29262_29286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29252 === (9))){
var inst_29231 = (state_29251[(8)]);
var state_29251__$1 = state_29251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29251__$1,(11),out,inst_29231);
} else {
if((state_val_29252 === (5))){
var inst_29231 = (state_29251[(8)]);
var inst_29228 = (state_29251[(7)]);
var inst_29235 = cljs.core._EQ_.call(null,inst_29231,inst_29228);
var state_29251__$1 = state_29251;
if(inst_29235){
var statearr_29264_29287 = state_29251__$1;
(statearr_29264_29287[(1)] = (8));

} else {
var statearr_29265_29288 = state_29251__$1;
(statearr_29265_29288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29252 === (10))){
var inst_29243 = (state_29251[(2)]);
var state_29251__$1 = state_29251;
var statearr_29266_29289 = state_29251__$1;
(statearr_29266_29289[(2)] = inst_29243);

(statearr_29266_29289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29252 === (8))){
var inst_29228 = (state_29251[(7)]);
var tmp29263 = inst_29228;
var inst_29228__$1 = tmp29263;
var state_29251__$1 = (function (){var statearr_29267 = state_29251;
(statearr_29267[(7)] = inst_29228__$1);

return statearr_29267;
})();
var statearr_29268_29290 = state_29251__$1;
(statearr_29268_29290[(2)] = null);

(statearr_29268_29290[(1)] = (2));


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
});})(c__26707__auto___29280,out))
;
return ((function (switch__26595__auto__,c__26707__auto___29280,out){
return (function() {
var cljs$core$async$state_machine__26596__auto__ = null;
var cljs$core$async$state_machine__26596__auto____0 = (function (){
var statearr_29272 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29272[(0)] = cljs$core$async$state_machine__26596__auto__);

(statearr_29272[(1)] = (1));

return statearr_29272;
});
var cljs$core$async$state_machine__26596__auto____1 = (function (state_29251){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_29251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e29273){if((e29273 instanceof Object)){
var ex__26599__auto__ = e29273;
var statearr_29274_29291 = state_29251;
(statearr_29274_29291[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29292 = state_29251;
state_29251 = G__29292;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
cljs$core$async$state_machine__26596__auto__ = function(state_29251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26596__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26596__auto____1.call(this,state_29251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26596__auto____0;
cljs$core$async$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26596__auto____1;
return cljs$core$async$state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto___29280,out))
})();
var state__26709__auto__ = (function (){var statearr_29275 = f__26708__auto__.call(null);
(statearr_29275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto___29280);

return statearr_29275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto___29280,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29293 = [];
var len__23646__auto___29363 = arguments.length;
var i__23647__auto___29364 = (0);
while(true){
if((i__23647__auto___29364 < len__23646__auto___29363)){
args29293.push((arguments[i__23647__auto___29364]));

var G__29365 = (i__23647__auto___29364 + (1));
i__23647__auto___29364 = G__29365;
continue;
} else {
}
break;
}

var G__29295 = args29293.length;
switch (G__29295) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29293.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26707__auto___29367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto___29367,out){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto___29367,out){
return (function (state_29333){
var state_val_29334 = (state_29333[(1)]);
if((state_val_29334 === (7))){
var inst_29329 = (state_29333[(2)]);
var state_29333__$1 = state_29333;
var statearr_29335_29368 = state_29333__$1;
(statearr_29335_29368[(2)] = inst_29329);

(statearr_29335_29368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (1))){
var inst_29296 = (new Array(n));
var inst_29297 = inst_29296;
var inst_29298 = (0);
var state_29333__$1 = (function (){var statearr_29336 = state_29333;
(statearr_29336[(7)] = inst_29297);

(statearr_29336[(8)] = inst_29298);

return statearr_29336;
})();
var statearr_29337_29369 = state_29333__$1;
(statearr_29337_29369[(2)] = null);

(statearr_29337_29369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (4))){
var inst_29301 = (state_29333[(9)]);
var inst_29301__$1 = (state_29333[(2)]);
var inst_29302 = (inst_29301__$1 == null);
var inst_29303 = cljs.core.not.call(null,inst_29302);
var state_29333__$1 = (function (){var statearr_29338 = state_29333;
(statearr_29338[(9)] = inst_29301__$1);

return statearr_29338;
})();
if(inst_29303){
var statearr_29339_29370 = state_29333__$1;
(statearr_29339_29370[(1)] = (5));

} else {
var statearr_29340_29371 = state_29333__$1;
(statearr_29340_29371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (15))){
var inst_29323 = (state_29333[(2)]);
var state_29333__$1 = state_29333;
var statearr_29341_29372 = state_29333__$1;
(statearr_29341_29372[(2)] = inst_29323);

(statearr_29341_29372[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (13))){
var state_29333__$1 = state_29333;
var statearr_29342_29373 = state_29333__$1;
(statearr_29342_29373[(2)] = null);

(statearr_29342_29373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (6))){
var inst_29298 = (state_29333[(8)]);
var inst_29319 = (inst_29298 > (0));
var state_29333__$1 = state_29333;
if(cljs.core.truth_(inst_29319)){
var statearr_29343_29374 = state_29333__$1;
(statearr_29343_29374[(1)] = (12));

} else {
var statearr_29344_29375 = state_29333__$1;
(statearr_29344_29375[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (3))){
var inst_29331 = (state_29333[(2)]);
var state_29333__$1 = state_29333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29333__$1,inst_29331);
} else {
if((state_val_29334 === (12))){
var inst_29297 = (state_29333[(7)]);
var inst_29321 = cljs.core.vec.call(null,inst_29297);
var state_29333__$1 = state_29333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29333__$1,(15),out,inst_29321);
} else {
if((state_val_29334 === (2))){
var state_29333__$1 = state_29333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29333__$1,(4),ch);
} else {
if((state_val_29334 === (11))){
var inst_29313 = (state_29333[(2)]);
var inst_29314 = (new Array(n));
var inst_29297 = inst_29314;
var inst_29298 = (0);
var state_29333__$1 = (function (){var statearr_29345 = state_29333;
(statearr_29345[(10)] = inst_29313);

(statearr_29345[(7)] = inst_29297);

(statearr_29345[(8)] = inst_29298);

return statearr_29345;
})();
var statearr_29346_29376 = state_29333__$1;
(statearr_29346_29376[(2)] = null);

(statearr_29346_29376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (9))){
var inst_29297 = (state_29333[(7)]);
var inst_29311 = cljs.core.vec.call(null,inst_29297);
var state_29333__$1 = state_29333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29333__$1,(11),out,inst_29311);
} else {
if((state_val_29334 === (5))){
var inst_29306 = (state_29333[(11)]);
var inst_29301 = (state_29333[(9)]);
var inst_29297 = (state_29333[(7)]);
var inst_29298 = (state_29333[(8)]);
var inst_29305 = (inst_29297[inst_29298] = inst_29301);
var inst_29306__$1 = (inst_29298 + (1));
var inst_29307 = (inst_29306__$1 < n);
var state_29333__$1 = (function (){var statearr_29347 = state_29333;
(statearr_29347[(11)] = inst_29306__$1);

(statearr_29347[(12)] = inst_29305);

return statearr_29347;
})();
if(cljs.core.truth_(inst_29307)){
var statearr_29348_29377 = state_29333__$1;
(statearr_29348_29377[(1)] = (8));

} else {
var statearr_29349_29378 = state_29333__$1;
(statearr_29349_29378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (14))){
var inst_29326 = (state_29333[(2)]);
var inst_29327 = cljs.core.async.close_BANG_.call(null,out);
var state_29333__$1 = (function (){var statearr_29351 = state_29333;
(statearr_29351[(13)] = inst_29326);

return statearr_29351;
})();
var statearr_29352_29379 = state_29333__$1;
(statearr_29352_29379[(2)] = inst_29327);

(statearr_29352_29379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (10))){
var inst_29317 = (state_29333[(2)]);
var state_29333__$1 = state_29333;
var statearr_29353_29380 = state_29333__$1;
(statearr_29353_29380[(2)] = inst_29317);

(statearr_29353_29380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29334 === (8))){
var inst_29306 = (state_29333[(11)]);
var inst_29297 = (state_29333[(7)]);
var tmp29350 = inst_29297;
var inst_29297__$1 = tmp29350;
var inst_29298 = inst_29306;
var state_29333__$1 = (function (){var statearr_29354 = state_29333;
(statearr_29354[(7)] = inst_29297__$1);

(statearr_29354[(8)] = inst_29298);

return statearr_29354;
})();
var statearr_29355_29381 = state_29333__$1;
(statearr_29355_29381[(2)] = null);

(statearr_29355_29381[(1)] = (2));


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
});})(c__26707__auto___29367,out))
;
return ((function (switch__26595__auto__,c__26707__auto___29367,out){
return (function() {
var cljs$core$async$state_machine__26596__auto__ = null;
var cljs$core$async$state_machine__26596__auto____0 = (function (){
var statearr_29359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29359[(0)] = cljs$core$async$state_machine__26596__auto__);

(statearr_29359[(1)] = (1));

return statearr_29359;
});
var cljs$core$async$state_machine__26596__auto____1 = (function (state_29333){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_29333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e29360){if((e29360 instanceof Object)){
var ex__26599__auto__ = e29360;
var statearr_29361_29382 = state_29333;
(statearr_29361_29382[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29383 = state_29333;
state_29333 = G__29383;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
cljs$core$async$state_machine__26596__auto__ = function(state_29333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26596__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26596__auto____1.call(this,state_29333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26596__auto____0;
cljs$core$async$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26596__auto____1;
return cljs$core$async$state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto___29367,out))
})();
var state__26709__auto__ = (function (){var statearr_29362 = f__26708__auto__.call(null);
(statearr_29362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto___29367);

return statearr_29362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto___29367,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29384 = [];
var len__23646__auto___29458 = arguments.length;
var i__23647__auto___29459 = (0);
while(true){
if((i__23647__auto___29459 < len__23646__auto___29458)){
args29384.push((arguments[i__23647__auto___29459]));

var G__29460 = (i__23647__auto___29459 + (1));
i__23647__auto___29459 = G__29460;
continue;
} else {
}
break;
}

var G__29386 = args29384.length;
switch (G__29386) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29384.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26707__auto___29462 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto___29462,out){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto___29462,out){
return (function (state_29428){
var state_val_29429 = (state_29428[(1)]);
if((state_val_29429 === (7))){
var inst_29424 = (state_29428[(2)]);
var state_29428__$1 = state_29428;
var statearr_29430_29463 = state_29428__$1;
(statearr_29430_29463[(2)] = inst_29424);

(statearr_29430_29463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (1))){
var inst_29387 = [];
var inst_29388 = inst_29387;
var inst_29389 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29428__$1 = (function (){var statearr_29431 = state_29428;
(statearr_29431[(7)] = inst_29388);

(statearr_29431[(8)] = inst_29389);

return statearr_29431;
})();
var statearr_29432_29464 = state_29428__$1;
(statearr_29432_29464[(2)] = null);

(statearr_29432_29464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (4))){
var inst_29392 = (state_29428[(9)]);
var inst_29392__$1 = (state_29428[(2)]);
var inst_29393 = (inst_29392__$1 == null);
var inst_29394 = cljs.core.not.call(null,inst_29393);
var state_29428__$1 = (function (){var statearr_29433 = state_29428;
(statearr_29433[(9)] = inst_29392__$1);

return statearr_29433;
})();
if(inst_29394){
var statearr_29434_29465 = state_29428__$1;
(statearr_29434_29465[(1)] = (5));

} else {
var statearr_29435_29466 = state_29428__$1;
(statearr_29435_29466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (15))){
var inst_29418 = (state_29428[(2)]);
var state_29428__$1 = state_29428;
var statearr_29436_29467 = state_29428__$1;
(statearr_29436_29467[(2)] = inst_29418);

(statearr_29436_29467[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (13))){
var state_29428__$1 = state_29428;
var statearr_29437_29468 = state_29428__$1;
(statearr_29437_29468[(2)] = null);

(statearr_29437_29468[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (6))){
var inst_29388 = (state_29428[(7)]);
var inst_29413 = inst_29388.length;
var inst_29414 = (inst_29413 > (0));
var state_29428__$1 = state_29428;
if(cljs.core.truth_(inst_29414)){
var statearr_29438_29469 = state_29428__$1;
(statearr_29438_29469[(1)] = (12));

} else {
var statearr_29439_29470 = state_29428__$1;
(statearr_29439_29470[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (3))){
var inst_29426 = (state_29428[(2)]);
var state_29428__$1 = state_29428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29428__$1,inst_29426);
} else {
if((state_val_29429 === (12))){
var inst_29388 = (state_29428[(7)]);
var inst_29416 = cljs.core.vec.call(null,inst_29388);
var state_29428__$1 = state_29428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29428__$1,(15),out,inst_29416);
} else {
if((state_val_29429 === (2))){
var state_29428__$1 = state_29428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29428__$1,(4),ch);
} else {
if((state_val_29429 === (11))){
var inst_29396 = (state_29428[(10)]);
var inst_29392 = (state_29428[(9)]);
var inst_29406 = (state_29428[(2)]);
var inst_29407 = [];
var inst_29408 = inst_29407.push(inst_29392);
var inst_29388 = inst_29407;
var inst_29389 = inst_29396;
var state_29428__$1 = (function (){var statearr_29440 = state_29428;
(statearr_29440[(11)] = inst_29408);

(statearr_29440[(12)] = inst_29406);

(statearr_29440[(7)] = inst_29388);

(statearr_29440[(8)] = inst_29389);

return statearr_29440;
})();
var statearr_29441_29471 = state_29428__$1;
(statearr_29441_29471[(2)] = null);

(statearr_29441_29471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (9))){
var inst_29388 = (state_29428[(7)]);
var inst_29404 = cljs.core.vec.call(null,inst_29388);
var state_29428__$1 = state_29428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29428__$1,(11),out,inst_29404);
} else {
if((state_val_29429 === (5))){
var inst_29396 = (state_29428[(10)]);
var inst_29389 = (state_29428[(8)]);
var inst_29392 = (state_29428[(9)]);
var inst_29396__$1 = f.call(null,inst_29392);
var inst_29397 = cljs.core._EQ_.call(null,inst_29396__$1,inst_29389);
var inst_29398 = cljs.core.keyword_identical_QMARK_.call(null,inst_29389,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29399 = (inst_29397) || (inst_29398);
var state_29428__$1 = (function (){var statearr_29442 = state_29428;
(statearr_29442[(10)] = inst_29396__$1);

return statearr_29442;
})();
if(cljs.core.truth_(inst_29399)){
var statearr_29443_29472 = state_29428__$1;
(statearr_29443_29472[(1)] = (8));

} else {
var statearr_29444_29473 = state_29428__$1;
(statearr_29444_29473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (14))){
var inst_29421 = (state_29428[(2)]);
var inst_29422 = cljs.core.async.close_BANG_.call(null,out);
var state_29428__$1 = (function (){var statearr_29446 = state_29428;
(statearr_29446[(13)] = inst_29421);

return statearr_29446;
})();
var statearr_29447_29474 = state_29428__$1;
(statearr_29447_29474[(2)] = inst_29422);

(statearr_29447_29474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (10))){
var inst_29411 = (state_29428[(2)]);
var state_29428__$1 = state_29428;
var statearr_29448_29475 = state_29428__$1;
(statearr_29448_29475[(2)] = inst_29411);

(statearr_29448_29475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29429 === (8))){
var inst_29396 = (state_29428[(10)]);
var inst_29388 = (state_29428[(7)]);
var inst_29392 = (state_29428[(9)]);
var inst_29401 = inst_29388.push(inst_29392);
var tmp29445 = inst_29388;
var inst_29388__$1 = tmp29445;
var inst_29389 = inst_29396;
var state_29428__$1 = (function (){var statearr_29449 = state_29428;
(statearr_29449[(7)] = inst_29388__$1);

(statearr_29449[(8)] = inst_29389);

(statearr_29449[(14)] = inst_29401);

return statearr_29449;
})();
var statearr_29450_29476 = state_29428__$1;
(statearr_29450_29476[(2)] = null);

(statearr_29450_29476[(1)] = (2));


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
});})(c__26707__auto___29462,out))
;
return ((function (switch__26595__auto__,c__26707__auto___29462,out){
return (function() {
var cljs$core$async$state_machine__26596__auto__ = null;
var cljs$core$async$state_machine__26596__auto____0 = (function (){
var statearr_29454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29454[(0)] = cljs$core$async$state_machine__26596__auto__);

(statearr_29454[(1)] = (1));

return statearr_29454;
});
var cljs$core$async$state_machine__26596__auto____1 = (function (state_29428){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_29428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e29455){if((e29455 instanceof Object)){
var ex__26599__auto__ = e29455;
var statearr_29456_29477 = state_29428;
(statearr_29456_29477[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29478 = state_29428;
state_29428 = G__29478;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
cljs$core$async$state_machine__26596__auto__ = function(state_29428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26596__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26596__auto____1.call(this,state_29428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26596__auto____0;
cljs$core$async$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26596__auto____1;
return cljs$core$async$state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto___29462,out))
})();
var state__26709__auto__ = (function (){var statearr_29457 = f__26708__auto__.call(null);
(statearr_29457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto___29462);

return statearr_29457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto___29462,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map