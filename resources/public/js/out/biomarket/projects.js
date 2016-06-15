// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.projects');
goog.require('cljs.core');
goog.require('biomarket.login');
goog.require('biomarket.utilities');
goog.require('biomarket.projectdisplay');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('biomarket.bids');
goog.require('goog.history.EventType');
goog.require('biomarket.server');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
goog.require('clojure.string');
goog.require('biomarket.newproject');
biomarket.projects.home_view = (function biomarket$projects$home_view(_,owner){
if(typeof biomarket.projects.t_biomarket$projects50743 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects50743 = (function (home_view,_,owner,meta50744){
this.home_view = home_view;
this._ = _;
this.owner = owner;
this.meta50744 = meta50744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects50743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50745,meta50744__$1){
var self__ = this;
var _50745__$1 = this;
return (new biomarket.projects.t_biomarket$projects50743(self__.home_view,self__._,self__.owner,meta50744__$1));
});

biomarket.projects.t_biomarket$projects50743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50745){
var self__ = this;
var _50745__$1 = this;
return self__.meta50744;
});

biomarket.projects.t_biomarket$projects50743.prototype.om$core$IInitState$ = true;

biomarket.projects.t_biomarket$projects50743.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Open projects","open"], null),new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Active projects","active"], null),new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Completed projects","completed"], null),new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Deleted projects","deleted"], null),new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Expired projects","expired"], null)], null),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Project",((function (___$2){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141),new cljs.core.Keyword(null,"new","new",-2085437848));
});})(___$2))
], null)], null),new cljs.core.Keyword(null,"ut","ut",-719415558),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"update-tag","update-tag",1483190681),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718),cljs.core.async.chan.call(null)], null);
});

biomarket.projects.t_biomarket$projects50743.prototype.om$core$IDidMount$ = true;

biomarket.projects.t_biomarket$projects50743.prototype.om$core$IDidMount$did_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.projectdisplay.navigation_mount.call(null,self__.owner);
});

biomarket.projects.t_biomarket$projects50743.prototype.om$core$IWillUnmount$ = true;

biomarket.projects.t_biomarket$projects50743.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.projectdisplay.navigation_unmount.call(null,self__.owner);
});

biomarket.projects.t_biomarket$projects50743.prototype.om$core$IRenderState$ = true;

biomarket.projects.t_biomarket$projects50743.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__50746){
var self__ = this;
var map__50747 = p__50746;
var map__50747__$1 = ((((!((map__50747 == null)))?((((map__50747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50747):map__50747);
var projects = cljs.core.get.call(null,map__50747__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var view = cljs.core.get.call(null,map__50747__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var ___$2 = this;
var ps = biomarket.utilities.split_projects.call(null,projects);
return React.DOM.div(null,biomarket.projectdisplay.project_nav.call(null,self__.owner),React.DOM.div({"style": {"padding-top": "10px"}}),((cljs.core.seq.call(null,projects))?React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},cljs.core.apply.call(null,om.dom.div,{"className": "col-md-6"},cljs.core.map.call(null,((function (ps,___$2,map__50747,map__50747__$1,projects,view){
return (function (p1__50735_SHARP_){
return om.core.build.call(null,biomarket.projectdisplay.project_summary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50735_SHARP_,view], null));
});})(ps,___$2,map__50747,map__50747__$1,projects,view))
,cljs.core.first.call(null,ps))),cljs.core.apply.call(null,om.dom.div,{"className": "col-md-6"},cljs.core.map.call(null,((function (ps,___$2,map__50747,map__50747__$1,projects,view){
return (function (p1__50736_SHARP_){
return om.core.build.call(null,biomarket.projectdisplay.project_summary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50736_SHARP_,view], null));
});})(ps,___$2,map__50747,map__50747__$1,projects,view))
,cljs.core.second.call(null,ps))))):React.DOM.div({"style": {"padding-top": "30px", "text-align": "center"}},[cljs.core.str("You have no "),cljs.core.str(cljs.core.first.call(null,view.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858))))),cljs.core.str(" projects.")].join(''))));
});

biomarket.projects.t_biomarket$projects50743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"home-view","home-view",-289851298,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta50744","meta50744",1110238344,null)], null);
});

biomarket.projects.t_biomarket$projects50743.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects50743.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects50743";

biomarket.projects.t_biomarket$projects50743.cljs$lang$ctorPrWriter = (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.projects/t_biomarket$projects50743");
});

biomarket.projects.__GT_t_biomarket$projects50743 = (function biomarket$projects$home_view_$___GT_t_biomarket$projects50743(home_view__$1,___$1,owner__$1,meta50744){
return (new biomarket.projects.t_biomarket$projects50743(home_view__$1,___$1,owner__$1,meta50744));
});

}

return (new biomarket.projects.t_biomarket$projects50743(biomarket$projects$home_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.projects.projects_view_control = (function biomarket$projects$projects_view_control(_,owner){
if(typeof biomarket.projects.t_biomarket$projects50761 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projects.t_biomarket$projects50761 = (function (projects_view_control,_,owner,meta50762){
this.projects_view_control = projects_view_control;
this._ = _;
this.owner = owner;
this.meta50762 = meta50762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projects.t_biomarket$projects50761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50763,meta50762__$1){
var self__ = this;
var _50763__$1 = this;
return (new biomarket.projects.t_biomarket$projects50761(self__.projects_view_control,self__._,self__.owner,meta50762__$1));
});

biomarket.projects.t_biomarket$projects50761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50763){
var self__ = this;
var _50763__$1 = this;
return self__.meta50762;
});

biomarket.projects.t_biomarket$projects50761.prototype.om$core$IInitState$ = true;

biomarket.projects.t_biomarket$projects50761.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"home","home",-74557309)], null);
});

biomarket.projects.t_biomarket$projects50761.prototype.om$core$IWillMount$ = true;

biomarket.projects.t_biomarket$projects50761.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141),((function (___$2){
return (function (o,p__50764){
var map__50765 = p__50764;
var map__50765__$1 = ((((!((map__50765 == null)))?((((map__50765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50765):map__50765);
var data = cljs.core.get.call(null,map__50765__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"current","current",-1088038603),data);
});})(___$2))
);
});

biomarket.projects.t_biomarket$projects50761.prototype.om$core$IWillUnmount$ = true;

biomarket.projects.t_biomarket$projects50761.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141));
});

biomarket.projects.t_biomarket$projects50761.prototype.om$core$IRenderState$ = true;

biomarket.projects.t_biomarket$projects50761.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__50767){
var self__ = this;
var map__50768 = p__50767;
var map__50768__$1 = ((((!((map__50768 == null)))?((((map__50768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50768):map__50768);
var current = cljs.core.get.call(null,map__50768__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var nav = cljs.core.get.call(null,map__50768__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var ___$2 = this;
var pred__50770 = cljs.core._EQ_;
var expr__50771 = current;
if(cljs.core.truth_(pred__50770.call(null,new cljs.core.Keyword(null,"home","home",-74557309),expr__50771))){
return om.core.build.call(null,biomarket.projects.home_view,null);
} else {
if(cljs.core.truth_(pred__50770.call(null,new cljs.core.Keyword(null,"new","new",-2085437848),expr__50771))){
return om.core.build.call(null,biomarket.newproject.new_project_view,new cljs.core.Keyword("biomarket.projects","navigation","biomarket.projects/navigation",1159780141));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__50771)].join('')));
}
}
});

biomarket.projects.t_biomarket$projects50761.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"projects-view-control","projects-view-control",-1753118227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta50762","meta50762",-156703400,null)], null);
});

biomarket.projects.t_biomarket$projects50761.cljs$lang$type = true;

biomarket.projects.t_biomarket$projects50761.cljs$lang$ctorStr = "biomarket.projects/t_biomarket$projects50761";

biomarket.projects.t_biomarket$projects50761.cljs$lang$ctorPrWriter = (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.projects/t_biomarket$projects50761");
});

biomarket.projects.__GT_t_biomarket$projects50761 = (function biomarket$projects$projects_view_control_$___GT_t_biomarket$projects50761(projects_view_control__$1,___$1,owner__$1,meta50762){
return (new biomarket.projects.t_biomarket$projects50761(projects_view_control__$1,___$1,owner__$1,meta50762));
});

}

return (new biomarket.projects.t_biomarket$projects50761(biomarket$projects$projects_view_control,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=projects.js.map