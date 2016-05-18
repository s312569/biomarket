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
var or__25643__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25643__auto__){
return or__25643__auto__;
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
var or__25643__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38199_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38199_SHARP_));
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
var seq__38204 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38205 = null;
var count__38206 = (0);
var i__38207 = (0);
while(true){
if((i__38207 < count__38206)){
var n = cljs.core._nth.call(null,chunk__38205,i__38207);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38208 = seq__38204;
var G__38209 = chunk__38205;
var G__38210 = count__38206;
var G__38211 = (i__38207 + (1));
seq__38204 = G__38208;
chunk__38205 = G__38209;
count__38206 = G__38210;
i__38207 = G__38211;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38204);
if(temp__4425__auto__){
var seq__38204__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38204__$1)){
var c__26454__auto__ = cljs.core.chunk_first.call(null,seq__38204__$1);
var G__38212 = cljs.core.chunk_rest.call(null,seq__38204__$1);
var G__38213 = c__26454__auto__;
var G__38214 = cljs.core.count.call(null,c__26454__auto__);
var G__38215 = (0);
seq__38204 = G__38212;
chunk__38205 = G__38213;
count__38206 = G__38214;
i__38207 = G__38215;
continue;
} else {
var n = cljs.core.first.call(null,seq__38204__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38216 = cljs.core.next.call(null,seq__38204__$1);
var G__38217 = null;
var G__38218 = (0);
var G__38219 = (0);
seq__38204 = G__38216;
chunk__38205 = G__38217;
count__38206 = G__38218;
i__38207 = G__38219;
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

var seq__38258_38265 = cljs.core.seq.call(null,deps);
var chunk__38259_38266 = null;
var count__38260_38267 = (0);
var i__38261_38268 = (0);
while(true){
if((i__38261_38268 < count__38260_38267)){
var dep_38269 = cljs.core._nth.call(null,chunk__38259_38266,i__38261_38268);
topo_sort_helper_STAR_.call(null,dep_38269,(depth + (1)),state);

var G__38270 = seq__38258_38265;
var G__38271 = chunk__38259_38266;
var G__38272 = count__38260_38267;
var G__38273 = (i__38261_38268 + (1));
seq__38258_38265 = G__38270;
chunk__38259_38266 = G__38271;
count__38260_38267 = G__38272;
i__38261_38268 = G__38273;
continue;
} else {
var temp__4425__auto___38274 = cljs.core.seq.call(null,seq__38258_38265);
if(temp__4425__auto___38274){
var seq__38258_38275__$1 = temp__4425__auto___38274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38258_38275__$1)){
var c__26454__auto___38276 = cljs.core.chunk_first.call(null,seq__38258_38275__$1);
var G__38277 = cljs.core.chunk_rest.call(null,seq__38258_38275__$1);
var G__38278 = c__26454__auto___38276;
var G__38279 = cljs.core.count.call(null,c__26454__auto___38276);
var G__38280 = (0);
seq__38258_38265 = G__38277;
chunk__38259_38266 = G__38278;
count__38260_38267 = G__38279;
i__38261_38268 = G__38280;
continue;
} else {
var dep_38281 = cljs.core.first.call(null,seq__38258_38275__$1);
topo_sort_helper_STAR_.call(null,dep_38281,(depth + (1)),state);

var G__38282 = cljs.core.next.call(null,seq__38258_38275__$1);
var G__38283 = null;
var G__38284 = (0);
var G__38285 = (0);
seq__38258_38265 = G__38282;
chunk__38259_38266 = G__38283;
count__38260_38267 = G__38284;
i__38261_38268 = G__38285;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38262){
var vec__38264 = p__38262;
var x = cljs.core.nth.call(null,vec__38264,(0),null);
var xs = cljs.core.nthnext.call(null,vec__38264,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38264,x,xs,get_deps__$1){
return (function (p1__38220_SHARP_){
return clojure.set.difference.call(null,p1__38220_SHARP_,x);
});})(vec__38264,x,xs,get_deps__$1))
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
var seq__38298 = cljs.core.seq.call(null,provides);
var chunk__38299 = null;
var count__38300 = (0);
var i__38301 = (0);
while(true){
if((i__38301 < count__38300)){
var prov = cljs.core._nth.call(null,chunk__38299,i__38301);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38302_38310 = cljs.core.seq.call(null,requires);
var chunk__38303_38311 = null;
var count__38304_38312 = (0);
var i__38305_38313 = (0);
while(true){
if((i__38305_38313 < count__38304_38312)){
var req_38314 = cljs.core._nth.call(null,chunk__38303_38311,i__38305_38313);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38314,prov);

var G__38315 = seq__38302_38310;
var G__38316 = chunk__38303_38311;
var G__38317 = count__38304_38312;
var G__38318 = (i__38305_38313 + (1));
seq__38302_38310 = G__38315;
chunk__38303_38311 = G__38316;
count__38304_38312 = G__38317;
i__38305_38313 = G__38318;
continue;
} else {
var temp__4425__auto___38319 = cljs.core.seq.call(null,seq__38302_38310);
if(temp__4425__auto___38319){
var seq__38302_38320__$1 = temp__4425__auto___38319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38302_38320__$1)){
var c__26454__auto___38321 = cljs.core.chunk_first.call(null,seq__38302_38320__$1);
var G__38322 = cljs.core.chunk_rest.call(null,seq__38302_38320__$1);
var G__38323 = c__26454__auto___38321;
var G__38324 = cljs.core.count.call(null,c__26454__auto___38321);
var G__38325 = (0);
seq__38302_38310 = G__38322;
chunk__38303_38311 = G__38323;
count__38304_38312 = G__38324;
i__38305_38313 = G__38325;
continue;
} else {
var req_38326 = cljs.core.first.call(null,seq__38302_38320__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38326,prov);

var G__38327 = cljs.core.next.call(null,seq__38302_38320__$1);
var G__38328 = null;
var G__38329 = (0);
var G__38330 = (0);
seq__38302_38310 = G__38327;
chunk__38303_38311 = G__38328;
count__38304_38312 = G__38329;
i__38305_38313 = G__38330;
continue;
}
} else {
}
}
break;
}

var G__38331 = seq__38298;
var G__38332 = chunk__38299;
var G__38333 = count__38300;
var G__38334 = (i__38301 + (1));
seq__38298 = G__38331;
chunk__38299 = G__38332;
count__38300 = G__38333;
i__38301 = G__38334;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38298);
if(temp__4425__auto__){
var seq__38298__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38298__$1)){
var c__26454__auto__ = cljs.core.chunk_first.call(null,seq__38298__$1);
var G__38335 = cljs.core.chunk_rest.call(null,seq__38298__$1);
var G__38336 = c__26454__auto__;
var G__38337 = cljs.core.count.call(null,c__26454__auto__);
var G__38338 = (0);
seq__38298 = G__38335;
chunk__38299 = G__38336;
count__38300 = G__38337;
i__38301 = G__38338;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38298__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38306_38339 = cljs.core.seq.call(null,requires);
var chunk__38307_38340 = null;
var count__38308_38341 = (0);
var i__38309_38342 = (0);
while(true){
if((i__38309_38342 < count__38308_38341)){
var req_38343 = cljs.core._nth.call(null,chunk__38307_38340,i__38309_38342);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38343,prov);

var G__38344 = seq__38306_38339;
var G__38345 = chunk__38307_38340;
var G__38346 = count__38308_38341;
var G__38347 = (i__38309_38342 + (1));
seq__38306_38339 = G__38344;
chunk__38307_38340 = G__38345;
count__38308_38341 = G__38346;
i__38309_38342 = G__38347;
continue;
} else {
var temp__4425__auto___38348__$1 = cljs.core.seq.call(null,seq__38306_38339);
if(temp__4425__auto___38348__$1){
var seq__38306_38349__$1 = temp__4425__auto___38348__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38306_38349__$1)){
var c__26454__auto___38350 = cljs.core.chunk_first.call(null,seq__38306_38349__$1);
var G__38351 = cljs.core.chunk_rest.call(null,seq__38306_38349__$1);
var G__38352 = c__26454__auto___38350;
var G__38353 = cljs.core.count.call(null,c__26454__auto___38350);
var G__38354 = (0);
seq__38306_38339 = G__38351;
chunk__38307_38340 = G__38352;
count__38308_38341 = G__38353;
i__38309_38342 = G__38354;
continue;
} else {
var req_38355 = cljs.core.first.call(null,seq__38306_38349__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38355,prov);

var G__38356 = cljs.core.next.call(null,seq__38306_38349__$1);
var G__38357 = null;
var G__38358 = (0);
var G__38359 = (0);
seq__38306_38339 = G__38356;
chunk__38307_38340 = G__38357;
count__38308_38341 = G__38358;
i__38309_38342 = G__38359;
continue;
}
} else {
}
}
break;
}

var G__38360 = cljs.core.next.call(null,seq__38298__$1);
var G__38361 = null;
var G__38362 = (0);
var G__38363 = (0);
seq__38298 = G__38360;
chunk__38299 = G__38361;
count__38300 = G__38362;
i__38301 = G__38363;
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
var seq__38368_38372 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38369_38373 = null;
var count__38370_38374 = (0);
var i__38371_38375 = (0);
while(true){
if((i__38371_38375 < count__38370_38374)){
var ns_38376 = cljs.core._nth.call(null,chunk__38369_38373,i__38371_38375);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38376);

var G__38377 = seq__38368_38372;
var G__38378 = chunk__38369_38373;
var G__38379 = count__38370_38374;
var G__38380 = (i__38371_38375 + (1));
seq__38368_38372 = G__38377;
chunk__38369_38373 = G__38378;
count__38370_38374 = G__38379;
i__38371_38375 = G__38380;
continue;
} else {
var temp__4425__auto___38381 = cljs.core.seq.call(null,seq__38368_38372);
if(temp__4425__auto___38381){
var seq__38368_38382__$1 = temp__4425__auto___38381;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38368_38382__$1)){
var c__26454__auto___38383 = cljs.core.chunk_first.call(null,seq__38368_38382__$1);
var G__38384 = cljs.core.chunk_rest.call(null,seq__38368_38382__$1);
var G__38385 = c__26454__auto___38383;
var G__38386 = cljs.core.count.call(null,c__26454__auto___38383);
var G__38387 = (0);
seq__38368_38372 = G__38384;
chunk__38369_38373 = G__38385;
count__38370_38374 = G__38386;
i__38371_38375 = G__38387;
continue;
} else {
var ns_38388 = cljs.core.first.call(null,seq__38368_38382__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38388);

var G__38389 = cljs.core.next.call(null,seq__38368_38382__$1);
var G__38390 = null;
var G__38391 = (0);
var G__38392 = (0);
seq__38368_38372 = G__38389;
chunk__38369_38373 = G__38390;
count__38370_38374 = G__38391;
i__38371_38375 = G__38392;
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
goog.require_figwheel_backup_ = (function (){var or__25643__auto__ = goog.require__;
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
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
var G__38393__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38393 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38394__i = 0, G__38394__a = new Array(arguments.length -  0);
while (G__38394__i < G__38394__a.length) {G__38394__a[G__38394__i] = arguments[G__38394__i + 0]; ++G__38394__i;}
  args = new cljs.core.IndexedSeq(G__38394__a,0);
} 
return G__38393__delegate.call(this,args);};
G__38393.cljs$lang$maxFixedArity = 0;
G__38393.cljs$lang$applyTo = (function (arglist__38395){
var args = cljs.core.seq(arglist__38395);
return G__38393__delegate(args);
});
G__38393.cljs$core$IFn$_invoke$arity$variadic = G__38393__delegate;
return G__38393;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38397 = cljs.core._EQ_;
var expr__38398 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38397.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38398))){
var path_parts = ((function (pred__38397,expr__38398){
return (function (p1__38396_SHARP_){
return clojure.string.split.call(null,p1__38396_SHARP_,/[\/\\]/);
});})(pred__38397,expr__38398))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__38397,expr__38398){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e38400){if((e38400 instanceof Error)){
var e = e38400;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38400;

}
}})());
});
;})(path_parts,sep,root,pred__38397,expr__38398))
} else {
if(cljs.core.truth_(pred__38397.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38398))){
return ((function (pred__38397,expr__38398){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__38397,expr__38398){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__38397,expr__38398))
);

return deferred.addErrback(((function (deferred,pred__38397,expr__38398){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__38397,expr__38398))
);
});
;})(pred__38397,expr__38398))
} else {
return ((function (pred__38397,expr__38398){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__38397,expr__38398))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38401,callback){
var map__38404 = p__38401;
var map__38404__$1 = ((((!((map__38404 == null)))?((((map__38404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38404):map__38404);
var file_msg = map__38404__$1;
var request_url = cljs.core.get.call(null,map__38404__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__38404,map__38404__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38404,map__38404__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto__){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto__){
return (function (state_38428){
var state_val_38429 = (state_38428[(1)]);
if((state_val_38429 === (7))){
var inst_38424 = (state_38428[(2)]);
var state_38428__$1 = state_38428;
var statearr_38430_38450 = state_38428__$1;
(statearr_38430_38450[(2)] = inst_38424);

(statearr_38430_38450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (1))){
var state_38428__$1 = state_38428;
var statearr_38431_38451 = state_38428__$1;
(statearr_38431_38451[(2)] = null);

(statearr_38431_38451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (4))){
var inst_38408 = (state_38428[(7)]);
var inst_38408__$1 = (state_38428[(2)]);
var state_38428__$1 = (function (){var statearr_38432 = state_38428;
(statearr_38432[(7)] = inst_38408__$1);

return statearr_38432;
})();
if(cljs.core.truth_(inst_38408__$1)){
var statearr_38433_38452 = state_38428__$1;
(statearr_38433_38452[(1)] = (5));

} else {
var statearr_38434_38453 = state_38428__$1;
(statearr_38434_38453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (6))){
var state_38428__$1 = state_38428;
var statearr_38435_38454 = state_38428__$1;
(statearr_38435_38454[(2)] = null);

(statearr_38435_38454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (3))){
var inst_38426 = (state_38428[(2)]);
var state_38428__$1 = state_38428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38428__$1,inst_38426);
} else {
if((state_val_38429 === (2))){
var state_38428__$1 = state_38428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38428__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38429 === (11))){
var inst_38420 = (state_38428[(2)]);
var state_38428__$1 = (function (){var statearr_38436 = state_38428;
(statearr_38436[(8)] = inst_38420);

return statearr_38436;
})();
var statearr_38437_38455 = state_38428__$1;
(statearr_38437_38455[(2)] = null);

(statearr_38437_38455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (9))){
var inst_38412 = (state_38428[(9)]);
var inst_38414 = (state_38428[(10)]);
var inst_38416 = inst_38414.call(null,inst_38412);
var state_38428__$1 = state_38428;
var statearr_38438_38456 = state_38428__$1;
(statearr_38438_38456[(2)] = inst_38416);

(statearr_38438_38456[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (5))){
var inst_38408 = (state_38428[(7)]);
var inst_38410 = figwheel.client.file_reloading.blocking_load.call(null,inst_38408);
var state_38428__$1 = state_38428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38428__$1,(8),inst_38410);
} else {
if((state_val_38429 === (10))){
var inst_38412 = (state_38428[(9)]);
var inst_38418 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38412);
var state_38428__$1 = state_38428;
var statearr_38439_38457 = state_38428__$1;
(statearr_38439_38457[(2)] = inst_38418);

(statearr_38439_38457[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38429 === (8))){
var inst_38408 = (state_38428[(7)]);
var inst_38414 = (state_38428[(10)]);
var inst_38412 = (state_38428[(2)]);
var inst_38413 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38414__$1 = cljs.core.get.call(null,inst_38413,inst_38408);
var state_38428__$1 = (function (){var statearr_38440 = state_38428;
(statearr_38440[(9)] = inst_38412);

(statearr_38440[(10)] = inst_38414__$1);

return statearr_38440;
})();
if(cljs.core.truth_(inst_38414__$1)){
var statearr_38441_38458 = state_38428__$1;
(statearr_38441_38458[(1)] = (9));

} else {
var statearr_38442_38459 = state_38428__$1;
(statearr_38442_38459[(1)] = (10));

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
});})(c__29774__auto__))
;
return ((function (switch__29662__auto__,c__29774__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29663__auto__ = null;
var figwheel$client$file_reloading$state_machine__29663__auto____0 = (function (){
var statearr_38446 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38446[(0)] = figwheel$client$file_reloading$state_machine__29663__auto__);

(statearr_38446[(1)] = (1));

return statearr_38446;
});
var figwheel$client$file_reloading$state_machine__29663__auto____1 = (function (state_38428){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_38428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e38447){if((e38447 instanceof Object)){
var ex__29666__auto__ = e38447;
var statearr_38448_38460 = state_38428;
(statearr_38448_38460[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38461 = state_38428;
state_38428 = G__38461;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29663__auto__ = function(state_38428){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29663__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29663__auto____1.call(this,state_38428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29663__auto____0;
figwheel$client$file_reloading$state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29663__auto____1;
return figwheel$client$file_reloading$state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto__))
})();
var state__29776__auto__ = (function (){var statearr_38449 = f__29775__auto__.call(null);
(statearr_38449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto__);

return statearr_38449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto__))
);

return c__29774__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38462,callback){
var map__38465 = p__38462;
var map__38465__$1 = ((((!((map__38465 == null)))?((((map__38465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38465):map__38465);
var file_msg = map__38465__$1;
var namespace = cljs.core.get.call(null,map__38465__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38465,map__38465__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38465,map__38465__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38467){
var map__38470 = p__38467;
var map__38470__$1 = ((((!((map__38470 == null)))?((((map__38470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38470):map__38470);
var file_msg = map__38470__$1;
var namespace = cljs.core.get.call(null,map__38470__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25631__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25631__auto__){
var or__25643__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
} else {
var or__25643__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25643__auto____$1)){
return or__25643__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25631__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38472,callback){
var map__38475 = p__38472;
var map__38475__$1 = ((((!((map__38475 == null)))?((((map__38475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38475):map__38475);
var file_msg = map__38475__$1;
var request_url = cljs.core.get.call(null,map__38475__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38475__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29774__auto___38563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto___38563,out){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto___38563,out){
return (function (state_38545){
var state_val_38546 = (state_38545[(1)]);
if((state_val_38546 === (1))){
var inst_38523 = cljs.core.nth.call(null,files,(0),null);
var inst_38524 = cljs.core.nthnext.call(null,files,(1));
var inst_38525 = files;
var state_38545__$1 = (function (){var statearr_38547 = state_38545;
(statearr_38547[(7)] = inst_38523);

(statearr_38547[(8)] = inst_38525);

(statearr_38547[(9)] = inst_38524);

return statearr_38547;
})();
var statearr_38548_38564 = state_38545__$1;
(statearr_38548_38564[(2)] = null);

(statearr_38548_38564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (2))){
var inst_38525 = (state_38545[(8)]);
var inst_38528 = (state_38545[(10)]);
var inst_38528__$1 = cljs.core.nth.call(null,inst_38525,(0),null);
var inst_38529 = cljs.core.nthnext.call(null,inst_38525,(1));
var inst_38530 = (inst_38528__$1 == null);
var inst_38531 = cljs.core.not.call(null,inst_38530);
var state_38545__$1 = (function (){var statearr_38549 = state_38545;
(statearr_38549[(10)] = inst_38528__$1);

(statearr_38549[(11)] = inst_38529);

return statearr_38549;
})();
if(inst_38531){
var statearr_38550_38565 = state_38545__$1;
(statearr_38550_38565[(1)] = (4));

} else {
var statearr_38551_38566 = state_38545__$1;
(statearr_38551_38566[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (3))){
var inst_38543 = (state_38545[(2)]);
var state_38545__$1 = state_38545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38545__$1,inst_38543);
} else {
if((state_val_38546 === (4))){
var inst_38528 = (state_38545[(10)]);
var inst_38533 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38528);
var state_38545__$1 = state_38545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38545__$1,(7),inst_38533);
} else {
if((state_val_38546 === (5))){
var inst_38539 = cljs.core.async.close_BANG_.call(null,out);
var state_38545__$1 = state_38545;
var statearr_38552_38567 = state_38545__$1;
(statearr_38552_38567[(2)] = inst_38539);

(statearr_38552_38567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (6))){
var inst_38541 = (state_38545[(2)]);
var state_38545__$1 = state_38545;
var statearr_38553_38568 = state_38545__$1;
(statearr_38553_38568[(2)] = inst_38541);

(statearr_38553_38568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38546 === (7))){
var inst_38529 = (state_38545[(11)]);
var inst_38535 = (state_38545[(2)]);
var inst_38536 = cljs.core.async.put_BANG_.call(null,out,inst_38535);
var inst_38525 = inst_38529;
var state_38545__$1 = (function (){var statearr_38554 = state_38545;
(statearr_38554[(8)] = inst_38525);

(statearr_38554[(12)] = inst_38536);

return statearr_38554;
})();
var statearr_38555_38569 = state_38545__$1;
(statearr_38555_38569[(2)] = null);

(statearr_38555_38569[(1)] = (2));


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
});})(c__29774__auto___38563,out))
;
return ((function (switch__29662__auto__,c__29774__auto___38563,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29663__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29663__auto____0 = (function (){
var statearr_38559 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38559[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29663__auto__);

(statearr_38559[(1)] = (1));

return statearr_38559;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29663__auto____1 = (function (state_38545){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_38545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e38560){if((e38560 instanceof Object)){
var ex__29666__auto__ = e38560;
var statearr_38561_38570 = state_38545;
(statearr_38561_38570[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38571 = state_38545;
state_38545 = G__38571;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29663__auto__ = function(state_38545){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29663__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29663__auto____1.call(this,state_38545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29663__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29663__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto___38563,out))
})();
var state__29776__auto__ = (function (){var statearr_38562 = f__29775__auto__.call(null);
(statearr_38562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___38563);

return statearr_38562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto___38563,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38572,opts){
var map__38576 = p__38572;
var map__38576__$1 = ((((!((map__38576 == null)))?((((map__38576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38576):map__38576);
var eval_body__$1 = cljs.core.get.call(null,map__38576__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38576__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25631__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25631__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25631__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e38578){var e = e38578;
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
return (function (p1__38579_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38579_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__38584){
var vec__38585 = p__38584;
var k = cljs.core.nth.call(null,vec__38585,(0),null);
var v = cljs.core.nth.call(null,vec__38585,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38586){
var vec__38587 = p__38586;
var k = cljs.core.nth.call(null,vec__38587,(0),null);
var v = cljs.core.nth.call(null,vec__38587,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38591,p__38592){
var map__38839 = p__38591;
var map__38839__$1 = ((((!((map__38839 == null)))?((((map__38839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38839):map__38839);
var opts = map__38839__$1;
var before_jsload = cljs.core.get.call(null,map__38839__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__38839__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__38839__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__38840 = p__38592;
var map__38840__$1 = ((((!((map__38840 == null)))?((((map__38840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38840):map__38840);
var msg = map__38840__$1;
var files = cljs.core.get.call(null,map__38840__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__38840__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__38840__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto__,map__38839,map__38839__$1,opts,before_jsload,on_jsload,reload_dependents,map__38840,map__38840__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto__,map__38839,map__38839__$1,opts,before_jsload,on_jsload,reload_dependents,map__38840,map__38840__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_38993){
var state_val_38994 = (state_38993[(1)]);
if((state_val_38994 === (7))){
var inst_38856 = (state_38993[(7)]);
var inst_38857 = (state_38993[(8)]);
var inst_38854 = (state_38993[(9)]);
var inst_38855 = (state_38993[(10)]);
var inst_38862 = cljs.core._nth.call(null,inst_38855,inst_38857);
var inst_38863 = figwheel.client.file_reloading.eval_body.call(null,inst_38862,opts);
var inst_38864 = (inst_38857 + (1));
var tmp38995 = inst_38856;
var tmp38996 = inst_38854;
var tmp38997 = inst_38855;
var inst_38854__$1 = tmp38996;
var inst_38855__$1 = tmp38997;
var inst_38856__$1 = tmp38995;
var inst_38857__$1 = inst_38864;
var state_38993__$1 = (function (){var statearr_38998 = state_38993;
(statearr_38998[(7)] = inst_38856__$1);

(statearr_38998[(8)] = inst_38857__$1);

(statearr_38998[(9)] = inst_38854__$1);

(statearr_38998[(10)] = inst_38855__$1);

(statearr_38998[(11)] = inst_38863);

return statearr_38998;
})();
var statearr_38999_39085 = state_38993__$1;
(statearr_38999_39085[(2)] = null);

(statearr_38999_39085[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (20))){
var inst_38897 = (state_38993[(12)]);
var inst_38905 = figwheel.client.file_reloading.sort_files.call(null,inst_38897);
var state_38993__$1 = state_38993;
var statearr_39000_39086 = state_38993__$1;
(statearr_39000_39086[(2)] = inst_38905);

(statearr_39000_39086[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (27))){
var state_38993__$1 = state_38993;
var statearr_39001_39087 = state_38993__$1;
(statearr_39001_39087[(2)] = null);

(statearr_39001_39087[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (1))){
var inst_38846 = (state_38993[(13)]);
var inst_38843 = before_jsload.call(null,files);
var inst_38844 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_38845 = (function (){return ((function (inst_38846,inst_38843,inst_38844,state_val_38994,c__29774__auto__,map__38839,map__38839__$1,opts,before_jsload,on_jsload,reload_dependents,map__38840,map__38840__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38588_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38588_SHARP_);
});
;})(inst_38846,inst_38843,inst_38844,state_val_38994,c__29774__auto__,map__38839,map__38839__$1,opts,before_jsload,on_jsload,reload_dependents,map__38840,map__38840__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38846__$1 = cljs.core.filter.call(null,inst_38845,files);
var inst_38847 = cljs.core.not_empty.call(null,inst_38846__$1);
var state_38993__$1 = (function (){var statearr_39002 = state_38993;
(statearr_39002[(13)] = inst_38846__$1);

(statearr_39002[(14)] = inst_38843);

(statearr_39002[(15)] = inst_38844);

return statearr_39002;
})();
if(cljs.core.truth_(inst_38847)){
var statearr_39003_39088 = state_38993__$1;
(statearr_39003_39088[(1)] = (2));

} else {
var statearr_39004_39089 = state_38993__$1;
(statearr_39004_39089[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (24))){
var state_38993__$1 = state_38993;
var statearr_39005_39090 = state_38993__$1;
(statearr_39005_39090[(2)] = null);

(statearr_39005_39090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (39))){
var inst_38947 = (state_38993[(16)]);
var state_38993__$1 = state_38993;
var statearr_39006_39091 = state_38993__$1;
(statearr_39006_39091[(2)] = inst_38947);

(statearr_39006_39091[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (46))){
var inst_38988 = (state_38993[(2)]);
var state_38993__$1 = state_38993;
var statearr_39007_39092 = state_38993__$1;
(statearr_39007_39092[(2)] = inst_38988);

(statearr_39007_39092[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (4))){
var inst_38891 = (state_38993[(2)]);
var inst_38892 = cljs.core.List.EMPTY;
var inst_38893 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_38892);
var inst_38894 = (function (){return ((function (inst_38891,inst_38892,inst_38893,state_val_38994,c__29774__auto__,map__38839,map__38839__$1,opts,before_jsload,on_jsload,reload_dependents,map__38840,map__38840__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38589_SHARP_){
var and__25631__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38589_SHARP_);
if(cljs.core.truth_(and__25631__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38589_SHARP_));
} else {
return and__25631__auto__;
}
});
;})(inst_38891,inst_38892,inst_38893,state_val_38994,c__29774__auto__,map__38839,map__38839__$1,opts,before_jsload,on_jsload,reload_dependents,map__38840,map__38840__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38895 = cljs.core.filter.call(null,inst_38894,files);
var inst_38896 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_38897 = cljs.core.concat.call(null,inst_38895,inst_38896);
var state_38993__$1 = (function (){var statearr_39008 = state_38993;
(statearr_39008[(12)] = inst_38897);

(statearr_39008[(17)] = inst_38891);

(statearr_39008[(18)] = inst_38893);

return statearr_39008;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39009_39093 = state_38993__$1;
(statearr_39009_39093[(1)] = (16));

} else {
var statearr_39010_39094 = state_38993__$1;
(statearr_39010_39094[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (15))){
var inst_38881 = (state_38993[(2)]);
var state_38993__$1 = state_38993;
var statearr_39011_39095 = state_38993__$1;
(statearr_39011_39095[(2)] = inst_38881);

(statearr_39011_39095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (21))){
var inst_38907 = (state_38993[(19)]);
var inst_38907__$1 = (state_38993[(2)]);
var inst_38908 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_38907__$1);
var state_38993__$1 = (function (){var statearr_39012 = state_38993;
(statearr_39012[(19)] = inst_38907__$1);

return statearr_39012;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38993__$1,(22),inst_38908);
} else {
if((state_val_38994 === (31))){
var inst_38991 = (state_38993[(2)]);
var state_38993__$1 = state_38993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38993__$1,inst_38991);
} else {
if((state_val_38994 === (32))){
var inst_38947 = (state_38993[(16)]);
var inst_38952 = inst_38947.cljs$lang$protocol_mask$partition0$;
var inst_38953 = (inst_38952 & (64));
var inst_38954 = inst_38947.cljs$core$ISeq$;
var inst_38955 = (inst_38953) || (inst_38954);
var state_38993__$1 = state_38993;
if(cljs.core.truth_(inst_38955)){
var statearr_39013_39096 = state_38993__$1;
(statearr_39013_39096[(1)] = (35));

} else {
var statearr_39014_39097 = state_38993__$1;
(statearr_39014_39097[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (40))){
var inst_38968 = (state_38993[(20)]);
var inst_38967 = (state_38993[(2)]);
var inst_38968__$1 = cljs.core.get.call(null,inst_38967,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_38969 = cljs.core.get.call(null,inst_38967,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_38970 = cljs.core.not_empty.call(null,inst_38968__$1);
var state_38993__$1 = (function (){var statearr_39015 = state_38993;
(statearr_39015[(21)] = inst_38969);

(statearr_39015[(20)] = inst_38968__$1);

return statearr_39015;
})();
if(cljs.core.truth_(inst_38970)){
var statearr_39016_39098 = state_38993__$1;
(statearr_39016_39098[(1)] = (41));

} else {
var statearr_39017_39099 = state_38993__$1;
(statearr_39017_39099[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (33))){
var state_38993__$1 = state_38993;
var statearr_39018_39100 = state_38993__$1;
(statearr_39018_39100[(2)] = false);

(statearr_39018_39100[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (13))){
var inst_38867 = (state_38993[(22)]);
var inst_38871 = cljs.core.chunk_first.call(null,inst_38867);
var inst_38872 = cljs.core.chunk_rest.call(null,inst_38867);
var inst_38873 = cljs.core.count.call(null,inst_38871);
var inst_38854 = inst_38872;
var inst_38855 = inst_38871;
var inst_38856 = inst_38873;
var inst_38857 = (0);
var state_38993__$1 = (function (){var statearr_39019 = state_38993;
(statearr_39019[(7)] = inst_38856);

(statearr_39019[(8)] = inst_38857);

(statearr_39019[(9)] = inst_38854);

(statearr_39019[(10)] = inst_38855);

return statearr_39019;
})();
var statearr_39020_39101 = state_38993__$1;
(statearr_39020_39101[(2)] = null);

(statearr_39020_39101[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (22))){
var inst_38915 = (state_38993[(23)]);
var inst_38911 = (state_38993[(24)]);
var inst_38910 = (state_38993[(25)]);
var inst_38907 = (state_38993[(19)]);
var inst_38910__$1 = (state_38993[(2)]);
var inst_38911__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38910__$1);
var inst_38912 = (function (){var all_files = inst_38907;
var res_SINGLEQUOTE_ = inst_38910__$1;
var res = inst_38911__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_38915,inst_38911,inst_38910,inst_38907,inst_38910__$1,inst_38911__$1,state_val_38994,c__29774__auto__,map__38839,map__38839__$1,opts,before_jsload,on_jsload,reload_dependents,map__38840,map__38840__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38590_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38590_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_38915,inst_38911,inst_38910,inst_38907,inst_38910__$1,inst_38911__$1,state_val_38994,c__29774__auto__,map__38839,map__38839__$1,opts,before_jsload,on_jsload,reload_dependents,map__38840,map__38840__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38913 = cljs.core.filter.call(null,inst_38912,inst_38910__$1);
var inst_38914 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_38915__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38914);
var inst_38916 = cljs.core.not_empty.call(null,inst_38915__$1);
var state_38993__$1 = (function (){var statearr_39021 = state_38993;
(statearr_39021[(23)] = inst_38915__$1);

(statearr_39021[(24)] = inst_38911__$1);

(statearr_39021[(26)] = inst_38913);

(statearr_39021[(25)] = inst_38910__$1);

return statearr_39021;
})();
if(cljs.core.truth_(inst_38916)){
var statearr_39022_39102 = state_38993__$1;
(statearr_39022_39102[(1)] = (23));

} else {
var statearr_39023_39103 = state_38993__$1;
(statearr_39023_39103[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (36))){
var state_38993__$1 = state_38993;
var statearr_39024_39104 = state_38993__$1;
(statearr_39024_39104[(2)] = false);

(statearr_39024_39104[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (41))){
var inst_38968 = (state_38993[(20)]);
var inst_38972 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_38973 = cljs.core.map.call(null,inst_38972,inst_38968);
var inst_38974 = cljs.core.pr_str.call(null,inst_38973);
var inst_38975 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_38974)].join('');
var inst_38976 = figwheel.client.utils.log.call(null,inst_38975);
var state_38993__$1 = state_38993;
var statearr_39025_39105 = state_38993__$1;
(statearr_39025_39105[(2)] = inst_38976);

(statearr_39025_39105[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (43))){
var inst_38969 = (state_38993[(21)]);
var inst_38979 = (state_38993[(2)]);
var inst_38980 = cljs.core.not_empty.call(null,inst_38969);
var state_38993__$1 = (function (){var statearr_39026 = state_38993;
(statearr_39026[(27)] = inst_38979);

return statearr_39026;
})();
if(cljs.core.truth_(inst_38980)){
var statearr_39027_39106 = state_38993__$1;
(statearr_39027_39106[(1)] = (44));

} else {
var statearr_39028_39107 = state_38993__$1;
(statearr_39028_39107[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (29))){
var inst_38915 = (state_38993[(23)]);
var inst_38911 = (state_38993[(24)]);
var inst_38947 = (state_38993[(16)]);
var inst_38913 = (state_38993[(26)]);
var inst_38910 = (state_38993[(25)]);
var inst_38907 = (state_38993[(19)]);
var inst_38943 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_38946 = (function (){var all_files = inst_38907;
var res_SINGLEQUOTE_ = inst_38910;
var res = inst_38911;
var files_not_loaded = inst_38913;
var dependencies_that_loaded = inst_38915;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38915,inst_38911,inst_38947,inst_38913,inst_38910,inst_38907,inst_38943,state_val_38994,c__29774__auto__,map__38839,map__38839__$1,opts,before_jsload,on_jsload,reload_dependents,map__38840,map__38840__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38945){
var map__39029 = p__38945;
var map__39029__$1 = ((((!((map__39029 == null)))?((((map__39029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39029):map__39029);
var namespace = cljs.core.get.call(null,map__39029__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38915,inst_38911,inst_38947,inst_38913,inst_38910,inst_38907,inst_38943,state_val_38994,c__29774__auto__,map__38839,map__38839__$1,opts,before_jsload,on_jsload,reload_dependents,map__38840,map__38840__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38947__$1 = cljs.core.group_by.call(null,inst_38946,inst_38913);
var inst_38949 = (inst_38947__$1 == null);
var inst_38950 = cljs.core.not.call(null,inst_38949);
var state_38993__$1 = (function (){var statearr_39031 = state_38993;
(statearr_39031[(16)] = inst_38947__$1);

(statearr_39031[(28)] = inst_38943);

return statearr_39031;
})();
if(inst_38950){
var statearr_39032_39108 = state_38993__$1;
(statearr_39032_39108[(1)] = (32));

} else {
var statearr_39033_39109 = state_38993__$1;
(statearr_39033_39109[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (44))){
var inst_38969 = (state_38993[(21)]);
var inst_38982 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38969);
var inst_38983 = cljs.core.pr_str.call(null,inst_38982);
var inst_38984 = [cljs.core.str("not required: "),cljs.core.str(inst_38983)].join('');
var inst_38985 = figwheel.client.utils.log.call(null,inst_38984);
var state_38993__$1 = state_38993;
var statearr_39034_39110 = state_38993__$1;
(statearr_39034_39110[(2)] = inst_38985);

(statearr_39034_39110[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (6))){
var inst_38888 = (state_38993[(2)]);
var state_38993__$1 = state_38993;
var statearr_39035_39111 = state_38993__$1;
(statearr_39035_39111[(2)] = inst_38888);

(statearr_39035_39111[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (28))){
var inst_38913 = (state_38993[(26)]);
var inst_38940 = (state_38993[(2)]);
var inst_38941 = cljs.core.not_empty.call(null,inst_38913);
var state_38993__$1 = (function (){var statearr_39036 = state_38993;
(statearr_39036[(29)] = inst_38940);

return statearr_39036;
})();
if(cljs.core.truth_(inst_38941)){
var statearr_39037_39112 = state_38993__$1;
(statearr_39037_39112[(1)] = (29));

} else {
var statearr_39038_39113 = state_38993__$1;
(statearr_39038_39113[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (25))){
var inst_38911 = (state_38993[(24)]);
var inst_38927 = (state_38993[(2)]);
var inst_38928 = cljs.core.not_empty.call(null,inst_38911);
var state_38993__$1 = (function (){var statearr_39039 = state_38993;
(statearr_39039[(30)] = inst_38927);

return statearr_39039;
})();
if(cljs.core.truth_(inst_38928)){
var statearr_39040_39114 = state_38993__$1;
(statearr_39040_39114[(1)] = (26));

} else {
var statearr_39041_39115 = state_38993__$1;
(statearr_39041_39115[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (34))){
var inst_38962 = (state_38993[(2)]);
var state_38993__$1 = state_38993;
if(cljs.core.truth_(inst_38962)){
var statearr_39042_39116 = state_38993__$1;
(statearr_39042_39116[(1)] = (38));

} else {
var statearr_39043_39117 = state_38993__$1;
(statearr_39043_39117[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (17))){
var state_38993__$1 = state_38993;
var statearr_39044_39118 = state_38993__$1;
(statearr_39044_39118[(2)] = recompile_dependents);

(statearr_39044_39118[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (3))){
var state_38993__$1 = state_38993;
var statearr_39045_39119 = state_38993__$1;
(statearr_39045_39119[(2)] = null);

(statearr_39045_39119[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (12))){
var inst_38884 = (state_38993[(2)]);
var state_38993__$1 = state_38993;
var statearr_39046_39120 = state_38993__$1;
(statearr_39046_39120[(2)] = inst_38884);

(statearr_39046_39120[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (2))){
var inst_38846 = (state_38993[(13)]);
var inst_38853 = cljs.core.seq.call(null,inst_38846);
var inst_38854 = inst_38853;
var inst_38855 = null;
var inst_38856 = (0);
var inst_38857 = (0);
var state_38993__$1 = (function (){var statearr_39047 = state_38993;
(statearr_39047[(7)] = inst_38856);

(statearr_39047[(8)] = inst_38857);

(statearr_39047[(9)] = inst_38854);

(statearr_39047[(10)] = inst_38855);

return statearr_39047;
})();
var statearr_39048_39121 = state_38993__$1;
(statearr_39048_39121[(2)] = null);

(statearr_39048_39121[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (23))){
var inst_38915 = (state_38993[(23)]);
var inst_38911 = (state_38993[(24)]);
var inst_38913 = (state_38993[(26)]);
var inst_38910 = (state_38993[(25)]);
var inst_38907 = (state_38993[(19)]);
var inst_38918 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_38920 = (function (){var all_files = inst_38907;
var res_SINGLEQUOTE_ = inst_38910;
var res = inst_38911;
var files_not_loaded = inst_38913;
var dependencies_that_loaded = inst_38915;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38915,inst_38911,inst_38913,inst_38910,inst_38907,inst_38918,state_val_38994,c__29774__auto__,map__38839,map__38839__$1,opts,before_jsload,on_jsload,reload_dependents,map__38840,map__38840__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38919){
var map__39049 = p__38919;
var map__39049__$1 = ((((!((map__39049 == null)))?((((map__39049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39049):map__39049);
var request_url = cljs.core.get.call(null,map__39049__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38915,inst_38911,inst_38913,inst_38910,inst_38907,inst_38918,state_val_38994,c__29774__auto__,map__38839,map__38839__$1,opts,before_jsload,on_jsload,reload_dependents,map__38840,map__38840__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38921 = cljs.core.reverse.call(null,inst_38915);
var inst_38922 = cljs.core.map.call(null,inst_38920,inst_38921);
var inst_38923 = cljs.core.pr_str.call(null,inst_38922);
var inst_38924 = figwheel.client.utils.log.call(null,inst_38923);
var state_38993__$1 = (function (){var statearr_39051 = state_38993;
(statearr_39051[(31)] = inst_38918);

return statearr_39051;
})();
var statearr_39052_39122 = state_38993__$1;
(statearr_39052_39122[(2)] = inst_38924);

(statearr_39052_39122[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (35))){
var state_38993__$1 = state_38993;
var statearr_39053_39123 = state_38993__$1;
(statearr_39053_39123[(2)] = true);

(statearr_39053_39123[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (19))){
var inst_38897 = (state_38993[(12)]);
var inst_38903 = figwheel.client.file_reloading.expand_files.call(null,inst_38897);
var state_38993__$1 = state_38993;
var statearr_39054_39124 = state_38993__$1;
(statearr_39054_39124[(2)] = inst_38903);

(statearr_39054_39124[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (11))){
var state_38993__$1 = state_38993;
var statearr_39055_39125 = state_38993__$1;
(statearr_39055_39125[(2)] = null);

(statearr_39055_39125[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (9))){
var inst_38886 = (state_38993[(2)]);
var state_38993__$1 = state_38993;
var statearr_39056_39126 = state_38993__$1;
(statearr_39056_39126[(2)] = inst_38886);

(statearr_39056_39126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (5))){
var inst_38856 = (state_38993[(7)]);
var inst_38857 = (state_38993[(8)]);
var inst_38859 = (inst_38857 < inst_38856);
var inst_38860 = inst_38859;
var state_38993__$1 = state_38993;
if(cljs.core.truth_(inst_38860)){
var statearr_39057_39127 = state_38993__$1;
(statearr_39057_39127[(1)] = (7));

} else {
var statearr_39058_39128 = state_38993__$1;
(statearr_39058_39128[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (14))){
var inst_38867 = (state_38993[(22)]);
var inst_38876 = cljs.core.first.call(null,inst_38867);
var inst_38877 = figwheel.client.file_reloading.eval_body.call(null,inst_38876,opts);
var inst_38878 = cljs.core.next.call(null,inst_38867);
var inst_38854 = inst_38878;
var inst_38855 = null;
var inst_38856 = (0);
var inst_38857 = (0);
var state_38993__$1 = (function (){var statearr_39059 = state_38993;
(statearr_39059[(7)] = inst_38856);

(statearr_39059[(8)] = inst_38857);

(statearr_39059[(9)] = inst_38854);

(statearr_39059[(10)] = inst_38855);

(statearr_39059[(32)] = inst_38877);

return statearr_39059;
})();
var statearr_39060_39129 = state_38993__$1;
(statearr_39060_39129[(2)] = null);

(statearr_39060_39129[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (45))){
var state_38993__$1 = state_38993;
var statearr_39061_39130 = state_38993__$1;
(statearr_39061_39130[(2)] = null);

(statearr_39061_39130[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (26))){
var inst_38915 = (state_38993[(23)]);
var inst_38911 = (state_38993[(24)]);
var inst_38913 = (state_38993[(26)]);
var inst_38910 = (state_38993[(25)]);
var inst_38907 = (state_38993[(19)]);
var inst_38930 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_38932 = (function (){var all_files = inst_38907;
var res_SINGLEQUOTE_ = inst_38910;
var res = inst_38911;
var files_not_loaded = inst_38913;
var dependencies_that_loaded = inst_38915;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38915,inst_38911,inst_38913,inst_38910,inst_38907,inst_38930,state_val_38994,c__29774__auto__,map__38839,map__38839__$1,opts,before_jsload,on_jsload,reload_dependents,map__38840,map__38840__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38931){
var map__39062 = p__38931;
var map__39062__$1 = ((((!((map__39062 == null)))?((((map__39062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39062):map__39062);
var namespace = cljs.core.get.call(null,map__39062__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39062__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38915,inst_38911,inst_38913,inst_38910,inst_38907,inst_38930,state_val_38994,c__29774__auto__,map__38839,map__38839__$1,opts,before_jsload,on_jsload,reload_dependents,map__38840,map__38840__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38933 = cljs.core.map.call(null,inst_38932,inst_38911);
var inst_38934 = cljs.core.pr_str.call(null,inst_38933);
var inst_38935 = figwheel.client.utils.log.call(null,inst_38934);
var inst_38936 = (function (){var all_files = inst_38907;
var res_SINGLEQUOTE_ = inst_38910;
var res = inst_38911;
var files_not_loaded = inst_38913;
var dependencies_that_loaded = inst_38915;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38915,inst_38911,inst_38913,inst_38910,inst_38907,inst_38930,inst_38932,inst_38933,inst_38934,inst_38935,state_val_38994,c__29774__auto__,map__38839,map__38839__$1,opts,before_jsload,on_jsload,reload_dependents,map__38840,map__38840__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38915,inst_38911,inst_38913,inst_38910,inst_38907,inst_38930,inst_38932,inst_38933,inst_38934,inst_38935,state_val_38994,c__29774__auto__,map__38839,map__38839__$1,opts,before_jsload,on_jsload,reload_dependents,map__38840,map__38840__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38937 = setTimeout(inst_38936,(10));
var state_38993__$1 = (function (){var statearr_39064 = state_38993;
(statearr_39064[(33)] = inst_38935);

(statearr_39064[(34)] = inst_38930);

return statearr_39064;
})();
var statearr_39065_39131 = state_38993__$1;
(statearr_39065_39131[(2)] = inst_38937);

(statearr_39065_39131[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (16))){
var state_38993__$1 = state_38993;
var statearr_39066_39132 = state_38993__$1;
(statearr_39066_39132[(2)] = reload_dependents);

(statearr_39066_39132[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (38))){
var inst_38947 = (state_38993[(16)]);
var inst_38964 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38947);
var state_38993__$1 = state_38993;
var statearr_39067_39133 = state_38993__$1;
(statearr_39067_39133[(2)] = inst_38964);

(statearr_39067_39133[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (30))){
var state_38993__$1 = state_38993;
var statearr_39068_39134 = state_38993__$1;
(statearr_39068_39134[(2)] = null);

(statearr_39068_39134[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (10))){
var inst_38867 = (state_38993[(22)]);
var inst_38869 = cljs.core.chunked_seq_QMARK_.call(null,inst_38867);
var state_38993__$1 = state_38993;
if(inst_38869){
var statearr_39069_39135 = state_38993__$1;
(statearr_39069_39135[(1)] = (13));

} else {
var statearr_39070_39136 = state_38993__$1;
(statearr_39070_39136[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (18))){
var inst_38901 = (state_38993[(2)]);
var state_38993__$1 = state_38993;
if(cljs.core.truth_(inst_38901)){
var statearr_39071_39137 = state_38993__$1;
(statearr_39071_39137[(1)] = (19));

} else {
var statearr_39072_39138 = state_38993__$1;
(statearr_39072_39138[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (42))){
var state_38993__$1 = state_38993;
var statearr_39073_39139 = state_38993__$1;
(statearr_39073_39139[(2)] = null);

(statearr_39073_39139[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (37))){
var inst_38959 = (state_38993[(2)]);
var state_38993__$1 = state_38993;
var statearr_39074_39140 = state_38993__$1;
(statearr_39074_39140[(2)] = inst_38959);

(statearr_39074_39140[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38994 === (8))){
var inst_38854 = (state_38993[(9)]);
var inst_38867 = (state_38993[(22)]);
var inst_38867__$1 = cljs.core.seq.call(null,inst_38854);
var state_38993__$1 = (function (){var statearr_39075 = state_38993;
(statearr_39075[(22)] = inst_38867__$1);

return statearr_39075;
})();
if(inst_38867__$1){
var statearr_39076_39141 = state_38993__$1;
(statearr_39076_39141[(1)] = (10));

} else {
var statearr_39077_39142 = state_38993__$1;
(statearr_39077_39142[(1)] = (11));

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
});})(c__29774__auto__,map__38839,map__38839__$1,opts,before_jsload,on_jsload,reload_dependents,map__38840,map__38840__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29662__auto__,c__29774__auto__,map__38839,map__38839__$1,opts,before_jsload,on_jsload,reload_dependents,map__38840,map__38840__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29663__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29663__auto____0 = (function (){
var statearr_39081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39081[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29663__auto__);

(statearr_39081[(1)] = (1));

return statearr_39081;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29663__auto____1 = (function (state_38993){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_38993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e39082){if((e39082 instanceof Object)){
var ex__29666__auto__ = e39082;
var statearr_39083_39143 = state_38993;
(statearr_39083_39143[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39144 = state_38993;
state_38993 = G__39144;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29663__auto__ = function(state_38993){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29663__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29663__auto____1.call(this,state_38993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29663__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29663__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto__,map__38839,map__38839__$1,opts,before_jsload,on_jsload,reload_dependents,map__38840,map__38840__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29776__auto__ = (function (){var statearr_39084 = f__29775__auto__.call(null);
(statearr_39084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto__);

return statearr_39084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto__,map__38839,map__38839__$1,opts,before_jsload,on_jsload,reload_dependents,map__38840,map__38840__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29774__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39147,link){
var map__39150 = p__39147;
var map__39150__$1 = ((((!((map__39150 == null)))?((((map__39150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39150):map__39150);
var file = cljs.core.get.call(null,map__39150__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__39150,map__39150__$1,file){
return (function (p1__39145_SHARP_,p2__39146_SHARP_){
if(cljs.core._EQ_.call(null,p1__39145_SHARP_,p2__39146_SHARP_)){
return p1__39145_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__39150,map__39150__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39156){
var map__39157 = p__39156;
var map__39157__$1 = ((((!((map__39157 == null)))?((((map__39157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39157):map__39157);
var match_length = cljs.core.get.call(null,map__39157__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39157__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39152_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39152_SHARP_);
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
var args39159 = [];
var len__26713__auto___39162 = arguments.length;
var i__26714__auto___39163 = (0);
while(true){
if((i__26714__auto___39163 < len__26713__auto___39162)){
args39159.push((arguments[i__26714__auto___39163]));

var G__39164 = (i__26714__auto___39163 + (1));
i__26714__auto___39163 = G__39164;
continue;
} else {
}
break;
}

var G__39161 = args39159.length;
switch (G__39161) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39159.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__39166_SHARP_,p2__39167_SHARP_){
return cljs.core.assoc.call(null,p1__39166_SHARP_,cljs.core.get.call(null,p2__39167_SHARP_,key),p2__39167_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__39168){
var map__39171 = p__39168;
var map__39171__$1 = ((((!((map__39171 == null)))?((((map__39171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39171):map__39171);
var f_data = map__39171__$1;
var file = cljs.core.get.call(null,map__39171__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39173,files_msg){
var map__39180 = p__39173;
var map__39180__$1 = ((((!((map__39180 == null)))?((((map__39180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39180):map__39180);
var opts = map__39180__$1;
var on_cssload = cljs.core.get.call(null,map__39180__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__39182_39186 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__39183_39187 = null;
var count__39184_39188 = (0);
var i__39185_39189 = (0);
while(true){
if((i__39185_39189 < count__39184_39188)){
var f_39190 = cljs.core._nth.call(null,chunk__39183_39187,i__39185_39189);
figwheel.client.file_reloading.reload_css_file.call(null,f_39190);

var G__39191 = seq__39182_39186;
var G__39192 = chunk__39183_39187;
var G__39193 = count__39184_39188;
var G__39194 = (i__39185_39189 + (1));
seq__39182_39186 = G__39191;
chunk__39183_39187 = G__39192;
count__39184_39188 = G__39193;
i__39185_39189 = G__39194;
continue;
} else {
var temp__4425__auto___39195 = cljs.core.seq.call(null,seq__39182_39186);
if(temp__4425__auto___39195){
var seq__39182_39196__$1 = temp__4425__auto___39195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39182_39196__$1)){
var c__26454__auto___39197 = cljs.core.chunk_first.call(null,seq__39182_39196__$1);
var G__39198 = cljs.core.chunk_rest.call(null,seq__39182_39196__$1);
var G__39199 = c__26454__auto___39197;
var G__39200 = cljs.core.count.call(null,c__26454__auto___39197);
var G__39201 = (0);
seq__39182_39186 = G__39198;
chunk__39183_39187 = G__39199;
count__39184_39188 = G__39200;
i__39185_39189 = G__39201;
continue;
} else {
var f_39202 = cljs.core.first.call(null,seq__39182_39196__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_39202);

var G__39203 = cljs.core.next.call(null,seq__39182_39196__$1);
var G__39204 = null;
var G__39205 = (0);
var G__39206 = (0);
seq__39182_39186 = G__39203;
chunk__39183_39187 = G__39204;
count__39184_39188 = G__39205;
i__39185_39189 = G__39206;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__39180,map__39180__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__39180,map__39180__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map