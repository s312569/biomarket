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
var vec__34856 = taoensso.encore.encore_version;
var xc = cljs.core.nth.call(null,vec__34856,(0),null);
var yc = cljs.core.nth.call(null,vec__34856,(1),null);
var zc = cljs.core.nth.call(null,vec__34856,(2),null);
var vec__34857 = ((cljs.core.vector_QMARK_.call(null,min_version))?min_version:cljs.core.re_seq.call(null,/\d+/,[cljs.core.str(min_version)].join('')));
var xm = cljs.core.nth.call(null,vec__34857,(0),null);
var ym = cljs.core.nth.call(null,vec__34857,(1),null);
var zm = cljs.core.nth.call(null,vec__34857,(2),null);
var vec__34858 = cljs.core.mapv.call(null,((function (vec__34856,xc,yc,zc,vec__34857,xm,ym,zm){
return (function (p1__34852_SHARP_){
var or__25914__auto__ = taoensso.encore.as__QMARK_int.call(null,p1__34852_SHARP_);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return (0);
}
});})(vec__34856,xc,yc,zc,vec__34857,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.call(null,vec__34858,(0),null);
var ym__$1 = cljs.core.nth.call(null,vec__34858,(1),null);
var zm__$1 = cljs.core.nth.call(null,vec__34858,(2),null);
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
var vec__34861 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.call(null,vec__34861,(0),null);
var macro_args__$1 = cljs.core.nth.call(null,vec__34861,(1),null);
var vec__34862 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.call(null,vec__34862,(0),null);
var macro_args__$2 = cljs.core.nth.call(null,vec__34862,(1),null);
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
var args34863 = [];
var len__26984__auto___34866 = arguments.length;
var i__26985__auto___34867 = (0);
while(true){
if((i__26985__auto___34867 < len__26984__auto___34866)){
args34863.push((arguments[i__26985__auto___34867]));

var G__34868 = (i__26985__auto___34867 + (1));
i__26985__auto___34867 = G__34868;
continue;
} else {
}
break;
}

var G__34865 = args34863.length;
switch (G__34865) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34863.length)].join('')));

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
var args34870 = [];
var len__26984__auto___34875 = arguments.length;
var i__26985__auto___34876 = (0);
while(true){
if((i__26985__auto___34876 < len__26984__auto___34875)){
args34870.push((arguments[i__26985__auto___34876]));

var G__34877 = (i__26985__auto___34876 + (1));
i__26985__auto___34876 = G__34877;
continue;
} else {
}
break;
}

var G__34872 = args34870.length;
switch (G__34872) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34870.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.call(null,null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_34873 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_34874 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.call(null,x);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_34874;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_34873;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;
taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});
/**
 * Returns data map iff `x` is an error of any type on platform
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var temp__4425__auto__ = (function (){var or__25914__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
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
var or__25914__auto__ = taoensso.encore.as__QMARK_nblank.call(null,x);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"nblank","nblank",626815585),x);
}
});
taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__25914__auto__ = taoensso.encore.as__QMARK_kw.call(null,x);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"kw","kw",1158308175),x);
}
});
taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__25914__auto__ = taoensso.encore.as__QMARK_name.call(null,x);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"name","name",1843675177),x);
}
});
taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__25914__auto__ = taoensso.encore.as__QMARK_qname.call(null,x);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
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
var or__25914__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"int","int",-1741416922),x);
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__25914__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"float","float",-1732389368),x);
}
});
taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__25914__auto__ = taoensso.encore.as__QMARK_email.call(null,x);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x);
}
});
taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__25914__auto__ = taoensso.encore.as__QMARK_nemail.call(null,x);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
});
taoensso.encore.nnil_EQ_ = (function taoensso$encore$nnil_EQ_(var_args){
var args34883 = [];
var len__26984__auto___34889 = arguments.length;
var i__26985__auto___34890 = (0);
while(true){
if((i__26985__auto___34890 < len__26984__auto___34889)){
args34883.push((arguments[i__26985__auto___34890]));

var G__34891 = (i__26985__auto___34890 + (1));
i__26985__auto___34890 = G__34891;
continue;
} else {
}
break;
}

var G__34888 = args34883.length;
switch (G__34888) {
case 2:
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27003__auto__ = (new cljs.core.IndexedSeq(args34883.slice((2)),(0),null));
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27003__auto__);

}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var and__25902__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__25902__auto__)){
return cljs.core._EQ_.call(null,x,y);
} else {
return and__25902__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__25902__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__25902__auto__)){
return cljs.core.apply.call(null,cljs.core._EQ_,x,y,more);
} else {
return and__25902__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$lang$applyTo = (function (seq34884){
var G__34885 = cljs.core.first.call(null,seq34884);
var seq34884__$1 = cljs.core.next.call(null,seq34884);
var G__34886 = cljs.core.first.call(null,seq34884__$1);
var seq34884__$2 = cljs.core.next.call(null,seq34884__$1);
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__34885,G__34886,seq34884__$2);
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
var args__26991__auto__ = [];
var len__26984__auto___34897 = arguments.length;
var i__26985__auto___34898 = (0);
while(true){
if((i__26985__auto___34898 < len__26984__auto___34897)){
args__26991__auto__.push((arguments[i__26985__auto___34898]));

var G__34899 = (i__26985__auto___34898 + (1));
i__26985__auto___34898 = G__34899;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__34895){
var vec__34896 = p__34895;
var no_slash_QMARK_ = cljs.core.nth.call(null,vec__34896,(0),null);
var parts = cljs.core.reduce.call(null,((function (vec__34896,no_slash_QMARK_){
return (function (acc,in$){
if(cljs.core.truth_(in$)){
return cljs.core.into.call(null,acc,taoensso.encore.explode_keyword.call(null,in$));
} else {
return acc;
}
});})(vec__34896,no_slash_QMARK_))
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

taoensso.encore.merge_keywords.cljs$lang$applyTo = (function (seq34893){
var G__34894 = cljs.core.first.call(null,seq34893);
var seq34893__$1 = cljs.core.next.call(null,seq34893);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic(G__34894,seq34893__$1);
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
var args34900 = [];
var len__26984__auto___34904 = arguments.length;
var i__26985__auto___34905 = (0);
while(true){
if((i__26985__auto___34905 < len__26984__auto___34904)){
args34900.push((arguments[i__26985__auto___34905]));

var G__34906 = (i__26985__auto___34905 + (1));
i__26985__auto___34905 = G__34906;
continue;
} else {
}
break;
}

var G__34902 = args34900.length;
switch (G__34902) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34900.length)].join('')));

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
var rounded = (function (){var G__34903 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34903) {
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
var args__26991__auto__ = [];
var len__26984__auto___34915 = arguments.length;
var i__26985__auto___34916 = (0);
while(true){
if((i__26985__auto___34916 < len__26984__auto___34915)){
args__26991__auto__.push((arguments[i__26985__auto___34916]));

var G__34917 = (i__26985__auto___34916 + (1));
i__26985__auto___34916 = G__34917;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic = (function (nattempt,p__34911){
var vec__34912 = p__34911;
var map__34913 = cljs.core.nth.call(null,vec__34912,(0),null);
var map__34913__$1 = ((((!((map__34913 == null)))?((((map__34913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34913):map__34913);
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__34913__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__34913__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__34913__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var binary_exp = Math.pow((2),(nattempt - (1)));
var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);
return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__26245__auto__ = cljs.core.long$.call(null,min_SINGLEQUOTE_);
var y__26246__auto__ = cljs.core.long$.call(null,time);
return ((x__26245__auto__ > y__26246__auto__) ? x__26245__auto__ : y__26246__auto__);
})():time);
var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__26252__auto__ = cljs.core.long$.call(null,max_SINGLEQUOTE_);
var y__26253__auto__ = cljs.core.long$.call(null,time__$1);
return ((x__26252__auto__ < y__26253__auto__) ? x__26252__auto__ : y__26253__auto__);
})():time__$1);
return time__$2;
})());
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = (1);

taoensso.encore.exp_backoff.cljs$lang$applyTo = (function (seq34909){
var G__34910 = cljs.core.first.call(null,seq34909);
var seq34909__$1 = cljs.core.next.call(null,seq34909);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic(G__34910,seq34909__$1);
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
var args__26991__auto__ = [];
var len__26984__auto___34935 = arguments.length;
var i__26985__auto___34936 = (0);
while(true){
if((i__26985__auto___34936 < len__26984__auto___34935)){
args__26991__auto__.push((arguments[i__26985__auto___34936]));

var G__34937 = (i__26985__auto___34936 + (1));
i__26985__auto___34936 = G__34937;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((0) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__26992__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__34931){
var map__34932 = p__34931;
var map__34932__$1 = ((((!((map__34932 == null)))?((((map__34932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34932):map__34932);
var opts = map__34932__$1;
var years = cljs.core.get.call(null,map__34932__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__34932__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__34932__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__34932__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__34932__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__34932__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__34932__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__34932__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__34932__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core.truth_(cljs.core.mapv.call(null,((function (map__34932,map__34932__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
var __x = __in;
try{if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null).call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e34934){if((e34934 instanceof Error)){
var __t = e34934;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__x,__t,null);
} else {
throw e34934;

}
}});})(map__34932,map__34932__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts)))){
} else {
throw (new Error("Assert failed: (have #{:msecs :secs :months :days :mins :hours :years :ms :weeks} :in (keys opts))"));
}

return taoensso.encore.round_STAR_.call(null,(((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq34930){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34930));
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
var args34942 = [];
var len__26984__auto___34949 = arguments.length;
var i__26985__auto___34950 = (0);
while(true){
if((i__26985__auto___34950 < len__26984__auto___34949)){
args34942.push((arguments[i__26985__auto___34950]));

var G__34951 = (i__26985__auto___34950 + (1));
i__26985__auto___34950 = G__34951;
continue;
} else {
}
break;
}

var G__34948 = args34942.length;
switch (G__34948) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__27003__auto__ = (new cljs.core.IndexedSeq(args34942.slice((3)),(0),null));
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27003__auto__);

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

taoensso.encore.oget.cljs$lang$applyTo = (function (seq34943){
var G__34944 = cljs.core.first.call(null,seq34943);
var seq34943__$1 = cljs.core.next.call(null,seq34943);
var G__34945 = cljs.core.first.call(null,seq34943__$1);
var seq34943__$2 = cljs.core.next.call(null,seq34943__$1);
var G__34946 = cljs.core.first.call(null,seq34943__$2);
var seq34943__$3 = cljs.core.next.call(null,seq34943__$2);
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic(G__34944,G__34945,G__34946,seq34943__$3);
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
var vec__34954 = coll;
var c1 = cljs.core.nth.call(null,vec__34954,(0),null);
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
var vec__34956 = v;
var v1 = cljs.core.nth.call(null,vec__34956,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
} else {
return null;
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var args34957 = [];
var len__26984__auto___34963 = arguments.length;
var i__26985__auto___34964 = (0);
while(true){
if((i__26985__auto___34964 < len__26984__auto___34963)){
args34957.push((arguments[i__26985__auto___34964]));

var G__34965 = (i__26985__auto___34964 + (1));
i__26985__auto___34964 = G__34965;
continue;
} else {
}
break;
}

var G__34962 = args34957.length;
switch (G__34962) {
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
var argseq__27003__auto__ = (new cljs.core.IndexedSeq(args34957.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27003__auto__);

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

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq34958){
var G__34959 = cljs.core.first.call(null,seq34958);
var seq34958__$1 = cljs.core.next.call(null,seq34958);
var G__34960 = cljs.core.first.call(null,seq34958__$1);
var seq34958__$2 = cljs.core.next.call(null,seq34958__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__34959,G__34960,seq34958__$2);
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
cljs.core.reduce_kv.call(null,(function (p1__34969_SHARP_,p2__34967_SHARP_,p3__34968_SHARP_){
return proc.call(null,p2__34967_SHARP_,p3__34968_SHARP_);
}),null,m);

return null;
});
taoensso.encore.run_BANG__STAR_ = (function taoensso$encore$run_BANG__STAR_(proc,coll){
cljs.core.reduce.call(null,(function (p1__34971_SHARP_,p2__34970_SHARP_){
return proc.call(null,p2__34970_SHARP_);
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
return taoensso.encore.revery_QMARK_.call(null,(function (p1__34972_SHARP_){
return taoensso.encore.nnil_QMARK_.call(null,cljs.core.get.call(null,m,p1__34972_SHARP_));
}),ks);
});
/**
 * Like `update-in` but faster, more flexible, and simpler (less ambiguous)
 */
taoensso.encore.update_in_STAR_ = (function taoensso$encore$update_in_STAR_(m,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
return f.call(null,m);
} else {
var vec__34974 = ks;
var k = cljs.core.nth.call(null,vec__34974,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__34974,(1));
if(cljs.core.truth_(ks__$1)){
return cljs.core.assoc.call(null,m,k,taoensso$encore$update_in_STAR_.call(null,cljs.core.get.call(null,m,k),ks__$1,f));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
}
}
});
taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__26252__auto__ = signed_idx;
var y__26253__auto__ = max_idx;
return ((x__26252__auto__ < y__26253__auto__) ? x__26252__auto__ : y__26253__auto__);
} else {
var x__26245__auto__ = (0);
var y__26246__auto__ = (signed_idx + max_idx);
return ((x__26245__auto__ > y__26246__auto__) ? x__26245__auto__ : y__26246__auto__);
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
var args__26991__auto__ = [];
var len__26984__auto___34981 = arguments.length;
var i__26985__auto___34982 = (0);
while(true){
if((i__26985__auto___34982 < len__26984__auto___34981)){
args__26991__auto__.push((arguments[i__26985__auto___34982]));

var G__34983 = (i__26985__auto___34982 + (1));
i__26985__auto___34982 = G__34983;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((2) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26992__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__34978){
var map__34979 = p__34978;
var map__34979__$1 = ((((!((map__34979 == null)))?((((map__34979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34979):map__34979);
var max_len = cljs.core.get.call(null,map__34979__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__34979__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
if(cljs.core.truth_((function (){var __x = max_len;
if(cljs.core.truth_(((function (__x,map__34979,map__34979__$1,max_len,end_idx){
return (function (__x__$1){
var or__25914__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nneg_int_QMARK_).call(null,__x__$1);
}
});})(__x,map__34979,map__34979__$1,max_len,end_idx))
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

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq34975){
var G__34976 = cljs.core.first.call(null,seq34975);
var seq34975__$1 = cljs.core.next.call(null,seq34975);
var G__34977 = cljs.core.first.call(null,seq34975__$1);
var seq34975__$2 = cljs.core.next.call(null,seq34975__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__34976,G__34977,seq34975__$2);
});
/**
 * Like `subvec` but uses `sub-indexes`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__26991__auto__ = [];
var len__26984__auto___34991 = arguments.length;
var i__26985__auto___34992 = (0);
while(true){
if((i__26985__auto___34992 < len__26984__auto___34991)){
args__26991__auto__.push((arguments[i__26985__auto___34992]));

var G__34993 = (i__26985__auto___34992 + (1));
i__26985__auto___34992 = G__34993;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((2) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26992__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__34987){
var vec__34988 = p__34987;
var _QMARK_max_len = cljs.core.nth.call(null,vec__34988,(0),null);
if(cljs.core.truth_((function (){var __x = v;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e34989){if((e34989 instanceof Error)){
var __t = e34989;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(vector? v)",__x,__t,null);
} else {
throw e34989;

}
}})())){
} else {
throw (new Error("Assert failed: (have? vector? v)"));
}

var vec__34990 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__34990,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__34990,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq34984){
var G__34985 = cljs.core.first.call(null,seq34984);
var seq34984__$1 = cljs.core.next.call(null,seq34984);
var G__34986 = cljs.core.first.call(null,seq34984__$1);
var seq34984__$2 = cljs.core.next.call(null,seq34984__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__34985,G__34986,seq34984__$2);
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var args34998 = [];
var len__26984__auto___35001 = arguments.length;
var i__26985__auto___35002 = (0);
while(true){
if((i__26985__auto___35002 < len__26984__auto___35001)){
args34998.push((arguments[i__26985__auto___35002]));

var G__35003 = (i__26985__auto___35002 + (1));
i__26985__auto___35002 = G__35003;
continue;
} else {
}
break;
}

var G__35000 = args34998.length;
switch (G__35000) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34998.length)].join('')));

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
var args35007 = [];
var len__26984__auto___35010 = arguments.length;
var i__26985__auto___35011 = (0);
while(true){
if((i__26985__auto___35011 < len__26984__auto___35010)){
args35007.push((arguments[i__26985__auto___35011]));

var G__35012 = (i__26985__auto___35011 + (1));
i__26985__auto___35011 = G__35012;
continue;
} else {
}
break;
}

var G__35009 = args35007.length;
switch (G__35009) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35007.length)].join('')));

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
var args__26991__auto__ = [];
var len__26984__auto___35017 = arguments.length;
var i__26985__auto___35018 = (0);
while(true){
if((i__26985__auto___35018 < len__26984__auto___35017)){
args__26991__auto__.push((arguments[i__26985__auto___35018]));

var G__35019 = (i__26985__auto___35018 + (1));
i__26985__auto___35018 = G__35019;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((2) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((2)),(0),null)):null);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26992__auto__);
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_ks){
return taoensso.encore.update_in_STAR_.call(null,m,ks,(function (m__$1){
return cljs.core.apply.call(null,cljs.core.dissoc,m__$1,dissoc_ks);
}));
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (2);

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq35014){
var G__35015 = cljs.core.first.call(null,seq35014);
var seq35014__$1 = cljs.core.next.call(null,seq35014);
var G__35016 = cljs.core.first.call(null,seq35014__$1);
var seq35014__$2 = cljs.core.next.call(null,seq35014__$1);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__35015,G__35016,seq35014__$2);
});
/**
 * Assocs each kv iff its value is not nil
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args__26991__auto__ = [];
var len__26984__auto___35032 = arguments.length;
var i__26985__auto___35033 = (0);
while(true){
if((i__26985__auto___35033 < len__26984__auto___35032)){
args__26991__auto__.push((arguments[i__26985__auto___35033]));

var G__35034 = (i__26985__auto___35033 + (1));
i__26985__auto___35033 = G__35034;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,kvs);
}catch (e35022){if((e35022 instanceof Error)){
var __t = e35022;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e35022;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35023){if((e35023 instanceof Error)){
var __t = e35023;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",__x,__t,null);
} else {
throw e35023;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__25914__auto__ = m;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__26694__auto__ = (function taoensso$encore$iter__35024(s__35025){
return (new cljs.core.LazySeq(null,(function (){
var s__35025__$1 = s__35025;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35025__$1);
if(temp__4425__auto__){
var s__35025__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35025__$2)){
var c__26692__auto__ = cljs.core.chunk_first.call(null,s__35025__$2);
var size__26693__auto__ = cljs.core.count.call(null,c__26692__auto__);
var b__35027 = cljs.core.chunk_buffer.call(null,size__26693__auto__);
if((function (){var i__35026 = (0);
while(true){
if((i__35026 < size__26693__auto__)){
var vec__35030 = cljs.core._nth.call(null,c__26692__auto__,i__35026);
var k = cljs.core.nth.call(null,vec__35030,(0),null);
var v = cljs.core.nth.call(null,vec__35030,(1),null);
if(!((v == null))){
cljs.core.chunk_append.call(null,b__35027,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__35035 = (i__35026 + (1));
i__35026 = G__35035;
continue;
} else {
var G__35036 = (i__35026 + (1));
i__35026 = G__35036;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35027),taoensso$encore$iter__35024.call(null,cljs.core.chunk_rest.call(null,s__35025__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35027),null);
}
} else {
var vec__35031 = cljs.core.first.call(null,s__35025__$2);
var k = cljs.core.nth.call(null,vec__35031,(0),null);
var v = cljs.core.nth.call(null,vec__35031,(1),null);
if(!((v == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__35024.call(null,cljs.core.rest.call(null,s__35025__$2)));
} else {
var G__35037 = cljs.core.rest.call(null,s__35025__$2);
s__35025__$1 = G__35037;
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
return iter__26694__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq35020){
var G__35021 = cljs.core.first.call(null,seq35020);
var seq35020__$1 = cljs.core.next.call(null,seq35020);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__35021,seq35020__$1);
});
/**
 * Assocs each kv iff its val is truthy
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args__26991__auto__ = [];
var len__26984__auto___35050 = arguments.length;
var i__26985__auto___35051 = (0);
while(true){
if((i__26985__auto___35051 < len__26984__auto___35050)){
args__26991__auto__.push((arguments[i__26985__auto___35051]));

var G__35052 = (i__26985__auto___35051 + (1));
i__26985__auto___35051 = G__35052;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,kvs);
}catch (e35040){if((e35040 instanceof Error)){
var __t = e35040;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e35040;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35041){if((e35041 instanceof Error)){
var __t = e35041;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",__x,__t,null);
} else {
throw e35041;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__25914__auto__ = m;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__26694__auto__ = (function taoensso$encore$iter__35042(s__35043){
return (new cljs.core.LazySeq(null,(function (){
var s__35043__$1 = s__35043;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35043__$1);
if(temp__4425__auto__){
var s__35043__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35043__$2)){
var c__26692__auto__ = cljs.core.chunk_first.call(null,s__35043__$2);
var size__26693__auto__ = cljs.core.count.call(null,c__26692__auto__);
var b__35045 = cljs.core.chunk_buffer.call(null,size__26693__auto__);
if((function (){var i__35044 = (0);
while(true){
if((i__35044 < size__26693__auto__)){
var vec__35048 = cljs.core._nth.call(null,c__26692__auto__,i__35044);
var k = cljs.core.nth.call(null,vec__35048,(0),null);
var v = cljs.core.nth.call(null,vec__35048,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__35045,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__35053 = (i__35044 + (1));
i__35044 = G__35053;
continue;
} else {
var G__35054 = (i__35044 + (1));
i__35044 = G__35054;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35045),taoensso$encore$iter__35042.call(null,cljs.core.chunk_rest.call(null,s__35043__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35045),null);
}
} else {
var vec__35049 = cljs.core.first.call(null,s__35043__$2);
var k = cljs.core.nth.call(null,vec__35049,(0),null);
var v = cljs.core.nth.call(null,vec__35049,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__35042.call(null,cljs.core.rest.call(null,s__35043__$2)));
} else {
var G__35055 = cljs.core.rest.call(null,s__35043__$2);
s__35043__$1 = G__35055;
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
return iter__26694__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq35038){
var G__35039 = cljs.core.first.call(null,seq35038);
var seq35038__$1 = cljs.core.next.call(null,seq35038);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__35039,seq35038__$1);
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args35056 = [];
var len__26984__auto___35059 = arguments.length;
var i__26985__auto___35060 = (0);
while(true){
if((i__26985__auto___35060 < len__26984__auto___35059)){
args35056.push((arguments[i__26985__auto___35060]));

var G__35061 = (i__26985__auto___35060 + (1));
i__26985__auto___35060 = G__35061;
continue;
} else {
}
break;
}

var G__35058 = args35056.length;
switch (G__35058) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35056.length)].join('')));

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
var args__26991__auto__ = [];
var len__26984__auto___35064 = arguments.length;
var i__26985__auto___35065 = (0);
while(true){
if((i__26985__auto___35065 < len__26984__auto___35064)){
args__26991__auto__.push((arguments[i__26985__auto___35065]));

var G__35066 = (i__26985__auto___35065 + (1));
i__26985__auto___35065 = G__35066;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((0) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26992__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq35063){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35063));
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
var args__26991__auto__ = [];
var len__26984__auto___35069 = arguments.length;
var i__26985__auto___35070 = (0);
while(true){
if((i__26985__auto___35070 < len__26984__auto___35069)){
args__26991__auto__.push((arguments[i__26985__auto___35070]));

var G__35071 = (i__26985__auto___35070 + (1));
i__26985__auto___35070 = G__35071;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),taoensso.encore.seq_kvs.call(null,cljs.core.last.call(null,args))));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq35067){
var G__35068 = cljs.core.first.call(null,seq35067);
var seq35067__$1 = cljs.core.next.call(null,seq35067);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__35068,seq35067__$1);
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
if(cljs.core.truth_((function (){var and__25902__auto__ = predk.call(null,k);
if(cljs.core.truth_(and__25902__auto__)){
return predv.call(null,v);
} else {
return and__25902__auto__;
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
return cljs.core.transduce.call(null,cljs.core.partition_all.call(null,(2)),cljs.core.completing.call(null,(function (acc,p__35078){
var vec__35079 = p__35078;
var k = cljs.core.nth.call(null,vec__35079,(0),null);
var v = cljs.core.nth.call(null,vec__35079,(1),null);
return cljs.core.assoc_BANG_.call(null,acc,kf.call(null,k,v),vf.call(null,k,v));
}),cljs.core.persistent_BANG_),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),kvs);
});
/**
 * Cross between `hash-map` & `map-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__26991__auto__ = [];
var len__26984__auto___35084 = arguments.length;
var i__26985__auto___35085 = (0);
while(true){
if((i__26985__auto___35085 < len__26984__auto___35084)){
args__26991__auto__.push((arguments[i__26985__auto___35085]));

var G__35086 = (i__26985__auto___35085 + (1));
i__26985__auto___35085 = G__35086;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__35082){
var vec__35083 = p__35082;
var kf = cljs.core.nth.call(null,vec__35083,(0),null);
var vf = cljs.core.nth.call(null,vec__35083,(1),null);
if(cljs.core.empty_QMARK_.call(null,kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__35083,kf,vf){
return (function (_,v){
return v;
});})(vec__35083,kf,vf))
:vf
);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__35083,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__35083,kf,vf))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1,vec__35083,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1,vec__35083,kf,vf))
:kf
));
return taoensso.encore.as_map_STAR_.call(null,kf__$1,vf__$1,kvs);
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq35080){
var G__35081 = cljs.core.first.call(null,seq35080);
var seq35080__$1 = cljs.core.next.call(null,seq35080);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__35081,seq35080__$1);
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
var G__35087 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__35088 = cljs.core.next.call(null,ks__$1);
var G__35089 = cljs.core.next.call(null,vs__$1);
m = G__35087;
ks__$1 = G__35088;
vs__$1 = G__35089;
continue;
}
break;
}
});
/**
 * Like `into` but supports multiple "from"s
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args35090 = [];
var len__26984__auto___35096 = arguments.length;
var i__26985__auto___35097 = (0);
while(true){
if((i__26985__auto___35097 < len__26984__auto___35096)){
args35090.push((arguments[i__26985__auto___35097]));

var G__35098 = (i__26985__auto___35097 + (1));
i__26985__auto___35097 = G__35098;
continue;
} else {
}
break;
}

var G__35095 = args35090.length;
switch (G__35095) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27003__auto__ = (new cljs.core.IndexedSeq(args35090.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27003__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq35091){
var G__35092 = cljs.core.first.call(null,seq35091);
var seq35091__$1 = cljs.core.next.call(null,seq35091);
var G__35093 = cljs.core.first.call(null,seq35091__$1);
var seq35091__$2 = cljs.core.next.call(null,seq35091__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__35092,G__35093,seq35091__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);
/**
 * Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args35100 = [];
var len__26984__auto___35106 = arguments.length;
var i__26985__auto___35107 = (0);
while(true){
if((i__26985__auto___35107 < len__26984__auto___35106)){
args35100.push((arguments[i__26985__auto___35107]));

var G__35108 = (i__26985__auto___35107 + (1));
i__26985__auto___35107 = G__35108;
continue;
} else {
}
break;
}

var G__35105 = args35100.length;
switch (G__35105) {
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
var argseq__27003__auto__ = (new cljs.core.IndexedSeq(args35100.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27003__auto__);

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

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq35101){
var G__35102 = cljs.core.first.call(null,seq35101);
var seq35101__$1 = cljs.core.next.call(null,seq35101);
var G__35103 = cljs.core.first.call(null,seq35101__$1);
var seq35101__$2 = cljs.core.next.call(null,seq35101__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__35102,G__35103,seq35101__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__35116,seen__$1){
while(true){
var vec__35117 = p__35116;
var v = cljs.core.nth.call(null,vec__35117,(0),null);
var xs__$1 = vec__35117;
var temp__4425__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4425__auto__){
var s = temp__4425__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__35118 = cljs.core.rest.call(null,s);
var G__35119 = seen__$1;
p__35116 = G__35118;
seen__$1 = G__35119;
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
var args35124 = [];
var len__26984__auto___35127 = arguments.length;
var i__26985__auto___35128 = (0);
while(true){
if((i__26985__auto___35128 < len__26984__auto___35127)){
args35124.push((arguments[i__26985__auto___35128]));

var G__35129 = (i__26985__auto___35128 + (1));
i__26985__auto___35128 = G__35129;
continue;
} else {
}
break;
}

var G__35126 = args35124.length;
switch (G__35126) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35124.length)].join('')));

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
var G__35131 = null;
var G__35131__0 = (function (){
return rf.call(null);
});
var G__35131__1 = (function (acc){
return rf.call(null,acc);
});
var G__35131__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_.call(null,seen_,cljs.core.conj.call(null,cljs.core._deref.call(null,seen_),k));

return rf.call(null,acc,input);
}
});
G__35131 = function(acc,input){
switch(arguments.length){
case 0:
return G__35131__0.call(this);
case 1:
return G__35131__1.call(this,acc);
case 2:
return G__35131__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35131.cljs$core$IFn$_invoke$arity$0 = G__35131__0;
G__35131.cljs$core$IFn$_invoke$arity$1 = G__35131__1;
G__35131.cljs$core$IFn$_invoke$arity$2 = G__35131__2;
return G__35131;
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
var args35136 = [];
var len__26984__auto___35141 = arguments.length;
var i__26985__auto___35142 = (0);
while(true){
if((i__26985__auto___35142 < len__26984__auto___35141)){
args35136.push((arguments[i__26985__auto___35142]));

var G__35143 = (i__26985__auto___35142 + (1));
i__26985__auto___35142 = G__35143;
continue;
} else {
}
break;
}

var G__35138 = args35136.length;
switch (G__35138) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35136.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.call(null,cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.call(null,(function (p__35139,in$){
var vec__35140 = p__35139;
var v = cljs.core.nth.call(null,vec__35140,(0),null);
var seen = cljs.core.nth.call(null,vec__35140,(1),null);
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
var args__26991__auto__ = [];
var len__26984__auto___35147 = arguments.length;
var i__26985__auto___35148 = (0);
while(true){
if((i__26985__auto___35148 < len__26984__auto___35147)){
args__26991__auto__.push((arguments[i__26985__auto___35148]));

var G__35149 = (i__26985__auto___35148 + (1));
i__26985__auto___35148 = G__35149;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
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
return cljs.core.reduce.call(null,merge_entry,(function (){var or__25914__auto__ = m1;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
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

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq35145){
var G__35146 = cljs.core.first.call(null,seq35145);
var seq35145__$1 = cljs.core.next.call(null,seq35145);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__35146,seq35145__$1);
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
if((function (){var and__25902__auto__ = (n > (10));
if(and__25902__auto__){
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
return and__25902__auto__;
}
})()){
var v = cljs.core.transient$.call(null,coll);
var idx = (0);
while(true){
if((idx === n)){
return cljs.core.persistent_BANG_.call(null,v);
} else {
var G__35154 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__35155 = (idx + (1));
v = G__35154;
idx = G__35155;
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
var G__35156 = cljs.core.conj.call(null,v,f.call(null));
var G__35157 = (idx + (1));
v = G__35156;
idx = G__35157;
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
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26536__auto__,k__26537__auto__){
var self__ = this;
var this__26536__auto____$1 = this;
return cljs.core._lookup.call(null,this__26536__auto____$1,k__26537__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26538__auto__,k35159,else__26539__auto__){
var self__ = this;
var this__26538__auto____$1 = this;
var G__35161 = (((k35159 instanceof cljs.core.Keyword))?k35159.fqn:null);
switch (G__35161) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35159,else__26539__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26550__auto__,writer__26551__auto__,opts__26552__auto__){
var self__ = this;
var this__26550__auto____$1 = this;
var pr_pair__26553__auto__ = ((function (this__26550__auto____$1){
return (function (keyval__26554__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26551__auto__,cljs.core.pr_writer,""," ","",opts__26552__auto__,keyval__26554__auto__);
});})(this__26550__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26551__auto__,pr_pair__26553__auto__,"#taoensso.encore.Swapped{",", ","}",opts__26552__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IIterable$ = true;

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35158){
var self__ = this;
var G__35158__$1 = this;
return (new cljs.core.RecordIter((0),G__35158__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26534__auto__){
var self__ = this;
var this__26534__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26530__auto__){
var self__ = this;
var this__26530__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26540__auto__){
var self__ = this;
var this__26540__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26531__auto__){
var self__ = this;
var this__26531__auto____$1 = this;
var h__26349__auto__ = self__.__hash;
if(!((h__26349__auto__ == null))){
return h__26349__auto__;
} else {
var h__26349__auto____$1 = cljs.core.hash_imap.call(null,this__26531__auto____$1);
self__.__hash = h__26349__auto____$1;

return h__26349__auto____$1;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26532__auto__,other__26533__auto__){
var self__ = this;
var this__26532__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25902__auto__ = other__26533__auto__;
if(cljs.core.truth_(and__25902__auto__)){
var and__25902__auto____$1 = (this__26532__auto____$1.constructor === other__26533__auto__.constructor);
if(and__25902__auto____$1){
return cljs.core.equiv_map.call(null,this__26532__auto____$1,other__26533__auto__);
} else {
return and__25902__auto____$1;
}
} else {
return and__25902__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26545__auto__,k__26546__auto__){
var self__ = this;
var this__26545__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__26546__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26545__auto____$1),self__.__meta),k__26546__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26546__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26543__auto__,k__26544__auto__,G__35158){
var self__ = this;
var this__26543__auto____$1 = this;
var pred__35162 = cljs.core.keyword_identical_QMARK_;
var expr__35163 = k__26544__auto__;
if(cljs.core.truth_(pred__35162.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__35163))){
return (new taoensso.encore.Swapped(G__35158,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35162.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__35163))){
return (new taoensso.encore.Swapped(self__.new_val,G__35158,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26544__auto__,G__35158),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26548__auto__){
var self__ = this;
var this__26548__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26535__auto__,G__35158){
var self__ = this;
var this__26535__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__35158,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26541__auto__,entry__26542__auto__){
var self__ = this;
var this__26541__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26542__auto__)){
return cljs.core._assoc.call(null,this__26541__auto____$1,cljs.core._nth.call(null,entry__26542__auto__,(0)),cljs.core._nth.call(null,entry__26542__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26541__auto____$1,entry__26542__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Symbol(null,"return-val","return-val",1127759038,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__26570__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__26570__auto__,writer__26571__auto__){
return cljs.core._write.call(null,writer__26571__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__35160){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__35160),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__35160),null,cljs.core.dissoc.call(null,G__35160,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)),null));
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
var vec__35167 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__35167,(0),null);
var return_val = cljs.core.nth.call(null,vec__35167,(1),null);
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
var vec__35170 = ((cljs.core.not.call(null,_QMARK_vf_type))?_QMARK_op:cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op));
var vf_type = cljs.core.nth.call(null,vec__35170,(0),null);
var ks = cljs.core.nth.call(null,vec__35170,(1),null);
var valf = cljs.core.nth.call(null,vec__35170,(2),null);
var G__35171 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__35171) {
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
var args__26991__auto__ = [];
var len__26984__auto___35175 = arguments.length;
var i__26985__auto___35176 = (0);
while(true){
if((i__26985__auto___35176 < len__26984__auto___35175)){
args__26991__auto__.push((arguments[i__26985__auto___35176]));

var G__35177 = (i__26985__auto___35176 + (1));
i__26985__auto___35176 = G__35177;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore.replace_in_STAR_.call(null,null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq35173){
var G__35174 = cljs.core.first.call(null,seq35173);
var seq35173__$1 = cljs.core.next.call(null,seq35173);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__35174,seq35173__$1);
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
var args35178 = [];
var len__26984__auto___35189 = arguments.length;
var i__26985__auto___35190 = (0);
while(true){
if((i__26985__auto___35190 < len__26984__auto___35189)){
args35178.push((arguments[i__26985__auto___35190]));

var G__35191 = (i__26985__auto___35190 + (1));
i__26985__auto___35190 = G__35191;
continue;
} else {
}
break;
}

var G__35184 = args35178.length;
switch (G__35184) {
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__27003__auto__ = (new cljs.core.IndexedSeq(args35178.slice((3)),(0),null));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27003__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__35185 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__35185,(0),null);
var return_val = cljs.core.nth.call(null,vec__35185,(1),null);
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
var vec__35186 = taoensso.encore.swapped_STAR__in.call(null,old_val,ks,f);
var new_val = cljs.core.nth.call(null,vec__35186,(0),null);
var return_val = cljs.core.nth.call(null,vec__35186,(1),null);
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
}catch (e35187){if((e35187 instanceof Error)){
var __t = e35187;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e35187;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35188){if((e35188 instanceof Error)){
var __t = e35188;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",__x,__t,null);
} else {
throw e35188;

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

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq35179){
var G__35180 = cljs.core.first.call(null,seq35179);
var seq35179__$1 = cljs.core.next.call(null,seq35179);
var G__35181 = cljs.core.first.call(null,seq35179__$1);
var seq35179__$2 = cljs.core.next.call(null,seq35179__$1);
var G__35182 = cljs.core.first.call(null,seq35179__$2);
var seq35179__$3 = cljs.core.next.call(null,seq35179__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35180,G__35181,G__35182,seq35179__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Is to `reset!` as `swap-in!` is to `swap!`
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var args35193 = [];
var len__26984__auto___35202 = arguments.length;
var i__26985__auto___35203 = (0);
while(true){
if((i__26985__auto___35203 < len__26984__auto___35202)){
args35193.push((arguments[i__26985__auto___35203]));

var G__35204 = (i__26985__auto___35203 + (1));
i__26985__auto___35203 = G__35204;
continue;
} else {
}
break;
}

var G__35199 = args35193.length;
switch (G__35199) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__27003__auto__ = (new cljs.core.IndexedSeq(args35193.slice((3)),(0),null));
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27003__auto__);

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
}catch (e35200){if((e35200 instanceof Error)){
var __t = e35200;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e35200;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35201){if((e35201 instanceof Error)){
var __t = e35201;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",__x,__t,null);
} else {
throw e35201;

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

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq35194){
var G__35195 = cljs.core.first.call(null,seq35194);
var seq35194__$1 = cljs.core.next.call(null,seq35194);
var G__35196 = cljs.core.first.call(null,seq35194__$1);
var seq35194__$2 = cljs.core.next.call(null,seq35194__$1);
var G__35197 = cljs.core.first.call(null,seq35194__$2);
var seq35194__$3 = cljs.core.next.call(null,seq35194__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35195,G__35196,G__35197,seq35194__$3);
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
var args35210 = [];
var len__26984__auto___35213 = arguments.length;
var i__26985__auto___35214 = (0);
while(true){
if((i__26985__auto___35214 < len__26984__auto___35213)){
args35210.push((arguments[i__26985__auto___35214]));

var G__35215 = (i__26985__auto___35214 + (1));
i__26985__auto___35214 = G__35215;
continue;
} else {
}
break;
}

var G__35212 = args35210.length;
switch (G__35212) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35210.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.call(null,null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.call(null,separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__25902__auto__ = separator;
if(cljs.core.truth_(and__25902__auto__)){
return cljs.core.not_EQ_.call(null,separator,"");
} else {
return and__25902__auto__;
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
var fmt__$1 = (function (){var or__25914__auto__ = fmt;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
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
var args__26991__auto__ = [];
var len__26984__auto___35219 = arguments.length;
var i__26985__auto___35220 = (0);
while(true){
if((i__26985__auto___35220 < len__26984__auto___35219)){
args__26991__auto__.push((arguments[i__26985__auto___35220]));

var G__35221 = (i__26985__auto___35220 + (1));
i__26985__auto___35220 = G__35221;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq35217){
var G__35218 = cljs.core.first.call(null,seq35217);
var seq35217__$1 = cljs.core.next.call(null,seq35217);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__35218,seq35217__$1);
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
var G__35222__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__35222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35223__i = 0, G__35223__a = new Array(arguments.length -  0);
while (G__35223__i < G__35223__a.length) {G__35223__a[G__35223__i] = arguments[G__35223__i + 0]; ++G__35223__i;}
  args = new cljs.core.IndexedSeq(G__35223__a,0);
} 
return G__35222__delegate.call(this,args);};
G__35222.cljs$lang$maxFixedArity = 0;
G__35222.cljs$lang$applyTo = (function (arglist__35224){
var args = cljs.core.seq(arglist__35224);
return G__35222__delegate(args);
});
G__35222.cljs$core$IFn$_invoke$arity$variadic = G__35222__delegate;
return G__35222;
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
var args__26991__auto__ = [];
var len__26984__auto___35232 = arguments.length;
var i__26985__auto___35233 = (0);
while(true){
if((i__26985__auto___35233 < len__26984__auto___35232)){
args__26991__auto__.push((arguments[i__26985__auto___35233]));

var G__35234 = (i__26985__auto___35233 + (1));
i__26985__auto___35233 = G__35234;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((2) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26992__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__35228){
var vec__35229 = p__35228;
var _QMARK_max_len = cljs.core.nth.call(null,vec__35229,(0),null);
if(cljs.core.truth_((function (){var __x = s;
try{if(typeof __x === 'string'){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35230){if((e35230 instanceof Error)){
var __t = e35230;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(string? s)",__x,__t,null);
} else {
throw e35230;

}
}})())){
} else {
throw (new Error("Assert failed: (have? string? s)"));
}

var vec__35231 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__35231,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__35231,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq35225){
var G__35226 = cljs.core.first.call(null,seq35225);
var seq35225__$1 = cljs.core.next.call(null,seq35225);
var G__35227 = cljs.core.first.call(null,seq35225__$1);
var seq35225__$2 = cljs.core.next.call(null,seq35225__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__35226,G__35227,seq35225__$2);
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
var args__26991__auto__ = [];
var len__26984__auto___35240 = arguments.length;
var i__26985__auto___35241 = (0);
while(true){
if((i__26985__auto___35241 < len__26984__auto___35240)){
args__26991__auto__.push((arguments[i__26985__auto___35241]));

var G__35242 = (i__26985__auto___35241 + (1));
i__26985__auto___35241 = G__35242;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((2) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((2)),(0),null)):null);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26992__auto__);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic = (function (s,substr,p__35238){
var vec__35239 = p__35238;
var start_idx = cljs.core.nth.call(null,vec__35239,(0),null);
var last_QMARK_ = cljs.core.nth.call(null,vec__35239,(1),null);
var start_idx__$1 = ((function (){var or__25914__auto__ = start_idx;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
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

taoensso.encore.str__QMARK_index.cljs$lang$applyTo = (function (seq35235){
var G__35236 = cljs.core.first.call(null,seq35235);
var seq35235__$1 = cljs.core.next.call(null,seq35235);
var G__35237 = cljs.core.first.call(null,seq35235__$1);
var seq35235__$2 = cljs.core.next.call(null,seq35235__$1);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic(G__35236,G__35237,seq35235__$2);
});
/**
 * Like `clojure.string/join` but ensures no double separators
 */
taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__26991__auto__ = [];
var len__26984__auto___35245 = arguments.length;
var i__26985__auto___35246 = (0);
while(true){
if((i__26985__auto___35246 < len__26984__auto___35245)){
args__26991__auto__.push((arguments[i__26985__auto___35246]));

var G__35247 = (i__26985__auto___35246 + (1));
i__26985__auto___35246 = G__35247;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
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

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq35243){
var G__35244 = cljs.core.first.call(null,seq35243);
var seq35243__$1 = cljs.core.next.call(null,seq35243);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__35244,seq35243__$1);
});
/**
 * Joins string paths (URLs, file paths, etc.) ensuring correct "/"
 *   interposition
 */
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__26991__auto__ = [];
var len__26984__auto___35249 = arguments.length;
var i__26985__auto___35250 = (0);
while(true){
if((i__26985__auto___35250 < len__26984__auto___35249)){
args__26991__auto__.push((arguments[i__26985__auto___35250]));

var G__35251 = (i__26985__auto___35250 + (1));
i__26985__auto___35250 = G__35251;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((0) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__26992__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return cljs.core.apply.call(null,taoensso.encore.join_once,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq35248){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35248));
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
var args35252 = [];
var len__26984__auto___35255 = arguments.length;
var i__26985__auto___35256 = (0);
while(true){
if((i__26985__auto___35256 < len__26984__auto___35255)){
args35252.push((arguments[i__26985__auto___35256]));

var G__35257 = (i__26985__auto___35256 + (1));
i__26985__auto___35256 = G__35257;
continue;
} else {
}
break;
}

var G__35254 = args35252.length;
switch (G__35254) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35252.length)].join('')));

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
}catch (e35260){if((e35260 instanceof Error)){
var _ = e35260;
return false;
} else {
throw e35260;

}
}});
/**
 * Experimental. Cheaper `have!` alt that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var args35261 = [];
var len__26984__auto___35264 = arguments.length;
var i__26985__auto___35265 = (0);
while(true){
if((i__26985__auto___35265 < len__26984__auto___35264)){
args35261.push((arguments[i__26985__auto___35265]));

var G__35266 = (i__26985__auto___35265 + (1));
i__26985__auto___35265 = G__35266;
continue;
} else {
}
break;
}

var G__35263 = args35261.length;
switch (G__35263) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35261.length)].join('')));

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
var G__35268__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__25914__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args,((function (or__25914__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__25914__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__25914__auto__,cache_))
,null));
}
});})(or__25914__auto__,cache_))
);
}
})());
};
var G__35268 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35269__i = 0, G__35269__a = new Array(arguments.length -  0);
while (G__35269__i < G__35269__a.length) {G__35269__a[G__35269__i] = arguments[G__35269__i + 0]; ++G__35269__i;}
  args = new cljs.core.IndexedSeq(G__35269__a,0);
} 
return G__35268__delegate.call(this,args);};
G__35268.cljs$lang$maxFixedArity = 0;
G__35268.cljs$lang$applyTo = (function (arglist__35270){
var args = cljs.core.seq(arglist__35270);
return G__35268__delegate(args);
});
G__35268.cljs$core$IFn$_invoke$arity$variadic = G__35268__delegate;
return G__35268;
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
return cljs.core.deref.call(null,(function (){var or__25914__auto__ = cljs.core.deref.call(null,cache_);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return cljs.core.swap_BANG_.call(null,cache_,((function (or__25914__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__25914__auto__,cache_){
return (function (){
return f.call(null);
});})(or__25914__auto__,cache_))
,null));
}
});})(or__25914__auto__,cache_))
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
var G__35271 = null;
var G__35271__0 = (function (){
return cljs.core.deref.call(null,(function (){var or__25914__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),taoensso.encore.sentinel);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,taoensso.encore.sentinel,((function (or__25914__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__25914__auto__,cache_){
return (function (){
return f.call(null);
});})(or__25914__auto__,cache_))
,null));
}
});})(or__25914__auto__,cache_))
);
}
})());
});
var G__35271__1 = (function (x){
return cljs.core.deref.call(null,(function (){var or__25914__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),x);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,x,((function (or__25914__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__25914__auto__,cache_){
return (function (){
return f.call(null,x);
});})(or__25914__auto__,cache_))
,null));
}
});})(or__25914__auto__,cache_))
);
}
})());
});
G__35271 = function(x){
switch(arguments.length){
case 0:
return G__35271__0.call(this);
case 1:
return G__35271__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35271.cljs$core$IFn$_invoke$arity$0 = G__35271__0;
G__35271.cljs$core$IFn$_invoke$arity$1 = G__35271__1;
return G__35271;
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
var G__35272__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__25914__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,cache_,((function (or__25914__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (or__25914__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__25914__auto__,cache_))
,null))], true, false);
}
});})(or__25914__auto__,cache_))
),args);
}
})());
};
var G__35272 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35273__i = 0, G__35273__a = new Array(arguments.length -  0);
while (G__35273__i < G__35273__a.length) {G__35273__a[G__35273__i] = arguments[G__35273__i + 0]; ++G__35273__i;}
  args = new cljs.core.IndexedSeq(G__35273__a,0);
} 
return G__35272__delegate.call(this,args);};
G__35272.cljs$lang$maxFixedArity = 0;
G__35272.cljs$lang$applyTo = (function (arglist__35274){
var args = cljs.core.seq(arglist__35274);
return G__35272__delegate(args);
});
G__35272.cljs$core$IFn$_invoke$arity$variadic = G__35272__delegate;
return G__35272;
})()
;
;})(cache_))
});
/**
 * Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
 *   and immediately applies memoized f to given arguments
 */
taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__26991__auto__ = [];
var len__26984__auto___35278 = arguments.length;
var i__26985__auto___35279 = (0);
while(true){
if((i__26985__auto___35279 < len__26984__auto___35278)){
args__26991__auto__.push((arguments[i__26985__auto___35279]));

var G__35280 = (i__26985__auto___35279 + (1));
i__26985__auto___35279 = G__35280;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((2) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26992__auto__);
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

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq35275){
var G__35276 = cljs.core.first.call(null,seq35275);
var seq35275__$1 = cljs.core.next.call(null,seq35275);
var G__35277 = cljs.core.first.call(null,seq35275__$1);
var seq35275__$2 = cljs.core.next.call(null,seq35275__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__35276,G__35277,seq35275__$2);
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
var args35281 = [];
var len__26984__auto___35304 = arguments.length;
var i__26985__auto___35305 = (0);
while(true){
if((i__26985__auto___35305 < len__26984__auto___35304)){
args35281.push((arguments[i__26985__auto___35305]));

var G__35306 = (i__26985__auto___35305 + (1));
i__26985__auto___35305 = G__35306;
continue;
} else {
}
break;
}

var G__35283 = args35281.length;
switch (G__35283) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35281.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__35308__delegate = function (p__35284){
var vec__35285 = p__35284;
var arg1 = cljs.core.nth.call(null,vec__35285,(0),null);
var argn = cljs.core.nthnext.call(null,vec__35285,(1));
var args = vec__35285;
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
return cljs.core.deref.call(null,(function (){var or__25914__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args__$1);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args__$1,((function (or__25914__auto__,fresh_QMARK_,args__$1,vec__35285,arg1,argn,args,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_((function (){var and__25902__auto__ = _QMARK_dv;
if(cljs.core.truth_(and__25902__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__25902__auto__;
}
})())){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__25914__auto__,fresh_QMARK_,args__$1,vec__35285,arg1,argn,args,cache_){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(or__25914__auto__,fresh_QMARK_,args__$1,vec__35285,arg1,argn,args,cache_))
,null));
}
});})(or__25914__auto__,fresh_QMARK_,args__$1,vec__35285,arg1,argn,args,cache_))
);
}
})());

}
}
};
var G__35308 = function (var_args){
var p__35284 = null;
if (arguments.length > 0) {
var G__35309__i = 0, G__35309__a = new Array(arguments.length -  0);
while (G__35309__i < G__35309__a.length) {G__35309__a[G__35309__i] = arguments[G__35309__i + 0]; ++G__35309__i;}
  p__35284 = new cljs.core.IndexedSeq(G__35309__a,0);
} 
return G__35308__delegate.call(this,p__35284);};
G__35308.cljs$lang$maxFixedArity = 0;
G__35308.cljs$lang$applyTo = (function (arglist__35310){
var p__35284 = cljs.core.seq(arglist__35310);
return G__35308__delegate(p__35284);
});
G__35308.cljs$core$IFn$_invoke$arity$variadic = G__35308__delegate;
return G__35308;
})()
;
;})(cache_))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var __x_35311 = ttl_ms;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x_35311))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35286){if((e35286 instanceof Error)){
var __t_35312 = e35286;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? ttl-ms)",__x_35311,__t_35312,null);
} else {
throw e35286;

}
}
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms__$1 = cljs.core.long$.call(null,ttl_ms);
var gc_fn = ((function (cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (){
if(cljs.core.truth_((function (){var and__25902__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__25902__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__25902__auto__,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__25902__auto__,cache_,gc_running_QMARK__,ttl_ms__$1))
);
} else {
return and__25902__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
var snapshot = cljs.core.deref.call(null,cache_);
var ks_to_gc = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,k,p__35287){
var vec__35288 = p__35287;
var dv = cljs.core.nth.call(null,vec__35288,(0),null);
var udt = cljs.core.nth.call(null,vec__35288,(1),null);
var cv = vec__35288;
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
var G__35313__delegate = function (p__35289){
var vec__35290 = p__35289;
var arg1 = cljs.core.nth.call(null,vec__35290,(0),null);
var argn = cljs.core.nthnext.call(null,vec__35290,(1));
var args = vec__35290;
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
var vec__35291 = taoensso.encore.swap_val_BANG_.call(null,cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__35290,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__25902__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__25902__auto__)){
var and__25902__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__25902__auto____$1){
var vec__35293 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__35293,(0),null);
var udt = cljs.core.nth.call(null,vec__35293,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__25902__auto____$1;
}
} else {
return and__25902__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__35290,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__35290,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__35290,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
);
var dv = cljs.core.nth.call(null,vec__35291,(0),null);
return cljs.core.deref.call(null,dv);

}
}
};
var G__35313 = function (var_args){
var p__35289 = null;
if (arguments.length > 0) {
var G__35314__i = 0, G__35314__a = new Array(arguments.length -  0);
while (G__35314__i < G__35314__a.length) {G__35314__a[G__35314__i] = arguments[G__35314__i + 0]; ++G__35314__i;}
  p__35289 = new cljs.core.IndexedSeq(G__35314__a,0);
} 
return G__35313__delegate.call(this,p__35289);};
G__35313.cljs$lang$maxFixedArity = 0;
G__35313.cljs$lang$applyTo = (function (arglist__35315){
var p__35289 = cljs.core.seq(arglist__35315);
return G__35313__delegate(p__35289);
});
G__35313.cljs$core$IFn$_invoke$arity$variadic = G__35313__delegate;
return G__35313;
})()
;
;})(cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
var __x_35316 = ttl_ms;
if(cljs.core.truth_(((function (__x_35316){
return (function (__x__$1){
var or__25914__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.pos_int_QMARK_).call(null,__x__$1);
}
});})(__x_35316))
.call(null,__x_35316))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? pos-int?] ttl-ms)",__x_35316,null,null);
}

var __x_35317 = cache_size;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x_35317))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35294){if((e35294 instanceof Error)){
var __t_35318 = e35294;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? cache-size)",__x_35317,__t_35318,null);
} else {
throw e35294;

}
}
var state_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms_QMARK_ = !((ttl_ms == null));
var ttl_ms__$1 = cljs.core.long$.call(null,(function (){var or__25914__auto__ = ttl_ms;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return (0);
}
})());
var cache_size__$1 = cljs.core.long$.call(null,cache_size);
var gc_fn = ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (){
if(cljs.core.truth_((function (){var and__25902__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__25902__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__25902__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__25902__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
return and__25902__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
if(ttl_ms_QMARK_){
var snapshot_35319 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var ks_to_gc_35320 = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (snapshot_35319,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,k,p__35295){
var vec__35296 = p__35295;
var dv = cljs.core.nth.call(null,vec__35296,(0),null);
var udt = cljs.core.nth.call(null,vec__35296,(1),null);
var _ = cljs.core.nth.call(null,vec__35296,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__35296,(3),null);
var cv = vec__35296;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(snapshot_35319,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),snapshot_35319));
cljs.core.swap_BANG_.call(null,state_,((function (snapshot_35319,ks_to_gc_35320,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (snapshot_35319,ks_to_gc_35320,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(snapshot_35319,ks_to_gc_35320,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_35320));
});})(snapshot_35319,ks_to_gc_35320,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

var snapshot_35321 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var n_to_gc_35322 = (cljs.core.count.call(null,snapshot_35321) - cache_size__$1);
if((n_to_gc_35322 > (64))){
var ks_to_gc_35323 = taoensso.encore.top.call(null,n_to_gc_35322,((function (snapshot_35321,n_to_gc_35322,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (k){
var vec__35297 = snapshot_35321.call(null,k);
var _ = cljs.core.nth.call(null,vec__35297,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35297,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__35297,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__35297,(3),null);
return (tick_lru + tick_lfu);
});})(snapshot_35321,n_to_gc_35322,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.keys.call(null,snapshot_35321));
cljs.core.swap_BANG_.call(null,state_,((function (ks_to_gc_35323,snapshot_35321,n_to_gc_35322,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (ks_to_gc_35323,snapshot_35321,n_to_gc_35322,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(ks_to_gc_35323,snapshot_35321,n_to_gc_35322,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_35323));
});})(ks_to_gc_35323,snapshot_35321,n_to_gc_35322,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
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
if(cljs.core.truth_((function (){var and__25902__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__25902__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__25902__auto__;
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
if(cljs.core.truth_((function (){var and__25902__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__25902__auto__)){
var and__25902__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__25902__auto____$1){
var vec__35299 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__35299,(0),null);
var udt = cljs.core.nth.call(null,vec__35299,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__25902__auto____$1;
}
} else {
return and__25902__auto__;
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
var G__35324__delegate = function (p__35300){
var vec__35301 = p__35300;
var arg1 = cljs.core.nth.call(null,vec__35301,(0),null);
var argn = cljs.core.nthnext.call(null,vec__35301,(1));
var args = vec__35301;
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
var vec__35302 = cv_fn.call(null,args__$1,fresh_QMARK_,tick);
var dv = cljs.core.nth.call(null,vec__35302,(0),null);
cljs.core.swap_BANG_.call(null,state_,((function (fresh_QMARK_,args__$1,tick,vec__35302,dv,vec__35301,arg1,argn,args,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function (m){
var temp__4423__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__35303 = temp__4423__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__35303,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__35303,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__35303,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__35303,(3),null);
var cv = vec__35303;
return cljs.core.merge.call(null,m,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick,(tick_lfu + (1))], null)], true, false));
} else {
return cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1))], null));
}
});})(fresh_QMARK_,args__$1,tick,vec__35302,dv,vec__35301,arg1,argn,args,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
);

return cljs.core.deref.call(null,dv);

}
}
};
var G__35324 = function (var_args){
var p__35300 = null;
if (arguments.length > 0) {
var G__35325__i = 0, G__35325__a = new Array(arguments.length -  0);
while (G__35325__i < G__35325__a.length) {G__35325__a[G__35325__i] = arguments[G__35325__i + 0]; ++G__35325__i;}
  p__35300 = new cljs.core.IndexedSeq(G__35325__a,0);
} 
return G__35324__delegate.call(this,p__35300);};
G__35324.cljs$lang$maxFixedArity = 0;
G__35324.cljs$lang$applyTo = (function (arglist__35326){
var p__35300 = cljs.core.seq(arglist__35326);
return G__35324__delegate(p__35300);
});
G__35324.cljs$core$IFn$_invoke$arity$variadic = G__35324__delegate;
return G__35324;
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
return (function (p__35362){
var vec__35363 = p__35362;
var _ = cljs.core.nth.call(null,vec__35363,(0),null);
var win_ms = cljs.core.nth.call(null,vec__35363,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__35363,(2),null);
var spec = vec__35363;
return win_ms;
});})(vspecs,vstates_))
,vspecs)));
var nspecs = cljs.core.count.call(null,vspecs);
var nid_specs = cljs.core.count.call(null,cljs.core.filterv.call(null,((function (vspecs,vstates_,max_win_ms,nspecs){
return (function (p__35364){
var vec__35365 = p__35364;
var _ = cljs.core.nth.call(null,vec__35365,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35365,(1),null);
var id = cljs.core.nth.call(null,vec__35365,(2),null);
return id;
});})(vspecs,vstates_,max_win_ms,nspecs))
,vspecs));
var _ = ((((nid_specs === (0))) || (cljs.core._EQ_.call(null,nid_specs,nspecs)))?null:(function(){throw (new Error("Assert failed: (or (zero? nid-specs) (= nid-specs nspecs))"))})());
var return_ids_QMARK_ = !((nid_specs === (0)));
return ((function (vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function() { 
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate = function (p__35366){
var vec__35382 = p__35366;
var _QMARK_a1 = cljs.core.nth.call(null,vec__35382,(0),null);
var _QMARK_a2 = cljs.core.nth.call(null,vec__35382,(1),null);
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
if(cljs.core.truth_((function (){var and__25902__auto__ = req_id;
if(cljs.core.truth_(and__25902__auto__)){
return taoensso.encore.gc_now_QMARK_.call(null);
} else {
return and__25902__auto__;
}
})())){
taoensso.encore.swap_in_BANG_.call(null,vstates_,cljs.core.PersistentVector.EMPTY,((function (peek_QMARK_,req_id,instant,vec__35382,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function taoensso$encore$rate_limiter_STAR__$_check_rate_limits_$_gc(m){
return cljs.core.reduce_kv.call(null,((function (peek_QMARK_,req_id,instant,vec__35382,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (m_STAR_,req_id__$1,vstate){
var max_udt_win_start = cljs.core.reduce.call(null,((function (peek_QMARK_,req_id,instant,vec__35382,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (acc,p__35385){
var vec__35386 = p__35385;
var ___$1 = cljs.core.nth.call(null,vec__35386,(0),null);
var udt = cljs.core.nth.call(null,vec__35386,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__35386,(2),null);
var x__26245__auto__ = acc;
var y__26246__auto__ = udt;
return ((x__26245__auto__ > y__26246__auto__) ? x__26245__auto__ : y__26246__auto__);
});})(peek_QMARK_,req_id,instant,vec__35382,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,(0),vstate);
var min_win_ms_elapsed = (instant - max_udt_win_start);
if((min_win_ms_elapsed > max_win_ms)){
return cljs.core.dissoc.call(null,m_STAR_,req_id__$1);
} else {
return m_STAR_;
}
});})(peek_QMARK_,req_id,instant,vec__35382,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,m,m);
});})(peek_QMARK_,req_id,instant,vec__35382,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
} else {
}

return taoensso.encore.swap_in_BANG_.call(null,vstates_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_id], null),((function (peek_QMARK_,req_id,instant,vec__35382,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (_QMARK_vstate){
if(cljs.core.not.call(null,_QMARK_vstate)){
if(cljs.core.truth_(peek_QMARK_)){
return taoensso.encore.swapped.call(null,_QMARK_vstate,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,nspecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),instant], null))),null);
}
} else {
var vec__35387 = (function (){var in_vspecs = vspecs;
var in_vstate = _QMARK_vstate;
var out_vstate = cljs.core.PersistentVector.EMPTY;
var _QMARK_worst_limit_offence = null;
while(true){
var vec__35388 = in_vspecs;
var vec__35389 = cljs.core.nth.call(null,vec__35388,(0),null);
var ncalls_limit = cljs.core.nth.call(null,vec__35389,(0),null);
var win_ms = cljs.core.nth.call(null,vec__35389,(1),null);
var _QMARK_spec_id = cljs.core.nth.call(null,vec__35389,(2),null);
var next_in_vspecs = cljs.core.nthnext.call(null,vec__35388,(1));
var vec__35390 = in_vstate;
var vec__35391 = cljs.core.nth.call(null,vec__35390,(0),null);
var ncalls = cljs.core.nth.call(null,vec__35391,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__35391,(1),null);
var next_in_vstate = cljs.core.nthnext.call(null,vec__35390,(1));
var win_ms_elapsed = (instant - udt_win_start);
var reset_due_QMARK_ = (win_ms_elapsed >= win_ms);
var rate_limited_QMARK_ = (!(reset_due_QMARK_)) && ((ncalls >= ncalls_limit));
var new_out_vstate = cljs.core.conj.call(null,out_vstate,((reset_due_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),instant], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls,udt_win_start], null)));
var new__QMARK_worst_limit_offence = ((!(rate_limited_QMARK_))?_QMARK_worst_limit_offence:(function (){var ms_wait = (win_ms - win_ms_elapsed);
if((function (){var or__25914__auto__ = (_QMARK_worst_limit_offence == null);
if(or__25914__auto__){
return or__25914__auto__;
} else {
var vec__35393 = _QMARK_worst_limit_offence;
var max_ms_wait = cljs.core.nth.call(null,vec__35393,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35393,(1),null);
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
var G__35397 = next_in_vspecs;
var G__35398 = next_in_vstate;
var G__35399 = new_out_vstate;
var G__35400 = new__QMARK_worst_limit_offence;
in_vspecs = G__35397;
in_vstate = G__35398;
out_vstate = G__35399;
_QMARK_worst_limit_offence = G__35400;
continue;
}
break;
}
})();
var vstate_with_resets = cljs.core.nth.call(null,vec__35387,(0),null);
var _QMARK_worst_limit_offence = cljs.core.nth.call(null,vec__35387,(1),null);
var all_limits_pass_QMARK_ = (_QMARK_worst_limit_offence == null);
var new_vstate = (cljs.core.truth_(peek_QMARK_)?_QMARK_vstate:((!(all_limits_pass_QMARK_))?vstate_with_resets:cljs.core.mapv.call(null,((function (vec__35387,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__35382,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (p__35394){
var vec__35395 = p__35394;
var ncalls = cljs.core.nth.call(null,vec__35395,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__35395,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ncalls + (1)),udt_win_start], null);
});})(vec__35387,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__35382,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,vstate_with_resets)
));
var result = (function (){var temp__4425__auto__ = _QMARK_worst_limit_offence;
if(cljs.core.truth_(temp__4425__auto__)){
var wlo = temp__4425__auto__;
if(return_ids_QMARK_){
return wlo;
} else {
var vec__35396 = wlo;
var ms_wait = cljs.core.nth.call(null,vec__35396,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35396,(1),null);
return ms_wait;
}
} else {
return null;
}
})();
return taoensso.encore.swapped.call(null,new_vstate,result);
}
});})(peek_QMARK_,req_id,instant,vec__35382,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);

}
}
};
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits = function (var_args){
var p__35366 = null;
if (arguments.length > 0) {
var G__35401__i = 0, G__35401__a = new Array(arguments.length -  0);
while (G__35401__i < G__35401__a.length) {G__35401__a[G__35401__i] = arguments[G__35401__i + 0]; ++G__35401__i;}
  p__35366 = new cljs.core.IndexedSeq(G__35401__a,0);
} 
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate.call(this,p__35366);};
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$maxFixedArity = 0;
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$applyTo = (function (arglist__35402){
var p__35366 = cljs.core.seq(arglist__35402);
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate(p__35366);
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
var G__35403__delegate = function (args){
var temp__4423__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var backoff = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__35403 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35404__i = 0, G__35404__a = new Array(arguments.length -  0);
while (G__35404__i < G__35404__a.length) {G__35404__a[G__35404__i] = arguments[G__35404__i + 0]; ++G__35404__i;}
  args = new cljs.core.IndexedSeq(G__35404__a,0);
} 
return G__35403__delegate.call(this,args);};
G__35403.cljs$lang$maxFixedArity = 0;
G__35403.cljs$lang$applyTo = (function (arglist__35405){
var args = cljs.core.seq(arglist__35405);
return G__35403__delegate(args);
});
G__35403.cljs$core$IFn$_invoke$arity$variadic = G__35403__delegate;
return G__35403;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4423__auto__ = (function (){var and__25902__auto__ = typeof window !== 'undefined';
if(and__25902__auto__){
return (window["performance"]);
} else {
return and__25902__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var perf = temp__4423__auto__;
var temp__4423__auto____$1 = (function (){var or__25914__auto__ = (perf["now"]);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
var or__25914__auto____$1 = (perf["mozNow"]);
if(cljs.core.truth_(or__25914__auto____$1)){
return or__25914__auto____$1;
} else {
var or__25914__auto____$2 = (perf["msNow"]);
if(cljs.core.truth_(or__25914__auto____$2)){
return or__25914__auto____$2;
} else {
var or__25914__auto____$3 = (perf["oNow"]);
if(cljs.core.truth_(or__25914__auto____$3)){
return or__25914__auto____$3;
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
taoensso.encore.console_log = (function (){var temp__4423__auto__ = (function (){var and__25902__auto__ = typeof console !== 'undefined';
if(and__25902__auto__){
return console.log;
} else {
return and__25902__auto__;
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
var args__26991__auto__ = [];
var len__26984__auto___35413 = arguments.length;
var i__26985__auto___35414 = (0);
while(true){
if((i__26985__auto___35414 < len__26984__auto___35413)){
args__26991__auto__.push((arguments[i__26985__auto___35414]));

var G__35415 = (i__26985__auto___35414 + (1));
i__26985__auto___35414 = G__35415;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((0) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((0)),(0),null)):null);
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(argseq__26992__auto__);
});

taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,xs);
});

taoensso.encore.log.cljs$lang$maxFixedArity = (0);

taoensso.encore.log.cljs$lang$applyTo = (function (seq35406){
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35406));
});

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__26991__auto__ = [];
var len__26984__auto___35416 = arguments.length;
var i__26985__auto___35417 = (0);
while(true){
if((i__26985__auto___35417 < len__26984__auto___35416)){
args__26991__auto__.push((arguments[i__26985__auto___35417]));

var G__35418 = (i__26985__auto___35417 + (1));
i__26985__auto___35417 = G__35418;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((0) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__26992__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.spaced_str_with_nils.call(null,xs)], null));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq35407){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35407));
});

taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__26991__auto__ = [];
var len__26984__auto___35419 = arguments.length;
var i__26985__auto___35420 = (0);
while(true){
if((i__26985__auto___35420 < len__26984__auto___35419)){
args__26991__auto__.push((arguments[i__26985__auto___35420]));

var G__35421 = (i__26985__auto___35420 + (1));
i__26985__auto___35420 = G__35421;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.format_STAR_.call(null,fmt,xs)], null));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq35408){
var G__35409 = cljs.core.first.call(null,seq35408);
var seq35408__$1 = cljs.core.next.call(null,seq35408);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__35409,seq35408__$1);
});

taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__26991__auto__ = [];
var len__26984__auto___35422 = arguments.length;
var i__26985__auto___35423 = (0);
while(true){
if((i__26985__auto___35423 < len__26984__auto___35422)){
args__26991__auto__.push((arguments[i__26985__auto___35423]));

var G__35424 = (i__26985__auto___35423 + (1));
i__26985__auto___35423 = G__35424;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((0) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__26992__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.spaced_str_with_nils.call(null,xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq35410){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35410));
});

taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__26991__auto__ = [];
var len__26984__auto___35425 = arguments.length;
var i__26985__auto___35426 = (0);
while(true){
if((i__26985__auto___35426 < len__26984__auto___35425)){
args__26991__auto__.push((arguments[i__26985__auto___35426]));

var G__35427 = (i__26985__auto___35426 + (1));
i__26985__auto___35426 = G__35427;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq35411){
var G__35412 = cljs.core.first.call(null,seq35411);
var seq35411__$1 = cljs.core.next.call(null,seq35411);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__35412,seq35411__$1);
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
var or__25914__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
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
var G__35429 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__35429) {
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
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__35433,callback){
var map__35451 = p__35433;
var map__35451__$1 = ((((!((map__35451 == null)))?((((map__35451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35451):map__35451);
var opts = map__35451__$1;
var method = cljs.core.get.call(null,map__35451__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__35451__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__35451__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__35451__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__35451__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__35451__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var progress_fn = cljs.core.get.call(null,map__35451__$1,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
var errorf = cljs.core.get.call(null,map__35451__$1,new cljs.core.Keyword(null,"errorf","errorf",-620376044),taoensso.encore.logf);
if(cljs.core.truth_((function (){var __x = timeout_ms;
if(cljs.core.truth_(((function (__x,map__35451,map__35451__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (__x__$1){
var or__25914__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nneg_int_QMARK_).call(null,__x__$1);
}
});})(__x,map__35451,map__35451__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
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
try{var timeout_ms__$1 = (function (){var or__25914__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__35455 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__35455) {
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
var vec__35454 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__35454,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__35454,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__35456_35469 = xhr;
goog.events.listenOnce(G__35456_35469,goog.net.EventType.READY,((function (G__35456_35469,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35454,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35451,map__35451__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__35456_35469,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35454,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35451,map__35451__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);

goog.events.listenOnce(G__35456_35469,goog.net.EventType.COMPLETE,((function (G__35456_35469,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35454,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35451,map__35451__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var success_QMARK_ = xhr.isSuccess();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__35462 = ((function (status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__35456_35469,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35454,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35451,map__35451__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (p1__35432_SHARP_,p2__35431_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__35431_SHARP_,p1__35432_SHARP_);
});})(status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__35456_35469,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35454,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35451,map__35451__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
var expr__35463 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__35462.call(null,"/edn",expr__35463))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(pred__35462.call(null,"/json",expr__35463))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(pred__35462.call(null,"/xml",expr__35463))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(cljs.core.truth_(pred__35462.call(null,"/html",expr__35463))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());
try{var G__35466 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__35466) {
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
}catch (e35465){if((e35465 instanceof Error)){
var e = e35465;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e35465;

}
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(function (){var or__25914__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if(cljs.core.truth_(success_QMARK_)){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.call(null,cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
if(((_QMARK_content == null)) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(204),null,(1223),null], null), null).call(null,_QMARK_http_status)))){
return new cljs.core.Keyword(null,"no-content","no-content",-1860206018);
} else {
return null;
}
}
})()], null);
return callback.call(null,cb_arg);
});})(G__35456_35469,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35454,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35451,map__35451__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);


var temp__4425__auto___35471 = progress_fn;
if(cljs.core.truth_(temp__4425__auto___35471)){
var pf_35472 = temp__4425__auto___35471;
goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf_35472,temp__4425__auto___35471,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35454,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35451,map__35451__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__25902__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__25902__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__25902__auto__;
}
})())?(loaded / total):null);
return pf_35472.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf_35472,temp__4425__auto___35471,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35454,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35451,map__35451__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);
} else {
}

var G__35467_35473 = xhr;
var temp__4425__auto___35474 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4425__auto___35474)){
var x_35475 = temp__4425__auto___35474;
G__35467_35473.setTimeoutInterval((function (){var or__25914__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return (0);
}
})());
} else {
}

var temp__4425__auto___35476 = with_credentials_QMARK_;
if(cljs.core.truth_(temp__4425__auto___35476)){
var x_35477 = temp__4425__auto___35476;
G__35467_35473.setWithCredentials(true);
} else {
}

var temp__4425__auto___35478 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4425__auto___35478)){
var x_35479 = temp__4425__auto___35478;
G__35467_35473.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);
} else {
}


return xhr;
}catch (e35453){if((e35453 instanceof Error)){
var e = e35453;
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e35453;

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
var args__26991__auto__ = [];
var len__26984__auto___35484 = arguments.length;
var i__26985__auto___35485 = (0);
while(true){
if((i__26985__auto___35485 < len__26984__auto___35484)){
args__26991__auto__.push((arguments[i__26985__auto___35485]));

var G__35486 = (i__26985__auto___35485 + (1));
i__26985__auto___35485 = G__35486;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__35482){
var vec__35483 = p__35482;
var encoding = cljs.core.nth.call(null,vec__35483,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq35480){
var G__35481 = cljs.core.first.call(null,seq35480);
var seq35480__$1 = cljs.core.next.call(null,seq35480);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__35481,seq35480__$1);
});
taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode.call(null,taoensso.encore.qname.call(null,k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode.call(null,(function (){var or__25914__auto__ = taoensso.encore.as__QMARK_qname.call(null,v);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
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
return join.call(null,(function (){var iter__26694__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__35495(s__35496){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__35496__$1 = s__35496;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35496__$1);
if(temp__4425__auto__){
var s__35496__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35496__$2)){
var c__26692__auto__ = cljs.core.chunk_first.call(null,s__35496__$2);
var size__26693__auto__ = cljs.core.count.call(null,c__26692__auto__);
var b__35498 = cljs.core.chunk_buffer.call(null,size__26693__auto__);
if((function (){var i__35497 = (0);
while(true){
if((i__35497 < size__26693__auto__)){
var vec__35501 = cljs.core._nth.call(null,c__26692__auto__,i__35497);
var k = cljs.core.nth.call(null,vec__35501,(0),null);
var v = cljs.core.nth.call(null,vec__35501,(1),null);
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,v))){
cljs.core.chunk_append.call(null,b__35498,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__25914__auto__ = cljs.core.seq.call(null,v);
if(or__25914__auto__){
return or__25914__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__35503 = (i__35497 + (1));
i__35497 = G__35503;
continue;
} else {
var G__35504 = (i__35497 + (1));
i__35497 = G__35504;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35498),taoensso$encore$format_query_string_$_iter__35495.call(null,cljs.core.chunk_rest.call(null,s__35496__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35498),null);
}
} else {
var vec__35502 = cljs.core.first.call(null,s__35496__$2);
var k = cljs.core.nth.call(null,vec__35502,(0),null);
var v = cljs.core.nth.call(null,vec__35502,(1),null);
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,v))){
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__25914__auto__ = cljs.core.seq.call(null,v);
if(or__25914__auto__){
return or__25914__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__35495.call(null,cljs.core.rest.call(null,s__35496__$2)));
} else {
var G__35505 = cljs.core.rest.call(null,s__35496__$2);
s__35496__$1 = G__35505;
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
return iter__26694__auto__.call(null,m);
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
var args__26991__auto__ = [];
var len__26984__auto___35512 = arguments.length;
var i__26985__auto___35513 = (0);
while(true){
if((i__26985__auto___35513 < len__26984__auto___35512)){
args__26991__auto__.push((arguments[i__26985__auto___35513]));

var G__35514 = (i__26985__auto___35513 + (1));
i__26985__auto___35513 = G__35514;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__35508){
var vec__35509 = p__35508;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__35509,(0),null);
var encoding = cljs.core.nth.call(null,vec__35509,(1),null);
var _PERCENT_ = ((clojure.string.blank_QMARK_.call(null,s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?taoensso.encore.substr.call(null,s,(1)):s);
if(cljs.core.not.call(null,taoensso.encore.str_contains_QMARK_.call(null,s__$1,"="))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var m = cljs.core.reduce.call(null,((function (s__$1,vec__35509,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4423__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__35510 = temp__4423__auto__;
var k = cljs.core.nth.call(null,vec__35510,(0),null);
var v = cljs.core.nth.call(null,vec__35510,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__35509,keywordize_QMARK_,encoding))
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
}catch (e35511){if((e35511 instanceof Error)){
var __t = e35511;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(map? %)",__x,__t,null);
} else {
throw e35511;

}
}})())){
} else {
throw (new Error("Assert failed: (have? map? %)"));
}

return _PERCENT_;
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq35506){
var G__35507 = cljs.core.first.call(null,seq35506);
var seq35506__$1 = cljs.core.next.call(null,seq35506);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__35507,seq35506__$1);
});
taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__35516 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__35516,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__35516,(1),null);
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
var args__26991__auto__ = [];
var len__26984__auto___35521 = arguments.length;
var i__26985__auto___35522 = (0);
while(true){
if((i__26985__auto___35522 < len__26984__auto___35521)){
args__26991__auto__.push((arguments[i__26985__auto___35522]));

var G__35523 = (i__26985__auto___35522 + (1));
i__26985__auto___35522 = G__35523;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__35519){
var vec__35520 = p__35519;
var type = cljs.core.nth.call(null,vec__35520,(0),null);
var nplaces = cljs.core.nth.call(null,vec__35520,(1),null);
return taoensso.encore.round_STAR_.call(null,(function (){var or__25914__auto__ = type;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq35517){
var G__35518 = cljs.core.first.call(null,seq35517);
var seq35517__$1 = cljs.core.next.call(null,seq35517);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__35518,seq35517__$1);
});
taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__26991__auto__ = [];
var len__26984__auto___35528 = arguments.length;
var i__26985__auto___35529 = (0);
while(true){
if((i__26985__auto___35529 < len__26984__auto___35528)){
args__26991__auto__.push((arguments[i__26985__auto___35529]));

var G__35530 = (i__26985__auto___35529 + (1));
i__26985__auto___35529 = G__35530;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__35526){
var vec__35527 = p__35526;
var nattempt = cljs.core.nth.call(null,vec__35527,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__25914__auto__ = nattempt;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return (0);
}
})()));
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq35524){
var G__35525 = cljs.core.first.call(null,seq35524);
var seq35524__$1 = cljs.core.next.call(null,seq35524);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35525,seq35524__$1);
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
var G__35531__delegate = function (args){
var temp__4423__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var backoff_ms = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__35531 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35532__i = 0, G__35532__a = new Array(arguments.length -  0);
while (G__35532__i < G__35532__a.length) {G__35532__a[G__35532__i] = arguments[G__35532__i + 0]; ++G__35532__i;}
  args = new cljs.core.IndexedSeq(G__35532__a,0);
} 
return G__35531__delegate.call(this,args);};
G__35531.cljs$lang$maxFixedArity = 0;
G__35531.cljs$lang$applyTo = (function (arglist__35533){
var args = cljs.core.seq(arglist__35533);
return G__35531__delegate(args);
});
G__35531.cljs$core$IFn$_invoke$arity$variadic = G__35531__delegate;
return G__35531;
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
var args__26991__auto__ = [];
var len__26984__auto___35548 = arguments.length;
var i__26985__auto___35549 = (0);
while(true){
if((i__26985__auto___35549 < len__26984__auto___35548)){
args__26991__auto__.push((arguments[i__26985__auto___35549]));

var G__35550 = (i__26985__auto___35549 + (1));
i__26985__auto___35549 = G__35550;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq35534){
var G__35535 = cljs.core.first.call(null,seq35534);
var seq35534__$1 = cljs.core.next.call(null,seq35534);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__35535,seq35534__$1);
});

taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__26991__auto__ = [];
var len__26984__auto___35551 = arguments.length;
var i__26985__auto___35552 = (0);
while(true){
if((i__26985__auto___35552 < len__26984__auto___35551)){
args__26991__auto__.push((arguments[i__26985__auto___35552]));

var G__35553 = (i__26985__auto___35552 + (1));
i__26985__auto___35552 = G__35553;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq35536){
var G__35537 = cljs.core.first.call(null,seq35536);
var seq35536__$1 = cljs.core.next.call(null,seq35536);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__35537,seq35536__$1);
});

taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__26991__auto__ = [];
var len__26984__auto___35554 = arguments.length;
var i__26985__auto___35555 = (0);
while(true){
if((i__26985__auto___35555 < len__26984__auto___35554)){
args__26991__auto__.push((arguments[i__26985__auto___35555]));

var G__35556 = (i__26985__auto___35555 + (1));
i__26985__auto___35555 = G__35556;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq35538){
var G__35539 = cljs.core.first.call(null,seq35538);
var seq35538__$1 = cljs.core.next.call(null,seq35538);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__35539,seq35538__$1);
});

taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__26991__auto__ = [];
var len__26984__auto___35557 = arguments.length;
var i__26985__auto___35558 = (0);
while(true){
if((i__26985__auto___35558 < len__26984__auto___35557)){
args__26991__auto__.push((arguments[i__26985__auto___35558]));

var G__35559 = (i__26985__auto___35558 + (1));
i__26985__auto___35558 = G__35559;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("WARN: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq35540){
var G__35541 = cljs.core.first.call(null,seq35540);
var seq35540__$1 = cljs.core.next.call(null,seq35540);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__35541,seq35540__$1);
});

taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__26991__auto__ = [];
var len__26984__auto___35560 = arguments.length;
var i__26985__auto___35561 = (0);
while(true){
if((i__26985__auto___35561 < len__26984__auto___35560)){
args__26991__auto__.push((arguments[i__26985__auto___35561]));

var G__35562 = (i__26985__auto___35561 + (1));
i__26985__auto___35561 = G__35562;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("ERROR: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq35542){
var G__35543 = cljs.core.first.call(null,seq35542);
var seq35542__$1 = cljs.core.next.call(null,seq35542);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__35543,seq35542__$1);
});

taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__26991__auto__ = [];
var len__26984__auto___35563 = arguments.length;
var i__26985__auto___35564 = (0);
while(true){
if((i__26985__auto___35564 < len__26984__auto___35563)){
args__26991__auto__.push((arguments[i__26985__auto___35564]));

var G__35565 = (i__26985__auto___35564 + (1));
i__26985__auto___35564 = G__35565;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("FATAL: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq35544){
var G__35545 = cljs.core.first.call(null,seq35544);
var seq35544__$1 = cljs.core.next.call(null,seq35544);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__35545,seq35544__$1);
});

taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__26991__auto__ = [];
var len__26984__auto___35566 = arguments.length;
var i__26985__auto___35567 = (0);
while(true){
if((i__26985__auto___35567 < len__26984__auto___35566)){
args__26991__auto__.push((arguments[i__26985__auto___35567]));

var G__35568 = (i__26985__auto___35567 + (1));
i__26985__auto___35567 = G__35568;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq35546){
var G__35547 = cljs.core.first.call(null,seq35546);
var seq35546__$1 = cljs.core.next.call(null,seq35546);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__35547,seq35546__$1);
});
/**
 * Deprecated
 */
taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__26991__auto__ = [];
var len__26984__auto___35575 = arguments.length;
var i__26985__auto___35576 = (0);
while(true){
if((i__26985__auto___35576 < len__26984__auto___35575)){
args__26991__auto__.push((arguments[i__26985__auto___35576]));

var G__35577 = (i__26985__auto___35576 + (1));
i__26985__auto___35576 = G__35577;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__35573){
var vec__35574 = p__35573;
var _QMARK_comparator = cljs.core.nth.call(null,vec__35574,(0),null);
var comparator = (function (){var or__25914__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__35574,_QMARK_comparator){
return (function (p1__35569_SHARP_,p2__35570_SHARP_){
if((comparator.call(null,p1__35569_SHARP_,p2__35570_SHARP_) > (0))){
return p2__35570_SHARP_;
} else {
return p1__35569_SHARP_;
}
});})(comparator,vec__35574,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq35571){
var G__35572 = cljs.core.first.call(null,seq35571);
var seq35571__$1 = cljs.core.next.call(null,seq35571);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__35572,seq35571__$1);
});
/**
 * Deprecated
 */
taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__26991__auto__ = [];
var len__26984__auto___35584 = arguments.length;
var i__26985__auto___35585 = (0);
while(true){
if((i__26985__auto___35585 < len__26984__auto___35584)){
args__26991__auto__.push((arguments[i__26985__auto___35585]));

var G__35586 = (i__26985__auto___35585 + (1));
i__26985__auto___35585 = G__35586;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__35582){
var vec__35583 = p__35582;
var _QMARK_comparator = cljs.core.nth.call(null,vec__35583,(0),null);
var comparator = (function (){var or__25914__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__35583,_QMARK_comparator){
return (function (p1__35578_SHARP_,p2__35579_SHARP_){
if((comparator.call(null,p1__35578_SHARP_,p2__35579_SHARP_) < (0))){
return p2__35579_SHARP_;
} else {
return p1__35578_SHARP_;
}
});})(comparator,vec__35583,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq35580){
var G__35581 = cljs.core.first.call(null,seq35580);
var seq35580__$1 = cljs.core.next.call(null,seq35580);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__35581,seq35580__$1);
});
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__25914__auto__ = x;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

//# sourceMappingURL=encore.js.map