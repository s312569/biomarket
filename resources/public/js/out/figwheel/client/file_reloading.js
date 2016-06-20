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
var or__25914__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25914__auto__){
return or__25914__auto__;
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
var or__25914__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38719_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38719_SHARP_));
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
var seq__38724 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38725 = null;
var count__38726 = (0);
var i__38727 = (0);
while(true){
if((i__38727 < count__38726)){
var n = cljs.core._nth.call(null,chunk__38725,i__38727);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38728 = seq__38724;
var G__38729 = chunk__38725;
var G__38730 = count__38726;
var G__38731 = (i__38727 + (1));
seq__38724 = G__38728;
chunk__38725 = G__38729;
count__38726 = G__38730;
i__38727 = G__38731;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38724);
if(temp__4425__auto__){
var seq__38724__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38724__$1)){
var c__26725__auto__ = cljs.core.chunk_first.call(null,seq__38724__$1);
var G__38732 = cljs.core.chunk_rest.call(null,seq__38724__$1);
var G__38733 = c__26725__auto__;
var G__38734 = cljs.core.count.call(null,c__26725__auto__);
var G__38735 = (0);
seq__38724 = G__38732;
chunk__38725 = G__38733;
count__38726 = G__38734;
i__38727 = G__38735;
continue;
} else {
var n = cljs.core.first.call(null,seq__38724__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38736 = cljs.core.next.call(null,seq__38724__$1);
var G__38737 = null;
var G__38738 = (0);
var G__38739 = (0);
seq__38724 = G__38736;
chunk__38725 = G__38737;
count__38726 = G__38738;
i__38727 = G__38739;
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

var seq__38778_38785 = cljs.core.seq.call(null,deps);
var chunk__38779_38786 = null;
var count__38780_38787 = (0);
var i__38781_38788 = (0);
while(true){
if((i__38781_38788 < count__38780_38787)){
var dep_38789 = cljs.core._nth.call(null,chunk__38779_38786,i__38781_38788);
topo_sort_helper_STAR_.call(null,dep_38789,(depth + (1)),state);

var G__38790 = seq__38778_38785;
var G__38791 = chunk__38779_38786;
var G__38792 = count__38780_38787;
var G__38793 = (i__38781_38788 + (1));
seq__38778_38785 = G__38790;
chunk__38779_38786 = G__38791;
count__38780_38787 = G__38792;
i__38781_38788 = G__38793;
continue;
} else {
var temp__4425__auto___38794 = cljs.core.seq.call(null,seq__38778_38785);
if(temp__4425__auto___38794){
var seq__38778_38795__$1 = temp__4425__auto___38794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38778_38795__$1)){
var c__26725__auto___38796 = cljs.core.chunk_first.call(null,seq__38778_38795__$1);
var G__38797 = cljs.core.chunk_rest.call(null,seq__38778_38795__$1);
var G__38798 = c__26725__auto___38796;
var G__38799 = cljs.core.count.call(null,c__26725__auto___38796);
var G__38800 = (0);
seq__38778_38785 = G__38797;
chunk__38779_38786 = G__38798;
count__38780_38787 = G__38799;
i__38781_38788 = G__38800;
continue;
} else {
var dep_38801 = cljs.core.first.call(null,seq__38778_38795__$1);
topo_sort_helper_STAR_.call(null,dep_38801,(depth + (1)),state);

var G__38802 = cljs.core.next.call(null,seq__38778_38795__$1);
var G__38803 = null;
var G__38804 = (0);
var G__38805 = (0);
seq__38778_38785 = G__38802;
chunk__38779_38786 = G__38803;
count__38780_38787 = G__38804;
i__38781_38788 = G__38805;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38782){
var vec__38784 = p__38782;
var x = cljs.core.nth.call(null,vec__38784,(0),null);
var xs = cljs.core.nthnext.call(null,vec__38784,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38784,x,xs,get_deps__$1){
return (function (p1__38740_SHARP_){
return clojure.set.difference.call(null,p1__38740_SHARP_,x);
});})(vec__38784,x,xs,get_deps__$1))
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
var seq__38818 = cljs.core.seq.call(null,provides);
var chunk__38819 = null;
var count__38820 = (0);
var i__38821 = (0);
while(true){
if((i__38821 < count__38820)){
var prov = cljs.core._nth.call(null,chunk__38819,i__38821);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38822_38830 = cljs.core.seq.call(null,requires);
var chunk__38823_38831 = null;
var count__38824_38832 = (0);
var i__38825_38833 = (0);
while(true){
if((i__38825_38833 < count__38824_38832)){
var req_38834 = cljs.core._nth.call(null,chunk__38823_38831,i__38825_38833);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38834,prov);

var G__38835 = seq__38822_38830;
var G__38836 = chunk__38823_38831;
var G__38837 = count__38824_38832;
var G__38838 = (i__38825_38833 + (1));
seq__38822_38830 = G__38835;
chunk__38823_38831 = G__38836;
count__38824_38832 = G__38837;
i__38825_38833 = G__38838;
continue;
} else {
var temp__4425__auto___38839 = cljs.core.seq.call(null,seq__38822_38830);
if(temp__4425__auto___38839){
var seq__38822_38840__$1 = temp__4425__auto___38839;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38822_38840__$1)){
var c__26725__auto___38841 = cljs.core.chunk_first.call(null,seq__38822_38840__$1);
var G__38842 = cljs.core.chunk_rest.call(null,seq__38822_38840__$1);
var G__38843 = c__26725__auto___38841;
var G__38844 = cljs.core.count.call(null,c__26725__auto___38841);
var G__38845 = (0);
seq__38822_38830 = G__38842;
chunk__38823_38831 = G__38843;
count__38824_38832 = G__38844;
i__38825_38833 = G__38845;
continue;
} else {
var req_38846 = cljs.core.first.call(null,seq__38822_38840__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38846,prov);

var G__38847 = cljs.core.next.call(null,seq__38822_38840__$1);
var G__38848 = null;
var G__38849 = (0);
var G__38850 = (0);
seq__38822_38830 = G__38847;
chunk__38823_38831 = G__38848;
count__38824_38832 = G__38849;
i__38825_38833 = G__38850;
continue;
}
} else {
}
}
break;
}

var G__38851 = seq__38818;
var G__38852 = chunk__38819;
var G__38853 = count__38820;
var G__38854 = (i__38821 + (1));
seq__38818 = G__38851;
chunk__38819 = G__38852;
count__38820 = G__38853;
i__38821 = G__38854;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38818);
if(temp__4425__auto__){
var seq__38818__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38818__$1)){
var c__26725__auto__ = cljs.core.chunk_first.call(null,seq__38818__$1);
var G__38855 = cljs.core.chunk_rest.call(null,seq__38818__$1);
var G__38856 = c__26725__auto__;
var G__38857 = cljs.core.count.call(null,c__26725__auto__);
var G__38858 = (0);
seq__38818 = G__38855;
chunk__38819 = G__38856;
count__38820 = G__38857;
i__38821 = G__38858;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38818__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38826_38859 = cljs.core.seq.call(null,requires);
var chunk__38827_38860 = null;
var count__38828_38861 = (0);
var i__38829_38862 = (0);
while(true){
if((i__38829_38862 < count__38828_38861)){
var req_38863 = cljs.core._nth.call(null,chunk__38827_38860,i__38829_38862);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38863,prov);

var G__38864 = seq__38826_38859;
var G__38865 = chunk__38827_38860;
var G__38866 = count__38828_38861;
var G__38867 = (i__38829_38862 + (1));
seq__38826_38859 = G__38864;
chunk__38827_38860 = G__38865;
count__38828_38861 = G__38866;
i__38829_38862 = G__38867;
continue;
} else {
var temp__4425__auto___38868__$1 = cljs.core.seq.call(null,seq__38826_38859);
if(temp__4425__auto___38868__$1){
var seq__38826_38869__$1 = temp__4425__auto___38868__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38826_38869__$1)){
var c__26725__auto___38870 = cljs.core.chunk_first.call(null,seq__38826_38869__$1);
var G__38871 = cljs.core.chunk_rest.call(null,seq__38826_38869__$1);
var G__38872 = c__26725__auto___38870;
var G__38873 = cljs.core.count.call(null,c__26725__auto___38870);
var G__38874 = (0);
seq__38826_38859 = G__38871;
chunk__38827_38860 = G__38872;
count__38828_38861 = G__38873;
i__38829_38862 = G__38874;
continue;
} else {
var req_38875 = cljs.core.first.call(null,seq__38826_38869__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38875,prov);

var G__38876 = cljs.core.next.call(null,seq__38826_38869__$1);
var G__38877 = null;
var G__38878 = (0);
var G__38879 = (0);
seq__38826_38859 = G__38876;
chunk__38827_38860 = G__38877;
count__38828_38861 = G__38878;
i__38829_38862 = G__38879;
continue;
}
} else {
}
}
break;
}

var G__38880 = cljs.core.next.call(null,seq__38818__$1);
var G__38881 = null;
var G__38882 = (0);
var G__38883 = (0);
seq__38818 = G__38880;
chunk__38819 = G__38881;
count__38820 = G__38882;
i__38821 = G__38883;
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
var seq__38888_38892 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38889_38893 = null;
var count__38890_38894 = (0);
var i__38891_38895 = (0);
while(true){
if((i__38891_38895 < count__38890_38894)){
var ns_38896 = cljs.core._nth.call(null,chunk__38889_38893,i__38891_38895);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38896);

var G__38897 = seq__38888_38892;
var G__38898 = chunk__38889_38893;
var G__38899 = count__38890_38894;
var G__38900 = (i__38891_38895 + (1));
seq__38888_38892 = G__38897;
chunk__38889_38893 = G__38898;
count__38890_38894 = G__38899;
i__38891_38895 = G__38900;
continue;
} else {
var temp__4425__auto___38901 = cljs.core.seq.call(null,seq__38888_38892);
if(temp__4425__auto___38901){
var seq__38888_38902__$1 = temp__4425__auto___38901;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38888_38902__$1)){
var c__26725__auto___38903 = cljs.core.chunk_first.call(null,seq__38888_38902__$1);
var G__38904 = cljs.core.chunk_rest.call(null,seq__38888_38902__$1);
var G__38905 = c__26725__auto___38903;
var G__38906 = cljs.core.count.call(null,c__26725__auto___38903);
var G__38907 = (0);
seq__38888_38892 = G__38904;
chunk__38889_38893 = G__38905;
count__38890_38894 = G__38906;
i__38891_38895 = G__38907;
continue;
} else {
var ns_38908 = cljs.core.first.call(null,seq__38888_38902__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38908);

var G__38909 = cljs.core.next.call(null,seq__38888_38902__$1);
var G__38910 = null;
var G__38911 = (0);
var G__38912 = (0);
seq__38888_38892 = G__38909;
chunk__38889_38893 = G__38910;
count__38890_38894 = G__38911;
i__38891_38895 = G__38912;
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
goog.require_figwheel_backup_ = (function (){var or__25914__auto__ = goog.require__;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
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
var G__38913__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38913 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38914__i = 0, G__38914__a = new Array(arguments.length -  0);
while (G__38914__i < G__38914__a.length) {G__38914__a[G__38914__i] = arguments[G__38914__i + 0]; ++G__38914__i;}
  args = new cljs.core.IndexedSeq(G__38914__a,0);
} 
return G__38913__delegate.call(this,args);};
G__38913.cljs$lang$maxFixedArity = 0;
G__38913.cljs$lang$applyTo = (function (arglist__38915){
var args = cljs.core.seq(arglist__38915);
return G__38913__delegate(args);
});
G__38913.cljs$core$IFn$_invoke$arity$variadic = G__38913__delegate;
return G__38913;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38917 = cljs.core._EQ_;
var expr__38918 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38917.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38918))){
var path_parts = ((function (pred__38917,expr__38918){
return (function (p1__38916_SHARP_){
return clojure.string.split.call(null,p1__38916_SHARP_,/[\/\\]/);
});})(pred__38917,expr__38918))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__38917,expr__38918){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e38920){if((e38920 instanceof Error)){
var e = e38920;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38920;

}
}})());
});
;})(path_parts,sep,root,pred__38917,expr__38918))
} else {
if(cljs.core.truth_(pred__38917.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38918))){
return ((function (pred__38917,expr__38918){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__38917,expr__38918){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__38917,expr__38918))
);

return deferred.addErrback(((function (deferred,pred__38917,expr__38918){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__38917,expr__38918))
);
});
;})(pred__38917,expr__38918))
} else {
return ((function (pred__38917,expr__38918){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__38917,expr__38918))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38921,callback){
var map__38924 = p__38921;
var map__38924__$1 = ((((!((map__38924 == null)))?((((map__38924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38924):map__38924);
var file_msg = map__38924__$1;
var request_url = cljs.core.get.call(null,map__38924__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__38924,map__38924__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38924,map__38924__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__30045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto__){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto__){
return (function (state_38948){
var state_val_38949 = (state_38948[(1)]);
if((state_val_38949 === (7))){
var inst_38944 = (state_38948[(2)]);
var state_38948__$1 = state_38948;
var statearr_38950_38970 = state_38948__$1;
(statearr_38950_38970[(2)] = inst_38944);

(statearr_38950_38970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (1))){
var state_38948__$1 = state_38948;
var statearr_38951_38971 = state_38948__$1;
(statearr_38951_38971[(2)] = null);

(statearr_38951_38971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (4))){
var inst_38928 = (state_38948[(7)]);
var inst_38928__$1 = (state_38948[(2)]);
var state_38948__$1 = (function (){var statearr_38952 = state_38948;
(statearr_38952[(7)] = inst_38928__$1);

return statearr_38952;
})();
if(cljs.core.truth_(inst_38928__$1)){
var statearr_38953_38972 = state_38948__$1;
(statearr_38953_38972[(1)] = (5));

} else {
var statearr_38954_38973 = state_38948__$1;
(statearr_38954_38973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (6))){
var state_38948__$1 = state_38948;
var statearr_38955_38974 = state_38948__$1;
(statearr_38955_38974[(2)] = null);

(statearr_38955_38974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (3))){
var inst_38946 = (state_38948[(2)]);
var state_38948__$1 = state_38948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38948__$1,inst_38946);
} else {
if((state_val_38949 === (2))){
var state_38948__$1 = state_38948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38948__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38949 === (11))){
var inst_38940 = (state_38948[(2)]);
var state_38948__$1 = (function (){var statearr_38956 = state_38948;
(statearr_38956[(8)] = inst_38940);

return statearr_38956;
})();
var statearr_38957_38975 = state_38948__$1;
(statearr_38957_38975[(2)] = null);

(statearr_38957_38975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (9))){
var inst_38934 = (state_38948[(9)]);
var inst_38932 = (state_38948[(10)]);
var inst_38936 = inst_38934.call(null,inst_38932);
var state_38948__$1 = state_38948;
var statearr_38958_38976 = state_38948__$1;
(statearr_38958_38976[(2)] = inst_38936);

(statearr_38958_38976[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (5))){
var inst_38928 = (state_38948[(7)]);
var inst_38930 = figwheel.client.file_reloading.blocking_load.call(null,inst_38928);
var state_38948__$1 = state_38948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38948__$1,(8),inst_38930);
} else {
if((state_val_38949 === (10))){
var inst_38932 = (state_38948[(10)]);
var inst_38938 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38932);
var state_38948__$1 = state_38948;
var statearr_38959_38977 = state_38948__$1;
(statearr_38959_38977[(2)] = inst_38938);

(statearr_38959_38977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (8))){
var inst_38934 = (state_38948[(9)]);
var inst_38928 = (state_38948[(7)]);
var inst_38932 = (state_38948[(2)]);
var inst_38933 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38934__$1 = cljs.core.get.call(null,inst_38933,inst_38928);
var state_38948__$1 = (function (){var statearr_38960 = state_38948;
(statearr_38960[(9)] = inst_38934__$1);

(statearr_38960[(10)] = inst_38932);

return statearr_38960;
})();
if(cljs.core.truth_(inst_38934__$1)){
var statearr_38961_38978 = state_38948__$1;
(statearr_38961_38978[(1)] = (9));

} else {
var statearr_38962_38979 = state_38948__$1;
(statearr_38962_38979[(1)] = (10));

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
});})(c__30045__auto__))
;
return ((function (switch__29933__auto__,c__30045__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29934__auto__ = null;
var figwheel$client$file_reloading$state_machine__29934__auto____0 = (function (){
var statearr_38966 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38966[(0)] = figwheel$client$file_reloading$state_machine__29934__auto__);

(statearr_38966[(1)] = (1));

return statearr_38966;
});
var figwheel$client$file_reloading$state_machine__29934__auto____1 = (function (state_38948){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_38948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e38967){if((e38967 instanceof Object)){
var ex__29937__auto__ = e38967;
var statearr_38968_38980 = state_38948;
(statearr_38968_38980[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38981 = state_38948;
state_38948 = G__38981;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29934__auto__ = function(state_38948){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29934__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29934__auto____1.call(this,state_38948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29934__auto____0;
figwheel$client$file_reloading$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29934__auto____1;
return figwheel$client$file_reloading$state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto__))
})();
var state__30047__auto__ = (function (){var statearr_38969 = f__30046__auto__.call(null);
(statearr_38969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto__);

return statearr_38969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto__))
);

return c__30045__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38982,callback){
var map__38985 = p__38982;
var map__38985__$1 = ((((!((map__38985 == null)))?((((map__38985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38985):map__38985);
var file_msg = map__38985__$1;
var namespace = cljs.core.get.call(null,map__38985__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38985,map__38985__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38985,map__38985__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38987){
var map__38990 = p__38987;
var map__38990__$1 = ((((!((map__38990 == null)))?((((map__38990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38990):map__38990);
var file_msg = map__38990__$1;
var namespace = cljs.core.get.call(null,map__38990__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25902__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25902__auto__){
var or__25914__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
var or__25914__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25914__auto____$1)){
return or__25914__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25902__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38992,callback){
var map__38995 = p__38992;
var map__38995__$1 = ((((!((map__38995 == null)))?((((map__38995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38995):map__38995);
var file_msg = map__38995__$1;
var request_url = cljs.core.get.call(null,map__38995__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38995__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30045__auto___39083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto___39083,out){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto___39083,out){
return (function (state_39065){
var state_val_39066 = (state_39065[(1)]);
if((state_val_39066 === (1))){
var inst_39043 = cljs.core.nth.call(null,files,(0),null);
var inst_39044 = cljs.core.nthnext.call(null,files,(1));
var inst_39045 = files;
var state_39065__$1 = (function (){var statearr_39067 = state_39065;
(statearr_39067[(7)] = inst_39045);

(statearr_39067[(8)] = inst_39043);

(statearr_39067[(9)] = inst_39044);

return statearr_39067;
})();
var statearr_39068_39084 = state_39065__$1;
(statearr_39068_39084[(2)] = null);

(statearr_39068_39084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39066 === (2))){
var inst_39045 = (state_39065[(7)]);
var inst_39048 = (state_39065[(10)]);
var inst_39048__$1 = cljs.core.nth.call(null,inst_39045,(0),null);
var inst_39049 = cljs.core.nthnext.call(null,inst_39045,(1));
var inst_39050 = (inst_39048__$1 == null);
var inst_39051 = cljs.core.not.call(null,inst_39050);
var state_39065__$1 = (function (){var statearr_39069 = state_39065;
(statearr_39069[(11)] = inst_39049);

(statearr_39069[(10)] = inst_39048__$1);

return statearr_39069;
})();
if(inst_39051){
var statearr_39070_39085 = state_39065__$1;
(statearr_39070_39085[(1)] = (4));

} else {
var statearr_39071_39086 = state_39065__$1;
(statearr_39071_39086[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39066 === (3))){
var inst_39063 = (state_39065[(2)]);
var state_39065__$1 = state_39065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39065__$1,inst_39063);
} else {
if((state_val_39066 === (4))){
var inst_39048 = (state_39065[(10)]);
var inst_39053 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39048);
var state_39065__$1 = state_39065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39065__$1,(7),inst_39053);
} else {
if((state_val_39066 === (5))){
var inst_39059 = cljs.core.async.close_BANG_.call(null,out);
var state_39065__$1 = state_39065;
var statearr_39072_39087 = state_39065__$1;
(statearr_39072_39087[(2)] = inst_39059);

(statearr_39072_39087[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39066 === (6))){
var inst_39061 = (state_39065[(2)]);
var state_39065__$1 = state_39065;
var statearr_39073_39088 = state_39065__$1;
(statearr_39073_39088[(2)] = inst_39061);

(statearr_39073_39088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39066 === (7))){
var inst_39049 = (state_39065[(11)]);
var inst_39055 = (state_39065[(2)]);
var inst_39056 = cljs.core.async.put_BANG_.call(null,out,inst_39055);
var inst_39045 = inst_39049;
var state_39065__$1 = (function (){var statearr_39074 = state_39065;
(statearr_39074[(12)] = inst_39056);

(statearr_39074[(7)] = inst_39045);

return statearr_39074;
})();
var statearr_39075_39089 = state_39065__$1;
(statearr_39075_39089[(2)] = null);

(statearr_39075_39089[(1)] = (2));


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
});})(c__30045__auto___39083,out))
;
return ((function (switch__29933__auto__,c__30045__auto___39083,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29934__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29934__auto____0 = (function (){
var statearr_39079 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39079[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29934__auto__);

(statearr_39079[(1)] = (1));

return statearr_39079;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29934__auto____1 = (function (state_39065){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_39065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e39080){if((e39080 instanceof Object)){
var ex__29937__auto__ = e39080;
var statearr_39081_39090 = state_39065;
(statearr_39081_39090[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39091 = state_39065;
state_39065 = G__39091;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29934__auto__ = function(state_39065){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29934__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29934__auto____1.call(this,state_39065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29934__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29934__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto___39083,out))
})();
var state__30047__auto__ = (function (){var statearr_39082 = f__30046__auto__.call(null);
(statearr_39082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___39083);

return statearr_39082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto___39083,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39092,opts){
var map__39096 = p__39092;
var map__39096__$1 = ((((!((map__39096 == null)))?((((map__39096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39096):map__39096);
var eval_body__$1 = cljs.core.get.call(null,map__39096__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39096__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25902__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25902__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25902__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e39098){var e = e39098;
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
return (function (p1__39099_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39099_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__39104){
var vec__39105 = p__39104;
var k = cljs.core.nth.call(null,vec__39105,(0),null);
var v = cljs.core.nth.call(null,vec__39105,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39106){
var vec__39107 = p__39106;
var k = cljs.core.nth.call(null,vec__39107,(0),null);
var v = cljs.core.nth.call(null,vec__39107,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39111,p__39112){
var map__39359 = p__39111;
var map__39359__$1 = ((((!((map__39359 == null)))?((((map__39359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39359):map__39359);
var opts = map__39359__$1;
var before_jsload = cljs.core.get.call(null,map__39359__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39359__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39359__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39360 = p__39112;
var map__39360__$1 = ((((!((map__39360 == null)))?((((map__39360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39360):map__39360);
var msg = map__39360__$1;
var files = cljs.core.get.call(null,map__39360__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39360__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39360__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto__,map__39359,map__39359__$1,opts,before_jsload,on_jsload,reload_dependents,map__39360,map__39360__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto__,map__39359,map__39359__$1,opts,before_jsload,on_jsload,reload_dependents,map__39360,map__39360__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39513){
var state_val_39514 = (state_39513[(1)]);
if((state_val_39514 === (7))){
var inst_39374 = (state_39513[(7)]);
var inst_39376 = (state_39513[(8)]);
var inst_39375 = (state_39513[(9)]);
var inst_39377 = (state_39513[(10)]);
var inst_39382 = cljs.core._nth.call(null,inst_39375,inst_39377);
var inst_39383 = figwheel.client.file_reloading.eval_body.call(null,inst_39382,opts);
var inst_39384 = (inst_39377 + (1));
var tmp39515 = inst_39374;
var tmp39516 = inst_39376;
var tmp39517 = inst_39375;
var inst_39374__$1 = tmp39515;
var inst_39375__$1 = tmp39517;
var inst_39376__$1 = tmp39516;
var inst_39377__$1 = inst_39384;
var state_39513__$1 = (function (){var statearr_39518 = state_39513;
(statearr_39518[(7)] = inst_39374__$1);

(statearr_39518[(11)] = inst_39383);

(statearr_39518[(8)] = inst_39376__$1);

(statearr_39518[(9)] = inst_39375__$1);

(statearr_39518[(10)] = inst_39377__$1);

return statearr_39518;
})();
var statearr_39519_39605 = state_39513__$1;
(statearr_39519_39605[(2)] = null);

(statearr_39519_39605[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (20))){
var inst_39417 = (state_39513[(12)]);
var inst_39425 = figwheel.client.file_reloading.sort_files.call(null,inst_39417);
var state_39513__$1 = state_39513;
var statearr_39520_39606 = state_39513__$1;
(statearr_39520_39606[(2)] = inst_39425);

(statearr_39520_39606[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (27))){
var state_39513__$1 = state_39513;
var statearr_39521_39607 = state_39513__$1;
(statearr_39521_39607[(2)] = null);

(statearr_39521_39607[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (1))){
var inst_39366 = (state_39513[(13)]);
var inst_39363 = before_jsload.call(null,files);
var inst_39364 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39365 = (function (){return ((function (inst_39366,inst_39363,inst_39364,state_val_39514,c__30045__auto__,map__39359,map__39359__$1,opts,before_jsload,on_jsload,reload_dependents,map__39360,map__39360__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39108_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39108_SHARP_);
});
;})(inst_39366,inst_39363,inst_39364,state_val_39514,c__30045__auto__,map__39359,map__39359__$1,opts,before_jsload,on_jsload,reload_dependents,map__39360,map__39360__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39366__$1 = cljs.core.filter.call(null,inst_39365,files);
var inst_39367 = cljs.core.not_empty.call(null,inst_39366__$1);
var state_39513__$1 = (function (){var statearr_39522 = state_39513;
(statearr_39522[(14)] = inst_39364);

(statearr_39522[(13)] = inst_39366__$1);

(statearr_39522[(15)] = inst_39363);

return statearr_39522;
})();
if(cljs.core.truth_(inst_39367)){
var statearr_39523_39608 = state_39513__$1;
(statearr_39523_39608[(1)] = (2));

} else {
var statearr_39524_39609 = state_39513__$1;
(statearr_39524_39609[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (24))){
var state_39513__$1 = state_39513;
var statearr_39525_39610 = state_39513__$1;
(statearr_39525_39610[(2)] = null);

(statearr_39525_39610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (39))){
var inst_39467 = (state_39513[(16)]);
var state_39513__$1 = state_39513;
var statearr_39526_39611 = state_39513__$1;
(statearr_39526_39611[(2)] = inst_39467);

(statearr_39526_39611[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (46))){
var inst_39508 = (state_39513[(2)]);
var state_39513__$1 = state_39513;
var statearr_39527_39612 = state_39513__$1;
(statearr_39527_39612[(2)] = inst_39508);

(statearr_39527_39612[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (4))){
var inst_39411 = (state_39513[(2)]);
var inst_39412 = cljs.core.List.EMPTY;
var inst_39413 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39412);
var inst_39414 = (function (){return ((function (inst_39411,inst_39412,inst_39413,state_val_39514,c__30045__auto__,map__39359,map__39359__$1,opts,before_jsload,on_jsload,reload_dependents,map__39360,map__39360__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39109_SHARP_){
var and__25902__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39109_SHARP_);
if(cljs.core.truth_(and__25902__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39109_SHARP_));
} else {
return and__25902__auto__;
}
});
;})(inst_39411,inst_39412,inst_39413,state_val_39514,c__30045__auto__,map__39359,map__39359__$1,opts,before_jsload,on_jsload,reload_dependents,map__39360,map__39360__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39415 = cljs.core.filter.call(null,inst_39414,files);
var inst_39416 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39417 = cljs.core.concat.call(null,inst_39415,inst_39416);
var state_39513__$1 = (function (){var statearr_39528 = state_39513;
(statearr_39528[(17)] = inst_39411);

(statearr_39528[(18)] = inst_39413);

(statearr_39528[(12)] = inst_39417);

return statearr_39528;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39529_39613 = state_39513__$1;
(statearr_39529_39613[(1)] = (16));

} else {
var statearr_39530_39614 = state_39513__$1;
(statearr_39530_39614[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (15))){
var inst_39401 = (state_39513[(2)]);
var state_39513__$1 = state_39513;
var statearr_39531_39615 = state_39513__$1;
(statearr_39531_39615[(2)] = inst_39401);

(statearr_39531_39615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (21))){
var inst_39427 = (state_39513[(19)]);
var inst_39427__$1 = (state_39513[(2)]);
var inst_39428 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39427__$1);
var state_39513__$1 = (function (){var statearr_39532 = state_39513;
(statearr_39532[(19)] = inst_39427__$1);

return statearr_39532;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39513__$1,(22),inst_39428);
} else {
if((state_val_39514 === (31))){
var inst_39511 = (state_39513[(2)]);
var state_39513__$1 = state_39513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39513__$1,inst_39511);
} else {
if((state_val_39514 === (32))){
var inst_39467 = (state_39513[(16)]);
var inst_39472 = inst_39467.cljs$lang$protocol_mask$partition0$;
var inst_39473 = (inst_39472 & (64));
var inst_39474 = inst_39467.cljs$core$ISeq$;
var inst_39475 = (inst_39473) || (inst_39474);
var state_39513__$1 = state_39513;
if(cljs.core.truth_(inst_39475)){
var statearr_39533_39616 = state_39513__$1;
(statearr_39533_39616[(1)] = (35));

} else {
var statearr_39534_39617 = state_39513__$1;
(statearr_39534_39617[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (40))){
var inst_39488 = (state_39513[(20)]);
var inst_39487 = (state_39513[(2)]);
var inst_39488__$1 = cljs.core.get.call(null,inst_39487,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39489 = cljs.core.get.call(null,inst_39487,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39490 = cljs.core.not_empty.call(null,inst_39488__$1);
var state_39513__$1 = (function (){var statearr_39535 = state_39513;
(statearr_39535[(20)] = inst_39488__$1);

(statearr_39535[(21)] = inst_39489);

return statearr_39535;
})();
if(cljs.core.truth_(inst_39490)){
var statearr_39536_39618 = state_39513__$1;
(statearr_39536_39618[(1)] = (41));

} else {
var statearr_39537_39619 = state_39513__$1;
(statearr_39537_39619[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (33))){
var state_39513__$1 = state_39513;
var statearr_39538_39620 = state_39513__$1;
(statearr_39538_39620[(2)] = false);

(statearr_39538_39620[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (13))){
var inst_39387 = (state_39513[(22)]);
var inst_39391 = cljs.core.chunk_first.call(null,inst_39387);
var inst_39392 = cljs.core.chunk_rest.call(null,inst_39387);
var inst_39393 = cljs.core.count.call(null,inst_39391);
var inst_39374 = inst_39392;
var inst_39375 = inst_39391;
var inst_39376 = inst_39393;
var inst_39377 = (0);
var state_39513__$1 = (function (){var statearr_39539 = state_39513;
(statearr_39539[(7)] = inst_39374);

(statearr_39539[(8)] = inst_39376);

(statearr_39539[(9)] = inst_39375);

(statearr_39539[(10)] = inst_39377);

return statearr_39539;
})();
var statearr_39540_39621 = state_39513__$1;
(statearr_39540_39621[(2)] = null);

(statearr_39540_39621[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (22))){
var inst_39430 = (state_39513[(23)]);
var inst_39435 = (state_39513[(24)]);
var inst_39431 = (state_39513[(25)]);
var inst_39427 = (state_39513[(19)]);
var inst_39430__$1 = (state_39513[(2)]);
var inst_39431__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39430__$1);
var inst_39432 = (function (){var all_files = inst_39427;
var res_SINGLEQUOTE_ = inst_39430__$1;
var res = inst_39431__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39430,inst_39435,inst_39431,inst_39427,inst_39430__$1,inst_39431__$1,state_val_39514,c__30045__auto__,map__39359,map__39359__$1,opts,before_jsload,on_jsload,reload_dependents,map__39360,map__39360__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39110_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39110_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39430,inst_39435,inst_39431,inst_39427,inst_39430__$1,inst_39431__$1,state_val_39514,c__30045__auto__,map__39359,map__39359__$1,opts,before_jsload,on_jsload,reload_dependents,map__39360,map__39360__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39433 = cljs.core.filter.call(null,inst_39432,inst_39430__$1);
var inst_39434 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39435__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39434);
var inst_39436 = cljs.core.not_empty.call(null,inst_39435__$1);
var state_39513__$1 = (function (){var statearr_39541 = state_39513;
(statearr_39541[(23)] = inst_39430__$1);

(statearr_39541[(24)] = inst_39435__$1);

(statearr_39541[(26)] = inst_39433);

(statearr_39541[(25)] = inst_39431__$1);

return statearr_39541;
})();
if(cljs.core.truth_(inst_39436)){
var statearr_39542_39622 = state_39513__$1;
(statearr_39542_39622[(1)] = (23));

} else {
var statearr_39543_39623 = state_39513__$1;
(statearr_39543_39623[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (36))){
var state_39513__$1 = state_39513;
var statearr_39544_39624 = state_39513__$1;
(statearr_39544_39624[(2)] = false);

(statearr_39544_39624[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (41))){
var inst_39488 = (state_39513[(20)]);
var inst_39492 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39493 = cljs.core.map.call(null,inst_39492,inst_39488);
var inst_39494 = cljs.core.pr_str.call(null,inst_39493);
var inst_39495 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_39494)].join('');
var inst_39496 = figwheel.client.utils.log.call(null,inst_39495);
var state_39513__$1 = state_39513;
var statearr_39545_39625 = state_39513__$1;
(statearr_39545_39625[(2)] = inst_39496);

(statearr_39545_39625[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (43))){
var inst_39489 = (state_39513[(21)]);
var inst_39499 = (state_39513[(2)]);
var inst_39500 = cljs.core.not_empty.call(null,inst_39489);
var state_39513__$1 = (function (){var statearr_39546 = state_39513;
(statearr_39546[(27)] = inst_39499);

return statearr_39546;
})();
if(cljs.core.truth_(inst_39500)){
var statearr_39547_39626 = state_39513__$1;
(statearr_39547_39626[(1)] = (44));

} else {
var statearr_39548_39627 = state_39513__$1;
(statearr_39548_39627[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (29))){
var inst_39430 = (state_39513[(23)]);
var inst_39435 = (state_39513[(24)]);
var inst_39433 = (state_39513[(26)]);
var inst_39467 = (state_39513[(16)]);
var inst_39431 = (state_39513[(25)]);
var inst_39427 = (state_39513[(19)]);
var inst_39463 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39466 = (function (){var all_files = inst_39427;
var res_SINGLEQUOTE_ = inst_39430;
var res = inst_39431;
var files_not_loaded = inst_39433;
var dependencies_that_loaded = inst_39435;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39430,inst_39435,inst_39433,inst_39467,inst_39431,inst_39427,inst_39463,state_val_39514,c__30045__auto__,map__39359,map__39359__$1,opts,before_jsload,on_jsload,reload_dependents,map__39360,map__39360__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39465){
var map__39549 = p__39465;
var map__39549__$1 = ((((!((map__39549 == null)))?((((map__39549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39549):map__39549);
var namespace = cljs.core.get.call(null,map__39549__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39430,inst_39435,inst_39433,inst_39467,inst_39431,inst_39427,inst_39463,state_val_39514,c__30045__auto__,map__39359,map__39359__$1,opts,before_jsload,on_jsload,reload_dependents,map__39360,map__39360__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39467__$1 = cljs.core.group_by.call(null,inst_39466,inst_39433);
var inst_39469 = (inst_39467__$1 == null);
var inst_39470 = cljs.core.not.call(null,inst_39469);
var state_39513__$1 = (function (){var statearr_39551 = state_39513;
(statearr_39551[(28)] = inst_39463);

(statearr_39551[(16)] = inst_39467__$1);

return statearr_39551;
})();
if(inst_39470){
var statearr_39552_39628 = state_39513__$1;
(statearr_39552_39628[(1)] = (32));

} else {
var statearr_39553_39629 = state_39513__$1;
(statearr_39553_39629[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (44))){
var inst_39489 = (state_39513[(21)]);
var inst_39502 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39489);
var inst_39503 = cljs.core.pr_str.call(null,inst_39502);
var inst_39504 = [cljs.core.str("not required: "),cljs.core.str(inst_39503)].join('');
var inst_39505 = figwheel.client.utils.log.call(null,inst_39504);
var state_39513__$1 = state_39513;
var statearr_39554_39630 = state_39513__$1;
(statearr_39554_39630[(2)] = inst_39505);

(statearr_39554_39630[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (6))){
var inst_39408 = (state_39513[(2)]);
var state_39513__$1 = state_39513;
var statearr_39555_39631 = state_39513__$1;
(statearr_39555_39631[(2)] = inst_39408);

(statearr_39555_39631[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (28))){
var inst_39433 = (state_39513[(26)]);
var inst_39460 = (state_39513[(2)]);
var inst_39461 = cljs.core.not_empty.call(null,inst_39433);
var state_39513__$1 = (function (){var statearr_39556 = state_39513;
(statearr_39556[(29)] = inst_39460);

return statearr_39556;
})();
if(cljs.core.truth_(inst_39461)){
var statearr_39557_39632 = state_39513__$1;
(statearr_39557_39632[(1)] = (29));

} else {
var statearr_39558_39633 = state_39513__$1;
(statearr_39558_39633[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (25))){
var inst_39431 = (state_39513[(25)]);
var inst_39447 = (state_39513[(2)]);
var inst_39448 = cljs.core.not_empty.call(null,inst_39431);
var state_39513__$1 = (function (){var statearr_39559 = state_39513;
(statearr_39559[(30)] = inst_39447);

return statearr_39559;
})();
if(cljs.core.truth_(inst_39448)){
var statearr_39560_39634 = state_39513__$1;
(statearr_39560_39634[(1)] = (26));

} else {
var statearr_39561_39635 = state_39513__$1;
(statearr_39561_39635[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (34))){
var inst_39482 = (state_39513[(2)]);
var state_39513__$1 = state_39513;
if(cljs.core.truth_(inst_39482)){
var statearr_39562_39636 = state_39513__$1;
(statearr_39562_39636[(1)] = (38));

} else {
var statearr_39563_39637 = state_39513__$1;
(statearr_39563_39637[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (17))){
var state_39513__$1 = state_39513;
var statearr_39564_39638 = state_39513__$1;
(statearr_39564_39638[(2)] = recompile_dependents);

(statearr_39564_39638[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (3))){
var state_39513__$1 = state_39513;
var statearr_39565_39639 = state_39513__$1;
(statearr_39565_39639[(2)] = null);

(statearr_39565_39639[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (12))){
var inst_39404 = (state_39513[(2)]);
var state_39513__$1 = state_39513;
var statearr_39566_39640 = state_39513__$1;
(statearr_39566_39640[(2)] = inst_39404);

(statearr_39566_39640[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (2))){
var inst_39366 = (state_39513[(13)]);
var inst_39373 = cljs.core.seq.call(null,inst_39366);
var inst_39374 = inst_39373;
var inst_39375 = null;
var inst_39376 = (0);
var inst_39377 = (0);
var state_39513__$1 = (function (){var statearr_39567 = state_39513;
(statearr_39567[(7)] = inst_39374);

(statearr_39567[(8)] = inst_39376);

(statearr_39567[(9)] = inst_39375);

(statearr_39567[(10)] = inst_39377);

return statearr_39567;
})();
var statearr_39568_39641 = state_39513__$1;
(statearr_39568_39641[(2)] = null);

(statearr_39568_39641[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (23))){
var inst_39430 = (state_39513[(23)]);
var inst_39435 = (state_39513[(24)]);
var inst_39433 = (state_39513[(26)]);
var inst_39431 = (state_39513[(25)]);
var inst_39427 = (state_39513[(19)]);
var inst_39438 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39440 = (function (){var all_files = inst_39427;
var res_SINGLEQUOTE_ = inst_39430;
var res = inst_39431;
var files_not_loaded = inst_39433;
var dependencies_that_loaded = inst_39435;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39430,inst_39435,inst_39433,inst_39431,inst_39427,inst_39438,state_val_39514,c__30045__auto__,map__39359,map__39359__$1,opts,before_jsload,on_jsload,reload_dependents,map__39360,map__39360__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39439){
var map__39569 = p__39439;
var map__39569__$1 = ((((!((map__39569 == null)))?((((map__39569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39569):map__39569);
var request_url = cljs.core.get.call(null,map__39569__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39430,inst_39435,inst_39433,inst_39431,inst_39427,inst_39438,state_val_39514,c__30045__auto__,map__39359,map__39359__$1,opts,before_jsload,on_jsload,reload_dependents,map__39360,map__39360__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39441 = cljs.core.reverse.call(null,inst_39435);
var inst_39442 = cljs.core.map.call(null,inst_39440,inst_39441);
var inst_39443 = cljs.core.pr_str.call(null,inst_39442);
var inst_39444 = figwheel.client.utils.log.call(null,inst_39443);
var state_39513__$1 = (function (){var statearr_39571 = state_39513;
(statearr_39571[(31)] = inst_39438);

return statearr_39571;
})();
var statearr_39572_39642 = state_39513__$1;
(statearr_39572_39642[(2)] = inst_39444);

(statearr_39572_39642[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (35))){
var state_39513__$1 = state_39513;
var statearr_39573_39643 = state_39513__$1;
(statearr_39573_39643[(2)] = true);

(statearr_39573_39643[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (19))){
var inst_39417 = (state_39513[(12)]);
var inst_39423 = figwheel.client.file_reloading.expand_files.call(null,inst_39417);
var state_39513__$1 = state_39513;
var statearr_39574_39644 = state_39513__$1;
(statearr_39574_39644[(2)] = inst_39423);

(statearr_39574_39644[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (11))){
var state_39513__$1 = state_39513;
var statearr_39575_39645 = state_39513__$1;
(statearr_39575_39645[(2)] = null);

(statearr_39575_39645[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (9))){
var inst_39406 = (state_39513[(2)]);
var state_39513__$1 = state_39513;
var statearr_39576_39646 = state_39513__$1;
(statearr_39576_39646[(2)] = inst_39406);

(statearr_39576_39646[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (5))){
var inst_39376 = (state_39513[(8)]);
var inst_39377 = (state_39513[(10)]);
var inst_39379 = (inst_39377 < inst_39376);
var inst_39380 = inst_39379;
var state_39513__$1 = state_39513;
if(cljs.core.truth_(inst_39380)){
var statearr_39577_39647 = state_39513__$1;
(statearr_39577_39647[(1)] = (7));

} else {
var statearr_39578_39648 = state_39513__$1;
(statearr_39578_39648[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (14))){
var inst_39387 = (state_39513[(22)]);
var inst_39396 = cljs.core.first.call(null,inst_39387);
var inst_39397 = figwheel.client.file_reloading.eval_body.call(null,inst_39396,opts);
var inst_39398 = cljs.core.next.call(null,inst_39387);
var inst_39374 = inst_39398;
var inst_39375 = null;
var inst_39376 = (0);
var inst_39377 = (0);
var state_39513__$1 = (function (){var statearr_39579 = state_39513;
(statearr_39579[(7)] = inst_39374);

(statearr_39579[(8)] = inst_39376);

(statearr_39579[(9)] = inst_39375);

(statearr_39579[(10)] = inst_39377);

(statearr_39579[(32)] = inst_39397);

return statearr_39579;
})();
var statearr_39580_39649 = state_39513__$1;
(statearr_39580_39649[(2)] = null);

(statearr_39580_39649[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (45))){
var state_39513__$1 = state_39513;
var statearr_39581_39650 = state_39513__$1;
(statearr_39581_39650[(2)] = null);

(statearr_39581_39650[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (26))){
var inst_39430 = (state_39513[(23)]);
var inst_39435 = (state_39513[(24)]);
var inst_39433 = (state_39513[(26)]);
var inst_39431 = (state_39513[(25)]);
var inst_39427 = (state_39513[(19)]);
var inst_39450 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39452 = (function (){var all_files = inst_39427;
var res_SINGLEQUOTE_ = inst_39430;
var res = inst_39431;
var files_not_loaded = inst_39433;
var dependencies_that_loaded = inst_39435;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39430,inst_39435,inst_39433,inst_39431,inst_39427,inst_39450,state_val_39514,c__30045__auto__,map__39359,map__39359__$1,opts,before_jsload,on_jsload,reload_dependents,map__39360,map__39360__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39451){
var map__39582 = p__39451;
var map__39582__$1 = ((((!((map__39582 == null)))?((((map__39582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39582):map__39582);
var namespace = cljs.core.get.call(null,map__39582__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39582__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39430,inst_39435,inst_39433,inst_39431,inst_39427,inst_39450,state_val_39514,c__30045__auto__,map__39359,map__39359__$1,opts,before_jsload,on_jsload,reload_dependents,map__39360,map__39360__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39453 = cljs.core.map.call(null,inst_39452,inst_39431);
var inst_39454 = cljs.core.pr_str.call(null,inst_39453);
var inst_39455 = figwheel.client.utils.log.call(null,inst_39454);
var inst_39456 = (function (){var all_files = inst_39427;
var res_SINGLEQUOTE_ = inst_39430;
var res = inst_39431;
var files_not_loaded = inst_39433;
var dependencies_that_loaded = inst_39435;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39430,inst_39435,inst_39433,inst_39431,inst_39427,inst_39450,inst_39452,inst_39453,inst_39454,inst_39455,state_val_39514,c__30045__auto__,map__39359,map__39359__$1,opts,before_jsload,on_jsload,reload_dependents,map__39360,map__39360__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39430,inst_39435,inst_39433,inst_39431,inst_39427,inst_39450,inst_39452,inst_39453,inst_39454,inst_39455,state_val_39514,c__30045__auto__,map__39359,map__39359__$1,opts,before_jsload,on_jsload,reload_dependents,map__39360,map__39360__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39457 = setTimeout(inst_39456,(10));
var state_39513__$1 = (function (){var statearr_39584 = state_39513;
(statearr_39584[(33)] = inst_39455);

(statearr_39584[(34)] = inst_39450);

return statearr_39584;
})();
var statearr_39585_39651 = state_39513__$1;
(statearr_39585_39651[(2)] = inst_39457);

(statearr_39585_39651[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (16))){
var state_39513__$1 = state_39513;
var statearr_39586_39652 = state_39513__$1;
(statearr_39586_39652[(2)] = reload_dependents);

(statearr_39586_39652[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (38))){
var inst_39467 = (state_39513[(16)]);
var inst_39484 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39467);
var state_39513__$1 = state_39513;
var statearr_39587_39653 = state_39513__$1;
(statearr_39587_39653[(2)] = inst_39484);

(statearr_39587_39653[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (30))){
var state_39513__$1 = state_39513;
var statearr_39588_39654 = state_39513__$1;
(statearr_39588_39654[(2)] = null);

(statearr_39588_39654[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (10))){
var inst_39387 = (state_39513[(22)]);
var inst_39389 = cljs.core.chunked_seq_QMARK_.call(null,inst_39387);
var state_39513__$1 = state_39513;
if(inst_39389){
var statearr_39589_39655 = state_39513__$1;
(statearr_39589_39655[(1)] = (13));

} else {
var statearr_39590_39656 = state_39513__$1;
(statearr_39590_39656[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (18))){
var inst_39421 = (state_39513[(2)]);
var state_39513__$1 = state_39513;
if(cljs.core.truth_(inst_39421)){
var statearr_39591_39657 = state_39513__$1;
(statearr_39591_39657[(1)] = (19));

} else {
var statearr_39592_39658 = state_39513__$1;
(statearr_39592_39658[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (42))){
var state_39513__$1 = state_39513;
var statearr_39593_39659 = state_39513__$1;
(statearr_39593_39659[(2)] = null);

(statearr_39593_39659[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (37))){
var inst_39479 = (state_39513[(2)]);
var state_39513__$1 = state_39513;
var statearr_39594_39660 = state_39513__$1;
(statearr_39594_39660[(2)] = inst_39479);

(statearr_39594_39660[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (8))){
var inst_39387 = (state_39513[(22)]);
var inst_39374 = (state_39513[(7)]);
var inst_39387__$1 = cljs.core.seq.call(null,inst_39374);
var state_39513__$1 = (function (){var statearr_39595 = state_39513;
(statearr_39595[(22)] = inst_39387__$1);

return statearr_39595;
})();
if(inst_39387__$1){
var statearr_39596_39661 = state_39513__$1;
(statearr_39596_39661[(1)] = (10));

} else {
var statearr_39597_39662 = state_39513__$1;
(statearr_39597_39662[(1)] = (11));

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
});})(c__30045__auto__,map__39359,map__39359__$1,opts,before_jsload,on_jsload,reload_dependents,map__39360,map__39360__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29933__auto__,c__30045__auto__,map__39359,map__39359__$1,opts,before_jsload,on_jsload,reload_dependents,map__39360,map__39360__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29934__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29934__auto____0 = (function (){
var statearr_39601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39601[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29934__auto__);

(statearr_39601[(1)] = (1));

return statearr_39601;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29934__auto____1 = (function (state_39513){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_39513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e39602){if((e39602 instanceof Object)){
var ex__29937__auto__ = e39602;
var statearr_39603_39663 = state_39513;
(statearr_39603_39663[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39664 = state_39513;
state_39513 = G__39664;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29934__auto__ = function(state_39513){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29934__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29934__auto____1.call(this,state_39513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29934__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29934__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto__,map__39359,map__39359__$1,opts,before_jsload,on_jsload,reload_dependents,map__39360,map__39360__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30047__auto__ = (function (){var statearr_39604 = f__30046__auto__.call(null);
(statearr_39604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto__);

return statearr_39604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto__,map__39359,map__39359__$1,opts,before_jsload,on_jsload,reload_dependents,map__39360,map__39360__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30045__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39667,link){
var map__39670 = p__39667;
var map__39670__$1 = ((((!((map__39670 == null)))?((((map__39670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39670):map__39670);
var file = cljs.core.get.call(null,map__39670__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__39670,map__39670__$1,file){
return (function (p1__39665_SHARP_,p2__39666_SHARP_){
if(cljs.core._EQ_.call(null,p1__39665_SHARP_,p2__39666_SHARP_)){
return p1__39665_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__39670,map__39670__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39676){
var map__39677 = p__39676;
var map__39677__$1 = ((((!((map__39677 == null)))?((((map__39677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39677):map__39677);
var match_length = cljs.core.get.call(null,map__39677__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39677__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39672_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39672_SHARP_);
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
var args39679 = [];
var len__26984__auto___39682 = arguments.length;
var i__26985__auto___39683 = (0);
while(true){
if((i__26985__auto___39683 < len__26984__auto___39682)){
args39679.push((arguments[i__26985__auto___39683]));

var G__39684 = (i__26985__auto___39683 + (1));
i__26985__auto___39683 = G__39684;
continue;
} else {
}
break;
}

var G__39681 = args39679.length;
switch (G__39681) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39679.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__39686_SHARP_,p2__39687_SHARP_){
return cljs.core.assoc.call(null,p1__39686_SHARP_,cljs.core.get.call(null,p2__39687_SHARP_,key),p2__39687_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__39688){
var map__39691 = p__39688;
var map__39691__$1 = ((((!((map__39691 == null)))?((((map__39691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39691):map__39691);
var f_data = map__39691__$1;
var file = cljs.core.get.call(null,map__39691__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39693,files_msg){
var map__39700 = p__39693;
var map__39700__$1 = ((((!((map__39700 == null)))?((((map__39700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39700):map__39700);
var opts = map__39700__$1;
var on_cssload = cljs.core.get.call(null,map__39700__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__39702_39706 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__39703_39707 = null;
var count__39704_39708 = (0);
var i__39705_39709 = (0);
while(true){
if((i__39705_39709 < count__39704_39708)){
var f_39710 = cljs.core._nth.call(null,chunk__39703_39707,i__39705_39709);
figwheel.client.file_reloading.reload_css_file.call(null,f_39710);

var G__39711 = seq__39702_39706;
var G__39712 = chunk__39703_39707;
var G__39713 = count__39704_39708;
var G__39714 = (i__39705_39709 + (1));
seq__39702_39706 = G__39711;
chunk__39703_39707 = G__39712;
count__39704_39708 = G__39713;
i__39705_39709 = G__39714;
continue;
} else {
var temp__4425__auto___39715 = cljs.core.seq.call(null,seq__39702_39706);
if(temp__4425__auto___39715){
var seq__39702_39716__$1 = temp__4425__auto___39715;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39702_39716__$1)){
var c__26725__auto___39717 = cljs.core.chunk_first.call(null,seq__39702_39716__$1);
var G__39718 = cljs.core.chunk_rest.call(null,seq__39702_39716__$1);
var G__39719 = c__26725__auto___39717;
var G__39720 = cljs.core.count.call(null,c__26725__auto___39717);
var G__39721 = (0);
seq__39702_39706 = G__39718;
chunk__39703_39707 = G__39719;
count__39704_39708 = G__39720;
i__39705_39709 = G__39721;
continue;
} else {
var f_39722 = cljs.core.first.call(null,seq__39702_39716__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_39722);

var G__39723 = cljs.core.next.call(null,seq__39702_39716__$1);
var G__39724 = null;
var G__39725 = (0);
var G__39726 = (0);
seq__39702_39706 = G__39723;
chunk__39703_39707 = G__39724;
count__39704_39708 = G__39725;
i__39705_39709 = G__39726;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__39700,map__39700__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__39700,map__39700__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map