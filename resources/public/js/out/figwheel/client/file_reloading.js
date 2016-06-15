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
var or__24089__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24089__auto__){
return or__24089__auto__;
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
var or__24089__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36653_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36653_SHARP_));
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
var seq__36658 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36659 = null;
var count__36660 = (0);
var i__36661 = (0);
while(true){
if((i__36661 < count__36660)){
var n = cljs.core._nth.call(null,chunk__36659,i__36661);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36662 = seq__36658;
var G__36663 = chunk__36659;
var G__36664 = count__36660;
var G__36665 = (i__36661 + (1));
seq__36658 = G__36662;
chunk__36659 = G__36663;
count__36660 = G__36664;
i__36661 = G__36665;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36658);
if(temp__4425__auto__){
var seq__36658__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36658__$1)){
var c__24900__auto__ = cljs.core.chunk_first.call(null,seq__36658__$1);
var G__36666 = cljs.core.chunk_rest.call(null,seq__36658__$1);
var G__36667 = c__24900__auto__;
var G__36668 = cljs.core.count.call(null,c__24900__auto__);
var G__36669 = (0);
seq__36658 = G__36666;
chunk__36659 = G__36667;
count__36660 = G__36668;
i__36661 = G__36669;
continue;
} else {
var n = cljs.core.first.call(null,seq__36658__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36670 = cljs.core.next.call(null,seq__36658__$1);
var G__36671 = null;
var G__36672 = (0);
var G__36673 = (0);
seq__36658 = G__36670;
chunk__36659 = G__36671;
count__36660 = G__36672;
i__36661 = G__36673;
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

var seq__36712_36719 = cljs.core.seq.call(null,deps);
var chunk__36713_36720 = null;
var count__36714_36721 = (0);
var i__36715_36722 = (0);
while(true){
if((i__36715_36722 < count__36714_36721)){
var dep_36723 = cljs.core._nth.call(null,chunk__36713_36720,i__36715_36722);
topo_sort_helper_STAR_.call(null,dep_36723,(depth + (1)),state);

var G__36724 = seq__36712_36719;
var G__36725 = chunk__36713_36720;
var G__36726 = count__36714_36721;
var G__36727 = (i__36715_36722 + (1));
seq__36712_36719 = G__36724;
chunk__36713_36720 = G__36725;
count__36714_36721 = G__36726;
i__36715_36722 = G__36727;
continue;
} else {
var temp__4425__auto___36728 = cljs.core.seq.call(null,seq__36712_36719);
if(temp__4425__auto___36728){
var seq__36712_36729__$1 = temp__4425__auto___36728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36712_36729__$1)){
var c__24900__auto___36730 = cljs.core.chunk_first.call(null,seq__36712_36729__$1);
var G__36731 = cljs.core.chunk_rest.call(null,seq__36712_36729__$1);
var G__36732 = c__24900__auto___36730;
var G__36733 = cljs.core.count.call(null,c__24900__auto___36730);
var G__36734 = (0);
seq__36712_36719 = G__36731;
chunk__36713_36720 = G__36732;
count__36714_36721 = G__36733;
i__36715_36722 = G__36734;
continue;
} else {
var dep_36735 = cljs.core.first.call(null,seq__36712_36729__$1);
topo_sort_helper_STAR_.call(null,dep_36735,(depth + (1)),state);

var G__36736 = cljs.core.next.call(null,seq__36712_36729__$1);
var G__36737 = null;
var G__36738 = (0);
var G__36739 = (0);
seq__36712_36719 = G__36736;
chunk__36713_36720 = G__36737;
count__36714_36721 = G__36738;
i__36715_36722 = G__36739;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36716){
var vec__36718 = p__36716;
var x = cljs.core.nth.call(null,vec__36718,(0),null);
var xs = cljs.core.nthnext.call(null,vec__36718,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36718,x,xs,get_deps__$1){
return (function (p1__36674_SHARP_){
return clojure.set.difference.call(null,p1__36674_SHARP_,x);
});})(vec__36718,x,xs,get_deps__$1))
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
var seq__36752 = cljs.core.seq.call(null,provides);
var chunk__36753 = null;
var count__36754 = (0);
var i__36755 = (0);
while(true){
if((i__36755 < count__36754)){
var prov = cljs.core._nth.call(null,chunk__36753,i__36755);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36756_36764 = cljs.core.seq.call(null,requires);
var chunk__36757_36765 = null;
var count__36758_36766 = (0);
var i__36759_36767 = (0);
while(true){
if((i__36759_36767 < count__36758_36766)){
var req_36768 = cljs.core._nth.call(null,chunk__36757_36765,i__36759_36767);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36768,prov);

var G__36769 = seq__36756_36764;
var G__36770 = chunk__36757_36765;
var G__36771 = count__36758_36766;
var G__36772 = (i__36759_36767 + (1));
seq__36756_36764 = G__36769;
chunk__36757_36765 = G__36770;
count__36758_36766 = G__36771;
i__36759_36767 = G__36772;
continue;
} else {
var temp__4425__auto___36773 = cljs.core.seq.call(null,seq__36756_36764);
if(temp__4425__auto___36773){
var seq__36756_36774__$1 = temp__4425__auto___36773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36756_36774__$1)){
var c__24900__auto___36775 = cljs.core.chunk_first.call(null,seq__36756_36774__$1);
var G__36776 = cljs.core.chunk_rest.call(null,seq__36756_36774__$1);
var G__36777 = c__24900__auto___36775;
var G__36778 = cljs.core.count.call(null,c__24900__auto___36775);
var G__36779 = (0);
seq__36756_36764 = G__36776;
chunk__36757_36765 = G__36777;
count__36758_36766 = G__36778;
i__36759_36767 = G__36779;
continue;
} else {
var req_36780 = cljs.core.first.call(null,seq__36756_36774__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36780,prov);

var G__36781 = cljs.core.next.call(null,seq__36756_36774__$1);
var G__36782 = null;
var G__36783 = (0);
var G__36784 = (0);
seq__36756_36764 = G__36781;
chunk__36757_36765 = G__36782;
count__36758_36766 = G__36783;
i__36759_36767 = G__36784;
continue;
}
} else {
}
}
break;
}

var G__36785 = seq__36752;
var G__36786 = chunk__36753;
var G__36787 = count__36754;
var G__36788 = (i__36755 + (1));
seq__36752 = G__36785;
chunk__36753 = G__36786;
count__36754 = G__36787;
i__36755 = G__36788;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36752);
if(temp__4425__auto__){
var seq__36752__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36752__$1)){
var c__24900__auto__ = cljs.core.chunk_first.call(null,seq__36752__$1);
var G__36789 = cljs.core.chunk_rest.call(null,seq__36752__$1);
var G__36790 = c__24900__auto__;
var G__36791 = cljs.core.count.call(null,c__24900__auto__);
var G__36792 = (0);
seq__36752 = G__36789;
chunk__36753 = G__36790;
count__36754 = G__36791;
i__36755 = G__36792;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36752__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36760_36793 = cljs.core.seq.call(null,requires);
var chunk__36761_36794 = null;
var count__36762_36795 = (0);
var i__36763_36796 = (0);
while(true){
if((i__36763_36796 < count__36762_36795)){
var req_36797 = cljs.core._nth.call(null,chunk__36761_36794,i__36763_36796);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36797,prov);

var G__36798 = seq__36760_36793;
var G__36799 = chunk__36761_36794;
var G__36800 = count__36762_36795;
var G__36801 = (i__36763_36796 + (1));
seq__36760_36793 = G__36798;
chunk__36761_36794 = G__36799;
count__36762_36795 = G__36800;
i__36763_36796 = G__36801;
continue;
} else {
var temp__4425__auto___36802__$1 = cljs.core.seq.call(null,seq__36760_36793);
if(temp__4425__auto___36802__$1){
var seq__36760_36803__$1 = temp__4425__auto___36802__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36760_36803__$1)){
var c__24900__auto___36804 = cljs.core.chunk_first.call(null,seq__36760_36803__$1);
var G__36805 = cljs.core.chunk_rest.call(null,seq__36760_36803__$1);
var G__36806 = c__24900__auto___36804;
var G__36807 = cljs.core.count.call(null,c__24900__auto___36804);
var G__36808 = (0);
seq__36760_36793 = G__36805;
chunk__36761_36794 = G__36806;
count__36762_36795 = G__36807;
i__36763_36796 = G__36808;
continue;
} else {
var req_36809 = cljs.core.first.call(null,seq__36760_36803__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36809,prov);

var G__36810 = cljs.core.next.call(null,seq__36760_36803__$1);
var G__36811 = null;
var G__36812 = (0);
var G__36813 = (0);
seq__36760_36793 = G__36810;
chunk__36761_36794 = G__36811;
count__36762_36795 = G__36812;
i__36763_36796 = G__36813;
continue;
}
} else {
}
}
break;
}

var G__36814 = cljs.core.next.call(null,seq__36752__$1);
var G__36815 = null;
var G__36816 = (0);
var G__36817 = (0);
seq__36752 = G__36814;
chunk__36753 = G__36815;
count__36754 = G__36816;
i__36755 = G__36817;
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
var seq__36822_36826 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36823_36827 = null;
var count__36824_36828 = (0);
var i__36825_36829 = (0);
while(true){
if((i__36825_36829 < count__36824_36828)){
var ns_36830 = cljs.core._nth.call(null,chunk__36823_36827,i__36825_36829);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36830);

var G__36831 = seq__36822_36826;
var G__36832 = chunk__36823_36827;
var G__36833 = count__36824_36828;
var G__36834 = (i__36825_36829 + (1));
seq__36822_36826 = G__36831;
chunk__36823_36827 = G__36832;
count__36824_36828 = G__36833;
i__36825_36829 = G__36834;
continue;
} else {
var temp__4425__auto___36835 = cljs.core.seq.call(null,seq__36822_36826);
if(temp__4425__auto___36835){
var seq__36822_36836__$1 = temp__4425__auto___36835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36822_36836__$1)){
var c__24900__auto___36837 = cljs.core.chunk_first.call(null,seq__36822_36836__$1);
var G__36838 = cljs.core.chunk_rest.call(null,seq__36822_36836__$1);
var G__36839 = c__24900__auto___36837;
var G__36840 = cljs.core.count.call(null,c__24900__auto___36837);
var G__36841 = (0);
seq__36822_36826 = G__36838;
chunk__36823_36827 = G__36839;
count__36824_36828 = G__36840;
i__36825_36829 = G__36841;
continue;
} else {
var ns_36842 = cljs.core.first.call(null,seq__36822_36836__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36842);

var G__36843 = cljs.core.next.call(null,seq__36822_36836__$1);
var G__36844 = null;
var G__36845 = (0);
var G__36846 = (0);
seq__36822_36826 = G__36843;
chunk__36823_36827 = G__36844;
count__36824_36828 = G__36845;
i__36825_36829 = G__36846;
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
goog.require_figwheel_backup_ = (function (){var or__24089__auto__ = goog.require__;
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
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
var G__36847__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36847 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36848__i = 0, G__36848__a = new Array(arguments.length -  0);
while (G__36848__i < G__36848__a.length) {G__36848__a[G__36848__i] = arguments[G__36848__i + 0]; ++G__36848__i;}
  args = new cljs.core.IndexedSeq(G__36848__a,0);
} 
return G__36847__delegate.call(this,args);};
G__36847.cljs$lang$maxFixedArity = 0;
G__36847.cljs$lang$applyTo = (function (arglist__36849){
var args = cljs.core.seq(arglist__36849);
return G__36847__delegate(args);
});
G__36847.cljs$core$IFn$_invoke$arity$variadic = G__36847__delegate;
return G__36847;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36851 = cljs.core._EQ_;
var expr__36852 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36851.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36852))){
var path_parts = ((function (pred__36851,expr__36852){
return (function (p1__36850_SHARP_){
return clojure.string.split.call(null,p1__36850_SHARP_,/[\/\\]/);
});})(pred__36851,expr__36852))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__36851,expr__36852){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36854){if((e36854 instanceof Error)){
var e = e36854;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36854;

}
}})());
});
;})(path_parts,sep,root,pred__36851,expr__36852))
} else {
if(cljs.core.truth_(pred__36851.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36852))){
return ((function (pred__36851,expr__36852){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__36851,expr__36852){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__36851,expr__36852))
);

return deferred.addErrback(((function (deferred,pred__36851,expr__36852){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__36851,expr__36852))
);
});
;})(pred__36851,expr__36852))
} else {
return ((function (pred__36851,expr__36852){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36851,expr__36852))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36855,callback){
var map__36858 = p__36855;
var map__36858__$1 = ((((!((map__36858 == null)))?((((map__36858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36858):map__36858);
var file_msg = map__36858__$1;
var request_url = cljs.core.get.call(null,map__36858__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36858,map__36858__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36858,map__36858__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__28220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto__){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto__){
return (function (state_36882){
var state_val_36883 = (state_36882[(1)]);
if((state_val_36883 === (7))){
var inst_36878 = (state_36882[(2)]);
var state_36882__$1 = state_36882;
var statearr_36884_36904 = state_36882__$1;
(statearr_36884_36904[(2)] = inst_36878);

(statearr_36884_36904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36883 === (1))){
var state_36882__$1 = state_36882;
var statearr_36885_36905 = state_36882__$1;
(statearr_36885_36905[(2)] = null);

(statearr_36885_36905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36883 === (4))){
var inst_36862 = (state_36882[(7)]);
var inst_36862__$1 = (state_36882[(2)]);
var state_36882__$1 = (function (){var statearr_36886 = state_36882;
(statearr_36886[(7)] = inst_36862__$1);

return statearr_36886;
})();
if(cljs.core.truth_(inst_36862__$1)){
var statearr_36887_36906 = state_36882__$1;
(statearr_36887_36906[(1)] = (5));

} else {
var statearr_36888_36907 = state_36882__$1;
(statearr_36888_36907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36883 === (6))){
var state_36882__$1 = state_36882;
var statearr_36889_36908 = state_36882__$1;
(statearr_36889_36908[(2)] = null);

(statearr_36889_36908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36883 === (3))){
var inst_36880 = (state_36882[(2)]);
var state_36882__$1 = state_36882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36882__$1,inst_36880);
} else {
if((state_val_36883 === (2))){
var state_36882__$1 = state_36882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36882__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36883 === (11))){
var inst_36874 = (state_36882[(2)]);
var state_36882__$1 = (function (){var statearr_36890 = state_36882;
(statearr_36890[(8)] = inst_36874);

return statearr_36890;
})();
var statearr_36891_36909 = state_36882__$1;
(statearr_36891_36909[(2)] = null);

(statearr_36891_36909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36883 === (9))){
var inst_36866 = (state_36882[(9)]);
var inst_36868 = (state_36882[(10)]);
var inst_36870 = inst_36868.call(null,inst_36866);
var state_36882__$1 = state_36882;
var statearr_36892_36910 = state_36882__$1;
(statearr_36892_36910[(2)] = inst_36870);

(statearr_36892_36910[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36883 === (5))){
var inst_36862 = (state_36882[(7)]);
var inst_36864 = figwheel.client.file_reloading.blocking_load.call(null,inst_36862);
var state_36882__$1 = state_36882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36882__$1,(8),inst_36864);
} else {
if((state_val_36883 === (10))){
var inst_36866 = (state_36882[(9)]);
var inst_36872 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36866);
var state_36882__$1 = state_36882;
var statearr_36893_36911 = state_36882__$1;
(statearr_36893_36911[(2)] = inst_36872);

(statearr_36893_36911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36883 === (8))){
var inst_36862 = (state_36882[(7)]);
var inst_36868 = (state_36882[(10)]);
var inst_36866 = (state_36882[(2)]);
var inst_36867 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36868__$1 = cljs.core.get.call(null,inst_36867,inst_36862);
var state_36882__$1 = (function (){var statearr_36894 = state_36882;
(statearr_36894[(9)] = inst_36866);

(statearr_36894[(10)] = inst_36868__$1);

return statearr_36894;
})();
if(cljs.core.truth_(inst_36868__$1)){
var statearr_36895_36912 = state_36882__$1;
(statearr_36895_36912[(1)] = (9));

} else {
var statearr_36896_36913 = state_36882__$1;
(statearr_36896_36913[(1)] = (10));

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
});})(c__28220__auto__))
;
return ((function (switch__28108__auto__,c__28220__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28109__auto__ = null;
var figwheel$client$file_reloading$state_machine__28109__auto____0 = (function (){
var statearr_36900 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36900[(0)] = figwheel$client$file_reloading$state_machine__28109__auto__);

(statearr_36900[(1)] = (1));

return statearr_36900;
});
var figwheel$client$file_reloading$state_machine__28109__auto____1 = (function (state_36882){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_36882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e36901){if((e36901 instanceof Object)){
var ex__28112__auto__ = e36901;
var statearr_36902_36914 = state_36882;
(statearr_36902_36914[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36915 = state_36882;
state_36882 = G__36915;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28109__auto__ = function(state_36882){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28109__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28109__auto____1.call(this,state_36882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28109__auto____0;
figwheel$client$file_reloading$state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28109__auto____1;
return figwheel$client$file_reloading$state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto__))
})();
var state__28222__auto__ = (function (){var statearr_36903 = f__28221__auto__.call(null);
(statearr_36903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto__);

return statearr_36903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto__))
);

return c__28220__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36916,callback){
var map__36919 = p__36916;
var map__36919__$1 = ((((!((map__36919 == null)))?((((map__36919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36919):map__36919);
var file_msg = map__36919__$1;
var namespace = cljs.core.get.call(null,map__36919__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36919,map__36919__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36919,map__36919__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36921){
var map__36924 = p__36921;
var map__36924__$1 = ((((!((map__36924 == null)))?((((map__36924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36924):map__36924);
var file_msg = map__36924__$1;
var namespace = cljs.core.get.call(null,map__36924__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24077__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24077__auto__){
var or__24089__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
var or__24089__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24089__auto____$1)){
return or__24089__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24077__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36926,callback){
var map__36929 = p__36926;
var map__36929__$1 = ((((!((map__36929 == null)))?((((map__36929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36929):map__36929);
var file_msg = map__36929__$1;
var request_url = cljs.core.get.call(null,map__36929__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36929__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28220__auto___37017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto___37017,out){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto___37017,out){
return (function (state_36999){
var state_val_37000 = (state_36999[(1)]);
if((state_val_37000 === (1))){
var inst_36977 = cljs.core.nth.call(null,files,(0),null);
var inst_36978 = cljs.core.nthnext.call(null,files,(1));
var inst_36979 = files;
var state_36999__$1 = (function (){var statearr_37001 = state_36999;
(statearr_37001[(7)] = inst_36978);

(statearr_37001[(8)] = inst_36977);

(statearr_37001[(9)] = inst_36979);

return statearr_37001;
})();
var statearr_37002_37018 = state_36999__$1;
(statearr_37002_37018[(2)] = null);

(statearr_37002_37018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (2))){
var inst_36982 = (state_36999[(10)]);
var inst_36979 = (state_36999[(9)]);
var inst_36982__$1 = cljs.core.nth.call(null,inst_36979,(0),null);
var inst_36983 = cljs.core.nthnext.call(null,inst_36979,(1));
var inst_36984 = (inst_36982__$1 == null);
var inst_36985 = cljs.core.not.call(null,inst_36984);
var state_36999__$1 = (function (){var statearr_37003 = state_36999;
(statearr_37003[(10)] = inst_36982__$1);

(statearr_37003[(11)] = inst_36983);

return statearr_37003;
})();
if(inst_36985){
var statearr_37004_37019 = state_36999__$1;
(statearr_37004_37019[(1)] = (4));

} else {
var statearr_37005_37020 = state_36999__$1;
(statearr_37005_37020[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (3))){
var inst_36997 = (state_36999[(2)]);
var state_36999__$1 = state_36999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36999__$1,inst_36997);
} else {
if((state_val_37000 === (4))){
var inst_36982 = (state_36999[(10)]);
var inst_36987 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36982);
var state_36999__$1 = state_36999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36999__$1,(7),inst_36987);
} else {
if((state_val_37000 === (5))){
var inst_36993 = cljs.core.async.close_BANG_.call(null,out);
var state_36999__$1 = state_36999;
var statearr_37006_37021 = state_36999__$1;
(statearr_37006_37021[(2)] = inst_36993);

(statearr_37006_37021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (6))){
var inst_36995 = (state_36999[(2)]);
var state_36999__$1 = state_36999;
var statearr_37007_37022 = state_36999__$1;
(statearr_37007_37022[(2)] = inst_36995);

(statearr_37007_37022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37000 === (7))){
var inst_36983 = (state_36999[(11)]);
var inst_36989 = (state_36999[(2)]);
var inst_36990 = cljs.core.async.put_BANG_.call(null,out,inst_36989);
var inst_36979 = inst_36983;
var state_36999__$1 = (function (){var statearr_37008 = state_36999;
(statearr_37008[(12)] = inst_36990);

(statearr_37008[(9)] = inst_36979);

return statearr_37008;
})();
var statearr_37009_37023 = state_36999__$1;
(statearr_37009_37023[(2)] = null);

(statearr_37009_37023[(1)] = (2));


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
});})(c__28220__auto___37017,out))
;
return ((function (switch__28108__auto__,c__28220__auto___37017,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28109__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28109__auto____0 = (function (){
var statearr_37013 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37013[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28109__auto__);

(statearr_37013[(1)] = (1));

return statearr_37013;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28109__auto____1 = (function (state_36999){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_36999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e37014){if((e37014 instanceof Object)){
var ex__28112__auto__ = e37014;
var statearr_37015_37024 = state_36999;
(statearr_37015_37024[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37025 = state_36999;
state_36999 = G__37025;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28109__auto__ = function(state_36999){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28109__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28109__auto____1.call(this,state_36999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28109__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28109__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto___37017,out))
})();
var state__28222__auto__ = (function (){var statearr_37016 = f__28221__auto__.call(null);
(statearr_37016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___37017);

return statearr_37016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto___37017,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37026,opts){
var map__37030 = p__37026;
var map__37030__$1 = ((((!((map__37030 == null)))?((((map__37030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37030):map__37030);
var eval_body__$1 = cljs.core.get.call(null,map__37030__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37030__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24077__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24077__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24077__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37032){var e = e37032;
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
return (function (p1__37033_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37033_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37038){
var vec__37039 = p__37038;
var k = cljs.core.nth.call(null,vec__37039,(0),null);
var v = cljs.core.nth.call(null,vec__37039,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37040){
var vec__37041 = p__37040;
var k = cljs.core.nth.call(null,vec__37041,(0),null);
var v = cljs.core.nth.call(null,vec__37041,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37045,p__37046){
var map__37293 = p__37045;
var map__37293__$1 = ((((!((map__37293 == null)))?((((map__37293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37293):map__37293);
var opts = map__37293__$1;
var before_jsload = cljs.core.get.call(null,map__37293__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37293__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37293__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37294 = p__37046;
var map__37294__$1 = ((((!((map__37294 == null)))?((((map__37294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37294):map__37294);
var msg = map__37294__$1;
var files = cljs.core.get.call(null,map__37294__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37294__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37294__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto__,map__37293,map__37293__$1,opts,before_jsload,on_jsload,reload_dependents,map__37294,map__37294__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto__,map__37293,map__37293__$1,opts,before_jsload,on_jsload,reload_dependents,map__37294,map__37294__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37447){
var state_val_37448 = (state_37447[(1)]);
if((state_val_37448 === (7))){
var inst_37309 = (state_37447[(7)]);
var inst_37310 = (state_37447[(8)]);
var inst_37308 = (state_37447[(9)]);
var inst_37311 = (state_37447[(10)]);
var inst_37316 = cljs.core._nth.call(null,inst_37309,inst_37311);
var inst_37317 = figwheel.client.file_reloading.eval_body.call(null,inst_37316,opts);
var inst_37318 = (inst_37311 + (1));
var tmp37449 = inst_37309;
var tmp37450 = inst_37310;
var tmp37451 = inst_37308;
var inst_37308__$1 = tmp37451;
var inst_37309__$1 = tmp37449;
var inst_37310__$1 = tmp37450;
var inst_37311__$1 = inst_37318;
var state_37447__$1 = (function (){var statearr_37452 = state_37447;
(statearr_37452[(7)] = inst_37309__$1);

(statearr_37452[(11)] = inst_37317);

(statearr_37452[(8)] = inst_37310__$1);

(statearr_37452[(9)] = inst_37308__$1);

(statearr_37452[(10)] = inst_37311__$1);

return statearr_37452;
})();
var statearr_37453_37539 = state_37447__$1;
(statearr_37453_37539[(2)] = null);

(statearr_37453_37539[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (20))){
var inst_37351 = (state_37447[(12)]);
var inst_37359 = figwheel.client.file_reloading.sort_files.call(null,inst_37351);
var state_37447__$1 = state_37447;
var statearr_37454_37540 = state_37447__$1;
(statearr_37454_37540[(2)] = inst_37359);

(statearr_37454_37540[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (27))){
var state_37447__$1 = state_37447;
var statearr_37455_37541 = state_37447__$1;
(statearr_37455_37541[(2)] = null);

(statearr_37455_37541[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (1))){
var inst_37300 = (state_37447[(13)]);
var inst_37297 = before_jsload.call(null,files);
var inst_37298 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37299 = (function (){return ((function (inst_37300,inst_37297,inst_37298,state_val_37448,c__28220__auto__,map__37293,map__37293__$1,opts,before_jsload,on_jsload,reload_dependents,map__37294,map__37294__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37042_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37042_SHARP_);
});
;})(inst_37300,inst_37297,inst_37298,state_val_37448,c__28220__auto__,map__37293,map__37293__$1,opts,before_jsload,on_jsload,reload_dependents,map__37294,map__37294__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37300__$1 = cljs.core.filter.call(null,inst_37299,files);
var inst_37301 = cljs.core.not_empty.call(null,inst_37300__$1);
var state_37447__$1 = (function (){var statearr_37456 = state_37447;
(statearr_37456[(13)] = inst_37300__$1);

(statearr_37456[(14)] = inst_37298);

(statearr_37456[(15)] = inst_37297);

return statearr_37456;
})();
if(cljs.core.truth_(inst_37301)){
var statearr_37457_37542 = state_37447__$1;
(statearr_37457_37542[(1)] = (2));

} else {
var statearr_37458_37543 = state_37447__$1;
(statearr_37458_37543[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (24))){
var state_37447__$1 = state_37447;
var statearr_37459_37544 = state_37447__$1;
(statearr_37459_37544[(2)] = null);

(statearr_37459_37544[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (39))){
var inst_37401 = (state_37447[(16)]);
var state_37447__$1 = state_37447;
var statearr_37460_37545 = state_37447__$1;
(statearr_37460_37545[(2)] = inst_37401);

(statearr_37460_37545[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (46))){
var inst_37442 = (state_37447[(2)]);
var state_37447__$1 = state_37447;
var statearr_37461_37546 = state_37447__$1;
(statearr_37461_37546[(2)] = inst_37442);

(statearr_37461_37546[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (4))){
var inst_37345 = (state_37447[(2)]);
var inst_37346 = cljs.core.List.EMPTY;
var inst_37347 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37346);
var inst_37348 = (function (){return ((function (inst_37345,inst_37346,inst_37347,state_val_37448,c__28220__auto__,map__37293,map__37293__$1,opts,before_jsload,on_jsload,reload_dependents,map__37294,map__37294__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37043_SHARP_){
var and__24077__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37043_SHARP_);
if(cljs.core.truth_(and__24077__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37043_SHARP_));
} else {
return and__24077__auto__;
}
});
;})(inst_37345,inst_37346,inst_37347,state_val_37448,c__28220__auto__,map__37293,map__37293__$1,opts,before_jsload,on_jsload,reload_dependents,map__37294,map__37294__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37349 = cljs.core.filter.call(null,inst_37348,files);
var inst_37350 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37351 = cljs.core.concat.call(null,inst_37349,inst_37350);
var state_37447__$1 = (function (){var statearr_37462 = state_37447;
(statearr_37462[(17)] = inst_37345);

(statearr_37462[(12)] = inst_37351);

(statearr_37462[(18)] = inst_37347);

return statearr_37462;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37463_37547 = state_37447__$1;
(statearr_37463_37547[(1)] = (16));

} else {
var statearr_37464_37548 = state_37447__$1;
(statearr_37464_37548[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (15))){
var inst_37335 = (state_37447[(2)]);
var state_37447__$1 = state_37447;
var statearr_37465_37549 = state_37447__$1;
(statearr_37465_37549[(2)] = inst_37335);

(statearr_37465_37549[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (21))){
var inst_37361 = (state_37447[(19)]);
var inst_37361__$1 = (state_37447[(2)]);
var inst_37362 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37361__$1);
var state_37447__$1 = (function (){var statearr_37466 = state_37447;
(statearr_37466[(19)] = inst_37361__$1);

return statearr_37466;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37447__$1,(22),inst_37362);
} else {
if((state_val_37448 === (31))){
var inst_37445 = (state_37447[(2)]);
var state_37447__$1 = state_37447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37447__$1,inst_37445);
} else {
if((state_val_37448 === (32))){
var inst_37401 = (state_37447[(16)]);
var inst_37406 = inst_37401.cljs$lang$protocol_mask$partition0$;
var inst_37407 = (inst_37406 & (64));
var inst_37408 = inst_37401.cljs$core$ISeq$;
var inst_37409 = (inst_37407) || (inst_37408);
var state_37447__$1 = state_37447;
if(cljs.core.truth_(inst_37409)){
var statearr_37467_37550 = state_37447__$1;
(statearr_37467_37550[(1)] = (35));

} else {
var statearr_37468_37551 = state_37447__$1;
(statearr_37468_37551[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (40))){
var inst_37422 = (state_37447[(20)]);
var inst_37421 = (state_37447[(2)]);
var inst_37422__$1 = cljs.core.get.call(null,inst_37421,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37423 = cljs.core.get.call(null,inst_37421,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37424 = cljs.core.not_empty.call(null,inst_37422__$1);
var state_37447__$1 = (function (){var statearr_37469 = state_37447;
(statearr_37469[(20)] = inst_37422__$1);

(statearr_37469[(21)] = inst_37423);

return statearr_37469;
})();
if(cljs.core.truth_(inst_37424)){
var statearr_37470_37552 = state_37447__$1;
(statearr_37470_37552[(1)] = (41));

} else {
var statearr_37471_37553 = state_37447__$1;
(statearr_37471_37553[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (33))){
var state_37447__$1 = state_37447;
var statearr_37472_37554 = state_37447__$1;
(statearr_37472_37554[(2)] = false);

(statearr_37472_37554[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (13))){
var inst_37321 = (state_37447[(22)]);
var inst_37325 = cljs.core.chunk_first.call(null,inst_37321);
var inst_37326 = cljs.core.chunk_rest.call(null,inst_37321);
var inst_37327 = cljs.core.count.call(null,inst_37325);
var inst_37308 = inst_37326;
var inst_37309 = inst_37325;
var inst_37310 = inst_37327;
var inst_37311 = (0);
var state_37447__$1 = (function (){var statearr_37473 = state_37447;
(statearr_37473[(7)] = inst_37309);

(statearr_37473[(8)] = inst_37310);

(statearr_37473[(9)] = inst_37308);

(statearr_37473[(10)] = inst_37311);

return statearr_37473;
})();
var statearr_37474_37555 = state_37447__$1;
(statearr_37474_37555[(2)] = null);

(statearr_37474_37555[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (22))){
var inst_37364 = (state_37447[(23)]);
var inst_37365 = (state_37447[(24)]);
var inst_37361 = (state_37447[(19)]);
var inst_37369 = (state_37447[(25)]);
var inst_37364__$1 = (state_37447[(2)]);
var inst_37365__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37364__$1);
var inst_37366 = (function (){var all_files = inst_37361;
var res_SINGLEQUOTE_ = inst_37364__$1;
var res = inst_37365__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37364,inst_37365,inst_37361,inst_37369,inst_37364__$1,inst_37365__$1,state_val_37448,c__28220__auto__,map__37293,map__37293__$1,opts,before_jsload,on_jsload,reload_dependents,map__37294,map__37294__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37044_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37044_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37364,inst_37365,inst_37361,inst_37369,inst_37364__$1,inst_37365__$1,state_val_37448,c__28220__auto__,map__37293,map__37293__$1,opts,before_jsload,on_jsload,reload_dependents,map__37294,map__37294__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37367 = cljs.core.filter.call(null,inst_37366,inst_37364__$1);
var inst_37368 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37369__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37368);
var inst_37370 = cljs.core.not_empty.call(null,inst_37369__$1);
var state_37447__$1 = (function (){var statearr_37475 = state_37447;
(statearr_37475[(23)] = inst_37364__$1);

(statearr_37475[(26)] = inst_37367);

(statearr_37475[(24)] = inst_37365__$1);

(statearr_37475[(25)] = inst_37369__$1);

return statearr_37475;
})();
if(cljs.core.truth_(inst_37370)){
var statearr_37476_37556 = state_37447__$1;
(statearr_37476_37556[(1)] = (23));

} else {
var statearr_37477_37557 = state_37447__$1;
(statearr_37477_37557[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (36))){
var state_37447__$1 = state_37447;
var statearr_37478_37558 = state_37447__$1;
(statearr_37478_37558[(2)] = false);

(statearr_37478_37558[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (41))){
var inst_37422 = (state_37447[(20)]);
var inst_37426 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37427 = cljs.core.map.call(null,inst_37426,inst_37422);
var inst_37428 = cljs.core.pr_str.call(null,inst_37427);
var inst_37429 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_37428)].join('');
var inst_37430 = figwheel.client.utils.log.call(null,inst_37429);
var state_37447__$1 = state_37447;
var statearr_37479_37559 = state_37447__$1;
(statearr_37479_37559[(2)] = inst_37430);

(statearr_37479_37559[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (43))){
var inst_37423 = (state_37447[(21)]);
var inst_37433 = (state_37447[(2)]);
var inst_37434 = cljs.core.not_empty.call(null,inst_37423);
var state_37447__$1 = (function (){var statearr_37480 = state_37447;
(statearr_37480[(27)] = inst_37433);

return statearr_37480;
})();
if(cljs.core.truth_(inst_37434)){
var statearr_37481_37560 = state_37447__$1;
(statearr_37481_37560[(1)] = (44));

} else {
var statearr_37482_37561 = state_37447__$1;
(statearr_37482_37561[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (29))){
var inst_37364 = (state_37447[(23)]);
var inst_37367 = (state_37447[(26)]);
var inst_37401 = (state_37447[(16)]);
var inst_37365 = (state_37447[(24)]);
var inst_37361 = (state_37447[(19)]);
var inst_37369 = (state_37447[(25)]);
var inst_37397 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37400 = (function (){var all_files = inst_37361;
var res_SINGLEQUOTE_ = inst_37364;
var res = inst_37365;
var files_not_loaded = inst_37367;
var dependencies_that_loaded = inst_37369;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37364,inst_37367,inst_37401,inst_37365,inst_37361,inst_37369,inst_37397,state_val_37448,c__28220__auto__,map__37293,map__37293__$1,opts,before_jsload,on_jsload,reload_dependents,map__37294,map__37294__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37399){
var map__37483 = p__37399;
var map__37483__$1 = ((((!((map__37483 == null)))?((((map__37483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37483):map__37483);
var namespace = cljs.core.get.call(null,map__37483__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37364,inst_37367,inst_37401,inst_37365,inst_37361,inst_37369,inst_37397,state_val_37448,c__28220__auto__,map__37293,map__37293__$1,opts,before_jsload,on_jsload,reload_dependents,map__37294,map__37294__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37401__$1 = cljs.core.group_by.call(null,inst_37400,inst_37367);
var inst_37403 = (inst_37401__$1 == null);
var inst_37404 = cljs.core.not.call(null,inst_37403);
var state_37447__$1 = (function (){var statearr_37485 = state_37447;
(statearr_37485[(28)] = inst_37397);

(statearr_37485[(16)] = inst_37401__$1);

return statearr_37485;
})();
if(inst_37404){
var statearr_37486_37562 = state_37447__$1;
(statearr_37486_37562[(1)] = (32));

} else {
var statearr_37487_37563 = state_37447__$1;
(statearr_37487_37563[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (44))){
var inst_37423 = (state_37447[(21)]);
var inst_37436 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37423);
var inst_37437 = cljs.core.pr_str.call(null,inst_37436);
var inst_37438 = [cljs.core.str("not required: "),cljs.core.str(inst_37437)].join('');
var inst_37439 = figwheel.client.utils.log.call(null,inst_37438);
var state_37447__$1 = state_37447;
var statearr_37488_37564 = state_37447__$1;
(statearr_37488_37564[(2)] = inst_37439);

(statearr_37488_37564[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (6))){
var inst_37342 = (state_37447[(2)]);
var state_37447__$1 = state_37447;
var statearr_37489_37565 = state_37447__$1;
(statearr_37489_37565[(2)] = inst_37342);

(statearr_37489_37565[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (28))){
var inst_37367 = (state_37447[(26)]);
var inst_37394 = (state_37447[(2)]);
var inst_37395 = cljs.core.not_empty.call(null,inst_37367);
var state_37447__$1 = (function (){var statearr_37490 = state_37447;
(statearr_37490[(29)] = inst_37394);

return statearr_37490;
})();
if(cljs.core.truth_(inst_37395)){
var statearr_37491_37566 = state_37447__$1;
(statearr_37491_37566[(1)] = (29));

} else {
var statearr_37492_37567 = state_37447__$1;
(statearr_37492_37567[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (25))){
var inst_37365 = (state_37447[(24)]);
var inst_37381 = (state_37447[(2)]);
var inst_37382 = cljs.core.not_empty.call(null,inst_37365);
var state_37447__$1 = (function (){var statearr_37493 = state_37447;
(statearr_37493[(30)] = inst_37381);

return statearr_37493;
})();
if(cljs.core.truth_(inst_37382)){
var statearr_37494_37568 = state_37447__$1;
(statearr_37494_37568[(1)] = (26));

} else {
var statearr_37495_37569 = state_37447__$1;
(statearr_37495_37569[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (34))){
var inst_37416 = (state_37447[(2)]);
var state_37447__$1 = state_37447;
if(cljs.core.truth_(inst_37416)){
var statearr_37496_37570 = state_37447__$1;
(statearr_37496_37570[(1)] = (38));

} else {
var statearr_37497_37571 = state_37447__$1;
(statearr_37497_37571[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (17))){
var state_37447__$1 = state_37447;
var statearr_37498_37572 = state_37447__$1;
(statearr_37498_37572[(2)] = recompile_dependents);

(statearr_37498_37572[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (3))){
var state_37447__$1 = state_37447;
var statearr_37499_37573 = state_37447__$1;
(statearr_37499_37573[(2)] = null);

(statearr_37499_37573[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (12))){
var inst_37338 = (state_37447[(2)]);
var state_37447__$1 = state_37447;
var statearr_37500_37574 = state_37447__$1;
(statearr_37500_37574[(2)] = inst_37338);

(statearr_37500_37574[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (2))){
var inst_37300 = (state_37447[(13)]);
var inst_37307 = cljs.core.seq.call(null,inst_37300);
var inst_37308 = inst_37307;
var inst_37309 = null;
var inst_37310 = (0);
var inst_37311 = (0);
var state_37447__$1 = (function (){var statearr_37501 = state_37447;
(statearr_37501[(7)] = inst_37309);

(statearr_37501[(8)] = inst_37310);

(statearr_37501[(9)] = inst_37308);

(statearr_37501[(10)] = inst_37311);

return statearr_37501;
})();
var statearr_37502_37575 = state_37447__$1;
(statearr_37502_37575[(2)] = null);

(statearr_37502_37575[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (23))){
var inst_37364 = (state_37447[(23)]);
var inst_37367 = (state_37447[(26)]);
var inst_37365 = (state_37447[(24)]);
var inst_37361 = (state_37447[(19)]);
var inst_37369 = (state_37447[(25)]);
var inst_37372 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37374 = (function (){var all_files = inst_37361;
var res_SINGLEQUOTE_ = inst_37364;
var res = inst_37365;
var files_not_loaded = inst_37367;
var dependencies_that_loaded = inst_37369;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37364,inst_37367,inst_37365,inst_37361,inst_37369,inst_37372,state_val_37448,c__28220__auto__,map__37293,map__37293__$1,opts,before_jsload,on_jsload,reload_dependents,map__37294,map__37294__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37373){
var map__37503 = p__37373;
var map__37503__$1 = ((((!((map__37503 == null)))?((((map__37503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37503):map__37503);
var request_url = cljs.core.get.call(null,map__37503__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37364,inst_37367,inst_37365,inst_37361,inst_37369,inst_37372,state_val_37448,c__28220__auto__,map__37293,map__37293__$1,opts,before_jsload,on_jsload,reload_dependents,map__37294,map__37294__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37375 = cljs.core.reverse.call(null,inst_37369);
var inst_37376 = cljs.core.map.call(null,inst_37374,inst_37375);
var inst_37377 = cljs.core.pr_str.call(null,inst_37376);
var inst_37378 = figwheel.client.utils.log.call(null,inst_37377);
var state_37447__$1 = (function (){var statearr_37505 = state_37447;
(statearr_37505[(31)] = inst_37372);

return statearr_37505;
})();
var statearr_37506_37576 = state_37447__$1;
(statearr_37506_37576[(2)] = inst_37378);

(statearr_37506_37576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (35))){
var state_37447__$1 = state_37447;
var statearr_37507_37577 = state_37447__$1;
(statearr_37507_37577[(2)] = true);

(statearr_37507_37577[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (19))){
var inst_37351 = (state_37447[(12)]);
var inst_37357 = figwheel.client.file_reloading.expand_files.call(null,inst_37351);
var state_37447__$1 = state_37447;
var statearr_37508_37578 = state_37447__$1;
(statearr_37508_37578[(2)] = inst_37357);

(statearr_37508_37578[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (11))){
var state_37447__$1 = state_37447;
var statearr_37509_37579 = state_37447__$1;
(statearr_37509_37579[(2)] = null);

(statearr_37509_37579[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (9))){
var inst_37340 = (state_37447[(2)]);
var state_37447__$1 = state_37447;
var statearr_37510_37580 = state_37447__$1;
(statearr_37510_37580[(2)] = inst_37340);

(statearr_37510_37580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (5))){
var inst_37310 = (state_37447[(8)]);
var inst_37311 = (state_37447[(10)]);
var inst_37313 = (inst_37311 < inst_37310);
var inst_37314 = inst_37313;
var state_37447__$1 = state_37447;
if(cljs.core.truth_(inst_37314)){
var statearr_37511_37581 = state_37447__$1;
(statearr_37511_37581[(1)] = (7));

} else {
var statearr_37512_37582 = state_37447__$1;
(statearr_37512_37582[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (14))){
var inst_37321 = (state_37447[(22)]);
var inst_37330 = cljs.core.first.call(null,inst_37321);
var inst_37331 = figwheel.client.file_reloading.eval_body.call(null,inst_37330,opts);
var inst_37332 = cljs.core.next.call(null,inst_37321);
var inst_37308 = inst_37332;
var inst_37309 = null;
var inst_37310 = (0);
var inst_37311 = (0);
var state_37447__$1 = (function (){var statearr_37513 = state_37447;
(statearr_37513[(7)] = inst_37309);

(statearr_37513[(32)] = inst_37331);

(statearr_37513[(8)] = inst_37310);

(statearr_37513[(9)] = inst_37308);

(statearr_37513[(10)] = inst_37311);

return statearr_37513;
})();
var statearr_37514_37583 = state_37447__$1;
(statearr_37514_37583[(2)] = null);

(statearr_37514_37583[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (45))){
var state_37447__$1 = state_37447;
var statearr_37515_37584 = state_37447__$1;
(statearr_37515_37584[(2)] = null);

(statearr_37515_37584[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (26))){
var inst_37364 = (state_37447[(23)]);
var inst_37367 = (state_37447[(26)]);
var inst_37365 = (state_37447[(24)]);
var inst_37361 = (state_37447[(19)]);
var inst_37369 = (state_37447[(25)]);
var inst_37384 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37386 = (function (){var all_files = inst_37361;
var res_SINGLEQUOTE_ = inst_37364;
var res = inst_37365;
var files_not_loaded = inst_37367;
var dependencies_that_loaded = inst_37369;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37364,inst_37367,inst_37365,inst_37361,inst_37369,inst_37384,state_val_37448,c__28220__auto__,map__37293,map__37293__$1,opts,before_jsload,on_jsload,reload_dependents,map__37294,map__37294__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37385){
var map__37516 = p__37385;
var map__37516__$1 = ((((!((map__37516 == null)))?((((map__37516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37516):map__37516);
var namespace = cljs.core.get.call(null,map__37516__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37516__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37364,inst_37367,inst_37365,inst_37361,inst_37369,inst_37384,state_val_37448,c__28220__auto__,map__37293,map__37293__$1,opts,before_jsload,on_jsload,reload_dependents,map__37294,map__37294__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37387 = cljs.core.map.call(null,inst_37386,inst_37365);
var inst_37388 = cljs.core.pr_str.call(null,inst_37387);
var inst_37389 = figwheel.client.utils.log.call(null,inst_37388);
var inst_37390 = (function (){var all_files = inst_37361;
var res_SINGLEQUOTE_ = inst_37364;
var res = inst_37365;
var files_not_loaded = inst_37367;
var dependencies_that_loaded = inst_37369;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37364,inst_37367,inst_37365,inst_37361,inst_37369,inst_37384,inst_37386,inst_37387,inst_37388,inst_37389,state_val_37448,c__28220__auto__,map__37293,map__37293__$1,opts,before_jsload,on_jsload,reload_dependents,map__37294,map__37294__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37364,inst_37367,inst_37365,inst_37361,inst_37369,inst_37384,inst_37386,inst_37387,inst_37388,inst_37389,state_val_37448,c__28220__auto__,map__37293,map__37293__$1,opts,before_jsload,on_jsload,reload_dependents,map__37294,map__37294__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37391 = setTimeout(inst_37390,(10));
var state_37447__$1 = (function (){var statearr_37518 = state_37447;
(statearr_37518[(33)] = inst_37389);

(statearr_37518[(34)] = inst_37384);

return statearr_37518;
})();
var statearr_37519_37585 = state_37447__$1;
(statearr_37519_37585[(2)] = inst_37391);

(statearr_37519_37585[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (16))){
var state_37447__$1 = state_37447;
var statearr_37520_37586 = state_37447__$1;
(statearr_37520_37586[(2)] = reload_dependents);

(statearr_37520_37586[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (38))){
var inst_37401 = (state_37447[(16)]);
var inst_37418 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37401);
var state_37447__$1 = state_37447;
var statearr_37521_37587 = state_37447__$1;
(statearr_37521_37587[(2)] = inst_37418);

(statearr_37521_37587[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (30))){
var state_37447__$1 = state_37447;
var statearr_37522_37588 = state_37447__$1;
(statearr_37522_37588[(2)] = null);

(statearr_37522_37588[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (10))){
var inst_37321 = (state_37447[(22)]);
var inst_37323 = cljs.core.chunked_seq_QMARK_.call(null,inst_37321);
var state_37447__$1 = state_37447;
if(inst_37323){
var statearr_37523_37589 = state_37447__$1;
(statearr_37523_37589[(1)] = (13));

} else {
var statearr_37524_37590 = state_37447__$1;
(statearr_37524_37590[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (18))){
var inst_37355 = (state_37447[(2)]);
var state_37447__$1 = state_37447;
if(cljs.core.truth_(inst_37355)){
var statearr_37525_37591 = state_37447__$1;
(statearr_37525_37591[(1)] = (19));

} else {
var statearr_37526_37592 = state_37447__$1;
(statearr_37526_37592[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (42))){
var state_37447__$1 = state_37447;
var statearr_37527_37593 = state_37447__$1;
(statearr_37527_37593[(2)] = null);

(statearr_37527_37593[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (37))){
var inst_37413 = (state_37447[(2)]);
var state_37447__$1 = state_37447;
var statearr_37528_37594 = state_37447__$1;
(statearr_37528_37594[(2)] = inst_37413);

(statearr_37528_37594[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37448 === (8))){
var inst_37321 = (state_37447[(22)]);
var inst_37308 = (state_37447[(9)]);
var inst_37321__$1 = cljs.core.seq.call(null,inst_37308);
var state_37447__$1 = (function (){var statearr_37529 = state_37447;
(statearr_37529[(22)] = inst_37321__$1);

return statearr_37529;
})();
if(inst_37321__$1){
var statearr_37530_37595 = state_37447__$1;
(statearr_37530_37595[(1)] = (10));

} else {
var statearr_37531_37596 = state_37447__$1;
(statearr_37531_37596[(1)] = (11));

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
});})(c__28220__auto__,map__37293,map__37293__$1,opts,before_jsload,on_jsload,reload_dependents,map__37294,map__37294__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28108__auto__,c__28220__auto__,map__37293,map__37293__$1,opts,before_jsload,on_jsload,reload_dependents,map__37294,map__37294__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28109__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28109__auto____0 = (function (){
var statearr_37535 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37535[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28109__auto__);

(statearr_37535[(1)] = (1));

return statearr_37535;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28109__auto____1 = (function (state_37447){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_37447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e37536){if((e37536 instanceof Object)){
var ex__28112__auto__ = e37536;
var statearr_37537_37597 = state_37447;
(statearr_37537_37597[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37598 = state_37447;
state_37447 = G__37598;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28109__auto__ = function(state_37447){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28109__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28109__auto____1.call(this,state_37447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28109__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28109__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto__,map__37293,map__37293__$1,opts,before_jsload,on_jsload,reload_dependents,map__37294,map__37294__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28222__auto__ = (function (){var statearr_37538 = f__28221__auto__.call(null);
(statearr_37538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto__);

return statearr_37538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto__,map__37293,map__37293__$1,opts,before_jsload,on_jsload,reload_dependents,map__37294,map__37294__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28220__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37601,link){
var map__37604 = p__37601;
var map__37604__$1 = ((((!((map__37604 == null)))?((((map__37604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37604):map__37604);
var file = cljs.core.get.call(null,map__37604__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__37604,map__37604__$1,file){
return (function (p1__37599_SHARP_,p2__37600_SHARP_){
if(cljs.core._EQ_.call(null,p1__37599_SHARP_,p2__37600_SHARP_)){
return p1__37599_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__37604,map__37604__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37610){
var map__37611 = p__37610;
var map__37611__$1 = ((((!((map__37611 == null)))?((((map__37611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37611):map__37611);
var match_length = cljs.core.get.call(null,map__37611__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37611__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37606_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37606_SHARP_);
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
var args37613 = [];
var len__25159__auto___37616 = arguments.length;
var i__25160__auto___37617 = (0);
while(true){
if((i__25160__auto___37617 < len__25159__auto___37616)){
args37613.push((arguments[i__25160__auto___37617]));

var G__37618 = (i__25160__auto___37617 + (1));
i__25160__auto___37617 = G__37618;
continue;
} else {
}
break;
}

var G__37615 = args37613.length;
switch (G__37615) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37613.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37620_SHARP_,p2__37621_SHARP_){
return cljs.core.assoc.call(null,p1__37620_SHARP_,cljs.core.get.call(null,p2__37621_SHARP_,key),p2__37621_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__37622){
var map__37625 = p__37622;
var map__37625__$1 = ((((!((map__37625 == null)))?((((map__37625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37625):map__37625);
var f_data = map__37625__$1;
var file = cljs.core.get.call(null,map__37625__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37627,files_msg){
var map__37634 = p__37627;
var map__37634__$1 = ((((!((map__37634 == null)))?((((map__37634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37634):map__37634);
var opts = map__37634__$1;
var on_cssload = cljs.core.get.call(null,map__37634__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__37636_37640 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__37637_37641 = null;
var count__37638_37642 = (0);
var i__37639_37643 = (0);
while(true){
if((i__37639_37643 < count__37638_37642)){
var f_37644 = cljs.core._nth.call(null,chunk__37637_37641,i__37639_37643);
figwheel.client.file_reloading.reload_css_file.call(null,f_37644);

var G__37645 = seq__37636_37640;
var G__37646 = chunk__37637_37641;
var G__37647 = count__37638_37642;
var G__37648 = (i__37639_37643 + (1));
seq__37636_37640 = G__37645;
chunk__37637_37641 = G__37646;
count__37638_37642 = G__37647;
i__37639_37643 = G__37648;
continue;
} else {
var temp__4425__auto___37649 = cljs.core.seq.call(null,seq__37636_37640);
if(temp__4425__auto___37649){
var seq__37636_37650__$1 = temp__4425__auto___37649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37636_37650__$1)){
var c__24900__auto___37651 = cljs.core.chunk_first.call(null,seq__37636_37650__$1);
var G__37652 = cljs.core.chunk_rest.call(null,seq__37636_37650__$1);
var G__37653 = c__24900__auto___37651;
var G__37654 = cljs.core.count.call(null,c__24900__auto___37651);
var G__37655 = (0);
seq__37636_37640 = G__37652;
chunk__37637_37641 = G__37653;
count__37638_37642 = G__37654;
i__37639_37643 = G__37655;
continue;
} else {
var f_37656 = cljs.core.first.call(null,seq__37636_37650__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_37656);

var G__37657 = cljs.core.next.call(null,seq__37636_37650__$1);
var G__37658 = null;
var G__37659 = (0);
var G__37660 = (0);
seq__37636_37640 = G__37657;
chunk__37637_37641 = G__37658;
count__37638_37642 = G__37659;
i__37639_37643 = G__37660;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__37634,map__37634__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__37634,map__37634__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map