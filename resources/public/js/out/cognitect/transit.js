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
var seq__23740_23744 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__23741_23745 = null;
var count__23742_23746 = (0);
var i__23743_23747 = (0);
while(true){
if((i__23743_23747 < count__23742_23746)){
var k_23748 = cljs.core._nth.call(null,chunk__23741_23745,i__23743_23747);
var v_23749 = (b[k_23748]);
(a[k_23748] = v_23749);

var G__23750 = seq__23740_23744;
var G__23751 = chunk__23741_23745;
var G__23752 = count__23742_23746;
var G__23753 = (i__23743_23747 + (1));
seq__23740_23744 = G__23750;
chunk__23741_23745 = G__23751;
count__23742_23746 = G__23752;
i__23743_23747 = G__23753;
continue;
} else {
var temp__4425__auto___23754 = cljs.core.seq.call(null,seq__23740_23744);
if(temp__4425__auto___23754){
var seq__23740_23755__$1 = temp__4425__auto___23754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23740_23755__$1)){
var c__23374__auto___23756 = cljs.core.chunk_first.call(null,seq__23740_23755__$1);
var G__23757 = cljs.core.chunk_rest.call(null,seq__23740_23755__$1);
var G__23758 = c__23374__auto___23756;
var G__23759 = cljs.core.count.call(null,c__23374__auto___23756);
var G__23760 = (0);
seq__23740_23744 = G__23757;
chunk__23741_23745 = G__23758;
count__23742_23746 = G__23759;
i__23743_23747 = G__23760;
continue;
} else {
var k_23761 = cljs.core.first.call(null,seq__23740_23755__$1);
var v_23762 = (b[k_23761]);
(a[k_23761] = v_23762);

var G__23763 = cljs.core.next.call(null,seq__23740_23755__$1);
var G__23764 = null;
var G__23765 = (0);
var G__23766 = (0);
seq__23740_23744 = G__23763;
chunk__23741_23745 = G__23764;
count__23742_23746 = G__23765;
i__23743_23747 = G__23766;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__23169__auto__,writer__23170__auto__,opt__23171__auto__){
return cljs.core._write.call(null,writer__23170__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__23169__auto__,writer__23170__auto__,opt__23171__auto__){
return cljs.core._write.call(null,writer__23170__auto__,"cognitect.transit/VectorBuilder");
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
var args23767 = [];
var len__23633__auto___23770 = arguments.length;
var i__23634__auto___23771 = (0);
while(true){
if((i__23634__auto___23771 < len__23633__auto___23770)){
args23767.push((arguments[i__23634__auto___23771]));

var G__23772 = (i__23634__auto___23771 + (1));
i__23634__auto___23771 = G__23772;
continue;
} else {
}
break;
}

var G__23769 = args23767.length;
switch (G__23769) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23767.length)].join('')));

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
var G__23774 = (i + (2));
var G__23775 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__23774;
ret = G__23775;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__23169__auto__,writer__23170__auto__,opt__23171__auto__){
return cljs.core._write.call(null,writer__23170__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__23169__auto__,writer__23170__auto__,opt__23171__auto__){
return cljs.core._write.call(null,writer__23170__auto__,"cognitect.transit/SymbolHandler");
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
var seq__23776_23780 = cljs.core.seq.call(null,v);
var chunk__23777_23781 = null;
var count__23778_23782 = (0);
var i__23779_23783 = (0);
while(true){
if((i__23779_23783 < count__23778_23782)){
var x_23784 = cljs.core._nth.call(null,chunk__23777_23781,i__23779_23783);
ret.push(x_23784);

var G__23785 = seq__23776_23780;
var G__23786 = chunk__23777_23781;
var G__23787 = count__23778_23782;
var G__23788 = (i__23779_23783 + (1));
seq__23776_23780 = G__23785;
chunk__23777_23781 = G__23786;
count__23778_23782 = G__23787;
i__23779_23783 = G__23788;
continue;
} else {
var temp__4425__auto___23789 = cljs.core.seq.call(null,seq__23776_23780);
if(temp__4425__auto___23789){
var seq__23776_23790__$1 = temp__4425__auto___23789;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23776_23790__$1)){
var c__23374__auto___23791 = cljs.core.chunk_first.call(null,seq__23776_23790__$1);
var G__23792 = cljs.core.chunk_rest.call(null,seq__23776_23790__$1);
var G__23793 = c__23374__auto___23791;
var G__23794 = cljs.core.count.call(null,c__23374__auto___23791);
var G__23795 = (0);
seq__23776_23780 = G__23792;
chunk__23777_23781 = G__23793;
count__23778_23782 = G__23794;
i__23779_23783 = G__23795;
continue;
} else {
var x_23796 = cljs.core.first.call(null,seq__23776_23790__$1);
ret.push(x_23796);

var G__23797 = cljs.core.next.call(null,seq__23776_23790__$1);
var G__23798 = null;
var G__23799 = (0);
var G__23800 = (0);
seq__23776_23780 = G__23797;
chunk__23777_23781 = G__23798;
count__23778_23782 = G__23799;
i__23779_23783 = G__23800;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__23169__auto__,writer__23170__auto__,opt__23171__auto__){
return cljs.core._write.call(null,writer__23170__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__23169__auto__,writer__23170__auto__,opt__23171__auto__){
return cljs.core._write.call(null,writer__23170__auto__,"cognitect.transit/MapHandler");
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
var seq__23801_23805 = cljs.core.seq.call(null,v);
var chunk__23802_23806 = null;
var count__23803_23807 = (0);
var i__23804_23808 = (0);
while(true){
if((i__23804_23808 < count__23803_23807)){
var x_23809 = cljs.core._nth.call(null,chunk__23802_23806,i__23804_23808);
ret.push(x_23809);

var G__23810 = seq__23801_23805;
var G__23811 = chunk__23802_23806;
var G__23812 = count__23803_23807;
var G__23813 = (i__23804_23808 + (1));
seq__23801_23805 = G__23810;
chunk__23802_23806 = G__23811;
count__23803_23807 = G__23812;
i__23804_23808 = G__23813;
continue;
} else {
var temp__4425__auto___23814 = cljs.core.seq.call(null,seq__23801_23805);
if(temp__4425__auto___23814){
var seq__23801_23815__$1 = temp__4425__auto___23814;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23801_23815__$1)){
var c__23374__auto___23816 = cljs.core.chunk_first.call(null,seq__23801_23815__$1);
var G__23817 = cljs.core.chunk_rest.call(null,seq__23801_23815__$1);
var G__23818 = c__23374__auto___23816;
var G__23819 = cljs.core.count.call(null,c__23374__auto___23816);
var G__23820 = (0);
seq__23801_23805 = G__23817;
chunk__23802_23806 = G__23818;
count__23803_23807 = G__23819;
i__23804_23808 = G__23820;
continue;
} else {
var x_23821 = cljs.core.first.call(null,seq__23801_23815__$1);
ret.push(x_23821);

var G__23822 = cljs.core.next.call(null,seq__23801_23815__$1);
var G__23823 = null;
var G__23824 = (0);
var G__23825 = (0);
seq__23801_23805 = G__23822;
chunk__23802_23806 = G__23823;
count__23803_23807 = G__23824;
i__23804_23808 = G__23825;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__23169__auto__,writer__23170__auto__,opt__23171__auto__){
return cljs.core._write.call(null,writer__23170__auto__,"cognitect.transit/SetHandler");
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
var seq__23826_23830 = cljs.core.seq.call(null,v);
var chunk__23827_23831 = null;
var count__23828_23832 = (0);
var i__23829_23833 = (0);
while(true){
if((i__23829_23833 < count__23828_23832)){
var x_23834 = cljs.core._nth.call(null,chunk__23827_23831,i__23829_23833);
ret.push(x_23834);

var G__23835 = seq__23826_23830;
var G__23836 = chunk__23827_23831;
var G__23837 = count__23828_23832;
var G__23838 = (i__23829_23833 + (1));
seq__23826_23830 = G__23835;
chunk__23827_23831 = G__23836;
count__23828_23832 = G__23837;
i__23829_23833 = G__23838;
continue;
} else {
var temp__4425__auto___23839 = cljs.core.seq.call(null,seq__23826_23830);
if(temp__4425__auto___23839){
var seq__23826_23840__$1 = temp__4425__auto___23839;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23826_23840__$1)){
var c__23374__auto___23841 = cljs.core.chunk_first.call(null,seq__23826_23840__$1);
var G__23842 = cljs.core.chunk_rest.call(null,seq__23826_23840__$1);
var G__23843 = c__23374__auto___23841;
var G__23844 = cljs.core.count.call(null,c__23374__auto___23841);
var G__23845 = (0);
seq__23826_23830 = G__23842;
chunk__23827_23831 = G__23843;
count__23828_23832 = G__23844;
i__23829_23833 = G__23845;
continue;
} else {
var x_23846 = cljs.core.first.call(null,seq__23826_23840__$1);
ret.push(x_23846);

var G__23847 = cljs.core.next.call(null,seq__23826_23840__$1);
var G__23848 = null;
var G__23849 = (0);
var G__23850 = (0);
seq__23826_23830 = G__23847;
chunk__23827_23831 = G__23848;
count__23828_23832 = G__23849;
i__23829_23833 = G__23850;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__23169__auto__,writer__23170__auto__,opt__23171__auto__){
return cljs.core._write.call(null,writer__23170__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__23169__auto__,writer__23170__auto__,opt__23171__auto__){
return cljs.core._write.call(null,writer__23170__auto__,"cognitect.transit/UUIDHandler");
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
var args23851 = [];
var len__23633__auto___23862 = arguments.length;
var i__23634__auto___23863 = (0);
while(true){
if((i__23634__auto___23863 < len__23633__auto___23862)){
args23851.push((arguments[i__23634__auto___23863]));

var G__23864 = (i__23634__auto___23863 + (1));
i__23634__auto___23863 = G__23864;
continue;
} else {
}
break;
}

var G__23853 = args23851.length;
switch (G__23853) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23851.length)].join('')));

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
var G__23854 = obj;
G__23854.push(kfn.call(null,k),vfn.call(null,v));

return G__23854;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x23855 = cljs.core.clone.call(null,handlers);
x23855.forEach = ((function (x23855,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__23856 = cljs.core.seq.call(null,coll);
var chunk__23857 = null;
var count__23858 = (0);
var i__23859 = (0);
while(true){
if((i__23859 < count__23858)){
var vec__23860 = cljs.core._nth.call(null,chunk__23857,i__23859);
var k = cljs.core.nth.call(null,vec__23860,(0),null);
var v = cljs.core.nth.call(null,vec__23860,(1),null);
f.call(null,v,k);

var G__23866 = seq__23856;
var G__23867 = chunk__23857;
var G__23868 = count__23858;
var G__23869 = (i__23859 + (1));
seq__23856 = G__23866;
chunk__23857 = G__23867;
count__23858 = G__23868;
i__23859 = G__23869;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23856);
if(temp__4425__auto__){
var seq__23856__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23856__$1)){
var c__23374__auto__ = cljs.core.chunk_first.call(null,seq__23856__$1);
var G__23870 = cljs.core.chunk_rest.call(null,seq__23856__$1);
var G__23871 = c__23374__auto__;
var G__23872 = cljs.core.count.call(null,c__23374__auto__);
var G__23873 = (0);
seq__23856 = G__23870;
chunk__23857 = G__23871;
count__23858 = G__23872;
i__23859 = G__23873;
continue;
} else {
var vec__23861 = cljs.core.first.call(null,seq__23856__$1);
var k = cljs.core.nth.call(null,vec__23861,(0),null);
var v = cljs.core.nth.call(null,vec__23861,(1),null);
f.call(null,v,k);

var G__23874 = cljs.core.next.call(null,seq__23856__$1);
var G__23875 = null;
var G__23876 = (0);
var G__23877 = (0);
seq__23856 = G__23874;
chunk__23857 = G__23875;
count__23858 = G__23876;
i__23859 = G__23877;
continue;
}
} else {
return null;
}
}
break;
}
});})(x23855,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x23855;
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
var args23878 = [];
var len__23633__auto___23884 = arguments.length;
var i__23634__auto___23885 = (0);
while(true){
if((i__23634__auto___23885 < len__23633__auto___23884)){
args23878.push((arguments[i__23634__auto___23885]));

var G__23886 = (i__23634__auto___23885 + (1));
i__23634__auto___23885 = G__23886;
continue;
} else {
}
break;
}

var G__23880 = args23878.length;
switch (G__23880) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23878.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit23881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit23881 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta23882){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta23882 = meta23882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit23881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23883,meta23882__$1){
var self__ = this;
var _23883__$1 = this;
return (new cognitect.transit.t_cognitect$transit23881(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta23882__$1));
});

cognitect.transit.t_cognitect$transit23881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23883){
var self__ = this;
var _23883__$1 = this;
return self__.meta23882;
});

cognitect.transit.t_cognitect$transit23881.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit23881.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit23881.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit23881.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit23881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta23882","meta23882",122370412,null)], null);
});

cognitect.transit.t_cognitect$transit23881.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit23881.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit23881";

cognitect.transit.t_cognitect$transit23881.cljs$lang$ctorPrWriter = (function (this__23169__auto__,writer__23170__auto__,opt__23171__auto__){
return cljs.core._write.call(null,writer__23170__auto__,"cognitect.transit/t_cognitect$transit23881");
});

cognitect.transit.__GT_t_cognitect$transit23881 = (function cognitect$transit$__GT_t_cognitect$transit23881(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta23882){
return (new cognitect.transit.t_cognitect$transit23881(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta23882));
});

}

return (new cognitect.transit.t_cognitect$transit23881(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__22563__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__22563__auto__)){
return or__22563__auto__;
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