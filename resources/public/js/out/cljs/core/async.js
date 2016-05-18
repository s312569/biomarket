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
var args29819 = [];
var len__26713__auto___29825 = arguments.length;
var i__26714__auto___29826 = (0);
while(true){
if((i__26714__auto___29826 < len__26713__auto___29825)){
args29819.push((arguments[i__26714__auto___29826]));

var G__29827 = (i__26714__auto___29826 + (1));
i__26714__auto___29826 = G__29827;
continue;
} else {
}
break;
}

var G__29821 = args29819.length;
switch (G__29821) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29819.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29822 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29822 = (function (f,blockable,meta29823){
this.f = f;
this.blockable = blockable;
this.meta29823 = meta29823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29824,meta29823__$1){
var self__ = this;
var _29824__$1 = this;
return (new cljs.core.async.t_cljs$core$async29822(self__.f,self__.blockable,meta29823__$1));
});

cljs.core.async.t_cljs$core$async29822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29824){
var self__ = this;
var _29824__$1 = this;
return self__.meta29823;
});

cljs.core.async.t_cljs$core$async29822.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29822.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29822.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29822.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29823","meta29823",1638823615,null)], null);
});

cljs.core.async.t_cljs$core$async29822.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29822";

cljs.core.async.t_cljs$core$async29822.cljs$lang$ctorPrWriter = (function (this__26249__auto__,writer__26250__auto__,opt__26251__auto__){
return cljs.core._write.call(null,writer__26250__auto__,"cljs.core.async/t_cljs$core$async29822");
});

cljs.core.async.__GT_t_cljs$core$async29822 = (function cljs$core$async$__GT_t_cljs$core$async29822(f__$1,blockable__$1,meta29823){
return (new cljs.core.async.t_cljs$core$async29822(f__$1,blockable__$1,meta29823));
});

}

return (new cljs.core.async.t_cljs$core$async29822(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args29831 = [];
var len__26713__auto___29834 = arguments.length;
var i__26714__auto___29835 = (0);
while(true){
if((i__26714__auto___29835 < len__26713__auto___29834)){
args29831.push((arguments[i__26714__auto___29835]));

var G__29836 = (i__26714__auto___29835 + (1));
i__26714__auto___29835 = G__29836;
continue;
} else {
}
break;
}

var G__29833 = args29831.length;
switch (G__29833) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29831.length)].join('')));

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
var args29838 = [];
var len__26713__auto___29841 = arguments.length;
var i__26714__auto___29842 = (0);
while(true){
if((i__26714__auto___29842 < len__26713__auto___29841)){
args29838.push((arguments[i__26714__auto___29842]));

var G__29843 = (i__26714__auto___29842 + (1));
i__26714__auto___29842 = G__29843;
continue;
} else {
}
break;
}

var G__29840 = args29838.length;
switch (G__29840) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29838.length)].join('')));

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
var args29845 = [];
var len__26713__auto___29848 = arguments.length;
var i__26714__auto___29849 = (0);
while(true){
if((i__26714__auto___29849 < len__26713__auto___29848)){
args29845.push((arguments[i__26714__auto___29849]));

var G__29850 = (i__26714__auto___29849 + (1));
i__26714__auto___29849 = G__29850;
continue;
} else {
}
break;
}

var G__29847 = args29845.length;
switch (G__29847) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29845.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29852 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29852);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29852,ret){
return (function (){
return fn1.call(null,val_29852);
});})(val_29852,ret))
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
var args29853 = [];
var len__26713__auto___29856 = arguments.length;
var i__26714__auto___29857 = (0);
while(true){
if((i__26714__auto___29857 < len__26713__auto___29856)){
args29853.push((arguments[i__26714__auto___29857]));

var G__29858 = (i__26714__auto___29857 + (1));
i__26714__auto___29857 = G__29858;
continue;
} else {
}
break;
}

var G__29855 = args29853.length;
switch (G__29855) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29853.length)].join('')));

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
var n__26558__auto___29860 = n;
var x_29861 = (0);
while(true){
if((x_29861 < n__26558__auto___29860)){
(a[x_29861] = (0));

var G__29862 = (x_29861 + (1));
x_29861 = G__29862;
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

var G__29863 = (i + (1));
i = G__29863;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29867 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29867 = (function (alt_flag,flag,meta29868){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29868 = meta29868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29869,meta29868__$1){
var self__ = this;
var _29869__$1 = this;
return (new cljs.core.async.t_cljs$core$async29867(self__.alt_flag,self__.flag,meta29868__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29867.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29869){
var self__ = this;
var _29869__$1 = this;
return self__.meta29868;
});})(flag))
;

cljs.core.async.t_cljs$core$async29867.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29867.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29867.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29867.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29867.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29868","meta29868",-1787526136,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29867.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29867";

cljs.core.async.t_cljs$core$async29867.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26249__auto__,writer__26250__auto__,opt__26251__auto__){
return cljs.core._write.call(null,writer__26250__auto__,"cljs.core.async/t_cljs$core$async29867");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29867 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29867(alt_flag__$1,flag__$1,meta29868){
return (new cljs.core.async.t_cljs$core$async29867(alt_flag__$1,flag__$1,meta29868));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29867(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29873 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29873 = (function (alt_handler,flag,cb,meta29874){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29874 = meta29874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29875,meta29874__$1){
var self__ = this;
var _29875__$1 = this;
return (new cljs.core.async.t_cljs$core$async29873(self__.alt_handler,self__.flag,self__.cb,meta29874__$1));
});

cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29875){
var self__ = this;
var _29875__$1 = this;
return self__.meta29874;
});

cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29874","meta29874",-2009452239,null)], null);
});

cljs.core.async.t_cljs$core$async29873.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29873";

cljs.core.async.t_cljs$core$async29873.cljs$lang$ctorPrWriter = (function (this__26249__auto__,writer__26250__auto__,opt__26251__auto__){
return cljs.core._write.call(null,writer__26250__auto__,"cljs.core.async/t_cljs$core$async29873");
});

cljs.core.async.__GT_t_cljs$core$async29873 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29873(alt_handler__$1,flag__$1,cb__$1,meta29874){
return (new cljs.core.async.t_cljs$core$async29873(alt_handler__$1,flag__$1,cb__$1,meta29874));
});

}

return (new cljs.core.async.t_cljs$core$async29873(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29876_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29876_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29877_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29877_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25643__auto__ = wport;
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29878 = (i + (1));
i = G__29878;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25643__auto__ = ret;
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__25631__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25631__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25631__auto__;
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
var args__26720__auto__ = [];
var len__26713__auto___29884 = arguments.length;
var i__26714__auto___29885 = (0);
while(true){
if((i__26714__auto___29885 < len__26713__auto___29884)){
args__26720__auto__.push((arguments[i__26714__auto___29885]));

var G__29886 = (i__26714__auto___29885 + (1));
i__26714__auto___29885 = G__29886;
continue;
} else {
}
break;
}

var argseq__26721__auto__ = ((((1) < args__26720__auto__.length))?(new cljs.core.IndexedSeq(args__26720__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26721__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29881){
var map__29882 = p__29881;
var map__29882__$1 = ((((!((map__29882 == null)))?((((map__29882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29882):map__29882);
var opts = map__29882__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29879){
var G__29880 = cljs.core.first.call(null,seq29879);
var seq29879__$1 = cljs.core.next.call(null,seq29879);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29880,seq29879__$1);
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
var args29887 = [];
var len__26713__auto___29937 = arguments.length;
var i__26714__auto___29938 = (0);
while(true){
if((i__26714__auto___29938 < len__26713__auto___29937)){
args29887.push((arguments[i__26714__auto___29938]));

var G__29939 = (i__26714__auto___29938 + (1));
i__26714__auto___29938 = G__29939;
continue;
} else {
}
break;
}

var G__29889 = args29887.length;
switch (G__29889) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29887.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29774__auto___29941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto___29941){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto___29941){
return (function (state_29913){
var state_val_29914 = (state_29913[(1)]);
if((state_val_29914 === (7))){
var inst_29909 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29915_29942 = state_29913__$1;
(statearr_29915_29942[(2)] = inst_29909);

(statearr_29915_29942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (1))){
var state_29913__$1 = state_29913;
var statearr_29916_29943 = state_29913__$1;
(statearr_29916_29943[(2)] = null);

(statearr_29916_29943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (4))){
var inst_29892 = (state_29913[(7)]);
var inst_29892__$1 = (state_29913[(2)]);
var inst_29893 = (inst_29892__$1 == null);
var state_29913__$1 = (function (){var statearr_29917 = state_29913;
(statearr_29917[(7)] = inst_29892__$1);

return statearr_29917;
})();
if(cljs.core.truth_(inst_29893)){
var statearr_29918_29944 = state_29913__$1;
(statearr_29918_29944[(1)] = (5));

} else {
var statearr_29919_29945 = state_29913__$1;
(statearr_29919_29945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (13))){
var state_29913__$1 = state_29913;
var statearr_29920_29946 = state_29913__$1;
(statearr_29920_29946[(2)] = null);

(statearr_29920_29946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (6))){
var inst_29892 = (state_29913[(7)]);
var state_29913__$1 = state_29913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29913__$1,(11),to,inst_29892);
} else {
if((state_val_29914 === (3))){
var inst_29911 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29913__$1,inst_29911);
} else {
if((state_val_29914 === (12))){
var state_29913__$1 = state_29913;
var statearr_29921_29947 = state_29913__$1;
(statearr_29921_29947[(2)] = null);

(statearr_29921_29947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (2))){
var state_29913__$1 = state_29913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29913__$1,(4),from);
} else {
if((state_val_29914 === (11))){
var inst_29902 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
if(cljs.core.truth_(inst_29902)){
var statearr_29922_29948 = state_29913__$1;
(statearr_29922_29948[(1)] = (12));

} else {
var statearr_29923_29949 = state_29913__$1;
(statearr_29923_29949[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (9))){
var state_29913__$1 = state_29913;
var statearr_29924_29950 = state_29913__$1;
(statearr_29924_29950[(2)] = null);

(statearr_29924_29950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (5))){
var state_29913__$1 = state_29913;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29925_29951 = state_29913__$1;
(statearr_29925_29951[(1)] = (8));

} else {
var statearr_29926_29952 = state_29913__$1;
(statearr_29926_29952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (14))){
var inst_29907 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29927_29953 = state_29913__$1;
(statearr_29927_29953[(2)] = inst_29907);

(statearr_29927_29953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (10))){
var inst_29899 = (state_29913[(2)]);
var state_29913__$1 = state_29913;
var statearr_29928_29954 = state_29913__$1;
(statearr_29928_29954[(2)] = inst_29899);

(statearr_29928_29954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (8))){
var inst_29896 = cljs.core.async.close_BANG_.call(null,to);
var state_29913__$1 = state_29913;
var statearr_29929_29955 = state_29913__$1;
(statearr_29929_29955[(2)] = inst_29896);

(statearr_29929_29955[(1)] = (10));


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
});})(c__29774__auto___29941))
;
return ((function (switch__29662__auto__,c__29774__auto___29941){
return (function() {
var cljs$core$async$state_machine__29663__auto__ = null;
var cljs$core$async$state_machine__29663__auto____0 = (function (){
var statearr_29933 = [null,null,null,null,null,null,null,null];
(statearr_29933[(0)] = cljs$core$async$state_machine__29663__auto__);

(statearr_29933[(1)] = (1));

return statearr_29933;
});
var cljs$core$async$state_machine__29663__auto____1 = (function (state_29913){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_29913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e29934){if((e29934 instanceof Object)){
var ex__29666__auto__ = e29934;
var statearr_29935_29956 = state_29913;
(statearr_29935_29956[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29957 = state_29913;
state_29913 = G__29957;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
cljs$core$async$state_machine__29663__auto__ = function(state_29913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29663__auto____1.call(this,state_29913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29663__auto____0;
cljs$core$async$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29663__auto____1;
return cljs$core$async$state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto___29941))
})();
var state__29776__auto__ = (function (){var statearr_29936 = f__29775__auto__.call(null);
(statearr_29936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___29941);

return statearr_29936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto___29941))
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
return (function (p__30141){
var vec__30142 = p__30141;
var v = cljs.core.nth.call(null,vec__30142,(0),null);
var p = cljs.core.nth.call(null,vec__30142,(1),null);
var job = vec__30142;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29774__auto___30324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto___30324,res,vec__30142,v,p,job,jobs,results){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto___30324,res,vec__30142,v,p,job,jobs,results){
return (function (state_30147){
var state_val_30148 = (state_30147[(1)]);
if((state_val_30148 === (1))){
var state_30147__$1 = state_30147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30147__$1,(2),res,v);
} else {
if((state_val_30148 === (2))){
var inst_30144 = (state_30147[(2)]);
var inst_30145 = cljs.core.async.close_BANG_.call(null,res);
var state_30147__$1 = (function (){var statearr_30149 = state_30147;
(statearr_30149[(7)] = inst_30144);

return statearr_30149;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30147__$1,inst_30145);
} else {
return null;
}
}
});})(c__29774__auto___30324,res,vec__30142,v,p,job,jobs,results))
;
return ((function (switch__29662__auto__,c__29774__auto___30324,res,vec__30142,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____0 = (function (){
var statearr_30153 = [null,null,null,null,null,null,null,null];
(statearr_30153[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__);

(statearr_30153[(1)] = (1));

return statearr_30153;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____1 = (function (state_30147){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_30147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e30154){if((e30154 instanceof Object)){
var ex__29666__auto__ = e30154;
var statearr_30155_30325 = state_30147;
(statearr_30155_30325[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30326 = state_30147;
state_30147 = G__30326;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__ = function(state_30147){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____1.call(this,state_30147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto___30324,res,vec__30142,v,p,job,jobs,results))
})();
var state__29776__auto__ = (function (){var statearr_30156 = f__29775__auto__.call(null);
(statearr_30156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___30324);

return statearr_30156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto___30324,res,vec__30142,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30157){
var vec__30158 = p__30157;
var v = cljs.core.nth.call(null,vec__30158,(0),null);
var p = cljs.core.nth.call(null,vec__30158,(1),null);
var job = vec__30158;
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
var n__26558__auto___30327 = n;
var __30328 = (0);
while(true){
if((__30328 < n__26558__auto___30327)){
var G__30159_30329 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30159_30329) {
case "compute":
var c__29774__auto___30331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30328,c__29774__auto___30331,G__30159_30329,n__26558__auto___30327,jobs,results,process,async){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (__30328,c__29774__auto___30331,G__30159_30329,n__26558__auto___30327,jobs,results,process,async){
return (function (state_30172){
var state_val_30173 = (state_30172[(1)]);
if((state_val_30173 === (1))){
var state_30172__$1 = state_30172;
var statearr_30174_30332 = state_30172__$1;
(statearr_30174_30332[(2)] = null);

(statearr_30174_30332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (2))){
var state_30172__$1 = state_30172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30172__$1,(4),jobs);
} else {
if((state_val_30173 === (3))){
var inst_30170 = (state_30172[(2)]);
var state_30172__$1 = state_30172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30172__$1,inst_30170);
} else {
if((state_val_30173 === (4))){
var inst_30162 = (state_30172[(2)]);
var inst_30163 = process.call(null,inst_30162);
var state_30172__$1 = state_30172;
if(cljs.core.truth_(inst_30163)){
var statearr_30175_30333 = state_30172__$1;
(statearr_30175_30333[(1)] = (5));

} else {
var statearr_30176_30334 = state_30172__$1;
(statearr_30176_30334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (5))){
var state_30172__$1 = state_30172;
var statearr_30177_30335 = state_30172__$1;
(statearr_30177_30335[(2)] = null);

(statearr_30177_30335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (6))){
var state_30172__$1 = state_30172;
var statearr_30178_30336 = state_30172__$1;
(statearr_30178_30336[(2)] = null);

(statearr_30178_30336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30173 === (7))){
var inst_30168 = (state_30172[(2)]);
var state_30172__$1 = state_30172;
var statearr_30179_30337 = state_30172__$1;
(statearr_30179_30337[(2)] = inst_30168);

(statearr_30179_30337[(1)] = (3));


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
});})(__30328,c__29774__auto___30331,G__30159_30329,n__26558__auto___30327,jobs,results,process,async))
;
return ((function (__30328,switch__29662__auto__,c__29774__auto___30331,G__30159_30329,n__26558__auto___30327,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____0 = (function (){
var statearr_30183 = [null,null,null,null,null,null,null];
(statearr_30183[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__);

(statearr_30183[(1)] = (1));

return statearr_30183;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____1 = (function (state_30172){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_30172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e30184){if((e30184 instanceof Object)){
var ex__29666__auto__ = e30184;
var statearr_30185_30338 = state_30172;
(statearr_30185_30338[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30339 = state_30172;
state_30172 = G__30339;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__ = function(state_30172){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____1.call(this,state_30172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__;
})()
;})(__30328,switch__29662__auto__,c__29774__auto___30331,G__30159_30329,n__26558__auto___30327,jobs,results,process,async))
})();
var state__29776__auto__ = (function (){var statearr_30186 = f__29775__auto__.call(null);
(statearr_30186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___30331);

return statearr_30186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(__30328,c__29774__auto___30331,G__30159_30329,n__26558__auto___30327,jobs,results,process,async))
);


break;
case "async":
var c__29774__auto___30340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30328,c__29774__auto___30340,G__30159_30329,n__26558__auto___30327,jobs,results,process,async){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (__30328,c__29774__auto___30340,G__30159_30329,n__26558__auto___30327,jobs,results,process,async){
return (function (state_30199){
var state_val_30200 = (state_30199[(1)]);
if((state_val_30200 === (1))){
var state_30199__$1 = state_30199;
var statearr_30201_30341 = state_30199__$1;
(statearr_30201_30341[(2)] = null);

(statearr_30201_30341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (2))){
var state_30199__$1 = state_30199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30199__$1,(4),jobs);
} else {
if((state_val_30200 === (3))){
var inst_30197 = (state_30199[(2)]);
var state_30199__$1 = state_30199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30199__$1,inst_30197);
} else {
if((state_val_30200 === (4))){
var inst_30189 = (state_30199[(2)]);
var inst_30190 = async.call(null,inst_30189);
var state_30199__$1 = state_30199;
if(cljs.core.truth_(inst_30190)){
var statearr_30202_30342 = state_30199__$1;
(statearr_30202_30342[(1)] = (5));

} else {
var statearr_30203_30343 = state_30199__$1;
(statearr_30203_30343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (5))){
var state_30199__$1 = state_30199;
var statearr_30204_30344 = state_30199__$1;
(statearr_30204_30344[(2)] = null);

(statearr_30204_30344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (6))){
var state_30199__$1 = state_30199;
var statearr_30205_30345 = state_30199__$1;
(statearr_30205_30345[(2)] = null);

(statearr_30205_30345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30200 === (7))){
var inst_30195 = (state_30199[(2)]);
var state_30199__$1 = state_30199;
var statearr_30206_30346 = state_30199__$1;
(statearr_30206_30346[(2)] = inst_30195);

(statearr_30206_30346[(1)] = (3));


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
});})(__30328,c__29774__auto___30340,G__30159_30329,n__26558__auto___30327,jobs,results,process,async))
;
return ((function (__30328,switch__29662__auto__,c__29774__auto___30340,G__30159_30329,n__26558__auto___30327,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____0 = (function (){
var statearr_30210 = [null,null,null,null,null,null,null];
(statearr_30210[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__);

(statearr_30210[(1)] = (1));

return statearr_30210;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____1 = (function (state_30199){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_30199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e30211){if((e30211 instanceof Object)){
var ex__29666__auto__ = e30211;
var statearr_30212_30347 = state_30199;
(statearr_30212_30347[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30348 = state_30199;
state_30199 = G__30348;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__ = function(state_30199){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____1.call(this,state_30199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__;
})()
;})(__30328,switch__29662__auto__,c__29774__auto___30340,G__30159_30329,n__26558__auto___30327,jobs,results,process,async))
})();
var state__29776__auto__ = (function (){var statearr_30213 = f__29775__auto__.call(null);
(statearr_30213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___30340);

return statearr_30213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(__30328,c__29774__auto___30340,G__30159_30329,n__26558__auto___30327,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30349 = (__30328 + (1));
__30328 = G__30349;
continue;
} else {
}
break;
}

var c__29774__auto___30350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto___30350,jobs,results,process,async){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto___30350,jobs,results,process,async){
return (function (state_30235){
var state_val_30236 = (state_30235[(1)]);
if((state_val_30236 === (1))){
var state_30235__$1 = state_30235;
var statearr_30237_30351 = state_30235__$1;
(statearr_30237_30351[(2)] = null);

(statearr_30237_30351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (2))){
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30235__$1,(4),from);
} else {
if((state_val_30236 === (3))){
var inst_30233 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30235__$1,inst_30233);
} else {
if((state_val_30236 === (4))){
var inst_30216 = (state_30235[(7)]);
var inst_30216__$1 = (state_30235[(2)]);
var inst_30217 = (inst_30216__$1 == null);
var state_30235__$1 = (function (){var statearr_30238 = state_30235;
(statearr_30238[(7)] = inst_30216__$1);

return statearr_30238;
})();
if(cljs.core.truth_(inst_30217)){
var statearr_30239_30352 = state_30235__$1;
(statearr_30239_30352[(1)] = (5));

} else {
var statearr_30240_30353 = state_30235__$1;
(statearr_30240_30353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (5))){
var inst_30219 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30235__$1 = state_30235;
var statearr_30241_30354 = state_30235__$1;
(statearr_30241_30354[(2)] = inst_30219);

(statearr_30241_30354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (6))){
var inst_30221 = (state_30235[(8)]);
var inst_30216 = (state_30235[(7)]);
var inst_30221__$1 = cljs.core.async.chan.call(null,(1));
var inst_30222 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30223 = [inst_30216,inst_30221__$1];
var inst_30224 = (new cljs.core.PersistentVector(null,2,(5),inst_30222,inst_30223,null));
var state_30235__$1 = (function (){var statearr_30242 = state_30235;
(statearr_30242[(8)] = inst_30221__$1);

return statearr_30242;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30235__$1,(8),jobs,inst_30224);
} else {
if((state_val_30236 === (7))){
var inst_30231 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30243_30355 = state_30235__$1;
(statearr_30243_30355[(2)] = inst_30231);

(statearr_30243_30355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (8))){
var inst_30221 = (state_30235[(8)]);
var inst_30226 = (state_30235[(2)]);
var state_30235__$1 = (function (){var statearr_30244 = state_30235;
(statearr_30244[(9)] = inst_30226);

return statearr_30244;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30235__$1,(9),results,inst_30221);
} else {
if((state_val_30236 === (9))){
var inst_30228 = (state_30235[(2)]);
var state_30235__$1 = (function (){var statearr_30245 = state_30235;
(statearr_30245[(10)] = inst_30228);

return statearr_30245;
})();
var statearr_30246_30356 = state_30235__$1;
(statearr_30246_30356[(2)] = null);

(statearr_30246_30356[(1)] = (2));


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
});})(c__29774__auto___30350,jobs,results,process,async))
;
return ((function (switch__29662__auto__,c__29774__auto___30350,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____0 = (function (){
var statearr_30250 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__);

(statearr_30250[(1)] = (1));

return statearr_30250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____1 = (function (state_30235){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_30235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e30251){if((e30251 instanceof Object)){
var ex__29666__auto__ = e30251;
var statearr_30252_30357 = state_30235;
(statearr_30252_30357[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30358 = state_30235;
state_30235 = G__30358;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__ = function(state_30235){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____1.call(this,state_30235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto___30350,jobs,results,process,async))
})();
var state__29776__auto__ = (function (){var statearr_30253 = f__29775__auto__.call(null);
(statearr_30253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___30350);

return statearr_30253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto___30350,jobs,results,process,async))
);


var c__29774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto__,jobs,results,process,async){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto__,jobs,results,process,async){
return (function (state_30291){
var state_val_30292 = (state_30291[(1)]);
if((state_val_30292 === (7))){
var inst_30287 = (state_30291[(2)]);
var state_30291__$1 = state_30291;
var statearr_30293_30359 = state_30291__$1;
(statearr_30293_30359[(2)] = inst_30287);

(statearr_30293_30359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30292 === (20))){
var state_30291__$1 = state_30291;
var statearr_30294_30360 = state_30291__$1;
(statearr_30294_30360[(2)] = null);

(statearr_30294_30360[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30292 === (1))){
var state_30291__$1 = state_30291;
var statearr_30295_30361 = state_30291__$1;
(statearr_30295_30361[(2)] = null);

(statearr_30295_30361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30292 === (4))){
var inst_30256 = (state_30291[(7)]);
var inst_30256__$1 = (state_30291[(2)]);
var inst_30257 = (inst_30256__$1 == null);
var state_30291__$1 = (function (){var statearr_30296 = state_30291;
(statearr_30296[(7)] = inst_30256__$1);

return statearr_30296;
})();
if(cljs.core.truth_(inst_30257)){
var statearr_30297_30362 = state_30291__$1;
(statearr_30297_30362[(1)] = (5));

} else {
var statearr_30298_30363 = state_30291__$1;
(statearr_30298_30363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30292 === (15))){
var inst_30269 = (state_30291[(8)]);
var state_30291__$1 = state_30291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30291__$1,(18),to,inst_30269);
} else {
if((state_val_30292 === (21))){
var inst_30282 = (state_30291[(2)]);
var state_30291__$1 = state_30291;
var statearr_30299_30364 = state_30291__$1;
(statearr_30299_30364[(2)] = inst_30282);

(statearr_30299_30364[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30292 === (13))){
var inst_30284 = (state_30291[(2)]);
var state_30291__$1 = (function (){var statearr_30300 = state_30291;
(statearr_30300[(9)] = inst_30284);

return statearr_30300;
})();
var statearr_30301_30365 = state_30291__$1;
(statearr_30301_30365[(2)] = null);

(statearr_30301_30365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30292 === (6))){
var inst_30256 = (state_30291[(7)]);
var state_30291__$1 = state_30291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30291__$1,(11),inst_30256);
} else {
if((state_val_30292 === (17))){
var inst_30277 = (state_30291[(2)]);
var state_30291__$1 = state_30291;
if(cljs.core.truth_(inst_30277)){
var statearr_30302_30366 = state_30291__$1;
(statearr_30302_30366[(1)] = (19));

} else {
var statearr_30303_30367 = state_30291__$1;
(statearr_30303_30367[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30292 === (3))){
var inst_30289 = (state_30291[(2)]);
var state_30291__$1 = state_30291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30291__$1,inst_30289);
} else {
if((state_val_30292 === (12))){
var inst_30266 = (state_30291[(10)]);
var state_30291__$1 = state_30291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30291__$1,(14),inst_30266);
} else {
if((state_val_30292 === (2))){
var state_30291__$1 = state_30291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30291__$1,(4),results);
} else {
if((state_val_30292 === (19))){
var state_30291__$1 = state_30291;
var statearr_30304_30368 = state_30291__$1;
(statearr_30304_30368[(2)] = null);

(statearr_30304_30368[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30292 === (11))){
var inst_30266 = (state_30291[(2)]);
var state_30291__$1 = (function (){var statearr_30305 = state_30291;
(statearr_30305[(10)] = inst_30266);

return statearr_30305;
})();
var statearr_30306_30369 = state_30291__$1;
(statearr_30306_30369[(2)] = null);

(statearr_30306_30369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30292 === (9))){
var state_30291__$1 = state_30291;
var statearr_30307_30370 = state_30291__$1;
(statearr_30307_30370[(2)] = null);

(statearr_30307_30370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30292 === (5))){
var state_30291__$1 = state_30291;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30308_30371 = state_30291__$1;
(statearr_30308_30371[(1)] = (8));

} else {
var statearr_30309_30372 = state_30291__$1;
(statearr_30309_30372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30292 === (14))){
var inst_30269 = (state_30291[(8)]);
var inst_30271 = (state_30291[(11)]);
var inst_30269__$1 = (state_30291[(2)]);
var inst_30270 = (inst_30269__$1 == null);
var inst_30271__$1 = cljs.core.not.call(null,inst_30270);
var state_30291__$1 = (function (){var statearr_30310 = state_30291;
(statearr_30310[(8)] = inst_30269__$1);

(statearr_30310[(11)] = inst_30271__$1);

return statearr_30310;
})();
if(inst_30271__$1){
var statearr_30311_30373 = state_30291__$1;
(statearr_30311_30373[(1)] = (15));

} else {
var statearr_30312_30374 = state_30291__$1;
(statearr_30312_30374[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30292 === (16))){
var inst_30271 = (state_30291[(11)]);
var state_30291__$1 = state_30291;
var statearr_30313_30375 = state_30291__$1;
(statearr_30313_30375[(2)] = inst_30271);

(statearr_30313_30375[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30292 === (10))){
var inst_30263 = (state_30291[(2)]);
var state_30291__$1 = state_30291;
var statearr_30314_30376 = state_30291__$1;
(statearr_30314_30376[(2)] = inst_30263);

(statearr_30314_30376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30292 === (18))){
var inst_30274 = (state_30291[(2)]);
var state_30291__$1 = state_30291;
var statearr_30315_30377 = state_30291__$1;
(statearr_30315_30377[(2)] = inst_30274);

(statearr_30315_30377[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30292 === (8))){
var inst_30260 = cljs.core.async.close_BANG_.call(null,to);
var state_30291__$1 = state_30291;
var statearr_30316_30378 = state_30291__$1;
(statearr_30316_30378[(2)] = inst_30260);

(statearr_30316_30378[(1)] = (10));


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
});})(c__29774__auto__,jobs,results,process,async))
;
return ((function (switch__29662__auto__,c__29774__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____0 = (function (){
var statearr_30320 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30320[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__);

(statearr_30320[(1)] = (1));

return statearr_30320;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____1 = (function (state_30291){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_30291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e30321){if((e30321 instanceof Object)){
var ex__29666__auto__ = e30321;
var statearr_30322_30379 = state_30291;
(statearr_30322_30379[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30380 = state_30291;
state_30291 = G__30380;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__ = function(state_30291){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____1.call(this,state_30291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29663__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto__,jobs,results,process,async))
})();
var state__29776__auto__ = (function (){var statearr_30323 = f__29775__auto__.call(null);
(statearr_30323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto__);

return statearr_30323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto__,jobs,results,process,async))
);

return c__29774__auto__;
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
var args30381 = [];
var len__26713__auto___30384 = arguments.length;
var i__26714__auto___30385 = (0);
while(true){
if((i__26714__auto___30385 < len__26713__auto___30384)){
args30381.push((arguments[i__26714__auto___30385]));

var G__30386 = (i__26714__auto___30385 + (1));
i__26714__auto___30385 = G__30386;
continue;
} else {
}
break;
}

var G__30383 = args30381.length;
switch (G__30383) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30381.length)].join('')));

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
var args30388 = [];
var len__26713__auto___30391 = arguments.length;
var i__26714__auto___30392 = (0);
while(true){
if((i__26714__auto___30392 < len__26713__auto___30391)){
args30388.push((arguments[i__26714__auto___30392]));

var G__30393 = (i__26714__auto___30392 + (1));
i__26714__auto___30392 = G__30393;
continue;
} else {
}
break;
}

var G__30390 = args30388.length;
switch (G__30390) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30388.length)].join('')));

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
var args30395 = [];
var len__26713__auto___30448 = arguments.length;
var i__26714__auto___30449 = (0);
while(true){
if((i__26714__auto___30449 < len__26713__auto___30448)){
args30395.push((arguments[i__26714__auto___30449]));

var G__30450 = (i__26714__auto___30449 + (1));
i__26714__auto___30449 = G__30450;
continue;
} else {
}
break;
}

var G__30397 = args30395.length;
switch (G__30397) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30395.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29774__auto___30452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto___30452,tc,fc){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto___30452,tc,fc){
return (function (state_30423){
var state_val_30424 = (state_30423[(1)]);
if((state_val_30424 === (7))){
var inst_30419 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
var statearr_30425_30453 = state_30423__$1;
(statearr_30425_30453[(2)] = inst_30419);

(statearr_30425_30453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (1))){
var state_30423__$1 = state_30423;
var statearr_30426_30454 = state_30423__$1;
(statearr_30426_30454[(2)] = null);

(statearr_30426_30454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (4))){
var inst_30400 = (state_30423[(7)]);
var inst_30400__$1 = (state_30423[(2)]);
var inst_30401 = (inst_30400__$1 == null);
var state_30423__$1 = (function (){var statearr_30427 = state_30423;
(statearr_30427[(7)] = inst_30400__$1);

return statearr_30427;
})();
if(cljs.core.truth_(inst_30401)){
var statearr_30428_30455 = state_30423__$1;
(statearr_30428_30455[(1)] = (5));

} else {
var statearr_30429_30456 = state_30423__$1;
(statearr_30429_30456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (13))){
var state_30423__$1 = state_30423;
var statearr_30430_30457 = state_30423__$1;
(statearr_30430_30457[(2)] = null);

(statearr_30430_30457[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (6))){
var inst_30400 = (state_30423[(7)]);
var inst_30406 = p.call(null,inst_30400);
var state_30423__$1 = state_30423;
if(cljs.core.truth_(inst_30406)){
var statearr_30431_30458 = state_30423__$1;
(statearr_30431_30458[(1)] = (9));

} else {
var statearr_30432_30459 = state_30423__$1;
(statearr_30432_30459[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (3))){
var inst_30421 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30423__$1,inst_30421);
} else {
if((state_val_30424 === (12))){
var state_30423__$1 = state_30423;
var statearr_30433_30460 = state_30423__$1;
(statearr_30433_30460[(2)] = null);

(statearr_30433_30460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (2))){
var state_30423__$1 = state_30423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30423__$1,(4),ch);
} else {
if((state_val_30424 === (11))){
var inst_30400 = (state_30423[(7)]);
var inst_30410 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30423__$1,(8),inst_30410,inst_30400);
} else {
if((state_val_30424 === (9))){
var state_30423__$1 = state_30423;
var statearr_30434_30461 = state_30423__$1;
(statearr_30434_30461[(2)] = tc);

(statearr_30434_30461[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (5))){
var inst_30403 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30404 = cljs.core.async.close_BANG_.call(null,fc);
var state_30423__$1 = (function (){var statearr_30435 = state_30423;
(statearr_30435[(8)] = inst_30403);

return statearr_30435;
})();
var statearr_30436_30462 = state_30423__$1;
(statearr_30436_30462[(2)] = inst_30404);

(statearr_30436_30462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (14))){
var inst_30417 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
var statearr_30437_30463 = state_30423__$1;
(statearr_30437_30463[(2)] = inst_30417);

(statearr_30437_30463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (10))){
var state_30423__$1 = state_30423;
var statearr_30438_30464 = state_30423__$1;
(statearr_30438_30464[(2)] = fc);

(statearr_30438_30464[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30424 === (8))){
var inst_30412 = (state_30423[(2)]);
var state_30423__$1 = state_30423;
if(cljs.core.truth_(inst_30412)){
var statearr_30439_30465 = state_30423__$1;
(statearr_30439_30465[(1)] = (12));

} else {
var statearr_30440_30466 = state_30423__$1;
(statearr_30440_30466[(1)] = (13));

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
});})(c__29774__auto___30452,tc,fc))
;
return ((function (switch__29662__auto__,c__29774__auto___30452,tc,fc){
return (function() {
var cljs$core$async$state_machine__29663__auto__ = null;
var cljs$core$async$state_machine__29663__auto____0 = (function (){
var statearr_30444 = [null,null,null,null,null,null,null,null,null];
(statearr_30444[(0)] = cljs$core$async$state_machine__29663__auto__);

(statearr_30444[(1)] = (1));

return statearr_30444;
});
var cljs$core$async$state_machine__29663__auto____1 = (function (state_30423){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_30423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e30445){if((e30445 instanceof Object)){
var ex__29666__auto__ = e30445;
var statearr_30446_30467 = state_30423;
(statearr_30446_30467[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30468 = state_30423;
state_30423 = G__30468;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
cljs$core$async$state_machine__29663__auto__ = function(state_30423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29663__auto____1.call(this,state_30423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29663__auto____0;
cljs$core$async$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29663__auto____1;
return cljs$core$async$state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto___30452,tc,fc))
})();
var state__29776__auto__ = (function (){var statearr_30447 = f__29775__auto__.call(null);
(statearr_30447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___30452);

return statearr_30447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto___30452,tc,fc))
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
var c__29774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto__){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto__){
return (function (state_30532){
var state_val_30533 = (state_30532[(1)]);
if((state_val_30533 === (7))){
var inst_30528 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30534_30555 = state_30532__$1;
(statearr_30534_30555[(2)] = inst_30528);

(statearr_30534_30555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (1))){
var inst_30512 = init;
var state_30532__$1 = (function (){var statearr_30535 = state_30532;
(statearr_30535[(7)] = inst_30512);

return statearr_30535;
})();
var statearr_30536_30556 = state_30532__$1;
(statearr_30536_30556[(2)] = null);

(statearr_30536_30556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (4))){
var inst_30515 = (state_30532[(8)]);
var inst_30515__$1 = (state_30532[(2)]);
var inst_30516 = (inst_30515__$1 == null);
var state_30532__$1 = (function (){var statearr_30537 = state_30532;
(statearr_30537[(8)] = inst_30515__$1);

return statearr_30537;
})();
if(cljs.core.truth_(inst_30516)){
var statearr_30538_30557 = state_30532__$1;
(statearr_30538_30557[(1)] = (5));

} else {
var statearr_30539_30558 = state_30532__$1;
(statearr_30539_30558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (6))){
var inst_30519 = (state_30532[(9)]);
var inst_30512 = (state_30532[(7)]);
var inst_30515 = (state_30532[(8)]);
var inst_30519__$1 = f.call(null,inst_30512,inst_30515);
var inst_30520 = cljs.core.reduced_QMARK_.call(null,inst_30519__$1);
var state_30532__$1 = (function (){var statearr_30540 = state_30532;
(statearr_30540[(9)] = inst_30519__$1);

return statearr_30540;
})();
if(inst_30520){
var statearr_30541_30559 = state_30532__$1;
(statearr_30541_30559[(1)] = (8));

} else {
var statearr_30542_30560 = state_30532__$1;
(statearr_30542_30560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (3))){
var inst_30530 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30532__$1,inst_30530);
} else {
if((state_val_30533 === (2))){
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30532__$1,(4),ch);
} else {
if((state_val_30533 === (9))){
var inst_30519 = (state_30532[(9)]);
var inst_30512 = inst_30519;
var state_30532__$1 = (function (){var statearr_30543 = state_30532;
(statearr_30543[(7)] = inst_30512);

return statearr_30543;
})();
var statearr_30544_30561 = state_30532__$1;
(statearr_30544_30561[(2)] = null);

(statearr_30544_30561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (5))){
var inst_30512 = (state_30532[(7)]);
var state_30532__$1 = state_30532;
var statearr_30545_30562 = state_30532__$1;
(statearr_30545_30562[(2)] = inst_30512);

(statearr_30545_30562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (10))){
var inst_30526 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30546_30563 = state_30532__$1;
(statearr_30546_30563[(2)] = inst_30526);

(statearr_30546_30563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (8))){
var inst_30519 = (state_30532[(9)]);
var inst_30522 = cljs.core.deref.call(null,inst_30519);
var state_30532__$1 = state_30532;
var statearr_30547_30564 = state_30532__$1;
(statearr_30547_30564[(2)] = inst_30522);

(statearr_30547_30564[(1)] = (10));


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
});})(c__29774__auto__))
;
return ((function (switch__29662__auto__,c__29774__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29663__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29663__auto____0 = (function (){
var statearr_30551 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30551[(0)] = cljs$core$async$reduce_$_state_machine__29663__auto__);

(statearr_30551[(1)] = (1));

return statearr_30551;
});
var cljs$core$async$reduce_$_state_machine__29663__auto____1 = (function (state_30532){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_30532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e30552){if((e30552 instanceof Object)){
var ex__29666__auto__ = e30552;
var statearr_30553_30565 = state_30532;
(statearr_30553_30565[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30566 = state_30532;
state_30532 = G__30566;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29663__auto__ = function(state_30532){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29663__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29663__auto____1.call(this,state_30532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29663__auto____0;
cljs$core$async$reduce_$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29663__auto____1;
return cljs$core$async$reduce_$_state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto__))
})();
var state__29776__auto__ = (function (){var statearr_30554 = f__29775__auto__.call(null);
(statearr_30554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto__);

return statearr_30554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto__))
);

return c__29774__auto__;
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
var args30567 = [];
var len__26713__auto___30619 = arguments.length;
var i__26714__auto___30620 = (0);
while(true){
if((i__26714__auto___30620 < len__26713__auto___30619)){
args30567.push((arguments[i__26714__auto___30620]));

var G__30621 = (i__26714__auto___30620 + (1));
i__26714__auto___30620 = G__30621;
continue;
} else {
}
break;
}

var G__30569 = args30567.length;
switch (G__30569) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30567.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto__){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto__){
return (function (state_30594){
var state_val_30595 = (state_30594[(1)]);
if((state_val_30595 === (7))){
var inst_30576 = (state_30594[(2)]);
var state_30594__$1 = state_30594;
var statearr_30596_30623 = state_30594__$1;
(statearr_30596_30623[(2)] = inst_30576);

(statearr_30596_30623[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (1))){
var inst_30570 = cljs.core.seq.call(null,coll);
var inst_30571 = inst_30570;
var state_30594__$1 = (function (){var statearr_30597 = state_30594;
(statearr_30597[(7)] = inst_30571);

return statearr_30597;
})();
var statearr_30598_30624 = state_30594__$1;
(statearr_30598_30624[(2)] = null);

(statearr_30598_30624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (4))){
var inst_30571 = (state_30594[(7)]);
var inst_30574 = cljs.core.first.call(null,inst_30571);
var state_30594__$1 = state_30594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30594__$1,(7),ch,inst_30574);
} else {
if((state_val_30595 === (13))){
var inst_30588 = (state_30594[(2)]);
var state_30594__$1 = state_30594;
var statearr_30599_30625 = state_30594__$1;
(statearr_30599_30625[(2)] = inst_30588);

(statearr_30599_30625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (6))){
var inst_30579 = (state_30594[(2)]);
var state_30594__$1 = state_30594;
if(cljs.core.truth_(inst_30579)){
var statearr_30600_30626 = state_30594__$1;
(statearr_30600_30626[(1)] = (8));

} else {
var statearr_30601_30627 = state_30594__$1;
(statearr_30601_30627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (3))){
var inst_30592 = (state_30594[(2)]);
var state_30594__$1 = state_30594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30594__$1,inst_30592);
} else {
if((state_val_30595 === (12))){
var state_30594__$1 = state_30594;
var statearr_30602_30628 = state_30594__$1;
(statearr_30602_30628[(2)] = null);

(statearr_30602_30628[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (2))){
var inst_30571 = (state_30594[(7)]);
var state_30594__$1 = state_30594;
if(cljs.core.truth_(inst_30571)){
var statearr_30603_30629 = state_30594__$1;
(statearr_30603_30629[(1)] = (4));

} else {
var statearr_30604_30630 = state_30594__$1;
(statearr_30604_30630[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (11))){
var inst_30585 = cljs.core.async.close_BANG_.call(null,ch);
var state_30594__$1 = state_30594;
var statearr_30605_30631 = state_30594__$1;
(statearr_30605_30631[(2)] = inst_30585);

(statearr_30605_30631[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (9))){
var state_30594__$1 = state_30594;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30606_30632 = state_30594__$1;
(statearr_30606_30632[(1)] = (11));

} else {
var statearr_30607_30633 = state_30594__$1;
(statearr_30607_30633[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (5))){
var inst_30571 = (state_30594[(7)]);
var state_30594__$1 = state_30594;
var statearr_30608_30634 = state_30594__$1;
(statearr_30608_30634[(2)] = inst_30571);

(statearr_30608_30634[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (10))){
var inst_30590 = (state_30594[(2)]);
var state_30594__$1 = state_30594;
var statearr_30609_30635 = state_30594__$1;
(statearr_30609_30635[(2)] = inst_30590);

(statearr_30609_30635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30595 === (8))){
var inst_30571 = (state_30594[(7)]);
var inst_30581 = cljs.core.next.call(null,inst_30571);
var inst_30571__$1 = inst_30581;
var state_30594__$1 = (function (){var statearr_30610 = state_30594;
(statearr_30610[(7)] = inst_30571__$1);

return statearr_30610;
})();
var statearr_30611_30636 = state_30594__$1;
(statearr_30611_30636[(2)] = null);

(statearr_30611_30636[(1)] = (2));


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
});})(c__29774__auto__))
;
return ((function (switch__29662__auto__,c__29774__auto__){
return (function() {
var cljs$core$async$state_machine__29663__auto__ = null;
var cljs$core$async$state_machine__29663__auto____0 = (function (){
var statearr_30615 = [null,null,null,null,null,null,null,null];
(statearr_30615[(0)] = cljs$core$async$state_machine__29663__auto__);

(statearr_30615[(1)] = (1));

return statearr_30615;
});
var cljs$core$async$state_machine__29663__auto____1 = (function (state_30594){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_30594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e30616){if((e30616 instanceof Object)){
var ex__29666__auto__ = e30616;
var statearr_30617_30637 = state_30594;
(statearr_30617_30637[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30638 = state_30594;
state_30594 = G__30638;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
cljs$core$async$state_machine__29663__auto__ = function(state_30594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29663__auto____1.call(this,state_30594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29663__auto____0;
cljs$core$async$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29663__auto____1;
return cljs$core$async$state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto__))
})();
var state__29776__auto__ = (function (){var statearr_30618 = f__29775__auto__.call(null);
(statearr_30618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto__);

return statearr_30618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto__))
);

return c__29774__auto__;
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
var x__26306__auto__ = (((_ == null))?null:_);
var m__26307__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26306__auto__)]);
if(!((m__26307__auto__ == null))){
return m__26307__auto__.call(null,_);
} else {
var m__26307__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26307__auto____$1 == null))){
return m__26307__auto____$1.call(null,_);
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
var x__26306__auto__ = (((m == null))?null:m);
var m__26307__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26306__auto__)]);
if(!((m__26307__auto__ == null))){
return m__26307__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26307__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26307__auto____$1 == null))){
return m__26307__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__26306__auto__ = (((m == null))?null:m);
var m__26307__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26306__auto__)]);
if(!((m__26307__auto__ == null))){
return m__26307__auto__.call(null,m,ch);
} else {
var m__26307__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26307__auto____$1 == null))){
return m__26307__auto____$1.call(null,m,ch);
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
var x__26306__auto__ = (((m == null))?null:m);
var m__26307__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26306__auto__)]);
if(!((m__26307__auto__ == null))){
return m__26307__auto__.call(null,m);
} else {
var m__26307__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26307__auto____$1 == null))){
return m__26307__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async30860 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30860 = (function (mult,ch,cs,meta30861){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30861 = meta30861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30862,meta30861__$1){
var self__ = this;
var _30862__$1 = this;
return (new cljs.core.async.t_cljs$core$async30860(self__.mult,self__.ch,self__.cs,meta30861__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30860.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30862){
var self__ = this;
var _30862__$1 = this;
return self__.meta30861;
});})(cs))
;

cljs.core.async.t_cljs$core$async30860.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30860.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30860.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30860.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30860.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30860.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30860.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30861","meta30861",-813954176,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30860.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30860";

cljs.core.async.t_cljs$core$async30860.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26249__auto__,writer__26250__auto__,opt__26251__auto__){
return cljs.core._write.call(null,writer__26250__auto__,"cljs.core.async/t_cljs$core$async30860");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30860 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30860(mult__$1,ch__$1,cs__$1,meta30861){
return (new cljs.core.async.t_cljs$core$async30860(mult__$1,ch__$1,cs__$1,meta30861));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30860(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29774__auto___31081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto___31081,cs,m,dchan,dctr,done){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto___31081,cs,m,dchan,dctr,done){
return (function (state_30993){
var state_val_30994 = (state_30993[(1)]);
if((state_val_30994 === (7))){
var inst_30989 = (state_30993[(2)]);
var state_30993__$1 = state_30993;
var statearr_30995_31082 = state_30993__$1;
(statearr_30995_31082[(2)] = inst_30989);

(statearr_30995_31082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (20))){
var inst_30894 = (state_30993[(7)]);
var inst_30904 = cljs.core.first.call(null,inst_30894);
var inst_30905 = cljs.core.nth.call(null,inst_30904,(0),null);
var inst_30906 = cljs.core.nth.call(null,inst_30904,(1),null);
var state_30993__$1 = (function (){var statearr_30996 = state_30993;
(statearr_30996[(8)] = inst_30905);

return statearr_30996;
})();
if(cljs.core.truth_(inst_30906)){
var statearr_30997_31083 = state_30993__$1;
(statearr_30997_31083[(1)] = (22));

} else {
var statearr_30998_31084 = state_30993__$1;
(statearr_30998_31084[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (27))){
var inst_30936 = (state_30993[(9)]);
var inst_30934 = (state_30993[(10)]);
var inst_30941 = (state_30993[(11)]);
var inst_30865 = (state_30993[(12)]);
var inst_30941__$1 = cljs.core._nth.call(null,inst_30934,inst_30936);
var inst_30942 = cljs.core.async.put_BANG_.call(null,inst_30941__$1,inst_30865,done);
var state_30993__$1 = (function (){var statearr_30999 = state_30993;
(statearr_30999[(11)] = inst_30941__$1);

return statearr_30999;
})();
if(cljs.core.truth_(inst_30942)){
var statearr_31000_31085 = state_30993__$1;
(statearr_31000_31085[(1)] = (30));

} else {
var statearr_31001_31086 = state_30993__$1;
(statearr_31001_31086[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (1))){
var state_30993__$1 = state_30993;
var statearr_31002_31087 = state_30993__$1;
(statearr_31002_31087[(2)] = null);

(statearr_31002_31087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (24))){
var inst_30894 = (state_30993[(7)]);
var inst_30911 = (state_30993[(2)]);
var inst_30912 = cljs.core.next.call(null,inst_30894);
var inst_30874 = inst_30912;
var inst_30875 = null;
var inst_30876 = (0);
var inst_30877 = (0);
var state_30993__$1 = (function (){var statearr_31003 = state_30993;
(statearr_31003[(13)] = inst_30911);

(statearr_31003[(14)] = inst_30874);

(statearr_31003[(15)] = inst_30876);

(statearr_31003[(16)] = inst_30877);

(statearr_31003[(17)] = inst_30875);

return statearr_31003;
})();
var statearr_31004_31088 = state_30993__$1;
(statearr_31004_31088[(2)] = null);

(statearr_31004_31088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (39))){
var state_30993__$1 = state_30993;
var statearr_31008_31089 = state_30993__$1;
(statearr_31008_31089[(2)] = null);

(statearr_31008_31089[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (4))){
var inst_30865 = (state_30993[(12)]);
var inst_30865__$1 = (state_30993[(2)]);
var inst_30866 = (inst_30865__$1 == null);
var state_30993__$1 = (function (){var statearr_31009 = state_30993;
(statearr_31009[(12)] = inst_30865__$1);

return statearr_31009;
})();
if(cljs.core.truth_(inst_30866)){
var statearr_31010_31090 = state_30993__$1;
(statearr_31010_31090[(1)] = (5));

} else {
var statearr_31011_31091 = state_30993__$1;
(statearr_31011_31091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (15))){
var inst_30874 = (state_30993[(14)]);
var inst_30876 = (state_30993[(15)]);
var inst_30877 = (state_30993[(16)]);
var inst_30875 = (state_30993[(17)]);
var inst_30890 = (state_30993[(2)]);
var inst_30891 = (inst_30877 + (1));
var tmp31005 = inst_30874;
var tmp31006 = inst_30876;
var tmp31007 = inst_30875;
var inst_30874__$1 = tmp31005;
var inst_30875__$1 = tmp31007;
var inst_30876__$1 = tmp31006;
var inst_30877__$1 = inst_30891;
var state_30993__$1 = (function (){var statearr_31012 = state_30993;
(statearr_31012[(14)] = inst_30874__$1);

(statearr_31012[(18)] = inst_30890);

(statearr_31012[(15)] = inst_30876__$1);

(statearr_31012[(16)] = inst_30877__$1);

(statearr_31012[(17)] = inst_30875__$1);

return statearr_31012;
})();
var statearr_31013_31092 = state_30993__$1;
(statearr_31013_31092[(2)] = null);

(statearr_31013_31092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (21))){
var inst_30915 = (state_30993[(2)]);
var state_30993__$1 = state_30993;
var statearr_31017_31093 = state_30993__$1;
(statearr_31017_31093[(2)] = inst_30915);

(statearr_31017_31093[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (31))){
var inst_30941 = (state_30993[(11)]);
var inst_30945 = done.call(null,null);
var inst_30946 = cljs.core.async.untap_STAR_.call(null,m,inst_30941);
var state_30993__$1 = (function (){var statearr_31018 = state_30993;
(statearr_31018[(19)] = inst_30945);

return statearr_31018;
})();
var statearr_31019_31094 = state_30993__$1;
(statearr_31019_31094[(2)] = inst_30946);

(statearr_31019_31094[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (32))){
var inst_30936 = (state_30993[(9)]);
var inst_30934 = (state_30993[(10)]);
var inst_30933 = (state_30993[(20)]);
var inst_30935 = (state_30993[(21)]);
var inst_30948 = (state_30993[(2)]);
var inst_30949 = (inst_30936 + (1));
var tmp31014 = inst_30934;
var tmp31015 = inst_30933;
var tmp31016 = inst_30935;
var inst_30933__$1 = tmp31015;
var inst_30934__$1 = tmp31014;
var inst_30935__$1 = tmp31016;
var inst_30936__$1 = inst_30949;
var state_30993__$1 = (function (){var statearr_31020 = state_30993;
(statearr_31020[(9)] = inst_30936__$1);

(statearr_31020[(10)] = inst_30934__$1);

(statearr_31020[(20)] = inst_30933__$1);

(statearr_31020[(22)] = inst_30948);

(statearr_31020[(21)] = inst_30935__$1);

return statearr_31020;
})();
var statearr_31021_31095 = state_30993__$1;
(statearr_31021_31095[(2)] = null);

(statearr_31021_31095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (40))){
var inst_30961 = (state_30993[(23)]);
var inst_30965 = done.call(null,null);
var inst_30966 = cljs.core.async.untap_STAR_.call(null,m,inst_30961);
var state_30993__$1 = (function (){var statearr_31022 = state_30993;
(statearr_31022[(24)] = inst_30965);

return statearr_31022;
})();
var statearr_31023_31096 = state_30993__$1;
(statearr_31023_31096[(2)] = inst_30966);

(statearr_31023_31096[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (33))){
var inst_30952 = (state_30993[(25)]);
var inst_30954 = cljs.core.chunked_seq_QMARK_.call(null,inst_30952);
var state_30993__$1 = state_30993;
if(inst_30954){
var statearr_31024_31097 = state_30993__$1;
(statearr_31024_31097[(1)] = (36));

} else {
var statearr_31025_31098 = state_30993__$1;
(statearr_31025_31098[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (13))){
var inst_30884 = (state_30993[(26)]);
var inst_30887 = cljs.core.async.close_BANG_.call(null,inst_30884);
var state_30993__$1 = state_30993;
var statearr_31026_31099 = state_30993__$1;
(statearr_31026_31099[(2)] = inst_30887);

(statearr_31026_31099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (22))){
var inst_30905 = (state_30993[(8)]);
var inst_30908 = cljs.core.async.close_BANG_.call(null,inst_30905);
var state_30993__$1 = state_30993;
var statearr_31027_31100 = state_30993__$1;
(statearr_31027_31100[(2)] = inst_30908);

(statearr_31027_31100[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (36))){
var inst_30952 = (state_30993[(25)]);
var inst_30956 = cljs.core.chunk_first.call(null,inst_30952);
var inst_30957 = cljs.core.chunk_rest.call(null,inst_30952);
var inst_30958 = cljs.core.count.call(null,inst_30956);
var inst_30933 = inst_30957;
var inst_30934 = inst_30956;
var inst_30935 = inst_30958;
var inst_30936 = (0);
var state_30993__$1 = (function (){var statearr_31028 = state_30993;
(statearr_31028[(9)] = inst_30936);

(statearr_31028[(10)] = inst_30934);

(statearr_31028[(20)] = inst_30933);

(statearr_31028[(21)] = inst_30935);

return statearr_31028;
})();
var statearr_31029_31101 = state_30993__$1;
(statearr_31029_31101[(2)] = null);

(statearr_31029_31101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (41))){
var inst_30952 = (state_30993[(25)]);
var inst_30968 = (state_30993[(2)]);
var inst_30969 = cljs.core.next.call(null,inst_30952);
var inst_30933 = inst_30969;
var inst_30934 = null;
var inst_30935 = (0);
var inst_30936 = (0);
var state_30993__$1 = (function (){var statearr_31030 = state_30993;
(statearr_31030[(27)] = inst_30968);

(statearr_31030[(9)] = inst_30936);

(statearr_31030[(10)] = inst_30934);

(statearr_31030[(20)] = inst_30933);

(statearr_31030[(21)] = inst_30935);

return statearr_31030;
})();
var statearr_31031_31102 = state_30993__$1;
(statearr_31031_31102[(2)] = null);

(statearr_31031_31102[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (43))){
var state_30993__$1 = state_30993;
var statearr_31032_31103 = state_30993__$1;
(statearr_31032_31103[(2)] = null);

(statearr_31032_31103[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (29))){
var inst_30977 = (state_30993[(2)]);
var state_30993__$1 = state_30993;
var statearr_31033_31104 = state_30993__$1;
(statearr_31033_31104[(2)] = inst_30977);

(statearr_31033_31104[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (44))){
var inst_30986 = (state_30993[(2)]);
var state_30993__$1 = (function (){var statearr_31034 = state_30993;
(statearr_31034[(28)] = inst_30986);

return statearr_31034;
})();
var statearr_31035_31105 = state_30993__$1;
(statearr_31035_31105[(2)] = null);

(statearr_31035_31105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (6))){
var inst_30925 = (state_30993[(29)]);
var inst_30924 = cljs.core.deref.call(null,cs);
var inst_30925__$1 = cljs.core.keys.call(null,inst_30924);
var inst_30926 = cljs.core.count.call(null,inst_30925__$1);
var inst_30927 = cljs.core.reset_BANG_.call(null,dctr,inst_30926);
var inst_30932 = cljs.core.seq.call(null,inst_30925__$1);
var inst_30933 = inst_30932;
var inst_30934 = null;
var inst_30935 = (0);
var inst_30936 = (0);
var state_30993__$1 = (function (){var statearr_31036 = state_30993;
(statearr_31036[(30)] = inst_30927);

(statearr_31036[(29)] = inst_30925__$1);

(statearr_31036[(9)] = inst_30936);

(statearr_31036[(10)] = inst_30934);

(statearr_31036[(20)] = inst_30933);

(statearr_31036[(21)] = inst_30935);

return statearr_31036;
})();
var statearr_31037_31106 = state_30993__$1;
(statearr_31037_31106[(2)] = null);

(statearr_31037_31106[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (28))){
var inst_30952 = (state_30993[(25)]);
var inst_30933 = (state_30993[(20)]);
var inst_30952__$1 = cljs.core.seq.call(null,inst_30933);
var state_30993__$1 = (function (){var statearr_31038 = state_30993;
(statearr_31038[(25)] = inst_30952__$1);

return statearr_31038;
})();
if(inst_30952__$1){
var statearr_31039_31107 = state_30993__$1;
(statearr_31039_31107[(1)] = (33));

} else {
var statearr_31040_31108 = state_30993__$1;
(statearr_31040_31108[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (25))){
var inst_30936 = (state_30993[(9)]);
var inst_30935 = (state_30993[(21)]);
var inst_30938 = (inst_30936 < inst_30935);
var inst_30939 = inst_30938;
var state_30993__$1 = state_30993;
if(cljs.core.truth_(inst_30939)){
var statearr_31041_31109 = state_30993__$1;
(statearr_31041_31109[(1)] = (27));

} else {
var statearr_31042_31110 = state_30993__$1;
(statearr_31042_31110[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (34))){
var state_30993__$1 = state_30993;
var statearr_31043_31111 = state_30993__$1;
(statearr_31043_31111[(2)] = null);

(statearr_31043_31111[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (17))){
var state_30993__$1 = state_30993;
var statearr_31044_31112 = state_30993__$1;
(statearr_31044_31112[(2)] = null);

(statearr_31044_31112[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (3))){
var inst_30991 = (state_30993[(2)]);
var state_30993__$1 = state_30993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30993__$1,inst_30991);
} else {
if((state_val_30994 === (12))){
var inst_30920 = (state_30993[(2)]);
var state_30993__$1 = state_30993;
var statearr_31045_31113 = state_30993__$1;
(statearr_31045_31113[(2)] = inst_30920);

(statearr_31045_31113[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (2))){
var state_30993__$1 = state_30993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30993__$1,(4),ch);
} else {
if((state_val_30994 === (23))){
var state_30993__$1 = state_30993;
var statearr_31046_31114 = state_30993__$1;
(statearr_31046_31114[(2)] = null);

(statearr_31046_31114[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (35))){
var inst_30975 = (state_30993[(2)]);
var state_30993__$1 = state_30993;
var statearr_31047_31115 = state_30993__$1;
(statearr_31047_31115[(2)] = inst_30975);

(statearr_31047_31115[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (19))){
var inst_30894 = (state_30993[(7)]);
var inst_30898 = cljs.core.chunk_first.call(null,inst_30894);
var inst_30899 = cljs.core.chunk_rest.call(null,inst_30894);
var inst_30900 = cljs.core.count.call(null,inst_30898);
var inst_30874 = inst_30899;
var inst_30875 = inst_30898;
var inst_30876 = inst_30900;
var inst_30877 = (0);
var state_30993__$1 = (function (){var statearr_31048 = state_30993;
(statearr_31048[(14)] = inst_30874);

(statearr_31048[(15)] = inst_30876);

(statearr_31048[(16)] = inst_30877);

(statearr_31048[(17)] = inst_30875);

return statearr_31048;
})();
var statearr_31049_31116 = state_30993__$1;
(statearr_31049_31116[(2)] = null);

(statearr_31049_31116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (11))){
var inst_30874 = (state_30993[(14)]);
var inst_30894 = (state_30993[(7)]);
var inst_30894__$1 = cljs.core.seq.call(null,inst_30874);
var state_30993__$1 = (function (){var statearr_31050 = state_30993;
(statearr_31050[(7)] = inst_30894__$1);

return statearr_31050;
})();
if(inst_30894__$1){
var statearr_31051_31117 = state_30993__$1;
(statearr_31051_31117[(1)] = (16));

} else {
var statearr_31052_31118 = state_30993__$1;
(statearr_31052_31118[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (9))){
var inst_30922 = (state_30993[(2)]);
var state_30993__$1 = state_30993;
var statearr_31053_31119 = state_30993__$1;
(statearr_31053_31119[(2)] = inst_30922);

(statearr_31053_31119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (5))){
var inst_30872 = cljs.core.deref.call(null,cs);
var inst_30873 = cljs.core.seq.call(null,inst_30872);
var inst_30874 = inst_30873;
var inst_30875 = null;
var inst_30876 = (0);
var inst_30877 = (0);
var state_30993__$1 = (function (){var statearr_31054 = state_30993;
(statearr_31054[(14)] = inst_30874);

(statearr_31054[(15)] = inst_30876);

(statearr_31054[(16)] = inst_30877);

(statearr_31054[(17)] = inst_30875);

return statearr_31054;
})();
var statearr_31055_31120 = state_30993__$1;
(statearr_31055_31120[(2)] = null);

(statearr_31055_31120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (14))){
var state_30993__$1 = state_30993;
var statearr_31056_31121 = state_30993__$1;
(statearr_31056_31121[(2)] = null);

(statearr_31056_31121[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (45))){
var inst_30983 = (state_30993[(2)]);
var state_30993__$1 = state_30993;
var statearr_31057_31122 = state_30993__$1;
(statearr_31057_31122[(2)] = inst_30983);

(statearr_31057_31122[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (26))){
var inst_30925 = (state_30993[(29)]);
var inst_30979 = (state_30993[(2)]);
var inst_30980 = cljs.core.seq.call(null,inst_30925);
var state_30993__$1 = (function (){var statearr_31058 = state_30993;
(statearr_31058[(31)] = inst_30979);

return statearr_31058;
})();
if(inst_30980){
var statearr_31059_31123 = state_30993__$1;
(statearr_31059_31123[(1)] = (42));

} else {
var statearr_31060_31124 = state_30993__$1;
(statearr_31060_31124[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (16))){
var inst_30894 = (state_30993[(7)]);
var inst_30896 = cljs.core.chunked_seq_QMARK_.call(null,inst_30894);
var state_30993__$1 = state_30993;
if(inst_30896){
var statearr_31061_31125 = state_30993__$1;
(statearr_31061_31125[(1)] = (19));

} else {
var statearr_31062_31126 = state_30993__$1;
(statearr_31062_31126[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (38))){
var inst_30972 = (state_30993[(2)]);
var state_30993__$1 = state_30993;
var statearr_31063_31127 = state_30993__$1;
(statearr_31063_31127[(2)] = inst_30972);

(statearr_31063_31127[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (30))){
var state_30993__$1 = state_30993;
var statearr_31064_31128 = state_30993__$1;
(statearr_31064_31128[(2)] = null);

(statearr_31064_31128[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (10))){
var inst_30877 = (state_30993[(16)]);
var inst_30875 = (state_30993[(17)]);
var inst_30883 = cljs.core._nth.call(null,inst_30875,inst_30877);
var inst_30884 = cljs.core.nth.call(null,inst_30883,(0),null);
var inst_30885 = cljs.core.nth.call(null,inst_30883,(1),null);
var state_30993__$1 = (function (){var statearr_31065 = state_30993;
(statearr_31065[(26)] = inst_30884);

return statearr_31065;
})();
if(cljs.core.truth_(inst_30885)){
var statearr_31066_31129 = state_30993__$1;
(statearr_31066_31129[(1)] = (13));

} else {
var statearr_31067_31130 = state_30993__$1;
(statearr_31067_31130[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (18))){
var inst_30918 = (state_30993[(2)]);
var state_30993__$1 = state_30993;
var statearr_31068_31131 = state_30993__$1;
(statearr_31068_31131[(2)] = inst_30918);

(statearr_31068_31131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (42))){
var state_30993__$1 = state_30993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30993__$1,(45),dchan);
} else {
if((state_val_30994 === (37))){
var inst_30952 = (state_30993[(25)]);
var inst_30865 = (state_30993[(12)]);
var inst_30961 = (state_30993[(23)]);
var inst_30961__$1 = cljs.core.first.call(null,inst_30952);
var inst_30962 = cljs.core.async.put_BANG_.call(null,inst_30961__$1,inst_30865,done);
var state_30993__$1 = (function (){var statearr_31069 = state_30993;
(statearr_31069[(23)] = inst_30961__$1);

return statearr_31069;
})();
if(cljs.core.truth_(inst_30962)){
var statearr_31070_31132 = state_30993__$1;
(statearr_31070_31132[(1)] = (39));

} else {
var statearr_31071_31133 = state_30993__$1;
(statearr_31071_31133[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (8))){
var inst_30876 = (state_30993[(15)]);
var inst_30877 = (state_30993[(16)]);
var inst_30879 = (inst_30877 < inst_30876);
var inst_30880 = inst_30879;
var state_30993__$1 = state_30993;
if(cljs.core.truth_(inst_30880)){
var statearr_31072_31134 = state_30993__$1;
(statearr_31072_31134[(1)] = (10));

} else {
var statearr_31073_31135 = state_30993__$1;
(statearr_31073_31135[(1)] = (11));

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
});})(c__29774__auto___31081,cs,m,dchan,dctr,done))
;
return ((function (switch__29662__auto__,c__29774__auto___31081,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29663__auto__ = null;
var cljs$core$async$mult_$_state_machine__29663__auto____0 = (function (){
var statearr_31077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31077[(0)] = cljs$core$async$mult_$_state_machine__29663__auto__);

(statearr_31077[(1)] = (1));

return statearr_31077;
});
var cljs$core$async$mult_$_state_machine__29663__auto____1 = (function (state_30993){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_30993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e31078){if((e31078 instanceof Object)){
var ex__29666__auto__ = e31078;
var statearr_31079_31136 = state_30993;
(statearr_31079_31136[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31137 = state_30993;
state_30993 = G__31137;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29663__auto__ = function(state_30993){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29663__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29663__auto____1.call(this,state_30993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29663__auto____0;
cljs$core$async$mult_$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29663__auto____1;
return cljs$core$async$mult_$_state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto___31081,cs,m,dchan,dctr,done))
})();
var state__29776__auto__ = (function (){var statearr_31080 = f__29775__auto__.call(null);
(statearr_31080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___31081);

return statearr_31080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto___31081,cs,m,dchan,dctr,done))
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
var args31138 = [];
var len__26713__auto___31141 = arguments.length;
var i__26714__auto___31142 = (0);
while(true){
if((i__26714__auto___31142 < len__26713__auto___31141)){
args31138.push((arguments[i__26714__auto___31142]));

var G__31143 = (i__26714__auto___31142 + (1));
i__26714__auto___31142 = G__31143;
continue;
} else {
}
break;
}

var G__31140 = args31138.length;
switch (G__31140) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31138.length)].join('')));

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
var x__26306__auto__ = (((m == null))?null:m);
var m__26307__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26306__auto__)]);
if(!((m__26307__auto__ == null))){
return m__26307__auto__.call(null,m,ch);
} else {
var m__26307__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26307__auto____$1 == null))){
return m__26307__auto____$1.call(null,m,ch);
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
var x__26306__auto__ = (((m == null))?null:m);
var m__26307__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26306__auto__)]);
if(!((m__26307__auto__ == null))){
return m__26307__auto__.call(null,m,ch);
} else {
var m__26307__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26307__auto____$1 == null))){
return m__26307__auto____$1.call(null,m,ch);
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
var x__26306__auto__ = (((m == null))?null:m);
var m__26307__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26306__auto__)]);
if(!((m__26307__auto__ == null))){
return m__26307__auto__.call(null,m);
} else {
var m__26307__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26307__auto____$1 == null))){
return m__26307__auto____$1.call(null,m);
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
var x__26306__auto__ = (((m == null))?null:m);
var m__26307__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26306__auto__)]);
if(!((m__26307__auto__ == null))){
return m__26307__auto__.call(null,m,state_map);
} else {
var m__26307__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26307__auto____$1 == null))){
return m__26307__auto____$1.call(null,m,state_map);
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
var x__26306__auto__ = (((m == null))?null:m);
var m__26307__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26306__auto__)]);
if(!((m__26307__auto__ == null))){
return m__26307__auto__.call(null,m,mode);
} else {
var m__26307__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26307__auto____$1 == null))){
return m__26307__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26720__auto__ = [];
var len__26713__auto___31155 = arguments.length;
var i__26714__auto___31156 = (0);
while(true){
if((i__26714__auto___31156 < len__26713__auto___31155)){
args__26720__auto__.push((arguments[i__26714__auto___31156]));

var G__31157 = (i__26714__auto___31156 + (1));
i__26714__auto___31156 = G__31157;
continue;
} else {
}
break;
}

var argseq__26721__auto__ = ((((3) < args__26720__auto__.length))?(new cljs.core.IndexedSeq(args__26720__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26721__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31149){
var map__31150 = p__31149;
var map__31150__$1 = ((((!((map__31150 == null)))?((((map__31150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31150):map__31150);
var opts = map__31150__$1;
var statearr_31152_31158 = state;
(statearr_31152_31158[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__31150,map__31150__$1,opts){
return (function (val){
var statearr_31153_31159 = state;
(statearr_31153_31159[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31150,map__31150__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_31154_31160 = state;
(statearr_31154_31160[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31145){
var G__31146 = cljs.core.first.call(null,seq31145);
var seq31145__$1 = cljs.core.next.call(null,seq31145);
var G__31147 = cljs.core.first.call(null,seq31145__$1);
var seq31145__$2 = cljs.core.next.call(null,seq31145__$1);
var G__31148 = cljs.core.first.call(null,seq31145__$2);
var seq31145__$3 = cljs.core.next.call(null,seq31145__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31146,G__31147,G__31148,seq31145__$3);
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
if(typeof cljs.core.async.t_cljs$core$async31324 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31324 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31325){
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
this.meta31325 = meta31325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31326,meta31325__$1){
var self__ = this;
var _31326__$1 = this;
return (new cljs.core.async.t_cljs$core$async31324(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31325__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31324.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31326){
var self__ = this;
var _31326__$1 = this;
return self__.meta31325;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31324.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31324.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31324.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31324.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31324.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31324.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31324.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31324.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31324.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31325","meta31325",-1953329123,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31324.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31324.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31324";

cljs.core.async.t_cljs$core$async31324.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26249__auto__,writer__26250__auto__,opt__26251__auto__){
return cljs.core._write.call(null,writer__26250__auto__,"cljs.core.async/t_cljs$core$async31324");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31324 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31324(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31325){
return (new cljs.core.async.t_cljs$core$async31324(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31325));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31324(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29774__auto___31487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto___31487,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto___31487,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31424){
var state_val_31425 = (state_31424[(1)]);
if((state_val_31425 === (7))){
var inst_31342 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
var statearr_31426_31488 = state_31424__$1;
(statearr_31426_31488[(2)] = inst_31342);

(statearr_31426_31488[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (20))){
var inst_31354 = (state_31424[(7)]);
var state_31424__$1 = state_31424;
var statearr_31427_31489 = state_31424__$1;
(statearr_31427_31489[(2)] = inst_31354);

(statearr_31427_31489[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (27))){
var state_31424__$1 = state_31424;
var statearr_31428_31490 = state_31424__$1;
(statearr_31428_31490[(2)] = null);

(statearr_31428_31490[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (1))){
var inst_31330 = (state_31424[(8)]);
var inst_31330__$1 = calc_state.call(null);
var inst_31332 = (inst_31330__$1 == null);
var inst_31333 = cljs.core.not.call(null,inst_31332);
var state_31424__$1 = (function (){var statearr_31429 = state_31424;
(statearr_31429[(8)] = inst_31330__$1);

return statearr_31429;
})();
if(inst_31333){
var statearr_31430_31491 = state_31424__$1;
(statearr_31430_31491[(1)] = (2));

} else {
var statearr_31431_31492 = state_31424__$1;
(statearr_31431_31492[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (24))){
var inst_31384 = (state_31424[(9)]);
var inst_31398 = (state_31424[(10)]);
var inst_31377 = (state_31424[(11)]);
var inst_31398__$1 = inst_31377.call(null,inst_31384);
var state_31424__$1 = (function (){var statearr_31432 = state_31424;
(statearr_31432[(10)] = inst_31398__$1);

return statearr_31432;
})();
if(cljs.core.truth_(inst_31398__$1)){
var statearr_31433_31493 = state_31424__$1;
(statearr_31433_31493[(1)] = (29));

} else {
var statearr_31434_31494 = state_31424__$1;
(statearr_31434_31494[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (4))){
var inst_31345 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
if(cljs.core.truth_(inst_31345)){
var statearr_31435_31495 = state_31424__$1;
(statearr_31435_31495[(1)] = (8));

} else {
var statearr_31436_31496 = state_31424__$1;
(statearr_31436_31496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (15))){
var inst_31371 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
if(cljs.core.truth_(inst_31371)){
var statearr_31437_31497 = state_31424__$1;
(statearr_31437_31497[(1)] = (19));

} else {
var statearr_31438_31498 = state_31424__$1;
(statearr_31438_31498[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (21))){
var inst_31376 = (state_31424[(12)]);
var inst_31376__$1 = (state_31424[(2)]);
var inst_31377 = cljs.core.get.call(null,inst_31376__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31378 = cljs.core.get.call(null,inst_31376__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31379 = cljs.core.get.call(null,inst_31376__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31424__$1 = (function (){var statearr_31439 = state_31424;
(statearr_31439[(13)] = inst_31378);

(statearr_31439[(12)] = inst_31376__$1);

(statearr_31439[(11)] = inst_31377);

return statearr_31439;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31424__$1,(22),inst_31379);
} else {
if((state_val_31425 === (31))){
var inst_31406 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
if(cljs.core.truth_(inst_31406)){
var statearr_31440_31499 = state_31424__$1;
(statearr_31440_31499[(1)] = (32));

} else {
var statearr_31441_31500 = state_31424__$1;
(statearr_31441_31500[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (32))){
var inst_31383 = (state_31424[(14)]);
var state_31424__$1 = state_31424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31424__$1,(35),out,inst_31383);
} else {
if((state_val_31425 === (33))){
var inst_31376 = (state_31424[(12)]);
var inst_31354 = inst_31376;
var state_31424__$1 = (function (){var statearr_31442 = state_31424;
(statearr_31442[(7)] = inst_31354);

return statearr_31442;
})();
var statearr_31443_31501 = state_31424__$1;
(statearr_31443_31501[(2)] = null);

(statearr_31443_31501[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (13))){
var inst_31354 = (state_31424[(7)]);
var inst_31361 = inst_31354.cljs$lang$protocol_mask$partition0$;
var inst_31362 = (inst_31361 & (64));
var inst_31363 = inst_31354.cljs$core$ISeq$;
var inst_31364 = (inst_31362) || (inst_31363);
var state_31424__$1 = state_31424;
if(cljs.core.truth_(inst_31364)){
var statearr_31444_31502 = state_31424__$1;
(statearr_31444_31502[(1)] = (16));

} else {
var statearr_31445_31503 = state_31424__$1;
(statearr_31445_31503[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (22))){
var inst_31384 = (state_31424[(9)]);
var inst_31383 = (state_31424[(14)]);
var inst_31382 = (state_31424[(2)]);
var inst_31383__$1 = cljs.core.nth.call(null,inst_31382,(0),null);
var inst_31384__$1 = cljs.core.nth.call(null,inst_31382,(1),null);
var inst_31385 = (inst_31383__$1 == null);
var inst_31386 = cljs.core._EQ_.call(null,inst_31384__$1,change);
var inst_31387 = (inst_31385) || (inst_31386);
var state_31424__$1 = (function (){var statearr_31446 = state_31424;
(statearr_31446[(9)] = inst_31384__$1);

(statearr_31446[(14)] = inst_31383__$1);

return statearr_31446;
})();
if(cljs.core.truth_(inst_31387)){
var statearr_31447_31504 = state_31424__$1;
(statearr_31447_31504[(1)] = (23));

} else {
var statearr_31448_31505 = state_31424__$1;
(statearr_31448_31505[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (36))){
var inst_31376 = (state_31424[(12)]);
var inst_31354 = inst_31376;
var state_31424__$1 = (function (){var statearr_31449 = state_31424;
(statearr_31449[(7)] = inst_31354);

return statearr_31449;
})();
var statearr_31450_31506 = state_31424__$1;
(statearr_31450_31506[(2)] = null);

(statearr_31450_31506[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (29))){
var inst_31398 = (state_31424[(10)]);
var state_31424__$1 = state_31424;
var statearr_31451_31507 = state_31424__$1;
(statearr_31451_31507[(2)] = inst_31398);

(statearr_31451_31507[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (6))){
var state_31424__$1 = state_31424;
var statearr_31452_31508 = state_31424__$1;
(statearr_31452_31508[(2)] = false);

(statearr_31452_31508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (28))){
var inst_31394 = (state_31424[(2)]);
var inst_31395 = calc_state.call(null);
var inst_31354 = inst_31395;
var state_31424__$1 = (function (){var statearr_31453 = state_31424;
(statearr_31453[(15)] = inst_31394);

(statearr_31453[(7)] = inst_31354);

return statearr_31453;
})();
var statearr_31454_31509 = state_31424__$1;
(statearr_31454_31509[(2)] = null);

(statearr_31454_31509[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (25))){
var inst_31420 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
var statearr_31455_31510 = state_31424__$1;
(statearr_31455_31510[(2)] = inst_31420);

(statearr_31455_31510[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (34))){
var inst_31418 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
var statearr_31456_31511 = state_31424__$1;
(statearr_31456_31511[(2)] = inst_31418);

(statearr_31456_31511[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (17))){
var state_31424__$1 = state_31424;
var statearr_31457_31512 = state_31424__$1;
(statearr_31457_31512[(2)] = false);

(statearr_31457_31512[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (3))){
var state_31424__$1 = state_31424;
var statearr_31458_31513 = state_31424__$1;
(statearr_31458_31513[(2)] = false);

(statearr_31458_31513[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (12))){
var inst_31422 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31424__$1,inst_31422);
} else {
if((state_val_31425 === (2))){
var inst_31330 = (state_31424[(8)]);
var inst_31335 = inst_31330.cljs$lang$protocol_mask$partition0$;
var inst_31336 = (inst_31335 & (64));
var inst_31337 = inst_31330.cljs$core$ISeq$;
var inst_31338 = (inst_31336) || (inst_31337);
var state_31424__$1 = state_31424;
if(cljs.core.truth_(inst_31338)){
var statearr_31459_31514 = state_31424__$1;
(statearr_31459_31514[(1)] = (5));

} else {
var statearr_31460_31515 = state_31424__$1;
(statearr_31460_31515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (23))){
var inst_31383 = (state_31424[(14)]);
var inst_31389 = (inst_31383 == null);
var state_31424__$1 = state_31424;
if(cljs.core.truth_(inst_31389)){
var statearr_31461_31516 = state_31424__$1;
(statearr_31461_31516[(1)] = (26));

} else {
var statearr_31462_31517 = state_31424__$1;
(statearr_31462_31517[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (35))){
var inst_31409 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
if(cljs.core.truth_(inst_31409)){
var statearr_31463_31518 = state_31424__$1;
(statearr_31463_31518[(1)] = (36));

} else {
var statearr_31464_31519 = state_31424__$1;
(statearr_31464_31519[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (19))){
var inst_31354 = (state_31424[(7)]);
var inst_31373 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31354);
var state_31424__$1 = state_31424;
var statearr_31465_31520 = state_31424__$1;
(statearr_31465_31520[(2)] = inst_31373);

(statearr_31465_31520[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (11))){
var inst_31354 = (state_31424[(7)]);
var inst_31358 = (inst_31354 == null);
var inst_31359 = cljs.core.not.call(null,inst_31358);
var state_31424__$1 = state_31424;
if(inst_31359){
var statearr_31466_31521 = state_31424__$1;
(statearr_31466_31521[(1)] = (13));

} else {
var statearr_31467_31522 = state_31424__$1;
(statearr_31467_31522[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (9))){
var inst_31330 = (state_31424[(8)]);
var state_31424__$1 = state_31424;
var statearr_31468_31523 = state_31424__$1;
(statearr_31468_31523[(2)] = inst_31330);

(statearr_31468_31523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (5))){
var state_31424__$1 = state_31424;
var statearr_31469_31524 = state_31424__$1;
(statearr_31469_31524[(2)] = true);

(statearr_31469_31524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (14))){
var state_31424__$1 = state_31424;
var statearr_31470_31525 = state_31424__$1;
(statearr_31470_31525[(2)] = false);

(statearr_31470_31525[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (26))){
var inst_31384 = (state_31424[(9)]);
var inst_31391 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31384);
var state_31424__$1 = state_31424;
var statearr_31471_31526 = state_31424__$1;
(statearr_31471_31526[(2)] = inst_31391);

(statearr_31471_31526[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (16))){
var state_31424__$1 = state_31424;
var statearr_31472_31527 = state_31424__$1;
(statearr_31472_31527[(2)] = true);

(statearr_31472_31527[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (38))){
var inst_31414 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
var statearr_31473_31528 = state_31424__$1;
(statearr_31473_31528[(2)] = inst_31414);

(statearr_31473_31528[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (30))){
var inst_31384 = (state_31424[(9)]);
var inst_31378 = (state_31424[(13)]);
var inst_31377 = (state_31424[(11)]);
var inst_31401 = cljs.core.empty_QMARK_.call(null,inst_31377);
var inst_31402 = inst_31378.call(null,inst_31384);
var inst_31403 = cljs.core.not.call(null,inst_31402);
var inst_31404 = (inst_31401) && (inst_31403);
var state_31424__$1 = state_31424;
var statearr_31474_31529 = state_31424__$1;
(statearr_31474_31529[(2)] = inst_31404);

(statearr_31474_31529[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (10))){
var inst_31330 = (state_31424[(8)]);
var inst_31350 = (state_31424[(2)]);
var inst_31351 = cljs.core.get.call(null,inst_31350,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31352 = cljs.core.get.call(null,inst_31350,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31353 = cljs.core.get.call(null,inst_31350,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31354 = inst_31330;
var state_31424__$1 = (function (){var statearr_31475 = state_31424;
(statearr_31475[(16)] = inst_31352);

(statearr_31475[(17)] = inst_31353);

(statearr_31475[(7)] = inst_31354);

(statearr_31475[(18)] = inst_31351);

return statearr_31475;
})();
var statearr_31476_31530 = state_31424__$1;
(statearr_31476_31530[(2)] = null);

(statearr_31476_31530[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (18))){
var inst_31368 = (state_31424[(2)]);
var state_31424__$1 = state_31424;
var statearr_31477_31531 = state_31424__$1;
(statearr_31477_31531[(2)] = inst_31368);

(statearr_31477_31531[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (37))){
var state_31424__$1 = state_31424;
var statearr_31478_31532 = state_31424__$1;
(statearr_31478_31532[(2)] = null);

(statearr_31478_31532[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31425 === (8))){
var inst_31330 = (state_31424[(8)]);
var inst_31347 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31330);
var state_31424__$1 = state_31424;
var statearr_31479_31533 = state_31424__$1;
(statearr_31479_31533[(2)] = inst_31347);

(statearr_31479_31533[(1)] = (10));


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
});})(c__29774__auto___31487,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29662__auto__,c__29774__auto___31487,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29663__auto__ = null;
var cljs$core$async$mix_$_state_machine__29663__auto____0 = (function (){
var statearr_31483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31483[(0)] = cljs$core$async$mix_$_state_machine__29663__auto__);

(statearr_31483[(1)] = (1));

return statearr_31483;
});
var cljs$core$async$mix_$_state_machine__29663__auto____1 = (function (state_31424){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_31424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e31484){if((e31484 instanceof Object)){
var ex__29666__auto__ = e31484;
var statearr_31485_31534 = state_31424;
(statearr_31485_31534[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31535 = state_31424;
state_31424 = G__31535;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29663__auto__ = function(state_31424){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29663__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29663__auto____1.call(this,state_31424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29663__auto____0;
cljs$core$async$mix_$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29663__auto____1;
return cljs$core$async$mix_$_state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto___31487,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29776__auto__ = (function (){var statearr_31486 = f__29775__auto__.call(null);
(statearr_31486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___31487);

return statearr_31486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto___31487,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__26306__auto__ = (((p == null))?null:p);
var m__26307__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26306__auto__)]);
if(!((m__26307__auto__ == null))){
return m__26307__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26307__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26307__auto____$1 == null))){
return m__26307__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__26306__auto__ = (((p == null))?null:p);
var m__26307__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26306__auto__)]);
if(!((m__26307__auto__ == null))){
return m__26307__auto__.call(null,p,v,ch);
} else {
var m__26307__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26307__auto____$1 == null))){
return m__26307__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31536 = [];
var len__26713__auto___31539 = arguments.length;
var i__26714__auto___31540 = (0);
while(true){
if((i__26714__auto___31540 < len__26713__auto___31539)){
args31536.push((arguments[i__26714__auto___31540]));

var G__31541 = (i__26714__auto___31540 + (1));
i__26714__auto___31540 = G__31541;
continue;
} else {
}
break;
}

var G__31538 = args31536.length;
switch (G__31538) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31536.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26306__auto__ = (((p == null))?null:p);
var m__26307__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26306__auto__)]);
if(!((m__26307__auto__ == null))){
return m__26307__auto__.call(null,p);
} else {
var m__26307__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26307__auto____$1 == null))){
return m__26307__auto____$1.call(null,p);
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
var x__26306__auto__ = (((p == null))?null:p);
var m__26307__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26306__auto__)]);
if(!((m__26307__auto__ == null))){
return m__26307__auto__.call(null,p,v);
} else {
var m__26307__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26307__auto____$1 == null))){
return m__26307__auto____$1.call(null,p,v);
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
var args31544 = [];
var len__26713__auto___31669 = arguments.length;
var i__26714__auto___31670 = (0);
while(true){
if((i__26714__auto___31670 < len__26713__auto___31669)){
args31544.push((arguments[i__26714__auto___31670]));

var G__31671 = (i__26714__auto___31670 + (1));
i__26714__auto___31670 = G__31671;
continue;
} else {
}
break;
}

var G__31546 = args31544.length;
switch (G__31546) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31544.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25643__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25643__auto__,mults){
return (function (p1__31543_SHARP_){
if(cljs.core.truth_(p1__31543_SHARP_.call(null,topic))){
return p1__31543_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31543_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25643__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31547 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31547 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31548){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31548 = meta31548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31549,meta31548__$1){
var self__ = this;
var _31549__$1 = this;
return (new cljs.core.async.t_cljs$core$async31547(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31548__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31547.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31549){
var self__ = this;
var _31549__$1 = this;
return self__.meta31548;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31547.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31547.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31547.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31547.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31547.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31547.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31547.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31547.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31548","meta31548",-785129629,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31547.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31547";

cljs.core.async.t_cljs$core$async31547.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26249__auto__,writer__26250__auto__,opt__26251__auto__){
return cljs.core._write.call(null,writer__26250__auto__,"cljs.core.async/t_cljs$core$async31547");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31547 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31547(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31548){
return (new cljs.core.async.t_cljs$core$async31547(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31548));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31547(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29774__auto___31673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto___31673,mults,ensure_mult,p){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto___31673,mults,ensure_mult,p){
return (function (state_31621){
var state_val_31622 = (state_31621[(1)]);
if((state_val_31622 === (7))){
var inst_31617 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
var statearr_31623_31674 = state_31621__$1;
(statearr_31623_31674[(2)] = inst_31617);

(statearr_31623_31674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (20))){
var state_31621__$1 = state_31621;
var statearr_31624_31675 = state_31621__$1;
(statearr_31624_31675[(2)] = null);

(statearr_31624_31675[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (1))){
var state_31621__$1 = state_31621;
var statearr_31625_31676 = state_31621__$1;
(statearr_31625_31676[(2)] = null);

(statearr_31625_31676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (24))){
var inst_31600 = (state_31621[(7)]);
var inst_31609 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31600);
var state_31621__$1 = state_31621;
var statearr_31626_31677 = state_31621__$1;
(statearr_31626_31677[(2)] = inst_31609);

(statearr_31626_31677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (4))){
var inst_31552 = (state_31621[(8)]);
var inst_31552__$1 = (state_31621[(2)]);
var inst_31553 = (inst_31552__$1 == null);
var state_31621__$1 = (function (){var statearr_31627 = state_31621;
(statearr_31627[(8)] = inst_31552__$1);

return statearr_31627;
})();
if(cljs.core.truth_(inst_31553)){
var statearr_31628_31678 = state_31621__$1;
(statearr_31628_31678[(1)] = (5));

} else {
var statearr_31629_31679 = state_31621__$1;
(statearr_31629_31679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (15))){
var inst_31594 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
var statearr_31630_31680 = state_31621__$1;
(statearr_31630_31680[(2)] = inst_31594);

(statearr_31630_31680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (21))){
var inst_31614 = (state_31621[(2)]);
var state_31621__$1 = (function (){var statearr_31631 = state_31621;
(statearr_31631[(9)] = inst_31614);

return statearr_31631;
})();
var statearr_31632_31681 = state_31621__$1;
(statearr_31632_31681[(2)] = null);

(statearr_31632_31681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (13))){
var inst_31576 = (state_31621[(10)]);
var inst_31578 = cljs.core.chunked_seq_QMARK_.call(null,inst_31576);
var state_31621__$1 = state_31621;
if(inst_31578){
var statearr_31633_31682 = state_31621__$1;
(statearr_31633_31682[(1)] = (16));

} else {
var statearr_31634_31683 = state_31621__$1;
(statearr_31634_31683[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (22))){
var inst_31606 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
if(cljs.core.truth_(inst_31606)){
var statearr_31635_31684 = state_31621__$1;
(statearr_31635_31684[(1)] = (23));

} else {
var statearr_31636_31685 = state_31621__$1;
(statearr_31636_31685[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (6))){
var inst_31552 = (state_31621[(8)]);
var inst_31602 = (state_31621[(11)]);
var inst_31600 = (state_31621[(7)]);
var inst_31600__$1 = topic_fn.call(null,inst_31552);
var inst_31601 = cljs.core.deref.call(null,mults);
var inst_31602__$1 = cljs.core.get.call(null,inst_31601,inst_31600__$1);
var state_31621__$1 = (function (){var statearr_31637 = state_31621;
(statearr_31637[(11)] = inst_31602__$1);

(statearr_31637[(7)] = inst_31600__$1);

return statearr_31637;
})();
if(cljs.core.truth_(inst_31602__$1)){
var statearr_31638_31686 = state_31621__$1;
(statearr_31638_31686[(1)] = (19));

} else {
var statearr_31639_31687 = state_31621__$1;
(statearr_31639_31687[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (25))){
var inst_31611 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
var statearr_31640_31688 = state_31621__$1;
(statearr_31640_31688[(2)] = inst_31611);

(statearr_31640_31688[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (17))){
var inst_31576 = (state_31621[(10)]);
var inst_31585 = cljs.core.first.call(null,inst_31576);
var inst_31586 = cljs.core.async.muxch_STAR_.call(null,inst_31585);
var inst_31587 = cljs.core.async.close_BANG_.call(null,inst_31586);
var inst_31588 = cljs.core.next.call(null,inst_31576);
var inst_31562 = inst_31588;
var inst_31563 = null;
var inst_31564 = (0);
var inst_31565 = (0);
var state_31621__$1 = (function (){var statearr_31641 = state_31621;
(statearr_31641[(12)] = inst_31563);

(statearr_31641[(13)] = inst_31565);

(statearr_31641[(14)] = inst_31587);

(statearr_31641[(15)] = inst_31562);

(statearr_31641[(16)] = inst_31564);

return statearr_31641;
})();
var statearr_31642_31689 = state_31621__$1;
(statearr_31642_31689[(2)] = null);

(statearr_31642_31689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (3))){
var inst_31619 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31621__$1,inst_31619);
} else {
if((state_val_31622 === (12))){
var inst_31596 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
var statearr_31643_31690 = state_31621__$1;
(statearr_31643_31690[(2)] = inst_31596);

(statearr_31643_31690[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (2))){
var state_31621__$1 = state_31621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31621__$1,(4),ch);
} else {
if((state_val_31622 === (23))){
var state_31621__$1 = state_31621;
var statearr_31644_31691 = state_31621__$1;
(statearr_31644_31691[(2)] = null);

(statearr_31644_31691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (19))){
var inst_31552 = (state_31621[(8)]);
var inst_31602 = (state_31621[(11)]);
var inst_31604 = cljs.core.async.muxch_STAR_.call(null,inst_31602);
var state_31621__$1 = state_31621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31621__$1,(22),inst_31604,inst_31552);
} else {
if((state_val_31622 === (11))){
var inst_31576 = (state_31621[(10)]);
var inst_31562 = (state_31621[(15)]);
var inst_31576__$1 = cljs.core.seq.call(null,inst_31562);
var state_31621__$1 = (function (){var statearr_31645 = state_31621;
(statearr_31645[(10)] = inst_31576__$1);

return statearr_31645;
})();
if(inst_31576__$1){
var statearr_31646_31692 = state_31621__$1;
(statearr_31646_31692[(1)] = (13));

} else {
var statearr_31647_31693 = state_31621__$1;
(statearr_31647_31693[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (9))){
var inst_31598 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
var statearr_31648_31694 = state_31621__$1;
(statearr_31648_31694[(2)] = inst_31598);

(statearr_31648_31694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (5))){
var inst_31559 = cljs.core.deref.call(null,mults);
var inst_31560 = cljs.core.vals.call(null,inst_31559);
var inst_31561 = cljs.core.seq.call(null,inst_31560);
var inst_31562 = inst_31561;
var inst_31563 = null;
var inst_31564 = (0);
var inst_31565 = (0);
var state_31621__$1 = (function (){var statearr_31649 = state_31621;
(statearr_31649[(12)] = inst_31563);

(statearr_31649[(13)] = inst_31565);

(statearr_31649[(15)] = inst_31562);

(statearr_31649[(16)] = inst_31564);

return statearr_31649;
})();
var statearr_31650_31695 = state_31621__$1;
(statearr_31650_31695[(2)] = null);

(statearr_31650_31695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (14))){
var state_31621__$1 = state_31621;
var statearr_31654_31696 = state_31621__$1;
(statearr_31654_31696[(2)] = null);

(statearr_31654_31696[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (16))){
var inst_31576 = (state_31621[(10)]);
var inst_31580 = cljs.core.chunk_first.call(null,inst_31576);
var inst_31581 = cljs.core.chunk_rest.call(null,inst_31576);
var inst_31582 = cljs.core.count.call(null,inst_31580);
var inst_31562 = inst_31581;
var inst_31563 = inst_31580;
var inst_31564 = inst_31582;
var inst_31565 = (0);
var state_31621__$1 = (function (){var statearr_31655 = state_31621;
(statearr_31655[(12)] = inst_31563);

(statearr_31655[(13)] = inst_31565);

(statearr_31655[(15)] = inst_31562);

(statearr_31655[(16)] = inst_31564);

return statearr_31655;
})();
var statearr_31656_31697 = state_31621__$1;
(statearr_31656_31697[(2)] = null);

(statearr_31656_31697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (10))){
var inst_31563 = (state_31621[(12)]);
var inst_31565 = (state_31621[(13)]);
var inst_31562 = (state_31621[(15)]);
var inst_31564 = (state_31621[(16)]);
var inst_31570 = cljs.core._nth.call(null,inst_31563,inst_31565);
var inst_31571 = cljs.core.async.muxch_STAR_.call(null,inst_31570);
var inst_31572 = cljs.core.async.close_BANG_.call(null,inst_31571);
var inst_31573 = (inst_31565 + (1));
var tmp31651 = inst_31563;
var tmp31652 = inst_31562;
var tmp31653 = inst_31564;
var inst_31562__$1 = tmp31652;
var inst_31563__$1 = tmp31651;
var inst_31564__$1 = tmp31653;
var inst_31565__$1 = inst_31573;
var state_31621__$1 = (function (){var statearr_31657 = state_31621;
(statearr_31657[(17)] = inst_31572);

(statearr_31657[(12)] = inst_31563__$1);

(statearr_31657[(13)] = inst_31565__$1);

(statearr_31657[(15)] = inst_31562__$1);

(statearr_31657[(16)] = inst_31564__$1);

return statearr_31657;
})();
var statearr_31658_31698 = state_31621__$1;
(statearr_31658_31698[(2)] = null);

(statearr_31658_31698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (18))){
var inst_31591 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
var statearr_31659_31699 = state_31621__$1;
(statearr_31659_31699[(2)] = inst_31591);

(statearr_31659_31699[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (8))){
var inst_31565 = (state_31621[(13)]);
var inst_31564 = (state_31621[(16)]);
var inst_31567 = (inst_31565 < inst_31564);
var inst_31568 = inst_31567;
var state_31621__$1 = state_31621;
if(cljs.core.truth_(inst_31568)){
var statearr_31660_31700 = state_31621__$1;
(statearr_31660_31700[(1)] = (10));

} else {
var statearr_31661_31701 = state_31621__$1;
(statearr_31661_31701[(1)] = (11));

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
});})(c__29774__auto___31673,mults,ensure_mult,p))
;
return ((function (switch__29662__auto__,c__29774__auto___31673,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29663__auto__ = null;
var cljs$core$async$state_machine__29663__auto____0 = (function (){
var statearr_31665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31665[(0)] = cljs$core$async$state_machine__29663__auto__);

(statearr_31665[(1)] = (1));

return statearr_31665;
});
var cljs$core$async$state_machine__29663__auto____1 = (function (state_31621){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_31621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e31666){if((e31666 instanceof Object)){
var ex__29666__auto__ = e31666;
var statearr_31667_31702 = state_31621;
(statearr_31667_31702[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31703 = state_31621;
state_31621 = G__31703;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
cljs$core$async$state_machine__29663__auto__ = function(state_31621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29663__auto____1.call(this,state_31621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29663__auto____0;
cljs$core$async$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29663__auto____1;
return cljs$core$async$state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto___31673,mults,ensure_mult,p))
})();
var state__29776__auto__ = (function (){var statearr_31668 = f__29775__auto__.call(null);
(statearr_31668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___31673);

return statearr_31668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto___31673,mults,ensure_mult,p))
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
var args31704 = [];
var len__26713__auto___31707 = arguments.length;
var i__26714__auto___31708 = (0);
while(true){
if((i__26714__auto___31708 < len__26713__auto___31707)){
args31704.push((arguments[i__26714__auto___31708]));

var G__31709 = (i__26714__auto___31708 + (1));
i__26714__auto___31708 = G__31709;
continue;
} else {
}
break;
}

var G__31706 = args31704.length;
switch (G__31706) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31704.length)].join('')));

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
var args31711 = [];
var len__26713__auto___31714 = arguments.length;
var i__26714__auto___31715 = (0);
while(true){
if((i__26714__auto___31715 < len__26713__auto___31714)){
args31711.push((arguments[i__26714__auto___31715]));

var G__31716 = (i__26714__auto___31715 + (1));
i__26714__auto___31715 = G__31716;
continue;
} else {
}
break;
}

var G__31713 = args31711.length;
switch (G__31713) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31711.length)].join('')));

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
var args31718 = [];
var len__26713__auto___31789 = arguments.length;
var i__26714__auto___31790 = (0);
while(true){
if((i__26714__auto___31790 < len__26713__auto___31789)){
args31718.push((arguments[i__26714__auto___31790]));

var G__31791 = (i__26714__auto___31790 + (1));
i__26714__auto___31790 = G__31791;
continue;
} else {
}
break;
}

var G__31720 = args31718.length;
switch (G__31720) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31718.length)].join('')));

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
var c__29774__auto___31793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto___31793,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto___31793,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31759){
var state_val_31760 = (state_31759[(1)]);
if((state_val_31760 === (7))){
var state_31759__$1 = state_31759;
var statearr_31761_31794 = state_31759__$1;
(statearr_31761_31794[(2)] = null);

(statearr_31761_31794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31760 === (1))){
var state_31759__$1 = state_31759;
var statearr_31762_31795 = state_31759__$1;
(statearr_31762_31795[(2)] = null);

(statearr_31762_31795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31760 === (4))){
var inst_31723 = (state_31759[(7)]);
var inst_31725 = (inst_31723 < cnt);
var state_31759__$1 = state_31759;
if(cljs.core.truth_(inst_31725)){
var statearr_31763_31796 = state_31759__$1;
(statearr_31763_31796[(1)] = (6));

} else {
var statearr_31764_31797 = state_31759__$1;
(statearr_31764_31797[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31760 === (15))){
var inst_31755 = (state_31759[(2)]);
var state_31759__$1 = state_31759;
var statearr_31765_31798 = state_31759__$1;
(statearr_31765_31798[(2)] = inst_31755);

(statearr_31765_31798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31760 === (13))){
var inst_31748 = cljs.core.async.close_BANG_.call(null,out);
var state_31759__$1 = state_31759;
var statearr_31766_31799 = state_31759__$1;
(statearr_31766_31799[(2)] = inst_31748);

(statearr_31766_31799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31760 === (6))){
var state_31759__$1 = state_31759;
var statearr_31767_31800 = state_31759__$1;
(statearr_31767_31800[(2)] = null);

(statearr_31767_31800[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31760 === (3))){
var inst_31757 = (state_31759[(2)]);
var state_31759__$1 = state_31759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31759__$1,inst_31757);
} else {
if((state_val_31760 === (12))){
var inst_31745 = (state_31759[(8)]);
var inst_31745__$1 = (state_31759[(2)]);
var inst_31746 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31745__$1);
var state_31759__$1 = (function (){var statearr_31768 = state_31759;
(statearr_31768[(8)] = inst_31745__$1);

return statearr_31768;
})();
if(cljs.core.truth_(inst_31746)){
var statearr_31769_31801 = state_31759__$1;
(statearr_31769_31801[(1)] = (13));

} else {
var statearr_31770_31802 = state_31759__$1;
(statearr_31770_31802[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31760 === (2))){
var inst_31722 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31723 = (0);
var state_31759__$1 = (function (){var statearr_31771 = state_31759;
(statearr_31771[(9)] = inst_31722);

(statearr_31771[(7)] = inst_31723);

return statearr_31771;
})();
var statearr_31772_31803 = state_31759__$1;
(statearr_31772_31803[(2)] = null);

(statearr_31772_31803[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31760 === (11))){
var inst_31723 = (state_31759[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31759,(10),Object,null,(9));
var inst_31732 = chs__$1.call(null,inst_31723);
var inst_31733 = done.call(null,inst_31723);
var inst_31734 = cljs.core.async.take_BANG_.call(null,inst_31732,inst_31733);
var state_31759__$1 = state_31759;
var statearr_31773_31804 = state_31759__$1;
(statearr_31773_31804[(2)] = inst_31734);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31759__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31760 === (9))){
var inst_31723 = (state_31759[(7)]);
var inst_31736 = (state_31759[(2)]);
var inst_31737 = (inst_31723 + (1));
var inst_31723__$1 = inst_31737;
var state_31759__$1 = (function (){var statearr_31774 = state_31759;
(statearr_31774[(7)] = inst_31723__$1);

(statearr_31774[(10)] = inst_31736);

return statearr_31774;
})();
var statearr_31775_31805 = state_31759__$1;
(statearr_31775_31805[(2)] = null);

(statearr_31775_31805[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31760 === (5))){
var inst_31743 = (state_31759[(2)]);
var state_31759__$1 = (function (){var statearr_31776 = state_31759;
(statearr_31776[(11)] = inst_31743);

return statearr_31776;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31759__$1,(12),dchan);
} else {
if((state_val_31760 === (14))){
var inst_31745 = (state_31759[(8)]);
var inst_31750 = cljs.core.apply.call(null,f,inst_31745);
var state_31759__$1 = state_31759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31759__$1,(16),out,inst_31750);
} else {
if((state_val_31760 === (16))){
var inst_31752 = (state_31759[(2)]);
var state_31759__$1 = (function (){var statearr_31777 = state_31759;
(statearr_31777[(12)] = inst_31752);

return statearr_31777;
})();
var statearr_31778_31806 = state_31759__$1;
(statearr_31778_31806[(2)] = null);

(statearr_31778_31806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31760 === (10))){
var inst_31727 = (state_31759[(2)]);
var inst_31728 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31759__$1 = (function (){var statearr_31779 = state_31759;
(statearr_31779[(13)] = inst_31727);

return statearr_31779;
})();
var statearr_31780_31807 = state_31759__$1;
(statearr_31780_31807[(2)] = inst_31728);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31759__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31760 === (8))){
var inst_31741 = (state_31759[(2)]);
var state_31759__$1 = state_31759;
var statearr_31781_31808 = state_31759__$1;
(statearr_31781_31808[(2)] = inst_31741);

(statearr_31781_31808[(1)] = (5));


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
});})(c__29774__auto___31793,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29662__auto__,c__29774__auto___31793,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29663__auto__ = null;
var cljs$core$async$state_machine__29663__auto____0 = (function (){
var statearr_31785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31785[(0)] = cljs$core$async$state_machine__29663__auto__);

(statearr_31785[(1)] = (1));

return statearr_31785;
});
var cljs$core$async$state_machine__29663__auto____1 = (function (state_31759){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_31759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e31786){if((e31786 instanceof Object)){
var ex__29666__auto__ = e31786;
var statearr_31787_31809 = state_31759;
(statearr_31787_31809[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31810 = state_31759;
state_31759 = G__31810;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
cljs$core$async$state_machine__29663__auto__ = function(state_31759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29663__auto____1.call(this,state_31759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29663__auto____0;
cljs$core$async$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29663__auto____1;
return cljs$core$async$state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto___31793,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29776__auto__ = (function (){var statearr_31788 = f__29775__auto__.call(null);
(statearr_31788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___31793);

return statearr_31788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto___31793,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args31812 = [];
var len__26713__auto___31868 = arguments.length;
var i__26714__auto___31869 = (0);
while(true){
if((i__26714__auto___31869 < len__26713__auto___31868)){
args31812.push((arguments[i__26714__auto___31869]));

var G__31870 = (i__26714__auto___31869 + (1));
i__26714__auto___31869 = G__31870;
continue;
} else {
}
break;
}

var G__31814 = args31812.length;
switch (G__31814) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31812.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29774__auto___31872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto___31872,out){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto___31872,out){
return (function (state_31844){
var state_val_31845 = (state_31844[(1)]);
if((state_val_31845 === (7))){
var inst_31823 = (state_31844[(7)]);
var inst_31824 = (state_31844[(8)]);
var inst_31823__$1 = (state_31844[(2)]);
var inst_31824__$1 = cljs.core.nth.call(null,inst_31823__$1,(0),null);
var inst_31825 = cljs.core.nth.call(null,inst_31823__$1,(1),null);
var inst_31826 = (inst_31824__$1 == null);
var state_31844__$1 = (function (){var statearr_31846 = state_31844;
(statearr_31846[(7)] = inst_31823__$1);

(statearr_31846[(9)] = inst_31825);

(statearr_31846[(8)] = inst_31824__$1);

return statearr_31846;
})();
if(cljs.core.truth_(inst_31826)){
var statearr_31847_31873 = state_31844__$1;
(statearr_31847_31873[(1)] = (8));

} else {
var statearr_31848_31874 = state_31844__$1;
(statearr_31848_31874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31845 === (1))){
var inst_31815 = cljs.core.vec.call(null,chs);
var inst_31816 = inst_31815;
var state_31844__$1 = (function (){var statearr_31849 = state_31844;
(statearr_31849[(10)] = inst_31816);

return statearr_31849;
})();
var statearr_31850_31875 = state_31844__$1;
(statearr_31850_31875[(2)] = null);

(statearr_31850_31875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31845 === (4))){
var inst_31816 = (state_31844[(10)]);
var state_31844__$1 = state_31844;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31844__$1,(7),inst_31816);
} else {
if((state_val_31845 === (6))){
var inst_31840 = (state_31844[(2)]);
var state_31844__$1 = state_31844;
var statearr_31851_31876 = state_31844__$1;
(statearr_31851_31876[(2)] = inst_31840);

(statearr_31851_31876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31845 === (3))){
var inst_31842 = (state_31844[(2)]);
var state_31844__$1 = state_31844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31844__$1,inst_31842);
} else {
if((state_val_31845 === (2))){
var inst_31816 = (state_31844[(10)]);
var inst_31818 = cljs.core.count.call(null,inst_31816);
var inst_31819 = (inst_31818 > (0));
var state_31844__$1 = state_31844;
if(cljs.core.truth_(inst_31819)){
var statearr_31853_31877 = state_31844__$1;
(statearr_31853_31877[(1)] = (4));

} else {
var statearr_31854_31878 = state_31844__$1;
(statearr_31854_31878[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31845 === (11))){
var inst_31816 = (state_31844[(10)]);
var inst_31833 = (state_31844[(2)]);
var tmp31852 = inst_31816;
var inst_31816__$1 = tmp31852;
var state_31844__$1 = (function (){var statearr_31855 = state_31844;
(statearr_31855[(11)] = inst_31833);

(statearr_31855[(10)] = inst_31816__$1);

return statearr_31855;
})();
var statearr_31856_31879 = state_31844__$1;
(statearr_31856_31879[(2)] = null);

(statearr_31856_31879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31845 === (9))){
var inst_31824 = (state_31844[(8)]);
var state_31844__$1 = state_31844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31844__$1,(11),out,inst_31824);
} else {
if((state_val_31845 === (5))){
var inst_31838 = cljs.core.async.close_BANG_.call(null,out);
var state_31844__$1 = state_31844;
var statearr_31857_31880 = state_31844__$1;
(statearr_31857_31880[(2)] = inst_31838);

(statearr_31857_31880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31845 === (10))){
var inst_31836 = (state_31844[(2)]);
var state_31844__$1 = state_31844;
var statearr_31858_31881 = state_31844__$1;
(statearr_31858_31881[(2)] = inst_31836);

(statearr_31858_31881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31845 === (8))){
var inst_31823 = (state_31844[(7)]);
var inst_31825 = (state_31844[(9)]);
var inst_31824 = (state_31844[(8)]);
var inst_31816 = (state_31844[(10)]);
var inst_31828 = (function (){var cs = inst_31816;
var vec__31821 = inst_31823;
var v = inst_31824;
var c = inst_31825;
return ((function (cs,vec__31821,v,c,inst_31823,inst_31825,inst_31824,inst_31816,state_val_31845,c__29774__auto___31872,out){
return (function (p1__31811_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31811_SHARP_);
});
;})(cs,vec__31821,v,c,inst_31823,inst_31825,inst_31824,inst_31816,state_val_31845,c__29774__auto___31872,out))
})();
var inst_31829 = cljs.core.filterv.call(null,inst_31828,inst_31816);
var inst_31816__$1 = inst_31829;
var state_31844__$1 = (function (){var statearr_31859 = state_31844;
(statearr_31859[(10)] = inst_31816__$1);

return statearr_31859;
})();
var statearr_31860_31882 = state_31844__$1;
(statearr_31860_31882[(2)] = null);

(statearr_31860_31882[(1)] = (2));


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
});})(c__29774__auto___31872,out))
;
return ((function (switch__29662__auto__,c__29774__auto___31872,out){
return (function() {
var cljs$core$async$state_machine__29663__auto__ = null;
var cljs$core$async$state_machine__29663__auto____0 = (function (){
var statearr_31864 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31864[(0)] = cljs$core$async$state_machine__29663__auto__);

(statearr_31864[(1)] = (1));

return statearr_31864;
});
var cljs$core$async$state_machine__29663__auto____1 = (function (state_31844){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_31844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e31865){if((e31865 instanceof Object)){
var ex__29666__auto__ = e31865;
var statearr_31866_31883 = state_31844;
(statearr_31866_31883[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31884 = state_31844;
state_31844 = G__31884;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
cljs$core$async$state_machine__29663__auto__ = function(state_31844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29663__auto____1.call(this,state_31844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29663__auto____0;
cljs$core$async$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29663__auto____1;
return cljs$core$async$state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto___31872,out))
})();
var state__29776__auto__ = (function (){var statearr_31867 = f__29775__auto__.call(null);
(statearr_31867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___31872);

return statearr_31867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto___31872,out))
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
var args31885 = [];
var len__26713__auto___31934 = arguments.length;
var i__26714__auto___31935 = (0);
while(true){
if((i__26714__auto___31935 < len__26713__auto___31934)){
args31885.push((arguments[i__26714__auto___31935]));

var G__31936 = (i__26714__auto___31935 + (1));
i__26714__auto___31935 = G__31936;
continue;
} else {
}
break;
}

var G__31887 = args31885.length;
switch (G__31887) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31885.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29774__auto___31938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto___31938,out){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto___31938,out){
return (function (state_31911){
var state_val_31912 = (state_31911[(1)]);
if((state_val_31912 === (7))){
var inst_31893 = (state_31911[(7)]);
var inst_31893__$1 = (state_31911[(2)]);
var inst_31894 = (inst_31893__$1 == null);
var inst_31895 = cljs.core.not.call(null,inst_31894);
var state_31911__$1 = (function (){var statearr_31913 = state_31911;
(statearr_31913[(7)] = inst_31893__$1);

return statearr_31913;
})();
if(inst_31895){
var statearr_31914_31939 = state_31911__$1;
(statearr_31914_31939[(1)] = (8));

} else {
var statearr_31915_31940 = state_31911__$1;
(statearr_31915_31940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (1))){
var inst_31888 = (0);
var state_31911__$1 = (function (){var statearr_31916 = state_31911;
(statearr_31916[(8)] = inst_31888);

return statearr_31916;
})();
var statearr_31917_31941 = state_31911__$1;
(statearr_31917_31941[(2)] = null);

(statearr_31917_31941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (4))){
var state_31911__$1 = state_31911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31911__$1,(7),ch);
} else {
if((state_val_31912 === (6))){
var inst_31906 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_31918_31942 = state_31911__$1;
(statearr_31918_31942[(2)] = inst_31906);

(statearr_31918_31942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (3))){
var inst_31908 = (state_31911[(2)]);
var inst_31909 = cljs.core.async.close_BANG_.call(null,out);
var state_31911__$1 = (function (){var statearr_31919 = state_31911;
(statearr_31919[(9)] = inst_31908);

return statearr_31919;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31911__$1,inst_31909);
} else {
if((state_val_31912 === (2))){
var inst_31888 = (state_31911[(8)]);
var inst_31890 = (inst_31888 < n);
var state_31911__$1 = state_31911;
if(cljs.core.truth_(inst_31890)){
var statearr_31920_31943 = state_31911__$1;
(statearr_31920_31943[(1)] = (4));

} else {
var statearr_31921_31944 = state_31911__$1;
(statearr_31921_31944[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (11))){
var inst_31888 = (state_31911[(8)]);
var inst_31898 = (state_31911[(2)]);
var inst_31899 = (inst_31888 + (1));
var inst_31888__$1 = inst_31899;
var state_31911__$1 = (function (){var statearr_31922 = state_31911;
(statearr_31922[(8)] = inst_31888__$1);

(statearr_31922[(10)] = inst_31898);

return statearr_31922;
})();
var statearr_31923_31945 = state_31911__$1;
(statearr_31923_31945[(2)] = null);

(statearr_31923_31945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (9))){
var state_31911__$1 = state_31911;
var statearr_31924_31946 = state_31911__$1;
(statearr_31924_31946[(2)] = null);

(statearr_31924_31946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (5))){
var state_31911__$1 = state_31911;
var statearr_31925_31947 = state_31911__$1;
(statearr_31925_31947[(2)] = null);

(statearr_31925_31947[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (10))){
var inst_31903 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_31926_31948 = state_31911__$1;
(statearr_31926_31948[(2)] = inst_31903);

(statearr_31926_31948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (8))){
var inst_31893 = (state_31911[(7)]);
var state_31911__$1 = state_31911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31911__$1,(11),out,inst_31893);
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
});})(c__29774__auto___31938,out))
;
return ((function (switch__29662__auto__,c__29774__auto___31938,out){
return (function() {
var cljs$core$async$state_machine__29663__auto__ = null;
var cljs$core$async$state_machine__29663__auto____0 = (function (){
var statearr_31930 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31930[(0)] = cljs$core$async$state_machine__29663__auto__);

(statearr_31930[(1)] = (1));

return statearr_31930;
});
var cljs$core$async$state_machine__29663__auto____1 = (function (state_31911){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_31911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e31931){if((e31931 instanceof Object)){
var ex__29666__auto__ = e31931;
var statearr_31932_31949 = state_31911;
(statearr_31932_31949[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31950 = state_31911;
state_31911 = G__31950;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
cljs$core$async$state_machine__29663__auto__ = function(state_31911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29663__auto____1.call(this,state_31911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29663__auto____0;
cljs$core$async$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29663__auto____1;
return cljs$core$async$state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto___31938,out))
})();
var state__29776__auto__ = (function (){var statearr_31933 = f__29775__auto__.call(null);
(statearr_31933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___31938);

return statearr_31933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto___31938,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31958 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31958 = (function (map_LT_,f,ch,meta31959){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31959 = meta31959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31960,meta31959__$1){
var self__ = this;
var _31960__$1 = this;
return (new cljs.core.async.t_cljs$core$async31958(self__.map_LT_,self__.f,self__.ch,meta31959__$1));
});

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31960){
var self__ = this;
var _31960__$1 = this;
return self__.meta31959;
});

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31961 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31961 = (function (map_LT_,f,ch,meta31959,_,fn1,meta31962){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31959 = meta31959;
this._ = _;
this.fn1 = fn1;
this.meta31962 = meta31962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31963,meta31962__$1){
var self__ = this;
var _31963__$1 = this;
return (new cljs.core.async.t_cljs$core$async31961(self__.map_LT_,self__.f,self__.ch,self__.meta31959,self__._,self__.fn1,meta31962__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31963){
var self__ = this;
var _31963__$1 = this;
return self__.meta31962;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31951_SHARP_){
return f1.call(null,(((p1__31951_SHARP_ == null))?null:self__.f.call(null,p1__31951_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31961.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31959","meta31959",131391010,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31958","cljs.core.async/t_cljs$core$async31958",-2099564643,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31962","meta31962",328271802,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31961.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31961";

cljs.core.async.t_cljs$core$async31961.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26249__auto__,writer__26250__auto__,opt__26251__auto__){
return cljs.core._write.call(null,writer__26250__auto__,"cljs.core.async/t_cljs$core$async31961");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31961 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31961(map_LT___$1,f__$1,ch__$1,meta31959__$1,___$2,fn1__$1,meta31962){
return (new cljs.core.async.t_cljs$core$async31961(map_LT___$1,f__$1,ch__$1,meta31959__$1,___$2,fn1__$1,meta31962));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31961(self__.map_LT_,self__.f,self__.ch,self__.meta31959,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25631__auto__ = ret;
if(cljs.core.truth_(and__25631__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25631__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31958.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31959","meta31959",131391010,null)], null);
});

cljs.core.async.t_cljs$core$async31958.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31958";

cljs.core.async.t_cljs$core$async31958.cljs$lang$ctorPrWriter = (function (this__26249__auto__,writer__26250__auto__,opt__26251__auto__){
return cljs.core._write.call(null,writer__26250__auto__,"cljs.core.async/t_cljs$core$async31958");
});

cljs.core.async.__GT_t_cljs$core$async31958 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31958(map_LT___$1,f__$1,ch__$1,meta31959){
return (new cljs.core.async.t_cljs$core$async31958(map_LT___$1,f__$1,ch__$1,meta31959));
});

}

return (new cljs.core.async.t_cljs$core$async31958(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31967 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31967 = (function (map_GT_,f,ch,meta31968){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31968 = meta31968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31969,meta31968__$1){
var self__ = this;
var _31969__$1 = this;
return (new cljs.core.async.t_cljs$core$async31967(self__.map_GT_,self__.f,self__.ch,meta31968__$1));
});

cljs.core.async.t_cljs$core$async31967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31969){
var self__ = this;
var _31969__$1 = this;
return self__.meta31968;
});

cljs.core.async.t_cljs$core$async31967.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31967.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31967.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31967.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31967.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31967.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31967.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31968","meta31968",368402743,null)], null);
});

cljs.core.async.t_cljs$core$async31967.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31967";

cljs.core.async.t_cljs$core$async31967.cljs$lang$ctorPrWriter = (function (this__26249__auto__,writer__26250__auto__,opt__26251__auto__){
return cljs.core._write.call(null,writer__26250__auto__,"cljs.core.async/t_cljs$core$async31967");
});

cljs.core.async.__GT_t_cljs$core$async31967 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31967(map_GT___$1,f__$1,ch__$1,meta31968){
return (new cljs.core.async.t_cljs$core$async31967(map_GT___$1,f__$1,ch__$1,meta31968));
});

}

return (new cljs.core.async.t_cljs$core$async31967(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31973 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31973 = (function (filter_GT_,p,ch,meta31974){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31974 = meta31974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31975,meta31974__$1){
var self__ = this;
var _31975__$1 = this;
return (new cljs.core.async.t_cljs$core$async31973(self__.filter_GT_,self__.p,self__.ch,meta31974__$1));
});

cljs.core.async.t_cljs$core$async31973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31975){
var self__ = this;
var _31975__$1 = this;
return self__.meta31974;
});

cljs.core.async.t_cljs$core$async31973.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31973.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31973.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31973.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31973.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31973.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31973.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31974","meta31974",-1723485237,null)], null);
});

cljs.core.async.t_cljs$core$async31973.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31973";

cljs.core.async.t_cljs$core$async31973.cljs$lang$ctorPrWriter = (function (this__26249__auto__,writer__26250__auto__,opt__26251__auto__){
return cljs.core._write.call(null,writer__26250__auto__,"cljs.core.async/t_cljs$core$async31973");
});

cljs.core.async.__GT_t_cljs$core$async31973 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31973(filter_GT___$1,p__$1,ch__$1,meta31974){
return (new cljs.core.async.t_cljs$core$async31973(filter_GT___$1,p__$1,ch__$1,meta31974));
});

}

return (new cljs.core.async.t_cljs$core$async31973(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args31976 = [];
var len__26713__auto___32020 = arguments.length;
var i__26714__auto___32021 = (0);
while(true){
if((i__26714__auto___32021 < len__26713__auto___32020)){
args31976.push((arguments[i__26714__auto___32021]));

var G__32022 = (i__26714__auto___32021 + (1));
i__26714__auto___32021 = G__32022;
continue;
} else {
}
break;
}

var G__31978 = args31976.length;
switch (G__31978) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31976.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29774__auto___32024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto___32024,out){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto___32024,out){
return (function (state_31999){
var state_val_32000 = (state_31999[(1)]);
if((state_val_32000 === (7))){
var inst_31995 = (state_31999[(2)]);
var state_31999__$1 = state_31999;
var statearr_32001_32025 = state_31999__$1;
(statearr_32001_32025[(2)] = inst_31995);

(statearr_32001_32025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (1))){
var state_31999__$1 = state_31999;
var statearr_32002_32026 = state_31999__$1;
(statearr_32002_32026[(2)] = null);

(statearr_32002_32026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (4))){
var inst_31981 = (state_31999[(7)]);
var inst_31981__$1 = (state_31999[(2)]);
var inst_31982 = (inst_31981__$1 == null);
var state_31999__$1 = (function (){var statearr_32003 = state_31999;
(statearr_32003[(7)] = inst_31981__$1);

return statearr_32003;
})();
if(cljs.core.truth_(inst_31982)){
var statearr_32004_32027 = state_31999__$1;
(statearr_32004_32027[(1)] = (5));

} else {
var statearr_32005_32028 = state_31999__$1;
(statearr_32005_32028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (6))){
var inst_31981 = (state_31999[(7)]);
var inst_31986 = p.call(null,inst_31981);
var state_31999__$1 = state_31999;
if(cljs.core.truth_(inst_31986)){
var statearr_32006_32029 = state_31999__$1;
(statearr_32006_32029[(1)] = (8));

} else {
var statearr_32007_32030 = state_31999__$1;
(statearr_32007_32030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (3))){
var inst_31997 = (state_31999[(2)]);
var state_31999__$1 = state_31999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31999__$1,inst_31997);
} else {
if((state_val_32000 === (2))){
var state_31999__$1 = state_31999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31999__$1,(4),ch);
} else {
if((state_val_32000 === (11))){
var inst_31989 = (state_31999[(2)]);
var state_31999__$1 = state_31999;
var statearr_32008_32031 = state_31999__$1;
(statearr_32008_32031[(2)] = inst_31989);

(statearr_32008_32031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (9))){
var state_31999__$1 = state_31999;
var statearr_32009_32032 = state_31999__$1;
(statearr_32009_32032[(2)] = null);

(statearr_32009_32032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (5))){
var inst_31984 = cljs.core.async.close_BANG_.call(null,out);
var state_31999__$1 = state_31999;
var statearr_32010_32033 = state_31999__$1;
(statearr_32010_32033[(2)] = inst_31984);

(statearr_32010_32033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (10))){
var inst_31992 = (state_31999[(2)]);
var state_31999__$1 = (function (){var statearr_32011 = state_31999;
(statearr_32011[(8)] = inst_31992);

return statearr_32011;
})();
var statearr_32012_32034 = state_31999__$1;
(statearr_32012_32034[(2)] = null);

(statearr_32012_32034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (8))){
var inst_31981 = (state_31999[(7)]);
var state_31999__$1 = state_31999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31999__$1,(11),out,inst_31981);
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
});})(c__29774__auto___32024,out))
;
return ((function (switch__29662__auto__,c__29774__auto___32024,out){
return (function() {
var cljs$core$async$state_machine__29663__auto__ = null;
var cljs$core$async$state_machine__29663__auto____0 = (function (){
var statearr_32016 = [null,null,null,null,null,null,null,null,null];
(statearr_32016[(0)] = cljs$core$async$state_machine__29663__auto__);

(statearr_32016[(1)] = (1));

return statearr_32016;
});
var cljs$core$async$state_machine__29663__auto____1 = (function (state_31999){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_31999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e32017){if((e32017 instanceof Object)){
var ex__29666__auto__ = e32017;
var statearr_32018_32035 = state_31999;
(statearr_32018_32035[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32036 = state_31999;
state_31999 = G__32036;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
cljs$core$async$state_machine__29663__auto__ = function(state_31999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29663__auto____1.call(this,state_31999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29663__auto____0;
cljs$core$async$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29663__auto____1;
return cljs$core$async$state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto___32024,out))
})();
var state__29776__auto__ = (function (){var statearr_32019 = f__29775__auto__.call(null);
(statearr_32019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___32024);

return statearr_32019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto___32024,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32037 = [];
var len__26713__auto___32040 = arguments.length;
var i__26714__auto___32041 = (0);
while(true){
if((i__26714__auto___32041 < len__26713__auto___32040)){
args32037.push((arguments[i__26714__auto___32041]));

var G__32042 = (i__26714__auto___32041 + (1));
i__26714__auto___32041 = G__32042;
continue;
} else {
}
break;
}

var G__32039 = args32037.length;
switch (G__32039) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32037.length)].join('')));

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
var c__29774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto__){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto__){
return (function (state_32209){
var state_val_32210 = (state_32209[(1)]);
if((state_val_32210 === (7))){
var inst_32205 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32211_32252 = state_32209__$1;
(statearr_32211_32252[(2)] = inst_32205);

(statearr_32211_32252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (20))){
var inst_32175 = (state_32209[(7)]);
var inst_32186 = (state_32209[(2)]);
var inst_32187 = cljs.core.next.call(null,inst_32175);
var inst_32161 = inst_32187;
var inst_32162 = null;
var inst_32163 = (0);
var inst_32164 = (0);
var state_32209__$1 = (function (){var statearr_32212 = state_32209;
(statearr_32212[(8)] = inst_32164);

(statearr_32212[(9)] = inst_32161);

(statearr_32212[(10)] = inst_32162);

(statearr_32212[(11)] = inst_32163);

(statearr_32212[(12)] = inst_32186);

return statearr_32212;
})();
var statearr_32213_32253 = state_32209__$1;
(statearr_32213_32253[(2)] = null);

(statearr_32213_32253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (1))){
var state_32209__$1 = state_32209;
var statearr_32214_32254 = state_32209__$1;
(statearr_32214_32254[(2)] = null);

(statearr_32214_32254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (4))){
var inst_32150 = (state_32209[(13)]);
var inst_32150__$1 = (state_32209[(2)]);
var inst_32151 = (inst_32150__$1 == null);
var state_32209__$1 = (function (){var statearr_32215 = state_32209;
(statearr_32215[(13)] = inst_32150__$1);

return statearr_32215;
})();
if(cljs.core.truth_(inst_32151)){
var statearr_32216_32255 = state_32209__$1;
(statearr_32216_32255[(1)] = (5));

} else {
var statearr_32217_32256 = state_32209__$1;
(statearr_32217_32256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (15))){
var state_32209__$1 = state_32209;
var statearr_32221_32257 = state_32209__$1;
(statearr_32221_32257[(2)] = null);

(statearr_32221_32257[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (21))){
var state_32209__$1 = state_32209;
var statearr_32222_32258 = state_32209__$1;
(statearr_32222_32258[(2)] = null);

(statearr_32222_32258[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (13))){
var inst_32164 = (state_32209[(8)]);
var inst_32161 = (state_32209[(9)]);
var inst_32162 = (state_32209[(10)]);
var inst_32163 = (state_32209[(11)]);
var inst_32171 = (state_32209[(2)]);
var inst_32172 = (inst_32164 + (1));
var tmp32218 = inst_32161;
var tmp32219 = inst_32162;
var tmp32220 = inst_32163;
var inst_32161__$1 = tmp32218;
var inst_32162__$1 = tmp32219;
var inst_32163__$1 = tmp32220;
var inst_32164__$1 = inst_32172;
var state_32209__$1 = (function (){var statearr_32223 = state_32209;
(statearr_32223[(8)] = inst_32164__$1);

(statearr_32223[(9)] = inst_32161__$1);

(statearr_32223[(10)] = inst_32162__$1);

(statearr_32223[(11)] = inst_32163__$1);

(statearr_32223[(14)] = inst_32171);

return statearr_32223;
})();
var statearr_32224_32259 = state_32209__$1;
(statearr_32224_32259[(2)] = null);

(statearr_32224_32259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (22))){
var state_32209__$1 = state_32209;
var statearr_32225_32260 = state_32209__$1;
(statearr_32225_32260[(2)] = null);

(statearr_32225_32260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (6))){
var inst_32150 = (state_32209[(13)]);
var inst_32159 = f.call(null,inst_32150);
var inst_32160 = cljs.core.seq.call(null,inst_32159);
var inst_32161 = inst_32160;
var inst_32162 = null;
var inst_32163 = (0);
var inst_32164 = (0);
var state_32209__$1 = (function (){var statearr_32226 = state_32209;
(statearr_32226[(8)] = inst_32164);

(statearr_32226[(9)] = inst_32161);

(statearr_32226[(10)] = inst_32162);

(statearr_32226[(11)] = inst_32163);

return statearr_32226;
})();
var statearr_32227_32261 = state_32209__$1;
(statearr_32227_32261[(2)] = null);

(statearr_32227_32261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (17))){
var inst_32175 = (state_32209[(7)]);
var inst_32179 = cljs.core.chunk_first.call(null,inst_32175);
var inst_32180 = cljs.core.chunk_rest.call(null,inst_32175);
var inst_32181 = cljs.core.count.call(null,inst_32179);
var inst_32161 = inst_32180;
var inst_32162 = inst_32179;
var inst_32163 = inst_32181;
var inst_32164 = (0);
var state_32209__$1 = (function (){var statearr_32228 = state_32209;
(statearr_32228[(8)] = inst_32164);

(statearr_32228[(9)] = inst_32161);

(statearr_32228[(10)] = inst_32162);

(statearr_32228[(11)] = inst_32163);

return statearr_32228;
})();
var statearr_32229_32262 = state_32209__$1;
(statearr_32229_32262[(2)] = null);

(statearr_32229_32262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (3))){
var inst_32207 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32209__$1,inst_32207);
} else {
if((state_val_32210 === (12))){
var inst_32195 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32230_32263 = state_32209__$1;
(statearr_32230_32263[(2)] = inst_32195);

(statearr_32230_32263[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (2))){
var state_32209__$1 = state_32209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32209__$1,(4),in$);
} else {
if((state_val_32210 === (23))){
var inst_32203 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32231_32264 = state_32209__$1;
(statearr_32231_32264[(2)] = inst_32203);

(statearr_32231_32264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (19))){
var inst_32190 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32232_32265 = state_32209__$1;
(statearr_32232_32265[(2)] = inst_32190);

(statearr_32232_32265[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (11))){
var inst_32175 = (state_32209[(7)]);
var inst_32161 = (state_32209[(9)]);
var inst_32175__$1 = cljs.core.seq.call(null,inst_32161);
var state_32209__$1 = (function (){var statearr_32233 = state_32209;
(statearr_32233[(7)] = inst_32175__$1);

return statearr_32233;
})();
if(inst_32175__$1){
var statearr_32234_32266 = state_32209__$1;
(statearr_32234_32266[(1)] = (14));

} else {
var statearr_32235_32267 = state_32209__$1;
(statearr_32235_32267[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (9))){
var inst_32197 = (state_32209[(2)]);
var inst_32198 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32209__$1 = (function (){var statearr_32236 = state_32209;
(statearr_32236[(15)] = inst_32197);

return statearr_32236;
})();
if(cljs.core.truth_(inst_32198)){
var statearr_32237_32268 = state_32209__$1;
(statearr_32237_32268[(1)] = (21));

} else {
var statearr_32238_32269 = state_32209__$1;
(statearr_32238_32269[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (5))){
var inst_32153 = cljs.core.async.close_BANG_.call(null,out);
var state_32209__$1 = state_32209;
var statearr_32239_32270 = state_32209__$1;
(statearr_32239_32270[(2)] = inst_32153);

(statearr_32239_32270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (14))){
var inst_32175 = (state_32209[(7)]);
var inst_32177 = cljs.core.chunked_seq_QMARK_.call(null,inst_32175);
var state_32209__$1 = state_32209;
if(inst_32177){
var statearr_32240_32271 = state_32209__$1;
(statearr_32240_32271[(1)] = (17));

} else {
var statearr_32241_32272 = state_32209__$1;
(statearr_32241_32272[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (16))){
var inst_32193 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32242_32273 = state_32209__$1;
(statearr_32242_32273[(2)] = inst_32193);

(statearr_32242_32273[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (10))){
var inst_32164 = (state_32209[(8)]);
var inst_32162 = (state_32209[(10)]);
var inst_32169 = cljs.core._nth.call(null,inst_32162,inst_32164);
var state_32209__$1 = state_32209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32209__$1,(13),out,inst_32169);
} else {
if((state_val_32210 === (18))){
var inst_32175 = (state_32209[(7)]);
var inst_32184 = cljs.core.first.call(null,inst_32175);
var state_32209__$1 = state_32209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32209__$1,(20),out,inst_32184);
} else {
if((state_val_32210 === (8))){
var inst_32164 = (state_32209[(8)]);
var inst_32163 = (state_32209[(11)]);
var inst_32166 = (inst_32164 < inst_32163);
var inst_32167 = inst_32166;
var state_32209__$1 = state_32209;
if(cljs.core.truth_(inst_32167)){
var statearr_32243_32274 = state_32209__$1;
(statearr_32243_32274[(1)] = (10));

} else {
var statearr_32244_32275 = state_32209__$1;
(statearr_32244_32275[(1)] = (11));

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
});})(c__29774__auto__))
;
return ((function (switch__29662__auto__,c__29774__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29663__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29663__auto____0 = (function (){
var statearr_32248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32248[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29663__auto__);

(statearr_32248[(1)] = (1));

return statearr_32248;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29663__auto____1 = (function (state_32209){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_32209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e32249){if((e32249 instanceof Object)){
var ex__29666__auto__ = e32249;
var statearr_32250_32276 = state_32209;
(statearr_32250_32276[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32277 = state_32209;
state_32209 = G__32277;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29663__auto__ = function(state_32209){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29663__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29663__auto____1.call(this,state_32209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29663__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29663__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto__))
})();
var state__29776__auto__ = (function (){var statearr_32251 = f__29775__auto__.call(null);
(statearr_32251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto__);

return statearr_32251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto__))
);

return c__29774__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32278 = [];
var len__26713__auto___32281 = arguments.length;
var i__26714__auto___32282 = (0);
while(true){
if((i__26714__auto___32282 < len__26713__auto___32281)){
args32278.push((arguments[i__26714__auto___32282]));

var G__32283 = (i__26714__auto___32282 + (1));
i__26714__auto___32282 = G__32283;
continue;
} else {
}
break;
}

var G__32280 = args32278.length;
switch (G__32280) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32278.length)].join('')));

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
var args32285 = [];
var len__26713__auto___32288 = arguments.length;
var i__26714__auto___32289 = (0);
while(true){
if((i__26714__auto___32289 < len__26713__auto___32288)){
args32285.push((arguments[i__26714__auto___32289]));

var G__32290 = (i__26714__auto___32289 + (1));
i__26714__auto___32289 = G__32290;
continue;
} else {
}
break;
}

var G__32287 = args32285.length;
switch (G__32287) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32285.length)].join('')));

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
var args32292 = [];
var len__26713__auto___32343 = arguments.length;
var i__26714__auto___32344 = (0);
while(true){
if((i__26714__auto___32344 < len__26713__auto___32343)){
args32292.push((arguments[i__26714__auto___32344]));

var G__32345 = (i__26714__auto___32344 + (1));
i__26714__auto___32344 = G__32345;
continue;
} else {
}
break;
}

var G__32294 = args32292.length;
switch (G__32294) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32292.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29774__auto___32347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto___32347,out){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto___32347,out){
return (function (state_32318){
var state_val_32319 = (state_32318[(1)]);
if((state_val_32319 === (7))){
var inst_32313 = (state_32318[(2)]);
var state_32318__$1 = state_32318;
var statearr_32320_32348 = state_32318__$1;
(statearr_32320_32348[(2)] = inst_32313);

(statearr_32320_32348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (1))){
var inst_32295 = null;
var state_32318__$1 = (function (){var statearr_32321 = state_32318;
(statearr_32321[(7)] = inst_32295);

return statearr_32321;
})();
var statearr_32322_32349 = state_32318__$1;
(statearr_32322_32349[(2)] = null);

(statearr_32322_32349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (4))){
var inst_32298 = (state_32318[(8)]);
var inst_32298__$1 = (state_32318[(2)]);
var inst_32299 = (inst_32298__$1 == null);
var inst_32300 = cljs.core.not.call(null,inst_32299);
var state_32318__$1 = (function (){var statearr_32323 = state_32318;
(statearr_32323[(8)] = inst_32298__$1);

return statearr_32323;
})();
if(inst_32300){
var statearr_32324_32350 = state_32318__$1;
(statearr_32324_32350[(1)] = (5));

} else {
var statearr_32325_32351 = state_32318__$1;
(statearr_32325_32351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (6))){
var state_32318__$1 = state_32318;
var statearr_32326_32352 = state_32318__$1;
(statearr_32326_32352[(2)] = null);

(statearr_32326_32352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (3))){
var inst_32315 = (state_32318[(2)]);
var inst_32316 = cljs.core.async.close_BANG_.call(null,out);
var state_32318__$1 = (function (){var statearr_32327 = state_32318;
(statearr_32327[(9)] = inst_32315);

return statearr_32327;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32318__$1,inst_32316);
} else {
if((state_val_32319 === (2))){
var state_32318__$1 = state_32318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32318__$1,(4),ch);
} else {
if((state_val_32319 === (11))){
var inst_32298 = (state_32318[(8)]);
var inst_32307 = (state_32318[(2)]);
var inst_32295 = inst_32298;
var state_32318__$1 = (function (){var statearr_32328 = state_32318;
(statearr_32328[(7)] = inst_32295);

(statearr_32328[(10)] = inst_32307);

return statearr_32328;
})();
var statearr_32329_32353 = state_32318__$1;
(statearr_32329_32353[(2)] = null);

(statearr_32329_32353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (9))){
var inst_32298 = (state_32318[(8)]);
var state_32318__$1 = state_32318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32318__$1,(11),out,inst_32298);
} else {
if((state_val_32319 === (5))){
var inst_32295 = (state_32318[(7)]);
var inst_32298 = (state_32318[(8)]);
var inst_32302 = cljs.core._EQ_.call(null,inst_32298,inst_32295);
var state_32318__$1 = state_32318;
if(inst_32302){
var statearr_32331_32354 = state_32318__$1;
(statearr_32331_32354[(1)] = (8));

} else {
var statearr_32332_32355 = state_32318__$1;
(statearr_32332_32355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (10))){
var inst_32310 = (state_32318[(2)]);
var state_32318__$1 = state_32318;
var statearr_32333_32356 = state_32318__$1;
(statearr_32333_32356[(2)] = inst_32310);

(statearr_32333_32356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32319 === (8))){
var inst_32295 = (state_32318[(7)]);
var tmp32330 = inst_32295;
var inst_32295__$1 = tmp32330;
var state_32318__$1 = (function (){var statearr_32334 = state_32318;
(statearr_32334[(7)] = inst_32295__$1);

return statearr_32334;
})();
var statearr_32335_32357 = state_32318__$1;
(statearr_32335_32357[(2)] = null);

(statearr_32335_32357[(1)] = (2));


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
});})(c__29774__auto___32347,out))
;
return ((function (switch__29662__auto__,c__29774__auto___32347,out){
return (function() {
var cljs$core$async$state_machine__29663__auto__ = null;
var cljs$core$async$state_machine__29663__auto____0 = (function (){
var statearr_32339 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32339[(0)] = cljs$core$async$state_machine__29663__auto__);

(statearr_32339[(1)] = (1));

return statearr_32339;
});
var cljs$core$async$state_machine__29663__auto____1 = (function (state_32318){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_32318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e32340){if((e32340 instanceof Object)){
var ex__29666__auto__ = e32340;
var statearr_32341_32358 = state_32318;
(statearr_32341_32358[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32359 = state_32318;
state_32318 = G__32359;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
cljs$core$async$state_machine__29663__auto__ = function(state_32318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29663__auto____1.call(this,state_32318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29663__auto____0;
cljs$core$async$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29663__auto____1;
return cljs$core$async$state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto___32347,out))
})();
var state__29776__auto__ = (function (){var statearr_32342 = f__29775__auto__.call(null);
(statearr_32342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___32347);

return statearr_32342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto___32347,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32360 = [];
var len__26713__auto___32430 = arguments.length;
var i__26714__auto___32431 = (0);
while(true){
if((i__26714__auto___32431 < len__26713__auto___32430)){
args32360.push((arguments[i__26714__auto___32431]));

var G__32432 = (i__26714__auto___32431 + (1));
i__26714__auto___32431 = G__32432;
continue;
} else {
}
break;
}

var G__32362 = args32360.length;
switch (G__32362) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32360.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29774__auto___32434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto___32434,out){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto___32434,out){
return (function (state_32400){
var state_val_32401 = (state_32400[(1)]);
if((state_val_32401 === (7))){
var inst_32396 = (state_32400[(2)]);
var state_32400__$1 = state_32400;
var statearr_32402_32435 = state_32400__$1;
(statearr_32402_32435[(2)] = inst_32396);

(statearr_32402_32435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (1))){
var inst_32363 = (new Array(n));
var inst_32364 = inst_32363;
var inst_32365 = (0);
var state_32400__$1 = (function (){var statearr_32403 = state_32400;
(statearr_32403[(7)] = inst_32365);

(statearr_32403[(8)] = inst_32364);

return statearr_32403;
})();
var statearr_32404_32436 = state_32400__$1;
(statearr_32404_32436[(2)] = null);

(statearr_32404_32436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (4))){
var inst_32368 = (state_32400[(9)]);
var inst_32368__$1 = (state_32400[(2)]);
var inst_32369 = (inst_32368__$1 == null);
var inst_32370 = cljs.core.not.call(null,inst_32369);
var state_32400__$1 = (function (){var statearr_32405 = state_32400;
(statearr_32405[(9)] = inst_32368__$1);

return statearr_32405;
})();
if(inst_32370){
var statearr_32406_32437 = state_32400__$1;
(statearr_32406_32437[(1)] = (5));

} else {
var statearr_32407_32438 = state_32400__$1;
(statearr_32407_32438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (15))){
var inst_32390 = (state_32400[(2)]);
var state_32400__$1 = state_32400;
var statearr_32408_32439 = state_32400__$1;
(statearr_32408_32439[(2)] = inst_32390);

(statearr_32408_32439[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (13))){
var state_32400__$1 = state_32400;
var statearr_32409_32440 = state_32400__$1;
(statearr_32409_32440[(2)] = null);

(statearr_32409_32440[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (6))){
var inst_32365 = (state_32400[(7)]);
var inst_32386 = (inst_32365 > (0));
var state_32400__$1 = state_32400;
if(cljs.core.truth_(inst_32386)){
var statearr_32410_32441 = state_32400__$1;
(statearr_32410_32441[(1)] = (12));

} else {
var statearr_32411_32442 = state_32400__$1;
(statearr_32411_32442[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (3))){
var inst_32398 = (state_32400[(2)]);
var state_32400__$1 = state_32400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32400__$1,inst_32398);
} else {
if((state_val_32401 === (12))){
var inst_32364 = (state_32400[(8)]);
var inst_32388 = cljs.core.vec.call(null,inst_32364);
var state_32400__$1 = state_32400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32400__$1,(15),out,inst_32388);
} else {
if((state_val_32401 === (2))){
var state_32400__$1 = state_32400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32400__$1,(4),ch);
} else {
if((state_val_32401 === (11))){
var inst_32380 = (state_32400[(2)]);
var inst_32381 = (new Array(n));
var inst_32364 = inst_32381;
var inst_32365 = (0);
var state_32400__$1 = (function (){var statearr_32412 = state_32400;
(statearr_32412[(10)] = inst_32380);

(statearr_32412[(7)] = inst_32365);

(statearr_32412[(8)] = inst_32364);

return statearr_32412;
})();
var statearr_32413_32443 = state_32400__$1;
(statearr_32413_32443[(2)] = null);

(statearr_32413_32443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (9))){
var inst_32364 = (state_32400[(8)]);
var inst_32378 = cljs.core.vec.call(null,inst_32364);
var state_32400__$1 = state_32400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32400__$1,(11),out,inst_32378);
} else {
if((state_val_32401 === (5))){
var inst_32373 = (state_32400[(11)]);
var inst_32368 = (state_32400[(9)]);
var inst_32365 = (state_32400[(7)]);
var inst_32364 = (state_32400[(8)]);
var inst_32372 = (inst_32364[inst_32365] = inst_32368);
var inst_32373__$1 = (inst_32365 + (1));
var inst_32374 = (inst_32373__$1 < n);
var state_32400__$1 = (function (){var statearr_32414 = state_32400;
(statearr_32414[(11)] = inst_32373__$1);

(statearr_32414[(12)] = inst_32372);

return statearr_32414;
})();
if(cljs.core.truth_(inst_32374)){
var statearr_32415_32444 = state_32400__$1;
(statearr_32415_32444[(1)] = (8));

} else {
var statearr_32416_32445 = state_32400__$1;
(statearr_32416_32445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (14))){
var inst_32393 = (state_32400[(2)]);
var inst_32394 = cljs.core.async.close_BANG_.call(null,out);
var state_32400__$1 = (function (){var statearr_32418 = state_32400;
(statearr_32418[(13)] = inst_32393);

return statearr_32418;
})();
var statearr_32419_32446 = state_32400__$1;
(statearr_32419_32446[(2)] = inst_32394);

(statearr_32419_32446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (10))){
var inst_32384 = (state_32400[(2)]);
var state_32400__$1 = state_32400;
var statearr_32420_32447 = state_32400__$1;
(statearr_32420_32447[(2)] = inst_32384);

(statearr_32420_32447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32401 === (8))){
var inst_32373 = (state_32400[(11)]);
var inst_32364 = (state_32400[(8)]);
var tmp32417 = inst_32364;
var inst_32364__$1 = tmp32417;
var inst_32365 = inst_32373;
var state_32400__$1 = (function (){var statearr_32421 = state_32400;
(statearr_32421[(7)] = inst_32365);

(statearr_32421[(8)] = inst_32364__$1);

return statearr_32421;
})();
var statearr_32422_32448 = state_32400__$1;
(statearr_32422_32448[(2)] = null);

(statearr_32422_32448[(1)] = (2));


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
});})(c__29774__auto___32434,out))
;
return ((function (switch__29662__auto__,c__29774__auto___32434,out){
return (function() {
var cljs$core$async$state_machine__29663__auto__ = null;
var cljs$core$async$state_machine__29663__auto____0 = (function (){
var statearr_32426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32426[(0)] = cljs$core$async$state_machine__29663__auto__);

(statearr_32426[(1)] = (1));

return statearr_32426;
});
var cljs$core$async$state_machine__29663__auto____1 = (function (state_32400){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_32400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e32427){if((e32427 instanceof Object)){
var ex__29666__auto__ = e32427;
var statearr_32428_32449 = state_32400;
(statearr_32428_32449[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32450 = state_32400;
state_32400 = G__32450;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
cljs$core$async$state_machine__29663__auto__ = function(state_32400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29663__auto____1.call(this,state_32400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29663__auto____0;
cljs$core$async$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29663__auto____1;
return cljs$core$async$state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto___32434,out))
})();
var state__29776__auto__ = (function (){var statearr_32429 = f__29775__auto__.call(null);
(statearr_32429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___32434);

return statearr_32429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto___32434,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32451 = [];
var len__26713__auto___32525 = arguments.length;
var i__26714__auto___32526 = (0);
while(true){
if((i__26714__auto___32526 < len__26713__auto___32525)){
args32451.push((arguments[i__26714__auto___32526]));

var G__32527 = (i__26714__auto___32526 + (1));
i__26714__auto___32526 = G__32527;
continue;
} else {
}
break;
}

var G__32453 = args32451.length;
switch (G__32453) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32451.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29774__auto___32529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto___32529,out){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto___32529,out){
return (function (state_32495){
var state_val_32496 = (state_32495[(1)]);
if((state_val_32496 === (7))){
var inst_32491 = (state_32495[(2)]);
var state_32495__$1 = state_32495;
var statearr_32497_32530 = state_32495__$1;
(statearr_32497_32530[(2)] = inst_32491);

(statearr_32497_32530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32496 === (1))){
var inst_32454 = [];
var inst_32455 = inst_32454;
var inst_32456 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32495__$1 = (function (){var statearr_32498 = state_32495;
(statearr_32498[(7)] = inst_32455);

(statearr_32498[(8)] = inst_32456);

return statearr_32498;
})();
var statearr_32499_32531 = state_32495__$1;
(statearr_32499_32531[(2)] = null);

(statearr_32499_32531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32496 === (4))){
var inst_32459 = (state_32495[(9)]);
var inst_32459__$1 = (state_32495[(2)]);
var inst_32460 = (inst_32459__$1 == null);
var inst_32461 = cljs.core.not.call(null,inst_32460);
var state_32495__$1 = (function (){var statearr_32500 = state_32495;
(statearr_32500[(9)] = inst_32459__$1);

return statearr_32500;
})();
if(inst_32461){
var statearr_32501_32532 = state_32495__$1;
(statearr_32501_32532[(1)] = (5));

} else {
var statearr_32502_32533 = state_32495__$1;
(statearr_32502_32533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32496 === (15))){
var inst_32485 = (state_32495[(2)]);
var state_32495__$1 = state_32495;
var statearr_32503_32534 = state_32495__$1;
(statearr_32503_32534[(2)] = inst_32485);

(statearr_32503_32534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32496 === (13))){
var state_32495__$1 = state_32495;
var statearr_32504_32535 = state_32495__$1;
(statearr_32504_32535[(2)] = null);

(statearr_32504_32535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32496 === (6))){
var inst_32455 = (state_32495[(7)]);
var inst_32480 = inst_32455.length;
var inst_32481 = (inst_32480 > (0));
var state_32495__$1 = state_32495;
if(cljs.core.truth_(inst_32481)){
var statearr_32505_32536 = state_32495__$1;
(statearr_32505_32536[(1)] = (12));

} else {
var statearr_32506_32537 = state_32495__$1;
(statearr_32506_32537[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32496 === (3))){
var inst_32493 = (state_32495[(2)]);
var state_32495__$1 = state_32495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32495__$1,inst_32493);
} else {
if((state_val_32496 === (12))){
var inst_32455 = (state_32495[(7)]);
var inst_32483 = cljs.core.vec.call(null,inst_32455);
var state_32495__$1 = state_32495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32495__$1,(15),out,inst_32483);
} else {
if((state_val_32496 === (2))){
var state_32495__$1 = state_32495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32495__$1,(4),ch);
} else {
if((state_val_32496 === (11))){
var inst_32459 = (state_32495[(9)]);
var inst_32463 = (state_32495[(10)]);
var inst_32473 = (state_32495[(2)]);
var inst_32474 = [];
var inst_32475 = inst_32474.push(inst_32459);
var inst_32455 = inst_32474;
var inst_32456 = inst_32463;
var state_32495__$1 = (function (){var statearr_32507 = state_32495;
(statearr_32507[(11)] = inst_32475);

(statearr_32507[(12)] = inst_32473);

(statearr_32507[(7)] = inst_32455);

(statearr_32507[(8)] = inst_32456);

return statearr_32507;
})();
var statearr_32508_32538 = state_32495__$1;
(statearr_32508_32538[(2)] = null);

(statearr_32508_32538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32496 === (9))){
var inst_32455 = (state_32495[(7)]);
var inst_32471 = cljs.core.vec.call(null,inst_32455);
var state_32495__$1 = state_32495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32495__$1,(11),out,inst_32471);
} else {
if((state_val_32496 === (5))){
var inst_32459 = (state_32495[(9)]);
var inst_32463 = (state_32495[(10)]);
var inst_32456 = (state_32495[(8)]);
var inst_32463__$1 = f.call(null,inst_32459);
var inst_32464 = cljs.core._EQ_.call(null,inst_32463__$1,inst_32456);
var inst_32465 = cljs.core.keyword_identical_QMARK_.call(null,inst_32456,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32466 = (inst_32464) || (inst_32465);
var state_32495__$1 = (function (){var statearr_32509 = state_32495;
(statearr_32509[(10)] = inst_32463__$1);

return statearr_32509;
})();
if(cljs.core.truth_(inst_32466)){
var statearr_32510_32539 = state_32495__$1;
(statearr_32510_32539[(1)] = (8));

} else {
var statearr_32511_32540 = state_32495__$1;
(statearr_32511_32540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32496 === (14))){
var inst_32488 = (state_32495[(2)]);
var inst_32489 = cljs.core.async.close_BANG_.call(null,out);
var state_32495__$1 = (function (){var statearr_32513 = state_32495;
(statearr_32513[(13)] = inst_32488);

return statearr_32513;
})();
var statearr_32514_32541 = state_32495__$1;
(statearr_32514_32541[(2)] = inst_32489);

(statearr_32514_32541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32496 === (10))){
var inst_32478 = (state_32495[(2)]);
var state_32495__$1 = state_32495;
var statearr_32515_32542 = state_32495__$1;
(statearr_32515_32542[(2)] = inst_32478);

(statearr_32515_32542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32496 === (8))){
var inst_32459 = (state_32495[(9)]);
var inst_32463 = (state_32495[(10)]);
var inst_32455 = (state_32495[(7)]);
var inst_32468 = inst_32455.push(inst_32459);
var tmp32512 = inst_32455;
var inst_32455__$1 = tmp32512;
var inst_32456 = inst_32463;
var state_32495__$1 = (function (){var statearr_32516 = state_32495;
(statearr_32516[(14)] = inst_32468);

(statearr_32516[(7)] = inst_32455__$1);

(statearr_32516[(8)] = inst_32456);

return statearr_32516;
})();
var statearr_32517_32543 = state_32495__$1;
(statearr_32517_32543[(2)] = null);

(statearr_32517_32543[(1)] = (2));


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
});})(c__29774__auto___32529,out))
;
return ((function (switch__29662__auto__,c__29774__auto___32529,out){
return (function() {
var cljs$core$async$state_machine__29663__auto__ = null;
var cljs$core$async$state_machine__29663__auto____0 = (function (){
var statearr_32521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32521[(0)] = cljs$core$async$state_machine__29663__auto__);

(statearr_32521[(1)] = (1));

return statearr_32521;
});
var cljs$core$async$state_machine__29663__auto____1 = (function (state_32495){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_32495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e32522){if((e32522 instanceof Object)){
var ex__29666__auto__ = e32522;
var statearr_32523_32544 = state_32495;
(statearr_32523_32544[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32545 = state_32495;
state_32495 = G__32545;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
cljs$core$async$state_machine__29663__auto__ = function(state_32495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29663__auto____1.call(this,state_32495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29663__auto____0;
cljs$core$async$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29663__auto____1;
return cljs$core$async$state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto___32529,out))
})();
var state__29776__auto__ = (function (){var statearr_32524 = f__29775__auto__.call(null);
(statearr_32524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___32529);

return statearr_32524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto___32529,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map