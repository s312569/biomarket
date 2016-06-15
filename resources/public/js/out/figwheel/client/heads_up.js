// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__25166__auto__ = [];
var len__25159__auto___37919 = arguments.length;
var i__25160__auto___37920 = (0);
while(true){
if((i__25160__auto___37920 < len__25159__auto___37919)){
args__25166__auto__.push((arguments[i__25160__auto___37920]));

var G__37921 = (i__25160__auto___37920 + (1));
i__25160__auto___37920 = G__37921;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((2) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25167__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__37911_37922 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__37912_37923 = null;
var count__37913_37924 = (0);
var i__37914_37925 = (0);
while(true){
if((i__37914_37925 < count__37913_37924)){
var k_37926 = cljs.core._nth.call(null,chunk__37912_37923,i__37914_37925);
e.setAttribute(cljs.core.name.call(null,k_37926),cljs.core.get.call(null,attrs,k_37926));

var G__37927 = seq__37911_37922;
var G__37928 = chunk__37912_37923;
var G__37929 = count__37913_37924;
var G__37930 = (i__37914_37925 + (1));
seq__37911_37922 = G__37927;
chunk__37912_37923 = G__37928;
count__37913_37924 = G__37929;
i__37914_37925 = G__37930;
continue;
} else {
var temp__4425__auto___37931 = cljs.core.seq.call(null,seq__37911_37922);
if(temp__4425__auto___37931){
var seq__37911_37932__$1 = temp__4425__auto___37931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37911_37932__$1)){
var c__24900__auto___37933 = cljs.core.chunk_first.call(null,seq__37911_37932__$1);
var G__37934 = cljs.core.chunk_rest.call(null,seq__37911_37932__$1);
var G__37935 = c__24900__auto___37933;
var G__37936 = cljs.core.count.call(null,c__24900__auto___37933);
var G__37937 = (0);
seq__37911_37922 = G__37934;
chunk__37912_37923 = G__37935;
count__37913_37924 = G__37936;
i__37914_37925 = G__37937;
continue;
} else {
var k_37938 = cljs.core.first.call(null,seq__37911_37932__$1);
e.setAttribute(cljs.core.name.call(null,k_37938),cljs.core.get.call(null,attrs,k_37938));

var G__37939 = cljs.core.next.call(null,seq__37911_37932__$1);
var G__37940 = null;
var G__37941 = (0);
var G__37942 = (0);
seq__37911_37922 = G__37939;
chunk__37912_37923 = G__37940;
count__37913_37924 = G__37941;
i__37914_37925 = G__37942;
continue;
}
} else {
}
}
break;
}

var seq__37915_37943 = cljs.core.seq.call(null,children);
var chunk__37916_37944 = null;
var count__37917_37945 = (0);
var i__37918_37946 = (0);
while(true){
if((i__37918_37946 < count__37917_37945)){
var ch_37947 = cljs.core._nth.call(null,chunk__37916_37944,i__37918_37946);
e.appendChild(ch_37947);

var G__37948 = seq__37915_37943;
var G__37949 = chunk__37916_37944;
var G__37950 = count__37917_37945;
var G__37951 = (i__37918_37946 + (1));
seq__37915_37943 = G__37948;
chunk__37916_37944 = G__37949;
count__37917_37945 = G__37950;
i__37918_37946 = G__37951;
continue;
} else {
var temp__4425__auto___37952 = cljs.core.seq.call(null,seq__37915_37943);
if(temp__4425__auto___37952){
var seq__37915_37953__$1 = temp__4425__auto___37952;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37915_37953__$1)){
var c__24900__auto___37954 = cljs.core.chunk_first.call(null,seq__37915_37953__$1);
var G__37955 = cljs.core.chunk_rest.call(null,seq__37915_37953__$1);
var G__37956 = c__24900__auto___37954;
var G__37957 = cljs.core.count.call(null,c__24900__auto___37954);
var G__37958 = (0);
seq__37915_37943 = G__37955;
chunk__37916_37944 = G__37956;
count__37917_37945 = G__37957;
i__37918_37946 = G__37958;
continue;
} else {
var ch_37959 = cljs.core.first.call(null,seq__37915_37953__$1);
e.appendChild(ch_37959);

var G__37960 = cljs.core.next.call(null,seq__37915_37953__$1);
var G__37961 = null;
var G__37962 = (0);
var G__37963 = (0);
seq__37915_37943 = G__37960;
chunk__37916_37944 = G__37961;
count__37917_37945 = G__37962;
i__37918_37946 = G__37963;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq37908){
var G__37909 = cljs.core.first.call(null,seq37908);
var seq37908__$1 = cljs.core.next.call(null,seq37908);
var G__37910 = cljs.core.first.call(null,seq37908__$1);
var seq37908__$2 = cljs.core.next.call(null,seq37908__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__37909,G__37910,seq37908__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__25014__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25015__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25018__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__25014__auto__,prefer_table__25015__auto__,method_cache__25016__auto__,cached_hierarchy__25017__auto__,hierarchy__25018__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__25014__auto__,prefer_table__25015__auto__,method_cache__25016__auto__,cached_hierarchy__25017__auto__,hierarchy__25018__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25018__auto__,method_table__25014__auto__,prefer_table__25015__auto__,method_cache__25016__auto__,cached_hierarchy__25017__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_37964 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_37964.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_37964.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_37964.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_37964);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__37965,st_map){
var map__37970 = p__37965;
var map__37970__$1 = ((((!((map__37970 == null)))?((((map__37970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37970):map__37970);
var container_el = cljs.core.get.call(null,map__37970__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__37970,map__37970__$1,container_el){
return (function (p__37972){
var vec__37973 = p__37972;
var k = cljs.core.nth.call(null,vec__37973,(0),null);
var v = cljs.core.nth.call(null,vec__37973,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__37970,map__37970__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__37974,dom_str){
var map__37977 = p__37974;
var map__37977__$1 = ((((!((map__37977 == null)))?((((map__37977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37977):map__37977);
var c = map__37977__$1;
var content_area_el = cljs.core.get.call(null,map__37977__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__37979){
var map__37982 = p__37979;
var map__37982__$1 = ((((!((map__37982 == null)))?((((map__37982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37982):map__37982);
var content_area_el = cljs.core.get.call(null,map__37982__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__28220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto__){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto__){
return (function (state_38025){
var state_val_38026 = (state_38025[(1)]);
if((state_val_38026 === (1))){
var inst_38010 = (state_38025[(7)]);
var inst_38010__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_38011 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_38012 = ["10px","10px","100%","68px","1.0"];
var inst_38013 = cljs.core.PersistentHashMap.fromArrays(inst_38011,inst_38012);
var inst_38014 = cljs.core.merge.call(null,inst_38013,style);
var inst_38015 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38010__$1,inst_38014);
var inst_38016 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_38010__$1,msg);
var inst_38017 = cljs.core.async.timeout.call(null,(300));
var state_38025__$1 = (function (){var statearr_38027 = state_38025;
(statearr_38027[(8)] = inst_38016);

(statearr_38027[(9)] = inst_38015);

(statearr_38027[(7)] = inst_38010__$1);

return statearr_38027;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38025__$1,(2),inst_38017);
} else {
if((state_val_38026 === (2))){
var inst_38010 = (state_38025[(7)]);
var inst_38019 = (state_38025[(2)]);
var inst_38020 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_38021 = ["auto"];
var inst_38022 = cljs.core.PersistentHashMap.fromArrays(inst_38020,inst_38021);
var inst_38023 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38010,inst_38022);
var state_38025__$1 = (function (){var statearr_38028 = state_38025;
(statearr_38028[(10)] = inst_38019);

return statearr_38028;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38025__$1,inst_38023);
} else {
return null;
}
}
});})(c__28220__auto__))
;
return ((function (switch__28108__auto__,c__28220__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__28109__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__28109__auto____0 = (function (){
var statearr_38032 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38032[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__28109__auto__);

(statearr_38032[(1)] = (1));

return statearr_38032;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__28109__auto____1 = (function (state_38025){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_38025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e38033){if((e38033 instanceof Object)){
var ex__28112__auto__ = e38033;
var statearr_38034_38036 = state_38025;
(statearr_38034_38036[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38037 = state_38025;
state_38025 = G__38037;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__28109__auto__ = function(state_38025){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28109__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28109__auto____1.call(this,state_38025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__28109__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__28109__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto__))
})();
var state__28222__auto__ = (function (){var statearr_38035 = f__28221__auto__.call(null);
(statearr_38035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto__);

return statearr_38035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto__))
);

return c__28220__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__38039 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__38039,(0),null);
var ln = cljs.core.nth.call(null,vec__38039,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__38042 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__38042,(0),null);
var file_line = cljs.core.nth.call(null,vec__38042,(1),null);
var file_column = cljs.core.nth.call(null,vec__38042,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__38042,file_name,file_line,file_column){
return (function (p1__38040_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__38040_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__38042,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__24089__auto__ = file_line;
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
var and__24077__auto__ = cause;
if(cljs.core.truth_(and__24077__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__24077__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__38045 = figwheel.client.heads_up.ensure_container.call(null);
var map__38045__$1 = ((((!((map__38045 == null)))?((((map__38045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38045):map__38045);
var content_area_el = cljs.core.get.call(null,map__38045__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__28220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto__){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto__){
return (function (state_38093){
var state_val_38094 = (state_38093[(1)]);
if((state_val_38094 === (1))){
var inst_38076 = (state_38093[(7)]);
var inst_38076__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_38077 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_38078 = ["0.0"];
var inst_38079 = cljs.core.PersistentHashMap.fromArrays(inst_38077,inst_38078);
var inst_38080 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38076__$1,inst_38079);
var inst_38081 = cljs.core.async.timeout.call(null,(300));
var state_38093__$1 = (function (){var statearr_38095 = state_38093;
(statearr_38095[(8)] = inst_38080);

(statearr_38095[(7)] = inst_38076__$1);

return statearr_38095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38093__$1,(2),inst_38081);
} else {
if((state_val_38094 === (2))){
var inst_38076 = (state_38093[(7)]);
var inst_38083 = (state_38093[(2)]);
var inst_38084 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_38085 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_38086 = cljs.core.PersistentHashMap.fromArrays(inst_38084,inst_38085);
var inst_38087 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38076,inst_38086);
var inst_38088 = cljs.core.async.timeout.call(null,(200));
var state_38093__$1 = (function (){var statearr_38096 = state_38093;
(statearr_38096[(9)] = inst_38087);

(statearr_38096[(10)] = inst_38083);

return statearr_38096;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38093__$1,(3),inst_38088);
} else {
if((state_val_38094 === (3))){
var inst_38076 = (state_38093[(7)]);
var inst_38090 = (state_38093[(2)]);
var inst_38091 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_38076,"");
var state_38093__$1 = (function (){var statearr_38097 = state_38093;
(statearr_38097[(11)] = inst_38090);

return statearr_38097;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38093__$1,inst_38091);
} else {
return null;
}
}
}
});})(c__28220__auto__))
;
return ((function (switch__28108__auto__,c__28220__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__28109__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__28109__auto____0 = (function (){
var statearr_38101 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38101[(0)] = figwheel$client$heads_up$clear_$_state_machine__28109__auto__);

(statearr_38101[(1)] = (1));

return statearr_38101;
});
var figwheel$client$heads_up$clear_$_state_machine__28109__auto____1 = (function (state_38093){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_38093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e38102){if((e38102 instanceof Object)){
var ex__28112__auto__ = e38102;
var statearr_38103_38105 = state_38093;
(statearr_38103_38105[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38106 = state_38093;
state_38093 = G__38106;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__28109__auto__ = function(state_38093){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__28109__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__28109__auto____1.call(this,state_38093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__28109__auto____0;
figwheel$client$heads_up$clear_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__28109__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto__))
})();
var state__28222__auto__ = (function (){var statearr_38104 = f__28221__auto__.call(null);
(statearr_38104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto__);

return statearr_38104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto__))
);

return c__28220__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__28220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto__){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto__){
return (function (state_38138){
var state_val_38139 = (state_38138[(1)]);
if((state_val_38139 === (1))){
var inst_38128 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_38138__$1 = state_38138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38138__$1,(2),inst_38128);
} else {
if((state_val_38139 === (2))){
var inst_38130 = (state_38138[(2)]);
var inst_38131 = cljs.core.async.timeout.call(null,(400));
var state_38138__$1 = (function (){var statearr_38140 = state_38138;
(statearr_38140[(7)] = inst_38130);

return statearr_38140;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38138__$1,(3),inst_38131);
} else {
if((state_val_38139 === (3))){
var inst_38133 = (state_38138[(2)]);
var inst_38134 = figwheel.client.heads_up.clear.call(null);
var state_38138__$1 = (function (){var statearr_38141 = state_38138;
(statearr_38141[(8)] = inst_38133);

return statearr_38141;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38138__$1,(4),inst_38134);
} else {
if((state_val_38139 === (4))){
var inst_38136 = (state_38138[(2)]);
var state_38138__$1 = state_38138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38138__$1,inst_38136);
} else {
return null;
}
}
}
}
});})(c__28220__auto__))
;
return ((function (switch__28108__auto__,c__28220__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__28109__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__28109__auto____0 = (function (){
var statearr_38145 = [null,null,null,null,null,null,null,null,null];
(statearr_38145[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__28109__auto__);

(statearr_38145[(1)] = (1));

return statearr_38145;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__28109__auto____1 = (function (state_38138){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_38138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e38146){if((e38146 instanceof Object)){
var ex__28112__auto__ = e38146;
var statearr_38147_38149 = state_38138;
(statearr_38147_38149[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38150 = state_38138;
state_38138 = G__38150;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__28109__auto__ = function(state_38138){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28109__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28109__auto____1.call(this,state_38138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__28109__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__28109__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto__))
})();
var state__28222__auto__ = (function (){var statearr_38148 = f__28221__auto__.call(null);
(statearr_38148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto__);

return statearr_38148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto__))
);

return c__28220__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map