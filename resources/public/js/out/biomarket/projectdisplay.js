// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.projectdisplay');
goog.require('cljs.core');
goog.require('biomarket.utilities');
goog.require('cljs.pprint');
goog.require('om.dom');
goog.require('biomarket.server');
goog.require('biomarket.comments');
goog.require('biomarket.dropdown');
goog.require('cljs.core.async');
goog.require('biomarket.skills');
goog.require('om.core');
goog.require('clojure.string');
biomarket.projectdisplay.update_projects = (function biomarket$projectdisplay$update_projects(owner){
var view = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814));
var status = cljs.core.second.call(null,view.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"views","views",1450155487))));
return biomarket.server.get_data.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),view,new cljs.core.Keyword(null,"status","status",-1997798413),status], null),((function (view,status){
return (function (p1__66290_SHARP_){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__66290_SHARP_));
});})(view,status))
);
});
biomarket.projectdisplay.navigation_mount = (function biomarket$projectdisplay$navigation_mount(owner){
biomarket.projectdisplay.update_projects.call(null,owner);

biomarket.utilities.register_loop.call(null,owner,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"ut","ut",-719415558)),(function (o,p__66294){
var map__66295 = p__66294;
var map__66295__$1 = ((((!((map__66295 == null)))?((((map__66295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66295):map__66295);
var data = cljs.core.get.call(null,map__66295__$1,new cljs.core.Keyword(null,"data","data",-232669377));
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814),data);

return biomarket.projectdisplay.update_projects.call(null,owner);
}));

return biomarket.utilities.register_broadcast_loop.call(null,owner,new cljs.core.Keyword(null,"amend-project-status","amend-project-status",-1452060792),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718)));
});
biomarket.projectdisplay.navigation_unmount = (function biomarket$projectdisplay$navigation_unmount(owner){
biomarket.utilities.unsubscribe.call(null,owner,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"ut","ut",-719415558)));

return biomarket.utilities.unsub_broadcast_loop.call(null,owner,new cljs.core.Keyword(null,"amend-project-status","amend-project-status",-1452060792),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718)));
});
biomarket.projectdisplay.project_nav = (function biomarket$projectdisplay$project_nav(owner){
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-pills nav-justified"},cljs.core.concat.call(null,cljs.core.map.call(null,(function (p__66301){
var vec__66302 = p__66301;
var k = cljs.core.nth.call(null,vec__66302,(0),null);
var vec__66303 = cljs.core.nth.call(null,vec__66302,(1),null);
var text = cljs.core.nth.call(null,vec__66303,(0),null);
var dbstatus = cljs.core.nth.call(null,vec__66303,(1),null);
return React.DOM.li({"className": ((cljs.core._EQ_.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814)),k))?"active":null), "role": "presentation", "onClick": ((function (vec__66302,k,vec__66303,text,dbstatus){
return (function (_){
return biomarket.utilities.pub_info.call(null,owner,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"ut","ut",-719415558)),k);
});})(vec__66302,k,vec__66303,text,dbstatus))
},React.DOM.a({"href": "#"},text));
}),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"views","views",1450155487))),(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"nav","nav",719540477)))?cljs.core.map.call(null,(function (p1__66297_SHARP_){
return React.DOM.li({"role": "presentation", "onClick": cljs.core.second.call(null,p1__66297_SHARP_)},React.DOM.a({"href": "#"},cljs.core.first.call(null,p1__66297_SHARP_)));
}),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"nav","nav",719540477))):null))));
});
if(typeof biomarket.projectdisplay.table_info !== 'undefined'){
} else {
biomarket.projectdisplay.table_info = (function (){var method_table__26836__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26837__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26838__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26840__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.projectdisplay","table-info"),((function (method_table__26836__auto__,prefer_table__26837__auto__,method_cache__26838__auto__,cached_hierarchy__26839__auto__,hierarchy__26840__auto__){
return (function (project){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(project);
});})(method_table__26836__auto__,prefer_table__26837__auto__,method_cache__26838__auto__,cached_hierarchy__26839__auto__,hierarchy__26840__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26840__auto__,method_table__26836__auto__,prefer_table__26837__auto__,method_cache__26838__auto__,cached_hierarchy__26839__auto__));
})();
}
biomarket.projectdisplay.alert_table_info = (function biomarket$projectdisplay$alert_table_info(var_args){
var args__26988__auto__ = [];
var len__26981__auto___66305 = arguments.length;
var i__26982__auto___66306 = (0);
while(true){
if((i__26982__auto___66306 < len__26981__auto___66305)){
args__26988__auto__.push((arguments[i__26982__auto___66306]));

var G__66307 = (i__26982__auto___66306 + (1));
i__26982__auto___66306 = G__66307;
continue;
} else {
}
break;
}

var argseq__26989__auto__ = ((((0) < args__26988__auto__.length))?(new cljs.core.IndexedSeq(args__26988__auto__.slice((0)),(0),null)):null);
return biomarket.projectdisplay.alert_table_info.cljs$core$IFn$_invoke$arity$variadic(argseq__26989__auto__);
});

biomarket.projectdisplay.alert_table_info.cljs$core$IFn$_invoke$arity$variadic = (function (fields){
return cljs.core.apply.call(null,om.dom.div,{"style": {"color": "red"}},fields);
});

biomarket.projectdisplay.alert_table_info.cljs$lang$maxFixedArity = (0);

biomarket.projectdisplay.alert_table_info.cljs$lang$applyTo = (function (seq66304){
return biomarket.projectdisplay.alert_table_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66304));
});
biomarket.projectdisplay.average_bid = (function biomarket$projectdisplay$average_bid(project){
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))){
return [cljs.core.str("$"),cljs.core.str(cljs.pprint.cl_format.call(null,null,"~$",(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))) / cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project)))))].join('');
} else {
return null;
}
});
cljs.core._add_method.call(null,biomarket.projectdisplay.table_info,new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),(function (project){
var f = (function (p1__66308_SHARP_){
return biomarket.utilities.color_span.call(null,p1__66308_SHARP_,"green");
});
return new cljs.core.PersistentArrayMap(null, 5, ["Bidding ended",biomarket.projectdisplay.alert_table_info.call(null,[cljs.core.str(new cljs.core.Keyword(null,"bidmin","bidmin",-2558125).cljs$core$IFn$_invoke$arity$1(project)),cljs.core.str(" ago")].join('')),"Project deadline",f.call(null,new cljs.core.Keyword(null,"projmin","projmin",-724900279).cljs$core$IFn$_invoke$arity$1(project)),"Bids",f.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))),"Average bid (USD)",f.call(null,(function (){var or__25911__auto__ = biomarket.projectdisplay.average_bid.call(null,project);
if(cljs.core.truth_(or__25911__auto__)){
return or__25911__auto__;
} else {
return "No bids received";
}
})()),"Budget (USD)",f.call(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"budget","budget",-405386281).cljs$core$IFn$_invoke$arity$1(project))].join(''))], null);
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.table_info,new cljs.core.Keyword(null,"default","default",-1987822328),(function (project){
var f = (function (p1__66309_SHARP_){
return biomarket.utilities.color_span.call(null,p1__66309_SHARP_,"green");
});
return new cljs.core.PersistentArrayMap(null, 5, ["Bidding ends",f.call(null,new cljs.core.Keyword(null,"bidmin","bidmin",-2558125).cljs$core$IFn$_invoke$arity$1(project)),"Project deadline",f.call(null,new cljs.core.Keyword(null,"projmin","projmin",-724900279).cljs$core$IFn$_invoke$arity$1(project)),"Bids",f.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))),"Average bid",f.call(null,(function (){var or__25911__auto__ = biomarket.projectdisplay.average_bid.call(null,project);
if(cljs.core.truth_(or__25911__auto__)){
return or__25911__auto__;
} else {
return "No bids yet";
}
})()),"Budget",f.call(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"budget","budget",-405386281).cljs$core$IFn$_invoke$arity$1(project))].join(''))], null);
}));
biomarket.projectdisplay.info_table = (function biomarket$projectdisplay$info_table(project,owner){
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay66313 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projectdisplay.t_biomarket$projectdisplay66313 = (function (info_table,project,owner,meta66314){
this.info_table = info_table;
this.project = project;
this.owner = owner;
this.meta66314 = meta66314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay66313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66315,meta66314__$1){
var self__ = this;
var _66315__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay66313(self__.info_table,self__.project,self__.owner,meta66314__$1));
});

biomarket.projectdisplay.t_biomarket$projectdisplay66313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66315){
var self__ = this;
var _66315__$1 = this;
return self__.meta66314;
});

biomarket.projectdisplay.t_biomarket$projectdisplay66313.prototype.om$core$IRender$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay66313.prototype.om$core$IRender$render$arity$1 = (function (this__28885__auto__){
var self__ = this;
var this__28885__auto____$1 = this;
var data = biomarket.projectdisplay.table_info.call(null,self__.project);
return om.core.build.call(null,biomarket.utilities.make_a_table,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){var x__26745__auto__ = data;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26745__auto__);
})()], null));
});

biomarket.projectdisplay.t_biomarket$projectdisplay66313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"info-table","info-table",-2047867662,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66314","meta66314",-482904923,null)], null);
});

biomarket.projectdisplay.t_biomarket$projectdisplay66313.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay66313.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay66313";

biomarket.projectdisplay.t_biomarket$projectdisplay66313.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay66313");
});

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay66313 = (function biomarket$projectdisplay$info_table_$___GT_t_biomarket$projectdisplay66313(info_table__$1,project__$1,owner__$1,meta66314){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay66313(info_table__$1,project__$1,owner__$1,meta66314));
});

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay66313(biomarket$projectdisplay$info_table,project,owner,null));
});
biomarket.projectdisplay.label = (function biomarket$projectdisplay$label(class$,text){
return React.DOM.span({"style": {"padding-right": "10px"}},React.DOM.span({"className": class$},text));
});
if(typeof biomarket.projectdisplay.title_labels !== 'undefined'){
} else {
biomarket.projectdisplay.title_labels = (function (){var method_table__26836__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26837__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26838__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26840__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.projectdisplay","title-labels"),((function (method_table__26836__auto__,prefer_table__26837__auto__,method_cache__26838__auto__,cached_hierarchy__26839__auto__,hierarchy__26840__auto__){
return (function (x){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(x);
});})(method_table__26836__auto__,prefer_table__26837__auto__,method_cache__26838__auto__,cached_hierarchy__26839__auto__,hierarchy__26840__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26840__auto__,method_table__26836__auto__,prefer_table__26837__auto__,method_cache__26838__auto__,cached_hierarchy__26839__auto__));
})();
}
biomarket.projectdisplay.header = (function biomarket$projectdisplay$header(p){
return React.DOM.div({"className": "container-fluid", "style": {"margin-top": "10px"}},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-10", "style": {"color": "#D3D3D3"}},React.DOM.i({"className": "fa fa-bullseye"}),[cljs.core.str("  Posted by "),cljs.core.str(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p))].join('')),React.DOM.div({"className": "col-md-2", "style": {"text-align": "right"}},biomarket.dropdown.drop_down.call(null,p))));
});
biomarket.projectdisplay.show_default = (function biomarket$projectdisplay$show_default(_,owner){
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay66319 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projectdisplay.t_biomarket$projectdisplay66319 = (function (show_default,_,owner,meta66320){
this.show_default = show_default;
this._ = _;
this.owner = owner;
this.meta66320 = meta66320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay66319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66321,meta66320__$1){
var self__ = this;
var _66321__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay66319(self__.show_default,self__._,self__.owner,meta66320__$1));
});

biomarket.projectdisplay.t_biomarket$projectdisplay66319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66321){
var self__ = this;
var _66321__$1 = this;
return self__.meta66320;
});

biomarket.projectdisplay.t_biomarket$projectdisplay66319.prototype.om$core$IRender$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay66319.prototype.om$core$IRender$render$arity$1 = (function (this__28885__auto__){
var self__ = this;
var this__28885__auto____$1 = this;
return React.DOM.div(null);
});

biomarket.projectdisplay.t_biomarket$projectdisplay66319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-default","show-default",-609967859,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66320","meta66320",328933329,null)], null);
});

biomarket.projectdisplay.t_biomarket$projectdisplay66319.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay66319.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay66319";

biomarket.projectdisplay.t_biomarket$projectdisplay66319.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay66319");
});

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay66319 = (function biomarket$projectdisplay$show_default_$___GT_t_biomarket$projectdisplay66319(show_default__$1,___$1,owner__$1,meta66320){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay66319(show_default__$1,___$1,owner__$1,meta66320));
});

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay66319(biomarket$projectdisplay$show_default,_,owner,null));
});
biomarket.projectdisplay.bbutton_state = (function biomarket$projectdisplay$bbutton_state(owner,project,tag){
var visible = new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(project);
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.call(null,visible,tag))?"btn btn-default active":"btn btn-default"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (visible){
return (function (){
return biomarket.utilities.pub_info.call(null,owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"show-bottom","show-bottom",-1162121528),new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),((cljs.core._EQ_.call(null,visible,tag))?new cljs.core.Keyword(null,"default","default",-1987822328):tag)], null));
});})(visible))
], null));
});
biomarket.projectdisplay.bottom_skel = (function biomarket$projectdisplay$bottom_skel(p__66322,owner){
var vec__66333 = p__66322;
var links = cljs.core.nth.call(null,vec__66333,(0),null);
var widget = cljs.core.nth.call(null,vec__66333,(1),null);
var visible = cljs.core.nth.call(null,vec__66333,(2),null);
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay66334 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projectdisplay.t_biomarket$projectdisplay66334 = (function (bottom_skel,p__66322,owner,vec__66333,links,widget,visible,meta66335){
this.bottom_skel = bottom_skel;
this.p__66322 = p__66322;
this.owner = owner;
this.vec__66333 = vec__66333;
this.links = links;
this.widget = widget;
this.visible = visible;
this.meta66335 = meta66335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay66334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__66333,links,widget,visible){
return (function (_66336,meta66335__$1){
var self__ = this;
var _66336__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay66334(self__.bottom_skel,self__.p__66322,self__.owner,self__.vec__66333,self__.links,self__.widget,self__.visible,meta66335__$1));
});})(vec__66333,links,widget,visible))
;

biomarket.projectdisplay.t_biomarket$projectdisplay66334.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__66333,links,widget,visible){
return (function (_66336){
var self__ = this;
var _66336__$1 = this;
return self__.meta66335;
});})(vec__66333,links,widget,visible))
;

biomarket.projectdisplay.t_biomarket$projectdisplay66334.prototype.om$core$IRender$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay66334.prototype.om$core$IRender$render$arity$1 = ((function (vec__66333,links,widget,visible){
return (function (this__28885__auto__){
var self__ = this;
var this__28885__auto____$1 = this;
return React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-6"},cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,((function (this__28885__auto____$1,vec__66333,links,widget,visible){
return (function (p__66337){
var vec__66338 = p__66337;
var k = cljs.core.nth.call(null,vec__66338,(0),null);
var vec__66339 = cljs.core.nth.call(null,vec__66338,(1),null);
var button = cljs.core.nth.call(null,vec__66339,(0),null);
return om.core.build.call(null,cljs.core.first.call(null,button),cljs.core.second.call(null,button));
});})(this__28885__auto____$1,vec__66333,links,widget,visible))
,self__.links))),React.DOM.div({"className": "col-md-6"},(cljs.core.truth_(self__.widget)?cljs.core.apply.call(null,om.core.build,cljs.core.first.call(null,self__.widget),cljs.core.rest.call(null,self__.widget)):null))),(function (){var pred__66340 = cljs.core._EQ_;
var expr__66341 = self__.visible;
if(cljs.core.truth_(pred__66340.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),expr__66341))){
return React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},om.core.build.call(null,biomarket.projectdisplay.show_default,null)));
} else {
var bottom = cljs.core.second.call(null,self__.visible.call(null,self__.links));
return om.core.build.call(null,cljs.core.first.call(null,bottom),cljs.core.second.call(null,bottom));
}
})());
});})(vec__66333,links,widget,visible))
;

biomarket.projectdisplay.t_biomarket$projectdisplay66334.getBasis = ((function (vec__66333,links,widget,visible){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bottom-skel","bottom-skel",24371686,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"widget","widget",786562584,null),new cljs.core.Symbol(null,"visible","visible",616314722,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__66322","p__66322",1154805014,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__66333","vec__66333",1620456273,null),new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"widget","widget",786562584,null),new cljs.core.Symbol(null,"visible","visible",616314722,null),new cljs.core.Symbol(null,"meta66335","meta66335",557286005,null)], null);
});})(vec__66333,links,widget,visible))
;

biomarket.projectdisplay.t_biomarket$projectdisplay66334.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay66334.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay66334";

biomarket.projectdisplay.t_biomarket$projectdisplay66334.cljs$lang$ctorPrWriter = ((function (vec__66333,links,widget,visible){
return (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay66334");
});})(vec__66333,links,widget,visible))
;

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay66334 = ((function (vec__66333,links,widget,visible){
return (function biomarket$projectdisplay$bottom_skel_$___GT_t_biomarket$projectdisplay66334(bottom_skel__$1,p__66322__$1,owner__$1,vec__66333__$1,links__$1,widget__$1,visible__$1,meta66335){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay66334(bottom_skel__$1,p__66322__$1,owner__$1,vec__66333__$1,links__$1,widget__$1,visible__$1,meta66335));
});})(vec__66333,links,widget,visible))
;

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay66334(biomarket$projectdisplay$bottom_skel,p__66322,owner,vec__66333,links,widget,visible,null));
});
if(typeof biomarket.projectdisplay.bottom !== 'undefined'){
} else {
biomarket.projectdisplay.bottom = (function (){var method_table__26836__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26837__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26838__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26840__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.projectdisplay","bottom"),((function (method_table__26836__auto__,prefer_table__26837__auto__,method_cache__26838__auto__,cached_hierarchy__26839__auto__,hierarchy__26840__auto__){
return (function (p){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(p);
});})(method_table__26836__auto__,prefer_table__26837__auto__,method_cache__26838__auto__,cached_hierarchy__26839__auto__,hierarchy__26840__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26840__auto__,method_table__26836__auto__,prefer_table__26837__auto__,method_cache__26838__auto__,cached_hierarchy__26839__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"bid-show","bid-show",1619367577),(function (owner,p__66343){
var map__66344 = p__66343;
var map__66344__$1 = ((((!((map__66344 == null)))?((((map__66344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66344):map__66344);
var data = cljs.core.get.call(null,map__66344__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_(new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(data))){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408),new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(data));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"discussion","discussion",-188707284));
} else {
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408),new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(data));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"bids","bids",-1493194652));
}
}));
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"show-bottom","show-bottom",-1162121528),(function (owner,p__66346){
var map__66347 = p__66346;
var map__66347__$1 = ((((!((map__66347 == null)))?((((map__66347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66347):map__66347);
var data = cljs.core.get.call(null,map__66347__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(data));
}));
biomarket.projectdisplay.project_mount = (function biomarket$projectdisplay$project_mount(owner){
var pid = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579)));
biomarket.utilities.register_loop.call(null,owner,pid,biomarket.utilities.loop_manager);

return biomarket.utilities.register_broadcast_loop.call(null,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),pid], null),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718)));
});
biomarket.projectdisplay.project_unmount = (function biomarket$projectdisplay$project_unmount(owner){
var pid = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579));
biomarket.utilities.unsubscribe.call(null,owner,pid);

return biomarket.utilities.unsub_broadcast_loop.call(null,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),pid], null),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718)));
});
biomarket.projectdisplay.get_height = (function biomarket$projectdisplay$get_height(owner){
var project = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579));
var h = om.core.get_node.call(null,owner,[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$2(project,"-panel"))].join(''));
return h.clientHeight;
});
biomarket.projectdisplay.project_summary = (function biomarket$projectdisplay$project_summary(p__66349,owner){
var vec__66359 = p__66349;
var project = cljs.core.nth.call(null,vec__66359,(0),null);
var view_type = cljs.core.nth.call(null,vec__66359,(1),null);
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay66360 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IDidUpdate}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projectdisplay.t_biomarket$projectdisplay66360 = (function (project_summary,p__66349,owner,vec__66359,project,view_type,meta66361){
this.project_summary = project_summary;
this.p__66349 = p__66349;
this.owner = owner;
this.vec__66359 = vec__66359;
this.project = project;
this.view_type = view_type;
this.meta66361 = meta66361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay66360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__66359,project,view_type){
return (function (_66362,meta66361__$1){
var self__ = this;
var _66362__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay66360(self__.project_summary,self__.p__66349,self__.owner,self__.vec__66359,self__.project,self__.view_type,meta66361__$1));
});})(vec__66359,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay66360.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__66359,project,view_type){
return (function (_66362){
var self__ = this;
var _66362__$1 = this;
return self__.meta66361;
});})(vec__66359,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay66360.prototype.om$core$IInitState$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay66360.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__66359,project,view_type){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.assoc.call(null,self__.project,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),self__.view_type,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"default","default",-1987822328)),new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"view-type","view-type",-1848894559),self__.view_type,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"default","default",-1987822328)], null);
});})(vec__66359,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay66360.prototype.om$core$IWillMount$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay66360.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (vec__66359,project,view_type){
return (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.projectdisplay.project_mount.call(null,self__.owner);
});})(vec__66359,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay66360.prototype.om$core$IWillUnmount$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay66360.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (vec__66359,project,view_type){
return (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.projectdisplay.project_unmount.call(null,self__.owner);
});})(vec__66359,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay66360.prototype.om$core$IDidUpdate$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay66360.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (vec__66359,project,view_type){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408)))){
return null;
} else {
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"height","height",1025178622),biomarket.projectdisplay.get_height.call(null,self__.owner));
}
});})(vec__66359,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay66360.prototype.om$core$IWillReceiveProps$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay66360.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (vec__66359,project,view_type){
return (function (_,p__66363){
var self__ = this;
var vec__66364 = p__66363;
var np = cljs.core.nth.call(null,vec__66364,(0),null);
var nv = cljs.core.nth.call(null,vec__66364,(1),null);
var ___$1 = this;
var op = cljs.core.first.call(null,om.core.get_props.call(null,self__.owner));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.assoc.call(null,np,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),nv));
});})(vec__66359,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay66360.prototype.om$core$IRenderState$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay66360.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__66359,project,view_type){
return (function (_,p__66365){
var self__ = this;
var map__66366 = p__66365;
var map__66366__$1 = ((((!((map__66366 == null)))?((((map__66366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66366):map__66366);
var project__$1 = cljs.core.get.call(null,map__66366__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var show_bid = cljs.core.get.call(null,map__66366__$1,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408));
var bottom_view = cljs.core.get.call(null,map__66366__$1,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585));
var ___$1 = this;
return React.DOM.div({"className": "container-fluid", "style": {"position": "relative"}},React.DOM.div({"className": "panel panel-default", "ref": [cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$2(project__$1,"-panel"))].join('')},React.DOM.div(null,biomarket.projectdisplay.header.call(null,project__$1)),React.DOM.div({"className": "panel-body"},((cljs.core.not.call(null,show_bid))?React.DOM.div(null,React.DOM.div(null,om.core.build.call(null,biomarket.projectdisplay.title_labels,project__$1)),React.DOM.div(null,om.core.build.call(null,biomarket.projectdisplay.info_table,project__$1)),om.core.build.call(null,biomarket.utilities.more_less_text,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(project__$1)),om.core.build.call(null,biomarket.projectdisplay.bottom,cljs.core.assoc.call(null,project__$1,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),bottom_view))):null))));
});})(vec__66359,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay66360.getBasis = ((function (vec__66359,project,view_type){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"project-summary","project-summary",1896971412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"view-type","view-type",-208363032,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__66349","p__66349",75916116,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__66359","vec__66359",-887505689,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"view-type","view-type",-208363032,null),new cljs.core.Symbol(null,"meta66361","meta66361",-236276933,null)], null);
});})(vec__66359,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay66360.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay66360.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay66360";

biomarket.projectdisplay.t_biomarket$projectdisplay66360.cljs$lang$ctorPrWriter = ((function (vec__66359,project,view_type){
return (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay66360");
});})(vec__66359,project,view_type))
;

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay66360 = ((function (vec__66359,project,view_type){
return (function biomarket$projectdisplay$project_summary_$___GT_t_biomarket$projectdisplay66360(project_summary__$1,p__66349__$1,owner__$1,vec__66359__$1,project__$1,view_type__$1,meta66361){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay66360(project_summary__$1,p__66349__$1,owner__$1,vec__66359__$1,project__$1,view_type__$1,meta66361));
});})(vec__66359,project,view_type))
;

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay66360(biomarket$projectdisplay$project_summary,p__66349,owner,vec__66359,project,view_type,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=projectdisplay.js.map