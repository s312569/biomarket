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
var pred__34379 = cljs.core._EQ_;
var expr__34380 = (function (){var or__22863__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__22863__auto__)){
return or__22863__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__34379.call(null,"true",expr__34380))){
return true;
} else {
if(cljs.core.truth_(pred__34379.call(null,"false",expr__34380))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34380)].join('')));
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
var G__34382__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34383__i = 0, G__34383__a = new Array(arguments.length -  0);
while (G__34383__i < G__34383__a.length) {G__34383__a[G__34383__i] = arguments[G__34383__i + 0]; ++G__34383__i;}
  args = new cljs.core.IndexedSeq(G__34383__a,0);
} 
return G__34382__delegate.call(this,args);};
G__34382.cljs$lang$maxFixedArity = 0;
G__34382.cljs$lang$applyTo = (function (arglist__34384){
var args = cljs.core.seq(arglist__34384);
return G__34382__delegate(args);
});
G__34382.cljs$core$IFn$_invoke$arity$variadic = G__34382__delegate;
return G__34382;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34385){
var map__34388 = p__34385;
var map__34388__$1 = ((((!((map__34388 == null)))?((((map__34388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34388):map__34388);
var message = cljs.core.get.call(null,map__34388__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34388__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__22863__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__22863__auto__)){
return or__22863__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__22851__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__22851__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__22851__auto__;
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
var c__26994__auto___34550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto___34550,ch){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto___34550,ch){
return (function (state_34519){
var state_val_34520 = (state_34519[(1)]);
if((state_val_34520 === (7))){
var inst_34515 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34521_34551 = state_34519__$1;
(statearr_34521_34551[(2)] = inst_34515);

(statearr_34521_34551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (1))){
var state_34519__$1 = state_34519;
var statearr_34522_34552 = state_34519__$1;
(statearr_34522_34552[(2)] = null);

(statearr_34522_34552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (4))){
var inst_34472 = (state_34519[(7)]);
var inst_34472__$1 = (state_34519[(2)]);
var state_34519__$1 = (function (){var statearr_34523 = state_34519;
(statearr_34523[(7)] = inst_34472__$1);

return statearr_34523;
})();
if(cljs.core.truth_(inst_34472__$1)){
var statearr_34524_34553 = state_34519__$1;
(statearr_34524_34553[(1)] = (5));

} else {
var statearr_34525_34554 = state_34519__$1;
(statearr_34525_34554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (15))){
var inst_34479 = (state_34519[(8)]);
var inst_34494 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34479);
var inst_34495 = cljs.core.first.call(null,inst_34494);
var inst_34496 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34495);
var inst_34497 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_34496)].join('');
var inst_34498 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34497);
var state_34519__$1 = state_34519;
var statearr_34526_34555 = state_34519__$1;
(statearr_34526_34555[(2)] = inst_34498);

(statearr_34526_34555[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (13))){
var inst_34503 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34527_34556 = state_34519__$1;
(statearr_34527_34556[(2)] = inst_34503);

(statearr_34527_34556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (6))){
var state_34519__$1 = state_34519;
var statearr_34528_34557 = state_34519__$1;
(statearr_34528_34557[(2)] = null);

(statearr_34528_34557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (17))){
var inst_34501 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34529_34558 = state_34519__$1;
(statearr_34529_34558[(2)] = inst_34501);

(statearr_34529_34558[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (3))){
var inst_34517 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34519__$1,inst_34517);
} else {
if((state_val_34520 === (12))){
var inst_34478 = (state_34519[(9)]);
var inst_34492 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34478,opts);
var state_34519__$1 = state_34519;
if(cljs.core.truth_(inst_34492)){
var statearr_34530_34559 = state_34519__$1;
(statearr_34530_34559[(1)] = (15));

} else {
var statearr_34531_34560 = state_34519__$1;
(statearr_34531_34560[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (2))){
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34519__$1,(4),ch);
} else {
if((state_val_34520 === (11))){
var inst_34479 = (state_34519[(8)]);
var inst_34484 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34485 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34479);
var inst_34486 = cljs.core.async.timeout.call(null,(1000));
var inst_34487 = [inst_34485,inst_34486];
var inst_34488 = (new cljs.core.PersistentVector(null,2,(5),inst_34484,inst_34487,null));
var state_34519__$1 = state_34519;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34519__$1,(14),inst_34488);
} else {
if((state_val_34520 === (9))){
var inst_34479 = (state_34519[(8)]);
var inst_34505 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34506 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34479);
var inst_34507 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34506);
var inst_34508 = [cljs.core.str("Not loading: "),cljs.core.str(inst_34507)].join('');
var inst_34509 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34508);
var state_34519__$1 = (function (){var statearr_34532 = state_34519;
(statearr_34532[(10)] = inst_34505);

return statearr_34532;
})();
var statearr_34533_34561 = state_34519__$1;
(statearr_34533_34561[(2)] = inst_34509);

(statearr_34533_34561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (5))){
var inst_34472 = (state_34519[(7)]);
var inst_34474 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34475 = (new cljs.core.PersistentArrayMap(null,2,inst_34474,null));
var inst_34476 = (new cljs.core.PersistentHashSet(null,inst_34475,null));
var inst_34477 = figwheel.client.focus_msgs.call(null,inst_34476,inst_34472);
var inst_34478 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34477);
var inst_34479 = cljs.core.first.call(null,inst_34477);
var inst_34480 = figwheel.client.autoload_QMARK_.call(null);
var state_34519__$1 = (function (){var statearr_34534 = state_34519;
(statearr_34534[(9)] = inst_34478);

(statearr_34534[(8)] = inst_34479);

return statearr_34534;
})();
if(cljs.core.truth_(inst_34480)){
var statearr_34535_34562 = state_34519__$1;
(statearr_34535_34562[(1)] = (8));

} else {
var statearr_34536_34563 = state_34519__$1;
(statearr_34536_34563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (14))){
var inst_34490 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34537_34564 = state_34519__$1;
(statearr_34537_34564[(2)] = inst_34490);

(statearr_34537_34564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (16))){
var state_34519__$1 = state_34519;
var statearr_34538_34565 = state_34519__$1;
(statearr_34538_34565[(2)] = null);

(statearr_34538_34565[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (10))){
var inst_34511 = (state_34519[(2)]);
var state_34519__$1 = (function (){var statearr_34539 = state_34519;
(statearr_34539[(11)] = inst_34511);

return statearr_34539;
})();
var statearr_34540_34566 = state_34519__$1;
(statearr_34540_34566[(2)] = null);

(statearr_34540_34566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (8))){
var inst_34478 = (state_34519[(9)]);
var inst_34482 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34478,opts);
var state_34519__$1 = state_34519;
if(cljs.core.truth_(inst_34482)){
var statearr_34541_34567 = state_34519__$1;
(statearr_34541_34567[(1)] = (11));

} else {
var statearr_34542_34568 = state_34519__$1;
(statearr_34542_34568[(1)] = (12));

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
});})(c__26994__auto___34550,ch))
;
return ((function (switch__26882__auto__,c__26994__auto___34550,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26883__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26883__auto____0 = (function (){
var statearr_34546 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34546[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26883__auto__);

(statearr_34546[(1)] = (1));

return statearr_34546;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26883__auto____1 = (function (state_34519){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_34519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e34547){if((e34547 instanceof Object)){
var ex__26886__auto__ = e34547;
var statearr_34548_34569 = state_34519;
(statearr_34548_34569[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34570 = state_34519;
state_34519 = G__34570;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26883__auto__ = function(state_34519){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26883__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26883__auto____1.call(this,state_34519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26883__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26883__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto___34550,ch))
})();
var state__26996__auto__ = (function (){var statearr_34549 = f__26995__auto__.call(null);
(statearr_34549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto___34550);

return statearr_34549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto___34550,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34571_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34571_SHARP_));
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
var base_path_34578 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34578){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_34576 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_34577 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_34576,_STAR_print_newline_STAR_34577,base_path_34578){
return (function() { 
var G__34579__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34580__i = 0, G__34580__a = new Array(arguments.length -  0);
while (G__34580__i < G__34580__a.length) {G__34580__a[G__34580__i] = arguments[G__34580__i + 0]; ++G__34580__i;}
  args = new cljs.core.IndexedSeq(G__34580__a,0);
} 
return G__34579__delegate.call(this,args);};
G__34579.cljs$lang$maxFixedArity = 0;
G__34579.cljs$lang$applyTo = (function (arglist__34581){
var args = cljs.core.seq(arglist__34581);
return G__34579__delegate(args);
});
G__34579.cljs$core$IFn$_invoke$arity$variadic = G__34579__delegate;
return G__34579;
})()
;})(_STAR_print_fn_STAR_34576,_STAR_print_newline_STAR_34577,base_path_34578))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34577;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34576;
}}catch (e34575){if((e34575 instanceof Error)){
var e = e34575;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34578], null));
} else {
var e = e34575;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_34578))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34582){
var map__34589 = p__34582;
var map__34589__$1 = ((((!((map__34589 == null)))?((((map__34589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34589):map__34589);
var opts = map__34589__$1;
var build_id = cljs.core.get.call(null,map__34589__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34589,map__34589__$1,opts,build_id){
return (function (p__34591){
var vec__34592 = p__34591;
var map__34593 = cljs.core.nth.call(null,vec__34592,(0),null);
var map__34593__$1 = ((((!((map__34593 == null)))?((((map__34593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34593):map__34593);
var msg = map__34593__$1;
var msg_name = cljs.core.get.call(null,map__34593__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34592,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34592,map__34593,map__34593__$1,msg,msg_name,_,map__34589,map__34589__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34592,map__34593,map__34593__$1,msg,msg_name,_,map__34589,map__34589__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34589,map__34589__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34599){
var vec__34600 = p__34599;
var map__34601 = cljs.core.nth.call(null,vec__34600,(0),null);
var map__34601__$1 = ((((!((map__34601 == null)))?((((map__34601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34601):map__34601);
var msg = map__34601__$1;
var msg_name = cljs.core.get.call(null,map__34601__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34600,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34603){
var map__34613 = p__34603;
var map__34613__$1 = ((((!((map__34613 == null)))?((((map__34613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34613):map__34613);
var on_compile_warning = cljs.core.get.call(null,map__34613__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34613__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34613,map__34613__$1,on_compile_warning,on_compile_fail){
return (function (p__34615){
var vec__34616 = p__34615;
var map__34617 = cljs.core.nth.call(null,vec__34616,(0),null);
var map__34617__$1 = ((((!((map__34617 == null)))?((((map__34617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34617):map__34617);
var msg = map__34617__$1;
var msg_name = cljs.core.get.call(null,map__34617__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34616,(1));
var pred__34619 = cljs.core._EQ_;
var expr__34620 = msg_name;
if(cljs.core.truth_(pred__34619.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34620))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34619.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34620))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34613,map__34613__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto__,msg_hist,msg_names,msg){
return (function (state_34836){
var state_val_34837 = (state_34836[(1)]);
if((state_val_34837 === (7))){
var inst_34760 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
if(cljs.core.truth_(inst_34760)){
var statearr_34838_34884 = state_34836__$1;
(statearr_34838_34884[(1)] = (8));

} else {
var statearr_34839_34885 = state_34836__$1;
(statearr_34839_34885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (20))){
var inst_34830 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
var statearr_34840_34886 = state_34836__$1;
(statearr_34840_34886[(2)] = inst_34830);

(statearr_34840_34886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (27))){
var inst_34826 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
var statearr_34841_34887 = state_34836__$1;
(statearr_34841_34887[(2)] = inst_34826);

(statearr_34841_34887[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (1))){
var inst_34753 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34836__$1 = state_34836;
if(cljs.core.truth_(inst_34753)){
var statearr_34842_34888 = state_34836__$1;
(statearr_34842_34888[(1)] = (2));

} else {
var statearr_34843_34889 = state_34836__$1;
(statearr_34843_34889[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (24))){
var inst_34828 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
var statearr_34844_34890 = state_34836__$1;
(statearr_34844_34890[(2)] = inst_34828);

(statearr_34844_34890[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (4))){
var inst_34834 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34836__$1,inst_34834);
} else {
if((state_val_34837 === (15))){
var inst_34832 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
var statearr_34845_34891 = state_34836__$1;
(statearr_34845_34891[(2)] = inst_34832);

(statearr_34845_34891[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (21))){
var inst_34791 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
var statearr_34846_34892 = state_34836__$1;
(statearr_34846_34892[(2)] = inst_34791);

(statearr_34846_34892[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (31))){
var inst_34815 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34836__$1 = state_34836;
if(cljs.core.truth_(inst_34815)){
var statearr_34847_34893 = state_34836__$1;
(statearr_34847_34893[(1)] = (34));

} else {
var statearr_34848_34894 = state_34836__$1;
(statearr_34848_34894[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (32))){
var inst_34824 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
var statearr_34849_34895 = state_34836__$1;
(statearr_34849_34895[(2)] = inst_34824);

(statearr_34849_34895[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (33))){
var inst_34813 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
var statearr_34850_34896 = state_34836__$1;
(statearr_34850_34896[(2)] = inst_34813);

(statearr_34850_34896[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (13))){
var inst_34774 = figwheel.client.heads_up.clear.call(null);
var state_34836__$1 = state_34836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34836__$1,(16),inst_34774);
} else {
if((state_val_34837 === (22))){
var inst_34795 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34796 = figwheel.client.heads_up.append_message.call(null,inst_34795);
var state_34836__$1 = state_34836;
var statearr_34851_34897 = state_34836__$1;
(statearr_34851_34897[(2)] = inst_34796);

(statearr_34851_34897[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (36))){
var inst_34822 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
var statearr_34852_34898 = state_34836__$1;
(statearr_34852_34898[(2)] = inst_34822);

(statearr_34852_34898[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (29))){
var inst_34806 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
var statearr_34853_34899 = state_34836__$1;
(statearr_34853_34899[(2)] = inst_34806);

(statearr_34853_34899[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (6))){
var inst_34755 = (state_34836[(7)]);
var state_34836__$1 = state_34836;
var statearr_34854_34900 = state_34836__$1;
(statearr_34854_34900[(2)] = inst_34755);

(statearr_34854_34900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (28))){
var inst_34802 = (state_34836[(2)]);
var inst_34803 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34804 = figwheel.client.heads_up.display_warning.call(null,inst_34803);
var state_34836__$1 = (function (){var statearr_34855 = state_34836;
(statearr_34855[(8)] = inst_34802);

return statearr_34855;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34836__$1,(29),inst_34804);
} else {
if((state_val_34837 === (25))){
var inst_34800 = figwheel.client.heads_up.clear.call(null);
var state_34836__$1 = state_34836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34836__$1,(28),inst_34800);
} else {
if((state_val_34837 === (34))){
var inst_34817 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34836__$1 = state_34836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34836__$1,(37),inst_34817);
} else {
if((state_val_34837 === (17))){
var inst_34782 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
var statearr_34856_34901 = state_34836__$1;
(statearr_34856_34901[(2)] = inst_34782);

(statearr_34856_34901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (3))){
var inst_34772 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34836__$1 = state_34836;
if(cljs.core.truth_(inst_34772)){
var statearr_34857_34902 = state_34836__$1;
(statearr_34857_34902[(1)] = (13));

} else {
var statearr_34858_34903 = state_34836__$1;
(statearr_34858_34903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (12))){
var inst_34768 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
var statearr_34859_34904 = state_34836__$1;
(statearr_34859_34904[(2)] = inst_34768);

(statearr_34859_34904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (2))){
var inst_34755 = (state_34836[(7)]);
var inst_34755__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34836__$1 = (function (){var statearr_34860 = state_34836;
(statearr_34860[(7)] = inst_34755__$1);

return statearr_34860;
})();
if(cljs.core.truth_(inst_34755__$1)){
var statearr_34861_34905 = state_34836__$1;
(statearr_34861_34905[(1)] = (5));

} else {
var statearr_34862_34906 = state_34836__$1;
(statearr_34862_34906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (23))){
var inst_34798 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34836__$1 = state_34836;
if(cljs.core.truth_(inst_34798)){
var statearr_34863_34907 = state_34836__$1;
(statearr_34863_34907[(1)] = (25));

} else {
var statearr_34864_34908 = state_34836__$1;
(statearr_34864_34908[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (35))){
var state_34836__$1 = state_34836;
var statearr_34865_34909 = state_34836__$1;
(statearr_34865_34909[(2)] = null);

(statearr_34865_34909[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (19))){
var inst_34793 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34836__$1 = state_34836;
if(cljs.core.truth_(inst_34793)){
var statearr_34866_34910 = state_34836__$1;
(statearr_34866_34910[(1)] = (22));

} else {
var statearr_34867_34911 = state_34836__$1;
(statearr_34867_34911[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (11))){
var inst_34764 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
var statearr_34868_34912 = state_34836__$1;
(statearr_34868_34912[(2)] = inst_34764);

(statearr_34868_34912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (9))){
var inst_34766 = figwheel.client.heads_up.clear.call(null);
var state_34836__$1 = state_34836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34836__$1,(12),inst_34766);
} else {
if((state_val_34837 === (5))){
var inst_34757 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34836__$1 = state_34836;
var statearr_34869_34913 = state_34836__$1;
(statearr_34869_34913[(2)] = inst_34757);

(statearr_34869_34913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (14))){
var inst_34784 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34836__$1 = state_34836;
if(cljs.core.truth_(inst_34784)){
var statearr_34870_34914 = state_34836__$1;
(statearr_34870_34914[(1)] = (18));

} else {
var statearr_34871_34915 = state_34836__$1;
(statearr_34871_34915[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (26))){
var inst_34808 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34836__$1 = state_34836;
if(cljs.core.truth_(inst_34808)){
var statearr_34872_34916 = state_34836__$1;
(statearr_34872_34916[(1)] = (30));

} else {
var statearr_34873_34917 = state_34836__$1;
(statearr_34873_34917[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (16))){
var inst_34776 = (state_34836[(2)]);
var inst_34777 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34778 = figwheel.client.format_messages.call(null,inst_34777);
var inst_34779 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34780 = figwheel.client.heads_up.display_error.call(null,inst_34778,inst_34779);
var state_34836__$1 = (function (){var statearr_34874 = state_34836;
(statearr_34874[(9)] = inst_34776);

return statearr_34874;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34836__$1,(17),inst_34780);
} else {
if((state_val_34837 === (30))){
var inst_34810 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34811 = figwheel.client.heads_up.display_warning.call(null,inst_34810);
var state_34836__$1 = state_34836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34836__$1,(33),inst_34811);
} else {
if((state_val_34837 === (10))){
var inst_34770 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
var statearr_34875_34918 = state_34836__$1;
(statearr_34875_34918[(2)] = inst_34770);

(statearr_34875_34918[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (18))){
var inst_34786 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34787 = figwheel.client.format_messages.call(null,inst_34786);
var inst_34788 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34789 = figwheel.client.heads_up.display_error.call(null,inst_34787,inst_34788);
var state_34836__$1 = state_34836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34836__$1,(21),inst_34789);
} else {
if((state_val_34837 === (37))){
var inst_34819 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
var statearr_34876_34919 = state_34836__$1;
(statearr_34876_34919[(2)] = inst_34819);

(statearr_34876_34919[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (8))){
var inst_34762 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34836__$1 = state_34836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34836__$1,(11),inst_34762);
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
});})(c__26994__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26882__auto__,c__26994__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26883__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26883__auto____0 = (function (){
var statearr_34880 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34880[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26883__auto__);

(statearr_34880[(1)] = (1));

return statearr_34880;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26883__auto____1 = (function (state_34836){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_34836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e34881){if((e34881 instanceof Object)){
var ex__26886__auto__ = e34881;
var statearr_34882_34920 = state_34836;
(statearr_34882_34920[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34921 = state_34836;
state_34836 = G__34921;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26883__auto__ = function(state_34836){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26883__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26883__auto____1.call(this,state_34836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26883__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26883__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto__,msg_hist,msg_names,msg))
})();
var state__26996__auto__ = (function (){var statearr_34883 = f__26995__auto__.call(null);
(statearr_34883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto__);

return statearr_34883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto__,msg_hist,msg_names,msg))
);

return c__26994__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26994__auto___34984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto___34984,ch){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto___34984,ch){
return (function (state_34967){
var state_val_34968 = (state_34967[(1)]);
if((state_val_34968 === (1))){
var state_34967__$1 = state_34967;
var statearr_34969_34985 = state_34967__$1;
(statearr_34969_34985[(2)] = null);

(statearr_34969_34985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34968 === (2))){
var state_34967__$1 = state_34967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34967__$1,(4),ch);
} else {
if((state_val_34968 === (3))){
var inst_34965 = (state_34967[(2)]);
var state_34967__$1 = state_34967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34967__$1,inst_34965);
} else {
if((state_val_34968 === (4))){
var inst_34955 = (state_34967[(7)]);
var inst_34955__$1 = (state_34967[(2)]);
var state_34967__$1 = (function (){var statearr_34970 = state_34967;
(statearr_34970[(7)] = inst_34955__$1);

return statearr_34970;
})();
if(cljs.core.truth_(inst_34955__$1)){
var statearr_34971_34986 = state_34967__$1;
(statearr_34971_34986[(1)] = (5));

} else {
var statearr_34972_34987 = state_34967__$1;
(statearr_34972_34987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34968 === (5))){
var inst_34955 = (state_34967[(7)]);
var inst_34957 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34955);
var state_34967__$1 = state_34967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34967__$1,(8),inst_34957);
} else {
if((state_val_34968 === (6))){
var state_34967__$1 = state_34967;
var statearr_34973_34988 = state_34967__$1;
(statearr_34973_34988[(2)] = null);

(statearr_34973_34988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34968 === (7))){
var inst_34963 = (state_34967[(2)]);
var state_34967__$1 = state_34967;
var statearr_34974_34989 = state_34967__$1;
(statearr_34974_34989[(2)] = inst_34963);

(statearr_34974_34989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34968 === (8))){
var inst_34959 = (state_34967[(2)]);
var state_34967__$1 = (function (){var statearr_34975 = state_34967;
(statearr_34975[(8)] = inst_34959);

return statearr_34975;
})();
var statearr_34976_34990 = state_34967__$1;
(statearr_34976_34990[(2)] = null);

(statearr_34976_34990[(1)] = (2));


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
});})(c__26994__auto___34984,ch))
;
return ((function (switch__26882__auto__,c__26994__auto___34984,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26883__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26883__auto____0 = (function (){
var statearr_34980 = [null,null,null,null,null,null,null,null,null];
(statearr_34980[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26883__auto__);

(statearr_34980[(1)] = (1));

return statearr_34980;
});
var figwheel$client$heads_up_plugin_$_state_machine__26883__auto____1 = (function (state_34967){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_34967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e34981){if((e34981 instanceof Object)){
var ex__26886__auto__ = e34981;
var statearr_34982_34991 = state_34967;
(statearr_34982_34991[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34992 = state_34967;
state_34967 = G__34992;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26883__auto__ = function(state_34967){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26883__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26883__auto____1.call(this,state_34967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26883__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26883__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto___34984,ch))
})();
var state__26996__auto__ = (function (){var statearr_34983 = f__26995__auto__.call(null);
(statearr_34983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto___34984);

return statearr_34983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto___34984,ch))
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
var c__26994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto__){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto__){
return (function (state_35013){
var state_val_35014 = (state_35013[(1)]);
if((state_val_35014 === (1))){
var inst_35008 = cljs.core.async.timeout.call(null,(3000));
var state_35013__$1 = state_35013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35013__$1,(2),inst_35008);
} else {
if((state_val_35014 === (2))){
var inst_35010 = (state_35013[(2)]);
var inst_35011 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35013__$1 = (function (){var statearr_35015 = state_35013;
(statearr_35015[(7)] = inst_35010);

return statearr_35015;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35013__$1,inst_35011);
} else {
return null;
}
}
});})(c__26994__auto__))
;
return ((function (switch__26882__auto__,c__26994__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26883__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26883__auto____0 = (function (){
var statearr_35019 = [null,null,null,null,null,null,null,null];
(statearr_35019[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26883__auto__);

(statearr_35019[(1)] = (1));

return statearr_35019;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26883__auto____1 = (function (state_35013){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_35013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e35020){if((e35020 instanceof Object)){
var ex__26886__auto__ = e35020;
var statearr_35021_35023 = state_35013;
(statearr_35021_35023[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35024 = state_35013;
state_35013 = G__35024;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26883__auto__ = function(state_35013){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26883__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26883__auto____1.call(this,state_35013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26883__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26883__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto__))
})();
var state__26996__auto__ = (function (){var statearr_35022 = f__26995__auto__.call(null);
(statearr_35022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto__);

return statearr_35022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto__))
);

return c__26994__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35025){
var map__35032 = p__35025;
var map__35032__$1 = ((((!((map__35032 == null)))?((((map__35032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35032):map__35032);
var ed = map__35032__$1;
var formatted_exception = cljs.core.get.call(null,map__35032__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35032__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35032__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35034_35038 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35035_35039 = null;
var count__35036_35040 = (0);
var i__35037_35041 = (0);
while(true){
if((i__35037_35041 < count__35036_35040)){
var msg_35042 = cljs.core._nth.call(null,chunk__35035_35039,i__35037_35041);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35042);

var G__35043 = seq__35034_35038;
var G__35044 = chunk__35035_35039;
var G__35045 = count__35036_35040;
var G__35046 = (i__35037_35041 + (1));
seq__35034_35038 = G__35043;
chunk__35035_35039 = G__35044;
count__35036_35040 = G__35045;
i__35037_35041 = G__35046;
continue;
} else {
var temp__4425__auto___35047 = cljs.core.seq.call(null,seq__35034_35038);
if(temp__4425__auto___35047){
var seq__35034_35048__$1 = temp__4425__auto___35047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35034_35048__$1)){
var c__23674__auto___35049 = cljs.core.chunk_first.call(null,seq__35034_35048__$1);
var G__35050 = cljs.core.chunk_rest.call(null,seq__35034_35048__$1);
var G__35051 = c__23674__auto___35049;
var G__35052 = cljs.core.count.call(null,c__23674__auto___35049);
var G__35053 = (0);
seq__35034_35038 = G__35050;
chunk__35035_35039 = G__35051;
count__35036_35040 = G__35052;
i__35037_35041 = G__35053;
continue;
} else {
var msg_35054 = cljs.core.first.call(null,seq__35034_35048__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35054);

var G__35055 = cljs.core.next.call(null,seq__35034_35048__$1);
var G__35056 = null;
var G__35057 = (0);
var G__35058 = (0);
seq__35034_35038 = G__35055;
chunk__35035_35039 = G__35056;
count__35036_35040 = G__35057;
i__35037_35041 = G__35058;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35059){
var map__35062 = p__35059;
var map__35062__$1 = ((((!((map__35062 == null)))?((((map__35062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35062):map__35062);
var w = map__35062__$1;
var message = cljs.core.get.call(null,map__35062__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__22851__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__22851__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__22851__auto__;
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
var seq__35070 = cljs.core.seq.call(null,plugins);
var chunk__35071 = null;
var count__35072 = (0);
var i__35073 = (0);
while(true){
if((i__35073 < count__35072)){
var vec__35074 = cljs.core._nth.call(null,chunk__35071,i__35073);
var k = cljs.core.nth.call(null,vec__35074,(0),null);
var plugin = cljs.core.nth.call(null,vec__35074,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35076 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35070,chunk__35071,count__35072,i__35073,pl_35076,vec__35074,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35076.call(null,msg_hist);
});})(seq__35070,chunk__35071,count__35072,i__35073,pl_35076,vec__35074,k,plugin))
);
} else {
}

var G__35077 = seq__35070;
var G__35078 = chunk__35071;
var G__35079 = count__35072;
var G__35080 = (i__35073 + (1));
seq__35070 = G__35077;
chunk__35071 = G__35078;
count__35072 = G__35079;
i__35073 = G__35080;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__35070);
if(temp__4425__auto__){
var seq__35070__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35070__$1)){
var c__23674__auto__ = cljs.core.chunk_first.call(null,seq__35070__$1);
var G__35081 = cljs.core.chunk_rest.call(null,seq__35070__$1);
var G__35082 = c__23674__auto__;
var G__35083 = cljs.core.count.call(null,c__23674__auto__);
var G__35084 = (0);
seq__35070 = G__35081;
chunk__35071 = G__35082;
count__35072 = G__35083;
i__35073 = G__35084;
continue;
} else {
var vec__35075 = cljs.core.first.call(null,seq__35070__$1);
var k = cljs.core.nth.call(null,vec__35075,(0),null);
var plugin = cljs.core.nth.call(null,vec__35075,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35085 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35070,chunk__35071,count__35072,i__35073,pl_35085,vec__35075,k,plugin,seq__35070__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35085.call(null,msg_hist);
});})(seq__35070,chunk__35071,count__35072,i__35073,pl_35085,vec__35075,k,plugin,seq__35070__$1,temp__4425__auto__))
);
} else {
}

var G__35086 = cljs.core.next.call(null,seq__35070__$1);
var G__35087 = null;
var G__35088 = (0);
var G__35089 = (0);
seq__35070 = G__35086;
chunk__35071 = G__35087;
count__35072 = G__35088;
i__35073 = G__35089;
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
var args35090 = [];
var len__23933__auto___35093 = arguments.length;
var i__23934__auto___35094 = (0);
while(true){
if((i__23934__auto___35094 < len__23933__auto___35093)){
args35090.push((arguments[i__23934__auto___35094]));

var G__35095 = (i__23934__auto___35094 + (1));
i__23934__auto___35094 = G__35095;
continue;
} else {
}
break;
}

var G__35092 = args35090.length;
switch (G__35092) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35090.length)].join('')));

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
var args__23940__auto__ = [];
var len__23933__auto___35101 = arguments.length;
var i__23934__auto___35102 = (0);
while(true){
if((i__23934__auto___35102 < len__23933__auto___35101)){
args__23940__auto__.push((arguments[i__23934__auto___35102]));

var G__35103 = (i__23934__auto___35102 + (1));
i__23934__auto___35102 = G__35103;
continue;
} else {
}
break;
}

var argseq__23941__auto__ = ((((0) < args__23940__auto__.length))?(new cljs.core.IndexedSeq(args__23940__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__23941__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35098){
var map__35099 = p__35098;
var map__35099__$1 = ((((!((map__35099 == null)))?((((map__35099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35099):map__35099);
var opts = map__35099__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35097){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35097));
});

//# sourceMappingURL=client.js.map