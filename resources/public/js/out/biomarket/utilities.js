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
biomarket.utilities.log = (function biomarket$utilities$log(var_args){
var args__26991__auto__ = [];
var len__26984__auto___85078 = arguments.length;
var i__26985__auto___85079 = (0);
while(true){
if((i__26985__auto___85079 < len__26984__auto___85078)){
args__26991__auto__.push((arguments[i__26985__auto___85079]));

var G__85080 = (i__26985__auto___85079 + (1));
i__26985__auto___85079 = G__85080;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((0) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((0)),(0),null)):null);
return biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic(argseq__26992__auto__);
});

biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic = (function (s){
return console.log(cljs.core.apply.call(null,cljs.core.str,s));
});

biomarket.utilities.log.cljs$lang$maxFixedArity = (0);

biomarket.utilities.log.cljs$lang$applyTo = (function (seq85077){
return biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq85077));
});
biomarket.utilities.datestring__GT_readable = (function biomarket$utilities$datestring__GT_readable(string){
var rfc = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"rfc822","rfc822",-404628697));
var f = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"basic-date-time","basic-date-time",1525413604));
return cljs_time.format.unparse.call(null,rfc,cljs_time.format.parse.call(null,f,string));
});
biomarket.utilities.ds__GT_date_hour_minute = (function biomarket$utilities$ds__GT_date_hour_minute(string){
var rfc = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date-hour-minute","date-hour-minute",1629918346));
var f = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"basic-date-time","basic-date-time",1525413604));
return cljs_time.format.unparse.call(null,rfc,cljs_time.format.parse.call(null,f,string));
});
biomarket.utilities.error_handler = (function biomarket$utilities$error_handler(p__85081){
var map__85084 = p__85081;
var map__85084__$1 = ((((!((map__85084 == null)))?((((map__85084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85084):map__85084);
var status = cljs.core.get.call(null,map__85084__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__85084__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return biomarket.utilities.log.call(null,[cljs.core.str("Something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
biomarket.utilities.post_params = (function biomarket$utilities$post_params(url,params,handler){
return ajax.core.POST.call(null,url,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),biomarket.utilities.error_handler,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
if(typeof biomarket.utilities.loop_manager !== 'undefined'){
} else {
biomarket.utilities.loop_manager = (function (){var method_table__26839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26840__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26841__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26842__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26843__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","loop-manager"),((function (method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__,hierarchy__26843__auto__){
return (function() { 
var G__85086__delegate = function (o,d,args){
return new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(d));
};
var G__85086 = function (o,d,var_args){
var args = null;
if (arguments.length > 2) {
var G__85087__i = 0, G__85087__a = new Array(arguments.length -  2);
while (G__85087__i < G__85087__a.length) {G__85087__a[G__85087__i] = arguments[G__85087__i + 2]; ++G__85087__i;}
  args = new cljs.core.IndexedSeq(G__85087__a,0);
} 
return G__85086__delegate.call(this,o,d,args);};
G__85086.cljs$lang$maxFixedArity = 2;
G__85086.cljs$lang$applyTo = (function (arglist__85088){
var o = cljs.core.first(arglist__85088);
arglist__85088 = cljs.core.next(arglist__85088);
var d = cljs.core.first(arglist__85088);
var args = cljs.core.rest(arglist__85088);
return G__85086__delegate(o,d,args);
});
G__85086.cljs$core$IFn$_invoke$arity$variadic = G__85086__delegate;
return G__85086;
})()
;})(method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__,hierarchy__26843__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26843__auto__,method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__));
})();
}
if(typeof biomarket.utilities.broadcast_loop_manager !== 'undefined'){
} else {
biomarket.utilities.broadcast_loop_manager = (function (){var method_table__26839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26840__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26841__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26842__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26843__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","broadcast-loop-manager"),((function (method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__,hierarchy__26843__auto__){
return (function (o,d){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(d);
});})(method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__,hierarchy__26843__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26843__auto__,method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"input-update","input-update",902761778),(function() { 
var G__85092__delegate = function (owner,p__85089,_){
var map__85090 = p__85089;
var map__85090__$1 = ((((!((map__85090 == null)))?((((map__85090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85090):map__85090);
var data = cljs.core.get.call(null,map__85090__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.utilities.get_input.call(null,owner,data);
};
var G__85092 = function (owner,p__85089,var_args){
var _ = null;
if (arguments.length > 2) {
var G__85093__i = 0, G__85093__a = new Array(arguments.length -  2);
while (G__85093__i < G__85093__a.length) {G__85093__a[G__85093__i] = arguments[G__85093__i + 2]; ++G__85093__i;}
  _ = new cljs.core.IndexedSeq(G__85093__a,0);
} 
return G__85092__delegate.call(this,owner,p__85089,_);};
G__85092.cljs$lang$maxFixedArity = 2;
G__85092.cljs$lang$applyTo = (function (arglist__85094){
var owner = cljs.core.first(arglist__85094);
arglist__85094 = cljs.core.next(arglist__85094);
var p__85089 = cljs.core.first(arglist__85094);
var _ = cljs.core.rest(arglist__85094);
return G__85092__delegate(owner,p__85089,_);
});
G__85092.cljs$core$IFn$_invoke$arity$variadic = G__85092__delegate;
return G__85092;
})()
);
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"submitted","submitted",-131658962),(function (owner,p__85095,func){
var map__85096 = p__85095;
var map__85096__$1 = ((((!((map__85096 == null)))?((((map__85096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85096):map__85096);
var data = cljs.core.get.call(null,map__85096__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return func.call(null);
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"project","project",1124394579),(function (owner,p__85098){
var map__85099 = p__85098;
var map__85099__$1 = ((((!((map__85099 == null)))?((((map__85099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85099):map__85099);
var data = cljs.core.get.call(null,map__85099__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view-type","view-type",-1848894559))));
}));
biomarket.utilities.pub_info = (function biomarket$utilities$pub_info(owner,topic,data){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
biomarket.utilities.register_loop = (function biomarket$utilities$register_loop(var_args){
var args85101 = [];
var len__26984__auto___85141 = arguments.length;
var i__26985__auto___85142 = (0);
while(true){
if((i__26985__auto___85142 < len__26984__auto___85141)){
args85101.push((arguments[i__26985__auto___85142]));

var G__85143 = (i__26985__auto___85142 + (1));
i__26985__auto___85142 = G__85143;
continue;
} else {
}
break;
}

var G__85103 = args85101.length;
switch (G__85103) {
case 2:
return biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args85101.length)].join('')));

}
});

biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$2 = (function (owner,topic){
return biomarket.utilities.register_loop.call(null,owner,topic,biomarket.utilities.loop_manager);
});

biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$3 = (function (owner,topic,func){
var c = cljs.core.async.chan.call(null);
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var events = cljs.core.async.sub.call(null,nc,topic,c);
var c__30045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto__,c,nc,events){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto__,c,nc,events){
return (function (state_85122){
var state_val_85123 = (state_85122[(1)]);
if((state_val_85123 === (1))){
var state_85122__$1 = state_85122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85122__$1,(2),events);
} else {
if((state_val_85123 === (2))){
var inst_85105 = (state_85122[(2)]);
var inst_85106 = inst_85105;
var state_85122__$1 = (function (){var statearr_85124 = state_85122;
(statearr_85124[(7)] = inst_85106);

return statearr_85124;
})();
var statearr_85125_85145 = state_85122__$1;
(statearr_85125_85145[(2)] = null);

(statearr_85125_85145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85123 === (3))){
var inst_85106 = (state_85122[(7)]);
var inst_85108 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_85106);
var inst_85109 = cljs.core._EQ_.call(null,inst_85108,new cljs.core.Keyword(null,"end","end",-268185958));
var state_85122__$1 = state_85122;
if(inst_85109){
var statearr_85126_85146 = state_85122__$1;
(statearr_85126_85146[(1)] = (5));

} else {
var statearr_85127_85147 = state_85122__$1;
(statearr_85127_85147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85123 === (4))){
var inst_85120 = (state_85122[(2)]);
var state_85122__$1 = state_85122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85122__$1,inst_85120);
} else {
if((state_val_85123 === (5))){
var state_85122__$1 = state_85122;
var statearr_85128_85148 = state_85122__$1;
(statearr_85128_85148[(2)] = null);

(statearr_85128_85148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85123 === (6))){
var inst_85106 = (state_85122[(7)]);
var inst_85112 = func.call(null,owner,inst_85106);
var state_85122__$1 = (function (){var statearr_85129 = state_85122;
(statearr_85129[(8)] = inst_85112);

return statearr_85129;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85122__$1,(8),events);
} else {
if((state_val_85123 === (7))){
var inst_85117 = (state_85122[(2)]);
var inst_85118 = cljs.core.async.unsub.call(null,nc,topic,c);
var state_85122__$1 = (function (){var statearr_85130 = state_85122;
(statearr_85130[(9)] = inst_85117);

return statearr_85130;
})();
var statearr_85131_85149 = state_85122__$1;
(statearr_85131_85149[(2)] = inst_85118);

(statearr_85131_85149[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85123 === (8))){
var inst_85114 = (state_85122[(2)]);
var inst_85106 = inst_85114;
var state_85122__$1 = (function (){var statearr_85132 = state_85122;
(statearr_85132[(7)] = inst_85106);

return statearr_85132;
})();
var statearr_85133_85150 = state_85122__$1;
(statearr_85133_85150[(2)] = null);

(statearr_85133_85150[(1)] = (3));


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
});})(c__30045__auto__,c,nc,events))
;
return ((function (switch__29933__auto__,c__30045__auto__,c,nc,events){
return (function() {
var biomarket$utilities$state_machine__29934__auto__ = null;
var biomarket$utilities$state_machine__29934__auto____0 = (function (){
var statearr_85137 = [null,null,null,null,null,null,null,null,null,null];
(statearr_85137[(0)] = biomarket$utilities$state_machine__29934__auto__);

(statearr_85137[(1)] = (1));

return statearr_85137;
});
var biomarket$utilities$state_machine__29934__auto____1 = (function (state_85122){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_85122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e85138){if((e85138 instanceof Object)){
var ex__29937__auto__ = e85138;
var statearr_85139_85151 = state_85122;
(statearr_85139_85151[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e85138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85152 = state_85122;
state_85122 = G__85152;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
biomarket$utilities$state_machine__29934__auto__ = function(state_85122){
switch(arguments.length){
case 0:
return biomarket$utilities$state_machine__29934__auto____0.call(this);
case 1:
return biomarket$utilities$state_machine__29934__auto____1.call(this,state_85122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$utilities$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$utilities$state_machine__29934__auto____0;
biomarket$utilities$state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$utilities$state_machine__29934__auto____1;
return biomarket$utilities$state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto__,c,nc,events))
})();
var state__30047__auto__ = (function (){var statearr_85140 = f__30046__auto__.call(null);
(statearr_85140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto__);

return statearr_85140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto__,c,nc,events))
);

return c__30045__auto__;
});

biomarket.utilities.register_loop.cljs$lang$maxFixedArity = 3;
biomarket.utilities.unsubscribe = (function biomarket$utilities$unsubscribe(var_args){
var args__26991__auto__ = [];
var len__26984__auto___85159 = arguments.length;
var i__26985__auto___85160 = (0);
while(true){
if((i__26985__auto___85160 < len__26984__auto___85159)){
args__26991__auto__.push((arguments[i__26985__auto___85160]));

var G__85161 = (i__26985__auto___85160 + (1));
i__26985__auto___85160 = G__85161;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((1) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((1)),(0),null)):null);
return biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26992__auto__);
});

biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic = (function (owner,topics){
var pc = new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var seq__85155 = cljs.core.seq.call(null,topics);
var chunk__85156 = null;
var count__85157 = (0);
var i__85158 = (0);
while(true){
if((i__85158 < count__85157)){
var t = cljs.core._nth.call(null,chunk__85156,i__85158);
cljs.core.async.put_BANG_.call(null,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"end","end",-268185958)], null));

var G__85162 = seq__85155;
var G__85163 = chunk__85156;
var G__85164 = count__85157;
var G__85165 = (i__85158 + (1));
seq__85155 = G__85162;
chunk__85156 = G__85163;
count__85157 = G__85164;
i__85158 = G__85165;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__85155);
if(temp__4425__auto__){
var seq__85155__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85155__$1)){
var c__26725__auto__ = cljs.core.chunk_first.call(null,seq__85155__$1);
var G__85166 = cljs.core.chunk_rest.call(null,seq__85155__$1);
var G__85167 = c__26725__auto__;
var G__85168 = cljs.core.count.call(null,c__26725__auto__);
var G__85169 = (0);
seq__85155 = G__85166;
chunk__85156 = G__85167;
count__85157 = G__85168;
i__85158 = G__85169;
continue;
} else {
var t = cljs.core.first.call(null,seq__85155__$1);
cljs.core.async.put_BANG_.call(null,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"end","end",-268185958)], null));

var G__85170 = cljs.core.next.call(null,seq__85155__$1);
var G__85171 = null;
var G__85172 = (0);
var G__85173 = (0);
seq__85155 = G__85170;
chunk__85156 = G__85171;
count__85157 = G__85172;
i__85158 = G__85173;
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

biomarket.utilities.unsubscribe.cljs$lang$applyTo = (function (seq85153){
var G__85154 = cljs.core.first.call(null,seq85153);
var seq85153__$1 = cljs.core.next.call(null,seq85153);
return biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic(G__85154,seq85153__$1);
});
biomarket.utilities.register_broadcast_loop = (function biomarket$utilities$register_broadcast_loop(owner,topic,chan){
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var events = cljs.core.async.sub.call(null,nc,topic,chan);
var c__30045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto__,nc,events){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto__,nc,events){
return (function (state_85229){
var state_val_85230 = (state_85229[(1)]);
if((state_val_85230 === (1))){
var state_85229__$1 = state_85229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85229__$1,(2),events);
} else {
if((state_val_85230 === (2))){
var inst_85212 = (state_85229[(2)]);
var inst_85213 = inst_85212;
var state_85229__$1 = (function (){var statearr_85231 = state_85229;
(statearr_85231[(7)] = inst_85213);

return statearr_85231;
})();
var statearr_85232_85248 = state_85229__$1;
(statearr_85232_85248[(2)] = null);

(statearr_85232_85248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85230 === (3))){
var inst_85213 = (state_85229[(7)]);
var inst_85215 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_85213);
var inst_85216 = cljs.core._EQ_.call(null,inst_85215,new cljs.core.Keyword(null,"end","end",-268185958));
var state_85229__$1 = state_85229;
if(inst_85216){
var statearr_85233_85249 = state_85229__$1;
(statearr_85233_85249[(1)] = (5));

} else {
var statearr_85234_85250 = state_85229__$1;
(statearr_85234_85250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85230 === (4))){
var inst_85227 = (state_85229[(2)]);
var state_85229__$1 = state_85229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85229__$1,inst_85227);
} else {
if((state_val_85230 === (5))){
var state_85229__$1 = state_85229;
var statearr_85235_85251 = state_85229__$1;
(statearr_85235_85251[(2)] = null);

(statearr_85235_85251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85230 === (6))){
var inst_85213 = (state_85229[(7)]);
var inst_85219 = biomarket.utilities.broadcast_loop_manager.call(null,owner,inst_85213);
var state_85229__$1 = (function (){var statearr_85236 = state_85229;
(statearr_85236[(8)] = inst_85219);

return statearr_85236;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85229__$1,(8),events);
} else {
if((state_val_85230 === (7))){
var inst_85224 = (state_85229[(2)]);
var inst_85225 = cljs.core.async.unsub.call(null,nc,topic,chan);
var state_85229__$1 = (function (){var statearr_85237 = state_85229;
(statearr_85237[(9)] = inst_85224);

return statearr_85237;
})();
var statearr_85238_85252 = state_85229__$1;
(statearr_85238_85252[(2)] = inst_85225);

(statearr_85238_85252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_85230 === (8))){
var inst_85221 = (state_85229[(2)]);
var inst_85213 = inst_85221;
var state_85229__$1 = (function (){var statearr_85239 = state_85229;
(statearr_85239[(7)] = inst_85213);

return statearr_85239;
})();
var statearr_85240_85253 = state_85229__$1;
(statearr_85240_85253[(2)] = null);

(statearr_85240_85253[(1)] = (3));


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
});})(c__30045__auto__,nc,events))
;
return ((function (switch__29933__auto__,c__30045__auto__,nc,events){
return (function() {
var biomarket$utilities$register_broadcast_loop_$_state_machine__29934__auto__ = null;
var biomarket$utilities$register_broadcast_loop_$_state_machine__29934__auto____0 = (function (){
var statearr_85244 = [null,null,null,null,null,null,null,null,null,null];
(statearr_85244[(0)] = biomarket$utilities$register_broadcast_loop_$_state_machine__29934__auto__);

(statearr_85244[(1)] = (1));

return statearr_85244;
});
var biomarket$utilities$register_broadcast_loop_$_state_machine__29934__auto____1 = (function (state_85229){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_85229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e85245){if((e85245 instanceof Object)){
var ex__29937__auto__ = e85245;
var statearr_85246_85254 = state_85229;
(statearr_85246_85254[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e85245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__85255 = state_85229;
state_85229 = G__85255;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
biomarket$utilities$register_broadcast_loop_$_state_machine__29934__auto__ = function(state_85229){
switch(arguments.length){
case 0:
return biomarket$utilities$register_broadcast_loop_$_state_machine__29934__auto____0.call(this);
case 1:
return biomarket$utilities$register_broadcast_loop_$_state_machine__29934__auto____1.call(this,state_85229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$utilities$register_broadcast_loop_$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$utilities$register_broadcast_loop_$_state_machine__29934__auto____0;
biomarket$utilities$register_broadcast_loop_$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$utilities$register_broadcast_loop_$_state_machine__29934__auto____1;
return biomarket$utilities$register_broadcast_loop_$_state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto__,nc,events))
})();
var state__30047__auto__ = (function (){var statearr_85247 = f__30046__auto__.call(null);
(statearr_85247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto__);

return statearr_85247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto__,nc,events))
);

return c__30045__auto__;
});
biomarket.utilities.unsub_broadcast_loop = (function biomarket$utilities$unsub_broadcast_loop(owner,topic,chan){
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
return cljs.core.async.unsub.call(null,nc,topic,chan);
});
biomarket.utilities.split_projects = (function biomarket$utilities$split_projects(projects){
var pn = cljs.core.count.call(null,projects);
var n = ((cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,pn,(2))))?cljs.core.quot.call(null,pn,(2)):((1) + cljs.core.quot.call(null,pn,(2))));
return cljs.core.partition_all.call(null,n,projects);
});
biomarket.utilities.color_span = (function biomarket$utilities$color_span(text,color){
return React.DOM.span({"style": {"color": color, "font-weight": "bold"}},text);
});
biomarket.utilities.more_less_text = (function biomarket$utilities$more_less_text(text,owner){
if(typeof biomarket.utilities.t_biomarket$utilities85265 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities85265 = (function (more_less_text,text,owner,meta85266){
this.more_less_text = more_less_text;
this.text = text;
this.owner = owner;
this.meta85266 = meta85266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities85265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85267,meta85266__$1){
var self__ = this;
var _85267__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities85265(self__.more_less_text,self__.text,self__.owner,meta85266__$1));
});

biomarket.utilities.t_biomarket$utilities85265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85267){
var self__ = this;
var _85267__$1 = this;
return self__.meta85266;
});

biomarket.utilities.t_biomarket$utilities85265.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities85265.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"less","less",-428869198)], null);
});

biomarket.utilities.t_biomarket$utilities85265.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities85265.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__85268){
var self__ = this;
var map__85269 = p__85268;
var map__85269__$1 = ((((!((map__85269 == null)))?((((map__85269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85269):map__85269);
var showing = cljs.core.get.call(null,map__85269__$1,new cljs.core.Keyword(null,"showing","showing",798009604));
var ___$1 = this;
return React.DOM.div(null,(((cljs.core.count.call(null,self__.text) < (400)))?React.DOM.div(null,self__.text):(function (){var pred__85271 = cljs.core._EQ_;
var expr__85272 = showing;
if(cljs.core.truth_(pred__85271.call(null,new cljs.core.Keyword(null,"less","less",-428869198),expr__85272))){
return React.DOM.div(null,React.DOM.span({"style": {"white-space": "pre-line"}},[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(300),self__.text))),cljs.core.str(" ... ")].join('')),React.DOM.a({"onClick": ((function (pred__85271,expr__85272,___$1,map__85269,map__85269__$1,showing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"more","more",-2058821800));
});})(pred__85271,expr__85272,___$1,map__85269,map__85269__$1,showing))
, "className": "flinka"}," More"));
} else {
if(cljs.core.truth_(pred__85271.call(null,new cljs.core.Keyword(null,"more","more",-2058821800),expr__85272))){
return React.DOM.div(null,React.DOM.span({"style": {"white-space": "pre-line"}},self__.text),React.DOM.a({"onClick": ((function (pred__85271,expr__85272,___$1,map__85269,map__85269__$1,showing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"less","less",-428869198));
});})(pred__85271,expr__85272,___$1,map__85269,map__85269__$1,showing))
, "className": "flinka"}," Less"));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__85272)].join('')));
}
}
})()));
});

biomarket.utilities.t_biomarket$utilities85265.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"more-less-text","more-less-text",-1737643469,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta85266","meta85266",-2083264971,null)], null);
});

biomarket.utilities.t_biomarket$utilities85265.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities85265.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities85265";

biomarket.utilities.t_biomarket$utilities85265.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.utilities/t_biomarket$utilities85265");
});

biomarket.utilities.__GT_t_biomarket$utilities85265 = (function biomarket$utilities$more_less_text_$___GT_t_biomarket$utilities85265(more_less_text__$1,text__$1,owner__$1,meta85266){
return (new biomarket.utilities.t_biomarket$utilities85265(more_less_text__$1,text__$1,owner__$1,meta85266));
});

}

return (new biomarket.utilities.t_biomarket$utilities85265(biomarket$utilities$more_less_text,text,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.utilities.control_buttons = (function biomarket$utilities$control_buttons(inputs,owner){
if(typeof biomarket.utilities.t_biomarket$utilities85278 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities85278 = (function (control_buttons,inputs,owner,meta85279){
this.control_buttons = control_buttons;
this.inputs = inputs;
this.owner = owner;
this.meta85279 = meta85279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities85278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85280,meta85279__$1){
var self__ = this;
var _85280__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities85278(self__.control_buttons,self__.inputs,self__.owner,meta85279__$1));
});

biomarket.utilities.t_biomarket$utilities85278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85280){
var self__ = this;
var _85280__$1 = this;
return self__.meta85279;
});

biomarket.utilities.t_biomarket$utilities85278.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities85278.prototype.om$core$IRender$render$arity$1 = (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return React.DOM.div({"className": "panel panel-default"},cljs.core.apply.call(null,om.dom.div,{"className": "panel-heading"},cljs.core.map.call(null,((function (this__36859__auto____$1){
return (function (p1__85274_SHARP_){
return React.DOM.a({"className": "btn btn-default", "onClick": cljs.core.second.call(null,p1__85274_SHARP_)},cljs.core.first.call(null,p1__85274_SHARP_));
});})(this__36859__auto____$1))
,self__.inputs)));
});

biomarket.utilities.t_biomarket$utilities85278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"control-buttons","control-buttons",285817705,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta85279","meta85279",674005225,null)], null);
});

biomarket.utilities.t_biomarket$utilities85278.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities85278.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities85278";

biomarket.utilities.t_biomarket$utilities85278.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.utilities/t_biomarket$utilities85278");
});

biomarket.utilities.__GT_t_biomarket$utilities85278 = (function biomarket$utilities$control_buttons_$___GT_t_biomarket$utilities85278(control_buttons__$1,inputs__$1,owner__$1,meta85279){
return (new biomarket.utilities.t_biomarket$utilities85278(control_buttons__$1,inputs__$1,owner__$1,meta85279));
});

}

return (new biomarket.utilities.t_biomarket$utilities85278(biomarket$utilities$control_buttons,inputs,owner,null));
});
biomarket.utilities.menu_item = (function biomarket$utilities$menu_item(p__85281,owner){
var vec__85286 = p__85281;
var text = cljs.core.nth.call(null,vec__85286,(0),null);
var topic = cljs.core.nth.call(null,vec__85286,(1),null);
var tag = cljs.core.nth.call(null,vec__85286,(2),null);
var current = cljs.core.nth.call(null,vec__85286,(3),null);
if(typeof biomarket.utilities.t_biomarket$utilities85287 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities85287 = (function (menu_item,p__85281,owner,vec__85286,text,topic,tag,current,meta85288){
this.menu_item = menu_item;
this.p__85281 = p__85281;
this.owner = owner;
this.vec__85286 = vec__85286;
this.text = text;
this.topic = topic;
this.tag = tag;
this.current = current;
this.meta85288 = meta85288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities85287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__85286,text,topic,tag,current){
return (function (_85289,meta85288__$1){
var self__ = this;
var _85289__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities85287(self__.menu_item,self__.p__85281,self__.owner,self__.vec__85286,self__.text,self__.topic,self__.tag,self__.current,meta85288__$1));
});})(vec__85286,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities85287.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__85286,text,topic,tag,current){
return (function (_85289){
var self__ = this;
var _85289__$1 = this;
return self__.meta85288;
});})(vec__85286,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities85287.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities85287.prototype.om$core$IRender$render$arity$1 = ((function (vec__85286,text,topic,tag,current){
return (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return React.DOM.li({"className": ((cljs.core._EQ_.call(null,self__.current,self__.topic))?"active":null), "role": "presentation"},React.DOM.a({"onClick": ((function (this__36859__auto____$1,vec__85286,text,topic,tag,current){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.tag,self__.topic);
});})(this__36859__auto____$1,vec__85286,text,topic,tag,current))
, "style": {"cursor": "pointer"}},self__.text));
});})(vec__85286,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities85287.getBasis = ((function (vec__85286,text,topic,tag,current){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"current","current",552492924,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__85281","p__85281",-1209659549,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__85286","vec__85286",192223728,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"meta85288","meta85288",-612124103,null)], null);
});})(vec__85286,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities85287.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities85287.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities85287";

biomarket.utilities.t_biomarket$utilities85287.cljs$lang$ctorPrWriter = ((function (vec__85286,text,topic,tag,current){
return (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.utilities/t_biomarket$utilities85287");
});})(vec__85286,text,topic,tag,current))
;

biomarket.utilities.__GT_t_biomarket$utilities85287 = ((function (vec__85286,text,topic,tag,current){
return (function biomarket$utilities$menu_item_$___GT_t_biomarket$utilities85287(menu_item__$1,p__85281__$1,owner__$1,vec__85286__$1,text__$1,topic__$1,tag__$1,current__$1,meta85288){
return (new biomarket.utilities.t_biomarket$utilities85287(menu_item__$1,p__85281__$1,owner__$1,vec__85286__$1,text__$1,topic__$1,tag__$1,current__$1,meta85288));
});})(vec__85286,text,topic,tag,current))
;

}

return (new biomarket.utilities.t_biomarket$utilities85287(biomarket$utilities$menu_item,p__85281,owner,vec__85286,text,topic,tag,current,null));
});
biomarket.utilities.top_navigation = (function biomarket$utilities$top_navigation(p__85291,owner){
var vec__85296 = p__85291;
var current = cljs.core.nth.call(null,vec__85296,(0),null);
var inputs = cljs.core.nth.call(null,vec__85296,(1),null);
var nav_tag = cljs.core.nth.call(null,vec__85296,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities85297 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities85297 = (function (top_navigation,p__85291,owner,vec__85296,current,inputs,nav_tag,meta85298){
this.top_navigation = top_navigation;
this.p__85291 = p__85291;
this.owner = owner;
this.vec__85296 = vec__85296;
this.current = current;
this.inputs = inputs;
this.nav_tag = nav_tag;
this.meta85298 = meta85298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities85297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__85296,current,inputs,nav_tag){
return (function (_85299,meta85298__$1){
var self__ = this;
var _85299__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities85297(self__.top_navigation,self__.p__85291,self__.owner,self__.vec__85296,self__.current,self__.inputs,self__.nav_tag,meta85298__$1));
});})(vec__85296,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities85297.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__85296,current,inputs,nav_tag){
return (function (_85299){
var self__ = this;
var _85299__$1 = this;
return self__.meta85298;
});})(vec__85296,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities85297.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities85297.prototype.om$core$IRender$render$arity$1 = ((function (vec__85296,current,inputs,nav_tag){
return (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return React.DOM.div({"role": "navigation"},cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-pills nav-justified"},cljs.core.map.call(null,((function (this__36859__auto____$1,vec__85296,current,inputs,nav_tag){
return (function (p1__85290_SHARP_){
return om.core.build.call(null,biomarket.utilities.menu_item,cljs.core.concat.call(null,p1__85290_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nav_tag,self__.current], null)));
});})(this__36859__auto____$1,vec__85296,current,inputs,nav_tag))
,self__.inputs)));
});})(vec__85296,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities85297.getBasis = ((function (vec__85296,current,inputs,nav_tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"top-navigation","top-navigation",-1053916026,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__85291","p__85291",-1461649344,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__85296","vec__85296",-2100398397,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"meta85298","meta85298",-1000767124,null)], null);
});})(vec__85296,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities85297.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities85297.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities85297";

biomarket.utilities.t_biomarket$utilities85297.cljs$lang$ctorPrWriter = ((function (vec__85296,current,inputs,nav_tag){
return (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.utilities/t_biomarket$utilities85297");
});})(vec__85296,current,inputs,nav_tag))
;

biomarket.utilities.__GT_t_biomarket$utilities85297 = ((function (vec__85296,current,inputs,nav_tag){
return (function biomarket$utilities$top_navigation_$___GT_t_biomarket$utilities85297(top_navigation__$1,p__85291__$1,owner__$1,vec__85296__$1,current__$1,inputs__$1,nav_tag__$1,meta85298){
return (new biomarket.utilities.t_biomarket$utilities85297(top_navigation__$1,p__85291__$1,owner__$1,vec__85296__$1,current__$1,inputs__$1,nav_tag__$1,meta85298));
});})(vec__85296,current,inputs,nav_tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities85297(biomarket$utilities$top_navigation,p__85291,owner,vec__85296,current,inputs,nav_tag,null));
});
biomarket.utilities.padded_button = (function biomarket$utilities$padded_button(p__85300,owner){
var vec__85305 = p__85300;
var padding = cljs.core.nth.call(null,vec__85305,(0),null);
var value = cljs.core.nth.call(null,vec__85305,(1),null);
var func = cljs.core.nth.call(null,vec__85305,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities85306 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities85306 = (function (padded_button,p__85300,owner,vec__85305,padding,value,func,meta85307){
this.padded_button = padded_button;
this.p__85300 = p__85300;
this.owner = owner;
this.vec__85305 = vec__85305;
this.padding = padding;
this.value = value;
this.func = func;
this.meta85307 = meta85307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities85306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__85305,padding,value,func){
return (function (_85308,meta85307__$1){
var self__ = this;
var _85308__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities85306(self__.padded_button,self__.p__85300,self__.owner,self__.vec__85305,self__.padding,self__.value,self__.func,meta85307__$1));
});})(vec__85305,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities85306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__85305,padding,value,func){
return (function (_85308){
var self__ = this;
var _85308__$1 = this;
return self__.meta85307;
});})(vec__85305,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities85306.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities85306.prototype.om$core$IRender$render$arity$1 = ((function (vec__85305,padding,value,func){
return (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return React.DOM.div({"style": {"padding": self__.padding}},(cljs.core.truth_(self__.func)?React.DOM.button({"className": "pure-button pure-button-primary", "onClick": self__.func},self__.value):React.DOM.button({"className": "pure-button pure-button-primary"},self__.value)));
});})(vec__85305,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities85306.getBasis = ((function (vec__85305,padding,value,func){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"padded-button","padded-button",875344236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__85300","p__85300",-2091405723,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__85305","vec__85305",-85817051,null),new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"meta85307","meta85307",1223085233,null)], null);
});})(vec__85305,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities85306.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities85306.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities85306";

biomarket.utilities.t_biomarket$utilities85306.cljs$lang$ctorPrWriter = ((function (vec__85305,padding,value,func){
return (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.utilities/t_biomarket$utilities85306");
});})(vec__85305,padding,value,func))
;

biomarket.utilities.__GT_t_biomarket$utilities85306 = ((function (vec__85305,padding,value,func){
return (function biomarket$utilities$padded_button_$___GT_t_biomarket$utilities85306(padded_button__$1,p__85300__$1,owner__$1,vec__85305__$1,padding__$1,value__$1,func__$1,meta85307){
return (new biomarket.utilities.t_biomarket$utilities85306(padded_button__$1,p__85300__$1,owner__$1,vec__85305__$1,padding__$1,value__$1,func__$1,meta85307));
});})(vec__85305,padding,value,func))
;

}

return (new biomarket.utilities.t_biomarket$utilities85306(biomarket$utilities$padded_button,p__85300,owner,vec__85305,padding,value,func,null));
});
biomarket.utilities.padded_button_disabled = (function biomarket$utilities$padded_button_disabled(p__85309,owner){
var vec__85314 = p__85309;
var padding = cljs.core.nth.call(null,vec__85314,(0),null);
var value = cljs.core.nth.call(null,vec__85314,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities85315 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities85315 = (function (padded_button_disabled,p__85309,owner,vec__85314,padding,value,meta85316){
this.padded_button_disabled = padded_button_disabled;
this.p__85309 = p__85309;
this.owner = owner;
this.vec__85314 = vec__85314;
this.padding = padding;
this.value = value;
this.meta85316 = meta85316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities85315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__85314,padding,value){
return (function (_85317,meta85316__$1){
var self__ = this;
var _85317__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities85315(self__.padded_button_disabled,self__.p__85309,self__.owner,self__.vec__85314,self__.padding,self__.value,meta85316__$1));
});})(vec__85314,padding,value))
;

biomarket.utilities.t_biomarket$utilities85315.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__85314,padding,value){
return (function (_85317){
var self__ = this;
var _85317__$1 = this;
return self__.meta85316;
});})(vec__85314,padding,value))
;

biomarket.utilities.t_biomarket$utilities85315.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities85315.prototype.om$core$IRender$render$arity$1 = ((function (vec__85314,padding,value){
return (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return React.DOM.div({"style": {"padding": self__.padding}},React.DOM.button({"className": "pure-button pure-button-primary", "disabled": "true"},self__.value));
});})(vec__85314,padding,value))
;

biomarket.utilities.t_biomarket$utilities85315.getBasis = ((function (vec__85314,padding,value){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"padded-button-disabled","padded-button-disabled",1594106929,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__85309","p__85309",1015847973,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__85314","vec__85314",-438214792,null),new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"meta85316","meta85316",-275467471,null)], null);
});})(vec__85314,padding,value))
;

biomarket.utilities.t_biomarket$utilities85315.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities85315.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities85315";

biomarket.utilities.t_biomarket$utilities85315.cljs$lang$ctorPrWriter = ((function (vec__85314,padding,value){
return (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.utilities/t_biomarket$utilities85315");
});})(vec__85314,padding,value))
;

biomarket.utilities.__GT_t_biomarket$utilities85315 = ((function (vec__85314,padding,value){
return (function biomarket$utilities$padded_button_disabled_$___GT_t_biomarket$utilities85315(padded_button_disabled__$1,p__85309__$1,owner__$1,vec__85314__$1,padding__$1,value__$1,meta85316){
return (new biomarket.utilities.t_biomarket$utilities85315(padded_button_disabled__$1,p__85309__$1,owner__$1,vec__85314__$1,padding__$1,value__$1,meta85316));
});})(vec__85314,padding,value))
;

}

return (new biomarket.utilities.t_biomarket$utilities85315(biomarket$utilities$padded_button_disabled,p__85309,owner,vec__85314,padding,value,null));
});
biomarket.utilities.fade_in = (function biomarket$utilities$fade_in(var_args){
var args85318 = [];
var len__26984__auto___85321 = arguments.length;
var i__26985__auto___85322 = (0);
while(true){
if((i__26985__auto___85322 < len__26984__auto___85321)){
args85318.push((arguments[i__26985__auto___85322]));

var G__85323 = (i__26985__auto___85322 + (1));
i__26985__auto___85322 = G__85323;
continue;
} else {
}
break;
}

var G__85320 = args85318.length;
switch (G__85320) {
case 0:
return biomarket.utilities.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return biomarket.utilities.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return biomarket.utilities.fade_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args85318.length)].join('')));

}
});

biomarket.utilities.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return biomarket.utilities.fade_in.call(null,cljs.core.PersistentArrayMap.EMPTY,(2));
});

biomarket.utilities.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (os){
return biomarket.utilities.fade_in.call(null,os,(2));
});

biomarket.utilities.fade_in.cljs$core$IFn$_invoke$arity$2 = (function (os,time){
var t = [cljs.core.str("fadein "),cljs.core.str(time),cljs.core.str("s")].join('');
return cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,os,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"-webkit-animation","-webkit-animation",561031553),t,new cljs.core.Keyword(null,"-moz-animation","-moz-animation",922344036),t,new cljs.core.Keyword(null,"-ms-animation","-ms-animation",-1168924282),t,new cljs.core.Keyword(null,"-o-animation","-o-animation",194639525),t,new cljs.core.Keyword(null,"animation","animation",-1248293244),t], null)));
});

biomarket.utilities.fade_in.cljs$lang$maxFixedArity = 2;
biomarket.utilities.waiting = (function biomarket$utilities$waiting(_,owner){
if(typeof biomarket.utilities.t_biomarket$utilities85328 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities85328 = (function (waiting,_,owner,meta85329){
this.waiting = waiting;
this._ = _;
this.owner = owner;
this.meta85329 = meta85329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities85328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85330,meta85329__$1){
var self__ = this;
var _85330__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities85328(self__.waiting,self__._,self__.owner,meta85329__$1));
});

biomarket.utilities.t_biomarket$utilities85328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85330){
var self__ = this;
var _85330__$1 = this;
return self__.meta85329;
});

biomarket.utilities.t_biomarket$utilities85328.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities85328.prototype.om$core$IRender$render$arity$1 = (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return React.DOM.div({"style": {"position": "absolute", "top": "50%", "left": "50%", "-webkit-animation": "fadein 2s", "-moz-animation": "fadein 2s", "-ms-animation": "fadein 2s", "-o-animation": "fadein 2s", "animation": "fadein 2s"}},React.DOM.i({"className": "fa fa-refresh fa-spin fa-5x fa-fw"}));
});

biomarket.utilities.t_biomarket$utilities85328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"waiting","waiting",-1758529034,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta85329","meta85329",346457988,null)], null);
});

biomarket.utilities.t_biomarket$utilities85328.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities85328.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities85328";

biomarket.utilities.t_biomarket$utilities85328.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.utilities/t_biomarket$utilities85328");
});

biomarket.utilities.__GT_t_biomarket$utilities85328 = (function biomarket$utilities$waiting_$___GT_t_biomarket$utilities85328(waiting__$1,___$1,owner__$1,meta85329){
return (new biomarket.utilities.t_biomarket$utilities85328(waiting__$1,___$1,owner__$1,meta85329));
});

}

return (new biomarket.utilities.t_biomarket$utilities85328(biomarket$utilities$waiting,_,owner,null));
});
biomarket.utilities.make_a_table = (function biomarket$utilities$make_a_table(p__85333,owner){
var map__85339 = p__85333;
var map__85339__$1 = ((((!((map__85339 == null)))?((((map__85339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85339):map__85339);
var data = cljs.core.get.call(null,map__85339__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var tparam = cljs.core.get.call(null,map__85339__$1,new cljs.core.Keyword(null,"tparam","tparam",1161386584));
if(typeof biomarket.utilities.t_biomarket$utilities85341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities85341 = (function (make_a_table,p__85333,owner,map__85339,data,tparam,meta85342){
this.make_a_table = make_a_table;
this.p__85333 = p__85333;
this.owner = owner;
this.map__85339 = map__85339;
this.data = data;
this.tparam = tparam;
this.meta85342 = meta85342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities85341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__85339,map__85339__$1,data,tparam){
return (function (_85343,meta85342__$1){
var self__ = this;
var _85343__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities85341(self__.make_a_table,self__.p__85333,self__.owner,self__.map__85339,self__.data,self__.tparam,meta85342__$1));
});})(map__85339,map__85339__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities85341.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__85339,map__85339__$1,data,tparam){
return (function (_85343){
var self__ = this;
var _85343__$1 = this;
return self__.meta85342;
});})(map__85339,map__85339__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities85341.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities85341.prototype.om$core$IRender$render$arity$1 = ((function (map__85339,map__85339__$1,data,tparam){
return (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
var tjs = cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"table",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px"], null)], null),self__.tparam));
return React.DOM.div({"style": {"background-color": "white"}},React.DOM.div({"className": "table-responsive"},React.DOM.table(tjs,React.DOM.thead(null,cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (tjs,this__36859__auto____$1,map__85339,map__85339__$1,data,tparam){
return (function (p1__85331_SHARP_){
return React.DOM.th({"style": {"text-align": "center"}},p1__85331_SHARP_);
});})(tjs,this__36859__auto____$1,map__85339,map__85339__$1,data,tparam))
,cljs.core.keys.call(null,cljs.core.first.call(null,self__.data))))),cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.map.call(null,((function (tjs,this__36859__auto____$1,map__85339,map__85339__$1,data,tparam){
return (function (x){
return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (tjs,this__36859__auto____$1,map__85339,map__85339__$1,data,tparam){
return (function (p1__85332_SHARP_){
return React.DOM.td({"style": {"text-align": "center"}},p1__85332_SHARP_);
});})(tjs,this__36859__auto____$1,map__85339,map__85339__$1,data,tparam))
,cljs.core.vals.call(null,x)));
});})(tjs,this__36859__auto____$1,map__85339,map__85339__$1,data,tparam))
,self__.data)))));
});})(map__85339,map__85339__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities85341.getBasis = ((function (map__85339,map__85339__$1,data,tparam){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-a-table","make-a-table",-346613799,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__85333","p__85333",1181351446,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__85339","map__85339",308093195,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null),new cljs.core.Symbol(null,"meta85342","meta85342",-1270820129,null)], null);
});})(map__85339,map__85339__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities85341.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities85341.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities85341";

biomarket.utilities.t_biomarket$utilities85341.cljs$lang$ctorPrWriter = ((function (map__85339,map__85339__$1,data,tparam){
return (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.utilities/t_biomarket$utilities85341");
});})(map__85339,map__85339__$1,data,tparam))
;

biomarket.utilities.__GT_t_biomarket$utilities85341 = ((function (map__85339,map__85339__$1,data,tparam){
return (function biomarket$utilities$make_a_table_$___GT_t_biomarket$utilities85341(make_a_table__$1,p__85333__$1,owner__$1,map__85339__$2,data__$1,tparam__$1,meta85342){
return (new biomarket.utilities.t_biomarket$utilities85341(make_a_table__$1,p__85333__$1,owner__$1,map__85339__$2,data__$1,tparam__$1,meta85342));
});})(map__85339,map__85339__$1,data,tparam))
;

}

return (new biomarket.utilities.t_biomarket$utilities85341(biomarket$utilities$make_a_table,p__85333,owner,map__85339__$1,data,tparam,null));
});
biomarket.utilities.capture_return = (function biomarket$utilities$capture_return(func){
return (function (x){
if(cljs.core._EQ_.call(null,(13),x.which)){
func.call(null);

return false;
} else {
return null;
}
});
});
biomarket.utilities.on_change_function = (function biomarket$utilities$on_change_function(owner,tag,fname,element,e){
return biomarket.utilities.pub_info.call(null,owner,tag,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"input-update","input-update",902761778),new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"value","value",305978217),e.target.value)], null));
});
biomarket.utilities.on_submit_function = (function biomarket$utilities$on_submit_function(owner,tag){
return biomarket.utilities.pub_info.call(null,owner,tag,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"submitted","submitted",-131658962)], null));
});
if(typeof biomarket.utilities.get_input !== 'undefined'){
} else {
biomarket.utilities.get_input = (function (){var method_table__26839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26840__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26841__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26842__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26843__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","get-input"),((function (method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__,hierarchy__26843__auto__){
return (function() { 
var G__85347__delegate = function (owner,p__85344,args){
var map__85345 = p__85344;
var map__85345__$1 = ((((!((map__85345 == null)))?((((map__85345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85345):map__85345);
var fname = cljs.core.get.call(null,map__85345__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__85345__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return fname;
};
var G__85347 = function (owner,p__85344,var_args){
var args = null;
if (arguments.length > 2) {
var G__85348__i = 0, G__85348__a = new Array(arguments.length -  2);
while (G__85348__i < G__85348__a.length) {G__85348__a[G__85348__i] = arguments[G__85348__i + 2]; ++G__85348__i;}
  args = new cljs.core.IndexedSeq(G__85348__a,0);
} 
return G__85347__delegate.call(this,owner,p__85344,args);};
G__85347.cljs$lang$maxFixedArity = 2;
G__85347.cljs$lang$applyTo = (function (arglist__85349){
var owner = cljs.core.first(arglist__85349);
arglist__85349 = cljs.core.next(arglist__85349);
var p__85344 = cljs.core.first(arglist__85349);
var args = cljs.core.rest(arglist__85349);
return G__85347__delegate(owner,p__85344,args);
});
G__85347.cljs$core$IFn$_invoke$arity$variadic = G__85347__delegate;
return G__85347;
})()
;})(method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__,hierarchy__26843__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26843__auto__,method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.get_input,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__85358 = null;
var G__85358__2 = (function (owner,p__85350){
var map__85352 = p__85350;
var map__85352__$1 = ((((!((map__85352 == null)))?((((map__85352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85352):map__85352);
var m = map__85352__$1;
var fname = cljs.core.get.call(null,map__85352__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__85352__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return biomarket.utilities.get_input.call(null,owner,m,new cljs.core.Keyword(null,"inputs","inputs",865803858));
});
var G__85358__3 = (function (owner,p__85351,param_name){
var map__85354 = p__85351;
var map__85354__$1 = ((((!((map__85354 == null)))?((((map__85354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85354):map__85354);
var fname = cljs.core.get.call(null,map__85354__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__85354__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var inputs = om.core.get_state.call(null,owner,param_name);
var iv = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (inputs,map__85354,map__85354__$1,fname,element){
return (function (p__85356){
var vec__85357 = p__85356;
var k = cljs.core.nth.call(null,vec__85357,(0),null);
var v = cljs.core.nth.call(null,vec__85357,(1),null);
if(cljs.core.not.call(null,k.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element)))){
return v;
} else {
return null;
}
});})(inputs,map__85354,map__85354__$1,fname,element))
,new cljs.core.Keyword(null,"tests","tests",-1041085625).cljs$core$IFn$_invoke$arity$1(element))));
return om.core.set_state_BANG_.call(null,owner,param_name,cljs.core.assoc.call(null,om.core.get_state.call(null,owner,param_name),fname,cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"invalid","invalid",412869516),iv)));
});
G__85358 = function(owner,p__85351,param_name){
switch(arguments.length){
case 2:
return G__85358__2.call(this,owner,p__85351);
case 3:
return G__85358__3.call(this,owner,p__85351,param_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__85358.cljs$core$IFn$_invoke$arity$2 = G__85358__2;
G__85358.cljs$core$IFn$_invoke$arity$3 = G__85358__3;
return G__85358;
})()
);
if(typeof biomarket.utilities.clean_input !== 'undefined'){
} else {
biomarket.utilities.clean_input = (function (){var method_table__26839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26840__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26841__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26842__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26843__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","clean-input"),((function (method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__,hierarchy__26843__auto__){
return (function (element,classes,oc){
return new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(element);
});})(method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__,hierarchy__26843__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26843__auto__,method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__));
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
var x__26748__auto__ = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(classes),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)));
return cljs.core._conj.call(null,(function (){var x__26748__auto____$1 = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spid","spid",1854581004).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.Keyword(null,"className","className",-1983287057),"sr-only"], null)),new cljs.core.Keyword(null,"fb","fb",-1331669322).cljs$core$IFn$_invoke$arity$1(classes));
return cljs.core._conj.call(null,(function (){var x__26748__auto____$2 = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"help-block"], null)),new cljs.core.Keyword(null,"fb","fb",-1331669322).cljs$core$IFn$_invoke$arity$1(classes));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26748__auto____$2);
})(),x__26748__auto____$1);
})(),x__26748__auto__);
});
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"addon","addon",931813532),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26748__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26748__auto__);
})(),(function (){var x__26748__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
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
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26748__auto__);
})(),biomarket.utilities.icons.call(null,element,classes)));
}));
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"no-icon","no-icon",-1734606666),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26748__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26748__auto__);
})(),(function (){var x__26748__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
if(cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element))){
return om.dom.textarea.call(null,js);
} else {
return om.dom.input.call(null,js);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26748__auto__);
})()));
}));
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"default","default",-1987822328),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26748__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26748__auto__);
})(),(function (){var x__26748__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
if(cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element))){
return om.dom.textarea.call(null,js);
} else {
return om.dom.input.call(null,js);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26748__auto__);
})(),biomarket.utilities.icons.call(null,element,classes)));
}));
biomarket.utilities.the_input = (function biomarket$utilities$the_input(js,owner){
if(typeof biomarket.utilities.t_biomarket$utilities85362 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities85362 = (function (the_input,js,owner,meta85363){
this.the_input = the_input;
this.js = js;
this.owner = owner;
this.meta85363 = meta85363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities85362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85364,meta85363__$1){
var self__ = this;
var _85364__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities85362(self__.the_input,self__.js,self__.owner,meta85363__$1));
});

biomarket.utilities.t_biomarket$utilities85362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85364){
var self__ = this;
var _85364__$1 = this;
return self__.meta85363;
});

biomarket.utilities.t_biomarket$utilities85362.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities85362.prototype.om$core$IRender$render$arity$1 = (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return cljs.core.apply.call(null,om.dom.div,self__.js);
});

biomarket.utilities.t_biomarket$utilities85362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"the-input","the-input",1976764503,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta85363","meta85363",-1975963144,null)], null);
});

biomarket.utilities.t_biomarket$utilities85362.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities85362.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities85362";

biomarket.utilities.t_biomarket$utilities85362.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.utilities/t_biomarket$utilities85362");
});

biomarket.utilities.__GT_t_biomarket$utilities85362 = (function biomarket$utilities$the_input_$___GT_t_biomarket$utilities85362(the_input__$1,js__$1,owner__$1,meta85363){
return (new biomarket.utilities.t_biomarket$utilities85362(the_input__$1,js__$1,owner__$1,meta85363));
});

}

return (new biomarket.utilities.t_biomarket$utilities85362(biomarket$utilities$the_input,js,owner,null));
});
biomarket.utilities.input = (function biomarket$utilities$input(p__85367,owner){
var vec__85375 = p__85367;
var fname = cljs.core.nth.call(null,vec__85375,(0),null);
var element = cljs.core.nth.call(null,vec__85375,(1),null);
var tag = cljs.core.nth.call(null,vec__85375,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities85376 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities85376 = (function (input,p__85367,owner,vec__85375,fname,element,tag,meta85377){
this.input = input;
this.p__85367 = p__85367;
this.owner = owner;
this.vec__85375 = vec__85375;
this.fname = fname;
this.element = element;
this.tag = tag;
this.meta85377 = meta85377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities85376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__85375,fname,element,tag){
return (function (_85378,meta85377__$1){
var self__ = this;
var _85378__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities85376(self__.input,self__.p__85367,self__.owner,self__.vec__85375,self__.fname,self__.element,self__.tag,meta85377__$1));
});})(vec__85375,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities85376.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__85375,fname,element,tag){
return (function (_85378){
var self__ = this;
var _85378__$1 = this;
return self__.meta85377;
});})(vec__85375,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities85376.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities85376.prototype.om$core$IRender$render$arity$1 = ((function (vec__85375,fname,element,tag){
return (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
var oc = ((function (this__36859__auto____$1,vec__85375,fname,element,tag){
return (function (p1__85365_SHARP_){
return biomarket.utilities.on_change_function.call(null,self__.owner,self__.tag,self__.fname,self__.element,p1__85365_SHARP_);
});})(this__36859__auto____$1,vec__85375,fname,element,tag))
;
var classes = (function (){var pred__85379 = cljs.core._EQ_;
var expr__85380 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.element);
if(cljs.core.truth_(pred__85379.call(null,false,expr__85380))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group",new cljs.core.Keyword(null,"icon","icon",1679606541),"",new cljs.core.Keyword(null,"fb","fb",-1331669322),""], null);
} else {
if(cljs.core.truth_(pred__85379.call(null,null,expr__85380))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group has-success has-feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"glyphicon glyphicon-ok form-control-feedback",new cljs.core.Keyword(null,"fb","fb",-1331669322),""], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group has-error has-feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"glyphicon glyphicon-remove form-control-feedback",new cljs.core.Keyword(null,"fb","fb",-1331669322),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (pred__85379,expr__85380,oc,this__36859__auto____$1,vec__85375,fname,element,tag){
return (function (p1__85366_SHARP_){
return React.DOM.div(null,p1__85366_SHARP_);
});})(pred__85379,expr__85380,oc,this__36859__auto____$1,vec__85375,fname,element,tag))
,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.element)))], null);
}
}
})();
return React.DOM.div({"className": new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)},React.DOM.label({"className": "control-label", "htmlFor": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.element)},new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.element)),om.core.build.call(null,biomarket.utilities.the_input,biomarket.utilities.clean_input.call(null,self__.element,classes,oc)));
});})(vec__85375,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities85376.getBasis = ((function (vec__85375,fname,element,tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fname","fname",-1154144278,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__85367","p__85367",-1068269564,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__85375","vec__85375",-990349350,null),new cljs.core.Symbol(null,"fname","fname",-1154144278,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta85377","meta85377",655215316,null)], null);
});})(vec__85375,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities85376.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities85376.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities85376";

biomarket.utilities.t_biomarket$utilities85376.cljs$lang$ctorPrWriter = ((function (vec__85375,fname,element,tag){
return (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.utilities/t_biomarket$utilities85376");
});})(vec__85375,fname,element,tag))
;

biomarket.utilities.__GT_t_biomarket$utilities85376 = ((function (vec__85375,fname,element,tag){
return (function biomarket$utilities$input_$___GT_t_biomarket$utilities85376(input__$1,p__85367__$1,owner__$1,vec__85375__$1,fname__$1,element__$1,tag__$1,meta85377){
return (new biomarket.utilities.t_biomarket$utilities85376(input__$1,p__85367__$1,owner__$1,vec__85375__$1,fname__$1,element__$1,tag__$1,meta85377));
});})(vec__85375,fname,element,tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities85376(biomarket$utilities$input,p__85367,owner,vec__85375,fname,element,tag,null));
});
biomarket.utilities.set_radio_state = (function biomarket$utilities$set_radio_state(owner,element,e){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"current","current",-1088038603),biomarket.utilities.get_text.call(null,e)));
});
biomarket.utilities.in_line_radio = (function biomarket$utilities$in_line_radio(p__85383,owner){
var vec__85391 = p__85383;
var name = cljs.core.nth.call(null,vec__85391,(0),null);
var element = cljs.core.nth.call(null,vec__85391,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities85392 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IWillUpdate}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities85392 = (function (in_line_radio,p__85383,owner,vec__85391,name,element,meta85393){
this.in_line_radio = in_line_radio;
this.p__85383 = p__85383;
this.owner = owner;
this.vec__85391 = vec__85391;
this.name = name;
this.element = element;
this.meta85393 = meta85393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities85392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__85391,name,element){
return (function (_85394,meta85393__$1){
var self__ = this;
var _85394__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities85392(self__.in_line_radio,self__.p__85383,self__.owner,self__.vec__85391,self__.name,self__.element,meta85393__$1));
});})(vec__85391,name,element))
;

biomarket.utilities.t_biomarket$utilities85392.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__85391,name,element){
return (function (_85394){
var self__ = this;
var _85394__$1 = this;
return self__.meta85393;
});})(vec__85391,name,element))
;

biomarket.utilities.t_biomarket$utilities85392.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities85392.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__85391,name,element){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),self__.name,new cljs.core.Keyword(null,"element","element",1974019749),self__.element], null);
});})(vec__85391,name,element))
;

biomarket.utilities.t_biomarket$utilities85392.prototype.om$core$IWillUpdate$ = true;

biomarket.utilities.t_biomarket$utilities85392.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (vec__85391,name,element){
return (function (_,np,ns){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"radiod","radiod",450568867),ns);
});})(vec__85391,name,element))
;

biomarket.utilities.t_biomarket$utilities85392.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities85392.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__85391,name,element){
return (function (_,p__85395){
var self__ = this;
var map__85396 = p__85395;
var map__85396__$1 = ((((!((map__85396 == null)))?((((map__85396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__85396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85396):map__85396);
var element__$1 = cljs.core.get.call(null,map__85396__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "pure-u-1"},cljs.core.map.call(null,((function (___$1,map__85396,map__85396__$1,element__$1,vec__85391,name,element){
return (function (p1__85382_SHARP_){
return React.DOM.span(null,React.DOM.div({"className": "pure-u-1-5"},om.dom.input.call(null,{"type": "radio", "name": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(element__$1), "value": cljs.core.first.call(null,p1__85382_SHARP_), "onChange": ((function (___$1,map__85396,map__85396__$1,element__$1,vec__85391,name,element){
return (function (e){
return biomarket.utilities.set_radio_state.call(null,self__.owner,element__$1,e);
});})(___$1,map__85396,map__85396__$1,element__$1,vec__85391,name,element))
})),React.DOM.div({"className": "pure-u-1-4"},cljs.core.second.call(null,p1__85382_SHARP_)));
});})(___$1,map__85396,map__85396__$1,element__$1,vec__85391,name,element))
,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(element__$1)));
});})(vec__85391,name,element))
;

biomarket.utilities.t_biomarket$utilities85392.getBasis = ((function (vec__85391,name,element){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"in-line-radio","in-line-radio",803575522,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"element","element",-680416020,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__85383","p__85383",-1989654905,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__85391","vec__85391",-1686106936,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"meta85393","meta85393",-1083711291,null)], null);
});})(vec__85391,name,element))
;

biomarket.utilities.t_biomarket$utilities85392.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities85392.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities85392";

biomarket.utilities.t_biomarket$utilities85392.cljs$lang$ctorPrWriter = ((function (vec__85391,name,element){
return (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.utilities/t_biomarket$utilities85392");
});})(vec__85391,name,element))
;

biomarket.utilities.__GT_t_biomarket$utilities85392 = ((function (vec__85391,name,element){
return (function biomarket$utilities$in_line_radio_$___GT_t_biomarket$utilities85392(in_line_radio__$1,p__85383__$1,owner__$1,vec__85391__$1,name__$1,element__$1,meta85393){
return (new biomarket.utilities.t_biomarket$utilities85392(in_line_radio__$1,p__85383__$1,owner__$1,vec__85391__$1,name__$1,element__$1,meta85393));
});})(vec__85391,name,element))
;

}

return (new biomarket.utilities.t_biomarket$utilities85392(biomarket$utilities$in_line_radio,p__85383,owner,vec__85391,name,element,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=utilities.js.map