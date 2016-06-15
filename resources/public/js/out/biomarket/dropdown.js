// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.dropdown');
goog.require('cljs.core');
goog.require('biomarket.utilities');
goog.require('cljs.pprint');
goog.require('om.dom');
goog.require('biomarket.server');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('clojure.string');
biomarket.dropdown.delete_project = (function biomarket$dropdown$delete_project(p){
return biomarket.server.save_data.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete-project","delete-project",-1196614829),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p)], null)], null));
});
biomarket.dropdown.undelete_project = (function biomarket$dropdown$undelete_project(p){
return biomarket.server.save_data.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"undelete-project","undelete-project",-1653906236),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p)], null)], null));
});
biomarket.dropdown.drop_down_skel = (function biomarket$dropdown$drop_down_skel(var_args){
var args58989 = [];
var len__26879__auto___58992 = arguments.length;
var i__26880__auto___58993 = (0);
while(true){
if((i__26880__auto___58993 < len__26879__auto___58992)){
args58989.push((arguments[i__26880__auto___58993]));

var G__58994 = (i__26880__auto___58993 + (1));
i__26880__auto___58993 = G__58994;
continue;
} else {
}
break;
}

var G__58991 = args58989.length;
switch (G__58991) {
case 0:
return biomarket.dropdown.drop_down_skel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return biomarket.dropdown.drop_down_skel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58989.length)].join('')));

}
});

biomarket.dropdown.drop_down_skel.cljs$core$IFn$_invoke$arity$0 = (function (){
return biomarket.dropdown.drop_down_skel.call(null,null,null);
});

biomarket.dropdown.drop_down_skel.cljs$core$IFn$_invoke$arity$2 = (function (func,text){
if((func == null)){
return React.DOM.div(null,React.DOM.i({"className": "fa fa-bars", "style": {"color": "#D3D3D3"}}));
} else {
return React.DOM.div({"className": "btn-group"},React.DOM.a({"className": "dropdown-toggle", "data-toggle": "dropdown"},React.DOM.i({"className": "fa fa-bars", "style": {"color": "gray"}})),React.DOM.ul({"className": "dropdown-menu dropdown-menu-right"},React.DOM.li(null,React.DOM.a({"onClick": func},text))));
}
});

biomarket.dropdown.drop_down_skel.cljs$lang$maxFixedArity = 2;
if(typeof biomarket.dropdown.drop_down !== 'undefined'){
} else {
biomarket.dropdown.drop_down = (function (){var method_table__26734__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26735__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26736__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26737__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26738__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.dropdown","drop-down"),((function (method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__,hierarchy__26738__auto__){
return (function (p){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(p);
});})(method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__,hierarchy__26738__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26738__auto__,method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.dropdown.drop_down,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p){
return biomarket.dropdown.drop_down_skel.call(null,(function (){
return biomarket.dropdown.delete_project.call(null,p);
}),"Delete project");
}));
cljs.core._add_method.call(null,biomarket.dropdown.drop_down,new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533),(function (p){
return biomarket.dropdown.drop_down_skel.call(null,(function (){
return biomarket.dropdown.undelete_project.call(null,p);
}),"Undelete project");
}));
cljs.core._add_method.call(null,biomarket.dropdown.drop_down,new cljs.core.Keyword(null,"open-jobs","open-jobs",-1691637335),(function (p){
return biomarket.dropdown.drop_down_skel.call(null,cljs.core.identity,"Withdraw your bids");
}));
cljs.core._add_method.call(null,biomarket.dropdown.drop_down,new cljs.core.Keyword(null,"bid-show","bid-show",1619367577),(function (p){
return biomarket.dropdown.drop_down_skel.call(null);
}));

//# sourceMappingURL=dropdown.js.map