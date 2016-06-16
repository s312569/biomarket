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
var args30016 = [];
var len__26910__auto___30022 = arguments.length;
var i__26911__auto___30023 = (0);
while(true){
if((i__26911__auto___30023 < len__26910__auto___30022)){
args30016.push((arguments[i__26911__auto___30023]));

var G__30024 = (i__26911__auto___30023 + (1));
i__26911__auto___30023 = G__30024;
continue;
} else {
}
break;
}

var G__30018 = args30016.length;
switch (G__30018) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30016.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30019 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30019 = (function (f,blockable,meta30020){
this.f = f;
this.blockable = blockable;
this.meta30020 = meta30020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30021,meta30020__$1){
var self__ = this;
var _30021__$1 = this;
return (new cljs.core.async.t_cljs$core$async30019(self__.f,self__.blockable,meta30020__$1));
});

cljs.core.async.t_cljs$core$async30019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30021){
var self__ = this;
var _30021__$1 = this;
return self__.meta30020;
});

cljs.core.async.t_cljs$core$async30019.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30019.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30019.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30019.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30020","meta30020",-1794906347,null)], null);
});

cljs.core.async.t_cljs$core$async30019.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30019";

cljs.core.async.t_cljs$core$async30019.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"cljs.core.async/t_cljs$core$async30019");
});

cljs.core.async.__GT_t_cljs$core$async30019 = (function cljs$core$async$__GT_t_cljs$core$async30019(f__$1,blockable__$1,meta30020){
return (new cljs.core.async.t_cljs$core$async30019(f__$1,blockable__$1,meta30020));
});

}

return (new cljs.core.async.t_cljs$core$async30019(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args30028 = [];
var len__26910__auto___30031 = arguments.length;
var i__26911__auto___30032 = (0);
while(true){
if((i__26911__auto___30032 < len__26910__auto___30031)){
args30028.push((arguments[i__26911__auto___30032]));

var G__30033 = (i__26911__auto___30032 + (1));
i__26911__auto___30032 = G__30033;
continue;
} else {
}
break;
}

var G__30030 = args30028.length;
switch (G__30030) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30028.length)].join('')));

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
var args30035 = [];
var len__26910__auto___30038 = arguments.length;
var i__26911__auto___30039 = (0);
while(true){
if((i__26911__auto___30039 < len__26910__auto___30038)){
args30035.push((arguments[i__26911__auto___30039]));

var G__30040 = (i__26911__auto___30039 + (1));
i__26911__auto___30039 = G__30040;
continue;
} else {
}
break;
}

var G__30037 = args30035.length;
switch (G__30037) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30035.length)].join('')));

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
var args30042 = [];
var len__26910__auto___30045 = arguments.length;
var i__26911__auto___30046 = (0);
while(true){
if((i__26911__auto___30046 < len__26910__auto___30045)){
args30042.push((arguments[i__26911__auto___30046]));

var G__30047 = (i__26911__auto___30046 + (1));
i__26911__auto___30046 = G__30047;
continue;
} else {
}
break;
}

var G__30044 = args30042.length;
switch (G__30044) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30042.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30049 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30049);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30049,ret){
return (function (){
return fn1.call(null,val_30049);
});})(val_30049,ret))
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
var args30050 = [];
var len__26910__auto___30053 = arguments.length;
var i__26911__auto___30054 = (0);
while(true){
if((i__26911__auto___30054 < len__26910__auto___30053)){
args30050.push((arguments[i__26911__auto___30054]));

var G__30055 = (i__26911__auto___30054 + (1));
i__26911__auto___30054 = G__30055;
continue;
} else {
}
break;
}

var G__30052 = args30050.length;
switch (G__30052) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30050.length)].join('')));

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
var n__26755__auto___30057 = n;
var x_30058 = (0);
while(true){
if((x_30058 < n__26755__auto___30057)){
(a[x_30058] = (0));

var G__30059 = (x_30058 + (1));
x_30058 = G__30059;
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

var G__30060 = (i + (1));
i = G__30060;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30064 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30064 = (function (alt_flag,flag,meta30065){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30065 = meta30065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30066,meta30065__$1){
var self__ = this;
var _30066__$1 = this;
return (new cljs.core.async.t_cljs$core$async30064(self__.alt_flag,self__.flag,meta30065__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30064.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30066){
var self__ = this;
var _30066__$1 = this;
return self__.meta30065;
});})(flag))
;

cljs.core.async.t_cljs$core$async30064.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30064.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30064.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30065","meta30065",-35405152,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30064";

cljs.core.async.t_cljs$core$async30064.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"cljs.core.async/t_cljs$core$async30064");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30064 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30064(alt_flag__$1,flag__$1,meta30065){
return (new cljs.core.async.t_cljs$core$async30064(alt_flag__$1,flag__$1,meta30065));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30064(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30070 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30070 = (function (alt_handler,flag,cb,meta30071){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30071 = meta30071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30072,meta30071__$1){
var self__ = this;
var _30072__$1 = this;
return (new cljs.core.async.t_cljs$core$async30070(self__.alt_handler,self__.flag,self__.cb,meta30071__$1));
});

cljs.core.async.t_cljs$core$async30070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30072){
var self__ = this;
var _30072__$1 = this;
return self__.meta30071;
});

cljs.core.async.t_cljs$core$async30070.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30070.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30070.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30070.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30071","meta30071",-474353142,null)], null);
});

cljs.core.async.t_cljs$core$async30070.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30070";

cljs.core.async.t_cljs$core$async30070.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"cljs.core.async/t_cljs$core$async30070");
});

cljs.core.async.__GT_t_cljs$core$async30070 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30070(alt_handler__$1,flag__$1,cb__$1,meta30071){
return (new cljs.core.async.t_cljs$core$async30070(alt_handler__$1,flag__$1,cb__$1,meta30071));
});

}

return (new cljs.core.async.t_cljs$core$async30070(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30073_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30073_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30074_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30074_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25840__auto__ = wport;
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30075 = (i + (1));
i = G__30075;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25840__auto__ = ret;
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__25828__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25828__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25828__auto__;
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
var args__26917__auto__ = [];
var len__26910__auto___30081 = arguments.length;
var i__26911__auto___30082 = (0);
while(true){
if((i__26911__auto___30082 < len__26910__auto___30081)){
args__26917__auto__.push((arguments[i__26911__auto___30082]));

var G__30083 = (i__26911__auto___30082 + (1));
i__26911__auto___30082 = G__30083;
continue;
} else {
}
break;
}

var argseq__26918__auto__ = ((((1) < args__26917__auto__.length))?(new cljs.core.IndexedSeq(args__26917__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26918__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30078){
var map__30079 = p__30078;
var map__30079__$1 = ((((!((map__30079 == null)))?((((map__30079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30079):map__30079);
var opts = map__30079__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30076){
var G__30077 = cljs.core.first.call(null,seq30076);
var seq30076__$1 = cljs.core.next.call(null,seq30076);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30077,seq30076__$1);
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
var args30084 = [];
var len__26910__auto___30134 = arguments.length;
var i__26911__auto___30135 = (0);
while(true){
if((i__26911__auto___30135 < len__26910__auto___30134)){
args30084.push((arguments[i__26911__auto___30135]));

var G__30136 = (i__26911__auto___30135 + (1));
i__26911__auto___30135 = G__30136;
continue;
} else {
}
break;
}

var G__30086 = args30084.length;
switch (G__30086) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30084.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29971__auto___30138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto___30138){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto___30138){
return (function (state_30110){
var state_val_30111 = (state_30110[(1)]);
if((state_val_30111 === (7))){
var inst_30106 = (state_30110[(2)]);
var state_30110__$1 = state_30110;
var statearr_30112_30139 = state_30110__$1;
(statearr_30112_30139[(2)] = inst_30106);

(statearr_30112_30139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (1))){
var state_30110__$1 = state_30110;
var statearr_30113_30140 = state_30110__$1;
(statearr_30113_30140[(2)] = null);

(statearr_30113_30140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (4))){
var inst_30089 = (state_30110[(7)]);
var inst_30089__$1 = (state_30110[(2)]);
var inst_30090 = (inst_30089__$1 == null);
var state_30110__$1 = (function (){var statearr_30114 = state_30110;
(statearr_30114[(7)] = inst_30089__$1);

return statearr_30114;
})();
if(cljs.core.truth_(inst_30090)){
var statearr_30115_30141 = state_30110__$1;
(statearr_30115_30141[(1)] = (5));

} else {
var statearr_30116_30142 = state_30110__$1;
(statearr_30116_30142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (13))){
var state_30110__$1 = state_30110;
var statearr_30117_30143 = state_30110__$1;
(statearr_30117_30143[(2)] = null);

(statearr_30117_30143[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (6))){
var inst_30089 = (state_30110[(7)]);
var state_30110__$1 = state_30110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30110__$1,(11),to,inst_30089);
} else {
if((state_val_30111 === (3))){
var inst_30108 = (state_30110[(2)]);
var state_30110__$1 = state_30110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30110__$1,inst_30108);
} else {
if((state_val_30111 === (12))){
var state_30110__$1 = state_30110;
var statearr_30118_30144 = state_30110__$1;
(statearr_30118_30144[(2)] = null);

(statearr_30118_30144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (2))){
var state_30110__$1 = state_30110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30110__$1,(4),from);
} else {
if((state_val_30111 === (11))){
var inst_30099 = (state_30110[(2)]);
var state_30110__$1 = state_30110;
if(cljs.core.truth_(inst_30099)){
var statearr_30119_30145 = state_30110__$1;
(statearr_30119_30145[(1)] = (12));

} else {
var statearr_30120_30146 = state_30110__$1;
(statearr_30120_30146[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (9))){
var state_30110__$1 = state_30110;
var statearr_30121_30147 = state_30110__$1;
(statearr_30121_30147[(2)] = null);

(statearr_30121_30147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (5))){
var state_30110__$1 = state_30110;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30122_30148 = state_30110__$1;
(statearr_30122_30148[(1)] = (8));

} else {
var statearr_30123_30149 = state_30110__$1;
(statearr_30123_30149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (14))){
var inst_30104 = (state_30110[(2)]);
var state_30110__$1 = state_30110;
var statearr_30124_30150 = state_30110__$1;
(statearr_30124_30150[(2)] = inst_30104);

(statearr_30124_30150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (10))){
var inst_30096 = (state_30110[(2)]);
var state_30110__$1 = state_30110;
var statearr_30125_30151 = state_30110__$1;
(statearr_30125_30151[(2)] = inst_30096);

(statearr_30125_30151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30111 === (8))){
var inst_30093 = cljs.core.async.close_BANG_.call(null,to);
var state_30110__$1 = state_30110;
var statearr_30126_30152 = state_30110__$1;
(statearr_30126_30152[(2)] = inst_30093);

(statearr_30126_30152[(1)] = (10));


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
});})(c__29971__auto___30138))
;
return ((function (switch__29859__auto__,c__29971__auto___30138){
return (function() {
var cljs$core$async$state_machine__29860__auto__ = null;
var cljs$core$async$state_machine__29860__auto____0 = (function (){
var statearr_30130 = [null,null,null,null,null,null,null,null];
(statearr_30130[(0)] = cljs$core$async$state_machine__29860__auto__);

(statearr_30130[(1)] = (1));

return statearr_30130;
});
var cljs$core$async$state_machine__29860__auto____1 = (function (state_30110){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_30110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e30131){if((e30131 instanceof Object)){
var ex__29863__auto__ = e30131;
var statearr_30132_30153 = state_30110;
(statearr_30132_30153[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30154 = state_30110;
state_30110 = G__30154;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$state_machine__29860__auto__ = function(state_30110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29860__auto____1.call(this,state_30110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29860__auto____0;
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29860__auto____1;
return cljs$core$async$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto___30138))
})();
var state__29973__auto__ = (function (){var statearr_30133 = f__29972__auto__.call(null);
(statearr_30133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___30138);

return statearr_30133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto___30138))
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
return (function (p__30338){
var vec__30339 = p__30338;
var v = cljs.core.nth.call(null,vec__30339,(0),null);
var p = cljs.core.nth.call(null,vec__30339,(1),null);
var job = vec__30339;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29971__auto___30521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto___30521,res,vec__30339,v,p,job,jobs,results){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto___30521,res,vec__30339,v,p,job,jobs,results){
return (function (state_30344){
var state_val_30345 = (state_30344[(1)]);
if((state_val_30345 === (1))){
var state_30344__$1 = state_30344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30344__$1,(2),res,v);
} else {
if((state_val_30345 === (2))){
var inst_30341 = (state_30344[(2)]);
var inst_30342 = cljs.core.async.close_BANG_.call(null,res);
var state_30344__$1 = (function (){var statearr_30346 = state_30344;
(statearr_30346[(7)] = inst_30341);

return statearr_30346;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30344__$1,inst_30342);
} else {
return null;
}
}
});})(c__29971__auto___30521,res,vec__30339,v,p,job,jobs,results))
;
return ((function (switch__29859__auto__,c__29971__auto___30521,res,vec__30339,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0 = (function (){
var statearr_30350 = [null,null,null,null,null,null,null,null];
(statearr_30350[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__);

(statearr_30350[(1)] = (1));

return statearr_30350;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1 = (function (state_30344){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_30344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e30351){if((e30351 instanceof Object)){
var ex__29863__auto__ = e30351;
var statearr_30352_30522 = state_30344;
(statearr_30352_30522[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30523 = state_30344;
state_30344 = G__30523;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__ = function(state_30344){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1.call(this,state_30344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto___30521,res,vec__30339,v,p,job,jobs,results))
})();
var state__29973__auto__ = (function (){var statearr_30353 = f__29972__auto__.call(null);
(statearr_30353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___30521);

return statearr_30353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto___30521,res,vec__30339,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30354){
var vec__30355 = p__30354;
var v = cljs.core.nth.call(null,vec__30355,(0),null);
var p = cljs.core.nth.call(null,vec__30355,(1),null);
var job = vec__30355;
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
var n__26755__auto___30524 = n;
var __30525 = (0);
while(true){
if((__30525 < n__26755__auto___30524)){
var G__30356_30526 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30356_30526) {
case "compute":
var c__29971__auto___30528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30525,c__29971__auto___30528,G__30356_30526,n__26755__auto___30524,jobs,results,process,async){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (__30525,c__29971__auto___30528,G__30356_30526,n__26755__auto___30524,jobs,results,process,async){
return (function (state_30369){
var state_val_30370 = (state_30369[(1)]);
if((state_val_30370 === (1))){
var state_30369__$1 = state_30369;
var statearr_30371_30529 = state_30369__$1;
(statearr_30371_30529[(2)] = null);

(statearr_30371_30529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (2))){
var state_30369__$1 = state_30369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30369__$1,(4),jobs);
} else {
if((state_val_30370 === (3))){
var inst_30367 = (state_30369[(2)]);
var state_30369__$1 = state_30369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30369__$1,inst_30367);
} else {
if((state_val_30370 === (4))){
var inst_30359 = (state_30369[(2)]);
var inst_30360 = process.call(null,inst_30359);
var state_30369__$1 = state_30369;
if(cljs.core.truth_(inst_30360)){
var statearr_30372_30530 = state_30369__$1;
(statearr_30372_30530[(1)] = (5));

} else {
var statearr_30373_30531 = state_30369__$1;
(statearr_30373_30531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (5))){
var state_30369__$1 = state_30369;
var statearr_30374_30532 = state_30369__$1;
(statearr_30374_30532[(2)] = null);

(statearr_30374_30532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (6))){
var state_30369__$1 = state_30369;
var statearr_30375_30533 = state_30369__$1;
(statearr_30375_30533[(2)] = null);

(statearr_30375_30533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (7))){
var inst_30365 = (state_30369[(2)]);
var state_30369__$1 = state_30369;
var statearr_30376_30534 = state_30369__$1;
(statearr_30376_30534[(2)] = inst_30365);

(statearr_30376_30534[(1)] = (3));


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
});})(__30525,c__29971__auto___30528,G__30356_30526,n__26755__auto___30524,jobs,results,process,async))
;
return ((function (__30525,switch__29859__auto__,c__29971__auto___30528,G__30356_30526,n__26755__auto___30524,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0 = (function (){
var statearr_30380 = [null,null,null,null,null,null,null];
(statearr_30380[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__);

(statearr_30380[(1)] = (1));

return statearr_30380;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1 = (function (state_30369){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_30369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e30381){if((e30381 instanceof Object)){
var ex__29863__auto__ = e30381;
var statearr_30382_30535 = state_30369;
(statearr_30382_30535[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30536 = state_30369;
state_30369 = G__30536;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__ = function(state_30369){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1.call(this,state_30369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__;
})()
;})(__30525,switch__29859__auto__,c__29971__auto___30528,G__30356_30526,n__26755__auto___30524,jobs,results,process,async))
})();
var state__29973__auto__ = (function (){var statearr_30383 = f__29972__auto__.call(null);
(statearr_30383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___30528);

return statearr_30383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(__30525,c__29971__auto___30528,G__30356_30526,n__26755__auto___30524,jobs,results,process,async))
);


break;
case "async":
var c__29971__auto___30537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30525,c__29971__auto___30537,G__30356_30526,n__26755__auto___30524,jobs,results,process,async){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (__30525,c__29971__auto___30537,G__30356_30526,n__26755__auto___30524,jobs,results,process,async){
return (function (state_30396){
var state_val_30397 = (state_30396[(1)]);
if((state_val_30397 === (1))){
var state_30396__$1 = state_30396;
var statearr_30398_30538 = state_30396__$1;
(statearr_30398_30538[(2)] = null);

(statearr_30398_30538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (2))){
var state_30396__$1 = state_30396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30396__$1,(4),jobs);
} else {
if((state_val_30397 === (3))){
var inst_30394 = (state_30396[(2)]);
var state_30396__$1 = state_30396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30396__$1,inst_30394);
} else {
if((state_val_30397 === (4))){
var inst_30386 = (state_30396[(2)]);
var inst_30387 = async.call(null,inst_30386);
var state_30396__$1 = state_30396;
if(cljs.core.truth_(inst_30387)){
var statearr_30399_30539 = state_30396__$1;
(statearr_30399_30539[(1)] = (5));

} else {
var statearr_30400_30540 = state_30396__$1;
(statearr_30400_30540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (5))){
var state_30396__$1 = state_30396;
var statearr_30401_30541 = state_30396__$1;
(statearr_30401_30541[(2)] = null);

(statearr_30401_30541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (6))){
var state_30396__$1 = state_30396;
var statearr_30402_30542 = state_30396__$1;
(statearr_30402_30542[(2)] = null);

(statearr_30402_30542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30397 === (7))){
var inst_30392 = (state_30396[(2)]);
var state_30396__$1 = state_30396;
var statearr_30403_30543 = state_30396__$1;
(statearr_30403_30543[(2)] = inst_30392);

(statearr_30403_30543[(1)] = (3));


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
});})(__30525,c__29971__auto___30537,G__30356_30526,n__26755__auto___30524,jobs,results,process,async))
;
return ((function (__30525,switch__29859__auto__,c__29971__auto___30537,G__30356_30526,n__26755__auto___30524,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0 = (function (){
var statearr_30407 = [null,null,null,null,null,null,null];
(statearr_30407[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__);

(statearr_30407[(1)] = (1));

return statearr_30407;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1 = (function (state_30396){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_30396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e30408){if((e30408 instanceof Object)){
var ex__29863__auto__ = e30408;
var statearr_30409_30544 = state_30396;
(statearr_30409_30544[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30545 = state_30396;
state_30396 = G__30545;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__ = function(state_30396){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1.call(this,state_30396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__;
})()
;})(__30525,switch__29859__auto__,c__29971__auto___30537,G__30356_30526,n__26755__auto___30524,jobs,results,process,async))
})();
var state__29973__auto__ = (function (){var statearr_30410 = f__29972__auto__.call(null);
(statearr_30410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___30537);

return statearr_30410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(__30525,c__29971__auto___30537,G__30356_30526,n__26755__auto___30524,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30546 = (__30525 + (1));
__30525 = G__30546;
continue;
} else {
}
break;
}

var c__29971__auto___30547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto___30547,jobs,results,process,async){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto___30547,jobs,results,process,async){
return (function (state_30432){
var state_val_30433 = (state_30432[(1)]);
if((state_val_30433 === (1))){
var state_30432__$1 = state_30432;
var statearr_30434_30548 = state_30432__$1;
(statearr_30434_30548[(2)] = null);

(statearr_30434_30548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (2))){
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30432__$1,(4),from);
} else {
if((state_val_30433 === (3))){
var inst_30430 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30432__$1,inst_30430);
} else {
if((state_val_30433 === (4))){
var inst_30413 = (state_30432[(7)]);
var inst_30413__$1 = (state_30432[(2)]);
var inst_30414 = (inst_30413__$1 == null);
var state_30432__$1 = (function (){var statearr_30435 = state_30432;
(statearr_30435[(7)] = inst_30413__$1);

return statearr_30435;
})();
if(cljs.core.truth_(inst_30414)){
var statearr_30436_30549 = state_30432__$1;
(statearr_30436_30549[(1)] = (5));

} else {
var statearr_30437_30550 = state_30432__$1;
(statearr_30437_30550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (5))){
var inst_30416 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30432__$1 = state_30432;
var statearr_30438_30551 = state_30432__$1;
(statearr_30438_30551[(2)] = inst_30416);

(statearr_30438_30551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (6))){
var inst_30418 = (state_30432[(8)]);
var inst_30413 = (state_30432[(7)]);
var inst_30418__$1 = cljs.core.async.chan.call(null,(1));
var inst_30419 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30420 = [inst_30413,inst_30418__$1];
var inst_30421 = (new cljs.core.PersistentVector(null,2,(5),inst_30419,inst_30420,null));
var state_30432__$1 = (function (){var statearr_30439 = state_30432;
(statearr_30439[(8)] = inst_30418__$1);

return statearr_30439;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30432__$1,(8),jobs,inst_30421);
} else {
if((state_val_30433 === (7))){
var inst_30428 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30440_30552 = state_30432__$1;
(statearr_30440_30552[(2)] = inst_30428);

(statearr_30440_30552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (8))){
var inst_30418 = (state_30432[(8)]);
var inst_30423 = (state_30432[(2)]);
var state_30432__$1 = (function (){var statearr_30441 = state_30432;
(statearr_30441[(9)] = inst_30423);

return statearr_30441;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30432__$1,(9),results,inst_30418);
} else {
if((state_val_30433 === (9))){
var inst_30425 = (state_30432[(2)]);
var state_30432__$1 = (function (){var statearr_30442 = state_30432;
(statearr_30442[(10)] = inst_30425);

return statearr_30442;
})();
var statearr_30443_30553 = state_30432__$1;
(statearr_30443_30553[(2)] = null);

(statearr_30443_30553[(1)] = (2));


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
});})(c__29971__auto___30547,jobs,results,process,async))
;
return ((function (switch__29859__auto__,c__29971__auto___30547,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0 = (function (){
var statearr_30447 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30447[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__);

(statearr_30447[(1)] = (1));

return statearr_30447;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1 = (function (state_30432){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_30432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e30448){if((e30448 instanceof Object)){
var ex__29863__auto__ = e30448;
var statearr_30449_30554 = state_30432;
(statearr_30449_30554[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30555 = state_30432;
state_30432 = G__30555;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__ = function(state_30432){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1.call(this,state_30432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto___30547,jobs,results,process,async))
})();
var state__29973__auto__ = (function (){var statearr_30450 = f__29972__auto__.call(null);
(statearr_30450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___30547);

return statearr_30450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto___30547,jobs,results,process,async))
);


var c__29971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto__,jobs,results,process,async){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto__,jobs,results,process,async){
return (function (state_30488){
var state_val_30489 = (state_30488[(1)]);
if((state_val_30489 === (7))){
var inst_30484 = (state_30488[(2)]);
var state_30488__$1 = state_30488;
var statearr_30490_30556 = state_30488__$1;
(statearr_30490_30556[(2)] = inst_30484);

(statearr_30490_30556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (20))){
var state_30488__$1 = state_30488;
var statearr_30491_30557 = state_30488__$1;
(statearr_30491_30557[(2)] = null);

(statearr_30491_30557[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (1))){
var state_30488__$1 = state_30488;
var statearr_30492_30558 = state_30488__$1;
(statearr_30492_30558[(2)] = null);

(statearr_30492_30558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (4))){
var inst_30453 = (state_30488[(7)]);
var inst_30453__$1 = (state_30488[(2)]);
var inst_30454 = (inst_30453__$1 == null);
var state_30488__$1 = (function (){var statearr_30493 = state_30488;
(statearr_30493[(7)] = inst_30453__$1);

return statearr_30493;
})();
if(cljs.core.truth_(inst_30454)){
var statearr_30494_30559 = state_30488__$1;
(statearr_30494_30559[(1)] = (5));

} else {
var statearr_30495_30560 = state_30488__$1;
(statearr_30495_30560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (15))){
var inst_30466 = (state_30488[(8)]);
var state_30488__$1 = state_30488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30488__$1,(18),to,inst_30466);
} else {
if((state_val_30489 === (21))){
var inst_30479 = (state_30488[(2)]);
var state_30488__$1 = state_30488;
var statearr_30496_30561 = state_30488__$1;
(statearr_30496_30561[(2)] = inst_30479);

(statearr_30496_30561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (13))){
var inst_30481 = (state_30488[(2)]);
var state_30488__$1 = (function (){var statearr_30497 = state_30488;
(statearr_30497[(9)] = inst_30481);

return statearr_30497;
})();
var statearr_30498_30562 = state_30488__$1;
(statearr_30498_30562[(2)] = null);

(statearr_30498_30562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (6))){
var inst_30453 = (state_30488[(7)]);
var state_30488__$1 = state_30488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30488__$1,(11),inst_30453);
} else {
if((state_val_30489 === (17))){
var inst_30474 = (state_30488[(2)]);
var state_30488__$1 = state_30488;
if(cljs.core.truth_(inst_30474)){
var statearr_30499_30563 = state_30488__$1;
(statearr_30499_30563[(1)] = (19));

} else {
var statearr_30500_30564 = state_30488__$1;
(statearr_30500_30564[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (3))){
var inst_30486 = (state_30488[(2)]);
var state_30488__$1 = state_30488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30488__$1,inst_30486);
} else {
if((state_val_30489 === (12))){
var inst_30463 = (state_30488[(10)]);
var state_30488__$1 = state_30488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30488__$1,(14),inst_30463);
} else {
if((state_val_30489 === (2))){
var state_30488__$1 = state_30488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30488__$1,(4),results);
} else {
if((state_val_30489 === (19))){
var state_30488__$1 = state_30488;
var statearr_30501_30565 = state_30488__$1;
(statearr_30501_30565[(2)] = null);

(statearr_30501_30565[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (11))){
var inst_30463 = (state_30488[(2)]);
var state_30488__$1 = (function (){var statearr_30502 = state_30488;
(statearr_30502[(10)] = inst_30463);

return statearr_30502;
})();
var statearr_30503_30566 = state_30488__$1;
(statearr_30503_30566[(2)] = null);

(statearr_30503_30566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (9))){
var state_30488__$1 = state_30488;
var statearr_30504_30567 = state_30488__$1;
(statearr_30504_30567[(2)] = null);

(statearr_30504_30567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (5))){
var state_30488__$1 = state_30488;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30505_30568 = state_30488__$1;
(statearr_30505_30568[(1)] = (8));

} else {
var statearr_30506_30569 = state_30488__$1;
(statearr_30506_30569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (14))){
var inst_30466 = (state_30488[(8)]);
var inst_30468 = (state_30488[(11)]);
var inst_30466__$1 = (state_30488[(2)]);
var inst_30467 = (inst_30466__$1 == null);
var inst_30468__$1 = cljs.core.not.call(null,inst_30467);
var state_30488__$1 = (function (){var statearr_30507 = state_30488;
(statearr_30507[(8)] = inst_30466__$1);

(statearr_30507[(11)] = inst_30468__$1);

return statearr_30507;
})();
if(inst_30468__$1){
var statearr_30508_30570 = state_30488__$1;
(statearr_30508_30570[(1)] = (15));

} else {
var statearr_30509_30571 = state_30488__$1;
(statearr_30509_30571[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (16))){
var inst_30468 = (state_30488[(11)]);
var state_30488__$1 = state_30488;
var statearr_30510_30572 = state_30488__$1;
(statearr_30510_30572[(2)] = inst_30468);

(statearr_30510_30572[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (10))){
var inst_30460 = (state_30488[(2)]);
var state_30488__$1 = state_30488;
var statearr_30511_30573 = state_30488__$1;
(statearr_30511_30573[(2)] = inst_30460);

(statearr_30511_30573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (18))){
var inst_30471 = (state_30488[(2)]);
var state_30488__$1 = state_30488;
var statearr_30512_30574 = state_30488__$1;
(statearr_30512_30574[(2)] = inst_30471);

(statearr_30512_30574[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30489 === (8))){
var inst_30457 = cljs.core.async.close_BANG_.call(null,to);
var state_30488__$1 = state_30488;
var statearr_30513_30575 = state_30488__$1;
(statearr_30513_30575[(2)] = inst_30457);

(statearr_30513_30575[(1)] = (10));


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
});})(c__29971__auto__,jobs,results,process,async))
;
return ((function (switch__29859__auto__,c__29971__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0 = (function (){
var statearr_30517 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30517[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__);

(statearr_30517[(1)] = (1));

return statearr_30517;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1 = (function (state_30488){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_30488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e30518){if((e30518 instanceof Object)){
var ex__29863__auto__ = e30518;
var statearr_30519_30576 = state_30488;
(statearr_30519_30576[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30577 = state_30488;
state_30488 = G__30577;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__ = function(state_30488){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1.call(this,state_30488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto__,jobs,results,process,async))
})();
var state__29973__auto__ = (function (){var statearr_30520 = f__29972__auto__.call(null);
(statearr_30520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto__);

return statearr_30520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto__,jobs,results,process,async))
);

return c__29971__auto__;
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
var args30578 = [];
var len__26910__auto___30581 = arguments.length;
var i__26911__auto___30582 = (0);
while(true){
if((i__26911__auto___30582 < len__26910__auto___30581)){
args30578.push((arguments[i__26911__auto___30582]));

var G__30583 = (i__26911__auto___30582 + (1));
i__26911__auto___30582 = G__30583;
continue;
} else {
}
break;
}

var G__30580 = args30578.length;
switch (G__30580) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30578.length)].join('')));

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
var args30585 = [];
var len__26910__auto___30588 = arguments.length;
var i__26911__auto___30589 = (0);
while(true){
if((i__26911__auto___30589 < len__26910__auto___30588)){
args30585.push((arguments[i__26911__auto___30589]));

var G__30590 = (i__26911__auto___30589 + (1));
i__26911__auto___30589 = G__30590;
continue;
} else {
}
break;
}

var G__30587 = args30585.length;
switch (G__30587) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30585.length)].join('')));

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
var args30592 = [];
var len__26910__auto___30645 = arguments.length;
var i__26911__auto___30646 = (0);
while(true){
if((i__26911__auto___30646 < len__26910__auto___30645)){
args30592.push((arguments[i__26911__auto___30646]));

var G__30647 = (i__26911__auto___30646 + (1));
i__26911__auto___30646 = G__30647;
continue;
} else {
}
break;
}

var G__30594 = args30592.length;
switch (G__30594) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30592.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29971__auto___30649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto___30649,tc,fc){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto___30649,tc,fc){
return (function (state_30620){
var state_val_30621 = (state_30620[(1)]);
if((state_val_30621 === (7))){
var inst_30616 = (state_30620[(2)]);
var state_30620__$1 = state_30620;
var statearr_30622_30650 = state_30620__$1;
(statearr_30622_30650[(2)] = inst_30616);

(statearr_30622_30650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30621 === (1))){
var state_30620__$1 = state_30620;
var statearr_30623_30651 = state_30620__$1;
(statearr_30623_30651[(2)] = null);

(statearr_30623_30651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30621 === (4))){
var inst_30597 = (state_30620[(7)]);
var inst_30597__$1 = (state_30620[(2)]);
var inst_30598 = (inst_30597__$1 == null);
var state_30620__$1 = (function (){var statearr_30624 = state_30620;
(statearr_30624[(7)] = inst_30597__$1);

return statearr_30624;
})();
if(cljs.core.truth_(inst_30598)){
var statearr_30625_30652 = state_30620__$1;
(statearr_30625_30652[(1)] = (5));

} else {
var statearr_30626_30653 = state_30620__$1;
(statearr_30626_30653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30621 === (13))){
var state_30620__$1 = state_30620;
var statearr_30627_30654 = state_30620__$1;
(statearr_30627_30654[(2)] = null);

(statearr_30627_30654[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30621 === (6))){
var inst_30597 = (state_30620[(7)]);
var inst_30603 = p.call(null,inst_30597);
var state_30620__$1 = state_30620;
if(cljs.core.truth_(inst_30603)){
var statearr_30628_30655 = state_30620__$1;
(statearr_30628_30655[(1)] = (9));

} else {
var statearr_30629_30656 = state_30620__$1;
(statearr_30629_30656[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30621 === (3))){
var inst_30618 = (state_30620[(2)]);
var state_30620__$1 = state_30620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30620__$1,inst_30618);
} else {
if((state_val_30621 === (12))){
var state_30620__$1 = state_30620;
var statearr_30630_30657 = state_30620__$1;
(statearr_30630_30657[(2)] = null);

(statearr_30630_30657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30621 === (2))){
var state_30620__$1 = state_30620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30620__$1,(4),ch);
} else {
if((state_val_30621 === (11))){
var inst_30597 = (state_30620[(7)]);
var inst_30607 = (state_30620[(2)]);
var state_30620__$1 = state_30620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30620__$1,(8),inst_30607,inst_30597);
} else {
if((state_val_30621 === (9))){
var state_30620__$1 = state_30620;
var statearr_30631_30658 = state_30620__$1;
(statearr_30631_30658[(2)] = tc);

(statearr_30631_30658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30621 === (5))){
var inst_30600 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30601 = cljs.core.async.close_BANG_.call(null,fc);
var state_30620__$1 = (function (){var statearr_30632 = state_30620;
(statearr_30632[(8)] = inst_30600);

return statearr_30632;
})();
var statearr_30633_30659 = state_30620__$1;
(statearr_30633_30659[(2)] = inst_30601);

(statearr_30633_30659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30621 === (14))){
var inst_30614 = (state_30620[(2)]);
var state_30620__$1 = state_30620;
var statearr_30634_30660 = state_30620__$1;
(statearr_30634_30660[(2)] = inst_30614);

(statearr_30634_30660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30621 === (10))){
var state_30620__$1 = state_30620;
var statearr_30635_30661 = state_30620__$1;
(statearr_30635_30661[(2)] = fc);

(statearr_30635_30661[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30621 === (8))){
var inst_30609 = (state_30620[(2)]);
var state_30620__$1 = state_30620;
if(cljs.core.truth_(inst_30609)){
var statearr_30636_30662 = state_30620__$1;
(statearr_30636_30662[(1)] = (12));

} else {
var statearr_30637_30663 = state_30620__$1;
(statearr_30637_30663[(1)] = (13));

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
});})(c__29971__auto___30649,tc,fc))
;
return ((function (switch__29859__auto__,c__29971__auto___30649,tc,fc){
return (function() {
var cljs$core$async$state_machine__29860__auto__ = null;
var cljs$core$async$state_machine__29860__auto____0 = (function (){
var statearr_30641 = [null,null,null,null,null,null,null,null,null];
(statearr_30641[(0)] = cljs$core$async$state_machine__29860__auto__);

(statearr_30641[(1)] = (1));

return statearr_30641;
});
var cljs$core$async$state_machine__29860__auto____1 = (function (state_30620){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_30620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e30642){if((e30642 instanceof Object)){
var ex__29863__auto__ = e30642;
var statearr_30643_30664 = state_30620;
(statearr_30643_30664[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30665 = state_30620;
state_30620 = G__30665;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$state_machine__29860__auto__ = function(state_30620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29860__auto____1.call(this,state_30620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29860__auto____0;
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29860__auto____1;
return cljs$core$async$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto___30649,tc,fc))
})();
var state__29973__auto__ = (function (){var statearr_30644 = f__29972__auto__.call(null);
(statearr_30644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___30649);

return statearr_30644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto___30649,tc,fc))
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
var c__29971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto__){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto__){
return (function (state_30729){
var state_val_30730 = (state_30729[(1)]);
if((state_val_30730 === (7))){
var inst_30725 = (state_30729[(2)]);
var state_30729__$1 = state_30729;
var statearr_30731_30752 = state_30729__$1;
(statearr_30731_30752[(2)] = inst_30725);

(statearr_30731_30752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (1))){
var inst_30709 = init;
var state_30729__$1 = (function (){var statearr_30732 = state_30729;
(statearr_30732[(7)] = inst_30709);

return statearr_30732;
})();
var statearr_30733_30753 = state_30729__$1;
(statearr_30733_30753[(2)] = null);

(statearr_30733_30753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (4))){
var inst_30712 = (state_30729[(8)]);
var inst_30712__$1 = (state_30729[(2)]);
var inst_30713 = (inst_30712__$1 == null);
var state_30729__$1 = (function (){var statearr_30734 = state_30729;
(statearr_30734[(8)] = inst_30712__$1);

return statearr_30734;
})();
if(cljs.core.truth_(inst_30713)){
var statearr_30735_30754 = state_30729__$1;
(statearr_30735_30754[(1)] = (5));

} else {
var statearr_30736_30755 = state_30729__$1;
(statearr_30736_30755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (6))){
var inst_30709 = (state_30729[(7)]);
var inst_30712 = (state_30729[(8)]);
var inst_30716 = (state_30729[(9)]);
var inst_30716__$1 = f.call(null,inst_30709,inst_30712);
var inst_30717 = cljs.core.reduced_QMARK_.call(null,inst_30716__$1);
var state_30729__$1 = (function (){var statearr_30737 = state_30729;
(statearr_30737[(9)] = inst_30716__$1);

return statearr_30737;
})();
if(inst_30717){
var statearr_30738_30756 = state_30729__$1;
(statearr_30738_30756[(1)] = (8));

} else {
var statearr_30739_30757 = state_30729__$1;
(statearr_30739_30757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (3))){
var inst_30727 = (state_30729[(2)]);
var state_30729__$1 = state_30729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30729__$1,inst_30727);
} else {
if((state_val_30730 === (2))){
var state_30729__$1 = state_30729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30729__$1,(4),ch);
} else {
if((state_val_30730 === (9))){
var inst_30716 = (state_30729[(9)]);
var inst_30709 = inst_30716;
var state_30729__$1 = (function (){var statearr_30740 = state_30729;
(statearr_30740[(7)] = inst_30709);

return statearr_30740;
})();
var statearr_30741_30758 = state_30729__$1;
(statearr_30741_30758[(2)] = null);

(statearr_30741_30758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (5))){
var inst_30709 = (state_30729[(7)]);
var state_30729__$1 = state_30729;
var statearr_30742_30759 = state_30729__$1;
(statearr_30742_30759[(2)] = inst_30709);

(statearr_30742_30759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (10))){
var inst_30723 = (state_30729[(2)]);
var state_30729__$1 = state_30729;
var statearr_30743_30760 = state_30729__$1;
(statearr_30743_30760[(2)] = inst_30723);

(statearr_30743_30760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (8))){
var inst_30716 = (state_30729[(9)]);
var inst_30719 = cljs.core.deref.call(null,inst_30716);
var state_30729__$1 = state_30729;
var statearr_30744_30761 = state_30729__$1;
(statearr_30744_30761[(2)] = inst_30719);

(statearr_30744_30761[(1)] = (10));


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
});})(c__29971__auto__))
;
return ((function (switch__29859__auto__,c__29971__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29860__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29860__auto____0 = (function (){
var statearr_30748 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30748[(0)] = cljs$core$async$reduce_$_state_machine__29860__auto__);

(statearr_30748[(1)] = (1));

return statearr_30748;
});
var cljs$core$async$reduce_$_state_machine__29860__auto____1 = (function (state_30729){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_30729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e30749){if((e30749 instanceof Object)){
var ex__29863__auto__ = e30749;
var statearr_30750_30762 = state_30729;
(statearr_30750_30762[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30763 = state_30729;
state_30729 = G__30763;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29860__auto__ = function(state_30729){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29860__auto____1.call(this,state_30729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29860__auto____0;
cljs$core$async$reduce_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29860__auto____1;
return cljs$core$async$reduce_$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto__))
})();
var state__29973__auto__ = (function (){var statearr_30751 = f__29972__auto__.call(null);
(statearr_30751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto__);

return statearr_30751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto__))
);

return c__29971__auto__;
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
var args30764 = [];
var len__26910__auto___30816 = arguments.length;
var i__26911__auto___30817 = (0);
while(true){
if((i__26911__auto___30817 < len__26910__auto___30816)){
args30764.push((arguments[i__26911__auto___30817]));

var G__30818 = (i__26911__auto___30817 + (1));
i__26911__auto___30817 = G__30818;
continue;
} else {
}
break;
}

var G__30766 = args30764.length;
switch (G__30766) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30764.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto__){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto__){
return (function (state_30791){
var state_val_30792 = (state_30791[(1)]);
if((state_val_30792 === (7))){
var inst_30773 = (state_30791[(2)]);
var state_30791__$1 = state_30791;
var statearr_30793_30820 = state_30791__$1;
(statearr_30793_30820[(2)] = inst_30773);

(statearr_30793_30820[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (1))){
var inst_30767 = cljs.core.seq.call(null,coll);
var inst_30768 = inst_30767;
var state_30791__$1 = (function (){var statearr_30794 = state_30791;
(statearr_30794[(7)] = inst_30768);

return statearr_30794;
})();
var statearr_30795_30821 = state_30791__$1;
(statearr_30795_30821[(2)] = null);

(statearr_30795_30821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (4))){
var inst_30768 = (state_30791[(7)]);
var inst_30771 = cljs.core.first.call(null,inst_30768);
var state_30791__$1 = state_30791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30791__$1,(7),ch,inst_30771);
} else {
if((state_val_30792 === (13))){
var inst_30785 = (state_30791[(2)]);
var state_30791__$1 = state_30791;
var statearr_30796_30822 = state_30791__$1;
(statearr_30796_30822[(2)] = inst_30785);

(statearr_30796_30822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (6))){
var inst_30776 = (state_30791[(2)]);
var state_30791__$1 = state_30791;
if(cljs.core.truth_(inst_30776)){
var statearr_30797_30823 = state_30791__$1;
(statearr_30797_30823[(1)] = (8));

} else {
var statearr_30798_30824 = state_30791__$1;
(statearr_30798_30824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (3))){
var inst_30789 = (state_30791[(2)]);
var state_30791__$1 = state_30791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30791__$1,inst_30789);
} else {
if((state_val_30792 === (12))){
var state_30791__$1 = state_30791;
var statearr_30799_30825 = state_30791__$1;
(statearr_30799_30825[(2)] = null);

(statearr_30799_30825[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (2))){
var inst_30768 = (state_30791[(7)]);
var state_30791__$1 = state_30791;
if(cljs.core.truth_(inst_30768)){
var statearr_30800_30826 = state_30791__$1;
(statearr_30800_30826[(1)] = (4));

} else {
var statearr_30801_30827 = state_30791__$1;
(statearr_30801_30827[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (11))){
var inst_30782 = cljs.core.async.close_BANG_.call(null,ch);
var state_30791__$1 = state_30791;
var statearr_30802_30828 = state_30791__$1;
(statearr_30802_30828[(2)] = inst_30782);

(statearr_30802_30828[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (9))){
var state_30791__$1 = state_30791;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30803_30829 = state_30791__$1;
(statearr_30803_30829[(1)] = (11));

} else {
var statearr_30804_30830 = state_30791__$1;
(statearr_30804_30830[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (5))){
var inst_30768 = (state_30791[(7)]);
var state_30791__$1 = state_30791;
var statearr_30805_30831 = state_30791__$1;
(statearr_30805_30831[(2)] = inst_30768);

(statearr_30805_30831[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (10))){
var inst_30787 = (state_30791[(2)]);
var state_30791__$1 = state_30791;
var statearr_30806_30832 = state_30791__$1;
(statearr_30806_30832[(2)] = inst_30787);

(statearr_30806_30832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30792 === (8))){
var inst_30768 = (state_30791[(7)]);
var inst_30778 = cljs.core.next.call(null,inst_30768);
var inst_30768__$1 = inst_30778;
var state_30791__$1 = (function (){var statearr_30807 = state_30791;
(statearr_30807[(7)] = inst_30768__$1);

return statearr_30807;
})();
var statearr_30808_30833 = state_30791__$1;
(statearr_30808_30833[(2)] = null);

(statearr_30808_30833[(1)] = (2));


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
});})(c__29971__auto__))
;
return ((function (switch__29859__auto__,c__29971__auto__){
return (function() {
var cljs$core$async$state_machine__29860__auto__ = null;
var cljs$core$async$state_machine__29860__auto____0 = (function (){
var statearr_30812 = [null,null,null,null,null,null,null,null];
(statearr_30812[(0)] = cljs$core$async$state_machine__29860__auto__);

(statearr_30812[(1)] = (1));

return statearr_30812;
});
var cljs$core$async$state_machine__29860__auto____1 = (function (state_30791){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_30791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e30813){if((e30813 instanceof Object)){
var ex__29863__auto__ = e30813;
var statearr_30814_30834 = state_30791;
(statearr_30814_30834[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30835 = state_30791;
state_30791 = G__30835;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$state_machine__29860__auto__ = function(state_30791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29860__auto____1.call(this,state_30791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29860__auto____0;
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29860__auto____1;
return cljs$core$async$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto__))
})();
var state__29973__auto__ = (function (){var statearr_30815 = f__29972__auto__.call(null);
(statearr_30815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto__);

return statearr_30815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto__))
);

return c__29971__auto__;
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
var x__26503__auto__ = (((_ == null))?null:_);
var m__26504__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26503__auto__)]);
if(!((m__26504__auto__ == null))){
return m__26504__auto__.call(null,_);
} else {
var m__26504__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26504__auto____$1 == null))){
return m__26504__auto____$1.call(null,_);
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
var x__26503__auto__ = (((m == null))?null:m);
var m__26504__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26503__auto__)]);
if(!((m__26504__auto__ == null))){
return m__26504__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26504__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26504__auto____$1 == null))){
return m__26504__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__26503__auto__ = (((m == null))?null:m);
var m__26504__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26503__auto__)]);
if(!((m__26504__auto__ == null))){
return m__26504__auto__.call(null,m,ch);
} else {
var m__26504__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26504__auto____$1 == null))){
return m__26504__auto____$1.call(null,m,ch);
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
var x__26503__auto__ = (((m == null))?null:m);
var m__26504__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26503__auto__)]);
if(!((m__26504__auto__ == null))){
return m__26504__auto__.call(null,m);
} else {
var m__26504__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26504__auto____$1 == null))){
return m__26504__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async31057 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31057 = (function (mult,ch,cs,meta31058){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31058 = meta31058;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31059,meta31058__$1){
var self__ = this;
var _31059__$1 = this;
return (new cljs.core.async.t_cljs$core$async31057(self__.mult,self__.ch,self__.cs,meta31058__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31059){
var self__ = this;
var _31059__$1 = this;
return self__.meta31058;
});})(cs))
;

cljs.core.async.t_cljs$core$async31057.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31057.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31057.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31057.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31057.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31057.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31057.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31058","meta31058",-1842527859,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31057.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31057.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31057";

cljs.core.async.t_cljs$core$async31057.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"cljs.core.async/t_cljs$core$async31057");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31057 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31057(mult__$1,ch__$1,cs__$1,meta31058){
return (new cljs.core.async.t_cljs$core$async31057(mult__$1,ch__$1,cs__$1,meta31058));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31057(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29971__auto___31278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto___31278,cs,m,dchan,dctr,done){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto___31278,cs,m,dchan,dctr,done){
return (function (state_31190){
var state_val_31191 = (state_31190[(1)]);
if((state_val_31191 === (7))){
var inst_31186 = (state_31190[(2)]);
var state_31190__$1 = state_31190;
var statearr_31192_31279 = state_31190__$1;
(statearr_31192_31279[(2)] = inst_31186);

(statearr_31192_31279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (20))){
var inst_31091 = (state_31190[(7)]);
var inst_31101 = cljs.core.first.call(null,inst_31091);
var inst_31102 = cljs.core.nth.call(null,inst_31101,(0),null);
var inst_31103 = cljs.core.nth.call(null,inst_31101,(1),null);
var state_31190__$1 = (function (){var statearr_31193 = state_31190;
(statearr_31193[(8)] = inst_31102);

return statearr_31193;
})();
if(cljs.core.truth_(inst_31103)){
var statearr_31194_31280 = state_31190__$1;
(statearr_31194_31280[(1)] = (22));

} else {
var statearr_31195_31281 = state_31190__$1;
(statearr_31195_31281[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (27))){
var inst_31133 = (state_31190[(9)]);
var inst_31131 = (state_31190[(10)]);
var inst_31062 = (state_31190[(11)]);
var inst_31138 = (state_31190[(12)]);
var inst_31138__$1 = cljs.core._nth.call(null,inst_31131,inst_31133);
var inst_31139 = cljs.core.async.put_BANG_.call(null,inst_31138__$1,inst_31062,done);
var state_31190__$1 = (function (){var statearr_31196 = state_31190;
(statearr_31196[(12)] = inst_31138__$1);

return statearr_31196;
})();
if(cljs.core.truth_(inst_31139)){
var statearr_31197_31282 = state_31190__$1;
(statearr_31197_31282[(1)] = (30));

} else {
var statearr_31198_31283 = state_31190__$1;
(statearr_31198_31283[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (1))){
var state_31190__$1 = state_31190;
var statearr_31199_31284 = state_31190__$1;
(statearr_31199_31284[(2)] = null);

(statearr_31199_31284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (24))){
var inst_31091 = (state_31190[(7)]);
var inst_31108 = (state_31190[(2)]);
var inst_31109 = cljs.core.next.call(null,inst_31091);
var inst_31071 = inst_31109;
var inst_31072 = null;
var inst_31073 = (0);
var inst_31074 = (0);
var state_31190__$1 = (function (){var statearr_31200 = state_31190;
(statearr_31200[(13)] = inst_31072);

(statearr_31200[(14)] = inst_31071);

(statearr_31200[(15)] = inst_31074);

(statearr_31200[(16)] = inst_31073);

(statearr_31200[(17)] = inst_31108);

return statearr_31200;
})();
var statearr_31201_31285 = state_31190__$1;
(statearr_31201_31285[(2)] = null);

(statearr_31201_31285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (39))){
var state_31190__$1 = state_31190;
var statearr_31205_31286 = state_31190__$1;
(statearr_31205_31286[(2)] = null);

(statearr_31205_31286[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (4))){
var inst_31062 = (state_31190[(11)]);
var inst_31062__$1 = (state_31190[(2)]);
var inst_31063 = (inst_31062__$1 == null);
var state_31190__$1 = (function (){var statearr_31206 = state_31190;
(statearr_31206[(11)] = inst_31062__$1);

return statearr_31206;
})();
if(cljs.core.truth_(inst_31063)){
var statearr_31207_31287 = state_31190__$1;
(statearr_31207_31287[(1)] = (5));

} else {
var statearr_31208_31288 = state_31190__$1;
(statearr_31208_31288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (15))){
var inst_31072 = (state_31190[(13)]);
var inst_31071 = (state_31190[(14)]);
var inst_31074 = (state_31190[(15)]);
var inst_31073 = (state_31190[(16)]);
var inst_31087 = (state_31190[(2)]);
var inst_31088 = (inst_31074 + (1));
var tmp31202 = inst_31072;
var tmp31203 = inst_31071;
var tmp31204 = inst_31073;
var inst_31071__$1 = tmp31203;
var inst_31072__$1 = tmp31202;
var inst_31073__$1 = tmp31204;
var inst_31074__$1 = inst_31088;
var state_31190__$1 = (function (){var statearr_31209 = state_31190;
(statearr_31209[(13)] = inst_31072__$1);

(statearr_31209[(14)] = inst_31071__$1);

(statearr_31209[(18)] = inst_31087);

(statearr_31209[(15)] = inst_31074__$1);

(statearr_31209[(16)] = inst_31073__$1);

return statearr_31209;
})();
var statearr_31210_31289 = state_31190__$1;
(statearr_31210_31289[(2)] = null);

(statearr_31210_31289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (21))){
var inst_31112 = (state_31190[(2)]);
var state_31190__$1 = state_31190;
var statearr_31214_31290 = state_31190__$1;
(statearr_31214_31290[(2)] = inst_31112);

(statearr_31214_31290[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (31))){
var inst_31138 = (state_31190[(12)]);
var inst_31142 = done.call(null,null);
var inst_31143 = cljs.core.async.untap_STAR_.call(null,m,inst_31138);
var state_31190__$1 = (function (){var statearr_31215 = state_31190;
(statearr_31215[(19)] = inst_31142);

return statearr_31215;
})();
var statearr_31216_31291 = state_31190__$1;
(statearr_31216_31291[(2)] = inst_31143);

(statearr_31216_31291[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (32))){
var inst_31133 = (state_31190[(9)]);
var inst_31130 = (state_31190[(20)]);
var inst_31132 = (state_31190[(21)]);
var inst_31131 = (state_31190[(10)]);
var inst_31145 = (state_31190[(2)]);
var inst_31146 = (inst_31133 + (1));
var tmp31211 = inst_31130;
var tmp31212 = inst_31132;
var tmp31213 = inst_31131;
var inst_31130__$1 = tmp31211;
var inst_31131__$1 = tmp31213;
var inst_31132__$1 = tmp31212;
var inst_31133__$1 = inst_31146;
var state_31190__$1 = (function (){var statearr_31217 = state_31190;
(statearr_31217[(9)] = inst_31133__$1);

(statearr_31217[(20)] = inst_31130__$1);

(statearr_31217[(21)] = inst_31132__$1);

(statearr_31217[(22)] = inst_31145);

(statearr_31217[(10)] = inst_31131__$1);

return statearr_31217;
})();
var statearr_31218_31292 = state_31190__$1;
(statearr_31218_31292[(2)] = null);

(statearr_31218_31292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (40))){
var inst_31158 = (state_31190[(23)]);
var inst_31162 = done.call(null,null);
var inst_31163 = cljs.core.async.untap_STAR_.call(null,m,inst_31158);
var state_31190__$1 = (function (){var statearr_31219 = state_31190;
(statearr_31219[(24)] = inst_31162);

return statearr_31219;
})();
var statearr_31220_31293 = state_31190__$1;
(statearr_31220_31293[(2)] = inst_31163);

(statearr_31220_31293[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (33))){
var inst_31149 = (state_31190[(25)]);
var inst_31151 = cljs.core.chunked_seq_QMARK_.call(null,inst_31149);
var state_31190__$1 = state_31190;
if(inst_31151){
var statearr_31221_31294 = state_31190__$1;
(statearr_31221_31294[(1)] = (36));

} else {
var statearr_31222_31295 = state_31190__$1;
(statearr_31222_31295[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (13))){
var inst_31081 = (state_31190[(26)]);
var inst_31084 = cljs.core.async.close_BANG_.call(null,inst_31081);
var state_31190__$1 = state_31190;
var statearr_31223_31296 = state_31190__$1;
(statearr_31223_31296[(2)] = inst_31084);

(statearr_31223_31296[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (22))){
var inst_31102 = (state_31190[(8)]);
var inst_31105 = cljs.core.async.close_BANG_.call(null,inst_31102);
var state_31190__$1 = state_31190;
var statearr_31224_31297 = state_31190__$1;
(statearr_31224_31297[(2)] = inst_31105);

(statearr_31224_31297[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (36))){
var inst_31149 = (state_31190[(25)]);
var inst_31153 = cljs.core.chunk_first.call(null,inst_31149);
var inst_31154 = cljs.core.chunk_rest.call(null,inst_31149);
var inst_31155 = cljs.core.count.call(null,inst_31153);
var inst_31130 = inst_31154;
var inst_31131 = inst_31153;
var inst_31132 = inst_31155;
var inst_31133 = (0);
var state_31190__$1 = (function (){var statearr_31225 = state_31190;
(statearr_31225[(9)] = inst_31133);

(statearr_31225[(20)] = inst_31130);

(statearr_31225[(21)] = inst_31132);

(statearr_31225[(10)] = inst_31131);

return statearr_31225;
})();
var statearr_31226_31298 = state_31190__$1;
(statearr_31226_31298[(2)] = null);

(statearr_31226_31298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (41))){
var inst_31149 = (state_31190[(25)]);
var inst_31165 = (state_31190[(2)]);
var inst_31166 = cljs.core.next.call(null,inst_31149);
var inst_31130 = inst_31166;
var inst_31131 = null;
var inst_31132 = (0);
var inst_31133 = (0);
var state_31190__$1 = (function (){var statearr_31227 = state_31190;
(statearr_31227[(9)] = inst_31133);

(statearr_31227[(20)] = inst_31130);

(statearr_31227[(21)] = inst_31132);

(statearr_31227[(10)] = inst_31131);

(statearr_31227[(27)] = inst_31165);

return statearr_31227;
})();
var statearr_31228_31299 = state_31190__$1;
(statearr_31228_31299[(2)] = null);

(statearr_31228_31299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (43))){
var state_31190__$1 = state_31190;
var statearr_31229_31300 = state_31190__$1;
(statearr_31229_31300[(2)] = null);

(statearr_31229_31300[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (29))){
var inst_31174 = (state_31190[(2)]);
var state_31190__$1 = state_31190;
var statearr_31230_31301 = state_31190__$1;
(statearr_31230_31301[(2)] = inst_31174);

(statearr_31230_31301[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (44))){
var inst_31183 = (state_31190[(2)]);
var state_31190__$1 = (function (){var statearr_31231 = state_31190;
(statearr_31231[(28)] = inst_31183);

return statearr_31231;
})();
var statearr_31232_31302 = state_31190__$1;
(statearr_31232_31302[(2)] = null);

(statearr_31232_31302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (6))){
var inst_31122 = (state_31190[(29)]);
var inst_31121 = cljs.core.deref.call(null,cs);
var inst_31122__$1 = cljs.core.keys.call(null,inst_31121);
var inst_31123 = cljs.core.count.call(null,inst_31122__$1);
var inst_31124 = cljs.core.reset_BANG_.call(null,dctr,inst_31123);
var inst_31129 = cljs.core.seq.call(null,inst_31122__$1);
var inst_31130 = inst_31129;
var inst_31131 = null;
var inst_31132 = (0);
var inst_31133 = (0);
var state_31190__$1 = (function (){var statearr_31233 = state_31190;
(statearr_31233[(30)] = inst_31124);

(statearr_31233[(9)] = inst_31133);

(statearr_31233[(29)] = inst_31122__$1);

(statearr_31233[(20)] = inst_31130);

(statearr_31233[(21)] = inst_31132);

(statearr_31233[(10)] = inst_31131);

return statearr_31233;
})();
var statearr_31234_31303 = state_31190__$1;
(statearr_31234_31303[(2)] = null);

(statearr_31234_31303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (28))){
var inst_31130 = (state_31190[(20)]);
var inst_31149 = (state_31190[(25)]);
var inst_31149__$1 = cljs.core.seq.call(null,inst_31130);
var state_31190__$1 = (function (){var statearr_31235 = state_31190;
(statearr_31235[(25)] = inst_31149__$1);

return statearr_31235;
})();
if(inst_31149__$1){
var statearr_31236_31304 = state_31190__$1;
(statearr_31236_31304[(1)] = (33));

} else {
var statearr_31237_31305 = state_31190__$1;
(statearr_31237_31305[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (25))){
var inst_31133 = (state_31190[(9)]);
var inst_31132 = (state_31190[(21)]);
var inst_31135 = (inst_31133 < inst_31132);
var inst_31136 = inst_31135;
var state_31190__$1 = state_31190;
if(cljs.core.truth_(inst_31136)){
var statearr_31238_31306 = state_31190__$1;
(statearr_31238_31306[(1)] = (27));

} else {
var statearr_31239_31307 = state_31190__$1;
(statearr_31239_31307[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (34))){
var state_31190__$1 = state_31190;
var statearr_31240_31308 = state_31190__$1;
(statearr_31240_31308[(2)] = null);

(statearr_31240_31308[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (17))){
var state_31190__$1 = state_31190;
var statearr_31241_31309 = state_31190__$1;
(statearr_31241_31309[(2)] = null);

(statearr_31241_31309[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (3))){
var inst_31188 = (state_31190[(2)]);
var state_31190__$1 = state_31190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31190__$1,inst_31188);
} else {
if((state_val_31191 === (12))){
var inst_31117 = (state_31190[(2)]);
var state_31190__$1 = state_31190;
var statearr_31242_31310 = state_31190__$1;
(statearr_31242_31310[(2)] = inst_31117);

(statearr_31242_31310[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (2))){
var state_31190__$1 = state_31190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31190__$1,(4),ch);
} else {
if((state_val_31191 === (23))){
var state_31190__$1 = state_31190;
var statearr_31243_31311 = state_31190__$1;
(statearr_31243_31311[(2)] = null);

(statearr_31243_31311[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (35))){
var inst_31172 = (state_31190[(2)]);
var state_31190__$1 = state_31190;
var statearr_31244_31312 = state_31190__$1;
(statearr_31244_31312[(2)] = inst_31172);

(statearr_31244_31312[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (19))){
var inst_31091 = (state_31190[(7)]);
var inst_31095 = cljs.core.chunk_first.call(null,inst_31091);
var inst_31096 = cljs.core.chunk_rest.call(null,inst_31091);
var inst_31097 = cljs.core.count.call(null,inst_31095);
var inst_31071 = inst_31096;
var inst_31072 = inst_31095;
var inst_31073 = inst_31097;
var inst_31074 = (0);
var state_31190__$1 = (function (){var statearr_31245 = state_31190;
(statearr_31245[(13)] = inst_31072);

(statearr_31245[(14)] = inst_31071);

(statearr_31245[(15)] = inst_31074);

(statearr_31245[(16)] = inst_31073);

return statearr_31245;
})();
var statearr_31246_31313 = state_31190__$1;
(statearr_31246_31313[(2)] = null);

(statearr_31246_31313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (11))){
var inst_31091 = (state_31190[(7)]);
var inst_31071 = (state_31190[(14)]);
var inst_31091__$1 = cljs.core.seq.call(null,inst_31071);
var state_31190__$1 = (function (){var statearr_31247 = state_31190;
(statearr_31247[(7)] = inst_31091__$1);

return statearr_31247;
})();
if(inst_31091__$1){
var statearr_31248_31314 = state_31190__$1;
(statearr_31248_31314[(1)] = (16));

} else {
var statearr_31249_31315 = state_31190__$1;
(statearr_31249_31315[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (9))){
var inst_31119 = (state_31190[(2)]);
var state_31190__$1 = state_31190;
var statearr_31250_31316 = state_31190__$1;
(statearr_31250_31316[(2)] = inst_31119);

(statearr_31250_31316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (5))){
var inst_31069 = cljs.core.deref.call(null,cs);
var inst_31070 = cljs.core.seq.call(null,inst_31069);
var inst_31071 = inst_31070;
var inst_31072 = null;
var inst_31073 = (0);
var inst_31074 = (0);
var state_31190__$1 = (function (){var statearr_31251 = state_31190;
(statearr_31251[(13)] = inst_31072);

(statearr_31251[(14)] = inst_31071);

(statearr_31251[(15)] = inst_31074);

(statearr_31251[(16)] = inst_31073);

return statearr_31251;
})();
var statearr_31252_31317 = state_31190__$1;
(statearr_31252_31317[(2)] = null);

(statearr_31252_31317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (14))){
var state_31190__$1 = state_31190;
var statearr_31253_31318 = state_31190__$1;
(statearr_31253_31318[(2)] = null);

(statearr_31253_31318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (45))){
var inst_31180 = (state_31190[(2)]);
var state_31190__$1 = state_31190;
var statearr_31254_31319 = state_31190__$1;
(statearr_31254_31319[(2)] = inst_31180);

(statearr_31254_31319[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (26))){
var inst_31122 = (state_31190[(29)]);
var inst_31176 = (state_31190[(2)]);
var inst_31177 = cljs.core.seq.call(null,inst_31122);
var state_31190__$1 = (function (){var statearr_31255 = state_31190;
(statearr_31255[(31)] = inst_31176);

return statearr_31255;
})();
if(inst_31177){
var statearr_31256_31320 = state_31190__$1;
(statearr_31256_31320[(1)] = (42));

} else {
var statearr_31257_31321 = state_31190__$1;
(statearr_31257_31321[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (16))){
var inst_31091 = (state_31190[(7)]);
var inst_31093 = cljs.core.chunked_seq_QMARK_.call(null,inst_31091);
var state_31190__$1 = state_31190;
if(inst_31093){
var statearr_31258_31322 = state_31190__$1;
(statearr_31258_31322[(1)] = (19));

} else {
var statearr_31259_31323 = state_31190__$1;
(statearr_31259_31323[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (38))){
var inst_31169 = (state_31190[(2)]);
var state_31190__$1 = state_31190;
var statearr_31260_31324 = state_31190__$1;
(statearr_31260_31324[(2)] = inst_31169);

(statearr_31260_31324[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (30))){
var state_31190__$1 = state_31190;
var statearr_31261_31325 = state_31190__$1;
(statearr_31261_31325[(2)] = null);

(statearr_31261_31325[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (10))){
var inst_31072 = (state_31190[(13)]);
var inst_31074 = (state_31190[(15)]);
var inst_31080 = cljs.core._nth.call(null,inst_31072,inst_31074);
var inst_31081 = cljs.core.nth.call(null,inst_31080,(0),null);
var inst_31082 = cljs.core.nth.call(null,inst_31080,(1),null);
var state_31190__$1 = (function (){var statearr_31262 = state_31190;
(statearr_31262[(26)] = inst_31081);

return statearr_31262;
})();
if(cljs.core.truth_(inst_31082)){
var statearr_31263_31326 = state_31190__$1;
(statearr_31263_31326[(1)] = (13));

} else {
var statearr_31264_31327 = state_31190__$1;
(statearr_31264_31327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (18))){
var inst_31115 = (state_31190[(2)]);
var state_31190__$1 = state_31190;
var statearr_31265_31328 = state_31190__$1;
(statearr_31265_31328[(2)] = inst_31115);

(statearr_31265_31328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (42))){
var state_31190__$1 = state_31190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31190__$1,(45),dchan);
} else {
if((state_val_31191 === (37))){
var inst_31062 = (state_31190[(11)]);
var inst_31158 = (state_31190[(23)]);
var inst_31149 = (state_31190[(25)]);
var inst_31158__$1 = cljs.core.first.call(null,inst_31149);
var inst_31159 = cljs.core.async.put_BANG_.call(null,inst_31158__$1,inst_31062,done);
var state_31190__$1 = (function (){var statearr_31266 = state_31190;
(statearr_31266[(23)] = inst_31158__$1);

return statearr_31266;
})();
if(cljs.core.truth_(inst_31159)){
var statearr_31267_31329 = state_31190__$1;
(statearr_31267_31329[(1)] = (39));

} else {
var statearr_31268_31330 = state_31190__$1;
(statearr_31268_31330[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31191 === (8))){
var inst_31074 = (state_31190[(15)]);
var inst_31073 = (state_31190[(16)]);
var inst_31076 = (inst_31074 < inst_31073);
var inst_31077 = inst_31076;
var state_31190__$1 = state_31190;
if(cljs.core.truth_(inst_31077)){
var statearr_31269_31331 = state_31190__$1;
(statearr_31269_31331[(1)] = (10));

} else {
var statearr_31270_31332 = state_31190__$1;
(statearr_31270_31332[(1)] = (11));

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
});})(c__29971__auto___31278,cs,m,dchan,dctr,done))
;
return ((function (switch__29859__auto__,c__29971__auto___31278,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29860__auto__ = null;
var cljs$core$async$mult_$_state_machine__29860__auto____0 = (function (){
var statearr_31274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31274[(0)] = cljs$core$async$mult_$_state_machine__29860__auto__);

(statearr_31274[(1)] = (1));

return statearr_31274;
});
var cljs$core$async$mult_$_state_machine__29860__auto____1 = (function (state_31190){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_31190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e31275){if((e31275 instanceof Object)){
var ex__29863__auto__ = e31275;
var statearr_31276_31333 = state_31190;
(statearr_31276_31333[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31334 = state_31190;
state_31190 = G__31334;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29860__auto__ = function(state_31190){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29860__auto____1.call(this,state_31190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29860__auto____0;
cljs$core$async$mult_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29860__auto____1;
return cljs$core$async$mult_$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto___31278,cs,m,dchan,dctr,done))
})();
var state__29973__auto__ = (function (){var statearr_31277 = f__29972__auto__.call(null);
(statearr_31277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___31278);

return statearr_31277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto___31278,cs,m,dchan,dctr,done))
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
var args31335 = [];
var len__26910__auto___31338 = arguments.length;
var i__26911__auto___31339 = (0);
while(true){
if((i__26911__auto___31339 < len__26910__auto___31338)){
args31335.push((arguments[i__26911__auto___31339]));

var G__31340 = (i__26911__auto___31339 + (1));
i__26911__auto___31339 = G__31340;
continue;
} else {
}
break;
}

var G__31337 = args31335.length;
switch (G__31337) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31335.length)].join('')));

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
var x__26503__auto__ = (((m == null))?null:m);
var m__26504__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26503__auto__)]);
if(!((m__26504__auto__ == null))){
return m__26504__auto__.call(null,m,ch);
} else {
var m__26504__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26504__auto____$1 == null))){
return m__26504__auto____$1.call(null,m,ch);
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
var x__26503__auto__ = (((m == null))?null:m);
var m__26504__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26503__auto__)]);
if(!((m__26504__auto__ == null))){
return m__26504__auto__.call(null,m,ch);
} else {
var m__26504__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26504__auto____$1 == null))){
return m__26504__auto____$1.call(null,m,ch);
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
var x__26503__auto__ = (((m == null))?null:m);
var m__26504__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26503__auto__)]);
if(!((m__26504__auto__ == null))){
return m__26504__auto__.call(null,m);
} else {
var m__26504__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26504__auto____$1 == null))){
return m__26504__auto____$1.call(null,m);
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
var x__26503__auto__ = (((m == null))?null:m);
var m__26504__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26503__auto__)]);
if(!((m__26504__auto__ == null))){
return m__26504__auto__.call(null,m,state_map);
} else {
var m__26504__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26504__auto____$1 == null))){
return m__26504__auto____$1.call(null,m,state_map);
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
var x__26503__auto__ = (((m == null))?null:m);
var m__26504__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26503__auto__)]);
if(!((m__26504__auto__ == null))){
return m__26504__auto__.call(null,m,mode);
} else {
var m__26504__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26504__auto____$1 == null))){
return m__26504__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26917__auto__ = [];
var len__26910__auto___31352 = arguments.length;
var i__26911__auto___31353 = (0);
while(true){
if((i__26911__auto___31353 < len__26910__auto___31352)){
args__26917__auto__.push((arguments[i__26911__auto___31353]));

var G__31354 = (i__26911__auto___31353 + (1));
i__26911__auto___31353 = G__31354;
continue;
} else {
}
break;
}

var argseq__26918__auto__ = ((((3) < args__26917__auto__.length))?(new cljs.core.IndexedSeq(args__26917__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26918__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31346){
var map__31347 = p__31346;
var map__31347__$1 = ((((!((map__31347 == null)))?((((map__31347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31347):map__31347);
var opts = map__31347__$1;
var statearr_31349_31355 = state;
(statearr_31349_31355[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__31347,map__31347__$1,opts){
return (function (val){
var statearr_31350_31356 = state;
(statearr_31350_31356[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31347,map__31347__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_31351_31357 = state;
(statearr_31351_31357[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31342){
var G__31343 = cljs.core.first.call(null,seq31342);
var seq31342__$1 = cljs.core.next.call(null,seq31342);
var G__31344 = cljs.core.first.call(null,seq31342__$1);
var seq31342__$2 = cljs.core.next.call(null,seq31342__$1);
var G__31345 = cljs.core.first.call(null,seq31342__$2);
var seq31342__$3 = cljs.core.next.call(null,seq31342__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31343,G__31344,G__31345,seq31342__$3);
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
if(typeof cljs.core.async.t_cljs$core$async31521 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31521 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31522){
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
this.meta31522 = meta31522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31523,meta31522__$1){
var self__ = this;
var _31523__$1 = this;
return (new cljs.core.async.t_cljs$core$async31521(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31522__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31521.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31523){
var self__ = this;
var _31523__$1 = this;
return self__.meta31522;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31521.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31521.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31521.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31521.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31521.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31521.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31521.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31521.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31521.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31522","meta31522",-1452654057,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31521.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31521";

cljs.core.async.t_cljs$core$async31521.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"cljs.core.async/t_cljs$core$async31521");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31521 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31521(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31522){
return (new cljs.core.async.t_cljs$core$async31521(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31522));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31521(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29971__auto___31684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto___31684,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto___31684,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31621){
var state_val_31622 = (state_31621[(1)]);
if((state_val_31622 === (7))){
var inst_31539 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
var statearr_31623_31685 = state_31621__$1;
(statearr_31623_31685[(2)] = inst_31539);

(statearr_31623_31685[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (20))){
var inst_31551 = (state_31621[(7)]);
var state_31621__$1 = state_31621;
var statearr_31624_31686 = state_31621__$1;
(statearr_31624_31686[(2)] = inst_31551);

(statearr_31624_31686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (27))){
var state_31621__$1 = state_31621;
var statearr_31625_31687 = state_31621__$1;
(statearr_31625_31687[(2)] = null);

(statearr_31625_31687[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (1))){
var inst_31527 = (state_31621[(8)]);
var inst_31527__$1 = calc_state.call(null);
var inst_31529 = (inst_31527__$1 == null);
var inst_31530 = cljs.core.not.call(null,inst_31529);
var state_31621__$1 = (function (){var statearr_31626 = state_31621;
(statearr_31626[(8)] = inst_31527__$1);

return statearr_31626;
})();
if(inst_31530){
var statearr_31627_31688 = state_31621__$1;
(statearr_31627_31688[(1)] = (2));

} else {
var statearr_31628_31689 = state_31621__$1;
(statearr_31628_31689[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (24))){
var inst_31595 = (state_31621[(9)]);
var inst_31581 = (state_31621[(10)]);
var inst_31574 = (state_31621[(11)]);
var inst_31595__$1 = inst_31574.call(null,inst_31581);
var state_31621__$1 = (function (){var statearr_31629 = state_31621;
(statearr_31629[(9)] = inst_31595__$1);

return statearr_31629;
})();
if(cljs.core.truth_(inst_31595__$1)){
var statearr_31630_31690 = state_31621__$1;
(statearr_31630_31690[(1)] = (29));

} else {
var statearr_31631_31691 = state_31621__$1;
(statearr_31631_31691[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (4))){
var inst_31542 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
if(cljs.core.truth_(inst_31542)){
var statearr_31632_31692 = state_31621__$1;
(statearr_31632_31692[(1)] = (8));

} else {
var statearr_31633_31693 = state_31621__$1;
(statearr_31633_31693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (15))){
var inst_31568 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
if(cljs.core.truth_(inst_31568)){
var statearr_31634_31694 = state_31621__$1;
(statearr_31634_31694[(1)] = (19));

} else {
var statearr_31635_31695 = state_31621__$1;
(statearr_31635_31695[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (21))){
var inst_31573 = (state_31621[(12)]);
var inst_31573__$1 = (state_31621[(2)]);
var inst_31574 = cljs.core.get.call(null,inst_31573__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31575 = cljs.core.get.call(null,inst_31573__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31576 = cljs.core.get.call(null,inst_31573__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31621__$1 = (function (){var statearr_31636 = state_31621;
(statearr_31636[(13)] = inst_31575);

(statearr_31636[(12)] = inst_31573__$1);

(statearr_31636[(11)] = inst_31574);

return statearr_31636;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31621__$1,(22),inst_31576);
} else {
if((state_val_31622 === (31))){
var inst_31603 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
if(cljs.core.truth_(inst_31603)){
var statearr_31637_31696 = state_31621__$1;
(statearr_31637_31696[(1)] = (32));

} else {
var statearr_31638_31697 = state_31621__$1;
(statearr_31638_31697[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (32))){
var inst_31580 = (state_31621[(14)]);
var state_31621__$1 = state_31621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31621__$1,(35),out,inst_31580);
} else {
if((state_val_31622 === (33))){
var inst_31573 = (state_31621[(12)]);
var inst_31551 = inst_31573;
var state_31621__$1 = (function (){var statearr_31639 = state_31621;
(statearr_31639[(7)] = inst_31551);

return statearr_31639;
})();
var statearr_31640_31698 = state_31621__$1;
(statearr_31640_31698[(2)] = null);

(statearr_31640_31698[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (13))){
var inst_31551 = (state_31621[(7)]);
var inst_31558 = inst_31551.cljs$lang$protocol_mask$partition0$;
var inst_31559 = (inst_31558 & (64));
var inst_31560 = inst_31551.cljs$core$ISeq$;
var inst_31561 = (inst_31559) || (inst_31560);
var state_31621__$1 = state_31621;
if(cljs.core.truth_(inst_31561)){
var statearr_31641_31699 = state_31621__$1;
(statearr_31641_31699[(1)] = (16));

} else {
var statearr_31642_31700 = state_31621__$1;
(statearr_31642_31700[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (22))){
var inst_31580 = (state_31621[(14)]);
var inst_31581 = (state_31621[(10)]);
var inst_31579 = (state_31621[(2)]);
var inst_31580__$1 = cljs.core.nth.call(null,inst_31579,(0),null);
var inst_31581__$1 = cljs.core.nth.call(null,inst_31579,(1),null);
var inst_31582 = (inst_31580__$1 == null);
var inst_31583 = cljs.core._EQ_.call(null,inst_31581__$1,change);
var inst_31584 = (inst_31582) || (inst_31583);
var state_31621__$1 = (function (){var statearr_31643 = state_31621;
(statearr_31643[(14)] = inst_31580__$1);

(statearr_31643[(10)] = inst_31581__$1);

return statearr_31643;
})();
if(cljs.core.truth_(inst_31584)){
var statearr_31644_31701 = state_31621__$1;
(statearr_31644_31701[(1)] = (23));

} else {
var statearr_31645_31702 = state_31621__$1;
(statearr_31645_31702[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (36))){
var inst_31573 = (state_31621[(12)]);
var inst_31551 = inst_31573;
var state_31621__$1 = (function (){var statearr_31646 = state_31621;
(statearr_31646[(7)] = inst_31551);

return statearr_31646;
})();
var statearr_31647_31703 = state_31621__$1;
(statearr_31647_31703[(2)] = null);

(statearr_31647_31703[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (29))){
var inst_31595 = (state_31621[(9)]);
var state_31621__$1 = state_31621;
var statearr_31648_31704 = state_31621__$1;
(statearr_31648_31704[(2)] = inst_31595);

(statearr_31648_31704[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (6))){
var state_31621__$1 = state_31621;
var statearr_31649_31705 = state_31621__$1;
(statearr_31649_31705[(2)] = false);

(statearr_31649_31705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (28))){
var inst_31591 = (state_31621[(2)]);
var inst_31592 = calc_state.call(null);
var inst_31551 = inst_31592;
var state_31621__$1 = (function (){var statearr_31650 = state_31621;
(statearr_31650[(7)] = inst_31551);

(statearr_31650[(15)] = inst_31591);

return statearr_31650;
})();
var statearr_31651_31706 = state_31621__$1;
(statearr_31651_31706[(2)] = null);

(statearr_31651_31706[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (25))){
var inst_31617 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
var statearr_31652_31707 = state_31621__$1;
(statearr_31652_31707[(2)] = inst_31617);

(statearr_31652_31707[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (34))){
var inst_31615 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
var statearr_31653_31708 = state_31621__$1;
(statearr_31653_31708[(2)] = inst_31615);

(statearr_31653_31708[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (17))){
var state_31621__$1 = state_31621;
var statearr_31654_31709 = state_31621__$1;
(statearr_31654_31709[(2)] = false);

(statearr_31654_31709[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (3))){
var state_31621__$1 = state_31621;
var statearr_31655_31710 = state_31621__$1;
(statearr_31655_31710[(2)] = false);

(statearr_31655_31710[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (12))){
var inst_31619 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31621__$1,inst_31619);
} else {
if((state_val_31622 === (2))){
var inst_31527 = (state_31621[(8)]);
var inst_31532 = inst_31527.cljs$lang$protocol_mask$partition0$;
var inst_31533 = (inst_31532 & (64));
var inst_31534 = inst_31527.cljs$core$ISeq$;
var inst_31535 = (inst_31533) || (inst_31534);
var state_31621__$1 = state_31621;
if(cljs.core.truth_(inst_31535)){
var statearr_31656_31711 = state_31621__$1;
(statearr_31656_31711[(1)] = (5));

} else {
var statearr_31657_31712 = state_31621__$1;
(statearr_31657_31712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (23))){
var inst_31580 = (state_31621[(14)]);
var inst_31586 = (inst_31580 == null);
var state_31621__$1 = state_31621;
if(cljs.core.truth_(inst_31586)){
var statearr_31658_31713 = state_31621__$1;
(statearr_31658_31713[(1)] = (26));

} else {
var statearr_31659_31714 = state_31621__$1;
(statearr_31659_31714[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (35))){
var inst_31606 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
if(cljs.core.truth_(inst_31606)){
var statearr_31660_31715 = state_31621__$1;
(statearr_31660_31715[(1)] = (36));

} else {
var statearr_31661_31716 = state_31621__$1;
(statearr_31661_31716[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (19))){
var inst_31551 = (state_31621[(7)]);
var inst_31570 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31551);
var state_31621__$1 = state_31621;
var statearr_31662_31717 = state_31621__$1;
(statearr_31662_31717[(2)] = inst_31570);

(statearr_31662_31717[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (11))){
var inst_31551 = (state_31621[(7)]);
var inst_31555 = (inst_31551 == null);
var inst_31556 = cljs.core.not.call(null,inst_31555);
var state_31621__$1 = state_31621;
if(inst_31556){
var statearr_31663_31718 = state_31621__$1;
(statearr_31663_31718[(1)] = (13));

} else {
var statearr_31664_31719 = state_31621__$1;
(statearr_31664_31719[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (9))){
var inst_31527 = (state_31621[(8)]);
var state_31621__$1 = state_31621;
var statearr_31665_31720 = state_31621__$1;
(statearr_31665_31720[(2)] = inst_31527);

(statearr_31665_31720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (5))){
var state_31621__$1 = state_31621;
var statearr_31666_31721 = state_31621__$1;
(statearr_31666_31721[(2)] = true);

(statearr_31666_31721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (14))){
var state_31621__$1 = state_31621;
var statearr_31667_31722 = state_31621__$1;
(statearr_31667_31722[(2)] = false);

(statearr_31667_31722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (26))){
var inst_31581 = (state_31621[(10)]);
var inst_31588 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31581);
var state_31621__$1 = state_31621;
var statearr_31668_31723 = state_31621__$1;
(statearr_31668_31723[(2)] = inst_31588);

(statearr_31668_31723[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (16))){
var state_31621__$1 = state_31621;
var statearr_31669_31724 = state_31621__$1;
(statearr_31669_31724[(2)] = true);

(statearr_31669_31724[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (38))){
var inst_31611 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
var statearr_31670_31725 = state_31621__$1;
(statearr_31670_31725[(2)] = inst_31611);

(statearr_31670_31725[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (30))){
var inst_31575 = (state_31621[(13)]);
var inst_31581 = (state_31621[(10)]);
var inst_31574 = (state_31621[(11)]);
var inst_31598 = cljs.core.empty_QMARK_.call(null,inst_31574);
var inst_31599 = inst_31575.call(null,inst_31581);
var inst_31600 = cljs.core.not.call(null,inst_31599);
var inst_31601 = (inst_31598) && (inst_31600);
var state_31621__$1 = state_31621;
var statearr_31671_31726 = state_31621__$1;
(statearr_31671_31726[(2)] = inst_31601);

(statearr_31671_31726[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (10))){
var inst_31527 = (state_31621[(8)]);
var inst_31547 = (state_31621[(2)]);
var inst_31548 = cljs.core.get.call(null,inst_31547,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31549 = cljs.core.get.call(null,inst_31547,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31550 = cljs.core.get.call(null,inst_31547,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31551 = inst_31527;
var state_31621__$1 = (function (){var statearr_31672 = state_31621;
(statearr_31672[(7)] = inst_31551);

(statearr_31672[(16)] = inst_31549);

(statearr_31672[(17)] = inst_31548);

(statearr_31672[(18)] = inst_31550);

return statearr_31672;
})();
var statearr_31673_31727 = state_31621__$1;
(statearr_31673_31727[(2)] = null);

(statearr_31673_31727[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (18))){
var inst_31565 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
var statearr_31674_31728 = state_31621__$1;
(statearr_31674_31728[(2)] = inst_31565);

(statearr_31674_31728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (37))){
var state_31621__$1 = state_31621;
var statearr_31675_31729 = state_31621__$1;
(statearr_31675_31729[(2)] = null);

(statearr_31675_31729[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (8))){
var inst_31527 = (state_31621[(8)]);
var inst_31544 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31527);
var state_31621__$1 = state_31621;
var statearr_31676_31730 = state_31621__$1;
(statearr_31676_31730[(2)] = inst_31544);

(statearr_31676_31730[(1)] = (10));


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
});})(c__29971__auto___31684,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29859__auto__,c__29971__auto___31684,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29860__auto__ = null;
var cljs$core$async$mix_$_state_machine__29860__auto____0 = (function (){
var statearr_31680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31680[(0)] = cljs$core$async$mix_$_state_machine__29860__auto__);

(statearr_31680[(1)] = (1));

return statearr_31680;
});
var cljs$core$async$mix_$_state_machine__29860__auto____1 = (function (state_31621){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_31621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e31681){if((e31681 instanceof Object)){
var ex__29863__auto__ = e31681;
var statearr_31682_31731 = state_31621;
(statearr_31682_31731[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31732 = state_31621;
state_31621 = G__31732;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29860__auto__ = function(state_31621){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29860__auto____1.call(this,state_31621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29860__auto____0;
cljs$core$async$mix_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29860__auto____1;
return cljs$core$async$mix_$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto___31684,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29973__auto__ = (function (){var statearr_31683 = f__29972__auto__.call(null);
(statearr_31683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___31684);

return statearr_31683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto___31684,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__26503__auto__ = (((p == null))?null:p);
var m__26504__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26503__auto__)]);
if(!((m__26504__auto__ == null))){
return m__26504__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26504__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26504__auto____$1 == null))){
return m__26504__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__26503__auto__ = (((p == null))?null:p);
var m__26504__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26503__auto__)]);
if(!((m__26504__auto__ == null))){
return m__26504__auto__.call(null,p,v,ch);
} else {
var m__26504__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26504__auto____$1 == null))){
return m__26504__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31733 = [];
var len__26910__auto___31736 = arguments.length;
var i__26911__auto___31737 = (0);
while(true){
if((i__26911__auto___31737 < len__26910__auto___31736)){
args31733.push((arguments[i__26911__auto___31737]));

var G__31738 = (i__26911__auto___31737 + (1));
i__26911__auto___31737 = G__31738;
continue;
} else {
}
break;
}

var G__31735 = args31733.length;
switch (G__31735) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31733.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26503__auto__ = (((p == null))?null:p);
var m__26504__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26503__auto__)]);
if(!((m__26504__auto__ == null))){
return m__26504__auto__.call(null,p);
} else {
var m__26504__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26504__auto____$1 == null))){
return m__26504__auto____$1.call(null,p);
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
var x__26503__auto__ = (((p == null))?null:p);
var m__26504__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26503__auto__)]);
if(!((m__26504__auto__ == null))){
return m__26504__auto__.call(null,p,v);
} else {
var m__26504__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26504__auto____$1 == null))){
return m__26504__auto____$1.call(null,p,v);
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
var args31741 = [];
var len__26910__auto___31866 = arguments.length;
var i__26911__auto___31867 = (0);
while(true){
if((i__26911__auto___31867 < len__26910__auto___31866)){
args31741.push((arguments[i__26911__auto___31867]));

var G__31868 = (i__26911__auto___31867 + (1));
i__26911__auto___31867 = G__31868;
continue;
} else {
}
break;
}

var G__31743 = args31741.length;
switch (G__31743) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31741.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25840__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25840__auto__,mults){
return (function (p1__31740_SHARP_){
if(cljs.core.truth_(p1__31740_SHARP_.call(null,topic))){
return p1__31740_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31740_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25840__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31744 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31744 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31745){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31745 = meta31745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31746,meta31745__$1){
var self__ = this;
var _31746__$1 = this;
return (new cljs.core.async.t_cljs$core$async31744(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31745__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31744.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31746){
var self__ = this;
var _31746__$1 = this;
return self__.meta31745;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31744.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31744.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31744.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31744.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31744.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31744.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31744.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31744.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31745","meta31745",-2044338226,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31744";

cljs.core.async.t_cljs$core$async31744.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"cljs.core.async/t_cljs$core$async31744");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31744 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31744(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31745){
return (new cljs.core.async.t_cljs$core$async31744(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31745));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31744(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29971__auto___31870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto___31870,mults,ensure_mult,p){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto___31870,mults,ensure_mult,p){
return (function (state_31818){
var state_val_31819 = (state_31818[(1)]);
if((state_val_31819 === (7))){
var inst_31814 = (state_31818[(2)]);
var state_31818__$1 = state_31818;
var statearr_31820_31871 = state_31818__$1;
(statearr_31820_31871[(2)] = inst_31814);

(statearr_31820_31871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (20))){
var state_31818__$1 = state_31818;
var statearr_31821_31872 = state_31818__$1;
(statearr_31821_31872[(2)] = null);

(statearr_31821_31872[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (1))){
var state_31818__$1 = state_31818;
var statearr_31822_31873 = state_31818__$1;
(statearr_31822_31873[(2)] = null);

(statearr_31822_31873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (24))){
var inst_31797 = (state_31818[(7)]);
var inst_31806 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31797);
var state_31818__$1 = state_31818;
var statearr_31823_31874 = state_31818__$1;
(statearr_31823_31874[(2)] = inst_31806);

(statearr_31823_31874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (4))){
var inst_31749 = (state_31818[(8)]);
var inst_31749__$1 = (state_31818[(2)]);
var inst_31750 = (inst_31749__$1 == null);
var state_31818__$1 = (function (){var statearr_31824 = state_31818;
(statearr_31824[(8)] = inst_31749__$1);

return statearr_31824;
})();
if(cljs.core.truth_(inst_31750)){
var statearr_31825_31875 = state_31818__$1;
(statearr_31825_31875[(1)] = (5));

} else {
var statearr_31826_31876 = state_31818__$1;
(statearr_31826_31876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (15))){
var inst_31791 = (state_31818[(2)]);
var state_31818__$1 = state_31818;
var statearr_31827_31877 = state_31818__$1;
(statearr_31827_31877[(2)] = inst_31791);

(statearr_31827_31877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (21))){
var inst_31811 = (state_31818[(2)]);
var state_31818__$1 = (function (){var statearr_31828 = state_31818;
(statearr_31828[(9)] = inst_31811);

return statearr_31828;
})();
var statearr_31829_31878 = state_31818__$1;
(statearr_31829_31878[(2)] = null);

(statearr_31829_31878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (13))){
var inst_31773 = (state_31818[(10)]);
var inst_31775 = cljs.core.chunked_seq_QMARK_.call(null,inst_31773);
var state_31818__$1 = state_31818;
if(inst_31775){
var statearr_31830_31879 = state_31818__$1;
(statearr_31830_31879[(1)] = (16));

} else {
var statearr_31831_31880 = state_31818__$1;
(statearr_31831_31880[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (22))){
var inst_31803 = (state_31818[(2)]);
var state_31818__$1 = state_31818;
if(cljs.core.truth_(inst_31803)){
var statearr_31832_31881 = state_31818__$1;
(statearr_31832_31881[(1)] = (23));

} else {
var statearr_31833_31882 = state_31818__$1;
(statearr_31833_31882[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (6))){
var inst_31797 = (state_31818[(7)]);
var inst_31749 = (state_31818[(8)]);
var inst_31799 = (state_31818[(11)]);
var inst_31797__$1 = topic_fn.call(null,inst_31749);
var inst_31798 = cljs.core.deref.call(null,mults);
var inst_31799__$1 = cljs.core.get.call(null,inst_31798,inst_31797__$1);
var state_31818__$1 = (function (){var statearr_31834 = state_31818;
(statearr_31834[(7)] = inst_31797__$1);

(statearr_31834[(11)] = inst_31799__$1);

return statearr_31834;
})();
if(cljs.core.truth_(inst_31799__$1)){
var statearr_31835_31883 = state_31818__$1;
(statearr_31835_31883[(1)] = (19));

} else {
var statearr_31836_31884 = state_31818__$1;
(statearr_31836_31884[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (25))){
var inst_31808 = (state_31818[(2)]);
var state_31818__$1 = state_31818;
var statearr_31837_31885 = state_31818__$1;
(statearr_31837_31885[(2)] = inst_31808);

(statearr_31837_31885[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (17))){
var inst_31773 = (state_31818[(10)]);
var inst_31782 = cljs.core.first.call(null,inst_31773);
var inst_31783 = cljs.core.async.muxch_STAR_.call(null,inst_31782);
var inst_31784 = cljs.core.async.close_BANG_.call(null,inst_31783);
var inst_31785 = cljs.core.next.call(null,inst_31773);
var inst_31759 = inst_31785;
var inst_31760 = null;
var inst_31761 = (0);
var inst_31762 = (0);
var state_31818__$1 = (function (){var statearr_31838 = state_31818;
(statearr_31838[(12)] = inst_31761);

(statearr_31838[(13)] = inst_31760);

(statearr_31838[(14)] = inst_31759);

(statearr_31838[(15)] = inst_31784);

(statearr_31838[(16)] = inst_31762);

return statearr_31838;
})();
var statearr_31839_31886 = state_31818__$1;
(statearr_31839_31886[(2)] = null);

(statearr_31839_31886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (3))){
var inst_31816 = (state_31818[(2)]);
var state_31818__$1 = state_31818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31818__$1,inst_31816);
} else {
if((state_val_31819 === (12))){
var inst_31793 = (state_31818[(2)]);
var state_31818__$1 = state_31818;
var statearr_31840_31887 = state_31818__$1;
(statearr_31840_31887[(2)] = inst_31793);

(statearr_31840_31887[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (2))){
var state_31818__$1 = state_31818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31818__$1,(4),ch);
} else {
if((state_val_31819 === (23))){
var state_31818__$1 = state_31818;
var statearr_31841_31888 = state_31818__$1;
(statearr_31841_31888[(2)] = null);

(statearr_31841_31888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (19))){
var inst_31749 = (state_31818[(8)]);
var inst_31799 = (state_31818[(11)]);
var inst_31801 = cljs.core.async.muxch_STAR_.call(null,inst_31799);
var state_31818__$1 = state_31818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31818__$1,(22),inst_31801,inst_31749);
} else {
if((state_val_31819 === (11))){
var inst_31773 = (state_31818[(10)]);
var inst_31759 = (state_31818[(14)]);
var inst_31773__$1 = cljs.core.seq.call(null,inst_31759);
var state_31818__$1 = (function (){var statearr_31842 = state_31818;
(statearr_31842[(10)] = inst_31773__$1);

return statearr_31842;
})();
if(inst_31773__$1){
var statearr_31843_31889 = state_31818__$1;
(statearr_31843_31889[(1)] = (13));

} else {
var statearr_31844_31890 = state_31818__$1;
(statearr_31844_31890[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (9))){
var inst_31795 = (state_31818[(2)]);
var state_31818__$1 = state_31818;
var statearr_31845_31891 = state_31818__$1;
(statearr_31845_31891[(2)] = inst_31795);

(statearr_31845_31891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (5))){
var inst_31756 = cljs.core.deref.call(null,mults);
var inst_31757 = cljs.core.vals.call(null,inst_31756);
var inst_31758 = cljs.core.seq.call(null,inst_31757);
var inst_31759 = inst_31758;
var inst_31760 = null;
var inst_31761 = (0);
var inst_31762 = (0);
var state_31818__$1 = (function (){var statearr_31846 = state_31818;
(statearr_31846[(12)] = inst_31761);

(statearr_31846[(13)] = inst_31760);

(statearr_31846[(14)] = inst_31759);

(statearr_31846[(16)] = inst_31762);

return statearr_31846;
})();
var statearr_31847_31892 = state_31818__$1;
(statearr_31847_31892[(2)] = null);

(statearr_31847_31892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (14))){
var state_31818__$1 = state_31818;
var statearr_31851_31893 = state_31818__$1;
(statearr_31851_31893[(2)] = null);

(statearr_31851_31893[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (16))){
var inst_31773 = (state_31818[(10)]);
var inst_31777 = cljs.core.chunk_first.call(null,inst_31773);
var inst_31778 = cljs.core.chunk_rest.call(null,inst_31773);
var inst_31779 = cljs.core.count.call(null,inst_31777);
var inst_31759 = inst_31778;
var inst_31760 = inst_31777;
var inst_31761 = inst_31779;
var inst_31762 = (0);
var state_31818__$1 = (function (){var statearr_31852 = state_31818;
(statearr_31852[(12)] = inst_31761);

(statearr_31852[(13)] = inst_31760);

(statearr_31852[(14)] = inst_31759);

(statearr_31852[(16)] = inst_31762);

return statearr_31852;
})();
var statearr_31853_31894 = state_31818__$1;
(statearr_31853_31894[(2)] = null);

(statearr_31853_31894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (10))){
var inst_31761 = (state_31818[(12)]);
var inst_31760 = (state_31818[(13)]);
var inst_31759 = (state_31818[(14)]);
var inst_31762 = (state_31818[(16)]);
var inst_31767 = cljs.core._nth.call(null,inst_31760,inst_31762);
var inst_31768 = cljs.core.async.muxch_STAR_.call(null,inst_31767);
var inst_31769 = cljs.core.async.close_BANG_.call(null,inst_31768);
var inst_31770 = (inst_31762 + (1));
var tmp31848 = inst_31761;
var tmp31849 = inst_31760;
var tmp31850 = inst_31759;
var inst_31759__$1 = tmp31850;
var inst_31760__$1 = tmp31849;
var inst_31761__$1 = tmp31848;
var inst_31762__$1 = inst_31770;
var state_31818__$1 = (function (){var statearr_31854 = state_31818;
(statearr_31854[(12)] = inst_31761__$1);

(statearr_31854[(13)] = inst_31760__$1);

(statearr_31854[(14)] = inst_31759__$1);

(statearr_31854[(17)] = inst_31769);

(statearr_31854[(16)] = inst_31762__$1);

return statearr_31854;
})();
var statearr_31855_31895 = state_31818__$1;
(statearr_31855_31895[(2)] = null);

(statearr_31855_31895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (18))){
var inst_31788 = (state_31818[(2)]);
var state_31818__$1 = state_31818;
var statearr_31856_31896 = state_31818__$1;
(statearr_31856_31896[(2)] = inst_31788);

(statearr_31856_31896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (8))){
var inst_31761 = (state_31818[(12)]);
var inst_31762 = (state_31818[(16)]);
var inst_31764 = (inst_31762 < inst_31761);
var inst_31765 = inst_31764;
var state_31818__$1 = state_31818;
if(cljs.core.truth_(inst_31765)){
var statearr_31857_31897 = state_31818__$1;
(statearr_31857_31897[(1)] = (10));

} else {
var statearr_31858_31898 = state_31818__$1;
(statearr_31858_31898[(1)] = (11));

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
});})(c__29971__auto___31870,mults,ensure_mult,p))
;
return ((function (switch__29859__auto__,c__29971__auto___31870,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29860__auto__ = null;
var cljs$core$async$state_machine__29860__auto____0 = (function (){
var statearr_31862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31862[(0)] = cljs$core$async$state_machine__29860__auto__);

(statearr_31862[(1)] = (1));

return statearr_31862;
});
var cljs$core$async$state_machine__29860__auto____1 = (function (state_31818){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_31818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e31863){if((e31863 instanceof Object)){
var ex__29863__auto__ = e31863;
var statearr_31864_31899 = state_31818;
(statearr_31864_31899[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31900 = state_31818;
state_31818 = G__31900;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$state_machine__29860__auto__ = function(state_31818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29860__auto____1.call(this,state_31818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29860__auto____0;
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29860__auto____1;
return cljs$core$async$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto___31870,mults,ensure_mult,p))
})();
var state__29973__auto__ = (function (){var statearr_31865 = f__29972__auto__.call(null);
(statearr_31865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___31870);

return statearr_31865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto___31870,mults,ensure_mult,p))
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
var args31901 = [];
var len__26910__auto___31904 = arguments.length;
var i__26911__auto___31905 = (0);
while(true){
if((i__26911__auto___31905 < len__26910__auto___31904)){
args31901.push((arguments[i__26911__auto___31905]));

var G__31906 = (i__26911__auto___31905 + (1));
i__26911__auto___31905 = G__31906;
continue;
} else {
}
break;
}

var G__31903 = args31901.length;
switch (G__31903) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31901.length)].join('')));

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
var args31908 = [];
var len__26910__auto___31911 = arguments.length;
var i__26911__auto___31912 = (0);
while(true){
if((i__26911__auto___31912 < len__26910__auto___31911)){
args31908.push((arguments[i__26911__auto___31912]));

var G__31913 = (i__26911__auto___31912 + (1));
i__26911__auto___31912 = G__31913;
continue;
} else {
}
break;
}

var G__31910 = args31908.length;
switch (G__31910) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31908.length)].join('')));

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
var args31915 = [];
var len__26910__auto___31986 = arguments.length;
var i__26911__auto___31987 = (0);
while(true){
if((i__26911__auto___31987 < len__26910__auto___31986)){
args31915.push((arguments[i__26911__auto___31987]));

var G__31988 = (i__26911__auto___31987 + (1));
i__26911__auto___31987 = G__31988;
continue;
} else {
}
break;
}

var G__31917 = args31915.length;
switch (G__31917) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31915.length)].join('')));

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
var c__29971__auto___31990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto___31990,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto___31990,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31956){
var state_val_31957 = (state_31956[(1)]);
if((state_val_31957 === (7))){
var state_31956__$1 = state_31956;
var statearr_31958_31991 = state_31956__$1;
(statearr_31958_31991[(2)] = null);

(statearr_31958_31991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (1))){
var state_31956__$1 = state_31956;
var statearr_31959_31992 = state_31956__$1;
(statearr_31959_31992[(2)] = null);

(statearr_31959_31992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (4))){
var inst_31920 = (state_31956[(7)]);
var inst_31922 = (inst_31920 < cnt);
var state_31956__$1 = state_31956;
if(cljs.core.truth_(inst_31922)){
var statearr_31960_31993 = state_31956__$1;
(statearr_31960_31993[(1)] = (6));

} else {
var statearr_31961_31994 = state_31956__$1;
(statearr_31961_31994[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (15))){
var inst_31952 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
var statearr_31962_31995 = state_31956__$1;
(statearr_31962_31995[(2)] = inst_31952);

(statearr_31962_31995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (13))){
var inst_31945 = cljs.core.async.close_BANG_.call(null,out);
var state_31956__$1 = state_31956;
var statearr_31963_31996 = state_31956__$1;
(statearr_31963_31996[(2)] = inst_31945);

(statearr_31963_31996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (6))){
var state_31956__$1 = state_31956;
var statearr_31964_31997 = state_31956__$1;
(statearr_31964_31997[(2)] = null);

(statearr_31964_31997[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (3))){
var inst_31954 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31956__$1,inst_31954);
} else {
if((state_val_31957 === (12))){
var inst_31942 = (state_31956[(8)]);
var inst_31942__$1 = (state_31956[(2)]);
var inst_31943 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31942__$1);
var state_31956__$1 = (function (){var statearr_31965 = state_31956;
(statearr_31965[(8)] = inst_31942__$1);

return statearr_31965;
})();
if(cljs.core.truth_(inst_31943)){
var statearr_31966_31998 = state_31956__$1;
(statearr_31966_31998[(1)] = (13));

} else {
var statearr_31967_31999 = state_31956__$1;
(statearr_31967_31999[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (2))){
var inst_31919 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31920 = (0);
var state_31956__$1 = (function (){var statearr_31968 = state_31956;
(statearr_31968[(7)] = inst_31920);

(statearr_31968[(9)] = inst_31919);

return statearr_31968;
})();
var statearr_31969_32000 = state_31956__$1;
(statearr_31969_32000[(2)] = null);

(statearr_31969_32000[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (11))){
var inst_31920 = (state_31956[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31956,(10),Object,null,(9));
var inst_31929 = chs__$1.call(null,inst_31920);
var inst_31930 = done.call(null,inst_31920);
var inst_31931 = cljs.core.async.take_BANG_.call(null,inst_31929,inst_31930);
var state_31956__$1 = state_31956;
var statearr_31970_32001 = state_31956__$1;
(statearr_31970_32001[(2)] = inst_31931);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31956__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (9))){
var inst_31920 = (state_31956[(7)]);
var inst_31933 = (state_31956[(2)]);
var inst_31934 = (inst_31920 + (1));
var inst_31920__$1 = inst_31934;
var state_31956__$1 = (function (){var statearr_31971 = state_31956;
(statearr_31971[(10)] = inst_31933);

(statearr_31971[(7)] = inst_31920__$1);

return statearr_31971;
})();
var statearr_31972_32002 = state_31956__$1;
(statearr_31972_32002[(2)] = null);

(statearr_31972_32002[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (5))){
var inst_31940 = (state_31956[(2)]);
var state_31956__$1 = (function (){var statearr_31973 = state_31956;
(statearr_31973[(11)] = inst_31940);

return statearr_31973;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31956__$1,(12),dchan);
} else {
if((state_val_31957 === (14))){
var inst_31942 = (state_31956[(8)]);
var inst_31947 = cljs.core.apply.call(null,f,inst_31942);
var state_31956__$1 = state_31956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31956__$1,(16),out,inst_31947);
} else {
if((state_val_31957 === (16))){
var inst_31949 = (state_31956[(2)]);
var state_31956__$1 = (function (){var statearr_31974 = state_31956;
(statearr_31974[(12)] = inst_31949);

return statearr_31974;
})();
var statearr_31975_32003 = state_31956__$1;
(statearr_31975_32003[(2)] = null);

(statearr_31975_32003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (10))){
var inst_31924 = (state_31956[(2)]);
var inst_31925 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31956__$1 = (function (){var statearr_31976 = state_31956;
(statearr_31976[(13)] = inst_31924);

return statearr_31976;
})();
var statearr_31977_32004 = state_31956__$1;
(statearr_31977_32004[(2)] = inst_31925);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31956__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (8))){
var inst_31938 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
var statearr_31978_32005 = state_31956__$1;
(statearr_31978_32005[(2)] = inst_31938);

(statearr_31978_32005[(1)] = (5));


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
});})(c__29971__auto___31990,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29859__auto__,c__29971__auto___31990,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29860__auto__ = null;
var cljs$core$async$state_machine__29860__auto____0 = (function (){
var statearr_31982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31982[(0)] = cljs$core$async$state_machine__29860__auto__);

(statearr_31982[(1)] = (1));

return statearr_31982;
});
var cljs$core$async$state_machine__29860__auto____1 = (function (state_31956){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_31956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e31983){if((e31983 instanceof Object)){
var ex__29863__auto__ = e31983;
var statearr_31984_32006 = state_31956;
(statearr_31984_32006[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32007 = state_31956;
state_31956 = G__32007;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$state_machine__29860__auto__ = function(state_31956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29860__auto____1.call(this,state_31956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29860__auto____0;
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29860__auto____1;
return cljs$core$async$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto___31990,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29973__auto__ = (function (){var statearr_31985 = f__29972__auto__.call(null);
(statearr_31985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___31990);

return statearr_31985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto___31990,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args32009 = [];
var len__26910__auto___32065 = arguments.length;
var i__26911__auto___32066 = (0);
while(true){
if((i__26911__auto___32066 < len__26910__auto___32065)){
args32009.push((arguments[i__26911__auto___32066]));

var G__32067 = (i__26911__auto___32066 + (1));
i__26911__auto___32066 = G__32067;
continue;
} else {
}
break;
}

var G__32011 = args32009.length;
switch (G__32011) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32009.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29971__auto___32069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto___32069,out){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto___32069,out){
return (function (state_32041){
var state_val_32042 = (state_32041[(1)]);
if((state_val_32042 === (7))){
var inst_32020 = (state_32041[(7)]);
var inst_32021 = (state_32041[(8)]);
var inst_32020__$1 = (state_32041[(2)]);
var inst_32021__$1 = cljs.core.nth.call(null,inst_32020__$1,(0),null);
var inst_32022 = cljs.core.nth.call(null,inst_32020__$1,(1),null);
var inst_32023 = (inst_32021__$1 == null);
var state_32041__$1 = (function (){var statearr_32043 = state_32041;
(statearr_32043[(7)] = inst_32020__$1);

(statearr_32043[(8)] = inst_32021__$1);

(statearr_32043[(9)] = inst_32022);

return statearr_32043;
})();
if(cljs.core.truth_(inst_32023)){
var statearr_32044_32070 = state_32041__$1;
(statearr_32044_32070[(1)] = (8));

} else {
var statearr_32045_32071 = state_32041__$1;
(statearr_32045_32071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (1))){
var inst_32012 = cljs.core.vec.call(null,chs);
var inst_32013 = inst_32012;
var state_32041__$1 = (function (){var statearr_32046 = state_32041;
(statearr_32046[(10)] = inst_32013);

return statearr_32046;
})();
var statearr_32047_32072 = state_32041__$1;
(statearr_32047_32072[(2)] = null);

(statearr_32047_32072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (4))){
var inst_32013 = (state_32041[(10)]);
var state_32041__$1 = state_32041;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32041__$1,(7),inst_32013);
} else {
if((state_val_32042 === (6))){
var inst_32037 = (state_32041[(2)]);
var state_32041__$1 = state_32041;
var statearr_32048_32073 = state_32041__$1;
(statearr_32048_32073[(2)] = inst_32037);

(statearr_32048_32073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (3))){
var inst_32039 = (state_32041[(2)]);
var state_32041__$1 = state_32041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32041__$1,inst_32039);
} else {
if((state_val_32042 === (2))){
var inst_32013 = (state_32041[(10)]);
var inst_32015 = cljs.core.count.call(null,inst_32013);
var inst_32016 = (inst_32015 > (0));
var state_32041__$1 = state_32041;
if(cljs.core.truth_(inst_32016)){
var statearr_32050_32074 = state_32041__$1;
(statearr_32050_32074[(1)] = (4));

} else {
var statearr_32051_32075 = state_32041__$1;
(statearr_32051_32075[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (11))){
var inst_32013 = (state_32041[(10)]);
var inst_32030 = (state_32041[(2)]);
var tmp32049 = inst_32013;
var inst_32013__$1 = tmp32049;
var state_32041__$1 = (function (){var statearr_32052 = state_32041;
(statearr_32052[(11)] = inst_32030);

(statearr_32052[(10)] = inst_32013__$1);

return statearr_32052;
})();
var statearr_32053_32076 = state_32041__$1;
(statearr_32053_32076[(2)] = null);

(statearr_32053_32076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (9))){
var inst_32021 = (state_32041[(8)]);
var state_32041__$1 = state_32041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32041__$1,(11),out,inst_32021);
} else {
if((state_val_32042 === (5))){
var inst_32035 = cljs.core.async.close_BANG_.call(null,out);
var state_32041__$1 = state_32041;
var statearr_32054_32077 = state_32041__$1;
(statearr_32054_32077[(2)] = inst_32035);

(statearr_32054_32077[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (10))){
var inst_32033 = (state_32041[(2)]);
var state_32041__$1 = state_32041;
var statearr_32055_32078 = state_32041__$1;
(statearr_32055_32078[(2)] = inst_32033);

(statearr_32055_32078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (8))){
var inst_32020 = (state_32041[(7)]);
var inst_32021 = (state_32041[(8)]);
var inst_32022 = (state_32041[(9)]);
var inst_32013 = (state_32041[(10)]);
var inst_32025 = (function (){var cs = inst_32013;
var vec__32018 = inst_32020;
var v = inst_32021;
var c = inst_32022;
return ((function (cs,vec__32018,v,c,inst_32020,inst_32021,inst_32022,inst_32013,state_val_32042,c__29971__auto___32069,out){
return (function (p1__32008_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32008_SHARP_);
});
;})(cs,vec__32018,v,c,inst_32020,inst_32021,inst_32022,inst_32013,state_val_32042,c__29971__auto___32069,out))
})();
var inst_32026 = cljs.core.filterv.call(null,inst_32025,inst_32013);
var inst_32013__$1 = inst_32026;
var state_32041__$1 = (function (){var statearr_32056 = state_32041;
(statearr_32056[(10)] = inst_32013__$1);

return statearr_32056;
})();
var statearr_32057_32079 = state_32041__$1;
(statearr_32057_32079[(2)] = null);

(statearr_32057_32079[(1)] = (2));


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
});})(c__29971__auto___32069,out))
;
return ((function (switch__29859__auto__,c__29971__auto___32069,out){
return (function() {
var cljs$core$async$state_machine__29860__auto__ = null;
var cljs$core$async$state_machine__29860__auto____0 = (function (){
var statearr_32061 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32061[(0)] = cljs$core$async$state_machine__29860__auto__);

(statearr_32061[(1)] = (1));

return statearr_32061;
});
var cljs$core$async$state_machine__29860__auto____1 = (function (state_32041){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_32041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e32062){if((e32062 instanceof Object)){
var ex__29863__auto__ = e32062;
var statearr_32063_32080 = state_32041;
(statearr_32063_32080[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32081 = state_32041;
state_32041 = G__32081;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$state_machine__29860__auto__ = function(state_32041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29860__auto____1.call(this,state_32041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29860__auto____0;
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29860__auto____1;
return cljs$core$async$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto___32069,out))
})();
var state__29973__auto__ = (function (){var statearr_32064 = f__29972__auto__.call(null);
(statearr_32064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___32069);

return statearr_32064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto___32069,out))
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
var args32082 = [];
var len__26910__auto___32131 = arguments.length;
var i__26911__auto___32132 = (0);
while(true){
if((i__26911__auto___32132 < len__26910__auto___32131)){
args32082.push((arguments[i__26911__auto___32132]));

var G__32133 = (i__26911__auto___32132 + (1));
i__26911__auto___32132 = G__32133;
continue;
} else {
}
break;
}

var G__32084 = args32082.length;
switch (G__32084) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32082.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29971__auto___32135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto___32135,out){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto___32135,out){
return (function (state_32108){
var state_val_32109 = (state_32108[(1)]);
if((state_val_32109 === (7))){
var inst_32090 = (state_32108[(7)]);
var inst_32090__$1 = (state_32108[(2)]);
var inst_32091 = (inst_32090__$1 == null);
var inst_32092 = cljs.core.not.call(null,inst_32091);
var state_32108__$1 = (function (){var statearr_32110 = state_32108;
(statearr_32110[(7)] = inst_32090__$1);

return statearr_32110;
})();
if(inst_32092){
var statearr_32111_32136 = state_32108__$1;
(statearr_32111_32136[(1)] = (8));

} else {
var statearr_32112_32137 = state_32108__$1;
(statearr_32112_32137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (1))){
var inst_32085 = (0);
var state_32108__$1 = (function (){var statearr_32113 = state_32108;
(statearr_32113[(8)] = inst_32085);

return statearr_32113;
})();
var statearr_32114_32138 = state_32108__$1;
(statearr_32114_32138[(2)] = null);

(statearr_32114_32138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (4))){
var state_32108__$1 = state_32108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32108__$1,(7),ch);
} else {
if((state_val_32109 === (6))){
var inst_32103 = (state_32108[(2)]);
var state_32108__$1 = state_32108;
var statearr_32115_32139 = state_32108__$1;
(statearr_32115_32139[(2)] = inst_32103);

(statearr_32115_32139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (3))){
var inst_32105 = (state_32108[(2)]);
var inst_32106 = cljs.core.async.close_BANG_.call(null,out);
var state_32108__$1 = (function (){var statearr_32116 = state_32108;
(statearr_32116[(9)] = inst_32105);

return statearr_32116;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32108__$1,inst_32106);
} else {
if((state_val_32109 === (2))){
var inst_32085 = (state_32108[(8)]);
var inst_32087 = (inst_32085 < n);
var state_32108__$1 = state_32108;
if(cljs.core.truth_(inst_32087)){
var statearr_32117_32140 = state_32108__$1;
(statearr_32117_32140[(1)] = (4));

} else {
var statearr_32118_32141 = state_32108__$1;
(statearr_32118_32141[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (11))){
var inst_32085 = (state_32108[(8)]);
var inst_32095 = (state_32108[(2)]);
var inst_32096 = (inst_32085 + (1));
var inst_32085__$1 = inst_32096;
var state_32108__$1 = (function (){var statearr_32119 = state_32108;
(statearr_32119[(8)] = inst_32085__$1);

(statearr_32119[(10)] = inst_32095);

return statearr_32119;
})();
var statearr_32120_32142 = state_32108__$1;
(statearr_32120_32142[(2)] = null);

(statearr_32120_32142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (9))){
var state_32108__$1 = state_32108;
var statearr_32121_32143 = state_32108__$1;
(statearr_32121_32143[(2)] = null);

(statearr_32121_32143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (5))){
var state_32108__$1 = state_32108;
var statearr_32122_32144 = state_32108__$1;
(statearr_32122_32144[(2)] = null);

(statearr_32122_32144[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (10))){
var inst_32100 = (state_32108[(2)]);
var state_32108__$1 = state_32108;
var statearr_32123_32145 = state_32108__$1;
(statearr_32123_32145[(2)] = inst_32100);

(statearr_32123_32145[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (8))){
var inst_32090 = (state_32108[(7)]);
var state_32108__$1 = state_32108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32108__$1,(11),out,inst_32090);
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
});})(c__29971__auto___32135,out))
;
return ((function (switch__29859__auto__,c__29971__auto___32135,out){
return (function() {
var cljs$core$async$state_machine__29860__auto__ = null;
var cljs$core$async$state_machine__29860__auto____0 = (function (){
var statearr_32127 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32127[(0)] = cljs$core$async$state_machine__29860__auto__);

(statearr_32127[(1)] = (1));

return statearr_32127;
});
var cljs$core$async$state_machine__29860__auto____1 = (function (state_32108){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_32108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e32128){if((e32128 instanceof Object)){
var ex__29863__auto__ = e32128;
var statearr_32129_32146 = state_32108;
(statearr_32129_32146[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32147 = state_32108;
state_32108 = G__32147;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$state_machine__29860__auto__ = function(state_32108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29860__auto____1.call(this,state_32108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29860__auto____0;
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29860__auto____1;
return cljs$core$async$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto___32135,out))
})();
var state__29973__auto__ = (function (){var statearr_32130 = f__29972__auto__.call(null);
(statearr_32130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___32135);

return statearr_32130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto___32135,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32155 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32155 = (function (map_LT_,f,ch,meta32156){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32156 = meta32156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32157,meta32156__$1){
var self__ = this;
var _32157__$1 = this;
return (new cljs.core.async.t_cljs$core$async32155(self__.map_LT_,self__.f,self__.ch,meta32156__$1));
});

cljs.core.async.t_cljs$core$async32155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32157){
var self__ = this;
var _32157__$1 = this;
return self__.meta32156;
});

cljs.core.async.t_cljs$core$async32155.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32155.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32155.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32155.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32155.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32158 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32158 = (function (map_LT_,f,ch,meta32156,_,fn1,meta32159){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32156 = meta32156;
this._ = _;
this.fn1 = fn1;
this.meta32159 = meta32159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32160,meta32159__$1){
var self__ = this;
var _32160__$1 = this;
return (new cljs.core.async.t_cljs$core$async32158(self__.map_LT_,self__.f,self__.ch,self__.meta32156,self__._,self__.fn1,meta32159__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32160){
var self__ = this;
var _32160__$1 = this;
return self__.meta32159;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32158.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32158.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32158.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32158.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32148_SHARP_){
return f1.call(null,(((p1__32148_SHARP_ == null))?null:self__.f.call(null,p1__32148_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32158.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32156","meta32156",-1446354060,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32155","cljs.core.async/t_cljs$core$async32155",991885027,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32159","meta32159",-2065252505,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32158.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32158";

cljs.core.async.t_cljs$core$async32158.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"cljs.core.async/t_cljs$core$async32158");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32158 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32158(map_LT___$1,f__$1,ch__$1,meta32156__$1,___$2,fn1__$1,meta32159){
return (new cljs.core.async.t_cljs$core$async32158(map_LT___$1,f__$1,ch__$1,meta32156__$1,___$2,fn1__$1,meta32159));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32158(self__.map_LT_,self__.f,self__.ch,self__.meta32156,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25828__auto__ = ret;
if(cljs.core.truth_(and__25828__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25828__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32155.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32155.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32155.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32156","meta32156",-1446354060,null)], null);
});

cljs.core.async.t_cljs$core$async32155.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32155.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32155";

cljs.core.async.t_cljs$core$async32155.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"cljs.core.async/t_cljs$core$async32155");
});

cljs.core.async.__GT_t_cljs$core$async32155 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32155(map_LT___$1,f__$1,ch__$1,meta32156){
return (new cljs.core.async.t_cljs$core$async32155(map_LT___$1,f__$1,ch__$1,meta32156));
});

}

return (new cljs.core.async.t_cljs$core$async32155(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32164 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32164 = (function (map_GT_,f,ch,meta32165){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32165 = meta32165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32166,meta32165__$1){
var self__ = this;
var _32166__$1 = this;
return (new cljs.core.async.t_cljs$core$async32164(self__.map_GT_,self__.f,self__.ch,meta32165__$1));
});

cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32166){
var self__ = this;
var _32166__$1 = this;
return self__.meta32165;
});

cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32165","meta32165",2120226702,null)], null);
});

cljs.core.async.t_cljs$core$async32164.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32164";

cljs.core.async.t_cljs$core$async32164.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"cljs.core.async/t_cljs$core$async32164");
});

cljs.core.async.__GT_t_cljs$core$async32164 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32164(map_GT___$1,f__$1,ch__$1,meta32165){
return (new cljs.core.async.t_cljs$core$async32164(map_GT___$1,f__$1,ch__$1,meta32165));
});

}

return (new cljs.core.async.t_cljs$core$async32164(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32170 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32170 = (function (filter_GT_,p,ch,meta32171){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32171 = meta32171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32172,meta32171__$1){
var self__ = this;
var _32172__$1 = this;
return (new cljs.core.async.t_cljs$core$async32170(self__.filter_GT_,self__.p,self__.ch,meta32171__$1));
});

cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32172){
var self__ = this;
var _32172__$1 = this;
return self__.meta32171;
});

cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32171","meta32171",-2081140524,null)], null);
});

cljs.core.async.t_cljs$core$async32170.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32170";

cljs.core.async.t_cljs$core$async32170.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"cljs.core.async/t_cljs$core$async32170");
});

cljs.core.async.__GT_t_cljs$core$async32170 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32170(filter_GT___$1,p__$1,ch__$1,meta32171){
return (new cljs.core.async.t_cljs$core$async32170(filter_GT___$1,p__$1,ch__$1,meta32171));
});

}

return (new cljs.core.async.t_cljs$core$async32170(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args32173 = [];
var len__26910__auto___32217 = arguments.length;
var i__26911__auto___32218 = (0);
while(true){
if((i__26911__auto___32218 < len__26910__auto___32217)){
args32173.push((arguments[i__26911__auto___32218]));

var G__32219 = (i__26911__auto___32218 + (1));
i__26911__auto___32218 = G__32219;
continue;
} else {
}
break;
}

var G__32175 = args32173.length;
switch (G__32175) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32173.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29971__auto___32221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto___32221,out){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto___32221,out){
return (function (state_32196){
var state_val_32197 = (state_32196[(1)]);
if((state_val_32197 === (7))){
var inst_32192 = (state_32196[(2)]);
var state_32196__$1 = state_32196;
var statearr_32198_32222 = state_32196__$1;
(statearr_32198_32222[(2)] = inst_32192);

(statearr_32198_32222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32197 === (1))){
var state_32196__$1 = state_32196;
var statearr_32199_32223 = state_32196__$1;
(statearr_32199_32223[(2)] = null);

(statearr_32199_32223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32197 === (4))){
var inst_32178 = (state_32196[(7)]);
var inst_32178__$1 = (state_32196[(2)]);
var inst_32179 = (inst_32178__$1 == null);
var state_32196__$1 = (function (){var statearr_32200 = state_32196;
(statearr_32200[(7)] = inst_32178__$1);

return statearr_32200;
})();
if(cljs.core.truth_(inst_32179)){
var statearr_32201_32224 = state_32196__$1;
(statearr_32201_32224[(1)] = (5));

} else {
var statearr_32202_32225 = state_32196__$1;
(statearr_32202_32225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32197 === (6))){
var inst_32178 = (state_32196[(7)]);
var inst_32183 = p.call(null,inst_32178);
var state_32196__$1 = state_32196;
if(cljs.core.truth_(inst_32183)){
var statearr_32203_32226 = state_32196__$1;
(statearr_32203_32226[(1)] = (8));

} else {
var statearr_32204_32227 = state_32196__$1;
(statearr_32204_32227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32197 === (3))){
var inst_32194 = (state_32196[(2)]);
var state_32196__$1 = state_32196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32196__$1,inst_32194);
} else {
if((state_val_32197 === (2))){
var state_32196__$1 = state_32196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32196__$1,(4),ch);
} else {
if((state_val_32197 === (11))){
var inst_32186 = (state_32196[(2)]);
var state_32196__$1 = state_32196;
var statearr_32205_32228 = state_32196__$1;
(statearr_32205_32228[(2)] = inst_32186);

(statearr_32205_32228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32197 === (9))){
var state_32196__$1 = state_32196;
var statearr_32206_32229 = state_32196__$1;
(statearr_32206_32229[(2)] = null);

(statearr_32206_32229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32197 === (5))){
var inst_32181 = cljs.core.async.close_BANG_.call(null,out);
var state_32196__$1 = state_32196;
var statearr_32207_32230 = state_32196__$1;
(statearr_32207_32230[(2)] = inst_32181);

(statearr_32207_32230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32197 === (10))){
var inst_32189 = (state_32196[(2)]);
var state_32196__$1 = (function (){var statearr_32208 = state_32196;
(statearr_32208[(8)] = inst_32189);

return statearr_32208;
})();
var statearr_32209_32231 = state_32196__$1;
(statearr_32209_32231[(2)] = null);

(statearr_32209_32231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32197 === (8))){
var inst_32178 = (state_32196[(7)]);
var state_32196__$1 = state_32196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32196__$1,(11),out,inst_32178);
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
});})(c__29971__auto___32221,out))
;
return ((function (switch__29859__auto__,c__29971__auto___32221,out){
return (function() {
var cljs$core$async$state_machine__29860__auto__ = null;
var cljs$core$async$state_machine__29860__auto____0 = (function (){
var statearr_32213 = [null,null,null,null,null,null,null,null,null];
(statearr_32213[(0)] = cljs$core$async$state_machine__29860__auto__);

(statearr_32213[(1)] = (1));

return statearr_32213;
});
var cljs$core$async$state_machine__29860__auto____1 = (function (state_32196){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_32196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e32214){if((e32214 instanceof Object)){
var ex__29863__auto__ = e32214;
var statearr_32215_32232 = state_32196;
(statearr_32215_32232[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32233 = state_32196;
state_32196 = G__32233;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$state_machine__29860__auto__ = function(state_32196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29860__auto____1.call(this,state_32196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29860__auto____0;
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29860__auto____1;
return cljs$core$async$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto___32221,out))
})();
var state__29973__auto__ = (function (){var statearr_32216 = f__29972__auto__.call(null);
(statearr_32216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___32221);

return statearr_32216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto___32221,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32234 = [];
var len__26910__auto___32237 = arguments.length;
var i__26911__auto___32238 = (0);
while(true){
if((i__26911__auto___32238 < len__26910__auto___32237)){
args32234.push((arguments[i__26911__auto___32238]));

var G__32239 = (i__26911__auto___32238 + (1));
i__26911__auto___32238 = G__32239;
continue;
} else {
}
break;
}

var G__32236 = args32234.length;
switch (G__32236) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32234.length)].join('')));

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
var c__29971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto__){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto__){
return (function (state_32406){
var state_val_32407 = (state_32406[(1)]);
if((state_val_32407 === (7))){
var inst_32402 = (state_32406[(2)]);
var state_32406__$1 = state_32406;
var statearr_32408_32449 = state_32406__$1;
(statearr_32408_32449[(2)] = inst_32402);

(statearr_32408_32449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32407 === (20))){
var inst_32372 = (state_32406[(7)]);
var inst_32383 = (state_32406[(2)]);
var inst_32384 = cljs.core.next.call(null,inst_32372);
var inst_32358 = inst_32384;
var inst_32359 = null;
var inst_32360 = (0);
var inst_32361 = (0);
var state_32406__$1 = (function (){var statearr_32409 = state_32406;
(statearr_32409[(8)] = inst_32358);

(statearr_32409[(9)] = inst_32383);

(statearr_32409[(10)] = inst_32360);

(statearr_32409[(11)] = inst_32361);

(statearr_32409[(12)] = inst_32359);

return statearr_32409;
})();
var statearr_32410_32450 = state_32406__$1;
(statearr_32410_32450[(2)] = null);

(statearr_32410_32450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32407 === (1))){
var state_32406__$1 = state_32406;
var statearr_32411_32451 = state_32406__$1;
(statearr_32411_32451[(2)] = null);

(statearr_32411_32451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32407 === (4))){
var inst_32347 = (state_32406[(13)]);
var inst_32347__$1 = (state_32406[(2)]);
var inst_32348 = (inst_32347__$1 == null);
var state_32406__$1 = (function (){var statearr_32412 = state_32406;
(statearr_32412[(13)] = inst_32347__$1);

return statearr_32412;
})();
if(cljs.core.truth_(inst_32348)){
var statearr_32413_32452 = state_32406__$1;
(statearr_32413_32452[(1)] = (5));

} else {
var statearr_32414_32453 = state_32406__$1;
(statearr_32414_32453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32407 === (15))){
var state_32406__$1 = state_32406;
var statearr_32418_32454 = state_32406__$1;
(statearr_32418_32454[(2)] = null);

(statearr_32418_32454[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32407 === (21))){
var state_32406__$1 = state_32406;
var statearr_32419_32455 = state_32406__$1;
(statearr_32419_32455[(2)] = null);

(statearr_32419_32455[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32407 === (13))){
var inst_32358 = (state_32406[(8)]);
var inst_32360 = (state_32406[(10)]);
var inst_32361 = (state_32406[(11)]);
var inst_32359 = (state_32406[(12)]);
var inst_32368 = (state_32406[(2)]);
var inst_32369 = (inst_32361 + (1));
var tmp32415 = inst_32358;
var tmp32416 = inst_32360;
var tmp32417 = inst_32359;
var inst_32358__$1 = tmp32415;
var inst_32359__$1 = tmp32417;
var inst_32360__$1 = tmp32416;
var inst_32361__$1 = inst_32369;
var state_32406__$1 = (function (){var statearr_32420 = state_32406;
(statearr_32420[(14)] = inst_32368);

(statearr_32420[(8)] = inst_32358__$1);

(statearr_32420[(10)] = inst_32360__$1);

(statearr_32420[(11)] = inst_32361__$1);

(statearr_32420[(12)] = inst_32359__$1);

return statearr_32420;
})();
var statearr_32421_32456 = state_32406__$1;
(statearr_32421_32456[(2)] = null);

(statearr_32421_32456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32407 === (22))){
var state_32406__$1 = state_32406;
var statearr_32422_32457 = state_32406__$1;
(statearr_32422_32457[(2)] = null);

(statearr_32422_32457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32407 === (6))){
var inst_32347 = (state_32406[(13)]);
var inst_32356 = f.call(null,inst_32347);
var inst_32357 = cljs.core.seq.call(null,inst_32356);
var inst_32358 = inst_32357;
var inst_32359 = null;
var inst_32360 = (0);
var inst_32361 = (0);
var state_32406__$1 = (function (){var statearr_32423 = state_32406;
(statearr_32423[(8)] = inst_32358);

(statearr_32423[(10)] = inst_32360);

(statearr_32423[(11)] = inst_32361);

(statearr_32423[(12)] = inst_32359);

return statearr_32423;
})();
var statearr_32424_32458 = state_32406__$1;
(statearr_32424_32458[(2)] = null);

(statearr_32424_32458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32407 === (17))){
var inst_32372 = (state_32406[(7)]);
var inst_32376 = cljs.core.chunk_first.call(null,inst_32372);
var inst_32377 = cljs.core.chunk_rest.call(null,inst_32372);
var inst_32378 = cljs.core.count.call(null,inst_32376);
var inst_32358 = inst_32377;
var inst_32359 = inst_32376;
var inst_32360 = inst_32378;
var inst_32361 = (0);
var state_32406__$1 = (function (){var statearr_32425 = state_32406;
(statearr_32425[(8)] = inst_32358);

(statearr_32425[(10)] = inst_32360);

(statearr_32425[(11)] = inst_32361);

(statearr_32425[(12)] = inst_32359);

return statearr_32425;
})();
var statearr_32426_32459 = state_32406__$1;
(statearr_32426_32459[(2)] = null);

(statearr_32426_32459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32407 === (3))){
var inst_32404 = (state_32406[(2)]);
var state_32406__$1 = state_32406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32406__$1,inst_32404);
} else {
if((state_val_32407 === (12))){
var inst_32392 = (state_32406[(2)]);
var state_32406__$1 = state_32406;
var statearr_32427_32460 = state_32406__$1;
(statearr_32427_32460[(2)] = inst_32392);

(statearr_32427_32460[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32407 === (2))){
var state_32406__$1 = state_32406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32406__$1,(4),in$);
} else {
if((state_val_32407 === (23))){
var inst_32400 = (state_32406[(2)]);
var state_32406__$1 = state_32406;
var statearr_32428_32461 = state_32406__$1;
(statearr_32428_32461[(2)] = inst_32400);

(statearr_32428_32461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32407 === (19))){
var inst_32387 = (state_32406[(2)]);
var state_32406__$1 = state_32406;
var statearr_32429_32462 = state_32406__$1;
(statearr_32429_32462[(2)] = inst_32387);

(statearr_32429_32462[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32407 === (11))){
var inst_32358 = (state_32406[(8)]);
var inst_32372 = (state_32406[(7)]);
var inst_32372__$1 = cljs.core.seq.call(null,inst_32358);
var state_32406__$1 = (function (){var statearr_32430 = state_32406;
(statearr_32430[(7)] = inst_32372__$1);

return statearr_32430;
})();
if(inst_32372__$1){
var statearr_32431_32463 = state_32406__$1;
(statearr_32431_32463[(1)] = (14));

} else {
var statearr_32432_32464 = state_32406__$1;
(statearr_32432_32464[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32407 === (9))){
var inst_32394 = (state_32406[(2)]);
var inst_32395 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32406__$1 = (function (){var statearr_32433 = state_32406;
(statearr_32433[(15)] = inst_32394);

return statearr_32433;
})();
if(cljs.core.truth_(inst_32395)){
var statearr_32434_32465 = state_32406__$1;
(statearr_32434_32465[(1)] = (21));

} else {
var statearr_32435_32466 = state_32406__$1;
(statearr_32435_32466[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32407 === (5))){
var inst_32350 = cljs.core.async.close_BANG_.call(null,out);
var state_32406__$1 = state_32406;
var statearr_32436_32467 = state_32406__$1;
(statearr_32436_32467[(2)] = inst_32350);

(statearr_32436_32467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32407 === (14))){
var inst_32372 = (state_32406[(7)]);
var inst_32374 = cljs.core.chunked_seq_QMARK_.call(null,inst_32372);
var state_32406__$1 = state_32406;
if(inst_32374){
var statearr_32437_32468 = state_32406__$1;
(statearr_32437_32468[(1)] = (17));

} else {
var statearr_32438_32469 = state_32406__$1;
(statearr_32438_32469[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32407 === (16))){
var inst_32390 = (state_32406[(2)]);
var state_32406__$1 = state_32406;
var statearr_32439_32470 = state_32406__$1;
(statearr_32439_32470[(2)] = inst_32390);

(statearr_32439_32470[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32407 === (10))){
var inst_32361 = (state_32406[(11)]);
var inst_32359 = (state_32406[(12)]);
var inst_32366 = cljs.core._nth.call(null,inst_32359,inst_32361);
var state_32406__$1 = state_32406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32406__$1,(13),out,inst_32366);
} else {
if((state_val_32407 === (18))){
var inst_32372 = (state_32406[(7)]);
var inst_32381 = cljs.core.first.call(null,inst_32372);
var state_32406__$1 = state_32406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32406__$1,(20),out,inst_32381);
} else {
if((state_val_32407 === (8))){
var inst_32360 = (state_32406[(10)]);
var inst_32361 = (state_32406[(11)]);
var inst_32363 = (inst_32361 < inst_32360);
var inst_32364 = inst_32363;
var state_32406__$1 = state_32406;
if(cljs.core.truth_(inst_32364)){
var statearr_32440_32471 = state_32406__$1;
(statearr_32440_32471[(1)] = (10));

} else {
var statearr_32441_32472 = state_32406__$1;
(statearr_32441_32472[(1)] = (11));

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
});})(c__29971__auto__))
;
return ((function (switch__29859__auto__,c__29971__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29860__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29860__auto____0 = (function (){
var statearr_32445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32445[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29860__auto__);

(statearr_32445[(1)] = (1));

return statearr_32445;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29860__auto____1 = (function (state_32406){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_32406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e32446){if((e32446 instanceof Object)){
var ex__29863__auto__ = e32446;
var statearr_32447_32473 = state_32406;
(statearr_32447_32473[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32474 = state_32406;
state_32406 = G__32474;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29860__auto__ = function(state_32406){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29860__auto____1.call(this,state_32406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29860__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29860__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto__))
})();
var state__29973__auto__ = (function (){var statearr_32448 = f__29972__auto__.call(null);
(statearr_32448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto__);

return statearr_32448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto__))
);

return c__29971__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32475 = [];
var len__26910__auto___32478 = arguments.length;
var i__26911__auto___32479 = (0);
while(true){
if((i__26911__auto___32479 < len__26910__auto___32478)){
args32475.push((arguments[i__26911__auto___32479]));

var G__32480 = (i__26911__auto___32479 + (1));
i__26911__auto___32479 = G__32480;
continue;
} else {
}
break;
}

var G__32477 = args32475.length;
switch (G__32477) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32475.length)].join('')));

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
var args32482 = [];
var len__26910__auto___32485 = arguments.length;
var i__26911__auto___32486 = (0);
while(true){
if((i__26911__auto___32486 < len__26910__auto___32485)){
args32482.push((arguments[i__26911__auto___32486]));

var G__32487 = (i__26911__auto___32486 + (1));
i__26911__auto___32486 = G__32487;
continue;
} else {
}
break;
}

var G__32484 = args32482.length;
switch (G__32484) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32482.length)].join('')));

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
var args32489 = [];
var len__26910__auto___32540 = arguments.length;
var i__26911__auto___32541 = (0);
while(true){
if((i__26911__auto___32541 < len__26910__auto___32540)){
args32489.push((arguments[i__26911__auto___32541]));

var G__32542 = (i__26911__auto___32541 + (1));
i__26911__auto___32541 = G__32542;
continue;
} else {
}
break;
}

var G__32491 = args32489.length;
switch (G__32491) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32489.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29971__auto___32544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto___32544,out){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto___32544,out){
return (function (state_32515){
var state_val_32516 = (state_32515[(1)]);
if((state_val_32516 === (7))){
var inst_32510 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
var statearr_32517_32545 = state_32515__$1;
(statearr_32517_32545[(2)] = inst_32510);

(statearr_32517_32545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (1))){
var inst_32492 = null;
var state_32515__$1 = (function (){var statearr_32518 = state_32515;
(statearr_32518[(7)] = inst_32492);

return statearr_32518;
})();
var statearr_32519_32546 = state_32515__$1;
(statearr_32519_32546[(2)] = null);

(statearr_32519_32546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (4))){
var inst_32495 = (state_32515[(8)]);
var inst_32495__$1 = (state_32515[(2)]);
var inst_32496 = (inst_32495__$1 == null);
var inst_32497 = cljs.core.not.call(null,inst_32496);
var state_32515__$1 = (function (){var statearr_32520 = state_32515;
(statearr_32520[(8)] = inst_32495__$1);

return statearr_32520;
})();
if(inst_32497){
var statearr_32521_32547 = state_32515__$1;
(statearr_32521_32547[(1)] = (5));

} else {
var statearr_32522_32548 = state_32515__$1;
(statearr_32522_32548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (6))){
var state_32515__$1 = state_32515;
var statearr_32523_32549 = state_32515__$1;
(statearr_32523_32549[(2)] = null);

(statearr_32523_32549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (3))){
var inst_32512 = (state_32515[(2)]);
var inst_32513 = cljs.core.async.close_BANG_.call(null,out);
var state_32515__$1 = (function (){var statearr_32524 = state_32515;
(statearr_32524[(9)] = inst_32512);

return statearr_32524;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32515__$1,inst_32513);
} else {
if((state_val_32516 === (2))){
var state_32515__$1 = state_32515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32515__$1,(4),ch);
} else {
if((state_val_32516 === (11))){
var inst_32495 = (state_32515[(8)]);
var inst_32504 = (state_32515[(2)]);
var inst_32492 = inst_32495;
var state_32515__$1 = (function (){var statearr_32525 = state_32515;
(statearr_32525[(10)] = inst_32504);

(statearr_32525[(7)] = inst_32492);

return statearr_32525;
})();
var statearr_32526_32550 = state_32515__$1;
(statearr_32526_32550[(2)] = null);

(statearr_32526_32550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (9))){
var inst_32495 = (state_32515[(8)]);
var state_32515__$1 = state_32515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32515__$1,(11),out,inst_32495);
} else {
if((state_val_32516 === (5))){
var inst_32492 = (state_32515[(7)]);
var inst_32495 = (state_32515[(8)]);
var inst_32499 = cljs.core._EQ_.call(null,inst_32495,inst_32492);
var state_32515__$1 = state_32515;
if(inst_32499){
var statearr_32528_32551 = state_32515__$1;
(statearr_32528_32551[(1)] = (8));

} else {
var statearr_32529_32552 = state_32515__$1;
(statearr_32529_32552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (10))){
var inst_32507 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
var statearr_32530_32553 = state_32515__$1;
(statearr_32530_32553[(2)] = inst_32507);

(statearr_32530_32553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (8))){
var inst_32492 = (state_32515[(7)]);
var tmp32527 = inst_32492;
var inst_32492__$1 = tmp32527;
var state_32515__$1 = (function (){var statearr_32531 = state_32515;
(statearr_32531[(7)] = inst_32492__$1);

return statearr_32531;
})();
var statearr_32532_32554 = state_32515__$1;
(statearr_32532_32554[(2)] = null);

(statearr_32532_32554[(1)] = (2));


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
});})(c__29971__auto___32544,out))
;
return ((function (switch__29859__auto__,c__29971__auto___32544,out){
return (function() {
var cljs$core$async$state_machine__29860__auto__ = null;
var cljs$core$async$state_machine__29860__auto____0 = (function (){
var statearr_32536 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32536[(0)] = cljs$core$async$state_machine__29860__auto__);

(statearr_32536[(1)] = (1));

return statearr_32536;
});
var cljs$core$async$state_machine__29860__auto____1 = (function (state_32515){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_32515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e32537){if((e32537 instanceof Object)){
var ex__29863__auto__ = e32537;
var statearr_32538_32555 = state_32515;
(statearr_32538_32555[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32556 = state_32515;
state_32515 = G__32556;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$state_machine__29860__auto__ = function(state_32515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29860__auto____1.call(this,state_32515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29860__auto____0;
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29860__auto____1;
return cljs$core$async$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto___32544,out))
})();
var state__29973__auto__ = (function (){var statearr_32539 = f__29972__auto__.call(null);
(statearr_32539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___32544);

return statearr_32539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto___32544,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32557 = [];
var len__26910__auto___32627 = arguments.length;
var i__26911__auto___32628 = (0);
while(true){
if((i__26911__auto___32628 < len__26910__auto___32627)){
args32557.push((arguments[i__26911__auto___32628]));

var G__32629 = (i__26911__auto___32628 + (1));
i__26911__auto___32628 = G__32629;
continue;
} else {
}
break;
}

var G__32559 = args32557.length;
switch (G__32559) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32557.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29971__auto___32631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto___32631,out){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto___32631,out){
return (function (state_32597){
var state_val_32598 = (state_32597[(1)]);
if((state_val_32598 === (7))){
var inst_32593 = (state_32597[(2)]);
var state_32597__$1 = state_32597;
var statearr_32599_32632 = state_32597__$1;
(statearr_32599_32632[(2)] = inst_32593);

(statearr_32599_32632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (1))){
var inst_32560 = (new Array(n));
var inst_32561 = inst_32560;
var inst_32562 = (0);
var state_32597__$1 = (function (){var statearr_32600 = state_32597;
(statearr_32600[(7)] = inst_32562);

(statearr_32600[(8)] = inst_32561);

return statearr_32600;
})();
var statearr_32601_32633 = state_32597__$1;
(statearr_32601_32633[(2)] = null);

(statearr_32601_32633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (4))){
var inst_32565 = (state_32597[(9)]);
var inst_32565__$1 = (state_32597[(2)]);
var inst_32566 = (inst_32565__$1 == null);
var inst_32567 = cljs.core.not.call(null,inst_32566);
var state_32597__$1 = (function (){var statearr_32602 = state_32597;
(statearr_32602[(9)] = inst_32565__$1);

return statearr_32602;
})();
if(inst_32567){
var statearr_32603_32634 = state_32597__$1;
(statearr_32603_32634[(1)] = (5));

} else {
var statearr_32604_32635 = state_32597__$1;
(statearr_32604_32635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (15))){
var inst_32587 = (state_32597[(2)]);
var state_32597__$1 = state_32597;
var statearr_32605_32636 = state_32597__$1;
(statearr_32605_32636[(2)] = inst_32587);

(statearr_32605_32636[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (13))){
var state_32597__$1 = state_32597;
var statearr_32606_32637 = state_32597__$1;
(statearr_32606_32637[(2)] = null);

(statearr_32606_32637[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (6))){
var inst_32562 = (state_32597[(7)]);
var inst_32583 = (inst_32562 > (0));
var state_32597__$1 = state_32597;
if(cljs.core.truth_(inst_32583)){
var statearr_32607_32638 = state_32597__$1;
(statearr_32607_32638[(1)] = (12));

} else {
var statearr_32608_32639 = state_32597__$1;
(statearr_32608_32639[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (3))){
var inst_32595 = (state_32597[(2)]);
var state_32597__$1 = state_32597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32597__$1,inst_32595);
} else {
if((state_val_32598 === (12))){
var inst_32561 = (state_32597[(8)]);
var inst_32585 = cljs.core.vec.call(null,inst_32561);
var state_32597__$1 = state_32597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32597__$1,(15),out,inst_32585);
} else {
if((state_val_32598 === (2))){
var state_32597__$1 = state_32597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32597__$1,(4),ch);
} else {
if((state_val_32598 === (11))){
var inst_32577 = (state_32597[(2)]);
var inst_32578 = (new Array(n));
var inst_32561 = inst_32578;
var inst_32562 = (0);
var state_32597__$1 = (function (){var statearr_32609 = state_32597;
(statearr_32609[(7)] = inst_32562);

(statearr_32609[(10)] = inst_32577);

(statearr_32609[(8)] = inst_32561);

return statearr_32609;
})();
var statearr_32610_32640 = state_32597__$1;
(statearr_32610_32640[(2)] = null);

(statearr_32610_32640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (9))){
var inst_32561 = (state_32597[(8)]);
var inst_32575 = cljs.core.vec.call(null,inst_32561);
var state_32597__$1 = state_32597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32597__$1,(11),out,inst_32575);
} else {
if((state_val_32598 === (5))){
var inst_32562 = (state_32597[(7)]);
var inst_32565 = (state_32597[(9)]);
var inst_32561 = (state_32597[(8)]);
var inst_32570 = (state_32597[(11)]);
var inst_32569 = (inst_32561[inst_32562] = inst_32565);
var inst_32570__$1 = (inst_32562 + (1));
var inst_32571 = (inst_32570__$1 < n);
var state_32597__$1 = (function (){var statearr_32611 = state_32597;
(statearr_32611[(12)] = inst_32569);

(statearr_32611[(11)] = inst_32570__$1);

return statearr_32611;
})();
if(cljs.core.truth_(inst_32571)){
var statearr_32612_32641 = state_32597__$1;
(statearr_32612_32641[(1)] = (8));

} else {
var statearr_32613_32642 = state_32597__$1;
(statearr_32613_32642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (14))){
var inst_32590 = (state_32597[(2)]);
var inst_32591 = cljs.core.async.close_BANG_.call(null,out);
var state_32597__$1 = (function (){var statearr_32615 = state_32597;
(statearr_32615[(13)] = inst_32590);

return statearr_32615;
})();
var statearr_32616_32643 = state_32597__$1;
(statearr_32616_32643[(2)] = inst_32591);

(statearr_32616_32643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (10))){
var inst_32581 = (state_32597[(2)]);
var state_32597__$1 = state_32597;
var statearr_32617_32644 = state_32597__$1;
(statearr_32617_32644[(2)] = inst_32581);

(statearr_32617_32644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (8))){
var inst_32561 = (state_32597[(8)]);
var inst_32570 = (state_32597[(11)]);
var tmp32614 = inst_32561;
var inst_32561__$1 = tmp32614;
var inst_32562 = inst_32570;
var state_32597__$1 = (function (){var statearr_32618 = state_32597;
(statearr_32618[(7)] = inst_32562);

(statearr_32618[(8)] = inst_32561__$1);

return statearr_32618;
})();
var statearr_32619_32645 = state_32597__$1;
(statearr_32619_32645[(2)] = null);

(statearr_32619_32645[(1)] = (2));


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
});})(c__29971__auto___32631,out))
;
return ((function (switch__29859__auto__,c__29971__auto___32631,out){
return (function() {
var cljs$core$async$state_machine__29860__auto__ = null;
var cljs$core$async$state_machine__29860__auto____0 = (function (){
var statearr_32623 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32623[(0)] = cljs$core$async$state_machine__29860__auto__);

(statearr_32623[(1)] = (1));

return statearr_32623;
});
var cljs$core$async$state_machine__29860__auto____1 = (function (state_32597){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_32597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e32624){if((e32624 instanceof Object)){
var ex__29863__auto__ = e32624;
var statearr_32625_32646 = state_32597;
(statearr_32625_32646[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32647 = state_32597;
state_32597 = G__32647;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$state_machine__29860__auto__ = function(state_32597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29860__auto____1.call(this,state_32597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29860__auto____0;
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29860__auto____1;
return cljs$core$async$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto___32631,out))
})();
var state__29973__auto__ = (function (){var statearr_32626 = f__29972__auto__.call(null);
(statearr_32626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___32631);

return statearr_32626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto___32631,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32648 = [];
var len__26910__auto___32722 = arguments.length;
var i__26911__auto___32723 = (0);
while(true){
if((i__26911__auto___32723 < len__26910__auto___32722)){
args32648.push((arguments[i__26911__auto___32723]));

var G__32724 = (i__26911__auto___32723 + (1));
i__26911__auto___32723 = G__32724;
continue;
} else {
}
break;
}

var G__32650 = args32648.length;
switch (G__32650) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32648.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29971__auto___32726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto___32726,out){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto___32726,out){
return (function (state_32692){
var state_val_32693 = (state_32692[(1)]);
if((state_val_32693 === (7))){
var inst_32688 = (state_32692[(2)]);
var state_32692__$1 = state_32692;
var statearr_32694_32727 = state_32692__$1;
(statearr_32694_32727[(2)] = inst_32688);

(statearr_32694_32727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (1))){
var inst_32651 = [];
var inst_32652 = inst_32651;
var inst_32653 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32692__$1 = (function (){var statearr_32695 = state_32692;
(statearr_32695[(7)] = inst_32652);

(statearr_32695[(8)] = inst_32653);

return statearr_32695;
})();
var statearr_32696_32728 = state_32692__$1;
(statearr_32696_32728[(2)] = null);

(statearr_32696_32728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (4))){
var inst_32656 = (state_32692[(9)]);
var inst_32656__$1 = (state_32692[(2)]);
var inst_32657 = (inst_32656__$1 == null);
var inst_32658 = cljs.core.not.call(null,inst_32657);
var state_32692__$1 = (function (){var statearr_32697 = state_32692;
(statearr_32697[(9)] = inst_32656__$1);

return statearr_32697;
})();
if(inst_32658){
var statearr_32698_32729 = state_32692__$1;
(statearr_32698_32729[(1)] = (5));

} else {
var statearr_32699_32730 = state_32692__$1;
(statearr_32699_32730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (15))){
var inst_32682 = (state_32692[(2)]);
var state_32692__$1 = state_32692;
var statearr_32700_32731 = state_32692__$1;
(statearr_32700_32731[(2)] = inst_32682);

(statearr_32700_32731[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (13))){
var state_32692__$1 = state_32692;
var statearr_32701_32732 = state_32692__$1;
(statearr_32701_32732[(2)] = null);

(statearr_32701_32732[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (6))){
var inst_32652 = (state_32692[(7)]);
var inst_32677 = inst_32652.length;
var inst_32678 = (inst_32677 > (0));
var state_32692__$1 = state_32692;
if(cljs.core.truth_(inst_32678)){
var statearr_32702_32733 = state_32692__$1;
(statearr_32702_32733[(1)] = (12));

} else {
var statearr_32703_32734 = state_32692__$1;
(statearr_32703_32734[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (3))){
var inst_32690 = (state_32692[(2)]);
var state_32692__$1 = state_32692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32692__$1,inst_32690);
} else {
if((state_val_32693 === (12))){
var inst_32652 = (state_32692[(7)]);
var inst_32680 = cljs.core.vec.call(null,inst_32652);
var state_32692__$1 = state_32692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32692__$1,(15),out,inst_32680);
} else {
if((state_val_32693 === (2))){
var state_32692__$1 = state_32692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32692__$1,(4),ch);
} else {
if((state_val_32693 === (11))){
var inst_32656 = (state_32692[(9)]);
var inst_32660 = (state_32692[(10)]);
var inst_32670 = (state_32692[(2)]);
var inst_32671 = [];
var inst_32672 = inst_32671.push(inst_32656);
var inst_32652 = inst_32671;
var inst_32653 = inst_32660;
var state_32692__$1 = (function (){var statearr_32704 = state_32692;
(statearr_32704[(11)] = inst_32670);

(statearr_32704[(7)] = inst_32652);

(statearr_32704[(12)] = inst_32672);

(statearr_32704[(8)] = inst_32653);

return statearr_32704;
})();
var statearr_32705_32735 = state_32692__$1;
(statearr_32705_32735[(2)] = null);

(statearr_32705_32735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (9))){
var inst_32652 = (state_32692[(7)]);
var inst_32668 = cljs.core.vec.call(null,inst_32652);
var state_32692__$1 = state_32692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32692__$1,(11),out,inst_32668);
} else {
if((state_val_32693 === (5))){
var inst_32656 = (state_32692[(9)]);
var inst_32653 = (state_32692[(8)]);
var inst_32660 = (state_32692[(10)]);
var inst_32660__$1 = f.call(null,inst_32656);
var inst_32661 = cljs.core._EQ_.call(null,inst_32660__$1,inst_32653);
var inst_32662 = cljs.core.keyword_identical_QMARK_.call(null,inst_32653,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32663 = (inst_32661) || (inst_32662);
var state_32692__$1 = (function (){var statearr_32706 = state_32692;
(statearr_32706[(10)] = inst_32660__$1);

return statearr_32706;
})();
if(cljs.core.truth_(inst_32663)){
var statearr_32707_32736 = state_32692__$1;
(statearr_32707_32736[(1)] = (8));

} else {
var statearr_32708_32737 = state_32692__$1;
(statearr_32708_32737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (14))){
var inst_32685 = (state_32692[(2)]);
var inst_32686 = cljs.core.async.close_BANG_.call(null,out);
var state_32692__$1 = (function (){var statearr_32710 = state_32692;
(statearr_32710[(13)] = inst_32685);

return statearr_32710;
})();
var statearr_32711_32738 = state_32692__$1;
(statearr_32711_32738[(2)] = inst_32686);

(statearr_32711_32738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (10))){
var inst_32675 = (state_32692[(2)]);
var state_32692__$1 = state_32692;
var statearr_32712_32739 = state_32692__$1;
(statearr_32712_32739[(2)] = inst_32675);

(statearr_32712_32739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (8))){
var inst_32656 = (state_32692[(9)]);
var inst_32652 = (state_32692[(7)]);
var inst_32660 = (state_32692[(10)]);
var inst_32665 = inst_32652.push(inst_32656);
var tmp32709 = inst_32652;
var inst_32652__$1 = tmp32709;
var inst_32653 = inst_32660;
var state_32692__$1 = (function (){var statearr_32713 = state_32692;
(statearr_32713[(7)] = inst_32652__$1);

(statearr_32713[(8)] = inst_32653);

(statearr_32713[(14)] = inst_32665);

return statearr_32713;
})();
var statearr_32714_32740 = state_32692__$1;
(statearr_32714_32740[(2)] = null);

(statearr_32714_32740[(1)] = (2));


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
});})(c__29971__auto___32726,out))
;
return ((function (switch__29859__auto__,c__29971__auto___32726,out){
return (function() {
var cljs$core$async$state_machine__29860__auto__ = null;
var cljs$core$async$state_machine__29860__auto____0 = (function (){
var statearr_32718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32718[(0)] = cljs$core$async$state_machine__29860__auto__);

(statearr_32718[(1)] = (1));

return statearr_32718;
});
var cljs$core$async$state_machine__29860__auto____1 = (function (state_32692){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_32692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e32719){if((e32719 instanceof Object)){
var ex__29863__auto__ = e32719;
var statearr_32720_32741 = state_32692;
(statearr_32720_32741[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32742 = state_32692;
state_32692 = G__32742;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$state_machine__29860__auto__ = function(state_32692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29860__auto____1.call(this,state_32692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29860__auto____0;
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29860__auto____1;
return cljs$core$async$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto___32726,out))
})();
var state__29973__auto__ = (function (){var statearr_32721 = f__29972__auto__.call(null);
(statearr_32721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___32726);

return statearr_32721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto___32726,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map