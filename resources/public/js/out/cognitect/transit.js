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
var seq__26820_26824 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__26821_26825 = null;
var count__26822_26826 = (0);
var i__26823_26827 = (0);
while(true){
if((i__26823_26827 < count__26822_26826)){
var k_26828 = cljs.core._nth.call(null,chunk__26821_26825,i__26823_26827);
var v_26829 = (b[k_26828]);
(a[k_26828] = v_26829);

var G__26830 = seq__26820_26824;
var G__26831 = chunk__26821_26825;
var G__26832 = count__26822_26826;
var G__26833 = (i__26823_26827 + (1));
seq__26820_26824 = G__26830;
chunk__26821_26825 = G__26831;
count__26822_26826 = G__26832;
i__26823_26827 = G__26833;
continue;
} else {
var temp__4425__auto___26834 = cljs.core.seq.call(null,seq__26820_26824);
if(temp__4425__auto___26834){
var seq__26820_26835__$1 = temp__4425__auto___26834;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26820_26835__$1)){
var c__26454__auto___26836 = cljs.core.chunk_first.call(null,seq__26820_26835__$1);
var G__26837 = cljs.core.chunk_rest.call(null,seq__26820_26835__$1);
var G__26838 = c__26454__auto___26836;
var G__26839 = cljs.core.count.call(null,c__26454__auto___26836);
var G__26840 = (0);
seq__26820_26824 = G__26837;
chunk__26821_26825 = G__26838;
count__26822_26826 = G__26839;
i__26823_26827 = G__26840;
continue;
} else {
var k_26841 = cljs.core.first.call(null,seq__26820_26835__$1);
var v_26842 = (b[k_26841]);
(a[k_26841] = v_26842);

var G__26843 = cljs.core.next.call(null,seq__26820_26835__$1);
var G__26844 = null;
var G__26845 = (0);
var G__26846 = (0);
seq__26820_26824 = G__26843;
chunk__26821_26825 = G__26844;
count__26822_26826 = G__26845;
i__26823_26827 = G__26846;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__26249__auto__,writer__26250__auto__,opt__26251__auto__){
return cljs.core._write.call(null,writer__26250__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__26249__auto__,writer__26250__auto__,opt__26251__auto__){
return cljs.core._write.call(null,writer__26250__auto__,"cognitect.transit/VectorBuilder");
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
var args26847 = [];
var len__26713__auto___26850 = arguments.length;
var i__26714__auto___26851 = (0);
while(true){
if((i__26714__auto___26851 < len__26713__auto___26850)){
args26847.push((arguments[i__26714__auto___26851]));

var G__26852 = (i__26714__auto___26851 + (1));
i__26714__auto___26851 = G__26852;
continue;
} else {
}
break;
}

var G__26849 = args26847.length;
switch (G__26849) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26847.length)].join('')));

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
var G__26854 = (i + (2));
var G__26855 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__26854;
ret = G__26855;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__26249__auto__,writer__26250__auto__,opt__26251__auto__){
return cljs.core._write.call(null,writer__26250__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__26249__auto__,writer__26250__auto__,opt__26251__auto__){
return cljs.core._write.call(null,writer__26250__auto__,"cognitect.transit/SymbolHandler");
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
var seq__26856_26860 = cljs.core.seq.call(null,v);
var chunk__26857_26861 = null;
var count__26858_26862 = (0);
var i__26859_26863 = (0);
while(true){
if((i__26859_26863 < count__26858_26862)){
var x_26864 = cljs.core._nth.call(null,chunk__26857_26861,i__26859_26863);
ret.push(x_26864);

var G__26865 = seq__26856_26860;
var G__26866 = chunk__26857_26861;
var G__26867 = count__26858_26862;
var G__26868 = (i__26859_26863 + (1));
seq__26856_26860 = G__26865;
chunk__26857_26861 = G__26866;
count__26858_26862 = G__26867;
i__26859_26863 = G__26868;
continue;
} else {
var temp__4425__auto___26869 = cljs.core.seq.call(null,seq__26856_26860);
if(temp__4425__auto___26869){
var seq__26856_26870__$1 = temp__4425__auto___26869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26856_26870__$1)){
var c__26454__auto___26871 = cljs.core.chunk_first.call(null,seq__26856_26870__$1);
var G__26872 = cljs.core.chunk_rest.call(null,seq__26856_26870__$1);
var G__26873 = c__26454__auto___26871;
var G__26874 = cljs.core.count.call(null,c__26454__auto___26871);
var G__26875 = (0);
seq__26856_26860 = G__26872;
chunk__26857_26861 = G__26873;
count__26858_26862 = G__26874;
i__26859_26863 = G__26875;
continue;
} else {
var x_26876 = cljs.core.first.call(null,seq__26856_26870__$1);
ret.push(x_26876);

var G__26877 = cljs.core.next.call(null,seq__26856_26870__$1);
var G__26878 = null;
var G__26879 = (0);
var G__26880 = (0);
seq__26856_26860 = G__26877;
chunk__26857_26861 = G__26878;
count__26858_26862 = G__26879;
i__26859_26863 = G__26880;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__26249__auto__,writer__26250__auto__,opt__26251__auto__){
return cljs.core._write.call(null,writer__26250__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__26249__auto__,writer__26250__auto__,opt__26251__auto__){
return cljs.core._write.call(null,writer__26250__auto__,"cognitect.transit/MapHandler");
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
var seq__26881_26885 = cljs.core.seq.call(null,v);
var chunk__26882_26886 = null;
var count__26883_26887 = (0);
var i__26884_26888 = (0);
while(true){
if((i__26884_26888 < count__26883_26887)){
var x_26889 = cljs.core._nth.call(null,chunk__26882_26886,i__26884_26888);
ret.push(x_26889);

var G__26890 = seq__26881_26885;
var G__26891 = chunk__26882_26886;
var G__26892 = count__26883_26887;
var G__26893 = (i__26884_26888 + (1));
seq__26881_26885 = G__26890;
chunk__26882_26886 = G__26891;
count__26883_26887 = G__26892;
i__26884_26888 = G__26893;
continue;
} else {
var temp__4425__auto___26894 = cljs.core.seq.call(null,seq__26881_26885);
if(temp__4425__auto___26894){
var seq__26881_26895__$1 = temp__4425__auto___26894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26881_26895__$1)){
var c__26454__auto___26896 = cljs.core.chunk_first.call(null,seq__26881_26895__$1);
var G__26897 = cljs.core.chunk_rest.call(null,seq__26881_26895__$1);
var G__26898 = c__26454__auto___26896;
var G__26899 = cljs.core.count.call(null,c__26454__auto___26896);
var G__26900 = (0);
seq__26881_26885 = G__26897;
chunk__26882_26886 = G__26898;
count__26883_26887 = G__26899;
i__26884_26888 = G__26900;
continue;
} else {
var x_26901 = cljs.core.first.call(null,seq__26881_26895__$1);
ret.push(x_26901);

var G__26902 = cljs.core.next.call(null,seq__26881_26895__$1);
var G__26903 = null;
var G__26904 = (0);
var G__26905 = (0);
seq__26881_26885 = G__26902;
chunk__26882_26886 = G__26903;
count__26883_26887 = G__26904;
i__26884_26888 = G__26905;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__26249__auto__,writer__26250__auto__,opt__26251__auto__){
return cljs.core._write.call(null,writer__26250__auto__,"cognitect.transit/SetHandler");
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
var seq__26906_26910 = cljs.core.seq.call(null,v);
var chunk__26907_26911 = null;
var count__26908_26912 = (0);
var i__26909_26913 = (0);
while(true){
if((i__26909_26913 < count__26908_26912)){
var x_26914 = cljs.core._nth.call(null,chunk__26907_26911,i__26909_26913);
ret.push(x_26914);

var G__26915 = seq__26906_26910;
var G__26916 = chunk__26907_26911;
var G__26917 = count__26908_26912;
var G__26918 = (i__26909_26913 + (1));
seq__26906_26910 = G__26915;
chunk__26907_26911 = G__26916;
count__26908_26912 = G__26917;
i__26909_26913 = G__26918;
continue;
} else {
var temp__4425__auto___26919 = cljs.core.seq.call(null,seq__26906_26910);
if(temp__4425__auto___26919){
var seq__26906_26920__$1 = temp__4425__auto___26919;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26906_26920__$1)){
var c__26454__auto___26921 = cljs.core.chunk_first.call(null,seq__26906_26920__$1);
var G__26922 = cljs.core.chunk_rest.call(null,seq__26906_26920__$1);
var G__26923 = c__26454__auto___26921;
var G__26924 = cljs.core.count.call(null,c__26454__auto___26921);
var G__26925 = (0);
seq__26906_26910 = G__26922;
chunk__26907_26911 = G__26923;
count__26908_26912 = G__26924;
i__26909_26913 = G__26925;
continue;
} else {
var x_26926 = cljs.core.first.call(null,seq__26906_26920__$1);
ret.push(x_26926);

var G__26927 = cljs.core.next.call(null,seq__26906_26920__$1);
var G__26928 = null;
var G__26929 = (0);
var G__26930 = (0);
seq__26906_26910 = G__26927;
chunk__26907_26911 = G__26928;
count__26908_26912 = G__26929;
i__26909_26913 = G__26930;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__26249__auto__,writer__26250__auto__,opt__26251__auto__){
return cljs.core._write.call(null,writer__26250__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__26249__auto__,writer__26250__auto__,opt__26251__auto__){
return cljs.core._write.call(null,writer__26250__auto__,"cognitect.transit/UUIDHandler");
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
var args26931 = [];
var len__26713__auto___26942 = arguments.length;
var i__26714__auto___26943 = (0);
while(true){
if((i__26714__auto___26943 < len__26713__auto___26942)){
args26931.push((arguments[i__26714__auto___26943]));

var G__26944 = (i__26714__auto___26943 + (1));
i__26714__auto___26943 = G__26944;
continue;
} else {
}
break;
}

var G__26933 = args26931.length;
switch (G__26933) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26931.length)].join('')));

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
var G__26934 = obj;
G__26934.push(kfn.call(null,k),vfn.call(null,v));

return G__26934;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x26935 = cljs.core.clone.call(null,handlers);
x26935.forEach = ((function (x26935,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__26936 = cljs.core.seq.call(null,coll);
var chunk__26937 = null;
var count__26938 = (0);
var i__26939 = (0);
while(true){
if((i__26939 < count__26938)){
var vec__26940 = cljs.core._nth.call(null,chunk__26937,i__26939);
var k = cljs.core.nth.call(null,vec__26940,(0),null);
var v = cljs.core.nth.call(null,vec__26940,(1),null);
f.call(null,v,k);

var G__26946 = seq__26936;
var G__26947 = chunk__26937;
var G__26948 = count__26938;
var G__26949 = (i__26939 + (1));
seq__26936 = G__26946;
chunk__26937 = G__26947;
count__26938 = G__26948;
i__26939 = G__26949;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26936);
if(temp__4425__auto__){
var seq__26936__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26936__$1)){
var c__26454__auto__ = cljs.core.chunk_first.call(null,seq__26936__$1);
var G__26950 = cljs.core.chunk_rest.call(null,seq__26936__$1);
var G__26951 = c__26454__auto__;
var G__26952 = cljs.core.count.call(null,c__26454__auto__);
var G__26953 = (0);
seq__26936 = G__26950;
chunk__26937 = G__26951;
count__26938 = G__26952;
i__26939 = G__26953;
continue;
} else {
var vec__26941 = cljs.core.first.call(null,seq__26936__$1);
var k = cljs.core.nth.call(null,vec__26941,(0),null);
var v = cljs.core.nth.call(null,vec__26941,(1),null);
f.call(null,v,k);

var G__26954 = cljs.core.next.call(null,seq__26936__$1);
var G__26955 = null;
var G__26956 = (0);
var G__26957 = (0);
seq__26936 = G__26954;
chunk__26937 = G__26955;
count__26938 = G__26956;
i__26939 = G__26957;
continue;
}
} else {
return null;
}
}
break;
}
});})(x26935,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x26935;
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
var args26958 = [];
var len__26713__auto___26964 = arguments.length;
var i__26714__auto___26965 = (0);
while(true){
if((i__26714__auto___26965 < len__26713__auto___26964)){
args26958.push((arguments[i__26714__auto___26965]));

var G__26966 = (i__26714__auto___26965 + (1));
i__26714__auto___26965 = G__26966;
continue;
} else {
}
break;
}

var G__26960 = args26958.length;
switch (G__26960) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26958.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit26961 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit26961 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta26962){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta26962 = meta26962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit26961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26963,meta26962__$1){
var self__ = this;
var _26963__$1 = this;
return (new cognitect.transit.t_cognitect$transit26961(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta26962__$1));
});

cognitect.transit.t_cognitect$transit26961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26963){
var self__ = this;
var _26963__$1 = this;
return self__.meta26962;
});

cognitect.transit.t_cognitect$transit26961.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit26961.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit26961.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit26961.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit26961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta26962","meta26962",890583983,null)], null);
});

cognitect.transit.t_cognitect$transit26961.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit26961.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit26961";

cognitect.transit.t_cognitect$transit26961.cljs$lang$ctorPrWriter = (function (this__26249__auto__,writer__26250__auto__,opt__26251__auto__){
return cljs.core._write.call(null,writer__26250__auto__,"cognitect.transit/t_cognitect$transit26961");
});

cognitect.transit.__GT_t_cognitect$transit26961 = (function cognitect$transit$__GT_t_cognitect$transit26961(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta26962){
return (new cognitect.transit.t_cognitect$transit26961(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta26962));
});

}

return (new cognitect.transit.t_cognitect$transit26961(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__25643__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
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