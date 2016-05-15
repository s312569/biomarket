// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.find');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('biomarket.utilities');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
goog.require('clojure.string');
goog.require('cljs_time.format');
biomarket.find.get_projects = (function biomarket$find$get_projects(owner,view){
var h = (function (p__35667){
var map__35668 = p__35667;
var map__35668__$1 = ((((!((map__35668 == null)))?((((map__35668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35668):map__35668);
var status = cljs.core.get.call(null,map__35668__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__35668__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),result);
} else {
return null;
}
});
return biomarket.utilities.post_params.call(null,"/projects",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"query-type","query-type",1897493311),new cljs.core.Keyword(null,"all-projects","all-projects",-406074149)], null),h);
});
biomarket.find.get_skills = (function biomarket$find$get_skills(owner){
var h = (function (p__35673){
var map__35674 = p__35673;
var map__35674__$1 = ((((!((map__35674 == null)))?((((map__35674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35674):map__35674);
var status = cljs.core.get.call(null,map__35674__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__35674__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"skills","skills",958701426),result);
} else {
return null;
}
});
return biomarket.utilities.post_params.call(null,"/project-skills",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1018387698),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579)))], null),h);
});
biomarket.find.submit_bids = (function biomarket$find$submit_bids(owner){
var project = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579));
var f = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"basic-date-time","basic-date-time",1525413604));
var h = ((function (project,f){
return (function (p__35681){
var map__35682 = p__35681;
var map__35682__$1 = ((((!((map__35682 == null)))?((((map__35682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35682):map__35682);
var status = cljs.core.get.call(null,map__35682__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__35682__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.merge.call(null,project,result));
} else {
return null;
}
});})(project,f))
;
return biomarket.utilities.post_params.call(null,"/save-bid",cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (project,f,h){
return (function (p__35684){
var vec__35685 = p__35684;
var k = cljs.core.nth.call(null,vec__35685,(0),null);
var v = cljs.core.nth.call(null,vec__35685,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(v)],null));
});})(project,f,h))
,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pid","pid",1018387698),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"time","time",1385887882),cljs_time.format.unparse.call(null,f,cljs_time.core.now.call(null)),new cljs.core.Keyword(null,"basis","basis",1865819339),new cljs.core.Keyword(null,"basis","basis",1865819339).cljs$core$IFn$_invoke$arity$1(project)], null)),h);
});
biomarket.find.show_skills = (function biomarket$find$show_skills(skills,owner){
if(typeof biomarket.find.t_biomarket$find35689 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find35689 = (function (show_skills,skills,owner,meta35690){
this.show_skills = show_skills;
this.skills = skills;
this.owner = owner;
this.meta35690 = meta35690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find35689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35691,meta35690__$1){
var self__ = this;
var _35691__$1 = this;
return (new biomarket.find.t_biomarket$find35689(self__.show_skills,self__.skills,self__.owner,meta35690__$1));
});

biomarket.find.t_biomarket$find35689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35691){
var self__ = this;
var _35691__$1 = this;
return self__.meta35690;
});

biomarket.find.t_biomarket$find35689.prototype.om$core$IRender$ = true;

biomarket.find.t_biomarket$find35689.prototype.om$core$IRender$render$arity$1 = (function (this__25453__auto__){
var self__ = this;
var this__25453__auto____$1 = this;
return React.DOM.div({"style": {"padding-top": "20px"}},om.core.build.call(null,biomarket.utilities.skill_tags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.skills,cljs.core.PersistentArrayMap.EMPTY], null)));
});

biomarket.find.t_biomarket$find35689.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-skills","show-skills",1065280605,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"skills","skills",-1695734343,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"skills","skills",-1695734343,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta35690","meta35690",-1451214194,null)], null);
});

biomarket.find.t_biomarket$find35689.cljs$lang$type = true;

biomarket.find.t_biomarket$find35689.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find35689";

biomarket.find.t_biomarket$find35689.cljs$lang$ctorPrWriter = (function (this__23191__auto__,writer__23192__auto__,opt__23193__auto__){
return cljs.core._write.call(null,writer__23192__auto__,"biomarket.find/t_biomarket$find35689");
});

biomarket.find.__GT_t_biomarket$find35689 = (function biomarket$find$show_skills_$___GT_t_biomarket$find35689(show_skills__$1,skills__$1,owner__$1,meta35690){
return (new biomarket.find.t_biomarket$find35689(show_skills__$1,skills__$1,owner__$1,meta35690));
});

}

return (new biomarket.find.t_biomarket$find35689(biomarket$find$show_skills,skills,owner,null));
});
biomarket.find.show_bid_form = (function biomarket$find$show_bid_form(p__35693,owner){
var vec__35698 = p__35693;
var inputs = cljs.core.nth.call(null,vec__35698,(0),null);
var tag = cljs.core.nth.call(null,vec__35698,(1),null);
if(typeof biomarket.find.t_biomarket$find35699 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find35699 = (function (show_bid_form,p__35693,owner,vec__35698,inputs,tag,meta35700){
this.show_bid_form = show_bid_form;
this.p__35693 = p__35693;
this.owner = owner;
this.vec__35698 = vec__35698;
this.inputs = inputs;
this.tag = tag;
this.meta35700 = meta35700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find35699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__35698,inputs,tag){
return (function (_35701,meta35700__$1){
var self__ = this;
var _35701__$1 = this;
return (new biomarket.find.t_biomarket$find35699(self__.show_bid_form,self__.p__35693,self__.owner,self__.vec__35698,self__.inputs,self__.tag,meta35700__$1));
});})(vec__35698,inputs,tag))
;

biomarket.find.t_biomarket$find35699.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__35698,inputs,tag){
return (function (_35701){
var self__ = this;
var _35701__$1 = this;
return self__.meta35700;
});})(vec__35698,inputs,tag))
;

biomarket.find.t_biomarket$find35699.prototype.om$core$IRender$ = true;

biomarket.find.t_biomarket$find35699.prototype.om$core$IRender$render$arity$1 = ((function (vec__35698,inputs,tag){
return (function (this__25453__auto__){
var self__ = this;
var this__25453__auto____$1 = this;
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.form,{"style": {"padding-top": "20px"}},cljs.core.map.call(null,((function (this__25453__auto____$1,vec__35698,inputs,tag){
return (function (p1__35692_SHARP_){
return om.core.build.call(null,biomarket.utilities.input,cljs.core.conj.call(null,p1__35692_SHARP_,self__.tag));
});})(this__25453__auto____$1,vec__35698,inputs,tag))
,self__.inputs)),React.DOM.button({"className": "btn btn-primary", "onClick": ((function (this__25453__auto____$1,vec__35698,inputs,tag){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.tag,new cljs.core.Keyword(null,"submit","submit",-49315317));
});})(this__25453__auto____$1,vec__35698,inputs,tag))
},"Submit"));
});})(vec__35698,inputs,tag))
;

biomarket.find.t_biomarket$find35699.getBasis = ((function (vec__35698,inputs,tag){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-bid-form","show-bid-form",2069818702,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__35693","p__35693",1998151025,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__35698","vec__35698",-693784046,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta35700","meta35700",-1405053366,null)], null);
});})(vec__35698,inputs,tag))
;

biomarket.find.t_biomarket$find35699.cljs$lang$type = true;

biomarket.find.t_biomarket$find35699.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find35699";

biomarket.find.t_biomarket$find35699.cljs$lang$ctorPrWriter = ((function (vec__35698,inputs,tag){
return (function (this__23191__auto__,writer__23192__auto__,opt__23193__auto__){
return cljs.core._write.call(null,writer__23192__auto__,"biomarket.find/t_biomarket$find35699");
});})(vec__35698,inputs,tag))
;

biomarket.find.__GT_t_biomarket$find35699 = ((function (vec__35698,inputs,tag){
return (function biomarket$find$show_bid_form_$___GT_t_biomarket$find35699(show_bid_form__$1,p__35693__$1,owner__$1,vec__35698__$1,inputs__$1,tag__$1,meta35700){
return (new biomarket.find.t_biomarket$find35699(show_bid_form__$1,p__35693__$1,owner__$1,vec__35698__$1,inputs__$1,tag__$1,meta35700));
});})(vec__35698,inputs,tag))
;

}

return (new biomarket.find.t_biomarket$find35699(biomarket$find$show_bid_form,p__35693,owner,vec__35698,inputs,tag,null));
});
biomarket.find.project_summary = (function biomarket$find$project_summary(project,owner){
if(typeof biomarket.find.t_biomarket$find35714 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find35714 = (function (project_summary,project,owner,meta35715){
this.project_summary = project_summary;
this.project = project;
this.owner = owner;
this.meta35715 = meta35715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find35714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35716,meta35715__$1){
var self__ = this;
var _35716__$1 = this;
return (new biomarket.find.t_biomarket$find35714(self__.project_summary,self__.project,self__.owner,meta35715__$1));
});

biomarket.find.t_biomarket$find35714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35716){
var self__ = this;
var _35716__$1 = this;
return self__.meta35715;
});

biomarket.find.t_biomarket$find35714.prototype.om$core$IInitState$ = true;

biomarket.find.t_biomarket$find35714.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var id = cljs.core.gensym.call(null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"project","project",1124394579),self__.project,new cljs.core.Keyword(null,"bottoms","bottoms",-116131497),null,new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"amount","amount",364489504),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"spid","spid",1854581004),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invalid","invalid",412869516),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"before","before",-1633692388)],["Amount in Dollars","bid","1",[cljs.core.str("s"),cljs.core.str(id),cljs.core.str("-1")].join(''),"number",false,"Bid amount:",new cljs.core.Keyword(null,"addon","addon",931813532),new cljs.core.Keyword(null,"basis","basis",1865819339).cljs$core$IFn$_invoke$arity$1(self__.project),[cljs.core.str(id),cljs.core.str("-1")].join(''),"$"]),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Comment",new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"name","name",1843675177),"comment",new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str(id),cljs.core.str("-2")].join(''),new cljs.core.Keyword(null,"spid","spid",1854581004),[cljs.core.str("s"),cljs.core.str(id),cljs.core.str("-1")].join(''),new cljs.core.Keyword(null,"title","title",636505583),"Comment: ",new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null)], null);
});

biomarket.find.t_biomarket$find35714.prototype.om$core$IWillReceiveProps$ = true;

biomarket.find.t_biomarket$find35714.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (_,np){
var self__ = this;
var ___$1 = this;
biomarket.utilities.log.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)));

return biomarket.utilities.log.call(null,"Updating");
});

biomarket.find.t_biomarket$find35714.prototype.om$core$IWillMount$ = true;

biomarket.find.t_biomarket$find35714.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),((function (___$1){
return (function (o,p__35717){
var map__35718 = p__35717;
var map__35718__$1 = ((((!((map__35718 == null)))?((((map__35718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35718):map__35718);
var data = cljs.core.get.call(null,map__35718__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var pred__35720 = cljs.core._EQ_;
var expr__35721 = data;
if(cljs.core.truth_(pred__35720.call(null,new cljs.core.Keyword(null,"submit","submit",-49315317),expr__35721))){
return biomarket.find.submit_bids.call(null,o);
} else {
return biomarket.utilities.get_input.call(null,o,data);
}
});})(___$1))
);
});

biomarket.find.t_biomarket$find35714.prototype.om$core$IWillUnmount$ = true;

biomarket.find.t_biomarket$find35714.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project));
});

biomarket.find.t_biomarket$find35714.prototype.om$core$IRenderState$ = true;

biomarket.find.t_biomarket$find35714.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__35723){
var self__ = this;
var map__35724 = p__35723;
var map__35724__$1 = ((((!((map__35724 == null)))?((((map__35724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35724):map__35724);
var inputs = cljs.core.get.call(null,map__35724__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var project__$1 = cljs.core.get.call(null,map__35724__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var ___$1 = this;
return om.core.build.call(null,biomarket.utilities.project_panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [project__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"skills","skills",958701426),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Matched skills",biomarket.find.show_skills,new cljs.core.Keyword(null,"skills","skills",958701426).cljs$core$IFn$_invoke$arity$1(project__$1)], null),new cljs.core.Keyword(null,"offer","offer",-124575128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bid!",biomarket.find.show_bid_form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project__$1)], null)], null)], null)], null));
});

biomarket.find.t_biomarket$find35714.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"project-summary","project-summary",1896971412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta35715","meta35715",-1998160805,null)], null);
});

biomarket.find.t_biomarket$find35714.cljs$lang$type = true;

biomarket.find.t_biomarket$find35714.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find35714";

biomarket.find.t_biomarket$find35714.cljs$lang$ctorPrWriter = (function (this__23191__auto__,writer__23192__auto__,opt__23193__auto__){
return cljs.core._write.call(null,writer__23192__auto__,"biomarket.find/t_biomarket$find35714");
});

biomarket.find.__GT_t_biomarket$find35714 = (function biomarket$find$project_summary_$___GT_t_biomarket$find35714(project_summary__$1,project__$1,owner__$1,meta35715){
return (new biomarket.find.t_biomarket$find35714(project_summary__$1,project__$1,owner__$1,meta35715));
});

}

return (new biomarket.find.t_biomarket$find35714(biomarket$find$project_summary,project,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.find.find_view = (function biomarket$find$find_view(_,owner){
if(typeof biomarket.find.t_biomarket$find35733 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find35733 = (function (find_view,_,owner,meta35734){
this.find_view = find_view;
this._ = _;
this.owner = owner;
this.meta35734 = meta35734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find35733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35735,meta35734__$1){
var self__ = this;
var _35735__$1 = this;
return (new biomarket.find.t_biomarket$find35733(self__.find_view,self__._,self__.owner,meta35734__$1));
});

biomarket.find.t_biomarket$find35733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35735){
var self__ = this;
var _35735__$1 = this;
return self__.meta35734;
});

biomarket.find.t_biomarket$find35733.prototype.om$core$IInitState$ = true;

biomarket.find.t_biomarket$find35733.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.PersistentVector.EMPTY], null);
});

biomarket.find.t_biomarket$find35733.prototype.om$core$IWillMount$ = true;

biomarket.find.t_biomarket$find35733.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.find.get_projects.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814)));
});

biomarket.find.t_biomarket$find35733.prototype.om$core$IRenderState$ = true;

biomarket.find.t_biomarket$find35733.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__35736){
var self__ = this;
var map__35737 = p__35736;
var map__35737__$1 = ((((!((map__35737 == null)))?((((map__35737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35737):map__35737);
var nav = cljs.core.get.call(null,map__35737__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var projects = cljs.core.get.call(null,map__35737__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var inputs = cljs.core.get.call(null,map__35737__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var view = cljs.core.get.call(null,map__35737__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var ___$2 = this;
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (___$2,map__35737,map__35737__$1,nav,projects,inputs,view){
return (function (p1__35726_SHARP_){
return om.core.build.call(null,biomarket.find.project_summary,p1__35726_SHARP_);
});})(___$2,map__35737,map__35737__$1,nav,projects,inputs,view))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"biddead","biddead",371948723),projects))));
});

biomarket.find.t_biomarket$find35733.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"find-view","find-view",-467653823,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta35734","meta35734",-321140797,null)], null);
});

biomarket.find.t_biomarket$find35733.cljs$lang$type = true;

biomarket.find.t_biomarket$find35733.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find35733";

biomarket.find.t_biomarket$find35733.cljs$lang$ctorPrWriter = (function (this__23191__auto__,writer__23192__auto__,opt__23193__auto__){
return cljs.core._write.call(null,writer__23192__auto__,"biomarket.find/t_biomarket$find35733");
});

biomarket.find.__GT_t_biomarket$find35733 = (function biomarket$find$find_view_$___GT_t_biomarket$find35733(find_view__$1,___$1,owner__$1,meta35734){
return (new biomarket.find.t_biomarket$find35733(find_view__$1,___$1,owner__$1,meta35734));
});

}

return (new biomarket.find.t_biomarket$find35733(biomarket$find$find_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=find.js.map