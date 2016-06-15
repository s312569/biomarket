// Compiled by ClojureScript 1.8.51 {}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('cljs.tools.reader.edn');
goog.require('taoensso.truss');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
/**
 * Used for lib-consumer version assertions
 */
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(36),(2)], null);
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__33031 = taoensso.encore.encore_version;
var xc = cljs.core.nth.call(null,vec__33031,(0),null);
var yc = cljs.core.nth.call(null,vec__33031,(1),null);
var zc = cljs.core.nth.call(null,vec__33031,(2),null);
var vec__33032 = ((cljs.core.vector_QMARK_.call(null,min_version))?min_version:cljs.core.re_seq.call(null,/\d+/,[cljs.core.str(min_version)].join('')));
var xm = cljs.core.nth.call(null,vec__33032,(0),null);
var ym = cljs.core.nth.call(null,vec__33032,(1),null);
var zm = cljs.core.nth.call(null,vec__33032,(2),null);
var vec__33033 = cljs.core.mapv.call(null,((function (vec__33031,xc,yc,zc,vec__33032,xm,ym,zm){
return (function (p1__33027_SHARP_){
var or__24089__auto__ = taoensso.encore.as__QMARK_int.call(null,p1__33027_SHARP_);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return (0);
}
});})(vec__33031,xc,yc,zc,vec__33032,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.call(null,vec__33033,(0),null);
var ym__$1 = cljs.core.nth.call(null,vec__33033,(1),null);
var zm__$1 = cljs.core.nth.call(null,vec__33033,(2),null);
if(((xc > xm__$1)) || ((cljs.core._EQ_.call(null,xc,xm__$1)) && (((yc > ym__$1)) || ((cljs.core._EQ_.call(null,yc,ym__$1)) && ((zc >= zm__$1)))))){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Insufficient com.taoensso/encore version. You may have a Leiningen dependency conflict (see http://goo.gl/qBbLvC for solution).")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),new cljs.core.Keyword(null,"your-version","your-version",-351781765),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
/**
 * Handles optional docstrings & attr maps for a macro def's name.
 *   Stolen from `clojure.tools.macro`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(name,macro_args){
var vec__33036 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.call(null,vec__33036,(0),null);
var macro_args__$1 = cljs.core.nth.call(null,vec__33036,(1),null);
var vec__33037 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.call(null,vec__33037,(0),null);
var macro_args__$2 = cljs.core.nth.call(null,vec__33037,(1),null);
var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr);
var attr__$2 = (cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.conj.call(null,cljs.core.meta.call(null,name),attr__$1):attr__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,name,attr__$2),macro_args__$2], null);
});
taoensso.encore.get_dynamic_assertion_data = (function taoensso$encore$get_dynamic_assertion_data(){
return taoensso.truss.get_dynamic_assertion_data.call(null);
});

/**
 * Experimental. Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a bit of a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var args33038 = [];
var len__25159__auto___33041 = arguments.length;
var i__25160__auto___33042 = (0);
while(true){
if((i__25160__auto___33042 < len__25159__auto___33041)){
args33038.push((arguments[i__25160__auto___33042]));

var G__33043 = (i__25160__auto___33042 + (1));
i__25160__auto___33042 = G__33043;
continue;
} else {
}
break;
}

var G__33040 = args33038.length;
switch (G__33040) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33038.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.call(null,null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(((s == null)) || ((s === ""))){
return null;
} else {
if(!(typeof s === 'string')){
throw cljs.core.ex_info.call(null,"`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,s)], null));
} else {
var readers = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var default$ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var readers__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,readers,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399))))?readers:taoensso.encore.map_keys.call(null,cljs.core.symbol,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)));
var default$__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,default$,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399))))?default$:cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_));
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"readers","readers",-2118263030),readers__$1,new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1], null));
return cljs.tools.reader.edn.read_string.call(null,opts__$1,s);
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var args33045 = [];
var len__25159__auto___33050 = arguments.length;
var i__25160__auto___33051 = (0);
while(true){
if((i__25160__auto___33051 < len__25159__auto___33050)){
args33045.push((arguments[i__25160__auto___33051]));

var G__33052 = (i__25160__auto___33051 + (1));
i__25160__auto___33051 = G__33052;
continue;
} else {
}
break;
}

var G__33047 = args33045.length;
switch (G__33047) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33045.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.call(null,null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_33048 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_33049 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.call(null,x);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_33049;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_33048;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;
taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});
/**
 * Returns data map iff `x` is an error of any type on platform
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var temp__4425__auto__ = (function (){var or__24089__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var data_map = temp__4425__auto__;
return cljs.core.merge.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});
taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});
taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});
taoensso.encore.nnil_QMARK_ = (function taoensso$encore$nnil_QMARK_(x){
return !((x == null));
});
taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_.call(null,x));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});
taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && ((x > (0)));
});
taoensso.encore.nneg_int_QMARK_ = (function taoensso$encore$nneg_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && (!((x < (0))));
});
taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});
taoensso.encore.udt_QMARK_ = taoensso.encore.nneg_int_QMARK_;
taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(2),x);
});
taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(3),x);
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_.call(null,x)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,taoensso.encore.set_STAR_.call(null,x))));
});
taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_.call(null,x)));
});
taoensso.encore.nneg_num_QMARK_ = (function taoensso$encore$nneg_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});
taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});
taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,(0),x);
});
taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_.call(null,x)){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(cljs.core.truth_(taoensso.encore.named_QMARK_.call(null,x))){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(cljs.core.truth_(taoensso.encore.named_QMARK_.call(null,x))){
var n = cljs.core.name.call(null,x);
var temp__4423__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0"))){
return false;
} else {
if((cljs.core._EQ_.call(null,x,(1))) || (cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1"))){
return true;
} else {
return null;
}
}
}
}
});
taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find.call(null,/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim.call(null,_QMARK_s));
} else {
return null;
}
});
taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var temp__4425__auto__ = taoensso.encore.as__QMARK_email.call(null,_QMARK_s);
if(cljs.core.truth_(temp__4425__auto__)){
var email = temp__4425__auto__;
return clojure.string.lower_case.call(null,email);
} else {
return null;
}
});
taoensso.encore._QMARK_as_throw = (function taoensso$encore$_QMARK_as_throw(as_name,x){
throw cljs.core.ex_info.call(null,[cljs.core.str("nil as-?"),cljs.core.str(cljs.core.name.call(null,as_name)),cljs.core.str(" against arg: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
});
taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__24089__auto__ = taoensso.encore.as__QMARK_nblank.call(null,x);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"nblank","nblank",626815585),x);
}
});
taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__24089__auto__ = taoensso.encore.as__QMARK_kw.call(null,x);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"kw","kw",1158308175),x);
}
});
taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__24089__auto__ = taoensso.encore.as__QMARK_name.call(null,x);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"name","name",1843675177),x);
}
});
taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__24089__auto__ = taoensso.encore.as__QMARK_qname.call(null,x);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"qname","qname",-1983612179),x);
}
});
taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool.call(null,x);
if(!((_QMARK_b == null))){
return _QMARK_b;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"bool","bool",1444635321),x);
}
});
taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__24089__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"int","int",-1741416922),x);
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__24089__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"float","float",-1732389368),x);
}
});
taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__24089__auto__ = taoensso.encore.as__QMARK_email.call(null,x);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x);
}
});
taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__24089__auto__ = taoensso.encore.as__QMARK_nemail.call(null,x);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
});
taoensso.encore.nnil_EQ_ = (function taoensso$encore$nnil_EQ_(var_args){
var args33058 = [];
var len__25159__auto___33064 = arguments.length;
var i__25160__auto___33065 = (0);
while(true){
if((i__25160__auto___33065 < len__25159__auto___33064)){
args33058.push((arguments[i__25160__auto___33065]));

var G__33066 = (i__25160__auto___33065 + (1));
i__25160__auto___33065 = G__33066;
continue;
} else {
}
break;
}

var G__33063 = args33058.length;
switch (G__33063) {
case 2:
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25178__auto__ = (new cljs.core.IndexedSeq(args33058.slice((2)),(0),null));
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25178__auto__);

}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var and__24077__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__24077__auto__)){
return cljs.core._EQ_.call(null,x,y);
} else {
return and__24077__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__24077__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__24077__auto__)){
return cljs.core.apply.call(null,cljs.core._EQ_,x,y,more);
} else {
return and__24077__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$lang$applyTo = (function (seq33059){
var G__33060 = cljs.core.first.call(null,seq33059);
var seq33059__$1 = cljs.core.next.call(null,seq33059);
var G__33061 = cljs.core.first.call(null,seq33059__$1);
var seq33059__$2 = cljs.core.next.call(null,seq33059__$1);
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__33060,G__33061,seq33059__$2);
});

taoensso.encore.nnil_EQ_.cljs$lang$maxFixedArity = (2);
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta.call(null,x))){
return cljs.core.with_meta.call(null,x,null);
} else {
return x;
}
});
/**
 * Like `name` but includes keyword namespaces in name string
 */
taoensso.encore.qname = taoensso.encore.as_qname;
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.qname.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33072 = arguments.length;
var i__25160__auto___33073 = (0);
while(true){
if((i__25160__auto___33073 < len__25159__auto___33072)){
args__25166__auto__.push((arguments[i__25160__auto___33073]));

var G__33074 = (i__25160__auto___33073 + (1));
i__25160__auto___33073 = G__33074;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__33070){
var vec__33071 = p__33070;
var no_slash_QMARK_ = cljs.core.nth.call(null,vec__33071,(0),null);
var parts = cljs.core.reduce.call(null,((function (vec__33071,no_slash_QMARK_){
return (function (acc,in$){
if(cljs.core.truth_(in$)){
return cljs.core.into.call(null,acc,taoensso.encore.explode_keyword.call(null,in$));
} else {
return acc;
}
});})(vec__33071,no_slash_QMARK_))
,cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.empty_QMARK_.call(null,parts)){
return null;
} else {
if(cljs.core.truth_(no_slash_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,ppop))?null:clojure.string.join.call(null,".",ppop)),cljs.core.peek.call(null,parts));
}
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_keywords.cljs$lang$applyTo = (function (seq33068){
var G__33069 = cljs.core.first.call(null,seq33068);
var seq33068__$1 = cljs.core.next.call(null,seq33068);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic(G__33069,seq33068__$1);
});
taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var args33075 = [];
var len__25159__auto___33079 = arguments.length;
var i__25160__auto___33080 = (0);
while(true){
if((i__25160__auto___33080 < len__25159__auto___33079)){
args33075.push((arguments[i__25160__auto___33080]));

var G__33081 = (i__25160__auto___33080 + (1));
i__25160__auto___33080 = G__33081;
continue;
} else {
}
break;
}

var G__33077 = args33075.length;
switch (G__33077) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33075.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.call(null,new cljs.core.Keyword(null,"round","round",2009433328),null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.call(null,type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = ((cljs.core.not.call(null,modifier))?n__$1:(n__$1 * modifier));
var rounded = (function (){var G__33078 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33078) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
})();
if(cljs.core.not.call(null,modifier)){
return cljs.core.long$.call(null,rounded);
} else {
return (rounded / modifier);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;
taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});
taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});
taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});
/**
 * Returns binary exponential backoff value.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33090 = arguments.length;
var i__25160__auto___33091 = (0);
while(true){
if((i__25160__auto___33091 < len__25159__auto___33090)){
args__25166__auto__.push((arguments[i__25160__auto___33091]));

var G__33092 = (i__25160__auto___33091 + (1));
i__25160__auto___33091 = G__33092;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic = (function (nattempt,p__33086){
var vec__33087 = p__33086;
var map__33088 = cljs.core.nth.call(null,vec__33087,(0),null);
var map__33088__$1 = ((((!((map__33088 == null)))?((((map__33088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33088):map__33088);
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__33088__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__33088__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__33088__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var binary_exp = Math.pow((2),(nattempt - (1)));
var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);
return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__24420__auto__ = cljs.core.long$.call(null,min_SINGLEQUOTE_);
var y__24421__auto__ = cljs.core.long$.call(null,time);
return ((x__24420__auto__ > y__24421__auto__) ? x__24420__auto__ : y__24421__auto__);
})():time);
var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__24427__auto__ = cljs.core.long$.call(null,max_SINGLEQUOTE_);
var y__24428__auto__ = cljs.core.long$.call(null,time__$1);
return ((x__24427__auto__ < y__24428__auto__) ? x__24427__auto__ : y__24428__auto__);
})():time__$1);
return time__$2;
})());
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = (1);

taoensso.encore.exp_backoff.cljs$lang$applyTo = (function (seq33084){
var G__33085 = cljs.core.first.call(null,seq33084);
var seq33084__$1 = cljs.core.next.call(null,seq33084);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic(G__33085,seq33084__$1);
});
taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});
taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$.call(null,secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,cljs.core.long$.call(null,ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33110 = arguments.length;
var i__25160__auto___33111 = (0);
while(true){
if((i__25160__auto___33111 < len__25159__auto___33110)){
args__25166__auto__.push((arguments[i__25160__auto___33111]));

var G__33112 = (i__25160__auto___33111 + (1));
i__25160__auto___33111 = G__33112;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((0) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__25167__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__33106){
var map__33107 = p__33106;
var map__33107__$1 = ((((!((map__33107 == null)))?((((map__33107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33107):map__33107);
var opts = map__33107__$1;
var years = cljs.core.get.call(null,map__33107__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__33107__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__33107__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__33107__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__33107__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__33107__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__33107__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__33107__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__33107__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core.truth_(cljs.core.mapv.call(null,((function (map__33107,map__33107__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
var __x = __in;
try{if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null).call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33109){if((e33109 instanceof Error)){
var __t = e33109;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__x,__t,null);
} else {
throw e33109;

}
}});})(map__33107,map__33107__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts)))){
} else {
throw (new Error("Assert failed: (have #{:msecs :secs :months :days :mins :hours :years :ms :weeks} :in (keys opts))"));
}

return taoensso.encore.round_STAR_.call(null,(((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq33105){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33105));
});
taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.vec_STAR_ = (function taoensso$encore$vec_STAR_(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.vec.call(null,x);
}
});
taoensso.encore.set_STAR_ = (function taoensso$encore$set_STAR_(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.set.call(null,x);
}
});
/**
 * Like `aget` for JS objects, Ref. https://goo.gl/eze8hY.
 *   Unlike `aget`, returns nil for missing keys instead of throwing.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var args33117 = [];
var len__25159__auto___33124 = arguments.length;
var i__25160__auto___33125 = (0);
while(true){
if((i__25160__auto___33125 < len__25159__auto___33124)){
args33117.push((arguments[i__25160__auto___33125]));

var G__33126 = (i__25160__auto___33125 + (1));
i__25160__auto___33125 = G__33126;
continue;
} else {
}
break;
}

var G__33123 = args33117.length;
switch (G__33123) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__25178__auto__ = (new cljs.core.IndexedSeq(args33117.slice((3)),(0),null));
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25178__auto__);

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
if(cljs.core.truth_(o)){
return goog.object.get(o,k,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k1,k2){
var temp__4425__auto__ = taoensso.encore.oget.call(null,o,k1);
if(cljs.core.truth_(temp__4425__auto__)){
var o__$1 = temp__4425__auto__;
return goog.object.get(o__$1,k2,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic = (function (o,k1,k2,ks){
var temp__4425__auto__ = taoensso.encore.oget.call(null,o,k1,k2);
if(cljs.core.truth_(temp__4425__auto__)){
var o__$1 = temp__4425__auto__;
return cljs.core.apply.call(null,taoensso.encore.oget,o__$1,ks);
} else {
return null;
}
});

taoensso.encore.oget.cljs$lang$applyTo = (function (seq33118){
var G__33119 = cljs.core.first.call(null,seq33118);
var seq33118__$1 = cljs.core.next.call(null,seq33118);
var G__33120 = cljs.core.first.call(null,seq33118__$1);
var seq33118__$2 = cljs.core.next.call(null,seq33118__$1);
var G__33121 = cljs.core.first.call(null,seq33118__$2);
var seq33118__$3 = cljs.core.next.call(null,seq33118__$2);
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic(G__33119,G__33120,G__33121,seq33118__$3);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = (3);
taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_.call(null,coll)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),(1));
} else {
return cljs.core.not.call(null,cljs.core.next.call(null,coll));
}
});
taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_.call(null,coll))){
var vec__33129 = coll;
var c1 = cljs.core.nth.call(null,vec__33129,(0),null);
return c1;
} else {
return null;
}
});
taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count.call(null,v) > (1))){
return cljs.core.subvec.call(null,v,(1));
} else {
return null;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop.call(null,v):null),cljs.core.peek.call(null,v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
var vec__33131 = v;
var v1 = cljs.core.nth.call(null,vec__33131,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
} else {
return null;
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var args33132 = [];
var len__25159__auto___33138 = arguments.length;
var i__25160__auto___33139 = (0);
while(true){
if((i__25160__auto___33139 < len__25159__auto___33138)){
args33132.push((arguments[i__25160__auto___33139]));

var G__33140 = (i__25160__auto___33139 + (1));
i__25160__auto___33139 = G__33140;
continue;
} else {
}
break;
}

var G__33137 = args33132.length;
switch (G__33137) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25178__auto__ = (new cljs.core.IndexedSeq(args33132.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25178__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,_QMARK_x){
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,_QMARK_x))){
return cljs.core.conj.call(null,coll,_QMARK_x);
} else {
return coll;
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,_QMARK_x,_QMARK_xs){
return cljs.core.reduce.call(null,taoensso.encore.conj_some,taoensso.encore.conj_some.call(null,coll,_QMARK_x),_QMARK_xs);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq33133){
var G__33134 = cljs.core.first.call(null,seq33133);
var seq33133__$1 = cljs.core.next.call(null,seq33133);
var G__33135 = cljs.core.first.call(null,seq33133__$1);
var seq33133__$2 = cljs.core.next.call(null,seq33133__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__33134,G__33135,seq33133__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);
/**
 * As `clojure.core/preserving-reduced`
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = rf.call(null,acc,in$);
if(cljs.core.reduced_QMARK_.call(null,result)){
return cljs.core.reduced.call(null,result);
} else {
return result;
}
});
});
taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv.call(null,(function (p1__33144_SHARP_,p2__33142_SHARP_,p3__33143_SHARP_){
return proc.call(null,p2__33142_SHARP_,p3__33143_SHARP_);
}),null,m);

return null;
});
taoensso.encore.run_BANG__STAR_ = (function taoensso$encore$run_BANG__STAR_(proc,coll){
cljs.core.reduce.call(null,(function (p1__33146_SHARP_,p2__33145_SHARP_){
return proc.call(null,p2__33145_SHARP_);
}),null,coll);

return null;
});
/**
 * Faster `some` based on `reduce`
 */
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
var temp__4425__auto__ = pred.call(null,in$);
if(cljs.core.truth_(temp__4425__auto__)){
var p = temp__4425__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});
/**
 * Faster `every?` based on `reduce`
 */
taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return true;
} else {
return cljs.core.reduced.call(null,null);
}
}),true,coll);
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_.call(null,(function (p1__33147_SHARP_){
return taoensso.encore.nnil_QMARK_.call(null,cljs.core.get.call(null,m,p1__33147_SHARP_));
}),ks);
});
/**
 * Like `update-in` but faster, more flexible, and simpler (less ambiguous)
 */
taoensso.encore.update_in_STAR_ = (function taoensso$encore$update_in_STAR_(m,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
return f.call(null,m);
} else {
var vec__33149 = ks;
var k = cljs.core.nth.call(null,vec__33149,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__33149,(1));
if(cljs.core.truth_(ks__$1)){
return cljs.core.assoc.call(null,m,k,taoensso$encore$update_in_STAR_.call(null,cljs.core.get.call(null,m,k),ks__$1,f));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
}
}
});
taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__24427__auto__ = signed_idx;
var y__24428__auto__ = max_idx;
return ((x__24427__auto__ < y__24428__auto__) ? x__24427__auto__ : y__24428__auto__);
} else {
var x__24420__auto__ = (0);
var y__24421__auto__ = (signed_idx + max_idx);
return ((x__24420__auto__ > y__24421__auto__) ? x__24420__auto__ : y__24421__auto__);
}
});
/**
 * Returns [<inclusive-start-idx*> <exclusive-end-idx*>] for counted 0-indexed
 *   input (str, vec, etc.) with support for:
 *  * Clamping of indexes beyond limits.
 *  * Max-length -> end-index.
 *  * -ive indexes (as +ive indexes but work from back of input):
 *    (+0) (+1) (+2) (+3) (+4)  ; inclusive +ive indexes
 *      h    e    l    l    o   ; 5 count
 *    (-5) (-4) (-3) (-2) (-1)  ; inclusive -ive indexes
 */
taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33156 = arguments.length;
var i__25160__auto___33157 = (0);
while(true){
if((i__25160__auto___33157 < len__25159__auto___33156)){
args__25166__auto__.push((arguments[i__25160__auto___33157]));

var G__33158 = (i__25160__auto___33157 + (1));
i__25160__auto___33157 = G__33158;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((2) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25167__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__33153){
var map__33154 = p__33153;
var map__33154__$1 = ((((!((map__33154 == null)))?((((map__33154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33154):map__33154);
var max_len = cljs.core.get.call(null,map__33154__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__33154__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
if(cljs.core.truth_((function (){var __x = max_len;
if(cljs.core.truth_(((function (__x,map__33154,map__33154__$1,max_len,end_idx){
return (function (__x__$1){
var or__24089__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nneg_int_QMARK_).call(null,__x__$1);
}
});})(__x,map__33154,map__33154__$1,max_len,end_idx))
.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? nneg-int?] max-len)",__x,null,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? [:or nil? nneg-int?] max-len)"));
}

var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$.call(null,(cljs.core.truth_(max_len)?(function (){var n1__21326__auto__ = (start_idx_STAR_ + max_len);
var n2__21327__auto__ = xlen;
if((n1__21326__auto__ > n2__21327__auto__)){
return n2__21327__auto__;
} else {
return n1__21326__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen
)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq33150){
var G__33151 = cljs.core.first.call(null,seq33150);
var seq33150__$1 = cljs.core.next.call(null,seq33150);
var G__33152 = cljs.core.first.call(null,seq33150__$1);
var seq33150__$2 = cljs.core.next.call(null,seq33150__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__33151,G__33152,seq33150__$2);
});
/**
 * Like `subvec` but uses `sub-indexes`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33166 = arguments.length;
var i__25160__auto___33167 = (0);
while(true){
if((i__25160__auto___33167 < len__25159__auto___33166)){
args__25166__auto__.push((arguments[i__25160__auto___33167]));

var G__33168 = (i__25160__auto___33167 + (1));
i__25160__auto___33167 = G__33168;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((2) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25167__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__33162){
var vec__33163 = p__33162;
var _QMARK_max_len = cljs.core.nth.call(null,vec__33163,(0),null);
if(cljs.core.truth_((function (){var __x = v;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33164){if((e33164 instanceof Error)){
var __t = e33164;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(vector? v)",__x,__t,null);
} else {
throw e33164;

}
}})())){
} else {
throw (new Error("Assert failed: (have? vector? v)"));
}

var vec__33165 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__33165,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__33165,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq33159){
var G__33160 = cljs.core.first.call(null,seq33159);
var seq33159__$1 = cljs.core.next.call(null,seq33159);
var G__33161 = cljs.core.first.call(null,seq33159__$1);
var seq33159__$2 = cljs.core.next.call(null,seq33159__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__33160,G__33161,seq33159__$2);
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var args33173 = [];
var len__25159__auto___33176 = arguments.length;
var i__25160__auto___33177 = (0);
while(true){
if((i__25160__auto___33177 < len__25159__auto___33176)){
args33173.push((arguments[i__25160__auto___33177]));

var G__33178 = (i__25160__auto___33177 + (1));
i__25160__auto___33177 = G__33178;
continue;
} else {
}
break;
}

var G__33175 = args33173.length;
switch (G__33175) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33173.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.call(null,xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;
taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_.call(null,x))){
return null;
} else {
return x;
}
});
/**
 * Returns a sorted vector of the top n items from coll of N items in O(N.logn)
 *   time. (take n (sort-by ...)) is O(N.logN) time, so much slower when n << N.
 *   Ref. http://stevehanov.ca/blog/index.php?id=122
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var args33182 = [];
var len__25159__auto___33185 = arguments.length;
var i__25160__auto___33186 = (0);
while(true){
if((i__25160__auto___33186 < len__25159__auto___33185)){
args33182.push((arguments[i__25160__auto___33186]));

var G__33187 = (i__25160__auto___33186 + (1));
i__25160__auto___33186 = G__33187;
continue;
} else {
}
break;
}

var G__33184 = args33182.length;
switch (G__33184) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33182.length)].join('')));

}
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top.call(null,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top.call(null,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),cljs.core.sort_by.call(null,keyfn,cmp,coll));
});

taoensso.encore.top.cljs$lang$maxFixedArity = 4;
taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33192 = arguments.length;
var i__25160__auto___33193 = (0);
while(true){
if((i__25160__auto___33193 < len__25159__auto___33192)){
args__25166__auto__.push((arguments[i__25160__auto___33193]));

var G__33194 = (i__25160__auto___33193 + (1));
i__25160__auto___33193 = G__33194;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((2) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((2)),(0),null)):null);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25167__auto__);
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_ks){
return taoensso.encore.update_in_STAR_.call(null,m,ks,(function (m__$1){
return cljs.core.apply.call(null,cljs.core.dissoc,m__$1,dissoc_ks);
}));
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (2);

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq33189){
var G__33190 = cljs.core.first.call(null,seq33189);
var seq33189__$1 = cljs.core.next.call(null,seq33189);
var G__33191 = cljs.core.first.call(null,seq33189__$1);
var seq33189__$2 = cljs.core.next.call(null,seq33189__$1);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__33190,G__33191,seq33189__$2);
});
/**
 * Assocs each kv iff its value is not nil
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33207 = arguments.length;
var i__25160__auto___33208 = (0);
while(true){
if((i__25160__auto___33208 < len__25159__auto___33207)){
args__25166__auto__.push((arguments[i__25160__auto___33208]));

var G__33209 = (i__25160__auto___33208 + (1));
i__25160__auto___33208 = G__33209;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,kvs);
}catch (e33197){if((e33197 instanceof Error)){
var __t = e33197;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e33197;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33198){if((e33198 instanceof Error)){
var __t = e33198;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",__x,__t,null);
} else {
throw e33198;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__24089__auto__ = m;
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__24869__auto__ = (function taoensso$encore$iter__33199(s__33200){
return (new cljs.core.LazySeq(null,(function (){
var s__33200__$1 = s__33200;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33200__$1);
if(temp__4425__auto__){
var s__33200__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33200__$2)){
var c__24867__auto__ = cljs.core.chunk_first.call(null,s__33200__$2);
var size__24868__auto__ = cljs.core.count.call(null,c__24867__auto__);
var b__33202 = cljs.core.chunk_buffer.call(null,size__24868__auto__);
if((function (){var i__33201 = (0);
while(true){
if((i__33201 < size__24868__auto__)){
var vec__33205 = cljs.core._nth.call(null,c__24867__auto__,i__33201);
var k = cljs.core.nth.call(null,vec__33205,(0),null);
var v = cljs.core.nth.call(null,vec__33205,(1),null);
if(!((v == null))){
cljs.core.chunk_append.call(null,b__33202,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__33210 = (i__33201 + (1));
i__33201 = G__33210;
continue;
} else {
var G__33211 = (i__33201 + (1));
i__33201 = G__33211;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33202),taoensso$encore$iter__33199.call(null,cljs.core.chunk_rest.call(null,s__33200__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33202),null);
}
} else {
var vec__33206 = cljs.core.first.call(null,s__33200__$2);
var k = cljs.core.nth.call(null,vec__33206,(0),null);
var v = cljs.core.nth.call(null,vec__33206,(1),null);
if(!((v == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__33199.call(null,cljs.core.rest.call(null,s__33200__$2)));
} else {
var G__33212 = cljs.core.rest.call(null,s__33200__$2);
s__33200__$1 = G__33212;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24869__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq33195){
var G__33196 = cljs.core.first.call(null,seq33195);
var seq33195__$1 = cljs.core.next.call(null,seq33195);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__33196,seq33195__$1);
});
/**
 * Assocs each kv iff its val is truthy
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33225 = arguments.length;
var i__25160__auto___33226 = (0);
while(true){
if((i__25160__auto___33226 < len__25159__auto___33225)){
args__25166__auto__.push((arguments[i__25160__auto___33226]));

var G__33227 = (i__25160__auto___33226 + (1));
i__25160__auto___33226 = G__33227;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,kvs);
}catch (e33215){if((e33215 instanceof Error)){
var __t = e33215;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e33215;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33216){if((e33216 instanceof Error)){
var __t = e33216;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",__x,__t,null);
} else {
throw e33216;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__24089__auto__ = m;
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__24869__auto__ = (function taoensso$encore$iter__33217(s__33218){
return (new cljs.core.LazySeq(null,(function (){
var s__33218__$1 = s__33218;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33218__$1);
if(temp__4425__auto__){
var s__33218__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33218__$2)){
var c__24867__auto__ = cljs.core.chunk_first.call(null,s__33218__$2);
var size__24868__auto__ = cljs.core.count.call(null,c__24867__auto__);
var b__33220 = cljs.core.chunk_buffer.call(null,size__24868__auto__);
if((function (){var i__33219 = (0);
while(true){
if((i__33219 < size__24868__auto__)){
var vec__33223 = cljs.core._nth.call(null,c__24867__auto__,i__33219);
var k = cljs.core.nth.call(null,vec__33223,(0),null);
var v = cljs.core.nth.call(null,vec__33223,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__33220,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__33228 = (i__33219 + (1));
i__33219 = G__33228;
continue;
} else {
var G__33229 = (i__33219 + (1));
i__33219 = G__33229;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33220),taoensso$encore$iter__33217.call(null,cljs.core.chunk_rest.call(null,s__33218__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33220),null);
}
} else {
var vec__33224 = cljs.core.first.call(null,s__33218__$2);
var k = cljs.core.nth.call(null,vec__33224,(0),null);
var v = cljs.core.nth.call(null,vec__33224,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__33217.call(null,cljs.core.rest.call(null,s__33218__$2)));
} else {
var G__33230 = cljs.core.rest.call(null,s__33218__$2);
s__33218__$1 = G__33230;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24869__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq33213){
var G__33214 = cljs.core.first.call(null,seq33213);
var seq33213__$1 = cljs.core.next.call(null,seq33213);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__33214,seq33213__$1);
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args33231 = [];
var len__25159__auto___33234 = arguments.length;
var i__25160__auto___33235 = (0);
while(true){
if((i__25160__auto___33235 < len__25159__auto___33234)){
args33231.push((arguments[i__25160__auto___33235]));

var G__33236 = (i__25160__auto___33235 + (1));
i__25160__auto___33235 = G__33236;
continue;
} else {
}
break;
}

var G__33233 = args33231.length;
switch (G__33233) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33231.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,taoensso.encore.queue.call(null),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;
taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33239 = arguments.length;
var i__25160__auto___33240 = (0);
while(true){
if((i__25160__auto___33240 < len__25159__auto___33239)){
args__25166__auto__.push((arguments[i__25160__auto___33240]));

var G__33241 = (i__25160__auto___33240 + (1));
i__25160__auto___33240 = G__33241;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((0) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25167__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq33238){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33238));
});
/**
 * (seq     {:a :A}) => ([:a :A])
 * (seq-kvs {:a :A}) => (:a :A)
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but assumes last arg is a map whose elements should be applied
 *   to `f` as an unpaired seq:
 *  (mapply (fn [x & {:keys [y z]}] (str x y z)) 1 {:y 2 :z 3})
 *    where fn will receive args as: `(1 :y 2 :z 3)`.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33244 = arguments.length;
var i__25160__auto___33245 = (0);
while(true){
if((i__25160__auto___33245 < len__25159__auto___33244)){
args__25166__auto__.push((arguments[i__25160__auto___33245]));

var G__33246 = (i__25160__auto___33245 + (1));
i__25160__auto___33245 = G__33246;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),taoensso.encore.seq_kvs.call(null,cljs.core.last.call(null,args))));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq33242){
var G__33243 = cljs.core.first.call(null,seq33242);
var seq33242__$1 = cljs.core.next.call(null,seq33242);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__33243,seq33242__$1);
});
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf
);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1))
:kf
));
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
}
});
taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
return taoensso.encore.map_kvs.call(null,null,(function (_,v){
return f.call(null,v);
}),m);
});
taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
return taoensso.encore.map_kvs.call(null,(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?new cljs.core.Keyword(null,"keywordize","keywordize",1381210758):(function (k,_){
return f.call(null,k);
})),null,m);
});
taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(predk,predv,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_((function (){var and__24077__auto__ = predk.call(null,k);
if(cljs.core.truth_(and__24077__auto__)){
return predv.call(null,v);
} else {
return and__24077__auto__;
}
})())){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
return taoensso.encore.filter_kvs.call(null,pred,cljs.core.constantly.call(null,true),m);
});
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
return taoensso.encore.filter_kvs.call(null,cljs.core.constantly.call(null,true),pred,m);
});
/**
 * Smaller, common-case version of `filter-vals`. Esp useful with `nil?`/`blank?`
 *   pred when constructing maps: {:foo (when _ <...>) :bar (when _ <...>)} in a
 *   way that preservers :or semantics.
 */
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,cljs.core.keyword.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
taoensso.encore.as_map_STAR_ = (function taoensso$encore$as_map_STAR_(kf,vf,kvs){
return cljs.core.transduce.call(null,cljs.core.partition_all.call(null,(2)),cljs.core.completing.call(null,(function (acc,p__33253){
var vec__33254 = p__33253;
var k = cljs.core.nth.call(null,vec__33254,(0),null);
var v = cljs.core.nth.call(null,vec__33254,(1),null);
return cljs.core.assoc_BANG_.call(null,acc,kf.call(null,k,v),vf.call(null,k,v));
}),cljs.core.persistent_BANG_),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),kvs);
});
/**
 * Cross between `hash-map` & `map-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33259 = arguments.length;
var i__25160__auto___33260 = (0);
while(true){
if((i__25160__auto___33260 < len__25159__auto___33259)){
args__25166__auto__.push((arguments[i__25160__auto___33260]));

var G__33261 = (i__25160__auto___33260 + (1));
i__25160__auto___33260 = G__33261;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__33257){
var vec__33258 = p__33257;
var kf = cljs.core.nth.call(null,vec__33258,(0),null);
var vf = cljs.core.nth.call(null,vec__33258,(1),null);
if(cljs.core.empty_QMARK_.call(null,kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__33258,kf,vf){
return (function (_,v){
return v;
});})(vec__33258,kf,vf))
:vf
);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__33258,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__33258,kf,vf))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1,vec__33258,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1,vec__33258,kf,vf))
:kf
));
return taoensso.encore.as_map_STAR_.call(null,kf__$1,vf__$1,kvs);
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq33255){
var G__33256 = cljs.core.first.call(null,seq33255);
var seq33255__$1 = cljs.core.next.call(null,seq33255);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__33256,seq33255__$1);
});
/**
 * Faster `zipmap` using transients
 */
taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if(!((ks__$1) && (vs__$1))){
return cljs.core.persistent_BANG_.call(null,m);
} else {
var G__33262 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__33263 = cljs.core.next.call(null,ks__$1);
var G__33264 = cljs.core.next.call(null,vs__$1);
m = G__33262;
ks__$1 = G__33263;
vs__$1 = G__33264;
continue;
}
break;
}
});
/**
 * Like `into` but supports multiple "from"s
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args33265 = [];
var len__25159__auto___33271 = arguments.length;
var i__25160__auto___33272 = (0);
while(true){
if((i__25160__auto___33272 < len__25159__auto___33271)){
args33265.push((arguments[i__25160__auto___33272]));

var G__33273 = (i__25160__auto___33272 + (1));
i__25160__auto___33272 = G__33273;
continue;
} else {
}
break;
}

var G__33270 = args33265.length;
switch (G__33270) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25178__auto__ = (new cljs.core.IndexedSeq(args33265.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25178__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq33266){
var G__33267 = cljs.core.first.call(null,seq33266);
var seq33266__$1 = cljs.core.next.call(null,seq33266);
var G__33268 = cljs.core.first.call(null,seq33266__$1);
var seq33266__$2 = cljs.core.next.call(null,seq33266__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__33267,G__33268,seq33266__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);
/**
 * Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args33275 = [];
var len__25159__auto___33281 = arguments.length;
var i__25160__auto___33282 = (0);
while(true){
if((i__25160__auto___33282 < len__25159__auto___33281)){
args33275.push((arguments[i__25160__auto___33282]));

var G__33283 = (i__25160__auto___33282 + (1));
i__25160__auto___33282 = G__33283;
continue;
} else {
}
break;
}

var G__33280 = args33275.length;
switch (G__33280) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25178__auto__ = (new cljs.core.IndexedSeq(args33275.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25178__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq33276){
var G__33277 = cljs.core.first.call(null,seq33276);
var seq33276__$1 = cljs.core.next.call(null,seq33276);
var G__33278 = cljs.core.first.call(null,seq33276__$1);
var seq33276__$2 = cljs.core.next.call(null,seq33276__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__33277,G__33278,seq33276__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__33291,seen__$1){
while(true){
var vec__33292 = p__33291;
var v = cljs.core.nth.call(null,vec__33292,(0),null);
var xs__$1 = vec__33292;
var temp__4425__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4425__auto__){
var s = temp__4425__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__33293 = cljs.core.rest.call(null,s);
var G__33294 = seen__$1;
p__33291 = G__33293;
seen__$1 = G__33294;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var args33299 = [];
var len__25159__auto___33302 = arguments.length;
var i__25160__auto___33303 = (0);
while(true){
if((i__25160__auto___33303 < len__25159__auto___33302)){
args33299.push((arguments[i__25160__auto___33303]));

var G__33304 = (i__25160__auto___33303 + (1));
i__25160__auto___33303 = G__33304;
continue;
} else {
}
break;
}

var G__33301 = args33299.length;
switch (G__33301) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33299.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.call(null);
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__33306 = null;
var G__33306__0 = (function (){
return rf.call(null);
});
var G__33306__1 = (function (acc){
return rf.call(null,acc);
});
var G__33306__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_.call(null,seen_,cljs.core.conj.call(null,cljs.core._deref.call(null,seen_),k));

return rf.call(null,acc,input);
}
});
G__33306 = function(acc,input){
switch(arguments.length){
case 0:
return G__33306__0.call(this);
case 1:
return G__33306__1.call(this,acc);
case 2:
return G__33306__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33306.cljs$core$IFn$_invoke$arity$0 = G__33306__0;
G__33306.cljs$core$IFn$_invoke$arity$1 = G__33306__1;
G__33306.cljs$core$IFn$_invoke$arity$2 = G__33306__2;
return G__33306;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return taoensso.encore.subvec_STAR_.call(null,coll,(0),n);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),coll);
}
});
taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,pred),coll);
});
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var args33311 = [];
var len__25159__auto___33316 = arguments.length;
var i__25160__auto___33317 = (0);
while(true){
if((i__25160__auto___33317 < len__25159__auto___33316)){
args33311.push((arguments[i__25160__auto___33317]));

var G__33318 = (i__25160__auto___33317 + (1));
i__25160__auto___33317 = G__33318;
continue;
} else {
}
break;
}

var G__33313 = args33311.length;
switch (G__33313) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33311.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.call(null,cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.call(null,(function (p__33314,in$){
var vec__33315 = p__33314;
var v = cljs.core.nth.call(null,vec__33315,(0),null);
var seen = cljs.core.nth.call(null,vec__33315,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(!(cljs.core.contains_QMARK_.call(null,seen,in_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;
/**
 * Reverse comparator
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33322 = arguments.length;
var i__25160__auto___33323 = (0);
while(true){
if((i__25160__auto___33323 < len__25159__auto___33322)){
args__25166__auto__.push((arguments[i__25160__auto___33323]));

var G__33324 = (i__25160__auto___33323 + (1));
i__25160__auto___33323 = G__33324;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.key.call(null,e);
var rv = cljs.core.val.call(null,e);
if(!(cljs.core.contains_QMARK_.call(null,m,k))){
return cljs.core.assoc.call(null,m,k,rv);
} else {
var lv = cljs.core.get.call(null,m,k);
if((cljs.core.map_QMARK_.call(null,lv)) && (cljs.core.map_QMARK_.call(null,rv))){
return cljs.core.assoc.call(null,m,k,taoensso.encore.nested_merge_with.call(null,f,lv,rv));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,lv,rv));
}
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__24089__auto__ = m1;
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});})(merge_entry))
;
return cljs.core.reduce.call(null,merge2,maps);
} else {
return null;
}
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq33320){
var G__33321 = cljs.core.first.call(null,seq33320);
var seq33320__$1 = cljs.core.next.call(null,seq33320);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__33321,seq33320__$1);
});
taoensso.encore.nested_merge = cljs.core.partial.call(null,taoensso.encore.nested_merge_with,(function (x,y){
if((cljs.core.map_QMARK_.call(null,x)) && ((y == null))){
return x;
} else {
return y;
}
}));
/**
 * Like `repeatedly` but faster and `conj`s items into given collection
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((function (){var and__24077__auto__ = (n > (10));
if(and__24077__auto__){
if(!((coll == null))){
if(((coll.cljs$lang$protocol_mask$partition1$ & (4))) || (coll.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
} else {
return and__24077__auto__;
}
})()){
var v = cljs.core.transient$.call(null,coll);
var idx = (0);
while(true){
if((idx === n)){
return cljs.core.persistent_BANG_.call(null,v);
} else {
var G__33329 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__33330 = (idx + (1));
v = G__33329;
idx = G__33330;
continue;
}
break;
}
} else {
var v = coll;
var idx = (0);
while(true){
if((idx === n)){
return v;
} else {
var G__33331 = cljs.core.conj.call(null,v,f.call(null));
var G__33332 = (idx + (1));
v = G__33331;
idx = G__33332;
continue;
}
break;
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap,__hash){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24711__auto__,k__24712__auto__){
var self__ = this;
var this__24711__auto____$1 = this;
return cljs.core._lookup.call(null,this__24711__auto____$1,k__24712__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24713__auto__,k33334,else__24714__auto__){
var self__ = this;
var this__24713__auto____$1 = this;
var G__33336 = (((k33334 instanceof cljs.core.Keyword))?k33334.fqn:null);
switch (G__33336) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33334,else__24714__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24725__auto__,writer__24726__auto__,opts__24727__auto__){
var self__ = this;
var this__24725__auto____$1 = this;
var pr_pair__24728__auto__ = ((function (this__24725__auto____$1){
return (function (keyval__24729__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24726__auto__,cljs.core.pr_writer,""," ","",opts__24727__auto__,keyval__24729__auto__);
});})(this__24725__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24726__auto__,pr_pair__24728__auto__,"#taoensso.encore.Swapped{",", ","}",opts__24727__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IIterable$ = true;

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33333){
var self__ = this;
var G__33333__$1 = this;
return (new cljs.core.RecordIter((0),G__33333__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24709__auto__){
var self__ = this;
var this__24709__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__24705__auto__){
var self__ = this;
var this__24705__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24715__auto__){
var self__ = this;
var this__24715__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24706__auto__){
var self__ = this;
var this__24706__auto____$1 = this;
var h__24524__auto__ = self__.__hash;
if(!((h__24524__auto__ == null))){
return h__24524__auto__;
} else {
var h__24524__auto____$1 = cljs.core.hash_imap.call(null,this__24706__auto____$1);
self__.__hash = h__24524__auto____$1;

return h__24524__auto____$1;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24707__auto__,other__24708__auto__){
var self__ = this;
var this__24707__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24077__auto__ = other__24708__auto__;
if(cljs.core.truth_(and__24077__auto__)){
var and__24077__auto____$1 = (this__24707__auto____$1.constructor === other__24708__auto__.constructor);
if(and__24077__auto____$1){
return cljs.core.equiv_map.call(null,this__24707__auto____$1,other__24708__auto__);
} else {
return and__24077__auto____$1;
}
} else {
return and__24077__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24720__auto__,k__24721__auto__){
var self__ = this;
var this__24720__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__24721__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24720__auto____$1),self__.__meta),k__24721__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24721__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24718__auto__,k__24719__auto__,G__33333){
var self__ = this;
var this__24718__auto____$1 = this;
var pred__33337 = cljs.core.keyword_identical_QMARK_;
var expr__33338 = k__24719__auto__;
if(cljs.core.truth_(pred__33337.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__33338))){
return (new taoensso.encore.Swapped(G__33333,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33337.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__33338))){
return (new taoensso.encore.Swapped(self__.new_val,G__33333,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24719__auto__,G__33333),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24723__auto__){
var self__ = this;
var this__24723__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24710__auto__,G__33333){
var self__ = this;
var this__24710__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__33333,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24716__auto__,entry__24717__auto__){
var self__ = this;
var this__24716__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24717__auto__)){
return cljs.core._assoc.call(null,this__24716__auto____$1,cljs.core._nth.call(null,entry__24717__auto__,(0)),cljs.core._nth.call(null,entry__24717__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24716__auto____$1,entry__24717__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Symbol(null,"return-val","return-val",1127759038,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__24745__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__24745__auto__,writer__24746__auto__){
return cljs.core._write.call(null,writer__24746__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__33335){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__33335),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__33335),null,cljs.core.dissoc.call(null,G__33335,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)),null));
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});
taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});
taoensso.encore.swapped_STAR_ = (function taoensso$encore$swapped_STAR_(x){
if(cljs.core.truth_(taoensso.encore.swapped_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});
/**
 * [<new-val> <return-val>]
 */
taoensso.encore.swapped_STAR__in = (function taoensso$encore$swapped_STAR__in(m,ks,f){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return taoensso.encore.swapped_STAR_.call(null,taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)));
} else {
var old_val_in = cljs.core.get_in.call(null,m,ks);
var vec__33342 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__33342,(0),null);
var return_val = cljs.core.nth.call(null,vec__33342,(1),null);
var new_val = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,new_val_in,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)):cljs.core.assoc_in.call(null,m,ks,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
});
/**
 * Reduces input with
 *   [<type> <ks> <reset-val-or-swap-fn>] or
 *       [<ks> <reset-val-or-swap-fn>] ops
 */
taoensso.encore.replace_in_STAR_ = (function taoensso$encore$replace_in_STAR_(_QMARK_vf_type,m,ops){
return cljs.core.reduce.call(null,(function (accum,_QMARK_op){
if(cljs.core.not.call(null,_QMARK_op)){
return accum;
} else {
var vec__33345 = ((cljs.core.not.call(null,_QMARK_vf_type))?_QMARK_op:cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op));
var vf_type = cljs.core.nth.call(null,vec__33345,(0),null);
var ks = cljs.core.nth.call(null,vec__33345,(1),null);
var valf = cljs.core.nth.call(null,vec__33345,(2),null);
var G__33346 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__33346) {
case "reset":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf;
} else {
return cljs.core.assoc_in.call(null,accum,ks,valf);
}

break;
case "swap":
if((valf == null)){
return accum;
} else {
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf.call(null,accum);
} else {
return cljs.core.nth.call(null,taoensso.encore.swapped_STAR__in.call(null,accum,ks,valf),(0));
}
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(vf_type)].join('')));

}
}
}),m,ops);
});
/**
 * Experimental. For use with `swap!`, etc.
 */
taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33350 = arguments.length;
var i__25160__auto___33351 = (0);
while(true){
if((i__25160__auto___33351 < len__25159__auto___33350)){
args__25166__auto__.push((arguments[i__25160__auto___33351]));

var G__33352 = (i__25160__auto___33351 + (1));
i__25160__auto___33351 = G__33352;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore.replace_in_STAR_.call(null,null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq33348){
var G__33349 = cljs.core.first.call(null,seq33348);
var seq33348__$1 = cljs.core.next.call(null,seq33348);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__33349,seq33348__$1);
});
/**
 * Minor optimization for single-threaded Cljs
 */
taoensso.encore.platform_cas_BANG_ = (function taoensso$encore$platform_cas_BANG_(atom_,old_val,new_val){
cljs.core.reset_BANG_.call(null,atom_,new_val);

return true;
});
/**
 * More powerful version of `swap!`:
 *  * Supports optional `update-in` semantics.
 *  * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
 *    <new-val>. This is useful when writing atomic pull fns, etc.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var args33353 = [];
var len__25159__auto___33364 = arguments.length;
var i__25160__auto___33365 = (0);
while(true){
if((i__25160__auto___33365 < len__25159__auto___33364)){
args33353.push((arguments[i__25160__auto___33365]));

var G__33366 = (i__25160__auto___33365 + (1));
i__25160__auto___33365 = G__33366;
continue;
} else {
}
break;
}

var G__33359 = args33353.length;
switch (G__33359) {
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__25178__auto__ = (new cljs.core.IndexedSeq(args33353.slice((3)),(0),null));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25178__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__33360 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__33360,(0),null);
var return_val = cljs.core.nth.call(null,vec__33360,(1),null);
if(cljs.core.truth_(taoensso.encore.platform_cas_BANG_.call(null,atom_,old_val,new_val))){
return return_val;
} else {
continue;
}
break;
}
} else {
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__33361 = taoensso.encore.swapped_STAR__in.call(null,old_val,ks,f);
var new_val = cljs.core.nth.call(null,vec__33361,(0),null);
var return_val = cljs.core.nth.call(null,vec__33361,(1),null);
if(cljs.core.truth_(taoensso.encore.platform_cas_BANG_.call(null,atom_,old_val,new_val))){
return return_val;
} else {
continue;
}
break;
}
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,f,more){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,more);
}catch (e33362){if((e33362 instanceof Error)){
var __t = e33362;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e33362;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33363){if((e33363 instanceof Error)){
var __t = e33363;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",__x,__t,null);
} else {
throw e33363;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count more))"));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"swap","swap",228675637),old_val,pairs);
if(cljs.core.truth_(taoensso.encore.platform_cas_BANG_.call(null,atom_,old_val,new_val))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val], null);
} else {
continue;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq33354){
var G__33355 = cljs.core.first.call(null,seq33354);
var seq33354__$1 = cljs.core.next.call(null,seq33354);
var G__33356 = cljs.core.first.call(null,seq33354__$1);
var seq33354__$2 = cljs.core.next.call(null,seq33354__$1);
var G__33357 = cljs.core.first.call(null,seq33354__$2);
var seq33354__$3 = cljs.core.next.call(null,seq33354__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33355,G__33356,G__33357,seq33354__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Is to `reset!` as `swap-in!` is to `swap!`
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var args33368 = [];
var len__25159__auto___33377 = arguments.length;
var i__25160__auto___33378 = (0);
while(true){
if((i__25160__auto___33378 < len__25159__auto___33377)){
args33368.push((arguments[i__25160__auto___33378]));

var G__33379 = (i__25160__auto___33378 + (1));
i__25160__auto___33378 = G__33379;
continue;
} else {
}
break;
}

var G__33374 = args33368.length;
switch (G__33374) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__25178__auto__ = (new cljs.core.IndexedSeq(args33368.slice((3)),(0),null));
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25178__auto__);

}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,new_val){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.reset_BANG_.call(null,atom_,new_val);
} else {
return cljs.core.swap_BANG_.call(null,atom_,(function (old_val){
return cljs.core.assoc_in.call(null,old_val,ks,new_val);
}));
}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,new_val,more){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,more);
}catch (e33375){if((e33375 instanceof Error)){
var __t = e33375;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e33375;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33376){if((e33376 instanceof Error)){
var __t = e33376;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",__x,__t,null);
} else {
throw e33376;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count more))"));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val__$1 = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),old_val,pairs);
if(cljs.core.truth_(taoensso.encore.platform_cas_BANG_.call(null,atom_,old_val,new_val__$1))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val__$1], null);
} else {
continue;
}
break;
}
});

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq33369){
var G__33370 = cljs.core.first.call(null,seq33369);
var seq33369__$1 = cljs.core.next.call(null,seq33369);
var G__33371 = cljs.core.first.call(null,seq33369__$1);
var seq33369__$2 = cljs.core.next.call(null,seq33369__$1);
var G__33372 = cljs.core.first.call(null,seq33369__$2);
var seq33369__$3 = cljs.core.next.call(null,seq33369__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33370,G__33371,G__33372,seq33369__$3);
});

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = (3);
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(str_builder,s){
return str_builder.append(s);
});
/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.call(null);
});
var taoensso$encore$str_rf__1 = (function (acc){
if(cljs.core.truth_(taoensso.encore.str_builder_QMARK_.call(null,acc))){
return acc;
} else {
return taoensso.encore.str_builder.call(null,[cljs.core.str(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.call(null,(cljs.core.truth_(taoensso.encore.str_builder_QMARK_.call(null,acc))?acc:taoensso.encore.str_builder.call(null,[cljs.core.str(acc)].join(''))),[cljs.core.str(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var args33385 = [];
var len__25159__auto___33388 = arguments.length;
var i__25160__auto___33389 = (0);
while(true){
if((i__25160__auto___33389 < len__25159__auto___33388)){
args33385.push((arguments[i__25160__auto___33389]));

var G__33390 = (i__25160__auto___33389 + (1));
i__25160__auto___33389 = G__33390;
continue;
} else {
}
break;
}

var G__33387 = args33385.length;
switch (G__33387) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33385.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.call(null,null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.call(null,separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__24077__auto__ = separator;
if(cljs.core.truth_(and__24077__auto__)){
return cljs.core.not_EQ_.call(null,separator,"");
} else {
return and__24077__auto__;
}
})())){
var sep_xform = cljs.core.interpose.call(null,separator);
var str_rf_STAR_ = cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,cljs.core.comp.call(null,xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.call(null,sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,xform,cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str(cljs.core.reduce.call(null,taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;
taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__24089__auto__ = fmt;
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
});
/**
 * Like `clojure.core/format` but:
 *  * Returns "" when fmt is nil rather than throwing an NPE.
 *  * Formats nil as "nil" rather than "null".
 *  * Provides ClojureScript support via goog.string.format (this has fewer
 *    formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33394 = arguments.length;
var i__25160__auto___33395 = (0);
while(true){
if((i__25160__auto___33395 < len__25159__auto___33394)){
args__25166__auto__.push((arguments[i__25160__auto___33395]));

var G__33396 = (i__25160__auto___33395 + (1));
i__25160__auto___33395 = G__33396;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq33392){
var G__33393 = cljs.core.first.call(null,seq33392);
var seq33392__$1 = cljs.core.next.call(null,seq33392);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__33393,seq33392__$1);
});
/**
 * Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *                http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 technically introduced a breaking "fix" for
 *   CLJS-911 (Ref. https://goo.gl/bk5hcT) but it's a mess in an attempt to keep
 *   some compatibility with the previous broken behaviour. The merged CLJS-911 fix
 *   provides only inconsistent (single-match) and error-prone compatibility with
 *   Clojure's `str/replace`. CLJS-794 is also still unresolved.
 * 
 *   This util provides proper consistent Clojure/Script replace behaviour.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = [cljs.core.str("g"),cljs.core.str((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__33397__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__33397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33398__i = 0, G__33398__a = new Array(arguments.length -  0);
while (G__33398__i < G__33398__a.length) {G__33398__a[G__33398__i] = arguments[G__33398__i + 0]; ++G__33398__i;}
  args = new cljs.core.IndexedSeq(G__33398__a,0);
} 
return G__33397__delegate.call(this,args);};
G__33397.cljs$lang$maxFixedArity = 0;
G__33397.cljs$lang$applyTo = (function (arglist__33399){
var args = cljs.core.seq(arglist__33399);
return G__33397__delegate(args);
});
G__33397.cljs$core$IFn$_invoke$arity$variadic = G__33397__delegate;
return G__33397;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');

}
}
});
/**
 * Gives a consistent, flexible, cross-platform substring API built on
 *   `sub-indexes`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33407 = arguments.length;
var i__25160__auto___33408 = (0);
while(true){
if((i__25160__auto___33408 < len__25159__auto___33407)){
args__25166__auto__.push((arguments[i__25160__auto___33408]));

var G__33409 = (i__25160__auto___33408 + (1));
i__25160__auto___33408 = G__33409;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((2) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25167__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__33403){
var vec__33404 = p__33403;
var _QMARK_max_len = cljs.core.nth.call(null,vec__33404,(0),null);
if(cljs.core.truth_((function (){var __x = s;
try{if(typeof __x === 'string'){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33405){if((e33405 instanceof Error)){
var __t = e33405;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(string? s)",__x,__t,null);
} else {
throw e33405;

}
}})())){
} else {
throw (new Error("Assert failed: (have? string? s)"));
}

var vec__33406 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__33406,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__33406,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq33400){
var G__33401 = cljs.core.first.call(null,seq33400);
var seq33400__$1 = cljs.core.next.call(null,seq33400);
var G__33402 = cljs.core.first.call(null,seq33400__$1);
var seq33400__$2 = cljs.core.next.call(null,seq33400__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__33401,G__33402,seq33400__$2);
});
taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33415 = arguments.length;
var i__25160__auto___33416 = (0);
while(true){
if((i__25160__auto___33416 < len__25159__auto___33415)){
args__25166__auto__.push((arguments[i__25160__auto___33416]));

var G__33417 = (i__25160__auto___33416 + (1));
i__25160__auto___33416 = G__33417;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((2) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((2)),(0),null)):null);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25167__auto__);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic = (function (s,substr,p__33413){
var vec__33414 = p__33413;
var start_idx = cljs.core.nth.call(null,vec__33414,(0),null);
var last_QMARK_ = cljs.core.nth.call(null,vec__33414,(1),null);
var start_idx__$1 = ((function (){var or__24089__auto__ = start_idx;
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return (0);
}
})() | (0));
var result = ((cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx__$1):s.indexOf(substr,start_idx__$1)) | (0));
if(cljs.core.not_EQ_.call(null,result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = (2);

taoensso.encore.str__QMARK_index.cljs$lang$applyTo = (function (seq33410){
var G__33411 = cljs.core.first.call(null,seq33410);
var seq33410__$1 = cljs.core.next.call(null,seq33410);
var G__33412 = cljs.core.first.call(null,seq33410__$1);
var seq33410__$2 = cljs.core.next.call(null,seq33410__$1);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic(G__33411,G__33412,seq33410__$2);
});
/**
 * Like `clojure.string/join` but ensures no double separators
 */
taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33420 = arguments.length;
var i__25160__auto___33421 = (0);
while(true){
if((i__25160__auto___33421 < len__25159__auto___33420)){
args__25166__auto__.push((arguments[i__25160__auto___33421]));

var G__33422 = (i__25160__auto___33421 + (1));
i__25160__auto___33421 = G__33422;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (separator,coll){
return cljs.core.reduce.call(null,(function (s1,s2){
var s1__$1 = [cljs.core.str(s1)].join('');
var s2__$1 = [cljs.core.str(s2)].join('');
if(cljs.core.truth_(taoensso.encore.str_ends_with_QMARK_.call(null,s1__$1,separator))){
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1.substring((1)))].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
}
} else {
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
if((cljs.core._EQ_.call(null,s1__$1,"")) || (cljs.core._EQ_.call(null,s2__$1,""))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(separator),cljs.core.str(s2__$1)].join('');
}
}
}
}),null,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq33418){
var G__33419 = cljs.core.first.call(null,seq33418);
var seq33418__$1 = cljs.core.next.call(null,seq33418);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__33419,seq33418__$1);
});
/**
 * Joins string paths (URLs, file paths, etc.) ensuring correct "/"
 *   interposition
 */
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33424 = arguments.length;
var i__25160__auto___33425 = (0);
while(true){
if((i__25160__auto___33425 < len__25159__auto___33424)){
args__25166__auto__.push((arguments[i__25160__auto___33425]));

var G__33426 = (i__25160__auto___33425 + (1));
i__25160__auto___33425 = G__33426;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((0) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__25167__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return cljs.core.apply.call(null,taoensso.encore.join_once,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq33423){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33423));
});
/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_.call(null,s)){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var args33427 = [];
var len__25159__auto___33430 = arguments.length;
var i__25160__auto___33431 = (0);
while(true){
if((i__25160__auto___33431 < len__25159__auto___33430)){
args33427.push((arguments[i__25160__auto___33431]));

var G__33432 = (i__25160__auto___33431 + (1));
i__25160__auto___33431 = G__33432;
continue;
} else {
}
break;
}

var G__33429 = args33427.length;
switch (G__33429) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33427.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.substr.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int.call(null,(16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int.call(null,(16)))).toString((16));
return [cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str("4"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(rhex),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null))].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;
taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return pred.call(null,x);
}catch (e33435){if((e33435 instanceof Error)){
var _ = e33435;
return false;
} else {
throw e33435;

}
}});
/**
 * Experimental. Cheaper `have!` alt that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var args33436 = [];
var len__25159__auto___33439 = arguments.length;
var i__25160__auto___33440 = (0);
while(true){
if((i__25160__auto___33440 < len__25159__auto___33439)){
args33436.push((arguments[i__25160__auto___33440]));

var G__33441 = (i__25160__auto___33440 + (1));
i__25160__auto___33440 = G__33441;
continue;
} else {
}
break;
}

var G__33438 = args33436.length;
switch (G__33438) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33436.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(x)){
return x;
} else {
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x);
}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("`is!` "),cljs.core.str([cljs.core.str(pred)].join('')),cljs.core.str(" failure against arg: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),x,new cljs.core.Keyword(null,"arg-type","arg-type",-2020167363),cljs.core.type.call(null,x)], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 2;
/**
 * Experimental. For use with `if-let`s, `when-let`s, etc.
 */
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
return null;
}
});
taoensso.encore.gc_rate = (1.0 / (16000));
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(){
return (cljs.core.rand.call(null) <= taoensso.encore.gc_rate);
});
/**
 * Swaps associative value at key and returns the new value. Specialized, fast
 *   `swap-in!` for use mostly by memoization utils.
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(atom_,k,f){
while(true){
var old_m = cljs.core.deref.call(null,atom_);
var new_v = f.call(null,cljs.core.get.call(null,old_m,k));
var new_m = cljs.core.assoc.call(null,old_m,k,new_v);
if(cljs.core.truth_(taoensso.encore.platform_cas_BANG_.call(null,atom_,old_m,new_m))){
return new_v;
} else {
continue;
}
break;
}
});
/**
 * Like `clojure.core/memoize` but faster, uses delays to avoid write races
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__33443__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__24089__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args,((function (or__24089__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__24089__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__24089__auto__,cache_))
,null));
}
});})(or__24089__auto__,cache_))
);
}
})());
};
var G__33443 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33444__i = 0, G__33444__a = new Array(arguments.length -  0);
while (G__33444__i < G__33444__a.length) {G__33444__a[G__33444__i] = arguments[G__33444__i + 0]; ++G__33444__i;}
  args = new cljs.core.IndexedSeq(G__33444__a,0);
} 
return G__33443__delegate.call(this,args);};
G__33443.cljs$lang$maxFixedArity = 0;
G__33443.cljs$lang$applyTo = (function (arglist__33445){
var args = cljs.core.seq(arglist__33445);
return G__33443__delegate(args);
});
G__33443.cljs$core$IFn$_invoke$arity$variadic = G__33443__delegate;
return G__33443;
})()
;
;})(cache_))
});
/**
 * Fastest possible 0-arg `memoize_`
 */
taoensso.encore.memoize_a0_ = (function taoensso$encore$memoize_a0_(f){
var cache_ = cljs.core.atom.call(null,null);
return ((function (cache_){
return (function (){
return cljs.core.deref.call(null,(function (){var or__24089__auto__ = cljs.core.deref.call(null,cache_);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return cljs.core.swap_BANG_.call(null,cache_,((function (or__24089__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__24089__auto__,cache_){
return (function (){
return f.call(null);
});})(or__24089__auto__,cache_))
,null));
}
});})(or__24089__auto__,cache_))
);
}
})());
});
;})(cache_))
});
/**
 * Fastest possible 0/1-arg `memoize_`
 */
taoensso.encore.memoize_a1_ = (function taoensso$encore$memoize_a1_(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() {
var G__33446 = null;
var G__33446__0 = (function (){
return cljs.core.deref.call(null,(function (){var or__24089__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),taoensso.encore.sentinel);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,taoensso.encore.sentinel,((function (or__24089__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__24089__auto__,cache_){
return (function (){
return f.call(null);
});})(or__24089__auto__,cache_))
,null));
}
});})(or__24089__auto__,cache_))
);
}
})());
});
var G__33446__1 = (function (x){
return cljs.core.deref.call(null,(function (){var or__24089__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),x);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,x,((function (or__24089__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__24089__auto__,cache_){
return (function (){
return f.call(null,x);
});})(or__24089__auto__,cache_))
,null));
}
});})(or__24089__auto__,cache_))
);
}
})());
});
G__33446 = function(x){
switch(arguments.length){
case 0:
return G__33446__0.call(this);
case 1:
return G__33446__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33446.cljs$core$IFn$_invoke$arity$0 = G__33446__0;
G__33446.cljs$core$IFn$_invoke$arity$1 = G__33446__1;
return G__33446;
})()
;})(cache_))
});
/**
 * Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize1 = (function taoensso$encore$memoize1(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__33447__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__24089__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,cache_,((function (or__24089__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (or__24089__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__24089__auto__,cache_))
,null))], true, false);
}
});})(or__24089__auto__,cache_))
),args);
}
})());
};
var G__33447 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33448__i = 0, G__33448__a = new Array(arguments.length -  0);
while (G__33448__i < G__33448__a.length) {G__33448__a[G__33448__i] = arguments[G__33448__i + 0]; ++G__33448__i;}
  args = new cljs.core.IndexedSeq(G__33448__a,0);
} 
return G__33447__delegate.call(this,args);};
G__33447.cljs$lang$maxFixedArity = 0;
G__33447.cljs$lang$applyTo = (function (arglist__33449){
var args = cljs.core.seq(arglist__33449);
return G__33447__delegate(args);
});
G__33447.cljs$core$IFn$_invoke$arity$variadic = G__33447__delegate;
return G__33447;
})()
;
;})(cache_))
});
/**
 * Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
 *   and immediately applies memoized f to given arguments
 */
taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33453 = arguments.length;
var i__25160__auto___33454 = (0);
while(true){
if((i__25160__auto___33454 < len__25159__auto___33453)){
args__25166__auto__.push((arguments[i__25160__auto___33454]));

var G__33455 = (i__25160__auto___33454 + (1));
i__25160__auto___33454 = G__33455;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((2) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25167__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.not.call(null,cache)){
return cljs.core.apply.call(null,f,args);
} else {
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq33450){
var G__33451 = cljs.core.first.call(null,seq33450);
var seq33450__$1 = cljs.core.next.call(null,seq33450);
var G__33452 = cljs.core.first.call(null,seq33450__$1);
var seq33450__$2 = cljs.core.next.call(null,seq33450__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__33451,G__33452,seq33450__$2);
});
/**
 * Like `clojure.core/memoize` but:
 *  * Can be significantly faster (depends on opts)
 *  * Uses delays to prevent race conditions on writes
 *  * Supports auto invalidation & gc with `ttl-ms` option
 *  * Supports cache size limit & gc with `cache-size` option
 *  * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args33456 = [];
var len__25159__auto___33479 = arguments.length;
var i__25160__auto___33480 = (0);
while(true){
if((i__25160__auto___33480 < len__25159__auto___33479)){
args33456.push((arguments[i__25160__auto___33480]));

var G__33481 = (i__25160__auto___33480 + (1));
i__25160__auto___33480 = G__33481;
continue;
} else {
}
break;
}

var G__33458 = args33456.length;
switch (G__33458) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33456.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__33483__delegate = function (p__33459){
var vec__33460 = p__33459;
var arg1 = cljs.core.nth.call(null,vec__33460,(0),null);
var argn = cljs.core.nthnext.call(null,vec__33460,(1));
var args = vec__33460;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","debug","mem/debug",-1608833359)))){
return cache_;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
return cljs.core.deref.call(null,(function (){var or__24089__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args__$1);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args__$1,((function (or__24089__auto__,fresh_QMARK_,args__$1,vec__33460,arg1,argn,args,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_((function (){var and__24077__auto__ = _QMARK_dv;
if(cljs.core.truth_(and__24077__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__24077__auto__;
}
})())){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__24089__auto__,fresh_QMARK_,args__$1,vec__33460,arg1,argn,args,cache_){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(or__24089__auto__,fresh_QMARK_,args__$1,vec__33460,arg1,argn,args,cache_))
,null));
}
});})(or__24089__auto__,fresh_QMARK_,args__$1,vec__33460,arg1,argn,args,cache_))
);
}
})());

}
}
};
var G__33483 = function (var_args){
var p__33459 = null;
if (arguments.length > 0) {
var G__33484__i = 0, G__33484__a = new Array(arguments.length -  0);
while (G__33484__i < G__33484__a.length) {G__33484__a[G__33484__i] = arguments[G__33484__i + 0]; ++G__33484__i;}
  p__33459 = new cljs.core.IndexedSeq(G__33484__a,0);
} 
return G__33483__delegate.call(this,p__33459);};
G__33483.cljs$lang$maxFixedArity = 0;
G__33483.cljs$lang$applyTo = (function (arglist__33485){
var p__33459 = cljs.core.seq(arglist__33485);
return G__33483__delegate(p__33459);
});
G__33483.cljs$core$IFn$_invoke$arity$variadic = G__33483__delegate;
return G__33483;
})()
;
;})(cache_))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var __x_33486 = ttl_ms;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x_33486))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33461){if((e33461 instanceof Error)){
var __t_33487 = e33461;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? ttl-ms)",__x_33486,__t_33487,null);
} else {
throw e33461;

}
}
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms__$1 = cljs.core.long$.call(null,ttl_ms);
var gc_fn = ((function (cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (){
if(cljs.core.truth_((function (){var and__24077__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__24077__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__24077__auto__,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__24077__auto__,cache_,gc_running_QMARK__,ttl_ms__$1))
);
} else {
return and__24077__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
var snapshot = cljs.core.deref.call(null,cache_);
var ks_to_gc = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,k,p__33462){
var vec__33463 = p__33462;
var dv = cljs.core.nth.call(null,vec__33463,(0),null);
var udt = cljs.core.nth.call(null,vec__33463,(1),null);
var cv = vec__33463;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),snapshot));
cljs.core.swap_BANG_.call(null,cache_,((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$.call(null,m),ks_to_gc));
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
);

return cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false);
} else {
return null;
}
});})(cache_,gc_running_QMARK__,ttl_ms__$1))
;
return ((function (cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function() { 
var G__33488__delegate = function (p__33464){
var vec__33465 = p__33464;
var arg1 = cljs.core.nth.call(null,vec__33465,(0),null);
var argn = cljs.core.nthnext.call(null,vec__33465,(1));
var args = vec__33465;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","debug","mem/debug",-1608833359)))){
return cache_;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn.call(null);

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var instant = taoensso.encore.now_udt.call(null);
var vec__33466 = taoensso.encore.swap_val_BANG_.call(null,cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__33465,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__24077__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__24077__auto__)){
var and__24077__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__24077__auto____$1){
var vec__33468 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__33468,(0),null);
var udt = cljs.core.nth.call(null,vec__33468,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__24077__auto____$1;
}
} else {
return and__24077__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__33465,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__33465,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__33465,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
);
var dv = cljs.core.nth.call(null,vec__33466,(0),null);
return cljs.core.deref.call(null,dv);

}
}
};
var G__33488 = function (var_args){
var p__33464 = null;
if (arguments.length > 0) {
var G__33489__i = 0, G__33489__a = new Array(arguments.length -  0);
while (G__33489__i < G__33489__a.length) {G__33489__a[G__33489__i] = arguments[G__33489__i + 0]; ++G__33489__i;}
  p__33464 = new cljs.core.IndexedSeq(G__33489__a,0);
} 
return G__33488__delegate.call(this,p__33464);};
G__33488.cljs$lang$maxFixedArity = 0;
G__33488.cljs$lang$applyTo = (function (arglist__33490){
var p__33464 = cljs.core.seq(arglist__33490);
return G__33488__delegate(p__33464);
});
G__33488.cljs$core$IFn$_invoke$arity$variadic = G__33488__delegate;
return G__33488;
})()
;
;})(cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
var __x_33491 = ttl_ms;
if(cljs.core.truth_(((function (__x_33491){
return (function (__x__$1){
var or__24089__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.pos_int_QMARK_).call(null,__x__$1);
}
});})(__x_33491))
.call(null,__x_33491))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? pos-int?] ttl-ms)",__x_33491,null,null);
}

var __x_33492 = cache_size;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x_33492))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33469){if((e33469 instanceof Error)){
var __t_33493 = e33469;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? cache-size)",__x_33492,__t_33493,null);
} else {
throw e33469;

}
}
var state_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms_QMARK_ = !((ttl_ms == null));
var ttl_ms__$1 = cljs.core.long$.call(null,(function (){var or__24089__auto__ = ttl_ms;
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return (0);
}
})());
var cache_size__$1 = cljs.core.long$.call(null,cache_size);
var gc_fn = ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (){
if(cljs.core.truth_((function (){var and__24077__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__24077__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__24077__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__24077__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
return and__24077__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
if(ttl_ms_QMARK_){
var snapshot_33494 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var ks_to_gc_33495 = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (snapshot_33494,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,k,p__33470){
var vec__33471 = p__33470;
var dv = cljs.core.nth.call(null,vec__33471,(0),null);
var udt = cljs.core.nth.call(null,vec__33471,(1),null);
var _ = cljs.core.nth.call(null,vec__33471,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__33471,(3),null);
var cv = vec__33471;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(snapshot_33494,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),snapshot_33494));
cljs.core.swap_BANG_.call(null,state_,((function (snapshot_33494,ks_to_gc_33495,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (snapshot_33494,ks_to_gc_33495,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(snapshot_33494,ks_to_gc_33495,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_33495));
});})(snapshot_33494,ks_to_gc_33495,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

var snapshot_33496 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var n_to_gc_33497 = (cljs.core.count.call(null,snapshot_33496) - cache_size__$1);
if((n_to_gc_33497 > (64))){
var ks_to_gc_33498 = taoensso.encore.top.call(null,n_to_gc_33497,((function (snapshot_33496,n_to_gc_33497,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (k){
var vec__33472 = snapshot_33496.call(null,k);
var _ = cljs.core.nth.call(null,vec__33472,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__33472,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__33472,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__33472,(3),null);
return (tick_lru + tick_lfu);
});})(snapshot_33496,n_to_gc_33497,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.keys.call(null,snapshot_33496));
cljs.core.swap_BANG_.call(null,state_,((function (ks_to_gc_33498,snapshot_33496,n_to_gc_33497,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (ks_to_gc_33498,snapshot_33496,n_to_gc_33497,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(ks_to_gc_33498,snapshot_33496,n_to_gc_33497,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_33498));
});})(ks_to_gc_33498,snapshot_33496,n_to_gc_33497,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

return cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false);
} else {
return null;
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
;
var cv_fn = ((!(ttl_ms_QMARK_))?((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
return taoensso.encore.swap_val_BANG_.call(null,state_,args,((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__24077__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__24077__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__24077__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),null,tick,(1)], null);
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
:((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
var instant = taoensso.encore.now_udt.call(null);
return taoensso.encore.swap_val_BANG_.call(null,state_,args,((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__24077__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__24077__auto__)){
var and__24077__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__24077__auto____$1){
var vec__33474 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__33474,(0),null);
var udt = cljs.core.nth.call(null,vec__33474,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__24077__auto____$1;
}
} else {
return and__24077__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),instant,tick,(1)], null);
}
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
return ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function() { 
var G__33499__delegate = function (p__33475){
var vec__33476 = p__33475;
var arg1 = cljs.core.nth.call(null,vec__33476,(0),null);
var argn = cljs.core.nthnext.call(null,vec__33476,(1));
var args = vec__33476;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","debug","mem/debug",-1608833359)))){
return state_;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,state_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else {
cljs.core.swap_BANG_.call(null,state_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn.call(null);

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var tick = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_));
var vec__33477 = cv_fn.call(null,args__$1,fresh_QMARK_,tick);
var dv = cljs.core.nth.call(null,vec__33477,(0),null);
cljs.core.swap_BANG_.call(null,state_,((function (fresh_QMARK_,args__$1,tick,vec__33477,dv,vec__33476,arg1,argn,args,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function (m){
var temp__4423__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__33478 = temp__4423__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__33478,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__33478,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__33478,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__33478,(3),null);
var cv = vec__33478;
return cljs.core.merge.call(null,m,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick,(tick_lfu + (1))], null)], true, false));
} else {
return cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1))], null));
}
});})(fresh_QMARK_,args__$1,tick,vec__33477,dv,vec__33476,arg1,argn,args,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
);

return cljs.core.deref.call(null,dv);

}
}
};
var G__33499 = function (var_args){
var p__33475 = null;
if (arguments.length > 0) {
var G__33500__i = 0, G__33500__a = new Array(arguments.length -  0);
while (G__33500__i < G__33500__a.length) {G__33500__a[G__33500__i] = arguments[G__33500__i + 0]; ++G__33500__i;}
  p__33475 = new cljs.core.IndexedSeq(G__33500__a,0);
} 
return G__33499__delegate.call(this,p__33475);};
G__33499.cljs$lang$maxFixedArity = 0;
G__33499.cljs$lang$applyTo = (function (arglist__33501){
var p__33475 = cljs.core.seq(arglist__33501);
return G__33499__delegate(p__33475);
});
G__33499.cljs$core$IFn$_invoke$arity$variadic = G__33499__delegate;
return G__33499;
})()
;
;})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Takes one or more rate specs of form [ncalls-limit window-ms ?spec-id] and
 *   returns a (fn [& [req-id])) that returns `nil` (=> all rate limits passed), or
 *   [<ms-wait> <worst-offending-spec-id>] / <ms-wait>.
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
if(cljs.core.empty_QMARK_.call(null,specs)){
return cljs.core.constantly.call(null,null);
} else {
var vspecs = cljs.core.vec.call(null,specs);
var vstates_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var max_win_ms = cljs.core.long$.call(null,cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.mapv.call(null,((function (vspecs,vstates_){
return (function (p__33537){
var vec__33538 = p__33537;
var _ = cljs.core.nth.call(null,vec__33538,(0),null);
var win_ms = cljs.core.nth.call(null,vec__33538,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__33538,(2),null);
var spec = vec__33538;
return win_ms;
});})(vspecs,vstates_))
,vspecs)));
var nspecs = cljs.core.count.call(null,vspecs);
var nid_specs = cljs.core.count.call(null,cljs.core.filterv.call(null,((function (vspecs,vstates_,max_win_ms,nspecs){
return (function (p__33539){
var vec__33540 = p__33539;
var _ = cljs.core.nth.call(null,vec__33540,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__33540,(1),null);
var id = cljs.core.nth.call(null,vec__33540,(2),null);
return id;
});})(vspecs,vstates_,max_win_ms,nspecs))
,vspecs));
var _ = ((((nid_specs === (0))) || (cljs.core._EQ_.call(null,nid_specs,nspecs)))?null:(function(){throw (new Error("Assert failed: (or (zero? nid-specs) (= nid-specs nspecs))"))})());
var return_ids_QMARK_ = !((nid_specs === (0)));
return ((function (vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function() { 
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate = function (p__33541){
var vec__33557 = p__33541;
var _QMARK_a1 = cljs.core.nth.call(null,vec__33557,(0),null);
var _QMARK_a2 = cljs.core.nth.call(null,vec__33557,(1),null);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,new cljs.core.Keyword("rl","debug","rl/debug",-1608167914)))){
return vstates_;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,new cljs.core.Keyword("rl","reset","rl/reset",-800926172)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a2,new cljs.core.Keyword("rl","all","rl/all",892118056)))){
cljs.core.reset_BANG_.call(null,vstates_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,vstates_,cljs.core.dissoc,_QMARK_a2);
}

return null;
} else {
var peek_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,new cljs.core.Keyword("rl","peek","rl/peek",-291391771));
var req_id = (cljs.core.truth_(peek_QMARK_)?_QMARK_a2:_QMARK_a1);
var instant = taoensso.encore.now_udt.call(null);
if(cljs.core.truth_((function (){var and__24077__auto__ = req_id;
if(cljs.core.truth_(and__24077__auto__)){
return taoensso.encore.gc_now_QMARK_.call(null);
} else {
return and__24077__auto__;
}
})())){
taoensso.encore.swap_in_BANG_.call(null,vstates_,cljs.core.PersistentVector.EMPTY,((function (peek_QMARK_,req_id,instant,vec__33557,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function taoensso$encore$rate_limiter_STAR__$_check_rate_limits_$_gc(m){
return cljs.core.reduce_kv.call(null,((function (peek_QMARK_,req_id,instant,vec__33557,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (m_STAR_,req_id__$1,vstate){
var max_udt_win_start = cljs.core.reduce.call(null,((function (peek_QMARK_,req_id,instant,vec__33557,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (acc,p__33560){
var vec__33561 = p__33560;
var ___$1 = cljs.core.nth.call(null,vec__33561,(0),null);
var udt = cljs.core.nth.call(null,vec__33561,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__33561,(2),null);
var x__24420__auto__ = acc;
var y__24421__auto__ = udt;
return ((x__24420__auto__ > y__24421__auto__) ? x__24420__auto__ : y__24421__auto__);
});})(peek_QMARK_,req_id,instant,vec__33557,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,(0),vstate);
var min_win_ms_elapsed = (instant - max_udt_win_start);
if((min_win_ms_elapsed > max_win_ms)){
return cljs.core.dissoc.call(null,m_STAR_,req_id__$1);
} else {
return m_STAR_;
}
});})(peek_QMARK_,req_id,instant,vec__33557,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,m,m);
});})(peek_QMARK_,req_id,instant,vec__33557,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
} else {
}

return taoensso.encore.swap_in_BANG_.call(null,vstates_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_id], null),((function (peek_QMARK_,req_id,instant,vec__33557,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (_QMARK_vstate){
if(cljs.core.not.call(null,_QMARK_vstate)){
if(cljs.core.truth_(peek_QMARK_)){
return taoensso.encore.swapped.call(null,_QMARK_vstate,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,nspecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),instant], null))),null);
}
} else {
var vec__33562 = (function (){var in_vspecs = vspecs;
var in_vstate = _QMARK_vstate;
var out_vstate = cljs.core.PersistentVector.EMPTY;
var _QMARK_worst_limit_offence = null;
while(true){
var vec__33563 = in_vspecs;
var vec__33564 = cljs.core.nth.call(null,vec__33563,(0),null);
var ncalls_limit = cljs.core.nth.call(null,vec__33564,(0),null);
var win_ms = cljs.core.nth.call(null,vec__33564,(1),null);
var _QMARK_spec_id = cljs.core.nth.call(null,vec__33564,(2),null);
var next_in_vspecs = cljs.core.nthnext.call(null,vec__33563,(1));
var vec__33565 = in_vstate;
var vec__33566 = cljs.core.nth.call(null,vec__33565,(0),null);
var ncalls = cljs.core.nth.call(null,vec__33566,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__33566,(1),null);
var next_in_vstate = cljs.core.nthnext.call(null,vec__33565,(1));
var win_ms_elapsed = (instant - udt_win_start);
var reset_due_QMARK_ = (win_ms_elapsed >= win_ms);
var rate_limited_QMARK_ = (!(reset_due_QMARK_)) && ((ncalls >= ncalls_limit));
var new_out_vstate = cljs.core.conj.call(null,out_vstate,((reset_due_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),instant], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls,udt_win_start], null)));
var new__QMARK_worst_limit_offence = ((!(rate_limited_QMARK_))?_QMARK_worst_limit_offence:(function (){var ms_wait = (win_ms - win_ms_elapsed);
if((function (){var or__24089__auto__ = (_QMARK_worst_limit_offence == null);
if(or__24089__auto__){
return or__24089__auto__;
} else {
var vec__33568 = _QMARK_worst_limit_offence;
var max_ms_wait = cljs.core.nth.call(null,vec__33568,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__33568,(1),null);
return (ms_wait > max_ms_wait);
}
})()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms_wait,_QMARK_spec_id], null);
} else {
return _QMARK_worst_limit_offence;
}
})());
if(cljs.core.not.call(null,next_in_vspecs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_out_vstate,new__QMARK_worst_limit_offence], null);
} else {
var G__33572 = next_in_vspecs;
var G__33573 = next_in_vstate;
var G__33574 = new_out_vstate;
var G__33575 = new__QMARK_worst_limit_offence;
in_vspecs = G__33572;
in_vstate = G__33573;
out_vstate = G__33574;
_QMARK_worst_limit_offence = G__33575;
continue;
}
break;
}
})();
var vstate_with_resets = cljs.core.nth.call(null,vec__33562,(0),null);
var _QMARK_worst_limit_offence = cljs.core.nth.call(null,vec__33562,(1),null);
var all_limits_pass_QMARK_ = (_QMARK_worst_limit_offence == null);
var new_vstate = (cljs.core.truth_(peek_QMARK_)?_QMARK_vstate:((!(all_limits_pass_QMARK_))?vstate_with_resets:cljs.core.mapv.call(null,((function (vec__33562,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__33557,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (p__33569){
var vec__33570 = p__33569;
var ncalls = cljs.core.nth.call(null,vec__33570,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__33570,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ncalls + (1)),udt_win_start], null);
});})(vec__33562,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__33557,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,vstate_with_resets)
));
var result = (function (){var temp__4425__auto__ = _QMARK_worst_limit_offence;
if(cljs.core.truth_(temp__4425__auto__)){
var wlo = temp__4425__auto__;
if(return_ids_QMARK_){
return wlo;
} else {
var vec__33571 = wlo;
var ms_wait = cljs.core.nth.call(null,vec__33571,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__33571,(1),null);
return ms_wait;
}
} else {
return null;
}
})();
return taoensso.encore.swapped.call(null,new_vstate,result);
}
});})(peek_QMARK_,req_id,instant,vec__33557,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);

}
}
};
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits = function (var_args){
var p__33541 = null;
if (arguments.length > 0) {
var G__33576__i = 0, G__33576__a = new Array(arguments.length -  0);
while (G__33576__i < G__33576__a.length) {G__33576__a[G__33576__i] = arguments[G__33576__i + 0]; ++G__33576__i;}
  p__33541 = new cljs.core.IndexedSeq(G__33576__a,0);
} 
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate.call(this,p__33541);};
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$maxFixedArity = 0;
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$applyTo = (function (arglist__33577){
var p__33541 = cljs.core.seq(arglist__33577);
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate(p__33541);
});
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate;
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits;
})()
;
;})(vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
}
});
taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,specs);
return ((function (rl){
return (function() { 
var G__33578__delegate = function (args){
var temp__4423__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var backoff = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__33578 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33579__i = 0, G__33579__a = new Array(arguments.length -  0);
while (G__33579__i < G__33579__a.length) {G__33579__a[G__33579__i] = arguments[G__33579__i + 0]; ++G__33579__i;}
  args = new cljs.core.IndexedSeq(G__33579__a,0);
} 
return G__33578__delegate.call(this,args);};
G__33578.cljs$lang$maxFixedArity = 0;
G__33578.cljs$lang$applyTo = (function (arglist__33580){
var args = cljs.core.seq(arglist__33580);
return G__33578__delegate(args);
});
G__33578.cljs$core$IFn$_invoke$arity$variadic = G__33578__delegate;
return G__33578;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4423__auto__ = (function (){var and__24077__auto__ = typeof window !== 'undefined';
if(and__24077__auto__){
return (window["performance"]);
} else {
return and__24077__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var perf = temp__4423__auto__;
var temp__4423__auto____$1 = (function (){var or__24089__auto__ = (perf["now"]);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
var or__24089__auto____$1 = (perf["mozNow"]);
if(cljs.core.truth_(or__24089__auto____$1)){
return or__24089__auto____$1;
} else {
var or__24089__auto____$2 = (perf["msNow"]);
if(cljs.core.truth_(or__24089__auto____$2)){
return or__24089__auto____$2;
} else {
var or__24089__auto____$3 = (perf["oNow"]);
if(cljs.core.truth_(or__24089__auto____$3)){
return or__24089__auto____$3;
} else {
return (perf["webkitNow"]);
}
}
}
}
})();
if(cljs.core.truth_(temp__4423__auto____$1)){
var f = temp__4423__auto____$1;
return ((function (f,temp__4423__auto____$1,perf,temp__4423__auto__){
return (function (){
return cljs.core.long$.call(null,(1000000.0 * f.call(perf)));
});
;})(f,temp__4423__auto____$1,perf,temp__4423__auto__))
} else {
return ((function (temp__4423__auto____$1,perf,temp__4423__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4423__auto____$1,perf,temp__4423__auto__))
}
} else {
return ((function (temp__4423__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4423__auto__))
}
})();
taoensso.encore.console_log = (function (){var temp__4423__auto__ = (function (){var and__24077__auto__ = typeof console !== 'undefined';
if(and__24077__auto__){
return console.log;
} else {
return and__24077__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return ((function (f,temp__4423__auto__){
return (function (xs){
return f.apply(console,cljs.core.into_array.call(null,xs));
});
;})(f,temp__4423__auto__))
} else {
return ((function (temp__4423__auto__){
return (function (xs){
return null;
});
;})(temp__4423__auto__))
}
})();

taoensso.encore.log = (function taoensso$encore$log(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33588 = arguments.length;
var i__25160__auto___33589 = (0);
while(true){
if((i__25160__auto___33589 < len__25159__auto___33588)){
args__25166__auto__.push((arguments[i__25160__auto___33589]));

var G__33590 = (i__25160__auto___33589 + (1));
i__25160__auto___33589 = G__33590;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((0) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((0)),(0),null)):null);
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(argseq__25167__auto__);
});

taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,xs);
});

taoensso.encore.log.cljs$lang$maxFixedArity = (0);

taoensso.encore.log.cljs$lang$applyTo = (function (seq33581){
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33581));
});

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33591 = arguments.length;
var i__25160__auto___33592 = (0);
while(true){
if((i__25160__auto___33592 < len__25159__auto___33591)){
args__25166__auto__.push((arguments[i__25160__auto___33592]));

var G__33593 = (i__25160__auto___33592 + (1));
i__25160__auto___33592 = G__33593;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((0) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__25167__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.spaced_str_with_nils.call(null,xs)], null));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq33582){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33582));
});

taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33594 = arguments.length;
var i__25160__auto___33595 = (0);
while(true){
if((i__25160__auto___33595 < len__25159__auto___33594)){
args__25166__auto__.push((arguments[i__25160__auto___33595]));

var G__33596 = (i__25160__auto___33595 + (1));
i__25160__auto___33595 = G__33596;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.format_STAR_.call(null,fmt,xs)], null));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq33583){
var G__33584 = cljs.core.first.call(null,seq33583);
var seq33583__$1 = cljs.core.next.call(null,seq33583);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__33584,seq33583__$1);
});

taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33597 = arguments.length;
var i__25160__auto___33598 = (0);
while(true){
if((i__25160__auto___33598 < len__25159__auto___33597)){
args__25166__auto__.push((arguments[i__25160__auto___33598]));

var G__33599 = (i__25160__auto___33598 + (1));
i__25160__auto___33598 = G__33599;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((0) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__25167__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.spaced_str_with_nils.call(null,xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq33585){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33585));
});

taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33600 = arguments.length;
var i__25160__auto___33601 = (0);
while(true){
if((i__25160__auto___33601 < len__25159__auto___33600)){
args__25166__auto__.push((arguments[i__25160__auto___33601]));

var G__33602 = (i__25160__auto___33601 + (1));
i__25160__auto___33601 = G__33602;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq33586){
var G__33587 = cljs.core.first.call(null,seq33586);
var seq33586__$1 = cljs.core.next.call(null,seq33586);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__33587,seq33586__$1);
});
/**
 * Returns browser window's current location. These details can be forged!
 */
taoensso.encore.get_window_location = (function taoensso$encore$get_window_location(){
var loc_STAR_ = window.location;
var loc = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc_STAR_.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc_STAR_.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc_STAR_.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc_STAR_.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc_STAR_.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc_STAR_.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc_STAR_.hash], null);
return loc;
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
 * Returns an immediately available XhrIo instance, or nil. The instance must be
 *   released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
 * [uri method get-or-post-params] -> [uri post-content]
 */
taoensso.encore.coerce_xhr_params = (function taoensso$encore$coerce_xhr_params(uri,method,params){
if(cljs.core.truth_((function (){var __x = params;
if(cljs.core.truth_(((function (__x){
return (function (__x__$1){
var or__24089__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,__x__$1);
}
});})(__x))
.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? map?] params)",__x,null,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? [:or nil? map?] params)"));
}

var _QMARK_pstr = ((cljs.core.empty_QMARK_.call(null,params))?null:(function (){var s = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
})());
var G__33604 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__33604) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(_QMARK_pstr)].join(''):uri),null], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "put":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
/**
 * Alpha - subject to change.
 *   Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 *   Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey"
 *                :type     "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status  - 200, 404, ..., or nil on no response
 *      ;; ?error   - e/o #{:xhr-pool-depleted :exception :http-error :abort
 *      ;;                  :timeout :no-content <http-error-status> nil}
 *      (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__33608,callback){
var map__33626 = p__33608;
var map__33626__$1 = ((((!((map__33626 == null)))?((((map__33626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33626):map__33626);
var opts = map__33626__$1;
var method = cljs.core.get.call(null,map__33626__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__33626__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__33626__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__33626__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__33626__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__33626__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var progress_fn = cljs.core.get.call(null,map__33626__$1,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
var errorf = cljs.core.get.call(null,map__33626__$1,new cljs.core.Keyword(null,"errorf","errorf",-620376044),taoensso.encore.logf);
if(cljs.core.truth_((function (){var __x = timeout_ms;
if(cljs.core.truth_(((function (__x,map__33626,map__33626__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (__x__$1){
var or__24089__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nneg_int_QMARK_).call(null,__x__$1);
}
});})(__x,map__33626,map__33626__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? nneg-int?] timeout-ms)",__x,null,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? [:or nil? nneg-int?] timeout-ms)"));
}

var temp__4423__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var xhr = temp__4423__auto__;
try{var timeout_ms__$1 = (function (){var or__24089__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__33630 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__33630) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys.call(null,cljs.core.name,params);
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys.call(null,cljs.core.name,headers));
var vec__33629 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__33629,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__33629,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__33631_33644 = xhr;
goog.events.listenOnce(G__33631_33644,goog.net.EventType.READY,((function (G__33631_33644,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33629,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__33626,map__33626__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__33631_33644,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33629,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__33626,map__33626__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);

goog.events.listenOnce(G__33631_33644,goog.net.EventType.COMPLETE,((function (G__33631_33644,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33629,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__33626,map__33626__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var success_QMARK_ = xhr.isSuccess();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__33637 = ((function (status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__33631_33644,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33629,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__33626,map__33626__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (p1__33607_SHARP_,p2__33606_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__33606_SHARP_,p1__33607_SHARP_);
});})(status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__33631_33644,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33629,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__33626,map__33626__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
var expr__33638 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__33637.call(null,"/edn",expr__33638))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(pred__33637.call(null,"/json",expr__33638))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(pred__33637.call(null,"/xml",expr__33638))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(cljs.core.truth_(pred__33637.call(null,"/html",expr__33638))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());
try{var G__33641 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__33641) {
case "text":
return xhr.getResponseText();

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "edn":
return taoensso.encore.read_edn.call(null,xhr.getResponseText());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e33640){if((e33640 instanceof Error)){
var e = e33640;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e33640;

}
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(function (){var or__24089__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if(cljs.core.truth_(success_QMARK_)){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.call(null,cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
if(((_QMARK_content == null)) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(204),null,(1223),null], null), null).call(null,_QMARK_http_status)))){
return new cljs.core.Keyword(null,"no-content","no-content",-1860206018);
} else {
return null;
}
}
})()], null);
return callback.call(null,cb_arg);
});})(G__33631_33644,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33629,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__33626,map__33626__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);


var temp__4425__auto___33646 = progress_fn;
if(cljs.core.truth_(temp__4425__auto___33646)){
var pf_33647 = temp__4425__auto___33646;
goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf_33647,temp__4425__auto___33646,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33629,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__33626,map__33626__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__24077__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__24077__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__24077__auto__;
}
})())?(loaded / total):null);
return pf_33647.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf_33647,temp__4425__auto___33646,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__33629,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__33626,map__33626__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);
} else {
}

var G__33642_33648 = xhr;
var temp__4425__auto___33649 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4425__auto___33649)){
var x_33650 = temp__4425__auto___33649;
G__33642_33648.setTimeoutInterval((function (){var or__24089__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return (0);
}
})());
} else {
}

var temp__4425__auto___33651 = with_credentials_QMARK_;
if(cljs.core.truth_(temp__4425__auto___33651)){
var x_33652 = temp__4425__auto___33651;
G__33642_33648.setWithCredentials(true);
} else {
}

var temp__4425__auto___33653 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4425__auto___33653)){
var x_33654 = temp__4425__auto___33653;
G__33642_33648.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);
} else {
}


return xhr;
}catch (e33628){if((e33628 instanceof Error)){
var e = e33628;
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e33628;

}
}} else {
callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent([cljs.core.str(s)].join(''),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33659 = arguments.length;
var i__25160__auto___33660 = (0);
while(true){
if((i__25160__auto___33660 < len__25159__auto___33659)){
args__25166__auto__.push((arguments[i__25160__auto___33660]));

var G__33661 = (i__25160__auto___33660 + (1));
i__25160__auto___33660 = G__33661;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__33657){
var vec__33658 = p__33657;
var encoding = cljs.core.nth.call(null,vec__33658,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq33655){
var G__33656 = cljs.core.first.call(null,seq33655);
var seq33655__$1 = cljs.core.next.call(null,seq33655);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__33656,seq33655__$1);
});
taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode.call(null,taoensso.encore.qname.call(null,k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode.call(null,(function (){var or__24089__auto__ = taoensso.encore.as__QMARK_qname.call(null,v);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return [cljs.core.str(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.call(null,"&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_.call(null,m)){
return "";
} else {
return join.call(null,(function (){var iter__24869__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__33670(s__33671){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__33671__$1 = s__33671;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33671__$1);
if(temp__4425__auto__){
var s__33671__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33671__$2)){
var c__24867__auto__ = cljs.core.chunk_first.call(null,s__33671__$2);
var size__24868__auto__ = cljs.core.count.call(null,c__24867__auto__);
var b__33673 = cljs.core.chunk_buffer.call(null,size__24868__auto__);
if((function (){var i__33672 = (0);
while(true){
if((i__33672 < size__24868__auto__)){
var vec__33676 = cljs.core._nth.call(null,c__24867__auto__,i__33672);
var k = cljs.core.nth.call(null,vec__33676,(0),null);
var v = cljs.core.nth.call(null,vec__33676,(1),null);
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,v))){
cljs.core.chunk_append.call(null,b__33673,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__24089__auto__ = cljs.core.seq.call(null,v);
if(or__24089__auto__){
return or__24089__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__33678 = (i__33672 + (1));
i__33672 = G__33678;
continue;
} else {
var G__33679 = (i__33672 + (1));
i__33672 = G__33679;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33673),taoensso$encore$format_query_string_$_iter__33670.call(null,cljs.core.chunk_rest.call(null,s__33671__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33673),null);
}
} else {
var vec__33677 = cljs.core.first.call(null,s__33671__$2);
var k = cljs.core.nth.call(null,vec__33677,(0),null);
var v = cljs.core.nth.call(null,vec__33677,(1),null);
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,v))){
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__24089__auto__ = cljs.core.seq.call(null,v);
if(or__24089__auto__){
return or__24089__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__33670.call(null,cljs.core.rest.call(null,s__33671__$2)));
} else {
var G__33680 = cljs.core.rest.call(null,s__33671__$2);
s__33671__$1 = G__33680;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__24869__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var temp__4423__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4423__auto__)){
var cur = temp__4423__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33687 = arguments.length;
var i__25160__auto___33688 = (0);
while(true){
if((i__25160__auto___33688 < len__25159__auto___33687)){
args__25166__auto__.push((arguments[i__25160__auto___33688]));

var G__33689 = (i__25160__auto___33688 + (1));
i__25160__auto___33688 = G__33689;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__33683){
var vec__33684 = p__33683;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__33684,(0),null);
var encoding = cljs.core.nth.call(null,vec__33684,(1),null);
var _PERCENT_ = ((clojure.string.blank_QMARK_.call(null,s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?taoensso.encore.substr.call(null,s,(1)):s);
if(cljs.core.not.call(null,taoensso.encore.str_contains_QMARK_.call(null,s__$1,"="))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var m = cljs.core.reduce.call(null,((function (s__$1,vec__33684,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4423__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__33685 = temp__4423__auto__;
var k = cljs.core.nth.call(null,vec__33685,(0),null);
var v = cljs.core.nth.call(null,vec__33685,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__33684,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.not.call(null,keywordize_QMARK_)){
return m;
} else {
return taoensso.encore.keywordize_map.call(null,m);
}
}
})());
if(cljs.core.truth_((function (){var __x = _PERCENT_;
try{if(cljs.core.map_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e33686){if((e33686 instanceof Error)){
var __t = e33686;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(map? %)",__x,__t,null);
} else {
throw e33686;

}
}})())){
} else {
throw (new Error("Assert failed: (have? map? %)"));
}

return _PERCENT_;
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq33681){
var G__33682 = cljs.core.first.call(null,seq33681);
var seq33681__$1 = cljs.core.next.call(null,seq33681);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__33682,seq33681__$1);
});
taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__33691 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__33691,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__33691,(1),null);
var qmap = cljs.core.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.keywordize_map.call(null,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.keywordize_map.call(null,m));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank.call(null,taoensso.encore.format_query_string.call(null,qmap));
var temp__4423__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(temp__4423__auto__)){
var qstr = temp__4423__auto__;
return [cljs.core.str(url__$1),cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore.a0_memoize_ = taoensso.encore.memoize_a0_;
taoensso.encore.a1_memoize_ = taoensso.encore.memoize_a1_;
taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,xs));
});
taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.undefined__GT_nil,xs));
});
taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG__STAR_;
taoensso.encore.fq_name = taoensso.encore.qname;
taoensso.encore.memoize_1 = taoensso.encore.memoize1;
taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33696 = arguments.length;
var i__25160__auto___33697 = (0);
while(true){
if((i__25160__auto___33697 < len__25159__auto___33696)){
args__25166__auto__.push((arguments[i__25160__auto___33697]));

var G__33698 = (i__25160__auto___33697 + (1));
i__25160__auto___33697 = G__33698;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__33694){
var vec__33695 = p__33694;
var type = cljs.core.nth.call(null,vec__33695,(0),null);
var nplaces = cljs.core.nth.call(null,vec__33695,(1),null);
return taoensso.encore.round_STAR_.call(null,(function (){var or__24089__auto__ = type;
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq33692){
var G__33693 = cljs.core.first.call(null,seq33692);
var seq33692__$1 = cljs.core.next.call(null,seq33692);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__33693,seq33692__$1);
});
taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33703 = arguments.length;
var i__25160__auto___33704 = (0);
while(true){
if((i__25160__auto___33704 < len__25159__auto___33703)){
args__25166__auto__.push((arguments[i__25160__auto___33704]));

var G__33705 = (i__25160__auto___33704 + (1));
i__25160__auto___33704 = G__33705;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__33701){
var vec__33702 = p__33701;
var nattempt = cljs.core.nth.call(null,vec__33702,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__24089__auto__ = nattempt;
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return (0);
}
})()));
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq33699){
var G__33700 = cljs.core.first.call(null,seq33699);
var seq33699__$1 = cljs.core.next.call(null,seq33699);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33700,seq33699__$1);
});
taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});
taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});
taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;
taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;
taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;
taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;
taoensso.encore.merge_deep = taoensso.encore.nested_merge;
taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});
taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__33706__delegate = function (args){
var temp__4423__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var backoff_ms = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__33706 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33707__i = 0, G__33707__a = new Array(arguments.length -  0);
while (G__33707__i < G__33707__a.length) {G__33707__a[G__33707__i] = arguments[G__33707__i + 0]; ++G__33707__i;}
  args = new cljs.core.IndexedSeq(G__33707__a,0);
} 
return G__33706__delegate.call(this,args);};
G__33706.cljs$lang$maxFixedArity = 0;
G__33706.cljs$lang$applyTo = (function (arglist__33708){
var args = cljs.core.seq(arglist__33708);
return G__33706__delegate(args);
});
G__33706.cljs$core$IFn$_invoke$arity$variadic = G__33706__delegate;
return G__33706;
})()
;
;})(rl))
});
if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return ((function (__GT_n){
return (function (level){
return (__GT_n.call(null,level) >= __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33723 = arguments.length;
var i__25160__auto___33724 = (0);
while(true){
if((i__25160__auto___33724 < len__25159__auto___33723)){
args__25166__auto__.push((arguments[i__25160__auto___33724]));

var G__33725 = (i__25160__auto___33724 + (1));
i__25160__auto___33724 = G__33725;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq33709){
var G__33710 = cljs.core.first.call(null,seq33709);
var seq33709__$1 = cljs.core.next.call(null,seq33709);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__33710,seq33709__$1);
});

taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33726 = arguments.length;
var i__25160__auto___33727 = (0);
while(true){
if((i__25160__auto___33727 < len__25159__auto___33726)){
args__25166__auto__.push((arguments[i__25160__auto___33727]));

var G__33728 = (i__25160__auto___33727 + (1));
i__25160__auto___33727 = G__33728;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq33711){
var G__33712 = cljs.core.first.call(null,seq33711);
var seq33711__$1 = cljs.core.next.call(null,seq33711);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__33712,seq33711__$1);
});

taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33729 = arguments.length;
var i__25160__auto___33730 = (0);
while(true){
if((i__25160__auto___33730 < len__25159__auto___33729)){
args__25166__auto__.push((arguments[i__25160__auto___33730]));

var G__33731 = (i__25160__auto___33730 + (1));
i__25160__auto___33730 = G__33731;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq33713){
var G__33714 = cljs.core.first.call(null,seq33713);
var seq33713__$1 = cljs.core.next.call(null,seq33713);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__33714,seq33713__$1);
});

taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33732 = arguments.length;
var i__25160__auto___33733 = (0);
while(true){
if((i__25160__auto___33733 < len__25159__auto___33732)){
args__25166__auto__.push((arguments[i__25160__auto___33733]));

var G__33734 = (i__25160__auto___33733 + (1));
i__25160__auto___33733 = G__33734;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("WARN: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq33715){
var G__33716 = cljs.core.first.call(null,seq33715);
var seq33715__$1 = cljs.core.next.call(null,seq33715);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__33716,seq33715__$1);
});

taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33735 = arguments.length;
var i__25160__auto___33736 = (0);
while(true){
if((i__25160__auto___33736 < len__25159__auto___33735)){
args__25166__auto__.push((arguments[i__25160__auto___33736]));

var G__33737 = (i__25160__auto___33736 + (1));
i__25160__auto___33736 = G__33737;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("ERROR: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq33717){
var G__33718 = cljs.core.first.call(null,seq33717);
var seq33717__$1 = cljs.core.next.call(null,seq33717);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__33718,seq33717__$1);
});

taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33738 = arguments.length;
var i__25160__auto___33739 = (0);
while(true){
if((i__25160__auto___33739 < len__25159__auto___33738)){
args__25166__auto__.push((arguments[i__25160__auto___33739]));

var G__33740 = (i__25160__auto___33739 + (1));
i__25160__auto___33739 = G__33740;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("FATAL: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq33719){
var G__33720 = cljs.core.first.call(null,seq33719);
var seq33719__$1 = cljs.core.next.call(null,seq33719);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__33720,seq33719__$1);
});

taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33741 = arguments.length;
var i__25160__auto___33742 = (0);
while(true){
if((i__25160__auto___33742 < len__25159__auto___33741)){
args__25166__auto__.push((arguments[i__25160__auto___33742]));

var G__33743 = (i__25160__auto___33742 + (1));
i__25160__auto___33742 = G__33743;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq33721){
var G__33722 = cljs.core.first.call(null,seq33721);
var seq33721__$1 = cljs.core.next.call(null,seq33721);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__33722,seq33721__$1);
});
/**
 * Deprecated
 */
taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33750 = arguments.length;
var i__25160__auto___33751 = (0);
while(true){
if((i__25160__auto___33751 < len__25159__auto___33750)){
args__25166__auto__.push((arguments[i__25160__auto___33751]));

var G__33752 = (i__25160__auto___33751 + (1));
i__25160__auto___33751 = G__33752;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__33748){
var vec__33749 = p__33748;
var _QMARK_comparator = cljs.core.nth.call(null,vec__33749,(0),null);
var comparator = (function (){var or__24089__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__33749,_QMARK_comparator){
return (function (p1__33744_SHARP_,p2__33745_SHARP_){
if((comparator.call(null,p1__33744_SHARP_,p2__33745_SHARP_) > (0))){
return p2__33745_SHARP_;
} else {
return p1__33744_SHARP_;
}
});})(comparator,vec__33749,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq33746){
var G__33747 = cljs.core.first.call(null,seq33746);
var seq33746__$1 = cljs.core.next.call(null,seq33746);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__33747,seq33746__$1);
});
/**
 * Deprecated
 */
taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__25166__auto__ = [];
var len__25159__auto___33759 = arguments.length;
var i__25160__auto___33760 = (0);
while(true){
if((i__25160__auto___33760 < len__25159__auto___33759)){
args__25166__auto__.push((arguments[i__25160__auto___33760]));

var G__33761 = (i__25160__auto___33760 + (1));
i__25160__auto___33760 = G__33761;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((1) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25167__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__33757){
var vec__33758 = p__33757;
var _QMARK_comparator = cljs.core.nth.call(null,vec__33758,(0),null);
var comparator = (function (){var or__24089__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__33758,_QMARK_comparator){
return (function (p1__33753_SHARP_,p2__33754_SHARP_){
if((comparator.call(null,p1__33753_SHARP_,p2__33754_SHARP_) < (0))){
return p2__33754_SHARP_;
} else {
return p1__33753_SHARP_;
}
});})(comparator,vec__33758,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq33755){
var G__33756 = cljs.core.first.call(null,seq33755);
var seq33755__$1 = cljs.core.next.call(null,seq33755);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__33756,seq33755__$1);
});
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__24089__auto__ = x;
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

//# sourceMappingURL=encore.js.map