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
var args__26945__auto__ = [];
var len__26938__auto___42318 = arguments.length;
var i__26939__auto___42319 = (0);
while(true){
if((i__26939__auto___42319 < len__26938__auto___42318)){
args__26945__auto__.push((arguments[i__26939__auto___42319]));

var G__42320 = (i__26939__auto___42319 + (1));
i__26939__auto___42319 = G__42320;
continue;
} else {
}
break;
}

var argseq__26946__auto__ = ((((0) < args__26945__auto__.length))?(new cljs.core.IndexedSeq(args__26945__auto__.slice((0)),(0),null)):null);
return biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic(argseq__26946__auto__);
});

biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic = (function (s){
return console.log(cljs.core.apply.call(null,cljs.core.str,s));
});

biomarket.utilities.log.cljs$lang$maxFixedArity = (0);

biomarket.utilities.log.cljs$lang$applyTo = (function (seq42317){
return biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42317));
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
biomarket.utilities.error_handler = (function biomarket$utilities$error_handler(p__42321){
var map__42324 = p__42321;
var map__42324__$1 = ((((!((map__42324 == null)))?((((map__42324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42324):map__42324);
var status = cljs.core.get.call(null,map__42324__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__42324__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return biomarket.utilities.log.call(null,[cljs.core.str("Something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
biomarket.utilities.post_params = (function biomarket$utilities$post_params(url,params,handler){
return ajax.core.POST.call(null,url,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),biomarket.utilities.error_handler,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
if(typeof biomarket.utilities.loop_manager !== 'undefined'){
} else {
biomarket.utilities.loop_manager = (function (){var method_table__26793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26796__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26797__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","loop-manager"),((function (method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__,hierarchy__26797__auto__){
return (function() { 
var G__42326__delegate = function (o,d,args){
return new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(d));
};
var G__42326 = function (o,d,var_args){
var args = null;
if (arguments.length > 2) {
var G__42327__i = 0, G__42327__a = new Array(arguments.length -  2);
while (G__42327__i < G__42327__a.length) {G__42327__a[G__42327__i] = arguments[G__42327__i + 2]; ++G__42327__i;}
  args = new cljs.core.IndexedSeq(G__42327__a,0);
} 
return G__42326__delegate.call(this,o,d,args);};
G__42326.cljs$lang$maxFixedArity = 2;
G__42326.cljs$lang$applyTo = (function (arglist__42328){
var o = cljs.core.first(arglist__42328);
arglist__42328 = cljs.core.next(arglist__42328);
var d = cljs.core.first(arglist__42328);
var args = cljs.core.rest(arglist__42328);
return G__42326__delegate(o,d,args);
});
G__42326.cljs$core$IFn$_invoke$arity$variadic = G__42326__delegate;
return G__42326;
})()
;})(method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__,hierarchy__26797__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26797__auto__,method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__));
})();
}
if(typeof biomarket.utilities.broadcast_loop_manager !== 'undefined'){
} else {
biomarket.utilities.broadcast_loop_manager = (function (){var method_table__26793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26796__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26797__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","broadcast-loop-manager"),((function (method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__,hierarchy__26797__auto__){
return (function (o,d){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(d);
});})(method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__,hierarchy__26797__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26797__auto__,method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"input-update","input-update",902761778),(function() { 
var G__42332__delegate = function (owner,p__42329,_){
var map__42330 = p__42329;
var map__42330__$1 = ((((!((map__42330 == null)))?((((map__42330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42330):map__42330);
var data = cljs.core.get.call(null,map__42330__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.utilities.get_input.call(null,owner,data);
};
var G__42332 = function (owner,p__42329,var_args){
var _ = null;
if (arguments.length > 2) {
var G__42333__i = 0, G__42333__a = new Array(arguments.length -  2);
while (G__42333__i < G__42333__a.length) {G__42333__a[G__42333__i] = arguments[G__42333__i + 2]; ++G__42333__i;}
  _ = new cljs.core.IndexedSeq(G__42333__a,0);
} 
return G__42332__delegate.call(this,owner,p__42329,_);};
G__42332.cljs$lang$maxFixedArity = 2;
G__42332.cljs$lang$applyTo = (function (arglist__42334){
var owner = cljs.core.first(arglist__42334);
arglist__42334 = cljs.core.next(arglist__42334);
var p__42329 = cljs.core.first(arglist__42334);
var _ = cljs.core.rest(arglist__42334);
return G__42332__delegate(owner,p__42329,_);
});
G__42332.cljs$core$IFn$_invoke$arity$variadic = G__42332__delegate;
return G__42332;
})()
);
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"submitted","submitted",-131658962),(function (owner,p__42335,func){
var map__42336 = p__42335;
var map__42336__$1 = ((((!((map__42336 == null)))?((((map__42336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42336):map__42336);
var data = cljs.core.get.call(null,map__42336__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return func.call(null);
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"project","project",1124394579),(function (owner,p__42338){
var map__42339 = p__42338;
var map__42339__$1 = ((((!((map__42339 == null)))?((((map__42339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42339):map__42339);
var data = cljs.core.get.call(null,map__42339__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view-type","view-type",-1848894559))));
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"comment","comment",532206069),(function (owner,p__42341){
var map__42342 = p__42341;
var map__42342__$1 = ((((!((map__42342 == null)))?((((map__42342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42342):map__42342);
var data = cljs.core.get.call(null,map__42342__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.conj.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"comments","comments",-293346423)),data));
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"amend-project-status","amend-project-status",-1452060792),(function (owner,p__42346){
var map__42347 = p__42346;
var map__42347__$1 = ((((!((map__42347 == null)))?((((map__42347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42347):map__42347);
var data = cljs.core.get.call(null,map__42347__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var status__GT_view = ((function (map__42347,map__42347__$1,data){
return (function (p1__42344_SHARP_){
return new cljs.core.PersistentArrayMap(null, 5, ["open",new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),"expired",new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),"completed",new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),"active",new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),"deleted",new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533)], null).call(null,p1__42344_SHARP_);
});})(map__42347,map__42347__$1,data))
;
var cv = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814));
var projs = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983));
if(cljs.core._EQ_.call(null,cv,status__GT_view.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(data)))){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.conj.call(null,projs,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),om.core.get_state.call(null,new cljs.core.Keyword(null,"view-type","view-type",-1848894559)))));
} else {
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.remove.call(null,((function (status__GT_view,cv,projs,map__42347,map__42347__$1,data){
return (function (p1__42345_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__42345_SHARP_));
});})(status__GT_view,cv,projs,map__42347,map__42347__$1,data))
,projs));
}
}));
biomarket.utilities.pub_info = (function biomarket$utilities$pub_info(owner,topic,data){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
biomarket.utilities.register_loop = (function biomarket$utilities$register_loop(var_args){
var args42349 = [];
var len__26938__auto___42389 = arguments.length;
var i__26939__auto___42390 = (0);
while(true){
if((i__26939__auto___42390 < len__26938__auto___42389)){
args42349.push((arguments[i__26939__auto___42390]));

var G__42391 = (i__26939__auto___42390 + (1));
i__26939__auto___42390 = G__42391;
continue;
} else {
}
break;
}

var G__42351 = args42349.length;
switch (G__42351) {
case 2:
return biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42349.length)].join('')));

}
});

biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$2 = (function (owner,topic){
return biomarket.utilities.register_loop.call(null,owner,topic,biomarket.utilities.loop_manager);
});

biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$3 = (function (owner,topic,func){
var c = cljs.core.async.chan.call(null);
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var events = cljs.core.async.sub.call(null,nc,topic,c);
var c__28683__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28683__auto__,c,nc,events){
return (function (){
var f__28684__auto__ = (function (){var switch__28662__auto__ = ((function (c__28683__auto__,c,nc,events){
return (function (state_42370){
var state_val_42371 = (state_42370[(1)]);
if((state_val_42371 === (1))){
var state_42370__$1 = state_42370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42370__$1,(2),events);
} else {
if((state_val_42371 === (2))){
var inst_42353 = (state_42370[(2)]);
var inst_42354 = inst_42353;
var state_42370__$1 = (function (){var statearr_42372 = state_42370;
(statearr_42372[(7)] = inst_42354);

return statearr_42372;
})();
var statearr_42373_42393 = state_42370__$1;
(statearr_42373_42393[(2)] = null);

(statearr_42373_42393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42371 === (3))){
var inst_42354 = (state_42370[(7)]);
var inst_42356 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_42354);
var inst_42357 = cljs.core._EQ_.call(null,inst_42356,new cljs.core.Keyword(null,"end","end",-268185958));
var state_42370__$1 = state_42370;
if(inst_42357){
var statearr_42374_42394 = state_42370__$1;
(statearr_42374_42394[(1)] = (5));

} else {
var statearr_42375_42395 = state_42370__$1;
(statearr_42375_42395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42371 === (4))){
var inst_42368 = (state_42370[(2)]);
var state_42370__$1 = state_42370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42370__$1,inst_42368);
} else {
if((state_val_42371 === (5))){
var state_42370__$1 = state_42370;
var statearr_42376_42396 = state_42370__$1;
(statearr_42376_42396[(2)] = null);

(statearr_42376_42396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42371 === (6))){
var inst_42354 = (state_42370[(7)]);
var inst_42360 = func.call(null,owner,inst_42354);
var state_42370__$1 = (function (){var statearr_42377 = state_42370;
(statearr_42377[(8)] = inst_42360);

return statearr_42377;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42370__$1,(8),events);
} else {
if((state_val_42371 === (7))){
var inst_42365 = (state_42370[(2)]);
var inst_42366 = cljs.core.async.unsub.call(null,nc,topic,c);
var state_42370__$1 = (function (){var statearr_42378 = state_42370;
(statearr_42378[(9)] = inst_42365);

return statearr_42378;
})();
var statearr_42379_42397 = state_42370__$1;
(statearr_42379_42397[(2)] = inst_42366);

(statearr_42379_42397[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42371 === (8))){
var inst_42362 = (state_42370[(2)]);
var inst_42354 = inst_42362;
var state_42370__$1 = (function (){var statearr_42380 = state_42370;
(statearr_42380[(7)] = inst_42354);

return statearr_42380;
})();
var statearr_42381_42398 = state_42370__$1;
(statearr_42381_42398[(2)] = null);

(statearr_42381_42398[(1)] = (3));


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
});})(c__28683__auto__,c,nc,events))
;
return ((function (switch__28662__auto__,c__28683__auto__,c,nc,events){
return (function() {
var biomarket$utilities$state_machine__28663__auto__ = null;
var biomarket$utilities$state_machine__28663__auto____0 = (function (){
var statearr_42385 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42385[(0)] = biomarket$utilities$state_machine__28663__auto__);

(statearr_42385[(1)] = (1));

return statearr_42385;
});
var biomarket$utilities$state_machine__28663__auto____1 = (function (state_42370){
while(true){
var ret_value__28664__auto__ = (function (){try{while(true){
var result__28665__auto__ = switch__28662__auto__.call(null,state_42370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28665__auto__;
}
break;
}
}catch (e42386){if((e42386 instanceof Object)){
var ex__28666__auto__ = e42386;
var statearr_42387_42399 = state_42370;
(statearr_42387_42399[(5)] = ex__28666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42400 = state_42370;
state_42370 = G__42400;
continue;
} else {
return ret_value__28664__auto__;
}
break;
}
});
biomarket$utilities$state_machine__28663__auto__ = function(state_42370){
switch(arguments.length){
case 0:
return biomarket$utilities$state_machine__28663__auto____0.call(this);
case 1:
return biomarket$utilities$state_machine__28663__auto____1.call(this,state_42370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$utilities$state_machine__28663__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$utilities$state_machine__28663__auto____0;
biomarket$utilities$state_machine__28663__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$utilities$state_machine__28663__auto____1;
return biomarket$utilities$state_machine__28663__auto__;
})()
;})(switch__28662__auto__,c__28683__auto__,c,nc,events))
})();
var state__28685__auto__ = (function (){var statearr_42388 = f__28684__auto__.call(null);
(statearr_42388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28683__auto__);

return statearr_42388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28685__auto__);
});})(c__28683__auto__,c,nc,events))
);

return c__28683__auto__;
});

biomarket.utilities.register_loop.cljs$lang$maxFixedArity = 3;
biomarket.utilities.unsubscribe = (function biomarket$utilities$unsubscribe(var_args){
var args__26945__auto__ = [];
var len__26938__auto___42407 = arguments.length;
var i__26939__auto___42408 = (0);
while(true){
if((i__26939__auto___42408 < len__26938__auto___42407)){
args__26945__auto__.push((arguments[i__26939__auto___42408]));

var G__42409 = (i__26939__auto___42408 + (1));
i__26939__auto___42408 = G__42409;
continue;
} else {
}
break;
}

var argseq__26946__auto__ = ((((1) < args__26945__auto__.length))?(new cljs.core.IndexedSeq(args__26945__auto__.slice((1)),(0),null)):null);
return biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26946__auto__);
});

biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic = (function (owner,topics){
var pc = new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var seq__42403 = cljs.core.seq.call(null,topics);
var chunk__42404 = null;
var count__42405 = (0);
var i__42406 = (0);
while(true){
if((i__42406 < count__42405)){
var t = cljs.core._nth.call(null,chunk__42404,i__42406);
cljs.core.async.put_BANG_.call(null,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"end","end",-268185958)], null));

var G__42410 = seq__42403;
var G__42411 = chunk__42404;
var G__42412 = count__42405;
var G__42413 = (i__42406 + (1));
seq__42403 = G__42410;
chunk__42404 = G__42411;
count__42405 = G__42412;
i__42406 = G__42413;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__42403);
if(temp__4425__auto__){
var seq__42403__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42403__$1)){
var c__26679__auto__ = cljs.core.chunk_first.call(null,seq__42403__$1);
var G__42414 = cljs.core.chunk_rest.call(null,seq__42403__$1);
var G__42415 = c__26679__auto__;
var G__42416 = cljs.core.count.call(null,c__26679__auto__);
var G__42417 = (0);
seq__42403 = G__42414;
chunk__42404 = G__42415;
count__42405 = G__42416;
i__42406 = G__42417;
continue;
} else {
var t = cljs.core.first.call(null,seq__42403__$1);
cljs.core.async.put_BANG_.call(null,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"end","end",-268185958)], null));

var G__42418 = cljs.core.next.call(null,seq__42403__$1);
var G__42419 = null;
var G__42420 = (0);
var G__42421 = (0);
seq__42403 = G__42418;
chunk__42404 = G__42419;
count__42405 = G__42420;
i__42406 = G__42421;
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

biomarket.utilities.unsubscribe.cljs$lang$applyTo = (function (seq42401){
var G__42402 = cljs.core.first.call(null,seq42401);
var seq42401__$1 = cljs.core.next.call(null,seq42401);
return biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic(G__42402,seq42401__$1);
});
biomarket.utilities.register_broadcast_loop = (function biomarket$utilities$register_broadcast_loop(owner,topic,chan){
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var events = cljs.core.async.sub.call(null,nc,topic,chan);
var c__28683__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28683__auto__,nc,events){
return (function (){
var f__28684__auto__ = (function (){var switch__28662__auto__ = ((function (c__28683__auto__,nc,events){
return (function (state_42477){
var state_val_42478 = (state_42477[(1)]);
if((state_val_42478 === (1))){
var state_42477__$1 = state_42477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42477__$1,(2),events);
} else {
if((state_val_42478 === (2))){
var inst_42460 = (state_42477[(2)]);
var inst_42461 = inst_42460;
var state_42477__$1 = (function (){var statearr_42479 = state_42477;
(statearr_42479[(7)] = inst_42461);

return statearr_42479;
})();
var statearr_42480_42496 = state_42477__$1;
(statearr_42480_42496[(2)] = null);

(statearr_42480_42496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42478 === (3))){
var inst_42461 = (state_42477[(7)]);
var inst_42463 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_42461);
var inst_42464 = cljs.core._EQ_.call(null,inst_42463,new cljs.core.Keyword(null,"end","end",-268185958));
var state_42477__$1 = state_42477;
if(inst_42464){
var statearr_42481_42497 = state_42477__$1;
(statearr_42481_42497[(1)] = (5));

} else {
var statearr_42482_42498 = state_42477__$1;
(statearr_42482_42498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42478 === (4))){
var inst_42475 = (state_42477[(2)]);
var state_42477__$1 = state_42477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42477__$1,inst_42475);
} else {
if((state_val_42478 === (5))){
var state_42477__$1 = state_42477;
var statearr_42483_42499 = state_42477__$1;
(statearr_42483_42499[(2)] = null);

(statearr_42483_42499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42478 === (6))){
var inst_42461 = (state_42477[(7)]);
var inst_42467 = biomarket.utilities.broadcast_loop_manager.call(null,owner,inst_42461);
var state_42477__$1 = (function (){var statearr_42484 = state_42477;
(statearr_42484[(8)] = inst_42467);

return statearr_42484;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42477__$1,(8),events);
} else {
if((state_val_42478 === (7))){
var inst_42472 = (state_42477[(2)]);
var inst_42473 = cljs.core.async.unsub.call(null,nc,topic,chan);
var state_42477__$1 = (function (){var statearr_42485 = state_42477;
(statearr_42485[(9)] = inst_42472);

return statearr_42485;
})();
var statearr_42486_42500 = state_42477__$1;
(statearr_42486_42500[(2)] = inst_42473);

(statearr_42486_42500[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42478 === (8))){
var inst_42469 = (state_42477[(2)]);
var inst_42461 = inst_42469;
var state_42477__$1 = (function (){var statearr_42487 = state_42477;
(statearr_42487[(7)] = inst_42461);

return statearr_42487;
})();
var statearr_42488_42501 = state_42477__$1;
(statearr_42488_42501[(2)] = null);

(statearr_42488_42501[(1)] = (3));


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
});})(c__28683__auto__,nc,events))
;
return ((function (switch__28662__auto__,c__28683__auto__,nc,events){
return (function() {
var biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto__ = null;
var biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto____0 = (function (){
var statearr_42492 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42492[(0)] = biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto__);

(statearr_42492[(1)] = (1));

return statearr_42492;
});
var biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto____1 = (function (state_42477){
while(true){
var ret_value__28664__auto__ = (function (){try{while(true){
var result__28665__auto__ = switch__28662__auto__.call(null,state_42477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28665__auto__;
}
break;
}
}catch (e42493){if((e42493 instanceof Object)){
var ex__28666__auto__ = e42493;
var statearr_42494_42502 = state_42477;
(statearr_42494_42502[(5)] = ex__28666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42503 = state_42477;
state_42477 = G__42503;
continue;
} else {
return ret_value__28664__auto__;
}
break;
}
});
biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto__ = function(state_42477){
switch(arguments.length){
case 0:
return biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto____0.call(this);
case 1:
return biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto____1.call(this,state_42477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto____0;
biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto____1;
return biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto__;
})()
;})(switch__28662__auto__,c__28683__auto__,nc,events))
})();
var state__28685__auto__ = (function (){var statearr_42495 = f__28684__auto__.call(null);
(statearr_42495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28683__auto__);

return statearr_42495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28685__auto__);
});})(c__28683__auto__,nc,events))
);

return c__28683__auto__;
});
biomarket.utilities.unsub_broadcast_loop = (function biomarket$utilities$unsub_broadcast_loop(owner,topic,chan){
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
return cljs.core.async.unsub.call(null,nc,topic,chan);
});
biomarket.utilities.show_default = (function biomarket$utilities$show_default(_,owner){
if(typeof biomarket.utilities.t_biomarket$utilities42507 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities42507 = (function (show_default,_,owner,meta42508){
this.show_default = show_default;
this._ = _;
this.owner = owner;
this.meta42508 = meta42508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities42507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42509,meta42508__$1){
var self__ = this;
var _42509__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities42507(self__.show_default,self__._,self__.owner,meta42508__$1));
});

biomarket.utilities.t_biomarket$utilities42507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42509){
var self__ = this;
var _42509__$1 = this;
return self__.meta42508;
});

biomarket.utilities.t_biomarket$utilities42507.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities42507.prototype.om$core$IRender$render$arity$1 = (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
return React.DOM.div(null);
});

biomarket.utilities.t_biomarket$utilities42507.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-default","show-default",-609967859,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta42508","meta42508",-1376814631,null)], null);
});

biomarket.utilities.t_biomarket$utilities42507.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities42507.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities42507";

biomarket.utilities.t_biomarket$utilities42507.cljs$lang$ctorPrWriter = (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities42507");
});

biomarket.utilities.__GT_t_biomarket$utilities42507 = (function biomarket$utilities$show_default_$___GT_t_biomarket$utilities42507(show_default__$1,___$1,owner__$1,meta42508){
return (new biomarket.utilities.t_biomarket$utilities42507(show_default__$1,___$1,owner__$1,meta42508));
});

}

return (new biomarket.utilities.t_biomarket$utilities42507(biomarket$utilities$show_default,_,owner,null));
});
biomarket.utilities.bottom_skel = (function biomarket$utilities$bottom_skel(p__42510,owner){
var map__42521 = p__42510;
var map__42521__$1 = ((((!((map__42521 == null)))?((((map__42521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42521):map__42521);
var project = map__42521__$1;
var links = cljs.core.get.call(null,map__42521__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var widget = cljs.core.get.call(null,map__42521__$1,new cljs.core.Keyword(null,"widget","widget",-853968943));
if(typeof biomarket.utilities.t_biomarket$utilities42523 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities42523 = (function (bottom_skel,p__42510,owner,map__42521,project,links,widget,meta42524){
this.bottom_skel = bottom_skel;
this.p__42510 = p__42510;
this.owner = owner;
this.map__42521 = map__42521;
this.project = project;
this.links = links;
this.widget = widget;
this.meta42524 = meta42524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities42523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__42521,map__42521__$1,project,links,widget){
return (function (_42525,meta42524__$1){
var self__ = this;
var _42525__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities42523(self__.bottom_skel,self__.p__42510,self__.owner,self__.map__42521,self__.project,self__.links,self__.widget,meta42524__$1));
});})(map__42521,map__42521__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities42523.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__42521,map__42521__$1,project,links,widget){
return (function (_42525){
var self__ = this;
var _42525__$1 = this;
return self__.meta42524;
});})(map__42521,map__42521__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities42523.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities42523.prototype.om$core$IRender$render$arity$1 = ((function (map__42521,map__42521__$1,project,links,widget){
return (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
var visible = new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(self__.project);
return React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,((function (visible,this__28842__auto____$1,map__42521,map__42521__$1,project,links,widget){
return (function (p__42526){
var vec__42527 = p__42526;
var tag = cljs.core.nth.call(null,vec__42527,(0),null);
var ele = cljs.core.nth.call(null,vec__42527,(1),null);
return React.DOM.a({"className": ((cljs.core._EQ_.call(null,visible,tag))?"btn btn-default btn-sm active":"btn btn-default btn-sm"), "onClick": ((function (vec__42527,tag,ele,visible,this__28842__auto____$1,map__42521,map__42521__$1,project,links,widget){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"show-bottom","show-bottom",-1162121528),new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),((cljs.core._EQ_.call(null,visible,tag))?new cljs.core.Keyword(null,"default","default",-1987822328):tag)], null));
});})(vec__42527,tag,ele,visible,this__28842__auto____$1,map__42521,map__42521__$1,project,links,widget))
},cljs.core.first.call(null,ele));
});})(visible,this__28842__auto____$1,map__42521,map__42521__$1,project,links,widget))
,self__.links)))),(function (){var pred__42528 = cljs.core._EQ_;
var expr__42529 = visible;
if(cljs.core.truth_(pred__42528.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),expr__42529))){
return React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},om.core.build.call(null,biomarket.utilities.show_default,null)));
} else {
return om.core.build.call(null,cljs.core.second.call(null,visible.call(null,self__.links)),((cljs.core.seq.call(null,cljs.core.drop.call(null,(2),visible.call(null,self__.links))))?cljs.core.vec.call(null,cljs.core.cons.call(null,self__.project,cljs.core.drop.call(null,(2),visible.call(null,self__.links)))):self__.project));
}
})());
});})(map__42521,map__42521__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities42523.getBasis = ((function (map__42521,map__42521__$1,project,links,widget){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bottom-skel","bottom-skel",24371686,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"widget","widget",786562584,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"project","project",-1530041190,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__42510","p__42510",373046414,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__42521","map__42521",1361125421,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"widget","widget",786562584,null),new cljs.core.Symbol(null,"meta42524","meta42524",1440868612,null)], null);
});})(map__42521,map__42521__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities42523.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities42523.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities42523";

biomarket.utilities.t_biomarket$utilities42523.cljs$lang$ctorPrWriter = ((function (map__42521,map__42521__$1,project,links,widget){
return (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities42523");
});})(map__42521,map__42521__$1,project,links,widget))
;

biomarket.utilities.__GT_t_biomarket$utilities42523 = ((function (map__42521,map__42521__$1,project,links,widget){
return (function biomarket$utilities$bottom_skel_$___GT_t_biomarket$utilities42523(bottom_skel__$1,p__42510__$1,owner__$1,map__42521__$2,project__$1,links__$1,widget__$1,meta42524){
return (new biomarket.utilities.t_biomarket$utilities42523(bottom_skel__$1,p__42510__$1,owner__$1,map__42521__$2,project__$1,links__$1,widget__$1,meta42524));
});})(map__42521,map__42521__$1,project,links,widget))
;

}

return (new biomarket.utilities.t_biomarket$utilities42523(biomarket$utilities$bottom_skel,p__42510,owner,map__42521__$1,project,links,widget,null));
});
if(typeof biomarket.utilities.bottom !== 'undefined'){
} else {
biomarket.utilities.bottom = (function (){var method_table__26793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26796__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26797__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","bottom"),((function (method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__,hierarchy__26797__auto__){
return (function (p){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(p);
});})(method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__,hierarchy__26797__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26797__auto__,method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__));
})();
}
biomarket.utilities.split_projects = (function biomarket$utilities$split_projects(projects){
var pn = cljs.core.count.call(null,projects);
var n = ((cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,pn,(2))))?cljs.core.quot.call(null,pn,(2)):((1) + cljs.core.quot.call(null,pn,(2))));
return cljs.core.partition_all.call(null,n,projects);
});
biomarket.utilities.color_span = (function biomarket$utilities$color_span(text,color){
return React.DOM.span({"style": {"color": color, "font-weight": "bold"}},text);
});
biomarket.utilities.more_less_text = (function biomarket$utilities$more_less_text(text,owner){
if(typeof biomarket.utilities.t_biomarket$utilities42540 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities42540 = (function (more_less_text,text,owner,meta42541){
this.more_less_text = more_less_text;
this.text = text;
this.owner = owner;
this.meta42541 = meta42541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities42540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42542,meta42541__$1){
var self__ = this;
var _42542__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities42540(self__.more_less_text,self__.text,self__.owner,meta42541__$1));
});

biomarket.utilities.t_biomarket$utilities42540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42542){
var self__ = this;
var _42542__$1 = this;
return self__.meta42541;
});

biomarket.utilities.t_biomarket$utilities42540.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities42540.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"less","less",-428869198)], null);
});

biomarket.utilities.t_biomarket$utilities42540.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities42540.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__42543){
var self__ = this;
var map__42544 = p__42543;
var map__42544__$1 = ((((!((map__42544 == null)))?((((map__42544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42544):map__42544);
var showing = cljs.core.get.call(null,map__42544__$1,new cljs.core.Keyword(null,"showing","showing",798009604));
var ___$1 = this;
return React.DOM.div(null,(((cljs.core.count.call(null,self__.text) < (400)))?React.DOM.div(null,self__.text):(function (){var pred__42546 = cljs.core._EQ_;
var expr__42547 = showing;
if(cljs.core.truth_(pred__42546.call(null,new cljs.core.Keyword(null,"less","less",-428869198),expr__42547))){
return React.DOM.div(null,React.DOM.span({"style": {"white-space": "pre-line"}},[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(300),self__.text))),cljs.core.str(" ... ")].join('')),React.DOM.a({"onClick": ((function (pred__42546,expr__42547,___$1,map__42544,map__42544__$1,showing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"more","more",-2058821800));
});})(pred__42546,expr__42547,___$1,map__42544,map__42544__$1,showing))
, "className": "flinka"}," More"));
} else {
if(cljs.core.truth_(pred__42546.call(null,new cljs.core.Keyword(null,"more","more",-2058821800),expr__42547))){
return React.DOM.div(null,React.DOM.span({"style": {"white-space": "pre-line"}},self__.text),React.DOM.a({"onClick": ((function (pred__42546,expr__42547,___$1,map__42544,map__42544__$1,showing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"less","less",-428869198));
});})(pred__42546,expr__42547,___$1,map__42544,map__42544__$1,showing))
, "className": "flinka"}," Less"));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__42547)].join('')));
}
}
})()));
});

biomarket.utilities.t_biomarket$utilities42540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"more-less-text","more-less-text",-1737643469,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta42541","meta42541",1059321139,null)], null);
});

biomarket.utilities.t_biomarket$utilities42540.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities42540.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities42540";

biomarket.utilities.t_biomarket$utilities42540.cljs$lang$ctorPrWriter = (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities42540");
});

biomarket.utilities.__GT_t_biomarket$utilities42540 = (function biomarket$utilities$more_less_text_$___GT_t_biomarket$utilities42540(more_less_text__$1,text__$1,owner__$1,meta42541){
return (new biomarket.utilities.t_biomarket$utilities42540(more_less_text__$1,text__$1,owner__$1,meta42541));
});

}

return (new biomarket.utilities.t_biomarket$utilities42540(biomarket$utilities$more_less_text,text,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.utilities.control_buttons = (function biomarket$utilities$control_buttons(inputs,owner){
if(typeof biomarket.utilities.t_biomarket$utilities42553 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities42553 = (function (control_buttons,inputs,owner,meta42554){
this.control_buttons = control_buttons;
this.inputs = inputs;
this.owner = owner;
this.meta42554 = meta42554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities42553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42555,meta42554__$1){
var self__ = this;
var _42555__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities42553(self__.control_buttons,self__.inputs,self__.owner,meta42554__$1));
});

biomarket.utilities.t_biomarket$utilities42553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42555){
var self__ = this;
var _42555__$1 = this;
return self__.meta42554;
});

biomarket.utilities.t_biomarket$utilities42553.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities42553.prototype.om$core$IRender$render$arity$1 = (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
return React.DOM.div({"className": "panel panel-default"},cljs.core.apply.call(null,om.dom.div,{"className": "panel-heading"},cljs.core.map.call(null,((function (this__28842__auto____$1){
return (function (p1__42549_SHARP_){
return React.DOM.a({"className": "btn btn-default", "onClick": cljs.core.second.call(null,p1__42549_SHARP_)},cljs.core.first.call(null,p1__42549_SHARP_));
});})(this__28842__auto____$1))
,self__.inputs)));
});

biomarket.utilities.t_biomarket$utilities42553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"control-buttons","control-buttons",285817705,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta42554","meta42554",-1824051050,null)], null);
});

biomarket.utilities.t_biomarket$utilities42553.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities42553.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities42553";

biomarket.utilities.t_biomarket$utilities42553.cljs$lang$ctorPrWriter = (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities42553");
});

biomarket.utilities.__GT_t_biomarket$utilities42553 = (function biomarket$utilities$control_buttons_$___GT_t_biomarket$utilities42553(control_buttons__$1,inputs__$1,owner__$1,meta42554){
return (new biomarket.utilities.t_biomarket$utilities42553(control_buttons__$1,inputs__$1,owner__$1,meta42554));
});

}

return (new biomarket.utilities.t_biomarket$utilities42553(biomarket$utilities$control_buttons,inputs,owner,null));
});
biomarket.utilities.menu_item = (function biomarket$utilities$menu_item(p__42556,owner){
var vec__42561 = p__42556;
var text = cljs.core.nth.call(null,vec__42561,(0),null);
var topic = cljs.core.nth.call(null,vec__42561,(1),null);
var tag = cljs.core.nth.call(null,vec__42561,(2),null);
var current = cljs.core.nth.call(null,vec__42561,(3),null);
if(typeof biomarket.utilities.t_biomarket$utilities42562 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities42562 = (function (menu_item,p__42556,owner,vec__42561,text,topic,tag,current,meta42563){
this.menu_item = menu_item;
this.p__42556 = p__42556;
this.owner = owner;
this.vec__42561 = vec__42561;
this.text = text;
this.topic = topic;
this.tag = tag;
this.current = current;
this.meta42563 = meta42563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities42562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__42561,text,topic,tag,current){
return (function (_42564,meta42563__$1){
var self__ = this;
var _42564__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities42562(self__.menu_item,self__.p__42556,self__.owner,self__.vec__42561,self__.text,self__.topic,self__.tag,self__.current,meta42563__$1));
});})(vec__42561,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities42562.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__42561,text,topic,tag,current){
return (function (_42564){
var self__ = this;
var _42564__$1 = this;
return self__.meta42563;
});})(vec__42561,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities42562.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities42562.prototype.om$core$IRender$render$arity$1 = ((function (vec__42561,text,topic,tag,current){
return (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
return React.DOM.li({"className": ((cljs.core._EQ_.call(null,self__.current,self__.topic))?"active":null), "role": "presentation"},React.DOM.a({"onClick": ((function (this__28842__auto____$1,vec__42561,text,topic,tag,current){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.tag,self__.topic);
});})(this__28842__auto____$1,vec__42561,text,topic,tag,current))
, "style": {"cursor": "pointer"}},self__.text));
});})(vec__42561,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities42562.getBasis = ((function (vec__42561,text,topic,tag,current){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"current","current",552492924,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__42556","p__42556",-1170831598,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__42561","vec__42561",-2084677704,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"meta42563","meta42563",-1966549997,null)], null);
});})(vec__42561,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities42562.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities42562.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities42562";

biomarket.utilities.t_biomarket$utilities42562.cljs$lang$ctorPrWriter = ((function (vec__42561,text,topic,tag,current){
return (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities42562");
});})(vec__42561,text,topic,tag,current))
;

biomarket.utilities.__GT_t_biomarket$utilities42562 = ((function (vec__42561,text,topic,tag,current){
return (function biomarket$utilities$menu_item_$___GT_t_biomarket$utilities42562(menu_item__$1,p__42556__$1,owner__$1,vec__42561__$1,text__$1,topic__$1,tag__$1,current__$1,meta42563){
return (new biomarket.utilities.t_biomarket$utilities42562(menu_item__$1,p__42556__$1,owner__$1,vec__42561__$1,text__$1,topic__$1,tag__$1,current__$1,meta42563));
});})(vec__42561,text,topic,tag,current))
;

}

return (new biomarket.utilities.t_biomarket$utilities42562(biomarket$utilities$menu_item,p__42556,owner,vec__42561,text,topic,tag,current,null));
});
biomarket.utilities.top_navigation = (function biomarket$utilities$top_navigation(p__42566,owner){
var vec__42571 = p__42566;
var current = cljs.core.nth.call(null,vec__42571,(0),null);
var inputs = cljs.core.nth.call(null,vec__42571,(1),null);
var nav_tag = cljs.core.nth.call(null,vec__42571,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities42572 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities42572 = (function (top_navigation,p__42566,owner,vec__42571,current,inputs,nav_tag,meta42573){
this.top_navigation = top_navigation;
this.p__42566 = p__42566;
this.owner = owner;
this.vec__42571 = vec__42571;
this.current = current;
this.inputs = inputs;
this.nav_tag = nav_tag;
this.meta42573 = meta42573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities42572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__42571,current,inputs,nav_tag){
return (function (_42574,meta42573__$1){
var self__ = this;
var _42574__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities42572(self__.top_navigation,self__.p__42566,self__.owner,self__.vec__42571,self__.current,self__.inputs,self__.nav_tag,meta42573__$1));
});})(vec__42571,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities42572.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__42571,current,inputs,nav_tag){
return (function (_42574){
var self__ = this;
var _42574__$1 = this;
return self__.meta42573;
});})(vec__42571,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities42572.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities42572.prototype.om$core$IRender$render$arity$1 = ((function (vec__42571,current,inputs,nav_tag){
return (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
return React.DOM.div({"role": "navigation"},cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-pills nav-justified"},cljs.core.map.call(null,((function (this__28842__auto____$1,vec__42571,current,inputs,nav_tag){
return (function (p1__42565_SHARP_){
return om.core.build.call(null,biomarket.utilities.menu_item,cljs.core.concat.call(null,p1__42565_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nav_tag,self__.current], null)));
});})(this__28842__auto____$1,vec__42571,current,inputs,nav_tag))
,self__.inputs)));
});})(vec__42571,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities42572.getBasis = ((function (vec__42571,current,inputs,nav_tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"top-navigation","top-navigation",-1053916026,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__42566","p__42566",342219894,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__42571","vec__42571",-2048896786,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"meta42573","meta42573",1042719626,null)], null);
});})(vec__42571,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities42572.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities42572.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities42572";

biomarket.utilities.t_biomarket$utilities42572.cljs$lang$ctorPrWriter = ((function (vec__42571,current,inputs,nav_tag){
return (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities42572");
});})(vec__42571,current,inputs,nav_tag))
;

biomarket.utilities.__GT_t_biomarket$utilities42572 = ((function (vec__42571,current,inputs,nav_tag){
return (function biomarket$utilities$top_navigation_$___GT_t_biomarket$utilities42572(top_navigation__$1,p__42566__$1,owner__$1,vec__42571__$1,current__$1,inputs__$1,nav_tag__$1,meta42573){
return (new biomarket.utilities.t_biomarket$utilities42572(top_navigation__$1,p__42566__$1,owner__$1,vec__42571__$1,current__$1,inputs__$1,nav_tag__$1,meta42573));
});})(vec__42571,current,inputs,nav_tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities42572(biomarket$utilities$top_navigation,p__42566,owner,vec__42571,current,inputs,nav_tag,null));
});
biomarket.utilities.padded_button = (function biomarket$utilities$padded_button(p__42575,owner){
var vec__42580 = p__42575;
var padding = cljs.core.nth.call(null,vec__42580,(0),null);
var value = cljs.core.nth.call(null,vec__42580,(1),null);
var func = cljs.core.nth.call(null,vec__42580,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities42581 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities42581 = (function (padded_button,p__42575,owner,vec__42580,padding,value,func,meta42582){
this.padded_button = padded_button;
this.p__42575 = p__42575;
this.owner = owner;
this.vec__42580 = vec__42580;
this.padding = padding;
this.value = value;
this.func = func;
this.meta42582 = meta42582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities42581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__42580,padding,value,func){
return (function (_42583,meta42582__$1){
var self__ = this;
var _42583__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities42581(self__.padded_button,self__.p__42575,self__.owner,self__.vec__42580,self__.padding,self__.value,self__.func,meta42582__$1));
});})(vec__42580,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities42581.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__42580,padding,value,func){
return (function (_42583){
var self__ = this;
var _42583__$1 = this;
return self__.meta42582;
});})(vec__42580,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities42581.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities42581.prototype.om$core$IRender$render$arity$1 = ((function (vec__42580,padding,value,func){
return (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
return React.DOM.div({"style": {"padding": self__.padding}},(cljs.core.truth_(self__.func)?React.DOM.button({"className": "pure-button pure-button-primary", "onClick": self__.func},self__.value):React.DOM.button({"className": "pure-button pure-button-primary"},self__.value)));
});})(vec__42580,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities42581.getBasis = ((function (vec__42580,padding,value,func){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"padded-button","padded-button",875344236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__42575","p__42575",-575180044,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__42580","vec__42580",-1748034117,null),new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"meta42582","meta42582",-2143370276,null)], null);
});})(vec__42580,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities42581.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities42581.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities42581";

biomarket.utilities.t_biomarket$utilities42581.cljs$lang$ctorPrWriter = ((function (vec__42580,padding,value,func){
return (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities42581");
});})(vec__42580,padding,value,func))
;

biomarket.utilities.__GT_t_biomarket$utilities42581 = ((function (vec__42580,padding,value,func){
return (function biomarket$utilities$padded_button_$___GT_t_biomarket$utilities42581(padded_button__$1,p__42575__$1,owner__$1,vec__42580__$1,padding__$1,value__$1,func__$1,meta42582){
return (new biomarket.utilities.t_biomarket$utilities42581(padded_button__$1,p__42575__$1,owner__$1,vec__42580__$1,padding__$1,value__$1,func__$1,meta42582));
});})(vec__42580,padding,value,func))
;

}

return (new biomarket.utilities.t_biomarket$utilities42581(biomarket$utilities$padded_button,p__42575,owner,vec__42580,padding,value,func,null));
});
biomarket.utilities.padded_button_disabled = (function biomarket$utilities$padded_button_disabled(p__42584,owner){
var vec__42589 = p__42584;
var padding = cljs.core.nth.call(null,vec__42589,(0),null);
var value = cljs.core.nth.call(null,vec__42589,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities42590 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities42590 = (function (padded_button_disabled,p__42584,owner,vec__42589,padding,value,meta42591){
this.padded_button_disabled = padded_button_disabled;
this.p__42584 = p__42584;
this.owner = owner;
this.vec__42589 = vec__42589;
this.padding = padding;
this.value = value;
this.meta42591 = meta42591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities42590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__42589,padding,value){
return (function (_42592,meta42591__$1){
var self__ = this;
var _42592__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities42590(self__.padded_button_disabled,self__.p__42584,self__.owner,self__.vec__42589,self__.padding,self__.value,meta42591__$1));
});})(vec__42589,padding,value))
;

biomarket.utilities.t_biomarket$utilities42590.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__42589,padding,value){
return (function (_42592){
var self__ = this;
var _42592__$1 = this;
return self__.meta42591;
});})(vec__42589,padding,value))
;

biomarket.utilities.t_biomarket$utilities42590.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities42590.prototype.om$core$IRender$render$arity$1 = ((function (vec__42589,padding,value){
return (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
return React.DOM.div({"style": {"padding": self__.padding}},React.DOM.button({"className": "pure-button pure-button-primary", "disabled": "true"},self__.value));
});})(vec__42589,padding,value))
;

biomarket.utilities.t_biomarket$utilities42590.getBasis = ((function (vec__42589,padding,value){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"padded-button-disabled","padded-button-disabled",1594106929,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__42584","p__42584",-950902565,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__42589","vec__42589",-273479188,null),new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"meta42591","meta42591",-764402371,null)], null);
});})(vec__42589,padding,value))
;

biomarket.utilities.t_biomarket$utilities42590.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities42590.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities42590";

biomarket.utilities.t_biomarket$utilities42590.cljs$lang$ctorPrWriter = ((function (vec__42589,padding,value){
return (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities42590");
});})(vec__42589,padding,value))
;

biomarket.utilities.__GT_t_biomarket$utilities42590 = ((function (vec__42589,padding,value){
return (function biomarket$utilities$padded_button_disabled_$___GT_t_biomarket$utilities42590(padded_button_disabled__$1,p__42584__$1,owner__$1,vec__42589__$1,padding__$1,value__$1,meta42591){
return (new biomarket.utilities.t_biomarket$utilities42590(padded_button_disabled__$1,p__42584__$1,owner__$1,vec__42589__$1,padding__$1,value__$1,meta42591));
});})(vec__42589,padding,value))
;

}

return (new biomarket.utilities.t_biomarket$utilities42590(biomarket$utilities$padded_button_disabled,p__42584,owner,vec__42589,padding,value,null));
});
biomarket.utilities.waiting = (function biomarket$utilities$waiting(_,owner){
if(typeof biomarket.utilities.t_biomarket$utilities42596 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities42596 = (function (waiting,_,owner,meta42597){
this.waiting = waiting;
this._ = _;
this.owner = owner;
this.meta42597 = meta42597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities42596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42598,meta42597__$1){
var self__ = this;
var _42598__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities42596(self__.waiting,self__._,self__.owner,meta42597__$1));
});

biomarket.utilities.t_biomarket$utilities42596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42598){
var self__ = this;
var _42598__$1 = this;
return self__.meta42597;
});

biomarket.utilities.t_biomarket$utilities42596.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities42596.prototype.om$core$IRender$render$arity$1 = (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
return React.DOM.div({"style": {"position": "absolute", "top": "50%", "left": "50%", "-webkit-animation": "fadein 2s", "-moz-animation": "fadein 2s", "-ms-animation": "fadein 2s", "-o-animation": "fadein 2s", "animation": "fadein 2s"}},React.DOM.i({"className": "fa fa-refresh fa-spin fa-5x fa-fw"}));
});

biomarket.utilities.t_biomarket$utilities42596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"waiting","waiting",-1758529034,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta42597","meta42597",-1278265504,null)], null);
});

biomarket.utilities.t_biomarket$utilities42596.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities42596.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities42596";

biomarket.utilities.t_biomarket$utilities42596.cljs$lang$ctorPrWriter = (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities42596");
});

biomarket.utilities.__GT_t_biomarket$utilities42596 = (function biomarket$utilities$waiting_$___GT_t_biomarket$utilities42596(waiting__$1,___$1,owner__$1,meta42597){
return (new biomarket.utilities.t_biomarket$utilities42596(waiting__$1,___$1,owner__$1,meta42597));
});

}

return (new biomarket.utilities.t_biomarket$utilities42596(biomarket$utilities$waiting,_,owner,null));
});
biomarket.utilities.make_a_table = (function biomarket$utilities$make_a_table(p__42601,owner){
var map__42607 = p__42601;
var map__42607__$1 = ((((!((map__42607 == null)))?((((map__42607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42607):map__42607);
var data = cljs.core.get.call(null,map__42607__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var tparam = cljs.core.get.call(null,map__42607__$1,new cljs.core.Keyword(null,"tparam","tparam",1161386584));
if(typeof biomarket.utilities.t_biomarket$utilities42609 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities42609 = (function (make_a_table,p__42601,owner,map__42607,data,tparam,meta42610){
this.make_a_table = make_a_table;
this.p__42601 = p__42601;
this.owner = owner;
this.map__42607 = map__42607;
this.data = data;
this.tparam = tparam;
this.meta42610 = meta42610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities42609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__42607,map__42607__$1,data,tparam){
return (function (_42611,meta42610__$1){
var self__ = this;
var _42611__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities42609(self__.make_a_table,self__.p__42601,self__.owner,self__.map__42607,self__.data,self__.tparam,meta42610__$1));
});})(map__42607,map__42607__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities42609.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__42607,map__42607__$1,data,tparam){
return (function (_42611){
var self__ = this;
var _42611__$1 = this;
return self__.meta42610;
});})(map__42607,map__42607__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities42609.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities42609.prototype.om$core$IRender$render$arity$1 = ((function (map__42607,map__42607__$1,data,tparam){
return (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
var tjs = cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"table",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px"], null)], null),self__.tparam));
return React.DOM.div({"style": {"background-color": "white"}},React.DOM.table(tjs,React.DOM.thead(null,cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (tjs,this__28842__auto____$1,map__42607,map__42607__$1,data,tparam){
return (function (p1__42599_SHARP_){
return React.DOM.th({"style": {"text-align": "center"}},p1__42599_SHARP_);
});})(tjs,this__28842__auto____$1,map__42607,map__42607__$1,data,tparam))
,cljs.core.keys.call(null,cljs.core.first.call(null,self__.data))))),cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.map.call(null,((function (tjs,this__28842__auto____$1,map__42607,map__42607__$1,data,tparam){
return (function (x){
return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (tjs,this__28842__auto____$1,map__42607,map__42607__$1,data,tparam){
return (function (p1__42600_SHARP_){
return React.DOM.td({"style": {"text-align": "center"}},p1__42600_SHARP_);
});})(tjs,this__28842__auto____$1,map__42607,map__42607__$1,data,tparam))
,cljs.core.vals.call(null,x)));
});})(tjs,this__28842__auto____$1,map__42607,map__42607__$1,data,tparam))
,self__.data))));
});})(map__42607,map__42607__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities42609.getBasis = ((function (map__42607,map__42607__$1,data,tparam){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-a-table","make-a-table",-346613799,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__42601","p__42601",2144512081,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__42607","map__42607",-502657607,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null),new cljs.core.Symbol(null,"meta42610","meta42610",-1170218345,null)], null);
});})(map__42607,map__42607__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities42609.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities42609.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities42609";

biomarket.utilities.t_biomarket$utilities42609.cljs$lang$ctorPrWriter = ((function (map__42607,map__42607__$1,data,tparam){
return (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities42609");
});})(map__42607,map__42607__$1,data,tparam))
;

biomarket.utilities.__GT_t_biomarket$utilities42609 = ((function (map__42607,map__42607__$1,data,tparam){
return (function biomarket$utilities$make_a_table_$___GT_t_biomarket$utilities42609(make_a_table__$1,p__42601__$1,owner__$1,map__42607__$2,data__$1,tparam__$1,meta42610){
return (new biomarket.utilities.t_biomarket$utilities42609(make_a_table__$1,p__42601__$1,owner__$1,map__42607__$2,data__$1,tparam__$1,meta42610));
});})(map__42607,map__42607__$1,data,tparam))
;

}

return (new biomarket.utilities.t_biomarket$utilities42609(biomarket$utilities$make_a_table,p__42601,owner,map__42607__$1,data,tparam,null));
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
biomarket.utilities.get_input = (function (){var method_table__26793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26796__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26797__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","get-input"),((function (method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__,hierarchy__26797__auto__){
return (function() { 
var G__42615__delegate = function (owner,p__42612,args){
var map__42613 = p__42612;
var map__42613__$1 = ((((!((map__42613 == null)))?((((map__42613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42613):map__42613);
var fname = cljs.core.get.call(null,map__42613__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__42613__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return fname;
};
var G__42615 = function (owner,p__42612,var_args){
var args = null;
if (arguments.length > 2) {
var G__42616__i = 0, G__42616__a = new Array(arguments.length -  2);
while (G__42616__i < G__42616__a.length) {G__42616__a[G__42616__i] = arguments[G__42616__i + 2]; ++G__42616__i;}
  args = new cljs.core.IndexedSeq(G__42616__a,0);
} 
return G__42615__delegate.call(this,owner,p__42612,args);};
G__42615.cljs$lang$maxFixedArity = 2;
G__42615.cljs$lang$applyTo = (function (arglist__42617){
var owner = cljs.core.first(arglist__42617);
arglist__42617 = cljs.core.next(arglist__42617);
var p__42612 = cljs.core.first(arglist__42617);
var args = cljs.core.rest(arglist__42617);
return G__42615__delegate(owner,p__42612,args);
});
G__42615.cljs$core$IFn$_invoke$arity$variadic = G__42615__delegate;
return G__42615;
})()
;})(method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__,hierarchy__26797__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26797__auto__,method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.get_input,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__42626 = null;
var G__42626__2 = (function (owner,p__42618){
var map__42620 = p__42618;
var map__42620__$1 = ((((!((map__42620 == null)))?((((map__42620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42620):map__42620);
var m = map__42620__$1;
var fname = cljs.core.get.call(null,map__42620__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__42620__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return biomarket.utilities.get_input.call(null,owner,m,new cljs.core.Keyword(null,"inputs","inputs",865803858));
});
var G__42626__3 = (function (owner,p__42619,param_name){
var map__42622 = p__42619;
var map__42622__$1 = ((((!((map__42622 == null)))?((((map__42622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42622):map__42622);
var fname = cljs.core.get.call(null,map__42622__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__42622__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var inputs = om.core.get_state.call(null,owner,param_name);
var iv = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (inputs,map__42622,map__42622__$1,fname,element){
return (function (p__42624){
var vec__42625 = p__42624;
var k = cljs.core.nth.call(null,vec__42625,(0),null);
var v = cljs.core.nth.call(null,vec__42625,(1),null);
if(cljs.core.not.call(null,k.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element)))){
return v;
} else {
return null;
}
});})(inputs,map__42622,map__42622__$1,fname,element))
,new cljs.core.Keyword(null,"tests","tests",-1041085625).cljs$core$IFn$_invoke$arity$1(element))));
return om.core.set_state_BANG_.call(null,owner,param_name,cljs.core.assoc.call(null,om.core.get_state.call(null,owner,param_name),fname,cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"invalid","invalid",412869516),iv)));
});
G__42626 = function(owner,p__42619,param_name){
switch(arguments.length){
case 2:
return G__42626__2.call(this,owner,p__42619);
case 3:
return G__42626__3.call(this,owner,p__42619,param_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42626.cljs$core$IFn$_invoke$arity$2 = G__42626__2;
G__42626.cljs$core$IFn$_invoke$arity$3 = G__42626__3;
return G__42626;
})()
);
if(typeof biomarket.utilities.clean_input !== 'undefined'){
} else {
biomarket.utilities.clean_input = (function (){var method_table__26793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26796__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26797__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","clean-input"),((function (method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__,hierarchy__26797__auto__){
return (function (element,classes,oc){
return new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(element);
});})(method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__,hierarchy__26797__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26797__auto__,method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__));
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
var x__26702__auto__ = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(classes),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)));
return cljs.core._conj.call(null,(function (){var x__26702__auto____$1 = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spid","spid",1854581004).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.Keyword(null,"className","className",-1983287057),"sr-only"], null)),new cljs.core.Keyword(null,"fb","fb",-1331669322).cljs$core$IFn$_invoke$arity$1(classes));
return cljs.core._conj.call(null,(function (){var x__26702__auto____$2 = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"help-block"], null)),new cljs.core.Keyword(null,"fb","fb",-1331669322).cljs$core$IFn$_invoke$arity$1(classes));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26702__auto____$2);
})(),x__26702__auto____$1);
})(),x__26702__auto__);
});
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"addon","addon",931813532),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26702__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26702__auto__);
})(),(function (){var x__26702__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
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
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26702__auto__);
})(),biomarket.utilities.icons.call(null,element,classes)));
}));
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"no-icon","no-icon",-1734606666),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26702__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26702__auto__);
})(),(function (){var x__26702__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
if(cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element))){
return om.dom.textarea.call(null,js);
} else {
return om.dom.input.call(null,js);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26702__auto__);
})()));
}));
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"default","default",-1987822328),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26702__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26702__auto__);
})(),(function (){var x__26702__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
if(cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element))){
return om.dom.textarea.call(null,js);
} else {
return om.dom.input.call(null,js);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26702__auto__);
})(),biomarket.utilities.icons.call(null,element,classes)));
}));
biomarket.utilities.the_input = (function biomarket$utilities$the_input(js,owner){
if(typeof biomarket.utilities.t_biomarket$utilities42630 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities42630 = (function (the_input,js,owner,meta42631){
this.the_input = the_input;
this.js = js;
this.owner = owner;
this.meta42631 = meta42631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities42630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42632,meta42631__$1){
var self__ = this;
var _42632__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities42630(self__.the_input,self__.js,self__.owner,meta42631__$1));
});

biomarket.utilities.t_biomarket$utilities42630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42632){
var self__ = this;
var _42632__$1 = this;
return self__.meta42631;
});

biomarket.utilities.t_biomarket$utilities42630.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities42630.prototype.om$core$IRender$render$arity$1 = (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
return cljs.core.apply.call(null,om.dom.div,self__.js);
});

biomarket.utilities.t_biomarket$utilities42630.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"the-input","the-input",1976764503,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta42631","meta42631",392432499,null)], null);
});

biomarket.utilities.t_biomarket$utilities42630.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities42630.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities42630";

biomarket.utilities.t_biomarket$utilities42630.cljs$lang$ctorPrWriter = (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities42630");
});

biomarket.utilities.__GT_t_biomarket$utilities42630 = (function biomarket$utilities$the_input_$___GT_t_biomarket$utilities42630(the_input__$1,js__$1,owner__$1,meta42631){
return (new biomarket.utilities.t_biomarket$utilities42630(the_input__$1,js__$1,owner__$1,meta42631));
});

}

return (new biomarket.utilities.t_biomarket$utilities42630(biomarket$utilities$the_input,js,owner,null));
});
biomarket.utilities.input = (function biomarket$utilities$input(p__42635,owner){
var vec__42643 = p__42635;
var fname = cljs.core.nth.call(null,vec__42643,(0),null);
var element = cljs.core.nth.call(null,vec__42643,(1),null);
var tag = cljs.core.nth.call(null,vec__42643,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities42644 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities42644 = (function (input,p__42635,owner,vec__42643,fname,element,tag,meta42645){
this.input = input;
this.p__42635 = p__42635;
this.owner = owner;
this.vec__42643 = vec__42643;
this.fname = fname;
this.element = element;
this.tag = tag;
this.meta42645 = meta42645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities42644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__42643,fname,element,tag){
return (function (_42646,meta42645__$1){
var self__ = this;
var _42646__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities42644(self__.input,self__.p__42635,self__.owner,self__.vec__42643,self__.fname,self__.element,self__.tag,meta42645__$1));
});})(vec__42643,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities42644.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__42643,fname,element,tag){
return (function (_42646){
var self__ = this;
var _42646__$1 = this;
return self__.meta42645;
});})(vec__42643,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities42644.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities42644.prototype.om$core$IRender$render$arity$1 = ((function (vec__42643,fname,element,tag){
return (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
var oc = ((function (this__28842__auto____$1,vec__42643,fname,element,tag){
return (function (p1__42633_SHARP_){
return biomarket.utilities.on_change_function.call(null,self__.owner,self__.tag,self__.fname,self__.element,p1__42633_SHARP_);
});})(this__28842__auto____$1,vec__42643,fname,element,tag))
;
var classes = (function (){var pred__42647 = cljs.core._EQ_;
var expr__42648 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.element);
if(cljs.core.truth_(pred__42647.call(null,false,expr__42648))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group",new cljs.core.Keyword(null,"icon","icon",1679606541),"",new cljs.core.Keyword(null,"fb","fb",-1331669322),""], null);
} else {
if(cljs.core.truth_(pred__42647.call(null,null,expr__42648))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group has-success has-feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"glyphicon glyphicon-ok form-control-feedback",new cljs.core.Keyword(null,"fb","fb",-1331669322),""], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group has-error has-feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"glyphicon glyphicon-remove form-control-feedback",new cljs.core.Keyword(null,"fb","fb",-1331669322),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (pred__42647,expr__42648,oc,this__28842__auto____$1,vec__42643,fname,element,tag){
return (function (p1__42634_SHARP_){
return React.DOM.div(null,p1__42634_SHARP_);
});})(pred__42647,expr__42648,oc,this__28842__auto____$1,vec__42643,fname,element,tag))
,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.element)))], null);
}
}
})();
return React.DOM.div({"className": new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)},React.DOM.label({"className": "control-label", "htmlFor": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.element)},new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.element)),om.core.build.call(null,biomarket.utilities.the_input,biomarket.utilities.clean_input.call(null,self__.element,classes,oc)));
});})(vec__42643,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities42644.getBasis = ((function (vec__42643,fname,element,tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fname","fname",-1154144278,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__42635","p__42635",-1391080982,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__42643","vec__42643",-1541829854,null),new cljs.core.Symbol(null,"fname","fname",-1154144278,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta42645","meta42645",1819829447,null)], null);
});})(vec__42643,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities42644.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities42644.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities42644";

biomarket.utilities.t_biomarket$utilities42644.cljs$lang$ctorPrWriter = ((function (vec__42643,fname,element,tag){
return (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities42644");
});})(vec__42643,fname,element,tag))
;

biomarket.utilities.__GT_t_biomarket$utilities42644 = ((function (vec__42643,fname,element,tag){
return (function biomarket$utilities$input_$___GT_t_biomarket$utilities42644(input__$1,p__42635__$1,owner__$1,vec__42643__$1,fname__$1,element__$1,tag__$1,meta42645){
return (new biomarket.utilities.t_biomarket$utilities42644(input__$1,p__42635__$1,owner__$1,vec__42643__$1,fname__$1,element__$1,tag__$1,meta42645));
});})(vec__42643,fname,element,tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities42644(biomarket$utilities$input,p__42635,owner,vec__42643,fname,element,tag,null));
});
biomarket.utilities.set_radio_state = (function biomarket$utilities$set_radio_state(owner,element,e){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"current","current",-1088038603),biomarket.utilities.get_text.call(null,e)));
});
biomarket.utilities.in_line_radio = (function biomarket$utilities$in_line_radio(p__42651,owner){
var vec__42659 = p__42651;
var name = cljs.core.nth.call(null,vec__42659,(0),null);
var element = cljs.core.nth.call(null,vec__42659,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities42660 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IWillUpdate}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities42660 = (function (in_line_radio,p__42651,owner,vec__42659,name,element,meta42661){
this.in_line_radio = in_line_radio;
this.p__42651 = p__42651;
this.owner = owner;
this.vec__42659 = vec__42659;
this.name = name;
this.element = element;
this.meta42661 = meta42661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities42660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__42659,name,element){
return (function (_42662,meta42661__$1){
var self__ = this;
var _42662__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities42660(self__.in_line_radio,self__.p__42651,self__.owner,self__.vec__42659,self__.name,self__.element,meta42661__$1));
});})(vec__42659,name,element))
;

biomarket.utilities.t_biomarket$utilities42660.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__42659,name,element){
return (function (_42662){
var self__ = this;
var _42662__$1 = this;
return self__.meta42661;
});})(vec__42659,name,element))
;

biomarket.utilities.t_biomarket$utilities42660.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities42660.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__42659,name,element){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),self__.name,new cljs.core.Keyword(null,"element","element",1974019749),self__.element], null);
});})(vec__42659,name,element))
;

biomarket.utilities.t_biomarket$utilities42660.prototype.om$core$IWillUpdate$ = true;

biomarket.utilities.t_biomarket$utilities42660.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (vec__42659,name,element){
return (function (_,np,ns){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"radiod","radiod",450568867),ns);
});})(vec__42659,name,element))
;

biomarket.utilities.t_biomarket$utilities42660.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities42660.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__42659,name,element){
return (function (_,p__42663){
var self__ = this;
var map__42664 = p__42663;
var map__42664__$1 = ((((!((map__42664 == null)))?((((map__42664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42664):map__42664);
var element__$1 = cljs.core.get.call(null,map__42664__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "pure-u-1"},cljs.core.map.call(null,((function (___$1,map__42664,map__42664__$1,element__$1,vec__42659,name,element){
return (function (p1__42650_SHARP_){
return React.DOM.span(null,React.DOM.div({"className": "pure-u-1-5"},om.dom.input.call(null,{"type": "radio", "name": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(element__$1), "value": cljs.core.first.call(null,p1__42650_SHARP_), "onChange": ((function (___$1,map__42664,map__42664__$1,element__$1,vec__42659,name,element){
return (function (e){
return biomarket.utilities.set_radio_state.call(null,self__.owner,element__$1,e);
});})(___$1,map__42664,map__42664__$1,element__$1,vec__42659,name,element))
})),React.DOM.div({"className": "pure-u-1-4"},cljs.core.second.call(null,p1__42650_SHARP_)));
});})(___$1,map__42664,map__42664__$1,element__$1,vec__42659,name,element))
,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(element__$1)));
});})(vec__42659,name,element))
;

biomarket.utilities.t_biomarket$utilities42660.getBasis = ((function (vec__42659,name,element){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"in-line-radio","in-line-radio",803575522,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"element","element",-680416020,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__42651","p__42651",755178179,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__42659","vec__42659",1974418349,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"meta42661","meta42661",-349447008,null)], null);
});})(vec__42659,name,element))
;

biomarket.utilities.t_biomarket$utilities42660.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities42660.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities42660";

biomarket.utilities.t_biomarket$utilities42660.cljs$lang$ctorPrWriter = ((function (vec__42659,name,element){
return (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities42660");
});})(vec__42659,name,element))
;

biomarket.utilities.__GT_t_biomarket$utilities42660 = ((function (vec__42659,name,element){
return (function biomarket$utilities$in_line_radio_$___GT_t_biomarket$utilities42660(in_line_radio__$1,p__42651__$1,owner__$1,vec__42659__$1,name__$1,element__$1,meta42661){
return (new biomarket.utilities.t_biomarket$utilities42660(in_line_radio__$1,p__42651__$1,owner__$1,vec__42659__$1,name__$1,element__$1,meta42661));
});})(vec__42659,name,element))
;

}

return (new biomarket.utilities.t_biomarket$utilities42660(biomarket$utilities$in_line_radio,p__42651,owner,vec__42659,name,element,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=utilities.js.map