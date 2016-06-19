// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.comments');
goog.require('cljs.core');
goog.require('biomarket.utilities');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('biomarket.server');
goog.require('cljs.core.async');
goog.require('cljs_time.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('cljs_time.format');
goog.require('om.core');
goog.require('clojure.string');
goog.require('biomarket.components');
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"comments-read","comments-read",1258983100),(function (owner,p__132622){
var map__132623 = p__132622;
var map__132623__$1 = ((((!((map__132623 == null)))?((((map__132623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132623):map__132623);
var data = cljs.core.get.call(null,map__132623__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"unread","unread",-1950424572),cljs.core.remove.call(null,((function (map__132623,map__132623__$1,data){
return (function (p1__132621_SHARP_){
return cljs.core.set.call(null,data).call(null,p1__132621_SHARP_);
});})(map__132623,map__132623__$1,data))
,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"unread","unread",-1950424572))));
}));
cljs.core._add_method.call(null,biomarket.server.publish_update,new cljs.core.Keyword(null,"comments-read","comments-read",1258983100),(function (p__132625){
var map__132626 = p__132625;
var map__132626__$1 = ((((!((map__132626 == null)))?((((map__132626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132626):map__132626);
var m = map__132626__$1;
var type = cljs.core.get.call(null,map__132626__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.call(null,map__132626__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.server.default_publish.call(null,m,new cljs.core.Keyword(null,"comments-read","comments-read",1258983100));
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"new-comment","new-comment",1342914881),(function (owner,p__132628){
var map__132629 = p__132628;
var map__132629__$1 = ((((!((map__132629 == null)))?((((map__132629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132629):map__132629);
var data = cljs.core.get.call(null,map__132629__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if((cljs.core._EQ_.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"username","username",1605666410)),new cljs.core.Keyword(null,"receiver","receiver",1768630781).cljs$core$IFn$_invoke$arity$1(data))) && (cljs.core._EQ_.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"pid","pid",1018387698)),new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(data)))){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"unread","unread",-1950424572),cljs.core.cons.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"unread","unread",-1950424572))));
} else {
return null;
}
}));
cljs.core._add_method.call(null,biomarket.server.publish_update,new cljs.core.Keyword(null,"new-comment","new-comment",1342914881),(function (p__132631){
var map__132632 = p__132631;
var map__132632__$1 = ((((!((map__132632 == null)))?((((map__132632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132632):map__132632);
var m = map__132632__$1;
var type = cljs.core.get.call(null,map__132632__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.call(null,map__132632__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.server.default_publish.call(null,m,new cljs.core.Keyword(null,"new-comment","new-comment",1342914881));
}));
biomarket.comments.comment_bbutton = (function biomarket$comments$comment_bbutton(p__132634,owner){
var vec__132639 = p__132634;
var project = cljs.core.nth.call(null,vec__132639,(0),null);
var tag = cljs.core.nth.call(null,vec__132639,(1),null);
var bclass = cljs.core.nth.call(null,vec__132639,(2),null);
var bclick = cljs.core.nth.call(null,vec__132639,(3),null);
var visible = cljs.core.nth.call(null,vec__132639,(4),null);
if(typeof biomarket.comments.t_biomarket$comments132640 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.comments.t_biomarket$comments132640 = (function (comment_bbutton,p__132634,owner,vec__132639,project,tag,bclass,bclick,visible,meta132641){
this.comment_bbutton = comment_bbutton;
this.p__132634 = p__132634;
this.owner = owner;
this.vec__132639 = vec__132639;
this.project = project;
this.tag = tag;
this.bclass = bclass;
this.bclick = bclick;
this.visible = visible;
this.meta132641 = meta132641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.comments.t_biomarket$comments132640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__132639,project,tag,bclass,bclick,visible){
return (function (_132642,meta132641__$1){
var self__ = this;
var _132642__$1 = this;
return (new biomarket.comments.t_biomarket$comments132640(self__.comment_bbutton,self__.p__132634,self__.owner,self__.vec__132639,self__.project,self__.tag,self__.bclass,self__.bclick,self__.visible,meta132641__$1));
});})(vec__132639,project,tag,bclass,bclick,visible))
;

biomarket.comments.t_biomarket$comments132640.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__132639,project,tag,bclass,bclick,visible){
return (function (_132642){
var self__ = this;
var _132642__$1 = this;
return self__.meta132641;
});})(vec__132639,project,tag,bclass,bclick,visible))
;

biomarket.comments.t_biomarket$comments132640.prototype.om$core$IRender$ = true;

biomarket.comments.t_biomarket$comments132640.prototype.om$core$IRender$render$arity$1 = ((function (vec__132639,project,tag,bclass,bclick,visible){
return (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return om.core.build.call(null,biomarket.components.badged_button,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bcast","bcast",1374687141),new cljs.core.Keyword(null,"bclick","bclick",1509940070),new cljs.core.Keyword(null,"db-mark","db-mark",770252850),new cljs.core.Keyword(null,"bclass","bclass",-762241902),new cljs.core.Keyword(null,"view-tag","view-tag",-1197278670),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"db-unread","db-unread",1099058015)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comments-read","comments-read",1258983100),cljs.core.async.chan.call(null)], null).call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-comment","new-comment",1342914881),cljs.core.async.chan.call(null)], null)),self__.bclick,new cljs.core.Keyword(null,"comments-read","comments-read",1258983100),self__.bclass,self__.tag,self__.project,self__.visible,"Discussion",new cljs.core.Keyword(null,"unread-comments","unread-comments",-2085679445)]));
});})(vec__132639,project,tag,bclass,bclick,visible))
;

biomarket.comments.t_biomarket$comments132640.getBasis = ((function (vec__132639,project,tag,bclass,bclick,visible){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"comment-bbutton","comment-bbutton",1329053994,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"bclass","bclass",878289625,null),new cljs.core.Symbol(null,"bclick","bclick",-1144495699,null),new cljs.core.Symbol(null,"visible","visible",616314722,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__132634","p__132634",-1375263192,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__132639","vec__132639",-1686029967,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"bclass","bclass",878289625,null),new cljs.core.Symbol(null,"bclick","bclick",-1144495699,null),new cljs.core.Symbol(null,"visible","visible",616314722,null),new cljs.core.Symbol(null,"meta132641","meta132641",704009799,null)], null);
});})(vec__132639,project,tag,bclass,bclick,visible))
;

biomarket.comments.t_biomarket$comments132640.cljs$lang$type = true;

biomarket.comments.t_biomarket$comments132640.cljs$lang$ctorStr = "biomarket.comments/t_biomarket$comments132640";

biomarket.comments.t_biomarket$comments132640.cljs$lang$ctorPrWriter = ((function (vec__132639,project,tag,bclass,bclick,visible){
return (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.comments/t_biomarket$comments132640");
});})(vec__132639,project,tag,bclass,bclick,visible))
;

biomarket.comments.__GT_t_biomarket$comments132640 = ((function (vec__132639,project,tag,bclass,bclick,visible){
return (function biomarket$comments$comment_bbutton_$___GT_t_biomarket$comments132640(comment_bbutton__$1,p__132634__$1,owner__$1,vec__132639__$1,project__$1,tag__$1,bclass__$1,bclick__$1,visible__$1,meta132641){
return (new biomarket.comments.t_biomarket$comments132640(comment_bbutton__$1,p__132634__$1,owner__$1,vec__132639__$1,project__$1,tag__$1,bclass__$1,bclick__$1,visible__$1,meta132641));
});})(vec__132639,project,tag,bclass,bclick,visible))
;

}

return (new biomarket.comments.t_biomarket$comments132640(biomarket$comments$comment_bbutton,p__132634,owner,vec__132639,project,tag,bclass,bclick,visible,null));
});
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"comment","comment",532206069),(function (owner,p__132643){
var map__132644 = p__132643;
var map__132644__$1 = ((((!((map__132644 == null)))?((((map__132644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132644):map__132644);
var data = cljs.core.get.call(null,map__132644__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.conj.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"comments","comments",-293346423)),data));
}));
cljs.core._add_method.call(null,biomarket.server.publish_update,new cljs.core.Keyword(null,"comment","comment",532206069),(function (p__132646){
var map__132647 = p__132646;
var map__132647__$1 = ((((!((map__132647 == null)))?((((map__132647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132647):map__132647);
var type = cljs.core.get.call(null,map__132647__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.call(null,map__132647__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,biomarket.server.app_state)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(data)], null),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}));
biomarket.comments.show_comment = (function biomarket$comments$show_comment(comment,owner){
return React.DOM.div(null,React.DOM.div({"style": {"font-size": "small", "text-align": "left", "color": ((cljs.core._EQ_.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"bidder","bidder",1514778257)),new cljs.core.Keyword(null,"sender","sender",1557303285).cljs$core$IFn$_invoke$arity$1(comment)))?"red":"green")}},[cljs.core.str("On "),cljs.core.str(biomarket.utilities.datestring__GT_readable.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(comment))),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"sender","sender",1557303285).cljs$core$IFn$_invoke$arity$1(comment)),cljs.core.str(" said:")].join('')),React.DOM.div({"style": {"margin": "5px", "font-weight": "bold"}},new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(comment),React.DOM.hr(null)));
});
biomarket.comments.comment_display_panel = (function biomarket$comments$comment_display_panel(comments,owner){
if(typeof biomarket.comments.t_biomarket$comments132654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IDidUpdate}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.comments.t_biomarket$comments132654 = (function (comment_display_panel,comments,owner,meta132655){
this.comment_display_panel = comment_display_panel;
this.comments = comments;
this.owner = owner;
this.meta132655 = meta132655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.comments.t_biomarket$comments132654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_132656,meta132655__$1){
var self__ = this;
var _132656__$1 = this;
return (new biomarket.comments.t_biomarket$comments132654(self__.comment_display_panel,self__.comments,self__.owner,meta132655__$1));
});

biomarket.comments.t_biomarket$comments132654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_132656){
var self__ = this;
var _132656__$1 = this;
return self__.meta132655;
});

biomarket.comments.t_biomarket$comments132654.prototype.om$core$IDidUpdate$ = true;

biomarket.comments.t_biomarket$comments132654.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var n = om.core.get_node.call(null,self__.owner,"cd");
return (n["scrollTop"] = "10000");
});

biomarket.comments.t_biomarket$comments132654.prototype.om$core$IRenderState$ = true;

biomarket.comments.t_biomarket$comments132654.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "panel-body", "ref": "cd", "style": {"margin": "5px", "height": "200", "overflow-y": "scroll", "position": "relative"}},((cljs.core.not.call(null,cljs.core.seq.call(null,self__.comments)))?(function (){var x__26732__auto__ = React.DOM.div({"style": {"text-align": "center"}},"No discussion yet!");
return cljs.core._conj.call(null,(function (){var x__26732__auto____$1 = React.DOM.hr(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26732__auto____$1);
})(),x__26732__auto__);
})():cljs.core.map.call(null,((function (___$2){
return (function (p1__132649_SHARP_){
return biomarket.comments.show_comment.call(null,p1__132649_SHARP_,self__.owner);
});})(___$2))
,cljs.core.filter.call(null,((function (___$2){
return (function (p1__132650_SHARP_){
return !(cljs.core._EQ_.call(null,"",clojure.string.trim.call(null,new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(p1__132650_SHARP_))));
});})(___$2))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._LT_,self__.comments)))));
});

biomarket.comments.t_biomarket$comments132654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"comment-display-panel","comment-display-panel",-1346116709,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comments","comments",1347185104,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"comments","comments",1347185104,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta132655","meta132655",-1947198242,null)], null);
});

biomarket.comments.t_biomarket$comments132654.cljs$lang$type = true;

biomarket.comments.t_biomarket$comments132654.cljs$lang$ctorStr = "biomarket.comments/t_biomarket$comments132654";

biomarket.comments.t_biomarket$comments132654.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.comments/t_biomarket$comments132654");
});

biomarket.comments.__GT_t_biomarket$comments132654 = (function biomarket$comments$comment_display_panel_$___GT_t_biomarket$comments132654(comment_display_panel__$1,comments__$1,owner__$1,meta132655){
return (new biomarket.comments.t_biomarket$comments132654(comment_display_panel__$1,comments__$1,owner__$1,meta132655));
});

}

return (new biomarket.comments.t_biomarket$comments132654(biomarket$comments$comment_display_panel,comments,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.comments.comment_control = (function biomarket$comments$comment_control(inputs,utag,owner){
var comment = new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)));
var current_value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(comment);
var ut = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688));
return React.DOM.form({"className": "form-horizontal", "onSubmit": ((function (comment,current_value,ut){
return (function (_){
return false;
});})(comment,current_value,ut))
},React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-sm-3"}," "),React.DOM.div({"className": "col-sm-12"},om.dom.textarea.call(null,{"className": "form-control", "value": current_value, "placeholder": "Type comment - Press return to submit", "onKeyDown": biomarket.utilities.capture_return.call(null,((function (comment,current_value,ut){
return (function (){
return biomarket.utilities.on_submit_function.call(null,owner,utag);
});})(comment,current_value,ut))
), "rows": "1", "onChange": ((function (comment,current_value,ut){
return (function (p1__132657_SHARP_){
return biomarket.utilities.on_change_function.call(null,owner,utag,new cljs.core.Keyword(null,"comment","comment",532206069),comment,p1__132657_SHARP_);
});})(comment,current_value,ut))
}))));
});
biomarket.comments.submit_func = (function biomarket$comments$submit_func(owner){
var comment = clojure.string.trim.call(null,cljs.core.get_in.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"value","value",305978217)], null)));
var pid = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"pid","pid",1018387698));
var receiver = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"receiver","receiver",1768630781));
var new_inputs = cljs.core.assoc_in.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"value","value",305978217)], null),"");
biomarket.server.save_data.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comment","comment",532206069),comment,new cljs.core.Keyword(null,"pid","pid",1018387698),pid,new cljs.core.Keyword(null,"receiver","receiver",1768630781),receiver], null)], null));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),new_inputs);
});
biomarket.comments.comments = (function biomarket$comments$comments(p__132659,owner){
var vec__132667 = p__132659;
var project = cljs.core.nth.call(null,vec__132667,(0),null);
var receiver = cljs.core.nth.call(null,vec__132667,(1),null);
if(typeof biomarket.comments.t_biomarket$comments132668 !== 'undefined'){
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
biomarket.comments.t_biomarket$comments132668 = (function (comments,p__132659,owner,vec__132667,project,receiver,meta132669){
this.comments = comments;
this.p__132659 = p__132659;
this.owner = owner;
this.vec__132667 = vec__132667;
this.project = project;
this.receiver = receiver;
this.meta132669 = meta132669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.comments.t_biomarket$comments132668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__132667,project,receiver){
return (function (_132670,meta132669__$1){
var self__ = this;
var _132670__$1 = this;
return (new biomarket.comments.t_biomarket$comments132668(self__.comments,self__.p__132659,self__.owner,self__.vec__132667,self__.project,self__.receiver,meta132669__$1));
});})(vec__132667,project,receiver))
;

biomarket.comments.t_biomarket$comments132668.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__132667,project,receiver){
return (function (_132670){
var self__ = this;
var _132670__$1 = this;
return self__.meta132669;
});})(vec__132667,project,receiver))
;

biomarket.comments.t_biomarket$comments132668.prototype.om$core$IInitState$ = true;

biomarket.comments.t_biomarket$comments132668.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__132667,project,receiver){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null),new cljs.core.Keyword(null,"pid","pid",1018387698),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),new cljs.core.Keyword(null,"receiver","receiver",1768630781),(function (){var or__25898__auto__ = self__.receiver;
if(cljs.core.truth_(or__25898__auto__)){
return or__25898__auto__;
} else {
return new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(self__.project);
}
})(),new cljs.core.Keyword(null,"update-topic","update-topic",-406732688),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718),cljs.core.async.chan.call(null)], null);
});})(vec__132667,project,receiver))
;

biomarket.comments.t_biomarket$comments132668.prototype.om$core$IWillMount$ = true;

biomarket.comments.t_biomarket$comments132668.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (vec__132667,project,receiver){
return (function (_){
var self__ = this;
var ___$1 = this;
var pid = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"pid","pid",1018387698));
var bct = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comment","comment",532206069),pid], null);
var bc = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718));
var ut = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688));
var receiver__$1 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"receiver","receiver",1768630781));
biomarket.utilities.register_loop.call(null,self__.owner,ut,((function (pid,bct,bc,ut,receiver__$1,___$1,vec__132667,project,receiver){
return (function (o,d){
return biomarket.utilities.loop_manager.call(null,o,d,((function (pid,bct,bc,ut,receiver__$1,___$1,vec__132667,project,receiver){
return (function (){
return biomarket.comments.submit_func.call(null,o);
});})(pid,bct,bc,ut,receiver__$1,___$1,vec__132667,project,receiver))
);
});})(pid,bct,bc,ut,receiver__$1,___$1,vec__132667,project,receiver))
);

biomarket.utilities.register_broadcast_loop.call(null,self__.owner,bct,bc);

return biomarket.server.get_data.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.Keyword(null,"pid","pid",1018387698),pid,new cljs.core.Keyword(null,"username2","username2",799725987),receiver__$1], null),((function (pid,bct,bc,ut,receiver__$1,___$1,vec__132667,project,receiver){
return (function (p1__132658_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__132658_SHARP_));
});})(pid,bct,bc,ut,receiver__$1,___$1,vec__132667,project,receiver))
);
});})(vec__132667,project,receiver))
;

biomarket.comments.t_biomarket$comments132668.prototype.om$core$IWillUnmount$ = true;

biomarket.comments.t_biomarket$comments132668.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (vec__132667,project,receiver){
return (function (_){
var self__ = this;
var ___$1 = this;
var bct = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comment","comment",532206069),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"pid","pid",1018387698))], null);
var bc = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718));
var ut = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688));
biomarket.utilities.unsub_broadcast_loop.call(null,self__.owner,bct,bc);

return biomarket.utilities.unsubscribe.call(null,self__.owner,ut);
});})(vec__132667,project,receiver))
;

biomarket.comments.t_biomarket$comments132668.prototype.om$core$IRenderState$ = true;

biomarket.comments.t_biomarket$comments132668.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__132667,project,receiver){
return (function (_,p__132671){
var self__ = this;
var map__132672 = p__132671;
var map__132672__$1 = ((((!((map__132672 == null)))?((((map__132672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__132672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__132672):map__132672);
var inputs = cljs.core.get.call(null,map__132672__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var update_topic = cljs.core.get.call(null,map__132672__$1,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688));
var comments__$1 = cljs.core.get.call(null,map__132672__$1,new cljs.core.Keyword(null,"comments","comments",-293346423));
var ___$1 = this;
return React.DOM.div({"style": {"margin-top": "10px"}},React.DOM.label(null,"Discussion"),React.DOM.div({"className": "panel panel-default", "style": {"min-height": "100%"}},om.core.build.call(null,biomarket.comments.comment_display_panel,comments__$1),React.DOM.div({"className": "panel-footer"},biomarket.comments.comment_control.call(null,inputs,update_topic,self__.owner))));
});})(vec__132667,project,receiver))
;

biomarket.comments.t_biomarket$comments132668.getBasis = ((function (vec__132667,project,receiver){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"comments","comments",1347185104,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"receiver","receiver",-885804988,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__132659","p__132659",-1307387938,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__132667","vec__132667",-1540551932,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"receiver","receiver",-885804988,null),new cljs.core.Symbol(null,"meta132669","meta132669",-6494873,null)], null);
});})(vec__132667,project,receiver))
;

biomarket.comments.t_biomarket$comments132668.cljs$lang$type = true;

biomarket.comments.t_biomarket$comments132668.cljs$lang$ctorStr = "biomarket.comments/t_biomarket$comments132668";

biomarket.comments.t_biomarket$comments132668.cljs$lang$ctorPrWriter = ((function (vec__132667,project,receiver){
return (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.comments/t_biomarket$comments132668");
});})(vec__132667,project,receiver))
;

biomarket.comments.__GT_t_biomarket$comments132668 = ((function (vec__132667,project,receiver){
return (function biomarket$comments$comments_$___GT_t_biomarket$comments132668(comments__$1,p__132659__$1,owner__$1,vec__132667__$1,project__$1,receiver__$1,meta132669){
return (new biomarket.comments.t_biomarket$comments132668(comments__$1,p__132659__$1,owner__$1,vec__132667__$1,project__$1,receiver__$1,meta132669));
});})(vec__132667,project,receiver))
;

}

return (new biomarket.comments.t_biomarket$comments132668(biomarket$comments$comments,p__132659,owner,vec__132667,project,receiver,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=comments.js.map