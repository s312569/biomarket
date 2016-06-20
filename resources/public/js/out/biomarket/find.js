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
if(typeof biomarket.find.t_biomarket$find66720 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find66720 = (function (show_skills,project,owner,meta66721){
this.show_skills = show_skills;
this.project = project;
this.owner = owner;
this.meta66721 = meta66721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find66720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66722,meta66721__$1){
var self__ = this;
var _66722__$1 = this;
return (new biomarket.find.t_biomarket$find66720(self__.show_skills,self__.project,self__.owner,meta66721__$1));
});

biomarket.find.t_biomarket$find66720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66722){
var self__ = this;
var _66722__$1 = this;
return self__.meta66721;
});

biomarket.find.t_biomarket$find66720.prototype.om$core$IRender$ = true;

biomarket.find.t_biomarket$find66720.prototype.om$core$IRender$render$arity$1 = (function (this__28885__auto__){
var self__ = this;
var this__28885__auto____$1 = this;
return React.DOM.div({"style": {"padding-top": "20px"}},om.core.build.call(null,biomarket.skills.skill_tags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.project,cljs.core.PersistentArrayMap.EMPTY], null)));
});

biomarket.find.t_biomarket$find66720.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-skills","show-skills",1065280605,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66721","meta66721",-42029333,null)], null);
});

biomarket.find.t_biomarket$find66720.cljs$lang$type = true;

biomarket.find.t_biomarket$find66720.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find66720";

biomarket.find.t_biomarket$find66720.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.find/t_biomarket$find66720");
});

biomarket.find.__GT_t_biomarket$find66720 = (function biomarket$find$show_skills_$___GT_t_biomarket$find66720(show_skills__$1,project__$1,owner__$1,meta66721){
return (new biomarket.find.t_biomarket$find66720(show_skills__$1,project__$1,owner__$1,meta66721));
});

}

return (new biomarket.find.t_biomarket$find66720(biomarket$find$show_skills,project,owner,null));
});
cljs.core._add_method.call(null,biomarket.projectdisplay.bottom,new cljs.core.Keyword(null,"found-projects","found-projects",-1675279234),(function (p,owner){
if(typeof biomarket.find.t_biomarket$find66723 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find66723 = (function (p,owner,meta66724){
this.p = p;
this.owner = owner;
this.meta66724 = meta66724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find66723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66725,meta66724__$1){
var self__ = this;
var _66725__$1 = this;
return (new biomarket.find.t_biomarket$find66723(self__.p,self__.owner,meta66724__$1));
});

biomarket.find.t_biomarket$find66723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66725){
var self__ = this;
var _66725__$1 = this;
return self__.meta66724;
});

biomarket.find.t_biomarket$find66723.prototype.om$core$IRender$ = true;

biomarket.find.t_biomarket$find66723.prototype.om$core$IRender$render$arity$1 = (function (this__28885__auto__){
var self__ = this;
var this__28885__auto____$1 = this;
var links = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skills","skills",958701426),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.skills.skills_bbutton,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p,new cljs.core.Keyword(null,"skills","skills",958701426)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.find.show_skills,self__.p], null)], null),new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.bid_history_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p,new cljs.core.Keyword(null,"bids","bids",-1493194652)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.show_bids,self__.p], null)], null),new cljs.core.Keyword(null,"discussion","discussion",-188707284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.comments.comment_bbutton,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p,new cljs.core.Keyword(null,"discussion","discussion",-188707284)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.comments.comments,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.p], null)], null)], null)], null);
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.p))){
return React.DOM.div(null,React.DOM.hr(null),om.core.build.call(null,biomarket.projectdisplay.bottom_skel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [links,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.bid_widget,self__.p], null),new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(self__.p)], null)));
} else {
return React.DOM.div(null,React.DOM.hr(null),om.core.build.call(null,biomarket.projectdisplay.bottom_skel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__26745__auto__ = cljs.core.first.call(null,links);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26745__auto__);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [biomarket.bids.bid_widget,self__.p], null),new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(self__.p)], null)));
}
});

biomarket.find.t_biomarket$find66723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66724","meta66724",-1875385070,null)], null);
});

biomarket.find.t_biomarket$find66723.cljs$lang$type = true;

biomarket.find.t_biomarket$find66723.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find66723";

biomarket.find.t_biomarket$find66723.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.find/t_biomarket$find66723");
});

biomarket.find.__GT_t_biomarket$find66723 = (function biomarket$find$__GT_t_biomarket$find66723(p__$1,owner__$1,meta66724){
return (new biomarket.find.t_biomarket$find66723(p__$1,owner__$1,meta66724));
});

}

return (new biomarket.find.t_biomarket$find66723(p,owner,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"found-projects","found-projects",-1675279234),(function (project){
if(typeof biomarket.find.t_biomarket$find66726 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find66726 = (function (project,meta66727){
this.project = project;
this.meta66727 = meta66727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find66726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66728,meta66727__$1){
var self__ = this;
var _66728__$1 = this;
return (new biomarket.find.t_biomarket$find66726(self__.project,meta66727__$1));
});

biomarket.find.t_biomarket$find66726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66728){
var self__ = this;
var _66728__$1 = this;
return self__.meta66727;
});

biomarket.find.t_biomarket$find66726.prototype.om$core$IRender$ = true;

biomarket.find.t_biomarket$find66726.prototype.om$core$IRender$render$arity$1 = (function (this__28885__auto__){
var self__ = this;
var this__28885__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var ub = cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,new cljs.core.Keyword(null,"user-bids","user-bids",-736079184).cljs$core$IFn$_invoke$arity$1(self__.project)));
var best = biomarket.bids.best_bid.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project));
if(cljs.core.truth_(ub)){
return React.DOM.span(null,biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join('')),biomarket.projectdisplay.label.call(null,"label label-primary",[cljs.core.str("Your bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ub))].join('')));
} else {
if(cljs.core.truth_(best)){
return React.DOM.span(null,biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join('')));
} else {
return React.DOM.span(null,biomarket.projectdisplay.label.call(null,"label label-danger","No bids yet!"));

}
}
})());
});

biomarket.find.t_biomarket$find66726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta66727","meta66727",496005357,null)], null);
});

biomarket.find.t_biomarket$find66726.cljs$lang$type = true;

biomarket.find.t_biomarket$find66726.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find66726";

biomarket.find.t_biomarket$find66726.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.find/t_biomarket$find66726");
});

biomarket.find.__GT_t_biomarket$find66726 = (function biomarket$find$__GT_t_biomarket$find66726(project__$1,meta66727){
return (new biomarket.find.t_biomarket$find66726(project__$1,meta66727));
});

}

return (new biomarket.find.t_biomarket$find66726(project,null));
}));
biomarket.find.find_view = (function biomarket$find$find_view(_,owner){
if(typeof biomarket.find.t_biomarket$find66737 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find66737 = (function (find_view,_,owner,meta66738){
this.find_view = find_view;
this._ = _;
this.owner = owner;
this.meta66738 = meta66738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find66737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66739,meta66738__$1){
var self__ = this;
var _66739__$1 = this;
return (new biomarket.find.t_biomarket$find66737(self__.find_view,self__._,self__.owner,meta66738__$1));
});

biomarket.find.t_biomarket$find66737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66739){
var self__ = this;
var _66739__$1 = this;
return self__.meta66738;
});

biomarket.find.t_biomarket$find66737.prototype.om$core$IInitState$ = true;

biomarket.find.t_biomarket$find66737.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"projects","projects",-364845983),false,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"found-projects","found-projects",-1675279234)], null);
});

biomarket.find.t_biomarket$find66737.prototype.om$core$IWillMount$ = true;

biomarket.find.t_biomarket$find66737.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.server.get_data.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"all-projects","all-projects",-406074149),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"open","open",-1763596448)], null),((function (___$2){
return (function (p1__66729_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"biddead","biddead",371948723),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__66729_SHARP_)));
});})(___$2))
);
});

biomarket.find.t_biomarket$find66737.prototype.om$core$IRenderState$ = true;

biomarket.find.t_biomarket$find66737.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__66740){
var self__ = this;
var map__66741 = p__66740;
var map__66741__$1 = ((((!((map__66741 == null)))?((((map__66741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66741):map__66741);
var projects = cljs.core.get.call(null,map__66741__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var bottoms = cljs.core.get.call(null,map__66741__$1,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497));
var ___$2 = this;
if(cljs.core.truth_(projects)){
return React.DOM.div(null,((cljs.core.seq.call(null,projects))?React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},cljs.core.apply.call(null,om.dom.div,{"className": "col-md-12"},cljs.core.map.call(null,((function (___$2,map__66741,map__66741__$1,projects,bottoms){
return (function (p1__66730_SHARP_){
return om.core.build.call(null,biomarket.projectdisplay.project_summary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__66730_SHARP_,new cljs.core.Keyword(null,"found-projects","found-projects",-1675279234)], null));
});})(___$2,map__66741,map__66741__$1,projects,bottoms))
,projects)))):React.DOM.div({"style": {"padding-top": "30px", "text-align": "center"}},[cljs.core.str("No projects found")].join(''))));
} else {
return om.core.build.call(null,biomarket.utilities.waiting,null);
}
});

biomarket.find.t_biomarket$find66737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"find-view","find-view",-467653823,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66738","meta66738",2091308763,null)], null);
});

biomarket.find.t_biomarket$find66737.cljs$lang$type = true;

biomarket.find.t_biomarket$find66737.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find66737";

biomarket.find.t_biomarket$find66737.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.find/t_biomarket$find66737");
});

biomarket.find.__GT_t_biomarket$find66737 = (function biomarket$find$find_view_$___GT_t_biomarket$find66737(find_view__$1,___$1,owner__$1,meta66738){
return (new biomarket.find.t_biomarket$find66737(find_view__$1,___$1,owner__$1,meta66738));
});

}

return (new biomarket.find.t_biomarket$find66737(biomarket$find$find_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=find.js.map