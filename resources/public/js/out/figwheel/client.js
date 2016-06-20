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
var pred__40219 = cljs.core._EQ_;
var expr__40220 = (function (){var or__25914__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__40219.call(null,"true",expr__40220))){
return true;
} else {
if(cljs.core.truth_(pred__40219.call(null,"false",expr__40220))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__40220)].join('')));
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
var G__40222__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__40222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40223__i = 0, G__40223__a = new Array(arguments.length -  0);
while (G__40223__i < G__40223__a.length) {G__40223__a[G__40223__i] = arguments[G__40223__i + 0]; ++G__40223__i;}
  args = new cljs.core.IndexedSeq(G__40223__a,0);
} 
return G__40222__delegate.call(this,args);};
G__40222.cljs$lang$maxFixedArity = 0;
G__40222.cljs$lang$applyTo = (function (arglist__40224){
var args = cljs.core.seq(arglist__40224);
return G__40222__delegate(args);
});
G__40222.cljs$core$IFn$_invoke$arity$variadic = G__40222__delegate;
return G__40222;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__40225){
var map__40228 = p__40225;
var map__40228__$1 = ((((!((map__40228 == null)))?((((map__40228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40228):map__40228);
var message = cljs.core.get.call(null,map__40228__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__40228__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25914__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25902__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25902__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25902__auto__;
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
var c__30045__auto___40390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto___40390,ch){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto___40390,ch){
return (function (state_40359){
var state_val_40360 = (state_40359[(1)]);
if((state_val_40360 === (7))){
var inst_40355 = (state_40359[(2)]);
var state_40359__$1 = state_40359;
var statearr_40361_40391 = state_40359__$1;
(statearr_40361_40391[(2)] = inst_40355);

(statearr_40361_40391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (1))){
var state_40359__$1 = state_40359;
var statearr_40362_40392 = state_40359__$1;
(statearr_40362_40392[(2)] = null);

(statearr_40362_40392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (4))){
var inst_40312 = (state_40359[(7)]);
var inst_40312__$1 = (state_40359[(2)]);
var state_40359__$1 = (function (){var statearr_40363 = state_40359;
(statearr_40363[(7)] = inst_40312__$1);

return statearr_40363;
})();
if(cljs.core.truth_(inst_40312__$1)){
var statearr_40364_40393 = state_40359__$1;
(statearr_40364_40393[(1)] = (5));

} else {
var statearr_40365_40394 = state_40359__$1;
(statearr_40365_40394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (15))){
var inst_40319 = (state_40359[(8)]);
var inst_40334 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40319);
var inst_40335 = cljs.core.first.call(null,inst_40334);
var inst_40336 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_40335);
var inst_40337 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_40336)].join('');
var inst_40338 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_40337);
var state_40359__$1 = state_40359;
var statearr_40366_40395 = state_40359__$1;
(statearr_40366_40395[(2)] = inst_40338);

(statearr_40366_40395[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (13))){
var inst_40343 = (state_40359[(2)]);
var state_40359__$1 = state_40359;
var statearr_40367_40396 = state_40359__$1;
(statearr_40367_40396[(2)] = inst_40343);

(statearr_40367_40396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (6))){
var state_40359__$1 = state_40359;
var statearr_40368_40397 = state_40359__$1;
(statearr_40368_40397[(2)] = null);

(statearr_40368_40397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (17))){
var inst_40341 = (state_40359[(2)]);
var state_40359__$1 = state_40359;
var statearr_40369_40398 = state_40359__$1;
(statearr_40369_40398[(2)] = inst_40341);

(statearr_40369_40398[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (3))){
var inst_40357 = (state_40359[(2)]);
var state_40359__$1 = state_40359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40359__$1,inst_40357);
} else {
if((state_val_40360 === (12))){
var inst_40318 = (state_40359[(9)]);
var inst_40332 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_40318,opts);
var state_40359__$1 = state_40359;
if(cljs.core.truth_(inst_40332)){
var statearr_40370_40399 = state_40359__$1;
(statearr_40370_40399[(1)] = (15));

} else {
var statearr_40371_40400 = state_40359__$1;
(statearr_40371_40400[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (2))){
var state_40359__$1 = state_40359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40359__$1,(4),ch);
} else {
if((state_val_40360 === (11))){
var inst_40319 = (state_40359[(8)]);
var inst_40324 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40325 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_40319);
var inst_40326 = cljs.core.async.timeout.call(null,(1000));
var inst_40327 = [inst_40325,inst_40326];
var inst_40328 = (new cljs.core.PersistentVector(null,2,(5),inst_40324,inst_40327,null));
var state_40359__$1 = state_40359;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40359__$1,(14),inst_40328);
} else {
if((state_val_40360 === (9))){
var inst_40319 = (state_40359[(8)]);
var inst_40345 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_40346 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40319);
var inst_40347 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40346);
var inst_40348 = [cljs.core.str("Not loading: "),cljs.core.str(inst_40347)].join('');
var inst_40349 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_40348);
var state_40359__$1 = (function (){var statearr_40372 = state_40359;
(statearr_40372[(10)] = inst_40345);

return statearr_40372;
})();
var statearr_40373_40401 = state_40359__$1;
(statearr_40373_40401[(2)] = inst_40349);

(statearr_40373_40401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (5))){
var inst_40312 = (state_40359[(7)]);
var inst_40314 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_40315 = (new cljs.core.PersistentArrayMap(null,2,inst_40314,null));
var inst_40316 = (new cljs.core.PersistentHashSet(null,inst_40315,null));
var inst_40317 = figwheel.client.focus_msgs.call(null,inst_40316,inst_40312);
var inst_40318 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_40317);
var inst_40319 = cljs.core.first.call(null,inst_40317);
var inst_40320 = figwheel.client.autoload_QMARK_.call(null);
var state_40359__$1 = (function (){var statearr_40374 = state_40359;
(statearr_40374[(9)] = inst_40318);

(statearr_40374[(8)] = inst_40319);

return statearr_40374;
})();
if(cljs.core.truth_(inst_40320)){
var statearr_40375_40402 = state_40359__$1;
(statearr_40375_40402[(1)] = (8));

} else {
var statearr_40376_40403 = state_40359__$1;
(statearr_40376_40403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (14))){
var inst_40330 = (state_40359[(2)]);
var state_40359__$1 = state_40359;
var statearr_40377_40404 = state_40359__$1;
(statearr_40377_40404[(2)] = inst_40330);

(statearr_40377_40404[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (16))){
var state_40359__$1 = state_40359;
var statearr_40378_40405 = state_40359__$1;
(statearr_40378_40405[(2)] = null);

(statearr_40378_40405[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (10))){
var inst_40351 = (state_40359[(2)]);
var state_40359__$1 = (function (){var statearr_40379 = state_40359;
(statearr_40379[(11)] = inst_40351);

return statearr_40379;
})();
var statearr_40380_40406 = state_40359__$1;
(statearr_40380_40406[(2)] = null);

(statearr_40380_40406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (8))){
var inst_40318 = (state_40359[(9)]);
var inst_40322 = figwheel.client.reload_file_state_QMARK_.call(null,inst_40318,opts);
var state_40359__$1 = state_40359;
if(cljs.core.truth_(inst_40322)){
var statearr_40381_40407 = state_40359__$1;
(statearr_40381_40407[(1)] = (11));

} else {
var statearr_40382_40408 = state_40359__$1;
(statearr_40382_40408[(1)] = (12));

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
});})(c__30045__auto___40390,ch))
;
return ((function (switch__29933__auto__,c__30045__auto___40390,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29934__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29934__auto____0 = (function (){
var statearr_40386 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40386[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29934__auto__);

(statearr_40386[(1)] = (1));

return statearr_40386;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29934__auto____1 = (function (state_40359){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_40359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e40387){if((e40387 instanceof Object)){
var ex__29937__auto__ = e40387;
var statearr_40388_40409 = state_40359;
(statearr_40388_40409[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40410 = state_40359;
state_40359 = G__40410;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29934__auto__ = function(state_40359){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29934__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29934__auto____1.call(this,state_40359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29934__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29934__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto___40390,ch))
})();
var state__30047__auto__ = (function (){var statearr_40389 = f__30046__auto__.call(null);
(statearr_40389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___40390);

return statearr_40389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto___40390,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40411_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40411_SHARP_));
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
var base_path_40418 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_40418){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_40416 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_40417 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_40416,_STAR_print_newline_STAR_40417,base_path_40418){
return (function() { 
var G__40419__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__40419 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40420__i = 0, G__40420__a = new Array(arguments.length -  0);
while (G__40420__i < G__40420__a.length) {G__40420__a[G__40420__i] = arguments[G__40420__i + 0]; ++G__40420__i;}
  args = new cljs.core.IndexedSeq(G__40420__a,0);
} 
return G__40419__delegate.call(this,args);};
G__40419.cljs$lang$maxFixedArity = 0;
G__40419.cljs$lang$applyTo = (function (arglist__40421){
var args = cljs.core.seq(arglist__40421);
return G__40419__delegate(args);
});
G__40419.cljs$core$IFn$_invoke$arity$variadic = G__40419__delegate;
return G__40419;
})()
;})(_STAR_print_fn_STAR_40416,_STAR_print_newline_STAR_40417,base_path_40418))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40417;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40416;
}}catch (e40415){if((e40415 instanceof Error)){
var e = e40415;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40418], null));
} else {
var e = e40415;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_40418))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40422){
var map__40429 = p__40422;
var map__40429__$1 = ((((!((map__40429 == null)))?((((map__40429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40429):map__40429);
var opts = map__40429__$1;
var build_id = cljs.core.get.call(null,map__40429__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__40429,map__40429__$1,opts,build_id){
return (function (p__40431){
var vec__40432 = p__40431;
var map__40433 = cljs.core.nth.call(null,vec__40432,(0),null);
var map__40433__$1 = ((((!((map__40433 == null)))?((((map__40433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40433):map__40433);
var msg = map__40433__$1;
var msg_name = cljs.core.get.call(null,map__40433__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40432,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__40432,map__40433,map__40433__$1,msg,msg_name,_,map__40429,map__40429__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__40432,map__40433,map__40433__$1,msg,msg_name,_,map__40429,map__40429__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__40429,map__40429__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40439){
var vec__40440 = p__40439;
var map__40441 = cljs.core.nth.call(null,vec__40440,(0),null);
var map__40441__$1 = ((((!((map__40441 == null)))?((((map__40441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40441):map__40441);
var msg = map__40441__$1;
var msg_name = cljs.core.get.call(null,map__40441__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40440,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40443){
var map__40453 = p__40443;
var map__40453__$1 = ((((!((map__40453 == null)))?((((map__40453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40453):map__40453);
var on_compile_warning = cljs.core.get.call(null,map__40453__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40453__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40453,map__40453__$1,on_compile_warning,on_compile_fail){
return (function (p__40455){
var vec__40456 = p__40455;
var map__40457 = cljs.core.nth.call(null,vec__40456,(0),null);
var map__40457__$1 = ((((!((map__40457 == null)))?((((map__40457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40457):map__40457);
var msg = map__40457__$1;
var msg_name = cljs.core.get.call(null,map__40457__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40456,(1));
var pred__40459 = cljs.core._EQ_;
var expr__40460 = msg_name;
if(cljs.core.truth_(pred__40459.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40460))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40459.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40460))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40453,map__40453__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto__,msg_hist,msg_names,msg){
return (function (state_40676){
var state_val_40677 = (state_40676[(1)]);
if((state_val_40677 === (7))){
var inst_40600 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
if(cljs.core.truth_(inst_40600)){
var statearr_40678_40724 = state_40676__$1;
(statearr_40678_40724[(1)] = (8));

} else {
var statearr_40679_40725 = state_40676__$1;
(statearr_40679_40725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (20))){
var inst_40670 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
var statearr_40680_40726 = state_40676__$1;
(statearr_40680_40726[(2)] = inst_40670);

(statearr_40680_40726[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (27))){
var inst_40666 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
var statearr_40681_40727 = state_40676__$1;
(statearr_40681_40727[(2)] = inst_40666);

(statearr_40681_40727[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (1))){
var inst_40593 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40676__$1 = state_40676;
if(cljs.core.truth_(inst_40593)){
var statearr_40682_40728 = state_40676__$1;
(statearr_40682_40728[(1)] = (2));

} else {
var statearr_40683_40729 = state_40676__$1;
(statearr_40683_40729[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (24))){
var inst_40668 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
var statearr_40684_40730 = state_40676__$1;
(statearr_40684_40730[(2)] = inst_40668);

(statearr_40684_40730[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (4))){
var inst_40674 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40676__$1,inst_40674);
} else {
if((state_val_40677 === (15))){
var inst_40672 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
var statearr_40685_40731 = state_40676__$1;
(statearr_40685_40731[(2)] = inst_40672);

(statearr_40685_40731[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (21))){
var inst_40631 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
var statearr_40686_40732 = state_40676__$1;
(statearr_40686_40732[(2)] = inst_40631);

(statearr_40686_40732[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (31))){
var inst_40655 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40676__$1 = state_40676;
if(cljs.core.truth_(inst_40655)){
var statearr_40687_40733 = state_40676__$1;
(statearr_40687_40733[(1)] = (34));

} else {
var statearr_40688_40734 = state_40676__$1;
(statearr_40688_40734[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (32))){
var inst_40664 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
var statearr_40689_40735 = state_40676__$1;
(statearr_40689_40735[(2)] = inst_40664);

(statearr_40689_40735[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (33))){
var inst_40653 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
var statearr_40690_40736 = state_40676__$1;
(statearr_40690_40736[(2)] = inst_40653);

(statearr_40690_40736[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (13))){
var inst_40614 = figwheel.client.heads_up.clear.call(null);
var state_40676__$1 = state_40676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40676__$1,(16),inst_40614);
} else {
if((state_val_40677 === (22))){
var inst_40635 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40636 = figwheel.client.heads_up.append_message.call(null,inst_40635);
var state_40676__$1 = state_40676;
var statearr_40691_40737 = state_40676__$1;
(statearr_40691_40737[(2)] = inst_40636);

(statearr_40691_40737[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (36))){
var inst_40662 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
var statearr_40692_40738 = state_40676__$1;
(statearr_40692_40738[(2)] = inst_40662);

(statearr_40692_40738[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (29))){
var inst_40646 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
var statearr_40693_40739 = state_40676__$1;
(statearr_40693_40739[(2)] = inst_40646);

(statearr_40693_40739[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (6))){
var inst_40595 = (state_40676[(7)]);
var state_40676__$1 = state_40676;
var statearr_40694_40740 = state_40676__$1;
(statearr_40694_40740[(2)] = inst_40595);

(statearr_40694_40740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (28))){
var inst_40642 = (state_40676[(2)]);
var inst_40643 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40644 = figwheel.client.heads_up.display_warning.call(null,inst_40643);
var state_40676__$1 = (function (){var statearr_40695 = state_40676;
(statearr_40695[(8)] = inst_40642);

return statearr_40695;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40676__$1,(29),inst_40644);
} else {
if((state_val_40677 === (25))){
var inst_40640 = figwheel.client.heads_up.clear.call(null);
var state_40676__$1 = state_40676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40676__$1,(28),inst_40640);
} else {
if((state_val_40677 === (34))){
var inst_40657 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40676__$1 = state_40676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40676__$1,(37),inst_40657);
} else {
if((state_val_40677 === (17))){
var inst_40622 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
var statearr_40696_40741 = state_40676__$1;
(statearr_40696_40741[(2)] = inst_40622);

(statearr_40696_40741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (3))){
var inst_40612 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40676__$1 = state_40676;
if(cljs.core.truth_(inst_40612)){
var statearr_40697_40742 = state_40676__$1;
(statearr_40697_40742[(1)] = (13));

} else {
var statearr_40698_40743 = state_40676__$1;
(statearr_40698_40743[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (12))){
var inst_40608 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
var statearr_40699_40744 = state_40676__$1;
(statearr_40699_40744[(2)] = inst_40608);

(statearr_40699_40744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (2))){
var inst_40595 = (state_40676[(7)]);
var inst_40595__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40676__$1 = (function (){var statearr_40700 = state_40676;
(statearr_40700[(7)] = inst_40595__$1);

return statearr_40700;
})();
if(cljs.core.truth_(inst_40595__$1)){
var statearr_40701_40745 = state_40676__$1;
(statearr_40701_40745[(1)] = (5));

} else {
var statearr_40702_40746 = state_40676__$1;
(statearr_40702_40746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (23))){
var inst_40638 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40676__$1 = state_40676;
if(cljs.core.truth_(inst_40638)){
var statearr_40703_40747 = state_40676__$1;
(statearr_40703_40747[(1)] = (25));

} else {
var statearr_40704_40748 = state_40676__$1;
(statearr_40704_40748[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (35))){
var state_40676__$1 = state_40676;
var statearr_40705_40749 = state_40676__$1;
(statearr_40705_40749[(2)] = null);

(statearr_40705_40749[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (19))){
var inst_40633 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40676__$1 = state_40676;
if(cljs.core.truth_(inst_40633)){
var statearr_40706_40750 = state_40676__$1;
(statearr_40706_40750[(1)] = (22));

} else {
var statearr_40707_40751 = state_40676__$1;
(statearr_40707_40751[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (11))){
var inst_40604 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
var statearr_40708_40752 = state_40676__$1;
(statearr_40708_40752[(2)] = inst_40604);

(statearr_40708_40752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (9))){
var inst_40606 = figwheel.client.heads_up.clear.call(null);
var state_40676__$1 = state_40676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40676__$1,(12),inst_40606);
} else {
if((state_val_40677 === (5))){
var inst_40597 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40676__$1 = state_40676;
var statearr_40709_40753 = state_40676__$1;
(statearr_40709_40753[(2)] = inst_40597);

(statearr_40709_40753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (14))){
var inst_40624 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40676__$1 = state_40676;
if(cljs.core.truth_(inst_40624)){
var statearr_40710_40754 = state_40676__$1;
(statearr_40710_40754[(1)] = (18));

} else {
var statearr_40711_40755 = state_40676__$1;
(statearr_40711_40755[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (26))){
var inst_40648 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40676__$1 = state_40676;
if(cljs.core.truth_(inst_40648)){
var statearr_40712_40756 = state_40676__$1;
(statearr_40712_40756[(1)] = (30));

} else {
var statearr_40713_40757 = state_40676__$1;
(statearr_40713_40757[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (16))){
var inst_40616 = (state_40676[(2)]);
var inst_40617 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40618 = figwheel.client.format_messages.call(null,inst_40617);
var inst_40619 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40620 = figwheel.client.heads_up.display_error.call(null,inst_40618,inst_40619);
var state_40676__$1 = (function (){var statearr_40714 = state_40676;
(statearr_40714[(9)] = inst_40616);

return statearr_40714;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40676__$1,(17),inst_40620);
} else {
if((state_val_40677 === (30))){
var inst_40650 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40651 = figwheel.client.heads_up.display_warning.call(null,inst_40650);
var state_40676__$1 = state_40676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40676__$1,(33),inst_40651);
} else {
if((state_val_40677 === (10))){
var inst_40610 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
var statearr_40715_40758 = state_40676__$1;
(statearr_40715_40758[(2)] = inst_40610);

(statearr_40715_40758[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (18))){
var inst_40626 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40627 = figwheel.client.format_messages.call(null,inst_40626);
var inst_40628 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40629 = figwheel.client.heads_up.display_error.call(null,inst_40627,inst_40628);
var state_40676__$1 = state_40676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40676__$1,(21),inst_40629);
} else {
if((state_val_40677 === (37))){
var inst_40659 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
var statearr_40716_40759 = state_40676__$1;
(statearr_40716_40759[(2)] = inst_40659);

(statearr_40716_40759[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (8))){
var inst_40602 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40676__$1 = state_40676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40676__$1,(11),inst_40602);
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
});})(c__30045__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29933__auto__,c__30045__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29934__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29934__auto____0 = (function (){
var statearr_40720 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40720[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29934__auto__);

(statearr_40720[(1)] = (1));

return statearr_40720;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29934__auto____1 = (function (state_40676){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_40676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e40721){if((e40721 instanceof Object)){
var ex__29937__auto__ = e40721;
var statearr_40722_40760 = state_40676;
(statearr_40722_40760[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40761 = state_40676;
state_40676 = G__40761;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29934__auto__ = function(state_40676){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29934__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29934__auto____1.call(this,state_40676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29934__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29934__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto__,msg_hist,msg_names,msg))
})();
var state__30047__auto__ = (function (){var statearr_40723 = f__30046__auto__.call(null);
(statearr_40723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto__);

return statearr_40723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto__,msg_hist,msg_names,msg))
);

return c__30045__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30045__auto___40824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto___40824,ch){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto___40824,ch){
return (function (state_40807){
var state_val_40808 = (state_40807[(1)]);
if((state_val_40808 === (1))){
var state_40807__$1 = state_40807;
var statearr_40809_40825 = state_40807__$1;
(statearr_40809_40825[(2)] = null);

(statearr_40809_40825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40808 === (2))){
var state_40807__$1 = state_40807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40807__$1,(4),ch);
} else {
if((state_val_40808 === (3))){
var inst_40805 = (state_40807[(2)]);
var state_40807__$1 = state_40807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40807__$1,inst_40805);
} else {
if((state_val_40808 === (4))){
var inst_40795 = (state_40807[(7)]);
var inst_40795__$1 = (state_40807[(2)]);
var state_40807__$1 = (function (){var statearr_40810 = state_40807;
(statearr_40810[(7)] = inst_40795__$1);

return statearr_40810;
})();
if(cljs.core.truth_(inst_40795__$1)){
var statearr_40811_40826 = state_40807__$1;
(statearr_40811_40826[(1)] = (5));

} else {
var statearr_40812_40827 = state_40807__$1;
(statearr_40812_40827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40808 === (5))){
var inst_40795 = (state_40807[(7)]);
var inst_40797 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_40795);
var state_40807__$1 = state_40807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40807__$1,(8),inst_40797);
} else {
if((state_val_40808 === (6))){
var state_40807__$1 = state_40807;
var statearr_40813_40828 = state_40807__$1;
(statearr_40813_40828[(2)] = null);

(statearr_40813_40828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40808 === (7))){
var inst_40803 = (state_40807[(2)]);
var state_40807__$1 = state_40807;
var statearr_40814_40829 = state_40807__$1;
(statearr_40814_40829[(2)] = inst_40803);

(statearr_40814_40829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40808 === (8))){
var inst_40799 = (state_40807[(2)]);
var state_40807__$1 = (function (){var statearr_40815 = state_40807;
(statearr_40815[(8)] = inst_40799);

return statearr_40815;
})();
var statearr_40816_40830 = state_40807__$1;
(statearr_40816_40830[(2)] = null);

(statearr_40816_40830[(1)] = (2));


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
});})(c__30045__auto___40824,ch))
;
return ((function (switch__29933__auto__,c__30045__auto___40824,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29934__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29934__auto____0 = (function (){
var statearr_40820 = [null,null,null,null,null,null,null,null,null];
(statearr_40820[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29934__auto__);

(statearr_40820[(1)] = (1));

return statearr_40820;
});
var figwheel$client$heads_up_plugin_$_state_machine__29934__auto____1 = (function (state_40807){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_40807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e40821){if((e40821 instanceof Object)){
var ex__29937__auto__ = e40821;
var statearr_40822_40831 = state_40807;
(statearr_40822_40831[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40832 = state_40807;
state_40807 = G__40832;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29934__auto__ = function(state_40807){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29934__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29934__auto____1.call(this,state_40807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29934__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29934__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto___40824,ch))
})();
var state__30047__auto__ = (function (){var statearr_40823 = f__30046__auto__.call(null);
(statearr_40823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto___40824);

return statearr_40823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto___40824,ch))
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
var c__30045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30045__auto__){
return (function (){
var f__30046__auto__ = (function (){var switch__29933__auto__ = ((function (c__30045__auto__){
return (function (state_40853){
var state_val_40854 = (state_40853[(1)]);
if((state_val_40854 === (1))){
var inst_40848 = cljs.core.async.timeout.call(null,(3000));
var state_40853__$1 = state_40853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40853__$1,(2),inst_40848);
} else {
if((state_val_40854 === (2))){
var inst_40850 = (state_40853[(2)]);
var inst_40851 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40853__$1 = (function (){var statearr_40855 = state_40853;
(statearr_40855[(7)] = inst_40850);

return statearr_40855;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40853__$1,inst_40851);
} else {
return null;
}
}
});})(c__30045__auto__))
;
return ((function (switch__29933__auto__,c__30045__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29934__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29934__auto____0 = (function (){
var statearr_40859 = [null,null,null,null,null,null,null,null];
(statearr_40859[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29934__auto__);

(statearr_40859[(1)] = (1));

return statearr_40859;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29934__auto____1 = (function (state_40853){
while(true){
var ret_value__29935__auto__ = (function (){try{while(true){
var result__29936__auto__ = switch__29933__auto__.call(null,state_40853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29936__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29936__auto__;
}
break;
}
}catch (e40860){if((e40860 instanceof Object)){
var ex__29937__auto__ = e40860;
var statearr_40861_40863 = state_40853;
(statearr_40861_40863[(5)] = ex__29937__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29935__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40864 = state_40853;
state_40853 = G__40864;
continue;
} else {
return ret_value__29935__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29934__auto__ = function(state_40853){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29934__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29934__auto____1.call(this,state_40853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29934__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29934__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29934__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29934__auto__;
})()
;})(switch__29933__auto__,c__30045__auto__))
})();
var state__30047__auto__ = (function (){var statearr_40862 = f__30046__auto__.call(null);
(statearr_40862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30045__auto__);

return statearr_40862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30047__auto__);
});})(c__30045__auto__))
);

return c__30045__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40865){
var map__40872 = p__40865;
var map__40872__$1 = ((((!((map__40872 == null)))?((((map__40872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40872):map__40872);
var ed = map__40872__$1;
var formatted_exception = cljs.core.get.call(null,map__40872__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40872__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40872__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40874_40878 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40875_40879 = null;
var count__40876_40880 = (0);
var i__40877_40881 = (0);
while(true){
if((i__40877_40881 < count__40876_40880)){
var msg_40882 = cljs.core._nth.call(null,chunk__40875_40879,i__40877_40881);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40882);

var G__40883 = seq__40874_40878;
var G__40884 = chunk__40875_40879;
var G__40885 = count__40876_40880;
var G__40886 = (i__40877_40881 + (1));
seq__40874_40878 = G__40883;
chunk__40875_40879 = G__40884;
count__40876_40880 = G__40885;
i__40877_40881 = G__40886;
continue;
} else {
var temp__4425__auto___40887 = cljs.core.seq.call(null,seq__40874_40878);
if(temp__4425__auto___40887){
var seq__40874_40888__$1 = temp__4425__auto___40887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40874_40888__$1)){
var c__26725__auto___40889 = cljs.core.chunk_first.call(null,seq__40874_40888__$1);
var G__40890 = cljs.core.chunk_rest.call(null,seq__40874_40888__$1);
var G__40891 = c__26725__auto___40889;
var G__40892 = cljs.core.count.call(null,c__26725__auto___40889);
var G__40893 = (0);
seq__40874_40878 = G__40890;
chunk__40875_40879 = G__40891;
count__40876_40880 = G__40892;
i__40877_40881 = G__40893;
continue;
} else {
var msg_40894 = cljs.core.first.call(null,seq__40874_40888__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40894);

var G__40895 = cljs.core.next.call(null,seq__40874_40888__$1);
var G__40896 = null;
var G__40897 = (0);
var G__40898 = (0);
seq__40874_40878 = G__40895;
chunk__40875_40879 = G__40896;
count__40876_40880 = G__40897;
i__40877_40881 = G__40898;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40899){
var map__40902 = p__40899;
var map__40902__$1 = ((((!((map__40902 == null)))?((((map__40902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40902):map__40902);
var w = map__40902__$1;
var message = cljs.core.get.call(null,map__40902__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__25902__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25902__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25902__auto__;
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
var seq__40910 = cljs.core.seq.call(null,plugins);
var chunk__40911 = null;
var count__40912 = (0);
var i__40913 = (0);
while(true){
if((i__40913 < count__40912)){
var vec__40914 = cljs.core._nth.call(null,chunk__40911,i__40913);
var k = cljs.core.nth.call(null,vec__40914,(0),null);
var plugin = cljs.core.nth.call(null,vec__40914,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40916 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40910,chunk__40911,count__40912,i__40913,pl_40916,vec__40914,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40916.call(null,msg_hist);
});})(seq__40910,chunk__40911,count__40912,i__40913,pl_40916,vec__40914,k,plugin))
);
} else {
}

var G__40917 = seq__40910;
var G__40918 = chunk__40911;
var G__40919 = count__40912;
var G__40920 = (i__40913 + (1));
seq__40910 = G__40917;
chunk__40911 = G__40918;
count__40912 = G__40919;
i__40913 = G__40920;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__40910);
if(temp__4425__auto__){
var seq__40910__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40910__$1)){
var c__26725__auto__ = cljs.core.chunk_first.call(null,seq__40910__$1);
var G__40921 = cljs.core.chunk_rest.call(null,seq__40910__$1);
var G__40922 = c__26725__auto__;
var G__40923 = cljs.core.count.call(null,c__26725__auto__);
var G__40924 = (0);
seq__40910 = G__40921;
chunk__40911 = G__40922;
count__40912 = G__40923;
i__40913 = G__40924;
continue;
} else {
var vec__40915 = cljs.core.first.call(null,seq__40910__$1);
var k = cljs.core.nth.call(null,vec__40915,(0),null);
var plugin = cljs.core.nth.call(null,vec__40915,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40925 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40910,chunk__40911,count__40912,i__40913,pl_40925,vec__40915,k,plugin,seq__40910__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40925.call(null,msg_hist);
});})(seq__40910,chunk__40911,count__40912,i__40913,pl_40925,vec__40915,k,plugin,seq__40910__$1,temp__4425__auto__))
);
} else {
}

var G__40926 = cljs.core.next.call(null,seq__40910__$1);
var G__40927 = null;
var G__40928 = (0);
var G__40929 = (0);
seq__40910 = G__40926;
chunk__40911 = G__40927;
count__40912 = G__40928;
i__40913 = G__40929;
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
var args40930 = [];
var len__26984__auto___40933 = arguments.length;
var i__26985__auto___40934 = (0);
while(true){
if((i__26985__auto___40934 < len__26984__auto___40933)){
args40930.push((arguments[i__26985__auto___40934]));

var G__40935 = (i__26985__auto___40934 + (1));
i__26985__auto___40934 = G__40935;
continue;
} else {
}
break;
}

var G__40932 = args40930.length;
switch (G__40932) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40930.length)].join('')));

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
var args__26991__auto__ = [];
var len__26984__auto___40941 = arguments.length;
var i__26985__auto___40942 = (0);
while(true){
if((i__26985__auto___40942 < len__26984__auto___40941)){
args__26991__auto__.push((arguments[i__26985__auto___40942]));

var G__40943 = (i__26985__auto___40942 + (1));
i__26985__auto___40942 = G__40943;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((0) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26992__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40938){
var map__40939 = p__40938;
var map__40939__$1 = ((((!((map__40939 == null)))?((((map__40939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40939):map__40939);
var opts = map__40939__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40937){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40937));
});

//# sourceMappingURL=client.js.map