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
var vec__34751 = taoensso.encore.encore_version;
var xc = cljs.core.nth.call(null,vec__34751,(0),null);
var yc = cljs.core.nth.call(null,vec__34751,(1),null);
var zc = cljs.core.nth.call(null,vec__34751,(2),null);
var vec__34752 = ((cljs.core.vector_QMARK_.call(null,min_version))?min_version:cljs.core.re_seq.call(null,/\d+/,[cljs.core.str(min_version)].join('')));
var xm = cljs.core.nth.call(null,vec__34752,(0),null);
var ym = cljs.core.nth.call(null,vec__34752,(1),null);
var zm = cljs.core.nth.call(null,vec__34752,(2),null);
var vec__34753 = cljs.core.mapv.call(null,((function (vec__34751,xc,yc,zc,vec__34752,xm,ym,zm){
return (function (p1__34747_SHARP_){
var or__25809__auto__ = taoensso.encore.as__QMARK_int.call(null,p1__34747_SHARP_);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return (0);
}
});})(vec__34751,xc,yc,zc,vec__34752,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.call(null,vec__34753,(0),null);
var ym__$1 = cljs.core.nth.call(null,vec__34753,(1),null);
var zm__$1 = cljs.core.nth.call(null,vec__34753,(2),null);
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
var vec__34756 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.call(null,vec__34756,(0),null);
var macro_args__$1 = cljs.core.nth.call(null,vec__34756,(1),null);
var vec__34757 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.call(null,vec__34757,(0),null);
var macro_args__$2 = cljs.core.nth.call(null,vec__34757,(1),null);
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
var args34758 = [];
var len__26879__auto___34761 = arguments.length;
var i__26880__auto___34762 = (0);
while(true){
if((i__26880__auto___34762 < len__26879__auto___34761)){
args34758.push((arguments[i__26880__auto___34762]));

var G__34763 = (i__26880__auto___34762 + (1));
i__26880__auto___34762 = G__34763;
continue;
} else {
}
break;
}

var G__34760 = args34758.length;
switch (G__34760) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34758.length)].join('')));

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
var args34765 = [];
var len__26879__auto___34770 = arguments.length;
var i__26880__auto___34771 = (0);
while(true){
if((i__26880__auto___34771 < len__26879__auto___34770)){
args34765.push((arguments[i__26880__auto___34771]));

var G__34772 = (i__26880__auto___34771 + (1));
i__26880__auto___34771 = G__34772;
continue;
} else {
}
break;
}

var G__34767 = args34765.length;
switch (G__34767) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34765.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.call(null,null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_34768 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_34769 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.call(null,x);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_34769;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_34768;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;
taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});
/**
 * Returns data map iff `x` is an error of any type on platform
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var temp__4425__auto__ = (function (){var or__25809__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
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
var or__25809__auto__ = taoensso.encore.as__QMARK_nblank.call(null,x);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"nblank","nblank",626815585),x);
}
});
taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__25809__auto__ = taoensso.encore.as__QMARK_kw.call(null,x);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"kw","kw",1158308175),x);
}
});
taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__25809__auto__ = taoensso.encore.as__QMARK_name.call(null,x);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"name","name",1843675177),x);
}
});
taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__25809__auto__ = taoensso.encore.as__QMARK_qname.call(null,x);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
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
var or__25809__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"int","int",-1741416922),x);
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__25809__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"float","float",-1732389368),x);
}
});
taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__25809__auto__ = taoensso.encore.as__QMARK_email.call(null,x);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x);
}
});
taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__25809__auto__ = taoensso.encore.as__QMARK_nemail.call(null,x);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
});
taoensso.encore.nnil_EQ_ = (function taoensso$encore$nnil_EQ_(var_args){
var args34778 = [];
var len__26879__auto___34784 = arguments.length;
var i__26880__auto___34785 = (0);
while(true){
if((i__26880__auto___34785 < len__26879__auto___34784)){
args34778.push((arguments[i__26880__auto___34785]));

var G__34786 = (i__26880__auto___34785 + (1));
i__26880__auto___34785 = G__34786;
continue;
} else {
}
break;
}

var G__34783 = args34778.length;
switch (G__34783) {
case 2:
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26898__auto__ = (new cljs.core.IndexedSeq(args34778.slice((2)),(0),null));
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26898__auto__);

}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var and__25797__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__25797__auto__)){
return cljs.core._EQ_.call(null,x,y);
} else {
return and__25797__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__25797__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__25797__auto__)){
return cljs.core.apply.call(null,cljs.core._EQ_,x,y,more);
} else {
return and__25797__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$lang$applyTo = (function (seq34779){
var G__34780 = cljs.core.first.call(null,seq34779);
var seq34779__$1 = cljs.core.next.call(null,seq34779);
var G__34781 = cljs.core.first.call(null,seq34779__$1);
var seq34779__$2 = cljs.core.next.call(null,seq34779__$1);
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__34780,G__34781,seq34779__$2);
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
var args__26886__auto__ = [];
var len__26879__auto___34792 = arguments.length;
var i__26880__auto___34793 = (0);
while(true){
if((i__26880__auto___34793 < len__26879__auto___34792)){
args__26886__auto__.push((arguments[i__26880__auto___34793]));

var G__34794 = (i__26880__auto___34793 + (1));
i__26880__auto___34793 = G__34794;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__34790){
var vec__34791 = p__34790;
var no_slash_QMARK_ = cljs.core.nth.call(null,vec__34791,(0),null);
var parts = cljs.core.reduce.call(null,((function (vec__34791,no_slash_QMARK_){
return (function (acc,in$){
if(cljs.core.truth_(in$)){
return cljs.core.into.call(null,acc,taoensso.encore.explode_keyword.call(null,in$));
} else {
return acc;
}
});})(vec__34791,no_slash_QMARK_))
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

taoensso.encore.merge_keywords.cljs$lang$applyTo = (function (seq34788){
var G__34789 = cljs.core.first.call(null,seq34788);
var seq34788__$1 = cljs.core.next.call(null,seq34788);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic(G__34789,seq34788__$1);
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
var args34795 = [];
var len__26879__auto___34799 = arguments.length;
var i__26880__auto___34800 = (0);
while(true){
if((i__26880__auto___34800 < len__26879__auto___34799)){
args34795.push((arguments[i__26880__auto___34800]));

var G__34801 = (i__26880__auto___34800 + (1));
i__26880__auto___34800 = G__34801;
continue;
} else {
}
break;
}

var G__34797 = args34795.length;
switch (G__34797) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34795.length)].join('')));

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
var rounded = (function (){var G__34798 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34798) {
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
var args__26886__auto__ = [];
var len__26879__auto___34810 = arguments.length;
var i__26880__auto___34811 = (0);
while(true){
if((i__26880__auto___34811 < len__26879__auto___34810)){
args__26886__auto__.push((arguments[i__26880__auto___34811]));

var G__34812 = (i__26880__auto___34811 + (1));
i__26880__auto___34811 = G__34812;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic = (function (nattempt,p__34806){
var vec__34807 = p__34806;
var map__34808 = cljs.core.nth.call(null,vec__34807,(0),null);
var map__34808__$1 = ((((!((map__34808 == null)))?((((map__34808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34808):map__34808);
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__34808__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__34808__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__34808__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var binary_exp = Math.pow((2),(nattempt - (1)));
var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);
return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__26140__auto__ = cljs.core.long$.call(null,min_SINGLEQUOTE_);
var y__26141__auto__ = cljs.core.long$.call(null,time);
return ((x__26140__auto__ > y__26141__auto__) ? x__26140__auto__ : y__26141__auto__);
})():time);
var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__26147__auto__ = cljs.core.long$.call(null,max_SINGLEQUOTE_);
var y__26148__auto__ = cljs.core.long$.call(null,time__$1);
return ((x__26147__auto__ < y__26148__auto__) ? x__26147__auto__ : y__26148__auto__);
})():time__$1);
return time__$2;
})());
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = (1);

taoensso.encore.exp_backoff.cljs$lang$applyTo = (function (seq34804){
var G__34805 = cljs.core.first.call(null,seq34804);
var seq34804__$1 = cljs.core.next.call(null,seq34804);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic(G__34805,seq34804__$1);
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
var args__26886__auto__ = [];
var len__26879__auto___34830 = arguments.length;
var i__26880__auto___34831 = (0);
while(true){
if((i__26880__auto___34831 < len__26879__auto___34830)){
args__26886__auto__.push((arguments[i__26880__auto___34831]));

var G__34832 = (i__26880__auto___34831 + (1));
i__26880__auto___34831 = G__34832;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((0) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__26887__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__34826){
var map__34827 = p__34826;
var map__34827__$1 = ((((!((map__34827 == null)))?((((map__34827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34827):map__34827);
var opts = map__34827__$1;
var years = cljs.core.get.call(null,map__34827__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__34827__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__34827__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__34827__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__34827__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__34827__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__34827__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__34827__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__34827__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core.truth_(cljs.core.mapv.call(null,((function (map__34827,map__34827__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
var __x = __in;
try{if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null).call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e34829){if((e34829 instanceof Error)){
var __t = e34829;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__x,__t,null);
} else {
throw e34829;

}
}});})(map__34827,map__34827__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts)))){
} else {
throw (new Error("Assert failed: (have #{:msecs :secs :months :days :mins :hours :years :ms :weeks} :in (keys opts))"));
}

return taoensso.encore.round_STAR_.call(null,(((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq34825){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34825));
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
var args34837 = [];
var len__26879__auto___34844 = arguments.length;
var i__26880__auto___34845 = (0);
while(true){
if((i__26880__auto___34845 < len__26879__auto___34844)){
args34837.push((arguments[i__26880__auto___34845]));

var G__34846 = (i__26880__auto___34845 + (1));
i__26880__auto___34845 = G__34846;
continue;
} else {
}
break;
}

var G__34843 = args34837.length;
switch (G__34843) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__26898__auto__ = (new cljs.core.IndexedSeq(args34837.slice((3)),(0),null));
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26898__auto__);

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

taoensso.encore.oget.cljs$lang$applyTo = (function (seq34838){
var G__34839 = cljs.core.first.call(null,seq34838);
var seq34838__$1 = cljs.core.next.call(null,seq34838);
var G__34840 = cljs.core.first.call(null,seq34838__$1);
var seq34838__$2 = cljs.core.next.call(null,seq34838__$1);
var G__34841 = cljs.core.first.call(null,seq34838__$2);
var seq34838__$3 = cljs.core.next.call(null,seq34838__$2);
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic(G__34839,G__34840,G__34841,seq34838__$3);
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
var vec__34849 = coll;
var c1 = cljs.core.nth.call(null,vec__34849,(0),null);
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
var vec__34851 = v;
var v1 = cljs.core.nth.call(null,vec__34851,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
} else {
return null;
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var args34852 = [];
var len__26879__auto___34858 = arguments.length;
var i__26880__auto___34859 = (0);
while(true){
if((i__26880__auto___34859 < len__26879__auto___34858)){
args34852.push((arguments[i__26880__auto___34859]));

var G__34860 = (i__26880__auto___34859 + (1));
i__26880__auto___34859 = G__34860;
continue;
} else {
}
break;
}

var G__34857 = args34852.length;
switch (G__34857) {
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
var argseq__26898__auto__ = (new cljs.core.IndexedSeq(args34852.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26898__auto__);

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

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq34853){
var G__34854 = cljs.core.first.call(null,seq34853);
var seq34853__$1 = cljs.core.next.call(null,seq34853);
var G__34855 = cljs.core.first.call(null,seq34853__$1);
var seq34853__$2 = cljs.core.next.call(null,seq34853__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__34854,G__34855,seq34853__$2);
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
cljs.core.reduce_kv.call(null,(function (p1__34864_SHARP_,p2__34862_SHARP_,p3__34863_SHARP_){
return proc.call(null,p2__34862_SHARP_,p3__34863_SHARP_);
}),null,m);

return null;
});
taoensso.encore.run_BANG__STAR_ = (function taoensso$encore$run_BANG__STAR_(proc,coll){
cljs.core.reduce.call(null,(function (p1__34866_SHARP_,p2__34865_SHARP_){
return proc.call(null,p2__34865_SHARP_);
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
return taoensso.encore.revery_QMARK_.call(null,(function (p1__34867_SHARP_){
return taoensso.encore.nnil_QMARK_.call(null,cljs.core.get.call(null,m,p1__34867_SHARP_));
}),ks);
});
/**
 * Like `update-in` but faster, more flexible, and simpler (less ambiguous)
 */
taoensso.encore.update_in_STAR_ = (function taoensso$encore$update_in_STAR_(m,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
return f.call(null,m);
} else {
var vec__34869 = ks;
var k = cljs.core.nth.call(null,vec__34869,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__34869,(1));
if(cljs.core.truth_(ks__$1)){
return cljs.core.assoc.call(null,m,k,taoensso$encore$update_in_STAR_.call(null,cljs.core.get.call(null,m,k),ks__$1,f));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
}
}
});
taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__26147__auto__ = signed_idx;
var y__26148__auto__ = max_idx;
return ((x__26147__auto__ < y__26148__auto__) ? x__26147__auto__ : y__26148__auto__);
} else {
var x__26140__auto__ = (0);
var y__26141__auto__ = (signed_idx + max_idx);
return ((x__26140__auto__ > y__26141__auto__) ? x__26140__auto__ : y__26141__auto__);
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
var args__26886__auto__ = [];
var len__26879__auto___34876 = arguments.length;
var i__26880__auto___34877 = (0);
while(true){
if((i__26880__auto___34877 < len__26879__auto___34876)){
args__26886__auto__.push((arguments[i__26880__auto___34877]));

var G__34878 = (i__26880__auto___34877 + (1));
i__26880__auto___34877 = G__34878;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((2) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26887__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__34873){
var map__34874 = p__34873;
var map__34874__$1 = ((((!((map__34874 == null)))?((((map__34874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34874):map__34874);
var max_len = cljs.core.get.call(null,map__34874__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__34874__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
if(cljs.core.truth_((function (){var __x = max_len;
if(cljs.core.truth_(((function (__x,map__34874,map__34874__$1,max_len,end_idx){
return (function (__x__$1){
var or__25809__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nneg_int_QMARK_).call(null,__x__$1);
}
});})(__x,map__34874,map__34874__$1,max_len,end_idx))
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
var end_idx_STAR_ = cljs.core.long$.call(null,(cljs.core.truth_(max_len)?(function (){var n1__21298__auto__ = (start_idx_STAR_ + max_len);
var n2__21299__auto__ = xlen;
if((n1__21298__auto__ > n2__21299__auto__)){
return n2__21299__auto__;
} else {
return n1__21298__auto__;
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

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq34870){
var G__34871 = cljs.core.first.call(null,seq34870);
var seq34870__$1 = cljs.core.next.call(null,seq34870);
var G__34872 = cljs.core.first.call(null,seq34870__$1);
var seq34870__$2 = cljs.core.next.call(null,seq34870__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__34871,G__34872,seq34870__$2);
});
/**
 * Like `subvec` but uses `sub-indexes`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__26886__auto__ = [];
var len__26879__auto___34886 = arguments.length;
var i__26880__auto___34887 = (0);
while(true){
if((i__26880__auto___34887 < len__26879__auto___34886)){
args__26886__auto__.push((arguments[i__26880__auto___34887]));

var G__34888 = (i__26880__auto___34887 + (1));
i__26880__auto___34887 = G__34888;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((2) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26887__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__34882){
var vec__34883 = p__34882;
var _QMARK_max_len = cljs.core.nth.call(null,vec__34883,(0),null);
if(cljs.core.truth_((function (){var __x = v;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e34884){if((e34884 instanceof Error)){
var __t = e34884;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(vector? v)",__x,__t,null);
} else {
throw e34884;

}
}})())){
} else {
throw (new Error("Assert failed: (have? vector? v)"));
}

var vec__34885 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__34885,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__34885,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq34879){
var G__34880 = cljs.core.first.call(null,seq34879);
var seq34879__$1 = cljs.core.next.call(null,seq34879);
var G__34881 = cljs.core.first.call(null,seq34879__$1);
var seq34879__$2 = cljs.core.next.call(null,seq34879__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__34880,G__34881,seq34879__$2);
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var args34893 = [];
var len__26879__auto___34896 = arguments.length;
var i__26880__auto___34897 = (0);
while(true){
if((i__26880__auto___34897 < len__26879__auto___34896)){
args34893.push((arguments[i__26880__auto___34897]));

var G__34898 = (i__26880__auto___34897 + (1));
i__26880__auto___34897 = G__34898;
continue;
} else {
}
break;
}

var G__34895 = args34893.length;
switch (G__34895) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34893.length)].join('')));

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
var args34902 = [];
var len__26879__auto___34905 = arguments.length;
var i__26880__auto___34906 = (0);
while(true){
if((i__26880__auto___34906 < len__26879__auto___34905)){
args34902.push((arguments[i__26880__auto___34906]));

var G__34907 = (i__26880__auto___34906 + (1));
i__26880__auto___34906 = G__34907;
continue;
} else {
}
break;
}

var G__34904 = args34902.length;
switch (G__34904) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34902.length)].join('')));

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
var args__26886__auto__ = [];
var len__26879__auto___34912 = arguments.length;
var i__26880__auto___34913 = (0);
while(true){
if((i__26880__auto___34913 < len__26879__auto___34912)){
args__26886__auto__.push((arguments[i__26880__auto___34913]));

var G__34914 = (i__26880__auto___34913 + (1));
i__26880__auto___34913 = G__34914;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((2) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((2)),(0),null)):null);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26887__auto__);
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_ks){
return taoensso.encore.update_in_STAR_.call(null,m,ks,(function (m__$1){
return cljs.core.apply.call(null,cljs.core.dissoc,m__$1,dissoc_ks);
}));
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (2);

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq34909){
var G__34910 = cljs.core.first.call(null,seq34909);
var seq34909__$1 = cljs.core.next.call(null,seq34909);
var G__34911 = cljs.core.first.call(null,seq34909__$1);
var seq34909__$2 = cljs.core.next.call(null,seq34909__$1);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__34910,G__34911,seq34909__$2);
});
/**
 * Assocs each kv iff its value is not nil
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args__26886__auto__ = [];
var len__26879__auto___34927 = arguments.length;
var i__26880__auto___34928 = (0);
while(true){
if((i__26880__auto___34928 < len__26879__auto___34927)){
args__26886__auto__.push((arguments[i__26880__auto___34928]));

var G__34929 = (i__26880__auto___34928 + (1));
i__26880__auto___34928 = G__34929;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,kvs);
}catch (e34917){if((e34917 instanceof Error)){
var __t = e34917;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e34917;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e34918){if((e34918 instanceof Error)){
var __t = e34918;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",__x,__t,null);
} else {
throw e34918;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__25809__auto__ = m;
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__26589__auto__ = (function taoensso$encore$iter__34919(s__34920){
return (new cljs.core.LazySeq(null,(function (){
var s__34920__$1 = s__34920;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34920__$1);
if(temp__4425__auto__){
var s__34920__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34920__$2)){
var c__26587__auto__ = cljs.core.chunk_first.call(null,s__34920__$2);
var size__26588__auto__ = cljs.core.count.call(null,c__26587__auto__);
var b__34922 = cljs.core.chunk_buffer.call(null,size__26588__auto__);
if((function (){var i__34921 = (0);
while(true){
if((i__34921 < size__26588__auto__)){
var vec__34925 = cljs.core._nth.call(null,c__26587__auto__,i__34921);
var k = cljs.core.nth.call(null,vec__34925,(0),null);
var v = cljs.core.nth.call(null,vec__34925,(1),null);
if(!((v == null))){
cljs.core.chunk_append.call(null,b__34922,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__34930 = (i__34921 + (1));
i__34921 = G__34930;
continue;
} else {
var G__34931 = (i__34921 + (1));
i__34921 = G__34931;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34922),taoensso$encore$iter__34919.call(null,cljs.core.chunk_rest.call(null,s__34920__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34922),null);
}
} else {
var vec__34926 = cljs.core.first.call(null,s__34920__$2);
var k = cljs.core.nth.call(null,vec__34926,(0),null);
var v = cljs.core.nth.call(null,vec__34926,(1),null);
if(!((v == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__34919.call(null,cljs.core.rest.call(null,s__34920__$2)));
} else {
var G__34932 = cljs.core.rest.call(null,s__34920__$2);
s__34920__$1 = G__34932;
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
return iter__26589__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq34915){
var G__34916 = cljs.core.first.call(null,seq34915);
var seq34915__$1 = cljs.core.next.call(null,seq34915);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__34916,seq34915__$1);
});
/**
 * Assocs each kv iff its val is truthy
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args__26886__auto__ = [];
var len__26879__auto___34945 = arguments.length;
var i__26880__auto___34946 = (0);
while(true){
if((i__26880__auto___34946 < len__26879__auto___34945)){
args__26886__auto__.push((arguments[i__26880__auto___34946]));

var G__34947 = (i__26880__auto___34946 + (1));
i__26880__auto___34946 = G__34947;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,kvs);
}catch (e34935){if((e34935 instanceof Error)){
var __t = e34935;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e34935;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e34936){if((e34936 instanceof Error)){
var __t = e34936;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",__x,__t,null);
} else {
throw e34936;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__25809__auto__ = m;
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__26589__auto__ = (function taoensso$encore$iter__34937(s__34938){
return (new cljs.core.LazySeq(null,(function (){
var s__34938__$1 = s__34938;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34938__$1);
if(temp__4425__auto__){
var s__34938__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34938__$2)){
var c__26587__auto__ = cljs.core.chunk_first.call(null,s__34938__$2);
var size__26588__auto__ = cljs.core.count.call(null,c__26587__auto__);
var b__34940 = cljs.core.chunk_buffer.call(null,size__26588__auto__);
if((function (){var i__34939 = (0);
while(true){
if((i__34939 < size__26588__auto__)){
var vec__34943 = cljs.core._nth.call(null,c__26587__auto__,i__34939);
var k = cljs.core.nth.call(null,vec__34943,(0),null);
var v = cljs.core.nth.call(null,vec__34943,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__34940,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__34948 = (i__34939 + (1));
i__34939 = G__34948;
continue;
} else {
var G__34949 = (i__34939 + (1));
i__34939 = G__34949;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34940),taoensso$encore$iter__34937.call(null,cljs.core.chunk_rest.call(null,s__34938__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34940),null);
}
} else {
var vec__34944 = cljs.core.first.call(null,s__34938__$2);
var k = cljs.core.nth.call(null,vec__34944,(0),null);
var v = cljs.core.nth.call(null,vec__34944,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__34937.call(null,cljs.core.rest.call(null,s__34938__$2)));
} else {
var G__34950 = cljs.core.rest.call(null,s__34938__$2);
s__34938__$1 = G__34950;
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
return iter__26589__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq34933){
var G__34934 = cljs.core.first.call(null,seq34933);
var seq34933__$1 = cljs.core.next.call(null,seq34933);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__34934,seq34933__$1);
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args34951 = [];
var len__26879__auto___34954 = arguments.length;
var i__26880__auto___34955 = (0);
while(true){
if((i__26880__auto___34955 < len__26879__auto___34954)){
args34951.push((arguments[i__26880__auto___34955]));

var G__34956 = (i__26880__auto___34955 + (1));
i__26880__auto___34955 = G__34956;
continue;
} else {
}
break;
}

var G__34953 = args34951.length;
switch (G__34953) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34951.length)].join('')));

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
var args__26886__auto__ = [];
var len__26879__auto___34959 = arguments.length;
var i__26880__auto___34960 = (0);
while(true){
if((i__26880__auto___34960 < len__26879__auto___34959)){
args__26886__auto__.push((arguments[i__26880__auto___34960]));

var G__34961 = (i__26880__auto___34960 + (1));
i__26880__auto___34960 = G__34961;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((0) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26887__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq34958){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34958));
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
var args__26886__auto__ = [];
var len__26879__auto___34964 = arguments.length;
var i__26880__auto___34965 = (0);
while(true){
if((i__26880__auto___34965 < len__26879__auto___34964)){
args__26886__auto__.push((arguments[i__26880__auto___34965]));

var G__34966 = (i__26880__auto___34965 + (1));
i__26880__auto___34965 = G__34966;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),taoensso.encore.seq_kvs.call(null,cljs.core.last.call(null,args))));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq34962){
var G__34963 = cljs.core.first.call(null,seq34962);
var seq34962__$1 = cljs.core.next.call(null,seq34962);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__34963,seq34962__$1);
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
if(cljs.core.truth_((function (){var and__25797__auto__ = predk.call(null,k);
if(cljs.core.truth_(and__25797__auto__)){
return predv.call(null,v);
} else {
return and__25797__auto__;
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
return cljs.core.transduce.call(null,cljs.core.partition_all.call(null,(2)),cljs.core.completing.call(null,(function (acc,p__34973){
var vec__34974 = p__34973;
var k = cljs.core.nth.call(null,vec__34974,(0),null);
var v = cljs.core.nth.call(null,vec__34974,(1),null);
return cljs.core.assoc_BANG_.call(null,acc,kf.call(null,k,v),vf.call(null,k,v));
}),cljs.core.persistent_BANG_),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),kvs);
});
/**
 * Cross between `hash-map` & `map-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__26886__auto__ = [];
var len__26879__auto___34979 = arguments.length;
var i__26880__auto___34980 = (0);
while(true){
if((i__26880__auto___34980 < len__26879__auto___34979)){
args__26886__auto__.push((arguments[i__26880__auto___34980]));

var G__34981 = (i__26880__auto___34980 + (1));
i__26880__auto___34980 = G__34981;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__34977){
var vec__34978 = p__34977;
var kf = cljs.core.nth.call(null,vec__34978,(0),null);
var vf = cljs.core.nth.call(null,vec__34978,(1),null);
if(cljs.core.empty_QMARK_.call(null,kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__34978,kf,vf){
return (function (_,v){
return v;
});})(vec__34978,kf,vf))
:vf
);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__34978,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__34978,kf,vf))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1,vec__34978,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1,vec__34978,kf,vf))
:kf
));
return taoensso.encore.as_map_STAR_.call(null,kf__$1,vf__$1,kvs);
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq34975){
var G__34976 = cljs.core.first.call(null,seq34975);
var seq34975__$1 = cljs.core.next.call(null,seq34975);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__34976,seq34975__$1);
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
var G__34982 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__34983 = cljs.core.next.call(null,ks__$1);
var G__34984 = cljs.core.next.call(null,vs__$1);
m = G__34982;
ks__$1 = G__34983;
vs__$1 = G__34984;
continue;
}
break;
}
});
/**
 * Like `into` but supports multiple "from"s
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args34985 = [];
var len__26879__auto___34991 = arguments.length;
var i__26880__auto___34992 = (0);
while(true){
if((i__26880__auto___34992 < len__26879__auto___34991)){
args34985.push((arguments[i__26880__auto___34992]));

var G__34993 = (i__26880__auto___34992 + (1));
i__26880__auto___34992 = G__34993;
continue;
} else {
}
break;
}

var G__34990 = args34985.length;
switch (G__34990) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26898__auto__ = (new cljs.core.IndexedSeq(args34985.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26898__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq34986){
var G__34987 = cljs.core.first.call(null,seq34986);
var seq34986__$1 = cljs.core.next.call(null,seq34986);
var G__34988 = cljs.core.first.call(null,seq34986__$1);
var seq34986__$2 = cljs.core.next.call(null,seq34986__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__34987,G__34988,seq34986__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);
/**
 * Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args34995 = [];
var len__26879__auto___35001 = arguments.length;
var i__26880__auto___35002 = (0);
while(true){
if((i__26880__auto___35002 < len__26879__auto___35001)){
args34995.push((arguments[i__26880__auto___35002]));

var G__35003 = (i__26880__auto___35002 + (1));
i__26880__auto___35002 = G__35003;
continue;
} else {
}
break;
}

var G__35000 = args34995.length;
switch (G__35000) {
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
var argseq__26898__auto__ = (new cljs.core.IndexedSeq(args34995.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26898__auto__);

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

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq34996){
var G__34997 = cljs.core.first.call(null,seq34996);
var seq34996__$1 = cljs.core.next.call(null,seq34996);
var G__34998 = cljs.core.first.call(null,seq34996__$1);
var seq34996__$2 = cljs.core.next.call(null,seq34996__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__34997,G__34998,seq34996__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__35011,seen__$1){
while(true){
var vec__35012 = p__35011;
var v = cljs.core.nth.call(null,vec__35012,(0),null);
var xs__$1 = vec__35012;
var temp__4425__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4425__auto__){
var s = temp__4425__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__35013 = cljs.core.rest.call(null,s);
var G__35014 = seen__$1;
p__35011 = G__35013;
seen__$1 = G__35014;
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
var args35019 = [];
var len__26879__auto___35022 = arguments.length;
var i__26880__auto___35023 = (0);
while(true){
if((i__26880__auto___35023 < len__26879__auto___35022)){
args35019.push((arguments[i__26880__auto___35023]));

var G__35024 = (i__26880__auto___35023 + (1));
i__26880__auto___35023 = G__35024;
continue;
} else {
}
break;
}

var G__35021 = args35019.length;
switch (G__35021) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35019.length)].join('')));

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
var G__35026 = null;
var G__35026__0 = (function (){
return rf.call(null);
});
var G__35026__1 = (function (acc){
return rf.call(null,acc);
});
var G__35026__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_.call(null,seen_,cljs.core.conj.call(null,cljs.core._deref.call(null,seen_),k));

return rf.call(null,acc,input);
}
});
G__35026 = function(acc,input){
switch(arguments.length){
case 0:
return G__35026__0.call(this);
case 1:
return G__35026__1.call(this,acc);
case 2:
return G__35026__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35026.cljs$core$IFn$_invoke$arity$0 = G__35026__0;
G__35026.cljs$core$IFn$_invoke$arity$1 = G__35026__1;
G__35026.cljs$core$IFn$_invoke$arity$2 = G__35026__2;
return G__35026;
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
var args35031 = [];
var len__26879__auto___35036 = arguments.length;
var i__26880__auto___35037 = (0);
while(true){
if((i__26880__auto___35037 < len__26879__auto___35036)){
args35031.push((arguments[i__26880__auto___35037]));

var G__35038 = (i__26880__auto___35037 + (1));
i__26880__auto___35037 = G__35038;
continue;
} else {
}
break;
}

var G__35033 = args35031.length;
switch (G__35033) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35031.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.call(null,cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.call(null,(function (p__35034,in$){
var vec__35035 = p__35034;
var v = cljs.core.nth.call(null,vec__35035,(0),null);
var seen = cljs.core.nth.call(null,vec__35035,(1),null);
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
var args__26886__auto__ = [];
var len__26879__auto___35042 = arguments.length;
var i__26880__auto___35043 = (0);
while(true){
if((i__26880__auto___35043 < len__26879__auto___35042)){
args__26886__auto__.push((arguments[i__26880__auto___35043]));

var G__35044 = (i__26880__auto___35043 + (1));
i__26880__auto___35043 = G__35044;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
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
return cljs.core.reduce.call(null,merge_entry,(function (){var or__25809__auto__ = m1;
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
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

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq35040){
var G__35041 = cljs.core.first.call(null,seq35040);
var seq35040__$1 = cljs.core.next.call(null,seq35040);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__35041,seq35040__$1);
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
if((function (){var and__25797__auto__ = (n > (10));
if(and__25797__auto__){
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
return and__25797__auto__;
}
})()){
var v = cljs.core.transient$.call(null,coll);
var idx = (0);
while(true){
if((idx === n)){
return cljs.core.persistent_BANG_.call(null,v);
} else {
var G__35049 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__35050 = (idx + (1));
v = G__35049;
idx = G__35050;
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
var G__35051 = cljs.core.conj.call(null,v,f.call(null));
var G__35052 = (idx + (1));
v = G__35051;
idx = G__35052;
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
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26431__auto__,k__26432__auto__){
var self__ = this;
var this__26431__auto____$1 = this;
return cljs.core._lookup.call(null,this__26431__auto____$1,k__26432__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26433__auto__,k35054,else__26434__auto__){
var self__ = this;
var this__26433__auto____$1 = this;
var G__35056 = (((k35054 instanceof cljs.core.Keyword))?k35054.fqn:null);
switch (G__35056) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35054,else__26434__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26445__auto__,writer__26446__auto__,opts__26447__auto__){
var self__ = this;
var this__26445__auto____$1 = this;
var pr_pair__26448__auto__ = ((function (this__26445__auto____$1){
return (function (keyval__26449__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26446__auto__,cljs.core.pr_writer,""," ","",opts__26447__auto__,keyval__26449__auto__);
});})(this__26445__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26446__auto__,pr_pair__26448__auto__,"#taoensso.encore.Swapped{",", ","}",opts__26447__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IIterable$ = true;

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35053){
var self__ = this;
var G__35053__$1 = this;
return (new cljs.core.RecordIter((0),G__35053__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26429__auto__){
var self__ = this;
var this__26429__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26425__auto__){
var self__ = this;
var this__26425__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26435__auto__){
var self__ = this;
var this__26435__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26426__auto__){
var self__ = this;
var this__26426__auto____$1 = this;
var h__26244__auto__ = self__.__hash;
if(!((h__26244__auto__ == null))){
return h__26244__auto__;
} else {
var h__26244__auto____$1 = cljs.core.hash_imap.call(null,this__26426__auto____$1);
self__.__hash = h__26244__auto____$1;

return h__26244__auto____$1;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26427__auto__,other__26428__auto__){
var self__ = this;
var this__26427__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25797__auto__ = other__26428__auto__;
if(cljs.core.truth_(and__25797__auto__)){
var and__25797__auto____$1 = (this__26427__auto____$1.constructor === other__26428__auto__.constructor);
if(and__25797__auto____$1){
return cljs.core.equiv_map.call(null,this__26427__auto____$1,other__26428__auto__);
} else {
return and__25797__auto____$1;
}
} else {
return and__25797__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26440__auto__,k__26441__auto__){
var self__ = this;
var this__26440__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__26441__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26440__auto____$1),self__.__meta),k__26441__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26441__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26438__auto__,k__26439__auto__,G__35053){
var self__ = this;
var this__26438__auto____$1 = this;
var pred__35057 = cljs.core.keyword_identical_QMARK_;
var expr__35058 = k__26439__auto__;
if(cljs.core.truth_(pred__35057.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__35058))){
return (new taoensso.encore.Swapped(G__35053,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35057.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__35058))){
return (new taoensso.encore.Swapped(self__.new_val,G__35053,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26439__auto__,G__35053),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26443__auto__){
var self__ = this;
var this__26443__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26430__auto__,G__35053){
var self__ = this;
var this__26430__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__35053,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26436__auto__,entry__26437__auto__){
var self__ = this;
var this__26436__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26437__auto__)){
return cljs.core._assoc.call(null,this__26436__auto____$1,cljs.core._nth.call(null,entry__26437__auto__,(0)),cljs.core._nth.call(null,entry__26437__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26436__auto____$1,entry__26437__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Symbol(null,"return-val","return-val",1127759038,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__26465__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__26465__auto__,writer__26466__auto__){
return cljs.core._write.call(null,writer__26466__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__35055){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__35055),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__35055),null,cljs.core.dissoc.call(null,G__35055,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)),null));
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
var vec__35062 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__35062,(0),null);
var return_val = cljs.core.nth.call(null,vec__35062,(1),null);
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
var vec__35065 = ((cljs.core.not.call(null,_QMARK_vf_type))?_QMARK_op:cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op));
var vf_type = cljs.core.nth.call(null,vec__35065,(0),null);
var ks = cljs.core.nth.call(null,vec__35065,(1),null);
var valf = cljs.core.nth.call(null,vec__35065,(2),null);
var G__35066 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__35066) {
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
var args__26886__auto__ = [];
var len__26879__auto___35070 = arguments.length;
var i__26880__auto___35071 = (0);
while(true){
if((i__26880__auto___35071 < len__26879__auto___35070)){
args__26886__auto__.push((arguments[i__26880__auto___35071]));

var G__35072 = (i__26880__auto___35071 + (1));
i__26880__auto___35071 = G__35072;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore.replace_in_STAR_.call(null,null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq35068){
var G__35069 = cljs.core.first.call(null,seq35068);
var seq35068__$1 = cljs.core.next.call(null,seq35068);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__35069,seq35068__$1);
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
var args35073 = [];
var len__26879__auto___35084 = arguments.length;
var i__26880__auto___35085 = (0);
while(true){
if((i__26880__auto___35085 < len__26879__auto___35084)){
args35073.push((arguments[i__26880__auto___35085]));

var G__35086 = (i__26880__auto___35085 + (1));
i__26880__auto___35085 = G__35086;
continue;
} else {
}
break;
}

var G__35079 = args35073.length;
switch (G__35079) {
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__26898__auto__ = (new cljs.core.IndexedSeq(args35073.slice((3)),(0),null));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26898__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__35080 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__35080,(0),null);
var return_val = cljs.core.nth.call(null,vec__35080,(1),null);
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
var vec__35081 = taoensso.encore.swapped_STAR__in.call(null,old_val,ks,f);
var new_val = cljs.core.nth.call(null,vec__35081,(0),null);
var return_val = cljs.core.nth.call(null,vec__35081,(1),null);
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
}catch (e35082){if((e35082 instanceof Error)){
var __t = e35082;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e35082;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35083){if((e35083 instanceof Error)){
var __t = e35083;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",__x,__t,null);
} else {
throw e35083;

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

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq35074){
var G__35075 = cljs.core.first.call(null,seq35074);
var seq35074__$1 = cljs.core.next.call(null,seq35074);
var G__35076 = cljs.core.first.call(null,seq35074__$1);
var seq35074__$2 = cljs.core.next.call(null,seq35074__$1);
var G__35077 = cljs.core.first.call(null,seq35074__$2);
var seq35074__$3 = cljs.core.next.call(null,seq35074__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35075,G__35076,G__35077,seq35074__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Is to `reset!` as `swap-in!` is to `swap!`
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var args35088 = [];
var len__26879__auto___35097 = arguments.length;
var i__26880__auto___35098 = (0);
while(true){
if((i__26880__auto___35098 < len__26879__auto___35097)){
args35088.push((arguments[i__26880__auto___35098]));

var G__35099 = (i__26880__auto___35098 + (1));
i__26880__auto___35098 = G__35099;
continue;
} else {
}
break;
}

var G__35094 = args35088.length;
switch (G__35094) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__26898__auto__ = (new cljs.core.IndexedSeq(args35088.slice((3)),(0),null));
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26898__auto__);

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
}catch (e35095){if((e35095 instanceof Error)){
var __t = e35095;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e35095;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35096){if((e35096 instanceof Error)){
var __t = e35096;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",__x,__t,null);
} else {
throw e35096;

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

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq35089){
var G__35090 = cljs.core.first.call(null,seq35089);
var seq35089__$1 = cljs.core.next.call(null,seq35089);
var G__35091 = cljs.core.first.call(null,seq35089__$1);
var seq35089__$2 = cljs.core.next.call(null,seq35089__$1);
var G__35092 = cljs.core.first.call(null,seq35089__$2);
var seq35089__$3 = cljs.core.next.call(null,seq35089__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35090,G__35091,G__35092,seq35089__$3);
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
var args35105 = [];
var len__26879__auto___35108 = arguments.length;
var i__26880__auto___35109 = (0);
while(true){
if((i__26880__auto___35109 < len__26879__auto___35108)){
args35105.push((arguments[i__26880__auto___35109]));

var G__35110 = (i__26880__auto___35109 + (1));
i__26880__auto___35109 = G__35110;
continue;
} else {
}
break;
}

var G__35107 = args35105.length;
switch (G__35107) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35105.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.call(null,null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.call(null,separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__25797__auto__ = separator;
if(cljs.core.truth_(and__25797__auto__)){
return cljs.core.not_EQ_.call(null,separator,"");
} else {
return and__25797__auto__;
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
var fmt__$1 = (function (){var or__25809__auto__ = fmt;
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
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
var args__26886__auto__ = [];
var len__26879__auto___35114 = arguments.length;
var i__26880__auto___35115 = (0);
while(true){
if((i__26880__auto___35115 < len__26879__auto___35114)){
args__26886__auto__.push((arguments[i__26880__auto___35115]));

var G__35116 = (i__26880__auto___35115 + (1));
i__26880__auto___35115 = G__35116;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq35112){
var G__35113 = cljs.core.first.call(null,seq35112);
var seq35112__$1 = cljs.core.next.call(null,seq35112);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__35113,seq35112__$1);
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
var G__35117__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__35117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35118__i = 0, G__35118__a = new Array(arguments.length -  0);
while (G__35118__i < G__35118__a.length) {G__35118__a[G__35118__i] = arguments[G__35118__i + 0]; ++G__35118__i;}
  args = new cljs.core.IndexedSeq(G__35118__a,0);
} 
return G__35117__delegate.call(this,args);};
G__35117.cljs$lang$maxFixedArity = 0;
G__35117.cljs$lang$applyTo = (function (arglist__35119){
var args = cljs.core.seq(arglist__35119);
return G__35117__delegate(args);
});
G__35117.cljs$core$IFn$_invoke$arity$variadic = G__35117__delegate;
return G__35117;
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
var args__26886__auto__ = [];
var len__26879__auto___35127 = arguments.length;
var i__26880__auto___35128 = (0);
while(true){
if((i__26880__auto___35128 < len__26879__auto___35127)){
args__26886__auto__.push((arguments[i__26880__auto___35128]));

var G__35129 = (i__26880__auto___35128 + (1));
i__26880__auto___35128 = G__35129;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((2) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26887__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__35123){
var vec__35124 = p__35123;
var _QMARK_max_len = cljs.core.nth.call(null,vec__35124,(0),null);
if(cljs.core.truth_((function (){var __x = s;
try{if(typeof __x === 'string'){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35125){if((e35125 instanceof Error)){
var __t = e35125;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(string? s)",__x,__t,null);
} else {
throw e35125;

}
}})())){
} else {
throw (new Error("Assert failed: (have? string? s)"));
}

var vec__35126 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__35126,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__35126,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq35120){
var G__35121 = cljs.core.first.call(null,seq35120);
var seq35120__$1 = cljs.core.next.call(null,seq35120);
var G__35122 = cljs.core.first.call(null,seq35120__$1);
var seq35120__$2 = cljs.core.next.call(null,seq35120__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__35121,G__35122,seq35120__$2);
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
var args__26886__auto__ = [];
var len__26879__auto___35135 = arguments.length;
var i__26880__auto___35136 = (0);
while(true){
if((i__26880__auto___35136 < len__26879__auto___35135)){
args__26886__auto__.push((arguments[i__26880__auto___35136]));

var G__35137 = (i__26880__auto___35136 + (1));
i__26880__auto___35136 = G__35137;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((2) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((2)),(0),null)):null);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26887__auto__);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic = (function (s,substr,p__35133){
var vec__35134 = p__35133;
var start_idx = cljs.core.nth.call(null,vec__35134,(0),null);
var last_QMARK_ = cljs.core.nth.call(null,vec__35134,(1),null);
var start_idx__$1 = ((function (){var or__25809__auto__ = start_idx;
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
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

taoensso.encore.str__QMARK_index.cljs$lang$applyTo = (function (seq35130){
var G__35131 = cljs.core.first.call(null,seq35130);
var seq35130__$1 = cljs.core.next.call(null,seq35130);
var G__35132 = cljs.core.first.call(null,seq35130__$1);
var seq35130__$2 = cljs.core.next.call(null,seq35130__$1);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic(G__35131,G__35132,seq35130__$2);
});
/**
 * Like `clojure.string/join` but ensures no double separators
 */
taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__26886__auto__ = [];
var len__26879__auto___35140 = arguments.length;
var i__26880__auto___35141 = (0);
while(true){
if((i__26880__auto___35141 < len__26879__auto___35140)){
args__26886__auto__.push((arguments[i__26880__auto___35141]));

var G__35142 = (i__26880__auto___35141 + (1));
i__26880__auto___35141 = G__35142;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
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

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq35138){
var G__35139 = cljs.core.first.call(null,seq35138);
var seq35138__$1 = cljs.core.next.call(null,seq35138);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__35139,seq35138__$1);
});
/**
 * Joins string paths (URLs, file paths, etc.) ensuring correct "/"
 *   interposition
 */
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__26886__auto__ = [];
var len__26879__auto___35144 = arguments.length;
var i__26880__auto___35145 = (0);
while(true){
if((i__26880__auto___35145 < len__26879__auto___35144)){
args__26886__auto__.push((arguments[i__26880__auto___35145]));

var G__35146 = (i__26880__auto___35145 + (1));
i__26880__auto___35145 = G__35146;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((0) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__26887__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return cljs.core.apply.call(null,taoensso.encore.join_once,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq35143){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35143));
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
var args35147 = [];
var len__26879__auto___35150 = arguments.length;
var i__26880__auto___35151 = (0);
while(true){
if((i__26880__auto___35151 < len__26879__auto___35150)){
args35147.push((arguments[i__26880__auto___35151]));

var G__35152 = (i__26880__auto___35151 + (1));
i__26880__auto___35151 = G__35152;
continue;
} else {
}
break;
}

var G__35149 = args35147.length;
switch (G__35149) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35147.length)].join('')));

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
}catch (e35155){if((e35155 instanceof Error)){
var _ = e35155;
return false;
} else {
throw e35155;

}
}});
/**
 * Experimental. Cheaper `have!` alt that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var args35156 = [];
var len__26879__auto___35159 = arguments.length;
var i__26880__auto___35160 = (0);
while(true){
if((i__26880__auto___35160 < len__26879__auto___35159)){
args35156.push((arguments[i__26880__auto___35160]));

var G__35161 = (i__26880__auto___35160 + (1));
i__26880__auto___35160 = G__35161;
continue;
} else {
}
break;
}

var G__35158 = args35156.length;
switch (G__35158) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35156.length)].join('')));

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
var G__35163__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__25809__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args,((function (or__25809__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__25809__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__25809__auto__,cache_))
,null));
}
});})(or__25809__auto__,cache_))
);
}
})());
};
var G__35163 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35164__i = 0, G__35164__a = new Array(arguments.length -  0);
while (G__35164__i < G__35164__a.length) {G__35164__a[G__35164__i] = arguments[G__35164__i + 0]; ++G__35164__i;}
  args = new cljs.core.IndexedSeq(G__35164__a,0);
} 
return G__35163__delegate.call(this,args);};
G__35163.cljs$lang$maxFixedArity = 0;
G__35163.cljs$lang$applyTo = (function (arglist__35165){
var args = cljs.core.seq(arglist__35165);
return G__35163__delegate(args);
});
G__35163.cljs$core$IFn$_invoke$arity$variadic = G__35163__delegate;
return G__35163;
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
return cljs.core.deref.call(null,(function (){var or__25809__auto__ = cljs.core.deref.call(null,cache_);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return cljs.core.swap_BANG_.call(null,cache_,((function (or__25809__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__25809__auto__,cache_){
return (function (){
return f.call(null);
});})(or__25809__auto__,cache_))
,null));
}
});})(or__25809__auto__,cache_))
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
var G__35166 = null;
var G__35166__0 = (function (){
return cljs.core.deref.call(null,(function (){var or__25809__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),taoensso.encore.sentinel);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,taoensso.encore.sentinel,((function (or__25809__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__25809__auto__,cache_){
return (function (){
return f.call(null);
});})(or__25809__auto__,cache_))
,null));
}
});})(or__25809__auto__,cache_))
);
}
})());
});
var G__35166__1 = (function (x){
return cljs.core.deref.call(null,(function (){var or__25809__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),x);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,x,((function (or__25809__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__25809__auto__,cache_){
return (function (){
return f.call(null,x);
});})(or__25809__auto__,cache_))
,null));
}
});})(or__25809__auto__,cache_))
);
}
})());
});
G__35166 = function(x){
switch(arguments.length){
case 0:
return G__35166__0.call(this);
case 1:
return G__35166__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35166.cljs$core$IFn$_invoke$arity$0 = G__35166__0;
G__35166.cljs$core$IFn$_invoke$arity$1 = G__35166__1;
return G__35166;
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
var G__35167__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__25809__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,cache_,((function (or__25809__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (or__25809__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__25809__auto__,cache_))
,null))], true, false);
}
});})(or__25809__auto__,cache_))
),args);
}
})());
};
var G__35167 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35168__i = 0, G__35168__a = new Array(arguments.length -  0);
while (G__35168__i < G__35168__a.length) {G__35168__a[G__35168__i] = arguments[G__35168__i + 0]; ++G__35168__i;}
  args = new cljs.core.IndexedSeq(G__35168__a,0);
} 
return G__35167__delegate.call(this,args);};
G__35167.cljs$lang$maxFixedArity = 0;
G__35167.cljs$lang$applyTo = (function (arglist__35169){
var args = cljs.core.seq(arglist__35169);
return G__35167__delegate(args);
});
G__35167.cljs$core$IFn$_invoke$arity$variadic = G__35167__delegate;
return G__35167;
})()
;
;})(cache_))
});
/**
 * Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
 *   and immediately applies memoized f to given arguments
 */
taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__26886__auto__ = [];
var len__26879__auto___35173 = arguments.length;
var i__26880__auto___35174 = (0);
while(true){
if((i__26880__auto___35174 < len__26879__auto___35173)){
args__26886__auto__.push((arguments[i__26880__auto___35174]));

var G__35175 = (i__26880__auto___35174 + (1));
i__26880__auto___35174 = G__35175;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((2) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26887__auto__);
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

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq35170){
var G__35171 = cljs.core.first.call(null,seq35170);
var seq35170__$1 = cljs.core.next.call(null,seq35170);
var G__35172 = cljs.core.first.call(null,seq35170__$1);
var seq35170__$2 = cljs.core.next.call(null,seq35170__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__35171,G__35172,seq35170__$2);
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
var args35176 = [];
var len__26879__auto___35199 = arguments.length;
var i__26880__auto___35200 = (0);
while(true){
if((i__26880__auto___35200 < len__26879__auto___35199)){
args35176.push((arguments[i__26880__auto___35200]));

var G__35201 = (i__26880__auto___35200 + (1));
i__26880__auto___35200 = G__35201;
continue;
} else {
}
break;
}

var G__35178 = args35176.length;
switch (G__35178) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35176.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__35203__delegate = function (p__35179){
var vec__35180 = p__35179;
var arg1 = cljs.core.nth.call(null,vec__35180,(0),null);
var argn = cljs.core.nthnext.call(null,vec__35180,(1));
var args = vec__35180;
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
return cljs.core.deref.call(null,(function (){var or__25809__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args__$1);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args__$1,((function (or__25809__auto__,fresh_QMARK_,args__$1,vec__35180,arg1,argn,args,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_((function (){var and__25797__auto__ = _QMARK_dv;
if(cljs.core.truth_(and__25797__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__25797__auto__;
}
})())){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__25809__auto__,fresh_QMARK_,args__$1,vec__35180,arg1,argn,args,cache_){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(or__25809__auto__,fresh_QMARK_,args__$1,vec__35180,arg1,argn,args,cache_))
,null));
}
});})(or__25809__auto__,fresh_QMARK_,args__$1,vec__35180,arg1,argn,args,cache_))
);
}
})());

}
}
};
var G__35203 = function (var_args){
var p__35179 = null;
if (arguments.length > 0) {
var G__35204__i = 0, G__35204__a = new Array(arguments.length -  0);
while (G__35204__i < G__35204__a.length) {G__35204__a[G__35204__i] = arguments[G__35204__i + 0]; ++G__35204__i;}
  p__35179 = new cljs.core.IndexedSeq(G__35204__a,0);
} 
return G__35203__delegate.call(this,p__35179);};
G__35203.cljs$lang$maxFixedArity = 0;
G__35203.cljs$lang$applyTo = (function (arglist__35205){
var p__35179 = cljs.core.seq(arglist__35205);
return G__35203__delegate(p__35179);
});
G__35203.cljs$core$IFn$_invoke$arity$variadic = G__35203__delegate;
return G__35203;
})()
;
;})(cache_))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var __x_35206 = ttl_ms;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x_35206))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35181){if((e35181 instanceof Error)){
var __t_35207 = e35181;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? ttl-ms)",__x_35206,__t_35207,null);
} else {
throw e35181;

}
}
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms__$1 = cljs.core.long$.call(null,ttl_ms);
var gc_fn = ((function (cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (){
if(cljs.core.truth_((function (){var and__25797__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__25797__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__25797__auto__,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__25797__auto__,cache_,gc_running_QMARK__,ttl_ms__$1))
);
} else {
return and__25797__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
var snapshot = cljs.core.deref.call(null,cache_);
var ks_to_gc = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,k,p__35182){
var vec__35183 = p__35182;
var dv = cljs.core.nth.call(null,vec__35183,(0),null);
var udt = cljs.core.nth.call(null,vec__35183,(1),null);
var cv = vec__35183;
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
var G__35208__delegate = function (p__35184){
var vec__35185 = p__35184;
var arg1 = cljs.core.nth.call(null,vec__35185,(0),null);
var argn = cljs.core.nthnext.call(null,vec__35185,(1));
var args = vec__35185;
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
var vec__35186 = taoensso.encore.swap_val_BANG_.call(null,cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__35185,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__25797__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__25797__auto__)){
var and__25797__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__25797__auto____$1){
var vec__35188 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__35188,(0),null);
var udt = cljs.core.nth.call(null,vec__35188,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__25797__auto____$1;
}
} else {
return and__25797__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__35185,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__35185,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__35185,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
);
var dv = cljs.core.nth.call(null,vec__35186,(0),null);
return cljs.core.deref.call(null,dv);

}
}
};
var G__35208 = function (var_args){
var p__35184 = null;
if (arguments.length > 0) {
var G__35209__i = 0, G__35209__a = new Array(arguments.length -  0);
while (G__35209__i < G__35209__a.length) {G__35209__a[G__35209__i] = arguments[G__35209__i + 0]; ++G__35209__i;}
  p__35184 = new cljs.core.IndexedSeq(G__35209__a,0);
} 
return G__35208__delegate.call(this,p__35184);};
G__35208.cljs$lang$maxFixedArity = 0;
G__35208.cljs$lang$applyTo = (function (arglist__35210){
var p__35184 = cljs.core.seq(arglist__35210);
return G__35208__delegate(p__35184);
});
G__35208.cljs$core$IFn$_invoke$arity$variadic = G__35208__delegate;
return G__35208;
})()
;
;})(cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
var __x_35211 = ttl_ms;
if(cljs.core.truth_(((function (__x_35211){
return (function (__x__$1){
var or__25809__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.pos_int_QMARK_).call(null,__x__$1);
}
});})(__x_35211))
.call(null,__x_35211))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? pos-int?] ttl-ms)",__x_35211,null,null);
}

var __x_35212 = cache_size;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x_35212))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35189){if((e35189 instanceof Error)){
var __t_35213 = e35189;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? cache-size)",__x_35212,__t_35213,null);
} else {
throw e35189;

}
}
var state_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms_QMARK_ = !((ttl_ms == null));
var ttl_ms__$1 = cljs.core.long$.call(null,(function (){var or__25809__auto__ = ttl_ms;
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return (0);
}
})());
var cache_size__$1 = cljs.core.long$.call(null,cache_size);
var gc_fn = ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (){
if(cljs.core.truth_((function (){var and__25797__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__25797__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__25797__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__25797__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
return and__25797__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
if(ttl_ms_QMARK_){
var snapshot_35214 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var ks_to_gc_35215 = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (snapshot_35214,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,k,p__35190){
var vec__35191 = p__35190;
var dv = cljs.core.nth.call(null,vec__35191,(0),null);
var udt = cljs.core.nth.call(null,vec__35191,(1),null);
var _ = cljs.core.nth.call(null,vec__35191,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__35191,(3),null);
var cv = vec__35191;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(snapshot_35214,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),snapshot_35214));
cljs.core.swap_BANG_.call(null,state_,((function (snapshot_35214,ks_to_gc_35215,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (snapshot_35214,ks_to_gc_35215,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(snapshot_35214,ks_to_gc_35215,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_35215));
});})(snapshot_35214,ks_to_gc_35215,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

var snapshot_35216 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var n_to_gc_35217 = (cljs.core.count.call(null,snapshot_35216) - cache_size__$1);
if((n_to_gc_35217 > (64))){
var ks_to_gc_35218 = taoensso.encore.top.call(null,n_to_gc_35217,((function (snapshot_35216,n_to_gc_35217,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (k){
var vec__35192 = snapshot_35216.call(null,k);
var _ = cljs.core.nth.call(null,vec__35192,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35192,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__35192,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__35192,(3),null);
return (tick_lru + tick_lfu);
});})(snapshot_35216,n_to_gc_35217,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.keys.call(null,snapshot_35216));
cljs.core.swap_BANG_.call(null,state_,((function (ks_to_gc_35218,snapshot_35216,n_to_gc_35217,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (ks_to_gc_35218,snapshot_35216,n_to_gc_35217,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(ks_to_gc_35218,snapshot_35216,n_to_gc_35217,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_35218));
});})(ks_to_gc_35218,snapshot_35216,n_to_gc_35217,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
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
if(cljs.core.truth_((function (){var and__25797__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__25797__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__25797__auto__;
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
if(cljs.core.truth_((function (){var and__25797__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__25797__auto__)){
var and__25797__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__25797__auto____$1){
var vec__35194 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__35194,(0),null);
var udt = cljs.core.nth.call(null,vec__35194,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__25797__auto____$1;
}
} else {
return and__25797__auto__;
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
var G__35219__delegate = function (p__35195){
var vec__35196 = p__35195;
var arg1 = cljs.core.nth.call(null,vec__35196,(0),null);
var argn = cljs.core.nthnext.call(null,vec__35196,(1));
var args = vec__35196;
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
var vec__35197 = cv_fn.call(null,args__$1,fresh_QMARK_,tick);
var dv = cljs.core.nth.call(null,vec__35197,(0),null);
cljs.core.swap_BANG_.call(null,state_,((function (fresh_QMARK_,args__$1,tick,vec__35197,dv,vec__35196,arg1,argn,args,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function (m){
var temp__4423__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__35198 = temp__4423__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__35198,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__35198,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__35198,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__35198,(3),null);
var cv = vec__35198;
return cljs.core.merge.call(null,m,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick,(tick_lfu + (1))], null)], true, false));
} else {
return cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1))], null));
}
});})(fresh_QMARK_,args__$1,tick,vec__35197,dv,vec__35196,arg1,argn,args,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
);

return cljs.core.deref.call(null,dv);

}
}
};
var G__35219 = function (var_args){
var p__35195 = null;
if (arguments.length > 0) {
var G__35220__i = 0, G__35220__a = new Array(arguments.length -  0);
while (G__35220__i < G__35220__a.length) {G__35220__a[G__35220__i] = arguments[G__35220__i + 0]; ++G__35220__i;}
  p__35195 = new cljs.core.IndexedSeq(G__35220__a,0);
} 
return G__35219__delegate.call(this,p__35195);};
G__35219.cljs$lang$maxFixedArity = 0;
G__35219.cljs$lang$applyTo = (function (arglist__35221){
var p__35195 = cljs.core.seq(arglist__35221);
return G__35219__delegate(p__35195);
});
G__35219.cljs$core$IFn$_invoke$arity$variadic = G__35219__delegate;
return G__35219;
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
return (function (p__35257){
var vec__35258 = p__35257;
var _ = cljs.core.nth.call(null,vec__35258,(0),null);
var win_ms = cljs.core.nth.call(null,vec__35258,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__35258,(2),null);
var spec = vec__35258;
return win_ms;
});})(vspecs,vstates_))
,vspecs)));
var nspecs = cljs.core.count.call(null,vspecs);
var nid_specs = cljs.core.count.call(null,cljs.core.filterv.call(null,((function (vspecs,vstates_,max_win_ms,nspecs){
return (function (p__35259){
var vec__35260 = p__35259;
var _ = cljs.core.nth.call(null,vec__35260,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35260,(1),null);
var id = cljs.core.nth.call(null,vec__35260,(2),null);
return id;
});})(vspecs,vstates_,max_win_ms,nspecs))
,vspecs));
var _ = ((((nid_specs === (0))) || (cljs.core._EQ_.call(null,nid_specs,nspecs)))?null:(function(){throw (new Error("Assert failed: (or (zero? nid-specs) (= nid-specs nspecs))"))})());
var return_ids_QMARK_ = !((nid_specs === (0)));
return ((function (vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function() { 
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate = function (p__35261){
var vec__35277 = p__35261;
var _QMARK_a1 = cljs.core.nth.call(null,vec__35277,(0),null);
var _QMARK_a2 = cljs.core.nth.call(null,vec__35277,(1),null);
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
if(cljs.core.truth_((function (){var and__25797__auto__ = req_id;
if(cljs.core.truth_(and__25797__auto__)){
return taoensso.encore.gc_now_QMARK_.call(null);
} else {
return and__25797__auto__;
}
})())){
taoensso.encore.swap_in_BANG_.call(null,vstates_,cljs.core.PersistentVector.EMPTY,((function (peek_QMARK_,req_id,instant,vec__35277,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function taoensso$encore$rate_limiter_STAR__$_check_rate_limits_$_gc(m){
return cljs.core.reduce_kv.call(null,((function (peek_QMARK_,req_id,instant,vec__35277,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (m_STAR_,req_id__$1,vstate){
var max_udt_win_start = cljs.core.reduce.call(null,((function (peek_QMARK_,req_id,instant,vec__35277,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (acc,p__35280){
var vec__35281 = p__35280;
var ___$1 = cljs.core.nth.call(null,vec__35281,(0),null);
var udt = cljs.core.nth.call(null,vec__35281,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__35281,(2),null);
var x__26140__auto__ = acc;
var y__26141__auto__ = udt;
return ((x__26140__auto__ > y__26141__auto__) ? x__26140__auto__ : y__26141__auto__);
});})(peek_QMARK_,req_id,instant,vec__35277,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,(0),vstate);
var min_win_ms_elapsed = (instant - max_udt_win_start);
if((min_win_ms_elapsed > max_win_ms)){
return cljs.core.dissoc.call(null,m_STAR_,req_id__$1);
} else {
return m_STAR_;
}
});})(peek_QMARK_,req_id,instant,vec__35277,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,m,m);
});})(peek_QMARK_,req_id,instant,vec__35277,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
} else {
}

return taoensso.encore.swap_in_BANG_.call(null,vstates_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_id], null),((function (peek_QMARK_,req_id,instant,vec__35277,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (_QMARK_vstate){
if(cljs.core.not.call(null,_QMARK_vstate)){
if(cljs.core.truth_(peek_QMARK_)){
return taoensso.encore.swapped.call(null,_QMARK_vstate,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,nspecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),instant], null))),null);
}
} else {
var vec__35282 = (function (){var in_vspecs = vspecs;
var in_vstate = _QMARK_vstate;
var out_vstate = cljs.core.PersistentVector.EMPTY;
var _QMARK_worst_limit_offence = null;
while(true){
var vec__35283 = in_vspecs;
var vec__35284 = cljs.core.nth.call(null,vec__35283,(0),null);
var ncalls_limit = cljs.core.nth.call(null,vec__35284,(0),null);
var win_ms = cljs.core.nth.call(null,vec__35284,(1),null);
var _QMARK_spec_id = cljs.core.nth.call(null,vec__35284,(2),null);
var next_in_vspecs = cljs.core.nthnext.call(null,vec__35283,(1));
var vec__35285 = in_vstate;
var vec__35286 = cljs.core.nth.call(null,vec__35285,(0),null);
var ncalls = cljs.core.nth.call(null,vec__35286,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__35286,(1),null);
var next_in_vstate = cljs.core.nthnext.call(null,vec__35285,(1));
var win_ms_elapsed = (instant - udt_win_start);
var reset_due_QMARK_ = (win_ms_elapsed >= win_ms);
var rate_limited_QMARK_ = (!(reset_due_QMARK_)) && ((ncalls >= ncalls_limit));
var new_out_vstate = cljs.core.conj.call(null,out_vstate,((reset_due_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),instant], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls,udt_win_start], null)));
var new__QMARK_worst_limit_offence = ((!(rate_limited_QMARK_))?_QMARK_worst_limit_offence:(function (){var ms_wait = (win_ms - win_ms_elapsed);
if((function (){var or__25809__auto__ = (_QMARK_worst_limit_offence == null);
if(or__25809__auto__){
return or__25809__auto__;
} else {
var vec__35288 = _QMARK_worst_limit_offence;
var max_ms_wait = cljs.core.nth.call(null,vec__35288,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35288,(1),null);
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
var G__35292 = next_in_vspecs;
var G__35293 = next_in_vstate;
var G__35294 = new_out_vstate;
var G__35295 = new__QMARK_worst_limit_offence;
in_vspecs = G__35292;
in_vstate = G__35293;
out_vstate = G__35294;
_QMARK_worst_limit_offence = G__35295;
continue;
}
break;
}
})();
var vstate_with_resets = cljs.core.nth.call(null,vec__35282,(0),null);
var _QMARK_worst_limit_offence = cljs.core.nth.call(null,vec__35282,(1),null);
var all_limits_pass_QMARK_ = (_QMARK_worst_limit_offence == null);
var new_vstate = (cljs.core.truth_(peek_QMARK_)?_QMARK_vstate:((!(all_limits_pass_QMARK_))?vstate_with_resets:cljs.core.mapv.call(null,((function (vec__35282,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__35277,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (p__35289){
var vec__35290 = p__35289;
var ncalls = cljs.core.nth.call(null,vec__35290,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__35290,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ncalls + (1)),udt_win_start], null);
});})(vec__35282,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__35277,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,vstate_with_resets)
));
var result = (function (){var temp__4425__auto__ = _QMARK_worst_limit_offence;
if(cljs.core.truth_(temp__4425__auto__)){
var wlo = temp__4425__auto__;
if(return_ids_QMARK_){
return wlo;
} else {
var vec__35291 = wlo;
var ms_wait = cljs.core.nth.call(null,vec__35291,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35291,(1),null);
return ms_wait;
}
} else {
return null;
}
})();
return taoensso.encore.swapped.call(null,new_vstate,result);
}
});})(peek_QMARK_,req_id,instant,vec__35277,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);

}
}
};
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits = function (var_args){
var p__35261 = null;
if (arguments.length > 0) {
var G__35296__i = 0, G__35296__a = new Array(arguments.length -  0);
while (G__35296__i < G__35296__a.length) {G__35296__a[G__35296__i] = arguments[G__35296__i + 0]; ++G__35296__i;}
  p__35261 = new cljs.core.IndexedSeq(G__35296__a,0);
} 
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate.call(this,p__35261);};
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$maxFixedArity = 0;
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$applyTo = (function (arglist__35297){
var p__35261 = cljs.core.seq(arglist__35297);
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate(p__35261);
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
var G__35298__delegate = function (args){
var temp__4423__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var backoff = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__35298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35299__i = 0, G__35299__a = new Array(arguments.length -  0);
while (G__35299__i < G__35299__a.length) {G__35299__a[G__35299__i] = arguments[G__35299__i + 0]; ++G__35299__i;}
  args = new cljs.core.IndexedSeq(G__35299__a,0);
} 
return G__35298__delegate.call(this,args);};
G__35298.cljs$lang$maxFixedArity = 0;
G__35298.cljs$lang$applyTo = (function (arglist__35300){
var args = cljs.core.seq(arglist__35300);
return G__35298__delegate(args);
});
G__35298.cljs$core$IFn$_invoke$arity$variadic = G__35298__delegate;
return G__35298;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4423__auto__ = (function (){var and__25797__auto__ = typeof window !== 'undefined';
if(and__25797__auto__){
return (window["performance"]);
} else {
return and__25797__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var perf = temp__4423__auto__;
var temp__4423__auto____$1 = (function (){var or__25809__auto__ = (perf["now"]);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
var or__25809__auto____$1 = (perf["mozNow"]);
if(cljs.core.truth_(or__25809__auto____$1)){
return or__25809__auto____$1;
} else {
var or__25809__auto____$2 = (perf["msNow"]);
if(cljs.core.truth_(or__25809__auto____$2)){
return or__25809__auto____$2;
} else {
var or__25809__auto____$3 = (perf["oNow"]);
if(cljs.core.truth_(or__25809__auto____$3)){
return or__25809__auto____$3;
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
taoensso.encore.console_log = (function (){var temp__4423__auto__ = (function (){var and__25797__auto__ = typeof console !== 'undefined';
if(and__25797__auto__){
return console.log;
} else {
return and__25797__auto__;
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
var args__26886__auto__ = [];
var len__26879__auto___35308 = arguments.length;
var i__26880__auto___35309 = (0);
while(true){
if((i__26880__auto___35309 < len__26879__auto___35308)){
args__26886__auto__.push((arguments[i__26880__auto___35309]));

var G__35310 = (i__26880__auto___35309 + (1));
i__26880__auto___35309 = G__35310;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((0) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((0)),(0),null)):null);
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(argseq__26887__auto__);
});

taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,xs);
});

taoensso.encore.log.cljs$lang$maxFixedArity = (0);

taoensso.encore.log.cljs$lang$applyTo = (function (seq35301){
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35301));
});

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__26886__auto__ = [];
var len__26879__auto___35311 = arguments.length;
var i__26880__auto___35312 = (0);
while(true){
if((i__26880__auto___35312 < len__26879__auto___35311)){
args__26886__auto__.push((arguments[i__26880__auto___35312]));

var G__35313 = (i__26880__auto___35312 + (1));
i__26880__auto___35312 = G__35313;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((0) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__26887__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.spaced_str_with_nils.call(null,xs)], null));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq35302){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35302));
});

taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__26886__auto__ = [];
var len__26879__auto___35314 = arguments.length;
var i__26880__auto___35315 = (0);
while(true){
if((i__26880__auto___35315 < len__26879__auto___35314)){
args__26886__auto__.push((arguments[i__26880__auto___35315]));

var G__35316 = (i__26880__auto___35315 + (1));
i__26880__auto___35315 = G__35316;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.format_STAR_.call(null,fmt,xs)], null));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq35303){
var G__35304 = cljs.core.first.call(null,seq35303);
var seq35303__$1 = cljs.core.next.call(null,seq35303);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__35304,seq35303__$1);
});

taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__26886__auto__ = [];
var len__26879__auto___35317 = arguments.length;
var i__26880__auto___35318 = (0);
while(true){
if((i__26880__auto___35318 < len__26879__auto___35317)){
args__26886__auto__.push((arguments[i__26880__auto___35318]));

var G__35319 = (i__26880__auto___35318 + (1));
i__26880__auto___35318 = G__35319;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((0) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__26887__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.spaced_str_with_nils.call(null,xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq35305){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35305));
});

taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__26886__auto__ = [];
var len__26879__auto___35320 = arguments.length;
var i__26880__auto___35321 = (0);
while(true){
if((i__26880__auto___35321 < len__26879__auto___35320)){
args__26886__auto__.push((arguments[i__26880__auto___35321]));

var G__35322 = (i__26880__auto___35321 + (1));
i__26880__auto___35321 = G__35322;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq35306){
var G__35307 = cljs.core.first.call(null,seq35306);
var seq35306__$1 = cljs.core.next.call(null,seq35306);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__35307,seq35306__$1);
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
var or__25809__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
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
var G__35324 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__35324) {
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
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__35328,callback){
var map__35346 = p__35328;
var map__35346__$1 = ((((!((map__35346 == null)))?((((map__35346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35346):map__35346);
var opts = map__35346__$1;
var method = cljs.core.get.call(null,map__35346__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__35346__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__35346__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__35346__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__35346__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__35346__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var progress_fn = cljs.core.get.call(null,map__35346__$1,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
var errorf = cljs.core.get.call(null,map__35346__$1,new cljs.core.Keyword(null,"errorf","errorf",-620376044),taoensso.encore.logf);
if(cljs.core.truth_((function (){var __x = timeout_ms;
if(cljs.core.truth_(((function (__x,map__35346,map__35346__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (__x__$1){
var or__25809__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nneg_int_QMARK_).call(null,__x__$1);
}
});})(__x,map__35346,map__35346__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
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
try{var timeout_ms__$1 = (function (){var or__25809__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__35350 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__35350) {
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
var vec__35349 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__35349,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__35349,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__35351_35364 = xhr;
goog.events.listenOnce(G__35351_35364,goog.net.EventType.READY,((function (G__35351_35364,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35349,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35346,map__35346__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__35351_35364,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35349,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35346,map__35346__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);

goog.events.listenOnce(G__35351_35364,goog.net.EventType.COMPLETE,((function (G__35351_35364,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35349,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35346,map__35346__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var success_QMARK_ = xhr.isSuccess();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__35357 = ((function (status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__35351_35364,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35349,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35346,map__35346__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (p1__35327_SHARP_,p2__35326_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__35326_SHARP_,p1__35327_SHARP_);
});})(status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__35351_35364,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35349,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35346,map__35346__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
var expr__35358 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__35357.call(null,"/edn",expr__35358))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(pred__35357.call(null,"/json",expr__35358))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(pred__35357.call(null,"/xml",expr__35358))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(cljs.core.truth_(pred__35357.call(null,"/html",expr__35358))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());
try{var G__35361 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__35361) {
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
}catch (e35360){if((e35360 instanceof Error)){
var e = e35360;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e35360;

}
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(function (){var or__25809__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if(cljs.core.truth_(success_QMARK_)){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.call(null,cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
if(((_QMARK_content == null)) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(204),null,(1223),null], null), null).call(null,_QMARK_http_status)))){
return new cljs.core.Keyword(null,"no-content","no-content",-1860206018);
} else {
return null;
}
}
})()], null);
return callback.call(null,cb_arg);
});})(G__35351_35364,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35349,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35346,map__35346__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);


var temp__4425__auto___35366 = progress_fn;
if(cljs.core.truth_(temp__4425__auto___35366)){
var pf_35367 = temp__4425__auto___35366;
goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf_35367,temp__4425__auto___35366,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35349,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35346,map__35346__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__25797__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__25797__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__25797__auto__;
}
})())?(loaded / total):null);
return pf_35367.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf_35367,temp__4425__auto___35366,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__35349,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__35346,map__35346__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);
} else {
}

var G__35362_35368 = xhr;
var temp__4425__auto___35369 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4425__auto___35369)){
var x_35370 = temp__4425__auto___35369;
G__35362_35368.setTimeoutInterval((function (){var or__25809__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return (0);
}
})());
} else {
}

var temp__4425__auto___35371 = with_credentials_QMARK_;
if(cljs.core.truth_(temp__4425__auto___35371)){
var x_35372 = temp__4425__auto___35371;
G__35362_35368.setWithCredentials(true);
} else {
}

var temp__4425__auto___35373 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4425__auto___35373)){
var x_35374 = temp__4425__auto___35373;
G__35362_35368.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);
} else {
}


return xhr;
}catch (e35348){if((e35348 instanceof Error)){
var e = e35348;
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e35348;

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
var args__26886__auto__ = [];
var len__26879__auto___35379 = arguments.length;
var i__26880__auto___35380 = (0);
while(true){
if((i__26880__auto___35380 < len__26879__auto___35379)){
args__26886__auto__.push((arguments[i__26880__auto___35380]));

var G__35381 = (i__26880__auto___35380 + (1));
i__26880__auto___35380 = G__35381;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__35377){
var vec__35378 = p__35377;
var encoding = cljs.core.nth.call(null,vec__35378,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq35375){
var G__35376 = cljs.core.first.call(null,seq35375);
var seq35375__$1 = cljs.core.next.call(null,seq35375);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__35376,seq35375__$1);
});
taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode.call(null,taoensso.encore.qname.call(null,k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode.call(null,(function (){var or__25809__auto__ = taoensso.encore.as__QMARK_qname.call(null,v);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
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
return join.call(null,(function (){var iter__26589__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__35390(s__35391){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__35391__$1 = s__35391;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35391__$1);
if(temp__4425__auto__){
var s__35391__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35391__$2)){
var c__26587__auto__ = cljs.core.chunk_first.call(null,s__35391__$2);
var size__26588__auto__ = cljs.core.count.call(null,c__26587__auto__);
var b__35393 = cljs.core.chunk_buffer.call(null,size__26588__auto__);
if((function (){var i__35392 = (0);
while(true){
if((i__35392 < size__26588__auto__)){
var vec__35396 = cljs.core._nth.call(null,c__26587__auto__,i__35392);
var k = cljs.core.nth.call(null,vec__35396,(0),null);
var v = cljs.core.nth.call(null,vec__35396,(1),null);
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,v))){
cljs.core.chunk_append.call(null,b__35393,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__25809__auto__ = cljs.core.seq.call(null,v);
if(or__25809__auto__){
return or__25809__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__35398 = (i__35392 + (1));
i__35392 = G__35398;
continue;
} else {
var G__35399 = (i__35392 + (1));
i__35392 = G__35399;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35393),taoensso$encore$format_query_string_$_iter__35390.call(null,cljs.core.chunk_rest.call(null,s__35391__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35393),null);
}
} else {
var vec__35397 = cljs.core.first.call(null,s__35391__$2);
var k = cljs.core.nth.call(null,vec__35397,(0),null);
var v = cljs.core.nth.call(null,vec__35397,(1),null);
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,v))){
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__25809__auto__ = cljs.core.seq.call(null,v);
if(or__25809__auto__){
return or__25809__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__35390.call(null,cljs.core.rest.call(null,s__35391__$2)));
} else {
var G__35400 = cljs.core.rest.call(null,s__35391__$2);
s__35391__$1 = G__35400;
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
return iter__26589__auto__.call(null,m);
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
var args__26886__auto__ = [];
var len__26879__auto___35407 = arguments.length;
var i__26880__auto___35408 = (0);
while(true){
if((i__26880__auto___35408 < len__26879__auto___35407)){
args__26886__auto__.push((arguments[i__26880__auto___35408]));

var G__35409 = (i__26880__auto___35408 + (1));
i__26880__auto___35408 = G__35409;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__35403){
var vec__35404 = p__35403;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__35404,(0),null);
var encoding = cljs.core.nth.call(null,vec__35404,(1),null);
var _PERCENT_ = ((clojure.string.blank_QMARK_.call(null,s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?taoensso.encore.substr.call(null,s,(1)):s);
if(cljs.core.not.call(null,taoensso.encore.str_contains_QMARK_.call(null,s__$1,"="))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var m = cljs.core.reduce.call(null,((function (s__$1,vec__35404,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4423__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__35405 = temp__4423__auto__;
var k = cljs.core.nth.call(null,vec__35405,(0),null);
var v = cljs.core.nth.call(null,vec__35405,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__35404,keywordize_QMARK_,encoding))
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
}catch (e35406){if((e35406 instanceof Error)){
var __t = e35406;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(map? %)",__x,__t,null);
} else {
throw e35406;

}
}})())){
} else {
throw (new Error("Assert failed: (have? map? %)"));
}

return _PERCENT_;
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq35401){
var G__35402 = cljs.core.first.call(null,seq35401);
var seq35401__$1 = cljs.core.next.call(null,seq35401);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__35402,seq35401__$1);
});
taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__35411 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__35411,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__35411,(1),null);
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
var args__26886__auto__ = [];
var len__26879__auto___35416 = arguments.length;
var i__26880__auto___35417 = (0);
while(true){
if((i__26880__auto___35417 < len__26879__auto___35416)){
args__26886__auto__.push((arguments[i__26880__auto___35417]));

var G__35418 = (i__26880__auto___35417 + (1));
i__26880__auto___35417 = G__35418;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__35414){
var vec__35415 = p__35414;
var type = cljs.core.nth.call(null,vec__35415,(0),null);
var nplaces = cljs.core.nth.call(null,vec__35415,(1),null);
return taoensso.encore.round_STAR_.call(null,(function (){var or__25809__auto__ = type;
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq35412){
var G__35413 = cljs.core.first.call(null,seq35412);
var seq35412__$1 = cljs.core.next.call(null,seq35412);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__35413,seq35412__$1);
});
taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__26886__auto__ = [];
var len__26879__auto___35423 = arguments.length;
var i__26880__auto___35424 = (0);
while(true){
if((i__26880__auto___35424 < len__26879__auto___35423)){
args__26886__auto__.push((arguments[i__26880__auto___35424]));

var G__35425 = (i__26880__auto___35424 + (1));
i__26880__auto___35424 = G__35425;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__35421){
var vec__35422 = p__35421;
var nattempt = cljs.core.nth.call(null,vec__35422,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__25809__auto__ = nattempt;
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return (0);
}
})()));
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq35419){
var G__35420 = cljs.core.first.call(null,seq35419);
var seq35419__$1 = cljs.core.next.call(null,seq35419);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35420,seq35419__$1);
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
var G__35426__delegate = function (args){
var temp__4423__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var backoff_ms = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__35426 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35427__i = 0, G__35427__a = new Array(arguments.length -  0);
while (G__35427__i < G__35427__a.length) {G__35427__a[G__35427__i] = arguments[G__35427__i + 0]; ++G__35427__i;}
  args = new cljs.core.IndexedSeq(G__35427__a,0);
} 
return G__35426__delegate.call(this,args);};
G__35426.cljs$lang$maxFixedArity = 0;
G__35426.cljs$lang$applyTo = (function (arglist__35428){
var args = cljs.core.seq(arglist__35428);
return G__35426__delegate(args);
});
G__35426.cljs$core$IFn$_invoke$arity$variadic = G__35426__delegate;
return G__35426;
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
var args__26886__auto__ = [];
var len__26879__auto___35443 = arguments.length;
var i__26880__auto___35444 = (0);
while(true){
if((i__26880__auto___35444 < len__26879__auto___35443)){
args__26886__auto__.push((arguments[i__26880__auto___35444]));

var G__35445 = (i__26880__auto___35444 + (1));
i__26880__auto___35444 = G__35445;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq35429){
var G__35430 = cljs.core.first.call(null,seq35429);
var seq35429__$1 = cljs.core.next.call(null,seq35429);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__35430,seq35429__$1);
});

taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__26886__auto__ = [];
var len__26879__auto___35446 = arguments.length;
var i__26880__auto___35447 = (0);
while(true){
if((i__26880__auto___35447 < len__26879__auto___35446)){
args__26886__auto__.push((arguments[i__26880__auto___35447]));

var G__35448 = (i__26880__auto___35447 + (1));
i__26880__auto___35447 = G__35448;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq35431){
var G__35432 = cljs.core.first.call(null,seq35431);
var seq35431__$1 = cljs.core.next.call(null,seq35431);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__35432,seq35431__$1);
});

taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__26886__auto__ = [];
var len__26879__auto___35449 = arguments.length;
var i__26880__auto___35450 = (0);
while(true){
if((i__26880__auto___35450 < len__26879__auto___35449)){
args__26886__auto__.push((arguments[i__26880__auto___35450]));

var G__35451 = (i__26880__auto___35450 + (1));
i__26880__auto___35450 = G__35451;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq35433){
var G__35434 = cljs.core.first.call(null,seq35433);
var seq35433__$1 = cljs.core.next.call(null,seq35433);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__35434,seq35433__$1);
});

taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__26886__auto__ = [];
var len__26879__auto___35452 = arguments.length;
var i__26880__auto___35453 = (0);
while(true){
if((i__26880__auto___35453 < len__26879__auto___35452)){
args__26886__auto__.push((arguments[i__26880__auto___35453]));

var G__35454 = (i__26880__auto___35453 + (1));
i__26880__auto___35453 = G__35454;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("WARN: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq35435){
var G__35436 = cljs.core.first.call(null,seq35435);
var seq35435__$1 = cljs.core.next.call(null,seq35435);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__35436,seq35435__$1);
});

taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__26886__auto__ = [];
var len__26879__auto___35455 = arguments.length;
var i__26880__auto___35456 = (0);
while(true){
if((i__26880__auto___35456 < len__26879__auto___35455)){
args__26886__auto__.push((arguments[i__26880__auto___35456]));

var G__35457 = (i__26880__auto___35456 + (1));
i__26880__auto___35456 = G__35457;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("ERROR: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq35437){
var G__35438 = cljs.core.first.call(null,seq35437);
var seq35437__$1 = cljs.core.next.call(null,seq35437);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__35438,seq35437__$1);
});

taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__26886__auto__ = [];
var len__26879__auto___35458 = arguments.length;
var i__26880__auto___35459 = (0);
while(true){
if((i__26880__auto___35459 < len__26879__auto___35458)){
args__26886__auto__.push((arguments[i__26880__auto___35459]));

var G__35460 = (i__26880__auto___35459 + (1));
i__26880__auto___35459 = G__35460;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("FATAL: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq35439){
var G__35440 = cljs.core.first.call(null,seq35439);
var seq35439__$1 = cljs.core.next.call(null,seq35439);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__35440,seq35439__$1);
});

taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__26886__auto__ = [];
var len__26879__auto___35461 = arguments.length;
var i__26880__auto___35462 = (0);
while(true){
if((i__26880__auto___35462 < len__26879__auto___35461)){
args__26886__auto__.push((arguments[i__26880__auto___35462]));

var G__35463 = (i__26880__auto___35462 + (1));
i__26880__auto___35462 = G__35463;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq35441){
var G__35442 = cljs.core.first.call(null,seq35441);
var seq35441__$1 = cljs.core.next.call(null,seq35441);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__35442,seq35441__$1);
});
/**
 * Deprecated
 */
taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__26886__auto__ = [];
var len__26879__auto___35470 = arguments.length;
var i__26880__auto___35471 = (0);
while(true){
if((i__26880__auto___35471 < len__26879__auto___35470)){
args__26886__auto__.push((arguments[i__26880__auto___35471]));

var G__35472 = (i__26880__auto___35471 + (1));
i__26880__auto___35471 = G__35472;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__35468){
var vec__35469 = p__35468;
var _QMARK_comparator = cljs.core.nth.call(null,vec__35469,(0),null);
var comparator = (function (){var or__25809__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__35469,_QMARK_comparator){
return (function (p1__35464_SHARP_,p2__35465_SHARP_){
if((comparator.call(null,p1__35464_SHARP_,p2__35465_SHARP_) > (0))){
return p2__35465_SHARP_;
} else {
return p1__35464_SHARP_;
}
});})(comparator,vec__35469,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq35466){
var G__35467 = cljs.core.first.call(null,seq35466);
var seq35466__$1 = cljs.core.next.call(null,seq35466);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__35467,seq35466__$1);
});
/**
 * Deprecated
 */
taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__26886__auto__ = [];
var len__26879__auto___35479 = arguments.length;
var i__26880__auto___35480 = (0);
while(true){
if((i__26880__auto___35480 < len__26879__auto___35479)){
args__26886__auto__.push((arguments[i__26880__auto___35480]));

var G__35481 = (i__26880__auto___35480 + (1));
i__26880__auto___35480 = G__35481;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__35477){
var vec__35478 = p__35477;
var _QMARK_comparator = cljs.core.nth.call(null,vec__35478,(0),null);
var comparator = (function (){var or__25809__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__35478,_QMARK_comparator){
return (function (p1__35473_SHARP_,p2__35474_SHARP_){
if((comparator.call(null,p1__35473_SHARP_,p2__35474_SHARP_) < (0))){
return p2__35474_SHARP_;
} else {
return p1__35473_SHARP_;
}
});})(comparator,vec__35478,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq35475){
var G__35476 = cljs.core.first.call(null,seq35475);
var seq35475__$1 = cljs.core.next.call(null,seq35475);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__35476,seq35475__$1);
});
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__25809__auto__ = x;
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

//# sourceMappingURL=encore.js.map