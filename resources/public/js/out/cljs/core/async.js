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
var args28265 = [];
var len__25159__auto___28271 = arguments.length;
var i__25160__auto___28272 = (0);
while(true){
if((i__25160__auto___28272 < len__25159__auto___28271)){
args28265.push((arguments[i__25160__auto___28272]));

var G__28273 = (i__25160__auto___28272 + (1));
i__25160__auto___28272 = G__28273;
continue;
} else {
}
break;
}

var G__28267 = args28265.length;
switch (G__28267) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28265.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28268 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28268 = (function (f,blockable,meta28269){
this.f = f;
this.blockable = blockable;
this.meta28269 = meta28269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28270,meta28269__$1){
var self__ = this;
var _28270__$1 = this;
return (new cljs.core.async.t_cljs$core$async28268(self__.f,self__.blockable,meta28269__$1));
});

cljs.core.async.t_cljs$core$async28268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28270){
var self__ = this;
var _28270__$1 = this;
return self__.meta28269;
});

cljs.core.async.t_cljs$core$async28268.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28268.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28268.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28268.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28268.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28269","meta28269",1151629333,null)], null);
});

cljs.core.async.t_cljs$core$async28268.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28268";

cljs.core.async.t_cljs$core$async28268.cljs$lang$ctorPrWriter = (function (this__24695__auto__,writer__24696__auto__,opt__24697__auto__){
return cljs.core._write.call(null,writer__24696__auto__,"cljs.core.async/t_cljs$core$async28268");
});

cljs.core.async.__GT_t_cljs$core$async28268 = (function cljs$core$async$__GT_t_cljs$core$async28268(f__$1,blockable__$1,meta28269){
return (new cljs.core.async.t_cljs$core$async28268(f__$1,blockable__$1,meta28269));
});

}

return (new cljs.core.async.t_cljs$core$async28268(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args28277 = [];
var len__25159__auto___28280 = arguments.length;
var i__25160__auto___28281 = (0);
while(true){
if((i__25160__auto___28281 < len__25159__auto___28280)){
args28277.push((arguments[i__25160__auto___28281]));

var G__28282 = (i__25160__auto___28281 + (1));
i__25160__auto___28281 = G__28282;
continue;
} else {
}
break;
}

var G__28279 = args28277.length;
switch (G__28279) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28277.length)].join('')));

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
var args28284 = [];
var len__25159__auto___28287 = arguments.length;
var i__25160__auto___28288 = (0);
while(true){
if((i__25160__auto___28288 < len__25159__auto___28287)){
args28284.push((arguments[i__25160__auto___28288]));

var G__28289 = (i__25160__auto___28288 + (1));
i__25160__auto___28288 = G__28289;
continue;
} else {
}
break;
}

var G__28286 = args28284.length;
switch (G__28286) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28284.length)].join('')));

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
var args28291 = [];
var len__25159__auto___28294 = arguments.length;
var i__25160__auto___28295 = (0);
while(true){
if((i__25160__auto___28295 < len__25159__auto___28294)){
args28291.push((arguments[i__25160__auto___28295]));

var G__28296 = (i__25160__auto___28295 + (1));
i__25160__auto___28295 = G__28296;
continue;
} else {
}
break;
}

var G__28293 = args28291.length;
switch (G__28293) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28291.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28298 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28298);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28298,ret){
return (function (){
return fn1.call(null,val_28298);
});})(val_28298,ret))
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
var args28299 = [];
var len__25159__auto___28302 = arguments.length;
var i__25160__auto___28303 = (0);
while(true){
if((i__25160__auto___28303 < len__25159__auto___28302)){
args28299.push((arguments[i__25160__auto___28303]));

var G__28304 = (i__25160__auto___28303 + (1));
i__25160__auto___28303 = G__28304;
continue;
} else {
}
break;
}

var G__28301 = args28299.length;
switch (G__28301) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28299.length)].join('')));

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
var n__25004__auto___28306 = n;
var x_28307 = (0);
while(true){
if((x_28307 < n__25004__auto___28306)){
(a[x_28307] = (0));

var G__28308 = (x_28307 + (1));
x_28307 = G__28308;
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

var G__28309 = (i + (1));
i = G__28309;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28313 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28313 = (function (alt_flag,flag,meta28314){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28314 = meta28314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28315,meta28314__$1){
var self__ = this;
var _28315__$1 = this;
return (new cljs.core.async.t_cljs$core$async28313(self__.alt_flag,self__.flag,meta28314__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28315){
var self__ = this;
var _28315__$1 = this;
return self__.meta28314;
});})(flag))
;

cljs.core.async.t_cljs$core$async28313.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28313.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28313.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28313.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28313.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28314","meta28314",-313929387,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28313.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28313";

cljs.core.async.t_cljs$core$async28313.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__24695__auto__,writer__24696__auto__,opt__24697__auto__){
return cljs.core._write.call(null,writer__24696__auto__,"cljs.core.async/t_cljs$core$async28313");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28313 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28313(alt_flag__$1,flag__$1,meta28314){
return (new cljs.core.async.t_cljs$core$async28313(alt_flag__$1,flag__$1,meta28314));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28313(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28319 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28319 = (function (alt_handler,flag,cb,meta28320){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28320 = meta28320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28321,meta28320__$1){
var self__ = this;
var _28321__$1 = this;
return (new cljs.core.async.t_cljs$core$async28319(self__.alt_handler,self__.flag,self__.cb,meta28320__$1));
});

cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28321){
var self__ = this;
var _28321__$1 = this;
return self__.meta28320;
});

cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28319.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28320","meta28320",58959287,null)], null);
});

cljs.core.async.t_cljs$core$async28319.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28319";

cljs.core.async.t_cljs$core$async28319.cljs$lang$ctorPrWriter = (function (this__24695__auto__,writer__24696__auto__,opt__24697__auto__){
return cljs.core._write.call(null,writer__24696__auto__,"cljs.core.async/t_cljs$core$async28319");
});

cljs.core.async.__GT_t_cljs$core$async28319 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28319(alt_handler__$1,flag__$1,cb__$1,meta28320){
return (new cljs.core.async.t_cljs$core$async28319(alt_handler__$1,flag__$1,cb__$1,meta28320));
});

}

return (new cljs.core.async.t_cljs$core$async28319(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28322_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28322_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28323_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28323_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24089__auto__ = wport;
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28324 = (i + (1));
i = G__28324;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24089__auto__ = ret;
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__24077__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24077__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24077__auto__;
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
var args__25166__auto__ = [];
var len__25159__auto___28330 = arguments.length;
var i__25160__auto___28331 = (0);
while(true){
if((i__25160__auto___28331 < len__25159__auto___28330)){
args__25166__auto__.push((arguments[i__25160__auto___28331]));

var G__28332 = (i__25160__auto___28331 + (1));
i__25160__auto___28331 = G__28332;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28327){
var map__28328 = p__28327;
var map__28328__$1 = ((((!((map__28328 == null)))?((((map__28328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28328):map__28328);
var opts = map__28328__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28325){
var G__28326 = cljs.core.first.call(null,seq28325);
var seq28325__$1 = cljs.core.next.call(null,seq28325);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28326,seq28325__$1);
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
var args28333 = [];
var len__25159__auto___28383 = arguments.length;
var i__25160__auto___28384 = (0);
while(true){
if((i__25160__auto___28384 < len__25159__auto___28383)){
args28333.push((arguments[i__25160__auto___28384]));

var G__28385 = (i__25160__auto___28384 + (1));
i__25160__auto___28384 = G__28385;
continue;
} else {
}
break;
}

var G__28335 = args28333.length;
switch (G__28335) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28333.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28220__auto___28387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto___28387){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto___28387){
return (function (state_28359){
var state_val_28360 = (state_28359[(1)]);
if((state_val_28360 === (7))){
var inst_28355 = (state_28359[(2)]);
var state_28359__$1 = state_28359;
var statearr_28361_28388 = state_28359__$1;
(statearr_28361_28388[(2)] = inst_28355);

(statearr_28361_28388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28360 === (1))){
var state_28359__$1 = state_28359;
var statearr_28362_28389 = state_28359__$1;
(statearr_28362_28389[(2)] = null);

(statearr_28362_28389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28360 === (4))){
var inst_28338 = (state_28359[(7)]);
var inst_28338__$1 = (state_28359[(2)]);
var inst_28339 = (inst_28338__$1 == null);
var state_28359__$1 = (function (){var statearr_28363 = state_28359;
(statearr_28363[(7)] = inst_28338__$1);

return statearr_28363;
})();
if(cljs.core.truth_(inst_28339)){
var statearr_28364_28390 = state_28359__$1;
(statearr_28364_28390[(1)] = (5));

} else {
var statearr_28365_28391 = state_28359__$1;
(statearr_28365_28391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28360 === (13))){
var state_28359__$1 = state_28359;
var statearr_28366_28392 = state_28359__$1;
(statearr_28366_28392[(2)] = null);

(statearr_28366_28392[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28360 === (6))){
var inst_28338 = (state_28359[(7)]);
var state_28359__$1 = state_28359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28359__$1,(11),to,inst_28338);
} else {
if((state_val_28360 === (3))){
var inst_28357 = (state_28359[(2)]);
var state_28359__$1 = state_28359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28359__$1,inst_28357);
} else {
if((state_val_28360 === (12))){
var state_28359__$1 = state_28359;
var statearr_28367_28393 = state_28359__$1;
(statearr_28367_28393[(2)] = null);

(statearr_28367_28393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28360 === (2))){
var state_28359__$1 = state_28359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28359__$1,(4),from);
} else {
if((state_val_28360 === (11))){
var inst_28348 = (state_28359[(2)]);
var state_28359__$1 = state_28359;
if(cljs.core.truth_(inst_28348)){
var statearr_28368_28394 = state_28359__$1;
(statearr_28368_28394[(1)] = (12));

} else {
var statearr_28369_28395 = state_28359__$1;
(statearr_28369_28395[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28360 === (9))){
var state_28359__$1 = state_28359;
var statearr_28370_28396 = state_28359__$1;
(statearr_28370_28396[(2)] = null);

(statearr_28370_28396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28360 === (5))){
var state_28359__$1 = state_28359;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28371_28397 = state_28359__$1;
(statearr_28371_28397[(1)] = (8));

} else {
var statearr_28372_28398 = state_28359__$1;
(statearr_28372_28398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28360 === (14))){
var inst_28353 = (state_28359[(2)]);
var state_28359__$1 = state_28359;
var statearr_28373_28399 = state_28359__$1;
(statearr_28373_28399[(2)] = inst_28353);

(statearr_28373_28399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28360 === (10))){
var inst_28345 = (state_28359[(2)]);
var state_28359__$1 = state_28359;
var statearr_28374_28400 = state_28359__$1;
(statearr_28374_28400[(2)] = inst_28345);

(statearr_28374_28400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28360 === (8))){
var inst_28342 = cljs.core.async.close_BANG_.call(null,to);
var state_28359__$1 = state_28359;
var statearr_28375_28401 = state_28359__$1;
(statearr_28375_28401[(2)] = inst_28342);

(statearr_28375_28401[(1)] = (10));


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
});})(c__28220__auto___28387))
;
return ((function (switch__28108__auto__,c__28220__auto___28387){
return (function() {
var cljs$core$async$state_machine__28109__auto__ = null;
var cljs$core$async$state_machine__28109__auto____0 = (function (){
var statearr_28379 = [null,null,null,null,null,null,null,null];
(statearr_28379[(0)] = cljs$core$async$state_machine__28109__auto__);

(statearr_28379[(1)] = (1));

return statearr_28379;
});
var cljs$core$async$state_machine__28109__auto____1 = (function (state_28359){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_28359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e28380){if((e28380 instanceof Object)){
var ex__28112__auto__ = e28380;
var statearr_28381_28402 = state_28359;
(statearr_28381_28402[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28403 = state_28359;
state_28359 = G__28403;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
cljs$core$async$state_machine__28109__auto__ = function(state_28359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28109__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28109__auto____1.call(this,state_28359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28109__auto____0;
cljs$core$async$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28109__auto____1;
return cljs$core$async$state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto___28387))
})();
var state__28222__auto__ = (function (){var statearr_28382 = f__28221__auto__.call(null);
(statearr_28382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___28387);

return statearr_28382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto___28387))
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
return (function (p__28587){
var vec__28588 = p__28587;
var v = cljs.core.nth.call(null,vec__28588,(0),null);
var p = cljs.core.nth.call(null,vec__28588,(1),null);
var job = vec__28588;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28220__auto___28770 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto___28770,res,vec__28588,v,p,job,jobs,results){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto___28770,res,vec__28588,v,p,job,jobs,results){
return (function (state_28593){
var state_val_28594 = (state_28593[(1)]);
if((state_val_28594 === (1))){
var state_28593__$1 = state_28593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28593__$1,(2),res,v);
} else {
if((state_val_28594 === (2))){
var inst_28590 = (state_28593[(2)]);
var inst_28591 = cljs.core.async.close_BANG_.call(null,res);
var state_28593__$1 = (function (){var statearr_28595 = state_28593;
(statearr_28595[(7)] = inst_28590);

return statearr_28595;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28593__$1,inst_28591);
} else {
return null;
}
}
});})(c__28220__auto___28770,res,vec__28588,v,p,job,jobs,results))
;
return ((function (switch__28108__auto__,c__28220__auto___28770,res,vec__28588,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____0 = (function (){
var statearr_28599 = [null,null,null,null,null,null,null,null];
(statearr_28599[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__);

(statearr_28599[(1)] = (1));

return statearr_28599;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____1 = (function (state_28593){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_28593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e28600){if((e28600 instanceof Object)){
var ex__28112__auto__ = e28600;
var statearr_28601_28771 = state_28593;
(statearr_28601_28771[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28772 = state_28593;
state_28593 = G__28772;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__ = function(state_28593){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____1.call(this,state_28593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto___28770,res,vec__28588,v,p,job,jobs,results))
})();
var state__28222__auto__ = (function (){var statearr_28602 = f__28221__auto__.call(null);
(statearr_28602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___28770);

return statearr_28602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto___28770,res,vec__28588,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28603){
var vec__28604 = p__28603;
var v = cljs.core.nth.call(null,vec__28604,(0),null);
var p = cljs.core.nth.call(null,vec__28604,(1),null);
var job = vec__28604;
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
var n__25004__auto___28773 = n;
var __28774 = (0);
while(true){
if((__28774 < n__25004__auto___28773)){
var G__28605_28775 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28605_28775) {
case "compute":
var c__28220__auto___28777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28774,c__28220__auto___28777,G__28605_28775,n__25004__auto___28773,jobs,results,process,async){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (__28774,c__28220__auto___28777,G__28605_28775,n__25004__auto___28773,jobs,results,process,async){
return (function (state_28618){
var state_val_28619 = (state_28618[(1)]);
if((state_val_28619 === (1))){
var state_28618__$1 = state_28618;
var statearr_28620_28778 = state_28618__$1;
(statearr_28620_28778[(2)] = null);

(statearr_28620_28778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28619 === (2))){
var state_28618__$1 = state_28618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28618__$1,(4),jobs);
} else {
if((state_val_28619 === (3))){
var inst_28616 = (state_28618[(2)]);
var state_28618__$1 = state_28618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28618__$1,inst_28616);
} else {
if((state_val_28619 === (4))){
var inst_28608 = (state_28618[(2)]);
var inst_28609 = process.call(null,inst_28608);
var state_28618__$1 = state_28618;
if(cljs.core.truth_(inst_28609)){
var statearr_28621_28779 = state_28618__$1;
(statearr_28621_28779[(1)] = (5));

} else {
var statearr_28622_28780 = state_28618__$1;
(statearr_28622_28780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28619 === (5))){
var state_28618__$1 = state_28618;
var statearr_28623_28781 = state_28618__$1;
(statearr_28623_28781[(2)] = null);

(statearr_28623_28781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28619 === (6))){
var state_28618__$1 = state_28618;
var statearr_28624_28782 = state_28618__$1;
(statearr_28624_28782[(2)] = null);

(statearr_28624_28782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28619 === (7))){
var inst_28614 = (state_28618[(2)]);
var state_28618__$1 = state_28618;
var statearr_28625_28783 = state_28618__$1;
(statearr_28625_28783[(2)] = inst_28614);

(statearr_28625_28783[(1)] = (3));


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
});})(__28774,c__28220__auto___28777,G__28605_28775,n__25004__auto___28773,jobs,results,process,async))
;
return ((function (__28774,switch__28108__auto__,c__28220__auto___28777,G__28605_28775,n__25004__auto___28773,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____0 = (function (){
var statearr_28629 = [null,null,null,null,null,null,null];
(statearr_28629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__);

(statearr_28629[(1)] = (1));

return statearr_28629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____1 = (function (state_28618){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_28618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e28630){if((e28630 instanceof Object)){
var ex__28112__auto__ = e28630;
var statearr_28631_28784 = state_28618;
(statearr_28631_28784[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28785 = state_28618;
state_28618 = G__28785;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__ = function(state_28618){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____1.call(this,state_28618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__;
})()
;})(__28774,switch__28108__auto__,c__28220__auto___28777,G__28605_28775,n__25004__auto___28773,jobs,results,process,async))
})();
var state__28222__auto__ = (function (){var statearr_28632 = f__28221__auto__.call(null);
(statearr_28632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___28777);

return statearr_28632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(__28774,c__28220__auto___28777,G__28605_28775,n__25004__auto___28773,jobs,results,process,async))
);


break;
case "async":
var c__28220__auto___28786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28774,c__28220__auto___28786,G__28605_28775,n__25004__auto___28773,jobs,results,process,async){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (__28774,c__28220__auto___28786,G__28605_28775,n__25004__auto___28773,jobs,results,process,async){
return (function (state_28645){
var state_val_28646 = (state_28645[(1)]);
if((state_val_28646 === (1))){
var state_28645__$1 = state_28645;
var statearr_28647_28787 = state_28645__$1;
(statearr_28647_28787[(2)] = null);

(statearr_28647_28787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28646 === (2))){
var state_28645__$1 = state_28645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28645__$1,(4),jobs);
} else {
if((state_val_28646 === (3))){
var inst_28643 = (state_28645[(2)]);
var state_28645__$1 = state_28645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28645__$1,inst_28643);
} else {
if((state_val_28646 === (4))){
var inst_28635 = (state_28645[(2)]);
var inst_28636 = async.call(null,inst_28635);
var state_28645__$1 = state_28645;
if(cljs.core.truth_(inst_28636)){
var statearr_28648_28788 = state_28645__$1;
(statearr_28648_28788[(1)] = (5));

} else {
var statearr_28649_28789 = state_28645__$1;
(statearr_28649_28789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28646 === (5))){
var state_28645__$1 = state_28645;
var statearr_28650_28790 = state_28645__$1;
(statearr_28650_28790[(2)] = null);

(statearr_28650_28790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28646 === (6))){
var state_28645__$1 = state_28645;
var statearr_28651_28791 = state_28645__$1;
(statearr_28651_28791[(2)] = null);

(statearr_28651_28791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28646 === (7))){
var inst_28641 = (state_28645[(2)]);
var state_28645__$1 = state_28645;
var statearr_28652_28792 = state_28645__$1;
(statearr_28652_28792[(2)] = inst_28641);

(statearr_28652_28792[(1)] = (3));


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
});})(__28774,c__28220__auto___28786,G__28605_28775,n__25004__auto___28773,jobs,results,process,async))
;
return ((function (__28774,switch__28108__auto__,c__28220__auto___28786,G__28605_28775,n__25004__auto___28773,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____0 = (function (){
var statearr_28656 = [null,null,null,null,null,null,null];
(statearr_28656[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__);

(statearr_28656[(1)] = (1));

return statearr_28656;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____1 = (function (state_28645){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_28645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e28657){if((e28657 instanceof Object)){
var ex__28112__auto__ = e28657;
var statearr_28658_28793 = state_28645;
(statearr_28658_28793[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28794 = state_28645;
state_28645 = G__28794;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__ = function(state_28645){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____1.call(this,state_28645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__;
})()
;})(__28774,switch__28108__auto__,c__28220__auto___28786,G__28605_28775,n__25004__auto___28773,jobs,results,process,async))
})();
var state__28222__auto__ = (function (){var statearr_28659 = f__28221__auto__.call(null);
(statearr_28659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___28786);

return statearr_28659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(__28774,c__28220__auto___28786,G__28605_28775,n__25004__auto___28773,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28795 = (__28774 + (1));
__28774 = G__28795;
continue;
} else {
}
break;
}

var c__28220__auto___28796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto___28796,jobs,results,process,async){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto___28796,jobs,results,process,async){
return (function (state_28681){
var state_val_28682 = (state_28681[(1)]);
if((state_val_28682 === (1))){
var state_28681__$1 = state_28681;
var statearr_28683_28797 = state_28681__$1;
(statearr_28683_28797[(2)] = null);

(statearr_28683_28797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28682 === (2))){
var state_28681__$1 = state_28681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28681__$1,(4),from);
} else {
if((state_val_28682 === (3))){
var inst_28679 = (state_28681[(2)]);
var state_28681__$1 = state_28681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28681__$1,inst_28679);
} else {
if((state_val_28682 === (4))){
var inst_28662 = (state_28681[(7)]);
var inst_28662__$1 = (state_28681[(2)]);
var inst_28663 = (inst_28662__$1 == null);
var state_28681__$1 = (function (){var statearr_28684 = state_28681;
(statearr_28684[(7)] = inst_28662__$1);

return statearr_28684;
})();
if(cljs.core.truth_(inst_28663)){
var statearr_28685_28798 = state_28681__$1;
(statearr_28685_28798[(1)] = (5));

} else {
var statearr_28686_28799 = state_28681__$1;
(statearr_28686_28799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28682 === (5))){
var inst_28665 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28681__$1 = state_28681;
var statearr_28687_28800 = state_28681__$1;
(statearr_28687_28800[(2)] = inst_28665);

(statearr_28687_28800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28682 === (6))){
var inst_28662 = (state_28681[(7)]);
var inst_28667 = (state_28681[(8)]);
var inst_28667__$1 = cljs.core.async.chan.call(null,(1));
var inst_28668 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28669 = [inst_28662,inst_28667__$1];
var inst_28670 = (new cljs.core.PersistentVector(null,2,(5),inst_28668,inst_28669,null));
var state_28681__$1 = (function (){var statearr_28688 = state_28681;
(statearr_28688[(8)] = inst_28667__$1);

return statearr_28688;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28681__$1,(8),jobs,inst_28670);
} else {
if((state_val_28682 === (7))){
var inst_28677 = (state_28681[(2)]);
var state_28681__$1 = state_28681;
var statearr_28689_28801 = state_28681__$1;
(statearr_28689_28801[(2)] = inst_28677);

(statearr_28689_28801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28682 === (8))){
var inst_28667 = (state_28681[(8)]);
var inst_28672 = (state_28681[(2)]);
var state_28681__$1 = (function (){var statearr_28690 = state_28681;
(statearr_28690[(9)] = inst_28672);

return statearr_28690;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28681__$1,(9),results,inst_28667);
} else {
if((state_val_28682 === (9))){
var inst_28674 = (state_28681[(2)]);
var state_28681__$1 = (function (){var statearr_28691 = state_28681;
(statearr_28691[(10)] = inst_28674);

return statearr_28691;
})();
var statearr_28692_28802 = state_28681__$1;
(statearr_28692_28802[(2)] = null);

(statearr_28692_28802[(1)] = (2));


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
});})(c__28220__auto___28796,jobs,results,process,async))
;
return ((function (switch__28108__auto__,c__28220__auto___28796,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____0 = (function (){
var statearr_28696 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28696[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__);

(statearr_28696[(1)] = (1));

return statearr_28696;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____1 = (function (state_28681){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_28681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e28697){if((e28697 instanceof Object)){
var ex__28112__auto__ = e28697;
var statearr_28698_28803 = state_28681;
(statearr_28698_28803[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28804 = state_28681;
state_28681 = G__28804;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__ = function(state_28681){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____1.call(this,state_28681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto___28796,jobs,results,process,async))
})();
var state__28222__auto__ = (function (){var statearr_28699 = f__28221__auto__.call(null);
(statearr_28699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___28796);

return statearr_28699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto___28796,jobs,results,process,async))
);


var c__28220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto__,jobs,results,process,async){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto__,jobs,results,process,async){
return (function (state_28737){
var state_val_28738 = (state_28737[(1)]);
if((state_val_28738 === (7))){
var inst_28733 = (state_28737[(2)]);
var state_28737__$1 = state_28737;
var statearr_28739_28805 = state_28737__$1;
(statearr_28739_28805[(2)] = inst_28733);

(statearr_28739_28805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (20))){
var state_28737__$1 = state_28737;
var statearr_28740_28806 = state_28737__$1;
(statearr_28740_28806[(2)] = null);

(statearr_28740_28806[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (1))){
var state_28737__$1 = state_28737;
var statearr_28741_28807 = state_28737__$1;
(statearr_28741_28807[(2)] = null);

(statearr_28741_28807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (4))){
var inst_28702 = (state_28737[(7)]);
var inst_28702__$1 = (state_28737[(2)]);
var inst_28703 = (inst_28702__$1 == null);
var state_28737__$1 = (function (){var statearr_28742 = state_28737;
(statearr_28742[(7)] = inst_28702__$1);

return statearr_28742;
})();
if(cljs.core.truth_(inst_28703)){
var statearr_28743_28808 = state_28737__$1;
(statearr_28743_28808[(1)] = (5));

} else {
var statearr_28744_28809 = state_28737__$1;
(statearr_28744_28809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (15))){
var inst_28715 = (state_28737[(8)]);
var state_28737__$1 = state_28737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28737__$1,(18),to,inst_28715);
} else {
if((state_val_28738 === (21))){
var inst_28728 = (state_28737[(2)]);
var state_28737__$1 = state_28737;
var statearr_28745_28810 = state_28737__$1;
(statearr_28745_28810[(2)] = inst_28728);

(statearr_28745_28810[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (13))){
var inst_28730 = (state_28737[(2)]);
var state_28737__$1 = (function (){var statearr_28746 = state_28737;
(statearr_28746[(9)] = inst_28730);

return statearr_28746;
})();
var statearr_28747_28811 = state_28737__$1;
(statearr_28747_28811[(2)] = null);

(statearr_28747_28811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (6))){
var inst_28702 = (state_28737[(7)]);
var state_28737__$1 = state_28737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28737__$1,(11),inst_28702);
} else {
if((state_val_28738 === (17))){
var inst_28723 = (state_28737[(2)]);
var state_28737__$1 = state_28737;
if(cljs.core.truth_(inst_28723)){
var statearr_28748_28812 = state_28737__$1;
(statearr_28748_28812[(1)] = (19));

} else {
var statearr_28749_28813 = state_28737__$1;
(statearr_28749_28813[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (3))){
var inst_28735 = (state_28737[(2)]);
var state_28737__$1 = state_28737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28737__$1,inst_28735);
} else {
if((state_val_28738 === (12))){
var inst_28712 = (state_28737[(10)]);
var state_28737__$1 = state_28737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28737__$1,(14),inst_28712);
} else {
if((state_val_28738 === (2))){
var state_28737__$1 = state_28737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28737__$1,(4),results);
} else {
if((state_val_28738 === (19))){
var state_28737__$1 = state_28737;
var statearr_28750_28814 = state_28737__$1;
(statearr_28750_28814[(2)] = null);

(statearr_28750_28814[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (11))){
var inst_28712 = (state_28737[(2)]);
var state_28737__$1 = (function (){var statearr_28751 = state_28737;
(statearr_28751[(10)] = inst_28712);

return statearr_28751;
})();
var statearr_28752_28815 = state_28737__$1;
(statearr_28752_28815[(2)] = null);

(statearr_28752_28815[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (9))){
var state_28737__$1 = state_28737;
var statearr_28753_28816 = state_28737__$1;
(statearr_28753_28816[(2)] = null);

(statearr_28753_28816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (5))){
var state_28737__$1 = state_28737;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28754_28817 = state_28737__$1;
(statearr_28754_28817[(1)] = (8));

} else {
var statearr_28755_28818 = state_28737__$1;
(statearr_28755_28818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (14))){
var inst_28715 = (state_28737[(8)]);
var inst_28717 = (state_28737[(11)]);
var inst_28715__$1 = (state_28737[(2)]);
var inst_28716 = (inst_28715__$1 == null);
var inst_28717__$1 = cljs.core.not.call(null,inst_28716);
var state_28737__$1 = (function (){var statearr_28756 = state_28737;
(statearr_28756[(8)] = inst_28715__$1);

(statearr_28756[(11)] = inst_28717__$1);

return statearr_28756;
})();
if(inst_28717__$1){
var statearr_28757_28819 = state_28737__$1;
(statearr_28757_28819[(1)] = (15));

} else {
var statearr_28758_28820 = state_28737__$1;
(statearr_28758_28820[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (16))){
var inst_28717 = (state_28737[(11)]);
var state_28737__$1 = state_28737;
var statearr_28759_28821 = state_28737__$1;
(statearr_28759_28821[(2)] = inst_28717);

(statearr_28759_28821[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (10))){
var inst_28709 = (state_28737[(2)]);
var state_28737__$1 = state_28737;
var statearr_28760_28822 = state_28737__$1;
(statearr_28760_28822[(2)] = inst_28709);

(statearr_28760_28822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (18))){
var inst_28720 = (state_28737[(2)]);
var state_28737__$1 = state_28737;
var statearr_28761_28823 = state_28737__$1;
(statearr_28761_28823[(2)] = inst_28720);

(statearr_28761_28823[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28738 === (8))){
var inst_28706 = cljs.core.async.close_BANG_.call(null,to);
var state_28737__$1 = state_28737;
var statearr_28762_28824 = state_28737__$1;
(statearr_28762_28824[(2)] = inst_28706);

(statearr_28762_28824[(1)] = (10));


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
});})(c__28220__auto__,jobs,results,process,async))
;
return ((function (switch__28108__auto__,c__28220__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____0 = (function (){
var statearr_28766 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__);

(statearr_28766[(1)] = (1));

return statearr_28766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____1 = (function (state_28737){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_28737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e28767){if((e28767 instanceof Object)){
var ex__28112__auto__ = e28767;
var statearr_28768_28825 = state_28737;
(statearr_28768_28825[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28826 = state_28737;
state_28737 = G__28826;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__ = function(state_28737){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____1.call(this,state_28737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28109__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto__,jobs,results,process,async))
})();
var state__28222__auto__ = (function (){var statearr_28769 = f__28221__auto__.call(null);
(statearr_28769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto__);

return statearr_28769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto__,jobs,results,process,async))
);

return c__28220__auto__;
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
var args28827 = [];
var len__25159__auto___28830 = arguments.length;
var i__25160__auto___28831 = (0);
while(true){
if((i__25160__auto___28831 < len__25159__auto___28830)){
args28827.push((arguments[i__25160__auto___28831]));

var G__28832 = (i__25160__auto___28831 + (1));
i__25160__auto___28831 = G__28832;
continue;
} else {
}
break;
}

var G__28829 = args28827.length;
switch (G__28829) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28827.length)].join('')));

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
var args28834 = [];
var len__25159__auto___28837 = arguments.length;
var i__25160__auto___28838 = (0);
while(true){
if((i__25160__auto___28838 < len__25159__auto___28837)){
args28834.push((arguments[i__25160__auto___28838]));

var G__28839 = (i__25160__auto___28838 + (1));
i__25160__auto___28838 = G__28839;
continue;
} else {
}
break;
}

var G__28836 = args28834.length;
switch (G__28836) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28834.length)].join('')));

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
var args28841 = [];
var len__25159__auto___28894 = arguments.length;
var i__25160__auto___28895 = (0);
while(true){
if((i__25160__auto___28895 < len__25159__auto___28894)){
args28841.push((arguments[i__25160__auto___28895]));

var G__28896 = (i__25160__auto___28895 + (1));
i__25160__auto___28895 = G__28896;
continue;
} else {
}
break;
}

var G__28843 = args28841.length;
switch (G__28843) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28841.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28220__auto___28898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto___28898,tc,fc){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto___28898,tc,fc){
return (function (state_28869){
var state_val_28870 = (state_28869[(1)]);
if((state_val_28870 === (7))){
var inst_28865 = (state_28869[(2)]);
var state_28869__$1 = state_28869;
var statearr_28871_28899 = state_28869__$1;
(statearr_28871_28899[(2)] = inst_28865);

(statearr_28871_28899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28870 === (1))){
var state_28869__$1 = state_28869;
var statearr_28872_28900 = state_28869__$1;
(statearr_28872_28900[(2)] = null);

(statearr_28872_28900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28870 === (4))){
var inst_28846 = (state_28869[(7)]);
var inst_28846__$1 = (state_28869[(2)]);
var inst_28847 = (inst_28846__$1 == null);
var state_28869__$1 = (function (){var statearr_28873 = state_28869;
(statearr_28873[(7)] = inst_28846__$1);

return statearr_28873;
})();
if(cljs.core.truth_(inst_28847)){
var statearr_28874_28901 = state_28869__$1;
(statearr_28874_28901[(1)] = (5));

} else {
var statearr_28875_28902 = state_28869__$1;
(statearr_28875_28902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28870 === (13))){
var state_28869__$1 = state_28869;
var statearr_28876_28903 = state_28869__$1;
(statearr_28876_28903[(2)] = null);

(statearr_28876_28903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28870 === (6))){
var inst_28846 = (state_28869[(7)]);
var inst_28852 = p.call(null,inst_28846);
var state_28869__$1 = state_28869;
if(cljs.core.truth_(inst_28852)){
var statearr_28877_28904 = state_28869__$1;
(statearr_28877_28904[(1)] = (9));

} else {
var statearr_28878_28905 = state_28869__$1;
(statearr_28878_28905[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28870 === (3))){
var inst_28867 = (state_28869[(2)]);
var state_28869__$1 = state_28869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28869__$1,inst_28867);
} else {
if((state_val_28870 === (12))){
var state_28869__$1 = state_28869;
var statearr_28879_28906 = state_28869__$1;
(statearr_28879_28906[(2)] = null);

(statearr_28879_28906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28870 === (2))){
var state_28869__$1 = state_28869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28869__$1,(4),ch);
} else {
if((state_val_28870 === (11))){
var inst_28846 = (state_28869[(7)]);
var inst_28856 = (state_28869[(2)]);
var state_28869__$1 = state_28869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28869__$1,(8),inst_28856,inst_28846);
} else {
if((state_val_28870 === (9))){
var state_28869__$1 = state_28869;
var statearr_28880_28907 = state_28869__$1;
(statearr_28880_28907[(2)] = tc);

(statearr_28880_28907[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28870 === (5))){
var inst_28849 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28850 = cljs.core.async.close_BANG_.call(null,fc);
var state_28869__$1 = (function (){var statearr_28881 = state_28869;
(statearr_28881[(8)] = inst_28849);

return statearr_28881;
})();
var statearr_28882_28908 = state_28869__$1;
(statearr_28882_28908[(2)] = inst_28850);

(statearr_28882_28908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28870 === (14))){
var inst_28863 = (state_28869[(2)]);
var state_28869__$1 = state_28869;
var statearr_28883_28909 = state_28869__$1;
(statearr_28883_28909[(2)] = inst_28863);

(statearr_28883_28909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28870 === (10))){
var state_28869__$1 = state_28869;
var statearr_28884_28910 = state_28869__$1;
(statearr_28884_28910[(2)] = fc);

(statearr_28884_28910[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28870 === (8))){
var inst_28858 = (state_28869[(2)]);
var state_28869__$1 = state_28869;
if(cljs.core.truth_(inst_28858)){
var statearr_28885_28911 = state_28869__$1;
(statearr_28885_28911[(1)] = (12));

} else {
var statearr_28886_28912 = state_28869__$1;
(statearr_28886_28912[(1)] = (13));

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
});})(c__28220__auto___28898,tc,fc))
;
return ((function (switch__28108__auto__,c__28220__auto___28898,tc,fc){
return (function() {
var cljs$core$async$state_machine__28109__auto__ = null;
var cljs$core$async$state_machine__28109__auto____0 = (function (){
var statearr_28890 = [null,null,null,null,null,null,null,null,null];
(statearr_28890[(0)] = cljs$core$async$state_machine__28109__auto__);

(statearr_28890[(1)] = (1));

return statearr_28890;
});
var cljs$core$async$state_machine__28109__auto____1 = (function (state_28869){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_28869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e28891){if((e28891 instanceof Object)){
var ex__28112__auto__ = e28891;
var statearr_28892_28913 = state_28869;
(statearr_28892_28913[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28914 = state_28869;
state_28869 = G__28914;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
cljs$core$async$state_machine__28109__auto__ = function(state_28869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28109__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28109__auto____1.call(this,state_28869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28109__auto____0;
cljs$core$async$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28109__auto____1;
return cljs$core$async$state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto___28898,tc,fc))
})();
var state__28222__auto__ = (function (){var statearr_28893 = f__28221__auto__.call(null);
(statearr_28893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___28898);

return statearr_28893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto___28898,tc,fc))
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
var c__28220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto__){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto__){
return (function (state_28978){
var state_val_28979 = (state_28978[(1)]);
if((state_val_28979 === (7))){
var inst_28974 = (state_28978[(2)]);
var state_28978__$1 = state_28978;
var statearr_28980_29001 = state_28978__$1;
(statearr_28980_29001[(2)] = inst_28974);

(statearr_28980_29001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28979 === (1))){
var inst_28958 = init;
var state_28978__$1 = (function (){var statearr_28981 = state_28978;
(statearr_28981[(7)] = inst_28958);

return statearr_28981;
})();
var statearr_28982_29002 = state_28978__$1;
(statearr_28982_29002[(2)] = null);

(statearr_28982_29002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28979 === (4))){
var inst_28961 = (state_28978[(8)]);
var inst_28961__$1 = (state_28978[(2)]);
var inst_28962 = (inst_28961__$1 == null);
var state_28978__$1 = (function (){var statearr_28983 = state_28978;
(statearr_28983[(8)] = inst_28961__$1);

return statearr_28983;
})();
if(cljs.core.truth_(inst_28962)){
var statearr_28984_29003 = state_28978__$1;
(statearr_28984_29003[(1)] = (5));

} else {
var statearr_28985_29004 = state_28978__$1;
(statearr_28985_29004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28979 === (6))){
var inst_28958 = (state_28978[(7)]);
var inst_28961 = (state_28978[(8)]);
var inst_28965 = (state_28978[(9)]);
var inst_28965__$1 = f.call(null,inst_28958,inst_28961);
var inst_28966 = cljs.core.reduced_QMARK_.call(null,inst_28965__$1);
var state_28978__$1 = (function (){var statearr_28986 = state_28978;
(statearr_28986[(9)] = inst_28965__$1);

return statearr_28986;
})();
if(inst_28966){
var statearr_28987_29005 = state_28978__$1;
(statearr_28987_29005[(1)] = (8));

} else {
var statearr_28988_29006 = state_28978__$1;
(statearr_28988_29006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28979 === (3))){
var inst_28976 = (state_28978[(2)]);
var state_28978__$1 = state_28978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28978__$1,inst_28976);
} else {
if((state_val_28979 === (2))){
var state_28978__$1 = state_28978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28978__$1,(4),ch);
} else {
if((state_val_28979 === (9))){
var inst_28965 = (state_28978[(9)]);
var inst_28958 = inst_28965;
var state_28978__$1 = (function (){var statearr_28989 = state_28978;
(statearr_28989[(7)] = inst_28958);

return statearr_28989;
})();
var statearr_28990_29007 = state_28978__$1;
(statearr_28990_29007[(2)] = null);

(statearr_28990_29007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28979 === (5))){
var inst_28958 = (state_28978[(7)]);
var state_28978__$1 = state_28978;
var statearr_28991_29008 = state_28978__$1;
(statearr_28991_29008[(2)] = inst_28958);

(statearr_28991_29008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28979 === (10))){
var inst_28972 = (state_28978[(2)]);
var state_28978__$1 = state_28978;
var statearr_28992_29009 = state_28978__$1;
(statearr_28992_29009[(2)] = inst_28972);

(statearr_28992_29009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28979 === (8))){
var inst_28965 = (state_28978[(9)]);
var inst_28968 = cljs.core.deref.call(null,inst_28965);
var state_28978__$1 = state_28978;
var statearr_28993_29010 = state_28978__$1;
(statearr_28993_29010[(2)] = inst_28968);

(statearr_28993_29010[(1)] = (10));


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
});})(c__28220__auto__))
;
return ((function (switch__28108__auto__,c__28220__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28109__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28109__auto____0 = (function (){
var statearr_28997 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28997[(0)] = cljs$core$async$reduce_$_state_machine__28109__auto__);

(statearr_28997[(1)] = (1));

return statearr_28997;
});
var cljs$core$async$reduce_$_state_machine__28109__auto____1 = (function (state_28978){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_28978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e28998){if((e28998 instanceof Object)){
var ex__28112__auto__ = e28998;
var statearr_28999_29011 = state_28978;
(statearr_28999_29011[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29012 = state_28978;
state_28978 = G__29012;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28109__auto__ = function(state_28978){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28109__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28109__auto____1.call(this,state_28978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28109__auto____0;
cljs$core$async$reduce_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28109__auto____1;
return cljs$core$async$reduce_$_state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto__))
})();
var state__28222__auto__ = (function (){var statearr_29000 = f__28221__auto__.call(null);
(statearr_29000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto__);

return statearr_29000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto__))
);

return c__28220__auto__;
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
var args29013 = [];
var len__25159__auto___29065 = arguments.length;
var i__25160__auto___29066 = (0);
while(true){
if((i__25160__auto___29066 < len__25159__auto___29065)){
args29013.push((arguments[i__25160__auto___29066]));

var G__29067 = (i__25160__auto___29066 + (1));
i__25160__auto___29066 = G__29067;
continue;
} else {
}
break;
}

var G__29015 = args29013.length;
switch (G__29015) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29013.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto__){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto__){
return (function (state_29040){
var state_val_29041 = (state_29040[(1)]);
if((state_val_29041 === (7))){
var inst_29022 = (state_29040[(2)]);
var state_29040__$1 = state_29040;
var statearr_29042_29069 = state_29040__$1;
(statearr_29042_29069[(2)] = inst_29022);

(statearr_29042_29069[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (1))){
var inst_29016 = cljs.core.seq.call(null,coll);
var inst_29017 = inst_29016;
var state_29040__$1 = (function (){var statearr_29043 = state_29040;
(statearr_29043[(7)] = inst_29017);

return statearr_29043;
})();
var statearr_29044_29070 = state_29040__$1;
(statearr_29044_29070[(2)] = null);

(statearr_29044_29070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (4))){
var inst_29017 = (state_29040[(7)]);
var inst_29020 = cljs.core.first.call(null,inst_29017);
var state_29040__$1 = state_29040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29040__$1,(7),ch,inst_29020);
} else {
if((state_val_29041 === (13))){
var inst_29034 = (state_29040[(2)]);
var state_29040__$1 = state_29040;
var statearr_29045_29071 = state_29040__$1;
(statearr_29045_29071[(2)] = inst_29034);

(statearr_29045_29071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (6))){
var inst_29025 = (state_29040[(2)]);
var state_29040__$1 = state_29040;
if(cljs.core.truth_(inst_29025)){
var statearr_29046_29072 = state_29040__$1;
(statearr_29046_29072[(1)] = (8));

} else {
var statearr_29047_29073 = state_29040__$1;
(statearr_29047_29073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (3))){
var inst_29038 = (state_29040[(2)]);
var state_29040__$1 = state_29040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29040__$1,inst_29038);
} else {
if((state_val_29041 === (12))){
var state_29040__$1 = state_29040;
var statearr_29048_29074 = state_29040__$1;
(statearr_29048_29074[(2)] = null);

(statearr_29048_29074[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (2))){
var inst_29017 = (state_29040[(7)]);
var state_29040__$1 = state_29040;
if(cljs.core.truth_(inst_29017)){
var statearr_29049_29075 = state_29040__$1;
(statearr_29049_29075[(1)] = (4));

} else {
var statearr_29050_29076 = state_29040__$1;
(statearr_29050_29076[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (11))){
var inst_29031 = cljs.core.async.close_BANG_.call(null,ch);
var state_29040__$1 = state_29040;
var statearr_29051_29077 = state_29040__$1;
(statearr_29051_29077[(2)] = inst_29031);

(statearr_29051_29077[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (9))){
var state_29040__$1 = state_29040;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29052_29078 = state_29040__$1;
(statearr_29052_29078[(1)] = (11));

} else {
var statearr_29053_29079 = state_29040__$1;
(statearr_29053_29079[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (5))){
var inst_29017 = (state_29040[(7)]);
var state_29040__$1 = state_29040;
var statearr_29054_29080 = state_29040__$1;
(statearr_29054_29080[(2)] = inst_29017);

(statearr_29054_29080[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (10))){
var inst_29036 = (state_29040[(2)]);
var state_29040__$1 = state_29040;
var statearr_29055_29081 = state_29040__$1;
(statearr_29055_29081[(2)] = inst_29036);

(statearr_29055_29081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (8))){
var inst_29017 = (state_29040[(7)]);
var inst_29027 = cljs.core.next.call(null,inst_29017);
var inst_29017__$1 = inst_29027;
var state_29040__$1 = (function (){var statearr_29056 = state_29040;
(statearr_29056[(7)] = inst_29017__$1);

return statearr_29056;
})();
var statearr_29057_29082 = state_29040__$1;
(statearr_29057_29082[(2)] = null);

(statearr_29057_29082[(1)] = (2));


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
});})(c__28220__auto__))
;
return ((function (switch__28108__auto__,c__28220__auto__){
return (function() {
var cljs$core$async$state_machine__28109__auto__ = null;
var cljs$core$async$state_machine__28109__auto____0 = (function (){
var statearr_29061 = [null,null,null,null,null,null,null,null];
(statearr_29061[(0)] = cljs$core$async$state_machine__28109__auto__);

(statearr_29061[(1)] = (1));

return statearr_29061;
});
var cljs$core$async$state_machine__28109__auto____1 = (function (state_29040){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_29040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e29062){if((e29062 instanceof Object)){
var ex__28112__auto__ = e29062;
var statearr_29063_29083 = state_29040;
(statearr_29063_29083[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29084 = state_29040;
state_29040 = G__29084;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
cljs$core$async$state_machine__28109__auto__ = function(state_29040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28109__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28109__auto____1.call(this,state_29040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28109__auto____0;
cljs$core$async$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28109__auto____1;
return cljs$core$async$state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto__))
})();
var state__28222__auto__ = (function (){var statearr_29064 = f__28221__auto__.call(null);
(statearr_29064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto__);

return statearr_29064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto__))
);

return c__28220__auto__;
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
var x__24752__auto__ = (((_ == null))?null:_);
var m__24753__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__24752__auto__)]);
if(!((m__24753__auto__ == null))){
return m__24753__auto__.call(null,_);
} else {
var m__24753__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__24753__auto____$1 == null))){
return m__24753__auto____$1.call(null,_);
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
var x__24752__auto__ = (((m == null))?null:m);
var m__24753__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__24752__auto__)]);
if(!((m__24753__auto__ == null))){
return m__24753__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__24753__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__24753__auto____$1 == null))){
return m__24753__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__24752__auto__ = (((m == null))?null:m);
var m__24753__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__24752__auto__)]);
if(!((m__24753__auto__ == null))){
return m__24753__auto__.call(null,m,ch);
} else {
var m__24753__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__24753__auto____$1 == null))){
return m__24753__auto____$1.call(null,m,ch);
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
var x__24752__auto__ = (((m == null))?null:m);
var m__24753__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__24752__auto__)]);
if(!((m__24753__auto__ == null))){
return m__24753__auto__.call(null,m);
} else {
var m__24753__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__24753__auto____$1 == null))){
return m__24753__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async29306 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29306 = (function (mult,ch,cs,meta29307){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29307 = meta29307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29308,meta29307__$1){
var self__ = this;
var _29308__$1 = this;
return (new cljs.core.async.t_cljs$core$async29306(self__.mult,self__.ch,self__.cs,meta29307__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29308){
var self__ = this;
var _29308__$1 = this;
return self__.meta29307;
});})(cs))
;

cljs.core.async.t_cljs$core$async29306.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29306.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29306.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29306.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29306.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29306.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29306.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29307","meta29307",-381126219,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29306.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29306";

cljs.core.async.t_cljs$core$async29306.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__24695__auto__,writer__24696__auto__,opt__24697__auto__){
return cljs.core._write.call(null,writer__24696__auto__,"cljs.core.async/t_cljs$core$async29306");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29306 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29306(mult__$1,ch__$1,cs__$1,meta29307){
return (new cljs.core.async.t_cljs$core$async29306(mult__$1,ch__$1,cs__$1,meta29307));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29306(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28220__auto___29527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto___29527,cs,m,dchan,dctr,done){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto___29527,cs,m,dchan,dctr,done){
return (function (state_29439){
var state_val_29440 = (state_29439[(1)]);
if((state_val_29440 === (7))){
var inst_29435 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29441_29528 = state_29439__$1;
(statearr_29441_29528[(2)] = inst_29435);

(statearr_29441_29528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (20))){
var inst_29340 = (state_29439[(7)]);
var inst_29350 = cljs.core.first.call(null,inst_29340);
var inst_29351 = cljs.core.nth.call(null,inst_29350,(0),null);
var inst_29352 = cljs.core.nth.call(null,inst_29350,(1),null);
var state_29439__$1 = (function (){var statearr_29442 = state_29439;
(statearr_29442[(8)] = inst_29351);

return statearr_29442;
})();
if(cljs.core.truth_(inst_29352)){
var statearr_29443_29529 = state_29439__$1;
(statearr_29443_29529[(1)] = (22));

} else {
var statearr_29444_29530 = state_29439__$1;
(statearr_29444_29530[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (27))){
var inst_29311 = (state_29439[(9)]);
var inst_29387 = (state_29439[(10)]);
var inst_29382 = (state_29439[(11)]);
var inst_29380 = (state_29439[(12)]);
var inst_29387__$1 = cljs.core._nth.call(null,inst_29380,inst_29382);
var inst_29388 = cljs.core.async.put_BANG_.call(null,inst_29387__$1,inst_29311,done);
var state_29439__$1 = (function (){var statearr_29445 = state_29439;
(statearr_29445[(10)] = inst_29387__$1);

return statearr_29445;
})();
if(cljs.core.truth_(inst_29388)){
var statearr_29446_29531 = state_29439__$1;
(statearr_29446_29531[(1)] = (30));

} else {
var statearr_29447_29532 = state_29439__$1;
(statearr_29447_29532[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (1))){
var state_29439__$1 = state_29439;
var statearr_29448_29533 = state_29439__$1;
(statearr_29448_29533[(2)] = null);

(statearr_29448_29533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (24))){
var inst_29340 = (state_29439[(7)]);
var inst_29357 = (state_29439[(2)]);
var inst_29358 = cljs.core.next.call(null,inst_29340);
var inst_29320 = inst_29358;
var inst_29321 = null;
var inst_29322 = (0);
var inst_29323 = (0);
var state_29439__$1 = (function (){var statearr_29449 = state_29439;
(statearr_29449[(13)] = inst_29357);

(statearr_29449[(14)] = inst_29320);

(statearr_29449[(15)] = inst_29321);

(statearr_29449[(16)] = inst_29323);

(statearr_29449[(17)] = inst_29322);

return statearr_29449;
})();
var statearr_29450_29534 = state_29439__$1;
(statearr_29450_29534[(2)] = null);

(statearr_29450_29534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (39))){
var state_29439__$1 = state_29439;
var statearr_29454_29535 = state_29439__$1;
(statearr_29454_29535[(2)] = null);

(statearr_29454_29535[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (4))){
var inst_29311 = (state_29439[(9)]);
var inst_29311__$1 = (state_29439[(2)]);
var inst_29312 = (inst_29311__$1 == null);
var state_29439__$1 = (function (){var statearr_29455 = state_29439;
(statearr_29455[(9)] = inst_29311__$1);

return statearr_29455;
})();
if(cljs.core.truth_(inst_29312)){
var statearr_29456_29536 = state_29439__$1;
(statearr_29456_29536[(1)] = (5));

} else {
var statearr_29457_29537 = state_29439__$1;
(statearr_29457_29537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (15))){
var inst_29320 = (state_29439[(14)]);
var inst_29321 = (state_29439[(15)]);
var inst_29323 = (state_29439[(16)]);
var inst_29322 = (state_29439[(17)]);
var inst_29336 = (state_29439[(2)]);
var inst_29337 = (inst_29323 + (1));
var tmp29451 = inst_29320;
var tmp29452 = inst_29321;
var tmp29453 = inst_29322;
var inst_29320__$1 = tmp29451;
var inst_29321__$1 = tmp29452;
var inst_29322__$1 = tmp29453;
var inst_29323__$1 = inst_29337;
var state_29439__$1 = (function (){var statearr_29458 = state_29439;
(statearr_29458[(14)] = inst_29320__$1);

(statearr_29458[(18)] = inst_29336);

(statearr_29458[(15)] = inst_29321__$1);

(statearr_29458[(16)] = inst_29323__$1);

(statearr_29458[(17)] = inst_29322__$1);

return statearr_29458;
})();
var statearr_29459_29538 = state_29439__$1;
(statearr_29459_29538[(2)] = null);

(statearr_29459_29538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (21))){
var inst_29361 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29463_29539 = state_29439__$1;
(statearr_29463_29539[(2)] = inst_29361);

(statearr_29463_29539[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (31))){
var inst_29387 = (state_29439[(10)]);
var inst_29391 = done.call(null,null);
var inst_29392 = cljs.core.async.untap_STAR_.call(null,m,inst_29387);
var state_29439__$1 = (function (){var statearr_29464 = state_29439;
(statearr_29464[(19)] = inst_29391);

return statearr_29464;
})();
var statearr_29465_29540 = state_29439__$1;
(statearr_29465_29540[(2)] = inst_29392);

(statearr_29465_29540[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (32))){
var inst_29379 = (state_29439[(20)]);
var inst_29381 = (state_29439[(21)]);
var inst_29382 = (state_29439[(11)]);
var inst_29380 = (state_29439[(12)]);
var inst_29394 = (state_29439[(2)]);
var inst_29395 = (inst_29382 + (1));
var tmp29460 = inst_29379;
var tmp29461 = inst_29381;
var tmp29462 = inst_29380;
var inst_29379__$1 = tmp29460;
var inst_29380__$1 = tmp29462;
var inst_29381__$1 = tmp29461;
var inst_29382__$1 = inst_29395;
var state_29439__$1 = (function (){var statearr_29466 = state_29439;
(statearr_29466[(20)] = inst_29379__$1);

(statearr_29466[(21)] = inst_29381__$1);

(statearr_29466[(11)] = inst_29382__$1);

(statearr_29466[(12)] = inst_29380__$1);

(statearr_29466[(22)] = inst_29394);

return statearr_29466;
})();
var statearr_29467_29541 = state_29439__$1;
(statearr_29467_29541[(2)] = null);

(statearr_29467_29541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (40))){
var inst_29407 = (state_29439[(23)]);
var inst_29411 = done.call(null,null);
var inst_29412 = cljs.core.async.untap_STAR_.call(null,m,inst_29407);
var state_29439__$1 = (function (){var statearr_29468 = state_29439;
(statearr_29468[(24)] = inst_29411);

return statearr_29468;
})();
var statearr_29469_29542 = state_29439__$1;
(statearr_29469_29542[(2)] = inst_29412);

(statearr_29469_29542[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (33))){
var inst_29398 = (state_29439[(25)]);
var inst_29400 = cljs.core.chunked_seq_QMARK_.call(null,inst_29398);
var state_29439__$1 = state_29439;
if(inst_29400){
var statearr_29470_29543 = state_29439__$1;
(statearr_29470_29543[(1)] = (36));

} else {
var statearr_29471_29544 = state_29439__$1;
(statearr_29471_29544[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (13))){
var inst_29330 = (state_29439[(26)]);
var inst_29333 = cljs.core.async.close_BANG_.call(null,inst_29330);
var state_29439__$1 = state_29439;
var statearr_29472_29545 = state_29439__$1;
(statearr_29472_29545[(2)] = inst_29333);

(statearr_29472_29545[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (22))){
var inst_29351 = (state_29439[(8)]);
var inst_29354 = cljs.core.async.close_BANG_.call(null,inst_29351);
var state_29439__$1 = state_29439;
var statearr_29473_29546 = state_29439__$1;
(statearr_29473_29546[(2)] = inst_29354);

(statearr_29473_29546[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (36))){
var inst_29398 = (state_29439[(25)]);
var inst_29402 = cljs.core.chunk_first.call(null,inst_29398);
var inst_29403 = cljs.core.chunk_rest.call(null,inst_29398);
var inst_29404 = cljs.core.count.call(null,inst_29402);
var inst_29379 = inst_29403;
var inst_29380 = inst_29402;
var inst_29381 = inst_29404;
var inst_29382 = (0);
var state_29439__$1 = (function (){var statearr_29474 = state_29439;
(statearr_29474[(20)] = inst_29379);

(statearr_29474[(21)] = inst_29381);

(statearr_29474[(11)] = inst_29382);

(statearr_29474[(12)] = inst_29380);

return statearr_29474;
})();
var statearr_29475_29547 = state_29439__$1;
(statearr_29475_29547[(2)] = null);

(statearr_29475_29547[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (41))){
var inst_29398 = (state_29439[(25)]);
var inst_29414 = (state_29439[(2)]);
var inst_29415 = cljs.core.next.call(null,inst_29398);
var inst_29379 = inst_29415;
var inst_29380 = null;
var inst_29381 = (0);
var inst_29382 = (0);
var state_29439__$1 = (function (){var statearr_29476 = state_29439;
(statearr_29476[(20)] = inst_29379);

(statearr_29476[(21)] = inst_29381);

(statearr_29476[(27)] = inst_29414);

(statearr_29476[(11)] = inst_29382);

(statearr_29476[(12)] = inst_29380);

return statearr_29476;
})();
var statearr_29477_29548 = state_29439__$1;
(statearr_29477_29548[(2)] = null);

(statearr_29477_29548[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (43))){
var state_29439__$1 = state_29439;
var statearr_29478_29549 = state_29439__$1;
(statearr_29478_29549[(2)] = null);

(statearr_29478_29549[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (29))){
var inst_29423 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29479_29550 = state_29439__$1;
(statearr_29479_29550[(2)] = inst_29423);

(statearr_29479_29550[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (44))){
var inst_29432 = (state_29439[(2)]);
var state_29439__$1 = (function (){var statearr_29480 = state_29439;
(statearr_29480[(28)] = inst_29432);

return statearr_29480;
})();
var statearr_29481_29551 = state_29439__$1;
(statearr_29481_29551[(2)] = null);

(statearr_29481_29551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (6))){
var inst_29371 = (state_29439[(29)]);
var inst_29370 = cljs.core.deref.call(null,cs);
var inst_29371__$1 = cljs.core.keys.call(null,inst_29370);
var inst_29372 = cljs.core.count.call(null,inst_29371__$1);
var inst_29373 = cljs.core.reset_BANG_.call(null,dctr,inst_29372);
var inst_29378 = cljs.core.seq.call(null,inst_29371__$1);
var inst_29379 = inst_29378;
var inst_29380 = null;
var inst_29381 = (0);
var inst_29382 = (0);
var state_29439__$1 = (function (){var statearr_29482 = state_29439;
(statearr_29482[(20)] = inst_29379);

(statearr_29482[(21)] = inst_29381);

(statearr_29482[(11)] = inst_29382);

(statearr_29482[(29)] = inst_29371__$1);

(statearr_29482[(30)] = inst_29373);

(statearr_29482[(12)] = inst_29380);

return statearr_29482;
})();
var statearr_29483_29552 = state_29439__$1;
(statearr_29483_29552[(2)] = null);

(statearr_29483_29552[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (28))){
var inst_29379 = (state_29439[(20)]);
var inst_29398 = (state_29439[(25)]);
var inst_29398__$1 = cljs.core.seq.call(null,inst_29379);
var state_29439__$1 = (function (){var statearr_29484 = state_29439;
(statearr_29484[(25)] = inst_29398__$1);

return statearr_29484;
})();
if(inst_29398__$1){
var statearr_29485_29553 = state_29439__$1;
(statearr_29485_29553[(1)] = (33));

} else {
var statearr_29486_29554 = state_29439__$1;
(statearr_29486_29554[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (25))){
var inst_29381 = (state_29439[(21)]);
var inst_29382 = (state_29439[(11)]);
var inst_29384 = (inst_29382 < inst_29381);
var inst_29385 = inst_29384;
var state_29439__$1 = state_29439;
if(cljs.core.truth_(inst_29385)){
var statearr_29487_29555 = state_29439__$1;
(statearr_29487_29555[(1)] = (27));

} else {
var statearr_29488_29556 = state_29439__$1;
(statearr_29488_29556[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (34))){
var state_29439__$1 = state_29439;
var statearr_29489_29557 = state_29439__$1;
(statearr_29489_29557[(2)] = null);

(statearr_29489_29557[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (17))){
var state_29439__$1 = state_29439;
var statearr_29490_29558 = state_29439__$1;
(statearr_29490_29558[(2)] = null);

(statearr_29490_29558[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (3))){
var inst_29437 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29439__$1,inst_29437);
} else {
if((state_val_29440 === (12))){
var inst_29366 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29491_29559 = state_29439__$1;
(statearr_29491_29559[(2)] = inst_29366);

(statearr_29491_29559[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (2))){
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29439__$1,(4),ch);
} else {
if((state_val_29440 === (23))){
var state_29439__$1 = state_29439;
var statearr_29492_29560 = state_29439__$1;
(statearr_29492_29560[(2)] = null);

(statearr_29492_29560[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (35))){
var inst_29421 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29493_29561 = state_29439__$1;
(statearr_29493_29561[(2)] = inst_29421);

(statearr_29493_29561[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (19))){
var inst_29340 = (state_29439[(7)]);
var inst_29344 = cljs.core.chunk_first.call(null,inst_29340);
var inst_29345 = cljs.core.chunk_rest.call(null,inst_29340);
var inst_29346 = cljs.core.count.call(null,inst_29344);
var inst_29320 = inst_29345;
var inst_29321 = inst_29344;
var inst_29322 = inst_29346;
var inst_29323 = (0);
var state_29439__$1 = (function (){var statearr_29494 = state_29439;
(statearr_29494[(14)] = inst_29320);

(statearr_29494[(15)] = inst_29321);

(statearr_29494[(16)] = inst_29323);

(statearr_29494[(17)] = inst_29322);

return statearr_29494;
})();
var statearr_29495_29562 = state_29439__$1;
(statearr_29495_29562[(2)] = null);

(statearr_29495_29562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (11))){
var inst_29320 = (state_29439[(14)]);
var inst_29340 = (state_29439[(7)]);
var inst_29340__$1 = cljs.core.seq.call(null,inst_29320);
var state_29439__$1 = (function (){var statearr_29496 = state_29439;
(statearr_29496[(7)] = inst_29340__$1);

return statearr_29496;
})();
if(inst_29340__$1){
var statearr_29497_29563 = state_29439__$1;
(statearr_29497_29563[(1)] = (16));

} else {
var statearr_29498_29564 = state_29439__$1;
(statearr_29498_29564[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (9))){
var inst_29368 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29499_29565 = state_29439__$1;
(statearr_29499_29565[(2)] = inst_29368);

(statearr_29499_29565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (5))){
var inst_29318 = cljs.core.deref.call(null,cs);
var inst_29319 = cljs.core.seq.call(null,inst_29318);
var inst_29320 = inst_29319;
var inst_29321 = null;
var inst_29322 = (0);
var inst_29323 = (0);
var state_29439__$1 = (function (){var statearr_29500 = state_29439;
(statearr_29500[(14)] = inst_29320);

(statearr_29500[(15)] = inst_29321);

(statearr_29500[(16)] = inst_29323);

(statearr_29500[(17)] = inst_29322);

return statearr_29500;
})();
var statearr_29501_29566 = state_29439__$1;
(statearr_29501_29566[(2)] = null);

(statearr_29501_29566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (14))){
var state_29439__$1 = state_29439;
var statearr_29502_29567 = state_29439__$1;
(statearr_29502_29567[(2)] = null);

(statearr_29502_29567[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (45))){
var inst_29429 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29503_29568 = state_29439__$1;
(statearr_29503_29568[(2)] = inst_29429);

(statearr_29503_29568[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (26))){
var inst_29371 = (state_29439[(29)]);
var inst_29425 = (state_29439[(2)]);
var inst_29426 = cljs.core.seq.call(null,inst_29371);
var state_29439__$1 = (function (){var statearr_29504 = state_29439;
(statearr_29504[(31)] = inst_29425);

return statearr_29504;
})();
if(inst_29426){
var statearr_29505_29569 = state_29439__$1;
(statearr_29505_29569[(1)] = (42));

} else {
var statearr_29506_29570 = state_29439__$1;
(statearr_29506_29570[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (16))){
var inst_29340 = (state_29439[(7)]);
var inst_29342 = cljs.core.chunked_seq_QMARK_.call(null,inst_29340);
var state_29439__$1 = state_29439;
if(inst_29342){
var statearr_29507_29571 = state_29439__$1;
(statearr_29507_29571[(1)] = (19));

} else {
var statearr_29508_29572 = state_29439__$1;
(statearr_29508_29572[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (38))){
var inst_29418 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29509_29573 = state_29439__$1;
(statearr_29509_29573[(2)] = inst_29418);

(statearr_29509_29573[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (30))){
var state_29439__$1 = state_29439;
var statearr_29510_29574 = state_29439__$1;
(statearr_29510_29574[(2)] = null);

(statearr_29510_29574[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (10))){
var inst_29321 = (state_29439[(15)]);
var inst_29323 = (state_29439[(16)]);
var inst_29329 = cljs.core._nth.call(null,inst_29321,inst_29323);
var inst_29330 = cljs.core.nth.call(null,inst_29329,(0),null);
var inst_29331 = cljs.core.nth.call(null,inst_29329,(1),null);
var state_29439__$1 = (function (){var statearr_29511 = state_29439;
(statearr_29511[(26)] = inst_29330);

return statearr_29511;
})();
if(cljs.core.truth_(inst_29331)){
var statearr_29512_29575 = state_29439__$1;
(statearr_29512_29575[(1)] = (13));

} else {
var statearr_29513_29576 = state_29439__$1;
(statearr_29513_29576[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (18))){
var inst_29364 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29514_29577 = state_29439__$1;
(statearr_29514_29577[(2)] = inst_29364);

(statearr_29514_29577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (42))){
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29439__$1,(45),dchan);
} else {
if((state_val_29440 === (37))){
var inst_29407 = (state_29439[(23)]);
var inst_29311 = (state_29439[(9)]);
var inst_29398 = (state_29439[(25)]);
var inst_29407__$1 = cljs.core.first.call(null,inst_29398);
var inst_29408 = cljs.core.async.put_BANG_.call(null,inst_29407__$1,inst_29311,done);
var state_29439__$1 = (function (){var statearr_29515 = state_29439;
(statearr_29515[(23)] = inst_29407__$1);

return statearr_29515;
})();
if(cljs.core.truth_(inst_29408)){
var statearr_29516_29578 = state_29439__$1;
(statearr_29516_29578[(1)] = (39));

} else {
var statearr_29517_29579 = state_29439__$1;
(statearr_29517_29579[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (8))){
var inst_29323 = (state_29439[(16)]);
var inst_29322 = (state_29439[(17)]);
var inst_29325 = (inst_29323 < inst_29322);
var inst_29326 = inst_29325;
var state_29439__$1 = state_29439;
if(cljs.core.truth_(inst_29326)){
var statearr_29518_29580 = state_29439__$1;
(statearr_29518_29580[(1)] = (10));

} else {
var statearr_29519_29581 = state_29439__$1;
(statearr_29519_29581[(1)] = (11));

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
});})(c__28220__auto___29527,cs,m,dchan,dctr,done))
;
return ((function (switch__28108__auto__,c__28220__auto___29527,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28109__auto__ = null;
var cljs$core$async$mult_$_state_machine__28109__auto____0 = (function (){
var statearr_29523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29523[(0)] = cljs$core$async$mult_$_state_machine__28109__auto__);

(statearr_29523[(1)] = (1));

return statearr_29523;
});
var cljs$core$async$mult_$_state_machine__28109__auto____1 = (function (state_29439){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_29439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e29524){if((e29524 instanceof Object)){
var ex__28112__auto__ = e29524;
var statearr_29525_29582 = state_29439;
(statearr_29525_29582[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29583 = state_29439;
state_29439 = G__29583;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28109__auto__ = function(state_29439){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28109__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28109__auto____1.call(this,state_29439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28109__auto____0;
cljs$core$async$mult_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28109__auto____1;
return cljs$core$async$mult_$_state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto___29527,cs,m,dchan,dctr,done))
})();
var state__28222__auto__ = (function (){var statearr_29526 = f__28221__auto__.call(null);
(statearr_29526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___29527);

return statearr_29526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto___29527,cs,m,dchan,dctr,done))
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
var args29584 = [];
var len__25159__auto___29587 = arguments.length;
var i__25160__auto___29588 = (0);
while(true){
if((i__25160__auto___29588 < len__25159__auto___29587)){
args29584.push((arguments[i__25160__auto___29588]));

var G__29589 = (i__25160__auto___29588 + (1));
i__25160__auto___29588 = G__29589;
continue;
} else {
}
break;
}

var G__29586 = args29584.length;
switch (G__29586) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29584.length)].join('')));

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
var x__24752__auto__ = (((m == null))?null:m);
var m__24753__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__24752__auto__)]);
if(!((m__24753__auto__ == null))){
return m__24753__auto__.call(null,m,ch);
} else {
var m__24753__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__24753__auto____$1 == null))){
return m__24753__auto____$1.call(null,m,ch);
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
var x__24752__auto__ = (((m == null))?null:m);
var m__24753__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__24752__auto__)]);
if(!((m__24753__auto__ == null))){
return m__24753__auto__.call(null,m,ch);
} else {
var m__24753__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__24753__auto____$1 == null))){
return m__24753__auto____$1.call(null,m,ch);
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
var x__24752__auto__ = (((m == null))?null:m);
var m__24753__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__24752__auto__)]);
if(!((m__24753__auto__ == null))){
return m__24753__auto__.call(null,m);
} else {
var m__24753__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__24753__auto____$1 == null))){
return m__24753__auto____$1.call(null,m);
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
var x__24752__auto__ = (((m == null))?null:m);
var m__24753__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__24752__auto__)]);
if(!((m__24753__auto__ == null))){
return m__24753__auto__.call(null,m,state_map);
} else {
var m__24753__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__24753__auto____$1 == null))){
return m__24753__auto____$1.call(null,m,state_map);
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
var x__24752__auto__ = (((m == null))?null:m);
var m__24753__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__24752__auto__)]);
if(!((m__24753__auto__ == null))){
return m__24753__auto__.call(null,m,mode);
} else {
var m__24753__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__24753__auto____$1 == null))){
return m__24753__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25166__auto__ = [];
var len__25159__auto___29601 = arguments.length;
var i__25160__auto___29602 = (0);
while(true){
if((i__25160__auto___29602 < len__25159__auto___29601)){
args__25166__auto__.push((arguments[i__25160__auto___29602]));

var G__29603 = (i__25160__auto___29602 + (1));
i__25160__auto___29602 = G__29603;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((3) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25167__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29595){
var map__29596 = p__29595;
var map__29596__$1 = ((((!((map__29596 == null)))?((((map__29596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29596):map__29596);
var opts = map__29596__$1;
var statearr_29598_29604 = state;
(statearr_29598_29604[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__29596,map__29596__$1,opts){
return (function (val){
var statearr_29599_29605 = state;
(statearr_29599_29605[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29596,map__29596__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_29600_29606 = state;
(statearr_29600_29606[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29591){
var G__29592 = cljs.core.first.call(null,seq29591);
var seq29591__$1 = cljs.core.next.call(null,seq29591);
var G__29593 = cljs.core.first.call(null,seq29591__$1);
var seq29591__$2 = cljs.core.next.call(null,seq29591__$1);
var G__29594 = cljs.core.first.call(null,seq29591__$2);
var seq29591__$3 = cljs.core.next.call(null,seq29591__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29592,G__29593,G__29594,seq29591__$3);
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
if(typeof cljs.core.async.t_cljs$core$async29770 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29770 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29771){
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
this.meta29771 = meta29771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29772,meta29771__$1){
var self__ = this;
var _29772__$1 = this;
return (new cljs.core.async.t_cljs$core$async29770(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29771__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29772){
var self__ = this;
var _29772__$1 = this;
return self__.meta29771;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29770.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29770.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29770.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29770.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29770.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29770.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29770.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29770.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async29770.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29771","meta29771",1491791471,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29770";

cljs.core.async.t_cljs$core$async29770.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__24695__auto__,writer__24696__auto__,opt__24697__auto__){
return cljs.core._write.call(null,writer__24696__auto__,"cljs.core.async/t_cljs$core$async29770");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29770 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29770(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29771){
return (new cljs.core.async.t_cljs$core$async29770(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29771));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29770(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28220__auto___29933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto___29933,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto___29933,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29870){
var state_val_29871 = (state_29870[(1)]);
if((state_val_29871 === (7))){
var inst_29788 = (state_29870[(2)]);
var state_29870__$1 = state_29870;
var statearr_29872_29934 = state_29870__$1;
(statearr_29872_29934[(2)] = inst_29788);

(statearr_29872_29934[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (20))){
var inst_29800 = (state_29870[(7)]);
var state_29870__$1 = state_29870;
var statearr_29873_29935 = state_29870__$1;
(statearr_29873_29935[(2)] = inst_29800);

(statearr_29873_29935[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (27))){
var state_29870__$1 = state_29870;
var statearr_29874_29936 = state_29870__$1;
(statearr_29874_29936[(2)] = null);

(statearr_29874_29936[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (1))){
var inst_29776 = (state_29870[(8)]);
var inst_29776__$1 = calc_state.call(null);
var inst_29778 = (inst_29776__$1 == null);
var inst_29779 = cljs.core.not.call(null,inst_29778);
var state_29870__$1 = (function (){var statearr_29875 = state_29870;
(statearr_29875[(8)] = inst_29776__$1);

return statearr_29875;
})();
if(inst_29779){
var statearr_29876_29937 = state_29870__$1;
(statearr_29876_29937[(1)] = (2));

} else {
var statearr_29877_29938 = state_29870__$1;
(statearr_29877_29938[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (24))){
var inst_29844 = (state_29870[(9)]);
var inst_29823 = (state_29870[(10)]);
var inst_29830 = (state_29870[(11)]);
var inst_29844__$1 = inst_29823.call(null,inst_29830);
var state_29870__$1 = (function (){var statearr_29878 = state_29870;
(statearr_29878[(9)] = inst_29844__$1);

return statearr_29878;
})();
if(cljs.core.truth_(inst_29844__$1)){
var statearr_29879_29939 = state_29870__$1;
(statearr_29879_29939[(1)] = (29));

} else {
var statearr_29880_29940 = state_29870__$1;
(statearr_29880_29940[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (4))){
var inst_29791 = (state_29870[(2)]);
var state_29870__$1 = state_29870;
if(cljs.core.truth_(inst_29791)){
var statearr_29881_29941 = state_29870__$1;
(statearr_29881_29941[(1)] = (8));

} else {
var statearr_29882_29942 = state_29870__$1;
(statearr_29882_29942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (15))){
var inst_29817 = (state_29870[(2)]);
var state_29870__$1 = state_29870;
if(cljs.core.truth_(inst_29817)){
var statearr_29883_29943 = state_29870__$1;
(statearr_29883_29943[(1)] = (19));

} else {
var statearr_29884_29944 = state_29870__$1;
(statearr_29884_29944[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (21))){
var inst_29822 = (state_29870[(12)]);
var inst_29822__$1 = (state_29870[(2)]);
var inst_29823 = cljs.core.get.call(null,inst_29822__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29824 = cljs.core.get.call(null,inst_29822__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29825 = cljs.core.get.call(null,inst_29822__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29870__$1 = (function (){var statearr_29885 = state_29870;
(statearr_29885[(12)] = inst_29822__$1);

(statearr_29885[(10)] = inst_29823);

(statearr_29885[(13)] = inst_29824);

return statearr_29885;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29870__$1,(22),inst_29825);
} else {
if((state_val_29871 === (31))){
var inst_29852 = (state_29870[(2)]);
var state_29870__$1 = state_29870;
if(cljs.core.truth_(inst_29852)){
var statearr_29886_29945 = state_29870__$1;
(statearr_29886_29945[(1)] = (32));

} else {
var statearr_29887_29946 = state_29870__$1;
(statearr_29887_29946[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (32))){
var inst_29829 = (state_29870[(14)]);
var state_29870__$1 = state_29870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29870__$1,(35),out,inst_29829);
} else {
if((state_val_29871 === (33))){
var inst_29822 = (state_29870[(12)]);
var inst_29800 = inst_29822;
var state_29870__$1 = (function (){var statearr_29888 = state_29870;
(statearr_29888[(7)] = inst_29800);

return statearr_29888;
})();
var statearr_29889_29947 = state_29870__$1;
(statearr_29889_29947[(2)] = null);

(statearr_29889_29947[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (13))){
var inst_29800 = (state_29870[(7)]);
var inst_29807 = inst_29800.cljs$lang$protocol_mask$partition0$;
var inst_29808 = (inst_29807 & (64));
var inst_29809 = inst_29800.cljs$core$ISeq$;
var inst_29810 = (inst_29808) || (inst_29809);
var state_29870__$1 = state_29870;
if(cljs.core.truth_(inst_29810)){
var statearr_29890_29948 = state_29870__$1;
(statearr_29890_29948[(1)] = (16));

} else {
var statearr_29891_29949 = state_29870__$1;
(statearr_29891_29949[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (22))){
var inst_29829 = (state_29870[(14)]);
var inst_29830 = (state_29870[(11)]);
var inst_29828 = (state_29870[(2)]);
var inst_29829__$1 = cljs.core.nth.call(null,inst_29828,(0),null);
var inst_29830__$1 = cljs.core.nth.call(null,inst_29828,(1),null);
var inst_29831 = (inst_29829__$1 == null);
var inst_29832 = cljs.core._EQ_.call(null,inst_29830__$1,change);
var inst_29833 = (inst_29831) || (inst_29832);
var state_29870__$1 = (function (){var statearr_29892 = state_29870;
(statearr_29892[(14)] = inst_29829__$1);

(statearr_29892[(11)] = inst_29830__$1);

return statearr_29892;
})();
if(cljs.core.truth_(inst_29833)){
var statearr_29893_29950 = state_29870__$1;
(statearr_29893_29950[(1)] = (23));

} else {
var statearr_29894_29951 = state_29870__$1;
(statearr_29894_29951[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (36))){
var inst_29822 = (state_29870[(12)]);
var inst_29800 = inst_29822;
var state_29870__$1 = (function (){var statearr_29895 = state_29870;
(statearr_29895[(7)] = inst_29800);

return statearr_29895;
})();
var statearr_29896_29952 = state_29870__$1;
(statearr_29896_29952[(2)] = null);

(statearr_29896_29952[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (29))){
var inst_29844 = (state_29870[(9)]);
var state_29870__$1 = state_29870;
var statearr_29897_29953 = state_29870__$1;
(statearr_29897_29953[(2)] = inst_29844);

(statearr_29897_29953[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (6))){
var state_29870__$1 = state_29870;
var statearr_29898_29954 = state_29870__$1;
(statearr_29898_29954[(2)] = false);

(statearr_29898_29954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (28))){
var inst_29840 = (state_29870[(2)]);
var inst_29841 = calc_state.call(null);
var inst_29800 = inst_29841;
var state_29870__$1 = (function (){var statearr_29899 = state_29870;
(statearr_29899[(7)] = inst_29800);

(statearr_29899[(15)] = inst_29840);

return statearr_29899;
})();
var statearr_29900_29955 = state_29870__$1;
(statearr_29900_29955[(2)] = null);

(statearr_29900_29955[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (25))){
var inst_29866 = (state_29870[(2)]);
var state_29870__$1 = state_29870;
var statearr_29901_29956 = state_29870__$1;
(statearr_29901_29956[(2)] = inst_29866);

(statearr_29901_29956[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (34))){
var inst_29864 = (state_29870[(2)]);
var state_29870__$1 = state_29870;
var statearr_29902_29957 = state_29870__$1;
(statearr_29902_29957[(2)] = inst_29864);

(statearr_29902_29957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (17))){
var state_29870__$1 = state_29870;
var statearr_29903_29958 = state_29870__$1;
(statearr_29903_29958[(2)] = false);

(statearr_29903_29958[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (3))){
var state_29870__$1 = state_29870;
var statearr_29904_29959 = state_29870__$1;
(statearr_29904_29959[(2)] = false);

(statearr_29904_29959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (12))){
var inst_29868 = (state_29870[(2)]);
var state_29870__$1 = state_29870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29870__$1,inst_29868);
} else {
if((state_val_29871 === (2))){
var inst_29776 = (state_29870[(8)]);
var inst_29781 = inst_29776.cljs$lang$protocol_mask$partition0$;
var inst_29782 = (inst_29781 & (64));
var inst_29783 = inst_29776.cljs$core$ISeq$;
var inst_29784 = (inst_29782) || (inst_29783);
var state_29870__$1 = state_29870;
if(cljs.core.truth_(inst_29784)){
var statearr_29905_29960 = state_29870__$1;
(statearr_29905_29960[(1)] = (5));

} else {
var statearr_29906_29961 = state_29870__$1;
(statearr_29906_29961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (23))){
var inst_29829 = (state_29870[(14)]);
var inst_29835 = (inst_29829 == null);
var state_29870__$1 = state_29870;
if(cljs.core.truth_(inst_29835)){
var statearr_29907_29962 = state_29870__$1;
(statearr_29907_29962[(1)] = (26));

} else {
var statearr_29908_29963 = state_29870__$1;
(statearr_29908_29963[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (35))){
var inst_29855 = (state_29870[(2)]);
var state_29870__$1 = state_29870;
if(cljs.core.truth_(inst_29855)){
var statearr_29909_29964 = state_29870__$1;
(statearr_29909_29964[(1)] = (36));

} else {
var statearr_29910_29965 = state_29870__$1;
(statearr_29910_29965[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (19))){
var inst_29800 = (state_29870[(7)]);
var inst_29819 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29800);
var state_29870__$1 = state_29870;
var statearr_29911_29966 = state_29870__$1;
(statearr_29911_29966[(2)] = inst_29819);

(statearr_29911_29966[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (11))){
var inst_29800 = (state_29870[(7)]);
var inst_29804 = (inst_29800 == null);
var inst_29805 = cljs.core.not.call(null,inst_29804);
var state_29870__$1 = state_29870;
if(inst_29805){
var statearr_29912_29967 = state_29870__$1;
(statearr_29912_29967[(1)] = (13));

} else {
var statearr_29913_29968 = state_29870__$1;
(statearr_29913_29968[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (9))){
var inst_29776 = (state_29870[(8)]);
var state_29870__$1 = state_29870;
var statearr_29914_29969 = state_29870__$1;
(statearr_29914_29969[(2)] = inst_29776);

(statearr_29914_29969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (5))){
var state_29870__$1 = state_29870;
var statearr_29915_29970 = state_29870__$1;
(statearr_29915_29970[(2)] = true);

(statearr_29915_29970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (14))){
var state_29870__$1 = state_29870;
var statearr_29916_29971 = state_29870__$1;
(statearr_29916_29971[(2)] = false);

(statearr_29916_29971[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (26))){
var inst_29830 = (state_29870[(11)]);
var inst_29837 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29830);
var state_29870__$1 = state_29870;
var statearr_29917_29972 = state_29870__$1;
(statearr_29917_29972[(2)] = inst_29837);

(statearr_29917_29972[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (16))){
var state_29870__$1 = state_29870;
var statearr_29918_29973 = state_29870__$1;
(statearr_29918_29973[(2)] = true);

(statearr_29918_29973[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (38))){
var inst_29860 = (state_29870[(2)]);
var state_29870__$1 = state_29870;
var statearr_29919_29974 = state_29870__$1;
(statearr_29919_29974[(2)] = inst_29860);

(statearr_29919_29974[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (30))){
var inst_29823 = (state_29870[(10)]);
var inst_29824 = (state_29870[(13)]);
var inst_29830 = (state_29870[(11)]);
var inst_29847 = cljs.core.empty_QMARK_.call(null,inst_29823);
var inst_29848 = inst_29824.call(null,inst_29830);
var inst_29849 = cljs.core.not.call(null,inst_29848);
var inst_29850 = (inst_29847) && (inst_29849);
var state_29870__$1 = state_29870;
var statearr_29920_29975 = state_29870__$1;
(statearr_29920_29975[(2)] = inst_29850);

(statearr_29920_29975[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (10))){
var inst_29776 = (state_29870[(8)]);
var inst_29796 = (state_29870[(2)]);
var inst_29797 = cljs.core.get.call(null,inst_29796,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29798 = cljs.core.get.call(null,inst_29796,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29799 = cljs.core.get.call(null,inst_29796,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29800 = inst_29776;
var state_29870__$1 = (function (){var statearr_29921 = state_29870;
(statearr_29921[(16)] = inst_29797);

(statearr_29921[(17)] = inst_29799);

(statearr_29921[(7)] = inst_29800);

(statearr_29921[(18)] = inst_29798);

return statearr_29921;
})();
var statearr_29922_29976 = state_29870__$1;
(statearr_29922_29976[(2)] = null);

(statearr_29922_29976[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (18))){
var inst_29814 = (state_29870[(2)]);
var state_29870__$1 = state_29870;
var statearr_29923_29977 = state_29870__$1;
(statearr_29923_29977[(2)] = inst_29814);

(statearr_29923_29977[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (37))){
var state_29870__$1 = state_29870;
var statearr_29924_29978 = state_29870__$1;
(statearr_29924_29978[(2)] = null);

(statearr_29924_29978[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29871 === (8))){
var inst_29776 = (state_29870[(8)]);
var inst_29793 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29776);
var state_29870__$1 = state_29870;
var statearr_29925_29979 = state_29870__$1;
(statearr_29925_29979[(2)] = inst_29793);

(statearr_29925_29979[(1)] = (10));


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
});})(c__28220__auto___29933,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28108__auto__,c__28220__auto___29933,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28109__auto__ = null;
var cljs$core$async$mix_$_state_machine__28109__auto____0 = (function (){
var statearr_29929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29929[(0)] = cljs$core$async$mix_$_state_machine__28109__auto__);

(statearr_29929[(1)] = (1));

return statearr_29929;
});
var cljs$core$async$mix_$_state_machine__28109__auto____1 = (function (state_29870){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_29870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e29930){if((e29930 instanceof Object)){
var ex__28112__auto__ = e29930;
var statearr_29931_29980 = state_29870;
(statearr_29931_29980[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29981 = state_29870;
state_29870 = G__29981;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28109__auto__ = function(state_29870){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28109__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28109__auto____1.call(this,state_29870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28109__auto____0;
cljs$core$async$mix_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28109__auto____1;
return cljs$core$async$mix_$_state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto___29933,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28222__auto__ = (function (){var statearr_29932 = f__28221__auto__.call(null);
(statearr_29932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___29933);

return statearr_29932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto___29933,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__24752__auto__ = (((p == null))?null:p);
var m__24753__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__24752__auto__)]);
if(!((m__24753__auto__ == null))){
return m__24753__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__24753__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__24753__auto____$1 == null))){
return m__24753__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__24752__auto__ = (((p == null))?null:p);
var m__24753__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__24752__auto__)]);
if(!((m__24753__auto__ == null))){
return m__24753__auto__.call(null,p,v,ch);
} else {
var m__24753__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__24753__auto____$1 == null))){
return m__24753__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29982 = [];
var len__25159__auto___29985 = arguments.length;
var i__25160__auto___29986 = (0);
while(true){
if((i__25160__auto___29986 < len__25159__auto___29985)){
args29982.push((arguments[i__25160__auto___29986]));

var G__29987 = (i__25160__auto___29986 + (1));
i__25160__auto___29986 = G__29987;
continue;
} else {
}
break;
}

var G__29984 = args29982.length;
switch (G__29984) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29982.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__24752__auto__ = (((p == null))?null:p);
var m__24753__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__24752__auto__)]);
if(!((m__24753__auto__ == null))){
return m__24753__auto__.call(null,p);
} else {
var m__24753__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__24753__auto____$1 == null))){
return m__24753__auto____$1.call(null,p);
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
var x__24752__auto__ = (((p == null))?null:p);
var m__24753__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__24752__auto__)]);
if(!((m__24753__auto__ == null))){
return m__24753__auto__.call(null,p,v);
} else {
var m__24753__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__24753__auto____$1 == null))){
return m__24753__auto____$1.call(null,p,v);
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
var args29990 = [];
var len__25159__auto___30115 = arguments.length;
var i__25160__auto___30116 = (0);
while(true){
if((i__25160__auto___30116 < len__25159__auto___30115)){
args29990.push((arguments[i__25160__auto___30116]));

var G__30117 = (i__25160__auto___30116 + (1));
i__25160__auto___30116 = G__30117;
continue;
} else {
}
break;
}

var G__29992 = args29990.length;
switch (G__29992) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29990.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24089__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24089__auto__,mults){
return (function (p1__29989_SHARP_){
if(cljs.core.truth_(p1__29989_SHARP_.call(null,topic))){
return p1__29989_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29989_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24089__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29993 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29993 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29994){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29994 = meta29994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29995,meta29994__$1){
var self__ = this;
var _29995__$1 = this;
return (new cljs.core.async.t_cljs$core$async29993(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29994__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29993.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29995){
var self__ = this;
var _29995__$1 = this;
return self__.meta29994;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29993.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29993.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29993.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29993.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29993.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async29993.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29993.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29993.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29994","meta29994",703509199,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29993.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29993.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29993";

cljs.core.async.t_cljs$core$async29993.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__24695__auto__,writer__24696__auto__,opt__24697__auto__){
return cljs.core._write.call(null,writer__24696__auto__,"cljs.core.async/t_cljs$core$async29993");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29993 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29993(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29994){
return (new cljs.core.async.t_cljs$core$async29993(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29994));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29993(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28220__auto___30119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto___30119,mults,ensure_mult,p){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto___30119,mults,ensure_mult,p){
return (function (state_30067){
var state_val_30068 = (state_30067[(1)]);
if((state_val_30068 === (7))){
var inst_30063 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30069_30120 = state_30067__$1;
(statearr_30069_30120[(2)] = inst_30063);

(statearr_30069_30120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (20))){
var state_30067__$1 = state_30067;
var statearr_30070_30121 = state_30067__$1;
(statearr_30070_30121[(2)] = null);

(statearr_30070_30121[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (1))){
var state_30067__$1 = state_30067;
var statearr_30071_30122 = state_30067__$1;
(statearr_30071_30122[(2)] = null);

(statearr_30071_30122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (24))){
var inst_30046 = (state_30067[(7)]);
var inst_30055 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30046);
var state_30067__$1 = state_30067;
var statearr_30072_30123 = state_30067__$1;
(statearr_30072_30123[(2)] = inst_30055);

(statearr_30072_30123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (4))){
var inst_29998 = (state_30067[(8)]);
var inst_29998__$1 = (state_30067[(2)]);
var inst_29999 = (inst_29998__$1 == null);
var state_30067__$1 = (function (){var statearr_30073 = state_30067;
(statearr_30073[(8)] = inst_29998__$1);

return statearr_30073;
})();
if(cljs.core.truth_(inst_29999)){
var statearr_30074_30124 = state_30067__$1;
(statearr_30074_30124[(1)] = (5));

} else {
var statearr_30075_30125 = state_30067__$1;
(statearr_30075_30125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (15))){
var inst_30040 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30076_30126 = state_30067__$1;
(statearr_30076_30126[(2)] = inst_30040);

(statearr_30076_30126[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (21))){
var inst_30060 = (state_30067[(2)]);
var state_30067__$1 = (function (){var statearr_30077 = state_30067;
(statearr_30077[(9)] = inst_30060);

return statearr_30077;
})();
var statearr_30078_30127 = state_30067__$1;
(statearr_30078_30127[(2)] = null);

(statearr_30078_30127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (13))){
var inst_30022 = (state_30067[(10)]);
var inst_30024 = cljs.core.chunked_seq_QMARK_.call(null,inst_30022);
var state_30067__$1 = state_30067;
if(inst_30024){
var statearr_30079_30128 = state_30067__$1;
(statearr_30079_30128[(1)] = (16));

} else {
var statearr_30080_30129 = state_30067__$1;
(statearr_30080_30129[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (22))){
var inst_30052 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
if(cljs.core.truth_(inst_30052)){
var statearr_30081_30130 = state_30067__$1;
(statearr_30081_30130[(1)] = (23));

} else {
var statearr_30082_30131 = state_30067__$1;
(statearr_30082_30131[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (6))){
var inst_29998 = (state_30067[(8)]);
var inst_30046 = (state_30067[(7)]);
var inst_30048 = (state_30067[(11)]);
var inst_30046__$1 = topic_fn.call(null,inst_29998);
var inst_30047 = cljs.core.deref.call(null,mults);
var inst_30048__$1 = cljs.core.get.call(null,inst_30047,inst_30046__$1);
var state_30067__$1 = (function (){var statearr_30083 = state_30067;
(statearr_30083[(7)] = inst_30046__$1);

(statearr_30083[(11)] = inst_30048__$1);

return statearr_30083;
})();
if(cljs.core.truth_(inst_30048__$1)){
var statearr_30084_30132 = state_30067__$1;
(statearr_30084_30132[(1)] = (19));

} else {
var statearr_30085_30133 = state_30067__$1;
(statearr_30085_30133[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (25))){
var inst_30057 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30086_30134 = state_30067__$1;
(statearr_30086_30134[(2)] = inst_30057);

(statearr_30086_30134[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (17))){
var inst_30022 = (state_30067[(10)]);
var inst_30031 = cljs.core.first.call(null,inst_30022);
var inst_30032 = cljs.core.async.muxch_STAR_.call(null,inst_30031);
var inst_30033 = cljs.core.async.close_BANG_.call(null,inst_30032);
var inst_30034 = cljs.core.next.call(null,inst_30022);
var inst_30008 = inst_30034;
var inst_30009 = null;
var inst_30010 = (0);
var inst_30011 = (0);
var state_30067__$1 = (function (){var statearr_30087 = state_30067;
(statearr_30087[(12)] = inst_30011);

(statearr_30087[(13)] = inst_30010);

(statearr_30087[(14)] = inst_30033);

(statearr_30087[(15)] = inst_30008);

(statearr_30087[(16)] = inst_30009);

return statearr_30087;
})();
var statearr_30088_30135 = state_30067__$1;
(statearr_30088_30135[(2)] = null);

(statearr_30088_30135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (3))){
var inst_30065 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30067__$1,inst_30065);
} else {
if((state_val_30068 === (12))){
var inst_30042 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30089_30136 = state_30067__$1;
(statearr_30089_30136[(2)] = inst_30042);

(statearr_30089_30136[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (2))){
var state_30067__$1 = state_30067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30067__$1,(4),ch);
} else {
if((state_val_30068 === (23))){
var state_30067__$1 = state_30067;
var statearr_30090_30137 = state_30067__$1;
(statearr_30090_30137[(2)] = null);

(statearr_30090_30137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (19))){
var inst_29998 = (state_30067[(8)]);
var inst_30048 = (state_30067[(11)]);
var inst_30050 = cljs.core.async.muxch_STAR_.call(null,inst_30048);
var state_30067__$1 = state_30067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30067__$1,(22),inst_30050,inst_29998);
} else {
if((state_val_30068 === (11))){
var inst_30022 = (state_30067[(10)]);
var inst_30008 = (state_30067[(15)]);
var inst_30022__$1 = cljs.core.seq.call(null,inst_30008);
var state_30067__$1 = (function (){var statearr_30091 = state_30067;
(statearr_30091[(10)] = inst_30022__$1);

return statearr_30091;
})();
if(inst_30022__$1){
var statearr_30092_30138 = state_30067__$1;
(statearr_30092_30138[(1)] = (13));

} else {
var statearr_30093_30139 = state_30067__$1;
(statearr_30093_30139[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (9))){
var inst_30044 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30094_30140 = state_30067__$1;
(statearr_30094_30140[(2)] = inst_30044);

(statearr_30094_30140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (5))){
var inst_30005 = cljs.core.deref.call(null,mults);
var inst_30006 = cljs.core.vals.call(null,inst_30005);
var inst_30007 = cljs.core.seq.call(null,inst_30006);
var inst_30008 = inst_30007;
var inst_30009 = null;
var inst_30010 = (0);
var inst_30011 = (0);
var state_30067__$1 = (function (){var statearr_30095 = state_30067;
(statearr_30095[(12)] = inst_30011);

(statearr_30095[(13)] = inst_30010);

(statearr_30095[(15)] = inst_30008);

(statearr_30095[(16)] = inst_30009);

return statearr_30095;
})();
var statearr_30096_30141 = state_30067__$1;
(statearr_30096_30141[(2)] = null);

(statearr_30096_30141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (14))){
var state_30067__$1 = state_30067;
var statearr_30100_30142 = state_30067__$1;
(statearr_30100_30142[(2)] = null);

(statearr_30100_30142[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (16))){
var inst_30022 = (state_30067[(10)]);
var inst_30026 = cljs.core.chunk_first.call(null,inst_30022);
var inst_30027 = cljs.core.chunk_rest.call(null,inst_30022);
var inst_30028 = cljs.core.count.call(null,inst_30026);
var inst_30008 = inst_30027;
var inst_30009 = inst_30026;
var inst_30010 = inst_30028;
var inst_30011 = (0);
var state_30067__$1 = (function (){var statearr_30101 = state_30067;
(statearr_30101[(12)] = inst_30011);

(statearr_30101[(13)] = inst_30010);

(statearr_30101[(15)] = inst_30008);

(statearr_30101[(16)] = inst_30009);

return statearr_30101;
})();
var statearr_30102_30143 = state_30067__$1;
(statearr_30102_30143[(2)] = null);

(statearr_30102_30143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (10))){
var inst_30011 = (state_30067[(12)]);
var inst_30010 = (state_30067[(13)]);
var inst_30008 = (state_30067[(15)]);
var inst_30009 = (state_30067[(16)]);
var inst_30016 = cljs.core._nth.call(null,inst_30009,inst_30011);
var inst_30017 = cljs.core.async.muxch_STAR_.call(null,inst_30016);
var inst_30018 = cljs.core.async.close_BANG_.call(null,inst_30017);
var inst_30019 = (inst_30011 + (1));
var tmp30097 = inst_30010;
var tmp30098 = inst_30008;
var tmp30099 = inst_30009;
var inst_30008__$1 = tmp30098;
var inst_30009__$1 = tmp30099;
var inst_30010__$1 = tmp30097;
var inst_30011__$1 = inst_30019;
var state_30067__$1 = (function (){var statearr_30103 = state_30067;
(statearr_30103[(12)] = inst_30011__$1);

(statearr_30103[(17)] = inst_30018);

(statearr_30103[(13)] = inst_30010__$1);

(statearr_30103[(15)] = inst_30008__$1);

(statearr_30103[(16)] = inst_30009__$1);

return statearr_30103;
})();
var statearr_30104_30144 = state_30067__$1;
(statearr_30104_30144[(2)] = null);

(statearr_30104_30144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (18))){
var inst_30037 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30105_30145 = state_30067__$1;
(statearr_30105_30145[(2)] = inst_30037);

(statearr_30105_30145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (8))){
var inst_30011 = (state_30067[(12)]);
var inst_30010 = (state_30067[(13)]);
var inst_30013 = (inst_30011 < inst_30010);
var inst_30014 = inst_30013;
var state_30067__$1 = state_30067;
if(cljs.core.truth_(inst_30014)){
var statearr_30106_30146 = state_30067__$1;
(statearr_30106_30146[(1)] = (10));

} else {
var statearr_30107_30147 = state_30067__$1;
(statearr_30107_30147[(1)] = (11));

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
});})(c__28220__auto___30119,mults,ensure_mult,p))
;
return ((function (switch__28108__auto__,c__28220__auto___30119,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28109__auto__ = null;
var cljs$core$async$state_machine__28109__auto____0 = (function (){
var statearr_30111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30111[(0)] = cljs$core$async$state_machine__28109__auto__);

(statearr_30111[(1)] = (1));

return statearr_30111;
});
var cljs$core$async$state_machine__28109__auto____1 = (function (state_30067){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_30067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e30112){if((e30112 instanceof Object)){
var ex__28112__auto__ = e30112;
var statearr_30113_30148 = state_30067;
(statearr_30113_30148[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30149 = state_30067;
state_30067 = G__30149;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
cljs$core$async$state_machine__28109__auto__ = function(state_30067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28109__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28109__auto____1.call(this,state_30067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28109__auto____0;
cljs$core$async$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28109__auto____1;
return cljs$core$async$state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto___30119,mults,ensure_mult,p))
})();
var state__28222__auto__ = (function (){var statearr_30114 = f__28221__auto__.call(null);
(statearr_30114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___30119);

return statearr_30114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto___30119,mults,ensure_mult,p))
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
var args30150 = [];
var len__25159__auto___30153 = arguments.length;
var i__25160__auto___30154 = (0);
while(true){
if((i__25160__auto___30154 < len__25159__auto___30153)){
args30150.push((arguments[i__25160__auto___30154]));

var G__30155 = (i__25160__auto___30154 + (1));
i__25160__auto___30154 = G__30155;
continue;
} else {
}
break;
}

var G__30152 = args30150.length;
switch (G__30152) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30150.length)].join('')));

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
var args30157 = [];
var len__25159__auto___30160 = arguments.length;
var i__25160__auto___30161 = (0);
while(true){
if((i__25160__auto___30161 < len__25159__auto___30160)){
args30157.push((arguments[i__25160__auto___30161]));

var G__30162 = (i__25160__auto___30161 + (1));
i__25160__auto___30161 = G__30162;
continue;
} else {
}
break;
}

var G__30159 = args30157.length;
switch (G__30159) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30157.length)].join('')));

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
var args30164 = [];
var len__25159__auto___30235 = arguments.length;
var i__25160__auto___30236 = (0);
while(true){
if((i__25160__auto___30236 < len__25159__auto___30235)){
args30164.push((arguments[i__25160__auto___30236]));

var G__30237 = (i__25160__auto___30236 + (1));
i__25160__auto___30236 = G__30237;
continue;
} else {
}
break;
}

var G__30166 = args30164.length;
switch (G__30166) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30164.length)].join('')));

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
var c__28220__auto___30239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto___30239,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto___30239,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30205){
var state_val_30206 = (state_30205[(1)]);
if((state_val_30206 === (7))){
var state_30205__$1 = state_30205;
var statearr_30207_30240 = state_30205__$1;
(statearr_30207_30240[(2)] = null);

(statearr_30207_30240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (1))){
var state_30205__$1 = state_30205;
var statearr_30208_30241 = state_30205__$1;
(statearr_30208_30241[(2)] = null);

(statearr_30208_30241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (4))){
var inst_30169 = (state_30205[(7)]);
var inst_30171 = (inst_30169 < cnt);
var state_30205__$1 = state_30205;
if(cljs.core.truth_(inst_30171)){
var statearr_30209_30242 = state_30205__$1;
(statearr_30209_30242[(1)] = (6));

} else {
var statearr_30210_30243 = state_30205__$1;
(statearr_30210_30243[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (15))){
var inst_30201 = (state_30205[(2)]);
var state_30205__$1 = state_30205;
var statearr_30211_30244 = state_30205__$1;
(statearr_30211_30244[(2)] = inst_30201);

(statearr_30211_30244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (13))){
var inst_30194 = cljs.core.async.close_BANG_.call(null,out);
var state_30205__$1 = state_30205;
var statearr_30212_30245 = state_30205__$1;
(statearr_30212_30245[(2)] = inst_30194);

(statearr_30212_30245[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (6))){
var state_30205__$1 = state_30205;
var statearr_30213_30246 = state_30205__$1;
(statearr_30213_30246[(2)] = null);

(statearr_30213_30246[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (3))){
var inst_30203 = (state_30205[(2)]);
var state_30205__$1 = state_30205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30205__$1,inst_30203);
} else {
if((state_val_30206 === (12))){
var inst_30191 = (state_30205[(8)]);
var inst_30191__$1 = (state_30205[(2)]);
var inst_30192 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30191__$1);
var state_30205__$1 = (function (){var statearr_30214 = state_30205;
(statearr_30214[(8)] = inst_30191__$1);

return statearr_30214;
})();
if(cljs.core.truth_(inst_30192)){
var statearr_30215_30247 = state_30205__$1;
(statearr_30215_30247[(1)] = (13));

} else {
var statearr_30216_30248 = state_30205__$1;
(statearr_30216_30248[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (2))){
var inst_30168 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30169 = (0);
var state_30205__$1 = (function (){var statearr_30217 = state_30205;
(statearr_30217[(7)] = inst_30169);

(statearr_30217[(9)] = inst_30168);

return statearr_30217;
})();
var statearr_30218_30249 = state_30205__$1;
(statearr_30218_30249[(2)] = null);

(statearr_30218_30249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (11))){
var inst_30169 = (state_30205[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30205,(10),Object,null,(9));
var inst_30178 = chs__$1.call(null,inst_30169);
var inst_30179 = done.call(null,inst_30169);
var inst_30180 = cljs.core.async.take_BANG_.call(null,inst_30178,inst_30179);
var state_30205__$1 = state_30205;
var statearr_30219_30250 = state_30205__$1;
(statearr_30219_30250[(2)] = inst_30180);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30205__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (9))){
var inst_30169 = (state_30205[(7)]);
var inst_30182 = (state_30205[(2)]);
var inst_30183 = (inst_30169 + (1));
var inst_30169__$1 = inst_30183;
var state_30205__$1 = (function (){var statearr_30220 = state_30205;
(statearr_30220[(7)] = inst_30169__$1);

(statearr_30220[(10)] = inst_30182);

return statearr_30220;
})();
var statearr_30221_30251 = state_30205__$1;
(statearr_30221_30251[(2)] = null);

(statearr_30221_30251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (5))){
var inst_30189 = (state_30205[(2)]);
var state_30205__$1 = (function (){var statearr_30222 = state_30205;
(statearr_30222[(11)] = inst_30189);

return statearr_30222;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30205__$1,(12),dchan);
} else {
if((state_val_30206 === (14))){
var inst_30191 = (state_30205[(8)]);
var inst_30196 = cljs.core.apply.call(null,f,inst_30191);
var state_30205__$1 = state_30205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30205__$1,(16),out,inst_30196);
} else {
if((state_val_30206 === (16))){
var inst_30198 = (state_30205[(2)]);
var state_30205__$1 = (function (){var statearr_30223 = state_30205;
(statearr_30223[(12)] = inst_30198);

return statearr_30223;
})();
var statearr_30224_30252 = state_30205__$1;
(statearr_30224_30252[(2)] = null);

(statearr_30224_30252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (10))){
var inst_30173 = (state_30205[(2)]);
var inst_30174 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30205__$1 = (function (){var statearr_30225 = state_30205;
(statearr_30225[(13)] = inst_30173);

return statearr_30225;
})();
var statearr_30226_30253 = state_30205__$1;
(statearr_30226_30253[(2)] = inst_30174);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30205__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (8))){
var inst_30187 = (state_30205[(2)]);
var state_30205__$1 = state_30205;
var statearr_30227_30254 = state_30205__$1;
(statearr_30227_30254[(2)] = inst_30187);

(statearr_30227_30254[(1)] = (5));


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
});})(c__28220__auto___30239,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28108__auto__,c__28220__auto___30239,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28109__auto__ = null;
var cljs$core$async$state_machine__28109__auto____0 = (function (){
var statearr_30231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30231[(0)] = cljs$core$async$state_machine__28109__auto__);

(statearr_30231[(1)] = (1));

return statearr_30231;
});
var cljs$core$async$state_machine__28109__auto____1 = (function (state_30205){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_30205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e30232){if((e30232 instanceof Object)){
var ex__28112__auto__ = e30232;
var statearr_30233_30255 = state_30205;
(statearr_30233_30255[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30256 = state_30205;
state_30205 = G__30256;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
cljs$core$async$state_machine__28109__auto__ = function(state_30205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28109__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28109__auto____1.call(this,state_30205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28109__auto____0;
cljs$core$async$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28109__auto____1;
return cljs$core$async$state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto___30239,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28222__auto__ = (function (){var statearr_30234 = f__28221__auto__.call(null);
(statearr_30234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___30239);

return statearr_30234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto___30239,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args30258 = [];
var len__25159__auto___30314 = arguments.length;
var i__25160__auto___30315 = (0);
while(true){
if((i__25160__auto___30315 < len__25159__auto___30314)){
args30258.push((arguments[i__25160__auto___30315]));

var G__30316 = (i__25160__auto___30315 + (1));
i__25160__auto___30315 = G__30316;
continue;
} else {
}
break;
}

var G__30260 = args30258.length;
switch (G__30260) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30258.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28220__auto___30318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto___30318,out){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto___30318,out){
return (function (state_30290){
var state_val_30291 = (state_30290[(1)]);
if((state_val_30291 === (7))){
var inst_30269 = (state_30290[(7)]);
var inst_30270 = (state_30290[(8)]);
var inst_30269__$1 = (state_30290[(2)]);
var inst_30270__$1 = cljs.core.nth.call(null,inst_30269__$1,(0),null);
var inst_30271 = cljs.core.nth.call(null,inst_30269__$1,(1),null);
var inst_30272 = (inst_30270__$1 == null);
var state_30290__$1 = (function (){var statearr_30292 = state_30290;
(statearr_30292[(7)] = inst_30269__$1);

(statearr_30292[(9)] = inst_30271);

(statearr_30292[(8)] = inst_30270__$1);

return statearr_30292;
})();
if(cljs.core.truth_(inst_30272)){
var statearr_30293_30319 = state_30290__$1;
(statearr_30293_30319[(1)] = (8));

} else {
var statearr_30294_30320 = state_30290__$1;
(statearr_30294_30320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (1))){
var inst_30261 = cljs.core.vec.call(null,chs);
var inst_30262 = inst_30261;
var state_30290__$1 = (function (){var statearr_30295 = state_30290;
(statearr_30295[(10)] = inst_30262);

return statearr_30295;
})();
var statearr_30296_30321 = state_30290__$1;
(statearr_30296_30321[(2)] = null);

(statearr_30296_30321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (4))){
var inst_30262 = (state_30290[(10)]);
var state_30290__$1 = state_30290;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30290__$1,(7),inst_30262);
} else {
if((state_val_30291 === (6))){
var inst_30286 = (state_30290[(2)]);
var state_30290__$1 = state_30290;
var statearr_30297_30322 = state_30290__$1;
(statearr_30297_30322[(2)] = inst_30286);

(statearr_30297_30322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (3))){
var inst_30288 = (state_30290[(2)]);
var state_30290__$1 = state_30290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30290__$1,inst_30288);
} else {
if((state_val_30291 === (2))){
var inst_30262 = (state_30290[(10)]);
var inst_30264 = cljs.core.count.call(null,inst_30262);
var inst_30265 = (inst_30264 > (0));
var state_30290__$1 = state_30290;
if(cljs.core.truth_(inst_30265)){
var statearr_30299_30323 = state_30290__$1;
(statearr_30299_30323[(1)] = (4));

} else {
var statearr_30300_30324 = state_30290__$1;
(statearr_30300_30324[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (11))){
var inst_30262 = (state_30290[(10)]);
var inst_30279 = (state_30290[(2)]);
var tmp30298 = inst_30262;
var inst_30262__$1 = tmp30298;
var state_30290__$1 = (function (){var statearr_30301 = state_30290;
(statearr_30301[(10)] = inst_30262__$1);

(statearr_30301[(11)] = inst_30279);

return statearr_30301;
})();
var statearr_30302_30325 = state_30290__$1;
(statearr_30302_30325[(2)] = null);

(statearr_30302_30325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (9))){
var inst_30270 = (state_30290[(8)]);
var state_30290__$1 = state_30290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30290__$1,(11),out,inst_30270);
} else {
if((state_val_30291 === (5))){
var inst_30284 = cljs.core.async.close_BANG_.call(null,out);
var state_30290__$1 = state_30290;
var statearr_30303_30326 = state_30290__$1;
(statearr_30303_30326[(2)] = inst_30284);

(statearr_30303_30326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (10))){
var inst_30282 = (state_30290[(2)]);
var state_30290__$1 = state_30290;
var statearr_30304_30327 = state_30290__$1;
(statearr_30304_30327[(2)] = inst_30282);

(statearr_30304_30327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (8))){
var inst_30262 = (state_30290[(10)]);
var inst_30269 = (state_30290[(7)]);
var inst_30271 = (state_30290[(9)]);
var inst_30270 = (state_30290[(8)]);
var inst_30274 = (function (){var cs = inst_30262;
var vec__30267 = inst_30269;
var v = inst_30270;
var c = inst_30271;
return ((function (cs,vec__30267,v,c,inst_30262,inst_30269,inst_30271,inst_30270,state_val_30291,c__28220__auto___30318,out){
return (function (p1__30257_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30257_SHARP_);
});
;})(cs,vec__30267,v,c,inst_30262,inst_30269,inst_30271,inst_30270,state_val_30291,c__28220__auto___30318,out))
})();
var inst_30275 = cljs.core.filterv.call(null,inst_30274,inst_30262);
var inst_30262__$1 = inst_30275;
var state_30290__$1 = (function (){var statearr_30305 = state_30290;
(statearr_30305[(10)] = inst_30262__$1);

return statearr_30305;
})();
var statearr_30306_30328 = state_30290__$1;
(statearr_30306_30328[(2)] = null);

(statearr_30306_30328[(1)] = (2));


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
});})(c__28220__auto___30318,out))
;
return ((function (switch__28108__auto__,c__28220__auto___30318,out){
return (function() {
var cljs$core$async$state_machine__28109__auto__ = null;
var cljs$core$async$state_machine__28109__auto____0 = (function (){
var statearr_30310 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30310[(0)] = cljs$core$async$state_machine__28109__auto__);

(statearr_30310[(1)] = (1));

return statearr_30310;
});
var cljs$core$async$state_machine__28109__auto____1 = (function (state_30290){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_30290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e30311){if((e30311 instanceof Object)){
var ex__28112__auto__ = e30311;
var statearr_30312_30329 = state_30290;
(statearr_30312_30329[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30330 = state_30290;
state_30290 = G__30330;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
cljs$core$async$state_machine__28109__auto__ = function(state_30290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28109__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28109__auto____1.call(this,state_30290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28109__auto____0;
cljs$core$async$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28109__auto____1;
return cljs$core$async$state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto___30318,out))
})();
var state__28222__auto__ = (function (){var statearr_30313 = f__28221__auto__.call(null);
(statearr_30313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___30318);

return statearr_30313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto___30318,out))
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
var args30331 = [];
var len__25159__auto___30380 = arguments.length;
var i__25160__auto___30381 = (0);
while(true){
if((i__25160__auto___30381 < len__25159__auto___30380)){
args30331.push((arguments[i__25160__auto___30381]));

var G__30382 = (i__25160__auto___30381 + (1));
i__25160__auto___30381 = G__30382;
continue;
} else {
}
break;
}

var G__30333 = args30331.length;
switch (G__30333) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30331.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28220__auto___30384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto___30384,out){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto___30384,out){
return (function (state_30357){
var state_val_30358 = (state_30357[(1)]);
if((state_val_30358 === (7))){
var inst_30339 = (state_30357[(7)]);
var inst_30339__$1 = (state_30357[(2)]);
var inst_30340 = (inst_30339__$1 == null);
var inst_30341 = cljs.core.not.call(null,inst_30340);
var state_30357__$1 = (function (){var statearr_30359 = state_30357;
(statearr_30359[(7)] = inst_30339__$1);

return statearr_30359;
})();
if(inst_30341){
var statearr_30360_30385 = state_30357__$1;
(statearr_30360_30385[(1)] = (8));

} else {
var statearr_30361_30386 = state_30357__$1;
(statearr_30361_30386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (1))){
var inst_30334 = (0);
var state_30357__$1 = (function (){var statearr_30362 = state_30357;
(statearr_30362[(8)] = inst_30334);

return statearr_30362;
})();
var statearr_30363_30387 = state_30357__$1;
(statearr_30363_30387[(2)] = null);

(statearr_30363_30387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (4))){
var state_30357__$1 = state_30357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30357__$1,(7),ch);
} else {
if((state_val_30358 === (6))){
var inst_30352 = (state_30357[(2)]);
var state_30357__$1 = state_30357;
var statearr_30364_30388 = state_30357__$1;
(statearr_30364_30388[(2)] = inst_30352);

(statearr_30364_30388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (3))){
var inst_30354 = (state_30357[(2)]);
var inst_30355 = cljs.core.async.close_BANG_.call(null,out);
var state_30357__$1 = (function (){var statearr_30365 = state_30357;
(statearr_30365[(9)] = inst_30354);

return statearr_30365;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30357__$1,inst_30355);
} else {
if((state_val_30358 === (2))){
var inst_30334 = (state_30357[(8)]);
var inst_30336 = (inst_30334 < n);
var state_30357__$1 = state_30357;
if(cljs.core.truth_(inst_30336)){
var statearr_30366_30389 = state_30357__$1;
(statearr_30366_30389[(1)] = (4));

} else {
var statearr_30367_30390 = state_30357__$1;
(statearr_30367_30390[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (11))){
var inst_30334 = (state_30357[(8)]);
var inst_30344 = (state_30357[(2)]);
var inst_30345 = (inst_30334 + (1));
var inst_30334__$1 = inst_30345;
var state_30357__$1 = (function (){var statearr_30368 = state_30357;
(statearr_30368[(10)] = inst_30344);

(statearr_30368[(8)] = inst_30334__$1);

return statearr_30368;
})();
var statearr_30369_30391 = state_30357__$1;
(statearr_30369_30391[(2)] = null);

(statearr_30369_30391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (9))){
var state_30357__$1 = state_30357;
var statearr_30370_30392 = state_30357__$1;
(statearr_30370_30392[(2)] = null);

(statearr_30370_30392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (5))){
var state_30357__$1 = state_30357;
var statearr_30371_30393 = state_30357__$1;
(statearr_30371_30393[(2)] = null);

(statearr_30371_30393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (10))){
var inst_30349 = (state_30357[(2)]);
var state_30357__$1 = state_30357;
var statearr_30372_30394 = state_30357__$1;
(statearr_30372_30394[(2)] = inst_30349);

(statearr_30372_30394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (8))){
var inst_30339 = (state_30357[(7)]);
var state_30357__$1 = state_30357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30357__$1,(11),out,inst_30339);
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
});})(c__28220__auto___30384,out))
;
return ((function (switch__28108__auto__,c__28220__auto___30384,out){
return (function() {
var cljs$core$async$state_machine__28109__auto__ = null;
var cljs$core$async$state_machine__28109__auto____0 = (function (){
var statearr_30376 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30376[(0)] = cljs$core$async$state_machine__28109__auto__);

(statearr_30376[(1)] = (1));

return statearr_30376;
});
var cljs$core$async$state_machine__28109__auto____1 = (function (state_30357){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_30357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e30377){if((e30377 instanceof Object)){
var ex__28112__auto__ = e30377;
var statearr_30378_30395 = state_30357;
(statearr_30378_30395[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30396 = state_30357;
state_30357 = G__30396;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
cljs$core$async$state_machine__28109__auto__ = function(state_30357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28109__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28109__auto____1.call(this,state_30357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28109__auto____0;
cljs$core$async$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28109__auto____1;
return cljs$core$async$state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto___30384,out))
})();
var state__28222__auto__ = (function (){var statearr_30379 = f__28221__auto__.call(null);
(statearr_30379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___30384);

return statearr_30379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto___30384,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30404 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30404 = (function (map_LT_,f,ch,meta30405){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30405 = meta30405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30406,meta30405__$1){
var self__ = this;
var _30406__$1 = this;
return (new cljs.core.async.t_cljs$core$async30404(self__.map_LT_,self__.f,self__.ch,meta30405__$1));
});

cljs.core.async.t_cljs$core$async30404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30406){
var self__ = this;
var _30406__$1 = this;
return self__.meta30405;
});

cljs.core.async.t_cljs$core$async30404.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30404.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30404.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30404.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30404.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30407 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30407 = (function (map_LT_,f,ch,meta30405,_,fn1,meta30408){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30405 = meta30405;
this._ = _;
this.fn1 = fn1;
this.meta30408 = meta30408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30409,meta30408__$1){
var self__ = this;
var _30409__$1 = this;
return (new cljs.core.async.t_cljs$core$async30407(self__.map_LT_,self__.f,self__.ch,self__.meta30405,self__._,self__.fn1,meta30408__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30407.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30409){
var self__ = this;
var _30409__$1 = this;
return self__.meta30408;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30407.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30407.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30407.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30407.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30397_SHARP_){
return f1.call(null,(((p1__30397_SHARP_ == null))?null:self__.f.call(null,p1__30397_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30407.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30405","meta30405",849236141,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30404","cljs.core.async/t_cljs$core$async30404",-2101723742,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30408","meta30408",-1023906258,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30407.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30407";

cljs.core.async.t_cljs$core$async30407.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__24695__auto__,writer__24696__auto__,opt__24697__auto__){
return cljs.core._write.call(null,writer__24696__auto__,"cljs.core.async/t_cljs$core$async30407");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30407 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30407(map_LT___$1,f__$1,ch__$1,meta30405__$1,___$2,fn1__$1,meta30408){
return (new cljs.core.async.t_cljs$core$async30407(map_LT___$1,f__$1,ch__$1,meta30405__$1,___$2,fn1__$1,meta30408));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30407(self__.map_LT_,self__.f,self__.ch,self__.meta30405,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24077__auto__ = ret;
if(cljs.core.truth_(and__24077__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24077__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30404.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30404.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30405","meta30405",849236141,null)], null);
});

cljs.core.async.t_cljs$core$async30404.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30404";

cljs.core.async.t_cljs$core$async30404.cljs$lang$ctorPrWriter = (function (this__24695__auto__,writer__24696__auto__,opt__24697__auto__){
return cljs.core._write.call(null,writer__24696__auto__,"cljs.core.async/t_cljs$core$async30404");
});

cljs.core.async.__GT_t_cljs$core$async30404 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30404(map_LT___$1,f__$1,ch__$1,meta30405){
return (new cljs.core.async.t_cljs$core$async30404(map_LT___$1,f__$1,ch__$1,meta30405));
});

}

return (new cljs.core.async.t_cljs$core$async30404(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30413 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30413 = (function (map_GT_,f,ch,meta30414){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30414 = meta30414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30415,meta30414__$1){
var self__ = this;
var _30415__$1 = this;
return (new cljs.core.async.t_cljs$core$async30413(self__.map_GT_,self__.f,self__.ch,meta30414__$1));
});

cljs.core.async.t_cljs$core$async30413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30415){
var self__ = this;
var _30415__$1 = this;
return self__.meta30414;
});

cljs.core.async.t_cljs$core$async30413.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30413.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30413.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30413.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30413.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30413.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30413.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30414","meta30414",503012474,null)], null);
});

cljs.core.async.t_cljs$core$async30413.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30413.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30413";

cljs.core.async.t_cljs$core$async30413.cljs$lang$ctorPrWriter = (function (this__24695__auto__,writer__24696__auto__,opt__24697__auto__){
return cljs.core._write.call(null,writer__24696__auto__,"cljs.core.async/t_cljs$core$async30413");
});

cljs.core.async.__GT_t_cljs$core$async30413 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30413(map_GT___$1,f__$1,ch__$1,meta30414){
return (new cljs.core.async.t_cljs$core$async30413(map_GT___$1,f__$1,ch__$1,meta30414));
});

}

return (new cljs.core.async.t_cljs$core$async30413(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30419 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30419 = (function (filter_GT_,p,ch,meta30420){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30420 = meta30420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30421,meta30420__$1){
var self__ = this;
var _30421__$1 = this;
return (new cljs.core.async.t_cljs$core$async30419(self__.filter_GT_,self__.p,self__.ch,meta30420__$1));
});

cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30421){
var self__ = this;
var _30421__$1 = this;
return self__.meta30420;
});

cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30419.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30420","meta30420",1269398590,null)], null);
});

cljs.core.async.t_cljs$core$async30419.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30419.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30419";

cljs.core.async.t_cljs$core$async30419.cljs$lang$ctorPrWriter = (function (this__24695__auto__,writer__24696__auto__,opt__24697__auto__){
return cljs.core._write.call(null,writer__24696__auto__,"cljs.core.async/t_cljs$core$async30419");
});

cljs.core.async.__GT_t_cljs$core$async30419 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30419(filter_GT___$1,p__$1,ch__$1,meta30420){
return (new cljs.core.async.t_cljs$core$async30419(filter_GT___$1,p__$1,ch__$1,meta30420));
});

}

return (new cljs.core.async.t_cljs$core$async30419(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args30422 = [];
var len__25159__auto___30466 = arguments.length;
var i__25160__auto___30467 = (0);
while(true){
if((i__25160__auto___30467 < len__25159__auto___30466)){
args30422.push((arguments[i__25160__auto___30467]));

var G__30468 = (i__25160__auto___30467 + (1));
i__25160__auto___30467 = G__30468;
continue;
} else {
}
break;
}

var G__30424 = args30422.length;
switch (G__30424) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30422.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28220__auto___30470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto___30470,out){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto___30470,out){
return (function (state_30445){
var state_val_30446 = (state_30445[(1)]);
if((state_val_30446 === (7))){
var inst_30441 = (state_30445[(2)]);
var state_30445__$1 = state_30445;
var statearr_30447_30471 = state_30445__$1;
(statearr_30447_30471[(2)] = inst_30441);

(statearr_30447_30471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (1))){
var state_30445__$1 = state_30445;
var statearr_30448_30472 = state_30445__$1;
(statearr_30448_30472[(2)] = null);

(statearr_30448_30472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (4))){
var inst_30427 = (state_30445[(7)]);
var inst_30427__$1 = (state_30445[(2)]);
var inst_30428 = (inst_30427__$1 == null);
var state_30445__$1 = (function (){var statearr_30449 = state_30445;
(statearr_30449[(7)] = inst_30427__$1);

return statearr_30449;
})();
if(cljs.core.truth_(inst_30428)){
var statearr_30450_30473 = state_30445__$1;
(statearr_30450_30473[(1)] = (5));

} else {
var statearr_30451_30474 = state_30445__$1;
(statearr_30451_30474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (6))){
var inst_30427 = (state_30445[(7)]);
var inst_30432 = p.call(null,inst_30427);
var state_30445__$1 = state_30445;
if(cljs.core.truth_(inst_30432)){
var statearr_30452_30475 = state_30445__$1;
(statearr_30452_30475[(1)] = (8));

} else {
var statearr_30453_30476 = state_30445__$1;
(statearr_30453_30476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (3))){
var inst_30443 = (state_30445[(2)]);
var state_30445__$1 = state_30445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30445__$1,inst_30443);
} else {
if((state_val_30446 === (2))){
var state_30445__$1 = state_30445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30445__$1,(4),ch);
} else {
if((state_val_30446 === (11))){
var inst_30435 = (state_30445[(2)]);
var state_30445__$1 = state_30445;
var statearr_30454_30477 = state_30445__$1;
(statearr_30454_30477[(2)] = inst_30435);

(statearr_30454_30477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (9))){
var state_30445__$1 = state_30445;
var statearr_30455_30478 = state_30445__$1;
(statearr_30455_30478[(2)] = null);

(statearr_30455_30478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (5))){
var inst_30430 = cljs.core.async.close_BANG_.call(null,out);
var state_30445__$1 = state_30445;
var statearr_30456_30479 = state_30445__$1;
(statearr_30456_30479[(2)] = inst_30430);

(statearr_30456_30479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (10))){
var inst_30438 = (state_30445[(2)]);
var state_30445__$1 = (function (){var statearr_30457 = state_30445;
(statearr_30457[(8)] = inst_30438);

return statearr_30457;
})();
var statearr_30458_30480 = state_30445__$1;
(statearr_30458_30480[(2)] = null);

(statearr_30458_30480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (8))){
var inst_30427 = (state_30445[(7)]);
var state_30445__$1 = state_30445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30445__$1,(11),out,inst_30427);
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
});})(c__28220__auto___30470,out))
;
return ((function (switch__28108__auto__,c__28220__auto___30470,out){
return (function() {
var cljs$core$async$state_machine__28109__auto__ = null;
var cljs$core$async$state_machine__28109__auto____0 = (function (){
var statearr_30462 = [null,null,null,null,null,null,null,null,null];
(statearr_30462[(0)] = cljs$core$async$state_machine__28109__auto__);

(statearr_30462[(1)] = (1));

return statearr_30462;
});
var cljs$core$async$state_machine__28109__auto____1 = (function (state_30445){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_30445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e30463){if((e30463 instanceof Object)){
var ex__28112__auto__ = e30463;
var statearr_30464_30481 = state_30445;
(statearr_30464_30481[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30482 = state_30445;
state_30445 = G__30482;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
cljs$core$async$state_machine__28109__auto__ = function(state_30445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28109__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28109__auto____1.call(this,state_30445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28109__auto____0;
cljs$core$async$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28109__auto____1;
return cljs$core$async$state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto___30470,out))
})();
var state__28222__auto__ = (function (){var statearr_30465 = f__28221__auto__.call(null);
(statearr_30465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___30470);

return statearr_30465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto___30470,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30483 = [];
var len__25159__auto___30486 = arguments.length;
var i__25160__auto___30487 = (0);
while(true){
if((i__25160__auto___30487 < len__25159__auto___30486)){
args30483.push((arguments[i__25160__auto___30487]));

var G__30488 = (i__25160__auto___30487 + (1));
i__25160__auto___30487 = G__30488;
continue;
} else {
}
break;
}

var G__30485 = args30483.length;
switch (G__30485) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30483.length)].join('')));

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
var c__28220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto__){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto__){
return (function (state_30655){
var state_val_30656 = (state_30655[(1)]);
if((state_val_30656 === (7))){
var inst_30651 = (state_30655[(2)]);
var state_30655__$1 = state_30655;
var statearr_30657_30698 = state_30655__$1;
(statearr_30657_30698[(2)] = inst_30651);

(statearr_30657_30698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (20))){
var inst_30621 = (state_30655[(7)]);
var inst_30632 = (state_30655[(2)]);
var inst_30633 = cljs.core.next.call(null,inst_30621);
var inst_30607 = inst_30633;
var inst_30608 = null;
var inst_30609 = (0);
var inst_30610 = (0);
var state_30655__$1 = (function (){var statearr_30658 = state_30655;
(statearr_30658[(8)] = inst_30632);

(statearr_30658[(9)] = inst_30609);

(statearr_30658[(10)] = inst_30610);

(statearr_30658[(11)] = inst_30607);

(statearr_30658[(12)] = inst_30608);

return statearr_30658;
})();
var statearr_30659_30699 = state_30655__$1;
(statearr_30659_30699[(2)] = null);

(statearr_30659_30699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (1))){
var state_30655__$1 = state_30655;
var statearr_30660_30700 = state_30655__$1;
(statearr_30660_30700[(2)] = null);

(statearr_30660_30700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (4))){
var inst_30596 = (state_30655[(13)]);
var inst_30596__$1 = (state_30655[(2)]);
var inst_30597 = (inst_30596__$1 == null);
var state_30655__$1 = (function (){var statearr_30661 = state_30655;
(statearr_30661[(13)] = inst_30596__$1);

return statearr_30661;
})();
if(cljs.core.truth_(inst_30597)){
var statearr_30662_30701 = state_30655__$1;
(statearr_30662_30701[(1)] = (5));

} else {
var statearr_30663_30702 = state_30655__$1;
(statearr_30663_30702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (15))){
var state_30655__$1 = state_30655;
var statearr_30667_30703 = state_30655__$1;
(statearr_30667_30703[(2)] = null);

(statearr_30667_30703[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (21))){
var state_30655__$1 = state_30655;
var statearr_30668_30704 = state_30655__$1;
(statearr_30668_30704[(2)] = null);

(statearr_30668_30704[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (13))){
var inst_30609 = (state_30655[(9)]);
var inst_30610 = (state_30655[(10)]);
var inst_30607 = (state_30655[(11)]);
var inst_30608 = (state_30655[(12)]);
var inst_30617 = (state_30655[(2)]);
var inst_30618 = (inst_30610 + (1));
var tmp30664 = inst_30609;
var tmp30665 = inst_30607;
var tmp30666 = inst_30608;
var inst_30607__$1 = tmp30665;
var inst_30608__$1 = tmp30666;
var inst_30609__$1 = tmp30664;
var inst_30610__$1 = inst_30618;
var state_30655__$1 = (function (){var statearr_30669 = state_30655;
(statearr_30669[(9)] = inst_30609__$1);

(statearr_30669[(10)] = inst_30610__$1);

(statearr_30669[(11)] = inst_30607__$1);

(statearr_30669[(14)] = inst_30617);

(statearr_30669[(12)] = inst_30608__$1);

return statearr_30669;
})();
var statearr_30670_30705 = state_30655__$1;
(statearr_30670_30705[(2)] = null);

(statearr_30670_30705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (22))){
var state_30655__$1 = state_30655;
var statearr_30671_30706 = state_30655__$1;
(statearr_30671_30706[(2)] = null);

(statearr_30671_30706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (6))){
var inst_30596 = (state_30655[(13)]);
var inst_30605 = f.call(null,inst_30596);
var inst_30606 = cljs.core.seq.call(null,inst_30605);
var inst_30607 = inst_30606;
var inst_30608 = null;
var inst_30609 = (0);
var inst_30610 = (0);
var state_30655__$1 = (function (){var statearr_30672 = state_30655;
(statearr_30672[(9)] = inst_30609);

(statearr_30672[(10)] = inst_30610);

(statearr_30672[(11)] = inst_30607);

(statearr_30672[(12)] = inst_30608);

return statearr_30672;
})();
var statearr_30673_30707 = state_30655__$1;
(statearr_30673_30707[(2)] = null);

(statearr_30673_30707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (17))){
var inst_30621 = (state_30655[(7)]);
var inst_30625 = cljs.core.chunk_first.call(null,inst_30621);
var inst_30626 = cljs.core.chunk_rest.call(null,inst_30621);
var inst_30627 = cljs.core.count.call(null,inst_30625);
var inst_30607 = inst_30626;
var inst_30608 = inst_30625;
var inst_30609 = inst_30627;
var inst_30610 = (0);
var state_30655__$1 = (function (){var statearr_30674 = state_30655;
(statearr_30674[(9)] = inst_30609);

(statearr_30674[(10)] = inst_30610);

(statearr_30674[(11)] = inst_30607);

(statearr_30674[(12)] = inst_30608);

return statearr_30674;
})();
var statearr_30675_30708 = state_30655__$1;
(statearr_30675_30708[(2)] = null);

(statearr_30675_30708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (3))){
var inst_30653 = (state_30655[(2)]);
var state_30655__$1 = state_30655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30655__$1,inst_30653);
} else {
if((state_val_30656 === (12))){
var inst_30641 = (state_30655[(2)]);
var state_30655__$1 = state_30655;
var statearr_30676_30709 = state_30655__$1;
(statearr_30676_30709[(2)] = inst_30641);

(statearr_30676_30709[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (2))){
var state_30655__$1 = state_30655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30655__$1,(4),in$);
} else {
if((state_val_30656 === (23))){
var inst_30649 = (state_30655[(2)]);
var state_30655__$1 = state_30655;
var statearr_30677_30710 = state_30655__$1;
(statearr_30677_30710[(2)] = inst_30649);

(statearr_30677_30710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (19))){
var inst_30636 = (state_30655[(2)]);
var state_30655__$1 = state_30655;
var statearr_30678_30711 = state_30655__$1;
(statearr_30678_30711[(2)] = inst_30636);

(statearr_30678_30711[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (11))){
var inst_30621 = (state_30655[(7)]);
var inst_30607 = (state_30655[(11)]);
var inst_30621__$1 = cljs.core.seq.call(null,inst_30607);
var state_30655__$1 = (function (){var statearr_30679 = state_30655;
(statearr_30679[(7)] = inst_30621__$1);

return statearr_30679;
})();
if(inst_30621__$1){
var statearr_30680_30712 = state_30655__$1;
(statearr_30680_30712[(1)] = (14));

} else {
var statearr_30681_30713 = state_30655__$1;
(statearr_30681_30713[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (9))){
var inst_30643 = (state_30655[(2)]);
var inst_30644 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30655__$1 = (function (){var statearr_30682 = state_30655;
(statearr_30682[(15)] = inst_30643);

return statearr_30682;
})();
if(cljs.core.truth_(inst_30644)){
var statearr_30683_30714 = state_30655__$1;
(statearr_30683_30714[(1)] = (21));

} else {
var statearr_30684_30715 = state_30655__$1;
(statearr_30684_30715[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (5))){
var inst_30599 = cljs.core.async.close_BANG_.call(null,out);
var state_30655__$1 = state_30655;
var statearr_30685_30716 = state_30655__$1;
(statearr_30685_30716[(2)] = inst_30599);

(statearr_30685_30716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (14))){
var inst_30621 = (state_30655[(7)]);
var inst_30623 = cljs.core.chunked_seq_QMARK_.call(null,inst_30621);
var state_30655__$1 = state_30655;
if(inst_30623){
var statearr_30686_30717 = state_30655__$1;
(statearr_30686_30717[(1)] = (17));

} else {
var statearr_30687_30718 = state_30655__$1;
(statearr_30687_30718[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (16))){
var inst_30639 = (state_30655[(2)]);
var state_30655__$1 = state_30655;
var statearr_30688_30719 = state_30655__$1;
(statearr_30688_30719[(2)] = inst_30639);

(statearr_30688_30719[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (10))){
var inst_30610 = (state_30655[(10)]);
var inst_30608 = (state_30655[(12)]);
var inst_30615 = cljs.core._nth.call(null,inst_30608,inst_30610);
var state_30655__$1 = state_30655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30655__$1,(13),out,inst_30615);
} else {
if((state_val_30656 === (18))){
var inst_30621 = (state_30655[(7)]);
var inst_30630 = cljs.core.first.call(null,inst_30621);
var state_30655__$1 = state_30655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30655__$1,(20),out,inst_30630);
} else {
if((state_val_30656 === (8))){
var inst_30609 = (state_30655[(9)]);
var inst_30610 = (state_30655[(10)]);
var inst_30612 = (inst_30610 < inst_30609);
var inst_30613 = inst_30612;
var state_30655__$1 = state_30655;
if(cljs.core.truth_(inst_30613)){
var statearr_30689_30720 = state_30655__$1;
(statearr_30689_30720[(1)] = (10));

} else {
var statearr_30690_30721 = state_30655__$1;
(statearr_30690_30721[(1)] = (11));

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
});})(c__28220__auto__))
;
return ((function (switch__28108__auto__,c__28220__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28109__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28109__auto____0 = (function (){
var statearr_30694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30694[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28109__auto__);

(statearr_30694[(1)] = (1));

return statearr_30694;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28109__auto____1 = (function (state_30655){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_30655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e30695){if((e30695 instanceof Object)){
var ex__28112__auto__ = e30695;
var statearr_30696_30722 = state_30655;
(statearr_30696_30722[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30723 = state_30655;
state_30655 = G__30723;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28109__auto__ = function(state_30655){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28109__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28109__auto____1.call(this,state_30655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28109__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28109__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto__))
})();
var state__28222__auto__ = (function (){var statearr_30697 = f__28221__auto__.call(null);
(statearr_30697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto__);

return statearr_30697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto__))
);

return c__28220__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30724 = [];
var len__25159__auto___30727 = arguments.length;
var i__25160__auto___30728 = (0);
while(true){
if((i__25160__auto___30728 < len__25159__auto___30727)){
args30724.push((arguments[i__25160__auto___30728]));

var G__30729 = (i__25160__auto___30728 + (1));
i__25160__auto___30728 = G__30729;
continue;
} else {
}
break;
}

var G__30726 = args30724.length;
switch (G__30726) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30724.length)].join('')));

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
var args30731 = [];
var len__25159__auto___30734 = arguments.length;
var i__25160__auto___30735 = (0);
while(true){
if((i__25160__auto___30735 < len__25159__auto___30734)){
args30731.push((arguments[i__25160__auto___30735]));

var G__30736 = (i__25160__auto___30735 + (1));
i__25160__auto___30735 = G__30736;
continue;
} else {
}
break;
}

var G__30733 = args30731.length;
switch (G__30733) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30731.length)].join('')));

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
var args30738 = [];
var len__25159__auto___30789 = arguments.length;
var i__25160__auto___30790 = (0);
while(true){
if((i__25160__auto___30790 < len__25159__auto___30789)){
args30738.push((arguments[i__25160__auto___30790]));

var G__30791 = (i__25160__auto___30790 + (1));
i__25160__auto___30790 = G__30791;
continue;
} else {
}
break;
}

var G__30740 = args30738.length;
switch (G__30740) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30738.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28220__auto___30793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto___30793,out){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto___30793,out){
return (function (state_30764){
var state_val_30765 = (state_30764[(1)]);
if((state_val_30765 === (7))){
var inst_30759 = (state_30764[(2)]);
var state_30764__$1 = state_30764;
var statearr_30766_30794 = state_30764__$1;
(statearr_30766_30794[(2)] = inst_30759);

(statearr_30766_30794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30765 === (1))){
var inst_30741 = null;
var state_30764__$1 = (function (){var statearr_30767 = state_30764;
(statearr_30767[(7)] = inst_30741);

return statearr_30767;
})();
var statearr_30768_30795 = state_30764__$1;
(statearr_30768_30795[(2)] = null);

(statearr_30768_30795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30765 === (4))){
var inst_30744 = (state_30764[(8)]);
var inst_30744__$1 = (state_30764[(2)]);
var inst_30745 = (inst_30744__$1 == null);
var inst_30746 = cljs.core.not.call(null,inst_30745);
var state_30764__$1 = (function (){var statearr_30769 = state_30764;
(statearr_30769[(8)] = inst_30744__$1);

return statearr_30769;
})();
if(inst_30746){
var statearr_30770_30796 = state_30764__$1;
(statearr_30770_30796[(1)] = (5));

} else {
var statearr_30771_30797 = state_30764__$1;
(statearr_30771_30797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30765 === (6))){
var state_30764__$1 = state_30764;
var statearr_30772_30798 = state_30764__$1;
(statearr_30772_30798[(2)] = null);

(statearr_30772_30798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30765 === (3))){
var inst_30761 = (state_30764[(2)]);
var inst_30762 = cljs.core.async.close_BANG_.call(null,out);
var state_30764__$1 = (function (){var statearr_30773 = state_30764;
(statearr_30773[(9)] = inst_30761);

return statearr_30773;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30764__$1,inst_30762);
} else {
if((state_val_30765 === (2))){
var state_30764__$1 = state_30764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30764__$1,(4),ch);
} else {
if((state_val_30765 === (11))){
var inst_30744 = (state_30764[(8)]);
var inst_30753 = (state_30764[(2)]);
var inst_30741 = inst_30744;
var state_30764__$1 = (function (){var statearr_30774 = state_30764;
(statearr_30774[(10)] = inst_30753);

(statearr_30774[(7)] = inst_30741);

return statearr_30774;
})();
var statearr_30775_30799 = state_30764__$1;
(statearr_30775_30799[(2)] = null);

(statearr_30775_30799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30765 === (9))){
var inst_30744 = (state_30764[(8)]);
var state_30764__$1 = state_30764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30764__$1,(11),out,inst_30744);
} else {
if((state_val_30765 === (5))){
var inst_30744 = (state_30764[(8)]);
var inst_30741 = (state_30764[(7)]);
var inst_30748 = cljs.core._EQ_.call(null,inst_30744,inst_30741);
var state_30764__$1 = state_30764;
if(inst_30748){
var statearr_30777_30800 = state_30764__$1;
(statearr_30777_30800[(1)] = (8));

} else {
var statearr_30778_30801 = state_30764__$1;
(statearr_30778_30801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30765 === (10))){
var inst_30756 = (state_30764[(2)]);
var state_30764__$1 = state_30764;
var statearr_30779_30802 = state_30764__$1;
(statearr_30779_30802[(2)] = inst_30756);

(statearr_30779_30802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30765 === (8))){
var inst_30741 = (state_30764[(7)]);
var tmp30776 = inst_30741;
var inst_30741__$1 = tmp30776;
var state_30764__$1 = (function (){var statearr_30780 = state_30764;
(statearr_30780[(7)] = inst_30741__$1);

return statearr_30780;
})();
var statearr_30781_30803 = state_30764__$1;
(statearr_30781_30803[(2)] = null);

(statearr_30781_30803[(1)] = (2));


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
});})(c__28220__auto___30793,out))
;
return ((function (switch__28108__auto__,c__28220__auto___30793,out){
return (function() {
var cljs$core$async$state_machine__28109__auto__ = null;
var cljs$core$async$state_machine__28109__auto____0 = (function (){
var statearr_30785 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30785[(0)] = cljs$core$async$state_machine__28109__auto__);

(statearr_30785[(1)] = (1));

return statearr_30785;
});
var cljs$core$async$state_machine__28109__auto____1 = (function (state_30764){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_30764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e30786){if((e30786 instanceof Object)){
var ex__28112__auto__ = e30786;
var statearr_30787_30804 = state_30764;
(statearr_30787_30804[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30805 = state_30764;
state_30764 = G__30805;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
cljs$core$async$state_machine__28109__auto__ = function(state_30764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28109__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28109__auto____1.call(this,state_30764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28109__auto____0;
cljs$core$async$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28109__auto____1;
return cljs$core$async$state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto___30793,out))
})();
var state__28222__auto__ = (function (){var statearr_30788 = f__28221__auto__.call(null);
(statearr_30788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___30793);

return statearr_30788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto___30793,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30806 = [];
var len__25159__auto___30876 = arguments.length;
var i__25160__auto___30877 = (0);
while(true){
if((i__25160__auto___30877 < len__25159__auto___30876)){
args30806.push((arguments[i__25160__auto___30877]));

var G__30878 = (i__25160__auto___30877 + (1));
i__25160__auto___30877 = G__30878;
continue;
} else {
}
break;
}

var G__30808 = args30806.length;
switch (G__30808) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30806.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28220__auto___30880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto___30880,out){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto___30880,out){
return (function (state_30846){
var state_val_30847 = (state_30846[(1)]);
if((state_val_30847 === (7))){
var inst_30842 = (state_30846[(2)]);
var state_30846__$1 = state_30846;
var statearr_30848_30881 = state_30846__$1;
(statearr_30848_30881[(2)] = inst_30842);

(statearr_30848_30881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (1))){
var inst_30809 = (new Array(n));
var inst_30810 = inst_30809;
var inst_30811 = (0);
var state_30846__$1 = (function (){var statearr_30849 = state_30846;
(statearr_30849[(7)] = inst_30810);

(statearr_30849[(8)] = inst_30811);

return statearr_30849;
})();
var statearr_30850_30882 = state_30846__$1;
(statearr_30850_30882[(2)] = null);

(statearr_30850_30882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (4))){
var inst_30814 = (state_30846[(9)]);
var inst_30814__$1 = (state_30846[(2)]);
var inst_30815 = (inst_30814__$1 == null);
var inst_30816 = cljs.core.not.call(null,inst_30815);
var state_30846__$1 = (function (){var statearr_30851 = state_30846;
(statearr_30851[(9)] = inst_30814__$1);

return statearr_30851;
})();
if(inst_30816){
var statearr_30852_30883 = state_30846__$1;
(statearr_30852_30883[(1)] = (5));

} else {
var statearr_30853_30884 = state_30846__$1;
(statearr_30853_30884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (15))){
var inst_30836 = (state_30846[(2)]);
var state_30846__$1 = state_30846;
var statearr_30854_30885 = state_30846__$1;
(statearr_30854_30885[(2)] = inst_30836);

(statearr_30854_30885[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (13))){
var state_30846__$1 = state_30846;
var statearr_30855_30886 = state_30846__$1;
(statearr_30855_30886[(2)] = null);

(statearr_30855_30886[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (6))){
var inst_30811 = (state_30846[(8)]);
var inst_30832 = (inst_30811 > (0));
var state_30846__$1 = state_30846;
if(cljs.core.truth_(inst_30832)){
var statearr_30856_30887 = state_30846__$1;
(statearr_30856_30887[(1)] = (12));

} else {
var statearr_30857_30888 = state_30846__$1;
(statearr_30857_30888[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (3))){
var inst_30844 = (state_30846[(2)]);
var state_30846__$1 = state_30846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30846__$1,inst_30844);
} else {
if((state_val_30847 === (12))){
var inst_30810 = (state_30846[(7)]);
var inst_30834 = cljs.core.vec.call(null,inst_30810);
var state_30846__$1 = state_30846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30846__$1,(15),out,inst_30834);
} else {
if((state_val_30847 === (2))){
var state_30846__$1 = state_30846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30846__$1,(4),ch);
} else {
if((state_val_30847 === (11))){
var inst_30826 = (state_30846[(2)]);
var inst_30827 = (new Array(n));
var inst_30810 = inst_30827;
var inst_30811 = (0);
var state_30846__$1 = (function (){var statearr_30858 = state_30846;
(statearr_30858[(10)] = inst_30826);

(statearr_30858[(7)] = inst_30810);

(statearr_30858[(8)] = inst_30811);

return statearr_30858;
})();
var statearr_30859_30889 = state_30846__$1;
(statearr_30859_30889[(2)] = null);

(statearr_30859_30889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (9))){
var inst_30810 = (state_30846[(7)]);
var inst_30824 = cljs.core.vec.call(null,inst_30810);
var state_30846__$1 = state_30846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30846__$1,(11),out,inst_30824);
} else {
if((state_val_30847 === (5))){
var inst_30814 = (state_30846[(9)]);
var inst_30810 = (state_30846[(7)]);
var inst_30819 = (state_30846[(11)]);
var inst_30811 = (state_30846[(8)]);
var inst_30818 = (inst_30810[inst_30811] = inst_30814);
var inst_30819__$1 = (inst_30811 + (1));
var inst_30820 = (inst_30819__$1 < n);
var state_30846__$1 = (function (){var statearr_30860 = state_30846;
(statearr_30860[(11)] = inst_30819__$1);

(statearr_30860[(12)] = inst_30818);

return statearr_30860;
})();
if(cljs.core.truth_(inst_30820)){
var statearr_30861_30890 = state_30846__$1;
(statearr_30861_30890[(1)] = (8));

} else {
var statearr_30862_30891 = state_30846__$1;
(statearr_30862_30891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (14))){
var inst_30839 = (state_30846[(2)]);
var inst_30840 = cljs.core.async.close_BANG_.call(null,out);
var state_30846__$1 = (function (){var statearr_30864 = state_30846;
(statearr_30864[(13)] = inst_30839);

return statearr_30864;
})();
var statearr_30865_30892 = state_30846__$1;
(statearr_30865_30892[(2)] = inst_30840);

(statearr_30865_30892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (10))){
var inst_30830 = (state_30846[(2)]);
var state_30846__$1 = state_30846;
var statearr_30866_30893 = state_30846__$1;
(statearr_30866_30893[(2)] = inst_30830);

(statearr_30866_30893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (8))){
var inst_30810 = (state_30846[(7)]);
var inst_30819 = (state_30846[(11)]);
var tmp30863 = inst_30810;
var inst_30810__$1 = tmp30863;
var inst_30811 = inst_30819;
var state_30846__$1 = (function (){var statearr_30867 = state_30846;
(statearr_30867[(7)] = inst_30810__$1);

(statearr_30867[(8)] = inst_30811);

return statearr_30867;
})();
var statearr_30868_30894 = state_30846__$1;
(statearr_30868_30894[(2)] = null);

(statearr_30868_30894[(1)] = (2));


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
});})(c__28220__auto___30880,out))
;
return ((function (switch__28108__auto__,c__28220__auto___30880,out){
return (function() {
var cljs$core$async$state_machine__28109__auto__ = null;
var cljs$core$async$state_machine__28109__auto____0 = (function (){
var statearr_30872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30872[(0)] = cljs$core$async$state_machine__28109__auto__);

(statearr_30872[(1)] = (1));

return statearr_30872;
});
var cljs$core$async$state_machine__28109__auto____1 = (function (state_30846){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_30846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e30873){if((e30873 instanceof Object)){
var ex__28112__auto__ = e30873;
var statearr_30874_30895 = state_30846;
(statearr_30874_30895[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30896 = state_30846;
state_30846 = G__30896;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
cljs$core$async$state_machine__28109__auto__ = function(state_30846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28109__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28109__auto____1.call(this,state_30846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28109__auto____0;
cljs$core$async$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28109__auto____1;
return cljs$core$async$state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto___30880,out))
})();
var state__28222__auto__ = (function (){var statearr_30875 = f__28221__auto__.call(null);
(statearr_30875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___30880);

return statearr_30875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto___30880,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30897 = [];
var len__25159__auto___30971 = arguments.length;
var i__25160__auto___30972 = (0);
while(true){
if((i__25160__auto___30972 < len__25159__auto___30971)){
args30897.push((arguments[i__25160__auto___30972]));

var G__30973 = (i__25160__auto___30972 + (1));
i__25160__auto___30972 = G__30973;
continue;
} else {
}
break;
}

var G__30899 = args30897.length;
switch (G__30899) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30897.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28220__auto___30975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto___30975,out){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto___30975,out){
return (function (state_30941){
var state_val_30942 = (state_30941[(1)]);
if((state_val_30942 === (7))){
var inst_30937 = (state_30941[(2)]);
var state_30941__$1 = state_30941;
var statearr_30943_30976 = state_30941__$1;
(statearr_30943_30976[(2)] = inst_30937);

(statearr_30943_30976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (1))){
var inst_30900 = [];
var inst_30901 = inst_30900;
var inst_30902 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30941__$1 = (function (){var statearr_30944 = state_30941;
(statearr_30944[(7)] = inst_30901);

(statearr_30944[(8)] = inst_30902);

return statearr_30944;
})();
var statearr_30945_30977 = state_30941__$1;
(statearr_30945_30977[(2)] = null);

(statearr_30945_30977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (4))){
var inst_30905 = (state_30941[(9)]);
var inst_30905__$1 = (state_30941[(2)]);
var inst_30906 = (inst_30905__$1 == null);
var inst_30907 = cljs.core.not.call(null,inst_30906);
var state_30941__$1 = (function (){var statearr_30946 = state_30941;
(statearr_30946[(9)] = inst_30905__$1);

return statearr_30946;
})();
if(inst_30907){
var statearr_30947_30978 = state_30941__$1;
(statearr_30947_30978[(1)] = (5));

} else {
var statearr_30948_30979 = state_30941__$1;
(statearr_30948_30979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (15))){
var inst_30931 = (state_30941[(2)]);
var state_30941__$1 = state_30941;
var statearr_30949_30980 = state_30941__$1;
(statearr_30949_30980[(2)] = inst_30931);

(statearr_30949_30980[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (13))){
var state_30941__$1 = state_30941;
var statearr_30950_30981 = state_30941__$1;
(statearr_30950_30981[(2)] = null);

(statearr_30950_30981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (6))){
var inst_30901 = (state_30941[(7)]);
var inst_30926 = inst_30901.length;
var inst_30927 = (inst_30926 > (0));
var state_30941__$1 = state_30941;
if(cljs.core.truth_(inst_30927)){
var statearr_30951_30982 = state_30941__$1;
(statearr_30951_30982[(1)] = (12));

} else {
var statearr_30952_30983 = state_30941__$1;
(statearr_30952_30983[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (3))){
var inst_30939 = (state_30941[(2)]);
var state_30941__$1 = state_30941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30941__$1,inst_30939);
} else {
if((state_val_30942 === (12))){
var inst_30901 = (state_30941[(7)]);
var inst_30929 = cljs.core.vec.call(null,inst_30901);
var state_30941__$1 = state_30941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30941__$1,(15),out,inst_30929);
} else {
if((state_val_30942 === (2))){
var state_30941__$1 = state_30941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30941__$1,(4),ch);
} else {
if((state_val_30942 === (11))){
var inst_30905 = (state_30941[(9)]);
var inst_30909 = (state_30941[(10)]);
var inst_30919 = (state_30941[(2)]);
var inst_30920 = [];
var inst_30921 = inst_30920.push(inst_30905);
var inst_30901 = inst_30920;
var inst_30902 = inst_30909;
var state_30941__$1 = (function (){var statearr_30953 = state_30941;
(statearr_30953[(11)] = inst_30921);

(statearr_30953[(12)] = inst_30919);

(statearr_30953[(7)] = inst_30901);

(statearr_30953[(8)] = inst_30902);

return statearr_30953;
})();
var statearr_30954_30984 = state_30941__$1;
(statearr_30954_30984[(2)] = null);

(statearr_30954_30984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (9))){
var inst_30901 = (state_30941[(7)]);
var inst_30917 = cljs.core.vec.call(null,inst_30901);
var state_30941__$1 = state_30941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30941__$1,(11),out,inst_30917);
} else {
if((state_val_30942 === (5))){
var inst_30905 = (state_30941[(9)]);
var inst_30909 = (state_30941[(10)]);
var inst_30902 = (state_30941[(8)]);
var inst_30909__$1 = f.call(null,inst_30905);
var inst_30910 = cljs.core._EQ_.call(null,inst_30909__$1,inst_30902);
var inst_30911 = cljs.core.keyword_identical_QMARK_.call(null,inst_30902,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30912 = (inst_30910) || (inst_30911);
var state_30941__$1 = (function (){var statearr_30955 = state_30941;
(statearr_30955[(10)] = inst_30909__$1);

return statearr_30955;
})();
if(cljs.core.truth_(inst_30912)){
var statearr_30956_30985 = state_30941__$1;
(statearr_30956_30985[(1)] = (8));

} else {
var statearr_30957_30986 = state_30941__$1;
(statearr_30957_30986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (14))){
var inst_30934 = (state_30941[(2)]);
var inst_30935 = cljs.core.async.close_BANG_.call(null,out);
var state_30941__$1 = (function (){var statearr_30959 = state_30941;
(statearr_30959[(13)] = inst_30934);

return statearr_30959;
})();
var statearr_30960_30987 = state_30941__$1;
(statearr_30960_30987[(2)] = inst_30935);

(statearr_30960_30987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (10))){
var inst_30924 = (state_30941[(2)]);
var state_30941__$1 = state_30941;
var statearr_30961_30988 = state_30941__$1;
(statearr_30961_30988[(2)] = inst_30924);

(statearr_30961_30988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30942 === (8))){
var inst_30905 = (state_30941[(9)]);
var inst_30909 = (state_30941[(10)]);
var inst_30901 = (state_30941[(7)]);
var inst_30914 = inst_30901.push(inst_30905);
var tmp30958 = inst_30901;
var inst_30901__$1 = tmp30958;
var inst_30902 = inst_30909;
var state_30941__$1 = (function (){var statearr_30962 = state_30941;
(statearr_30962[(14)] = inst_30914);

(statearr_30962[(7)] = inst_30901__$1);

(statearr_30962[(8)] = inst_30902);

return statearr_30962;
})();
var statearr_30963_30989 = state_30941__$1;
(statearr_30963_30989[(2)] = null);

(statearr_30963_30989[(1)] = (2));


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
});})(c__28220__auto___30975,out))
;
return ((function (switch__28108__auto__,c__28220__auto___30975,out){
return (function() {
var cljs$core$async$state_machine__28109__auto__ = null;
var cljs$core$async$state_machine__28109__auto____0 = (function (){
var statearr_30967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30967[(0)] = cljs$core$async$state_machine__28109__auto__);

(statearr_30967[(1)] = (1));

return statearr_30967;
});
var cljs$core$async$state_machine__28109__auto____1 = (function (state_30941){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_30941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e30968){if((e30968 instanceof Object)){
var ex__28112__auto__ = e30968;
var statearr_30969_30990 = state_30941;
(statearr_30969_30990[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30991 = state_30941;
state_30941 = G__30991;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
cljs$core$async$state_machine__28109__auto__ = function(state_30941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28109__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28109__auto____1.call(this,state_30941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28109__auto____0;
cljs$core$async$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28109__auto____1;
return cljs$core$async$state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto___30975,out))
})();
var state__28222__auto__ = (function (){var statearr_30970 = f__28221__auto__.call(null);
(statearr_30970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___30975);

return statearr_30970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto___30975,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map