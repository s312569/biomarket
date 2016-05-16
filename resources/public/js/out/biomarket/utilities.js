// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.utilities');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs.pprint');
goog.require('ajax.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('cljs_time.format');
goog.require('om.core');
goog.require('clojure.string');
biomarket.utilities.datestring__GT_readable = (function biomarket$utilities$datestring__GT_readable(string){
var rfc = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"rfc822","rfc822",-404628697));
var f = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"basic-date-time","basic-date-time",1525413604));
return cljs_time.format.unparse.call(null,rfc,cljs_time.format.parse.call(null,f,string));
});
biomarket.utilities.get_text = (function biomarket$utilities$get_text(e){
return e.target.value;
});
biomarket.utilities.log = (function biomarket$utilities$log(s){
return console.log([cljs.core.str(s)].join(''));
});
biomarket.utilities.error_handler = (function biomarket$utilities$error_handler(p__119577){
var map__119580 = p__119577;
var map__119580__$1 = ((((!((map__119580 == null)))?((((map__119580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119580):map__119580);
var status = cljs.core.get.call(null,map__119580__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__119580__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return biomarket.utilities.log.call(null,[cljs.core.str("Something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
biomarket.utilities.post_params = (function biomarket$utilities$post_params(url,params,handler){
return ajax.core.POST.call(null,url,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),biomarket.utilities.error_handler,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
if(typeof biomarket.utilities.app_state !== 'undefined'){
} else {
biomarket.utilities.app_state = (function (){var req_chan = cljs.core.async.chan.call(null);
var pub_chan = cljs.core.async.chan.call(null);
var notif_chan = cljs.core.async.pub.call(null,pub_chan,new cljs.core.Keyword(null,"topic","topic",-1960480691));
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"req-chan","req-chan",-35924046),req_chan,new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026),notif_chan,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593),pub_chan], null));
})();
}
biomarket.utilities.pub_info = (function biomarket$utilities$pub_info(owner,topic,data){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
biomarket.utilities.register_loop = (function biomarket$utilities$register_loop(owner,topic,func){
var c = cljs.core.async.chan.call(null);
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var events = cljs.core.async.sub.call(null,nc,topic,c);
var c__25572__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25572__auto__,c,nc,events){
return (function (){
var f__25573__auto__ = (function (){var switch__25551__auto__ = ((function (c__25572__auto__,c,nc,events){
return (function (state_119637){
var state_val_119638 = (state_119637[(1)]);
if((state_val_119638 === (1))){
var state_119637__$1 = state_119637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_119637__$1,(2),events);
} else {
if((state_val_119638 === (2))){
var inst_119620 = (state_119637[(2)]);
var inst_119621 = inst_119620;
var state_119637__$1 = (function (){var statearr_119639 = state_119637;
(statearr_119639[(7)] = inst_119621);

return statearr_119639;
})();
var statearr_119640_119656 = state_119637__$1;
(statearr_119640_119656[(2)] = null);

(statearr_119640_119656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119638 === (3))){
var inst_119621 = (state_119637[(7)]);
var inst_119623 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_119621);
var inst_119624 = cljs.core._EQ_.call(null,inst_119623,new cljs.core.Keyword(null,"end","end",-268185958));
var state_119637__$1 = state_119637;
if(inst_119624){
var statearr_119641_119657 = state_119637__$1;
(statearr_119641_119657[(1)] = (5));

} else {
var statearr_119642_119658 = state_119637__$1;
(statearr_119642_119658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119638 === (4))){
var inst_119635 = (state_119637[(2)]);
var state_119637__$1 = state_119637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_119637__$1,inst_119635);
} else {
if((state_val_119638 === (5))){
var state_119637__$1 = state_119637;
var statearr_119643_119659 = state_119637__$1;
(statearr_119643_119659[(2)] = null);

(statearr_119643_119659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119638 === (6))){
var inst_119621 = (state_119637[(7)]);
var inst_119627 = func.call(null,owner,inst_119621);
var state_119637__$1 = (function (){var statearr_119644 = state_119637;
(statearr_119644[(8)] = inst_119627);

return statearr_119644;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_119637__$1,(8),events);
} else {
if((state_val_119638 === (7))){
var inst_119632 = (state_119637[(2)]);
var inst_119633 = cljs.core.async.unsub.call(null,nc,topic,c);
var state_119637__$1 = (function (){var statearr_119645 = state_119637;
(statearr_119645[(9)] = inst_119632);

return statearr_119645;
})();
var statearr_119646_119660 = state_119637__$1;
(statearr_119646_119660[(2)] = inst_119633);

(statearr_119646_119660[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119638 === (8))){
var inst_119629 = (state_119637[(2)]);
var inst_119621 = inst_119629;
var state_119637__$1 = (function (){var statearr_119647 = state_119637;
(statearr_119647[(7)] = inst_119621);

return statearr_119647;
})();
var statearr_119648_119661 = state_119637__$1;
(statearr_119648_119661[(2)] = null);

(statearr_119648_119661[(1)] = (3));


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
});})(c__25572__auto__,c,nc,events))
;
return ((function (switch__25551__auto__,c__25572__auto__,c,nc,events){
return (function() {
var biomarket$utilities$register_loop_$_state_machine__25552__auto__ = null;
var biomarket$utilities$register_loop_$_state_machine__25552__auto____0 = (function (){
var statearr_119652 = [null,null,null,null,null,null,null,null,null,null];
(statearr_119652[(0)] = biomarket$utilities$register_loop_$_state_machine__25552__auto__);

(statearr_119652[(1)] = (1));

return statearr_119652;
});
var biomarket$utilities$register_loop_$_state_machine__25552__auto____1 = (function (state_119637){
while(true){
var ret_value__25553__auto__ = (function (){try{while(true){
var result__25554__auto__ = switch__25551__auto__.call(null,state_119637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25554__auto__;
}
break;
}
}catch (e119653){if((e119653 instanceof Object)){
var ex__25555__auto__ = e119653;
var statearr_119654_119662 = state_119637;
(statearr_119654_119662[(5)] = ex__25555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_119637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e119653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__119663 = state_119637;
state_119637 = G__119663;
continue;
} else {
return ret_value__25553__auto__;
}
break;
}
});
biomarket$utilities$register_loop_$_state_machine__25552__auto__ = function(state_119637){
switch(arguments.length){
case 0:
return biomarket$utilities$register_loop_$_state_machine__25552__auto____0.call(this);
case 1:
return biomarket$utilities$register_loop_$_state_machine__25552__auto____1.call(this,state_119637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$utilities$register_loop_$_state_machine__25552__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$utilities$register_loop_$_state_machine__25552__auto____0;
biomarket$utilities$register_loop_$_state_machine__25552__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$utilities$register_loop_$_state_machine__25552__auto____1;
return biomarket$utilities$register_loop_$_state_machine__25552__auto__;
})()
;})(switch__25551__auto__,c__25572__auto__,c,nc,events))
})();
var state__25574__auto__ = (function (){var statearr_119655 = f__25573__auto__.call(null);
(statearr_119655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25572__auto__);

return statearr_119655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25574__auto__);
});})(c__25572__auto__,c,nc,events))
);

return c__25572__auto__;
});
biomarket.utilities.unsubscribe = (function biomarket$utilities$unsubscribe(var_args){
var args__23834__auto__ = [];
var len__23827__auto___119670 = arguments.length;
var i__23828__auto___119671 = (0);
while(true){
if((i__23828__auto___119671 < len__23827__auto___119670)){
args__23834__auto__.push((arguments[i__23828__auto___119671]));

var G__119672 = (i__23828__auto___119671 + (1));
i__23828__auto___119671 = G__119672;
continue;
} else {
}
break;
}

var argseq__23835__auto__ = ((((1) < args__23834__auto__.length))?(new cljs.core.IndexedSeq(args__23834__auto__.slice((1)),(0),null)):null);
return biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23835__auto__);
});

biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic = (function (owner,topics){
var pc = new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var seq__119666 = cljs.core.seq.call(null,topics);
var chunk__119667 = null;
var count__119668 = (0);
var i__119669 = (0);
while(true){
if((i__119669 < count__119668)){
var t = cljs.core._nth.call(null,chunk__119667,i__119669);
cljs.core.async.put_BANG_.call(null,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"end","end",-268185958)], null));

var G__119673 = seq__119666;
var G__119674 = chunk__119667;
var G__119675 = count__119668;
var G__119676 = (i__119669 + (1));
seq__119666 = G__119673;
chunk__119667 = G__119674;
count__119668 = G__119675;
i__119669 = G__119676;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__119666);
if(temp__4425__auto__){
var seq__119666__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__119666__$1)){
var c__23568__auto__ = cljs.core.chunk_first.call(null,seq__119666__$1);
var G__119677 = cljs.core.chunk_rest.call(null,seq__119666__$1);
var G__119678 = c__23568__auto__;
var G__119679 = cljs.core.count.call(null,c__23568__auto__);
var G__119680 = (0);
seq__119666 = G__119677;
chunk__119667 = G__119678;
count__119668 = G__119679;
i__119669 = G__119680;
continue;
} else {
var t = cljs.core.first.call(null,seq__119666__$1);
cljs.core.async.put_BANG_.call(null,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"end","end",-268185958)], null));

var G__119681 = cljs.core.next.call(null,seq__119666__$1);
var G__119682 = null;
var G__119683 = (0);
var G__119684 = (0);
seq__119666 = G__119681;
chunk__119667 = G__119682;
count__119668 = G__119683;
i__119669 = G__119684;
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

biomarket.utilities.unsubscribe.cljs$lang$applyTo = (function (seq119664){
var G__119665 = cljs.core.first.call(null,seq119664);
var seq119664__$1 = cljs.core.next.call(null,seq119664);
return biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic(G__119665,seq119664__$1);
});
biomarket.utilities.more_less_text = (function biomarket$utilities$more_less_text(text,owner){
if(typeof biomarket.utilities.t_biomarket$utilities119694 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities119694 = (function (more_less_text,text,owner,meta119695){
this.more_less_text = more_less_text;
this.text = text;
this.owner = owner;
this.meta119695 = meta119695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities119694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119696,meta119695__$1){
var self__ = this;
var _119696__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities119694(self__.more_less_text,self__.text,self__.owner,meta119695__$1));
});

biomarket.utilities.t_biomarket$utilities119694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119696){
var self__ = this;
var _119696__$1 = this;
return self__.meta119695;
});

biomarket.utilities.t_biomarket$utilities119694.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities119694.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"less","less",-428869198)], null);
});

biomarket.utilities.t_biomarket$utilities119694.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities119694.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__119697){
var self__ = this;
var map__119698 = p__119697;
var map__119698__$1 = ((((!((map__119698 == null)))?((((map__119698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119698):map__119698);
var showing = cljs.core.get.call(null,map__119698__$1,new cljs.core.Keyword(null,"showing","showing",798009604));
var ___$1 = this;
return React.DOM.div(null,(((cljs.core.count.call(null,self__.text) < (400)))?React.DOM.div(null,self__.text):(function (){var pred__119700 = cljs.core._EQ_;
var expr__119701 = showing;
if(cljs.core.truth_(pred__119700.call(null,new cljs.core.Keyword(null,"less","less",-428869198),expr__119701))){
return React.DOM.div(null,React.DOM.span(null,[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(300),self__.text))),cljs.core.str(" ... ")].join('')),React.DOM.a({"onClick": ((function (pred__119700,expr__119701,___$1,map__119698,map__119698__$1,showing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"more","more",-2058821800));
});})(pred__119700,expr__119701,___$1,map__119698,map__119698__$1,showing))
, "className": "flinka"}," More"));
} else {
if(cljs.core.truth_(pred__119700.call(null,new cljs.core.Keyword(null,"more","more",-2058821800),expr__119701))){
return React.DOM.div(null,React.DOM.span(null,self__.text),React.DOM.a({"onClick": ((function (pred__119700,expr__119701,___$1,map__119698,map__119698__$1,showing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"less","less",-428869198));
});})(pred__119700,expr__119701,___$1,map__119698,map__119698__$1,showing))
, "className": "flinka"}," Less"));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__119701)].join('')));
}
}
})()));
});

biomarket.utilities.t_biomarket$utilities119694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"more-less-text","more-less-text",-1737643469,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta119695","meta119695",-1919905581,null)], null);
});

biomarket.utilities.t_biomarket$utilities119694.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities119694.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities119694";

biomarket.utilities.t_biomarket$utilities119694.cljs$lang$ctorPrWriter = (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.utilities/t_biomarket$utilities119694");
});

biomarket.utilities.__GT_t_biomarket$utilities119694 = (function biomarket$utilities$more_less_text_$___GT_t_biomarket$utilities119694(more_less_text__$1,text__$1,owner__$1,meta119695){
return (new biomarket.utilities.t_biomarket$utilities119694(more_less_text__$1,text__$1,owner__$1,meta119695));
});

}

return (new biomarket.utilities.t_biomarket$utilities119694(biomarket$utilities$more_less_text,text,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.utilities.control_buttons = (function biomarket$utilities$control_buttons(inputs,owner){
if(typeof biomarket.utilities.t_biomarket$utilities119707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities119707 = (function (control_buttons,inputs,owner,meta119708){
this.control_buttons = control_buttons;
this.inputs = inputs;
this.owner = owner;
this.meta119708 = meta119708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities119707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119709,meta119708__$1){
var self__ = this;
var _119709__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities119707(self__.control_buttons,self__.inputs,self__.owner,meta119708__$1));
});

biomarket.utilities.t_biomarket$utilities119707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119709){
var self__ = this;
var _119709__$1 = this;
return self__.meta119708;
});

biomarket.utilities.t_biomarket$utilities119707.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities119707.prototype.om$core$IRender$render$arity$1 = (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
return React.DOM.div({"className": "panel panel-default"},cljs.core.apply.call(null,om.dom.div,{"className": "panel-heading"},cljs.core.map.call(null,((function (this__25716__auto____$1){
return (function (p1__119703_SHARP_){
return React.DOM.button({"className": "btn btn-default", "onClick": cljs.core.second.call(null,p1__119703_SHARP_)},cljs.core.first.call(null,p1__119703_SHARP_));
});})(this__25716__auto____$1))
,self__.inputs)));
});

biomarket.utilities.t_biomarket$utilities119707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"control-buttons","control-buttons",285817705,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta119708","meta119708",-917370506,null)], null);
});

biomarket.utilities.t_biomarket$utilities119707.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities119707.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities119707";

biomarket.utilities.t_biomarket$utilities119707.cljs$lang$ctorPrWriter = (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.utilities/t_biomarket$utilities119707");
});

biomarket.utilities.__GT_t_biomarket$utilities119707 = (function biomarket$utilities$control_buttons_$___GT_t_biomarket$utilities119707(control_buttons__$1,inputs__$1,owner__$1,meta119708){
return (new biomarket.utilities.t_biomarket$utilities119707(control_buttons__$1,inputs__$1,owner__$1,meta119708));
});

}

return (new biomarket.utilities.t_biomarket$utilities119707(biomarket$utilities$control_buttons,inputs,owner,null));
});
biomarket.utilities.menu_item = (function biomarket$utilities$menu_item(p__119710,owner){
var vec__119715 = p__119710;
var text = cljs.core.nth.call(null,vec__119715,(0),null);
var topic = cljs.core.nth.call(null,vec__119715,(1),null);
var tag = cljs.core.nth.call(null,vec__119715,(2),null);
var current = cljs.core.nth.call(null,vec__119715,(3),null);
if(typeof biomarket.utilities.t_biomarket$utilities119716 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities119716 = (function (menu_item,p__119710,owner,vec__119715,text,topic,tag,current,meta119717){
this.menu_item = menu_item;
this.p__119710 = p__119710;
this.owner = owner;
this.vec__119715 = vec__119715;
this.text = text;
this.topic = topic;
this.tag = tag;
this.current = current;
this.meta119717 = meta119717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities119716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__119715,text,topic,tag,current){
return (function (_119718,meta119717__$1){
var self__ = this;
var _119718__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities119716(self__.menu_item,self__.p__119710,self__.owner,self__.vec__119715,self__.text,self__.topic,self__.tag,self__.current,meta119717__$1));
});})(vec__119715,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities119716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__119715,text,topic,tag,current){
return (function (_119718){
var self__ = this;
var _119718__$1 = this;
return self__.meta119717;
});})(vec__119715,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities119716.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities119716.prototype.om$core$IRender$render$arity$1 = ((function (vec__119715,text,topic,tag,current){
return (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
return React.DOM.li({"className": ((cljs.core._EQ_.call(null,self__.current,self__.topic))?"active":null), "role": "presentation"},React.DOM.a({"onClick": ((function (this__25716__auto____$1,vec__119715,text,topic,tag,current){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.tag,self__.topic);
});})(this__25716__auto____$1,vec__119715,text,topic,tag,current))
, "style": {"cursor": "pointer"}},self__.text));
});})(vec__119715,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities119716.getBasis = ((function (vec__119715,text,topic,tag,current){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"current","current",552492924,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__119710","p__119710",-807537460,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__119715","vec__119715",-1626301772,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"meta119717","meta119717",665382561,null)], null);
});})(vec__119715,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities119716.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities119716.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities119716";

biomarket.utilities.t_biomarket$utilities119716.cljs$lang$ctorPrWriter = ((function (vec__119715,text,topic,tag,current){
return (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.utilities/t_biomarket$utilities119716");
});})(vec__119715,text,topic,tag,current))
;

biomarket.utilities.__GT_t_biomarket$utilities119716 = ((function (vec__119715,text,topic,tag,current){
return (function biomarket$utilities$menu_item_$___GT_t_biomarket$utilities119716(menu_item__$1,p__119710__$1,owner__$1,vec__119715__$1,text__$1,topic__$1,tag__$1,current__$1,meta119717){
return (new biomarket.utilities.t_biomarket$utilities119716(menu_item__$1,p__119710__$1,owner__$1,vec__119715__$1,text__$1,topic__$1,tag__$1,current__$1,meta119717));
});})(vec__119715,text,topic,tag,current))
;

}

return (new biomarket.utilities.t_biomarket$utilities119716(biomarket$utilities$menu_item,p__119710,owner,vec__119715,text,topic,tag,current,null));
});
biomarket.utilities.top_navigation = (function biomarket$utilities$top_navigation(p__119720,owner){
var vec__119725 = p__119720;
var current = cljs.core.nth.call(null,vec__119725,(0),null);
var inputs = cljs.core.nth.call(null,vec__119725,(1),null);
var nav_tag = cljs.core.nth.call(null,vec__119725,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities119726 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities119726 = (function (top_navigation,p__119720,owner,vec__119725,current,inputs,nav_tag,meta119727){
this.top_navigation = top_navigation;
this.p__119720 = p__119720;
this.owner = owner;
this.vec__119725 = vec__119725;
this.current = current;
this.inputs = inputs;
this.nav_tag = nav_tag;
this.meta119727 = meta119727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities119726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__119725,current,inputs,nav_tag){
return (function (_119728,meta119727__$1){
var self__ = this;
var _119728__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities119726(self__.top_navigation,self__.p__119720,self__.owner,self__.vec__119725,self__.current,self__.inputs,self__.nav_tag,meta119727__$1));
});})(vec__119725,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities119726.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__119725,current,inputs,nav_tag){
return (function (_119728){
var self__ = this;
var _119728__$1 = this;
return self__.meta119727;
});})(vec__119725,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities119726.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities119726.prototype.om$core$IRender$render$arity$1 = ((function (vec__119725,current,inputs,nav_tag){
return (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
return React.DOM.div({"role": "navigation"},cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-pills nav-justified"},cljs.core.map.call(null,((function (this__25716__auto____$1,vec__119725,current,inputs,nav_tag){
return (function (p1__119719_SHARP_){
return om.core.build.call(null,biomarket.utilities.menu_item,cljs.core.concat.call(null,p1__119719_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nav_tag,self__.current], null)));
});})(this__25716__auto____$1,vec__119725,current,inputs,nav_tag))
,self__.inputs)));
});})(vec__119725,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities119726.getBasis = ((function (vec__119725,current,inputs,nav_tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"top-navigation","top-navigation",-1053916026,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__119720","p__119720",450658696,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__119725","vec__119725",-728517605,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"meta119727","meta119727",1385692199,null)], null);
});})(vec__119725,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities119726.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities119726.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities119726";

biomarket.utilities.t_biomarket$utilities119726.cljs$lang$ctorPrWriter = ((function (vec__119725,current,inputs,nav_tag){
return (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.utilities/t_biomarket$utilities119726");
});})(vec__119725,current,inputs,nav_tag))
;

biomarket.utilities.__GT_t_biomarket$utilities119726 = ((function (vec__119725,current,inputs,nav_tag){
return (function biomarket$utilities$top_navigation_$___GT_t_biomarket$utilities119726(top_navigation__$1,p__119720__$1,owner__$1,vec__119725__$1,current__$1,inputs__$1,nav_tag__$1,meta119727){
return (new biomarket.utilities.t_biomarket$utilities119726(top_navigation__$1,p__119720__$1,owner__$1,vec__119725__$1,current__$1,inputs__$1,nav_tag__$1,meta119727));
});})(vec__119725,current,inputs,nav_tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities119726(biomarket$utilities$top_navigation,p__119720,owner,vec__119725,current,inputs,nav_tag,null));
});
biomarket.utilities.padded_button = (function biomarket$utilities$padded_button(p__119729,owner){
var vec__119734 = p__119729;
var padding = cljs.core.nth.call(null,vec__119734,(0),null);
var value = cljs.core.nth.call(null,vec__119734,(1),null);
var func = cljs.core.nth.call(null,vec__119734,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities119735 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities119735 = (function (padded_button,p__119729,owner,vec__119734,padding,value,func,meta119736){
this.padded_button = padded_button;
this.p__119729 = p__119729;
this.owner = owner;
this.vec__119734 = vec__119734;
this.padding = padding;
this.value = value;
this.func = func;
this.meta119736 = meta119736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities119735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__119734,padding,value,func){
return (function (_119737,meta119736__$1){
var self__ = this;
var _119737__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities119735(self__.padded_button,self__.p__119729,self__.owner,self__.vec__119734,self__.padding,self__.value,self__.func,meta119736__$1));
});})(vec__119734,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities119735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__119734,padding,value,func){
return (function (_119737){
var self__ = this;
var _119737__$1 = this;
return self__.meta119736;
});})(vec__119734,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities119735.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities119735.prototype.om$core$IRender$render$arity$1 = ((function (vec__119734,padding,value,func){
return (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
return React.DOM.div({"style": {"padding": self__.padding}},(cljs.core.truth_(self__.func)?React.DOM.button({"className": "pure-button pure-button-primary", "onClick": self__.func},self__.value):React.DOM.button({"className": "pure-button pure-button-primary"},self__.value)));
});})(vec__119734,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities119735.getBasis = ((function (vec__119734,padding,value,func){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"padded-button","padded-button",875344236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__119729","p__119729",229452220,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__119734","vec__119734",-508604880,null),new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"meta119736","meta119736",-358635468,null)], null);
});})(vec__119734,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities119735.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities119735.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities119735";

biomarket.utilities.t_biomarket$utilities119735.cljs$lang$ctorPrWriter = ((function (vec__119734,padding,value,func){
return (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.utilities/t_biomarket$utilities119735");
});})(vec__119734,padding,value,func))
;

biomarket.utilities.__GT_t_biomarket$utilities119735 = ((function (vec__119734,padding,value,func){
return (function biomarket$utilities$padded_button_$___GT_t_biomarket$utilities119735(padded_button__$1,p__119729__$1,owner__$1,vec__119734__$1,padding__$1,value__$1,func__$1,meta119736){
return (new biomarket.utilities.t_biomarket$utilities119735(padded_button__$1,p__119729__$1,owner__$1,vec__119734__$1,padding__$1,value__$1,func__$1,meta119736));
});})(vec__119734,padding,value,func))
;

}

return (new biomarket.utilities.t_biomarket$utilities119735(biomarket$utilities$padded_button,p__119729,owner,vec__119734,padding,value,func,null));
});
biomarket.utilities.padded_button_disabled = (function biomarket$utilities$padded_button_disabled(p__119738,owner){
var vec__119743 = p__119738;
var padding = cljs.core.nth.call(null,vec__119743,(0),null);
var value = cljs.core.nth.call(null,vec__119743,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities119744 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities119744 = (function (padded_button_disabled,p__119738,owner,vec__119743,padding,value,meta119745){
this.padded_button_disabled = padded_button_disabled;
this.p__119738 = p__119738;
this.owner = owner;
this.vec__119743 = vec__119743;
this.padding = padding;
this.value = value;
this.meta119745 = meta119745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities119744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__119743,padding,value){
return (function (_119746,meta119745__$1){
var self__ = this;
var _119746__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities119744(self__.padded_button_disabled,self__.p__119738,self__.owner,self__.vec__119743,self__.padding,self__.value,meta119745__$1));
});})(vec__119743,padding,value))
;

biomarket.utilities.t_biomarket$utilities119744.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__119743,padding,value){
return (function (_119746){
var self__ = this;
var _119746__$1 = this;
return self__.meta119745;
});})(vec__119743,padding,value))
;

biomarket.utilities.t_biomarket$utilities119744.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities119744.prototype.om$core$IRender$render$arity$1 = ((function (vec__119743,padding,value){
return (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
return React.DOM.div({"style": {"padding": self__.padding}},React.DOM.button({"className": "pure-button pure-button-primary", "disabled": "true"},self__.value));
});})(vec__119743,padding,value))
;

biomarket.utilities.t_biomarket$utilities119744.getBasis = ((function (vec__119743,padding,value){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"padded-button-disabled","padded-button-disabled",1594106929,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__119738","p__119738",-1612215105,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__119743","vec__119743",1332878921,null),new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"meta119745","meta119745",-2027314874,null)], null);
});})(vec__119743,padding,value))
;

biomarket.utilities.t_biomarket$utilities119744.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities119744.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities119744";

biomarket.utilities.t_biomarket$utilities119744.cljs$lang$ctorPrWriter = ((function (vec__119743,padding,value){
return (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.utilities/t_biomarket$utilities119744");
});})(vec__119743,padding,value))
;

biomarket.utilities.__GT_t_biomarket$utilities119744 = ((function (vec__119743,padding,value){
return (function biomarket$utilities$padded_button_disabled_$___GT_t_biomarket$utilities119744(padded_button_disabled__$1,p__119738__$1,owner__$1,vec__119743__$1,padding__$1,value__$1,meta119745){
return (new biomarket.utilities.t_biomarket$utilities119744(padded_button_disabled__$1,p__119738__$1,owner__$1,vec__119743__$1,padding__$1,value__$1,meta119745));
});})(vec__119743,padding,value))
;

}

return (new biomarket.utilities.t_biomarket$utilities119744(biomarket$utilities$padded_button_disabled,p__119738,owner,vec__119743,padding,value,null));
});
biomarket.utilities.show_default = (function biomarket$utilities$show_default(_,owner){
if(typeof biomarket.utilities.t_biomarket$utilities119750 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities119750 = (function (show_default,_,owner,meta119751){
this.show_default = show_default;
this._ = _;
this.owner = owner;
this.meta119751 = meta119751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities119750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119752,meta119751__$1){
var self__ = this;
var _119752__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities119750(self__.show_default,self__._,self__.owner,meta119751__$1));
});

biomarket.utilities.t_biomarket$utilities119750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119752){
var self__ = this;
var _119752__$1 = this;
return self__.meta119751;
});

biomarket.utilities.t_biomarket$utilities119750.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities119750.prototype.om$core$IRender$render$arity$1 = (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
return React.DOM.div(null,"");
});

biomarket.utilities.t_biomarket$utilities119750.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-default","show-default",-609967859,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta119751","meta119751",531845240,null)], null);
});

biomarket.utilities.t_biomarket$utilities119750.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities119750.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities119750";

biomarket.utilities.t_biomarket$utilities119750.cljs$lang$ctorPrWriter = (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.utilities/t_biomarket$utilities119750");
});

biomarket.utilities.__GT_t_biomarket$utilities119750 = (function biomarket$utilities$show_default_$___GT_t_biomarket$utilities119750(show_default__$1,___$1,owner__$1,meta119751){
return (new biomarket.utilities.t_biomarket$utilities119750(show_default__$1,___$1,owner__$1,meta119751));
});

}

return (new biomarket.utilities.t_biomarket$utilities119750(biomarket$utilities$show_default,_,owner,null));
});
biomarket.utilities.bottom_links = (function biomarket$utilities$bottom_links(p__119753,owner){
var vec__119765 = p__119753;
var project = cljs.core.nth.call(null,vec__119765,(0),null);
var map__119766 = cljs.core.nth.call(null,vec__119765,(1),null);
var map__119766__$1 = ((((!((map__119766 == null)))?((((map__119766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119766):map__119766);
var links = cljs.core.get.call(null,map__119766__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var visible = cljs.core.get.call(null,map__119766__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var oc_tag = cljs.core.get.call(null,map__119766__$1,new cljs.core.Keyword(null,"oc-tag","oc-tag",-724883257));
var bid_widget = cljs.core.get.call(null,map__119766__$1,new cljs.core.Keyword(null,"bid-widget","bid-widget",627145557));
if(typeof biomarket.utilities.t_biomarket$utilities119768 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities119768 = (function (visible,map__119766,owner,links,oc_tag,p__119753,bottom_links,project,bid_widget,vec__119765,meta119769){
this.visible = visible;
this.map__119766 = map__119766;
this.owner = owner;
this.links = links;
this.oc_tag = oc_tag;
this.p__119753 = p__119753;
this.bottom_links = bottom_links;
this.project = project;
this.bid_widget = bid_widget;
this.vec__119765 = vec__119765;
this.meta119769 = meta119769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities119768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__119765,project,map__119766,map__119766__$1,links,visible,oc_tag,bid_widget){
return (function (_119770,meta119769__$1){
var self__ = this;
var _119770__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities119768(self__.visible,self__.map__119766,self__.owner,self__.links,self__.oc_tag,self__.p__119753,self__.bottom_links,self__.project,self__.bid_widget,self__.vec__119765,meta119769__$1));
});})(vec__119765,project,map__119766,map__119766__$1,links,visible,oc_tag,bid_widget))
;

biomarket.utilities.t_biomarket$utilities119768.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__119765,project,map__119766,map__119766__$1,links,visible,oc_tag,bid_widget){
return (function (_119770){
var self__ = this;
var _119770__$1 = this;
return self__.meta119769;
});})(vec__119765,project,map__119766,map__119766__$1,links,visible,oc_tag,bid_widget))
;

biomarket.utilities.t_biomarket$utilities119768.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities119768.prototype.om$core$IRender$render$arity$1 = ((function (vec__119765,project,map__119766,map__119766__$1,links,visible,oc_tag,bid_widget){
return (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
return React.DOM.div({"style": {"padding-top": "10px"}},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-4"},cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,((function (this__25716__auto____$1,vec__119765,project,map__119766,map__119766__$1,links,visible,oc_tag,bid_widget){
return (function (p__119771){
var vec__119772 = p__119771;
var tag = cljs.core.nth.call(null,vec__119772,(0),null);
var ele = cljs.core.nth.call(null,vec__119772,(1),null);
return React.DOM.a({"className": ((cljs.core._EQ_.call(null,self__.visible,tag))?"btn btn-default active":"btn btn-default"), "onClick": ((function (vec__119772,tag,ele,this__25716__auto____$1,vec__119765,project,map__119766,map__119766__$1,links,visible,oc_tag,bid_widget){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.oc_tag,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"change-view","change-view",-1206699831),new cljs.core.Keyword(null,"view","view",1247994814),((cljs.core._EQ_.call(null,self__.visible,tag))?new cljs.core.Keyword(null,"default","default",-1987822328):tag)], null));
});})(vec__119772,tag,ele,this__25716__auto____$1,vec__119765,project,map__119766,map__119766__$1,links,visible,oc_tag,bid_widget))
},cljs.core.first.call(null,ele));
});})(this__25716__auto____$1,vec__119765,project,map__119766,map__119766__$1,links,visible,oc_tag,bid_widget))
,self__.links))),(cljs.core.truth_(self__.bid_widget)?React.DOM.div({"className": "col-md-8", "style": {"text-align": "right"}},om.core.build.call(null,self__.bid_widget,self__.project)):null)),(function (){var pred__119773 = cljs.core._EQ_;
var expr__119774 = self__.visible;
if(cljs.core.truth_(pred__119773.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),expr__119774))){
return om.core.build.call(null,biomarket.utilities.show_default,null);
} else {
return om.core.build.call(null,cljs.core.second.call(null,self__.visible.call(null,self__.links)),self__.project);
}
})());
});})(vec__119765,project,map__119766,map__119766__$1,links,visible,oc_tag,bid_widget))
;

biomarket.utilities.t_biomarket$utilities119768.getBasis = ((function (vec__119765,project,map__119766,map__119766__$1,links,visible,oc_tag,bid_widget){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"visible","visible",616314722,null),new cljs.core.Symbol(null,"map__119766","map__119766",1456461188,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"oc-tag","oc-tag",915648270,null),new cljs.core.Symbol(null,"p__119753","p__119753",876149649,null),cljs.core.with_meta(new cljs.core.Symbol(null,"bottom-links","bottom-links",1856837593,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"visible","visible",616314722,null),new cljs.core.Symbol(null,"oc-tag","oc-tag",915648270,null),new cljs.core.Symbol(null,"bid-widget","bid-widget",-2027290212,null)], null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"bid-widget","bid-widget",-2027290212,null),new cljs.core.Symbol(null,"vec__119765","vec__119765",-1716078691,null),new cljs.core.Symbol(null,"meta119769","meta119769",-1392280072,null)], null);
});})(vec__119765,project,map__119766,map__119766__$1,links,visible,oc_tag,bid_widget))
;

biomarket.utilities.t_biomarket$utilities119768.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities119768.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities119768";

biomarket.utilities.t_biomarket$utilities119768.cljs$lang$ctorPrWriter = ((function (vec__119765,project,map__119766,map__119766__$1,links,visible,oc_tag,bid_widget){
return (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.utilities/t_biomarket$utilities119768");
});})(vec__119765,project,map__119766,map__119766__$1,links,visible,oc_tag,bid_widget))
;

biomarket.utilities.__GT_t_biomarket$utilities119768 = ((function (vec__119765,project,map__119766,map__119766__$1,links,visible,oc_tag,bid_widget){
return (function biomarket$utilities$bottom_links_$___GT_t_biomarket$utilities119768(visible__$1,map__119766__$2,owner__$1,links__$1,oc_tag__$1,p__119753__$1,bottom_links__$1,project__$1,bid_widget__$1,vec__119765__$1,meta119769){
return (new biomarket.utilities.t_biomarket$utilities119768(visible__$1,map__119766__$2,owner__$1,links__$1,oc_tag__$1,p__119753__$1,bottom_links__$1,project__$1,bid_widget__$1,vec__119765__$1,meta119769));
});})(vec__119765,project,map__119766,map__119766__$1,links,visible,oc_tag,bid_widget))
;

}

return (new biomarket.utilities.t_biomarket$utilities119768(visible,map__119766__$1,owner,links,oc_tag,p__119753,biomarket$utilities$bottom_links,project,bid_widget,vec__119765,null));
});
if(typeof biomarket.utilities.table_info !== 'undefined'){
} else {
biomarket.utilities.table_info = (function (){var method_table__23682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23686__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","table-info"),((function (method_table__23682__auto__,prefer_table__23683__auto__,method_cache__23684__auto__,cached_hierarchy__23685__auto__,hierarchy__23686__auto__){
return (function (project){
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(project);
});})(method_table__23682__auto__,prefer_table__23683__auto__,method_cache__23684__auto__,cached_hierarchy__23685__auto__,hierarchy__23686__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23686__auto__,method_table__23682__auto__,prefer_table__23683__auto__,method_cache__23684__auto__,cached_hierarchy__23685__auto__));
})();
}
biomarket.utilities.alert_table_info = (function biomarket$utilities$alert_table_info(var_args){
var args__23834__auto__ = [];
var len__23827__auto___119777 = arguments.length;
var i__23828__auto___119778 = (0);
while(true){
if((i__23828__auto___119778 < len__23827__auto___119777)){
args__23834__auto__.push((arguments[i__23828__auto___119778]));

var G__119779 = (i__23828__auto___119778 + (1));
i__23828__auto___119778 = G__119779;
continue;
} else {
}
break;
}

var argseq__23835__auto__ = ((((0) < args__23834__auto__.length))?(new cljs.core.IndexedSeq(args__23834__auto__.slice((0)),(0),null)):null);
return biomarket.utilities.alert_table_info.cljs$core$IFn$_invoke$arity$variadic(argseq__23835__auto__);
});

biomarket.utilities.alert_table_info.cljs$core$IFn$_invoke$arity$variadic = (function (fields){
return cljs.core.apply.call(null,om.dom.div,{"style": {"color": "red"}},fields);
});

biomarket.utilities.alert_table_info.cljs$lang$maxFixedArity = (0);

biomarket.utilities.alert_table_info.cljs$lang$applyTo = (function (seq119776){
return biomarket.utilities.alert_table_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq119776));
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
var f = (function (p1__119780_SHARP_){
return biomarket.utilities.color_span.call(null,p1__119780_SHARP_,"green");
});
return new cljs.core.PersistentArrayMap(null, 6, ["Status",biomarket.utilities.alert_table_info.call(null,React.DOM.div(null,"Bidding"),React.DOM.div(null,"Expired")),"Bidding ended",biomarket.utilities.alert_table_info.call(null,[cljs.core.str(new cljs.core.Keyword(null,"bidmin","bidmin",-2558125).cljs$core$IFn$_invoke$arity$1(project)),cljs.core.str(" ago")].join('')),"Project deadline",f.call(null,new cljs.core.Keyword(null,"projmin","projmin",-724900279).cljs$core$IFn$_invoke$arity$1(project)),"Bids",f.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))),"Average bid (USD)",f.call(null,biomarket.utilities.average_bid.call(null,project)),"Budget (USD)",f.call(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"budget","budget",-405386281).cljs$core$IFn$_invoke$arity$1(project))].join(''))], null);
}));
cljs.core._add_method.call(null,biomarket.utilities.table_info,new cljs.core.Keyword(null,"default","default",-1987822328),(function (project){
var f = (function (p1__119781_SHARP_){
return biomarket.utilities.color_span.call(null,p1__119781_SHARP_,"green");
});
return new cljs.core.PersistentArrayMap(null, 6, ["Status",f.call(null,clojure.string.capitalize.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(project))),"Bidding ends",f.call(null,new cljs.core.Keyword(null,"bidmin","bidmin",-2558125).cljs$core$IFn$_invoke$arity$1(project)),"Project deadline",f.call(null,new cljs.core.Keyword(null,"projmin","projmin",-724900279).cljs$core$IFn$_invoke$arity$1(project)),"Bids",f.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))),"Average bid",f.call(null,biomarket.utilities.average_bid.call(null,project)),"Budget",f.call(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"budget","budget",-405386281).cljs$core$IFn$_invoke$arity$1(project))].join(''))], null);
}));
biomarket.utilities.make_a_table = (function biomarket$utilities$make_a_table(p__119784){
var map__119790 = p__119784;
var map__119790__$1 = ((((!((map__119790 == null)))?((((map__119790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119790):map__119790);
var data = cljs.core.get.call(null,map__119790__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var tparam = cljs.core.get.call(null,map__119790__$1,new cljs.core.Keyword(null,"tparam","tparam",1161386584));
if(typeof biomarket.utilities.t_biomarket$utilities119792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities119792 = (function (make_a_table,p__119784,map__119790,data,tparam,meta119793){
this.make_a_table = make_a_table;
this.p__119784 = p__119784;
this.map__119790 = map__119790;
this.data = data;
this.tparam = tparam;
this.meta119793 = meta119793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities119792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__119790,map__119790__$1,data,tparam){
return (function (_119794,meta119793__$1){
var self__ = this;
var _119794__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities119792(self__.make_a_table,self__.p__119784,self__.map__119790,self__.data,self__.tparam,meta119793__$1));
});})(map__119790,map__119790__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities119792.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__119790,map__119790__$1,data,tparam){
return (function (_119794){
var self__ = this;
var _119794__$1 = this;
return self__.meta119793;
});})(map__119790,map__119790__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities119792.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities119792.prototype.om$core$IRender$render$arity$1 = ((function (map__119790,map__119790__$1,data,tparam){
return (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
var tjs = cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"table"], null),self__.tparam));
return React.DOM.div({"style": {"background-color": "white", "margin": "10px"}},React.DOM.table(tjs,React.DOM.thead(null,cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (tjs,this__25716__auto____$1,map__119790,map__119790__$1,data,tparam){
return (function (p1__119782_SHARP_){
return React.DOM.th({"style": {"text-align": "center"}},p1__119782_SHARP_);
});})(tjs,this__25716__auto____$1,map__119790,map__119790__$1,data,tparam))
,cljs.core.keys.call(null,cljs.core.first.call(null,self__.data))))),cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.map.call(null,((function (tjs,this__25716__auto____$1,map__119790,map__119790__$1,data,tparam){
return (function (x){
return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (tjs,this__25716__auto____$1,map__119790,map__119790__$1,data,tparam){
return (function (p1__119783_SHARP_){
return React.DOM.td({"style": {"text-align": "center"}},p1__119783_SHARP_);
});})(tjs,this__25716__auto____$1,map__119790,map__119790__$1,data,tparam))
,cljs.core.vals.call(null,x)));
});})(tjs,this__25716__auto____$1,map__119790,map__119790__$1,data,tparam))
,self__.data))));
});})(map__119790,map__119790__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities119792.getBasis = ((function (map__119790,map__119790__$1,data,tparam){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-a-table","make-a-table",-346613799,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null)], null)], null)], null)))], null)),new cljs.core.Symbol(null,"p__119784","p__119784",1566723830,null),new cljs.core.Symbol(null,"map__119790","map__119790",-238968863,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null),new cljs.core.Symbol(null,"meta119793","meta119793",62691941,null)], null);
});})(map__119790,map__119790__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities119792.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities119792.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities119792";

biomarket.utilities.t_biomarket$utilities119792.cljs$lang$ctorPrWriter = ((function (map__119790,map__119790__$1,data,tparam){
return (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.utilities/t_biomarket$utilities119792");
});})(map__119790,map__119790__$1,data,tparam))
;

biomarket.utilities.__GT_t_biomarket$utilities119792 = ((function (map__119790,map__119790__$1,data,tparam){
return (function biomarket$utilities$make_a_table_$___GT_t_biomarket$utilities119792(make_a_table__$1,p__119784__$1,map__119790__$2,data__$1,tparam__$1,meta119793){
return (new biomarket.utilities.t_biomarket$utilities119792(make_a_table__$1,p__119784__$1,map__119790__$2,data__$1,tparam__$1,meta119793));
});})(map__119790,map__119790__$1,data,tparam))
;

}

return (new biomarket.utilities.t_biomarket$utilities119792(biomarket$utilities$make_a_table,p__119784,map__119790__$1,data,tparam,null));
});
biomarket.utilities.info_table = (function biomarket$utilities$info_table(project,owner){
if(typeof biomarket.utilities.t_biomarket$utilities119798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities119798 = (function (info_table,project,owner,meta119799){
this.info_table = info_table;
this.project = project;
this.owner = owner;
this.meta119799 = meta119799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities119798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119800,meta119799__$1){
var self__ = this;
var _119800__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities119798(self__.info_table,self__.project,self__.owner,meta119799__$1));
});

biomarket.utilities.t_biomarket$utilities119798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119800){
var self__ = this;
var _119800__$1 = this;
return self__.meta119799;
});

biomarket.utilities.t_biomarket$utilities119798.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities119798.prototype.om$core$IRender$render$arity$1 = (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
var data = biomarket.utilities.table_info.call(null,self__.project);
return om.core.build.call(null,biomarket.utilities.make_a_table,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){var x__23591__auto__ = data;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23591__auto__);
})()], null));
});

biomarket.utilities.t_biomarket$utilities119798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"info-table","info-table",-2047867662,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta119799","meta119799",-933531725,null)], null);
});

biomarket.utilities.t_biomarket$utilities119798.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities119798.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities119798";

biomarket.utilities.t_biomarket$utilities119798.cljs$lang$ctorPrWriter = (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.utilities/t_biomarket$utilities119798");
});

biomarket.utilities.__GT_t_biomarket$utilities119798 = (function biomarket$utilities$info_table_$___GT_t_biomarket$utilities119798(info_table__$1,project__$1,owner__$1,meta119799){
return (new biomarket.utilities.t_biomarket$utilities119798(info_table__$1,project__$1,owner__$1,meta119799));
});

}

return (new biomarket.utilities.t_biomarket$utilities119798(biomarket$utilities$info_table,project,owner,null));
});
if(typeof biomarket.utilities.panel_right_info !== 'undefined'){
} else {
biomarket.utilities.panel_right_info = (function (){var method_table__23682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23686__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","panel-right-info"),((function (method_table__23682__auto__,prefer_table__23683__auto__,method_cache__23684__auto__,cached_hierarchy__23685__auto__,hierarchy__23686__auto__){
return (function (p){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(p);
});})(method_table__23682__auto__,prefer_table__23683__auto__,method_cache__23684__auto__,cached_hierarchy__23685__auto__,hierarchy__23686__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23686__auto__,method_table__23682__auto__,prefer_table__23683__auto__,method_cache__23684__auto__,cached_hierarchy__23685__auto__));
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
if(typeof biomarket.utilities.title_labels !== 'undefined'){
} else {
biomarket.utilities.title_labels = (function (){var method_table__23682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23686__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","title-labels"),((function (method_table__23682__auto__,prefer_table__23683__auto__,method_cache__23684__auto__,cached_hierarchy__23685__auto__,hierarchy__23686__auto__){
return (function (x){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(x);
});})(method_table__23682__auto__,prefer_table__23683__auto__,method_cache__23684__auto__,cached_hierarchy__23685__auto__,hierarchy__23686__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23686__auto__,method_table__23682__auto__,prefer_table__23683__auto__,method_cache__23684__auto__,cached_hierarchy__23685__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.title_labels,new cljs.core.Keyword(null,"default","default",-1987822328),(function (project){
if(typeof biomarket.utilities.t_biomarket$utilities119801 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities119801 = (function (project,meta119802){
this.project = project;
this.meta119802 = meta119802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities119801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119803,meta119802__$1){
var self__ = this;
var _119803__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities119801(self__.project,meta119802__$1));
});

biomarket.utilities.t_biomarket$utilities119801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119803){
var self__ = this;
var _119803__$1 = this;
return self__.meta119802;
});

biomarket.utilities.t_biomarket$utilities119801.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities119801.prototype.om$core$IRender$render$arity$1 = (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var best = cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project)));
if(cljs.core.truth_(best)){
return biomarket.utilities.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join(''));
} else {
return biomarket.utilities.label.call(null,"label label-danger","No bids yet!");
}
})());
});

biomarket.utilities.t_biomarket$utilities119801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta119802","meta119802",1056822640,null)], null);
});

biomarket.utilities.t_biomarket$utilities119801.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities119801.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities119801";

biomarket.utilities.t_biomarket$utilities119801.cljs$lang$ctorPrWriter = (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.utilities/t_biomarket$utilities119801");
});

biomarket.utilities.__GT_t_biomarket$utilities119801 = (function biomarket$utilities$__GT_t_biomarket$utilities119801(project__$1,meta119802){
return (new biomarket.utilities.t_biomarket$utilities119801(project__$1,meta119802));
});

}

return (new biomarket.utilities.t_biomarket$utilities119801(project,null));
}));
cljs.core._add_method.call(null,biomarket.utilities.title_labels,new cljs.core.Keyword(null,"find","find",496279456),(function (project){
if(typeof biomarket.utilities.t_biomarket$utilities119804 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities119804 = (function (project,meta119805){
this.project = project;
this.meta119805 = meta119805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities119804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119806,meta119805__$1){
var self__ = this;
var _119806__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities119804(self__.project,meta119805__$1));
});

biomarket.utilities.t_biomarket$utilities119804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119806){
var self__ = this;
var _119806__$1 = this;
return self__.meta119805;
});

biomarket.utilities.t_biomarket$utilities119804.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities119804.prototype.om$core$IRender$render$arity$1 = (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var ub = cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,new cljs.core.Keyword(null,"user-bids","user-bids",-736079184).cljs$core$IFn$_invoke$arity$1(self__.project)));
var best = cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project)));
if(cljs.core.truth_((function (){var and__22745__auto__ = ub;
if(cljs.core.truth_(and__22745__auto__)){
return (new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best) >= new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ub));
} else {
return and__22745__auto__;
}
})())){
return React.DOM.span(null,biomarket.utilities.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join('')),biomarket.utilities.label.call(null,"label label-success",[cljs.core.str("Your bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ub))].join('')));
} else {
if(cljs.core.truth_((function (){var and__22745__auto__ = ub;
if(cljs.core.truth_(and__22745__auto__)){
return (new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best) < new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ub));
} else {
return and__22745__auto__;
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

biomarket.utilities.t_biomarket$utilities119804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta119805","meta119805",-362865187,null)], null);
});

biomarket.utilities.t_biomarket$utilities119804.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities119804.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities119804";

biomarket.utilities.t_biomarket$utilities119804.cljs$lang$ctorPrWriter = (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.utilities/t_biomarket$utilities119804");
});

biomarket.utilities.__GT_t_biomarket$utilities119804 = (function biomarket$utilities$__GT_t_biomarket$utilities119804(project__$1,meta119805){
return (new biomarket.utilities.t_biomarket$utilities119804(project__$1,meta119805));
});

}

return (new biomarket.utilities.t_biomarket$utilities119804(project,null));
}));
biomarket.utilities.project_panel = (function biomarket$utilities$project_panel(p__119807,owner){
var vec__119812 = p__119807;
var project = cljs.core.nth.call(null,vec__119812,(0),null);
var blinks = cljs.core.nth.call(null,vec__119812,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities119813 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities119813 = (function (project_panel,p__119807,owner,vec__119812,project,blinks,meta119814){
this.project_panel = project_panel;
this.p__119807 = p__119807;
this.owner = owner;
this.vec__119812 = vec__119812;
this.project = project;
this.blinks = blinks;
this.meta119814 = meta119814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities119813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__119812,project,blinks){
return (function (_119815,meta119814__$1){
var self__ = this;
var _119815__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities119813(self__.project_panel,self__.p__119807,self__.owner,self__.vec__119812,self__.project,self__.blinks,meta119814__$1));
});})(vec__119812,project,blinks))
;

biomarket.utilities.t_biomarket$utilities119813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__119812,project,blinks){
return (function (_119815){
var self__ = this;
var _119815__$1 = this;
return self__.meta119814;
});})(vec__119812,project,blinks))
;

biomarket.utilities.t_biomarket$utilities119813.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities119813.prototype.om$core$IRender$render$arity$1 = ((function (vec__119812,project,blinks){
return (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
return React.DOM.div({"className": "panel panel-default", "style": {"text-align": "left"}},React.DOM.div({"className": "panel-heading"},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-10"},om.core.build.call(null,biomarket.utilities.title_labels,self__.project)),React.DOM.div({"className": "col-md-2", "style": {"text-align": "right"}},biomarket.utilities.panel_right_info.call(null,self__.project)))),React.DOM.div({"className": "panel-body"},om.core.build.call(null,biomarket.utilities.more_less_text,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(self__.project)),React.DOM.div({"style": {"padding-top": "20px"}},om.core.build.call(null,biomarket.utilities.info_table,self__.project))),React.DOM.div({"className": "panel-footer"},om.core.build.call(null,biomarket.utilities.bottom_links,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.project,self__.blinks], null))));
});})(vec__119812,project,blinks))
;

biomarket.utilities.t_biomarket$utilities119813.getBasis = ((function (vec__119812,project,blinks){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"project-panel","project-panel",619982201,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"blinks","blinks",921671976,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__119807","p__119807",844291166,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__119812","vec__119812",-1455764081,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"blinks","blinks",921671976,null),new cljs.core.Symbol(null,"meta119814","meta119814",1880898346,null)], null);
});})(vec__119812,project,blinks))
;

biomarket.utilities.t_biomarket$utilities119813.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities119813.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities119813";

biomarket.utilities.t_biomarket$utilities119813.cljs$lang$ctorPrWriter = ((function (vec__119812,project,blinks){
return (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.utilities/t_biomarket$utilities119813");
});})(vec__119812,project,blinks))
;

biomarket.utilities.__GT_t_biomarket$utilities119813 = ((function (vec__119812,project,blinks){
return (function biomarket$utilities$project_panel_$___GT_t_biomarket$utilities119813(project_panel__$1,p__119807__$1,owner__$1,vec__119812__$1,project__$1,blinks__$1,meta119814){
return (new biomarket.utilities.t_biomarket$utilities119813(project_panel__$1,p__119807__$1,owner__$1,vec__119812__$1,project__$1,blinks__$1,meta119814));
});})(vec__119812,project,blinks))
;

}

return (new biomarket.utilities.t_biomarket$utilities119813(biomarket$utilities$project_panel,p__119807,owner,vec__119812,project,blinks,null));
});
biomarket.utilities.fixed_head_table = (function biomarket$utilities$fixed_head_table(p__119818){
var map__119824 = p__119818;
var map__119824__$1 = ((((!((map__119824 == null)))?((((map__119824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119824):map__119824);
var data = cljs.core.get.call(null,map__119824__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var tparam = cljs.core.get.call(null,map__119824__$1,new cljs.core.Keyword(null,"tparam","tparam",1161386584));
if(typeof biomarket.utilities.t_biomarket$utilities119826 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities119826 = (function (fixed_head_table,p__119818,map__119824,data,tparam,meta119827){
this.fixed_head_table = fixed_head_table;
this.p__119818 = p__119818;
this.map__119824 = map__119824;
this.data = data;
this.tparam = tparam;
this.meta119827 = meta119827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities119826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__119824,map__119824__$1,data,tparam){
return (function (_119828,meta119827__$1){
var self__ = this;
var _119828__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities119826(self__.fixed_head_table,self__.p__119818,self__.map__119824,self__.data,self__.tparam,meta119827__$1));
});})(map__119824,map__119824__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities119826.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__119824,map__119824__$1,data,tparam){
return (function (_119828){
var self__ = this;
var _119828__$1 = this;
return self__.meta119827;
});})(map__119824,map__119824__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities119826.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities119826.prototype.om$core$IRender$render$arity$1 = ((function (map__119824,map__119824__$1,data,tparam){
return (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
return React.DOM.table({"style": {"cellspacing": "0", "cellpadding": "0", "border": "0", "width": "100%", "padding-top": "20px"}},React.DOM.tr(null,React.DOM.td(null,React.DOM.table({"style": {"cellspacing": "0", "cellpadding": "1", "border": "0", "width": "100%"}},cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (this__25716__auto____$1,map__119824,map__119824__$1,data,tparam){
return (function (p1__119816_SHARP_){
return React.DOM.th({"style": {"width": "50%"}},p1__119816_SHARP_);
});})(this__25716__auto____$1,map__119824,map__119824__$1,data,tparam))
,cljs.core.keys.call(null,cljs.core.first.call(null,self__.data))))))),React.DOM.tr(null,React.DOM.td(null,React.DOM.div({"style": {"max-height": "277px", "overflow-y": "auto", "width": "100%", "min-height": "50px"}},cljs.core.apply.call(null,om.dom.table,{"className": "table", "style": {"cellspacing": "0", "cellpadding": "1", "border": "0", "background-color": "white"}},cljs.core.map.call(null,((function (this__25716__auto____$1,map__119824,map__119824__$1,data,tparam){
return (function (x){
return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (this__25716__auto____$1,map__119824,map__119824__$1,data,tparam){
return (function (p1__119817_SHARP_){
return React.DOM.td({"style": {"text-align": "center"}},p1__119817_SHARP_);
});})(this__25716__auto____$1,map__119824,map__119824__$1,data,tparam))
,cljs.core.vals.call(null,x)));
});})(this__25716__auto____$1,map__119824,map__119824__$1,data,tparam))
,self__.data))))));
});})(map__119824,map__119824__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities119826.getBasis = ((function (map__119824,map__119824__$1,data,tparam){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fixed-head-table","fixed-head-table",-1177799331,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null)], null)], null)], null)))], null)),new cljs.core.Symbol(null,"p__119818","p__119818",-2102167866,null),new cljs.core.Symbol(null,"map__119824","map__119824",171724243,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null),new cljs.core.Symbol(null,"meta119827","meta119827",1765085844,null)], null);
});})(map__119824,map__119824__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities119826.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities119826.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities119826";

biomarket.utilities.t_biomarket$utilities119826.cljs$lang$ctorPrWriter = ((function (map__119824,map__119824__$1,data,tparam){
return (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.utilities/t_biomarket$utilities119826");
});})(map__119824,map__119824__$1,data,tparam))
;

biomarket.utilities.__GT_t_biomarket$utilities119826 = ((function (map__119824,map__119824__$1,data,tparam){
return (function biomarket$utilities$fixed_head_table_$___GT_t_biomarket$utilities119826(fixed_head_table__$1,p__119818__$1,map__119824__$2,data__$1,tparam__$1,meta119827){
return (new biomarket.utilities.t_biomarket$utilities119826(fixed_head_table__$1,p__119818__$1,map__119824__$2,data__$1,tparam__$1,meta119827));
});})(map__119824,map__119824__$1,data,tparam))
;

}

return (new biomarket.utilities.t_biomarket$utilities119826(biomarket$utilities$fixed_head_table,p__119818,map__119824__$1,data,tparam,null));
});
biomarket.utilities.skill_tags = (function biomarket$utilities$skill_tags(p__119830,owner){
var vec__119835 = p__119830;
var skills = cljs.core.nth.call(null,vec__119835,(0),null);
var selected = cljs.core.nth.call(null,vec__119835,(1),null);
var tag = cljs.core.nth.call(null,vec__119835,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities119836 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities119836 = (function (skill_tags,p__119830,owner,vec__119835,skills,selected,tag,meta119837){
this.skill_tags = skill_tags;
this.p__119830 = p__119830;
this.owner = owner;
this.vec__119835 = vec__119835;
this.skills = skills;
this.selected = selected;
this.tag = tag;
this.meta119837 = meta119837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities119836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__119835,skills,selected,tag){
return (function (_119838,meta119837__$1){
var self__ = this;
var _119838__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities119836(self__.skill_tags,self__.p__119830,self__.owner,self__.vec__119835,self__.skills,self__.selected,self__.tag,meta119837__$1));
});})(vec__119835,skills,selected,tag))
;

biomarket.utilities.t_biomarket$utilities119836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__119835,skills,selected,tag){
return (function (_119838){
var self__ = this;
var _119838__$1 = this;
return self__.meta119837;
});})(vec__119835,skills,selected,tag))
;

biomarket.utilities.t_biomarket$utilities119836.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities119836.prototype.om$core$IRender$render$arity$1 = ((function (vec__119835,skills,selected,tag){
return (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "tags"},cljs.core.map.call(null,((function (this__25716__auto____$1,vec__119835,skills,selected,tag){
return (function (p1__119829_SHARP_){
return React.DOM.span({"style": {"padding-right": "10px"}},React.DOM.a({"className": (cljs.core.truth_(self__.selected.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__119829_SHARP_)))?"color2":"color1"), "onClick": (cljs.core.truth_(self__.tag)?((function (this__25716__auto____$1,vec__119835,skills,selected,tag){
return (function (_){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.tag,p1__119829_SHARP_);
});})(this__25716__auto____$1,vec__119835,skills,selected,tag))
:null), "style": {"cursor": "pointer"}},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__119829_SHARP_)));
});})(this__25716__auto____$1,vec__119835,skills,selected,tag))
,self__.skills));
});})(vec__119835,skills,selected,tag))
;

biomarket.utilities.t_biomarket$utilities119836.getBasis = ((function (vec__119835,skills,selected,tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"skill-tags","skill-tags",-484804755,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"skills","skills",-1695734343,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__119830","p__119830",-1334306140,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__119835","vec__119835",1958380660,null),new cljs.core.Symbol(null,"skills","skills",-1695734343,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta119837","meta119837",1677171454,null)], null);
});})(vec__119835,skills,selected,tag))
;

biomarket.utilities.t_biomarket$utilities119836.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities119836.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities119836";

biomarket.utilities.t_biomarket$utilities119836.cljs$lang$ctorPrWriter = ((function (vec__119835,skills,selected,tag){
return (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.utilities/t_biomarket$utilities119836");
});})(vec__119835,skills,selected,tag))
;

biomarket.utilities.__GT_t_biomarket$utilities119836 = ((function (vec__119835,skills,selected,tag){
return (function biomarket$utilities$skill_tags_$___GT_t_biomarket$utilities119836(skill_tags__$1,p__119830__$1,owner__$1,vec__119835__$1,skills__$1,selected__$1,tag__$1,meta119837){
return (new biomarket.utilities.t_biomarket$utilities119836(skill_tags__$1,p__119830__$1,owner__$1,vec__119835__$1,skills__$1,selected__$1,tag__$1,meta119837));
});})(vec__119835,skills,selected,tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities119836(biomarket$utilities$skill_tags,p__119830,owner,vec__119835,skills,selected,tag,null));
});
if(typeof biomarket.utilities.get_input !== 'undefined'){
} else {
biomarket.utilities.get_input = (function (){var method_table__23682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23686__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","get-input"),((function (method_table__23682__auto__,prefer_table__23683__auto__,method_cache__23684__auto__,cached_hierarchy__23685__auto__,hierarchy__23686__auto__){
return (function() { 
var G__119842__delegate = function (owner,p__119839,args){
var map__119840 = p__119839;
var map__119840__$1 = ((((!((map__119840 == null)))?((((map__119840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119840):map__119840);
var fname = cljs.core.get.call(null,map__119840__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__119840__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return fname;
};
var G__119842 = function (owner,p__119839,var_args){
var args = null;
if (arguments.length > 2) {
var G__119843__i = 0, G__119843__a = new Array(arguments.length -  2);
while (G__119843__i < G__119843__a.length) {G__119843__a[G__119843__i] = arguments[G__119843__i + 2]; ++G__119843__i;}
  args = new cljs.core.IndexedSeq(G__119843__a,0);
} 
return G__119842__delegate.call(this,owner,p__119839,args);};
G__119842.cljs$lang$maxFixedArity = 2;
G__119842.cljs$lang$applyTo = (function (arglist__119844){
var owner = cljs.core.first(arglist__119844);
arglist__119844 = cljs.core.next(arglist__119844);
var p__119839 = cljs.core.first(arglist__119844);
var args = cljs.core.rest(arglist__119844);
return G__119842__delegate(owner,p__119839,args);
});
G__119842.cljs$core$IFn$_invoke$arity$variadic = G__119842__delegate;
return G__119842;
})()
;})(method_table__23682__auto__,prefer_table__23683__auto__,method_cache__23684__auto__,cached_hierarchy__23685__auto__,hierarchy__23686__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23686__auto__,method_table__23682__auto__,prefer_table__23683__auto__,method_cache__23684__auto__,cached_hierarchy__23685__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.get_input,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__119853 = null;
var G__119853__2 = (function (owner,p__119845){
var map__119847 = p__119845;
var map__119847__$1 = ((((!((map__119847 == null)))?((((map__119847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119847):map__119847);
var m = map__119847__$1;
var fname = cljs.core.get.call(null,map__119847__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__119847__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return biomarket.utilities.get_input.call(null,owner,m,new cljs.core.Keyword(null,"inputs","inputs",865803858));
});
var G__119853__3 = (function (owner,p__119846,param_name){
var map__119849 = p__119846;
var map__119849__$1 = ((((!((map__119849 == null)))?((((map__119849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119849):map__119849);
var fname = cljs.core.get.call(null,map__119849__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__119849__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var inputs = om.core.get_state.call(null,owner,param_name);
var iv = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (inputs,map__119849,map__119849__$1,fname,element){
return (function (p__119851){
var vec__119852 = p__119851;
var k = cljs.core.nth.call(null,vec__119852,(0),null);
var v = cljs.core.nth.call(null,vec__119852,(1),null);
if(cljs.core.not.call(null,k.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element)))){
return v;
} else {
return null;
}
});})(inputs,map__119849,map__119849__$1,fname,element))
,new cljs.core.Keyword(null,"tests","tests",-1041085625).cljs$core$IFn$_invoke$arity$1(element))));
return om.core.set_state_BANG_.call(null,owner,param_name,cljs.core.assoc.call(null,om.core.get_state.call(null,owner,param_name),fname,cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"invalid","invalid",412869516),iv)));
});
G__119853 = function(owner,p__119846,param_name){
switch(arguments.length){
case 2:
return G__119853__2.call(this,owner,p__119846);
case 3:
return G__119853__3.call(this,owner,p__119846,param_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__119853.cljs$core$IFn$_invoke$arity$2 = G__119853__2;
G__119853.cljs$core$IFn$_invoke$arity$3 = G__119853__3;
return G__119853;
})()
);
if(typeof biomarket.utilities.clean_input !== 'undefined'){
} else {
biomarket.utilities.clean_input = (function (){var method_table__23682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23686__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","clean-input"),((function (method_table__23682__auto__,prefer_table__23683__auto__,method_cache__23684__auto__,cached_hierarchy__23685__auto__,hierarchy__23686__auto__){
return (function (element,classes,oc){
return new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(element);
});})(method_table__23682__auto__,prefer_table__23683__auto__,method_cache__23684__auto__,cached_hierarchy__23685__auto__,hierarchy__23686__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23686__auto__,method_table__23682__auto__,prefer_table__23683__auto__,method_cache__23684__auto__,cached_hierarchy__23685__auto__));
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
var x__23591__auto__ = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(classes),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)));
return cljs.core._conj.call(null,(function (){var x__23591__auto____$1 = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spid","spid",1854581004).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.Keyword(null,"className","className",-1983287057),"sr-only"], null)),new cljs.core.Keyword(null,"fb","fb",-1331669322).cljs$core$IFn$_invoke$arity$1(classes));
return cljs.core._conj.call(null,(function (){var x__23591__auto____$2 = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"help-block"], null)),new cljs.core.Keyword(null,"fb","fb",-1331669322).cljs$core$IFn$_invoke$arity$1(classes));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23591__auto____$2);
})(),x__23591__auto____$1);
})(),x__23591__auto__);
});
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"addon","addon",931813532),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__23591__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23591__auto__);
})(),(function (){var x__23591__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
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
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23591__auto__);
})(),biomarket.utilities.icons.call(null,element,classes)));
}));
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"no-icon","no-icon",-1734606666),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__23591__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23591__auto__);
})(),(function (){var x__23591__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
if(cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element))){
return om.dom.textarea.call(null,js);
} else {
return om.dom.input.call(null,js);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23591__auto__);
})()));
}));
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"default","default",-1987822328),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__23591__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23591__auto__);
})(),(function (){var x__23591__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
if(cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element))){
return om.dom.textarea.call(null,js);
} else {
return om.dom.input.call(null,js);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23591__auto__);
})(),biomarket.utilities.icons.call(null,element,classes)));
}));
biomarket.utilities.the_input = (function biomarket$utilities$the_input(js,owner){
if(typeof biomarket.utilities.t_biomarket$utilities119857 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities119857 = (function (the_input,js,owner,meta119858){
this.the_input = the_input;
this.js = js;
this.owner = owner;
this.meta119858 = meta119858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities119857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119859,meta119858__$1){
var self__ = this;
var _119859__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities119857(self__.the_input,self__.js,self__.owner,meta119858__$1));
});

biomarket.utilities.t_biomarket$utilities119857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119859){
var self__ = this;
var _119859__$1 = this;
return self__.meta119858;
});

biomarket.utilities.t_biomarket$utilities119857.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities119857.prototype.om$core$IRender$render$arity$1 = (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
return cljs.core.apply.call(null,om.dom.div,self__.js);
});

biomarket.utilities.t_biomarket$utilities119857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"the-input","the-input",1976764503,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta119858","meta119858",-1517035628,null)], null);
});

biomarket.utilities.t_biomarket$utilities119857.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities119857.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities119857";

biomarket.utilities.t_biomarket$utilities119857.cljs$lang$ctorPrWriter = (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.utilities/t_biomarket$utilities119857");
});

biomarket.utilities.__GT_t_biomarket$utilities119857 = (function biomarket$utilities$the_input_$___GT_t_biomarket$utilities119857(the_input__$1,js__$1,owner__$1,meta119858){
return (new biomarket.utilities.t_biomarket$utilities119857(the_input__$1,js__$1,owner__$1,meta119858));
});

}

return (new biomarket.utilities.t_biomarket$utilities119857(biomarket$utilities$the_input,js,owner,null));
});
biomarket.utilities.on_change_function = (function biomarket$utilities$on_change_function(owner,tag,fname,element,e){
return biomarket.utilities.pub_info.call(null,owner,tag,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"value","value",305978217),e.target.value)], null));
});
biomarket.utilities.input = (function biomarket$utilities$input(p__119862,owner){
var vec__119870 = p__119862;
var fname = cljs.core.nth.call(null,vec__119870,(0),null);
var element = cljs.core.nth.call(null,vec__119870,(1),null);
var tag = cljs.core.nth.call(null,vec__119870,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities119871 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities119871 = (function (input,p__119862,owner,vec__119870,fname,element,tag,meta119872){
this.input = input;
this.p__119862 = p__119862;
this.owner = owner;
this.vec__119870 = vec__119870;
this.fname = fname;
this.element = element;
this.tag = tag;
this.meta119872 = meta119872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities119871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__119870,fname,element,tag){
return (function (_119873,meta119872__$1){
var self__ = this;
var _119873__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities119871(self__.input,self__.p__119862,self__.owner,self__.vec__119870,self__.fname,self__.element,self__.tag,meta119872__$1));
});})(vec__119870,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities119871.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__119870,fname,element,tag){
return (function (_119873){
var self__ = this;
var _119873__$1 = this;
return self__.meta119872;
});})(vec__119870,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities119871.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities119871.prototype.om$core$IRender$render$arity$1 = ((function (vec__119870,fname,element,tag){
return (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
biomarket.utilities.log.call(null,self__.element);

var oc = ((function (this__25716__auto____$1,vec__119870,fname,element,tag){
return (function (p1__119860_SHARP_){
return biomarket.utilities.on_change_function.call(null,self__.owner,self__.tag,self__.fname,self__.element,p1__119860_SHARP_);
});})(this__25716__auto____$1,vec__119870,fname,element,tag))
;
var classes = (function (){var pred__119874 = cljs.core._EQ_;
var expr__119875 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.element);
if(cljs.core.truth_(pred__119874.call(null,false,expr__119875))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group",new cljs.core.Keyword(null,"icon","icon",1679606541),"",new cljs.core.Keyword(null,"fb","fb",-1331669322),""], null);
} else {
if(cljs.core.truth_(pred__119874.call(null,null,expr__119875))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group has-success has-feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"glyphicon glyphicon-ok form-control-feedback",new cljs.core.Keyword(null,"fb","fb",-1331669322),""], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group has-error has-feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"glyphicon glyphicon-remove form-control-feedback",new cljs.core.Keyword(null,"fb","fb",-1331669322),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (pred__119874,expr__119875,oc,this__25716__auto____$1,vec__119870,fname,element,tag){
return (function (p1__119861_SHARP_){
return React.DOM.div(null,p1__119861_SHARP_);
});})(pred__119874,expr__119875,oc,this__25716__auto____$1,vec__119870,fname,element,tag))
,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.element)))], null);
}
}
})();
return React.DOM.div({"className": new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)},React.DOM.label({"className": "control-label", "htmlFor": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.element)},new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.element)),om.core.build.call(null,biomarket.utilities.the_input,biomarket.utilities.clean_input.call(null,self__.element,classes,oc)));
});})(vec__119870,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities119871.getBasis = ((function (vec__119870,fname,element,tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fname","fname",-1154144278,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__119862","p__119862",-1437922366,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__119870","vec__119870",302007401,null),new cljs.core.Symbol(null,"fname","fname",-1154144278,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta119872","meta119872",-847891266,null)], null);
});})(vec__119870,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities119871.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities119871.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities119871";

biomarket.utilities.t_biomarket$utilities119871.cljs$lang$ctorPrWriter = ((function (vec__119870,fname,element,tag){
return (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.utilities/t_biomarket$utilities119871");
});})(vec__119870,fname,element,tag))
;

biomarket.utilities.__GT_t_biomarket$utilities119871 = ((function (vec__119870,fname,element,tag){
return (function biomarket$utilities$input_$___GT_t_biomarket$utilities119871(input__$1,p__119862__$1,owner__$1,vec__119870__$1,fname__$1,element__$1,tag__$1,meta119872){
return (new biomarket.utilities.t_biomarket$utilities119871(input__$1,p__119862__$1,owner__$1,vec__119870__$1,fname__$1,element__$1,tag__$1,meta119872));
});})(vec__119870,fname,element,tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities119871(biomarket$utilities$input,p__119862,owner,vec__119870,fname,element,tag,null));
});
biomarket.utilities.comment_server_call = (function biomarket$utilities$comment_server_call(owner,pid){
var h = (function (p__119880){
var map__119881 = p__119880;
var map__119881__$1 = ((((!((map__119881 == null)))?((((map__119881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119881):map__119881);
var status = cljs.core.get.call(null,map__119881__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__119881__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"comments","comments",-293346423),result);
});
return biomarket.utilities.post_params.call(null,"/comments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1018387698),pid], null),h);
});
biomarket.utilities.submit_comment_call = (function biomarket$utilities$submit_comment_call(owner,pid){
var c = new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)));
var h = ((function (c){
return (function (p__119886){
var map__119887 = p__119886;
var map__119887__$1 = ((((!((map__119887 == null)))?((((map__119887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119887):map__119887);
var status = cljs.core.get.call(null,map__119887__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__119887__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"comments","comments",-293346423),result);
});})(c))
;
return biomarket.utilities.post_params.call(null,"save-comment",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pid","pid",1018387698),pid,new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(c)], null),h);
});
biomarket.utilities.show_comment = (function biomarket$utilities$show_comment(comment,owner){
if(typeof biomarket.utilities.t_biomarket$utilities119892 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities119892 = (function (show_comment,comment,owner,meta119893){
this.show_comment = show_comment;
this.comment = comment;
this.owner = owner;
this.meta119893 = meta119893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities119892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119894,meta119893__$1){
var self__ = this;
var _119894__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities119892(self__.show_comment,self__.comment,self__.owner,meta119893__$1));
});

biomarket.utilities.t_biomarket$utilities119892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119894){
var self__ = this;
var _119894__$1 = this;
return self__.meta119893;
});

biomarket.utilities.t_biomarket$utilities119892.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities119892.prototype.om$core$IRender$render$arity$1 = (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
return React.DOM.div(null,React.DOM.div({"style": {"font-size": "small", "text-align": "left"}},[cljs.core.str("On "),cljs.core.str(biomarket.utilities.datestring__GT_readable.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(self__.comment))),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(self__.comment)),cljs.core.str(" said:")].join('')),React.DOM.div({"style": {"margin": "5px", "font-weight": "bold"}},new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(self__.comment),React.DOM.hr(null)));
});

biomarket.utilities.t_biomarket$utilities119892.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-comment","show-comment",1734861605,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comment","comment",-2122229700,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"comment","comment",-2122229700,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta119893","meta119893",472316422,null)], null);
});

biomarket.utilities.t_biomarket$utilities119892.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities119892.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities119892";

biomarket.utilities.t_biomarket$utilities119892.cljs$lang$ctorPrWriter = (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.utilities/t_biomarket$utilities119892");
});

biomarket.utilities.__GT_t_biomarket$utilities119892 = (function biomarket$utilities$show_comment_$___GT_t_biomarket$utilities119892(show_comment__$1,comment__$1,owner__$1,meta119893){
return (new biomarket.utilities.t_biomarket$utilities119892(show_comment__$1,comment__$1,owner__$1,meta119893));
});

}

return (new biomarket.utilities.t_biomarket$utilities119892(biomarket$utilities$show_comment,comment,owner,null));
});
biomarket.utilities.comment_control = (function biomarket$utilities$comment_control(p__119896,owner){
var vec__119901 = p__119896;
var inputs = cljs.core.nth.call(null,vec__119901,(0),null);
var tag = cljs.core.nth.call(null,vec__119901,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities119902 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities119902 = (function (comment_control,p__119896,owner,vec__119901,inputs,tag,meta119903){
this.comment_control = comment_control;
this.p__119896 = p__119896;
this.owner = owner;
this.vec__119901 = vec__119901;
this.inputs = inputs;
this.tag = tag;
this.meta119903 = meta119903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities119902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__119901,inputs,tag){
return (function (_119904,meta119903__$1){
var self__ = this;
var _119904__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities119902(self__.comment_control,self__.p__119896,self__.owner,self__.vec__119901,self__.inputs,self__.tag,meta119903__$1));
});})(vec__119901,inputs,tag))
;

biomarket.utilities.t_biomarket$utilities119902.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__119901,inputs,tag){
return (function (_119904){
var self__ = this;
var _119904__$1 = this;
return self__.meta119903;
});})(vec__119901,inputs,tag))
;

biomarket.utilities.t_biomarket$utilities119902.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities119902.prototype.om$core$IRender$render$arity$1 = ((function (vec__119901,inputs,tag){
return (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
return React.DOM.div({"className": "form"},cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (this__25716__auto____$1,vec__119901,inputs,tag){
return (function (p1__119895_SHARP_){
return om.core.build.call(null,biomarket.utilities.input,cljs.core.conj.call(null,p1__119895_SHARP_,self__.tag));
});})(this__25716__auto____$1,vec__119901,inputs,tag))
,self__.inputs)),React.DOM.button({"className": "btn btn-primary", "onClick": ((function (this__25716__auto____$1,vec__119901,inputs,tag){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.tag,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"submit","submit",-49315317)], null));
});})(this__25716__auto____$1,vec__119901,inputs,tag))
},"Comment"));
});})(vec__119901,inputs,tag))
;

biomarket.utilities.t_biomarket$utilities119902.getBasis = ((function (vec__119901,inputs,tag){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"comment-control","comment-control",386206116,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__119896","p__119896",443711043,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__119901","vec__119901",1662777807,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta119903","meta119903",-1171139720,null)], null);
});})(vec__119901,inputs,tag))
;

biomarket.utilities.t_biomarket$utilities119902.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities119902.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities119902";

biomarket.utilities.t_biomarket$utilities119902.cljs$lang$ctorPrWriter = ((function (vec__119901,inputs,tag){
return (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.utilities/t_biomarket$utilities119902");
});})(vec__119901,inputs,tag))
;

biomarket.utilities.__GT_t_biomarket$utilities119902 = ((function (vec__119901,inputs,tag){
return (function biomarket$utilities$comment_control_$___GT_t_biomarket$utilities119902(comment_control__$1,p__119896__$1,owner__$1,vec__119901__$1,inputs__$1,tag__$1,meta119903){
return (new biomarket.utilities.t_biomarket$utilities119902(comment_control__$1,p__119896__$1,owner__$1,vec__119901__$1,inputs__$1,tag__$1,meta119903));
});})(vec__119901,inputs,tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities119902(biomarket$utilities$comment_control,p__119896,owner,vec__119901,inputs,tag,null));
});
biomarket.utilities.comments = (function biomarket$utilities$comments(project,owner){
if(typeof biomarket.utilities.t_biomarket$utilities119919 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities119919 = (function (comments,project,owner,meta119920){
this.comments = comments;
this.project = project;
this.owner = owner;
this.meta119920 = meta119920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities119919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119921,meta119920__$1){
var self__ = this;
var _119921__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities119919(self__.comments,self__.project,self__.owner,meta119920__$1));
});

biomarket.utilities.t_biomarket$utilities119919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119921){
var self__ = this;
var _119921__$1 = this;
return self__.meta119920;
});

biomarket.utilities.t_biomarket$utilities119919.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities119919.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"type","type",1174270348),"textarea",new cljs.core.Keyword(null,"rows","rows",850049680),"2",new cljs.core.Keyword(null,"name","name",1843675177),"comment",new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"no-icon","no-icon",-1734606666),new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"title","title",636505583),""], null)], null),new cljs.core.Keyword(null,"cid","cid",-1940591320),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"comments","comments",-293346423),null], null);
});

biomarket.utilities.t_biomarket$utilities119919.prototype.om$core$IWillMount$ = true;

biomarket.utilities.t_biomarket$utilities119919.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
biomarket.utilities.register_loop.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"cid","cid",-1940591320)),((function (___$1){
return (function (o,p__119922){
var map__119923 = p__119922;
var map__119923__$1 = ((((!((map__119923 == null)))?((((map__119923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119923):map__119923);
var data = cljs.core.get.call(null,map__119923__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var pred__119925 = cljs.core._EQ_;
var expr__119926 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(pred__119925.call(null,new cljs.core.Keyword(null,"submit","submit",-49315317),expr__119926))){
return biomarket.utilities.submit_comment_call.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project));
} else {
return biomarket.utilities.get_input.call(null,o,data);
}
});})(___$1))
);

return biomarket.utilities.comment_server_call.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project));
});

biomarket.utilities.t_biomarket$utilities119919.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities119919.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__119928){
var self__ = this;
var map__119929 = p__119928;
var map__119929__$1 = ((((!((map__119929 == null)))?((((map__119929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119929):map__119929);
var inputs = cljs.core.get.call(null,map__119929__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var cid = cljs.core.get.call(null,map__119929__$1,new cljs.core.Keyword(null,"cid","cid",-1940591320));
var comments__$1 = cljs.core.get.call(null,map__119929__$1,new cljs.core.Keyword(null,"comments","comments",-293346423));
var ___$1 = this;
return React.DOM.div({"style": {"margin-top": "10px"}},React.DOM.label(null,"Discussion"),React.DOM.div({"className": "panel panel-default", "style": {"min-height": "100%"}},cljs.core.apply.call(null,om.dom.div,{"className": "panel-body", "ref": "comments", "style": {"margin": "5px", "max-height": "300", "overflow-y": "scroll", "position": "relative", "bottom": "0"}},((cljs.core.not.call(null,cljs.core.seq.call(null,comments__$1)))?(function (){var x__23591__auto__ = React.DOM.div({"style": {"text-align": "center"}},"No discussion yet!");
return cljs.core._conj.call(null,(function (){var x__23591__auto____$1 = React.DOM.hr(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23591__auto____$1);
})(),x__23591__auto__);
})():cljs.core.map.call(null,((function (___$1,map__119929,map__119929__$1,inputs,cid,comments__$1){
return (function (p1__119905_SHARP_){
return om.core.build.call(null,biomarket.utilities.show_comment,p1__119905_SHARP_);
});})(___$1,map__119929,map__119929__$1,inputs,cid,comments__$1))
,cljs.core.filter.call(null,((function (___$1,map__119929,map__119929__$1,inputs,cid,comments__$1){
return (function (p1__119906_SHARP_){
return !(cljs.core._EQ_.call(null,"",clojure.string.trim.call(null,new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(p1__119906_SHARP_))));
});})(___$1,map__119929,map__119929__$1,inputs,cid,comments__$1))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._LT_,comments__$1))))),React.DOM.div({"className": "panel-footer"},om.core.build.call(null,biomarket.utilities.comment_control,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs,cid], null)))));
});

biomarket.utilities.t_biomarket$utilities119919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"comments","comments",1347185104,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta119920","meta119920",-1577611834,null)], null);
});

biomarket.utilities.t_biomarket$utilities119919.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities119919.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities119919";

biomarket.utilities.t_biomarket$utilities119919.cljs$lang$ctorPrWriter = (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.utilities/t_biomarket$utilities119919");
});

biomarket.utilities.__GT_t_biomarket$utilities119919 = (function biomarket$utilities$comments_$___GT_t_biomarket$utilities119919(comments__$1,project__$1,owner__$1,meta119920){
return (new biomarket.utilities.t_biomarket$utilities119919(comments__$1,project__$1,owner__$1,meta119920));
});

}

return (new biomarket.utilities.t_biomarket$utilities119919(biomarket$utilities$comments,project,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.utilities.set_radio_state = (function biomarket$utilities$set_radio_state(owner,element,e){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"current","current",-1088038603),biomarket.utilities.get_text.call(null,e)));
});
biomarket.utilities.in_line_radio = (function biomarket$utilities$in_line_radio(p__119932,owner){
var vec__119940 = p__119932;
var name = cljs.core.nth.call(null,vec__119940,(0),null);
var element = cljs.core.nth.call(null,vec__119940,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities119941 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IWillUpdate}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities119941 = (function (in_line_radio,p__119932,owner,vec__119940,name,element,meta119942){
this.in_line_radio = in_line_radio;
this.p__119932 = p__119932;
this.owner = owner;
this.vec__119940 = vec__119940;
this.name = name;
this.element = element;
this.meta119942 = meta119942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities119941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__119940,name,element){
return (function (_119943,meta119942__$1){
var self__ = this;
var _119943__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities119941(self__.in_line_radio,self__.p__119932,self__.owner,self__.vec__119940,self__.name,self__.element,meta119942__$1));
});})(vec__119940,name,element))
;

biomarket.utilities.t_biomarket$utilities119941.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__119940,name,element){
return (function (_119943){
var self__ = this;
var _119943__$1 = this;
return self__.meta119942;
});})(vec__119940,name,element))
;

biomarket.utilities.t_biomarket$utilities119941.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities119941.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__119940,name,element){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),self__.name,new cljs.core.Keyword(null,"element","element",1974019749),self__.element], null);
});})(vec__119940,name,element))
;

biomarket.utilities.t_biomarket$utilities119941.prototype.om$core$IWillUpdate$ = true;

biomarket.utilities.t_biomarket$utilities119941.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (vec__119940,name,element){
return (function (_,np,ns){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"radiod","radiod",450568867),ns);
});})(vec__119940,name,element))
;

biomarket.utilities.t_biomarket$utilities119941.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities119941.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__119940,name,element){
return (function (_,p__119944){
var self__ = this;
var map__119945 = p__119944;
var map__119945__$1 = ((((!((map__119945 == null)))?((((map__119945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119945):map__119945);
var element__$1 = cljs.core.get.call(null,map__119945__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "pure-u-1"},cljs.core.map.call(null,((function (___$1,map__119945,map__119945__$1,element__$1,vec__119940,name,element){
return (function (p1__119931_SHARP_){
return React.DOM.span(null,React.DOM.div({"className": "pure-u-1-5"},om.dom.input.call(null,{"type": "radio", "name": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(element__$1), "value": cljs.core.first.call(null,p1__119931_SHARP_), "onChange": ((function (___$1,map__119945,map__119945__$1,element__$1,vec__119940,name,element){
return (function (e){
return biomarket.utilities.set_radio_state.call(null,self__.owner,element__$1,e);
});})(___$1,map__119945,map__119945__$1,element__$1,vec__119940,name,element))
})),React.DOM.div({"className": "pure-u-1-4"},cljs.core.second.call(null,p1__119931_SHARP_)));
});})(___$1,map__119945,map__119945__$1,element__$1,vec__119940,name,element))
,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(element__$1)));
});})(vec__119940,name,element))
;

biomarket.utilities.t_biomarket$utilities119941.getBasis = ((function (vec__119940,name,element){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"in-line-radio","in-line-radio",803575522,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"element","element",-680416020,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__119932","p__119932",-1716999353,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__119940","vec__119940",-423769157,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"meta119942","meta119942",324338126,null)], null);
});})(vec__119940,name,element))
;

biomarket.utilities.t_biomarket$utilities119941.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities119941.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities119941";

biomarket.utilities.t_biomarket$utilities119941.cljs$lang$ctorPrWriter = ((function (vec__119940,name,element){
return (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.utilities/t_biomarket$utilities119941");
});})(vec__119940,name,element))
;

biomarket.utilities.__GT_t_biomarket$utilities119941 = ((function (vec__119940,name,element){
return (function biomarket$utilities$in_line_radio_$___GT_t_biomarket$utilities119941(in_line_radio__$1,p__119932__$1,owner__$1,vec__119940__$1,name__$1,element__$1,meta119942){
return (new biomarket.utilities.t_biomarket$utilities119941(in_line_radio__$1,p__119932__$1,owner__$1,vec__119940__$1,name__$1,element__$1,meta119942));
});})(vec__119940,name,element))
;

}

return (new biomarket.utilities.t_biomarket$utilities119941(biomarket$utilities$in_line_radio,p__119932,owner,vec__119940,name,element,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=utilities.js.map