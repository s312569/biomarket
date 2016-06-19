// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__27015,handler){
var map__27016 = p__27015;
var map__27016__$1 = ((((!((map__27016 == null)))?((((map__27016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27016):map__27016);
var uri = cljs.core.get.call(null,map__27016__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__27016__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__27016__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__27016__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__27016__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__27016__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__27016__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__27016,map__27016__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__27014_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__27014_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__27016,map__27016__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___27024 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___27024)){
var response_type_27025 = temp__4425__auto___27024;
this$__$1.responseType = cljs.core.name.call(null,response_type_27025);
} else {
}

var seq__27018_27026 = cljs.core.seq.call(null,headers);
var chunk__27019_27027 = null;
var count__27020_27028 = (0);
var i__27021_27029 = (0);
while(true){
if((i__27021_27029 < count__27020_27028)){
var vec__27022_27030 = cljs.core._nth.call(null,chunk__27019_27027,i__27021_27029);
var k_27031 = cljs.core.nth.call(null,vec__27022_27030,(0),null);
var v_27032 = cljs.core.nth.call(null,vec__27022_27030,(1),null);
this$__$1.setRequestHeader(k_27031,v_27032);

var G__27033 = seq__27018_27026;
var G__27034 = chunk__27019_27027;
var G__27035 = count__27020_27028;
var G__27036 = (i__27021_27029 + (1));
seq__27018_27026 = G__27033;
chunk__27019_27027 = G__27034;
count__27020_27028 = G__27035;
i__27021_27029 = G__27036;
continue;
} else {
var temp__4425__auto___27037 = cljs.core.seq.call(null,seq__27018_27026);
if(temp__4425__auto___27037){
var seq__27018_27038__$1 = temp__4425__auto___27037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27018_27038__$1)){
var c__26691__auto___27039 = cljs.core.chunk_first.call(null,seq__27018_27038__$1);
var G__27040 = cljs.core.chunk_rest.call(null,seq__27018_27038__$1);
var G__27041 = c__26691__auto___27039;
var G__27042 = cljs.core.count.call(null,c__26691__auto___27039);
var G__27043 = (0);
seq__27018_27026 = G__27040;
chunk__27019_27027 = G__27041;
count__27020_27028 = G__27042;
i__27021_27029 = G__27043;
continue;
} else {
var vec__27023_27044 = cljs.core.first.call(null,seq__27018_27038__$1);
var k_27045 = cljs.core.nth.call(null,vec__27023_27044,(0),null);
var v_27046 = cljs.core.nth.call(null,vec__27023_27044,(1),null);
this$__$1.setRequestHeader(k_27045,v_27046);

var G__27047 = cljs.core.next.call(null,seq__27018_27038__$1);
var G__27048 = null;
var G__27049 = (0);
var G__27050 = (0);
seq__27018_27026 = G__27047;
chunk__27019_27027 = G__27048;
count__27020_27028 = G__27049;
i__27021_27029 = G__27050;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__25880__auto__ = body;
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
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