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
var args__26917__auto__ = [];
var len__26910__auto___37342 = arguments.length;
var i__26911__auto___37343 = (0);
while(true){
if((i__26911__auto___37343 < len__26910__auto___37342)){
args__26917__auto__.push((arguments[i__26911__auto___37343]));

var G__37344 = (i__26911__auto___37343 + (1));
i__26911__auto___37343 = G__37344;
continue;
} else {
}
break;
}

var argseq__26918__auto__ = ((((0) < args__26917__auto__.length))?(new cljs.core.IndexedSeq(args__26917__auto__.slice((0)),(0),null)):null);
return biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic(argseq__26918__auto__);
});

biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic = (function (s){
return console.log(cljs.core.apply.call(null,cljs.core.str,s));
});

biomarket.utilities.log.cljs$lang$maxFixedArity = (0);

biomarket.utilities.log.cljs$lang$applyTo = (function (seq37341){
return biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37341));
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
biomarket.utilities.error_handler = (function biomarket$utilities$error_handler(p__37345){
var map__37348 = p__37345;
var map__37348__$1 = ((((!((map__37348 == null)))?((((map__37348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37348):map__37348);
var status = cljs.core.get.call(null,map__37348__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__37348__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return biomarket.utilities.log.call(null,[cljs.core.str("Something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
biomarket.utilities.post_params = (function biomarket$utilities$post_params(url,params,handler){
return ajax.core.POST.call(null,url,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),biomarket.utilities.error_handler,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
if(typeof biomarket.utilities.loop_manager !== 'undefined'){
} else {
biomarket.utilities.loop_manager = (function (){var method_table__26765__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26766__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26767__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26768__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26769__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","loop-manager"),((function (method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__,hierarchy__26769__auto__){
return (function() { 
var G__37350__delegate = function (o,d,args){
return new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(d));
};
var G__37350 = function (o,d,var_args){
var args = null;
if (arguments.length > 2) {
var G__37351__i = 0, G__37351__a = new Array(arguments.length -  2);
while (G__37351__i < G__37351__a.length) {G__37351__a[G__37351__i] = arguments[G__37351__i + 2]; ++G__37351__i;}
  args = new cljs.core.IndexedSeq(G__37351__a,0);
} 
return G__37350__delegate.call(this,o,d,args);};
G__37350.cljs$lang$maxFixedArity = 2;
G__37350.cljs$lang$applyTo = (function (arglist__37352){
var o = cljs.core.first(arglist__37352);
arglist__37352 = cljs.core.next(arglist__37352);
var d = cljs.core.first(arglist__37352);
var args = cljs.core.rest(arglist__37352);
return G__37350__delegate(o,d,args);
});
G__37350.cljs$core$IFn$_invoke$arity$variadic = G__37350__delegate;
return G__37350;
})()
;})(method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__,hierarchy__26769__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26769__auto__,method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__));
})();
}
if(typeof biomarket.utilities.broadcast_loop_manager !== 'undefined'){
} else {
biomarket.utilities.broadcast_loop_manager = (function (){var method_table__26765__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26766__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26767__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26768__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26769__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","broadcast-loop-manager"),((function (method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__,hierarchy__26769__auto__){
return (function (o,d){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(d);
});})(method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__,hierarchy__26769__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26769__auto__,method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"input-update","input-update",902761778),(function() { 
var G__37356__delegate = function (owner,p__37353,_){
var map__37354 = p__37353;
var map__37354__$1 = ((((!((map__37354 == null)))?((((map__37354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37354):map__37354);
var data = cljs.core.get.call(null,map__37354__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.utilities.get_input.call(null,owner,data);
};
var G__37356 = function (owner,p__37353,var_args){
var _ = null;
if (arguments.length > 2) {
var G__37357__i = 0, G__37357__a = new Array(arguments.length -  2);
while (G__37357__i < G__37357__a.length) {G__37357__a[G__37357__i] = arguments[G__37357__i + 2]; ++G__37357__i;}
  _ = new cljs.core.IndexedSeq(G__37357__a,0);
} 
return G__37356__delegate.call(this,owner,p__37353,_);};
G__37356.cljs$lang$maxFixedArity = 2;
G__37356.cljs$lang$applyTo = (function (arglist__37358){
var owner = cljs.core.first(arglist__37358);
arglist__37358 = cljs.core.next(arglist__37358);
var p__37353 = cljs.core.first(arglist__37358);
var _ = cljs.core.rest(arglist__37358);
return G__37356__delegate(owner,p__37353,_);
});
G__37356.cljs$core$IFn$_invoke$arity$variadic = G__37356__delegate;
return G__37356;
})()
);
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"submitted","submitted",-131658962),(function (owner,p__37359,func){
var map__37360 = p__37359;
var map__37360__$1 = ((((!((map__37360 == null)))?((((map__37360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37360):map__37360);
var data = cljs.core.get.call(null,map__37360__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return func.call(null);
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"project","project",1124394579),(function (owner,p__37362){
var map__37363 = p__37362;
var map__37363__$1 = ((((!((map__37363 == null)))?((((map__37363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37363):map__37363);
var data = cljs.core.get.call(null,map__37363__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view-type","view-type",-1848894559))));
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"comment","comment",532206069),(function (owner,p__37365){
var map__37366 = p__37365;
var map__37366__$1 = ((((!((map__37366 == null)))?((((map__37366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37366):map__37366);
var data = cljs.core.get.call(null,map__37366__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.conj.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"comments","comments",-293346423)),data));
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"amend-project-status","amend-project-status",-1452060792),(function (owner,p__37370){
var map__37371 = p__37370;
var map__37371__$1 = ((((!((map__37371 == null)))?((((map__37371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37371):map__37371);
var data = cljs.core.get.call(null,map__37371__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var status__GT_view = ((function (map__37371,map__37371__$1,data){
return (function (p1__37368_SHARP_){
return new cljs.core.PersistentArrayMap(null, 5, ["open",new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),"expired",new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),"completed",new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),"active",new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),"deleted",new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533)], null).call(null,p1__37368_SHARP_);
});})(map__37371,map__37371__$1,data))
;
var cv = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814));
var projs = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983));
if(cljs.core._EQ_.call(null,cv,status__GT_view.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(data)))){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.conj.call(null,projs,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),om.core.get_state.call(null,new cljs.core.Keyword(null,"view-type","view-type",-1848894559)))));
} else {
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.remove.call(null,((function (status__GT_view,cv,projs,map__37371,map__37371__$1,data){
return (function (p1__37369_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__37369_SHARP_));
});})(status__GT_view,cv,projs,map__37371,map__37371__$1,data))
,projs));
}
}));
biomarket.utilities.pub_info = (function biomarket$utilities$pub_info(owner,topic,data){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
biomarket.utilities.register_loop = (function biomarket$utilities$register_loop(var_args){
var args37373 = [];
var len__26910__auto___37413 = arguments.length;
var i__26911__auto___37414 = (0);
while(true){
if((i__26911__auto___37414 < len__26910__auto___37413)){
args37373.push((arguments[i__26911__auto___37414]));

var G__37415 = (i__26911__auto___37414 + (1));
i__26911__auto___37414 = G__37415;
continue;
} else {
}
break;
}

var G__37375 = args37373.length;
switch (G__37375) {
case 2:
return biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37373.length)].join('')));

}
});

biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$2 = (function (owner,topic){
return biomarket.utilities.register_loop.call(null,owner,topic,biomarket.utilities.loop_manager);
});

biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$3 = (function (owner,topic,func){
var c = cljs.core.async.chan.call(null);
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var events = cljs.core.async.sub.call(null,nc,topic,c);
var c__29971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto__,c,nc,events){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto__,c,nc,events){
return (function (state_37394){
var state_val_37395 = (state_37394[(1)]);
if((state_val_37395 === (1))){
var state_37394__$1 = state_37394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37394__$1,(2),events);
} else {
if((state_val_37395 === (2))){
var inst_37377 = (state_37394[(2)]);
var inst_37378 = inst_37377;
var state_37394__$1 = (function (){var statearr_37396 = state_37394;
(statearr_37396[(7)] = inst_37378);

return statearr_37396;
})();
var statearr_37397_37417 = state_37394__$1;
(statearr_37397_37417[(2)] = null);

(statearr_37397_37417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37395 === (3))){
var inst_37378 = (state_37394[(7)]);
var inst_37380 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_37378);
var inst_37381 = cljs.core._EQ_.call(null,inst_37380,new cljs.core.Keyword(null,"end","end",-268185958));
var state_37394__$1 = state_37394;
if(inst_37381){
var statearr_37398_37418 = state_37394__$1;
(statearr_37398_37418[(1)] = (5));

} else {
var statearr_37399_37419 = state_37394__$1;
(statearr_37399_37419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37395 === (4))){
var inst_37392 = (state_37394[(2)]);
var state_37394__$1 = state_37394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37394__$1,inst_37392);
} else {
if((state_val_37395 === (5))){
var state_37394__$1 = state_37394;
var statearr_37400_37420 = state_37394__$1;
(statearr_37400_37420[(2)] = null);

(statearr_37400_37420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37395 === (6))){
var inst_37378 = (state_37394[(7)]);
var inst_37384 = func.call(null,owner,inst_37378);
var state_37394__$1 = (function (){var statearr_37401 = state_37394;
(statearr_37401[(8)] = inst_37384);

return statearr_37401;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37394__$1,(8),events);
} else {
if((state_val_37395 === (7))){
var inst_37389 = (state_37394[(2)]);
var inst_37390 = cljs.core.async.unsub.call(null,nc,topic,c);
var state_37394__$1 = (function (){var statearr_37402 = state_37394;
(statearr_37402[(9)] = inst_37389);

return statearr_37402;
})();
var statearr_37403_37421 = state_37394__$1;
(statearr_37403_37421[(2)] = inst_37390);

(statearr_37403_37421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37395 === (8))){
var inst_37386 = (state_37394[(2)]);
var inst_37378 = inst_37386;
var state_37394__$1 = (function (){var statearr_37404 = state_37394;
(statearr_37404[(7)] = inst_37378);

return statearr_37404;
})();
var statearr_37405_37422 = state_37394__$1;
(statearr_37405_37422[(2)] = null);

(statearr_37405_37422[(1)] = (3));


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
});})(c__29971__auto__,c,nc,events))
;
return ((function (switch__29859__auto__,c__29971__auto__,c,nc,events){
return (function() {
var biomarket$utilities$state_machine__29860__auto__ = null;
var biomarket$utilities$state_machine__29860__auto____0 = (function (){
var statearr_37409 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37409[(0)] = biomarket$utilities$state_machine__29860__auto__);

(statearr_37409[(1)] = (1));

return statearr_37409;
});
var biomarket$utilities$state_machine__29860__auto____1 = (function (state_37394){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_37394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e37410){if((e37410 instanceof Object)){
var ex__29863__auto__ = e37410;
var statearr_37411_37423 = state_37394;
(statearr_37411_37423[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37424 = state_37394;
state_37394 = G__37424;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
biomarket$utilities$state_machine__29860__auto__ = function(state_37394){
switch(arguments.length){
case 0:
return biomarket$utilities$state_machine__29860__auto____0.call(this);
case 1:
return biomarket$utilities$state_machine__29860__auto____1.call(this,state_37394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$utilities$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$utilities$state_machine__29860__auto____0;
biomarket$utilities$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$utilities$state_machine__29860__auto____1;
return biomarket$utilities$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto__,c,nc,events))
})();
var state__29973__auto__ = (function (){var statearr_37412 = f__29972__auto__.call(null);
(statearr_37412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto__);

return statearr_37412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto__,c,nc,events))
);

return c__29971__auto__;
});

biomarket.utilities.register_loop.cljs$lang$maxFixedArity = 3;
biomarket.utilities.unsubscribe = (function biomarket$utilities$unsubscribe(var_args){
var args__26917__auto__ = [];
var len__26910__auto___37431 = arguments.length;
var i__26911__auto___37432 = (0);
while(true){
if((i__26911__auto___37432 < len__26910__auto___37431)){
args__26917__auto__.push((arguments[i__26911__auto___37432]));

var G__37433 = (i__26911__auto___37432 + (1));
i__26911__auto___37432 = G__37433;
continue;
} else {
}
break;
}

var argseq__26918__auto__ = ((((1) < args__26917__auto__.length))?(new cljs.core.IndexedSeq(args__26917__auto__.slice((1)),(0),null)):null);
return biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26918__auto__);
});

biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic = (function (owner,topics){
var pc = new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var seq__37427 = cljs.core.seq.call(null,topics);
var chunk__37428 = null;
var count__37429 = (0);
var i__37430 = (0);
while(true){
if((i__37430 < count__37429)){
var t = cljs.core._nth.call(null,chunk__37428,i__37430);
cljs.core.async.put_BANG_.call(null,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"end","end",-268185958)], null));

var G__37434 = seq__37427;
var G__37435 = chunk__37428;
var G__37436 = count__37429;
var G__37437 = (i__37430 + (1));
seq__37427 = G__37434;
chunk__37428 = G__37435;
count__37429 = G__37436;
i__37430 = G__37437;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__37427);
if(temp__4425__auto__){
var seq__37427__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37427__$1)){
var c__26651__auto__ = cljs.core.chunk_first.call(null,seq__37427__$1);
var G__37438 = cljs.core.chunk_rest.call(null,seq__37427__$1);
var G__37439 = c__26651__auto__;
var G__37440 = cljs.core.count.call(null,c__26651__auto__);
var G__37441 = (0);
seq__37427 = G__37438;
chunk__37428 = G__37439;
count__37429 = G__37440;
i__37430 = G__37441;
continue;
} else {
var t = cljs.core.first.call(null,seq__37427__$1);
cljs.core.async.put_BANG_.call(null,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"end","end",-268185958)], null));

var G__37442 = cljs.core.next.call(null,seq__37427__$1);
var G__37443 = null;
var G__37444 = (0);
var G__37445 = (0);
seq__37427 = G__37442;
chunk__37428 = G__37443;
count__37429 = G__37444;
i__37430 = G__37445;
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

biomarket.utilities.unsubscribe.cljs$lang$applyTo = (function (seq37425){
var G__37426 = cljs.core.first.call(null,seq37425);
var seq37425__$1 = cljs.core.next.call(null,seq37425);
return biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic(G__37426,seq37425__$1);
});
biomarket.utilities.register_broadcast_loop = (function biomarket$utilities$register_broadcast_loop(owner,topic,chan){
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var events = cljs.core.async.sub.call(null,nc,topic,chan);
var c__29971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto__,nc,events){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto__,nc,events){
return (function (state_37501){
var state_val_37502 = (state_37501[(1)]);
if((state_val_37502 === (1))){
var state_37501__$1 = state_37501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37501__$1,(2),events);
} else {
if((state_val_37502 === (2))){
var inst_37484 = (state_37501[(2)]);
var inst_37485 = inst_37484;
var state_37501__$1 = (function (){var statearr_37503 = state_37501;
(statearr_37503[(7)] = inst_37485);

return statearr_37503;
})();
var statearr_37504_37520 = state_37501__$1;
(statearr_37504_37520[(2)] = null);

(statearr_37504_37520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37502 === (3))){
var inst_37485 = (state_37501[(7)]);
var inst_37487 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_37485);
var inst_37488 = cljs.core._EQ_.call(null,inst_37487,new cljs.core.Keyword(null,"end","end",-268185958));
var state_37501__$1 = state_37501;
if(inst_37488){
var statearr_37505_37521 = state_37501__$1;
(statearr_37505_37521[(1)] = (5));

} else {
var statearr_37506_37522 = state_37501__$1;
(statearr_37506_37522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37502 === (4))){
var inst_37499 = (state_37501[(2)]);
var state_37501__$1 = state_37501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37501__$1,inst_37499);
} else {
if((state_val_37502 === (5))){
var state_37501__$1 = state_37501;
var statearr_37507_37523 = state_37501__$1;
(statearr_37507_37523[(2)] = null);

(statearr_37507_37523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37502 === (6))){
var inst_37485 = (state_37501[(7)]);
var inst_37491 = biomarket.utilities.broadcast_loop_manager.call(null,owner,inst_37485);
var state_37501__$1 = (function (){var statearr_37508 = state_37501;
(statearr_37508[(8)] = inst_37491);

return statearr_37508;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37501__$1,(8),events);
} else {
if((state_val_37502 === (7))){
var inst_37496 = (state_37501[(2)]);
var inst_37497 = cljs.core.async.unsub.call(null,nc,topic,chan);
var state_37501__$1 = (function (){var statearr_37509 = state_37501;
(statearr_37509[(9)] = inst_37496);

return statearr_37509;
})();
var statearr_37510_37524 = state_37501__$1;
(statearr_37510_37524[(2)] = inst_37497);

(statearr_37510_37524[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37502 === (8))){
var inst_37493 = (state_37501[(2)]);
var inst_37485 = inst_37493;
var state_37501__$1 = (function (){var statearr_37511 = state_37501;
(statearr_37511[(7)] = inst_37485);

return statearr_37511;
})();
var statearr_37512_37525 = state_37501__$1;
(statearr_37512_37525[(2)] = null);

(statearr_37512_37525[(1)] = (3));


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
});})(c__29971__auto__,nc,events))
;
return ((function (switch__29859__auto__,c__29971__auto__,nc,events){
return (function() {
var biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto__ = null;
var biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto____0 = (function (){
var statearr_37516 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37516[(0)] = biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto__);

(statearr_37516[(1)] = (1));

return statearr_37516;
});
var biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto____1 = (function (state_37501){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_37501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e37517){if((e37517 instanceof Object)){
var ex__29863__auto__ = e37517;
var statearr_37518_37526 = state_37501;
(statearr_37518_37526[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37527 = state_37501;
state_37501 = G__37527;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto__ = function(state_37501){
switch(arguments.length){
case 0:
return biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto____0.call(this);
case 1:
return biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto____1.call(this,state_37501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto____0;
biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto____1;
return biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto__,nc,events))
})();
var state__29973__auto__ = (function (){var statearr_37519 = f__29972__auto__.call(null);
(statearr_37519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto__);

return statearr_37519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto__,nc,events))
);

return c__29971__auto__;
});
biomarket.utilities.unsub_broadcast_loop = (function biomarket$utilities$unsub_broadcast_loop(owner,topic,chan){
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
return cljs.core.async.unsub.call(null,nc,topic,chan);
});
biomarket.utilities.show_default = (function biomarket$utilities$show_default(_,owner){
if(typeof biomarket.utilities.t_biomarket$utilities37531 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37531 = (function (show_default,_,owner,meta37532){
this.show_default = show_default;
this._ = _;
this.owner = owner;
this.meta37532 = meta37532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37533,meta37532__$1){
var self__ = this;
var _37533__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37531(self__.show_default,self__._,self__.owner,meta37532__$1));
});

biomarket.utilities.t_biomarket$utilities37531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37533){
var self__ = this;
var _37533__$1 = this;
return self__.meta37532;
});

biomarket.utilities.t_biomarket$utilities37531.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities37531.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.div(null);
});

biomarket.utilities.t_biomarket$utilities37531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-default","show-default",-609967859,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta37532","meta37532",776211440,null)], null);
});

biomarket.utilities.t_biomarket$utilities37531.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37531.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37531";

biomarket.utilities.t_biomarket$utilities37531.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities37531");
});

biomarket.utilities.__GT_t_biomarket$utilities37531 = (function biomarket$utilities$show_default_$___GT_t_biomarket$utilities37531(show_default__$1,___$1,owner__$1,meta37532){
return (new biomarket.utilities.t_biomarket$utilities37531(show_default__$1,___$1,owner__$1,meta37532));
});

}

return (new biomarket.utilities.t_biomarket$utilities37531(biomarket$utilities$show_default,_,owner,null));
});
biomarket.utilities.bottom_skel = (function biomarket$utilities$bottom_skel(p__37534,owner){
var map__37545 = p__37534;
var map__37545__$1 = ((((!((map__37545 == null)))?((((map__37545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37545):map__37545);
var project = map__37545__$1;
var links = cljs.core.get.call(null,map__37545__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var widget = cljs.core.get.call(null,map__37545__$1,new cljs.core.Keyword(null,"widget","widget",-853968943));
if(typeof biomarket.utilities.t_biomarket$utilities37547 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37547 = (function (bottom_skel,p__37534,owner,map__37545,project,links,widget,meta37548){
this.bottom_skel = bottom_skel;
this.p__37534 = p__37534;
this.owner = owner;
this.map__37545 = map__37545;
this.project = project;
this.links = links;
this.widget = widget;
this.meta37548 = meta37548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37545,map__37545__$1,project,links,widget){
return (function (_37549,meta37548__$1){
var self__ = this;
var _37549__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37547(self__.bottom_skel,self__.p__37534,self__.owner,self__.map__37545,self__.project,self__.links,self__.widget,meta37548__$1));
});})(map__37545,map__37545__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities37547.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37545,map__37545__$1,project,links,widget){
return (function (_37549){
var self__ = this;
var _37549__$1 = this;
return self__.meta37548;
});})(map__37545,map__37545__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities37547.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities37547.prototype.om$core$IRender$render$arity$1 = ((function (map__37545,map__37545__$1,project,links,widget){
return (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
var visible = new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(self__.project);
return React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-6"},cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,((function (visible,this__36785__auto____$1,map__37545,map__37545__$1,project,links,widget){
return (function (p__37550){
var vec__37551 = p__37550;
var tag = cljs.core.nth.call(null,vec__37551,(0),null);
var ele = cljs.core.nth.call(null,vec__37551,(1),null);
return React.DOM.a({"className": ((cljs.core._EQ_.call(null,visible,tag))?"btn btn-default active":"btn btn-default"), "onClick": ((function (vec__37551,tag,ele,visible,this__36785__auto____$1,map__37545,map__37545__$1,project,links,widget){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"show-bottom","show-bottom",-1162121528),new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),((cljs.core._EQ_.call(null,visible,tag))?new cljs.core.Keyword(null,"default","default",-1987822328):tag)], null));
});})(vec__37551,tag,ele,visible,this__36785__auto____$1,map__37545,map__37545__$1,project,links,widget))
},cljs.core.first.call(null,ele));
});})(visible,this__36785__auto____$1,map__37545,map__37545__$1,project,links,widget))
,self__.links))),React.DOM.div({"className": "col-md-6"},(cljs.core.truth_(self__.widget)?cljs.core.apply.call(null,om.core.build,cljs.core.first.call(null,self__.widget),cljs.core.rest.call(null,self__.widget)):null))),(function (){var pred__37552 = cljs.core._EQ_;
var expr__37553 = visible;
if(cljs.core.truth_(pred__37552.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),expr__37553))){
return React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},om.core.build.call(null,biomarket.utilities.show_default,null)));
} else {
return om.core.build.call(null,cljs.core.second.call(null,visible.call(null,self__.links)),((cljs.core.seq.call(null,cljs.core.drop.call(null,(2),visible.call(null,self__.links))))?cljs.core.vec.call(null,cljs.core.cons.call(null,self__.project,cljs.core.drop.call(null,(2),visible.call(null,self__.links)))):self__.project));
}
})());
});})(map__37545,map__37545__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities37547.getBasis = ((function (map__37545,map__37545__$1,project,links,widget){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bottom-skel","bottom-skel",24371686,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"widget","widget",786562584,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"project","project",-1530041190,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__37534","p__37534",-1021012193,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__37545","map__37545",572775394,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"widget","widget",786562584,null),new cljs.core.Symbol(null,"meta37548","meta37548",1505094280,null)], null);
});})(map__37545,map__37545__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities37547.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37547.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37547";

biomarket.utilities.t_biomarket$utilities37547.cljs$lang$ctorPrWriter = ((function (map__37545,map__37545__$1,project,links,widget){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities37547");
});})(map__37545,map__37545__$1,project,links,widget))
;

biomarket.utilities.__GT_t_biomarket$utilities37547 = ((function (map__37545,map__37545__$1,project,links,widget){
return (function biomarket$utilities$bottom_skel_$___GT_t_biomarket$utilities37547(bottom_skel__$1,p__37534__$1,owner__$1,map__37545__$2,project__$1,links__$1,widget__$1,meta37548){
return (new biomarket.utilities.t_biomarket$utilities37547(bottom_skel__$1,p__37534__$1,owner__$1,map__37545__$2,project__$1,links__$1,widget__$1,meta37548));
});})(map__37545,map__37545__$1,project,links,widget))
;

}

return (new biomarket.utilities.t_biomarket$utilities37547(biomarket$utilities$bottom_skel,p__37534,owner,map__37545__$1,project,links,widget,null));
});
if(typeof biomarket.utilities.bottom !== 'undefined'){
} else {
biomarket.utilities.bottom = (function (){var method_table__26765__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26766__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26767__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26768__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26769__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","bottom"),((function (method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__,hierarchy__26769__auto__){
return (function (p){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(p);
});})(method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__,hierarchy__26769__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26769__auto__,method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__));
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
if(typeof biomarket.utilities.t_biomarket$utilities37564 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37564 = (function (more_less_text,text,owner,meta37565){
this.more_less_text = more_less_text;
this.text = text;
this.owner = owner;
this.meta37565 = meta37565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37566,meta37565__$1){
var self__ = this;
var _37566__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37564(self__.more_less_text,self__.text,self__.owner,meta37565__$1));
});

biomarket.utilities.t_biomarket$utilities37564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37566){
var self__ = this;
var _37566__$1 = this;
return self__.meta37565;
});

biomarket.utilities.t_biomarket$utilities37564.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities37564.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"less","less",-428869198)], null);
});

biomarket.utilities.t_biomarket$utilities37564.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities37564.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__37567){
var self__ = this;
var map__37568 = p__37567;
var map__37568__$1 = ((((!((map__37568 == null)))?((((map__37568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37568):map__37568);
var showing = cljs.core.get.call(null,map__37568__$1,new cljs.core.Keyword(null,"showing","showing",798009604));
var ___$1 = this;
return React.DOM.div(null,(((cljs.core.count.call(null,self__.text) < (400)))?React.DOM.div(null,self__.text):(function (){var pred__37570 = cljs.core._EQ_;
var expr__37571 = showing;
if(cljs.core.truth_(pred__37570.call(null,new cljs.core.Keyword(null,"less","less",-428869198),expr__37571))){
return React.DOM.div(null,React.DOM.span({"style": {"white-space": "pre-line"}},[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(300),self__.text))),cljs.core.str(" ... ")].join('')),React.DOM.a({"onClick": ((function (pred__37570,expr__37571,___$1,map__37568,map__37568__$1,showing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"more","more",-2058821800));
});})(pred__37570,expr__37571,___$1,map__37568,map__37568__$1,showing))
, "className": "flinka"}," More"));
} else {
if(cljs.core.truth_(pred__37570.call(null,new cljs.core.Keyword(null,"more","more",-2058821800),expr__37571))){
return React.DOM.div(null,React.DOM.span({"style": {"white-space": "pre-line"}},self__.text),React.DOM.a({"onClick": ((function (pred__37570,expr__37571,___$1,map__37568,map__37568__$1,showing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"less","less",-428869198));
});})(pred__37570,expr__37571,___$1,map__37568,map__37568__$1,showing))
, "className": "flinka"}," Less"));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37571)].join('')));
}
}
})()));
});

biomarket.utilities.t_biomarket$utilities37564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"more-less-text","more-less-text",-1737643469,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta37565","meta37565",-1962650674,null)], null);
});

biomarket.utilities.t_biomarket$utilities37564.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37564.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37564";

biomarket.utilities.t_biomarket$utilities37564.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities37564");
});

biomarket.utilities.__GT_t_biomarket$utilities37564 = (function biomarket$utilities$more_less_text_$___GT_t_biomarket$utilities37564(more_less_text__$1,text__$1,owner__$1,meta37565){
return (new biomarket.utilities.t_biomarket$utilities37564(more_less_text__$1,text__$1,owner__$1,meta37565));
});

}

return (new biomarket.utilities.t_biomarket$utilities37564(biomarket$utilities$more_less_text,text,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.utilities.control_buttons = (function biomarket$utilities$control_buttons(inputs,owner){
if(typeof biomarket.utilities.t_biomarket$utilities37577 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37577 = (function (control_buttons,inputs,owner,meta37578){
this.control_buttons = control_buttons;
this.inputs = inputs;
this.owner = owner;
this.meta37578 = meta37578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37579,meta37578__$1){
var self__ = this;
var _37579__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37577(self__.control_buttons,self__.inputs,self__.owner,meta37578__$1));
});

biomarket.utilities.t_biomarket$utilities37577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37579){
var self__ = this;
var _37579__$1 = this;
return self__.meta37578;
});

biomarket.utilities.t_biomarket$utilities37577.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities37577.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.div({"className": "panel panel-default"},cljs.core.apply.call(null,om.dom.div,{"className": "panel-heading"},cljs.core.map.call(null,((function (this__36785__auto____$1){
return (function (p1__37573_SHARP_){
return React.DOM.a({"className": "btn btn-default", "onClick": cljs.core.second.call(null,p1__37573_SHARP_)},cljs.core.first.call(null,p1__37573_SHARP_));
});})(this__36785__auto____$1))
,self__.inputs)));
});

biomarket.utilities.t_biomarket$utilities37577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"control-buttons","control-buttons",285817705,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta37578","meta37578",1046873795,null)], null);
});

biomarket.utilities.t_biomarket$utilities37577.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37577.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37577";

biomarket.utilities.t_biomarket$utilities37577.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities37577");
});

biomarket.utilities.__GT_t_biomarket$utilities37577 = (function biomarket$utilities$control_buttons_$___GT_t_biomarket$utilities37577(control_buttons__$1,inputs__$1,owner__$1,meta37578){
return (new biomarket.utilities.t_biomarket$utilities37577(control_buttons__$1,inputs__$1,owner__$1,meta37578));
});

}

return (new biomarket.utilities.t_biomarket$utilities37577(biomarket$utilities$control_buttons,inputs,owner,null));
});
biomarket.utilities.menu_item = (function biomarket$utilities$menu_item(p__37580,owner){
var vec__37585 = p__37580;
var text = cljs.core.nth.call(null,vec__37585,(0),null);
var topic = cljs.core.nth.call(null,vec__37585,(1),null);
var tag = cljs.core.nth.call(null,vec__37585,(2),null);
var current = cljs.core.nth.call(null,vec__37585,(3),null);
if(typeof biomarket.utilities.t_biomarket$utilities37586 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37586 = (function (menu_item,p__37580,owner,vec__37585,text,topic,tag,current,meta37587){
this.menu_item = menu_item;
this.p__37580 = p__37580;
this.owner = owner;
this.vec__37585 = vec__37585;
this.text = text;
this.topic = topic;
this.tag = tag;
this.current = current;
this.meta37587 = meta37587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__37585,text,topic,tag,current){
return (function (_37588,meta37587__$1){
var self__ = this;
var _37588__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37586(self__.menu_item,self__.p__37580,self__.owner,self__.vec__37585,self__.text,self__.topic,self__.tag,self__.current,meta37587__$1));
});})(vec__37585,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities37586.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__37585,text,topic,tag,current){
return (function (_37588){
var self__ = this;
var _37588__$1 = this;
return self__.meta37587;
});})(vec__37585,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities37586.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities37586.prototype.om$core$IRender$render$arity$1 = ((function (vec__37585,text,topic,tag,current){
return (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.li({"className": ((cljs.core._EQ_.call(null,self__.current,self__.topic))?"active":null), "role": "presentation"},React.DOM.a({"onClick": ((function (this__36785__auto____$1,vec__37585,text,topic,tag,current){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.tag,self__.topic);
});})(this__36785__auto____$1,vec__37585,text,topic,tag,current))
, "style": {"cursor": "pointer"}},self__.text));
});})(vec__37585,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities37586.getBasis = ((function (vec__37585,text,topic,tag,current){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"current","current",552492924,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__37580","p__37580",110530346,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__37585","vec__37585",-531924790,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"meta37587","meta37587",-1231625159,null)], null);
});})(vec__37585,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities37586.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37586.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37586";

biomarket.utilities.t_biomarket$utilities37586.cljs$lang$ctorPrWriter = ((function (vec__37585,text,topic,tag,current){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities37586");
});})(vec__37585,text,topic,tag,current))
;

biomarket.utilities.__GT_t_biomarket$utilities37586 = ((function (vec__37585,text,topic,tag,current){
return (function biomarket$utilities$menu_item_$___GT_t_biomarket$utilities37586(menu_item__$1,p__37580__$1,owner__$1,vec__37585__$1,text__$1,topic__$1,tag__$1,current__$1,meta37587){
return (new biomarket.utilities.t_biomarket$utilities37586(menu_item__$1,p__37580__$1,owner__$1,vec__37585__$1,text__$1,topic__$1,tag__$1,current__$1,meta37587));
});})(vec__37585,text,topic,tag,current))
;

}

return (new biomarket.utilities.t_biomarket$utilities37586(biomarket$utilities$menu_item,p__37580,owner,vec__37585,text,topic,tag,current,null));
});
biomarket.utilities.top_navigation = (function biomarket$utilities$top_navigation(p__37590,owner){
var vec__37595 = p__37590;
var current = cljs.core.nth.call(null,vec__37595,(0),null);
var inputs = cljs.core.nth.call(null,vec__37595,(1),null);
var nav_tag = cljs.core.nth.call(null,vec__37595,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities37596 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37596 = (function (top_navigation,p__37590,owner,vec__37595,current,inputs,nav_tag,meta37597){
this.top_navigation = top_navigation;
this.p__37590 = p__37590;
this.owner = owner;
this.vec__37595 = vec__37595;
this.current = current;
this.inputs = inputs;
this.nav_tag = nav_tag;
this.meta37597 = meta37597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__37595,current,inputs,nav_tag){
return (function (_37598,meta37597__$1){
var self__ = this;
var _37598__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37596(self__.top_navigation,self__.p__37590,self__.owner,self__.vec__37595,self__.current,self__.inputs,self__.nav_tag,meta37597__$1));
});})(vec__37595,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities37596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__37595,current,inputs,nav_tag){
return (function (_37598){
var self__ = this;
var _37598__$1 = this;
return self__.meta37597;
});})(vec__37595,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities37596.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities37596.prototype.om$core$IRender$render$arity$1 = ((function (vec__37595,current,inputs,nav_tag){
return (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.div({"role": "navigation"},cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-pills nav-justified"},cljs.core.map.call(null,((function (this__36785__auto____$1,vec__37595,current,inputs,nav_tag){
return (function (p1__37589_SHARP_){
return om.core.build.call(null,biomarket.utilities.menu_item,cljs.core.concat.call(null,p1__37589_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nav_tag,self__.current], null)));
});})(this__36785__auto____$1,vec__37595,current,inputs,nav_tag))
,self__.inputs)));
});})(vec__37595,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities37596.getBasis = ((function (vec__37595,current,inputs,nav_tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"top-navigation","top-navigation",-1053916026,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__37590","p__37590",-1732108929,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__37595","vec__37595",1926786026,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"meta37597","meta37597",-1916093139,null)], null);
});})(vec__37595,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities37596.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37596.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37596";

biomarket.utilities.t_biomarket$utilities37596.cljs$lang$ctorPrWriter = ((function (vec__37595,current,inputs,nav_tag){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities37596");
});})(vec__37595,current,inputs,nav_tag))
;

biomarket.utilities.__GT_t_biomarket$utilities37596 = ((function (vec__37595,current,inputs,nav_tag){
return (function biomarket$utilities$top_navigation_$___GT_t_biomarket$utilities37596(top_navigation__$1,p__37590__$1,owner__$1,vec__37595__$1,current__$1,inputs__$1,nav_tag__$1,meta37597){
return (new biomarket.utilities.t_biomarket$utilities37596(top_navigation__$1,p__37590__$1,owner__$1,vec__37595__$1,current__$1,inputs__$1,nav_tag__$1,meta37597));
});})(vec__37595,current,inputs,nav_tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities37596(biomarket$utilities$top_navigation,p__37590,owner,vec__37595,current,inputs,nav_tag,null));
});
biomarket.utilities.padded_button = (function biomarket$utilities$padded_button(p__37599,owner){
var vec__37604 = p__37599;
var padding = cljs.core.nth.call(null,vec__37604,(0),null);
var value = cljs.core.nth.call(null,vec__37604,(1),null);
var func = cljs.core.nth.call(null,vec__37604,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities37605 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37605 = (function (padded_button,p__37599,owner,vec__37604,padding,value,func,meta37606){
this.padded_button = padded_button;
this.p__37599 = p__37599;
this.owner = owner;
this.vec__37604 = vec__37604;
this.padding = padding;
this.value = value;
this.func = func;
this.meta37606 = meta37606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__37604,padding,value,func){
return (function (_37607,meta37606__$1){
var self__ = this;
var _37607__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37605(self__.padded_button,self__.p__37599,self__.owner,self__.vec__37604,self__.padding,self__.value,self__.func,meta37606__$1));
});})(vec__37604,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities37605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__37604,padding,value,func){
return (function (_37607){
var self__ = this;
var _37607__$1 = this;
return self__.meta37606;
});})(vec__37604,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities37605.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities37605.prototype.om$core$IRender$render$arity$1 = ((function (vec__37604,padding,value,func){
return (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.div({"style": {"padding": self__.padding}},(cljs.core.truth_(self__.func)?React.DOM.button({"className": "pure-button pure-button-primary", "onClick": self__.func},self__.value):React.DOM.button({"className": "pure-button pure-button-primary"},self__.value)));
});})(vec__37604,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities37605.getBasis = ((function (vec__37604,padding,value,func){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"padded-button","padded-button",875344236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__37599","p__37599",-450126350,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__37604","vec__37604",202288327,null),new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"meta37606","meta37606",-1102836947,null)], null);
});})(vec__37604,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities37605.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37605.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37605";

biomarket.utilities.t_biomarket$utilities37605.cljs$lang$ctorPrWriter = ((function (vec__37604,padding,value,func){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities37605");
});})(vec__37604,padding,value,func))
;

biomarket.utilities.__GT_t_biomarket$utilities37605 = ((function (vec__37604,padding,value,func){
return (function biomarket$utilities$padded_button_$___GT_t_biomarket$utilities37605(padded_button__$1,p__37599__$1,owner__$1,vec__37604__$1,padding__$1,value__$1,func__$1,meta37606){
return (new biomarket.utilities.t_biomarket$utilities37605(padded_button__$1,p__37599__$1,owner__$1,vec__37604__$1,padding__$1,value__$1,func__$1,meta37606));
});})(vec__37604,padding,value,func))
;

}

return (new biomarket.utilities.t_biomarket$utilities37605(biomarket$utilities$padded_button,p__37599,owner,vec__37604,padding,value,func,null));
});
biomarket.utilities.padded_button_disabled = (function biomarket$utilities$padded_button_disabled(p__37608,owner){
var vec__37613 = p__37608;
var padding = cljs.core.nth.call(null,vec__37613,(0),null);
var value = cljs.core.nth.call(null,vec__37613,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities37614 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37614 = (function (padded_button_disabled,p__37608,owner,vec__37613,padding,value,meta37615){
this.padded_button_disabled = padded_button_disabled;
this.p__37608 = p__37608;
this.owner = owner;
this.vec__37613 = vec__37613;
this.padding = padding;
this.value = value;
this.meta37615 = meta37615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__37613,padding,value){
return (function (_37616,meta37615__$1){
var self__ = this;
var _37616__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37614(self__.padded_button_disabled,self__.p__37608,self__.owner,self__.vec__37613,self__.padding,self__.value,meta37615__$1));
});})(vec__37613,padding,value))
;

biomarket.utilities.t_biomarket$utilities37614.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__37613,padding,value){
return (function (_37616){
var self__ = this;
var _37616__$1 = this;
return self__.meta37615;
});})(vec__37613,padding,value))
;

biomarket.utilities.t_biomarket$utilities37614.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities37614.prototype.om$core$IRender$render$arity$1 = ((function (vec__37613,padding,value){
return (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.div({"style": {"padding": self__.padding}},React.DOM.button({"className": "pure-button pure-button-primary", "disabled": "true"},self__.value));
});})(vec__37613,padding,value))
;

biomarket.utilities.t_biomarket$utilities37614.getBasis = ((function (vec__37613,padding,value){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"padded-button-disabled","padded-button-disabled",1594106929,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__37608","p__37608",-1337651255,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__37613","vec__37613",-1538966093,null),new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"meta37615","meta37615",1854631108,null)], null);
});})(vec__37613,padding,value))
;

biomarket.utilities.t_biomarket$utilities37614.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37614.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37614";

biomarket.utilities.t_biomarket$utilities37614.cljs$lang$ctorPrWriter = ((function (vec__37613,padding,value){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities37614");
});})(vec__37613,padding,value))
;

biomarket.utilities.__GT_t_biomarket$utilities37614 = ((function (vec__37613,padding,value){
return (function biomarket$utilities$padded_button_disabled_$___GT_t_biomarket$utilities37614(padded_button_disabled__$1,p__37608__$1,owner__$1,vec__37613__$1,padding__$1,value__$1,meta37615){
return (new biomarket.utilities.t_biomarket$utilities37614(padded_button_disabled__$1,p__37608__$1,owner__$1,vec__37613__$1,padding__$1,value__$1,meta37615));
});})(vec__37613,padding,value))
;

}

return (new biomarket.utilities.t_biomarket$utilities37614(biomarket$utilities$padded_button_disabled,p__37608,owner,vec__37613,padding,value,null));
});
biomarket.utilities.waiting = (function biomarket$utilities$waiting(_,owner){
if(typeof biomarket.utilities.t_biomarket$utilities37620 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37620 = (function (waiting,_,owner,meta37621){
this.waiting = waiting;
this._ = _;
this.owner = owner;
this.meta37621 = meta37621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37622,meta37621__$1){
var self__ = this;
var _37622__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37620(self__.waiting,self__._,self__.owner,meta37621__$1));
});

biomarket.utilities.t_biomarket$utilities37620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37622){
var self__ = this;
var _37622__$1 = this;
return self__.meta37621;
});

biomarket.utilities.t_biomarket$utilities37620.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities37620.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.div({"style": {"position": "absolute", "top": "50%", "left": "50%", "-webkit-animation": "fadein 2s", "-moz-animation": "fadein 2s", "-ms-animation": "fadein 2s", "-o-animation": "fadein 2s", "animation": "fadein 2s"}},React.DOM.i({"className": "fa fa-refresh fa-spin fa-5x fa-fw"}));
});

biomarket.utilities.t_biomarket$utilities37620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"waiting","waiting",-1758529034,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta37621","meta37621",-179230135,null)], null);
});

biomarket.utilities.t_biomarket$utilities37620.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37620.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37620";

biomarket.utilities.t_biomarket$utilities37620.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities37620");
});

biomarket.utilities.__GT_t_biomarket$utilities37620 = (function biomarket$utilities$waiting_$___GT_t_biomarket$utilities37620(waiting__$1,___$1,owner__$1,meta37621){
return (new biomarket.utilities.t_biomarket$utilities37620(waiting__$1,___$1,owner__$1,meta37621));
});

}

return (new biomarket.utilities.t_biomarket$utilities37620(biomarket$utilities$waiting,_,owner,null));
});
biomarket.utilities.make_a_table = (function biomarket$utilities$make_a_table(p__37625,owner){
var map__37631 = p__37625;
var map__37631__$1 = ((((!((map__37631 == null)))?((((map__37631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37631):map__37631);
var data = cljs.core.get.call(null,map__37631__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var tparam = cljs.core.get.call(null,map__37631__$1,new cljs.core.Keyword(null,"tparam","tparam",1161386584));
if(typeof biomarket.utilities.t_biomarket$utilities37633 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37633 = (function (make_a_table,p__37625,owner,map__37631,data,tparam,meta37634){
this.make_a_table = make_a_table;
this.p__37625 = p__37625;
this.owner = owner;
this.map__37631 = map__37631;
this.data = data;
this.tparam = tparam;
this.meta37634 = meta37634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37631,map__37631__$1,data,tparam){
return (function (_37635,meta37634__$1){
var self__ = this;
var _37635__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37633(self__.make_a_table,self__.p__37625,self__.owner,self__.map__37631,self__.data,self__.tparam,meta37634__$1));
});})(map__37631,map__37631__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities37633.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37631,map__37631__$1,data,tparam){
return (function (_37635){
var self__ = this;
var _37635__$1 = this;
return self__.meta37634;
});})(map__37631,map__37631__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities37633.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities37633.prototype.om$core$IRender$render$arity$1 = ((function (map__37631,map__37631__$1,data,tparam){
return (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
var tjs = cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"table",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px"], null)], null),self__.tparam));
return React.DOM.div({"style": {"background-color": "white"}},React.DOM.div({"className": "table-responsive"},React.DOM.table(tjs,React.DOM.thead(null,cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (tjs,this__36785__auto____$1,map__37631,map__37631__$1,data,tparam){
return (function (p1__37623_SHARP_){
return React.DOM.th({"style": {"text-align": "center"}},p1__37623_SHARP_);
});})(tjs,this__36785__auto____$1,map__37631,map__37631__$1,data,tparam))
,cljs.core.keys.call(null,cljs.core.first.call(null,self__.data))))),cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.map.call(null,((function (tjs,this__36785__auto____$1,map__37631,map__37631__$1,data,tparam){
return (function (x){
return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (tjs,this__36785__auto____$1,map__37631,map__37631__$1,data,tparam){
return (function (p1__37624_SHARP_){
return React.DOM.td({"style": {"text-align": "center"}},p1__37624_SHARP_);
});})(tjs,this__36785__auto____$1,map__37631,map__37631__$1,data,tparam))
,cljs.core.vals.call(null,x)));
});})(tjs,this__36785__auto____$1,map__37631,map__37631__$1,data,tparam))
,self__.data)))));
});})(map__37631,map__37631__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities37633.getBasis = ((function (map__37631,map__37631__$1,data,tparam){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-a-table","make-a-table",-346613799,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__37625","p__37625",758076123,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__37631","map__37631",2092001662,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null),new cljs.core.Symbol(null,"meta37634","meta37634",-741477431,null)], null);
});})(map__37631,map__37631__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities37633.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37633.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37633";

biomarket.utilities.t_biomarket$utilities37633.cljs$lang$ctorPrWriter = ((function (map__37631,map__37631__$1,data,tparam){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities37633");
});})(map__37631,map__37631__$1,data,tparam))
;

biomarket.utilities.__GT_t_biomarket$utilities37633 = ((function (map__37631,map__37631__$1,data,tparam){
return (function biomarket$utilities$make_a_table_$___GT_t_biomarket$utilities37633(make_a_table__$1,p__37625__$1,owner__$1,map__37631__$2,data__$1,tparam__$1,meta37634){
return (new biomarket.utilities.t_biomarket$utilities37633(make_a_table__$1,p__37625__$1,owner__$1,map__37631__$2,data__$1,tparam__$1,meta37634));
});})(map__37631,map__37631__$1,data,tparam))
;

}

return (new biomarket.utilities.t_biomarket$utilities37633(biomarket$utilities$make_a_table,p__37625,owner,map__37631__$1,data,tparam,null));
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
biomarket.utilities.get_input = (function (){var method_table__26765__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26766__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26767__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26768__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26769__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","get-input"),((function (method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__,hierarchy__26769__auto__){
return (function() { 
var G__37639__delegate = function (owner,p__37636,args){
var map__37637 = p__37636;
var map__37637__$1 = ((((!((map__37637 == null)))?((((map__37637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37637):map__37637);
var fname = cljs.core.get.call(null,map__37637__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__37637__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return fname;
};
var G__37639 = function (owner,p__37636,var_args){
var args = null;
if (arguments.length > 2) {
var G__37640__i = 0, G__37640__a = new Array(arguments.length -  2);
while (G__37640__i < G__37640__a.length) {G__37640__a[G__37640__i] = arguments[G__37640__i + 2]; ++G__37640__i;}
  args = new cljs.core.IndexedSeq(G__37640__a,0);
} 
return G__37639__delegate.call(this,owner,p__37636,args);};
G__37639.cljs$lang$maxFixedArity = 2;
G__37639.cljs$lang$applyTo = (function (arglist__37641){
var owner = cljs.core.first(arglist__37641);
arglist__37641 = cljs.core.next(arglist__37641);
var p__37636 = cljs.core.first(arglist__37641);
var args = cljs.core.rest(arglist__37641);
return G__37639__delegate(owner,p__37636,args);
});
G__37639.cljs$core$IFn$_invoke$arity$variadic = G__37639__delegate;
return G__37639;
})()
;})(method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__,hierarchy__26769__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26769__auto__,method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.get_input,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__37650 = null;
var G__37650__2 = (function (owner,p__37642){
var map__37644 = p__37642;
var map__37644__$1 = ((((!((map__37644 == null)))?((((map__37644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37644):map__37644);
var m = map__37644__$1;
var fname = cljs.core.get.call(null,map__37644__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__37644__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return biomarket.utilities.get_input.call(null,owner,m,new cljs.core.Keyword(null,"inputs","inputs",865803858));
});
var G__37650__3 = (function (owner,p__37643,param_name){
var map__37646 = p__37643;
var map__37646__$1 = ((((!((map__37646 == null)))?((((map__37646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37646):map__37646);
var fname = cljs.core.get.call(null,map__37646__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__37646__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var inputs = om.core.get_state.call(null,owner,param_name);
var iv = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (inputs,map__37646,map__37646__$1,fname,element){
return (function (p__37648){
var vec__37649 = p__37648;
var k = cljs.core.nth.call(null,vec__37649,(0),null);
var v = cljs.core.nth.call(null,vec__37649,(1),null);
if(cljs.core.not.call(null,k.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element)))){
return v;
} else {
return null;
}
});})(inputs,map__37646,map__37646__$1,fname,element))
,new cljs.core.Keyword(null,"tests","tests",-1041085625).cljs$core$IFn$_invoke$arity$1(element))));
return om.core.set_state_BANG_.call(null,owner,param_name,cljs.core.assoc.call(null,om.core.get_state.call(null,owner,param_name),fname,cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"invalid","invalid",412869516),iv)));
});
G__37650 = function(owner,p__37643,param_name){
switch(arguments.length){
case 2:
return G__37650__2.call(this,owner,p__37643);
case 3:
return G__37650__3.call(this,owner,p__37643,param_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37650.cljs$core$IFn$_invoke$arity$2 = G__37650__2;
G__37650.cljs$core$IFn$_invoke$arity$3 = G__37650__3;
return G__37650;
})()
);
if(typeof biomarket.utilities.clean_input !== 'undefined'){
} else {
biomarket.utilities.clean_input = (function (){var method_table__26765__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26766__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26767__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26768__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26769__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","clean-input"),((function (method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__,hierarchy__26769__auto__){
return (function (element,classes,oc){
return new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(element);
});})(method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__,hierarchy__26769__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26769__auto__,method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__));
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
var x__26674__auto__ = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(classes),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)));
return cljs.core._conj.call(null,(function (){var x__26674__auto____$1 = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spid","spid",1854581004).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.Keyword(null,"className","className",-1983287057),"sr-only"], null)),new cljs.core.Keyword(null,"fb","fb",-1331669322).cljs$core$IFn$_invoke$arity$1(classes));
return cljs.core._conj.call(null,(function (){var x__26674__auto____$2 = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"help-block"], null)),new cljs.core.Keyword(null,"fb","fb",-1331669322).cljs$core$IFn$_invoke$arity$1(classes));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26674__auto____$2);
})(),x__26674__auto____$1);
})(),x__26674__auto__);
});
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"addon","addon",931813532),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26674__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26674__auto__);
})(),(function (){var x__26674__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
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
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26674__auto__);
})(),biomarket.utilities.icons.call(null,element,classes)));
}));
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"no-icon","no-icon",-1734606666),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26674__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26674__auto__);
})(),(function (){var x__26674__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
if(cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element))){
return om.dom.textarea.call(null,js);
} else {
return om.dom.input.call(null,js);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26674__auto__);
})()));
}));
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"default","default",-1987822328),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26674__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26674__auto__);
})(),(function (){var x__26674__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
if(cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element))){
return om.dom.textarea.call(null,js);
} else {
return om.dom.input.call(null,js);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26674__auto__);
})(),biomarket.utilities.icons.call(null,element,classes)));
}));
biomarket.utilities.the_input = (function biomarket$utilities$the_input(js,owner){
if(typeof biomarket.utilities.t_biomarket$utilities37654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37654 = (function (the_input,js,owner,meta37655){
this.the_input = the_input;
this.js = js;
this.owner = owner;
this.meta37655 = meta37655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37656,meta37655__$1){
var self__ = this;
var _37656__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37654(self__.the_input,self__.js,self__.owner,meta37655__$1));
});

biomarket.utilities.t_biomarket$utilities37654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37656){
var self__ = this;
var _37656__$1 = this;
return self__.meta37655;
});

biomarket.utilities.t_biomarket$utilities37654.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities37654.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return cljs.core.apply.call(null,om.dom.div,self__.js);
});

biomarket.utilities.t_biomarket$utilities37654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"the-input","the-input",1976764503,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta37655","meta37655",-414595822,null)], null);
});

biomarket.utilities.t_biomarket$utilities37654.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37654.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37654";

biomarket.utilities.t_biomarket$utilities37654.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities37654");
});

biomarket.utilities.__GT_t_biomarket$utilities37654 = (function biomarket$utilities$the_input_$___GT_t_biomarket$utilities37654(the_input__$1,js__$1,owner__$1,meta37655){
return (new biomarket.utilities.t_biomarket$utilities37654(the_input__$1,js__$1,owner__$1,meta37655));
});

}

return (new biomarket.utilities.t_biomarket$utilities37654(biomarket$utilities$the_input,js,owner,null));
});
biomarket.utilities.input = (function biomarket$utilities$input(p__37659,owner){
var vec__37667 = p__37659;
var fname = cljs.core.nth.call(null,vec__37667,(0),null);
var element = cljs.core.nth.call(null,vec__37667,(1),null);
var tag = cljs.core.nth.call(null,vec__37667,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities37668 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37668 = (function (input,p__37659,owner,vec__37667,fname,element,tag,meta37669){
this.input = input;
this.p__37659 = p__37659;
this.owner = owner;
this.vec__37667 = vec__37667;
this.fname = fname;
this.element = element;
this.tag = tag;
this.meta37669 = meta37669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__37667,fname,element,tag){
return (function (_37670,meta37669__$1){
var self__ = this;
var _37670__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37668(self__.input,self__.p__37659,self__.owner,self__.vec__37667,self__.fname,self__.element,self__.tag,meta37669__$1));
});})(vec__37667,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities37668.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__37667,fname,element,tag){
return (function (_37670){
var self__ = this;
var _37670__$1 = this;
return self__.meta37669;
});})(vec__37667,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities37668.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities37668.prototype.om$core$IRender$render$arity$1 = ((function (vec__37667,fname,element,tag){
return (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
var oc = ((function (this__36785__auto____$1,vec__37667,fname,element,tag){
return (function (p1__37657_SHARP_){
return biomarket.utilities.on_change_function.call(null,self__.owner,self__.tag,self__.fname,self__.element,p1__37657_SHARP_);
});})(this__36785__auto____$1,vec__37667,fname,element,tag))
;
var classes = (function (){var pred__37671 = cljs.core._EQ_;
var expr__37672 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.element);
if(cljs.core.truth_(pred__37671.call(null,false,expr__37672))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group",new cljs.core.Keyword(null,"icon","icon",1679606541),"",new cljs.core.Keyword(null,"fb","fb",-1331669322),""], null);
} else {
if(cljs.core.truth_(pred__37671.call(null,null,expr__37672))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group has-success has-feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"glyphicon glyphicon-ok form-control-feedback",new cljs.core.Keyword(null,"fb","fb",-1331669322),""], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group has-error has-feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"glyphicon glyphicon-remove form-control-feedback",new cljs.core.Keyword(null,"fb","fb",-1331669322),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (pred__37671,expr__37672,oc,this__36785__auto____$1,vec__37667,fname,element,tag){
return (function (p1__37658_SHARP_){
return React.DOM.div(null,p1__37658_SHARP_);
});})(pred__37671,expr__37672,oc,this__36785__auto____$1,vec__37667,fname,element,tag))
,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.element)))], null);
}
}
})();
return React.DOM.div({"className": new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)},React.DOM.label({"className": "control-label", "htmlFor": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.element)},new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.element)),om.core.build.call(null,biomarket.utilities.the_input,biomarket.utilities.clean_input.call(null,self__.element,classes,oc)));
});})(vec__37667,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities37668.getBasis = ((function (vec__37667,fname,element,tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fname","fname",-1154144278,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__37659","p__37659",301233396,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__37667","vec__37667",234553052,null),new cljs.core.Symbol(null,"fname","fname",-1154144278,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta37669","meta37669",972040855,null)], null);
});})(vec__37667,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities37668.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37668.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37668";

biomarket.utilities.t_biomarket$utilities37668.cljs$lang$ctorPrWriter = ((function (vec__37667,fname,element,tag){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities37668");
});})(vec__37667,fname,element,tag))
;

biomarket.utilities.__GT_t_biomarket$utilities37668 = ((function (vec__37667,fname,element,tag){
return (function biomarket$utilities$input_$___GT_t_biomarket$utilities37668(input__$1,p__37659__$1,owner__$1,vec__37667__$1,fname__$1,element__$1,tag__$1,meta37669){
return (new biomarket.utilities.t_biomarket$utilities37668(input__$1,p__37659__$1,owner__$1,vec__37667__$1,fname__$1,element__$1,tag__$1,meta37669));
});})(vec__37667,fname,element,tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities37668(biomarket$utilities$input,p__37659,owner,vec__37667,fname,element,tag,null));
});
biomarket.utilities.set_radio_state = (function biomarket$utilities$set_radio_state(owner,element,e){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"current","current",-1088038603),biomarket.utilities.get_text.call(null,e)));
});
biomarket.utilities.in_line_radio = (function biomarket$utilities$in_line_radio(p__37675,owner){
var vec__37683 = p__37675;
var name = cljs.core.nth.call(null,vec__37683,(0),null);
var element = cljs.core.nth.call(null,vec__37683,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities37684 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IWillUpdate}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37684 = (function (in_line_radio,p__37675,owner,vec__37683,name,element,meta37685){
this.in_line_radio = in_line_radio;
this.p__37675 = p__37675;
this.owner = owner;
this.vec__37683 = vec__37683;
this.name = name;
this.element = element;
this.meta37685 = meta37685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__37683,name,element){
return (function (_37686,meta37685__$1){
var self__ = this;
var _37686__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37684(self__.in_line_radio,self__.p__37675,self__.owner,self__.vec__37683,self__.name,self__.element,meta37685__$1));
});})(vec__37683,name,element))
;

biomarket.utilities.t_biomarket$utilities37684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__37683,name,element){
return (function (_37686){
var self__ = this;
var _37686__$1 = this;
return self__.meta37685;
});})(vec__37683,name,element))
;

biomarket.utilities.t_biomarket$utilities37684.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities37684.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__37683,name,element){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),self__.name,new cljs.core.Keyword(null,"element","element",1974019749),self__.element], null);
});})(vec__37683,name,element))
;

biomarket.utilities.t_biomarket$utilities37684.prototype.om$core$IWillUpdate$ = true;

biomarket.utilities.t_biomarket$utilities37684.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (vec__37683,name,element){
return (function (_,np,ns){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"radiod","radiod",450568867),ns);
});})(vec__37683,name,element))
;

biomarket.utilities.t_biomarket$utilities37684.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities37684.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__37683,name,element){
return (function (_,p__37687){
var self__ = this;
var map__37688 = p__37687;
var map__37688__$1 = ((((!((map__37688 == null)))?((((map__37688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37688):map__37688);
var element__$1 = cljs.core.get.call(null,map__37688__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "pure-u-1"},cljs.core.map.call(null,((function (___$1,map__37688,map__37688__$1,element__$1,vec__37683,name,element){
return (function (p1__37674_SHARP_){
return React.DOM.span(null,React.DOM.div({"className": "pure-u-1-5"},om.dom.input.call(null,{"type": "radio", "name": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(element__$1), "value": cljs.core.first.call(null,p1__37674_SHARP_), "onChange": ((function (___$1,map__37688,map__37688__$1,element__$1,vec__37683,name,element){
return (function (e){
return biomarket.utilities.set_radio_state.call(null,self__.owner,element__$1,e);
});})(___$1,map__37688,map__37688__$1,element__$1,vec__37683,name,element))
})),React.DOM.div({"className": "pure-u-1-4"},cljs.core.second.call(null,p1__37674_SHARP_)));
});})(___$1,map__37688,map__37688__$1,element__$1,vec__37683,name,element))
,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(element__$1)));
});})(vec__37683,name,element))
;

biomarket.utilities.t_biomarket$utilities37684.getBasis = ((function (vec__37683,name,element){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"in-line-radio","in-line-radio",803575522,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"element","element",-680416020,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__37675","p__37675",-942233253,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__37683","vec__37683",-1135244814,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"meta37685","meta37685",1070514852,null)], null);
});})(vec__37683,name,element))
;

biomarket.utilities.t_biomarket$utilities37684.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37684.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37684";

biomarket.utilities.t_biomarket$utilities37684.cljs$lang$ctorPrWriter = ((function (vec__37683,name,element){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities37684");
});})(vec__37683,name,element))
;

biomarket.utilities.__GT_t_biomarket$utilities37684 = ((function (vec__37683,name,element){
return (function biomarket$utilities$in_line_radio_$___GT_t_biomarket$utilities37684(in_line_radio__$1,p__37675__$1,owner__$1,vec__37683__$1,name__$1,element__$1,meta37685){
return (new biomarket.utilities.t_biomarket$utilities37684(in_line_radio__$1,p__37675__$1,owner__$1,vec__37683__$1,name__$1,element__$1,meta37685));
});})(vec__37683,name,element))
;

}

return (new biomarket.utilities.t_biomarket$utilities37684(biomarket$utilities$in_line_radio,p__37675,owner,vec__37683,name,element,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=utilities.js.map