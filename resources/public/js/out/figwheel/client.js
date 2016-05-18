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
var pred__39600 = cljs.core._EQ_;
var expr__39601 = (function (){var or__25643__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__39600.call(null,"true",expr__39601))){
return true;
} else {
if(cljs.core.truth_(pred__39600.call(null,"false",expr__39601))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__39601)].join('')));
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
var G__39603__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__39603 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39604__i = 0, G__39604__a = new Array(arguments.length -  0);
while (G__39604__i < G__39604__a.length) {G__39604__a[G__39604__i] = arguments[G__39604__i + 0]; ++G__39604__i;}
  args = new cljs.core.IndexedSeq(G__39604__a,0);
} 
return G__39603__delegate.call(this,args);};
G__39603.cljs$lang$maxFixedArity = 0;
G__39603.cljs$lang$applyTo = (function (arglist__39605){
var args = cljs.core.seq(arglist__39605);
return G__39603__delegate(args);
});
G__39603.cljs$core$IFn$_invoke$arity$variadic = G__39603__delegate;
return G__39603;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39606){
var map__39609 = p__39606;
var map__39609__$1 = ((((!((map__39609 == null)))?((((map__39609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39609):map__39609);
var message = cljs.core.get.call(null,map__39609__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39609__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25643__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25631__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25631__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25631__auto__;
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
var c__29774__auto___39771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto___39771,ch){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto___39771,ch){
return (function (state_39740){
var state_val_39741 = (state_39740[(1)]);
if((state_val_39741 === (7))){
var inst_39736 = (state_39740[(2)]);
var state_39740__$1 = state_39740;
var statearr_39742_39772 = state_39740__$1;
(statearr_39742_39772[(2)] = inst_39736);

(statearr_39742_39772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39741 === (1))){
var state_39740__$1 = state_39740;
var statearr_39743_39773 = state_39740__$1;
(statearr_39743_39773[(2)] = null);

(statearr_39743_39773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39741 === (4))){
var inst_39693 = (state_39740[(7)]);
var inst_39693__$1 = (state_39740[(2)]);
var state_39740__$1 = (function (){var statearr_39744 = state_39740;
(statearr_39744[(7)] = inst_39693__$1);

return statearr_39744;
})();
if(cljs.core.truth_(inst_39693__$1)){
var statearr_39745_39774 = state_39740__$1;
(statearr_39745_39774[(1)] = (5));

} else {
var statearr_39746_39775 = state_39740__$1;
(statearr_39746_39775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39741 === (15))){
var inst_39700 = (state_39740[(8)]);
var inst_39715 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39700);
var inst_39716 = cljs.core.first.call(null,inst_39715);
var inst_39717 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39716);
var inst_39718 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_39717)].join('');
var inst_39719 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39718);
var state_39740__$1 = state_39740;
var statearr_39747_39776 = state_39740__$1;
(statearr_39747_39776[(2)] = inst_39719);

(statearr_39747_39776[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39741 === (13))){
var inst_39724 = (state_39740[(2)]);
var state_39740__$1 = state_39740;
var statearr_39748_39777 = state_39740__$1;
(statearr_39748_39777[(2)] = inst_39724);

(statearr_39748_39777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39741 === (6))){
var state_39740__$1 = state_39740;
var statearr_39749_39778 = state_39740__$1;
(statearr_39749_39778[(2)] = null);

(statearr_39749_39778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39741 === (17))){
var inst_39722 = (state_39740[(2)]);
var state_39740__$1 = state_39740;
var statearr_39750_39779 = state_39740__$1;
(statearr_39750_39779[(2)] = inst_39722);

(statearr_39750_39779[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39741 === (3))){
var inst_39738 = (state_39740[(2)]);
var state_39740__$1 = state_39740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39740__$1,inst_39738);
} else {
if((state_val_39741 === (12))){
var inst_39699 = (state_39740[(9)]);
var inst_39713 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39699,opts);
var state_39740__$1 = state_39740;
if(cljs.core.truth_(inst_39713)){
var statearr_39751_39780 = state_39740__$1;
(statearr_39751_39780[(1)] = (15));

} else {
var statearr_39752_39781 = state_39740__$1;
(statearr_39752_39781[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39741 === (2))){
var state_39740__$1 = state_39740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39740__$1,(4),ch);
} else {
if((state_val_39741 === (11))){
var inst_39700 = (state_39740[(8)]);
var inst_39705 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39706 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39700);
var inst_39707 = cljs.core.async.timeout.call(null,(1000));
var inst_39708 = [inst_39706,inst_39707];
var inst_39709 = (new cljs.core.PersistentVector(null,2,(5),inst_39705,inst_39708,null));
var state_39740__$1 = state_39740;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39740__$1,(14),inst_39709);
} else {
if((state_val_39741 === (9))){
var inst_39700 = (state_39740[(8)]);
var inst_39726 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39727 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39700);
var inst_39728 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39727);
var inst_39729 = [cljs.core.str("Not loading: "),cljs.core.str(inst_39728)].join('');
var inst_39730 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39729);
var state_39740__$1 = (function (){var statearr_39753 = state_39740;
(statearr_39753[(10)] = inst_39726);

return statearr_39753;
})();
var statearr_39754_39782 = state_39740__$1;
(statearr_39754_39782[(2)] = inst_39730);

(statearr_39754_39782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39741 === (5))){
var inst_39693 = (state_39740[(7)]);
var inst_39695 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39696 = (new cljs.core.PersistentArrayMap(null,2,inst_39695,null));
var inst_39697 = (new cljs.core.PersistentHashSet(null,inst_39696,null));
var inst_39698 = figwheel.client.focus_msgs.call(null,inst_39697,inst_39693);
var inst_39699 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39698);
var inst_39700 = cljs.core.first.call(null,inst_39698);
var inst_39701 = figwheel.client.autoload_QMARK_.call(null);
var state_39740__$1 = (function (){var statearr_39755 = state_39740;
(statearr_39755[(8)] = inst_39700);

(statearr_39755[(9)] = inst_39699);

return statearr_39755;
})();
if(cljs.core.truth_(inst_39701)){
var statearr_39756_39783 = state_39740__$1;
(statearr_39756_39783[(1)] = (8));

} else {
var statearr_39757_39784 = state_39740__$1;
(statearr_39757_39784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39741 === (14))){
var inst_39711 = (state_39740[(2)]);
var state_39740__$1 = state_39740;
var statearr_39758_39785 = state_39740__$1;
(statearr_39758_39785[(2)] = inst_39711);

(statearr_39758_39785[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39741 === (16))){
var state_39740__$1 = state_39740;
var statearr_39759_39786 = state_39740__$1;
(statearr_39759_39786[(2)] = null);

(statearr_39759_39786[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39741 === (10))){
var inst_39732 = (state_39740[(2)]);
var state_39740__$1 = (function (){var statearr_39760 = state_39740;
(statearr_39760[(11)] = inst_39732);

return statearr_39760;
})();
var statearr_39761_39787 = state_39740__$1;
(statearr_39761_39787[(2)] = null);

(statearr_39761_39787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39741 === (8))){
var inst_39699 = (state_39740[(9)]);
var inst_39703 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39699,opts);
var state_39740__$1 = state_39740;
if(cljs.core.truth_(inst_39703)){
var statearr_39762_39788 = state_39740__$1;
(statearr_39762_39788[(1)] = (11));

} else {
var statearr_39763_39789 = state_39740__$1;
(statearr_39763_39789[(1)] = (12));

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
});})(c__29774__auto___39771,ch))
;
return ((function (switch__29662__auto__,c__29774__auto___39771,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29663__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29663__auto____0 = (function (){
var statearr_39767 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39767[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29663__auto__);

(statearr_39767[(1)] = (1));

return statearr_39767;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29663__auto____1 = (function (state_39740){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_39740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e39768){if((e39768 instanceof Object)){
var ex__29666__auto__ = e39768;
var statearr_39769_39790 = state_39740;
(statearr_39769_39790[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39791 = state_39740;
state_39740 = G__39791;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29663__auto__ = function(state_39740){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29663__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29663__auto____1.call(this,state_39740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29663__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29663__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto___39771,ch))
})();
var state__29776__auto__ = (function (){var statearr_39770 = f__29775__auto__.call(null);
(statearr_39770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___39771);

return statearr_39770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto___39771,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39792_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39792_SHARP_));
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
var base_path_39799 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39799){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_39797 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_39798 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_39797,_STAR_print_newline_STAR_39798,base_path_39799){
return (function() { 
var G__39800__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__39800 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39801__i = 0, G__39801__a = new Array(arguments.length -  0);
while (G__39801__i < G__39801__a.length) {G__39801__a[G__39801__i] = arguments[G__39801__i + 0]; ++G__39801__i;}
  args = new cljs.core.IndexedSeq(G__39801__a,0);
} 
return G__39800__delegate.call(this,args);};
G__39800.cljs$lang$maxFixedArity = 0;
G__39800.cljs$lang$applyTo = (function (arglist__39802){
var args = cljs.core.seq(arglist__39802);
return G__39800__delegate(args);
});
G__39800.cljs$core$IFn$_invoke$arity$variadic = G__39800__delegate;
return G__39800;
})()
;})(_STAR_print_fn_STAR_39797,_STAR_print_newline_STAR_39798,base_path_39799))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39798;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39797;
}}catch (e39796){if((e39796 instanceof Error)){
var e = e39796;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39799], null));
} else {
var e = e39796;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_39799))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39803){
var map__39810 = p__39803;
var map__39810__$1 = ((((!((map__39810 == null)))?((((map__39810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39810):map__39810);
var opts = map__39810__$1;
var build_id = cljs.core.get.call(null,map__39810__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39810,map__39810__$1,opts,build_id){
return (function (p__39812){
var vec__39813 = p__39812;
var map__39814 = cljs.core.nth.call(null,vec__39813,(0),null);
var map__39814__$1 = ((((!((map__39814 == null)))?((((map__39814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39814):map__39814);
var msg = map__39814__$1;
var msg_name = cljs.core.get.call(null,map__39814__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__39813,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39813,map__39814,map__39814__$1,msg,msg_name,_,map__39810,map__39810__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39813,map__39814,map__39814__$1,msg,msg_name,_,map__39810,map__39810__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39810,map__39810__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39820){
var vec__39821 = p__39820;
var map__39822 = cljs.core.nth.call(null,vec__39821,(0),null);
var map__39822__$1 = ((((!((map__39822 == null)))?((((map__39822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39822):map__39822);
var msg = map__39822__$1;
var msg_name = cljs.core.get.call(null,map__39822__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__39821,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39824){
var map__39834 = p__39824;
var map__39834__$1 = ((((!((map__39834 == null)))?((((map__39834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39834):map__39834);
var on_compile_warning = cljs.core.get.call(null,map__39834__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39834__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39834,map__39834__$1,on_compile_warning,on_compile_fail){
return (function (p__39836){
var vec__39837 = p__39836;
var map__39838 = cljs.core.nth.call(null,vec__39837,(0),null);
var map__39838__$1 = ((((!((map__39838 == null)))?((((map__39838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39838):map__39838);
var msg = map__39838__$1;
var msg_name = cljs.core.get.call(null,map__39838__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__39837,(1));
var pred__39840 = cljs.core._EQ_;
var expr__39841 = msg_name;
if(cljs.core.truth_(pred__39840.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39841))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39840.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39841))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39834,map__39834__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto__,msg_hist,msg_names,msg){
return (function (state_40057){
var state_val_40058 = (state_40057[(1)]);
if((state_val_40058 === (7))){
var inst_39981 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
if(cljs.core.truth_(inst_39981)){
var statearr_40059_40105 = state_40057__$1;
(statearr_40059_40105[(1)] = (8));

} else {
var statearr_40060_40106 = state_40057__$1;
(statearr_40060_40106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (20))){
var inst_40051 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
var statearr_40061_40107 = state_40057__$1;
(statearr_40061_40107[(2)] = inst_40051);

(statearr_40061_40107[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (27))){
var inst_40047 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
var statearr_40062_40108 = state_40057__$1;
(statearr_40062_40108[(2)] = inst_40047);

(statearr_40062_40108[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (1))){
var inst_39974 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40057__$1 = state_40057;
if(cljs.core.truth_(inst_39974)){
var statearr_40063_40109 = state_40057__$1;
(statearr_40063_40109[(1)] = (2));

} else {
var statearr_40064_40110 = state_40057__$1;
(statearr_40064_40110[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (24))){
var inst_40049 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
var statearr_40065_40111 = state_40057__$1;
(statearr_40065_40111[(2)] = inst_40049);

(statearr_40065_40111[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (4))){
var inst_40055 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40057__$1,inst_40055);
} else {
if((state_val_40058 === (15))){
var inst_40053 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
var statearr_40066_40112 = state_40057__$1;
(statearr_40066_40112[(2)] = inst_40053);

(statearr_40066_40112[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (21))){
var inst_40012 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
var statearr_40067_40113 = state_40057__$1;
(statearr_40067_40113[(2)] = inst_40012);

(statearr_40067_40113[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (31))){
var inst_40036 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40057__$1 = state_40057;
if(cljs.core.truth_(inst_40036)){
var statearr_40068_40114 = state_40057__$1;
(statearr_40068_40114[(1)] = (34));

} else {
var statearr_40069_40115 = state_40057__$1;
(statearr_40069_40115[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (32))){
var inst_40045 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
var statearr_40070_40116 = state_40057__$1;
(statearr_40070_40116[(2)] = inst_40045);

(statearr_40070_40116[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (33))){
var inst_40034 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
var statearr_40071_40117 = state_40057__$1;
(statearr_40071_40117[(2)] = inst_40034);

(statearr_40071_40117[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (13))){
var inst_39995 = figwheel.client.heads_up.clear.call(null);
var state_40057__$1 = state_40057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40057__$1,(16),inst_39995);
} else {
if((state_val_40058 === (22))){
var inst_40016 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40017 = figwheel.client.heads_up.append_message.call(null,inst_40016);
var state_40057__$1 = state_40057;
var statearr_40072_40118 = state_40057__$1;
(statearr_40072_40118[(2)] = inst_40017);

(statearr_40072_40118[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (36))){
var inst_40043 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
var statearr_40073_40119 = state_40057__$1;
(statearr_40073_40119[(2)] = inst_40043);

(statearr_40073_40119[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (29))){
var inst_40027 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
var statearr_40074_40120 = state_40057__$1;
(statearr_40074_40120[(2)] = inst_40027);

(statearr_40074_40120[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (6))){
var inst_39976 = (state_40057[(7)]);
var state_40057__$1 = state_40057;
var statearr_40075_40121 = state_40057__$1;
(statearr_40075_40121[(2)] = inst_39976);

(statearr_40075_40121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (28))){
var inst_40023 = (state_40057[(2)]);
var inst_40024 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40025 = figwheel.client.heads_up.display_warning.call(null,inst_40024);
var state_40057__$1 = (function (){var statearr_40076 = state_40057;
(statearr_40076[(8)] = inst_40023);

return statearr_40076;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40057__$1,(29),inst_40025);
} else {
if((state_val_40058 === (25))){
var inst_40021 = figwheel.client.heads_up.clear.call(null);
var state_40057__$1 = state_40057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40057__$1,(28),inst_40021);
} else {
if((state_val_40058 === (34))){
var inst_40038 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40057__$1 = state_40057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40057__$1,(37),inst_40038);
} else {
if((state_val_40058 === (17))){
var inst_40003 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
var statearr_40077_40122 = state_40057__$1;
(statearr_40077_40122[(2)] = inst_40003);

(statearr_40077_40122[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (3))){
var inst_39993 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40057__$1 = state_40057;
if(cljs.core.truth_(inst_39993)){
var statearr_40078_40123 = state_40057__$1;
(statearr_40078_40123[(1)] = (13));

} else {
var statearr_40079_40124 = state_40057__$1;
(statearr_40079_40124[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (12))){
var inst_39989 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
var statearr_40080_40125 = state_40057__$1;
(statearr_40080_40125[(2)] = inst_39989);

(statearr_40080_40125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (2))){
var inst_39976 = (state_40057[(7)]);
var inst_39976__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40057__$1 = (function (){var statearr_40081 = state_40057;
(statearr_40081[(7)] = inst_39976__$1);

return statearr_40081;
})();
if(cljs.core.truth_(inst_39976__$1)){
var statearr_40082_40126 = state_40057__$1;
(statearr_40082_40126[(1)] = (5));

} else {
var statearr_40083_40127 = state_40057__$1;
(statearr_40083_40127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (23))){
var inst_40019 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40057__$1 = state_40057;
if(cljs.core.truth_(inst_40019)){
var statearr_40084_40128 = state_40057__$1;
(statearr_40084_40128[(1)] = (25));

} else {
var statearr_40085_40129 = state_40057__$1;
(statearr_40085_40129[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (35))){
var state_40057__$1 = state_40057;
var statearr_40086_40130 = state_40057__$1;
(statearr_40086_40130[(2)] = null);

(statearr_40086_40130[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (19))){
var inst_40014 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40057__$1 = state_40057;
if(cljs.core.truth_(inst_40014)){
var statearr_40087_40131 = state_40057__$1;
(statearr_40087_40131[(1)] = (22));

} else {
var statearr_40088_40132 = state_40057__$1;
(statearr_40088_40132[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (11))){
var inst_39985 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
var statearr_40089_40133 = state_40057__$1;
(statearr_40089_40133[(2)] = inst_39985);

(statearr_40089_40133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (9))){
var inst_39987 = figwheel.client.heads_up.clear.call(null);
var state_40057__$1 = state_40057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40057__$1,(12),inst_39987);
} else {
if((state_val_40058 === (5))){
var inst_39978 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40057__$1 = state_40057;
var statearr_40090_40134 = state_40057__$1;
(statearr_40090_40134[(2)] = inst_39978);

(statearr_40090_40134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (14))){
var inst_40005 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40057__$1 = state_40057;
if(cljs.core.truth_(inst_40005)){
var statearr_40091_40135 = state_40057__$1;
(statearr_40091_40135[(1)] = (18));

} else {
var statearr_40092_40136 = state_40057__$1;
(statearr_40092_40136[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (26))){
var inst_40029 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40057__$1 = state_40057;
if(cljs.core.truth_(inst_40029)){
var statearr_40093_40137 = state_40057__$1;
(statearr_40093_40137[(1)] = (30));

} else {
var statearr_40094_40138 = state_40057__$1;
(statearr_40094_40138[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (16))){
var inst_39997 = (state_40057[(2)]);
var inst_39998 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39999 = figwheel.client.format_messages.call(null,inst_39998);
var inst_40000 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40001 = figwheel.client.heads_up.display_error.call(null,inst_39999,inst_40000);
var state_40057__$1 = (function (){var statearr_40095 = state_40057;
(statearr_40095[(9)] = inst_39997);

return statearr_40095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40057__$1,(17),inst_40001);
} else {
if((state_val_40058 === (30))){
var inst_40031 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40032 = figwheel.client.heads_up.display_warning.call(null,inst_40031);
var state_40057__$1 = state_40057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40057__$1,(33),inst_40032);
} else {
if((state_val_40058 === (10))){
var inst_39991 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
var statearr_40096_40139 = state_40057__$1;
(statearr_40096_40139[(2)] = inst_39991);

(statearr_40096_40139[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (18))){
var inst_40007 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40008 = figwheel.client.format_messages.call(null,inst_40007);
var inst_40009 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40010 = figwheel.client.heads_up.display_error.call(null,inst_40008,inst_40009);
var state_40057__$1 = state_40057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40057__$1,(21),inst_40010);
} else {
if((state_val_40058 === (37))){
var inst_40040 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
var statearr_40097_40140 = state_40057__$1;
(statearr_40097_40140[(2)] = inst_40040);

(statearr_40097_40140[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (8))){
var inst_39983 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40057__$1 = state_40057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40057__$1,(11),inst_39983);
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
});})(c__29774__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29662__auto__,c__29774__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29663__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29663__auto____0 = (function (){
var statearr_40101 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40101[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29663__auto__);

(statearr_40101[(1)] = (1));

return statearr_40101;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29663__auto____1 = (function (state_40057){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_40057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e40102){if((e40102 instanceof Object)){
var ex__29666__auto__ = e40102;
var statearr_40103_40141 = state_40057;
(statearr_40103_40141[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40142 = state_40057;
state_40057 = G__40142;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29663__auto__ = function(state_40057){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29663__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29663__auto____1.call(this,state_40057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29663__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29663__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto__,msg_hist,msg_names,msg))
})();
var state__29776__auto__ = (function (){var statearr_40104 = f__29775__auto__.call(null);
(statearr_40104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto__);

return statearr_40104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto__,msg_hist,msg_names,msg))
);

return c__29774__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29774__auto___40205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto___40205,ch){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto___40205,ch){
return (function (state_40188){
var state_val_40189 = (state_40188[(1)]);
if((state_val_40189 === (1))){
var state_40188__$1 = state_40188;
var statearr_40190_40206 = state_40188__$1;
(statearr_40190_40206[(2)] = null);

(statearr_40190_40206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40189 === (2))){
var state_40188__$1 = state_40188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40188__$1,(4),ch);
} else {
if((state_val_40189 === (3))){
var inst_40186 = (state_40188[(2)]);
var state_40188__$1 = state_40188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40188__$1,inst_40186);
} else {
if((state_val_40189 === (4))){
var inst_40176 = (state_40188[(7)]);
var inst_40176__$1 = (state_40188[(2)]);
var state_40188__$1 = (function (){var statearr_40191 = state_40188;
(statearr_40191[(7)] = inst_40176__$1);

return statearr_40191;
})();
if(cljs.core.truth_(inst_40176__$1)){
var statearr_40192_40207 = state_40188__$1;
(statearr_40192_40207[(1)] = (5));

} else {
var statearr_40193_40208 = state_40188__$1;
(statearr_40193_40208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40189 === (5))){
var inst_40176 = (state_40188[(7)]);
var inst_40178 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_40176);
var state_40188__$1 = state_40188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40188__$1,(8),inst_40178);
} else {
if((state_val_40189 === (6))){
var state_40188__$1 = state_40188;
var statearr_40194_40209 = state_40188__$1;
(statearr_40194_40209[(2)] = null);

(statearr_40194_40209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40189 === (7))){
var inst_40184 = (state_40188[(2)]);
var state_40188__$1 = state_40188;
var statearr_40195_40210 = state_40188__$1;
(statearr_40195_40210[(2)] = inst_40184);

(statearr_40195_40210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40189 === (8))){
var inst_40180 = (state_40188[(2)]);
var state_40188__$1 = (function (){var statearr_40196 = state_40188;
(statearr_40196[(8)] = inst_40180);

return statearr_40196;
})();
var statearr_40197_40211 = state_40188__$1;
(statearr_40197_40211[(2)] = null);

(statearr_40197_40211[(1)] = (2));


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
});})(c__29774__auto___40205,ch))
;
return ((function (switch__29662__auto__,c__29774__auto___40205,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29663__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29663__auto____0 = (function (){
var statearr_40201 = [null,null,null,null,null,null,null,null,null];
(statearr_40201[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29663__auto__);

(statearr_40201[(1)] = (1));

return statearr_40201;
});
var figwheel$client$heads_up_plugin_$_state_machine__29663__auto____1 = (function (state_40188){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_40188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e40202){if((e40202 instanceof Object)){
var ex__29666__auto__ = e40202;
var statearr_40203_40212 = state_40188;
(statearr_40203_40212[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40213 = state_40188;
state_40188 = G__40213;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29663__auto__ = function(state_40188){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29663__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29663__auto____1.call(this,state_40188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29663__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29663__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto___40205,ch))
})();
var state__29776__auto__ = (function (){var statearr_40204 = f__29775__auto__.call(null);
(statearr_40204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto___40205);

return statearr_40204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto___40205,ch))
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
var c__29774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29774__auto__){
return (function (){
var f__29775__auto__ = (function (){var switch__29662__auto__ = ((function (c__29774__auto__){
return (function (state_40234){
var state_val_40235 = (state_40234[(1)]);
if((state_val_40235 === (1))){
var inst_40229 = cljs.core.async.timeout.call(null,(3000));
var state_40234__$1 = state_40234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40234__$1,(2),inst_40229);
} else {
if((state_val_40235 === (2))){
var inst_40231 = (state_40234[(2)]);
var inst_40232 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40234__$1 = (function (){var statearr_40236 = state_40234;
(statearr_40236[(7)] = inst_40231);

return statearr_40236;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40234__$1,inst_40232);
} else {
return null;
}
}
});})(c__29774__auto__))
;
return ((function (switch__29662__auto__,c__29774__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29663__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29663__auto____0 = (function (){
var statearr_40240 = [null,null,null,null,null,null,null,null];
(statearr_40240[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29663__auto__);

(statearr_40240[(1)] = (1));

return statearr_40240;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29663__auto____1 = (function (state_40234){
while(true){
var ret_value__29664__auto__ = (function (){try{while(true){
var result__29665__auto__ = switch__29662__auto__.call(null,state_40234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29665__auto__;
}
break;
}
}catch (e40241){if((e40241 instanceof Object)){
var ex__29666__auto__ = e40241;
var statearr_40242_40244 = state_40234;
(statearr_40242_40244[(5)] = ex__29666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40245 = state_40234;
state_40234 = G__40245;
continue;
} else {
return ret_value__29664__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29663__auto__ = function(state_40234){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29663__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29663__auto____1.call(this,state_40234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29663__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29663__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29663__auto__;
})()
;})(switch__29662__auto__,c__29774__auto__))
})();
var state__29776__auto__ = (function (){var statearr_40243 = f__29775__auto__.call(null);
(statearr_40243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29774__auto__);

return statearr_40243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29776__auto__);
});})(c__29774__auto__))
);

return c__29774__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40246){
var map__40253 = p__40246;
var map__40253__$1 = ((((!((map__40253 == null)))?((((map__40253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40253):map__40253);
var ed = map__40253__$1;
var formatted_exception = cljs.core.get.call(null,map__40253__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40253__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40253__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40255_40259 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40256_40260 = null;
var count__40257_40261 = (0);
var i__40258_40262 = (0);
while(true){
if((i__40258_40262 < count__40257_40261)){
var msg_40263 = cljs.core._nth.call(null,chunk__40256_40260,i__40258_40262);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40263);

var G__40264 = seq__40255_40259;
var G__40265 = chunk__40256_40260;
var G__40266 = count__40257_40261;
var G__40267 = (i__40258_40262 + (1));
seq__40255_40259 = G__40264;
chunk__40256_40260 = G__40265;
count__40257_40261 = G__40266;
i__40258_40262 = G__40267;
continue;
} else {
var temp__4425__auto___40268 = cljs.core.seq.call(null,seq__40255_40259);
if(temp__4425__auto___40268){
var seq__40255_40269__$1 = temp__4425__auto___40268;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40255_40269__$1)){
var c__26454__auto___40270 = cljs.core.chunk_first.call(null,seq__40255_40269__$1);
var G__40271 = cljs.core.chunk_rest.call(null,seq__40255_40269__$1);
var G__40272 = c__26454__auto___40270;
var G__40273 = cljs.core.count.call(null,c__26454__auto___40270);
var G__40274 = (0);
seq__40255_40259 = G__40271;
chunk__40256_40260 = G__40272;
count__40257_40261 = G__40273;
i__40258_40262 = G__40274;
continue;
} else {
var msg_40275 = cljs.core.first.call(null,seq__40255_40269__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40275);

var G__40276 = cljs.core.next.call(null,seq__40255_40269__$1);
var G__40277 = null;
var G__40278 = (0);
var G__40279 = (0);
seq__40255_40259 = G__40276;
chunk__40256_40260 = G__40277;
count__40257_40261 = G__40278;
i__40258_40262 = G__40279;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40280){
var map__40283 = p__40280;
var map__40283__$1 = ((((!((map__40283 == null)))?((((map__40283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40283):map__40283);
var w = map__40283__$1;
var message = cljs.core.get.call(null,map__40283__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__25631__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25631__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25631__auto__;
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
var seq__40291 = cljs.core.seq.call(null,plugins);
var chunk__40292 = null;
var count__40293 = (0);
var i__40294 = (0);
while(true){
if((i__40294 < count__40293)){
var vec__40295 = cljs.core._nth.call(null,chunk__40292,i__40294);
var k = cljs.core.nth.call(null,vec__40295,(0),null);
var plugin = cljs.core.nth.call(null,vec__40295,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40297 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40291,chunk__40292,count__40293,i__40294,pl_40297,vec__40295,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40297.call(null,msg_hist);
});})(seq__40291,chunk__40292,count__40293,i__40294,pl_40297,vec__40295,k,plugin))
);
} else {
}

var G__40298 = seq__40291;
var G__40299 = chunk__40292;
var G__40300 = count__40293;
var G__40301 = (i__40294 + (1));
seq__40291 = G__40298;
chunk__40292 = G__40299;
count__40293 = G__40300;
i__40294 = G__40301;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__40291);
if(temp__4425__auto__){
var seq__40291__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40291__$1)){
var c__26454__auto__ = cljs.core.chunk_first.call(null,seq__40291__$1);
var G__40302 = cljs.core.chunk_rest.call(null,seq__40291__$1);
var G__40303 = c__26454__auto__;
var G__40304 = cljs.core.count.call(null,c__26454__auto__);
var G__40305 = (0);
seq__40291 = G__40302;
chunk__40292 = G__40303;
count__40293 = G__40304;
i__40294 = G__40305;
continue;
} else {
var vec__40296 = cljs.core.first.call(null,seq__40291__$1);
var k = cljs.core.nth.call(null,vec__40296,(0),null);
var plugin = cljs.core.nth.call(null,vec__40296,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40306 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40291,chunk__40292,count__40293,i__40294,pl_40306,vec__40296,k,plugin,seq__40291__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40306.call(null,msg_hist);
});})(seq__40291,chunk__40292,count__40293,i__40294,pl_40306,vec__40296,k,plugin,seq__40291__$1,temp__4425__auto__))
);
} else {
}

var G__40307 = cljs.core.next.call(null,seq__40291__$1);
var G__40308 = null;
var G__40309 = (0);
var G__40310 = (0);
seq__40291 = G__40307;
chunk__40292 = G__40308;
count__40293 = G__40309;
i__40294 = G__40310;
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
var args40311 = [];
var len__26713__auto___40314 = arguments.length;
var i__26714__auto___40315 = (0);
while(true){
if((i__26714__auto___40315 < len__26713__auto___40314)){
args40311.push((arguments[i__26714__auto___40315]));

var G__40316 = (i__26714__auto___40315 + (1));
i__26714__auto___40315 = G__40316;
continue;
} else {
}
break;
}

var G__40313 = args40311.length;
switch (G__40313) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40311.length)].join('')));

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
var args__26720__auto__ = [];
var len__26713__auto___40322 = arguments.length;
var i__26714__auto___40323 = (0);
while(true){
if((i__26714__auto___40323 < len__26713__auto___40322)){
args__26720__auto__.push((arguments[i__26714__auto___40323]));

var G__40324 = (i__26714__auto___40323 + (1));
i__26714__auto___40323 = G__40324;
continue;
} else {
}
break;
}

var argseq__26721__auto__ = ((((0) < args__26720__auto__.length))?(new cljs.core.IndexedSeq(args__26720__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26721__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40319){
var map__40320 = p__40319;
var map__40320__$1 = ((((!((map__40320 == null)))?((((map__40320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40320):map__40320);
var opts = map__40320__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40318){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40318));
});

//# sourceMappingURL=client.js.map