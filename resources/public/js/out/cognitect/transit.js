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
var seq__23753_23757 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__23754_23758 = null;
var count__23755_23759 = (0);
var i__23756_23760 = (0);
while(true){
if((i__23756_23760 < count__23755_23759)){
var k_23761 = cljs.core._nth.call(null,chunk__23754_23758,i__23756_23760);
var v_23762 = (b[k_23761]);
(a[k_23761] = v_23762);

var G__23763 = seq__23753_23757;
var G__23764 = chunk__23754_23758;
var G__23765 = count__23755_23759;
var G__23766 = (i__23756_23760 + (1));
seq__23753_23757 = G__23763;
chunk__23754_23758 = G__23764;
count__23755_23759 = G__23765;
i__23756_23760 = G__23766;
continue;
} else {
var temp__4425__auto___23767 = cljs.core.seq.call(null,seq__23753_23757);
if(temp__4425__auto___23767){
var seq__23753_23768__$1 = temp__4425__auto___23767;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23753_23768__$1)){
var c__23387__auto___23769 = cljs.core.chunk_first.call(null,seq__23753_23768__$1);
var G__23770 = cljs.core.chunk_rest.call(null,seq__23753_23768__$1);
var G__23771 = c__23387__auto___23769;
var G__23772 = cljs.core.count.call(null,c__23387__auto___23769);
var G__23773 = (0);
seq__23753_23757 = G__23770;
chunk__23754_23758 = G__23771;
count__23755_23759 = G__23772;
i__23756_23760 = G__23773;
continue;
} else {
var k_23774 = cljs.core.first.call(null,seq__23753_23768__$1);
var v_23775 = (b[k_23774]);
(a[k_23774] = v_23775);

var G__23776 = cljs.core.next.call(null,seq__23753_23768__$1);
var G__23777 = null;
var G__23778 = (0);
var G__23779 = (0);
seq__23753_23757 = G__23776;
chunk__23754_23758 = G__23777;
count__23755_23759 = G__23778;
i__23756_23760 = G__23779;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"cognitect.transit/VectorBuilder");
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
var args23780 = [];
var len__23646__auto___23783 = arguments.length;
var i__23647__auto___23784 = (0);
while(true){
if((i__23647__auto___23784 < len__23646__auto___23783)){
args23780.push((arguments[i__23647__auto___23784]));

var G__23785 = (i__23647__auto___23784 + (1));
i__23647__auto___23784 = G__23785;
continue;
} else {
}
break;
}

var G__23782 = args23780.length;
switch (G__23782) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23780.length)].join('')));

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
var G__23787 = (i + (2));
var G__23788 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__23787;
ret = G__23788;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"cognitect.transit/SymbolHandler");
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
var seq__23789_23793 = cljs.core.seq.call(null,v);
var chunk__23790_23794 = null;
var count__23791_23795 = (0);
var i__23792_23796 = (0);
while(true){
if((i__23792_23796 < count__23791_23795)){
var x_23797 = cljs.core._nth.call(null,chunk__23790_23794,i__23792_23796);
ret.push(x_23797);

var G__23798 = seq__23789_23793;
var G__23799 = chunk__23790_23794;
var G__23800 = count__23791_23795;
var G__23801 = (i__23792_23796 + (1));
seq__23789_23793 = G__23798;
chunk__23790_23794 = G__23799;
count__23791_23795 = G__23800;
i__23792_23796 = G__23801;
continue;
} else {
var temp__4425__auto___23802 = cljs.core.seq.call(null,seq__23789_23793);
if(temp__4425__auto___23802){
var seq__23789_23803__$1 = temp__4425__auto___23802;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23789_23803__$1)){
var c__23387__auto___23804 = cljs.core.chunk_first.call(null,seq__23789_23803__$1);
var G__23805 = cljs.core.chunk_rest.call(null,seq__23789_23803__$1);
var G__23806 = c__23387__auto___23804;
var G__23807 = cljs.core.count.call(null,c__23387__auto___23804);
var G__23808 = (0);
seq__23789_23793 = G__23805;
chunk__23790_23794 = G__23806;
count__23791_23795 = G__23807;
i__23792_23796 = G__23808;
continue;
} else {
var x_23809 = cljs.core.first.call(null,seq__23789_23803__$1);
ret.push(x_23809);

var G__23810 = cljs.core.next.call(null,seq__23789_23803__$1);
var G__23811 = null;
var G__23812 = (0);
var G__23813 = (0);
seq__23789_23793 = G__23810;
chunk__23790_23794 = G__23811;
count__23791_23795 = G__23812;
i__23792_23796 = G__23813;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"cognitect.transit/MapHandler");
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
var seq__23814_23818 = cljs.core.seq.call(null,v);
var chunk__23815_23819 = null;
var count__23816_23820 = (0);
var i__23817_23821 = (0);
while(true){
if((i__23817_23821 < count__23816_23820)){
var x_23822 = cljs.core._nth.call(null,chunk__23815_23819,i__23817_23821);
ret.push(x_23822);

var G__23823 = seq__23814_23818;
var G__23824 = chunk__23815_23819;
var G__23825 = count__23816_23820;
var G__23826 = (i__23817_23821 + (1));
seq__23814_23818 = G__23823;
chunk__23815_23819 = G__23824;
count__23816_23820 = G__23825;
i__23817_23821 = G__23826;
continue;
} else {
var temp__4425__auto___23827 = cljs.core.seq.call(null,seq__23814_23818);
if(temp__4425__auto___23827){
var seq__23814_23828__$1 = temp__4425__auto___23827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23814_23828__$1)){
var c__23387__auto___23829 = cljs.core.chunk_first.call(null,seq__23814_23828__$1);
var G__23830 = cljs.core.chunk_rest.call(null,seq__23814_23828__$1);
var G__23831 = c__23387__auto___23829;
var G__23832 = cljs.core.count.call(null,c__23387__auto___23829);
var G__23833 = (0);
seq__23814_23818 = G__23830;
chunk__23815_23819 = G__23831;
count__23816_23820 = G__23832;
i__23817_23821 = G__23833;
continue;
} else {
var x_23834 = cljs.core.first.call(null,seq__23814_23828__$1);
ret.push(x_23834);

var G__23835 = cljs.core.next.call(null,seq__23814_23828__$1);
var G__23836 = null;
var G__23837 = (0);
var G__23838 = (0);
seq__23814_23818 = G__23835;
chunk__23815_23819 = G__23836;
count__23816_23820 = G__23837;
i__23817_23821 = G__23838;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"cognitect.transit/SetHandler");
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
var seq__23839_23843 = cljs.core.seq.call(null,v);
var chunk__23840_23844 = null;
var count__23841_23845 = (0);
var i__23842_23846 = (0);
while(true){
if((i__23842_23846 < count__23841_23845)){
var x_23847 = cljs.core._nth.call(null,chunk__23840_23844,i__23842_23846);
ret.push(x_23847);

var G__23848 = seq__23839_23843;
var G__23849 = chunk__23840_23844;
var G__23850 = count__23841_23845;
var G__23851 = (i__23842_23846 + (1));
seq__23839_23843 = G__23848;
chunk__23840_23844 = G__23849;
count__23841_23845 = G__23850;
i__23842_23846 = G__23851;
continue;
} else {
var temp__4425__auto___23852 = cljs.core.seq.call(null,seq__23839_23843);
if(temp__4425__auto___23852){
var seq__23839_23853__$1 = temp__4425__auto___23852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23839_23853__$1)){
var c__23387__auto___23854 = cljs.core.chunk_first.call(null,seq__23839_23853__$1);
var G__23855 = cljs.core.chunk_rest.call(null,seq__23839_23853__$1);
var G__23856 = c__23387__auto___23854;
var G__23857 = cljs.core.count.call(null,c__23387__auto___23854);
var G__23858 = (0);
seq__23839_23843 = G__23855;
chunk__23840_23844 = G__23856;
count__23841_23845 = G__23857;
i__23842_23846 = G__23858;
continue;
} else {
var x_23859 = cljs.core.first.call(null,seq__23839_23853__$1);
ret.push(x_23859);

var G__23860 = cljs.core.next.call(null,seq__23839_23853__$1);
var G__23861 = null;
var G__23862 = (0);
var G__23863 = (0);
seq__23839_23843 = G__23860;
chunk__23840_23844 = G__23861;
count__23841_23845 = G__23862;
i__23842_23846 = G__23863;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"cognitect.transit/UUIDHandler");
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
var args23864 = [];
var len__23646__auto___23875 = arguments.length;
var i__23647__auto___23876 = (0);
while(true){
if((i__23647__auto___23876 < len__23646__auto___23875)){
args23864.push((arguments[i__23647__auto___23876]));

var G__23877 = (i__23647__auto___23876 + (1));
i__23647__auto___23876 = G__23877;
continue;
} else {
}
break;
}

var G__23866 = args23864.length;
switch (G__23866) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23864.length)].join('')));

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
var G__23867 = obj;
G__23867.push(kfn.call(null,k),vfn.call(null,v));

return G__23867;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x23868 = cljs.core.clone.call(null,handlers);
x23868.forEach = ((function (x23868,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__23869 = cljs.core.seq.call(null,coll);
var chunk__23870 = null;
var count__23871 = (0);
var i__23872 = (0);
while(true){
if((i__23872 < count__23871)){
var vec__23873 = cljs.core._nth.call(null,chunk__23870,i__23872);
var k = cljs.core.nth.call(null,vec__23873,(0),null);
var v = cljs.core.nth.call(null,vec__23873,(1),null);
f.call(null,v,k);

var G__23879 = seq__23869;
var G__23880 = chunk__23870;
var G__23881 = count__23871;
var G__23882 = (i__23872 + (1));
seq__23869 = G__23879;
chunk__23870 = G__23880;
count__23871 = G__23881;
i__23872 = G__23882;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23869);
if(temp__4425__auto__){
var seq__23869__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23869__$1)){
var c__23387__auto__ = cljs.core.chunk_first.call(null,seq__23869__$1);
var G__23883 = cljs.core.chunk_rest.call(null,seq__23869__$1);
var G__23884 = c__23387__auto__;
var G__23885 = cljs.core.count.call(null,c__23387__auto__);
var G__23886 = (0);
seq__23869 = G__23883;
chunk__23870 = G__23884;
count__23871 = G__23885;
i__23872 = G__23886;
continue;
} else {
var vec__23874 = cljs.core.first.call(null,seq__23869__$1);
var k = cljs.core.nth.call(null,vec__23874,(0),null);
var v = cljs.core.nth.call(null,vec__23874,(1),null);
f.call(null,v,k);

var G__23887 = cljs.core.next.call(null,seq__23869__$1);
var G__23888 = null;
var G__23889 = (0);
var G__23890 = (0);
seq__23869 = G__23887;
chunk__23870 = G__23888;
count__23871 = G__23889;
i__23872 = G__23890;
continue;
}
} else {
return null;
}
}
break;
}
});})(x23868,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x23868;
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
var args23891 = [];
var len__23646__auto___23897 = arguments.length;
var i__23647__auto___23898 = (0);
while(true){
if((i__23647__auto___23898 < len__23646__auto___23897)){
args23891.push((arguments[i__23647__auto___23898]));

var G__23899 = (i__23647__auto___23898 + (1));
i__23647__auto___23898 = G__23899;
continue;
} else {
}
break;
}

var G__23893 = args23891.length;
switch (G__23893) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23891.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit23894 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit23894 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta23895){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta23895 = meta23895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit23894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23896,meta23895__$1){
var self__ = this;
var _23896__$1 = this;
return (new cognitect.transit.t_cognitect$transit23894(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta23895__$1));
});

cognitect.transit.t_cognitect$transit23894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23896){
var self__ = this;
var _23896__$1 = this;
return self__.meta23895;
});

cognitect.transit.t_cognitect$transit23894.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit23894.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit23894.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit23894.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit23894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta23895","meta23895",927388853,null)], null);
});

cognitect.transit.t_cognitect$transit23894.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit23894.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit23894";

cognitect.transit.t_cognitect$transit23894.cljs$lang$ctorPrWriter = (function (this__23182__auto__,writer__23183__auto__,opt__23184__auto__){
return cljs.core._write.call(null,writer__23183__auto__,"cognitect.transit/t_cognitect$transit23894");
});

cognitect.transit.__GT_t_cognitect$transit23894 = (function cognitect$transit$__GT_t_cognitect$transit23894(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta23895){
return (new cognitect.transit.t_cognitect$transit23894(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta23895));
});

}

return (new cognitect.transit.t_cognitect$transit23894(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__22576__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__22576__auto__)){
return or__22576__auto__;
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