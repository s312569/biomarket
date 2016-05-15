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
var pred__32748 = cljs.core._EQ_;
var expr__32749 = (function (){var or__22576__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__22576__auto__)){
return or__22576__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__32748.call(null,"true",expr__32749))){
return true;
} else {
if(cljs.core.truth_(pred__32748.call(null,"false",expr__32749))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__32749)].join('')));
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
var G__32751__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__32751 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32752__i = 0, G__32752__a = new Array(arguments.length -  0);
while (G__32752__i < G__32752__a.length) {G__32752__a[G__32752__i] = arguments[G__32752__i + 0]; ++G__32752__i;}
  args = new cljs.core.IndexedSeq(G__32752__a,0);
} 
return G__32751__delegate.call(this,args);};
G__32751.cljs$lang$maxFixedArity = 0;
G__32751.cljs$lang$applyTo = (function (arglist__32753){
var args = cljs.core.seq(arglist__32753);
return G__32751__delegate(args);
});
G__32751.cljs$core$IFn$_invoke$arity$variadic = G__32751__delegate;
return G__32751;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32754){
var map__32757 = p__32754;
var map__32757__$1 = ((((!((map__32757 == null)))?((((map__32757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32757):map__32757);
var message = cljs.core.get.call(null,map__32757__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32757__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__22576__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__22576__auto__)){
return or__22576__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__22564__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__22564__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__22564__auto__;
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
var c__26707__auto___32919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto___32919,ch){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto___32919,ch){
return (function (state_32888){
var state_val_32889 = (state_32888[(1)]);
if((state_val_32889 === (7))){
var inst_32884 = (state_32888[(2)]);
var state_32888__$1 = state_32888;
var statearr_32890_32920 = state_32888__$1;
(statearr_32890_32920[(2)] = inst_32884);

(statearr_32890_32920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (1))){
var state_32888__$1 = state_32888;
var statearr_32891_32921 = state_32888__$1;
(statearr_32891_32921[(2)] = null);

(statearr_32891_32921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (4))){
var inst_32841 = (state_32888[(7)]);
var inst_32841__$1 = (state_32888[(2)]);
var state_32888__$1 = (function (){var statearr_32892 = state_32888;
(statearr_32892[(7)] = inst_32841__$1);

return statearr_32892;
})();
if(cljs.core.truth_(inst_32841__$1)){
var statearr_32893_32922 = state_32888__$1;
(statearr_32893_32922[(1)] = (5));

} else {
var statearr_32894_32923 = state_32888__$1;
(statearr_32894_32923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (15))){
var inst_32848 = (state_32888[(8)]);
var inst_32863 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32848);
var inst_32864 = cljs.core.first.call(null,inst_32863);
var inst_32865 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32864);
var inst_32866 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_32865)].join('');
var inst_32867 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32866);
var state_32888__$1 = state_32888;
var statearr_32895_32924 = state_32888__$1;
(statearr_32895_32924[(2)] = inst_32867);

(statearr_32895_32924[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (13))){
var inst_32872 = (state_32888[(2)]);
var state_32888__$1 = state_32888;
var statearr_32896_32925 = state_32888__$1;
(statearr_32896_32925[(2)] = inst_32872);

(statearr_32896_32925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (6))){
var state_32888__$1 = state_32888;
var statearr_32897_32926 = state_32888__$1;
(statearr_32897_32926[(2)] = null);

(statearr_32897_32926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (17))){
var inst_32870 = (state_32888[(2)]);
var state_32888__$1 = state_32888;
var statearr_32898_32927 = state_32888__$1;
(statearr_32898_32927[(2)] = inst_32870);

(statearr_32898_32927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (3))){
var inst_32886 = (state_32888[(2)]);
var state_32888__$1 = state_32888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32888__$1,inst_32886);
} else {
if((state_val_32889 === (12))){
var inst_32847 = (state_32888[(9)]);
var inst_32861 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32847,opts);
var state_32888__$1 = state_32888;
if(cljs.core.truth_(inst_32861)){
var statearr_32899_32928 = state_32888__$1;
(statearr_32899_32928[(1)] = (15));

} else {
var statearr_32900_32929 = state_32888__$1;
(statearr_32900_32929[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (2))){
var state_32888__$1 = state_32888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32888__$1,(4),ch);
} else {
if((state_val_32889 === (11))){
var inst_32848 = (state_32888[(8)]);
var inst_32853 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32854 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32848);
var inst_32855 = cljs.core.async.timeout.call(null,(1000));
var inst_32856 = [inst_32854,inst_32855];
var inst_32857 = (new cljs.core.PersistentVector(null,2,(5),inst_32853,inst_32856,null));
var state_32888__$1 = state_32888;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32888__$1,(14),inst_32857);
} else {
if((state_val_32889 === (9))){
var inst_32848 = (state_32888[(8)]);
var inst_32874 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32875 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32848);
var inst_32876 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32875);
var inst_32877 = [cljs.core.str("Not loading: "),cljs.core.str(inst_32876)].join('');
var inst_32878 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32877);
var state_32888__$1 = (function (){var statearr_32901 = state_32888;
(statearr_32901[(10)] = inst_32874);

return statearr_32901;
})();
var statearr_32902_32930 = state_32888__$1;
(statearr_32902_32930[(2)] = inst_32878);

(statearr_32902_32930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (5))){
var inst_32841 = (state_32888[(7)]);
var inst_32843 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32844 = (new cljs.core.PersistentArrayMap(null,2,inst_32843,null));
var inst_32845 = (new cljs.core.PersistentHashSet(null,inst_32844,null));
var inst_32846 = figwheel.client.focus_msgs.call(null,inst_32845,inst_32841);
var inst_32847 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32846);
var inst_32848 = cljs.core.first.call(null,inst_32846);
var inst_32849 = figwheel.client.autoload_QMARK_.call(null);
var state_32888__$1 = (function (){var statearr_32903 = state_32888;
(statearr_32903[(8)] = inst_32848);

(statearr_32903[(9)] = inst_32847);

return statearr_32903;
})();
if(cljs.core.truth_(inst_32849)){
var statearr_32904_32931 = state_32888__$1;
(statearr_32904_32931[(1)] = (8));

} else {
var statearr_32905_32932 = state_32888__$1;
(statearr_32905_32932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (14))){
var inst_32859 = (state_32888[(2)]);
var state_32888__$1 = state_32888;
var statearr_32906_32933 = state_32888__$1;
(statearr_32906_32933[(2)] = inst_32859);

(statearr_32906_32933[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (16))){
var state_32888__$1 = state_32888;
var statearr_32907_32934 = state_32888__$1;
(statearr_32907_32934[(2)] = null);

(statearr_32907_32934[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (10))){
var inst_32880 = (state_32888[(2)]);
var state_32888__$1 = (function (){var statearr_32908 = state_32888;
(statearr_32908[(11)] = inst_32880);

return statearr_32908;
})();
var statearr_32909_32935 = state_32888__$1;
(statearr_32909_32935[(2)] = null);

(statearr_32909_32935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32889 === (8))){
var inst_32847 = (state_32888[(9)]);
var inst_32851 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32847,opts);
var state_32888__$1 = state_32888;
if(cljs.core.truth_(inst_32851)){
var statearr_32910_32936 = state_32888__$1;
(statearr_32910_32936[(1)] = (11));

} else {
var statearr_32911_32937 = state_32888__$1;
(statearr_32911_32937[(1)] = (12));

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
});})(c__26707__auto___32919,ch))
;
return ((function (switch__26595__auto__,c__26707__auto___32919,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26596__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26596__auto____0 = (function (){
var statearr_32915 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32915[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26596__auto__);

(statearr_32915[(1)] = (1));

return statearr_32915;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26596__auto____1 = (function (state_32888){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_32888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e32916){if((e32916 instanceof Object)){
var ex__26599__auto__ = e32916;
var statearr_32917_32938 = state_32888;
(statearr_32917_32938[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32939 = state_32888;
state_32888 = G__32939;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26596__auto__ = function(state_32888){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26596__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26596__auto____1.call(this,state_32888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26596__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26596__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto___32919,ch))
})();
var state__26709__auto__ = (function (){var statearr_32918 = f__26708__auto__.call(null);
(statearr_32918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto___32919);

return statearr_32918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto___32919,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32940_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32940_SHARP_));
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
var base_path_32947 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32947){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_32945 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_32946 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_32945,_STAR_print_newline_STAR_32946,base_path_32947){
return (function() { 
var G__32948__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__32948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32949__i = 0, G__32949__a = new Array(arguments.length -  0);
while (G__32949__i < G__32949__a.length) {G__32949__a[G__32949__i] = arguments[G__32949__i + 0]; ++G__32949__i;}
  args = new cljs.core.IndexedSeq(G__32949__a,0);
} 
return G__32948__delegate.call(this,args);};
G__32948.cljs$lang$maxFixedArity = 0;
G__32948.cljs$lang$applyTo = (function (arglist__32950){
var args = cljs.core.seq(arglist__32950);
return G__32948__delegate(args);
});
G__32948.cljs$core$IFn$_invoke$arity$variadic = G__32948__delegate;
return G__32948;
})()
;})(_STAR_print_fn_STAR_32945,_STAR_print_newline_STAR_32946,base_path_32947))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32946;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32945;
}}catch (e32944){if((e32944 instanceof Error)){
var e = e32944;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32947], null));
} else {
var e = e32944;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_32947))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32951){
var map__32958 = p__32951;
var map__32958__$1 = ((((!((map__32958 == null)))?((((map__32958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32958):map__32958);
var opts = map__32958__$1;
var build_id = cljs.core.get.call(null,map__32958__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32958,map__32958__$1,opts,build_id){
return (function (p__32960){
var vec__32961 = p__32960;
var map__32962 = cljs.core.nth.call(null,vec__32961,(0),null);
var map__32962__$1 = ((((!((map__32962 == null)))?((((map__32962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32962):map__32962);
var msg = map__32962__$1;
var msg_name = cljs.core.get.call(null,map__32962__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32961,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__32961,map__32962,map__32962__$1,msg,msg_name,_,map__32958,map__32958__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32961,map__32962,map__32962__$1,msg,msg_name,_,map__32958,map__32958__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32958,map__32958__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32968){
var vec__32969 = p__32968;
var map__32970 = cljs.core.nth.call(null,vec__32969,(0),null);
var map__32970__$1 = ((((!((map__32970 == null)))?((((map__32970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32970):map__32970);
var msg = map__32970__$1;
var msg_name = cljs.core.get.call(null,map__32970__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32969,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32972){
var map__32982 = p__32972;
var map__32982__$1 = ((((!((map__32982 == null)))?((((map__32982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32982):map__32982);
var on_compile_warning = cljs.core.get.call(null,map__32982__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32982__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32982,map__32982__$1,on_compile_warning,on_compile_fail){
return (function (p__32984){
var vec__32985 = p__32984;
var map__32986 = cljs.core.nth.call(null,vec__32985,(0),null);
var map__32986__$1 = ((((!((map__32986 == null)))?((((map__32986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32986):map__32986);
var msg = map__32986__$1;
var msg_name = cljs.core.get.call(null,map__32986__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32985,(1));
var pred__32988 = cljs.core._EQ_;
var expr__32989 = msg_name;
if(cljs.core.truth_(pred__32988.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32989))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32988.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32989))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32982,map__32982__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26707__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto__,msg_hist,msg_names,msg){
return (function (state_33205){
var state_val_33206 = (state_33205[(1)]);
if((state_val_33206 === (7))){
var inst_33129 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
if(cljs.core.truth_(inst_33129)){
var statearr_33207_33253 = state_33205__$1;
(statearr_33207_33253[(1)] = (8));

} else {
var statearr_33208_33254 = state_33205__$1;
(statearr_33208_33254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (20))){
var inst_33199 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
var statearr_33209_33255 = state_33205__$1;
(statearr_33209_33255[(2)] = inst_33199);

(statearr_33209_33255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (27))){
var inst_33195 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
var statearr_33210_33256 = state_33205__$1;
(statearr_33210_33256[(2)] = inst_33195);

(statearr_33210_33256[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (1))){
var inst_33122 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33205__$1 = state_33205;
if(cljs.core.truth_(inst_33122)){
var statearr_33211_33257 = state_33205__$1;
(statearr_33211_33257[(1)] = (2));

} else {
var statearr_33212_33258 = state_33205__$1;
(statearr_33212_33258[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (24))){
var inst_33197 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
var statearr_33213_33259 = state_33205__$1;
(statearr_33213_33259[(2)] = inst_33197);

(statearr_33213_33259[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (4))){
var inst_33203 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33205__$1,inst_33203);
} else {
if((state_val_33206 === (15))){
var inst_33201 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
var statearr_33214_33260 = state_33205__$1;
(statearr_33214_33260[(2)] = inst_33201);

(statearr_33214_33260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (21))){
var inst_33160 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
var statearr_33215_33261 = state_33205__$1;
(statearr_33215_33261[(2)] = inst_33160);

(statearr_33215_33261[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (31))){
var inst_33184 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33205__$1 = state_33205;
if(cljs.core.truth_(inst_33184)){
var statearr_33216_33262 = state_33205__$1;
(statearr_33216_33262[(1)] = (34));

} else {
var statearr_33217_33263 = state_33205__$1;
(statearr_33217_33263[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (32))){
var inst_33193 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
var statearr_33218_33264 = state_33205__$1;
(statearr_33218_33264[(2)] = inst_33193);

(statearr_33218_33264[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (33))){
var inst_33182 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
var statearr_33219_33265 = state_33205__$1;
(statearr_33219_33265[(2)] = inst_33182);

(statearr_33219_33265[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (13))){
var inst_33143 = figwheel.client.heads_up.clear.call(null);
var state_33205__$1 = state_33205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33205__$1,(16),inst_33143);
} else {
if((state_val_33206 === (22))){
var inst_33164 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33165 = figwheel.client.heads_up.append_message.call(null,inst_33164);
var state_33205__$1 = state_33205;
var statearr_33220_33266 = state_33205__$1;
(statearr_33220_33266[(2)] = inst_33165);

(statearr_33220_33266[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (36))){
var inst_33191 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
var statearr_33221_33267 = state_33205__$1;
(statearr_33221_33267[(2)] = inst_33191);

(statearr_33221_33267[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (29))){
var inst_33175 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
var statearr_33222_33268 = state_33205__$1;
(statearr_33222_33268[(2)] = inst_33175);

(statearr_33222_33268[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (6))){
var inst_33124 = (state_33205[(7)]);
var state_33205__$1 = state_33205;
var statearr_33223_33269 = state_33205__$1;
(statearr_33223_33269[(2)] = inst_33124);

(statearr_33223_33269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (28))){
var inst_33171 = (state_33205[(2)]);
var inst_33172 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33173 = figwheel.client.heads_up.display_warning.call(null,inst_33172);
var state_33205__$1 = (function (){var statearr_33224 = state_33205;
(statearr_33224[(8)] = inst_33171);

return statearr_33224;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33205__$1,(29),inst_33173);
} else {
if((state_val_33206 === (25))){
var inst_33169 = figwheel.client.heads_up.clear.call(null);
var state_33205__$1 = state_33205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33205__$1,(28),inst_33169);
} else {
if((state_val_33206 === (34))){
var inst_33186 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33205__$1 = state_33205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33205__$1,(37),inst_33186);
} else {
if((state_val_33206 === (17))){
var inst_33151 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
var statearr_33225_33270 = state_33205__$1;
(statearr_33225_33270[(2)] = inst_33151);

(statearr_33225_33270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (3))){
var inst_33141 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33205__$1 = state_33205;
if(cljs.core.truth_(inst_33141)){
var statearr_33226_33271 = state_33205__$1;
(statearr_33226_33271[(1)] = (13));

} else {
var statearr_33227_33272 = state_33205__$1;
(statearr_33227_33272[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (12))){
var inst_33137 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
var statearr_33228_33273 = state_33205__$1;
(statearr_33228_33273[(2)] = inst_33137);

(statearr_33228_33273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (2))){
var inst_33124 = (state_33205[(7)]);
var inst_33124__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33205__$1 = (function (){var statearr_33229 = state_33205;
(statearr_33229[(7)] = inst_33124__$1);

return statearr_33229;
})();
if(cljs.core.truth_(inst_33124__$1)){
var statearr_33230_33274 = state_33205__$1;
(statearr_33230_33274[(1)] = (5));

} else {
var statearr_33231_33275 = state_33205__$1;
(statearr_33231_33275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (23))){
var inst_33167 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33205__$1 = state_33205;
if(cljs.core.truth_(inst_33167)){
var statearr_33232_33276 = state_33205__$1;
(statearr_33232_33276[(1)] = (25));

} else {
var statearr_33233_33277 = state_33205__$1;
(statearr_33233_33277[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (35))){
var state_33205__$1 = state_33205;
var statearr_33234_33278 = state_33205__$1;
(statearr_33234_33278[(2)] = null);

(statearr_33234_33278[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (19))){
var inst_33162 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33205__$1 = state_33205;
if(cljs.core.truth_(inst_33162)){
var statearr_33235_33279 = state_33205__$1;
(statearr_33235_33279[(1)] = (22));

} else {
var statearr_33236_33280 = state_33205__$1;
(statearr_33236_33280[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (11))){
var inst_33133 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
var statearr_33237_33281 = state_33205__$1;
(statearr_33237_33281[(2)] = inst_33133);

(statearr_33237_33281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (9))){
var inst_33135 = figwheel.client.heads_up.clear.call(null);
var state_33205__$1 = state_33205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33205__$1,(12),inst_33135);
} else {
if((state_val_33206 === (5))){
var inst_33126 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33205__$1 = state_33205;
var statearr_33238_33282 = state_33205__$1;
(statearr_33238_33282[(2)] = inst_33126);

(statearr_33238_33282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (14))){
var inst_33153 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33205__$1 = state_33205;
if(cljs.core.truth_(inst_33153)){
var statearr_33239_33283 = state_33205__$1;
(statearr_33239_33283[(1)] = (18));

} else {
var statearr_33240_33284 = state_33205__$1;
(statearr_33240_33284[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (26))){
var inst_33177 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33205__$1 = state_33205;
if(cljs.core.truth_(inst_33177)){
var statearr_33241_33285 = state_33205__$1;
(statearr_33241_33285[(1)] = (30));

} else {
var statearr_33242_33286 = state_33205__$1;
(statearr_33242_33286[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (16))){
var inst_33145 = (state_33205[(2)]);
var inst_33146 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33147 = figwheel.client.format_messages.call(null,inst_33146);
var inst_33148 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33149 = figwheel.client.heads_up.display_error.call(null,inst_33147,inst_33148);
var state_33205__$1 = (function (){var statearr_33243 = state_33205;
(statearr_33243[(9)] = inst_33145);

return statearr_33243;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33205__$1,(17),inst_33149);
} else {
if((state_val_33206 === (30))){
var inst_33179 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33180 = figwheel.client.heads_up.display_warning.call(null,inst_33179);
var state_33205__$1 = state_33205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33205__$1,(33),inst_33180);
} else {
if((state_val_33206 === (10))){
var inst_33139 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
var statearr_33244_33287 = state_33205__$1;
(statearr_33244_33287[(2)] = inst_33139);

(statearr_33244_33287[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (18))){
var inst_33155 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33156 = figwheel.client.format_messages.call(null,inst_33155);
var inst_33157 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33158 = figwheel.client.heads_up.display_error.call(null,inst_33156,inst_33157);
var state_33205__$1 = state_33205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33205__$1,(21),inst_33158);
} else {
if((state_val_33206 === (37))){
var inst_33188 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
var statearr_33245_33288 = state_33205__$1;
(statearr_33245_33288[(2)] = inst_33188);

(statearr_33245_33288[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (8))){
var inst_33131 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33205__$1 = state_33205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33205__$1,(11),inst_33131);
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
});})(c__26707__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26595__auto__,c__26707__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26596__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26596__auto____0 = (function (){
var statearr_33249 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33249[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26596__auto__);

(statearr_33249[(1)] = (1));

return statearr_33249;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26596__auto____1 = (function (state_33205){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_33205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e33250){if((e33250 instanceof Object)){
var ex__26599__auto__ = e33250;
var statearr_33251_33289 = state_33205;
(statearr_33251_33289[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33290 = state_33205;
state_33205 = G__33290;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26596__auto__ = function(state_33205){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26596__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26596__auto____1.call(this,state_33205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26596__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26596__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto__,msg_hist,msg_names,msg))
})();
var state__26709__auto__ = (function (){var statearr_33252 = f__26708__auto__.call(null);
(statearr_33252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto__);

return statearr_33252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto__,msg_hist,msg_names,msg))
);

return c__26707__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26707__auto___33353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto___33353,ch){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto___33353,ch){
return (function (state_33336){
var state_val_33337 = (state_33336[(1)]);
if((state_val_33337 === (1))){
var state_33336__$1 = state_33336;
var statearr_33338_33354 = state_33336__$1;
(statearr_33338_33354[(2)] = null);

(statearr_33338_33354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33337 === (2))){
var state_33336__$1 = state_33336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33336__$1,(4),ch);
} else {
if((state_val_33337 === (3))){
var inst_33334 = (state_33336[(2)]);
var state_33336__$1 = state_33336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33336__$1,inst_33334);
} else {
if((state_val_33337 === (4))){
var inst_33324 = (state_33336[(7)]);
var inst_33324__$1 = (state_33336[(2)]);
var state_33336__$1 = (function (){var statearr_33339 = state_33336;
(statearr_33339[(7)] = inst_33324__$1);

return statearr_33339;
})();
if(cljs.core.truth_(inst_33324__$1)){
var statearr_33340_33355 = state_33336__$1;
(statearr_33340_33355[(1)] = (5));

} else {
var statearr_33341_33356 = state_33336__$1;
(statearr_33341_33356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33337 === (5))){
var inst_33324 = (state_33336[(7)]);
var inst_33326 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33324);
var state_33336__$1 = state_33336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33336__$1,(8),inst_33326);
} else {
if((state_val_33337 === (6))){
var state_33336__$1 = state_33336;
var statearr_33342_33357 = state_33336__$1;
(statearr_33342_33357[(2)] = null);

(statearr_33342_33357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33337 === (7))){
var inst_33332 = (state_33336[(2)]);
var state_33336__$1 = state_33336;
var statearr_33343_33358 = state_33336__$1;
(statearr_33343_33358[(2)] = inst_33332);

(statearr_33343_33358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33337 === (8))){
var inst_33328 = (state_33336[(2)]);
var state_33336__$1 = (function (){var statearr_33344 = state_33336;
(statearr_33344[(8)] = inst_33328);

return statearr_33344;
})();
var statearr_33345_33359 = state_33336__$1;
(statearr_33345_33359[(2)] = null);

(statearr_33345_33359[(1)] = (2));


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
});})(c__26707__auto___33353,ch))
;
return ((function (switch__26595__auto__,c__26707__auto___33353,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26596__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26596__auto____0 = (function (){
var statearr_33349 = [null,null,null,null,null,null,null,null,null];
(statearr_33349[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26596__auto__);

(statearr_33349[(1)] = (1));

return statearr_33349;
});
var figwheel$client$heads_up_plugin_$_state_machine__26596__auto____1 = (function (state_33336){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_33336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e33350){if((e33350 instanceof Object)){
var ex__26599__auto__ = e33350;
var statearr_33351_33360 = state_33336;
(statearr_33351_33360[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33361 = state_33336;
state_33336 = G__33361;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26596__auto__ = function(state_33336){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26596__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26596__auto____1.call(this,state_33336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26596__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26596__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto___33353,ch))
})();
var state__26709__auto__ = (function (){var statearr_33352 = f__26708__auto__.call(null);
(statearr_33352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto___33353);

return statearr_33352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto___33353,ch))
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
var c__26707__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto__){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto__){
return (function (state_33382){
var state_val_33383 = (state_33382[(1)]);
if((state_val_33383 === (1))){
var inst_33377 = cljs.core.async.timeout.call(null,(3000));
var state_33382__$1 = state_33382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33382__$1,(2),inst_33377);
} else {
if((state_val_33383 === (2))){
var inst_33379 = (state_33382[(2)]);
var inst_33380 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33382__$1 = (function (){var statearr_33384 = state_33382;
(statearr_33384[(7)] = inst_33379);

return statearr_33384;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33382__$1,inst_33380);
} else {
return null;
}
}
});})(c__26707__auto__))
;
return ((function (switch__26595__auto__,c__26707__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26596__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26596__auto____0 = (function (){
var statearr_33388 = [null,null,null,null,null,null,null,null];
(statearr_33388[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26596__auto__);

(statearr_33388[(1)] = (1));

return statearr_33388;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26596__auto____1 = (function (state_33382){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_33382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e33389){if((e33389 instanceof Object)){
var ex__26599__auto__ = e33389;
var statearr_33390_33392 = state_33382;
(statearr_33390_33392[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33393 = state_33382;
state_33382 = G__33393;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26596__auto__ = function(state_33382){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26596__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26596__auto____1.call(this,state_33382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26596__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26596__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto__))
})();
var state__26709__auto__ = (function (){var statearr_33391 = f__26708__auto__.call(null);
(statearr_33391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto__);

return statearr_33391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto__))
);

return c__26707__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33394){
var map__33401 = p__33394;
var map__33401__$1 = ((((!((map__33401 == null)))?((((map__33401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33401):map__33401);
var ed = map__33401__$1;
var formatted_exception = cljs.core.get.call(null,map__33401__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__33401__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33401__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__33403_33407 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__33404_33408 = null;
var count__33405_33409 = (0);
var i__33406_33410 = (0);
while(true){
if((i__33406_33410 < count__33405_33409)){
var msg_33411 = cljs.core._nth.call(null,chunk__33404_33408,i__33406_33410);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33411);

var G__33412 = seq__33403_33407;
var G__33413 = chunk__33404_33408;
var G__33414 = count__33405_33409;
var G__33415 = (i__33406_33410 + (1));
seq__33403_33407 = G__33412;
chunk__33404_33408 = G__33413;
count__33405_33409 = G__33414;
i__33406_33410 = G__33415;
continue;
} else {
var temp__4425__auto___33416 = cljs.core.seq.call(null,seq__33403_33407);
if(temp__4425__auto___33416){
var seq__33403_33417__$1 = temp__4425__auto___33416;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33403_33417__$1)){
var c__23387__auto___33418 = cljs.core.chunk_first.call(null,seq__33403_33417__$1);
var G__33419 = cljs.core.chunk_rest.call(null,seq__33403_33417__$1);
var G__33420 = c__23387__auto___33418;
var G__33421 = cljs.core.count.call(null,c__23387__auto___33418);
var G__33422 = (0);
seq__33403_33407 = G__33419;
chunk__33404_33408 = G__33420;
count__33405_33409 = G__33421;
i__33406_33410 = G__33422;
continue;
} else {
var msg_33423 = cljs.core.first.call(null,seq__33403_33417__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33423);

var G__33424 = cljs.core.next.call(null,seq__33403_33417__$1);
var G__33425 = null;
var G__33426 = (0);
var G__33427 = (0);
seq__33403_33407 = G__33424;
chunk__33404_33408 = G__33425;
count__33405_33409 = G__33426;
i__33406_33410 = G__33427;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33428){
var map__33431 = p__33428;
var map__33431__$1 = ((((!((map__33431 == null)))?((((map__33431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33431):map__33431);
var w = map__33431__$1;
var message = cljs.core.get.call(null,map__33431__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__22564__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__22564__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__22564__auto__;
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
var seq__33439 = cljs.core.seq.call(null,plugins);
var chunk__33440 = null;
var count__33441 = (0);
var i__33442 = (0);
while(true){
if((i__33442 < count__33441)){
var vec__33443 = cljs.core._nth.call(null,chunk__33440,i__33442);
var k = cljs.core.nth.call(null,vec__33443,(0),null);
var plugin = cljs.core.nth.call(null,vec__33443,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33445 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33439,chunk__33440,count__33441,i__33442,pl_33445,vec__33443,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33445.call(null,msg_hist);
});})(seq__33439,chunk__33440,count__33441,i__33442,pl_33445,vec__33443,k,plugin))
);
} else {
}

var G__33446 = seq__33439;
var G__33447 = chunk__33440;
var G__33448 = count__33441;
var G__33449 = (i__33442 + (1));
seq__33439 = G__33446;
chunk__33440 = G__33447;
count__33441 = G__33448;
i__33442 = G__33449;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33439);
if(temp__4425__auto__){
var seq__33439__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33439__$1)){
var c__23387__auto__ = cljs.core.chunk_first.call(null,seq__33439__$1);
var G__33450 = cljs.core.chunk_rest.call(null,seq__33439__$1);
var G__33451 = c__23387__auto__;
var G__33452 = cljs.core.count.call(null,c__23387__auto__);
var G__33453 = (0);
seq__33439 = G__33450;
chunk__33440 = G__33451;
count__33441 = G__33452;
i__33442 = G__33453;
continue;
} else {
var vec__33444 = cljs.core.first.call(null,seq__33439__$1);
var k = cljs.core.nth.call(null,vec__33444,(0),null);
var plugin = cljs.core.nth.call(null,vec__33444,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33454 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33439,chunk__33440,count__33441,i__33442,pl_33454,vec__33444,k,plugin,seq__33439__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33454.call(null,msg_hist);
});})(seq__33439,chunk__33440,count__33441,i__33442,pl_33454,vec__33444,k,plugin,seq__33439__$1,temp__4425__auto__))
);
} else {
}

var G__33455 = cljs.core.next.call(null,seq__33439__$1);
var G__33456 = null;
var G__33457 = (0);
var G__33458 = (0);
seq__33439 = G__33455;
chunk__33440 = G__33456;
count__33441 = G__33457;
i__33442 = G__33458;
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
var args33459 = [];
var len__23646__auto___33462 = arguments.length;
var i__23647__auto___33463 = (0);
while(true){
if((i__23647__auto___33463 < len__23646__auto___33462)){
args33459.push((arguments[i__23647__auto___33463]));

var G__33464 = (i__23647__auto___33463 + (1));
i__23647__auto___33463 = G__33464;
continue;
} else {
}
break;
}

var G__33461 = args33459.length;
switch (G__33461) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33459.length)].join('')));

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
var args__23653__auto__ = [];
var len__23646__auto___33470 = arguments.length;
var i__23647__auto___33471 = (0);
while(true){
if((i__23647__auto___33471 < len__23646__auto___33470)){
args__23653__auto__.push((arguments[i__23647__auto___33471]));

var G__33472 = (i__23647__auto___33471 + (1));
i__23647__auto___33471 = G__33472;
continue;
} else {
}
break;
}

var argseq__23654__auto__ = ((((0) < args__23653__auto__.length))?(new cljs.core.IndexedSeq(args__23653__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__23654__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33467){
var map__33468 = p__33467;
var map__33468__$1 = ((((!((map__33468 == null)))?((((map__33468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33468):map__33468);
var opts = map__33468__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33466){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33466));
});

//# sourceMappingURL=client.js.map