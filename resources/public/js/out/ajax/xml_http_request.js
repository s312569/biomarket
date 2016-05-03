// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__22915,handler){
var map__22916 = p__22915;
var map__22916__$1 = ((((!((map__22916 == null)))?((((map__22916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22916):map__22916);
var uri = cljs.core.get.call(null,map__22916__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__22916__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__22916__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__22916__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__22916__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__22916__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__22916__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__22916,map__22916__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__22914_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__22914_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__22916,map__22916__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___22924 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___22924)){
var response_type_22925 = temp__4425__auto___22924;
this$__$1.responseType = cljs.core.name.call(null,response_type_22925);
} else {
}

var seq__22918_22926 = cljs.core.seq.call(null,headers);
var chunk__22919_22927 = null;
var count__22920_22928 = (0);
var i__22921_22929 = (0);
while(true){
if((i__22921_22929 < count__22920_22928)){
var vec__22922_22930 = cljs.core._nth.call(null,chunk__22919_22927,i__22921_22929);
var k_22931 = cljs.core.nth.call(null,vec__22922_22930,(0),null);
var v_22932 = cljs.core.nth.call(null,vec__22922_22930,(1),null);
this$__$1.setRequestHeader(k_22931,v_22932);

var G__22933 = seq__22918_22926;
var G__22934 = chunk__22919_22927;
var G__22935 = count__22920_22928;
var G__22936 = (i__22921_22929 + (1));
seq__22918_22926 = G__22933;
chunk__22919_22927 = G__22934;
count__22920_22928 = G__22935;
i__22921_22929 = G__22936;
continue;
} else {
var temp__4425__auto___22937 = cljs.core.seq.call(null,seq__22918_22926);
if(temp__4425__auto___22937){
var seq__22918_22938__$1 = temp__4425__auto___22937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22918_22938__$1)){
var c__22591__auto___22939 = cljs.core.chunk_first.call(null,seq__22918_22938__$1);
var G__22940 = cljs.core.chunk_rest.call(null,seq__22918_22938__$1);
var G__22941 = c__22591__auto___22939;
var G__22942 = cljs.core.count.call(null,c__22591__auto___22939);
var G__22943 = (0);
seq__22918_22926 = G__22940;
chunk__22919_22927 = G__22941;
count__22920_22928 = G__22942;
i__22921_22929 = G__22943;
continue;
} else {
var vec__22923_22944 = cljs.core.first.call(null,seq__22918_22938__$1);
var k_22945 = cljs.core.nth.call(null,vec__22923_22944,(0),null);
var v_22946 = cljs.core.nth.call(null,vec__22923_22944,(1),null);
this$__$1.setRequestHeader(k_22945,v_22946);

var G__22947 = cljs.core.next.call(null,seq__22918_22938__$1);
var G__22948 = null;
var G__22949 = (0);
var G__22950 = (0);
seq__22918_22926 = G__22947;
chunk__22919_22927 = G__22948;
count__22920_22928 = G__22949;
i__22921_22929 = G__22950;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__21780__auto__ = body;
if(cljs.core.truth_(or__21780__auto__)){
return or__21780__auto__;
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