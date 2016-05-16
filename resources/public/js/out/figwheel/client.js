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
var pred__32745 = cljs.core._EQ_;
var expr__32746 = (function (){var or__22563__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__22563__auto__)){
return or__22563__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__32745.call(null,"true",expr__32746))){
return true;
} else {
if(cljs.core.truth_(pred__32745.call(null,"false",expr__32746))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__32746)].join('')));
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
var G__32748__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__32748 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32749__i = 0, G__32749__a = new Array(arguments.length -  0);
while (G__32749__i < G__32749__a.length) {G__32749__a[G__32749__i] = arguments[G__32749__i + 0]; ++G__32749__i;}
  args = new cljs.core.IndexedSeq(G__32749__a,0);
} 
return G__32748__delegate.call(this,args);};
G__32748.cljs$lang$maxFixedArity = 0;
G__32748.cljs$lang$applyTo = (function (arglist__32750){
var args = cljs.core.seq(arglist__32750);
return G__32748__delegate(args);
});
G__32748.cljs$core$IFn$_invoke$arity$variadic = G__32748__delegate;
return G__32748;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32751){
var map__32754 = p__32751;
var map__32754__$1 = ((((!((map__32754 == null)))?((((map__32754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32754):map__32754);
var message = cljs.core.get.call(null,map__32754__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32754__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__22563__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__22563__auto__)){
return or__22563__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__22551__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__22551__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__22551__auto__;
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
var c__26694__auto___32916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto___32916,ch){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto___32916,ch){
return (function (state_32885){
var state_val_32886 = (state_32885[(1)]);
if((state_val_32886 === (7))){
var inst_32881 = (state_32885[(2)]);
var state_32885__$1 = state_32885;
var statearr_32887_32917 = state_32885__$1;
(statearr_32887_32917[(2)] = inst_32881);

(statearr_32887_32917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (1))){
var state_32885__$1 = state_32885;
var statearr_32888_32918 = state_32885__$1;
(statearr_32888_32918[(2)] = null);

(statearr_32888_32918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (4))){
var inst_32838 = (state_32885[(7)]);
var inst_32838__$1 = (state_32885[(2)]);
var state_32885__$1 = (function (){var statearr_32889 = state_32885;
(statearr_32889[(7)] = inst_32838__$1);

return statearr_32889;
})();
if(cljs.core.truth_(inst_32838__$1)){
var statearr_32890_32919 = state_32885__$1;
(statearr_32890_32919[(1)] = (5));

} else {
var statearr_32891_32920 = state_32885__$1;
(statearr_32891_32920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (15))){
var inst_32845 = (state_32885[(8)]);
var inst_32860 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32845);
var inst_32861 = cljs.core.first.call(null,inst_32860);
var inst_32862 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32861);
var inst_32863 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_32862)].join('');
var inst_32864 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32863);
var state_32885__$1 = state_32885;
var statearr_32892_32921 = state_32885__$1;
(statearr_32892_32921[(2)] = inst_32864);

(statearr_32892_32921[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (13))){
var inst_32869 = (state_32885[(2)]);
var state_32885__$1 = state_32885;
var statearr_32893_32922 = state_32885__$1;
(statearr_32893_32922[(2)] = inst_32869);

(statearr_32893_32922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (6))){
var state_32885__$1 = state_32885;
var statearr_32894_32923 = state_32885__$1;
(statearr_32894_32923[(2)] = null);

(statearr_32894_32923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (17))){
var inst_32867 = (state_32885[(2)]);
var state_32885__$1 = state_32885;
var statearr_32895_32924 = state_32885__$1;
(statearr_32895_32924[(2)] = inst_32867);

(statearr_32895_32924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (3))){
var inst_32883 = (state_32885[(2)]);
var state_32885__$1 = state_32885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32885__$1,inst_32883);
} else {
if((state_val_32886 === (12))){
var inst_32844 = (state_32885[(9)]);
var inst_32858 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32844,opts);
var state_32885__$1 = state_32885;
if(cljs.core.truth_(inst_32858)){
var statearr_32896_32925 = state_32885__$1;
(statearr_32896_32925[(1)] = (15));

} else {
var statearr_32897_32926 = state_32885__$1;
(statearr_32897_32926[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (2))){
var state_32885__$1 = state_32885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32885__$1,(4),ch);
} else {
if((state_val_32886 === (11))){
var inst_32845 = (state_32885[(8)]);
var inst_32850 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32851 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32845);
var inst_32852 = cljs.core.async.timeout.call(null,(1000));
var inst_32853 = [inst_32851,inst_32852];
var inst_32854 = (new cljs.core.PersistentVector(null,2,(5),inst_32850,inst_32853,null));
var state_32885__$1 = state_32885;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32885__$1,(14),inst_32854);
} else {
if((state_val_32886 === (9))){
var inst_32845 = (state_32885[(8)]);
var inst_32871 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32872 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32845);
var inst_32873 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32872);
var inst_32874 = [cljs.core.str("Not loading: "),cljs.core.str(inst_32873)].join('');
var inst_32875 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32874);
var state_32885__$1 = (function (){var statearr_32898 = state_32885;
(statearr_32898[(10)] = inst_32871);

return statearr_32898;
})();
var statearr_32899_32927 = state_32885__$1;
(statearr_32899_32927[(2)] = inst_32875);

(statearr_32899_32927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (5))){
var inst_32838 = (state_32885[(7)]);
var inst_32840 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32841 = (new cljs.core.PersistentArrayMap(null,2,inst_32840,null));
var inst_32842 = (new cljs.core.PersistentHashSet(null,inst_32841,null));
var inst_32843 = figwheel.client.focus_msgs.call(null,inst_32842,inst_32838);
var inst_32844 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32843);
var inst_32845 = cljs.core.first.call(null,inst_32843);
var inst_32846 = figwheel.client.autoload_QMARK_.call(null);
var state_32885__$1 = (function (){var statearr_32900 = state_32885;
(statearr_32900[(9)] = inst_32844);

(statearr_32900[(8)] = inst_32845);

return statearr_32900;
})();
if(cljs.core.truth_(inst_32846)){
var statearr_32901_32928 = state_32885__$1;
(statearr_32901_32928[(1)] = (8));

} else {
var statearr_32902_32929 = state_32885__$1;
(statearr_32902_32929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (14))){
var inst_32856 = (state_32885[(2)]);
var state_32885__$1 = state_32885;
var statearr_32903_32930 = state_32885__$1;
(statearr_32903_32930[(2)] = inst_32856);

(statearr_32903_32930[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (16))){
var state_32885__$1 = state_32885;
var statearr_32904_32931 = state_32885__$1;
(statearr_32904_32931[(2)] = null);

(statearr_32904_32931[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (10))){
var inst_32877 = (state_32885[(2)]);
var state_32885__$1 = (function (){var statearr_32905 = state_32885;
(statearr_32905[(11)] = inst_32877);

return statearr_32905;
})();
var statearr_32906_32932 = state_32885__$1;
(statearr_32906_32932[(2)] = null);

(statearr_32906_32932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (8))){
var inst_32844 = (state_32885[(9)]);
var inst_32848 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32844,opts);
var state_32885__$1 = state_32885;
if(cljs.core.truth_(inst_32848)){
var statearr_32907_32933 = state_32885__$1;
(statearr_32907_32933[(1)] = (11));

} else {
var statearr_32908_32934 = state_32885__$1;
(statearr_32908_32934[(1)] = (12));

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
});})(c__26694__auto___32916,ch))
;
return ((function (switch__26582__auto__,c__26694__auto___32916,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26583__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26583__auto____0 = (function (){
var statearr_32912 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32912[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26583__auto__);

(statearr_32912[(1)] = (1));

return statearr_32912;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26583__auto____1 = (function (state_32885){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_32885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e32913){if((e32913 instanceof Object)){
var ex__26586__auto__ = e32913;
var statearr_32914_32935 = state_32885;
(statearr_32914_32935[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32936 = state_32885;
state_32885 = G__32936;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26583__auto__ = function(state_32885){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26583__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26583__auto____1.call(this,state_32885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26583__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26583__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto___32916,ch))
})();
var state__26696__auto__ = (function (){var statearr_32915 = f__26695__auto__.call(null);
(statearr_32915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto___32916);

return statearr_32915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto___32916,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32937_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32937_SHARP_));
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
var base_path_32944 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32944){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_32942 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_32943 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_32942,_STAR_print_newline_STAR_32943,base_path_32944){
return (function() { 
var G__32945__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__32945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32946__i = 0, G__32946__a = new Array(arguments.length -  0);
while (G__32946__i < G__32946__a.length) {G__32946__a[G__32946__i] = arguments[G__32946__i + 0]; ++G__32946__i;}
  args = new cljs.core.IndexedSeq(G__32946__a,0);
} 
return G__32945__delegate.call(this,args);};
G__32945.cljs$lang$maxFixedArity = 0;
G__32945.cljs$lang$applyTo = (function (arglist__32947){
var args = cljs.core.seq(arglist__32947);
return G__32945__delegate(args);
});
G__32945.cljs$core$IFn$_invoke$arity$variadic = G__32945__delegate;
return G__32945;
})()
;})(_STAR_print_fn_STAR_32942,_STAR_print_newline_STAR_32943,base_path_32944))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32943;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32942;
}}catch (e32941){if((e32941 instanceof Error)){
var e = e32941;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32944], null));
} else {
var e = e32941;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_32944))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32948){
var map__32955 = p__32948;
var map__32955__$1 = ((((!((map__32955 == null)))?((((map__32955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32955):map__32955);
var opts = map__32955__$1;
var build_id = cljs.core.get.call(null,map__32955__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32955,map__32955__$1,opts,build_id){
return (function (p__32957){
var vec__32958 = p__32957;
var map__32959 = cljs.core.nth.call(null,vec__32958,(0),null);
var map__32959__$1 = ((((!((map__32959 == null)))?((((map__32959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32959):map__32959);
var msg = map__32959__$1;
var msg_name = cljs.core.get.call(null,map__32959__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32958,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__32958,map__32959,map__32959__$1,msg,msg_name,_,map__32955,map__32955__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32958,map__32959,map__32959__$1,msg,msg_name,_,map__32955,map__32955__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32955,map__32955__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32965){
var vec__32966 = p__32965;
var map__32967 = cljs.core.nth.call(null,vec__32966,(0),null);
var map__32967__$1 = ((((!((map__32967 == null)))?((((map__32967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32967):map__32967);
var msg = map__32967__$1;
var msg_name = cljs.core.get.call(null,map__32967__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32966,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32969){
var map__32979 = p__32969;
var map__32979__$1 = ((((!((map__32979 == null)))?((((map__32979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32979):map__32979);
var on_compile_warning = cljs.core.get.call(null,map__32979__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32979__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32979,map__32979__$1,on_compile_warning,on_compile_fail){
return (function (p__32981){
var vec__32982 = p__32981;
var map__32983 = cljs.core.nth.call(null,vec__32982,(0),null);
var map__32983__$1 = ((((!((map__32983 == null)))?((((map__32983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32983):map__32983);
var msg = map__32983__$1;
var msg_name = cljs.core.get.call(null,map__32983__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32982,(1));
var pred__32985 = cljs.core._EQ_;
var expr__32986 = msg_name;
if(cljs.core.truth_(pred__32985.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32986))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32985.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32986))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32979,map__32979__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto__,msg_hist,msg_names,msg){
return (function (state_33202){
var state_val_33203 = (state_33202[(1)]);
if((state_val_33203 === (7))){
var inst_33126 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_33126)){
var statearr_33204_33250 = state_33202__$1;
(statearr_33204_33250[(1)] = (8));

} else {
var statearr_33205_33251 = state_33202__$1;
(statearr_33205_33251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (20))){
var inst_33196 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33206_33252 = state_33202__$1;
(statearr_33206_33252[(2)] = inst_33196);

(statearr_33206_33252[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (27))){
var inst_33192 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33207_33253 = state_33202__$1;
(statearr_33207_33253[(2)] = inst_33192);

(statearr_33207_33253[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (1))){
var inst_33119 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_33119)){
var statearr_33208_33254 = state_33202__$1;
(statearr_33208_33254[(1)] = (2));

} else {
var statearr_33209_33255 = state_33202__$1;
(statearr_33209_33255[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (24))){
var inst_33194 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33210_33256 = state_33202__$1;
(statearr_33210_33256[(2)] = inst_33194);

(statearr_33210_33256[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (4))){
var inst_33200 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33202__$1,inst_33200);
} else {
if((state_val_33203 === (15))){
var inst_33198 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33211_33257 = state_33202__$1;
(statearr_33211_33257[(2)] = inst_33198);

(statearr_33211_33257[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (21))){
var inst_33157 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33212_33258 = state_33202__$1;
(statearr_33212_33258[(2)] = inst_33157);

(statearr_33212_33258[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (31))){
var inst_33181 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_33181)){
var statearr_33213_33259 = state_33202__$1;
(statearr_33213_33259[(1)] = (34));

} else {
var statearr_33214_33260 = state_33202__$1;
(statearr_33214_33260[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (32))){
var inst_33190 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33215_33261 = state_33202__$1;
(statearr_33215_33261[(2)] = inst_33190);

(statearr_33215_33261[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (33))){
var inst_33179 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33216_33262 = state_33202__$1;
(statearr_33216_33262[(2)] = inst_33179);

(statearr_33216_33262[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (13))){
var inst_33140 = figwheel.client.heads_up.clear.call(null);
var state_33202__$1 = state_33202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33202__$1,(16),inst_33140);
} else {
if((state_val_33203 === (22))){
var inst_33161 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33162 = figwheel.client.heads_up.append_message.call(null,inst_33161);
var state_33202__$1 = state_33202;
var statearr_33217_33263 = state_33202__$1;
(statearr_33217_33263[(2)] = inst_33162);

(statearr_33217_33263[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (36))){
var inst_33188 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33218_33264 = state_33202__$1;
(statearr_33218_33264[(2)] = inst_33188);

(statearr_33218_33264[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (29))){
var inst_33172 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33219_33265 = state_33202__$1;
(statearr_33219_33265[(2)] = inst_33172);

(statearr_33219_33265[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (6))){
var inst_33121 = (state_33202[(7)]);
var state_33202__$1 = state_33202;
var statearr_33220_33266 = state_33202__$1;
(statearr_33220_33266[(2)] = inst_33121);

(statearr_33220_33266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (28))){
var inst_33168 = (state_33202[(2)]);
var inst_33169 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33170 = figwheel.client.heads_up.display_warning.call(null,inst_33169);
var state_33202__$1 = (function (){var statearr_33221 = state_33202;
(statearr_33221[(8)] = inst_33168);

return statearr_33221;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33202__$1,(29),inst_33170);
} else {
if((state_val_33203 === (25))){
var inst_33166 = figwheel.client.heads_up.clear.call(null);
var state_33202__$1 = state_33202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33202__$1,(28),inst_33166);
} else {
if((state_val_33203 === (34))){
var inst_33183 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33202__$1 = state_33202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33202__$1,(37),inst_33183);
} else {
if((state_val_33203 === (17))){
var inst_33148 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33222_33267 = state_33202__$1;
(statearr_33222_33267[(2)] = inst_33148);

(statearr_33222_33267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (3))){
var inst_33138 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_33138)){
var statearr_33223_33268 = state_33202__$1;
(statearr_33223_33268[(1)] = (13));

} else {
var statearr_33224_33269 = state_33202__$1;
(statearr_33224_33269[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (12))){
var inst_33134 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33225_33270 = state_33202__$1;
(statearr_33225_33270[(2)] = inst_33134);

(statearr_33225_33270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (2))){
var inst_33121 = (state_33202[(7)]);
var inst_33121__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33202__$1 = (function (){var statearr_33226 = state_33202;
(statearr_33226[(7)] = inst_33121__$1);

return statearr_33226;
})();
if(cljs.core.truth_(inst_33121__$1)){
var statearr_33227_33271 = state_33202__$1;
(statearr_33227_33271[(1)] = (5));

} else {
var statearr_33228_33272 = state_33202__$1;
(statearr_33228_33272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (23))){
var inst_33164 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_33164)){
var statearr_33229_33273 = state_33202__$1;
(statearr_33229_33273[(1)] = (25));

} else {
var statearr_33230_33274 = state_33202__$1;
(statearr_33230_33274[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (35))){
var state_33202__$1 = state_33202;
var statearr_33231_33275 = state_33202__$1;
(statearr_33231_33275[(2)] = null);

(statearr_33231_33275[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (19))){
var inst_33159 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_33159)){
var statearr_33232_33276 = state_33202__$1;
(statearr_33232_33276[(1)] = (22));

} else {
var statearr_33233_33277 = state_33202__$1;
(statearr_33233_33277[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (11))){
var inst_33130 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33234_33278 = state_33202__$1;
(statearr_33234_33278[(2)] = inst_33130);

(statearr_33234_33278[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (9))){
var inst_33132 = figwheel.client.heads_up.clear.call(null);
var state_33202__$1 = state_33202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33202__$1,(12),inst_33132);
} else {
if((state_val_33203 === (5))){
var inst_33123 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33202__$1 = state_33202;
var statearr_33235_33279 = state_33202__$1;
(statearr_33235_33279[(2)] = inst_33123);

(statearr_33235_33279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (14))){
var inst_33150 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_33150)){
var statearr_33236_33280 = state_33202__$1;
(statearr_33236_33280[(1)] = (18));

} else {
var statearr_33237_33281 = state_33202__$1;
(statearr_33237_33281[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (26))){
var inst_33174 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33202__$1 = state_33202;
if(cljs.core.truth_(inst_33174)){
var statearr_33238_33282 = state_33202__$1;
(statearr_33238_33282[(1)] = (30));

} else {
var statearr_33239_33283 = state_33202__$1;
(statearr_33239_33283[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (16))){
var inst_33142 = (state_33202[(2)]);
var inst_33143 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33144 = figwheel.client.format_messages.call(null,inst_33143);
var inst_33145 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33146 = figwheel.client.heads_up.display_error.call(null,inst_33144,inst_33145);
var state_33202__$1 = (function (){var statearr_33240 = state_33202;
(statearr_33240[(9)] = inst_33142);

return statearr_33240;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33202__$1,(17),inst_33146);
} else {
if((state_val_33203 === (30))){
var inst_33176 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33177 = figwheel.client.heads_up.display_warning.call(null,inst_33176);
var state_33202__$1 = state_33202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33202__$1,(33),inst_33177);
} else {
if((state_val_33203 === (10))){
var inst_33136 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33241_33284 = state_33202__$1;
(statearr_33241_33284[(2)] = inst_33136);

(statearr_33241_33284[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (18))){
var inst_33152 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33153 = figwheel.client.format_messages.call(null,inst_33152);
var inst_33154 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33155 = figwheel.client.heads_up.display_error.call(null,inst_33153,inst_33154);
var state_33202__$1 = state_33202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33202__$1,(21),inst_33155);
} else {
if((state_val_33203 === (37))){
var inst_33185 = (state_33202[(2)]);
var state_33202__$1 = state_33202;
var statearr_33242_33285 = state_33202__$1;
(statearr_33242_33285[(2)] = inst_33185);

(statearr_33242_33285[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33203 === (8))){
var inst_33128 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33202__$1 = state_33202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33202__$1,(11),inst_33128);
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
});})(c__26694__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26582__auto__,c__26694__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26583__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26583__auto____0 = (function (){
var statearr_33246 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33246[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26583__auto__);

(statearr_33246[(1)] = (1));

return statearr_33246;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26583__auto____1 = (function (state_33202){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_33202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e33247){if((e33247 instanceof Object)){
var ex__26586__auto__ = e33247;
var statearr_33248_33286 = state_33202;
(statearr_33248_33286[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33287 = state_33202;
state_33202 = G__33287;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26583__auto__ = function(state_33202){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26583__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26583__auto____1.call(this,state_33202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26583__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26583__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto__,msg_hist,msg_names,msg))
})();
var state__26696__auto__ = (function (){var statearr_33249 = f__26695__auto__.call(null);
(statearr_33249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto__);

return statearr_33249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto__,msg_hist,msg_names,msg))
);

return c__26694__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26694__auto___33350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto___33350,ch){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto___33350,ch){
return (function (state_33333){
var state_val_33334 = (state_33333[(1)]);
if((state_val_33334 === (1))){
var state_33333__$1 = state_33333;
var statearr_33335_33351 = state_33333__$1;
(statearr_33335_33351[(2)] = null);

(statearr_33335_33351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (2))){
var state_33333__$1 = state_33333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33333__$1,(4),ch);
} else {
if((state_val_33334 === (3))){
var inst_33331 = (state_33333[(2)]);
var state_33333__$1 = state_33333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33333__$1,inst_33331);
} else {
if((state_val_33334 === (4))){
var inst_33321 = (state_33333[(7)]);
var inst_33321__$1 = (state_33333[(2)]);
var state_33333__$1 = (function (){var statearr_33336 = state_33333;
(statearr_33336[(7)] = inst_33321__$1);

return statearr_33336;
})();
if(cljs.core.truth_(inst_33321__$1)){
var statearr_33337_33352 = state_33333__$1;
(statearr_33337_33352[(1)] = (5));

} else {
var statearr_33338_33353 = state_33333__$1;
(statearr_33338_33353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (5))){
var inst_33321 = (state_33333[(7)]);
var inst_33323 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33321);
var state_33333__$1 = state_33333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33333__$1,(8),inst_33323);
} else {
if((state_val_33334 === (6))){
var state_33333__$1 = state_33333;
var statearr_33339_33354 = state_33333__$1;
(statearr_33339_33354[(2)] = null);

(statearr_33339_33354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (7))){
var inst_33329 = (state_33333[(2)]);
var state_33333__$1 = state_33333;
var statearr_33340_33355 = state_33333__$1;
(statearr_33340_33355[(2)] = inst_33329);

(statearr_33340_33355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33334 === (8))){
var inst_33325 = (state_33333[(2)]);
var state_33333__$1 = (function (){var statearr_33341 = state_33333;
(statearr_33341[(8)] = inst_33325);

return statearr_33341;
})();
var statearr_33342_33356 = state_33333__$1;
(statearr_33342_33356[(2)] = null);

(statearr_33342_33356[(1)] = (2));


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
});})(c__26694__auto___33350,ch))
;
return ((function (switch__26582__auto__,c__26694__auto___33350,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26583__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26583__auto____0 = (function (){
var statearr_33346 = [null,null,null,null,null,null,null,null,null];
(statearr_33346[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26583__auto__);

(statearr_33346[(1)] = (1));

return statearr_33346;
});
var figwheel$client$heads_up_plugin_$_state_machine__26583__auto____1 = (function (state_33333){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_33333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e33347){if((e33347 instanceof Object)){
var ex__26586__auto__ = e33347;
var statearr_33348_33357 = state_33333;
(statearr_33348_33357[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33358 = state_33333;
state_33333 = G__33358;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26583__auto__ = function(state_33333){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26583__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26583__auto____1.call(this,state_33333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26583__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26583__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto___33350,ch))
})();
var state__26696__auto__ = (function (){var statearr_33349 = f__26695__auto__.call(null);
(statearr_33349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto___33350);

return statearr_33349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto___33350,ch))
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
var c__26694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto__){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto__){
return (function (state_33379){
var state_val_33380 = (state_33379[(1)]);
if((state_val_33380 === (1))){
var inst_33374 = cljs.core.async.timeout.call(null,(3000));
var state_33379__$1 = state_33379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33379__$1,(2),inst_33374);
} else {
if((state_val_33380 === (2))){
var inst_33376 = (state_33379[(2)]);
var inst_33377 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33379__$1 = (function (){var statearr_33381 = state_33379;
(statearr_33381[(7)] = inst_33376);

return statearr_33381;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33379__$1,inst_33377);
} else {
return null;
}
}
});})(c__26694__auto__))
;
return ((function (switch__26582__auto__,c__26694__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26583__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26583__auto____0 = (function (){
var statearr_33385 = [null,null,null,null,null,null,null,null];
(statearr_33385[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26583__auto__);

(statearr_33385[(1)] = (1));

return statearr_33385;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26583__auto____1 = (function (state_33379){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_33379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e33386){if((e33386 instanceof Object)){
var ex__26586__auto__ = e33386;
var statearr_33387_33389 = state_33379;
(statearr_33387_33389[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33390 = state_33379;
state_33379 = G__33390;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26583__auto__ = function(state_33379){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26583__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26583__auto____1.call(this,state_33379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26583__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26583__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto__))
})();
var state__26696__auto__ = (function (){var statearr_33388 = f__26695__auto__.call(null);
(statearr_33388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto__);

return statearr_33388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto__))
);

return c__26694__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33391){
var map__33398 = p__33391;
var map__33398__$1 = ((((!((map__33398 == null)))?((((map__33398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33398):map__33398);
var ed = map__33398__$1;
var formatted_exception = cljs.core.get.call(null,map__33398__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__33398__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33398__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__33400_33404 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__33401_33405 = null;
var count__33402_33406 = (0);
var i__33403_33407 = (0);
while(true){
if((i__33403_33407 < count__33402_33406)){
var msg_33408 = cljs.core._nth.call(null,chunk__33401_33405,i__33403_33407);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33408);

var G__33409 = seq__33400_33404;
var G__33410 = chunk__33401_33405;
var G__33411 = count__33402_33406;
var G__33412 = (i__33403_33407 + (1));
seq__33400_33404 = G__33409;
chunk__33401_33405 = G__33410;
count__33402_33406 = G__33411;
i__33403_33407 = G__33412;
continue;
} else {
var temp__4425__auto___33413 = cljs.core.seq.call(null,seq__33400_33404);
if(temp__4425__auto___33413){
var seq__33400_33414__$1 = temp__4425__auto___33413;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33400_33414__$1)){
var c__23374__auto___33415 = cljs.core.chunk_first.call(null,seq__33400_33414__$1);
var G__33416 = cljs.core.chunk_rest.call(null,seq__33400_33414__$1);
var G__33417 = c__23374__auto___33415;
var G__33418 = cljs.core.count.call(null,c__23374__auto___33415);
var G__33419 = (0);
seq__33400_33404 = G__33416;
chunk__33401_33405 = G__33417;
count__33402_33406 = G__33418;
i__33403_33407 = G__33419;
continue;
} else {
var msg_33420 = cljs.core.first.call(null,seq__33400_33414__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33420);

var G__33421 = cljs.core.next.call(null,seq__33400_33414__$1);
var G__33422 = null;
var G__33423 = (0);
var G__33424 = (0);
seq__33400_33404 = G__33421;
chunk__33401_33405 = G__33422;
count__33402_33406 = G__33423;
i__33403_33407 = G__33424;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33425){
var map__33428 = p__33425;
var map__33428__$1 = ((((!((map__33428 == null)))?((((map__33428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33428):map__33428);
var w = map__33428__$1;
var message = cljs.core.get.call(null,map__33428__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__22551__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__22551__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__22551__auto__;
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
var seq__33436 = cljs.core.seq.call(null,plugins);
var chunk__33437 = null;
var count__33438 = (0);
var i__33439 = (0);
while(true){
if((i__33439 < count__33438)){
var vec__33440 = cljs.core._nth.call(null,chunk__33437,i__33439);
var k = cljs.core.nth.call(null,vec__33440,(0),null);
var plugin = cljs.core.nth.call(null,vec__33440,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33442 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33436,chunk__33437,count__33438,i__33439,pl_33442,vec__33440,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33442.call(null,msg_hist);
});})(seq__33436,chunk__33437,count__33438,i__33439,pl_33442,vec__33440,k,plugin))
);
} else {
}

var G__33443 = seq__33436;
var G__33444 = chunk__33437;
var G__33445 = count__33438;
var G__33446 = (i__33439 + (1));
seq__33436 = G__33443;
chunk__33437 = G__33444;
count__33438 = G__33445;
i__33439 = G__33446;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33436);
if(temp__4425__auto__){
var seq__33436__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33436__$1)){
var c__23374__auto__ = cljs.core.chunk_first.call(null,seq__33436__$1);
var G__33447 = cljs.core.chunk_rest.call(null,seq__33436__$1);
var G__33448 = c__23374__auto__;
var G__33449 = cljs.core.count.call(null,c__23374__auto__);
var G__33450 = (0);
seq__33436 = G__33447;
chunk__33437 = G__33448;
count__33438 = G__33449;
i__33439 = G__33450;
continue;
} else {
var vec__33441 = cljs.core.first.call(null,seq__33436__$1);
var k = cljs.core.nth.call(null,vec__33441,(0),null);
var plugin = cljs.core.nth.call(null,vec__33441,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33451 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33436,chunk__33437,count__33438,i__33439,pl_33451,vec__33441,k,plugin,seq__33436__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33451.call(null,msg_hist);
});})(seq__33436,chunk__33437,count__33438,i__33439,pl_33451,vec__33441,k,plugin,seq__33436__$1,temp__4425__auto__))
);
} else {
}

var G__33452 = cljs.core.next.call(null,seq__33436__$1);
var G__33453 = null;
var G__33454 = (0);
var G__33455 = (0);
seq__33436 = G__33452;
chunk__33437 = G__33453;
count__33438 = G__33454;
i__33439 = G__33455;
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
var args33456 = [];
var len__23633__auto___33459 = arguments.length;
var i__23634__auto___33460 = (0);
while(true){
if((i__23634__auto___33460 < len__23633__auto___33459)){
args33456.push((arguments[i__23634__auto___33460]));

var G__33461 = (i__23634__auto___33460 + (1));
i__23634__auto___33460 = G__33461;
continue;
} else {
}
break;
}

var G__33458 = args33456.length;
switch (G__33458) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33456.length)].join('')));

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
var args__23640__auto__ = [];
var len__23633__auto___33467 = arguments.length;
var i__23634__auto___33468 = (0);
while(true){
if((i__23634__auto___33468 < len__23633__auto___33467)){
args__23640__auto__.push((arguments[i__23634__auto___33468]));

var G__33469 = (i__23634__auto___33468 + (1));
i__23634__auto___33468 = G__33469;
continue;
} else {
}
break;
}

var argseq__23641__auto__ = ((((0) < args__23640__auto__.length))?(new cljs.core.IndexedSeq(args__23640__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__23641__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33464){
var map__33465 = p__33464;
var map__33465__$1 = ((((!((map__33465 == null)))?((((map__33465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33465):map__33465);
var opts = map__33465__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33463){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33463));
});

//# sourceMappingURL=client.js.map