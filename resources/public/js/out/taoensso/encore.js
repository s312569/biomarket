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
var vec__34754 = taoensso.encore.encore_version;
var xc = cljs.core.nth.call(null,vec__34754,(0),null);
var yc = cljs.core.nth.call(null,vec__34754,(1),null);
var zc = cljs.core.nth.call(null,vec__34754,(2),null);
var vec__34755 = ((cljs.core.vector_QMARK_.call(null,min_version))?min_version:cljs.core.re_seq.call(null,/\d+/,[cljs.core.str(min_version)].join('')));
var xm = cljs.core.nth.call(null,vec__34755,(0),null);
var ym = cljs.core.nth.call(null,vec__34755,(1),null);
var zm = cljs.core.nth.call(null,vec__34755,(2),null);
var vec__34756 = cljs.core.mapv.call(null,((function (vec__34754,xc,yc,zc,vec__34755,xm,ym,zm){
return (function (p1__34750_SHARP_){
var or__25812__auto__ = taoensso.encore.as__QMARK_int.call(null,p1__34750_SHARP_);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return (0);
}
});})(vec__34754,xc,yc,zc,vec__34755,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.call(null,vec__34756,(0),null);
var ym__$1 = cljs.core.nth.call(null,vec__34756,(1),null);
var zm__$1 = cljs.core.nth.call(null,vec__34756,(2),null);
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
var vec__34759 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.call(null,vec__34759,(0),null);
var macro_args__$1 = cljs.core.nth.call(null,vec__34759,(1),null);
var vec__34760 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.call(null,vec__34760,(0),null);
var macro_args__$2 = cljs.core.nth.call(null,vec__34760,(1),null);
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
var args34761 = [];
var len__26882__auto___34764 = arguments.length;
var i__26883__auto___34765 = (0);
while(true){
if((i__26883__auto___34765 < len__26882__auto___34764)){
args34761.push((arguments[i__26883__auto___34765]));

var G__34766 = (i__26883__auto___34765 + (1));
i__26883__auto___34765 = G__34766;
continue;
} else {
}
break;
}

var G__34763 = args34761.length;
switch (G__34763) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34761.length)].join('')));

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
var args34768 = [];
var len__26882__auto___34773 = arguments.length;
var i__26883__auto___34774 = (0);
while(true){
if((i__26883__auto___34774 < len__26882__auto___34773)){
args34768.push((arguments[i__26883__auto___34774]));

var G__34775 = (i__26883__auto___34774 + (1));
i__26883__auto___34774 = G__34775;
continue;
} else {
}
break;
}

var G__34770 = args34768.length;
switch (G__34770) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34768.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.call(null,null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_34771 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_34772 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.call(null,x);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_34772;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_34771;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;
taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});
/**
 * Returns data map iff `x` is an error of any type on platform
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var temp__4425__auto__ = (function (){var or__25812__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
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
var or__25812__auto__ = taoensso.encore.as__QMARK_nblank.call(null,x);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"nblank","nblank",626815585),x);
}
});
taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__25812__auto__ = taoensso.encore.as__QMARK_kw.call(null,x);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"kw","kw",1158308175),x);
}
});
taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__25812__auto__ = taoensso.encore.as__QMARK_name.call(null,x);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"name","name",1843675177),x);
}
});
taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__25812__auto__ = taoensso.encore.as__QMARK_qname.call(null,x);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
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
var or__25812__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"int","int",-1741416922),x);
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__25812__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"float","float",-1732389368),x);
}
});
taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__25812__auto__ = taoensso.encore.as__QMARK_email.call(null,x);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x);
}
});
taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__25812__auto__ = taoensso.encore.as__QMARK_nemail.call(null,x);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
});
taoensso.encore.nnil_EQ_ = (function taoensso$encore$nnil_EQ_(var_args){
var args34781 = [];
var len__26882__auto___34787 = arguments.length;
var i__26883__auto___34788 = (0);
while(true){
if((i__26883__auto___34788 < len__26882__auto___34787)){
args34781.push((arguments[i__26883__auto___34788]));

var G__34789 = (i__26883__auto___34788 + (1));
i__26883__auto___34788 = G__34789;
continue;
} else {
}
break;
}

var G__34786 = args34781.length;
switch (G__34786) {
case 2:
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26901__auto__ = (new cljs.core.IndexedSeq(args34781.slice((2)),(0),null));
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26901__auto__);

}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var and__25800__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__25800__auto__)){
return cljs.core._EQ_.call(null,x,y);
} else {
return and__25800__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__25800__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__25800__auto__)){
return cljs.core.apply.call(null,cljs.core._EQ_,x,y,more);
} else {
return and__25800__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$lang$applyTo = (function (seq34782){
var G__34783 = cljs.core.first.call(null,seq34782);
var seq34782__$1 = cljs.core.next.call(null,seq34782);
var G__34784 = cljs.core.first.call(null,seq34782__$1);
var seq34782__$2 = cljs.core.next.call(null,seq34782__$1);
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__34783,G__34784,seq34782__$2);
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
var args__26889__auto__ = [];
var len__26882__auto___34795 = arguments.length;
var i__26883__auto___34796 = (0);
while(true){
if((i__26883__auto___34796 < len__26882__auto___34795)){
args__26889__auto__.push((arguments[i__26883__auto___34796]));

var G__34797 = (i__26883__auto___34796 + (1));
i__26883__auto___34796 = G__34797;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__34793){
var vec__34794 = p__34793;
var no_slash_QMARK_ = cljs.core.nth.call(null,vec__34794,(0),null);
var parts = cljs.core.reduce.call(null,((function (vec__34794,no_slash_QMARK_){
return (function (acc,in$){
if(cljs.core.truth_(in$)){
return cljs.core.into.call(null,acc,taoensso.encore.explode_keyword.call(null,in$));
} else {
return acc;
}
});})(vec__34794,no_slash_QMARK_))
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

taoensso.encore.merge_keywords.cljs$lang$applyTo = (function (seq34791){
var G__34792 = cljs.core.first.call(null,seq34791);
var seq34791__$1 = cljs.core.next.call(null,seq34791);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic(G__34792,seq34791__$1);
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
var args34798 = [];
var len__26882__auto___34802 = arguments.length;
var i__26883__auto___34803 = (0);
while(true){
if((i__26883__auto___34803 < len__26882__auto___34802)){
args34798.push((arguments[i__26883__auto___34803]));

var G__34804 = (i__26883__auto___34803 + (1));
i__26883__auto___34803 = G__34804;
continue;
} else {
}
break;
}

var G__34800 = args34798.length;
switch (G__34800) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34798.length)].join('')));

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
var rounded = (function (){var G__34801 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34801) {
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
var args__26889__auto__ = [];
var len__26882__auto___34813 = arguments.length;
var i__26883__auto___34814 = (0);
while(true){
if((i__26883__auto___34814 < len__26882__auto___34813)){
args__26889__auto__.push((arguments[i__26883__auto___34814]));

var G__34815 = (i__26883__auto___34814 + (1));
i__26883__auto___34814 = G__34815;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic = (function (nattempt,p__34809){
var vec__34810 = p__34809;
var map__34811 = cljs.core.nth.call(null,vec__34810,(0),null);
var map__34811__$1 = ((((!((map__34811 == null)))?((((map__34811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34811):map__34811);
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__34811__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__34811__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__34811__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var binary_exp = Math.pow((2),(nattempt - (1)));
var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);
return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__26143__auto__ = cljs.core.long$.call(null,min_SINGLEQUOTE_);
var y__26144__auto__ = cljs.core.long$.call(null,time);
return ((x__26143__auto__ > y__26144__auto__) ? x__26143__auto__ : y__26144__auto__);
})():time);
var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__26150__auto__ = cljs.core.long$.call(null,max_SINGLEQUOTE_);
var y__26151__auto__ = cljs.core.long$.call(null,time__$1);
return ((x__26150__auto__ < y__26151__auto__) ? x__26150__auto__ : y__26151__auto__);
})():time__$1);
return time__$2;
})());
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = (1);

taoensso.encore.exp_backoff.cljs$lang$applyTo = (function (seq34807){
var G__34808 = cljs.core.first.call(null,seq34807);
var seq34807__$1 = cljs.core.next.call(null,seq34807);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic(G__34808,seq34807__$1);
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
var args__26889__auto__ = [];
var len__26882__auto___34833 = arguments.length;
var i__26883__auto___34834 = (0);
while(true){
if((i__26883__auto___34834 < len__26882__auto___34833)){
args__26889__auto__.push((arguments[i__26883__auto___34834]));

var G__34835 = (i__26883__auto___34834 + (1));
i__26883__auto___34834 = G__34835;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((0) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__26890__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__34829){
var map__34830 = p__34829;
var map__34830__$1 = ((((!((map__34830 == null)))?((((map__34830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34830):map__34830);
var opts = map__34830__$1;
var years = cljs.core.get.call(null,map__34830__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__34830__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__34830__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__34830__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__34830__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__34830__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__34830__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__34830__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__34830__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core.truth_(cljs.core.mapv.call(null,((function (map__34830,map__34830__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
var __x = __in;
try{if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null).call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e34832){if((e34832 instanceof Error)){
var __t = e34832;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__x,__t,null);
} else {
throw e34832;

}
}});})(map__34830,map__34830__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts)))){
} else {
throw (new Error("Assert failed: (have #{:msecs :secs :months :days :mins :hours :years :ms :weeks} :in (keys opts))"));
}

return taoensso.encore.round_STAR_.call(null,(((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq34828){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34828));
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
var args34840 = [];
var len__26882__auto___34847 = arguments.length;
var i__26883__auto___34848 = (0);
while(true){
if((i__26883__auto___34848 < len__26882__auto___34847)){
args34840.push((arguments[i__26883__auto___34848]));

var G__34849 = (i__26883__auto___34848 + (1));
i__26883__auto___34848 = G__34849;
continue;
} else {
}
break;
}

var G__34846 = args34840.length;
switch (G__34846) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__26901__auto__ = (new cljs.core.IndexedSeq(args34840.slice((3)),(0),null));
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26901__auto__);

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

taoensso.encore.oget.cljs$lang$applyTo = (function (seq34841){
var G__34842 = cljs.core.first.call(null,seq34841);
var seq34841__$1 = cljs.core.next.call(null,seq34841);
var G__34843 = cljs.core.first.call(null,seq34841__$1);
var seq34841__$2 = cljs.core.next.call(null,seq34841__$1);
var G__34844 = cljs.core.first.call(null,seq34841__$2);
var seq34841__$3 = cljs.core.next.call(null,seq34841__$2);
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic(G__34842,G__34843,G__34844,seq34841__$3);
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
var vec__34852 = coll;
var c1 = cljs.core.nth.call(null,vec__34852,(0),null);
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
var vec__34854 = v;
var v1 = cljs.core.nth.call(null,vec__34854,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
} else {
return null;
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var args34855 = [];
var len__26882__auto___34861 = arguments.length;
var i__26883__auto___34862 = (0);
while(true){
if((i__26883__auto___34862 < len__26882__auto___34861)){
args34855.push((arguments[i__26883__auto___34862]));

var G__34863 = (i__26883__auto___34862 + (1));
i__26883__auto___34862 = G__34863;
continue;
} else {
}
break;
}

var G__34860 = args34855.length;
switch (G__34860) {
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
var argseq__26901__auto__ = (new cljs.core.IndexedSeq(args34855.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26901__auto__);

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

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq34856){
var G__34857 = cljs.core.first.call(null,seq34856);
var seq34856__$1 = cljs.core.next.call(null,seq34856);
var G__34858 = cljs.core.first.call(null,seq34856__$1);
var seq34856__$2 = cljs.core.next.call(null,seq34856__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__34857,G__34858,seq34856__$2);
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
cljs.core.reduce_kv.call(null,(function (p1__34867_SHARP_,p2__34865_SHARP_,p3__34866_SHARP_){
return proc.call(null,p2__34865_SHARP_,p3__34866_SHARP_);
}),null,m);

return null;
});
taoensso.encore.run_BANG__STAR_ = (function taoensso$encore$run_BANG__STAR_(proc,coll){
cljs.core.reduce.call(null,(function (p1__34869_SHARP_,p2__34868_SHARP_){
return proc.call(null,p2__34868_SHARP_);
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
return taoensso.encore.revery_QMARK_.call(null,(function (p1__34870_SHARP_){
return taoensso.encore.nnil_QMARK_.call(null,cljs.core.get.call(null,m,p1__34870_SHARP_));
}),ks);
});
/**
 * Like `update-in` but faster, more flexible, and simpler (less ambiguous)
 */
taoensso.encore.update_in_STAR_ = (function taoensso$encore$update_in_STAR_(m,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
return f.call(null,m);
} else {
var vec__34872 = ks;
var k = cljs.core.nth.call(null,vec__34872,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__34872,(1));
if(cljs.core.truth_(ks__$1)){
return cljs.core.assoc.call(null,m,k,taoensso$encore$update_in_STAR_.call(null,cljs.core.get.call(null,m,k),ks__$1,f));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
}
}
});
taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__26150__auto__ = signed_idx;
var y__26151__auto__ = max_idx;
return ((x__26150__auto__ < y__26151__auto__) ? x__26150__auto__ : y__26151__auto__);
} else {
var x__26143__auto__ = (0);
var y__26144__auto__ = (signed_idx + max_idx);
return ((x__26143__auto__ > y__26144__auto__) ? x__26143__auto__ : y__26144__auto__);
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
var args__26889__auto__ = [];
var len__26882__auto___34879 = arguments.length;
var i__26883__auto___34880 = (0);
while(true){
if((i__26883__auto___34880 < len__26882__auto___34879)){
args__26889__auto__.push((arguments[i__26883__auto___34880]));

var G__34881 = (i__26883__auto___34880 + (1));
i__26883__auto___34880 = G__34881;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((2) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26890__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__34876){
var map__34877 = p__34876;
var map__34877__$1 = ((((!((map__34877 == null)))?((((map__34877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34877):map__34877);
var max_len = cljs.core.get.call(null,map__34877__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__34877__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
if(cljs.core.truth_((function (){var __x = max_len;
if(cljs.core.truth_(((function (__x,map__34877,map__34877__$1,max_len,end_idx){
return (function (__x__$1){
var or__25812__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nneg_int_QMARK_).call(null,__x__$1);
}
});})(__x,map__34877,map__34877__$1,max_len,end_idx))
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

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq34873){
var G__34874 = cljs.core.first.call(null,seq34873);
var seq34873__$1 = cljs.core.next.call(null,seq34873);
var G__34875 = cljs.core.first.call(null,seq34873__$1);
var seq34873__$2 = cljs.core.next.call(null,seq34873__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__34874,G__34875,seq34873__$2);
});
/**
 * Like `subvec` but uses `sub-indexes`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__26889__auto__ = [];
var len__26882__auto___34889 = arguments.length;
var i__26883__auto___34890 = (0);
while(true){
if((i__26883__auto___34890 < len__26882__auto___34889)){
args__26889__auto__.push((arguments[i__26883__auto___34890]));

var G__34891 = (i__26883__auto___34890 + (1));
i__26883__auto___34890 = G__34891;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((2) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26890__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__34885){
var vec__34886 = p__34885;
var _QMARK_max_len = cljs.core.nth.call(null,vec__34886,(0),null);
if(cljs.core.truth_((function (){var __x = v;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e34887){if((e34887 instanceof Error)){
var __t = e34887;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(vector? v)",__x,__t,null);
} else {
throw e34887;

}
}})())){
} else {
throw (new Error("Assert failed: (have? vector? v)"));
}

var vec__34888 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__34888,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__34888,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq34882){
var G__34883 = cljs.core.first.call(null,seq34882);
var seq34882__$1 = cljs.core.next.call(null,seq34882);
var G__34884 = cljs.core.first.call(null,seq34882__$1);
var seq34882__$2 = cljs.core.next.call(null,seq34882__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__34883,G__34884,seq34882__$2);
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var args34896 = [];
var len__26882__auto___34899 = arguments.length;
var i__26883__auto___34900 = (0);
while(true){
if((i__26883__auto___34900 < len__26882__auto___34899)){
args34896.push((arguments[i__26883__auto___34900]));

var G__34901 = (i__26883__auto___34900 + (1));
i__26883__auto___34900 = G__34901;
continue;
} else {
}
break;
}

var G__34898 = args34896.length;
switch (G__34898) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34896.length)].join('')));

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
var args34905 = [];
var len__26882__auto___34908 = arguments.length;
var i__26883__auto___34909 = (0);
while(true){
if((i__26883__auto___34909 < len__26882__auto___34908)){
args34905.push((arguments[i__26883__auto___34909]));

var G__34910 = (i__26883__auto___34909 + (1));
i__26883__auto___34909 = G__34910;
continue;
} else {
}
break;
}

var G__34907 = args34905.length;
switch (G__34907) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34905.length)].join('')));

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
var args__26889__auto__ = [];
var len__26882__auto___34915 = arguments.length;
var i__26883__auto___34916 = (0);
while(true){
if((i__26883__auto___34916 < len__26882__auto___34915)){
args__26889__auto__.push((arguments[i__26883__auto___34916]));

var G__34917 = (i__26883__auto___34916 + (1));
i__26883__auto___34916 = G__34917;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((2) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((2)),(0),null)):null);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26890__auto__);
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_ks){
return taoensso.encore.update_in_STAR_.call(null,m,ks,(function (m__$1){
return cljs.core.apply.call(null,cljs.core.dissoc,m__$1,dissoc_ks);
}));
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (2);

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq34912){
var G__34913 = cljs.core.first.call(null,seq34912);
var seq34912__$1 = cljs.core.next.call(null,seq34912);
var G__34914 = cljs.core.first.call(null,seq34912__$1);
var seq34912__$2 = cljs.core.next.call(null,seq34912__$1);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__34913,G__34914,seq34912__$2);
});
/**
 * Assocs each kv iff its value is not nil
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args__26889__auto__ = [];
var len__26882__auto___34930 = arguments.length;
var i__26883__auto___34931 = (0);
while(true){
if((i__26883__auto___34931 < len__26882__auto___34930)){
args__26889__auto__.push((arguments[i__26883__auto___34931]));

var G__34932 = (i__26883__auto___34931 + (1));
i__26883__auto___34931 = G__34932;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,kvs);
}catch (e34920){if((e34920 instanceof Error)){
var __t = e34920;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e34920;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e34921){if((e34921 instanceof Error)){
var __t = e34921;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",__x,__t,null);
} else {
throw e34921;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__25812__auto__ = m;
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__26592__auto__ = (function taoensso$encore$iter__34922(s__34923){
return (new cljs.core.LazySeq(null,(function (){
var s__34923__$1 = s__34923;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34923__$1);
if(temp__4425__auto__){
var s__34923__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34923__$2)){
var c__26590__auto__ = cljs.core.chunk_first.call(null,s__34923__$2);
var size__26591__auto__ = cljs.core.count.call(null,c__26590__auto__);
var b__34925 = cljs.core.chunk_buffer.call(null,size__26591__auto__);
if((function (){var i__34924 = (0);
while(true){
if((i__34924 < size__26591__auto__)){
var vec__34928 = cljs.core._nth.call(null,c__26590__auto__,i__34924);
var k = cljs.core.nth.call(null,vec__34928,(0),null);
var v = cljs.core.nth.call(null,vec__34928,(1),null);
if(!((v == null))){
cljs.core.chunk_append.call(null,b__34925,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__34933 = (i__34924 + (1));
i__34924 = G__34933;
continue;
} else {
var G__34934 = (i__34924 + (1));
i__34924 = G__34934;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34925),taoensso$encore$iter__34922.call(null,cljs.core.chunk_rest.call(null,s__34923__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34925),null);
}
} else {
var vec__34929 = cljs.core.first.call(null,s__34923__$2);
var k = cljs.core.nth.call(null,vec__34929,(0),null);
var v = cljs.core.nth.call(null,vec__34929,(1),null);
if(!((v == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__34922.call(null,cljs.core.rest.call(null,s__34923__$2)));
} else {
var G__34935 = cljs.core.rest.call(null,s__34923__$2);
s__34923__$1 = G__34935;
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
return iter__26592__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq34918){
var G__34919 = cljs.core.first.call(null,seq34918);
var seq34918__$1 = cljs.core.next.call(null,seq34918);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__34919,seq34918__$1);
});
/**
 * Assocs each kv iff its val is truthy
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args__26889__auto__ = [];
var len__26882__auto___34948 = arguments.length;
var i__26883__auto___34949 = (0);
while(true){
if((i__26883__auto___34949 < len__26882__auto___34948)){
args__26889__auto__.push((arguments[i__26883__auto___34949]));

var G__34950 = (i__26883__auto___34949 + (1));
i__26883__auto___34949 = G__34950;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,kvs);
}catch (e34938){if((e34938 instanceof Error)){
var __t = e34938;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e34938;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e34939){if((e34939 instanceof Error)){
var __t = e34939;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",__x,__t,null);
} else {
throw e34939;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__25812__auto__ = m;
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__26592__auto__ = (function taoensso$encore$iter__34940(s__34941){
return (new cljs.core.LazySeq(null,(function (){
var s__34941__$1 = s__34941;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34941__$1);
if(temp__4425__auto__){
var s__34941__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34941__$2)){
var c__26590__auto__ = cljs.core.chunk_first.call(null,s__34941__$2);
var size__26591__auto__ = cljs.core.count.call(null,c__26590__auto__);
var b__34943 = cljs.core.chunk_buffer.call(null,size__26591__auto__);
if((function (){var i__34942 = (0);
while(true){
if((i__34942 < size__26591__auto__)){
var vec__34946 = cljs.core._nth.call(null,c__26590__auto__,i__34942);
var k = cljs.core.nth.call(null,vec__34946,(0),null);
var v = cljs.core.nth.call(null,vec__34946,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__34943,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__34951 = (i__34942 + (1));
i__34942 = G__34951;
continue;
} else {
var G__34952 = (i__34942 + (1));
i__34942 = G__34952;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34943),taoensso$encore$iter__34940.call(null,cljs.core.chunk_rest.call(null,s__34941__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34943),null);
}
} else {
var vec__34947 = cljs.core.first.call(null,s__34941__$2);
var k = cljs.core.nth.call(null,vec__34947,(0),null);
var v = cljs.core.nth.call(null,vec__34947,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__34940.call(null,cljs.core.rest.call(null,s__34941__$2)));
} else {
var G__34953 = cljs.core.rest.call(null,s__34941__$2);
s__34941__$1 = G__34953;
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
return iter__26592__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq34936){
var G__34937 = cljs.core.first.call(null,seq34936);
var seq34936__$1 = cljs.core.next.call(null,seq34936);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__34937,seq34936__$1);
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args34954 = [];
var len__26882__auto___34957 = arguments.length;
var i__26883__auto___34958 = (0);
while(true){
if((i__26883__auto___34958 < len__26882__auto___34957)){
args34954.push((arguments[i__26883__auto___34958]));

var G__34959 = (i__26883__auto___34958 + (1));
i__26883__auto___34958 = G__34959;
continue;
} else {
}
break;
}

var G__34956 = args34954.length;
switch (G__34956) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34954.length)].join('')));

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
var args__26889__auto__ = [];
var len__26882__auto___34962 = arguments.length;
var i__26883__auto___34963 = (0);
while(true){
if((i__26883__auto___34963 < len__26882__auto___34962)){
args__26889__auto__.push((arguments[i__26883__auto___34963]));

var G__34964 = (i__26883__auto___34963 + (1));
i__26883__auto___34963 = G__34964;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((0) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26890__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq34961){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34961));
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
var args__26889__auto__ = [];
var len__26882__auto___34967 = arguments.length;
var i__26883__auto___34968 = (0);
while(true){
if((i__26883__auto___34968 < len__26882__auto___34967)){
args__26889__auto__.push((arguments[i__26883__auto___34968]));

var G__34969 = (i__26883__auto___34968 + (1));
i__26883__auto___34968 = G__34969;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),taoensso.encore.seq_kvs.call(null,cljs.core.last.call(null,args))));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq34965){
var G__34966 = cljs.core.first.call(null,seq34965);
var seq34965__$1 = cljs.core.next.call(null,seq34965);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__34966,seq34965__$1);
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
if(cljs.core.truth_((function (){var and__25800__auto__ = predk.call(null,k);
if(cljs.core.truth_(and__25800__auto__)){
return predv.call(null,v);
} else {
return and__25800__auto__;
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
return cljs.core.transduce.call(null,cljs.core.partition_all.call(null,(2)),cljs.core.completing.call(null,(function (acc,p__34976){
var vec__34977 = p__34976;
var k = cljs.core.nth.call(null,vec__34977,(0),null);
var v = cljs.core.nth.call(null,vec__34977,(1),null);
return cljs.core.assoc_BANG_.call(null,acc,kf.call(null,k,v),vf.call(null,k,v));
}),cljs.core.persistent_BANG_),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),kvs);
});
/**
 * Cross between `hash-map` & `map-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__26889__auto__ = [];
var len__26882__auto___34982 = arguments.length;
var i__26883__auto___34983 = (0);
while(true){
if((i__26883__auto___34983 < len__26882__auto___34982)){
args__26889__auto__.push((arguments[i__26883__auto___34983]));

var G__34984 = (i__26883__auto___34983 + (1));
i__26883__auto___34983 = G__34984;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__34980){
var vec__34981 = p__34980;
var kf = cljs.core.nth.call(null,vec__34981,(0),null);
var vf = cljs.core.nth.call(null,vec__34981,(1),null);
if(cljs.core.empty_QMARK_.call(null,kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__34981,kf,vf){
return (function (_,v){
return v;
});})(vec__34981,kf,vf))
:vf
);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__34981,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__34981,kf,vf))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1,vec__34981,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1,vec__34981,kf,vf))
:kf
));
return taoensso.encore.as_map_STAR_.call(null,kf__$1,vf__$1,kvs);
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq34978){
var G__34979 = cljs.core.first.call(null,seq34978);
var seq34978__$1 = cljs.core.next.call(null,seq34978);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__34979,seq34978__$1);
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
var G__34985 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__34986 = cljs.core.next.call(null,ks__$1);
var G__34987 = cljs.core.next.call(null,vs__$1);
m = G__34985;
ks__$1 = G__34986;
vs__$1 = G__34987;
continue;
}
break;
}
});
/**
 * Like `into` but supports multiple "from"s
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args34988 = [];
var len__26882__auto___34994 = arguments.length;
var i__26883__auto___34995 = (0);
while(true){
if((i__26883__auto___34995 < len__26882__auto___34994)){
args34988.push((arguments[i__26883__auto___34995]));

var G__34996 = (i__26883__auto___34995 + (1));
i__26883__auto___34995 = G__34996;
continue;
} else {
}
break;
}

var G__34993 = args34988.length;
switch (G__34993) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26901__auto__ = (new cljs.core.IndexedSeq(args34988.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26901__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq34989){
var G__34990 = cljs.core.first.call(null,seq34989);
var seq34989__$1 = cljs.core.next.call(null,seq34989);
var G__34991 = cljs.core.first.call(null,seq34989__$1);
var seq34989__$2 = cljs.core.next.call(null,seq34989__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__34990,G__34991,seq34989__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);
/**
 * Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args34998 = [];
var len__26882__auto___35004 = arguments.length;
var i__26883__auto___35005 = (0);
while(true){
if((i__26883__auto___35005 < len__26882__auto___35004)){
args34998.push((arguments[i__26883__auto___35005]));

var G__35006 = (i__26883__auto___35005 + (1));
i__26883__auto___35005 = G__35006;
continue;
} else {
}
break;
}

var G__35003 = args34998.length;
switch (G__35003) {
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
var argseq__26901__auto__ = (new cljs.core.IndexedSeq(args34998.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26901__auto__);

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

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq34999){
var G__35000 = cljs.core.first.call(null,seq34999);
var seq34999__$1 = cljs.core.next.call(null,seq34999);
var G__35001 = cljs.core.first.call(null,seq34999__$1);
var seq34999__$2 = cljs.core.next.call(null,seq34999__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__35000,G__35001,seq34999__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__35014,seen__$1){
while(true){
var vec__35015 = p__35014;
var v = cljs.core.nth.call(null,vec__35015,(0),null);
var xs__$1 = vec__35015;
var temp__4425__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4425__auto__){
var s = temp__4425__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__35016 = cljs.core.rest.call(null,s);
var G__35017 = seen__$1;
p__35014 = G__35016;
seen__$1 = G__35017;
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
var args35022 = [];
var len__26882__auto___35025 = arguments.length;
var i__26883__auto___35026 = (0);
while(true){
if((i__26883__auto___35026 < len__26882__auto___35025)){
args35022.push((arguments[i__26883__auto___35026]));

var G__35027 = (i__26883__auto___35026 + (1));
i__26883__auto___35026 = G__35027;
continue;
} else {
}
break;
}

var G__35024 = args35022.length;
switch (G__35024) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35022.length)].join('')));

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
var G__35029 = null;
var G__35029__0 = (function (){
return rf.call(null);
});
var G__35029__1 = (function (acc){
return rf.call(null,acc);
});
var G__35029__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_.call(null,seen_,cljs.core.conj.call(null,cljs.core._deref.call(null,seen_),k));

return rf.call(null,acc,input);
}
});
G__35029 = function(acc,input){
switch(arguments.length){
case 0:
return G__35029__0.call(this);
case 1:
return G__35029__1.call(this,acc);
case 2:
return G__35029__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35029.cljs$core$IFn$_invoke$arity$0 = G__35029__0;
G__35029.cljs$core$IFn$_invoke$arity$1 = G__35029__1;
G__35029.cljs$core$IFn$_invoke$arity$2 = G__35029__2;
return G__35029;
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
var args35034 = [];
var len__26882__auto___35039 = arguments.length;
var i__26883__auto___35040 = (0);
while(true){
if((i__26883__auto___35040 < len__26882__auto___35039)){
args35034.push((arguments[i__26883__auto___35040]));

var G__35041 = (i__26883__auto___35040 + (1));
i__26883__auto___35040 = G__35041;
continue;
} else {
}
break;
}

var G__35036 = args35034.length;
switch (G__35036) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35034.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.call(null,cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.call(null,(function (p__35037,in$){
var vec__35038 = p__35037;
var v = cljs.core.nth.call(null,vec__35038,(0),null);
var seen = cljs.core.nth.call(null,vec__35038,(1),null);
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
var args__26889__auto__ = [];
var len__26882__auto___35045 = arguments.length;
var i__26883__auto___35046 = (0);
while(true){
if((i__26883__auto___35046 < len__26882__auto___35045)){
args__26889__auto__.push((arguments[i__26883__auto___35046]));

var G__35047 = (i__26883__auto___35046 + (1));
i__26883__auto___35046 = G__35047;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
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
return cljs.core.reduce.call(null,merge_entry,(function (){var or__25812__auto__ = m1;
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
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

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq35043){
var G__35044 = cljs.core.first.call(null,seq35043);
var seq35043__$1 = cljs.core.next.call(null,seq35043);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__35044,seq35043__$1);
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
if((function (){var and__25800__auto__ = (n > (10));
if(and__25800__auto__){
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
return and__25800__auto__;
}
})()){
var v = cljs.core.transient$.call(null,coll);
var idx = (0);
while(true){
if((idx === n)){
return cljs.core.persistent_BANG_.call(null,v);
} else {
var G__35052 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__35053 = (idx + (1));
v = G__35052;
idx = G__35053;
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
var G__35054 = cljs.core.conj.call(null,v,f.call(null));
var G__35055 = (idx + (1));
v = G__35054;
idx = G__35055;
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
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26434__auto__,k__26435__auto__){
var self__ = this;
var this__26434__auto____$1 = this;
return cljs.core._lookup.call(null,this__26434__auto____$1,k__26435__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26436__auto__,k35057,else__26437__auto__){
var self__ = this;
var this__26436__auto____$1 = this;
var G__35059 = (((k35057 instanceof cljs.core.Keyword))?k35057.fqn:null);
switch (G__35059) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35057,else__26437__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26448__auto__,writer__26449__auto__,opts__26450__auto__){
var self__ = this;
var this__26448__auto____$1 = this;
var pr_pair__26451__auto__ = ((function (this__26448__auto____$1){
return (function (keyval__26452__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26449__auto__,cljs.core.pr_writer,""," ","",opts__26450__auto__,keyval__26452__auto__);
});})(this__26448__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26449__auto__,pr_pair__26451__auto__,"#taoensso.encore.Swapped{",", ","}",opts__26450__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IIterable$ = true;

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35056){
var self__ = this;
var G__35056__$1 = this;
return (new cljs.core.RecordIter((0),G__35056__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26432__auto__){
var self__ = this;
var this__26432__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26428__auto__){
var self__ = this;
var this__26428__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26438__auto__){
var self__ = this;
var this__26438__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26429__auto__){
var self__ = this;
var this__26429__auto____$1 = this;
var h__26247__auto__ = self__.__hash;
if(!((h__26247__auto__ == null))){
return h__26247__auto__;
} else {
var h__26247__auto____$1 = cljs.core.hash_imap.call(null,this__26429__auto____$1);
self__.__hash = h__26247__auto____$1;

return h__26247__auto____$1;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26430__auto__,other__26431__auto__){
var self__ = this;
var this__26430__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25800__auto__ = other__26431__auto__;
if(cljs.core.truth_(and__25800__auto__)){
var and__25800__auto____$1 = (this__26430__auto____$1.constructor === other__26431__auto__.constructor);
if(and__25800__auto____$1){
return cljs.core.equiv_map.call(null,this__26430__auto____$1,other__26431__auto__);
} else {
return and__25800__auto____$1;
}
} else {
return and__25800__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26443__auto__,k__26444__auto__){
var self__ = this;
var this__26443__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__26444__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26443__auto____$1),self__.__meta),k__26444__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26444__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26441__auto__,k__26442__auto__,G__35056){
var self__ = this;
var this__26441__auto____$1 = this;
var pred__35060 = cljs.core.keyword_identical_QMARK_;
var expr__35061 = k__26442__auto__;
if(cljs.core.truth_(pred__35060.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__35061))){
return (new taoensso.encore.Swapped(G__35056,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35060.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__35061))){
return (new taoensso.encore.Swapped(self__.new_val,G__35056,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26442__auto__,G__35056),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26446__auto__){
var self__ = this;
var this__26446__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26433__auto__,G__35056){
var self__ = this;
var this__26433__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__35056,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26439__auto__,entry__26440__auto__){
var self__ = this;
var this__26439__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26440__auto__)){
return cljs.core._assoc.call(null,this__26439__auto____$1,cljs.core._nth.call(null,entry__26440__auto__,(0)),cljs.core._nth.call(null,entry__26440__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26439__auto____$1,entry__26440__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Symbol(null,"return-val","return-val",1127759038,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__26468__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__26468__auto__,writer__26469__auto__){
return cljs.core._write.call(null,writer__26469__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__35058){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__35058),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__35058),null,cljs.core.dissoc.call(null,G__35058,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)),null));
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
var vec__35065 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__35065,(0),null);
var return_val = cljs.core.nth.call(null,vec__35065,(1),null);
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
var vec__35068 = ((cljs.core.not.call(null,_QMARK_vf_type))?_QMARK_op:cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op));
var vf_type = cljs.core.nth.call(null,vec__35068,(0),null);
var ks = cljs.core.nth.call(null,vec__35068,(1),null);
var valf = cljs.core.nth.call(null,vec__35068,(2),null);
var G__35069 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__35069) {
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
var args__26889__auto__ = [];
var len__26882__auto___35073 = arguments.length;
var i__26883__auto___35074 = (0);
while(true){
if((i__26883__auto___35074 < len__26882__auto___35073)){
args__26889__auto__.push((arguments[i__26883__auto___35074]));

var G__35075 = (i__26883__auto___35074 + (1));
i__26883__auto___35074 = G__35075;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore.replace_in_STAR_.call(null,null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq35071){
var G__35072 = cljs.core.first.call(null,seq35071);
var seq35071__$1 = cljs.core.next.call(null,seq35071);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__35072,seq35071__$1);
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
var args35076 = [];
var len__26882__auto___35087 = arguments.length;
var i__26883__auto___35088 = (0);
while(true){
if((i__26883__auto___35088 < len__26882__auto___35087)){
args35076.push((arguments[i__26883__auto___35088]));

var G__35089 = (i__26883__auto___35088 + (1));
i__26883__auto___35088 = G__35089;
continue;
} else {
}
break;
}

var G__35082 = args35076.length;
switch (G__35082) {
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__26901__auto__ = (new cljs.core.IndexedSeq(args35076.slice((3)),(0),null));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26901__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__35083 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__35083,(0),null);
var return_val = cljs.core.nth.call(null,vec__35083,(1),null);
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
var vec__35084 = taoensso.encore.swapped_STAR__in.call(null,old_val,ks,f);
var new_val = cljs.core.nth.call(null,vec__35084,(0),null);
var return_val = cljs.core.nth.call(null,vec__35084,(1),null);
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
}catch (e35085){if((e35085 instanceof Error)){
var __t = e35085;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e35085;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35086){if((e35086 instanceof Error)){
var __t = e35086;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",__x,__t,null);
} else {
throw e35086;

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

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq35077){
var G__35078 = cljs.core.first.call(null,seq35077);
var seq35077__$1 = cljs.core.next.call(null,seq35077);
var G__35079 = cljs.core.first.call(null,seq35077__$1);
var seq35077__$2 = cljs.core.next.call(null,seq35077__$1);
var G__35080 = cljs.core.first.call(null,seq35077__$2);
var seq35077__$3 = cljs.core.next.call(null,seq35077__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35078,G__35079,G__35080,seq35077__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Is to `reset!` as `swap-in!` is to `swap!`
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var args35091 = [];
var len__26882__auto___35100 = arguments.length;
var i__26883__auto___35101 = (0);
while(true){
if((i__26883__auto___35101 < len__26882__auto___35100)){
args35091.push((arguments[i__26883__auto___35101]));

var G__35102 = (i__26883__auto___35101 + (1));
i__26883__auto___35101 = G__35102;
continue;
} else {
}
break;
}

var G__35097 = args35091.length;
switch (G__35097) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__26901__auto__ = (new cljs.core.IndexedSeq(args35091.slice((3)),(0),null));
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26901__auto__);

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
}catch (e35098){if((e35098 instanceof Error)){
var __t = e35098;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e35098;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35099){if((e35099 instanceof Error)){
var __t = e35099;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",__x,__t,null);
} else {
throw e35099;

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

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq35092){
var G__35093 = cljs.core.first.call(null,seq35092);
var seq35092__$1 = cljs.core.next.call(null,seq35092);
var G__35094 = cljs.core.first.call(null,seq35092__$1);
var seq35092__$2 = cljs.core.next.call(null,seq35092__$1);
var G__35095 = cljs.core.first.call(null,seq35092__$2);
var seq35092__$3 = cljs.core.next.call(null,seq35092__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35093,G__35094,G__35095,seq35092__$3);
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
var args35108 = [];
var len__26882__auto___35111 = arguments.length;
var i__26883__auto___35112 = (0);
while(true){
if((i__26883__auto___35112 < len__26882__auto___35111)){
args35108.push((arguments[i__26883__auto___35112]));

var G__35113 = (i__26883__auto___35112 + (1));
i__26883__auto___35112 = G__35113;
continue;
} else {
}
break;
}

var G__35110 = args35108.length;
switch (G__35110) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35108.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.call(null,null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.call(null,separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__25800__auto__ = separator;
if(cljs.core.truth_(and__25800__auto__)){
return cljs.core.not_EQ_.call(null,separator,"");
} else {
return and__25800__auto__;
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
var fmt__$1 = (function (){var or__25812__auto__ = fmt;
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
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
var args__26889__auto__ = [];
var len__26882__auto___35117 = arguments.length;
var i__26883__auto___35118 = (0);
while(true){
if((i__26883__auto___35118 < len__26882__auto___35117)){
args__26889__auto__.push((arguments[i__26883__auto___35118]));

var G__35119 = (i__26883__auto___35118 + (1));
i__26883__auto___35118 = G__35119;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq35115){
var G__35116 = cljs.core.first.call(null,seq35115);
var seq35115__$1 = cljs.core.next.call(null,seq35115);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__35116,seq35115__$1);
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
var G__35120__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__35120 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35121__i = 0, G__35121__a = new Array(arguments.length -  0);
while (G__35121__i < G__35121__a.length) {G__35121__a[G__35121__i] = arguments[G__35121__i + 0]; ++G__35121__i;}
  args = new cljs.core.IndexedSeq(G__35121__a,0);
} 
return G__35120__delegate.call(this,args);};
G__35120.cljs$lang$maxFixedArity = 0;
G__35120.cljs$lang$applyTo = (function (arglist__35122){
var args = cljs.core.seq(arglist__35122);
return G__35120__delegate(args);
});
G__35120.cljs$core$IFn$_invoke$arity$variadic = G__35120__delegate;
return G__35120;
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
var args__26889__auto__ = [];
var len__26882__auto___35130 = arguments.length;
var i__26883__auto___35131 = (0);
while(true){
if((i__26883__auto___35131 < len__26882__auto___35130)){
args__26889__auto__.push((arguments[i__26883__auto___35131]));

var G__35132 = (i__26883__auto___35131 + (1));
i__26883__auto___35131 = G__35132;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((2) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26890__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__35126){
var vec__35127 = p__35126;
var _QMARK_max_len = cljs.core.nth.call(null,vec__35127,(0),null);
if(cljs.core.truth_((function (){var __x = s;
try{if(typeof __x === 'string'){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35128){if((e35128 instanceof Error)){
var __t = e35128;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(string? s)",__x,__t,null);
} else {
throw e35128;

}
}})())){
} else {
throw (new Error("Assert failed: (have? string? s)"));
}

var vec__35129 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__35129,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__35129,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq35123){
var G__35124 = cljs.core.first.call(null,seq35123);
var seq35123__$1 = cljs.core.next.call(null,seq35123);
var G__35125 = cljs.core.first.call(null,seq35123__$1);
var seq35123__$2 = cljs.core.next.call(null,seq35123__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__35124,G__35125,seq35123__$2);
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
var args__26889__auto__ = [];
var len__26882__auto___35138 = arguments.length;
var i__26883__auto___35139 = (0);
while(true){
if((i__26883__auto___35139 < len__26882__auto___35138)){
args__26889__auto__.push((arguments[i__26883__auto___35139]));

var G__35140 = (i__26883__auto___35139 + (1));
i__26883__auto___35139 = G__35140;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((2) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((2)),(0),null)):null);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26890__auto__);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic = (function (s,substr,p__35136){
var vec__35137 = p__35136;
var start_idx = cljs.core.nth.call(null,vec__35137,(0),null);
var last_QMARK_ = cljs.core.nth.call(null,vec__35137,(1),null);
var start_idx__$1 = ((function (){var or__25812__auto__ = start_idx;
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
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

taoensso.encore.str__QMARK_index.cljs$lang$applyTo = (function (seq35133){
var G__35134 = cljs.core.first.call(null,seq35133);
var seq35133__$1 = cljs.core.next.call(null,seq35133);
var G__35135 = cljs.core.first.call(null,seq35133__$1);
var seq35133__$2 = cljs.core.next.call(null,seq35133__$1);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic(G__35134,G__35135,seq35133__$2);
});
/**
 * Like `clojure.string/join` but ensures no double separators
 */
taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__26889__auto__ = [];
var len__26882__auto___35143 = arguments.length;
var i__26883__auto___35144 = (0);
while(true){
if((i__26883__auto___35144 < len__26882__auto___35143)){
args__26889__auto__.push((arguments[i__26883__auto___35144]));

var G__35145 = (i__26883__auto___35144 + (1));
i__26883__auto___35144 = G__35145;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
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

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq35141){
var G__35142 = cljs.core.first.call(null,seq35141);
var seq35141__$1 = cljs.core.next.call(null,seq35141);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__35142,seq35141__$1);
});
/**
 * Joins string paths (URLs, file paths, etc.) ensuring correct "/"
 *   interposition
 */
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__26889__auto__ = [];
var len__26882__auto___35147 = arguments.length;
var i__26883__auto___35148 = (0);
while(true){
if((i__26883__auto___35148 < len__26882__auto___35147)){
args__26889__auto__.push((arguments[i__26883__auto___35148]));

var G__35149 = (i__26883__auto___35148 + (1));
i__26883__auto___35148 = G__35149;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((0) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__26890__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return cljs.core.apply.call(null,taoensso.encore.join_once,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq35146){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35146));
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
var args35150 = [];
var len__26882__auto___35153 = arguments.length;
var i__26883__auto___35154 = (0);
while(true){
if((i__26883__auto___35154 < len__26882__auto___35153)){
args35150.push((arguments[i__26883__auto___35154]));

var G__35155 = (i__26883__auto___35154 + (1));
i__26883__auto___35154 = G__35155;
continue;
} else {
}
break;
}

var G__35152 = args35150.length;
switch (G__35152) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35150.length)].join('')));

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
}catch (e35158){if((e35158 instanceof Error)){
var _ = e35158;
return false;
} else {
throw e35158;

}
}});
/**
 * Experimental. Cheaper `have!` alt that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var args35159 = [];
var len__26882__auto___35162 = arguments.length;
var i__26883__auto___35163 = (0);
while(true){
if((i__26883__auto___35163 < len__26882__auto___35162)){
args35159.push((arguments[i__26883__auto___35163]));

var G__35164 = (i__26883__auto___35163 + (1));
i__26883__auto___35163 = G__35164;
continue;
} else {
}
break;
}

var G__35161 = args35159.length;
switch (G__35161) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35159.length)].join('')));

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
var G__35166__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__25812__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args,((function (or__25812__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__25812__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__25812__auto__,cache_))
,null));
}
});})(or__25812__auto__,cache_))
);
}
})());
};
var G__35166 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35167__i = 0, G__35167__a = new Array(arguments.length -  0);
while (G__35167__i < G__35167__a.length) {G__35167__a[G__35167__i] = arguments[G__35167__i + 0]; ++G__35167__i;}
  args = new cljs.core.IndexedSeq(G__35167__a,0);
} 
return G__35166__delegate.call(this,args);};
G__35166.cljs$lang$maxFixedArity = 0;
G__35166.cljs$lang$applyTo = (function (arglist__35168){
var args = cljs.core.seq(arglist__35168);
return G__35166__delegate(args);
});
G__35166.cljs$core$IFn$_invoke$arity$variadic = G__35166__delegate;
return G__35166;
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
return cljs.core.deref.call(null,(function (){var or__25812__auto__ = cljs.core.deref.call(null,cache_);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return cljs.core.swap_BANG_.call(null,cache_,((function (or__25812__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__25812__auto__,cache_){
return (function (){
return f.call(null);
});})(or__25812__auto__,cache_))
,null));
}
});})(or__25812__auto__,cache_))
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
var G__35169 = null;
var G__35169__0 = (function (){
return cljs.core.deref.call(null,(function (){var or__25812__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),taoensso.encore.sentinel);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,taoensso.encore.sentinel,((function (or__25812__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__25812__auto__,cache_){
return (function (){
return f.call(null);
});})(or__25812__auto__,cache_))
,null));
}
});})(or__25812__auto__,cache_))
);
}
})());
});
var G__35169__1 = (function (x){
return cljs.core.deref.call(null,(function (){var or__25812__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),x);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,x,((function (or__25812__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__25812__auto__,cache_){
return (function (){
return f.call(null,x);
});})(or__25812__auto__,cache_))
,null));
}
});})(or__25812__auto__,cache_))
);
}
})());
});
G__35169 = function(x){
switch(arguments.length){
case 0:
return G__35169__0.call(this);
case 1:
return G__35169__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35169.cljs$core$IFn$_invoke$arity$0 = G__35169__0;
G__35169.cljs$core$IFn$_invoke$arity$1 = G__35169__1;
return G__35169;
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
var G__35170__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__25812__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,cache_,((function (or__25812__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (or__25812__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__25812__auto__,cache_))
,null))], true, false);
}
});})(or__25812__auto__,cache_))
),args);
}
})());
};
var G__35170 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35171__i = 0, G__35171__a = new Array(arguments.length -  0);
while (G__35171__i < G__35171__a.length) {G__35171__a[G__35171__i] = arguments[G__35171__i + 0]; ++G__35171__i;}
  args = new cljs.core.IndexedSeq(G__35171__a,0);
} 
return G__35170__delegate.call(this,args);};
G__35170.cljs$lang$maxFixedArity = 0;
G__35170.cljs$lang$applyTo = (function (arglist__35172){
var args = cljs.core.seq(arglist__35172);
return G__35170__delegate(args);
});
G__35170.cljs$core$IFn$_invoke$arity$variadic = G__35170__delegate;
return G__35170;
})()
;
;})(cache_))
});
/**
 * Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
 *   and immediately applies memoized f to given arguments
 */
taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__26889__auto__ = [];
var len__26882__auto___35176 = arguments.length;
var i__26883__auto___35177 = (0);
while(true){
if((i__26883__auto___35177 < len__26882__auto___35176)){
args__26889__auto__.push((arguments[i__26883__auto___35177]));

var G__35178 = (i__26883__auto___35177 + (1));
i__26883__auto___35177 = G__35178;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((2) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26890__auto__);
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

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq35173){
var G__35174 = cljs.core.first.call(null,seq35173);
var seq35173__$1 = cljs.core.next.call(null,seq35173);
var G__35175 = cljs.core.first.call(null,seq35173__$1);
var seq35173__$2 = cljs.core.next.call(null,seq35173__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__35174,G__35175,seq35173__$2);
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
var args35179 = [];
var len__26882__auto___35202 = arguments.length;
var i__26883__auto___35203 = (0);
while(true){
if((i__26883__auto___35203 < len__26882__auto___35202)){
args35179.push((arguments[i__26883__auto___35203]));

var G__35204 = (i__26883__auto___35203 + (1));
i__26883__auto___35203 = G__35204;
continue;
} else {
}
break;
}

var G__35181 = args35179.length;
switch (G__35181) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35179.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__35206__delegate = function (p__35182){
var vec__35183 = p__35182;
var arg1 = cljs.core.nth.call(null,vec__35183,(0),null);
var argn = cljs.core.nthnext.call(null,vec__35183,(1));
var args = vec__35183;
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
return cljs.core.deref.call(null,(function (){var or__25812__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args__$1);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args__$1,((function (or__25812__auto__,fresh_QMARK_,args__$1,vec__35183,arg1,argn,args,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_((function (){var and__25800__auto__ = _QMARK_dv;
if(cljs.core.truth_(and__25800__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__25800__auto__;
}
})())){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__25812__auto__,fresh_QMARK_,args__$1,vec__35183,arg1,argn,args,cache_){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(or__25812__auto__,fresh_QMARK_,args__$1,vec__35183,arg1,argn,args,cache_))
,null));
}
});})(or__25812__auto__,fresh_QMARK_,args__$1,vec__35183,arg1,argn,args,cache_))
);
}
})());

}
}
};
var G__35206 = function (var_args){
var p__35182 = null;
if (arguments.length > 0) {
var G__35207__i = 0, G__35207__a = new Array(arguments.length -  0);
while (G__35207__i < G__35207__a.length) {G__35207__a[G__35207__i] = arguments[G__35207__i + 0]; ++G__35207__i;}
  p__35182 = new cljs.core.IndexedSeq(G__35207__a,0);
} 
return G__35206__delegate.call(this,p__35182);};
G__35206.cljs$lang$maxFixedArity = 0;
G__35206.cljs$lang$applyTo = (function (arglist__35208){
var p__35182 = cljs.core.seq(arglist__35208);
return G__35206__delegate(p__35182);
});
G__35206.cljs$core$IFn$_invoke$arity$variadic = G__35206__delegate;
return G__35206;
})()
;
;})(cache_))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var __x_35209 = ttl_ms;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x_35209))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35184){if((e35184 instanceof Error)){
var __t_35210 = e35184;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? ttl-ms)",__x_35209,__t_35210,null);
} else {
throw e35184;

}
}
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms__$1 = cljs.core.long$.call(null,ttl_ms);
var gc_fn = ((function (cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (){
if(cljs.core.truth_((function (){var and__25800__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__25800__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__25800__auto__,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__25800__auto__,cache_,gc_running_QMARK__,ttl_ms__$1))
);
} else {
return and__25800__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
var snapshot = cljs.core.deref.call(null,cache_);
var ks_to_gc = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,k,p__35185){
var vec__35186 = p__35185;
var dv = cljs.core.nth.call(null,vec__35186,(0),null);
var udt = cljs.core.nth.call(null,vec__35186,(1),null);
var cv = vec__35186;
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
var G__35211__delegate = function (p__35187){
var vec__35188 = p__35187;
var arg1 = cljs.core.nth.call(null,vec__35188,(0),null);
var argn = cljs.core.nthnext.call(null,vec__35188,(1));
var args = vec__35188;
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
var vec__35189 = taoensso.encore.swap_val_BANG_.call(null,cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__35188,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__25800__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__25800__auto__)){
var and__25800__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__25800__auto____$1){
var vec__35191 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__35191,(0),null);
var udt = cljs.core.nth.call(null,vec__35191,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__25800__auto____$1;
}
} else {
return and__25800__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__35188,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__35188,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__35188,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
);
var dv = cljs.core.nth.call(null,vec__35189,(0),null);
return cljs.core.deref.call(null,dv);

}
}
};
var G__35211 = function (var_args){
var p__35187 = null;
if (arguments.length > 0) {
var G__35212__i = 0, G__35212__a = new Array(arguments.length -  0);
while (G__35212__i < G__35212__a.length) {G__35212__a[G__35212__i] = arguments[G__35212__i + 0]; ++G__35212__i;}
  p__35187 = new cljs.core.IndexedSeq(G__35212__a,0);
} 
return G__35211__delegate.call(this,p__35187);};
G__35211.cljs$lang$maxFixedArity = 0;
G__35211.cljs$lang$applyTo = (function (arglist__35213){
var p__35187 = cljs.core.seq(arglist__35213);
return G__35211__delegate(p__35187);
});
G__35211.cljs$core$IFn$_invoke$arity$variadic = G__35211__delegate;
return G__35211;
})()
;
;})(cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
var __x_35214 = ttl_ms;
if(cljs.core.truth_(((function (__x_35214){
return (function (__x__$1){
var or__25812__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.pos_int_QMARK_).call(null,__x__$1);
}
});})(__x_35214))
.call(null,__x_35214))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? pos-int?] ttl-ms)",__x_35214,null,null);
}

var __x_35215 = cache_size;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x_35215))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35192){if((e35192 instanceof Error)){
var __t_35216 = e35192;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? cache-size)",__x_35215,__t_35216,null);
} else {
throw e35192;

}
}
var state_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms_QMARK_ = !((ttl_ms == null));
var ttl_ms__$1 = cljs.core.long$.call(null,(function (){var or__25812__auto__ = ttl_ms;
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return (0);
}
})());
var cache_size__$1 = cljs.core.long$.call(null,cache_size);
var gc_fn = ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (){
if(cljs.core.truth_((function (){var and__25800__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__25800__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__25800__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__25800__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
return and__25800__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
if(ttl_ms_QMARK_){
var snapshot_35217 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var ks_to_gc_35218 = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (snapshot_35217,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,k,p__35193){
var vec__35194 = p__35193;
var dv = cljs.core.nth.call(null,vec__35194,(0),null);
var udt = cljs.core.nth.call(null,vec__35194,(1),null);
var _ = cljs.core.nth.call(null,vec__35194,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__35194,(3),null);
var cv = vec__35194;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(snapshot_35217,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),snapshot_35217));
cljs.core.swap_BANG_.call(null,state_,((function (snapshot_35217,ks_to_gc_35218,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (snapshot_35217,ks_to_gc_35218,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(snapshot_35217,ks_to_gc_35218,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_35218));
});})(snapshot_35217,ks_to_gc_35218,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

var snapshot_35219 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var n_to_gc_35220 = (cljs.core.count.call(null,snapshot_35219) - cache_size__$1);
if((n_to_gc_35220 > (64))){
var ks_to_gc_35221 = taoensso.encore.top.call(null,n_to_gc_35220,((function (snapshot_35219,n_to_gc_35220,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (k){
var vec__35195 = snapshot_35219.call(null,k);
var _ = cljs.core.nth.call(null,vec__35195,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35195,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__35195,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__35195,(3),null);
return (tick_lru + tick_lfu);
});})(snapshot_35219,n_to_gc_35220,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.keys.call(null,snapshot_35219));
cljs.core.swap_BANG_.call(null,state_,((function (ks_to_gc_35221,snapshot_35219,n_to_gc_35220,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (ks_to_gc_35221,snapshot_35219,n_to_gc_35220,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(ks_to_gc_35221,snapshot_35219,n_to_gc_35220,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_35221));
});})(ks_to_gc_35221,snapshot_35219,n_to_gc_35220,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
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
if(cljs.core.truth_((function (){var and__25800__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__25800__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__25800__auto__;
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
if(cljs.core.truth_((function (){var and__25800__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__25800__auto__)){
var and__25800__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__25800__auto____$1){
var vec__35197 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__35197,(0),null);
var udt = cljs.core.nth.call(null,vec__35197,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__25800__auto____$1;
}
} else {
return and__25800__auto__;
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
var G__35222__delegate = function (p__35198){
var vec__35199 = p__35198;
var arg1 = cljs.core.nth.call(null,vec__35199,(0),null);
var argn = cljs.core.nthnext.call(null,vec__35199,(1));
var args = vec__35199;
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
var vec__35200 = cv_fn.call(null,args__$1,fresh_QMARK_,tick);
var dv = cljs.core.nth.call(null,vec__35200,(0),null);
cljs.core.swap_BANG_.call(null,state_,((function (fresh_QMARK_,args__$1,tick,vec__35200,dv,vec__35199,arg1,argn,args,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function (m){
var temp__4423__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__35201 = temp__4423__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__35201,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__35201,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__35201,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__35201,(3),null);
var cv = vec__35201;
return cljs.core.merge.call(null,m,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick,(tick_lfu + (1))], null)], true, false));
} else {
return cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1))], null));
}
});})(fresh_QMARK_,args__$1,tick,vec__35200,dv,vec__35199,arg1,argn,args,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
);

return cljs.core.deref.call(null,dv);

}
}
};
var G__35222 = function (var_args){
var p__35198 = null;
if (arguments.length > 0) {
var G__35223__i = 0, G__35223__a = new Array(arguments.length -  0);
while (G__35223__i < G__35223__a.length) {G__35223__a[G__35223__i] = arguments[G__35223__i + 0]; ++G__35223__i;}
  p__35198 = new cljs.core.IndexedSeq(G__35223__a,0);
} 
return G__35222__delegate.call(this,p__35198);};
G__35222.cljs$lang$maxFixedArity = 0;
G__35222.cljs$lang$applyTo = (function (arglist__35224){
var p__35198 = cljs.core.seq(arglist__35224);
return G__35222__delegate(p__35198);
});
G__35222.cljs$core$IFn$_invoke$arity$variadic = G__35222__delegate;
return G__35222;
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
return (function (p__35260){
var vec__35261 = p__35260;
var _ = cljs.core.nth.call(null,vec__35261,(0),null);
var win_ms = cljs.core.nth.call(null,vec__35261,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__35261,(2),null);
var spec = vec__35261;
return win_ms;
});})(vspecs,vstates_))
,vspecs)));
var nspecs = cljs.core.count.call(null,vspecs);
var nid_specs = cljs.core.count.call(null,cljs.core.filterv.call(null,((function (vspecs,vstates_,max_win_ms,nspecs){
return (function (p__35262){
var vec__35263 = p__35262;
var _ = cljs.core.nth.call(null,vec__35263,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35263,(1),null);
var id = cljs.core.nth.call(null,vec__35263,(2),null);
return id;
});})(vspecs,vstates_,max_win_ms,nspecs))
,vspecs));
var _ = ((((nid_specs === (0))) || (cljs.core._EQ_.call(null,nid_specs,nspecs)))?null:(function(){throw (new Error("Assert failed: (or (zero? nid-specs) (= nid-specs nspecs))"))})());
var return_ids_QMARK_ = !((nid_specs === (0)));
return ((function (vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function() { 
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate = function (p__35264){
var vec__35280 = p__35264;
var _QMARK_a1 = cljs.core.nth.call(null,vec__35280,(0),null);
var _QMARK_a2 = cljs.core.nth.call(null,vec__35280,(1),null);
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
if(cljs.core.truth_((function (){var and__25800__auto__ = req_id;
if(cljs.core.truth_(and__25800__auto__)){
return taoensso.encore.gc_now_QMARK_.call(null);
} else {
return and__25800__auto__;
}
})())){
taoensso.encore.swap_in_BANG_.call(null,vstates_,cljs.core.PersistentVector.EMPTY,((function (peek_QMARK_,req_id,instant,vec__35280,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function taoensso$encore$rate_limiter_STAR__$_check_rate_limits_$_gc(m){
return cljs.core.reduce_kv.call(null,((function (peek_QMARK_,req_id,instant,vec__35280,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (m_STAR_,req_id__$1,vstate){
var max_udt_win_start = cljs.core.reduce.call(null,((function (peek_QMARK_,req_id,instant,vec__35280,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (acc,p__35283){
var vec__35284 = p__35283;
var ___$1 = cljs.core.nth.call(null,vec__35284,(0),null);
var udt = cljs.core.nth.call(null,vec__35284,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__35284,(2),null);
var x__26143__auto__ = acc;
var y__26144__auto__ = udt;
return ((x__26143__auto__ > y__26144__auto__) ? x__26143__auto__ : y__26144__auto__);
});})(peek_QMARK_,req_id,instant,vec__35280,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,(0),vstate);
var min_win_ms_elapsed = (instant - max_udt_win_start);
if((min_win_ms_elapsed > max_win_ms)){
return cljs.core.dissoc.call(null,m_STAR_,req_id__$1);
} else {
return m_STAR_;
}
});})(peek_QMARK_,req_id,instant,vec__35280,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,m,m);
});})(peek_QMARK_,req_id,instant,vec__35280,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
} else {
}

return taoensso.encore.swap_in_BANG_.call(null,vstates_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_id], null),((function (peek_QMARK_,req_id,instant,vec__35280,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (_QMARK_vstate){
if(cljs.core.not.call(null,_QMARK_vstate)){
if(cljs.core.truth_(peek_QMARK_)){
return taoensso.encore.swapped.call(null,_QMARK_vstate,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,nspecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),instant], null))),null);
}
} else {
var vec__35285 = (function (){var in_vspecs = vspecs;
var in_vstate = _QMARK_vstate;
var out_vstate = cljs.core.PersistentVector.EMPTY;
var _QMARK_worst_limit_offence = null;
while(true){
var vec__35286 = in_vspecs;
var vec__35287 = cljs.core.nth.call(null,vec__35286,(0),null);
var ncalls_limit = cljs.core.nth.call(null,vec__35287,(0),null);
var win_ms = cljs.core.nth.call(null,vec__35287,(1),null);
var _QMARK_spec_id = cljs.core.nth.call(null,vec__35287,(2),null);
var next_in_vspecs = cljs.core.nthnext.call(null,vec__35286,(1));
var vec__35288 = in_vstate;
var vec__35289 = cljs.core.nth.call(null,vec__35288,(0),null);
var ncalls = cljs.core.nth.call(null,vec__35289,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__35289,(1),null);
var next_in_vstate = cljs.core.nthnext.call(null,vec__35288,(1));
var win_ms_elapsed = (instant - udt_win_start);
var reset_due_QMARK_ = (win_ms_elapsed >= win_ms);
var rate_limited_QMARK_ = (!(reset_due_QMARK_)) && ((ncalls >= ncalls_limit));
var new_out_vstate = cljs.core.conj.call(null,out_vstate,((reset_due_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),instant], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls,udt_win_start], null)));
var new__QMARK_worst_limit_offence = ((!(rate_limited_QMARK_))?_QMARK_worst_limit_offence:(function (){var ms_wait = (win_ms - win_ms_elapsed);
if((function (){var or__25812__auto__ = (_QMARK_worst_limit_offence == null);
if(or__25812__auto__){
return or__25812__auto__;
} else {
var vec__35291 = _QMARK_worst_limit_offence;
var max_ms_wait = cljs.core.nth.call(null,vec__35291,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35291,(1),null);
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
var G__35295 = next_in_vspecs;
var G__35296 = next_in_vstate;
var G__35297 = new_out_vstate;
var G__35298 = new__QMARK_worst_limit_offence;
in_vspecs = G__35295;
in_vstate = G__35296;
out_vstate = G__35297;
_QMARK_worst_limit_offence = G__35298;
continue;
}
break;
}
})();
var vstate_with_resets = cljs.core.nth.call(null,vec__35285,(0),null);
var _QMARK_worst_limit_offence = cljs.core.nth.call(null,vec__35285,(1),null);
var all_limits_pass_QMARK_ = (_QMARK_worst_limit_offence == null);
var new_vstate = (cljs.core.truth_(peek_QMARK_)?_QMARK_vstate:((!(all_limits_pass_QMARK_))?vstate_with_resets:cljs.core.mapv.call(null,((function (vec__35285,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__35280,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (p__35292){
var vec__35293 = p__35292;
var ncalls = cljs.core.nth.call(null,vec__35293,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__35293,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ncalls + (1)),udt_win_start], null);
});})(vec__35285,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__35280,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,vstate_with_resets)
));
var result = (function (){var temp__4425__auto__ = _QMARK_worst_limit_offence;
if(cljs.core.truth_(temp__4425__auto__)){
var wlo = temp__4425__auto__;
if(return_ids_QMARK_){
return wlo;
} else {
var vec__35294 = wlo;
var ms_wait = cljs.core.nth.call(null,vec__35294,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35294,(1),null);
return ms_wait;
}
} else {
return null;
}
})();
return taoensso.encore.swapped.call(null,new_vstate,result);
}
});})(peek_QMARK_,req_id,instant,vec__35280,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);

}
}
};
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits = function (var_args){
var p__35264 = null;
if (arguments.length > 0) {
var G__35299__i = 0, G__35299__a = new Array(arguments.length -  0);
while (G__35299__i < G__35299__a.length) {G__35299__a[G__35299__i] = arguments[G__35299__i + 0]; ++G__35299__i;}
  p__35264 = new cljs.core.IndexedSeq(G__35299__a,0);
} 
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate.call(this,p__35264);};
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$maxFixedArity = 0;
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$applyTo = (function (arglist__35300){
var p__35264 = cljs.core.seq(arglist__35300);
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate(p__35264);
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
var G__35301__delegate = function (args){
var temp__4423__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var backoff = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__35301 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35302__i = 0, G__35302__a = new Array(arguments.length -  0);
while (G__35302__i < G__35302__a.length) {G__35302__a[G__35302__i] = arguments[G__35302__i + 0]; ++G__35302__i;}
  args = new cljs.core.IndexedSeq(G__35302__a,0);
} 
return G__35301__delegate.call(this,args);};
G__35301.cljs$lang$maxFixedArity = 0;
G__35301.cljs$lang$applyTo = (function (arglist__35303){
var args = cljs.core.seq(arglist__35303);
return G__35301__delegate(args);
});
G__35301.cljs$core$IFn$_invoke$arity$variadic = G__35301__delegate;
return G__35301;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4423__auto__ = (function (){var and__25800__auto__ = typeof window !== 'undefined';
if(and__25800__auto__){
return (window["performance"]);
} else {
return and__25800__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var perf = temp__4423__auto__;
var temp__4423__auto____$1 = (function (){var or__25812__auto__ = (perf["now"]);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
var or__25812__auto____$1 = (perf["mozNow"]);
if(cljs.core.truth_(or__25812__auto____$1)){
return or__25812__auto____$1;
} else {
var or__25812__auto____$2 = (perf["msNow"]);
if(cljs.core.truth_(or__25812__auto____$2)){
return or__25812__auto____$2;
} else {
var or__25812__auto____$3 = (perf["oNow"]);
if(cljs.core.truth_(or__25812__auto____$3)){
return or__25812__auto____$3;
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
taoensso.encore.console_log = (function (){var temp__4423__auto__ = (function (){var and__25800__auto__ = typeof console !== 'undefined';
if(and__25800__auto__){
return console.log;
} else {
return and__25800__auto__;
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
var args__26889__auto__ = [];
var len__26882__auto___35311 = arguments.length;
var i__26883__auto___35312 = (0);
while(true){
if((i__26883__auto___35312 < len__26882__auto___35311)){
args__26889__auto__.push((arguments[i__26883__auto___35312]));

var G__35313 = (i__26883__auto___35312 + (1));
i__26883__auto___35312 = G__35313;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((0) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((0)),(0),null)):null);
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(argseq__26890__auto__);
});

taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,xs);
});

taoensso.encore.log.cljs$lang$maxFixedArity = (0);

taoensso.encore.log.cljs$lang$applyTo = (function (seq35304){
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35304));
});

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__26889__auto__ = [];
var len__26882__auto___35314 = arguments.length;
var i__26883__auto___35315 = (0);
while(true){
if((i__26883__auto___35315 < len__26882__auto___35314)){
args__26889__auto__.push((arguments[i__26883__auto___35315]));

var G__35316 = (i__26883__auto___35315 + (1));
i__26883__auto___35315 = G__35316;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((0) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__26890__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.spaced_str_with_nils.call(null,xs)], null));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq35305){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35305));
});

taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__26889__auto__ = [];
var len__26882__auto___35317 = arguments.length;
var i__26883__auto___35318 = (0);
while(true){
if((i__26883__auto___35318 < len__26882__auto___35317)){
args__26889__auto__.push((arguments[i__26883__auto___35318]));

var G__35319 = (i__26883__auto___35318 + (1));
i__26883__auto___35318 = G__35319;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.format_STAR_.call(null,fmt,xs)], null));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq35306){
var G__35307 = cljs.core.first.call(null,seq35306);
var seq35306__$1 = cljs.core.next.call(null,seq35306);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__35307,seq35306__$1);
});

taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__26889__auto__ = [];
var len__26882__auto___35320 = arguments.length;
var i__26883__auto___35321 = (0);
while(true){
if((i__26883__auto___35321 < len__26882__auto___35320)){
args__26889__auto__.push((arguments[i__26883__auto___35321]));

var G__35322 = (i__26883__auto___35321 + (1));
i__26883__auto___35321 = G__35322;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((0) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__26890__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.spaced_str_with_nils.call(null,xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq35308){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35308));
});

taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__26889__auto__ = [];
var len__26882__auto___35323 = arguments.length;
var i__26883__auto___35324 = (0);
while(true){
if((i__26883__auto___35324 < len__26882__auto___35323)){
args__26889__auto__.push((arguments[i__26883__auto___35324]));

var G__35325 = (i__26883__auto___35324 + (1));
i__26883__auto___35324 = G__35325;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq35309){
var G__35310 = cljs.core.first.call(null,seq35309);
var seq35309__$1 = cljs.core.next.call(null,seq35309);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__35310,seq35309__$1);
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
var or__25812__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
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
var G__35327 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__35327) {
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
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__35331,callback){
var map__35349 = p__35331;
var map__35349__$1 = ((((!((map__35349 == null)))?((((map__35349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35349):map__35349);
var opts = map__35349__$1;
var method = cljs.core.get.call(null,map__35349__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__35349__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__35349__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__35349__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__35349__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__35349__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var progress_fn = cljs.core.get.call(null,map__35349__$1,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
var errorf = cljs.core.get.call(null,map__35349__$1,new cljs.core.Keyword(null,"errorf","errorf",-620376044),taoensso.encore.logf);
if(cljs.core.truth_((function (){var __x = timeout_ms;
if(cljs.core.truth_(((function (__x,map__35349,map__35349__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (__x__$1){
var or__25812__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nneg_int_QMARK_).call(null,__x__$1);
}
});})(__x,map__35349,map__35349__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
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
try{var timeout_ms__$1 = (function (){var or__25812__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__35353 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__35353) {
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
var vec__35352 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__35352,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__35352,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__35354_35367 = xhr;
goog.events.listenOnce(G__35354_35367,goog.net.EventType.READY,((function (G__35354_35367,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35352,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35349,map__35349__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__35354_35367,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35352,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35349,map__35349__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);

goog.events.listenOnce(G__35354_35367,goog.net.EventType.COMPLETE,((function (G__35354_35367,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35352,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35349,map__35349__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var success_QMARK_ = xhr.isSuccess();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__35360 = ((function (status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__35354_35367,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35352,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35349,map__35349__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (p1__35330_SHARP_,p2__35329_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__35329_SHARP_,p1__35330_SHARP_);
});})(status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__35354_35367,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35352,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35349,map__35349__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
var expr__35361 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__35360.call(null,"/edn",expr__35361))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(pred__35360.call(null,"/json",expr__35361))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(pred__35360.call(null,"/xml",expr__35361))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(cljs.core.truth_(pred__35360.call(null,"/html",expr__35361))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());
try{var G__35364 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__35364) {
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
}catch (e35363){if((e35363 instanceof Error)){
var e = e35363;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e35363;

}
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(function (){var or__25812__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if(cljs.core.truth_(success_QMARK_)){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.call(null,cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
if(((_QMARK_content == null)) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(204),null,(1223),null], null), null).call(null,_QMARK_http_status)))){
return new cljs.core.Keyword(null,"no-content","no-content",-1860206018);
} else {
return null;
}
}
})()], null);
return callback.call(null,cb_arg);
});})(G__35354_35367,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35352,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35349,map__35349__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);


var temp__4425__auto___35369 = progress_fn;
if(cljs.core.truth_(temp__4425__auto___35369)){
var pf_35370 = temp__4425__auto___35369;
goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf_35370,temp__4425__auto___35369,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35352,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35349,map__35349__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__25800__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__25800__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__25800__auto__;
}
})())?(loaded / total):null);
return pf_35370.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf_35370,temp__4425__auto___35369,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35352,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35349,map__35349__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);
} else {
}

var G__35365_35371 = xhr;
var temp__4425__auto___35372 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4425__auto___35372)){
var x_35373 = temp__4425__auto___35372;
G__35365_35371.setTimeoutInterval((function (){var or__25812__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return (0);
}
})());
} else {
}

var temp__4425__auto___35374 = with_credentials_QMARK_;
if(cljs.core.truth_(temp__4425__auto___35374)){
var x_35375 = temp__4425__auto___35374;
G__35365_35371.setWithCredentials(true);
} else {
}

var temp__4425__auto___35376 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4425__auto___35376)){
var x_35377 = temp__4425__auto___35376;
G__35365_35371.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);
} else {
}


return xhr;
}catch (e35351){if((e35351 instanceof Error)){
var e = e35351;
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e35351;

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
var args__26889__auto__ = [];
var len__26882__auto___35382 = arguments.length;
var i__26883__auto___35383 = (0);
while(true){
if((i__26883__auto___35383 < len__26882__auto___35382)){
args__26889__auto__.push((arguments[i__26883__auto___35383]));

var G__35384 = (i__26883__auto___35383 + (1));
i__26883__auto___35383 = G__35384;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__35380){
var vec__35381 = p__35380;
var encoding = cljs.core.nth.call(null,vec__35381,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq35378){
var G__35379 = cljs.core.first.call(null,seq35378);
var seq35378__$1 = cljs.core.next.call(null,seq35378);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__35379,seq35378__$1);
});
taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode.call(null,taoensso.encore.qname.call(null,k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode.call(null,(function (){var or__25812__auto__ = taoensso.encore.as__QMARK_qname.call(null,v);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
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
return join.call(null,(function (){var iter__26592__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__35393(s__35394){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__35394__$1 = s__35394;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35394__$1);
if(temp__4425__auto__){
var s__35394__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35394__$2)){
var c__26590__auto__ = cljs.core.chunk_first.call(null,s__35394__$2);
var size__26591__auto__ = cljs.core.count.call(null,c__26590__auto__);
var b__35396 = cljs.core.chunk_buffer.call(null,size__26591__auto__);
if((function (){var i__35395 = (0);
while(true){
if((i__35395 < size__26591__auto__)){
var vec__35399 = cljs.core._nth.call(null,c__26590__auto__,i__35395);
var k = cljs.core.nth.call(null,vec__35399,(0),null);
var v = cljs.core.nth.call(null,vec__35399,(1),null);
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,v))){
cljs.core.chunk_append.call(null,b__35396,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__25812__auto__ = cljs.core.seq.call(null,v);
if(or__25812__auto__){
return or__25812__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__35401 = (i__35395 + (1));
i__35395 = G__35401;
continue;
} else {
var G__35402 = (i__35395 + (1));
i__35395 = G__35402;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35396),taoensso$encore$format_query_string_$_iter__35393.call(null,cljs.core.chunk_rest.call(null,s__35394__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35396),null);
}
} else {
var vec__35400 = cljs.core.first.call(null,s__35394__$2);
var k = cljs.core.nth.call(null,vec__35400,(0),null);
var v = cljs.core.nth.call(null,vec__35400,(1),null);
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,v))){
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__25812__auto__ = cljs.core.seq.call(null,v);
if(or__25812__auto__){
return or__25812__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__35393.call(null,cljs.core.rest.call(null,s__35394__$2)));
} else {
var G__35403 = cljs.core.rest.call(null,s__35394__$2);
s__35394__$1 = G__35403;
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
return iter__26592__auto__.call(null,m);
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
var args__26889__auto__ = [];
var len__26882__auto___35410 = arguments.length;
var i__26883__auto___35411 = (0);
while(true){
if((i__26883__auto___35411 < len__26882__auto___35410)){
args__26889__auto__.push((arguments[i__26883__auto___35411]));

var G__35412 = (i__26883__auto___35411 + (1));
i__26883__auto___35411 = G__35412;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__35406){
var vec__35407 = p__35406;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__35407,(0),null);
var encoding = cljs.core.nth.call(null,vec__35407,(1),null);
var _PERCENT_ = ((clojure.string.blank_QMARK_.call(null,s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?taoensso.encore.substr.call(null,s,(1)):s);
if(cljs.core.not.call(null,taoensso.encore.str_contains_QMARK_.call(null,s__$1,"="))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var m = cljs.core.reduce.call(null,((function (s__$1,vec__35407,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4423__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__35408 = temp__4423__auto__;
var k = cljs.core.nth.call(null,vec__35408,(0),null);
var v = cljs.core.nth.call(null,vec__35408,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__35407,keywordize_QMARK_,encoding))
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
}catch (e35409){if((e35409 instanceof Error)){
var __t = e35409;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(map? %)",__x,__t,null);
} else {
throw e35409;

}
}})())){
} else {
throw (new Error("Assert failed: (have? map? %)"));
}

return _PERCENT_;
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq35404){
var G__35405 = cljs.core.first.call(null,seq35404);
var seq35404__$1 = cljs.core.next.call(null,seq35404);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__35405,seq35404__$1);
});
taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__35414 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__35414,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__35414,(1),null);
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
var args__26889__auto__ = [];
var len__26882__auto___35419 = arguments.length;
var i__26883__auto___35420 = (0);
while(true){
if((i__26883__auto___35420 < len__26882__auto___35419)){
args__26889__auto__.push((arguments[i__26883__auto___35420]));

var G__35421 = (i__26883__auto___35420 + (1));
i__26883__auto___35420 = G__35421;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__35417){
var vec__35418 = p__35417;
var type = cljs.core.nth.call(null,vec__35418,(0),null);
var nplaces = cljs.core.nth.call(null,vec__35418,(1),null);
return taoensso.encore.round_STAR_.call(null,(function (){var or__25812__auto__ = type;
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq35415){
var G__35416 = cljs.core.first.call(null,seq35415);
var seq35415__$1 = cljs.core.next.call(null,seq35415);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__35416,seq35415__$1);
});
taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__26889__auto__ = [];
var len__26882__auto___35426 = arguments.length;
var i__26883__auto___35427 = (0);
while(true){
if((i__26883__auto___35427 < len__26882__auto___35426)){
args__26889__auto__.push((arguments[i__26883__auto___35427]));

var G__35428 = (i__26883__auto___35427 + (1));
i__26883__auto___35427 = G__35428;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__35424){
var vec__35425 = p__35424;
var nattempt = cljs.core.nth.call(null,vec__35425,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__25812__auto__ = nattempt;
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return (0);
}
})()));
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq35422){
var G__35423 = cljs.core.first.call(null,seq35422);
var seq35422__$1 = cljs.core.next.call(null,seq35422);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35423,seq35422__$1);
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
var G__35429__delegate = function (args){
var temp__4423__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var backoff_ms = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__35429 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35430__i = 0, G__35430__a = new Array(arguments.length -  0);
while (G__35430__i < G__35430__a.length) {G__35430__a[G__35430__i] = arguments[G__35430__i + 0]; ++G__35430__i;}
  args = new cljs.core.IndexedSeq(G__35430__a,0);
} 
return G__35429__delegate.call(this,args);};
G__35429.cljs$lang$maxFixedArity = 0;
G__35429.cljs$lang$applyTo = (function (arglist__35431){
var args = cljs.core.seq(arglist__35431);
return G__35429__delegate(args);
});
G__35429.cljs$core$IFn$_invoke$arity$variadic = G__35429__delegate;
return G__35429;
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
var args__26889__auto__ = [];
var len__26882__auto___35446 = arguments.length;
var i__26883__auto___35447 = (0);
while(true){
if((i__26883__auto___35447 < len__26882__auto___35446)){
args__26889__auto__.push((arguments[i__26883__auto___35447]));

var G__35448 = (i__26883__auto___35447 + (1));
i__26883__auto___35447 = G__35448;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq35432){
var G__35433 = cljs.core.first.call(null,seq35432);
var seq35432__$1 = cljs.core.next.call(null,seq35432);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__35433,seq35432__$1);
});

taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__26889__auto__ = [];
var len__26882__auto___35449 = arguments.length;
var i__26883__auto___35450 = (0);
while(true){
if((i__26883__auto___35450 < len__26882__auto___35449)){
args__26889__auto__.push((arguments[i__26883__auto___35450]));

var G__35451 = (i__26883__auto___35450 + (1));
i__26883__auto___35450 = G__35451;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq35434){
var G__35435 = cljs.core.first.call(null,seq35434);
var seq35434__$1 = cljs.core.next.call(null,seq35434);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__35435,seq35434__$1);
});

taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__26889__auto__ = [];
var len__26882__auto___35452 = arguments.length;
var i__26883__auto___35453 = (0);
while(true){
if((i__26883__auto___35453 < len__26882__auto___35452)){
args__26889__auto__.push((arguments[i__26883__auto___35453]));

var G__35454 = (i__26883__auto___35453 + (1));
i__26883__auto___35453 = G__35454;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq35436){
var G__35437 = cljs.core.first.call(null,seq35436);
var seq35436__$1 = cljs.core.next.call(null,seq35436);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__35437,seq35436__$1);
});

taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__26889__auto__ = [];
var len__26882__auto___35455 = arguments.length;
var i__26883__auto___35456 = (0);
while(true){
if((i__26883__auto___35456 < len__26882__auto___35455)){
args__26889__auto__.push((arguments[i__26883__auto___35456]));

var G__35457 = (i__26883__auto___35456 + (1));
i__26883__auto___35456 = G__35457;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("WARN: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq35438){
var G__35439 = cljs.core.first.call(null,seq35438);
var seq35438__$1 = cljs.core.next.call(null,seq35438);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__35439,seq35438__$1);
});

taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__26889__auto__ = [];
var len__26882__auto___35458 = arguments.length;
var i__26883__auto___35459 = (0);
while(true){
if((i__26883__auto___35459 < len__26882__auto___35458)){
args__26889__auto__.push((arguments[i__26883__auto___35459]));

var G__35460 = (i__26883__auto___35459 + (1));
i__26883__auto___35459 = G__35460;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("ERROR: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq35440){
var G__35441 = cljs.core.first.call(null,seq35440);
var seq35440__$1 = cljs.core.next.call(null,seq35440);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__35441,seq35440__$1);
});

taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__26889__auto__ = [];
var len__26882__auto___35461 = arguments.length;
var i__26883__auto___35462 = (0);
while(true){
if((i__26883__auto___35462 < len__26882__auto___35461)){
args__26889__auto__.push((arguments[i__26883__auto___35462]));

var G__35463 = (i__26883__auto___35462 + (1));
i__26883__auto___35462 = G__35463;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("FATAL: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq35442){
var G__35443 = cljs.core.first.call(null,seq35442);
var seq35442__$1 = cljs.core.next.call(null,seq35442);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__35443,seq35442__$1);
});

taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__26889__auto__ = [];
var len__26882__auto___35464 = arguments.length;
var i__26883__auto___35465 = (0);
while(true){
if((i__26883__auto___35465 < len__26882__auto___35464)){
args__26889__auto__.push((arguments[i__26883__auto___35465]));

var G__35466 = (i__26883__auto___35465 + (1));
i__26883__auto___35465 = G__35466;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq35444){
var G__35445 = cljs.core.first.call(null,seq35444);
var seq35444__$1 = cljs.core.next.call(null,seq35444);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__35445,seq35444__$1);
});
/**
 * Deprecated
 */
taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__26889__auto__ = [];
var len__26882__auto___35473 = arguments.length;
var i__26883__auto___35474 = (0);
while(true){
if((i__26883__auto___35474 < len__26882__auto___35473)){
args__26889__auto__.push((arguments[i__26883__auto___35474]));

var G__35475 = (i__26883__auto___35474 + (1));
i__26883__auto___35474 = G__35475;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__35471){
var vec__35472 = p__35471;
var _QMARK_comparator = cljs.core.nth.call(null,vec__35472,(0),null);
var comparator = (function (){var or__25812__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__35472,_QMARK_comparator){
return (function (p1__35467_SHARP_,p2__35468_SHARP_){
if((comparator.call(null,p1__35467_SHARP_,p2__35468_SHARP_) > (0))){
return p2__35468_SHARP_;
} else {
return p1__35467_SHARP_;
}
});})(comparator,vec__35472,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq35469){
var G__35470 = cljs.core.first.call(null,seq35469);
var seq35469__$1 = cljs.core.next.call(null,seq35469);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__35470,seq35469__$1);
});
/**
 * Deprecated
 */
taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__26889__auto__ = [];
var len__26882__auto___35482 = arguments.length;
var i__26883__auto___35483 = (0);
while(true){
if((i__26883__auto___35483 < len__26882__auto___35482)){
args__26889__auto__.push((arguments[i__26883__auto___35483]));

var G__35484 = (i__26883__auto___35483 + (1));
i__26883__auto___35483 = G__35484;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__35480){
var vec__35481 = p__35480;
var _QMARK_comparator = cljs.core.nth.call(null,vec__35481,(0),null);
var comparator = (function (){var or__25812__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__35481,_QMARK_comparator){
return (function (p1__35476_SHARP_,p2__35477_SHARP_){
if((comparator.call(null,p1__35476_SHARP_,p2__35477_SHARP_) < (0))){
return p2__35477_SHARP_;
} else {
return p1__35476_SHARP_;
}
});})(comparator,vec__35481,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq35478){
var G__35479 = cljs.core.first.call(null,seq35478);
var seq35478__$1 = cljs.core.next.call(null,seq35478);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__35479,seq35478__$1);
});
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__25812__auto__ = x;
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

//# sourceMappingURL=encore.js.map