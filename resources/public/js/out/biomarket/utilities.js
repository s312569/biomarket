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
var args__26796__auto__ = [];
var len__26789__auto___298939 = arguments.length;
var i__26790__auto___298940 = (0);
while(true){
if((i__26790__auto___298940 < len__26789__auto___298939)){
args__26796__auto__.push((arguments[i__26790__auto___298940]));

var G__298941 = (i__26790__auto___298940 + (1));
i__26790__auto___298940 = G__298941;
continue;
} else {
}
break;
}

var argseq__26797__auto__ = ((((0) < args__26796__auto__.length))?(new cljs.core.IndexedSeq(args__26796__auto__.slice((0)),(0),null)):null);
return biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic(argseq__26797__auto__);
});

biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic = (function (s){
return console.log(cljs.core.apply.call(null,cljs.core.str,s));
});

biomarket.utilities.log.cljs$lang$maxFixedArity = (0);

biomarket.utilities.log.cljs$lang$applyTo = (function (seq298938){
return biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq298938));
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
biomarket.utilities.error_handler = (function biomarket$utilities$error_handler(p__298942){
var map__298945 = p__298942;
var map__298945__$1 = ((((!((map__298945 == null)))?((((map__298945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__298945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__298945):map__298945);
var status = cljs.core.get.call(null,map__298945__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__298945__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return biomarket.utilities.log.call(null,[cljs.core.str("Something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
biomarket.utilities.post_params = (function biomarket$utilities$post_params(url,params,handler){
return ajax.core.POST.call(null,url,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),biomarket.utilities.error_handler,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
if(typeof biomarket.utilities.loop_manager !== 'undefined'){
} else {
biomarket.utilities.loop_manager = (function (){var method_table__26644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26646__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26647__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26648__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","loop-manager"),((function (method_table__26644__auto__,prefer_table__26645__auto__,method_cache__26646__auto__,cached_hierarchy__26647__auto__,hierarchy__26648__auto__){
return (function() { 
var G__298947__delegate = function (o,d,args){
return new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(d));
};
var G__298947 = function (o,d,var_args){
var args = null;
if (arguments.length > 2) {
var G__298948__i = 0, G__298948__a = new Array(arguments.length -  2);
while (G__298948__i < G__298948__a.length) {G__298948__a[G__298948__i] = arguments[G__298948__i + 2]; ++G__298948__i;}
  args = new cljs.core.IndexedSeq(G__298948__a,0);
} 
return G__298947__delegate.call(this,o,d,args);};
G__298947.cljs$lang$maxFixedArity = 2;
G__298947.cljs$lang$applyTo = (function (arglist__298949){
var o = cljs.core.first(arglist__298949);
arglist__298949 = cljs.core.next(arglist__298949);
var d = cljs.core.first(arglist__298949);
var args = cljs.core.rest(arglist__298949);
return G__298947__delegate(o,d,args);
});
G__298947.cljs$core$IFn$_invoke$arity$variadic = G__298947__delegate;
return G__298947;
})()
;})(method_table__26644__auto__,prefer_table__26645__auto__,method_cache__26646__auto__,cached_hierarchy__26647__auto__,hierarchy__26648__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26648__auto__,method_table__26644__auto__,prefer_table__26645__auto__,method_cache__26646__auto__,cached_hierarchy__26647__auto__));
})();
}
if(typeof biomarket.utilities.broadcast_loop_manager !== 'undefined'){
} else {
biomarket.utilities.broadcast_loop_manager = (function (){var method_table__26644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26646__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26647__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26648__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","broadcast-loop-manager"),((function (method_table__26644__auto__,prefer_table__26645__auto__,method_cache__26646__auto__,cached_hierarchy__26647__auto__,hierarchy__26648__auto__){
return (function (o,d){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(d);
});})(method_table__26644__auto__,prefer_table__26645__auto__,method_cache__26646__auto__,cached_hierarchy__26647__auto__,hierarchy__26648__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26648__auto__,method_table__26644__auto__,prefer_table__26645__auto__,method_cache__26646__auto__,cached_hierarchy__26647__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"input-update","input-update",902761778),(function() { 
var G__298953__delegate = function (owner,p__298950,_){
var map__298951 = p__298950;
var map__298951__$1 = ((((!((map__298951 == null)))?((((map__298951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__298951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__298951):map__298951);
var data = cljs.core.get.call(null,map__298951__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.utilities.get_input.call(null,owner,data);
};
var G__298953 = function (owner,p__298950,var_args){
var _ = null;
if (arguments.length > 2) {
var G__298954__i = 0, G__298954__a = new Array(arguments.length -  2);
while (G__298954__i < G__298954__a.length) {G__298954__a[G__298954__i] = arguments[G__298954__i + 2]; ++G__298954__i;}
  _ = new cljs.core.IndexedSeq(G__298954__a,0);
} 
return G__298953__delegate.call(this,owner,p__298950,_);};
G__298953.cljs$lang$maxFixedArity = 2;
G__298953.cljs$lang$applyTo = (function (arglist__298955){
var owner = cljs.core.first(arglist__298955);
arglist__298955 = cljs.core.next(arglist__298955);
var p__298950 = cljs.core.first(arglist__298955);
var _ = cljs.core.rest(arglist__298955);
return G__298953__delegate(owner,p__298950,_);
});
G__298953.cljs$core$IFn$_invoke$arity$variadic = G__298953__delegate;
return G__298953;
})()
);
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"submitted","submitted",-131658962),(function (owner,p__298956,func){
var map__298957 = p__298956;
var map__298957__$1 = ((((!((map__298957 == null)))?((((map__298957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__298957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__298957):map__298957);
var data = cljs.core.get.call(null,map__298957__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return func.call(null);
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"project","project",1124394579),(function (owner,p__298959){
var map__298960 = p__298959;
var map__298960__$1 = ((((!((map__298960 == null)))?((((map__298960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__298960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__298960):map__298960);
var data = cljs.core.get.call(null,map__298960__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view-type","view-type",-1848894559))));
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"comment","comment",532206069),(function (owner,p__298962){
var map__298963 = p__298962;
var map__298963__$1 = ((((!((map__298963 == null)))?((((map__298963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__298963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__298963):map__298963);
var data = cljs.core.get.call(null,map__298963__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.conj.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"comments","comments",-293346423)),data));
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"amend-project-status","amend-project-status",-1452060792),(function (owner,p__298967){
var map__298968 = p__298967;
var map__298968__$1 = ((((!((map__298968 == null)))?((((map__298968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__298968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__298968):map__298968);
var data = cljs.core.get.call(null,map__298968__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var status__GT_view = ((function (map__298968,map__298968__$1,data){
return (function (p1__298965_SHARP_){
return new cljs.core.PersistentArrayMap(null, 5, ["open",new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),"expired",new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),"completed",new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),"active",new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),"deleted",new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533)], null).call(null,p1__298965_SHARP_);
});})(map__298968,map__298968__$1,data))
;
var cv = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814));
var projs = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983));
if(cljs.core._EQ_.call(null,cv,status__GT_view.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(data)))){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.conj.call(null,projs,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),om.core.get_state.call(null,new cljs.core.Keyword(null,"view-type","view-type",-1848894559)))));
} else {
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.remove.call(null,((function (status__GT_view,cv,projs,map__298968,map__298968__$1,data){
return (function (p1__298966_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__298966_SHARP_));
});})(status__GT_view,cv,projs,map__298968,map__298968__$1,data))
,projs));
}
}));
biomarket.utilities.pub_info = (function biomarket$utilities$pub_info(owner,topic,data){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
biomarket.utilities.register_loop = (function biomarket$utilities$register_loop(var_args){
var args298970 = [];
var len__26789__auto___299010 = arguments.length;
var i__26790__auto___299011 = (0);
while(true){
if((i__26790__auto___299011 < len__26789__auto___299010)){
args298970.push((arguments[i__26790__auto___299011]));

var G__299012 = (i__26790__auto___299011 + (1));
i__26790__auto___299011 = G__299012;
continue;
} else {
}
break;
}

var G__298972 = args298970.length;
switch (G__298972) {
case 2:
return biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args298970.length)].join('')));

}
});

biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$2 = (function (owner,topic){
return biomarket.utilities.register_loop.call(null,owner,topic,biomarket.utilities.loop_manager);
});

biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$3 = (function (owner,topic,func){
var c = cljs.core.async.chan.call(null);
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var events = cljs.core.async.sub.call(null,nc,topic,c);
var c__28534__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28534__auto__,c,nc,events){
return (function (){
var f__28535__auto__ = (function (){var switch__28513__auto__ = ((function (c__28534__auto__,c,nc,events){
return (function (state_298991){
var state_val_298992 = (state_298991[(1)]);
if((state_val_298992 === (1))){
var state_298991__$1 = state_298991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_298991__$1,(2),events);
} else {
if((state_val_298992 === (2))){
var inst_298974 = (state_298991[(2)]);
var inst_298975 = inst_298974;
var state_298991__$1 = (function (){var statearr_298993 = state_298991;
(statearr_298993[(7)] = inst_298975);

return statearr_298993;
})();
var statearr_298994_299014 = state_298991__$1;
(statearr_298994_299014[(2)] = null);

(statearr_298994_299014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_298992 === (3))){
var inst_298975 = (state_298991[(7)]);
var inst_298977 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_298975);
var inst_298978 = cljs.core._EQ_.call(null,inst_298977,new cljs.core.Keyword(null,"end","end",-268185958));
var state_298991__$1 = state_298991;
if(inst_298978){
var statearr_298995_299015 = state_298991__$1;
(statearr_298995_299015[(1)] = (5));

} else {
var statearr_298996_299016 = state_298991__$1;
(statearr_298996_299016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_298992 === (4))){
var inst_298989 = (state_298991[(2)]);
var state_298991__$1 = state_298991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_298991__$1,inst_298989);
} else {
if((state_val_298992 === (5))){
var state_298991__$1 = state_298991;
var statearr_298997_299017 = state_298991__$1;
(statearr_298997_299017[(2)] = null);

(statearr_298997_299017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_298992 === (6))){
var inst_298975 = (state_298991[(7)]);
var inst_298981 = func.call(null,owner,inst_298975);
var state_298991__$1 = (function (){var statearr_298998 = state_298991;
(statearr_298998[(8)] = inst_298981);

return statearr_298998;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_298991__$1,(8),events);
} else {
if((state_val_298992 === (7))){
var inst_298986 = (state_298991[(2)]);
var inst_298987 = cljs.core.async.unsub.call(null,nc,topic,c);
var state_298991__$1 = (function (){var statearr_298999 = state_298991;
(statearr_298999[(9)] = inst_298986);

return statearr_298999;
})();
var statearr_299000_299018 = state_298991__$1;
(statearr_299000_299018[(2)] = inst_298987);

(statearr_299000_299018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_298992 === (8))){
var inst_298983 = (state_298991[(2)]);
var inst_298975 = inst_298983;
var state_298991__$1 = (function (){var statearr_299001 = state_298991;
(statearr_299001[(7)] = inst_298975);

return statearr_299001;
})();
var statearr_299002_299019 = state_298991__$1;
(statearr_299002_299019[(2)] = null);

(statearr_299002_299019[(1)] = (3));


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
});})(c__28534__auto__,c,nc,events))
;
return ((function (switch__28513__auto__,c__28534__auto__,c,nc,events){
return (function() {
var biomarket$utilities$state_machine__28514__auto__ = null;
var biomarket$utilities$state_machine__28514__auto____0 = (function (){
var statearr_299006 = [null,null,null,null,null,null,null,null,null,null];
(statearr_299006[(0)] = biomarket$utilities$state_machine__28514__auto__);

(statearr_299006[(1)] = (1));

return statearr_299006;
});
var biomarket$utilities$state_machine__28514__auto____1 = (function (state_298991){
while(true){
var ret_value__28515__auto__ = (function (){try{while(true){
var result__28516__auto__ = switch__28513__auto__.call(null,state_298991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28516__auto__;
}
break;
}
}catch (e299007){if((e299007 instanceof Object)){
var ex__28517__auto__ = e299007;
var statearr_299008_299020 = state_298991;
(statearr_299008_299020[(5)] = ex__28517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_298991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e299007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__299021 = state_298991;
state_298991 = G__299021;
continue;
} else {
return ret_value__28515__auto__;
}
break;
}
});
biomarket$utilities$state_machine__28514__auto__ = function(state_298991){
switch(arguments.length){
case 0:
return biomarket$utilities$state_machine__28514__auto____0.call(this);
case 1:
return biomarket$utilities$state_machine__28514__auto____1.call(this,state_298991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$utilities$state_machine__28514__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$utilities$state_machine__28514__auto____0;
biomarket$utilities$state_machine__28514__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$utilities$state_machine__28514__auto____1;
return biomarket$utilities$state_machine__28514__auto__;
})()
;})(switch__28513__auto__,c__28534__auto__,c,nc,events))
})();
var state__28536__auto__ = (function (){var statearr_299009 = f__28535__auto__.call(null);
(statearr_299009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28534__auto__);

return statearr_299009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28536__auto__);
});})(c__28534__auto__,c,nc,events))
);

return c__28534__auto__;
});

biomarket.utilities.register_loop.cljs$lang$maxFixedArity = 3;
biomarket.utilities.unsubscribe = (function biomarket$utilities$unsubscribe(var_args){
var args__26796__auto__ = [];
var len__26789__auto___299028 = arguments.length;
var i__26790__auto___299029 = (0);
while(true){
if((i__26790__auto___299029 < len__26789__auto___299028)){
args__26796__auto__.push((arguments[i__26790__auto___299029]));

var G__299030 = (i__26790__auto___299029 + (1));
i__26790__auto___299029 = G__299030;
continue;
} else {
}
break;
}

var argseq__26797__auto__ = ((((1) < args__26796__auto__.length))?(new cljs.core.IndexedSeq(args__26796__auto__.slice((1)),(0),null)):null);
return biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26797__auto__);
});

biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic = (function (owner,topics){
var pc = new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var seq__299024 = cljs.core.seq.call(null,topics);
var chunk__299025 = null;
var count__299026 = (0);
var i__299027 = (0);
while(true){
if((i__299027 < count__299026)){
var t = cljs.core._nth.call(null,chunk__299025,i__299027);
cljs.core.async.put_BANG_.call(null,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"end","end",-268185958)], null));

var G__299031 = seq__299024;
var G__299032 = chunk__299025;
var G__299033 = count__299026;
var G__299034 = (i__299027 + (1));
seq__299024 = G__299031;
chunk__299025 = G__299032;
count__299026 = G__299033;
i__299027 = G__299034;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__299024);
if(temp__4425__auto__){
var seq__299024__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__299024__$1)){
var c__26530__auto__ = cljs.core.chunk_first.call(null,seq__299024__$1);
var G__299035 = cljs.core.chunk_rest.call(null,seq__299024__$1);
var G__299036 = c__26530__auto__;
var G__299037 = cljs.core.count.call(null,c__26530__auto__);
var G__299038 = (0);
seq__299024 = G__299035;
chunk__299025 = G__299036;
count__299026 = G__299037;
i__299027 = G__299038;
continue;
} else {
var t = cljs.core.first.call(null,seq__299024__$1);
cljs.core.async.put_BANG_.call(null,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"end","end",-268185958)], null));

var G__299039 = cljs.core.next.call(null,seq__299024__$1);
var G__299040 = null;
var G__299041 = (0);
var G__299042 = (0);
seq__299024 = G__299039;
chunk__299025 = G__299040;
count__299026 = G__299041;
i__299027 = G__299042;
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

biomarket.utilities.unsubscribe.cljs$lang$applyTo = (function (seq299022){
var G__299023 = cljs.core.first.call(null,seq299022);
var seq299022__$1 = cljs.core.next.call(null,seq299022);
return biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic(G__299023,seq299022__$1);
});
biomarket.utilities.register_broadcast_loop = (function biomarket$utilities$register_broadcast_loop(owner,topic,chan){
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var events = cljs.core.async.sub.call(null,nc,topic,chan);
var c__28534__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28534__auto__,nc,events){
return (function (){
var f__28535__auto__ = (function (){var switch__28513__auto__ = ((function (c__28534__auto__,nc,events){
return (function (state_299098){
var state_val_299099 = (state_299098[(1)]);
if((state_val_299099 === (1))){
var state_299098__$1 = state_299098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_299098__$1,(2),events);
} else {
if((state_val_299099 === (2))){
var inst_299081 = (state_299098[(2)]);
var inst_299082 = inst_299081;
var state_299098__$1 = (function (){var statearr_299100 = state_299098;
(statearr_299100[(7)] = inst_299082);

return statearr_299100;
})();
var statearr_299101_299117 = state_299098__$1;
(statearr_299101_299117[(2)] = null);

(statearr_299101_299117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_299099 === (3))){
var inst_299082 = (state_299098[(7)]);
var inst_299084 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_299082);
var inst_299085 = cljs.core._EQ_.call(null,inst_299084,new cljs.core.Keyword(null,"end","end",-268185958));
var state_299098__$1 = state_299098;
if(inst_299085){
var statearr_299102_299118 = state_299098__$1;
(statearr_299102_299118[(1)] = (5));

} else {
var statearr_299103_299119 = state_299098__$1;
(statearr_299103_299119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_299099 === (4))){
var inst_299096 = (state_299098[(2)]);
var state_299098__$1 = state_299098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_299098__$1,inst_299096);
} else {
if((state_val_299099 === (5))){
var state_299098__$1 = state_299098;
var statearr_299104_299120 = state_299098__$1;
(statearr_299104_299120[(2)] = null);

(statearr_299104_299120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_299099 === (6))){
var inst_299082 = (state_299098[(7)]);
var inst_299088 = biomarket.utilities.broadcast_loop_manager.call(null,owner,inst_299082);
var state_299098__$1 = (function (){var statearr_299105 = state_299098;
(statearr_299105[(8)] = inst_299088);

return statearr_299105;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_299098__$1,(8),events);
} else {
if((state_val_299099 === (7))){
var inst_299093 = (state_299098[(2)]);
var inst_299094 = cljs.core.async.unsub.call(null,nc,topic,chan);
var state_299098__$1 = (function (){var statearr_299106 = state_299098;
(statearr_299106[(9)] = inst_299093);

return statearr_299106;
})();
var statearr_299107_299121 = state_299098__$1;
(statearr_299107_299121[(2)] = inst_299094);

(statearr_299107_299121[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_299099 === (8))){
var inst_299090 = (state_299098[(2)]);
var inst_299082 = inst_299090;
var state_299098__$1 = (function (){var statearr_299108 = state_299098;
(statearr_299108[(7)] = inst_299082);

return statearr_299108;
})();
var statearr_299109_299122 = state_299098__$1;
(statearr_299109_299122[(2)] = null);

(statearr_299109_299122[(1)] = (3));


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
});})(c__28534__auto__,nc,events))
;
return ((function (switch__28513__auto__,c__28534__auto__,nc,events){
return (function() {
var biomarket$utilities$register_broadcast_loop_$_state_machine__28514__auto__ = null;
var biomarket$utilities$register_broadcast_loop_$_state_machine__28514__auto____0 = (function (){
var statearr_299113 = [null,null,null,null,null,null,null,null,null,null];
(statearr_299113[(0)] = biomarket$utilities$register_broadcast_loop_$_state_machine__28514__auto__);

(statearr_299113[(1)] = (1));

return statearr_299113;
});
var biomarket$utilities$register_broadcast_loop_$_state_machine__28514__auto____1 = (function (state_299098){
while(true){
var ret_value__28515__auto__ = (function (){try{while(true){
var result__28516__auto__ = switch__28513__auto__.call(null,state_299098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28516__auto__;
}
break;
}
}catch (e299114){if((e299114 instanceof Object)){
var ex__28517__auto__ = e299114;
var statearr_299115_299123 = state_299098;
(statearr_299115_299123[(5)] = ex__28517__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_299098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e299114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28515__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__299124 = state_299098;
state_299098 = G__299124;
continue;
} else {
return ret_value__28515__auto__;
}
break;
}
});
biomarket$utilities$register_broadcast_loop_$_state_machine__28514__auto__ = function(state_299098){
switch(arguments.length){
case 0:
return biomarket$utilities$register_broadcast_loop_$_state_machine__28514__auto____0.call(this);
case 1:
return biomarket$utilities$register_broadcast_loop_$_state_machine__28514__auto____1.call(this,state_299098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$utilities$register_broadcast_loop_$_state_machine__28514__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$utilities$register_broadcast_loop_$_state_machine__28514__auto____0;
biomarket$utilities$register_broadcast_loop_$_state_machine__28514__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$utilities$register_broadcast_loop_$_state_machine__28514__auto____1;
return biomarket$utilities$register_broadcast_loop_$_state_machine__28514__auto__;
})()
;})(switch__28513__auto__,c__28534__auto__,nc,events))
})();
var state__28536__auto__ = (function (){var statearr_299116 = f__28535__auto__.call(null);
(statearr_299116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28534__auto__);

return statearr_299116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28536__auto__);
});})(c__28534__auto__,nc,events))
);

return c__28534__auto__;
});
biomarket.utilities.unsub_broadcast_loop = (function biomarket$utilities$unsub_broadcast_loop(owner,topic,chan){
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
return cljs.core.async.unsub.call(null,nc,topic,chan);
});
biomarket.utilities.show_default = (function biomarket$utilities$show_default(_,owner){
if(typeof biomarket.utilities.t_biomarket$utilities299128 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities299128 = (function (show_default,_,owner,meta299129){
this.show_default = show_default;
this._ = _;
this.owner = owner;
this.meta299129 = meta299129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities299128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_299130,meta299129__$1){
var self__ = this;
var _299130__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities299128(self__.show_default,self__._,self__.owner,meta299129__$1));
});

biomarket.utilities.t_biomarket$utilities299128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_299130){
var self__ = this;
var _299130__$1 = this;
return self__.meta299129;
});

biomarket.utilities.t_biomarket$utilities299128.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities299128.prototype.om$core$IRender$render$arity$1 = (function (this__28693__auto__){
var self__ = this;
var this__28693__auto____$1 = this;
return React.DOM.div(null);
});

biomarket.utilities.t_biomarket$utilities299128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-default","show-default",-609967859,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta299129","meta299129",411598632,null)], null);
});

biomarket.utilities.t_biomarket$utilities299128.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities299128.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities299128";

biomarket.utilities.t_biomarket$utilities299128.cljs$lang$ctorPrWriter = (function (this__26325__auto__,writer__26326__auto__,opt__26327__auto__){
return cljs.core._write.call(null,writer__26326__auto__,"biomarket.utilities/t_biomarket$utilities299128");
});

biomarket.utilities.__GT_t_biomarket$utilities299128 = (function biomarket$utilities$show_default_$___GT_t_biomarket$utilities299128(show_default__$1,___$1,owner__$1,meta299129){
return (new biomarket.utilities.t_biomarket$utilities299128(show_default__$1,___$1,owner__$1,meta299129));
});

}

return (new biomarket.utilities.t_biomarket$utilities299128(biomarket$utilities$show_default,_,owner,null));
});
biomarket.utilities.bottom_skel = (function biomarket$utilities$bottom_skel(p__299131,owner){
var map__299142 = p__299131;
var map__299142__$1 = ((((!((map__299142 == null)))?((((map__299142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__299142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__299142):map__299142);
var project = map__299142__$1;
var links = cljs.core.get.call(null,map__299142__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var widget = cljs.core.get.call(null,map__299142__$1,new cljs.core.Keyword(null,"widget","widget",-853968943));
if(typeof biomarket.utilities.t_biomarket$utilities299144 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities299144 = (function (bottom_skel,p__299131,owner,map__299142,project,links,widget,meta299145){
this.bottom_skel = bottom_skel;
this.p__299131 = p__299131;
this.owner = owner;
this.map__299142 = map__299142;
this.project = project;
this.links = links;
this.widget = widget;
this.meta299145 = meta299145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities299144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__299142,map__299142__$1,project,links,widget){
return (function (_299146,meta299145__$1){
var self__ = this;
var _299146__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities299144(self__.bottom_skel,self__.p__299131,self__.owner,self__.map__299142,self__.project,self__.links,self__.widget,meta299145__$1));
});})(map__299142,map__299142__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities299144.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__299142,map__299142__$1,project,links,widget){
return (function (_299146){
var self__ = this;
var _299146__$1 = this;
return self__.meta299145;
});})(map__299142,map__299142__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities299144.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities299144.prototype.om$core$IRender$render$arity$1 = ((function (map__299142,map__299142__$1,project,links,widget){
return (function (this__28693__auto__){
var self__ = this;
var this__28693__auto____$1 = this;
var visible = new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(self__.project);
return React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,((function (visible,this__28693__auto____$1,map__299142,map__299142__$1,project,links,widget){
return (function (p__299147){
var vec__299148 = p__299147;
var tag = cljs.core.nth.call(null,vec__299148,(0),null);
var ele = cljs.core.nth.call(null,vec__299148,(1),null);
return React.DOM.a({"className": ((cljs.core._EQ_.call(null,visible,tag))?"btn btn-default btn-sm active":"btn btn-default btn-sm"), "onClick": ((function (vec__299148,tag,ele,visible,this__28693__auto____$1,map__299142,map__299142__$1,project,links,widget){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"show-bottom","show-bottom",-1162121528),new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),((cljs.core._EQ_.call(null,visible,tag))?new cljs.core.Keyword(null,"default","default",-1987822328):tag)], null));
});})(vec__299148,tag,ele,visible,this__28693__auto____$1,map__299142,map__299142__$1,project,links,widget))
},cljs.core.first.call(null,ele));
});})(visible,this__28693__auto____$1,map__299142,map__299142__$1,project,links,widget))
,self__.links)))),(function (){var pred__299149 = cljs.core._EQ_;
var expr__299150 = visible;
if(cljs.core.truth_(pred__299149.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),expr__299150))){
return React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},om.core.build.call(null,biomarket.utilities.show_default,null)));
} else {
return om.core.build.call(null,cljs.core.second.call(null,visible.call(null,self__.links)),((cljs.core.seq.call(null,cljs.core.drop.call(null,(2),visible.call(null,self__.links))))?cljs.core.vec.call(null,cljs.core.cons.call(null,self__.project,cljs.core.drop.call(null,(2),visible.call(null,self__.links)))):self__.project));
}
})());
});})(map__299142,map__299142__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities299144.getBasis = ((function (map__299142,map__299142__$1,project,links,widget){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bottom-skel","bottom-skel",24371686,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"widget","widget",786562584,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"project","project",-1530041190,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__299131","p__299131",-1530341893,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__299142","map__299142",-128837394,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"widget","widget",786562584,null),new cljs.core.Symbol(null,"meta299145","meta299145",-1629544892,null)], null);
});})(map__299142,map__299142__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities299144.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities299144.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities299144";

biomarket.utilities.t_biomarket$utilities299144.cljs$lang$ctorPrWriter = ((function (map__299142,map__299142__$1,project,links,widget){
return (function (this__26325__auto__,writer__26326__auto__,opt__26327__auto__){
return cljs.core._write.call(null,writer__26326__auto__,"biomarket.utilities/t_biomarket$utilities299144");
});})(map__299142,map__299142__$1,project,links,widget))
;

biomarket.utilities.__GT_t_biomarket$utilities299144 = ((function (map__299142,map__299142__$1,project,links,widget){
return (function biomarket$utilities$bottom_skel_$___GT_t_biomarket$utilities299144(bottom_skel__$1,p__299131__$1,owner__$1,map__299142__$2,project__$1,links__$1,widget__$1,meta299145){
return (new biomarket.utilities.t_biomarket$utilities299144(bottom_skel__$1,p__299131__$1,owner__$1,map__299142__$2,project__$1,links__$1,widget__$1,meta299145));
});})(map__299142,map__299142__$1,project,links,widget))
;

}

return (new biomarket.utilities.t_biomarket$utilities299144(biomarket$utilities$bottom_skel,p__299131,owner,map__299142__$1,project,links,widget,null));
});
if(typeof biomarket.utilities.bottom !== 'undefined'){
} else {
biomarket.utilities.bottom = (function (){var method_table__26644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26646__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26647__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26648__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","bottom"),((function (method_table__26644__auto__,prefer_table__26645__auto__,method_cache__26646__auto__,cached_hierarchy__26647__auto__,hierarchy__26648__auto__){
return (function (p){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(p);
});})(method_table__26644__auto__,prefer_table__26645__auto__,method_cache__26646__auto__,cached_hierarchy__26647__auto__,hierarchy__26648__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26648__auto__,method_table__26644__auto__,prefer_table__26645__auto__,method_cache__26646__auto__,cached_hierarchy__26647__auto__));
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
if(typeof biomarket.utilities.t_biomarket$utilities299161 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities299161 = (function (more_less_text,text,owner,meta299162){
this.more_less_text = more_less_text;
this.text = text;
this.owner = owner;
this.meta299162 = meta299162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities299161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_299163,meta299162__$1){
var self__ = this;
var _299163__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities299161(self__.more_less_text,self__.text,self__.owner,meta299162__$1));
});

biomarket.utilities.t_biomarket$utilities299161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_299163){
var self__ = this;
var _299163__$1 = this;
return self__.meta299162;
});

biomarket.utilities.t_biomarket$utilities299161.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities299161.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"less","less",-428869198)], null);
});

biomarket.utilities.t_biomarket$utilities299161.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities299161.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__299164){
var self__ = this;
var map__299165 = p__299164;
var map__299165__$1 = ((((!((map__299165 == null)))?((((map__299165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__299165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__299165):map__299165);
var showing = cljs.core.get.call(null,map__299165__$1,new cljs.core.Keyword(null,"showing","showing",798009604));
var ___$1 = this;
return React.DOM.div(null,(((cljs.core.count.call(null,self__.text) < (400)))?React.DOM.div(null,self__.text):(function (){var pred__299167 = cljs.core._EQ_;
var expr__299168 = showing;
if(cljs.core.truth_(pred__299167.call(null,new cljs.core.Keyword(null,"less","less",-428869198),expr__299168))){
return React.DOM.div(null,React.DOM.span(null,[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(300),self__.text))),cljs.core.str(" ... ")].join('')),React.DOM.a({"onClick": ((function (pred__299167,expr__299168,___$1,map__299165,map__299165__$1,showing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"more","more",-2058821800));
});})(pred__299167,expr__299168,___$1,map__299165,map__299165__$1,showing))
, "className": "flinka"}," More"));
} else {
if(cljs.core.truth_(pred__299167.call(null,new cljs.core.Keyword(null,"more","more",-2058821800),expr__299168))){
return React.DOM.div(null,React.DOM.span(null,self__.text),React.DOM.a({"onClick": ((function (pred__299167,expr__299168,___$1,map__299165,map__299165__$1,showing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"less","less",-428869198));
});})(pred__299167,expr__299168,___$1,map__299165,map__299165__$1,showing))
, "className": "flinka"}," Less"));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__299168)].join('')));
}
}
})()));
});

biomarket.utilities.t_biomarket$utilities299161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"more-less-text","more-less-text",-1737643469,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta299162","meta299162",-1763046841,null)], null);
});

biomarket.utilities.t_biomarket$utilities299161.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities299161.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities299161";

biomarket.utilities.t_biomarket$utilities299161.cljs$lang$ctorPrWriter = (function (this__26325__auto__,writer__26326__auto__,opt__26327__auto__){
return cljs.core._write.call(null,writer__26326__auto__,"biomarket.utilities/t_biomarket$utilities299161");
});

biomarket.utilities.__GT_t_biomarket$utilities299161 = (function biomarket$utilities$more_less_text_$___GT_t_biomarket$utilities299161(more_less_text__$1,text__$1,owner__$1,meta299162){
return (new biomarket.utilities.t_biomarket$utilities299161(more_less_text__$1,text__$1,owner__$1,meta299162));
});

}

return (new biomarket.utilities.t_biomarket$utilities299161(biomarket$utilities$more_less_text,text,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.utilities.control_buttons = (function biomarket$utilities$control_buttons(inputs,owner){
if(typeof biomarket.utilities.t_biomarket$utilities299174 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities299174 = (function (control_buttons,inputs,owner,meta299175){
this.control_buttons = control_buttons;
this.inputs = inputs;
this.owner = owner;
this.meta299175 = meta299175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities299174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_299176,meta299175__$1){
var self__ = this;
var _299176__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities299174(self__.control_buttons,self__.inputs,self__.owner,meta299175__$1));
});

biomarket.utilities.t_biomarket$utilities299174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_299176){
var self__ = this;
var _299176__$1 = this;
return self__.meta299175;
});

biomarket.utilities.t_biomarket$utilities299174.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities299174.prototype.om$core$IRender$render$arity$1 = (function (this__28693__auto__){
var self__ = this;
var this__28693__auto____$1 = this;
return React.DOM.div({"className": "panel panel-default"},cljs.core.apply.call(null,om.dom.div,{"className": "panel-heading"},cljs.core.map.call(null,((function (this__28693__auto____$1){
return (function (p1__299170_SHARP_){
return React.DOM.a({"className": "btn btn-default", "onClick": cljs.core.second.call(null,p1__299170_SHARP_)},cljs.core.first.call(null,p1__299170_SHARP_));
});})(this__28693__auto____$1))
,self__.inputs)));
});

biomarket.utilities.t_biomarket$utilities299174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"control-buttons","control-buttons",285817705,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta299175","meta299175",12851234,null)], null);
});

biomarket.utilities.t_biomarket$utilities299174.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities299174.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities299174";

biomarket.utilities.t_biomarket$utilities299174.cljs$lang$ctorPrWriter = (function (this__26325__auto__,writer__26326__auto__,opt__26327__auto__){
return cljs.core._write.call(null,writer__26326__auto__,"biomarket.utilities/t_biomarket$utilities299174");
});

biomarket.utilities.__GT_t_biomarket$utilities299174 = (function biomarket$utilities$control_buttons_$___GT_t_biomarket$utilities299174(control_buttons__$1,inputs__$1,owner__$1,meta299175){
return (new biomarket.utilities.t_biomarket$utilities299174(control_buttons__$1,inputs__$1,owner__$1,meta299175));
});

}

return (new biomarket.utilities.t_biomarket$utilities299174(biomarket$utilities$control_buttons,inputs,owner,null));
});
biomarket.utilities.menu_item = (function biomarket$utilities$menu_item(p__299177,owner){
var vec__299182 = p__299177;
var text = cljs.core.nth.call(null,vec__299182,(0),null);
var topic = cljs.core.nth.call(null,vec__299182,(1),null);
var tag = cljs.core.nth.call(null,vec__299182,(2),null);
var current = cljs.core.nth.call(null,vec__299182,(3),null);
if(typeof biomarket.utilities.t_biomarket$utilities299183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities299183 = (function (menu_item,p__299177,owner,vec__299182,text,topic,tag,current,meta299184){
this.menu_item = menu_item;
this.p__299177 = p__299177;
this.owner = owner;
this.vec__299182 = vec__299182;
this.text = text;
this.topic = topic;
this.tag = tag;
this.current = current;
this.meta299184 = meta299184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities299183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__299182,text,topic,tag,current){
return (function (_299185,meta299184__$1){
var self__ = this;
var _299185__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities299183(self__.menu_item,self__.p__299177,self__.owner,self__.vec__299182,self__.text,self__.topic,self__.tag,self__.current,meta299184__$1));
});})(vec__299182,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities299183.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__299182,text,topic,tag,current){
return (function (_299185){
var self__ = this;
var _299185__$1 = this;
return self__.meta299184;
});})(vec__299182,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities299183.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities299183.prototype.om$core$IRender$render$arity$1 = ((function (vec__299182,text,topic,tag,current){
return (function (this__28693__auto__){
var self__ = this;
var this__28693__auto____$1 = this;
return React.DOM.li({"className": ((cljs.core._EQ_.call(null,self__.current,self__.topic))?"active":null), "role": "presentation"},React.DOM.a({"onClick": ((function (this__28693__auto____$1,vec__299182,text,topic,tag,current){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.tag,self__.topic);
});})(this__28693__auto____$1,vec__299182,text,topic,tag,current))
, "style": {"cursor": "pointer"}},self__.text));
});})(vec__299182,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities299183.getBasis = ((function (vec__299182,text,topic,tag,current){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"current","current",552492924,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__299177","p__299177",-1424138232,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__299182","vec__299182",224976580,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"meta299184","meta299184",2013116431,null)], null);
});})(vec__299182,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities299183.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities299183.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities299183";

biomarket.utilities.t_biomarket$utilities299183.cljs$lang$ctorPrWriter = ((function (vec__299182,text,topic,tag,current){
return (function (this__26325__auto__,writer__26326__auto__,opt__26327__auto__){
return cljs.core._write.call(null,writer__26326__auto__,"biomarket.utilities/t_biomarket$utilities299183");
});})(vec__299182,text,topic,tag,current))
;

biomarket.utilities.__GT_t_biomarket$utilities299183 = ((function (vec__299182,text,topic,tag,current){
return (function biomarket$utilities$menu_item_$___GT_t_biomarket$utilities299183(menu_item__$1,p__299177__$1,owner__$1,vec__299182__$1,text__$1,topic__$1,tag__$1,current__$1,meta299184){
return (new biomarket.utilities.t_biomarket$utilities299183(menu_item__$1,p__299177__$1,owner__$1,vec__299182__$1,text__$1,topic__$1,tag__$1,current__$1,meta299184));
});})(vec__299182,text,topic,tag,current))
;

}

return (new biomarket.utilities.t_biomarket$utilities299183(biomarket$utilities$menu_item,p__299177,owner,vec__299182,text,topic,tag,current,null));
});
biomarket.utilities.top_navigation = (function biomarket$utilities$top_navigation(p__299187,owner){
var vec__299192 = p__299187;
var current = cljs.core.nth.call(null,vec__299192,(0),null);
var inputs = cljs.core.nth.call(null,vec__299192,(1),null);
var nav_tag = cljs.core.nth.call(null,vec__299192,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities299193 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities299193 = (function (top_navigation,p__299187,owner,vec__299192,current,inputs,nav_tag,meta299194){
this.top_navigation = top_navigation;
this.p__299187 = p__299187;
this.owner = owner;
this.vec__299192 = vec__299192;
this.current = current;
this.inputs = inputs;
this.nav_tag = nav_tag;
this.meta299194 = meta299194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities299193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__299192,current,inputs,nav_tag){
return (function (_299195,meta299194__$1){
var self__ = this;
var _299195__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities299193(self__.top_navigation,self__.p__299187,self__.owner,self__.vec__299192,self__.current,self__.inputs,self__.nav_tag,meta299194__$1));
});})(vec__299192,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities299193.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__299192,current,inputs,nav_tag){
return (function (_299195){
var self__ = this;
var _299195__$1 = this;
return self__.meta299194;
});})(vec__299192,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities299193.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities299193.prototype.om$core$IRender$render$arity$1 = ((function (vec__299192,current,inputs,nav_tag){
return (function (this__28693__auto__){
var self__ = this;
var this__28693__auto____$1 = this;
return React.DOM.div({"role": "navigation"},cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-pills nav-justified"},cljs.core.map.call(null,((function (this__28693__auto____$1,vec__299192,current,inputs,nav_tag){
return (function (p1__299186_SHARP_){
return om.core.build.call(null,biomarket.utilities.menu_item,cljs.core.concat.call(null,p1__299186_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nav_tag,self__.current], null)));
});})(this__28693__auto____$1,vec__299192,current,inputs,nav_tag))
,self__.inputs)));
});})(vec__299192,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities299193.getBasis = ((function (vec__299192,current,inputs,nav_tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"top-navigation","top-navigation",-1053916026,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__299187","p__299187",-1146028656,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__299192","vec__299192",-1263056986,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"meta299194","meta299194",22351955,null)], null);
});})(vec__299192,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities299193.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities299193.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities299193";

biomarket.utilities.t_biomarket$utilities299193.cljs$lang$ctorPrWriter = ((function (vec__299192,current,inputs,nav_tag){
return (function (this__26325__auto__,writer__26326__auto__,opt__26327__auto__){
return cljs.core._write.call(null,writer__26326__auto__,"biomarket.utilities/t_biomarket$utilities299193");
});})(vec__299192,current,inputs,nav_tag))
;

biomarket.utilities.__GT_t_biomarket$utilities299193 = ((function (vec__299192,current,inputs,nav_tag){
return (function biomarket$utilities$top_navigation_$___GT_t_biomarket$utilities299193(top_navigation__$1,p__299187__$1,owner__$1,vec__299192__$1,current__$1,inputs__$1,nav_tag__$1,meta299194){
return (new biomarket.utilities.t_biomarket$utilities299193(top_navigation__$1,p__299187__$1,owner__$1,vec__299192__$1,current__$1,inputs__$1,nav_tag__$1,meta299194));
});})(vec__299192,current,inputs,nav_tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities299193(biomarket$utilities$top_navigation,p__299187,owner,vec__299192,current,inputs,nav_tag,null));
});
biomarket.utilities.padded_button = (function biomarket$utilities$padded_button(p__299196,owner){
var vec__299201 = p__299196;
var padding = cljs.core.nth.call(null,vec__299201,(0),null);
var value = cljs.core.nth.call(null,vec__299201,(1),null);
var func = cljs.core.nth.call(null,vec__299201,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities299202 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities299202 = (function (padded_button,p__299196,owner,vec__299201,padding,value,func,meta299203){
this.padded_button = padded_button;
this.p__299196 = p__299196;
this.owner = owner;
this.vec__299201 = vec__299201;
this.padding = padding;
this.value = value;
this.func = func;
this.meta299203 = meta299203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities299202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__299201,padding,value,func){
return (function (_299204,meta299203__$1){
var self__ = this;
var _299204__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities299202(self__.padded_button,self__.p__299196,self__.owner,self__.vec__299201,self__.padding,self__.value,self__.func,meta299203__$1));
});})(vec__299201,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities299202.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__299201,padding,value,func){
return (function (_299204){
var self__ = this;
var _299204__$1 = this;
return self__.meta299203;
});})(vec__299201,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities299202.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities299202.prototype.om$core$IRender$render$arity$1 = ((function (vec__299201,padding,value,func){
return (function (this__28693__auto__){
var self__ = this;
var this__28693__auto____$1 = this;
return React.DOM.div({"style": {"padding": self__.padding}},(cljs.core.truth_(self__.func)?React.DOM.button({"className": "pure-button pure-button-primary", "onClick": self__.func},self__.value):React.DOM.button({"className": "pure-button pure-button-primary"},self__.value)));
});})(vec__299201,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities299202.getBasis = ((function (vec__299201,padding,value,func){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"padded-button","padded-button",875344236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__299196","p__299196",-1002060575,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__299201","vec__299201",-1487852830,null),new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"meta299203","meta299203",2132593406,null)], null);
});})(vec__299201,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities299202.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities299202.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities299202";

biomarket.utilities.t_biomarket$utilities299202.cljs$lang$ctorPrWriter = ((function (vec__299201,padding,value,func){
return (function (this__26325__auto__,writer__26326__auto__,opt__26327__auto__){
return cljs.core._write.call(null,writer__26326__auto__,"biomarket.utilities/t_biomarket$utilities299202");
});})(vec__299201,padding,value,func))
;

biomarket.utilities.__GT_t_biomarket$utilities299202 = ((function (vec__299201,padding,value,func){
return (function biomarket$utilities$padded_button_$___GT_t_biomarket$utilities299202(padded_button__$1,p__299196__$1,owner__$1,vec__299201__$1,padding__$1,value__$1,func__$1,meta299203){
return (new biomarket.utilities.t_biomarket$utilities299202(padded_button__$1,p__299196__$1,owner__$1,vec__299201__$1,padding__$1,value__$1,func__$1,meta299203));
});})(vec__299201,padding,value,func))
;

}

return (new biomarket.utilities.t_biomarket$utilities299202(biomarket$utilities$padded_button,p__299196,owner,vec__299201,padding,value,func,null));
});
biomarket.utilities.padded_button_disabled = (function biomarket$utilities$padded_button_disabled(p__299205,owner){
var vec__299210 = p__299205;
var padding = cljs.core.nth.call(null,vec__299210,(0),null);
var value = cljs.core.nth.call(null,vec__299210,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities299211 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities299211 = (function (padded_button_disabled,p__299205,owner,vec__299210,padding,value,meta299212){
this.padded_button_disabled = padded_button_disabled;
this.p__299205 = p__299205;
this.owner = owner;
this.vec__299210 = vec__299210;
this.padding = padding;
this.value = value;
this.meta299212 = meta299212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities299211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__299210,padding,value){
return (function (_299213,meta299212__$1){
var self__ = this;
var _299213__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities299211(self__.padded_button_disabled,self__.p__299205,self__.owner,self__.vec__299210,self__.padding,self__.value,meta299212__$1));
});})(vec__299210,padding,value))
;

biomarket.utilities.t_biomarket$utilities299211.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__299210,padding,value){
return (function (_299213){
var self__ = this;
var _299213__$1 = this;
return self__.meta299212;
});})(vec__299210,padding,value))
;

biomarket.utilities.t_biomarket$utilities299211.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities299211.prototype.om$core$IRender$render$arity$1 = ((function (vec__299210,padding,value){
return (function (this__28693__auto__){
var self__ = this;
var this__28693__auto____$1 = this;
return React.DOM.div({"style": {"padding": self__.padding}},React.DOM.button({"className": "pure-button pure-button-primary", "disabled": "true"},self__.value));
});})(vec__299210,padding,value))
;

biomarket.utilities.t_biomarket$utilities299211.getBasis = ((function (vec__299210,padding,value){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"padded-button-disabled","padded-button-disabled",1594106929,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__299205","p__299205",1336020622,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__299210","vec__299210",590195036,null),new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"meta299212","meta299212",-117307470,null)], null);
});})(vec__299210,padding,value))
;

biomarket.utilities.t_biomarket$utilities299211.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities299211.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities299211";

biomarket.utilities.t_biomarket$utilities299211.cljs$lang$ctorPrWriter = ((function (vec__299210,padding,value){
return (function (this__26325__auto__,writer__26326__auto__,opt__26327__auto__){
return cljs.core._write.call(null,writer__26326__auto__,"biomarket.utilities/t_biomarket$utilities299211");
});})(vec__299210,padding,value))
;

biomarket.utilities.__GT_t_biomarket$utilities299211 = ((function (vec__299210,padding,value){
return (function biomarket$utilities$padded_button_disabled_$___GT_t_biomarket$utilities299211(padded_button_disabled__$1,p__299205__$1,owner__$1,vec__299210__$1,padding__$1,value__$1,meta299212){
return (new biomarket.utilities.t_biomarket$utilities299211(padded_button_disabled__$1,p__299205__$1,owner__$1,vec__299210__$1,padding__$1,value__$1,meta299212));
});})(vec__299210,padding,value))
;

}

return (new biomarket.utilities.t_biomarket$utilities299211(biomarket$utilities$padded_button_disabled,p__299205,owner,vec__299210,padding,value,null));
});
biomarket.utilities.make_a_table = (function biomarket$utilities$make_a_table(p__299216,owner){
var map__299222 = p__299216;
var map__299222__$1 = ((((!((map__299222 == null)))?((((map__299222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__299222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__299222):map__299222);
var data = cljs.core.get.call(null,map__299222__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var tparam = cljs.core.get.call(null,map__299222__$1,new cljs.core.Keyword(null,"tparam","tparam",1161386584));
if(typeof biomarket.utilities.t_biomarket$utilities299224 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities299224 = (function (make_a_table,p__299216,owner,map__299222,data,tparam,meta299225){
this.make_a_table = make_a_table;
this.p__299216 = p__299216;
this.owner = owner;
this.map__299222 = map__299222;
this.data = data;
this.tparam = tparam;
this.meta299225 = meta299225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities299224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__299222,map__299222__$1,data,tparam){
return (function (_299226,meta299225__$1){
var self__ = this;
var _299226__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities299224(self__.make_a_table,self__.p__299216,self__.owner,self__.map__299222,self__.data,self__.tparam,meta299225__$1));
});})(map__299222,map__299222__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities299224.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__299222,map__299222__$1,data,tparam){
return (function (_299226){
var self__ = this;
var _299226__$1 = this;
return self__.meta299225;
});})(map__299222,map__299222__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities299224.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities299224.prototype.om$core$IRender$render$arity$1 = ((function (map__299222,map__299222__$1,data,tparam){
return (function (this__28693__auto__){
var self__ = this;
var this__28693__auto____$1 = this;
var tjs = cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"table",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px"], null)], null),self__.tparam));
return React.DOM.div({"style": {"background-color": "white"}},React.DOM.table(tjs,React.DOM.thead(null,cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (tjs,this__28693__auto____$1,map__299222,map__299222__$1,data,tparam){
return (function (p1__299214_SHARP_){
return React.DOM.th({"style": {"text-align": "center"}},p1__299214_SHARP_);
});})(tjs,this__28693__auto____$1,map__299222,map__299222__$1,data,tparam))
,cljs.core.keys.call(null,cljs.core.first.call(null,self__.data))))),cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.map.call(null,((function (tjs,this__28693__auto____$1,map__299222,map__299222__$1,data,tparam){
return (function (x){
return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (tjs,this__28693__auto____$1,map__299222,map__299222__$1,data,tparam){
return (function (p1__299215_SHARP_){
return React.DOM.td({"style": {"text-align": "center"}},p1__299215_SHARP_);
});})(tjs,this__28693__auto____$1,map__299222,map__299222__$1,data,tparam))
,cljs.core.vals.call(null,x)));
});})(tjs,this__28693__auto____$1,map__299222,map__299222__$1,data,tparam))
,self__.data))));
});})(map__299222,map__299222__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities299224.getBasis = ((function (map__299222,map__299222__$1,data,tparam){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-a-table","make-a-table",-346613799,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__299216","p__299216",1334184823,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__299222","map__299222",1122367112,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null),new cljs.core.Symbol(null,"meta299225","meta299225",-1719185551,null)], null);
});})(map__299222,map__299222__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities299224.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities299224.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities299224";

biomarket.utilities.t_biomarket$utilities299224.cljs$lang$ctorPrWriter = ((function (map__299222,map__299222__$1,data,tparam){
return (function (this__26325__auto__,writer__26326__auto__,opt__26327__auto__){
return cljs.core._write.call(null,writer__26326__auto__,"biomarket.utilities/t_biomarket$utilities299224");
});})(map__299222,map__299222__$1,data,tparam))
;

biomarket.utilities.__GT_t_biomarket$utilities299224 = ((function (map__299222,map__299222__$1,data,tparam){
return (function biomarket$utilities$make_a_table_$___GT_t_biomarket$utilities299224(make_a_table__$1,p__299216__$1,owner__$1,map__299222__$2,data__$1,tparam__$1,meta299225){
return (new biomarket.utilities.t_biomarket$utilities299224(make_a_table__$1,p__299216__$1,owner__$1,map__299222__$2,data__$1,tparam__$1,meta299225));
});})(map__299222,map__299222__$1,data,tparam))
;

}

return (new biomarket.utilities.t_biomarket$utilities299224(biomarket$utilities$make_a_table,p__299216,owner,map__299222__$1,data,tparam,null));
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
biomarket.utilities.get_input = (function (){var method_table__26644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26646__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26647__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26648__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","get-input"),((function (method_table__26644__auto__,prefer_table__26645__auto__,method_cache__26646__auto__,cached_hierarchy__26647__auto__,hierarchy__26648__auto__){
return (function() { 
var G__299230__delegate = function (owner,p__299227,args){
var map__299228 = p__299227;
var map__299228__$1 = ((((!((map__299228 == null)))?((((map__299228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__299228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__299228):map__299228);
var fname = cljs.core.get.call(null,map__299228__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__299228__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return fname;
};
var G__299230 = function (owner,p__299227,var_args){
var args = null;
if (arguments.length > 2) {
var G__299231__i = 0, G__299231__a = new Array(arguments.length -  2);
while (G__299231__i < G__299231__a.length) {G__299231__a[G__299231__i] = arguments[G__299231__i + 2]; ++G__299231__i;}
  args = new cljs.core.IndexedSeq(G__299231__a,0);
} 
return G__299230__delegate.call(this,owner,p__299227,args);};
G__299230.cljs$lang$maxFixedArity = 2;
G__299230.cljs$lang$applyTo = (function (arglist__299232){
var owner = cljs.core.first(arglist__299232);
arglist__299232 = cljs.core.next(arglist__299232);
var p__299227 = cljs.core.first(arglist__299232);
var args = cljs.core.rest(arglist__299232);
return G__299230__delegate(owner,p__299227,args);
});
G__299230.cljs$core$IFn$_invoke$arity$variadic = G__299230__delegate;
return G__299230;
})()
;})(method_table__26644__auto__,prefer_table__26645__auto__,method_cache__26646__auto__,cached_hierarchy__26647__auto__,hierarchy__26648__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26648__auto__,method_table__26644__auto__,prefer_table__26645__auto__,method_cache__26646__auto__,cached_hierarchy__26647__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.get_input,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__299241 = null;
var G__299241__2 = (function (owner,p__299233){
var map__299235 = p__299233;
var map__299235__$1 = ((((!((map__299235 == null)))?((((map__299235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__299235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__299235):map__299235);
var m = map__299235__$1;
var fname = cljs.core.get.call(null,map__299235__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__299235__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return biomarket.utilities.get_input.call(null,owner,m,new cljs.core.Keyword(null,"inputs","inputs",865803858));
});
var G__299241__3 = (function (owner,p__299234,param_name){
var map__299237 = p__299234;
var map__299237__$1 = ((((!((map__299237 == null)))?((((map__299237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__299237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__299237):map__299237);
var fname = cljs.core.get.call(null,map__299237__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__299237__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var inputs = om.core.get_state.call(null,owner,param_name);
var iv = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (inputs,map__299237,map__299237__$1,fname,element){
return (function (p__299239){
var vec__299240 = p__299239;
var k = cljs.core.nth.call(null,vec__299240,(0),null);
var v = cljs.core.nth.call(null,vec__299240,(1),null);
if(cljs.core.not.call(null,k.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element)))){
return v;
} else {
return null;
}
});})(inputs,map__299237,map__299237__$1,fname,element))
,new cljs.core.Keyword(null,"tests","tests",-1041085625).cljs$core$IFn$_invoke$arity$1(element))));
return om.core.set_state_BANG_.call(null,owner,param_name,cljs.core.assoc.call(null,om.core.get_state.call(null,owner,param_name),fname,cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"invalid","invalid",412869516),iv)));
});
G__299241 = function(owner,p__299234,param_name){
switch(arguments.length){
case 2:
return G__299241__2.call(this,owner,p__299234);
case 3:
return G__299241__3.call(this,owner,p__299234,param_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__299241.cljs$core$IFn$_invoke$arity$2 = G__299241__2;
G__299241.cljs$core$IFn$_invoke$arity$3 = G__299241__3;
return G__299241;
})()
);
if(typeof biomarket.utilities.clean_input !== 'undefined'){
} else {
biomarket.utilities.clean_input = (function (){var method_table__26644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26646__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26647__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26648__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","clean-input"),((function (method_table__26644__auto__,prefer_table__26645__auto__,method_cache__26646__auto__,cached_hierarchy__26647__auto__,hierarchy__26648__auto__){
return (function (element,classes,oc){
return new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(element);
});})(method_table__26644__auto__,prefer_table__26645__auto__,method_cache__26646__auto__,cached_hierarchy__26647__auto__,hierarchy__26648__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26648__auto__,method_table__26644__auto__,prefer_table__26645__auto__,method_cache__26646__auto__,cached_hierarchy__26647__auto__));
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
var x__26553__auto__ = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(classes),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)));
return cljs.core._conj.call(null,(function (){var x__26553__auto____$1 = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spid","spid",1854581004).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.Keyword(null,"className","className",-1983287057),"sr-only"], null)),new cljs.core.Keyword(null,"fb","fb",-1331669322).cljs$core$IFn$_invoke$arity$1(classes));
return cljs.core._conj.call(null,(function (){var x__26553__auto____$2 = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"help-block"], null)),new cljs.core.Keyword(null,"fb","fb",-1331669322).cljs$core$IFn$_invoke$arity$1(classes));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26553__auto____$2);
})(),x__26553__auto____$1);
})(),x__26553__auto__);
});
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"addon","addon",931813532),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26553__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26553__auto__);
})(),(function (){var x__26553__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
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
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26553__auto__);
})(),biomarket.utilities.icons.call(null,element,classes)));
}));
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"no-icon","no-icon",-1734606666),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26553__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26553__auto__);
})(),(function (){var x__26553__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
if(cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element))){
return om.dom.textarea.call(null,js);
} else {
return om.dom.input.call(null,js);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26553__auto__);
})()));
}));
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"default","default",-1987822328),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26553__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26553__auto__);
})(),(function (){var x__26553__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
if(cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element))){
return om.dom.textarea.call(null,js);
} else {
return om.dom.input.call(null,js);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26553__auto__);
})(),biomarket.utilities.icons.call(null,element,classes)));
}));
biomarket.utilities.the_input = (function biomarket$utilities$the_input(js,owner){
if(typeof biomarket.utilities.t_biomarket$utilities299245 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities299245 = (function (the_input,js,owner,meta299246){
this.the_input = the_input;
this.js = js;
this.owner = owner;
this.meta299246 = meta299246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities299245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_299247,meta299246__$1){
var self__ = this;
var _299247__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities299245(self__.the_input,self__.js,self__.owner,meta299246__$1));
});

biomarket.utilities.t_biomarket$utilities299245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_299247){
var self__ = this;
var _299247__$1 = this;
return self__.meta299246;
});

biomarket.utilities.t_biomarket$utilities299245.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities299245.prototype.om$core$IRender$render$arity$1 = (function (this__28693__auto__){
var self__ = this;
var this__28693__auto____$1 = this;
return cljs.core.apply.call(null,om.dom.div,self__.js);
});

biomarket.utilities.t_biomarket$utilities299245.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"the-input","the-input",1976764503,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta299246","meta299246",-1438105323,null)], null);
});

biomarket.utilities.t_biomarket$utilities299245.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities299245.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities299245";

biomarket.utilities.t_biomarket$utilities299245.cljs$lang$ctorPrWriter = (function (this__26325__auto__,writer__26326__auto__,opt__26327__auto__){
return cljs.core._write.call(null,writer__26326__auto__,"biomarket.utilities/t_biomarket$utilities299245");
});

biomarket.utilities.__GT_t_biomarket$utilities299245 = (function biomarket$utilities$the_input_$___GT_t_biomarket$utilities299245(the_input__$1,js__$1,owner__$1,meta299246){
return (new biomarket.utilities.t_biomarket$utilities299245(the_input__$1,js__$1,owner__$1,meta299246));
});

}

return (new biomarket.utilities.t_biomarket$utilities299245(biomarket$utilities$the_input,js,owner,null));
});
biomarket.utilities.input = (function biomarket$utilities$input(p__299250,owner){
var vec__299258 = p__299250;
var fname = cljs.core.nth.call(null,vec__299258,(0),null);
var element = cljs.core.nth.call(null,vec__299258,(1),null);
var tag = cljs.core.nth.call(null,vec__299258,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities299259 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities299259 = (function (input,p__299250,owner,vec__299258,fname,element,tag,meta299260){
this.input = input;
this.p__299250 = p__299250;
this.owner = owner;
this.vec__299258 = vec__299258;
this.fname = fname;
this.element = element;
this.tag = tag;
this.meta299260 = meta299260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities299259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__299258,fname,element,tag){
return (function (_299261,meta299260__$1){
var self__ = this;
var _299261__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities299259(self__.input,self__.p__299250,self__.owner,self__.vec__299258,self__.fname,self__.element,self__.tag,meta299260__$1));
});})(vec__299258,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities299259.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__299258,fname,element,tag){
return (function (_299261){
var self__ = this;
var _299261__$1 = this;
return self__.meta299260;
});})(vec__299258,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities299259.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities299259.prototype.om$core$IRender$render$arity$1 = ((function (vec__299258,fname,element,tag){
return (function (this__28693__auto__){
var self__ = this;
var this__28693__auto____$1 = this;
var oc = ((function (this__28693__auto____$1,vec__299258,fname,element,tag){
return (function (p1__299248_SHARP_){
return biomarket.utilities.on_change_function.call(null,self__.owner,self__.tag,self__.fname,self__.element,p1__299248_SHARP_);
});})(this__28693__auto____$1,vec__299258,fname,element,tag))
;
var classes = (function (){var pred__299262 = cljs.core._EQ_;
var expr__299263 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.element);
if(cljs.core.truth_(pred__299262.call(null,false,expr__299263))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group",new cljs.core.Keyword(null,"icon","icon",1679606541),"",new cljs.core.Keyword(null,"fb","fb",-1331669322),""], null);
} else {
if(cljs.core.truth_(pred__299262.call(null,null,expr__299263))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group has-success has-feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"glyphicon glyphicon-ok form-control-feedback",new cljs.core.Keyword(null,"fb","fb",-1331669322),""], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group has-error has-feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"glyphicon glyphicon-remove form-control-feedback",new cljs.core.Keyword(null,"fb","fb",-1331669322),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (pred__299262,expr__299263,oc,this__28693__auto____$1,vec__299258,fname,element,tag){
return (function (p1__299249_SHARP_){
return React.DOM.div(null,p1__299249_SHARP_);
});})(pred__299262,expr__299263,oc,this__28693__auto____$1,vec__299258,fname,element,tag))
,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.element)))], null);
}
}
})();
return React.DOM.div({"className": new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)},React.DOM.label({"className": "control-label", "htmlFor": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.element)},new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.element)),om.core.build.call(null,biomarket.utilities.the_input,biomarket.utilities.clean_input.call(null,self__.element,classes,oc)));
});})(vec__299258,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities299259.getBasis = ((function (vec__299258,fname,element,tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fname","fname",-1154144278,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__299250","p__299250",1087074603,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__299258","vec__299258",1202568508,null),new cljs.core.Symbol(null,"fname","fname",-1154144278,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta299260","meta299260",1763666825,null)], null);
});})(vec__299258,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities299259.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities299259.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities299259";

biomarket.utilities.t_biomarket$utilities299259.cljs$lang$ctorPrWriter = ((function (vec__299258,fname,element,tag){
return (function (this__26325__auto__,writer__26326__auto__,opt__26327__auto__){
return cljs.core._write.call(null,writer__26326__auto__,"biomarket.utilities/t_biomarket$utilities299259");
});})(vec__299258,fname,element,tag))
;

biomarket.utilities.__GT_t_biomarket$utilities299259 = ((function (vec__299258,fname,element,tag){
return (function biomarket$utilities$input_$___GT_t_biomarket$utilities299259(input__$1,p__299250__$1,owner__$1,vec__299258__$1,fname__$1,element__$1,tag__$1,meta299260){
return (new biomarket.utilities.t_biomarket$utilities299259(input__$1,p__299250__$1,owner__$1,vec__299258__$1,fname__$1,element__$1,tag__$1,meta299260));
});})(vec__299258,fname,element,tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities299259(biomarket$utilities$input,p__299250,owner,vec__299258,fname,element,tag,null));
});
biomarket.utilities.set_radio_state = (function biomarket$utilities$set_radio_state(owner,element,e){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"current","current",-1088038603),biomarket.utilities.get_text.call(null,e)));
});
biomarket.utilities.in_line_radio = (function biomarket$utilities$in_line_radio(p__299266,owner){
var vec__299274 = p__299266;
var name = cljs.core.nth.call(null,vec__299274,(0),null);
var element = cljs.core.nth.call(null,vec__299274,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities299275 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IWillUpdate}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities299275 = (function (in_line_radio,p__299266,owner,vec__299274,name,element,meta299276){
this.in_line_radio = in_line_radio;
this.p__299266 = p__299266;
this.owner = owner;
this.vec__299274 = vec__299274;
this.name = name;
this.element = element;
this.meta299276 = meta299276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities299275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__299274,name,element){
return (function (_299277,meta299276__$1){
var self__ = this;
var _299277__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities299275(self__.in_line_radio,self__.p__299266,self__.owner,self__.vec__299274,self__.name,self__.element,meta299276__$1));
});})(vec__299274,name,element))
;

biomarket.utilities.t_biomarket$utilities299275.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__299274,name,element){
return (function (_299277){
var self__ = this;
var _299277__$1 = this;
return self__.meta299276;
});})(vec__299274,name,element))
;

biomarket.utilities.t_biomarket$utilities299275.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities299275.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__299274,name,element){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),self__.name,new cljs.core.Keyword(null,"element","element",1974019749),self__.element], null);
});})(vec__299274,name,element))
;

biomarket.utilities.t_biomarket$utilities299275.prototype.om$core$IWillUpdate$ = true;

biomarket.utilities.t_biomarket$utilities299275.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (vec__299274,name,element){
return (function (_,np,ns){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"radiod","radiod",450568867),ns);
});})(vec__299274,name,element))
;

biomarket.utilities.t_biomarket$utilities299275.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities299275.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__299274,name,element){
return (function (_,p__299278){
var self__ = this;
var map__299279 = p__299278;
var map__299279__$1 = ((((!((map__299279 == null)))?((((map__299279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__299279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__299279):map__299279);
var element__$1 = cljs.core.get.call(null,map__299279__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "pure-u-1"},cljs.core.map.call(null,((function (___$1,map__299279,map__299279__$1,element__$1,vec__299274,name,element){
return (function (p1__299265_SHARP_){
return React.DOM.span(null,React.DOM.div({"className": "pure-u-1-5"},om.dom.input.call(null,{"type": "radio", "name": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(element__$1), "value": cljs.core.first.call(null,p1__299265_SHARP_), "onChange": ((function (___$1,map__299279,map__299279__$1,element__$1,vec__299274,name,element){
return (function (e){
return biomarket.utilities.set_radio_state.call(null,self__.owner,element__$1,e);
});})(___$1,map__299279,map__299279__$1,element__$1,vec__299274,name,element))
})),React.DOM.div({"className": "pure-u-1-4"},cljs.core.second.call(null,p1__299265_SHARP_)));
});})(___$1,map__299279,map__299279__$1,element__$1,vec__299274,name,element))
,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(element__$1)));
});})(vec__299274,name,element))
;

biomarket.utilities.t_biomarket$utilities299275.getBasis = ((function (vec__299274,name,element){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"in-line-radio","in-line-radio",803575522,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"element","element",-680416020,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__299266","p__299266",-134960016,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__299274","vec__299274",-587800256,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"meta299276","meta299276",-256598845,null)], null);
});})(vec__299274,name,element))
;

biomarket.utilities.t_biomarket$utilities299275.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities299275.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities299275";

biomarket.utilities.t_biomarket$utilities299275.cljs$lang$ctorPrWriter = ((function (vec__299274,name,element){
return (function (this__26325__auto__,writer__26326__auto__,opt__26327__auto__){
return cljs.core._write.call(null,writer__26326__auto__,"biomarket.utilities/t_biomarket$utilities299275");
});})(vec__299274,name,element))
;

biomarket.utilities.__GT_t_biomarket$utilities299275 = ((function (vec__299274,name,element){
return (function biomarket$utilities$in_line_radio_$___GT_t_biomarket$utilities299275(in_line_radio__$1,p__299266__$1,owner__$1,vec__299274__$1,name__$1,element__$1,meta299276){
return (new biomarket.utilities.t_biomarket$utilities299275(in_line_radio__$1,p__299266__$1,owner__$1,vec__299274__$1,name__$1,element__$1,meta299276));
});})(vec__299274,name,element))
;

}

return (new biomarket.utilities.t_biomarket$utilities299275(biomarket$utilities$in_line_radio,p__299266,owner,vec__299274,name,element,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=utilities.js.map