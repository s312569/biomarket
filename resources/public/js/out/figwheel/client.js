// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__30258 = cljs.core._EQ_;
var expr__30259 = (function (){var or__21738__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__21738__auto__)){
return or__21738__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30258.call(null,"true",expr__30259))){
return true;
} else {
if(cljs.core.truth_(pred__30258.call(null,"false",expr__30259))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30259)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30261__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30262__i = 0, G__30262__a = new Array(arguments.length -  0);
while (G__30262__i < G__30262__a.length) {G__30262__a[G__30262__i] = arguments[G__30262__i + 0]; ++G__30262__i;}
  args = new cljs.core.IndexedSeq(G__30262__a,0);
} 
return G__30261__delegate.call(this,args);};
G__30261.cljs$lang$maxFixedArity = 0;
G__30261.cljs$lang$applyTo = (function (arglist__30263){
var args = cljs.core.seq(arglist__30263);
return G__30261__delegate(args);
});
G__30261.cljs$core$IFn$_invoke$arity$variadic = G__30261__delegate;
return G__30261;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30264){
var map__30267 = p__30264;
var map__30267__$1 = ((((!((map__30267 == null)))?((((map__30267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30267):map__30267);
var message = cljs.core.get.call(null,map__30267__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30267__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21738__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21738__auto__)){
return or__21738__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21726__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21726__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21726__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__25158__auto___30429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto___30429,ch){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto___30429,ch){
return (function (state_30398){
var state_val_30399 = (state_30398[(1)]);
if((state_val_30399 === (7))){
var inst_30394 = (state_30398[(2)]);
var state_30398__$1 = state_30398;
var statearr_30400_30430 = state_30398__$1;
(statearr_30400_30430[(2)] = inst_30394);

(statearr_30400_30430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (1))){
var state_30398__$1 = state_30398;
var statearr_30401_30431 = state_30398__$1;
(statearr_30401_30431[(2)] = null);

(statearr_30401_30431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (4))){
var inst_30351 = (state_30398[(7)]);
var inst_30351__$1 = (state_30398[(2)]);
var state_30398__$1 = (function (){var statearr_30402 = state_30398;
(statearr_30402[(7)] = inst_30351__$1);

return statearr_30402;
})();
if(cljs.core.truth_(inst_30351__$1)){
var statearr_30403_30432 = state_30398__$1;
(statearr_30403_30432[(1)] = (5));

} else {
var statearr_30404_30433 = state_30398__$1;
(statearr_30404_30433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (15))){
var inst_30358 = (state_30398[(8)]);
var inst_30373 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30358);
var inst_30374 = cljs.core.first.call(null,inst_30373);
var inst_30375 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30374);
var inst_30376 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_30375)].join('');
var inst_30377 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30376);
var state_30398__$1 = state_30398;
var statearr_30405_30434 = state_30398__$1;
(statearr_30405_30434[(2)] = inst_30377);

(statearr_30405_30434[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (13))){
var inst_30382 = (state_30398[(2)]);
var state_30398__$1 = state_30398;
var statearr_30406_30435 = state_30398__$1;
(statearr_30406_30435[(2)] = inst_30382);

(statearr_30406_30435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (6))){
var state_30398__$1 = state_30398;
var statearr_30407_30436 = state_30398__$1;
(statearr_30407_30436[(2)] = null);

(statearr_30407_30436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (17))){
var inst_30380 = (state_30398[(2)]);
var state_30398__$1 = state_30398;
var statearr_30408_30437 = state_30398__$1;
(statearr_30408_30437[(2)] = inst_30380);

(statearr_30408_30437[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (3))){
var inst_30396 = (state_30398[(2)]);
var state_30398__$1 = state_30398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30398__$1,inst_30396);
} else {
if((state_val_30399 === (12))){
var inst_30357 = (state_30398[(9)]);
var inst_30371 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30357,opts);
var state_30398__$1 = state_30398;
if(cljs.core.truth_(inst_30371)){
var statearr_30409_30438 = state_30398__$1;
(statearr_30409_30438[(1)] = (15));

} else {
var statearr_30410_30439 = state_30398__$1;
(statearr_30410_30439[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (2))){
var state_30398__$1 = state_30398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30398__$1,(4),ch);
} else {
if((state_val_30399 === (11))){
var inst_30358 = (state_30398[(8)]);
var inst_30363 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30364 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30358);
var inst_30365 = cljs.core.async.timeout.call(null,(1000));
var inst_30366 = [inst_30364,inst_30365];
var inst_30367 = (new cljs.core.PersistentVector(null,2,(5),inst_30363,inst_30366,null));
var state_30398__$1 = state_30398;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30398__$1,(14),inst_30367);
} else {
if((state_val_30399 === (9))){
var inst_30358 = (state_30398[(8)]);
var inst_30384 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30385 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30358);
var inst_30386 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30385);
var inst_30387 = [cljs.core.str("Not loading: "),cljs.core.str(inst_30386)].join('');
var inst_30388 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30387);
var state_30398__$1 = (function (){var statearr_30411 = state_30398;
(statearr_30411[(10)] = inst_30384);

return statearr_30411;
})();
var statearr_30412_30440 = state_30398__$1;
(statearr_30412_30440[(2)] = inst_30388);

(statearr_30412_30440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (5))){
var inst_30351 = (state_30398[(7)]);
var inst_30353 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30354 = (new cljs.core.PersistentArrayMap(null,2,inst_30353,null));
var inst_30355 = (new cljs.core.PersistentHashSet(null,inst_30354,null));
var inst_30356 = figwheel.client.focus_msgs.call(null,inst_30355,inst_30351);
var inst_30357 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30356);
var inst_30358 = cljs.core.first.call(null,inst_30356);
var inst_30359 = figwheel.client.autoload_QMARK_.call(null);
var state_30398__$1 = (function (){var statearr_30413 = state_30398;
(statearr_30413[(9)] = inst_30357);

(statearr_30413[(8)] = inst_30358);

return statearr_30413;
})();
if(cljs.core.truth_(inst_30359)){
var statearr_30414_30441 = state_30398__$1;
(statearr_30414_30441[(1)] = (8));

} else {
var statearr_30415_30442 = state_30398__$1;
(statearr_30415_30442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (14))){
var inst_30369 = (state_30398[(2)]);
var state_30398__$1 = state_30398;
var statearr_30416_30443 = state_30398__$1;
(statearr_30416_30443[(2)] = inst_30369);

(statearr_30416_30443[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (16))){
var state_30398__$1 = state_30398;
var statearr_30417_30444 = state_30398__$1;
(statearr_30417_30444[(2)] = null);

(statearr_30417_30444[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (10))){
var inst_30390 = (state_30398[(2)]);
var state_30398__$1 = (function (){var statearr_30418 = state_30398;
(statearr_30418[(11)] = inst_30390);

return statearr_30418;
})();
var statearr_30419_30445 = state_30398__$1;
(statearr_30419_30445[(2)] = null);

(statearr_30419_30445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30399 === (8))){
var inst_30357 = (state_30398[(9)]);
var inst_30361 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30357,opts);
var state_30398__$1 = state_30398;
if(cljs.core.truth_(inst_30361)){
var statearr_30420_30446 = state_30398__$1;
(statearr_30420_30446[(1)] = (11));

} else {
var statearr_30421_30447 = state_30398__$1;
(statearr_30421_30447[(1)] = (12));

}

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
}
}
}
}
}
}
}
}
}
});})(c__25158__auto___30429,ch))
;
return ((function (switch__25046__auto__,c__25158__auto___30429,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25047__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25047__auto____0 = (function (){
var statearr_30425 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30425[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25047__auto__);

(statearr_30425[(1)] = (1));

return statearr_30425;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25047__auto____1 = (function (state_30398){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_30398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e30426){if((e30426 instanceof Object)){
var ex__25050__auto__ = e30426;
var statearr_30427_30448 = state_30398;
(statearr_30427_30448[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30449 = state_30398;
state_30398 = G__30449;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25047__auto__ = function(state_30398){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25047__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25047__auto____1.call(this,state_30398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25047__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25047__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto___30429,ch))
})();
var state__25160__auto__ = (function (){var statearr_30428 = f__25159__auto__.call(null);
(statearr_30428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto___30429);

return statearr_30428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto___30429,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30450_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30450_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30457 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30457){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_30455 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30456 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30455,_STAR_print_newline_STAR_30456,base_path_30457){
return (function() { 
var G__30458__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30459__i = 0, G__30459__a = new Array(arguments.length -  0);
while (G__30459__i < G__30459__a.length) {G__30459__a[G__30459__i] = arguments[G__30459__i + 0]; ++G__30459__i;}
  args = new cljs.core.IndexedSeq(G__30459__a,0);
} 
return G__30458__delegate.call(this,args);};
G__30458.cljs$lang$maxFixedArity = 0;
G__30458.cljs$lang$applyTo = (function (arglist__30460){
var args = cljs.core.seq(arglist__30460);
return G__30458__delegate(args);
});
G__30458.cljs$core$IFn$_invoke$arity$variadic = G__30458__delegate;
return G__30458;
})()
;})(_STAR_print_fn_STAR_30455,_STAR_print_newline_STAR_30456,base_path_30457))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30456;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30455;
}}catch (e30454){if((e30454 instanceof Error)){
var e = e30454;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30457], null));
} else {
var e = e30454;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30457))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30461){
var map__30468 = p__30461;
var map__30468__$1 = ((((!((map__30468 == null)))?((((map__30468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30468):map__30468);
var opts = map__30468__$1;
var build_id = cljs.core.get.call(null,map__30468__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30468,map__30468__$1,opts,build_id){
return (function (p__30470){
var vec__30471 = p__30470;
var map__30472 = cljs.core.nth.call(null,vec__30471,(0),null);
var map__30472__$1 = ((((!((map__30472 == null)))?((((map__30472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30472):map__30472);
var msg = map__30472__$1;
var msg_name = cljs.core.get.call(null,map__30472__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30471,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30471,map__30472,map__30472__$1,msg,msg_name,_,map__30468,map__30468__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30471,map__30472,map__30472__$1,msg,msg_name,_,map__30468,map__30468__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30468,map__30468__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30478){
var vec__30479 = p__30478;
var map__30480 = cljs.core.nth.call(null,vec__30479,(0),null);
var map__30480__$1 = ((((!((map__30480 == null)))?((((map__30480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30480):map__30480);
var msg = map__30480__$1;
var msg_name = cljs.core.get.call(null,map__30480__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30479,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30482){
var map__30492 = p__30482;
var map__30492__$1 = ((((!((map__30492 == null)))?((((map__30492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30492):map__30492);
var on_compile_warning = cljs.core.get.call(null,map__30492__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30492__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30492,map__30492__$1,on_compile_warning,on_compile_fail){
return (function (p__30494){
var vec__30495 = p__30494;
var map__30496 = cljs.core.nth.call(null,vec__30495,(0),null);
var map__30496__$1 = ((((!((map__30496 == null)))?((((map__30496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30496):map__30496);
var msg = map__30496__$1;
var msg_name = cljs.core.get.call(null,map__30496__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30495,(1));
var pred__30498 = cljs.core._EQ_;
var expr__30499 = msg_name;
if(cljs.core.truth_(pred__30498.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30499))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30498.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30499))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30492,map__30492__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto__,msg_hist,msg_names,msg){
return (function (state_30715){
var state_val_30716 = (state_30715[(1)]);
if((state_val_30716 === (7))){
var inst_30639 = (state_30715[(2)]);
var state_30715__$1 = state_30715;
if(cljs.core.truth_(inst_30639)){
var statearr_30717_30763 = state_30715__$1;
(statearr_30717_30763[(1)] = (8));

} else {
var statearr_30718_30764 = state_30715__$1;
(statearr_30718_30764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (20))){
var inst_30709 = (state_30715[(2)]);
var state_30715__$1 = state_30715;
var statearr_30719_30765 = state_30715__$1;
(statearr_30719_30765[(2)] = inst_30709);

(statearr_30719_30765[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (27))){
var inst_30705 = (state_30715[(2)]);
var state_30715__$1 = state_30715;
var statearr_30720_30766 = state_30715__$1;
(statearr_30720_30766[(2)] = inst_30705);

(statearr_30720_30766[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (1))){
var inst_30632 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30715__$1 = state_30715;
if(cljs.core.truth_(inst_30632)){
var statearr_30721_30767 = state_30715__$1;
(statearr_30721_30767[(1)] = (2));

} else {
var statearr_30722_30768 = state_30715__$1;
(statearr_30722_30768[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (24))){
var inst_30707 = (state_30715[(2)]);
var state_30715__$1 = state_30715;
var statearr_30723_30769 = state_30715__$1;
(statearr_30723_30769[(2)] = inst_30707);

(statearr_30723_30769[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (4))){
var inst_30713 = (state_30715[(2)]);
var state_30715__$1 = state_30715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30715__$1,inst_30713);
} else {
if((state_val_30716 === (15))){
var inst_30711 = (state_30715[(2)]);
var state_30715__$1 = state_30715;
var statearr_30724_30770 = state_30715__$1;
(statearr_30724_30770[(2)] = inst_30711);

(statearr_30724_30770[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (21))){
var inst_30670 = (state_30715[(2)]);
var state_30715__$1 = state_30715;
var statearr_30725_30771 = state_30715__$1;
(statearr_30725_30771[(2)] = inst_30670);

(statearr_30725_30771[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (31))){
var inst_30694 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30715__$1 = state_30715;
if(cljs.core.truth_(inst_30694)){
var statearr_30726_30772 = state_30715__$1;
(statearr_30726_30772[(1)] = (34));

} else {
var statearr_30727_30773 = state_30715__$1;
(statearr_30727_30773[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (32))){
var inst_30703 = (state_30715[(2)]);
var state_30715__$1 = state_30715;
var statearr_30728_30774 = state_30715__$1;
(statearr_30728_30774[(2)] = inst_30703);

(statearr_30728_30774[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (33))){
var inst_30692 = (state_30715[(2)]);
var state_30715__$1 = state_30715;
var statearr_30729_30775 = state_30715__$1;
(statearr_30729_30775[(2)] = inst_30692);

(statearr_30729_30775[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (13))){
var inst_30653 = figwheel.client.heads_up.clear.call(null);
var state_30715__$1 = state_30715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30715__$1,(16),inst_30653);
} else {
if((state_val_30716 === (22))){
var inst_30674 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30675 = figwheel.client.heads_up.append_message.call(null,inst_30674);
var state_30715__$1 = state_30715;
var statearr_30730_30776 = state_30715__$1;
(statearr_30730_30776[(2)] = inst_30675);

(statearr_30730_30776[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (36))){
var inst_30701 = (state_30715[(2)]);
var state_30715__$1 = state_30715;
var statearr_30731_30777 = state_30715__$1;
(statearr_30731_30777[(2)] = inst_30701);

(statearr_30731_30777[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (29))){
var inst_30685 = (state_30715[(2)]);
var state_30715__$1 = state_30715;
var statearr_30732_30778 = state_30715__$1;
(statearr_30732_30778[(2)] = inst_30685);

(statearr_30732_30778[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (6))){
var inst_30634 = (state_30715[(7)]);
var state_30715__$1 = state_30715;
var statearr_30733_30779 = state_30715__$1;
(statearr_30733_30779[(2)] = inst_30634);

(statearr_30733_30779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (28))){
var inst_30681 = (state_30715[(2)]);
var inst_30682 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30683 = figwheel.client.heads_up.display_warning.call(null,inst_30682);
var state_30715__$1 = (function (){var statearr_30734 = state_30715;
(statearr_30734[(8)] = inst_30681);

return statearr_30734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30715__$1,(29),inst_30683);
} else {
if((state_val_30716 === (25))){
var inst_30679 = figwheel.client.heads_up.clear.call(null);
var state_30715__$1 = state_30715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30715__$1,(28),inst_30679);
} else {
if((state_val_30716 === (34))){
var inst_30696 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30715__$1 = state_30715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30715__$1,(37),inst_30696);
} else {
if((state_val_30716 === (17))){
var inst_30661 = (state_30715[(2)]);
var state_30715__$1 = state_30715;
var statearr_30735_30780 = state_30715__$1;
(statearr_30735_30780[(2)] = inst_30661);

(statearr_30735_30780[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (3))){
var inst_30651 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30715__$1 = state_30715;
if(cljs.core.truth_(inst_30651)){
var statearr_30736_30781 = state_30715__$1;
(statearr_30736_30781[(1)] = (13));

} else {
var statearr_30737_30782 = state_30715__$1;
(statearr_30737_30782[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (12))){
var inst_30647 = (state_30715[(2)]);
var state_30715__$1 = state_30715;
var statearr_30738_30783 = state_30715__$1;
(statearr_30738_30783[(2)] = inst_30647);

(statearr_30738_30783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (2))){
var inst_30634 = (state_30715[(7)]);
var inst_30634__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30715__$1 = (function (){var statearr_30739 = state_30715;
(statearr_30739[(7)] = inst_30634__$1);

return statearr_30739;
})();
if(cljs.core.truth_(inst_30634__$1)){
var statearr_30740_30784 = state_30715__$1;
(statearr_30740_30784[(1)] = (5));

} else {
var statearr_30741_30785 = state_30715__$1;
(statearr_30741_30785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (23))){
var inst_30677 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30715__$1 = state_30715;
if(cljs.core.truth_(inst_30677)){
var statearr_30742_30786 = state_30715__$1;
(statearr_30742_30786[(1)] = (25));

} else {
var statearr_30743_30787 = state_30715__$1;
(statearr_30743_30787[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (35))){
var state_30715__$1 = state_30715;
var statearr_30744_30788 = state_30715__$1;
(statearr_30744_30788[(2)] = null);

(statearr_30744_30788[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (19))){
var inst_30672 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30715__$1 = state_30715;
if(cljs.core.truth_(inst_30672)){
var statearr_30745_30789 = state_30715__$1;
(statearr_30745_30789[(1)] = (22));

} else {
var statearr_30746_30790 = state_30715__$1;
(statearr_30746_30790[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (11))){
var inst_30643 = (state_30715[(2)]);
var state_30715__$1 = state_30715;
var statearr_30747_30791 = state_30715__$1;
(statearr_30747_30791[(2)] = inst_30643);

(statearr_30747_30791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (9))){
var inst_30645 = figwheel.client.heads_up.clear.call(null);
var state_30715__$1 = state_30715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30715__$1,(12),inst_30645);
} else {
if((state_val_30716 === (5))){
var inst_30636 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30715__$1 = state_30715;
var statearr_30748_30792 = state_30715__$1;
(statearr_30748_30792[(2)] = inst_30636);

(statearr_30748_30792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (14))){
var inst_30663 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30715__$1 = state_30715;
if(cljs.core.truth_(inst_30663)){
var statearr_30749_30793 = state_30715__$1;
(statearr_30749_30793[(1)] = (18));

} else {
var statearr_30750_30794 = state_30715__$1;
(statearr_30750_30794[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (26))){
var inst_30687 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30715__$1 = state_30715;
if(cljs.core.truth_(inst_30687)){
var statearr_30751_30795 = state_30715__$1;
(statearr_30751_30795[(1)] = (30));

} else {
var statearr_30752_30796 = state_30715__$1;
(statearr_30752_30796[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (16))){
var inst_30655 = (state_30715[(2)]);
var inst_30656 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30657 = figwheel.client.format_messages.call(null,inst_30656);
var inst_30658 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30659 = figwheel.client.heads_up.display_error.call(null,inst_30657,inst_30658);
var state_30715__$1 = (function (){var statearr_30753 = state_30715;
(statearr_30753[(9)] = inst_30655);

return statearr_30753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30715__$1,(17),inst_30659);
} else {
if((state_val_30716 === (30))){
var inst_30689 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30690 = figwheel.client.heads_up.display_warning.call(null,inst_30689);
var state_30715__$1 = state_30715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30715__$1,(33),inst_30690);
} else {
if((state_val_30716 === (10))){
var inst_30649 = (state_30715[(2)]);
var state_30715__$1 = state_30715;
var statearr_30754_30797 = state_30715__$1;
(statearr_30754_30797[(2)] = inst_30649);

(statearr_30754_30797[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (18))){
var inst_30665 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30666 = figwheel.client.format_messages.call(null,inst_30665);
var inst_30667 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30668 = figwheel.client.heads_up.display_error.call(null,inst_30666,inst_30667);
var state_30715__$1 = state_30715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30715__$1,(21),inst_30668);
} else {
if((state_val_30716 === (37))){
var inst_30698 = (state_30715[(2)]);
var state_30715__$1 = state_30715;
var statearr_30755_30798 = state_30715__$1;
(statearr_30755_30798[(2)] = inst_30698);

(statearr_30755_30798[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30716 === (8))){
var inst_30641 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30715__$1 = state_30715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30715__$1,(11),inst_30641);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25158__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25046__auto__,c__25158__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25047__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25047__auto____0 = (function (){
var statearr_30759 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30759[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25047__auto__);

(statearr_30759[(1)] = (1));

return statearr_30759;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25047__auto____1 = (function (state_30715){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_30715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e30760){if((e30760 instanceof Object)){
var ex__25050__auto__ = e30760;
var statearr_30761_30799 = state_30715;
(statearr_30761_30799[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30800 = state_30715;
state_30715 = G__30800;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25047__auto__ = function(state_30715){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25047__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25047__auto____1.call(this,state_30715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25047__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25047__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto__,msg_hist,msg_names,msg))
})();
var state__25160__auto__ = (function (){var statearr_30762 = f__25159__auto__.call(null);
(statearr_30762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto__);

return statearr_30762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto__,msg_hist,msg_names,msg))
);

return c__25158__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25158__auto___30863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto___30863,ch){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto___30863,ch){
return (function (state_30846){
var state_val_30847 = (state_30846[(1)]);
if((state_val_30847 === (1))){
var state_30846__$1 = state_30846;
var statearr_30848_30864 = state_30846__$1;
(statearr_30848_30864[(2)] = null);

(statearr_30848_30864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (2))){
var state_30846__$1 = state_30846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30846__$1,(4),ch);
} else {
if((state_val_30847 === (3))){
var inst_30844 = (state_30846[(2)]);
var state_30846__$1 = state_30846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30846__$1,inst_30844);
} else {
if((state_val_30847 === (4))){
var inst_30834 = (state_30846[(7)]);
var inst_30834__$1 = (state_30846[(2)]);
var state_30846__$1 = (function (){var statearr_30849 = state_30846;
(statearr_30849[(7)] = inst_30834__$1);

return statearr_30849;
})();
if(cljs.core.truth_(inst_30834__$1)){
var statearr_30850_30865 = state_30846__$1;
(statearr_30850_30865[(1)] = (5));

} else {
var statearr_30851_30866 = state_30846__$1;
(statearr_30851_30866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (5))){
var inst_30834 = (state_30846[(7)]);
var inst_30836 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30834);
var state_30846__$1 = state_30846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30846__$1,(8),inst_30836);
} else {
if((state_val_30847 === (6))){
var state_30846__$1 = state_30846;
var statearr_30852_30867 = state_30846__$1;
(statearr_30852_30867[(2)] = null);

(statearr_30852_30867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (7))){
var inst_30842 = (state_30846[(2)]);
var state_30846__$1 = state_30846;
var statearr_30853_30868 = state_30846__$1;
(statearr_30853_30868[(2)] = inst_30842);

(statearr_30853_30868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30847 === (8))){
var inst_30838 = (state_30846[(2)]);
var state_30846__$1 = (function (){var statearr_30854 = state_30846;
(statearr_30854[(8)] = inst_30838);

return statearr_30854;
})();
var statearr_30855_30869 = state_30846__$1;
(statearr_30855_30869[(2)] = null);

(statearr_30855_30869[(1)] = (2));


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
});})(c__25158__auto___30863,ch))
;
return ((function (switch__25046__auto__,c__25158__auto___30863,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25047__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25047__auto____0 = (function (){
var statearr_30859 = [null,null,null,null,null,null,null,null,null];
(statearr_30859[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25047__auto__);

(statearr_30859[(1)] = (1));

return statearr_30859;
});
var figwheel$client$heads_up_plugin_$_state_machine__25047__auto____1 = (function (state_30846){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_30846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e30860){if((e30860 instanceof Object)){
var ex__25050__auto__ = e30860;
var statearr_30861_30870 = state_30846;
(statearr_30861_30870[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30871 = state_30846;
state_30846 = G__30871;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25047__auto__ = function(state_30846){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25047__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25047__auto____1.call(this,state_30846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25047__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25047__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto___30863,ch))
})();
var state__25160__auto__ = (function (){var statearr_30862 = f__25159__auto__.call(null);
(statearr_30862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto___30863);

return statearr_30862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto___30863,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25158__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25158__auto__){
return (function (){
var f__25159__auto__ = (function (){var switch__25046__auto__ = ((function (c__25158__auto__){
return (function (state_30892){
var state_val_30893 = (state_30892[(1)]);
if((state_val_30893 === (1))){
var inst_30887 = cljs.core.async.timeout.call(null,(3000));
var state_30892__$1 = state_30892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30892__$1,(2),inst_30887);
} else {
if((state_val_30893 === (2))){
var inst_30889 = (state_30892[(2)]);
var inst_30890 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30892__$1 = (function (){var statearr_30894 = state_30892;
(statearr_30894[(7)] = inst_30889);

return statearr_30894;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30892__$1,inst_30890);
} else {
return null;
}
}
});})(c__25158__auto__))
;
return ((function (switch__25046__auto__,c__25158__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25047__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25047__auto____0 = (function (){
var statearr_30898 = [null,null,null,null,null,null,null,null];
(statearr_30898[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25047__auto__);

(statearr_30898[(1)] = (1));

return statearr_30898;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25047__auto____1 = (function (state_30892){
while(true){
var ret_value__25048__auto__ = (function (){try{while(true){
var result__25049__auto__ = switch__25046__auto__.call(null,state_30892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25049__auto__;
}
break;
}
}catch (e30899){if((e30899 instanceof Object)){
var ex__25050__auto__ = e30899;
var statearr_30900_30902 = state_30892;
(statearr_30900_30902[(5)] = ex__25050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30903 = state_30892;
state_30892 = G__30903;
continue;
} else {
return ret_value__25048__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25047__auto__ = function(state_30892){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25047__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25047__auto____1.call(this,state_30892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25047__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25047__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25047__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25047__auto__;
})()
;})(switch__25046__auto__,c__25158__auto__))
})();
var state__25160__auto__ = (function (){var statearr_30901 = f__25159__auto__.call(null);
(statearr_30901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25158__auto__);

return statearr_30901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25160__auto__);
});})(c__25158__auto__))
);

return c__25158__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30904){
var map__30911 = p__30904;
var map__30911__$1 = ((((!((map__30911 == null)))?((((map__30911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30911):map__30911);
var ed = map__30911__$1;
var formatted_exception = cljs.core.get.call(null,map__30911__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30911__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30911__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30913_30917 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30914_30918 = null;
var count__30915_30919 = (0);
var i__30916_30920 = (0);
while(true){
if((i__30916_30920 < count__30915_30919)){
var msg_30921 = cljs.core._nth.call(null,chunk__30914_30918,i__30916_30920);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30921);

var G__30922 = seq__30913_30917;
var G__30923 = chunk__30914_30918;
var G__30924 = count__30915_30919;
var G__30925 = (i__30916_30920 + (1));
seq__30913_30917 = G__30922;
chunk__30914_30918 = G__30923;
count__30915_30919 = G__30924;
i__30916_30920 = G__30925;
continue;
} else {
var temp__4425__auto___30926 = cljs.core.seq.call(null,seq__30913_30917);
if(temp__4425__auto___30926){
var seq__30913_30927__$1 = temp__4425__auto___30926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30913_30927__$1)){
var c__22549__auto___30928 = cljs.core.chunk_first.call(null,seq__30913_30927__$1);
var G__30929 = cljs.core.chunk_rest.call(null,seq__30913_30927__$1);
var G__30930 = c__22549__auto___30928;
var G__30931 = cljs.core.count.call(null,c__22549__auto___30928);
var G__30932 = (0);
seq__30913_30917 = G__30929;
chunk__30914_30918 = G__30930;
count__30915_30919 = G__30931;
i__30916_30920 = G__30932;
continue;
} else {
var msg_30933 = cljs.core.first.call(null,seq__30913_30927__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30933);

var G__30934 = cljs.core.next.call(null,seq__30913_30927__$1);
var G__30935 = null;
var G__30936 = (0);
var G__30937 = (0);
seq__30913_30917 = G__30934;
chunk__30914_30918 = G__30935;
count__30915_30919 = G__30936;
i__30916_30920 = G__30937;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30938){
var map__30941 = p__30938;
var map__30941__$1 = ((((!((map__30941 == null)))?((((map__30941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30941):map__30941);
var w = map__30941__$1;
var message = cljs.core.get.call(null,map__30941__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__21726__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21726__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21726__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30949 = cljs.core.seq.call(null,plugins);
var chunk__30950 = null;
var count__30951 = (0);
var i__30952 = (0);
while(true){
if((i__30952 < count__30951)){
var vec__30953 = cljs.core._nth.call(null,chunk__30950,i__30952);
var k = cljs.core.nth.call(null,vec__30953,(0),null);
var plugin = cljs.core.nth.call(null,vec__30953,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30955 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30949,chunk__30950,count__30951,i__30952,pl_30955,vec__30953,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30955.call(null,msg_hist);
});})(seq__30949,chunk__30950,count__30951,i__30952,pl_30955,vec__30953,k,plugin))
);
} else {
}

var G__30956 = seq__30949;
var G__30957 = chunk__30950;
var G__30958 = count__30951;
var G__30959 = (i__30952 + (1));
seq__30949 = G__30956;
chunk__30950 = G__30957;
count__30951 = G__30958;
i__30952 = G__30959;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30949);
if(temp__4425__auto__){
var seq__30949__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30949__$1)){
var c__22549__auto__ = cljs.core.chunk_first.call(null,seq__30949__$1);
var G__30960 = cljs.core.chunk_rest.call(null,seq__30949__$1);
var G__30961 = c__22549__auto__;
var G__30962 = cljs.core.count.call(null,c__22549__auto__);
var G__30963 = (0);
seq__30949 = G__30960;
chunk__30950 = G__30961;
count__30951 = G__30962;
i__30952 = G__30963;
continue;
} else {
var vec__30954 = cljs.core.first.call(null,seq__30949__$1);
var k = cljs.core.nth.call(null,vec__30954,(0),null);
var plugin = cljs.core.nth.call(null,vec__30954,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30964 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30949,chunk__30950,count__30951,i__30952,pl_30964,vec__30954,k,plugin,seq__30949__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30964.call(null,msg_hist);
});})(seq__30949,chunk__30950,count__30951,i__30952,pl_30964,vec__30954,k,plugin,seq__30949__$1,temp__4425__auto__))
);
} else {
}

var G__30965 = cljs.core.next.call(null,seq__30949__$1);
var G__30966 = null;
var G__30967 = (0);
var G__30968 = (0);
seq__30949 = G__30965;
chunk__30950 = G__30966;
count__30951 = G__30967;
i__30952 = G__30968;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args30969 = [];
var len__22809__auto___30972 = arguments.length;
var i__22810__auto___30973 = (0);
while(true){
if((i__22810__auto___30973 < len__22809__auto___30972)){
args30969.push((arguments[i__22810__auto___30973]));

var G__30974 = (i__22810__auto___30973 + (1));
i__22810__auto___30973 = G__30974;
continue;
} else {
}
break;
}

var G__30971 = args30969.length;
switch (G__30971) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30969.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__22816__auto__ = [];
var len__22809__auto___30980 = arguments.length;
var i__22810__auto___30981 = (0);
while(true){
if((i__22810__auto___30981 < len__22809__auto___30980)){
args__22816__auto__.push((arguments[i__22810__auto___30981]));

var G__30982 = (i__22810__auto___30981 + (1));
i__22810__auto___30981 = G__30982;
continue;
} else {
}
break;
}

var argseq__22817__auto__ = ((((0) < args__22816__auto__.length))?(new cljs.core.IndexedSeq(args__22816__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22817__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30977){
var map__30978 = p__30977;
var map__30978__$1 = ((((!((map__30978 == null)))?((((map__30978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30978):map__30978);
var opts = map__30978__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30976){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30976));
});

//# sourceMappingURL=client.js.map