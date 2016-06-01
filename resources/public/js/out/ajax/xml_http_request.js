// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__26947,handler){
var map__26948 = p__26947;
var map__26948__$1 = ((((!((map__26948 == null)))?((((map__26948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26948):map__26948);
var uri = cljs.core.get.call(null,map__26948__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__26948__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__26948__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__26948__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__26948__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__26948__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__26948__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__26948,map__26948__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__26946_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__26946_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__26948,map__26948__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___26956 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___26956)){
var response_type_26957 = temp__4425__auto___26956;
this$__$1.responseType = cljs.core.name.call(null,response_type_26957);
} else {
}

var seq__26950_26958 = cljs.core.seq.call(null,headers);
var chunk__26951_26959 = null;
var count__26952_26960 = (0);
var i__26953_26961 = (0);
while(true){
if((i__26953_26961 < count__26952_26960)){
var vec__26954_26962 = cljs.core._nth.call(null,chunk__26951_26959,i__26953_26961);
var k_26963 = cljs.core.nth.call(null,vec__26954_26962,(0),null);
var v_26964 = cljs.core.nth.call(null,vec__26954_26962,(1),null);
this$__$1.setRequestHeader(k_26963,v_26964);

var G__26965 = seq__26950_26958;
var G__26966 = chunk__26951_26959;
var G__26967 = count__26952_26960;
var G__26968 = (i__26953_26961 + (1));
seq__26950_26958 = G__26965;
chunk__26951_26959 = G__26966;
count__26952_26960 = G__26967;
i__26953_26961 = G__26968;
continue;
} else {
var temp__4425__auto___26969 = cljs.core.seq.call(null,seq__26950_26958);
if(temp__4425__auto___26969){
var seq__26950_26970__$1 = temp__4425__auto___26969;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26950_26970__$1)){
var c__26623__auto___26971 = cljs.core.chunk_first.call(null,seq__26950_26970__$1);
var G__26972 = cljs.core.chunk_rest.call(null,seq__26950_26970__$1);
var G__26973 = c__26623__auto___26971;
var G__26974 = cljs.core.count.call(null,c__26623__auto___26971);
var G__26975 = (0);
seq__26950_26958 = G__26972;
chunk__26951_26959 = G__26973;
count__26952_26960 = G__26974;
i__26953_26961 = G__26975;
continue;
} else {
var vec__26955_26976 = cljs.core.first.call(null,seq__26950_26970__$1);
var k_26977 = cljs.core.nth.call(null,vec__26955_26976,(0),null);
var v_26978 = cljs.core.nth.call(null,vec__26955_26976,(1),null);
this$__$1.setRequestHeader(k_26977,v_26978);

var G__26979 = cljs.core.next.call(null,seq__26950_26970__$1);
var G__26980 = null;
var G__26981 = (0);
var G__26982 = (0);
seq__26950_26958 = G__26979;
chunk__26951_26959 = G__26980;
count__26952_26960 = G__26981;
i__26953_26961 = G__26982;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__25812__auto__ = body;
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
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