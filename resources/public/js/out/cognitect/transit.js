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
var seq__25266_25270 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__25267_25271 = null;
var count__25268_25272 = (0);
var i__25269_25273 = (0);
while(true){
if((i__25269_25273 < count__25268_25272)){
var k_25274 = cljs.core._nth.call(null,chunk__25267_25271,i__25269_25273);
var v_25275 = (b[k_25274]);
(a[k_25274] = v_25275);

var G__25276 = seq__25266_25270;
var G__25277 = chunk__25267_25271;
var G__25278 = count__25268_25272;
var G__25279 = (i__25269_25273 + (1));
seq__25266_25270 = G__25276;
chunk__25267_25271 = G__25277;
count__25268_25272 = G__25278;
i__25269_25273 = G__25279;
continue;
} else {
var temp__4425__auto___25280 = cljs.core.seq.call(null,seq__25266_25270);
if(temp__4425__auto___25280){
var seq__25266_25281__$1 = temp__4425__auto___25280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25266_25281__$1)){
var c__24900__auto___25282 = cljs.core.chunk_first.call(null,seq__25266_25281__$1);
var G__25283 = cljs.core.chunk_rest.call(null,seq__25266_25281__$1);
var G__25284 = c__24900__auto___25282;
var G__25285 = cljs.core.count.call(null,c__24900__auto___25282);
var G__25286 = (0);
seq__25266_25270 = G__25283;
chunk__25267_25271 = G__25284;
count__25268_25272 = G__25285;
i__25269_25273 = G__25286;
continue;
} else {
var k_25287 = cljs.core.first.call(null,seq__25266_25281__$1);
var v_25288 = (b[k_25287]);
(a[k_25287] = v_25288);

var G__25289 = cljs.core.next.call(null,seq__25266_25281__$1);
var G__25290 = null;
var G__25291 = (0);
var G__25292 = (0);
seq__25266_25270 = G__25289;
chunk__25267_25271 = G__25290;
count__25268_25272 = G__25291;
i__25269_25273 = G__25292;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__24695__auto__,writer__24696__auto__,opt__24697__auto__){
return cljs.core._write.call(null,writer__24696__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__24695__auto__,writer__24696__auto__,opt__24697__auto__){
return cljs.core._write.call(null,writer__24696__auto__,"cognitect.transit/VectorBuilder");
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
var args25293 = [];
var len__25159__auto___25296 = arguments.length;
var i__25160__auto___25297 = (0);
while(true){
if((i__25160__auto___25297 < len__25159__auto___25296)){
args25293.push((arguments[i__25160__auto___25297]));

var G__25298 = (i__25160__auto___25297 + (1));
i__25160__auto___25297 = G__25298;
continue;
} else {
}
break;
}

var G__25295 = args25293.length;
switch (G__25295) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25293.length)].join('')));

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
var G__25300 = (i + (2));
var G__25301 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__25300;
ret = G__25301;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__24695__auto__,writer__24696__auto__,opt__24697__auto__){
return cljs.core._write.call(null,writer__24696__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__24695__auto__,writer__24696__auto__,opt__24697__auto__){
return cljs.core._write.call(null,writer__24696__auto__,"cognitect.transit/SymbolHandler");
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
var seq__25302_25306 = cljs.core.seq.call(null,v);
var chunk__25303_25307 = null;
var count__25304_25308 = (0);
var i__25305_25309 = (0);
while(true){
if((i__25305_25309 < count__25304_25308)){
var x_25310 = cljs.core._nth.call(null,chunk__25303_25307,i__25305_25309);
ret.push(x_25310);

var G__25311 = seq__25302_25306;
var G__25312 = chunk__25303_25307;
var G__25313 = count__25304_25308;
var G__25314 = (i__25305_25309 + (1));
seq__25302_25306 = G__25311;
chunk__25303_25307 = G__25312;
count__25304_25308 = G__25313;
i__25305_25309 = G__25314;
continue;
} else {
var temp__4425__auto___25315 = cljs.core.seq.call(null,seq__25302_25306);
if(temp__4425__auto___25315){
var seq__25302_25316__$1 = temp__4425__auto___25315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25302_25316__$1)){
var c__24900__auto___25317 = cljs.core.chunk_first.call(null,seq__25302_25316__$1);
var G__25318 = cljs.core.chunk_rest.call(null,seq__25302_25316__$1);
var G__25319 = c__24900__auto___25317;
var G__25320 = cljs.core.count.call(null,c__24900__auto___25317);
var G__25321 = (0);
seq__25302_25306 = G__25318;
chunk__25303_25307 = G__25319;
count__25304_25308 = G__25320;
i__25305_25309 = G__25321;
continue;
} else {
var x_25322 = cljs.core.first.call(null,seq__25302_25316__$1);
ret.push(x_25322);

var G__25323 = cljs.core.next.call(null,seq__25302_25316__$1);
var G__25324 = null;
var G__25325 = (0);
var G__25326 = (0);
seq__25302_25306 = G__25323;
chunk__25303_25307 = G__25324;
count__25304_25308 = G__25325;
i__25305_25309 = G__25326;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__24695__auto__,writer__24696__auto__,opt__24697__auto__){
return cljs.core._write.call(null,writer__24696__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__24695__auto__,writer__24696__auto__,opt__24697__auto__){
return cljs.core._write.call(null,writer__24696__auto__,"cognitect.transit/MapHandler");
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
var seq__25327_25331 = cljs.core.seq.call(null,v);
var chunk__25328_25332 = null;
var count__25329_25333 = (0);
var i__25330_25334 = (0);
while(true){
if((i__25330_25334 < count__25329_25333)){
var x_25335 = cljs.core._nth.call(null,chunk__25328_25332,i__25330_25334);
ret.push(x_25335);

var G__25336 = seq__25327_25331;
var G__25337 = chunk__25328_25332;
var G__25338 = count__25329_25333;
var G__25339 = (i__25330_25334 + (1));
seq__25327_25331 = G__25336;
chunk__25328_25332 = G__25337;
count__25329_25333 = G__25338;
i__25330_25334 = G__25339;
continue;
} else {
var temp__4425__auto___25340 = cljs.core.seq.call(null,seq__25327_25331);
if(temp__4425__auto___25340){
var seq__25327_25341__$1 = temp__4425__auto___25340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25327_25341__$1)){
var c__24900__auto___25342 = cljs.core.chunk_first.call(null,seq__25327_25341__$1);
var G__25343 = cljs.core.chunk_rest.call(null,seq__25327_25341__$1);
var G__25344 = c__24900__auto___25342;
var G__25345 = cljs.core.count.call(null,c__24900__auto___25342);
var G__25346 = (0);
seq__25327_25331 = G__25343;
chunk__25328_25332 = G__25344;
count__25329_25333 = G__25345;
i__25330_25334 = G__25346;
continue;
} else {
var x_25347 = cljs.core.first.call(null,seq__25327_25341__$1);
ret.push(x_25347);

var G__25348 = cljs.core.next.call(null,seq__25327_25341__$1);
var G__25349 = null;
var G__25350 = (0);
var G__25351 = (0);
seq__25327_25331 = G__25348;
chunk__25328_25332 = G__25349;
count__25329_25333 = G__25350;
i__25330_25334 = G__25351;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__24695__auto__,writer__24696__auto__,opt__24697__auto__){
return cljs.core._write.call(null,writer__24696__auto__,"cognitect.transit/SetHandler");
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
var seq__25352_25356 = cljs.core.seq.call(null,v);
var chunk__25353_25357 = null;
var count__25354_25358 = (0);
var i__25355_25359 = (0);
while(true){
if((i__25355_25359 < count__25354_25358)){
var x_25360 = cljs.core._nth.call(null,chunk__25353_25357,i__25355_25359);
ret.push(x_25360);

var G__25361 = seq__25352_25356;
var G__25362 = chunk__25353_25357;
var G__25363 = count__25354_25358;
var G__25364 = (i__25355_25359 + (1));
seq__25352_25356 = G__25361;
chunk__25353_25357 = G__25362;
count__25354_25358 = G__25363;
i__25355_25359 = G__25364;
continue;
} else {
var temp__4425__auto___25365 = cljs.core.seq.call(null,seq__25352_25356);
if(temp__4425__auto___25365){
var seq__25352_25366__$1 = temp__4425__auto___25365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25352_25366__$1)){
var c__24900__auto___25367 = cljs.core.chunk_first.call(null,seq__25352_25366__$1);
var G__25368 = cljs.core.chunk_rest.call(null,seq__25352_25366__$1);
var G__25369 = c__24900__auto___25367;
var G__25370 = cljs.core.count.call(null,c__24900__auto___25367);
var G__25371 = (0);
seq__25352_25356 = G__25368;
chunk__25353_25357 = G__25369;
count__25354_25358 = G__25370;
i__25355_25359 = G__25371;
continue;
} else {
var x_25372 = cljs.core.first.call(null,seq__25352_25366__$1);
ret.push(x_25372);

var G__25373 = cljs.core.next.call(null,seq__25352_25366__$1);
var G__25374 = null;
var G__25375 = (0);
var G__25376 = (0);
seq__25352_25356 = G__25373;
chunk__25353_25357 = G__25374;
count__25354_25358 = G__25375;
i__25355_25359 = G__25376;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__24695__auto__,writer__24696__auto__,opt__24697__auto__){
return cljs.core._write.call(null,writer__24696__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__24695__auto__,writer__24696__auto__,opt__24697__auto__){
return cljs.core._write.call(null,writer__24696__auto__,"cognitect.transit/UUIDHandler");
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
var args25377 = [];
var len__25159__auto___25388 = arguments.length;
var i__25160__auto___25389 = (0);
while(true){
if((i__25160__auto___25389 < len__25159__auto___25388)){
args25377.push((arguments[i__25160__auto___25389]));

var G__25390 = (i__25160__auto___25389 + (1));
i__25160__auto___25389 = G__25390;
continue;
} else {
}
break;
}

var G__25379 = args25377.length;
switch (G__25379) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25377.length)].join('')));

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
var G__25380 = obj;
G__25380.push(kfn.call(null,k),vfn.call(null,v));

return G__25380;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x25381 = cljs.core.clone.call(null,handlers);
x25381.forEach = ((function (x25381,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__25382 = cljs.core.seq.call(null,coll);
var chunk__25383 = null;
var count__25384 = (0);
var i__25385 = (0);
while(true){
if((i__25385 < count__25384)){
var vec__25386 = cljs.core._nth.call(null,chunk__25383,i__25385);
var k = cljs.core.nth.call(null,vec__25386,(0),null);
var v = cljs.core.nth.call(null,vec__25386,(1),null);
f.call(null,v,k);

var G__25392 = seq__25382;
var G__25393 = chunk__25383;
var G__25394 = count__25384;
var G__25395 = (i__25385 + (1));
seq__25382 = G__25392;
chunk__25383 = G__25393;
count__25384 = G__25394;
i__25385 = G__25395;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25382);
if(temp__4425__auto__){
var seq__25382__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25382__$1)){
var c__24900__auto__ = cljs.core.chunk_first.call(null,seq__25382__$1);
var G__25396 = cljs.core.chunk_rest.call(null,seq__25382__$1);
var G__25397 = c__24900__auto__;
var G__25398 = cljs.core.count.call(null,c__24900__auto__);
var G__25399 = (0);
seq__25382 = G__25396;
chunk__25383 = G__25397;
count__25384 = G__25398;
i__25385 = G__25399;
continue;
} else {
var vec__25387 = cljs.core.first.call(null,seq__25382__$1);
var k = cljs.core.nth.call(null,vec__25387,(0),null);
var v = cljs.core.nth.call(null,vec__25387,(1),null);
f.call(null,v,k);

var G__25400 = cljs.core.next.call(null,seq__25382__$1);
var G__25401 = null;
var G__25402 = (0);
var G__25403 = (0);
seq__25382 = G__25400;
chunk__25383 = G__25401;
count__25384 = G__25402;
i__25385 = G__25403;
continue;
}
} else {
return null;
}
}
break;
}
});})(x25381,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x25381;
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
var args25404 = [];
var len__25159__auto___25410 = arguments.length;
var i__25160__auto___25411 = (0);
while(true){
if((i__25160__auto___25411 < len__25159__auto___25410)){
args25404.push((arguments[i__25160__auto___25411]));

var G__25412 = (i__25160__auto___25411 + (1));
i__25160__auto___25411 = G__25412;
continue;
} else {
}
break;
}

var G__25406 = args25404.length;
switch (G__25406) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25404.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit25407 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit25407 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta25408){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta25408 = meta25408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit25407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25409,meta25408__$1){
var self__ = this;
var _25409__$1 = this;
return (new cognitect.transit.t_cognitect$transit25407(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta25408__$1));
});

cognitect.transit.t_cognitect$transit25407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25409){
var self__ = this;
var _25409__$1 = this;
return self__.meta25408;
});

cognitect.transit.t_cognitect$transit25407.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit25407.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit25407.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit25407.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit25407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta25408","meta25408",-650935532,null)], null);
});

cognitect.transit.t_cognitect$transit25407.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit25407.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit25407";

cognitect.transit.t_cognitect$transit25407.cljs$lang$ctorPrWriter = (function (this__24695__auto__,writer__24696__auto__,opt__24697__auto__){
return cljs.core._write.call(null,writer__24696__auto__,"cognitect.transit/t_cognitect$transit25407");
});

cognitect.transit.__GT_t_cognitect$transit25407 = (function cognitect$transit$__GT_t_cognitect$transit25407(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta25408){
return (new cognitect.transit.t_cognitect$transit25407(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta25408));
});

}

return (new cognitect.transit.t_cognitect$transit25407(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__24089__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
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