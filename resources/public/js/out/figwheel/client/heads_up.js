// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__23940__auto__ = [];
var len__23933__auto___34145 = arguments.length;
var i__23934__auto___34146 = (0);
while(true){
if((i__23934__auto___34146 < len__23933__auto___34145)){
args__23940__auto__.push((arguments[i__23934__auto___34146]));

var G__34147 = (i__23934__auto___34146 + (1));
i__23934__auto___34146 = G__34147;
continue;
} else {
}
break;
}

var argseq__23941__auto__ = ((((2) < args__23940__auto__.length))?(new cljs.core.IndexedSeq(args__23940__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23941__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__34137_34148 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__34138_34149 = null;
var count__34139_34150 = (0);
var i__34140_34151 = (0);
while(true){
if((i__34140_34151 < count__34139_34150)){
var k_34152 = cljs.core._nth.call(null,chunk__34138_34149,i__34140_34151);
e.setAttribute(cljs.core.name.call(null,k_34152),cljs.core.get.call(null,attrs,k_34152));

var G__34153 = seq__34137_34148;
var G__34154 = chunk__34138_34149;
var G__34155 = count__34139_34150;
var G__34156 = (i__34140_34151 + (1));
seq__34137_34148 = G__34153;
chunk__34138_34149 = G__34154;
count__34139_34150 = G__34155;
i__34140_34151 = G__34156;
continue;
} else {
var temp__4425__auto___34157 = cljs.core.seq.call(null,seq__34137_34148);
if(temp__4425__auto___34157){
var seq__34137_34158__$1 = temp__4425__auto___34157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34137_34158__$1)){
var c__23674__auto___34159 = cljs.core.chunk_first.call(null,seq__34137_34158__$1);
var G__34160 = cljs.core.chunk_rest.call(null,seq__34137_34158__$1);
var G__34161 = c__23674__auto___34159;
var G__34162 = cljs.core.count.call(null,c__23674__auto___34159);
var G__34163 = (0);
seq__34137_34148 = G__34160;
chunk__34138_34149 = G__34161;
count__34139_34150 = G__34162;
i__34140_34151 = G__34163;
continue;
} else {
var k_34164 = cljs.core.first.call(null,seq__34137_34158__$1);
e.setAttribute(cljs.core.name.call(null,k_34164),cljs.core.get.call(null,attrs,k_34164));

var G__34165 = cljs.core.next.call(null,seq__34137_34158__$1);
var G__34166 = null;
var G__34167 = (0);
var G__34168 = (0);
seq__34137_34148 = G__34165;
chunk__34138_34149 = G__34166;
count__34139_34150 = G__34167;
i__34140_34151 = G__34168;
continue;
}
} else {
}
}
break;
}

var seq__34141_34169 = cljs.core.seq.call(null,children);
var chunk__34142_34170 = null;
var count__34143_34171 = (0);
var i__34144_34172 = (0);
while(true){
if((i__34144_34172 < count__34143_34171)){
var ch_34173 = cljs.core._nth.call(null,chunk__34142_34170,i__34144_34172);
e.appendChild(ch_34173);

var G__34174 = seq__34141_34169;
var G__34175 = chunk__34142_34170;
var G__34176 = count__34143_34171;
var G__34177 = (i__34144_34172 + (1));
seq__34141_34169 = G__34174;
chunk__34142_34170 = G__34175;
count__34143_34171 = G__34176;
i__34144_34172 = G__34177;
continue;
} else {
var temp__4425__auto___34178 = cljs.core.seq.call(null,seq__34141_34169);
if(temp__4425__auto___34178){
var seq__34141_34179__$1 = temp__4425__auto___34178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34141_34179__$1)){
var c__23674__auto___34180 = cljs.core.chunk_first.call(null,seq__34141_34179__$1);
var G__34181 = cljs.core.chunk_rest.call(null,seq__34141_34179__$1);
var G__34182 = c__23674__auto___34180;
var G__34183 = cljs.core.count.call(null,c__23674__auto___34180);
var G__34184 = (0);
seq__34141_34169 = G__34181;
chunk__34142_34170 = G__34182;
count__34143_34171 = G__34183;
i__34144_34172 = G__34184;
continue;
} else {
var ch_34185 = cljs.core.first.call(null,seq__34141_34179__$1);
e.appendChild(ch_34185);

var G__34186 = cljs.core.next.call(null,seq__34141_34179__$1);
var G__34187 = null;
var G__34188 = (0);
var G__34189 = (0);
seq__34141_34169 = G__34186;
chunk__34142_34170 = G__34187;
count__34143_34171 = G__34188;
i__34144_34172 = G__34189;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq34134){
var G__34135 = cljs.core.first.call(null,seq34134);
var seq34134__$1 = cljs.core.next.call(null,seq34134);
var G__34136 = cljs.core.first.call(null,seq34134__$1);
var seq34134__$2 = cljs.core.next.call(null,seq34134__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__34135,G__34136,seq34134__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__23788__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23789__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23790__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23791__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23792__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__23788__auto__,prefer_table__23789__auto__,method_cache__23790__auto__,cached_hierarchy__23791__auto__,hierarchy__23792__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__23788__auto__,prefer_table__23789__auto__,method_cache__23790__auto__,cached_hierarchy__23791__auto__,hierarchy__23792__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23792__auto__,method_table__23788__auto__,prefer_table__23789__auto__,method_cache__23790__auto__,cached_hierarchy__23791__auto__));
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
var el_34190 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_34190.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_34190.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_34190.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_34190);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__34191,st_map){
var map__34196 = p__34191;
var map__34196__$1 = ((((!((map__34196 == null)))?((((map__34196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34196):map__34196);
var container_el = cljs.core.get.call(null,map__34196__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__34196,map__34196__$1,container_el){
return (function (p__34198){
var vec__34199 = p__34198;
var k = cljs.core.nth.call(null,vec__34199,(0),null);
var v = cljs.core.nth.call(null,vec__34199,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__34196,map__34196__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__34200,dom_str){
var map__34203 = p__34200;
var map__34203__$1 = ((((!((map__34203 == null)))?((((map__34203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34203):map__34203);
var c = map__34203__$1;
var content_area_el = cljs.core.get.call(null,map__34203__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__34205){
var map__34208 = p__34205;
var map__34208__$1 = ((((!((map__34208 == null)))?((((map__34208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34208):map__34208);
var content_area_el = cljs.core.get.call(null,map__34208__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__26994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto__){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto__){
return (function (state_34251){
var state_val_34252 = (state_34251[(1)]);
if((state_val_34252 === (1))){
var inst_34236 = (state_34251[(7)]);
var inst_34236__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34237 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34238 = ["10px","10px","100%","68px","1.0"];
var inst_34239 = cljs.core.PersistentHashMap.fromArrays(inst_34237,inst_34238);
var inst_34240 = cljs.core.merge.call(null,inst_34239,style);
var inst_34241 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34236__$1,inst_34240);
var inst_34242 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34236__$1,msg);
var inst_34243 = cljs.core.async.timeout.call(null,(300));
var state_34251__$1 = (function (){var statearr_34253 = state_34251;
(statearr_34253[(8)] = inst_34241);

(statearr_34253[(9)] = inst_34242);

(statearr_34253[(7)] = inst_34236__$1);

return statearr_34253;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34251__$1,(2),inst_34243);
} else {
if((state_val_34252 === (2))){
var inst_34236 = (state_34251[(7)]);
var inst_34245 = (state_34251[(2)]);
var inst_34246 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_34247 = ["auto"];
var inst_34248 = cljs.core.PersistentHashMap.fromArrays(inst_34246,inst_34247);
var inst_34249 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34236,inst_34248);
var state_34251__$1 = (function (){var statearr_34254 = state_34251;
(statearr_34254[(10)] = inst_34245);

return statearr_34254;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34251__$1,inst_34249);
} else {
return null;
}
}
});})(c__26994__auto__))
;
return ((function (switch__26882__auto__,c__26994__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__26883__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__26883__auto____0 = (function (){
var statearr_34258 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34258[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__26883__auto__);

(statearr_34258[(1)] = (1));

return statearr_34258;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__26883__auto____1 = (function (state_34251){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_34251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e34259){if((e34259 instanceof Object)){
var ex__26886__auto__ = e34259;
var statearr_34260_34262 = state_34251;
(statearr_34260_34262[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34263 = state_34251;
state_34251 = G__34263;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__26883__auto__ = function(state_34251){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__26883__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__26883__auto____1.call(this,state_34251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__26883__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__26883__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto__))
})();
var state__26996__auto__ = (function (){var statearr_34261 = f__26995__auto__.call(null);
(statearr_34261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto__);

return statearr_34261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto__))
);

return c__26994__auto__;
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
var vec__34265 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__34265,(0),null);
var ln = cljs.core.nth.call(null,vec__34265,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__34268 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__34268,(0),null);
var file_line = cljs.core.nth.call(null,vec__34268,(1),null);
var file_column = cljs.core.nth.call(null,vec__34268,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__34268,file_name,file_line,file_column){
return (function (p1__34266_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__34266_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__34268,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__22863__auto__ = file_line;
if(cljs.core.truth_(or__22863__auto__)){
return or__22863__auto__;
} else {
var and__22851__auto__ = cause;
if(cljs.core.truth_(and__22851__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__22851__auto__;
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
var map__34271 = figwheel.client.heads_up.ensure_container.call(null);
var map__34271__$1 = ((((!((map__34271 == null)))?((((map__34271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34271):map__34271);
var content_area_el = cljs.core.get.call(null,map__34271__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__26994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto__){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto__){
return (function (state_34319){
var state_val_34320 = (state_34319[(1)]);
if((state_val_34320 === (1))){
var inst_34302 = (state_34319[(7)]);
var inst_34302__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34303 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34304 = ["0.0"];
var inst_34305 = cljs.core.PersistentHashMap.fromArrays(inst_34303,inst_34304);
var inst_34306 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34302__$1,inst_34305);
var inst_34307 = cljs.core.async.timeout.call(null,(300));
var state_34319__$1 = (function (){var statearr_34321 = state_34319;
(statearr_34321[(8)] = inst_34306);

(statearr_34321[(7)] = inst_34302__$1);

return statearr_34321;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34319__$1,(2),inst_34307);
} else {
if((state_val_34320 === (2))){
var inst_34302 = (state_34319[(7)]);
var inst_34309 = (state_34319[(2)]);
var inst_34310 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_34311 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_34312 = cljs.core.PersistentHashMap.fromArrays(inst_34310,inst_34311);
var inst_34313 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34302,inst_34312);
var inst_34314 = cljs.core.async.timeout.call(null,(200));
var state_34319__$1 = (function (){var statearr_34322 = state_34319;
(statearr_34322[(9)] = inst_34313);

(statearr_34322[(10)] = inst_34309);

return statearr_34322;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34319__$1,(3),inst_34314);
} else {
if((state_val_34320 === (3))){
var inst_34302 = (state_34319[(7)]);
var inst_34316 = (state_34319[(2)]);
var inst_34317 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34302,"");
var state_34319__$1 = (function (){var statearr_34323 = state_34319;
(statearr_34323[(11)] = inst_34316);

return statearr_34323;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34319__$1,inst_34317);
} else {
return null;
}
}
}
});})(c__26994__auto__))
;
return ((function (switch__26882__auto__,c__26994__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__26883__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__26883__auto____0 = (function (){
var statearr_34327 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34327[(0)] = figwheel$client$heads_up$clear_$_state_machine__26883__auto__);

(statearr_34327[(1)] = (1));

return statearr_34327;
});
var figwheel$client$heads_up$clear_$_state_machine__26883__auto____1 = (function (state_34319){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_34319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e34328){if((e34328 instanceof Object)){
var ex__26886__auto__ = e34328;
var statearr_34329_34331 = state_34319;
(statearr_34329_34331[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34332 = state_34319;
state_34319 = G__34332;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__26883__auto__ = function(state_34319){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__26883__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__26883__auto____1.call(this,state_34319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__26883__auto____0;
figwheel$client$heads_up$clear_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__26883__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto__))
})();
var state__26996__auto__ = (function (){var statearr_34330 = f__26995__auto__.call(null);
(statearr_34330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto__);

return statearr_34330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto__))
);

return c__26994__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__26994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26994__auto__){
return (function (){
var f__26995__auto__ = (function (){var switch__26882__auto__ = ((function (c__26994__auto__){
return (function (state_34364){
var state_val_34365 = (state_34364[(1)]);
if((state_val_34365 === (1))){
var inst_34354 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_34364__$1 = state_34364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34364__$1,(2),inst_34354);
} else {
if((state_val_34365 === (2))){
var inst_34356 = (state_34364[(2)]);
var inst_34357 = cljs.core.async.timeout.call(null,(400));
var state_34364__$1 = (function (){var statearr_34366 = state_34364;
(statearr_34366[(7)] = inst_34356);

return statearr_34366;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34364__$1,(3),inst_34357);
} else {
if((state_val_34365 === (3))){
var inst_34359 = (state_34364[(2)]);
var inst_34360 = figwheel.client.heads_up.clear.call(null);
var state_34364__$1 = (function (){var statearr_34367 = state_34364;
(statearr_34367[(8)] = inst_34359);

return statearr_34367;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34364__$1,(4),inst_34360);
} else {
if((state_val_34365 === (4))){
var inst_34362 = (state_34364[(2)]);
var state_34364__$1 = state_34364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34364__$1,inst_34362);
} else {
return null;
}
}
}
}
});})(c__26994__auto__))
;
return ((function (switch__26882__auto__,c__26994__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__26883__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__26883__auto____0 = (function (){
var statearr_34371 = [null,null,null,null,null,null,null,null,null];
(statearr_34371[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__26883__auto__);

(statearr_34371[(1)] = (1));

return statearr_34371;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__26883__auto____1 = (function (state_34364){
while(true){
var ret_value__26884__auto__ = (function (){try{while(true){
var result__26885__auto__ = switch__26882__auto__.call(null,state_34364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26885__auto__;
}
break;
}
}catch (e34372){if((e34372 instanceof Object)){
var ex__26886__auto__ = e34372;
var statearr_34373_34375 = state_34364;
(statearr_34373_34375[(5)] = ex__26886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34376 = state_34364;
state_34364 = G__34376;
continue;
} else {
return ret_value__26884__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__26883__auto__ = function(state_34364){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__26883__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__26883__auto____1.call(this,state_34364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__26883__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__26883__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__26883__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__26883__auto__;
})()
;})(switch__26882__auto__,c__26994__auto__))
})();
var state__26996__auto__ = (function (){var statearr_34374 = f__26995__auto__.call(null);
(statearr_34374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26994__auto__);

return statearr_34374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26996__auto__);
});})(c__26994__auto__))
);

return c__26994__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map