// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.utilities');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('taoensso.sente');
goog.require('cljs.pprint');
goog.require('ajax.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('cljs_time.format');
goog.require('om.core');
goog.require('clojure.string');
biomarket.utilities.get_text = (function biomarket$utilities$get_text(e){
return e.target.value;
});
biomarket.utilities.log = (function biomarket$utilities$log(s){
return console.log([cljs.core.str(s)].join(''));
});
biomarket.utilities.datestring__GT_readable = (function biomarket$utilities$datestring__GT_readable(string){
var rfc = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"rfc822","rfc822",-404628697));
var f = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"basic-date-time","basic-date-time",1525413604));
return cljs_time.format.unparse.call(null,rfc,cljs_time.format.parse.call(null,f,string));
});
biomarket.utilities.error_handler = (function biomarket$utilities$error_handler(p__31668){
var map__31671 = p__31668;
var map__31671__$1 = ((((!((map__31671 == null)))?((((map__31671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31671):map__31671);
var status = cljs.core.get.call(null,map__31671__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__31671__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return biomarket.utilities.log.call(null,[cljs.core.str("Something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
biomarket.utilities.post_params = (function biomarket$utilities$post_params(url,params,handler){
return ajax.core.POST.call(null,url,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),biomarket.utilities.error_handler,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
biomarket.utilities.pub_info = (function biomarket$utilities$pub_info(owner,topic,data){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
biomarket.utilities.register_loop = (function biomarket$utilities$register_loop(owner,topic,func){
var c = cljs.core.async.chan.call(null);
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var events = cljs.core.async.sub.call(null,nc,topic,c);
var c__28481__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28481__auto__,c,nc,events){
return (function (){
var f__28482__auto__ = (function (){var switch__28460__auto__ = ((function (c__28481__auto__,c,nc,events){
return (function (state_31728){
var state_val_31729 = (state_31728[(1)]);
if((state_val_31729 === (1))){
var state_31728__$1 = state_31728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31728__$1,(2),events);
} else {
if((state_val_31729 === (2))){
var inst_31711 = (state_31728[(2)]);
var inst_31712 = inst_31711;
var state_31728__$1 = (function (){var statearr_31730 = state_31728;
(statearr_31730[(7)] = inst_31712);

return statearr_31730;
})();
var statearr_31731_31747 = state_31728__$1;
(statearr_31731_31747[(2)] = null);

(statearr_31731_31747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (3))){
var inst_31712 = (state_31728[(7)]);
var inst_31714 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_31712);
var inst_31715 = cljs.core._EQ_.call(null,inst_31714,new cljs.core.Keyword(null,"end","end",-268185958));
var state_31728__$1 = state_31728;
if(inst_31715){
var statearr_31732_31748 = state_31728__$1;
(statearr_31732_31748[(1)] = (5));

} else {
var statearr_31733_31749 = state_31728__$1;
(statearr_31733_31749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (4))){
var inst_31726 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31728__$1,inst_31726);
} else {
if((state_val_31729 === (5))){
var state_31728__$1 = state_31728;
var statearr_31734_31750 = state_31728__$1;
(statearr_31734_31750[(2)] = null);

(statearr_31734_31750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (6))){
var inst_31712 = (state_31728[(7)]);
var inst_31718 = func.call(null,owner,inst_31712);
var state_31728__$1 = (function (){var statearr_31735 = state_31728;
(statearr_31735[(8)] = inst_31718);

return statearr_31735;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31728__$1,(8),events);
} else {
if((state_val_31729 === (7))){
var inst_31723 = (state_31728[(2)]);
var inst_31724 = cljs.core.async.unsub.call(null,nc,topic,c);
var state_31728__$1 = (function (){var statearr_31736 = state_31728;
(statearr_31736[(9)] = inst_31723);

return statearr_31736;
})();
var statearr_31737_31751 = state_31728__$1;
(statearr_31737_31751[(2)] = inst_31724);

(statearr_31737_31751[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (8))){
var inst_31720 = (state_31728[(2)]);
var inst_31712 = inst_31720;
var state_31728__$1 = (function (){var statearr_31738 = state_31728;
(statearr_31738[(7)] = inst_31712);

return statearr_31738;
})();
var statearr_31739_31752 = state_31728__$1;
(statearr_31739_31752[(2)] = null);

(statearr_31739_31752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__28481__auto__,c,nc,events))
;
return ((function (switch__28460__auto__,c__28481__auto__,c,nc,events){
return (function() {
var biomarket$utilities$register_loop_$_state_machine__28461__auto__ = null;
var biomarket$utilities$register_loop_$_state_machine__28461__auto____0 = (function (){
var statearr_31743 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31743[(0)] = biomarket$utilities$register_loop_$_state_machine__28461__auto__);

(statearr_31743[(1)] = (1));

return statearr_31743;
});
var biomarket$utilities$register_loop_$_state_machine__28461__auto____1 = (function (state_31728){
while(true){
var ret_value__28462__auto__ = (function (){try{while(true){
var result__28463__auto__ = switch__28460__auto__.call(null,state_31728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28463__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28463__auto__;
}
break;
}
}catch (e31744){if((e31744 instanceof Object)){
var ex__28464__auto__ = e31744;
var statearr_31745_31753 = state_31728;
(statearr_31745_31753[(5)] = ex__28464__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28462__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31754 = state_31728;
state_31728 = G__31754;
continue;
} else {
return ret_value__28462__auto__;
}
break;
}
});
biomarket$utilities$register_loop_$_state_machine__28461__auto__ = function(state_31728){
switch(arguments.length){
case 0:
return biomarket$utilities$register_loop_$_state_machine__28461__auto____0.call(this);
case 1:
return biomarket$utilities$register_loop_$_state_machine__28461__auto____1.call(this,state_31728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$utilities$register_loop_$_state_machine__28461__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$utilities$register_loop_$_state_machine__28461__auto____0;
biomarket$utilities$register_loop_$_state_machine__28461__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$utilities$register_loop_$_state_machine__28461__auto____1;
return biomarket$utilities$register_loop_$_state_machine__28461__auto__;
})()
;})(switch__28460__auto__,c__28481__auto__,c,nc,events))
})();
var state__28483__auto__ = (function (){var statearr_31746 = f__28482__auto__.call(null);
(statearr_31746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28481__auto__);

return statearr_31746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28483__auto__);
});})(c__28481__auto__,c,nc,events))
);

return c__28481__auto__;
});
biomarket.utilities.unsubscribe = (function biomarket$utilities$unsubscribe(var_args){
var args__26743__auto__ = [];
var len__26736__auto___31761 = arguments.length;
var i__26737__auto___31762 = (0);
while(true){
if((i__26737__auto___31762 < len__26736__auto___31761)){
args__26743__auto__.push((arguments[i__26737__auto___31762]));

var G__31763 = (i__26737__auto___31762 + (1));
i__26737__auto___31762 = G__31763;
continue;
} else {
}
break;
}

var argseq__26744__auto__ = ((((1) < args__26743__auto__.length))?(new cljs.core.IndexedSeq(args__26743__auto__.slice((1)),(0),null)):null);
return biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26744__auto__);
});

biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic = (function (owner,topics){
var pc = new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var seq__31757 = cljs.core.seq.call(null,topics);
var chunk__31758 = null;
var count__31759 = (0);
var i__31760 = (0);
while(true){
if((i__31760 < count__31759)){
var t = cljs.core._nth.call(null,chunk__31758,i__31760);
cljs.core.async.put_BANG_.call(null,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"end","end",-268185958)], null));

var G__31764 = seq__31757;
var G__31765 = chunk__31758;
var G__31766 = count__31759;
var G__31767 = (i__31760 + (1));
seq__31757 = G__31764;
chunk__31758 = G__31765;
count__31759 = G__31766;
i__31760 = G__31767;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31757);
if(temp__4425__auto__){
var seq__31757__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31757__$1)){
var c__26477__auto__ = cljs.core.chunk_first.call(null,seq__31757__$1);
var G__31768 = cljs.core.chunk_rest.call(null,seq__31757__$1);
var G__31769 = c__26477__auto__;
var G__31770 = cljs.core.count.call(null,c__26477__auto__);
var G__31771 = (0);
seq__31757 = G__31768;
chunk__31758 = G__31769;
count__31759 = G__31770;
i__31760 = G__31771;
continue;
} else {
var t = cljs.core.first.call(null,seq__31757__$1);
cljs.core.async.put_BANG_.call(null,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"end","end",-268185958)], null));

var G__31772 = cljs.core.next.call(null,seq__31757__$1);
var G__31773 = null;
var G__31774 = (0);
var G__31775 = (0);
seq__31757 = G__31772;
chunk__31758 = G__31773;
count__31759 = G__31774;
i__31760 = G__31775;
continue;
}
} else {
return null;
}
}
break;
}
});

biomarket.utilities.unsubscribe.cljs$lang$maxFixedArity = (1);

biomarket.utilities.unsubscribe.cljs$lang$applyTo = (function (seq31755){
var G__31756 = cljs.core.first.call(null,seq31755);
var seq31755__$1 = cljs.core.next.call(null,seq31755);
return biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic(G__31756,seq31755__$1);
});
biomarket.utilities.more_less_text = (function biomarket$utilities$more_less_text(text,owner){
if(typeof biomarket.utilities.t_biomarket$utilities31785 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities31785 = (function (more_less_text,text,owner,meta31786){
this.more_less_text = more_less_text;
this.text = text;
this.owner = owner;
this.meta31786 = meta31786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities31785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31787,meta31786__$1){
var self__ = this;
var _31787__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities31785(self__.more_less_text,self__.text,self__.owner,meta31786__$1));
});

biomarket.utilities.t_biomarket$utilities31785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31787){
var self__ = this;
var _31787__$1 = this;
return self__.meta31786;
});

biomarket.utilities.t_biomarket$utilities31785.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities31785.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"less","less",-428869198)], null);
});

biomarket.utilities.t_biomarket$utilities31785.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities31785.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__31788){
var self__ = this;
var map__31789 = p__31788;
var map__31789__$1 = ((((!((map__31789 == null)))?((((map__31789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31789):map__31789);
var showing = cljs.core.get.call(null,map__31789__$1,new cljs.core.Keyword(null,"showing","showing",798009604));
var ___$1 = this;
return React.DOM.div(null,(((cljs.core.count.call(null,self__.text) < (400)))?React.DOM.div(null,self__.text):(function (){var pred__31791 = cljs.core._EQ_;
var expr__31792 = showing;
if(cljs.core.truth_(pred__31791.call(null,new cljs.core.Keyword(null,"less","less",-428869198),expr__31792))){
return React.DOM.div(null,React.DOM.span(null,[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(300),self__.text))),cljs.core.str(" ... ")].join('')),React.DOM.a({"onClick": ((function (pred__31791,expr__31792,___$1,map__31789,map__31789__$1,showing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"more","more",-2058821800));
});})(pred__31791,expr__31792,___$1,map__31789,map__31789__$1,showing))
, "className": "flinka"}," More"));
} else {
if(cljs.core.truth_(pred__31791.call(null,new cljs.core.Keyword(null,"more","more",-2058821800),expr__31792))){
return React.DOM.div(null,React.DOM.span(null,self__.text),React.DOM.a({"onClick": ((function (pred__31791,expr__31792,___$1,map__31789,map__31789__$1,showing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"less","less",-428869198));
});})(pred__31791,expr__31792,___$1,map__31789,map__31789__$1,showing))
, "className": "flinka"}," Less"));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__31792)].join('')));
}
}
})()));
});

biomarket.utilities.t_biomarket$utilities31785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"more-less-text","more-less-text",-1737643469,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31786","meta31786",2105059374,null)], null);
});

biomarket.utilities.t_biomarket$utilities31785.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities31785.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities31785";

biomarket.utilities.t_biomarket$utilities31785.cljs$lang$ctorPrWriter = (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.utilities/t_biomarket$utilities31785");
});

biomarket.utilities.__GT_t_biomarket$utilities31785 = (function biomarket$utilities$more_less_text_$___GT_t_biomarket$utilities31785(more_less_text__$1,text__$1,owner__$1,meta31786){
return (new biomarket.utilities.t_biomarket$utilities31785(more_less_text__$1,text__$1,owner__$1,meta31786));
});

}

return (new biomarket.utilities.t_biomarket$utilities31785(biomarket$utilities$more_less_text,text,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.utilities.control_buttons = (function biomarket$utilities$control_buttons(inputs,owner){
if(typeof biomarket.utilities.t_biomarket$utilities31798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities31798 = (function (control_buttons,inputs,owner,meta31799){
this.control_buttons = control_buttons;
this.inputs = inputs;
this.owner = owner;
this.meta31799 = meta31799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities31798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31800,meta31799__$1){
var self__ = this;
var _31800__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities31798(self__.control_buttons,self__.inputs,self__.owner,meta31799__$1));
});

biomarket.utilities.t_biomarket$utilities31798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31800){
var self__ = this;
var _31800__$1 = this;
return self__.meta31799;
});

biomarket.utilities.t_biomarket$utilities31798.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities31798.prototype.om$core$IRender$render$arity$1 = (function (this__28640__auto__){
var self__ = this;
var this__28640__auto____$1 = this;
return React.DOM.div({"className": "panel panel-default"},cljs.core.apply.call(null,om.dom.div,{"className": "panel-heading"},cljs.core.map.call(null,((function (this__28640__auto____$1){
return (function (p1__31794_SHARP_){
return React.DOM.a({"className": "btn btn-default", "onClick": cljs.core.second.call(null,p1__31794_SHARP_)},cljs.core.first.call(null,p1__31794_SHARP_));
});})(this__28640__auto____$1))
,self__.inputs)));
});

biomarket.utilities.t_biomarket$utilities31798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"control-buttons","control-buttons",285817705,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31799","meta31799",1989246767,null)], null);
});

biomarket.utilities.t_biomarket$utilities31798.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities31798.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities31798";

biomarket.utilities.t_biomarket$utilities31798.cljs$lang$ctorPrWriter = (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.utilities/t_biomarket$utilities31798");
});

biomarket.utilities.__GT_t_biomarket$utilities31798 = (function biomarket$utilities$control_buttons_$___GT_t_biomarket$utilities31798(control_buttons__$1,inputs__$1,owner__$1,meta31799){
return (new biomarket.utilities.t_biomarket$utilities31798(control_buttons__$1,inputs__$1,owner__$1,meta31799));
});

}

return (new biomarket.utilities.t_biomarket$utilities31798(biomarket$utilities$control_buttons,inputs,owner,null));
});
biomarket.utilities.menu_item = (function biomarket$utilities$menu_item(p__31801,owner){
var vec__31806 = p__31801;
var text = cljs.core.nth.call(null,vec__31806,(0),null);
var topic = cljs.core.nth.call(null,vec__31806,(1),null);
var tag = cljs.core.nth.call(null,vec__31806,(2),null);
var current = cljs.core.nth.call(null,vec__31806,(3),null);
if(typeof biomarket.utilities.t_biomarket$utilities31807 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities31807 = (function (menu_item,p__31801,owner,vec__31806,text,topic,tag,current,meta31808){
this.menu_item = menu_item;
this.p__31801 = p__31801;
this.owner = owner;
this.vec__31806 = vec__31806;
this.text = text;
this.topic = topic;
this.tag = tag;
this.current = current;
this.meta31808 = meta31808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities31807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__31806,text,topic,tag,current){
return (function (_31809,meta31808__$1){
var self__ = this;
var _31809__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities31807(self__.menu_item,self__.p__31801,self__.owner,self__.vec__31806,self__.text,self__.topic,self__.tag,self__.current,meta31808__$1));
});})(vec__31806,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities31807.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__31806,text,topic,tag,current){
return (function (_31809){
var self__ = this;
var _31809__$1 = this;
return self__.meta31808;
});})(vec__31806,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities31807.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities31807.prototype.om$core$IRender$render$arity$1 = ((function (vec__31806,text,topic,tag,current){
return (function (this__28640__auto__){
var self__ = this;
var this__28640__auto____$1 = this;
return React.DOM.li({"className": ((cljs.core._EQ_.call(null,self__.current,self__.topic))?"active":null), "role": "presentation"},React.DOM.a({"onClick": ((function (this__28640__auto____$1,vec__31806,text,topic,tag,current){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.tag,self__.topic);
});})(this__28640__auto____$1,vec__31806,text,topic,tag,current))
, "style": {"cursor": "pointer"}},self__.text));
});})(vec__31806,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities31807.getBasis = ((function (vec__31806,text,topic,tag,current){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"current","current",552492924,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__31801","p__31801",-817120610,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__31806","vec__31806",7017129,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"meta31808","meta31808",1170283125,null)], null);
});})(vec__31806,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities31807.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities31807.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities31807";

biomarket.utilities.t_biomarket$utilities31807.cljs$lang$ctorPrWriter = ((function (vec__31806,text,topic,tag,current){
return (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.utilities/t_biomarket$utilities31807");
});})(vec__31806,text,topic,tag,current))
;

biomarket.utilities.__GT_t_biomarket$utilities31807 = ((function (vec__31806,text,topic,tag,current){
return (function biomarket$utilities$menu_item_$___GT_t_biomarket$utilities31807(menu_item__$1,p__31801__$1,owner__$1,vec__31806__$1,text__$1,topic__$1,tag__$1,current__$1,meta31808){
return (new biomarket.utilities.t_biomarket$utilities31807(menu_item__$1,p__31801__$1,owner__$1,vec__31806__$1,text__$1,topic__$1,tag__$1,current__$1,meta31808));
});})(vec__31806,text,topic,tag,current))
;

}

return (new biomarket.utilities.t_biomarket$utilities31807(biomarket$utilities$menu_item,p__31801,owner,vec__31806,text,topic,tag,current,null));
});
biomarket.utilities.top_navigation = (function biomarket$utilities$top_navigation(p__31811,owner){
var vec__31816 = p__31811;
var current = cljs.core.nth.call(null,vec__31816,(0),null);
var inputs = cljs.core.nth.call(null,vec__31816,(1),null);
var nav_tag = cljs.core.nth.call(null,vec__31816,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities31817 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities31817 = (function (top_navigation,p__31811,owner,vec__31816,current,inputs,nav_tag,meta31818){
this.top_navigation = top_navigation;
this.p__31811 = p__31811;
this.owner = owner;
this.vec__31816 = vec__31816;
this.current = current;
this.inputs = inputs;
this.nav_tag = nav_tag;
this.meta31818 = meta31818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities31817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__31816,current,inputs,nav_tag){
return (function (_31819,meta31818__$1){
var self__ = this;
var _31819__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities31817(self__.top_navigation,self__.p__31811,self__.owner,self__.vec__31816,self__.current,self__.inputs,self__.nav_tag,meta31818__$1));
});})(vec__31816,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities31817.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__31816,current,inputs,nav_tag){
return (function (_31819){
var self__ = this;
var _31819__$1 = this;
return self__.meta31818;
});})(vec__31816,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities31817.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities31817.prototype.om$core$IRender$render$arity$1 = ((function (vec__31816,current,inputs,nav_tag){
return (function (this__28640__auto__){
var self__ = this;
var this__28640__auto____$1 = this;
return React.DOM.div({"role": "navigation"},cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-pills nav-justified"},cljs.core.map.call(null,((function (this__28640__auto____$1,vec__31816,current,inputs,nav_tag){
return (function (p1__31810_SHARP_){
return om.core.build.call(null,biomarket.utilities.menu_item,cljs.core.concat.call(null,p1__31810_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nav_tag,self__.current], null)));
});})(this__28640__auto____$1,vec__31816,current,inputs,nav_tag))
,self__.inputs)));
});})(vec__31816,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities31817.getBasis = ((function (vec__31816,current,inputs,nav_tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"top-navigation","top-navigation",-1053916026,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__31811","p__31811",-265475277,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__31816","vec__31816",-1468505317,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"meta31818","meta31818",-1346198995,null)], null);
});})(vec__31816,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities31817.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities31817.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities31817";

biomarket.utilities.t_biomarket$utilities31817.cljs$lang$ctorPrWriter = ((function (vec__31816,current,inputs,nav_tag){
return (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.utilities/t_biomarket$utilities31817");
});})(vec__31816,current,inputs,nav_tag))
;

biomarket.utilities.__GT_t_biomarket$utilities31817 = ((function (vec__31816,current,inputs,nav_tag){
return (function biomarket$utilities$top_navigation_$___GT_t_biomarket$utilities31817(top_navigation__$1,p__31811__$1,owner__$1,vec__31816__$1,current__$1,inputs__$1,nav_tag__$1,meta31818){
return (new biomarket.utilities.t_biomarket$utilities31817(top_navigation__$1,p__31811__$1,owner__$1,vec__31816__$1,current__$1,inputs__$1,nav_tag__$1,meta31818));
});})(vec__31816,current,inputs,nav_tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities31817(biomarket$utilities$top_navigation,p__31811,owner,vec__31816,current,inputs,nav_tag,null));
});
biomarket.utilities.padded_button = (function biomarket$utilities$padded_button(p__31820,owner){
var vec__31825 = p__31820;
var padding = cljs.core.nth.call(null,vec__31825,(0),null);
var value = cljs.core.nth.call(null,vec__31825,(1),null);
var func = cljs.core.nth.call(null,vec__31825,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities31826 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities31826 = (function (padded_button,p__31820,owner,vec__31825,padding,value,func,meta31827){
this.padded_button = padded_button;
this.p__31820 = p__31820;
this.owner = owner;
this.vec__31825 = vec__31825;
this.padding = padding;
this.value = value;
this.func = func;
this.meta31827 = meta31827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities31826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__31825,padding,value,func){
return (function (_31828,meta31827__$1){
var self__ = this;
var _31828__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities31826(self__.padded_button,self__.p__31820,self__.owner,self__.vec__31825,self__.padding,self__.value,self__.func,meta31827__$1));
});})(vec__31825,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities31826.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__31825,padding,value,func){
return (function (_31828){
var self__ = this;
var _31828__$1 = this;
return self__.meta31827;
});})(vec__31825,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities31826.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities31826.prototype.om$core$IRender$render$arity$1 = ((function (vec__31825,padding,value,func){
return (function (this__28640__auto__){
var self__ = this;
var this__28640__auto____$1 = this;
return React.DOM.div({"style": {"padding": self__.padding}},(cljs.core.truth_(self__.func)?React.DOM.button({"className": "pure-button pure-button-primary", "onClick": self__.func},self__.value):React.DOM.button({"className": "pure-button pure-button-primary"},self__.value)));
});})(vec__31825,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities31826.getBasis = ((function (vec__31825,padding,value,func){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"padded-button","padded-button",875344236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__31820","p__31820",-1420268838,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__31825","vec__31825",1336792918,null),new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"meta31827","meta31827",-1523639939,null)], null);
});})(vec__31825,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities31826.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities31826.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities31826";

biomarket.utilities.t_biomarket$utilities31826.cljs$lang$ctorPrWriter = ((function (vec__31825,padding,value,func){
return (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.utilities/t_biomarket$utilities31826");
});})(vec__31825,padding,value,func))
;

biomarket.utilities.__GT_t_biomarket$utilities31826 = ((function (vec__31825,padding,value,func){
return (function biomarket$utilities$padded_button_$___GT_t_biomarket$utilities31826(padded_button__$1,p__31820__$1,owner__$1,vec__31825__$1,padding__$1,value__$1,func__$1,meta31827){
return (new biomarket.utilities.t_biomarket$utilities31826(padded_button__$1,p__31820__$1,owner__$1,vec__31825__$1,padding__$1,value__$1,func__$1,meta31827));
});})(vec__31825,padding,value,func))
;

}

return (new biomarket.utilities.t_biomarket$utilities31826(biomarket$utilities$padded_button,p__31820,owner,vec__31825,padding,value,func,null));
});
biomarket.utilities.padded_button_disabled = (function biomarket$utilities$padded_button_disabled(p__31829,owner){
var vec__31834 = p__31829;
var padding = cljs.core.nth.call(null,vec__31834,(0),null);
var value = cljs.core.nth.call(null,vec__31834,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities31835 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities31835 = (function (padded_button_disabled,p__31829,owner,vec__31834,padding,value,meta31836){
this.padded_button_disabled = padded_button_disabled;
this.p__31829 = p__31829;
this.owner = owner;
this.vec__31834 = vec__31834;
this.padding = padding;
this.value = value;
this.meta31836 = meta31836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities31835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__31834,padding,value){
return (function (_31837,meta31836__$1){
var self__ = this;
var _31837__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities31835(self__.padded_button_disabled,self__.p__31829,self__.owner,self__.vec__31834,self__.padding,self__.value,meta31836__$1));
});})(vec__31834,padding,value))
;

biomarket.utilities.t_biomarket$utilities31835.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__31834,padding,value){
return (function (_31837){
var self__ = this;
var _31837__$1 = this;
return self__.meta31836;
});})(vec__31834,padding,value))
;

biomarket.utilities.t_biomarket$utilities31835.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities31835.prototype.om$core$IRender$render$arity$1 = ((function (vec__31834,padding,value){
return (function (this__28640__auto__){
var self__ = this;
var this__28640__auto____$1 = this;
return React.DOM.div({"style": {"padding": self__.padding}},React.DOM.button({"className": "pure-button pure-button-primary", "disabled": "true"},self__.value));
});})(vec__31834,padding,value))
;

biomarket.utilities.t_biomarket$utilities31835.getBasis = ((function (vec__31834,padding,value){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"padded-button-disabled","padded-button-disabled",1594106929,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__31829","p__31829",705701647,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__31834","vec__31834",1641117276,null),new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"meta31836","meta31836",-1834335704,null)], null);
});})(vec__31834,padding,value))
;

biomarket.utilities.t_biomarket$utilities31835.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities31835.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities31835";

biomarket.utilities.t_biomarket$utilities31835.cljs$lang$ctorPrWriter = ((function (vec__31834,padding,value){
return (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.utilities/t_biomarket$utilities31835");
});})(vec__31834,padding,value))
;

biomarket.utilities.__GT_t_biomarket$utilities31835 = ((function (vec__31834,padding,value){
return (function biomarket$utilities$padded_button_disabled_$___GT_t_biomarket$utilities31835(padded_button_disabled__$1,p__31829__$1,owner__$1,vec__31834__$1,padding__$1,value__$1,meta31836){
return (new biomarket.utilities.t_biomarket$utilities31835(padded_button_disabled__$1,p__31829__$1,owner__$1,vec__31834__$1,padding__$1,value__$1,meta31836));
});})(vec__31834,padding,value))
;

}

return (new biomarket.utilities.t_biomarket$utilities31835(biomarket$utilities$padded_button_disabled,p__31829,owner,vec__31834,padding,value,null));
});
biomarket.utilities.show_default = (function biomarket$utilities$show_default(_,owner){
if(typeof biomarket.utilities.t_biomarket$utilities31841 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities31841 = (function (show_default,_,owner,meta31842){
this.show_default = show_default;
this._ = _;
this.owner = owner;
this.meta31842 = meta31842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities31841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31843,meta31842__$1){
var self__ = this;
var _31843__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities31841(self__.show_default,self__._,self__.owner,meta31842__$1));
});

biomarket.utilities.t_biomarket$utilities31841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31843){
var self__ = this;
var _31843__$1 = this;
return self__.meta31842;
});

biomarket.utilities.t_biomarket$utilities31841.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities31841.prototype.om$core$IRender$render$arity$1 = (function (this__28640__auto__){
var self__ = this;
var this__28640__auto____$1 = this;
return React.DOM.div(null,"");
});

biomarket.utilities.t_biomarket$utilities31841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-default","show-default",-609967859,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31842","meta31842",-893377611,null)], null);
});

biomarket.utilities.t_biomarket$utilities31841.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities31841.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities31841";

biomarket.utilities.t_biomarket$utilities31841.cljs$lang$ctorPrWriter = (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.utilities/t_biomarket$utilities31841");
});

biomarket.utilities.__GT_t_biomarket$utilities31841 = (function biomarket$utilities$show_default_$___GT_t_biomarket$utilities31841(show_default__$1,___$1,owner__$1,meta31842){
return (new biomarket.utilities.t_biomarket$utilities31841(show_default__$1,___$1,owner__$1,meta31842));
});

}

return (new biomarket.utilities.t_biomarket$utilities31841(biomarket$utilities$show_default,_,owner,null));
});
biomarket.utilities.bottom_links = (function biomarket$utilities$bottom_links(p__31844,owner){
var vec__31856 = p__31844;
var project = cljs.core.nth.call(null,vec__31856,(0),null);
var map__31857 = cljs.core.nth.call(null,vec__31856,(1),null);
var map__31857__$1 = ((((!((map__31857 == null)))?((((map__31857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31857):map__31857);
var links = cljs.core.get.call(null,map__31857__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var visible = cljs.core.get.call(null,map__31857__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var oc_tag = cljs.core.get.call(null,map__31857__$1,new cljs.core.Keyword(null,"oc-tag","oc-tag",-724883257));
var bid_widget = cljs.core.get.call(null,map__31857__$1,new cljs.core.Keyword(null,"bid-widget","bid-widget",627145557));
if(typeof biomarket.utilities.t_biomarket$utilities31859 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities31859 = (function (visible,map__31857,owner,links,vec__31856,oc_tag,p__31844,bottom_links,project,bid_widget,meta31860){
this.visible = visible;
this.map__31857 = map__31857;
this.owner = owner;
this.links = links;
this.vec__31856 = vec__31856;
this.oc_tag = oc_tag;
this.p__31844 = p__31844;
this.bottom_links = bottom_links;
this.project = project;
this.bid_widget = bid_widget;
this.meta31860 = meta31860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities31859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__31856,project,map__31857,map__31857__$1,links,visible,oc_tag,bid_widget){
return (function (_31861,meta31860__$1){
var self__ = this;
var _31861__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities31859(self__.visible,self__.map__31857,self__.owner,self__.links,self__.vec__31856,self__.oc_tag,self__.p__31844,self__.bottom_links,self__.project,self__.bid_widget,meta31860__$1));
});})(vec__31856,project,map__31857,map__31857__$1,links,visible,oc_tag,bid_widget))
;

biomarket.utilities.t_biomarket$utilities31859.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__31856,project,map__31857,map__31857__$1,links,visible,oc_tag,bid_widget){
return (function (_31861){
var self__ = this;
var _31861__$1 = this;
return self__.meta31860;
});})(vec__31856,project,map__31857,map__31857__$1,links,visible,oc_tag,bid_widget))
;

biomarket.utilities.t_biomarket$utilities31859.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities31859.prototype.om$core$IRender$render$arity$1 = ((function (vec__31856,project,map__31857,map__31857__$1,links,visible,oc_tag,bid_widget){
return (function (this__28640__auto__){
var self__ = this;
var this__28640__auto____$1 = this;
return React.DOM.div({"style": {"padding-top": "10px"}},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-4"},cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,((function (this__28640__auto____$1,vec__31856,project,map__31857,map__31857__$1,links,visible,oc_tag,bid_widget){
return (function (p__31862){
var vec__31863 = p__31862;
var tag = cljs.core.nth.call(null,vec__31863,(0),null);
var ele = cljs.core.nth.call(null,vec__31863,(1),null);
return React.DOM.a({"className": ((cljs.core._EQ_.call(null,self__.visible,tag))?"btn btn-default active":"btn btn-default"), "onClick": ((function (vec__31863,tag,ele,this__28640__auto____$1,vec__31856,project,map__31857,map__31857__$1,links,visible,oc_tag,bid_widget){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.oc_tag,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"change-view","change-view",-1206699831),new cljs.core.Keyword(null,"view","view",1247994814),((cljs.core._EQ_.call(null,self__.visible,tag))?new cljs.core.Keyword(null,"default","default",-1987822328):tag)], null));
});})(vec__31863,tag,ele,this__28640__auto____$1,vec__31856,project,map__31857,map__31857__$1,links,visible,oc_tag,bid_widget))
},cljs.core.first.call(null,ele));
});})(this__28640__auto____$1,vec__31856,project,map__31857,map__31857__$1,links,visible,oc_tag,bid_widget))
,self__.links))),(cljs.core.truth_(self__.bid_widget)?React.DOM.div({"className": "col-md-8", "style": {"text-align": "right"}},om.core.build.call(null,self__.bid_widget,self__.project)):null)),(function (){var pred__31864 = cljs.core._EQ_;
var expr__31865 = self__.visible;
if(cljs.core.truth_(pred__31864.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),expr__31865))){
return om.core.build.call(null,biomarket.utilities.show_default,null);
} else {
return om.core.build.call(null,cljs.core.second.call(null,self__.visible.call(null,self__.links)),self__.project);
}
})());
});})(vec__31856,project,map__31857,map__31857__$1,links,visible,oc_tag,bid_widget))
;

biomarket.utilities.t_biomarket$utilities31859.getBasis = ((function (vec__31856,project,map__31857,map__31857__$1,links,visible,oc_tag,bid_widget){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"visible","visible",616314722,null),new cljs.core.Symbol(null,"map__31857","map__31857",425047044,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"vec__31856","vec__31856",-1421288659,null),new cljs.core.Symbol(null,"oc-tag","oc-tag",915648270,null),new cljs.core.Symbol(null,"p__31844","p__31844",599918553,null),cljs.core.with_meta(new cljs.core.Symbol(null,"bottom-links","bottom-links",1856837593,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"visible","visible",616314722,null),new cljs.core.Symbol(null,"oc-tag","oc-tag",915648270,null),new cljs.core.Symbol(null,"bid-widget","bid-widget",-2027290212,null)], null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"bid-widget","bid-widget",-2027290212,null),new cljs.core.Symbol(null,"meta31860","meta31860",-27445649,null)], null);
});})(vec__31856,project,map__31857,map__31857__$1,links,visible,oc_tag,bid_widget))
;

biomarket.utilities.t_biomarket$utilities31859.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities31859.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities31859";

biomarket.utilities.t_biomarket$utilities31859.cljs$lang$ctorPrWriter = ((function (vec__31856,project,map__31857,map__31857__$1,links,visible,oc_tag,bid_widget){
return (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.utilities/t_biomarket$utilities31859");
});})(vec__31856,project,map__31857,map__31857__$1,links,visible,oc_tag,bid_widget))
;

biomarket.utilities.__GT_t_biomarket$utilities31859 = ((function (vec__31856,project,map__31857,map__31857__$1,links,visible,oc_tag,bid_widget){
return (function biomarket$utilities$bottom_links_$___GT_t_biomarket$utilities31859(visible__$1,map__31857__$2,owner__$1,links__$1,vec__31856__$1,oc_tag__$1,p__31844__$1,bottom_links__$1,project__$1,bid_widget__$1,meta31860){
return (new biomarket.utilities.t_biomarket$utilities31859(visible__$1,map__31857__$2,owner__$1,links__$1,vec__31856__$1,oc_tag__$1,p__31844__$1,bottom_links__$1,project__$1,bid_widget__$1,meta31860));
});})(vec__31856,project,map__31857,map__31857__$1,links,visible,oc_tag,bid_widget))
;

}

return (new biomarket.utilities.t_biomarket$utilities31859(visible,map__31857__$1,owner,links,vec__31856,oc_tag,p__31844,biomarket$utilities$bottom_links,project,bid_widget,null));
});
if(typeof biomarket.utilities.table_info !== 'undefined'){
} else {
biomarket.utilities.table_info = (function (){var method_table__26591__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26592__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26593__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26594__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26595__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","table-info"),((function (method_table__26591__auto__,prefer_table__26592__auto__,method_cache__26593__auto__,cached_hierarchy__26594__auto__,hierarchy__26595__auto__){
return (function (project){
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(project);
});})(method_table__26591__auto__,prefer_table__26592__auto__,method_cache__26593__auto__,cached_hierarchy__26594__auto__,hierarchy__26595__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26595__auto__,method_table__26591__auto__,prefer_table__26592__auto__,method_cache__26593__auto__,cached_hierarchy__26594__auto__));
})();
}
biomarket.utilities.alert_table_info = (function biomarket$utilities$alert_table_info(var_args){
var args__26743__auto__ = [];
var len__26736__auto___31868 = arguments.length;
var i__26737__auto___31869 = (0);
while(true){
if((i__26737__auto___31869 < len__26736__auto___31868)){
args__26743__auto__.push((arguments[i__26737__auto___31869]));

var G__31870 = (i__26737__auto___31869 + (1));
i__26737__auto___31869 = G__31870;
continue;
} else {
}
break;
}

var argseq__26744__auto__ = ((((0) < args__26743__auto__.length))?(new cljs.core.IndexedSeq(args__26743__auto__.slice((0)),(0),null)):null);
return biomarket.utilities.alert_table_info.cljs$core$IFn$_invoke$arity$variadic(argseq__26744__auto__);
});

biomarket.utilities.alert_table_info.cljs$core$IFn$_invoke$arity$variadic = (function (fields){
return cljs.core.apply.call(null,om.dom.div,{"style": {"color": "red"}},fields);
});

biomarket.utilities.alert_table_info.cljs$lang$maxFixedArity = (0);

biomarket.utilities.alert_table_info.cljs$lang$applyTo = (function (seq31867){
return biomarket.utilities.alert_table_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31867));
});
biomarket.utilities.average_bid = (function biomarket$utilities$average_bid(project){
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))){
return [cljs.core.str("$"),cljs.core.str(cljs.pprint.cl_format.call(null,null,"~$",(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))) / cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project)))))].join('');
} else {
return "No bids yet";
}
});
biomarket.utilities.color_span = (function biomarket$utilities$color_span(text,color){
return React.DOM.span({"style": {"color": color, "font-weight": "bold"}},text);
});
cljs.core._add_method.call(null,biomarket.utilities.table_info,"expired",(function (project){
var f = (function (p1__31871_SHARP_){
return biomarket.utilities.color_span.call(null,p1__31871_SHARP_,"green");
});
return new cljs.core.PersistentArrayMap(null, 6, ["Status",biomarket.utilities.alert_table_info.call(null,React.DOM.div(null,"Bidding"),React.DOM.div(null,"Expired")),"Bidding ended",biomarket.utilities.alert_table_info.call(null,[cljs.core.str(new cljs.core.Keyword(null,"bidmin","bidmin",-2558125).cljs$core$IFn$_invoke$arity$1(project)),cljs.core.str(" ago")].join('')),"Project deadline",f.call(null,new cljs.core.Keyword(null,"projmin","projmin",-724900279).cljs$core$IFn$_invoke$arity$1(project)),"Bids",f.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))),"Average bid (USD)",f.call(null,biomarket.utilities.average_bid.call(null,project)),"Budget (USD)",f.call(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"budget","budget",-405386281).cljs$core$IFn$_invoke$arity$1(project))].join(''))], null);
}));
cljs.core._add_method.call(null,biomarket.utilities.table_info,new cljs.core.Keyword(null,"default","default",-1987822328),(function (project){
var f = (function (p1__31872_SHARP_){
return biomarket.utilities.color_span.call(null,p1__31872_SHARP_,"green");
});
return new cljs.core.PersistentArrayMap(null, 6, ["Status",f.call(null,clojure.string.capitalize.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(project))),"Bidding ends",f.call(null,new cljs.core.Keyword(null,"bidmin","bidmin",-2558125).cljs$core$IFn$_invoke$arity$1(project)),"Project deadline",f.call(null,new cljs.core.Keyword(null,"projmin","projmin",-724900279).cljs$core$IFn$_invoke$arity$1(project)),"Bids",f.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))),"Average bid",f.call(null,biomarket.utilities.average_bid.call(null,project)),"Budget",f.call(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"budget","budget",-405386281).cljs$core$IFn$_invoke$arity$1(project))].join(''))], null);
}));
biomarket.utilities.make_a_table = (function biomarket$utilities$make_a_table(p__31875){
var map__31881 = p__31875;
var map__31881__$1 = ((((!((map__31881 == null)))?((((map__31881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31881):map__31881);
var data = cljs.core.get.call(null,map__31881__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var tparam = cljs.core.get.call(null,map__31881__$1,new cljs.core.Keyword(null,"tparam","tparam",1161386584));
if(typeof biomarket.utilities.t_biomarket$utilities31883 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities31883 = (function (make_a_table,p__31875,map__31881,data,tparam,meta31884){
this.make_a_table = make_a_table;
this.p__31875 = p__31875;
this.map__31881 = map__31881;
this.data = data;
this.tparam = tparam;
this.meta31884 = meta31884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities31883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31881,map__31881__$1,data,tparam){
return (function (_31885,meta31884__$1){
var self__ = this;
var _31885__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities31883(self__.make_a_table,self__.p__31875,self__.map__31881,self__.data,self__.tparam,meta31884__$1));
});})(map__31881,map__31881__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities31883.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31881,map__31881__$1,data,tparam){
return (function (_31885){
var self__ = this;
var _31885__$1 = this;
return self__.meta31884;
});})(map__31881,map__31881__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities31883.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities31883.prototype.om$core$IRender$render$arity$1 = ((function (map__31881,map__31881__$1,data,tparam){
return (function (this__28640__auto__){
var self__ = this;
var this__28640__auto____$1 = this;
var tjs = cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"table"], null),self__.tparam));
return React.DOM.div({"style": {"background-color": "white", "margin": "10px"}},React.DOM.table(tjs,React.DOM.thead(null,cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (tjs,this__28640__auto____$1,map__31881,map__31881__$1,data,tparam){
return (function (p1__31873_SHARP_){
return React.DOM.th({"style": {"text-align": "center"}},p1__31873_SHARP_);
});})(tjs,this__28640__auto____$1,map__31881,map__31881__$1,data,tparam))
,cljs.core.keys.call(null,cljs.core.first.call(null,self__.data))))),cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.map.call(null,((function (tjs,this__28640__auto____$1,map__31881,map__31881__$1,data,tparam){
return (function (x){
return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (tjs,this__28640__auto____$1,map__31881,map__31881__$1,data,tparam){
return (function (p1__31874_SHARP_){
return React.DOM.td({"style": {"text-align": "center"}},p1__31874_SHARP_);
});})(tjs,this__28640__auto____$1,map__31881,map__31881__$1,data,tparam))
,cljs.core.vals.call(null,x)));
});})(tjs,this__28640__auto____$1,map__31881,map__31881__$1,data,tparam))
,self__.data))));
});})(map__31881,map__31881__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities31883.getBasis = ((function (map__31881,map__31881__$1,data,tparam){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-a-table","make-a-table",-346613799,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null)], null)], null)], null)))], null)),new cljs.core.Symbol(null,"p__31875","p__31875",1077248387,null),new cljs.core.Symbol(null,"map__31881","map__31881",68648848,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null),new cljs.core.Symbol(null,"meta31884","meta31884",226638503,null)], null);
});})(map__31881,map__31881__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities31883.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities31883.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities31883";

biomarket.utilities.t_biomarket$utilities31883.cljs$lang$ctorPrWriter = ((function (map__31881,map__31881__$1,data,tparam){
return (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.utilities/t_biomarket$utilities31883");
});})(map__31881,map__31881__$1,data,tparam))
;

biomarket.utilities.__GT_t_biomarket$utilities31883 = ((function (map__31881,map__31881__$1,data,tparam){
return (function biomarket$utilities$make_a_table_$___GT_t_biomarket$utilities31883(make_a_table__$1,p__31875__$1,map__31881__$2,data__$1,tparam__$1,meta31884){
return (new biomarket.utilities.t_biomarket$utilities31883(make_a_table__$1,p__31875__$1,map__31881__$2,data__$1,tparam__$1,meta31884));
});})(map__31881,map__31881__$1,data,tparam))
;

}

return (new biomarket.utilities.t_biomarket$utilities31883(biomarket$utilities$make_a_table,p__31875,map__31881__$1,data,tparam,null));
});
biomarket.utilities.info_table = (function biomarket$utilities$info_table(project,owner){
if(typeof biomarket.utilities.t_biomarket$utilities31889 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities31889 = (function (info_table,project,owner,meta31890){
this.info_table = info_table;
this.project = project;
this.owner = owner;
this.meta31890 = meta31890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities31889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31891,meta31890__$1){
var self__ = this;
var _31891__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities31889(self__.info_table,self__.project,self__.owner,meta31890__$1));
});

biomarket.utilities.t_biomarket$utilities31889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31891){
var self__ = this;
var _31891__$1 = this;
return self__.meta31890;
});

biomarket.utilities.t_biomarket$utilities31889.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities31889.prototype.om$core$IRender$render$arity$1 = (function (this__28640__auto__){
var self__ = this;
var this__28640__auto____$1 = this;
var data = biomarket.utilities.table_info.call(null,self__.project);
return om.core.build.call(null,biomarket.utilities.make_a_table,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){var x__26500__auto__ = data;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26500__auto__);
})()], null));
});

biomarket.utilities.t_biomarket$utilities31889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"info-table","info-table",-2047867662,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31890","meta31890",919819512,null)], null);
});

biomarket.utilities.t_biomarket$utilities31889.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities31889.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities31889";

biomarket.utilities.t_biomarket$utilities31889.cljs$lang$ctorPrWriter = (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.utilities/t_biomarket$utilities31889");
});

biomarket.utilities.__GT_t_biomarket$utilities31889 = (function biomarket$utilities$info_table_$___GT_t_biomarket$utilities31889(info_table__$1,project__$1,owner__$1,meta31890){
return (new biomarket.utilities.t_biomarket$utilities31889(info_table__$1,project__$1,owner__$1,meta31890));
});

}

return (new biomarket.utilities.t_biomarket$utilities31889(biomarket$utilities$info_table,project,owner,null));
});
if(typeof biomarket.utilities.panel_right_info !== 'undefined'){
} else {
biomarket.utilities.panel_right_info = (function (){var method_table__26591__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26592__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26593__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26594__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26595__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","panel-right-info"),((function (method_table__26591__auto__,prefer_table__26592__auto__,method_cache__26593__auto__,cached_hierarchy__26594__auto__,hierarchy__26595__auto__){
return (function (p){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(p);
});})(method_table__26591__auto__,prefer_table__26592__auto__,method_cache__26593__auto__,cached_hierarchy__26594__auto__,hierarchy__26595__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26595__auto__,method_table__26591__auto__,prefer_table__26592__auto__,method_cache__26593__auto__,cached_hierarchy__26594__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.panel_right_info,new cljs.core.Keyword(null,"find","find",496279456),(function (p){
var s = [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.take.call(null,(2),clojure.string.split.call(null,new cljs.core.Keyword(null,"bidmin","bidmin",-2558125).cljs$core$IFn$_invoke$arity$1(p),/\s+/))))),cljs.core.str(" left")].join('');
return React.DOM.h4(null,React.DOM.span({"className": "label label-danger"},s));
}));
cljs.core._add_method.call(null,biomarket.utilities.panel_right_info,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p){
var bc = cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(p));
return React.DOM.h4(null,React.DOM.span({"className": "label label-danger"},((cljs.core._EQ_.call(null,bc,(1)))?"1 bid":[cljs.core.str(bc),cljs.core.str(" bids")].join(''))));
}));
biomarket.utilities.label = (function biomarket$utilities$label(class$,text){
return React.DOM.span({"style": {"padding-right": "10px"}},React.DOM.span({"className": class$},text));
});
biomarket.utilities.best_bid = (function biomarket$utilities$best_bid(bids){
return cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"amount","amount",364489504),cljs.core.map.call(null,(function (p1__31892_SHARP_){
return cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,p1__31892_SHARP_));
}),cljs.core.vals.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"username","username",1605666410),bids)))));
});
if(typeof biomarket.utilities.title_labels !== 'undefined'){
} else {
biomarket.utilities.title_labels = (function (){var method_table__26591__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26592__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26593__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26594__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26595__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","title-labels"),((function (method_table__26591__auto__,prefer_table__26592__auto__,method_cache__26593__auto__,cached_hierarchy__26594__auto__,hierarchy__26595__auto__){
return (function (x){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(x);
});})(method_table__26591__auto__,prefer_table__26592__auto__,method_cache__26593__auto__,cached_hierarchy__26594__auto__,hierarchy__26595__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26595__auto__,method_table__26591__auto__,prefer_table__26592__auto__,method_cache__26593__auto__,cached_hierarchy__26594__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.title_labels,new cljs.core.Keyword(null,"default","default",-1987822328),(function (project){
if(typeof biomarket.utilities.t_biomarket$utilities31893 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities31893 = (function (project,meta31894){
this.project = project;
this.meta31894 = meta31894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities31893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31895,meta31894__$1){
var self__ = this;
var _31895__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities31893(self__.project,meta31894__$1));
});

biomarket.utilities.t_biomarket$utilities31893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31895){
var self__ = this;
var _31895__$1 = this;
return self__.meta31894;
});

biomarket.utilities.t_biomarket$utilities31893.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities31893.prototype.om$core$IRender$render$arity$1 = (function (this__28640__auto__){
var self__ = this;
var this__28640__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var best = biomarket.utilities.best_bid.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project));
if(cljs.core.truth_(best)){
return biomarket.utilities.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join(''));
} else {
return biomarket.utilities.label.call(null,"label label-danger","No bids yet!");
}
})());
});

biomarket.utilities.t_biomarket$utilities31893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta31894","meta31894",959096662,null)], null);
});

biomarket.utilities.t_biomarket$utilities31893.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities31893.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities31893";

biomarket.utilities.t_biomarket$utilities31893.cljs$lang$ctorPrWriter = (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.utilities/t_biomarket$utilities31893");
});

biomarket.utilities.__GT_t_biomarket$utilities31893 = (function biomarket$utilities$__GT_t_biomarket$utilities31893(project__$1,meta31894){
return (new biomarket.utilities.t_biomarket$utilities31893(project__$1,meta31894));
});

}

return (new biomarket.utilities.t_biomarket$utilities31893(project,null));
}));
cljs.core._add_method.call(null,biomarket.utilities.title_labels,new cljs.core.Keyword(null,"find","find",496279456),(function (project){
if(typeof biomarket.utilities.t_biomarket$utilities31896 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities31896 = (function (project,meta31897){
this.project = project;
this.meta31897 = meta31897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities31896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31898,meta31897__$1){
var self__ = this;
var _31898__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities31896(self__.project,meta31897__$1));
});

biomarket.utilities.t_biomarket$utilities31896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31898){
var self__ = this;
var _31898__$1 = this;
return self__.meta31897;
});

biomarket.utilities.t_biomarket$utilities31896.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities31896.prototype.om$core$IRender$render$arity$1 = (function (this__28640__auto__){
var self__ = this;
var this__28640__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var ub = cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,new cljs.core.Keyword(null,"user-bids","user-bids",-736079184).cljs$core$IFn$_invoke$arity$1(self__.project)));
var best = biomarket.utilities.best_bid.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project));
if(cljs.core.truth_((function (){var and__25654__auto__ = ub;
if(cljs.core.truth_(and__25654__auto__)){
return (new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best) >= new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ub));
} else {
return and__25654__auto__;
}
})())){
return React.DOM.span(null,biomarket.utilities.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join('')),biomarket.utilities.label.call(null,"label label-success",[cljs.core.str("Your bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ub))].join('')));
} else {
if(cljs.core.truth_((function (){var and__25654__auto__ = ub;
if(cljs.core.truth_(and__25654__auto__)){
return (new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best) < new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ub));
} else {
return and__25654__auto__;
}
})())){
return React.DOM.span(null,biomarket.utilities.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join('')),biomarket.utilities.label.call(null,"label label-danger",[cljs.core.str("Your bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ub))].join('')));
} else {
if(cljs.core.truth_(best)){
return biomarket.utilities.label.call(null,"label label-danger",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join(''));
} else {
return biomarket.utilities.label.call(null,"label label-danger","No bids yet!");

}
}
}
})());
});

biomarket.utilities.t_biomarket$utilities31896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta31897","meta31897",737140872,null)], null);
});

biomarket.utilities.t_biomarket$utilities31896.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities31896.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities31896";

biomarket.utilities.t_biomarket$utilities31896.cljs$lang$ctorPrWriter = (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.utilities/t_biomarket$utilities31896");
});

biomarket.utilities.__GT_t_biomarket$utilities31896 = (function biomarket$utilities$__GT_t_biomarket$utilities31896(project__$1,meta31897){
return (new biomarket.utilities.t_biomarket$utilities31896(project__$1,meta31897));
});

}

return (new biomarket.utilities.t_biomarket$utilities31896(project,null));
}));
biomarket.utilities.project_panel = (function biomarket$utilities$project_panel(p__31899,owner){
var vec__31904 = p__31899;
var project = cljs.core.nth.call(null,vec__31904,(0),null);
var blinks = cljs.core.nth.call(null,vec__31904,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities31905 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities31905 = (function (project_panel,p__31899,owner,vec__31904,project,blinks,meta31906){
this.project_panel = project_panel;
this.p__31899 = p__31899;
this.owner = owner;
this.vec__31904 = vec__31904;
this.project = project;
this.blinks = blinks;
this.meta31906 = meta31906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities31905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__31904,project,blinks){
return (function (_31907,meta31906__$1){
var self__ = this;
var _31907__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities31905(self__.project_panel,self__.p__31899,self__.owner,self__.vec__31904,self__.project,self__.blinks,meta31906__$1));
});})(vec__31904,project,blinks))
;

biomarket.utilities.t_biomarket$utilities31905.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__31904,project,blinks){
return (function (_31907){
var self__ = this;
var _31907__$1 = this;
return self__.meta31906;
});})(vec__31904,project,blinks))
;

biomarket.utilities.t_biomarket$utilities31905.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities31905.prototype.om$core$IRender$render$arity$1 = ((function (vec__31904,project,blinks){
return (function (this__28640__auto__){
var self__ = this;
var this__28640__auto____$1 = this;
return React.DOM.div({"className": "panel panel-default", "style": {"text-align": "left"}},React.DOM.div({"className": "panel-heading"},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-10"},om.core.build.call(null,biomarket.utilities.title_labels,self__.project)),React.DOM.div({"className": "col-md-2", "style": {"text-align": "right"}},biomarket.utilities.panel_right_info.call(null,self__.project)))),React.DOM.div({"className": "panel-body"},om.core.build.call(null,biomarket.utilities.more_less_text,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(self__.project)),React.DOM.div({"style": {"padding-top": "20px"}},om.core.build.call(null,biomarket.utilities.info_table,self__.project))),React.DOM.div({"className": "panel-footer"},om.core.build.call(null,biomarket.utilities.bottom_links,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.project,self__.blinks], null))));
});})(vec__31904,project,blinks))
;

biomarket.utilities.t_biomarket$utilities31905.getBasis = ((function (vec__31904,project,blinks){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"project-panel","project-panel",619982201,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"blinks","blinks",921671976,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__31899","p__31899",-893841162,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__31904","vec__31904",987033170,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"blinks","blinks",921671976,null),new cljs.core.Symbol(null,"meta31906","meta31906",-1876277531,null)], null);
});})(vec__31904,project,blinks))
;

biomarket.utilities.t_biomarket$utilities31905.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities31905.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities31905";

biomarket.utilities.t_biomarket$utilities31905.cljs$lang$ctorPrWriter = ((function (vec__31904,project,blinks){
return (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.utilities/t_biomarket$utilities31905");
});})(vec__31904,project,blinks))
;

biomarket.utilities.__GT_t_biomarket$utilities31905 = ((function (vec__31904,project,blinks){
return (function biomarket$utilities$project_panel_$___GT_t_biomarket$utilities31905(project_panel__$1,p__31899__$1,owner__$1,vec__31904__$1,project__$1,blinks__$1,meta31906){
return (new biomarket.utilities.t_biomarket$utilities31905(project_panel__$1,p__31899__$1,owner__$1,vec__31904__$1,project__$1,blinks__$1,meta31906));
});})(vec__31904,project,blinks))
;

}

return (new biomarket.utilities.t_biomarket$utilities31905(biomarket$utilities$project_panel,p__31899,owner,vec__31904,project,blinks,null));
});
biomarket.utilities.fixed_head_table = (function biomarket$utilities$fixed_head_table(p__31910){
var map__31916 = p__31910;
var map__31916__$1 = ((((!((map__31916 == null)))?((((map__31916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31916):map__31916);
var data = cljs.core.get.call(null,map__31916__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var tparam = cljs.core.get.call(null,map__31916__$1,new cljs.core.Keyword(null,"tparam","tparam",1161386584));
if(typeof biomarket.utilities.t_biomarket$utilities31918 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities31918 = (function (fixed_head_table,p__31910,map__31916,data,tparam,meta31919){
this.fixed_head_table = fixed_head_table;
this.p__31910 = p__31910;
this.map__31916 = map__31916;
this.data = data;
this.tparam = tparam;
this.meta31919 = meta31919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities31918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31916,map__31916__$1,data,tparam){
return (function (_31920,meta31919__$1){
var self__ = this;
var _31920__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities31918(self__.fixed_head_table,self__.p__31910,self__.map__31916,self__.data,self__.tparam,meta31919__$1));
});})(map__31916,map__31916__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities31918.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31916,map__31916__$1,data,tparam){
return (function (_31920){
var self__ = this;
var _31920__$1 = this;
return self__.meta31919;
});})(map__31916,map__31916__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities31918.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities31918.prototype.om$core$IRender$render$arity$1 = ((function (map__31916,map__31916__$1,data,tparam){
return (function (this__28640__auto__){
var self__ = this;
var this__28640__auto____$1 = this;
return React.DOM.table({"style": {"cellspacing": "0", "cellpadding": "0", "border": "0", "width": "100%", "padding-top": "20px"}},React.DOM.tr(null,React.DOM.td(null,React.DOM.table({"style": {"cellspacing": "0", "cellpadding": "1", "border": "0", "width": "100%"}},cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (this__28640__auto____$1,map__31916,map__31916__$1,data,tparam){
return (function (p1__31908_SHARP_){
return React.DOM.th({"style": {"width": "50%"}},p1__31908_SHARP_);
});})(this__28640__auto____$1,map__31916,map__31916__$1,data,tparam))
,cljs.core.keys.call(null,cljs.core.first.call(null,self__.data))))))),React.DOM.tr(null,React.DOM.td(null,React.DOM.div({"style": {"max-height": "277px", "overflow-y": "auto", "width": "100%", "min-height": "50px"}},cljs.core.apply.call(null,om.dom.table,{"className": "table", "style": {"cellspacing": "0", "cellpadding": "1", "border": "0", "background-color": "white"}},cljs.core.map.call(null,((function (this__28640__auto____$1,map__31916,map__31916__$1,data,tparam){
return (function (x){
return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (this__28640__auto____$1,map__31916,map__31916__$1,data,tparam){
return (function (p1__31909_SHARP_){
return React.DOM.td({"style": {"text-align": "center"}},p1__31909_SHARP_);
});})(this__28640__auto____$1,map__31916,map__31916__$1,data,tparam))
,cljs.core.vals.call(null,x)));
});})(this__28640__auto____$1,map__31916,map__31916__$1,data,tparam))
,self__.data))))));
});})(map__31916,map__31916__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities31918.getBasis = ((function (map__31916,map__31916__$1,data,tparam){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fixed-head-table","fixed-head-table",-1177799331,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null)], null)], null)], null)))], null)),new cljs.core.Symbol(null,"p__31910","p__31910",1819165236,null),new cljs.core.Symbol(null,"map__31916","map__31916",1148657234,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null),new cljs.core.Symbol(null,"meta31919","meta31919",569597035,null)], null);
});})(map__31916,map__31916__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities31918.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities31918.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities31918";

biomarket.utilities.t_biomarket$utilities31918.cljs$lang$ctorPrWriter = ((function (map__31916,map__31916__$1,data,tparam){
return (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.utilities/t_biomarket$utilities31918");
});})(map__31916,map__31916__$1,data,tparam))
;

biomarket.utilities.__GT_t_biomarket$utilities31918 = ((function (map__31916,map__31916__$1,data,tparam){
return (function biomarket$utilities$fixed_head_table_$___GT_t_biomarket$utilities31918(fixed_head_table__$1,p__31910__$1,map__31916__$2,data__$1,tparam__$1,meta31919){
return (new biomarket.utilities.t_biomarket$utilities31918(fixed_head_table__$1,p__31910__$1,map__31916__$2,data__$1,tparam__$1,meta31919));
});})(map__31916,map__31916__$1,data,tparam))
;

}

return (new biomarket.utilities.t_biomarket$utilities31918(biomarket$utilities$fixed_head_table,p__31910,map__31916__$1,data,tparam,null));
});
biomarket.utilities.skill_tags = (function biomarket$utilities$skill_tags(p__31922,owner){
var vec__31927 = p__31922;
var skills = cljs.core.nth.call(null,vec__31927,(0),null);
var selected = cljs.core.nth.call(null,vec__31927,(1),null);
var tag = cljs.core.nth.call(null,vec__31927,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities31928 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities31928 = (function (skill_tags,p__31922,owner,vec__31927,skills,selected,tag,meta31929){
this.skill_tags = skill_tags;
this.p__31922 = p__31922;
this.owner = owner;
this.vec__31927 = vec__31927;
this.skills = skills;
this.selected = selected;
this.tag = tag;
this.meta31929 = meta31929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities31928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__31927,skills,selected,tag){
return (function (_31930,meta31929__$1){
var self__ = this;
var _31930__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities31928(self__.skill_tags,self__.p__31922,self__.owner,self__.vec__31927,self__.skills,self__.selected,self__.tag,meta31929__$1));
});})(vec__31927,skills,selected,tag))
;

biomarket.utilities.t_biomarket$utilities31928.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__31927,skills,selected,tag){
return (function (_31930){
var self__ = this;
var _31930__$1 = this;
return self__.meta31929;
});})(vec__31927,skills,selected,tag))
;

biomarket.utilities.t_biomarket$utilities31928.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities31928.prototype.om$core$IRender$render$arity$1 = ((function (vec__31927,skills,selected,tag){
return (function (this__28640__auto__){
var self__ = this;
var this__28640__auto____$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "tags"},cljs.core.map.call(null,((function (this__28640__auto____$1,vec__31927,skills,selected,tag){
return (function (p1__31921_SHARP_){
return React.DOM.span({"style": {"padding-right": "10px"}},React.DOM.a({"className": (cljs.core.truth_(self__.selected.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__31921_SHARP_)))?"color2":"color1"), "onClick": (cljs.core.truth_(self__.tag)?((function (this__28640__auto____$1,vec__31927,skills,selected,tag){
return (function (_){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.tag,p1__31921_SHARP_);
});})(this__28640__auto____$1,vec__31927,skills,selected,tag))
:null), "style": {"cursor": "pointer"}},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__31921_SHARP_)));
});})(this__28640__auto____$1,vec__31927,skills,selected,tag))
,self__.skills));
});})(vec__31927,skills,selected,tag))
;

biomarket.utilities.t_biomarket$utilities31928.getBasis = ((function (vec__31927,skills,selected,tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"skill-tags","skill-tags",-484804755,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"skills","skills",-1695734343,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__31922","p__31922",773139892,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__31927","vec__31927",1699712301,null),new cljs.core.Symbol(null,"skills","skills",-1695734343,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta31929","meta31929",2030838189,null)], null);
});})(vec__31927,skills,selected,tag))
;

biomarket.utilities.t_biomarket$utilities31928.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities31928.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities31928";

biomarket.utilities.t_biomarket$utilities31928.cljs$lang$ctorPrWriter = ((function (vec__31927,skills,selected,tag){
return (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.utilities/t_biomarket$utilities31928");
});})(vec__31927,skills,selected,tag))
;

biomarket.utilities.__GT_t_biomarket$utilities31928 = ((function (vec__31927,skills,selected,tag){
return (function biomarket$utilities$skill_tags_$___GT_t_biomarket$utilities31928(skill_tags__$1,p__31922__$1,owner__$1,vec__31927__$1,skills__$1,selected__$1,tag__$1,meta31929){
return (new biomarket.utilities.t_biomarket$utilities31928(skill_tags__$1,p__31922__$1,owner__$1,vec__31927__$1,skills__$1,selected__$1,tag__$1,meta31929));
});})(vec__31927,skills,selected,tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities31928(biomarket$utilities$skill_tags,p__31922,owner,vec__31927,skills,selected,tag,null));
});
if(typeof biomarket.utilities.get_input !== 'undefined'){
} else {
biomarket.utilities.get_input = (function (){var method_table__26591__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26592__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26593__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26594__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26595__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","get-input"),((function (method_table__26591__auto__,prefer_table__26592__auto__,method_cache__26593__auto__,cached_hierarchy__26594__auto__,hierarchy__26595__auto__){
return (function() { 
var G__31934__delegate = function (owner,p__31931,args){
var map__31932 = p__31931;
var map__31932__$1 = ((((!((map__31932 == null)))?((((map__31932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31932):map__31932);
var fname = cljs.core.get.call(null,map__31932__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__31932__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return fname;
};
var G__31934 = function (owner,p__31931,var_args){
var args = null;
if (arguments.length > 2) {
var G__31935__i = 0, G__31935__a = new Array(arguments.length -  2);
while (G__31935__i < G__31935__a.length) {G__31935__a[G__31935__i] = arguments[G__31935__i + 2]; ++G__31935__i;}
  args = new cljs.core.IndexedSeq(G__31935__a,0);
} 
return G__31934__delegate.call(this,owner,p__31931,args);};
G__31934.cljs$lang$maxFixedArity = 2;
G__31934.cljs$lang$applyTo = (function (arglist__31936){
var owner = cljs.core.first(arglist__31936);
arglist__31936 = cljs.core.next(arglist__31936);
var p__31931 = cljs.core.first(arglist__31936);
var args = cljs.core.rest(arglist__31936);
return G__31934__delegate(owner,p__31931,args);
});
G__31934.cljs$core$IFn$_invoke$arity$variadic = G__31934__delegate;
return G__31934;
})()
;})(method_table__26591__auto__,prefer_table__26592__auto__,method_cache__26593__auto__,cached_hierarchy__26594__auto__,hierarchy__26595__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26595__auto__,method_table__26591__auto__,prefer_table__26592__auto__,method_cache__26593__auto__,cached_hierarchy__26594__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.get_input,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__31945 = null;
var G__31945__2 = (function (owner,p__31937){
var map__31939 = p__31937;
var map__31939__$1 = ((((!((map__31939 == null)))?((((map__31939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31939):map__31939);
var m = map__31939__$1;
var fname = cljs.core.get.call(null,map__31939__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__31939__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return biomarket.utilities.get_input.call(null,owner,m,new cljs.core.Keyword(null,"inputs","inputs",865803858));
});
var G__31945__3 = (function (owner,p__31938,param_name){
var map__31941 = p__31938;
var map__31941__$1 = ((((!((map__31941 == null)))?((((map__31941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31941):map__31941);
var fname = cljs.core.get.call(null,map__31941__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__31941__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var inputs = om.core.get_state.call(null,owner,param_name);
var iv = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (inputs,map__31941,map__31941__$1,fname,element){
return (function (p__31943){
var vec__31944 = p__31943;
var k = cljs.core.nth.call(null,vec__31944,(0),null);
var v = cljs.core.nth.call(null,vec__31944,(1),null);
if(cljs.core.not.call(null,k.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element)))){
return v;
} else {
return null;
}
});})(inputs,map__31941,map__31941__$1,fname,element))
,new cljs.core.Keyword(null,"tests","tests",-1041085625).cljs$core$IFn$_invoke$arity$1(element))));
return om.core.set_state_BANG_.call(null,owner,param_name,cljs.core.assoc.call(null,om.core.get_state.call(null,owner,param_name),fname,cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"invalid","invalid",412869516),iv)));
});
G__31945 = function(owner,p__31938,param_name){
switch(arguments.length){
case 2:
return G__31945__2.call(this,owner,p__31938);
case 3:
return G__31945__3.call(this,owner,p__31938,param_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31945.cljs$core$IFn$_invoke$arity$2 = G__31945__2;
G__31945.cljs$core$IFn$_invoke$arity$3 = G__31945__3;
return G__31945;
})()
);
if(typeof biomarket.utilities.clean_input !== 'undefined'){
} else {
biomarket.utilities.clean_input = (function (){var method_table__26591__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26592__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26593__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26594__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26595__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","clean-input"),((function (method_table__26591__auto__,prefer_table__26592__auto__,method_cache__26593__auto__,cached_hierarchy__26594__auto__,hierarchy__26595__auto__){
return (function (element,classes,oc){
return new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(element);
});})(method_table__26591__auto__,prefer_table__26592__auto__,method_cache__26593__auto__,cached_hierarchy__26594__auto__,hierarchy__26595__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26595__auto__,method_table__26591__auto__,prefer_table__26592__auto__,method_cache__26593__auto__,cached_hierarchy__26594__auto__));
})();
}
biomarket.utilities.js = (function biomarket$utilities$js(element,classes,oc){
return cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"form-control",new cljs.core.Keyword(null,"aria-describedby","aria-describedby",1826540471),new cljs.core.Keyword(null,"aria","aria",1737868339).cljs$core$IFn$_invoke$arity$1(classes),new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),(cljs.core.truth_(new cljs.core.Keyword(null,"submitf","submitf",657741776).cljs$core$IFn$_invoke$arity$1(element))?(function (x){
if(cljs.core._EQ_.call(null,(13),x.which)){
return new cljs.core.Keyword(null,"submitf","submitf",657741776).cljs$core$IFn$_invoke$arity$1(element).call(null);
} else {
return null;
}
}):null),new cljs.core.Keyword(null,"onChange","onChange",-312891301),oc], null),cljs.core.dissoc.call(null,element,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spid","spid",1854581004),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"invalid","invalid",412869516),new cljs.core.Keyword(null,"tests","tests",-1041085625))));
});
biomarket.utilities.icons = (function biomarket$utilities$icons(element,classes){
var x__26500__auto__ = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(classes),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)));
return cljs.core._conj.call(null,(function (){var x__26500__auto____$1 = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spid","spid",1854581004).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.Keyword(null,"className","className",-1983287057),"sr-only"], null)),new cljs.core.Keyword(null,"fb","fb",-1331669322).cljs$core$IFn$_invoke$arity$1(classes));
return cljs.core._conj.call(null,(function (){var x__26500__auto____$2 = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"help-block"], null)),new cljs.core.Keyword(null,"fb","fb",-1331669322).cljs$core$IFn$_invoke$arity$1(classes));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26500__auto____$2);
})(),x__26500__auto____$1);
})(),x__26500__auto__);
});
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"addon","addon",931813532),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26500__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26500__auto__);
})(),(function (){var x__26500__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
return React.DOM.div({"className": "input-group"},(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(element);
if(cljs.core.truth_(temp__4423__auto__)){
var b = temp__4423__auto__;
return React.DOM.div({"className": "input-group-addon"},b);
} else {
return null;
}
})(),om.dom.input.call(null,js),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(element);
if(cljs.core.truth_(temp__4423__auto__)){
var a = temp__4423__auto__;
return React.DOM.div({"className": "input-group-addon"},a);
} else {
return null;
}
})());
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26500__auto__);
})(),biomarket.utilities.icons.call(null,element,classes)));
}));
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"no-icon","no-icon",-1734606666),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26500__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26500__auto__);
})(),(function (){var x__26500__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
if(cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element))){
return om.dom.textarea.call(null,js);
} else {
return om.dom.input.call(null,js);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26500__auto__);
})()));
}));
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"default","default",-1987822328),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26500__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26500__auto__);
})(),(function (){var x__26500__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
if(cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element))){
return om.dom.textarea.call(null,js);
} else {
return om.dom.input.call(null,js);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26500__auto__);
})(),biomarket.utilities.icons.call(null,element,classes)));
}));
biomarket.utilities.the_input = (function biomarket$utilities$the_input(js,owner){
if(typeof biomarket.utilities.t_biomarket$utilities31949 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities31949 = (function (the_input,js,owner,meta31950){
this.the_input = the_input;
this.js = js;
this.owner = owner;
this.meta31950 = meta31950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities31949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31951,meta31950__$1){
var self__ = this;
var _31951__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities31949(self__.the_input,self__.js,self__.owner,meta31950__$1));
});

biomarket.utilities.t_biomarket$utilities31949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31951){
var self__ = this;
var _31951__$1 = this;
return self__.meta31950;
});

biomarket.utilities.t_biomarket$utilities31949.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities31949.prototype.om$core$IRender$render$arity$1 = (function (this__28640__auto__){
var self__ = this;
var this__28640__auto____$1 = this;
return cljs.core.apply.call(null,om.dom.div,self__.js);
});

biomarket.utilities.t_biomarket$utilities31949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"the-input","the-input",1976764503,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta31950","meta31950",-999513025,null)], null);
});

biomarket.utilities.t_biomarket$utilities31949.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities31949.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities31949";

biomarket.utilities.t_biomarket$utilities31949.cljs$lang$ctorPrWriter = (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.utilities/t_biomarket$utilities31949");
});

biomarket.utilities.__GT_t_biomarket$utilities31949 = (function biomarket$utilities$the_input_$___GT_t_biomarket$utilities31949(the_input__$1,js__$1,owner__$1,meta31950){
return (new biomarket.utilities.t_biomarket$utilities31949(the_input__$1,js__$1,owner__$1,meta31950));
});

}

return (new biomarket.utilities.t_biomarket$utilities31949(biomarket$utilities$the_input,js,owner,null));
});
biomarket.utilities.on_change_function = (function biomarket$utilities$on_change_function(owner,tag,fname,element,e){
return biomarket.utilities.pub_info.call(null,owner,tag,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"value","value",305978217),e.target.value)], null));
});
biomarket.utilities.input = (function biomarket$utilities$input(p__31954,owner){
var vec__31962 = p__31954;
var fname = cljs.core.nth.call(null,vec__31962,(0),null);
var element = cljs.core.nth.call(null,vec__31962,(1),null);
var tag = cljs.core.nth.call(null,vec__31962,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities31963 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities31963 = (function (input,p__31954,owner,vec__31962,fname,element,tag,meta31964){
this.input = input;
this.p__31954 = p__31954;
this.owner = owner;
this.vec__31962 = vec__31962;
this.fname = fname;
this.element = element;
this.tag = tag;
this.meta31964 = meta31964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities31963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__31962,fname,element,tag){
return (function (_31965,meta31964__$1){
var self__ = this;
var _31965__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities31963(self__.input,self__.p__31954,self__.owner,self__.vec__31962,self__.fname,self__.element,self__.tag,meta31964__$1));
});})(vec__31962,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities31963.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__31962,fname,element,tag){
return (function (_31965){
var self__ = this;
var _31965__$1 = this;
return self__.meta31964;
});})(vec__31962,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities31963.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities31963.prototype.om$core$IRender$render$arity$1 = ((function (vec__31962,fname,element,tag){
return (function (this__28640__auto__){
var self__ = this;
var this__28640__auto____$1 = this;
var oc = ((function (this__28640__auto____$1,vec__31962,fname,element,tag){
return (function (p1__31952_SHARP_){
return biomarket.utilities.on_change_function.call(null,self__.owner,self__.tag,self__.fname,self__.element,p1__31952_SHARP_);
});})(this__28640__auto____$1,vec__31962,fname,element,tag))
;
var classes = (function (){var pred__31966 = cljs.core._EQ_;
var expr__31967 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.element);
if(cljs.core.truth_(pred__31966.call(null,false,expr__31967))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group",new cljs.core.Keyword(null,"icon","icon",1679606541),"",new cljs.core.Keyword(null,"fb","fb",-1331669322),""], null);
} else {
if(cljs.core.truth_(pred__31966.call(null,null,expr__31967))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group has-success has-feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"glyphicon glyphicon-ok form-control-feedback",new cljs.core.Keyword(null,"fb","fb",-1331669322),""], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group has-error has-feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"glyphicon glyphicon-remove form-control-feedback",new cljs.core.Keyword(null,"fb","fb",-1331669322),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (pred__31966,expr__31967,oc,this__28640__auto____$1,vec__31962,fname,element,tag){
return (function (p1__31953_SHARP_){
return React.DOM.div(null,p1__31953_SHARP_);
});})(pred__31966,expr__31967,oc,this__28640__auto____$1,vec__31962,fname,element,tag))
,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.element)))], null);
}
}
})();
return React.DOM.div({"className": new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)},React.DOM.label({"className": "control-label", "htmlFor": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.element)},new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.element)),om.core.build.call(null,biomarket.utilities.the_input,biomarket.utilities.clean_input.call(null,self__.element,classes,oc)));
});})(vec__31962,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities31963.getBasis = ((function (vec__31962,fname,element,tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fname","fname",-1154144278,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__31954","p__31954",-1087176720,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__31962","vec__31962",397349891,null),new cljs.core.Symbol(null,"fname","fname",-1154144278,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta31964","meta31964",1812998236,null)], null);
});})(vec__31962,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities31963.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities31963.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities31963";

biomarket.utilities.t_biomarket$utilities31963.cljs$lang$ctorPrWriter = ((function (vec__31962,fname,element,tag){
return (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.utilities/t_biomarket$utilities31963");
});})(vec__31962,fname,element,tag))
;

biomarket.utilities.__GT_t_biomarket$utilities31963 = ((function (vec__31962,fname,element,tag){
return (function biomarket$utilities$input_$___GT_t_biomarket$utilities31963(input__$1,p__31954__$1,owner__$1,vec__31962__$1,fname__$1,element__$1,tag__$1,meta31964){
return (new biomarket.utilities.t_biomarket$utilities31963(input__$1,p__31954__$1,owner__$1,vec__31962__$1,fname__$1,element__$1,tag__$1,meta31964));
});})(vec__31962,fname,element,tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities31963(biomarket$utilities$input,p__31954,owner,vec__31962,fname,element,tag,null));
});
biomarket.utilities.set_radio_state = (function biomarket$utilities$set_radio_state(owner,element,e){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"current","current",-1088038603),biomarket.utilities.get_text.call(null,e)));
});
biomarket.utilities.in_line_radio = (function biomarket$utilities$in_line_radio(p__31970,owner){
var vec__31978 = p__31970;
var name = cljs.core.nth.call(null,vec__31978,(0),null);
var element = cljs.core.nth.call(null,vec__31978,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities31979 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IWillUpdate}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities31979 = (function (in_line_radio,p__31970,owner,vec__31978,name,element,meta31980){
this.in_line_radio = in_line_radio;
this.p__31970 = p__31970;
this.owner = owner;
this.vec__31978 = vec__31978;
this.name = name;
this.element = element;
this.meta31980 = meta31980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities31979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__31978,name,element){
return (function (_31981,meta31980__$1){
var self__ = this;
var _31981__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities31979(self__.in_line_radio,self__.p__31970,self__.owner,self__.vec__31978,self__.name,self__.element,meta31980__$1));
});})(vec__31978,name,element))
;

biomarket.utilities.t_biomarket$utilities31979.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__31978,name,element){
return (function (_31981){
var self__ = this;
var _31981__$1 = this;
return self__.meta31980;
});})(vec__31978,name,element))
;

biomarket.utilities.t_biomarket$utilities31979.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities31979.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__31978,name,element){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),self__.name,new cljs.core.Keyword(null,"element","element",1974019749),self__.element], null);
});})(vec__31978,name,element))
;

biomarket.utilities.t_biomarket$utilities31979.prototype.om$core$IWillUpdate$ = true;

biomarket.utilities.t_biomarket$utilities31979.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (vec__31978,name,element){
return (function (_,np,ns){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"radiod","radiod",450568867),ns);
});})(vec__31978,name,element))
;

biomarket.utilities.t_biomarket$utilities31979.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities31979.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__31978,name,element){
return (function (_,p__31982){
var self__ = this;
var map__31983 = p__31982;
var map__31983__$1 = ((((!((map__31983 == null)))?((((map__31983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31983):map__31983);
var element__$1 = cljs.core.get.call(null,map__31983__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "pure-u-1"},cljs.core.map.call(null,((function (___$1,map__31983,map__31983__$1,element__$1,vec__31978,name,element){
return (function (p1__31969_SHARP_){
return React.DOM.span(null,React.DOM.div({"className": "pure-u-1-5"},om.dom.input.call(null,{"type": "radio", "name": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(element__$1), "value": cljs.core.first.call(null,p1__31969_SHARP_), "onChange": ((function (___$1,map__31983,map__31983__$1,element__$1,vec__31978,name,element){
return (function (e){
return biomarket.utilities.set_radio_state.call(null,self__.owner,element__$1,e);
});})(___$1,map__31983,map__31983__$1,element__$1,vec__31978,name,element))
})),React.DOM.div({"className": "pure-u-1-4"},cljs.core.second.call(null,p1__31969_SHARP_)));
});})(___$1,map__31983,map__31983__$1,element__$1,vec__31978,name,element))
,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(element__$1)));
});})(vec__31978,name,element))
;

biomarket.utilities.t_biomarket$utilities31979.getBasis = ((function (vec__31978,name,element){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"in-line-radio","in-line-radio",803575522,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"element","element",-680416020,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__31970","p__31970",1622470266,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__31978","vec__31978",-1732448973,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"meta31980","meta31980",-834389073,null)], null);
});})(vec__31978,name,element))
;

biomarket.utilities.t_biomarket$utilities31979.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities31979.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities31979";

biomarket.utilities.t_biomarket$utilities31979.cljs$lang$ctorPrWriter = ((function (vec__31978,name,element){
return (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.utilities/t_biomarket$utilities31979");
});})(vec__31978,name,element))
;

biomarket.utilities.__GT_t_biomarket$utilities31979 = ((function (vec__31978,name,element){
return (function biomarket$utilities$in_line_radio_$___GT_t_biomarket$utilities31979(in_line_radio__$1,p__31970__$1,owner__$1,vec__31978__$1,name__$1,element__$1,meta31980){
return (new biomarket.utilities.t_biomarket$utilities31979(in_line_radio__$1,p__31970__$1,owner__$1,vec__31978__$1,name__$1,element__$1,meta31980));
});})(vec__31978,name,element))
;

}

return (new biomarket.utilities.t_biomarket$utilities31979(biomarket$utilities$in_line_radio,p__31970,owner,vec__31978,name,element,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=utilities.js.map