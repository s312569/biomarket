// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__22863__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__22863__auto__){
return or__22863__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__22863__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__22863__auto__)){
return or__22863__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32936_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32936_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__32941 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32942 = null;
var count__32943 = (0);
var i__32944 = (0);
while(true){
if((i__32944 < count__32943)){
var n = cljs.core._nth.call(null,chunk__32942,i__32944);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32945 = seq__32941;
var G__32946 = chunk__32942;
var G__32947 = count__32943;
var G__32948 = (i__32944 + (1));
seq__32941 = G__32945;
chunk__32942 = G__32946;
count__32943 = G__32947;
i__32944 = G__32948;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32941);
if(temp__4425__auto__){
var seq__32941__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32941__$1)){
var c__23674__auto__ = cljs.core.chunk_first.call(null,seq__32941__$1);
var G__32949 = cljs.core.chunk_rest.call(null,seq__32941__$1);
var G__32950 = c__23674__auto__;
var G__32951 = cljs.core.count.call(null,c__23674__auto__);
var G__32952 = (0);
seq__32941 = G__32949;
chunk__32942 = G__32950;
count__32943 = G__32951;
i__32944 = G__32952;
continue;
} else {
var n = cljs.core.first.call(null,seq__32941__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__32953 = cljs.core.next.call(null,seq__32941__$1);
var G__32954 = null;
var G__32955 = (0);
var G__32956 = (0);
seq__32941 = G__32953;
chunk__32942 = G__32954;
count__32943 = G__32955;
i__32944 = G__32956;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__32995_33002 = cljs.core.seq.call(null,deps);
var chunk__32996_33003 = null;
var count__32997_33004 = (0);
var i__32998_33005 = (0);
while(true){
if((i__32998_33005 < count__32997_33004)){
var dep_33006 = cljs.core._nth.call(null,chunk__32996_33003,i__32998_33005);
topo_sort_helper_STAR_.call(null,dep_33006,(depth + (1)),state);

var G__33007 = seq__32995_33002;
var G__33008 = chunk__32996_33003;
var G__33009 = count__32997_33004;
var G__33010 = (i__32998_33005 + (1));
seq__32995_33002 = G__33007;
chunk__32996_33003 = G__33008;
count__32997_33004 = G__33009;
i__32998_33005 = G__33010;
continue;
} else {
var temp__4425__auto___33011 = cljs.core.seq.call(null,seq__32995_33002);
if(temp__4425__auto___33011){
var seq__32995_33012__$1 = temp__4425__auto___33011;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32995_33012__$1)){
var c__23674__auto___33013 = cljs.core.chunk_first.call(null,seq__32995_33012__$1);
var G__33014 = cljs.core.chunk_rest.call(null,seq__32995_33012__$1);
var G__33015 = c__23674__auto___33013;
var G__33016 = cljs.core.count.call(null,c__23674__auto___33013);
var G__33017 = (0);
seq__32995_33002 = G__33014;
chunk__32996_33003 = G__33015;
count__32997_33004 = G__33016;
i__32998_33005 = G__33017;
continue;
} else {
var dep_33018 = cljs.core.first.call(null,seq__32995_33012__$1);
topo_sort_helper_STAR_.call(null,dep_33018,(depth + (1)),state);

var G__33019 = cljs.core.next.call(null,seq__32995_33012__$1);
var G__33020 = null;
var G__33021 = (0);
var G__33022 = (0);
seq__32995_33002 = G__33019;
chunk__32996_33003 = G__33020;
count__32997_33004 = G__33021;
i__32998_33005 = G__33022;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32999){
var vec__33001 = p__32999;
var x = cljs.core.nth.call(null,vec__33001,(0),null);
var xs = cljs.core.nthnext.call(null,vec__33001,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33001,x,xs,get_deps__$1){
return (function (p1__32957_SHARP_){
return clojure.set.difference.call(null,p1__32957_SHARP_,x);
});})(vec__33001,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33035 = cljs.core.seq.call(null,provides);
var chunk__33036 = null;
var count__33037 = (0);
var i__33038 = (0);
while(true){
if((i__33038 < count__33037)){
var prov = cljs.core._nth.call(null,chunk__33036,i__33038);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33039_33047 = cljs.core.seq.call(null,requires);
var chunk__33040_33048 = null;
var count__33041_33049 = (0);
var i__33042_33050 = (0);
while(true){
if((i__33042_33050 < count__33041_33049)){
var req_33051 = cljs.core._nth.call(null,chunk__33040_33048,i__33042_33050);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33051,prov);

var G__33052 = seq__33039_33047;
var G__33053 = chunk__33040_33048;
var G__33054 = count__33041_33049;
var G__33055 = (i__33042_33050 + (1));
seq__33039_33047 = G__33052;
chunk__33040_33048 = G__33053;
count__33041_33049 = G__33054;
i__33042_33050 = G__33055;
continue;
} else {
var temp__4425__auto___33056 = cljs.core.seq.call(null,seq__33039_33047);
if(temp__4425__auto___33056){
var seq__33039_33057__$1 = temp__4425__auto___33056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33039_33057__$1)){
var c__23674__auto___33058 = cljs.core.chunk_first.call(null,seq__33039_33057__$1);
var G__33059 = cljs.core.chunk_rest.call(null,seq__33039_33057__$1);
var G__33060 = c__23674__auto___33058;
var G__33061 = cljs.core.count.call(null,c__23674__auto___33058);
var G__33062 = (0);
seq__33039_33047 = G__33059;
chunk__33040_33048 = G__33060;
count__33041_33049 = G__33061;
i__33042_33050 = G__33062;
continue;
} else {
var req_33063 = cljs.core.first.call(null,seq__33039_33057__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33063,prov);

var G__33064 = cljs.core.next.call(null,seq__33039_33057__$1);
var G__33065 = null;
var G__33066 = (0);
var G__33067 = (0);
seq__33039_33047 = G__33064;
chunk__33040_33048 = G__33065;
count__33041_33049 = G__33066;
i__33042_33050 = G__33067;
continue;
}
} else {
}
}
break;
}

var G__33068 = seq__33035;
var G__33069 = chunk__33036;
var G__33070 = count__33037;
var G__33071 = (i__33038 + (1));
seq__33035 = G__33068;
chunk__33036 = G__33069;
count__33037 = G__33070;
i__33038 = G__33071;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33035);
if(temp__4425__auto__){
var seq__33035__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33035__$1)){
var c__23674__auto__ = cljs.core.chunk_first.call(null,seq__33035__$1);
var G__33072 = cljs.core.chunk_rest.call(null,seq__33035__$1);
var G__33073 = c__23674__auto__;
var G__33074 = cljs.core.count.call(null,c__23674__auto__);
var G__33075 = (0);
seq__33035 = G__33072;
chunk__33036 = G__33073;
count__33037 = G__33074;
i__33038 = G__33075;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33035__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33043_33076 = cljs.core.seq.call(null,requires);
var chunk__33044_33077 = null;
var count__33045_33078 = (0);
var i__33046_33079 = (0);
while(true){
if((i__33046_33079 < count__33045_33078)){
var req_33080 = cljs.core._nth.call(null,chunk__33044_33077,i__33046_33079);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33080,prov);

var G__33081 = seq__33043_33076;
var G__33082 = chunk__33044_33077;
var G__33083 = count__33045_33078;
var G__33084 = (i__33046_33079 + (1));
seq__33043_33076 = G__33081;
chunk__33044_33077 = G__33082;
count__33045_33078 = G__33083;
i__33046_33079 = G__33084;
continue;
} else {
var temp__4425__auto___33085__$1 = cljs.core.seq.call(null,seq__33043_33076);
if(temp__4425__auto___33085__$1){
var seq__33043_33086__$1 = temp__4425__auto___33085__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33043_33086__$1)){
var c__23674__auto___33087 = cljs.core.chunk_first.call(null,seq__33043_33086__$1);
var G__33088 = cljs.core.chunk_rest.call(null,seq__33043_33086__$1);
var G__33089 = c__23674__auto___33087;
var G__33090 = cljs.core.count.call(null,c__23674__auto___33087);
var G__33091 = (0);
seq__33043_33076 = G__33088;
chunk__33044_33077 = G__33089;
count__33045_33078 = G__33090;
i__33046_33079 = G__33091;
continue;
} else {
var req_33092 = cljs.core.first.call(null,seq__33043_33086__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33092,prov);

var G__33093 = cljs.core.next.call(null,seq__33043_33086__$1);
var G__33094 = null;
var G__33095 = (0);
var G__33096 = (0);
seq__33043_33076 = G__33093;
chunk__33044_33077 = G__33094;
count__33045_33078 = G__33095;
i__33046_33079 = G__33096;
continue;
}
} else {
}
}
break;
}

var G__33097 = cljs.core.next.call(null,seq__33035__$1);
var G__33098 = null;
var G__33099 = (0);
var G__33100 = (0);
seq__33035 = G__33097;
chunk__33036 = G__33098;
count__33037 = G__33099;
i__33038 = G__33100;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__33105_33109 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33106_33110 = null;
var count__33107_33111 = (0);
var i__33108_33112 = (0);
while(true){
if((i__33108_33112 < count__33107_33111)){
var ns_33113 = cljs.core._nth.call(null,chunk__33106_33110,i__33108_33112);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33113);

var G__33114 = seq__33105_33109;
var G__33115 = chunk__33106_33110;
var G__33116 = count__33107_33111;
var G__33117 = (i__33108_33112 + (1));
seq__33105_33109 = G__33114;
chunk__33106_33110 = G__33115;
count__33107_33111 = G__33116;
i__33108_33112 = G__33117;
continue;
} else {
var temp__4425__auto___33118 = cljs.core.seq.call(null,seq__33105_33109);
if(temp__4425__auto___33118){
var seq__33105_33119__$1 = temp__4425__auto___33118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33105_33119__$1)){
var c__23674__auto___33120 = cljs.core.chunk_first.call(null,seq__33105_33119__$1);
var G__33121 = cljs.core.chunk_rest.call(null,seq__33105_33119__$1);
var G__33122 = c__23674__auto___33120;
var G__33123 = cljs.core.count.call(null,c__23674__auto___33120);
var G__33124 = (0);
seq__33105_33109 = G__33121;
chunk__33106_33110 = G__33122;
count__33107_33111 = G__33123;
i__33108_33112 = G__33124;
continue;
} else {
var ns_33125 = cljs.core.first.call(null,seq__33105_33119__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33125);

var G__33126 = cljs.core.next.call(null,seq__33105_33119__$1);
var G__33127 = null;
var G__33128 = (0);
var G__33129 = (0);
seq__33105_33109 = G__33126;
chunk__33106_33110 = G__33127;
count__33107_33111 = G__33128;
i__33108_33112 = G__33129;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__22863__auto__ = goog.require__;
if(cljs.core.truth_(or__22863__auto__)){
return or__22863__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__33130__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33131__i = 0, G__33131__a = new Array(arguments.length -  0);
while (G__33131__i < G__33131__a.length) {G__33131__a[G__33131__i] = arguments[G__33131__i + 0]; ++G__33131__i;}
  args = new cljs.core.IndexedSeq(G__33131__a,0);
} 
return G__33130__delegate.call(this,args);};
G__33130.cljs$lang$maxFixedArity = 0;
G__33130.cljs$lang$applyTo = (function (arglist__33132){
var args = cljs.core.seq(arglist__33132);
return G__33130__delegate(args);
});
G__33130.cljs$core$IFn$_invoke$arity$variadic = G__33130__delegate;
return G__33130;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33134 = cljs.core._EQ_;
var expr__33135 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33134.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33135))){
var path_parts = ((function (pred__33134,expr__33135){
return (function (p1__33133_SHARP_){
return clojure.string.split.call(null,p1__33133_SHARP_,/[\/\\]/);
});})(pred__33134,expr__33135))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__33134,expr__33135){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33137){if((e33137 instanceof Error)){
var e = e33137;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33137;

}
}})());
});
;})(path_parts,sep,root,pred__33134,expr__33135))
} else {
if(cljs.core.truth_(pred__33134.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33135))){
return ((function (pred__33134,expr__33135){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__33134,expr__33135){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__33134,expr__33135))
);

return deferred.addErrback(((function (deferred,pred__33134,expr__33135){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__33134,expr__33135))
);
});
;})(pred__33134,expr__33135))
} else {
return ((function (pred__33134,expr__33135){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33134,expr__33135))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33138,callback){
var map__33141 = p__33138;
var map__33141__$1 = ((((!((map__33141 == null)))?((((map__33141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33141):map__33141);
var file_msg = map__33141__$1;
var request_url = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33141,map__33141__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33141,map__33141__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto__){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto__){
return (function (state_33165){
var state_val_33166 = (state_33165[(1)]);
if((state_val_33166 === (7))){
var inst_33161 = (state_33165[(2)]);
var state_33165__$1 = state_33165;
var statearr_33167_33187 = state_33165__$1;
(statearr_33167_33187[(2)] = inst_33161);

(statearr_33167_33187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33166 === (1))){
var state_33165__$1 = state_33165;
var statearr_33168_33188 = state_33165__$1;
(statearr_33168_33188[(2)] = null);

(statearr_33168_33188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33166 === (4))){
var inst_33145 = (state_33165[(7)]);
var inst_33145__$1 = (state_33165[(2)]);
var state_33165__$1 = (function (){var statearr_33169 = state_33165;
(statearr_33169[(7)] = inst_33145__$1);

return statearr_33169;
})();
if(cljs.core.truth_(inst_33145__$1)){
var statearr_33170_33189 = state_33165__$1;
(statearr_33170_33189[(1)] = (5));

} else {
var statearr_33171_33190 = state_33165__$1;
(statearr_33171_33190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33166 === (6))){
var state_33165__$1 = state_33165;
var statearr_33172_33191 = state_33165__$1;
(statearr_33172_33191[(2)] = null);

(statearr_33172_33191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33166 === (3))){
var inst_33163 = (state_33165[(2)]);
var state_33165__$1 = state_33165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33165__$1,inst_33163);
} else {
if((state_val_33166 === (2))){
var state_33165__$1 = state_33165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33165__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33166 === (11))){
var inst_33157 = (state_33165[(2)]);
var state_33165__$1 = (function (){var statearr_33173 = state_33165;
(statearr_33173[(8)] = inst_33157);

return statearr_33173;
})();
var statearr_33174_33192 = state_33165__$1;
(statearr_33174_33192[(2)] = null);

(statearr_33174_33192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33166 === (9))){
var inst_33149 = (state_33165[(9)]);
var inst_33151 = (state_33165[(10)]);
var inst_33153 = inst_33151.call(null,inst_33149);
var state_33165__$1 = state_33165;
var statearr_33175_33193 = state_33165__$1;
(statearr_33175_33193[(2)] = inst_33153);

(statearr_33175_33193[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33166 === (5))){
var inst_33145 = (state_33165[(7)]);
var inst_33147 = figwheel.client.file_reloading.blocking_load.call(null,inst_33145);
var state_33165__$1 = state_33165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33165__$1,(8),inst_33147);
} else {
if((state_val_33166 === (10))){
var inst_33149 = (state_33165[(9)]);
var inst_33155 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33149);
var state_33165__$1 = state_33165;
var statearr_33176_33194 = state_33165__$1;
(statearr_33176_33194[(2)] = inst_33155);

(statearr_33176_33194[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33166 === (8))){
var inst_33145 = (state_33165[(7)]);
var inst_33151 = (state_33165[(10)]);
var inst_33149 = (state_33165[(2)]);
var inst_33150 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33151__$1 = cljs.core.get.call(null,inst_33150,inst_33145);
var state_33165__$1 = (function (){var statearr_33177 = state_33165;
(statearr_33177[(9)] = inst_33149);

(statearr_33177[(10)] = inst_33151__$1);

return statearr_33177;
})();
if(cljs.core.truth_(inst_33151__$1)){
var statearr_33178_33195 = state_33165__$1;
(statearr_33178_33195[(1)] = (9));

} else {
var statearr_33179_33196 = state_33165__$1;
(statearr_33179_33196[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26994__auto__))
;
return ((function (switch__26882__auto__,c__26994__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26883__auto__ = null;
var figwheel$client$file_reloading$state_machine__26883__auto____0 = (function (){
var statearr_33183 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33183[(0)] = figwheel$client$file_reloading$state_machine__26883__auto__);

(statearr_33183[(1)] = (1));

return statearr_33183;
});
var figwheel$client$file_reloading$state_machine__26883__auto____1 = (function (state_33165){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_33165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e33184){if((e33184 instanceof Object)){
var ex__26886__auto__ = e33184;
var statearr_33185_33197 = state_33165;
(statearr_33185_33197[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33198 = state_33165;
state_33165 = G__33198;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26883__auto__ = function(state_33165){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26883__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26883__auto____1.call(this,state_33165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26883__auto____0;
figwheel$client$file_reloading$state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26883__auto____1;
return figwheel$client$file_reloading$state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto__))
})();
var state__26996__auto__ = (function (){var statearr_33186 = f__26995__auto__.call(null);
(statearr_33186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto__);

return statearr_33186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto__))
);

return c__26994__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33199,callback){
var map__33202 = p__33199;
var map__33202__$1 = ((((!((map__33202 == null)))?((((map__33202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33202):map__33202);
var file_msg = map__33202__$1;
var namespace = cljs.core.get.call(null,map__33202__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33202,map__33202__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33202,map__33202__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33204){
var map__33207 = p__33204;
var map__33207__$1 = ((((!((map__33207 == null)))?((((map__33207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33207):map__33207);
var file_msg = map__33207__$1;
var namespace = cljs.core.get.call(null,map__33207__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__22851__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__22851__auto__){
var or__22863__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__22863__auto__)){
return or__22863__auto__;
} else {
var or__22863__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__22863__auto____$1)){
return or__22863__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__22851__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33209,callback){
var map__33212 = p__33209;
var map__33212__$1 = ((((!((map__33212 == null)))?((((map__33212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33212):map__33212);
var file_msg = map__33212__$1;
var request_url = cljs.core.get.call(null,map__33212__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33212__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26994__auto___33300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto___33300,out){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto___33300,out){
return (function (state_33282){
var state_val_33283 = (state_33282[(1)]);
if((state_val_33283 === (1))){
var inst_33260 = cljs.core.nth.call(null,files,(0),null);
var inst_33261 = cljs.core.nthnext.call(null,files,(1));
var inst_33262 = files;
var state_33282__$1 = (function (){var statearr_33284 = state_33282;
(statearr_33284[(7)] = inst_33260);

(statearr_33284[(8)] = inst_33262);

(statearr_33284[(9)] = inst_33261);

return statearr_33284;
})();
var statearr_33285_33301 = state_33282__$1;
(statearr_33285_33301[(2)] = null);

(statearr_33285_33301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33283 === (2))){
var inst_33262 = (state_33282[(8)]);
var inst_33265 = (state_33282[(10)]);
var inst_33265__$1 = cljs.core.nth.call(null,inst_33262,(0),null);
var inst_33266 = cljs.core.nthnext.call(null,inst_33262,(1));
var inst_33267 = (inst_33265__$1 == null);
var inst_33268 = cljs.core.not.call(null,inst_33267);
var state_33282__$1 = (function (){var statearr_33286 = state_33282;
(statearr_33286[(11)] = inst_33266);

(statearr_33286[(10)] = inst_33265__$1);

return statearr_33286;
})();
if(inst_33268){
var statearr_33287_33302 = state_33282__$1;
(statearr_33287_33302[(1)] = (4));

} else {
var statearr_33288_33303 = state_33282__$1;
(statearr_33288_33303[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33283 === (3))){
var inst_33280 = (state_33282[(2)]);
var state_33282__$1 = state_33282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33282__$1,inst_33280);
} else {
if((state_val_33283 === (4))){
var inst_33265 = (state_33282[(10)]);
var inst_33270 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33265);
var state_33282__$1 = state_33282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33282__$1,(7),inst_33270);
} else {
if((state_val_33283 === (5))){
var inst_33276 = cljs.core.async.close_BANG_.call(null,out);
var state_33282__$1 = state_33282;
var statearr_33289_33304 = state_33282__$1;
(statearr_33289_33304[(2)] = inst_33276);

(statearr_33289_33304[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33283 === (6))){
var inst_33278 = (state_33282[(2)]);
var state_33282__$1 = state_33282;
var statearr_33290_33305 = state_33282__$1;
(statearr_33290_33305[(2)] = inst_33278);

(statearr_33290_33305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33283 === (7))){
var inst_33266 = (state_33282[(11)]);
var inst_33272 = (state_33282[(2)]);
var inst_33273 = cljs.core.async.put_BANG_.call(null,out,inst_33272);
var inst_33262 = inst_33266;
var state_33282__$1 = (function (){var statearr_33291 = state_33282;
(statearr_33291[(12)] = inst_33273);

(statearr_33291[(8)] = inst_33262);

return statearr_33291;
})();
var statearr_33292_33306 = state_33282__$1;
(statearr_33292_33306[(2)] = null);

(statearr_33292_33306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__26994__auto___33300,out))
;
return ((function (switch__26882__auto__,c__26994__auto___33300,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26883__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26883__auto____0 = (function (){
var statearr_33296 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33296[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26883__auto__);

(statearr_33296[(1)] = (1));

return statearr_33296;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26883__auto____1 = (function (state_33282){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_33282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e33297){if((e33297 instanceof Object)){
var ex__26886__auto__ = e33297;
var statearr_33298_33307 = state_33282;
(statearr_33298_33307[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33308 = state_33282;
state_33282 = G__33308;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26883__auto__ = function(state_33282){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26883__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26883__auto____1.call(this,state_33282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26883__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26883__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto___33300,out))
})();
var state__26996__auto__ = (function (){var statearr_33299 = f__26995__auto__.call(null);
(statearr_33299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto___33300);

return statearr_33299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto___33300,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33309,opts){
var map__33313 = p__33309;
var map__33313__$1 = ((((!((map__33313 == null)))?((((map__33313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33313):map__33313);
var eval_body__$1 = cljs.core.get.call(null,map__33313__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33313__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__22851__auto__ = eval_body__$1;
if(cljs.core.truth_(and__22851__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__22851__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33315){var e = e33315;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__33316_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33316_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__33321){
var vec__33322 = p__33321;
var k = cljs.core.nth.call(null,vec__33322,(0),null);
var v = cljs.core.nth.call(null,vec__33322,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33323){
var vec__33324 = p__33323;
var k = cljs.core.nth.call(null,vec__33324,(0),null);
var v = cljs.core.nth.call(null,vec__33324,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33328,p__33329){
var map__33576 = p__33328;
var map__33576__$1 = ((((!((map__33576 == null)))?((((map__33576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33576):map__33576);
var opts = map__33576__$1;
var before_jsload = cljs.core.get.call(null,map__33576__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33576__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33576__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33577 = p__33329;
var map__33577__$1 = ((((!((map__33577 == null)))?((((map__33577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33577):map__33577);
var msg = map__33577__$1;
var files = cljs.core.get.call(null,map__33577__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33577__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33577__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto__,map__33576,map__33576__$1,opts,before_jsload,on_jsload,reload_dependents,map__33577,map__33577__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto__,map__33576,map__33576__$1,opts,before_jsload,on_jsload,reload_dependents,map__33577,map__33577__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33730){
var state_val_33731 = (state_33730[(1)]);
if((state_val_33731 === (7))){
var inst_33593 = (state_33730[(7)]);
var inst_33594 = (state_33730[(8)]);
var inst_33591 = (state_33730[(9)]);
var inst_33592 = (state_33730[(10)]);
var inst_33599 = cljs.core._nth.call(null,inst_33592,inst_33594);
var inst_33600 = figwheel.client.file_reloading.eval_body.call(null,inst_33599,opts);
var inst_33601 = (inst_33594 + (1));
var tmp33732 = inst_33593;
var tmp33733 = inst_33591;
var tmp33734 = inst_33592;
var inst_33591__$1 = tmp33733;
var inst_33592__$1 = tmp33734;
var inst_33593__$1 = tmp33732;
var inst_33594__$1 = inst_33601;
var state_33730__$1 = (function (){var statearr_33735 = state_33730;
(statearr_33735[(7)] = inst_33593__$1);

(statearr_33735[(8)] = inst_33594__$1);

(statearr_33735[(9)] = inst_33591__$1);

(statearr_33735[(10)] = inst_33592__$1);

(statearr_33735[(11)] = inst_33600);

return statearr_33735;
})();
var statearr_33736_33822 = state_33730__$1;
(statearr_33736_33822[(2)] = null);

(statearr_33736_33822[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (20))){
var inst_33634 = (state_33730[(12)]);
var inst_33642 = figwheel.client.file_reloading.sort_files.call(null,inst_33634);
var state_33730__$1 = state_33730;
var statearr_33737_33823 = state_33730__$1;
(statearr_33737_33823[(2)] = inst_33642);

(statearr_33737_33823[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (27))){
var state_33730__$1 = state_33730;
var statearr_33738_33824 = state_33730__$1;
(statearr_33738_33824[(2)] = null);

(statearr_33738_33824[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (1))){
var inst_33583 = (state_33730[(13)]);
var inst_33580 = before_jsload.call(null,files);
var inst_33581 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33582 = (function (){return ((function (inst_33583,inst_33580,inst_33581,state_val_33731,c__26994__auto__,map__33576,map__33576__$1,opts,before_jsload,on_jsload,reload_dependents,map__33577,map__33577__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33325_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33325_SHARP_);
});
;})(inst_33583,inst_33580,inst_33581,state_val_33731,c__26994__auto__,map__33576,map__33576__$1,opts,before_jsload,on_jsload,reload_dependents,map__33577,map__33577__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33583__$1 = cljs.core.filter.call(null,inst_33582,files);
var inst_33584 = cljs.core.not_empty.call(null,inst_33583__$1);
var state_33730__$1 = (function (){var statearr_33739 = state_33730;
(statearr_33739[(13)] = inst_33583__$1);

(statearr_33739[(14)] = inst_33581);

(statearr_33739[(15)] = inst_33580);

return statearr_33739;
})();
if(cljs.core.truth_(inst_33584)){
var statearr_33740_33825 = state_33730__$1;
(statearr_33740_33825[(1)] = (2));

} else {
var statearr_33741_33826 = state_33730__$1;
(statearr_33741_33826[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (24))){
var state_33730__$1 = state_33730;
var statearr_33742_33827 = state_33730__$1;
(statearr_33742_33827[(2)] = null);

(statearr_33742_33827[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (39))){
var inst_33684 = (state_33730[(16)]);
var state_33730__$1 = state_33730;
var statearr_33743_33828 = state_33730__$1;
(statearr_33743_33828[(2)] = inst_33684);

(statearr_33743_33828[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (46))){
var inst_33725 = (state_33730[(2)]);
var state_33730__$1 = state_33730;
var statearr_33744_33829 = state_33730__$1;
(statearr_33744_33829[(2)] = inst_33725);

(statearr_33744_33829[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (4))){
var inst_33628 = (state_33730[(2)]);
var inst_33629 = cljs.core.List.EMPTY;
var inst_33630 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33629);
var inst_33631 = (function (){return ((function (inst_33628,inst_33629,inst_33630,state_val_33731,c__26994__auto__,map__33576,map__33576__$1,opts,before_jsload,on_jsload,reload_dependents,map__33577,map__33577__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33326_SHARP_){
var and__22851__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33326_SHARP_);
if(cljs.core.truth_(and__22851__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33326_SHARP_));
} else {
return and__22851__auto__;
}
});
;})(inst_33628,inst_33629,inst_33630,state_val_33731,c__26994__auto__,map__33576,map__33576__$1,opts,before_jsload,on_jsload,reload_dependents,map__33577,map__33577__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33632 = cljs.core.filter.call(null,inst_33631,files);
var inst_33633 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33634 = cljs.core.concat.call(null,inst_33632,inst_33633);
var state_33730__$1 = (function (){var statearr_33745 = state_33730;
(statearr_33745[(17)] = inst_33628);

(statearr_33745[(12)] = inst_33634);

(statearr_33745[(18)] = inst_33630);

return statearr_33745;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33746_33830 = state_33730__$1;
(statearr_33746_33830[(1)] = (16));

} else {
var statearr_33747_33831 = state_33730__$1;
(statearr_33747_33831[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (15))){
var inst_33618 = (state_33730[(2)]);
var state_33730__$1 = state_33730;
var statearr_33748_33832 = state_33730__$1;
(statearr_33748_33832[(2)] = inst_33618);

(statearr_33748_33832[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (21))){
var inst_33644 = (state_33730[(19)]);
var inst_33644__$1 = (state_33730[(2)]);
var inst_33645 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33644__$1);
var state_33730__$1 = (function (){var statearr_33749 = state_33730;
(statearr_33749[(19)] = inst_33644__$1);

return statearr_33749;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33730__$1,(22),inst_33645);
} else {
if((state_val_33731 === (31))){
var inst_33728 = (state_33730[(2)]);
var state_33730__$1 = state_33730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33730__$1,inst_33728);
} else {
if((state_val_33731 === (32))){
var inst_33684 = (state_33730[(16)]);
var inst_33689 = inst_33684.cljs$lang$protocol_mask$partition0$;
var inst_33690 = (inst_33689 & (64));
var inst_33691 = inst_33684.cljs$core$ISeq$;
var inst_33692 = (inst_33690) || (inst_33691);
var state_33730__$1 = state_33730;
if(cljs.core.truth_(inst_33692)){
var statearr_33750_33833 = state_33730__$1;
(statearr_33750_33833[(1)] = (35));

} else {
var statearr_33751_33834 = state_33730__$1;
(statearr_33751_33834[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (40))){
var inst_33705 = (state_33730[(20)]);
var inst_33704 = (state_33730[(2)]);
var inst_33705__$1 = cljs.core.get.call(null,inst_33704,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33706 = cljs.core.get.call(null,inst_33704,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33707 = cljs.core.not_empty.call(null,inst_33705__$1);
var state_33730__$1 = (function (){var statearr_33752 = state_33730;
(statearr_33752[(21)] = inst_33706);

(statearr_33752[(20)] = inst_33705__$1);

return statearr_33752;
})();
if(cljs.core.truth_(inst_33707)){
var statearr_33753_33835 = state_33730__$1;
(statearr_33753_33835[(1)] = (41));

} else {
var statearr_33754_33836 = state_33730__$1;
(statearr_33754_33836[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (33))){
var state_33730__$1 = state_33730;
var statearr_33755_33837 = state_33730__$1;
(statearr_33755_33837[(2)] = false);

(statearr_33755_33837[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (13))){
var inst_33604 = (state_33730[(22)]);
var inst_33608 = cljs.core.chunk_first.call(null,inst_33604);
var inst_33609 = cljs.core.chunk_rest.call(null,inst_33604);
var inst_33610 = cljs.core.count.call(null,inst_33608);
var inst_33591 = inst_33609;
var inst_33592 = inst_33608;
var inst_33593 = inst_33610;
var inst_33594 = (0);
var state_33730__$1 = (function (){var statearr_33756 = state_33730;
(statearr_33756[(7)] = inst_33593);

(statearr_33756[(8)] = inst_33594);

(statearr_33756[(9)] = inst_33591);

(statearr_33756[(10)] = inst_33592);

return statearr_33756;
})();
var statearr_33757_33838 = state_33730__$1;
(statearr_33757_33838[(2)] = null);

(statearr_33757_33838[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (22))){
var inst_33647 = (state_33730[(23)]);
var inst_33652 = (state_33730[(24)]);
var inst_33644 = (state_33730[(19)]);
var inst_33648 = (state_33730[(25)]);
var inst_33647__$1 = (state_33730[(2)]);
var inst_33648__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33647__$1);
var inst_33649 = (function (){var all_files = inst_33644;
var res_SINGLEQUOTE_ = inst_33647__$1;
var res = inst_33648__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33647,inst_33652,inst_33644,inst_33648,inst_33647__$1,inst_33648__$1,state_val_33731,c__26994__auto__,map__33576,map__33576__$1,opts,before_jsload,on_jsload,reload_dependents,map__33577,map__33577__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33327_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33327_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33647,inst_33652,inst_33644,inst_33648,inst_33647__$1,inst_33648__$1,state_val_33731,c__26994__auto__,map__33576,map__33576__$1,opts,before_jsload,on_jsload,reload_dependents,map__33577,map__33577__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33650 = cljs.core.filter.call(null,inst_33649,inst_33647__$1);
var inst_33651 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33652__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33651);
var inst_33653 = cljs.core.not_empty.call(null,inst_33652__$1);
var state_33730__$1 = (function (){var statearr_33758 = state_33730;
(statearr_33758[(23)] = inst_33647__$1);

(statearr_33758[(24)] = inst_33652__$1);

(statearr_33758[(26)] = inst_33650);

(statearr_33758[(25)] = inst_33648__$1);

return statearr_33758;
})();
if(cljs.core.truth_(inst_33653)){
var statearr_33759_33839 = state_33730__$1;
(statearr_33759_33839[(1)] = (23));

} else {
var statearr_33760_33840 = state_33730__$1;
(statearr_33760_33840[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (36))){
var state_33730__$1 = state_33730;
var statearr_33761_33841 = state_33730__$1;
(statearr_33761_33841[(2)] = false);

(statearr_33761_33841[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (41))){
var inst_33705 = (state_33730[(20)]);
var inst_33709 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33710 = cljs.core.map.call(null,inst_33709,inst_33705);
var inst_33711 = cljs.core.pr_str.call(null,inst_33710);
var inst_33712 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_33711)].join('');
var inst_33713 = figwheel.client.utils.log.call(null,inst_33712);
var state_33730__$1 = state_33730;
var statearr_33762_33842 = state_33730__$1;
(statearr_33762_33842[(2)] = inst_33713);

(statearr_33762_33842[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (43))){
var inst_33706 = (state_33730[(21)]);
var inst_33716 = (state_33730[(2)]);
var inst_33717 = cljs.core.not_empty.call(null,inst_33706);
var state_33730__$1 = (function (){var statearr_33763 = state_33730;
(statearr_33763[(27)] = inst_33716);

return statearr_33763;
})();
if(cljs.core.truth_(inst_33717)){
var statearr_33764_33843 = state_33730__$1;
(statearr_33764_33843[(1)] = (44));

} else {
var statearr_33765_33844 = state_33730__$1;
(statearr_33765_33844[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (29))){
var inst_33647 = (state_33730[(23)]);
var inst_33652 = (state_33730[(24)]);
var inst_33644 = (state_33730[(19)]);
var inst_33650 = (state_33730[(26)]);
var inst_33648 = (state_33730[(25)]);
var inst_33684 = (state_33730[(16)]);
var inst_33680 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33683 = (function (){var all_files = inst_33644;
var res_SINGLEQUOTE_ = inst_33647;
var res = inst_33648;
var files_not_loaded = inst_33650;
var dependencies_that_loaded = inst_33652;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33647,inst_33652,inst_33644,inst_33650,inst_33648,inst_33684,inst_33680,state_val_33731,c__26994__auto__,map__33576,map__33576__$1,opts,before_jsload,on_jsload,reload_dependents,map__33577,map__33577__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33682){
var map__33766 = p__33682;
var map__33766__$1 = ((((!((map__33766 == null)))?((((map__33766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33766):map__33766);
var namespace = cljs.core.get.call(null,map__33766__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33647,inst_33652,inst_33644,inst_33650,inst_33648,inst_33684,inst_33680,state_val_33731,c__26994__auto__,map__33576,map__33576__$1,opts,before_jsload,on_jsload,reload_dependents,map__33577,map__33577__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33684__$1 = cljs.core.group_by.call(null,inst_33683,inst_33650);
var inst_33686 = (inst_33684__$1 == null);
var inst_33687 = cljs.core.not.call(null,inst_33686);
var state_33730__$1 = (function (){var statearr_33768 = state_33730;
(statearr_33768[(28)] = inst_33680);

(statearr_33768[(16)] = inst_33684__$1);

return statearr_33768;
})();
if(inst_33687){
var statearr_33769_33845 = state_33730__$1;
(statearr_33769_33845[(1)] = (32));

} else {
var statearr_33770_33846 = state_33730__$1;
(statearr_33770_33846[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (44))){
var inst_33706 = (state_33730[(21)]);
var inst_33719 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33706);
var inst_33720 = cljs.core.pr_str.call(null,inst_33719);
var inst_33721 = [cljs.core.str("not required: "),cljs.core.str(inst_33720)].join('');
var inst_33722 = figwheel.client.utils.log.call(null,inst_33721);
var state_33730__$1 = state_33730;
var statearr_33771_33847 = state_33730__$1;
(statearr_33771_33847[(2)] = inst_33722);

(statearr_33771_33847[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (6))){
var inst_33625 = (state_33730[(2)]);
var state_33730__$1 = state_33730;
var statearr_33772_33848 = state_33730__$1;
(statearr_33772_33848[(2)] = inst_33625);

(statearr_33772_33848[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (28))){
var inst_33650 = (state_33730[(26)]);
var inst_33677 = (state_33730[(2)]);
var inst_33678 = cljs.core.not_empty.call(null,inst_33650);
var state_33730__$1 = (function (){var statearr_33773 = state_33730;
(statearr_33773[(29)] = inst_33677);

return statearr_33773;
})();
if(cljs.core.truth_(inst_33678)){
var statearr_33774_33849 = state_33730__$1;
(statearr_33774_33849[(1)] = (29));

} else {
var statearr_33775_33850 = state_33730__$1;
(statearr_33775_33850[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (25))){
var inst_33648 = (state_33730[(25)]);
var inst_33664 = (state_33730[(2)]);
var inst_33665 = cljs.core.not_empty.call(null,inst_33648);
var state_33730__$1 = (function (){var statearr_33776 = state_33730;
(statearr_33776[(30)] = inst_33664);

return statearr_33776;
})();
if(cljs.core.truth_(inst_33665)){
var statearr_33777_33851 = state_33730__$1;
(statearr_33777_33851[(1)] = (26));

} else {
var statearr_33778_33852 = state_33730__$1;
(statearr_33778_33852[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (34))){
var inst_33699 = (state_33730[(2)]);
var state_33730__$1 = state_33730;
if(cljs.core.truth_(inst_33699)){
var statearr_33779_33853 = state_33730__$1;
(statearr_33779_33853[(1)] = (38));

} else {
var statearr_33780_33854 = state_33730__$1;
(statearr_33780_33854[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (17))){
var state_33730__$1 = state_33730;
var statearr_33781_33855 = state_33730__$1;
(statearr_33781_33855[(2)] = recompile_dependents);

(statearr_33781_33855[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (3))){
var state_33730__$1 = state_33730;
var statearr_33782_33856 = state_33730__$1;
(statearr_33782_33856[(2)] = null);

(statearr_33782_33856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (12))){
var inst_33621 = (state_33730[(2)]);
var state_33730__$1 = state_33730;
var statearr_33783_33857 = state_33730__$1;
(statearr_33783_33857[(2)] = inst_33621);

(statearr_33783_33857[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (2))){
var inst_33583 = (state_33730[(13)]);
var inst_33590 = cljs.core.seq.call(null,inst_33583);
var inst_33591 = inst_33590;
var inst_33592 = null;
var inst_33593 = (0);
var inst_33594 = (0);
var state_33730__$1 = (function (){var statearr_33784 = state_33730;
(statearr_33784[(7)] = inst_33593);

(statearr_33784[(8)] = inst_33594);

(statearr_33784[(9)] = inst_33591);

(statearr_33784[(10)] = inst_33592);

return statearr_33784;
})();
var statearr_33785_33858 = state_33730__$1;
(statearr_33785_33858[(2)] = null);

(statearr_33785_33858[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (23))){
var inst_33647 = (state_33730[(23)]);
var inst_33652 = (state_33730[(24)]);
var inst_33644 = (state_33730[(19)]);
var inst_33650 = (state_33730[(26)]);
var inst_33648 = (state_33730[(25)]);
var inst_33655 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33657 = (function (){var all_files = inst_33644;
var res_SINGLEQUOTE_ = inst_33647;
var res = inst_33648;
var files_not_loaded = inst_33650;
var dependencies_that_loaded = inst_33652;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33647,inst_33652,inst_33644,inst_33650,inst_33648,inst_33655,state_val_33731,c__26994__auto__,map__33576,map__33576__$1,opts,before_jsload,on_jsload,reload_dependents,map__33577,map__33577__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33656){
var map__33786 = p__33656;
var map__33786__$1 = ((((!((map__33786 == null)))?((((map__33786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33786):map__33786);
var request_url = cljs.core.get.call(null,map__33786__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33647,inst_33652,inst_33644,inst_33650,inst_33648,inst_33655,state_val_33731,c__26994__auto__,map__33576,map__33576__$1,opts,before_jsload,on_jsload,reload_dependents,map__33577,map__33577__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33658 = cljs.core.reverse.call(null,inst_33652);
var inst_33659 = cljs.core.map.call(null,inst_33657,inst_33658);
var inst_33660 = cljs.core.pr_str.call(null,inst_33659);
var inst_33661 = figwheel.client.utils.log.call(null,inst_33660);
var state_33730__$1 = (function (){var statearr_33788 = state_33730;
(statearr_33788[(31)] = inst_33655);

return statearr_33788;
})();
var statearr_33789_33859 = state_33730__$1;
(statearr_33789_33859[(2)] = inst_33661);

(statearr_33789_33859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (35))){
var state_33730__$1 = state_33730;
var statearr_33790_33860 = state_33730__$1;
(statearr_33790_33860[(2)] = true);

(statearr_33790_33860[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (19))){
var inst_33634 = (state_33730[(12)]);
var inst_33640 = figwheel.client.file_reloading.expand_files.call(null,inst_33634);
var state_33730__$1 = state_33730;
var statearr_33791_33861 = state_33730__$1;
(statearr_33791_33861[(2)] = inst_33640);

(statearr_33791_33861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (11))){
var state_33730__$1 = state_33730;
var statearr_33792_33862 = state_33730__$1;
(statearr_33792_33862[(2)] = null);

(statearr_33792_33862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (9))){
var inst_33623 = (state_33730[(2)]);
var state_33730__$1 = state_33730;
var statearr_33793_33863 = state_33730__$1;
(statearr_33793_33863[(2)] = inst_33623);

(statearr_33793_33863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (5))){
var inst_33593 = (state_33730[(7)]);
var inst_33594 = (state_33730[(8)]);
var inst_33596 = (inst_33594 < inst_33593);
var inst_33597 = inst_33596;
var state_33730__$1 = state_33730;
if(cljs.core.truth_(inst_33597)){
var statearr_33794_33864 = state_33730__$1;
(statearr_33794_33864[(1)] = (7));

} else {
var statearr_33795_33865 = state_33730__$1;
(statearr_33795_33865[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (14))){
var inst_33604 = (state_33730[(22)]);
var inst_33613 = cljs.core.first.call(null,inst_33604);
var inst_33614 = figwheel.client.file_reloading.eval_body.call(null,inst_33613,opts);
var inst_33615 = cljs.core.next.call(null,inst_33604);
var inst_33591 = inst_33615;
var inst_33592 = null;
var inst_33593 = (0);
var inst_33594 = (0);
var state_33730__$1 = (function (){var statearr_33796 = state_33730;
(statearr_33796[(32)] = inst_33614);

(statearr_33796[(7)] = inst_33593);

(statearr_33796[(8)] = inst_33594);

(statearr_33796[(9)] = inst_33591);

(statearr_33796[(10)] = inst_33592);

return statearr_33796;
})();
var statearr_33797_33866 = state_33730__$1;
(statearr_33797_33866[(2)] = null);

(statearr_33797_33866[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (45))){
var state_33730__$1 = state_33730;
var statearr_33798_33867 = state_33730__$1;
(statearr_33798_33867[(2)] = null);

(statearr_33798_33867[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (26))){
var inst_33647 = (state_33730[(23)]);
var inst_33652 = (state_33730[(24)]);
var inst_33644 = (state_33730[(19)]);
var inst_33650 = (state_33730[(26)]);
var inst_33648 = (state_33730[(25)]);
var inst_33667 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33669 = (function (){var all_files = inst_33644;
var res_SINGLEQUOTE_ = inst_33647;
var res = inst_33648;
var files_not_loaded = inst_33650;
var dependencies_that_loaded = inst_33652;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33647,inst_33652,inst_33644,inst_33650,inst_33648,inst_33667,state_val_33731,c__26994__auto__,map__33576,map__33576__$1,opts,before_jsload,on_jsload,reload_dependents,map__33577,map__33577__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33668){
var map__33799 = p__33668;
var map__33799__$1 = ((((!((map__33799 == null)))?((((map__33799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33799):map__33799);
var namespace = cljs.core.get.call(null,map__33799__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33799__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33647,inst_33652,inst_33644,inst_33650,inst_33648,inst_33667,state_val_33731,c__26994__auto__,map__33576,map__33576__$1,opts,before_jsload,on_jsload,reload_dependents,map__33577,map__33577__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33670 = cljs.core.map.call(null,inst_33669,inst_33648);
var inst_33671 = cljs.core.pr_str.call(null,inst_33670);
var inst_33672 = figwheel.client.utils.log.call(null,inst_33671);
var inst_33673 = (function (){var all_files = inst_33644;
var res_SINGLEQUOTE_ = inst_33647;
var res = inst_33648;
var files_not_loaded = inst_33650;
var dependencies_that_loaded = inst_33652;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33647,inst_33652,inst_33644,inst_33650,inst_33648,inst_33667,inst_33669,inst_33670,inst_33671,inst_33672,state_val_33731,c__26994__auto__,map__33576,map__33576__$1,opts,before_jsload,on_jsload,reload_dependents,map__33577,map__33577__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33647,inst_33652,inst_33644,inst_33650,inst_33648,inst_33667,inst_33669,inst_33670,inst_33671,inst_33672,state_val_33731,c__26994__auto__,map__33576,map__33576__$1,opts,before_jsload,on_jsload,reload_dependents,map__33577,map__33577__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33674 = setTimeout(inst_33673,(10));
var state_33730__$1 = (function (){var statearr_33801 = state_33730;
(statearr_33801[(33)] = inst_33667);

(statearr_33801[(34)] = inst_33672);

return statearr_33801;
})();
var statearr_33802_33868 = state_33730__$1;
(statearr_33802_33868[(2)] = inst_33674);

(statearr_33802_33868[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (16))){
var state_33730__$1 = state_33730;
var statearr_33803_33869 = state_33730__$1;
(statearr_33803_33869[(2)] = reload_dependents);

(statearr_33803_33869[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (38))){
var inst_33684 = (state_33730[(16)]);
var inst_33701 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33684);
var state_33730__$1 = state_33730;
var statearr_33804_33870 = state_33730__$1;
(statearr_33804_33870[(2)] = inst_33701);

(statearr_33804_33870[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (30))){
var state_33730__$1 = state_33730;
var statearr_33805_33871 = state_33730__$1;
(statearr_33805_33871[(2)] = null);

(statearr_33805_33871[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (10))){
var inst_33604 = (state_33730[(22)]);
var inst_33606 = cljs.core.chunked_seq_QMARK_.call(null,inst_33604);
var state_33730__$1 = state_33730;
if(inst_33606){
var statearr_33806_33872 = state_33730__$1;
(statearr_33806_33872[(1)] = (13));

} else {
var statearr_33807_33873 = state_33730__$1;
(statearr_33807_33873[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (18))){
var inst_33638 = (state_33730[(2)]);
var state_33730__$1 = state_33730;
if(cljs.core.truth_(inst_33638)){
var statearr_33808_33874 = state_33730__$1;
(statearr_33808_33874[(1)] = (19));

} else {
var statearr_33809_33875 = state_33730__$1;
(statearr_33809_33875[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (42))){
var state_33730__$1 = state_33730;
var statearr_33810_33876 = state_33730__$1;
(statearr_33810_33876[(2)] = null);

(statearr_33810_33876[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (37))){
var inst_33696 = (state_33730[(2)]);
var state_33730__$1 = state_33730;
var statearr_33811_33877 = state_33730__$1;
(statearr_33811_33877[(2)] = inst_33696);

(statearr_33811_33877[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (8))){
var inst_33591 = (state_33730[(9)]);
var inst_33604 = (state_33730[(22)]);
var inst_33604__$1 = cljs.core.seq.call(null,inst_33591);
var state_33730__$1 = (function (){var statearr_33812 = state_33730;
(statearr_33812[(22)] = inst_33604__$1);

return statearr_33812;
})();
if(inst_33604__$1){
var statearr_33813_33878 = state_33730__$1;
(statearr_33813_33878[(1)] = (10));

} else {
var statearr_33814_33879 = state_33730__$1;
(statearr_33814_33879[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26994__auto__,map__33576,map__33576__$1,opts,before_jsload,on_jsload,reload_dependents,map__33577,map__33577__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26882__auto__,c__26994__auto__,map__33576,map__33576__$1,opts,before_jsload,on_jsload,reload_dependents,map__33577,map__33577__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26883__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26883__auto____0 = (function (){
var statearr_33818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33818[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26883__auto__);

(statearr_33818[(1)] = (1));

return statearr_33818;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26883__auto____1 = (function (state_33730){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_33730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e33819){if((e33819 instanceof Object)){
var ex__26886__auto__ = e33819;
var statearr_33820_33880 = state_33730;
(statearr_33820_33880[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33881 = state_33730;
state_33730 = G__33881;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26883__auto__ = function(state_33730){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26883__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26883__auto____1.call(this,state_33730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26883__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26883__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto__,map__33576,map__33576__$1,opts,before_jsload,on_jsload,reload_dependents,map__33577,map__33577__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26996__auto__ = (function (){var statearr_33821 = f__26995__auto__.call(null);
(statearr_33821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto__);

return statearr_33821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto__,map__33576,map__33576__$1,opts,before_jsload,on_jsload,reload_dependents,map__33577,map__33577__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26994__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33884,link){
var map__33887 = p__33884;
var map__33887__$1 = ((((!((map__33887 == null)))?((((map__33887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33887):map__33887);
var file = cljs.core.get.call(null,map__33887__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__33887,map__33887__$1,file){
return (function (p1__33882_SHARP_,p2__33883_SHARP_){
if(cljs.core._EQ_.call(null,p1__33882_SHARP_,p2__33883_SHARP_)){
return p1__33882_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__33887,map__33887__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33893){
var map__33894 = p__33893;
var map__33894__$1 = ((((!((map__33894 == null)))?((((map__33894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33894):map__33894);
var match_length = cljs.core.get.call(null,map__33894__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33894__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33889_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33889_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args33896 = [];
var len__23933__auto___33899 = arguments.length;
var i__23934__auto___33900 = (0);
while(true){
if((i__23934__auto___33900 < len__23933__auto___33899)){
args33896.push((arguments[i__23934__auto___33900]));

var G__33901 = (i__23934__auto___33900 + (1));
i__23934__auto___33900 = G__33901;
continue;
} else {
}
break;
}

var G__33898 = args33896.length;
switch (G__33898) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33896.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33903_SHARP_,p2__33904_SHARP_){
return cljs.core.assoc.call(null,p1__33903_SHARP_,cljs.core.get.call(null,p2__33904_SHARP_,key),p2__33904_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__33905){
var map__33908 = p__33905;
var map__33908__$1 = ((((!((map__33908 == null)))?((((map__33908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33908):map__33908);
var f_data = map__33908__$1;
var file = cljs.core.get.call(null,map__33908__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33910,files_msg){
var map__33917 = p__33910;
var map__33917__$1 = ((((!((map__33917 == null)))?((((map__33917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33917):map__33917);
var opts = map__33917__$1;
var on_cssload = cljs.core.get.call(null,map__33917__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__33919_33923 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__33920_33924 = null;
var count__33921_33925 = (0);
var i__33922_33926 = (0);
while(true){
if((i__33922_33926 < count__33921_33925)){
var f_33927 = cljs.core._nth.call(null,chunk__33920_33924,i__33922_33926);
figwheel.client.file_reloading.reload_css_file.call(null,f_33927);

var G__33928 = seq__33919_33923;
var G__33929 = chunk__33920_33924;
var G__33930 = count__33921_33925;
var G__33931 = (i__33922_33926 + (1));
seq__33919_33923 = G__33928;
chunk__33920_33924 = G__33929;
count__33921_33925 = G__33930;
i__33922_33926 = G__33931;
continue;
} else {
var temp__4425__auto___33932 = cljs.core.seq.call(null,seq__33919_33923);
if(temp__4425__auto___33932){
var seq__33919_33933__$1 = temp__4425__auto___33932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33919_33933__$1)){
var c__23674__auto___33934 = cljs.core.chunk_first.call(null,seq__33919_33933__$1);
var G__33935 = cljs.core.chunk_rest.call(null,seq__33919_33933__$1);
var G__33936 = c__23674__auto___33934;
var G__33937 = cljs.core.count.call(null,c__23674__auto___33934);
var G__33938 = (0);
seq__33919_33923 = G__33935;
chunk__33920_33924 = G__33936;
count__33921_33925 = G__33937;
i__33922_33926 = G__33938;
continue;
} else {
var f_33939 = cljs.core.first.call(null,seq__33919_33933__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_33939);

var G__33940 = cljs.core.next.call(null,seq__33919_33933__$1);
var G__33941 = null;
var G__33942 = (0);
var G__33943 = (0);
seq__33919_33923 = G__33940;
chunk__33920_33924 = G__33941;
count__33921_33925 = G__33942;
i__33922_33926 = G__33943;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__33917,map__33917__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__33917,map__33917__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map