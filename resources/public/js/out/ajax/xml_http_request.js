// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__26944,handler){
var map__26945 = p__26944;
var map__26945__$1 = ((((!((map__26945 == null)))?((((map__26945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26945):map__26945);
var uri = cljs.core.get.call(null,map__26945__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__26945__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__26945__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__26945__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__26945__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__26945__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__26945__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__26945,map__26945__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__26943_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__26943_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__26945,map__26945__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___26953 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___26953)){
var response_type_26954 = temp__4425__auto___26953;
this$__$1.responseType = cljs.core.name.call(null,response_type_26954);
} else {
}

var seq__26947_26955 = cljs.core.seq.call(null,headers);
var chunk__26948_26956 = null;
var count__26949_26957 = (0);
var i__26950_26958 = (0);
while(true){
if((i__26950_26958 < count__26949_26957)){
var vec__26951_26959 = cljs.core._nth.call(null,chunk__26948_26956,i__26950_26958);
var k_26960 = cljs.core.nth.call(null,vec__26951_26959,(0),null);
var v_26961 = cljs.core.nth.call(null,vec__26951_26959,(1),null);
this$__$1.setRequestHeader(k_26960,v_26961);

var G__26962 = seq__26947_26955;
var G__26963 = chunk__26948_26956;
var G__26964 = count__26949_26957;
var G__26965 = (i__26950_26958 + (1));
seq__26947_26955 = G__26962;
chunk__26948_26956 = G__26963;
count__26949_26957 = G__26964;
i__26950_26958 = G__26965;
continue;
} else {
var temp__4425__auto___26966 = cljs.core.seq.call(null,seq__26947_26955);
if(temp__4425__auto___26966){
var seq__26947_26967__$1 = temp__4425__auto___26966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26947_26967__$1)){
var c__26620__auto___26968 = cljs.core.chunk_first.call(null,seq__26947_26967__$1);
var G__26969 = cljs.core.chunk_rest.call(null,seq__26947_26967__$1);
var G__26970 = c__26620__auto___26968;
var G__26971 = cljs.core.count.call(null,c__26620__auto___26968);
var G__26972 = (0);
seq__26947_26955 = G__26969;
chunk__26948_26956 = G__26970;
count__26949_26957 = G__26971;
i__26950_26958 = G__26972;
continue;
} else {
var vec__26952_26973 = cljs.core.first.call(null,seq__26947_26967__$1);
var k_26974 = cljs.core.nth.call(null,vec__26952_26973,(0),null);
var v_26975 = cljs.core.nth.call(null,vec__26952_26973,(1),null);
this$__$1.setRequestHeader(k_26974,v_26975);

var G__26976 = cljs.core.next.call(null,seq__26947_26967__$1);
var G__26977 = null;
var G__26978 = (0);
var G__26979 = (0);
seq__26947_26955 = G__26976;
chunk__26948_26956 = G__26977;
count__26949_26957 = G__26978;
i__26950_26958 = G__26979;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__25809__auto__ = body;
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
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