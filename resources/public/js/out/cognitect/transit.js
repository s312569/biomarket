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
var seq__27057_27061 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__27058_27062 = null;
var count__27059_27063 = (0);
var i__27060_27064 = (0);
while(true){
if((i__27060_27064 < count__27059_27063)){
var k_27065 = cljs.core._nth.call(null,chunk__27058_27062,i__27060_27064);
var v_27066 = (b[k_27065]);
(a[k_27065] = v_27066);

var G__27067 = seq__27057_27061;
var G__27068 = chunk__27058_27062;
var G__27069 = count__27059_27063;
var G__27070 = (i__27060_27064 + (1));
seq__27057_27061 = G__27067;
chunk__27058_27062 = G__27068;
count__27059_27063 = G__27069;
i__27060_27064 = G__27070;
continue;
} else {
var temp__4425__auto___27071 = cljs.core.seq.call(null,seq__27057_27061);
if(temp__4425__auto___27071){
var seq__27057_27072__$1 = temp__4425__auto___27071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27057_27072__$1)){
var c__26691__auto___27073 = cljs.core.chunk_first.call(null,seq__27057_27072__$1);
var G__27074 = cljs.core.chunk_rest.call(null,seq__27057_27072__$1);
var G__27075 = c__26691__auto___27073;
var G__27076 = cljs.core.count.call(null,c__26691__auto___27073);
var G__27077 = (0);
seq__27057_27061 = G__27074;
chunk__27058_27062 = G__27075;
count__27059_27063 = G__27076;
i__27060_27064 = G__27077;
continue;
} else {
var k_27078 = cljs.core.first.call(null,seq__27057_27072__$1);
var v_27079 = (b[k_27078]);
(a[k_27078] = v_27079);

var G__27080 = cljs.core.next.call(null,seq__27057_27072__$1);
var G__27081 = null;
var G__27082 = (0);
var G__27083 = (0);
seq__27057_27061 = G__27080;
chunk__27058_27062 = G__27081;
count__27059_27063 = G__27082;
i__27060_27064 = G__27083;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__26486__auto__,writer__26487__auto__,opt__26488__auto__){
return cljs.core._write.call(null,writer__26487__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__26486__auto__,writer__26487__auto__,opt__26488__auto__){
return cljs.core._write.call(null,writer__26487__auto__,"cognitect.transit/VectorBuilder");
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
var args27084 = [];
var len__26950__auto___27087 = arguments.length;
var i__26951__auto___27088 = (0);
while(true){
if((i__26951__auto___27088 < len__26950__auto___27087)){
args27084.push((arguments[i__26951__auto___27088]));

var G__27089 = (i__26951__auto___27088 + (1));
i__26951__auto___27088 = G__27089;
continue;
} else {
}
break;
}

var G__27086 = args27084.length;
switch (G__27086) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27084.length)].join('')));

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
var G__27091 = (i + (2));
var G__27092 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__27091;
ret = G__27092;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__26486__auto__,writer__26487__auto__,opt__26488__auto__){
return cljs.core._write.call(null,writer__26487__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__26486__auto__,writer__26487__auto__,opt__26488__auto__){
return cljs.core._write.call(null,writer__26487__auto__,"cognitect.transit/SymbolHandler");
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
var seq__27093_27097 = cljs.core.seq.call(null,v);
var chunk__27094_27098 = null;
var count__27095_27099 = (0);
var i__27096_27100 = (0);
while(true){
if((i__27096_27100 < count__27095_27099)){
var x_27101 = cljs.core._nth.call(null,chunk__27094_27098,i__27096_27100);
ret.push(x_27101);

var G__27102 = seq__27093_27097;
var G__27103 = chunk__27094_27098;
var G__27104 = count__27095_27099;
var G__27105 = (i__27096_27100 + (1));
seq__27093_27097 = G__27102;
chunk__27094_27098 = G__27103;
count__27095_27099 = G__27104;
i__27096_27100 = G__27105;
continue;
} else {
var temp__4425__auto___27106 = cljs.core.seq.call(null,seq__27093_27097);
if(temp__4425__auto___27106){
var seq__27093_27107__$1 = temp__4425__auto___27106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27093_27107__$1)){
var c__26691__auto___27108 = cljs.core.chunk_first.call(null,seq__27093_27107__$1);
var G__27109 = cljs.core.chunk_rest.call(null,seq__27093_27107__$1);
var G__27110 = c__26691__auto___27108;
var G__27111 = cljs.core.count.call(null,c__26691__auto___27108);
var G__27112 = (0);
seq__27093_27097 = G__27109;
chunk__27094_27098 = G__27110;
count__27095_27099 = G__27111;
i__27096_27100 = G__27112;
continue;
} else {
var x_27113 = cljs.core.first.call(null,seq__27093_27107__$1);
ret.push(x_27113);

var G__27114 = cljs.core.next.call(null,seq__27093_27107__$1);
var G__27115 = null;
var G__27116 = (0);
var G__27117 = (0);
seq__27093_27097 = G__27114;
chunk__27094_27098 = G__27115;
count__27095_27099 = G__27116;
i__27096_27100 = G__27117;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__26486__auto__,writer__26487__auto__,opt__26488__auto__){
return cljs.core._write.call(null,writer__26487__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__26486__auto__,writer__26487__auto__,opt__26488__auto__){
return cljs.core._write.call(null,writer__26487__auto__,"cognitect.transit/MapHandler");
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
var seq__27118_27122 = cljs.core.seq.call(null,v);
var chunk__27119_27123 = null;
var count__27120_27124 = (0);
var i__27121_27125 = (0);
while(true){
if((i__27121_27125 < count__27120_27124)){
var x_27126 = cljs.core._nth.call(null,chunk__27119_27123,i__27121_27125);
ret.push(x_27126);

var G__27127 = seq__27118_27122;
var G__27128 = chunk__27119_27123;
var G__27129 = count__27120_27124;
var G__27130 = (i__27121_27125 + (1));
seq__27118_27122 = G__27127;
chunk__27119_27123 = G__27128;
count__27120_27124 = G__27129;
i__27121_27125 = G__27130;
continue;
} else {
var temp__4425__auto___27131 = cljs.core.seq.call(null,seq__27118_27122);
if(temp__4425__auto___27131){
var seq__27118_27132__$1 = temp__4425__auto___27131;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27118_27132__$1)){
var c__26691__auto___27133 = cljs.core.chunk_first.call(null,seq__27118_27132__$1);
var G__27134 = cljs.core.chunk_rest.call(null,seq__27118_27132__$1);
var G__27135 = c__26691__auto___27133;
var G__27136 = cljs.core.count.call(null,c__26691__auto___27133);
var G__27137 = (0);
seq__27118_27122 = G__27134;
chunk__27119_27123 = G__27135;
count__27120_27124 = G__27136;
i__27121_27125 = G__27137;
continue;
} else {
var x_27138 = cljs.core.first.call(null,seq__27118_27132__$1);
ret.push(x_27138);

var G__27139 = cljs.core.next.call(null,seq__27118_27132__$1);
var G__27140 = null;
var G__27141 = (0);
var G__27142 = (0);
seq__27118_27122 = G__27139;
chunk__27119_27123 = G__27140;
count__27120_27124 = G__27141;
i__27121_27125 = G__27142;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__26486__auto__,writer__26487__auto__,opt__26488__auto__){
return cljs.core._write.call(null,writer__26487__auto__,"cognitect.transit/SetHandler");
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
var seq__27143_27147 = cljs.core.seq.call(null,v);
var chunk__27144_27148 = null;
var count__27145_27149 = (0);
var i__27146_27150 = (0);
while(true){
if((i__27146_27150 < count__27145_27149)){
var x_27151 = cljs.core._nth.call(null,chunk__27144_27148,i__27146_27150);
ret.push(x_27151);

var G__27152 = seq__27143_27147;
var G__27153 = chunk__27144_27148;
var G__27154 = count__27145_27149;
var G__27155 = (i__27146_27150 + (1));
seq__27143_27147 = G__27152;
chunk__27144_27148 = G__27153;
count__27145_27149 = G__27154;
i__27146_27150 = G__27155;
continue;
} else {
var temp__4425__auto___27156 = cljs.core.seq.call(null,seq__27143_27147);
if(temp__4425__auto___27156){
var seq__27143_27157__$1 = temp__4425__auto___27156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27143_27157__$1)){
var c__26691__auto___27158 = cljs.core.chunk_first.call(null,seq__27143_27157__$1);
var G__27159 = cljs.core.chunk_rest.call(null,seq__27143_27157__$1);
var G__27160 = c__26691__auto___27158;
var G__27161 = cljs.core.count.call(null,c__26691__auto___27158);
var G__27162 = (0);
seq__27143_27147 = G__27159;
chunk__27144_27148 = G__27160;
count__27145_27149 = G__27161;
i__27146_27150 = G__27162;
continue;
} else {
var x_27163 = cljs.core.first.call(null,seq__27143_27157__$1);
ret.push(x_27163);

var G__27164 = cljs.core.next.call(null,seq__27143_27157__$1);
var G__27165 = null;
var G__27166 = (0);
var G__27167 = (0);
seq__27143_27147 = G__27164;
chunk__27144_27148 = G__27165;
count__27145_27149 = G__27166;
i__27146_27150 = G__27167;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__26486__auto__,writer__26487__auto__,opt__26488__auto__){
return cljs.core._write.call(null,writer__26487__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__26486__auto__,writer__26487__auto__,opt__26488__auto__){
return cljs.core._write.call(null,writer__26487__auto__,"cognitect.transit/UUIDHandler");
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
var args27168 = [];
var len__26950__auto___27179 = arguments.length;
var i__26951__auto___27180 = (0);
while(true){
if((i__26951__auto___27180 < len__26950__auto___27179)){
args27168.push((arguments[i__26951__auto___27180]));

var G__27181 = (i__26951__auto___27180 + (1));
i__26951__auto___27180 = G__27181;
continue;
} else {
}
break;
}

var G__27170 = args27168.length;
switch (G__27170) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27168.length)].join('')));

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
var G__27171 = obj;
G__27171.push(kfn.call(null,k),vfn.call(null,v));

return G__27171;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x27172 = cljs.core.clone.call(null,handlers);
x27172.forEach = ((function (x27172,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__27173 = cljs.core.seq.call(null,coll);
var chunk__27174 = null;
var count__27175 = (0);
var i__27176 = (0);
while(true){
if((i__27176 < count__27175)){
var vec__27177 = cljs.core._nth.call(null,chunk__27174,i__27176);
var k = cljs.core.nth.call(null,vec__27177,(0),null);
var v = cljs.core.nth.call(null,vec__27177,(1),null);
f.call(null,v,k);

var G__27183 = seq__27173;
var G__27184 = chunk__27174;
var G__27185 = count__27175;
var G__27186 = (i__27176 + (1));
seq__27173 = G__27183;
chunk__27174 = G__27184;
count__27175 = G__27185;
i__27176 = G__27186;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27173);
if(temp__4425__auto__){
var seq__27173__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27173__$1)){
var c__26691__auto__ = cljs.core.chunk_first.call(null,seq__27173__$1);
var G__27187 = cljs.core.chunk_rest.call(null,seq__27173__$1);
var G__27188 = c__26691__auto__;
var G__27189 = cljs.core.count.call(null,c__26691__auto__);
var G__27190 = (0);
seq__27173 = G__27187;
chunk__27174 = G__27188;
count__27175 = G__27189;
i__27176 = G__27190;
continue;
} else {
var vec__27178 = cljs.core.first.call(null,seq__27173__$1);
var k = cljs.core.nth.call(null,vec__27178,(0),null);
var v = cljs.core.nth.call(null,vec__27178,(1),null);
f.call(null,v,k);

var G__27191 = cljs.core.next.call(null,seq__27173__$1);
var G__27192 = null;
var G__27193 = (0);
var G__27194 = (0);
seq__27173 = G__27191;
chunk__27174 = G__27192;
count__27175 = G__27193;
i__27176 = G__27194;
continue;
}
} else {
return null;
}
}
break;
}
});})(x27172,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x27172;
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
var args27195 = [];
var len__26950__auto___27201 = arguments.length;
var i__26951__auto___27202 = (0);
while(true){
if((i__26951__auto___27202 < len__26950__auto___27201)){
args27195.push((arguments[i__26951__auto___27202]));

var G__27203 = (i__26951__auto___27202 + (1));
i__26951__auto___27202 = G__27203;
continue;
} else {
}
break;
}

var G__27197 = args27195.length;
switch (G__27197) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27195.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit27198 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit27198 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta27199){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta27199 = meta27199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit27198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27200,meta27199__$1){
var self__ = this;
var _27200__$1 = this;
return (new cognitect.transit.t_cognitect$transit27198(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta27199__$1));
});

cognitect.transit.t_cognitect$transit27198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27200){
var self__ = this;
var _27200__$1 = this;
return self__.meta27199;
});

cognitect.transit.t_cognitect$transit27198.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit27198.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit27198.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit27198.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit27198.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta27199","meta27199",-448008828,null)], null);
});

cognitect.transit.t_cognitect$transit27198.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit27198.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit27198";

cognitect.transit.t_cognitect$transit27198.cljs$lang$ctorPrWriter = (function (this__26486__auto__,writer__26487__auto__,opt__26488__auto__){
return cljs.core._write.call(null,writer__26487__auto__,"cognitect.transit/t_cognitect$transit27198");
});

cognitect.transit.__GT_t_cognitect$transit27198 = (function cognitect$transit$__GT_t_cognitect$transit27198(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta27199){
return (new cognitect.transit.t_cognitect$transit27198(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta27199));
});

}

return (new cognitect.transit.t_cognitect$transit27198(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__25880__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
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