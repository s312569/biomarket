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
var or__21738__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21738__auto__){
return or__21738__auto__;
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
var or__21738__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21738__auto__)){
return or__21738__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28813_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28813_SHARP_));
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
var seq__28818 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28819 = null;
var count__28820 = (0);
var i__28821 = (0);
while(true){
if((i__28821 < count__28820)){
var n = cljs.core._nth.call(null,chunk__28819,i__28821);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28822 = seq__28818;
var G__28823 = chunk__28819;
var G__28824 = count__28820;
var G__28825 = (i__28821 + (1));
seq__28818 = G__28822;
chunk__28819 = G__28823;
count__28820 = G__28824;
i__28821 = G__28825;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28818);
if(temp__4425__auto__){
var seq__28818__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28818__$1)){
var c__22549__auto__ = cljs.core.chunk_first.call(null,seq__28818__$1);
var G__28826 = cljs.core.chunk_rest.call(null,seq__28818__$1);
var G__28827 = c__22549__auto__;
var G__28828 = cljs.core.count.call(null,c__22549__auto__);
var G__28829 = (0);
seq__28818 = G__28826;
chunk__28819 = G__28827;
count__28820 = G__28828;
i__28821 = G__28829;
continue;
} else {
var n = cljs.core.first.call(null,seq__28818__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28830 = cljs.core.next.call(null,seq__28818__$1);
var G__28831 = null;
var G__28832 = (0);
var G__28833 = (0);
seq__28818 = G__28830;
chunk__28819 = G__28831;
count__28820 = G__28832;
i__28821 = G__28833;
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

var seq__28872_28879 = cljs.core.seq.call(null,deps);
var chunk__28873_28880 = null;
var count__28874_28881 = (0);
var i__28875_28882 = (0);
while(true){
if((i__28875_28882 < count__28874_28881)){
var dep_28883 = cljs.core._nth.call(null,chunk__28873_28880,i__28875_28882);
topo_sort_helper_STAR_.call(null,dep_28883,(depth + (1)),state);

var G__28884 = seq__28872_28879;
var G__28885 = chunk__28873_28880;
var G__28886 = count__28874_28881;
var G__28887 = (i__28875_28882 + (1));
seq__28872_28879 = G__28884;
chunk__28873_28880 = G__28885;
count__28874_28881 = G__28886;
i__28875_28882 = G__28887;
continue;
} else {
var temp__4425__auto___28888 = cljs.core.seq.call(null,seq__28872_28879);
if(temp__4425__auto___28888){
var seq__28872_28889__$1 = temp__4425__auto___28888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28872_28889__$1)){
var c__22549__auto___28890 = cljs.core.chunk_first.call(null,seq__28872_28889__$1);
var G__28891 = cljs.core.chunk_rest.call(null,seq__28872_28889__$1);
var G__28892 = c__22549__auto___28890;
var G__28893 = cljs.core.count.call(null,c__22549__auto___28890);
var G__28894 = (0);
seq__28872_28879 = G__28891;
chunk__28873_28880 = G__28892;
count__28874_28881 = G__28893;
i__28875_28882 = G__28894;
continue;
} else {
var dep_28895 = cljs.core.first.call(null,seq__28872_28889__$1);
topo_sort_helper_STAR_.call(null,dep_28895,(depth + (1)),state);

var G__28896 = cljs.core.next.call(null,seq__28872_28889__$1);
var G__28897 = null;
var G__28898 = (0);
var G__28899 = (0);
seq__28872_28879 = G__28896;
chunk__28873_28880 = G__28897;
count__28874_28881 = G__28898;
i__28875_28882 = G__28899;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28876){
var vec__28878 = p__28876;
var x = cljs.core.nth.call(null,vec__28878,(0),null);
var xs = cljs.core.nthnext.call(null,vec__28878,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28878,x,xs,get_deps__$1){
return (function (p1__28834_SHARP_){
return clojure.set.difference.call(null,p1__28834_SHARP_,x);
});})(vec__28878,x,xs,get_deps__$1))
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
var seq__28912 = cljs.core.seq.call(null,provides);
var chunk__28913 = null;
var count__28914 = (0);
var i__28915 = (0);
while(true){
if((i__28915 < count__28914)){
var prov = cljs.core._nth.call(null,chunk__28913,i__28915);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28916_28924 = cljs.core.seq.call(null,requires);
var chunk__28917_28925 = null;
var count__28918_28926 = (0);
var i__28919_28927 = (0);
while(true){
if((i__28919_28927 < count__28918_28926)){
var req_28928 = cljs.core._nth.call(null,chunk__28917_28925,i__28919_28927);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28928,prov);

var G__28929 = seq__28916_28924;
var G__28930 = chunk__28917_28925;
var G__28931 = count__28918_28926;
var G__28932 = (i__28919_28927 + (1));
seq__28916_28924 = G__28929;
chunk__28917_28925 = G__28930;
count__28918_28926 = G__28931;
i__28919_28927 = G__28932;
continue;
} else {
var temp__4425__auto___28933 = cljs.core.seq.call(null,seq__28916_28924);
if(temp__4425__auto___28933){
var seq__28916_28934__$1 = temp__4425__auto___28933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28916_28934__$1)){
var c__22549__auto___28935 = cljs.core.chunk_first.call(null,seq__28916_28934__$1);
var G__28936 = cljs.core.chunk_rest.call(null,seq__28916_28934__$1);
var G__28937 = c__22549__auto___28935;
var G__28938 = cljs.core.count.call(null,c__22549__auto___28935);
var G__28939 = (0);
seq__28916_28924 = G__28936;
chunk__28917_28925 = G__28937;
count__28918_28926 = G__28938;
i__28919_28927 = G__28939;
continue;
} else {
var req_28940 = cljs.core.first.call(null,seq__28916_28934__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28940,prov);

var G__28941 = cljs.core.next.call(null,seq__28916_28934__$1);
var G__28942 = null;
var G__28943 = (0);
var G__28944 = (0);
seq__28916_28924 = G__28941;
chunk__28917_28925 = G__28942;
count__28918_28926 = G__28943;
i__28919_28927 = G__28944;
continue;
}
} else {
}
}
break;
}

var G__28945 = seq__28912;
var G__28946 = chunk__28913;
var G__28947 = count__28914;
var G__28948 = (i__28915 + (1));
seq__28912 = G__28945;
chunk__28913 = G__28946;
count__28914 = G__28947;
i__28915 = G__28948;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28912);
if(temp__4425__auto__){
var seq__28912__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28912__$1)){
var c__22549__auto__ = cljs.core.chunk_first.call(null,seq__28912__$1);
var G__28949 = cljs.core.chunk_rest.call(null,seq__28912__$1);
var G__28950 = c__22549__auto__;
var G__28951 = cljs.core.count.call(null,c__22549__auto__);
var G__28952 = (0);
seq__28912 = G__28949;
chunk__28913 = G__28950;
count__28914 = G__28951;
i__28915 = G__28952;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28912__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28920_28953 = cljs.core.seq.call(null,requires);
var chunk__28921_28954 = null;
var count__28922_28955 = (0);
var i__28923_28956 = (0);
while(true){
if((i__28923_28956 < count__28922_28955)){
var req_28957 = cljs.core._nth.call(null,chunk__28921_28954,i__28923_28956);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28957,prov);

var G__28958 = seq__28920_28953;
var G__28959 = chunk__28921_28954;
var G__28960 = count__28922_28955;
var G__28961 = (i__28923_28956 + (1));
seq__28920_28953 = G__28958;
chunk__28921_28954 = G__28959;
count__28922_28955 = G__28960;
i__28923_28956 = G__28961;
continue;
} else {
var temp__4425__auto___28962__$1 = cljs.core.seq.call(null,seq__28920_28953);
if(temp__4425__auto___28962__$1){
var seq__28920_28963__$1 = temp__4425__auto___28962__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28920_28963__$1)){
var c__22549__auto___28964 = cljs.core.chunk_first.call(null,seq__28920_28963__$1);
var G__28965 = cljs.core.chunk_rest.call(null,seq__28920_28963__$1);
var G__28966 = c__22549__auto___28964;
var G__28967 = cljs.core.count.call(null,c__22549__auto___28964);
var G__28968 = (0);
seq__28920_28953 = G__28965;
chunk__28921_28954 = G__28966;
count__28922_28955 = G__28967;
i__28923_28956 = G__28968;
continue;
} else {
var req_28969 = cljs.core.first.call(null,seq__28920_28963__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28969,prov);

var G__28970 = cljs.core.next.call(null,seq__28920_28963__$1);
var G__28971 = null;
var G__28972 = (0);
var G__28973 = (0);
seq__28920_28953 = G__28970;
chunk__28921_28954 = G__28971;
count__28922_28955 = G__28972;
i__28923_28956 = G__28973;
continue;
}
} else {
}
}
break;
}

var G__28974 = cljs.core.next.call(null,seq__28912__$1);
var G__28975 = null;
var G__28976 = (0);
var G__28977 = (0);
seq__28912 = G__28974;
chunk__28913 = G__28975;
count__28914 = G__28976;
i__28915 = G__28977;
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
var seq__28982_28986 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28983_28987 = null;
var count__28984_28988 = (0);
var i__28985_28989 = (0);
while(true){
if((i__28985_28989 < count__28984_28988)){
var ns_28990 = cljs.core._nth.call(null,chunk__28983_28987,i__28985_28989);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28990);

var G__28991 = seq__28982_28986;
var G__28992 = chunk__28983_28987;
var G__28993 = count__28984_28988;
var G__28994 = (i__28985_28989 + (1));
seq__28982_28986 = G__28991;
chunk__28983_28987 = G__28992;
count__28984_28988 = G__28993;
i__28985_28989 = G__28994;
continue;
} else {
var temp__4425__auto___28995 = cljs.core.seq.call(null,seq__28982_28986);
if(temp__4425__auto___28995){
var seq__28982_28996__$1 = temp__4425__auto___28995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28982_28996__$1)){
var c__22549__auto___28997 = cljs.core.chunk_first.call(null,seq__28982_28996__$1);
var G__28998 = cljs.core.chunk_rest.call(null,seq__28982_28996__$1);
var G__28999 = c__22549__auto___28997;
var G__29000 = cljs.core.count.call(null,c__22549__auto___28997);
var G__29001 = (0);
seq__28982_28986 = G__28998;
chunk__28983_28987 = G__28999;
count__28984_28988 = G__29000;
i__28985_28989 = G__29001;
continue;
} else {
var ns_29002 = cljs.core.first.call(null,seq__28982_28996__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29002);

var G__29003 = cljs.core.next.call(null,seq__28982_28996__$1);
var G__29004 = null;
var G__29005 = (0);
var G__29006 = (0);
seq__28982_28986 = G__29003;
chunk__28983_28987 = G__29004;
count__28984_28988 = G__29005;
i__28985_28989 = G__29006;
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
goog.require_figwheel_backup_ = (function (){var or__21738__auto__ = goog.require__;
if(cljs.core.truth_(or__21738__auto__)){
return or__21738__auto__;
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
var G__29007__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29007 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29008__i = 0, G__29008__a = new Array(arguments.length -  0);
while (G__29008__i < G__29008__a.length) {G__29008__a[G__29008__i] = arguments[G__29008__i + 0]; ++G__29008__i;}
  args = new cljs.core.IndexedSeq(G__29008__a,0);
} 
return G__29007__delegate.call(this,args);};
G__29007.cljs$lang$maxFixedArity = 0;
G__29007.cljs$lang$applyTo = (function (arglist__29009){
var args = cljs.core.seq(arglist__29009);
return G__29007__delegate(args);
});
G__29007.cljs$core$IFn$_invoke$arity$variadic = G__29007__delegate;
return G__29007;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29011 = cljs.core._EQ_;
var expr__29012 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29011.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29012))){
var path_parts = ((function (pred__29011,expr__29012){
return (function (p1__29010_SHARP_){
return clojure.string.split.call(null,p1__29010_SHARP_,/[\/\\]/);
});})(pred__29011,expr__29012))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__29011,expr__29012){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29014){if((e29014 instanceof Error)){
var e = e29014;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29014;

}
}})());
});
;})(path_parts,sep,root,pred__29011,expr__29012))
} else {
if(cljs.core.truth_(pred__29011.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29012))){
return ((function (pred__29011,expr__29012){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__29011,expr__29012){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__29011,expr__29012))
);

return deferred.addErrback(((function (deferred,pred__29011,expr__29012){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__29011,expr__29012))
);
});
;})(pred__29011,expr__29012))
} else {
return ((function (pred__29011,expr__29012){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29011,expr__29012))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29015,callback){
var map__29018 = p__29015;
var map__29018__$1 = ((((!((map__29018 == null)))?((((map__29018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29018):map__29018);
var file_msg = map__29018__$1;
var request_url = cljs.core.get.call(null,map__29018__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29018,map__29018__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29018,map__29018__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__25158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto__){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto__){
return (function (state_29042){
var state_val_29043 = (state_29042[(1)]);
if((state_val_29043 === (7))){
var inst_29038 = (state_29042[(2)]);
var state_29042__$1 = state_29042;
var statearr_29044_29064 = state_29042__$1;
(statearr_29044_29064[(2)] = inst_29038);

(statearr_29044_29064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (1))){
var state_29042__$1 = state_29042;
var statearr_29045_29065 = state_29042__$1;
(statearr_29045_29065[(2)] = null);

(statearr_29045_29065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (4))){
var inst_29022 = (state_29042[(7)]);
var inst_29022__$1 = (state_29042[(2)]);
var state_29042__$1 = (function (){var statearr_29046 = state_29042;
(statearr_29046[(7)] = inst_29022__$1);

return statearr_29046;
})();
if(cljs.core.truth_(inst_29022__$1)){
var statearr_29047_29066 = state_29042__$1;
(statearr_29047_29066[(1)] = (5));

} else {
var statearr_29048_29067 = state_29042__$1;
(statearr_29048_29067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (6))){
var state_29042__$1 = state_29042;
var statearr_29049_29068 = state_29042__$1;
(statearr_29049_29068[(2)] = null);

(statearr_29049_29068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (3))){
var inst_29040 = (state_29042[(2)]);
var state_29042__$1 = state_29042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29042__$1,inst_29040);
} else {
if((state_val_29043 === (2))){
var state_29042__$1 = state_29042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29042__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29043 === (11))){
var inst_29034 = (state_29042[(2)]);
var state_29042__$1 = (function (){var statearr_29050 = state_29042;
(statearr_29050[(8)] = inst_29034);

return statearr_29050;
})();
var statearr_29051_29069 = state_29042__$1;
(statearr_29051_29069[(2)] = null);

(statearr_29051_29069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (9))){
var inst_29026 = (state_29042[(9)]);
var inst_29028 = (state_29042[(10)]);
var inst_29030 = inst_29028.call(null,inst_29026);
var state_29042__$1 = state_29042;
var statearr_29052_29070 = state_29042__$1;
(statearr_29052_29070[(2)] = inst_29030);

(statearr_29052_29070[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (5))){
var inst_29022 = (state_29042[(7)]);
var inst_29024 = figwheel.client.file_reloading.blocking_load.call(null,inst_29022);
var state_29042__$1 = state_29042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29042__$1,(8),inst_29024);
} else {
if((state_val_29043 === (10))){
var inst_29026 = (state_29042[(9)]);
var inst_29032 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29026);
var state_29042__$1 = state_29042;
var statearr_29053_29071 = state_29042__$1;
(statearr_29053_29071[(2)] = inst_29032);

(statearr_29053_29071[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29043 === (8))){
var inst_29022 = (state_29042[(7)]);
var inst_29028 = (state_29042[(10)]);
var inst_29026 = (state_29042[(2)]);
var inst_29027 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29028__$1 = cljs.core.get.call(null,inst_29027,inst_29022);
var state_29042__$1 = (function (){var statearr_29054 = state_29042;
(statearr_29054[(9)] = inst_29026);

(statearr_29054[(10)] = inst_29028__$1);

return statearr_29054;
})();
if(cljs.core.truth_(inst_29028__$1)){
var statearr_29055_29072 = state_29042__$1;
(statearr_29055_29072[(1)] = (9));

} else {
var statearr_29056_29073 = state_29042__$1;
(statearr_29056_29073[(1)] = (10));

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
});})(c__25158__auto__))
;
return ((function (switch__25046__auto__,c__25158__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25047__auto__ = null;
var figwheel$client$file_reloading$state_machine__25047__auto____0 = (function (){
var statearr_29060 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29060[(0)] = figwheel$client$file_reloading$state_machine__25047__auto__);

(statearr_29060[(1)] = (1));

return statearr_29060;
});
var figwheel$client$file_reloading$state_machine__25047__auto____1 = (function (state_29042){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_29042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e29061){if((e29061 instanceof Object)){
var ex__25050__auto__ = e29061;
var statearr_29062_29074 = state_29042;
(statearr_29062_29074[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29075 = state_29042;
state_29042 = G__29075;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25047__auto__ = function(state_29042){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25047__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25047__auto____1.call(this,state_29042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25047__auto____0;
figwheel$client$file_reloading$state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25047__auto____1;
return figwheel$client$file_reloading$state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto__))
})();
var state__25160__auto__ = (function (){var statearr_29063 = f__25159__auto__.call(null);
(statearr_29063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto__);

return statearr_29063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto__))
);

return c__25158__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29076,callback){
var map__29079 = p__29076;
var map__29079__$1 = ((((!((map__29079 == null)))?((((map__29079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29079):map__29079);
var file_msg = map__29079__$1;
var namespace = cljs.core.get.call(null,map__29079__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29079,map__29079__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29079,map__29079__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29081){
var map__29084 = p__29081;
var map__29084__$1 = ((((!((map__29084 == null)))?((((map__29084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29084):map__29084);
var file_msg = map__29084__$1;
var namespace = cljs.core.get.call(null,map__29084__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21726__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21726__auto__){
var or__21738__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21738__auto__)){
return or__21738__auto__;
} else {
var or__21738__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21738__auto____$1)){
return or__21738__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21726__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29086,callback){
var map__29089 = p__29086;
var map__29089__$1 = ((((!((map__29089 == null)))?((((map__29089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29089):map__29089);
var file_msg = map__29089__$1;
var request_url = cljs.core.get.call(null,map__29089__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29089__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__25158__auto___29177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto___29177,out){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto___29177,out){
return (function (state_29159){
var state_val_29160 = (state_29159[(1)]);
if((state_val_29160 === (1))){
var inst_29137 = cljs.core.nth.call(null,files,(0),null);
var inst_29138 = cljs.core.nthnext.call(null,files,(1));
var inst_29139 = files;
var state_29159__$1 = (function (){var statearr_29161 = state_29159;
(statearr_29161[(7)] = inst_29139);

(statearr_29161[(8)] = inst_29138);

(statearr_29161[(9)] = inst_29137);

return statearr_29161;
})();
var statearr_29162_29178 = state_29159__$1;
(statearr_29162_29178[(2)] = null);

(statearr_29162_29178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (2))){
var inst_29139 = (state_29159[(7)]);
var inst_29142 = (state_29159[(10)]);
var inst_29142__$1 = cljs.core.nth.call(null,inst_29139,(0),null);
var inst_29143 = cljs.core.nthnext.call(null,inst_29139,(1));
var inst_29144 = (inst_29142__$1 == null);
var inst_29145 = cljs.core.not.call(null,inst_29144);
var state_29159__$1 = (function (){var statearr_29163 = state_29159;
(statearr_29163[(10)] = inst_29142__$1);

(statearr_29163[(11)] = inst_29143);

return statearr_29163;
})();
if(inst_29145){
var statearr_29164_29179 = state_29159__$1;
(statearr_29164_29179[(1)] = (4));

} else {
var statearr_29165_29180 = state_29159__$1;
(statearr_29165_29180[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (3))){
var inst_29157 = (state_29159[(2)]);
var state_29159__$1 = state_29159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29159__$1,inst_29157);
} else {
if((state_val_29160 === (4))){
var inst_29142 = (state_29159[(10)]);
var inst_29147 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29142);
var state_29159__$1 = state_29159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29159__$1,(7),inst_29147);
} else {
if((state_val_29160 === (5))){
var inst_29153 = cljs.core.async.close_BANG_.call(null,out);
var state_29159__$1 = state_29159;
var statearr_29166_29181 = state_29159__$1;
(statearr_29166_29181[(2)] = inst_29153);

(statearr_29166_29181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (6))){
var inst_29155 = (state_29159[(2)]);
var state_29159__$1 = state_29159;
var statearr_29167_29182 = state_29159__$1;
(statearr_29167_29182[(2)] = inst_29155);

(statearr_29167_29182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29160 === (7))){
var inst_29143 = (state_29159[(11)]);
var inst_29149 = (state_29159[(2)]);
var inst_29150 = cljs.core.async.put_BANG_.call(null,out,inst_29149);
var inst_29139 = inst_29143;
var state_29159__$1 = (function (){var statearr_29168 = state_29159;
(statearr_29168[(7)] = inst_29139);

(statearr_29168[(12)] = inst_29150);

return statearr_29168;
})();
var statearr_29169_29183 = state_29159__$1;
(statearr_29169_29183[(2)] = null);

(statearr_29169_29183[(1)] = (2));


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
});})(c__25158__auto___29177,out))
;
return ((function (switch__25046__auto__,c__25158__auto___29177,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25047__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25047__auto____0 = (function (){
var statearr_29173 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29173[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25047__auto__);

(statearr_29173[(1)] = (1));

return statearr_29173;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25047__auto____1 = (function (state_29159){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_29159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e29174){if((e29174 instanceof Object)){
var ex__25050__auto__ = e29174;
var statearr_29175_29184 = state_29159;
(statearr_29175_29184[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29185 = state_29159;
state_29159 = G__29185;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25047__auto__ = function(state_29159){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25047__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25047__auto____1.call(this,state_29159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25047__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25047__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto___29177,out))
})();
var state__25160__auto__ = (function (){var statearr_29176 = f__25159__auto__.call(null);
(statearr_29176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto___29177);

return statearr_29176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto___29177,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29186,opts){
var map__29190 = p__29186;
var map__29190__$1 = ((((!((map__29190 == null)))?((((map__29190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29190):map__29190);
var eval_body__$1 = cljs.core.get.call(null,map__29190__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29190__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21726__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21726__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21726__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29192){var e = e29192;
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
return (function (p1__29193_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29193_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29198){
var vec__29199 = p__29198;
var k = cljs.core.nth.call(null,vec__29199,(0),null);
var v = cljs.core.nth.call(null,vec__29199,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29200){
var vec__29201 = p__29200;
var k = cljs.core.nth.call(null,vec__29201,(0),null);
var v = cljs.core.nth.call(null,vec__29201,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29205,p__29206){
var map__29453 = p__29205;
var map__29453__$1 = ((((!((map__29453 == null)))?((((map__29453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29453):map__29453);
var opts = map__29453__$1;
var before_jsload = cljs.core.get.call(null,map__29453__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29453__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29453__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29454 = p__29206;
var map__29454__$1 = ((((!((map__29454 == null)))?((((map__29454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29454):map__29454);
var msg = map__29454__$1;
var files = cljs.core.get.call(null,map__29454__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29454__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29454__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto__,map__29453,map__29453__$1,opts,before_jsload,on_jsload,reload_dependents,map__29454,map__29454__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto__,map__29453,map__29453__$1,opts,before_jsload,on_jsload,reload_dependents,map__29454,map__29454__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29607){
var state_val_29608 = (state_29607[(1)]);
if((state_val_29608 === (7))){
var inst_29468 = (state_29607[(7)]);
var inst_29469 = (state_29607[(8)]);
var inst_29470 = (state_29607[(9)]);
var inst_29471 = (state_29607[(10)]);
var inst_29476 = cljs.core._nth.call(null,inst_29469,inst_29471);
var inst_29477 = figwheel.client.file_reloading.eval_body.call(null,inst_29476,opts);
var inst_29478 = (inst_29471 + (1));
var tmp29609 = inst_29468;
var tmp29610 = inst_29469;
var tmp29611 = inst_29470;
var inst_29468__$1 = tmp29609;
var inst_29469__$1 = tmp29610;
var inst_29470__$1 = tmp29611;
var inst_29471__$1 = inst_29478;
var state_29607__$1 = (function (){var statearr_29612 = state_29607;
(statearr_29612[(7)] = inst_29468__$1);

(statearr_29612[(11)] = inst_29477);

(statearr_29612[(8)] = inst_29469__$1);

(statearr_29612[(9)] = inst_29470__$1);

(statearr_29612[(10)] = inst_29471__$1);

return statearr_29612;
})();
var statearr_29613_29699 = state_29607__$1;
(statearr_29613_29699[(2)] = null);

(statearr_29613_29699[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (20))){
var inst_29511 = (state_29607[(12)]);
var inst_29519 = figwheel.client.file_reloading.sort_files.call(null,inst_29511);
var state_29607__$1 = state_29607;
var statearr_29614_29700 = state_29607__$1;
(statearr_29614_29700[(2)] = inst_29519);

(statearr_29614_29700[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (27))){
var state_29607__$1 = state_29607;
var statearr_29615_29701 = state_29607__$1;
(statearr_29615_29701[(2)] = null);

(statearr_29615_29701[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (1))){
var inst_29460 = (state_29607[(13)]);
var inst_29457 = before_jsload.call(null,files);
var inst_29458 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29459 = (function (){return ((function (inst_29460,inst_29457,inst_29458,state_val_29608,c__25158__auto__,map__29453,map__29453__$1,opts,before_jsload,on_jsload,reload_dependents,map__29454,map__29454__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29202_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29202_SHARP_);
});
;})(inst_29460,inst_29457,inst_29458,state_val_29608,c__25158__auto__,map__29453,map__29453__$1,opts,before_jsload,on_jsload,reload_dependents,map__29454,map__29454__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29460__$1 = cljs.core.filter.call(null,inst_29459,files);
var inst_29461 = cljs.core.not_empty.call(null,inst_29460__$1);
var state_29607__$1 = (function (){var statearr_29616 = state_29607;
(statearr_29616[(14)] = inst_29457);

(statearr_29616[(13)] = inst_29460__$1);

(statearr_29616[(15)] = inst_29458);

return statearr_29616;
})();
if(cljs.core.truth_(inst_29461)){
var statearr_29617_29702 = state_29607__$1;
(statearr_29617_29702[(1)] = (2));

} else {
var statearr_29618_29703 = state_29607__$1;
(statearr_29618_29703[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (24))){
var state_29607__$1 = state_29607;
var statearr_29619_29704 = state_29607__$1;
(statearr_29619_29704[(2)] = null);

(statearr_29619_29704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (39))){
var inst_29561 = (state_29607[(16)]);
var state_29607__$1 = state_29607;
var statearr_29620_29705 = state_29607__$1;
(statearr_29620_29705[(2)] = inst_29561);

(statearr_29620_29705[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (46))){
var inst_29602 = (state_29607[(2)]);
var state_29607__$1 = state_29607;
var statearr_29621_29706 = state_29607__$1;
(statearr_29621_29706[(2)] = inst_29602);

(statearr_29621_29706[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (4))){
var inst_29505 = (state_29607[(2)]);
var inst_29506 = cljs.core.List.EMPTY;
var inst_29507 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29506);
var inst_29508 = (function (){return ((function (inst_29505,inst_29506,inst_29507,state_val_29608,c__25158__auto__,map__29453,map__29453__$1,opts,before_jsload,on_jsload,reload_dependents,map__29454,map__29454__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29203_SHARP_){
var and__21726__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29203_SHARP_);
if(cljs.core.truth_(and__21726__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29203_SHARP_));
} else {
return and__21726__auto__;
}
});
;})(inst_29505,inst_29506,inst_29507,state_val_29608,c__25158__auto__,map__29453,map__29453__$1,opts,before_jsload,on_jsload,reload_dependents,map__29454,map__29454__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29509 = cljs.core.filter.call(null,inst_29508,files);
var inst_29510 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29511 = cljs.core.concat.call(null,inst_29509,inst_29510);
var state_29607__$1 = (function (){var statearr_29622 = state_29607;
(statearr_29622[(17)] = inst_29505);

(statearr_29622[(18)] = inst_29507);

(statearr_29622[(12)] = inst_29511);

return statearr_29622;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29623_29707 = state_29607__$1;
(statearr_29623_29707[(1)] = (16));

} else {
var statearr_29624_29708 = state_29607__$1;
(statearr_29624_29708[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (15))){
var inst_29495 = (state_29607[(2)]);
var state_29607__$1 = state_29607;
var statearr_29625_29709 = state_29607__$1;
(statearr_29625_29709[(2)] = inst_29495);

(statearr_29625_29709[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (21))){
var inst_29521 = (state_29607[(19)]);
var inst_29521__$1 = (state_29607[(2)]);
var inst_29522 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29521__$1);
var state_29607__$1 = (function (){var statearr_29626 = state_29607;
(statearr_29626[(19)] = inst_29521__$1);

return statearr_29626;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29607__$1,(22),inst_29522);
} else {
if((state_val_29608 === (31))){
var inst_29605 = (state_29607[(2)]);
var state_29607__$1 = state_29607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29607__$1,inst_29605);
} else {
if((state_val_29608 === (32))){
var inst_29561 = (state_29607[(16)]);
var inst_29566 = inst_29561.cljs$lang$protocol_mask$partition0$;
var inst_29567 = (inst_29566 & (64));
var inst_29568 = inst_29561.cljs$core$ISeq$;
var inst_29569 = (inst_29567) || (inst_29568);
var state_29607__$1 = state_29607;
if(cljs.core.truth_(inst_29569)){
var statearr_29627_29710 = state_29607__$1;
(statearr_29627_29710[(1)] = (35));

} else {
var statearr_29628_29711 = state_29607__$1;
(statearr_29628_29711[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (40))){
var inst_29582 = (state_29607[(20)]);
var inst_29581 = (state_29607[(2)]);
var inst_29582__$1 = cljs.core.get.call(null,inst_29581,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29583 = cljs.core.get.call(null,inst_29581,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29584 = cljs.core.not_empty.call(null,inst_29582__$1);
var state_29607__$1 = (function (){var statearr_29629 = state_29607;
(statearr_29629[(20)] = inst_29582__$1);

(statearr_29629[(21)] = inst_29583);

return statearr_29629;
})();
if(cljs.core.truth_(inst_29584)){
var statearr_29630_29712 = state_29607__$1;
(statearr_29630_29712[(1)] = (41));

} else {
var statearr_29631_29713 = state_29607__$1;
(statearr_29631_29713[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (33))){
var state_29607__$1 = state_29607;
var statearr_29632_29714 = state_29607__$1;
(statearr_29632_29714[(2)] = false);

(statearr_29632_29714[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (13))){
var inst_29481 = (state_29607[(22)]);
var inst_29485 = cljs.core.chunk_first.call(null,inst_29481);
var inst_29486 = cljs.core.chunk_rest.call(null,inst_29481);
var inst_29487 = cljs.core.count.call(null,inst_29485);
var inst_29468 = inst_29486;
var inst_29469 = inst_29485;
var inst_29470 = inst_29487;
var inst_29471 = (0);
var state_29607__$1 = (function (){var statearr_29633 = state_29607;
(statearr_29633[(7)] = inst_29468);

(statearr_29633[(8)] = inst_29469);

(statearr_29633[(9)] = inst_29470);

(statearr_29633[(10)] = inst_29471);

return statearr_29633;
})();
var statearr_29634_29715 = state_29607__$1;
(statearr_29634_29715[(2)] = null);

(statearr_29634_29715[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (22))){
var inst_29521 = (state_29607[(19)]);
var inst_29524 = (state_29607[(23)]);
var inst_29529 = (state_29607[(24)]);
var inst_29525 = (state_29607[(25)]);
var inst_29524__$1 = (state_29607[(2)]);
var inst_29525__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29524__$1);
var inst_29526 = (function (){var all_files = inst_29521;
var res_SINGLEQUOTE_ = inst_29524__$1;
var res = inst_29525__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29521,inst_29524,inst_29529,inst_29525,inst_29524__$1,inst_29525__$1,state_val_29608,c__25158__auto__,map__29453,map__29453__$1,opts,before_jsload,on_jsload,reload_dependents,map__29454,map__29454__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29204_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29204_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29521,inst_29524,inst_29529,inst_29525,inst_29524__$1,inst_29525__$1,state_val_29608,c__25158__auto__,map__29453,map__29453__$1,opts,before_jsload,on_jsload,reload_dependents,map__29454,map__29454__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29527 = cljs.core.filter.call(null,inst_29526,inst_29524__$1);
var inst_29528 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29529__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29528);
var inst_29530 = cljs.core.not_empty.call(null,inst_29529__$1);
var state_29607__$1 = (function (){var statearr_29635 = state_29607;
(statearr_29635[(23)] = inst_29524__$1);

(statearr_29635[(24)] = inst_29529__$1);

(statearr_29635[(25)] = inst_29525__$1);

(statearr_29635[(26)] = inst_29527);

return statearr_29635;
})();
if(cljs.core.truth_(inst_29530)){
var statearr_29636_29716 = state_29607__$1;
(statearr_29636_29716[(1)] = (23));

} else {
var statearr_29637_29717 = state_29607__$1;
(statearr_29637_29717[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (36))){
var state_29607__$1 = state_29607;
var statearr_29638_29718 = state_29607__$1;
(statearr_29638_29718[(2)] = false);

(statearr_29638_29718[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (41))){
var inst_29582 = (state_29607[(20)]);
var inst_29586 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29587 = cljs.core.map.call(null,inst_29586,inst_29582);
var inst_29588 = cljs.core.pr_str.call(null,inst_29587);
var inst_29589 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29588)].join('');
var inst_29590 = figwheel.client.utils.log.call(null,inst_29589);
var state_29607__$1 = state_29607;
var statearr_29639_29719 = state_29607__$1;
(statearr_29639_29719[(2)] = inst_29590);

(statearr_29639_29719[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (43))){
var inst_29583 = (state_29607[(21)]);
var inst_29593 = (state_29607[(2)]);
var inst_29594 = cljs.core.not_empty.call(null,inst_29583);
var state_29607__$1 = (function (){var statearr_29640 = state_29607;
(statearr_29640[(27)] = inst_29593);

return statearr_29640;
})();
if(cljs.core.truth_(inst_29594)){
var statearr_29641_29720 = state_29607__$1;
(statearr_29641_29720[(1)] = (44));

} else {
var statearr_29642_29721 = state_29607__$1;
(statearr_29642_29721[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (29))){
var inst_29521 = (state_29607[(19)]);
var inst_29524 = (state_29607[(23)]);
var inst_29529 = (state_29607[(24)]);
var inst_29525 = (state_29607[(25)]);
var inst_29527 = (state_29607[(26)]);
var inst_29561 = (state_29607[(16)]);
var inst_29557 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29560 = (function (){var all_files = inst_29521;
var res_SINGLEQUOTE_ = inst_29524;
var res = inst_29525;
var files_not_loaded = inst_29527;
var dependencies_that_loaded = inst_29529;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29521,inst_29524,inst_29529,inst_29525,inst_29527,inst_29561,inst_29557,state_val_29608,c__25158__auto__,map__29453,map__29453__$1,opts,before_jsload,on_jsload,reload_dependents,map__29454,map__29454__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29559){
var map__29643 = p__29559;
var map__29643__$1 = ((((!((map__29643 == null)))?((((map__29643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29643):map__29643);
var namespace = cljs.core.get.call(null,map__29643__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29521,inst_29524,inst_29529,inst_29525,inst_29527,inst_29561,inst_29557,state_val_29608,c__25158__auto__,map__29453,map__29453__$1,opts,before_jsload,on_jsload,reload_dependents,map__29454,map__29454__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29561__$1 = cljs.core.group_by.call(null,inst_29560,inst_29527);
var inst_29563 = (inst_29561__$1 == null);
var inst_29564 = cljs.core.not.call(null,inst_29563);
var state_29607__$1 = (function (){var statearr_29645 = state_29607;
(statearr_29645[(28)] = inst_29557);

(statearr_29645[(16)] = inst_29561__$1);

return statearr_29645;
})();
if(inst_29564){
var statearr_29646_29722 = state_29607__$1;
(statearr_29646_29722[(1)] = (32));

} else {
var statearr_29647_29723 = state_29607__$1;
(statearr_29647_29723[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (44))){
var inst_29583 = (state_29607[(21)]);
var inst_29596 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29583);
var inst_29597 = cljs.core.pr_str.call(null,inst_29596);
var inst_29598 = [cljs.core.str("not required: "),cljs.core.str(inst_29597)].join('');
var inst_29599 = figwheel.client.utils.log.call(null,inst_29598);
var state_29607__$1 = state_29607;
var statearr_29648_29724 = state_29607__$1;
(statearr_29648_29724[(2)] = inst_29599);

(statearr_29648_29724[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (6))){
var inst_29502 = (state_29607[(2)]);
var state_29607__$1 = state_29607;
var statearr_29649_29725 = state_29607__$1;
(statearr_29649_29725[(2)] = inst_29502);

(statearr_29649_29725[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (28))){
var inst_29527 = (state_29607[(26)]);
var inst_29554 = (state_29607[(2)]);
var inst_29555 = cljs.core.not_empty.call(null,inst_29527);
var state_29607__$1 = (function (){var statearr_29650 = state_29607;
(statearr_29650[(29)] = inst_29554);

return statearr_29650;
})();
if(cljs.core.truth_(inst_29555)){
var statearr_29651_29726 = state_29607__$1;
(statearr_29651_29726[(1)] = (29));

} else {
var statearr_29652_29727 = state_29607__$1;
(statearr_29652_29727[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (25))){
var inst_29525 = (state_29607[(25)]);
var inst_29541 = (state_29607[(2)]);
var inst_29542 = cljs.core.not_empty.call(null,inst_29525);
var state_29607__$1 = (function (){var statearr_29653 = state_29607;
(statearr_29653[(30)] = inst_29541);

return statearr_29653;
})();
if(cljs.core.truth_(inst_29542)){
var statearr_29654_29728 = state_29607__$1;
(statearr_29654_29728[(1)] = (26));

} else {
var statearr_29655_29729 = state_29607__$1;
(statearr_29655_29729[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (34))){
var inst_29576 = (state_29607[(2)]);
var state_29607__$1 = state_29607;
if(cljs.core.truth_(inst_29576)){
var statearr_29656_29730 = state_29607__$1;
(statearr_29656_29730[(1)] = (38));

} else {
var statearr_29657_29731 = state_29607__$1;
(statearr_29657_29731[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (17))){
var state_29607__$1 = state_29607;
var statearr_29658_29732 = state_29607__$1;
(statearr_29658_29732[(2)] = recompile_dependents);

(statearr_29658_29732[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (3))){
var state_29607__$1 = state_29607;
var statearr_29659_29733 = state_29607__$1;
(statearr_29659_29733[(2)] = null);

(statearr_29659_29733[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (12))){
var inst_29498 = (state_29607[(2)]);
var state_29607__$1 = state_29607;
var statearr_29660_29734 = state_29607__$1;
(statearr_29660_29734[(2)] = inst_29498);

(statearr_29660_29734[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (2))){
var inst_29460 = (state_29607[(13)]);
var inst_29467 = cljs.core.seq.call(null,inst_29460);
var inst_29468 = inst_29467;
var inst_29469 = null;
var inst_29470 = (0);
var inst_29471 = (0);
var state_29607__$1 = (function (){var statearr_29661 = state_29607;
(statearr_29661[(7)] = inst_29468);

(statearr_29661[(8)] = inst_29469);

(statearr_29661[(9)] = inst_29470);

(statearr_29661[(10)] = inst_29471);

return statearr_29661;
})();
var statearr_29662_29735 = state_29607__$1;
(statearr_29662_29735[(2)] = null);

(statearr_29662_29735[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (23))){
var inst_29521 = (state_29607[(19)]);
var inst_29524 = (state_29607[(23)]);
var inst_29529 = (state_29607[(24)]);
var inst_29525 = (state_29607[(25)]);
var inst_29527 = (state_29607[(26)]);
var inst_29532 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29534 = (function (){var all_files = inst_29521;
var res_SINGLEQUOTE_ = inst_29524;
var res = inst_29525;
var files_not_loaded = inst_29527;
var dependencies_that_loaded = inst_29529;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29521,inst_29524,inst_29529,inst_29525,inst_29527,inst_29532,state_val_29608,c__25158__auto__,map__29453,map__29453__$1,opts,before_jsload,on_jsload,reload_dependents,map__29454,map__29454__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29533){
var map__29663 = p__29533;
var map__29663__$1 = ((((!((map__29663 == null)))?((((map__29663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29663):map__29663);
var request_url = cljs.core.get.call(null,map__29663__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29521,inst_29524,inst_29529,inst_29525,inst_29527,inst_29532,state_val_29608,c__25158__auto__,map__29453,map__29453__$1,opts,before_jsload,on_jsload,reload_dependents,map__29454,map__29454__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29535 = cljs.core.reverse.call(null,inst_29529);
var inst_29536 = cljs.core.map.call(null,inst_29534,inst_29535);
var inst_29537 = cljs.core.pr_str.call(null,inst_29536);
var inst_29538 = figwheel.client.utils.log.call(null,inst_29537);
var state_29607__$1 = (function (){var statearr_29665 = state_29607;
(statearr_29665[(31)] = inst_29532);

return statearr_29665;
})();
var statearr_29666_29736 = state_29607__$1;
(statearr_29666_29736[(2)] = inst_29538);

(statearr_29666_29736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (35))){
var state_29607__$1 = state_29607;
var statearr_29667_29737 = state_29607__$1;
(statearr_29667_29737[(2)] = true);

(statearr_29667_29737[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (19))){
var inst_29511 = (state_29607[(12)]);
var inst_29517 = figwheel.client.file_reloading.expand_files.call(null,inst_29511);
var state_29607__$1 = state_29607;
var statearr_29668_29738 = state_29607__$1;
(statearr_29668_29738[(2)] = inst_29517);

(statearr_29668_29738[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (11))){
var state_29607__$1 = state_29607;
var statearr_29669_29739 = state_29607__$1;
(statearr_29669_29739[(2)] = null);

(statearr_29669_29739[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (9))){
var inst_29500 = (state_29607[(2)]);
var state_29607__$1 = state_29607;
var statearr_29670_29740 = state_29607__$1;
(statearr_29670_29740[(2)] = inst_29500);

(statearr_29670_29740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (5))){
var inst_29470 = (state_29607[(9)]);
var inst_29471 = (state_29607[(10)]);
var inst_29473 = (inst_29471 < inst_29470);
var inst_29474 = inst_29473;
var state_29607__$1 = state_29607;
if(cljs.core.truth_(inst_29474)){
var statearr_29671_29741 = state_29607__$1;
(statearr_29671_29741[(1)] = (7));

} else {
var statearr_29672_29742 = state_29607__$1;
(statearr_29672_29742[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (14))){
var inst_29481 = (state_29607[(22)]);
var inst_29490 = cljs.core.first.call(null,inst_29481);
var inst_29491 = figwheel.client.file_reloading.eval_body.call(null,inst_29490,opts);
var inst_29492 = cljs.core.next.call(null,inst_29481);
var inst_29468 = inst_29492;
var inst_29469 = null;
var inst_29470 = (0);
var inst_29471 = (0);
var state_29607__$1 = (function (){var statearr_29673 = state_29607;
(statearr_29673[(7)] = inst_29468);

(statearr_29673[(32)] = inst_29491);

(statearr_29673[(8)] = inst_29469);

(statearr_29673[(9)] = inst_29470);

(statearr_29673[(10)] = inst_29471);

return statearr_29673;
})();
var statearr_29674_29743 = state_29607__$1;
(statearr_29674_29743[(2)] = null);

(statearr_29674_29743[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (45))){
var state_29607__$1 = state_29607;
var statearr_29675_29744 = state_29607__$1;
(statearr_29675_29744[(2)] = null);

(statearr_29675_29744[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (26))){
var inst_29521 = (state_29607[(19)]);
var inst_29524 = (state_29607[(23)]);
var inst_29529 = (state_29607[(24)]);
var inst_29525 = (state_29607[(25)]);
var inst_29527 = (state_29607[(26)]);
var inst_29544 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29546 = (function (){var all_files = inst_29521;
var res_SINGLEQUOTE_ = inst_29524;
var res = inst_29525;
var files_not_loaded = inst_29527;
var dependencies_that_loaded = inst_29529;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29521,inst_29524,inst_29529,inst_29525,inst_29527,inst_29544,state_val_29608,c__25158__auto__,map__29453,map__29453__$1,opts,before_jsload,on_jsload,reload_dependents,map__29454,map__29454__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29545){
var map__29676 = p__29545;
var map__29676__$1 = ((((!((map__29676 == null)))?((((map__29676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29676):map__29676);
var namespace = cljs.core.get.call(null,map__29676__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29676__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29521,inst_29524,inst_29529,inst_29525,inst_29527,inst_29544,state_val_29608,c__25158__auto__,map__29453,map__29453__$1,opts,before_jsload,on_jsload,reload_dependents,map__29454,map__29454__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29547 = cljs.core.map.call(null,inst_29546,inst_29525);
var inst_29548 = cljs.core.pr_str.call(null,inst_29547);
var inst_29549 = figwheel.client.utils.log.call(null,inst_29548);
var inst_29550 = (function (){var all_files = inst_29521;
var res_SINGLEQUOTE_ = inst_29524;
var res = inst_29525;
var files_not_loaded = inst_29527;
var dependencies_that_loaded = inst_29529;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29521,inst_29524,inst_29529,inst_29525,inst_29527,inst_29544,inst_29546,inst_29547,inst_29548,inst_29549,state_val_29608,c__25158__auto__,map__29453,map__29453__$1,opts,before_jsload,on_jsload,reload_dependents,map__29454,map__29454__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29521,inst_29524,inst_29529,inst_29525,inst_29527,inst_29544,inst_29546,inst_29547,inst_29548,inst_29549,state_val_29608,c__25158__auto__,map__29453,map__29453__$1,opts,before_jsload,on_jsload,reload_dependents,map__29454,map__29454__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29551 = setTimeout(inst_29550,(10));
var state_29607__$1 = (function (){var statearr_29678 = state_29607;
(statearr_29678[(33)] = inst_29549);

(statearr_29678[(34)] = inst_29544);

return statearr_29678;
})();
var statearr_29679_29745 = state_29607__$1;
(statearr_29679_29745[(2)] = inst_29551);

(statearr_29679_29745[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (16))){
var state_29607__$1 = state_29607;
var statearr_29680_29746 = state_29607__$1;
(statearr_29680_29746[(2)] = reload_dependents);

(statearr_29680_29746[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (38))){
var inst_29561 = (state_29607[(16)]);
var inst_29578 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29561);
var state_29607__$1 = state_29607;
var statearr_29681_29747 = state_29607__$1;
(statearr_29681_29747[(2)] = inst_29578);

(statearr_29681_29747[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (30))){
var state_29607__$1 = state_29607;
var statearr_29682_29748 = state_29607__$1;
(statearr_29682_29748[(2)] = null);

(statearr_29682_29748[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (10))){
var inst_29481 = (state_29607[(22)]);
var inst_29483 = cljs.core.chunked_seq_QMARK_.call(null,inst_29481);
var state_29607__$1 = state_29607;
if(inst_29483){
var statearr_29683_29749 = state_29607__$1;
(statearr_29683_29749[(1)] = (13));

} else {
var statearr_29684_29750 = state_29607__$1;
(statearr_29684_29750[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (18))){
var inst_29515 = (state_29607[(2)]);
var state_29607__$1 = state_29607;
if(cljs.core.truth_(inst_29515)){
var statearr_29685_29751 = state_29607__$1;
(statearr_29685_29751[(1)] = (19));

} else {
var statearr_29686_29752 = state_29607__$1;
(statearr_29686_29752[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (42))){
var state_29607__$1 = state_29607;
var statearr_29687_29753 = state_29607__$1;
(statearr_29687_29753[(2)] = null);

(statearr_29687_29753[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (37))){
var inst_29573 = (state_29607[(2)]);
var state_29607__$1 = state_29607;
var statearr_29688_29754 = state_29607__$1;
(statearr_29688_29754[(2)] = inst_29573);

(statearr_29688_29754[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29608 === (8))){
var inst_29468 = (state_29607[(7)]);
var inst_29481 = (state_29607[(22)]);
var inst_29481__$1 = cljs.core.seq.call(null,inst_29468);
var state_29607__$1 = (function (){var statearr_29689 = state_29607;
(statearr_29689[(22)] = inst_29481__$1);

return statearr_29689;
})();
if(inst_29481__$1){
var statearr_29690_29755 = state_29607__$1;
(statearr_29690_29755[(1)] = (10));

} else {
var statearr_29691_29756 = state_29607__$1;
(statearr_29691_29756[(1)] = (11));

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
});})(c__25158__auto__,map__29453,map__29453__$1,opts,before_jsload,on_jsload,reload_dependents,map__29454,map__29454__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25046__auto__,c__25158__auto__,map__29453,map__29453__$1,opts,before_jsload,on_jsload,reload_dependents,map__29454,map__29454__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25047__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25047__auto____0 = (function (){
var statearr_29695 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29695[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25047__auto__);

(statearr_29695[(1)] = (1));

return statearr_29695;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25047__auto____1 = (function (state_29607){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_29607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e29696){if((e29696 instanceof Object)){
var ex__25050__auto__ = e29696;
var statearr_29697_29757 = state_29607;
(statearr_29697_29757[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29758 = state_29607;
state_29607 = G__29758;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25047__auto__ = function(state_29607){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25047__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25047__auto____1.call(this,state_29607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25047__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25047__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto__,map__29453,map__29453__$1,opts,before_jsload,on_jsload,reload_dependents,map__29454,map__29454__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25160__auto__ = (function (){var statearr_29698 = f__25159__auto__.call(null);
(statearr_29698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto__);

return statearr_29698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto__,map__29453,map__29453__$1,opts,before_jsload,on_jsload,reload_dependents,map__29454,map__29454__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25158__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29761,link){
var map__29764 = p__29761;
var map__29764__$1 = ((((!((map__29764 == null)))?((((map__29764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29764):map__29764);
var file = cljs.core.get.call(null,map__29764__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__29764,map__29764__$1,file){
return (function (p1__29759_SHARP_,p2__29760_SHARP_){
if(cljs.core._EQ_.call(null,p1__29759_SHARP_,p2__29760_SHARP_)){
return p1__29759_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__29764,map__29764__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29770){
var map__29771 = p__29770;
var map__29771__$1 = ((((!((map__29771 == null)))?((((map__29771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29771):map__29771);
var match_length = cljs.core.get.call(null,map__29771__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29771__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29766_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29766_SHARP_);
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
var args29773 = [];
var len__22809__auto___29776 = arguments.length;
var i__22810__auto___29777 = (0);
while(true){
if((i__22810__auto___29777 < len__22809__auto___29776)){
args29773.push((arguments[i__22810__auto___29777]));

var G__29778 = (i__22810__auto___29777 + (1));
i__22810__auto___29777 = G__29778;
continue;
} else {
}
break;
}

var G__29775 = args29773.length;
switch (G__29775) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29773.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29780_SHARP_,p2__29781_SHARP_){
return cljs.core.assoc.call(null,p1__29780_SHARP_,cljs.core.get.call(null,p2__29781_SHARP_,key),p2__29781_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29782){
var map__29785 = p__29782;
var map__29785__$1 = ((((!((map__29785 == null)))?((((map__29785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29785):map__29785);
var f_data = map__29785__$1;
var file = cljs.core.get.call(null,map__29785__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29787,files_msg){
var map__29794 = p__29787;
var map__29794__$1 = ((((!((map__29794 == null)))?((((map__29794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29794):map__29794);
var opts = map__29794__$1;
var on_cssload = cljs.core.get.call(null,map__29794__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29796_29800 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29797_29801 = null;
var count__29798_29802 = (0);
var i__29799_29803 = (0);
while(true){
if((i__29799_29803 < count__29798_29802)){
var f_29804 = cljs.core._nth.call(null,chunk__29797_29801,i__29799_29803);
figwheel.client.file_reloading.reload_css_file.call(null,f_29804);

var G__29805 = seq__29796_29800;
var G__29806 = chunk__29797_29801;
var G__29807 = count__29798_29802;
var G__29808 = (i__29799_29803 + (1));
seq__29796_29800 = G__29805;
chunk__29797_29801 = G__29806;
count__29798_29802 = G__29807;
i__29799_29803 = G__29808;
continue;
} else {
var temp__4425__auto___29809 = cljs.core.seq.call(null,seq__29796_29800);
if(temp__4425__auto___29809){
var seq__29796_29810__$1 = temp__4425__auto___29809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29796_29810__$1)){
var c__22549__auto___29811 = cljs.core.chunk_first.call(null,seq__29796_29810__$1);
var G__29812 = cljs.core.chunk_rest.call(null,seq__29796_29810__$1);
var G__29813 = c__22549__auto___29811;
var G__29814 = cljs.core.count.call(null,c__22549__auto___29811);
var G__29815 = (0);
seq__29796_29800 = G__29812;
chunk__29797_29801 = G__29813;
count__29798_29802 = G__29814;
i__29799_29803 = G__29815;
continue;
} else {
var f_29816 = cljs.core.first.call(null,seq__29796_29810__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29816);

var G__29817 = cljs.core.next.call(null,seq__29796_29810__$1);
var G__29818 = null;
var G__29819 = (0);
var G__29820 = (0);
seq__29796_29800 = G__29817;
chunk__29797_29801 = G__29818;
count__29798_29802 = G__29819;
i__29799_29803 = G__29820;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29794,map__29794__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29794,map__29794__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map