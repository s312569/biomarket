// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.projectdisplay');
goog.require('cljs.core');
goog.require('biomarket.utilities');
goog.require('cljs.pprint');
goog.require('om.dom');
goog.require('biomarket.bids');
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
return (function (p1__48112_SHARP_){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__48112_SHARP_));
});})(view,status))
);
});
biomarket.projectdisplay.navigation_mount = (function biomarket$projectdisplay$navigation_mount(owner){
biomarket.projectdisplay.update_projects.call(null,owner);

biomarket.utilities.register_loop.call(null,owner,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"ut","ut",-719415558)),(function (o,p__48116){
var map__48117 = p__48116;
var map__48117__$1 = ((((!((map__48117 == null)))?((((map__48117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48117):map__48117);
var data = cljs.core.get.call(null,map__48117__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-pills nav-justified"},cljs.core.concat.call(null,cljs.core.map.call(null,(function (p__48123){
var vec__48124 = p__48123;
var k = cljs.core.nth.call(null,vec__48124,(0),null);
var vec__48125 = cljs.core.nth.call(null,vec__48124,(1),null);
var text = cljs.core.nth.call(null,vec__48125,(0),null);
var dbstatus = cljs.core.nth.call(null,vec__48125,(1),null);
return React.DOM.li({"className": ((cljs.core._EQ_.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814)),k))?"active":null), "role": "presentation", "onClick": ((function (vec__48124,k,vec__48125,text,dbstatus){
return (function (_){
return biomarket.utilities.pub_info.call(null,owner,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"ut","ut",-719415558)),k);
});})(vec__48124,k,vec__48125,text,dbstatus))
},React.DOM.a({"href": "#"},text));
}),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"views","views",1450155487))),(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"nav","nav",719540477)))?cljs.core.map.call(null,(function (p1__48119_SHARP_){
return React.DOM.li({"role": "presentation", "onClick": cljs.core.second.call(null,p1__48119_SHARP_)},React.DOM.a({"href": "#"},cljs.core.first.call(null,p1__48119_SHARP_)));
}),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"nav","nav",719540477))):null))));
});
if(typeof biomarket.projectdisplay.table_info !== 'undefined'){
} else {
biomarket.projectdisplay.table_info = (function (){var method_table__26765__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26766__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26767__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26768__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26769__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.projectdisplay","table-info"),((function (method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__,hierarchy__26769__auto__){
return (function (project){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(project);
});})(method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__,hierarchy__26769__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26769__auto__,method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__));
})();
}
biomarket.projectdisplay.alert_table_info = (function biomarket$projectdisplay$alert_table_info(var_args){
var args__26917__auto__ = [];
var len__26910__auto___48127 = arguments.length;
var i__26911__auto___48128 = (0);
while(true){
if((i__26911__auto___48128 < len__26910__auto___48127)){
args__26917__auto__.push((arguments[i__26911__auto___48128]));

var G__48129 = (i__26911__auto___48128 + (1));
i__26911__auto___48128 = G__48129;
continue;
} else {
}
break;
}

var argseq__26918__auto__ = ((((0) < args__26917__auto__.length))?(new cljs.core.IndexedSeq(args__26917__auto__.slice((0)),(0),null)):null);
return biomarket.projectdisplay.alert_table_info.cljs$core$IFn$_invoke$arity$variadic(argseq__26918__auto__);
});

biomarket.projectdisplay.alert_table_info.cljs$core$IFn$_invoke$arity$variadic = (function (fields){
return cljs.core.apply.call(null,om.dom.div,{"style": {"color": "red"}},fields);
});

biomarket.projectdisplay.alert_table_info.cljs$lang$maxFixedArity = (0);

biomarket.projectdisplay.alert_table_info.cljs$lang$applyTo = (function (seq48126){
return biomarket.projectdisplay.alert_table_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48126));
});
biomarket.projectdisplay.average_bid = (function biomarket$projectdisplay$average_bid(project){
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))){
return [cljs.core.str("$"),cljs.core.str(cljs.pprint.cl_format.call(null,null,"~$",(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))) / cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project)))))].join('');
} else {
return null;
}
});
cljs.core._add_method.call(null,biomarket.projectdisplay.table_info,new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),(function (project){
var f = (function (p1__48130_SHARP_){
return biomarket.utilities.color_span.call(null,p1__48130_SHARP_,"green");
});
return new cljs.core.PersistentArrayMap(null, 5, ["Bidding ended",biomarket.projectdisplay.alert_table_info.call(null,[cljs.core.str(new cljs.core.Keyword(null,"bidmin","bidmin",-2558125).cljs$core$IFn$_invoke$arity$1(project)),cljs.core.str(" ago")].join('')),"Project deadline",f.call(null,new cljs.core.Keyword(null,"projmin","projmin",-724900279).cljs$core$IFn$_invoke$arity$1(project)),"Bids",f.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))),"Average bid (USD)",f.call(null,(function (){var or__25840__auto__ = biomarket.projectdisplay.average_bid.call(null,project);
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
return "No bids received";
}
})()),"Budget (USD)",f.call(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"budget","budget",-405386281).cljs$core$IFn$_invoke$arity$1(project))].join(''))], null);
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.table_info,new cljs.core.Keyword(null,"default","default",-1987822328),(function (project){
var f = (function (p1__48131_SHARP_){
return biomarket.utilities.color_span.call(null,p1__48131_SHARP_,"green");
});
return new cljs.core.PersistentArrayMap(null, 5, ["Bidding ends",f.call(null,new cljs.core.Keyword(null,"bidmin","bidmin",-2558125).cljs$core$IFn$_invoke$arity$1(project)),"Project deadline",f.call(null,new cljs.core.Keyword(null,"projmin","projmin",-724900279).cljs$core$IFn$_invoke$arity$1(project)),"Bids",f.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))),"Average bid",f.call(null,(function (){var or__25840__auto__ = biomarket.projectdisplay.average_bid.call(null,project);
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
return "No bids yet";
}
})()),"Budget",f.call(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"budget","budget",-405386281).cljs$core$IFn$_invoke$arity$1(project))].join(''))], null);
}));
biomarket.projectdisplay.info_table = (function biomarket$projectdisplay$info_table(project,owner){
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay48135 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projectdisplay.t_biomarket$projectdisplay48135 = (function (info_table,project,owner,meta48136){
this.info_table = info_table;
this.project = project;
this.owner = owner;
this.meta48136 = meta48136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay48135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48137,meta48136__$1){
var self__ = this;
var _48137__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay48135(self__.info_table,self__.project,self__.owner,meta48136__$1));
});

biomarket.projectdisplay.t_biomarket$projectdisplay48135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48137){
var self__ = this;
var _48137__$1 = this;
return self__.meta48136;
});

biomarket.projectdisplay.t_biomarket$projectdisplay48135.prototype.om$core$IRender$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay48135.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
var data = biomarket.projectdisplay.table_info.call(null,self__.project);
return om.core.build.call(null,biomarket.utilities.make_a_table,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){var x__26674__auto__ = data;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26674__auto__);
})()], null));
});

biomarket.projectdisplay.t_biomarket$projectdisplay48135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"info-table","info-table",-2047867662,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta48136","meta48136",-1728334652,null)], null);
});

biomarket.projectdisplay.t_biomarket$projectdisplay48135.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay48135.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay48135";

biomarket.projectdisplay.t_biomarket$projectdisplay48135.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay48135");
});

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay48135 = (function biomarket$projectdisplay$info_table_$___GT_t_biomarket$projectdisplay48135(info_table__$1,project__$1,owner__$1,meta48136){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay48135(info_table__$1,project__$1,owner__$1,meta48136));
});

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay48135(biomarket$projectdisplay$info_table,project,owner,null));
});
biomarket.projectdisplay.label = (function biomarket$projectdisplay$label(class$,text){
return React.DOM.span({"style": {"padding-right": "10px"}},React.DOM.span({"className": class$},text));
});
if(typeof biomarket.projectdisplay.title_labels !== 'undefined'){
} else {
biomarket.projectdisplay.title_labels = (function (){var method_table__26765__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26766__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26767__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26768__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26769__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.projectdisplay","title-labels"),((function (method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__,hierarchy__26769__auto__){
return (function (x){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(x);
});})(method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__,hierarchy__26769__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26769__auto__,method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__));
})();
}
biomarket.projectdisplay.header = (function biomarket$projectdisplay$header(p){
return React.DOM.div({"className": "container-fluid", "style": {"margin-top": "10px"}},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-10", "style": {"color": "#D3D3D3"}},React.DOM.i({"className": "fa fa-bullseye"}),[cljs.core.str("  Posted by "),cljs.core.str(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p))].join('')),React.DOM.div({"className": "col-md-2", "style": {"text-align": "right"}},biomarket.dropdown.drop_down.call(null,p))));
});
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"bid-show","bid-show",1619367577),(function (owner,p__48138){
var map__48139 = p__48138;
var map__48139__$1 = ((((!((map__48139 == null)))?((((map__48139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48139):map__48139);
var data = cljs.core.get.call(null,map__48139__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_(new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(data))){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408),new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(data));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"discussion","discussion",-188707284));
} else {
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408),new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(data));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"bids","bids",-1493194652));
}
}));
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"show-bottom","show-bottom",-1162121528),(function (owner,p__48141){
var map__48142 = p__48141;
var map__48142__$1 = ((((!((map__48142 == null)))?((((map__48142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48142):map__48142);
var data = cljs.core.get.call(null,map__48142__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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
biomarket.projectdisplay.project_summary = (function biomarket$projectdisplay$project_summary(p__48144,owner){
var vec__48154 = p__48144;
var project = cljs.core.nth.call(null,vec__48154,(0),null);
var view_type = cljs.core.nth.call(null,vec__48154,(1),null);
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay48155 !== 'undefined'){
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
biomarket.projectdisplay.t_biomarket$projectdisplay48155 = (function (project_summary,p__48144,owner,vec__48154,project,view_type,meta48156){
this.project_summary = project_summary;
this.p__48144 = p__48144;
this.owner = owner;
this.vec__48154 = vec__48154;
this.project = project;
this.view_type = view_type;
this.meta48156 = meta48156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay48155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__48154,project,view_type){
return (function (_48157,meta48156__$1){
var self__ = this;
var _48157__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay48155(self__.project_summary,self__.p__48144,self__.owner,self__.vec__48154,self__.project,self__.view_type,meta48156__$1));
});})(vec__48154,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay48155.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__48154,project,view_type){
return (function (_48157){
var self__ = this;
var _48157__$1 = this;
return self__.meta48156;
});})(vec__48154,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay48155.prototype.om$core$IInitState$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay48155.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__48154,project,view_type){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.assoc.call(null,self__.project,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),self__.view_type,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"default","default",-1987822328)),new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"view-type","view-type",-1848894559),self__.view_type,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408),false,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"default","default",-1987822328)], null);
});})(vec__48154,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay48155.prototype.om$core$IWillMount$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay48155.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (vec__48154,project,view_type){
return (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.projectdisplay.project_mount.call(null,self__.owner);
});})(vec__48154,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay48155.prototype.om$core$IWillUnmount$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay48155.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (vec__48154,project,view_type){
return (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.projectdisplay.project_unmount.call(null,self__.owner);
});})(vec__48154,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay48155.prototype.om$core$IDidUpdate$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay48155.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (vec__48154,project,view_type){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408)))){
return null;
} else {
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"height","height",1025178622),biomarket.projectdisplay.get_height.call(null,self__.owner));
}
});})(vec__48154,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay48155.prototype.om$core$IWillReceiveProps$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay48155.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (vec__48154,project,view_type){
return (function (_,p__48158){
var self__ = this;
var vec__48159 = p__48158;
var np = cljs.core.nth.call(null,vec__48159,(0),null);
var nv = cljs.core.nth.call(null,vec__48159,(1),null);
var ___$1 = this;
var op = cljs.core.first.call(null,om.core.get_props.call(null,self__.owner));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.assoc.call(null,np,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),nv));

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408),false);
});})(vec__48154,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay48155.prototype.om$core$IRenderState$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay48155.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__48154,project,view_type){
return (function (_,p__48160){
var self__ = this;
var map__48161 = p__48160;
var map__48161__$1 = ((((!((map__48161 == null)))?((((map__48161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48161):map__48161);
var project__$1 = cljs.core.get.call(null,map__48161__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var show_bid = cljs.core.get.call(null,map__48161__$1,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408));
var bottom_view = cljs.core.get.call(null,map__48161__$1,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585));
var ___$1 = this;
if(cljs.core.not.call(null,show_bid)){
return React.DOM.div({"className": "container-fluid", "style": {"position": "relative"}},React.DOM.div({"className": "panel panel-default", "ref": [cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$2(project__$1,"-panel"))].join('')},React.DOM.div(null,biomarket.projectdisplay.header.call(null,project__$1)),React.DOM.div({"className": "panel-body"},((cljs.core.not.call(null,show_bid))?React.DOM.div(null,React.DOM.div(null,om.core.build.call(null,biomarket.projectdisplay.title_labels,project__$1)),React.DOM.div(null,om.core.build.call(null,biomarket.projectdisplay.info_table,project__$1)),om.core.build.call(null,biomarket.utilities.more_less_text,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(project__$1)),biomarket.utilities.bottom.call(null,cljs.core.assoc.call(null,project__$1,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),bottom_view))):null))));
} else {
return om.core.build.call(null,biomarket.bids.bid_view,cljs.core.assoc.call(null,project__$1,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),bottom_view,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408),show_bid,new cljs.core.Keyword(null,"height","height",1025178622),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"height","height",1025178622))));
}
});})(vec__48154,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay48155.getBasis = ((function (vec__48154,project,view_type){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"project-summary","project-summary",1896971412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"view-type","view-type",-208363032,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__48144","p__48144",133246890,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__48154","vec__48154",-497413796,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"view-type","view-type",-208363032,null),new cljs.core.Symbol(null,"meta48156","meta48156",2029107512,null)], null);
});})(vec__48154,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay48155.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay48155.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay48155";

biomarket.projectdisplay.t_biomarket$projectdisplay48155.cljs$lang$ctorPrWriter = ((function (vec__48154,project,view_type){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay48155");
});})(vec__48154,project,view_type))
;

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay48155 = ((function (vec__48154,project,view_type){
return (function biomarket$projectdisplay$project_summary_$___GT_t_biomarket$projectdisplay48155(project_summary__$1,p__48144__$1,owner__$1,vec__48154__$1,project__$1,view_type__$1,meta48156){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay48155(project_summary__$1,p__48144__$1,owner__$1,vec__48154__$1,project__$1,view_type__$1,meta48156));
});})(vec__48154,project,view_type))
;

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay48155(biomarket$projectdisplay$project_summary,p__48144,owner,vec__48154,project,view_type,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=projectdisplay.js.map