// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__27049,handler){
var map__27050 = p__27049;
var map__27050__$1 = ((((!((map__27050 == null)))?((((map__27050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27050):map__27050);
var uri = cljs.core.get.call(null,map__27050__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__27050__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__27050__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__27050__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__27050__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__27050__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__27050__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__27050,map__27050__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__27048_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__27048_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__27050,map__27050__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___27058 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___27058)){
var response_type_27059 = temp__4425__auto___27058;
this$__$1.responseType = cljs.core.name.call(null,response_type_27059);
} else {
}

var seq__27052_27060 = cljs.core.seq.call(null,headers);
var chunk__27053_27061 = null;
var count__27054_27062 = (0);
var i__27055_27063 = (0);
while(true){
if((i__27055_27063 < count__27054_27062)){
var vec__27056_27064 = cljs.core._nth.call(null,chunk__27053_27061,i__27055_27063);
var k_27065 = cljs.core.nth.call(null,vec__27056_27064,(0),null);
var v_27066 = cljs.core.nth.call(null,vec__27056_27064,(1),null);
this$__$1.setRequestHeader(k_27065,v_27066);

var G__27067 = seq__27052_27060;
var G__27068 = chunk__27053_27061;
var G__27069 = count__27054_27062;
var G__27070 = (i__27055_27063 + (1));
seq__27052_27060 = G__27067;
chunk__27053_27061 = G__27068;
count__27054_27062 = G__27069;
i__27055_27063 = G__27070;
continue;
} else {
var temp__4425__auto___27071 = cljs.core.seq.call(null,seq__27052_27060);
if(temp__4425__auto___27071){
var seq__27052_27072__$1 = temp__4425__auto___27071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27052_27072__$1)){
var c__26725__auto___27073 = cljs.core.chunk_first.call(null,seq__27052_27072__$1);
var G__27074 = cljs.core.chunk_rest.call(null,seq__27052_27072__$1);
var G__27075 = c__26725__auto___27073;
var G__27076 = cljs.core.count.call(null,c__26725__auto___27073);
var G__27077 = (0);
seq__27052_27060 = G__27074;
chunk__27053_27061 = G__27075;
count__27054_27062 = G__27076;
i__27055_27063 = G__27077;
continue;
} else {
var vec__27057_27078 = cljs.core.first.call(null,seq__27052_27072__$1);
var k_27079 = cljs.core.nth.call(null,vec__27057_27078,(0),null);
var v_27080 = cljs.core.nth.call(null,vec__27057_27078,(1),null);
this$__$1.setRequestHeader(k_27079,v_27080);

var G__27081 = cljs.core.next.call(null,seq__27052_27072__$1);
var G__27082 = null;
var G__27083 = (0);
var G__27084 = (0);
seq__27052_27060 = G__27081;
chunk__27053_27061 = G__27082;
count__27054_27062 = G__27083;
i__27055_27063 = G__27084;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__25914__auto__ = body;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map