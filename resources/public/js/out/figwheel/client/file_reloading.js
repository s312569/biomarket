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
var or__25880__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25880__auto__){
return or__25880__auto__;
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
var or__25880__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38515_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38515_SHARP_));
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
var seq__38520 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38521 = null;
var count__38522 = (0);
var i__38523 = (0);
while(true){
if((i__38523 < count__38522)){
var n = cljs.core._nth.call(null,chunk__38521,i__38523);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38524 = seq__38520;
var G__38525 = chunk__38521;
var G__38526 = count__38522;
var G__38527 = (i__38523 + (1));
seq__38520 = G__38524;
chunk__38521 = G__38525;
count__38522 = G__38526;
i__38523 = G__38527;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38520);
if(temp__4425__auto__){
var seq__38520__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38520__$1)){
var c__26691__auto__ = cljs.core.chunk_first.call(null,seq__38520__$1);
var G__38528 = cljs.core.chunk_rest.call(null,seq__38520__$1);
var G__38529 = c__26691__auto__;
var G__38530 = cljs.core.count.call(null,c__26691__auto__);
var G__38531 = (0);
seq__38520 = G__38528;
chunk__38521 = G__38529;
count__38522 = G__38530;
i__38523 = G__38531;
continue;
} else {
var n = cljs.core.first.call(null,seq__38520__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38532 = cljs.core.next.call(null,seq__38520__$1);
var G__38533 = null;
var G__38534 = (0);
var G__38535 = (0);
seq__38520 = G__38532;
chunk__38521 = G__38533;
count__38522 = G__38534;
i__38523 = G__38535;
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

var seq__38574_38581 = cljs.core.seq.call(null,deps);
var chunk__38575_38582 = null;
var count__38576_38583 = (0);
var i__38577_38584 = (0);
while(true){
if((i__38577_38584 < count__38576_38583)){
var dep_38585 = cljs.core._nth.call(null,chunk__38575_38582,i__38577_38584);
topo_sort_helper_STAR_.call(null,dep_38585,(depth + (1)),state);

var G__38586 = seq__38574_38581;
var G__38587 = chunk__38575_38582;
var G__38588 = count__38576_38583;
var G__38589 = (i__38577_38584 + (1));
seq__38574_38581 = G__38586;
chunk__38575_38582 = G__38587;
count__38576_38583 = G__38588;
i__38577_38584 = G__38589;
continue;
} else {
var temp__4425__auto___38590 = cljs.core.seq.call(null,seq__38574_38581);
if(temp__4425__auto___38590){
var seq__38574_38591__$1 = temp__4425__auto___38590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38574_38591__$1)){
var c__26691__auto___38592 = cljs.core.chunk_first.call(null,seq__38574_38591__$1);
var G__38593 = cljs.core.chunk_rest.call(null,seq__38574_38591__$1);
var G__38594 = c__26691__auto___38592;
var G__38595 = cljs.core.count.call(null,c__26691__auto___38592);
var G__38596 = (0);
seq__38574_38581 = G__38593;
chunk__38575_38582 = G__38594;
count__38576_38583 = G__38595;
i__38577_38584 = G__38596;
continue;
} else {
var dep_38597 = cljs.core.first.call(null,seq__38574_38591__$1);
topo_sort_helper_STAR_.call(null,dep_38597,(depth + (1)),state);

var G__38598 = cljs.core.next.call(null,seq__38574_38591__$1);
var G__38599 = null;
var G__38600 = (0);
var G__38601 = (0);
seq__38574_38581 = G__38598;
chunk__38575_38582 = G__38599;
count__38576_38583 = G__38600;
i__38577_38584 = G__38601;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38578){
var vec__38580 = p__38578;
var x = cljs.core.nth.call(null,vec__38580,(0),null);
var xs = cljs.core.nthnext.call(null,vec__38580,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38580,x,xs,get_deps__$1){
return (function (p1__38536_SHARP_){
return clojure.set.difference.call(null,p1__38536_SHARP_,x);
});})(vec__38580,x,xs,get_deps__$1))
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
var seq__38614 = cljs.core.seq.call(null,provides);
var chunk__38615 = null;
var count__38616 = (0);
var i__38617 = (0);
while(true){
if((i__38617 < count__38616)){
var prov = cljs.core._nth.call(null,chunk__38615,i__38617);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38618_38626 = cljs.core.seq.call(null,requires);
var chunk__38619_38627 = null;
var count__38620_38628 = (0);
var i__38621_38629 = (0);
while(true){
if((i__38621_38629 < count__38620_38628)){
var req_38630 = cljs.core._nth.call(null,chunk__38619_38627,i__38621_38629);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38630,prov);

var G__38631 = seq__38618_38626;
var G__38632 = chunk__38619_38627;
var G__38633 = count__38620_38628;
var G__38634 = (i__38621_38629 + (1));
seq__38618_38626 = G__38631;
chunk__38619_38627 = G__38632;
count__38620_38628 = G__38633;
i__38621_38629 = G__38634;
continue;
} else {
var temp__4425__auto___38635 = cljs.core.seq.call(null,seq__38618_38626);
if(temp__4425__auto___38635){
var seq__38618_38636__$1 = temp__4425__auto___38635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38618_38636__$1)){
var c__26691__auto___38637 = cljs.core.chunk_first.call(null,seq__38618_38636__$1);
var G__38638 = cljs.core.chunk_rest.call(null,seq__38618_38636__$1);
var G__38639 = c__26691__auto___38637;
var G__38640 = cljs.core.count.call(null,c__26691__auto___38637);
var G__38641 = (0);
seq__38618_38626 = G__38638;
chunk__38619_38627 = G__38639;
count__38620_38628 = G__38640;
i__38621_38629 = G__38641;
continue;
} else {
var req_38642 = cljs.core.first.call(null,seq__38618_38636__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38642,prov);

var G__38643 = cljs.core.next.call(null,seq__38618_38636__$1);
var G__38644 = null;
var G__38645 = (0);
var G__38646 = (0);
seq__38618_38626 = G__38643;
chunk__38619_38627 = G__38644;
count__38620_38628 = G__38645;
i__38621_38629 = G__38646;
continue;
}
} else {
}
}
break;
}

var G__38647 = seq__38614;
var G__38648 = chunk__38615;
var G__38649 = count__38616;
var G__38650 = (i__38617 + (1));
seq__38614 = G__38647;
chunk__38615 = G__38648;
count__38616 = G__38649;
i__38617 = G__38650;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38614);
if(temp__4425__auto__){
var seq__38614__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38614__$1)){
var c__26691__auto__ = cljs.core.chunk_first.call(null,seq__38614__$1);
var G__38651 = cljs.core.chunk_rest.call(null,seq__38614__$1);
var G__38652 = c__26691__auto__;
var G__38653 = cljs.core.count.call(null,c__26691__auto__);
var G__38654 = (0);
seq__38614 = G__38651;
chunk__38615 = G__38652;
count__38616 = G__38653;
i__38617 = G__38654;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38614__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38622_38655 = cljs.core.seq.call(null,requires);
var chunk__38623_38656 = null;
var count__38624_38657 = (0);
var i__38625_38658 = (0);
while(true){
if((i__38625_38658 < count__38624_38657)){
var req_38659 = cljs.core._nth.call(null,chunk__38623_38656,i__38625_38658);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38659,prov);

var G__38660 = seq__38622_38655;
var G__38661 = chunk__38623_38656;
var G__38662 = count__38624_38657;
var G__38663 = (i__38625_38658 + (1));
seq__38622_38655 = G__38660;
chunk__38623_38656 = G__38661;
count__38624_38657 = G__38662;
i__38625_38658 = G__38663;
continue;
} else {
var temp__4425__auto___38664__$1 = cljs.core.seq.call(null,seq__38622_38655);
if(temp__4425__auto___38664__$1){
var seq__38622_38665__$1 = temp__4425__auto___38664__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38622_38665__$1)){
var c__26691__auto___38666 = cljs.core.chunk_first.call(null,seq__38622_38665__$1);
var G__38667 = cljs.core.chunk_rest.call(null,seq__38622_38665__$1);
var G__38668 = c__26691__auto___38666;
var G__38669 = cljs.core.count.call(null,c__26691__auto___38666);
var G__38670 = (0);
seq__38622_38655 = G__38667;
chunk__38623_38656 = G__38668;
count__38624_38657 = G__38669;
i__38625_38658 = G__38670;
continue;
} else {
var req_38671 = cljs.core.first.call(null,seq__38622_38665__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38671,prov);

var G__38672 = cljs.core.next.call(null,seq__38622_38665__$1);
var G__38673 = null;
var G__38674 = (0);
var G__38675 = (0);
seq__38622_38655 = G__38672;
chunk__38623_38656 = G__38673;
count__38624_38657 = G__38674;
i__38625_38658 = G__38675;
continue;
}
} else {
}
}
break;
}

var G__38676 = cljs.core.next.call(null,seq__38614__$1);
var G__38677 = null;
var G__38678 = (0);
var G__38679 = (0);
seq__38614 = G__38676;
chunk__38615 = G__38677;
count__38616 = G__38678;
i__38617 = G__38679;
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
var seq__38684_38688 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38685_38689 = null;
var count__38686_38690 = (0);
var i__38687_38691 = (0);
while(true){
if((i__38687_38691 < count__38686_38690)){
var ns_38692 = cljs.core._nth.call(null,chunk__38685_38689,i__38687_38691);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38692);

var G__38693 = seq__38684_38688;
var G__38694 = chunk__38685_38689;
var G__38695 = count__38686_38690;
var G__38696 = (i__38687_38691 + (1));
seq__38684_38688 = G__38693;
chunk__38685_38689 = G__38694;
count__38686_38690 = G__38695;
i__38687_38691 = G__38696;
continue;
} else {
var temp__4425__auto___38697 = cljs.core.seq.call(null,seq__38684_38688);
if(temp__4425__auto___38697){
var seq__38684_38698__$1 = temp__4425__auto___38697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38684_38698__$1)){
var c__26691__auto___38699 = cljs.core.chunk_first.call(null,seq__38684_38698__$1);
var G__38700 = cljs.core.chunk_rest.call(null,seq__38684_38698__$1);
var G__38701 = c__26691__auto___38699;
var G__38702 = cljs.core.count.call(null,c__26691__auto___38699);
var G__38703 = (0);
seq__38684_38688 = G__38700;
chunk__38685_38689 = G__38701;
count__38686_38690 = G__38702;
i__38687_38691 = G__38703;
continue;
} else {
var ns_38704 = cljs.core.first.call(null,seq__38684_38698__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38704);

var G__38705 = cljs.core.next.call(null,seq__38684_38698__$1);
var G__38706 = null;
var G__38707 = (0);
var G__38708 = (0);
seq__38684_38688 = G__38705;
chunk__38685_38689 = G__38706;
count__38686_38690 = G__38707;
i__38687_38691 = G__38708;
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
goog.require_figwheel_backup_ = (function (){var or__25880__auto__ = goog.require__;
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
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
var G__38709__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38709 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38710__i = 0, G__38710__a = new Array(arguments.length -  0);
while (G__38710__i < G__38710__a.length) {G__38710__a[G__38710__i] = arguments[G__38710__i + 0]; ++G__38710__i;}
  args = new cljs.core.IndexedSeq(G__38710__a,0);
} 
return G__38709__delegate.call(this,args);};
G__38709.cljs$lang$maxFixedArity = 0;
G__38709.cljs$lang$applyTo = (function (arglist__38711){
var args = cljs.core.seq(arglist__38711);
return G__38709__delegate(args);
});
G__38709.cljs$core$IFn$_invoke$arity$variadic = G__38709__delegate;
return G__38709;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38713 = cljs.core._EQ_;
var expr__38714 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38713.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38714))){
var path_parts = ((function (pred__38713,expr__38714){
return (function (p1__38712_SHARP_){
return clojure.string.split.call(null,p1__38712_SHARP_,/[\/\\]/);
});})(pred__38713,expr__38714))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__38713,expr__38714){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e38716){if((e38716 instanceof Error)){
var e = e38716;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38716;

}
}})());
});
;})(path_parts,sep,root,pred__38713,expr__38714))
} else {
if(cljs.core.truth_(pred__38713.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38714))){
return ((function (pred__38713,expr__38714){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__38713,expr__38714){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__38713,expr__38714))
);

return deferred.addErrback(((function (deferred,pred__38713,expr__38714){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__38713,expr__38714))
);
});
;})(pred__38713,expr__38714))
} else {
return ((function (pred__38713,expr__38714){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__38713,expr__38714))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38717,callback){
var map__38720 = p__38717;
var map__38720__$1 = ((((!((map__38720 == null)))?((((map__38720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38720):map__38720);
var file_msg = map__38720__$1;
var request_url = cljs.core.get.call(null,map__38720__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__38720,map__38720__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38720,map__38720__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__30011__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto__){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto__){
return (function (state_38744){
var state_val_38745 = (state_38744[(1)]);
if((state_val_38745 === (7))){
var inst_38740 = (state_38744[(2)]);
var state_38744__$1 = state_38744;
var statearr_38746_38766 = state_38744__$1;
(statearr_38746_38766[(2)] = inst_38740);

(statearr_38746_38766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38745 === (1))){
var state_38744__$1 = state_38744;
var statearr_38747_38767 = state_38744__$1;
(statearr_38747_38767[(2)] = null);

(statearr_38747_38767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38745 === (4))){
var inst_38724 = (state_38744[(7)]);
var inst_38724__$1 = (state_38744[(2)]);
var state_38744__$1 = (function (){var statearr_38748 = state_38744;
(statearr_38748[(7)] = inst_38724__$1);

return statearr_38748;
})();
if(cljs.core.truth_(inst_38724__$1)){
var statearr_38749_38768 = state_38744__$1;
(statearr_38749_38768[(1)] = (5));

} else {
var statearr_38750_38769 = state_38744__$1;
(statearr_38750_38769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38745 === (6))){
var state_38744__$1 = state_38744;
var statearr_38751_38770 = state_38744__$1;
(statearr_38751_38770[(2)] = null);

(statearr_38751_38770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38745 === (3))){
var inst_38742 = (state_38744[(2)]);
var state_38744__$1 = state_38744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38744__$1,inst_38742);
} else {
if((state_val_38745 === (2))){
var state_38744__$1 = state_38744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38744__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38745 === (11))){
var inst_38736 = (state_38744[(2)]);
var state_38744__$1 = (function (){var statearr_38752 = state_38744;
(statearr_38752[(8)] = inst_38736);

return statearr_38752;
})();
var statearr_38753_38771 = state_38744__$1;
(statearr_38753_38771[(2)] = null);

(statearr_38753_38771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38745 === (9))){
var inst_38728 = (state_38744[(9)]);
var inst_38730 = (state_38744[(10)]);
var inst_38732 = inst_38730.call(null,inst_38728);
var state_38744__$1 = state_38744;
var statearr_38754_38772 = state_38744__$1;
(statearr_38754_38772[(2)] = inst_38732);

(statearr_38754_38772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38745 === (5))){
var inst_38724 = (state_38744[(7)]);
var inst_38726 = figwheel.client.file_reloading.blocking_load.call(null,inst_38724);
var state_38744__$1 = state_38744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38744__$1,(8),inst_38726);
} else {
if((state_val_38745 === (10))){
var inst_38728 = (state_38744[(9)]);
var inst_38734 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38728);
var state_38744__$1 = state_38744;
var statearr_38755_38773 = state_38744__$1;
(statearr_38755_38773[(2)] = inst_38734);

(statearr_38755_38773[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38745 === (8))){
var inst_38724 = (state_38744[(7)]);
var inst_38730 = (state_38744[(10)]);
var inst_38728 = (state_38744[(2)]);
var inst_38729 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38730__$1 = cljs.core.get.call(null,inst_38729,inst_38724);
var state_38744__$1 = (function (){var statearr_38756 = state_38744;
(statearr_38756[(9)] = inst_38728);

(statearr_38756[(10)] = inst_38730__$1);

return statearr_38756;
})();
if(cljs.core.truth_(inst_38730__$1)){
var statearr_38757_38774 = state_38744__$1;
(statearr_38757_38774[(1)] = (9));

} else {
var statearr_38758_38775 = state_38744__$1;
(statearr_38758_38775[(1)] = (10));

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
});})(c__30011__auto__))
;
return ((function (switch__29899__auto__,c__30011__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29900__auto__ = null;
var figwheel$client$file_reloading$state_machine__29900__auto____0 = (function (){
var statearr_38762 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38762[(0)] = figwheel$client$file_reloading$state_machine__29900__auto__);

(statearr_38762[(1)] = (1));

return statearr_38762;
});
var figwheel$client$file_reloading$state_machine__29900__auto____1 = (function (state_38744){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_38744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e38763){if((e38763 instanceof Object)){
var ex__29903__auto__ = e38763;
var statearr_38764_38776 = state_38744;
(statearr_38764_38776[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38777 = state_38744;
state_38744 = G__38777;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29900__auto__ = function(state_38744){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29900__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29900__auto____1.call(this,state_38744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29900__auto____0;
figwheel$client$file_reloading$state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29900__auto____1;
return figwheel$client$file_reloading$state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto__))
})();
var state__30013__auto__ = (function (){var statearr_38765 = f__30012__auto__.call(null);
(statearr_38765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto__);

return statearr_38765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto__))
);

return c__30011__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38778,callback){
var map__38781 = p__38778;
var map__38781__$1 = ((((!((map__38781 == null)))?((((map__38781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38781):map__38781);
var file_msg = map__38781__$1;
var namespace = cljs.core.get.call(null,map__38781__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38781,map__38781__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38781,map__38781__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38783){
var map__38786 = p__38783;
var map__38786__$1 = ((((!((map__38786 == null)))?((((map__38786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38786):map__38786);
var file_msg = map__38786__$1;
var namespace = cljs.core.get.call(null,map__38786__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25868__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25868__auto__){
var or__25880__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
var or__25880__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25880__auto____$1)){
return or__25880__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25868__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38788,callback){
var map__38791 = p__38788;
var map__38791__$1 = ((((!((map__38791 == null)))?((((map__38791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38791):map__38791);
var file_msg = map__38791__$1;
var request_url = cljs.core.get.call(null,map__38791__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38791__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30011__auto___38879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto___38879,out){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto___38879,out){
return (function (state_38861){
var state_val_38862 = (state_38861[(1)]);
if((state_val_38862 === (1))){
var inst_38839 = cljs.core.nth.call(null,files,(0),null);
var inst_38840 = cljs.core.nthnext.call(null,files,(1));
var inst_38841 = files;
var state_38861__$1 = (function (){var statearr_38863 = state_38861;
(statearr_38863[(7)] = inst_38840);

(statearr_38863[(8)] = inst_38839);

(statearr_38863[(9)] = inst_38841);

return statearr_38863;
})();
var statearr_38864_38880 = state_38861__$1;
(statearr_38864_38880[(2)] = null);

(statearr_38864_38880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (2))){
var inst_38844 = (state_38861[(10)]);
var inst_38841 = (state_38861[(9)]);
var inst_38844__$1 = cljs.core.nth.call(null,inst_38841,(0),null);
var inst_38845 = cljs.core.nthnext.call(null,inst_38841,(1));
var inst_38846 = (inst_38844__$1 == null);
var inst_38847 = cljs.core.not.call(null,inst_38846);
var state_38861__$1 = (function (){var statearr_38865 = state_38861;
(statearr_38865[(10)] = inst_38844__$1);

(statearr_38865[(11)] = inst_38845);

return statearr_38865;
})();
if(inst_38847){
var statearr_38866_38881 = state_38861__$1;
(statearr_38866_38881[(1)] = (4));

} else {
var statearr_38867_38882 = state_38861__$1;
(statearr_38867_38882[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (3))){
var inst_38859 = (state_38861[(2)]);
var state_38861__$1 = state_38861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38861__$1,inst_38859);
} else {
if((state_val_38862 === (4))){
var inst_38844 = (state_38861[(10)]);
var inst_38849 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38844);
var state_38861__$1 = state_38861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38861__$1,(7),inst_38849);
} else {
if((state_val_38862 === (5))){
var inst_38855 = cljs.core.async.close_BANG_.call(null,out);
var state_38861__$1 = state_38861;
var statearr_38868_38883 = state_38861__$1;
(statearr_38868_38883[(2)] = inst_38855);

(statearr_38868_38883[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (6))){
var inst_38857 = (state_38861[(2)]);
var state_38861__$1 = state_38861;
var statearr_38869_38884 = state_38861__$1;
(statearr_38869_38884[(2)] = inst_38857);

(statearr_38869_38884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38862 === (7))){
var inst_38845 = (state_38861[(11)]);
var inst_38851 = (state_38861[(2)]);
var inst_38852 = cljs.core.async.put_BANG_.call(null,out,inst_38851);
var inst_38841 = inst_38845;
var state_38861__$1 = (function (){var statearr_38870 = state_38861;
(statearr_38870[(12)] = inst_38852);

(statearr_38870[(9)] = inst_38841);

return statearr_38870;
})();
var statearr_38871_38885 = state_38861__$1;
(statearr_38871_38885[(2)] = null);

(statearr_38871_38885[(1)] = (2));


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
});})(c__30011__auto___38879,out))
;
return ((function (switch__29899__auto__,c__30011__auto___38879,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29900__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29900__auto____0 = (function (){
var statearr_38875 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38875[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29900__auto__);

(statearr_38875[(1)] = (1));

return statearr_38875;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29900__auto____1 = (function (state_38861){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_38861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e38876){if((e38876 instanceof Object)){
var ex__29903__auto__ = e38876;
var statearr_38877_38886 = state_38861;
(statearr_38877_38886[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38887 = state_38861;
state_38861 = G__38887;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29900__auto__ = function(state_38861){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29900__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29900__auto____1.call(this,state_38861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29900__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29900__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto___38879,out))
})();
var state__30013__auto__ = (function (){var statearr_38878 = f__30012__auto__.call(null);
(statearr_38878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___38879);

return statearr_38878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto___38879,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38888,opts){
var map__38892 = p__38888;
var map__38892__$1 = ((((!((map__38892 == null)))?((((map__38892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38892):map__38892);
var eval_body__$1 = cljs.core.get.call(null,map__38892__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38892__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25868__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25868__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25868__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e38894){var e = e38894;
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
return (function (p1__38895_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38895_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__38900){
var vec__38901 = p__38900;
var k = cljs.core.nth.call(null,vec__38901,(0),null);
var v = cljs.core.nth.call(null,vec__38901,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38902){
var vec__38903 = p__38902;
var k = cljs.core.nth.call(null,vec__38903,(0),null);
var v = cljs.core.nth.call(null,vec__38903,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38907,p__38908){
var map__39155 = p__38907;
var map__39155__$1 = ((((!((map__39155 == null)))?((((map__39155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39155):map__39155);
var opts = map__39155__$1;
var before_jsload = cljs.core.get.call(null,map__39155__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39155__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39155__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39156 = p__38908;
var map__39156__$1 = ((((!((map__39156 == null)))?((((map__39156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39156):map__39156);
var msg = map__39156__$1;
var files = cljs.core.get.call(null,map__39156__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39156__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39156__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30011__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto__,map__39155,map__39155__$1,opts,before_jsload,on_jsload,reload_dependents,map__39156,map__39156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto__,map__39155,map__39155__$1,opts,before_jsload,on_jsload,reload_dependents,map__39156,map__39156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39309){
var state_val_39310 = (state_39309[(1)]);
if((state_val_39310 === (7))){
var inst_39173 = (state_39309[(7)]);
var inst_39171 = (state_39309[(8)]);
var inst_39170 = (state_39309[(9)]);
var inst_39172 = (state_39309[(10)]);
var inst_39178 = cljs.core._nth.call(null,inst_39171,inst_39173);
var inst_39179 = figwheel.client.file_reloading.eval_body.call(null,inst_39178,opts);
var inst_39180 = (inst_39173 + (1));
var tmp39311 = inst_39171;
var tmp39312 = inst_39170;
var tmp39313 = inst_39172;
var inst_39170__$1 = tmp39312;
var inst_39171__$1 = tmp39311;
var inst_39172__$1 = tmp39313;
var inst_39173__$1 = inst_39180;
var state_39309__$1 = (function (){var statearr_39314 = state_39309;
(statearr_39314[(7)] = inst_39173__$1);

(statearr_39314[(8)] = inst_39171__$1);

(statearr_39314[(11)] = inst_39179);

(statearr_39314[(9)] = inst_39170__$1);

(statearr_39314[(10)] = inst_39172__$1);

return statearr_39314;
})();
var statearr_39315_39401 = state_39309__$1;
(statearr_39315_39401[(2)] = null);

(statearr_39315_39401[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (20))){
var inst_39213 = (state_39309[(12)]);
var inst_39221 = figwheel.client.file_reloading.sort_files.call(null,inst_39213);
var state_39309__$1 = state_39309;
var statearr_39316_39402 = state_39309__$1;
(statearr_39316_39402[(2)] = inst_39221);

(statearr_39316_39402[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (27))){
var state_39309__$1 = state_39309;
var statearr_39317_39403 = state_39309__$1;
(statearr_39317_39403[(2)] = null);

(statearr_39317_39403[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (1))){
var inst_39162 = (state_39309[(13)]);
var inst_39159 = before_jsload.call(null,files);
var inst_39160 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39161 = (function (){return ((function (inst_39162,inst_39159,inst_39160,state_val_39310,c__30011__auto__,map__39155,map__39155__$1,opts,before_jsload,on_jsload,reload_dependents,map__39156,map__39156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38904_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38904_SHARP_);
});
;})(inst_39162,inst_39159,inst_39160,state_val_39310,c__30011__auto__,map__39155,map__39155__$1,opts,before_jsload,on_jsload,reload_dependents,map__39156,map__39156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39162__$1 = cljs.core.filter.call(null,inst_39161,files);
var inst_39163 = cljs.core.not_empty.call(null,inst_39162__$1);
var state_39309__$1 = (function (){var statearr_39318 = state_39309;
(statearr_39318[(14)] = inst_39160);

(statearr_39318[(15)] = inst_39159);

(statearr_39318[(13)] = inst_39162__$1);

return statearr_39318;
})();
if(cljs.core.truth_(inst_39163)){
var statearr_39319_39404 = state_39309__$1;
(statearr_39319_39404[(1)] = (2));

} else {
var statearr_39320_39405 = state_39309__$1;
(statearr_39320_39405[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (24))){
var state_39309__$1 = state_39309;
var statearr_39321_39406 = state_39309__$1;
(statearr_39321_39406[(2)] = null);

(statearr_39321_39406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (39))){
var inst_39263 = (state_39309[(16)]);
var state_39309__$1 = state_39309;
var statearr_39322_39407 = state_39309__$1;
(statearr_39322_39407[(2)] = inst_39263);

(statearr_39322_39407[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (46))){
var inst_39304 = (state_39309[(2)]);
var state_39309__$1 = state_39309;
var statearr_39323_39408 = state_39309__$1;
(statearr_39323_39408[(2)] = inst_39304);

(statearr_39323_39408[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (4))){
var inst_39207 = (state_39309[(2)]);
var inst_39208 = cljs.core.List.EMPTY;
var inst_39209 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39208);
var inst_39210 = (function (){return ((function (inst_39207,inst_39208,inst_39209,state_val_39310,c__30011__auto__,map__39155,map__39155__$1,opts,before_jsload,on_jsload,reload_dependents,map__39156,map__39156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38905_SHARP_){
var and__25868__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38905_SHARP_);
if(cljs.core.truth_(and__25868__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38905_SHARP_));
} else {
return and__25868__auto__;
}
});
;})(inst_39207,inst_39208,inst_39209,state_val_39310,c__30011__auto__,map__39155,map__39155__$1,opts,before_jsload,on_jsload,reload_dependents,map__39156,map__39156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39211 = cljs.core.filter.call(null,inst_39210,files);
var inst_39212 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39213 = cljs.core.concat.call(null,inst_39211,inst_39212);
var state_39309__$1 = (function (){var statearr_39324 = state_39309;
(statearr_39324[(17)] = inst_39209);

(statearr_39324[(12)] = inst_39213);

(statearr_39324[(18)] = inst_39207);

return statearr_39324;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39325_39409 = state_39309__$1;
(statearr_39325_39409[(1)] = (16));

} else {
var statearr_39326_39410 = state_39309__$1;
(statearr_39326_39410[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (15))){
var inst_39197 = (state_39309[(2)]);
var state_39309__$1 = state_39309;
var statearr_39327_39411 = state_39309__$1;
(statearr_39327_39411[(2)] = inst_39197);

(statearr_39327_39411[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (21))){
var inst_39223 = (state_39309[(19)]);
var inst_39223__$1 = (state_39309[(2)]);
var inst_39224 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39223__$1);
var state_39309__$1 = (function (){var statearr_39328 = state_39309;
(statearr_39328[(19)] = inst_39223__$1);

return statearr_39328;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39309__$1,(22),inst_39224);
} else {
if((state_val_39310 === (31))){
var inst_39307 = (state_39309[(2)]);
var state_39309__$1 = state_39309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39309__$1,inst_39307);
} else {
if((state_val_39310 === (32))){
var inst_39263 = (state_39309[(16)]);
var inst_39268 = inst_39263.cljs$lang$protocol_mask$partition0$;
var inst_39269 = (inst_39268 & (64));
var inst_39270 = inst_39263.cljs$core$ISeq$;
var inst_39271 = (inst_39269) || (inst_39270);
var state_39309__$1 = state_39309;
if(cljs.core.truth_(inst_39271)){
var statearr_39329_39412 = state_39309__$1;
(statearr_39329_39412[(1)] = (35));

} else {
var statearr_39330_39413 = state_39309__$1;
(statearr_39330_39413[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (40))){
var inst_39284 = (state_39309[(20)]);
var inst_39283 = (state_39309[(2)]);
var inst_39284__$1 = cljs.core.get.call(null,inst_39283,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39285 = cljs.core.get.call(null,inst_39283,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39286 = cljs.core.not_empty.call(null,inst_39284__$1);
var state_39309__$1 = (function (){var statearr_39331 = state_39309;
(statearr_39331[(21)] = inst_39285);

(statearr_39331[(20)] = inst_39284__$1);

return statearr_39331;
})();
if(cljs.core.truth_(inst_39286)){
var statearr_39332_39414 = state_39309__$1;
(statearr_39332_39414[(1)] = (41));

} else {
var statearr_39333_39415 = state_39309__$1;
(statearr_39333_39415[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (33))){
var state_39309__$1 = state_39309;
var statearr_39334_39416 = state_39309__$1;
(statearr_39334_39416[(2)] = false);

(statearr_39334_39416[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (13))){
var inst_39183 = (state_39309[(22)]);
var inst_39187 = cljs.core.chunk_first.call(null,inst_39183);
var inst_39188 = cljs.core.chunk_rest.call(null,inst_39183);
var inst_39189 = cljs.core.count.call(null,inst_39187);
var inst_39170 = inst_39188;
var inst_39171 = inst_39187;
var inst_39172 = inst_39189;
var inst_39173 = (0);
var state_39309__$1 = (function (){var statearr_39335 = state_39309;
(statearr_39335[(7)] = inst_39173);

(statearr_39335[(8)] = inst_39171);

(statearr_39335[(9)] = inst_39170);

(statearr_39335[(10)] = inst_39172);

return statearr_39335;
})();
var statearr_39336_39417 = state_39309__$1;
(statearr_39336_39417[(2)] = null);

(statearr_39336_39417[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (22))){
var inst_39227 = (state_39309[(23)]);
var inst_39223 = (state_39309[(19)]);
var inst_39231 = (state_39309[(24)]);
var inst_39226 = (state_39309[(25)]);
var inst_39226__$1 = (state_39309[(2)]);
var inst_39227__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39226__$1);
var inst_39228 = (function (){var all_files = inst_39223;
var res_SINGLEQUOTE_ = inst_39226__$1;
var res = inst_39227__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39227,inst_39223,inst_39231,inst_39226,inst_39226__$1,inst_39227__$1,state_val_39310,c__30011__auto__,map__39155,map__39155__$1,opts,before_jsload,on_jsload,reload_dependents,map__39156,map__39156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38906_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38906_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39227,inst_39223,inst_39231,inst_39226,inst_39226__$1,inst_39227__$1,state_val_39310,c__30011__auto__,map__39155,map__39155__$1,opts,before_jsload,on_jsload,reload_dependents,map__39156,map__39156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39229 = cljs.core.filter.call(null,inst_39228,inst_39226__$1);
var inst_39230 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39231__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39230);
var inst_39232 = cljs.core.not_empty.call(null,inst_39231__$1);
var state_39309__$1 = (function (){var statearr_39337 = state_39309;
(statearr_39337[(26)] = inst_39229);

(statearr_39337[(23)] = inst_39227__$1);

(statearr_39337[(24)] = inst_39231__$1);

(statearr_39337[(25)] = inst_39226__$1);

return statearr_39337;
})();
if(cljs.core.truth_(inst_39232)){
var statearr_39338_39418 = state_39309__$1;
(statearr_39338_39418[(1)] = (23));

} else {
var statearr_39339_39419 = state_39309__$1;
(statearr_39339_39419[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (36))){
var state_39309__$1 = state_39309;
var statearr_39340_39420 = state_39309__$1;
(statearr_39340_39420[(2)] = false);

(statearr_39340_39420[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (41))){
var inst_39284 = (state_39309[(20)]);
var inst_39288 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39289 = cljs.core.map.call(null,inst_39288,inst_39284);
var inst_39290 = cljs.core.pr_str.call(null,inst_39289);
var inst_39291 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_39290)].join('');
var inst_39292 = figwheel.client.utils.log.call(null,inst_39291);
var state_39309__$1 = state_39309;
var statearr_39341_39421 = state_39309__$1;
(statearr_39341_39421[(2)] = inst_39292);

(statearr_39341_39421[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (43))){
var inst_39285 = (state_39309[(21)]);
var inst_39295 = (state_39309[(2)]);
var inst_39296 = cljs.core.not_empty.call(null,inst_39285);
var state_39309__$1 = (function (){var statearr_39342 = state_39309;
(statearr_39342[(27)] = inst_39295);

return statearr_39342;
})();
if(cljs.core.truth_(inst_39296)){
var statearr_39343_39422 = state_39309__$1;
(statearr_39343_39422[(1)] = (44));

} else {
var statearr_39344_39423 = state_39309__$1;
(statearr_39344_39423[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (29))){
var inst_39263 = (state_39309[(16)]);
var inst_39229 = (state_39309[(26)]);
var inst_39227 = (state_39309[(23)]);
var inst_39223 = (state_39309[(19)]);
var inst_39231 = (state_39309[(24)]);
var inst_39226 = (state_39309[(25)]);
var inst_39259 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39262 = (function (){var all_files = inst_39223;
var res_SINGLEQUOTE_ = inst_39226;
var res = inst_39227;
var files_not_loaded = inst_39229;
var dependencies_that_loaded = inst_39231;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39263,inst_39229,inst_39227,inst_39223,inst_39231,inst_39226,inst_39259,state_val_39310,c__30011__auto__,map__39155,map__39155__$1,opts,before_jsload,on_jsload,reload_dependents,map__39156,map__39156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39261){
var map__39345 = p__39261;
var map__39345__$1 = ((((!((map__39345 == null)))?((((map__39345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39345):map__39345);
var namespace = cljs.core.get.call(null,map__39345__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39263,inst_39229,inst_39227,inst_39223,inst_39231,inst_39226,inst_39259,state_val_39310,c__30011__auto__,map__39155,map__39155__$1,opts,before_jsload,on_jsload,reload_dependents,map__39156,map__39156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39263__$1 = cljs.core.group_by.call(null,inst_39262,inst_39229);
var inst_39265 = (inst_39263__$1 == null);
var inst_39266 = cljs.core.not.call(null,inst_39265);
var state_39309__$1 = (function (){var statearr_39347 = state_39309;
(statearr_39347[(28)] = inst_39259);

(statearr_39347[(16)] = inst_39263__$1);

return statearr_39347;
})();
if(inst_39266){
var statearr_39348_39424 = state_39309__$1;
(statearr_39348_39424[(1)] = (32));

} else {
var statearr_39349_39425 = state_39309__$1;
(statearr_39349_39425[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (44))){
var inst_39285 = (state_39309[(21)]);
var inst_39298 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39285);
var inst_39299 = cljs.core.pr_str.call(null,inst_39298);
var inst_39300 = [cljs.core.str("not required: "),cljs.core.str(inst_39299)].join('');
var inst_39301 = figwheel.client.utils.log.call(null,inst_39300);
var state_39309__$1 = state_39309;
var statearr_39350_39426 = state_39309__$1;
(statearr_39350_39426[(2)] = inst_39301);

(statearr_39350_39426[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (6))){
var inst_39204 = (state_39309[(2)]);
var state_39309__$1 = state_39309;
var statearr_39351_39427 = state_39309__$1;
(statearr_39351_39427[(2)] = inst_39204);

(statearr_39351_39427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (28))){
var inst_39229 = (state_39309[(26)]);
var inst_39256 = (state_39309[(2)]);
var inst_39257 = cljs.core.not_empty.call(null,inst_39229);
var state_39309__$1 = (function (){var statearr_39352 = state_39309;
(statearr_39352[(29)] = inst_39256);

return statearr_39352;
})();
if(cljs.core.truth_(inst_39257)){
var statearr_39353_39428 = state_39309__$1;
(statearr_39353_39428[(1)] = (29));

} else {
var statearr_39354_39429 = state_39309__$1;
(statearr_39354_39429[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (25))){
var inst_39227 = (state_39309[(23)]);
var inst_39243 = (state_39309[(2)]);
var inst_39244 = cljs.core.not_empty.call(null,inst_39227);
var state_39309__$1 = (function (){var statearr_39355 = state_39309;
(statearr_39355[(30)] = inst_39243);

return statearr_39355;
})();
if(cljs.core.truth_(inst_39244)){
var statearr_39356_39430 = state_39309__$1;
(statearr_39356_39430[(1)] = (26));

} else {
var statearr_39357_39431 = state_39309__$1;
(statearr_39357_39431[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (34))){
var inst_39278 = (state_39309[(2)]);
var state_39309__$1 = state_39309;
if(cljs.core.truth_(inst_39278)){
var statearr_39358_39432 = state_39309__$1;
(statearr_39358_39432[(1)] = (38));

} else {
var statearr_39359_39433 = state_39309__$1;
(statearr_39359_39433[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (17))){
var state_39309__$1 = state_39309;
var statearr_39360_39434 = state_39309__$1;
(statearr_39360_39434[(2)] = recompile_dependents);

(statearr_39360_39434[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (3))){
var state_39309__$1 = state_39309;
var statearr_39361_39435 = state_39309__$1;
(statearr_39361_39435[(2)] = null);

(statearr_39361_39435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (12))){
var inst_39200 = (state_39309[(2)]);
var state_39309__$1 = state_39309;
var statearr_39362_39436 = state_39309__$1;
(statearr_39362_39436[(2)] = inst_39200);

(statearr_39362_39436[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (2))){
var inst_39162 = (state_39309[(13)]);
var inst_39169 = cljs.core.seq.call(null,inst_39162);
var inst_39170 = inst_39169;
var inst_39171 = null;
var inst_39172 = (0);
var inst_39173 = (0);
var state_39309__$1 = (function (){var statearr_39363 = state_39309;
(statearr_39363[(7)] = inst_39173);

(statearr_39363[(8)] = inst_39171);

(statearr_39363[(9)] = inst_39170);

(statearr_39363[(10)] = inst_39172);

return statearr_39363;
})();
var statearr_39364_39437 = state_39309__$1;
(statearr_39364_39437[(2)] = null);

(statearr_39364_39437[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (23))){
var inst_39229 = (state_39309[(26)]);
var inst_39227 = (state_39309[(23)]);
var inst_39223 = (state_39309[(19)]);
var inst_39231 = (state_39309[(24)]);
var inst_39226 = (state_39309[(25)]);
var inst_39234 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39236 = (function (){var all_files = inst_39223;
var res_SINGLEQUOTE_ = inst_39226;
var res = inst_39227;
var files_not_loaded = inst_39229;
var dependencies_that_loaded = inst_39231;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39229,inst_39227,inst_39223,inst_39231,inst_39226,inst_39234,state_val_39310,c__30011__auto__,map__39155,map__39155__$1,opts,before_jsload,on_jsload,reload_dependents,map__39156,map__39156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39235){
var map__39365 = p__39235;
var map__39365__$1 = ((((!((map__39365 == null)))?((((map__39365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39365):map__39365);
var request_url = cljs.core.get.call(null,map__39365__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39229,inst_39227,inst_39223,inst_39231,inst_39226,inst_39234,state_val_39310,c__30011__auto__,map__39155,map__39155__$1,opts,before_jsload,on_jsload,reload_dependents,map__39156,map__39156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39237 = cljs.core.reverse.call(null,inst_39231);
var inst_39238 = cljs.core.map.call(null,inst_39236,inst_39237);
var inst_39239 = cljs.core.pr_str.call(null,inst_39238);
var inst_39240 = figwheel.client.utils.log.call(null,inst_39239);
var state_39309__$1 = (function (){var statearr_39367 = state_39309;
(statearr_39367[(31)] = inst_39234);

return statearr_39367;
})();
var statearr_39368_39438 = state_39309__$1;
(statearr_39368_39438[(2)] = inst_39240);

(statearr_39368_39438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (35))){
var state_39309__$1 = state_39309;
var statearr_39369_39439 = state_39309__$1;
(statearr_39369_39439[(2)] = true);

(statearr_39369_39439[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (19))){
var inst_39213 = (state_39309[(12)]);
var inst_39219 = figwheel.client.file_reloading.expand_files.call(null,inst_39213);
var state_39309__$1 = state_39309;
var statearr_39370_39440 = state_39309__$1;
(statearr_39370_39440[(2)] = inst_39219);

(statearr_39370_39440[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (11))){
var state_39309__$1 = state_39309;
var statearr_39371_39441 = state_39309__$1;
(statearr_39371_39441[(2)] = null);

(statearr_39371_39441[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (9))){
var inst_39202 = (state_39309[(2)]);
var state_39309__$1 = state_39309;
var statearr_39372_39442 = state_39309__$1;
(statearr_39372_39442[(2)] = inst_39202);

(statearr_39372_39442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (5))){
var inst_39173 = (state_39309[(7)]);
var inst_39172 = (state_39309[(10)]);
var inst_39175 = (inst_39173 < inst_39172);
var inst_39176 = inst_39175;
var state_39309__$1 = state_39309;
if(cljs.core.truth_(inst_39176)){
var statearr_39373_39443 = state_39309__$1;
(statearr_39373_39443[(1)] = (7));

} else {
var statearr_39374_39444 = state_39309__$1;
(statearr_39374_39444[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (14))){
var inst_39183 = (state_39309[(22)]);
var inst_39192 = cljs.core.first.call(null,inst_39183);
var inst_39193 = figwheel.client.file_reloading.eval_body.call(null,inst_39192,opts);
var inst_39194 = cljs.core.next.call(null,inst_39183);
var inst_39170 = inst_39194;
var inst_39171 = null;
var inst_39172 = (0);
var inst_39173 = (0);
var state_39309__$1 = (function (){var statearr_39375 = state_39309;
(statearr_39375[(7)] = inst_39173);

(statearr_39375[(8)] = inst_39171);

(statearr_39375[(32)] = inst_39193);

(statearr_39375[(9)] = inst_39170);

(statearr_39375[(10)] = inst_39172);

return statearr_39375;
})();
var statearr_39376_39445 = state_39309__$1;
(statearr_39376_39445[(2)] = null);

(statearr_39376_39445[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (45))){
var state_39309__$1 = state_39309;
var statearr_39377_39446 = state_39309__$1;
(statearr_39377_39446[(2)] = null);

(statearr_39377_39446[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (26))){
var inst_39229 = (state_39309[(26)]);
var inst_39227 = (state_39309[(23)]);
var inst_39223 = (state_39309[(19)]);
var inst_39231 = (state_39309[(24)]);
var inst_39226 = (state_39309[(25)]);
var inst_39246 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39248 = (function (){var all_files = inst_39223;
var res_SINGLEQUOTE_ = inst_39226;
var res = inst_39227;
var files_not_loaded = inst_39229;
var dependencies_that_loaded = inst_39231;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39229,inst_39227,inst_39223,inst_39231,inst_39226,inst_39246,state_val_39310,c__30011__auto__,map__39155,map__39155__$1,opts,before_jsload,on_jsload,reload_dependents,map__39156,map__39156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39247){
var map__39378 = p__39247;
var map__39378__$1 = ((((!((map__39378 == null)))?((((map__39378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39378):map__39378);
var namespace = cljs.core.get.call(null,map__39378__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39378__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39229,inst_39227,inst_39223,inst_39231,inst_39226,inst_39246,state_val_39310,c__30011__auto__,map__39155,map__39155__$1,opts,before_jsload,on_jsload,reload_dependents,map__39156,map__39156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39249 = cljs.core.map.call(null,inst_39248,inst_39227);
var inst_39250 = cljs.core.pr_str.call(null,inst_39249);
var inst_39251 = figwheel.client.utils.log.call(null,inst_39250);
var inst_39252 = (function (){var all_files = inst_39223;
var res_SINGLEQUOTE_ = inst_39226;
var res = inst_39227;
var files_not_loaded = inst_39229;
var dependencies_that_loaded = inst_39231;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39229,inst_39227,inst_39223,inst_39231,inst_39226,inst_39246,inst_39248,inst_39249,inst_39250,inst_39251,state_val_39310,c__30011__auto__,map__39155,map__39155__$1,opts,before_jsload,on_jsload,reload_dependents,map__39156,map__39156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39229,inst_39227,inst_39223,inst_39231,inst_39226,inst_39246,inst_39248,inst_39249,inst_39250,inst_39251,state_val_39310,c__30011__auto__,map__39155,map__39155__$1,opts,before_jsload,on_jsload,reload_dependents,map__39156,map__39156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39253 = setTimeout(inst_39252,(10));
var state_39309__$1 = (function (){var statearr_39380 = state_39309;
(statearr_39380[(33)] = inst_39251);

(statearr_39380[(34)] = inst_39246);

return statearr_39380;
})();
var statearr_39381_39447 = state_39309__$1;
(statearr_39381_39447[(2)] = inst_39253);

(statearr_39381_39447[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (16))){
var state_39309__$1 = state_39309;
var statearr_39382_39448 = state_39309__$1;
(statearr_39382_39448[(2)] = reload_dependents);

(statearr_39382_39448[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (38))){
var inst_39263 = (state_39309[(16)]);
var inst_39280 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39263);
var state_39309__$1 = state_39309;
var statearr_39383_39449 = state_39309__$1;
(statearr_39383_39449[(2)] = inst_39280);

(statearr_39383_39449[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (30))){
var state_39309__$1 = state_39309;
var statearr_39384_39450 = state_39309__$1;
(statearr_39384_39450[(2)] = null);

(statearr_39384_39450[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (10))){
var inst_39183 = (state_39309[(22)]);
var inst_39185 = cljs.core.chunked_seq_QMARK_.call(null,inst_39183);
var state_39309__$1 = state_39309;
if(inst_39185){
var statearr_39385_39451 = state_39309__$1;
(statearr_39385_39451[(1)] = (13));

} else {
var statearr_39386_39452 = state_39309__$1;
(statearr_39386_39452[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (18))){
var inst_39217 = (state_39309[(2)]);
var state_39309__$1 = state_39309;
if(cljs.core.truth_(inst_39217)){
var statearr_39387_39453 = state_39309__$1;
(statearr_39387_39453[(1)] = (19));

} else {
var statearr_39388_39454 = state_39309__$1;
(statearr_39388_39454[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (42))){
var state_39309__$1 = state_39309;
var statearr_39389_39455 = state_39309__$1;
(statearr_39389_39455[(2)] = null);

(statearr_39389_39455[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (37))){
var inst_39275 = (state_39309[(2)]);
var state_39309__$1 = state_39309;
var statearr_39390_39456 = state_39309__$1;
(statearr_39390_39456[(2)] = inst_39275);

(statearr_39390_39456[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (8))){
var inst_39183 = (state_39309[(22)]);
var inst_39170 = (state_39309[(9)]);
var inst_39183__$1 = cljs.core.seq.call(null,inst_39170);
var state_39309__$1 = (function (){var statearr_39391 = state_39309;
(statearr_39391[(22)] = inst_39183__$1);

return statearr_39391;
})();
if(inst_39183__$1){
var statearr_39392_39457 = state_39309__$1;
(statearr_39392_39457[(1)] = (10));

} else {
var statearr_39393_39458 = state_39309__$1;
(statearr_39393_39458[(1)] = (11));

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
});})(c__30011__auto__,map__39155,map__39155__$1,opts,before_jsload,on_jsload,reload_dependents,map__39156,map__39156__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29899__auto__,c__30011__auto__,map__39155,map__39155__$1,opts,before_jsload,on_jsload,reload_dependents,map__39156,map__39156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29900__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29900__auto____0 = (function (){
var statearr_39397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39397[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29900__auto__);

(statearr_39397[(1)] = (1));

return statearr_39397;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29900__auto____1 = (function (state_39309){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_39309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e39398){if((e39398 instanceof Object)){
var ex__29903__auto__ = e39398;
var statearr_39399_39459 = state_39309;
(statearr_39399_39459[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39460 = state_39309;
state_39309 = G__39460;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29900__auto__ = function(state_39309){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29900__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29900__auto____1.call(this,state_39309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29900__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29900__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto__,map__39155,map__39155__$1,opts,before_jsload,on_jsload,reload_dependents,map__39156,map__39156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30013__auto__ = (function (){var statearr_39400 = f__30012__auto__.call(null);
(statearr_39400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto__);

return statearr_39400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto__,map__39155,map__39155__$1,opts,before_jsload,on_jsload,reload_dependents,map__39156,map__39156__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30011__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39463,link){
var map__39466 = p__39463;
var map__39466__$1 = ((((!((map__39466 == null)))?((((map__39466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39466):map__39466);
var file = cljs.core.get.call(null,map__39466__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__39466,map__39466__$1,file){
return (function (p1__39461_SHARP_,p2__39462_SHARP_){
if(cljs.core._EQ_.call(null,p1__39461_SHARP_,p2__39462_SHARP_)){
return p1__39461_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__39466,map__39466__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39472){
var map__39473 = p__39472;
var map__39473__$1 = ((((!((map__39473 == null)))?((((map__39473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39473):map__39473);
var match_length = cljs.core.get.call(null,map__39473__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39473__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39468_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39468_SHARP_);
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
var args39475 = [];
var len__26950__auto___39478 = arguments.length;
var i__26951__auto___39479 = (0);
while(true){
if((i__26951__auto___39479 < len__26950__auto___39478)){
args39475.push((arguments[i__26951__auto___39479]));

var G__39480 = (i__26951__auto___39479 + (1));
i__26951__auto___39479 = G__39480;
continue;
} else {
}
break;
}

var G__39477 = args39475.length;
switch (G__39477) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39475.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__39482_SHARP_,p2__39483_SHARP_){
return cljs.core.assoc.call(null,p1__39482_SHARP_,cljs.core.get.call(null,p2__39483_SHARP_,key),p2__39483_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__39484){
var map__39487 = p__39484;
var map__39487__$1 = ((((!((map__39487 == null)))?((((map__39487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39487):map__39487);
var f_data = map__39487__$1;
var file = cljs.core.get.call(null,map__39487__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39489,files_msg){
var map__39496 = p__39489;
var map__39496__$1 = ((((!((map__39496 == null)))?((((map__39496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39496):map__39496);
var opts = map__39496__$1;
var on_cssload = cljs.core.get.call(null,map__39496__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__39498_39502 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__39499_39503 = null;
var count__39500_39504 = (0);
var i__39501_39505 = (0);
while(true){
if((i__39501_39505 < count__39500_39504)){
var f_39506 = cljs.core._nth.call(null,chunk__39499_39503,i__39501_39505);
figwheel.client.file_reloading.reload_css_file.call(null,f_39506);

var G__39507 = seq__39498_39502;
var G__39508 = chunk__39499_39503;
var G__39509 = count__39500_39504;
var G__39510 = (i__39501_39505 + (1));
seq__39498_39502 = G__39507;
chunk__39499_39503 = G__39508;
count__39500_39504 = G__39509;
i__39501_39505 = G__39510;
continue;
} else {
var temp__4425__auto___39511 = cljs.core.seq.call(null,seq__39498_39502);
if(temp__4425__auto___39511){
var seq__39498_39512__$1 = temp__4425__auto___39511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39498_39512__$1)){
var c__26691__auto___39513 = cljs.core.chunk_first.call(null,seq__39498_39512__$1);
var G__39514 = cljs.core.chunk_rest.call(null,seq__39498_39512__$1);
var G__39515 = c__26691__auto___39513;
var G__39516 = cljs.core.count.call(null,c__26691__auto___39513);
var G__39517 = (0);
seq__39498_39502 = G__39514;
chunk__39499_39503 = G__39515;
count__39500_39504 = G__39516;
i__39501_39505 = G__39517;
continue;
} else {
var f_39518 = cljs.core.first.call(null,seq__39498_39512__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_39518);

var G__39519 = cljs.core.next.call(null,seq__39498_39512__$1);
var G__39520 = null;
var G__39521 = (0);
var G__39522 = (0);
seq__39498_39502 = G__39519;
chunk__39499_39503 = G__39520;
count__39500_39504 = G__39521;
i__39501_39505 = G__39522;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__39496,map__39496__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__39496,map__39496__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map