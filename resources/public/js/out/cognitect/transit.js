// Compiled by ClojureScript 1.8.51 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__22957_22961 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__22958_22962 = null;
var count__22959_22963 = (0);
var i__22960_22964 = (0);
while(true){
if((i__22960_22964 < count__22959_22963)){
var k_22965 = cljs.core._nth.call(null,chunk__22958_22962,i__22960_22964);
var v_22966 = (b[k_22965]);
(a[k_22965] = v_22966);

var G__22967 = seq__22957_22961;
var G__22968 = chunk__22958_22962;
var G__22969 = count__22959_22963;
var G__22970 = (i__22960_22964 + (1));
seq__22957_22961 = G__22967;
chunk__22958_22962 = G__22968;
count__22959_22963 = G__22969;
i__22960_22964 = G__22970;
continue;
} else {
var temp__4425__auto___22971 = cljs.core.seq.call(null,seq__22957_22961);
if(temp__4425__auto___22971){
var seq__22957_22972__$1 = temp__4425__auto___22971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22957_22972__$1)){
var c__22591__auto___22973 = cljs.core.chunk_first.call(null,seq__22957_22972__$1);
var G__22974 = cljs.core.chunk_rest.call(null,seq__22957_22972__$1);
var G__22975 = c__22591__auto___22973;
var G__22976 = cljs.core.count.call(null,c__22591__auto___22973);
var G__22977 = (0);
seq__22957_22961 = G__22974;
chunk__22958_22962 = G__22975;
count__22959_22963 = G__22976;
i__22960_22964 = G__22977;
continue;
} else {
var k_22978 = cljs.core.first.call(null,seq__22957_22972__$1);
var v_22979 = (b[k_22978]);
(a[k_22978] = v_22979);

var G__22980 = cljs.core.next.call(null,seq__22957_22972__$1);
var G__22981 = null;
var G__22982 = (0);
var G__22983 = (0);
seq__22957_22961 = G__22980;
chunk__22958_22962 = G__22981;
count__22959_22963 = G__22982;
i__22960_22964 = G__22983;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__22386__auto__,writer__22387__auto__,opt__22388__auto__){
return cljs.core._write.call(null,writer__22387__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__22386__auto__,writer__22387__auto__,opt__22388__auto__){
return cljs.core._write.call(null,writer__22387__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args22984 = [];
var len__22850__auto___22987 = arguments.length;
var i__22851__auto___22988 = (0);
while(true){
if((i__22851__auto___22988 < len__22850__auto___22987)){
args22984.push((arguments[i__22851__auto___22988]));

var G__22989 = (i__22851__auto___22988 + (1));
i__22851__auto___22988 = G__22989;
continue;
} else {
}
break;
}

var G__22986 = args22984.length;
switch (G__22986) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22984.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__22991 = (i + (2));
var G__22992 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__22991;
ret = G__22992;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__22386__auto__,writer__22387__auto__,opt__22388__auto__){
return cljs.core._write.call(null,writer__22387__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__22386__auto__,writer__22387__auto__,opt__22388__auto__){
return cljs.core._write.call(null,writer__22387__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__22993_22997 = cljs.core.seq.call(null,v);
var chunk__22994_22998 = null;
var count__22995_22999 = (0);
var i__22996_23000 = (0);
while(true){
if((i__22996_23000 < count__22995_22999)){
var x_23001 = cljs.core._nth.call(null,chunk__22994_22998,i__22996_23000);
ret.push(x_23001);

var G__23002 = seq__22993_22997;
var G__23003 = chunk__22994_22998;
var G__23004 = count__22995_22999;
var G__23005 = (i__22996_23000 + (1));
seq__22993_22997 = G__23002;
chunk__22994_22998 = G__23003;
count__22995_22999 = G__23004;
i__22996_23000 = G__23005;
continue;
} else {
var temp__4425__auto___23006 = cljs.core.seq.call(null,seq__22993_22997);
if(temp__4425__auto___23006){
var seq__22993_23007__$1 = temp__4425__auto___23006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22993_23007__$1)){
var c__22591__auto___23008 = cljs.core.chunk_first.call(null,seq__22993_23007__$1);
var G__23009 = cljs.core.chunk_rest.call(null,seq__22993_23007__$1);
var G__23010 = c__22591__auto___23008;
var G__23011 = cljs.core.count.call(null,c__22591__auto___23008);
var G__23012 = (0);
seq__22993_22997 = G__23009;
chunk__22994_22998 = G__23010;
count__22995_22999 = G__23011;
i__22996_23000 = G__23012;
continue;
} else {
var x_23013 = cljs.core.first.call(null,seq__22993_23007__$1);
ret.push(x_23013);

var G__23014 = cljs.core.next.call(null,seq__22993_23007__$1);
var G__23015 = null;
var G__23016 = (0);
var G__23017 = (0);
seq__22993_22997 = G__23014;
chunk__22994_22998 = G__23015;
count__22995_22999 = G__23016;
i__22996_23000 = G__23017;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__22386__auto__,writer__22387__auto__,opt__22388__auto__){
return cljs.core._write.call(null,writer__22387__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__22386__auto__,writer__22387__auto__,opt__22388__auto__){
return cljs.core._write.call(null,writer__22387__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23018_23022 = cljs.core.seq.call(null,v);
var chunk__23019_23023 = null;
var count__23020_23024 = (0);
var i__23021_23025 = (0);
while(true){
if((i__23021_23025 < count__23020_23024)){
var x_23026 = cljs.core._nth.call(null,chunk__23019_23023,i__23021_23025);
ret.push(x_23026);

var G__23027 = seq__23018_23022;
var G__23028 = chunk__23019_23023;
var G__23029 = count__23020_23024;
var G__23030 = (i__23021_23025 + (1));
seq__23018_23022 = G__23027;
chunk__23019_23023 = G__23028;
count__23020_23024 = G__23029;
i__23021_23025 = G__23030;
continue;
} else {
var temp__4425__auto___23031 = cljs.core.seq.call(null,seq__23018_23022);
if(temp__4425__auto___23031){
var seq__23018_23032__$1 = temp__4425__auto___23031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23018_23032__$1)){
var c__22591__auto___23033 = cljs.core.chunk_first.call(null,seq__23018_23032__$1);
var G__23034 = cljs.core.chunk_rest.call(null,seq__23018_23032__$1);
var G__23035 = c__22591__auto___23033;
var G__23036 = cljs.core.count.call(null,c__22591__auto___23033);
var G__23037 = (0);
seq__23018_23022 = G__23034;
chunk__23019_23023 = G__23035;
count__23020_23024 = G__23036;
i__23021_23025 = G__23037;
continue;
} else {
var x_23038 = cljs.core.first.call(null,seq__23018_23032__$1);
ret.push(x_23038);

var G__23039 = cljs.core.next.call(null,seq__23018_23032__$1);
var G__23040 = null;
var G__23041 = (0);
var G__23042 = (0);
seq__23018_23022 = G__23039;
chunk__23019_23023 = G__23040;
count__23020_23024 = G__23041;
i__23021_23025 = G__23042;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__22386__auto__,writer__22387__auto__,opt__22388__auto__){
return cljs.core._write.call(null,writer__22387__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23043_23047 = cljs.core.seq.call(null,v);
var chunk__23044_23048 = null;
var count__23045_23049 = (0);
var i__23046_23050 = (0);
while(true){
if((i__23046_23050 < count__23045_23049)){
var x_23051 = cljs.core._nth.call(null,chunk__23044_23048,i__23046_23050);
ret.push(x_23051);

var G__23052 = seq__23043_23047;
var G__23053 = chunk__23044_23048;
var G__23054 = count__23045_23049;
var G__23055 = (i__23046_23050 + (1));
seq__23043_23047 = G__23052;
chunk__23044_23048 = G__23053;
count__23045_23049 = G__23054;
i__23046_23050 = G__23055;
continue;
} else {
var temp__4425__auto___23056 = cljs.core.seq.call(null,seq__23043_23047);
if(temp__4425__auto___23056){
var seq__23043_23057__$1 = temp__4425__auto___23056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23043_23057__$1)){
var c__22591__auto___23058 = cljs.core.chunk_first.call(null,seq__23043_23057__$1);
var G__23059 = cljs.core.chunk_rest.call(null,seq__23043_23057__$1);
var G__23060 = c__22591__auto___23058;
var G__23061 = cljs.core.count.call(null,c__22591__auto___23058);
var G__23062 = (0);
seq__23043_23047 = G__23059;
chunk__23044_23048 = G__23060;
count__23045_23049 = G__23061;
i__23046_23050 = G__23062;
continue;
} else {
var x_23063 = cljs.core.first.call(null,seq__23043_23057__$1);
ret.push(x_23063);

var G__23064 = cljs.core.next.call(null,seq__23043_23057__$1);
var G__23065 = null;
var G__23066 = (0);
var G__23067 = (0);
seq__23043_23047 = G__23064;
chunk__23044_23048 = G__23065;
count__23045_23049 = G__23066;
i__23046_23050 = G__23067;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__22386__auto__,writer__22387__auto__,opt__22388__auto__){
return cljs.core._write.call(null,writer__22387__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__22386__auto__,writer__22387__auto__,opt__22388__auto__){
return cljs.core._write.call(null,writer__22387__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args23068 = [];
var len__22850__auto___23079 = arguments.length;
var i__22851__auto___23080 = (0);
while(true){
if((i__22851__auto___23080 < len__22850__auto___23079)){
args23068.push((arguments[i__22851__auto___23080]));

var G__23081 = (i__22851__auto___23080 + (1));
i__22851__auto___23080 = G__23081;
continue;
} else {
}
break;
}

var G__23070 = args23068.length;
switch (G__23070) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23068.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__23071 = obj;
G__23071.push(kfn.call(null,k),vfn.call(null,v));

return G__23071;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x23072 = cljs.core.clone.call(null,handlers);
x23072.forEach = ((function (x23072,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__23073 = cljs.core.seq.call(null,coll);
var chunk__23074 = null;
var count__23075 = (0);
var i__23076 = (0);
while(true){
if((i__23076 < count__23075)){
var vec__23077 = cljs.core._nth.call(null,chunk__23074,i__23076);
var k = cljs.core.nth.call(null,vec__23077,(0),null);
var v = cljs.core.nth.call(null,vec__23077,(1),null);
f.call(null,v,k);

var G__23083 = seq__23073;
var G__23084 = chunk__23074;
var G__23085 = count__23075;
var G__23086 = (i__23076 + (1));
seq__23073 = G__23083;
chunk__23074 = G__23084;
count__23075 = G__23085;
i__23076 = G__23086;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23073);
if(temp__4425__auto__){
var seq__23073__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23073__$1)){
var c__22591__auto__ = cljs.core.chunk_first.call(null,seq__23073__$1);
var G__23087 = cljs.core.chunk_rest.call(null,seq__23073__$1);
var G__23088 = c__22591__auto__;
var G__23089 = cljs.core.count.call(null,c__22591__auto__);
var G__23090 = (0);
seq__23073 = G__23087;
chunk__23074 = G__23088;
count__23075 = G__23089;
i__23076 = G__23090;
continue;
} else {
var vec__23078 = cljs.core.first.call(null,seq__23073__$1);
var k = cljs.core.nth.call(null,vec__23078,(0),null);
var v = cljs.core.nth.call(null,vec__23078,(1),null);
f.call(null,v,k);

var G__23091 = cljs.core.next.call(null,seq__23073__$1);
var G__23092 = null;
var G__23093 = (0);
var G__23094 = (0);
seq__23073 = G__23091;
chunk__23074 = G__23092;
count__23075 = G__23093;
i__23076 = G__23094;
continue;
}
} else {
return null;
}
}
break;
}
});})(x23072,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x23072;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args23095 = [];
var len__22850__auto___23101 = arguments.length;
var i__22851__auto___23102 = (0);
while(true){
if((i__22851__auto___23102 < len__22850__auto___23101)){
args23095.push((arguments[i__22851__auto___23102]));

var G__23103 = (i__22851__auto___23102 + (1));
i__22851__auto___23102 = G__23103;
continue;
} else {
}
break;
}

var G__23097 = args23095.length;
switch (G__23097) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23095.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit23098 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit23098 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta23099){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta23099 = meta23099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit23098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23100,meta23099__$1){
var self__ = this;
var _23100__$1 = this;
return (new cognitect.transit.t_cognitect$transit23098(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta23099__$1));
});

cognitect.transit.t_cognitect$transit23098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23100){
var self__ = this;
var _23100__$1 = this;
return self__.meta23099;
});

cognitect.transit.t_cognitect$transit23098.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit23098.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit23098.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit23098.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit23098.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta23099","meta23099",-204928915,null)], null);
});

cognitect.transit.t_cognitect$transit23098.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit23098.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit23098";

cognitect.transit.t_cognitect$transit23098.cljs$lang$ctorPrWriter = (function (this__22386__auto__,writer__22387__auto__,opt__22388__auto__){
return cljs.core._write.call(null,writer__22387__auto__,"cognitect.transit/t_cognitect$transit23098");
});

cognitect.transit.__GT_t_cognitect$transit23098 = (function cognitect$transit$__GT_t_cognitect$transit23098(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta23099){
return (new cognitect.transit.t_cognitect$transit23098(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta23099));
});

}

return (new cognitect.transit.t_cognitect$transit23098(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__21780__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__21780__auto__)){
return or__21780__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map