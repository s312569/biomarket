// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.find');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('biomarket.utilities');
goog.require('biomarket.projectdisplay');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('biomarket.bids');
goog.require('goog.history.EventType');
goog.require('biomarket.server');
goog.require('biomarket.comments');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('biomarket.skills');
goog.require('om.core');
goog.require('clojure.string');
goog.require('cljs_time.format');
biomarket.find.show_skills = (function biomarket$find$show_skills(project,owner){
if(typeof biomarket.find.t_biomarket$find86083 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find86083 = (function (show_skills,project,owner,meta86084){
this.show_skills = show_skills;
this.project = project;
this.owner = owner;
this.meta86084 = meta86084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find86083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86085,meta86084__$1){
var self__ = this;
var _86085__$1 = this;
return (new biomarket.find.t_biomarket$find86083(self__.show_skills,self__.project,self__.owner,meta86084__$1));
});

biomarket.find.t_biomarket$find86083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86085){
var self__ = this;
var _86085__$1 = this;
return self__.meta86084;
});

biomarket.find.t_biomarket$find86083.prototype.om$core$IRender$ = true;

biomarket.find.t_biomarket$find86083.prototype.om$core$IRender$render$arity$1 = (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
return React.DOM.div({"style": {"padding-top": "20px"}},om.core.build.call(null,biomarket.skills.skill_tags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"skills","skills",958701426).cljs$core$IFn$_invoke$arity$1(self__.project),cljs.core.PersistentArrayMap.EMPTY], null)));
});

biomarket.find.t_biomarket$find86083.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-skills","show-skills",1065280605,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta86084","meta86084",-849509488,null)], null);
});

biomarket.find.t_biomarket$find86083.cljs$lang$type = true;

biomarket.find.t_biomarket$find86083.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find86083";

biomarket.find.t_biomarket$find86083.cljs$lang$ctorPrWriter = (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.find/t_biomarket$find86083");
});

biomarket.find.__GT_t_biomarket$find86083 = (function biomarket$find$show_skills_$___GT_t_biomarket$find86083(show_skills__$1,project__$1,owner__$1,meta86084){
return (new biomarket.find.t_biomarket$find86083(show_skills__$1,project__$1,owner__$1,meta86084));
});

}

return (new biomarket.find.t_biomarket$find86083(biomarket$find$show_skills,project,owner,null));
});
cljs.core._add_method.call(null,biomarket.utilities.bottom,new cljs.core.Keyword(null,"found-projects","found-projects",-1675279234),(function (p){
var links = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skills","skills",958701426),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Matched skills",biomarket.find.show_skills], null),new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Show bids",biomarket.bids.show_bids], null),new cljs.core.Keyword(null,"discussion","discussion",-188707284),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Discussion",biomarket.comments.comments,null], null)], null);
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(p))){
return React.DOM.div(null,React.DOM.hr(null),om.core.build.call(null,biomarket.utilities.bottom_skel,cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"links","links",-654507394),links,new cljs.core.Keyword(null,"widget","widget",-853968943),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.bid_widget,p], null))));
} else {
return React.DOM.div(null,React.DOM.hr(null),om.core.build.call(null,biomarket.utilities.bottom_skel,cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.dissoc.call(null,links,new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.Keyword(null,"discussion","discussion",-188707284)),new cljs.core.Keyword(null,"widget","widget",-853968943),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.bid_widget,p], null))));
}
}));
biomarket.find.find_view = (function biomarket$find$find_view(_,owner){
if(typeof biomarket.find.t_biomarket$find86094 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find86094 = (function (find_view,_,owner,meta86095){
this.find_view = find_view;
this._ = _;
this.owner = owner;
this.meta86095 = meta86095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find86094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86096,meta86095__$1){
var self__ = this;
var _86096__$1 = this;
return (new biomarket.find.t_biomarket$find86094(self__.find_view,self__._,self__.owner,meta86095__$1));
});

biomarket.find.t_biomarket$find86094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86096){
var self__ = this;
var _86096__$1 = this;
return self__.meta86095;
});

biomarket.find.t_biomarket$find86094.prototype.om$core$IInitState$ = true;

biomarket.find.t_biomarket$find86094.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"found-projects","found-projects",-1675279234)], null);
});

biomarket.find.t_biomarket$find86094.prototype.om$core$IWillMount$ = true;

biomarket.find.t_biomarket$find86094.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.server.get_data.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"all-projects","all-projects",-406074149),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"open","open",-1763596448)], null),((function (___$2){
return (function (p1__86086_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"biddead","biddead",371948723),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__86086_SHARP_)));
});})(___$2))
);
});

biomarket.find.t_biomarket$find86094.prototype.om$core$IRenderState$ = true;

biomarket.find.t_biomarket$find86094.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__86097){
var self__ = this;
var map__86098 = p__86097;
var map__86098__$1 = ((((!((map__86098 == null)))?((((map__86098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86098):map__86098);
var projects = cljs.core.get.call(null,map__86098__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var bottoms = cljs.core.get.call(null,map__86098__$1,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497));
var ___$2 = this;
return React.DOM.div(null,((cljs.core.seq.call(null,projects))?React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},cljs.core.apply.call(null,om.dom.div,{"className": "col-md-12"},cljs.core.map.call(null,((function (___$2,map__86098,map__86098__$1,projects,bottoms){
return (function (p1__86087_SHARP_){
return om.core.build.call(null,biomarket.projectdisplay.project_summary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__86087_SHARP_,new cljs.core.Keyword(null,"found-projects","found-projects",-1675279234)], null));
});})(___$2,map__86098,map__86098__$1,projects,bottoms))
,projects)))):React.DOM.div({"style": {"padding-top": "30px", "text-align": "center"}},[cljs.core.str("No projects found")].join(''))));
});

biomarket.find.t_biomarket$find86094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"find-view","find-view",-467653823,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta86095","meta86095",923963103,null)], null);
});

biomarket.find.t_biomarket$find86094.cljs$lang$type = true;

biomarket.find.t_biomarket$find86094.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find86094";

biomarket.find.t_biomarket$find86094.cljs$lang$ctorPrWriter = (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.find/t_biomarket$find86094");
});

biomarket.find.__GT_t_biomarket$find86094 = (function biomarket$find$find_view_$___GT_t_biomarket$find86094(find_view__$1,___$1,owner__$1,meta86095){
return (new biomarket.find.t_biomarket$find86094(find_view__$1,___$1,owner__$1,meta86095));
});

}

return (new biomarket.find.t_biomarket$find86094(biomarket$find$find_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=find.js.map