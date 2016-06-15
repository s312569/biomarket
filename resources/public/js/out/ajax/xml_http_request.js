// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__25224,handler){
var map__25225 = p__25224;
var map__25225__$1 = ((((!((map__25225 == null)))?((((map__25225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25225):map__25225);
var uri = cljs.core.get.call(null,map__25225__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__25225__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__25225__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__25225__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__25225__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__25225__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__25225__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__25225,map__25225__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__25223_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__25223_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__25225,map__25225__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___25233 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___25233)){
var response_type_25234 = temp__4425__auto___25233;
this$__$1.responseType = cljs.core.name.call(null,response_type_25234);
} else {
}

var seq__25227_25235 = cljs.core.seq.call(null,headers);
var chunk__25228_25236 = null;
var count__25229_25237 = (0);
var i__25230_25238 = (0);
while(true){
if((i__25230_25238 < count__25229_25237)){
var vec__25231_25239 = cljs.core._nth.call(null,chunk__25228_25236,i__25230_25238);
var k_25240 = cljs.core.nth.call(null,vec__25231_25239,(0),null);
var v_25241 = cljs.core.nth.call(null,vec__25231_25239,(1),null);
this$__$1.setRequestHeader(k_25240,v_25241);

var G__25242 = seq__25227_25235;
var G__25243 = chunk__25228_25236;
var G__25244 = count__25229_25237;
var G__25245 = (i__25230_25238 + (1));
seq__25227_25235 = G__25242;
chunk__25228_25236 = G__25243;
count__25229_25237 = G__25244;
i__25230_25238 = G__25245;
continue;
} else {
var temp__4425__auto___25246 = cljs.core.seq.call(null,seq__25227_25235);
if(temp__4425__auto___25246){
var seq__25227_25247__$1 = temp__4425__auto___25246;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25227_25247__$1)){
var c__24900__auto___25248 = cljs.core.chunk_first.call(null,seq__25227_25247__$1);
var G__25249 = cljs.core.chunk_rest.call(null,seq__25227_25247__$1);
var G__25250 = c__24900__auto___25248;
var G__25251 = cljs.core.count.call(null,c__24900__auto___25248);
var G__25252 = (0);
seq__25227_25235 = G__25249;
chunk__25228_25236 = G__25250;
count__25229_25237 = G__25251;
i__25230_25238 = G__25252;
continue;
} else {
var vec__25232_25253 = cljs.core.first.call(null,seq__25227_25247__$1);
var k_25254 = cljs.core.nth.call(null,vec__25232_25253,(0),null);
var v_25255 = cljs.core.nth.call(null,vec__25232_25253,(1),null);
this$__$1.setRequestHeader(k_25254,v_25255);

var G__25256 = cljs.core.next.call(null,seq__25227_25247__$1);
var G__25257 = null;
var G__25258 = (0);
var G__25259 = (0);
seq__25227_25235 = G__25256;
chunk__25228_25236 = G__25257;
count__25229_25237 = G__25258;
i__25230_25238 = G__25259;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__24089__auto__ = body;
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
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