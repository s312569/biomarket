// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.find');
goog.require('cljs.core');
goog.require('biomarket.utilities');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
goog.require('clojure.string');
biomarket.find.get_projects = (function biomarket$find$get_projects(owner,view){
var h = (function (p__43144){
var map__43145 = p__43144;
var map__43145__$1 = ((((!((map__43145 == null)))?((((map__43145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43145):map__43145);
var status = cljs.core.get.call(null,map__43145__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__43145__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),result);
} else {
return null;
}
});
return biomarket.utilities.post_params.call(null,"/projects",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"query-type","query-type",1897493311),new cljs.core.Keyword(null,"all-projects","all-projects",-406074149)], null),h);
});
biomarket.find.get_skills = (function biomarket$find$get_skills(owner){
var h = (function (p__43150){
var map__43151 = p__43150;
var map__43151__$1 = ((((!((map__43151 == null)))?((((map__43151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43151):map__43151);
var status = cljs.core.get.call(null,map__43151__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__43151__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"skills","skills",958701426),result);
} else {
return null;
}
});
return biomarket.utilities.post_params.call(null,"/project-skills",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1018387698),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579)))], null),h);
});
biomarket.find.show_skills = (function biomarket$find$show_skills(skills,owner){
if(typeof biomarket.find.t_biomarket$find43156 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find43156 = (function (show_skills,skills,owner,meta43157){
this.show_skills = show_skills;
this.skills = skills;
this.owner = owner;
this.meta43157 = meta43157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find43156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43158,meta43157__$1){
var self__ = this;
var _43158__$1 = this;
return (new biomarket.find.t_biomarket$find43156(self__.show_skills,self__.skills,self__.owner,meta43157__$1));
});

biomarket.find.t_biomarket$find43156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43158){
var self__ = this;
var _43158__$1 = this;
return self__.meta43157;
});

biomarket.find.t_biomarket$find43156.prototype.om$core$IRender$ = true;

biomarket.find.t_biomarket$find43156.prototype.om$core$IRender$render$arity$1 = (function (this__25403__auto__){
var self__ = this;
var this__25403__auto____$1 = this;
return React.DOM.div({"style": {"padding-top": "20px"}},om.core.build.call(null,biomarket.utilities.skill_tags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.skills,cljs.core.PersistentArrayMap.EMPTY], null)));
});

biomarket.find.t_biomarket$find43156.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-skills","show-skills",1065280605,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"skills","skills",-1695734343,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"skills","skills",-1695734343,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43157","meta43157",-1522067570,null)], null);
});

biomarket.find.t_biomarket$find43156.cljs$lang$type = true;

biomarket.find.t_biomarket$find43156.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find43156";

biomarket.find.t_biomarket$find43156.cljs$lang$ctorPrWriter = (function (this__23141__auto__,writer__23142__auto__,opt__23143__auto__){
return cljs.core._write.call(null,writer__23142__auto__,"biomarket.find/t_biomarket$find43156");
});

biomarket.find.__GT_t_biomarket$find43156 = (function biomarket$find$show_skills_$___GT_t_biomarket$find43156(show_skills__$1,skills__$1,owner__$1,meta43157){
return (new biomarket.find.t_biomarket$find43156(show_skills__$1,skills__$1,owner__$1,meta43157));
});

}

return (new biomarket.find.t_biomarket$find43156(biomarket$find$show_skills,skills,owner,null));
});
biomarket.find.show_bid_form = (function biomarket$find$show_bid_form(p__43160,owner){
var vec__43165 = p__43160;
var inputs = cljs.core.nth.call(null,vec__43165,(0),null);
var tag = cljs.core.nth.call(null,vec__43165,(1),null);
if(typeof biomarket.find.t_biomarket$find43166 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find43166 = (function (show_bid_form,p__43160,owner,vec__43165,inputs,tag,meta43167){
this.show_bid_form = show_bid_form;
this.p__43160 = p__43160;
this.owner = owner;
this.vec__43165 = vec__43165;
this.inputs = inputs;
this.tag = tag;
this.meta43167 = meta43167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find43166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__43165,inputs,tag){
return (function (_43168,meta43167__$1){
var self__ = this;
var _43168__$1 = this;
return (new biomarket.find.t_biomarket$find43166(self__.show_bid_form,self__.p__43160,self__.owner,self__.vec__43165,self__.inputs,self__.tag,meta43167__$1));
});})(vec__43165,inputs,tag))
;

biomarket.find.t_biomarket$find43166.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__43165,inputs,tag){
return (function (_43168){
var self__ = this;
var _43168__$1 = this;
return self__.meta43167;
});})(vec__43165,inputs,tag))
;

biomarket.find.t_biomarket$find43166.prototype.om$core$IRender$ = true;

biomarket.find.t_biomarket$find43166.prototype.om$core$IRender$render$arity$1 = ((function (vec__43165,inputs,tag){
return (function (this__25403__auto__){
var self__ = this;
var this__25403__auto____$1 = this;
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.form,{"style": {"padding-top": "20px"}},cljs.core.map.call(null,((function (this__25403__auto____$1,vec__43165,inputs,tag){
return (function (p1__43159_SHARP_){
return om.core.build.call(null,biomarket.utilities.input,cljs.core.conj.call(null,p1__43159_SHARP_,self__.tag));
});})(this__25403__auto____$1,vec__43165,inputs,tag))
,self__.inputs)),React.DOM.button({"className": "btn btn-primary", "onClick": ((function (this__25403__auto____$1,vec__43165,inputs,tag){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.tag,new cljs.core.Keyword(null,"submit","submit",-49315317));
});})(this__25403__auto____$1,vec__43165,inputs,tag))
},"Submit"));
});})(vec__43165,inputs,tag))
;

biomarket.find.t_biomarket$find43166.getBasis = ((function (vec__43165,inputs,tag){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-bid-form","show-bid-form",2069818702,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__43160","p__43160",-1699591131,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__43165","vec__43165",-825303373,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta43167","meta43167",-1802011323,null)], null);
});})(vec__43165,inputs,tag))
;

biomarket.find.t_biomarket$find43166.cljs$lang$type = true;

biomarket.find.t_biomarket$find43166.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find43166";

biomarket.find.t_biomarket$find43166.cljs$lang$ctorPrWriter = ((function (vec__43165,inputs,tag){
return (function (this__23141__auto__,writer__23142__auto__,opt__23143__auto__){
return cljs.core._write.call(null,writer__23142__auto__,"biomarket.find/t_biomarket$find43166");
});})(vec__43165,inputs,tag))
;

biomarket.find.__GT_t_biomarket$find43166 = ((function (vec__43165,inputs,tag){
return (function biomarket$find$show_bid_form_$___GT_t_biomarket$find43166(show_bid_form__$1,p__43160__$1,owner__$1,vec__43165__$1,inputs__$1,tag__$1,meta43167){
return (new biomarket.find.t_biomarket$find43166(show_bid_form__$1,p__43160__$1,owner__$1,vec__43165__$1,inputs__$1,tag__$1,meta43167));
});})(vec__43165,inputs,tag))
;

}

return (new biomarket.find.t_biomarket$find43166(biomarket$find$show_bid_form,p__43160,owner,vec__43165,inputs,tag,null));
});
biomarket.find.project_summary = (function biomarket$find$project_summary(project,owner){
if(typeof biomarket.find.t_biomarket$find43181 !== 'undefined'){
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
biomarket.find.t_biomarket$find43181 = (function (project_summary,project,owner,meta43182){
this.project_summary = project_summary;
this.project = project;
this.owner = owner;
this.meta43182 = meta43182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find43181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43183,meta43182__$1){
var self__ = this;
var _43183__$1 = this;
return (new biomarket.find.t_biomarket$find43181(self__.project_summary,self__.project,self__.owner,meta43182__$1));
});

biomarket.find.t_biomarket$find43181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43183){
var self__ = this;
var _43183__$1 = this;
return self__.meta43182;
});

biomarket.find.t_biomarket$find43181.prototype.om$core$IInitState$ = true;

biomarket.find.t_biomarket$find43181.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var id = cljs.core.gensym.call(null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bid","bid",-1944960257),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"spid","spid",1854581004),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invalid","invalid",412869516),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"before","before",-1633692388)],["Amount in Dollars","bid","1",[cljs.core.str("s"),cljs.core.str(id),cljs.core.str("-1")].join(''),"number",false,"Bid amount:",new cljs.core.Keyword(null,"addon","addon",931813532),new cljs.core.Keyword(null,"basis","basis",1865819339).cljs$core$IFn$_invoke$arity$1(self__.project),[cljs.core.str(id),cljs.core.str("-1")].join(''),"$"]),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Comment",new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"name","name",1843675177),"comment",new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str(id),cljs.core.str("-2")].join(''),new cljs.core.Keyword(null,"spid","spid",1854581004),[cljs.core.str("s"),cljs.core.str(id),cljs.core.str("-1")].join(''),new cljs.core.Keyword(null,"title","title",636505583),"Comment: ",new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null)], null);
});

biomarket.find.t_biomarket$find43181.prototype.om$core$IWillMount$ = true;

biomarket.find.t_biomarket$find43181.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),((function (___$1){
return (function (o,p__43184){
var map__43185 = p__43184;
var map__43185__$1 = ((((!((map__43185 == null)))?((((map__43185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43185):map__43185);
var data = cljs.core.get.call(null,map__43185__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var pred__43187 = cljs.core._EQ_;
var expr__43188 = data;
if(cljs.core.truth_(pred__43187.call(null,new cljs.core.Keyword(null,"submit","submit",-49315317),expr__43188))){
return biomarket.utilities.log.call(null,"Submitting");
} else {
return biomarket.utilities.get_input.call(null,o,data);
}
});})(___$1))
);
});

biomarket.find.t_biomarket$find43181.prototype.om$core$IWillUnmount$ = true;

biomarket.find.t_biomarket$find43181.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project));
});

biomarket.find.t_biomarket$find43181.prototype.om$core$IRenderState$ = true;

biomarket.find.t_biomarket$find43181.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__43190){
var self__ = this;
var map__43191 = p__43190;
var map__43191__$1 = ((((!((map__43191 == null)))?((((map__43191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43191):map__43191);
var inputs = cljs.core.get.call(null,map__43191__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var ___$1 = this;
return om.core.build.call(null,biomarket.utilities.project_panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.project,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"skills","skills",958701426),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Matched skills",biomarket.find.show_skills,new cljs.core.Keyword(null,"skills","skills",958701426).cljs$core$IFn$_invoke$arity$1(self__.project)], null),new cljs.core.Keyword(null,"offer","offer",-124575128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bid!",biomarket.find.show_bid_form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project)], null)], null)], null)], null));
});

biomarket.find.t_biomarket$find43181.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"project-summary","project-summary",1896971412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43182","meta43182",-1208130999,null)], null);
});

biomarket.find.t_biomarket$find43181.cljs$lang$type = true;

biomarket.find.t_biomarket$find43181.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find43181";

biomarket.find.t_biomarket$find43181.cljs$lang$ctorPrWriter = (function (this__23141__auto__,writer__23142__auto__,opt__23143__auto__){
return cljs.core._write.call(null,writer__23142__auto__,"biomarket.find/t_biomarket$find43181");
});

biomarket.find.__GT_t_biomarket$find43181 = (function biomarket$find$project_summary_$___GT_t_biomarket$find43181(project_summary__$1,project__$1,owner__$1,meta43182){
return (new biomarket.find.t_biomarket$find43181(project_summary__$1,project__$1,owner__$1,meta43182));
});

}

return (new biomarket.find.t_biomarket$find43181(biomarket$find$project_summary,project,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.find.find_view = (function biomarket$find$find_view(_,owner){
if(typeof biomarket.find.t_biomarket$find43200 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.find.t_biomarket$find43200 = (function (find_view,_,owner,meta43201){
this.find_view = find_view;
this._ = _;
this.owner = owner;
this.meta43201 = meta43201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.find.t_biomarket$find43200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43202,meta43201__$1){
var self__ = this;
var _43202__$1 = this;
return (new biomarket.find.t_biomarket$find43200(self__.find_view,self__._,self__.owner,meta43201__$1));
});

biomarket.find.t_biomarket$find43200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43202){
var self__ = this;
var _43202__$1 = this;
return self__.meta43201;
});

biomarket.find.t_biomarket$find43200.prototype.om$core$IInitState$ = true;

biomarket.find.t_biomarket$find43200.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.PersistentVector.EMPTY], null);
});

biomarket.find.t_biomarket$find43200.prototype.om$core$IWillMount$ = true;

biomarket.find.t_biomarket$find43200.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.find.get_projects.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814)));
});

biomarket.find.t_biomarket$find43200.prototype.om$core$IRenderState$ = true;

biomarket.find.t_biomarket$find43200.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__43203){
var self__ = this;
var map__43204 = p__43203;
var map__43204__$1 = ((((!((map__43204 == null)))?((((map__43204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43204):map__43204);
var nav = cljs.core.get.call(null,map__43204__$1,new cljs.core.Keyword(null,"nav","nav",719540477));
var projects = cljs.core.get.call(null,map__43204__$1,new cljs.core.Keyword(null,"projects","projects",-364845983));
var inputs = cljs.core.get.call(null,map__43204__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var view = cljs.core.get.call(null,map__43204__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var ___$2 = this;
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (___$2,map__43204,map__43204__$1,nav,projects,inputs,view){
return (function (p1__43193_SHARP_){
return om.core.build.call(null,biomarket.find.project_summary,p1__43193_SHARP_);
});})(___$2,map__43204,map__43204__$1,nav,projects,inputs,view))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"biddead","biddead",371948723),projects))));
});

biomarket.find.t_biomarket$find43200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"find-view","find-view",-467653823,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta43201","meta43201",-2118791778,null)], null);
});

biomarket.find.t_biomarket$find43200.cljs$lang$type = true;

biomarket.find.t_biomarket$find43200.cljs$lang$ctorStr = "biomarket.find/t_biomarket$find43200";

biomarket.find.t_biomarket$find43200.cljs$lang$ctorPrWriter = (function (this__23141__auto__,writer__23142__auto__,opt__23143__auto__){
return cljs.core._write.call(null,writer__23142__auto__,"biomarket.find/t_biomarket$find43200");
});

biomarket.find.__GT_t_biomarket$find43200 = (function biomarket$find$find_view_$___GT_t_biomarket$find43200(find_view__$1,___$1,owner__$1,meta43201){
return (new biomarket.find.t_biomarket$find43200(find_view__$1,___$1,owner__$1,meta43201));
});

}

return (new biomarket.find.t_biomarket$find43200(biomarket$find$find_view,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=find.js.map