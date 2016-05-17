// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.comments');
goog.require('cljs.core');
goog.require('biomarket.utilities');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('cljs_time.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('cljs_time.format');
goog.require('om.core');
goog.require('clojure.string');
biomarket.comments.comment_server_call = (function biomarket$comments$comment_server_call(owner,pid){
var h = (function (p__31135){
var map__31136 = p__31135;
var map__31136__$1 = ((((!((map__31136 == null)))?((((map__31136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31136):map__31136);
var status = cljs.core.get.call(null,map__31136__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__31136__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"comments","comments",-293346423),result);
});
return biomarket.utilities.post_params.call(null,"/comments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1018387698),pid], null),h);
});
biomarket.comments.submit_comment_call = (function biomarket$comments$submit_comment_call(owner,pid){
var c = new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)));
var h = ((function (c){
return (function (p__31141){
var map__31142 = p__31141;
var map__31142__$1 = ((((!((map__31142 == null)))?((((map__31142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31142):map__31142);
var status = cljs.core.get.call(null,map__31142__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__31142__$1,new cljs.core.Keyword(null,"result","result",1415092211));
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"comments","comments",-293346423),result);

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.update_in.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"value","value",305978217)], null),((function (map__31142,map__31142__$1,status,result,c){
return (function (_){
return "";
});})(map__31142,map__31142__$1,status,result,c))
));
});})(c))
;
return biomarket.utilities.post_params.call(null,"save-comment",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pid","pid",1018387698),pid,new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(c)], null),h);
});
biomarket.comments.show_comment = (function biomarket$comments$show_comment(comment,owner){
return React.DOM.div(null,React.DOM.div({"style": {"font-size": "small", "text-align": "left", "color": ((cljs.core._EQ_.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"bidder","bidder",1514778257)),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(comment)))?"red":"green")}},[cljs.core.str("On "),cljs.core.str(biomarket.utilities.datestring__GT_readable.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(comment))),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(comment)),cljs.core.str(" said:")].join('')),React.DOM.div({"style": {"margin": "5px", "font-weight": "bold"}},new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(comment),React.DOM.hr(null)));
});
biomarket.comments.comment_control = (function biomarket$comments$comment_control(inputs,owner){
return React.DOM.div({"className": "form"},cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,(function (p1__31144_SHARP_){
return om.core.build.call(null,biomarket.utilities.input,cljs.core.conj.call(null,p1__31144_SHARP_,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"cid","cid",-1940591320))));
}),inputs)),React.DOM.a({"className": "btn btn-primary", "onClick": (function (){
return biomarket.utilities.pub_info.call(null,owner,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"cid","cid",-1940591320)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"submit","submit",-49315317)], null));
})},"Comment"));
});
biomarket.comments.comments = (function biomarket$comments$comments(project,owner){
if(typeof biomarket.comments.t_biomarket$comments31159 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.comments.t_biomarket$comments31159 = (function (comments,project,owner,meta31160){
this.comments = comments;
this.project = project;
this.owner = owner;
this.meta31160 = meta31160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.comments.t_biomarket$comments31159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31161,meta31160__$1){
var self__ = this;
var _31161__$1 = this;
return (new biomarket.comments.t_biomarket$comments31159(self__.comments,self__.project,self__.owner,meta31160__$1));
});

biomarket.comments.t_biomarket$comments31159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31161){
var self__ = this;
var _31161__$1 = this;
return self__.meta31160;
});

biomarket.comments.t_biomarket$comments31159.prototype.om$core$IInitState$ = true;

biomarket.comments.t_biomarket$comments31159.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"rows","rows",850049680),"2",new cljs.core.Keyword(null,"name","name",1843675177),"comment",new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"no-icon","no-icon",-1734606666),new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"submitf","submitf",657741776),((function (___$1){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"cid","cid",-1940591320)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"submit","submit",-49315317)], null));
});})(___$1))
], null)], null),new cljs.core.Keyword(null,"bidee","bidee",823453409),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(self__.project),new cljs.core.Keyword(null,"cid","cid",-1940591320),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"comments","comments",-293346423),null], null);
});

biomarket.comments.t_biomarket$comments31159.prototype.om$core$IWillMount$ = true;

biomarket.comments.t_biomarket$comments31159.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
biomarket.utilities.register_loop.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"cid","cid",-1940591320)),((function (___$1){
return (function (o,p__31162){
var map__31163 = p__31162;
var map__31163__$1 = ((((!((map__31163 == null)))?((((map__31163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31163):map__31163);
var data = cljs.core.get.call(null,map__31163__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var pred__31165 = cljs.core._EQ_;
var expr__31166 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(pred__31165.call(null,new cljs.core.Keyword(null,"submit","submit",-49315317),expr__31166))){
return biomarket.comments.submit_comment_call.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project));
} else {
return biomarket.utilities.get_input.call(null,o,data);
}
});})(___$1))
);

return biomarket.comments.comment_server_call.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project));
});

biomarket.comments.t_biomarket$comments31159.prototype.om$core$IRenderState$ = true;

biomarket.comments.t_biomarket$comments31159.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__31168){
var self__ = this;
var map__31169 = p__31168;
var map__31169__$1 = ((((!((map__31169 == null)))?((((map__31169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31169):map__31169);
var inputs = cljs.core.get.call(null,map__31169__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var cid = cljs.core.get.call(null,map__31169__$1,new cljs.core.Keyword(null,"cid","cid",-1940591320));
var comments__$1 = cljs.core.get.call(null,map__31169__$1,new cljs.core.Keyword(null,"comments","comments",-293346423));
var ___$1 = this;
return React.DOM.div({"style": {"margin-top": "10px"}},React.DOM.label(null,"Discussion"),React.DOM.div({"className": "panel panel-default", "style": {"min-height": "100%"}},cljs.core.apply.call(null,om.dom.div,{"className": "panel-body", "ref": "comments", "style": {"margin": "5px", "max-height": "200", "overflow-y": "scroll", "position": "relative", "bottom": "0"}},((cljs.core.not.call(null,cljs.core.seq.call(null,comments__$1)))?(function (){var x__23697__auto__ = React.DOM.div({"style": {"text-align": "center"}},"No discussion yet!");
return cljs.core._conj.call(null,(function (){var x__23697__auto____$1 = React.DOM.hr(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23697__auto____$1);
})(),x__23697__auto__);
})():cljs.core.map.call(null,((function (___$1,map__31169,map__31169__$1,inputs,cid,comments__$1){
return (function (p1__31145_SHARP_){
return biomarket.comments.show_comment.call(null,p1__31145_SHARP_,self__.owner);
});})(___$1,map__31169,map__31169__$1,inputs,cid,comments__$1))
,cljs.core.filter.call(null,((function (___$1,map__31169,map__31169__$1,inputs,cid,comments__$1){
return (function (p1__31146_SHARP_){
return !(cljs.core._EQ_.call(null,"",clojure.string.trim.call(null,new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(p1__31146_SHARP_))));
});})(___$1,map__31169,map__31169__$1,inputs,cid,comments__$1))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._LT_,comments__$1))))),React.DOM.div({"className": "panel-footer"},biomarket.comments.comment_control.call(null,inputs,self__.owner))));
});

biomarket.comments.t_biomarket$comments31159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"comments","comments",1347185104,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31160","meta31160",-212811456,null)], null);
});

biomarket.comments.t_biomarket$comments31159.cljs$lang$type = true;

biomarket.comments.t_biomarket$comments31159.cljs$lang$ctorStr = "biomarket.comments/t_biomarket$comments31159";

biomarket.comments.t_biomarket$comments31159.cljs$lang$ctorPrWriter = (function (this__23469__auto__,writer__23470__auto__,opt__23471__auto__){
return cljs.core._write.call(null,writer__23470__auto__,"biomarket.comments/t_biomarket$comments31159");
});

biomarket.comments.__GT_t_biomarket$comments31159 = (function biomarket$comments$comments_$___GT_t_biomarket$comments31159(comments__$1,project__$1,owner__$1,meta31160){
return (new biomarket.comments.t_biomarket$comments31159(comments__$1,project__$1,owner__$1,meta31160));
});

}

return (new biomarket.comments.t_biomarket$comments31159(biomarket$comments$comments,project,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=comments.js.map