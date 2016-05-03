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
var args25203 = [];
var len__22809__auto___25209 = arguments.length;
var i__22810__auto___25210 = (0);
while(true){
if((i__22810__auto___25210 < len__22809__auto___25209)){
args25203.push((arguments[i__22810__auto___25210]));

var G__25211 = (i__22810__auto___25210 + (1));
i__22810__auto___25210 = G__25211;
continue;
} else {
}
break;
}

var G__25205 = args25203.length;
switch (G__25205) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25203.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async25206 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25206 = (function (f,blockable,meta25207){
this.f = f;
this.blockable = blockable;
this.meta25207 = meta25207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25208,meta25207__$1){
var self__ = this;
var _25208__$1 = this;
return (new cljs.core.async.t_cljs$core$async25206(self__.f,self__.blockable,meta25207__$1));
});

cljs.core.async.t_cljs$core$async25206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25208){
var self__ = this;
var _25208__$1 = this;
return self__.meta25207;
});

cljs.core.async.t_cljs$core$async25206.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25206.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25206.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25206.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25207","meta25207",191008433,null)], null);
});

cljs.core.async.t_cljs$core$async25206.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25206";

cljs.core.async.t_cljs$core$async25206.cljs$lang$ctorPrWriter = (function (this__22344__auto__,writer__22345__auto__,opt__22346__auto__){
return cljs.core._write.call(null,writer__22345__auto__,"cljs.core.async/t_cljs$core$async25206");
});

cljs.core.async.__GT_t_cljs$core$async25206 = (function cljs$core$async$__GT_t_cljs$core$async25206(f__$1,blockable__$1,meta25207){
return (new cljs.core.async.t_cljs$core$async25206(f__$1,blockable__$1,meta25207));
});

}

return (new cljs.core.async.t_cljs$core$async25206(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args25215 = [];
var len__22809__auto___25218 = arguments.length;
var i__22810__auto___25219 = (0);
while(true){
if((i__22810__auto___25219 < len__22809__auto___25218)){
args25215.push((arguments[i__22810__auto___25219]));

var G__25220 = (i__22810__auto___25219 + (1));
i__22810__auto___25219 = G__25220;
continue;
} else {
}
break;
}

var G__25217 = args25215.length;
switch (G__25217) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25215.length)].join('')));

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
var args25222 = [];
var len__22809__auto___25225 = arguments.length;
var i__22810__auto___25226 = (0);
while(true){
if((i__22810__auto___25226 < len__22809__auto___25225)){
args25222.push((arguments[i__22810__auto___25226]));

var G__25227 = (i__22810__auto___25226 + (1));
i__22810__auto___25226 = G__25227;
continue;
} else {
}
break;
}

var G__25224 = args25222.length;
switch (G__25224) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25222.length)].join('')));

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
var args25229 = [];
var len__22809__auto___25232 = arguments.length;
var i__22810__auto___25233 = (0);
while(true){
if((i__22810__auto___25233 < len__22809__auto___25232)){
args25229.push((arguments[i__22810__auto___25233]));

var G__25234 = (i__22810__auto___25233 + (1));
i__22810__auto___25233 = G__25234;
continue;
} else {
}
break;
}

var G__25231 = args25229.length;
switch (G__25231) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25229.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25236 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25236);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25236,ret){
return (function (){
return fn1.call(null,val_25236);
});})(val_25236,ret))
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
var args25237 = [];
var len__22809__auto___25240 = arguments.length;
var i__22810__auto___25241 = (0);
while(true){
if((i__22810__auto___25241 < len__22809__auto___25240)){
args25237.push((arguments[i__22810__auto___25241]));

var G__25242 = (i__22810__auto___25241 + (1));
i__22810__auto___25241 = G__25242;
continue;
} else {
}
break;
}

var G__25239 = args25237.length;
switch (G__25239) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25237.length)].join('')));

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
var n__22653__auto___25244 = n;
var x_25245 = (0);
while(true){
if((x_25245 < n__22653__auto___25244)){
(a[x_25245] = (0));

var G__25246 = (x_25245 + (1));
x_25245 = G__25246;
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

var G__25247 = (i + (1));
i = G__25247;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25251 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25251 = (function (alt_flag,flag,meta25252){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25252 = meta25252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25253,meta25252__$1){
var self__ = this;
var _25253__$1 = this;
return (new cljs.core.async.t_cljs$core$async25251(self__.alt_flag,self__.flag,meta25252__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25251.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25253){
var self__ = this;
var _25253__$1 = this;
return self__.meta25252;
});})(flag))
;

cljs.core.async.t_cljs$core$async25251.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25251.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25251.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25251.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25251.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25252","meta25252",442591892,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25251.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25251";

cljs.core.async.t_cljs$core$async25251.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22344__auto__,writer__22345__auto__,opt__22346__auto__){
return cljs.core._write.call(null,writer__22345__auto__,"cljs.core.async/t_cljs$core$async25251");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25251 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25251(alt_flag__$1,flag__$1,meta25252){
return (new cljs.core.async.t_cljs$core$async25251(alt_flag__$1,flag__$1,meta25252));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25251(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25257 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25257 = (function (alt_handler,flag,cb,meta25258){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25258 = meta25258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25259,meta25258__$1){
var self__ = this;
var _25259__$1 = this;
return (new cljs.core.async.t_cljs$core$async25257(self__.alt_handler,self__.flag,self__.cb,meta25258__$1));
});

cljs.core.async.t_cljs$core$async25257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25259){
var self__ = this;
var _25259__$1 = this;
return self__.meta25258;
});

cljs.core.async.t_cljs$core$async25257.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25257.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25257.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25257.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25258","meta25258",-2074728131,null)], null);
});

cljs.core.async.t_cljs$core$async25257.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25257";

cljs.core.async.t_cljs$core$async25257.cljs$lang$ctorPrWriter = (function (this__22344__auto__,writer__22345__auto__,opt__22346__auto__){
return cljs.core._write.call(null,writer__22345__auto__,"cljs.core.async/t_cljs$core$async25257");
});

cljs.core.async.__GT_t_cljs$core$async25257 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25257(alt_handler__$1,flag__$1,cb__$1,meta25258){
return (new cljs.core.async.t_cljs$core$async25257(alt_handler__$1,flag__$1,cb__$1,meta25258));
});

}

return (new cljs.core.async.t_cljs$core$async25257(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25260_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25260_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25261_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25261_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21738__auto__ = wport;
if(cljs.core.truth_(or__21738__auto__)){
return or__21738__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25262 = (i + (1));
i = G__25262;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21738__auto__ = ret;
if(cljs.core.truth_(or__21738__auto__)){
return or__21738__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__21726__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21726__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21726__auto__;
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
var args__22816__auto__ = [];
var len__22809__auto___25268 = arguments.length;
var i__22810__auto___25269 = (0);
while(true){
if((i__22810__auto___25269 < len__22809__auto___25268)){
args__22816__auto__.push((arguments[i__22810__auto___25269]));

var G__25270 = (i__22810__auto___25269 + (1));
i__22810__auto___25269 = G__25270;
continue;
} else {
}
break;
}

var argseq__22817__auto__ = ((((1) < args__22816__auto__.length))?(new cljs.core.IndexedSeq(args__22816__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22817__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25265){
var map__25266 = p__25265;
var map__25266__$1 = ((((!((map__25266 == null)))?((((map__25266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25266):map__25266);
var opts = map__25266__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25263){
var G__25264 = cljs.core.first.call(null,seq25263);
var seq25263__$1 = cljs.core.next.call(null,seq25263);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25264,seq25263__$1);
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
var args25271 = [];
var len__22809__auto___25321 = arguments.length;
var i__22810__auto___25322 = (0);
while(true){
if((i__22810__auto___25322 < len__22809__auto___25321)){
args25271.push((arguments[i__22810__auto___25322]));

var G__25323 = (i__22810__auto___25322 + (1));
i__22810__auto___25322 = G__25323;
continue;
} else {
}
break;
}

var G__25273 = args25271.length;
switch (G__25273) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25271.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25158__auto___25325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto___25325){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto___25325){
return (function (state_25297){
var state_val_25298 = (state_25297[(1)]);
if((state_val_25298 === (7))){
var inst_25293 = (state_25297[(2)]);
var state_25297__$1 = state_25297;
var statearr_25299_25326 = state_25297__$1;
(statearr_25299_25326[(2)] = inst_25293);

(statearr_25299_25326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (1))){
var state_25297__$1 = state_25297;
var statearr_25300_25327 = state_25297__$1;
(statearr_25300_25327[(2)] = null);

(statearr_25300_25327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (4))){
var inst_25276 = (state_25297[(7)]);
var inst_25276__$1 = (state_25297[(2)]);
var inst_25277 = (inst_25276__$1 == null);
var state_25297__$1 = (function (){var statearr_25301 = state_25297;
(statearr_25301[(7)] = inst_25276__$1);

return statearr_25301;
})();
if(cljs.core.truth_(inst_25277)){
var statearr_25302_25328 = state_25297__$1;
(statearr_25302_25328[(1)] = (5));

} else {
var statearr_25303_25329 = state_25297__$1;
(statearr_25303_25329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (13))){
var state_25297__$1 = state_25297;
var statearr_25304_25330 = state_25297__$1;
(statearr_25304_25330[(2)] = null);

(statearr_25304_25330[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (6))){
var inst_25276 = (state_25297[(7)]);
var state_25297__$1 = state_25297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25297__$1,(11),to,inst_25276);
} else {
if((state_val_25298 === (3))){
var inst_25295 = (state_25297[(2)]);
var state_25297__$1 = state_25297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25297__$1,inst_25295);
} else {
if((state_val_25298 === (12))){
var state_25297__$1 = state_25297;
var statearr_25305_25331 = state_25297__$1;
(statearr_25305_25331[(2)] = null);

(statearr_25305_25331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (2))){
var state_25297__$1 = state_25297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25297__$1,(4),from);
} else {
if((state_val_25298 === (11))){
var inst_25286 = (state_25297[(2)]);
var state_25297__$1 = state_25297;
if(cljs.core.truth_(inst_25286)){
var statearr_25306_25332 = state_25297__$1;
(statearr_25306_25332[(1)] = (12));

} else {
var statearr_25307_25333 = state_25297__$1;
(statearr_25307_25333[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (9))){
var state_25297__$1 = state_25297;
var statearr_25308_25334 = state_25297__$1;
(statearr_25308_25334[(2)] = null);

(statearr_25308_25334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (5))){
var state_25297__$1 = state_25297;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25309_25335 = state_25297__$1;
(statearr_25309_25335[(1)] = (8));

} else {
var statearr_25310_25336 = state_25297__$1;
(statearr_25310_25336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (14))){
var inst_25291 = (state_25297[(2)]);
var state_25297__$1 = state_25297;
var statearr_25311_25337 = state_25297__$1;
(statearr_25311_25337[(2)] = inst_25291);

(statearr_25311_25337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (10))){
var inst_25283 = (state_25297[(2)]);
var state_25297__$1 = state_25297;
var statearr_25312_25338 = state_25297__$1;
(statearr_25312_25338[(2)] = inst_25283);

(statearr_25312_25338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25298 === (8))){
var inst_25280 = cljs.core.async.close_BANG_.call(null,to);
var state_25297__$1 = state_25297;
var statearr_25313_25339 = state_25297__$1;
(statearr_25313_25339[(2)] = inst_25280);

(statearr_25313_25339[(1)] = (10));


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
});})(c__25158__auto___25325))
;
return ((function (switch__25046__auto__,c__25158__auto___25325){
return (function() {
var cljs$core$async$state_machine__25047__auto__ = null;
var cljs$core$async$state_machine__25047__auto____0 = (function (){
var statearr_25317 = [null,null,null,null,null,null,null,null];
(statearr_25317[(0)] = cljs$core$async$state_machine__25047__auto__);

(statearr_25317[(1)] = (1));

return statearr_25317;
});
var cljs$core$async$state_machine__25047__auto____1 = (function (state_25297){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_25297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e25318){if((e25318 instanceof Object)){
var ex__25050__auto__ = e25318;
var statearr_25319_25340 = state_25297;
(statearr_25319_25340[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25341 = state_25297;
state_25297 = G__25341;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
cljs$core$async$state_machine__25047__auto__ = function(state_25297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25047__auto____1.call(this,state_25297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25047__auto____0;
cljs$core$async$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25047__auto____1;
return cljs$core$async$state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto___25325))
})();
var state__25160__auto__ = (function (){var statearr_25320 = f__25159__auto__.call(null);
(statearr_25320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto___25325);

return statearr_25320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto___25325))
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
return (function (p__25525){
var vec__25526 = p__25525;
var v = cljs.core.nth.call(null,vec__25526,(0),null);
var p = cljs.core.nth.call(null,vec__25526,(1),null);
var job = vec__25526;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25158__auto___25708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto___25708,res,vec__25526,v,p,job,jobs,results){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto___25708,res,vec__25526,v,p,job,jobs,results){
return (function (state_25531){
var state_val_25532 = (state_25531[(1)]);
if((state_val_25532 === (1))){
var state_25531__$1 = state_25531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25531__$1,(2),res,v);
} else {
if((state_val_25532 === (2))){
var inst_25528 = (state_25531[(2)]);
var inst_25529 = cljs.core.async.close_BANG_.call(null,res);
var state_25531__$1 = (function (){var statearr_25533 = state_25531;
(statearr_25533[(7)] = inst_25528);

return statearr_25533;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25531__$1,inst_25529);
} else {
return null;
}
}
});})(c__25158__auto___25708,res,vec__25526,v,p,job,jobs,results))
;
return ((function (switch__25046__auto__,c__25158__auto___25708,res,vec__25526,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____0 = (function (){
var statearr_25537 = [null,null,null,null,null,null,null,null];
(statearr_25537[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__);

(statearr_25537[(1)] = (1));

return statearr_25537;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____1 = (function (state_25531){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_25531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e25538){if((e25538 instanceof Object)){
var ex__25050__auto__ = e25538;
var statearr_25539_25709 = state_25531;
(statearr_25539_25709[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25710 = state_25531;
state_25531 = G__25710;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__ = function(state_25531){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____1.call(this,state_25531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto___25708,res,vec__25526,v,p,job,jobs,results))
})();
var state__25160__auto__ = (function (){var statearr_25540 = f__25159__auto__.call(null);
(statearr_25540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto___25708);

return statearr_25540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto___25708,res,vec__25526,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25541){
var vec__25542 = p__25541;
var v = cljs.core.nth.call(null,vec__25542,(0),null);
var p = cljs.core.nth.call(null,vec__25542,(1),null);
var job = vec__25542;
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
var n__22653__auto___25711 = n;
var __25712 = (0);
while(true){
if((__25712 < n__22653__auto___25711)){
var G__25543_25713 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25543_25713) {
case "compute":
var c__25158__auto___25715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25712,c__25158__auto___25715,G__25543_25713,n__22653__auto___25711,jobs,results,process,async){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (__25712,c__25158__auto___25715,G__25543_25713,n__22653__auto___25711,jobs,results,process,async){
return (function (state_25556){
var state_val_25557 = (state_25556[(1)]);
if((state_val_25557 === (1))){
var state_25556__$1 = state_25556;
var statearr_25558_25716 = state_25556__$1;
(statearr_25558_25716[(2)] = null);

(statearr_25558_25716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (2))){
var state_25556__$1 = state_25556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25556__$1,(4),jobs);
} else {
if((state_val_25557 === (3))){
var inst_25554 = (state_25556[(2)]);
var state_25556__$1 = state_25556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25556__$1,inst_25554);
} else {
if((state_val_25557 === (4))){
var inst_25546 = (state_25556[(2)]);
var inst_25547 = process.call(null,inst_25546);
var state_25556__$1 = state_25556;
if(cljs.core.truth_(inst_25547)){
var statearr_25559_25717 = state_25556__$1;
(statearr_25559_25717[(1)] = (5));

} else {
var statearr_25560_25718 = state_25556__$1;
(statearr_25560_25718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (5))){
var state_25556__$1 = state_25556;
var statearr_25561_25719 = state_25556__$1;
(statearr_25561_25719[(2)] = null);

(statearr_25561_25719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (6))){
var state_25556__$1 = state_25556;
var statearr_25562_25720 = state_25556__$1;
(statearr_25562_25720[(2)] = null);

(statearr_25562_25720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (7))){
var inst_25552 = (state_25556[(2)]);
var state_25556__$1 = state_25556;
var statearr_25563_25721 = state_25556__$1;
(statearr_25563_25721[(2)] = inst_25552);

(statearr_25563_25721[(1)] = (3));


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
});})(__25712,c__25158__auto___25715,G__25543_25713,n__22653__auto___25711,jobs,results,process,async))
;
return ((function (__25712,switch__25046__auto__,c__25158__auto___25715,G__25543_25713,n__22653__auto___25711,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____0 = (function (){
var statearr_25567 = [null,null,null,null,null,null,null];
(statearr_25567[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__);

(statearr_25567[(1)] = (1));

return statearr_25567;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____1 = (function (state_25556){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_25556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e25568){if((e25568 instanceof Object)){
var ex__25050__auto__ = e25568;
var statearr_25569_25722 = state_25556;
(statearr_25569_25722[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25723 = state_25556;
state_25556 = G__25723;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__ = function(state_25556){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____1.call(this,state_25556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__;
})()
;})(__25712,switch__25046__auto__,c__25158__auto___25715,G__25543_25713,n__22653__auto___25711,jobs,results,process,async))
})();
var state__25160__auto__ = (function (){var statearr_25570 = f__25159__auto__.call(null);
(statearr_25570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto___25715);

return statearr_25570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(__25712,c__25158__auto___25715,G__25543_25713,n__22653__auto___25711,jobs,results,process,async))
);


break;
case "async":
var c__25158__auto___25724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25712,c__25158__auto___25724,G__25543_25713,n__22653__auto___25711,jobs,results,process,async){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (__25712,c__25158__auto___25724,G__25543_25713,n__22653__auto___25711,jobs,results,process,async){
return (function (state_25583){
var state_val_25584 = (state_25583[(1)]);
if((state_val_25584 === (1))){
var state_25583__$1 = state_25583;
var statearr_25585_25725 = state_25583__$1;
(statearr_25585_25725[(2)] = null);

(statearr_25585_25725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25584 === (2))){
var state_25583__$1 = state_25583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25583__$1,(4),jobs);
} else {
if((state_val_25584 === (3))){
var inst_25581 = (state_25583[(2)]);
var state_25583__$1 = state_25583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25583__$1,inst_25581);
} else {
if((state_val_25584 === (4))){
var inst_25573 = (state_25583[(2)]);
var inst_25574 = async.call(null,inst_25573);
var state_25583__$1 = state_25583;
if(cljs.core.truth_(inst_25574)){
var statearr_25586_25726 = state_25583__$1;
(statearr_25586_25726[(1)] = (5));

} else {
var statearr_25587_25727 = state_25583__$1;
(statearr_25587_25727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25584 === (5))){
var state_25583__$1 = state_25583;
var statearr_25588_25728 = state_25583__$1;
(statearr_25588_25728[(2)] = null);

(statearr_25588_25728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25584 === (6))){
var state_25583__$1 = state_25583;
var statearr_25589_25729 = state_25583__$1;
(statearr_25589_25729[(2)] = null);

(statearr_25589_25729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25584 === (7))){
var inst_25579 = (state_25583[(2)]);
var state_25583__$1 = state_25583;
var statearr_25590_25730 = state_25583__$1;
(statearr_25590_25730[(2)] = inst_25579);

(statearr_25590_25730[(1)] = (3));


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
});})(__25712,c__25158__auto___25724,G__25543_25713,n__22653__auto___25711,jobs,results,process,async))
;
return ((function (__25712,switch__25046__auto__,c__25158__auto___25724,G__25543_25713,n__22653__auto___25711,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____0 = (function (){
var statearr_25594 = [null,null,null,null,null,null,null];
(statearr_25594[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__);

(statearr_25594[(1)] = (1));

return statearr_25594;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____1 = (function (state_25583){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_25583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e25595){if((e25595 instanceof Object)){
var ex__25050__auto__ = e25595;
var statearr_25596_25731 = state_25583;
(statearr_25596_25731[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25732 = state_25583;
state_25583 = G__25732;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__ = function(state_25583){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____1.call(this,state_25583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__;
})()
;})(__25712,switch__25046__auto__,c__25158__auto___25724,G__25543_25713,n__22653__auto___25711,jobs,results,process,async))
})();
var state__25160__auto__ = (function (){var statearr_25597 = f__25159__auto__.call(null);
(statearr_25597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto___25724);

return statearr_25597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(__25712,c__25158__auto___25724,G__25543_25713,n__22653__auto___25711,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25733 = (__25712 + (1));
__25712 = G__25733;
continue;
} else {
}
break;
}

var c__25158__auto___25734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto___25734,jobs,results,process,async){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto___25734,jobs,results,process,async){
return (function (state_25619){
var state_val_25620 = (state_25619[(1)]);
if((state_val_25620 === (1))){
var state_25619__$1 = state_25619;
var statearr_25621_25735 = state_25619__$1;
(statearr_25621_25735[(2)] = null);

(statearr_25621_25735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (2))){
var state_25619__$1 = state_25619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25619__$1,(4),from);
} else {
if((state_val_25620 === (3))){
var inst_25617 = (state_25619[(2)]);
var state_25619__$1 = state_25619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25619__$1,inst_25617);
} else {
if((state_val_25620 === (4))){
var inst_25600 = (state_25619[(7)]);
var inst_25600__$1 = (state_25619[(2)]);
var inst_25601 = (inst_25600__$1 == null);
var state_25619__$1 = (function (){var statearr_25622 = state_25619;
(statearr_25622[(7)] = inst_25600__$1);

return statearr_25622;
})();
if(cljs.core.truth_(inst_25601)){
var statearr_25623_25736 = state_25619__$1;
(statearr_25623_25736[(1)] = (5));

} else {
var statearr_25624_25737 = state_25619__$1;
(statearr_25624_25737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (5))){
var inst_25603 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25619__$1 = state_25619;
var statearr_25625_25738 = state_25619__$1;
(statearr_25625_25738[(2)] = inst_25603);

(statearr_25625_25738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (6))){
var inst_25600 = (state_25619[(7)]);
var inst_25605 = (state_25619[(8)]);
var inst_25605__$1 = cljs.core.async.chan.call(null,(1));
var inst_25606 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25607 = [inst_25600,inst_25605__$1];
var inst_25608 = (new cljs.core.PersistentVector(null,2,(5),inst_25606,inst_25607,null));
var state_25619__$1 = (function (){var statearr_25626 = state_25619;
(statearr_25626[(8)] = inst_25605__$1);

return statearr_25626;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25619__$1,(8),jobs,inst_25608);
} else {
if((state_val_25620 === (7))){
var inst_25615 = (state_25619[(2)]);
var state_25619__$1 = state_25619;
var statearr_25627_25739 = state_25619__$1;
(statearr_25627_25739[(2)] = inst_25615);

(statearr_25627_25739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25620 === (8))){
var inst_25605 = (state_25619[(8)]);
var inst_25610 = (state_25619[(2)]);
var state_25619__$1 = (function (){var statearr_25628 = state_25619;
(statearr_25628[(9)] = inst_25610);

return statearr_25628;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25619__$1,(9),results,inst_25605);
} else {
if((state_val_25620 === (9))){
var inst_25612 = (state_25619[(2)]);
var state_25619__$1 = (function (){var statearr_25629 = state_25619;
(statearr_25629[(10)] = inst_25612);

return statearr_25629;
})();
var statearr_25630_25740 = state_25619__$1;
(statearr_25630_25740[(2)] = null);

(statearr_25630_25740[(1)] = (2));


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
});})(c__25158__auto___25734,jobs,results,process,async))
;
return ((function (switch__25046__auto__,c__25158__auto___25734,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____0 = (function (){
var statearr_25634 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25634[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__);

(statearr_25634[(1)] = (1));

return statearr_25634;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____1 = (function (state_25619){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_25619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e25635){if((e25635 instanceof Object)){
var ex__25050__auto__ = e25635;
var statearr_25636_25741 = state_25619;
(statearr_25636_25741[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25742 = state_25619;
state_25619 = G__25742;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__ = function(state_25619){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____1.call(this,state_25619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto___25734,jobs,results,process,async))
})();
var state__25160__auto__ = (function (){var statearr_25637 = f__25159__auto__.call(null);
(statearr_25637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto___25734);

return statearr_25637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto___25734,jobs,results,process,async))
);


var c__25158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto__,jobs,results,process,async){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto__,jobs,results,process,async){
return (function (state_25675){
var state_val_25676 = (state_25675[(1)]);
if((state_val_25676 === (7))){
var inst_25671 = (state_25675[(2)]);
var state_25675__$1 = state_25675;
var statearr_25677_25743 = state_25675__$1;
(statearr_25677_25743[(2)] = inst_25671);

(statearr_25677_25743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (20))){
var state_25675__$1 = state_25675;
var statearr_25678_25744 = state_25675__$1;
(statearr_25678_25744[(2)] = null);

(statearr_25678_25744[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (1))){
var state_25675__$1 = state_25675;
var statearr_25679_25745 = state_25675__$1;
(statearr_25679_25745[(2)] = null);

(statearr_25679_25745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (4))){
var inst_25640 = (state_25675[(7)]);
var inst_25640__$1 = (state_25675[(2)]);
var inst_25641 = (inst_25640__$1 == null);
var state_25675__$1 = (function (){var statearr_25680 = state_25675;
(statearr_25680[(7)] = inst_25640__$1);

return statearr_25680;
})();
if(cljs.core.truth_(inst_25641)){
var statearr_25681_25746 = state_25675__$1;
(statearr_25681_25746[(1)] = (5));

} else {
var statearr_25682_25747 = state_25675__$1;
(statearr_25682_25747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (15))){
var inst_25653 = (state_25675[(8)]);
var state_25675__$1 = state_25675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25675__$1,(18),to,inst_25653);
} else {
if((state_val_25676 === (21))){
var inst_25666 = (state_25675[(2)]);
var state_25675__$1 = state_25675;
var statearr_25683_25748 = state_25675__$1;
(statearr_25683_25748[(2)] = inst_25666);

(statearr_25683_25748[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (13))){
var inst_25668 = (state_25675[(2)]);
var state_25675__$1 = (function (){var statearr_25684 = state_25675;
(statearr_25684[(9)] = inst_25668);

return statearr_25684;
})();
var statearr_25685_25749 = state_25675__$1;
(statearr_25685_25749[(2)] = null);

(statearr_25685_25749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (6))){
var inst_25640 = (state_25675[(7)]);
var state_25675__$1 = state_25675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25675__$1,(11),inst_25640);
} else {
if((state_val_25676 === (17))){
var inst_25661 = (state_25675[(2)]);
var state_25675__$1 = state_25675;
if(cljs.core.truth_(inst_25661)){
var statearr_25686_25750 = state_25675__$1;
(statearr_25686_25750[(1)] = (19));

} else {
var statearr_25687_25751 = state_25675__$1;
(statearr_25687_25751[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (3))){
var inst_25673 = (state_25675[(2)]);
var state_25675__$1 = state_25675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25675__$1,inst_25673);
} else {
if((state_val_25676 === (12))){
var inst_25650 = (state_25675[(10)]);
var state_25675__$1 = state_25675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25675__$1,(14),inst_25650);
} else {
if((state_val_25676 === (2))){
var state_25675__$1 = state_25675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25675__$1,(4),results);
} else {
if((state_val_25676 === (19))){
var state_25675__$1 = state_25675;
var statearr_25688_25752 = state_25675__$1;
(statearr_25688_25752[(2)] = null);

(statearr_25688_25752[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (11))){
var inst_25650 = (state_25675[(2)]);
var state_25675__$1 = (function (){var statearr_25689 = state_25675;
(statearr_25689[(10)] = inst_25650);

return statearr_25689;
})();
var statearr_25690_25753 = state_25675__$1;
(statearr_25690_25753[(2)] = null);

(statearr_25690_25753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (9))){
var state_25675__$1 = state_25675;
var statearr_25691_25754 = state_25675__$1;
(statearr_25691_25754[(2)] = null);

(statearr_25691_25754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (5))){
var state_25675__$1 = state_25675;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25692_25755 = state_25675__$1;
(statearr_25692_25755[(1)] = (8));

} else {
var statearr_25693_25756 = state_25675__$1;
(statearr_25693_25756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (14))){
var inst_25653 = (state_25675[(8)]);
var inst_25655 = (state_25675[(11)]);
var inst_25653__$1 = (state_25675[(2)]);
var inst_25654 = (inst_25653__$1 == null);
var inst_25655__$1 = cljs.core.not.call(null,inst_25654);
var state_25675__$1 = (function (){var statearr_25694 = state_25675;
(statearr_25694[(8)] = inst_25653__$1);

(statearr_25694[(11)] = inst_25655__$1);

return statearr_25694;
})();
if(inst_25655__$1){
var statearr_25695_25757 = state_25675__$1;
(statearr_25695_25757[(1)] = (15));

} else {
var statearr_25696_25758 = state_25675__$1;
(statearr_25696_25758[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (16))){
var inst_25655 = (state_25675[(11)]);
var state_25675__$1 = state_25675;
var statearr_25697_25759 = state_25675__$1;
(statearr_25697_25759[(2)] = inst_25655);

(statearr_25697_25759[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (10))){
var inst_25647 = (state_25675[(2)]);
var state_25675__$1 = state_25675;
var statearr_25698_25760 = state_25675__$1;
(statearr_25698_25760[(2)] = inst_25647);

(statearr_25698_25760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (18))){
var inst_25658 = (state_25675[(2)]);
var state_25675__$1 = state_25675;
var statearr_25699_25761 = state_25675__$1;
(statearr_25699_25761[(2)] = inst_25658);

(statearr_25699_25761[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (8))){
var inst_25644 = cljs.core.async.close_BANG_.call(null,to);
var state_25675__$1 = state_25675;
var statearr_25700_25762 = state_25675__$1;
(statearr_25700_25762[(2)] = inst_25644);

(statearr_25700_25762[(1)] = (10));


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
});})(c__25158__auto__,jobs,results,process,async))
;
return ((function (switch__25046__auto__,c__25158__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____0 = (function (){
var statearr_25704 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25704[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__);

(statearr_25704[(1)] = (1));

return statearr_25704;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____1 = (function (state_25675){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_25675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e25705){if((e25705 instanceof Object)){
var ex__25050__auto__ = e25705;
var statearr_25706_25763 = state_25675;
(statearr_25706_25763[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25764 = state_25675;
state_25675 = G__25764;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__ = function(state_25675){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____1.call(this,state_25675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25047__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto__,jobs,results,process,async))
})();
var state__25160__auto__ = (function (){var statearr_25707 = f__25159__auto__.call(null);
(statearr_25707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto__);

return statearr_25707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto__,jobs,results,process,async))
);

return c__25158__auto__;
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
var args25765 = [];
var len__22809__auto___25768 = arguments.length;
var i__22810__auto___25769 = (0);
while(true){
if((i__22810__auto___25769 < len__22809__auto___25768)){
args25765.push((arguments[i__22810__auto___25769]));

var G__25770 = (i__22810__auto___25769 + (1));
i__22810__auto___25769 = G__25770;
continue;
} else {
}
break;
}

var G__25767 = args25765.length;
switch (G__25767) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25765.length)].join('')));

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
var args25772 = [];
var len__22809__auto___25775 = arguments.length;
var i__22810__auto___25776 = (0);
while(true){
if((i__22810__auto___25776 < len__22809__auto___25775)){
args25772.push((arguments[i__22810__auto___25776]));

var G__25777 = (i__22810__auto___25776 + (1));
i__22810__auto___25776 = G__25777;
continue;
} else {
}
break;
}

var G__25774 = args25772.length;
switch (G__25774) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25772.length)].join('')));

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
var args25779 = [];
var len__22809__auto___25832 = arguments.length;
var i__22810__auto___25833 = (0);
while(true){
if((i__22810__auto___25833 < len__22809__auto___25832)){
args25779.push((arguments[i__22810__auto___25833]));

var G__25834 = (i__22810__auto___25833 + (1));
i__22810__auto___25833 = G__25834;
continue;
} else {
}
break;
}

var G__25781 = args25779.length;
switch (G__25781) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25779.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25158__auto___25836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto___25836,tc,fc){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto___25836,tc,fc){
return (function (state_25807){
var state_val_25808 = (state_25807[(1)]);
if((state_val_25808 === (7))){
var inst_25803 = (state_25807[(2)]);
var state_25807__$1 = state_25807;
var statearr_25809_25837 = state_25807__$1;
(statearr_25809_25837[(2)] = inst_25803);

(statearr_25809_25837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (1))){
var state_25807__$1 = state_25807;
var statearr_25810_25838 = state_25807__$1;
(statearr_25810_25838[(2)] = null);

(statearr_25810_25838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (4))){
var inst_25784 = (state_25807[(7)]);
var inst_25784__$1 = (state_25807[(2)]);
var inst_25785 = (inst_25784__$1 == null);
var state_25807__$1 = (function (){var statearr_25811 = state_25807;
(statearr_25811[(7)] = inst_25784__$1);

return statearr_25811;
})();
if(cljs.core.truth_(inst_25785)){
var statearr_25812_25839 = state_25807__$1;
(statearr_25812_25839[(1)] = (5));

} else {
var statearr_25813_25840 = state_25807__$1;
(statearr_25813_25840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (13))){
var state_25807__$1 = state_25807;
var statearr_25814_25841 = state_25807__$1;
(statearr_25814_25841[(2)] = null);

(statearr_25814_25841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (6))){
var inst_25784 = (state_25807[(7)]);
var inst_25790 = p.call(null,inst_25784);
var state_25807__$1 = state_25807;
if(cljs.core.truth_(inst_25790)){
var statearr_25815_25842 = state_25807__$1;
(statearr_25815_25842[(1)] = (9));

} else {
var statearr_25816_25843 = state_25807__$1;
(statearr_25816_25843[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (3))){
var inst_25805 = (state_25807[(2)]);
var state_25807__$1 = state_25807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25807__$1,inst_25805);
} else {
if((state_val_25808 === (12))){
var state_25807__$1 = state_25807;
var statearr_25817_25844 = state_25807__$1;
(statearr_25817_25844[(2)] = null);

(statearr_25817_25844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (2))){
var state_25807__$1 = state_25807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25807__$1,(4),ch);
} else {
if((state_val_25808 === (11))){
var inst_25784 = (state_25807[(7)]);
var inst_25794 = (state_25807[(2)]);
var state_25807__$1 = state_25807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25807__$1,(8),inst_25794,inst_25784);
} else {
if((state_val_25808 === (9))){
var state_25807__$1 = state_25807;
var statearr_25818_25845 = state_25807__$1;
(statearr_25818_25845[(2)] = tc);

(statearr_25818_25845[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (5))){
var inst_25787 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25788 = cljs.core.async.close_BANG_.call(null,fc);
var state_25807__$1 = (function (){var statearr_25819 = state_25807;
(statearr_25819[(8)] = inst_25787);

return statearr_25819;
})();
var statearr_25820_25846 = state_25807__$1;
(statearr_25820_25846[(2)] = inst_25788);

(statearr_25820_25846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (14))){
var inst_25801 = (state_25807[(2)]);
var state_25807__$1 = state_25807;
var statearr_25821_25847 = state_25807__$1;
(statearr_25821_25847[(2)] = inst_25801);

(statearr_25821_25847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (10))){
var state_25807__$1 = state_25807;
var statearr_25822_25848 = state_25807__$1;
(statearr_25822_25848[(2)] = fc);

(statearr_25822_25848[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25808 === (8))){
var inst_25796 = (state_25807[(2)]);
var state_25807__$1 = state_25807;
if(cljs.core.truth_(inst_25796)){
var statearr_25823_25849 = state_25807__$1;
(statearr_25823_25849[(1)] = (12));

} else {
var statearr_25824_25850 = state_25807__$1;
(statearr_25824_25850[(1)] = (13));

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
});})(c__25158__auto___25836,tc,fc))
;
return ((function (switch__25046__auto__,c__25158__auto___25836,tc,fc){
return (function() {
var cljs$core$async$state_machine__25047__auto__ = null;
var cljs$core$async$state_machine__25047__auto____0 = (function (){
var statearr_25828 = [null,null,null,null,null,null,null,null,null];
(statearr_25828[(0)] = cljs$core$async$state_machine__25047__auto__);

(statearr_25828[(1)] = (1));

return statearr_25828;
});
var cljs$core$async$state_machine__25047__auto____1 = (function (state_25807){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_25807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e25829){if((e25829 instanceof Object)){
var ex__25050__auto__ = e25829;
var statearr_25830_25851 = state_25807;
(statearr_25830_25851[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25852 = state_25807;
state_25807 = G__25852;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
cljs$core$async$state_machine__25047__auto__ = function(state_25807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25047__auto____1.call(this,state_25807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25047__auto____0;
cljs$core$async$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25047__auto____1;
return cljs$core$async$state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto___25836,tc,fc))
})();
var state__25160__auto__ = (function (){var statearr_25831 = f__25159__auto__.call(null);
(statearr_25831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto___25836);

return statearr_25831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto___25836,tc,fc))
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
var c__25158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto__){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto__){
return (function (state_25916){
var state_val_25917 = (state_25916[(1)]);
if((state_val_25917 === (7))){
var inst_25912 = (state_25916[(2)]);
var state_25916__$1 = state_25916;
var statearr_25918_25939 = state_25916__$1;
(statearr_25918_25939[(2)] = inst_25912);

(statearr_25918_25939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (1))){
var inst_25896 = init;
var state_25916__$1 = (function (){var statearr_25919 = state_25916;
(statearr_25919[(7)] = inst_25896);

return statearr_25919;
})();
var statearr_25920_25940 = state_25916__$1;
(statearr_25920_25940[(2)] = null);

(statearr_25920_25940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (4))){
var inst_25899 = (state_25916[(8)]);
var inst_25899__$1 = (state_25916[(2)]);
var inst_25900 = (inst_25899__$1 == null);
var state_25916__$1 = (function (){var statearr_25921 = state_25916;
(statearr_25921[(8)] = inst_25899__$1);

return statearr_25921;
})();
if(cljs.core.truth_(inst_25900)){
var statearr_25922_25941 = state_25916__$1;
(statearr_25922_25941[(1)] = (5));

} else {
var statearr_25923_25942 = state_25916__$1;
(statearr_25923_25942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (6))){
var inst_25899 = (state_25916[(8)]);
var inst_25896 = (state_25916[(7)]);
var inst_25903 = (state_25916[(9)]);
var inst_25903__$1 = f.call(null,inst_25896,inst_25899);
var inst_25904 = cljs.core.reduced_QMARK_.call(null,inst_25903__$1);
var state_25916__$1 = (function (){var statearr_25924 = state_25916;
(statearr_25924[(9)] = inst_25903__$1);

return statearr_25924;
})();
if(inst_25904){
var statearr_25925_25943 = state_25916__$1;
(statearr_25925_25943[(1)] = (8));

} else {
var statearr_25926_25944 = state_25916__$1;
(statearr_25926_25944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (3))){
var inst_25914 = (state_25916[(2)]);
var state_25916__$1 = state_25916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25916__$1,inst_25914);
} else {
if((state_val_25917 === (2))){
var state_25916__$1 = state_25916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25916__$1,(4),ch);
} else {
if((state_val_25917 === (9))){
var inst_25903 = (state_25916[(9)]);
var inst_25896 = inst_25903;
var state_25916__$1 = (function (){var statearr_25927 = state_25916;
(statearr_25927[(7)] = inst_25896);

return statearr_25927;
})();
var statearr_25928_25945 = state_25916__$1;
(statearr_25928_25945[(2)] = null);

(statearr_25928_25945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (5))){
var inst_25896 = (state_25916[(7)]);
var state_25916__$1 = state_25916;
var statearr_25929_25946 = state_25916__$1;
(statearr_25929_25946[(2)] = inst_25896);

(statearr_25929_25946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (10))){
var inst_25910 = (state_25916[(2)]);
var state_25916__$1 = state_25916;
var statearr_25930_25947 = state_25916__$1;
(statearr_25930_25947[(2)] = inst_25910);

(statearr_25930_25947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25917 === (8))){
var inst_25903 = (state_25916[(9)]);
var inst_25906 = cljs.core.deref.call(null,inst_25903);
var state_25916__$1 = state_25916;
var statearr_25931_25948 = state_25916__$1;
(statearr_25931_25948[(2)] = inst_25906);

(statearr_25931_25948[(1)] = (10));


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
});})(c__25158__auto__))
;
return ((function (switch__25046__auto__,c__25158__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25047__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25047__auto____0 = (function (){
var statearr_25935 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25935[(0)] = cljs$core$async$reduce_$_state_machine__25047__auto__);

(statearr_25935[(1)] = (1));

return statearr_25935;
});
var cljs$core$async$reduce_$_state_machine__25047__auto____1 = (function (state_25916){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_25916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e25936){if((e25936 instanceof Object)){
var ex__25050__auto__ = e25936;
var statearr_25937_25949 = state_25916;
(statearr_25937_25949[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25950 = state_25916;
state_25916 = G__25950;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25047__auto__ = function(state_25916){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25047__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25047__auto____1.call(this,state_25916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25047__auto____0;
cljs$core$async$reduce_$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25047__auto____1;
return cljs$core$async$reduce_$_state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto__))
})();
var state__25160__auto__ = (function (){var statearr_25938 = f__25159__auto__.call(null);
(statearr_25938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto__);

return statearr_25938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto__))
);

return c__25158__auto__;
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
var args25951 = [];
var len__22809__auto___26003 = arguments.length;
var i__22810__auto___26004 = (0);
while(true){
if((i__22810__auto___26004 < len__22809__auto___26003)){
args25951.push((arguments[i__22810__auto___26004]));

var G__26005 = (i__22810__auto___26004 + (1));
i__22810__auto___26004 = G__26005;
continue;
} else {
}
break;
}

var G__25953 = args25951.length;
switch (G__25953) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25951.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto__){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto__){
return (function (state_25978){
var state_val_25979 = (state_25978[(1)]);
if((state_val_25979 === (7))){
var inst_25960 = (state_25978[(2)]);
var state_25978__$1 = state_25978;
var statearr_25980_26007 = state_25978__$1;
(statearr_25980_26007[(2)] = inst_25960);

(statearr_25980_26007[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (1))){
var inst_25954 = cljs.core.seq.call(null,coll);
var inst_25955 = inst_25954;
var state_25978__$1 = (function (){var statearr_25981 = state_25978;
(statearr_25981[(7)] = inst_25955);

return statearr_25981;
})();
var statearr_25982_26008 = state_25978__$1;
(statearr_25982_26008[(2)] = null);

(statearr_25982_26008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (4))){
var inst_25955 = (state_25978[(7)]);
var inst_25958 = cljs.core.first.call(null,inst_25955);
var state_25978__$1 = state_25978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25978__$1,(7),ch,inst_25958);
} else {
if((state_val_25979 === (13))){
var inst_25972 = (state_25978[(2)]);
var state_25978__$1 = state_25978;
var statearr_25983_26009 = state_25978__$1;
(statearr_25983_26009[(2)] = inst_25972);

(statearr_25983_26009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (6))){
var inst_25963 = (state_25978[(2)]);
var state_25978__$1 = state_25978;
if(cljs.core.truth_(inst_25963)){
var statearr_25984_26010 = state_25978__$1;
(statearr_25984_26010[(1)] = (8));

} else {
var statearr_25985_26011 = state_25978__$1;
(statearr_25985_26011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (3))){
var inst_25976 = (state_25978[(2)]);
var state_25978__$1 = state_25978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25978__$1,inst_25976);
} else {
if((state_val_25979 === (12))){
var state_25978__$1 = state_25978;
var statearr_25986_26012 = state_25978__$1;
(statearr_25986_26012[(2)] = null);

(statearr_25986_26012[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (2))){
var inst_25955 = (state_25978[(7)]);
var state_25978__$1 = state_25978;
if(cljs.core.truth_(inst_25955)){
var statearr_25987_26013 = state_25978__$1;
(statearr_25987_26013[(1)] = (4));

} else {
var statearr_25988_26014 = state_25978__$1;
(statearr_25988_26014[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (11))){
var inst_25969 = cljs.core.async.close_BANG_.call(null,ch);
var state_25978__$1 = state_25978;
var statearr_25989_26015 = state_25978__$1;
(statearr_25989_26015[(2)] = inst_25969);

(statearr_25989_26015[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (9))){
var state_25978__$1 = state_25978;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25990_26016 = state_25978__$1;
(statearr_25990_26016[(1)] = (11));

} else {
var statearr_25991_26017 = state_25978__$1;
(statearr_25991_26017[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (5))){
var inst_25955 = (state_25978[(7)]);
var state_25978__$1 = state_25978;
var statearr_25992_26018 = state_25978__$1;
(statearr_25992_26018[(2)] = inst_25955);

(statearr_25992_26018[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (10))){
var inst_25974 = (state_25978[(2)]);
var state_25978__$1 = state_25978;
var statearr_25993_26019 = state_25978__$1;
(statearr_25993_26019[(2)] = inst_25974);

(statearr_25993_26019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25979 === (8))){
var inst_25955 = (state_25978[(7)]);
var inst_25965 = cljs.core.next.call(null,inst_25955);
var inst_25955__$1 = inst_25965;
var state_25978__$1 = (function (){var statearr_25994 = state_25978;
(statearr_25994[(7)] = inst_25955__$1);

return statearr_25994;
})();
var statearr_25995_26020 = state_25978__$1;
(statearr_25995_26020[(2)] = null);

(statearr_25995_26020[(1)] = (2));


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
});})(c__25158__auto__))
;
return ((function (switch__25046__auto__,c__25158__auto__){
return (function() {
var cljs$core$async$state_machine__25047__auto__ = null;
var cljs$core$async$state_machine__25047__auto____0 = (function (){
var statearr_25999 = [null,null,null,null,null,null,null,null];
(statearr_25999[(0)] = cljs$core$async$state_machine__25047__auto__);

(statearr_25999[(1)] = (1));

return statearr_25999;
});
var cljs$core$async$state_machine__25047__auto____1 = (function (state_25978){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_25978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e26000){if((e26000 instanceof Object)){
var ex__25050__auto__ = e26000;
var statearr_26001_26021 = state_25978;
(statearr_26001_26021[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26022 = state_25978;
state_25978 = G__26022;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
cljs$core$async$state_machine__25047__auto__ = function(state_25978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25047__auto____1.call(this,state_25978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25047__auto____0;
cljs$core$async$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25047__auto____1;
return cljs$core$async$state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto__))
})();
var state__25160__auto__ = (function (){var statearr_26002 = f__25159__auto__.call(null);
(statearr_26002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto__);

return statearr_26002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto__))
);

return c__25158__auto__;
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
var x__22401__auto__ = (((_ == null))?null:_);
var m__22402__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22401__auto__)]);
if(!((m__22402__auto__ == null))){
return m__22402__auto__.call(null,_);
} else {
var m__22402__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22402__auto____$1 == null))){
return m__22402__auto____$1.call(null,_);
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
var x__22401__auto__ = (((m == null))?null:m);
var m__22402__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22401__auto__)]);
if(!((m__22402__auto__ == null))){
return m__22402__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22402__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22402__auto____$1 == null))){
return m__22402__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__22401__auto__ = (((m == null))?null:m);
var m__22402__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22401__auto__)]);
if(!((m__22402__auto__ == null))){
return m__22402__auto__.call(null,m,ch);
} else {
var m__22402__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22402__auto____$1 == null))){
return m__22402__auto____$1.call(null,m,ch);
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
var x__22401__auto__ = (((m == null))?null:m);
var m__22402__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22401__auto__)]);
if(!((m__22402__auto__ == null))){
return m__22402__auto__.call(null,m);
} else {
var m__22402__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22402__auto____$1 == null))){
return m__22402__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async26244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26244 = (function (mult,ch,cs,meta26245){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26245 = meta26245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26246,meta26245__$1){
var self__ = this;
var _26246__$1 = this;
return (new cljs.core.async.t_cljs$core$async26244(self__.mult,self__.ch,self__.cs,meta26245__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26246){
var self__ = this;
var _26246__$1 = this;
return self__.meta26245;
});})(cs))
;

cljs.core.async.t_cljs$core$async26244.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26244.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26244.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async26244.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26244.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26244.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26244.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26245","meta26245",1783667490,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26244";

cljs.core.async.t_cljs$core$async26244.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22344__auto__,writer__22345__auto__,opt__22346__auto__){
return cljs.core._write.call(null,writer__22345__auto__,"cljs.core.async/t_cljs$core$async26244");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26244 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26244(mult__$1,ch__$1,cs__$1,meta26245){
return (new cljs.core.async.t_cljs$core$async26244(mult__$1,ch__$1,cs__$1,meta26245));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26244(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__25158__auto___26465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto___26465,cs,m,dchan,dctr,done){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto___26465,cs,m,dchan,dctr,done){
return (function (state_26377){
var state_val_26378 = (state_26377[(1)]);
if((state_val_26378 === (7))){
var inst_26373 = (state_26377[(2)]);
var state_26377__$1 = state_26377;
var statearr_26379_26466 = state_26377__$1;
(statearr_26379_26466[(2)] = inst_26373);

(statearr_26379_26466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (20))){
var inst_26278 = (state_26377[(7)]);
var inst_26288 = cljs.core.first.call(null,inst_26278);
var inst_26289 = cljs.core.nth.call(null,inst_26288,(0),null);
var inst_26290 = cljs.core.nth.call(null,inst_26288,(1),null);
var state_26377__$1 = (function (){var statearr_26380 = state_26377;
(statearr_26380[(8)] = inst_26289);

return statearr_26380;
})();
if(cljs.core.truth_(inst_26290)){
var statearr_26381_26467 = state_26377__$1;
(statearr_26381_26467[(1)] = (22));

} else {
var statearr_26382_26468 = state_26377__$1;
(statearr_26382_26468[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (27))){
var inst_26249 = (state_26377[(9)]);
var inst_26318 = (state_26377[(10)]);
var inst_26320 = (state_26377[(11)]);
var inst_26325 = (state_26377[(12)]);
var inst_26325__$1 = cljs.core._nth.call(null,inst_26318,inst_26320);
var inst_26326 = cljs.core.async.put_BANG_.call(null,inst_26325__$1,inst_26249,done);
var state_26377__$1 = (function (){var statearr_26383 = state_26377;
(statearr_26383[(12)] = inst_26325__$1);

return statearr_26383;
})();
if(cljs.core.truth_(inst_26326)){
var statearr_26384_26469 = state_26377__$1;
(statearr_26384_26469[(1)] = (30));

} else {
var statearr_26385_26470 = state_26377__$1;
(statearr_26385_26470[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (1))){
var state_26377__$1 = state_26377;
var statearr_26386_26471 = state_26377__$1;
(statearr_26386_26471[(2)] = null);

(statearr_26386_26471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (24))){
var inst_26278 = (state_26377[(7)]);
var inst_26295 = (state_26377[(2)]);
var inst_26296 = cljs.core.next.call(null,inst_26278);
var inst_26258 = inst_26296;
var inst_26259 = null;
var inst_26260 = (0);
var inst_26261 = (0);
var state_26377__$1 = (function (){var statearr_26387 = state_26377;
(statearr_26387[(13)] = inst_26261);

(statearr_26387[(14)] = inst_26258);

(statearr_26387[(15)] = inst_26295);

(statearr_26387[(16)] = inst_26260);

(statearr_26387[(17)] = inst_26259);

return statearr_26387;
})();
var statearr_26388_26472 = state_26377__$1;
(statearr_26388_26472[(2)] = null);

(statearr_26388_26472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (39))){
var state_26377__$1 = state_26377;
var statearr_26392_26473 = state_26377__$1;
(statearr_26392_26473[(2)] = null);

(statearr_26392_26473[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (4))){
var inst_26249 = (state_26377[(9)]);
var inst_26249__$1 = (state_26377[(2)]);
var inst_26250 = (inst_26249__$1 == null);
var state_26377__$1 = (function (){var statearr_26393 = state_26377;
(statearr_26393[(9)] = inst_26249__$1);

return statearr_26393;
})();
if(cljs.core.truth_(inst_26250)){
var statearr_26394_26474 = state_26377__$1;
(statearr_26394_26474[(1)] = (5));

} else {
var statearr_26395_26475 = state_26377__$1;
(statearr_26395_26475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (15))){
var inst_26261 = (state_26377[(13)]);
var inst_26258 = (state_26377[(14)]);
var inst_26260 = (state_26377[(16)]);
var inst_26259 = (state_26377[(17)]);
var inst_26274 = (state_26377[(2)]);
var inst_26275 = (inst_26261 + (1));
var tmp26389 = inst_26258;
var tmp26390 = inst_26260;
var tmp26391 = inst_26259;
var inst_26258__$1 = tmp26389;
var inst_26259__$1 = tmp26391;
var inst_26260__$1 = tmp26390;
var inst_26261__$1 = inst_26275;
var state_26377__$1 = (function (){var statearr_26396 = state_26377;
(statearr_26396[(13)] = inst_26261__$1);

(statearr_26396[(14)] = inst_26258__$1);

(statearr_26396[(16)] = inst_26260__$1);

(statearr_26396[(18)] = inst_26274);

(statearr_26396[(17)] = inst_26259__$1);

return statearr_26396;
})();
var statearr_26397_26476 = state_26377__$1;
(statearr_26397_26476[(2)] = null);

(statearr_26397_26476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (21))){
var inst_26299 = (state_26377[(2)]);
var state_26377__$1 = state_26377;
var statearr_26401_26477 = state_26377__$1;
(statearr_26401_26477[(2)] = inst_26299);

(statearr_26401_26477[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (31))){
var inst_26325 = (state_26377[(12)]);
var inst_26329 = done.call(null,null);
var inst_26330 = cljs.core.async.untap_STAR_.call(null,m,inst_26325);
var state_26377__$1 = (function (){var statearr_26402 = state_26377;
(statearr_26402[(19)] = inst_26329);

return statearr_26402;
})();
var statearr_26403_26478 = state_26377__$1;
(statearr_26403_26478[(2)] = inst_26330);

(statearr_26403_26478[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (32))){
var inst_26318 = (state_26377[(10)]);
var inst_26319 = (state_26377[(20)]);
var inst_26317 = (state_26377[(21)]);
var inst_26320 = (state_26377[(11)]);
var inst_26332 = (state_26377[(2)]);
var inst_26333 = (inst_26320 + (1));
var tmp26398 = inst_26318;
var tmp26399 = inst_26319;
var tmp26400 = inst_26317;
var inst_26317__$1 = tmp26400;
var inst_26318__$1 = tmp26398;
var inst_26319__$1 = tmp26399;
var inst_26320__$1 = inst_26333;
var state_26377__$1 = (function (){var statearr_26404 = state_26377;
(statearr_26404[(10)] = inst_26318__$1);

(statearr_26404[(20)] = inst_26319__$1);

(statearr_26404[(21)] = inst_26317__$1);

(statearr_26404[(11)] = inst_26320__$1);

(statearr_26404[(22)] = inst_26332);

return statearr_26404;
})();
var statearr_26405_26479 = state_26377__$1;
(statearr_26405_26479[(2)] = null);

(statearr_26405_26479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (40))){
var inst_26345 = (state_26377[(23)]);
var inst_26349 = done.call(null,null);
var inst_26350 = cljs.core.async.untap_STAR_.call(null,m,inst_26345);
var state_26377__$1 = (function (){var statearr_26406 = state_26377;
(statearr_26406[(24)] = inst_26349);

return statearr_26406;
})();
var statearr_26407_26480 = state_26377__$1;
(statearr_26407_26480[(2)] = inst_26350);

(statearr_26407_26480[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (33))){
var inst_26336 = (state_26377[(25)]);
var inst_26338 = cljs.core.chunked_seq_QMARK_.call(null,inst_26336);
var state_26377__$1 = state_26377;
if(inst_26338){
var statearr_26408_26481 = state_26377__$1;
(statearr_26408_26481[(1)] = (36));

} else {
var statearr_26409_26482 = state_26377__$1;
(statearr_26409_26482[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (13))){
var inst_26268 = (state_26377[(26)]);
var inst_26271 = cljs.core.async.close_BANG_.call(null,inst_26268);
var state_26377__$1 = state_26377;
var statearr_26410_26483 = state_26377__$1;
(statearr_26410_26483[(2)] = inst_26271);

(statearr_26410_26483[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (22))){
var inst_26289 = (state_26377[(8)]);
var inst_26292 = cljs.core.async.close_BANG_.call(null,inst_26289);
var state_26377__$1 = state_26377;
var statearr_26411_26484 = state_26377__$1;
(statearr_26411_26484[(2)] = inst_26292);

(statearr_26411_26484[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (36))){
var inst_26336 = (state_26377[(25)]);
var inst_26340 = cljs.core.chunk_first.call(null,inst_26336);
var inst_26341 = cljs.core.chunk_rest.call(null,inst_26336);
var inst_26342 = cljs.core.count.call(null,inst_26340);
var inst_26317 = inst_26341;
var inst_26318 = inst_26340;
var inst_26319 = inst_26342;
var inst_26320 = (0);
var state_26377__$1 = (function (){var statearr_26412 = state_26377;
(statearr_26412[(10)] = inst_26318);

(statearr_26412[(20)] = inst_26319);

(statearr_26412[(21)] = inst_26317);

(statearr_26412[(11)] = inst_26320);

return statearr_26412;
})();
var statearr_26413_26485 = state_26377__$1;
(statearr_26413_26485[(2)] = null);

(statearr_26413_26485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (41))){
var inst_26336 = (state_26377[(25)]);
var inst_26352 = (state_26377[(2)]);
var inst_26353 = cljs.core.next.call(null,inst_26336);
var inst_26317 = inst_26353;
var inst_26318 = null;
var inst_26319 = (0);
var inst_26320 = (0);
var state_26377__$1 = (function (){var statearr_26414 = state_26377;
(statearr_26414[(10)] = inst_26318);

(statearr_26414[(20)] = inst_26319);

(statearr_26414[(27)] = inst_26352);

(statearr_26414[(21)] = inst_26317);

(statearr_26414[(11)] = inst_26320);

return statearr_26414;
})();
var statearr_26415_26486 = state_26377__$1;
(statearr_26415_26486[(2)] = null);

(statearr_26415_26486[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (43))){
var state_26377__$1 = state_26377;
var statearr_26416_26487 = state_26377__$1;
(statearr_26416_26487[(2)] = null);

(statearr_26416_26487[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (29))){
var inst_26361 = (state_26377[(2)]);
var state_26377__$1 = state_26377;
var statearr_26417_26488 = state_26377__$1;
(statearr_26417_26488[(2)] = inst_26361);

(statearr_26417_26488[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (44))){
var inst_26370 = (state_26377[(2)]);
var state_26377__$1 = (function (){var statearr_26418 = state_26377;
(statearr_26418[(28)] = inst_26370);

return statearr_26418;
})();
var statearr_26419_26489 = state_26377__$1;
(statearr_26419_26489[(2)] = null);

(statearr_26419_26489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (6))){
var inst_26309 = (state_26377[(29)]);
var inst_26308 = cljs.core.deref.call(null,cs);
var inst_26309__$1 = cljs.core.keys.call(null,inst_26308);
var inst_26310 = cljs.core.count.call(null,inst_26309__$1);
var inst_26311 = cljs.core.reset_BANG_.call(null,dctr,inst_26310);
var inst_26316 = cljs.core.seq.call(null,inst_26309__$1);
var inst_26317 = inst_26316;
var inst_26318 = null;
var inst_26319 = (0);
var inst_26320 = (0);
var state_26377__$1 = (function (){var statearr_26420 = state_26377;
(statearr_26420[(10)] = inst_26318);

(statearr_26420[(30)] = inst_26311);

(statearr_26420[(20)] = inst_26319);

(statearr_26420[(29)] = inst_26309__$1);

(statearr_26420[(21)] = inst_26317);

(statearr_26420[(11)] = inst_26320);

return statearr_26420;
})();
var statearr_26421_26490 = state_26377__$1;
(statearr_26421_26490[(2)] = null);

(statearr_26421_26490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (28))){
var inst_26317 = (state_26377[(21)]);
var inst_26336 = (state_26377[(25)]);
var inst_26336__$1 = cljs.core.seq.call(null,inst_26317);
var state_26377__$1 = (function (){var statearr_26422 = state_26377;
(statearr_26422[(25)] = inst_26336__$1);

return statearr_26422;
})();
if(inst_26336__$1){
var statearr_26423_26491 = state_26377__$1;
(statearr_26423_26491[(1)] = (33));

} else {
var statearr_26424_26492 = state_26377__$1;
(statearr_26424_26492[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (25))){
var inst_26319 = (state_26377[(20)]);
var inst_26320 = (state_26377[(11)]);
var inst_26322 = (inst_26320 < inst_26319);
var inst_26323 = inst_26322;
var state_26377__$1 = state_26377;
if(cljs.core.truth_(inst_26323)){
var statearr_26425_26493 = state_26377__$1;
(statearr_26425_26493[(1)] = (27));

} else {
var statearr_26426_26494 = state_26377__$1;
(statearr_26426_26494[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (34))){
var state_26377__$1 = state_26377;
var statearr_26427_26495 = state_26377__$1;
(statearr_26427_26495[(2)] = null);

(statearr_26427_26495[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (17))){
var state_26377__$1 = state_26377;
var statearr_26428_26496 = state_26377__$1;
(statearr_26428_26496[(2)] = null);

(statearr_26428_26496[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (3))){
var inst_26375 = (state_26377[(2)]);
var state_26377__$1 = state_26377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26377__$1,inst_26375);
} else {
if((state_val_26378 === (12))){
var inst_26304 = (state_26377[(2)]);
var state_26377__$1 = state_26377;
var statearr_26429_26497 = state_26377__$1;
(statearr_26429_26497[(2)] = inst_26304);

(statearr_26429_26497[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (2))){
var state_26377__$1 = state_26377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26377__$1,(4),ch);
} else {
if((state_val_26378 === (23))){
var state_26377__$1 = state_26377;
var statearr_26430_26498 = state_26377__$1;
(statearr_26430_26498[(2)] = null);

(statearr_26430_26498[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (35))){
var inst_26359 = (state_26377[(2)]);
var state_26377__$1 = state_26377;
var statearr_26431_26499 = state_26377__$1;
(statearr_26431_26499[(2)] = inst_26359);

(statearr_26431_26499[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (19))){
var inst_26278 = (state_26377[(7)]);
var inst_26282 = cljs.core.chunk_first.call(null,inst_26278);
var inst_26283 = cljs.core.chunk_rest.call(null,inst_26278);
var inst_26284 = cljs.core.count.call(null,inst_26282);
var inst_26258 = inst_26283;
var inst_26259 = inst_26282;
var inst_26260 = inst_26284;
var inst_26261 = (0);
var state_26377__$1 = (function (){var statearr_26432 = state_26377;
(statearr_26432[(13)] = inst_26261);

(statearr_26432[(14)] = inst_26258);

(statearr_26432[(16)] = inst_26260);

(statearr_26432[(17)] = inst_26259);

return statearr_26432;
})();
var statearr_26433_26500 = state_26377__$1;
(statearr_26433_26500[(2)] = null);

(statearr_26433_26500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (11))){
var inst_26258 = (state_26377[(14)]);
var inst_26278 = (state_26377[(7)]);
var inst_26278__$1 = cljs.core.seq.call(null,inst_26258);
var state_26377__$1 = (function (){var statearr_26434 = state_26377;
(statearr_26434[(7)] = inst_26278__$1);

return statearr_26434;
})();
if(inst_26278__$1){
var statearr_26435_26501 = state_26377__$1;
(statearr_26435_26501[(1)] = (16));

} else {
var statearr_26436_26502 = state_26377__$1;
(statearr_26436_26502[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (9))){
var inst_26306 = (state_26377[(2)]);
var state_26377__$1 = state_26377;
var statearr_26437_26503 = state_26377__$1;
(statearr_26437_26503[(2)] = inst_26306);

(statearr_26437_26503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (5))){
var inst_26256 = cljs.core.deref.call(null,cs);
var inst_26257 = cljs.core.seq.call(null,inst_26256);
var inst_26258 = inst_26257;
var inst_26259 = null;
var inst_26260 = (0);
var inst_26261 = (0);
var state_26377__$1 = (function (){var statearr_26438 = state_26377;
(statearr_26438[(13)] = inst_26261);

(statearr_26438[(14)] = inst_26258);

(statearr_26438[(16)] = inst_26260);

(statearr_26438[(17)] = inst_26259);

return statearr_26438;
})();
var statearr_26439_26504 = state_26377__$1;
(statearr_26439_26504[(2)] = null);

(statearr_26439_26504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (14))){
var state_26377__$1 = state_26377;
var statearr_26440_26505 = state_26377__$1;
(statearr_26440_26505[(2)] = null);

(statearr_26440_26505[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (45))){
var inst_26367 = (state_26377[(2)]);
var state_26377__$1 = state_26377;
var statearr_26441_26506 = state_26377__$1;
(statearr_26441_26506[(2)] = inst_26367);

(statearr_26441_26506[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (26))){
var inst_26309 = (state_26377[(29)]);
var inst_26363 = (state_26377[(2)]);
var inst_26364 = cljs.core.seq.call(null,inst_26309);
var state_26377__$1 = (function (){var statearr_26442 = state_26377;
(statearr_26442[(31)] = inst_26363);

return statearr_26442;
})();
if(inst_26364){
var statearr_26443_26507 = state_26377__$1;
(statearr_26443_26507[(1)] = (42));

} else {
var statearr_26444_26508 = state_26377__$1;
(statearr_26444_26508[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (16))){
var inst_26278 = (state_26377[(7)]);
var inst_26280 = cljs.core.chunked_seq_QMARK_.call(null,inst_26278);
var state_26377__$1 = state_26377;
if(inst_26280){
var statearr_26445_26509 = state_26377__$1;
(statearr_26445_26509[(1)] = (19));

} else {
var statearr_26446_26510 = state_26377__$1;
(statearr_26446_26510[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (38))){
var inst_26356 = (state_26377[(2)]);
var state_26377__$1 = state_26377;
var statearr_26447_26511 = state_26377__$1;
(statearr_26447_26511[(2)] = inst_26356);

(statearr_26447_26511[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (30))){
var state_26377__$1 = state_26377;
var statearr_26448_26512 = state_26377__$1;
(statearr_26448_26512[(2)] = null);

(statearr_26448_26512[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (10))){
var inst_26261 = (state_26377[(13)]);
var inst_26259 = (state_26377[(17)]);
var inst_26267 = cljs.core._nth.call(null,inst_26259,inst_26261);
var inst_26268 = cljs.core.nth.call(null,inst_26267,(0),null);
var inst_26269 = cljs.core.nth.call(null,inst_26267,(1),null);
var state_26377__$1 = (function (){var statearr_26449 = state_26377;
(statearr_26449[(26)] = inst_26268);

return statearr_26449;
})();
if(cljs.core.truth_(inst_26269)){
var statearr_26450_26513 = state_26377__$1;
(statearr_26450_26513[(1)] = (13));

} else {
var statearr_26451_26514 = state_26377__$1;
(statearr_26451_26514[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (18))){
var inst_26302 = (state_26377[(2)]);
var state_26377__$1 = state_26377;
var statearr_26452_26515 = state_26377__$1;
(statearr_26452_26515[(2)] = inst_26302);

(statearr_26452_26515[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (42))){
var state_26377__$1 = state_26377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26377__$1,(45),dchan);
} else {
if((state_val_26378 === (37))){
var inst_26249 = (state_26377[(9)]);
var inst_26345 = (state_26377[(23)]);
var inst_26336 = (state_26377[(25)]);
var inst_26345__$1 = cljs.core.first.call(null,inst_26336);
var inst_26346 = cljs.core.async.put_BANG_.call(null,inst_26345__$1,inst_26249,done);
var state_26377__$1 = (function (){var statearr_26453 = state_26377;
(statearr_26453[(23)] = inst_26345__$1);

return statearr_26453;
})();
if(cljs.core.truth_(inst_26346)){
var statearr_26454_26516 = state_26377__$1;
(statearr_26454_26516[(1)] = (39));

} else {
var statearr_26455_26517 = state_26377__$1;
(statearr_26455_26517[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (8))){
var inst_26261 = (state_26377[(13)]);
var inst_26260 = (state_26377[(16)]);
var inst_26263 = (inst_26261 < inst_26260);
var inst_26264 = inst_26263;
var state_26377__$1 = state_26377;
if(cljs.core.truth_(inst_26264)){
var statearr_26456_26518 = state_26377__$1;
(statearr_26456_26518[(1)] = (10));

} else {
var statearr_26457_26519 = state_26377__$1;
(statearr_26457_26519[(1)] = (11));

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
});})(c__25158__auto___26465,cs,m,dchan,dctr,done))
;
return ((function (switch__25046__auto__,c__25158__auto___26465,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25047__auto__ = null;
var cljs$core$async$mult_$_state_machine__25047__auto____0 = (function (){
var statearr_26461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26461[(0)] = cljs$core$async$mult_$_state_machine__25047__auto__);

(statearr_26461[(1)] = (1));

return statearr_26461;
});
var cljs$core$async$mult_$_state_machine__25047__auto____1 = (function (state_26377){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_26377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e26462){if((e26462 instanceof Object)){
var ex__25050__auto__ = e26462;
var statearr_26463_26520 = state_26377;
(statearr_26463_26520[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26521 = state_26377;
state_26377 = G__26521;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25047__auto__ = function(state_26377){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25047__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25047__auto____1.call(this,state_26377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25047__auto____0;
cljs$core$async$mult_$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25047__auto____1;
return cljs$core$async$mult_$_state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto___26465,cs,m,dchan,dctr,done))
})();
var state__25160__auto__ = (function (){var statearr_26464 = f__25159__auto__.call(null);
(statearr_26464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto___26465);

return statearr_26464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto___26465,cs,m,dchan,dctr,done))
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
var args26522 = [];
var len__22809__auto___26525 = arguments.length;
var i__22810__auto___26526 = (0);
while(true){
if((i__22810__auto___26526 < len__22809__auto___26525)){
args26522.push((arguments[i__22810__auto___26526]));

var G__26527 = (i__22810__auto___26526 + (1));
i__22810__auto___26526 = G__26527;
continue;
} else {
}
break;
}

var G__26524 = args26522.length;
switch (G__26524) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26522.length)].join('')));

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
var x__22401__auto__ = (((m == null))?null:m);
var m__22402__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22401__auto__)]);
if(!((m__22402__auto__ == null))){
return m__22402__auto__.call(null,m,ch);
} else {
var m__22402__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22402__auto____$1 == null))){
return m__22402__auto____$1.call(null,m,ch);
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
var x__22401__auto__ = (((m == null))?null:m);
var m__22402__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22401__auto__)]);
if(!((m__22402__auto__ == null))){
return m__22402__auto__.call(null,m,ch);
} else {
var m__22402__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22402__auto____$1 == null))){
return m__22402__auto____$1.call(null,m,ch);
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
var x__22401__auto__ = (((m == null))?null:m);
var m__22402__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22401__auto__)]);
if(!((m__22402__auto__ == null))){
return m__22402__auto__.call(null,m);
} else {
var m__22402__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22402__auto____$1 == null))){
return m__22402__auto____$1.call(null,m);
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
var x__22401__auto__ = (((m == null))?null:m);
var m__22402__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22401__auto__)]);
if(!((m__22402__auto__ == null))){
return m__22402__auto__.call(null,m,state_map);
} else {
var m__22402__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22402__auto____$1 == null))){
return m__22402__auto____$1.call(null,m,state_map);
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
var x__22401__auto__ = (((m == null))?null:m);
var m__22402__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22401__auto__)]);
if(!((m__22402__auto__ == null))){
return m__22402__auto__.call(null,m,mode);
} else {
var m__22402__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22402__auto____$1 == null))){
return m__22402__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22816__auto__ = [];
var len__22809__auto___26539 = arguments.length;
var i__22810__auto___26540 = (0);
while(true){
if((i__22810__auto___26540 < len__22809__auto___26539)){
args__22816__auto__.push((arguments[i__22810__auto___26540]));

var G__26541 = (i__22810__auto___26540 + (1));
i__22810__auto___26540 = G__26541;
continue;
} else {
}
break;
}

var argseq__22817__auto__ = ((((3) < args__22816__auto__.length))?(new cljs.core.IndexedSeq(args__22816__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22817__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26533){
var map__26534 = p__26533;
var map__26534__$1 = ((((!((map__26534 == null)))?((((map__26534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26534):map__26534);
var opts = map__26534__$1;
var statearr_26536_26542 = state;
(statearr_26536_26542[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__26534,map__26534__$1,opts){
return (function (val){
var statearr_26537_26543 = state;
(statearr_26537_26543[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26534,map__26534__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_26538_26544 = state;
(statearr_26538_26544[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26529){
var G__26530 = cljs.core.first.call(null,seq26529);
var seq26529__$1 = cljs.core.next.call(null,seq26529);
var G__26531 = cljs.core.first.call(null,seq26529__$1);
var seq26529__$2 = cljs.core.next.call(null,seq26529__$1);
var G__26532 = cljs.core.first.call(null,seq26529__$2);
var seq26529__$3 = cljs.core.next.call(null,seq26529__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26530,G__26531,G__26532,seq26529__$3);
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
if(typeof cljs.core.async.t_cljs$core$async26708 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26708 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26709){
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
this.meta26709 = meta26709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26710,meta26709__$1){
var self__ = this;
var _26710__$1 = this;
return (new cljs.core.async.t_cljs$core$async26708(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26709__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26710){
var self__ = this;
var _26710__$1 = this;
return self__.meta26709;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26708.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26709","meta26709",1184628781,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26708.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26708";

cljs.core.async.t_cljs$core$async26708.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22344__auto__,writer__22345__auto__,opt__22346__auto__){
return cljs.core._write.call(null,writer__22345__auto__,"cljs.core.async/t_cljs$core$async26708");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26708 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26708(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26709){
return (new cljs.core.async.t_cljs$core$async26708(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26709));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26708(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25158__auto___26871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto___26871,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto___26871,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26808){
var state_val_26809 = (state_26808[(1)]);
if((state_val_26809 === (7))){
var inst_26726 = (state_26808[(2)]);
var state_26808__$1 = state_26808;
var statearr_26810_26872 = state_26808__$1;
(statearr_26810_26872[(2)] = inst_26726);

(statearr_26810_26872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (20))){
var inst_26738 = (state_26808[(7)]);
var state_26808__$1 = state_26808;
var statearr_26811_26873 = state_26808__$1;
(statearr_26811_26873[(2)] = inst_26738);

(statearr_26811_26873[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (27))){
var state_26808__$1 = state_26808;
var statearr_26812_26874 = state_26808__$1;
(statearr_26812_26874[(2)] = null);

(statearr_26812_26874[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (1))){
var inst_26714 = (state_26808[(8)]);
var inst_26714__$1 = calc_state.call(null);
var inst_26716 = (inst_26714__$1 == null);
var inst_26717 = cljs.core.not.call(null,inst_26716);
var state_26808__$1 = (function (){var statearr_26813 = state_26808;
(statearr_26813[(8)] = inst_26714__$1);

return statearr_26813;
})();
if(inst_26717){
var statearr_26814_26875 = state_26808__$1;
(statearr_26814_26875[(1)] = (2));

} else {
var statearr_26815_26876 = state_26808__$1;
(statearr_26815_26876[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (24))){
var inst_26761 = (state_26808[(9)]);
var inst_26768 = (state_26808[(10)]);
var inst_26782 = (state_26808[(11)]);
var inst_26782__$1 = inst_26761.call(null,inst_26768);
var state_26808__$1 = (function (){var statearr_26816 = state_26808;
(statearr_26816[(11)] = inst_26782__$1);

return statearr_26816;
})();
if(cljs.core.truth_(inst_26782__$1)){
var statearr_26817_26877 = state_26808__$1;
(statearr_26817_26877[(1)] = (29));

} else {
var statearr_26818_26878 = state_26808__$1;
(statearr_26818_26878[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (4))){
var inst_26729 = (state_26808[(2)]);
var state_26808__$1 = state_26808;
if(cljs.core.truth_(inst_26729)){
var statearr_26819_26879 = state_26808__$1;
(statearr_26819_26879[(1)] = (8));

} else {
var statearr_26820_26880 = state_26808__$1;
(statearr_26820_26880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (15))){
var inst_26755 = (state_26808[(2)]);
var state_26808__$1 = state_26808;
if(cljs.core.truth_(inst_26755)){
var statearr_26821_26881 = state_26808__$1;
(statearr_26821_26881[(1)] = (19));

} else {
var statearr_26822_26882 = state_26808__$1;
(statearr_26822_26882[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (21))){
var inst_26760 = (state_26808[(12)]);
var inst_26760__$1 = (state_26808[(2)]);
var inst_26761 = cljs.core.get.call(null,inst_26760__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26762 = cljs.core.get.call(null,inst_26760__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26763 = cljs.core.get.call(null,inst_26760__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26808__$1 = (function (){var statearr_26823 = state_26808;
(statearr_26823[(12)] = inst_26760__$1);

(statearr_26823[(9)] = inst_26761);

(statearr_26823[(13)] = inst_26762);

return statearr_26823;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26808__$1,(22),inst_26763);
} else {
if((state_val_26809 === (31))){
var inst_26790 = (state_26808[(2)]);
var state_26808__$1 = state_26808;
if(cljs.core.truth_(inst_26790)){
var statearr_26824_26883 = state_26808__$1;
(statearr_26824_26883[(1)] = (32));

} else {
var statearr_26825_26884 = state_26808__$1;
(statearr_26825_26884[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (32))){
var inst_26767 = (state_26808[(14)]);
var state_26808__$1 = state_26808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26808__$1,(35),out,inst_26767);
} else {
if((state_val_26809 === (33))){
var inst_26760 = (state_26808[(12)]);
var inst_26738 = inst_26760;
var state_26808__$1 = (function (){var statearr_26826 = state_26808;
(statearr_26826[(7)] = inst_26738);

return statearr_26826;
})();
var statearr_26827_26885 = state_26808__$1;
(statearr_26827_26885[(2)] = null);

(statearr_26827_26885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (13))){
var inst_26738 = (state_26808[(7)]);
var inst_26745 = inst_26738.cljs$lang$protocol_mask$partition0$;
var inst_26746 = (inst_26745 & (64));
var inst_26747 = inst_26738.cljs$core$ISeq$;
var inst_26748 = (inst_26746) || (inst_26747);
var state_26808__$1 = state_26808;
if(cljs.core.truth_(inst_26748)){
var statearr_26828_26886 = state_26808__$1;
(statearr_26828_26886[(1)] = (16));

} else {
var statearr_26829_26887 = state_26808__$1;
(statearr_26829_26887[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (22))){
var inst_26768 = (state_26808[(10)]);
var inst_26767 = (state_26808[(14)]);
var inst_26766 = (state_26808[(2)]);
var inst_26767__$1 = cljs.core.nth.call(null,inst_26766,(0),null);
var inst_26768__$1 = cljs.core.nth.call(null,inst_26766,(1),null);
var inst_26769 = (inst_26767__$1 == null);
var inst_26770 = cljs.core._EQ_.call(null,inst_26768__$1,change);
var inst_26771 = (inst_26769) || (inst_26770);
var state_26808__$1 = (function (){var statearr_26830 = state_26808;
(statearr_26830[(10)] = inst_26768__$1);

(statearr_26830[(14)] = inst_26767__$1);

return statearr_26830;
})();
if(cljs.core.truth_(inst_26771)){
var statearr_26831_26888 = state_26808__$1;
(statearr_26831_26888[(1)] = (23));

} else {
var statearr_26832_26889 = state_26808__$1;
(statearr_26832_26889[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (36))){
var inst_26760 = (state_26808[(12)]);
var inst_26738 = inst_26760;
var state_26808__$1 = (function (){var statearr_26833 = state_26808;
(statearr_26833[(7)] = inst_26738);

return statearr_26833;
})();
var statearr_26834_26890 = state_26808__$1;
(statearr_26834_26890[(2)] = null);

(statearr_26834_26890[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (29))){
var inst_26782 = (state_26808[(11)]);
var state_26808__$1 = state_26808;
var statearr_26835_26891 = state_26808__$1;
(statearr_26835_26891[(2)] = inst_26782);

(statearr_26835_26891[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (6))){
var state_26808__$1 = state_26808;
var statearr_26836_26892 = state_26808__$1;
(statearr_26836_26892[(2)] = false);

(statearr_26836_26892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (28))){
var inst_26778 = (state_26808[(2)]);
var inst_26779 = calc_state.call(null);
var inst_26738 = inst_26779;
var state_26808__$1 = (function (){var statearr_26837 = state_26808;
(statearr_26837[(7)] = inst_26738);

(statearr_26837[(15)] = inst_26778);

return statearr_26837;
})();
var statearr_26838_26893 = state_26808__$1;
(statearr_26838_26893[(2)] = null);

(statearr_26838_26893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (25))){
var inst_26804 = (state_26808[(2)]);
var state_26808__$1 = state_26808;
var statearr_26839_26894 = state_26808__$1;
(statearr_26839_26894[(2)] = inst_26804);

(statearr_26839_26894[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (34))){
var inst_26802 = (state_26808[(2)]);
var state_26808__$1 = state_26808;
var statearr_26840_26895 = state_26808__$1;
(statearr_26840_26895[(2)] = inst_26802);

(statearr_26840_26895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (17))){
var state_26808__$1 = state_26808;
var statearr_26841_26896 = state_26808__$1;
(statearr_26841_26896[(2)] = false);

(statearr_26841_26896[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (3))){
var state_26808__$1 = state_26808;
var statearr_26842_26897 = state_26808__$1;
(statearr_26842_26897[(2)] = false);

(statearr_26842_26897[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (12))){
var inst_26806 = (state_26808[(2)]);
var state_26808__$1 = state_26808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26808__$1,inst_26806);
} else {
if((state_val_26809 === (2))){
var inst_26714 = (state_26808[(8)]);
var inst_26719 = inst_26714.cljs$lang$protocol_mask$partition0$;
var inst_26720 = (inst_26719 & (64));
var inst_26721 = inst_26714.cljs$core$ISeq$;
var inst_26722 = (inst_26720) || (inst_26721);
var state_26808__$1 = state_26808;
if(cljs.core.truth_(inst_26722)){
var statearr_26843_26898 = state_26808__$1;
(statearr_26843_26898[(1)] = (5));

} else {
var statearr_26844_26899 = state_26808__$1;
(statearr_26844_26899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (23))){
var inst_26767 = (state_26808[(14)]);
var inst_26773 = (inst_26767 == null);
var state_26808__$1 = state_26808;
if(cljs.core.truth_(inst_26773)){
var statearr_26845_26900 = state_26808__$1;
(statearr_26845_26900[(1)] = (26));

} else {
var statearr_26846_26901 = state_26808__$1;
(statearr_26846_26901[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (35))){
var inst_26793 = (state_26808[(2)]);
var state_26808__$1 = state_26808;
if(cljs.core.truth_(inst_26793)){
var statearr_26847_26902 = state_26808__$1;
(statearr_26847_26902[(1)] = (36));

} else {
var statearr_26848_26903 = state_26808__$1;
(statearr_26848_26903[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (19))){
var inst_26738 = (state_26808[(7)]);
var inst_26757 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26738);
var state_26808__$1 = state_26808;
var statearr_26849_26904 = state_26808__$1;
(statearr_26849_26904[(2)] = inst_26757);

(statearr_26849_26904[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (11))){
var inst_26738 = (state_26808[(7)]);
var inst_26742 = (inst_26738 == null);
var inst_26743 = cljs.core.not.call(null,inst_26742);
var state_26808__$1 = state_26808;
if(inst_26743){
var statearr_26850_26905 = state_26808__$1;
(statearr_26850_26905[(1)] = (13));

} else {
var statearr_26851_26906 = state_26808__$1;
(statearr_26851_26906[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (9))){
var inst_26714 = (state_26808[(8)]);
var state_26808__$1 = state_26808;
var statearr_26852_26907 = state_26808__$1;
(statearr_26852_26907[(2)] = inst_26714);

(statearr_26852_26907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (5))){
var state_26808__$1 = state_26808;
var statearr_26853_26908 = state_26808__$1;
(statearr_26853_26908[(2)] = true);

(statearr_26853_26908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (14))){
var state_26808__$1 = state_26808;
var statearr_26854_26909 = state_26808__$1;
(statearr_26854_26909[(2)] = false);

(statearr_26854_26909[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (26))){
var inst_26768 = (state_26808[(10)]);
var inst_26775 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26768);
var state_26808__$1 = state_26808;
var statearr_26855_26910 = state_26808__$1;
(statearr_26855_26910[(2)] = inst_26775);

(statearr_26855_26910[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (16))){
var state_26808__$1 = state_26808;
var statearr_26856_26911 = state_26808__$1;
(statearr_26856_26911[(2)] = true);

(statearr_26856_26911[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (38))){
var inst_26798 = (state_26808[(2)]);
var state_26808__$1 = state_26808;
var statearr_26857_26912 = state_26808__$1;
(statearr_26857_26912[(2)] = inst_26798);

(statearr_26857_26912[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (30))){
var inst_26761 = (state_26808[(9)]);
var inst_26768 = (state_26808[(10)]);
var inst_26762 = (state_26808[(13)]);
var inst_26785 = cljs.core.empty_QMARK_.call(null,inst_26761);
var inst_26786 = inst_26762.call(null,inst_26768);
var inst_26787 = cljs.core.not.call(null,inst_26786);
var inst_26788 = (inst_26785) && (inst_26787);
var state_26808__$1 = state_26808;
var statearr_26858_26913 = state_26808__$1;
(statearr_26858_26913[(2)] = inst_26788);

(statearr_26858_26913[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (10))){
var inst_26714 = (state_26808[(8)]);
var inst_26734 = (state_26808[(2)]);
var inst_26735 = cljs.core.get.call(null,inst_26734,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26736 = cljs.core.get.call(null,inst_26734,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26737 = cljs.core.get.call(null,inst_26734,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26738 = inst_26714;
var state_26808__$1 = (function (){var statearr_26859 = state_26808;
(statearr_26859[(16)] = inst_26737);

(statearr_26859[(7)] = inst_26738);

(statearr_26859[(17)] = inst_26735);

(statearr_26859[(18)] = inst_26736);

return statearr_26859;
})();
var statearr_26860_26914 = state_26808__$1;
(statearr_26860_26914[(2)] = null);

(statearr_26860_26914[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (18))){
var inst_26752 = (state_26808[(2)]);
var state_26808__$1 = state_26808;
var statearr_26861_26915 = state_26808__$1;
(statearr_26861_26915[(2)] = inst_26752);

(statearr_26861_26915[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (37))){
var state_26808__$1 = state_26808;
var statearr_26862_26916 = state_26808__$1;
(statearr_26862_26916[(2)] = null);

(statearr_26862_26916[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26809 === (8))){
var inst_26714 = (state_26808[(8)]);
var inst_26731 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26714);
var state_26808__$1 = state_26808;
var statearr_26863_26917 = state_26808__$1;
(statearr_26863_26917[(2)] = inst_26731);

(statearr_26863_26917[(1)] = (10));


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
});})(c__25158__auto___26871,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25046__auto__,c__25158__auto___26871,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25047__auto__ = null;
var cljs$core$async$mix_$_state_machine__25047__auto____0 = (function (){
var statearr_26867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26867[(0)] = cljs$core$async$mix_$_state_machine__25047__auto__);

(statearr_26867[(1)] = (1));

return statearr_26867;
});
var cljs$core$async$mix_$_state_machine__25047__auto____1 = (function (state_26808){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_26808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e26868){if((e26868 instanceof Object)){
var ex__25050__auto__ = e26868;
var statearr_26869_26918 = state_26808;
(statearr_26869_26918[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26919 = state_26808;
state_26808 = G__26919;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25047__auto__ = function(state_26808){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25047__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25047__auto____1.call(this,state_26808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25047__auto____0;
cljs$core$async$mix_$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25047__auto____1;
return cljs$core$async$mix_$_state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto___26871,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25160__auto__ = (function (){var statearr_26870 = f__25159__auto__.call(null);
(statearr_26870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto___26871);

return statearr_26870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto___26871,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__22401__auto__ = (((p == null))?null:p);
var m__22402__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22401__auto__)]);
if(!((m__22402__auto__ == null))){
return m__22402__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22402__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22402__auto____$1 == null))){
return m__22402__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__22401__auto__ = (((p == null))?null:p);
var m__22402__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22401__auto__)]);
if(!((m__22402__auto__ == null))){
return m__22402__auto__.call(null,p,v,ch);
} else {
var m__22402__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22402__auto____$1 == null))){
return m__22402__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26920 = [];
var len__22809__auto___26923 = arguments.length;
var i__22810__auto___26924 = (0);
while(true){
if((i__22810__auto___26924 < len__22809__auto___26923)){
args26920.push((arguments[i__22810__auto___26924]));

var G__26925 = (i__22810__auto___26924 + (1));
i__22810__auto___26924 = G__26925;
continue;
} else {
}
break;
}

var G__26922 = args26920.length;
switch (G__26922) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26920.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22401__auto__ = (((p == null))?null:p);
var m__22402__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22401__auto__)]);
if(!((m__22402__auto__ == null))){
return m__22402__auto__.call(null,p);
} else {
var m__22402__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22402__auto____$1 == null))){
return m__22402__auto____$1.call(null,p);
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
var x__22401__auto__ = (((p == null))?null:p);
var m__22402__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22401__auto__)]);
if(!((m__22402__auto__ == null))){
return m__22402__auto__.call(null,p,v);
} else {
var m__22402__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22402__auto____$1 == null))){
return m__22402__auto____$1.call(null,p,v);
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
var args26928 = [];
var len__22809__auto___27053 = arguments.length;
var i__22810__auto___27054 = (0);
while(true){
if((i__22810__auto___27054 < len__22809__auto___27053)){
args26928.push((arguments[i__22810__auto___27054]));

var G__27055 = (i__22810__auto___27054 + (1));
i__22810__auto___27054 = G__27055;
continue;
} else {
}
break;
}

var G__26930 = args26928.length;
switch (G__26930) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26928.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21738__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21738__auto__)){
return or__21738__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21738__auto__,mults){
return (function (p1__26927_SHARP_){
if(cljs.core.truth_(p1__26927_SHARP_.call(null,topic))){
return p1__26927_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26927_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21738__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26931 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26931 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26932){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26932 = meta26932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26933,meta26932__$1){
var self__ = this;
var _26933__$1 = this;
return (new cljs.core.async.t_cljs$core$async26931(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26932__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26931.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26933){
var self__ = this;
var _26933__$1 = this;
return self__.meta26932;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26931.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26931.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26931.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26931.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26931.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26931.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26931.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26931.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26932","meta26932",-1012849008,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26931.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26931";

cljs.core.async.t_cljs$core$async26931.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22344__auto__,writer__22345__auto__,opt__22346__auto__){
return cljs.core._write.call(null,writer__22345__auto__,"cljs.core.async/t_cljs$core$async26931");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26931 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26931(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26932){
return (new cljs.core.async.t_cljs$core$async26931(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26932));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26931(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25158__auto___27057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto___27057,mults,ensure_mult,p){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto___27057,mults,ensure_mult,p){
return (function (state_27005){
var state_val_27006 = (state_27005[(1)]);
if((state_val_27006 === (7))){
var inst_27001 = (state_27005[(2)]);
var state_27005__$1 = state_27005;
var statearr_27007_27058 = state_27005__$1;
(statearr_27007_27058[(2)] = inst_27001);

(statearr_27007_27058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (20))){
var state_27005__$1 = state_27005;
var statearr_27008_27059 = state_27005__$1;
(statearr_27008_27059[(2)] = null);

(statearr_27008_27059[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (1))){
var state_27005__$1 = state_27005;
var statearr_27009_27060 = state_27005__$1;
(statearr_27009_27060[(2)] = null);

(statearr_27009_27060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (24))){
var inst_26984 = (state_27005[(7)]);
var inst_26993 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26984);
var state_27005__$1 = state_27005;
var statearr_27010_27061 = state_27005__$1;
(statearr_27010_27061[(2)] = inst_26993);

(statearr_27010_27061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (4))){
var inst_26936 = (state_27005[(8)]);
var inst_26936__$1 = (state_27005[(2)]);
var inst_26937 = (inst_26936__$1 == null);
var state_27005__$1 = (function (){var statearr_27011 = state_27005;
(statearr_27011[(8)] = inst_26936__$1);

return statearr_27011;
})();
if(cljs.core.truth_(inst_26937)){
var statearr_27012_27062 = state_27005__$1;
(statearr_27012_27062[(1)] = (5));

} else {
var statearr_27013_27063 = state_27005__$1;
(statearr_27013_27063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (15))){
var inst_26978 = (state_27005[(2)]);
var state_27005__$1 = state_27005;
var statearr_27014_27064 = state_27005__$1;
(statearr_27014_27064[(2)] = inst_26978);

(statearr_27014_27064[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (21))){
var inst_26998 = (state_27005[(2)]);
var state_27005__$1 = (function (){var statearr_27015 = state_27005;
(statearr_27015[(9)] = inst_26998);

return statearr_27015;
})();
var statearr_27016_27065 = state_27005__$1;
(statearr_27016_27065[(2)] = null);

(statearr_27016_27065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (13))){
var inst_26960 = (state_27005[(10)]);
var inst_26962 = cljs.core.chunked_seq_QMARK_.call(null,inst_26960);
var state_27005__$1 = state_27005;
if(inst_26962){
var statearr_27017_27066 = state_27005__$1;
(statearr_27017_27066[(1)] = (16));

} else {
var statearr_27018_27067 = state_27005__$1;
(statearr_27018_27067[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (22))){
var inst_26990 = (state_27005[(2)]);
var state_27005__$1 = state_27005;
if(cljs.core.truth_(inst_26990)){
var statearr_27019_27068 = state_27005__$1;
(statearr_27019_27068[(1)] = (23));

} else {
var statearr_27020_27069 = state_27005__$1;
(statearr_27020_27069[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (6))){
var inst_26984 = (state_27005[(7)]);
var inst_26936 = (state_27005[(8)]);
var inst_26986 = (state_27005[(11)]);
var inst_26984__$1 = topic_fn.call(null,inst_26936);
var inst_26985 = cljs.core.deref.call(null,mults);
var inst_26986__$1 = cljs.core.get.call(null,inst_26985,inst_26984__$1);
var state_27005__$1 = (function (){var statearr_27021 = state_27005;
(statearr_27021[(7)] = inst_26984__$1);

(statearr_27021[(11)] = inst_26986__$1);

return statearr_27021;
})();
if(cljs.core.truth_(inst_26986__$1)){
var statearr_27022_27070 = state_27005__$1;
(statearr_27022_27070[(1)] = (19));

} else {
var statearr_27023_27071 = state_27005__$1;
(statearr_27023_27071[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (25))){
var inst_26995 = (state_27005[(2)]);
var state_27005__$1 = state_27005;
var statearr_27024_27072 = state_27005__$1;
(statearr_27024_27072[(2)] = inst_26995);

(statearr_27024_27072[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (17))){
var inst_26960 = (state_27005[(10)]);
var inst_26969 = cljs.core.first.call(null,inst_26960);
var inst_26970 = cljs.core.async.muxch_STAR_.call(null,inst_26969);
var inst_26971 = cljs.core.async.close_BANG_.call(null,inst_26970);
var inst_26972 = cljs.core.next.call(null,inst_26960);
var inst_26946 = inst_26972;
var inst_26947 = null;
var inst_26948 = (0);
var inst_26949 = (0);
var state_27005__$1 = (function (){var statearr_27025 = state_27005;
(statearr_27025[(12)] = inst_26947);

(statearr_27025[(13)] = inst_26949);

(statearr_27025[(14)] = inst_26971);

(statearr_27025[(15)] = inst_26946);

(statearr_27025[(16)] = inst_26948);

return statearr_27025;
})();
var statearr_27026_27073 = state_27005__$1;
(statearr_27026_27073[(2)] = null);

(statearr_27026_27073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (3))){
var inst_27003 = (state_27005[(2)]);
var state_27005__$1 = state_27005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27005__$1,inst_27003);
} else {
if((state_val_27006 === (12))){
var inst_26980 = (state_27005[(2)]);
var state_27005__$1 = state_27005;
var statearr_27027_27074 = state_27005__$1;
(statearr_27027_27074[(2)] = inst_26980);

(statearr_27027_27074[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (2))){
var state_27005__$1 = state_27005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27005__$1,(4),ch);
} else {
if((state_val_27006 === (23))){
var state_27005__$1 = state_27005;
var statearr_27028_27075 = state_27005__$1;
(statearr_27028_27075[(2)] = null);

(statearr_27028_27075[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (19))){
var inst_26936 = (state_27005[(8)]);
var inst_26986 = (state_27005[(11)]);
var inst_26988 = cljs.core.async.muxch_STAR_.call(null,inst_26986);
var state_27005__$1 = state_27005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27005__$1,(22),inst_26988,inst_26936);
} else {
if((state_val_27006 === (11))){
var inst_26960 = (state_27005[(10)]);
var inst_26946 = (state_27005[(15)]);
var inst_26960__$1 = cljs.core.seq.call(null,inst_26946);
var state_27005__$1 = (function (){var statearr_27029 = state_27005;
(statearr_27029[(10)] = inst_26960__$1);

return statearr_27029;
})();
if(inst_26960__$1){
var statearr_27030_27076 = state_27005__$1;
(statearr_27030_27076[(1)] = (13));

} else {
var statearr_27031_27077 = state_27005__$1;
(statearr_27031_27077[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (9))){
var inst_26982 = (state_27005[(2)]);
var state_27005__$1 = state_27005;
var statearr_27032_27078 = state_27005__$1;
(statearr_27032_27078[(2)] = inst_26982);

(statearr_27032_27078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (5))){
var inst_26943 = cljs.core.deref.call(null,mults);
var inst_26944 = cljs.core.vals.call(null,inst_26943);
var inst_26945 = cljs.core.seq.call(null,inst_26944);
var inst_26946 = inst_26945;
var inst_26947 = null;
var inst_26948 = (0);
var inst_26949 = (0);
var state_27005__$1 = (function (){var statearr_27033 = state_27005;
(statearr_27033[(12)] = inst_26947);

(statearr_27033[(13)] = inst_26949);

(statearr_27033[(15)] = inst_26946);

(statearr_27033[(16)] = inst_26948);

return statearr_27033;
})();
var statearr_27034_27079 = state_27005__$1;
(statearr_27034_27079[(2)] = null);

(statearr_27034_27079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (14))){
var state_27005__$1 = state_27005;
var statearr_27038_27080 = state_27005__$1;
(statearr_27038_27080[(2)] = null);

(statearr_27038_27080[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (16))){
var inst_26960 = (state_27005[(10)]);
var inst_26964 = cljs.core.chunk_first.call(null,inst_26960);
var inst_26965 = cljs.core.chunk_rest.call(null,inst_26960);
var inst_26966 = cljs.core.count.call(null,inst_26964);
var inst_26946 = inst_26965;
var inst_26947 = inst_26964;
var inst_26948 = inst_26966;
var inst_26949 = (0);
var state_27005__$1 = (function (){var statearr_27039 = state_27005;
(statearr_27039[(12)] = inst_26947);

(statearr_27039[(13)] = inst_26949);

(statearr_27039[(15)] = inst_26946);

(statearr_27039[(16)] = inst_26948);

return statearr_27039;
})();
var statearr_27040_27081 = state_27005__$1;
(statearr_27040_27081[(2)] = null);

(statearr_27040_27081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (10))){
var inst_26947 = (state_27005[(12)]);
var inst_26949 = (state_27005[(13)]);
var inst_26946 = (state_27005[(15)]);
var inst_26948 = (state_27005[(16)]);
var inst_26954 = cljs.core._nth.call(null,inst_26947,inst_26949);
var inst_26955 = cljs.core.async.muxch_STAR_.call(null,inst_26954);
var inst_26956 = cljs.core.async.close_BANG_.call(null,inst_26955);
var inst_26957 = (inst_26949 + (1));
var tmp27035 = inst_26947;
var tmp27036 = inst_26946;
var tmp27037 = inst_26948;
var inst_26946__$1 = tmp27036;
var inst_26947__$1 = tmp27035;
var inst_26948__$1 = tmp27037;
var inst_26949__$1 = inst_26957;
var state_27005__$1 = (function (){var statearr_27041 = state_27005;
(statearr_27041[(12)] = inst_26947__$1);

(statearr_27041[(13)] = inst_26949__$1);

(statearr_27041[(17)] = inst_26956);

(statearr_27041[(15)] = inst_26946__$1);

(statearr_27041[(16)] = inst_26948__$1);

return statearr_27041;
})();
var statearr_27042_27082 = state_27005__$1;
(statearr_27042_27082[(2)] = null);

(statearr_27042_27082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (18))){
var inst_26975 = (state_27005[(2)]);
var state_27005__$1 = state_27005;
var statearr_27043_27083 = state_27005__$1;
(statearr_27043_27083[(2)] = inst_26975);

(statearr_27043_27083[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (8))){
var inst_26949 = (state_27005[(13)]);
var inst_26948 = (state_27005[(16)]);
var inst_26951 = (inst_26949 < inst_26948);
var inst_26952 = inst_26951;
var state_27005__$1 = state_27005;
if(cljs.core.truth_(inst_26952)){
var statearr_27044_27084 = state_27005__$1;
(statearr_27044_27084[(1)] = (10));

} else {
var statearr_27045_27085 = state_27005__$1;
(statearr_27045_27085[(1)] = (11));

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
});})(c__25158__auto___27057,mults,ensure_mult,p))
;
return ((function (switch__25046__auto__,c__25158__auto___27057,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25047__auto__ = null;
var cljs$core$async$state_machine__25047__auto____0 = (function (){
var statearr_27049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27049[(0)] = cljs$core$async$state_machine__25047__auto__);

(statearr_27049[(1)] = (1));

return statearr_27049;
});
var cljs$core$async$state_machine__25047__auto____1 = (function (state_27005){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_27005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e27050){if((e27050 instanceof Object)){
var ex__25050__auto__ = e27050;
var statearr_27051_27086 = state_27005;
(statearr_27051_27086[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27087 = state_27005;
state_27005 = G__27087;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
cljs$core$async$state_machine__25047__auto__ = function(state_27005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25047__auto____1.call(this,state_27005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25047__auto____0;
cljs$core$async$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25047__auto____1;
return cljs$core$async$state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto___27057,mults,ensure_mult,p))
})();
var state__25160__auto__ = (function (){var statearr_27052 = f__25159__auto__.call(null);
(statearr_27052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto___27057);

return statearr_27052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto___27057,mults,ensure_mult,p))
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
var args27088 = [];
var len__22809__auto___27091 = arguments.length;
var i__22810__auto___27092 = (0);
while(true){
if((i__22810__auto___27092 < len__22809__auto___27091)){
args27088.push((arguments[i__22810__auto___27092]));

var G__27093 = (i__22810__auto___27092 + (1));
i__22810__auto___27092 = G__27093;
continue;
} else {
}
break;
}

var G__27090 = args27088.length;
switch (G__27090) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27088.length)].join('')));

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
var args27095 = [];
var len__22809__auto___27098 = arguments.length;
var i__22810__auto___27099 = (0);
while(true){
if((i__22810__auto___27099 < len__22809__auto___27098)){
args27095.push((arguments[i__22810__auto___27099]));

var G__27100 = (i__22810__auto___27099 + (1));
i__22810__auto___27099 = G__27100;
continue;
} else {
}
break;
}

var G__27097 = args27095.length;
switch (G__27097) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27095.length)].join('')));

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
var args27102 = [];
var len__22809__auto___27173 = arguments.length;
var i__22810__auto___27174 = (0);
while(true){
if((i__22810__auto___27174 < len__22809__auto___27173)){
args27102.push((arguments[i__22810__auto___27174]));

var G__27175 = (i__22810__auto___27174 + (1));
i__22810__auto___27174 = G__27175;
continue;
} else {
}
break;
}

var G__27104 = args27102.length;
switch (G__27104) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27102.length)].join('')));

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
var c__25158__auto___27177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto___27177,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto___27177,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27143){
var state_val_27144 = (state_27143[(1)]);
if((state_val_27144 === (7))){
var state_27143__$1 = state_27143;
var statearr_27145_27178 = state_27143__$1;
(statearr_27145_27178[(2)] = null);

(statearr_27145_27178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27144 === (1))){
var state_27143__$1 = state_27143;
var statearr_27146_27179 = state_27143__$1;
(statearr_27146_27179[(2)] = null);

(statearr_27146_27179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27144 === (4))){
var inst_27107 = (state_27143[(7)]);
var inst_27109 = (inst_27107 < cnt);
var state_27143__$1 = state_27143;
if(cljs.core.truth_(inst_27109)){
var statearr_27147_27180 = state_27143__$1;
(statearr_27147_27180[(1)] = (6));

} else {
var statearr_27148_27181 = state_27143__$1;
(statearr_27148_27181[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27144 === (15))){
var inst_27139 = (state_27143[(2)]);
var state_27143__$1 = state_27143;
var statearr_27149_27182 = state_27143__$1;
(statearr_27149_27182[(2)] = inst_27139);

(statearr_27149_27182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27144 === (13))){
var inst_27132 = cljs.core.async.close_BANG_.call(null,out);
var state_27143__$1 = state_27143;
var statearr_27150_27183 = state_27143__$1;
(statearr_27150_27183[(2)] = inst_27132);

(statearr_27150_27183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27144 === (6))){
var state_27143__$1 = state_27143;
var statearr_27151_27184 = state_27143__$1;
(statearr_27151_27184[(2)] = null);

(statearr_27151_27184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27144 === (3))){
var inst_27141 = (state_27143[(2)]);
var state_27143__$1 = state_27143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27143__$1,inst_27141);
} else {
if((state_val_27144 === (12))){
var inst_27129 = (state_27143[(8)]);
var inst_27129__$1 = (state_27143[(2)]);
var inst_27130 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27129__$1);
var state_27143__$1 = (function (){var statearr_27152 = state_27143;
(statearr_27152[(8)] = inst_27129__$1);

return statearr_27152;
})();
if(cljs.core.truth_(inst_27130)){
var statearr_27153_27185 = state_27143__$1;
(statearr_27153_27185[(1)] = (13));

} else {
var statearr_27154_27186 = state_27143__$1;
(statearr_27154_27186[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27144 === (2))){
var inst_27106 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27107 = (0);
var state_27143__$1 = (function (){var statearr_27155 = state_27143;
(statearr_27155[(7)] = inst_27107);

(statearr_27155[(9)] = inst_27106);

return statearr_27155;
})();
var statearr_27156_27187 = state_27143__$1;
(statearr_27156_27187[(2)] = null);

(statearr_27156_27187[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27144 === (11))){
var inst_27107 = (state_27143[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27143,(10),Object,null,(9));
var inst_27116 = chs__$1.call(null,inst_27107);
var inst_27117 = done.call(null,inst_27107);
var inst_27118 = cljs.core.async.take_BANG_.call(null,inst_27116,inst_27117);
var state_27143__$1 = state_27143;
var statearr_27157_27188 = state_27143__$1;
(statearr_27157_27188[(2)] = inst_27118);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27143__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27144 === (9))){
var inst_27107 = (state_27143[(7)]);
var inst_27120 = (state_27143[(2)]);
var inst_27121 = (inst_27107 + (1));
var inst_27107__$1 = inst_27121;
var state_27143__$1 = (function (){var statearr_27158 = state_27143;
(statearr_27158[(10)] = inst_27120);

(statearr_27158[(7)] = inst_27107__$1);

return statearr_27158;
})();
var statearr_27159_27189 = state_27143__$1;
(statearr_27159_27189[(2)] = null);

(statearr_27159_27189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27144 === (5))){
var inst_27127 = (state_27143[(2)]);
var state_27143__$1 = (function (){var statearr_27160 = state_27143;
(statearr_27160[(11)] = inst_27127);

return statearr_27160;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27143__$1,(12),dchan);
} else {
if((state_val_27144 === (14))){
var inst_27129 = (state_27143[(8)]);
var inst_27134 = cljs.core.apply.call(null,f,inst_27129);
var state_27143__$1 = state_27143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27143__$1,(16),out,inst_27134);
} else {
if((state_val_27144 === (16))){
var inst_27136 = (state_27143[(2)]);
var state_27143__$1 = (function (){var statearr_27161 = state_27143;
(statearr_27161[(12)] = inst_27136);

return statearr_27161;
})();
var statearr_27162_27190 = state_27143__$1;
(statearr_27162_27190[(2)] = null);

(statearr_27162_27190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27144 === (10))){
var inst_27111 = (state_27143[(2)]);
var inst_27112 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27143__$1 = (function (){var statearr_27163 = state_27143;
(statearr_27163[(13)] = inst_27111);

return statearr_27163;
})();
var statearr_27164_27191 = state_27143__$1;
(statearr_27164_27191[(2)] = inst_27112);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27143__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27144 === (8))){
var inst_27125 = (state_27143[(2)]);
var state_27143__$1 = state_27143;
var statearr_27165_27192 = state_27143__$1;
(statearr_27165_27192[(2)] = inst_27125);

(statearr_27165_27192[(1)] = (5));


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
});})(c__25158__auto___27177,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25046__auto__,c__25158__auto___27177,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25047__auto__ = null;
var cljs$core$async$state_machine__25047__auto____0 = (function (){
var statearr_27169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27169[(0)] = cljs$core$async$state_machine__25047__auto__);

(statearr_27169[(1)] = (1));

return statearr_27169;
});
var cljs$core$async$state_machine__25047__auto____1 = (function (state_27143){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_27143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e27170){if((e27170 instanceof Object)){
var ex__25050__auto__ = e27170;
var statearr_27171_27193 = state_27143;
(statearr_27171_27193[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27194 = state_27143;
state_27143 = G__27194;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
cljs$core$async$state_machine__25047__auto__ = function(state_27143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25047__auto____1.call(this,state_27143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25047__auto____0;
cljs$core$async$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25047__auto____1;
return cljs$core$async$state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto___27177,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25160__auto__ = (function (){var statearr_27172 = f__25159__auto__.call(null);
(statearr_27172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto___27177);

return statearr_27172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto___27177,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args27196 = [];
var len__22809__auto___27252 = arguments.length;
var i__22810__auto___27253 = (0);
while(true){
if((i__22810__auto___27253 < len__22809__auto___27252)){
args27196.push((arguments[i__22810__auto___27253]));

var G__27254 = (i__22810__auto___27253 + (1));
i__22810__auto___27253 = G__27254;
continue;
} else {
}
break;
}

var G__27198 = args27196.length;
switch (G__27198) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27196.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25158__auto___27256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto___27256,out){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto___27256,out){
return (function (state_27228){
var state_val_27229 = (state_27228[(1)]);
if((state_val_27229 === (7))){
var inst_27207 = (state_27228[(7)]);
var inst_27208 = (state_27228[(8)]);
var inst_27207__$1 = (state_27228[(2)]);
var inst_27208__$1 = cljs.core.nth.call(null,inst_27207__$1,(0),null);
var inst_27209 = cljs.core.nth.call(null,inst_27207__$1,(1),null);
var inst_27210 = (inst_27208__$1 == null);
var state_27228__$1 = (function (){var statearr_27230 = state_27228;
(statearr_27230[(9)] = inst_27209);

(statearr_27230[(7)] = inst_27207__$1);

(statearr_27230[(8)] = inst_27208__$1);

return statearr_27230;
})();
if(cljs.core.truth_(inst_27210)){
var statearr_27231_27257 = state_27228__$1;
(statearr_27231_27257[(1)] = (8));

} else {
var statearr_27232_27258 = state_27228__$1;
(statearr_27232_27258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (1))){
var inst_27199 = cljs.core.vec.call(null,chs);
var inst_27200 = inst_27199;
var state_27228__$1 = (function (){var statearr_27233 = state_27228;
(statearr_27233[(10)] = inst_27200);

return statearr_27233;
})();
var statearr_27234_27259 = state_27228__$1;
(statearr_27234_27259[(2)] = null);

(statearr_27234_27259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (4))){
var inst_27200 = (state_27228[(10)]);
var state_27228__$1 = state_27228;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27228__$1,(7),inst_27200);
} else {
if((state_val_27229 === (6))){
var inst_27224 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
var statearr_27235_27260 = state_27228__$1;
(statearr_27235_27260[(2)] = inst_27224);

(statearr_27235_27260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (3))){
var inst_27226 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27228__$1,inst_27226);
} else {
if((state_val_27229 === (2))){
var inst_27200 = (state_27228[(10)]);
var inst_27202 = cljs.core.count.call(null,inst_27200);
var inst_27203 = (inst_27202 > (0));
var state_27228__$1 = state_27228;
if(cljs.core.truth_(inst_27203)){
var statearr_27237_27261 = state_27228__$1;
(statearr_27237_27261[(1)] = (4));

} else {
var statearr_27238_27262 = state_27228__$1;
(statearr_27238_27262[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (11))){
var inst_27200 = (state_27228[(10)]);
var inst_27217 = (state_27228[(2)]);
var tmp27236 = inst_27200;
var inst_27200__$1 = tmp27236;
var state_27228__$1 = (function (){var statearr_27239 = state_27228;
(statearr_27239[(11)] = inst_27217);

(statearr_27239[(10)] = inst_27200__$1);

return statearr_27239;
})();
var statearr_27240_27263 = state_27228__$1;
(statearr_27240_27263[(2)] = null);

(statearr_27240_27263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (9))){
var inst_27208 = (state_27228[(8)]);
var state_27228__$1 = state_27228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27228__$1,(11),out,inst_27208);
} else {
if((state_val_27229 === (5))){
var inst_27222 = cljs.core.async.close_BANG_.call(null,out);
var state_27228__$1 = state_27228;
var statearr_27241_27264 = state_27228__$1;
(statearr_27241_27264[(2)] = inst_27222);

(statearr_27241_27264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (10))){
var inst_27220 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
var statearr_27242_27265 = state_27228__$1;
(statearr_27242_27265[(2)] = inst_27220);

(statearr_27242_27265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (8))){
var inst_27209 = (state_27228[(9)]);
var inst_27207 = (state_27228[(7)]);
var inst_27208 = (state_27228[(8)]);
var inst_27200 = (state_27228[(10)]);
var inst_27212 = (function (){var cs = inst_27200;
var vec__27205 = inst_27207;
var v = inst_27208;
var c = inst_27209;
return ((function (cs,vec__27205,v,c,inst_27209,inst_27207,inst_27208,inst_27200,state_val_27229,c__25158__auto___27256,out){
return (function (p1__27195_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27195_SHARP_);
});
;})(cs,vec__27205,v,c,inst_27209,inst_27207,inst_27208,inst_27200,state_val_27229,c__25158__auto___27256,out))
})();
var inst_27213 = cljs.core.filterv.call(null,inst_27212,inst_27200);
var inst_27200__$1 = inst_27213;
var state_27228__$1 = (function (){var statearr_27243 = state_27228;
(statearr_27243[(10)] = inst_27200__$1);

return statearr_27243;
})();
var statearr_27244_27266 = state_27228__$1;
(statearr_27244_27266[(2)] = null);

(statearr_27244_27266[(1)] = (2));


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
});})(c__25158__auto___27256,out))
;
return ((function (switch__25046__auto__,c__25158__auto___27256,out){
return (function() {
var cljs$core$async$state_machine__25047__auto__ = null;
var cljs$core$async$state_machine__25047__auto____0 = (function (){
var statearr_27248 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27248[(0)] = cljs$core$async$state_machine__25047__auto__);

(statearr_27248[(1)] = (1));

return statearr_27248;
});
var cljs$core$async$state_machine__25047__auto____1 = (function (state_27228){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_27228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e27249){if((e27249 instanceof Object)){
var ex__25050__auto__ = e27249;
var statearr_27250_27267 = state_27228;
(statearr_27250_27267[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27268 = state_27228;
state_27228 = G__27268;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
cljs$core$async$state_machine__25047__auto__ = function(state_27228){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25047__auto____1.call(this,state_27228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25047__auto____0;
cljs$core$async$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25047__auto____1;
return cljs$core$async$state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto___27256,out))
})();
var state__25160__auto__ = (function (){var statearr_27251 = f__25159__auto__.call(null);
(statearr_27251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto___27256);

return statearr_27251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto___27256,out))
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
var args27269 = [];
var len__22809__auto___27318 = arguments.length;
var i__22810__auto___27319 = (0);
while(true){
if((i__22810__auto___27319 < len__22809__auto___27318)){
args27269.push((arguments[i__22810__auto___27319]));

var G__27320 = (i__22810__auto___27319 + (1));
i__22810__auto___27319 = G__27320;
continue;
} else {
}
break;
}

var G__27271 = args27269.length;
switch (G__27271) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27269.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25158__auto___27322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto___27322,out){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto___27322,out){
return (function (state_27295){
var state_val_27296 = (state_27295[(1)]);
if((state_val_27296 === (7))){
var inst_27277 = (state_27295[(7)]);
var inst_27277__$1 = (state_27295[(2)]);
var inst_27278 = (inst_27277__$1 == null);
var inst_27279 = cljs.core.not.call(null,inst_27278);
var state_27295__$1 = (function (){var statearr_27297 = state_27295;
(statearr_27297[(7)] = inst_27277__$1);

return statearr_27297;
})();
if(inst_27279){
var statearr_27298_27323 = state_27295__$1;
(statearr_27298_27323[(1)] = (8));

} else {
var statearr_27299_27324 = state_27295__$1;
(statearr_27299_27324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (1))){
var inst_27272 = (0);
var state_27295__$1 = (function (){var statearr_27300 = state_27295;
(statearr_27300[(8)] = inst_27272);

return statearr_27300;
})();
var statearr_27301_27325 = state_27295__$1;
(statearr_27301_27325[(2)] = null);

(statearr_27301_27325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (4))){
var state_27295__$1 = state_27295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27295__$1,(7),ch);
} else {
if((state_val_27296 === (6))){
var inst_27290 = (state_27295[(2)]);
var state_27295__$1 = state_27295;
var statearr_27302_27326 = state_27295__$1;
(statearr_27302_27326[(2)] = inst_27290);

(statearr_27302_27326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (3))){
var inst_27292 = (state_27295[(2)]);
var inst_27293 = cljs.core.async.close_BANG_.call(null,out);
var state_27295__$1 = (function (){var statearr_27303 = state_27295;
(statearr_27303[(9)] = inst_27292);

return statearr_27303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27295__$1,inst_27293);
} else {
if((state_val_27296 === (2))){
var inst_27272 = (state_27295[(8)]);
var inst_27274 = (inst_27272 < n);
var state_27295__$1 = state_27295;
if(cljs.core.truth_(inst_27274)){
var statearr_27304_27327 = state_27295__$1;
(statearr_27304_27327[(1)] = (4));

} else {
var statearr_27305_27328 = state_27295__$1;
(statearr_27305_27328[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (11))){
var inst_27272 = (state_27295[(8)]);
var inst_27282 = (state_27295[(2)]);
var inst_27283 = (inst_27272 + (1));
var inst_27272__$1 = inst_27283;
var state_27295__$1 = (function (){var statearr_27306 = state_27295;
(statearr_27306[(8)] = inst_27272__$1);

(statearr_27306[(10)] = inst_27282);

return statearr_27306;
})();
var statearr_27307_27329 = state_27295__$1;
(statearr_27307_27329[(2)] = null);

(statearr_27307_27329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (9))){
var state_27295__$1 = state_27295;
var statearr_27308_27330 = state_27295__$1;
(statearr_27308_27330[(2)] = null);

(statearr_27308_27330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (5))){
var state_27295__$1 = state_27295;
var statearr_27309_27331 = state_27295__$1;
(statearr_27309_27331[(2)] = null);

(statearr_27309_27331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (10))){
var inst_27287 = (state_27295[(2)]);
var state_27295__$1 = state_27295;
var statearr_27310_27332 = state_27295__$1;
(statearr_27310_27332[(2)] = inst_27287);

(statearr_27310_27332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27296 === (8))){
var inst_27277 = (state_27295[(7)]);
var state_27295__$1 = state_27295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27295__$1,(11),out,inst_27277);
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
});})(c__25158__auto___27322,out))
;
return ((function (switch__25046__auto__,c__25158__auto___27322,out){
return (function() {
var cljs$core$async$state_machine__25047__auto__ = null;
var cljs$core$async$state_machine__25047__auto____0 = (function (){
var statearr_27314 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27314[(0)] = cljs$core$async$state_machine__25047__auto__);

(statearr_27314[(1)] = (1));

return statearr_27314;
});
var cljs$core$async$state_machine__25047__auto____1 = (function (state_27295){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_27295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e27315){if((e27315 instanceof Object)){
var ex__25050__auto__ = e27315;
var statearr_27316_27333 = state_27295;
(statearr_27316_27333[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27334 = state_27295;
state_27295 = G__27334;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
cljs$core$async$state_machine__25047__auto__ = function(state_27295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25047__auto____1.call(this,state_27295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25047__auto____0;
cljs$core$async$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25047__auto____1;
return cljs$core$async$state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto___27322,out))
})();
var state__25160__auto__ = (function (){var statearr_27317 = f__25159__auto__.call(null);
(statearr_27317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto___27322);

return statearr_27317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto___27322,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27342 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27342 = (function (map_LT_,f,ch,meta27343){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27343 = meta27343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27344,meta27343__$1){
var self__ = this;
var _27344__$1 = this;
return (new cljs.core.async.t_cljs$core$async27342(self__.map_LT_,self__.f,self__.ch,meta27343__$1));
});

cljs.core.async.t_cljs$core$async27342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27344){
var self__ = this;
var _27344__$1 = this;
return self__.meta27343;
});

cljs.core.async.t_cljs$core$async27342.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27342.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27342.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27342.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27342.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27345 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27345 = (function (map_LT_,f,ch,meta27343,_,fn1,meta27346){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27343 = meta27343;
this._ = _;
this.fn1 = fn1;
this.meta27346 = meta27346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27347,meta27346__$1){
var self__ = this;
var _27347__$1 = this;
return (new cljs.core.async.t_cljs$core$async27345(self__.map_LT_,self__.f,self__.ch,self__.meta27343,self__._,self__.fn1,meta27346__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27345.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27347){
var self__ = this;
var _27347__$1 = this;
return self__.meta27346;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27345.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27345.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27345.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27345.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27335_SHARP_){
return f1.call(null,(((p1__27335_SHARP_ == null))?null:self__.f.call(null,p1__27335_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27345.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27343","meta27343",967472031,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27342","cljs.core.async/t_cljs$core$async27342",1891324318,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27346","meta27346",-1400610844,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27345.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27345.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27345";

cljs.core.async.t_cljs$core$async27345.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22344__auto__,writer__22345__auto__,opt__22346__auto__){
return cljs.core._write.call(null,writer__22345__auto__,"cljs.core.async/t_cljs$core$async27345");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27345 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27345(map_LT___$1,f__$1,ch__$1,meta27343__$1,___$2,fn1__$1,meta27346){
return (new cljs.core.async.t_cljs$core$async27345(map_LT___$1,f__$1,ch__$1,meta27343__$1,___$2,fn1__$1,meta27346));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27345(self__.map_LT_,self__.f,self__.ch,self__.meta27343,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21726__auto__ = ret;
if(cljs.core.truth_(and__21726__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21726__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27342.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27342.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27343","meta27343",967472031,null)], null);
});

cljs.core.async.t_cljs$core$async27342.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27342";

cljs.core.async.t_cljs$core$async27342.cljs$lang$ctorPrWriter = (function (this__22344__auto__,writer__22345__auto__,opt__22346__auto__){
return cljs.core._write.call(null,writer__22345__auto__,"cljs.core.async/t_cljs$core$async27342");
});

cljs.core.async.__GT_t_cljs$core$async27342 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27342(map_LT___$1,f__$1,ch__$1,meta27343){
return (new cljs.core.async.t_cljs$core$async27342(map_LT___$1,f__$1,ch__$1,meta27343));
});

}

return (new cljs.core.async.t_cljs$core$async27342(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27351 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27351 = (function (map_GT_,f,ch,meta27352){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27352 = meta27352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27353,meta27352__$1){
var self__ = this;
var _27353__$1 = this;
return (new cljs.core.async.t_cljs$core$async27351(self__.map_GT_,self__.f,self__.ch,meta27352__$1));
});

cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27353){
var self__ = this;
var _27353__$1 = this;
return self__.meta27352;
});

cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27351.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27352","meta27352",1493572470,null)], null);
});

cljs.core.async.t_cljs$core$async27351.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27351";

cljs.core.async.t_cljs$core$async27351.cljs$lang$ctorPrWriter = (function (this__22344__auto__,writer__22345__auto__,opt__22346__auto__){
return cljs.core._write.call(null,writer__22345__auto__,"cljs.core.async/t_cljs$core$async27351");
});

cljs.core.async.__GT_t_cljs$core$async27351 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27351(map_GT___$1,f__$1,ch__$1,meta27352){
return (new cljs.core.async.t_cljs$core$async27351(map_GT___$1,f__$1,ch__$1,meta27352));
});

}

return (new cljs.core.async.t_cljs$core$async27351(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27357 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27357 = (function (filter_GT_,p,ch,meta27358){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27358 = meta27358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27359,meta27358__$1){
var self__ = this;
var _27359__$1 = this;
return (new cljs.core.async.t_cljs$core$async27357(self__.filter_GT_,self__.p,self__.ch,meta27358__$1));
});

cljs.core.async.t_cljs$core$async27357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27359){
var self__ = this;
var _27359__$1 = this;
return self__.meta27358;
});

cljs.core.async.t_cljs$core$async27357.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27357.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27357.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27357.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27357.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27357.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27357.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27358","meta27358",-1911747372,null)], null);
});

cljs.core.async.t_cljs$core$async27357.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27357";

cljs.core.async.t_cljs$core$async27357.cljs$lang$ctorPrWriter = (function (this__22344__auto__,writer__22345__auto__,opt__22346__auto__){
return cljs.core._write.call(null,writer__22345__auto__,"cljs.core.async/t_cljs$core$async27357");
});

cljs.core.async.__GT_t_cljs$core$async27357 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27357(filter_GT___$1,p__$1,ch__$1,meta27358){
return (new cljs.core.async.t_cljs$core$async27357(filter_GT___$1,p__$1,ch__$1,meta27358));
});

}

return (new cljs.core.async.t_cljs$core$async27357(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args27360 = [];
var len__22809__auto___27404 = arguments.length;
var i__22810__auto___27405 = (0);
while(true){
if((i__22810__auto___27405 < len__22809__auto___27404)){
args27360.push((arguments[i__22810__auto___27405]));

var G__27406 = (i__22810__auto___27405 + (1));
i__22810__auto___27405 = G__27406;
continue;
} else {
}
break;
}

var G__27362 = args27360.length;
switch (G__27362) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27360.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25158__auto___27408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto___27408,out){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto___27408,out){
return (function (state_27383){
var state_val_27384 = (state_27383[(1)]);
if((state_val_27384 === (7))){
var inst_27379 = (state_27383[(2)]);
var state_27383__$1 = state_27383;
var statearr_27385_27409 = state_27383__$1;
(statearr_27385_27409[(2)] = inst_27379);

(statearr_27385_27409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (1))){
var state_27383__$1 = state_27383;
var statearr_27386_27410 = state_27383__$1;
(statearr_27386_27410[(2)] = null);

(statearr_27386_27410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (4))){
var inst_27365 = (state_27383[(7)]);
var inst_27365__$1 = (state_27383[(2)]);
var inst_27366 = (inst_27365__$1 == null);
var state_27383__$1 = (function (){var statearr_27387 = state_27383;
(statearr_27387[(7)] = inst_27365__$1);

return statearr_27387;
})();
if(cljs.core.truth_(inst_27366)){
var statearr_27388_27411 = state_27383__$1;
(statearr_27388_27411[(1)] = (5));

} else {
var statearr_27389_27412 = state_27383__$1;
(statearr_27389_27412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (6))){
var inst_27365 = (state_27383[(7)]);
var inst_27370 = p.call(null,inst_27365);
var state_27383__$1 = state_27383;
if(cljs.core.truth_(inst_27370)){
var statearr_27390_27413 = state_27383__$1;
(statearr_27390_27413[(1)] = (8));

} else {
var statearr_27391_27414 = state_27383__$1;
(statearr_27391_27414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (3))){
var inst_27381 = (state_27383[(2)]);
var state_27383__$1 = state_27383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27383__$1,inst_27381);
} else {
if((state_val_27384 === (2))){
var state_27383__$1 = state_27383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27383__$1,(4),ch);
} else {
if((state_val_27384 === (11))){
var inst_27373 = (state_27383[(2)]);
var state_27383__$1 = state_27383;
var statearr_27392_27415 = state_27383__$1;
(statearr_27392_27415[(2)] = inst_27373);

(statearr_27392_27415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (9))){
var state_27383__$1 = state_27383;
var statearr_27393_27416 = state_27383__$1;
(statearr_27393_27416[(2)] = null);

(statearr_27393_27416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (5))){
var inst_27368 = cljs.core.async.close_BANG_.call(null,out);
var state_27383__$1 = state_27383;
var statearr_27394_27417 = state_27383__$1;
(statearr_27394_27417[(2)] = inst_27368);

(statearr_27394_27417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (10))){
var inst_27376 = (state_27383[(2)]);
var state_27383__$1 = (function (){var statearr_27395 = state_27383;
(statearr_27395[(8)] = inst_27376);

return statearr_27395;
})();
var statearr_27396_27418 = state_27383__$1;
(statearr_27396_27418[(2)] = null);

(statearr_27396_27418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27384 === (8))){
var inst_27365 = (state_27383[(7)]);
var state_27383__$1 = state_27383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27383__$1,(11),out,inst_27365);
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
});})(c__25158__auto___27408,out))
;
return ((function (switch__25046__auto__,c__25158__auto___27408,out){
return (function() {
var cljs$core$async$state_machine__25047__auto__ = null;
var cljs$core$async$state_machine__25047__auto____0 = (function (){
var statearr_27400 = [null,null,null,null,null,null,null,null,null];
(statearr_27400[(0)] = cljs$core$async$state_machine__25047__auto__);

(statearr_27400[(1)] = (1));

return statearr_27400;
});
var cljs$core$async$state_machine__25047__auto____1 = (function (state_27383){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_27383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e27401){if((e27401 instanceof Object)){
var ex__25050__auto__ = e27401;
var statearr_27402_27419 = state_27383;
(statearr_27402_27419[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27420 = state_27383;
state_27383 = G__27420;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
cljs$core$async$state_machine__25047__auto__ = function(state_27383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25047__auto____1.call(this,state_27383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25047__auto____0;
cljs$core$async$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25047__auto____1;
return cljs$core$async$state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto___27408,out))
})();
var state__25160__auto__ = (function (){var statearr_27403 = f__25159__auto__.call(null);
(statearr_27403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto___27408);

return statearr_27403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto___27408,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27421 = [];
var len__22809__auto___27424 = arguments.length;
var i__22810__auto___27425 = (0);
while(true){
if((i__22810__auto___27425 < len__22809__auto___27424)){
args27421.push((arguments[i__22810__auto___27425]));

var G__27426 = (i__22810__auto___27425 + (1));
i__22810__auto___27425 = G__27426;
continue;
} else {
}
break;
}

var G__27423 = args27421.length;
switch (G__27423) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27421.length)].join('')));

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
var c__25158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto__){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto__){
return (function (state_27593){
var state_val_27594 = (state_27593[(1)]);
if((state_val_27594 === (7))){
var inst_27589 = (state_27593[(2)]);
var state_27593__$1 = state_27593;
var statearr_27595_27636 = state_27593__$1;
(statearr_27595_27636[(2)] = inst_27589);

(statearr_27595_27636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (20))){
var inst_27559 = (state_27593[(7)]);
var inst_27570 = (state_27593[(2)]);
var inst_27571 = cljs.core.next.call(null,inst_27559);
var inst_27545 = inst_27571;
var inst_27546 = null;
var inst_27547 = (0);
var inst_27548 = (0);
var state_27593__$1 = (function (){var statearr_27596 = state_27593;
(statearr_27596[(8)] = inst_27547);

(statearr_27596[(9)] = inst_27546);

(statearr_27596[(10)] = inst_27570);

(statearr_27596[(11)] = inst_27548);

(statearr_27596[(12)] = inst_27545);

return statearr_27596;
})();
var statearr_27597_27637 = state_27593__$1;
(statearr_27597_27637[(2)] = null);

(statearr_27597_27637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (1))){
var state_27593__$1 = state_27593;
var statearr_27598_27638 = state_27593__$1;
(statearr_27598_27638[(2)] = null);

(statearr_27598_27638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (4))){
var inst_27534 = (state_27593[(13)]);
var inst_27534__$1 = (state_27593[(2)]);
var inst_27535 = (inst_27534__$1 == null);
var state_27593__$1 = (function (){var statearr_27599 = state_27593;
(statearr_27599[(13)] = inst_27534__$1);

return statearr_27599;
})();
if(cljs.core.truth_(inst_27535)){
var statearr_27600_27639 = state_27593__$1;
(statearr_27600_27639[(1)] = (5));

} else {
var statearr_27601_27640 = state_27593__$1;
(statearr_27601_27640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (15))){
var state_27593__$1 = state_27593;
var statearr_27605_27641 = state_27593__$1;
(statearr_27605_27641[(2)] = null);

(statearr_27605_27641[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (21))){
var state_27593__$1 = state_27593;
var statearr_27606_27642 = state_27593__$1;
(statearr_27606_27642[(2)] = null);

(statearr_27606_27642[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (13))){
var inst_27547 = (state_27593[(8)]);
var inst_27546 = (state_27593[(9)]);
var inst_27548 = (state_27593[(11)]);
var inst_27545 = (state_27593[(12)]);
var inst_27555 = (state_27593[(2)]);
var inst_27556 = (inst_27548 + (1));
var tmp27602 = inst_27547;
var tmp27603 = inst_27546;
var tmp27604 = inst_27545;
var inst_27545__$1 = tmp27604;
var inst_27546__$1 = tmp27603;
var inst_27547__$1 = tmp27602;
var inst_27548__$1 = inst_27556;
var state_27593__$1 = (function (){var statearr_27607 = state_27593;
(statearr_27607[(8)] = inst_27547__$1);

(statearr_27607[(14)] = inst_27555);

(statearr_27607[(9)] = inst_27546__$1);

(statearr_27607[(11)] = inst_27548__$1);

(statearr_27607[(12)] = inst_27545__$1);

return statearr_27607;
})();
var statearr_27608_27643 = state_27593__$1;
(statearr_27608_27643[(2)] = null);

(statearr_27608_27643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (22))){
var state_27593__$1 = state_27593;
var statearr_27609_27644 = state_27593__$1;
(statearr_27609_27644[(2)] = null);

(statearr_27609_27644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (6))){
var inst_27534 = (state_27593[(13)]);
var inst_27543 = f.call(null,inst_27534);
var inst_27544 = cljs.core.seq.call(null,inst_27543);
var inst_27545 = inst_27544;
var inst_27546 = null;
var inst_27547 = (0);
var inst_27548 = (0);
var state_27593__$1 = (function (){var statearr_27610 = state_27593;
(statearr_27610[(8)] = inst_27547);

(statearr_27610[(9)] = inst_27546);

(statearr_27610[(11)] = inst_27548);

(statearr_27610[(12)] = inst_27545);

return statearr_27610;
})();
var statearr_27611_27645 = state_27593__$1;
(statearr_27611_27645[(2)] = null);

(statearr_27611_27645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (17))){
var inst_27559 = (state_27593[(7)]);
var inst_27563 = cljs.core.chunk_first.call(null,inst_27559);
var inst_27564 = cljs.core.chunk_rest.call(null,inst_27559);
var inst_27565 = cljs.core.count.call(null,inst_27563);
var inst_27545 = inst_27564;
var inst_27546 = inst_27563;
var inst_27547 = inst_27565;
var inst_27548 = (0);
var state_27593__$1 = (function (){var statearr_27612 = state_27593;
(statearr_27612[(8)] = inst_27547);

(statearr_27612[(9)] = inst_27546);

(statearr_27612[(11)] = inst_27548);

(statearr_27612[(12)] = inst_27545);

return statearr_27612;
})();
var statearr_27613_27646 = state_27593__$1;
(statearr_27613_27646[(2)] = null);

(statearr_27613_27646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (3))){
var inst_27591 = (state_27593[(2)]);
var state_27593__$1 = state_27593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27593__$1,inst_27591);
} else {
if((state_val_27594 === (12))){
var inst_27579 = (state_27593[(2)]);
var state_27593__$1 = state_27593;
var statearr_27614_27647 = state_27593__$1;
(statearr_27614_27647[(2)] = inst_27579);

(statearr_27614_27647[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (2))){
var state_27593__$1 = state_27593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27593__$1,(4),in$);
} else {
if((state_val_27594 === (23))){
var inst_27587 = (state_27593[(2)]);
var state_27593__$1 = state_27593;
var statearr_27615_27648 = state_27593__$1;
(statearr_27615_27648[(2)] = inst_27587);

(statearr_27615_27648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (19))){
var inst_27574 = (state_27593[(2)]);
var state_27593__$1 = state_27593;
var statearr_27616_27649 = state_27593__$1;
(statearr_27616_27649[(2)] = inst_27574);

(statearr_27616_27649[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (11))){
var inst_27559 = (state_27593[(7)]);
var inst_27545 = (state_27593[(12)]);
var inst_27559__$1 = cljs.core.seq.call(null,inst_27545);
var state_27593__$1 = (function (){var statearr_27617 = state_27593;
(statearr_27617[(7)] = inst_27559__$1);

return statearr_27617;
})();
if(inst_27559__$1){
var statearr_27618_27650 = state_27593__$1;
(statearr_27618_27650[(1)] = (14));

} else {
var statearr_27619_27651 = state_27593__$1;
(statearr_27619_27651[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (9))){
var inst_27581 = (state_27593[(2)]);
var inst_27582 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27593__$1 = (function (){var statearr_27620 = state_27593;
(statearr_27620[(15)] = inst_27581);

return statearr_27620;
})();
if(cljs.core.truth_(inst_27582)){
var statearr_27621_27652 = state_27593__$1;
(statearr_27621_27652[(1)] = (21));

} else {
var statearr_27622_27653 = state_27593__$1;
(statearr_27622_27653[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (5))){
var inst_27537 = cljs.core.async.close_BANG_.call(null,out);
var state_27593__$1 = state_27593;
var statearr_27623_27654 = state_27593__$1;
(statearr_27623_27654[(2)] = inst_27537);

(statearr_27623_27654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (14))){
var inst_27559 = (state_27593[(7)]);
var inst_27561 = cljs.core.chunked_seq_QMARK_.call(null,inst_27559);
var state_27593__$1 = state_27593;
if(inst_27561){
var statearr_27624_27655 = state_27593__$1;
(statearr_27624_27655[(1)] = (17));

} else {
var statearr_27625_27656 = state_27593__$1;
(statearr_27625_27656[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (16))){
var inst_27577 = (state_27593[(2)]);
var state_27593__$1 = state_27593;
var statearr_27626_27657 = state_27593__$1;
(statearr_27626_27657[(2)] = inst_27577);

(statearr_27626_27657[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (10))){
var inst_27546 = (state_27593[(9)]);
var inst_27548 = (state_27593[(11)]);
var inst_27553 = cljs.core._nth.call(null,inst_27546,inst_27548);
var state_27593__$1 = state_27593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27593__$1,(13),out,inst_27553);
} else {
if((state_val_27594 === (18))){
var inst_27559 = (state_27593[(7)]);
var inst_27568 = cljs.core.first.call(null,inst_27559);
var state_27593__$1 = state_27593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27593__$1,(20),out,inst_27568);
} else {
if((state_val_27594 === (8))){
var inst_27547 = (state_27593[(8)]);
var inst_27548 = (state_27593[(11)]);
var inst_27550 = (inst_27548 < inst_27547);
var inst_27551 = inst_27550;
var state_27593__$1 = state_27593;
if(cljs.core.truth_(inst_27551)){
var statearr_27627_27658 = state_27593__$1;
(statearr_27627_27658[(1)] = (10));

} else {
var statearr_27628_27659 = state_27593__$1;
(statearr_27628_27659[(1)] = (11));

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
});})(c__25158__auto__))
;
return ((function (switch__25046__auto__,c__25158__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25047__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25047__auto____0 = (function (){
var statearr_27632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27632[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25047__auto__);

(statearr_27632[(1)] = (1));

return statearr_27632;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25047__auto____1 = (function (state_27593){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_27593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e27633){if((e27633 instanceof Object)){
var ex__25050__auto__ = e27633;
var statearr_27634_27660 = state_27593;
(statearr_27634_27660[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27661 = state_27593;
state_27593 = G__27661;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25047__auto__ = function(state_27593){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25047__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25047__auto____1.call(this,state_27593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25047__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25047__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto__))
})();
var state__25160__auto__ = (function (){var statearr_27635 = f__25159__auto__.call(null);
(statearr_27635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto__);

return statearr_27635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto__))
);

return c__25158__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27662 = [];
var len__22809__auto___27665 = arguments.length;
var i__22810__auto___27666 = (0);
while(true){
if((i__22810__auto___27666 < len__22809__auto___27665)){
args27662.push((arguments[i__22810__auto___27666]));

var G__27667 = (i__22810__auto___27666 + (1));
i__22810__auto___27666 = G__27667;
continue;
} else {
}
break;
}

var G__27664 = args27662.length;
switch (G__27664) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27662.length)].join('')));

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
var args27669 = [];
var len__22809__auto___27672 = arguments.length;
var i__22810__auto___27673 = (0);
while(true){
if((i__22810__auto___27673 < len__22809__auto___27672)){
args27669.push((arguments[i__22810__auto___27673]));

var G__27674 = (i__22810__auto___27673 + (1));
i__22810__auto___27673 = G__27674;
continue;
} else {
}
break;
}

var G__27671 = args27669.length;
switch (G__27671) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27669.length)].join('')));

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
var args27676 = [];
var len__22809__auto___27727 = arguments.length;
var i__22810__auto___27728 = (0);
while(true){
if((i__22810__auto___27728 < len__22809__auto___27727)){
args27676.push((arguments[i__22810__auto___27728]));

var G__27729 = (i__22810__auto___27728 + (1));
i__22810__auto___27728 = G__27729;
continue;
} else {
}
break;
}

var G__27678 = args27676.length;
switch (G__27678) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27676.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25158__auto___27731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto___27731,out){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto___27731,out){
return (function (state_27702){
var state_val_27703 = (state_27702[(1)]);
if((state_val_27703 === (7))){
var inst_27697 = (state_27702[(2)]);
var state_27702__$1 = state_27702;
var statearr_27704_27732 = state_27702__$1;
(statearr_27704_27732[(2)] = inst_27697);

(statearr_27704_27732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (1))){
var inst_27679 = null;
var state_27702__$1 = (function (){var statearr_27705 = state_27702;
(statearr_27705[(7)] = inst_27679);

return statearr_27705;
})();
var statearr_27706_27733 = state_27702__$1;
(statearr_27706_27733[(2)] = null);

(statearr_27706_27733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (4))){
var inst_27682 = (state_27702[(8)]);
var inst_27682__$1 = (state_27702[(2)]);
var inst_27683 = (inst_27682__$1 == null);
var inst_27684 = cljs.core.not.call(null,inst_27683);
var state_27702__$1 = (function (){var statearr_27707 = state_27702;
(statearr_27707[(8)] = inst_27682__$1);

return statearr_27707;
})();
if(inst_27684){
var statearr_27708_27734 = state_27702__$1;
(statearr_27708_27734[(1)] = (5));

} else {
var statearr_27709_27735 = state_27702__$1;
(statearr_27709_27735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (6))){
var state_27702__$1 = state_27702;
var statearr_27710_27736 = state_27702__$1;
(statearr_27710_27736[(2)] = null);

(statearr_27710_27736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (3))){
var inst_27699 = (state_27702[(2)]);
var inst_27700 = cljs.core.async.close_BANG_.call(null,out);
var state_27702__$1 = (function (){var statearr_27711 = state_27702;
(statearr_27711[(9)] = inst_27699);

return statearr_27711;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27702__$1,inst_27700);
} else {
if((state_val_27703 === (2))){
var state_27702__$1 = state_27702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27702__$1,(4),ch);
} else {
if((state_val_27703 === (11))){
var inst_27682 = (state_27702[(8)]);
var inst_27691 = (state_27702[(2)]);
var inst_27679 = inst_27682;
var state_27702__$1 = (function (){var statearr_27712 = state_27702;
(statearr_27712[(10)] = inst_27691);

(statearr_27712[(7)] = inst_27679);

return statearr_27712;
})();
var statearr_27713_27737 = state_27702__$1;
(statearr_27713_27737[(2)] = null);

(statearr_27713_27737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (9))){
var inst_27682 = (state_27702[(8)]);
var state_27702__$1 = state_27702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27702__$1,(11),out,inst_27682);
} else {
if((state_val_27703 === (5))){
var inst_27682 = (state_27702[(8)]);
var inst_27679 = (state_27702[(7)]);
var inst_27686 = cljs.core._EQ_.call(null,inst_27682,inst_27679);
var state_27702__$1 = state_27702;
if(inst_27686){
var statearr_27715_27738 = state_27702__$1;
(statearr_27715_27738[(1)] = (8));

} else {
var statearr_27716_27739 = state_27702__$1;
(statearr_27716_27739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (10))){
var inst_27694 = (state_27702[(2)]);
var state_27702__$1 = state_27702;
var statearr_27717_27740 = state_27702__$1;
(statearr_27717_27740[(2)] = inst_27694);

(statearr_27717_27740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27703 === (8))){
var inst_27679 = (state_27702[(7)]);
var tmp27714 = inst_27679;
var inst_27679__$1 = tmp27714;
var state_27702__$1 = (function (){var statearr_27718 = state_27702;
(statearr_27718[(7)] = inst_27679__$1);

return statearr_27718;
})();
var statearr_27719_27741 = state_27702__$1;
(statearr_27719_27741[(2)] = null);

(statearr_27719_27741[(1)] = (2));


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
});})(c__25158__auto___27731,out))
;
return ((function (switch__25046__auto__,c__25158__auto___27731,out){
return (function() {
var cljs$core$async$state_machine__25047__auto__ = null;
var cljs$core$async$state_machine__25047__auto____0 = (function (){
var statearr_27723 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27723[(0)] = cljs$core$async$state_machine__25047__auto__);

(statearr_27723[(1)] = (1));

return statearr_27723;
});
var cljs$core$async$state_machine__25047__auto____1 = (function (state_27702){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_27702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e27724){if((e27724 instanceof Object)){
var ex__25050__auto__ = e27724;
var statearr_27725_27742 = state_27702;
(statearr_27725_27742[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27743 = state_27702;
state_27702 = G__27743;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
cljs$core$async$state_machine__25047__auto__ = function(state_27702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25047__auto____1.call(this,state_27702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25047__auto____0;
cljs$core$async$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25047__auto____1;
return cljs$core$async$state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto___27731,out))
})();
var state__25160__auto__ = (function (){var statearr_27726 = f__25159__auto__.call(null);
(statearr_27726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto___27731);

return statearr_27726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto___27731,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27744 = [];
var len__22809__auto___27814 = arguments.length;
var i__22810__auto___27815 = (0);
while(true){
if((i__22810__auto___27815 < len__22809__auto___27814)){
args27744.push((arguments[i__22810__auto___27815]));

var G__27816 = (i__22810__auto___27815 + (1));
i__22810__auto___27815 = G__27816;
continue;
} else {
}
break;
}

var G__27746 = args27744.length;
switch (G__27746) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27744.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25158__auto___27818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto___27818,out){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto___27818,out){
return (function (state_27784){
var state_val_27785 = (state_27784[(1)]);
if((state_val_27785 === (7))){
var inst_27780 = (state_27784[(2)]);
var state_27784__$1 = state_27784;
var statearr_27786_27819 = state_27784__$1;
(statearr_27786_27819[(2)] = inst_27780);

(statearr_27786_27819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (1))){
var inst_27747 = (new Array(n));
var inst_27748 = inst_27747;
var inst_27749 = (0);
var state_27784__$1 = (function (){var statearr_27787 = state_27784;
(statearr_27787[(7)] = inst_27748);

(statearr_27787[(8)] = inst_27749);

return statearr_27787;
})();
var statearr_27788_27820 = state_27784__$1;
(statearr_27788_27820[(2)] = null);

(statearr_27788_27820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (4))){
var inst_27752 = (state_27784[(9)]);
var inst_27752__$1 = (state_27784[(2)]);
var inst_27753 = (inst_27752__$1 == null);
var inst_27754 = cljs.core.not.call(null,inst_27753);
var state_27784__$1 = (function (){var statearr_27789 = state_27784;
(statearr_27789[(9)] = inst_27752__$1);

return statearr_27789;
})();
if(inst_27754){
var statearr_27790_27821 = state_27784__$1;
(statearr_27790_27821[(1)] = (5));

} else {
var statearr_27791_27822 = state_27784__$1;
(statearr_27791_27822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (15))){
var inst_27774 = (state_27784[(2)]);
var state_27784__$1 = state_27784;
var statearr_27792_27823 = state_27784__$1;
(statearr_27792_27823[(2)] = inst_27774);

(statearr_27792_27823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (13))){
var state_27784__$1 = state_27784;
var statearr_27793_27824 = state_27784__$1;
(statearr_27793_27824[(2)] = null);

(statearr_27793_27824[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (6))){
var inst_27749 = (state_27784[(8)]);
var inst_27770 = (inst_27749 > (0));
var state_27784__$1 = state_27784;
if(cljs.core.truth_(inst_27770)){
var statearr_27794_27825 = state_27784__$1;
(statearr_27794_27825[(1)] = (12));

} else {
var statearr_27795_27826 = state_27784__$1;
(statearr_27795_27826[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (3))){
var inst_27782 = (state_27784[(2)]);
var state_27784__$1 = state_27784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27784__$1,inst_27782);
} else {
if((state_val_27785 === (12))){
var inst_27748 = (state_27784[(7)]);
var inst_27772 = cljs.core.vec.call(null,inst_27748);
var state_27784__$1 = state_27784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27784__$1,(15),out,inst_27772);
} else {
if((state_val_27785 === (2))){
var state_27784__$1 = state_27784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27784__$1,(4),ch);
} else {
if((state_val_27785 === (11))){
var inst_27764 = (state_27784[(2)]);
var inst_27765 = (new Array(n));
var inst_27748 = inst_27765;
var inst_27749 = (0);
var state_27784__$1 = (function (){var statearr_27796 = state_27784;
(statearr_27796[(7)] = inst_27748);

(statearr_27796[(10)] = inst_27764);

(statearr_27796[(8)] = inst_27749);

return statearr_27796;
})();
var statearr_27797_27827 = state_27784__$1;
(statearr_27797_27827[(2)] = null);

(statearr_27797_27827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (9))){
var inst_27748 = (state_27784[(7)]);
var inst_27762 = cljs.core.vec.call(null,inst_27748);
var state_27784__$1 = state_27784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27784__$1,(11),out,inst_27762);
} else {
if((state_val_27785 === (5))){
var inst_27757 = (state_27784[(11)]);
var inst_27748 = (state_27784[(7)]);
var inst_27749 = (state_27784[(8)]);
var inst_27752 = (state_27784[(9)]);
var inst_27756 = (inst_27748[inst_27749] = inst_27752);
var inst_27757__$1 = (inst_27749 + (1));
var inst_27758 = (inst_27757__$1 < n);
var state_27784__$1 = (function (){var statearr_27798 = state_27784;
(statearr_27798[(11)] = inst_27757__$1);

(statearr_27798[(12)] = inst_27756);

return statearr_27798;
})();
if(cljs.core.truth_(inst_27758)){
var statearr_27799_27828 = state_27784__$1;
(statearr_27799_27828[(1)] = (8));

} else {
var statearr_27800_27829 = state_27784__$1;
(statearr_27800_27829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (14))){
var inst_27777 = (state_27784[(2)]);
var inst_27778 = cljs.core.async.close_BANG_.call(null,out);
var state_27784__$1 = (function (){var statearr_27802 = state_27784;
(statearr_27802[(13)] = inst_27777);

return statearr_27802;
})();
var statearr_27803_27830 = state_27784__$1;
(statearr_27803_27830[(2)] = inst_27778);

(statearr_27803_27830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (10))){
var inst_27768 = (state_27784[(2)]);
var state_27784__$1 = state_27784;
var statearr_27804_27831 = state_27784__$1;
(statearr_27804_27831[(2)] = inst_27768);

(statearr_27804_27831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27785 === (8))){
var inst_27757 = (state_27784[(11)]);
var inst_27748 = (state_27784[(7)]);
var tmp27801 = inst_27748;
var inst_27748__$1 = tmp27801;
var inst_27749 = inst_27757;
var state_27784__$1 = (function (){var statearr_27805 = state_27784;
(statearr_27805[(7)] = inst_27748__$1);

(statearr_27805[(8)] = inst_27749);

return statearr_27805;
})();
var statearr_27806_27832 = state_27784__$1;
(statearr_27806_27832[(2)] = null);

(statearr_27806_27832[(1)] = (2));


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
});})(c__25158__auto___27818,out))
;
return ((function (switch__25046__auto__,c__25158__auto___27818,out){
return (function() {
var cljs$core$async$state_machine__25047__auto__ = null;
var cljs$core$async$state_machine__25047__auto____0 = (function (){
var statearr_27810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27810[(0)] = cljs$core$async$state_machine__25047__auto__);

(statearr_27810[(1)] = (1));

return statearr_27810;
});
var cljs$core$async$state_machine__25047__auto____1 = (function (state_27784){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_27784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e27811){if((e27811 instanceof Object)){
var ex__25050__auto__ = e27811;
var statearr_27812_27833 = state_27784;
(statearr_27812_27833[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27834 = state_27784;
state_27784 = G__27834;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
cljs$core$async$state_machine__25047__auto__ = function(state_27784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25047__auto____1.call(this,state_27784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25047__auto____0;
cljs$core$async$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25047__auto____1;
return cljs$core$async$state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto___27818,out))
})();
var state__25160__auto__ = (function (){var statearr_27813 = f__25159__auto__.call(null);
(statearr_27813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto___27818);

return statearr_27813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto___27818,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27835 = [];
var len__22809__auto___27909 = arguments.length;
var i__22810__auto___27910 = (0);
while(true){
if((i__22810__auto___27910 < len__22809__auto___27909)){
args27835.push((arguments[i__22810__auto___27910]));

var G__27911 = (i__22810__auto___27910 + (1));
i__22810__auto___27910 = G__27911;
continue;
} else {
}
break;
}

var G__27837 = args27835.length;
switch (G__27837) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27835.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25158__auto___27913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto___27913,out){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto___27913,out){
return (function (state_27879){
var state_val_27880 = (state_27879[(1)]);
if((state_val_27880 === (7))){
var inst_27875 = (state_27879[(2)]);
var state_27879__$1 = state_27879;
var statearr_27881_27914 = state_27879__$1;
(statearr_27881_27914[(2)] = inst_27875);

(statearr_27881_27914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (1))){
var inst_27838 = [];
var inst_27839 = inst_27838;
var inst_27840 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27879__$1 = (function (){var statearr_27882 = state_27879;
(statearr_27882[(7)] = inst_27839);

(statearr_27882[(8)] = inst_27840);

return statearr_27882;
})();
var statearr_27883_27915 = state_27879__$1;
(statearr_27883_27915[(2)] = null);

(statearr_27883_27915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (4))){
var inst_27843 = (state_27879[(9)]);
var inst_27843__$1 = (state_27879[(2)]);
var inst_27844 = (inst_27843__$1 == null);
var inst_27845 = cljs.core.not.call(null,inst_27844);
var state_27879__$1 = (function (){var statearr_27884 = state_27879;
(statearr_27884[(9)] = inst_27843__$1);

return statearr_27884;
})();
if(inst_27845){
var statearr_27885_27916 = state_27879__$1;
(statearr_27885_27916[(1)] = (5));

} else {
var statearr_27886_27917 = state_27879__$1;
(statearr_27886_27917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (15))){
var inst_27869 = (state_27879[(2)]);
var state_27879__$1 = state_27879;
var statearr_27887_27918 = state_27879__$1;
(statearr_27887_27918[(2)] = inst_27869);

(statearr_27887_27918[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (13))){
var state_27879__$1 = state_27879;
var statearr_27888_27919 = state_27879__$1;
(statearr_27888_27919[(2)] = null);

(statearr_27888_27919[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (6))){
var inst_27839 = (state_27879[(7)]);
var inst_27864 = inst_27839.length;
var inst_27865 = (inst_27864 > (0));
var state_27879__$1 = state_27879;
if(cljs.core.truth_(inst_27865)){
var statearr_27889_27920 = state_27879__$1;
(statearr_27889_27920[(1)] = (12));

} else {
var statearr_27890_27921 = state_27879__$1;
(statearr_27890_27921[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (3))){
var inst_27877 = (state_27879[(2)]);
var state_27879__$1 = state_27879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27879__$1,inst_27877);
} else {
if((state_val_27880 === (12))){
var inst_27839 = (state_27879[(7)]);
var inst_27867 = cljs.core.vec.call(null,inst_27839);
var state_27879__$1 = state_27879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27879__$1,(15),out,inst_27867);
} else {
if((state_val_27880 === (2))){
var state_27879__$1 = state_27879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27879__$1,(4),ch);
} else {
if((state_val_27880 === (11))){
var inst_27847 = (state_27879[(10)]);
var inst_27843 = (state_27879[(9)]);
var inst_27857 = (state_27879[(2)]);
var inst_27858 = [];
var inst_27859 = inst_27858.push(inst_27843);
var inst_27839 = inst_27858;
var inst_27840 = inst_27847;
var state_27879__$1 = (function (){var statearr_27891 = state_27879;
(statearr_27891[(11)] = inst_27857);

(statearr_27891[(12)] = inst_27859);

(statearr_27891[(7)] = inst_27839);

(statearr_27891[(8)] = inst_27840);

return statearr_27891;
})();
var statearr_27892_27922 = state_27879__$1;
(statearr_27892_27922[(2)] = null);

(statearr_27892_27922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (9))){
var inst_27839 = (state_27879[(7)]);
var inst_27855 = cljs.core.vec.call(null,inst_27839);
var state_27879__$1 = state_27879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27879__$1,(11),out,inst_27855);
} else {
if((state_val_27880 === (5))){
var inst_27847 = (state_27879[(10)]);
var inst_27843 = (state_27879[(9)]);
var inst_27840 = (state_27879[(8)]);
var inst_27847__$1 = f.call(null,inst_27843);
var inst_27848 = cljs.core._EQ_.call(null,inst_27847__$1,inst_27840);
var inst_27849 = cljs.core.keyword_identical_QMARK_.call(null,inst_27840,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27850 = (inst_27848) || (inst_27849);
var state_27879__$1 = (function (){var statearr_27893 = state_27879;
(statearr_27893[(10)] = inst_27847__$1);

return statearr_27893;
})();
if(cljs.core.truth_(inst_27850)){
var statearr_27894_27923 = state_27879__$1;
(statearr_27894_27923[(1)] = (8));

} else {
var statearr_27895_27924 = state_27879__$1;
(statearr_27895_27924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (14))){
var inst_27872 = (state_27879[(2)]);
var inst_27873 = cljs.core.async.close_BANG_.call(null,out);
var state_27879__$1 = (function (){var statearr_27897 = state_27879;
(statearr_27897[(13)] = inst_27872);

return statearr_27897;
})();
var statearr_27898_27925 = state_27879__$1;
(statearr_27898_27925[(2)] = inst_27873);

(statearr_27898_27925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (10))){
var inst_27862 = (state_27879[(2)]);
var state_27879__$1 = state_27879;
var statearr_27899_27926 = state_27879__$1;
(statearr_27899_27926[(2)] = inst_27862);

(statearr_27899_27926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27880 === (8))){
var inst_27847 = (state_27879[(10)]);
var inst_27839 = (state_27879[(7)]);
var inst_27843 = (state_27879[(9)]);
var inst_27852 = inst_27839.push(inst_27843);
var tmp27896 = inst_27839;
var inst_27839__$1 = tmp27896;
var inst_27840 = inst_27847;
var state_27879__$1 = (function (){var statearr_27900 = state_27879;
(statearr_27900[(14)] = inst_27852);

(statearr_27900[(7)] = inst_27839__$1);

(statearr_27900[(8)] = inst_27840);

return statearr_27900;
})();
var statearr_27901_27927 = state_27879__$1;
(statearr_27901_27927[(2)] = null);

(statearr_27901_27927[(1)] = (2));


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
});})(c__25158__auto___27913,out))
;
return ((function (switch__25046__auto__,c__25158__auto___27913,out){
return (function() {
var cljs$core$async$state_machine__25047__auto__ = null;
var cljs$core$async$state_machine__25047__auto____0 = (function (){
var statearr_27905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27905[(0)] = cljs$core$async$state_machine__25047__auto__);

(statearr_27905[(1)] = (1));

return statearr_27905;
});
var cljs$core$async$state_machine__25047__auto____1 = (function (state_27879){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_27879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e27906){if((e27906 instanceof Object)){
var ex__25050__auto__ = e27906;
var statearr_27907_27928 = state_27879;
(statearr_27907_27928[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27929 = state_27879;
state_27879 = G__27929;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
cljs$core$async$state_machine__25047__auto__ = function(state_27879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25047__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25047__auto____1.call(this,state_27879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25047__auto____0;
cljs$core$async$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25047__auto____1;
return cljs$core$async$state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto___27913,out))
})();
var state__25160__auto__ = (function (){var statearr_27908 = f__25159__auto__.call(null);
(statearr_27908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto___27913);

return statearr_27908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto___27913,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map